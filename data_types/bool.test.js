test('Boolean()', () => {
  expect(Boolean(0)).toBeFalsy();
  expect(Boolean(NaN)).toBeFalsy();
  expect(Boolean('')).toBeFalsy();
  expect(Boolean(null)).toBeFalsy();
  expect(Boolean(undefined)).toBeFalsy();

  expect(Boolean(' ')).toBeTruthy();
  expect(Boolean('0')).toBeTruthy();
  expect(Boolean([])).toBeTruthy();
  expect(Boolean({})).toBeTruthy();
});

test('!', () => {
  expect(!!0).toBeFalsy();
  expect(!!NaN).toBeFalsy();
  expect(!!'').toBeFalsy();
  expect(!!null).toBeFalsy();
  expect(!!undefined).toBeFalsy();

  expect(!!' ').toBeTruthy();
  expect(!!'0').toBeTruthy();
  expect(!![]).toBeTruthy();
  expect(!!{}).toBeTruthy();
});