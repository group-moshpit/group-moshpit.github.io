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






document.addEventListener('DOMContentLoaded', function() {
  // Get DOM elements
  const buyNowBtn = document.getElementById('buyNowBtn');
  const popupOverlay = document.getElementById('popupOverlay');
  const popupCloseBtn = document.getElementById('popupCloseBtn');
  const tabBtns = document.querySelectorAll('.tab-btn');
  const addToCartBtn = document.querySelector('.add-to-cart');
  const confirmBuyBtn = document.querySelector('.confirm-buy');
  
  // Product data
  const product = {
    title: "Pokémon GO Fest 2025: Global Ticket",
    description: "A special one-time-only ticket to Pokémon GO Fest 2025 Global event, providing exclusive access and rewards.",
    price: "₱499.00",
    imageUrl: "https://store.pokemongolive.com/_next/image?url=https%3A%2F%2Fstorage.googleapis.com%2Fplatform-webstore-dev-assets%2Fpgo%2Fsku_assets%2Fweb-boost-box-1223.png&w=256&q=75"
  };

  // Function to disable page scrolling and interaction
  function disablePageInteraction() {
    document.body.style.overflow = 'hidden';
    document.body.style.pointerEvents = 'none';
    popupOverlay.style.pointerEvents = 'auto';
  }

  // Function to enable page scrolling and interaction
  function enablePageInteraction() {
    document.body.style.overflow = 'auto';
    document.body.style.pointerEvents = 'auto';
  }

  // Show popup when Buy Now is clicked
  buyNowBtn.addEventListener('click', function() {
    // Update popup content with product data
    document.querySelector('.popup-title').textContent = product.title;
    document.querySelector('.popup-description').textContent = product.description;
    document.querySelector('.popup-price').textContent = `Price: ${product.price}`;
    
    // Create or update popup image
    let popupImage = document.querySelector('.popup-image');
    if (!popupImage) {
      popupImage = document.createElement('img');
      popupImage.className = 'popup-image';
      document.querySelector('.popup-content').insertBefore(popupImage, document.querySelector('.popup-title'));
    }
    popupImage.src = product.imageUrl;
    popupImage.alt = product.title;
    
    popupOverlay.classList.add('active');
    disablePageInteraction();
  });

  // Close popup when X button is clicked
  popupCloseBtn.addEventListener('click', function() {
    popupOverlay.classList.remove('active');
    enablePageInteraction();
  });

  // Close popup when clicking outside content
  popupOverlay.addEventListener('click', function(e) {
    if (e.target === popupOverlay) {
      popupOverlay.classList.remove('active');
      enablePageInteraction();
    }
  });

  // Tab functionality - disabled when popup is open
  tabBtns.forEach(btn => {
    btn.addEventListener('click', function() {
      if (!popupOverlay.classList.contains('active')) {
        tabBtns.forEach(b => b.classList.remove('active'));
        this.classList.add('active');
      }
    });
  });

  // Add to Cart confirmation
  addToCartBtn.addEventListener('click', function() {
    if (confirm(`Add "${product.title}" to your cart for ${product.price}?`)) {
      alert(`${product.title} has been added to your cart!`);
      popupOverlay.classList.remove('active');
      enablePageInteraction();
    }
  });

  // Buy Now confirmation
  confirmBuyBtn.addEventListener('click', function() {
    if (confirm(`Confirm purchase of "${product.title}" for ${product.price}?`)) {
      alert(`Thank you for purchasing ${product.title}! Your items will be delivered to your account shortly.`);
      popupOverlay.classList.remove('active');
      enablePageInteraction();
    }
  });
});