//scripts go here!

document.write("hello world");

//chane button
function changePara(){
  document.getElementById("jsexample").innerHTML ="this is the replaced text!";
}

var mathX = 1;
var mathY = 3;
var mathZ;

mathZ = mathX + mathY;

document.write(mathZ);

function argExample(x,y) {
  mathZ = x + y;
  document.write(mathZ);
  //function will go here
}
function styleSwap(){
document.getElementById("one").style.fontSize = "30px";
document.getElementById("one").style.color = "blue";
document.getElementById("two").style.marginleft = "150px";
document.getElementById("two").style.color = "green";
document.getElementById("three").style.textTransform = "uppercase";
document.getElementById("three").style.color = "orange";
}

function calcOutputAdd(x,y){
  var result = x + y;
document.getElementById("output").innerHTML = result;
}

function calcOutputSubtract(x,y){
  var result = x - y;
document.getElementById("output").innerHTML = result;
}

function calcOutputMultiply(x,y){
  var result = x * y;
document.getElementById("output").innerHTML = result;
}

function calcOutputDivide(x,y){
  var result = x / y;
document.getElementById("output").innerHTML = result;
}
