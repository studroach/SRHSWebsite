///////////////////////////////////////////////////////////////
function homeInit() {

    let contact = document.getElementById("contactAction");
    let services = document.getElementById("serviceAction");
      contact.addEventListener("click", function(){window.location.href = "./contact.html"});
      services.addEventListener("click", function(){window.location.href = "./services.html"});
  
  };