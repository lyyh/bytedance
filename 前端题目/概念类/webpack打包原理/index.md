## 简介
1. 擅长将各种资源打包整合到一个bundle内，但是随着项目越来越大，打包时长也会变长
2. 在项目启动和有文件变化时重新进行打包，这使得项目的启动和二次构建都需要做较多的事情，相应的耗时也会增长。

## 原理
1. 先逐级递归识别依赖，构建依赖图谱
2. 将代码转化为AST抽象语法树(babel-parse)
3. 在AST阶段去处理代码（babel-transform）
4. 把AST抽象语法树转换为浏览器可识别的代码，然后输出(babel-generator)

## 缺点
1. 热更新效率低下
将开发服务器构建的内容存入内存，支持了动态模块热重载（HMR），允许一个模块 “热替换” 它自己，而对页面其余部分没有影响。然而在实际中，HMR更新速度也会随着应用规模的增长显著下降
2. 缓慢的服务器启动（使用nodejs实现）

## 参考
https://github.com/Cosen95/blog/issues/48
https://jelly.jd.com/article/5f0de6dad5205e015b87c128