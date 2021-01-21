class Coordinate {
  constructor(x, y) {
    this.x = x
    this.y = y
  }

  distanceFrom(other) {
    const dX = Math.abs(this.x - other.x);
    const dY = Math.abs(this.y - other.y);
    return Math.hypot(dX, dY);
  }
}

module.exports = Coordinate
