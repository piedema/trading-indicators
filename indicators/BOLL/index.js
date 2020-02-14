const roundTo = require('round-to');

module.exports = function(params){

  const periods = params[1];
  const decimals = params[2] || 2;

  const bbs = [];

  const SMA = require('../SMA')(params);
  const SD = require('../SD')(params);

  return {

    update:function(...data){
      const value = data[0];

      const sma = SMA.update(value);
      const sd = SD.update(value);

      const bb = sma && sd ? {
        low:roundTo((sma - (sd * 2)), decimals),
        middle:sma,
        high:roundTo((sma + (sd * 2)), decimals)
      } : false;

      if(bb) bbs.unshift(bb);

      return bbs[0];
    },

    get:function(n = periods){
      return bbs.slice(0, n);
    },

    getLast:function(){
      return bbs[0];
    }

  }

}
