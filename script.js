"use strict";

const opener = document.querySelector(".opener");
const nav1 = document.querySelector(".nav-1");
const nav2 = document.querySelector(".nav-2");
const nav3 = document.querySelector(".nav-3");

var active = false;

opener.addEventListener("click", function () {
  if (active) {
    nav1.classList.remove("nav-1-opn");
    nav2.classList.remove("nav-2-opn");
    nav3.classList.remove("nav-3-opn");
    opener.classList.remove("closer");
  } else {
    nav1.classList.add("nav-1-opn");
    nav2.classList.add("nav-2-opn");
    nav3.classList.add("nav-3-opn");
    opener.classList.add("closer");
  }

  window.active = !window.active;
});

function printActive() {
  console.log(`active = ${window.active}`);
}
