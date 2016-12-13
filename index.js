var loaderUtils = require("loader-utils"),
  path = require("path");

module.exports = function() {};
module.exports.pitch = function(remainingRequest) {
  if(this.cacheable) this.cacheable();
  var query = loaderUtils.parseQuery(this.query);
  return "require(" + loaderUtils.stringifyRequest(this, "!" + path.join(__dirname, "add-styles.js")) + ")( require(" + loaderUtils.stringifyRequest(this, "!!" + remainingRequest) + ") );";
};
