
// MOBILE NAVIGATION
const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");

if (menuBtn && navLinks) {
    menuBtn.addEventListener("click", () => {
        const isOpen = navLinks.classList.toggle("open");

        menuBtn.setAttribute("aria-expanded", String(isOpen));
        menuBtn.setAttribute(
            "aria-label",
            isOpen ? "Close menu" : "Open menu"
        );

        menuBtn.textContent = isOpen ? "✕" : "☰";
    });

    // CLOSE MENU AFTER CLICKING A NAVIGATION LINK
    document.querySelectorAll(".nav-link").forEach(link => {
        link.addEventListener("click", () => {
            navLinks.classList.remove("open");
            menuBtn.setAttribute("aria-expanded", "false");
            menuBtn.setAttribute("aria-label", "Open menu");
            menuBtn.textContent = "☰";
        });
    });

    // CLOSE MENU WHEN ESCAPE IS PRESSED
    document.addEventListener("keydown", event => {
        if (event.key === "Escape") {
            navLinks.classList.remove("open");
            menuBtn.setAttribute("aria-expanded", "false");
            menuBtn.setAttribute("aria-label", "Open menu");
            menuBtn.textContent = "☰";
        }
    });
}

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
        const isActive = link.getAttribute("href") === `#${current}`;

        link.classList.toggle("active", isActive);

        if (isActive) {
            link.setAttribute("aria-current", "location");
        } else {
            link.removeAttribute("aria-current");
        }
    });
}

window.addEventListener("scroll", updateActiveLink, {
    passive: true
});

window.addEventListener("load", updateActiveLink);
updateActiveLink();

// LIGHT / DARK THEME
const themeBtn = document.getElementById("theme-btn");

function updateThemeButton(isLight) {
    if (!themeBtn) return;

    themeBtn.textContent = isLight ? "☀" : "☾";
    themeBtn.setAttribute(
        "aria-label",
        isLight ? "Switch to dark theme" : "Switch to light theme"
    );
    themeBtn.setAttribute("aria-pressed", String(isLight));
}

// RESTORE SAVED THEME
let savedTheme = null;

try {
    savedTheme = localStorage.getItem("portfolio-theme");
} catch (error) {
    savedTheme = null;
}

if (savedTheme === "light") {
    document.body.classList.add("light-mode");
} else if (savedTheme === "dark") {
    document.body.classList.remove("light-mode");
}

updateThemeButton(document.body.classList.contains("light-mode"));

if (themeBtn) {
    themeBtn.addEventListener("click", () => {
        const isLight = document.body.classList.toggle("light-mode");

        updateThemeButton(isLight);

        try {
            localStorage.setItem(
                "portfolio-theme",
                isLight ? "light" : "dark"
            );
        } catch (error) {
            // Theme switching still works if storage is unavailable.
        }
    });
}

// AUTOMATIC COPYRIGHT YEAR
const yearElement = document.getElementById("year");

if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
}
