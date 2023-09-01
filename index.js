/**
* @author      Nhatcoder
* @version     1.0.0
* @homeurl     https://github.com/nhatcoder2003/gbot
* @author_url     https://www.facebook.com/vuminhnhat10092003
*/
/**
* Vietnamese:
*- Vui lòng không xóa dòng này
*- Đây là động lực giúp tôi cung cấp nhưng sản miễn phí và chất lượng tới cộng đồng
*- Bất kỳ hành động sửa đổi nào sẽ ảnh hưởng tới mã nguồn hoặc dẫn tới bạn bị cấm sử dụng tiện ích dòng lệnh của alphabot
*- Bản quyền © 2023 Nhatcoder2k3
* -----------------------------------
* English:
*- Please do not delete this line
*- This is my motivation to provide free and quality products to the community
*- Any modification will affect the source code or lead to you being banned from using the alphabot command line utility
*- Copyright © 2023 Nhatcoder2k3
*/
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
import logo from './src/logo.js';
import ora from 'ora';

console.clear();


const _1_MINUTE = 60000;
let restartCount = 0;
logo();
async function main() {
  await update();
  await loadPlugins();
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
  logger.custom("Checking for updates...",
    "UPDATE");
  try {
    const res = await axios.get('https://raw.githubusercontent.com/nhatcoder2003/Gbot-War/main/package.json');

    const {
      version
    } = res.data;
    const currentVersion = JSON.parse(readFileSync('./package.json')).version;
    if (semver.lt(currentVersion, version)) {
      logger.warn(`New version available: ${version}`);
      logger.warn(`Current version: ${currentVersion}`);
      logger.warn('Vui lòng cập nhật lên phiên bản mới nhất bằng lệnh node update');
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