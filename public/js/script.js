// ── Navbar scroll effect ──
  const navbar = document.getElementById('navbar');
  window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 20);
    highlightNav();
  });

  // ── Active section highlight ──
  const sections = ['home','about','gallery','blog','updates','contact'];
  function highlightNav() {
    let current = 'home';
    sections.forEach(id => {
      const el = document.getElementById(id);
      if (el && window.scrollY >= el.offsetTop - 100) current = id;
    });
    document.querySelectorAll('.nav-link[data-section]').forEach(link => {
      link.classList.toggle('active', link.dataset.section === current);
    });
  }

  // ── Mobile hamburger ──
  const hamburger = document.getElementById('hamburger');
  const mobileMenu = document.getElementById('mobileMenu');
  let menuOpen = false;

  hamburger.addEventListener('click', () => {
    menuOpen = !menuOpen;
    mobileMenu.style.transform = menuOpen ? 'translateY(0)' : 'translateY(-110%)';
    const spans = hamburger.querySelectorAll('span');
    if (menuOpen) {
      spans[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
      spans[1].style.opacity = '0';
      spans[2].style.transform = 'rotate(-45deg) translate(5px, -5px)';
    } else {
      spans.forEach(s => { s.style.transform = ''; s.style.opacity = ''; });
    }
  });

  function closeMobile() {
    menuOpen = false;
    mobileMenu.style.transform = 'translateY(-110%)';
    hamburger.querySelectorAll('span').forEach(s => { s.style.transform = ''; s.style.opacity = ''; });
  }

  // ── Gallery filter ──
  document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const f = btn.dataset.filter;
      document.querySelectorAll('.gallery-item').forEach(item => {
        const match = f === 'all' || item.dataset.cat === f;
        item.style.opacity = match ? '1' : '0.2';
        item.style.transform = match ? '' : 'scale(0.96)';
        item.style.pointerEvents = match ? '' : 'none';
      });
    });
  });

  // ── Scroll reveal ──
  const revealEls = document.querySelectorAll('.reveal');
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) { e.target.classList.add('visible'); revealObserver.unobserve(e.target); }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });
  revealEls.forEach(el => revealObserver.observe(el));

  // ── Contact form ──
  function submitContactForm(e) {
    e.preventDefault();
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const subject = document.getElementById('subject').value.trim();
    const message = document.getElementById('message').value.trim();

    if (!name || !email || !subject || !message) {
      document.querySelectorAll('.contact-input').forEach(inp => {
        if (!inp.value.trim()) { inp.style.borderColor = '#e8154a'; setTimeout(() => inp.style.borderColor = '', 2000); }
      });
      return;
    }

    // Show success
    const successEl = document.getElementById('formSuccess');
    document.getElementById('successMsg').textContent = `Thanks ${name}! Your message has been sent. I'll get back to you soon.`;
    successEl.classList.remove('hidden');
    document.getElementById('contactForm').reset();

    // Scroll to success message
    successEl.scrollIntoView({ behavior: 'smooth', block: 'center' });
  }

  // ── Newsletter ──
  function subscribeNewsletter() {
    const input = document.getElementById('newsletterEmail');
    const msg = document.getElementById('newsletterMsg');
    if (input.value && input.value.includes('@')) {
      document.getElementById('newsletterForm').innerHTML = `<p class="text-green-400 font-medium text-sm w-full text-center py-1">🎉 You're in! Welcome to the Sunday letter.</p>`;
    } else {
      input.style.outline = '2px solid #e8154a';
      input.placeholder = 'Please enter a valid email';
      setTimeout(() => { input.style.outline = ''; input.placeholder = 'your@email.com'; }, 2000);
    }
  }