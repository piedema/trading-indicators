const roundTo = require('round-to');

module.exports = function(params){

  let periods = params[1];
  let decimals = params[2] || 2;

  let emas = [];

  const k = roundTo(2/(periods+1), decimals);
  const SMA = require('../SMA')(params);

  return {

    update:function(...data){
      let value = data[0];
      let ema;
      let response = false;

      sma = SMA.update(value);

      ema = sma ? roundTo(value * k + sma * (1 - k), decimals) : false;
      if(ema) emas.unshift(ema);

      return ema;
    },

    get:function(n = periods){
      return emas.slice(0, n);
    },

    getLast:function(){
      return emas[0];
    }

  }

}
