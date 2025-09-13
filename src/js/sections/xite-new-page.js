class LucydDummy {
  constructor(container) {
    this.container = container;
    if (this.container) {
      this.init();
    }
  }

  init() {
    this.buttons = this.container.querySelectorAll(".dummy-btn");
    this.buttons.forEach((btn) => {
      btn.addEventListener("click", () => {
        const msg = btn.closest(".dummy-wrapper").querySelector(".dummy-msg");
        if (msg) {
          msg.classList.toggle("is-visible");
        }
      });
    });
  }
}

// Normal page init
document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".dummy-section").forEach((section) => {
    new LucydDummy(section);
  });
});

// Shopify Theme Editor support
if (window.Shopify && window.Shopify.designMode) {
  document.addEventListener("shopify:section:load", (event) => {
    if (event.target && event.target.classList.contains("dummy-section")) {
      new LucydDummy(event.target);
    }
  });
}
