# g-jsonp
simple、zero-configration jsonp

### install jsonp
```js
npm i g-jsnop
```
~~**CDN** - https://unpkg.com/g-jsonp/release/main.js~~

### use

```js
import jsonp from 'g-jsonp'

jsonp(url, options, callback)
```

jsonp(url, options, callback)
- url(string)
- options(Object) **optional**
  - **timeout** request timeout(default 60000ms)
  - **param** url param callback name(default callback) example(http://example.com?callback=...)
  - **prefix** callback name prefix (default __jp) example(http://example.com?callback=__jp(number increase))
  - **name** callback name(default __jp(number increase)) example(http://example.com?callback=__jp(0|1|2|3...))
- callback(function)

The callback is called with ```err, data```

```js
jsonp('http://example.com', (err, data) => {
  if (err) {}
  if (data) {}
})
```

github(https://github.com/libaixu/jsonp)
