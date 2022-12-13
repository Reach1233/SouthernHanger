//modal
var modal = document.getElementById("modalBox");

var modaltwo = document.getElementById("modalBox2");

var modalthree = document.getElementById("modalBox3");

var modalfour = document.getElementById("modalBox4");

var modalfive = document.getElementById("modalBox5");

var settingsModal = document.getElementById("modalBoxSettings");

var modals = document.getElementsByClassName("modal");

var buttons = document.getElementsByClassName("button");

var idont = document.body;

var doom = document.getElementsByClassName("doom");

var elements = document.getElementsByTagName("*");

var weAre = document.getElementsByClassName("WEARE");

var sett = document.getElementsByClassName("material-icons")[0];

function light(){
    idont.style.filter = "invert(0%) !important";
}
function dark(){
    idont.style.filter = "invert(100%) !important";
}
function colorsOn(){
    for (let i = 0; i < buttons.length; i++){
        buttons[i].style.animation = "textAnimate 3s linear infinite alternate";
    }
    for (let i = 0; i < doom.length; i++){
        doom[i].style.animation = "textAnimate 3s linear infinite alternate";
    }
}

function colorsOff(){
    for (let i = 0; i < buttons.length; i++){
        buttons[i].style.animation = "";
    }
    for (let i = 0; i < doom.length; i++){
        doom[i].style.animation = "";
    }
}

function wingOn(){
    for (let i = 0; i < elements.length; i++){
        elements[i].style.fontFamily = '"Wingdings 2"';
    }
}

function wingOff(){
    for (let i = 0; i < elements.length; i++){
        elements[i].style.fontFamily = "Arial";
    }
    for (let i = 0; i < weAre.length; i++){
        weAre[i].style.fontFamily = '"Pacifico"';
    }
    sett.style.fontFamily = '"Material Icons"';
}

function settingsModalFun(){
    settingsModal.style.display = "block";
}

function closeModal(){
    modal.style.display = "none";
    modaltwo.style.display = "none";
    modalthree.style.display = "none";
    modalfour.style.display = "none";
    modalfive.style.display = "none";
    settingsModal.style.display = "none";
}
function bikeModal(){
    modal.style.display = "block";
}
function contactModal(){
    modaltwo.style.display = "block";
}
function servicesModal(){
    modalthree.style.display = "block";
}
function accessModal(){
    modalfour.style.display = "block";
}
function hamModal(){
    modalfive.style.display = "block";
}
//everything without specified font is arial//
window.onclick = function(event) {
    if (event.target == modals[0]){
        closeModal();
    }
    if (event.target == modals[1]){
        closeModal();
    }
    if (event.target == modals[2]){
        closeModal();
    }
    if (event.target == modals[3]){
        closeModal();
    }
    if (event.target == modals[4]){
        closeModal();
    }
    if (event.target == modals[5]){
        closeModal();
    }
}
function styleFun() { 
    if (window.navigator.userAgent.indexOf("Edg") != -1 ){
        for (let i = 0; i < buttons.length; i++){
            buttons[i].style.letterSpacing = "0.23em";
        }
    }else if (window.navigator.userAgent.indexOf("Chrome") != -1 ){
        for (let i = 0; i < buttons.length; i++){
            buttons[i].style.letterSpacing = "0.243em";
        }
    }
}
	$(function () { // wait for document ready
		// init
		var controller = new ScrollMagic.Controller({
			globalSceneOptions: {
				triggerHook: 'onLeave',
				duration: "200%" // this works just fine with duration 0 as well
				// However with large numbers (>20) of pinned sections display errors can occur so every section should be unpinned once it's covered by the next section.
				// Normally 100% would work for this, but here 200% is used, as Panel 3 is shown for more than 100% of scrollheight due to the pause.
			}
		});

		// get all slides
		var slides = document.querySelectorAll("section.image_bg");

		// create scene for every slide
		for (var i=0; i<slides.length; i++) {
			new ScrollMagic.Scene({
					triggerElement: slides[i]
				})
				.setPin(slides[i], {pushFollowers: false})
			
				.addTo(controller);
		}
	});
  let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}
