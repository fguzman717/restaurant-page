import "./styles.css";
import loadHomepage from "./homepage.js";
import loadMenuPage from "./menu.js";
import loadContactPage from "./contact.js";

const pageLoaders = {
  home: loadHomepage,
  menu: loadMenuPage,
  contact: loadContactPage,
};

document.addEventListener("DOMContentLoaded", () => {
  const navButtons = document.querySelectorAll("nav button[data-page]");

  navButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const page = button.dataset.page;
      const loader = pageLoaders[page];

      console.log(pageLoaders.page);

      if (loader) {
        loader();
      }
    });
  });
  pageLoaders.home();
});
