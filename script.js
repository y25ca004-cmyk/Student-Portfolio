// Student Portfolio JavaScript

console.log("Portfolio loaded successfully!");


// Add shadow to navigation when scrolling

window.addEventListener("scroll", function () {

    const header = document.querySelector("header");

    if (window.scrollY > 50) {

        header.style.boxShadow =
            "0 3px 15px rgba(0,0,0,0.3)";

    } else {

        header.style.boxShadow = "none";

    }

});
