## Redux 的问题
1. createStore只有一个函数，返回4个闭包。
2. dispatch只做了一件事，调用reducer然后调用subscribe的listener。
其中state的不可变或者是可变全部由使用者来控制，Redux并不知道state有没有发生变化，更不知道state具体哪里发生了变化。所以，如果view层需要知道哪一部分需要更新，只能通过脏检查。

## react-redux问题
再看react-redux做了什么，在store.subscribe上挂回调，每次发生subscribe就调用connect传进去mapStateToProps和mapDispatchToProps，然后脏检测props的每一项。当然，我们可以利用不可变数据的特点，去减少prop的数量从而减少脏检测的次数，但是哪有props都来自同一个子树这么好的事呢？


## mobx 的好处
Mobx可以说是众多数据方案中最完善的一个了。Mobx本身独立，不与任何view层框架互相依赖，因此你可以随意选择合适的view层框架（部分除外，例如Vue，因为它们的原理是一样的）。

## Mobx原理
为每个组件创建一个Watcher，在数据的getter和setter上加钩子，当组件渲染的时候（例如，调用render方法）会触发getter，然后把这个组件对应的Watcher添加到getter相关的数据的依赖中（例如，一个Set）。当setter被触发时，就能知道数据发生了变化，然后同时对应的Watcher去重绘组件。


这样，每个组件所需要的数据时精确可知的，因此当数据发生变化时，可以精确地知道哪些组件需要被重绘，数据变化时重绘的过程是O(1)的时间复杂度。

## 性能
在这篇文章中，作者使用了一个一个128*128的绘图板来说明问题。 由于Mobx利用getter和setter（未来可能会出现一个平行的基于Proxy的版本）去收集组件实例的数据依赖关系，因此每单当一个点发生更新的时候，Mobx知道哪些组件需要被更新，决定哪个组件更新的过程的时间复杂度是O(1)的，而Redux通过脏检查每一个connect的组件去得到哪些组件需要更新，有n个组件connect这个过程的时间复杂度就是O(n)，最终反映到Perf工具上就是JavaScript的执行耗时。

虽然在经过一系列优化后，Redux的版本可以获得不输Mobx版本的性能，当时Mobx不用任何优化就可以得到不错的性能。而Redux最完美的优化是为每一个点建立单独的store，这与Mobx等一众精确定位数据依赖的方案在思想上是相同的。

## 总结
Mobx利用getter和setter来收集组件的数据依赖关系，从而在数据发生变化的时候精确知道哪些组件需要重绘，在界面的规模变大的时候，往往会有很多细粒度更新，虽然响应式设计会有额外的开销，在界面规模大的时候，这种开销是远比对每一个组件做脏检查小的，因此在这种情况下Mobx会很容易得到比Redux更好的性能。而在数据全部发生改变时，基于脏检查的实现会比Mobx这类响应式有更好的性能，但这类情况很少。同时，有些benchmark并不是最佳实践，其结果也不能反映真实的情况。

但是，由于React本身提供了利用不可变数据结构来减少无用渲染的机制（例如PureComponent，函数式组件），同时，React的一些生态和Immutable绑定了（例如Draft.js），因此在配合可变的观察者模式的数据结构时并不是那么舒服。所以，在遇到性能问题之前，建议还是使用Redux和Immutable.js搭配React。

## 一些实践
由于JavaScript的限制，一些对象不是原生的对象，其他的类型检查库可能会导致意想不到的结果。例如在Mobx中，数组并不是一个Array，而是一个类Array的对象，这是为了能监听到数据下标的赋值。相对的，在Vue中数组是一个Array，但是数组下标赋值要使用splice来进行，否则无法被检测到。

由于Mobx的原理，要做到精确的按需更新，就要在正确的地方触发getter，最简单的办法就是render要用到的数据只在render里解构。mobx-react从4.0开始，inject接受的map函数中的结构也会被追踪，因此可以直接用类似react-redux的写法。注意，在4.0之前inject的map函数不会被追踪。

响应式有额外的开销，这些开销在渲染大量数据时会对性能有影响（例如：长列表），因此要合理搭配使用observable.ref、observable.shallow（Mobx），types.frozen（Mobx State Tree）。

## 我为什么从Redux迁移到了Mobx
https://tech.youzan.com/mobx_vs_redux/