import { dispatch } from "../../Strore";
import { saveproduct } from "../../Strore/actions";
import {product} from "../../Types/productsint";

const interInputs: product = {
    product: "",
    price: "",
}

export default class Button extends HTMLElement {
    constructor(){
    super();
    this.attachShadow({mode:'open'});
}
    connectedCallback(){
        this.render();
    }

    handleSavebutton(event: any) {
        event?.preventDefault();
          dispatch(saveproduct(interInputs.price));
          console.log('Click handle button to save') 
    }

    render(){
        if (this.shadowRoot) this.shadowRoot.innerHTML = `
        
        <button class="button">Añadir</button>
        `
        const savebutton = this.shadowRoot?.querySelector(".button")
        console.log(savebutton);
        savebutton?.addEventListener("click", this.handleSavebutton)
}
}

customElements.define("my-button", Button)
    
