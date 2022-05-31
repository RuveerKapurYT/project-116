noseX=0;
noseY=0;
function preload(){
    mustache=loadImage('https://i.postimg.cc/WbLCJTN2/m.png');
}

function setup(){
    canvas=createCanvas(300,300);
    canvas.center();
    video=createCapture(VIDEO);
    video.size(300,300);
    video.hide();
    poseNet=ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotPoses);
}

function draw(){
    image(video,0,0,300,300); 
    image(mustache,noseX-18,noseY-18,40,30);
}

function take_snapshot(){
    save('myFilterImage.png');
    
}
function modelLoaded(){
    console.log("posenet is initialised");
    
}
function gotPoses(results){
    if(results.length>0){
        console.log(results);
        console.log("nosex="+results[0].pose.nose.x);
        console.log("nosey="+results[0].pose.nose.y);
    }
}