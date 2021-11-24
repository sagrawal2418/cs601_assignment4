function validateForm() {
  let firstName = document.forms["myForm"]["firstName"].value;
  let lastName = document.forms["myForm"]["lastName"].value;
  let facilitator = document.forms["myForm"]["facilitator"].value;

  if (!isValidName(firstName)) {
    alert("Please correct the first name");
    return false;
  }
  if (!isValidName(lastName)) {
    alert("Please correct the last name");
    return false;
  }

  if(!validateFacilitator(facilitator)){
    alert("Please enter valid facilitator name");
    return false;
  }
}

function isValidName(name) {
  return /^([A-Za-z]{2,})$/.test(name);
}

function validateFacilitator(facilitator) {
  const facilitators = ["Chris", "Josh", "Fazil", "Christian"];
  if (facilitators.includes(facilitator)) {
    return true;
  }
  return false;
}
