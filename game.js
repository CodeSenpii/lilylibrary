//jshint esversion:8
const canvas = document.getElementById('canvas1');
const ctx = canvas.getContext('2d');
CANVAS_WIDTH = canvas.width = 500;
CANVAS_HEIGHT = canvas.height = 700;
const numberOfEnemies = 10;
let enemy = [];

let spriteFrame = 0;



//gives enemy its initail values and updates
class Enemy {
  constructor(){
    this.enemyImage = new Image();
    this.enemyImage.src = 'enemy1.png';

    // this.speed = (Math.random() * 4 - 2);
    this.spriteWidth = 293;
    this.spriteHeight = 155;
    this.width = this.spriteWidth * 0.3;
    this.height = this.spriteHeight * 0.3;
    this.x = Math.random() * (canvas.width - this.width);
    this.y = Math.random() * canvas.height;
    this.frame = 0;
    this.flapSpeed = Math.floor(Math.random() * 3 + 1);

    this.enemyImage.addEventListener('click', function(e){
      console.log(e);
    });


  }
  update(){
    this.x += Math.random() * 5 - 2.5; //each object will have differnt spped
    this.y += Math.random() * 4.5 - 2.5;
    // if (this.y === 0) this.y = 200;
    // this.x += Math.randon() * 5 - 2.5;
    // this.y += Math.random() * 3 - 2.5;

    if(spriteFrame % this.flapSpeed === 0){
      if(this.frame > 4){
        this.frame = 0;
      }else{
        this.frame++;
      }
    }

    // this.y++;
  }
  draw(){
    // ctx.strokeRect(this.x, this.y, this.width, this.height);
    ctx.drawImage(this.enemyImage, this.frame*this.spriteWidth, 0, this.spriteWidth, this.spriteHeight,
       this.x, this.y, this.width, this.height);


  }
}

// const enemy1 = new Enemy();
//create enemy objects
for (let i = 0; i < numberOfEnemies; i++){
  enemy.push(new Enemy());
}

function animate(){
  ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
  // enemy1.update();
  // enemy1.draw();
  // ctx.fillRect(enemy1.x, enemy1.y, enemy1.width, enemy1.height);
  //updates object enemy and draw
  enemy.forEach(enemy => {
    enemy.update();
    enemy.draw();

    // if (enemy.x === CANVAS_WIDTH) enemy.x = -200;
  });
  spriteFrame++;
  requestAnimationFrame(animate);

  // if(enemy1.x === CANVAS_WIDTH){
  //   enemy1.x = -200;
  // }
}
animate();
