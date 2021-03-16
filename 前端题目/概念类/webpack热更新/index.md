## 原理
1. 对代码进行修改之后，会对代码进行重新编译打包
2. 将将新的模块发送给浏览器，浏览器通过新模块替换老模块，在不刷新浏览器的前提下对应用进行更新。
相比于 live-reload 类型的工具，在库监控文件的变化，然后通知浏览器端刷新页面，保存了状态

## webpack-dev-server
在更改文件之后会自动重新编译并重新加载

## webpack-dev-middleware
webpack-dev-middleware 是一个封装器(wrapper)，它可以把 webpack 处理过的文件发送到一个 server。 webpack-dev-server 在内部使用了它，然而它也可以作为一个单独的 package 来使用，以便根据需求进行更多自定义设置。

## 步骤
1. webpack watch 监听模式，监听到文件更改，重新进行编译，将打包后的代码通过简单的javascript对象保存在内存中
2. webpack-dev-server 中的 webpack-dev-middleware 调用 webpack 暴露的api对代码变化进行监控，并且告诉webpack，将代码打包进内存中
3. webpack-dev-server 对文件变化进行监控，配置了 devServer.watchContentBase 之后，会监听静态文件变化，变化后会通知浏览器对应用进行live reload 
4. webpack-dev-server 建立一个 websocket 链接，将 webpack 编译打包阶段的各个状态信息告知浏览器，包括Server 监听静态文件变化的信息。浏览器根据这些 socket 消息进行不同的操作，当然服务端传递的最主要信息还是新模块的 hash 值，后面的步骤根据这一 hash 值来进行模块热替换。
5. webpack-dev-server/client 与服务端保持长连接，接收到服务端消息后转交给 webpack/hot/dev-server。webpack/hot/dev-server 根据消息来确定是热更新还是刷新页面
6. HotModuleReplacement.runtime 是客户端 HMR 的中枢。它接收到上一步传递给他的新模块的 hash 值，它通过 JsonpMainTemplate.runtime 向 server 端发送 Ajax 请求，服务端返回一个 json（manifest），该 json 包含了所有要更新的模块的 hash 值，获取到更新列表后，该模块再次通过 jsonp 请求，获取到最新的模块代码。这就是上图中 7、8、9 步骤。
7. 在该步骤中，HotModulePlugin 将会对新旧模块进行对比，决定是否更新模块，在决定更新模块后，检查模块之间的依赖关系，更新模块的同时更新模块间的依赖引用。
8. 最后一步，当 HMR 失败后，回退到 live reload 操作，也就是进行浏览器刷新来获取最新打包代码。

<<<<<<< HEAD
## 
https://zhuanlan.zhihu.com/p/30669007
=======
## 参考连接
Webpack HMR 原理解析 - 冉四夕的文章 - 知乎
https://zhuanlan.zhihu.com/p/30669007

https://www.infoq.cn/article/dioufdrtt3rocojvlrcl  看完这篇，再也不怕被问 Webpack 热更新

探秘 React Hot Loader - GilbertSun的文章 - 知乎
https://zhuanlan.zhihu.com/p/34193549
>>>>>>> 6fb73f73be2322c03c581565eca170eb4a1aede2
