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
                document.getElementById("navbar").style.visibility = "visible";
                document.getElementById("title").style.display = "inline";
                $('#subTitle').html("");
                $('#subTitle_description').html("");
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
        console.log("!!!!! " + catName);
        $.ajax({
            url: 'browse/' + catName,
            type: 'GET',
            dataType: 'json',
            success: (data) => {
                $('#subTitle').html(catName);
                $('#subTitle_description').html("select an image or phrase to play the words aloud");
                let html = "";
                let counter = 0;
                for (subcategory in data) {
                    if (subcategory != "img") {
                        if (counter != 0) {
                            html = html + '<li onclick="toSpeech(&quot;' + subcategory + '&quot;)" class="flex-item category">\n<img src="' + data[subcategory].img.img + '">\n<h3 class="subcategoryName">' + subcategory + '</h3>\n</li>';
                        }
                        else {
                            html = html + '<li style="margin-top: 0px !important;" onclick="toSpeech(&quot;' + subcategory + '&quot;)" class="flex-item category">\n<img src="' + data[subcategory].img.img + '">\n<h3 class="subcategoryName">' + subcategory + '</h3>\n</li>';
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
                    html += '<div onclick="toSpeech(&quot;' + word + '&quot;)"class="sentence btn btn-small">' + word + '</div>';
                });
                $('#sentences').html(html);
            },
        });
        document.getElementById("navbar").style.visibility = "hidden";
        document.getElementById("title").style.display = "none";
        document.getElementById("suggestionContainer").style.display = "inline";
        document.getElementById("backToHomeBtn").style.display = "inline";
    });

});