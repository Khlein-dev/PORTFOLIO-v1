  
  
 const buttons = document.querySelectorAll(".push");

  buttons.forEach(button => {
    button.addEventListener("click", function () {
      const targetClass = this.getAttribute("data-target");
      const targetDiv = document.querySelector(`.${targetClass}`);
      if (targetDiv) {
        targetDiv.style.display = "block";
      }
    });
  });