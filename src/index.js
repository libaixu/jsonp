'use strict';

/**
 * callback unique name
 */
let count = 0;

function noop() { }

/**
 * options = {
 *  timeout: 60000,
 *  param: 'callback',
 *  prefix: '__jp',
 *  name: prefix + (count++)
 * }
 */
function jsonp(url, options, fn) {
  if (typeof options === 'function') {
    fn = options;
    options = {}
  }
  if (!options) {
    options = {}
  }

  let timeout = options.timeout || 5000;
  let param = options.param || 'callback';
  let prefix = options.prefix || '__jp';
  let name = options.name || (prefix + (count++));
  let timer = null;
  let script = null;

  function clean() {
    if (script.parentNode) {
      script.parentNode.removeChild(script);
    }
    window[name] = noop;
    if (timer) {
      clearTimeout(timer);
    }
  }

  function cancel() {
    if (window[name]) {
      clean();
    }
  }

  if (timeout) {
    timer = setTimeout(() => {
      clean();
      if (fn) {
        fn(new Error('YOUR REQUEST TIMEOUT'));
      }
    }, timeout)
  }

  window[name] = (data) => {
    clean();
    if (fn) {
      fn(null, data);
    }
  }

  url += (~url.indexOf('?')) ? '&' : '?' + param + '=' + encodeURIComponent(name);

  const target = document.getElementsByTagName('script')[0] || document.head;
  script = document.createElement('script');
  script.src = url;
  target.parentNode.insertBefore(script, target);
  return cancel;
}

module.exports = jsonp;
