## 宏任务和微任务区别
- 宏队列可以有多个，微任务队列只有一个,所以每创建一个新的settimeout都是一个新的宏任务队列，执行完一个宏任务队列后，都会去checkpoint 微任务。
- 一个事件循环后，微任务队列执行完了，再执行宏任务队列
- 一个事件循环中，在执行完一个宏队列之后，就会去check 微任务队列
  
## 宏任务
- script
- setTimeout、setInterval、setImmediate
- postMessage
- I/O
- UI rendering
- 脚本、网路、渲染

## 微任务
- process.nextTick、promise.then、Object.observe、MutationObserver
- async await 之后的内容是以微任务来执行的

## 执行顺序
先执行主执行栈中的代码，再执行微任务队列，执行完之后再检查宏任务是否到达时间

## 线程
- JS引擎线程
- 事件触发线程
- 定时触发器线程
- 异步http请求线程
- GUI渲染线程

## 参考
https://cloud.tencent.com/developer/article/1601176