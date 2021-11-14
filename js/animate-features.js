ScrollTrigger.matchMedia({
  "(min-width: 800px)": function () {
    gsap.to("#features", {
      scrollTrigger: {
        trigger: "#features",
        scrub: true,
        pin: true,
        start: "center center",
        end: "bottom -80%",
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

    const tl = gsap.timeline({ scrollTrigger: {
      trigger: "#features",
      start: "top +20%",
      end: "+=1000",
      scrub: 2,
    }});

    gsap.utils.toArray(".feature").forEach((elem, i) => {
      tl.from(elem, { opacity: 0, duration: 0.5 }, ">");
    });
  }
})