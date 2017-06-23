var _encodePolyline = require('./encodePolylines');

module.exports = function (paths, encodePolylines) {

  if (!Array.isArray(paths)) {
    throw new Error('paths must be an array');
  }

  return paths.map(function (path) {

    var i,
        len,
        p = [],
        keys = ['weight', 'color', 'fillcolor', 'geodisc'];

    for (i = 0, len = keys.length; i < len; i++) {
      if (path[keys[i]] != null) {
        p.push(keys[i] + ':' + path[keys[i]]);
      }
    }

    if (!Array.isArray(path.points)) {
      throw new Error('Each path must have an array of points');
    } else {
      if (encodePolylines === true) {
        p.push('enc:' + _encodePolyline(path['points']));
      } else {
        path['points'].map(function (point) {
          p.push(point);
        });
      }
    }

    return p.join('|');
  }).join('|');
};