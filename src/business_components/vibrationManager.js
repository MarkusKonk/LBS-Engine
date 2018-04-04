'use strict';

/**
 * Get the current location from the GPS sensor
 * Return promise with the gps data
 */
function startVibrating() {
    navigator.vibrate(3000);
}

module.exports = {
    vibrate: startVibrating
}