const roundTo = require('round-to')

module.exports = function(params){

  const periods = params[1];
  const decimals = params[2] || 2;

  const values = [];
  const smas = [];

  return {

    update:function(...data){
      const value = data[0];

      values.unshift(value);
      if (values.length > periods) values.pop();

      if(values.length === periods){
        let sum = values.reduce((a, b) => a + b, 0);
        let sma = roundTo(sum / periods, decimals);
        smas.unshift(sma);
      }

      return sma;
    },

    get:function(n = periods){
      return smas.slice(0, n);
    },

    getLast:function(){
      return smas[0];
    }

  }

}
