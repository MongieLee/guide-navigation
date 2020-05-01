// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"epB2":[function(require,module,exports) {
var $lastLi = $('#addSite');
var xObject = JSON.parse(localStorage.getItem('x'));
var hashMap = xObject || [{
  logo: 'B',
  url: 'https://www.bilibili.com'
}, {
  logo: 'W',
  url: 'https://wallhaven.cc/'
}, {
  logo: 'T',
  url: 'https://taobao.com/'
}, {
  logo: 'J',
  url: 'https://jd.com'
}, {
  logo: 'I',
  url: 'https://iqiyi.com'
}];

function rander() {
  $('.site-list').find('li:not(#addSite)').remove();
  hashMap.map(function (node, index) {
    var $li = $("<li>\n        <div class=\"site\">\n            <div class='icon-wrapper'>\n                ".concat(node.logo, "\n            </div>\n            <div class=\"link\">\n                ").concat(removePrefix(node.url), "\n            </div>\n            <div class='close'>\n                <svg class=\"icon\">\n                    <use xlink:href=\"#icon-remove\"></use>\n                </svg>\n            </div>\n        </div>\n    </li>")).insertBefore($lastLi);
    $li.on('click', function () {
      window.open(node.url);
    });
    $li.on('click', '.close', function (e) {
      e.stopPropagation(); //阻止事件冒泡

      hashMap.splice(index, 1);
      rander();
    });
  });
}

var removePrefix = function removePrefix(url) {
  return url.replace('https://', '').replace('http://', '').replace('www.', '').replace(/\/.*/, ''); //删除/开头的内容
};

rander();
$('#addSite').on('click', function () {
  var inputUrl = window.prompt('Please enter site\'s url：').trim();

  if (inputUrl.indexOf('http') !== 0) {
    inputUrl = 'https://' + inputUrl;
  }

  hashMap.push({
    logo: removePrefix(inputUrl)[0].toUpperCase(),
    url: inputUrl
  });
  rander();
});

window.onbeforeunload = function () {
  var string = JSON.stringify(hashMap); //对象转为字符串

  localStorage.setItem('x', string);
}; // $(document).on('keypress',(e)=>{ //只能打开一个匹配到到第一个网址，待优化
//     let {key} = e
//     hashMap.map((node,index)=>{
//         if(hashMap[index].logo.toLocaleLowerCase() === key){
//             window.open(node.url)
//         }
//     })
// })
},{}]},{},["epB2"], null)
//# sourceMappingURL=main.0226f0f3.js.map