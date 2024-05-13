const hamburger = document.querySelector("#hamburger");
const menu = document.querySelector("#menu");
const faSolid = document.querySelector(".fa-solid");
const hLink = document.querySelectorAll(".h-link");

hamburger.addEventListener("click", () => {
  menu.classList.toggle("hidden");
  faSolid.classList.toggle("fa-xmark");
});

hLink.forEach((link) => {
  link.addEventListener("click", () => {
    menu.classList.toggle("hidden");
    faSolid.classList.toggle("fa-xmark");
  });
});

// scroll reveal animations
const sr = ScrollReveal({
  origin: "bottom",
  distance: "60px",
  duration: 3000,
  delay: 100,
  // reset: true,
});

// home
sr.reveal(".home-ani", { origin: "left" });
sr.reveal(".home-img-ani", { origin: "right", delay: 800 });
// experience
sr.reveal(".expe-ani", { delay: 40, distance: "50px" });
sr.reveal(".expe-ani-heading", { origin: "left" });
sr.reveal(".expe-ani-div", { delay: 500 });
// skills
sr.reveal(".skill-ani", { delay: 200, distance: "80px" });
sr.reveal(".skill-l-ani", { delay: 350, distance: "100px", interval: 100 });
// projects
sr.reveal(".project-ani", { delay: 400, origin: "left" });
sr.reveal(".project-work-ani", { delay: 700 });
sr.reveal(".project-grid-ani", { delay: 860 });
// contact
sr.reveal(".contact-ani", { origin: "top" });
// footer
sr.reveal(".footer-ani", {});
sr.reveal(".footer-p-ani", { origin: "left" });
