// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault()
    const target = document.querySelector(this.getAttribute("href"))
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      })
    }
  })
})

// Navbar scroll effect
let lastScrollY = window.scrollY
const navbar = document.querySelector(".navbar")

window.addEventListener("scroll", () => {
  const currentScrollY = window.scrollY

  if (currentScrollY > 100) {
    navbar.classList.add("scrolled")
  } else {
    navbar.classList.remove("scrolled")
  }

  // Hide/show navbar on scroll
  if (currentScrollY > lastScrollY && currentScrollY > 100) {
    navbar.style.transform = "translateY(-100%)"
  } else {
    navbar.style.transform = "translateY(0)"
  }

  lastScrollY = currentScrollY
})

// Mobile menu toggle
const hamburger = document.querySelector(".hamburger")
const navMenu = document.querySelector(".nav-menu")

hamburger?.addEventListener("click", () => {
  hamburger.classList.toggle("active")
  navMenu.classList.toggle("active")
})

// Install button functionality with enhanced animation
const installButtons = document.querySelectorAll(".install-btn, .install-main, .pricing-btn, .cta-btn")

installButtons.forEach((button) => {
  button.addEventListener("click", (e) => {
    e.preventDefault()

    // Create ripple effect
    const ripple = document.createElement("span")
    const rect = button.getBoundingClientRect()
    const size = Math.max(rect.width, rect.height)
    const x = e.clientX - rect.left - size / 2
    const y = e.clientY - rect.top - size / 2

    ripple.style.cssText = `
      position: absolute;
      width: ${size}px;
      height: ${size}px;
      left: ${x}px;
      top: ${y}px;
      background: rgba(255, 255, 255, 0.3);
      border-radius: 50%;
      transform: scale(0);
      animation: ripple 0.6s linear;
      pointer-events: none;
    `

    button.style.position = "relative"
    button.style.overflow = "hidden"
    button.appendChild(ripple)

    // Update button text
    const originalText = button.innerHTML
    button.innerHTML =
      '<span class="btn-content"><span class="btn-icon">✅</span><span>Opening Extension Store...</span></span>'

    setTimeout(() => {
      ripple.remove()
      // In a real scenario, this would open the browser extension store
      window.open("https://chrome.google.com/webstore", "_blank")

      setTimeout(() => {
        button.innerHTML = originalText
      }, 2000)
    }, 1000)
  })
})

// Add ripple animation CSS
const rippleCSS = `
  @keyframes ripple {
    to {
      transform: scale(4);
      opacity: 0;
    }
  }
`

const style = document.createElement("style")
style.textContent = rippleCSS
document.head.appendChild(style)

// Demo button functionality
const demoBtn = document.querySelector(".demo-btn")
if (demoBtn) {
  demoBtn.addEventListener("click", () => {
    // Create modal overlay
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

    const modalContent = document.createElement("div")
    modalContent.style.cssText = `
      background: white;
      padding: 3rem;
      border-radius: 20px;
      text-align: center;
      max-width: 500px;
      margin: 20px;
      box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
    `

    modalContent.innerHTML = `
      <div style="font-size: 3rem; margin-bottom: 1rem;">🎥</div>
      <h3 style="font-size: 1.5rem; margin-bottom: 1rem; color: #0f172a;">Demo Video Coming Soon!</h3>
      <p style="color: #64748b; margin-bottom: 2rem;">We're preparing an amazing demo video to show you all the features of TextSnip in action.</p>
      <button onclick="this.closest('.modal').remove()" style="background: linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%); color: white; border: none; padding: 12px 24px; border-radius: 12px; font-weight: 600; cursor: pointer;">Close</button>
    `

    modal.className = "modal"
    modal.appendChild(modalContent)
    document.body.appendChild(modal)

    // Close modal on outside click
    modal.addEventListener("click", (e) => {
      if (e.target === modal) {
        modal.remove()
      }
    })
  })
}

// Search demo functionality
const searchInput = document.querySelector(".search-input")
if (searchInput) {
  searchInput.addEventListener("input", (e) => {
    const query = e.target.value.toLowerCase()
    const results = document.querySelectorAll(".search-result")

    results.forEach((result) => {
      const title = result.querySelector(".result-title").textContent.toLowerCase()
      const preview = result.querySelector(".result-preview").textContent.toLowerCase()

      if (title.includes(query) || preview.includes(query) || query === "") {
        result.style.display = "block"
        result.style.animation = "fadeInUp 0.3s ease"
      } else {
        result.style.display = "none"
      }
    })
  })
}

