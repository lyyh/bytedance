### mobx-react和react-redux
使用Redux和React应用连接时，需要使用react-redux提供的Provider和connect：

Provider：负责将Store注入React应用；
connect：负责将store state注入容器组件，并选择特定状态作为容器组件props传递；

对于Mobx而言，同样需要两个步骤：

Provider：使用mobx-react提供的Provider将所有stores注入应用；
使用inject将特定store注入某组件，store可以传递状态或action；然后使用observer保证组件能响应store中的可观察对象（observable）变更，即store更新，组件视图响应式更新。

