//2dtransform.js

console.log('2dtransform.js loaded');

//create a selector
let img3 = document.querySelector("#img3")

img3.addEventListener('click', function(event){
    //console.log(this.id)
    this.classList.toggle('move-right')
})

let infoSections = document.querySelectorAll('article section nav')

infoSections.forEach(function (element) {
   element.addEventListener('click', toggleInfo); 
})


function toggleInfo(event) {
    console.log('toggleInfo');
    this.parentNode.classList.toggle('visible')

}
