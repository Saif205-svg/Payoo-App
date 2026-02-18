document.getElementById("add-money-btn").addEventListener("click",function(){
    // get bank account number
    const accountNumber = document.getElementById("add-money-number");
    const myNumber = accountNumber.value;
    // console.log(myNumber);
    if(myNumber.length !=11){
        alert("Please Enter Valid Account Number!");
        return;
    }
    // get amount
    const amount = document.getElementById("add-money-amount");
    const myAmount = amount.value;
    console.log("Your Entered Amount ", myAmount);

    // get current amount
    const currentAmount = document.getElementById("balance");
    const myCurrentAmount = currentAmount.innerText;
    // console.log("New Current Amount " + myCurrentAmount);

    // calculate current amount
    const myNewCurrentBalance = Number(myAmount) + Number(myCurrentAmount);
    console.log("Your Total account Balance ", myNewCurrentBalance);

    // set pin validation
    const pinInput = document.getElementById("add-money-pin");
    const currentPin = pinInput.value;
    if(currentPin === "1234"){
        alert("Cashout Successful");
        currentAmount.innerText = myNewCurrentBalance;
        return;
    } else{
        alert("Invalid Pin Number");
        return;
    }
    
})