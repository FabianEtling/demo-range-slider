import Template from './_template.js';
import {eventBusStd} from '../demo-bus/bus-config.js';


export default class DemoPoemFilter extends HTMLElement {

  constructor() {
    super();
    console.log("(DEMO) DemoPoemFilter.constructor()");

    // Attach Shadow DOM
    this._sR = this.attachShadow({mode: 'open'});

    // Properties
    const props = {
      dataset: this.getAttribute('dataset'),
    };

    // Load style and templates
    const style = document.createElement('style');
    style.innerHTML = Template.css(props);
    this.insertAdjacentHTML('beforeend', Template.html(props));

    // Append style
    this._sR.appendChild(style);

    // Init component depending on @layout
    this._content = this._render(this.layout);

    // Do NOT add event listeners here (a re-rendering might be triggered by attributeChangedCallback() )
    
  }


  // *** Attributes ***

  static get observedAttributes() {
    return ['layout'];
  }

  attributeChangedCallback(name, oldVal, newVal) {
    console.log("(DEMO) DemoPoemFilter.attributeChangedCallback()");
    switch(name) {
      case 'layout':
        this._content = this._render(newVal);
        break;
    }
}


  // *** Dis- / Connection ***

  connectedCallback() {
    console.log("(DEMO) DemoPoemFilter.connectedCallback()");
  }

  disconnectedCallback() {
    // garbage collection
  }

  
  // *** Getters / Setters ***
  
  get layout() {
    return this.getAttribute("layout");
  }
  
  set layout(val) {
    this.setAttribute("layout", val);
  }

  get dataset() {
    return this.getAttribute("dataset");
  }
  
  set dataset(val) {
    this.setAttribute("dataset", val);
  }

  
  // *** Methods ***

  _render(layout) {
    console.log("(DEMO) DemoPoemFilter._render()");

    // --- Instantiate a template element ---

    // Default template (@data-layout)
    if (!layout) {
      layout = "default";
    }

    // Check if template is available
    if (this.querySelector('template[data-layout=' + layout + ']')) {

      // If component is already populated, clear content first
      if (this._content) {
        this._content.remove();
      }
      // Render component DOM
      this._sR.appendChild(this.querySelector('template[data-layout=' + layout + ']').content.cloneNode(true));
    }

    // Save component DOM references
    this._dom = Template.mapDOM(this._sR);


    // --- Get data ---

    let xhr = new XMLHttpRequest();
    xhr.open("GET", this.dataset, true);
    xhr.send();

    xhr.onload = () => {
      if (xhr.status != 200) { 
        // Analyze HTTP status of the response
        console.log(`Error ${xhr.status}: ${xhr.statusText}`); // e.g. 404: Not Found
      } else { 
        // Show the result
        console.log(`Done, got ${xhr.response.length} bytes`); // response is the server response

        // Object array
        this._poemObjs = JSON.parse(xhr.response).works;
        

        // --- Get parameters ---
        
        // Get filter range
        let lowerEnd = Number.POSITIVE_INFINITY;
        let higherEnd = Number.NEGATIVE_INFINITY;
        let tmp;
        for (let i = 0; i < this._poemObjs.length; i++) {
          tmp = this._poemObjs[i].year;
          if (tmp < lowerEnd) lowerEnd = tmp;
          if (tmp > higherEnd) higherEnd = tmp;
        }


        // --- Initialize range slider ---

        // Set properties
        this._dom.range_slider.setAttribute('min', lowerEnd);
        this._dom.range_slider.setAttribute('max', higherEnd);
        this._dom.range_slider.setAttribute('current-min', lowerEnd);
        this._dom.range_slider.setAttribute('current-max', higherEnd);

        // Render slider
        this._dom.range_slider._render('default');
        

        // --- Initialize poem list ---

        // Draw list with set of objects
        this._dom.poem_list.draw(this._poemObjs);
        

        // --- Event listener ---
    
        // Listen on wrapper element for 'input'...
        
        // ...using listener for events bubbling up the DOM
        // this._dom.wrapper.addEventListener('demo-range-changed', (evt) => this._update(evt));

        // ...using EventBus
        eventBusStd.register('demo-range-changed', (evt) => this._update(evt));
      }
    };

    xhr.onprogress = function(event) {
      if (event.lengthComputable) {
        console.log(`Received ${event.loaded} of ${event.total} bytes`);
      } else {
        console.log(`Received ${event.loaded} bytes`); // No content length
      }
    };

    xhr.onerror = function() {
      console.log("Request failed");
    };

    return this._dom.wrapper;
  }


  _update(evt) {

    // Refine dataset deending on min / max values from event
    let refinedPoemObjs = this._refineDataset(evt.detail.range_min, evt.detail.range_max);

    // redraw poem list
    this._dom.poem_list.draw(refinedPoemObjs);
  }


  // Refine objects according to range min / max values
  _refineDataset(min, max) {

    let refinedPoemObjs = [];

    // Keep only objects within the given range
    for (let i = 0; i < this._poemObjs.length; i++) {
      if (min <= this._poemObjs[i].year && this._poemObjs[i].year <= max) {
        refinedPoemObjs.push(this._poemObjs[i]);
      };
    }

    // Retuen refined array
    return refinedPoemObjs;
  }

}

// Define custom element (avoid re-initialization)
if (!customElements.get("demo-poem-filter")) {
  customElements.define("demo-poem-filter", DemoPoemFilter);
}