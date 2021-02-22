## MDN上的解释
instanceof 运算符用来测试一个对象在其原型链中是否存在一个构造函数的 prototype 属性

## instanceof 不可靠原因
- instanceof可以精准判断引用数据类型（Array，Function，Object），而基本数据类型不能被instanceof精准判断。
- 如果创建一个对象，并改变它的prototype，instanceof就变得不可靠了