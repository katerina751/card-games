import { renderEasyPageComponent } from './components/easy-page-component.js';
import { renderHardPageComponent } from './components/hard-page-component.js';
import { renderMediumPageComponent } from './components/medium-page-component.js';
import { renderStartPageComponent } from './components/start-page-component.js';
import {
    START_PAGE, //начальная страница
    END_PAGE, //финальная страница
    EASY_PAGE, //легкий уровеень
    MEDIUM_PAGE, //легкий уровеень
    HARD_PAGE, //легкий уровеень
} from './routes.js';


export let page = null;

/**
 * Включает страницу приложения
 * с нее начинается работа приложения
 */
export const goToPage = (newPage) => {
    if (
        [START_PAGE, END_PAGE, EASY_PAGE, MEDIUM_PAGE, HARD_PAGE].includes(
            newPage
        )
    ) {
        if (newPage === START_PAGE) {
            renderApp();
        }

        page = newPage;
        renderApp();

        return;
    }

    throw new Error('страницы не существует');
};

// отрисовывает посты
const renderApp = () => {
    const appEl = document.getElementById('app');

    if (page === START_PAGE) {
        return renderStartPageComponent({
            appEl,
        });
    }

    if (page === EASY_PAGE) {
        return renderEasyPageComponent({
            appEl,
        });
    }

    if (page === MEDIUM_PAGE) {
        return renderMediumPageComponent({
            appEl,
        });
    }

    if (page === HARD_PAGE) {
        return renderHardPageComponent({
            appEl,
        });
    }
};

// вызов-функция
goToPage(START_PAGE);

console.log('It works!');
