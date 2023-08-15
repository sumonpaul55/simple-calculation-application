document.getElementById("dipositeBtn").addEventListener("click", function () {
  let totlaBalance = parseFloat(document.getElementById("total").innerText);
  let dipositeAmout = parseFloat(document.getElementById("diposite-amount").innerText);
  let dipositeField = parseFloat(document.getElementById("diposite-field").value);
  //updating dipostie and total value
  if (dipositeField <= 0) {
    alert("Amount shouldn't be 0 or Negative");
  } else {
    document.getElementById("diposite-amount").innerText = dipositeAmout + dipositeField;
    document.getElementById("total").innerText = totlaBalance + dipositeField;
  }
  document.getElementById("diposite-field").value = "";
});
// withdraw calculation
document.getElementById("withdrawBtn").addEventListener("click", function () {
  let totlaBalance = parseFloat(document.getElementById("total").innerText);
  let totalWithdraw = parseFloat(document.getElementById("withdraw-amount").innerText);
  let withdrawfield = parseFloat(document.getElementById("withdraw-field").value);
  //updating dipostie and total value
  if (withdrawfield <= 0) {
    alert("Amount shouldn't be 0 or Negative");
  } else {
    document.getElementById("withdraw-amount").innerText = totalWithdraw + withdrawfield;
    if (totlaBalance < withdrawfield) {
      alert(`Your total Balance is Is ${totlaBalance}`);
    } else document.getElementById("total").innerText = totlaBalance - withdrawfield;
  }
  document.getElementById("withdraw-field").value = "";
});
