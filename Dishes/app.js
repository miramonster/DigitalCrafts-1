const dishesUnorderedList = document.getElementById("dishes_ul");
const allDishesButton = document.getElementById("allDishesButton");
const starterDishesButton = document.getElementById("starterDishesButton");
const entreeDishesButton = document.getElementById("entreeDishesButton");
const dessertDishesButton = document.getElementById("dessertDishesButton");

function MapDishesToListItems(dishes) {
  dishesUnorderedList.innerHTML = dishes.map(dish => 
    `<li>
      <img src=${dish.imageURL} class='dish_image'></img>
      <h3>${dish.title} - $${dish.price}</h4>
      <h5 class='dish_description'>${dish.description}</h5>
    </li>`).join('') 
};

allDishesButton.addEventListener("click", () => MapDishesToListItems(dishes));
starterDishesButton.addEventListener("click", () => MapDishesToListItems(dishes.filter(dish => dish.course == "Starters")));
entreeDishesButton.addEventListener("click", () => MapDishesToListItems(dishes.filter(dish => dish.course == "Entrees")));
dessertDishesButton.addEventListener("click", () => MapDishesToListItems(dishes.filter(dish => dish.course == "Desserts")));

MapDishesToListItems(dishes);