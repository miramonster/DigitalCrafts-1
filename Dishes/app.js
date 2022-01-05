const dishesUL = document.getElementById("dishesList");
const allDishesButton = document.getElementById("allDishesButton");
const starterDishesButton = document.getElementById("starterDishesButton");
const entreeDishesButton = document.getElementById("entreeDishesButton");
const dessertDishesButton = document.getElementById("dessertDishesButton");

function CreateDishesListItems(dishes) {
  dishesUL.innerHTML = dishes.map(function(dish) {
      return `<li>
        <h3>${dish.title}</h3>
        <h4>${dish.price}</h4>
        <h5>${dish.description}</h4>
        <img src=${dish.imageURL} class='dish_image'></img>
        </li>`
  })
};

allDishesButton.addEventListener("click", function () {
  CreateDishesListItems(dishes);
});

starterDishesButton.addEventListener("click", function() {
    CreateDishesListItems(dishes.filter(dish => dish.course == "Starters"))
});

entreeDishesButton.addEventListener("click", function () {
    CreateDishesListItems(dishes.filter(dish => dish.course == "Entrees"))
});

dessertDishesButton.addEventListener("click", function () {
    CreateDishesListItems(dishes.filter(dish => dish.course == "Desserts"))
});

CreateDishesListItems(dishes);