import { renderEasyPageComponent } from './game-page-component';
export let n: number;

export function renderStartPageComponent({ appEl }: { appEl: HTMLElement }) {
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
        const buttonElement = document.getElementById(
            'game__button'
        ) as HTMLElement;

        buttonElement!.addEventListener('click', () => {
            function levels() {
                let level = document.getElementsByName('radio');
                for (var i = 0; i < level.length; i++) {
                    if ((level[i] as HTMLInputElement).checked) {
                        console.log('Выбран ' + Number(i + 1) + ' уровень');
                        if (i === 0) {
                            n = 3;
                            renderEasyPageComponent({ appEl });
                        } else if (i === 1) {
                            n = 6;
                            renderEasyPageComponent({ appEl });
                        } else if (i === 2) {
                            n = 9;
                            renderEasyPageComponent({ appEl });
                        }
                    }
                }
            }

            levels();
        });
    }

    levelSelection();
}
