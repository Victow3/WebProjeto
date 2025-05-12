class Header extends HTMLElement {
    connectedCallback() {
        // Detecta o caminho base dinamicamente
        const path = window.location.pathname;
        const isInPages = path.includes("/pages/");
        const base = isInPages ? "../" : "";

        this.innerHTML = `
        <nav>
            <a class="logo" href="${base}index.html">Backloggd</a>
            <ul class="nav-list">
                <li><a href="${base}index.html">Início</a></li>
                <li><a href="${base}pages/about.html">Sobre</a></li>
                <li><a href="${base}pages/contact.html">Contato</a></li>
                <li><a href="${base}pages/atividades.html">Atividades</a></li>
            </ul>
        </nav>`;
    }
}

customElements.define('main-header', Header);