var firstItem=document.getElementById('one');

var showTextContent = firstItem.textContent;
var showInnerTextContent = firstItem.innerText;

var msg=`<p>textContent:${showTextContent}</p>`
msg+=`<p>innerText:${showInnerTextContent}</p>`

var el=document.getElementById('scriptResults');

el.innerHTML=msg;

firstItem.textContent='sourdough bread';