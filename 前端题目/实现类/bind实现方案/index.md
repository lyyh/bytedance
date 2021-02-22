## 原理
用于绑定this的指向，bind方法会创建一个新函数，第一个参数会作为新函数运行的this，其他的参数会在新函数被调用用位于其他参数之前传入
1. 返回新函数，调用新函数的返回值与调用旧函数的返回值相同
2. 新函数运行时的this指向bind方法的第一个参数
3. bind其余参数会在新函数调用前位于其他实参前传入
4. 新函数也可以使用使用new操作符创建对象，构造函数为原函数，也就是说bind时指定的this会失效，但是可以传入的参数依然生效

## 参考资料
https://www.cnblogs.com/echolun/p/12178655.html
[bind的实现](https://github.com/shhdgit/blogs/issues/1)