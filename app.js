const menuIcon = document.querySelector(".menu ion-icon");
const sidebarContainer = document.getElementById("sidebar");
const signUpBtn = document.getElementById("btn")
const formContainer = document.querySelector(".form-container");

//User value store in LocalStoragel
const userInput = document.getElementById("name");

const number = document.getElementById("number");

const email = document.getElementById("email");

const usernameDis = document.getElementById("username");

const signUpBtn2 = document.getElementById("main-btn");

const form = document.getElementById("form");


menuIcon.addEventListener("click",() => {
  sidebarContainer.classList.toggle("toggle-side");
  formContainer.classList.remove("toggle-form")
});

signUpBtn.addEventListener("click",() => {
  formContainer.classList.toggle("toggle-form")
})


signUpBtn2.addEventListener("click",() => {
  const userValue = userInput.value;
  const useremail = email.value;
  const usernumber = number.value;
  
  localStorage.setItem("name",userValue)
  localStorage.setItem("email",useremail)
  localStorage.setItem("number",usernumber)
})


form.addEventListener("submit",(e) => {
  e.preventDefault();
  alert("Sign up Successfully");
  location.href = "index.html";
  location.reload();
})


window.addEventListener("load",() => {
  let value = localStorage.getItem("name");
     if(value == null){
      usernameDis.innerText = "Welcome !!";
   }
   else {
     usernameDis.innerText += `Hello,    ${value}`;
   }
})


