
/*
1- As a user, I would like to be able to scan an item using barcode so its details can be found from products list (test data).
2 - As a user, I would like to be able to add an item to my basket.
3 - As a user, I would like to be able to see the total price of all items in my basket.
4 - As a user, I would like to be able to remove an item from my basket. 
*/

const {barcodeScanner, basket, addItem} = require('../self-checkout.js')

describe ('self-checkout', () => {
  test('barcode scanner is a function', () => {
    expect(typeof(barcodeScanner)).toBe("function");
  })

  test('when a number is scanned it returns a product', () => {
    expect(barcodeScanner(789)).toBe(7);
  })
})

describe ('basket', () => {
  test('basket is an array', () => {
    expect(Array.isArray(basket)).toBe(true);
  })
})

describe('addItem', () => {
  test("when an item is scanned it's added to the basket", () => {
    expect(basket.length).toBe(0);
    addItem(789);
    expect(basket.length).toBe(1);
  })
})
