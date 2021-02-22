## 答题思路
- 总体六个步骤
    - 网络线程构建请求行信息
    - DNS域名解析
    - TCP三次握手
    - 浏览器发送HTTP请求
    - 服务器收到HTTP请求并返回HTTP报文
    - 浏览器渲染页面
    - TCP三次挥手
- 回答什么重点要看面试岗位
    - TCP三次握手、四次挥手
        - 为什么要三次握手、四次挥手
    - DNS域名解析
    - HTTP缓存
    - 浏览器如何渲染页面
        - DOM树构建
        - CSSOM规则树生成
        - 布局树
        - 图层树
        - paint

## 步骤
### 网络线程构建请求行信息并发起真正的URL请求
// 请求方法是GET，路径为根路径，HTTP协议版本为1.1  
GET / HTTP/1.1

### 查找浏览器强缓存
- 强缓存（disk cache 本地缓存）
- 协商缓存(memory cache)
    - 向服务器询问资源是否有更新
- 强缓存字段
    - http1.1 cache-control > http1.0 Expires
- 协商缓存字段
    - Last-Modified
    - E-Tag

### DNS域名解析
- DNS域名解析
    - 正向解析&反向查询
        - 反向查询原理：从历史收录的域名与IP关系中查到IP对应的域名
- DNS解析顺序
    - 浏览器缓存
    - 本地服务器
    - 根域名服务器
    - 一级域名服务器
    - 二级域名服务器

### 建立TCP链接
- 三次握手
    - 为什么要有第三次握手
        - 为了防止已失效的连接请求报文段突然又传送到了服务端，因而产生错误（表因并不是本质）


## HTTP Request 请求报文
- HTTPS连接如何建立
- 携带cookie

## HTTP Response 响应报文
- 返回cookie

### 断开TCP连接
- 四次挥手
    - 为什么要有第四次挥手
        - 客户端就无法收到服务器还没发完的数据，导致数据丢失


## 浏览器解析渲染页面
大概步骤

### DOM树
- 转换 Conversion
- 序列化 Tokenizing
- 词法分析 Lexing
- 构建DOM 

### CSS规则树
有一个优化在里面
转化为能够被理解的 styleSheet
继承规则、样式层叠

### 渲染树

### 布局树

### 图层树
构建图层树，层叠上下文会形成图层树

### 绘制
绘制伴随着回流？？？

## TCP四次挥手
为什么要四次挥手？？？

## 参考资料
(不要再问我三次握手和四次挥手)[https://www.cnblogs.com/heyonggang/p/11634228.html]
一次搞定前端“核心主线”——从输入URL到页面展示发生了什么 - Venaissance的文章 - 知乎
https://zhuanlan.zhihu.com/p/190320054
经典面试题：从 URL 输入到页面展现到底发生什么？ - Fundebug的文章 - 知乎
https://zhuanlan.zhihu.com/p/57895541
『前端面试100问』之浏览器从输入URL到页面展示发生了什么
https://www.codenong.com/j5ed67bad6fb9a04804040fee/