import Template from './_template.js';


export default class DemoPoemList extends HTMLElement {

  constructor() {
    super();
    console.log("(DEMO) DemoPoemList.constructor()");

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
    console.log("(DEMO) DemoPoemList.attributeChangedCallback()");
    switch(name) {
      case 'layout':
        this._content = this._render(newVal);
        break;
    }
}


  // *** Dis- / Connection ***

  connectedCallback() {
    console.log("(DEMO) DemoPoemList.connectedCallback()");
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


  // *** Methods (public) ***
  
  draw(objs) {
    console.log("(DEBUG) DemoPoemList.draw()");

    // Remove all contents
    this._dom.wrapper.innerHTML = "";

    // Create list items
    for (let i = 0; i < objs.length; i++) {
      let item = document.createElement("div");
      item.textContent = objs[i].year + "; " + objs[i].title;
      this._dom.wrapper.appendChild(item);
    }

  }

  
  // *** Methods (private) ***

  _render(layout) {
    console.log("(DEMO) DemoPoemList._render()");

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


    // --- Initialize ---

    // Parse dataset and draw
    this._readDataset(this.dataset);

    return this._dom.wrapper;
  }


  // Read dataset from given URL
  _readDataset(url) {
    console.log("(DEBUG) DemoPoemList._readDataset(): url = " + url);

    let xhr = new XMLHttpRequest();
    xhr.open("GET", url, true);
    xhr.send();

    xhr.onload = () => {
      if (xhr.status != 200) { 
        // Analyze HTTP status of the response
        console.log(`Error ${xhr.status}: ${xhr.statusText}`); // e.g. 404: Not Found
      } else { 
        // Show the result
        console.log(`Done, got ${xhr.response.length} bytes`); // response is the server response
        
        // Redraw list
        this.draw(this._refineDataset(xhr.response));
      }
    };

    xhr.onprogress = function(event) {
      if (event.lengthComputable) {
        console.log(`Received ${event.loaded} of ${event.total} bytes`);
      } else {
        console.log(`Received ${event.loaded} bytes`); // No content-length
      }
    };

    xhr.onerror = function() {
      console.log("Request failed");
    };

  }


  // 
  _refineDataset(dataset) {

    return JSON.parse(dataset).works;

  }

}

// Define custom element (avoid re-initialization)
if (!customElements.get("demo-poem-list")) {
  customElements.define("demo-poem-list", DemoPoemList);
}