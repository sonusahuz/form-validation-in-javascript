let div = document.querySelector(".form");
let username = document.getElementById("username");
let password = document.getElementById("password");
let email = document.getElementById("email");
let confirmpassword = document.getElementById("confirmpassword");
let flag = 1;

function validateForm() {
  // username error-----------------------------
  if (username.value == "") {
    let usererror = document.getElementById("usererror");
    usererror.innerHTML = "Username Name is Empty";
    username.style.border = "1px solid red";
    flag = 0;
  } else if (username.value.length < 3) {
    usererror.innerHTML = "Username must be at least 3 character";
    username.style.border = "1px solid red";
    flag = 0;
  } else if (username.value.match(/[0-9]/)) {
    usererror.innerHTML = "Username not required any number";
    username.style.border = "1px solid red";
    flag = 0;
  } else {
    usererror.innerHTML = "";
    username.style.border = "";
    flag = 1;
  }
  // email error---------------------------------
  if (email.value == "") {
    let emailerror = document.getElementById("emailerror");
    emailerror.innerHTML = "Please enter a valid email";
    email.style.border = "1px solid red";
    flag = 0;
  } else {
    emailerror.innerHTML = "";
    email.style.border = "";
    flag = 1;
  }

  // password error-----------------------------------
  if (password.value == "") {
    let passerror = document.getElementById("passerror");
    passerror.innerHTML = "Password is empty";
    password.style.border = "1px solid red";
    flag = 0;
  } else if (password.value.length < 8) {
    passerror.innerHTML = "Password must be least 8 character ";
    password.style.border = "1px solid red";
    flag = 0;
  } else {
    passerror.innerHTML = "";
    password.style.border = "";
    flag = 1;
  }
  // confirm password----------------------------------
  if (confirmpassword.value == "") {
    let conferror = document.getElementById("conferror");
    conferror.innerHTML = "Password-confirmation is required";
    confirmpassword.style.border = "1px solid red";
    flag = 0;
  } else if (password.value !== confirmpassword.value) {
    conferror.innerHTML = "Password don't match.";
    confirmpassword.style.border = "1px solid red";
    flag = 0;
  } else {
    conferror.innerHTML = "";
    confirmpassword.style.border = "";
    flag = 1;
  }
  if (flag) {
    return true;
  } else {
    return false;
  }
}
