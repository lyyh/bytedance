## express 中间件实现和原理实现
express中间件机制类似于一个漏斗装置，当一个请求到达服务端之后，请求会被抽象成一个req对象，这个对象会一次进入中间件，在中间件中分别被处理，最后被路由处理函数分发。


## 参考连接
https://cloud.tencent.com/developer/article/1467265