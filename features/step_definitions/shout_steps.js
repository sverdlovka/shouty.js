const assert = require('assert')
const { Given, When, Then } = require('@cucumber/cucumber')
const Shouty = require('../../lib/shouty')
const Coordinate = require('../../lib/coordinate')

const ARBITARY_MESSAGE = 'Hello, world'
let shouty = new Shouty()

Given('{word} is at {int}, {int}', function (name, x, y) {
  shouty.setLocation(name, new Coordinate(x, y))
})

When('{word} shouts', function (name) {
  shouty.shout(name, ARBITARY_MESSAGE)
})

Then('Lucy should hear Sean', function () {
  assert.strictEqual(shouty.getShoutsHeardBy('Lucy').size, 1)
})

Then('Lucy should hear nothing', function () {
  assert.strictEqual(shouty.getShoutsHeardBy('Lucy').size, 0)
})

Then('{word} should not hear {word}', function (listener, shouter) {
  const shouters = shouty.getShoutsHeardBy(listener).keys();
  assert.strictEqual(Array.from(shouters).includes(shouter), false);
})

Given('people are located at', function (dataTable) {
  dataTable.hashes().forEach(row => {
    console.log(row)
    shouty.setLocation(row.name, new Coordinate(row.x, row.y))
  })
})