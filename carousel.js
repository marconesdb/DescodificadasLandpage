let slideIndex = 0;
const slides = document.getElementsByClassName("carousel-item");

// Função para exibir o slide atual
function showSlides() {
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slides[slideIndex].style.display = "block";  
}

// Função para mover o slide para frente ou para trás
function moveSlide(n) {
  slideIndex += n;
  if (slideIndex >= slides.length) { slideIndex = 0; }
  if (slideIndex < 0) { slideIndex = slides.length - 1; }
  showSlides();
}

// Exibir o slide inicial ao carregar a página
showSlides();

// Adicionar transição automática entre os slides
let interval = setInterval(function() {
  moveSlide(1); // Move para o próximo slide a cada intervalo
}, 3000); // Intervalo de 3 segundos (3000 milissegundos)

// Função para parar a transição automática quando o mouse estiver sobre o carrossel
document.querySelector(".carousel").addEventListener("mouseenter", function() {
  clearInterval(interval); // Para a transição automática
});

// Função para retomar a transição automática quando o mouse sair do carrossel
document.querySelector(".carousel").addEventListener("mouseleave", function() {
  interval = setInterval(function() {
    moveSlide(1); // Move para o próximo slide a cada intervalo
  }, 3000); // Intervalo de 3 segundos (3000 milissegundos)
});
