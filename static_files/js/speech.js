/* 
original code by Chris Mills
https://github.com/mdn/web-speech-api/blob/master/speak-easy-synthesis
*/
function toSpeech() {
    console.log(this);
    /*
    event.stopPropagation();
    event.stopImmediatePropagation();*/
    //(... rest of your JS code) 

    const synth = window.speechSynthesis;
    const voices = window.speechSynthesis.getVoices()

    if (synth.speaking) {
        console.error('speechSynthesis.speaking');
        return;
    }
    let text = $(this).children[1].value;
    var utterThis = new SpeechSynthesisUtterance(text);
    utterThis.onend = function (event) {
        console.log('SpeechSynthesisUtterance.onend');
    }
    utterThis.onerror = function (event) {
        console.error('SpeechSynthesisUtterance.onerror');
    }

    utterThis.voice = voices[12];
    utterThis.pitch = .7;
    utterThis.rate = .9;
    synth.speak(utterThis);
    console.log("isspeaking");



}