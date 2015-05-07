var bboxify = require('geojson-extent').bboxify;

module.exports = function(geojson) {
  return bboxify(geojson);
}