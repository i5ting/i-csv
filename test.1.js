var i_csv = require('.')

i_csv('test.csv', 'out1.csv', function (item) {
	for (var key in item) {
		if (item.hasOwnProperty(key)) {
			var element = item[key];
			item[key] = element + '-1111'
		}
	}

	return item;
});
