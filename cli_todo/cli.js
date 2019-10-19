const program = require('commander');
const api = require('./api.js')


program
  .option('-x, --xxx', '我的xxx')
  .version('0.1.0')

program
  .command('add')
  .description('add 方法可以添加任务')
  .action((...args) => {
    args.splice(args.length - 1, 1)
    let work = args.join(',')
    api.add(work)
  });

program
  .command('clear')
  .description('清空你的待办列表')
  .action(() => {
    api.clear()
  });

program.parse(process.argv);

if(process.argv.length === 2) {
  api.showAll()
}