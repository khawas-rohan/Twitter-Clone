let logo = document.querySelector(".logo")
let first = document.querySelector(".first")
let second = document.querySelector(".second")

let setting = document.querySelector(".setting")

logo.addEventListener("click", () => {
    console.log("It's working...");
    first.style.position = "absolute";
    first.style.left = "-100px";
    second.style.width = "100%";
    first.style.transition = "all 2s ease"; // Ensure the transition is applied here
    second.style.transition = "all 0.5s ease"; // Ensure the transition is applied here

});

setting.addEventListener("click", () => {
    first.style.position = "relative";
    first.style.left = "0";
    second.style.width = "80%";
    first.style.transition = "all 1s ease"; // Ensure the transition is applied here
    second.style.transition = "all 0.5s ease"; // Ensure the transition is applied here
});
