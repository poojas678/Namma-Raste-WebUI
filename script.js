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
            // Load English translations
            const enResponse = await fetch('resources/en.json');
            this.translations.en = await enResponse.json();

            // Load Kannada translations
            const knResponse = await fetch('resources/kn.json');
            this.translations.kn = await knResponse.json();
        } catch (error) {
            console.error('Failed to load translations:', error);
            // Fallback to default translations if loading fails
            this.translations.en = this.getDefaultEnglishTranslations();
            this.translations.kn = this.getDefaultKannadaTranslations();
        }
    }

    setupLanguageSelector() {
        // Handle both desktop and mobile language selectors
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
        document.body.classList.add('lang-switching');

        this.currentLang = lang;
        localStorage.setItem('selectedLanguage', lang);

        // Update active language selector for both desktop and mobile
        document.querySelectorAll('.lang-link').forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('data-lang') === lang) {
                link.classList.add('active');
            }
        });

        // Update document language attribute
        document.documentElement.lang = lang === 'kn' ? 'kn' : 'en';

        setTimeout(() => {
            this.translatePage();
            document.body.classList.remove('lang-switching');
        }, 100);
    }

    translatePage() {
        const translations = this.translations[this.currentLang] || this.translations['en'];

        // Handle normal text
        document.querySelectorAll('[data-translate]').forEach(element => {
            const key = element.getAttribute('data-translate');
            const translation = this.getTranslation(translations, key);
            if (translation) {
                element.textContent = translation;
            }
        });

        // Handle keys like data-translate-key
        document.querySelectorAll('[data-translate-key]').forEach(element => {
            const key = element.getAttribute('data-translate-key');
            const translation = this.getTranslation(translations, key);
            if (translation) {
                element.textContent = translation;
            }
        });

        // Handle arrays like data-translate-array (for speakers list)
        document.querySelectorAll('[data-translate-array]').forEach(element => {
            const key = element.getAttribute('data-translate-array');
            const translationArray = this.getTranslation(translations, key);
            if (translationArray && Array.isArray(translationArray)) {
                element.innerHTML = translationArray.map(text => `<p>${text}</p>`).join('');
            }
        });
    }

    getTranslation(translations, key) {
        return key.split('.').reduce((obj, k) => obj && obj[k], translations);
    }
}

// ScrollSpy Navigation System - Enhanced for better section detection
class ScrollSpyNavigation {
    constructor() {
        this.sections = [];
        this.navLinks = [];
        this.currentSection = 'home';
        this.currentSubSection = null;
        this.isScrolling = false;
        this.init();
    }

    init() {
        this.setupSections();
        this.setupNavLinks();
        this.setupScrollSpy();
        this.setupSmoothScrolling();
        this.setupMobileMenu();
        this.initializeWebsite();
        this.setupPDFViewer();
        this.setupAnimations();
    }

    setupSections() {
        this.sections = [
            { id: 'home', element: document.getElementById('home') },
            { id: 'about', element: document.getElementById('about') },
            { id: 'convening', element: document.getElementById('convening') },
            { id: 'exhibition', element: document.getElementById('exhibition') },
            { id: 'resources', element: document.getElementById('resources') },
            { id: 'gallery', element: document.getElementById('gallery') },
            { id: 'news', element: document.getElementById('news') },
            { id: 'partners', element: document.getElementById('partners') }
        ].filter(section => section.element);
    }

    setupNavLinks() {
        this.navLinks = document.querySelectorAll('.nav-link');

        this.navLinks.forEach(link => {
            const href = link.getAttribute('href');
            if (href && href.startsWith('#')) {
                link.addEventListener('click', (e) => {
                    e.preventDefault();
                    const sectionId = href.substring(1);
                    this.scrollToSection(sectionId);
                    this.closeMobileMenu();

                    // Special handling for exhibition section
                    if (sectionId === 'exhibition') {
                        setTimeout(() => {
                            this.activateExhibition('overview');
                        }, 500);
                    }
                });
            }
        });

        // Enhanced dropdown items handling
        document.querySelectorAll('.dropdown-item').forEach(item => {
            item.addEventListener('click', (e) => {
                e.preventDefault();
                const section = item.getAttribute('data-section');
                const subsection = item.getAttribute('data-day') || item.getAttribute('data-exhibition');

                if (section && subsection) {
                    this.scrollToSectionWithSubsection(section, subsection);
                } else {
                    const href = item.getAttribute('href');
                    if (href && href.startsWith('#')) {
                        this.scrollToSection(href.substring(1));
                    }
                }
                this.closeMobileMenu();
            });
        });
    }

