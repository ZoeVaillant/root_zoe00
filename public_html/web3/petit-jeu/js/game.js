// Ceci creer le canvas
var canvas = document.createElement("canvas");
var ctx = canvas.getContext("2d");
canvas.width = document.documentElement.clientWidth;
canvas.height = document.documentElement.clientHeight;
document.querySelector("#gameBox").appendChild(canvas);
let hero = document.querySelector("#hero");
let heroMessage= document.querySelector("#hero #collect");

canvas.addEventListener ("click", function (){
    window.location.reload();
});
 
//https://stackoverflow.com/questions/14356956/playing-audio-after-the-page-loads-in-html, https://www.w3schools.com/jsref/prop_audio_volume.asp
window.onload = function () {
    document.getElementById("ambience").play(). volume = 10;
};


//Charger les sprites
//L'image d'arriere-plan
var bgReady = false;
var bgImage = new Image();
bgImage.src = "imgs/backgroundv2sized.png";
bgImage.onload = function (){
    bgReady = true;
};

//Estampe gagnant
// var winReady = false;
// var winImage = new Image();
// winImage.src = "imgs/win.png";
// winImage.onload = function (){
//     winReady = true;
// };

var looseReady = false;
var looseImage = new Image();
looseImage.src = "imgs/loosebranch.png";
looseImage.onload = function (){
    looseReady = true;
};

var timeReady = false;
var timeImage = new Image()
timeImage.src = "";
timeImage.onload = function (){
    timeReady = true;
};

//Image du joueur
var playerReady = false;
var playerImage = new Image();
playerImage.src = "imgs/playerv2sized.png";
playerImage.onload = function (){
    playerReady = true;
};

//Image des goodies
var goodyReady = false;
var goodyImage = new Image();
goodyImage.src = "imgs/orangev2sized.png";
goodyImage.onload = function (){
    goodyReady = true;
};

//Image des baddies
var baddieReady = false;
var baddieImage = new Image();
baddieImage.src = "imgs/branchv2sized.png";
baddieImage.onload = function (){
    baddieReady = true;
}

//Image Logo
var logoReady = false;
var logoImage = new Image();
logoImage.src = "imgs/logocropped.png";
logoImage.onload = function (){
    logoReady = true;
}

//Musique Ambience *Le code de "Flower Power" m'a aider pour ajouter les sons
// var ambienceAudioReady = false;
// var ambienceAudio = document.getElementById("ambience");
// ambienceAudio.oncanplay = function () {
//     ambienceAudioReady = true;
//     ambienceAudio.loop = true;
//     ambienceAudio.volume = 1;
// };

// var ambiencePlaying = false;


var orangesCollected = 1;


//creer des objets de jeu globaux
var player = {
    speed : 10, //mouvement en pixels par tick
    width : 150,
    height : 150
};

var goodies = [ //ceci est un tableau (array)
    { width: 100 , height: 100}, //un goody
];

var baddies = [ //ceci est un tableau (array)
    { width: 100, height: 100 }, //un baddie
    
];

var imagesArray = [
    goodyReady
];
  
var imagesArray2 = [
    baddieReady
]; 

//variables de vitesse
var vX = 0;
var vY = 0;

//J'ai utiliser le code du jeu "Stellar Sentinal" pour le timer
var timer = 60; 
var setInterval;
var gameOver = false;

//Gerer les commandes du clavier
addEventListener("keydown", function (e) {
//touches
    // if (e.keyCode == 38 ) { //HAUT
    //     vX = 0;
    //     vY = -player.speed;    
    // }
    // if (e.keyCode == 40) { //BAS
    //     vX = 0;
    //     vY = player.speed;
    // }
    if (e.keyCode == 37) { //GAUCHE
        vX = -player.speed;
        vY = 0;
    }
    if (e.keyCode == 39) { //DROITE
        vX = player.speed;
        vY = 0;    
    }
    if (e.keyCode == 32) { //Bar D'espace
        vX = 0;
        vY = 0;    
    }
}, false);

