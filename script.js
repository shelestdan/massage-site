const nav = document.querySelector("[data-nav]");
const menuToggle = document.querySelector("[data-menu-toggle]");
const revealItems = document.querySelectorAll(".reveal");
const metrikaId = window.YA_METRIKA_ID;

menuToggle?.addEventListener("click", () => {
  const isOpen = menuToggle.getAttribute("aria-expanded") === "true";
  menuToggle.setAttribute("aria-expanded", String(!isOpen));
  nav?.classList.toggle("is-open", !isOpen);
});

nav?.addEventListener("click", (event) => {
  if (event.target instanceof HTMLAnchorElement) {
    menuToggle?.setAttribute("aria-expanded", "false");
    nav.classList.remove("is-open");
  }
});

const reachGoal = (goalName) => {
  if (!goalName || !metrikaId || typeof window.ym !== "function") return;
  window.ym(metrikaId, "reachGoal", goalName);
};

document.addEventListener("click", (event) => {
  const target = event.target instanceof Element ? event.target.closest("[data-goal]") : null;
  reachGoal(target?.getAttribute("data-goal"));
});

reachGoal(document.querySelector("[data-page-goal]")?.getAttribute("data-page-goal"));

if ("IntersectionObserver" in window) {
  const observer = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      }
    },
    { rootMargin: "0px 0px 160px 0px", threshold: 0.01 }
  );

  revealItems.forEach((item) => observer.observe(item));
} else {
  revealItems.forEach((item) => item.classList.add("is-visible"));
}
