function setup(){
  video = createCapture(VIDEO);
  video.size(550,500);
  canvas = createCanvas(450,450);
  canvas.position(600,130);

  poseNet = ml5.poseNet(video,modelLoaded);
  poseNet.on('pose' , gotPoses);
  }

  function modelLoaded(){
    console.log('posenet model is initialized');
  }

    function draw(){
       background('#b76e79');
     }

  function gotPoses(results){
if(results.length>0){
 console.log(results);
}
  }