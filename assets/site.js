const revealNodes = document.querySelectorAll("[data-reveal]");

if ("IntersectionObserver" in window) {
  const revealObserver = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      });
    },
    {
      threshold: 0.15,
      rootMargin: "0px 0px -5% 0px",
    },
  );

  revealNodes.forEach((node) => revealObserver.observe(node));
} else {
  revealNodes.forEach((node) => node.classList.add("is-visible"));
}

const focusButtons = Array.from(document.querySelectorAll(".focus-chip"));
const stackCards = Array.from(document.querySelectorAll(".stack-card"));

function applyFocus(focus) {
  focusButtons.forEach((button) => {
    button.classList.toggle("is-active", button.dataset.focus === focus);
  });

  stackCards.forEach((card) => {
    const topics = (card.dataset.topic || "").split(" ").filter(Boolean);
    const isMatch = focus === "all" || topics.includes(focus);
    card.classList.toggle("is-dimmed", !isMatch && focus !== "all");
    card.classList.toggle("is-highlighted", isMatch && focus !== "all");
  });
}

focusButtons.forEach((button) => {
  button.addEventListener("click", () => {
    applyFocus(button.dataset.focus || "all");
  });
});

applyFocus("all");

const yearNode = document.querySelector("#year");
if (yearNode) {
  yearNode.textContent = String(new Date().getFullYear());
}
