const fs = require('fs');
const path = require('path');

const outDir = path.join(__dirname, '.');

const headerHTML = `
  <!-- HEADER -->
  <header class="fixed w-full top-0 z-50 transition-all duration-300" id="header">
    <div class="bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex justify-between items-center h-20">
          
          <!-- Logo -->
          <div class="flex-shrink-0 flex items-center">
            <a href="index.html" class="flex items-center gap-2 group">
              <div class="w-10 h-10 bg-indigo-600 rounded-lg flex items-center justify-center text-white font-bold text-xl group-hover:bg-indigo-700 transition">
                <i class="fa-solid fa-shield-halved"></i>
              </div>
              <span class="font-bold text-2xl text-gray-900 dark:text-white tracking-tight">Legacy<span class="text-indigo-600 dark:text-indigo-400">Vault</span></span>
            </a>
          </div>

          <!-- Desktop Nav -->
          <nav class="hidden lg:flex gap-8 items-center" id="desktop-nav">
            <a href="index.html" class="nav-link text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 font-medium transition">Home 1</a>
            <a href="home2.html" class="nav-link text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 font-medium transition">Home 2</a>
            <a href="about.html" class="nav-link text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 font-medium transition">About</a>
            <a href="blog.html" class="nav-link text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 font-medium transition">Blog</a>
            <a href="contact.html" class="nav-link text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 font-medium transition">Contact</a>
            <a href="dashboard.html" class="nav-link text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 font-medium transition">Dashboard</a>
          </nav>

          <!-- Desktop Actions -->
          <div class="hidden lg:flex items-center gap-4">
            <!-- Toggles -->
            <button id="theme-toggle" class="w-10 h-10 rounded-full flex items-center justify-center bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition" aria-label="Toggle Theme">
              <i class="fa-solid fa-moon dark:hidden"></i>
              <i class="fa-solid fa-sun hidden dark:block"></i>
            </button>
            <button id="rtl-toggle" class="w-10 h-10 rounded-full flex items-center justify-center bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition font-bold text-sm" aria-label="Toggle RTL">
              RTL
            </button>

            <!-- Auth -->
            <a href="signup.html" class="bg-indigo-600 hover:bg-indigo-700 text-white px-5 py-2.5 rounded-lg font-medium transition shadow-lg shadow-indigo-600/30">Get Started</a>
          </div>

          <!-- Mobile Menu Button -->
          <div class="flex items-center lg:hidden gap-4">
            <button id="mobile-menu-btn" class="text-gray-600 dark:text-gray-300 hover:text-indigo-600 transition p-2">
              <i class="fa-solid fa-bars text-2xl"></i>
            </button>
          </div>
        </div>
      </div>
    </div>

    <!-- Mobile Menu Panel -->
    <div id="mobile-menu" class="hidden lg:hidden bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800 shadow-xl absolute w-full left-0">
      <div class="px-4 pt-2 pb-6 space-y-2">
        <a href="index.html" class="block px-3 py-2 rounded-md text-base font-medium text-gray-900 dark:text-white hover:bg-gray-50 dark:hover:bg-gray-800">Home 1</a>
        <a href="home2.html" class="block px-3 py-2 rounded-md text-base font-medium text-gray-900 dark:text-white hover:bg-gray-50 dark:hover:bg-gray-800">Home 2</a>
        <a href="about.html" class="block px-3 py-2 rounded-md text-base font-medium text-gray-900 dark:text-white hover:bg-gray-50 dark:hover:bg-gray-800">About</a>
        <a href="blog.html" class="block px-3 py-2 rounded-md text-base font-medium text-gray-900 dark:text-white hover:bg-gray-50 dark:hover:bg-gray-800">Blog</a>
        <a href="contact.html" class="block px-3 py-2 rounded-md text-base font-medium text-gray-900 dark:text-white hover:bg-gray-50 dark:hover:bg-gray-800">Contact</a>
        <a href="dashboard.html" class="block px-3 py-2 rounded-md text-base font-medium text-gray-900 dark:text-white hover:bg-gray-50 dark:hover:bg-gray-800">Dashboard</a>
        
        <div class="border-t border-gray-200 dark:border-gray-800 pt-4 mt-4 flex items-center justify-between px-3 gap-3">
          <button id="mobile-theme-toggle" class="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 bg-gray-100 dark:bg-gray-800 rounded-lg text-sm font-medium text-gray-700 dark:text-gray-300">
            <i class="fa-solid fa-moon dark:hidden"></i>
            <i class="fa-solid fa-sun hidden dark:block"></i>
            <span class="dark:hidden">Dark Mode</span>
            <span class="hidden dark:inline">Light Mode</span>
          </button>
          <button id="mobile-rtl-toggle" class="flex-1 px-4 py-2.5 bg-gray-100 dark:bg-gray-800 rounded-lg text-sm font-bold text-gray-700 dark:text-gray-300">Toggle RTL/LTR</button>
        </div>

        <div class="grid grid-cols-1 gap-4 mt-6 px-3">
          <a href="signup.html" class="w-full flex justify-center py-2.5 bg-indigo-600 text-white rounded-lg font-medium shadow-lg shadow-indigo-600/30">Signup</a>
        </div>
      </div>
    </div>
  </header>
  <!-- Spacer for fixed header -->
  <div class="h-20"></div>
`;

const footerHTML = `
  <!-- FOOTER -->
  <footer class="bg-gray-50 dark:bg-gray-950 pt-16 pb-8 border-t border-gray-200 dark:border-gray-800 mt-auto">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8 mb-12">
        
        <!-- Brand -->
        <div class="lg:col-span-2 space-y-6">
          <a href="index.html" class="flex items-center gap-2 group">
            <div class="w-10 h-10 bg-indigo-600 rounded-lg flex items-center justify-center text-white font-bold text-xl">
              <i class="fa-solid fa-shield-halved"></i>
            </div>
            <span class="font-bold text-2xl text-gray-900 dark:text-white tracking-tight">Legacy<span class="text-indigo-600 dark:text-indigo-400">Vault</span></span>
          </a>
          <p class="text-gray-600 dark:text-gray-400 leading-relaxed max-w-sm">
            Providing peace of mind through secure digital estate planning. We protect your digital legacy, passwords, and critical accounts for the ones you trust most.
          </p>
          <div class="flex space-x-5">
            <a href="#" class="text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 text-xl transition"><i class="fa-brands fa-x-twitter"></i></a>
            <a href="#" class="text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 text-xl transition"><i class="fa-brands fa-linkedin"></i></a>
            <a href="#" class="text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 text-xl transition"><i class="fa-brands fa-facebook"></i></a>
            <a href="#" class="text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 text-xl transition"><i class="fa-brands fa-instagram"></i></a>
          </div>
        </div>

        <!-- Quick Links -->
        <div>
          <h4 class="font-bold text-gray-900 dark:text-white mb-6 uppercase tracking-wider text-sm">Quick Links</h4>
          <ul class="space-y-4">
            <li><a href="about.html" class="text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition">About Us</a></li>
            <li><a href="home2.html" class="text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition">Features</a></li>
            <li><a href="blog.html" class="text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition">Security Blog</a></li>
            <li><a href="contact.html" class="text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition">Contact Support</a></li>
          </ul>
        </div>

        <!-- Solutions -->
        <div>
          <h4 class="font-bold text-gray-900 dark:text-white mb-6 uppercase tracking-wider text-sm">Solutions</h4>
          <ul class="space-y-4">
            <li><a href="#" class="text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition">Password Legacy</a></li>
            <li><a href="#" class="text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition">Digital Vaults</a></li>
            <li><a href="#" class="text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition">Legacy Contacts</a></li>
            <li><a href="#" class="text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition">Family Plans</a></li>
          </ul>
        </div>

        <!-- Legal & Trust -->
        <div>
          <h4 class="font-bold text-gray-900 dark:text-white mb-6 uppercase tracking-wider text-sm">Legal & Trust</h4>
          <ul class="space-y-4">
            <li><a href="#" class="text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition">Privacy Policy</a></li>
            <li><a href="#" class="text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition">Terms of Service</a></li>
            <li><a href="#" class="text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition">Security Overview</a></li>
            <li><a href="#" class="text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition">Compliance</a></li>
          </ul>
        </div>
      </div>

      <div class="border-t border-gray-200 dark:border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
        <p class="text-gray-500 dark:text-gray-500 text-sm">
          &copy; 2026 LegacyVault Inc. All rights reserved. Built with military-grade encryption.
        </p>
        <div class="flex items-center gap-4">
          <div class="flex items-center gap-2 text-sm text-gray-500">
            <i class="fa-solid fa-lock text-green-500"></i>
            <span>256-bit AES Encryption</span>
          </div>
          <div class="flex items-center gap-2 text-sm text-gray-500">
            <i class="fa-solid fa-server text-indigo-500"></i>
            <span>Zero-Knowledge Architecture</span>
          </div>
        </div>
      </div>
    </div>
  </footer>

  <!-- Scroll to Top -->
  <button id="scroll-to-top" class="fixed bottom-8 right-8 w-12 h-12 bg-indigo-600 text-white rounded-full shadow-lg flex items-center justify-center opacity-0 translate-y-10 transition-all duration-300 pointer-events-none hover:bg-indigo-700 z-40" aria-label="Scroll to top">
    <i class="fa-solid fa-arrow-up"></i>
  </button>
`;

