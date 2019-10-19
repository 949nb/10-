const db = require('./db.js')
const inquirer = require('inquirer')

module.exports.add = async (title) => {
  // 读取之前的任务
  let list = await db.read()
  // 往里面push新添加的任务
  let task = { title, done: false }
  list.push(task)
  // 储存到文件
  await db.write(list).then(() => {console.log('添加成功')})
}

module.exports.clear = async () => {
  await db.write([]).then(() => {console.log('清除成功')})
}

module.exports.showAll = async () => {
  let list = await db.read()
  inquirer
    .prompt({
      type: 'list',
      name: 'name',
      message: '请选择你想要操作的选项',
      choices: [{name: '[_] 退出', value: '-1'}, ...list.map((task, index) => {
        console.log(task)
        return {name: `${task.done ? '[X]' : '[_]'}   ${index + 1} - ${task.title}`, value: index.toString()}
      }), {name: '[_] 新建任务', value: '-2'}]
    })
    .then(answers => {
      let index = parseInt(answers.name)
      if(index >= 0) {
        // 选中了一个操作
        inquirer.prompt({
          type: 'list',
          name: 'action',
          message: '请选择操作',
          choices: [
            {name: '退出', value: 'quit'},
            {name: '已完成', value: 'markAsDone'},
            {name: '未完成', value: 'markAsUndone'},
            {name: '改标题', value: 'updateTitle'},
            {name: '删除', value: 'remove'},
          ]
        }).then((answers2) => {
          switch(answers2.action) {
            case 'quit':
              break;
            case 'markAsDone':
              list[index].done = true
              db.write(list).then(res => {console.log(`已完成 <${list[index].title}>`)})
              break;
            case 'markAsUndone':
              list[index].done = false
              db.write(list).then(res => {console.log(`已经将 <${list[index].title}> 标记为未完成`)})
              break;
            case 'updateTitle':
              inquirer.prompt({
                type: 'input',
                name: 'title',
                message: '请输入您想要的标题',
                default: list[index].title
              }).then(res => {
                list[index].title = res.title
                db.write(list)
              })
              break;
            case 'remove': 
              list.splice(index, 1)
              db.write(list)
          }
        })
      }
      if(index === -2) {
        // 创建任务
        inquirer.prompt({
          type: 'input',
          name: 'title',
          message: '请输入任务名称',
        }).then(res => {
          list.push({
            title: res.title,
            done: false
          })
          db.write(list)
        })
      }
    });
}