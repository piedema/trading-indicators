const roundTo = require('round-to')

module.exports = function(params){

  const periods = params[1];
  const decimals = params[2] || 2;

  const values = [];
  const wmas = [];

  let divisor = 0;
  for(let i = periods; i > 0; i--){
    divisor += i;
  }

  return {

    update:function(...data){
      let value = data[0];

      values.unshift(value);
      if (values.length > periods) values.pop();

      if(values.length === periods){
        let sum = 0;
        for(let i = 0; i < periods; i++){
          sum += values[i] * (periods-i);
        }

        let wma = roundTo(sum / divisor, decimals);
        wmas.unshift(wma);
      }

      return wmas[0];
    },

    get:function(n = periods){
      return wmas.slice(0, n);
    },

    getLast:function(){
      return wmas[0];
    }

  }

}
