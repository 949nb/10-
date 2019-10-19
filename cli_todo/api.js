const homedir = require('os').homedir()
const Home = process.env.HOME || homedir
const path = require('path')// 处理文件路径的模块
const fs = require('fs')
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
module.exports.clear = () => {
  console.log(`清空待办事项`)
}