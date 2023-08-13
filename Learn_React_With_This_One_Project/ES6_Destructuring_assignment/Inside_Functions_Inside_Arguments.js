// Object settings
let course = { 

    title : "course 1" , // title為名稱（key)
    
    lessons : 16,
    
    creator:"Emma",
    
    length: 63,
    
    isFree: true, // Boolean 布林 資料型態

    racing : 3,
    
    tags: ["html","css"], //  Object裡可有Array 資料型態

    certification:{

        haveCertification: true,
        isFree:false
    }
        
    }


// React.js 常常用到
function printCourse({title,lessons,racing = 5}){
    console.log(`The course is "${title}". It has ${lessons} lessons. The Racing is ${racing}`) // 模板字串 記得要用反單引號 
}

printCourse(course)