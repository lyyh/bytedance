所以 setTimeout 一定会被设计成宏任务，这可以保证它在任何地方调用，表现始终是一致的；也不会阻塞event loop。相反微任务只适合在一个任务结束后作为附加的流程控制，如果在微任务中反复触发其它微任务，就会阻塞掉event loop。下面的例子中，不论如何发起timer任务，它都不会彻底阻塞event loop；而微任务的递归调用则会彻底阻塞。

## 参考
https://ginobilee.github.io/blog/2019/02/01/requestAnimationFrame%E6%98%AF%E4%B8%80%E4%B8%AA%E5%AE%8F%E4%BB%BB%E5%8A%A1%E4%B9%88/