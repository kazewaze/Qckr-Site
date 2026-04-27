/*
*  --------------
*   Glaze Router
*  --------------
*/

import { routes } from './routes.js';

let currentPath = null;
let lastRenderedHTML = '';

function getStyles(stylePath) {
  const defaultStyle = '/styles/glaze.css';
  const currentHref = stylePath || defaultStyle;

  // Remove All Existing Route-Specific Styles.
  document.querySelectorAll('link[glaze-style]').forEach(link => {
    link.remove();
  });

  // Skip Adding if it's the Glaze Base Styles (located in: index.html).
  if (currentHref === defaultStyle) return;

  // Add New Route-Specific Stylesheets.
  const link = document.createElement('link');

  link.rel = 'stylesheet';
  link.href = currentHref;
  link.setAttribute('glaze-style', 'true');

  document.head.appendChild(link);
}

function getScripts(scriptPath) {
  // Remove All Existing Route-Specific Scripts.
  document.querySelectorAll('script[glaze-script]').forEach(script => {
    script.remove();
  });

  // No New Script? Exit Early.
  if (!scriptPath) return;

  // Add New Route-Specific Script (might extend this to support multiple...).
  const script = document.createElement('script');

  script.src = scriptPath;
  script.type = 'module';
  script.setAttribute('glaze-script', 'true');

  document.body.appendChild(script);
}

function handleLinkClick(e) {
  const link = e.target.closest('a[glaze-link]');

  if (link) {
    e.preventDefault();

    const path = new URL(link.href).pathname;

    // Close Mobile Menu ( if open ).
    const menuToggle = document.getElementById('menu__toggle');

    if (menuToggle?.checked) menuToggle.checked = false;

    if (path !== location.pathname) {
      history.pushState({}, '', path);

      render(path);
    }
  }
}

async function load(url) {
  const res = await fetch(url || '/layouts/_default.html');
  const html = await res.text();
  const doc = new DOMParser().parseFromString(html, 'text/html');

  return doc.querySelector('#glaze-template');
}

async function render(path) {
  // Set glaze-link attributes for Internal-Links Only.
  document.querySelectorAll('a').forEach(aTag => {
    if (aTag.attributes.href.value[0] === '/') {
      aTag.setAttribute('glaze-link', 'true');
    }
  });

  if (path === currentPath && currentPath !== null) return;

  const route = routes[path] || routes['404'];

  try {
    const pageRes = await fetch(route.file);
    const pageHtml = await pageRes.text();

    // Do Nothing - If HTML has NOT Changed.
    if (pageHtml === lastRenderedHTML) {
      currentPath = path; // Still Update the Current Path.

      return;
    }

    lastRenderedHTML = pageHtml;
    currentPath = path;

    const mainContentArea = document.querySelector('#glaze-main');

    if (mainContentArea) mainContentArea.innerHTML = pageHtml;

    document.title = route.title;

    const meta = document.querySelector('meta[name="description"]');

    if (meta) { meta.setAttribute('content', route.description); }
    else {
      const newMeta = document.createElement('meta');

      newMeta.name = 'description';
      newMeta.content = route.description;
      document.head.appendChild(newMeta);
    }

    getStyles(route.styles);
    getScripts(route.script);
  } catch (error) {
    console.error('*** Render Failed *** :', error);
  }
}

window.addEventListener('popstate', () => render(location.pathname));

document.addEventListener('DOMContentLoaded', async () => {
  const layoutTemplate = await load('/layouts/_default.html');
  const layout = layoutTemplate.content.cloneNode(true);
  const app = document.getElementById('app');

  app.innerHTML = '';
  app.appendChild(layout);

  document.body.addEventListener('click', handleLinkClick);

  render(location.pathname); // Always Call render on First Load.
});