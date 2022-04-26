// ==UserScript==
// @name        Amazon Exclude Marketplace Products
// @namespace   https://github.com/taiyoslime
// @version     0.1.1
// @description Amazonの商品検索でマーケットプレイス商品を除外する
// @author      taiyoslime
// @match       https://www.amazon.co.jp/s*
// @grant       none
// @updateURL   https://github.com/taiyoslime/userscripts/raw/main/amazon-exclude-marketplace-products.user.js
// @downloadURL	https://github.com/taiyoslime/userscripts/raw/main/amazon-exclude-marketplace-products.user.js
// ==/UserScript==

(() => {
    "use strict";

    const observer = new MutationObserver((_) => {
        if (document.getElementById("marketplaceRefinements") || !document.getElementById("s-refinements")) {
            return ;
        }
        const QVAL = "AN1VRQENFRJN5"
        let url = new URL(location.href);
        let params = url.searchParams;
        let checked;
        const elem = document.createElement('div');
        elem.id = "marketplaceRefinements"
        elem.className = "a-section a-spacing-none";
        if (params.get("emi") === QVAL) {
            checked = true;
            params.delete("emi");
            params.delete("rh");
        } else {
            checked = false;
            params.set("emi", QVAL);
        }
        elem.innerHTML = `
            <ul class="a-unordered-list a-nostyle a-vertical a-spacing-medium">
                <li class="a-spacing-micro">
                    <span class="a-list-item">
                        <a data-routing="" class="a-link-normal s-navigation-item" rel="nofollow" tabindex="-1" href="${url.pathname + url.search}">
                            <div class="a-checkbox a-checkbox-fancy s-navigation-checkbox aok-float-left">
                                <label>
                                    <input type="checkbox" ${checked ? "checked" : ""}>
                                    <i class="a-icon a-icon-checkbox"></i>
                                    <span class="a-label a-checkbox-label"></span>
                                </label>
                            </div>
                            <span class="a-size-base a-color-base" dir="auto">マーケットプレイス製品を除外</span>
                        </a>
                    </span>
                </li>
            </ul>
        `
        document.querySelector("#s-refinements > div").prepend(elem);
    });

    observer.observe(document.querySelector("#search"), {
        childList: true,
        subtree: true,
    });

})();