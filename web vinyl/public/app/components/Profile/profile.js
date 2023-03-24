export var Attribute;
(function (Attribute) {
    Attribute["tittle"] = "tittle";
    Attribute["artist"] = "artist";
    Attribute["img"] = "img";
})(Attribute || (Attribute = {}));
class MyProfile extends HTMLElement {
    static get observedAttributes() {
        const attrs = {
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
    attributeChangedCallback(propName, _, newValue) {
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
