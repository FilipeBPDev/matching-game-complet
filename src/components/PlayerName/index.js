import './style.css';

function PlayerName(content = "vs") {
    return /*html*/`
    <p class = "player-name">${content}</p>
    `;
}

export default PlayerName;