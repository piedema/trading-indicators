const roundTo = require('round-to');

module.exports = function(params){

  const periods = params[1];
  const decimals = params[2] || 8;
  const ema1_periods = params[3] || 12;
  const ema2_periods = params[4] || 26;
  const ema3_periods = params[5] || 9;

  const macds = [];

  const EMA1 = require('../EMA')([null, ema1_periods, decimals]);
  const EMA2 = require('../EMA')([null, ema2_periods, decimals]);
  const EMA3 = require('../EMA')([null, ema3_periods, decimals]);

  return {

    update:function(...data){
      const value = data[0];

      const ema1 = EMA1.update(value);
      const ema2 = EMA2.update(value);

      let MACDLine;
      if(ema1 && ema2) MACDLine = roundTo(ema1 - ema2, decimals);

      let ema3;
      if(MACDLine) ema3 = EMA3.update(MACDLine);

      let SignalLine;
      if(ema3) SignalLine = ema3;

      const macd = MACDLine && SignalLine ? {
        MACDLine:MACDLine,
        SignalLine:SignalLine,
        MACDHistogram:roundTo(MACDLine - SignalLine, decimals)
      } : false;

      if(macd) macds.unshift(macd);

      return macds[0];
    },

    get:function(n = periods){
      return macds.slice(0, n);
    },

    getLast:function(){
      return macds[0];
    }

  }

}