const htmlWrapper = (title, content, hasHeaderFooter = true) => `<!DOCTYPE html>
<html lang="en" class="scroll-smooth" dir="ltr">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${title} | LegacyVault - Digital Estate & Password Legacy Service</title>
  <meta name="description" content="Secure your digital legacy, manage passwords, and ensure your loved ones have secure access to your digital estate with LegacyVault.">
  
  <!-- Fonts -->
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=Outfit:wght@400;500;600;700;800&display=swap" rel="stylesheet">
  
  <!-- FontAwesome -->
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
  
  <!-- Tailwind CSS -->
  <script src="https://cdn.tailwindcss.com"></script>
  
  <!-- Tailwind Config -->
  <script>
    tailwind.config = {
      darkMode: 'class',
      theme: {
        extend: {
          fontFamily: {
            sans: ['Inter', 'sans-serif'],
            heading: ['Outfit', 'sans-serif'],
          },
          colors: {
            indigo: {
              50: '#eef2ff',
              100: '#e0e7ff',
              500: '#6366f1',
              600: '#4f46e5',
              700: '#4338ca',
              900: '#312e81',
            }
          },
          animation: {
            'fade-in-up': 'fadeInUp 0.6s ease-out forwards',
          },
          keyframes: {
            fadeInUp: {
              '0%': { opacity: 0, transform: 'translateY(20px)' },
              '100%': { opacity: 1, transform: 'translateY(0)' },
            }
          }
        }
      }
    }
  </script>
  
  <!-- Custom Styles -->
  <link rel="stylesheet" href="styles.css">
</head>
<body class="bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 font-sans min-h-screen flex flex-col transition-colors duration-300">
  
  ${hasHeaderFooter ? headerHTML : ''}

  <main class="flex-grow flex flex-col w-full">
    ${content}
  </main>

  ${hasHeaderFooter ? footerHTML : ''}

  <script src="script.js"></script>
</body>
</html>`;

