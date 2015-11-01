var export_csv = require('export-csv')
  , import_csv = require('import-csv');

module.exports = function (input, output, item_cb, encode, is_header, finish_cb) {
  var _encode = 'gbk';
  var _is_header = false;
  var _finish_cb = function () {
    console.log('export ' + input + ' to ' + output + ' complete. ');
  }
  var _item_cb = function (item) {
    return item;
  }

  if (encode) {
    _encode = encode;
  }

  if (is_header) {
    _is_header = is_header;
  }

  if (finish_cb) {
    _finish_cb = finish_cb;
  }

  if (item_cb) {
    _item_cb = item_cb;
  }

  import_csv(input, function (err, data_arr) {
    _export_csv(data_arr, output, _item_cb, _finish_cb, _is_header);
  }, _encode)

  return this;
}

function _export_csv(data_arr, file, item_cb, finish_cb, is_header) {
  export_csv(data_arr, file, item_cb, finish_cb, is_header)
}

module.exports.export_csv = require('export-csv');

module.exports.import_csv = require('import-csv');
