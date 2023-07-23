const form = document.getElementById("form");
const table = document.querySelector("table");

form.addEventListener("submit", function (event) {
  event.preventDefault();
  debugger;
  const fname = document.getElementById("first-name").value;
  const lname = document.getElementById("last-name").value;
  const state = document.getElementById("state").value;
  const country = document.getElementById("country").value;
  const pincode = document.getElementById("pincode").value;
  const address = document.getElementById("address").value;
  const gender = document.querySelector('input[name="gender"]:checked').value;
  const foodcheckboxes = document.querySelectorAll(
    'input[name="food"]:checked'
  );
  const foodChoices = Array.from(foodcheckboxes).map(
    (checkbox) => checkbox.value
  );

  if (foodChoices.length < 2) {
    alert("Please choose at least 2 food options.");
    return;
  }

  const newRow = table.insertRow(); 
  const fnameCol = newRow.insertCell();
  const lnameCol = newRow.insertCell();
  const pincodeCol = newRow.insertCell(); 
  const stateCol = newRow.insertCell();
  const countryCol = newRow.insertCell();
  const addressCol = newRow.insertCell();
  const genderCol = newRow.insertCell(); 
  const foodCol = newRow.insertCell(); 

  fnameCol.textContent = fname;
  lnameCol.textContent = lname;
  pincodeCol.textContent = pincode;
  stateCol.textContent = state;
  countryCol.textContent = country;
  addressCol.textContent = address;
  genderCol.textContent = gender;
  foodCol.textContent = foodChoices.join(", ");

  form.reset();
});
