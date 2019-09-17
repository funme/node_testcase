test('there is no I in team', () => {
  expect('team').not.toMatch(/I/);
});

test('but there is a "stop" in Christoph', () => {
  expect('Christoph').toMatch(/stop/);
});

test('10 + null + true + [] + undefined + "字符串" + null + [] + 10 + false', () => {
  const x = 10 + null + true + [] + undefined + "字符串" + null + [] + 10 + false;
  const y = '11undefined' + "字符串" + null + [] + 10 + false;
  const value = '11undefined字符串null10false';
  expect(10 + null + true).toBe(11);
  expect(11 + []).toBe('11'); // [] => ''
  expect('11' + undefined).toBe('11undefined');
  expect(y).toBe(value);
  expect(x).toBe(value);
});