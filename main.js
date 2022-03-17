noseX=0;
noseY=0;
leftX=0;
rightX=0;
difference=0;

function setup(){
canvas=createCanvas(550,500);
canvas.position(560,150);
video=createCapture(VIDEO);
video.size(400,400)
poseNet=ml5.poseNet(video,modelLoaded);
poseNet.on('pose',gotPoses)
}
function modelLoaded(){
console.log("poseNet model has been initialized");
}
function gotPoses(results){
if(results.length>0){
console.log(results);
noseX=results[0].pose.nose.x;
nosey=results[0].pose.nose.y;
leftX=results[0].pose.leftWrist.x;
rightX=results[0].pose.rightWrist.x;
difference=floor(leftX-rightX);
}
}
function draw(){
background("#800000");
document.getElementById("fontsize").innerHTML="Font Size of the text is" +difference+"px";
textSize(difference);
fill("#00FF00");
text('Upraj',50,400);
}