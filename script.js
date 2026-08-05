// ============================================
// PHẠM MINH LỘC — Portfolio JavaScript
// Dark Cinematic Edition
// ============================================

'use strict';

// ===== CUSTOM CURSOR =====
(function initCursor() {
  const cursor = document.getElementById('cursor');
  const follower = document.getElementById('cursor-follower');
  if (!cursor || !follower) return;

  let mouseX = 0, mouseY = 0;
  let followerX = 0, followerY = 0;

  document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
    cursor.style.left = mouseX + 'px';
    cursor.style.top = mouseY + 'px';
  });

  function animateFollower() {
    followerX += (mouseX - followerX) * 0.12;
    followerY += (mouseY - followerY) * 0.12;
    follower.style.left = followerX + 'px';
    follower.style.top = followerY + 'px';
    requestAnimationFrame(animateFollower);
  }
  animateFollower();
})();

// ===== LOADER =====
(function initLoader() {
  const loader = document.getElementById('loader');
  const percent = document.getElementById('loader-percent');
  if (!loader) return;

  let count = 0;
  const interval = setInterval(() => {
    count += Math.floor(Math.random() * 8) + 3;
    if (count >= 100) count = 100;
    if (percent) percent.textContent = count + '%';
    if (count === 100) {
      clearInterval(interval);
      setTimeout(() => {
        loader.classList.add('hidden');
        document.body.style.overflow = '';
        initReveal();
      }, 600);
    }
  }, 50);

  document.body.style.overflow = 'hidden';
})();

// ===== NAVBAR =====
(function initNavbar() {
  const navbar = document.getElementById('navbar');
  const hamburger = document.getElementById('hamburger');
  const navLinks = document.getElementById('nav-links');

  if (!navbar) return;

  window.addEventListener('scroll', () => {
    if (window.scrollY > 60) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });

  if (hamburger && navLinks) {
    hamburger.addEventListener('click', () => {
      const isOpen = navLinks.classList.toggle('open');
      hamburger.setAttribute('aria-expanded', isOpen);
    });

    // Close menu on link click
    navLinks.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        navLinks.classList.remove('open');
        hamburger.setAttribute('aria-expanded', 'false');
      });
    });
  }

  // Active link highlighting
  const sections = document.querySelectorAll('section[id]');
  const navLinkItems = document.querySelectorAll('.nav-links a');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.getAttribute('id');
        navLinkItems.forEach(a => {
          a.classList.remove('active');
          if (a.getAttribute('href') === '#' + id) a.classList.add('active');
        });
      }
    });
  }, { rootMargin: '-40% 0px -40% 0px' });

  sections.forEach(s => observer.observe(s));
})();

// ===== TYPEWRITER =====
(function initTypewriter() {
  const el = document.getElementById('typewriter');
  if (!el) return;

  const phrases = [
    'đẹp đến nghẹt thở.',
    'đậm chất điện ảnh.',
    'sống mãi với thời gian.',
    'kể câu chuyện của bạn.',
  ];

  let phraseIndex = 0;
  let charIndex = 0;
  let deleting = false;

  function type() {
    const current = phrases[phraseIndex];

    if (deleting) {
      el.textContent = current.substring(0, charIndex--);
      if (charIndex < 0) {
        deleting = false;
        phraseIndex = (phraseIndex + 1) % phrases.length;
        setTimeout(type, 500);
        return;
      }
      setTimeout(type, 40);
    } else {
      el.textContent = current.substring(0, charIndex++);
      if (charIndex > current.length) {
        deleting = true;
        setTimeout(type, 2000);
        return;
      }
      setTimeout(type, 65);
    }
  }

  setTimeout(type, 1500);
})();

