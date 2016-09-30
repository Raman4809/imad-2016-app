console.log('Loaded!');

console.log('loaded');

//Change the text of the main-text div
var element = document.getElementById("main-text");

element.innerHTML = 'New value';

//move the image

var img = document.getElementById('madi');
var margin = 0;
function moveRight (){
	marginLeft = marginLeft + 10;
	img.style.marginLeft = marginLeft + 'px';
}
img.onClick = function () {
	var interval = setInterval(moveRight, 50);
}