/***********VARIABLES**********************/
var socket = io()
function random(min,max) {
 return Math.floor(Math.random()*(max-min+1)+min)
}
var randomPara = random(0,13);
var randomPara2 = random(0,13);
var randomPara3 = random(0,13);
var randomPara4 = random(0,13);
var randomPara5 = random(0,13);
var randomPara6 = random(0,13);
var randomPara7 = random(0,13);
var randomPara8 = random(0,13);
var randomPara9 = random(0,13);
var randomPara10 = random(0,13);

var randomBattleM = random(0,13);
var randomBattleM2 = random(0,13);
var randomBattleM3 = random(0,13);
var randomBattleM4 = random(0,13);
var randomBattleM5 = random(0,13);
var randomBattleM6 = random(0,13);
var randomBattleM7 = random(0,13);
var randomBattleM8 = random(0,13);
var randomBattleM9 = random(0,13);
var randomBattleM10 = random(0,13);






var P2currentCard;
var P1currentCard;


var player1LP = 10;
var player2LP = 10;
var cardback1;
var cardback2;
var placeholder2;

var attackValue;

var whosTurnIsIt = 0;
alert("Set zoom to 75% to see full game board");


var para2;
var para3;
var para4;
var para5;
var para6;
var para7;
var para8;
var para9;
var para10;
var paraAce;
var paraJack;
var paraJoker;
var paraKing;
var paraQueen;

var BM2;
var BM3;
var BM4;
var BM5;
var BM6;
var BM7;
var BM8;
var BM9;
var BM10;
var BMAce;
var BMJack;
var BMJoker;
var BMKing;
var BMQueen;

var X
var y

var X2
var y2



var parasiteArray = [para2, para3, para4, para5,  para6, para7, para8, para9, para10, paraJack, paraQueen, paraKing, paraAce, paraJoker ];
var BattleMArray = [BM2,BM3,BM4,BM5,BM6,BM7,BM8,BM9,BM10,BMJack,BMQueen,BMKing,BMAce,BMJoker]

function whichCardWins(){
    
}

function preload(){
    cardback1 = loadImage("P1Cardback.gif")
    cardback2 = loadImage("P2Cardback.gif")
    parasiteArray[0] = loadImage("P2.png");
    parasiteArray[1] = loadImage("P3.png");
    parasiteArray[2] = loadImage("P4.png");
    parasiteArray[3] = loadImage("P5.png");
    parasiteArray[4] = loadImage("P6.png");
    parasiteArray[5] = loadImage("P7.png");
    parasiteArray[6] = loadImage("P8.png");
    parasiteArray[7] = loadImage("P9.png");
    parasiteArray[8] = loadImage("P10.png");
    parasiteArray[9] = loadImage("PJack.png");
    parasiteArray[10] = loadImage("PQueen.png");
    parasiteArray[11] = loadImage("PKing.png");
    parasiteArray[12] = loadImage("PA.png");
    parasiteArray[13] = loadImage("PJoker.png");
    
    
    BattleMArray[0] = loadImage("BM2.png");
    BattleMArray[1] = loadImage("BM3.png");
    BattleMArray[2] = loadImage("BM4.png");
    BattleMArray[3] = loadImage("BM5.png");
    BattleMArray[4] = loadImage("BM6.png");
    BattleMArray[5] = loadImage("BM7.png");
    BattleMArray[6] = loadImage("BM8.png");
    BattleMArray[7] = loadImage("BM9.png");
    BattleMArray[8] = loadImage("BM10.png");
    BattleMArray[9] = loadImage("BMJack.png");
    BattleMArray[10] = loadImage("BMQueen.png");
    BattleMArray[11] = loadImage("BMKing.png");
    BattleMArray[12] = loadImage("BMA.png");
    BattleMArray[13] = loadImage("BMJoker.png");
  
}
function setup() {
    createCanvas(1000, 900);
    background(0, 0, 0);
    image(cardback1, 0,100,80,120);
    image(cardback1, 150,100,80,120);
    image(cardback1, 300,100,80,120);
    image(cardback1, 450,100,80,120);
    image(cardback1, 600,100,80,120);  
    image(cardback1, 750,100,80,120);
    image(cardback1, 900,100,80,120);
    
    image(cardback1, 0,250,80,120);
    image(cardback1, 150,250,80,120);
    image(cardback1, 300,250,80,120);
    image(cardback1, 450,250,80,120);
    image(cardback1, 600,250,80,120);  
    image(cardback1, 750,250,80,120);
    image(cardback1, 900,250,80,120);
    
    image(cardback2, 0,550,80,120);
    image(cardback2, 150,550,80,120);
    image(cardback2, 300,550,80,120);
    image(cardback2, 450,550,80,120);
    image(cardback2, 600,550,80,120);  
    image(cardback2, 750,550,80,120);
    image(cardback2, 900,550,80,120);
    
    image(cardback2, 0,700,80,120);
    image(cardback2, 150,700,80,120);
    image(cardback2, 300,700,80,120);
    image(cardback2, 450,700,80,120);
    image(cardback2, 600,700,80,120);  
    image(cardback2, 750,700,80,120);
    image(cardback2, 900,700,80,120);
    
    
    
   /* button1 = createButton('Player One');
  button1.position(750, 450);
  button1.mousePressed(playerOneButton);
    
  button2 = createButton('Player Two');
  button2.position(1000,450)
  button2.mousePressed(playerTwoButton); */
}



