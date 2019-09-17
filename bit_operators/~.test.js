/**
 * [Tilde or the Floor? Practical use for JavaScript bitwise operators. (#1) | rocha.la | JavaScript and my other hobbies](http://rocha.la/JavaScript-bitwise-operators-in-practice)
 *
 * 按位取反 ~
 * 特点:
 *     ~ -1 的结果为 0, 其他数值皆不为 0, n => -(n+1)
 *     ~~ 效果等同于
 *          n > 0 => Math.floor
 *          n < 0 => Math.ceil
 */
test('~ bit operator with integers', () => {
  expect(~ -1).toBe(0);
  const num = Math.floor(Math.random() * 100);
  expect(~ num).not.toBe(0);
});

test('~~ -1.12312 to equal -1', () => {
  const v = -1.12312;
  expect(~~ v).toBe(Math.ceil(v));
});

test('~~ -1.52312 to equal -1', () => {
  const v = -1.52312;
  expect(~~ v).toBe(Math.ceil(v));
});

test('~~ 1.12312 to equal 1', () => {
  const v = 1.12312;
  expect(~~ v).toBe(Math.floor(v));
});

test('~~ 1.52312 to equal 1', () => {
  const v = 1.52312;
  expect(~~ v).toBe(Math.floor(v));
});