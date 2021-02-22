## 函数式编程 Funcational Programming
reducer是一个纯函数 pure function

## Redux 的问题
1. createStore只有一个函数，返回4个闭包。
2. dispatch只做了一件事，调用reducer然后调用subscribe的listener。
其中state的不可变或者是可变全部由使用者来控制，Redux并不知道state有没有发生变化，更不知道state具体哪里发生了变化。所以，如果view层需要知道哪一部分需要更新，只能通过脏检查。

## react-redux问题
再看react-redux做了什么，在store.subscribe上挂回调，每次发生subscribe就调用connect传进去mapStateToProps和mapDispatchToProps，然后脏检测props的每一项。当然，我们可以利用不可变数据的特点，去减少prop的数量从而减少脏检测的次数，但是哪有props都来自同一个子树这么好的事呢？


## 我为什么从Redux迁移到了Mobx
https://tech.youzan.com/mobx_vs_redux/