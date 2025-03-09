gsap.fromTo(
  ".card",
  {
    xPercent: -100,
    opacity: 0,
  },
  {
    xPercent: 0,
    opacity: 1,
  }
);

gsap
  .timeline()
  .from(".list-title", {
    opacity: 0,
    y: 20,
  })
  .from(".faq-list .item1", {
    opacity: 0,
    y: 20,
  })
  .from(".faq-list .item2", {
    opacity: 0,
    y: 20,
  });
