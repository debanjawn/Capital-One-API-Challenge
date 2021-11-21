# Capital-One-API-Challenge
UTILIZED - JavaScript, HTML, CSS, NPS API and Git

The purpose of this application is to display events from the NPS API,
According to user submitted parameters:
Event Type(eventType), Key Word(q),
The available webcams from user-selected National Parks.

*Webcam API endpoint fails to return images for majority of National Parks*


# Assignment Background
For the last 100 years, the National Park Service has contributed greatly to the preservation and management of America's national parks, as well as many of its national monuments. More than 330 million people visit the 61 national parks they oversee each year, with 40 million overnight campers. 

We want your help keeping those visitors informed, educated, and safe as they enjoy the parks. Using the National Park Service API, as well as any other public APIs you need, build a deployable web app that will allow users to have the best National Park experience possible with an intuitive, easy to navigate interface.


# Assignment 
Build a web application that can do the following:

1. Let visitors search from a list of activities to do at different National Parks
  A - Visitors can click an activity and have the web app display all the National Parks tied to a specific activity
  B - After selecting a specific park, the app should pull up an informational page so the visitor can learn more about the park.
2. Have a feature on the web app where visitors can: 
   A - Retrieve data from park web cams based on which National Park(s) the user selects. Specifically, this feature should be able to display the non-streaming            images collected from park web cams so a visitor can view them with ease.
   
REQUIRED: In your submission, you will need to link to a live deployed website (e.g., Heroku, Github pages, etc.) and a link to your repository with code.

Submissions will be graded on the following criteria:
- Meets Deliverables
- Code Quality & Clarity
- Creativity / Aesthetics (think UI/UX)

First Picture![When Site first loads](https://user-images.githubusercontent.com/84740209/142746260-284c451c-834f-491c-bc1d-b71d027da078.png)

- When the website first loads up there is only one box, one search bar, and two rows of buttons

Events/ Activities![After selecting event type](https://user-images.githubusercontent.com/84740209/142746288-00fcafa0-cb06-4e0e-a38e-ad483c0806a7.png)

- First user must click on Event Type(Top Row of Buttons), the already open box will display the events/activities related to that event type along with Date start and some results even contain pictures
- User can use search bar to narrow down results, after choosing event type the user may type in relevant keyword to eliminate irrelevant results

Webcam ![After choosing webcam park](https://user-images.githubusercontent.com/84740209/142746295-06ec485a-897f-4e9c-898f-1436bea1ec0f.png)

- If user wants to use webcam then user has to click on what park(Bottom Row of Buttons)another box will pop open and show options for webcams for that specific park
- User may click one of the results to be redirected to a live feed of that webcam![Redirected webcam link](https://user-images.githubusercontent.com/84740209/142746316-054f98a4-e96c-4d51-a35c-dd7d5daff8be.png)

