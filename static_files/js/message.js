/**
 * contains all functions for the message.html page, including adding, deleting, and reading aloud (calls speech.js) messages typed in by the user. Also includes
 * a method that creates a responsive textbox that changes size depending on browser size and how much text is inside.
 * */


$(document).ready(() => {

    //initialize jquery popup for when trash button is first clicked
    $('#JPO').popup();
    // Set default `pagecontainer` for all popups (optional, but recommended for screen readers and iOS*)
    $.fn.popup.defaults.pagecontainer = '#page'

    $("#messageBtn").click(messageToSpeech);

    //ajax to server.js to load past saved messages from Firebase
    $.ajax({
        url: 'message/',
        type: 'GET',
        dataType: 'json',
        success: (messages) => {
            Object.keys(messages).forEach(function (key) {
                //each message when clicked will be read aloud
                //JPO_open means: when clicked this element will call the jquery popup overlay
                //when trash is clicked, that message will be deleted from the browser and Firebase
                   $("#savedMessages").prepend('<div id=' + key + ' onclick="toSpeech(&quot;' + key + '&quot;)" class="messages">' + key + '<btn  class="JPO_open" style="padding: 0 .5em; border: solid red 1px; line-height: 2.5em; font-size: .5em;color: red;float: right" onclick="delMessage(this)"><i  class="fas fa-trash-alt"></i></btn></div>');
                
            });
        },
    });


});


//function containing Ajax to server.js called to delete a message from Firebase
const delAjax = (element) => {
    $.ajax({
        url: 'message/' + element.parentElement.textContent,
        type: 'DELETE',
        dataType: 'json',
        success: (messages) => {
            event.stopPropagation();
            element.parentElement.parentElement.removeChild(element.parentElement);
        },
    });
}

//delete a message (From browser view)
const delMessage = (element) => {
    //if it is the user's first time clicking the trash button, open a popup to ask for confirmation
    if (localStorage.getItem("firstTime") == null) {
        //if clicks yes, delete message and hide popup
        $("#yesDelete").on("click", function () {
            delAjax(element);
            $('#JPO').popup('hide');
        });
        //if no, hide popup
        $("#noDelete").on("click", function () {
            $('#JPO').popup('hide');
        });
        $('#JPO').popup();
        localStorage.setItem("firstTime", "first");
    }
    else {
        event.stopPropagation();
        //delete message
        delAjax(element);
    }
}

//called when a user saves a message
const addMessage = e => {
    //change opacity of buttons so that they are brighter, signaling that buttons can be pressed
    $("#messageBtn").css("background-color", "rgba(128, 128, 128, 0.486)");
    $("#saveBtn").css("opacity", ".4");
    //get the message
    let message = document.getElementById("messageArea").value;
    document.getElementById("messageArea").value = '';
    //ajax request to server.js to add message to Firebase and to messages in browser view
    $.ajax({
        url: 'message/' + message,
        type: 'GET',
        dataType: 'json',
        success: (newid) => {
            //id of the new message element
            console.log("newid" + newid);
            //when message is clicked on, will be read aloud. when trash is clicked on, open popup if first time.
            if (document.getElementById(message) == null) {
            $("#savedMessages").prepend('<div onclick="toSpeech(&quot;' + message + '&quot;)" id="'+message+'" class="messages">' + message + '<btn class="JPO_open" style="padding: 0 .5em; border: solid red 1px; line-height: 2.5em; font-size: .5em;color: red;float: right" onclick="delMessage(this)"><i  class="fas fa-trash-alt"></i></btn></div>');
            }
        },
    });
}



//reads aloud the message that has been typed in
function messageToSpeech() {
    const message = $("#messageArea").val();
    toSpeech(message);
}


/**
 * TextAreaExpander plugin for jQuery
 * v1.0
 * Expands or contracts a textarea height depending on the
 * quatity of content entered by the user in the box.
 *
 * By Craig Buckler, Optimalworks.net
 *
 * As featured on SitePoint.com:
 * http://www.sitepoint.com/blogs/2009/07/29/build-auto-expanding-textarea-1/
 */

(function ($) {

    // jQuery plugin definition
    $.fn.TextAreaExpander = function (minHeight, maxHeight) {

        // resize a textarea
        function ResizeTextarea(e) {

            // event or initialize element?
            e = e.target || e;



            if (e.value.length == 0) {
                $("#messageBtn").css("background-color", "rgba(128, 128, 128, 0.486)");
                $("#saveBtn").css("opacity", ".4");
                document.getElementById('saveBtn').removeAttribute("onclick");
            }
            else {
                $("#messageBtn").css("background-color", "orange");
                $("#saveBtn").css("opacity", "1");
                document.getElementById('saveBtn').onclick = addMessage;
            }

            var vlen = e.value.length, ewidth = e.offsetWidth;
            if (vlen != e.valLength || ewidth != e.boxWidth) {

                if ((vlen < e.valLength || ewidth != e.boxWidth)) e.style.height = "0px";
                var h = Math.max(e.expandMin, Math.min(e.scrollHeight, e.expandMax));

                e.style.overflow = (e.scrollHeight > h ? "auto" : "hidden");
                e.style.height = h + "px";

                e.valLength = vlen;
                e.boxWidth = ewidth;
            }
            if (this.Initialized) {
                let newwidth = .8 * window.innerWidth;
                $(this).css("width", newwidth);


                return true;
            };
        }

        // initialize
        this.each(function () {

            // is a textarea?
            if (this.nodeName.toLowerCase() != "textarea") return;

            // set height restrictions
            var p = this.className.match(/expand(\d+)\-*(\d+)*/i);
            this.expandMin = minHeight || (p ? parseInt('0' + p[1], 10) : 0);
            this.expandMax = maxHeight || (p ? parseInt('0' + p[2], 10) : 99999);

            // initial resize
            ResizeTextarea(this);

            let width = .8 * window.innerWidth;

            // zero vertical padding and add events
            if (!this.Initialized) {
                this.Initialized = true;
                $(this).css("padding-top", 0).css("padding-bottom", 0);
                $(this).css("width", width);
                $(this).bind("keyup", ResizeTextarea).bind("focus", ResizeTextarea);
            }
        });

        return this;
    };

})(jQuery);


// initialize all expanding textareas
jQuery(document).ready(function () {
    jQuery("textarea[class*=expand]").TextAreaExpander(200, window.innerHeight * .7);
    console.log("print");
});