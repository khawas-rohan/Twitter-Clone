let first = document.querySelector(".first");
let second = document.querySelector(".second");

document.querySelector(".close").addEventListener("click", () => {
  first.style.position = "absolute";
  first.style.left = "-100px";
  first.style.transition = "all 1s ease";

  second.style.marginLeft = "0rem";
  second.style.width = "100%";
  second.style.transition = "all 0.5s ease";
  document.querySelector(".close").style.display = "none";
  document.querySelector(".open").style.display = "block";
});

document.querySelector(".open").addEventListener("click", () => {
  first.style.position = "fixed";
  first.style.left = "0px";
  first.style.display = "block";
  first.style.transition = "all 1s ease";

  second.style.marginLeft = "4.5rem";
  second.style.transition = "all 0.5s ease";
  document.querySelector(".open").style.display = "none";
  document.querySelector(".close").style.display = "block";
});


// Function to apply light mode styles
function applyLightMode() {
  document.body.style.backgroundColor = "white";
  document.body.style.color = "black";
  document.querySelector(".wH").style.backgroundColor = "white";

  let hoverElements = document.querySelectorAll(".post-H");
  hoverElements.forEach((hoverElement) => {
    hoverElement.style.backgroundColor = "white";
  });
}

// Function to apply dark mode styles
function applyDarkMode() {
  document.body.style.backgroundColor = "black";
  document.body.style.color = "white";
  document.querySelector(".wH").style.backgroundColor = "black";

  let hoverElements = document.querySelectorAll(".post-H");
  hoverElements.forEach((hoverElement) => {
    hoverElement.style.backgroundColor = "black";
  });
}

// Function to handle hover effect
function handleHoverEffect() {
  let hoverElements = document.querySelectorAll(".post-H");
  hoverElements.forEach((hoverElement) => {
    hoverElement.addEventListener("mouseenter", () => {
      hoverElement.style.backgroundColor =
        document.body.style.backgroundColor === "black"
          ? "#1c1b1b"
          : "lightgray";
    });

    hoverElement.addEventListener("mouseleave", () => {
      hoverElement.style.backgroundColor =
        document.body.style.backgroundColor === "black" ? "black" : "white";
    });
  });
}

// Toggle between light and dark modes
document.querySelector(".light").addEventListener("click", () => {
    document.querySelector(".light").style.display = "none";
    document.querySelector(".dark").style.display = "block";
    applyDarkMode()
});

document.querySelector(".dark").addEventListener("click", () => {
  applyLightMode()
  document.querySelector(".light").style.display = "block";
  document.querySelector(".dark").style.display = "none";
});



// Apply hover effect
handleHoverEffect();
