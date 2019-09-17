test('zero', () => {
  const z = 0;
  expect(z).not.toBeNull();
  expect(z).toBeDefined();
  expect(z).not.toBeUndefined();
  expect(z).not.toBeTruthy();
  expect(z).toBeFalsy();
});

test('two plus two', () => {
  const value = 2 + 2;
  expect(value).toBeGreaterThan(3);
  expect(value).toBeGreaterThanOrEqual(3.5);
  expect(value).toBeLessThan(5);
  expect(value).toBeLessThanOrEqual(4.5);

  // toBe and toEqual are equivalent for numbers
  expect(value).toBe(4);
  expect(value).toEqual(4);
});

test('adding floating point numbers', () => {
  const value = 0.1 + 0.2;
  //expect(value).toBe(0.3); This won't work because of rounding error
  expect(value).toBeCloseTo(0.3); // This works.
});

test('NaN number', () => {
  const n = NaN;
  const z = 0;
  const sn = '0';
  const ss = 'a';
  const se = '';
  expect(n).toBeNaN();
  expect(z).not.toBeNaN();
  expect(Number(sn)).not.toBeNaN();
  expect(Number(ss)).toBeNaN();
  expect(Number(se)).toBe(0);
});

test('isNaN()', () => {
  const n = NaN;
  const z = 0;
  const sn = '0';
  const ss = 'a';
  expect(isNaN(n)).toBeTruthy();
  expect(isNaN(z)).toBeFalsy();
  expect(isNaN(Number(sn))).toBeFalsy();
  expect(isNaN(Number(ss))).toBeTruthy();
});

/**
 * Number([number|string|bool|object|undefined|null])
 * 字符串中包含任意一个非有效数字字符,第一个点除外,结果都是NaN
 * TODO 多个点正则
 * /^.?[\d]+/ => number
 * /[^\d\.]/ => NaN
 * '' => 0
 *
 * true => 1
 * false => 0
 *
 * null => 0
 * undefined => NaN
 *
 * 引用数据类型转换为数字,会先调用数据的 toString 方法
 * {} => ({}).toString() '[object Object]'
 *    => NaN
 * {a:1} => ({a:1}).toString() '[object Object]'
 *       => NaN
 * [] => [].toString() ''
 *    => 0
 * [12] => [12].toString() '12'
 *      => 12
 * [12,23] => [12,23].toString() '12,23'
 *         => NaN
 */
test('Number()', () => {
  // number
  expect(Number(1)).toBe(1);
  expect(Number(1.2)).toBe(1.2);

  // string
  expect(Number('1')).toBe(1);
  expect(Number('1.')).toBe(1);
  expect(Number('1.2')).toBe(1.2);
  expect(Number('12px')).toBeNaN();
  expect(Number('12.5px')).toBeNaN();
  expect(Number('1.2.3')).toBeNaN();
  expect(Number('.')).toBeNaN();
  expect(Number('')).toBe(0);

  // bool
  expect(Number(true)).toBe(1);
  expect(Number(false)).toBe(0);

  expect(Number(null)).toBe(0);
  expect(Number(undefined)).toBeNaN();

  // object
  expect(Number({})).toBeNaN();
  expect(Number({a:1})).toBeNaN();
  expect(Number([])).toBe(0);
  expect(Number([12])).toBe(12);
  expect(Number([12,23])).toBeNaN();
});

/**
 * parseInt/parseFloat([val],[进制])
 * 字符串,从左到右查找有效数字字符,直到遇到非有效数字字符后停止查找
 */
test('parseInt()', () => {
  // number
  expect(parseInt(1)).toBe(1);
  expect(parseInt(1.2)).toBe(1);

  // string
  expect(parseInt('1')).toBe(1);
  expect(parseInt('1.')).toBe(1);
  expect(parseInt('1.2')).toBe(1);
  expect(parseInt('12px')).toBe(12);
  expect(parseInt('12.5px')).toBe(12);
  expect(parseInt('width:12.5px')).toBeNaN();
  expect(parseInt('1.2.3')).toBe(1);
  expect(parseInt('.')).toBeNaN();
  expect(parseInt('')).toBeNaN();

  // bool
  expect(parseInt(true)).toBeNaN();
  expect(parseInt(false)).toBeNaN();

  expect(parseInt(null)).toBeNaN();
  expect(parseInt(undefined)).toBeNaN();

  // object
  expect(parseInt({})).toBeNaN();
  expect(parseInt({a:1})).toBeNaN();
  expect(parseInt([])).toBeNaN();
  expect(parseInt([12])).toBe(12);
  expect(parseInt([12,23])).toBe(12);
});