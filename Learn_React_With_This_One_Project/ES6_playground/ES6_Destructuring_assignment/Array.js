let fruitProducts = [ "watermelons",

"oranges",

"mangos",

"apples"]

// before 

console.log(fruitProducts[0]) // 水果攤的產品清單的第一個項目

console.log(fruitProducts[1]) // 水果攤的產品清單的第二個項目

console.log(fruitProducts[2]) // 水果攤的產品清單的第三個項目

console.log(fruitProducts[3]) // 水果攤的產品清單的第四個項目


const [item1/*水果攤的產品清單的第一個項目*/, item2/*水果攤的產品清單的第二個項目*/] = fruitProducts

console.log(item1,item2)