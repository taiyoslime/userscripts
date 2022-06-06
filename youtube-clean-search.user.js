// ==UserScript==
// @name        YouTube Clean Search
// @namespace   https://github.com/taiyoslime
// @version     0.1.0
// @description YouTubeで検索ワードと関連の薄い検索結果を非表示にする
// @author      taiyoslime
// @match       https://www.youtube.com/results*
// @grant       none
// @updateURL   https://github.com/taiyoslime/userscripts/raw/main/youtube-clean-search.user.js
// @downloadURL	https://github.com/taiyoslime/userscripts/raw/main/youtube-clean-search.user.js
// ==/UserScript==

(() => {
    "use strict";

    const observer = new MutationObserver((_) => {
        if (location.pathname !== "/results") return;
        let elements = Array.from(document.querySelectorAll("ytd-shelf-renderer"));
        for (let element of elements) {
            element.remove();
        }
    });

    observer.observe(document.querySelector("ytd-app"), {
        childList: true,
        subtree: true,
    });

})();