$(document).ready(() => {
    const database = firebase.database();
    $(document).on('click', '#updateDatabase', function () {
        console.log("print");
        database.ref('categories/').set(fakeData.preset);
    });
    const fakeData =
    {
        "preset": {
            "category": {
                "img": "https://image.flaticon.com/icons/png/128/42/42829.png",
                "subcategory1": "https://image.flaticon.com/icons/png/128/42/42829.png",
                "subcategory2": "https://image.flaticon.com/icons/png/128/42/42829.png",
                "subcategory3": "https://image.flaticon.com/icons/png/128/42/42829.png",
                "subcategory4": "https://image.flaticon.com/icons/png/128/42/42829.png"
            },
            "category1": {
                "img": "https://image.flaticon.com/icons/png/128/42/42829.png",
                "subcategory5": "https://image.flaticon.com/icons/png/128/42/42829.png",
                "subcategory6": "https://image.flaticon.com/icons/png/128/42/42829.png",
                "subcategory7": "https://image.flaticon.com/icons/png/128/42/42829.png",
                "subcategory8": "https://image.flaticon.com/icons/png/128/42/42829.png",
                "subcategory9": "https://image.flaticon.com/icons/png/128/42/42829.png"
            },
            "category2": {
                "img": "https://image.flaticon.com/icons/png/128/42/42829.png",
                "subcategory10": "https://image.flaticon.com/icons/png/128/42/42829.png",
                "subcategory11": "https://image.flaticon.com/icons/png/128/42/42829.png",
                "subcategory12": "https://image.flaticon.com/icons/png/128/42/42829.png",
                "subcategory13": "https://image.flaticon.com/icons/png/128/42/42829.png",
                "subcategory14": "https://image.flaticon.com/icons/png/128/42/42829.png"
            },
            "category3": {
                "img": "https://image.flaticon.com/icons/png/128/42/42829.png",
                "subcategory15": "https://image.flaticon.com/icons/png/128/42/42829.png",
                "subcategory16": "https://image.flaticon.com/icons/png/128/42/42829.png",
                "subcategory17": "https://image.flaticon.com/icons/png/128/42/42829.png",
                "subcategory18": "https://image.flaticon.com/icons/png/128/42/42829.png",
                "subcategory19": "https://image.flaticon.com/icons/png/128/42/42829.png"
            }
        }
    }

    






    /*
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
                    html = html + '<li class="flex-item category">\n<img src="' + data[category].img + '">\n<h3>' + category + '</h3>\n</li>';
                    console.log(html);
                    $('#categoryContainer').html(html);
                    console.log(data[category].img);
                }
            },
        });
    }
    $("#backToHomeBtn").click((e) => {enterBrowse();});
    enterBrowse();

    $(document).on('click', '.category', function () {
        const catName = $(this).find("h3")[0].innerHTML;
        $.ajax({
            url: 'browse/' + catName,
            type: 'GET',
            dataType: 'json',
            success: (data) => {
                $('#subTitle').html(catName);
                let html = "";
                for (subcategory in data) {
                    if (subcategory != "img") {
                        html = html + '<li onclick="toSpeech(&quot;' + subcategory + '&quot;)" class="flex-item category">\n<img src="' + data[subcategory] + '">\n<h3>' + subcategory + '</h3>\n</li>';
                        $('#categoryContainer').html(html);
                    }
                }
            },
        });

        document.getElementById("backToHomeBtn").style.display = "inline";
    });
    */
});