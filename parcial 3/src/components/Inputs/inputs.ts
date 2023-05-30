import { addObserver, dispatch } from "../../Strore";
import { saveproduct } from "../../Strore/actions";
import { SomeActions } from "../../Types/store";
import { Product } from "../../Types/products";

const userInputs: Product = {
    name: "",
    price: "0",
};

class Form extends HTMLElement {
    constructor (){
        super();
        this.attachShadow({mode: "open"});
        addObserver(this)
    }

        connectedCallback(){
            this.render();
        }

        render(){ if (this.shadowRoot)this.shadowRoot.innerHTML =
            `
            <h1>Nombre  y Precio del Producto</h1>
            `
            const name = this.ownerDocument.createElement("input");
            name.type = "text";
            name.addEventListener ("change", (e: any) => {
                userInputs.name = e.target.value; 
                
            });

            const price = this.ownerDocument.createElement("input");
            price.type = "number";
            price.addEventListener ("change", (e: any) => {
                userInputs.price = e.target.value; 
            });
            


            const button = this.ownerDocument.createElement("button");
            button.textContent = "Save";
            button.addEventListener("click", async () => {
                console.log(userInputs);
                //ACTION PARA GUARDAR LA INFO
                dispatch(await saveproduct(userInputs))
                
            })
            this.shadowRoot?.appendChild(name);
            this.shadowRoot?.appendChild(price);
            this.shadowRoot?.appendChild(button);


        }
    }
    
customElements.define("my-form", Form);
export default Form;