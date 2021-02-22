## 原型链继承
```
//父类，带属性
function Super(){
	this.flag = true;
}
//为了提高复用性，方法绑定在父类原型属性上
Super.prototype.getFlag = function() {
	return this.flag;
}
//子类
function Sub() {
	this.subFlag = false;
}
//实现继承
Sub.prototype = new Super;
//给子类添加子类特有的方法，注意顺序在继承之后
Sub.prototype.getSubFlag = function() {
	return this.sunFlag;
}
//构造实例
var es5 = new Sub;
console.log(es5)
```
优点：
- 非常纯粹的继承关系，实例是子类的实例，也是父类的实例
- 父类新增原型方法/原型属性，子类都能访问到
- 简单，易于实现

缺点：
- 要想为子类新增属性和方法，必须要在new Animal()这样的语句之后执行，不能放到构造器中
- 无法实现多继承
- 来自原型对象的引用属性是所有实例共享的
- 创建子类实例时，无法向父类构造函数传参 。


## 构造函数继承
```
function Super(){
	this.flag = true;
}

function Sub() {
	Super.call(this)//如果父类可以需要接收参数，这里也可以直接传递
}

var obj = new Sub();
obj.flag = false;

var obj2 = new Sub();
console.log(obj2.flag)//依然是true，不会相互影响 

```
优点：
1. 解决了1中，子类实例共享父类引用属性的问题
2. 创建子类实例时，可以向父类传递参数
3. 可以实现多继承（call多个父类对象）

缺点：
1. 实例并不是父类的实例，只是子类的实例
2. 只能继承父类的实例属性和方法，不能继承原型属性/方法
3. 无法实现函数复用，每个子类都有父类实例函数的副本，影响性能

## 组合继承
```
function Super(){
	this.flag = true;
}

Super.prototype.getFlag = function() {
	return this.flag;
}

function Sub() {
	this.subFlag = false;
	Super.call(this)
}

Sub.prototype = new Super;
var obj = new Sub();
Sub.prototype.constructor = sub;
Super.prototype.getSubFlag = function() {
	return this.flag;
}
这里还有个小问题，Sub.prototype = new Super; 会导致Sub.prototype的constructor指向Super;然而constructor的定义是要指向原型属性对应的构造函数的，Sub.prototype是Sub构造函数的原型，所以应该添加一句纠正：Sub.prototype.constructor = Sub;
```
优点：
1.弥补了方式2的缺陷，可以继承实例属性/方法，也可以继承原型属性/方法
2.既是子类的实例，也是父类的实例
3.不存在引用属性共享问题
4.可传参
5.函数可复用

缺点：
1. 调用了两次父类构造函数，生成了两份实例（子类实例将子类原型上的那份屏蔽了）

## 寄生组合继承
即将sub.prototype=new super改为sub.prototype=Object.creat（supper.prototype)，避免了组合继承中构造函数调用了两次的弊端


## 参考资料
https://juejin.cn/post/6844903855046541326