
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    const navbar = document.querySelector('.navbar');

    hamburger.addEventListener('click', () => {
      hamburger.classList.toggle('active');
      navLinks.classList.toggle('active');
      
 
      const isExpanded = hamburger.classList.contains('active');
      hamburger.setAttribute('aria-expanded', isExpanded);
    });

    window.addEventListener('scroll', () => {
      if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
      } else {
        navbar.classList.remove('scrolled');
      }
    });

    document.querySelectorAll('.nav-links a').forEach(link => {
      link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navLinks.classList.remove('active');
        hamburger.setAttribute('aria-expanded', false);
      });
    });

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
          target.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      });
    });

    function scrollReveal() {
      const elements = document.querySelectorAll('.fade-in, .fade-in-left, .fade-in-right, .fade-in-scale');
      const windowHeight = window.innerHeight;
      const revealPoint = 150;

      elements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        
        if (elementTop < windowHeight - revealPoint) {
          element.classList.add('animate');
        }
      });
    }

    window.addEventListener('load', scrollReveal);
    window.addEventListener('scroll', scrollReveal);

    document.addEventListener('DOMContentLoaded', function() {
      setTimeout(() => {
        document.querySelector('.hero-content h1')?.classList.add('animate');
      }, 300);
      
      setTimeout(() => {
        document.querySelector('.hero-content p')?.classList.add('animate');
      }, 600);
      
      setTimeout(() => {
        document.querySelector('.hero-cta')?.classList.add('animate');
      }, 900);
    });
 
    document.addEventListener('DOMContentLoaded', () => {
  const fadeElements = document.querySelectorAll('.fade-element');

  const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.5
  };

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in-view');
      } else {
        entry.target.classList.remove('in-view');
      }
    });
  }, observerOptions);

  fadeElements.forEach(element => {
    observer.observe(element);
  });
});


  const grid = document.querySelector(".projects-grid");
  const cards = document.querySelectorAll(".project-card");

  let index = 0;

  function updateCarousel() {
    cards.forEach(card => card.classList.remove("active"));
    cards[index].classList.add("active");

    const cardWidth = cards[0].offsetWidth + 40; // lebar card + margin
    const centerOffset = (grid.parentElement.offsetWidth / 2) - (cards[0].offsetWidth / 2);

    const moveX = -(index * cardWidth) + centerOffset;
    grid.style.transform = `translateX(${moveX}px)`;
  }

  function nextSlide() {
    index = (index + 1) % cards.length;
    updateCarousel();
  }

  setInterval(nextSlide, 3000); // auto ganti tiap 3 detik
  window.addEventListener("resize", updateCarousel);
  updateCarousel();
