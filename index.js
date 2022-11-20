window.onload = function() {

  // let barsIcon = document.getElementById("barsIcon");
  // barsIcon.addEventListener("click", function(event){menuToggle();});

  let homeBtn = document.querySelector('#homeBtn');
  let aboutBtn = document.querySelector('#aboutBtn');
  let servicesBtn = document.querySelector('#servicesBtn');
  let galleryBtn = document.querySelector('#galleryBtn');
  let contactBtn = document.querySelector('#contactBtn');

  let homeContent = document.querySelector('#home');
  let aboutContent = document.querySelector('#about');
  let servicesContent = document.querySelector('#services');
  let galleryContent = document.querySelector('#gallery');
  let contactContent = document.querySelector('#contact');

  let activeSection = homeContent;

  homeBtn.addEventListener('click', function(event){
    activeSection.style.display = "none";
    activeSection = homeContent;
    activeSection.style.display = "block";
  });

  aboutBtn.addEventListener('click', function(event){
    activeSection.style.display = "none";
    activeSection = aboutContent;
    activeSection.style.display = "block";
  });

  servicesBtn.addEventListener('click', function(event){
    activeSection.style.display = "none";
    activeSection = servicesContent;
    activeSection.style.display = "block";
  });

  galleryBtn.addEventListener('click', function(event){
    activeSection.style.display = "none";
    activeSection = galleryContent;
    activeSection.style.display = "block";
  });

  contactBtn.addEventListener('click', function(event){
    activeSection.style.display = "none";
    activeSection = contactContent;
    activeSection.style.display = "block";
  });

};

function menuToggle() {
  let navCard = document.querySelector("nav");
  let body = document.querySelector("body");
  if(barsIcon.innerHTML === "menu"){
    barsIcon.innerHTML = "close";
    barsIcon.style.top = "15vh"
    navCard.style.top = "0";
    body.classList.toggle("blur");
  }else {
    barsIcon.innerHTML = "menu";
    navCard.style.top = "-15vh";
    barsIcon.style.top = "0";
    body.classList.toggle("blur");
  }
}
