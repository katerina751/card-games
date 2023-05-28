import {START_PAGE } from '../routes.js';
import { goToPage } from '../script.js';

export function renderEndPageComponent({ appEl }) {
    const endWindowHtml = `
    <div class="window center">
        <img class="icon-game" src="./img/lossing.svg" alt="lossing" />
        <div class="window__message">Вы проиграли!</div>
        <p class="window__timer">Затраченное время</p>
        <div class="window__time">01.20</div>
        <div class="game-header__restart">
            <button class="game__button end">Начать заново</button>
        </div>
    </div>`;

    appEl.innerHTML = endWindowHtml;

    const restartGame = () => {
        const buttonRestartGame = document.querySelector('.game__button');
        buttonRestartGame.addEventListener('click', () => {
            goToPage(START_PAGE);
        });
    };

    restartGame();
}
