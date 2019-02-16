'use strict';

let count = 0;

function jsonp(url, {
  timeOut = 60000,
  param = 'callback',
  name = '__jp'
} = {}) {

  let timer = null;
  let script = null;
  let funcName = name + (count++);

  function clean() {
    if (script.parentNode) {
      script.parentNode.removeChild(script);
    }
    window[funcName] = noop;
    if (timer) {
      clearTimeout(timer);
    }
  }

  function noop() {}

  return new Promise((resolve, reject) => {
    url += (~url.indexOf('?') ? '&' : '?') + param + '=' + encodeURIComponent(funcName);

    const target = document.getElementsByTagName('script')[0] || document.head;
    /**
     * create script
     */
    script = document.createElement('script');
    script.src = url;
    target.parentNode.insertBefore(script, target);

    window[funcName] = (res) => {
      clean();
      resolve(res);
    }

    timer = setTimeout(() => {
      clean();
      reject(new Error('Request Timeout'));
    }, timeOut);
  })
}