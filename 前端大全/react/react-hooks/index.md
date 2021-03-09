## 相比于类组件的优势
1. 同一份代码分散在不同的生命周期函数中，React Hooks可以使代码聚合，方便维护。
典型的比如 useEffect 是 componentDidMount componentDidUpdate componentWillUnmount 的三个函数的组合

2. 组件树层级变浅，在类组件中使用 HOC/render props 等方式来复用组件的状态，增强功能等，无疑增加了组件树层数及渲染，React Hooks 中，这些功能都可以通过强大的自定义的 Hooks 来实现；