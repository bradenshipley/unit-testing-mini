const fn = require('./functions.js')

test('returnTwo() should return 2', () => {
  expect(fn.returnTwo()).toEqual(2)
})
test('greeting should show the name entered', () => {
  expect(fn.greeting('James')).toEqual('Hello, James')
  expect(fn.greeting('Jill')).toEqual('Hello, Jill')
})

describe('Math functions', () => {
  test('add should add both numbers', () => {
    expect(fn.add(1, 2)).toEqual(3)
    expect(fn.add(5, 9)).toEqual(14)
  })
  test('multiply should multiply both numbers', () => {
    expect(fn.multiply(1, 2)).toEqual(2)
    expect(fn.multiply(5, 9)).toEqual(45)
  })
  test('divide should divide both numbers', () => {
    expect(fn.divide(2, 1)).toEqual(2)
    expect(fn.divide(4, 2)).toEqual(2)
  })
  test('subtract should subtract both numbers', () => {
    expect(fn.subtract(1, 2)).toEqual(-1)
    expect(fn.subtract(5, 9)).toEqual(-4)
  })
})
