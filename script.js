// déplace "curseur" selon le mouvement de la souris
const curseur = document.getElementById("curseur")

window.addEventListener("mousemove", function(e){
    const posX = e.clientX;
    const posY = e.clientY;

    curseur.animate({
        left: `${posX}px`,
        top: `${posY}px`
    }, {duration: 300, fill: 'forwards'})
});




// pour augmenter la talle du curseur ( hover)

// const buttons = document.querySelectorAll('.button_footer button');

// // Pour chaque bouton, ajoutez un écouteur d'événements pour le survol
// buttons.forEach(button => {
//     button.addEventListener('mouseover', () => {
//         // Sélectionnez l'élément .curseur et modifiez sa taille
//         const curseur = document.querySelector('.curseur');
//         curseur.style.width = '3em';
//         curseur.style.height = '3em';
//     });

//     button.addEventListener('mouseout', () => {
//         // Réinitialisez la taille de l'élément .curseur lorsque la souris quitte le bouton
//         const curseur = document.querySelector('.curseur');
//         curseur.style.width = '2em';
//         curseur.style.height = '2em';
//     });
// });
