// Navigation functionality
document.addEventListener('DOMContentLoaded', function () {
    // Mobile menu functionality
    const mobileMenuToggle = document.getElementById('mobile-menu-toggle');
    const navigation = document.getElementById('navigation');
    const mobileMenuOverlay = document.getElementById('mobile-menu-overlay');
    const navLinks = document.querySelectorAll('.nav-link');
    const dropdownToggles = document.querySelectorAll('.dropdown-toggle');

    // Mobile menu toggle
    if (mobileMenuToggle) {
        mobileMenuToggle.addEventListener('click', function() {
            navigation.classList.toggle('active');
            mobileMenuOverlay.classList.toggle('active');
            document.body.classList.toggle('mobile-menu-open');
        });
    }

    // Close mobile menu when overlay is clicked
    if (mobileMenuOverlay) {
        mobileMenuOverlay.addEventListener('click', function() {
            navigation.classList.remove('active');
            mobileMenuOverlay.classList.remove('active');
            document.body.classList.remove('mobile-menu-open');
        });
    }

    // Handle dropdown toggles in mobile
    dropdownToggles.forEach(toggle => {
        toggle.addEventListener('click', function(e) {
            if (window.innerWidth <= 768) {
                e.preventDefault();
                const dropdown = this.closest('.dropdown');
                dropdown.classList.toggle('active');
            }
        });
    });

    // Get all navigation links and pages
    const pages = document.querySelectorAll('.page-content');
    const mainContentArea = document.getElementById('main-content');

    // Deactivate all pages and links first
    navLinks.forEach(item => item.classList.remove('active'));
    pages.forEach(page => page.classList.remove('active'));

    // Set initial page
    showPage('home');

    // Navigation bar functionality
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();

            // Close mobile menu when a link is clicked
            if (window.innerWidth <= 768) {
                navigation.classList.remove('active');
                mobileMenuOverlay.classList.remove('active');
                document.body.classList.remove('mobile-menu-open');
            }

            // Extract main and optional sub-page
            const targetPage = this.getAttribute('data-page');
            const subPageId = this.getAttribute('data-subpage') || null;

            showPage(targetPage, subPageId);
        });
    });

    // Show page function
   // Show page function
function showPage(pageId, subPageId = null) {
    // Hide all pages
    document.querySelectorAll('.page-content').forEach(page => {
        page.classList.remove('active');
    });

    // Show target main page
    const targetPage = document.getElementById(pageId + '-page');
    if (targetPage) {
        targetPage.classList.add('active');
    }

    // Handle special cases
    if (pageId === 'convening') {
        if (subPageId) {
            showDayContent(subPageId);
        } else {
            // Show default (Day 1) if no specific day selected
            document.querySelectorAll('.day-content').forEach(c => c.classList.remove('active'));
            const defaultDay = document.getElementById('day1-content');
            if (defaultDay) defaultDay.classList.add('active');
        }
    } 
    else if (pageId === 'exhibition') {
        if (subPageId) {
            showExhibitionSubpageContent(subPageId);
        } else {
            // Show overview by default
            document.querySelectorAll('.exhibition-subpage-content').forEach(c => c.classList.remove('active'));
            const overview = document.getElementById('exhibition-overview-content');
            if (overview) overview.classList.add('active');
        }
    }
}


    // Dropdown functionality
    document.querySelectorAll('.dropdown').forEach(dropdown => {
        const toggle = dropdown.querySelector('.dropdown-toggle');
        const menu = dropdown.querySelector('.dropdown-menu');

        if (menu) {
            // CONVENING dropdown days
            menu.querySelectorAll('a[data-day]').forEach(link => {
                link.addEventListener('click', function (e) {
                    e.preventDefault();
                    
                    // Close mobile menu
                    if (window.innerWidth <= 768) {
                        navigation.classList.remove('active');
                        mobileMenuOverlay.classList.remove('active');
                        document.body.classList.remove('mobile-menu-open');
                    }

                    const targetDay = this.getAttribute('data-day');
                    showPage('convening', targetDay);
                });
            });

            // EXHIBITION dropdown subpages
            menu.querySelectorAll('a[data-subpage]').forEach(link => {
                link.addEventListener('click', function (e) {
                    e.preventDefault();
                    
                    // Close mobile menu
                    if (window.innerWidth <= 768) {
                        navigation.classList.remove('active');
                        mobileMenuOverlay.classList.remove('active');
                        document.body.classList.remove('mobile-menu-open');
                    }

                    const targetSubpage = this.getAttribute('data-subpage');
                    showPage('exhibition', targetSubpage);
                });
            });
        }
    });

   // Show specific day content
