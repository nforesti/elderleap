//Using DOM SpeechSynthesis, reads aloud a string
function toSpeech(word) {
    let synth = window.speechSynthesis;
    var msg = new SpeechSynthesisUtterance(word);

    //get voices of user's browser
    let voices = synth.getVoices();
    for (let voice of voices) {
        if ((voice.lang === 'en-US') && (voice.name === '"Microsoft Zira Desktop - English (United States)"')) {
            msg.voice = voice;
        }
    }
    //set characteristics of voice
    msg.rate = .7;
    msg.lang = "en-US";
    synth.speak(msg);
    
    //message if any error occurs
    msg.onerror = function (event) {
        console.error('SpeechSynthesisUtterance.onerror');
    }

}

