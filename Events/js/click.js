var msg = '<div class="header"><a id="close" href="#">Close X</a></div>';
msg += "<div><h2>System Maintenance</h2>";
msg += "Our Servers are being updated between 3 and 4 am ";
msg += "During this time , there may be minor disruptions to services</div>";

var elNote = document.createElement("div");
elNote.setAttribute("id", "note");
elNote.innerHTML = msg;
document.body.appendChild(elNote);

function dismissNote() {
  document.body.removeChild(elNote);
}

var elClose = document.getElementById("close");
elClose.addEventListener("click", dismissNote, false);
