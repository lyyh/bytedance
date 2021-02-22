## 从更新视图的角度来说（最大的区别）
- Vue是数据与dom响应式
- React是setState，全量render之后做diff，采用virtual dom方式更新视图。当然可以减少无用的re-render，用比较前后props、state的方式来阻止多余的render

## 从框架定位角度来说
- Vue是渐进是框架(framework)，是指不需要掌握全部功能特性，可以后续逐步增加功能。没有多做职责之外的事情，主张最少。
    - 有完整工具链，更加贴近生产，怎么让用户开箱即用，让应用更快（时间更短）
- react是一个库(library)
    - 只专注与视图，不负责工具链的问题

## 特点角度来说
- Vue使用的是web开发者更熟悉的模板与特性，更加注重web开发者的习惯
- React 的特色在于函数式编程的理念和丰富的技术选型


谁能大致说下vue和react的最大区别之处？ - 知乎
https://www.zhihu.com/question/309891718