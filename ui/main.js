console.log('Loaded!');

var element = document.getElementById('main-text');
element.innerTML = 'NEW Value';

var img = document.getElementById('madi');
var marginLeft = 0;

window.onload = init;

function moveRight() {
    marginLeft = marginLeft + 5;
    img.style.marginLeft = marginLeft + 'px';
}
img.onclick = function () {
    var internal = setInterval(moveRight, 50);
};