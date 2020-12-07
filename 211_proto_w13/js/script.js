const trig = document.querySelector('.trigger');
const closer = document.querySelector('.close');

trig.addEventListener('click', openNav);
closer.addEventListener('click', closeNav);

function openNav() {
  document.getElementById("stylesheet").style.height = "100%";
}

function closeNav() {
  document.getElementById("stylesheet").style.height = "0%";
}


//How to put html pages in array and make a random link selector with the front page logo?

const dossier = document.querySelectorAll('.doc');
let docMoved = true;


// How to put docs in an array to make it possible to zoom out of them when click on
let docs = ["d1", "d2", "d3", "d4", "d5", "d6", "d7", "d8"]

// console.log(dossier);
dossier.forEach(function(c) {
  console.log(c);
  c.addEventListener('click', function() {

    this.classList.toggle("zoom");
    //make everything zoom out
  });
});