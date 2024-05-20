function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}

// Add event listener to the button
document.getElementById("scrollToTopBtn").addEventListener("click", scrollToTop);