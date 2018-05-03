var namespace = "http://www.w3.org/2000/svg";




function transformPoint(event, myCanvas) {
  var pt = myCanvas.createSVGPoint()
  pt.x = event.x
  pt.y = event.y
  var mousept =  pt.matrixTransform(myCanvas.getScreenCTM().inverse())
  return mousept
}
var canvas3 = document.getElementById("screen3");
var canvas4 = document.getElementById("screen4");
var canvas1 = document.getElementById("screen1");

canvas3.addEventListener("mousedown",function(e){
var pt3 =  transformPoint(e,canvas3);
var xpos3 = pt3.x;
var ypos3 = pt3.y;

var crab = document.createElementNS(namespace,"image");
crab.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href","http://images.clipartpanda.com/fish-clipart-cliparti1_fish-clip-art_10.jpg")
crab.setAttribute("x",xpos3)
crab.setAttribute("y",ypos3)
crab.setAttribute("width","7")
crab.setAttribute("height","7")
canvas3.appendChild(crab);
})

canvas1.addEventListener("mousedown",function(e){
var pt1 =  transformPoint(e,canvas1);
var xpos1 = pt1.x;
var ypos1 = pt1.y;

var redCirc = document.createElementNS(namespace,"circle");
redCirc.setAttribute("cx", xpos1)
redCirc.setAttribute("r","1.5")
redCirc.setAttribute("cy", ypos1)
redCirc.setAttribute("fill","red")
redCirc.setAttribute("fill-opacity","1")
canvas1.appendChild(redCirc);
})

canvas4.addEventListener("mousedown",function(e){
var pt4 =  transformPoint(e,canvas4);
var xpos4 = pt4.x;
var ypos4 = pt4.y;

var blueRect = document.createElementNS(namespace,"rect");
blueRect.setAttribute("x", xpos4)
blueRect.setAttribute("y", ypos4)
blueRect.setAttribute("height", "5")
blueRect.setAttribute("width","2")
blueRect.setAttribute("fill","blue")
blueRect.setAttribute("fill-opacity","1")
canvas4.appendChild(blueRect);
})
