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
})({"lib/numberWordMappings.ts":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.numberWordMapping = void 0;
exports.numberWordMapping = [{
  number: 1000000,
  value: "Million"
}, {
  number: 1000,
  value: "Thousand"
}, {
  number: 100,
  value: "Hundred"
}, {
  number: 90,
  value: "Ninety"
}, {
  number: 80,
  value: "Eighty"
}, {
  number: 70,
  value: "Seventy"
}, {
  number: 60,
  value: "Sixty"
}, {
  number: 50,
  value: "Fifty"
}, {
  number: 40,
  value: "Forty"
}, {
  number: 30,
  value: "Thirty"
}, {
  number: 20,
  value: "Twenty"
}, {
  number: 19,
  value: "Nineteen"
}, {
  number: 18,
  value: "Eighteen"
}, {
  number: 17,
  value: "Seventeen"
}, {
  number: 16,
  value: "Sixteen"
}, {
  number: 15,
  value: "Fifteen"
}, {
  number: 14,
  value: "Fourteen"
}, {
  number: 13,
  value: "Thirteen"
}, {
  number: 12,
  value: "Twelve"
}, {
  number: 11,
  value: "Eleven"
}, {
  number: 10,
  value: "Ten"
}, {
  number: 9,
  value: "Nine"
}, {
  number: 8,
  value: "Eight"
}, {
  number: 7,
  value: "Seven"
}, {
  number: 6,
  value: "Six"
}, {
  number: 5,
  value: "Five"
}, {
  number: 4,
  value: "Four"
}, {
  number: 3,
  value: "Three"
}, {
  number: 2,
  value: "Two"
}, {
  number: 1,
  value: "One"
}, {
  number: 0,
  value: "Zero"
}];
},{}],"lib/toFixed.ts":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.toFixed = void 0;

function toFixed(number) {
  return Number(Number(number).toFixed(2));
}

exports.toFixed = toFixed;
},{}],"lib/isFloat.ts":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isFloat = void 0;

function isFloat(n) {
  return Number(n) === n && n % 1 !== 0;
}

exports.isFloat = isFloat;
},{}],"lib/index.ts":[function(require,module,exports) {
"use strict";

var __createBinding = this && this.__createBinding || (Object.create ? function (o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  Object.defineProperty(o, k2, {
    enumerable: true,
    get: function get() {
      return m[k];
    }
  });
} : function (o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  o[k2] = m[k];
});

var __exportStar = this && this.__exportStar || function (m, exports) {
  for (var p in m) {
    if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
  }
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

__exportStar(require("./numberWordMappings"), exports);

__exportStar(require("./toFixed"), exports);

__exportStar(require("./isFloat"), exports);
},{"./numberWordMappings":"lib/numberWordMappings.ts","./toFixed":"lib/toFixed.ts","./isFloat":"lib/isFloat.ts"}],"ConvertToWords.ts":[function(require,module,exports) {
"use strict";

var __spreadArray = this && this.__spreadArray || function (to, from) {
  for (var i = 0, il = from.length, j = to.length; i < il; i++, j++) {
    to[j] = from[i];
  }

  return to;
};

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.convertNumToCurrency = void 0;

var lib_1 = require("./lib");

document.addEventListener("DOMContentLoaded", function () {
  var convertButton = document.getElementById("convertBtn");
  var resultContainer = document.getElementById("resultContainer");
  convertButton.addEventListener("click", function () {
    var convertNumber = document.getElementById("convertInput");
    var result = convertNumToCurrency(Number(convertNumber.value));
    resultContainer.textContent = result;
  });
});

function convertNumToCurrency(number) {
  if (number < 0) return "Negative numbers are not supported";
  if (number === 0) return "Zero";
  var splitNumber = String(lib_1.toFixed(number)).split(".");

  var words = __spreadArray([], handleConvert(Number(splitNumber[0])));

  Number(splitNumber[0]) === 1 ? words.push("Dollar") : words.push("Dollars"); // Check if input number contains decimals

  var isFloatingNumber = lib_1.isFloat(number);

  if (isFloatingNumber) {
    words.push("and");
    words.push.apply(words, handleConvert(Number(splitNumber[1])));
    words.push("Cents");
  }

  return words.join(" ");
}

exports.convertNumToCurrency = convertNumToCurrency;

function handleConvert(number) {
  var words = [];
  if (number === 0) return ["Zero"];
  var wordMatch = lib_1.numberWordMapping.find(function (elem) {
    return Number(number) >= elem.number;
  });
  var matchValue = wordMatch.value; // quotient dividing inputted # by matched number

  var quotient = Math.floor(number / wordMatch.number); // Remaining value i.e. 33 % 30 === 1.1

  var remaining = number % wordMatch.number;

  if (quotient === 1) {
    /*
      When a number is a power of 10 and starts with 1 (i.e. 100 or 1000) just the Hundred or Thousand value is returned. To resolve this, we check if
      A. the word match value is a power of 10
      B. the number starts with a 1
      C. Word match is either Hundred, Thousand or Million
           If both statements are correct, we call the handleConvert function again
    */
    if (Number(wordMatch.number) % 10 === 0 && (matchValue === "Hundred" || matchValue === "Thousand" || matchValue === "Million")) {
      var firstNumber = Number(String(number)[0]);

      if (firstNumber === 1) {
        words.push.apply(words, handleConvert(firstNumber));
      }
    }

    words.push(matchValue);
  } else {
    words.push.apply(words, __spreadArray(__spreadArray([], handleConvert(quotient)), [matchValue]));
  } // Recursion: Re-run handleConvert function with remaining value


  if (remaining > 0) words.push.apply(words, handleConvert(remaining));
  return words;
}
},{"./lib":"lib/index.ts"}],"../node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "52771" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["../node_modules/parcel-bundler/src/builtins/hmr-runtime.js","ConvertToWords.ts"], null)
//# sourceMappingURL=/ConvertToWords.69d6fdc4.js.map