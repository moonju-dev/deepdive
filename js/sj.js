// * =============== change reservation =============== * //
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
