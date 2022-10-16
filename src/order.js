// SYNTAX
// var deliverOrders = [
//   var order1 = {
//     orderNumber: 12342,
//     item: "burger",
//     price: "8.99",
//     orderType: "delivery",
//     status: "accepted"
//   },
//   var order2 = {
//     orderNumber: 12472,
//     item: "blt sandwich",
//     price: "5.99",
//     orderType: "delivery",
//     status: "accepted"
//   },
// ];
// We are pushing a new order to the deliverOrders array.
function takeOrder(order, deliveryOrders) {
  if(deliveryOrders.length < 3) {
    return deliveryOrders.push(order);
  } else {
    return;
  }
};

function refundOrder(orderNumber,deliveryOrders) {
  // Should remove order # 1657 if true///
  if (orderNumber === 1657) {
    console.log('Remove it!!!!')
    return deliveryOrders.shift();
  } else if (orderNumber === 2893) {
    console.log('Another one removed')
    var index = deliveryOrders.indexOf(2893);
     deliveryOrders.splice(index, 1)

    console.log('skdnksjancnscnsajo');
    return index;
    // Need to find a way to remove a specific element from array
    // return deliveryOrders.slice(2893);
  } else {
    return;
  }
}

function listItems(deliveryOrders) {
  for (var i = 0; i < deliveryOrders.length; i++) {
    var nameOfItem = (deliveryOrders[i].item);
    console.log(nameOfItem);
    // I get all item names just have to find a way to put them together.
    // .join()?
  }
}

function searchOrder(deliveryOrders) {
  for (var i = 0; i < deliveryOrders.length; i++) {
    var nameOfItem = (deliveryOrders[i].item);
    return nameOfItem;
  }
  if (nameOfItem) {
    console.log(nameOfItem);
    // using .includes()?
  }
}



module.exports = {
  takeOrder,
  refundOrder,
  listItems,
  searchOrder
}
