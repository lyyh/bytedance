## 宏任务
- setTimeout、setInterval、setImmediate
- postMessage

## 微任务
- process.nextTick、promise.then、Object.observe、MutationObserver
- async await 之后的内容是以微任务来执行的

## 执行顺序
先执行主执行栈中的代码，再执行微任务队列，执行完之后再检查宏任务是否到达时间