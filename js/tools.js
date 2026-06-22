// The Tool Stack — top bar tab switching
(function () {
  "use strict";

  var nav = document.querySelector("[data-tools-tabs]");
  if (!nav) return;

  var buttons = Array.prototype.slice.call(nav.querySelectorAll(".tools-tab[data-tab]"));
  var panels = Array.prototype.slice.call(document.querySelectorAll(".tab-panel[data-panel]"));

  buttons.forEach(function (btn) {
    btn.addEventListener("click", function () {
      var target = btn.getAttribute("data-tab");

      buttons.forEach(function (b) {
        b.classList.toggle("active", b === btn);
      });

      panels.forEach(function (panel) {
        panel.classList.toggle("active", panel.getAttribute("data-panel") === target);
      });

      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  });
})();
