const roundTo = require('round-to')

module.exports = function(options){

  let periods = options.periods;
  let log = options.log || true;
  let decimals = options.decimals || 2;

  const values = [];
  let wma = [];

  if(log) console.log('Indicator Weighted Moving Average constructed, parameters:');

  return {

    update:function(data){
      let value = data.value;

      values.unshift(value);
      if (values.length > periods) values.pop();


      

      wma = 0;

      if(values.length < periods) return false;

      for(let i = 0; i < periods; i++){
          wma += values[i] * (periods-i);
      }
      wma /= divisor;

      return roundTo(wma, decimals);
    },

    get:function(n = periods){
      let response = [];
      for(let i = periods - 1; i > 0; i--){
        response.unshift(wma[i]);
      }
      return response;
    },

    getLast:function(){
      return wma[0];
    }

  }

}
