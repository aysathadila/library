let email = document.getElementById("email1");
let password = document.getElementById("inputPassword4");
let number = document.getElementById("number");
let error1 = document.getElementById("error1");
let error2 = document.getElementById("error2");
let error3 = document.getElementById("error3");
let name = document.getElementById("name");
let error4 = document.getElementById("error4");

var strength = {
    0: "poor",
    1: "poor",
    2: "medium",
    3: "medium",
    4: "Strong"
  }
var meter = document.getElementById('password-strength-meter');
var text = document.getElementById('password-strength-text');

password.addEventListener('input', function() {
  var val = password.value;
  var result = zxcvbn(val);

  // Update the password strength meter
  meter.value = result.score;

  // Update the text indicator
  if (val !== "") {
    text.innerHTML = "Strength: " + strength[result.score]; 
  } else {
    text.innerHTML = "";
  }
  if(result.score == 0)
  {
      text.style.color = "red";
  }
  else if(result.score == 1)
  {
      text.style.color = "red";
  }
  else if(result.score == 2)
  {
      text.style.color = "orange";
  }
  else if(result.score == 3)
  {
      text.style.color = "orange";
  }
  else
  {
      text.style.color = "green";
  }

});


function onsubmit2(){
    if(email.value.trim()=="")
    {
        email.style.border = "2px solid red";
        error1.innerHTML = " email cannot be empty";
        error1.style.color = "red";
        console.log("error");
        return false;

    }
    var regexp = /^([a-zA-Z0-9\.\-]+)@([a-zA-Z0-9\-]+)\.([a-z]{2,3})(\.[a-z]{2,3})?$/
    if(!regexp.test(email.value))
    {
        email.style.border = "2px solid red";
        error1.innerHTML = "Invalid email ";
        error1.style.color = "red";
        return false;
    }
    if(password.value.length < 8)
    {
        password.style.border = "2px solid red";
        error2.innerHTML = " password length should be atleast 8";
        error2.style.color = "red";
        return false;
    }
    if(password.value.search(/[0-9]/) == -1)
    {
        password.style.border = "2px solid red";
        error2.innerHTML = " password should contain atleast 1 number";
        error2.style.color = "red";
        return false;
    }
    if(password.value.search(/[A-Z]/) == -1)
    {
        password.style.border = "2px solid red";
        error2.innerHTML = " password should contain atleast 1 Upper case";
        error2.style.color = "red";
        return false;
    }
    if(password.value.search(/[a-z]/) == -1)
    {
        password.style.border = "2px solid red";
        error2.innerHTML = " password should contain atleast 1 lower case";
        error2.style.color = "red";
        return false;
    }
    if(name.value.trim() == "")
    {
        name.style.border = "2px solid red";
        error4.innerHTML = " Name field cannot be empty";
        error4.style.color = "red";
        return false;
    }
    // var reg = /^([A-Za-z]+)$/
    // var reg1 = /^([A-Z]+)$/
    // var reg2 = /^([a-z]+)$/
    // if((!reg.test(name.value)) && (!reg1.test(name.value)))
    // {
    //     name.style.border = "2px solid red";
    //     error4.innerHTML = " use alphabets only";
    //     error4.style.color = "red";
    //     return false;
    // }
    


    // if(isNaN(number.value))
    // {
    //     number.style.border = "2px solid red";
    //     error3.innerHTML = " must write digits only";
    //     error3.style.color = "red";
    //     return false;
    // }
    // if(number.value.length != 10)
    // {
    //     number.style.border = "2px solid red";
    //     error3.innerHTML = " number should be of 10 digits";
    //     error3.style.color = "red";
    //     return false;
    // }
    var no =/^([0-9]{10})$/
    var no1 =/^([0-9]{3})[-]([0-9]{3})[-]([0-9]{4})$/
    var no2 =/^([0-9]{3})\.([0-9]{3})\.([0-9]{4})$/
    var no3 =/^([0-9]{3})\ ([0-9]{3})\ ([0-9]{4})$/
    if(no.test(number.value))
    {
        return true;

    }
    else if(no1.test(number.value))
    {
        return true;
    }
    else if(no2.test(number.value))
    {
        return true;
    }
    else if(no3.test(number.value))
    {
        return true;
    }
    else
    {
        number.style.border = "2px solid red";
        error3.innerHTML = "write in correct format";
        error3.style.color = "red";
        return false;
    }

}
