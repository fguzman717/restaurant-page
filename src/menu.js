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

  const menuHeading = document.createElement("h1");
  menuHeading.classList.add("menu-header");
  menuHeading.textContent = "Saveur";
  menuContainer.appendChild(menuHeading);

  const menuTitle = document.createElement("h3");
  menuTitle.classList.add("menu-header");
  menuTitle.textContent = "Signature Menu";
  menuContainer.appendChild(menuTitle);

  const menuDescription = document.createElement("p");
  menuDescription.classList.add("menu-header");
  menuDescription.textContent =
    "An exploration of refined flavors, seasonal ingredients, and timeless French technique.";
  menuContainer.appendChild(menuDescription);

  //************************************************************************ */

  //Complimentary dishes
  const complimentaryContainer = document.createElement("div");
  complimentaryContainer.classList.add("complimentary-container");
  menuContainer.appendChild(complimentaryContainer);

  const complimentaryTitle = document.createElement("h3");
  complimentaryTitle.classList.add("complimentary");
  complimentaryTitle.textContent = "Amuse-Bouche";
  complimentaryContainer.appendChild(complimentaryTitle);

  const complimentaryPhoto = document.createElement("img");
  complimentaryPhoto.classList.add("complimentary");
  complimentaryPhoto.src = complimentaryHero;
  complimentaryPhoto.alt = "Crème de Chou-Fleur";
  complimentaryContainer.appendChild(complimentaryPhoto);

  const complimentaryDescription = document.createElement("p");
  complimentaryDescription.classList.add("complimentary");
  complimentaryDescription.textContent = "A small bite to begin your journey";
  complimentaryContainer.appendChild(complimentaryDescription);

  const chouFleurTitle = document.createElement("h5");
  chouFleurTitle.classList.add("complimentary");
  chouFleurTitle.textContent = "Crème de Chou-Fleur";
  complimentaryContainer.appendChild(chouFleurTitle);

  const chouFleurDescription = document.createElement("p");
  chouFleurDescription.classList.add("complimentary");
  chouFleurDescription.textContent =
    "Cauliflower velouté with white truffle oil and crispy leek threads.";
  complimentaryContainer.appendChild(chouFleurDescription);

  //************************************************************************ */

  //Entrees
  const entreeContainer = document.createElement("div");
  entreeContainer.classList.add("entree-container");
  menuContainer.appendChild(entreeContainer);

  const entreeTitle = document.createElement("h3");
  entreeTitle.classList.add("entree");
  entreeTitle.textContent = "Entrées (Starters)";
  entreeContainer.appendChild(entreeTitle);

  const entreePhoto = document.createElement("img");
  entreePhoto.classList.add("entree");
  entreePhoto.src = entreeHero;
  entreePhoto.alt = "Tartelette de Chèvre & Miel";
  entreeContainer.appendChild(entreePhoto);

  const tartelette = document.createElement("h5");
  tartelette.classList.add("entree");
  tartelette.textContent = "Tartelette de Chèvre & Miel";
  entreeContainer.appendChild(tartelette);

  const tarteletteDescription = document.createElement("p");
  tarteletteDescription.classList.add("entree");
  tarteletteDescription.textContent =
    "Warm goat cheese tart with lavender honey, toasted walnuts, and micro arugula.";
  entreeContainer.appendChild(tarteletteDescription);

  const saumon = document.createElement("h5");
  saumon.classList.add("entree");
  saumon.textContent = "Saumon Fumé Maison";
  entreeContainer.appendChild(saumon);

  const saumonDescription = document.createElement("p");
  saumonDescription.classList.add("entree");
  saumonDescription.textContent =
    "House-smoked salmon with lemon crème fraîche, dill oil, and fennel pollen.";
  entreeContainer.appendChild(saumonDescription);

  const veloute = document.createElement("h5");
  veloute.classList.add("entree");
  veloute.textContent = "Velouté de Courge Musquée";
  entreeContainer.appendChild(veloute);

  const velouteDescription = document.createElement("p");
  velouteDescription.classList.add("entree");
  velouteDescription.textContent =
    "Silky butternut squash soup with cardamom cream and a brown butter pecan crumble.";
  entreeContainer.appendChild(velouteDescription);

  //************************************************************************ */

  //Main Course Dishes
  const mainCourseContainer = document.createElement("div");
  mainCourseContainer.classList.add("main-course-container");
  menuContainer.appendChild(mainCourseContainer);

  const mainCourseTitle = document.createElement("h3");
  mainCourseTitle.classList.add("main-course");
  mainCourseTitle.textContent = "Plats Principaux (Main Courses)";
  mainCourseContainer.appendChild(mainCourseTitle);

  const filet = document.createElement("h5");
  filet.classList.add("main-course");
  filet.textContent = "Filet de Bœuf au Vin Rouge";
  mainCourseContainer.appendChild(filet);

  const filetDescription = document.createElement("p");
  filetDescription.classList.add("main-course");
  filetDescription.textContent =
    "Prime filet mignon with a deep red wine reduction, caramelized shallots, and pommes fondantes.";
  mainCourseContainer.appendChild(filetDescription);

  const mainCoursePhoto = document.createElement("img");
  mainCoursePhoto.classList.add("main-course");
  mainCoursePhoto.src = mainHero;
  mainCoursePhoto.alt = "Magret de Canard aux Figues";
  mainCourseContainer.appendChild(mainCoursePhoto);

  const magret = document.createElement("h5");
  magret.classList.add("main-course");
  magret.textContent = "Magret de Canard aux Figues";
  mainCourseContainer.appendChild(magret);

  const magretDescription = document.createElement("p");
  magretDescription.classList.add("main-course");
  magretDescription.textContent =
    "Crispy duck breast with black mission fig compote, wild mushroom risotto, and port glaze.";
  mainCourseContainer.appendChild(magretDescription);

  const turbot = document.createElement("h5");
  turbot.classList.add("main-course");
  turbot.textContent = "Turbot à la Provençale";
  mainCourseContainer.appendChild(turbot);

  const turbotDescription = document.createElement("p");
  turbotDescription.classList.add("main-course");
  turbotDescription.textContent =
    "Pan-seared turbot with heirloom tomato confit, olive tapenade, and a saffron white wine sauce.";
  mainCourseContainer.appendChild(turbotDescription);

  const ravioles = document.createElement("h5");
  ravioles.classList.add("main-course");
  ravioles.textContent = "Ravioles de Homard";
  mainCourseContainer.appendChild(ravioles);

  const raviolesDescription = document.createElement("p");
  raviolesDescription.classList.add("main-course");
  raviolesDescription.textContent =
    "House-made lobster ravioli in a champagne-cream sauce, finished with chive oil and caviar pearls.";
  mainCourseContainer.appendChild(raviolesDescription);

  //************************************************************************ */

  //Cheese Course
  const fromageContainer = document.createElement("div");
  fromageContainer.classList.add("fromages-container");
  menuContainer.appendChild(fromageContainer);

  const fromageTitle = document.createElement("h3");
  fromageTitle.classList.add("fromage");
  fromageTitle.textContent = "Fromages (Cheese Course)";
  fromageContainer.appendChild(fromageTitle);

  const fromageDescription = document.createElement("p");
  fromageDescription.classList.add("fromage");
  fromageDescription.textContent =
    "A rotating selection of artisanal French and European cheeses, served with fig jam and toasted baguette.";
  fromageContainer.appendChild(fromageDescription);

  //************************************************************************ */

  // Desserts
  const dessertsContainer = document.createElement("div");
  dessertsContainer.classList.add("desserts-container");
  menuContainer.appendChild(dessertsContainer);

  const dessertsTitle = document.createElement("h3");
  dessertsTitle.classList.add("desserts");
  dessertsTitle.textContent = "Desserts";
  dessertsContainer.appendChild(dessertsTitle);

  const dessertsPhoto = document.createElement("img");
  dessertsPhoto.classList.add("desserts");
  dessertsPhoto.src = dessertsHero;
  dessertsPhoto.alt = "Fondant au Chocolat Noir";
  dessertsContainer.appendChild(dessertsPhoto);

  const fondant = document.createElement("h5");
  fondant.classList.add("desserts");
  fondant.textContent = "Fondant au Chocolat Noir";
  dessertsContainer.appendChild(fondant);

  const fondantDescription = document.createElement("p");
  fondantDescription.classList.add("desserts");
  fondantDescription.textContent =
    "Molten dark chocolate cake with raspberry coulis and crème fraîche.";
  dessertsContainer.appendChild(fondantDescription);

  const tarte = document.createElement("h5");
  tarte.classList.add("desserts");
  tarte.textContent = "Tarte au Citron Basilic";
  dessertsContainer.appendChild(tarte);

  const tarteDescription = document.createElement("p");
  tarteDescription.classList.add("desserts");
  tarteDescription.textContent =
    "Lemon-basil tart with brûléed meringue and a shortbread crust.";
  dessertsContainer.appendChild(tarteDescription);

  const creme = document.createElement("h5");
  creme.classList.add("desserts");
  creme.textContent = "Crème Brûlée à la Lavande";
  dessertsContainer.appendChild(creme);

  const cremeDescription = document.createElement("p");
  cremeDescription.classList.add("desserts");
  cremeDescription.textContent =
    "Classic vanilla custard infused with Provençal lavender, topped with a caramelized sugar crust.";
  dessertsContainer.appendChild(cremeDescription);

  //************************************************************************ */

  // Wine
  const wineContainer = document.createElement("div");
  wineContainer.classList.add("wine-container");
  menuContainer.appendChild(wineContainer);

  const wineTitle = document.createElement("h3");
  wineTitle.classList.add("wine");
  wineTitle.textContent = "Wine Pairings Available Upon Request";
  wineContainer.appendChild(wineTitle);

  const wineDescription = document.createElement("p");
  wineDescription.classList.add("wine");
  wineDescription.textContent =
    "Our sommelier is pleased to recommend wine pairings tailored to your selections.";
  wineContainer.appendChild(wineDescription);
}

