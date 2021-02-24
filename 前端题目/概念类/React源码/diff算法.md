## diff算法
1. 只对同级比较，跨层级的dom不会进行复用
2. 不同类型节点生成的dom树不同，此时会直接销毁老节点及子孙节点，并新建节点
3. 可以通过key来对元素diff的过程提供复用的线索，例如：

## 单点diff（一次遍历）
1. key和type相同表示可以复用节点
2. key不同直接标记删除节点，然后新建节点
3. key相同type不同，标记删除该节点和兄弟节点的fiber标记，然后新创建节点

## 多节点diff
- 属性变化
- type变化
- 新增节点
- 节点删除
- 节点位置变化
  
三次遍历：
1. 第一次遍历处理节点的更新（包括props更新和type更新和删除）
2. 第二次遍历处理其他的情况（节点新增），其原因在于在大多数的应用中，节点更新的频率更加频繁
3. 第三次处理位节点置改变

## 第一次遍历
因为老的节点存在于current Fiber中，所以它是个链表结构，还记得Fiber双缓存结构嘛，节点通过child、return、sibling连接，而newChildren存在于jsx当中，所以遍历对比的时候，首先让newChildren[i]与oldFiber对比，然后让i++、nextOldFiber = oldFiber.sibling。在第一轮遍历中，会处理三种情况，其中第1，2两种情况会结束第一次循环。
1. key不同，第一次循环结束
2. newChildren或者oldFiber遍历完，第一次循环结束
3. key同type不同，标记oldFiber为DELETION
4. key相同type相同则可以复用

newChildren遍历完，oldFiber没遍历完，在第一次遍历完成之后将oldFiber中没遍历完的节点标记为DELETION，即删除的DELETION Tag

## 第二次遍历
1. newChildren和oldFiber都遍历完：多节点diff过程结束
2. newChildren没遍历完，oldFiber遍历完，将剩下的newChildren的节点标记为Placement，即插入的Tag
3. newChildren和oldFiber没遍历完，则进入节点移动的逻辑

## 第三次遍历
