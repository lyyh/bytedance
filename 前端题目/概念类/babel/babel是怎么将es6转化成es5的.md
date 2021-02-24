## babel 的各种包介绍
babel-core：核心包，提供转译的 API，用于对代码进行转译。例如 babel.transform。在 webpack 中 babel-loader 就是通过这个包实现。
babylon：babel 的词法解析器。将原始代码逐个字母地像扫描机一样读取分析得出 AST 语法树结构。
babel-traverse：对 AST 进行遍历转译。
babel-generator：将新的 AST 语法树生成新的代码。
babel-types：用于检验、构建和改变 AST 树的节点
babel-template：辅助函数，用于从字符串形式的代码来构建 AST 树节点
babel-helpers：一系列预制的 babel-template 函数，用于提供给一些 plugins 使用
babel-code-frames：用于生成错误信息，打印出错误点源代码帧以及指出出错位置
babel-plugin-xxx：babel 转译过程中使用到的插件，其中 babel-plugin-transform-xxx 是 transform 步骤使用的。
babel-preset-xxx：transform阶段使用到的一系列的 plugin。
babel-polyfill：JS 标准新增的原生对象和 API 的 shim，实现上仅仅是 core-js 和 regenerator-runtime两个包的封装。
babel-runtime：功能类似 babel-polyfill，一般用于 library 或 plugin 中，因为它不会污染全局作用域。

## 转换过程
1. Parser 解析
第一步主要是将 ES6 语法解析为 AST 抽象语法树。简单地说就是将代码打散成颗粒组装的对象。这一步主要是通过 babylon 插件来完成。
2. Transformer 转换
第二步是将打散的 AST 语法通过配置好的 plugins（babel-traverse 对 AST 进行遍历转译）和 presets （es2015 / es2016 / es2017 / env / stage-0 / stage-4 其中 es20xx 表示转换成该年份批准的标准，env 是最新标准，stage-0 和 stage-4 是实验版）转换成新的 AST 语法。这一步主要是由 babel-transform 插件完成。plugins 和 presets 通常在 .babelrc 文件中配置。
3. Generator 生成
第三步是将新的 AST 语法树对象再生成浏览器都可以识别的 ES5 语法。这一步主要是由 babel-generator 插件完成。

## 参考
[babel ES6 转换 ES5 实现原理](https://www.jianshu.com/p/e9b94b2d52e2)