(()=>{"use strict";const e=function(e){return e.deck.sort((function(){return Math.random()-.5})).slice(-9)};var n,a=["6spades","7spades","8spades","9spades","10spades","Jspades","Qspades","Kspades","Aspades","6clubs","7clubs","8clubs","9clubs","10clubs","Jclubs","Qclubs","Kclubs","Aclubs","6hearts","7hearts","8hearts","9hearts","10hearts","Jhearts","Qhearts","Khearts","Ahearts","6diamonds","7diamonds","8diamonds","9diamonds","10diamonds","Jdiamonds","Qdiamonds","Kdiamonds","Adiamonds"];function t(e){var a=e.appEl;a.innerHTML='\n        <div class="window center">\n            <div class="window__title">Выбери сложность</div>\n            <div class="window__level">\n                <div class="window__level-button">\n                    <input id="radio-1" type="radio" name="radio" value="1" checked>\n                    <label for="radio-1">1</label>\n                </div>\n                <div class="window__level-button">\n                    <input id="radio-2" type="radio" name="radio" value="2">\n                    <label for="radio-2">2</label>\n                </div>\n                <div class="window__level-button">\n                    <input id="radio-3" type="radio" name="radio" value="3">\n                    <label for="radio-3">3</label>\n                </div>\n            </div>\n            <div>\n                <button id="game__button" class="game__button">Старт</button>\n            </div>\n        </div>',document.getElementById("game__button").addEventListener("click",(function(){!function(){for(var e=document.getElementsByName("radio"),t=0;t<e.length;t++)e[t].checked&&(console.log("Выбран "+Number(t+1)+" уровень"),0===t?(n=3,i({appEl:a})):1===t?(n=6,i({appEl:a})):2===t&&(n=9,i({appEl:a})))}()}))}function i(i){var s=i.appEl,r=e({deck:a}).sort((function(){return Math.random()-.5})).slice(-n).join(" ").concat(" ").repeat(2).slice(0,-1).split(" ").sort((function(){return Math.random()-.5}));console.log(r);var d,c,o=!1,l=!1;d=r.map((function(e,n){return'\n                    <img class="game__card_start" data-index='.concat(n,' src="./img/').concat(e,'.svg" alt="рубашка" />\n                    ')})).join(""),c='\n                <div class="game-header">\n                    <div class="game-header__timer">\n                        <div class="game-header__timer_header">\n                            <p class="game-header__timer_header-item">min</p>\n                            <p class="game-header__timer_header-item">sec</p>\n                        </div>\n                        <div class="game-header__timer_time" id="countdown">00:00</div>\n                    </div>\n                    <div class="game-header__restart">\n                        <button class="restart__button">Начать заново</button>\n                    </div>\n                </div>\n                <div class="game__field">\n                    '.concat(d,"\n                </div>\n                "),s.innerHTML=c,document.querySelector(".restart__button").addEventListener("click",(function(){return t({appEl:s})})),setTimeout((function(){var e=r.map((function(e,n){return'\n                <div class="memory-card" data-framework="'.concat(e,'">\n                    <img class="front-face" src="./img/').concat(e,'.svg" alt="React" />\n                    <img class="back-face" data-index=').concat(n,' src="./img/shirt.svg" alt="Рубашка" />\n                </div>')})).join(""),n='\n            <div class="game-header">\n                <div class="game-header__timer">\n                    <div class="game-header__timer_header">\n                        <p class="game-header__timer_header-item">min</p>\n                        <p class="game-header__timer_header-item">sec</p>\n                    </div>\n                    <div class="game-header__timer_time" id="countdown">00:00</div>\n                </div>\n                <div class="game-header__restart">\n                    <button class="restart__button">Начать заново</button>\n                </div>\n            </div>\n            <div class="game__field">\n                '.concat(e,"\n            </div>\n            ");s.innerHTML=n;var a=document.querySelectorAll(".memory-card"),i=!1,d=!1,c=null,u=null;function v(){if(!d&&this!==c){if(this.classList.add("flip"),!i)return i=!0,void(c=this);u=this,function(){if(c.dataset.framework===u.dataset.framework)return c.removeEventListener("click",v),u.removeEventListener("click",v),_(),void(Array.from(document.querySelectorAll(".flip")).length===r.length&&setTimeout((function(){l=!0,o=!o,h(),_()}),500));d=!0,setTimeout((function(){c.classList.remove("flip"),u.classList.remove("flip"),o=!0,l=!1,h(),_()}),500)}()}}function _(){var e,n;i=(e=[!1,!1])[0],d=e[1],c=(n=[null,null])[0],u=n[1]}a.forEach((function(e){return e.addEventListener("click",v)}));var g=0,p=document.getElementById("countdown");function h(){var e=p.textContent,n=r.map((function(e,n){return'\n                    <img class="game__card_start" data-index='.concat(n,' src="./img/').concat(e,'.svg" alt="рубашка" />\n                    ')})).join(""),a='\n                <div class="game-header">\n                    <div class="game-header__timer">\n                        <div class="game-header__timer_header">\n                            <p class="game-header__timer_header-item">min</p>\n                            <p class="game-header__timer_header-item">sec</p>\n                        </div>\n                        <div class="game-header__timer_time" id="countdown">00:00</div>\n                    </div>\n                    <div class="game-header__restart">\n                        <button class="restart__button">Начать заново</button>\n                    </div>\n                </div>\n                <div class="game__field">\n                    '.concat(n,"\n                </div>\n                ").concat(o?'\n                \x3c!-- модальное окно, которое появится после сбора всех пар --\x3e\n                <div id="modal-overlay" class="modal-overlay"></div>\n                \n                <div class="the-end">\n                    <img class="icon-game" src="'.concat(l?"./img/victory.svg":"./img/lossing.svg",'" alt="lossing" />\n                    <div class="window__message">Вы ').concat(l?"победили":"проиграли",'!</div>\n                    <p class="window__timer">Затраченное время</p>\n                    <div class="window__time">').concat(e,'</div>\n                    <div class="game-header__restart">\n                        <button class="game__button end">Начать заново</button>\n                    </div>\n                </div>\n                '):"");s.innerHTML=a,o?document.querySelector(".game__button").addEventListener("click",(function(){return t({appEl:s})})):document.querySelector(".restart__button").addEventListener("click",(function(){return t({appEl:s})}))}setInterval((function(){var e=Math.floor(g/60),n=g%60;e=e<10?"0"+e:e,n=n<10?"0"+n:n,p.innerHTML="".concat(e,":").concat(n),g++}),1e3),m()}),5e3);var m=function(){document.querySelector(".restart__button").addEventListener("click",(function(){return t({appEl:s})}))}}var s,r="game",d="start",c=function(){var e=document.getElementById("app");return s===d?t({appEl:e}):s===r?i({appEl:e}):void 0};!function(e){if([d,r].includes(e))return e===d&&c(),s=e,void c();throw new Error("страницы не существует")}(d),console.log("It works!")})();