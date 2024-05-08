const accueil = document.querySelector(".accueil-button");
const science = document.querySelector(".science-button");
science.addEventListener("mouseenter", () => {
  accueil.style.backgroundColor = "transparent";
  accueil.style.color = "#adb5bd";
  science.style.backgroundColor = "#adb5bd";
    science.style.color = "white";
});

science.addEventListener("mouseleave", () => {
  accueil.style.backgroundColor = "";
  accueil.style.color = "";
  science.style.color = "";
  science.style.backgroundColor = ""
});

accueil.addEventListener("mouseenter", () => {
  science.style.backgroundColor = "transparent";
  science.style.color = "#adb5bd";
  accueil.style.backgroundColor = "#adb5bd";
  accueil.style.color = "white";
});

accueil.addEventListener("mouseleave", () => {
  science.style.backgroundColor = "";
  science.style.color = "";
  accueil.style.color = "";
  accueil.style.backgroundColor = "";
});