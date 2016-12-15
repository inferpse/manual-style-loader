var css = [];

module.exports = function(cssCode) {
  css.push(cssCode);
}

module.exports.getData = function() {
  return css;
}
