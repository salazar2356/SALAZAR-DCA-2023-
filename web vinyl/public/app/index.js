import data from "./data.js";
import "./components/index.js";
//import MyNav, {myNavAtt} from "./components/Nav/nav.js";
import { Attribute } from "./components/Profile/profile.js";
class AppContainer extends HTMLElement {
    // nav: MyNav;
    constructor() {
        super();
        this.profiles = [];
        this.attachShadow({ mode: "open" });
        data.forEach((user) => {
            const profileCard = this.ownerDocument.createElement("my-profile");
            profileCard.setAttribute(Attribute.tittle, user.tittle);
            profileCard.setAttribute(Attribute.artist, String(user.artist));
            profileCard.setAttribute(Attribute.img, String(user.img));
            profileCard.addEventListener("click", () => console.log(user.tittle));
            this.profiles.push(profileCard);
        });
        // const navbar = this.ownerDocument.createElement("my-nav") as MyNav;
        //   navbutt.setAttribute(myNavAtt.name, "holi")
        // navbutt.setAttribute(myNavAtt.title, "bailas?")
        //this.nav=navbar
    }
    connectedCallback() {
        this.render();
    }
    render() {
        if (this.shadowRoot) {
            this.shadowRoot.innerHTML = `<link rel="stylesheet" href="../app/index.css">
                `;
            // this.profiles.forEach((profile) => {
            // this.shadowRoot?.appendChild(profile);
            // });   
            // const navBarSec = this.ownerDocument.createElement("section")
            //navBarSec.appendChild(this.nav)
            //this.shadowRoot.appendChild(navBarSec)
            const profileSec = this.ownerDocument.createElement("section");
            profileSec.className = "prof-sec";
            this.profiles.forEach((profile) => {
                profileSec.appendChild(profile);
            });
            this.shadowRoot.appendChild(profileSec);
        }
    }
}
customElements.define("app-container", AppContainer);
