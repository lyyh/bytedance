## git rebase 与 git merge 区别
1. merge合并会创建一个merge commit，保留了真实的历史线
2. rebase 没有进行合并操作，提取了当前分支的修改，将其复制到目标分支的最新提交后面

## 注意事项
1. 使用 merge 时应考虑是采用 --no-ff 默认操作，生成一个对回顾提交历史并不友好的合并记录，还是采用 --ff-only(fast-forward) 方式
2. rebase 操作会丢弃当前分支已提交的 commit，故不要在已经 push 到远程，和其他人正在协作开发的分支上执行 rebase 操作（如果该分支与其他开发人员共享修改，不能使用变基操作，变基会破发分支）
3. 与远程仓库同步时，使用 pull 命令默认进行了 git fetch + git merge --no-ff 两个操作，可以通过加上 --rebase 命令将 fetch 后的 merge 操作改为 rebase 操作，或者仅仅 'git fetch remoteName',然后才思考采取哪种整合策略 git merge(or rebase) origin/master
4. 开发与 commit 时注意自己此时在哪个分支上
5. 当有修改未 commit 时，不能进行 rebase 操作，此时可以考虑先用 git stash 命令暂存

## 需要考虑因素
1. 分支是否与团队外部的开发人员共享修改（如开源、公开项目）？如果是这样，请不要使用变基操作。变基会破坏分支，除非他们使用 git pull --rebase，否则这些开发人员将会得到损坏的或不一致的仓库。
2. 你的开发团队技术是否足够娴熟？变基是一种破坏性操作。这意味着，如果你没有正确使用它，你可能会丢失提交，并且/或者会破坏其他开发者仓库的一致性。
3. 分支本身是否代表有用的信息？一些团队使用功能分支（branch-per-feature）模式，每个分支代表一个功能（或错误修复，或子功能等）。在此模式中，分支有助于识别相关提交的集合。在每个开发人员分支（branch-per-developer）模式中，分支本身不会传达任何其他信息（提交信息已有作者）。则在这种模式下，变基不会有任何破坏。
4. 是否无论如何都要还原合并？恢复（如在撤销中）变基，是相当困难的，并且/或者在变基中存在冲突时，是不可能完成的。如果你考虑到日后可能需要恢复，请使用合并操作。

## 总结
1. rebase 会对提交历史产生破坏，遇到还原冲突合并十分困难，如果日后需要需要考虑恢复，请使用merge。
2. 多位开发人员同时对一个分支进行维护时，git rebase 会让其他开发者得到损坏或者提交历史不一致的仓库。
3. 最好日常合并解决冲突使用merge，这样能多创建一个合并解决过程的提交，方便溯源
4. git pull更新操作可以使用 git pull --rebase，减少一个 merge commit
5. 专业开源项目比较喜欢使用 git rebase，history清晰

## 参考
https://www.jianshu.com/p/c17472d704a0
https://blog.csdn.net/qq_40259641/article/details/102785419
在开发过程中使用 git rebase 还是 git merge，优缺点分别是什么？ - 知乎
https://www.zhihu.com/question/36509119
是时候表演真正的技术了——11个Git面试题目，你会多少？ - 慕课网的文章 - 知乎
https://zhuanlan.zhihu.com/p/45280433