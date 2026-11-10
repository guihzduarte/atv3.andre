const form = document.getElementById('form-vaga');
const tabela = document.getElementById('tabela-vagas');

// Carrega vagas salvas no navegador ao abrir a página
document.addEventListener('DOMContentLoaded', () => {
  const vagasSalvas = JSON.parse(localStorage.getItem('vagasEstagio')) || [];
  vagasSalvas.forEach(vaga => adicionarLinhaTabela(vaga));
});

// Evento de envio do formulário
form.addEventListener('submit', function(event) {
  event.preventDefault();

  const novaVaga = {
    cargo: document.getElementById('cargo').value.trim(),
    empresa: document.getElementById('empresa').value.trim(),
    bolsa: document.getElementById('bolsa').value.trim(),
    modalidade: document.getElementById('modalidade').value,
    contato: document.getElementById('contato').value.trim()
  };

  // Adiciona na tabela na tela
  adicionarLinhaTabela(novaVaga);

  // Salva no localStorage
  const vagasSalvas = JSON.parse(localStorage.getItem('vagasEstagio')) || [];
  vagasSalvas.push(novaVaga);
  localStorage.setItem('vagasEstagio', JSON.stringify(vagasSalvas));

  // Limpa o formulário
  form.reset();
});

// Função para criar a linha na tabela HTML
function adicionarLinhaTabela(vaga) {
  const tr = document.createElement('tr');
  tr.innerHTML = `
    <td><strong>${vaga.cargo}</strong></td>
    <td>${vaga.empresa}</td>
    <td>${vaga.bolsa}</td>
    <td><span class="badge">${vaga.modalidade}</span></td>
    <td>${vaga.contato}</td>
  `;
  tabela.appendChild(tr);
}
