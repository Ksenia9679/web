document.getElementById("myForm").addEventListener("submit", function(event){
    event.preventDefault();
    document.getElementById("successMessage").style.display = "block";
  });