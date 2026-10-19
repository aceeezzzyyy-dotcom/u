const menuToggle = document.getElementById("menuToggle");
const mainNav = document.getElementById("mainNav");
const toast = document.getElementById("toast");
const heartsLayer = document.querySelector(".floating-hearts");
const letterButton = document.getElementById("letterButton");
const loveLetter = document.getElementById("loveLetter");
const flowerArt = document.getElementById("flowerArt");
const flowerMessage = document.getElementById("flowerMessage");

function showToast(message) {
  toast.textContent = message;
  toast.classList.add("show");
  window.setTimeout(() => toast.classList.remove("show"), 2500);
}

function makeHeart() {
  const heart = document.createElement("span");
  heart.className = "heart";
  heart.textContent = ["♡", "♥", "ღ"][Math.floor(Math.random() * 3)];
  heart.style.left = `${Math.random() * 100}%`;
  heart.style.fontSize = `${14 + Math.random() * 22}px`;
  heart.style.animationDuration = `${5 + Math.random() * 5}s`;
  heartsLayer.appendChild(heart);
  window.setTimeout(() => heart.remove(), 10500);
}

menuToggle.addEventListener("click", () => {
  const opened = mainNav.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(opened));
  menuToggle.textContent = opened ? "✕" : "☰";
});

document.querySelectorAll(".nav-link").forEach(link => {
  link.addEventListener("click", () => {
    mainNav.classList.remove("open");
    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.textContent = "☰";
    document.querySelectorAll(".nav-link").forEach(item => item.classList.remove("active"));
    link.classList.add("active");
  });
});

document.getElementById("exploreButton").addEventListener("click", () => {
  document.getElementById("about-us").scrollIntoView({ behavior: "smooth" });
  for (let i = 0; i < 12; i++) window.setTimeout(makeHeart, i * 100);
  showToast("welcome to our little world ♡");
});

letterButton.addEventListener("click", () => {
  const willOpen = loveLetter.hidden;
  loveLetter.hidden = !willOpen;
  letterButton.setAttribute("aria-expanded", String(willOpen));
  letterButton.querySelector("span:last-child").textContent = willOpen ? "tap to close your letter" : "tap to open your letter";
  if (willOpen) {
    loveLetter.scrollIntoView({ behavior: "smooth", block: "center" });
    for (let i = 0; i < 15; i++) window.setTimeout(makeHeart, i * 90);
  }
});

document.getElementById("bloomButton").addEventListener("click", () => {
  flowerArt.classList.add("bloomed");
  flowerMessage.textContent = "this flower is for you, my love. may you always remember how loved you are. happy monthsary, bebi. ♡";
  for (let i = 0; i < 22; i++) window.setTimeout(makeHeart, i * 75);
  for (let i = 0; i < 18; i++) window.setTimeout(() => {
    const p = document.createElement("span");
    p.className = "falling-petal";
    p.style.left = `${Math.random() * 100}%`;
    p.style.setProperty("--dx", `${(Math.random() - 0.5) * 160}px`);
    p.style.animationDuration = `${4 + Math.random() * 4}s`;
    document.body.appendChild(p);
    window.setTimeout(() => p.remove(), 8500);
  }, i * 140);
  showToast("a little rose, just for you 🌹");
});

const sections = [...document.querySelectorAll(".page-section")];
if ("IntersectionObserver" in window) {
  const sectionObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        document.querySelectorAll(".nav-link").forEach(link => {
          link.classList.toggle("active", link.getAttribute("href") === `#${entry.target.id}`);
        });
      }
    });
  }, { rootMargin: "-30% 0px -55% 0px" });
  sections.forEach(section => sectionObserver.observe(section));
}
for (let i = 0; i < 7; i++) window.setTimeout(makeHeart, i * 650);
