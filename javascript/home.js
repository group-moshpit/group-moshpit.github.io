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

// for carousel
document.addEventListener("DOMContentLoaded", function () {
    const carousel = new bootstrap.Carousel("#promoCarousel", {
        interval: 4000,
        pause: "hover",
        ride: "carousel"
    });
});

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
    showSidebarImg.src = "https://i.ibb.co/GvnSMwwt/final-1.png"; // Replace with your actual image path
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



