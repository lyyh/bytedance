## 官方文档的话
- While loaders are used to transform certain types of modules, plugins can be leveraged to perform a wider range of tasks like bundle optimization, asset management and injection of environment variables.
- 相对于loader转换指定类型的模块功能，plugins能够被用于执行更广泛的任务比如打包优化、文件管理、环境注入等

## loader
loader本是是一个函数，接收源文件作为参数，返回转换后的结果。

## plugin
Plugin 是用来扩展 Webpack 功能的，通过在构建流程里注入钩子实现，它给 Webpack 带来了很大的灵活性。 通过plugin（插件）webpack可以实 loader 所不能完成的复杂功能，使用 plugin 丰富的自定义 API 以及生命周期事件，可以控制 webpack 打包流程的每个环节，实现对 webpack 的自定义功能扩展。

## 参考链接
https://github.com/Advanced-Frontend/Daily-Interview-Question/issues/308 loader和plugin的区别
http://www.cainiaoxueyuan.com/gcs/10020.html
https://cloud.tencent.com/developer/article/1558870 详解Webpack的loader和plugin编写