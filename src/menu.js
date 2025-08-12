import complimentaryHero from "./assets/creme-de-chou-fleur.png";
import entreeHero from "./assets/tartelette-de-chevre-and-miel.png";
import mainHero from "./assets/magret-de-canard-aux-figues.png";
import dessertsHero from "./assets/fondant-au-chocolat-noir.png";

function loadMenuPage() {
  console.log("Menu page is being imported!");

  const content = document.getElementById("content");
  content.innerHTML = "";

  const menuContainer = document.createElement("div");
  menuContainer.classList.add("menu-container");
  content.appendChild(menuContainer);

  // Menu Header
  const menuHeaderContainer = document.createElement("div");
  menuHeaderContainer.classList.add("menu-header-container");
  menuContainer.appendChild(menuHeaderContainer);

  const menuTitle = document.createElement("h1");
  menuTitle.classList.add("menu-header");
  menuTitle.textContent = "Signature Menu";
  menuHeaderContainer.appendChild(menuTitle);

  const menuDescription = document.createElement("p");
  menuDescription.classList.add("menu-header-description");
  menuDescription.textContent =
    "An exploration of refined flavors, seasonal ingredients, and timeless French technique.";
  menuHeaderContainer.appendChild(menuDescription);

  const headerSectionDivider = document.createElement("hr");
  headerSectionDivider.classList.add("section-divider");
  menuContainer.appendChild(headerSectionDivider);

  //************************************************************************ */

  //Complimentary dishes
  const complimentaryContainer = document.createElement("div");
  complimentaryContainer.classList.add("complimentary-container");
  menuContainer.appendChild(complimentaryContainer);

  const complimentaryTitleContainer = document.createElement("div");
  complimentaryTitleContainer.classList.add("title-container");
  complimentaryContainer.appendChild(complimentaryTitleContainer);

  const complimentaryTitle = document.createElement("h2");
  complimentaryTitle.classList.add("section-header");
  complimentaryTitle.textContent = "Amuse-Bouche";
  complimentaryTitleContainer.appendChild(complimentaryTitle);

  const complimentaryDivider = document.createElement("hr");
  complimentaryDivider.classList.add("complimentary-divider");
  complimentaryTitleContainer.appendChild(complimentaryDivider);

  const chouFleurTitle = document.createElement("h3");
  chouFleurTitle.classList.add("menu-item-title");
  chouFleurTitle.textContent = "Crème de Chou-Fleur";
  complimentaryContainer.appendChild(chouFleurTitle);

  const chouFleurDescription = document.createElement("p");
  chouFleurDescription.classList.add("menu-item-description");
  chouFleurDescription.textContent =
    "Cauliflower velouté with white truffle oil and crispy leek threads.";
  complimentaryContainer.appendChild(chouFleurDescription);

  //************************************************************************ */

  //Entrees
  const entreeContainer = document.createElement("div");
  entreeContainer.classList.add("entree-container");
  menuContainer.appendChild(entreeContainer);

  const entreeTitleContainer = document.createElement("div");
  entreeTitleContainer.classList.add("title-container");
  entreeContainer.appendChild(entreeTitleContainer);

  const entreeTitle = document.createElement("h2");
  entreeTitle.classList.add("section-header");
  entreeTitle.textContent = "Entrées (Starters)";
  entreeTitleContainer.appendChild(entreeTitle);

  const entreeDivider = document.createElement("hr");
  entreeDivider.classList.add("entree-divider");
  entreeTitleContainer.appendChild(entreeDivider);

  const tartelette = document.createElement("h3");
  tartelette.classList.add("menu-item-title");
  tartelette.textContent = "Tartelette de Chèvre & Miel";
  entreeContainer.appendChild(tartelette);

  const tarteletteDescription = document.createElement("p");
  tarteletteDescription.classList.add("menu-item-description");
  tarteletteDescription.textContent =
    "Warm goat cheese tart with lavender honey, toasted walnuts, and micro arugula.";
  entreeContainer.appendChild(tarteletteDescription);

  const saumon = document.createElement("h3");
  saumon.classList.add("menu-item-title");
  saumon.textContent = "Saumon Fumé Maison";
  entreeContainer.appendChild(saumon);

  const saumonDescription = document.createElement("p");
  saumonDescription.classList.add("menu-item-description");
  saumonDescription.textContent =
    "House-smoked salmon with lemon crème fraîche, dill oil, and fennel pollen.";
  entreeContainer.appendChild(saumonDescription);

  const veloute = document.createElement("h3");
  veloute.classList.add("menu-item-title");
  veloute.textContent = "Velouté de Courge Musquée";
  entreeContainer.appendChild(veloute);

  const velouteDescription = document.createElement("p");
  velouteDescription.classList.add("menu-item-description");
  velouteDescription.textContent =
    "Silky butternut squash soup with cardamom cream and a brown butter pecan crumble.";
  entreeContainer.appendChild(velouteDescription);

  //************************************************************************ */

  //Main Course Dishes
  const mainCourseContainer = document.createElement("div");
  mainCourseContainer.classList.add("main-course-container");
  menuContainer.appendChild(mainCourseContainer);

  const mainCourseTitleContainer = document.createElement("div");
  mainCourseTitleContainer.classList.add("title-container");
  mainCourseContainer.appendChild(mainCourseTitleContainer);

  const mainCourseTitle = document.createElement("h2");
  mainCourseTitle.classList.add("section-header");
  mainCourseTitle.textContent = "Plats Principaux (Main Courses)";
  mainCourseTitleContainer.appendChild(mainCourseTitle);

  const mainCourseDivider = document.createElement("hr");
  mainCourseDivider.classList.add("main-course-divider");
  mainCourseTitleContainer.appendChild(mainCourseDivider);

  const filet = document.createElement("h3");
  filet.classList.add("menu-item-title");
  filet.textContent = "Filet de Bœuf au Vin Rouge";
  mainCourseContainer.appendChild(filet);

  const filetDescription = document.createElement("p");
  filetDescription.classList.add("menu-item-description");
  filetDescription.textContent =
    "Prime filet mignon with a deep red wine reduction, caramelized shallots, and pommes fondantes.";
  mainCourseContainer.appendChild(filetDescription);

  const magret = document.createElement("h3");
  magret.classList.add("menu-item-title");
  magret.textContent = "Magret de Canard aux Figues";
  mainCourseContainer.appendChild(magret);

  const magretDescription = document.createElement("p");
  magretDescription.classList.add("menu-item-description");
  magretDescription.textContent =
    "Crispy duck breast with black mission fig compote, wild mushroom risotto, and port glaze.";
  mainCourseContainer.appendChild(magretDescription);

  const turbot = document.createElement("h3");
  turbot.classList.add("menu-item-title");
  turbot.textContent = "Turbot à la Provençale";
  mainCourseContainer.appendChild(turbot);

  const turbotDescription = document.createElement("p");
  turbotDescription.classList.add("menu-item-description");
  turbotDescription.textContent =
    "Pan-seared turbot with heirloom tomato confit, olive tapenade, and a saffron white wine sauce.";
  mainCourseContainer.appendChild(turbotDescription);

  const ravioles = document.createElement("h3");
  ravioles.classList.add("menu-item-title");
  ravioles.textContent = "Ravioles de Homard";
  mainCourseContainer.appendChild(ravioles);

  const raviolesDescription = document.createElement("p");
  raviolesDescription.classList.add("menu-item-description");
  raviolesDescription.textContent =
    "House-made lobster ravioli in a champagne-cream sauce, finished with chive oil and caviar pearls.";
  mainCourseContainer.appendChild(raviolesDescription);

  //************************************************************************ */

  // Desserts
  const dessertsContainer = document.createElement("div");
  dessertsContainer.classList.add("desserts-container");
  menuContainer.appendChild(dessertsContainer);

  const dessertsTitleContainer = document.createElement("div");
  dessertsTitleContainer.classList.add("title-container");
  dessertsContainer.appendChild(dessertsTitleContainer);

  const dessertsTitle = document.createElement("h2");
  dessertsTitle.classList.add("section-header");
  dessertsTitle.textContent = "Desserts";
  dessertsTitleContainer.appendChild(dessertsTitle);

  const dessertsDivider = document.createElement("hr");
  dessertsDivider.classList.add("desserts-divider");
  dessertsTitleContainer.appendChild(dessertsDivider);

  const fondant = document.createElement("h3");
  fondant.classList.add("menu-item-title");
  fondant.textContent = "Fondant au Chocolat Noir";
  dessertsContainer.appendChild(fondant);

  const fondantDescription = document.createElement("p");
  fondantDescription.classList.add("menu-item-description");
  fondantDescription.textContent =
    "Molten dark chocolate cake with raspberry coulis and crème fraîche.";
  dessertsContainer.appendChild(fondantDescription);

  const tarte = document.createElement("h3");
  tarte.classList.add("menu-item-title");
  tarte.textContent = "Tarte au Citron Basilic";
  dessertsContainer.appendChild(tarte);

  const tarteDescription = document.createElement("p");
  tarteDescription.classList.add("menu-item-description");
  tarteDescription.textContent =
    "Lemon-basil tart with brûléed meringue and a shortbread crust.";
  dessertsContainer.appendChild(tarteDescription);

  const creme = document.createElement("h3");
  creme.classList.add("menu-item-title");
  creme.textContent = "Crème Brûlée à la Lavande";
  dessertsContainer.appendChild(creme);

  const cremeDescription = document.createElement("p");
  cremeDescription.classList.add("menu-item-description");
  cremeDescription.textContent =
    "Classic vanilla custard infused with Provençal lavender, topped with a caramelized sugar crust.";
  dessertsContainer.appendChild(cremeDescription);

  //************************************************************************ */

  const footerSectionDivider = document.createElement("hr");
  footerSectionDivider.classList.add("section-divider");
  menuContainer.appendChild(footerSectionDivider);

  // Wine
  const wineContainer = document.createElement("div");
  wineContainer.classList.add("wine-container");
  menuContainer.appendChild(wineContainer);

  const wineTitleContainer = document.createElement("div");
  wineTitleContainer.classList.add("title-container");
  wineContainer.appendChild(wineTitleContainer);

  const wineTitle = document.createElement("h2");
  wineTitle.classList.add("section-header");
  wineTitle.textContent = "Wine Pairings Available Upon Request";
  wineTitleContainer.appendChild(wineTitle);

  const wineDivider = document.createElement("hr");
  wineDivider.classList.add("wine-divider");
  wineTitleContainer.appendChild(wineDivider);

  const wineDescription = document.createElement("p");
  wineDescription.classList.add("section-description");
  wineDescription.textContent =
    "Our sommelier is pleased to recommend wine pairings tailored to your selections.";
  wineContainer.appendChild(wineDescription);
}

export default loadMenuPage;
