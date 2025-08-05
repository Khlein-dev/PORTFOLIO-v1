  
  
const buttons = document.querySelectorAll(".push");

buttons.forEach(button => {
  button.addEventListener("click", function () {
    const targetClass = this.getAttribute("data-target");
    const targetDiv = document.querySelector(`.${targetClass}`);

    if (targetDiv) {
      // Check if target is already visible
      const isVisible = targetDiv.style.display === "block";

      // Hide all containers first
      document.querySelectorAll('.projcontainer').forEach(div => {
        div.style.display = "none";
      });

      // Toggle the target
      if (!isVisible) {
        targetDiv.style.display = "block";
      }
    }
  });
});
