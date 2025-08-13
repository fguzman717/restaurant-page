
# Saveur - Restaurant Website

A single-page restaurant website built with Webpack and vanilla JavaScript, featuring dynamic page loading without a full refresh. The site showcases a fictional fine dining restaurant, Saveur, with a homepage, an elegant menu section, and a team-based contact page.

Designed to practice DOM manipulation, modular JavaScript, and asset handling in Webpack.


## Demo

https://fguzman717.github.io/restaurant-page


## Features

- Dynamic Page Switching - Switch between Home, Menu, and Contact without reloading the page.

- Modular JavaScript - Each page is built in its own JS module for better organization.

- Webpack Asset Handling - Import images, fonts, and styles directly into JS.

- Responsive Layout - Works well across desktop and tablet devices.

- Elegant Styling - Clean, modern design with a dark theme and gold accents.


## Tech Stack

- HTML5

- CSS3

- JavaScript (ES6+)

- Webpack for bundling

- Google Fonts for typography


## Project Structure

    ├── dist/                   # Compiled files (Webpack output)
    ├── src/
    │   ├── assets/             # Images and other media
    │   ├── contact.js          # Contact page module
    │   ├── homepage.js         # Homepage module
    │   ├── menu.js             # Menu page module
    │   ├── index.js            # Main entry point
    │   ├── styles.css          # Stylesheet
    ├── package.json
    ├── webpack.config.js
    └── README.md


## Getting Started

    git clone https://github.com/yourusername/restaurant-page.git         #Clone Repository
    cd restaurant-page
    npm install                                                           #Install Dependencies
    npm run start                                                         #Start Development Server
    npm run build                                                         #Build for Production


## Lessons Learned

This project was built to practice. This project helped me in:

- Getting comfortable with Webpack’s asset pipeline

- Writing DOM-based UIs without frameworks

- Using Webpack for bundling JS, CSS, and images.

- Writing modular JavaScript with import and export.

- Dynamically generating DOM elements instead of writing static HTML.

- Managing assets (images/fonts) in a JavaScript project