// ===== PARTICLES =====
(function initParticles() {
  const canvas = document.getElementById('particles-canvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');

  let particles = [];
  let W, H;

  function resize() {
    W = canvas.width = window.innerWidth;
    H = canvas.height = window.innerHeight;
  }
  resize();
  window.addEventListener('resize', resize);

  class Particle {
    constructor() { this.reset(); }
    reset() {
      this.x = Math.random() * W;
      this.y = Math.random() * H;
      this.size = Math.random() * 2 + 0.5;
      this.speedX = (Math.random() - 0.5) * 0.3;
      this.speedY = -Math.random() * 0.4 - 0.1;
      this.opacity = Math.random() * 0.5 + 0.1;
      this.life = 0;
      this.maxLife = Math.random() * 200 + 100;
      // Warm amber or cool white
      this.color = Math.random() > 0.5 ? '232, 160, 69' : '240, 235, 227';
    }
    update() {
      this.x += this.speedX;
      this.y += this.speedY;
      this.life++;
      if (this.life > this.maxLife || this.y < -10) this.reset();
    }
    draw() {
      const progress = this.life / this.maxLife;
      const alpha = this.opacity * Math.sin(Math.PI * progress);
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(${this.color}, ${alpha})`;
      ctx.fill();
    }
  }

  for (let i = 0; i < 80; i++) {
    const p = new Particle();
    p.life = Math.random() * p.maxLife; // stagger start
    particles.push(p);
  }

  function animate() {
    ctx.clearRect(0, 0, W, H);
    particles.forEach(p => { p.update(); p.draw(); });
    requestAnimationFrame(animate);
  }
  animate();
})();

// ===== SCROLL REVEAL =====
function initReveal() {
  const revealEls = document.querySelectorAll('.reveal, .reveal-left, .reveal-right');

  const obs = new IntersectionObserver((entries) => {
    entries.forEach((entry, i) => {
      if (entry.isIntersecting) {
        setTimeout(() => {
          entry.target.classList.add('visible');
          // Trigger skill bars if inside revealed element
          entry.target.querySelectorAll('.skill-fill').forEach(bar => {
            bar.style.width = bar.dataset.width + '%';
          });
          // Trigger counters
          entry.target.querySelectorAll('.counter').forEach(animateCounter);
        }, i * 80);
        obs.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });

  revealEls.forEach(el => obs.observe(el));

  // Also observe skill bars and counters in already-revealed parents
  document.querySelectorAll('.reveal.visible .skill-fill').forEach(bar => {
    bar.style.width = bar.dataset.width + '%';
  });
}

// ===== ANIMATED COUNTERS =====
function animateCounter(el) {
  if (el.dataset.animated) return;
  el.dataset.animated = '1';
  const target = parseInt(el.dataset.target, 10);
  let current = 0;
  const step = Math.ceil(target / 40);
  const timer = setInterval(() => {
    current += step;
    if (current >= target) {
      current = target;
      clearInterval(timer);
    }
    el.textContent = current;
  }, 30);
}

// ===== PORTFOLIO FILTER =====
(function initPortfolioFilter() {
  const filterBtns = document.querySelectorAll('.filter-btn');
  const items = document.querySelectorAll('.portfolio-item');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filter = btn.dataset.filter;

      items.forEach((item, i) => {
        const cat = item.dataset.category;
        const show = filter === 'all' || cat === filter;

        item.style.transition = `opacity 0.4s ease ${i * 50}ms, transform 0.4s ease ${i * 50}ms`;

        if (show) {
          item.style.display = '';
          requestAnimationFrame(() => {
            item.style.opacity = '1';
            item.style.transform = 'scale(1)';
          });
        } else {
          item.style.opacity = '0';
          item.style.transform = 'scale(0.95)';
          setTimeout(() => { item.style.display = 'none'; }, 400);
        }
      });
    });
  });
})();

// ===== LIGHTBOX (Photos) =====
(function initLightbox() {
  const lightbox = document.getElementById('lightbox');
  const lightboxImg = document.getElementById('lightbox-img');
  const closeBtn = document.getElementById('lightbox-close');

  if (!lightbox) return;

  document.querySelectorAll('.portfolio-item:not(.video-item)').forEach(item => {
    item.addEventListener('click', () => {
      const src = item.dataset.src;
      const alt = item.querySelector('img')?.alt || 'Portfolio image';
      if (!src) return;
      lightboxImg.src = src;
      lightboxImg.alt = alt;
      lightbox.classList.add('open');
      document.body.style.overflow = 'hidden';
    });

    item.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); item.click(); }
    });
  });

  function closeLightbox() {
    lightbox.classList.remove('open');
    document.body.style.overflow = '';
    setTimeout(() => { lightboxImg.src = ''; }, 400);
  }

  closeBtn?.addEventListener('click', closeLightbox);
  lightbox.addEventListener('click', (e) => { if (e.target === lightbox) closeLightbox(); });
  document.addEventListener('keydown', (e) => { if (e.key === 'Escape') closeLightbox(); });
})();

// ===== VIDEO MODAL (Google Drive) =====
(function initVideoModal() {
  const modal = document.getElementById('video-modal');
  const iframe = document.getElementById('video-modal-iframe');
  const closeBtn = document.getElementById('video-modal-close');

  if (!modal) return;

  document.querySelectorAll('.portfolio-item.video-item').forEach(item => {
    item.addEventListener('click', () => {
      const videoUrl = item.dataset.video;
      if (!videoUrl) return;
      iframe.src = videoUrl;
      modal.classList.add('open');
      document.body.style.overflow = 'hidden';
    });

    item.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); item.click(); }
    });
  });

  function closeModal() {
    modal.classList.remove('open');
    document.body.style.overflow = '';
    setTimeout(() => { iframe.src = ''; }, 400);
  }

  closeBtn?.addEventListener('click', closeModal);
  modal.addEventListener('click', (e) => { if (e.target === modal) closeModal(); });
  document.addEventListener('keydown', (e) => { if (e.key === 'Escape') closeModal(); });
})();

// ===== SHOWREEL PLAY =====
(function initShowreel() {
  const playBtn = document.getElementById('showreel-play');
  const placeholder = document.getElementById('showreel-placeholder');
  const frame = document.querySelector('.showreel-frame');

  if (!playBtn || !frame) return;

  playBtn.addEventListener('click', () => {
    // Replace with actual YouTube embed — update VIDEO_ID below
    const VIDEO_ID = 'dQw4w9WgXcQ'; // ← Thay bằng YouTube video ID thật của bạn
    const iframe = document.createElement('iframe');
    iframe.src = `https://www.youtube.com/embed/${VIDEO_ID}?autoplay=1&rel=0&modestbranding=1`;
    iframe.allow = 'autoplay; encrypted-media; picture-in-picture';
    iframe.allowFullscreen = true;
    iframe.style.cssText = 'width:100%;height:100%;border:none;position:absolute;inset:0;';
    frame.appendChild(iframe);
    if (placeholder) placeholder.style.display = 'none';
  });

  playBtn.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); playBtn.click(); }
  });
})();

