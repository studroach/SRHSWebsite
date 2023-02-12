let slidePosition;

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

  let kitchenImages = document.querySelectorAll('#kitchenGallery img');
  let bathroomImages = document.querySelectorAll('#bathroomGallery img');
  let wholeHouseImages = document.querySelectorAll('#wholeHouseGallery img');
  let exteriorImages = document.querySelectorAll('#exteriorGallery img');

  slidePosition = [0, 0, 0, 0, 2, 8, 6, 8]

  let imgLeftKitchen = document.querySelector('#imgLeftKitchen');
  let imgLeftBathroom = document.querySelector('#imgLeftBathroom');
  let imgLeftHouse = document.querySelector('#imgLeftHouse');
  let imgLeftExterior = document.querySelector('#imgLeftExterior');
  
  let imgRightKitchen = document.querySelector('#imgRightKitchen');
  let imgRightBathroom = document.querySelector('#imgRightBathroom');
  let imgRightHouse = document.querySelector('#imgRightHouse');
  let imgRightExterior = document.querySelector('#imgRightExterior');

  let activeSection = homeContent;

  homeBtn.addEventListener('click', function(event){
    activeSection.style.display = "none";
    activeSection = homeContent;
    activeSection.style.display = "block";
    window.scrollTo(0,0);
    if(document.documentElement.clientWidth < 600) {
      menuToggle()
    }
  });

  aboutBtn.addEventListener('click', function(event){
    activeSection.style.display = "none";
    activeSection = aboutContent;
    activeSection.style.display = "block";
    window.scrollTo(0,0);
    if(document.documentElement.clientWidth < 600) {
      menuToggle()
    }
  });

  servicesBtn.addEventListener('click', function(event){
    activeSection.style.display = "none";
    activeSection = servicesContent;
    activeSection.style.display = "block";
    window.scrollTo(0,0);
    if(document.documentElement.clientWidth < 600) {
      menuToggle()
    }
  });

  galleryBtn.addEventListener('click', function(event){
    activeSection.style.display = "none";
    activeSection = galleryContent;
    activeSection.style.display = "block";
    window.scrollTo(0,0);
    if(document.documentElement.clientWidth < 600) {
      menuToggle()
    }
  });

  contactBtn.addEventListener('click', function(event){
    activeSection.style.display = "none";
    activeSection = contactContent;
    activeSection.style.display = "block";
    window.scrollTo(0,0);
    if(document.documentElement.clientWidth < 600) {
      menuToggle()
    }
  });

  function slideGallery(gallery, galleryNumber, right) {
    let imageWidth = gallery[0].offsetWidth;
    if(right) {
      slidePosition[galleryNumber]++
      if(slidePosition[galleryNumber] > slidePosition[galleryNumber + 4]) {slidePosition[galleryNumber] = 0;}
    }else {
      slidePosition[galleryNumber]--
      if(slidePosition[galleryNumber] < 0) {slidePosition[galleryNumber] = slidePosition[galleryNumber + 4];}
    }
    gallery.forEach((slideImage) => {
      slideImage.style.left = "-" + (imageWidth*slidePosition[galleryNumber]) + "px"
    });
  }

  imgRightKitchen.addEventListener('click', function(event){
    slideGallery(kitchenImages, 0, true);
  });

  imgLeftKitchen.addEventListener('click', function(event){
    slideGallery(kitchenImages, 0, false);
  });

  imgRightBathroom.addEventListener('click', function(event){
    slideGallery(bathroomImages, 1, true);
  });

  imgLeftBathroom.addEventListener('click', function(event){
    slideGallery(bathroomImages, 1, false);
  });

  imgRightHouse.addEventListener('click', function(event){
    slideGallery(wholeHouseImages, 2, true);
  });

  imgLeftHouse.addEventListener('click', function(event){
    slideGallery(wholeHouseImages, 2, false);
  });

  imgRightExterior.addEventListener('click', function(event){
    slideGallery(exteriorImages, 3, true);
  });

  imgLeftExterior.addEventListener('click', function(event){
    slideGallery(exteriorImages, 3, false);
  });

};

function menuToggle() {
  let banner = document.querySelector(".menu");
  if(barsIcon.innerHTML === "menu"){
    barsIcon.innerHTML = "close";
    banner.style.height = "300px"
  }else {
    barsIcon.innerHTML = "menu";
    banner.style.height = "50px"
  }
}
