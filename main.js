noseX= 0;
noseY= 0;

function preload() {
mustache= loadImage('https://i.postimg.cc/3x3QzSGq/m.png');
}

function setup() {
canvas= createCanvas(300, 300);
canvas.center();
canvas.position(440, 200)
video= createCapture(VIDEO);
video.hide();
video.size(300, 300);

poseNet= ml5.poseNet(video, modelLoaded);
poseNet.on('pose', gotPose);
}

function draw() {
    image(video, 0, 0, 300, 300);
    image(mustache, noseX, noseY, 40, 40)
}

function take_snapshot() {
save('MyFilterImage.png');
}

function modelLoaded() {
    console.log("PoseNet is Initialized");
}

function gotPose(results) {
    if(results.length > 0){
console.log(results);
noseX= results[0].pose.nose.x-20;
noseY= results[0].pose.nose.y;
console.log("nose x = " + noseX);
console.log("nose y = " + noseY);
    }
}