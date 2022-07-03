//alert("Welcome!");
//attach an event listener to this button
document.getElementById("give").onclick = thanksforGiving;

//create function
function thanksforGiving(){
//console.log("Thank You!");
//get the name from textox
  let name = document.getElementById("name").value;
  console.log("Your name is " + name);
// get the location from textbox
  let where = document.getElementById("where").value;
  console.log("The Lord bless " + where + " as a whole");
//display msg
document.getElementById("msg").textContent = "God bless the work of your hands Mr. " + name + " and remember to give to another with the same heart.";
}

//getting input from user
