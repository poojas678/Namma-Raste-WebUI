// Translation system
class TranslationSystem {
    constructor() {
        this.translations = {};
        this.currentLang = localStorage.getItem('selectedLanguage') || 'en';
        this.init();
    }

    async init() {
        await this.loadTranslations();
        this.setLanguage(this.currentLang);
        this.setupLanguageSelector();
        this.initializeWebsite();
    }

    async loadTranslations() {
        try {
            const [enResponse, knResponse] = await Promise.all([
                fetch('resources/en.json'),
                fetch('resources/kn.json')
            ]);

            this.translations.en = await enResponse.json();
            this.translations.kn = await knResponse.json();
        } catch (error) {
            console.error('Error loading translations:', error);
            // Fallback to default English text if JSON files fail to load
            this.translations.en = {};
            this.translations.kn = {};
        }
    }

    setupLanguageSelector() {
        const langLinks = document.querySelectorAll('.lang-link');
        langLinks.forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const selectedLang = link.getAttribute('data-lang');
                this.setLanguage(selectedLang);
            });
        });
    }

    setLanguage(lang) {
        // Add transition effect
        document.body.classList.add('lang-switching');
        
        this.currentLang = lang;
        localStorage.setItem('selectedLanguage', lang);
        
        // Update active language selector
        document.querySelectorAll('.lang-link').forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('data-lang') === lang) {
                link.classList.add('active');
            }
        });

        // Update document language attribute
        document.documentElement.lang = lang === 'kn' ? 'kn' : 'en';

        // Translate all content
        setTimeout(() => {
            this.translatePage();
            document.body.classList.remove('lang-switching');
        }, 100);
    }

    translatePage() {
        const translations = this.translations[this.currentLang] || this.translations['en'];
        
        // Translate simple text elements
        document.querySelectorAll('[data-translate]').forEach(element => {
            const key = element.getAttribute('data-translate');
            const translation = this.getTranslation(translations, key);
            if (translation) {
                element.textContent = translation;
            }
        });

        // Translate elements with key-based translation
        document.querySelectorAll('[data-translate-key]').forEach(element => {
            const key = element.getAttribute('data-translate-key');
            const translation = this.getTranslation(translations, key);
            if (translation) {
                element.textContent = translation;
            }
        });

        // Handle speaker arrays for convening sessions
        document.querySelectorAll('[data-translate-array]').forEach(element => {
            const key = element.getAttribute('data-translate-array');
            const speakers = this.getTranslation(translations, key);
            if (speakers && Array.isArray(speakers)) {
                element.innerHTML = speakers.map(speaker => `<p>${speaker}</p>`).join('');
            }
        });

        // Update page title
        const titleElement = document.querySelector('title[data-translate]');
        if (titleElement) {
            const titleKey = titleElement.getAttribute('data-translate');
            const titleTranslation = this.getTranslation(translations, titleKey);
            if (titleTranslation) {
                titleElement.textContent = titleTranslation;
            }
        }
    }

    getTranslation(translations, key) {
        return key.split('.').reduce((obj, k) => obj && obj[k], translations);
    }
}

// Website functionality
class Website {
    constructor() {
        this.currentSlide = 0;
        this.totalSlides = 0;
        this.zoomLevel = 1;
        this.isDragging = false;
        this.startX = 0;
        this.startY = 0;
        this.translateX = 0;
        this.translateY = 0;
        this.initializeComponents();
    }

    initializeComponents() {
        this.setupMobileMenu();
        this.setupNavigation();
        this.setupCarousel();
        this.setupConveningFunctionality();
        this.setupExhibitionFunctionality();
        this.setupModals();
        this.setupGallery();
        this.setupFlipBookViewer();
        this.setupAnimations();
        this.setupPanelZoom();
    }

