//alert("Welcome!");
//attach an event listener to this button
document.getElementById("give").onclick = thanksforGiving;

//create function
function thanksforGiving(){
//console.log("Thank You!");
//get the name from textox
  let name = document.getElementById("name").value;
  console.log("Your name is " + name);
//display msg
document.getElementById("msg").textContent = "God bless the work of your hands Mr. " + name + " and remember to give to another with the same heart.";
}
//getting input from user
