chrome.runtime.sendMessage("hello mahipal");

document.body.style.background="orange";

    var button = document.createElement("button"); 
button.textContent = "Click Me"; 
button.style.backgroundColor = "yellow";
button.style.color = "white";
button.style.padding = "10px";
button.style.border = "none";
button.style.cursor = "pointer"; 
button.style.textAlign="center";
button.style.alignItems="end";
button.style.justifyContent="center";
button.style.marginLeft="1250px";
button.style.marginTop="3px";


var targetElement = document.querySelector("#n-head"); 

console.log(targetElement);

targetElement.appendChild(button);  

button.addEventListener("click", function(){
 window.alert("Button is clicked");
});

let paragraph=document.getElementsByClassName('.n-row');
paragraph.style.background="pink";
// let paragraph = document.getElementsByTagName('p');
// for(elt of paragraph){
//     elt.style['background-color']="#ff00ff";
// }