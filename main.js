Webcam.set({
    width:310,
    height:300,
    image_format:"png",
    png_quality:90,
    constraints:{
        facingMode:"environment"
    }
});

camera=document.getElementById("camera");
Webcam.attach("#camera");

function take_snapshot(){
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML="<img id='captured_image' src='"+data_uri+"'>"
    });
}


console.log('ml5 version:',ml5.version);


classifier=ml5.imageClassifier("MobileNet",modelLoaded);

function modelLoaded(){
 
    console.log("model is loaded");
}


function check(){
img=document.getElementById("captured_image");
classifier.classify(img,gotResult);
}

function gotResult(error,Results){
if(error){
    console.error(error);
}
else{
    console.log(Results);
    document.getElementById("object_name").innerHTML=Results[0].label;
}
}