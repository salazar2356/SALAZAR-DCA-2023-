import data from "./data.js";
import  "./components/index.js";
import MyNav from "./components/Nav/nav.js";
import MyProfile, { Attribute } from "./components/Profile/profile.js";
class AppContainer extends HTMLElement {
    profiles: MyProfile[] = [];

    constructor() {
        super();
        this.attachShadow({ mode: "open" });

        data.forEach((user) => {
            const profileCard = this.ownerDocument.createElement(
                "my-profile"
                ) as MyProfile;
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
                const wrapper = this.ownerDocument.createElement("div")
                const wrappercarousel = this.ownerDocument.createElement("div")
                const styles = this.ownerDocument.createElement("link")

            styles.setAttribute("rel","stylesheet")
            styles.setAttribute("href","./app/components/Profile/profile.css")
            wrapper.setAttribute("class","./app/components/Profile/profile.css")
            styles.setAttribute("href","./app/components/Profile/profile.css")

            wrapper.classList.add("wrapper")
            wrappercarousel.classList.add("carousel")

            wrapper.appendChild(wrappercarousel)
            wrappercarousel.appendChild(profileCard)

                this.shadowRoot.innerHTML+= 
                `
                
                <my-nav></my-nav>
                `;
                this.profiles.forEach((profile) => {
                this.shadowRoot?.appendChild(profile);
                });   

            }  
        } 
    }
    
customElements.define("app-container", AppContainer);