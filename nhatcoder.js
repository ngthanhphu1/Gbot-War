
import {
  readFileSync,
  writeFileSync,
  existsSync,
  statSync
} from 'fs';
import {
  spawn,
  execSync
} from 'child_process';
import semver from 'semver';
import axios from 'axios';
import {} from 'dotenv/config';
import logger from './src/core/helpers/console.js';
import loadPlugins from './src/core/helpers/installDep.js';
import environments from './src/core/helpers/environments.get.js';
import Banner from './src/Banner.js';
import Sleep from './src/Sleep.js';
import ora from 'ora';
import chalk from 'chalk';
console.clear();


const _1_MINUTE = 60000;
let restartCount = 0;
Banner();
async function main() {

  //update_loading.stop();
  await update();
  await loadPlugins();
  const loading = ora(chalk.bold.hex('#3c8da3').bold('»[•STARTING•]« ') + 'STARTING PROJECT').start();
  Sleep(10000);
  loading.stop();
  const child = spawn('node', ['--trace-warnings', '--experimental-import-meta-resolve', '--expose-gc', 'src/nhatcoder.js'], {
    cwd: process.cwd(),
    stdio: 'inherit',
    env: process.env
  });

  child.on("close", async (code) => {
    handleRestartCount();
    if (code !== 0 && restartCount < 5) {
      console.log();
      logger.error(`An error occurred with exit code ${code}`);
      logger.warn("Đang khởi động lại...");
      await new Promise(resolve => setTimeout(resolve, 2000));
      main();
    } else {
      console.log();
      logger.error("Gbot has stopped, press Ctrl + C to exit.");
    }
  });
};
async function update() {
  //const update_loading = ora(chalk.bold.hex('#3c8da3').bold('»[•UPDATE•]« ') + 'Checking update new version...').start();
  //Sleep(3000);
  //update_loading.stop();
  try {
    const res = await axios.get('https://raw.githubusercontent.com/nhatcoder2003/Gbot-War/main/package.json');
    //const res
    const {
      version
    } = res.data;
    const currentVersion = JSON.parse(readFileSync('./package.json')).version;
    if (semver.lt(currentVersion, version)) {
      logger.warn(`New version available: ${version}`);
      logger.warn(`Current version: ${currentVersion}`);
      logger.error('Vui lòng cập nhật lên phiên bản mới nhất để sử dụng bot');
      process.exit();
    } else {
      logger.custom("No updates available.", "UPDATE");
    }
  } catch (err) {
    logger.error('Failed to check for updates.');
  }
}

function handleRestartCount() {
  restartCount++;
  setTimeout(() => {
    restartCount--;
  }, _1_MINUTE);
}

main();