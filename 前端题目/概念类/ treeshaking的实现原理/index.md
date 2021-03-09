## 原理
通过 ES6 Module 模块静态加载的能力，在不执行的时候就能通过依赖分析来确定哪些是无用的代码。rollup和webpack都是使用uglify

## 为什么只能把函数和顶部import/export变量消除，不能把没用到的类方法消除
1. 如果将类的某些方法删除，由于javascript动态语言的特性很难做静态分析。
2. 函数的副作用相对较少，顶层函数相对来说更容易分析，加上babel默认都是"use strict"严格模式，减少顶层函数的动态访问的方式，也更容易分析

## 问题
只能处理函数和顶部import/export变量，不能把没用到的类的方法消除掉，原因：如果将类的某些方法删除，由于javascript动态语言的特性很难做静态分析。

## 实现
通过package.json的`sideEffects: false`属性告知 treeshaking 的时候可以删除未用到的export导出

## 参考
https://juejin.cn/post/6844903544756109319