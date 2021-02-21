// ==UserScript==
// @name        Google English Search Button
// @namespace   https://github.com/taiyoslime
// @version     0.1.0
// @description Google 検索で英語のページを容易に検索できるようにするためのbuttonを作成する (inspired by https://github.com/hideo54/userscripts/blob/master/english-search-button.user.js)
// @author      taiyoslime
// @match       https://www.google.com/*
// @match       https://www.google.co.jp/*
// @grant       none
// ==/UserScript==

(() => {
    "use strict";
    let url = new URL(location.href);
    let params = url.searchParams;
    const button = document.createElement('a');
    let buttonText = "";
    if (params.get("lr") === "lang_en") {
        params.set("lr", "lang_ja");
        buttonText = "日本語で検索";
    } else {
        params.set("lr", "lang_en");
        buttonText = "英語で検索";
    }
    button.innerText = buttonText;
    button.href = url;
    button.style = `
        display: inline-block;
        padding: 16px 12px 12px 10px;
        color: #5f6368;
        text-decoration: none;
    `;
    document.querySelector("#hdtb-msb > div:last-child").prepend(button)
})();