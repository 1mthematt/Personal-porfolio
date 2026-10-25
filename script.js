
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap');

/* =========================================
   1. VARIABLES AND RESET
========================================= */

:root {
    --bg: #020817;
    --bg-soft: #06132b;
    --panel: rgba(8, 28, 62, 0.78);
    --panel-hover: rgba(12, 43, 88, 0.92);
    --text: #eaf3ff;
    --muted: #9cb7d9;
    --blue: #1685ff;
    --cyan: #20d4ff;
    --border: rgba(47, 139, 255, 0.24);
    --shadow: 0 15px 40px rgba(0, 76, 255, 0.12);
}

* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}

html {
    scroll-behavior: smooth;
    scroll-padding-top: 90px;
}

body {
    font-family: 'Inter', Arial, sans-serif;
    color: var(--text);
    background:
        radial-gradient(circle at 12% 8%, rgba(22, 133, 255, .12), transparent 32%),
        radial-gradient(circle at 90% 42%, rgba(32, 212, 255, .06), transparent 28%),
        var(--bg);
    line-height: 1.7;
    overflow-x: hidden;
    -webkit-font-smoothing: antialiased;
    transition: background .3s, color .3s;
}

body.light-mode {
    --bg: #edf5ff;
    --bg-soft: #e3efff;
    --panel: rgba(255, 255, 255, .88);
    --panel-hover: #fff;
    --text: #10264a;
    --muted: #526b91;
    --border: rgba(20, 99, 200, .22);
    --shadow: 0 15px 40px rgba(23, 82, 150, .10);

    background:
        radial-gradient(circle at 10% 5%, rgba(22, 133, 255, .08), transparent 32%),
        #edf5ff;
}

a {
    color: inherit;
    text-decoration: none;
}

button {
    font: inherit;
    color: inherit;
    cursor: pointer;
}

ul {
    list-style: none;
}

button:focus-visible,
a:focus-visible {
    outline: 2px solid var(--cyan);
    outline-offset: 4px;
}

/* =========================================
   2. BACKGROUND EFFECTS
========================================= */

.ambient {
    position: fixed;
    z-index: -1;
    width: 350px;
    height: 350px;
    border-radius: 50%;
    background: #006dff;
    opacity: .09;
    filter: blur(100px);
    pointer-events: none;
}

.ambient-one {
    top: 20%;
    left: -180px;
}

.ambient-two {
    right: -180px;
    bottom: 5%;
    background: #00c8ff;
}

/* =========================================
   3. NAVIGATION
========================================= */

.header {
    position: sticky;
    top: 0;
    z-index: 1000;
    background: rgba(2, 8, 23, .84);
    backdrop-filter: blur(20px);
    -webkit-backdrop-filter: blur(20px);
    border-bottom: 1px solid var(--border);
    box-shadow: 0 8px 30px rgba(0, 0, 0, .08);
}

.light-mode .header {
    background: rgba(237, 245, 255, .90);
}

.navbar {
    width: min(1200px, 90%);
    min-height: 76px;
    margin: auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 24px;
}

.brand {
    display: flex;
    align-items: center;
    gap: 10px;
    white-space: nowrap;
    font-weight: 700;
    font-size: 14px;
    letter-spacing: -.3px;
}

.brand span {
    font-size: 26px;
    font-weight: 900;
    letter-spacing: -2px;
    color: var(--cyan);
    text-shadow: 0 0 22px rgba(32, 212, 255, .2);
}

.nav-links {
    display: flex;
    align-items: center;
    gap: 25px;
}

.nav-link {
    position: relative;
    padding: 10px 0;
    font-size: 12px;
    font-weight: 600;
    color: var(--muted);
    transition: color .25s ease;
}

.nav-link::after {
    content: "";
    position: absolute;
    left: 0;
    bottom: 3px;
    width: 0;
    height: 2px;
    border-radius: 5px;
    background: var(--cyan);
    transition: width .25s ease;
}

.nav-link:hover,
.nav-link.active {
    color: var(--cyan);
}

.nav-link:hover::after,
.nav-link.active::after {
    width: 100%;
}

.theme-btn,
.menu-btn {
    width: 38px;
    height: 38px;
    flex-shrink: 0;
    border: 1px solid var(--border);
    border-radius: 12px;
    background: var(--panel);
    font-size: 18px;
    transition: background .25s, border-color .25s;
}

