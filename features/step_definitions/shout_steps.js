const assert = require('assert')
const { Given, When, Then, Before } = require('@cucumber/cucumber')
const Coordinate = require('../../lib/coordinate')

const ARBITARY_MESSAGE = 'Hello, world'

When('{word} shouts', function (name) {
  this.shouty.shout(name, ARBITARY_MESSAGE)
})

Then('Lucy should hear Sean', function () {
  assert.strictEqual(this.shouty.getShoutsHeardBy('Lucy').size, 1)
})

Then('Lucy should hear nothing', function () {
  assert.strictEqual(this.shouty.getShoutsHeardBy('Lucy').size, 0)
})

Then('{word} should not hear {word}', function (listener, shouter) {
  const shouters = this.shouty.getShoutsHeardBy(listener).keys();
  assert.strictEqual(Array.from(shouters).includes(shouter), false);
})

Then('Lucy should hear {int} shouts from Sean', function (shouts) {
  assert.strictEqual(this.shouty.getShoutsHeardBy('Lucy').get('Sean').length, shouts)
});
