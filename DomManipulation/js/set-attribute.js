var firstItem = document.getElementById("one");

firstItem.className = "complete";

var fourthItem = document.getElementsByTagName("li").item(3);
console.log(fourthItem);
var fifthItem = document.getElementsByTagName("li")[3];
console.log(fifthItem);

fourthItem.setAttribute("class", "cool");
