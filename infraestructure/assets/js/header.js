class Header extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        
        <nav>
            <a class="logo" href="../pages/index.html">Backloggd</a>
            <div class="mobile-menu">
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
                <ul class="nav-list">
                    <li><a href="../pages/index.html">Inicío</a></li>
                    <li><a href="../pages/about.html">Sobre</a></li>
                    <li><a href="../pages/contact.html">Contato</a></li>
                    <li><a href="../pages/atividades.html">Atividades</a></li>
                </ul>
        </nav>`
    }
}

customElements.define('main-header', Header);