// Save button demo animation
const saveBtn = document.querySelector(".save-btn")
if (saveBtn) {
  saveBtn.addEventListener("click", () => {
    const originalText = saveBtn.innerHTML
    saveBtn.innerHTML = '<span class="save-icon">✅</span> Saved!'
    saveBtn.style.background = "linear-gradient(135deg, #10b981 0%, #059669 100%)"

    setTimeout(() => {
      saveBtn.innerHTML = originalText
      saveBtn.style.background = "linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)"
    }, 2000)
  })
}

// Parallax effect for floating elements
window.addEventListener("scroll", () => {
  const scrolled = window.pageYOffset
  const parallaxElements = document.querySelectorAll(".floating-card")

  parallaxElements.forEach((element) => {
    const speed = element.dataset.speed || 0.5
    const yPos = -(scrolled * speed)
    element.style.transform = `translateY(${yPos}px)`
  })
})

// Enhanced hover effects for cards
document.querySelectorAll(".feature-card, .comparison-card").forEach((card) => {
  card.addEventListener("mouseenter", () => {
    card.style.transform = "translateY(-8px) scale(1.02)"
  })

  card.addEventListener("mouseleave", () => {
    card.style.transform = "translateY(0) scale(1)"
  })
})

// Folder demo interaction
document.querySelectorAll(".folder-header").forEach((header) => {
  header.addEventListener("click", () => {
    const folder = header.parentElement
    const items = folder.querySelector(".folder-items")

    if (items.style.display === "none" || !items.style.display) {
      items.style.display = "block"
      items.style.animation = "fadeInUp 0.3s ease"
      header.querySelector(".folder-icon").textContent = "📂"
    } else {
      items.style.display = "none"
      header.querySelector(".folder-icon").textContent = "📁"
    }
  })
})

// Theme switcher with enhanced animation
const createThemeSwitcher = () => {
  const switcher = document.createElement("button")
  switcher.innerHTML = "🌙"
  switcher.style.cssText = `
    position: fixed;
    bottom: 30px;
    right: 30px;
    width: 60px;
    height: 60px;
    border-radius: 50%;
    border: none;
    background: linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%);
    color: white;
    font-size: 24px;
    cursor: pointer;
    box-shadow: 0 10px 25px rgba(99, 102, 241, 0.3);
    z-index: 1000;
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    backdrop-filter: blur(10px);
  `

  switcher.addEventListener("click", () => {
    document.body.classList.toggle("dark-theme")
    switcher.innerHTML = document.body.classList.contains("dark-theme") ? "☀️" : "🌙"
    switcher.style.transform = "scale(1.1) rotate(180deg)"

    setTimeout(() => {
      switcher.style.transform = "scale(1) rotate(0deg)"
    }, 300)
  })

  switcher.addEventListener("mouseenter", () => {
    switcher.style.transform = "scale(1.1)"
    switcher.style.boxShadow = "0 15px 35px rgba(99, 102, 241, 0.4)"
  })

  switcher.addEventListener("mouseleave", () => {
    switcher.style.transform = "scale(1)"
    switcher.style.boxShadow = "0 10px 25px rgba(99, 102, 241, 0.3)"
  })

  document.body.appendChild(switcher)
}

// Initialize theme switcher
createThemeSwitcher()

// Dark theme styles
const darkThemeStyles = `
  .dark-theme {
    --bg-primary: #0f172a;
    --bg-secondary: #1e293b;
    --bg-tertiary: #334155;
    --text-primary: #f8fafc;
    --text-secondary: #cbd5e1;
    --text-light: #94a3b8;
    --border-color: #334155;
    --border-light: #475569;
    --bg-card: rgba(30, 41, 59, 0.8);
  }
  
  .dark-theme .navbar {
    background: rgba(15, 23, 42, 0.9);
    border-bottom-color: #334155;
  }
  
  .dark-theme .hero-bg-gradient {
    background: linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #334155 100%);
  }
  
  .dark-theme .feature-card,
  .dark-theme .comparison-card,
  .dark-theme .pricing-card {
    background: rgba(30, 41, 59, 0.8);
    border-color: #334155;
  }
  
  .dark-theme .demo-container {
    background: #1e293b;
    border-color: #334155;
  }
  
  .dark-theme .demo-tab {
    background: #334155;
    color: #cbd5e1;
  }
  
  .dark-theme .demo-tab.active {
    background: #1e293b;
    color: #f8fafc;
  }
  
  .dark-theme .search-bar {
    background: #1e293b;
    border-color: #334155;
  }
  
  .dark-theme .search-result {
    background: #1e293b;
    border-color: #334155;
  }
  
  .dark-theme .folder {
    background: #1e293b;
    border-color: #334155;
  }
  
  .dark-theme .folder-header {
    background: #334155;
  }
`

const darkStyleSheet = document.createElement("style")
darkStyleSheet.textContent = darkThemeStyles
document.head.appendChild(darkStyleSheet)

