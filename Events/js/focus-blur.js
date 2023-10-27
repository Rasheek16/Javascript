function checkUsername(minlength) {
  var username = el.value;
  if (username.length < 5) {
    elMsg.className = "warning";
    elMsg.textContent = "username very short";
  } else {
    elMsg.textContent = "";
  }
}

function tipUsername() {
  elMsg.className = "tip";
  elMsg.textContent = "Username must be at least 5 characters";
}

var el = document.getElementById("username");
var elMsg = document.getElementById("feedback");

el.addEventListener("focus", tipUsername, false);
el.addEventListener("blur", checkUsername, false);