    setupMobileMenu() {
        const mobileMenuToggle = document.getElementById('mobile-menu-toggle');
        const navigation = document.getElementById('navigation');
        const mobileMenuOverlay = document.getElementById('mobile-menu-overlay');
        const dropdownToggles = document.querySelectorAll('.dropdown-toggle');

        if (mobileMenuToggle) {
            mobileMenuToggle.addEventListener('click', () => {
                navigation.classList.toggle('active');
                mobileMenuOverlay.classList.toggle('active');
                document.body.classList.toggle('mobile-menu-open');
            });
        }

        if (mobileMenuOverlay) {
            mobileMenuOverlay.addEventListener('click', () => {
                navigation.classList.remove('active');
                mobileMenuOverlay.classList.remove('active');
                document.body.classList.remove('mobile-menu-open');
            });
        }

        dropdownToggles.forEach(toggle => {
            toggle.addEventListener('click', (e) => {
                if (window.innerWidth <= 768) {
                    e.preventDefault();
                    const dropdown = toggle.closest('.dropdown');
                    dropdown.classList.toggle('active');
                }
            });
        });

        window.addEventListener('resize', () => {
            if (window.innerWidth > 768) {
                navigation.classList.remove('active');
                mobileMenuOverlay.classList.remove('active');
                document.body.classList.remove('mobile-menu-open');
                document.querySelectorAll('.dropdown').forEach(dropdown => {
                    dropdown.classList.remove('active');
                });
            }
        });
    }

