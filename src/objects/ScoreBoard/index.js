import ArrowDown from "../../components/ArrowDown";
import PlayerName from "../../components/PlayerName";
import PlayerScore from "../../components/PlayerScore";
import VsPlayer from "../../components/VsPlayer";
import './style.css';

function ScoreBoard() {
    return /*HTML*/`
        <header class = "score-board" >
            ${ArrowDown(2)}
            ${PlayerName ("Player 1")}
            ${PlayerScore(3)} <!--Player 1-->
            ${VsPlayer()}
            ${PlayerScore(1)} <!--Player 2-->
            ${PlayerName("Player 2")}
        </header> 
    `;
}

export default ScoreBoard;