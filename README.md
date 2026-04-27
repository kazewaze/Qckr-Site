<div align="center">
  <br />
  <img height="auto" width="100px" src="./assets/GlazeDonut.svg" alt="The Glaze Donut Logo">
  <br />
  <br />
  <img height="auto" width="150px" src="./assets/Glaze-yellow.svg" alt="The Glaze Logo">
  <br />
  <br />
  <h1>A Simple SPA Framework</h1>
  <em>* Glaze is Stable - But still in active development *</em>
  <br />
  <br />

  [![GitHub stars](https://img.shields.io/github/stars/kazewaze/glaze.svg?style=social)](https://github.com/kazewaze/glaze/stargazers)
  [![GitHub issues](https://img.shields.io/github/issues/kazewaze/glaze.svg)](https://github.com/kazewaze/glaze/issues)
  [![GitHub pull requests](https://img.shields.io/github/issues-pr/kazewaze/glaze.svg)](https://github.com/kazewaze/glaze/pulls)

  [![MIT License](https://img.shields.io/badge/License-MIT-pink.svg?style=flat&color=ffe100)](https://github.com/kazewaze/glaze/blob/main/LICENSE.md)

  <h3 style="font-weight: 700;">Built with Good Ole Vanilla HTML, CSS, and JavaScript</h3>
  <h3 style="font-weight: 700;">ZERO DEPENDENCIES</h3>

<h3 align="center">
✅ Lightweight<br />✅ SPA Routing<br />✅ Layout Enabled<br />✅ Fully-Accessible<br />✅ Developer-Friendly<br />✅ Included CLI Tool & Dev Server<br />✅ Custom Styles & Scripts Per Page<br />✅ And Sweeter than a Glazed Donut
</h3>

</div>

<br />
<br />

# 🍩 Live Demo

### 🚧 [ Under Construction ] ...

<br />
<br />

# ⏲️ Requirements

### [Node.js →](https://nodejs.org)
- A Recent Version is Recommended
- Only needed to run the __Glaze Dev Server for Local Development__

<br />
<br />

# 🎂 Setup

### 1. Clone the Repo

```bash
git clone https://github.com/kazewaze/glaze.git
```

### 2. ```cd``` into Glaze

```bash
cd glaze-main
```

### 3. Run the Glaze Dev Server

```bash
node server.js
```

### 4. Go to:

```bash
http://localhost:8080
```

### 5. Then edit the code and make it your own!

<br />
<br />

# 🧁 Structure / Features

## Routes

- Routes are defined in the ```routes.js``` file.
- All Routes ( ```/```, ```/about```, ```/contact```, etc ) are Loaded Dynamically — No Page Reloads.
- Nothing gets re-rendered in the DOM that doesn't need to be.

<br />

__Example of a route definition in the ```routes.js``` file:__

```js
export const routes = {
  '/': { // Page Route.
    title: 'Glaze', // Title of Page.
    file: '/pages/home.html', // Page File.
    layout: '/layouts/_home.html', // Layout File.
    styles: '/styles/home.css', // Page Stylesheet.
    script: '/scripts/home.js', // Page Script.
    description: 'A Simple SPA Framework.' // Page Description.
  },
  '/about': {
    ...
  },
}
```

## Layouts

- All Layouts go in the ```/layouts``` folder
- Layout Names begin with an underscore - ```/layouts/_about.html``` but __this is not a requirement__. You can name them however you wish in the ```routes.js``` file and in the ```/layouts``` folder.

<br />

__All Layout files MUST be wrapped in the following tag:__
```html
<template id="glaze-template">
  <!-- Your Stuff Goes Here -->

  <main id="glaze-main" class="glaze-main"></main>

  <!-- And Here -->
</template>
```

<br />

__In a Layout file the Page Content will be injected within this tag:__
```html
<main id="glaze-main" class="glaze-main"></main>
```

__Be sure that your Layout files include it! Or check out the Glaze CLI Tool further down!__

## Pages

- All Pages go in the ```/pages``` folder

## Styles

- All Page Stylesheets go in the ```/styles``` folder.
- They are declared in the ```routes.js``` file.
- __Only 2 Stylesheets can be located at the Project's Root: ```reset.css``` & ```global.css``` - They are not required but HIGHLY recommended.__

## Scripts

- All Page Scripts go in the ```/scripts``` folder.
- They are declared in the ```routes.js``` file.

## Assets

- All Assets (Images, etc) go in the ```/assets``` folder.

## Glaze CLI Tool

- Before using, you need to run: ```chmod +x glaze```
- Now you can run it with: ```./glaze```
- Example Usage: ```./glaze -l _new-layout.html``` (Creates new Layout in the layouts folder with the required tags in place).

<br />

<strong>The contents of the Layout file (<code>/layouts/_new-layout.html</code>) would look like:</strong>

```html
<template id="glaze-template">
  <!-- Your Custom Layout Code Goes Here (top/header/nav)... -->

  <div class="glaze-container">
    <div class="glaze-content">
      <main id="glaze-main" class="glaze-main"></main>
    </div>
  </div>

  <!-- Your Custom Layout Code Goes Here (bottom/footer)... -->
</template>
```

<em>The Page Content will be placed within the tag:</em>

```html
<main id="glaze-main" class="glaze-main"></main>
```

<em>So you can safely remove the following tags from the CLI Tool's Scaffold:</em>

```html
<div class="glaze-container">
  <div class="glaze-content">
    <!-- DON'T REMOVE THE MAIN TAG THOUGH -->
  </div>
</div>
```

## Glaze Dev Server

- Run it with: ```node server.js```

<br />
<br />

# 🧑🏻‍🍳 Deployment

### 🚧 [ Under Construction ] ...

# Roadmap

Components ?

- Defined in ```routes.js``` like layouts but are injected into Pages.
- Components -> (injected into) Pages -> (injected into) Layouts.
- ```components: ['button.html', 'form.html', etc],```
- Glaze auto-locates the components based on name and injects them where needed... hmmm

# 🪪 License

<div style="display: flex; align-items: center; gap: 7.5px;">
  <h3>MIT © 2025</h3>
  <img style="margin: 12.5px 0 0 0;" height="auto" width="150px" src="./assets/kaycee.svg" alt="The Glaze Logo">
</div>