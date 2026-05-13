/* ============================================================
   STANFORD O'QUV MARKAZI — script.js

   This file controls all interactive behaviour on the site.
   It does NOT handle the booking modal or language toggle —
   those are in features.js.

   TABLE OF CONTENTS
   ──────────────────
   1. Navbar scroll shadow
   2. Burger menu open/close
   3. Close menu when a nav link is clicked
   4. Active nav link highlighting (scroll-based)
   5. Animated number counters
   6. Contact form validation
   7. Scroll-reveal animations
   8. Mobile CTA bar — hide near contact section
============================================================ */


/* Run everything after the page is fully loaded */
document.addEventListener('DOMContentLoaded', () => {
  initPhonePrefix();
  initMobileLangSync();
  initNavbarScroll();
  initBurgerMenu();
  initNavLinkClose();
  initActiveNavLink();
  initCounters();
  initContactForm();
  initScrollReveal();
  initMobileCTABar();
});


/* ============================================================
   1. NAVBAR SCROLL SHADOW
   ─────────────────────────────────────────────────────────
   Adds a box-shadow to the navbar when the user scrolls
   down more than 40px. Removes it when back at the top.
   The shadow style is defined in style.css (.navbar.scrolled).
============================================================ */
function initNavbarScroll() {
  const navbar = document.getElementById('navbar');
  if (!navbar) return;

  const onScroll = () => {
    /* Toggle the .scrolled class based on scroll position */
    navbar.classList.toggle('scrolled', window.scrollY > 40);
  };

  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll(); /* Run once on load in case page is already scrolled */
}


/* ============================================================
   2. BURGER MENU
   ─────────────────────────────────────────────────────────
   On mobile, the burger button opens/closes the nav links.
   • Adds .open to .navbar__links — CSS shows the dropdown
   • Adds .open to the burger button — CSS animates it to ✕
   • Locks body scroll while menu is open
============================================================ */
function initBurgerMenu() {
  const burger   = document.getElementById('burgerBtn');
  const navLinks = document.getElementById('navLinks');
  if (!burger || !navLinks) return;

  burger.addEventListener('click', () => {
    const isOpen = navLinks.classList.toggle('open');
    burger.classList.toggle('open', isOpen);
    burger.setAttribute('aria-expanded', isOpen ? 'true' : 'false');

    /* Prevent background scrolling while menu is visible */
    document.body.style.overflow = isOpen ? 'hidden' : '';
  });
}


/* ============================================================
   3. CLOSE MENU ON NAV LINK CLICK
   ─────────────────────────────────────────────────────────
   When the user taps a nav link on mobile, close the menu
   so it doesn't stay open on top of the page content.
============================================================ */
function initNavLinkClose() {
  const burger   = document.getElementById('burgerBtn');
  const navLinks = document.getElementById('navLinks');
  if (!navLinks) return;

  navLinks.querySelectorAll('.navbar__link').forEach(link => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('open');
      burger?.classList.remove('open');
      burger?.setAttribute('aria-expanded', 'false');
      document.body.style.overflow = '';
    });
  });
}


/* ============================================================
   4. ACTIVE NAV LINK ON SCROLL
   ─────────────────────────────────────────────────────────
   Uses IntersectionObserver to watch each section.
   When a section enters the middle of the screen, its
   matching nav link gets the .active class (blue highlight).
============================================================ */
function initActiveNavLink() {
  /* IDs of sections to watch — must match href="#..." in navbar */
  const sectionIds = ['home', 'about', 'courses', 'teachers', 'results', 'contact'];
  const sections   = sectionIds.map(id => document.getElementById(id)).filter(Boolean);
  const navLinks   = document.querySelectorAll('.navbar__link');

  if (!sections.length || !navLinks.length) return;

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;

      /* Remove active from all links */
      navLinks.forEach(link => link.classList.remove('active'));

      /* Add active to the matching link */
      const match = document.querySelector(`.navbar__link[href="#${entry.target.id}"]`);
      match?.classList.add('active');
    });
  }, {
    /* Fire when section centre is in viewport */
    rootMargin: '-40% 0px -55% 0px',
    threshold: 0,
  });

  sections.forEach(section => observer.observe(section));
}


