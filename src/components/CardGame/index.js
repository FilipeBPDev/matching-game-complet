import './style.css'

function CardGame(icon = "alura-pixel", alt = "Logo da Alura") {
    return /*html*/`
    <article class = "card-game ${icon}" data-${icon} = "${icon}">
        <img src = "images/${icon}.png" alt = "${alt}">
    </article>
    `;
}

export default CardGame;