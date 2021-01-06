let email = document.getElementById("exampleInputEmail1");
let password = document.getElementById("exampleInputPassword1");
let error = document.getElementById("error");
let error1 = document.getElementById("error1");
function onsubmit1(){
    if(email.value.trim()=="" && password.value.trim()=="")
    {
        error.innerHTML = " fields cannot be empty";
        error.style.color = "red";
        password.style.border = "2px solid red";
        email.style.border = "2px solid red";
        return false;
    }
    if(email.value.trim()=="")
    {
        email.style.border = "2px solid red";
        error.innerHTML = " email cannot be empty";
        error.style.color = "red";
        return false;

    }
    if( password.value.trim()=="")
    {
        password.style.border = "2px solid red";
        error1.innerHTML = " password cannot be empty";
        error1.style.color = "red";
        return false;
    }
    var regexp = /^([a-zA-Z0-9\.\-]+)@([a-zA-Z0-9\-]+)\.([a-z]{2,3})(\.[a-z]{2,3})?$/
    if(regexp.test(email.value))
    {
        error.innerHTML = "valid";
        error.style.color = "green";
        return true;
    }
    else
    {
        error.innerHTML = "Invalid email ";
        error.style.color = "red";
        return false;

    }
} 