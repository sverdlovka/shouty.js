const assert = require('assert')
const { Given, When, Then } = require('@cucumber/cucumber')
const Coordinate = require('../../lib/coordinate')

const ARBITARY_MESSAGE = 'Hello, world'

Given('{word} is at {int}, {int}', function (name, x, y) {
  this.shouty.setLocation(name, new Coordinate(x, y))
})

Given('people are located at', function (dataTable) {
  dataTable.hashes().forEach(row => {
    this.shouty.setLocation(row.name, new Coordinate(row.x, row.y))
  })
})
