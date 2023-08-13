// object settings

let course = { 

    title : "course 1" , // title為名稱（key)
    
    lessons : 16,
    
    creator:"Emma",
    
    length: 63,
    
    isFree: true, // Boolean 布林 資料型態
    
    tags: ["html","css"], //  Object裡可有Array 資料型態

    racing:3,

    certification:{

        haveCertification: true,
        isFree:false
    }
        
    }


// Before

// console.log(course.title)
// console.log(course.lessons)
// console.log(course.creator,course.length,course.isFree,course.tags)



// ES6

const {title,lessons,...rest} = course

console.log(title)
console.log(lessons)
console.log(rest)



// ES6 將Object作為新變數的值

const {creator:author} = course

// console.log(author)


// ES6 新增key及value 

const {racing = 5} = course

console.log(racing) // 如原本的Object有此key及value，則會log out原本此key的value



// object中的object Destructuring Nested Objects

// before

// console.log(course.certification.haveCertification)
// console.log(course.certification.isFree)

// ES6

const {certification:{haveCertification},certification:{isFree}} = course

console.log(haveCertification)
console.log(isFree)