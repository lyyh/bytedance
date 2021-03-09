console.log(Object.keys(Array.from({length: 101}))); 

console.log(Object.keys(Array.apply(null,{length: 101})))

console.log(Array.from(new Array(101).keys()))

console.log([...Array(100).keys()])

console.log([...Array.from({length:100}).keys()])
