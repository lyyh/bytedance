## git rebase 与 git merge 区别
1. merge合并会创建一个merge commit，保留了真实的历史线
2. rebase 没有进行合并操作，提取了当前分支的修改，将其复制到目标分支的最新提交后面

## 注意事项
1. 使用 merge 时应考虑是采用 --no-ff 默认操作，生成一个对回顾提交历史并不友好的合并记录，还是采用 --ff-only(fast-forward) 方式
2. rebase 操作会丢弃当前分支已提交的 commit，故不要在已经 push 到远程，和其他人正在协作开发的分支上执行 rebase 操作（如果该分支与其他开发人员共享修改，不能使用变基操作，变基会破发分支）
3. 与远程仓库同步时，使用 pull 命令默认进行了 git fetch + git merge --no-ff 两个操作，可以通过加上 --rebase 命令将 fetch 后的 merge 操作改为 rebase 操作，或者仅仅 'git fetch remoteName',然后才思考采取哪种整合策略 git merge(or rebase) origin/master
4. 开发与 commit 时注意自己此时在哪个分支上
5. 当有修改未 commit 时，不能进行 rebase 操作，此时可以考虑先用 git stash 命令暂存

## 参考
https://www.jianshu.com/p/c17472d704a0
https://blog.csdn.net/qq_40259641/article/details/102785419
在开发过程中使用 git rebase 还是 git merge，优缺点分别是什么？ - 知乎
https://www.zhihu.com/question/36509119
是时候表演真正的技术了——11个Git面试题目，你会多少？ - 慕课网的文章 - 知乎
https://zhuanlan.zhihu.com/p/45280433