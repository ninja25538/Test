var pass = document.getElementById("input_password");
var passMsg = document.getElementById("feedback");

function checkPassword(){
 var password = pass.value;
 if (password.length < 8) {
  passMsg.textContent = "Not long enough";
 } else {
  passMsg.textContent = " ";
 }
}
function tipPassword(){
 passMsg.innerHTML = "Password must be at least 8 characters";
}

pass.addEventListener("focus", checkPassword, false);
pass.addEventListener("blur", tipPassword, false); 
