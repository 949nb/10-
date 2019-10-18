function deepClone(foo) {
  let temp = {}
  if (foo instanceof Object) {
    for (let item of foo) {
      temp[item] = foo[item]
    }

  }
  return foo
}

module.exports = deepClone