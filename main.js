noseX=0;
noseY=0;
difference=0;
rightWristX=0;
leftWristX=0;

function setup(){
video=createCapture(VIDEO);
video.size(550,500);
canvas=createCanvas(550,550);
canvas.position(560,150);
poseNet=ml5.poseNet(video,modelLoaded);
poseNet.on('pose',gotPoses);
}

function modelLoaded(){
console.log('modelLoaded');
}

function gotPoses(results){
if(results.length>0){
rightWristX=results[0].pose.rightWrist.x;
leftWristX=results[0].pose.leftWrist.x;
difference=floor(leftWristX-rightWristX);
console.log('rightwristX='+rightWristX+'leftwristX='+rightWristX+'difference='+difference);
}
}

function draw(){
background('#969A97');
document.getElementById('font_size').innerHTML='Font size of the text will be-' + difference + 'px';
textSize(difference);
fill('#FFE787');
text('Peter',50,400);
}