function inputData(id) {
  const inputField = document.getElementById(id);
  const inputData = parseFloat(inputField.value);
  inputField.value = "";
  return inputData;
}

function showResult(id, value) {
  const element = document.getElementById(id);
  element.innerText = value;
}

function calculate() {
  const totalIncome = inputData("income");
  const food = inputData("food");
  const rent = inputData("rent");
  const clothes = inputData("clothes");
  const totalExpenses = food + rent + clothes;
  const balance = totalIncome - totalExpenses;
  if (isNaN(totalIncome) || isNaN(food) || isNaN(rent) || isNaN(clothes)) {
    alert("Please put number all field");
    return;
  }
  if (totalIncome < totalExpenses) {
    alert("You can not spend more than your income");
    return;
  }
  showResult("expenses", totalExpenses);
  showResult("balance", balance);
}

function saving() {
  const expenses = document.getElementById("expenses").innerText;
  const balance = document.getElementById("balance").innerText;
  const total = parseFloat(expenses) + parseFloat(balance);
  const saving = inputData("save-field");
  const savingAmount = (total / 100) * saving;
  const remainBalance = balance - savingAmount;
  if (isNaN(saving)) {
    alert("Please Put a number");
    return;
  }
  if (balance < savingAmount) {
    alert("You can not save money more than your balance");
    return;
  }
  showResult("saving", savingAmount);
  showResult("remaining", remainBalance);
}
