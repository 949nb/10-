button.onclick(function() {
  let switch1 = true
  if(action) {
    switch1 = false
    let timer = setTimeout(() => {
      console.log('我是节流函数')
      switch1 = true
    }, 2000)
  }
})

button.onclick(function() {
  if (timer) {
    window.clearTimeout(timer)
  }
  let timer = setTimeout(() => {
    console.log('我是防抖函数')
  }, 2000)
})