// ===== CONTACT FORM =====
(function initContactForm() {
  const form = document.getElementById('contact-form');
  const submitBtn = document.getElementById('btn-submit');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = document.getElementById('form-name').value.trim();
    const email = document.getElementById('form-email').value.trim();
    const service = document.getElementById('form-service').value.trim();
    const message = document.getElementById('form-message').value.trim();

    if (!name || !email || !message) {
      alert('Vui lòng điền đầy đủ thông tin!');
      return;
    }

    if (submitBtn) {
      submitBtn.textContent = 'Đang gửi...';
      submitBtn.disabled = true;
    }

    // Send via FormSubmit AJAX API
    // Using the masked string to prevent email scraping
    fetch("https://formsubmit.co/ajax/b0709fd1bb2c4f4fba62fc6ec6a67e6d", {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({
        "Tên khách hàng": name,
        "Email liên hệ": email,
        "Dịch vụ quan tâm": service || "Không chọn",
        "Nội dung lời nhắn": message,
        _subject: "Liên hệ mới từ Portfolio: " + name
      })
    })
    .then(response => response.json())
    .then(data => {
      if (submitBtn) {
        submitBtn.textContent = 'Đã gửi thành công ✓';
        submitBtn.style.background = '#4caf50';
      }
      form.reset();
      setTimeout(() => {
        if (submitBtn) {
          submitBtn.textContent = 'Gửi yêu cầu →';
          submitBtn.style.background = '';
          submitBtn.disabled = false;
        }
      }, 3000);
    })
    .catch(error => {
      if (submitBtn) {
        submitBtn.textContent = 'Lỗi! Thử lại sau';
        submitBtn.style.background = '#f44336';
      }
      setTimeout(() => {
        if (submitBtn) {
          submitBtn.textContent = 'Gửi yêu cầu →';
          submitBtn.style.background = '';
          submitBtn.disabled = false;
        }
      }, 3000);
    });
  });
})();

// ===== PARALLAX on HERO BG =====
(function initParallax() {
  const heroBg = document.querySelector('.hero-bg');
  if (!heroBg) return;

  window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    if (scrolled < window.innerHeight) {
      heroBg.style.transform = `scale(1.05) translateY(${scrolled * 0.3}px)`;
    }
  }, { passive: true });
})();

// ===== SMOOTH HOVER on PORTFOLIO GRID (tilt effect) =====
(function initTilt() {
  document.querySelectorAll('.portfolio-item').forEach(card => {
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;
      card.style.transform = `perspective(800px) rotateY(${x * 6}deg) rotateX(${-y * 6}deg) scale(1.02)`;
    });

    card.addEventListener('mouseleave', () => {
      card.style.transform = '';
    });
  });
})();

// ===== NAV SMOOTH SCROLL =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});
