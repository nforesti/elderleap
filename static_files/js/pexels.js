const info = require('./kiddos/info.js');
const PexelsAPI = require('pexels-api-wrapper');

//Create Client instance by passing in API key
var pexelsClient = new PexelsAPI(info.getPexel());

// function call: search API for photo with given keyword and return image source
const getImage = (keyword) => {
  let image_src = 0;
  pexelsClient.search(keyword, 1, 1)
    .then(function (result) {
      image_src = result.photos[0].src.small;
      console.log(image_src);
    }).
    catch(function (e) {
      console.err(e);
    });
  return image_src;
};

const image = getImage("hamburger");
console.log(image);

/* 
//Search API
pexelsClient.search("food", 1, 1)
    .then(function(result){
        console.log(result);
    }).
    catch(function(e){
        console.err(e);
    });

//Get Popular Photos
pexelsClient.getPopularPhotos(10, 1)
    .then(function(result){
        console.log(result);
    }).
    catch(function(e){
        console.err(e);
    });
 
//Get Curated Photos
pexelsClient.getCuratedPhotos(10, 1)
    .then(function(result){
        console.log(result);
    }).
    catch(function(e){
        console.err(e);
    });
 
//Get Photo by ID
pexelsClient.getPhoto(123456)
    .then(function(result){
        console.log(result);
    }).
    catch(function(e){
        console.err(e);
    });

    */