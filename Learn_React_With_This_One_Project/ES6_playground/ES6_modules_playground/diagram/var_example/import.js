import { apples,bananas,pricing as prices,onsale } from "./export.js";
import milk from "./export.js"

let array = []

array.push(apples,bananas,prices,onsale,milk)


for (let i = 0; i < array.length; i++) {
    let print = array[i];
    console.log(print)
}

