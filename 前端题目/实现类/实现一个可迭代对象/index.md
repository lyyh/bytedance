一个数据结构中只要部署了 iterator 接口，那么称这个数据结构是可遍历的（iterable）
ES6 规定，默认的 Iterator 接口部署在数据结构的 Symbol.iterator 属性，或者说，一个数据结构只要具有 Symbol.iterator 属性，就可以认为是"可遍历的"（iterable）。

for of 遍历的其实是对象的 Symbol.iterator 属性
## 参考
https://github.com/mqyqingfeng/Blog/issues/90