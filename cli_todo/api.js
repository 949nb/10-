const db = require('./db.js')

module.exports.add = async (title) => {
  // 读取之前的任务
  let list = await db.read()
  // 往里面push新添加的任务
  let task = { title, done: false }
  list.push(task)
  // 储存到文件
  await db.write(list)
}

module.exports.clear = async () => {
  await db.write([]).then(() => {console.log('清除成功')})
}

module.exports.showAll = async () => {
  let list = await db.read()
  list.forEach((task, index) => {
    console.log(`${task.done ? '[X]' : '[_]'} ${index + 1} - ${task.title}`)
  })
}