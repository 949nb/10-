const homedir = require('os').homedir()
const Home = process.env.HOME || homedir
const path = require('path')// 处理文件路径的模块
const fs = require('fs')

const dbPath = path.join(Home, '.todo')//dbPath 放在家目录下的todo文件下

const db = {
  read(path = dbPath) {
    return new Promise((resolve, reject) => {
      fs.readFile(path, {flag: 'a+'}, (err, data) => {//flag: 'a+' 如果没有这个文件 就创建这个文件并且帮我在追加内容
        if(!err) {
          let list
          try {
            list = JSON.parse(data.toString())
          } catch (error2) {
            list = []
          }
          resolve(list)
        } else {
          reject(err)
        }
      })
    })
  },
  write(list, path = dbPath) {
    return new Promise((resolve, reject) => {
     let string = JSON.stringify(list)
     fs.writeFile(path, string, (error) => {
       if(error) return reject(error)
       resolve()
     })
    })
  }
}


module.exports = db