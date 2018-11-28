import ora from 'ora';
import program from 'commander';
import 'color';
import { version } from '../package.json';
import { execCommandFile } from './utils';

const spinner = ora('正在创建ing...').start();
let fileName = '';
// let filePath = '';
const reg = [/.vue$/];

program
  .version(version, '-v --version')
  .arguments('<name> [path]')
  .action((name, path) => {
    fileName = name;
    // filePath = path;
  });
program.parse(process.argv);
if (fileName === '') {
  spinner.fail('请至少提供一个文件名称哟～');
} else {
  reg.forEach((i) => {
    if (i.test(fileName)) {
      execCommandFile(fileName);
    }
  });
}
// if (existsSync(resolve(__dirname, `command/${filename}.js`)))
// spinner.succeed('创建成功');
