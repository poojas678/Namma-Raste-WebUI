// Navigation functionality
document.addEventListener('DOMContentLoaded', function () {

    const agendaItems = document.querySelectorAll(".agenda-item");
    const videoCards = document.querySelectorAll(".video-card");

    // Left menu click → show respective video card
    agendaItems.forEach(item => {
        item.addEventListener("click", () => {
            agendaItems.forEach(i => i.classList.remove("active"));
            videoCards.forEach(v => v.classList.remove("active"));

            item.classList.add("active");
            const target = item.getAttribute("data-video");
            document.getElementById(target).classList.add("active");
        });
    });

    

   // Thumbnail click → replace with iframe video
    document.querySelectorAll(".thumbnail").forEach(thumbnail => {
        thumbnail.addEventListener("click", function () {
            const youtubeURL = this.getAttribute("data-youtube") + "?autoplay=1";
            this.outerHTML = `<iframe class="agenda-video" src="${youtubeURL}" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>`;
        });
    });

    // Mobile menu functionality
    const mobileMenuToggle = document.getElementById('mobile-menu-toggle');
    const navigation = document.getElementById('navigation');
    const mobileMenuOverlay = document.getElementById('mobile-menu-overlay');
    const navLinks = document.querySelectorAll('.nav-link');
    const dropdownToggles = document.querySelectorAll('.dropdown-toggle');

    // Mobile menu toggle
    if (mobileMenuToggle) {
        mobileMenuToggle.addEventListener('click', function () {
            navigation.classList.toggle('active');
            mobileMenuOverlay.classList.toggle('active');
            document.body.classList.toggle('mobile-menu-open');
        });
    }

    // Close mobile menu when overlay is clicked
    if (mobileMenuOverlay) {
        mobileMenuOverlay.addEventListener('click', function () {
            navigation.classList.remove('active');
            mobileMenuOverlay.classList.remove('active');
            document.body.classList.remove('mobile-menu-open');
        });
    }

    // Handle dropdown toggles in mobile
    dropdownToggles.forEach(toggle => {
        toggle.addEventListener('click', function (e) {
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
            targetDayContent.classList.add('active');
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
    const slides = document.querySelectorAll('.carousel-slide');
    const indicatorsContainer = document.querySelector('.carousel-indicators');

    let currentSlide = 0;
    const totalSlides = slides.length;

    // Clear old indicators and generate new ones dynamically
    indicatorsContainer.innerHTML = "";
    for (let i = 0; i < totalSlides; i++) {
        const indicator = document.createElement("span");
        indicator.classList.add("indicator");
        indicator.dataset.slide = i;
        if (i === 0) indicator.classList.add("active"); // first one active
        indicatorsContainer.appendChild(indicator);

        // click event for each indicator
        indicator.addEventListener("click", () => {
            currentSlide = i;
            updateCarousel();
        });
    }

    const indicators = document.querySelectorAll('.indicator');

    function nextSlide() {
        currentSlide = (currentSlide + 1) % totalSlides;
        updateCarousel();
    }

    function updateCarousel() {
        const translateX = -currentSlide * 100; // shift by 100% each
        carouselTrack.style.transform = `translateX(${translateX}%)`;

        indicators.forEach((indicator, index) => {
            indicator.classList.remove('active', 'active-green');
            if (index === currentSlide) {
                if (index === totalSlides - 1) {
                    indicator.classList.add('active-green'); // last one green
                } else {
                    indicator.classList.add('active');
                }
            }
        });
    }

    // Auto slide every 4s
    setInterval(nextSlide, 4000);


    

    const popup = document.getElementById("image-popup");
    const popupImage = document.getElementById("popup-image");
    const closePopup = document.querySelector(".close-popup");
    const triggers = document.querySelectorAll(".popup-trigger");

    triggers.forEach(img => {
        img.addEventListener("click", function () {
            popup.style.display = "flex";
            popupImage.src = this.src;
        });
    });

    closePopup.addEventListener("click", function () {
        popup.style.display = "none";
    });

    popup.addEventListener("click", function (e) {
        if (e.target === popup) {
            popup.style.display = "none";
        }
    });

   // PDF Popup functionality
window.showPopupPDF = function (pdfUrl) {
    const pdfPopup = document.getElementById('pdf-popup');
    const pdfViewer = document.getElementById('pdf-viewer');

    // Detect small screen (mobile/tablet)
    if (window.innerWidth < 768) {
        // Open in new browser tab instead of iframe
        window.open(pdfUrl, "_blank");
    } else {
        // Desktop: show in popup iframe
        pdfViewer.src = pdfUrl;
        pdfPopup.style.display = 'flex';
    }
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


    // YouTube Video Modal functionality
    window.openYouTubeVideo = function (videoUrl) {
        const modal = document.getElementById('youtube-modal');
        const iframe = document.getElementById('youtube-iframe');

        // Extract video ID and create embed URL
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

    window.closeYouTubeModal = function () {
        const modal = document.getElementById('youtube-modal');
        const iframe = document.getElementById('youtube-iframe');
        iframe.src = '';
        modal.style.display = 'none';
    }

    // YouTube modal close functionality
    const youtubeModal = document.getElementById('youtube-modal');
    const closeYoutubeModal = document.querySelector('.close-youtube-modal');

    if (closeYoutubeModal) {
        closeYoutubeModal.addEventListener('click', closeYouTubeModal);
    }

    if (youtubeModal) {
        youtubeModal.addEventListener('click', function (e) {
            if (e.target === youtubeModal) {
                closeYouTubeModal();
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
    window.addEventListener('resize', function () {
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