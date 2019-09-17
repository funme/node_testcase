test('undefined', () => {
  let v;
  expect(v).not.toBeNull();
  expect(v).not.toBeDefined();
  expect(v).toBeUndefined();
  expect(v).not.toBeTruthy();
  expect(v).toBeFalsy();
});
