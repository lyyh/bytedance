## loader
1. loader是导出一个函数的node模块，资源转换，传入一个包含资源文件内容的字符串
2. 返回的第一个值类型是javascript代码和buffer，第二个值是sourcemap

## loader传入传出什么
1. 最后的 loader 最早调用，将会传入原始资源内容。
2. 第一个 loader 最后调用，期望值是传出 JavaScript 和 source map（可选）。输出一个由js包裹的的模块
3. 中间的 loader 执行时，会传入前一个 loader 传出的结果。

## guidelines
- 简单易用。
- 使用链式传递。
- 模块化的输出。
- 确保无状态。
- 使用 loader utilities。
- 记录 loader 的依赖。
- 解析模块依赖关系。
- 提取通用代码。
- 避免绝对路径。
- 使用 peer dependencies。同等依赖

## 参考
https://github.com/Advanced-Frontend/Daily-Interview-Question/issues/308