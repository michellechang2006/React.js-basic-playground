export default function(){
    console.log("Default")
}


function hello()  {
    console.log("Hello!")
}

export function hi()  {
    console.log("Hi!")
}

var str = "strings"

export var math = 1+1

export {hello,str}
