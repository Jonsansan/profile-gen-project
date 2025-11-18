/** @format */

document.addEventListener("DOMContentLoaded", function () {
  const nameInput = document.getElementById("nameInput");
  const ageInput = document.getElementById("ageInput");
  const colorInput = document.getElementById("colorInput");
  const favoritePetSelect = document.getElementById("favoritePet");
  const favoritePetOptions = ["Dog", "Cat", "Fish"];

  nameInput.addEventListener("input", function () {
    console.log("Textbox value changed to: " + nameInput.value);
  });

  ageInput.addEventListener("input", function () {
    console.log("Textbox value changed to: " + ageInput.value);
  });

  colorInput.addEventListener("click", function () {
    console.log("Textbox value changed to: " + colorInput.value);
  });
  favoritePetSelect.addEventListener("change", function () {
    console.log("Selected favorite pet: " + favoritePetSelect.value);
  });
});
