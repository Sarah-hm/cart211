const dossier = document.querySelectorAll('.doc');
// console.log(dossier);
dossier.forEach(function(c) {
  console.log(c);
  c.addEventListener('click', function() {
    this.classList.toggle("zoom");
  });
});