const pages = {
  'index.html': {
    title: 'Home',
    hasHeaderFooter: true,
    content: `
      <!-- Section 1: Hero -->
      <section class="relative pt-20 pb-24 lg:pt-32 lg:pb-40 overflow-hidden">
        <div class="absolute inset-0 z-0">
          <div class="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')] bg-cover bg-center opacity-5 dark:opacity-10"></div>
          <div class="absolute inset-0 bg-gradient-to-b from-white/90 via-white/80 to-white dark:from-gray-900/90 dark:via-gray-900/95 dark:to-gray-900"></div>
        </div>
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div class="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
            <div class="space-y-8 animate-fade-in-up">
              <div class="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-50 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 font-medium text-sm border border-indigo-100 dark:border-indigo-800/50">
                <i class="fa-solid fa-lock text-xs"></i> 
                <span>Military-Grade Digital Protection</span>
              </div>
              <h1 class="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.1]">
                Secure Your <span class="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-blue-500 dark:from-indigo-400 dark:to-blue-400">Digital Legacy</span> For The Future
              </h1>
              <p class="text-lg text-gray-600 dark:text-gray-300 max-w-lg leading-relaxed">
                Ensure your loved ones have secure access to your passwords, digital assets, and critical accounts when you're no longer here. Plan your digital estate today.
              </p>
              <div class="flex flex-col sm:flex-row gap-4">
                <a href="signup.html" class="px-8 py-3.5 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg font-medium text-center transition shadow-xl shadow-indigo-600/20 text-lg flex items-center justify-center gap-2 whitespace-nowrap">
                  Create Your Vault
                </a>
                <a href="about.html" class="px-8 py-3.5 bg-white dark:bg-gray-800 text-gray-900 dark:text-white border border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700 rounded-lg font-medium text-center transition text-lg whitespace-nowrap">
                  Learn How It Works
                </a>
              </div>
            </div>
            <div class="relative w-full h-[400px] lg:h-[500px] rounded-2xl overflow-hidden shadow-2xl shadow-indigo-500/10 border border-gray-100 dark:border-gray-800">
               <img src="https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" alt="Secure Digital Vault Visualization" class="w-full h-full object-cover">
               <div class="absolute inset-0 bg-gradient-to-tr from-indigo-900/60 to-transparent mix-blend-multiply"></div>
               <!-- Floating badge -->
               <div class="absolute bottom-6 left-6 bg-white/90 dark:bg-gray-900/90 backdrop-blur-md p-4 rounded-xl border border-white/20 dark:border-gray-700/50 shadow-xl flex items-center gap-4">
                  <div class="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center text-white text-xl">
                    <i class="fa-solid fa-lock"></i>
                  </div>
                  <div>
                    <p class="font-bold text-gray-900 dark:text-white">Zero-Knowledge</p>
                    <p class="text-sm text-gray-500 dark:text-gray-400">End-to-end encrypted</p>
                  </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Section 2: Digital Legacy Risks -->
      <section class="py-20 lg:py-28 bg-gray-50 dark:bg-gray-950">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="text-center max-w-3xl mx-auto mb-16">
            <h2 class="font-heading text-3xl md:text-4xl font-bold mb-6">The Risks of Unmanaged Accounts</h2>
            <p class="text-gray-600 dark:text-gray-400 text-lg">Without a proper digital estate plan, your family could face insurmountable hurdles accessing your online life.</p>
          </div>
          <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <!-- Card 1 -->
            <div class="bg-white dark:bg-gray-900 p-8 rounded-2xl shadow-sm hover:shadow-md transition border border-gray-100 dark:border-gray-800 group">
              <div class="w-full h-40 mb-6 rounded-xl overflow-hidden">
                <img src="https://images.unsplash.com/photo-1555949963-aa79dcee981c?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80" alt="Locked device" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500">
              </div>
              <h3 class="font-bold text-xl mb-3 sm:min-h-[3.5rem]">Locked Accounts</h3>
              <p class="text-gray-600 dark:text-gray-400 text-sm leading-relaxed text-justify">Financial and email accounts become permanently locked without proper credentials, causing severe administrative issues.</p>
            </div>
            <!-- Card 2 -->
            <div class="bg-white dark:bg-gray-900 p-8 rounded-2xl shadow-sm hover:shadow-md transition border border-gray-100 dark:border-gray-800 group">
              <div class="w-full h-40 mb-6 rounded-xl overflow-hidden">
                <img src="https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80" alt="Credit card" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500">
              </div>
              <h3 class="font-bold text-xl mb-3 sm:min-h-[3.5rem]">Ongoing Subscriptions</h3>
              <p class="text-gray-600 dark:text-gray-400 text-sm leading-relaxed text-justify">Auto-renewing services continue draining funds because family members cannot log in to cancel them.</p>
            </div>
            <!-- Card 3 -->
            <div class="bg-white dark:bg-gray-900 p-8 rounded-2xl shadow-sm hover:shadow-md transition border border-gray-100 dark:border-gray-800 group">
              <div class="w-full h-40 mb-6 rounded-xl overflow-hidden">
                <img src="https://images.unsplash.com/photo-1516961642265-531546e84af2?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80" alt="Old photos" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500">
              </div>
              <h3 class="font-bold text-xl mb-3 sm:min-h-[3.5rem]">Lost Memories</h3>
              <p class="text-gray-600 dark:text-gray-400 text-sm leading-relaxed text-justify">Precious family photos, videos, and documents stored in cloud services can be lost forever.</p>
            </div>
            <!-- Card 4 -->
            <div class="bg-white dark:bg-gray-900 p-8 rounded-2xl shadow-sm hover:shadow-md transition border border-gray-100 dark:border-gray-800 group">
              <div class="w-full h-40 mb-6 rounded-xl overflow-hidden">
                <img src="https://images.unsplash.com/photo-1518546305927-5a555bb7020d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80" alt="Digital assets" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500">
              </div>
              <h3 class="font-bold text-xl mb-3 sm:min-h-[3.5rem]">Trapped Assets</h3>
              <p class="text-gray-600 dark:text-gray-400 text-sm leading-relaxed text-justify">Cryptocurrency, domain names, and digital portfolios become entirely inaccessible to beneficiaries.</p>
            </div>
          </div>
        </div>
      </section>

      <!-- Section 3: How It Works -->
      <section class="py-20 lg:py-28 bg-white dark:bg-gray-900">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="grid lg:grid-cols-2 gap-16 items-center">
            <div class="order-2 lg:order-1 relative rounded-2xl overflow-hidden shadow-2xl h-[450px]">
              <img src="https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" alt="Dashboard Interface" class="w-full h-full object-cover">
              <div class="absolute inset-0 bg-indigo-900/20"></div>
            </div>
            <div class="order-1 lg:order-2 space-y-10">
              <div>
                <h2 class="font-heading text-3xl md:text-4xl font-bold mb-4">How Digital Legacy Planning Works</h2>
                <p class="text-gray-600 dark:text-gray-400 text-lg">A seamless, highly secure process designed to protect and eventually transfer your digital assets.</p>
              </div>
              <div class="space-y-8">
                <div class="flex gap-4">
                  <div class="flex-shrink-0 w-12 h-12 rounded-full bg-indigo-100 dark:bg-indigo-900/50 text-indigo-600 dark:text-indigo-400 flex items-center justify-center font-bold text-lg border border-indigo-200 dark:border-indigo-700">1</div>
                  <div>
                    <h4 class="font-bold text-xl mb-2">Build Your Secure Vault</h4>
                    <p class="text-gray-600 dark:text-gray-400 text-sm">Store login credentials, important documents, and instructions in your encrypted vault.</p>
                  </div>
                </div>
                <div class="flex gap-4">
                  <div class="flex-shrink-0 w-12 h-12 rounded-full bg-indigo-100 dark:bg-indigo-900/50 text-indigo-600 dark:text-indigo-400 flex items-center justify-center font-bold text-lg border border-indigo-200 dark:border-indigo-700">2</div>
                  <div>
                    <h4 class="font-bold text-xl mb-2">Assign Legacy Contacts</h4>
                    <p class="text-gray-600 dark:text-gray-400 text-sm">Designate trusted family members or attorneys who can request access to your vault.</p>
                  </div>
                </div>
                <div class="flex gap-4">
                  <div class="flex-shrink-0 w-12 h-12 rounded-full bg-indigo-100 dark:bg-indigo-900/50 text-indigo-600 dark:text-indigo-400 flex items-center justify-center font-bold text-lg border border-indigo-200 dark:border-indigo-700">3</div>
                  <div>
                    <h4 class="font-bold text-xl mb-2">Controlled Release</h4>
                    <p class="text-gray-600 dark:text-gray-400 text-sm">Upon access request, an authorized delay period begins. If you do not deny it, data is securely decrypted and released.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Section 4: Security & Privacy -->
      <section class="py-20 lg:py-28 bg-gray-900 text-white relative overflow-hidden">
        <!-- Abstract BG -->
        <div class="absolute inset-0 opacity-20">
          <svg class="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none"><path d="M0,0 L100,100 L0,100 Z" fill="#4f46e5"/></svg>
        </div>
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div class="w-20 h-20 bg-indigo-500/20 border border-indigo-500/30 rounded-2xl flex items-center justify-center text-4xl text-indigo-400 mx-auto mb-8 backdrop-blur-sm">
            <i class="fa-solid fa-shield-halved"></i>
          </div>
          <h2 class="font-heading text-3xl md:text-5xl font-bold mb-6">Uncompromising Privacy</h2>
          <p class="text-indigo-100 text-lg max-w-2xl mx-auto mb-12">We use Zero-Knowledge Architecture. Your data is encrypted locally on your device before it ever reaches our servers. We cannot read your passwords or documents.</p>
          
          <div class="grid sm:grid-cols-3 gap-6 text-left mt-16 border-t border-gray-800 pt-16">
            <div class="bg-gray-800/40 rounded-2xl p-6 border border-gray-700/50">
              <div class="flex items-center gap-3 mb-3">
                <i class="fa-solid fa-key text-indigo-400 text-xl flex-shrink-0"></i>
                <h4 class="font-bold text-lg leading-tight">AES-256 Encryption</h4>
              </div>
              <p class="text-gray-400 text-sm leading-relaxed">The gold standard in data protection, ensuring your digital estate remains invulnerable to breaches.</p>
            </div>
            <div class="bg-gray-800/40 rounded-2xl p-6 border border-gray-700/50">
              <div class="flex items-center gap-3 mb-3">
                <i class="fa-solid fa-fingerprint text-indigo-400 text-xl flex-shrink-0"></i>
                <h4 class="font-bold text-lg leading-tight">Biometric Auth</h4>
              </div>
              <p class="text-gray-400 text-sm leading-relaxed">Strict multi-factor and biometric authentication requirements for all vault interactions.</p>
            </div>
            <div class="bg-gray-800/40 rounded-2xl p-6 border border-gray-700/50">
              <div class="flex items-center gap-3 mb-3">
                <i class="fa-solid fa-eye-slash text-indigo-400 text-xl flex-shrink-0"></i>
                <h4 class="font-bold text-lg leading-tight">Zero-Knowledge</h4>
              </div>
              <p class="text-gray-400 text-sm leading-relaxed">Our team never has the decryption keys. Your legacy is exclusively yours to control.</p>
            </div>
          </div>
        </div>
      </section>

      <!-- Section 5: CTA -->
      <section class="py-20 lg:py-24 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800">
        <div class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="bg-indigo-600 rounded-2xl p-6 sm:p-10 md:p-16 text-center shadow-2xl relative overflow-hidden">
            <!-- Decorative circle -->
            <div class="absolute top-0 right-0 -mr-20 -mt-20 w-64 h-64 rounded-full bg-white/10 blur-3xl"></div>
            <div class="absolute bottom-0 left-0 -ml-20 -mb-20 w-64 h-64 rounded-full bg-black/10 blur-3xl"></div>
            
            <h2 class="relative z-10 font-heading text-3xl md:text-5xl font-bold text-white mb-6">Start Protecting Your Digital Legacy</h2>
            <p class="relative z-10 text-indigo-100 text-lg max-w-2xl mx-auto mb-10">It takes only 5 minutes to set up your secure vault and gain permanent peace of mind for you and your family.</p>
            <div class="relative z-10 flex justify-center px-2">
              <a href="signup.html" class="w-full sm:w-auto px-8 py-4 bg-white text-indigo-600 hover:bg-gray-50 font-bold rounded-xl transition shadow-lg text-base sm:text-lg text-center">
                Create Free Account
              </a>
            </div>
            <p class="relative z-10 text-indigo-200 text-sm mt-6"><i class="fa-solid fa-check mr-2"></i> No credit card required for basic plan</p>
          </div>
        </div>
      </section>
    `
  },
  'home2.html': {
    title: 'Features',
    hasHeaderFooter: true,
    content: `
      <!-- Section 1: Alt Hero -->
      <section class="relative pt-32 pb-32 border-b border-gray-200 dark:border-gray-800 overflow-hidden">
        <!-- Background Image with Overlay -->
        <div class="absolute inset-0 z-0">
          <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80" alt="Dashboard Background" class="w-full h-full object-cover object-center">
          <div class="absolute inset-0 bg-gray-900/75"></div>
        </div>
        
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div class="text-center max-w-4xl mx-auto mt-10">
            <h1 class="font-heading text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight mb-8 text-white">
              The Intelligent Way To Pass On Your <span class="text-indigo-400">Digital Wealth</span>
            </h1>
            <p class="text-xl text-gray-200 mb-10 leading-relaxed">
              Advanced access control, encrypted document storage, and automated legacy release systems built for the modern digital era.
            </p>
            <div class="flex justify-center gap-4 flex-col sm:flex-row">
              <a href="signup.html" class="px-8 py-3.5 bg-indigo-600 hover:bg-indigo-500 text-white rounded-lg font-medium transition shadow-lg text-lg">Start Planning</a>
              <a href="contact.html" class="px-8 py-3.5 bg-white/10 hover:bg-white/20 text-white backdrop-blur-sm border border-white/20 rounded-lg font-medium transition text-lg">Talk to Sales</a>
            </div>
          </div>
        </div>
      </section>

      <!-- Section 2: Vault Features -->
      <section class="py-20 bg-white dark:bg-gray-900">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="mb-16">
            <span class="text-indigo-600 dark:text-indigo-400 font-bold tracking-wider uppercase text-sm">Core Platform</span>
            <h2 class="font-heading text-3xl md:text-4xl font-bold mt-2 mb-4">Enterprise-Grade Vault Features</h2>
            <p class="text-gray-600 dark:text-gray-400 text-lg max-w-2xl">Organize and protect every aspect of your online identity.</p>
          </div>
          
          <div class="grid md:grid-cols-3 gap-8">
            <div class="p-6 border border-gray-200 dark:border-gray-800 rounded-2xl bg-gray-50 dark:bg-gray-800/50 hover:border-indigo-300 dark:hover:border-indigo-700 transition group">
              <div class="w-full h-40 mb-6 rounded-xl overflow-hidden">
                <img src="https://images.unsplash.com/photo-1497215842964-222b430dc094?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80" alt="Category Organization" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500">
              </div>
              <h3 class="font-bold text-xl mb-2">Category Organization</h3>
              <p class="text-gray-600 dark:text-gray-400 text-sm">Tag and group accounts by Financial, Social, Utilities, and more for easy retrieval.</p>
            </div>
            <div class="p-6 border border-gray-200 dark:border-gray-800 rounded-2xl bg-gray-50 dark:bg-gray-800/50 hover:border-indigo-300 dark:hover:border-indigo-700 transition group">
              <div class="w-full h-40 mb-6 rounded-xl overflow-hidden">
                <img src="https://images.unsplash.com/photo-1508385082359-f38ae991e8f2?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80" alt="Document Encryption" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500">
              </div>
              <h3 class="font-bold text-xl mb-2">Document Encryption</h3>
              <p class="text-gray-600 dark:text-gray-400 text-sm">Upload wills, trusts, and deeds. They remain encrypted until release triggers are met.</p>
            </div>
            <div class="p-6 border border-gray-200 dark:border-gray-800 rounded-2xl bg-gray-50 dark:bg-gray-800/50 hover:border-indigo-300 dark:hover:border-indigo-700 transition group">
              <div class="w-full h-40 mb-6 rounded-xl overflow-hidden">
                <img src="https://images.unsplash.com/photo-1618044733300-9472054094ee?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80" alt="Auto-Sync Passwords" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500">
              </div>
              <h3 class="font-bold text-xl mb-2">Auto-Sync Passwords</h3>
              <p class="text-gray-600 dark:text-gray-400 text-sm">Keep your legacy credentials up-to-date automatically using our secure browser extensions.</p>
            </div>
          </div>
        </div>
      </section>

      <!-- Section 3: Legacy Contact Management -->
      <section class="py-20 bg-gray-50 dark:bg-gray-950">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 class="font-heading text-3xl md:text-4xl font-bold mb-6">Granular Contact Management</h2>
              <p class="text-gray-600 dark:text-gray-400 text-lg mb-8 leading-relaxed">
                Not everyone needs access to everything. Appoint specific legacy contacts and strictly define their permission boundaries.
              </p>
              <ul class="space-y-4">
                <li class="flex items-start gap-3">
                  <i class="fa-solid fa-check-circle text-green-500 mt-1"></i>
                  <span class="text-gray-700 dark:text-gray-300">Assign your spouse to financial accounts</span>
                </li>
                <li class="flex items-start gap-3">
                  <i class="fa-solid fa-check-circle text-green-500 mt-1"></i>
                  <span class="text-gray-700 dark:text-gray-300">Assign children to social media and photos</span>
                </li>
                <li class="flex items-start gap-3">
                  <i class="fa-solid fa-check-circle text-green-500 mt-1"></i>
                  <span class="text-gray-700 dark:text-gray-300">Assign your attorney to legal documents</span>
                </li>
              </ul>
            </div>
            <div class="rounded-2xl overflow-hidden shadow-xl border border-gray-200 dark:border-gray-800 h-[400px]">
              <img src="https://images.unsplash.com/photo-1573164713988-8665fc963095?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Team management UI" class="w-full h-full object-cover">
            </div>
          </div>
        </div>
      </section>

      <!-- Section 4: Activity Monitoring -->
      <section class="py-20 bg-white dark:bg-gray-900">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 class="font-heading text-3xl font-bold mb-12">Complete Activity Monitoring</h2>
          <div class="bg-gray-900 rounded-2xl p-8 max-w-4xl mx-auto text-left shadow-2xl relative">
            <div class="absolute top-4 left-4 flex gap-2">
              <div class="w-3 h-3 rounded-full bg-red-500"></div>
              <div class="w-3 h-3 rounded-full bg-yellow-500"></div>
              <div class="w-3 h-3 rounded-full bg-green-500"></div>
            </div>
            <div class="mt-8 space-y-4 font-mono text-sm text-gray-300">
              <div class="flex border-b border-gray-800 pb-2"><span class="text-indigo-400 w-40">[2026-09-25 10:02]</span> <span class="text-green-400 w-24">SUCCESS</span> <span>Vault unlocked via Biometric (Device: iPhone 16)</span></div>
              <div class="flex border-b border-gray-800 pb-2"><span class="text-indigo-400 w-40">[2026-09-24 14:30]</span> <span class="text-blue-400 w-24">UPDATE</span> <span>Modified Legacy Contact: Sarah Jenkins</span></div>
              <div class="flex border-b border-gray-800 pb-2"><span class="text-indigo-400 w-40">[2026-09-20 09:15]</span> <span class="text-yellow-400 w-24">REQUEST</span> <span>Access request initiated by John Doe</span></div>
              <div class="flex"><span class="text-indigo-400 w-40">[2026-09-20 09:45]</span> <span class="text-red-400 w-24">DENIED</span> <span>Access request explicitly denied by Owner</span></div>
            </div>
          </div>
        </div>
      </section>

      <!-- Section 5: Trust CTA -->
      <section class="py-24 bg-indigo-600 text-white text-center">
        <div class="max-w-3xl mx-auto px-4">
          <i class="fa-solid fa-shield-heart text-5xl mb-6"></i>
          <h2 class="font-heading text-4xl font-bold mb-6">Your Legacy. Secured Forever.</h2>
          <p class="text-indigo-100 text-lg mb-10">Join thousands of individuals who have taken the vital step of organizing their digital estate.</p>
          <a href="signup.html" class="px-8 py-3 bg-white text-indigo-600 hover:bg-gray-100 rounded-lg font-bold transition shadow-lg inline-block">Create Your Secure Account</a>
        </div>
      </section>
    `
  },
  'about.html': {
    title: 'About Us',
    hasHeaderFooter: true,
    content: `
      <!-- Section 1: About Hero -->
      <section class="relative py-32 text-center overflow-hidden border-b border-gray-200 dark:border-gray-800">
        <!-- Background Image with Overlay -->
        <div class="absolute inset-0 z-0">
          <img src="https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80" alt="About Us Background" class="w-full h-full object-cover object-center">
          <div class="absolute inset-0 bg-gray-900/80"></div>
        </div>
        
        <div class="max-w-4xl mx-auto px-4 relative z-10">
          <h1 class="font-heading text-4xl md:text-5xl font-bold mb-6 text-white">Pioneering Digital Estate Management</h1>
          <p class="text-xl text-gray-200 leading-relaxed">We were founded on a simple principle: your digital life is just as valuable as your physical one, and it deserves the same level of protection.</p>
        </div>
      </section>

      <!-- Section 2: Vision & Mission -->
      <section class="py-24 bg-white dark:bg-gray-900">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="grid lg:grid-cols-2 gap-16 items-center">
            
            <div class="space-y-12">
              <div>
                <div class="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-50 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 font-medium text-sm border border-indigo-100 dark:border-indigo-800/50 mb-6">
                  <i class="fa-solid fa-compass text-xs"></i> 
                  <span>Our Purpose</span>
                </div>
                <h2 class="font-heading text-3xl md:text-4xl font-bold mb-6">Our Mission</h2>
                <p class="text-gray-600 dark:text-gray-400 text-lg leading-relaxed text-justify">
                  To provide a technologically advanced, legally sound, and deeply secure method to transition your digital footprint to the people you trust. We bridge the gap between physical inheritance and digital assets, preventing family members from being locked out of crucial accounts or losing priceless memories.
                </p>
              </div>
              
              <div class="pt-8 border-t border-gray-100 dark:border-gray-800">
                <h2 class="font-heading text-3xl md:text-4xl font-bold mb-6">Our Vision</h2>
                <p class="text-gray-600 dark:text-gray-400 text-lg leading-relaxed text-justify">
                  To establish a world where digital legacy planning is as standard and accessible as traditional estate planning. We envision a future where absolutely no digital asset goes unclaimed, and everyone has peace of mind knowing their entire online life is meticulously secured for the future.
                </p>
              </div>
            </div>

            <div class="relative rounded-2xl overflow-hidden shadow-2xl h-[500px] lg:h-[600px] group">
              <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" alt="Team Collaboration" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700">
              <div class="absolute inset-0 bg-indigo-900/10 group-hover:bg-transparent transition-colors duration-700"></div>
            </div>

          </div>
        </div>
      </section>

      <!-- Section 3: Privacy & Security Approach -->
      <section class="py-20 bg-gray-50 dark:bg-gray-950">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="text-center mb-16">
            <h2 class="font-heading text-3xl font-bold mb-4">How We Approach Privacy</h2>
            <p class="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">Security is not a feature; it is our foundation.</p>
          </div>
          <div class="grid md:grid-cols-3 gap-8">
            <div class="bg-white dark:bg-gray-900 p-8 rounded-2xl shadow-sm border border-gray-200 dark:border-gray-800 text-center">
              <i class="fa-solid fa-lock text-3xl text-indigo-500 mb-4 block"></i>
              <h3 class="font-bold text-xl mb-3 sm:min-h-[3.5rem]">Client-Side Encryption</h3>
              <p class="text-gray-600 dark:text-gray-400 text-sm">Your data is encrypted on your device. We only store encrypted ciphertext on our servers.</p>
            </div>
            <div class="bg-white dark:bg-gray-900 p-8 rounded-2xl shadow-sm border border-gray-200 dark:border-gray-800 text-center">
              <i class="fa-solid fa-server text-3xl text-indigo-500 mb-4 block"></i>
              <h3 class="font-bold text-xl mb-3 sm:min-h-[3.5rem]">Distributed Storage</h3>
              <p class="text-gray-600 dark:text-gray-400 text-sm">Encrypted fragments are distributed across multiple isolated regions to ensure high availability and prevent single-point failures.</p>
            </div>
            <div class="bg-white dark:bg-gray-900 p-8 rounded-2xl shadow-sm border border-gray-200 dark:border-gray-800 text-center">
              <i class="fa-solid fa-scale-balanced text-3xl text-indigo-500 mb-4 block"></i>
              <h3 class="font-bold text-xl mb-3 sm:min-h-[3.5rem]">Legal Compliance</h3>
              <p class="text-gray-600 dark:text-gray-400 text-sm">Built to comply with strict global privacy laws and designed to interface properly with existing legal estate frameworks.</p>
            </div>
          </div>
        </div>
      </section>

      <!-- Section 4: Process -->
      <section class="py-20 bg-white dark:bg-gray-900">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 class="font-heading text-3xl font-bold mb-12">The Implementation Process</h2>
          <div class="flex flex-col md:flex-row justify-center items-center gap-8 md:gap-12 relative">
             <div class="bg-gray-50 dark:bg-gray-800 w-48 h-48 rounded-full flex flex-col items-center justify-center border-4 border-indigo-100 dark:border-indigo-900/50 shadow-lg z-10">
               <i class="fa-solid fa-vault text-2xl text-indigo-600 dark:text-indigo-400 mb-2"></i>
               <span class="font-bold">1. Setup Vault</span>
             </div>
             <div class="hidden md:block w-24 h-1 bg-indigo-200 dark:bg-indigo-800"></div>
             <div class="bg-gray-50 dark:bg-gray-800 w-48 h-48 rounded-full flex flex-col items-center justify-center border-4 border-indigo-100 dark:border-indigo-900/50 shadow-lg z-10">
               <i class="fa-solid fa-users text-2xl text-indigo-600 dark:text-indigo-400 mb-2"></i>
               <span class="font-bold">2. Add Contacts</span>
             </div>
             <div class="hidden md:block w-24 h-1 bg-indigo-200 dark:bg-indigo-800"></div>
             <div class="bg-gray-50 dark:bg-gray-800 w-48 h-48 rounded-full flex flex-col items-center justify-center border-4 border-indigo-100 dark:border-indigo-900/50 shadow-lg z-10">
               <i class="fa-solid fa-shield-heart text-2xl text-indigo-600 dark:text-indigo-400 mb-2"></i>
               <span class="font-bold">3. Rest Easy</span>
             </div>
          </div>
        </div>
      </section>

      <!-- Section 5: CTA -->
      <section class="py-20 bg-gray-900 text-white border-t border-gray-800">
        <div class="max-w-4xl mx-auto px-4 text-center">
          <h2 class="font-heading text-3xl font-bold mb-6">Ready to secure your future?</h2>
          <p class="text-gray-400 mb-8">Join the thousands who trust LegacyVault with their most important digital assets.</p>
          <a href="signup.html" class="px-8 py-3 bg-indigo-600 hover:bg-indigo-700 rounded-lg font-medium transition shadow-lg inline-block whitespace-nowrap">Get Started Today</a>
        </div>
      </section>
    `
  },
  'blog.html': {
    title: 'Blog',
    hasHeaderFooter: true,
    content: `
      <!-- Section 1: Hero -->
      <section class="relative py-32 text-center overflow-hidden border-b border-gray-200 dark:border-gray-800">
        <!-- Background Image with Overlay -->
        <div class="absolute inset-0 z-0">
          <img src="https://images.unsplash.com/photo-1432821596592-e2c18b78144f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80" alt="Blog Background" class="w-full h-full object-cover object-center">
          <div class="absolute inset-0 bg-gray-900/80"></div>
        </div>
        
        <div class="max-w-3xl mx-auto px-4 relative z-10">
          <h1 class="font-heading text-4xl md:text-5xl font-bold mb-6 text-white">Security & Legacy Insights</h1>
          <p class="text-xl text-gray-200 leading-relaxed">Expert advice on digital estate planning, cybersecurity, and data privacy.</p>
        </div>
      </section>

      <!-- Section 2: Featured Article -->
      <section class="py-16 bg-white dark:bg-gray-900">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 class="font-heading text-2xl font-bold mb-8">Featured Article</h2>
          <div class="grid lg:grid-cols-2 gap-8 items-center bg-gray-50 dark:bg-gray-800/50 rounded-2xl overflow-hidden border border-gray-200 dark:border-gray-800">
            <div class="h-64 lg:h-full">
              <img src="https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Cybersecurity laptop" class="w-full h-full object-cover">
            </div>
            <div class="p-8 lg:p-12">
              <span class="text-indigo-600 dark:text-indigo-400 text-sm font-bold uppercase tracking-wider mb-2 block">Digital Estate Planning</span>
              <h3 class="text-3xl font-bold mb-4 hover:text-indigo-600 transition cursor-pointer">Why Your Physical Will Isn't Enough in 2026</h3>
              <p class="text-gray-600 dark:text-gray-400 mb-6">Discover the legal and practical complexities of modern digital asset management, and why a physical will often fails to grant access to online accounts.</p>
              <div class="flex items-center justify-between">
                <span class="text-sm text-gray-500">Sept 15, 2026</span>
                <a href="#" class="font-medium text-indigo-600 dark:text-indigo-400 hover:underline">Read Full Article</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Section 3: Digital Security Articles -->
      <section class="py-16 bg-gray-50 dark:bg-gray-950">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 class="font-heading text-2xl font-bold mb-8">Digital Security</h2>
          <div class="grid md:grid-cols-3 gap-8">
            <div class="bg-white dark:bg-gray-900 rounded-xl overflow-hidden shadow-sm border border-gray-200 dark:border-gray-800 flex flex-col group">
              <img src="https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg?auto=compress&cs=tinysrgb&w=500" alt="Security" class="h-48 w-full object-cover group-hover:scale-105 transition duration-300">
              <div class="p-6 flex-grow flex flex-col">
                <span class="text-xs font-bold text-indigo-500 uppercase mb-2">Privacy</span>
                <h4 class="font-bold text-lg mb-2 sm:min-h-[3.5rem]">Understanding Zero-Knowledge Encryption</h4>
                <p class="text-gray-600 dark:text-gray-400 text-sm mb-4 flex-grow">How modern cryptography ensures even service providers cannot read your personal data.</p>
                <div class="flex items-center justify-between mt-auto pt-4 border-t border-gray-100 dark:border-gray-800">
                  <span class="text-xs text-gray-500">Sept 10, 2026</span>
                  <a href="#" class="text-sm font-medium text-indigo-600 dark:text-indigo-400">Read More</a>
                </div>
              </div>
            </div>
            <div class="bg-white dark:bg-gray-900 rounded-xl overflow-hidden shadow-sm border border-gray-200 dark:border-gray-800 flex flex-col group">
              <img src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80" alt="Coding" class="h-48 w-full object-cover group-hover:scale-105 transition duration-300">
              <div class="p-6 flex-grow flex flex-col">
                <span class="text-xs font-bold text-indigo-500 uppercase mb-2">Passwords</span>
                <h4 class="font-bold text-lg mb-2 sm:min-h-[3.5rem]">Password Manager vs. Legacy Vault</h4>
                <p class="text-gray-600 dark:text-gray-400 text-sm mb-4 flex-grow">What is the difference between a daily password manager and a long-term legacy vault?</p>
                <div class="flex items-center justify-between mt-auto pt-4 border-t border-gray-100 dark:border-gray-800">
                  <span class="text-xs text-gray-500">Sept 05, 2026</span>
                  <a href="#" class="text-sm font-medium text-indigo-600 dark:text-indigo-400">Read More</a>
                </div>
              </div>
            </div>
            <div class="bg-white dark:bg-gray-900 rounded-xl overflow-hidden shadow-sm border border-gray-200 dark:border-gray-800 flex flex-col group">
              <img src="https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80" alt="Money" class="h-48 w-full object-cover group-hover:scale-105 transition duration-300">
              <div class="p-6 flex-grow flex flex-col">
                <span class="text-xs font-bold text-indigo-500 uppercase mb-2">Threats</span>
                <h4 class="font-bold text-lg mb-2 sm:min-h-[3.5rem]">Protecting Crypto Assets Post-Mortem</h4>
                <p class="text-gray-600 dark:text-gray-400 text-sm mb-4 flex-grow">How to securely transfer hardware wallets and seed phrases without risking exposure.</p>
                <div class="flex items-center justify-between mt-auto pt-4 border-t border-gray-100 dark:border-gray-800">
                  <span class="text-xs text-gray-500">Aug 28, 2026</span>
                  <a href="#" class="text-sm font-medium text-indigo-600 dark:text-indigo-400">Read More</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Section 4: Legacy Planning Articles -->
      <section class="py-16 bg-white dark:bg-gray-900">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 class="font-heading text-2xl font-bold mb-8">Legacy Planning</h2>
          <div class="grid md:grid-cols-2 gap-8">
             <!-- Large Card -->
             <div class="bg-gray-50 dark:bg-gray-800/50 rounded-xl overflow-hidden border border-gray-200 dark:border-gray-800 flex">
               <div class="p-6 flex flex-col justify-center">
                 <span class="text-xs font-bold text-indigo-500 uppercase mb-2">Guide</span>
                 <h4 class="font-bold text-xl mb-3">Choosing Your Legacy Contacts</h4>
                 <p class="text-gray-600 dark:text-gray-400 text-sm mb-4">Guidelines for selecting reliable individuals to execute your digital estate.</p>
                 <a href="#" class="text-sm font-medium text-indigo-600 dark:text-indigo-400 mt-auto">Read Guide</a>
               </div>
             </div>
             <div class="bg-gray-50 dark:bg-gray-800/50 rounded-xl overflow-hidden border border-gray-200 dark:border-gray-800 flex">
               <div class="p-6 flex flex-col justify-center">
                 <span class="text-xs font-bold text-indigo-500 uppercase mb-2">Legal</span>
                 <h4 class="font-bold text-xl mb-3">Social Media Memorialization</h4>
                 <p class="text-gray-600 dark:text-gray-400 text-sm mb-4">How different platforms handle accounts after death and how to prepare.</p>
                 <a href="#" class="text-sm font-medium text-indigo-600 dark:text-indigo-400 mt-auto">Read Guide</a>
               </div>
             </div>
          </div>
        </div>
      </section>

      <!-- Section 5: Newsletter -->
      <section class="py-20 bg-indigo-600 text-white text-center">
        <div class="max-w-2xl mx-auto px-4">
          <h2 class="font-heading text-3xl font-bold mb-4">Stay Informed</h2>
          <p class="text-indigo-100 mb-8">Get the latest insights on digital privacy and estate planning delivered to your inbox.</p>
          <form class="flex flex-col sm:flex-row gap-4 justify-center" onsubmit="event.preventDefault(); alert('Subscribed!');">
            <input type="email" placeholder="Email Address" required class="px-4 py-3 rounded-lg text-gray-900 w-full sm:w-64 focus:outline-none focus:ring-2 focus:ring-indigo-300">
            <button type="submit" class="px-6 py-3 bg-gray-900 hover:bg-gray-800 rounded-lg font-medium transition">Subscribe</button>
          </form>
        </div>
      </section>
    `
  },
  'contact.html': {
    title: 'Contact Us',
    hasHeaderFooter: true,
    content: `
      <!-- Section 1: Hero -->
      <section class="relative py-32 text-center overflow-hidden border-b border-gray-200 dark:border-gray-800">
        <!-- Background Image with Overlay -->
        <div class="absolute inset-0 z-0">
          <img src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80" alt="Contact Us Background" class="w-full h-full object-cover object-center">
          <div class="absolute inset-0 bg-gray-900/80"></div>
        </div>
        
        <div class="max-w-3xl mx-auto px-4 relative z-10">
          <h1 class="font-heading text-4xl md:text-5xl font-bold mb-6 text-white">Get in Touch</h1>
          <p class="text-xl text-gray-200 leading-relaxed">Our security specialists and support team are here to help you.</p>
        </div>
      </section>

      <!-- Section 2 & 3: Info and Form -->
      <section class="py-16 bg-white dark:bg-gray-900">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="grid lg:grid-cols-2 gap-16">
            <!-- Contact Info -->
            <div>
              <h2 class="font-heading text-3xl font-bold mb-8">Contact Information</h2>
              <div class="space-y-6">
                <div class="flex items-start gap-4">
                  <div class="w-12 h-12 bg-indigo-50 dark:bg-indigo-900/30 text-indigo-600 flex items-center justify-center rounded-xl text-xl flex-shrink-0">
                    <i class="fa-solid fa-envelope"></i>
                  </div>
                  <div>
                    <h4 class="font-bold text-lg">Email Us</h4>
                    <p class="text-gray-600 dark:text-gray-400 text-sm mb-1">For general inquiries and support</p>
                    <a href="mailto:support@legacyvault.com" class="text-indigo-600 dark:text-indigo-400 font-medium hover:underline">support@legacyvault.com</a>
                  </div>
                </div>
                <div class="flex items-start gap-4">
                  <div class="w-12 h-12 bg-indigo-50 dark:bg-indigo-900/30 text-indigo-600 flex items-center justify-center rounded-xl text-xl flex-shrink-0">
                    <i class="fa-solid fa-phone"></i>
                  </div>
                  <div>
                    <h4 class="font-bold text-lg">Call Us</h4>
                    <p class="text-gray-600 dark:text-gray-400 text-sm mb-1">Mon-Fri from 9am to 6pm EST</p>
                    <a href="tel:+18005550199" class="text-indigo-600 dark:text-indigo-400 font-medium hover:underline">+1 (800) 555-0199</a>
                  </div>
                </div>
                <div class="flex items-start gap-4">
                  <div class="w-12 h-12 bg-indigo-50 dark:bg-indigo-900/30 text-indigo-600 flex items-center justify-center rounded-xl text-xl flex-shrink-0">
                    <i class="fa-solid fa-location-dot"></i>
                  </div>
                  <div>
                    <h4 class="font-bold text-lg">Headquarters</h4>
                    <p class="text-gray-600 dark:text-gray-400 text-sm">
                      100 Security Plaza, Suite 400<br>
                      New York, NY 10001<br>
                      United States
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <!-- Form -->
            <div class="bg-gray-50 dark:bg-gray-800/50 p-8 rounded-2xl border border-gray-200 dark:border-gray-800 shadow-sm">
              <h3 class="font-bold text-2xl mb-6">Send a Message</h3>
              <form class="space-y-4" onsubmit="event.preventDefault(); alert('Message Sent!');">
                <div class="grid grid-cols-2 gap-4">
                  <div>
                    <label class="block text-sm font-medium mb-1">Full Name</label>
                    <input type="text" required class="w-full px-4 py-2.5 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 focus:ring-2 focus:ring-indigo-500 outline-none transition">
                  </div>
                  <div>
                    <label class="block text-sm font-medium mb-1">Phone</label>
                    <input type="tel" class="w-full px-4 py-2.5 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 focus:ring-2 focus:ring-indigo-500 outline-none transition">
                  </div>
                </div>
                <div>
                  <label class="block text-sm font-medium mb-1">Email Address</label>
                  <input type="email" required class="w-full px-4 py-2.5 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 focus:ring-2 focus:ring-indigo-500 outline-none transition">
                </div>
                <div>
                  <label class="block text-sm font-medium mb-1">Subject</label>
                  <input type="text" required class="w-full px-4 py-2.5 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 focus:ring-2 focus:ring-indigo-500 outline-none transition">
                </div>
                <div>
                  <label class="block text-sm font-medium mb-1">Message</label>
                  <textarea rows="4" required class="w-full px-4 py-2.5 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 focus:ring-2 focus:ring-indigo-500 outline-none transition"></textarea>
                </div>
                <button type="submit" class="w-full py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded-lg transition shadow-lg">Send Message</button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <!-- Section 4: Map -->
      <section class="py-0">
        <div class="w-full h-96 bg-gray-200 dark:bg-gray-800 relative">
          <!-- Placeholder map -->
          <iframe class="w-full h-full border-0" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1m3!1d193595.15830869428!2d-74.119763973046!3d40.69766374874431!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY!5e0!3m2!1sen!2sus!4v1689260555555!5m2!1sen!2sus" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
      </section>

      <!-- Section 5: FAQ -->
      <section class="py-16 bg-gray-50 dark:bg-gray-950">
        <div class="max-w-4xl mx-auto px-4">
          <h2 class="font-heading text-3xl font-bold mb-8 text-center">Frequently Asked Questions</h2>
          <div class="space-y-4">
            <div class="bg-white dark:bg-gray-900 p-6 rounded-lg border border-gray-200 dark:border-gray-800">
              <h4 class="font-bold text-lg mb-2">How secure is my data?</h4>
              <p class="text-gray-600 dark:text-gray-400 text-sm">We use end-to-end AES-256 encryption. Our zero-knowledge architecture ensures that not even our employees can access your unencrypted data.</p>
            </div>
            <div class="bg-white dark:bg-gray-900 p-6 rounded-lg border border-gray-200 dark:border-gray-800">
              <h4 class="font-bold text-lg mb-2">How does a legacy contact get access?</h4>
              <p class="text-gray-600 dark:text-gray-400 text-sm">A contact must request access. You specify a wait period (e.g., 7 days). If you do not explicitly deny the request within that time, the vault is released to them.</p>
            </div>
          </div>
        </div>
      </section>
    `
  },
  'login.html': {
    title: 'Login',
    hasHeaderFooter: false,
    content: `
      <div class="min-h-screen flex items-center justify-center p-4 bg-gray-50 dark:bg-gray-950 relative">
        <!-- Theme & RTL Toggles -->
        <div class="absolute top-4 right-4 flex items-center space-x-2">
          <button id="theme-toggle" class="w-10 h-10 rounded-full flex items-center justify-center bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 shadow border border-gray-200 dark:border-gray-700 transition" aria-label="Toggle Theme">
            <i class="fa-solid fa-moon dark:hidden"></i>
            <i class="fa-solid fa-sun hidden dark:block"></i>
          </button>
          <button id="rtl-toggle" class="w-10 h-10 rounded-full flex items-center justify-center bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 shadow border border-gray-200 dark:border-gray-700 transition font-bold text-sm" aria-label="Toggle RTL">
            RTL
          </button>
        </div>

        <div class="w-full max-w-md mt-12 sm:mt-0">
          <!-- Card -->
          <div class="bg-white dark:bg-gray-900 rounded-2xl shadow-xl border border-gray-200 dark:border-gray-800 p-8">
            <!-- Logo -->
            <div class="flex justify-center mb-8">
              <a href="index.html" class="flex items-center gap-2 group">
                <div class="w-12 h-12 bg-indigo-600 rounded-lg flex items-center justify-center text-white font-bold text-2xl shadow-lg">
                  <i class="fa-solid fa-shield-halved"></i>
                </div>
                <span class="font-bold text-3xl text-gray-900 dark:text-white tracking-tight">Legacy<span class="text-indigo-600 dark:text-indigo-400">Vault</span></span>
              </a>
            </div>
            <h1 class="text-2xl font-bold mb-2 text-center">Secure Authentication</h1>
            <p class="text-gray-500 text-sm text-center mb-8 flex justify-center items-center gap-2">
               <i class="fa-solid fa-lock text-green-500"></i> Connection is encrypted
            </p>

            <form onsubmit="event.preventDefault(); window.location.href='dashboard.html';">
              <div class="space-y-5">
                <div>
                  <label class="block text-sm font-medium mb-1">Email Address</label>
                  <input type="email" required class="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 focus:ring-2 focus:ring-indigo-500 outline-none transition">
                </div>
                
                <div>
                  <div class="flex justify-between items-center mb-1">
                    <label class="block text-sm font-medium">Password</label>
                    <a href="#" class="text-xs text-indigo-600 dark:text-indigo-400 hover:underline">Forgot password?</a>
                  </div>
                  <div class="relative">
                    <input type="password" id="login-password" required class="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 focus:ring-2 focus:ring-indigo-500 outline-none transition">
                    <button type="button" onclick="togglePassword('login-password')" class="absolute right-3 top-3.5 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300">
                      <i class="fa-regular fa-eye"></i>
                    </button>
                  </div>
                </div>

                <div class="flex items-center">
                  <input type="checkbox" id="remember" class="w-4 h-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500">
                  <label for="remember" class="ml-2 text-sm text-gray-600 dark:text-gray-400">Remember this device</label>
                </div>

                <button type="submit" class="w-full py-3.5 bg-indigo-600 hover:bg-indigo-700 text-white font-bold rounded-lg transition shadow-lg shadow-indigo-600/30 text-lg">
                  Authenticate
                </button>
              </div>
            </form>

            <div class="relative flex items-center justify-center mt-6 mb-6">
              <div class="absolute inset-0 flex items-center">
                <div class="w-full border-t border-gray-200 dark:border-gray-700"></div>
              </div>
              <div class="relative px-4 bg-white dark:bg-gray-900 text-sm text-gray-500 font-medium">
                OR
              </div>
            </div>

            <div class="space-y-4">
              <button class="w-full flex items-center justify-center gap-3 px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 font-medium hover:bg-gray-50 dark:hover:bg-gray-700 transition">
                <i class="fa-brands fa-google text-red-500"></i> Continue with Google
              </button>
              <button class="w-full flex items-center justify-center gap-3 px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 font-medium hover:bg-gray-50 dark:hover:bg-gray-700 transition">
                <i class="fa-brands fa-apple text-gray-900 dark:text-white text-lg"></i> Continue with Apple
              </button>
            </div>

            <!-- Footer Link -->
            <div class="mt-8 pt-6 border-t border-gray-100 dark:border-gray-800">
              <p class="text-center text-gray-600 dark:text-gray-400 text-sm">
                Don't have a vault yet? 
                <a href="signup.html" class="font-medium text-indigo-600 dark:text-indigo-400 hover:underline">Create Account</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    `
  },
  'signup.html': {
    title: 'Signup',
    hasHeaderFooter: false,
    content: `
      <div class="min-h-screen flex items-center justify-center p-4 bg-gray-50 dark:bg-gray-950 py-12 relative">
        <!-- Theme & RTL Toggles -->
        <div class="absolute top-4 right-4 flex items-center space-x-2">
          <button id="theme-toggle" class="w-10 h-10 rounded-full flex items-center justify-center bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 shadow border border-gray-200 dark:border-gray-700 transition" aria-label="Toggle Theme">
            <i class="fa-solid fa-moon dark:hidden"></i>
            <i class="fa-solid fa-sun hidden dark:block"></i>
          </button>
          <button id="rtl-toggle" class="w-10 h-10 rounded-full flex items-center justify-center bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 shadow border border-gray-200 dark:border-gray-700 transition font-bold text-sm" aria-label="Toggle RTL">
            RTL
          </button>
        </div>

        <div class="w-full max-w-md mt-12 sm:mt-0">
          <!-- Card -->
          <div class="bg-white dark:bg-gray-900 rounded-2xl shadow-xl border border-gray-200 dark:border-gray-800 p-8">
            <!-- Logo -->
            <div class="flex justify-center mb-8">
              <a href="index.html" class="flex items-center gap-2 group">
                <div class="w-12 h-12 bg-indigo-600 rounded-lg flex items-center justify-center text-white font-bold text-2xl shadow-lg">
                  <i class="fa-solid fa-shield-halved"></i>
                </div>
                <span class="font-bold text-3xl text-gray-900 dark:text-white tracking-tight">Legacy<span class="text-indigo-600 dark:text-indigo-400">Vault</span></span>
              </a>
            </div>
            <h1 class="text-2xl font-bold mb-2 text-center">Initialize Your Vault</h1>
            <p class="text-gray-500 text-sm text-center mb-8 flex justify-center items-center gap-2">
               <i class="fa-solid fa-lock text-green-500"></i> Zero-Knowledge Encryption
            </p>

            <form onsubmit="event.preventDefault(); window.location.href='dashboard.html';">
              <div class="space-y-4">
                <div>
                  <label class="block text-sm font-medium mb-1">Full Name</label>
                  <input type="text" required class="w-full px-4 py-2.5 rounded-lg border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 focus:ring-2 focus:ring-indigo-500 outline-none transition">
                </div>
                
                <div>
                  <label class="block text-sm font-medium mb-1">Email Address</label>
                  <input type="email" required class="w-full px-4 py-2.5 rounded-lg border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 focus:ring-2 focus:ring-indigo-500 outline-none transition">
                </div>
                
                <div>
                  <label class="block text-sm font-medium mb-1">Master Password</label>
                  <div class="relative">
                    <input type="password" id="signup-password" required minlength="12" class="w-full px-4 py-2.5 rounded-lg border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 focus:ring-2 focus:ring-indigo-500 outline-none transition">
                    <button type="button" onclick="togglePassword('signup-password')" class="absolute right-3 top-3 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300">
                      <i class="fa-regular fa-eye"></i>
                    </button>
                  </div>
                  <p class="text-xs text-gray-500 mt-1">Must be at least 12 characters.</p>
                </div>

                <div>
                  <label class="block text-sm font-medium mb-1">Confirm Master Password</label>
                  <div class="relative">
                    <input type="password" id="signup-confirm" required minlength="12" class="w-full px-4 py-2.5 rounded-lg border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 focus:ring-2 focus:ring-indigo-500 outline-none transition">
                  </div>
                </div>

                <div class="flex items-start mt-4">
                  <input type="checkbox" id="terms" required class="mt-1 w-4 h-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500">
                  <label for="terms" class="ml-2 text-sm text-gray-600 dark:text-gray-400 leading-tight">
                    I acknowledge that LegacyVault cannot recover my Master Password and agree to the <a href="#" class="text-indigo-600 hover:underline">Terms & Conditions</a>.
                  </label>
                </div>

                <button type="submit" class="w-full py-3.5 mt-4 bg-indigo-600 hover:bg-indigo-700 text-white font-bold rounded-lg transition shadow-lg shadow-indigo-600/30 text-lg">
                  Create Account
                </button>
              </div>
            </form>

            <div class="relative flex items-center justify-center mt-6 mb-6">
              <div class="absolute inset-0 flex items-center">
                <div class="w-full border-t border-gray-200 dark:border-gray-700"></div>
              </div>
              <div class="relative px-4 bg-white dark:bg-gray-900 text-sm text-gray-500 font-medium">
                OR
              </div>
            </div>

            <div class="space-y-4">
              <button class="w-full flex items-center justify-center gap-3 px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 font-medium hover:bg-gray-50 dark:hover:bg-gray-700 transition">
                <i class="fa-brands fa-google text-red-500"></i> Continue with Google
              </button>
              <button class="w-full flex items-center justify-center gap-3 px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 font-medium hover:bg-gray-50 dark:hover:bg-gray-700 transition">
                <i class="fa-brands fa-apple text-gray-900 dark:text-white text-lg"></i> Continue with Apple
              </button>
            </div>

            <!-- Footer Link -->
            <div class="mt-8 pt-6 border-t border-gray-100 dark:border-gray-800">
              <p class="text-center text-gray-600 dark:text-gray-400 text-sm">
                Already have a vault? 
                <a href="login.html" class="font-medium text-indigo-600 dark:text-indigo-400 hover:underline">Authenticate Here</a>
              </p>
            </div>
          </div>
        </div>
      </div>
      <script>
        function togglePassword(id) {
          const el = document.getElementById(id);
          el.type = el.type === 'password' ? 'text' : 'password';
        }
      </script>
    `
  },
  'dashboard.html': {
    title: 'Dashboard',
    hasHeaderFooter: false,
    content: `
      <!-- Dashboard Mini Header -->
      <header class="bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="flex justify-between items-center h-16">
            <!-- Logo -->
            <div class="flex-shrink-0 flex items-center">
              <a href="index.html" class="flex items-center gap-2 group">
                <div class="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center text-white font-bold text-sm group-hover:bg-indigo-700 transition">
                  <i class="fa-solid fa-shield-halved"></i>
                </div>
                <span class="font-bold text-xl text-gray-900 dark:text-white tracking-tight">Legacy<span class="text-indigo-600 dark:text-indigo-400">Vault</span></span>
              </a>
            </div>
            <!-- Toggles -->
            <div class="flex items-center gap-4">
              <button id="theme-toggle" class="w-10 h-10 rounded-full flex items-center justify-center bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition" aria-label="Toggle Theme">
                <i class="fa-solid fa-moon dark:hidden"></i>
                <i class="fa-solid fa-sun hidden dark:block"></i>
              </button>
              <button id="rtl-toggle" class="w-10 h-10 rounded-full flex items-center justify-center bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition font-bold text-sm" aria-label="Toggle RTL">
                RTL
              </button>
            </div>
          </div>
        </div>
      </header>

      <!-- Dashboard Container -->
      <div class="flex-grow w-full bg-gray-50 dark:bg-gray-950 py-6 sm:py-8">
        <div class="w-full max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
          
          <!-- Page Header -->
          <div class="mb-8 flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <h1 class="text-3xl font-bold font-heading">Secure Vault Dashboard</h1>
              <p class="text-gray-500 text-sm flex items-center gap-2 mt-1">
                <i class="fa-solid fa-lock text-green-500"></i> Vault Status: Encrypted & Active
              </p>
            </div>
            <button class="w-full md:w-auto px-5 py-2.5 bg-indigo-600 text-white font-medium rounded-lg hover:bg-indigo-700 transition shadow flex items-center justify-center gap-2">
              <i class="fa-solid fa-plus"></i> Add Record
            </button>
          </div>

          <!-- Section 1: Dashboard Overview -->
          <div class="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 mb-8">
            <div class="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-sm border border-gray-200 dark:border-gray-800">
              <div class="flex justify-between items-start mb-4">
                <div class="text-gray-500 text-sm font-medium">Protected Accounts</div>
                <i class="fa-solid fa-key text-indigo-500"></i>
              </div>
              <div class="text-3xl font-bold">42</div>
            </div>
            <div class="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-sm border border-gray-200 dark:border-gray-800">
              <div class="flex justify-between items-start mb-4">
                <div class="text-gray-500 text-sm font-medium">Legacy Contacts</div>
                <i class="fa-solid fa-users text-indigo-500"></i>
              </div>
              <div class="text-3xl font-bold">3</div>
            </div>
            <div class="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-sm border border-gray-200 dark:border-gray-800">
              <div class="flex justify-between items-start mb-4">
                <div class="text-gray-500 text-sm font-medium">Secure Documents</div>
                <i class="fa-solid fa-file-shield text-indigo-500"></i>
              </div>
              <div class="text-3xl font-bold">12</div>
            </div>
            <div class="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-sm border border-gray-200 dark:border-gray-800">
              <div class="flex justify-between items-start mb-4">
                <div class="text-gray-500 text-sm font-medium">Security Score</div>
                <i class="fa-solid fa-shield-halved text-green-500"></i>
              </div>
              <div class="text-3xl font-bold text-green-500">98%</div>
            </div>
          </div>

          <div class="grid lg:grid-cols-3 gap-8">
            <!-- Main Content Column -->
            <div class="lg:col-span-2 space-y-8">
              
              <!-- Section 2: Digital Account Vault -->
              <div class="bg-white dark:bg-gray-900 rounded-xl shadow-sm border border-gray-200 dark:border-gray-800 overflow-hidden">
                <div class="p-4 sm:p-6 border-b border-gray-200 dark:border-gray-800 flex flex-col sm:flex-row sm:justify-between sm:items-center gap-3 bg-gray-50 dark:bg-gray-800/50">
                  <h3 class="font-bold text-lg"><i class="fa-solid fa-vault text-indigo-500 mr-2"></i> Account Vault</h3>
                  <div class="relative w-full sm:w-auto">
                     <i class="fa-solid fa-search absolute left-3 top-2.5 text-gray-400 text-sm"></i>
                     <input type="text" placeholder="Search accounts..." class="w-full sm:w-48 pl-9 pr-3 py-1.5 text-sm rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 focus:outline-none focus:ring-1 focus:ring-indigo-500">
                  </div>
                </div>
                <div class="overflow-x-auto max-w-full">
                  <table class="w-full text-left text-sm">
                    <thead class="bg-gray-50 dark:bg-gray-800/30 text-gray-500 uppercase text-xs font-bold border-b border-gray-200 dark:border-gray-800">
                      <tr>
                        <th class="px-3 sm:px-6 py-3">Account Name</th>
                        <th class="px-3 sm:px-6 py-3">Category</th>
                        <th class="px-3 sm:px-6 py-3 hidden sm:table-cell">Last Updated</th>
                        <th class="px-3 sm:px-6 py-3 text-right">Action</th>
                      </tr>
                    </thead>
                    <tbody class="divide-y divide-gray-200 dark:divide-gray-800">
                      <tr class="hover:bg-gray-50 dark:hover:bg-gray-800/50 transition">
                        <td class="px-3 sm:px-6 py-4 font-medium">
                          <div class="flex items-center gap-3">
                            <div class="w-8 h-8 rounded bg-blue-100 text-blue-600 flex items-center justify-center flex-shrink-0"><i class="fa-brands fa-linkedin-in"></i></div>
                            LinkedIn
                          </div>
                        </td>
                        <td class="px-3 sm:px-6 py-4"><span class="px-2.5 py-1 rounded-full bg-gray-100 dark:bg-gray-800 text-xs text-gray-600 dark:text-gray-300">Social</span></td>
                        <td class="px-3 sm:px-6 py-4 text-gray-500 hidden sm:table-cell">2 days ago</td>
                        <td class="px-3 sm:px-6 py-4 text-right">
                          <button class="text-indigo-600 dark:text-indigo-400 hover:underline">Edit</button>
                        </td>
                      </tr>
                      <tr class="hover:bg-gray-50 dark:hover:bg-gray-800/50 transition">
                        <td class="px-3 sm:px-6 py-4 font-medium">
                          <div class="flex items-center gap-3">
                            <div class="w-8 h-8 rounded bg-green-100 text-green-600 flex items-center justify-center flex-shrink-0"><i class="fa-solid fa-building-columns"></i></div>
                            Chase Bank
                          </div>
                        </td>
                        <td class="px-3 sm:px-6 py-4"><span class="px-2.5 py-1 rounded-full bg-gray-100 dark:bg-gray-800 text-xs text-gray-600 dark:text-gray-300">Financial</span></td>
                        <td class="px-3 sm:px-6 py-4 text-gray-500 hidden sm:table-cell">1 month ago</td>
                        <td class="px-3 sm:px-6 py-4 text-right">
                          <button class="text-indigo-600 dark:text-indigo-400 hover:underline">Edit</button>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <!-- Section 4: Document Vault -->
              <div class="bg-white dark:bg-gray-900 rounded-xl shadow-sm border border-gray-200 dark:border-gray-800 overflow-hidden">
                <div class="p-6 border-b border-gray-200 dark:border-gray-800 flex justify-between items-center bg-gray-50 dark:bg-gray-800/50">
                  <h3 class="font-bold text-lg"><i class="fa-solid fa-file-pdf text-indigo-500 mr-2"></i> Encrypted Documents</h3>
                  <button class="text-sm font-medium text-indigo-600 dark:text-indigo-400 hover:underline">Upload</button>
                </div>
                <div class="p-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
                   <div class="border border-gray-200 dark:border-gray-700 rounded-lg p-4 flex items-start gap-4 hover:border-indigo-500 transition cursor-pointer">
                     <i class="fa-solid fa-file-contract text-3xl text-gray-400"></i>
                     <div class="min-w-0 flex-1">
                       <h4 class="font-bold text-sm truncate">Last Will & Testament.pdf</h4>
                       <p class="text-xs text-gray-500">2.4 MB • Legal</p>
                     </div>
                   </div>
                   <div class="border border-gray-200 dark:border-gray-700 rounded-lg p-4 flex items-start gap-4 hover:border-indigo-500 transition cursor-pointer">
                     <i class="fa-solid fa-image text-3xl text-gray-400"></i>
                     <div class="min-w-0 flex-1">
                       <h4 class="font-bold text-sm truncate" title="Family_Photos_Archive.zip">Family_Photos_Archive.zip</h4>
                       <p class="text-xs text-gray-500">1.2 GB • Personal</p>
                     </div>
                   </div>
                </div>
              </div>

            </div>
            
            <!-- Sidebar Column -->
            <div class="space-y-8">
              
              <!-- Section 3: Legacy Contacts -->
              <div class="bg-white dark:bg-gray-900 rounded-xl shadow-sm border border-gray-200 dark:border-gray-800 overflow-hidden">
                <div class="p-6 border-b border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-800/50">
                  <h3 class="font-bold text-lg"><i class="fa-solid fa-user-shield text-indigo-500 mr-2"></i> Legacy Contacts</h3>
                </div>
                <div class="p-6 space-y-4">
                  <div class="flex items-center justify-between pb-4 border-b border-gray-100 dark:border-gray-800">
                    <div class="flex items-center gap-3">
                      <div class="w-10 h-10 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600 font-bold">SJ</div>
                      <div>
                        <h4 class="font-bold text-sm">Sarah Jenkins</h4>
                        <p class="text-xs text-gray-500">Spouse • Full Access</p>
                      </div>
                    </div>
                    <button class="text-gray-400 hover:text-indigo-600"><i class="fa-solid fa-ellipsis-vertical"></i></button>
                  </div>
                  <div class="flex items-center justify-between">
                    <div class="flex items-center gap-3">
                      <div class="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-bold">MD</div>
                      <div>
                        <h4 class="font-bold text-sm">Michael Doe</h4>
                        <p class="text-xs text-gray-500">Attorney • Legal Only</p>
                      </div>
                    </div>
                    <button class="text-gray-400 hover:text-indigo-600"><i class="fa-solid fa-ellipsis-vertical"></i></button>
                  </div>
                  <button class="w-full mt-2 py-2 border border-dashed border-gray-300 dark:border-gray-700 rounded-lg text-sm text-gray-500 hover:text-indigo-600 hover:border-indigo-600 transition">
                    + Add New Contact
                  </button>
                </div>
              </div>

              <!-- Section 5: Activity Log -->
              <div class="bg-white dark:bg-gray-900 rounded-xl shadow-sm border border-gray-200 dark:border-gray-800 overflow-hidden">
                <div class="p-6 border-b border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-800/50">
                  <h3 class="font-bold text-lg"><i class="fa-solid fa-clock-rotate-left text-indigo-500 mr-2"></i> Security Log</h3>
                </div>
                <div class="p-6">
                  <ul class="space-y-4 relative before:absolute before:inset-y-0 before:left-2.5 before:w-px before:bg-gray-200 dark:before:bg-gray-800 pl-8">
                    <li class="relative">
                      <div class="absolute w-2 h-2 rounded-full bg-green-500 -left-[27px] top-1.5 ring-4 ring-white dark:ring-gray-900"></div>
                      <p class="text-sm font-medium">Successful Login</p>
                      <p class="text-xs text-gray-500">Today, 10:02 AM • New York, US</p>
                    </li>
                    <li class="relative">
                      <div class="absolute w-2 h-2 rounded-full bg-blue-500 -left-[27px] top-1.5 ring-4 ring-white dark:ring-gray-900"></div>
                      <p class="text-sm font-medium">Added new document</p>
                      <p class="text-xs text-gray-500">Yesterday, 4:30 PM</p>
                    </li>
                    <li class="relative">
                      <div class="absolute w-2 h-2 rounded-full bg-yellow-500 -left-[27px] top-1.5 ring-4 ring-white dark:ring-gray-900"></div>
                      <p class="text-sm font-medium">Master password verified</p>
                      <p class="text-xs text-gray-500">Sept 23, 11:15 AM</p>
                    </li>
                  </ul>
                  <a href="#" class="block text-center text-sm text-indigo-600 dark:text-indigo-400 mt-6 hover:underline font-medium">View Full Log</a>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    `
  }
};

