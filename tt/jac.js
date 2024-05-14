let transactions = [];
let balance = 0;

function addTransaction() {
  const descriptionInput = document.getElementById('description');
  const amountInput = document.getElementById('amount');

  const description = descriptionInput.value;
  const amount = parseFloat(amountInput.value);

  if (description.trim() === '' || isNaN(amount)) {
    alert('Please enter valid description and amount.');
    return;
  }

  transactions.push({ description, amount });
  updateTransactionsList();
  updateBalance();

  // Clear input fields
  descriptionInput.value = '';
  amountInput.value = '';
}

function updateTransactionsList() {
  const transactionList = document.getElementById('transaction-list');
  transactionList.innerHTML = '';

  transactions.forEach(transaction => {
    const li = document.createElement('li');
    li.textContent = `${transaction.description}: $${transaction.amount.toFixed(2)}`;
    transactionList.appendChild(li);
  });
}

function updateBalance() {
  balance = transactions.reduce((total, transaction) => total + transaction.amount, 0);
  const balanceElement = document.getElementById('balance');
  balanceElement.textContent = `$${balance.toFixed(2)}`;
}