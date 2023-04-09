img="";
status="";
function setup(){
canvas=createCanvas(640,420);
canvas.center();
objectdetector=ml5.objectDetector("cocossd",modelloaded);
document.getElementById("status").innerHTML="status:detecting objects";
}
function preload(){
img=loadImage("bedroom.jpeg");
}
function draw(){
image(img,0,0,640,420);
fill("red");
stroke("red");
text("Bed",60,80);
noFill();
rect(50,65,350,350);
}
function modelloaded(){
    console.log("model is loaded lol")
    status=true;
    objectdetector.detect(img,gotResults);
}
function gotResults(error,results){
if(error){
    console.log(error);
}
console.log(results);
}

