const roundTo = require('round-to')

module.exports = function(options){

  let periods = options.periods;
  let log = options.log || true;
  let decimals = options.decimals || 2;

  const values = [];
  let smas = [];

  if(log) console.log('Indicator Simple Moving Average constructed');

  return {

    update:function(data){
      let value = data.value;
      let sma;
      let response = false;

      values.unshift(value);
      if (values.length > periods) values.pop();

      if(values.length === periods){
        let sum = values.reduce((a, b) => a + b, 0);
        sma = roundTo(sum / periods, decimals);
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
