///////////////////////////////////////////////////////////////
function indexInit() {

	const menu = document.querySelector("#menu");
  	const barsIcon = document.querySelector("#barsIcon");
  	barsIcon.addEventListener("click", function(event){menuToggle();});

	const serviceDropDown = document.querySelector("#serviceDropDown");
	serviceDropDown.addEventListener("mouseover", () => {
		menu.style.height = "200px";
	});
	menu.addEventListener("mouseleave", () => {
		menu.style.height = "120px";
	});

	const navButtons = document.querySelectorAll(".navLink");
	navButtons.forEach((button, index) => {
		if(index == 2) { return }
		button.addEventListener("mouseover", () => {
			menu.style.height = "120px";
		});
	});

};

function menuToggle() {
	const banner = document.querySelector("#menu");
	const logo = document.querySelector("#logo");
	const phone = document.querySelector("#menuPhone");
  	if(barsIcon.innerHTML === "menu") {
  		barsIcon.innerHTML = "close";
    	banner.style.height = "300px";
    	logo.style.height = "300px";
    	logo.style.left = "10px";
    	phone.style.opacity = "0%";

  	} else {
    	barsIcon.innerHTML = "menu";
    	banner.style.height = "50px";
    	logo.style.height = "50px";
    	logo.style.left = "50px";
    	phone.style.opacity = "100%";

  	}
}
