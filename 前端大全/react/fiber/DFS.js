
const root = {
    key: 'A1',
    children: [{
      key: 'B1',
      children: [{
        key: 'C1',
        children: []
      }, {
        key: 'C2',
        children: []
      }]
    }, {
      key: 'B2',
      children: [{
        key: 'C3',
        children: []
      }, {
        key: 'C4',
        children: []
      }]
    }]
  }

  const work = root => {
    console.log(root.key)
    root.children.forEach(item => work(item))
  }
  work(root)