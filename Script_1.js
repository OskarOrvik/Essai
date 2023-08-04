// Cibler l'élément "Accueil" par son ID
var accueilLink = document.getElementById("accueil");

// Ajouter un événement de clic à l'élément "Accueil"
accueilLink.addEventListener("click", function(event) {
  event.preventDefault(); // Empêche le comportement par défaut du lien (ne pas suivre le lien)

  // Ajouter ici votre code pour réagir lorsque l'utilisateur clique sur le lien "Accueil"
  document.getElementById("message").innerText = "Vous avez cliqué sur Accueil !";
});