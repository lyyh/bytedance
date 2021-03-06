## React Fiber 16 之前
在 react16 引入 Fiber 架构之前，react 会采用递归对比虚拟DOM树，找出需要变动的节点，然后同步更新它们，这个过程 react 称为reconcilation（协调）。在reconcilation期间，react 会一直占用浏览器资源，会导致用户触发的事件得不到响应。执行栈越来越深，不可中断。

## 解决的问题
主线程长时间被占用的问题，引入Fiber来改变这种不可控的现状。保证

## 怎么解决
把渲染/更新过程拆分为一个小小的任务，通过合理的调度机制来调控时间，指定任务执行时机，从而降低页面的卡顿概率。通过Fiber架构，让reconcilation过程变得可中断，适时地让出CPU执行权，可以让浏览器及时地响应用户交互。

## 结论
通过Fiber架构，让reconcilation过程变得可被中断。适时地让出CPU执行权，可以让浏览器及时地响应用户的交互。

## react背景
React 是不管在哪里调用 setState，都是从根节点开始更新的，更新任务还是很大，需要使用到 Fiber 将大任务分割为多个小任务，可以中断和恢复，不阻塞主进程执行高优先级的任务

## vue和React的优化思路
- Vue 是基于 template 和 watcher 的组件级更新，把每个更新任务分割得足够小，不需要使用到 Fiber 架构，将任务进行更细粒度的拆分
- React 是不管在哪里调用 setState，都是从根节点开始更新的，更新任务还是很大，需要使用到 Fiber 将大任务分割为多个小任务，可以中断和恢复，不阻塞主进程执行高优先级的任务

## 过程
React 向浏览器请求调度，如果浏览器在一帧中还有空闲时间，判断是否存在执行任务，不存在将控制权交互给浏览器，如果存在执行任务，则将该任务执行完后再判断是否还有时间，有时间且有待执行任务则会继续执行下一个任务，否则就会将控制权交给浏览器。