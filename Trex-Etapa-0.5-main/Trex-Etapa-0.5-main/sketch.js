var trex, trex_running, edges;
var groundImage, ground;


function preload(){
  trex_running = loadAnimation("trex1.png","trex3.png","trex4.png");
  groundImage = loadImage("ground2.png")
}

function setup(){
  createCanvas(600,200);
  
  //criando o trex
  trex = createSprite(50,160,20,50);
  trex.addAnimation("running", trex_running);
  edges = createEdgeSprites();
  ground = createSprite(200,180,400,20);
  ground.addImage(groundImage);

  //adicione dimensão e posição ao trex
  trex.scale = 0.5;
}


function draw(){
  //definir a cor do plano de fundo 
  background(220);
  
  //registrando a posição y do trex
  console.log(trex.y)
  
  //pular quando tecla de espaço for pressionada
  if(keyDown("space")){
    trex.velocityY = -10;
  }
   
  //gravidade
  trex.velocityY = trex.velocityY + 0.5;
  
  ground.velocityX = -5

  if (ground.x < 0){
  ground.x = ground.width/2;
  }

 //impedir que o trex caia
  trex.collide(ground)
  drawSprites();
}