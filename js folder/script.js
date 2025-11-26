/** @format */

document.addEventListener("DOMContentLoaded", function () {
  const nameInput = document.getElementById("nameInput");
  const ageInput = document.getElementById("ageInput");
  const colorInput = document.getElementById("colorInput");
  const submitBtn = document.getElementById("submitBtn");
  const output = document.getElementById("output");
  const pet = document.querySelectorAll('input[type="radio"]');
  const hobby = document.querySelectorAll('input[type="checkbox"]');

  submitBtn.addEventListener("click", function () {
    const name = nameInput.value;
    const age = ageInput.value;
    const color = colorInput.value;

    let favpet = "";
    let hobbies = [];

    for (let i = 0; i < pet.length; i++) {
      if (pet[i].checked) {
        favpet = pet[i].value;
      }
    }

    for (let i = 0; i < hobby.length; i++) {
      if (hobby[i].checked) {
        hobbies.push(hobby[i].value);
      }
    }

    output.textContent = `Name: ${name}, Age: ${age}, Favorite Color: ${color}, Favorite Pet: ${favpet}, Hobbies: ${hobbies.join(", ")}`;
  });
});
