class Header extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
<header class="container-fluid p-0">
  <nav class="navbar navbar-expand-md navbar-dark bg-transparent p-0">
    <div class="container p-0">
      
      <a class="navbar-brand col-md-4" href="index.html">Place Holder</a>

      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse"
        aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse col-md-8" id="navbarCollapse">
        <div class="d-flex w-100 justify-content-end gap-3">

          <a href="login.html" class="btn text-white custom-btn-login">Login</a>

          <form role="search">
            <input class="form-control" type="search" placeholder="Search" aria-label="Search">
            <button type="submit">
              <i class="fas fa-search"></i>
            </button>
          </form>

        </div>
      </div>

    </div>
  </nav>
</header>
    `;
  }
}

customElements.define("main-header", Header);