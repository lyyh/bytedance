## React核心
作为一个构建用户界面的库，React的核心始终围绕着更新这一个重要的目标，追求用户体验的极致：
1.Fiber架构和Scheduler出色的调度模式可以实现异步可中断的更新行为。
2.优先级机制贯穿更新的整个周期

## Fiber
- Fiber是React工作的最小单元。
- 一切皆为组件，html标签、普通文本节点都是组件
- 一个组件皆为Fiber节点，许多Fiber节点相互嵌套、关联，就组成了Fiber树
- 一个DOM节点一定对应着一个Fiber节点，但一个Fiber节点却不一定有对应的DOM节点。

## Fiber树的更新
Fiber树的更新分为两个阶段，render阶段和commit阶段，render阶段是Fiber树的构建，commit阶段是更新最终效果

## render阶段
render阶段实际上是在内存中构建一棵新的fiber树（称为workInProgress树），构建过程是依照现有fiber树（current树）从root开始深度优先遍历再回溯到root的过程，这个过程中每个fiber节点都会经历两个阶段：beginWork和completeWork。

## schedular
schedular用来调度执行React Fiber树的更新任务。
调度：
1.根据任务优先级来确定哪个任务优先执行。调度的目标是保证高优先级任务最先被执行。
执行：
1.即根据时间片去终止任务，并判断任务是否完成，若未完成则继续调用任务函数。它只是去做任务的中断和恢复，而任务是否已经完成则要依赖React告诉它。Scheduler和React相互配合的模式可以让React的任务执行具备异步可中断的特点。

## 优先级机制

## 双缓存机制
同时更新过程中同时存在current树、workInProgress树。当更新未完成的时候，页面上始终展示current树对应的内容，当更新结束时（commit阶段的最后），页面内容对应的fiber树会由current树切换到workInProgress树，此时workInProgress树即成为新的current树。

## 事件机制
## Scheduler原理
## 重点Hooks
## context原理

## 参考文档
https://github.com/neroneroffy/react-source-code-debug/blob/master/docs/%E5%89%8D%E7%BD%AE%E7%9F%A5%E8%AF%86/React%E4%B8%AD%E7%9A%84%E4%BC%98%E5%85%88%E7%BA%A7.md

https://xiaochen1024.com/article_item/600ac6afecf02e002e6db56b