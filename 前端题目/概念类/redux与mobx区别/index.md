## redux
### 什么时候适用Redux
1.需要多维度共享并且变更频繁的数据可以使用Redux处理
2.开发大型在线协作型应用，需要用到 Undo/Redo
3.

### Redux带来的限制
1. Redux 带来了函数式编程、不可变性思想等等，为了配合这些理念，开发者必须要写很多“模式代码（boilerplate）”，当然现在有很多hack来减少样板代码，例如 rematch
2. 使用 Redux，那么你的应用就要用 objects 或者 arrays 描述状态
3. 使用 Redux，那么你的应用就要使用 plain objects 即 actions 
4. 使用 Redux，那么你的应用就要使用纯函数去处理变化；
5. 一个变化就要对应编写 action（action creator），reducer 等等
6. 和响应式结合函数式的 Mobx 相比，编程体验“打折扣”

### 同时这些限制又会带来一定的优势
1. Redux便于调试 ？？？
2. 便于测试 ？？？
2. 便于线上错误收集，只需要发送 states, actions 等快照即可
3. 结合 localStorage 初始化 store ？？？ 
4. 开发在线协作型应用的救命解药
5. 时光旅行 Undo／Redo；

### redux 与 mobx对比
1. redux将数据保存在单一的store中，mobx将数据保存在分散的多个store中
2. redux使用plain object保存数据，需要手动处理变化后的操作；mobx适用observable保存数据，数据变化后自动处理响应的操作
3. redux使用不可变状态，这意味着状态是只读的，不能直接去修改它，而是应该返回一个新的状态，同时使用纯函数；mobx中的状态是可变的，可以直接对其进行修改
4.mobx相对来说比较简单，在其中有很多的抽象，mobx更多的使用面向对象的编程思维；redux会比较复杂，因为其中的函数式编程思想掌握起来不是那么容易，同时需要借助一系列的中间件来处理异步和副作用
5. mobx中有更多的抽象和封装，调试会比较困难，同时结果也难以预测；而redux提供能够进行时间回溯的开发工具，同时其纯函数以及更少的抽象，让调试变得更加的容易

## 资料
解读Mobx及与redux的对比 - Richard的文章 - 知乎
https://zhuanlan.zhihu.com/p/36294638

redux 有什么缺点？ - 知乎
https://www.zhihu.com/question/263928256