function startlisting() {
    navigator.mediaDevices.getUserMedia({
        audio: true
    });
    sound_model = ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/mEGg34RX1/model.json", modelloaded)
}

function modelloaded() {
    sound_model.classify(getresult)
}

function getresult(e, r) {
    if (e) {
        console.error(e);
    } else {
        console.log(r);

        red=Math.floor(Math.random()*256);
        green=Math.floor(Math.random()*256);
        blue=Math.floor(Math.random()*256);
        document.getElementById("sound_name").style.color="rgb("+red+","+green+","+blue+")";
        document.getElementById("sound_accuracy").style.color="rgb("+red+","+green+","+blue+")";

        document.getElementById("sound_name").innerHTML = "i can hear " + r[0].label;
        document.getElementById("sound_accuracy").innerHTML = "accuracy: " + (r[0].confidence * 100).toFixed(2) + "%";
        img1 = document.getElementById("a1");

        if (r[0].label == "cat") {
            img1.src = "cat.gif";

        }
      
        
        else if(r[0].label=="dog"){
            img1.src = "dog.gif";
           
            
        }
        else{
            img1.src = "ear.gif";
            
        }
    }
}