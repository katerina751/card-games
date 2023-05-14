import { renderStartPageComponent } from "./components/start-page-component.js";
import {
    START_PAGE, //начальная страница
    END_PAGE, //финальная страница
    EASY_PAGE, //легкий уровеень
    MEDIUM_PAGE, //легкий уровеень
    HARD_PAGE, //легкий уровеень
} from "./routes.js";

export let page = null;

/**
 * Включает страницу приложения 
 * с нее начинается работа приложения
 */
export const goToPage = (newPage) => {
    if (
        [
            START_PAGE,
            END_PAGE,
            EASY_PAGE,
            MEDIUM_PAGE,
            HARD_PAGE,
        ].includes(newPage)
    ) {
        if (newPage === START_PAGE) {
            renderApp();
        }

        // if (newPage === USER_POSTS_PAGE) {
        //     // TODO: реализовать получение постов юзера из API
        //     console.log("Открываю страницу пользователя: ", data.userId);
        //     page = LOADING_PAGE;
        //     renderApp();

        //     // posts = [];
        //     return getUserPosts({ token: getToken(), userId: data.userId })
        //         .then((newPosts) => {
        //             page = USER_POSTS_PAGE;
        //             posts = newPosts;
        //             renderApp();
        //         })
        //         .catch((error) => {
        //             console.error(error);
        //             goToPage(USER_POSTS_PAGE);
        //         });
        // }

        page = newPage;
        renderApp();

        return;
    }

    throw new Error("страницы не существует");
};

// отрисовывает посты
const renderApp = () => {
    const appEl = document.getElementById("app");
    // if (page === LOADING_PAGE) {
    //     return renderLoadingPageComponent({
    //         appEl,
    //         user,
    //         goToPage,
    //     });
    // }

    // if (page === AUTH_PAGE) {
    //     return renderAuthPageComponent({
    //         appEl,
    //         setUser: (newUser) => {
    //             user = newUser;
    //             saveUserToLocalStorage(user);
    //             goToPage(POSTS_PAGE);
    //         },
    //         user,
    //         goToPage,
    //     });
    // }

    // if (page === ADD_POSTS_PAGE) {
    //     return renderAddPostPageComponent({
    //         appEl, posts
    //     });
    // }

    if (page === START_PAGE) {
        return renderStartPageComponent({
            appEl,
        });
    }

    // if (page === USER_POSTS_PAGE) {
    //     return renderUserPostsPageComponent({
    //         appEl, posts
    //     })
    // }
};

// вызов-функция
goToPage(START_PAGE);


console.log("It works!");