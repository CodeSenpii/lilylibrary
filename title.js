//jshint esversion:8

var coverHTML = [];
const coverText = [
  {
    title1 : "The Last Man",
    title2 : "Standing",
    title3 : "",
    author : "Kelsey Mantooken",
    date : "",
    link : ""
  },
  {
    title1: "Angel",
    title2 : "",
    title3 : "",
    author : "Kie Parh",
    date : "",
    link : ""

  },
  {
    title1: "Princesses layah",
    title2 : "vs",
    title3 : "The Sky Leviathan",
    author : "Kie Parh",
    date : "",
    link : ""
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

// create the cover page title and author information
coverInfo.forEach((e)=>{
  if(e.title2 === "" && e.title3 === ""){

    tempHTML = `<h1>${e.title1}</h1><h2><span>by</span><br>${e.author}</h2>`;

  } else if (e.title2 != "" && e.title3 === "") {
    tempHTML = `<h1>${e.title1}<br>${e.title2}</h1><h2><span>by</span><br>${e.author}</h2>`;

  }else{
    tempHTML = `<h1>${e.title1}<br>${e.title2}<br>${e.title3}</h1><h2><span>by</span><br>${e.author}</h2>`;
  }

coverHTML.push(tempHTML);

});// end foreach

var coverHTML_serialized = JSON.stringify(coverHTML);
localStorage.setItem("coverList", coverHTML_serialized);

// reverse the JSON stringyfy object
// var coverList = JSON.parse(coverHTML_serialized);
var fs = require('fs');

//save the json file to a text file
fs.writeFile("title.txt", coverHTML_serialized, function(err){
  if(err){
    console.log(err);
  }
});
