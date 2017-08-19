console.log('Loaded!');

window.onload = function() {


var element = document.getElementById("main-text");
element.innerTML = 'NEW Value';

var ele = document.getElementById("madi");
var marginLeft = 0;

function moveRight() {
    marginLeft = marginLeft + 5;
    ele.style.marginLeft = marginLeft + 'px';
}
ele.onclick = function () {
    var internal = setInterval(moveRight, 50);
};
};