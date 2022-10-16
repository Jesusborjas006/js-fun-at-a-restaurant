function createRestaurant(restaurant,menus) {
  var restaurant = {
    name: restaurant,
    menus: {
      menu: menus,
    },
  }
  return restaurant;
}

function addMenuItem() {

}

function removeMenuItem() {
  
}

module.exports = {
  createRestaurant,
  addMenuItem,
  removeMenuItem
}
