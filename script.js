// Navigation initialization function for component system
window.initializeNavigation = () => {
  const hamburger = document.getElementById("hamburger")
  const navMenu = document.getElementById("nav-menu")

  if (hamburger && navMenu) {
    hamburger.addEventListener("click", function () {
      const isExpanded = this.getAttribute("aria-expanded") === "true"
      this.setAttribute("aria-expanded", !isExpanded)
      this.classList.toggle("active")
      navMenu.classList.toggle("active")
    })
  }

  // Smart navigation handling for local files
  const navLinks = document.querySelectorAll(".nav-link")
  navLinks.forEach((link) => {
    link.addEventListener("click", function (e) {
      const href = this.getAttribute("href")

      // Handle local file navigation
      if (window.location.protocol === "file:" && href.startsWith("/")) {
        e.preventDefault()

        // Get current directory
        const currentPath = window.location.pathname
        const currentDir = currentPath.substring(0, currentPath.lastIndexOf("/"))

        // Convert absolute path to relative for local files
        let targetPath
        if (href === "/") {
          targetPath = currentDir + "/index.html"
        } else if (href.startsWith("/#")) {
          // Handle anchor links to homepage
          targetPath = currentDir + "/index.html" + href.substring(1)
        } else {
          // Handle other pages
          targetPath = currentDir + href
        }

        window.location.href = "file://" + targetPath
      }
    })
  })

  // Install button functionality
  const installBtns = document.querySelectorAll(".install-btn, .btn-primary")
  installBtns.forEach((btn) => {
    btn.addEventListener("click", function (e) {
      if (this.tagName === "BUTTON") {
        e.preventDefault()
        // Add your install logic here
        console.log("Install button clicked")

        // For demo purposes, show an alert
        alert(
          "🚀 TextSnip installation would start here!\n\nIn a real scenario, this would:\n• Detect your browser\n• Redirect to the appropriate extension store\n• Guide you through installation",
        )
      }
    })
  })

  // FAQ initialization function for component system
  const faqItems = document.querySelectorAll(".faq-item")

  faqItems.forEach((item) => {
    const question = item.querySelector(".faq-question")
    const answer = item.querySelector(".faq-answer")

    if (question && answer) {
      question.addEventListener("click", () => {
        const isActive = item.classList.contains("active")

        // Close all other FAQ items
        faqItems.forEach((otherItem) => {
          if (otherItem !== item) {
            otherItem.classList.remove("active")
            const otherQuestion = otherItem.querySelector(".faq-question")
            if (otherQuestion) {
              otherQuestion.setAttribute("aria-expanded", "false")
            }
          }
        })

        // Toggle current item
        if (isActive) {
          item.classList.remove("active")
          question.setAttribute("aria-expanded", "false")
        } else {
          item.classList.add("active")
          question.setAttribute("aria-expanded", "true")
        }
      })
    }
  })
}

// Smooth scrolling for anchor links
document.addEventListener("DOMContentLoaded", () => {
  const links = document.querySelectorAll('a[href^="#"]')

  links.forEach((link) => {
    link.addEventListener("click", function (e) {
      const href = this.getAttribute("href")

      if (href === "#") return

      const target = document.querySelector(href)
      if (target) {
        e.preventDefault()
        target.scrollIntoView({
          behavior: "smooth",
          block: "start",
        })

        // Close mobile menu if open
        const navMenu = document.getElementById("nav-menu")
        const hamburger = document.getElementById("hamburger")
        if (navMenu && hamburger) {
          navMenu.classList.remove("active")
          hamburger.classList.remove("active")
          hamburger.setAttribute("aria-expanded", "false")
        }
      }
    })
  })
})

// Navbar scroll effect
window.addEventListener("scroll", () => {
  const navbar = document.querySelector(".navbar")
  if (navbar) {
    if (window.scrollY > 50) {
      navbar.classList.add("scrolled")
    } else {
      navbar.classList.remove("scrolled")
    }
  }
})

// Form submission handling
document.addEventListener("DOMContentLoaded", () => {
  const forms = document.querySelectorAll("form")

  forms.forEach((form) => {
    form.addEventListener("submit", (e) => {
      e.preventDefault()

      // Get form data
      const formData = new FormData(form)
      const data = Object.fromEntries(formData)

      // Simple validation
      const requiredFields = form.querySelectorAll("[required]")
      let isValid = true

      requiredFields.forEach((field) => {
        if (!field.value.trim()) {
          isValid = false
          field.style.borderColor = "#ef4444"
        } else {
          field.style.borderColor = ""
        }
      })

      if (isValid) {
        // Simulate form submission
        const submitBtn = form.querySelector('button[type="submit"]')
        const originalText = submitBtn.innerHTML

        submitBtn.innerHTML = '<span class="btn-content">Sending...</span>'
        submitBtn.disabled = true

        setTimeout(() => {
          alert("Thank you for your message! We'll get back to you soon.")
          form.reset()
          submitBtn.innerHTML = originalText
          submitBtn.disabled = false
        }, 2000)
      }
    })
  })
})

// Add loading animation to buttons
document.addEventListener("DOMContentLoaded", () => {
  const buttons = document.querySelectorAll(".btn-primary, .btn-secondary")

  buttons.forEach((button) => {
    button.addEventListener("mouseenter", function () {
      const shine = this.querySelector(".btn-shine")
      if (shine) {
        shine.style.left = "100%"
        setTimeout(() => {
          shine.style.left = "-100%"
        }, 600)
      }
    })
  })
})

// 404 Detection and Redirect for local files
document.addEventListener("DOMContentLoaded", () => {
  // Check if we're on a file:// protocol and the page doesn't exist
  if (window.location.protocol === "file:") {
    // Check if the current page is the 404 page or if we should redirect
    const currentPath = window.location.pathname
    const fileName = currentPath.substring(currentPath.lastIndexOf("/") + 1)

    // List of valid pages
    const validPages = [
      "index.html",
      "about.html",
      "contact.html",
      "documentation.html",
      "pricing.html",
      "privacy-policy.html",
      "404.html",
      "",
    ]

    // If the current file is not in the valid pages list, redirect to 404
    if (!validPages.includes(fileName) && !fileName.endsWith(".html")) {
      const currentDir = currentPath.substring(0, currentPath.lastIndexOf("/"))
      window.location.href = "file://" + currentDir + "/404.html"
    }
  }
})
