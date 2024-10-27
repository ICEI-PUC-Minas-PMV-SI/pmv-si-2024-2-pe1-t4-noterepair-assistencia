const btnMobileNav = document.querySelector("#header__mobile_btn_nav");
const headerMenu = document.querySelector(".header__menu");
const headerMobileMenu = document.querySelector(".header__mobile_menu");

btnMobileNav.addEventListener("click", (e) => {
  e.preventDefault();
  headerMobileMenu.innerHTML = headerMenu.innerHTML;
  headerMobileMenu.classList.toggle("header__mobile_menu--active");
  btnMobileNav.classList.toggle("header-active");
});


// Smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});
