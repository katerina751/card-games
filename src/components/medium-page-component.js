import { END_PAGE, START_PAGE } from '../routes.js';
import { goToPage } from '../script.js';
import { desk } from './desk.js';

export function renderMediumPageComponent({ appEl }) {

    let gameCards = desk
        .sort(() => Math.random() - 0.5)
        .slice(-6)
        .join(' ')
        .concat(' ')
        .repeat(2)
        .slice(0, -1)
        .split(' ')
        .sort(() => Math.random() - 0.5);
    console.log(gameCards);

    const startGamePage = () => {
        const cardHTML = gameCards
            .map((card, index) => {
                return `
                <div class="memory-card" data-framework="${card}">
                    <img class="front-face" src="./img/${card}.svg" alt="React" />
                    <img class="back-face" data-index=${index} src="./img/shirt.svg" alt="Рубашка" />
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

        const cards = document.querySelectorAll('.memory-card');

        // сравнение карт
        let hasFlippedCard = false;
        let lockBoard = false;
        let firstCard, secondCard;

        function flipCard() {
            if (lockBoard) return;
            if (this === firstCard) return;

            this.classList.add('flip');

            if (!hasFlippedCard) {
                hasFlippedCard = true;
                firstCard = this;
                return;
            }

            secondCard = this;

            checkForMatch();
        }

        function checkForMatch() {
            if (firstCard.dataset.framework === secondCard.dataset.framework) {
                disableCards();
                if (
                    Array.from(document.querySelectorAll('.flip')).length ===
                    gameCards.length
                ) {
                    setTimeout(() => {
                        // goToPage(END_PAGE);
                        alert('Вы победили!');
                        goToPage(START_PAGE);
                        resetBoard();
                    }, 500);
                }

                return;
            }

            lossingTheGame();
        }

        function disableCards() {
            firstCard.removeEventListener('click', flipCard);
            secondCard.removeEventListener('click', flipCard);

            resetBoard();
        }

        function lossingTheGame() {
            lockBoard = true;

            setTimeout(() => {
                firstCard.classList.remove('flip');
                secondCard.classList.remove('flip');
                // goToPage(END_PAGE);
                alert('Вы проиграли!');
                goToPage(START_PAGE);
                resetBoard();
            }, 500);
        }

        function resetBoard() {
            [hasFlippedCard, lockBoard] = [false, false];
            [firstCard, secondCard] = [null, null];
        }

        cards.forEach((card) => card.addEventListener('click', flipCard));

        // таймер игры
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

        restartGame();
    };

    const cardHTML = gameCards
        .map((card, index) => {
            return `
                <img class="game__card_start" data-index=${index} src="./img/${card}.svg" alt="рубашка" />
                `;
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

    const restartGame = () => {
        const buttonRestartGame = document.querySelector('.restart__button');
        buttonRestartGame.addEventListener('click', () => {
            goToPage(START_PAGE);
        });
    };

    restartGame();

    setTimeout(startGamePage, 3000);
}