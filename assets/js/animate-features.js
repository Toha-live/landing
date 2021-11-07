ScrollTrigger.matchMedia({
  "(min-width: 800px)": function () {
    gsap.to("#features", {
      scrollTrigger: {
        trigger: "#features",
        scrub: true,
        pin: true,
        start: "center center",
        end: "bottom -100%",
        ease: "power2"
      }
    });
    
    gsap.from(".feature-image", {
      opacity: 0,
      duration: 1,
      scrollTrigger: {
        trigger: ".feature-image",
        start: "top +50%",
        scrub: 1,
      }
    });

    gsap.utils.toArray(".feature").forEach(elem => {
      gsap.from(elem, { opacity: 0, duration: 1, scrollTrigger: {
        trigger: elem,
        scrub: 1,
        stagger: 0.25,
        start: "top top",
        end: "bottom center",
      } });
    })
  }
})