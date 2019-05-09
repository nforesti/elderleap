/* 
original code by Chris Mills
https://github.com/mdn/web-speech-api/blob/master/speak-easy-synthesis
*/
function toSpeech(word) {
    let synth = window.speechSynthesis;
    var msg = new SpeechSynthesisUtterance(word);

    let voices = synth.getVoices();
    for (let voice of voices) {
        console.log("there");
        if ((voice.lang === 'en-US') && (voice.name === '"Microsoft Zira Desktop - English (United States)"')) {
            msg.voice = voice;
        }
    }
    msg.rate = .7;
    msg.lang = "en-US";
    synth.speak(msg);

    msg.onerror = function (event) {
        console.error('SpeechSynthesisUtterance.onerror');
    }

}

