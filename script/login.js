document.getElementById("login-btn").addEventListener("click",function(){
   //step 1--> get the mobile number
   const numberInput = document.getElementById("input-number");
   const inputValue = numberInput.value;
   console.log(inputValue);
   //step 2--> get the pin number
   const pinNumber = document.getElementById("input-pin");
   const pinValue = pinNumber.value;
   console.log(pinValue);
   //step 3--> match the pin number
   if(inputValue == '01234567890' && pinValue == '1234'){
    //step 4--> when true step 1 & 3 alert>> homepage
    alert("Login Successful")
   } else{
    //step 5--> when false step 1 & 3 alert>> return
    alert("Login Failed")
    return;
   }
   
   
})