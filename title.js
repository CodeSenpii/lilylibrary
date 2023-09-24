//jshint esversion:8

var coverHTML = [];
const coverText = [
  {
    title1 : " Uber Story",
    title2 : "Book 1",
    title3 : "-",
    author : "Kieyn Parks",
    date : "",
    link : "https://uberstory.lilylibrary.com//",
    status : "old",
    type : "book",
    coverImage : "images/uber.jpg"

  },
  {
    title1: " Hunting",
    title2 : "With",
    title3 : "GrandFather",
    author : "Daniel Parks",
    date : "12-26-2022",
    link : "https://hunting.lilylibrary.com/",
    status : "old",
    type : "book",
    coverImage : "images/hunting.jpg"
  },
  {
    title1: " Last",
    title2 : "-",
    title3 : "Dragon",
    author : "Kavel Kar",
    date : "12-21-2022",
    link : "https://lastdragon.lilylibrary.com/",
    status : "old",
    type : "book",
    coverImage : "images/lastdragon.jpg"
  },
  {
    title1: " I Love to",
    title2 : "Dance",
    title3 : "-",
    author : "Mary Kate",
    date : "",
    link : " https://iliketodance.lilylibrary.com/",
    status : "old",
    type : "book",
    coverImage : "images/dance.jpg"

  },
  {
    title1: " Blue Lake",
    title2 : "-",
    title3 : "-",
    author : "Kelly Simon",
    date : "11-7-2022",
    link : "https://bluelake.lilylibrary.com/",
    status : "old",
    type : "book",
    coverImage : "images/lakeIcon.jpg"
  },
  {
    title1: " The Final Battle",
    title2 : "-",
    title3 : "-",
    author : "Kieyn Parks",
    date : "",
    link : "https://thefinalbattle.lilylibrary.com/",
    status : "old",
    type : "book",
    coverImage : "images/fairy.jpg"
  },
  {
    title1: " Spirit",
    title2 : "of",
    title3 : "The Woods",
    author : "Silvia Raynolds",
    date : "",
    link : "https://spiritofthewoods.lilylibrary.com/",
    status : "old",
    type : "book",
    coverImage : "images/spirit.jpg"
  },
  {
    title1: " School",
    title2 : "-",
    title3 : "Day",
    author : "Micheal Shea",
    date : "",
    link : "https://schoolday.lilylibrary.com/",
    status : "old",
    type : "book",
    coverImage : "images/school.jpg"
  },
  {
    title1: " Girl-In",
    title2 : "The",
    title3 : "Window",
    author : "Lily Parks",
    date : "02-13-2023",
    link : "https://girlinthewindow.lilylibrary.com/",
    status : "new",
    type : "book",
    coverImage : "images/girl1.jpg"
  },
  {
    title1: " These",
    title2 : "-",
    title3 : "Roses",
    author : "Kiley Jen",
    date : "01-23-2023",
    link : "https://roses.lilylibrary.com/",
    status : "old",
    type : "book",
    coverImage : "images/roses.jpg"
  },
  {
    title1: " Magic",
    title2 : "-",
    title3 : "Closet",
    author : "Betsi Dozer",
    date : "01-09-2023",
    link : "https://magiccloset.lilylibrary.com/",
    status : "old",
    type : "book",
    coverImage : "images/magicgarden.jpg"
  },
  {
    title1: " The Great",
    title2 : "Light",
    title3 : "-",
    author : "Kim Deltoro",
    date : "",
    link : "https://thegreatlight.lilylibrary.com/",
    status : "old",
    type : "book",
    coverImage : "images/greatlight.jpg"
  },
  {
    title1: " I Washed",
    title2 : "Up On",
    title3 : "An Island #1",
    author : "Daniel Parks",
    date : "",
    link : "https://castaway.lilylibrary.com/",
    status : "old",
    type : "book",
    coverImage : "images/island.jpg"
  },
  {
    title1: " Paper",
    title2 : "-",
    title3 : "Airplane",
    author : "Luv Parker",
    date : "12-20-2022",
    link : "https://paperplane.lilylibrary.com/",
    status : "old",
    type : "book",
    coverImage : "images/paperplane.jpg"
  },
  {
    title1: " Snow Day",
    title2 : "-",
    title3 : "-",
    author : "Kevin Papas",
    date : "",
    link : "https://snowday.lilylibrary.com",
    status : "old",
    type : "book",
    coverImage : "images/snow.jpg"
  },
  {
    title1: "bubble",
    title2 : "-",
    title3 : "Game",
    author : "Danlily.ai Studios",
    date : "",
    link : "https://zbubble.lilylibrary.com",
    status : "old",
    type : "game",
    coverImage : "images/bubbles.jpg"
  },
  {
    title1: "Under",
    title2 : "Construction",
    title3 : "Game",
    author : "Danlily.ai Studios",
    date : "",
    link : "https://hatch.lilylibrary.com",
    status : "new",
    type : "game",
    coverImage : "images/egg.jpg"
  },
  {
    title1: "Raven",
    title2 : "Hunter",
    title3 : "Game",
    author : "Danlily.ai Studios",
    date : "3-12-2023",
    link : "https://raven-hunter.lilylibrary.com",
    status : "old",
    type : "game",
    coverImage : "images/raven1.jpg"
  },
  {
    title1: "Big Fish",
    title2 : "-",
    title3 : "Game",
    author : "Danlily.ai Studios",
    date : "3-21-2023",
    link : "https://bigfish.lilylibrary.com",
    status : "new",
    type : "game",
    coverImage : "images/fish.jpg"
  },
  {
    title1: "cube",
    title2 : "Smash",
    title3 : "Game",
    author : "Veer Nakum - Codepen ",
    date : "",
    link : "https://cubesmash.lilylibrary.com",
    status : "old",
    type : "game",
    coverImage : "images/cube.jpg"

  },
  {
    title1: "Color",
    title2 : "Blast",
    title3 : "Game",
    author : "Nate Wiley - Codepen",
    date : "",
    link : "https://colorblast.lilylibrary.com",
    status : "old",
    type : "game",
    coverImage : "images/colorblast.jpg"
  },
  {
    title1: " Blue Lake",
    title2 : "-",
    title3 : "II",
    author : "Lily Parks",
    date : "3-2-2023",
    link : "https://bluelake2.lilylibrary.com",
    status : "new",
    type : "book",
    coverImage : "images/lakeicon1.jpg"
  },
  {
    title1: "flip Card",
    title2 : "Memory",
    title3 : "Game",
    author : "M Gopal- Codepen",
    date : "",
    link : "https://flipcardmemory.lilylibrary.com",
    status : "old",
    type : "game",
    coverImage : "images/flipcard.jpg"
  },
  {
    title1: "Space Invaders",
    title2 : "-",
    title3 : "Game",
    author : "DanLily.ai",
    date : "",
    link : "https://invaders.lilylibrary.com",
    status : "new",
    type : "game",
    coverImage : "images/invaders.jpg"
  }

];

