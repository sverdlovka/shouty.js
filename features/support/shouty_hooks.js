const { Before, After } = require('@cucumber/cucumber')

Before(() => {
  console.log("before meow 1")
})

After(() => {
  console.log("after meow 1")
})

Before(() => {
  console.log("before meow 2")
})

After(() => {
  console.log("after meow 2")
})