
let testvalues = [ 37, 35, 30, 29, 26, 32, 34, 31, 26, 28,
                   30, 27, 31, 34, 35, 36, 36, 23, 26, 29,
                   24, 21, 22, 25, 27, 28, 30, 34, 32, 20,
                   25, 24, 27, 31, 38, 39, 42, 39, 45, 46 ];

let SMA = require('./trading-indicators')('SMA', 3);
for(let i = 0; i < testvalues.length; i++) SMA.update(testvalues[i]);
console.log('SMA: ', SMA.getLast()); // should be 43.33

let WMA = require('./trading-indicators')('WMA', 3);
for(let i = 0; i < testvalues.length; i++) WMA.update(testvalues[i]);
console.log('WMA: ', WMA.getLast()); // should be 44.5

let EMA = require('./trading-indicators')('EMA', 3);
for(let i = 0; i < testvalues.length; i++) EMA.update(testvalues[i]);
console.log('EMA: ', EMA.getLast()); // should be 44.67

let SD = require('./trading-indicators')('SD', 3);
for(let i = 0; i < testvalues.length; i++) SD.update(testvalues[i]);
console.log('SD: ', SD.getLast()); // should be 3.09

let BOLL = require('./trading-indicators')('BOLL', 3);
for(let i = 0; i < testvalues.length; i++) BOLL.update(testvalues[i]);
console.log('BOLL: ', BOLL.getLast()); // should be { low: 37.15, middle: 43.33, high: 49.51 }

let MACD = require('./trading-indicators')('MACD', 3, 6);
for(let i = 0; i < testvalues.length; i++) MACD.update(testvalues[i]);
console.log('MACD: ', MACD.getLast()); // should be { MACDLine: 3.806267, SignalLine: 1.541184, MACDHistogram: 2.265083 }

let RS = require('./trading-indicators')('RS', 10);
for(let i = 0; i < testvalues.length; i++) RS.update(testvalues[i]);
console.log('RS: ', RS.getLast()); // should be 1.88

let RSI = require('./trading-indicators')('RSI', 10);
for(let i = 0; i < testvalues.length; i++) RSI.update(testvalues[i]);
console.log('RSI: ', RSI.getLast()); // should be 65.28

let StochRSI = require('./trading-indicators')('StochRSI', 14);
for(let i = 0; i < testvalues.length; i++) StochRSI.update(testvalues[i]);
console.log('StochRSI: ', StochRSI.getLast()); // should be 1

let StochOsc = require('./trading-indicators')('StochOsc', 14, 2, 3);
for(let i = 0; i < testvalues.length; i++) StochOsc.update({ close:testvalues[i], high:testvalues[i]+2, low:testvalues[i]-2 });
console.log('StochOsc: ', StochOsc.getLast()); // should be 1
