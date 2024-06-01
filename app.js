
function submitFrm(){
  let name = document.getElementById("name").value;
  let number = document.getElementById("number").value;
  let email = document.getElementById("email").value;
  
  
  
  localStorage.setItem("Username",name);
  localStorage.setItem("Mobile Number",number);
  localStorage.setItem("Email",email);
  
  document.getElementById("user").innerHTML =
  "Welcome " + name;
  
  return false;
}
