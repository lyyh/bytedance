## React
- React的核心始终围绕着更新这一个重要的目标
    - Fiber架构和Scheduler出色的调度模式可以实现异步可中断的更新行为。
    - 优先级机制贯穿更新的整个周期

## Fiber是什么
- Fiber是什么？它是React的最小工作单元
- 一个DOM节点一定对应着一个Fiber节点，但一个Fiber节点却不一定有对应的DOM节点。

## Fiber架构下React是如何更新的
React要完成一次更新分为两个阶段： render阶段和commit阶段，两个阶段的工作可分别概括为新fiber树的构建和更新最终效果的应用。


## 参考
一篇长文帮你彻底搞懂React的调度机制原理 - Nero的文章 - 知乎
https://zhuanlan.zhihu.com/p/347522106

https://github.com/neroneroffy/react-source-code-debug React源码解析