var time = new Date("January 1, 0001 10:00:00");
// tester
// "January 1, 0001 07:15:30"
var hours = time.getHours();

//console.log(hours); /*checker*/

var hourCol = [
"https://images.unsplash.com/photo-1475274047050-1d0c0975c63e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bmlnaHQlMjBza3l8ZW58MHx8MHx8&w=1000&q=80", 
"https://images.unsplash.com/photo-1475274047050-1d0c0975c63e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bmlnaHQlMjBza3l8ZW58MHx8MHx8&w=1000&q=80", 
"https://images.unsplash.com/photo-1475274047050-1d0c0975c63e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bmlnaHQlMjBza3l8ZW58MHx8MHx8&w=1000&q=80", 
"https://images.unsplash.com/photo-1475274047050-1d0c0975c63e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bmlnaHQlMjBza3l8ZW58MHx8MHx8&w=1000&q=80", 
"https://images.unsplash.com/photo-1475274047050-1d0c0975c63e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bmlnaHQlMjBza3l8ZW58MHx8MHx8&w=1000&q=80", 
"https://images.unsplash.com/photo-1475274047050-1d0c0975c63e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bmlnaHQlMjBza3l8ZW58MHx8MHx8&w=1000&q=80", 
"https://images.unsplash.com/photo-1475274047050-1d0c0975c63e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bmlnaHQlMjBza3l8ZW58MHx8MHx8&w=1000&q=80", 
/*7*/"https://images.unsplash.com/photo-1560093230-101306845069?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8c3VucmlzZSUyMHNreXxlbnwwfHwwfHw%3D&w=1000&q=80", 
"https://images.unsplash.com/photo-1600262912274-28f333fa17bd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8bW9ybmluZyUyMHNreXxlbnwwfHwwfHw%3D&w=1000&q=80", 
"	https://images.unsplash.com/photo-1600262912274-28f333fa17bd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8bW9ybmluZyUyMHNreXxlbnwwfHwwfHw%3D&w=1000&q=80", 
"	https://images.unsplash.com/photo-1600262912274-28f333fa17bd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8bW9ybmluZyUyMHNreXxlbnwwfHwwfHw%3D&w=1000&q=80", 
"	https://images.pexels.com/photos/53594/blue-clouds-day-fluffy-53594.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", 
/*12*/"https://images.pexels.com/photos/53594/blue-clouds-day-fluffy-53594.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", 
"	https://images.pexels.com/photos/53594/blue-clouds-day-fluffy-53594.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", 
"	https://images.pexels.com/photos/96622/pexels-photo-96622.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", 
"	https://images.pexels.com/photos/96622/pexels-photo-96622.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", 
"https://images.pexels.com/photos/96622/pexels-photo-96622.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", 
"https://images.unsplash.com/photo-1503602164195-4c69be2bf9b0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8ZHVzayUyMHNreXxlbnwwfHwwfHw%3D&w=1000&q=80", 
"https://images.unsplash.com/photo-1475274047050-1d0c0975c63e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bmlnaHQlMjBza3l8ZW58MHx8MHx8&w=1000&q=80", 
"https://images.unsplash.com/photo-1475274047050-1d0c0975c63e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bmlnaHQlMjBza3l8ZW58MHx8MHx8&w=1000&q=80", 
"https://images.unsplash.com/photo-1475274047050-1d0c0975c63e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bmlnaHQlMjBza3l8ZW58MHx8MHx8&w=1000&q=80", 
"https://images.unsplash.com/photo-1475274047050-1d0c0975c63e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bmlnaHQlMjBza3l8ZW58MHx8MHx8&w=1000&q=80", 
"https://images.unsplash.com/photo-1475274047050-1d0c0975c63e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bmlnaHQlMjBza3l8ZW58MHx8MHx8&w=1000&q=80"
];

$("#time").css("background-image", "url(" + hourCol[hours] + ")");
