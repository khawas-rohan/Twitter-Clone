let logo = document.querySelector(".logo");
let first = document.querySelector(".first");
let second = document.querySelector(".second");
let setting = document.querySelector(".open");


document.querySelector(".close").addEventListener("click", () => {
    first.style.position = "absolute";
    first.style.left = "-100px";
    first.style.transition = "all 1s ease";

    second.style.marginLeft = "0rem";
    second.style.width = "100%";
    second.style.transition = "all 0.5s ease";
    document.querySelector(".close").style.display = "none"
    document.querySelector(".open").style.display = "block"
    
});

document.querySelector(".open").addEventListener("click", () => {
    first.style.position = "fixed";
    first.style.left = "0px";
    first.style.display = "block";
    first.style.transition = "all 1s ease";

    second.style.marginLeft = "4.5rem";
    second.style.transition = "all 0.5s ease";
    document.querySelector(".open").style.display = "none"
    document.querySelector(".close").style.display = "block"
});

// document.querySelector(".close").addEventListener("click",()=>{
//     document.querySelector(".open").style.display = "block"
//     document.querySelector(".close").style.display = "none"
// })


