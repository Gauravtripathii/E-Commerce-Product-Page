var items = 0;
var item_display = document.querySelector(".number");
var plus = document.querySelector(".plus");
var minus = document.querySelector(".minus");
var add_to_cart = document.querySelector(".add_btn");

plus.addEventListener("click", () => {
  items += 1;
  item_display.innerHTML = items;
});

minus.addEventListener("click", () => {
  if (items > 0) {
    items -= 1;
    item_display.innerHTML = items;
  }
});


var cart_items = document.querySelector('.items');
var cart_total = document.querySelector('.total');
var product_details = document.querySelector(".products");
var empty_msg = document.querySelector(".products-e");

add_to_cart.addEventListener("click", () => {
  empty_msg.style.display = 'none';
  product_details.style.display = 'block';
  total = items;
  cart_items.innerHTML = total;
  cart_total.innerHTML = '$'+(total*125)+'.00';
  item_display.innerHTML = 0;
});