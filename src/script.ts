import { renderEasyPageComponent } from './components/easy-page-component';
import { renderEndPageComponent } from './components/end-page-component';
import { renderHardPageComponent } from './components/hard-page-component';
import { renderMediumPageComponent } from './components/medium-page-component';
import { renderStartPageComponent } from './components/start-page-component';
import {
    START_PAGE, //начальная страница
    END_PAGE, //финальная страница
    EASY_PAGE, //легкий уровеень
    MEDIUM_PAGE, //легкий уровеень
    HARD_PAGE, //легкий уровеень
} from './routes';

export let page: string;

/**
 * Включает страницу приложения
 * с нее начинается работа приложения
 */
export const goToPage = (newPage: string) => {
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
    const appEl = document.getElementById('app') as HTMLElement;

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

    if (page === END_PAGE) {
        return renderEndPageComponent({
            appEl,
        });
    }
};

// вызов-функция
goToPage(START_PAGE);

console.log('It works!');
