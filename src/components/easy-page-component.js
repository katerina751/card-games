export function renderEasyPageComponent({ appEl }) {
    const easyWindowHtml = `
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
                <div class="game__card">
                    <img src="./img/shirt.svg" alt="рубашка" />
                </div>
            </div>`;

    appEl.innerHTML = easyWindowHtml;

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
}
