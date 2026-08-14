gsap.registerPlugin(ScrollTrigger);


/* =====================================================
   LOADER
===================================================== */

const loader = document.getElementById("loader");

window.addEventListener("load", () => {

  setTimeout(() => {

    if (loader) {
      loader.classList.add("hide");
    }

  }, 700);

});


/* =====================================================
   LENIS SMOOTH SCROLL
===================================================== */

const lenis = new Lenis({
  duration: 1.15,
  smoothWheel: true,
  wheelMultiplier: 0.9
});

lenis.on("scroll", ScrollTrigger.update);

gsap.ticker.add((time) => {
  lenis.raf(time * 1000);
});

gsap.ticker.lagSmoothing(0);


/* =====================================================
   MOBILE MENU
===================================================== */

const menuButton =
  document.getElementById("menuButton");

const mobileMenu =
  document.getElementById("mobileMenu");


if (menuButton && mobileMenu) {

  menuButton.addEventListener("click", () => {

    mobileMenu.classList.toggle("open");

    document.body.classList.toggle("menu-open");

  });

}


/* =====================================================
   MOBILE MENU LINKS
===================================================== */

document
  .querySelectorAll(".mobile-menu a")
  .forEach((link) => {

    link.addEventListener("click", () => {

      if (mobileMenu) {
        mobileMenu.classList.remove("open");
      }

      document.body.classList.remove("menu-open");

    });

  });


/* =====================================================
   SMOOTH ANCHOR SCROLL
===================================================== */

document
  .querySelectorAll('a[href^="#"]')
  .forEach((link) => {

    link.addEventListener("click", (event) => {

      const targetId =
        link.getAttribute("href");

      const target =
        document.querySelector(targetId);

      if (!target) {
        return;
      }

      event.preventDefault();

      lenis.scrollTo(target, {

        duration: 1.3,

        offset: 0

      });

    });

  });


/* =====================================================
   HERO TEXT ANIMATION
===================================================== */

gsap.from(".hero-line", {

  yPercent: 120,

  opacity: 0,

  duration: 1.15,

  stagger: 0.14,

  ease: "power4.out",

  delay: 1

});


gsap.from(
  ".hero-top, .hero-bottom, .small-title",
  {

    opacity: 0,

    y: 25,

    duration: 0.9,

    stagger: 0.1,

    delay: 1.4

  }
);


/* =====================================================
   HERO PARALLAX
===================================================== */

gsap.to(".hero-image img", {

  scale: 1,

  yPercent: 8,

  ease: "none",

  scrollTrigger: {

    trigger: ".hero",

    start: "top top",

    end: "bottom top",

    scrub: true

  }

});


gsap.to(".hero-content", {

  yPercent: -24,

  opacity: 0.25,

  ease: "none",

  scrollTrigger: {

    trigger: ".hero",

    start: "top top",

    end: "bottom top",

    scrub: true

  }

});


/* =====================================================
   STATEMENT ANIMATION
===================================================== */

gsap.from(".statement-content h2", {

  y: 90,

  opacity: 0,

  duration: 1,

  ease: "power3.out",

  scrollTrigger: {

    trigger: ".statement",

    start: "top 65%"

  }

});


gsap.to(".circle-effect", {

  rotate: 100,

  scale: 1.2,

  ease: "none",

  scrollTrigger: {

    trigger: ".statement",

    start: "top bottom",

    end: "bottom top",

    scrub: true

  }

});


/* =====================================================
   WORK INTRO
===================================================== */

gsap.from(".work-grid > *", {

  y: 70,

  opacity: 0,

  stagger: 0.15,

  duration: 1,

  scrollTrigger: {

    trigger: ".work-intro",

    start: "top 65%"

  }

});


/* =====================================================
   PROJECT ANIMATIONS
===================================================== */

document
  .querySelectorAll(".project")
  .forEach((project) => {

    const image =
      project.querySelector(".project-image img");

    const title =
      project.querySelector(".project-title h3");

    const category =
      project.querySelector(".project-title p");

    const description =
      project.querySelector(".project-description");


    if (image) {

      gsap.to(image, {

        scale: 1,

        yPercent: 8,

        ease: "none",

        scrollTrigger: {

          trigger: project,

          start: "top bottom",

          end: "bottom top",

          scrub: true

        }

      });

    }


    if (title) {

      gsap.from(title, {

        yPercent: 85,

        opacity: 0,

        duration: 1,

        ease: "power3.out",

        scrollTrigger: {

          trigger: project,

          start: "top 58%",

          toggleActions:
            "play none none reverse"

        }

      });

    }


    gsap.from(
      [category, description],
      {

        y: 30,

        opacity: 0,

        duration: 0.8,

        stagger: 0.15,

        scrollTrigger: {

          trigger: project,

          start: "top 58%"

        }

      }
    );

  });


