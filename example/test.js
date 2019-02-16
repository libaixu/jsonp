import jsonp from '../src/index';

jsonp('http://127.0.0.1:5000', {param: 'jsonpCallback'}, (err, res) => {
  if (err) {
    console.log(err);
  }
  if (res) {
    console.log(res.data);
  }
})
