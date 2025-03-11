// * =============== change reservation 1 =============== * //
gsap
  .timeline()
  .from(".change .tab-type1", {
    width: 0,
    opacity: 0,
    ease: "power1.inOut",
  })
  .from(".change .tab-type1 li span", {
    y: 20,
    opacity: 0,
    stagger: 0.3,
    ease: "power1.inOut",
  })
  .from(".change .chip label", {
    y: 20,
    opacity: 0,
    stagger: 0.3,
    ease: "power1.inOut",
  })
  .from(".change .list-title", {
    y: 20,
    opacity: 0,
    ease: "power1.inOut",
  })
  .from(".list-content .date", {
    y: 20,
    opacity: 0,
    ease: "power1.inOut",
  })
  .from(".list-content .card", {
    opacity: 0,
    y: 20,
    stagger: 0.3,
    ease: "power1.inOut",
  });

// * =============== qna 2 =============== * //
gsap
  .timeline()
  .from(".qna2 .ani01 .stagger-item", {
    y: 20,
    opacity: 0,
    stagger: 0.3,
    ease: "power1.inOut",

    scrollTrigger: {
      trigger: ".ani1",
      // markers: true,
      start: "top center",
    },
  })
  .from(".qna2 .ani02 div", {
    y: 20,
    opacity: 0,
    ease: "power1.inOut",

    scrollTrigger: {
      trigger: ".qna2 .ani02",
      // markers: true,
      start: "top center",
      // scrub: true,
    },
  })
  .from(".qna2 .ani03", {
    y: 20,
    opacity: 0,
    ease: "power1.inOut",

    scrollTrigger: {
      trigger: ".qna2 .ani03",
      // markers: true,
      start: "-20% 70%",
      // scrub: true,
    },
  });
