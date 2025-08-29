document.addEventListener("DOMContentLoaded", async () => {
  const usuarioLogado = JSON.parse(localStorage.getItem("usuarioLogado"));
  if (!usuarioLogado) {
    alert("Você precisa estar logado para acessar o perfil.");
    window.location.href = "login.html";
    return;
  }

  // Preenche dados básicos do usuário
  document.getElementById("nome").textContent = usuarioLogado.nome;
  document.getElementById("email").textContent = usuarioLogado.email;

  try {
    // Buscar os jogos cadastrados por este usuário
    const resp = await fetch(`http://localhost:8080/api/perfil-jogos/usuario/${usuarioLogado.id}`);
    if (!resp.ok) throw new Error("Erro ao carregar jogos do perfil");

    const jogos = await resp.json();

    const tbody = document.getElementById("lista-jogos");
    tbody.innerHTML = "";

    if (jogos.length === 0) {
      tbody.innerHTML = `<tr><td colspan="7">Nenhum jogo registrado ainda.</td></tr>`;
    } else {
      jogos.forEach(jogo => {
        const tr = document.createElement("tr");
        tr.innerHTML = `
          <td>${jogo.gameName}</td>
          <td>${jogo.status || "-"}</td>
          <td>${jogo.horasJogadas ?? "-"}</td>
          <td>${jogo.nota ?? "-"}</td>
          <td>${jogo.comentario || "-"}</td>
          <td>${jogo.dataInicio ? new Date(jogo.dataInicio).toLocaleDateString() : "-"}</td>
          <td>${jogo.dataConclusao ? new Date(jogo.dataConclusao).toLocaleDateString() : "-"}</td>
        `;
        tbody.appendChild(tr);
      });
    }

  } catch (err) {
    console.error(err);
    alert("Erro ao carregar os jogos: " + err.message);
  }

  // Botão de sair
  document.getElementById("sair").addEventListener("click", () => {
    localStorage.removeItem("usuarioLogado");
    window.location.href = "login.html";
  });
});
