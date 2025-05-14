class Header extends HTMLElement {
    connectedCallback() {
        const path = window.location.pathname;
        const isInPages = path.includes("/pages/");
        const base = isInPages ? "../" : "";

        this.innerHTML = `
        <header>
          <nav>
            <a class="logo" href="${base}index.html">Backloggd</a>

            <div class="mobile-menu">
              <div class="line1"></div>
              <div class="line2"></div>
              <div class="line3"></div>
            </div>

            <ul class="nav-list">
              <li><a href="${base}index.html">Início</a></li>
              <li><a href="${base}pages/about.html">Sobre</a></li>
              <li><a href="${base}pages/contact.html">Contato</a></li>
              <li><a href="${base}pages/atividades.html">Atividades</a></li>
            </ul>
          </nav>
        </header>
        `;

        const mobileNavbar = new MobileNavbar(
            ".mobile-menu",
            ".nav-list",
            ".nav-list li"
        );
        mobileNavbar.init(); 
    }
}

customElements.define('main-header', Header);

class MobileNavbar {
    constructor(mobileMenuSelector, navListSelector, navLinksSelector) {
        this.mobileMenu = document.querySelector(mobileMenuSelector);
        this.navList = document.querySelector(navListSelector);
        this.navLinks = document.querySelectorAll(navLinksSelector);
        this.activeClass = "active";

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.navList.classList.toggle(this.activeClass);
        this.mobileMenu.classList.toggle(this.activeClass);
        this.animateLinks();
    }

    animateLinks() {
        this.navLinks.forEach((link, index) => {
            link.style.animation
                ? (link.style.animation = "")
                : (link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`);
        });
    }

    addClickEvent() {
        this.mobileMenu.addEventListener("click", this.handleClick);
    }

    init() {
        if (this.mobileMenu) {
            this.addClickEvent();
        }
        return this;
    }
}