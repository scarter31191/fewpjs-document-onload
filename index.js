document.addEventListener("DOMContentLoaded", function() {
    newDOM(); // call on the function to when the DOMContentLoaded is triggered
  }); 

   function newDOM() {
       document.getElementById("text")
        text.innerHTML = "This is really cool!"; // .innerHTML works too since getElementById already grabbed it.
   }