//Gere les commandes tactiles
addEventListener("touchstart", function (e){
    if (e.target.id == "uArrow") { //HAUT
        vX = 0;
        vY = -player.speed;    
    }
    else if (e.target.id == "dArrow") { //BAS
        vX = 0;
        vY = player.speed;    
    }
    else if (e.target.id == "lArrow") { //GAUCHE
        vX = -player.speed;
        vY = 0;    
    }
    else if (e.target.id == "rArrow") { //DROITE
        vX = player.speed;
        vY = 0;
    }
    else { //ARRET S'arrete si vous touchez ailleurs
        vX = 0;
        vY = 0;   
    }
});

//definir l'etat intital
var init = function () {
//mettre le joueur au centre
    player.x = (canvas.width - player.width) / 2;
    player.y = canvas.height - player.height -0;

    //placez des goodies a des endroits aleatoires
    for (var i in goodies) {
        goodies[i].x = (Math.random() *  (canvas.width - goodies[i].width));
        goodies[i].y = 0;
        
    }
    for (var i in baddies) {
        baddies[i].x = (Math.random() *  (canvas.width - baddies[i].width));
        baddies[i].y = 0;
    }

    //J'ai utiliser le code de "Merry Mayhem" pour m'aider avec le chronometre
    timerInterval = setInterval(function(){
        if (timer > 0){
            timer--;
        }    
    }, 1000);

    
};
    

//La boucle de jeu  (MAIN)
var main = function (){

    if (checkLoose()) {
        //GAGNANT Affichier le cadre
        console.log("lose");
        render(true);
            ctx.fillStyle = "#445420";
            ctx.beginPath();
            ctx.roundRect((canvas.width - 700)/2, (canvas.height - 700)/2, 700, 700, [100]);
            ctx.fill();
            ctx.font = "90px Coming Soon";
            ctx.fillStyle = "white";
            ctx.fillText("Uh Oh!", (canvas.width - 250)/2, (canvas.height - 400)/2);
            ctx.font = "30px Coming Soon";
            ctx.fillStyle = "white";
            ctx.fillText("Vous avez collecté trop de branches!", (canvas.width - 450)/2, (canvas.height + 250)/2);
            ctx.drawImage(looseImage, (canvas.width - 200)/2, (canvas.height - 310)/2, 200, 200)
            ctx.fillStyle = "#ffffffff";
            ctx.beginPath();
            ctx.roundRect((canvas.width - 400)/2, (canvas.height + 350)/2, 400, 100, [100]);
            ctx.fill();
            ctx.font = "50px Coming Soon";
            ctx.fillStyle = "rgba(31, 37, 14, 1)";
            ctx.fillText("Re-jouer", (canvas.width - 200)/2, (canvas.height + 480)/2,);
            
    }

    else if (checkTimeUp()) {
        render();
        ctx.fillStyle = "#445420";
        ctx.beginPath();
        ctx.roundRect((canvas.width - 700)/2, (canvas.height - 700)/2, 700, 700, [100]);
        ctx.fill();
        ctx.font = "90px Coming Soon";
        ctx.fillStyle = "white";
        ctx.fillText("Temps!", (canvas.width - 270)/2, (canvas.height - 400)/2);
        ctx.drawImage(goodyImage, (canvas.width - 350)/2, (canvas.height - 200)/2, 200, 200);
        ctx.fillText(orangesCollected-1, (canvas.width + 160)/2, (canvas.height + 100)/2);
        ctx.fillStyle = "#ffffffff";
        ctx.beginPath();
        ctx.roundRect((canvas.width - 400)/2, (canvas.height + 350)/2, 400, 100, [100]);
        ctx.fill();
        ctx.font = "50px Coming Soon";
        ctx.fillStyle = "rgba(31, 37, 14, 1)";
        ctx.fillText("Re-jouer", (canvas.width - 200)/2, (canvas.height + 480)/2,);
        
    }


    else {
        //pas encore gagner, jouer le jeu
        //deplacer le joueur
        if (player.x > 0 && player.x < canvas.width - player.width) {
            player.x += vX;
        }
        else{
            player.x -= vX;
            vX = -vX; //bounce
        }
        if (player.y > 0 && player.y < canvas.height - player.height){
            player.y += vY
        }
        else{
            player.y -= vY;
            vY = -vY; //bounce
        }
        /*This is the function that spawns goodies randomly
				You can use his random function calling for many other features. */
        if (Math.random() > 0.95){
            spawngoodies();
            
        }

        if (Math.random () > 0.95){
            spawnbaddies ();
        }

        //verifier les collisions
        for (var i in goodies) {
            goodies[i].y = goodies[i].y + 4;
        
            if (checkCollision(player,goodies[i])) {
                goodies.splice (i,1);
                orangesCollected = orangesCollected + 1;
            }
            
        }

        for (var i in baddies) {
            baddies[i].y = baddies[i].y + 4;
        
            if (checkCollision(player,baddies[i])) {
                baddies.splice (i,1);
                orangesCollected = orangesCollected - 1;
            }
            
        }
        render();
        window.requestAnimationFrame(main);

    }
};

