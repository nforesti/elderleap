$(document).ready(() => {
    const requestURL = '/browse';
    console.log(requestURL);
    $.ajax({
        // all URLs are relative to http://localhost:3000/
        url: requestURL,
        type: 'GET',
        dataType: 'json', // this URL returns data in JSON format
        success: (data) => {
            console.log('You received some data!', data);
            let html = "";
            for (category in data) {
                html = html + '<li class="flex-item category">\n<img src="' + data[category].img + '">\n<h3>' + category + '</h3>\n</li>';
                console.log(html);
                $('#categoryContainer').html(html);
                console.log(data[category].img);
            }
        },
    });

    $(document).on('click', '.category', function () {
        const catName = $(this).find("h3")[0].innerHTML;
        $.ajax({
            url: 'browse/' + catName,
            type: 'GET',
            dataType: 'json',
            success: (data) => {
                let html = "";
                for (subcategory in data) {
                    if (subcategory != "img") {
                        html = html + '<li onclick="toSpeech(&quot;' + subcategory + '&quot;)" class="flex-item category">\n<img src="' + data[subcategory] + '">\n<h3>' + subcategory + '</h3>\n</li>';
                        $('#categoryContainer').html(html);
                    }
                }
            },
        });
    });
});