/* ============================================================
   5. ANIMATED NUMBER COUNTERS
   ─────────────────────────────────────────────────────────
   Any element with class .counter and data-target="N"
   will count up from 0 to N when it enters the viewport.

   To use in HTML:
   <strong class="counter" data-target="5000">0</strong>

   The count-up uses an ease-out curve — fast at the start,
   slow at the end — for a smooth, satisfying animation.
============================================================ */
function initCounters() {
  const counters = document.querySelectorAll('.counter');
  if (!counters.length) return;

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;

      const el     = entry.target;
      const target = parseInt(el.dataset.target, 10);
      if (isNaN(target)) return;

      countUp(el, target);
      observer.unobserve(el); /* Only animate once */
    });
  }, { threshold: 0.5 });

  counters.forEach(el => observer.observe(el));
}

/**
 * Animates a number from 0 to `target` over 1.8 seconds.
 * @param {HTMLElement} el     The element to update
 * @param {number}      target The final number
 */
function countUp(el, target) {
  const duration = 1800; /* ms */
  const start    = performance.now();

  const tick = now => {
    const progress = Math.min((now - start) / duration, 1);
    /* Ease-out cubic — fast start, slow finish */
    const eased = 1 - Math.pow(1 - progress, 3);

    el.textContent = Math.floor(eased * target).toLocaleString();

    if (progress < 1) {
      requestAnimationFrame(tick);
    } else {
      el.textContent = target.toLocaleString(); /* Exact final value */
    }
  };

  requestAnimationFrame(tick);
}


/* ============================================================
   6. CONTACT FORM VALIDATION
   ─────────────────────────────────────────────────────────
   Validates Name, Phone, and Course before "submitting".
   On success, hides the form and shows a thank-you message.

   Error messages are shown by adding .error to .form-group —
   the CSS in style.css then shows the .form-group__error span.
============================================================ */
function initContactForm() {
  const form = document.getElementById('contactForm');
  if (!form) return;

  form.addEventListener('submit', e => {
    e.preventDefault(); /* No real server — prevent page reload */

    let valid = true;

    /* ── Validate name (min 2 characters) ── */
    const nameInput = document.getElementById('name');
    const nameGroup = nameInput?.closest('.form-group');
    if (!nameInput?.value.trim() || nameInput.value.trim().length < 2) {
      nameGroup?.classList.add('error');
      valid = false;
    } else {
      nameGroup?.classList.remove('error');
    }

    /* ── Validate phone — input holds digits only, prefix is +998 ── */
    const phoneInput = document.getElementById('phone');
    const phoneGroup = phoneInput?.closest('.form-group');
    const phoneDigits = phoneInput?.value.trim().replace(/\s+/g, '');
    // Need at least 9 digits (Uzbek mobile: XX XXX XX XX)
    if (!phoneDigits || phoneDigits.replace(/\D/g,'').length < 7) {
      phoneGroup?.classList.add('error');
      valid = false;
    } else {
      phoneGroup?.classList.remove('error');
      // Store full number in a data attribute for submission
      if (phoneInput) phoneInput.dataset.fullPhone = '+998' + phoneDigits;
    }

    /* ── Validate course dropdown (must select something) ── */
    const courseInput = document.getElementById('course');
    const courseGroup = courseInput?.closest('.form-group');
    if (!courseInput?.value) {
      courseGroup?.classList.add('error');
      valid = false;
    } else {
      courseGroup?.classList.remove('error');
    }

    /* ── If all valid, show success message ── */
    if (valid) {
      /* Hide all form fields */
      form.querySelectorAll('.form-group, .btn').forEach(el => {
        el.style.display = 'none';
      });
      /* Show the thank-you message */
      document.getElementById('formSuccess').style.display = 'block';
    }
  });

  /* Clear error state as the user types / changes fields */
  form.querySelectorAll('input, select, textarea').forEach(field => {
    field.addEventListener('input', () => {
      field.closest('.form-group')?.classList.remove('error');
    });
  });
}


