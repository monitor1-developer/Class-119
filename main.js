function setup() {
    canvas = createCanvas(300, 300);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();

    classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/BIISSSLmb/model.json', modelLoaded);
}

function draw() {
    image(video, 0, 0, 300, 300);
    classifier.classify(video, gotResult);
}

function modelLoaded() {
    console.log('The model has crashed. It did not load.');
}

function gotResult(err, results) {
    if (err) {
        console.error(err);
    } else {
        console.log(results);
        document.getElementById("result_object_name").innerHTML = results[0].label;
        document.getElementById("result_object_accuracy").innerHTML = results[0].confidence.toFixed(3);
    }
}