img=""
status1="";
objects=[];
function preload(){
    img=loadImage("chair.jpeg");
}
function setup(){
    canvas=createCanvas(640,420);
    canvas.center()
    objectDetecter=ml5.objectDetector("cocossd",modelLoaded);
    document.getElementById("status").innerHTML= "Status: Detecting Objects";
}
function draw(){
    image(img,0,0,640,420);
    if(status1 !=""){
   
    for(i=0;i<objects.length;i++){
        document.getElementById("status").innerHTML="Status: Objects Detected";
        fill("#FF0000");
        stroke("#FF0000");
        percent=floor(objects[i].confidence * 100);
        fontSize(30)
        text(objects[i].label+" "+percent+" %",objects[i].x+10,objects[i].y+20);
        noFill()
        console.log(objects[i].x)
        rect(objects[i].x,objects[i].y,objects[i].width,objects[i].height);   
    }
}
}
function modelLoaded(){
    console.log("modelLoaded");
    status1=true;
    objectDetecter.detect(img,gotResults);
}
function gotResults(error,results){
 if(error){
    console.log(error)
 }
 console.log(results);
 objects=results;
}

