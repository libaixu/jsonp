# jsonp
simple、zero-configration jsonp

### install jsonp
```
npm i jsnop
```

### use

```js
import jsonp from 'jsonp'

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
