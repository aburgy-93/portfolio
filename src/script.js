const projectSection = document.querySelector(".about-me-section");
const nav = document.querySelector(".navBar");

const stickyNav = function (entries, observer) {
  const [entry] = entries;
  console.log(entry);

  const { isIntersecting } = entry;
  console.log(isIntersecting);

  if (isIntersecting) nav.classList.remove("sticky");
  else nav.classList.add("sticky");
};

const projectsObserver = new IntersectionObserver(stickyNav, {
  root: null,
  threshold: 0.25,
  rootMargin: "-150px",
});

projectsObserver.observe(projectSection);

document.querySelector(".links-right").addEventListener("click", function (e) {
  e.preventDefault();

  if (e.target.classList.contains("nav_link")) {
    const id = e.target.getAttribute("href");
    console.log(id);
    document.querySelector(id).scrollIntoView({ behavior: "smooth" });
  }
});
