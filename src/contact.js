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
  contactTitle.classList.add("contact-title");
  contactTitle.textContent = "Contact Us";
  contactHeaderContainer.appendChild(contactTitle);

  const contactIntro = document.createElement("p");
  contactIntro.classList.add("contact-intro");
  contactIntro.textContent =
    "Have a question or request? Please reach out to the appropriate member of our team:";
  contactHeaderContainer.appendChild(contactIntro);

  const teamContainer = document.createElement("div");
  teamContainer.classList.add("team-container");
  content.appendChild(teamContainer);

  // Contact Information for the Chef
  const chefContainer = document.createElement("div");
  chefContainer.classList.add("chef-container");
  teamContainer.appendChild(chefContainer);

  const chefPhoto = document.createElement("img");
  chefPhoto.classList.add("team-info");
  chefPhoto.src = chefImage;
  chefPhoto.alt = "Lucien Marais";
  chefContainer.appendChild(chefPhoto);

  const chefName = document.createElement("h2");
  chefName.classList.add("team-title");
  chefName.textContent = "Lucien Marais";
  chefContainer.appendChild(chefName);

  const chefTitle = document.createElement("h3");
  chefTitle.classList.add("team-title");
  chefTitle.textContent = "Head Chef of Saveur";
  chefContainer.appendChild(chefTitle);

  const chefContactDescription = document.createElement("p");
  chefContactDescription.classList.add("team-info");
  chefContactDescription.textContent =
    "For culinary inquiries, tasting menu requests, or collaborations related to cuisine.";
  chefContainer.appendChild(chefContactDescription);

  const chefPhone = document.createElement("p");
  chefPhone.classList.add("team-phone");
  chefPhone.textContent = "(555) 555-2433";
  chefContainer.appendChild(chefPhone);

  // Contact Information for the Manager
  const managerContainer = document.createElement("div");
  managerContainer.classList.add("manager-container");
  teamContainer.appendChild(managerContainer);

  const managerPhoto = document.createElement("img");
  managerPhoto.classList.add("team-info");
  managerPhoto.src = managerImage;
  managerPhoto.alt = "Elise Fontaine";
  managerContainer.appendChild(managerPhoto);

  const managerName = document.createElement("h2");
  managerName.classList.add("team-title");
  managerName.textContent = "Elise Fontaine";
  managerContainer.appendChild(managerName);

  const managerTitle = document.createElement("h3");
  managerTitle.classList.add("team-title");
  managerTitle.textContent = "General Manager of Saveur";
  managerContainer.appendChild(managerTitle);

  const managerContactDescription = document.createElement("p");
  managerContactDescription.classList.add("team-info");
  managerContactDescription.textContent =
    "For reservations, private events, press inquiries, or general restaurant operations.";
  managerContainer.appendChild(managerContactDescription);

  const managerPhone = document.createElement("p");
  managerPhone.classList.add("team-phone");
  managerPhone.textContent = "(555) 555-2677";
  managerContainer.appendChild(managerPhone);

  // Contact Information for the Maitre d'
  const maitreDContainer = document.createElement("div");
  maitreDContainer.classList.add("maitre-d-container");
  teamContainer.appendChild(maitreDContainer);

  const maitreDPhoto = document.createElement("img");
  maitreDPhoto.classList.add("team-info");
  maitreDPhoto.src = maitreDImage;
  maitreDPhoto.alt = "Julien Moreau";
  maitreDContainer.appendChild(maitreDPhoto);

  const maitreDName = document.createElement("h2");
  maitreDName.classList.add("team-title");
  maitreDName.textContent = "Julien Moreau";
  maitreDContainer.appendChild(maitreDName);

  const maitreDTitle = document.createElement("h3");
  maitreDTitle.classList.add("team-title");
  maitreDTitle.textContent = "Maître d' of Saveur";
  maitreDContainer.appendChild(maitreDTitle);

  const maitreDContactDescription = document.createElement("p");
  maitreDContactDescription.classList.add("team-info");
  maitreDContactDescription.textContent =
    "For special seating requests, guest accommodations, or VIP dining experiences.";
  maitreDContainer.appendChild(maitreDContactDescription);

  const maitreDPhone = document.createElement("p");
  maitreDPhone.classList.add("team-phone");
  maitreDPhone.textContent = "(555) 737-3783";
  maitreDContainer.appendChild(maitreDPhone);
}

export default loadContactPage;
