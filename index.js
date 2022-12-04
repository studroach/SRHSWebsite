window.onload = function() {

  let barsIcon = document.getElementById("barsIcon");
  barsIcon.addEventListener("click", function(event){menuToggle();});

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
    if(document.documentElement.clientWidth < 600) {
      menuToggle()
    }
  });

  aboutBtn.addEventListener('click', function(event){
    activeSection.style.display = "none";
    activeSection = aboutContent;
    activeSection.style.display = "block";
    if(document.documentElement.clientWidth < 600) {
      menuToggle()
    }
  });

  servicesBtn.addEventListener('click', function(event){
    activeSection.style.display = "none";
    activeSection = servicesContent;
    activeSection.style.display = "block";
    if(document.documentElement.clientWidth < 600) {
      menuToggle()
    }
  });

  galleryBtn.addEventListener('click', function(event){
    activeSection.style.display = "none";
    activeSection = galleryContent;
    activeSection.style.display = "block";
    if(document.documentElement.clientWidth < 600) {
      menuToggle()
    }
  });

  contactBtn.addEventListener('click', function(event){
    activeSection.style.display = "none";
    activeSection = contactContent;
    activeSection.style.display = "block";
    if(document.documentElement.clientWidth < 600) {
      menuToggle()
    }
  });

};

function menuToggle() {
  let navCard = document.querySelector("nav");
  let banner = document.querySelector(".menu");
  if(barsIcon.innerHTML === "menu"){
    barsIcon.innerHTML = "close";
    banner.style.height = "300px"
  }else {
    barsIcon.innerHTML = "menu";
    banner.style.height = "50px"
  }
}
