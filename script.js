const curseur = document.getElementById("curseur")

window.addEventListener("mousemove", function(e){
    const posX = e.clientX;
    const posY = e.clientY;

    curseur.animate({
        left: `${posX}px`,
        top: `${posY}px`
    }, {duration: 300, fill: 'forwards'})
});