///////////////////////////////////////////////////////////////
function servicesInit() {

    let kitchen = document.getElementById("kitchen");
    let bathroom = document.getElementById("bathroom");
    let house = document.getElementById("house");
    kitchen.addEventListener("click", function(){window.location.href = "./kitchens.html"});
    bathroom.addEventListener("click", function(){window.location.href = "./bathrooms.html"});
    house.addEventListener("click", function(){window.location.href = "./wholeHouse.html"});
  
};