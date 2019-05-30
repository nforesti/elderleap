/**
 * Contains all code for browse.html. Populates the page (using Ajax and Firebase in backend) with category data. When a category is clicked on,
 * populates the page with subcategory data.
 */

$(document).ready(() => {

    //initialize the popup (for the first time a user clicks the delete sentence button)
    $('#JPO').popup();

    // Set default `pagecontainer` for all popups (optional, but recommended for screen readers and iOS*)
    $.fn.popup.defaults.pagecontainer = '#page';

    //method for when backtoHomeBtn is clicked. To get from subcategory page back to dashboard / categories.
    const enterBrowse = () => {
        const requestURL = '/browse';
        console.log(requestURL);
        //ajax request to /browse (get category data)
        $.ajax({
            // all URLs are relative to http://localhost:3000/
            url: requestURL,
            type: 'GET',
            dataType: 'json', // this URL  data in JSON format
            success: (data) => {
                //hide all elements unique to subcategory page
                document.getElementById("backToHomeBtn").style.display = "none";
                document.getElementById("suggestionContainer").style.display = "none";
                document.getElementById("browsehead").style.display = "block";
                document.getElementById("title").style.display = "inline";
                document.getElementById("subTitle").style.display = "none";
                document.getElementById("subTitle_description").style.display = "none";
                document.getElementById("dropDiv").style.display = "none";
                $("#dropDiv").empty();
                document.getElementById("clearDrop").style.display = "none";
                document.getElementById("speakDrop").style.display = "none";

                //add categories
                let html = "";
                let counter = 0;
                for (category in data) {
                    if (counter != 0) {
                        html = html + '<li class="flex-item topcategory category">\n<img src="' + data[category].img.img + '">\n<h3>' + category + '</h3>\n</li>';
                    }
                    else {
                        // if not the first item, needs some extra styling to line up with the first category
                        html = html + '<li style="margin-top: 0px !important;" class="flex-item topcategory category">\n<img src="' + data[category].img.img + '">\n<h3>' + category + '</h3>\n</li>';
                    }
                    console.log(html);
                    $('#categoryContainer').html(html); //add all of the category elements to the page
                    counter++;
                }
            },
        });
    };

    //to get from subcategories to dashboard categories view
    $("#backToHomeBtn").click((e) => { enterBrowse(); });

    //on page load, enter browse (fill in categories and hide subcategory elements)
    enterBrowse();

    //when a category is clicked on, go into subcategory view
    $(document).on('click', '.topcategory', function () {
        //get category name
        const catName = $(this).find("h3")[0].innerHTML;
        $('#subTitle').html("<br><br><br>" + catName);

        //get data for subcategory
        $.ajax({
            url: 'browse/' + catName,
            type: 'GET',
            dataType: 'json',
            success: (data) => {
                //display subcategories
                let html = "";
                let counter = 0;
                for (subcategory in data) {
                    if (subcategory != "img") {
                        //each li element when clicked on will speak the subcategory (toSpeech)
                        //each img is draggable
                        //each img has an expand arrow overlay to indicate it can be dragged
                        if (counter != 0) {
                            html = html + '<li onclick="toSpeech(&quot;' + subcategory + '&quot;)" id="target ' + subcategory + '" class="flex-item category">\n<img draggable="true" ondragstart="drag(event)" id="' + subcategory + '" src="' + data[subcategory].img.img + '">\n <div class="text-block" draggable="true"  ondragstart="drag(event)" align="left"><i class="fas fa-expand-arrows-alt"></i></div><h3 class="subcategoryName">' + subcategory + '</h3>\n</li>';
                        }
                        else {
                            //some different initial styling for non-first elements
                            html = html + '<li style="margin-top: 0px !important;" onclick="toSpeech(&quot;' + subcategory + '&quot;)" id="target ' + subcategory + '" class="flex-item category" >\n<img  draggable="true" ondragstart="drag(event)" id="' + subcategory + '" src="' + data[subcategory].img.img + '">\n <div class="text-block" draggable="true" ondragstart="drag(event)" align="left"><i  class="fas fa-expand-arrows-alt"></i></div>\n<h3 class="subcategoryName">' + subcategory + '</h3>\n</li>';
                        }
                        $('#categoryContainer').html(html); //display subcategories in page
                    }
                    counter++;
                }
            },
        });

        //get sentence/phrase data for subcategory
        $.ajax({
            url: '/sentences/' + catName,
            type: 'GET',
            dataType: 'json',
            success: (data) => {
                //display sentence/phrases
                html = "";
                data.words.forEach(word => {
                    //each element when clicked on will be spoken
                    //each element is draggable
                    //each element has an expand arrow overlay to indicate it can be dragged
                    html += '<div onclick="toSpeech(&quot;' + word + '&quot;)" class="sentence btn btn-small" id= "' + word + '" ondragstart="dragStart(event)" draggable="true"><div class="text-block-sentence" align="center"><i style="cursor: grab" class="fas fa-expand-arrows-alt"></i></div>' + word + '</div>';
                });
                $('#sentences').html(html); //display sentences and phrases
            },
        });
        
        //show all elements for subcategories and hide elements unique to category dashboard
        document.getElementById("browsehead").style.display = "none";
        document.getElementById("title").style.display = "none";
        document.getElementById("navhr").style.display = "none";
        document.getElementById("suggestionContainer").style.display = "inline";
        document.getElementById("dropDiv").style.display = "inline-block";
        document.getElementById("backToHomeBtn").style.display = "inline";
        document.getElementById("subTitle").style.display = "block";
        document.getElementById("subTitle_description").style.display = "block";
        document.getElementById("clearDrop").style.display = "inline";
        document.getElementById("speakDrop").style.display = "inline";
    });

});
