
//Main method
function validateForm() {
  let facilitator = document.forms["myForm"]["facilitator"].value;

    //check to see if entered facilitator name is valid or not, if not valid show an alert message
  if (!validateFacilitator(facilitator)) {
    alert("Please enter valid facilitator name");
    return false;
  }
}

//method to validate whether entered facilitator name matches in the array
function validateFacilitator(facilitator) {
  const facilitators = ["Chris", "Josh", "Fazil", "Christian"];
  const includesValue = facilitators.some((element) => {
    return element.toLowerCase() === facilitator.toLowerCase();
  });
  return includesValue;
}