function mouseClicked(){
    /*********************First Row*************************/
    
    
    
    if(mouseX > 0 && mouseX < 80 && mouseY < 220 && whosTurnIsIt == 1){
        
        image(parasiteArray[randomPara],0,100,80,120);
        whosTurnIsIt = 0
         X = 0
        y = 220
        P2currentCard = randomPara;
        console.log(randomPara);
        
    }
else if(mouseX > 150 && mouseX < 230 && mouseY < 220 && whosTurnIsIt == 1) {
        image(parasiteArray[randomPara2], 150,100,80,120);
        whosTurnIsIt = 0
        
         X = 150
        y = 220
        P2currentCard = randomPara2;
        console.log(randomPara);
}
    
else if(mouseX > 300 && mouseX < 380 && mouseY < 220 && whosTurnIsIt == 1) {
        image(parasiteArray[randomPara3], 300,100,80,120);
        whosTurnIsIt = 0
         X = 300
        y = 220
        P2currentCard = randomPara3;
        console.log(randomPara);
}
    
else if(mouseX > 450 && mouseX < 530 && mouseY < 220 && whosTurnIsIt == 1) {
        image(parasiteArray[randomPara4], 450,100,80,120);
        whosTurnIsIt = 0
         X = 450
        y = 220
        P2currentCard = randomPara4;
        console.log(randomPara);
}
    
else if(mouseX > 600 && mouseX < 680 && mouseY < 220 && whosTurnIsIt == 1) {
        image(parasiteArray[randomPara5], 600,100,80,120);
        whosTurnIsIt = 0
        X = 600
        y = 220
        P2currentCard = randomPara5;
        console.log(randomPara);
}
    
else if(mouseX > 750 && mouseX < 830 && mouseY < 220 && whosTurnIsIt == 1) {
        image(parasiteArray[randomPara6], 750,100,80,120);
        whosTurnIsIt = 0
        X = 750
        y = 220
        P2currentCard = randomPara6;
        console.log(randomPara);
}
    
else if(mouseX > 900 && mouseX < 980 && mouseY < 220 && whosTurnIsIt == 1) {
        image(parasiteArray[randomPara7], 900,100,80,120); 
        whosTurnIsIt = 0
         X = 900
        y = 220
        P2currentCard = randomPara7;
        console.log(randomPara);
}
    
/*********************Second Row*************************/
    
else if(mouseX > 0 && mouseX < 80 && mouseY < 370 && whosTurnIsIt == 1){
        image(parasiteArray[randomPara8], 0,250,80,120);
        whosTurnIsIt = 0
         X = 0
        y = 370
        P2currentCard = randomPara8;
        console.log(randomPara);
    }
else if(mouseX > 150 && mouseX < 230 && mouseY < 370 && whosTurnIsIt == 1) {
        image(parasiteArray[randomPara9], 150,250,80,120);
        whosTurnIsIt = 0
         X = 150
        y = 370
        P2currentCard = randomPara9;
        console.log(randomPara);
}
else if(mouseX > 300 && mouseX < 380 && mouseY < 370 && whosTurnIsIt == 1) {
        image(parasiteArray[randomPara10], 300,250,80,120);
        whosTurnIsIt = 0
        X = 300
        y = 370
        P2currentCard = randomPara10;
        console.log(randomPara);
}
else if(mouseX > 450 && mouseX < 530 && mouseY < 370 && whosTurnIsIt == 1) {
        image(parasiteArray[randomPara3], 450,250,80,120);
        whosTurnIsIt = 0
        X = 450
        y = 370
        P2currentCard = randomPara3;
        console.log(randomPara);
}
    
else if(mouseX > 600 && mouseX < 680 && mouseY < 370 && whosTurnIsIt == 1) {
        image(parasiteArray[randomPara], 600,250,80,120);
        whosTurnIsIt = 0
         X = 600
        y = 370
        P2currentCard = randomPara;
        console.log(randomPara);
}
else if(mouseX > 750 && mouseX < 830 && mouseY < 370 && whosTurnIsIt == 1) {
        image(parasiteArray[randomPara6], 750,250,80,120);
        whosTurnIsIt = 0
         
        X = 750
        y = 370
        P2currentCard = randomPara6;
        console.log(randomPara);
}
else if(mouseX > 900 && mouseX < 980 && mouseY < 370 && whosTurnIsIt == 1) {
        image(parasiteArray[randomPara2], 900,250,80,120);
        whosTurnIsIt = 0
        X = 900
    y = 370
        P2currentCard = randomPara2;
        console.log(randomPara);
}
    
 /*********************Third Row*************************/
else if(mouseX > 0 && mouseX < 80 && mouseY < 670 && whosTurnIsIt == 0){
        image(BattleMArray[randomBattleM], 0,550,80,120);
    whosTurnIsIt = 1
    X2 = 80
    y2 = 670
       P1currentCard = randomBattleM;
    }
else if(mouseX > 150 && mouseX < 230 && mouseY < 670 && whosTurnIsIt == 0) {
        image(BattleMArray[randomBattleM2], 150,550,80,120);
    whosTurnIsIt = 1
    X2 = 150
    y2 = 670
       P1currentCard = randomBattleM2;
}
else if(mouseX > 300 && mouseX < 380 && mouseY < 670 && whosTurnIsIt == 0) {
        image(BattleMArray[randomBattleM3], 300,550,80,120);
    whosTurnIsIt = 1
    X2 = 300
    y2 = 670
       P1currentCard = randomBattleM3
}
else if(mouseX > 450 && mouseX < 530 && mouseY < 670 && whosTurnIsIt == 0) {
        image(BattleMArray[randomBattleM4], 450,550,80,120);
    whosTurnIsIt = 1
    X2 = 450
    y2 = 670
       P1currentCard = randomBattleM4;
}
else if(mouseX > 600 && mouseX < 680 && mouseY < 670 && whosTurnIsIt == 0) {
        image(BattleMArray[randomBattleM5], 600,550,80,120);
    whosTurnIsIt = 1
    X2 = 600
    y2 = 670
       P1currentCard = randomBattleM5;
}
else if(mouseX > 750 && mouseX < 830 && mouseY < 670 && whosTurnIsIt == 0) {
        image(BattleMArray[randomBattleM6], 750,550,80,120);
    whosTurnIsIt = 1
    X2 = 750
    y2 = 670
       P1currentCard = randomBattleM6;
}
else if(mouseX > 900 && mouseX < 980 && mouseY < 670 && whosTurnIsIt == 0) {
        image(BattleMArray[randomBattleM7], 900,550,80,120);
    whosTurnIsIt = 1
    X2 = 900
    y2 = 670
       P1currentCard = randomBattleM7;
}
 /*********************Fourth Row*************************/
else if(mouseX > 0 && mouseX < 80 && mouseY < 820 && whosTurnIsIt == 0){
        image(BattleMArray[randomBattleM8], 0,700,80,120);
    whosTurnIsIt = 1
    X2 = 0
    y2 = 820
      P1currentCard = randomBattleM8;
    }
else if(mouseX > 150 && mouseX < 230 && mouseY < 820&& whosTurnIsIt == 0) {
        image(BattleMArray[randomBattleM9], 150,700,80,120);
    whosTurnIsIt = 1
    X2 = 150
    y2 = 820
      P1currentCard = randomBattleM9;
}
else if(mouseX > 300 && mouseX < 380 && mouseY < 820 && whosTurnIsIt == 0) {
        image(BattleMArray[randomBattleM10], 300,700,80,120);
    whosTurnIsIt = 1
     X2 = 300
    y2 = 820
      P1currentCard = randomBattleM10;
}
else if(mouseX > 450 && mouseX < 530 && mouseY < 820 && whosTurnIsIt == 0) {
        image(BattleMArray[randomBattleM3], 450,700,80,120);
    whosTurnIsIt = 1
    X2 = 450
    y2 = 820
      P1currentCard = randomBattleM3;
}
else if(mouseX > 600 && mouseX < 680 && mouseY < 820 && whosTurnIsIt == 0) {
        image(BattleMArray[randomBattleM], 600,700,80,120);
    whosTurnIsIt = 1
    X2 = 600
    y2 = 820
     P1currentCard = randomBattleM;
}
else if(mouseX > 750 && mouseX < 830 && mouseY < 820 && whosTurnIsIt == 0) {
        image(BattleMArray[randomBattleM6], 750,700,80,120);
    whosTurnIsIt = 1
    X2 = 750
    y2 = 820
    P1currentCard = randomBattleM6;
}
else if(mouseX > 900 && mouseX < 980 && mouseY < 820 && whosTurnIsIt == 0) {
        image(BattleMArray[randomBattleM2], 900,700,80,120);
    whosTurnIsIt = 1;
    X2 = 900
    y2 = 820
    P1currentCard = randomBattleM2;
}

if(whosTurnIsIt == 0){
 if(P1currentCard > P2currentCard){
     player2LP = player2LP - 1;
     //fill("black")
     //rect(X, y-120, 80, 120)
     if(P1currentCard == 12 && P2currentCard < 9){
     player2LP = player2LP + 1;
     player1LP = player1LP - 1;
         setTimeout(function() { fill("black") }, 1000);
     setTimeout(function() { rect(X2, y2-120, 80, 120) }, 1000);
     }
     else if(P2currentCard == 1 && P1currentCard < 10){
         player2LP = player2LP + 1;
     player1LP = player1LP - 1;
     setTimeout(function() { fill("black") }, 1000);
     setTimeout(function() { rect(X2, y2-120, 80, 120) }, 1000);
     }
     else if(P1currentCard == 13){
     setTimeout(function() { rect(X2, y2-120, 80, 120) }, 1000);
         player1LP = player1LP - 1;
     setTimeout(function() { fill("black") }, 1000);
     setTimeout(function() { rect(X, y-120, 80, 120) }, 1000);
     }
       else{ 
     setTimeout(function() { fill("black") }, 1000);
     setTimeout(function() { rect(X, y-120, 80, 120) }, 1000);
       }
 }
    else if(P2currentCard > P1currentCard){
        if(P1currentCard == 12 && P2currentCard < 9){
     player1LP = player1LP + 1;
     player2LP = player2LP - 1;
            setTimeout(function() { fill("black") }, 1000);
     setTimeout(function() { rect(X, y-120, 80, 120) }, 1000);
     }
        else if(P1currentCard == 1 && P2currentCard < 10){
         player1LP = player1LP + 1;
     player2LP = player2LP - 1;
     setTimeout(function() { fill("black") }, 1000);
     setTimeout(function() { rect(X, y-120, 80, 120) }, 1000);
     }
     else if(P2currentCard == 13){
     setTimeout(function() { rect(X, y-120, 80, 120) }, 1000);
         player2LP = player2LP - 1;
         setTimeout(function() { fill("black") }, 1000);
     setTimeout(function() { rect(X2, y2-120, 80, 120) }, 1000);
     }
    else{
     setTimeout(function() { fill("black") }, 1000);
     setTimeout(function() { rect(X2, y2-120, 80, 120) }, 1000);
    }
         player1LP = player1LP - 1;
    }
    else if(P2currentCard == P1currentCard){
    setTimeout(function() { fill("black") }, 1000);
     setTimeout(function() { rect(X, y-120, 80, 120) }, 1000);
        setTimeout(function() { rect(X2, y2-120, 80, 120) }, 1000);
        player2LP = player2LP - 1;
         player1LP = player1LP - 1;
    }
    else{
     //setTimeout(function() { fill("black") }, 1000);
     //setTimeout(function() { rect(X, y-120, 80, 120) }, 1000);
    }
    
    if(player1LP == 0){
       setTimeout(function() { fill("red") },2000);
       setTimeout(function() { textSize(100) },2000);
       setTimeout(function() { text("Player 2 WINS!",200,300) }, 2000);
   }
   else if(player2LP == 0){
       setTimeout(function() { fill("red") },2000);
       setTimeout(function() { textSize(100) },2000);
       setTimeout(function() { text("Player 1 WINS!",200,700) }, 2000);
   } 
}
    else{
        
    }
   
socket.on("cardflip", function(info){

})
    
    
    
}






function draw(){
    fill("white");
    rect(0,450,1000,20);
    fill("red")
    textSize(30)
    text("Player 1", 450, 850)
    fill("blue");
    textSize(30);
    text("Player 2", 450, 50)
    
    fill("black");
    rect(570,845,50,50)
    fill("violet")
    text("Life Points: " + player1LP,420,880)
    fill("black");
    rect(570,45,50,50)
    fill("violet")
    text("Life Points: " + player2LP,420,80)
    
    
    /*********Cards********/
}




