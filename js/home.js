// home.js

document.addEventListener('DOMContentLoaded', function() {
    const slider = document.querySelector('.slider');
    const images = Array.from(slider.querySelectorAll('img'));
    const leftArrow = document.querySelector('.left-arrow');
    const rightArrow = document.querySelector('.right-arrow');
    const imageWidth = images[0].clientWidth;
    let index = 1; // Start from the first image (after the cloned one)

    // Clone first and last images for seamless looping
    const firstImageClone = images[0].cloneNode(true);
    const lastImageClone = images[images.length - 1].cloneNode(true);
    slider.appendChild(firstImageClone);
    slider.insertBefore(lastImageClone, images[0]);

    function updateSlider() {
        slider.style.transition = 'transform 0.5s ease-in-out';
        slider.style.transform = `translateX(-${index * imageWidth}px)`;
    }

    function moveLeft() {
        if (index <= 0) {
            // Jump to the end for seamless looping
            slider.style.transition = 'none'; // Disable transition for instant jump
            index = images.length - 3; // Jump to the last image before the clone
            slider.style.transform = `translateX(-${index * imageWidth}px)`;
            // Allow transition and update index
            setTimeout(() => {
                slider.style.transition = 'transform 0.5s ease-in-out';
                index--;
                updateSlider();
            }, 0);
        } else {
            index--;
            updateSlider();
        }
    }

    function moveRight() {
        if (index >= images.length - 1) {
            // Jump to the start for seamless looping
            slider.style.transition = 'none'; // Disable transition for instant jump
            index = 1-1; // Jump to the first image after the clone
            slider.style.transform = `translateX(-${index * imageWidth}px)`;
            // Allow transition and update index
            setTimeout(() => {
                slider.style.transition = 'transform 0.5s ease-in-out';
                index++;
                updateSlider();
            }, 0);
        } else {
            index++;
            updateSlider();
        }
    }

    leftArrow.addEventListener('click', moveLeft);
    rightArrow.addEventListener('click', moveRight);

    // Initialize slider position
    updateSlider();
});
