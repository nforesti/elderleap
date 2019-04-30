$(document).ready(() => {
    $("#signInBtn").click(function () {
        window.location.replace("/browse.html");
    });

    $("#messageBtn").click(messageToSpeech);
});


