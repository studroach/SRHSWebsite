///////////////////////////////////////////////////////////////
function galleryInit() {

    let gallery = document.querySelectorAll('#gallery img');

    let imgLeft = document.querySelector('#imgLeft');   
    let imgRight = document.querySelector('#imgRight');


    function slideGallery(isRight) {
        let imageWidth = gallery[0].offsetWidth;
        if(isRight) {
        slidePosition[0]++
        if(slidePosition[0] > slidePosition[1]) {slidePosition[0] = 0;}
        }else {
        slidePosition[0]--
        if(slidePosition[0] < 0) {slidePosition[0] = slidePosition[1];}
        }
        gallery.forEach((slideImage) => {
        slideImage.style.left = "-" + (imageWidth*slidePosition[0]) + "px"
        });
    }

    imgRight.addEventListener('click', function(){
        slideGallery(true);
    });

    imgLeft.addEventListener('click', function(){
        slideGallery(false);
    });

};