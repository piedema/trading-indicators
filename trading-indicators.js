module.exports = function(options){

  let name = options.name;

  return require(`./indicators/${name}`)(options);

}
