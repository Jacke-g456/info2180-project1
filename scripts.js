/* Add your JavaScript to this file */
document.addEventListener("DOMContentLoaded", function (){
const form = document.querySelector("form"); 
const input = document.getElementById("email");
const output = document.querySelector(".message");
form.addEventListener("submit", function(event){
    event.preventDefault();  // stops the form submission from reloading the page
    const email = input.value.trim(); // collects the entered email
    input.value = ''; // clear input field after success
    var message='';
    if (email==''){
         message = "Please enter a valid email address.";
         output.style.color= 'red'; // output in div is red for invalid email
    }
    else{
         message = `Thank you! Your email address '${email}' has been added to our mailing list`;
         output.style.color= 'blue'; // output in div is blue for valid email
    }
    
    output.textContent = message; //places message in the div

    //console.log(message);

});

});