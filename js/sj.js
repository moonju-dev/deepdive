// * =============== change reservation =============== * //
gsap
  .timeline()
  .from(".change .tab-type1", {
    xPercent: 50,
    opacity: 0,
  })
  .from(".change .chip", {
    y: 20,
    opacity: 0,
  })
  .from(".change .list-title", {
    y: 20,
    opacity: 0,
  })
  .from(".list-content .date", {
    y: 20,
    opacity: 0,
  })
  .from(".list-content .card", {
    opacity: 0,
    y: 20,
    stagger: 0.3,
  });
