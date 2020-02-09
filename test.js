
let testvalues = [ 90.91, 90.83, 90.28, 90.36, 90.90, 91.04, 90.66, 90.78 ];

let SMA = require('./trading-indicators')('SMA', 5);
for(let i = 0; i < testvalues.length; i++) SMA.update({ value:testvalues[i] });
console.log('SMAs: ', SMA.get()); // should be [ 90.75, 90.65, 90.68, 90.66 ]
console.log('SMA: ', SMA.getLast()); // should be 90.75

let WMA = require('./trading-indicators')('WMA', 5);
for(let i = 0; i < testvalues.length; i++) WMA.update({ value:testvalues[i] });
console.log('WMAs: ', WMA.get()); // should be [ 90.79, 90.74, 90.75, 90.62 ]
console.log('WMA: ', WMA.getLast()); // should be 90.79
