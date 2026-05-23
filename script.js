(function () {
  "use strict";

  const PLATFORMS = [
    {
      id: "twitch",
      name: "Twitch",
      url: "https://www.twitch.tv/scofield_14cm",
      desc: "Live streamy, CS i rozmowy na czacie.",
      accent: "#9146ff",
      icon: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M4 2h16v14l-4 4H4V2zm2 2v12h8.5l3.5-3.5V4H6zm3 2h2v6H9V6zm4 0h2v6h-2V6z"/></svg>`,
    },
    {
      id: "youtube",
      name: "YouTube",
      url: "https://www.youtube.com/@Scofield_14cm",
      desc: "Highlighty, VOD-y i dłuższe materiały.",
      accent: "#ff0033",
      icon: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.5 12 3.5 12 3.5s-7.5 0-9.4.6A3 3 0 0 0 .5 6.2 31 31 0 0 0 0 12a31 31 0 0 0 .6 5.8 3 3 0 0 0 2.1 2.1c1.9.6 9.3.6 9.3.6s7.5 0 9.4-.6a3 3 0 0 0 2.1-2.1A31 31 0 0 0 24 12a31 31 0 0 0-.5-5.8zM9.75 15.02V8.98L15.5 12l-5.75 3.02z"/></svg>`,
    },
    {
      id: "tiktok",
      name: "TikTok",
      url: "https://www.tiktok.com/@scofield_14cm",
      desc: "Krótkie klipy i momenty z gry.",
      accent: "#00f2ea",
      icon: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1 0-5.78 2.92 2.92 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05 6.33 6.33 0 0 0-6.34 6.34 6.33 6.33 0 0 0 6.34 6.34 6.33 6.33 0 0 0 6.33-6.34V8.5a8.16 8.16 0 0 0 4.77 1.52V6.6a4.85 4.85 0 0 1-1-.09z"/></svg>`,
    },
    {
      id: "discord",
      name: "Discord",
      url: "https://discord.com/invite/8XXQnDZTXT",
      desc: "Społeczność, czat i ogłoszenia.",
      accent: "#5865f2",
      icon: `<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M20.317 4.369a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037 12.924 12.924 0 0 0-.608 1.249 18.427 18.427 0 0 0-5.487 0 12.683 12.683 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.331c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.974 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z"/></svg>`,
    },
    {
      id: "instagram",
      name: "Instagram",
      url: "https://www.instagram.com/scofield_14cm/",
      desc: "Stories, zdjęcia i życie poza streamem.",
      accent: "#e4405f",
      icon: `<svg class="icon-instagram" viewBox="0 0 24 24" fill="#af354e" aria-hidden="true">
<path d="M7 2C4.24 2 2 4.24 2 7v10c0 2.76 2.24 5 5 5h10c2.76 0 5-2.24 5-5V7c0-2.76-2.24-5-5-5H7zm10 2c1.65 0 3 1.35 3 3v10c0 1.65-1.35 3-3 3H7c-1.65 0-3-1.35-3-3V7c0-1.65 1.35-3 3-3h10zm-5 3a5 5 0 1 0 0 10 5 5 0 0 0 0-10zm0 2a3 3 0 1 1 0 6 3 3 0 0 1 0-6zm5.5-.9a1.1 1.1 0 1 0 0 2.2 1.1 1.1 0 0 0 0-2.2z"/>
</svg>`,
    },
    {
      id: "steam",
      name: "Steam",
      url: "https://steamcommunity.com/id/leonek997",
      desc: "Profil Steam — dodaj do znajomych.",
      accent: "#2a475e",
     icon: `<svg class="icon-steam" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
     <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm4.848 5.016a3.016 3.016 0 1 1 0 6.032c-.145 0-.287-.011-.426-.03l-2.42 3.457a2.82 2.82 0 0 1-2.808 3.024 2.82 2.82 0 0 1-2.67-1.914l-2.025-.836a2.24 2.24 0 1 1 .858-1.99l1.86.768a2.82 2.82 0 0 1 2.403-1.345c.11 0 .219.007.326.019l2.273-3.248a3.01 3.01 0 0 1-.387-1.486 3.016 3.016 0 0 1 3.016-3.016zm0 1.474a1.542 1.542 0 1 0 0 3.084 1.542 1.542 0 0 0 0-3.084zM5.266 13.79a.935.935 0 1 0 0 1.87.935.935 0 0 0 0-1.87zm5.928.22a1.346 1.346 0 1 0 0 2.692 1.346 1.346 0 0 0 0-2.692z"/>
      </svg>`,    },
    {
      id: "donate",
      name: "Wesprzyj",
      url: "https://tipply.pl/@scofield7878",
      desc: "Wsparcie twórcy przez Tipply.",
      accent: "#f59e0b",
      icon: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg>`,
    },
  ];

  const grid = document.getElementById("social-grid");
  const header = document.querySelector(".site-header");
  const backToTop = document.getElementById("back-to-top");
  const yearEl = document.getElementById("year");
  const menuToggle = document.querySelector(".menu-toggle");
  const mobileNav = document.getElementById("mobile-nav");

  function renderSocialCards() {
    if (!grid) return;

    const active = PLATFORMS.filter((p) => p.url && String(p.url).trim());

    grid.innerHTML = active
      .map(
        (p) => `
      <a
        href="${escapeHtml(p.url)}"
        class="social-card reveal"
        role="listitem"
        target="_blank"
        rel="noopener noreferrer"
        style="--card-accent: ${p.accent}"
        aria-label="${escapeHtml(p.name)} — otwórz w nowej karcie"
      >
        <div class="social-card-icon${p.id === "steam" ? " social-card-icon--steam" : ""}" style="color: ${p.accent}">${p.icon}</div>
        <h3 class="social-card-name">${escapeHtml(p.name)}</h3>
        <p class="social-card-desc">${escapeHtml(p.desc)}</p>
        <span class="social-card-arrow">
          Otwórz
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M7 17L17 7M17 7H7M17 7v10"/></svg>
        </span>
      </a>
    `
      )
      .join("");

    observeReveals(grid.querySelectorAll(".reveal"));
  }

  function escapeHtml(str) {
    const div = document.createElement("div");
    div.textContent = str;
    return div.innerHTML;
  }

  let revealObserver;

  function observeReveals(elements) {
    if (!elements || !elements.length) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      elements.forEach((el) => el.classList.add("is-visible"));
      return;
    }

    if (!revealObserver) {
      revealObserver = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("is-visible");
              revealObserver.unobserve(entry.target);
            }
          });
        },
        { root: null, rootMargin: "0px 0px -8% 0px", threshold: 0.1 }
      );
    }

    elements.forEach((el) => {
      if (!el.classList.contains("is-visible")) {
        revealObserver.observe(el);
      }
    });
  }

  function onScroll() {
    const y = window.scrollY;

    if (header) {
      header.classList.toggle("is-scrolled", y > 24);
    }

    if (backToTop) {
      backToTop.classList.toggle("is-visible", y > 400);
    }
  }

  function initMobileMenu() {
    if (!menuToggle || !mobileNav) return;

    menuToggle.addEventListener("click", () => {
      const open = menuToggle.getAttribute("aria-expanded") === "true";
      menuToggle.setAttribute("aria-expanded", String(!open));
      mobileNav.hidden = open;
      mobileNav.classList.toggle("is-open", !open);
      document.body.style.overflow = open ? "" : "hidden";
    });

    mobileNav.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        menuToggle.setAttribute("aria-expanded", "false");
        mobileNav.hidden = true;
        mobileNav.classList.remove("is-open");
        document.body.style.overflow = "";
      });
    });
  }

  function initBackToTop() {
    if (!backToTop) return;
    backToTop.addEventListener("click", () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }

  function initBackgroundMusic() {
    const audio = document.getElementById("bg-music");
    const toggle = document.getElementById("music-toggle");
    const gate = document.getElementById("enter-gate");
    const enterBtn = document.getElementById("enter-btn");
    if (!audio) return;

    let userPaused = false;
    let entered = false;

    function setPlayingUI(playing) {
      if (!toggle) return;
      toggle.classList.toggle("is-muted", !playing);
      toggle.setAttribute("aria-label", playing ? "Wycisz muzykę" : "Włącz muzykę");
      toggle.title = playing ? "Wycisz muzykę" : "Włącz muzykę";
    }

    function hideGate() {
      entered = true;
      document.body.classList.add("site-entered");
      if (gate) gate.hidden = true;
    }

    function showGate() {
      if (entered || userPaused) return;
      if (gate) gate.hidden = false;
    }

    function playWithSound() {
      if (userPaused) return Promise.resolve();
      audio.muted = false;
      audio.volume = 0.35;
      return audio
        .play()
        .then(() => {
          hideGate();
          setPlayingUI(true);
        })
        .catch(() => {});
    }

    function enterSite() {
      hideGate();
      userPaused = false;
      playWithSound();
    }

    function checkAutoplay() {
      if (!audio.paused && audio.currentTime > 0) {
        hideGate();
        setPlayingUI(true);
        return true;
      }
      return false;
    }

    function animateToggle() {
      if (!toggle) return;
      toggle.classList.remove("is-animating");
      void toggle.offsetWidth;
      toggle.classList.add("is-animating");
      setTimeout(() => toggle.classList.remove("is-animating"), 550);
    }

    toggle?.addEventListener("click", (e) => {
      e.stopPropagation();
      animateToggle();
      if (audio.paused || userPaused) {
        userPaused = false;
        enterSite();
      } else {
        userPaused = true;
        audio.pause();
        setPlayingUI(false);
      }
    });

    enterBtn?.addEventListener("click", enterSite);

    audio.addEventListener("play", () => {
      hideGate();
      setPlayingUI(true);
    });

    setPlayingUI(true);
    playWithSound();

    setTimeout(() => {
      if (!checkAutoplay()) showGate();
    }, 900);

    window.addEventListener("pageshow", () => {
      if (!userPaused) playWithSound();
    });
  }

  function initCursorGlow() {
    const glow = document.getElementById("cursor-glow");
    if (!glow) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    if (window.matchMedia("(pointer: coarse)").matches) return;

    let targetX = -200;
    let targetY = -200;
    let currentX = -200;
    let currentY = -200;

    document.addEventListener(
      "mousemove",
      (e) => {
        targetX = e.clientX;
        targetY = e.clientY;
        document.body.classList.add("is-cursor-active");
      },
      { passive: true }
    );

    document.addEventListener("mouseleave", () => {
      document.body.classList.remove("is-cursor-active");
    });

    function animate() {
      currentX += (targetX - currentX) * 0.18;
      currentY += (targetY - currentY) * 0.18;
      glow.style.left = `${currentX}px`;
      glow.style.top = `${currentY}px`;
      requestAnimationFrame(animate);
    }

    animate();
  }

  function init() {
    if (yearEl) yearEl.textContent = String(new Date().getFullYear());

    renderSocialCards();
    observeReveals(document.querySelectorAll(".hero .reveal, .section-head .reveal"));

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    initMobileMenu();
    initBackToTop();
    initBackgroundMusic();
    initCursorGlow();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
