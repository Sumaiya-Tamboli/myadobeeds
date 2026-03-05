document.addEventListener("DOMContentLoaded", () => {

  const carCard = document.querySelector(".cars.block");

  carCard.addEventListener("click", () => {
    const carName = carCard.querySelector("p").textContent;
    alert("You selected: " + carName);
  });

});