// Generate HTML files
for (const [filename, data] of Object.entries(pages)) {
  const html = htmlWrapper(data.title, data.content, data.hasHeaderFooter);
  fs.writeFileSync(path.join(outDir, filename), html);
  console.log(\`Created \${filename}\`);
}

// Generate CSS
const cssContent = \`
/* Custom Utilities & Resets */
:root {
  --transition-speed: 0.3s;
}

html {
  overflow-x: hidden;
}

body {
  overflow-x: hidden;
  -webkit-font-smoothing: antialiased;
}

/* Scrollbar styling */
::-webkit-scrollbar {
  width: 8px;
}
::-webkit-scrollbar-track {
  background: transparent;
}
::-webkit-scrollbar-thumb {
  background-color: #cbd5e1;
  border-radius: 20px;
}
.dark ::-webkit-scrollbar-thumb {
  background-color: #475569;
}

/* Custom Animation classes that CDN might not pick up instantly */
.animate-fade-in-up {
  animation: fadeInUp 0.6s ease-out forwards;
}

@keyframes fadeInUp {
  0% { opacity: 0; transform: translateY(20px); }
  100% { opacity: 1; transform: translateY(0); }
}

.nav-link {
  position: relative;
}
.nav-link::after {
  content: '';
  position: absolute;
  width: 0;
  height: 2px;
  bottom: -4px;
  left: 0;
  background-color: #4f46e5;
  transition: width 0.3s ease;
}
.nav-link:hover::after, .nav-link.active::after {
  width: 100%;
}
\`;

fs.writeFileSync(path.join(outDir, 'styles.css'), cssContent);
console.log('Created styles.css');

// Generate JS
const jsContent = \`
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
\`;

fs.writeFileSync(path.join(outDir, 'script.js'), jsContent);
console.log('Created script.js');
