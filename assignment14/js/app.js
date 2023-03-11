
document.getElementById("completeButton").addEventListener("click",(event)=>{

    event.preventDefault();
    fname=document.getElementById("fname").value;
    lname=document.getElementById("lname").value;
    email=document.getElementById("email").value;
    contact=document.getElementById("mobile").value;
    pin=document.getElementById("pinCode").value;
    cardNo=document.getElementById("cardNumber").value;
    expiry=document.getElementById("expiry").value;
    cvv=document.getElementById("cvv").value;
    
    // name validation
    let fnameRegex = /^[a-zA-Z]{0,30}$/;
    let fnameResult = fnameRegex.test(fname);
   
    if(fname==""){
        document.querySelector(".fname-warnings").innerHTML="First Name is required ";   
        document.querySelector(".fname-warnings").style.color="#a80001";
        document.querySelector("#fname").style.borderColor="#a80001";
    }
    else if(!fnameResult){
        document.querySelector(".fname-warnings").innerHTML="First Name is not valid ";   
        document.querySelector(".fname-warnings").style.color="#a80001";
        document.querySelector("#fname").style.borderColor="#a80001";
    }
    else{
        document.querySelector(".fname-warnings").innerHTML="";   
        document.querySelector("#fname").style.borderColor="#cccccc";
    }





    let lnameResult = fnameRegex.test(lname);

    if(lname==""){
        document.querySelector(".lname-warnings").innerHTML="Last Name is required "; 
        document.querySelector(".lname-warnings").style.color="#a80001"; 
        document.querySelector("#lname").style.borderColor="#a80001";
    }

    else if(!lnameResult){
        document.querySelector(".lname-warnings").innerHTML="Last Name is not valid ";   
        document.querySelector(".lname-warnings").style.color="#a80001";
        document.querySelector("#lname").style.borderColor="#a80001";
    }
    else{
        document.querySelector(".lname-warnings").innerHTML="";   
        document.querySelector("#lname").style.borderColor="#cccccc";
    }


    // email validation
    let emailRegex = /\S+@\S+\.\S+/;
    let emailResult = emailRegex.test(email);

    if(email==""){
        document.querySelector(".email-warnings").innerHTML="Email Address is required ";  
        document.querySelector(".email-warnings").style.color="#a80001";
        document.querySelector("#email").style.borderColor="#a80001";
    }
    else if(!emailResult){
        document.querySelector(".email-warnings").innerHTML="Email Address is not valid";   
        document.querySelector(".email-warnings").style.color="#a80001";
        document.querySelector("#email").style.borderColor="#a80001";
    }
    else {
        document.querySelector(".email-warnings").innerHTML="";   
        document.querySelector("#email").style.borderColor="#cccccc";
    }


    // mobile validation
    let mobileRegex = /^[0-9]{10}$/;
    let mobileResult = mobileRegex.test(contact);
    
    if(contact==""){
        document.querySelector(".mobile-warnings").innerHTML="Contact Number is required ";  
        document.querySelector(".mobile-warnings").style.color="#a80001";
        document.querySelector("#mobile").style.borderColor="#a80001";
    }
    else if(!mobileResult){
        document.querySelector(".mobile-warnings").innerHTML="Contact Number is not valid";   
        document.querySelector(".mobile-warnings").style.color="#a80001";
        document.querySelector("#mobile").style.borderColor="#a80001";
    }
    else{
        document.querySelector(".mobile-warnings").innerHTML=""; 
        document.querySelector("#mobile").style.borderColor="#cccccc";
    }

    // pincode validation

    let pincodeRegex = /^[0-9]{6}$/;
    let pincodeResult = pincodeRegex.test(pin);

    if(pin==""){
        document.querySelector(".pincode-warnings").innerHTML="PIN Code is required ";  
        document.querySelector(".pincode-warnings").style.color="#a80001";
        document.querySelector("#pinCode").style.borderColor="#a80001";
    }
    
    else if(!pincodeResult){
        document.querySelector(".pincode-warnings").innerHTML="PIN Code is not valid";   
        document.querySelector(".pincode-warnings").style.color="#a80001";
        document.querySelector("#pinCode").style.borderColor="#a80001";
    }
    else{
        document.querySelector(".pincode-warnings").innerHTML="";  
        document.querySelector("#pinCode").style.borderColor="#cccccc";
    }

    // cardNo validation
    let cardNoRegex = /^[0-9]{12}$/;
    let cardNoResult = cardNoRegex.test(cardNo);

    if(cardNo==""){
        document.querySelector(".card-Number-warnings").innerHTML="Card Number is required "; 
        document.querySelector(".card-Number-warnings").style.color="#a80001"; 
        document.querySelector("#cardNumber").style.borderColor="#a80001";
    }
    else if(!cardNoResult){
        document.querySelector(".card-Number-warnings").innerHTML="Card Number is not valid";   
        document.querySelector(".card-Number-warnings").style.color="#a80001";
        document.querySelector("#cardNumber").style.borderColor="#a80001";
    }
    else{
        document.querySelector(".card-Number-warnings").innerHTML="";  
        document.querySelector("#cardNumber").style.borderColor="#cccccc";
    }


    // year validation

    let yearRegex = /((?:20(?:(?:2[3-9])|(?:[2-9]\d)))|(?:2[1-9]\d\d)|(?:[3-9]\d\d\d))/;
    let yearResult = yearRegex.test(expiry);
    
     if(expiry==""){
        document.querySelector(".expiry-warnings").innerHTML="Card Expiry is required ";  
        document.querySelector(".expiry-warnings").style.color="#a80001";
        document.querySelector("#expiry").style.borderColor="#a80001";
    }

    else if(!yearResult){
        document.querySelector(".expiry-warnings").innerHTML="Card Expiry is not valid";   
        document.querySelector(".expiry-warnings").style.color="#a80001";
        document.querySelector("#expiry").style.borderColor="#a80001";
    }
    else {
        document.querySelector(".expiry-warnings").innerHTML="";   
        document.querySelector("#expiry").style.borderColor="#cccccc";
    }
    
    // cvv validation
    let cvvRegex = /^[0-9]{3,4}$/;
    let cvvResult = cvvRegex.test(cvv);

    if(cvv==""){
        document.querySelector(".cvv-warnings").innerHTML="CVV is required ";  
        document.querySelector(".cvv-warnings").style.color="#a80001";
        document.querySelector("#cvv").style.borderColor="#a80001";
    }
    else if(!cvvResult){
        document.querySelector(".cvv-warnings").innerHTML="CVV is not valid";   
        document.querySelector(".cvv-warnings").style.color="#a80001";
        document.querySelector("#cvv").style.borderColor="#a80001";
    }
    else {
        document.querySelector(".cvv-warnings").innerHTML="";   
        document.querySelector("#cvv").style.borderColor="#cccccc";
    }
 
    

})
