## Fiber Node链表

## current trees 和 workInProgress trees
current tree 反应的是当前的页面状态。当react更新的时候会创建一个 workInProgress tree 反应的是将要被渲染到页面的状态。
每个Fiber Node都会创建一个替换节点，可以看做是workInProgress tree。这个节点用来自对应的react element 上的数据创建。一旦更新过程进行完并且
所有相关的工作完成，react将会有一颗替换的树准备推向页面。一旦 workInProgress tree被渲染到了页
面上，它就会变成current tree。

## 核心
react 的核心原则之一是保持一致性。react 总是一次性更新 workInProgress , 不会出现只更新部分dom的情况。
workInProgress 可以看成是页面更新的一个原型，对用户并不可见，所以 react 能够首先处理所有的组件，并一次性的把这些变更提现在组件上。