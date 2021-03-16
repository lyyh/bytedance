## 1xx
1xx：请求已经接收到，需要进一步处理才能完成，HTTP/1.0 不支持(请求的中间状态、还需要后续请求)
100 Continue：上传大文件前使用
101 Switch Protocols：协议升级使用
102 Processing：服务器已经收到并正在处理请求，但无响应可用

## 2xx
2xx：成功处理请求
200 OK：成功返回响应
201 Created：有新资源在服务器端被成功创建
202 Accepted：服务器接受并开始处理请求，但请求未处理完成
206 Partial Content：使用range协议时返回部分响应内容时的响应码

## 3xx
- 303：类似于 302，重定向后的请求方法改为 GET 方法
- 307：类似于 302，含义比 302 更明确，重定向后请求的方法和实体不允许变动
- 308：类似于 301，代表永久重定向，重定向后请求的方法和实体不允许变动
- 300：是一个特殊的重定向状态码，会返回一个有多个链接选项的页面，由用户自行选择
- 304：是一个特殊的重定向状态码，服务端验证过期缓存有效后，要求客户端使用该缓存

## 4xx：客户端出现错误
400 Bad Request：服务器认为客户端出现了错误，但不明确，一般是 HTTP 请求格式错误
401 Unauthorized：用户认证信息确实或者不正确
403 Forbidden：服务器理解请求的含义，但没有权限执行
407 Proxy Authentication Required：对需要经由代理的请求，认证信息未通过代理服务器的验证
404 Not Found：服务器没有找到对应的资源
408 Request Timeout：服务器接收请求超时

## 5xx：服务器端出现错误
500 Internal Server Error：服务器内部错误，且不属于以下错误类型
502 Bad Gateway：代理服务器无法获取到合法响应
503 Service Unavailable：服务器资源尚未准备好处理当前请求（服务器繁忙）
505 HTTP Version Not Supported：请求使用的 HTTP 协议版本不支持

## 参考
https://mp.weixin.qq.com/s/6O7Duxg0M-LwsyVo2k2w9w