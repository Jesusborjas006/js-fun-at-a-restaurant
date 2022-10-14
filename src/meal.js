function nameMenuItem(food) {
  var menuItemName = `Delicious ${food}`;
  return menuItemName;
}

function createMenuItem(name, price, type) {
  var menuItem = {
    name: name,
    price: price,
    type: type,
  }

return menuItem
}

var ingredients = []

function addIngredients(ingredient, ingredients) {
  ingredients.push(ingredient);
  return ingredients;

  // if (/*ingredient has more than one  */) {
  //   // remove the extra item
  //   ingredients.pop();
  // } else {
  //   ingredients.push(ingredient);
  //   return ingredients;
  }

  function formatPrice(price) {
    var fullPrice = `$${price}`
    return fullPrice
  };

  function decreasePrice(value) {
    var discount = value * (10/100);
    var finalPrice = value - discount;
    return finalPrice;
  }

  function createRecipe(title, ingredient, menuItemType) {
    var recipe = {
      title: title,
      ingredients: ingredient,
      type: menuItemType,
    };
    return recipe
  }




module.exports = {
  nameMenuItem,
  createMenuItem,
  addIngredients,
  formatPrice,
  decreasePrice,
  createRecipe
}
