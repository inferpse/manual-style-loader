var css = [], addChunkCallback, addGroupCallback, timer;

module.exports = function(cssCode) {
  var chunk = cssCode.toString();
  css.push(chunk);
  if (addChunkCallback) {
    addChunkCallback(chunk);
  }
  if (addGroupCallback) {
    clearTimeout(timer);
    timer = setTimeout(addGroupCallback, 0);
  }
}

module.exports.getData = function() {
  return css;
}

module.exports.onAddChunk = function(callback) {
  addChunkCallback = callback;
}

module.exports.onChunksAdded = function(callback) {
  addGroupCallback = callback;
}
