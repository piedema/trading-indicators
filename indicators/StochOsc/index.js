const roundTo = require('round-to');

module.exports = function(params){

  const periods = params[1];
  const decimals = params[2] || 2;
  const fast_periods = params[3] || 3;

  const stochoscs = [];
  const highs = [];
  const lows = [];

  const SMA = require('../SMA')([null, fast_periods, decimals]);

  return {

    update:function(...data){
      const value = data[0];

      highs.unshift(value.high);
      if(highs.length > periods) highs.pop();
      lows.unshift(value.low);
      if(lows.length > periods) lows.pop();

      const highest_high = Math.max(...highs);
      const lowest_low = Math.max(...lows);

      let slow_stochosc = value.close && highest_high && lowest_low ? roundTo((value.close - lowest_low) / (highest_high - lowest_low), decimals) : false;
      let fast_stochosc = SMA.update(slow_stochosc);
      if(slow_stochosc && fast_stochosc) stochoscs.unshift({ slow_stochosc:slow_stochosc, fast_stochosc:fast_stochosc });

      return stochoscs[0];
    },

    get:function(n = periods){
      return stochoscs.slice(0, n);
    },

    getLast:function(){
      return stochoscs[0];
    }

  }

}
