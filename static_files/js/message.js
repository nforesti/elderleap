$(document).ready(() => {
    $("#messageBtn").click(messageToSpeech);    
});

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
 *
 * Please use as you wish at your own risk.
 */

/**
 * Usage:
 *
 * From JavaScript, use:
 *     $(<node>).TextAreaExpander(<minHeight>, <maxHeight>);
 *     where:
 *       <node> is the DOM node selector, e.g. "textarea"
 *       <minHeight> is the minimum textarea height in pixels (optional)
 *       <maxHeight> is the maximum textarea height in pixels (optional)
 *
 * Alternatively, in you HTML:
 *     Assign a class of "expand" to any <textarea> tag.
 *     e.g. <textarea name="textarea1" rows="3" cols="40" class="expand"></textarea>
 *
 *     Or assign a class of "expandMIN-MAX" to set the <textarea> minimum and maximum height.
 *     e.g. <textarea name="textarea1" rows="3" cols="40" class="expand50-200"></textarea>
 *     The textarea will use an appropriate height between 50 and 200 pixels.
 */
const delMessage = (element) =>{
    event.stopPropagation(); element.parentElement.parentElement.removeChild(element.parentElement);
}

const addMessage = e =>{
    $("#messageBtn").css("background-color", "rgba(128, 128, 128, 0.486)");
    $("#saveBtn").css("opacity", ".4");
    let message = document.getElementById("messageArea").value;
    document.getElementById("messageArea").value = '';
    $("#savedMessages").append('<div onclick="toSpeech(&quot;' + message + '&quot;)" class="messages">'+message+'<btn style="padding: 0 .5em; border: solid red 1px; line-height: 2.5em; font-size: .5em;color: red;float: right" onclick="delMessage(this)"><i  class="fas fa-trash-alt"></i></btn></div>');
}

(function ($) {

    // jQuery plugin definition
    $.fn.TextAreaExpander = function (minHeight, maxHeight) {

        // resize a textarea
        function ResizeTextarea(e) {

            // event or initialize element?
            e = e.target || e;



            if (e.value.length == 0){
                $("#messageBtn").css("background-color", "rgba(128, 128, 128, 0.486)");
                $("#saveBtn").css("opacity", ".4");
                document.getElementById('saveBtn').removeAttribute("onclick");
            }
            else {
                $("#messageBtn").css("background-color", "orange");
                $("#saveBtn").css("opacity", "1");
                document.getElementById('saveBtn').onclick= addMessage;
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

function messageToSpeech() {
    /*
    event.stopPropagation();
    event.stopImmediatePropagation();*/
    const message = $("#messageArea").val();
    toSpeech(message);
}