const express = require('express');
const app = express();

// Learn more: http://expressjs.com/en/starter/static-files.html
app.use(express.static('static_files'));

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

app.get('/browse', (req, res) => {
  const data = fakeData;
  const presetData = fakeData.preset;
  console.log(presetData);
  res.send(presetData);
});

app.get('/browse/:category', (req, res) => {
  console.log("toprint");
  const data = fakeData;
  const categoryToLookup = req.params.category;
  const presetData = fakeData.preset[categoryToLookup];
  console.log("prefest" + presetData);
  res.send(presetData);
});

app.listen(3000, () => {
  console.log('Server started at http://localhost:3000/');
});





// GET profile data for a user
//
// To test, open these URLs in your browser:
//   http://localhost:3000/users/Philip
//   http://localhost:3000/users/Carol
//   http://localhost:3000/users/invalidusername

/*
app.get('/users/:userid', (req, res) => {
  const nameToLookup = req.params.userid; // matches ':userid' above
  const val = fakeDatabase[nameToLookup];
  console.log(nameToLookup, '->', val); // for debugging
  if (val) {
    res.send(val);
  } else {
    res.send({}); // failed, so return an empty object instead of undefined
  }
});*/

// start the server at URL: http://localhost:3000/


// To learn more about server routing:
// Express - Hello world: http://expressjs.com/en/starter/hello-world.html
// Express - basic routing: http://expressjs.com/en/starter/basic-routing.html
// Express - routing: https://expressjs.com/en/guide/routing.html


// GET a list of all usernames
//
// To test, open this URL in your browser:
//   http://localhost:3000/users






