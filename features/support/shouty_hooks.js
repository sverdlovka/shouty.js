const { Before, After } = require('@cucumber/cucumber')

Before({ tags: "@wip"}, () => {
  console.log("before meow 1")
})

After({ tags: "@wip"}, () => {
  console.log("after meow 1")
})

Before({ tags: "@done"}, () => {
  console.log("before meow 2")
})

After({ tags: "@done"}, () => {
  console.log("after meow 2")
})