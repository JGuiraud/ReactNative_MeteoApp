var _encodeNumber = require('./encodeNumber');

function _encodeSignedNumber(num) {

  var sgn_num = num << 1;

  if (num < 0) {
    sgn_num = ~sgn_num;
  }

  return _encodeNumber(sgn_num);
}

module.exports = function (points) {
  var i, dlat, dlng;
  var plat = 0;
  var plng = 0;
  var encoded_points = [];

  if (typeof points == 'string') {
    points = points.split('|');
  }

  for (i = 0; i < points.length; i++) {
    var point = points[i].split(',');
    var lat = point[0];
    var lng = point[1];
    var late5 = Math.round(lat * 1e5);
    var lnge5 = Math.round(lng * 1e5);
    dlat = late5 - plat;
    dlng = lnge5 - plng;
    plat = late5;
    plng = lnge5;
    encoded_points.push(_encodeSignedNumber(dlat) + _encodeSignedNumber(dlng));
  }

  return encoded_points.join('');
};