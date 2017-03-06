var pic = document.getElementById("vimage");
var button = document.getElementById("clear");

var colors = ["#FF0000", //red
	      "#FF4000", "#FF8000", "#FFBF00", //orangeish
	      "#FFFF00", //yellow
	      "#BFFF00", "#80FF00", "#40FF00", "#00FF00", "#00FF40", "#00FF80", //greenish
	      "#00FFBF", "#00FFFF",  "#00BFFF", "#0080FF", "#0040FF"," #0000FF", "#4000FF", //blusih
	      "#8000FF", "#BF00FF", //purpleish
	      "#FF00FF", "#FF00BF", "#FF0080", "#FF0040" //pinkish
	     ];

var prevX = null;
var prevY = null;

var connectTheDots = function(e){
    var x = e.offsetX;
    var y = e.offsetY;
  
    if (! (prevX == null && prevY == null)){
	makeLine(prevX, prevY, x, y);
	makeCircle(prevX, prevY, 10); //redraw last circle
    }
    
    makeCircle(x, y, 10);

    prevX = x;
    prevY = y;
}

var makeCircle = function(cx, cy, r){
    var c = document.createElementNS("http://www.w3.org/2000/svg", "circle");
    c.setAttribute("cx", cx);
    c.setAttribute("cy", cy);
    c.setAttribute("r", r);
    c.setAttribute("fill",  colors[parseInt(cy / 20)]);
    c.setAttribute("stroke", "black");
    pic.appendChild(c);
}

var makeLine = function(x1, y1, x2, y2){
    var line = document.createElementNS("http://www.w3.org/2000/svg", "line");
    line.setAttribute("x1", x1);
    line.setAttribute("y1", y1);
    line.setAttribute("x2", x2);
    line.setAttribute("y2", y2);
    line.setAttribute("stroke", "black");
    pic.appendChild(line);
}

var clearPic = function(e){
    while (pic.childNodes.length > 0){
	pic.removeChild(pic.childNodes[0]);
    }
    prevX = prevY = null;
}


pic.addEventListener("click", connectTheDots);
button.addEventListener("click", clearPic);
