/** @format */

document.addEventListener("DOMContentLoaded", function () {
  const nameInput = document.getElementById("nameInput");
  const ageInput = document.getElementById("ageInput");
  const colorInput = document.getElementById("colorInput");
  const submitBtn = document.getElementById("submitBtn");
  const output = document.getElementById("output");

  submitBtn.addEventListener("click", function () {
    const name = nameInput.value;
    const age = ageInput.value;
    const color = colorInput.value;

    output.textContent = `Name: ${name}, Age: ${age}, Favorite Color: ${color}`;
  });
});
