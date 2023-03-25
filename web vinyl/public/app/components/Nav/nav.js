class MyNav extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: "open" });
    }
    connectedCallback() {
        this.render();
    }
    render() {
        if (this.shadowRoot) {
            this.shadowRoot.innerHTML = `

                <link rel="stylesheet" href="./app/components/Nav/nav.css">

            <my-nav>



                <div class="nav">
                   <header>Vinyl</header>
                    <ul>
                    <li><a href="#"><i class "fas fa-qrcode"</i>Hello Sophie!</a></li>
                    <li><a href="#"><i class "fas fa-qrcode"</i>Home</a></li>
                    <li><a href="#"><i class "fas fa-qrcode"</i>Search</a></li>
                    <li><a href="#"><i class "fas fa-qrcode"</i>Library</a></li>
                    <li><a href="#"><i class "fas fa-qrcode"</i>+</a></li>
                    <li><a href="#"><i class "fas fa-qrcode"</i><3</a></li>
                    <li><a href="#"><i class "fas fa-qrcode"</i>PlayLists</a></li>

                    </ul>
                </div>
            </my-nav>
                
                `;
        }
    }
}
customElements.define("my-nav", MyNav);
export default MyNav;
