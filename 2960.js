/**
 * @param {number[]} batteryPercentages
 * @return {number}
 */
var countTestedDevices = function(batteryPercentages) {
    let count = 0
    for (let val of batteryPercentages) {
        if (val - count > 0) {
            count++
        }
    }
    return count
};