import { END_PAGE } from '../routes.js';

export function renderEndPageComponent({ appEl }) {
    const endWindowHtml = `
    <div class="window center">
        <img src="./img/lossing.svg" alt="lossing" />
        <div class="window__title">Вы проиграли!</div>
        <p class="window__timer">Затраченное время</p>
        <div class="window__time">01.20</div>
        <div class="game-header__restart">
            <button class="restart__button">Начать заново</button>
        </div>
    </div>`;

    appEl.innerHTML = endWindowHtml;
}
