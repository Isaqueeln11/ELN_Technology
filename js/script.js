// Função para rolagem suave ao clicar nos links de navegação
function smoothScroll(target) {
  const element = document.querySelector(target);
  window.scrollTo({
    top: element.offsetTop,
    behavior: 'smooth'
  });
}

// Adiciona um evento de clique aos links de navegação
document.querySelectorAll('nav ul li a').forEach(link => {
  link.addEventListener('click', (event) => {
    event.preventDefault();
    const target = link.getAttribute('href');
    smoothScroll(target);
  });
});
