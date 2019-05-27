
function clearDropDiv() {
    $("#dropDiv").empty(); 
}

function allowDrop(ev) {
    ev.preventDefault();
}

function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
}

function drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    var nodeCopy = document.getElementById(data).cloneNode(true);
    nodeCopy.id = "new" + data ; 
    ev.target.appendChild(nodeCopy);
    document.getElementById(nodeCopy.id).setAttribute('draggable', false);
    document.getElementById(nodeCopy.id).removeAttribute("onclick");
}

/* only for sub-category div 
function dragEnd(event) {
}
*/

function dragStart(event) {
    event.dataTransfer.setData("Text", event.target.id);
    
  }




