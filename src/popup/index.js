import * as browser from 'webextension-polyfill';
import '../utils/emoji-log';

import './index.scss';

function openWebPage(url) {
  return browser.tabs.create({url});
}

document.addEventListener('DOMContentLoaded', async () => {
  const tabs = await browser.tabs.query({
    active: true,
    lastFocusedWindow: true,
  });

  const url = tabs.length && tabs[0].url;

  const response = await browser.runtime.sendMessage({
    msg: 'hello',
    url,
  });

  console.emoji('🦄', response);

  document.getElementById('github__button').addEventListener('click', () => {
    return openWebPage(
      'https://github.com/waahah/VExt'
    );
  });

  document.getElementById('donate__button').addEventListener('click', () => {
    return openWebPage('https://www.waahah.xyz/about');
  });

  document.getElementById('options__button').addEventListener('click', () => {
    return openWebPage(browser.runtime.getURL('./src/options/index.html'));
  });
});
