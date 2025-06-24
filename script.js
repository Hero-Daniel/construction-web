// Reveal the next section when scroll passes a threshold
window.addEventListener("scroll", () => {
    const nextSection = document.getElementById("nextSection");
    const scrollY = window.scrollY;
  
    if (scrollY > window.innerHeight * 0.6) {
      nextSection.classList.add("visible");
    } else {
      nextSection.classList.remove("visible");
    }
  });
  