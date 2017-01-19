var css = [], addChunkCallback;

module.exports = function(cssCode) {
  var chunk = cssCode.toString();
  css.push(chunk);
  if (addChunkCallback) {
    addChunkCallback(chunk);
  }
}

module.exports.getData = function() {
  return css;
}

module.exports.onAddChunk = function(callback) {
  addChunkCallback = callback;
}
