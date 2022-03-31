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
      range_slider: scope.getElementById('range-slider'),
      poem_list: scope.getElementById('poem-list'),
    }
  },

  html(p) {
    return `
      <template data-layout="default">
        <div id="wrapper" class="demo-slider demo-range-slider">
          <demo-range-slider id="range-slider" layout="default" min="0" max="100" current-min="20" current-max="80" cevt-name="demo-range-changed"> </demo-range-slider>
          <demo-poem-list id="poem-list" layout="default" dataset="${p.dataset}"> </demo-poem-list>
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