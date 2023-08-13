function subtractAndDivide(a,b){
return [a-b, a/b,a+b]
}

const [subtract,divide, add = "No Adding" /* 如subtractAndDivide函式裡有這個Array，則回傳a+b，但如果沒有，則回傳"No Adding" */] = subtractAndDivide(2,3)

console.log(subtract) // 2 - 3
console.log(divide) // 2 / 3
console.log(add) // 5