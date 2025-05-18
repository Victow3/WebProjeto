class MobileNavbar {
  constructor(mobileMenuElement, navListElement, navLinksNodeList) {
    this.mobileMenu = mobileMenuElement;
    this.navList = navListElement;
    this.navLinks = navLinksNodeList;
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
      if (link.style.animation) {
        link.style.animation = "";
      } else {
        link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
      }
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

class Header extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <header>
        <nav>
          <a class="logo" href="index.html">Backloggd</a>

          <div class="mobile-menu">
            <div class="line1"></div>
            <div class="line2"></div>
            <div class="line3"></div>
          </div>

          <ul class="nav-list">
            <li><a href="index.html">Início</a></li>
            <li><a href="about.html">Sobre</a></li>
            <li><a href="contact.html">Contato</a></li>
            <li><a href="atividades.html">Atividades</a></li>
          </ul>
        </nav>
      </header>
    `;

    const mobileMenu = this.querySelector(".mobile-menu");
    const navList = this.querySelector(".nav-list");
    const navLinks = this.querySelectorAll(".nav-list li");
    const mobileNavbar = new MobileNavbar(mobileMenu, navList, navLinks);
    mobileNavbar.init();

    const nav = this.querySelector("nav");
    let lastScrollY = window.scrollY;

    window.addEventListener("scroll", () => {
      if (window.scrollY > lastScrollY) {
        nav.classList.add("hide");
      } else {
        nav.classList.remove("hide");
      }
      lastScrollY = window.scrollY;
    });
  }
}

customElements.define("main-header", Header);