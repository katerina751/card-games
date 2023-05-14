
const levels = [
    {
        name: 1,
        active: false,
    },
    {
        name: 2,
        active: false,
    },
    {
        name: 3,
        active: false,
    },
];


export function renderStartPageComponent({ appEl }) {

    const levelHtml = levels.map((level, index) => {
        return `
            <button data-index="${index}" id="level-button" class="${level.active ? 'window__level-button -active' : 'window__level-button'}">${level.name}</button>`;
    })
        .join("");


    const startWindowHtml = `
        <div class="window center">
            <div class="window__title">Выбери сложность</div>
            <div class="window__level">
                ${levelHtml}
            </div>
            <div>
                <button id="game__button" class="game__button">Старт</button>
            </div>
        </div>`;

    appEl.innerHTML = startWindowHtml;


    // Выбираем сложность уровня


    const levelSelection = () => {
        const buttonLevelElements = document.querySelectorAll(".window__level-button");

        for (const buttonLevelElement of buttonLevelElements) {
            buttonLevelElement.addEventListener("click", (event) => {
                event.stopPropagation();
                const index = buttonLevelElement.dataset.index;

                if (levels[index].active === false) {
                    levels[index].active = true;
                } else if (levels[index].active === true) {
                    levels[index].active = false;
                }
                renderStartPageComponent({ appEl });
            });
        }
    };

    // блокировка кнопки
    // const validateInput = () => {
    //     if (nameInputElement.value === "" || textInputElement.value === "") {
    //         buttonElement.disabled = true;
    //     } else {
    //         buttonElement.disabled = false;
    //     }
    // };
    // const buttonBlock = () => {
    //     validateInput();
    //     document.querySelectorAll("#name-input,#text-input").forEach((el) => {
    //         el.addEventListener("input", () => {
    //             validateInput();
    //         });
    //     });
    // };

    // buttonBlock();


    // // Кнопка Старт
    // const buttonElement = document.getElementById("game-button");

    // buttonElement.addEventListener("click", () => {
    //     // если не выбран уровень сложности, не пускаем дальше
    //     if (addFormName.value === "" || addFormText.value === "") {
    //         return;
    //     }
    //     // вводим переменную с необходимым формато даты
    //     const options = {
    //         year: '2-digit',
    //         month: 'numeric',
    //         day: 'numeric',
    //         timezone: 'UTC',
    //         hour: 'numeric',
    //         minute: '2-digit'
    //     };
    //     let now = new Date().toLocaleString('ru-RU', options);

    //     //   пополняем список после заполнения полей ввода

    //     comments.push({
    //         name: addFormName.value,
    //         time: now,
    //         text: addFormText.value,
    //         counter: 0,
    //         isLiked: false
    //     });

    //     initLikeButtons();
    //     renderComments();
    //     //   очищать поля ввода после добавления списка
    //     addFormName.value = "";
    //     addFormText.value = "";
    // });



    levelSelection();


};
