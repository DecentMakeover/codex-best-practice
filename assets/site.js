const tocLinks = Array.from(document.querySelectorAll(".toc-card a"));
const sections = tocLinks
  .map((link) => {
    const id = link.getAttribute("href");
    if (!id || !id.startsWith("#")) return null;
    return [link, document.querySelector(id)];
  })
  .filter(Boolean);

if ("IntersectionObserver" in window && sections.length > 0) {
  const active = new Map();
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        active.set(entry.target.id, entry.isIntersecting);
      });

      let currentId = "";
      for (const [, section] of sections) {
        if (section && active.get(section.id)) currentId = section.id;
      }

      tocLinks.forEach((link) => {
        const href = link.getAttribute("href");
        link.style.fontWeight = href === `#${currentId}` ? "700" : "500";
        link.style.color = href === `#${currentId}` ? "#0f172a" : "#475569";
      });
    },
    {
      rootMargin: "-20% 0px -65% 0px",
      threshold: 0,
    },
  );

  sections.forEach(([, section]) => {
    if (section) observer.observe(section);
  });
}
