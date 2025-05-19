document.getElementById("registro-form").addEventListener("submit", function (e) {
    e.preventDefault();

    const nomeInput = document.getElementById("nome");
    const nome = nomeInput.value.trim();

    if (!nome) return;

    const nomesRegistrados = JSON.parse(localStorage.getItem("usuariosRegistrados")) || [];

    nomesRegistrados.push(nome);

    localStorage.setItem("usuariosRegistrados", JSON.stringify(nomesRegistrados));

    window.location.href = "atividades.html"; 
});