//Dessinez le tout 
var render = function (lost) {
    if(bgReady){
        // ctx.fillStyle = ctx.createPattern(bgImage, 'repeat');
        // ctx.fillRect(0,0,canvas.width,canvas.height);
                ctx.drawImage(bgImage, 0, 0, canvas.width, canvas.height);

    }
    if (playerReady){
        ctx.drawImage(playerImage, player.x, player.y);
    }
    if (goodyReady){
        for (var i in goodies) {
            ctx.drawImage(goodyImage, goodies[i].x, goodies[i].y+100);
        }   
    }
    if (baddieReady){
        for (var i in baddies) {
            ctx.drawImage(baddieImage, baddies[i].x, baddies[i].y+100);
        }
    }


    //label
    ctx.fillStyle = "rgba(31,37,14,0.82)";
    ctx.fillRect(0, 0, canvas.width, 100);
    ctx.font = "40px Coming Soon";
    ctx.fillStyle = "rgb(250, 250, 250)";
    ctx.drawImage(goodyImage, 20, 25, 50, 50); //x,y,w,h
    lost ? ctx.fillText(orangesCollected, 75, 66) : ctx.fillText(orangesCollected-1, 75, 66);
    ctx.drawImage(logoImage, (canvas.width - 100)/2, (canvas.height - 1030)/2, 120, 70);
    // ctx.fillText("Meilleur Score :" + orangesCollected, 0, 45) //Le code provenant de "food coma" m'a aider ici

    //timer
    ctx.font = "50px Coming Soon";
    ctx.fillStyle = "white";
    ctx.fillText( + timer + " sec", canvas.width-170, 68);
};

//Fonction generique pour verifier les collisions
var checkCollision = function (obj1,obj2) {
    if (obj1.x < (obj2.x + obj2.width) &&
        (obj1.x + obj1.width) > obj2.x &&
        obj1.y < (obj2.y+80 + obj2.height) &&
        (obj1.y + obj1.height) > obj2.y+80 
    ) {
        return true;
    }
};

//verifiez si nous avons gagne
var checkLoose = function () {
    if (orangesCollected > 0) {
        return false;
    } else{
        return true;
    }
};

var checkTimeUp = function () {
    if (timer > 0){
        return false;
    } else {
        return true;
    }
};

//verifiez si nous avons perdu
// var checkLoose = function () {
//     if (orangesCollected < 0) {
//         return false;
//     } 
// }

var spawngoodies = function () {
    goodies.push({
        width: 32,
        height: 32,
        x: (Math.random() * (canvas.width - 32)),
        y: 0,
        img: Math.floor(Math.random() * 3)
    });
};

var spawnbaddies = function (){
    baddies.push({
        width: 32,
        height: 32,
        x: (Math.random() * (canvas.width - 32)),
        y: 0,
        img: Math.floor(Math.random() * 3)
    });
}

// if (!ambiencePlaying && ambienceAudioReady){
//         ambienceAudio.play();
//         ambiencePlaying = true;
//     }


//Demarrer le jeu
//let start = function() {
    init();
    window.requestAnimationFrame(main);
//}