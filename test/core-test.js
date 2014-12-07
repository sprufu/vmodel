describe('REGEXPS test', function() {
	it('url regexp', function() {
		assert(REGEXPS.url.test('http://www.baidu.com'), 'http协议');
		assert(REGEXPS.url.test('https://encrypted.google.com/'), 'https协议');
		assert(REGEXPS.url.test('www.google.com') == false, '没带协议类型');
		assert(REGEXPS.url.test('http://test_cd.com') == false, '域名不能带下划线');
	});

	it('email regexp', function() {
		assert(REGEXPS.email.test('sprufu@163.com'), 'sprufu@163.com');
		assert(REGEXPS.email.test('j.code@qq.com'), 'j.code@qq.com');
		assert(REGEXPS.email.test('27301490@qq.com'), '27301490@qq.com');
		assert(REGEXPS.email.test('abc@de_dt.cn') == false, '域名不能带下划线');
	});

	it('number regexp', function() {
		assert(REGEXPS.number.test('12345'), '12345');
		assert(REGEXPS.number.test('12.345'), '12.345');
		assert(REGEXPS.number.test('-234'), '-234');
		assert(REGEXPS.number.test('-0.24'), '-0.25');
		assert(REGEXPS.number.test('.34'), '.34');
		assert(REGEXPS.number.test('-.34'), '-.34');
		assert(REGEXPS.number.test('3-4') == false, '3-4!');
		assert(REGEXPS.number.test('3.4.4') == false, '3.4.4!');
	})
})
