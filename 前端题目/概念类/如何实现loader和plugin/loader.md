## loader编写原则
单一原则、链式调用、统一原则
统一原则：遵循 Webpack 制定的设计规则和结构，输入与输出均为字符串，各个 Loader 完全独立，即插即用；

## 什么是loader
背景：webpack默认只能处理javascript模块，如果需要处理其他类型的文件，需要相应的loader进行转换处理。比如像css、图片，webpack不能直接处理需要loader转换。

本质上是一个node模块，将rule规则匹配的文件代码传入，经过ast解析，加工返回一段新的代码。

## 其他背景知识
1. @babel/parser 将源代码解析成 AST
2. @babel/traverse 对AST节点进行递归遍历，生成一个便于操作、转换的path对象
3. @babel/generator 将AST解码生成js代码
4. @babel/types 通过该模块对具体的AST节点进行进行增、删、改、查