module.exports = function(...params){

  let indicator = params[0];

  return require(`./indicators/${indicator}`)(params);

}
