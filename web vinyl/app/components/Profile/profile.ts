export enum Attribute {
    "tittle" = "tittle",
    "artist" = "artist",
    "img" = "img",
}

class MyProfile extends HTMLElement {
    tittle?: string;
    artist?: string;
    img?: string;
    
    static get observedAttributes() {
        const attrs: Record<Attribute, null> = {
            tittle: null,
            artist: null,
            img: null,
        };
        return Object.keys(attrs);
    }
    
    constructor() {
        super();
        this.attachShadow({ mode: "open" });
    }
    
    connectedCallback() {
        this.render();
    }
    
    attributeChangedCallback(
        propName: Attribute,
        _: string | undefined,
        newValue: string | undefined
        ) {
            switch (propName) {
                
                default:
                this[propName] = newValue;
                break;
            }
            
            this.render();
        }
        
        render() {
            if (this.shadowRoot) {
                this.shadowRoot.innerHTML = `
                <link rel="stylesheet" href="./app/components/Profile/profile.css">
                
                <div class="wrapper">
                   <div class="carousel">
                     <h4>${this.tittle}</h4>
                     <h5>${this.artist}</h5>
                     <img class="imgs" src="${this.img}" height="80px" width="80px" ></img>
                   </div>
                </div>

                `;
            }
        }
    }
customElements.define("my-profile", MyProfile);
export default MyProfile;
    