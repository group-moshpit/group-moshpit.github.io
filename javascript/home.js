document.addEventListener("DOMContentLoaded", function () {
    const heroText = document.querySelector(".hero-content h1");
    
    window.addEventListener("scroll", function () {
        if (window.scrollY > 50) {
            heroText.style.opacity = "1";
            heroText.style.transform = "translateY(0)";
        }
    });

    heroText.style.opacity = "0";
    heroText.style.transform = "translateY(-20px)";
    heroText.style.transition = "opacity 0.8s ease-out, transform 0.8s ease-out";
});

// // for carousel
// document.addEventListener("DOMContentLoaded", function () {
//     const carousel = new bootstrap.Carousel("#promoCarousel", {
//         interval: 4000,
//         pause: "hover",
//         ride: "carousel"
//     });
// });

// for floating bar
document.addEventListener("DOMContentLoaded", function () {
    const accessBar = document.getElementById("accessBar");
    const toggleSidebar = document.getElementById("toggleSidebar");

    // Create a button to show the sidebar again
    const showSidebarBtn = document.createElement("button");
    showSidebarBtn.id = "showSidebar";
    showSidebarBtn.classList.add("hidden"); // Initially hidden

    // Create an image element for the button
    const showSidebarImg = document.createElement("img");
    showSidebarImg.src = "/elements/circle_logo.png"; // Replace with your actual image path
    showSidebarImg.alt = "Open Menu";
    showSidebarImg.style.width = "30px"; // Adjust size as needed
    showSidebarImg.style.height = "auto";

    // Append the image inside the button
    showSidebarBtn.appendChild(showSidebarImg);
    document.body.appendChild(showSidebarBtn);

    let isFloating = false;
    const originalOffset = accessBar.offsetTop; // Get original position

    // Detect if accessBar is out of view
    window.addEventListener("scroll", function () {
        if (window.scrollY > originalOffset + 50) { // +50 adds a small buffer before floating
            if (!isFloating) { // Only apply once
                accessBar.classList.add("floating-bar");
                isFloating = true;
            }
        } else {
            if (isFloating) { // Only remove once
                accessBar.classList.remove("floating-bar");
                isFloating = false;
            }
        }
    });

    // Hide sidebar and show the button to restore it
    toggleSidebar.addEventListener("click", function () {
        accessBar.classList.add("hidden");
        showSidebarBtn.classList.remove("hidden");
    });

    // Show sidebar again when clicking the show button
    showSidebarBtn.addEventListener("click", function () {
        accessBar.classList.remove("hidden");
        showSidebarBtn.classList.add("hidden");
    });

    // Smooth scrolling for navigation links
    document.querySelectorAll(".access-bar a").forEach(link => {
        link.addEventListener("click", function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute("href")).scrollIntoView({
                behavior: "smooth"
            });
        });
    });
});





// for feature section
document.querySelectorAll(".access-bar a").forEach(link => {
    link.addEventListener("click", function (e) {
        const href = this.getAttribute("href");

        // If the link starts with "#" (internal link), enable smooth scrolling
        if (href.startsWith("#")) {
            e.preventDefault();
            const targetElement = document.querySelector(href);

            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: "smooth"
                });
            }
        } else {
            // Allow normal navigation for external links (like transaction.html)
            window.location.href = href;
        }
    });
});






// Carousel functionality with enhanced animations
const carousel = document.querySelector(".carousel-container");
const slides = document.querySelectorAll(".carousel-slide");
const prevButton = document.querySelector(".carousel-nav.prev");
const nextButton = document.querySelector(".carousel-nav.next");
const dotsContainer = document.querySelector(".carousel-dots");

let currentSlide = 0;
let isAnimating = false;
let autoSlideInterval;

// Initialize navigation arrows
prevButton.innerHTML = "&#10094;";
nextButton.innerHTML = "&#10095;";

// Create dot indicators with animation
slides.forEach((_, index) => {
  const dot = document.createElement("div");
  dot.classList.add("carousel-dot");
  if (index === 0) dot.classList.add("active");
  dot.addEventListener("click", () => {
    if (!isAnimating && currentSlide !== index) {
      goToSlide(index);
    }
  });
  dotsContainer.appendChild(dot);
});

function updateSlides(direction = "next") {
  if (isAnimating) return;
  isAnimating = true;

  const currentSlideElement = slides[currentSlide];
  currentSlideElement.classList.add("active");

  // Update dots
  const dots = document.querySelectorAll(".carousel-dot");
  dots.forEach((dot) => dot.classList.remove("active"));
  dots[currentSlide].classList.add("active");

  // Reset any slides that might be in transition
  slides.forEach((slide, index) => {
    if (index !== currentSlide) {
      slide.classList.remove("active");
    }
  });

  // Wait for transition to complete
  setTimeout(() => {
    isAnimating = false;
  }, 800); // Match this with CSS transition duration
}

function nextSlide() {
  if (!isAnimating) {
    currentSlide = (currentSlide + 1) % slides.length;
    updateSlides("next");
  }
}

function prevSlide() {
  if (!isAnimating) {
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    updateSlides("prev");
  }
}

function goToSlide(index) {
  if (!isAnimating && currentSlide !== index) {
    currentSlide = index;
    updateSlides(index > currentSlide ? "next" : "prev");
    resetAutoSlide();
  }
}

function resetAutoSlide() {
  clearInterval(autoSlideInterval);
  autoSlideInterval = setInterval(nextSlide, 6000); // Slightly longer interval for better UX
}

// Event listeners with hover pause
carousel.addEventListener("mouseenter", () => {
  clearInterval(autoSlideInterval);
});

carousel.addEventListener("mouseleave", () => {
  resetAutoSlide();
});

prevButton.addEventListener("click", () => {
  prevSlide();
  resetAutoSlide();
});

nextButton.addEventListener("click", () => {
  nextSlide();
  resetAutoSlide();
});


// Start auto-sliding
resetAutoSlide();
updateSlides(); // Initialize first slide



