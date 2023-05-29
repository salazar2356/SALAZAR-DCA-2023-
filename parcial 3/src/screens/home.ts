import "../components/export";
import { dispatch } from "../Strore/index";
import { navigate } from "../Strore/actions";
import { Screens } from "../Types/types";

export default class Home extends HTMLElement {
    constructor(){
        super();
        this.attachShadow({mode: 'open'});
    }

    connectedCallback(){
        this.render();
    }

    handleAddbutton(event: any) {
        event?.preventDefault();
          dispatch(navigate(Screens.ADD));
          console.log('Click handle button to add') 
    }
    

    render(){
        if(this.shadowRoot) this.shadowRoot.innerHTML = `
        
        <link rel="stylesheet" href="../src/screens/home.css">
        <div class="top">
        <h2>My Home</h2>
        </div>

        <button class ="toadd">Añadir Producto</button>

        `;

        const addbutton = this.shadowRoot?.querySelector(".toadd")
        console.log(addbutton);
        addbutton?.addEventListener("click", this.handleAddbutton)
        
    }
}

customElements.define("my-home", Home);
