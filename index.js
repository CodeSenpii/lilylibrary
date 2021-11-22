//jshint esversion:8

window.addEventListener('DOMContentLoaded', setup);


function setup(){

    var color_code0 = ['yellow', 'red', 'pink', 'blue', 'lightgrey'];
    var color_code1 = ['tomato', 'brown', 'cyan', 'aqua', 'chocolate'];


    var color1 = Math.floor(Math.random() * 5);
    var color2 = Math.floor(Math.random() * 5);

    var counter = 0;
    var cubby = document.getElementsByClassName('b1');
    var bookLinks = document.querySelectorAll('.book-shelf a');
    var bookShelf = document.querySelectorAll('.book-shelf');


    for(var x = 0; x < cubby.length; x++){
      cubby[x].style.backgroundImage = 'linear-gradient('+ color_code0[color1] +', '+ color_code1[color2] +')';
    }



  coverHTML.forEach((e)=>{
      // set cover text
      cubby[counter].innerHTML = e;

      // set links
      if(links[counter] != ""){
        bookLinks[counter].setAttribute('href', links[counter]);
        bookShelf[counter].style.backgroundColor = 'burlywood';
      }
      counter++;
  });

}
