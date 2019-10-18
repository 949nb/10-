const program = require('commander');

program
  .option('-x, --xxx', '我的xxx')

program
  .version('0.1.0')
  .command('add')
  .description('add 方法可以添加任务名')
  .action((...args) => {
    console.log(`我添加了 => ${args}`)
  });
  
program.parse(process.argv);