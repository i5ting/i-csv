# i-csv


Artwork by [i5ting](http://www.github.com/i5ting/).

[![Deps](https://david-dm.org/i5ting/i-csv.svg)](https://david-dm.org/i5ting/i-csv) 
[![npm](https://img.shields.io/npm/v/i-csv.svg)](https://www.npmjs.com/package/i-csv)
[![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://raw.githubusercontent.com/i5ting/i-csv/master/LICENSE.md)
[![npm](https://img.shields.io/npm/dt/i-csv.svg)](https://www.npmjs.com/package/i-csv)


## Install

    [sudo]npm install i-csv

## Usage 

```
var i_csv = require('i_csv')
```

### way 1

最简单用法

```
i_csv('test.csv','out.csv')
```

### way 2

将test.csv导出的时候，提供转换数据处理

下面演示的例子即让所有列的值都加上 '-1111'

```
i_csv('test.csv', 'out1.csv', function (item) {
	for (var key in item) {
		if (item.hasOwnProperty(key)) {
			var element = item[key];
			item[key] = element + '-1111'
		}
	}

	return item;
});

```


### way 3

第四个参数是读取test.csv的字符集（默认是gbk）

```
i_csv('test.csv', 'out2.csv', function (item) {
	for (var key in item) {
		if (item.hasOwnProperty(key)) {
			var element = item[key];
			item[key] = element + '-1111'
		}
	}

	return item;
},'utf-8');
```


### way 4

第五个参数，导出的时候是否带有header

```
i_csv('test.csv', 'out4.csv', function (item) {
	for (var key in item) {
		if (item.hasOwnProperty(key)) {
			var element = item[key];
			item[key] = element + '-1111'
		}
	}

	return item;
},'utf-8', true);
```

### way 5

第六个参数是完成的回调函数

```
i_csv('test.csv', 'out5.csv', function (item) {
	for (var key in item) {
		if (item.hasOwnProperty(key)) {
			var element = item[key];
			item[key] = element + '-1111'
		}
	}

	return item;
},'utf-8', true, function () {
	console.log('..........[I AM FINISH]...........')
});

```

## Contributing

1. Fork it
2. Create your feature branch (`git checkout -b my-new-feature`)
3. Commit your changes (`git commit -am 'Add some feature'`)
4. Push to the branch (`git push origin my-new-feature`)
5. Create new Pull Request

## 版本历史

- v1.0.0 初始化版本

## 欢迎fork和反馈

- write by `i5ting` i5ting@126.com

如有建议或意见，请在issue提问或邮件

## License

this repo is released under the [MIT
License](http://www.opensource.org/licenses/MIT).
