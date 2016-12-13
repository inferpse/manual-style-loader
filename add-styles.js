var css = '';

module.exports = function(cssCode) {
  css += cssCode;
}

module.exports.getData = function() {
  return css;
}
