document.getElementById("contactForm").addEventListener("submit", function(e) {
  var nom = document.getElementById("nom").value;
  var email = document.getElementById("email").value;
  var message = document.getElementById("message").value;
  if (!nom || !email || !message) {
    alert("Veuillez remplir tous les champs.");
    e.preventDefault();
  }
});
