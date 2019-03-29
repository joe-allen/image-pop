// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

// eslint-disable-next-line no-global-assign
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

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
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
  return newRequire;
})({"../../../../../.config/yarn/global/node_modules/parcel-bundler/src/builtins/bundle-url.js":[function(require,module,exports) {
var bundleURL = null;

function getBundleURLCached() {
  if (!bundleURL) {
    bundleURL = getBundleURL();
  }

  return bundleURL;
}

function getBundleURL() {
  // Attempt to find the URL of the current script and use that as the base URL
  try {
    throw new Error();
  } catch (err) {
    var matches = ('' + err.stack).match(/(https?|file|ftp):\/\/[^)\n]+/g);

    if (matches) {
      return getBaseURL(matches[0]);
    }
  }

  return '/';
}

function getBaseURL(url) {
  return ('' + url).replace(/^((?:https?|file|ftp):\/\/.+)\/[^/]+$/, '$1') + '/';
}

exports.getBundleURL = getBundleURLCached;
exports.getBaseURL = getBaseURL;
},{}],"../../../../../.config/yarn/global/node_modules/parcel-bundler/src/builtins/css-loader.js":[function(require,module,exports) {
var bundle = require('./bundle-url');

function updateLink(link) {
  var newLink = link.cloneNode();

  newLink.onload = function () {
    link.remove();
  };

  newLink.href = link.href.split('?')[0] + '?' + Date.now();
  link.parentNode.insertBefore(newLink, link.nextSibling);
}

var cssTimeout = null;

function reloadCSS() {
  if (cssTimeout) {
    return;
  }

  cssTimeout = setTimeout(function () {
    var links = document.querySelectorAll('link[rel="stylesheet"]');

    for (var i = 0; i < links.length; i++) {
      if (bundle.getBaseURL(links[i].href) === bundle.getBundleURL()) {
        updateLink(links[i]);
      }
    }

    cssTimeout = null;
  }, 50);
}

module.exports = reloadCSS;
},{"./bundle-url":"../../../../../.config/yarn/global/node_modules/parcel-bundler/src/builtins/bundle-url.js"}],"scss/components/imagePop.scss":[function(require,module,exports) {
var reloadCSS = require('_css_loader');

module.hot.dispose(reloadCSS);
module.hot.accept(reloadCSS);
},{"_css_loader":"../../../../../.config/yarn/global/node_modules/parcel-bundler/src/builtins/css-loader.js"}],"js/components/imagePop.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("../../scss/components/imagePop.scss");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var imagePop =
/*#__PURE__*/
function () {
  function imagePop(props) {
    _classCallCheck(this, imagePop);

    if (props.componentName != undefined) {
      this.componentName = props.componentName;
    }
  }

  _createClass(imagePop, [{
    key: "pop",
    value: function pop(img, shadow, event) {
      // set variables
      var winWidth = window.innerWidth;
      var winHeight = window.innerHeight;
      var imgNaturalWidth = event.target.naturalWidth;
      var imgNaturalHeight = event.target.naturalHeight;
      var posImg = event.target.getBoundingClientRect();
      var imgPortrait = false;
      var poppedImgWidth = imgNaturalWidth > winWidth ? winWidth - 100 : imgNaturalWidth;
      var poppedImgHeight = imgNaturalHeight > winHeight ? winHeight - 500 : imgNaturalHeight;
      img.classList.add('invisible');
      shadow.classList.remove('hide');
      document.getElementsByTagName('body')[0].style.overflow = 'hidden';

      if (imgNaturalHeight > winHeight) {
        imgPortrait = false;
        poppedImgWidth = winHeight * .5;
      } // set img left corner position


      var goToLeft = (winWidth - poppedImgWidth) / 2;
      var css = "\n      .isPoppedImg {\n        position: fixed;\n        width: ".concat(img.offsetWidth, "px;\n        height: ").concat(img.offsetHeight, "px;\n        top: ").concat(posImg.top, "px;\n        left: ").concat(posImg.left, "px;\n        animation: pop;\n        animation-duration: 500ms;\n        animation-iteration-count: 1;\n        animation-fill-mode: forwards;\n        opacity: 1;\n      }\n      @keyframes pop {\n        0% {\n          position: fixed;\n          width: ").concat(imgPortrait ? 'auto' : img.offsetWidth + 'px', ";\n          height: ").concat(imgPortrait ? img.offsetHeight + 'px' : 'auto', ";\n          top: ").concat(posImg.top, "px;\n          left: ").concat(posImg.left, "px;\n        }\n        100% {\n          transform: scale(1.4);\n          position: fixed;\n          width: ").concat(imgPortrait ? 'auto' : poppedImgWidth + 'px', ";\n          height: ").concat(imgPortrait ? poppedImgHeight + 'px' : 'auto', ";\n          margin: 100px auto;\n          left: ").concat(goToLeft, "px;\n          top: 4em;\n        }\n      }\n      @media screen and (max-width: 540px) {\n        @keyframes pop {\n          0% {\n            opacity: 0;\n            position: fixed;\n            width: ").concat(imgPortrait ? 'auto' : img.offsetWidth + 'px', ";\n            height: ").concat(imgPortrait ? img.offsetHeight + 'px' : 'auto', ";\n            top: ").concat(posImg.top, "px;\n            left: ").concat(posImg.left, "px;\n          }\n          25% {\n            opacity: .5;\n          }\n          50% {\n            opacity: 1;\n          }\n          100% {\n            position: fixed;\n            width: ").concat(imgPortrait ? 'auto' : poppedImgWidth + 'px', ";\n            height: ").concat(imgPortrait ? poppedImgHeight + 'px' : 'auto', ";\n            margin: 100px auto;\n            left: ").concat(goToLeft, "px;\n            top: 4em;\n          }\n        }\n      }\n    "); // let shadowElement = document.getElementsByClassName('imagePop_shadowElement')[0];

      shadow.insertAdjacentHTML('beforeend', "\n\n      <div class=\"imagePop_shadowElement--container\">\n\n        <!--  show pop image -->\n        <div class=\"imagePop_shadowElement--img\">\n          <img src=\"".concat(img.src, "\" class=\"img isPoppedImg\">\n        </div>\n\n\n        <!--  show pop title / text -->\n        <div class=\"imagePop_shadowElement--text ").concat(img.dataset.title == undefined || img.dataset.text == undefined ? 'hide' : '', "\">\n          <div class=\"imagePop_shadowElement_inner\">\n            <h3 class=\"").concat(img.dataset.title == undefined ? 'hide' : '', "\">").concat(img.dataset.title, "</h3>\n            <p class=\"").concat(img.dataset.text == undefined ? 'hide' : '', "\">").concat(img.dataset.text, "</p>\n          </div>\n        </div>\n      </div>\n    ")); // insert styles on <head>

      var head = document.head || document.getElementsByTagName('head')[0];
      var style = document.createElement('style');
      head.appendChild(style);
      style.type = 'text/css';

      if (style.styleSheet) {
        // This is required for IE8 and below.
        style.styleSheet.cssText = css;
      } else {
        style.appendChild(document.createTextNode(css));
      }
    }
  }, {
    key: "close",
    value: function close(image, shadow) {
      // close imagePop
      shadow.classList.add('hide');
      image.classList.remove('invisible');
      document.getElementsByTagName('body')[0].style.overflow = 'initial';
    }
  }, {
    key: "getElements",
    value: function getElements(images, closes, shadowImages) {
      // store elements
      var elementArr = []; // loop over images

      for (var i = 0; i < closes.length; i++) {
        var obj = {}; // add event listener to img

        images[i].addEventListener('click', this.pop.bind(this, images[i], shadowImages[i]), false);
        closes[i].addEventListener('click', this.close.bind(this, images[i], shadowImages[i]), false);
        obj.image = images[i];
        obj.close = closes[i];
        obj.shadowImage = shadowImages[i];
        elementArr.push(obj);
      }

      return elementArr;
    }
  }, {
    key: "init",
    value: function init() {
      this._cache = {}; // listen form close event

      if (this.componentName != undefined) {
        // cache images
        var images = document.getElementsByClassName("".concat(this.componentName));
        var closes = document.getElementsByClassName("".concat(this.componentName, "--close"));
        var shadowImages = document.getElementsByClassName("".concat(this.componentName, "_shadowElement"));
        this._cache = this.getElements(images, closes, shadowImages); // listen for resize
        // close open imgs

        window.addEventListener('resize', function () {
          // loop over images
          for (var i = 0; i < closes.length; i++) {
            // add 'hide' if window resized
            if (!shadowImages[i].classList.contains('hide')) {
              shadowImages[i].classList.add('hide');
              images[i].classList.remove('invisible');
              document.getElementsByTagName('body')[0].style.overflow = 'initial';
            }
          }
        });
      }
    }
  }]);

  return imagePop;
}();

var _default = imagePop;
exports.default = _default;
},{"../../scss/components/imagePop.scss":"scss/components/imagePop.scss"}],"js/app.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _imagePop = _interopRequireDefault(require("./components/imagePop"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var App =
/*#__PURE__*/
function () {
  function App(components) {
    _classCallCheck(this, App);

    this.imagePop = components.imagePop;
  }

  _createClass(App, [{
    key: "init",
    value: function init() {
      var _this = this;

      var props = {}; // wait for DOM to load

      window.addEventListener('DOMContentLoaded', function () {
        if (_this.imagePop) {
          // TODO: find way to make componentName dynamic
          props.componentName = 'imagePop';
          var pop = new _imagePop.default(props);
          pop.init();
        }
      });
    }
  }]);

  return App;
}();

var _default = App;
exports.default = _default;
},{"./components/imagePop":"js/components/imagePop.js"}],"main.js":[function(require,module,exports) {
"use strict";

var _app = _interopRequireDefault(require("./js/app"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

if (typeof lf_components !== "undefined") {
  var app = new _app.default(lf_components);
  app.init();
}
},{"./js/app":"js/app.js"}],"../../../../../.config/yarn/global/node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
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
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "62065" + '/');

  ws.onmessage = function (event) {
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      console.clear();
      data.assets.forEach(function (asset) {
        hmrApply(global.parcelRequire, asset);
      });
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          hmrAccept(global.parcelRequire, asset.id);
        }
      });
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

function hmrAccept(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAccept(bundle.parent, id);
  }

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

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAccept(global.parcelRequire, id);
  });
}
},{}]},{},["../../../../../.config/yarn/global/node_modules/parcel-bundler/src/builtins/hmr-runtime.js","main.js"], null)
//# sourceMappingURL=/main.1f19ae8e.map