(function() {
    'use strict';
    console.log("🪙 Infinite Coins Injector loaded...");
    
    const MAX_64 = 9007199254740991;
    const KEY = 'mjs-drift-boss-game-v1.0.1-dailyreward';

    let maxedSave = {
        "sound": 0.7, "music": 0.3, "score": MAX_64, "hasShownTutorial": true,
        "collectedCoin": MAX_64, "cars": [0,1,2,3,4,5,6,7], "currentCar": 7,
        "currentTip": 0, "booster1": MAX_64, "booster2": MAX_64, "booster3": MAX_64,
        "ko": 0, "hasShownBoosterTutorial": true
    };
    localStorage.setItem(KEY, JSON.stringify(maxedSave));

    setInterval(function() {
        try {
            let saveData = JSON.parse(localStorage.getItem(KEY));
            if (saveData && (saveData.booster1 < MAX_64 || saveData.booster2 < MAX_64 || saveData.booster3 < MAX_64)) {
                saveData.booster1 = saveData.booster2 = saveData.booster3 = MAX_64;
                localStorage.setItem(KEY, JSON.stringify(saveData));
            }
        } catch (e) {}
    }, 100);
})();
