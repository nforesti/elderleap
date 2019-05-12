$(document).ready(() => {

    const enterBrowse = () => {
        const requestURL = '/browse';
        console.log(requestURL);
        $.ajax({
            // all URLs are relative to http://localhost:3000/
            url: requestURL,
            type: 'GET',
            dataType: 'json', // this URL returns data in JSON format
            success: (data) => {
                document.getElementById("backToHomeBtn").style.display = "none";
                $('#subTitle').html("");
                console.log('You received some data!', data);
                let html = "";
                for (category in data) {
                    html = html + '<li class="flex-item topcategory category">\n<img src="' + data[category].img.img + '">\n<h3>' + category + '</h3>\n</li>';
                    console.log(html);
                    $('#categoryContainer').html(html);
                    console.log(data[category].img);
                }
            },
        });
    }
    $("#backToHomeBtn").click((e) => {enterBrowse();});
    enterBrowse();

    $("#updateDatabase").click((e) => {updateDatabase();});

    $(document).on('click', '.topcategory', function () {
        const catName = $(this).find("h3")[0].innerHTML;
        console.log("!!!!! " + catName);
        $.ajax({
            url: 'browse/' + catName,
            type: 'GET',
            dataType: 'json',
            success: (data) => {
                $('#subTitle').html(catName);
                let html = "";
                for (subcategory in data) {
                    if (subcategory != "img") {
                        html = html + '<li onclick="toSpeech(&quot;' + subcategory + '&quot;)" class="flex-item category">\n<img src="' + data[subcategory].img.img + '">\n<h3>' + subcategory + '</h3>\n</li>';
                        $('#categoryContainer').html(html);
                    }
                }
            },
        });

        document.getElementById("backToHomeBtn").style.display = "inline";
    });
    
});