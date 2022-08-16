// get input deposit and set deposit amount.
//deposit click handeler
document.getElementById('btn-deposit').addEventListener('click', function () {
    //get new deposit amount
    const newDepositInput = document.getElementById('deposit-field');
    const newDepositAmountString = newDepositInput.value;
    const newDepositAmount = parseFloat(newDepositAmountString);

    //get rest deposit amount
    const restDepositInput = document.getElementById('deposit-total');
    const restDepositAmountString = restDepositInput.innerText;
    const restDepositAmount = parseFloat(restDepositAmountString);

    //set total deposit
    const totalDeposit = restDepositInput.innerText = restDepositAmount + newDepositAmount;

    // get Total Amount
    const totalElement = document.getElementById('balance-total');
    const totalElementString = totalElement.innerText;
    const restTotalAmount = parseFloat(totalElementString);

    //set total amount
    totalElement.innerText = restTotalAmount + newDepositAmount;

    //clear deposit input
    newDepositInput.value = '';
});

// get input withdraw and set withdraw amount.
//withdraw click handeler
document.getElementById('btn-withdraw').addEventListener('click', function () {
    // get withdraw amount.
    const newWithdrawInput = document.getElementById('withdraw-field');
    const newWithdrawString = newWithdrawInput.value;
    const newWidrawAmount = parseFloat(newWithdrawString);

    //get withdraw Total Amount
    const restWithdrawElement = document.getElementById('withdraw-total');
    const restWithdrawString = restWithdrawElement.innerText;
    const restWithdrawAmount = parseFloat(restWithdrawString);

    //set total withdraw amount.
    restWithdrawElement.innerText = restWithdrawAmount + newWidrawAmount;

    //get total amount
    const restTotalElement = document.getElementById('balance-total');
    const restTotalString = restTotalElement.innerText;
    const restTotalAmount = parseFloat(restTotalString);

    //set total amount
    restTotalElement.innerText = restTotalAmount - newWidrawAmount;

    //clear withdraw input
    newWithdrawInput.value = '';

})