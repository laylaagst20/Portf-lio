window.addEventListener("scroll", function () {
    let menu = document.querySelector(".menu");
    if (window.scrollY > 50) {
        menu.classList.add("scrolled"); // Aplica a classe para tornar transparente
    } else {
        menu.classList.remove("scrolled"); // Volta a ser preto
    }
});


document.querySelector(".typing-container").addEventListener("mouseenter", function () {
    let text = document.getElementById("typing-text");
    
    // Reinicia a animação
    text.style.animation = "none";
    text.offsetHeight; // Força um reflow para resetar a animação
    text.style.animation = "typing 3s steps(30, end) forwards, blink 0.7s step-end infinite";
});

let lastScrollTop = 0;
const menu = document.querySelector(".menu");

window.addEventListener("scroll", function () {
  let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

  if (scrollTop > lastScrollTop) {
    // Rolando para baixo
    menu.classList.add("hide");
  } else {
    // Rolando para cima
    menu.classList.remove("hide");
  }

  lastScrollTop = scrollTop;
});
    document.addEventListener("DOMContentLoaded", function() {
        const fills = document.querySelectorAll('.progress-fill');
        fills.forEach(fill => {
            const skill = fill.getAttribute('data-skill');
            fill.style.width = skill;
        });
    });

