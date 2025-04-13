const images = [
    "image1.jpg",
    "image2.jpg",
    "image3.jpg",
    "image4.jpg"
];

let currentIndex = 0;

const currentImage = document.getElementById("current-image");
const prevButton = document.getElementById("prev-button");
const nextButton = document.getElementById("next-button");

function updateImage() {
    currentImage.src = images[currentIndex];
    currentImage.alt = `Image ${currentIndex + 1}`;
}

prevButton.addEventListener("click", () => {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    updateImage();
});

nextButton.addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % images.length;
    updateImage();
});