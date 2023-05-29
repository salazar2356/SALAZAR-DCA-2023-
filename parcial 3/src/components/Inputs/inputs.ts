import { dispatch } from "../../Strore";
import { product } from "../../Types/productsint";
const interInputs: product = {
    product: "",
    price: "0",
}

export default class Inputs extends HTMLElement{
    constructor(){
        super();
        this.attachShadow({mode:'open'});
    }

        connectedCallback(){
            this.render();
        }

        render(){if(this.shadowRoot)
        this.shadowRoot.innerHTML = `
        <input type="text" placeholder="Producto" class="product">
        <input type="number" placeholder="Precio" class="price">
        `
        const product = this.shadowRoot?.querySelector('.product');
        console.log(product);
        product?.addEventListener("change",(event:any) => {
            console.log(interInputs);
            
        });

        const price = this.shadowRoot?.querySelector('.precio');
        console.log(price);
        price?.addEventListener("change", (event:any) => {
            console.log(interInputs);

        }
        
        );
    }
}

customElements.define("my-inputs", Inputs)