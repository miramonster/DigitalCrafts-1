// unordered list for holding dishes list items
const dishesUL = document.getElementById("dishesList");

// four buttons for filtering dishes
const allDishesButton = document.getElementById("allDishesButton");
const starterDishesButton = document.getElementById("starterDishesButton");
const entreeDishesButton = document.getElementById("entreeDishesButton");
const dessertDishesButton = document.getElementById("dessertDishesButton");

// takes in an array of dishes and maps it to dishes list items for the dishes unordered list
function MapDishesToListItems(dishes) {
    dishesUL.innerHTML = dishes.map(function(dish) {
      return `<li>
        <div>        
            <img src=${dish.imageURL} class='dish_image'></img>
            <h3>${dish.title} - $${dish.price}</h4>
            <h5 class='dish_description'>${dish.description}</h5>
        </div>        
        </li>`
  })
};

// add click events to the four buttons to filter the dishes to the desired course
allDishesButton.addEventListener("click", () => MapDishesToListItems(dishes));

starterDishesButton.addEventListener("click", () => MapDishesToListItems(dishes.filter(dish => dish.course == "Starters")));

entreeDishesButton.addEventListener("click", () => MapDishesToListItems(dishes.filter(dish => dish.course == "Entrees")));

dessertDishesButton.addEventListener("click", () => MapDishesToListItems(dishes.filter(dish => dish.course == "Desserts")));

// show all the dishes initially
MapDishesToListItems(dishes);