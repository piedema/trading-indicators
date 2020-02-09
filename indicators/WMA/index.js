const roundTo = require('round-to')

module.exports = function(options){

  let periods = options.periods;
  let log = options.log || true;
  let decimals = options.decimals || 2;

  const values = [];
  let wmas = [];

  let divisor = 0;
  for(let i = periods; i > 0; i--){
    divisor += i;
  }

  if(log) console.log('Indicator Weighted Moving Average constructed');

  return {

    update:function(data){
      let value = data.value;
      let wma;
      let response = false;

      values.unshift(value);
      if (values.length > periods) values.pop();

      if(values.length === periods){
        let sum = 0;
        for(let i = 0; i < periods; i++){
          sum += values[i] * (periods-i);
        }

        wma = roundTo(sum / divisor, decimals);
        wmas.unshift(wma);
      }

      return wma;
    },

    get:function(n = periods){
      return wmas.slice(0, n);
    },

    getLast:function(){
      return wmas[0];
    }

  }

}