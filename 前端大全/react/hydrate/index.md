## 什么是 hydrate
hydrate 描述的是 ReactDOM 复用 ReactDOMServer 服务端渲染的内容时尽可能保留结构，并补充事件绑定等 Client 环境特有内容的过程。

## react hydrate
react 15.0 服务端返回的dom会加上一个标记 react-rootId，不一致的地方做整体的替换
react 16.0 利用 current 树和 workInProgress 树做对比，不一致的地方只做内容的patch，其他比如说节点属性用服务端返回的