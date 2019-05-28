
function clearDropDiv() {

    if (localStorage.getItem("firsttimeclear") == null) {
        console.log("in first time");
        $("#yesDelete").on("click", function () {
            $("#dropDiv").empty();
            $('#JPO').popup('hide');
        });

        $("#noDelete").on("click", function () {
            $('#JPO').popup('hide');
        });
        console.log("before popup");
        $('#JPO').popup();
        console.log("after popup");
        localStorage.setItem("firsttimeclear", "first");
    }
    else {
        event.stopPropagation();
        $("#dropDiv").empty();
    }
}

function allowDrop(ev) {
    ev.preventDefault();
}

function drag(ev) {
    console.log("drag");

    console.log(event.target.id);
    if ($(event.target).hasClass("text-block")) {
        console.log(event.target);
        console.log($(event.target).prev("img"));
        event.target.id = $(event.target).prev("img")[0].id;
        console.log("newest" + event.target.id);
    }
    ev.dataTransfer.setData("text", ev.target.id);
}

function drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    var nodeCopy = document.getElementById(data).cloneNode(true);
    nodeCopy.id = "new" + data;
    let newtext = nodeCopy.textContent;
    $(nodeCopy).empty();
    nodeCopy.textContent = newtext;
    ev.target.appendChild(nodeCopy);
    document.getElementById(nodeCopy.id).setAttribute('draggable', false);
    document.getElementById(nodeCopy.id).removeAttribute("onclick");
    if (nodeCopy.tagName == "IMG") {
        $($("#" + nodeCopy.id)).addClass("copy");
    }
    else {
        console.log("is div");
        $($("#" + nodeCopy.id)).addClass("copy");
    }
}

/* only for sub-category div 
function dragEnd(event) {
}
*/

function dragStart(event) {

    if ($(event.target).hasClass("text-block")) {
        console.log(event.target);
        console.log($(event.target).prev("img"));
        event.target.id = $(event.target).prev("img")[0].id;
        console.log("newest" + event.target.id);
    }
    console.log("dragStart");
    event.dataTransfer.setData("Text", event.target.id);

}

function readAloud(event) {
    let dragString = "";
    document.getElementById('dropDiv').querySelectorAll('*').forEach(node => {
        if ($(node).hasClass("sentence")) {
            dragString += node.textContent + " ";
        }
        else {
            dragString += node.id.replace('new', ' ') + " ";
        }
    });
    console.log(dragString);
    toSpeech(dragString);
}

