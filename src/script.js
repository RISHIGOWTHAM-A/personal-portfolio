const openBtn = document.querySelector(".openMenu");
const closeBtn = document.querySelector(".closeMenu");
const overlay = document.querySelector(".overlay");

//select all menu links inside overlay
const menuLinks = document.querySelectorAll(".overlay a, .overlay li, .overlay button");

openBtn.addEventListener("click", openMenu);
closeBtn.addEventListener("click", closeMenu);

// add close function on each menu link
menuLinks.forEach(link => {
  link.addEventListener("click", closeMenu);
});

function openMenu() {
  overlay.classList.remove("hidden");
  overlay.classList.add("flex");
  document.body.style.overflow = 'hidden';
}

function closeMenu() {
  overlay.classList.add("hidden");
  overlay.classList.remove("flex");
  document.body.style.overflow = 'auto';
}







