const restapi = require('./myrestapi.js')

describe('test hr zone calculation', () => {
  test('test - zone number is correct?', () => {
    expect(restapi.calculateHR(30,180).zone).toBe(5);
  });
  test('test - hr ขอบเขตล่างถูกต้องหรือไม่', () => {
  expect (restapi.calculateHR (30,180) .lb) .toBe (171);
});
test('test - hr ขอบเขตบนถูกต้องหรือไม่', () => {
expect (restapi.calculateHR (30,180) .ub) .toBe (190);
});
});
