class Header extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        
        <nav>
            <a class="logo" href="pages/index.html">Backloggd</a>
                <ul class="nav-list">
                    <li><a href="pages/index.html">Inicío</a></li>
                    <li><a href="pages/about.html">Sobre</a></li>
                    <li><a href="pages/contact.html">Contato</a></li>
                    <li><a href="pages/atividades.html">Atividades</a></li>
                </ul>
        </nav>`
    }
}

customElements.define('main-header', Header);