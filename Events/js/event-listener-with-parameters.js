var elUsername = document.getElementById("username");
var elMsg = document.getElementById("feedback");

function checkUsername(minlength) {
  if (elUsername.value.length < 5) {
    elMsg.textContent = "Username must be at least 5 characters";
  } else {
    elMsg.textContent = "";
  }
}
elUsername.addEventListener(
  "blur",
  function () {
    checkUsername(5);
  },
  false
);
