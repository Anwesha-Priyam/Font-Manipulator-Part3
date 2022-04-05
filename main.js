console.log("trial uncountable? finally working! yay! :O");

rightWrist=0;
leftWrist=0;

difference=0;

function preload()
{}

function setup()
{
    canvas=createCanvas(300,500);
    canvas.position(100,100);

    video=createCapture(VIDEO);
    video.size(300, 200);

    poseNet=ml5.poseNet(video, modelLoaded);
    poseNet.on("pose", gotPoses);
}

function modelLoaded()
{
    console.log("Model Loaded!");
}

function gotPoses(results,error)
{
    if(error){
        console.log(error);
    }
    else if(results.length > 0)
    {
        console.log(results);
        leftWristX=results[0].pose.leftWrist.x;
        rightWristX=results[0].pose.rightWrist.x;
        
        difference=floor(leftWristX - rightWristX);
    }
}

function draw()
{
    background('#8D1818');
    textSize(difference);
    fill('#ffe8f2');
    text("ANWESHA", 40, 460);

    //image(video, 100, 100, 297, 497);
}