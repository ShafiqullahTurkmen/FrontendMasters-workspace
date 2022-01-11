const _ = {};

_.filter = function (arr, cb) {
  const storage = [];
  for (let i = 0; i < arr.length; i++) {
    if (cb(arr[i], i, arr) === true) {
      storage.push(arr[i]);
    }
  }
  return storage;
};


_.filter = function (arr, cb) {
  const storage = [];
  _.each(arr, function (item, i, list) {
    if (cb(item, i, list)) storage.push(item);
  });
  return storage;
};
