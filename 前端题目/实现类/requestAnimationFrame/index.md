## 与 setTimeout setInterval 的区别
setTimeout setInterval 会把任务加入到宏任务队列等待执行，根据运行机制特性，只有当JS全局执行栈空闲时才会执行宏队列的任务，那么动画代码就要等到前面的任务都完成才能执行。

requestAnimationFrame 浏览器会新开一个线程，会把每一帧中的所有绘制操作集中起来，根据浏览器的刷新间隔的回调流中完成绘制。

## JS的执行顺序
全局执行栈 》 微队列 》 宏队列
微队列 > requestAnimationFrame > 宏队列

## requestAnimationFrame
1. requestAnimationFrame会把每一帧中的所有DOM操作集中起来，在一次重绘或回流中就完成，并且重绘或回流的时间间隔紧紧跟随浏览器的刷新频率
2. 在隐藏或不可见的元素中，requestAnimationFrame将不会进行重绘或回流，这当然就意味着更少的CPU、GPU和内存使用量
3. requestAnimationFrame是由浏览器专门为动画提供的API，在运行时浏览器会自动优化方法的调用，并且如果页面不是激活状态下的话，动画会自动暂停，有效节省了CPU开销