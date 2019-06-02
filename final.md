# Final Deliverable

## Group Member Contributions

### Neve Foresti
- Dashboard page layout 
  - categories & subcategories display 
  - phrases display 
- Keyboard page 
- Text to Speech functionality 
- setting up databse
  - generated list of categories & subcategories 
- drag & drop functionality 
- UI changes
- presentation slide

### Shira Edelman
- Home page
- About page
- API function calls 
  - populating images in database
- drag & drop functionality
- UI changes
- demo video 

## List of Source Files
### server
- server.js 
  - contains all the backend data. Utilizes Firebase API, Pexels API, and node.js. 
 ### html
 - index.html
  - home page that includes navigation links, a short description, and key highlights of our app 
 - browse.html
  - "dashboard" page; displays categories and loads subcategories once a category is clicked on 
 - message.html
  - "keyboard" page; displays interface for text-to-speech keyboard 
 - about.html 
  - a short About page describing our app 
 ### css
 - kiddos.css 
   - main css file
 ### js
 - browse.js
   - Populates the page (using Ajax and Firebase in backend) with category data. When a category is clicked on, populates the page with      subcategory data.
 - dragdrop.js
   - contains functions related to dragging and dropping elements in the subcategory page
 - message.js
   - functionality for text-to-speech keyboard including a responsive textbox, adding and deleting phrases, as well as saving phrases in      the database. 
 - pexels.js
   - contains Pexels API functions
 - speech.js 
   - contains text-to-speech functions 

## Links to presentation slide and demo video 

### Slide link:
https://docs.google.com/presentation/d/1o_vZQwuOcN-M5t0zuGgfj8vuwCN8REMMOz_tJuciWUk/edit?usp=sharing

### Video link:
https://youtu.be/nEGIjNaRAgc


