import './style.css';
import CardFrontBack from '../../components/CardFrontBack';

import cards from './data-cards';


function BoardGame(amountCards) {
   let firstCard = null;
   let secondCard = null;



   const flipAndHideCards = ($cardsActive) => {
      $cardsActive.forEach((card) => card.classList.remove('-active'));
   }


   const swapPlayers = () => {
      const $arrowDown = document.querySelector('.arrow-down');
      const currentPlayer = parseInt($arrowDown.getAttribute('data-currentplayer'));

      $arrowDown.setAttribute('data-currentplayer', currentPlayer === 1 ? 2 : 1);
   }

   window.boardGame = {};
   window.boardGame.handleClick = () => {
      const $boardGame = document.querySelector('.board-game');
      const $cardsActive = $boardGame.querySelectorAll('.card-front-back.-active');

      const cardsSelected = Array.from($cardsActive);
      const card1Div = cardsSelected[0].querySelector('div:nth-child(2)');
      const iconArticle = card1Div.querySelector('article');


      if (cardsSelected.length > 1) {
         const card2Div = cardsSelected[1].querySelector('div:nth-child(2)');
         const iconArticle2 = card2Div.querySelector('article');

         const firstSelected = iconArticle.getAttributeNames();
         const secondSelected = iconArticle2.getAttributeNames();


         firstCard = firstSelected[1].length;
         secondCard = secondSelected[1].length;

      }

      if ($cardsActive.length === 2) {
         const checkCards = () => {
            if (firstCard === secondCard){
               $cardsActive[0].classList.add('-active');
            }
         };
         console.log(firstCard, secondCard);
         checkCards($cardsActive);

         setTimeout(() => {

            flipAndHideCards($cardsActive);
            swapPlayers();
         }, 700);
      }




   };



   const htmlCardsList = cards.map((card) => CardFrontBack(card.icon, card.altIcon));
   const $htmlCards = htmlCardsList.join('');

   return /*html*/`
    <section class = "board-game" onClick = "boardGame.handleClick()">
       ${$htmlCards}
    </section>
   `
}

export default BoardGame;