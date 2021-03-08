以下js脚本的执行都会阻塞渲染
1. <script src='script.js'></script>
没有defer或者async，script会立即加载并执行指定的脚本，‘立即’指在渲染该script标签之下的文档元素之前，不等待后续加载载入的文档元素，读到就立即加载并执行。

2. <script async src="script.js"></script>
有 async，加载和渲染后续文档元素的过程将和 script.js 的加载与执行并行进行（异步）。

3. <script defer src="myscript.js"></script>
有 defer，加载后续文档元素的过程将和 script.js 的加载并行进行（异步），但是 script.js 的执行要在所有元素解析完成之后，DOMContentLoaded 事件触发之前完成。

## 区别
1. 相同点：相对于DOM渲染而言都是异步加载
2. 不同点：执行的时间点不同
    1. defer 在js加载完后，整个文档解析完成后，触发 DOMContentLoaded 事件前执行，顺序
    2. async 在js加载完后就立即执行，先加载完先执行，乱序

## 重点
都有async和defer的情况下，无法确定它们加载完后谁先执行
```
<script async src='./c.js'></script>
<script defer src='./a.js'></script>
<script defer src='./b.js'></script>
```
可能 c => a => b，也可能 a => c => b，也可能 a => b => c,但是a和b的相对顺序

## 参考链接
https://segmentfault.com/q/1010000000640869