// Array settings

let fruitProducts = [ "watermelons",

"oranges",

"mangos",

"apples"]



// before 

// console.log(fruitProducts[0]) // 水果攤的產品清單的第一個項目

// console.log(fruitProducts[1]) // 水果攤的產品清單的第二個項目

// console.log(fruitProducts[2],fruitProducts[3]) // 水果攤的產品清單剩下的項目




// ES6

const [item1 /*item1變數的值為「水果攤的產品清單的第一個項目」*/, item2 /*item2變數的值為「水果攤的產品清單的第二個項目」*/,...rest /*rest變數的值為「水果攤的產品清單剩下的項目」*/] = fruitProducts

console.log(item1)
console.log(item2)
console.log(rest)