// Enhanced JavaScript with better performance and accessibility

// Utility functions
const debounce = (func, wait) => {
  let timeout
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout)
      func(...args)
    }
    clearTimeout(timeout)
    timeout = setTimeout(later, wait)
  }
}

const throttle = (func, limit) => {
  let inThrottle
  return function () {
    const args = arguments

    if (!inThrottle) {
      func.apply(this, args)
      inThrottle = true
      setTimeout(() => (inThrottle = false), limit)
    }
  }
}

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault()
    const target = document.querySelector(this.getAttribute("href"))
    if (target) {
      const headerOffset = 100
      const elementPosition = target.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      })
    }
  })
})

// Enhanced navbar scroll effect
const navbar = document.querySelector(".navbar")
const handleScroll = throttle(() => {
  if (window.scrollY > 100) {
    navbar.classList.add("scrolled")
  } else {
    navbar.classList.remove("scrolled")
  }
}, 10)

window.addEventListener("scroll", handleScroll)

// Mobile menu toggle with accessibility
const hamburger = document.querySelector(".hamburger")
const navMenu = document.querySelector(".nav-menu")

if (hamburger && navMenu) {
  hamburger.addEventListener("click", () => {
    const isExpanded = hamburger.getAttribute("aria-expanded") === "true"

    hamburger.classList.toggle("active")
    navMenu.classList.toggle("active")
    hamburger.setAttribute("aria-expanded", !isExpanded)

    // Prevent body scroll when menu is open
    document.body.style.overflow = navMenu.classList.contains("active") ? "hidden" : ""
  })

  // Close mobile menu when clicking on a link
  document.querySelectorAll(".nav-link").forEach((link) =>
    link.addEventListener("click", () => {
      hamburger.classList.remove("active")
      navMenu.classList.remove("active")
      hamburger.setAttribute("aria-expanded", "false")
      document.body.style.overflow = ""
    }),
  )

  // Close menu when clicking outside
  document.addEventListener("click", (e) => {
    if (!hamburger.contains(e.target) && !navMenu.contains(e.target)) {
      hamburger.classList.remove("active")
      navMenu.classList.remove("active")
      hamburger.setAttribute("aria-expanded", "false")
      document.body.style.overflow = ""
    }
  })
}

// Enhanced Intersection Observer for animations
const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -50px 0px",
}

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("fade-in-up")

      // Add staggered animation for grid items
      if (entry.target.classList.contains("feature-card") || entry.target.classList.contains("use-case-card")) {
        const siblings = Array.from(entry.target.parentNode.children)
        const index = siblings.indexOf(entry.target)
        entry.target.style.animationDelay = `${index * 0.15}s`
      }
    }
  })
}, observerOptions)

// Observe elements for animation
document.querySelectorAll(".feature-card, .use-case-card, .section-header, .stat-card").forEach((el) => {
  observer.observe(el)
})

// Enhanced button functionality with loading states
const createRippleEffect = (button, event) => {
  const ripple = document.createElement("span")
  ripple.classList.add("ripple")

  const rect = button.getBoundingClientRect()
  const size = Math.max(rect.width, rect.height)
  const x = event.clientX - rect.left - size / 2
  const y = event.clientY - rect.top - size / 2

  ripple.style.width = ripple.style.height = size + "px"
  ripple.style.left = x + "px"
  ripple.style.top = y + "px"

  button.appendChild(ripple)

  setTimeout(() => {
    ripple.remove()
  }, 600)
}

// Install button functionality with enhanced UX
document.querySelectorAll(".btn-primary, .install-btn").forEach((button) => {
  button.addEventListener("click", function (e) {
    createRippleEffect(this, e)

    // Add loading state
    const originalContent = this.innerHTML
    const btnContent = this.querySelector(".btn-content")

    if (btnContent) {
      btnContent.innerHTML = `
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="animate-spin">
          <path d="M21 12A9 9 0 1 1 12 3"/>
        </svg>
        <span>Installing...</span>
      `
    } else {
      this.innerHTML = "<span>Installing...</span>"
    }

    this.disabled = true

    setTimeout(() => {
      if (btnContent) {
        btnContent.innerHTML = `
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M9 12L11 14L15 10"/>
            <path d="M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z"/>
          </svg>
          <span>Redirecting...</span>
        `
      } else {
        this.innerHTML = "<span>Redirecting...</span>"
      }

      setTimeout(() => {
        alert(
          "🚀 Redirecting to Chrome Web Store...\n\nTextSnip extension will be available soon!\n\n✨ Features coming:\n• Smart snippet organization\n• 6 beautiful themes\n• Lightning-fast search\n• 100% privacy-focused\n\nStay tuned for updates!",
        )
        this.innerHTML = originalContent
        this.disabled = false
      }, 1500)
    }, 2000)
  })
})

