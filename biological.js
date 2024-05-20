function scrollToTop() {
    window.scrollTo({
        bottom: 500,
        behavior: "smooth"
    });
}

// Add event listener to the button
document.getElementById("scrollToTopBtn").addEventListener("click", scrollToTop);