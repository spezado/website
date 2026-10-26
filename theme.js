// SPDX-License-Identifier: AGPL-3.0-or-later
// Theme switch: like the system (default), light or dark. A choice other than the system's is kept in localStorage
// ("theme") so that it holds on the next visit; choosing "like the system" removes it again. Nothing else is stored.
// The inline script in <head> applies a stored choice before the first paint.
(() => {
  const root = document.documentElement;
  const group = document.querySelector(".theme");
  if (!group) return;
  const buttons = group.querySelectorAll("[data-set-theme]");
  const metas = document.querySelectorAll('meta[name="theme-color"]');
  const systemDark = matchMedia("(prefers-color-scheme: dark)");
  let choice = root.dataset.theme || "system";

  function apply() {
    if (choice === "system") delete root.dataset.theme;
    else root.dataset.theme = choice;
    buttons.forEach((b) => b.setAttribute("aria-pressed", String(b.dataset.setTheme === choice)));
    const dark = choice === "dark" || (choice === "system" && systemDark.matches);
    metas.forEach((m) => {
      m.removeAttribute("media");
      m.content = dark ? "#071F25" : "#F4EEE8";
    });
  }

  buttons.forEach((b) => b.addEventListener("click", () => {
    choice = b.dataset.setTheme;
    try {
      if (choice === "system") localStorage.removeItem("theme");
      else localStorage.setItem("theme", choice);
    } catch (e) { /* storage blocked: the choice holds for this page only */ }
    apply();
  }));
  systemDark.addEventListener("change", apply);
  group.hidden = false;
  apply();
})();