    scrollToSectionWithSubsection(sectionId, subsectionId) {
        // First scroll to the main section
        this.scrollToSection(sectionId);

        // Then activate the subsection after a brief delay
        setTimeout(() => {
            if (sectionId === 'convening') {
                this.activateConveningDay(subsectionId);
            } else if (sectionId === 'exhibition') {
                this.activateExhibition(subsectionId);
            }
        }, 500);
    }

    activateConveningDay(dayId) {
        // Update day buttons
        document.querySelectorAll('.day-btn').forEach(btn => {
            btn.classList.remove('active');
            if (btn.getAttribute('data-day') === dayId) {
                btn.classList.add('active');
            }
        });

        // Show target day content
        document.querySelectorAll('.day-content').forEach(content => {
            content.classList.remove('active');
        });
        const targetContent = document.getElementById(`convening-${dayId}`);
        if (targetContent) {
            targetContent.classList.add('active');
            this.initializeConveningDay(dayId);
        }

        // Update dropdown active state
        document.querySelectorAll('.dropdown-item').forEach(item => {
            item.classList.remove('active');
            if (item.getAttribute('data-day') === dayId) {
                item.classList.add('active');
            }
        });
    }

    activateExhibition(exhibitionId) {
        // Update exhibition buttons
        document.querySelectorAll('.exhibition-btn').forEach(btn => {
            btn.classList.remove('active');
            if (btn.getAttribute('data-exhibition') === exhibitionId) {
                btn.classList.add('active');
            }
        });

        // Show target exhibition content
        document.querySelectorAll('.exhibition-content').forEach(content => {
            content.classList.remove('active');
        });
        const targetContent = document.getElementById(`exhibition-${exhibitionId}`);
        if (targetContent) {
            targetContent.classList.add('active');
            if (exhibitionId !== 'overview') {
                setTimeout(() => this.initializeExhibitionPanels(exhibitionId), 100);
            }
        }

        // Update dropdown active state
        document.querySelectorAll('.dropdown-item').forEach(item => {
            item.classList.remove('active');
            if (item.getAttribute('data-exhibition') === exhibitionId) {
                item.classList.add('active');
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

    // Enhanced scroll spy with better section detection
    setupScrollSpy() {
        const options = {
            root: null,
            rootMargin: '0px 0px -30% 0px',
            threshold: 0.1
        };

        const observer = new IntersectionObserver((entries) => {
            let mostVisibleEntry = null;
            let maxIntersectionRatio = 0;

            entries.forEach(entry => {
                if (entry.isIntersecting && entry.intersectionRatio > maxIntersectionRatio) {
                    maxIntersectionRatio = entry.intersectionRatio;
                    mostVisibleEntry = entry;
                }
            });

            if (mostVisibleEntry) {
                this.updateActiveNavigation(mostVisibleEntry.target.id);
            }
        }, options);

        this.sections.forEach(section => {
            if (section.element) {
                observer.observe(section.element);
            }
        });

        // Enhanced scroll-to-bottom handling for Partners section
        const mainContent = document.querySelector('.main-content');
        if (mainContent) {
            mainContent.addEventListener('scroll', () => {
                const scrollTop = mainContent.scrollTop;
                const scrollHeight = mainContent.scrollHeight;
                const clientHeight = mainContent.clientHeight;

                // Check if we're near the bottom (within 50px)
                if (scrollTop + clientHeight >= scrollHeight - 50) {
                    this.updateActiveNavigation('partners');
                }
            });
        }
    }

    setupSmoothScrolling() {
        window.addEventListener('popstate', (e) => {
            if (e.state && e.state.section) {
                this.scrollToSection(e.state.section, false);
            }
        });

        const initialSection = window.location.hash ? window.location.hash.substring(1) : 'home';
        history.replaceState({ section: initialSection }, '', `#${initialSection}`);
    }

    scrollToSection(sectionId, updateHistory = true) {
        const section = this.sections.find(s => s.id === sectionId);
        if (!section || !section.element) return;

        this.isScrolling = true;

        section.element.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });

        if (updateHistory) {
            history.pushState({ section: sectionId }, '', `#${sectionId}`);
        }

        this.updateActiveNavigation(sectionId);
        this.isScrolling = false;
    }

    updateActiveNavigation(sectionId) {
        if (this.currentSection === sectionId) return;

        this.currentSection = sectionId;

        // Update nav links
        this.navLinks.forEach(link => {
            link.classList.remove('active');
            const href = link.getAttribute('href');
            if (href === `#${sectionId}`) {
                link.classList.add('active');
            }
        });
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
                this.closeMobileMenu();
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
                this.closeMobileMenu();
                document.querySelectorAll('.dropdown').forEach(dropdown => {
                    dropdown.classList.remove('active');
                });
            }
        });
    }

    closeMobileMenu() {
        const navigation = document.getElementById('navigation');
        const mobileMenuOverlay = document.getElementById('mobile-menu-overlay');

        navigation.classList.remove('active');
        mobileMenuOverlay.classList.remove('active');
        document.body.classList.remove('mobile-menu-open');
    }

    initializeWebsite() {
        this.setupCarousel();
        this.setupConveningFunctionality();
        this.setupExhibitionFunctionality();
        this.setupModals();
        this.setupGallery();
        this.setupPanelZoom();

        const initialSection = window.location.hash ? window.location.hash.substring(1) : 'home';
        setTimeout(() => {
            this.updateActiveNavigation(initialSection);
        }, 100);
    }

    // Enhanced carousel with improved video completion handling
    setupCarousel() {
        const carouselTrack = document.getElementById('carousel-track');
        const slides = document.querySelectorAll('.carousel-slide');
        const indicatorsContainer = document.querySelector('.carousel-indicators');

        if (!carouselTrack || !slides.length) return;

        let currentSlide = 0;
        const totalSlides = slides.length;
        let autoSlideInterval;
        let videoCompletionTimer;

        // Generate indicators dynamically
        indicatorsContainer.innerHTML = "";
        for (let i = 0; i < totalSlides; i++) {
            const indicator = document.createElement("span");
            indicator.classList.add("indicator");
            indicator.dataset.slide = i;
            if (i === 0) indicator.classList.add("active");
            indicatorsContainer.appendChild(indicator);

            indicator.addEventListener("click", () => {
                currentSlide = i;
                updateCarousel();
                resetAutoSlide();
            });
        }

        const updateCarousel = () => {
            const translateX = -currentSlide * 100;
            carouselTrack.style.transform = `translateX(${translateX}%)`;

            document.querySelectorAll('.carousel-indicators .indicator').forEach((indicator, index) => {
                indicator.classList.remove('active', 'active-green');
                if (index === currentSlide) {
                    if (index === totalSlides - 1) {
                        indicator.classList.add('active-green');
                    } else {
                        indicator.classList.add('active');
                    }
                }
            });
        };

        const nextSlide = () => {
            currentSlide = (currentSlide + 1) % totalSlides;
            updateCarousel();
            resetAutoSlide();
        };

        const resetAutoSlide = () => {
            clearInterval(autoSlideInterval);
            clearTimeout(videoCompletionTimer);

            const currentSlideElement = slides[currentSlide];
            const isVideo = currentSlideElement.getAttribute('data-slide-type') === 'video';

            if (isVideo && currentSlide === 0) {
                // For the first video slide, wait for video completion before advancing
                const videoDuration = 68000; // Estimated video duration in milliseconds
                videoCompletionTimer = setTimeout(() => {
                    nextSlide();
                }, videoDuration);
            } else {
                // For image slides, use normal interval
                autoSlideInterval = setInterval(nextSlide, 4000);
            }
        };

        // Start auto slide
        resetAutoSlide();

        // Reload video when returning to first slide
        const iframe = document.getElementById('youtube-video');
        if (iframe) {
            const originalSrc = iframe.src;
            const observer = new MutationObserver(() => {
                if (currentSlide === 0) {
                    // Reload video when returning to first slide
                    iframe.src = originalSrc;
                }
            });
            observer.observe(carouselTrack, { attributes: true, attributeFilter: ['style'] });
        }
    }

    setupConveningFunctionality() {
        // Day navigation buttons
        document.querySelectorAll('.day-btn').forEach(btn => {
            btn.addEventListener('click', () => {
                const targetDay = btn.getAttribute('data-day');
                this.activateConveningDay(targetDay);
            });
        });

        // Initialize default day
        this.initializeConveningDay('day1');

        // Agenda item functionality
        document.querySelectorAll(".agenda-item").forEach(item => {
            item.addEventListener("click", () => {
                const parentDayContent = item.closest('.day-content');
                if (!parentDayContent) return;

                const dayAgendaItems = parentDayContent.querySelectorAll('.agenda-item');
                const dayVideoCards = parentDayContent.querySelectorAll('.video-card');

                dayAgendaItems.forEach(i => i.classList.remove("active"));
                dayVideoCards.forEach(v => v.classList.remove("active"));

                item.classList.add("active");
                const target = item.getAttribute("data-video");
                const targetElement = parentDayContent.querySelector(`#${target}`);
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

    initializeConveningDay(dayId) {
        const dayContent = document.getElementById(`convening-${dayId}`);
        if (!dayContent) return;

        const agendaItems = dayContent.querySelectorAll('.agenda-item');
        const videoCards = dayContent.querySelectorAll('.video-card');

        agendaItems.forEach(item => item.classList.remove('active'));
        videoCards.forEach(card => card.classList.remove('active'));

        if (agendaItems.length > 0 && videoCards.length > 0) {
            agendaItems[0].classList.add('active');
            videoCards[0].classList.add('active');
        }
    }

    setupExhibitionFunctionality() {
        // Exhibition navigation buttons
        document.querySelectorAll('.exhibition-btn').forEach(btn => {
            btn.addEventListener('click', () => {
                const targetExhibition = btn.getAttribute('data-exhibition');
                this.activateExhibition(targetExhibition);
            });
        });

        // Exhibition slideshow
        this.setupExhibitionSlideshow();

        // Panel functionality
        document.querySelectorAll('.exhibition-list a').forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();

                link.closest('.exhibition-list').querySelectorAll('a').forEach(l => l.classList.remove('active'));
                link.classList.add('active');

                const panelContainer = link.closest('.standard-exhibition-container').querySelector('.standard-panel-preview-area');
                if (!panelContainer) return;

                panelContainer.querySelectorAll('.panel-item').forEach(p => {
                    p.style.display = 'none';
                });

                const panelId = link.getAttribute('data-panel-id');
                const panel = document.getElementById(panelId + '-content');
                if (panel) {
                    panel.style.display = 'flex';
                }
            });
        });
    }

    initializeExhibitionPanels(exhibitionType) {
        const content = document.getElementById(`exhibition-${exhibitionType}`);
        if (!content) return;

        const firstLink = content.querySelector('.exhibition-list a');
        if (firstLink) {
            firstLink.click();
        }
    }

    setupExhibitionSlideshow() {
        const track = document.getElementById("exhibition-track");
        const slides = document.querySelectorAll(".exhibition-slide");
        const indicatorsContainer = document.querySelector(".exhibition-indicators");

        if (!track || !slides.length) return;

        let currentIndex = 0;
        const totalSlides = slides.length;

        // Create indicators
        indicatorsContainer.innerHTML = "";
        for (let i = 0; i < totalSlides; i++) {
            const indicator = document.createElement("span");
            indicator.classList.add("indicator");
            if (i === 0) indicator.classList.add("active");
            indicatorsContainer.appendChild(indicator);

            indicator.addEventListener("click", () => {
                currentIndex = i;
                updateSlide();
            });
        }

        const updateSlide = () => {
            const translateX = -currentIndex * 100;
            track.style.transform = `translateX(${translateX}%)`;

            document.querySelectorAll(".exhibition-indicators .indicator").forEach((ind, idx) => {
                ind.classList.toggle("active", idx === currentIndex);
            });
        };

        // Auto slide
        setInterval(() => {
            currentIndex = (currentIndex + 1) % totalSlides;
            updateSlide();
        }, 4000);
    }

    setupPanelZoom() {
        this.zoomLevel = 1;
        this.isDragging = false;
        this.startX = 0;
        this.startY = 0;
        this.translateX = 0;
        this.translateY = 0;

        document.addEventListener('click', (e) => {
            if (e.target.classList.contains('zoomable-panel')) {
                this.openZoomModal(e.target);
            }
        });

        const modal = document.getElementById('image-modal');
        const modalImg = document.getElementById('modal-image');
        const closeBtn = document.querySelector('.close-panel-modal');
        const zoomInBtn = document.getElementById('zoom-in');
        const zoomOutBtn = document.getElementById('zoom-out');
        const resetBtn = document.getElementById('reset-zoom');

        if (closeBtn) {
            closeBtn.addEventListener('click', () => {
                this.closeZoomModal();
            });
        }

        if (modal) {
            modal.addEventListener('click', (e) => {
                if (e.target === modal) {
                    this.closeZoomModal();
                }
            });
        }

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
        // Additional modal functionality if needed
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

    // Enhanced PDF Viewer with better mobile support
    setupPDFViewer() {
        // PDF Viewer functionality
        window.openPDFViewer = (pdfUrl) => {
            const modal = document.getElementById('pdf-viewer-modal');
            const iframe = document.getElementById('pdf-iframe');
            const title = document.getElementById('pdf-title');

            if (modal && iframe) {
                // For mobile devices, try to open PDF in a new tab/window first
                if (window.innerWidth <= 768) {
                    try {
                        // Try to open PDF in new window for better mobile experience
                        const newWindow = window.open(pdfUrl, '_blank');
                        if (newWindow) {
                            return; // If successful, don't show modal
                        }
                    } catch (e) {
                        console.log('Failed to open in new window, using modal');
                    }
                }

                iframe.src = pdfUrl;
                if (title) {
                    const filename = pdfUrl.split('/').pop();
                    title.textContent = filename;
                }
                modal.style.display = 'block';
                document.body.style.overflow = 'hidden';
            }
        };

        window.closePDFViewer = () => {
            const modal = document.getElementById('pdf-viewer-modal');
            const iframe = document.getElementById('pdf-iframe');

            if (iframe) iframe.src = '';
            if (modal) modal.style.display = 'none';
            document.body.style.overflow = '';
        };

        // Close PDF viewer when clicking outside
        const pdfModal = document.getElementById('pdf-viewer-modal');
        if (pdfModal) {
            pdfModal.addEventListener('click', (e) => {
                if (e.target === pdfModal) {
                    window.closePDFViewer();
                }
            });
        }
    }
}

// Navigation function for exhibition panels
function navigatePanels(direction, sectionType) {
    let panels = [];
    let activeIndex = -1;
    let listLinks = [];

    if (sectionType === 'moving-bengaluru') {
        panels = Array.from(document.querySelectorAll('#exhibition-moving .panel-item'));
        listLinks = Array.from(document.querySelectorAll('#exhibition-moving .exhibition-list a'));
    } else if (sectionType === 'govt-panel') {
        panels = Array.from(document.querySelectorAll('#exhibition-govt .panel-item'));
        listLinks = Array.from(document.querySelectorAll('#exhibition-govt .exhibition-list a'));
    } else if (sectionType === 'partners-panel') {
        panels = Array.from(document.querySelectorAll('#exhibition-partners .panel-item'));
        listLinks = Array.from(document.querySelectorAll('#exhibition-partners .exhibition-list a'));
    }

    if (panels.length === 0) return;

    activeIndex = panels.findIndex(panel => panel.style.display === 'flex' || panel.style.display === 'block');
    if (activeIndex === -1) activeIndex = 0;

    if (panels[activeIndex]) {
        panels[activeIndex].style.display = 'none';
    }
    if (listLinks[activeIndex]) {
        listLinks[activeIndex].classList.remove('active');
    }

    const newIndex = (activeIndex + direction + panels.length) % panels.length;

    if (panels[newIndex]) {
        panels[newIndex].style.display = 'flex';
    }
    if (listLinks[newIndex]) {
        listLinks[newIndex].classList.add('active');
        listLinks[newIndex].scrollIntoView({
            behavior: 'smooth',
            block: 'nearest'
        });
    }
}

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    // Initialize Translation System first
    const translationSystem = new TranslationSystem();

    // Initialize ScrollSpy Navigation System
    const scrollSpyNavigation = new ScrollSpyNavigation();

    document.body.style.opacity = '1';
    document.body.style.transition = 'opacity 0.5s ease';
});

// Keyboard navigation support
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        document.querySelectorAll('.modal').forEach(modal => {
            if (modal.style.display === 'flex' || modal.style.display === 'block') {
                modal.style.display = 'none';
            }
        });

        const imagePopup = document.getElementById('image-popup');
        if (imagePopup && imagePopup.style.display === 'flex') {
            imagePopup.style.display = 'none';
        }

        document.body.style.overflow = '';
    }
});

function openFlipBook(pdfPath) {
    document.getElementById("pdfViewer").src = pdfPath;
    document.getElementById("pdfModal").style.display = "block";
}

function closePdfModal() {
    document.getElementById("pdfModal").style.display = "none";
    document.getElementById("pdfViewer").src = "";
}

// Performance optimization
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
}, 250));