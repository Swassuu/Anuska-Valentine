const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const response = document.getElementById("response");
const music = document.getElementById("loveMusic");
const heartsContainer = document.querySelector(".hearts");
const petalsContainer = document.querySelector(".petals");

const slideshow = document.querySelector(".slideshow");
const slideImage = document.getElementById("slideImage");
const caption = document.getElementById("caption");

const slides = [
    { image: "photos/photo1.jpg", text: "The day I realized I never wanted to do life without you ❤️" },
    { image: "photos/photo2.jpg", text: "Every adventure is better with you by my side 🌍" },
    { image: "photos/photo3.jpg", text: "My favorite smile in the whole world 🥰" },
    { image: "photos/photo4.jpg", text: "Forever starts and ends with you 💕" }
];

let currentSlide = 0;
let slideshowStarted = false;

// YES button
yesBtn.addEventListener("click", () => {
    response.innerHTML = "Yay! 💖 I love you forever 🥰";
    music.play();
    slideshow.classList.remove("hidden");

    if (!slideshowStarted) {
        startSlideshow();
        slideshowStarted = true;
    }

    for (let i = 0; i < 20; i++) createHeart(true);
});

// NO button dodge
noBtn.addEventListener("mouseover", () => {
    noBtn.style.transform = `translate(${Math.random()*200-100}px, ${Math.random()*200-100}px)`;
});

// Slideshow function
function startSlideshow() {
    showSlide();

    setInterval(() => {
        slideImage.classList.remove("show");
        caption.classList.remove("show");

        setTimeout(() => {
            currentSlide = (currentSlide + 1) % slides.length;
            showSlide();
        }, 800);
    }, 4000);
}

function showSlide() {
    slideImage.src = slides[currentSlide].image;
    caption.textContent = slides[currentSlide].text;
    slideImage.classList.add("show");
    caption.classList.add("show");
}

// Floating hearts with glow + drift
function createHeart(burst = false) {
    const heart = document.createElement("div");
    heart.className = "heart";
    heart.innerHTML = "💜";
    heart.style.left = Math.random() * 100 + "vw";

    const scale = 0.8 + Math.random() * 0.5;
    heart.style.transform = `scale(${scale})`;

    const driftX = (Math.random() * 100 - 50) + "px"; // side-to-side
    heart.style.setProperty("--driftX", driftX);

    heart.style.animationDuration = burst
        ? 2 + Math.random() * 1 + "s"
        : 6 + Math.random() * 4 + "s";

    if (Math.random() < 0.3) heart.classList.add("glow");

    heartsContainer.appendChild(heart);
    setTimeout(() => heart.remove(), parseFloat(heart.style.animationDuration) * 1000);
}

// Continuous hearts
setInterval(() => createHeart(), 500);

// Falling petals
function createPetal() {
    const petal = document.createElement("div");
    petal.className = "petal";
    petal.style.left = Math.random() * 100 + "vw";
    petal.style.animationDuration = 5 + Math.random() * 5 + "s";
    petalsContainer.appendChild(petal);

    setTimeout(() => petal.remove(), parseFloat(petal.style.animationDuration) * 1000);
}

// Continuous petals
setInterval(createPetal, 500);


// ---------- SCROLL ANIMATION FOR SECTIONS ----------
const sections = document.querySelectorAll(".section");

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        }
    });
}, {
    threshold: 0.3 // trigger when 30% of the section is visible
});

// Observe all sections
sections.forEach(section => {
    observer.observe(section);
});
