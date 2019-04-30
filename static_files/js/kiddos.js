$(document).ready(() => {
    $("#signInBtn").click(function () {
        window.location.replace("/browse.html");
    });

    $("#messageBtn").click(messageToSpeech);
    $("#backToHomeBtn").click((e) => {console.log("print");window.location.replace("/browse.html");});
});


