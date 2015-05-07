var test = require('tape');
var bboxify = require('./');
var polygon = require('turf-polygon');

test('turf-bboxify', function(t){
  var poly = polygon([[[41,8],[41,45],[91,45],[91,8],[41,8]]]);

  var bboxed = bboxify(poly);

  t.deepEqual(bboxed.bbox, [41,8,91,45]);

  t.end();
});
