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
    }
  },

  html(p) {
    return `
      <template data-layout="default">
        <div id="wrapper" class="demo-poem-list">
          
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