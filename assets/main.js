document.addEventListener("DOMContentLoaded", () => {
    const header = document.querySelector(".site-header");
    const toggle = document.querySelector("[data-menu-toggle]");
    const backdrop = document.querySelector("[data-backdrop]");
    const menuLinks = document.querySelectorAll("[data-menu-link]");

    const closeMenu = () => {
        header?.classList.remove("is-open");
        toggle?.setAttribute("aria-expanded", "false");
    };

    const toggleMenu = () => {
        const isOpen = header?.classList.toggle("is-open");
        toggle?.setAttribute("aria-expanded", isOpen ? "true" : "false");
    };

    toggle?.addEventListener("click", toggleMenu);
    backdrop?.addEventListener("click", closeMenu);

    menuLinks.forEach((link) => {
        link.addEventListener("click", closeMenu);
    });

    document.addEventListener("keydown", (event) => {
        if (event.key === "Escape") {
            closeMenu();
        }
    });
});
