//How to put html pages in array and make a random link selector with the front page logo?

// -------- Zoom in / out on brief pages ----------

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



// =========== HOW IT's DONE page opennable sections =========
// This code is based from the 'eventlist' files from root_day_9 shown in class

//Styleguide opening
const trigStyleguide = document.querySelector("#styleguide");
const closerStyleguide = document.querySelector("#styleguideSec");

trigStyleguide.addEventListener("click", openStyleguide);
closerStyleguide.addEventListener("click", closeStyleguide);

function openStyleguide() {
  document.getElementById("styleguideSec").style.height = "100%";
}

function closeStyleguide() {
  document.getElementById("styleguideSec").style.height = "0%";
}

//wireframe opening
const trigWireframe = document.querySelector("#wireframe");
const closerWireframe = document.querySelector("#wireframeSec");

trigWireframe.addEventListener("click", openWireframe);
closerWireframe.addEventListener("click", closeWireframe);

function openWireframe() {
  document.getElementById("wireframeSec").style.height = "100%";
}

function closeWireframe() {
  document.getElementById("wireframeSec").style.height = "0%";
}

//XD prototype opening

const trigPrototype = document.querySelector("#prototype");
const closerPrototype = document.querySelector("#prototypeSec");

trigPrototype.addEventListener("click", openPrototype);
closerPrototype.addEventListener("click", closePrototype);

function openPrototype() {
  document.getElementById("prototypeSec").style.height = "100%";
}

function closePrototype() {
  document.getElementById("prototypeSec").style.height = "0%";
}


//Mobile sketches opening
const trigMobile = document.querySelector("#mobile");
const closerMobile = document.querySelector("#mobileSec");

trigMobile.addEventListener("click", openMobile);
closerMobile.addEventListener("click", closeMobile);

function openMobile() {
  document.getElementById("mobileSec").style.height = "100%";
}

function closeMobile() {
  document.getElementById("mobileSec").style.height = "0%";
}