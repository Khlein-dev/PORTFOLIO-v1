const buttons = document.querySelectorAll(".push");

buttons.forEach(button => {
  button.addEventListener("click", function () {
    const targetClass = this.getAttribute("data-target");
    const targetDiv = document.querySelector(`.${targetClass}`);
    const arrowImg = this.querySelector(".up img");

    // Slide up all open containers and reset arrows
    document.querySelectorAll(".projcontainer1, .projcontainer2, .projcontainer3, .projcontainer4").forEach(div => {
      if (div !== targetDiv && div.style.display === "block") {
        slideUp(div);
      }
    });

    document.querySelectorAll(".up img").forEach(img => {
      if (img !== arrowImg) {
        img.classList.remove("rotate180");
      }
    });

    // Toggle current section
    if (targetDiv.style.display === "block") {
      slideUp(targetDiv);
      arrowImg.classList.remove("rotate180");
    } else {
      slideDown(targetDiv);
      arrowImg.classList.add("rotate180");
    }
  });
});

function slideDown(element) {
  element.style.display = "block";
  element.style.height = "0px";
  element.style.overflow = "hidden";
  element.style.transition = "height 0.5s ease";

  requestAnimationFrame(() => {
    element.style.height = "800px"; // match your CSS height
  });

  setTimeout(() => {
    element.style.height = "800px";
    element.style.overflow = "";
    element.style.transition = "";
  }, 500);
}

function slideUp(element) {
  element.style.overflow = "hidden";
  element.style.transition = "height 0.5s ease";
  element.style.height = "0px";

  setTimeout(() => {
    element.style.display = "none";
    element.style.height = "800px";
    element.style.overflow = "";
    element.style.transition = "";
  }, 500);
}