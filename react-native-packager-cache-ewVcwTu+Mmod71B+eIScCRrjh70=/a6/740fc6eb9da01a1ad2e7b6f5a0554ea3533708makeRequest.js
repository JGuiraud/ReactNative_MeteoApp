
var qs = require('qs');
var crypto = require('crypto');

function _buildUrl(config, args, path) {

  var qsConfig = { indices: false, arrayFormat: 'repeat' };

  if (config.google_client_id && config.google_private_key) {
    args.client = config.google_client_id;

    var query = qs.stringify(args, qsConfig).split('');
    for (var i = 0; i < query.length; ++i) {
      if (query[i] === "'") query[i] = escape(query[i]);
    }
    query = query.join('');

    path = path + "?" + query;

    if (config.google_channel) {
      path += "&channel=" + config.google_channel;
    }

    var signer = crypto.createHmac('sha1', config.google_private_key);

    var signature = signer.update(path).digest('base64');
    signature = signature.replace(/\+/g, '-').replace(/\//g, '_');
    path += "&signature=" + signature;
    return path;
  } else {
    return path + "?" + qs.stringify(args, qsConfig);
  }
}

module.exports = function (request, config, path, args, callback, requestMaxLength, encoding) {
  requestMaxLength = requestMaxLength || -1;

  var secure = config.secure;

  if (config.key != null) {
    secure = true;
    args.key = config.key;
  }

  path = _buildUrl(config, args, path);

  if (requestMaxLength != -1 && path.length > requestMaxLength) {
    error = new Error('Request too long for google to handle (' + requestMaxLength + ' characters).');
    if (typeof callback === 'function') {
      return callback(error);
    }
    throw error;
  }

  var options = {
    uri: (secure ? 'https' : 'http') + '://maps.googleapis.com' + path
  };

  if (encoding) options.encoding = encoding;
  if (config.proxy) options.proxy = config.proxy;

  if (typeof callback !== 'function') {
    return options.uri;
  }

  request(options, function (error, res, data) {
    if (error) {
      return callback(error);
    }
    if (res.statusCode === 200) {
      return callback(null, data);
    }
    error = new Error(data);
    error.code = res.statusCode;

    return callback(error, data);
  });
};