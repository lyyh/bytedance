## vite 改进
1. 将应用分为源码和依赖，改进了开发服务的启动阶段
2. vite 使用esbuild 预构建依赖
3. 源码，需要被编译，路由拆分的代码模块可以按需加载
4. Vite 以 原生 ESM 方式服务源码。这实际上是让浏览器接管了打包程序的部分工作：Vite 只需要在浏览器请求源码时进行转换并按需提供源码。根据情景动态导入的代码，即只在当前屏幕上实际使用时才会被处理。

## 优势
1.在 Vite 中，HMR 是在原生 ESM 上执行的。当编辑一个文件时，只对这个模块做HRM，
2.vite 同时利用 HTTP 头来加速整个页面的重新加载（再次让浏览器为我们做更多事情）：源码模块的请求会根据 304 Not Modified 进行协商缓存，而依赖模块请求则会通过 Cache-Control: max-age=31536000,immutable 进行强缓存，因此一旦被缓存它们将不需要再次请求。

## vite生态不如
wepback牛逼之处在于loader和plugin非常丰富

## vite pro环境依然用的 rollup

[参考](https://mp.weixin.qq.com/s/bJEfzTeFDpqw8dvLl1ErQg)