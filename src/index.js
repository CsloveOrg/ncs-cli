import ora from 'ora';
import program from 'commander';
import 'color';
import { version } from '../package.json';

const spinner = ora();
let fileName = '';
let filePath = '';

program
  .version(version, '-v --version')
  .arguments('<name> [path]')
  .action((name, path) => {
    fileName = name;
    filePath = path;
  });
program.parse(process.argv);
if (fileName === '') {
  spinner.color = 'yellow';
  spinner.fail('djaklfj');
}
