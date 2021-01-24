// ==UserScript==
// @name        Twitter Disable Trends
// @namespace   https://github.com/taiyoslime
// @version     0.1.0
// @description Twitterのトレンド表示を消す
// @author      taiyoslime
// @match       https://twitter.com/*
// @grant       none
// ==/UserScript==

(function () {
    'use strict';

    const observer = new MutationObserver(_ => {
        let element = document.querySelector('[aria-label="タイムライン: トレンド"]');
        if (!element) return;
        element = [...Array(4)].reduce(((e, _) => e.parentNode), element);
        element.remove();
    });

    observer.observe(document.getElementById('react-root'), { childList: true, subtree: true });
})();