/* Add your JavaScript to this file */
document.addEventListener("DOMContentLoaded", function (){
const form = document.querySelector("form"); 
const input = document.getElementById("email");
const output = document.querySelector(".message");
form.addEventListener("submit", function(event){
    event.preventDefault();  // stops the form submission from reloading the page
    const email = input.value; // collects the entered email
    var message='';
    if (email==''){
         message = "Please enter a valid email address.";
    }
    else{
         message = `Thank you! Your email address '${email}' has been added to our mailing list`;
    }
    
    output.textContent = message; //places message in the div

    console.log(message);

});

});