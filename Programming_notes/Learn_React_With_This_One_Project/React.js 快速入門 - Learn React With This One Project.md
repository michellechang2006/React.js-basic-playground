
# 學習筆記


## [Thinking In React](https://youtu.be/Rh3tobg7hEo?t=165) 


開始學`React.js`前，我們必須培養<u>新的思維</u>。


### 命令式 - imperative


假設，今天我們要自己做一個三明治，我們必須按照食譜的步驟，將所需的食材一步一步地製作出三明治。這就是像是我們平常寫`Javascript`一樣，透過程式碼，「一步步」命令`Javascript`完成我們要的指令（成品）。


### 宣告式 - Declarative


假設，今天我們不用自己去做三明治，直接去商店買。是不是就「不需要按照食譜一步步完成」三明治呢？這正是`Javascript`和`React.js`的差別。我們使用`React.js`開發，並不是思考如何寫程式碼，「一步步」完成我們要的成品（How to do stuff），而是思考我們的最終成品應該長什麼樣子（What's stuff）。


### 🖼️ 圖解


![](https://i.imgur.com/viPuf7M.png)



> [官方 開發者文件](https://react.dev/learn/thinking-in-react)



### 🗂️ Reference


[Buzz Word 1 : Declarative vs. Imperative](https://ithelp.ithome.com.tw/articles/10233761)




## [Todo List Project Setup](https://youtu.be/Rh3tobg7hEo?t=367)


### NPM Install 指令


**事先準備 - 安裝Node.js**

https://nodejs.org/en

在終端機輸入`npm -v` 來確認版本及是否安裝成功。


**NPM Install**


1. 在終端機輸入`npm create vite@latest`後，按下`Enter`鍵執行。如果你也是使用Visual Studio Code編譯器，那麽只要點擊右上角的按鈕，就可以打開終端機了。


![](https://i.imgur.com/ZcEApOE.png)


2. 終端機會跳出一行字`? Project name: › `我們只需輸入`.`即可，這代表待會要安裝的檔案，是安裝在根目錄。輸入完後，一樣按下`Enter`鍵執行。


![](https://i.imgur.com/dlSNKVf.png)


3. 終端機會跳出一行字`? Select a framework: ›`。下面會附上多個選項，我們使用鍵盤的上下鍵來控制，請選擇`React`。


![](https://i.imgur.com/Kcscmzy.png)



4.  終端機會跳出一行字`? Select a variant: › `。一樣下面會附上多個選項。請選擇`JavaScript + SWC`（如果選這個選項安裝失敗，選擇`JavaScript`即可。


5. 按下`Enter`鍵執行後，我們就要來正式安裝了！輸入`npm install`或`npm i`，檔案就安裝好囉～


![](https://i.imgur.com/eycYiOB.png)



**Mac NPM install issue**


如果你是MAC用戶又是第一次安裝NPM。很有可能無法執行第五步驟：


![](https://i.imgur.com/IXztLzX.png)



這時只要在終端機輸入`sudo chown -R 501:20 "/Users/{使用者名稱}/.npm"`，按下`Enter`鍵執行，並輸入登入電腦的密碼，就可以囉～感謝Bing（GPT-4)幫我Google解答🙏🏻



6. 最後輸入`npm run dev`，終端機會跑出一段網址，如果你也是和我用一樣的編譯器，按著`command`鍵不放，點擊網址後，我們就可以即時檢視`React.js`成品囉！



![](https://i.imgur.com/NYAxcou.png)



![](https://i.imgur.com/TKB4fhw.png)



##### 📝 延伸 - NPM 教學


[What is NPM, and why do we need it? | Tutorial for beginners](https://youtu.be/P3aKRdUyr0s)

[IThome 鐵人賽  文章｜｜【D4 - npm 你到底是誰】大家都叫我npm install!! 但這甚麼意思](https://ithelp.ithome.com.tw/articles/10234060)




### [ES6 Modules](https://www.w3schools.com/react/react_es6_modules.asp)


##### **Export**


🧑‍🌾 假設我們是農夫，圖片中的包裹想像成`Modules`(模組)。包裹包含剛採收的香蕉、蘋果及鮮奶。


📦 **急速配送**：鮮奶的保存期限較短，所以需要急速配送。因運送成本較高，物流中心規定每戶每天只能寄<u>一個</u>急速配送包裹。


![](https://i.imgur.com/o2DulHr.png)

我們可以把農場這個地方，想像成一個`export.js`檔案，而農場的包裹想像`export.js`檔案的各個函式。(不一定是`Modules`(模組)函式，只是舉例)


![](https://i.imgur.com/YYosC9x.png)







**程式碼：**


我們可以在函式(變數）前面加上`export`。


```js
export function bananas() { // 一般包裹 - 香蕉

console.log("🍌 香蕉")

}

  

export function apples() { // 一般包裹 - 蘋果

console.log("🍎 蘋果")

}

  
  

export default function() { // 急速配送 - 鮮奶

console.log("🐮 鮮奶")

}
```



或是在所有程式碼的最後，加上`export {(函式/變數名稱1）,(函式/變數名稱2）}`



```js
function bananas() { // 一般包裹 - 香蕉

console.log("🍌 香蕉")

}

  

function apples() { // 一般包裹 - 蘋果


console.log("🍎 蘋果")

}

  
  

export default function() {  // 急速配送 - 鮮奶

console.log("🐮 鮮奶")

}

  

export {bananas,apples}
```


**Default Export v.s. Named Export**


ES6 Modules的`export`分為`Default Export`及`Named Export`，`Default Export`就像「急速配送」一樣，每個要`export`的檔案中，只能有一個`Default Export`，`Default Export`除了有這個特性外，它可以在要`export`的檔案中匿名，在要`import`的檔案中在命名（函式/變數）。



![](https://i.imgur.com/5hGMug1.png)



```js
export function bananas() { // Named Export

console.log("🍌 香蕉")

}

  

export function apples() { // Named Export

console.log("🍎 蘋果")

}

  
  

export default function() { // Default Export

console.log("🐮 鮮奶")

}
```





📦 這樣就成功寄出我們的包裹了！



##### **Import**


👩🏻‍🌾 包裹寄送到商店，並上架商品，這樣我們就賣出我們的農產品啦～



![](https://i.imgur.com/lXxPOfr.png)


我們可以把商店這個地方，想像成一個`import.js`檔案，而農場的包裹想像`import.js`檔案的各個函式。(不一定是`Modules`(模組)函式，只是舉例)


![](https://i.imgur.com/7u9JmGP.png)





**程式碼：**


在所有程式碼的最上方，加上`import { (函式/變數名稱1）,(函式/變數名稱2） } from "(檔案路徑)";`，來匯入`Named Export`的程式碼。加上`import (命名函式/變數名稱） from "(檔案路徑)";`，來匯入`Default Export`的程式碼。



```js
import { bananas,apples } from "./export.js"; // 匯入 bananas() 和 apples() 函式

import milk from "./export.js"; // 到要import的檔案才命名函式

  

bananas() // 回呼 bananas() 函式

apples() // 回呼 apples() 函式

milk() // 回呼 milk() 函式



// log out 

// 🍌 香蕉

// 🍎 蘋果

// 🐮 鮮奶
```




##### 變數的例子


**程式碼：**



```js
// Export

export default "🐮 鮮奶"; // Default Export

  

export var apples = "🍎 蘋果"; // 字串

  

export var bananas = "🍌 香蕉"; // 字串

  

export var pricing = 10 + 20; // 數字

  

export var onsale = false; // 布林
```




```js
// Export

export default "🐮 鮮奶"; // Default Export

  

var apples = "🍎 蘋果"; // 字串

  

var bananas = "🍌 香蕉";  // 字串

  

var pricing = 10 + 20; // 數字

  

var onsale = false; // 布林

  

export {apples,bananas,pricing,onsale} // 匯出這些變數
```




```js
// Import

import { apples,bananas,pricing,onsale } from "./export.js";

import milk from "./export.js"

  

let array = []

  

array.push(apples,bananas,pricing,onsale,milk) // 將這些變數的值放進array陣列

  
  

for (let i = 0; i < array.length; i++) {

let print = array[i];

console.log(print) 

}

// log out 

// 🍎 蘋果

// 🍌 香蕉

// 30

// false

// 🐮 鮮奶
```





##### 如何在`import`檔案中，重新命名`Named Export`


假設，我們重新命名`pricing`為`prices`。我們只需在`pricing`後面加上`as`後，再寫上我們要重新命名的名稱`prices`。



```js
// Import

import { apples,bananas,pricing as prices,onsale } from "./export.js";

import milk from "./export.js"

  

let array = []

  

array.push(apples,bananas,prices,onsale,milk) // 將這些變數的值放進array陣列

  
  

for (let i = 0; i < array.length; i++) {

let print = array[i];

console.log(print) 

}

// log out 

// 🍎 蘋果

// 🍌 香蕉

// 30

// false

// 🐮 鮮奶
```




##### 📝 延伸 - ES6 Modules  教學


[YouTube | | JavaScript ES6 Modules](https://www.youtube.com/watch?v=cRHQNNcYf6s)

[W3School | |  React ES6 Modules](https://www.w3schools.com/react/react_es6_modules.asp)




##### 🗂️ Reference


[完全解析 JavaScript import、export](https://www.casper.tw/development/2020/03/25/import-export/)

[Named Export vs Default Export in ES6](https://medium.com/@etherealm/named-export-vs-default-export-in-es6-affb483a0910)





## JSX


`JSX`是`Javascript`的語法擴充，也是`React.js`官方推薦的語法。`JSX`讓我們可以在`Javascript`裡使用HTML標籤。所以語法基本上和HTML、Javascript沒有什麼差別。但還是語法有些不同的寫法。


>[看更多關於JSX](https://ithelp.ithome.com.tw/articles/10239097)

>[官方 JSX 學習資源](https://react.dev/learn/writing-markup-with-jsx)



**To do list - 程式碼**


從下面的程式碼，可以看出在JSX，`class`要寫成`className`，`label`標籤的`for`要寫成`htmlFor`。


```jsx
// APP.jsx

import "./styles.css"

  

export default function App() {

return (

<form className="new-item-form">

<div className="form-row">

<label htmlFor="item">New Item</label>

<input type="text" id="item"/>

</div>

</form>

)

}
```


>[看更多 JSX 與 HTML 語法的差別](https://www.freecodecamp.org/news/the-react-cheatsheet/)



我們先在一般的HTML檔案中，新增`<div id="root"></div>`，記得`<script type="module" src="/src/main.jsx"></script>`，一定要有`type="module"`。否則無法渲染(執行)。



```html
<!doctype html>

<html lang="en">

<head>

<meta charset="UTF-8" />

<link rel="icon" type="image/svg+xml" href="/vite.svg" />

<meta name="viewport" content="width=device-width, initial-scale=1.0" />

<title>Vite + React</title>

</head>

<body>

<div id="root"></div>

<script type="module" src="/src/main.jsx"></script> 

</body>

</html>
```



```jsx

// main.jsx

import React from 'react'

import ReactDOM from 'react-dom/client'

import App from './App.jsx' // 匯入 Default Export

  
  
  

ReactDOM.createRoot(document.getElementById('root')).render( 
// 把HTML表籤渲染到HTML div "root" 標籤裡

<React.StrictMode>

<App/>

</React.StrictMode>,

)
```



##### 🗂️ Reference


[FreeCodeCamp | | The React Cheatsheet for 2022](https://www.freecodecamp.org/news/the-react-cheatsheet/)

[什麼是 JSX?](https://ithelp.ithome.com.tw/articles/10239097)




### 一個組件(component)，只能有一個HTML元素


每個`React.js`的組件只能有一個父元素。如果在第一層有一個以上的父元素，則無法渲染（執行）。


![](https://i.imgur.com/TwucP2H.png)



![](https://i.imgur.com/0IhFY9s.png)



這時，我們就可以將所有元素包進`Fragment`標籤(`<></>`)裡，`React.js`提供了`Fragment`標籤來可以解決。



```jsx
// App.jsx

import "./styles.css"

  

export default function App() {

return (

<> {/* Fragment 標籤 */} 

<form className="new-item-form">

<div className="form-row">

<label htmlFor="item">New Item</label>

<input type="text" id="item"/>

</div>

<button className="btn">Add</button>

</form>

<h1 className="header">To Do List</h1>

<ul className="list">

<li>

<label>

<input type="checkbox"/>

Item 1

</label>

<button className="btn btn-danger">Delete</button>

</li>

<li>

<label>

<input type="checkbox"/>

Item 2

</label>

<button className="btn btn-danger">Delete</button>

</li>

</ul>

</> /* Fragment 標籤 */

)

}
```



>[官方 開發者 檔案 | | `<Fragment> (<>...</>`)](https://react.dev/reference/react/Fragment)