    setupNavigation() {
        const navLinks = document.querySelectorAll('.nav-link');
        const pages = document.querySelectorAll('.page-content');
        const navigation = document.getElementById('navigation');
        const mobileMenuOverlay = document.getElementById('mobile-menu-overlay');

        // Set initial page
        this.showPage('home');

        // Main navigation
        navLinks.forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();

                // Close mobile menu
                if (window.innerWidth <= 768) {
                    navigation.classList.remove('active');
                    mobileMenuOverlay.classList.remove('active');
                    document.body.classList.remove('mobile-menu-open');
                }

                const targetPage = link.getAttribute('data-page');
                const subPageId = link.getAttribute('data-subpage') || null;
                this.showPage(targetPage, subPageId);
            });
        });

        // Dropdown functionality
        document.querySelectorAll('.dropdown').forEach(dropdown => {
            const menu = dropdown.querySelector('.dropdown-menu');

            if (menu) {
                // Convening dropdown days
                menu.querySelectorAll('a[data-day]').forEach(link => {
                    link.addEventListener('click', (e) => {
                        e.preventDefault();
                        if (window.innerWidth <= 768) {
                            navigation.classList.remove('active');
                            mobileMenuOverlay.classList.remove('active');
                            document.body.classList.remove('mobile-menu-open');
                        }
                        const targetDay = link.getAttribute('data-day');
                        this.showPage('convening', targetDay);
                    });
                });

                // Exhibition dropdown subpages
                menu.querySelectorAll('a[data-subpage]').forEach(link => {
                    link.addEventListener('click', (e) => {
                        e.preventDefault();
                        if (window.innerWidth <= 768) {
                            navigation.classList.remove('active');
                            mobileMenuOverlay.classList.remove('active');
                            document.body.classList.remove('mobile-menu-open');
                        }
                        const targetSubpage = link.getAttribute('data-subpage');
                        this.showPage('exhibition', targetSubpage);
                    });
                });
            }
        });
    }

    showPage(pageId, subPageId = null) {
        // Add loading effect
        document.body.classList.add('loading');

        // Hide all pages
        document.querySelectorAll('.page-content').forEach(page => {
            page.classList.remove('active');
        });

        // Show target main page
        const targetPage = document.getElementById(pageId + '-page');
        if (targetPage) {
            targetPage.classList.add('active');
            targetPage.classList.add('page-transition');
        }

        // Handle special cases
        if (pageId === 'convening') {
            if (subPageId) {
                this.showDayContent(subPageId);
            } else {
                document.querySelectorAll('.day-content').forEach(c => c.classList.remove('active'));
                const defaultDay = document.getElementById('day1-content');
                if (defaultDay) defaultDay.classList.add('active');
            }
        } else if (pageId === 'exhibition') {
            if (subPageId) {
                this.showExhibitionSubpageContent(subPageId);
            } else {
                document.querySelectorAll('.exhibition-subpage-content').forEach(c => c.classList.remove('active'));
                const overview = document.getElementById('exhibition-overview-content');
                if (overview) overview.classList.add('active');
            }
        }

        // Remove loading effect
        setTimeout(() => {
            document.body.classList.remove('loading');
        }, 300);

        // Scroll to top
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    showDayContent(dayId) {
        document.querySelectorAll('.day-content').forEach(content => {
            content.classList.remove('active');
        });
        const targetDayContent = document.getElementById(dayId + '-content');
        if (targetDayContent) {
            targetDayContent.classList.add('active');
        }
    }

    showExhibitionSubpageContent(subPageId) {
        document.querySelectorAll('.exhibition-subpage-content').forEach(content => {
            content.classList.remove('active');
        });
        const targetSubpageContent = document.getElementById(subPageId + '-content');
        if (targetSubpageContent) {
            targetSubpageContent.classList.add('active');
        }
    }

    setupCarousel() {
        const carouselTrack = document.getElementById('carousel-track');
        const slides = document.querySelectorAll('.carousel-slide');
        const indicatorsContainer = document.querySelector('.carousel-indicators');

        if (!carouselTrack || !slides.length) return;

        this.totalSlides = slides.length;

        // Generate indicators dynamically
        indicatorsContainer.innerHTML = "";
        for (let i = 0; i < this.totalSlides; i++) {
            const indicator = document.createElement("span");
            indicator.classList.add("indicator");
            indicator.dataset.slide = i;
            if (i === 0) indicator.classList.add("active");
            indicatorsContainer.appendChild(indicator);

            indicator.addEventListener("click", () => {
                this.currentSlide = i;
                this.updateCarousel();
            });
        }

        // Auto slide
        setInterval(() => {
            this.nextSlide();
        }, 4000);
    }

    nextSlide() {
        this.currentSlide = (this.currentSlide + 1) % this.totalSlides;
        this.updateCarousel();
    }

    updateCarousel() {
        const carouselTrack = document.getElementById('carousel-track');
        const indicators = document.querySelectorAll('.indicator');
        
        if (carouselTrack) {
            const translateX = -this.currentSlide * 100;
            carouselTrack.style.transform = `translateX(${translateX}%)`;
        }

        indicators.forEach((indicator, index) => {
            indicator.classList.remove('active', 'active-green');
            if (index === this.currentSlide) {
                if (index === this.totalSlides - 1) {
                    indicator.classList.add('active-green');
                } else {
                    indicator.classList.add('active');
                }
            }
        });
    }

    setupConveningFunctionality() {
        const agendaItems = document.querySelectorAll(".agenda-item");
        const videoCards = document.querySelectorAll(".video-card");

        agendaItems.forEach(item => {
            item.addEventListener("click", () => {
                agendaItems.forEach(i => i.classList.remove("active"));
                videoCards.forEach(v => v.classList.remove("active"));

                item.classList.add("active");
                const target = item.getAttribute("data-video");
                const targetElement = document.getElementById(target);
                if (targetElement) {
                    targetElement.classList.add("active");
                }
            });
        });

        // Video thumbnail functionality
        document.querySelectorAll(".thumbnail").forEach(thumbnail => {
            thumbnail.addEventListener("click", function () {
                const youtubeURL = this.getAttribute("data-youtube") + "?autoplay=1&rel=0";
                this.outerHTML = `<iframe class="agenda-video" src="${youtubeURL}" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen style="width:100%; height:200px; border-radius:10px;"></iframe>`;
            });
        });
    }

    setupExhibitionFunctionality() {
        // Exhibition panel preview
        document.querySelectorAll('.exhibition-list a').forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();

                // Active link highlight
                link.closest('.exhibition-list').querySelectorAll('a').forEach(l => l.classList.remove('active'));
                link.classList.add('active');

                // Panel container in same exhibition section
                const panelContainer = link.closest('.exhibition-container').querySelector('.panel-preview-area');
                if (!panelContainer) return;

                // Hide all panels
                panelContainer.querySelectorAll('.panel-item, .govt-panel-item, .partners-panel-item').forEach(p => {
                    p.style.display = 'none';
                });

                // Show selected panel
                const panelId = link.getAttribute('data-panel-id');
                const panel = document.getElementById(panelId + '-content');
                if (panel) {
                    panel.style.display = 'block';
                }
            });
        });
    }

    setupPanelZoom() {
        // Add click handlers to all zoomable panels
        document.addEventListener('click', (e) => {
            if (e.target.classList.contains('zoomable-panel')) {
                this.openZoomModal(e.target);
            }
        });

        // Set up zoom modal
        const modal = document.getElementById('image-modal');
        const modalImg = document.getElementById('modal-image');
        const closeBtn = document.querySelector('.close-panel-modal');
        const zoomInBtn = document.getElementById('zoom-in');
        const zoomOutBtn = document.getElementById('zoom-out');
        const resetBtn = document.getElementById('reset-zoom');

        // Close modal
        if (closeBtn) {
            closeBtn.addEventListener('click', () => {
                this.closeZoomModal();
            });
        }

        // Close on background click
        if (modal) {
            modal.addEventListener('click', (e) => {
                if (e.target === modal) {
                    this.closeZoomModal();
                }
            });
        }

        // Zoom controls
        if (zoomInBtn) {
            zoomInBtn.addEventListener('click', () => {
                this.zoomLevel *= 1.2;
                this.updateZoom();
            });
        }

        if (zoomOutBtn) {
            zoomOutBtn.addEventListener('click', () => {
                this.zoomLevel /= 1.2;
                if (this.zoomLevel < 1) this.zoomLevel = 1;
                this.updateZoom();
            });
        }

        if (resetBtn) {
            resetBtn.addEventListener('click', () => {
                this.resetZoom();
            });
        }

        // Mouse wheel zoom
        if (modalImg) {
            modalImg.addEventListener('wheel', (e) => {
                e.preventDefault();
                if (e.deltaY < 0) {
                    this.zoomLevel *= 1.1;
                } else {
                    this.zoomLevel /= 1.1;
                    if (this.zoomLevel < 1) this.zoomLevel = 1;
                }
                this.updateZoom();
            });

            // Dragging functionality
            modalImg.addEventListener('mousedown', (e) => {
                this.isDragging = true;
                this.startX = e.clientX - this.translateX;
                this.startY = e.clientY - this.translateY;
                modalImg.style.cursor = 'grabbing';
            });

            document.addEventListener('mousemove', (e) => {
                if (!this.isDragging) return;
                e.preventDefault();
                this.translateX = e.clientX - this.startX;
                this.translateY = e.clientY - this.startY;
                this.updateZoom();
            });

            document.addEventListener('mouseup', () => {
                this.isDragging = false;
                if (modalImg) {
                    modalImg.style.cursor = 'grab';
                }
            });
        }
    }

    openZoomModal(img) {
        const modal = document.getElementById('image-modal');
        const modalImg = document.getElementById('modal-image');
        
        if (modal && modalImg) {
            const fullSrc = img.getAttribute('data-full-src') || img.src;
            modalImg.src = fullSrc;
            modal.style.display = 'flex';
            this.resetZoom();
            document.body.style.overflow = 'hidden';
        }
    }

    closeZoomModal() {
        const modal = document.getElementById('image-modal');
        if (modal) {
            modal.style.display = 'none';
            document.body.style.overflow = '';
            this.resetZoom();
        }
    }

    updateZoom() {
        const modalImg = document.getElementById('modal-image');
        if (modalImg) {
            modalImg.style.transform = `scale(${this.zoomLevel}) translate(${this.translateX / this.zoomLevel}px, ${this.translateY / this.zoomLevel}px)`;
        }
    }

    resetZoom() {
        this.zoomLevel = 1;
        this.translateX = 0;
        this.translateY = 0;
        this.updateZoom();
    }

    setupModals() {
        // YouTube modal
        this.setupYouTubeModal();
    }

    setupYouTubeModal() {
        window.openYouTubeVideo = (videoUrl) => {
            const modal = document.getElementById('youtube-modal');
            const iframe = document.getElementById('youtube-iframe');

            let videoId = '';
            if (videoUrl.includes('youtu.be/')) {
                videoId = videoUrl.split('youtu.be/')[1].split('?')[0];
            } else if (videoUrl.includes('youtube.com/watch?v=')) {
                videoId = videoUrl.split('v=')[1].split('&')[0];
            }

            const embedUrl = `https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`;
            iframe.src = embedUrl;
            modal.style.display = 'flex';
        }

        window.closeYouTubeModal = () => {
            const modal = document.getElementById('youtube-modal');
            const iframe = document.getElementById('youtube-iframe');
            iframe.src = '';
            modal.style.display = 'none';
        }

        const youtubeModal = document.getElementById('youtube-modal');
        const closeYoutubeModal = document.querySelector('.close-youtube-modal');

        if (closeYoutubeModal) {
            closeYoutubeModal.addEventListener('click', window.closeYouTubeModal);
        }

        if (youtubeModal) {
            youtubeModal.addEventListener('click', (e) => {
                if (e.target === youtubeModal) {
                    window.closeYouTubeModal();
                }
            });
        }
    }

    setupGallery() {
        const popup = document.getElementById("image-popup");
        const popupImage = document.getElementById("popup-image");
        const closePopup = document.querySelector(".close-popup");
        const triggers = document.querySelectorAll(".popup-trigger");

        triggers.forEach(img => {
            img.addEventListener("click", () => {
                popup.style.display = "flex";
                popupImage.src = img.src;
                document.body.style.overflow = 'hidden';
            });
        });

        if (closePopup) {
            closePopup.addEventListener("click", () => {
                popup.style.display = "none";
                document.body.style.overflow = '';
            });
        }

        if (popup) {
            popup.addEventListener("click", (e) => {
                if (e.target === popup) {
                    popup.style.display = "none";
                    document.body.style.overflow = '';
                }
            });
        }
    }

    setupFlipBookViewer() {
        // Global function for opening flip book
        window.openFlipBook = (pdfUrl) => {
            const flipbookModal = document.getElementById('flipbook-modal');
            const flipbookIframe = document.getElementById('flipbook-iframe');

            if (window.innerWidth < 768) {
                // On mobile, open in new tab
                window.open(pdfUrl, "_blank");
            } else {
                // On desktop, show in flip book modal
                flipbookIframe.src = pdfUrl;
                flipbookModal.style.display = 'block';
                document.body.style.overflow = 'hidden';
            }
        }

        window.closeFlipBook = () => {
            const flipbookModal = document.getElementById('flipbook-modal');
            const flipbookIframe = document.getElementById('flipbook-iframe');
            flipbookIframe.src = '';
            flipbookModal.style.display = 'none';
            document.body.style.overflow = '';
        }

        // Set up modal close events
        const flipbookModal = document.getElementById('flipbook-modal');
        const closeFlipbook = document.querySelector('.close-flipbook');

        if (closeFlipbook) {
            closeFlipbook.addEventListener('click', window.closeFlipBook);
        }

        if (flipbookModal) {
            flipbookModal.addEventListener('click', (e) => {
                if (e.target === flipbookModal) {
                    window.closeFlipBook();
                }
            });
        }

        // Handle escape key
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') {
                const flipbookModal = document.getElementById('flipbook-modal');
                if (flipbookModal && flipbookModal.style.display === 'block') {
                    window.closeFlipBook();
                }
            }
        });
    }

    setupAnimations() {
        // Intersection Observer for scroll animations
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                    observer.unobserve(entry.target);
                }
            });
        }, observerOptions);

        // Observe animated elements
        const animatedElements = document.querySelectorAll('.stat-item, .about-content, .exhibition-subpage-content, .resource-item, .partner-logo-item');
        animatedElements.forEach(el => {
            el.style.opacity = '0';
            el.style.transform = 'translateY(30px)';
            el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
            observer.observe(el);
        });

        // Logo click effects
        const logoItems = document.querySelectorAll('.logo-item');
        logoItems.forEach(item => {
            item.addEventListener('click', () => {
                item.style.transform = 'scale(0.95)';
                setTimeout(() => {
                    item.style.transform = 'scale(1)';
                }, 150);
            });
        });
    }
}

