// ==UserScript==
// @name        YouTube Hide Watched Videos
// @namespace   https://github.com/taiyoslime
// @version     0.1.0
// @description YouTubeで視聴済み動画を目立たなくさせる
// @author      taiyoslime
// @match       https://www.youtube.com/*
// @grant       none
// @updateURL   https://github.com/taiyoslime/userscripts/raw/main/youtube-make-watched-videos-inconspicuous.user.js
// @downloadURL	https://github.com/taiyoslime/userscripts/raw/main/youtube-make-watched-videos-inconspicuous.user.js
// ==/UserScript==

(() => {
    "use strict";

    const observer = new MutationObserver((_) => {
        let videos = Array.from(document.querySelectorAll("ytd-video-renderer, ytd-grid-video-renderer, ytd-compact-video-renderer, ytd-rich-item-renderer"));
        for (let video of videos) {
            if (!!video.querySelector('#progress')) {
                video.style.opacity = 0.2;
            }
        }
    });

    observer.observe(document.querySelector("ytd-app"), {
        childList: true,
        subtree: true,
    });

})();