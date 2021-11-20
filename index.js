//jshint esversion:8

window.addEventListener('DOMContentLoaded', setup);


function setup(){
  var counter = 0;
  var cubby = document.getElementsByClassName('b1');
  var bookLinks = document.querySelectorAll('.book-shelf a');
  var bookShelf = document.querySelectorAll('.book-shelf');




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
