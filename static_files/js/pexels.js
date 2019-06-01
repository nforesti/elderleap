/* 
* Filename: pexels.js
* Purpose: create instance of Pexels client for API function calls in server.js. 
*   Pexels API wrapper functions listed in the comments below  
*/

const info = require('./kiddos/info.js');
const PexelsAPI = require('pexels-api-wrapper');

//Create Client instance by passing in API key
var pexelsClient = new PexelsAPI(info.getPexel());


/* Pexels API wrapper functions. 

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