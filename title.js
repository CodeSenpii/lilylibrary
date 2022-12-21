//jshint esversion:8

var coverHTML = [];
const coverText = [
  {
    title1 : "Uber Story",
    title2 : "Book 1",
    title3 : "-",
    author : "Kieyn Parks",
    date : "",
    link : "https://uberstory.lilylibrary.com//"
  },
  {
    title1: "I Love to",
    title2 : "Dance",
    title3 : "-",
    author : "Mary Kate",
    date : "",
    link : " https://iliketodance.lilylibrary.com/"

  },
  {
    title1: "Blue Lake",
    title2 : "-",
    title3 : "-",
    author : "Kelly Simon",
    date : "11-7-2022",
    link : "https://bluelake.lilylibrary.com/"
  },
  {
    title1: "The Final Battle",
    title2 : "-",
    title3 : "-",
    author : "Kieyn Parks",
    date : "",
    link : "https://thefinalbattle.lilylibrary.com/"
  },
  {
    title1: "Spirit",
    title2 : "of",
    title3 : "The Woods",
    author : "Silvia Raynolds",
    date : "",
    link : "https://spiritofthewoods.lilylibrary.com/"
  },
  {
    title1: "School",
    title2 : "Day",
    title3 : "-",
    author : "Micheal Shea",
    date : "",
    link : "https://schoolday.lilylibrary.com/"
  },
  {
    title1: "The Great",
    title2 : "Light",
    title3 : "-",
    author : "Kim Deltoro",
    date : "",
    link : "https://thegreatlight.lilylibrary.com/"
  },
  {
    title1: "I Washed",
    title2 : "Up On",
    title3 : "An Island #1",
    author : "Daniel Parks",
    date : "",
    link : "https://castaway.lilylibrary.com/"
  },
  {
    title1: "Paper",
    title2 : "Airplane",
    title3 : "-",
    author : "Luv Parker",
    date : "",
    link : "https://paperplane.lilylibrary.com/"
  },
  {
    title1: "Snow Day",
    title2 : "-",
    title3 : "-",
    author : "Kevin Papas",
    date : "",
    link : "https://snowday.lilylibrary.com"
  },
  {
    title1: "Zbubble",
    title2 : "-",
    title3 : "Game",
    author : "Danlily.ai Studios",
    date : "",
    link : "https://zbubble.lilylibrary.com"
  },
  {
    title1: "Zsnake",
    title2 : "-",
    title3 : "Game",
    author : "FARIAT Codepen",
    date : "",
    link : "https://snake.lilylibrary.com"
  },
  {
    title1: "Zcube",
    title2 : "Smash",
    title3 : "Game",
    author : "Veer Nakum - Codepen ",
    date : "",
    link : "https://cubesmash.lilylibrary.com "
  },
  {
    title1: "Zcolor",
    title2 : "Blast",
    title3 : "Game",
    author : "Nate Wiley - Codepen",
    date : "",
    link : "https://colorblast.lilylibrary.com "
  },
  {
    title1: "Zplanet",
    title2 : "Defense",
    title3 : "Game",
    author : "Marc Lopez Avila - Codepen",
    date : "",
    link : "https://planetdefense.lilylibrary.com"
  },
  {
    title1: "Zflip Card",
    title2 : "Memory",
    title3 : "Game",
    author : "M Gopal- Codepen",
    date : "",
    link : "https://flipcardmemory.lilylibrary.com"
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
