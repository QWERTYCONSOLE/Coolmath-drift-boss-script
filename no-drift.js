(function() {
    'use strict';
    console.log("🚫 Drift Blocker (Space/Click) Loaded.");
    
    window.addEventListener('keydown', function(e) {
        if (e.keyCode === 32) {
            e.stopImmediatePropagation();
            e.preventDefault();
        }
    }, true);

    window.addEventListener('mousedown', function(e) {
        e.stopImmediatePropagation();
        e.preventDefault();
    }, true);

    window.addEventListener('touchstart', function(e) {
        e.stopImmediatePropagation();
        e.preventDefault();
    }, true);
})();
