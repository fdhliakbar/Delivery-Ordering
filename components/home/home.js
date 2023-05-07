//
const navbarNav = document.querySelector(".navbar-nav");

//When the hamburgerMenu is clicked, run this command
document.querySelector("#hamburger-menu").onclick = () => {
  navbarNav.classList.toggle("active");
};

//toogle class active for the search form
const searchForm = document.querySelector(".search-form");
const searchBox = document.querySelector("#search-box");

document.querySelector("#search-button").onclick = (e) => {
  searchForm.classList.toggle("active");
  searchBox.focus();
  e.preventDefault();
};

// Toggle class active untuk shopping cart
const shoppingCart = document.querySelector(".shopping-cart");
document.querySelector("#shopping-cart-button").onclick = (e) => {
  shoppingCart.classList.toggle("active");
  e.preventDefault();
};

//Click outside the element
const hamburgerMenuOutside = document.querySelector("#hamburger-menu");
const searchButtonOutside = document.querySelector("#search-button");
const shoppingCartOutside = document.querySelector("#shopping-cart");

document.addEventListener("click", function (e) {
  if (
    !hamburgerMenuOutside.contains(e.target) &&
    !navbarNav.contains(e.target)
  ) {
    navbarNav.classList.remove("active");
  }

  if (
    !searchButtonOutside.contains(e.target) &&
    !searchForm.contains(e.target)
  ) {
    searchForm.classList.remove("active");
  }

  if (
    !shoppingCartOutside.contains(e.target) &&
    !shoppingCart.contains(e.target)
  ) {
    shoppingCart.classList.remove("active");
  }
});

//Modal box
const itemDetailModal = document.querySelector("#item-detail-modal");
const itemDetailButtons = document.querySelectorAll(".item-detail-button");

itemDetailButtons.forEach((btn) => {
  btn.onclick = (e) => {
    itemDetailModal.style.display = "flex";
    e.preventDefault();
  };
});

// klik tombol close modal
document.querySelector(".modal .close-icon").onclick = (e) => {
  itemDetailModal.style.display = "none";
  e.preventDefault();
};

// klik di luar modal
window.onclick = (e) => {
  if (e.target === itemDetailModal) {
    itemDetailModal.style.display = "none";
  }
};
