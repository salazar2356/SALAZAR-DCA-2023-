import data from "./data.js";
import "./components/index.js";
import { Attribute } from "./components/Profile/profile.js";
class AppContainer extends HTMLElement {
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
    }
    connectedCallback() {
        this.render();
    }
    render() {
        if (this.shadowRoot) {
            const wrapper = this.ownerDocument.createElement("div");
            const wrappercarousel = this.ownerDocument.createElement("div");
            const styles = this.ownerDocument.createElement("link");
            styles.setAttribute("rel", "stylesheet");
            styles.setAttribute("href", "./app/components/Profile/profile.css");
            wrapper.setAttribute("class", "./app/components/Profile/profile.css");
            styles.setAttribute("href", "./app/components/Profile/profile.css");
            wrapper.classList.add("wrapper");
            wrappercarousel.classList.add("carousel");
            wrapper.appendChild(wrappercarousel);
            wrappercarousel.appendChild(profileCard);
            this.shadowRoot.innerHTML +=
                `
                
                <my-nav></my-nav>
                `;
            this.profiles.forEach((profile) => {
                var _a;
                (_a = this.shadowRoot) === null || _a === void 0 ? void 0 : _a.appendChild(profile);
            });
        }
    }
}
customElements.define("app-container", AppContainer);
