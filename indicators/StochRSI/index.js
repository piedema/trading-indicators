const roundTo = require('round-to');

module.exports = function(params){

  const periods = params[1] || 14;
  const decimals = params[2] || 2;

  const rsis = [];
  const stochrsis = [];

  const RSI = require('../RSI')(params);

  return {

    update:function(...data){
      const value = data[0];

      rsis.unshift(RSI.update(value));
      if(rsis.length > periods) rsis.pop();

      const maxRSI = Math.max(...rsis);
      const minRSI = Math.min(...rsis);

      const stochrsi = roundTo((rsis[0] - minRSI) / (maxRSI - minRSI), decimals);

      if(stochrsi) stochrsis.unshift(stochrsi);

      return stochrsis[0];
    },

    get:function(n = periods){
      return stochrsis.slice(0, n);
    },

    getLast:function(){
      return stochrsis[0];
    }

  }

}
