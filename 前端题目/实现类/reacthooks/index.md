## 为什么不能在循环、判断内部使用 hooks
本质上是通过数组和下标通过维护的，如果在循环或者判断内使用，就可能会打断个映射顺序。

## useEffect 与 useEffectLayout 区别
- useEffect 浏览器渲染结束之后执行（宏任务）
- useLayoutEffect DOM构建完成，浏览器渲染前执行（微任务）


## 参考
手写ReactHook核心原理，再也不怕面试官问我ReactHook原理 - 前端阳光的文章 - 知乎
https://zhuanlan.zhihu.com/p/270599507
