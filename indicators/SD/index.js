const roundTo = require('round-to')

module.exports = function(params){

  const periods = params[1];
  const decimals = params[2] || 2;

  const values = [];
  const sds = [];

  return {

    update:function(...data){
      const value = data[0];

      values.unshift(value);
      if (values.length > periods) values.pop();

      if(values.length === periods){
        let mean = values.reduce((a, b) => a + b, 0) / periods;

        let differences = values.map(x => x - mean);

        let variance = differences.map(x => x * x);

        variance = variance.reduce((a, b) => a + b, 0) / periods;

        let sd = roundTo(Math.sqrt(variance), decimals);

        sds.unshift(sd);
      }

      return sds[0];
    },

    get:function(n = periods){
      return sds.slice(0, n);
    },

    getLast:function(){
      return sds[0];
    }

  }

}
