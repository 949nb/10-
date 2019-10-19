const homedir = require('os').homedir()
const Home = process.env.HOME || homedir
const path = require('path')// 处理文件路径的模块
const fs = require('fs')

const dbPath = path.join(Home, '.todo')//dbPath 放在家目录下的todo文件下

module.exports.add = (title) => {
  // 读取之前的任务 - 往里面添加一个title任务 - 储存到文件
  fs.readFile(dbPath, {flag: 'a+'}, (err, data) => {// flag: 'a+' 如果没有这个文件 就创建这个文件并且帮我在追加内容
    if(!err) {
      let list
      try {
        list = JSON.parse(data.toString())
      } catch(error2) {
        list = []
      }
      let task = {
        title : title,
        done: false
      }
      list.push(task)
      let string = JSON.stringify(list)
      fs.writeFile(dbPath, string, (error) => console.log(error))
    } else {
      console.log(err);
    }
  })
}
module.exports.clear = () => {
  console.log(`清空待办事项`)
}