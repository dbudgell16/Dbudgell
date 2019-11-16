var age = prompt("Please enter your age here to get your birthyear");

var newDate = new Date();
var thisYear = newDate.getFullYear();

var birthYear = thisYear - age;

document.getElementById("year").innerHTML = birthYear;
