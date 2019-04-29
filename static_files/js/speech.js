/* 
original code by Chris Mills
https://github.com/mdn/web-speech-api/blob/master/speak-easy-synthesis
*/
function toSpeech(word) {
    /*
    event.stopPropagation();
    event.stopImmediatePropagation();*/


    const synth = window.speechSynthesis;
    const voices = window.speechSynthesis.getVoices()

    if (synth.speaking) {
        console.error('speechSynthesis.speaking');
        return;
    }
    const utterThis = new SpeechSynthesisUtterance(word);
    /*utterThis.onend = function (event) {
        console.log('SpeechSynthesisUtterance.onend');
    }*/
    utterThis.onerror = function (event) {
        console.error('SpeechSynthesisUtterance.onerror');
    }


    utterThis.lang = "en-US"
    utterThis.pitch = .7;
    utterThis.rate = .9;
    synth.speak(utterThis);
}

