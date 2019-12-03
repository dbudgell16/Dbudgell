//This will allow the time to appear on bottom of my page
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

//alert that you are entering the page
alert("Im alerting you that you are entering my website");

//confirmation of date
confirm("This todays date?: " + todayDate + "/" + todayMonth + "/" + todayFullYear);

//Prompt asking your favourite team
prompt("What is your favourite team?");

//This would be used for the website runners to know how long people visit their page
console.log("Hello world");
function buttonClick(){
  console.log("Time Spent On Page");
}

//Simple math for people to add goals/assistsfor total
function addNumbers()
{
  var number1 = Number(document.getElementById("num1").value);
var number2 = Number(document.getElementById("num2").value);

var total = number1 + number2;

        document.getElementById("output").innerHTML = total;
}
