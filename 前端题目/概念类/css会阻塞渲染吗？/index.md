## 结论
- css加载不会阻塞dom解析，但会阻塞页面渲染
- css加载不会阻塞js加载，但会阻塞js解析执行
- JS会阻塞DOM解析

## css加载不会阻塞dom解析，但会阻塞页面渲染
css解析和dom解析是并行的进程

## css加载不会阻塞js加载，但会阻塞js解析执行
css加载不会阻塞js加载，但是如果脚本内容是获取元素样式

## JS阻塞DOM解析
为了避免节点删除、document.write等操作。但是现代浏览器会在DOM解析前预先下载 <link> <script> <img>的内容

## 现代浏览器
会在DOM解析前预先下载 <link> <script> <img>的内容

## script 和 link
- link 标签最好放头部，script最好放body尾部
- script、link 都在头部情况下，最好script放在link上

## 参考
https://juejin.cn/post/6844903667733118983