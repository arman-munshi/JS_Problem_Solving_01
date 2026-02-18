const numbers = [300, 100, 700, 400];

const products = [
    { name: "asif", price: 300 },
    { name: "aksh", price: 100 },
    { name: "nafis", price: 700 },
    { name: "rakib", price: 400 },


]

function getShoppingTotal(products) {
    let total = 0;
    for (const product of products) {
        total = total + product.price;
        
    }
    return total;
}

const total = getShoppingTotal(products);
console.log(total);

//----------------------------------------------

//shoppingCart related problem

const products2 = [
    { name: "shaban", price: 300, quantity:3 },
    { name: "shamppo", price: 100, quantity:5 },
    { name: "condisonar", price: 700, quantity:6 },
    { name: "oil", price: 400, quantity:2 },

]

function cartTotal(products2) {
    let total = 0;
    for (const product of products2) {
        const thisProductCost = product.price * product.quantity;
        total = total + thisProductCost;
        
    }
    return total
}

const shoppingCost = cartTotal(products2);
console.log(shoppingCost);

