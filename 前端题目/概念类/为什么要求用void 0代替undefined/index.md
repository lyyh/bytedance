## 原因
避免 undefined 被重写带来的风险。现代浏览器，undefined 是不可重写的,用 `Object.getOwnPropertyDescriptor` 可以检测出来。