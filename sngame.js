var numbofsegments=20
var segmentSize=20
var snakeheadX=0
var snakeheadY=0
var velocityX=0
var velocityY=0
var taillength=3
var tailarray=[]
var fruitX=0
var fruitY=0
var score=0
var highscore=0

function setup() {
  createCanvas(400, 400);
  snakeheadX= numbofsegments/2
  snakeheadY= numbofsegments/2
  fruitX=floor(random(0,numbofsegments))
  fruitY=floor(random(0,numbofsegments))
  frameRate(10)
}
function draw() {
  background(0);
  
  if(velocityX !=0 || velocityY!=0)
  {
 
  while(tailarray.length>taillength)
    {
      tailarray.shift()
    }
  tailarray.push({x:snakeheadX,y:snakeheadY})
  for(let i=0;i<tailarray.length;i++)
    {
      rect(tailarray[i].x*segmentSize,
           tailarray[i].y*segmentSize,
            segmentSize,
            segmentSize
          )
    }
  }
  for(let i=0;i<tailarray.length;i++)
  {
    if(snakeheadX+velocityX==tailarray[i].x &&                    snakeheadY+velocityY==tailarray[i].y)
      {
        snakeheadX= numbofsegments/2
        snakeheadY= numbofsegments/2
        velocityX=0
        velocityY=0
        taillength=3
        tailarray=[]
        fruitX=floor(random(0,numbofsegments))
        fruitY=floor(random(0,numbofsegments))
        
        if(score>highscore)
          {
            highscore=score
          }
        score=0
      }
  }  
 
  snakeheadX=snakeheadX+velocityX
  snakeheadY=snakeheadY+velocityY
  withinboundary()
  
  if(snakeheadX==fruitX && snakeheadY==fruitY)
    {
       fruitX=floor(random(0,numbofsegments))
       fruitY=floor(random(0,numbofsegments))
       taillength++
       score++
    }
  
  fill(255,0,0)
 
  rect(fruitX*segmentSize,fruitY*segmentSize,segmentSize,segmentSize)
 
  fill(255)
  rect(snakeheadX*segmentSize,snakeheadY*segmentSize,segmentSize,segmentSize)
  
  textSize(25)
  text('Score: '+score, 10,30)
  text('Highscore: '+highscore, 10,50)
 
}
function keyPressed()
{
  if(keyCode == UP_ARROW)
  {
      velocityX=0
      velocityY=-1
    }
 
  if(keyCode == DOWN_ARROW)
  {
      velocityX=0
      velocityY=1
    }
  if(keyCode == RIGHT_ARROW)
    {
      velocityX=1
      velocityY=0
    }
  if(keyCode == LEFT_ARROW)
    {
      velocityX=-1
      velocityY=0
    }
}
function withinboundary()
{
  if(snakeheadX<0){
    snakeheadX=numbofsegments-1
  }
  if(snakeheadX>numbofsegments-1)
    {
      snakeheadX=0
    }
  if(snakeheadY<0){
    snakeheadY=numbofsegments-1
  }
  if(snakeheadY>numbofsegments-1)
    {
      snakeheadY=0
    }
}
