// Creator Blueprint — interaction layer
// 1) Scrollspy: highlights the active phase in the sidebar scrubber
// 2) Mobile nav: closes the <details> menu after a link is tapped
// 3) Timecode strip: shows reading progress through the page

(function () {
  "use strict";

  var sections = Array.prototype.slice.call(document.querySelectorAll(".phase-section"));
  var scrubNodes = Array.prototype.slice.call(document.querySelectorAll(".scrub-node"));
  var progressLabel = document.querySelector("[data-progress-label]");

  if (!sections.length) return;

  function setActive(id) {
    scrubNodes.forEach(function (node) {
      var match = node.getAttribute("data-target") === id;
      node.classList.toggle("active", match);
    });
  }

  function updateProgress() {
    var total = document.documentElement.scrollHeight - window.innerHeight;
    var pct = total > 0 ? Math.min(100, Math.max(0, (window.scrollY / total) * 100)) : 0;
    if (progressLabel) {
      progressLabel.textContent = "READ " + Math.round(pct) + "%";
    }
  }

  var observer;
  if ("IntersectionObserver" in window) {
    observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      { rootMargin: "-15% 0px -70% 0px", threshold: 0 }
    );
    sections.forEach(function (section) {
      observer.observe(section);
    });
  }

  window.addEventListener("scroll", updateProgress, { passive: true });
  updateProgress();

  // Close mobile nav after selecting a link
  var mobileNav = document.querySelector(".mobile-nav-toggle");
  if (mobileNav) {
    var links = mobileNav.querySelectorAll("a");
    links.forEach(function (link) {
      link.addEventListener("click", function () {
        mobileNav.removeAttribute("open");
      });
    });
  }
})();
