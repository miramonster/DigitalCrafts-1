// dishes unordered list
const dishesUL = document.getElementById("dishes_ul");

// four buttons for dish filtering
const allDishesButton = document.getElementById("allDishesButton");
const starterDishesButton = document.getElementById("starterDishesButton");
const entreeDishesButton = document.getElementById("entreeDishesButton");
const dessertDishesButton = document.getElementById("dessertDishesButton");

// maps a passed in array of dishes to list items for the dishes unordered list
function MapDishesToListItems(dishes) {
    dishesUL.innerHTML = dishes.map(function(dish) {
      return `<li>
            <img src=${dish.imageURL} class='dish_image'></img>
            <h3>${dish.title} - $${dish.price}</h4>
            <h5 class='dish_description'>${dish.description}</h5>
        </li>`
  }).join('') 
};

// click events on the four buttons to filter to specific courses
allDishesButton.addEventListener("click", () => MapDishesToListItems(dishes));
starterDishesButton.addEventListener("click", () => MapDishesToListItems(dishes.filter(dish => dish.course == "Starters")));
entreeDishesButton.addEventListener("click", () => MapDishesToListItems(dishes.filter(dish => dish.course == "Entrees")));
dessertDishesButton.addEventListener("click", () => MapDishesToListItems(dishes.filter(dish => dish.course == "Desserts")));

// show all courses when page is first loaded
MapDishesToListItems(dishes);
