import chefImage from "./assets/chef.jpg";
import managerImage from "./assets/manager.jpg";
import maitreDImage from "./assets/maitred.jpg";

function loadContactPage() {
  console.log("Contact page is being imported!");

  const content = document.getElementById("content");
  content.innerHTML = "";

  const contactHeaderContainer = document.createElement("div");
  contactHeaderContainer.classList.add("contact-header-container");
  content.appendChild(contactHeaderContainer);

  const contactTitle = document.createElement("h1");
  contactTitle.classList.add("contact-header");
  contactTitle.textContent = "Contact Us";
  contactHeaderContainer.appendChild(contactTitle);

  const contactIntro = document.createElement("p");
  contactIntro.classList.add("contact-header");
  contactIntro.textContent =
    "Have a question or request? Please reach out to the appropriate member of our team:";
  contactHeaderContainer.appendChild(contactIntro);

  // Contact Information for the Chef
  const chefContainer = document.createElement("div");
  chefContainer.classList.add("chef-container");
  content.appendChild(chefContainer);

  const chefName = document.createElement("h3");
  chefName.classList.add("chef-info");
  chefName.textContent = "Lucien Marais - Head Chef of Saveur";
  chefContainer.appendChild(chefName);

  const chefPhoto = document.createElement("img");
  chefPhoto.classList.add("chef-info");
  chefPhoto.src = chefImage;
  chefPhoto.alt = "Lucien Marais";
  chefContainer.appendChild(chefPhoto);

  const chefPhone = document.createElement("p");
  chefPhone.classList.add("chef-info");
  chefPhone.textContent = "(555) 555-2433";
  chefContainer.appendChild(chefPhone);

  const chefContactDescription = document.createElement("p");
  chefContactDescription.classList.add("chef-info");
  chefContactDescription.textContent =
    "For culinary inquiries, tasting menu requests, or collaborations related to cuisine.";
  chefContainer.appendChild(chefContactDescription);

  // Contact Information for the Manager
  const managerContainer = document.createElement("div");
  managerContainer.classList.add("manager-container");
  content.appendChild(managerContainer);

  const managerName = document.createElement("h3");
  managerName.classList.add("manager-info");
  managerName.textContent = "Elise Fontaine - General Manager of Saveur";
  managerContainer.appendChild(managerName);

  const managerPhoto = document.createElement("img");
  managerPhoto.classList.add("manager-info");
  managerPhoto.src = managerImage;
  managerPhoto.alt = "Elise Fontaine";
  managerContainer.appendChild(managerPhoto);

  const managerPhone = document.createElement("p");
  managerPhone.classList.add("manager-info");
  managerPhone.textContent = "(555) 555-2677";
  managerContainer.appendChild(managerPhone);

  const managerContactDescription = document.createElement("p");
  managerContactDescription.classList.add("manager-info");
  managerContactDescription.textContent =
    "For reservations, private events, press inquiries, or general restaurant operations.";
  managerContainer.appendChild(managerContactDescription);

  // Contact Information for the Maitre d'
  const maitreDContainer = document.createElement("div");
  maitreDContainer.classList.add("maitre-d-container");
  content.appendChild(maitreDContainer);

  const maitreDName = document.createElement("h3");
  maitreDName.classList.add("maitre-d-info");
  maitreDName.textContent = "Julien Moreau - Maître d' of Saveur";
  maitreDContainer.appendChild(maitreDName);

  const maitreDPhoto = document.createElement("img");
  maitreDPhoto.classList.add("maitre-d-info");
  maitreDPhoto.src = maitreDImage;
  maitreDPhoto.alt = "Julien Moreau";
  maitreDContainer.appendChild(maitreDPhoto);

  const maitreDPhone = document.createElement("p");
  maitreDPhone.classList.add("maitre-d-info");
  maitreDPhone.textContent = "(555) 737-3783";
  maitreDContainer.appendChild(maitreDPhone);

  const maitreDContactDescription = document.createElement("p");
  maitreDContactDescription.classList.add("maitre-d-info");
  maitreDContactDescription.textContent =
    "For special seating requests, guest accommodations, or VIP dining experiences.";
  maitreDContainer.appendChild(maitreDContactDescription);
}

export default loadContactPage;
