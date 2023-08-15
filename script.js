function bankmanagement() {
  document.getElementById("login-button").addEventListener("click", function () {
    let emailInput = document.getElementById("email").value;
    let password = document.getElementById("pass").value;
    // varifiy Emeil or pass:
    if (emailInput === "sumonpaul3217@gmail.com" && password === "secret") {
      location.href = "bank.html";
    } else {
      alert("You should provide valid User Or pass");
    }
  });
}
bankmanagement();
