// Função para rolar até uma seção específica
function scrollToSection(sectionId) {
  document.getElementById(sectionId).scrollIntoView({
    behavior: 'smooth'
  });
}

// Função para exibir o popup
function mostrarPopup() {
  const popup = document.getElementById("popup");
  popup.style.display = "flex"; // Mostra o popup
}

// Função para fechar o popup
function fecharPopup() {
  const popup = document.getElementById("popup");
  popup.style.display = "none"; // Esconde o popup
}

// Fechar o popup ao clicar fora do conteúdo
window.onclick = function(event) {
  const popup = document.getElementById("popup");
  if (event.target === popup) {
    fecharPopup();
  }
};
