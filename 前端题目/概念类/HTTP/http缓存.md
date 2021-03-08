## 协商缓存
是否失效使用条件请求，常用的是 If-Modified-Since 和 If-None-Match，收到 304 状态码就可以复用缓存里的资源。

(If-None-Match 比 If-Modified-Since 优先级更高)  

验证资源被修改的条件有两个：Last-modified 和 ETag (ETag 比 Last-modified 的精确度更高)，


参考
https://mp.weixin.qq.com/s/6O7Duxg0M-LwsyVo2k2w9w