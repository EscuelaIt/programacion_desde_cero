class HolaMundo extends HTMLElement {
  constructor() {
    super();
    var shadowRoot = this.attachShadow({mode: 'open'});
    shadowRoot.innerHTML = `
      <style>
        p {
          color: blue;
        }
      </style>
      <h1>Hola mundo</h1>
      <p>Esto es Web Components</p>  
    `
  }
}

customElements.define('hola-mundo', HolaMundo);
