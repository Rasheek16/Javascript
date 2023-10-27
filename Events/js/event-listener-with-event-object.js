function checkLength(e, minlength) {
  var el, elMsg;
  if (!e) {
    e = window.event;
  }
  el = e.target || e.srcElement;
  elMsg = el.nextSibling;

  if (el.value.length < minlength) {
    elMsg.innerHtml = "Username must be" + minlength + "char long";
  } else {
    elMsg.innerHtml = "";
  }
}

var elUsername = document.getElementById("username");
if (elUsername.addEventListener) {
  elUsername.addEventListener(
    "blur",
    function (e) {
      checkLength(e,5);
    },
    false
  );
} else {
  elUsername.attachEvent("onblur", function (e) {
    checkLength(e, 5);
  });
}
