# Milestone 5

## Written Storyboard

Case 1: One target user is a nonverbal child who does not know how to type. The setting mignt be at their home, in the morning. They are hungry and want to ask for cereal for breakfast. They sit at the dining table, take out their tablet device and access the ACT app, which has been previously set up by a parent or caregiver. When a parent or sibling is present, the child clicks on the "food" category, which displays an array of food items they can click on. Then they click on the image for "cereal", which plays the word "cereal" out loud. The parent or sibling sees the child interacting with the device and clicking on "cereal", or they might just hear the word. They go to the cabinet and get the cereal box and pour the child a bowl. 

Case 2: Another target user is a nonverbal child who does know how to type. The setting might be at school, where the child wants to introduce themselves to a classmate or teacher. They take out their tablet device and open up the ACT app, then navigate to the "Keyboard" page. They type "hi, my name is Ben", and then click on a button to trigger a text-to-speech readout of what they wrote. The message "hi, my name is Ben", is vocalized. They click "save" to save the phrase they typed so they can re-use it again at a later time. The teacher or classmate might respond back, "Hi Ben, nice to meet you!", completing the interaction.  

## Screenshots of UI Webpages

### (1) Home Page
No changes.
![image](https://drive.google.com/uc?export=view&id=1ta8vSm5mGWSRazDNvi9YnjSoM01ymB4p)

### (2) Dashboard - Displays categories
No changes.
![image](https://drive.google.com/uc?export=view&id=1u5bbF9i6AY8sovsUR3eRas1vO_7g-Dre)

### Display subcategories

For this milestone, we enhanced the subcategories page by adding a box at the top of the page where the user can drag and drop words and images to form a short sentence and have them be voiced out loud. We also added a "draggable" icon to the words and images to show they can be moved around. There is also an option to clear the sentence that has been created. If it is the first time the user has clicked the trash/clear button, a popup will open asking the user to confirm the action.

![image](https://drive.google.com/uc?export=view&id=1jEew1qkmPnxKAIF07JRrR9vX-P4cPnfe)

### (3) Keyboard

For this milestone, we fixed a bug in the keyboard's functionality so it can save multiple phrases without overwriting them in the database. We also added a pop-up for the "delete" icon asking for confirmation if it is the first time a user encounters this button. 

![image](https://drive.google.com/uc?export=view&id=1xMf0mLfguVBIZHKFuN6VcU4d-GeIqOQz)

## Data Display & Visualizations

### Dashboard Images
First, we used the Firebase API; within Firebase, there are categories and subcategory words, and within each of these is an associated img tag. We then used the Pexels API to populate the images for each category and subcategory word. The images were selected by searching for the first image result returned by the API call. Once the images were pushed into the database, we could load the images, categories, and subcategory words from the front end and display them in a grid-like layout. The categories are organized from general to specific, accompanied by relevant phrases for a given subcategory.

### Subcategory Images -- Drag and Drop 

For this milestone, we added another way to visualize words and images with a "drag and drop" feature that allows the user to combine phrases and images and play the resulting sentence out loud. The reading sentences or words out loud, we used the window.SpeechSynthesis web API; with this we could manipulate pitch, speed, and voice of the speech. Sentences can also be deleted, and for this we used the jquery popup overlay library to prompt for confirmation.

![image](https://drive.google.com/uc?export=view&id=1jEew1qkmPnxKAIF07JRrR9vX-P4cPnfe)

### Further Ideas for Improvement

Some improvements we can make for our data visualization is curating images for the different categories so they are more easily identifiable. This would either be a program that somehow curates images, or a way for a parent to curate images before their child uses the website. Additionally, we would like to use icons instead of images so that the visualizations are clear, simple, and somewhat consistent.
We could also add a feature that allows users to upload their own images for categories to make the app for custumizable and relevant for each individual user. Some other improvements could be tracking which categories are frequently clicked on, and makings some sort of "shortcut" for those categories so the user can navigate to them more quickly, such as a section for "recent" categories, based on the user's selection history. The last improvement that we would like to make is an option for viewing the sign (American Sign Language) for a word. There would be a toggle button to allow the speaker to view the ASL translation of the word instead of speaking the word. This would be beneficial for nonverbal users who have the ability to be verbal with sign languages.

