import { LitElement, html, css } from 'lit-element';
import 'dile-checkbox/dile-checkbox';

class MiContacto  extends LitElement {

  static get styles() {
    return css`
      :host {
        display: block;
      }
      div {
        border: 1px solid #e5e5e5;
        border-radius: 3px;
        padding: 10px;
        display: flex;
        align-items: center;
        background-color: #f0f5ff;
        cursor: pointer;
        margin-bottom: 15px;
      }
      section {
        display: flex;
        flex-direction: column;
        margin-left: 15px;
      }
      .telefono {
        font-size: 0.9em;
      }
      .nombre {
        margin-bottom: 5px;
      }
      .seleccionado {
        background-color: #d0e0ff;
        font-weight: bold;
        border-color: #3366ff;
      }
      dile-checkbox {
        --dile-checkbox-checked-color: #3366ff;
      }
    `;
  }

  static get properties() {
    return {
      nombre: { type: String },
      telefono: { type: String },
      seleccionado: { type: Boolean },
    };
  }

  constructor() {
    super();
    this.nombre = "miguel"
    this.seleccionado = false;
  }

  render() {
    return html`
      <div @click="${this.hacerClic}" class="${ this.seleccionado ? 'seleccionado' : '' }">
        <dile-checkbox .checked="${this.seleccionado}"></dile-checkbox>
        <section>
          <span class="nombre">${this.nombre}</span>
          <span class="telefono">${this.telefono}</span>
        </section>
      </div>
    `;
  }

  hacerClic() {
    this.seleccionado = ! this.seleccionado;
  }
}

customElements.define('mi-contacto', MiContacto);