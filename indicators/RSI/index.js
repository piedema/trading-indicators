const roundTo = require('round-to');

module.exports = function(params){

  const periods = params[1];
  const decimals = params[2] || 2;

  const rsis = [];

  const RS = require('../RS')(params);

  return {

    update:function(...data){
      const value = data[0];

      rs = RS.update(value);

      const rsi = roundTo(100 - (100 / (1 + rs)), decimals);

      if(rsi) rsis.unshift(rsi);

      return rsis[0];
    },

    get:function(n = periods){
      return rsis.slice(0, n);
    },

    getLast:function(){
      return rsis[0];
    }

  }

}
