let cases = document.querySelectorAll(".case");
let replay = document.querySelector("#replay");
let paneauMessage = document.querySelector("#message");
let hero = document.querySelector("#hero");
let heroImg = document.querySelector("#hero img")

let joueurX = true;
let gagnant = '';
const patrons = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
];

for (let boite of cases){
    boite.active = true;
    boite.addEventListener("click", function(){
        if (boite.active) {
            if (joueurX) {
               boite.style.backgroundImage = "url('imgs/trouperlev2.svg')";
               joueurX = false;
            }

            else {
                boite.style.backgroundImage = "url('imgs/troushellv2.svg')";
                joueurX = true;
            }
        }
        boite.active = false
        valide();
        
    });

}


const valide = function () {
    let win = false;

        for (let patron of patrons) {
            let val1 = cases[patron[0]].style.backgroundImage.slice(5, 25);
            let val2 = cases[patron[1]].style.backgroundImage.slice(5, 25);
            let val3 = cases[patron[2]].style.backgroundImage.slice(5, 25);

            if (val1 &&
                val1 === val2 &&
                val1 === val3) {
                console.log(`Le Ganant est ${val1}`);
                paneauMessage.innerHTML = "Gagnant!";
                win = true;

                if (val1 === 'imgs/trouperlev2.svg') {
                    heroImg.src = "imgs/pearl.png";
                }
                else {
                    heroImg.src = "imgs/shell.png";
                }

                hero.classList.add('fin');
                for (let boite of cases) {
                    boite.active = false;
                }
            }     
        }
        
    //pour ce code ici, j'ai utiliser le code de Valentina pour m'aider
        if ([...cases].every((boite) => boite.active === false) && !win) {
        paneauMessage.innerHTML = "Personne a gagné!";
        
            hero.classList.add('fin');
            for (let boite of cases) {
                boite.active = false;
        }
    }
};

replay.addEventListener("click", function() {
   console.log('yay!'); 
   for (let boite of cases){
        boite.active = true;
        boite.style.backgroundImage = "";
        joueurX = true;
        heroImg.src = "";
    }
    hero.classList.remove('fin');
});



