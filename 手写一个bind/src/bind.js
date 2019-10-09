function bind(asThis, ...args) {
  // 这个bind是在函数的原型上的方法，所以只能是一个函数来调用这个bind
  // 所以这里的this一定是一个函数
  let fn = this // <== this 是一个函数

  if(typeof fn !== 'function') {
    throw new Error("bind 必须调用在数组的身上！")
  }

  // bind返回一个函数 bind的第一个参数就是这个函数的this，其余的参数就当作返回函数的参数。
  // 调用bind之后，返回的新函数还可以接受参数，不影响调用
  return function (...args2) {
    return fn.call(asThis, ...args, ...args2)
  }
}
module.exports = bind