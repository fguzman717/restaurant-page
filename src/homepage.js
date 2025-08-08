function loadHomepage() {
  console.log("Home page is being imported!");

  const content = document.getElementById("content");
  content.innerHTML = "";

  // The restaurant name "Saveur"
  const restaurantName = document.createElement("h1");
  restaurantName.classList.add("restaurant-name");
  restaurantName.textContent = "Saveur";
  content.appendChild(restaurantName);

  // A picture of the restaurant's dining area
  const diningAreaPhoto = document.createElement("img");
  diningAreaPhoto.classList.add("dining-area-photo");
  diningAreaPhoto.src =
    "https://www.vmcdn.ca/f/files/localprofile/images/food-and-drink/even-coast-restaurant-46.jpg;w=960;h=640;mode=crop";
  diningAreaPhoto.alt = "Saveur Dining Area";
  content.appendChild(diningAreaPhoto);

  // A brief description of how wonderful the restaurant is
  const restaurantDescription = document.createElement("p");
  restaurantDescription.classList.add("restaurant-description");
  restaurantDescription.textContent =
    "Welcome to Saveur — where timeless flavors meet modern artistry. Nestled in the heart of the city, Saveur offers a refined take on contemporary French cuisine, blending seasonal, locally-sourced ingredients with global inspiration. Whether you're celebrating a special occasion or simply savoring an evening out, our intimate atmosphere, elegant plating, and curated wine list promise an experience as memorable as the dishes themselves. Join us and discover the true essence of flavor.";
  content.appendChild(restaurantDescription);
}

export default loadHomepage;
