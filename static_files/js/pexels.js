//Require Wrapper Library
const PexelsAPI = require('pexels-api-wrapper');

//Create Client instance by passing in API key
var pexelsClient = new PexelsAPI(getPexel);


/* 
//Search API
pexelsClient.search("food", 10, 1)
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