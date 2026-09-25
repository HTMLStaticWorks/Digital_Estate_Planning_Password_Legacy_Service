document.addEventListener('DOMContentLoaded', () => {
  // Theme Toggle
  const themeToggles = [document.getElementById('theme-toggle'), document.getElementById('mobile-theme-toggle')];
  
  const applyTheme = (theme) => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  };

  // Check saved theme or system preference
  if (localStorage.getItem('theme') === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    applyTheme('dark');
  } else {
    applyTheme('light');
  }

  themeToggles.forEach(toggle => {
    if(toggle) {
      toggle.addEventListener('click', () => {
        const isDark = document.documentElement.classList.contains('dark');
        applyTheme(isDark ? 'light' : 'dark');
      });
    }
  });

  // RTL Toggle
  const rtlToggles = [document.getElementById('rtl-toggle'), document.getElementById('mobile-rtl-toggle')];
  
  const applyRTL = (isRTL) => {
    if (isRTL) {
      document.documentElement.setAttribute('dir', 'rtl');
      localStorage.setItem('dir', 'rtl');
    } else {
      document.documentElement.setAttribute('dir', 'ltr');
      localStorage.setItem('dir', 'ltr');
    }
  };

  if (localStorage.getItem('dir') === 'rtl') {
    applyRTL(true);
  }

  rtlToggles.forEach(toggle => {
    if(toggle) {
      toggle.addEventListener('click', () => {
        const currentDir = document.documentElement.getAttribute('dir');
        applyRTL(currentDir === 'ltr');
      });
    }
  });

  // Mobile Menu
  const mobileMenuBtn = document.getElementById('mobile-menu-btn');
  const mobileMenu = document.getElementById('mobile-menu');
  if (mobileMenuBtn && mobileMenu) {
    mobileMenuBtn.addEventListener('click', () => {
      mobileMenu.classList.toggle('hidden');
    });

    // Close menu when clicking a link
    const mobileLinks = mobileMenu.querySelectorAll('a');
    mobileLinks.forEach(link => {
      link.addEventListener('click', () => {
        mobileMenu.classList.add('hidden');
      });
    });
  }

  // Sticky Header & Scroll to top
  const header = document.getElementById('header');
  const scrollToTopBtn = document.getElementById('scroll-to-top');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 10) {
      if(header) header.classList.add('shadow-md');
    } else {
      if(header) header.classList.remove('shadow-md');
    }

    if (window.scrollY > 300) {
      if(scrollToTopBtn) {
        scrollToTopBtn.classList.remove('opacity-0', 'translate-y-10', 'pointer-events-none');
        scrollToTopBtn.classList.add('opacity-100', 'translate-y-0');
      }
    } else {
      if(scrollToTopBtn) {
        scrollToTopBtn.classList.add('opacity-0', 'translate-y-10', 'pointer-events-none');
        scrollToTopBtn.classList.remove('opacity-100', 'translate-y-0');
      }
    }
  });

  if (scrollToTopBtn) {
    scrollToTopBtn.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  // Active Nav Link highlighting
  const currentPath = window.location.pathname.split('/').pop() || 'index.html';
  const navLinks = document.querySelectorAll('.nav-link');
  navLinks.forEach(link => {
    if (link.getAttribute('href') === currentPath) {
      link.classList.add('active', 'text-indigo-600', 'dark:text-indigo-400');
    }
  });
});

// Password toggle helper for forms
function togglePassword(inputId) {
  const input = document.getElementById(inputId);
  if (input) {
    input.type = input.type === 'password' ? 'text' : 'password';
  }
}
