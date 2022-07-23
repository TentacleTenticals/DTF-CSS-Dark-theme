// ==UserScript==
// @name         DTF comments panel scrolling (for DTF CSS theme)
// @namespace    https://github.com/TentacleTenticals/DTF-CSS-Dark-theme
// @version      1.0
// @description  Делает возможным скролл мышью в панели комментариев, если скроллбар включён.
// @author       Tentacle Tenticals
// @match        https://dtf.ru/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=dtf.ru
// @grant        none
// @license MIT
// ==/UserScript==
/* jshint esversion:8 */

(function() {
    'use strict';

window.addEventListener('wheel', commentScroll, true);
function commentScroll(e){
    //console.log(e.composedPath())
    if(e.composedPath().includes(document.querySelector(`.layout__right-column > div > div > div+div > div`))){
        if(e.deltaY >= 100){
            document.querySelector(`.layout__right-column > div > div > div+div > div`).scrollTop += 100
        }else
        if(e.deltaY <= -100){
            document.querySelector(`.layout__right-column > div > div > div+div > div`).scrollTop -= 100
        }
    }
}

})();
