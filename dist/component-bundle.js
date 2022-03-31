(()=>{"use strict";function t(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}var e=new(function(){function e(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),this._listeners=[]}var r,n;return r=e,(n=[{key:"register",value:function(t,e){var r={type:t,callback:e};return this._listeners.push(r),r}},{key:"fire",value:function(t){this._listeners.forEach((function(e){t.type===e.type&&e.callback.apply(this,[t])}))}}])&&t(r.prototype,n),Object.defineProperty(r,"prototype",{writable:!1}),e}());function r(t){return r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},r(t)}function n(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function o(t,e){if(e&&("object"===r(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}function i(t){var e="function"==typeof Map?new Map:void 0;return i=function(t){if(null===t||(r=t,-1===Function.toString.call(r).indexOf("[native code]")))return t;var r;if("function"!=typeof t)throw new TypeError("Super expression must either be null or a function");if(void 0!==e){if(e.has(t))return e.get(t);e.set(t,n)}function n(){return a(t,arguments,l(this).constructor)}return n.prototype=Object.create(t.prototype,{constructor:{value:n,enumerable:!1,writable:!0,configurable:!0}}),s(n,t)},i(t)}function a(t,e,r){return a=u()?Reflect.construct:function(t,e,r){var n=[null];n.push.apply(n,e);var o=new(Function.bind.apply(t,n));return r&&s(o,r.prototype),o},a.apply(null,arguments)}function u(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}function s(t,e){return s=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t},s(t,e)}function l(t){return l=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)},l(t)}var c=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&s(t,e)}(p,t);var r,i,a,c,d,m=(r=p,i=u(),function(){var t,e=l(r);if(i){var n=l(this).constructor;t=Reflect.construct(e,arguments,n)}else t=e.apply(this,arguments);return o(this,t)});function p(){var t;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,p),t=m.call(this),console.log("(DEMO) DemoPoemFilter.constructor()"),t._sR=t.attachShadow({mode:"open"});var e={dataset:t.getAttribute("dataset")},r=document.createElement("style");return r.innerHTML="\n      ".concat(":host{--primary-color: #008bd2}:host demo-range-slider{--slider-thumb-color: var(--primary-color)}:host demo-poem-list{margin-top:2em;--list-item-color--hover: var(--primary-color)}","\n    "),t.insertAdjacentHTML("beforeend",'\n      <template data-layout="default">\n        <div id="wrapper" class="demo-slider demo-range-slider">\n          <demo-range-slider id="range-slider" layout="default" min="0" max="100" current-min="20" current-max="80" cevt-name="demo-range-changed"> </demo-range-slider>\n          <demo-poem-list id="poem-list" layout="default" dataset="'.concat(e.dataset,'"> </demo-poem-list>\n        </div>\n      </template>\n      ')),t._sR.appendChild(r),t._content=t._render(t.layout),t}return a=p,d=[{key:"observedAttributes",get:function(){return["layout"]}}],(c=[{key:"attributeChangedCallback",value:function(t,e,r){console.log("(DEMO) DemoPoemFilter.attributeChangedCallback()"),"layout"===t&&(this._content=this._render(r))}},{key:"connectedCallback",value:function(){console.log("(DEMO) DemoPoemFilter.connectedCallback()")}},{key:"disconnectedCallback",value:function(){}},{key:"layout",get:function(){return this.getAttribute("layout")},set:function(t){this.setAttribute("layout",t)}},{key:"dataset",get:function(){return this.getAttribute("dataset")},set:function(t){this.setAttribute("dataset",t)}},{key:"_render",value:function(t){var r,n=this;console.log("(DEMO) DemoPoemFilter._render()"),t||(t="default"),this.querySelector("template[data-layout="+t+"]")&&(this._content&&this._content.remove(),this._sR.appendChild(this.querySelector("template[data-layout="+t+"]").content.cloneNode(!0))),this._dom={wrapper:(r=this._sR).getElementById("wrapper"),range_slider:r.getElementById("range-slider"),poem_list:r.getElementById("poem-list")};var o=new XMLHttpRequest;return o.open("GET",this.dataset,!0),o.send(),o.onload=function(){if(200!=o.status)console.log("Error ".concat(o.status,": ").concat(o.statusText));else{console.log("Done, got ".concat(o.response.length," bytes")),n._poemObjs=JSON.parse(o.response).works;for(var t,r=Number.POSITIVE_INFINITY,i=Number.NEGATIVE_INFINITY,a=0;a<n._poemObjs.length;a++)(t=n._poemObjs[a].year)<r&&(r=t),t>i&&(i=t);n._dom.range_slider.setAttribute("min",r),n._dom.range_slider.setAttribute("max",i),n._dom.range_slider.setAttribute("current-min",r),n._dom.range_slider.setAttribute("current-max",i),n._dom.range_slider._render("default"),n._dom.poem_list.draw(n._poemObjs),e.register("demo-range-changed",(function(t){return n._update(t)}))}},o.onprogress=function(t){t.lengthComputable?console.log("Received ".concat(t.loaded," of ").concat(t.total," bytes")):console.log("Received ".concat(t.loaded," bytes"))},o.onerror=function(){console.log("Request failed")},this._dom.wrapper}},{key:"_update",value:function(t){var e=this._refineDataset(t.detail.range_min,t.detail.range_max);this._dom.poem_list.draw(e)}},{key:"_refineDataset",value:function(t,e){for(var r=[],n=0;n<this._poemObjs.length;n++)t<=this._poemObjs[n].year&&this._poemObjs[n].year<=e&&r.push(this._poemObjs[n]);return r}}])&&n(a.prototype,c),d&&n(a,d),Object.defineProperty(a,"prototype",{writable:!1}),p}(i(HTMLElement));customElements.get("demo-poem-filter")||customElements.define("demo-poem-filter",c);function d(t){return d="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},d(t)}function m(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function p(t,e){if(e&&("object"===d(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}function f(t){var e="function"==typeof Map?new Map:void 0;return f=function(t){if(null===t||(r=t,-1===Function.toString.call(r).indexOf("[native code]")))return t;var r;if("function"!=typeof t)throw new TypeError("Super expression must either be null or a function");if(void 0!==e){if(e.has(t))return e.get(t);e.set(t,n)}function n(){return h(t,arguments,b(this).constructor)}return n.prototype=Object.create(t.prototype,{constructor:{value:n,enumerable:!1,writable:!0,configurable:!0}}),y(n,t)},f(t)}function h(t,e,r){return h=_()?Reflect.construct:function(t,e,r){var n=[null];n.push.apply(n,e);var o=new(Function.bind.apply(t,n));return r&&y(o,r.prototype),o},h.apply(null,arguments)}function _(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}function y(t,e){return y=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t},y(t,e)}function b(t){return b=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)},b(t)}var g=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&y(t,e)}(u,t);var e,r,n,o,i,a=(e=u,r=_(),function(){var t,n=b(e);if(r){var o=b(this).constructor;t=Reflect.construct(n,arguments,o)}else t=n.apply(this,arguments);return p(this,t)});function u(){var t;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,u),t=a.call(this),console.log("(DEMO) DemoPoemList.constructor()"),t._sR=t.attachShadow({mode:"open"});t.getAttribute("dataset");var e=document.createElement("style");return e.innerHTML="\n      ".concat(":host{--list-item-color: #6b7c85;--list-item-color--hover: #008bd2;--list-item-background--hover: #d1d1d1}:host{display:block}:host .demo-poem-list div{color:var(--list-item-color)}:host .demo-poem-list div:hover{color:var(--list-item-color--hover);background-color:var(--list-item-background--hover)}","\n    "),t.insertAdjacentHTML("beforeend",'\n      <template data-layout="default">\n        <div id="wrapper" class="demo-poem-list">\n          \n        </div>\n      </template>\n      '),t._sR.appendChild(e),t._content=t._render(t.layout),t}return n=u,i=[{key:"observedAttributes",get:function(){return["layout"]}}],(o=[{key:"attributeChangedCallback",value:function(t,e,r){console.log("(DEMO) DemoPoemList.attributeChangedCallback()"),"layout"===t&&(this._content=this._render(r))}},{key:"connectedCallback",value:function(){console.log("(DEMO) DemoPoemList.connectedCallback()")}},{key:"disconnectedCallback",value:function(){}},{key:"layout",get:function(){return this.getAttribute("layout")},set:function(t){this.setAttribute("layout",t)}},{key:"dataset",get:function(){return this.getAttribute("dataset")},set:function(t){this.setAttribute("dataset",t)}},{key:"draw",value:function(t){console.log("(DEBUG) DemoPoemList.draw()"),this._dom.wrapper.innerHTML="";for(var e=0;e<t.length;e++){var r=document.createElement("div");r.textContent=t[e].year+"; "+t[e].title,this._dom.wrapper.appendChild(r)}}},{key:"_render",value:function(t){return console.log("(DEMO) DemoPoemList._render()"),t||(t="default"),this.querySelector("template[data-layout="+t+"]")&&(this._content&&this._content.remove(),this._sR.appendChild(this.querySelector("template[data-layout="+t+"]").content.cloneNode(!0))),this._dom={wrapper:this._sR.getElementById("wrapper")},this._readDataset(this.dataset),this._dom.wrapper}},{key:"_readDataset",value:function(t){var e=this;console.log("(DEBUG) DemoPoemList._readDataset(): url = "+t);var r=new XMLHttpRequest;r.open("GET",t,!0),r.send(),r.onload=function(){200!=r.status?console.log("Error ".concat(r.status,": ").concat(r.statusText)):(console.log("Done, got ".concat(r.response.length," bytes")),e.draw(e._refineDataset(r.response)))},r.onprogress=function(t){t.lengthComputable?console.log("Received ".concat(t.loaded," of ").concat(t.total," bytes")):console.log("Received ".concat(t.loaded," bytes"))},r.onerror=function(){console.log("Request failed")}}},{key:"_refineDataset",value:function(t){return JSON.parse(t).works}}])&&m(n.prototype,o),i&&m(n,i),Object.defineProperty(n,"prototype",{writable:!1}),u}(f(HTMLElement));customElements.get("demo-poem-list")||customElements.define("demo-poem-list",g);function v(t){return v="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},v(t)}function w(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function k(t,e){if(e&&("object"===v(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}function O(t){var e="function"==typeof Map?new Map:void 0;return O=function(t){if(null===t||(r=t,-1===Function.toString.call(r).indexOf("[native code]")))return t;var r;if("function"!=typeof t)throw new TypeError("Super expression must either be null or a function");if(void 0!==e){if(e.has(t))return e.get(t);e.set(t,n)}function n(){return E(t,arguments,j(this).constructor)}return n.prototype=Object.create(t.prototype,{constructor:{value:n,enumerable:!1,writable:!0,configurable:!0}}),A(n,t)},O(t)}function E(t,e,r){return E=x()?Reflect.construct:function(t,e,r){var n=[null];n.push.apply(n,e);var o=new(Function.bind.apply(t,n));return r&&A(o,r.prototype),o},E.apply(null,arguments)}function x(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}function A(t,e){return A=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t},A(t,e)}function j(t){return j=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)},j(t)}var R=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&A(t,e)}(s,t);var r,n,o,i,a,u=(r=s,n=x(),function(){var t,e=j(r);if(n){var o=j(this).constructor;t=Reflect.construct(e,arguments,o)}else t=e.apply(this,arguments);return k(this,t)});function s(){var t;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,s),t=u.call(this),console.log("(DEMO) DemoRangeSlider.constructor()"),t._sR=t.attachShadow({mode:"open"});t.getAttribute("min"),t.getAttribute("max"),t.getAttribute("current-min"),t.getAttribute("current-max"),t.getAttribute("cevt-name");var e=document.createElement("style");return e.innerHTML="\n      ".concat(":host{--slider-thumb-color: #008bd2;--slider-track-color: #d1d1d1;--slider-progress-color: #6b7c85}:host .demo-range-slider{width:100%}:host #sliders .input-range{margin:0}:host #input-forms{margin-top:40px}.input-range::-moz-range-thumb{width:15px;height:15px;background:var(--slider-thumb-color);border-radius:50%;border:none;outline:none}.input-range::-moz-range-progress{height:5px;border:none}.input-range::-moz-range-track{height:5px;border:none}#slider_low::-moz-range-progress{background-color:var(--slider-track-color)}#slider_low::-moz-range-track{background-color:var(--slider-progress-color)}#slider_high::-moz-range-progress{background-color:var(--slider-progress-color)}#slider_high::-moz-range-track{background-color:var(--slider-track-color)}","\n    "),t.insertAdjacentHTML("beforeend",'\n      <template data-layout="default">\n        <div id="wrapper" class="demo-slider demo-range-slider">\n          <div id="sliders">\n            <input id="slider_low" class="demo-slider__input input-range" type="range" min="0" max="50" name="slider_low"><input id="slider_high" class="demo-slider__input input-range" type="range" min="50" max="100" name="slider_high">\n          </div>\n          <div id="input-forms">\n            <input id="form_low" class="demo-slider__input input-number" type="number" name="form_low"> </input>\n            <input id="form_high" class="demo-slider__input input-number" type="number" name="form_high"> </input>\n          </div>\n        </div>\n      </template>\n      <template data-layout="simple">\n        <div id="wrapper" class="demo-slider demo-range-slider">\n          <div id="sliders">\n            <input id="slider_low" class="demo-slider__input input-range" type="range" min="0" max="50" name="slider_low"><input id="slider_high" class="demo-slider__input input-range" type="range" min="50" max="100" name="slider_high">\n          </div>\n          <div id="input-forms" style="display:none">\n            <input id="form_low" class="demo-slider__input input-number" type="number" name="form_low"> </input>\n            <input id="form_high" class="demo-slider__input input-number" type="number" name="form_high"> </input>\n          </div>\n        </div>\n      </template>\n      '),t._sR.appendChild(e),t._content=t._render(t.layout),t}return o=s,a=[{key:"observedAttributes",get:function(){return["layout"]}}],(i=[{key:"attributeChangedCallback",value:function(t,e,r){console.log("(DEMO) DemoRangeSlider.attributeChangedCallback()"),"layout"===t&&(this._content=this._render(r))}},{key:"connectedCallback",value:function(){console.log("(DEMO) DemoRangeSlider.connectedCallback()")}},{key:"disconnectedCallback",value:function(){}},{key:"layout",get:function(){return this.getAttribute("layout")},set:function(t){this.setAttribute("layout",t)}},{key:"min",get:function(){return parseInt(this.getAttribute("min"))},set:function(t){this.setAttribute("min",t)}},{key:"max",get:function(){return parseInt(this.getAttribute("max"))},set:function(t){this.setAttribute("max",t)}},{key:"current_min",get:function(){return parseInt(this.getAttribute("current-min"))},set:function(t){this.setAttribute("current-min",t)}},{key:"current_max",get:function(){return parseInt(this.getAttribute("current-max"))},set:function(t){this.setAttribute("current-max",t)}},{key:"custom_event_name",get:function(){return this.getAttribute("cevt-name")},set:function(t){this.setAttribute("cevt-name",t)}},{key:"_render",value:function(t){var e,r=this;console.log("(DEMO) DemoRangeSlider._render()"),t||(t="default"),this.querySelector("template[data-layout="+t+"]")&&(this._content&&this._content.remove(),this._sR.appendChild(this.querySelector("template[data-layout="+t+"]").content.cloneNode(!0))),this._dom={wrapper:(e=this._sR).getElementById("wrapper"),slider_low:e.getElementById("slider_low"),slider_high:e.getElementById("slider_high"),form_low:e.getElementById("form_low"),form_high:e.getElementById("form_high")};var n=(this.current_min+this.current_max)/2;return this._dom.slider_low.setAttribute("min",this.min),this._dom.slider_low.setAttribute("max",n),this._dom.slider_high.setAttribute("min",n),this._dom.slider_high.setAttribute("max",this.max),this._dom.slider_low.value=this.current_min,this._dom.slider_low.setAttribute("value",this.current_min),this._dom.slider_high.value=this.current_max,this._dom.slider_high.setAttribute("value",this.current_max),this._dom.form_low.value=this.current_min,this._dom.form_high.value=this.current_max,this._dom.form_low.setAttribute("min",this.min),this._dom.form_low.setAttribute("max",this.current_max),this._dom.form_high.setAttribute("min",this.current_min),this._dom.form_high.setAttribute("max",this.max),this._dom.wrapper.addEventListener("input",(function(t){return r._update(t)})),this._redraw(n),this._dom.wrapper}},{key:"_update",value:function(t){switch(t.target.name){case"slider_low":this.current_min=this._dom.slider_low.value;break;case"slider_high":this.current_max=this._dom.slider_high.value;break;case"form_low":this._dom.form_low.value>=this.min&&this._dom.form_low.value<this.current_max&&(this.current_min=this._dom.form_low.value);break;case"form_high":this._dom.form_high.value<=this.max&&this._dom.form_high.value>this.current_min&&(this.current_max=this._dom.form_high.value)}var e=(this.current_min+this.current_max)/2;this._dom.slider_low.setAttribute("max",e),this._dom.slider_high.setAttribute("min",e),this._dom.slider_low.value=this.current_min,this._dom.slider_low.setAttribute("value",this.current_min),this._dom.slider_high.value=this.current_max,this._dom.slider_high.setAttribute("value",this.current_max),this._dom.form_low.value=this.current_min,this._dom.form_high.value=this.current_max,this._dom.form_low.setAttribute("max",this.current_max),this._dom.form_high.setAttribute("min",this.current_min),this._dispatchCustomEvent(),this._redraw(e)}},{key:"_redraw",value:function(t){var e=(t-this.min)/(this.max-this.min),r=99*e,n=99-99*e;this._dom.slider_low.style.width=r+"%",this._dom.slider_high.style.width=n+"%"}},{key:"_dispatchCustomEvent",value:function(){var t=new CustomEvent(this.custom_event_name,{bubbles:!0,composed:!0,detail:{range_min:this.current_min,range_max:this.current_max}});e.fire(t)}}])&&w(o.prototype,i),a&&w(o,a),Object.defineProperty(o,"prototype",{writable:!1}),s}(O(HTMLElement));customElements.get("demo-range-slider")||customElements.define("demo-range-slider",R)})();