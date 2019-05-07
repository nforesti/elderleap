
const info = require('./info');
const PexelsAPI = require('pexels-api-wrapper');

//Create Client instance by passing in API key
var pexelsClient = new PexelsAPI(info.getPexel());


//Search API
pexelsClient.search("food", 1, 1)
  .then(function (result) {
    console.log(result);
  }).
  catch(function (e) {
    console.err(e);
  });


//Fake Database from Milestone 2

const express = require('express');
const app = express();

// Learn more: http://expressjs.com/en/starter/static-files.html
app.use(express.static('static_files'));
app.listen(3000, () => {
  console.log('Server started at http://localhost:3000/');
});

var firebase = require('firebase');
var config = {
  apiKey: '"' + info.getFirebase() + '"',
  authDomain: "cogs121kiddos.firebaseapp.com",
  databaseURL: "https://cogs121kiddos.firebaseio.com",
  projectId: "cogs121kiddos",
  storageBucket: "cogs121kiddos.appspot.com",
  messagingSenderId: "497727301450",
  appId: "1:497727301450:web:3ecbe728cb7639a0"

};
firebase.initializeApp(config);




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
  },
  "users": {
    "mario": {
      'dinasaurs': {
        'T Rex': 'https://www.shareicon.net/data/128x128/2016/04/13/491786_trex_252x298.png'
      },
      'dogs': {
        'terrier': 'https://www.petplan.co.uk/images/breeds/sm/westhighland-white-terrier.jpg'
      }
    }
  }
}






app.get('/update', function (req, res) {
  console.log("HTTP Get Request");
  res.send("HTTP GET Request");
  //Insert key,value pair to database
  firebase.database().ref('/categories').set(fakeData.preset);
  
});



