
let callback = function() { console.log('假装我是异步/同步函数') }

function 节流函数(fn, time) {
  let 门 = true
  return function() {
    if(门) {
      fn.call()
      门 = false
      setTimeout(() => {
        门 = true
      }, time)
    }
  }
}

button.onclick(function() {
  if (timer) {
    window.clearTimeout(timer)
  }
  let timer = setTimeout(() => {
    console.log('我是防抖函数')
  }, 2000)
})



