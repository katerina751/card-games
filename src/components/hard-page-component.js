export function renderHardPageComponent({ appEl }) {
    const hardWindowHtml = `
        <div class="game-header">
            <div class="game-header__timer">
                <div class="game-header__timer_header">
                    <p class="game-header__timer_header-item">min</p>
                    <p class="game-header__timer_header-item">sec</p>
                </div>
                <div class="game-header__timer_time" id="timer">00.00</div>
            </div>
            <div class="game-header__restart">
                <button class="restart__button">Начать заново</button>
            </div>
        </div>
        <div class="game__field">
            <div class="game__card">
                <img src="./img/shirt.svg" alt="рубашка" />
            </div>
        </div>`;

    appEl.innerHTML = hardWindowHtml;
}
