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
