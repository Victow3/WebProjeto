class Header extends HTMLElement {
  connectedCallback() {
    // 🔑 Pega usuário logado do localStorage
    const usuarioLogado = JSON.parse(localStorage.getItem("usuarioLogado"));

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
        <div class="d-flex w-100 justify-content-end gap-3 align-items-center">
          <a href="games.html" class="text-white text-decoration-none">Games</a>
          
          ${usuarioLogado 
            ? `<span class="text-white">Olá, ${usuarioLogado.nome}</span>
               <button id="logoutBtn" class="btn btn-outline-light">Logout</button>` 
            : `<a href="login.html" class="btn text-white custom-btn-login">Login</a>`}

          <form id="searchForm" role="search" class="d-flex">
            <input id="searchInput" class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
            <button class="btn btn-outline-light" type="submit">
              <i class="fas fa-search"></i>
            </button>
          </form>
        </div>
      </div>
    </div>
  </nav>
</header>
    `;

    // ===== JS de busca =====
    const searchForm = this.querySelector('#searchForm');
    const searchInput = this.querySelector('#searchInput');

    if (searchForm && searchInput) {
      searchForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const nome = searchInput.value.trim();
        if (!nome) return;
        window.location.href = `games.html?search=${encodeURIComponent(nome)}`;
      });

      // Busca em tempo real (opcional)
      let timeout;
      searchInput.addEventListener('input', () => {
        clearTimeout(timeout);
        timeout = setTimeout(() => {
          const nome = searchInput.value.trim();
          if (nome) {
            // Aqui você poderia disparar busca dinâmica (se quisesse)
          }
        }, 300);
      });
    }

    // ===== Logout =====
    const logoutBtn = this.querySelector('#logoutBtn');
    if (logoutBtn) {
      logoutBtn.addEventListener('click', () => {
        localStorage.removeItem("usuarioLogado");
        window.location.reload(); // Atualiza header para mostrar botão de login
      });
    }
  }
}

customElements.define("main-header", Header);
