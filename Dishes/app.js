// unordered list for holding dishes list items
const dishesUL = document.getElementById("dishesList");

// 4 buttons for filtering dishes
const allDishesButton = document.getElementById("allDishesButton");
const starterDishesButton = document.getElementById("starterDishesButton");
const entreeDishesButton = document.getElementById("entreeDishesButton");
const dessertDishesButton = document.getElementById("dessertDishesButton");

// takes in an array of dishes and maps it to dishes list items for the dishes unordered list
function MapDishesToListItems(dishes) {
    dishesUL.innerHTML = dishes.map(function(dish) {
      return `<li>
        <h3>${dish.title}</h3>
        <h4>${dish.price}</h4>
        <h5>${dish.description}</h4>
        <img src=${dish.imageURL} class='dish_image'></img>
        </li>`
  })
};

// 4 click events to filter the dishes to the desired option and display them
allDishesButton.addEventListener("click", () => MapDishesToListItems(dishes));

starterDishesButton.addEventListener("click", () => MapDishesToListItems(dishes.filter(dish => dish.course == "Starters")));

entreeDishesButton.addEventListener("click", () => MapDishesToListItems(dishes.filter(dish => dish.course == "Entrees")));

dessertDishesButton.addEventListener("click", () => MapDishesToListItems(dishes.filter(dish => dish.course == "Desserts")));

// show all the dishes initially
MapDishesToListItems(dishes);