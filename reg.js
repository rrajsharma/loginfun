function validateForm() {
  const samagraId = document.getElementById("samagra-id").value;
  const errorMessage = document.getElementById("error-message");

  const samagraRegex = /^[0-9]{9}$/;

 
  if (!samagraRegex.test(samagraId)) {

    errorMessage.textContent = "Samagra ID must be exactly 9 digits.";
    errorMessage.style.display = "block"; 
    return false; 
  }

   


  return true;
}
