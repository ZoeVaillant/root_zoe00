let tasse = document.querySelector("#tasse")
let bureau = document.querySelector("#bureau")
let manteaux = document.querySelector("#manteaux")
let batte = document.querySelector("#batte")
let corde = document.querySelector("#corde") 
let hero = document.querySelector("#hero");
let heroImg = document.querySelector("#hero img")
let replay = document.querySelector("#replay");


// Bruce nous a aidés créer ce code
let weapon = ''; 
let murderer = '';
let chosenWeapon = '';
let chosenMurderer = '';
 
const audioOpenElement = document.getElementById('docopen');
const audioCloseElement = document.getElementById('docclose')
const audioBackground = document.getElementById('ambience');
const openModalButtons = document.querySelectorAll("[data-modal-target]")
const closeModalButtons = document.querySelectorAll("[data-close-button]")
const overlay = document.getElementById("overlay")

// let randomWeapon = Math.floor(Math.random()*3);
// let weaponArray = ["rope", "poison", "bat"];
// // generate random number to choose weapon ( 0 - 2)

// console.log(randomWeapon, weaponArray[randomWeapon]);

//do same for people

window.onclick = function () {
    backgroundMusic();
}

openModalButtons.forEach(button => {
    button.addEventListener("click", () => {
        
        const modal = document.querySelector(button.dataset.modalTarget)
        console.log('clicked',tasse, modal);

        openModal(modal)
    });
});

overlay.addEventListener("click", () => {
    const modals = document.querySelectorAll(".modal.active")
    modals.forEach(modal => {
        closeModal(modal)
    })
})

closeModalButtons.forEach(button => {
    button.addEventListener("click", () => {
        
        const modal = button.closest(".modal")
        closeModal(modal)
    })
})

function backgroundMusic() {
    audioBackground.play().then(() => {
        audioBackground.muted = false;
        // console.log("background music");
    });
}

function playOpenSound() {
    audioOpenElement.play().then(() => {
        audioOpenElement.muted = false;
        // console.log("document open sound");
        
    });
}

function playCloseSound() {
    audioCloseElement.play().then(() => {
        audioCloseElement.muted = false;
        // console.log("document close sound");
    });
}

function openModal(modal) {
    if (modal == null) return
    modal.classList.add("active")
    overlay.classList.add("active")
    playOpenSound();
}

function closeModal(modal) {
    if (modal == null) return
    modal.classList.remove("active")
    overlay.classList.remove("active")
    playCloseSound();
}

let m = 3;
let s = 1; 
var t = setInterval(function() {
    
    s--;
    if (s == -1) {
        m--;
        s = 59;
    }    

    let timeDisplay;
    if (s < 10) {
        timeDisplay = m + ":0" + s;
    }
    else {
        timeDisplay = m + ":" + s;
    }
    document.querySelector("#timer").innerHTML = timeDisplay;

    if (s == 0 && m == 0) {
        openLooseHero();
        console.log("game over!");
        clearInterval(t);
    }

}, 1000);

// Bruce nous a aidés créer  ce code
function openLooseHero(){
    // make #hero visible
    heroImg.src = "imgs/loser.png"
    hero.classList.add("fin");
    overlay.classList.add("active")
}

function openWinHero() {
    heroImg.src = "imgs/winner.png"
    hero.classList.add("fin");
    overlay.classList.add("active")
}

replay.addEventListener("click", function() {
   console.log('yay!');     
    hero.classList.remove('fin');
    overlay.classList.remove("active")
    window.location.reload();
});

function openDoc() {
    document.querySelector("#docopen")
}


let scenario =  Math.floor(Math.random() * 9);

