document.getElementById("login-btn").addEventListener("click", function(){
    //get the phone number
    const getNumber = document.getElementById("input-number");
    const numberValue = getNumber.value;
    console.log(numberValue);

    // get the pin number
    const getPin = document.getElementById("input-pin");
    const pinValue = getPin.value;
    console.log(pinValue);

    //math the pin & phone number
    if(numberValue == "01234567890" && pinValue == "1234"){
        alert("Login Successful")
        window.location.assign("/home.html");
    } else{
        alert("Login Failed");
        return;
    }
})