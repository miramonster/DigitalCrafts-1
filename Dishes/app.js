const dishesUL = document.getElementById("dishesList");
const allDishesButton = document.getElementById("allDishesButton");
const starterDishesButton = document.getElementById("starterDishesButton");
const entreeDishesButton = document.getElementById("entreeDishesButton");
const dessertDishesButton = document.getElementById("dessertDishesButton");

function CreateDishListItems(dishes) {
  let dishItems = dishes.map(function(dish) {
      return `<li>
        <h3>${dish.title}</h3>
        <h4>${dish.price}</h4>
        <h5>${dish.description}</h4>
        <img src=${dish.imageURL} class='dish_image'></img>
        </li>`
  })

  dishesUL.innerHTML = dishItems;
}

allDishesButton.addEventListener("click", function () {
  CreateDishListItems(dishes);
});

starterDishesButton.addEventListener("click", function () {
  CreateDishListItems(
    dishes.filter(function (dish) {
      if (dish.course == "Starters") {
        return dish;
      }
    })
  );
});

entreeDishesButton.addEventListener("click", function () {
  CreateDishListItems(
    dishes.filter(function (dish) {
      if (dish.course == "Entrees") {
        return dish;
      }
    })
  );
});

dessertDishesButton.addEventListener("click", function () {
  CreateDishListItems(
    dishes.filter(function (dish) {
      if (dish.course == "Desserts") {
        return dish;
      }
    })
  );
});

CreateDishListItems(dishes);