// const ticket = {
//     nomFilm: "Batman", 
//     prix: 10, 
//     numeroSalle: 3
//   }
  
//   let nom = "David"
  
//   // Bonjour nom, votre film NOMDEFILM est en salle NUMERODELASALE
  
//   let texteAffichage = "Bonjour " + nom + ", votre film " + ticket.nomFilm + " est en salle " + ticket.numeroSalle
  
//   console.log(texteAffichage)




// let playlist = ["A kind of magic", "We are the champions", "The show must go on"]

// playlist.push("Innuendo")
// playlist.push("Radio Gaga")

// playlist.pop()

// console.log(playlist)






// Déclaration du tableau contenant la liste des mots proposés à l'utilisateur
const listeMots = ['Cachalot', 'Pétunia', 'Serviette']
let score = 0

// Déclaration de la variable contenant le mot saisi par l'utilisateur
// Le prompt sert à afficher une popup demandant à l'utilisateur de saisir un mot
let motUtilisateur = prompt('Entrez le mot : ' + listeMots[0])

// Vérification du mot saisi par l'utilisateur : on vérifie qu'il correspond au premier mot du tableau "listeMots"
if (motUtilisateur === listeMots[0]) {
    score++
}

// Idem avec le second mot du tableau
// Notez l'absence du "let" devant la déclaration de la variable "motUtilisateur", cela permet de réutiliser la variable déclarée précédemment
motUtilisateur = prompt('Entrez le mot : ' + listeMots[1])
if (motUtilisateur === listeMots[1]) {
    score++
}

// Idem avec le troisième mot du tableau
motUtilisateur = prompt('Entrez le mot : ' + listeMots[2])
if (motUtilisateur === listeMots[2]) {
    score++
}

// Affichage du score de l'utilisateur
console.log("Votre score est de " + score + " sur 3")







