// navbar fixed
window.onscroll = function () {
  const header = document.querySelector("header");
  const nav = header.offsetTop;
  const toTop = document.querySelector("#to-top");

  if (window.pageYOffset > nav) {
    header.classList.add("nav-fixed");
    toTop.classList.remove("hidden");
    toTop.classList.add("flex");
  } else {
    header.classList.remove("nav-fixed");
    toTop.classList.remove("flex");
    toTop.classList.add("hidden");
  }
};
// hamburger
const hamburger = document.querySelector("#hamburger");
const navMenu = document.querySelector("#nav-menu");

hamburger.addEventListener("click", function () {
  hamburger.classList.toggle("hamburger-active");
  navMenu.classList.toggle("hidden");
});

// click outer hamburger hidden
window.addEventListener("click", function (e) {
  if (e.target !== hamburger && e.target !== navMenu) {
    hamburger.classList.remove("hamburger-active");
    navMenu.classList.add("hidden");
  }
});

// dark mode toggle
const darkToggle = document.querySelector("#dark-toggle");
const html = document.querySelector("html");

darkToggle.addEventListener("click", function () {
  if (darkToggle.checked) {
    html.classList.add("dark");
    localStorage.theme = "dark";    

  } else {
    html.classList.remove("dark");
    localStorage.theme = "light";    
  }
});

// dark mode local storage
if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {    
    darkToggle.checked = true;
  } else {
    darkToggle.checked = false;
  }