export function setupScrollTop() {
    const scrollTopButton = document.querySelector(".scroll-top");

    if (!scrollTopButton) return;

    scrollTopButton.addEventListener("click", (event) => {
        event.preventDefault();
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    });
}
