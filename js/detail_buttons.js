var items = 0;
var item_display = document.querySelector(".number");
var plus = document.querySelector(".plus");
var minus = document.querySelector(".minus");

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
