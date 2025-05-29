// Simple component loader - no dependencies, no build tools, no fetch required
class ComponentLoader {
    constructor() {
      this.components = {
        header: `<nav class="navbar" role="navigation" aria-label="Main navigation">
    <div class="nav-container">
        <div class="nav-brand">
            <a href="/" class="logo-container">
                <div class="logo-icon">
                    <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                        <rect width="32" height="32" rx="8" fill="#64E2B7"/>
                        <path d="M8 12h16M8 16h12M8 20h8" stroke="white" stroke-width="2" stroke-linecap="round"/>
                    </svg>
                </div>
                <span class="logo-text">textsnip.io</span>
            </a>
        </div>
        <div class="nav-menu" id="nav-menu">
            <a href="/#features" class="nav-link">
                <span>Features</span>
                <div class="nav-link-bg"></div>
            </a>
            <a href="/documentation.html" class="nav-link">
                <span>Docs</span>
                <div class="nav-link-bg"></div>
            </a>
            <a href="/pricing.html" class="nav-link">
                <span>Pricing</span>
                <div class="nav-link-bg"></div>
            </a>
            <a href="/about.html" class="nav-link">
                <span>About</span>
                <div class="nav-link-bg"></div>
            </a>
            <a href="/contact.html" class="nav-link">
                <span>Contact</span>
                <div class="nav-link-bg"></div>
            </a>
            <button class="install-btn" aria-label="Install TextSnip Extension">
                <span>Install Now</span>
                <div class="btn-shine"></div>
            </button>
        </div>
        <button class="hamburger" id="hamburger" aria-label="Toggle navigation menu" aria-expanded="false">
            <span></span>
            <span></span>
            <span></span>
        </button>
    </div>
  </nav>`,
  
        footer: `<footer class="footer" role="contentinfo">
      <div class="container">
          <div class="footer-content">
              <div class="footer-brand">
                  <div class="footer-logo">
                      <a href="/" class="logo-container">
                          <div class="logo-icon">
                              <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                                  <rect width="32" height="32" rx="8" fill="#64E2B7"/>
                                  <path d="M8 12h16M8 16h12M8 20h8" stroke="white" stroke-width="2" stroke-linecap="round"/>
                              </svg>
                          </div>
                          <span class="logo-text">textsnip.io</span>
                      </a>
                  </div>
                  <p>Your ultimate code snippet manager for enhanced productivity and seamless workflow integration.</p>
                  <div class="social-links">
                      <a href="#" aria-label="Follow us on Twitter" rel="noopener">
                          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                              <path d="M23 3A10.9 10.9 0 0 1 20.1 4.7A4.48 4.48 0 0 0 22.46 2A9 9 0 0 1 19.36 3.74A4.48 4.48 0 0 0 12 7.58V8.5A10.66 10.66 0 0 1 3 4S-1 13 8 17A11.64 11.64 0 0 1 0 19C9 24 20 19 20 7.5A4.5 4.5 0 0 0 19.5 6A10.9 10.9 0 0 1 23 3Z"/>
                          </svg>
                      </a>
                      <a href="#" aria-label="Follow us on GitHub" rel="noopener">
                          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                              <path d="M9 19C4 20.5 4 16.5 2 16M22 16V22A2 2 0 0 1 20 24H4A2 2 0 0 1 2 22V16"/>
                          </svg>
                      </a>
                      <a href="#" aria-label="Join our Discord" rel="noopener">
                          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                              <path d="M21 15A2 2 0 0 1 19 17H7L4 20V5A2 2 0 0 1 6 3H19A2 2 0 0 1 21 5Z"/>
                          </svg>
                      </a>
                  </div>
              </div>
              <div class="footer-links">
                  <div class="footer-column">
                      <h4>Product</h4>
                      <a href="/#features">Features</a>
                      <a href="/#use-cases">Use Cases</a>
                      <a href="/documentation">Documentation</a>
                      <a href="/changelog">Changelog</a>
                      <a href="/roadmap">Roadmap</a>
                  </div>
                  <div class="footer-column">
                      <h4>Support</h4>
                      <a href="/contact">Contact Us</a>
                      <a href="/bug-reports">Bug Reports</a>
                      <a href="/feature-requests">Feature Requests</a>
                      <a href="/community">Community</a>
                  </div>
                  <div class="footer-column">
                      <h4>Company</h4>
                      <a href="/about">About Us</a>
                      <a href="/blog">Blog</a>
                      <a href="/careers">Careers</a>
                      <a href="/press-kit">Press Kit</a>
                      <a href="/partners">Partners</a>
                  </div>
                  <div class="footer-column">
                      <h4>Legal</h4>
                      <a href="/privacy-policy">Privacy Policy</a>
                      <a href="/terms-of-service">Terms of Service</a>
                      <a href="/cookie-policy">Cookie Policy</a>
                  </div>
              </div>
          </div>
          <div class="footer-bottom">
              <div class="footer-bottom-content">
                  <p>&copy; 2025 textsnip.io — Built with ❤️ for developers worldwide</p>
                  <div class="footer-badges">
                      <span class="badge">Made with ❤️</span>
                      <span class="badge">Open Source</span>
                  </div>
              </div>
          </div>
      </div>
  </footer>`,
  
        faq: `<section id="faq" class="faq" aria-labelledby="faq-title">
      <div class="container">
          <div class="faq-container">
              <header class="section-header">
                  <div class="section-badge">
                      <span>❓ FAQ</span>
                  </div>
                  <h2 id="faq-title">Frequently Asked Questions</h2>
                  <p>Everything you need to know about TextSnip and how it works</p>
              </header>
              
              <div class="faq-list">
                  <div class="faq-item">
                      <button class="faq-question" aria-expanded="false">
                          <span>Is TextSnip really free forever?</span>
                          <svg class="faq-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                              <polyline points="6,9 12,15 18,9"></polyline>
                          </svg>
                      </button>
                      <div class="faq-answer">
                          <div class="faq-answer-content">
                              <p>Yes! TextSnip is completely free with no hidden costs, premium tiers, or subscription fees. We believe developers should have access to powerful productivity tools without financial barriers.</p>
                              <div class="faq-highlight">
                                  <p><strong>What's included forever:</strong> Unlimited snippets, all themes, export/import, full search functionality, and all future updates.</p>
                              </div>
                          </div>
                      </div>
                  </div>
                  
                  <div class="faq-item">
                      <button class="faq-question" aria-expanded="false">
                          <span>How does TextSnip protect my privacy?</span>
                          <svg class="faq-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                              <polyline points="6,9 12,15 18,9"></polyline>
                          </svg>
                      </button>
                      <div class="faq-answer">
                          <div class="faq-answer-content">
                              <p>TextSnip stores all your data locally on your device using browser storage. We never collect, transmit, or store your snippets on our servers. No accounts required, no tracking, no analytics on your content.</p>
                              <p>Your code snippets remain 100% private and under your control at all times.</p>
                          </div>
                      </div>
                  </div>
                  
                  <div class="faq-item">
                      <button class="faq-question" aria-expanded="false">
                          <span>Which browsers and platforms are supported?</span>
                          <svg class="faq-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                              <polyline points="6,9 12,15 18,9"></polyline>
                          </svg>
                      </button>
                      <div class="faq-answer">
                          <div class="faq-answer-content">
                              <p>TextSnip is available for all major browsers:</p>
                              <ul style="margin: 1rem 0; padding-left: 1.5rem;">
                                  <li>Google Chrome (recommended)</li>
                                  <li>Mozilla Firefox</li>
                                  <li>Microsoft Edge</li>
                                  <li>Safari (coming soon)</li>
                              </ul>
                              <p>Works on Windows, macOS, and Linux. Mobile support is planned for future releases.</p>
                          </div>
                      </div>
                  </div>
                  
                  <div class="faq-item">
                      <button class="faq-question" aria-expanded="false">
                          <span>Can I sync my snippets across multiple devices?</span>
                          <svg class="faq-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                              <polyline points="6,9 12,15 18,9"></polyline>
                          </svg>
                      </button>
                      <div class="faq-answer">
                          <div class="faq-answer-content">
                              <p>Currently, TextSnip stores data locally for maximum privacy. However, you can easily transfer your snippets between devices using the export/import feature.</p>
                              <div class="faq-highlight">
                                  <p><strong>Coming soon:</strong> Optional encrypted cloud sync for users who want cross-device access while maintaining privacy.</p>
                              </div>
                          </div>
                      </div>
                  </div>
                  
                  <div class="faq-item">
                      <button class="faq-question" aria-expanded="false">
                          <span>How many snippets can I store?</span>
                          <svg class="faq-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                              <polyline points="6,9 12,15 18,9"></polyline>
                          </svg>
                      </button>
                      <div class="faq-answer">
                          <div class="faq-answer-content">
                              <p>There's no artificial limit on the number of snippets you can store. The only limitation is your browser's local storage capacity, which is typically several gigabytes.</p>
                              <p>Most users can store thousands of snippets without any issues. The extension is optimized for performance even with large collections.</p>
                          </div>
                      </div>
                  </div>
                  
                  <div class="faq-item">
                      <button class="faq-question" aria-expanded="false">
                          <span>What programming languages are supported?</span>
                          <svg class="faq-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                              <polyline points="6,9 12,15 18,9"></polyline>
                          </svg>
                      </button>
                      <div class="faq-answer">
                          <div class="faq-answer-content">
                              <p>TextSnip supports all programming languages and text formats. It includes syntax highlighting for popular languages including:</p>
                              <ul style="margin: 1rem 0; padding-left: 1.5rem;">
                                  <li>JavaScript, TypeScript, Python, Java</li>
                                  <li>HTML, CSS, SCSS, React, Vue</li>
                                  <li>PHP, Ruby, Go, Rust, C++</li>
                                  <li>SQL, JSON, YAML, Markdown</li>
                                  <li>And many more...</li>
                              </ul>
                          </div>
                      </div>
                  </div>
                  
                  <div class="faq-item">
                      <button class="faq-question" aria-expanded="false">
                          <span>How do I backup my snippets?</span>
                          <svg class="faq-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                              <polyline points="6,9 12,15 18,9"></polyline>
                          </svg>
                      </button>
                      <div class="faq-answer">
                          <div class="faq-answer-content">
                              <p>TextSnip includes a powerful export feature that creates a complete backup of all your snippets, tags, and settings in JSON format.</p>
                              <p>You can export your data anytime and import it on another device or after reinstalling the extension. We recommend regular backups for peace of mind.</p>
                          </div>
                      </div>
                  </div>
                  
                  <div class="faq-item">
                      <button class="faq-question" aria-expanded="false">
                          <span>Does TextSnip work offline?</span>
                          <svg class="faq-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                              <polyline points="6,9 12,15 18,9"></polyline>
                          </svg>
                      </button>
                      <div class="faq-answer">
                          <div class="faq-answer-content">
                              <p>Since TextSnip stores everything locally, it works perfectly offline. You can access, search, and manage your snippets without an internet connection.</p>
                              <p>This makes it ideal for developers working in environments with limited connectivity or those who prioritize offline functionality.</p>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </div>
  </section>`,
  
        cta: `<section class="cta" aria-labelledby="cta-title">
      <div class="cta-background">
          <div class="cta-pattern"></div>
      </div>
      <div class="container">
          <div class="cta-content">
              <div class="cta-badge">
                  <span>🚀 Ready to start?</span>
              </div>
              <h2 id="cta-title">Ready to boost your productivity?</h2>
              <p>Join thousands of developers who have streamlined their workflow with TextSnip</p>
              
              <div class="cta-buttons">
                  <button class="btn-primary large" aria-label="Install TextSnip browser extension now">
                      <span class="btn-content">
                          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
                              <path d="M21 15V19A2 2 0 0 1 19 21H5A2 2 0 0 1 3 19V15"/>
                              <polyline points="7,10 12,15 17,10"/>
                              <line x1="12" y1="15" x2="12" y2="3"/>
                          </svg>
                          <span>Install TextSnip Now</span>
                      </span>
                      <div class="btn-shine"></div>
                  </button>
                  <a href="/documentation" class="btn-secondary large">
                      <span class="btn-content">
                          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
                              <path d="M14 2H6A2 2 0 0 0 4 4V20A2 2 0 0 0 6 22H18A2 2 0 0 0 20 20V8Z"/>
                              <path d="M14 2V8H20"/>
                          </svg>
                          <span>View Documentation</span>
                      </span>
                  </a>
              </div>
              
              <div class="cta-features">
                  <div class="cta-feature">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                          <path d="M9 12L11 14L15 10"/>
                          <path d="M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z"/>
                      </svg>
                      <span>Free forever</span>
                  </div>
                  <div class="cta-feature">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                          <path d="M12 1L3 5V11C3 16.55 6.84 21.74 12 23C17.16 21.74 21 16.55 21 11V5L12 1Z"/>
                      </svg>
                      <span>100% private</span>
                  </div>
                  <div class="cta-feature">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                          <circle cx="12" cy="12" r="10"/>
                          <path d="M8 14S9.5 16 12 16S16 14 16 14"/>
                          <line x1="9" y1="9" x2="9.01" y2="9"/>
                          <line x1="15" y1="9" x2="15.01" y2="9"/>
                      </svg>
                      <span>No account required</span>
                  </div>
              </div>
          </div>
      </div>
  </section>`,
      }
  
      this.loadComponents()
    }
  
    loadComponents() {
      const componentElements = document.querySelectorAll("[data-component]")
  
      componentElements.forEach((element) => {
        const componentName = element.getAttribute("data-component")
        this.loadComponent(componentName, element)
      })
  
      // Initialize any scripts after components are loaded
      this.initializeScripts()
    }
  
    loadComponent(name, element) {
      try {
        const html = this.components[name]
  
        if (html) {
          element.innerHTML = html
          element.removeAttribute("data-component")
        } else {
          console.error(`Component ${name} not found`)
          element.innerHTML = `<!-- Component ${name} not found -->`
        }
      } catch (error) {
        console.error(`Error loading component ${name}:`, error)
        element.innerHTML = `<!-- Component ${name} failed to load -->`
      }
    }
  
    initializeScripts() {
      // Re-initialize any JavaScript that needs to run after components load
      if (window.initializeNavigation) {
        window.initializeNavigation()
      }
      if (window.initializeFAQ) {
        window.initializeFAQ()
      }
    }
  }
  
  // Auto-load components when DOM is ready
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", () => {
      new ComponentLoader()
    })
  } else {
    new ComponentLoader()
  }
  