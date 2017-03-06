var pic = document.getElementById("vimage");
var go = document.getElementById("grow");
var clear = document.getElementById("clear");
var stop = document.getElementById("stop");
var width = pic.getAttribute("width");
var height = pic.getAttribute("height");
var circle = document.getElementById("circle");

var makeCircle = function(cx, cy, r){
    var c = document.createElementNS("http://www.w3.org/2000/svg", "circle");
    c.setAttribute("cx", cx);
    c.setAttribute("cy", cy);
    c.setAttribute("r", r);
    c.setAttribute("fill",  colors[parseInt(cy / 20)]);
    c.setAttribute("stroke", "black");
    pic.appendChild(c);
}

var clearPic = function(e){
    while (pic.childNodes.length > 0){
	pic.removeChild(pic.childNodes[0]);
    }
}

var intervalID;

var animate = function(){
//    window.cancelAnimationFrame( requestID );
    var rInc = 2;
    var x = width / 2;
    var y =  height / 2;
    var radius = parseInt(circle.getAttribute("r"));

    var drawDot = function() {
	circle.setAttribute("r", radius);
	radius += rInc;
	console.log(radius);
	if (radius < 1 || radius > y){
	    rInc = - rInc;
	}

	intervalID = window.setInterval( drawDot, 10 );
    }
    drawDot();
}

go.addEventListener("click", animate);
//stop.addEventListener("click", stopAnimation);
clear.addEventListener("click", clearPic);