// Navigation function for exhibition panels
function navigatePanels(direction, sectionType) {
    let panels = [];
    let activeIndex = -1;
    let listLinks = [];

    if (sectionType === 'moving-bengaluru') {
        panels = Array.from(document.querySelectorAll('#moving-bengaluru-content .panel-item'));
        listLinks = Array.from(document.querySelectorAll('#moving-bengaluru-content .exhibition-list a'));
    } else if (sectionType === 'govt-panel') {
        panels = Array.from(document.querySelectorAll('#govt-panel-content .govt-panel-item'));
        listLinks = Array.from(document.querySelectorAll('#govt-panel-content .exhibition-list a'));
    } else if (sectionType === 'partners-panel') {
        panels = Array.from(document.querySelectorAll('#partners-panel-ex-content .partners-panel-item'));
        listLinks = Array.from(document.querySelectorAll('#partners-panel-ex-content .exhibition-list a'));
    }

    if (panels.length === 0) return;

    // Find currently active panel
    activeIndex = panels.findIndex(panel => panel.style.display === 'block');
    if (activeIndex === -1) activeIndex = 0;

    // Hide current panel and link
    if (panels[activeIndex]) {
        panels[activeIndex].style.display = 'none';
    }
    if (listLinks[activeIndex]) {
        listLinks[activeIndex].classList.remove('active');
    }

    // Calculate new index
    const newIndex = (activeIndex + direction + panels.length) % panels.length;

    // Show new panel and activate link
    if (panels[newIndex]) {
        panels[newIndex].style.display = 'block';
    }
    if (listLinks[newIndex]) {
        listLinks[newIndex].classList.add('active');
        // Scroll the link into view
        listLinks[newIndex].scrollIntoView({
            behavior: 'smooth',
            block: 'nearest'
        });
    }
}

