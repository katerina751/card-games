
// const levels = [
//     {
//         name: 1,
//         active: false,
//     },
//     {
//         name: 2,
//         active: false,
//     },
//     {
//         name: 3,
//         active: false,
//     },
// ];


export function renderStartPageComponent({ appEl }) {

    const startWindowHtml = `
        <div class="window center">
            <div class="window__title">Выбери сложность</div>
            <div class="window__level">
                <div class="window__level-button">
                    <input id="radio-1" type="radio" name="radio" value="1" checked>
                    <label for="radio-1">1</label>
                </div>
                <div class="window__level-button">
                    <input id="radio-2" type="radio" name="radio" value="2">
                    <label for="radio-2">2</label>
                </div>
                <div class="window__level-button">
                    <input id="radio-3" type="radio" name="radio" value="3">
                    <label for="radio-3">3</label>
                </div>
            </div>
            <div>
                <button id="game__button" class="game__button">Старт</button>
            </div>
        </div>`;

    appEl.innerHTML = startWindowHtml;

    // Выбираем сложность уровня

    function levelSelection() {
        const buttonElement = document.getElementById("game__button")

        buttonElement.addEventListener("click", () => {
            function levels() {
                let level = document.getElementsByName('radio');
                for (var i = 0; i < level.length; i++) {
                    if (level[i].checked) {
                        console.log('Выбран ' + Number(i + 1) + ' уровень');
                    }
                }
            }

            levels();
        })
    }


    levelSelection();

};
