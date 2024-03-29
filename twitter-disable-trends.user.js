// ==UserScript==
// @name        Twitter Disable Trends
// @namespace   https://github.com/taiyoslime
// @version     0.3.1
// @description Twitterのトレンド表示を消す
// @author      taiyoslime
// @match       https://twitter.com/*
// @grant       none
// @updateURL   https://github.com/taiyoslime/userscripts/raw/main/twitter-disable-trends.user.js
// @downloadURL	https://github.com/taiyoslime/userscripts/raw/main/twitter-disable-trends.user.js
// ==/UserScript==

(() => {
    "use strict";

    const observer = new MutationObserver((_) => {
        const selector = [
            '[aria-label="Timeline: Trending now"]',
            '[aria-label="タイムライン: トレンド"]',
        ];
        let element;
        for (let _selector of selector) {
            element = element || document.querySelector(_selector);
        }
        if (!element) return;
        element = [...Array(3)].reduce((e, _) => e.parentNode, element);
        element.remove();
    });

    observer.observe(document.getElementById("react-root"), {
        childList: true,
        subtree: true,
    });
})();