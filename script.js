document.addEventListener('DOMContentLoaded', function () {
    var currentIndex = 0;
    var images = document.querySelectorAll('.carousel-item');
    var totalImages = images.length;
    var interval;

    function showImage(index) {
        images.forEach(function (image) {
            image.classList.remove('active');
        });
        images[index].classList.add('active');
        currentIndex = index;
    }

    function nextImage() {
        var nextIndex = (currentIndex + 1) % totalImages;
        showImage(nextIndex);
    }

    function prevImage() {
        var prevIndex = (currentIndex - 1 + totalImages) % totalImages;
        showImage(prevIndex);
    }

    function startCarousel() {
        interval = setInterval(nextImage, 1000); 
    }

    function stopCarousel() {
        clearInterval(interval);
    }

   
    startCarousel();


   
    var prevButton = document.querySelector('[data-bs-target="#carouselExampleFade"][data-bs-slide="prev"]');
    var nextButton = document.querySelector('[data-bs-target="#carouselExampleFade"][data-bs-slide="next"]');
    prevButton.addEventListener('click', function () {
        stopCarousel();
        prevImage();
    });
    nextButton.addEventListener('click', function () {
        stopCarousel();
        nextImage(2000);
    });
});
