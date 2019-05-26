$(document).ready(() => {

    const enterBrowse = () => {
        const requestURL = '/browse';
        console.log(requestURL);
        $.ajax({
            // all URLs are relative to http://localhost:3000/
            url: requestURL,
            type: 'GET',
            dataType: 'json', // this URL  data in JSON format
            success: (data) => {
                document.getElementById("backToHomeBtn").style.display = "none";
                document.getElementById("suggestionContainer").style.display = "none";
                document.getElementById("browsehead").style.display = "block";
                document.getElementById("title").style.display = "inline";
                document.getElementById("subTitle").style.display="none";
                document.getElementById("subTitle_description").style.display="none";
                document.getElementById("dropDiv").style.display = "none";
                document.getElementById("dropDiv").append= "";
                console.log('You received some data!', data);
                let html = "";
                let counter = 0;
                for (category in data) {
                    if (counter != 0) {
                        html = html + '<li class="flex-item topcategory category">\n<img src="' + data[category].img.img + '">\n<h3>' + category + '</h3>\n</li>';
                    }
                    else {
                        html = html + '<li style="margin-top: 0px !important;" class="flex-item topcategory category">\n<img src="' + data[category].img.img + '">\n<h3>' + category + '</h3>\n</li>';

                    }
                    console.log(html);
                    $('#categoryContainer').html(html);
                    console.log(data[category].img);
                    counter++;
                }
            },
        });
    }
    $("#backToHomeBtn").click((e) => { enterBrowse(); });
    enterBrowse();

    $("#updateDatabase").click((e) => { updateDatabase(); });

    $(document).on('click', '.topcategory', function () {
        const catName = $(this).find("h3")[0].innerHTML; 
        $('#subTitle').html(catName);
        $.ajax({
            url: 'browse/' + catName,
            type: 'GET',
            dataType: 'json',
            success: (data) => {
                let html = "";
                let counter = 0;
                for (subcategory in data) {
                    if (subcategory != "img") {
                        if (counter != 0) {
                            html = html + '<li onclick="toSpeech(&quot;' + subcategory + '&quot;)" class="flex-item category" >\n<img id="'+subcategory+'" draggable="true" ondragstart="drag(event)"; src="' + data[subcategory].img.img + '">\n<h3 class="subcategoryName">' + subcategory + '</h3>\n</li>';
                        }
                        else {
                            html = html + '<li style="margin-top: 0px !important;" onclick="toSpeech(&quot;' + subcategory + '&quot;)" class="flex-item category" >\n<img id="'+subcategory+'" draggable="true" ondragstart="drag(event)" src="' + data[subcategory].img.img + '">\n<h3 class="subcategoryName">' + subcategory + '</h3>\n</li>';
                        }
                        $('#categoryContainer').html(html);
                    }
                    counter++;
                }
            },
        });
        $.ajax({
            url: '/sentences/' + catName,
            type: 'GET',
            dataType: 'json',
            success: (data) => {
                html = "";
                data.words.forEach(word => {
                    html += '<div onclick="toSpeech(&quot;' + word + '&quot;)" class="sentence btn btn-small" id= "'+ word +'" ondragstart="dragStart(event)" draggable="true">' + word + '</div>';
                });
                $('#sentences').html(html);
            },
        });
        document.getElementById("browsehead").style.display = "none";
        document.getElementById("title").style.display = "none";
        document.getElementById("suggestionContainer").style.display = "inline";
        document.getElementById("dropDiv").style.display = "inline-block";
        document.getElementById("backToHomeBtn").style.display = "inline";
        document.getElementById("subTitle").style.display="block";
        document.getElementById("subTitle_description").style.display="block";
    });

});