## 共同点
setState回调更新函数 和 componentDidUpdate 都是真实dom更新之后才触发

## setState回调更新函数 与 componentDidUpdate 区别
componentDidUpdate 先执行，setState 回调更新函数后执行

## setState回调更新函数
1. 不论dom是否真实更新，执行了setState之后，它的回调函数仍然正常触发
2. setState 回调更新函数 只针对其绑定的 setState更新之后才触发
3. setState 回调函数获取的是当前一次dom真实更新后的所有最新state
4. 只要执行了setState，即使没有执行render，也会触发回调更新函数

## componentDidUpdate
1. componentDidUpdate 是针对于全局的state更新后都触发

## 参考
react setState核心实现原理 - 超厉害的文章 - 知乎 https://zhuanlan.zhihu.com/p/44537887