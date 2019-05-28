# Milestone 5

## Written Storyboard

Case 1: One target user is a nonverbal child who does not know how to type. The setting mignt be at their home, in the morning. They are hungry and want to ask for cereal for breakfast. They sit at the dining table, take out their tablet device and access the ACT app, which has been previously set up by a parent or caregiver. When a parent or sibling is present, the child clicks on the "food" category, which displays an array of food items they can click on. Then they click on the image for "cereal", which plays the word "cereal" out loud. The parent or sibling sees the child interacting with the device and clicking on "cereal", or they might just hear the word. They go to the cabinet and get the cereal box and pour the child a bowl. 

Case 2: Another target user is a nonverbal child who does know how to type. The setting might be at school, where the child wants to introduce themselves to a classmate or teacher. They take out their tablet device and open up the ACT app, then navigate to the "Keyboard" page. They type "hi, my name is Ben", and then click on a button to trigger a text-to-speech readout of what they wrote. The message "hi, my name is Ben", is vocalized. They click "save" to save the phrase they typed so they can re-use it again at a later time. The teacher or classmate might respond back, "Hi Ben, nice to meet you!", completing the interaction.  

## Screenshots of UI Webpages

### (1) Home Page

![image](https://drive.google.com/uc?export=view&id=1ta8vSm5mGWSRazDNvi9YnjSoM01ymB4p)

### (2) Dashboard - Displays categories

![image](https://drive.google.com/uc?export=view&id=1AY-2ZZJPjBgglfeBubhSmF1Z0GWu0DUo)

### Display subcategories

For this milestone, we enhanced the subcategories page by adding a box at the top of the page where the user can drag and drop words and images to form a short sentence and have them be voiced out loud. We also added a "draggable" icon to the words and images to show they can be moved around. 

![image](https://drive.google.com/uc?export=view&id=1v1CPvCVJWYKt5IxTVuPr7giqSfVAzzBn)

### (3) Keyboard

For this milestone, we fixed a bug in the keyboard's functionality so it can save multiple phrases without overwriting them in the database. We also added a pop-up for the "delete" icon explaining how it works the first time a user encounters it. 

![image](https://drive.google.com/uc?export=view&id=1xMf0mLfguVBIZHKFuN6VcU4d-GeIqOQz)

## Data Display & Visualizations

### Dashboard Images

We used the Pexels API to populate the images for each category and subcateogry. The images were selected by searching for the first image result returned by the API call. Once the images were pushed into the database, we could load them from the front end and display them in a grid-like layout. The categories are organized from general to specific, accompanied by relevant phrases for a given subcategory. 

### Subcategory Images -- Drag and Drop 

For this milestone, we added another way to visualize words and images with a "drag and drop" feature that allows the user to combine phrases and images and play the resulting sentence out loud. 

![image](https://drive.google.com/uc?export=view&id=1ixC23Sioq3W3F8LD7BJMGl-lUHF65iiP)

### Further Ideas for Improvement

Some improvements we can make for our data visualization is curating images for the different categories so they are more easily identifiable. We could also add a feature that allows users to upload their own images for categories to make the app for custumizable and relevant for each individual user. Some other improvements could be tracking which categories are frequently clicked on, and makings some sort of "shortcut" for those categories so the user can navigate to them more quickly, such as a section for "recent" categories, based on the user's selection history. 

