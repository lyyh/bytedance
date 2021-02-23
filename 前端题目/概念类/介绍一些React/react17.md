## 新模式
concurrent mode.它是一类功能的合集（如fiber、schduler、lane、suspense），其目的是为了提高应用的响应速度，使应用不在那么卡顿，其核心是实现了一套异步可中断、带优先级的更新。

## 时间片
用requestIdleCallback给每一帧分配一个时间片，当更新任务在时间片内未能执行完时，就要暂定他的执行，把执行权交给浏览器去绘制。