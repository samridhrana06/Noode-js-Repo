// Problem 3: Objects and Properties
// You're creating an online store. Define a JavaScript 
// object named "product" with the following
// properties:
// - name (string)
// - price (number)
// - inStock (boolean)
// Create at least three products using your object 
// template and display their details using
// console.log

const product = {
    name : '',
    price : 0,
    inStock : false
};

const product1 = Object.create(product);
product1.name = 'Laptop';
product1.price = 699;
product1.inStock=true;

const product2 = Object.create(product);
product2.name = 'Headphone';
product2.price = 248;
product2.inStock = true;

const product3 = Object.create(product);
product3.name='keyboard';
product3.price= 199;
product3.inStock= false;


console.log("Product 1:");
console.log("Name:", product1.name);
console.log("Price:", product1.price);
console.log("In Stock:", product1.inStock);

console.log("\nProduct 2:");
console.log("Name:", product2.name);
console.log("Price:", product2.price);
console.log("In Stock:", product2.inStock);

console.log("\nProduct 3:");
console.log("Name:", product3.name);
console.log("Price:", product3.price);
console.log("In Stock:", product3.inStock);