// Demo button functionality
document.querySelectorAll(".btn-secondary").forEach((button) => {
  if (button.textContent.includes("Demo") || button.textContent.includes("Watch")) {
    button.addEventListener("click", function (e) {
      createRippleEffect(this, e)

      // Create modal-like experience
      const modal = document.createElement("div")
      modal.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.8);
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 10000;
        backdrop-filter: blur(10px);
      `

      modal.innerHTML = `
        <div style="
          background: white;
          padding: 3rem;
          border-radius: 1.5rem;
          max-width: 500px;
          text-align: center;
          box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
        ">
          <div style="font-size: 4rem; margin-bottom: 1rem;">🎬</div>
          <h3 style="font-size: 1.5rem; margin-bottom: 1rem; color: #1a1a1a;">Interactive Demo Coming Soon!</h3>
          <p style="color: #4a5568; margin-bottom: 2rem; line-height: 1.6;">
            We're working on an amazing interactive preview of TextSnip.<br/>
            Get ready to experience the future of snippet management!
          </p>
          <button onclick="this.parentElement.parentElement.remove()" style="
            background: linear-gradient(135deg, #F79B72 0%, #2A4759 100%);
            color: white;
            border: none;
            padding: 0.75rem 2rem;
            border-radius: 0.75rem;
            font-weight: 600;
            cursor: pointer;
          ">Got it!</button>
        </div>
      `

      document.body.appendChild(modal)

      // Close on click outside
      modal.addEventListener("click", (e) => {
        if (e.target === modal) {
          modal.remove()
        }
      })
    })
  }
})

// Enhanced card hover effects with performance optimization
const addCardEffects = () => {
  document.querySelectorAll(".feature-card, .use-case-card").forEach((card) => {
    card.addEventListener("mouseenter", function () {
      this.style.transform = "translateY(-8px)"
    })

    card.addEventListener("mouseleave", function () {
      this.style.transform = "translateY(0)"
    })
  })
}

// Initialize card effects after DOM is loaded
document.addEventListener("DOMContentLoaded", addCardEffects)

// Parallax effect for hero section (optimized)
const heroSection = document.querySelector(".hero")
const parallaxElements = document.querySelectorAll(".floating-element")

const handleParallax = throttle(() => {
  const scrolled = window.pageYOffset
  const rate = scrolled * -0.3

  if (heroSection && scrolled < heroSection.offsetHeight) {
    parallaxElements.forEach((element, index) => {
      const speed = 0.3 + index * 0.1
      element.style.transform = `translateY(${rate * speed}px) rotate(${scrolled * 0.05}deg)`
    })
  }
}, 16) // 60fps

window.addEventListener("scroll", handleParallax)

// Enhanced typing effect for hero title
const typeWriter = (element, text, speed = 60) => {
  let i = 0
  element.innerHTML = ""
  element.style.borderRight = "3px solid #F79B72"

  const type = () => {
    if (i < text.length) {
      element.innerHTML += text.charAt(i)
      i++
      setTimeout(type, speed)
    } else {
      // Remove cursor after typing is complete
      setTimeout(() => {
        element.style.borderRight = "none"
      }, 1000)
    }
  }

  type()
}

// Tab switching functionality for snippet showcase
const tabs = document.querySelectorAll(".tab")
const snippetCards = document.querySelectorAll(".snippet-card")

tabs.forEach((tab, index) => {
  tab.addEventListener("click", () => {
    // Remove active class from all tabs and cards
    tabs.forEach((t) => t.classList.remove("active"))
    snippetCards.forEach((card) => card.classList.remove("active"))

    // Add active class to clicked tab and corresponding card
    tab.classList.add("active")
    if (snippetCards[index]) {
      snippetCards[index].classList.add("active")
    }
  })
})

// Copy functionality for code examples
document.querySelectorAll(".example-btn, .action-btn").forEach((btn) => {
  btn.addEventListener("click", function (e) {
    e.stopPropagation()

    // Find the code content
    const codeElement = this.closest(".use-case-example, .snippet-card").querySelector("code, .code-content")
    if (codeElement) {
      const text = codeElement.textContent

      // Copy to clipboard
      navigator.clipboard.writeText(text).then(() => {
        // Show feedback
        const originalIcon = this.innerHTML
        this.innerHTML = `
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M9 12L11 14L15 10"/>
            <path d="M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z"/>
          </svg>
        `
        this.style.color = "#10b981"

        setTimeout(() => {
          this.innerHTML = originalIcon
          this.style.color = ""
        }, 2000)
      })
    }
  })
})

// Smooth reveal animation for comparison table rows
const animateTableRows = () => {
  const tableRows = document.querySelectorAll(".table-row")
  tableRows.forEach((row, index) => {
    row.style.opacity = "0"
    row.style.transform = "translateX(-20px)"

    setTimeout(() => {
      row.style.transition = "all 0.6s cubic-bezier(0.4, 0, 0.2, 1)"
      row.style.opacity = "1"
      row.style.transform = "translateX(0)"
    }, index * 100)
  })
}

// Initialize table animation when section comes into view
const tableObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      animateTableRows()
      tableObserver.unobserve(entry.target)
    }
  })
})

const comparisonTable = document.querySelector(".comparison-table")
if (comparisonTable) {
  tableObserver.observe(comparisonTable)
}

// Add dynamic styles for enhanced animations
const addDynamicStyles = () => {
  const style = document.createElement("style")
  style.textContent = `
    button {
      position: relative;
      overflow: hidden;
    }
    
    .ripple {
      position: absolute;
      border-radius: 50%;
      background: rgba(255, 255, 255, 0.6);
      transform: scale(0);
      animation: ripple-animation 0.6s linear;
      pointer-events: none;
    }
    
    @keyframes ripple-animation {
      to {
        transform: scale(4);
        opacity: 0;
      }
    }
    
    .animate-spin {
      animation: spin 1s linear infinite;
    }
    
    @keyframes spin {
      from {
        transform: rotate(0deg);
      }
      to {
        transform: rotate(360deg);
      }
    }
    
    /* Enhanced focus styles */
    .nav-link:focus,
    .btn-primary:focus,
    .btn-secondary:focus,
    .tab:focus,
    .action-btn:focus {
      outline: 2px solid #F79B72;
      outline-offset: 2px;
      border-radius: 0.5rem;
    }
    
    /* Loading state styles */
    button:disabled {
      opacity: 0.7;
      cursor: not-allowed;
      transform: none !important;
    }
    
    /* Enhanced hover states */
    .feature-card:hover .feature-icon,
    .use-case-card:hover .use-case-icon {
      animation: bounce 0.6s ease;
    }
    
    @keyframes bounce {
      0%, 20%, 60%, 100% {
        transform: translateY(0) scale(1) rotate(0deg);
      }
      40% {
        transform: translateY(-10px) scale(1.1) rotate(5deg);
      }
      80% {
        transform: translateY(-5px) scale(1.05) rotate(2deg);
      }
    }
    
    /* Improved accessibility for reduced motion */
    @media (prefers-reduced-motion: reduce) {
      .floating-element,
      .snippet-showcase {
        animation: none !important;
      }
      
      * {
        transition-duration: 0.01ms !important;
      }
    }
    
    /* Custom scrollbar */
    ::-webkit-scrollbar {
      width: 8px;
    }
    
    ::-webkit-scrollbar-track {
      background: #EEEEEE;
    }
    
    ::-webkit-scrollbar-thumb {
      background: #F79B72;
      border-radius: 4px;
    }
    
    ::-webkit-scrollbar-thumb:hover {
      background: #e8845a;
    }
  `
  document.head.appendChild(style)
}

// Initialize dynamic styles
addDynamicStyles()

// Performance monitoring
const performanceObserver = new PerformanceObserver((list) => {
  for (const entry of list.getEntries()) {
    if (entry.entryType === "navigation") {
      console.log("Page load time:", entry.loadEventEnd - entry.loadEventStart, "ms")
    }
  }
})

if ("PerformanceObserver" in window) {
  performanceObserver.observe({ entryTypes: ["navigation"] })
}

// Error handling for better user experience
window.addEventListener("error", (e) => {
  console.error("JavaScript error:", e.error)
  // Could send error reports to analytics service
})

// Initialize everything when DOM is loaded
document.addEventListener("DOMContentLoaded", () => {
  console.log("🚀 TextSnip website loaded successfully!")

  // Add loading animation to page
  document.body.style.opacity = "0"
  document.body.style.transition = "opacity 0.5s ease"

  setTimeout(() => {
    document.body.style.opacity = "1"
  }, 100)
})

// Service Worker registration for PWA capabilities (future enhancement)
if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    // navigator.serviceWorker.register('/sw.js')
    //   .then((registration) => {
    //     console.log('SW registered: ', registration);
    //   })
    //   .catch((registrationError) => {
    //     console.log('SW registration failed: ', registrationError);
    //   });
  })
}
