## 为什么要异常处理
1. 不处理直接导致程序奔溃，这显然不是我们想要的
2. 导致请求无法被释放，直至连接超时。用户体验体验非常差，我们要做的应该是在出错时，给用户一个友好的提示，并记录下此次异常，以便排查
   
## 有如下几项
1. uncatchExpection
2. callback error
3. eventEmitter
4. Promise 封装异步处理
5. pm2捕获到未知异常之后重启服务器

### uncatchExpection
1. 是NodeJS进程中注册的一个事件，如果一个进程产生了一个异常而没有被捕获，那么最终会一直冒泡到事件循环为止。
2. 但容易导致内存泄漏，触发异常之后，后面的I/O代码一直处于等待状态，已经开辟的资源不仅不会被释放，而且服务器还在不知疲倦地接受新的用户请求。造成内存上涨导致内存泄漏

### Node自身对异常的处理
触发uncatchExpection事件，如果uncatchExpection事件没有被监听，那么打印异常堆栈信息，进程触发 exit 事件

### Node异常处理如何防止内存泄漏
uncatchExpection 捕获到整个进程包含异步中的错误信息，从而保证应用没有奔溃。
当异常出现时，直接从对应执行栈中断，而到process捕获的异常事件下，导致了v8引擎的垃圾回收功能不能按照正常流程工作，然后开始出现内存泄漏问题

### 正常处理方式
当捕获到异常时，显式的手动杀掉进程，并开始重启node进程，即保证释放内存，又保证了保证服务后续正常可用。
```
process.on('uncaughtException', (e)=>{
  console.error('process error is:', e.message);
  process.exit(1);
  restartServer(); // 重启服务
});
```
但单实例下，重启服务会导致一段时间不可用

## cluster + domain
多进程+domain模块

## 参考
https://cloud.tencent.com/developer/article/1461991