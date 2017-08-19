console.log('Loaded!');

var element = document.getElementById('main-text');
element.innerTML = 'NEW Value';

var img = document.getElementById('madi');
var marginLeft = 0;

function moveRight() {
    marginLeft = marginLeft + 5;
    img.style.marginLeft = marginLeft + 'px';
}
img.onclick = function a () {
    var internal = setInterval(moveRight, 50);
};