.theme-btn:hover,
.menu-btn:hover {
    border-color: var(--cyan);
}

.menu-btn {
    display: none;
}

/* =========================================
   4. GENERAL SECTIONS
========================================= */

.section {
    width: min(1200px, 90%);
    margin: auto;
    padding: 100px 0;
}

.content-section {
    padding-top: 85px;
    padding-bottom: 85px;
}

.section-heading {
    text-align: center;
    margin-bottom: 46px;
}

.eyebrow,
.section-label {
    color: var(--cyan);
    font-size: 10px;
    letter-spacing: 2px;
    font-weight: 800;
}

.section-heading h2,
.contact-panel h2 {
    font-size: clamp(29px, 4vw, 42px);
    letter-spacing: -1.5px;
    line-height: 1.25;
    margin: 8px 0 10px;
}

.section-heading h2 span,
.contact-panel h2 span {
    background: linear-gradient(100deg, #348aff, #20dcff);
    background-clip: text;
    -webkit-background-clip: text;
    color: transparent;
}

.section-heading > p,
.muted {
    color: var(--muted);
    font-size: 12px;
    line-height: 1.8;
}

/* =========================================
   5. HERO SECTION
========================================= */

.hero {
    min-height: 610px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: center;
    gap: 50px;
    padding-top: 90px;
    padding-bottom: 90px;
}

.hero-content {
    position: relative;
    z-index: 2;
}

.eyebrow {
    display: inline-flex;
    align-items: center;
    gap: 10px;
    background: rgba(0, 125, 255, .12);
    border: 1px solid var(--border);
    border-radius: 30px;
    padding: 8px 13px;
    box-shadow: 0 0 24px rgba(22, 133, 255, .06);
}

.eyebrow i {
    width: 7px;
    height: 7px;
    background: var(--cyan);
    border-radius: 50%;
    box-shadow: 0 0 12px var(--cyan);
}

.intro {
    margin-top: 23px;
    font-size: clamp(36px, 5vw, 56px);
    font-weight: 800;
    line-height: 1.15;
}

.hero h1 {
    margin-top: 8px;
    font-size: clamp(38px, 5.1vw, 63px);
    line-height: 1.12;
    letter-spacing: -3px;
    font-weight: 900;
    background: linear-gradient(100deg, #fff 0%, #328cff 48%, #20dcff 100%);
    background-clip: text;
    -webkit-background-clip: text;
    color: transparent;
    filter: drop-shadow(0 5px 20px rgba(22, 133, 255, .08));
}

.hero h2 {
    margin-top: 18px;
    font-size: clamp(16px, 2vw, 21px);
    line-height: 1.5;
}

.hero h2 span {
    color: #55b8ff;
}

.hero-text {
    color: var(--muted);
    font-size: 14px;
    line-height: 1.9;
    max-width: 470px;
    margin: 16px 0 25px;
}

.light-mode .hero h1 {
    background: linear-gradient(100deg, #123a70 0%, #1768cf 50%, #0086b8 100%);
    background-clip: text;
    -webkit-background-clip: text;
    color: transparent;
}

.light-mode .hero h2 span {
    color: #1768cf;
}

.hero-actions {
    display: flex;
    flex-wrap: wrap;
    gap: 12px;
}

/* BUTTONS */

.btn {
    display: inline-flex;
    justify-content: center;
    align-items: center;
    gap: 14px;
    min-height: 44px;
    padding: 12px 20px;
    border-radius: 30px;
    font-size: 12px;
    font-weight: 700;
    border: 1px solid var(--border);
    transition: transform .25s ease, box-shadow .25s ease, background .25s ease, border-color .25s ease;
}

.btn:hover {
    transform: translateY(-3px);
}

.btn-primary {
    color: white;
    border-color: transparent;
    background: linear-gradient(110deg, #0865ff, #0aaeff);
    box-shadow: 0 8px 24px rgba(0, 105, 255, .22);
}

.btn-primary:hover {
    box-shadow: 0 8px 30px rgba(0, 170, 255, .4);
}

.btn-outline {
    background: var(--panel);
    color: var(--text);
    border-color: rgba(100, 170, 255, .28);
}

.btn-outline:hover {
    border-color: var(--cyan);
}

/* SOCIAL LINKS */

.social-links {
    display: flex;
    gap: 12px;
    margin-top: 25px;
}

.social-links a {
    width: 34px;
    height: 34px;
    display: grid;
    place-items: center;
    border: 1px solid var(--border);
    background: var(--panel);
    border-radius: 10px;
    font-size: 11px;
    font-weight: 800;
    color: #73baff;
    transition: color .25s, background .25s, transform .25s;
}

.social-links a:hover {
    color: white;
    background: var(--blue);
    transform: translateY(-4px);
}

/* =========================================
   6. 3D CODE ART
========================================= */

.hero-visual {
    min-height: 430px;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    perspective: 1000px;
}

.hero-visual::before {
    content: "";
    position: absolute;
    width: 300px;
    height: 300px;
    border-radius: 50%;
    background: #006aff;
    filter: blur(95px);
    opacity: .28;
}

.orbit {
    position: absolute;
    border: 1px solid rgba(31, 145, 255, .55);
    border-radius: 50%;
    transform: rotateX(62deg) rotateZ(-25deg);
}

.orbit-one {
    width: 390px;
    height: 270px;
}

.orbit-two {
    width: 330px;
    height: 390px;
    transform: rotateY(65deg) rotateZ(25deg);
    border-color: rgba(0, 215, 255, .24);
}

.code-window {
    z-index: 2;
    width: min(100%, 430px);
    position: relative;
    padding: 0 0 24px;
    border: 1px solid rgba(64, 164, 255, .55);
    border-radius: 16px;
    background: linear-gradient(145deg, #102b55, #041023 75%);
    box-shadow: 0 25px 50px rgba(0, 0, 0, .4), 0 0 35px rgba(0, 109, 255, .22), inset 0 1px rgba(255, 255, 255, .1);
    transform: rotateY(-8deg) rotateX(4deg);
    animation: float 6s ease-in-out infinite;
}

.window-top,
.mock-bar {
    height: 40px;
    display: flex;
    align-items: center;
    gap: 6px;
    padding: 0 14px;
    border-bottom: 1px solid rgba(100, 160, 255, .15);
}

.window-top > span,
.mock-bar i {
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: #ff657a;
}

.window-top > span:nth-child(2),
.mock-bar i:nth-child(2) {
    background: #ffce5b;
}

.window-top > span:nth-child(3),
.mock-bar i:nth-child(3) {
    background: #44e3a3;
}

.window-top small {
    margin-left: auto;
    color: #8eafd9;
    font-size: 10px;
}

.code-window pre {
    padding: 25px 20px 0;
    overflow-x: auto;
    font: 12px/2 'Courier New', monospace;
    color: #b9d4ff;
}

.pink { color: #ff7ac6; }
.green { color: #79edc0; }
.blue { color: #57b7ff; }
.purple { color: #c2a1ff; }
.yellow { color: #ffe27a; }

.floating-tag {
    position: absolute;
    z-index: 3;
    background: rgba(4, 24, 54, .92);
    border: 1px solid rgba(30, 165, 255, .55);
    border-radius: 9px;
    color: #91d9ff;
    font-size: 9px;
    letter-spacing: 1px;
    padding: 10px 13px;
    box-shadow: 0 8px 25px rgba(0, 0, 0, .2);
}

.tag-top {
    top: 45px;
    right: 0;
    transform: rotate(5deg);
}

.tag-bottom {
    bottom: 60px;
    left: 0;
    transform: rotate(-5deg);
}

.floating-shape {
    position: absolute;
    width: 43px;
    height: 43px;
    border-radius: 12px;
    background: linear-gradient(135deg, #1bbcff, #0639c7 70%);
    box-shadow: 0 0 30px rgba(0, 114, 255, .4);
    transform: rotate(35deg) skew(-7deg);
}

.shape-one {
    top: 40px;
    left: 45px;
}

.shape-two {
    bottom: 35px;
    right: 35px;
    width: 28px;
    height: 28px;
}

.hero-caption {
    position: absolute;
    bottom: 0;
    right: 8px;
    display: flex;
    align-items: center;
    gap: 10px;
    font-size: 10px;
    letter-spacing: 2px;
    color: var(--muted);
    line-height: 1.7;
}

.hero-caption b {
    color: var(--cyan);
}

.caption-line {
    width: 25px;
    height: 1px;
    background: var(--cyan);
}

@keyframes float {
    0%, 100% {
        transform: rotateY(-8deg) rotateX(4deg) translateY(0);
    }
    50% {
        transform: rotateY(-5deg) rotateX(2deg) translateY(-10px);
    }
}

/* =========================================
   7. TECHNOLOGY TICKER
========================================= */

.ticker {
    overflow: hidden;
    white-space: nowrap;
    padding: 16px 0;
    border-top: 1px solid var(--border);
    border-bottom: 1px solid var(--border);
    background: rgba(7, 25, 54, .65);
    color: #b2c9e8;
    font-size: 10px;
    font-weight: 700;
    letter-spacing: 2px;
}

.ticker div {
    width: max-content;
    animation: ticker-scroll 30s linear infinite;
}

.ticker span {
    color: var(--cyan);
    padding: 0 30px;
}

.light-mode .ticker {
    background: rgba(220, 235, 255, .65);
    color: #355477;
}

@keyframes ticker-scroll {
    to {
        transform: translateX(-50%);
    }
}

/* =========================================
   8. GLASS CARDS
========================================= */

.glass-card {
    border: 1px solid rgba(80, 150, 255, .19);
    background: linear-gradient(145deg, var(--panel), rgba(3, 14, 33, .75));
    border-radius: 16px;
    box-shadow: 0 12px 35px rgba(0, 0, 0, .08), inset 0 1px 0 rgba(255, 255, 255, .025);
    transition: border-color .3s, transform .3s, background .3s, box-shadow .3s;
}

.glass-card:hover {
    border-color: rgba(32, 180, 255, .48);
    box-shadow: 0 18px 40px rgba(0, 70, 180, .12), 0 0 20px rgba(32, 180, 255, .035);
}

.light-mode .glass-card {
    background: rgba(255, 255, 255, .82);
    box-shadow: 0 12px 35px rgba(30, 75, 130, .07);
}

.light-mode .glass-card:hover {
    background: #fff;
    box-shadow: 0 18px 40px rgba(30, 75, 130, .12);
}

/* =========================================
   9. ABOUT SECTION
========================================= */

.about-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 22px;
}

.about-card {
    padding: 30px;
    line-height: 1.85;
}

.card-icon,
.mini-icon {
    display: grid;
    place-items: center;
    background: linear-gradient(145deg, #116fff, #06265e);
    color: #b8f3ff;
    border: 1px solid rgba(66, 174, 255, .35);
    box-shadow: 0 7px 20px rgba(0, 90, 255, .2);
}

.card-icon {
    width: 43px;
    height: 43px;
    border-radius: 13px;
    font-size: 21px;
}

.about-card h3,
.goal-card h3 {
    font-size: 19px;
    margin: 18px 0 12px;
}

.about-card p,
.goal-card p {
    color: var(--muted);
    font-size: 12px;
    line-height: 1.9;
    margin-bottom: 13px;
}

.text-link {
    display: inline-block;
    color: var(--cyan);
    font-size: 11px;
    font-weight: 700;
    margin-top: 8px;
    transition: color .2s;
}

.text-link:hover {
    color: white;
}

.light-mode .text-link:hover {
    color: #1768cf;
}

.info-card {
    padding: 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 14px;
}

.info-row {
    display: flex;
    align-items: center;
    gap: 13px;
}

.mini-icon {
    width: 42px;
    height: 42px;
    flex-shrink: 0;
    border-radius: 12px;
    font-size: 18px;
}

.info-row small {
    display: block;
    color: var(--muted);
    font-size: 9px;
    letter-spacing: 1px;
}

.info-row p {
    font-size: 12px;
    font-weight: 600;
    overflow-wrap: anywhere;
}

/* =========================================
   10. SKILLS SECTION
========================================= */

.skills-grid {
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: 15px;
}

.skill-card {
    min-height: 88px;
    padding: 18px;
    display: flex;
    align-items: center;
    gap: 13px;
}

.skill-card:hover,
.project-card:hover,
.goal-card:hover {
    transform: translateY(-5px);
    background: var(--panel-hover);
}

.skill-symbol {
    width: 44px;
    height: 44px;
    display: grid;
    place-items: center;
    flex-shrink: 0;
    border-radius: 12px;
    font-size: 17px;
    font-weight: 900;
    background: linear-gradient(145deg, #0c56bb, #071b42);
    border: 1px solid var(--border);
    color: #a6e5ff;
    transition: transform .25s ease;
}

.skill-card:hover .skill-symbol {
    transform: rotate(-5deg) scale(1.05);
}

.html-symbol { color: #ff956d; }
.css-symbol { color: #61baff; }
.js-symbol { color: #ffe27a; }
.java-symbol { color: #ff927d; }
.cpp-symbol { color: #8bbaff; }
.git-symbol { color: #ff9d9d; }

.skill-card h3 {
    font-size: 12px;
}

.skill-card p {
    font-size: 10px;
    color: var(--muted);
}

.skill-status {
    margin-left: auto;
    align-self: flex-start;
    color: #6ee7b7;
    background: rgba(52, 211, 153, .08);
    border-radius: 20px;
    padding: 4px 7px;
    font-size: 8px;
    letter-spacing: .2px;
    white-space: nowrap;
}

/* =========================================
   11. PROJECTS SECTION
========================================= */

.projects-grid {
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: 20px;
}

.project-card {
    display: flex;
    flex-direction: column;
    overflow: hidden;
}

.project-art {
    height: 190px;
    position: relative;
    display: grid;
    place-items: center;
    overflow: hidden;
    background: radial-gradient(ellipse at 50% 100%, rgba(0, 121, 255, .32), transparent 68%), #07152e;
    border-bottom: 1px solid var(--border);
}

.project-art::before,
.project-art::after {
    content: "";
    position: absolute;
    border: 1px solid rgba(31, 142, 255, .17);
    transform: rotate(35deg);
}

.project-art::before {
    width: 150px;
    height: 150px;
    left: -70px;
    top: -70px;
}

.project-art::after {
    width: 110px;
    height: 110px;
    right: -40px;
    bottom: -55px;
}

.mock-browser {
    width: 70%;
    background: #0b2854;
    border: 1px solid #197bff;
    border-radius: 7px;
    overflow: hidden;
    transform: perspective(500px) rotateY(-7deg) rotateX(3deg);
    box-shadow: 0 10px 35px rgba(0, 100, 255, .25);
}

.mock-bar {
    height: 18px;
    gap: 3px;
    padding: 0 7px;
}

.mock-bar i {
    width: 4px;
    height: 4px;
}

.mock-content {
    min-height: 100px;
    position: relative;
    padding: 15px;
    background: linear-gradient(120deg, #0b2854, #061126);
}

.mock-content span,
.landing-mock > span {
    color: #51caff;
    font-size: 6px;
    letter-spacing: 1px;
}

.mock-content b,
.landing-mock b {
    display: block;
    font-size: 15px;
    line-height: 1.2;
    margin-top: 7px;
}

.mock-button {
    width: 45px;
    height: 10px;
    margin-top: 9px;
    border-radius: 8px;
    background: linear-gradient(90deg, #0876ff, #1bcaff);
}

.mock-circle {
    position: absolute;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    right: 15px;
    top: 25px;
    background: linear-gradient(135deg, #34d4ff, #1750ff);
    box-shadow: 0 0 20px rgba(0, 137, 255, .45);
}

.terminal {
    width: 78%;
    padding-bottom: 13px;
    border: 1px solid #235da1;
    border-radius: 7px;
    background: #050e20;
    box-shadow: 0 10px 35px rgba(0, 0, 0, .3);
    transform: perspective(500px) rotateY(5deg);
}

.terminal p {
    font: 8px/2 'Courier New', monospace;
    padding: 0 12px;
    color: #75d7bd;
}

.terminal p span {
    color: #53739d;
    margin-right: 8px;
}

.landing-mock {
    width: 70%;
    min-height: 120px;
    padding: 15px;
    border: 1px solid #247bff;
    border-radius: 7px;
    background: linear-gradient(130deg, #103c84, #06132d);
    box-shadow: 0 10px 35px rgba(0, 80, 255, .25);
    transform: perspective(500px) rotateY(-5deg);
}

.landing-mock b {
    font-size: 17px;
}

.landing-blocks {
    display: flex;
    gap: 5px;
    margin-top: 10px;
}

.landing-blocks i {
    height: 18px;
    flex: 1;
    border: 1px solid #2568bb;
    border-radius: 3px;
    background: rgba(36, 137, 255, .25);
}

.project-number {
    position: absolute;
    top: 12px;
    left: 12px;
    z-index: 2;
    color: #91caff;
    font-size: 8px;
    letter-spacing: 1px;
}

.project-info {
    padding: 21px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    flex: 1;
    line-height: 1.85;
}

.project-type {
    font-size: 9px;
    color: var(--cyan);
    letter-spacing: 1.3px;
}

.project-info h3 {
    font-size: 16px;
    margin: 7px 0;
}

.project-info > p {
    color: var(--muted);
    font-size: 11px;
    line-height: 1.9;
}

.tags {
    display: flex;
    flex-wrap: wrap;
    gap: 6px;
    margin: 15px 0;
}

.tags span {
    color: #7bcaff;
    background: rgba(0, 115, 255, .13);
    border: 1px solid rgba(0, 130, 255, .18);
    border-radius: 20px;
    padding: 4px 9px;
    font-size: 9px;
    transition: color .2s, border-color .2s, background .2s;
}

.tags span:hover {
    color: #eaf7ff;
    border-color: rgba(32, 180, 255, .45);
    background: rgba(0, 115, 255, .2);
}

.project-info .text-link {
    margin-top: auto;
    padding-top: 12px;
}

.project-note {
    color: var(--muted);
    font-size: 11px;
    text-align: center;
    margin-top: 24px;
}

/* =========================================
   12. EDUCATION AND GOALS
========================================= */

.education-card {
    padding: 25px;
    display: flex;
    align-items: center;
    gap: 20px;
    border-radius: 18px;
}

.education-icon {
    width: 60px;
    height: 60px;
    display: grid;
    place-items: center;
    flex-shrink: 0;
    border-radius: 15px;
    background: linear-gradient(145deg, #116fff, #071d4b);
    border: 1px solid var(--border);
    font-size: 28px;
    color: #c5f5ff;
}

.education-card h3 {
    font-size: 15px;
    margin: 7px 0 3px;
}

.education-card p {
    color: var(--muted);
    font-size: 11px;
    margin-top: 5px;
}

.education-badge {
    margin-left: auto;
    padding: 6px 10px;
    border: 1px solid rgba(52, 211, 153, .3);
    border-radius: 20px;
    background: rgba(52, 211, 153, .08);
    color: #6ee7b7;
    font-size: 8px;
    white-space: nowrap;
}

.goal-grid {
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: 15px;
    margin-top: 20px;
}

.goal-card {
    min-height: 170px;
    padding: 22px;
}

.goal-card h3 {
    font-size: 17px;
}

.goal-number {
    color: var(--cyan);
    font-size: 12px;
    font-weight: 800;
    letter-spacing: 1px;
}

/* =========================================
   13. CONTACT SECTION
========================================= */

.contact-panel {
    position: relative;
    overflow: hidden;
    padding: 55px 35px;
    text-align: center;
    border: 1px solid rgba(48, 151, 255, .4);
    border-radius: 24px;
    background: radial-gradient(ellipse at 50% 110%, rgba(0, 117, 255, .20), transparent 65%), linear-gradient(145deg, var(--panel), var(--bg-soft));
    box-shadow: 0 24px 70px rgba(0, 68, 200, .12);
}

.contact-panel h2 {
    margin-top: 15px;
}

.contact-panel > p {
    max-width: 500px;
    margin: 15px auto 25px;
    color: var(--muted);
    font-size: 12px;
    line-height: 1.9;
}

.contact-decoration {
    position: absolute;
    right: 25px;
    bottom: -30px;
    font-size: 100px;
    font-weight: 900;
    color: rgba(29, 131, 255, .08);
    pointer-events: none;
}

.contact-phone {
    margin-top: 18px !important;
}

.contact-phone a {
    color: var(--cyan);
    font-weight: 600;
}

.contact-phone a:hover {
    text-decoration: underline;
}

.light-mode .contact-panel {
    background: radial-gradient(ellipse at 50% 110%, rgba(0, 117, 255, .10), transparent 65%), rgba(255, 255, 255, .9);
}

/* =========================================
   14. FOOTER
========================================= */

.footer {
    width: min(1200px, 90%);
    margin: auto;
    padding: 32px 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 20px;
    flex-wrap: wrap;
    border-top: 1px solid var(--border);
}

.footer p {
    color: var(--muted);
    font-size: 10px;
}

.back-top {
    color: var(--cyan);
    font-size: 10px;
    font-weight: 700;
    transition: transform .2s;
}

.back-top:hover {
    transform: translateY(-2px);
}

/* =========================================
   15. TABLET RESPONSIVE
========================================= */

@media (max-width: 900px) {
    .navbar {
        width: 92%;
        gap: 14px;
    }

    .nav-links {
        gap: 13px;
    }

    .nav-link {
        font-size: 10px;
    }

    .hero {
        gap: 28px;
    }

    .projects-grid {
        grid-template-columns: repeat(2, minmax(0, 1fr));
        gap: 16px;
    }

    .project-info {
        padding: 18px;
    }

    .skills-grid {
        grid-template-columns: repeat(2, minmax(0, 1fr));
    }
}

/* =========================================
   16. MOBILE RESPONSIVE
========================================= */

@media (max-width: 650px) {
    html {
        scroll-padding-top: 75px;
    }

    .navbar {
        min-height: 65px;
        flex-wrap: wrap;
    }

    .brand {
        font-size: 12px;
    }

    .brand span {
        font-size: 23px;
    }

    .menu-btn {
        display: block;
        margin-left: auto;
    }

    .nav-links {
        display: none;
        width: 100%;
        order: 4;
        flex-direction: column;
        align-items: stretch;
        gap: 0;
        padding: 5px 0 14px;
    }

    .nav-links.open {
        display: flex;
    }

    .nav-link {
        display: block;
        padding: 10px 5px;
        font-size: 12px;
    }

    .nav-link::after {
        display: none;
    }

    .theme-btn {
        width: 35px;
        height: 35px;
    }

    .section {
        width: 90%;
        padding-top: 65px;
        padding-bottom: 65px;
    }

    .content-section {
        padding-top: 65px;
        padding-bottom: 65px;
    }

    .hero {
        min-height: auto;
        grid-template-columns: 1fr;
        padding-top: 55px;
        padding-bottom: 55px;
        gap: 10px;
    }

    .hero-content {
        text-align: center;
    }

    .hero h1 {
        letter-spacing: -2px;
    }

    .hero-text {
        font-size: 13px;
        margin-left: auto;
        margin-right: auto;
    }

    .hero-actions,
    .social-links {
        justify-content: center;
    }

    .hero-visual {
        min-height: 340px;
        margin-top: 10px;
    }

    .code-window {
        width: 90%;
    }

    .code-window pre {
        font-size: 10px;
        padding-left: 12px;
    }

    .orbit-one {
        width: 300px;
        height: 220px;
    }

    .orbit-two {
        width: 260px;
        height: 300px;
    }

    .tag-top {
        right: -2px;
        top: 30px;
    }

    .tag-bottom {
        bottom: 42px;
        left: -2px;
    }

    .shape-one {
        left: 10px;
    }

    .shape-two {
        right: 10px;
    }

    .hero-caption {
        right: 5px;
        bottom: -5px;
        font-size: 8px;
    }

    .section-heading {
        margin-bottom: 30px;
    }

    .section-heading h2,
    .contact-panel h2 {
        letter-spacing: -1px;
    }

    .about-grid,
    .skills-grid,
    .projects-grid,
    .goal-grid {
        grid-template-columns: 1fr;
    }

    .about-card {
        padding: 23px;
    }

    .skill-card {
        padding: 16px;
    }

    .project-card {
        width: 100%;
    }

    .project-info {
        padding: 21px;
    }

    .goal-card {
        min-height: auto;
    }

    .education-card {
        flex-wrap: wrap;
        padding: 20px;
    }

    .education-card > div:nth-child(2) {
        flex: 1;
        min-width: 180px;
    }

    .education-badge {
        margin-left: 0;
    }

    .contact-panel {
        padding: 40px 20px;
        border-radius: 18px;
    }

    .footer {
        justify-content: center;
        text-align: center;
        flex-direction: column;
        gap: 12px;
    }
}

/* =========================================
   17. ACCESSIBILITY: REDUCED MOTION
========================================= */

@media (prefers-reduced-motion: reduce) {
    html {
        scroll-behavior: auto;
    }

    *,
    *::before,
    *::after {
        animation: none !important;
        transition: none !important;
    }
}
