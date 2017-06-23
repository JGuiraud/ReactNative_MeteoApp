

module.exports = function (styles) {

  if (!Array.isArray(styles)) {
    throw new Error('styles must be an array');
  }

  return styles.map(function (style) {

    var i,
        len,
        s = [],
        keys = ['feature', 'element'];

    for (i = 0, len = keys.length; i < len; i++) {
      if (style[keys[i]] != null) {
        s.push(keys[i] + ':' + style[keys[i]]);
      }
    }

    if (style.rules != null) {
      var k;
      for (k in style.rules) {
        s.push(k + ':' + style.rules[k]);
      }
    }

    return s.join('|');
  });
};