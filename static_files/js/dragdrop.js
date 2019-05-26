
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
    nodeCopy.id = "newId";
    ev.target.appendChild(nodeCopy);
}


function dragStart(event) {
    event.dataTransfer.setData("Text", event.target.id);
  }


  /*
function dragend_handler(ev) {
    var dataList = ev.dataTransfer.items;
    for (var i = 0; i < dataList.length; i++) {
        dataList.remove(i);
    }
    // Clear any remaining drag data
    dataList.clear();
}

*/



