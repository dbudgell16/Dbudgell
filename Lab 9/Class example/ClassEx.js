console.log("Hello world");
function buttonClick(){
  console.log("The button was clicked");
}

var todayFullDate = new Date();

var todayTime = todayFullDate. getTime();
var todayMonth = todayFullDate.getMonth()+ 1;
var todayDate = todayFullDate.getDate();
var todayDay = todayFullDate.getDay();
var todayHour = todayFullDate.getHours();
var todayYear = todayFullDate.getYear();
var todayFullYear = todayFullDate.getFullYear();


console.log(todayFullDate);
console.log(todayTime);
console.log(todayMonth);
console.log(todayDate);
console.log(todayDay);
console.log(todayHour);
console.log(todayYear);
console.log(todayFullYear);

document.getElementById("theDate").innerHTML = todayDate + "/" + todayMonth + "/" + todayFullYear;
//document.getElementById("theDate").innerHTML = 6 + 8 + "five" + 6 + 8;


alert("Im alerting you that you smell. haha");

confirm("This todays date?: " + todayDate + "/" + todayMonth + "/" + todayFullYear);

prompt("Tell me a funny joke");

function formOutputs(){
  console.log(document.getElementById("textInput").value);
  console.log(document.getElementById("passInput").value);
}
