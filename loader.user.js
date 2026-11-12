// ==UserScript==
// @name         Drift Boss GitHub Mod Loader
// @namespace    http://tampermonkey.net/
// @version      11.12.2026.2.1.0.1
// @description  HAPPEH. Loads the bricks.
// @match        *://*.coolmathgames.com/*
// @grant        GM_xmlhttpRequest
// @connect      raw.githubusercontent.com
// ==/UserScript==

(function() {
    'use strict';

const BASE_URL = 'https://raw.githubusercontent.com/QWERTYCONSOLE/Coolmath-drift-boss-script/refs/heads/main/';

    const MODS = {
        'infinite-coins.js': true,
        'no-drift.js': true,
        'heavy-brick.js': true
    };

    console.log("🚀 Initializing GitHub Mod Loader...");

    for (const [file, isEnabled] of Object.entries(MODS)) {
        if (isEnabled) {
            GM_xmlhttpRequest({
                method: "GET",
                url: BASE_URL + file + '?t=' + Date.now(),
                onload: function(response) {
                    if (response.status === 200) {
                        const script = document.createElement('script');
                        script.textContent = response.responseText;
                        document.documentElement.appendChild(script);
                        console.log(`✅ Successfully injected: ${file}`);
                    } else {
                        console.error(`❌ Failed to load: ${file} (Status: ${response.status})`);
                    }
                }
            });
        }
    }
})();
