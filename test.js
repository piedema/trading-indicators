let SMA = require('./trading-indicators')({name:'SMA', periods:5});
SMA.update({ value:90.91 });
SMA.update({ value:90.83 });
SMA.update({ value:90.28 });
SMA.update({ value:90.36 });
SMA.update({ value:90.90 });
SMA.update({ value:91.04 });
SMA.update({ value:90.66 });
SMA.update({ value:90.78 });
console.log(SMA.get()); // should be [ 90.75, 90.65, 90.68, 90.66 ]
console.log(SMA.getLast()); // should be 90.75
