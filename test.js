
let testvalues = [ 90.12, 90.65, 90.65, 90.45, 90.91, 90.83, 90.28, 90.36, 90.90, 91.04, 90.66, 90.78 ];

let SMA = require('./trading-indicators')('SMA', 3);
for(let i = 0; i < testvalues.length; i++) SMA.update(testvalues[i]);
console.log('SMAs: ', SMA.get()); // should be [ 90.83, 90.87, 90.77 ]
console.log('SMA: ', SMA.getLast()); // should be 90.83

let WMA = require('./trading-indicators')('WMA', 3);
for(let i = 0; i < testvalues.length; i++) WMA.update(testvalues[i]);
console.log('WMAs: ', WMA.get()); // should be [ 90.78, 90.83, 90.88 ]
console.log('WMA: ', WMA.getLast()); // should be 90.78

let EMA = require('./trading-indicators')('EMA', 3);
for(let i = 0; i < testvalues.length; i++) EMA.update(testvalues[i]);
console.log('EMAs: ', EMA.get()); // should be [ 90.79, 90.74, 90.75, 90.62 ]
console.log('EMA: ', EMA.getLast()); // should be 90.79

let SD = require('./trading-indicators')('SD', 3);
for(let i = 0; i < testvalues.length; i++) SD.update(testvalues[i]);
console.log('SDs: ', SD.get()); // should be [ 00.16, 00.16, 00.29 ]
console.log('SD: ', SD.getLast()); // should be 00.16
