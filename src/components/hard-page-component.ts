import { START_PAGE } from '../routes';
import { goToPage } from '../script';
import { desk } from './desk';


export function renderHardPageComponent({ appEl }: { appEl: HTMLElement }) {
    let gameCards = desk
        .sort(() => Math.random() - 0.5)
        .slice(-9)
        .join(' ')
        .concat(' ')
        .repeat(2)
        .slice(0, -1)
        .split(' ')
        .sort(() => Math.random() - 0.5);
    console.log(gameCards);

    let isCurrentWindow = false;
    let winnerUser = false;

    // окно с открытыми рубашками через 5 секунд
    function startGamePage () {
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
            </div>
            `;

        appEl.innerHTML = windowHtml;

        const cards = document.querySelectorAll('.memory-card');

        // сравнение карт
        let hasFlippedCard = false;
        let lockBoard = false;
        let firstCard: HTMLElement | null = null;
        let secondCard: HTMLElement | null = null;

        function flipCard(this: HTMLElement | null) {
            if (lockBoard) return;
            if (this === firstCard) return;

            this!.classList.add('flip');

            if (!hasFlippedCard) {
                hasFlippedCard = true;
                firstCard = this;
                return;
            }

            secondCard = this;

            checkForMatch();
        }

        function checkForMatch() {
            if (
                firstCard!.dataset.framework === secondCard!.dataset.framework
            ) {
                disableCards();
                if (
                    Array.from(document.querySelectorAll('.flip')).length ===
                    gameCards.length
                ) {
                    setTimeout(() => {
                        winnerUser = true;
                        isCurrentWindow = !isCurrentWindow;
                        console.log(isCurrentWindow);
                        modalOverlay();
                        resetBoard();
                    }, 500);
                }

                return;
            }

            lossingTheGame();
        }

        function disableCards() {
            firstCard!.removeEventListener('click', flipCard);
            secondCard!.removeEventListener('click', flipCard);

            resetBoard();
        }

        function lossingTheGame() {
            lockBoard = true;

            setTimeout(() => {
                firstCard!.classList.remove('flip');
                secondCard!.classList.remove('flip');
                isCurrentWindow = true;
                winnerUser = false;
                modalOverlay();
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
        const countDownElement = document.getElementById(
            'countdown'
        ) as HTMLElement;
        setInterval(updateCountdown, 1000);
        function updateCountdown() {
            let minutes: string | number = Math.floor(time / 60);
            let seconds: string | number = time % 60;
            minutes = minutes < 10 ? '0' + minutes : minutes;
            seconds = seconds < 10 ? '0' + seconds : seconds;
            countDownElement.innerHTML = `${minutes}:${seconds}`;
            time++;
        }

        function modalOverlay() {
            const timerResult = countDownElement.textContent;

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
                </div>
                ${
                    isCurrentWindow
                        ? `
                <!-- модальное окно, которое появится после сбора всех пар -->
                <div id="modal-overlay" class="modal-overlay"></div>
                
                <div class="the-end">
                    <img class="icon-game" src="${
                        winnerUser ? './img/victory.svg' : './img/lossing.svg'
                    }" alt="lossing" />
                    <div class="window__message">Вы ${
                        winnerUser ? 'победили' : 'проиграли'
                    }!</div>
                    <p class="window__timer">Затраченное время</p>
                    <div class="window__time">${timerResult}</div>
                    <div class="game-header__restart">
                        <button class="game__button end">Начать заново</button>
                    </div>
                </div>
                `
                        : ``
                }`;

            appEl.innerHTML = windowHtml;

            if (isCurrentWindow) {
                const restartGame = () => {
                    const buttonRestartGame =
                        document.querySelector('.game__button');
                    console.log(buttonRestartGame);

                    buttonRestartGame!.addEventListener('click', () => {
                        return goToPage(START_PAGE);
                    });
                };
                restartGame();
            } else {
                const restartGame = () => {
                    const buttonRestartGame =
                        document.querySelector('.restart__button');
                    console.log(buttonRestartGame);
                    buttonRestartGame!.addEventListener('click', () => {
                        return goToPage(START_PAGE);
                    });
                };
                restartGame();
            }
        }

        restartGame();
    };

    startGame();
    setTimeout(startGamePage, 5000);

    // окно с закрытыми рубашками
    function startGame() {
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
            </div>
            `;

        appEl.innerHTML = windowHtml;

        const restartGame = () => {
            const buttonRestartGame =
                document.querySelector('.restart__button');
            console.log(buttonRestartGame);
            buttonRestartGame!.addEventListener('click', () => {
                return goToPage(START_PAGE);
            });
        };

        restartGame();
    }

    const restartGame = () => {
        const buttonRestartGame = document.querySelector('.restart__button');
        console.log(buttonRestartGame);
        buttonRestartGame!.addEventListener('click', () => {
            return goToPage(START_PAGE);
        });
    };
}
