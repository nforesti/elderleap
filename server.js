
const info = require('./info');
const PexelsAPI = require('pexels-api-wrapper');

//Create Client instance by passing in API key
var pexelsClient = new PexelsAPI(info.getPexel());

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

// function that writes img data to category in database
function setCategoryImage(category) {
  pexelsClient.search(category, 1, 1)
  .then(function (result) {
   let imgUrl = result.photos[0].src.small;
   firebase.database().ref('categories/' + category + '/img').set({
    img: imgUrl });
  }).
  catch(function (e) {
    console.err(e); 
  });
}

//Get Photo by ID
function setCategoryImageById(category) {
  pexelsClient.getPhoto(708488)
  .then(function(result){
    let imgUrl = result.src.small;
    firebase.database().ref('categories/' + category + '/img').set({
      img: imgUrl });
  }).
  catch(function(e){
      console.err(e);
  });
  }
  //setCategoryImageById("food");

//function that writes img data to sub-categories in database
function setSubCategoryImage(category, subcategory) {
  pexelsClient.search(subcategory, 1, 1)
  .then(function (result) {
   let imgUrl = result.photos[0].src.small;
   firebase.database().ref('categories/' + category + '/' + subcategory +  '/img').set({
    img: imgUrl });
  }).
  catch(function (e) {
    console.err(e);
  });
}

// sets images in database using function calls to PexelsPAI
function setImages() {
  let categories_array = (Object.keys(categories));
  let subcategories_array = []; 
  //set category images
  categories_array.forEach(category => {
    console.log(category);
    setCategoryImage(category);
  });
  // set subcategory images
  Object.keys(categories).forEach(function(category) {
    subcategories_array = (Object.keys(categories[category]));
    subcategories_array.forEach(subcategory => {
      console.log(subcategory);
      setSubCategoryImage(category, subcategory);
    });
  });
}
// call function to set images in database
//setImages(); 

/*reset database to null values 
app.get('/update', function (req, res) {
  console.log("HTTP Get Request");
  res.send("HTTP GET Request");
 //Insert key,value pair to database
firebase.database().ref('/categories').set(categories);
});
*/

//set actionWords in databse
const actionWords = info.getActionWords(); 
var actionsRef = firebase.database().ref("actions/");
//actionsRef.set(actionWords);

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

app.get('/sentences/:category', function (req, res) {
  //Fetch instances

  console.log("HTTP Get Request");
  var userReference = firebase.database().ref("/actions/"+ req.params.category);

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

app.get('/message/:newMessage', function (req, res) {
  //Fetch instances

  console.log("HTTP post Request with num");
  firebase.database().ref("/message/"+req.params.newMessage).set(1);
  
  console.log("HTTP post Request with num2");
  json = JSON.parse('{"message '+req.params.num+'":"'+req.params.newMessage+'"}');
  /*
  var userReference = firebase.database().ref("/message");*/
  res.send(json);

});

app.get('/message', function (req, res) {
 
  console.log("HTTP Get Request");
  var userReference = firebase.database().ref("/message");

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

app.delete('/message/:todelete', function (req, res) {
  console.log("HTTP Delete Request");
  let userRef = firebase.database().ref('message/'+req.params.todelete);
  userRef.remove()
  res.send({});
});