console.log('Loaded!');

//Chnage the text of the main-text div
var element = document.getElementById('main-text');

element.innerHTML = 'New Value';

//move the image

var img = document.getElementById('madi');
img.onClick = function(){
    img.style.marginLeft = '100px';
    
};