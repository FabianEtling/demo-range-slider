import styleText from './_style.scss';

export default {
  render(props) {
    return `
      ${this.css(props)}
      ${this.html(props)}
    `;
  },

  mapDOM(scope) {
    return {
      wrapper: scope.getElementById('wrapper'),
      slider_low: scope.getElementById('slider_low'),
      slider_high: scope.getElementById('slider_high'),
      form_low: scope.getElementById('form_low'),
      form_high: scope.getElementById('form_high'),
    }
  },

  html(p) {
    return `
      <template data-layout="default">
        <div id="wrapper" class="demo-slider demo-range-slider">
          <div id="sliders">
            <input id="slider_low" class="demo-slider__input input-range" type="range" min="0" max="50" name="slider_low"><input id="slider_high" class="demo-slider__input input-range" type="range" min="50" max="100" name="slider_high">
          </div>
          <div id="input-forms">
            <input id="form_low" class="demo-slider__input input-number" type="number" name="form_low"> </input>
            <input id="form_high" class="demo-slider__input input-number" type="number" name="form_high"> </input>
          </div>
        </div>
      </template>
      <template data-layout="simple">
        <div id="wrapper" class="demo-slider demo-range-slider">
          <div id="sliders">
            <input id="slider_low" class="demo-slider__input input-range" type="range" min="0" max="50" name="slider_low"><input id="slider_high" class="demo-slider__input input-range" type="range" min="50" max="100" name="slider_high">
          </div>
          <div id="input-forms" style="display:none">
            <input id="form_low" class="demo-slider__input input-number" type="number" name="form_low"> </input>
            <input id="form_high" class="demo-slider__input input-number" type="number" name="form_high"> </input>
          </div>
        </div>
      </template>
      `;
  },

  css(p) {
    return `
      ${styleText}
    `;
  }
}