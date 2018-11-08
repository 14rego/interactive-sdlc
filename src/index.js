document
  .getElementById("TimelineFrame")
  .addEventListener("click", function(evt) {
    deactivate("active");
    return true;
  });
let poppable = document.getElementsByClassName("poppable");
for (let i = 0; i < poppable.length; i++) {
  poppable[i].addEventListener("click", function(evt) {
    evt.stopPropagation();
    deactivate("active");
    this.classList.toggle("active");
  });
}
function deactivate(custClass) {
  for (let i = 0; i < poppable.length; i++) {
    poppable[i].classList.remove(custClass);
  }
}
