# VueJS - Donation University

Hi World! This my project for VueJS course @ [softuni.bg](https://softuni.bg/trainings/2820/vuejs-march-2020). Since I am out of ideas, I decided to solve one of the problems of retake exams from JS Applications course ([LINK](https://judge.softuni.bg/Contests/1784/JS-Applications-Retake-10-August-2019) to contest) with VueJS.
![](https://github.com/tmollov/VueJSDonUni/blob/master/Preview%20images/03.home_dashboard.jpg?raw=true)

**NOTE**: The causes in the photo are real and found by [fundly.com](https://fundly.com): 

[Habitat for Humanity Global Village](https://fundly.com/habitat-for-humanity-global-village-2016) /
[Megan and Kory need your support!](https://fundly.com/megan-and-kory-need-your-support) 

[Bloom Children's Center Staff Fund](https://fundly.com/bloom-children-s-center-staff-fund) /
[HELP MINA DONATE MASKS!](https://fundly.com/help-mina-donate-masks?ft_src=search_campaign_card)  

# About project
Donation University is a donor search platform for your causes. You can create,edit,delete (CRUD) your causes and people out there (registered users) can donate to your causes, of course, and you to their causes.

Here is preview images: [LINK](https://github.com/tmollov/VueJSDonUni/tree/master/Preview%20images)

Here is exam description: [LINK](https://github.com/tmollov/VueJSDonUni/blob/master/DonUni.pdf)

# Design
The application is split into two parts: Public and Private

### Public part
Not logged in users can:
- Access Login/Register and public part of home page 

### Private part
Logged in users can:
- See all causes
- Can Create causes
- Can Edit / Delete their causes
- Can donate to strangers causes
- Can see their profile info
- Can edit their profile info

# Installation of project
This project uses:
- VueJS as front-end framework
- Firebase realtime database to store data online
  
1. Clone this repo
2. With your terminal/console app change directory to the 'app' folder of the repo 
3. Run "npm install"
4. Add configuration file:   
You must create javascript file named "firebaseConfig" in "src" folder in order to run project.
This file contains your firebase web configuration and it should be like this:

```javascript
export default {
    apiKey: "YourData",
    authDomain: "YourData",
    databaseURL: "YourData",
    projectId: "YourData",
    storageBucket: "YourData",
    messagingSenderId: "YourData",
    appId: "YourData",
    measurementId: "YourData"
  };
```

For more info about this configuration visit [HERE](https://firebase.google.com/docs/web/setup) and [HERE](https://support.google.com/firebase/answer/7015592)

After that:
1. Run "npm run serve"
2. Go and check [localhost:8080](http://localhost:8080/)
   




