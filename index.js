//jshint esversion:8

window.addEventListener('DOMContentLoaded', setup);


function setup(){

    var color_code0 = ['yellow', 'red', 'pink', 'azure', 'lightgrey'];
    var color_code1 = ['tomato', 'brown', 'cyan', 'aqua', 'chocolate'];
    var video_file = ['hunting1.mp4', 'lake.mp4', 'explosion1.mp4', 'bestfriends.mp4',
  'castaway.mp4', 'dragon1.mp4', 'schoolday.mp4', 'wizard.mp4'];
    var video_title = ['Book - Hunting With Grandfather', 'Book - Blue Lake', 'Book - Blue Lake 2',
                       'Book - Best Friends', 'Book - Washed Up On An Island', 'Book - Last Dragon',
                     'Book - School Day', 'Book - Magic Academy'];

    var video_index = Math.floor(Math.random() * video_file.length);


    var color1 = Math.floor(Math.random() * 5);
    var color2 = Math.floor(Math.random() * 5);

    var counter = 0;
    var cubby = document.getElementsByClassName('b1');
    var bookLinks = document.querySelectorAll('.book-shelf a');
    var bookShelf = document.querySelectorAll('.book-shelf');
    var close_video = document.getElementsByClassName('close-video');
    var popup = document.getElementsByClassName('popup');
    var popup_video = document.querySelectorAll('.popup-video video');
    var book_name = document.getElementsByClassName('video-title');

    popup_video[0].setAttribute('src', 'vids/'+video_file[video_index]);
    book_name[0].innerHTML = video_title[video_index];


    close_video[0].addEventListener('click', function() {

      popup[0].style.display = 'none';

    });



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
      if(links[counter] != "" && game[counter] === false && kidbook[counter] === false){
        bookLinks[counter].setAttribute('href', links[counter]);
        bookShelf[counter].style.backgroundColor = 'lightyellow';
      }else if(links[counter] != "" && game[counter] === true){
        bookLinks[counter].setAttribute('href', links[counter]);
        bookShelf[counter].style.backgroundColor = 'red';
      }else{
        bookLinks[counter].setAttribute('href', links[counter]);
        bookShelf[counter].style.backgroundColor = 'lightgreen';
      }
      counter++;
  });

}