/* =====================================================
   SERVICE ANIMATIONS
===================================================== */

/*
  IMPORTANT:
  Ye animation automatically saare
  .service-item elements ko animate karega.

  Isliye 4 services ho ya 15,
  JS change karne ki zarurat nahi.
*/

gsap.from(".service-item", {

  y: 45,

  opacity: 0,

  duration: 0.8,

  stagger: 0.08,

  ease: "power3.out",

  scrollTrigger: {

    trigger: ".service-list",

    start: "top 75%"

  }

});


/* =====================================================
   SERVICE HOVER
===================================================== */

document
  .querySelectorAll(".service-item")
  .forEach((item) => {

    item.addEventListener("mouseenter", () => {

      gsap.to(
        item.querySelector("a"),
        {
          rotate: 45,
          duration: 0.3,
          ease: "power2.out"
        }
      );

    });


    item.addEventListener("mouseleave", () => {

      gsap.to(
        item.querySelector("a"),
        {
          rotate: 0,
          duration: 0.3,
          ease: "power2.out"
        }
      );

    });

  });


/* =====================================================
   STUDIO PARALLAX
===================================================== */

gsap.to(".studio-image img", {

  yPercent: 12,

  scale: 1.08,

  ease: "none",

  scrollTrigger: {

    trigger: ".studio-section",

    start: "top bottom",

    end: "bottom top",

    scrub: true

  }

});


gsap.from(".studio-content > *", {

  y: 65,

  opacity: 0,

  duration: 1,

  stagger: 0.15,

  scrollTrigger: {

    trigger: ".studio-section",

    start: "top 60%"

  }

});


/* =====================================================
   METHOD ANIMATIONS
===================================================== */

gsap.from(".method-list article", {

  x: 45,

  opacity: 0,

  duration: 0.8,

  stagger: 0.13,

  scrollTrigger: {

    trigger: ".method-list",

    start: "top 75%"

  }

});


/* =====================================================
   CONTACT CIRCLES
===================================================== */

gsap.to(".circle-one", {

  xPercent: -25,

  yPercent: 20,

  rotate: 50,

  ease: "none",

  scrollTrigger: {

    trigger: ".contact",

    start: "top bottom",

    end: "bottom top",

    scrub: true

  }

});


gsap.to(".circle-two", {

  xPercent: 35,

  yPercent: -20,

  rotate: -45,

  ease: "none",

  scrollTrigger: {

    trigger: ".contact",

    start: "top bottom",

    end: "bottom top",

    scrub: true

  }

});


/* =====================================================
   CUSTOM CURSOR
===================================================== */

const cursorDot =
  document.querySelector(".cursor-dot");

const cursorRing =
  document.querySelector(".cursor-ring");


if (cursorDot && cursorRing) {

  window.addEventListener(
    "mousemove",
    (event) => {

      cursorDot.style.left =
        `${event.clientX}px`;

      cursorDot.style.top =
        `${event.clientY}px`;

      cursorRing.style.left =
        `${event.clientX}px`;

      cursorRing.style.top =
        `${event.clientY}px`;

    }
  );


  document
    .querySelectorAll(
      "a, button, .service-item"
    )
    .forEach((item) => {

      item.addEventListener(
        "mouseenter",
        () => {

          cursorRing.style.width =
            "52px";

          cursorRing.style.height =
            "52px";

        }
      );


      item.addEventListener(
        "mouseleave",
        () => {

          cursorRing.style.width =
            "35px";

          cursorRing.style.height =
            "35px";

        }
      );

    });

}


/* =====================================================
   FOOTER YEAR
===================================================== */

const year =
  document.getElementById("year");

if (year) {

  year.textContent =
    new Date().getFullYear();

}


/* =====================================================
   REFRESH SCROLLTRIGGER
===================================================== */

window.addEventListener("load", () => {

  ScrollTrigger.refresh();

});