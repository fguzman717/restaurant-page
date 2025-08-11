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

  navButtons.forEach((clickedButton) => {
    clickedButton.addEventListener("click", () => {
      const page = clickedButton.dataset.page;
      const loader = pageLoaders[page];

      if (loader) {
        loader();

        navButtons.forEach((activeButton) => {
          activeButton.classList.remove("active");
        });

        clickedButton.classList.add("active");
      }
    });
  });
  pageLoaders.home();
  navButtons[0].classList.add("active");
});
