import './screens/export';
import './components/export'
import {addObserver, appState, dispatch} from "./Strore/index"
import { Screens } from "./Types/types";
import { getProduct } from './Strore/actions';

class AppContainer extends HTMLElement {

    constructor(){
        super();
        this.attachShadow({mode: "open"})
        addObserver(this)
    }

    async connectedCallback() {
        dispatch (await getProduct())
        this.render();
    }

    render() {
        if (!this.shadowRoot) return;
        switch (appState.screen) {

            case Screens.LOGIN:
                this.shadowRoot.innerHTML =`<my-login></my-login>`;
            break;

            case Screens.REGISTER:
                this.shadowRoot.innerHTML = `<my-register></my-register>`;
            break;

            case Screens.HOME:
                this.shadowRoot.innerHTML = `<my-home></my-home>`;
            break;


            case Screens.ADD:
                this.shadowRoot.innerHTML = `<my-add></my-add>`;
            break;
            
            default:
                break;
    } 
 }
}

customElements.define('app-container', AppContainer)