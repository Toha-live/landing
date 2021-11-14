ScrollTrigger.matchMedia({
  "(min-width: 800px)": function () {
    gsap.to("#promo", {
      scrollTrigger: {
        trigger: "#promo",
        scrub: true,
        pin: true,
        start: "center center",
        end: "bottom -100%",
        ease: "power2"
      }
    });

    const tl = gsap.timeline({ scrollTrigger: {
      trigger: "#promo",
      start: "top +20%",
      end: "+=1000",
      scrub: 2,
    }});

    const arguments = gsap.utils.toArray(".argument");

    arguments.forEach((elem, i) => {
      tl.from(elem, { opacity: 0, duration: 0.5 }, ">1");
      i !== arguments.length -1 && tl.to(elem, { opacity: 0, duration: 0.5 }, ">1");
    });
  }
})