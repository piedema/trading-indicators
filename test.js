let SMA = require('./trading-indicators')({name:'SMA', periods:5});
SMA.update({ value:90.91 });
SMA.update({ value:90.83 });
SMA.update({ value:90.28 });
SMA.update({ value:90.36 });
SMA.update({ value:90.90 });
SMA.update({ value:91.04 });
SMA.update({ value:90.66 });
SMA.update({ value:90.78 });
console.log('SMAs: ', SMA.get()); // should be [ 90.75, 90.65, 90.68, 90.66 ]
console.log('SMA: ', SMA.getLast()); // should be 90.75

let WMA = require('./trading-indicators')({name:'WMA', periods:5});
WMA.update({ value:90.91 });
WMA.update({ value:90.83 });
WMA.update({ value:90.28 });
WMA.update({ value:90.36 });
WMA.update({ value:90.90 });
WMA.update({ value:91.04 });
WMA.update({ value:90.66 });
WMA.update({ value:90.78 });
console.log('WMAs: ', WMA.get()); // should be [ 90.79, 90.74, 90.75, 90.62 ]
console.log('WMA: ', WMA.getLast()); // should be 90.79
