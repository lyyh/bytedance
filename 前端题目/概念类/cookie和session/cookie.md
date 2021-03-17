## cookie
http是无状态的传输协议，对于事务处理没有记忆性，cookie能够保证浏览器多次请求服务器是能携带上一次的状态。
如果没有设置时间，一关闭浏览器就会自动消失。

## 保存
cookie可以保存在内从中，也可以保存在硬盘中

## 存放什么
上次访问的位置、花费的时间或用户首选项的，用户登录信息

## 缺陷
1. 数量受到限制。一个浏览器能创建的 Cookie 数量最多为 300 个，并且每个不能超过 4KB，每个 Web 站点能设置的 Cookie 总数不能超过 20 个
2. 安全性无法得到保障。通常跨站点脚本攻击往往利用网站漏洞在网站页面中植入脚本代码或网站页面引用第三方法脚本代码，均存在跨站点脚本攻击的可能，在受到跨站点脚本攻击时，脚本指令将会读取当前站点的所有 Cookie 内容（已不存在 Cookie 作用域限制），然后通过某种方式将 Cookie 内容提交到指定的服务器（如：AJAX）。一旦 Cookie 落入攻击者手中，它将会重现其价值。http-only来防止
3. 浏览器可以禁用Cookie，禁用Cookie后，也就无法享有Cookie带来的方便。

## cookie和session最主要区别
1. session由服务端生成，保存用户属性。用通过特殊的算法来生成sessionId，用cookie方式传输。
2. Session是在服务端保存的一个数据结构，用来跟踪用户的状态，这个数据可以保存在集群、数据库、文件中或者session集群内
3. cookie是通过检查客户身上的“通行证”来确定客户身份的话，session通过检查服务器上的“客户明细表”来确认客户身份
4. cookie 是 sessionID 的容器

## session相比cookie更安全
服务器使用session把用户的信息临时保存在了服务器上，用户离开网站后session会被销毁。这种用户信息存储方式相对cookie来说更安。

## session 缺陷
1. 如果web服务器做了负载均衡，那么下一个操作请求到了另一台服务器的时候session会丢失。
2. Session的使用比Cookie方便，但是过多的Session存储在服务器内存中，会对服务器造成压力。

## 参看，
COOKIE和SESSION有什么区别？ - 轩辕志远的回答 - 知乎
https://www.zhihu.com/question/19786827/answer/28752144
COOKIE和SESSION有什么区别？ - 欲三更的回答 - 知乎
https://www.zhihu.com/question/19786827/answer/84540780