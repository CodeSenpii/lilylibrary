//jshint esversion:8
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