switch (scenario) {
    case 0:
        console.log(scenario + " sce 1");
        document.querySelector("#tassepoisson").classList.remove("hide");
        document.querySelector("#manteauxlouispoison").classList.remove("hide");
        document.querySelector("#battenormal").classList.remove("hide");
        document.querySelector("#bureaudiary").classList.remove("hide");
        document.querySelector("#cordenormal").classList.remove("hide");
        // Bruce nous a aidés créer ce type de code qui est trouver dans chaque senario
        // define random weapon & person
        weapon = "poisson";
        murderer = "louis";
        break;

    case 1:
        console.log(scenario + " sce 2");
        document.querySelector("#tassenormal").classList.remove("hide");
        document.querySelector("#manteauxlouisbatte").classList.remove("hide");
        document.querySelector("#battesang").classList.remove("hide");
        document.querySelector("#bureaudiary").classList.remove("hide");
        document.querySelector("#cordenormal").classList.remove("hide");
        weapon = "batte";
        murderer = "louis";
        break;

    case 2:
        console.log(scenario + " sce 3");
        document.querySelector("#tassenormal").classList.remove("hide");
        document.querySelector("#manteauxlouiscorde").classList.remove("hide");
        document.querySelector("#battenormal").classList.remove("hide");
        document.querySelector("#bureaudiary").classList.remove("hide");
        document.querySelector("#cordetear").classList.remove("hide");
        weapon = "corde";
        murderer = "louis";
    break;

    case 3:
        console.log(scenario + " sce 4");
        document.querySelector("#tassepoisson").classList.remove("hide");
        document.querySelector("#manteauxmartinpoison").classList.remove("hide");
        document.querySelector("#battenormal").classList.remove("hide");
        document.querySelector("#bureaulettremenace").classList.remove("hide");
        document.querySelector("#cordenormal").classList.remove("hide");
        weapon = "poisson";
        murderer = "martin";
    break;

    case 4:
        console.log(scenario + " sce 5");
        document.querySelector("#tassenormal").classList.remove("hide");
        document.querySelector("#manteauxmartinbatte").classList.remove("hide");
        document.querySelector("#battesang").classList.remove("hide");
        document.querySelector("#bureaulettremenace").classList.remove("hide");
        document.querySelector("#cordenormal").classList.remove("hide");
        weapon = "batte";
        murderer = "martin";
        
    break;

    case 5:
        console.log(scenario + " sce 6");
        document.querySelector("#tassenormal").classList.remove("hide");
        document.querySelector("#manteauxmartincorde").classList.remove("hide");
        document.querySelector("#battenormal").classList.remove("hide");
        document.querySelector("#bureaulettremenace").classList.remove("hide");
        document.querySelector("#cordetear").classList.remove("hide");
        weapon = "corde";
        murderer = "martin";
        
    break;

    case 6:
        console.log(scenario + " sce 7");
        document.querySelector("#tassepoisson").classList.remove("hide");
        document.querySelector("#manteauxsusanpoison").classList.remove("hide");
        document.querySelector("#battenormal").classList.remove("hide");
        document.querySelector("#bureaulettreecole").classList.remove("hide");
        document.querySelector("#cordenormal").classList.remove("hide");
        weapon = "poisson";
        murderer = "susan";
    break;

    case 7:
        console.log(scenario + " sce 8");
        document.querySelector("#tassenormal").classList.remove("hide");
        document.querySelector("#manteauxsusanbatte").classList.remove("hide");
        document.querySelector("#battesang").classList.remove("hide");
        document.querySelector("#bureaulettreecole").classList.remove("hide");
        document.querySelector("#cordenormal").classList.remove("hide");
        weapon = "batte";
        murderer = "susan";
    break;

    case 8:
        console.log(scenario + " sce 9");
        document.querySelector("#tassenormal").classList.remove("hide");
        document.querySelector("#manteauxsusancorde").classList.remove("hide");
        document.querySelector("#battenormal").classList.remove("hide");
        document.querySelector("#bureaulettreecole").classList.remove("hide");
        document.querySelector("#cordesang").classList.remove("hide");
        weapon = "corde";
        murderer = "susan";
    break;

}


// Peter nous a aidé à créer ce code
// img id = "rope" class="weapon"
// img id = "Louis" class="murderer"

document.querySelectorAll(".weapon").forEach((weap) => {
    weap.addEventListener("click", () => {
        console.log(weap.id)
        chosenWeapon = weap.id
        if (chosenWeapon == weapon) {
            if (!!chosenMurderer && chosenMurderer == murderer) {
                console.log("Win");
                openWinHero()
                overlay.classList.add("active")
            }
        }
        
        if (chosenWeapon != weapon) {
            if (!!chosenMurderer && chosenMurderer != murderer) {
                console.log("loose")
                openLooseHero()
                overlay.classList.add("active")
            }
        }
        
        if (chosenWeapon != weapon) {
            if (!!chosenMurderer && chosenMurderer == murderer) {
                console.log("loose")
                openLooseHero()
                overlay.classList.add("active")
            }
        }
    });
});

document.querySelectorAll(".murderer").forEach(murd => {
    murd.addEventListener("click", () => {
        console.log(murd.id)
        chosenMurderer = murd.id
        if (chosenMurderer == murderer) {
            if (!!chosenWeapon && chosenWeapon == weapon) {
                console.log("Win");
                openWinHero()
                overlay.classList.add("active")
            }
        }

        if (chosenMurderer != murderer) {
            if (!!chosenWeapon && chosenWeapon != weapon) {
                console.log("loose")
                openLooseHero()
                overlay.classList.add("active")
            }
        }

        if (chosenMurderer != murderer) {
            if (!!chosenWeapon && chosenWeapon == weapon) {
                console.log("loose")
                openLooseHero()
                overlay.classList.add("active")
            }
        }
    });
});


//    console.log('yay!');
//    for ()
//         boite.active = true;
//         heroImg.src = "";
//     }
//     hero.classList.remove('fin');
// });

// console.log(weapon, murderer)


/* winning condition */
/* if(chosenWeapon == randomWeapon used && chosen person == murderer){
        You win!!!
    }
*/

// window.onload = function(){
//     document.getElementById("ambience").play();
// }
