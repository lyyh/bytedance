## 同构过程
getInitialStore
- prepareEnv
- initNetWork (创建同构请求 axios)
- beforeInitialStore (plugin)
- fetchPathInfo (登录获取模板数据)
- beforeFilterComponent （plugin）
- filterComponentList (过滤组件)
- applyComponentHooks
- calcFirstScreenComponent(计算首屏组件)
- beforeBuildComponentList(plugin)
- buildComponentList 加载组件，实例化其Store
- afterInitialStore (plugin)
- fetchComponentList(首屏组件发起请求)

## 流式渲染