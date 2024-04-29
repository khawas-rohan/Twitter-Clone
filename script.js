let logo = document.querySelector(".logo");
let first = document.querySelector(".first");
let second = document.querySelector(".second");

let setting = document.querySelector(".setting");

logo.addEventListener("click", () => {
    first.style.position = "absolute";
    first.style.left = "-100px";
    first.style.transition = "all 1s ease";

    second.style.marginLeft = "0rem";
    second.style.width = "100%";
    second.style.transition = "all 0.5s ease";
});

setting.addEventListener("click", () => {
    first.style.position = "fixed";
    first.style.left = "0px";
    first.style.transition = "all 1s ease";

    second.style.marginLeft = "4.5rem";
    second.style.transition = "all 0.5s ease";
});