/* ============================================================
   7. SCROLL-REVEAL ANIMATIONS
   ─────────────────────────────────────────────────────────
   Cards and sections fade up when they enter the viewport.
   The .reveal and .reveal--visible styles are in style.css.
   Stagger delay: each sibling starts 70ms after the previous.
============================================================ */
function initScrollReveal() {
  /* Which elements to animate — add more selectors if needed */
  const selector = [
    '.course-card',
    '.teacher-card',
    '.score-card',
    '.testi-card',
    '.about__value',
    '.about__stat-card',
    '.location__detail',
    '.contact__channel',
  ].join(', ');

  const elements = document.querySelectorAll(selector);
  if (!elements.length) return;

  /* Add base class — starts elements invisible + shifted down */
  elements.forEach(el => {
    el.classList.add('reveal');
    /* Stagger: delay based on position within parent */
    const siblings = Array.from(el.parentElement?.children || []);
    el.style.transitionDelay = `${siblings.indexOf(el) * 0.07}s`;
  });

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add('reveal--visible');
      observer.unobserve(entry.target); /* Animate once only */
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

  elements.forEach(el => observer.observe(el));
}


/* ============================================================
   8. MOBILE CTA BAR — HIDE NEAR CONTACT SECTION
   ─────────────────────────────────────────────────────────
   The sticky bottom bar would overlap the contact form.
   This hides it automatically when the contact section
   is visible, and shows it again when the user scrolls away.
============================================================ */
function initMobileCTABar() {
  const bar     = document.getElementById('mobileCTABar');
  const contact = document.getElementById('contact');
  if (!bar || !contact) return;

  const observer = new IntersectionObserver(
    ([entry]) => bar.classList.toggle('hidden', entry.isIntersecting),
    { threshold: 0.1 }
  );

  observer.observe(contact);
}


/* ============================================================
   PHONE NUMBER AUTO-PREFIX
   ─────────────────────────────────────────────────────────
   - Keeps "+998 " as a non-deletable prefix
   - Formats input as user types: XX XXX XX XX
   - Works on the contact form phone field
============================================================ */
function initPhonePrefix() {
  const input = document.getElementById('phone');
  if (!input) return;

  /* Format digits into XX XXX XX XX */
  function formatDigits(digits) {
    // digits = raw numbers only, max 9
    const d = digits.replace(/\D/g, '').slice(0, 9);
    let out = '';
    if (d.length > 0) out += d.slice(0, 2);
    if (d.length > 2) out += ' ' + d.slice(2, 5);
    if (d.length > 5) out += ' ' + d.slice(5, 7);
    if (d.length > 7) out += ' ' + d.slice(7, 9);
    return out;
  }

  input.addEventListener('input', (e) => {
    const raw   = input.value;
    const digits = raw.replace(/\D/g, '');
    input.value  = formatDigits(digits);
  });

  /* Prevent backspace from going past empty — the prefix is in the
     separate .phone-prefix span, so the input itself starts clean */
  input.addEventListener('keydown', (e) => {
    if (e.key === 'Backspace' && input.value === '') {
      e.preventDefault(); // nothing to delete
    }
  });

  /* On focus: if empty, leave placeholder visible */
  input.addEventListener('focus', () => {
    input.placeholder = 'XX XXX XX XX';
  });
}

/* ============================================================
   MOBILE LANG TOGGLE SYNC
   ─────────────────────────────────────────────────────────
   Keeps the mobile lang buttons (inside the hamburger menu)
   in sync with the desktop lang toggle injected by features.js
============================================================ */
function initMobileLangSync() {
  const mobileRow = document.getElementById('mobileLangRow');
  if (!mobileRow) return;

  /* Sync active state from localStorage on load */
  const saved = localStorage.getItem('stanford_lang') || 'en';
  syncMobileLang(saved);

  /* When a mobile lang button is clicked */
  mobileRow.addEventListener('click', (e) => {
    const btn = e.target.closest('.lang-toggle__btn');
    if (!btn) return;
    const lang = btn.dataset.lang;

    /* Update mobile buttons */
    syncMobileLang(lang);

    /* Also update the desktop toggle (injected by features.js) */
    document.querySelectorAll('#langToggle .lang-toggle__btn').forEach(b => {
      b.classList.toggle('active', b.dataset.lang === lang);
      b.setAttribute('aria-pressed', b.dataset.lang === lang ? 'true' : 'false');
    });

    /* Trigger the actual language switch via the global applyLanguage function */
    if (typeof applyLanguage === 'function') applyLanguage(lang);
    localStorage.setItem('stanford_lang', lang);
  });
}

function syncMobileLang(lang) {
  document.querySelectorAll('#mobileLangRow .lang-toggle__btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.lang === lang);
  });
}
