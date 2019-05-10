
const info = require('./info');
const PexelsAPI = require('pexels-api-wrapper');

//Create Client instance by passing in API key
var pexelsClient = new PexelsAPI(info.getPexel());


//Search API 
/*

const getImage = (keyword) => {
  let image_src;
  pexelsClient.search(keyword, 1, 1)
    .then(function (result) {
      image_src = result.photos[0].src.small;
    }).
    catch(function (e) {
      console.err(e);
    });
  return image_src;
};

let image = getImage("hamburger");
console.log(image);

*/

const express = require('express');
const app = express();
var bodyParser = require('body-parser');
app.use(bodyParser.json()); //need to parse HTTP request body

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

const categories = info.getCategories();

// dummy function for getting image URL 
const getImageURL = (keyword) => {
  return (keyword + ".jpg");
};

// function that writes img data to category in database
function setCategoryImage(category, imageUrl) {
  firebase.database().ref('categories/' + category + '/img').set({
    img: imageUrl
  });
}

function setSubCategoryImage(category, subcategory, imageUrl) {
  firebase.database().ref('categories/' + category + '/' + subcategory + '/img').set({
    img: imageUrl
  });
}

// iterates over categories, gets image src for each category, and stores in database
function updateImages() {
  let categories_array = (Object.keys(categories));
  let subcategories_array = []; 
  let imageURL;
  //set category images
  categories_array.forEach(category => {
    console.log(category);
    imageURL = getImageURL(category);
    console.log(imageURL);
    setCategoryImage(category, imageURL);
  });
  // set subcategory images
  Object.keys(categories).forEach(function(category) {
    subcategories_array = (Object.keys(categories[category]));
    subcategories_array.forEach(subcategory => {
      console.log(subcategory);
      imageURL = getImageURL(subcategory);
      console.log(imageURL); 
      setSubCategoryImage(category, subcategory, imageURL);
    });
  });
}
// call function to update images 
updateImages(); 


app.get('/update', function (req, res) {
  console.log("HTTP Get Request");
  res.send("HTTP GET Request");
  //Insert key,value pair to database
  firebase.database().ref('/categories').set(categories);
});

app.get('/browse', function (req, res) {
  //Fetch instances

  console.log("HTTP Get Request");
  var userReference = firebase.database().ref("/categories/");

  //Attach an asynchronous callback to read the data
  userReference.on("value",
    function (snapshot) {
      console.log(snapshot.val());
      res.json(snapshot.val());
      userReference.off("value");
    },
    function (errorObject) {
      console.log("The read failed: " + errorObject.code);
      res.send("The read failed: " + errorObject.code);
    });
});

app.get('/browse/:category', function (req, res) {
  //Fetch instances

  console.log("HTTP Get Request");
  var userReference = firebase.database().ref("/categories/" + req.params.category);
  const categoryToLookup = req.params.category;
  const presetData = categories[categoryToLookup];

  //Attach an asynchronous callback to read the data
  userReference.on("value",
    function (snapshot) {
      console.log(snapshot.val());
      res.json(snapshot.val());
      userReference.off("value");
    },
    function (errorObject) {
      console.log("The read failed: " + errorObject.code);
      res.send("The read failed: " + errorObject.code);
    });
});




