window.onload = function(){

const text = [
"Aspiring Cloud Engineer",
"C++ Developer",
"DSA Learner"
];

let count = 0;
let index = 0;
let currentText = "";
let letter = "";

function type(){

if(count === text.length){
count = 0;
}

currentText = text[count];
letter = currentText.slice(0, ++index);

document.getElementById("typing").textContent = letter;

if(letter.length === currentText.length){
count++;
index = 0;
}

setTimeout(type,120);
}

type();

/* MODAL FUNCTIONS */

window.openModal = function(src){
document.getElementById("modal").style.display = "flex";
document.getElementById("modal-img").src = src;
}

window.closeModal = function(){
document.getElementById("modal").style.display = "none";
}

/* CLICK OUTSIDE CLOSE */

const modal = document.getElementById("modal");

modal.addEventListener("click", function(e){
if(e.target.id === "modal"){
closeModal();
}
});

};