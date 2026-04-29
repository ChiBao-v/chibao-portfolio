document.addEventListener("DOMContentLoaded", () => {
    /* ================= THEME TOGGLE ================= */

    const themeSwitch = document.getElementById("theme-switch");
    const currentTheme = localStorage.getItem("theme");

    if (currentTheme === "dark") {
        document.documentElement.setAttribute("data-theme", "dark");
        if (themeSwitch) {
            themeSwitch.checked = true;
        }
    }

    if (themeSwitch) {
        themeSwitch.addEventListener("change", () => {
            if (themeSwitch.checked) {
                document.documentElement.setAttribute("data-theme", "dark");
                localStorage.setItem("theme", "dark");
            } else {
                document.documentElement.removeAttribute("data-theme");
                localStorage.setItem("theme", "light");
            }
        });
    }

    /* ================= TYPED TEXT ================= */

    if (document.querySelector("#typed") && typeof Typed !== "undefined") {
        new Typed("#typed", {
            strings: [
                "Data Analyst",
                "Data Scientist",
                "Machine Learning Learner",
                "AI Explorer",
                "Python Developer"
            ],
            typeSpeed: 50,
            backSpeed: 28,
            backDelay: 1200,
            loop: true
        });
    }

    /* ================= PARTICLES BACKGROUND ================= */

    if (document.getElementById("particles-js") && typeof particlesJS !== "undefined") {
        particlesJS("particles-js", {
            particles: {
                number: {
                    value: 60,
                    density: {
                        enable: true,
                        value_area: 850
                    }
                },
                color: {
                    value: "#2563eb"
                },
                shape: {
                    type: "circle"
                },
                opacity: {
                    value: 0.35,
                    random: true
                },
                size: {
                    value: 3,
                    random: true
                },
                line_linked: {
                    enable: true,
                    distance: 150,
                    color: "#2563eb",
                    opacity: 0.18,
                    width: 1
                },
                move: {
                    enable: true,
                    speed: 2,
                    direction: "none",
                    random: false,
                    straight: false,
                    out_mode: "out"
                }
            },
            interactivity: {
                detect_on: "canvas",
                events: {
                    onhover: {
                        enable: true,
                        mode: "repulse"
                    },
                    onclick: {
                        enable: true,
                        mode: "push"
                    }
                },
                modes: {
                    repulse: {
                        distance: 120,
                        duration: 0.4
                    },
                    push: {
                        particles_nb: 4
                    }
                }
            },
            retina_detect: true
        });
    }

    /* ================= SMOOTH SCROLL ================= */

    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
        anchor.addEventListener("click", function (e) {
            const targetId = this.getAttribute("href");

            if (!targetId || targetId === "#") return;

            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                e.preventDefault();

                targetElement.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });

                const navLinks = document.querySelector(".nav-links");
                if (navLinks) {
                    navLinks.classList.remove("active");
                }
            }
        });
    });

    /* ================= MOBILE MENU ================= */

    const menuToggle = document.querySelector(".menu-toggle");
    const navLinks = document.querySelector(".nav-links");

    if (menuToggle && navLinks) {
        menuToggle.addEventListener("click", () => {
            navLinks.classList.toggle("active");

            const icon = menuToggle.querySelector("i");

            if (icon) {
                if (navLinks.classList.contains("active")) {
                    icon.classList.remove("fa-bars");
                    icon.classList.add("fa-times");
                } else {
                    icon.classList.remove("fa-times");
                    icon.classList.add("fa-bars");
                }
            }
        });
    }

    /* ================= PROJECT FILTER TABS ================= */

    const projectTabs = document.querySelectorAll(".project-tab");
    const projectCards = document.querySelectorAll(".project-card");

    projectTabs.forEach((tab) => {
        tab.addEventListener("click", () => {
            const filterValue = tab.getAttribute("data-filter");

            projectTabs.forEach((item) => {
                item.classList.remove("active");
            });

            tab.classList.add("active");

            projectCards.forEach((card) => {
                const categories = card.getAttribute("data-category");

                if (filterValue === "all") {
                    card.classList.remove("hide");
                    return;
                }

                if (categories && categories.includes(filterValue)) {
                    card.classList.remove("hide");
                } else {
                    card.classList.add("hide");
                }
            });
        });
    });

    /* ================= FADE-IN ON SCROLL ================= */

    const fadeElements = document.querySelectorAll(".section, .project-card, .skill-card, .award-card, .timeline-card");

    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("visible");
                }
            });
        },
        {
            threshold: 0.15
        }
    );

    fadeElements.forEach((element) => {
        element.classList.add("fade-in");
        observer.observe(element);
    });

    /* ================= HERO PARALLAX ================= */

    const heroBg = document.querySelector(".hero-bg");

    window.addEventListener("scroll", () => {
        if (!heroBg) return;

        const scrollPosition = window.scrollY;
        heroBg.style.transform = `translateY(${scrollPosition * 0.15}px)`;
    });
});