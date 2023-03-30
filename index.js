//jshint esversion:8

window.addEventListener('DOMContentLoaded', setup);


function setup(){

    var color_code0 = ['yellow', 'red', 'pink', 'azure', 'lightgrey'];
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

    for(var y = 0; y < cubby.length; y++){
      cubby[y].style.backgroundImage = 'url(' + backgroundImages[y] + ')';
    }



  coverHTML.forEach((e)=>{
      // set cover text
      cubby[counter].innerHTML = e;

      // set links
      if(links[counter] != "" && game[counter] === false){
        bookLinks[counter].setAttribute('href', links[counter]);
        bookShelf[counter].style.backgroundColor = 'lightyellow';
      }else if(links[counter] != "" && game[counter] === true){
        bookLinks[counter].setAttribute('href', links[counter]);
        bookShelf[counter].style.backgroundColor = 'lightgreen';
      }
      counter++;
  });

}
