import "../components/export";


export default class Add extends HTMLElement {
    constructor(){
        super();
        this.attachShadow({mode: 'open'});
    }

    connectedCallback(){
        this.render();
    }

    render(){
        if(this.shadowRoot) this.shadowRoot.innerHTML = `
        
        <link rel="stylesheet" href="../src/screens/add.css">
        <h2>Aquí Puedes Subir Tus Favoritos</h2>        
        <my-inputs></my-inputs>
        <my-button></my-button>
        `;

    }
}

customElements.define("my-add", Add);