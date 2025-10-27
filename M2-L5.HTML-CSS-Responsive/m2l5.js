document.addEventListener("DOMContentLoaded", () => {
    const topBar = document.querySelector(".top-bar");
    let lastScrollY = window.scrollY;

    window.addEventListener("scroll", () => {
        if (window.innerWidth <= 768) {
            const currentY = window.scrollY;

            if (currentY > lastScrollY) {
                // Scrolling down → hide top bar
                topBar.style.transform = `translateY(-${topBar.offsetHeight}px)`;
            } else {
                // Scrolling up → show top bar
                topBar.style.transform = "translateY(0)";
            }

            lastScrollY = currentY;
        } else {
            // Desktop: always show
            topBar.style.transform = "translateY(0)";
            lastScrollY = window.scrollY;
        }
    });
});