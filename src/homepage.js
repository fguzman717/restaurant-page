import parisMap from "./assets/paris-france-map.png";

function loadHomepage() {
  console.log("Home page is being imported!");

  const content = document.getElementById("content");
  content.innerHTML = "";

  // The restaurant name "Saveur"
  const restaurantNameContainer = document.createElement("div");
  restaurantNameContainer.classList.add("restaurant-name-container");
  content.appendChild(restaurantNameContainer);

  const restaurantName = document.createElement("h1");
  restaurantName.classList.add("restaurant-name");
  restaurantName.textContent = "Saveur";
  restaurantNameContainer.appendChild(restaurantName);

  // A brief description of how wonderful the restaurant is
  const restaurantDescriptionContainer = document.createElement("div");
  restaurantDescriptionContainer.classList.add(
    "restaurant-description-container"
  );
  content.appendChild(restaurantDescriptionContainer);

  const restaurantDescription = document.createElement("p");
  restaurantDescription.classList.add("restaurant-description");
  restaurantDescription.textContent =
    "Where timeless flavors meet modern artistry. Nestled in the heart of the city, Saveur offers a refined take on contemporary French cuisine, blending seasonal, locally-sourced ingredients with global inspiration. Whether you're celebrating a special occasion or simply savoring an evening out, our intimate atmosphere, elegant plating, and curated wine list promise an experience as memorable as the dishes themselves. Join us and discover the true essence of flavor.";
  restaurantDescriptionContainer.appendChild(restaurantDescription);

  // Hours of Operation and Location Address Section
  const hoursLocationContainer = document.createElement("div");
  hoursLocationContainer.classList.add("hours-location-container");
  content.appendChild(hoursLocationContainer);

  // Hours of Operation
  const hoursSection = document.createElement("div");
  hoursSection.classList.add("hours-section");
  hoursLocationContainer.appendChild(hoursSection);

  // Lunch
  const lunchHours = document.createElement("div");
  lunchHours.classList.add("lunch-hours");
  hoursSection.appendChild(lunchHours);

  const lunchHoursTitle = document.createElement("h3");
  lunchHoursTitle.classList.add("lunch-hours-title");
  lunchHoursTitle.textContent = "Lunch";
  lunchHours.appendChild(lunchHoursTitle);

  const lunchWeekday = document.createElement("p");
  lunchWeekday.classList.add("lunch-hours");
  lunchWeekday.textContent = "Tuesday - Friday : 12:00 PM - 2:30 PM";
  lunchHours.appendChild(lunchWeekday);

  const lunchWeekend = document.createElement("p");
  lunchWeekend.classList.add("lunch-hours");
  lunchWeekend.textContent = "Saturday & Sunday : 12:00 PM - 3:00 PM";
  lunchHours.appendChild(lunchWeekend);

  // Dinner
  const dinnerHours = document.createElement("div");
  dinnerHours.classList.add("dinner-hours");
  hoursSection.appendChild(dinnerHours);

  const dinnerHoursTitle = document.createElement("h3");
  dinnerHoursTitle.classList.add("dinner-hours-title");
  dinnerHoursTitle.textContent = "Dinner";
  dinnerHours.appendChild(dinnerHoursTitle);

  const dinnerTuesToThurs = document.createElement("p");
  dinnerTuesToThurs.classList.add("dinner-hours");
  dinnerTuesToThurs.textContent = "Tuesday - Thursday : 6:00 PM - 10:00 PM";
  dinnerHours.appendChild(dinnerTuesToThurs);

  const dinnerFriToSat = document.createElement("p");
  dinnerFriToSat.classList.add("dinner-hours");
  dinnerFriToSat.textContent = "Friday - Saturday : 6:00 PM - 11:00 PM";
  dinnerHours.appendChild(dinnerFriToSat);

  const dinnerSunday = document.createElement("p");
  dinnerSunday.classList.add("dinner-hours");
  dinnerSunday.textContent = "Sunday : 6:00 PM - 9:30 PM";
  dinnerHours.appendChild(dinnerSunday);

  // Days Closed
  const closedMondays = document.createElement("div");
  closedMondays.classList.add("closed");
  hoursSection.appendChild(closedMondays);

  const closedMondaysTitle = document.createElement("h3");
  closedMondaysTitle.classList.add("closed");
  closedMondaysTitle.textContent = "Closed Mondays";
  closedMondays.appendChild(closedMondaysTitle);

  // Location of Restaurant
  const locationSection = document.createElement("div");
  locationSection.classList.add("location-section");
  hoursLocationContainer.appendChild(locationSection);

  const locationTitle = document.createElement("h3");
  locationTitle.classList.add("location-title");
  locationTitle.textContent = "Visit Us";
  locationSection.appendChild(locationTitle);

  const streetAddress = document.createElement("p");
  streetAddress.classList.add("location");
  streetAddress.textContent = "128 Rue de la Lumière";
  locationSection.appendChild(streetAddress);

  const cityAddress = document.createElement("p");
  cityAddress.classList.add("location");
  cityAddress.textContent = "Paris, France 75004";
  locationSection.appendChild(cityAddress);

  const locationMap = document.createElement("img");
  locationMap.classList.add("location");
  locationMap.src = parisMap;
  locationMap.alt = "Map of Paris, France";
  locationSection.appendChild(locationMap);
}

export default loadHomepage;
