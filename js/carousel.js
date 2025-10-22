
let carouselArr = [];

class Carousel {
    constructor(image, title, uri) {
        this.image = image;
        this.title = title;
        this.uri = uri;
    }

    static Start(arr) {
        if (!arr || arr.length === 0) {
            throw "O método Start precisa receber um array válido.";
        }

        
        Carousel._arr = arr;
        Carousel._size = arr.length;
        Carousel._sequence = 0;

        this.setupButtons();

      
        this.updateDisplay();

       
        if (Carousel._interval) {
            clearInterval(Carousel._interval);
        }
        Carousel._interval = setInterval(() => this.Next(), 3000);
    }

    static startAutoPlay() {
        Carousel.Stop(); 
        Carousel._interval = setInterval(() => Carousel.Next(), 3000);
    }

    static Stop() {
        if (Carousel._interval) {
            clearInterval(Carousel._interval);
            Carousel._interval = null;
        }
    }

    static async setupButtons() {
        const btnPrev = document.getElementById('btnPrev');
        const btnNext = document.getElementById('btnNext');

        if (btnPrev) {
            btnPrev.onclick = () => {
                Carousel.Stop();
                Carousel.Prev();
                Carousel.startAutoPlay();
            };
        }

        if (btnNext) {
            btnNext.onclick = () => {
                Carousel.Stop();
                Carousel.Next();
                Carousel.startAutoPlay();
            };
        }
    }

    static updateDisplay() {
        const imageElement = document.getElementById("carousel-image");
        const titleElement = document.getElementById("carousel-title");

        if (!imageElement || !titleElement) {
            console.error("Elementos do carrossel não encontrados!");
            return;
        }

        const item = Carousel._arr[Carousel._sequence];
        
        
        imageElement.style.opacity = "0";
        setTimeout(() => {
            imageElement.src = `img/${item.image}`;
            imageElement.style.opacity = "1";
        }, 300);

        
        titleElement.innerHTML = `<a href="${item.uri}">${item.title}</a>`;
    }

    static Next() {
        Carousel._sequence = (Carousel._sequence + 1) % Carousel._size;
        Carousel.updateDisplay();
    }

    static Prev() {
        Carousel._sequence = (Carousel._sequence - 1 + Carousel._size) % Carousel._size;
        Carousel.updateDisplay();
    }
}