// Global function for slide navigation (backward compatibility)
window.changeSlide = function(direction) {
    // This function is called by the existing HTML onclick handlers
    const activeSlideNav = document.querySelector('.slide-nav.prev-slide, .slide-nav.next-slide');
    if (activeSlideNav) {
        activeSlideNav.click();
    }
}

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    // Initialize translation system
    const translationSystem = new TranslationSystem();
    
    // Initialize website functionality
    const website = new Website();
    
    // Set body opacity for smooth initial load
    document.body.style.opacity = '1';
    document.body.style.transition = 'opacity 0.5s ease';
});

// Keyboard navigation support
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        // Close any open modals
        document.querySelectorAll('.modal').forEach(modal => {
            if (modal.style.display === 'flex' || modal.style.display === 'block') {
                modal.style.display = 'none';
            }
        });
        
        // Close image popup
        const imagePopup = document.getElementById('image-popup');
        if (imagePopup && imagePopup.style.display === 'flex') {
            imagePopup.style.display = 'none';
        }
        
        // Close flip book modal
        if (window.closeFlipBook) {
            window.closeFlipBook();
        }
        
        // Restore body overflow
        document.body.style.overflow = '';
    }
});

// Performance optimization: Debounce resize events
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

window.addEventListener('resize', debounce(() => {
    // Handle responsive adjustments
    const carouselTrack = document.getElementById('carousel-track');
    if (carouselTrack) {
        // CSS handles most responsive adjustments automatically
    }
}, 250));