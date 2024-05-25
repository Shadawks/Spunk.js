// ==UserScript==
// @name         Spunk.js
// @namespace    mailto:retr0x1de@protonmail.ch
// @version      0.0.4
// @description  Get links to download games from Steam store page from recommended websites on /r/Piracy subreddit.
// @author       Kynda
// @match        https://store.steampowered.com/app/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=steampowered.com
// @grant        none
// @run-at       document-end
// @downloadURL  https://github.com/Shadawks/Spunk.js/raw/main/spunk.user.js
// @updateURL    https://github.com/Shadawks/Spunk.js/raw/main/spunk.user.js
// ==/UserScript==

(function() {
    'use strict';

    const gameTitle = document.querySelector('.apphub_AppName').textContent
    const encodedGameTitle = encodeURI(gameTitle.replace(/[^a-zA-Z0-9 ]/g, ''));
    const sitesList = [
        {
            name: 'SteamRIP',
            url:  `https://steamrip.com/?s=${encodedGameTitle}`,
        },
        {
            name: 'OnlineFix',
            url:  `https://online-fix.me/index.php?do=search&subaction=search&story=${encodedGameTitle}`,
        },
        {
            name: 'FitGirl',
            url:  `https://fitgirl-repacks.site/?s=${encodedGameTitle}`,
        },
        {
            name: 'DODI',
            url:  `https://dodi-repacks.site/?s=${encodedGameTitle}`,
        },
        {
            name: 'GLOAD',
            url:  `https://gload.to/?s=${encodedGameTitle}`,
        },
        {
            name: 'GOG',
            url:  `https://www.gog-games.to/search/${encodedGameTitle}`,
        },
        {
            name: 'CrackStatus',
            url:  `https://crackstatus.net/tracker.php?nm=${encodedGameTitle}`,
        },
        {
            name: 'RuTracker',
            url:  `https://rutracker.org/forum/tracker.php?nm=${encodedGameTitle}`,
        },
        {
            name: '1337x',
            url:  `https://1337x.to/sort-category-search/${encodedGameTitle}/Games/seeders/desc/1/`,
        },
    ];

    const areaPurchase = document.querySelector('.game_area_purchase');
    const div = createDomElement('div', { className: 'game_area_purchase_game' });
    const h1 = createDomElement('h1', { textContent: `Download ${gameTitle}`, style: { marginBottom: '10px' } });

    div.appendChild(h1);
    areaPurchase.parentNode.insertBefore(div, areaPurchase);

    sitesList.forEach(site => {
        const a = createDomElement('a', { href: site.url, className: 'btnv6_blue_hoverfade btn_medium', style: { marginRight: '10px', marginBottom: '10px' }, target: '_blank' });
        const span = createDomElement('span', { textContent: site.name });

        a.appendChild(span);
        div.appendChild(a);
    });

    function createDomElement(tag, options) {
        const element = document.createElement(tag);
    
        Object.keys(options).forEach(key => {
            if (key === 'style') {
                Object.assign(element.style, options[key]);
            } else {
                element[key] = options[key];
            }
        });
        return element;
    }
})();
