/* ---------- ELEMENTS ---------- */
const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const music = document.getElementById("loveMusic");
const heartsContainer = document.querySelector(".hearts");
const petalsContainer = document.querySelector(".petals");
const slideshow = document.querySelector(".slideshow");
const slideImage = document.getElementById("slideImage");
const caption = document.getElementById("caption");
const finalMessage = document.getElementById("final-message");
const bouquet = document.getElementById("bouquet");
const questionBlock = document.getElementById("questionBlock");

/* ---------- SLIDES ---------- */
const slides = [
    { image: "photos/photo1.jpg", text: "The day I realized I never wanted to do life without you ❤️" },
    { image: "photos/photo2.jpg", text: "Every adventure is better with you by my side 🌍" },
    { image: "photos/photo3.jpg", text: "My favorite smile in the whole world 🥰" },
    { image: "photos/photo4.jpg", text: "Forever starts and ends with you 💕" },
    { image: "photos/photo5.jpg", text: "Us together ❤️" },
    { image: "photos/photo6.jpg", text: "Happiest man, because of you ❤️" },
    { image: "photos/photo7.jpg", text: "My one and only 🥰🥰" },
    { image: "photos/photo8.jpg", text: "Mero maya ❤️" },
    { image: "photos/photo9.jpg", text: "Our little world, together ❤️" },
    { image: "photos/photo10.jpg", text: "My Queen ❤️" },
    { image: "photos/photo11.jpg", text: "Beginning of OUR journey ❤️" }
];

let currentSlide = 0;

/* ---------- YES BUTTON ---------- */
yesBtn.addEventListener("click", () => {

    questionBlock.classList.add("fade-out");

    setTimeout(() => {
        questionBlock.style.display = "none";

        music?.play().catch(() => {});

        slideshow.classList.remove("hidden");
        startSlideshow();

        for (let i = 0; i < 20; i++) createHeart();

        bouquet.classList.remove("hidden");
        setTimeout(() => bouquet.style.display = "none", 8000);

    }, 900);
});

/* ---------- SLIDESHOW ---------- */
function startSlideshow() {
    showSlide();

    const interval = setInterval(() => {
        currentSlide++;

        if (currentSlide < slides.length) {
            showSlide();
        } else {
            clearInterval(interval);

            slideshow.style.display = "none";
            finalMessage.classList.remove("hidden");
        }
    }, 6000);
}

function showSlide() {
    slideImage.classList.remove("show");
    caption.classList.remove("show");

    setTimeout(() => {
        slideImage.src = slides[currentSlide].image;
        caption.textContent = slides[currentSlide].text;
        slideImage.classList.add("show");
        caption.classList.add("show");
    }, 300);
}

/* ---------- NO BUTTON ---------- */
noBtn.addEventListener("mouseover", () => {
    noBtn.style.position = "absolute";
    noBtn.style.left = Math.random() * 70 + "%";
    noBtn.style.top = Math.random() * 70 + "%";
});

/* ---------- HEARTS ---------- */
function createHeart() {
    const heart = document.createElement("div");
    heart.classList.add("heart");
    heart.innerHTML = "💜";
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.animationDuration = Math.random() * 3 + 4 + "s";
    heartsContainer.appendChild(heart);
    setTimeout(() => heart.remove(), 7000);
}
setInterval(createHeart, 500);

/* ---------- PETALS ---------- */
function createPetal() {
    const petal = document.createElement("div");
    petal.classList.add("petal");
    petal.style.left = Math.random() * 100 + "vw";
    petal.style.animationDuration = Math.random() * 4 + 6 + "s";
    petalsContainer.appendChild(petal);
    setTimeout(() => petal.remove(), 10000);
}
setInterval(createPetal, 500);

/* ---------- SECTION FADE-IN ---------- */
const sections = document.querySelectorAll(".section");
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) entry.target.classList.add("show");
    });
}, { threshold: 0.3 });

sections.forEach(section => observer.observe(section));
