class LucydFaqs {
  constructor(container) {
    this.container = container;
    // Initialize FAQ functionality here if needed
  }
}

// Register section if using Shopify's section registration pattern
if (window.Shopify && window.Shopify.designMode) {
  document.addEventListener('shopify:section:load', (event) => {
    if (event.target && event.target.querySelector('.lucyd-faqs')) {
      new LucydFaqs(event.target.querySelector('.lucyd-faqs'));
    }
  });
} else {
  document.addEventListener('DOMContentLoaded', () => {
    const faqsSection = document.querySelector('.lucyd-faqs');
    if (faqsSection) {
      new LucydFaqs(faqsSection);
    }
  });
}
