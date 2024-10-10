function checkScores() {
    // Get the values of the scores from the input fields
    let itScore = parseInt(document.getElementById('itScore').value);
    let engScore = parseInt(document.getElementById('engScore').value);
    let resultMessage = '';

    if (itScore < 75) {
        resultMessage += "Remedial for IT Score.<br>";
        console.log("Remedial for IT Score");
    } else {
        resultMessage += "Excellent in IT Score.<br>";
        console.log("Excellent in IT Score");
    }

    if (engScore < 75) {
        resultMessage += "Remedial for English Score.";
        console.log("Remedial for English Score");
    } else {
        resultMessage += "Excellent in English Score.";
        console.log("Excellent in English Score");
    }

    document.getElementById('result').innerHTML = resultMessage;
}
