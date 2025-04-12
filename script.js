
document.addEventListener("DOMContentLoaded", function () {
    let navMenu = document.getElementById("navMenu");
    let menuToggle = document.getElementById("menuToggle");
    let body = document.body;
    let navLinks = document.querySelectorAll(".nav-links a");

    function toggleMenu() {
        navMenu.classList.toggle("active");
        menuToggle.textContent = navMenu.classList.contains("active") ? "✖" : "☰";

        // Disable scrolling when menu is open
        if (navMenu.classList.contains("active")) {
            body.classList.add("menu-open");
        } else {
            body.classList.remove("menu-open");
        }
    }

    navLinks.forEach(link => {
        link.addEventListener("click", function () {
            navMenu.classList.remove("active"); // Hide menu
            menuToggle.textContent = "☰"; // Reset toggle button
            body.classList.remove("menu-open"); // Enable scrolling
        });
    });

    menuToggle.addEventListener("click", toggleMenu);

    // Close menu when screen resizes beyond mobile view
    window.addEventListener("resize", function () {
        if (window.innerWidth > 1024) {
            navMenu.classList.remove("active");
            menuToggle.textContent = "☰";
            body.classList.remove("menu-open");
        }
    });
});



// --------------------------------------------HOME-----------------------------------------------------------------------

document.addEventListener("DOMContentLoaded", function () {
    const observerOptions = {
        threshold: 0.3, // Trigger animation when 30% of the element is visible
    };

    const elementsToObserve = document.querySelectorAll(".left-content, .right-content, .social-icons");

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
            }
        });
    }, observerOptions);

    elementsToObserve.forEach(element => observer.observe(element));
});

document.addEventListener("DOMContentLoaded", function () {
    setTimeout(() => {
        let h3 = document.querySelector("h3");
        if (h3) h3.classList.add("visible");
    }, 500); // Delay h3 appearance

    setTimeout(() => {
        let s2 = document.getElementById("s2");
        if (s2) s2.classList.add("visible");
    }, 1200); // Increased delay for better spacing

    setTimeout(() => {
        let d1 = document.querySelector(".d1");
        if (d1) d1.classList.add("visible");
    }, 1800); // Further delay to ensure spacing
});


function openResume() {
    // Replace 'resume_link' with the actual URL where your resume is hosted
    var resumeUrl = ' ';
    window.open(resumeUrl, '_blank');
}



document.addEventListener("DOMContentLoaded", function () {
    const projectCards = document.querySelectorAll(".project-card");

    function checkScroll() {
        projectCards.forEach((card) => {
            const cardPosition = card.getBoundingClientRect().top;
            const screenPosition = window.innerHeight / 1.2; // Adjust for timing
            if (cardPosition < screenPosition) {
                card.classList.add("show");
            }
        });
    }

    window.addEventListener("scroll", checkScroll);
    checkScroll(); // Run initially in case cards are already in view
});

document.addEventListener("DOMContentLoaded", function () {
    const serviceCards = document.querySelectorAll(".service-card");

    function revealServices() {
        serviceCards.forEach((card) => {
            const cardPosition = card.getBoundingClientRect().top;
            const screenPosition = window.innerHeight / 1.3; // Adjust for better timing

            if (cardPosition < screenPosition) {
                card.classList.add("show");
            }
        });
    }

    window.addEventListener("scroll", revealServices);
    revealServices(); // Run initially in case some cards are already in view
});


document.addEventListener("DOMContentLoaded", function () {
    let button = document.querySelector(".submit-btn");

    button.addEventListener("mouseover", function () {
        button.style.backgroundColor = "white"; // Change background to green on hover
    });

    button.addEventListener("mouseout", function () {
        button.style.backgroundColor = ""; // Reset background color when not hovered
    });
});

document.addEventListener("DOMContentLoaded", function () {
    fetch("https://your-app.onrender.com/api/footer-title") // Use your actual API URL
        .then(response => response.json())
        .then(data => {
            console.log("API Response:", data); // Debugging
            let footerTitle = document.getElementById("footer-title");
            if (footerTitle && data.name) {
                footerTitle.textContent = data.name; // Update the text
            } else {
                console.error("Footer title element not found or data is missing!");
            }
        })
        .catch(error => console.error("Error fetching data:", error));
});



document.getElementById("contactForm").addEventListener("submit", function (event) {
    let name = document.querySelector('input[type="text"]');
    let email = document.querySelector('input[type="email"]');
    let message = document.querySelector('textarea');

    if (name.value === "" || email.value === "" || message.value === "") {
        alert("All fields are required!");
        event.preventDefault(); // Prevent form submission
    } else if (!email.value.includes("@gmail.com")) {
        alert("Please enter a valid email address!");
        event.preventDefault();
    } else {
        alert("Message Sent Successfully!");

        // Clear form fields after successful submission
        name.value = "";
        email.value = "";
        message.value = "";
    }
});

