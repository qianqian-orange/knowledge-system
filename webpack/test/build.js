(function (modules) {
  let cache = {};
  let require = function (name) {
    if (cache[name]) {
      return cache[name].exports;
    }
    let module = cache[name] = {
      exports: {}
    };
    modules[name](module, module.exports, require);
    return module.exports;
  }

  require('main');
}) ({
  'main': function (module, exports, require) {
    let { add } = require('./a.js');
    console.log(add(1, 2));
    let { square } = require('./square.js');
    console.log(square(10));
  },
  './a.js': function (module, exports, require) {
    console.log('a module');
    module.exports = {
      add: function (a, b) {
        return a + b;
      }
    };
  },
  './square.js': function (module, exports, require) {
    let { parseInt } = require('./c.js');
    console.log('square module');
    module.exports = {
      square: function (n) {
        return parseInt(n, 10);
      }
    }
  },
  './c.js': function (module, exports, require) {
    console.log('c module');
    module.exports = {
      parseInt: Number.parseInt
    }
  }
});