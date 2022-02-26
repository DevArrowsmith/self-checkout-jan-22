const orange = {
  barcode: 789,
  price: 7,
 };

 const pineapple = {
  barcode: 5367,
  price: 80,
 };

 const kiwi = {
  barcode: 765,
  price: 25,
 };

 const apple = {
  barcode: 123,
  price: 5,
 };
 
 const banana = {
  barcode: 456,
  price: 6
 };
 
 const catalogue = [
  apple,
  banana,
  orange,
  pineapple,
  kiwi,
];

const basket = [];

const barcodeScanner = function(scannedBarcode){
  return catalogue.find(fruit => fruit.barcode === scannedBarcode).price;
};

const addItem = function(barcode){
  basket.push(barcodeScanner(barcode));
};

module.exports = {barcodeScanner, basket, addItem};
