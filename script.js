console.log("HIII THIS IS A TEST PRINT STATEMENT")

// This code runs whenever you refresh your page
var name = prompt("Hello. I am Baymax, your personal healthcare companion. What is your name?");
document.getElementById("name").innerHTML = name;


// This code only runs when you click the next button
function getUserInfo() {
  // update the image below to be Baymax playing with a soccer ball
  document.getElementById("baymax").innerHTML = '<img src="img/soccer.gif" width="100%"/>';

  // ask the user their age
  var age = prompt("How old are you?");
  
  // adds a new text
  document.getElementById("phrase").innerHTML = "Your age is " + age + " years old."
}