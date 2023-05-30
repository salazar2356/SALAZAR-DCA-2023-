import { dispatch } from "../Strore";
import "../components/export";


export default class Add extends HTMLElement {
    constructor(){
        super();
        this.attachShadow({mode: 'open'});
        
    }

    async connectedCallback(){
        this.render();
    }

    render(){
        const something = this.ownerDocument.createElement("my-form");

        const list = this.ownerDocument.createElement("my-list");
        this.shadowRoot?.appendChild(something);

        this.shadowRoot?.appendChild(list);



    }
}

customElements.define("my-add", Add);