export default loadMenuPage;

// 💡 Pro Tip:
// Use full-width images as section dividers, or feature images in subtle hover effects (e.g., the image appears when you hover over the dish name).

// 🎨 2. Design Tips to Elevate Your Menu Aesthetically
// 🖋️ Typography
// Use an elegant serif font for dish names (e.g., Playfair Display, Didot).

// Use a clean sans-serif font for descriptions (e.g., Open Sans, Lato) to keep it readable.

// 🧾 Menu Layout
// Use ample white space — don’t crowd your text.

// Group items with subtle dividers or section titles in gold, charcoal, or soft cream.

// Emphasize dish names with bold or slightly larger text, and keep descriptions lighter or italicized.

// 🌟 Highlight Signatures or Staff Picks
// Add small icons or badges (e.g., ✦ Chef's Signature, 🥂 Sommelier’s Pick) to subtly guide attention.

// 🎨 Color Palette
// Stick to a minimal and refined palette:

// Background: soft cream, matte white, or slate gray.

// Accents: gold, navy, deep burgundy, or forest green.

// Avoid too many colors — restraint is luxury.

// 📱 Mobile Optimization
// Make sure the menu is responsive — it should look just as beautiful on a phone as on desktop. Stack sections vertically and keep photos scaled appropriately.

// ✨ Optional Extras
// Downloadable PDF version (with branding): Great for press kits or sharing.

// Interactive hover menus (on websites): Hover to show a photo or short backstory.

// Wine Pairing Suggestions under each dish (in small, italicized text).
