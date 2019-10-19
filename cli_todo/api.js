const homedir = require('os').homedir()
const Home = process.env.HOME || homedir

module.exports.add = (title) => {
  console.log(title)
  console.log(Home)
}
module.exports.clear = () => {
  console.log(`清空待办事项`)
}