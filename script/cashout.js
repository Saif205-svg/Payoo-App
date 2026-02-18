document.getElementById("cashout-btn").addEventListener('click',function(){
    // get agent number and check valid number
    const agentNumberInput = document.getElementById("cashout-number");
    const numberInput = agentNumberInput.value;
    if(numberInput.length != 11){
        alert('Invalid Agent Number');
        return;
    }
    // get amount input
    const getAmountInput = document.getElementById("cashout-balance");
    const amountInput  = getAmountInput.value;
    console.log(amountInput);
    // get current balance
    const currentBalance = document.getElementById("balance");
    const balance = currentBalance.innerText;
    console.log(balance);
    // calculate currentBalance - amount input
    const myNewBalance = Number(balance) - Number(amountInput);
    // check balance validation
    if(myNewBalance<0){
        alert("Invalid Amount");
        return;
    }console.log("New Balance: "+myNewBalance);
    //get pin number
    const getPinNumber = document.getElementById("cashout-pin");
    const myPin = getPinNumber.value;
    //check pin validation
    if(myPin === '1234'){
        alert('Cashout Successful');
        currentBalance.innerText = myNewBalance;
    } else{
        alert("Invalid Pin number")
        // currentBalance.innerText = myNewBalance;
        return;
    }

})