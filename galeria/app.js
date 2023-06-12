// Adicione uma classe ativa à imagem clicada

const gallery = document.querySelector('.gallery').slick({
    infinite: true,
  slidesToShow: 3,
  slidesToScroll: 3
});
const images = document.querySelectorAll('.gallery img');


let currentIndex = 0;

function showImage(index) {
  images.forEach((image, i) => {
    if (i === index) {
      image.classList.add('active');
    } else {
      image.classList.remove('active');
    }
  });
}

function nextImage() {
  currentIndex = (currentIndex + 1) % images.length;
  showImage(currentIndex);
}

// Defina o intervalo de tempo em milissegundos (por exemplo, 3 segundos)
const interval = 3000;
setInterval(nextImage, interval);


// Adicione a classe "animate" após um curto atraso
setTimeout(() => {
  gallery.classList.add('animate');
}, 1000);
