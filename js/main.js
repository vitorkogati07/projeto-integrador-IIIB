// ─── 1. Efeito de Scroll no Header (Navbar) ──────────────
const navbar = document.querySelector('nav'); // Agora busca diretamente a tag <nav>

if (navbar) {
  window.addEventListener('scroll', () => {
    // Adiciona a classe 'scrolled' se rolar mais de 20px
    navbar.classList.toggle('scrolled', window.scrollY > 20);
  });
}

// ─── 2. Animação de Fade-in (Aparecer suavemente) ──────────────
const fadeObserver = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      // Opcional: Para de observar o elemento depois que ele aparece uma vez
      observer.unobserve(entry.target); 
    }
  });
}, { threshold: 0.12 }); // Ativa quando 12% do elemento estiver visível

// Aplica o observador a todos os elementos com a classe .fade-in
document.querySelectorAll('.fade-in').forEach(el => fadeObserver.observe(el));


// ─── 3. Animação dos Contadores (Números subindo) ──────────────
function animateCounter(el, target, prefix = '') {
  let current = 0;
  const duration = 2000; // Duração de 2 segundos
  const step = target / (duration / 16);

  const timer = setInterval(() => {
    current += step;

    if (current >= target) {
      current = target;
      clearInterval(timer);
    }

    const numberElement = el.querySelector('.stat-number');
    if (numberElement) {
      numberElement.innerHTML = `<span>${prefix}</span>${Math.floor(current)}`;
    }
  }, 16);
}

const statsObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const statItems = document.querySelectorAll('.stat-item');
      const targets = [30, 40, 60]; // Os números alvo: +30, +40, +60

      statItems.forEach((item, i) => {
        // O setTimeout cria o efeito cascata (um número de cada vez)
        setTimeout(() => animateCounter(item, targets[i], '+'), i * 200);
      });

      // Desconecta o observador para a animação rodar apenas uma vez
      statsObserver.disconnect();
    }
  });
}, { threshold: 0.5 }); // Ativa quando 50% da seção estiver visível na tela

// Só inicia o observador se a seção .stats existir na página
const statsSection = document.querySelector('.stats');
if (statsSection) {
  statsObserver.observe(statsSection);
}