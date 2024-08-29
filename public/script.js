const images = [
    'images/img1.jpg',
    'images/img2.jpg',
    'images/img3.jpg',
    'images/img4.jpg',
    'images/img5.jpg',
    'images/img6.jpg',
    'images/img7.jpg',
    'images/img8.jpg',
    'images/img9.jpg',
    'images/img10.jpg'
];

const quotes = [
    '"El amor no se mira, se siente."',
    '"Donde hay amor, hay vida." - Mahatma Gandhi',
    '"El verdadero amor no tiene final feliz, porque el verdadero amor nunca termina."',
    '"El amor es la respuesta, y usted lo sabe con seguridad." - John Lennon',
    '"Amar no es mirarse el uno al otro, es mirar juntos en la misma dirección." - Antoine de Saint-Exupéry',
    '"El amor es la única realidad, y no es un simple sentimiento." - Frank Lloyd Wright',
    '"El amor es el poder que transforma y mejora las almas." - E. M. Forster',
    '"Amar y ser amado es sentir el sol desde ambos lados." - David Viscott',
    '"El amor es la llave maestra que abre las puertas de la felicidad." - Oliver Wendell Holmes',
    '"En un beso, sabrás todo lo que he callado." - Pablo Neruda'
];

let currentIndex = 0;

function changeImage() {
    currentIndex = (currentIndex + 1) % images.length;
    document.getElementById('gallery-image').src = images[currentIndex];
}

function changeQuote() {
    const quoteBox = document.getElementById('quote');
    currentIndex = (currentIndex + 1) % quotes.length;
    quoteBox.textContent = quotes[currentIndex];
}

// Cambiar imagen y frase cada 3 segundos
setInterval(() => {
    changeImage();
    changeQuote();
}, 3000);

const video = document.getElementById('video');
const playButton = document.getElementById('play-button');

playButton.addEventListener('click', () => {
    video.volume = 1.0; // Asegúrate de que el volumen esté activado
    video.play().then(() => {
        console.log('Audio del video está reproduciendo.');
    }).catch((error) => {
        console.error('Error al intentar reproducir el video:', error);
    });
});
