import { START_PAGE } from "../routes.js";
import { goToPage } from "../script.js";

export function renderHardPageComponent({ appEl }) {
    const cards = [
        '6spades',
        '7spades',
        '8spades',
        '9spades',
        '10spades',
        'Jspades',
        'Qspades',
        'Kspades',
        'Aspades',
        '6clubs',
        '7clubs',
        '8clubs',
        '9clubs',
        '10clubs',
        'Jclubs',
        'Qclubs',
        'Kclubs',
        'Aclubs',
        '6hearts',
        '7hearts',
        '8hearts',
        '9hearts',
        '10hearts',
        'Jhearts',
        'Qhearts',
        'Khearts',
        'Ahearts',
        '6diamonds',
        '7diamonds',
        '8diamonds',
        '9diamonds',
        '10diamonds',
        'Jdiamonds',
        'Qdiamonds',
        'Kdiamonds',
        'Adiamonds',
    ];

    let gameCards = cards
        .sort(() => Math.random() - 0.5)
        .slice(-9)
        .join(' ')
        .concat(' ')
        .repeat(2)
        .slice(0, -1)
        .split(' ')
        .sort(() => Math.random() - 0.5);

    console.log(gameCards);

    const cardHTML = gameCards
        .map((card) => {
            console.log(`img src="./${card}.svg"/`);
            return `
                <div class="game__card">
                        <img src="./img/${card}.svg"/>
                </div>
                <div class="game__card">
                    <img src="./img/shirt.svg" alt="рубашка" />
                </div>`;
        })
        .join('');
    const windowHtml = `
            <div class="game-header">
                <div class="game-header__timer">
                    <div class="game-header__timer_header">
                        <p class="game-header__timer_header-item">min</p>
                        <p class="game-header__timer_header-item">sec</p>
                    </div>
                    <div class="game-header__timer_time" id="countdown">00:00</div>
                </div>
                <div class="game-header__restart">
                    <button class="restart__button">Начать заново</button>
                </div>
            </div>
            <div class="game__field">
                ${cardHTML}
            </div>`;

    appEl.innerHTML = windowHtml;

    let time = 0;
    const countDownElement = document.getElementById('countdown');
    setInterval(updateCountdown, 1000);
    function updateCountdown() {
        let minutes = Math.floor(time / 60);
        let seconds = time % 60;
        minutes = minutes < 10 ? '0' + minutes : minutes;
        seconds = seconds < 10 ? '0' + seconds : seconds;
        countDownElement.innerHTML = `${minutes}:${seconds}`;
        time++;
    }

    const buttonRestartGame = document.querySelector('.restart__button');
    buttonRestartGame.addEventListener('click', () => {
        goToPage(START_PAGE);
    });
}
