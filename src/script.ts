import { renderGamePageComponent } from './modules/game-page-component';
import { renderStartPageComponent } from './modules/start-page-component';
import {
    START_PAGE, //начальная страница
    GAME_PAGE, //игра
} from './routes';

export let page: string;

/**
 * Включает страницу приложения
 * с нее начинается работа приложения
 */
export const goToPage = (newPage: string) => {
    if ([START_PAGE, GAME_PAGE].includes(newPage)) {
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

    if (page === GAME_PAGE) {
        return renderGamePageComponent({
            appEl,
        });
    }
};

// вызов-функция
goToPage(START_PAGE);

console.log('It works!');
