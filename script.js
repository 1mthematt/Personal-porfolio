
// MOBILE NAVIGATION
const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");

menuBtn.addEventListener("click", () => {
    const open = navLinks.classList.toggle("open");

    menuBtn.setAttribute("aria-expanded", String(open));
    menuBtn.setAttribute(
        "aria-label",
        open ? "Close menu" : "Open menu"
    );
    menuBtn.textContent = open ? "✕" : "☰";
});

// CLOSE MOBILE MENU AFTER NAVIGATION
document.querySelectorAll(".nav-link").forEach(link => {
    link.addEventListener("click", () => {
        navLinks.classList.remove("open");
        menuBtn.setAttribute("aria-expanded", "false");
        menuBtn.setAttribute("aria-label", "Open menu");
        menuBtn.textContent = "☰";
    });
});

// ACTIVE NAVIGATION LINK
const sections = document.querySelectorAll("main section[id]");
const navItems = document.querySelectorAll(".nav-link");

function updateActiveLink() {
    let current = "home";

    sections.forEach(section => {
        if (window.scrollY >= section.offsetTop - 150) {
            current = section.id;
        }
    });

    navItems.forEach(link => {
        link.classList.toggle(
            "active",
            link.getAttribute("href") === `#${current}`
        );
    });
}

window.addEventListener("scroll", updateActiveLink);
updateActiveLink();

// LIGHT / DARK THEME
const themeBtn = document.getElementById("theme-btn");

themeBtn.addEventListener("click", () => {
    const light = document.body.classList.toggle("light-mode");

    themeBtn.textContent = light ? "☀" : "☾";
    themeBtn.setAttribute(
        "aria-label",
        light ? "Switch to dark theme" : "Switch to light theme"
    );
});

// AUTOMATIC COPYRIGHT YEAR
document.getElementById("year").textContent =
    new Date().getFullYear();
