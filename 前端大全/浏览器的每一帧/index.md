## 帧顺序
1. 需要处理用户输入事件
2. 执行定时器回调
3. Begin Frame，每一帧的事件，window.resize、scroll、media query change
4. rAF
5. Layout 计算布局和更新布局
6. Paint 树中每个节点的尺寸与位置等信息，浏览器针对每个元素进行内容填充
7. Idle Period requestIdleCallback