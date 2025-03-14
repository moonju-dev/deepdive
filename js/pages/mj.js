gsap.timeline().fromTo(
  ".summary-content",
  {
    opacity: 0,
    x: -200,
  },
  {
    opacity: 1,
    x: 0,
    duration: 0.5,
  }
);
gsap
  .timeline()
  .from(".accordion-content", {
    opacity: 0,
    y: 40,
    duration: 0.5,
  })
  .from(".accordion-coontent", {
    opacity: 0,
    y: 20,
    duration: 0.5,
  });

gsap.fromTo(
  ".ani1",
  {
    x: -30,
    opacity: 0,
  },
  {
    x: 0,
    opacity: 1,
    duration: 1,
    scrollTrigger: {
      trigger: ".ani1",
      //markers: true,
      start: "top center",
    },
  }
);

gsap.from(".ani2 li", {
  opacity: 0,
  y: 40,
  stagger: 0.2,
  scrollTrigger: {
    trigger: ".ani2",
    //markers: true,
    start: "50px center",
    end: "bottom center",
    scrub: true,
  },
});

gsap.fromTo(
  ".ani3",
  {
    x: -30,
    opacity: 0,
  },
  {
    x: 0,
    opacity: 1,
    duration: 1,
    scrollTrigger: {
      trigger: ".ani3",
      //markers: true,
      start: "top center",
      end: "bottom center",
    },
  }
);

gsap.fromTo(
  ".ani4",
  {
    y: -30,
    opacity: 0,
  },
  {
    y: 0,
    opacity: 1,
    duration: 1,
    scrollTrigger: {
      trigger: ".ani4",
      //markers: true,
      start: "top center",
      end: "bottom center",
    },
  }
);
