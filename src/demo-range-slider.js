import Template from './_template.js';


export default class DemoRangeSlider extends HTMLElement {

  constructor() {
    super();
    console.log("(DEMO) DemoRangeSlider.constructor()");

    // Attach Shadow DOM
    this._sR = this.attachShadow({mode: 'open'});

    // Properties
    const props = {
      min: this.getAttribute('min'),
      max: this.getAttribute('max'),
      current_min: this.getAttribute('current-min'),
      current_max: this.getAttribute('current-max'),
      custom_event_name: this.getAttribute('cevt-name'),
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
    console.log("(DEMO) DemoRangeSlider.attributeChangedCallback()");
    switch(name) {
      case 'layout':
        this._content = this._render(newVal);
        break;
    }
}


  // *** Dis- / Connection ***

  connectedCallback() {
    console.log("(DEMO) DemoRangeSlider.connectedCallback()");
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

  get min() {
    return parseInt(this.getAttribute("min"));
  }
  
  set min(val) {
    this.setAttribute("min", val);
  }

  get max() {
    return parseInt(this.getAttribute("max"));
  }
  
  set max(val) {
    this.setAttribute("max", val);
  }

  get current_min() {
    return parseInt(this.getAttribute("current-min"));
  }
  
  set current_min(val) {
    this.setAttribute("current-min", val);
  }

  get current_max() {
    return parseInt(this.getAttribute("current-max"));
  }
  
  set current_max(val) {
    this.setAttribute("current-max", val);
  }

  get custom_event_name() {
    return this.getAttribute("cevt-name");
  }
  
  set custom_event_name(val) {
    this.setAttribute("cevt-name", val);
  }

  

  
  // *** Methods ***

  _render(layout) {
    console.log("(DEMO) DemoRangeSlider._render()");

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


    // --- Initialize sliders ---

    // Init sliders
    this._dom.slider_low.value = this.current_min;
    this._dom.slider_low.setAttribute('value', this.current_min);
    this._dom.slider_high.value = this.current_max;
    this._dom.slider_high.setAttribute('value', this.current_max);

    // Calc weld
    const weld = (this.current_min + this.current_max) / 2;
    
    // Set @min and @max boundaries
    this._dom.slider_low.setAttribute('min', this.min);
    this._dom.slider_low.setAttribute('max', weld);
    this._dom.slider_high.setAttribute('min', weld);
    this._dom.slider_high.setAttribute('max', this.max);


    // --- Initialize forms ---

    // Init forms
    this._dom.form_low.value = this.current_min;
    this._dom.form_high.value = this.current_max;

    // Set @min and @max boundaries
    this._dom.form_low.setAttribute('min', this.min);
    this._dom.form_low.setAttribute('max', this.current_max);
    this._dom.form_high.setAttribute('min', this.current_min);
    this._dom.form_high.setAttribute('max', this.max);


    // --- Event listener ---
    
    // Listen on wrapper element for 'input'
    this._dom.wrapper.addEventListener('input', (evt) => this._update(evt));


    // --- Redraw ---

    this._redraw(weld);

    return this._dom.wrapper;
  }


  _update(evt) {

    // --- Set attributes --- 
    
    // ...depending on dispatcher: slider or form?
    switch(evt.target.name) {
      case "slider_low":
        this.current_min = this._dom.slider_low.value;
        break;
      case "slider_high":
        this.current_max = this._dom.slider_high.value;
        break;
      case "form_low":
        this.current_min = this._dom.form_low.value;
        break;
      case "form_high":
        this.current_max = this._dom.form_high.value;
        break;
    }

    
    // --- Update sliders ---

    // Update values
    this._dom.slider_low.value = this.current_min;
    this._dom.slider_low.setAttribute('value', this.current_min);
    this._dom.slider_high.value = this.current_max;
    this._dom.slider_high.setAttribute('value', this.current_max);

    // Recalc weld
    const weld = (this.current_min + this.current_max) / 2;

    // Set 'inner' @min and @max boundaries
    this._dom.slider_low.setAttribute('max', weld);
    this._dom.slider_high.setAttribute('min', weld);


    // --- Update forms ---

    // Update values
    this._dom.form_low.value = this.current_min;
    this._dom.form_high.value = this.current_max;

    // Set 'inner' @min and @max boundaries
    this._dom.form_low.setAttribute('max', this.current_max);
    this._dom.form_high.setAttribute('min', this.current_min);


    // --- Dispatch custom event ---

    this._dispatchCustomEvent();


    // --- Redraw ---

    this._redraw(weld);
  }


  // Redraw based on updated (= current) values
  _redraw(weld) {
    
    // Length ratio slider_low : slider_high
    const ratio = weld / this.max;

    const percentage_slider_low = Math.floor(ratio * 99);
    const percentage_slider_high = Math.floor(99 - ratio * 99);

    // Redraw sliders
    this._dom.slider_low.style.width = percentage_slider_low + "%";
    this._dom.slider_high.style.width = percentage_slider_high + "%";
  }


  // *** Methods (event related) ***

  _dispatchCustomEvent() {
    
    // Create custom event
    const ce = new CustomEvent(this.custom_event_name, {
      bubbles: true,
      composed: true,
      detail: {
        range_min: this.current_min,
        range_max: this.current_max,
      },
    })

    // Dispatch
    this.dispatchEvent(ce);

  }

}

// Define custom element (avoid re-initialization)
if (!customElements.get("demo-range-slider")) {
  customElements.define("demo-range-slider", DemoRangeSlider);
}