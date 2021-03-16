## Fiber架构解决什么问题
在Fiber之前，React 的组件更新是同步的，如果更新量过大，会导致主线程被长时间占用，就会阻塞其他任务，造成页面卡顿

## Fiber方式
分片，将一个耗时长的任务分成多个时间片，每执行完一段更新，就把控制权交给React负责任务协调的模块，有没有其他紧急任务要做，如果没有就继续去更新，如果有紧急任务，那就去做紧急任务。
简单的来说，一次更新过程会被分成多个小的片段完成，优先级低的任务可能会被优先级高的任务打断，优先级高的任务执行完之后，优先级低的任务就可能会被打断从头再来。

## 带来的影响
1.reconciliation phase 和 commit phase两个阶段，reconciliation phase中的声明周期可能会被打断，所以尽量在其中不要放有副作用的代码


## 双缓冲技术
双缓冲具体指的是workInProgress tree构造完毕，得到的就是新的fiber tree，然后喜新厌旧（把current指针指向workInProgress tree，丢掉旧的fiber tree）就好了
好处：
1. 能够复用内部对象（fiber）
2. 节省内存分配、GC的时间开销

## 原理
requestIdleCallback 在浏览器空闲的时候执行