function showDayContent(dayId) {
    document.querySelectorAll('.day-content').forEach(content => {
        content.classList.remove('active');
    });
    const targetDayContent = document.getElementById(dayId + '-content');
    if (targetDayContent) {
        targetDayContent.classList.add('active');c
    } else {
        console.warn(`Day content '${dayId}-content' not found.`);
    }
}
   function showExhibitionSubpageContent(subPageId) {
    document.querySelectorAll('.exhibition-subpage-content').forEach(content => {
        content.classList.remove('active');
    });
    const targetSubpageContent = document.getElementById(subPageId + '-content');
    if (targetSubpageContent) {
        targetSubpageContent.classList.add('active');
    } else {
        console.warn(`Exhibition subpage '${subPageId}-content' not found.`);
    }
}
    // Exhibition panel preview functionality
    document.querySelectorAll('.exhibition-list a').forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();

            // Active link highlight
            this.closest('.exhibition-list').querySelectorAll('a').forEach(l => l.classList.remove('active'));
            this.classList.add('active');

            // Panel container in same exhibition section
            const panelContainer = this.closest('.exhibition-container').querySelector('.panel-preview-area');
            if (!panelContainer) return;

            // Hide all panels inside that container
            panelContainer.querySelectorAll('.panel-item, .govt-panel-item, .partners-panel-item').forEach(p => {
                p.style.display = 'none';
            });

            // Show selected panel
            const panelId = this.getAttribute('data-panel-id');
            const panel = document.getElementById(panelId + '-content');
            if (panel) {
                panel.style.display = 'block';
            }
        });
    });

    // Carousel functionality
    const carouselTrack = document.getElementById('carousel-track');
    const indicators = document.querySelectorAll('.indicator');
    let currentSlide = 0;
    const totalSlides = 5;

    function nextSlide() {
        currentSlide = (currentSlide + 1) % totalSlides;
        updateCarousel();
    }

    function updateCarousel() {
        if (!carouselTrack) return;
        const translateX = -currentSlide * 20;
        carouselTrack.style.transform = `translateX(${translateX}%)`;

        indicators.forEach((indicator, index) => {
            indicator.classList.remove('active', 'active-green');
            if (index === currentSlide) {
                if (index === 4) {
                    indicator.classList.add('active-green');
                } else {
                    indicator.classList.add('active');
                }
            }
        });
    }

    indicators.forEach((indicator, index) => {
        indicator.addEventListener('click', function () {
            currentSlide = index;
            updateCarousel();
        });
    });

    if (carouselTrack && indicators.length > 0) {
        setInterval(nextSlide, 4000);
    }

    // Gallery popup functionality
    const galleryGrid = document.getElementById('gallery-grid');
    const imagePopup = document.getElementById('image-popup');
    const popupImage = document.getElementById('popup-image');
    const closePopup = document.querySelector('.close-popup');

    function showPopup(imageSrc) {
        popupImage.src = imageSrc;
        imagePopup.style.display = 'flex';
    }

    function hidePopup() {
        imagePopup.style.display = 'none';
        popupImage.src = '';
    }

    if (galleryGrid) {
        galleryGrid.addEventListener('click', function (e) {
            const clickedImage = e.target.closest('.gallery-image');
            if (clickedImage) {
                const imageSrc = clickedImage.src;
                showPopup(imageSrc);
            }
        });
    }

    if (closePopup) {
        closePopup.addEventListener('click', hidePopup);
    }

    if (imagePopup) {
        imagePopup.addEventListener('click', function (e) {
            if (e.target === imagePopup) {
                hidePopup();
            }
        });
    }

    // PDF Popup functionality
    window.showPopupPDF = function (pdfUrl) {
        const pdfPopup = document.getElementById('pdf-popup');
        const pdfViewer = document.getElementById('pdf-viewer');
        pdfViewer.src = pdfUrl;
        pdfPopup.style.display = 'flex';
    }

    window.closePopupPDF = function () {
        const pdfPopup = document.getElementById('pdf-popup');
        const pdfViewer = document.getElementById('pdf-viewer');
        pdfViewer.src = '';
        pdfPopup.style.display = 'none';
    }

    const pdfPopup = document.getElementById('pdf-popup');
    if (pdfPopup) {
        pdfPopup.addEventListener('click', function (e) {
            if (e.target.id === 'pdf-popup') {
                closePopupPDF();
            }
        });
    }

    // Panel navigation functionality
    document.querySelectorAll('.slide-nav').forEach(button => {
        button.addEventListener('click', function () {
            const direction = this.classList.contains('next-slide') ? 1 : -1;
            const panelPreviewArea = this.closest('.panel-preview-area');
            if (!panelPreviewArea) {
                console.warn("Could not find parent .panel-preview-area for navigation button.");
                return;
            }

            let panels = [];
            if (panelPreviewArea.querySelector('.govt-panel-item')) {
                panels = Array.from(panelPreviewArea.querySelectorAll('.govt-panel-item'));
            } else if (panelPreviewArea.querySelector('.partners-panel-item')) {
                panels = Array.from(panelPreviewArea.querySelectorAll('.partners-panel-item'));
            } else {
                panels = Array.from(panelPreviewArea.querySelectorAll('.panel-item'));
            }

            if (panels.length === 0) {
                console.warn("No panels found in the identified slideshow container.");
                return;
            }

            let currentPanel = null;
            let currentPanelIndex = -1;
            for (let i = 0; i < panels.length; i++) {
                if (panels[i].style.display === 'block') {
                    currentPanel = panels[i];
                    currentPanelIndex = i;
                    break;
                }
            }

            if (currentPanelIndex === -1 && panels.length > 0) {
                currentPanelIndex = 0;
                panels[currentPanelIndex].style.display = 'block';
            }

            if (currentPanel) {
                currentPanel.style.display = 'none';
            }

            let newIndex = (currentPanelIndex + direction + panels.length) % panels.length;

            const newPanel = panels[newIndex];
            if (newPanel) {
                newPanel.style.display = 'block';

                const panelId = newPanel.id.replace('-content', '');
                const relevantList = panelPreviewArea.closest('.exhibition-container').querySelector('.exhibition-list');
                if (relevantList) {
                    relevantList.querySelectorAll('a').forEach(link => link.classList.remove('active'));

                    const activeLink = relevantList.querySelector(`a[data-panel-id="${panelId}"]`);
                    if (activeLink) {
                        activeLink.classList.add('active');
                        activeLink.scrollIntoView({
                            behavior: 'smooth',
                            block: 'nearest',
                            inline: 'center'
                        });
                    }
                }
            }
        });
    });

    // Language selector functionality
    const langLinks = document.querySelectorAll('.lang-link');
    langLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            langLinks.forEach(ll => ll.classList.remove('active'));
            this.classList.add('active');
        });
    });

    // Add loading animation for page transitions
    function addLoadingEffect() {
        if (mainContentArea) {
            mainContentArea.style.opacity = '0.7';
            setTimeout(() => {
                mainContentArea.style.opacity = '1';
            }, 200);
        }
    }

    // Handle external links
    document.querySelectorAll('a[href="#"]').forEach(link => {
        if (!link.hasAttribute('data-page') && !link.hasAttribute('data-subpage')) {
            link.addEventListener('click', function (e) {
                e.preventDefault();
                console.log('External link clicked:', this.textContent, ' - Placeholder action.');
            });
        }
    });

    // Add hover effects to stat boxes
    const statBoxes = document.querySelectorAll('.stat-box');
    statBoxes.forEach(box => {
        box.addEventListener('mouseenter', function () {
            this.style.transform = 'scale(1.05)';
            this.style.transition = 'transform 0.3s ease';
        });

        box.addEventListener('mouseleave', function () {
            this.style.transform = 'scale(1)';
        });
    });

    // Add click effect to logo items
    const logoItems = document.querySelectorAll('.logo-item');
    logoItems.forEach(item => {
        item.addEventListener('click', function () {
            this.style.transform = 'scale(0.95)';
            setTimeout(() => {
                this.style.transform = 'scale(1)';
            }, 150);
        });
    });

    // Initialize page with fade-in effect
    document.body.style.opacity = '1';
    document.body.style.transition = 'opacity 0.5s ease';

    // Handle window resize for mobile menu
    window.addEventListener('resize', function() {
        if (window.innerWidth > 768) {
            // Reset mobile menu state when switching to desktop
            navigation.classList.remove('active');
            mobileMenuOverlay.classList.remove('active');
            document.body.classList.remove('mobile-menu-open');
            
            // Reset dropdown states
            document.querySelectorAll('.dropdown').forEach(dropdown => {
                dropdown.classList.remove('active');
            });
        }
    });
});

// Pop-up Panel (Modal) functionality
const panelImages = document.querySelectorAll('.panel-image');
const modal = document.getElementById('image-modal');
const modalImg = document.getElementById('modal-image');
const closeModalSpan = document.querySelector('.close-panel-modal');

panelImages.forEach(image => {
    image.addEventListener('click', function () {
        const fullSrc = this.dataset.fullSrc;
        modal.style.display = 'block';
        modalImg.src = fullSrc;
    });
});

if (closeModalSpan) {
    closeModalSpan.addEventListener('click', function () {
        modal.style.display = 'none';
    });
}

if (modal) {
    modal.addEventListener('click', function (e) {
        if (e.target === modal) {
            modal.style.display = 'none';
        }
    });
}

// Utility functions
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

// Handle window resize for responsive adjustments
window.addEventListener('resize', function () {
    const carouselTrack = document.getElementById('carousel-track');
    if (carouselTrack) {
        // CSS handles responsive adjustments with percentages
    }
});

// Add intersection observer for animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function (entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe elements for animation
document.addEventListener('DOMContentLoaded', function () {
    const animatedElements = document.querySelectorAll('.stat-item, .about-content, .exhibition-subpage-content');
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
});