const tabButtons = document.querySelectorAll(".tab-button");
const tabContents = document.querySelectorAll(".tab-content");

tabButtons.forEach(button => {
    button.addEventListener("click", () => {
        tabButtons.forEach(btn => btn.classList.remove("text-blue-600", "border-b-2", "border-blue-600", "font-semibold"));
        tabContents.forEach(content => content.classList.add("hidden"));

        button.classList.add("text-blue-600", "border-b-2", "border-blue-600", "font-semibold");
        document.getElementById(button.dataset.tab).classList.remove("hidden");
    });
});

// Carrossel simples
const slides = document.querySelectorAll("#carousel .carousel-item");
let index = 0;

function showSlide(i) {
    slides.forEach(slide => slide.classList.add("hidden"));
    slides[i].classList.remove("hidden");
}

document.getElementById("prev").addEventListener("click", () => {
    index = (index - 1 + slides.length) % slides.length;
    showSlide(index);
});

document.getElementById("next").addEventListener("click", () => {
    index = (index + 1) % slides.length;
    showSlide(index);
});

document.querySelectorAll("[data-slide]").forEach(thumbnail => {
    thumbnail.addEventListener("click", () => {
        index = parseInt(thumbnail.dataset.slide);
        showSlide(index);
    });
});

showSlide(index);
