var openButton = document.querySelector(".header__button--open");
var closeButton = document.querySelector(".header__button--close");
var menuList = document.querySelector(".main-nav");
var siteLogo = document.querySelector(".site-logo");

openButton.classList.remove("no-js");
menuList.classList.remove("no-js");
siteLogo.classList.remove("no-js");

openButton.addEventListener("click", function() {
  openButton.classList.add("header__button--hide");
  menuList.classList.add("main-nav--opened");
  siteLogo.classList.add("site-logo--menuopened");
  closeButton.classList.remove("header__button--hide");
  closeButton.addEventListener("click", function() {
    menuList.classList.remove("main-nav--opened");
    closeButton.classList.add("header__button--hide");
    openButton.classList.remove("header__button--hide");
  });
});
