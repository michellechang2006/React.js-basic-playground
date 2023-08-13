// object settings

let course1 = { 

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



let course2 = { 

    lessons : 24,
    
    creator:"Jenny",
    
    isFree:false, // Boolean 布林 資料型態
    

        
    }


// combine

const combineCourses = {...course1,...course2}

console.log(combineCourses)