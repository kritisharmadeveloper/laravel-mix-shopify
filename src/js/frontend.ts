// =============================================================================
// Frontend JavaScript - TypeScript Entry Point
// =============================================================================

// Lazy loading
import 'lazysizes';
// import a plugin
import 'lazysizes/plugins/parent-fit/ls.parent-fit';

// import Vue from "vue";
// window.Vue = Vue;

import axios from 'axios';
window.axios = axios;

import jQuery from 'jquery';
window.jQuery = window.$ = jQuery;

import Noty from 'noty';
window.Noty = Noty;

// Sections
import './sections/lucyd-header.js';
import './sections/lucyd-faqs.js';

// Snippets
import './snippets/lucyd-product-card.js';

// Templates
import './templates/product.js';

// Components (TypeScript)
import { createLucydModal } from './components/LucydModal';

// Initialize components when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
  // Initialize modals
  const modalContainers = document.querySelectorAll('[data-lucyd-modal]');
  modalContainers.forEach((container: Element) => {
    if (container instanceof HTMLElement) {
      createLucydModal(container, {
        triggerSelector: '[data-modal-trigger]',
        modalSelector: '[data-modal]',
        closeSelector: '[data-modal-close]',
        overlaySelector: '[data-modal-overlay]'
      });
    }
  });
});