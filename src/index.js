///////////////////////////////////////////////////////////////
function indexInit() {

  let barsIcon = document.getElementById("barsIcon");
  barsIcon.addEventListener("click", function(event){menuToggle();});

};

function menuToggle() {
  let banner = document.querySelector(".menu");
  let logo = document.querySelector("#logo");
  if(barsIcon.innerHTML === "menu"){
    barsIcon.innerHTML = "close";
    banner.style.height = "300px";
    logo.style.height = "300px";
    logo.style.left = "10px";
  }else {
    barsIcon.innerHTML = "menu";
    banner.style.height = "50px";
    logo.style.height = "50px";
    logo.style.left = "50px";
  }
}
