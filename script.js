document.addEventListener("DOMContentLoaded", function () {
    AOS.init({ duration: 1000 });

    gsap.to(".marquee-inner", {
        xPercent: -100, 
        ease: "linear",
        duration: 10, 
        repeat: -1 
    });

        // Handle button clicks
        document.getElementById("signinBtn")?.addEventListener("click", () => window.location.href = "login.html");
        document.getElementById("signupBtn")?.addEventListener("click", () => window.location.href = "signup.html");

    gsap.utils.toArray(".contribute-card").forEach(card => {
        card.addEventListener("mouseenter", () => {
            gsap.to(card, { scale: 1.1, duration: 0.1, ease: "power2.out" });
        });
        card.addEventListener("mouseleave", () => {
            gsap.to(card, { scale: 1, duration: 0.1, ease: "power2.out" });
        });
    });

    



});
