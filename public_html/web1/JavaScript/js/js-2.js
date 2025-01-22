console.log("JS 2 is loaded");

//Step 1 - selecting your element 
const myMoon = document.getElementById("moon")

//Step 2 - adding a click event
myMoon.addEventListener("click", () => { 
    // myMoon.style.boxShadow = "15px 15px 0 0 orange";
    myMoon.classList.add("change-me")
    
})