// Performance optimization: Debounce scroll events
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

// Apply debouncing to scroll events
window.addEventListener(
  "scroll",
  debounce(() => {
    // Scroll-based animations here
  }, 16),
) // ~60fps

// Preload critical images
const preloadImages = () => {
  const imageUrls = [
    "/placeholder.svg?height=400&width=600&query=code+editor+interface",
    "/placeholder.svg?height=300&width=400&query=browser+extension+popup",
  ]

  imageUrls.forEach((url) => {
    const img = new Image()
    img.src = url
  })
}

// Initialize preloading
preloadImages()

// Add loading animation for the entire page
window.addEventListener("load", () => {
  document.body.classList.add("loaded")

  // Trigger entrance animations
  setTimeout(() => {
    document.querySelectorAll(".hero-content > *").forEach((el, index) => {
      el.style.animationDelay = `${index * 0.1}s`
      el.classList.add("animate-in")
    })
  }, 100)
})

// Particle system
class ParticleSystem {
  constructor() {
    this.particles = []
    this.container = document.getElementById("particles-container")
    this.init()
  }

  init() {
    for (let i = 0; i < 50; i++) {
      this.createParticle()
    }
    this.animate()
  }

  createParticle() {
    const particle = document.createElement("div")
    particle.className = "particle"

    const size = Math.random() * 4 + 2
    const x = Math.random() * window.innerWidth
    const y = Math.random() * window.innerHeight
    const duration = Math.random() * 10 + 5

    particle.style.width = `${size}px`
    particle.style.height = `${size}px`
    particle.style.left = `${x}px`
    particle.style.top = `${y}px`
    particle.style.animationDuration = `${duration}s`
    particle.style.animationDelay = `${Math.random() * 5}s`

    this.container.appendChild(particle)
    this.particles.push({
      element: particle,
      x: x,
      y: y,
      vx: (Math.random() - 0.5) * 0.5,
      vy: (Math.random() - 0.5) * 0.5,
    })
  }

  animate() {
    this.particles.forEach((particle) => {
      particle.x += particle.vx
      particle.y += particle.vy

      if (particle.x < 0 || particle.x > window.innerWidth) particle.vx *= -1
      if (particle.y < 0 || particle.y > window.innerHeight) particle.vy *= -1

      particle.element.style.left = `${particle.x}px`
      particle.element.style.top = `${particle.y}px`
    })

    requestAnimationFrame(() => this.animate())
  }
}

// Initialize particle system
new ParticleSystem()

// Intersection Observer for animations
const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -50px 0px",
}

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("loaded")

      // Trigger stats animation when hero section is visible
      if (entry.target.classList.contains("hero")) {
        setTimeout(animateStats, 500)
      }
    }
  })
}, observerOptions)

// Observe elements for animation
document.querySelectorAll(".feature-card, .use-case-card, .hero").forEach((el) => {
  el.classList.add("loading")
  observer.observe(el)
})

// Tilt effect for feature cards
document.querySelectorAll("[data-tilt]").forEach((card) => {
  card.addEventListener("mousemove", (e) => {
    const rect = card.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top

    const centerX = rect.width / 2
    const centerY = rect.height / 2

    const rotateX = (y - centerY) / 10
    const rotateY = (centerX - x) / 10

    card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.05, 1.05, 1.05)`
  })

  card.addEventListener("mouseleave", () => {
    card.style.transform = "perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)"
  })
})

// Demo tabs functionality
const demoTabs = document.querySelectorAll(".demo-tab")
const demoPanels = document.querySelectorAll(".demo-panel")

demoTabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    const targetPanel = tab.dataset.tab

    // Remove active class from all tabs and panels
    demoTabs.forEach((t) => t.classList.remove("active"))
    demoPanels.forEach((p) => p.classList.remove("active"))

    // Add active class to clicked tab and corresponding panel
    tab.classList.add("active")
    document.getElementById(`${targetPanel}-panel`).classList.add("active")
  })
})

// Stats counter animation
const animateStats = () => {
  const stats = document.querySelectorAll(".stat-number")

  stats.forEach((stat) => {
    const target = Number.parseFloat(stat.dataset.target)
    const isDecimal = target % 1 !== 0
    let current = 0
    const increment = target / 100

    const timer = setInterval(() => {
      current += increment
      if (current >= target) {
        stat.textContent = isDecimal ? target.toFixed(1) : Math.floor(target)
        clearInterval(timer)
      } else {
        stat.textContent = isDecimal ? current.toFixed(1) : Math.floor(current)
      }
    }, 20)
  })
}

console.log("🚀 TextSnip website loaded with enhanced interactivity!")
