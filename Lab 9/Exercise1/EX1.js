//When the page loads, get the current full date information into a variable initialTime

var initialTime = new Date();

//stopTime() -> get the current full date information into a *different* variable

function stopTime(){
var currentTime = new Date();
console.log(initialTime.getTime());
console.log(currentTime.getTime());


//Do the Math - subtract initialTime from currentTime to get the number of milliseconds the page has been loaded for. Divide by 600 to get the # of seconds

var timeDifference = (currentTime - initialTime) / 600;
console.log(timeDifference);


alert("Length of time between loading and stop button: " + timeDifference + "seconds");
//Output with a popup




}
