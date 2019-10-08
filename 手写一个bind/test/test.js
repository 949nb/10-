const Bind = require('../src/bind')

console.log(Bind)

Function.prototype.bind2 = Bind
let fn = function() {
  return this
}

let fn1 = fn.bind({"name": "blandly"}, 1, 2)
console.assert(fn.bind2,"bind2是否存在", "1")
console.assert(fn1().name === "blandly", "2")
console.assert()
