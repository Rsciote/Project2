import { LitElement, html, css } from 'lit';

export class PolarisTile extends LitElement {
  static get properties() {
    return {
      
      name: { type: String },
      link: { type: String },
      active: { type: Boolean, reflect: true },
      color: {type: String},
      image: {type: String}
      
    };
  }

 
  

  static get styles() {
    return css`
      :host {
        --mycolor1: navy;
        --mycolor2: white;
        display: flex;
        align-items: center;
        justify-content: center; 
        margin: 0 auto;
        height: 30vh;
        background-color: var(--mycolor1);
        margin: 0 12px 12px 0;
      }

      
      .square{
        width: 100px;
        height:100px;
        border-radius 50%;
        
      }

      

      .link:focus,
      .link:hover,
      :host([active]) .link{
        background-color: #444;
        border: 2px solid #e4e5e7;
        border-radius: 2px;
        color: white;
        cursor: pointer;
        text-decoration-line: underline;
      }

      .link{
        font-weight: bold;
        text-decoration: none;
        padding: 8px 4px;
        color: white;
        font-size: 18px;
      }

      .image{
        width: 200px;
      }
    `;
  }

  constructor() {
    super();
    this.name = 'Football';
    this.link = "";
    this.color ="";
    this.image ="";
    
  }

  

  render() {
    return html`<a class="link" href="${this.link}"><slot>${this.name}</slot></span>`;
    
    
  }
  
}




// scrapped code
//   static get styles() {
//     return css`
//       :host {
//         display: grid;
//       }


//       .Tile {
//         width: 200px;
//         padding: 1px;
//         background-color: yellow;

//       }
//       .container {  
//         display: grid;
//         grid-template-columns: ... ... ....;
//         grid-template-rows: ... ... ...;

//       }
      
      
//       html, body , .container {
//         height: 100%;
//         margin: 4px;
//       }
      
      
//       }
      
      
//       .link:hover,
//       :host([active]) .link{
//         background-color: #444;
//         border: 20px solid #e4e5e7;
//         border-radius: 2px;
//         color: #003;
//         cursor: pointer;
//       }

//       .link{
//         font-weight: bold;
//         text-decoration: none;
//         padding: 8px 4px;
//         border: 2px solid #444;
//         color: #444;
//         font-size: 16px;
//       }

      
//     `;
    
//   }

//   constructor() {
//     super();
//     this.name = '';
//     this.link = ""
//   }

//   render() {
//     return html`<a class="link" href="${this.link}"><slot>${this.name}</slot></span>`;
//   }
// }
