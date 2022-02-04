var clicks = 0;
var cart_btn = document.querySelector(".cart");
var cart = document.querySelector(".shoping-cart");

cart_btn.addEventListener("click", () => {
  clicks += 1;
  if (clicks % 2 === 0) {
    cart.style.display = "none";
  } else {
    cart.style.display = "block";
  }
});
