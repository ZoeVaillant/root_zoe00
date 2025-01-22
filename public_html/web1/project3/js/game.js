console.log("🫧 Loaded! 🫧")

const stage = document.querySelector("body")
const myBlub = document.getElementById("blub");

// Sounds
const heComplains = new Audio("sound/bubblepop.mp3"); 

myBlub.onclick = function() {
    this.classList.toggle("move")
    heComplains.play();
}

stage.addEventListener("click", function (event) {
    console.log(event.clientX + " : " + event.clientY);

    //var coords = "translateX(" + event.clientX + "px) translateY(" + event.clientY + "px)";
    // "" '' ``
    var coords = `translateX(${event.clientX-100}px) translateY(${event.clientY-145}px)`;
    myBlub.style.transform = coords;
})

//keyboard input
document.onkeydown = checkKeys;
function checkKeys(event) {
    var style = window.getComputedStyle(myBlub);
    var matrix = new WebKitCSSMatrix(style.transform);
    var xVal = matrix.m41;
    var yVal = matrix.m42;


    //left arrow
    if (event.keyCode == "37") {
        coords = `translateX(${xVal-200}px) translateY(${yVal}px)`;
        myBlub.style.transform = coords;
    }
    //up arrow
    if (event.keyCode == "38") {
        coords = `translateX(${xVal}px) translateY(${yVal-200}px)`;
        myBlub.style.transform = coords;
    }
    //right arrow
    if (event.keyCode == "39") {
        coords = `translateX(${xVal+200}px) translateY(${yVal}px)`;
        myBlub.style.transform = coords;
    }
    //down arrow
    if (event.keyCode == "40") {
        coords = `translateX(${xVal}px) translateY(${yVal+200}px)`;
        myBlub.style.transform = coords;
    }
     

}

let myObject;
function addMyObject() {
  /* Custom Object */
    myObject = document.createElement("img");
    myObject.src = "img/Group 1 (2).svg";
    stage.append(myObject);

    //read window's available width & height in px
    let w = window.innerWidth - 98.48;
    let h = window.innerHeight - 100;

    //randomize new X & Y numbers within space limits
    let randomX = Math.floor((Math.random() * w) + 1);
    let randomY = Math.floor((Math.random() * h) + 1);

    myObject.style.transform = `translateX(${randomX}px) translateY(${randomY}px)`;

    setTimeout(() => { myObject.remove(); addMyObject(); }, 2500);

}
addMyObject();



//ES6
//myAline.onclick = () => {
//    myAlien.classList.toggle("move")      
//}

/**
 * Game update loop
 */

let characterCoordX;
let characterCoordY;
let objectCoordX;
let objectCoordY;

setInterval(() => {
    // console.log("update loop is running")
    characterCoordX = myBlub.getBoundingClientRect().x;
    characterCoordY = myBlub.getBoundingClientRect().y;

    //optional: move character coordinates to its center
    characterCoordX += 98.48; //half the width of the character
    characterCoordY += 100; //half the height of the character

    objectCoordX = myObject.getBoundingClientRect().x;
    objectCoordY = myObject.getBoundingClientRect().y;

    
    if(
         (characterCoordX >= objectCoordX && characterCoordX <= objectCoordX + myObject.width)
      && (characterCoordY >= objectCoordY && characterCoordY <= objectCoordY + myObject.height)
      ) { 
      console.log("Hit!");
      objectAction();
  }
}, 50);

  
const bingSound = new Audio("sound/ding-80828.mp3");
function objectAction() {
    
    myBlub.classList.add("happy");
    setTimeout(() => {
        myBlub.classList.remove("happy");
    }, 1000);
    myObject.remove();
    bingSound.play();
    
}
    
    