const modeButtons = document.querySelectorAll(".mode-button");
const demoLabel = document.getElementById("demo-label");
const demoSource = document.getElementById("demo-source");

const modes = {
  manual: {
    label: "Manual execution",
    icon: "QA",
    kicker: "Executed by",
    title: "Tester"
  },
  auto: {
    label: "Automation result",
    icon: "CI",
    kicker: "Reported by",
    title: "Playwright pipeline"
  }
};

modeButtons.forEach((button) => {
  button.addEventListener("click", () => {
    modeButtons.forEach((item) => {
      const selected = item === button;
      item.classList.toggle("is-active", selected);
      item.setAttribute("aria-selected", String(selected));
    });

    const mode = modes[button.dataset.mode];
    demoLabel.textContent = mode.label;
    demoSource.innerHTML = `
      <div class="source-head">
        <span class="source-icon">${mode.icon}</span>
        <div><small>${mode.kicker}</small><strong>${mode.title}</strong></div>
      </div>
      <div class="source-lines">
        <span></span><span></span><span></span>
      </div>
    `;
  });
});
