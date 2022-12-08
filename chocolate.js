function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
  document.getElementById("main").style.marginLeft = "250px";
}
var x = 0;
function toggleNav(){
	if (x == 0){
		openNav();
		x++;
	}else{
		closeNav();
		x--;
	}
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
  document.getElementById("main").style.marginLeft = "0";
}
const updateProperties = (elem, state) => {

  elem.style.setProperty('--x', `${ state.x }px`)
  elem.style.setProperty('--y', `${ state.y }px`)
  elem.style.setProperty('--width', `${ state.width }px`)
  elem.style.setProperty('--height', `${ state.height }px`)
  elem.style.setProperty('--radius', state.radius)
  elem.style.setProperty('--scale', state.scale)

}

document.querySelectorAll('.cursor').forEach((cursor) => {

  let onElement

  const createState = (e) => {

    const defaultState = {
      x: e.clientX,
      y: e.clientY,
      width: 42,
      height: 42,
      radius: '100px'
    }

    const computedState = {}

    if (onElement != null) {
      const {
        top,
        left,
        width,
        height
      } = onElement.getBoundingClientRect()
      const radius = window.getComputedStyle(onElement).borderTopLeftRadius

      computedState.x = left + width / 2
      computedState.y = top + height / 2
      computedState.width = width
      computedState.height = height
      computedState.radius = radius
    }

    return {
      ...defaultState,
      ...computedState
    }

  }

  document.addEventListener('mousemove', (e) => {
    const state = createState(e)
    updateProperties(cursor, state)
  })

  document.querySelectorAll('#WE , span , .modalStuff').forEach((elem) => {
    elem.addEventListener('mouseenter', () => onElement = elem)
    elem.addEventListener('mouseleave', () => onElement = undefined)
  })

})
var modals = document.getElementsByClassName("modal");
var modal = document.getElementById("modalBox");
var modaltwo = document.getElementById("modalBox2");

var modalthree = document.getElementById("modalBox3");

var modalfour = document.getElementById("modalBox4");

var modalfive = document.getElementById("modalBox5");
function closeModal(){
    modal.style.display = "none";

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
window.onclick = function(event) {
    if (event.target == modals[0]){
        closeModal();
    }
    else if (event.target == modals[1]) {
    		closeModal();
    }
}
//Day-night cycler 
var time = new Date("January 1, 0001 12:15:30");
// tester
// "January 1, 0001 07:15:30"
var hours = time.getHours();

//console.log(hours); /*checker*/

var hourCol = ["#292929", "#292929", "#292929", "#292929", "#292929", "#292929", "#672b7a", "#FFA756", "#00f9ff", "	#7afcff", "	#7afcff", "	#91fcff", "#bafdff", "	#91fcff", "	#7afcff", "	#7afcff", "#00f9ff", "#FE2C54", "#672b7a", "#292929", "#292929", "#292929", "#292929"];

$("body").css("background-color", hourCol[hours]);
