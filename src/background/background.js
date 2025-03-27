import * as browser from 'webextension-polyfill';
import '../utils/emoji-log';

// 添加调试开关
const DEBUG = {
  enabled: false  // 生产环境默认关闭
};

// 添加调试日志函数
function debugLog(...args) {
  if (DEBUG.enabled) {
    console.log(...args);
  }
}

function debugGroup(...args) {
  if (DEBUG.enabled) {
    console.group(...args);
  }
}

function debugGroupEnd() {
  if (DEBUG.enabled) {
    console.groupEnd();
  }
}

function debugTable(...args) {
  if (DEBUG.enabled) {
    console.table(...args);
  }
}

// 添加获取本地化消息的辅助函数
function getMessage(messageName, substitutions = null) {
    return browser.i18n.getMessage(messageName, substitutions);
}

// 配置常量
const CONFIG = {
  TIMEOUT: {
    DEFAULT: 15000,    
    MIN: 5000,         
    MAX: 30000         
  }
};

// 添加 onInstalled 事件监听器
browser.runtime.onInstalled.addListener((details) => {
  console.emoji('🦄', 'onInstalled....');
  // 仅在首次安装时打开页面
  if (details.reason === 'install') {
    browser.tabs.create({
      url: browser.runtime.getURL('./src/options/index.html')
    });
  }
});

// 保留原有的 action 点击事件
browser.action.onClicked.addListener((tab) => {
  console.emoji('🦄', 'onClicked....');
});

browser.runtime.onMessage.addListener((_request, _sender, _sendResponse) => {
  // Do something with the message!
  // alert(request.url);

  // And respond back to the sender.
  return Promise.resolve('got your message, thanks!');
});

