
"use strict";

// Display the current year in the footer
const footer = document.querySelector("footer p");

if (footer) {
    footer.innerHTML =
        `&copy; ${new Date().getFullYear()} Jhansi. Built with HTML and CSS.`;
}

// Smooth scrolling for navigation links
const navigationLinks = document.querySelectorAll('.nav-links a');

navigationLinks.forEach(function (link) {
    link.addEventListener("click", function (event) {
        const targetId = link.getAttribute("href");
        const targetSection = document.querySelector(targetId);

        if (targetSection) {
            event.preventDefault();
            targetSection.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });
        }
    });
});

// Show a message when the project page is ready
console.log("Welcome to Jhansi's portfolio!");
