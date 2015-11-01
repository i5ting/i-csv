var i_csv = require('.')

i_csv('test.csv', 'out5.csv', function (item) {
	for (var key in item) {
		if (item.hasOwnProperty(key)) {
			var element = item[key];
			item[key] = element + '-1111'
		}
	}

	return item;
}, 'utf-8', true, function () {
	console.log('..........[I AM FINISH]...........')
});
