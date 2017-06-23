
module.exports = function () {

  return {
    encode_polylines: true,
    google_client_id: null,
    google_channel: null,
    key: null,
    proxy: null,
    secure: false,
    stagger_time: 200,
    set google_private_key(value) {
      if (typeof value !== 'undefined' && value !== null) {
        this._googlePrivateKey = value.replace(/-/g, '+').replace(/_/g, '/');
        this._googlePrivateKey = new Buffer(this._googlePrivateKey, 'base64');
      } else {
        this._googlePrivateKey = null;
      }
    },
    get google_private_key() {
      return this._googlePrivateKey || null;
    }
  };
};