// Sort an Array of Objects in JavaScript

var coverInfo = coverText;

coverInfo.sort((a, b) => {
  var fa = a.title1.toLowerCase(),
      fb = b.title1.toLowerCase();

  if (fa < fb){
    return -1;
  }
  if (fa > fb){
    return 1;
  }
  return 0;
});

// var str = '<h1>The Last Man <br> Standing</h1><h2><span>by</span><br>Kelsey Mantooken</h2>';
var tempHTML;
var links = [];
var game = [];
var backgroundImages = [];

// create the cover page title and author information
coverInfo.forEach((e)=>{
  if(e.title2 === "-" && e.title3 === "-"){

    tempHTML = `<h1>${e.title1}<br>${e.title2}</h1><h2><span>by</span><br>${e.author}</h2>`;

  } else if (e.title2 != "-" && e.title3 === "-") {
    tempHTML = `<h1>${e.title1}<br>${e.title2}</h1><h2><span>by</span><br>${e.author}</h2>`;

  }else{
    tempHTML = `<h1>${e.title1}<br>${e.title2}<br>${e.title3}</h1><h2><span>by</span><br>${e.author}</h2>`;
  }

coverHTML.push(tempHTML);
links.push(e.link);
backgroundImages.push(e.coverImage);
if(e.title3 === "Game"){
  game.push(true);
}else{
  game.push(false);
}

});// end foreach

var coverHTML_serialized = JSON.stringify(coverHTML);
localStorage.setItem("coverList", coverHTML_serialized);

// reverse the JSON stringyfy object
// var coverList = JSON.parse(coverHTML_serialized);
// var fs = require('fs');
//
// //save the json file to a text file
// fs.writeFile("title.txt", coverHTML_serialized, function(err){
//   if(err){
//     console.log(err);
//   }
// });
