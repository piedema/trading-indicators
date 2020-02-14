const roundTo = require('round-to');

module.exports = function(params){

  const periods = params[1];
  const decimals = params[2] || 2;

  const values = [];
  const changes = [];

  const rss = [];

  return {

    update:function(...data){
      const value = data[0];

      values.unshift(value);
      if (values.length > periods) values.pop();

      let change = value - values[1];
      changes.unshift(change);
      if (changes.length > periods) changes.pop();

      const ups = changes.filter(change => change >= 0);
      const downsNegativ = changes.filter(change => change <= 0);
      const downs = downsNegativ.map(x => Math.abs(x));

      avgUp = ups.reduce((a, b) => a + b, 0) / ups.length;
      avgDown = downs.reduce((a, b) => a + b, 0) / downs.length;

      const rs = roundTo(avgUp / avgDown, decimals);

      if(rs) rss.unshift(rs);

      return rss[0];
    },

    get:function(n = periods){
      return rss.slice(0, n);
    },

    getLast:function(){
      return rss[0];
    }

  }

}
