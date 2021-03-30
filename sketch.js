var mario;
var background;
var obstacle;
var stars;
var ground,invisibleGround;
var gameState=PLAY;
var PLAY=1;
var END=0;

function preload() {
    backgroundImg = loadImage("sprites/background.png");
    marioImg = loadImage("sprites/Mario.png");
    obstacleImg = loadImage("sprites/obstacle.png");
    starsImg = loadImage("sprites/Stars.png");
}

function setup(){
    var canvas = createCanvas(600,200);

    background=createSprite(0,0,800,800);
    background.addImage(backgroundImg);
    //background.scale=2.0;
    background.x=background.width/2;
   
    mario = createSprite(30,110,10,10);
    mario.addImage(marioImg);
    mario.scale=0.05;

    invisibleGround = createSprite(200,140,400,10);
    invisibleGround.visible = false;

    starsGroup = new Group ();
    obstaclesGroup = new Group ();
}

function draw(){
    
    //if(gameState===PLAY){
    background.velocityX=-2;
    if(background.x<0){
        background.x=background.width/2;
    }

    if(keyDown("space") && mario.y>=100){
        mario.velocityY= -12;
    }
    mario.velocityY=mario.velocityY+0.6;

    console.log(mario.y);

    mario.collide(invisibleGround);

    stars();
    obstacles();
}
    
    drawSprites();
//}

function stars(){
    if(frameCount%100===0){
        var stars = createSprite(600,120,10,10);
        stars.y = Math.round(random(20,100));
        stars.addImage(starsImg);
        stars.scale=0.1;
        stars.velocityX = -3;
        stars.lifetime = 300;
        stars.depth=mario.depth;
        mario.depth=mario.depth+1;
        starsGroup.add(stars);
    }
}

function obstacles(){
    if(frameCount%120===0){
        var obstacles = createSprite(600,115,10,10);
        obstacles.addImage(obstacleImg);
        obstacles.scale=0.3;
        obstacles.velocityX= -3;
        obstacles.lifetime = 300;
        obstaclesGroup.add(obstacles);
    }
}


