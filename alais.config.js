/**
 * 解决IDEA中vue项目@路径不能跳转到对应资源
 * https://blog.csdn.net/mynameisjinxiaokai/article/details/120232471?utm_medium=distribute.pc_relevant.none-task-blog-2~default~baidujs_title~default-1.no_search_link&spm=1001.2101.3001.4242.2
 */

'use script'

const path = require('path');

function resolve(dir) {
  return path.join(__dirname, dir);
}

module.exports = {
  resolve: {
    alias: {
      '@': resolve('src')
    }
  }
};
