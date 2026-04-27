/*
*  --------------
*   Glaze Routes
*  --------------
*/

export const routes = {
  '/': {
    title: 'Qckr',
    file: '/pages/home.html',
    layout: '/layouts/_default.html',
    styles: '/styles/home.css',
    script: '/scripts/home.js',
    description: 'A Local Real-Time Student Engagement Platform.'
  },
  '/download': {
    title: 'Download',
    file: '/pages/download.html',
    layout: '/layouts/_download.html',
    styles: '/styles/download.css',
    script: '/scripts/download.js',
    description: 'Download Page.'
  },
  '/about': {
    title: 'About',
    file: '/pages/about.html',
    layout: '/layouts/_about.html',
    styles: '/styles/about.css',
    script: '/scripts/about.js',
    description: 'Qckr About Page.'
  },
  '404': {
    title: '404 - Not Found',
    file: '/pages/404.html',
    layout: '/layouts/_404.html',
    styles: '/styles/404.css',
    script: '/scripts/notFound.js',
    description: '404 - Page Not Found.'
  }
};