import { LitElement, html, css } from 'lit';

export class PolarisChip extends LitElement {
  static get properties() {
    return {
      name: { type: String },
      link: { type: String },
      active: { type: Boolean, reflect: true }
    };
  }

  static get styles() {
    return css`
      :host {
        display: inline-block;
        margin: 0 12px 12px 0;

      }

      .container {  display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        grid-template-rows: 1fr 1fr 1fr;
        gap: 0px 0px;
        grid-auto-flow: row;
        grid-template-areas:
          ". . ."
          ". . ."
          ". . .";
      }
      
      
      html, body , .container {
        height: 100%;
        margin: 0;
      }
      
      
      }
      
      
      .link:hover,
      :host([active]) .link{
        background-color: #444;
        border: 2px solid #e4e5e7;
        border-radius: 2px;
        color: #003;
        cursor: pointer;
      }

      .link{
        font-weight: bold;
        text-decoration: none;
        padding: 8px 4px;
        border: 2px solid #444;
        color: #444;
        font-size: 16px;
      }
    `;
  }

  constructor() {
    super();
    this.name = 'Football';
    this.link = ""
  }

  render() {
    return html`<a class="link" href="${this.link}"><slot>${this.name}</slot></span>`;
  }
}
