async function async1(params) {
    console.log('async 1')
    await async2()
    console.log("after await")
}

async function async2(params) {
    console.log('async 2')
}

Promise.resolve().then(() => console.log('promise then'))

async1()
