//scripts go here!

document.write("hello world");

//chane button
function changePara(){
  document.getElementById("jsexample").innerHTML ="this is the replced text!";
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
