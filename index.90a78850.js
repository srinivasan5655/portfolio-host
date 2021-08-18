// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function(modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
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

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x) {
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
  newRequire.register = function(id, exports) {
    modules[id] = [
      function(require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function() {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function() {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"2E6dP":[function(require,module,exports) {
var HMR_HOST = null;
var HMR_PORT = 1234;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d751713988987e9331980363e24189ce";
module.bundle.HMR_BUNDLE_ID = "77ebcc87290b264bf8b8f87990a78850";
// @flow
/*global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE*/
/*::
import type {
HMRAsset,
HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
(string): mixed;
cache: {|[string]: ParcelModule|};
hotData: mixed;
Module: any;
parent: ?ParcelRequire;
isParcelRequire: true;
modules: {|[string]: [Function, {|[string]: string|}]|};
HMR_BUNDLE_ID: string;
root: ParcelRequire;
}
interface ParcelModule {
hot: {|
data: mixed,
accept(cb: (Function) => void): void,
dispose(cb: (mixed) => void): void,
// accept(deps: Array<string> | string, cb: (Function) => void): void,
// decline(): void,
_acceptCallbacks: Array<(Function) => void>,
_disposeCallbacks: Array<(mixed) => void>,
|};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
*/
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;
function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || (function () {}));
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = undefined;
}
module.bundle.Module = Module;
var checkedAssets, /*: {|[string]: boolean|}*/
acceptedAssets, /*: {|[string]: boolean|}*/
/*: {|[string]: boolean|}*/
assetsToAccept;
function getHostname() {
  return HMR_HOST || (location.protocol.indexOf('http') === 0 ? location.hostname : 'localhost');
}
function getPort() {
  return HMR_PORT || location.port;
}
// eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = getHostname();
  var port = getPort();
  var protocol = HMR_SECURE || location.protocol == 'https:' && !(/localhost|127.0.0.1|0.0.0.0/).test(hostname) ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + (port ? ':' + port : '') + '/');
  // $FlowFixMe
  ws.onmessage = function (event) /*: {data: string, ...}*/
  {
    checkedAssets = {
      /*: {|[string]: boolean|}*/
    };
    acceptedAssets = {
      /*: {|[string]: boolean|}*/
    };
    assetsToAccept = [];
    var data = /*: HMRMessage*/
    JSON.parse(event.data);
    if (data.type === 'update') {
      // Remove error overlay if there is one
      removeErrorOverlay();
      let assets = data.assets.filter(asset => asset.envHash === HMR_ENV_HASH);
      // Handle HMR Update
      var handled = false;
      assets.forEach(asset => {
        var didAccept = asset.type === 'css' || asset.type === 'js' && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
        if (didAccept) {
          handled = true;
        }
      });
      if (handled) {
        console.clear();
        assets.forEach(function (asset) {
          hmrApply(module.bundle.root, asset);
        });
        for (var i = 0; i < assetsToAccept.length; i++) {
          var id = assetsToAccept[i][1];
          if (!acceptedAssets[id]) {
            hmrAcceptRun(assetsToAccept[i][0], id);
          }
        }
      } else {
        window.location.reload();
      }
    }
    if (data.type === 'error') {
      // Log parcel errors to console
      for (let ansiDiagnostic of data.diagnostics.ansi) {
        let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
        console.error('🚨 [parcel]: ' + ansiDiagnostic.message + '\n' + stack + '\n\n' + ansiDiagnostic.hints.join('\n'));
      }
      // Render the fancy html overlay
      removeErrorOverlay();
      var overlay = createErrorOverlay(data.diagnostics.html);
      // $FlowFixMe
      document.body.appendChild(overlay);
    }
  };
  ws.onerror = function (e) {
    console.error(e.message);
  };
  ws.onclose = function (e) {
    if (undefined !== 'test') {
      console.warn('[parcel] 🚨 Connection to the HMR server was lost');
    }
  };
}
function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);
  if (overlay) {
    overlay.remove();
    console.log('[parcel] ✨ Error resolved');
  }
}
function createErrorOverlay(diagnostics) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID;
  let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
  for (let diagnostic of diagnostics) {
    let stack = diagnostic.codeframe ? diagnostic.codeframe : diagnostic.stack;
    errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          🚨 ${diagnostic.message}
        </div>
        <pre>
          ${stack}
        </pre>
        <div>
          ${diagnostic.hints.map(hint => '<div>' + hint + '</div>').join('')}
        </div>
      </div>
    `;
  }
  errorHTML += '</div>';
  overlay.innerHTML = errorHTML;
  return overlay;
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]>*/
{
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
        parents.push([bundle, k]);
      }
    }
  }
  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }
  return parents;
}
function updateLink(link) {
  var newLink = link.cloneNode();
  newLink.onload = function () {
    if (link.parentNode !== null) {
      // $FlowFixMe
      link.parentNode.removeChild(link);
    }
  };
  newLink.setAttribute('href', // $FlowFixMe
  link.getAttribute('href').split('?')[0] + '?' + Date.now());
  // $FlowFixMe
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
      // $FlowFixMe[incompatible-type]
      var href = /*: string*/
      links[i].getAttribute('href');
      var hostname = getHostname();
      var servedFromHMRServer = hostname === 'localhost' ? new RegExp('^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):' + getPort()).test(href) : href.indexOf(hostname + ':' + getPort());
      var absolute = (/^https?:\/\//i).test(href) && href.indexOf(window.location.origin) !== 0 && !servedFromHMRServer;
      if (!absolute) {
        updateLink(links[i]);
      }
    }
    cssTimeout = null;
  }, 50);
}
function hmrApply(bundle, /*: ParcelRequire*/
asset) /*:  HMRAsset*/
{
  var modules = bundle.modules;
  if (!modules) {
    return;
  }
  if (asset.type === 'css') {
    reloadCSS();
    return;
  }
  let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
  if (deps) {
    var fn = new Function('require', 'module', 'exports', asset.output);
    modules[asset.id] = [fn, deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}
function hmrAcceptCheck(bundle, /*: ParcelRequire*/
id, /*: ParcelRequire*/
/*: string*/
depsByBundle) /*: ?{ [string]: { [string]: string } }*/
{
  var modules = bundle.modules;
  if (!modules) {
    return;
  }
  if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
    // If we reached the root bundle without finding where the asset should go,
    // there's nothing to do. Mark as "accepted" so we don't reload the page.
    if (!bundle.parent) {
      return true;
    }
    return hmrAcceptCheck(bundle.parent, id, depsByBundle);
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
  return getParents(module.bundle.root, id).some(function (v) {
    return hmrAcceptCheck(v[0], v[1], null);
  });
}
function hmrAcceptRun(bundle, /*: ParcelRequire*/
id) /*: string*/
{
  var cached = bundle.cache[id];
  bundle.hotData = {};
  if (cached && cached.hot) {
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
      var assetsToAlsoAccept = cb(function () {
        return getParents(module.bundle.root, id);
      });
      if (assetsToAlsoAccept && assetsToAccept.length) {
        assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
      }
    });
  }
  acceptedAssets[id] = true;
}

},{}],"3Nsfq":[function(require,module,exports) {
var _parcelHelpers = require("@parcel/transformer-js/lib/esmodule-helpers.js");
_parcelHelpers.defineInteropFlag(exports);
function t(t) {
  return t && t.__esModule ? t.default : t;
}
var e, i, s, n = {};
/*!
*
*   typed.js - A JavaScript Typing Animation Library
*   Author: Matt Boldt <me@mattboldt.com>
*   Version: v2.0.12
*   Url: https://github.com/mattboldt/typed.js
*   License(s): MIT
*
*/
(i = n, s = function () {
  return (function (t) {
    var e = {};
    function i(s) {
      if (e[s]) return e[s].exports;
      var n = e[s] = {
        exports: {},
        id: s,
        loaded: !1
      };
      return (t[s].call(n.exports, n, n.exports, i), n.loaded = !0, n.exports);
    }
    return (i.m = t, i.c = e, i.p = "", i(0));
  })([function (t, e, i) {
    Object.defineProperty(e, "__esModule", {
      value: !0
    });
    var s = (function () {
      function t(t, e) {
        for (var i = 0; i < e.length; i++) {
          var s = e[i];
          (s.enumerable = s.enumerable || !1, s.configurable = !0, ("value" in s) && (s.writable = !0), Object.defineProperty(t, s.key, s));
        }
      }
      return function (e, i, s) {
        return (i && t(e.prototype, i), s && t(e, s), e);
      };
    })(), n = i(1), r = i(3), o = (function () {
      function t(e, i) {
        (!(function (t, e) {
          if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
        })(this, t), n.initializer.load(this, i, e), this.begin());
      }
      return (s(t, [{
        key: "toggle",
        value: function () {
          this.pause.status ? this.start() : this.stop();
        }
      }, {
        key: "stop",
        value: function () {
          this.typingComplete || this.pause.status || (this.toggleBlinking(!0), this.pause.status = !0, this.options.onStop(this.arrayPos, this));
        }
      }, {
        key: "start",
        value: function () {
          this.typingComplete || this.pause.status && (this.pause.status = !1, this.pause.typewrite ? this.typewrite(this.pause.curString, this.pause.curStrPos) : this.backspace(this.pause.curString, this.pause.curStrPos), this.options.onStart(this.arrayPos, this));
        }
      }, {
        key: "destroy",
        value: function () {
          (this.reset(!1), this.options.onDestroy(this));
        }
      }, {
        key: "reset",
        value: function () {
          var t = arguments.length <= 0 || void 0 === arguments[0] || arguments[0];
          (clearInterval(this.timeout), this.replaceText(""), this.cursor && this.cursor.parentNode && (this.cursor.parentNode.removeChild(this.cursor), this.cursor = null), this.strPos = 0, this.arrayPos = 0, this.curLoop = 0, t && (this.insertCursor(), this.options.onReset(this), this.begin()));
        }
      }, {
        key: "begin",
        value: function () {
          var t = this;
          (this.options.onBegin(this), this.typingComplete = !1, this.shuffleStringsIfNeeded(this), this.insertCursor(), this.bindInputFocusEvents && this.bindFocusEvents(), this.timeout = setTimeout(function () {
            t.currentElContent && 0 !== t.currentElContent.length ? t.backspace(t.currentElContent, t.currentElContent.length) : t.typewrite(t.strings[t.sequence[t.arrayPos]], t.strPos);
          }, this.startDelay));
        }
      }, {
        key: "typewrite",
        value: function (t, e) {
          var i = this;
          this.fadeOut && this.el.classList.contains(this.fadeOutClass) && (this.el.classList.remove(this.fadeOutClass), this.cursor && this.cursor.classList.remove(this.fadeOutClass));
          var s = this.humanizer(this.typeSpeed), n = 1;
          !0 !== this.pause.status ? this.timeout = setTimeout(function () {
            e = r.htmlParser.typeHtmlChars(t, e, i);
            var s = 0, o = t.substr(e);
            if ("^" === o.charAt(0) && (/^\^\d+/).test(o)) {
              var a = 1;
              (a += (o = (/\d+/).exec(o)[0]).length, s = parseInt(o), i.temporaryPause = !0, i.options.onTypingPaused(i.arrayPos, i), t = t.substring(0, e) + t.substring(e + a), i.toggleBlinking(!0));
            }
            if ("`" === o.charAt(0)) {
              for (; "`" !== t.substr(e + n).charAt(0) && (n++, !(e + n > t.length)); ) ;
              var l = t.substring(0, e), u = t.substring(l.length + 1, e + n), h = t.substring(e + n + 1);
              (t = l + u + h, n--);
            }
            i.timeout = setTimeout(function () {
              (i.toggleBlinking(!1), e >= t.length ? i.doneTyping(t, e) : i.keepTyping(t, e, n), i.temporaryPause && (i.temporaryPause = !1, i.options.onTypingResumed(i.arrayPos, i)));
            }, s);
          }, s) : this.setPauseStatus(t, e, !0);
        }
      }, {
        key: "keepTyping",
        value: function (t, e, i) {
          (0 === e && (this.toggleBlinking(!1), this.options.preStringTyped(this.arrayPos, this)), e += i);
          var s = t.substr(0, e);
          (this.replaceText(s), this.typewrite(t, e));
        }
      }, {
        key: "doneTyping",
        value: function (t, e) {
          var i = this;
          (this.options.onStringTyped(this.arrayPos, this), this.toggleBlinking(!0), this.arrayPos === this.strings.length - 1 && (this.complete(), !1 === this.loop || this.curLoop === this.loopCount) || (this.timeout = setTimeout(function () {
            i.backspace(t, e);
          }, this.backDelay)));
        }
      }, {
        key: "backspace",
        value: function (t, e) {
          var i = this;
          if (!0 !== this.pause.status) {
            if (this.fadeOut) return this.initFadeOut();
            this.toggleBlinking(!1);
            var s = this.humanizer(this.backSpeed);
            this.timeout = setTimeout(function () {
              e = r.htmlParser.backSpaceHtmlChars(t, e, i);
              var s = t.substr(0, e);
              if ((i.replaceText(s), i.smartBackspace)) {
                var n = i.strings[i.arrayPos + 1];
                n && s === n.substr(0, e) ? i.stopNum = e : i.stopNum = 0;
              }
              e > i.stopNum ? (e--, i.backspace(t, e)) : e <= i.stopNum && (i.arrayPos++, i.arrayPos === i.strings.length ? (i.arrayPos = 0, i.options.onLastStringBackspaced(), i.shuffleStringsIfNeeded(), i.begin()) : i.typewrite(i.strings[i.sequence[i.arrayPos]], e));
            }, s);
          } else this.setPauseStatus(t, e, !1);
        }
      }, {
        key: "complete",
        value: function () {
          (this.options.onComplete(this), this.loop ? this.curLoop++ : this.typingComplete = !0);
        }
      }, {
        key: "setPauseStatus",
        value: function (t, e, i) {
          (this.pause.typewrite = i, this.pause.curString = t, this.pause.curStrPos = e);
        }
      }, {
        key: "toggleBlinking",
        value: function (t) {
          this.cursor && (this.pause.status || this.cursorBlinking !== t && (this.cursorBlinking = t, t ? this.cursor.classList.add("typed-cursor--blink") : this.cursor.classList.remove("typed-cursor--blink")));
        }
      }, {
        key: "humanizer",
        value: function (t) {
          return Math.round(Math.random() * t / 2) + t;
        }
      }, {
        key: "shuffleStringsIfNeeded",
        value: function () {
          this.shuffle && (this.sequence = this.sequence.sort(function () {
            return Math.random() - .5;
          }));
        }
      }, {
        key: "initFadeOut",
        value: function () {
          var t = this;
          return (this.el.className += " " + this.fadeOutClass, this.cursor && (this.cursor.className += " " + this.fadeOutClass), setTimeout(function () {
            (t.arrayPos++, t.replaceText(""), t.strings.length > t.arrayPos ? t.typewrite(t.strings[t.sequence[t.arrayPos]], 0) : (t.typewrite(t.strings[0], 0), t.arrayPos = 0));
          }, this.fadeOutDelay));
        }
      }, {
        key: "replaceText",
        value: function (t) {
          this.attr ? this.el.setAttribute(this.attr, t) : this.isInput ? this.el.value = t : "html" === this.contentType ? this.el.innerHTML = t : this.el.textContent = t;
        }
      }, {
        key: "bindFocusEvents",
        value: function () {
          var t = this;
          this.isInput && (this.el.addEventListener("focus", function (e) {
            t.stop();
          }), this.el.addEventListener("blur", function (e) {
            t.el.value && 0 !== t.el.value.length || t.start();
          }));
        }
      }, {
        key: "insertCursor",
        value: function () {
          this.showCursor && (this.cursor || (this.cursor = document.createElement("span"), this.cursor.className = "typed-cursor", this.cursor.setAttribute("aria-hidden", !0), this.cursor.innerHTML = this.cursorChar, this.el.parentNode && this.el.parentNode.insertBefore(this.cursor, this.el.nextSibling)));
        }
      }]), t);
    })();
    (e.default = o, t.exports = e.default);
  }, function (t, e, i) {
    Object.defineProperty(e, "__esModule", {
      value: !0
    });
    var s, n = Object.assign || (function (t) {
      for (var e = 1; e < arguments.length; e++) {
        var i = arguments[e];
        for (var s in i) Object.prototype.hasOwnProperty.call(i, s) && (t[s] = i[s]);
      }
      return t;
    }), r = (function () {
      function t(t, e) {
        for (var i = 0; i < e.length; i++) {
          var s = e[i];
          (s.enumerable = s.enumerable || !1, s.configurable = !0, ("value" in s) && (s.writable = !0), Object.defineProperty(t, s.key, s));
        }
      }
      return function (e, i, s) {
        return (i && t(e.prototype, i), s && t(e, s), e);
      };
    })(), o = (s = i(2)) && s.__esModule ? s : {
      default: s
    }, a = (function () {
      function t() {
        !(function (t, e) {
          if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
        })(this, t);
      }
      return (r(t, [{
        key: "load",
        value: function (t, e, i) {
          if ((t.el = "string" == typeof i ? document.querySelector(i) : i, t.options = n({}, o.default, e), t.isInput = "input" === t.el.tagName.toLowerCase(), t.attr = t.options.attr, t.bindInputFocusEvents = t.options.bindInputFocusEvents, t.showCursor = !t.isInput && t.options.showCursor, t.cursorChar = t.options.cursorChar, t.cursorBlinking = !0, t.elContent = t.attr ? t.el.getAttribute(t.attr) : t.el.textContent, t.contentType = t.options.contentType, t.typeSpeed = t.options.typeSpeed, t.startDelay = t.options.startDelay, t.backSpeed = t.options.backSpeed, t.smartBackspace = t.options.smartBackspace, t.backDelay = t.options.backDelay, t.fadeOut = t.options.fadeOut, t.fadeOutClass = t.options.fadeOutClass, t.fadeOutDelay = t.options.fadeOutDelay, t.isPaused = !1, t.strings = t.options.strings.map(function (t) {
            return t.trim();
          }), "string" == typeof t.options.stringsElement ? t.stringsElement = document.querySelector(t.options.stringsElement) : t.stringsElement = t.options.stringsElement, t.stringsElement)) {
            (t.strings = [], t.stringsElement.style.display = "none");
            var s = Array.prototype.slice.apply(t.stringsElement.children), r = s.length;
            if (r) for (var a = 0; a < r; a += 1) {
              var l = s[a];
              t.strings.push(l.innerHTML.trim());
            }
          }
          for (var a in (t.strPos = 0, t.arrayPos = 0, t.stopNum = 0, t.loop = t.options.loop, t.loopCount = t.options.loopCount, t.curLoop = 0, t.shuffle = t.options.shuffle, t.sequence = [], t.pause = {
            status: !1,
            typewrite: !0,
            curString: "",
            curStrPos: 0
          }, t.typingComplete = !1, t.strings)) t.sequence[a] = a;
          (t.currentElContent = this.getCurrentElContent(t), t.autoInsertCss = t.options.autoInsertCss, this.appendAnimationCss(t));
        }
      }, {
        key: "getCurrentElContent",
        value: function (t) {
          return t.attr ? t.el.getAttribute(t.attr) : t.isInput ? t.el.value : "html" === t.contentType ? t.el.innerHTML : t.el.textContent;
        }
      }, {
        key: "appendAnimationCss",
        value: function (t) {
          var e = "data-typed-js-css";
          if (t.autoInsertCss && (t.showCursor || t.fadeOut) && !document.querySelector("[" + e + "]")) {
            var i = document.createElement("style");
            (i.type = "text/css", i.setAttribute(e, !0));
            var s = "";
            (t.showCursor && (s += "\n        .typed-cursor{\n          opacity: 1;\n        }\n        .typed-cursor.typed-cursor--blink{\n          animation: typedjsBlink 0.7s infinite;\n          -webkit-animation: typedjsBlink 0.7s infinite;\n                  animation: typedjsBlink 0.7s infinite;\n        }\n        @keyframes typedjsBlink{\n          50% { opacity: 0.0; }\n        }\n        @-webkit-keyframes typedjsBlink{\n          0% { opacity: 1; }\n          50% { opacity: 0.0; }\n          100% { opacity: 1; }\n        }\n      "), t.fadeOut && (s += "\n        .typed-fade-out{\n          opacity: 0;\n          transition: opacity .25s;\n        }\n        .typed-cursor.typed-cursor--blink.typed-fade-out{\n          -webkit-animation: 0;\n          animation: 0;\n        }\n      "), 0 !== i.length && (i.innerHTML = s, document.body.appendChild(i)));
          }
        }
      }]), t);
    })();
    e.default = a;
    var l = new a();
    e.initializer = l;
  }, function (t, e) {
    Object.defineProperty(e, "__esModule", {
      value: !0
    });
    (e.default = {
      strings: ["These are the default values...", "You know what you should do?", "Use your own!", "Have a great day!"],
      stringsElement: null,
      typeSpeed: 0,
      startDelay: 0,
      backSpeed: 0,
      smartBackspace: !0,
      shuffle: !1,
      backDelay: 700,
      fadeOut: !1,
      fadeOutClass: "typed-fade-out",
      fadeOutDelay: 500,
      loop: !1,
      loopCount: 1 / 0,
      showCursor: !0,
      cursorChar: "|",
      autoInsertCss: !0,
      attr: null,
      bindInputFocusEvents: !1,
      contentType: "html",
      onBegin: function (t) {},
      onComplete: function (t) {},
      preStringTyped: function (t, e) {},
      onStringTyped: function (t, e) {},
      onLastStringBackspaced: function (t) {},
      onTypingPaused: function (t, e) {},
      onTypingResumed: function (t, e) {},
      onReset: function (t) {},
      onStop: function (t, e) {},
      onStart: function (t, e) {},
      onDestroy: function (t) {}
    }, t.exports = e.default);
  }, function (t, e) {
    Object.defineProperty(e, "__esModule", {
      value: !0
    });
    var i = (function () {
      function t(t, e) {
        for (var i = 0; i < e.length; i++) {
          var s = e[i];
          (s.enumerable = s.enumerable || !1, s.configurable = !0, ("value" in s) && (s.writable = !0), Object.defineProperty(t, s.key, s));
        }
      }
      return function (e, i, s) {
        return (i && t(e.prototype, i), s && t(e, s), e);
      };
    })(), s = (function () {
      function t() {
        !(function (t, e) {
          if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
        })(this, t);
      }
      return (i(t, [{
        key: "typeHtmlChars",
        value: function (t, e, i) {
          if ("html" !== i.contentType) return e;
          var s = t.substr(e).charAt(0);
          if ("<" === s || "&" === s) {
            var n;
            for (n = "<" === s ? ">" : ";"; t.substr(e + 1).charAt(0) !== n && !(1 + ++e > t.length); ) ;
            e++;
          }
          return e;
        }
      }, {
        key: "backSpaceHtmlChars",
        value: function (t, e, i) {
          if ("html" !== i.contentType) return e;
          var s = t.substr(e).charAt(0);
          if (">" === s || ";" === s) {
            var n;
            for (n = ">" === s ? "<" : "&"; t.substr(e - 1).charAt(0) !== n && !(--e < 0); ) ;
            e--;
          }
          return e;
        }
      }]), t);
    })();
    e.default = s;
    var n = new s();
    e.htmlParser = n;
  }]);
}, "object" == typeof n ? n = s() : "object" == typeof n ? (e = s(), n.Typed = e) : i.Typed = s());
var r = t(n), o = function (t, e) {
  if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
}, a = (function () {
  function t(e) {
    var i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
    if ((o(this, t), !(e instanceof Node))) throw "Can't initialize VanillaTilt because " + e + " is not a Node.";
    (this.width = null, this.height = null, this.clientWidth = null, this.clientHeight = null, this.left = null, this.top = null, this.gammazero = null, this.betazero = null, this.lastgammazero = null, this.lastbetazero = null, this.transitionTimeout = null, this.updateCall = null, this.event = null, this.updateBind = this.update.bind(this), this.resetBind = this.reset.bind(this), this.element = e, this.settings = this.extendSettings(i), this.reverse = this.settings.reverse ? -1 : 1, this.glare = t.isSettingTrue(this.settings.glare), this.glarePrerender = t.isSettingTrue(this.settings["glare-prerender"]), this.fullPageListening = t.isSettingTrue(this.settings["full-page-listening"]), this.gyroscope = t.isSettingTrue(this.settings.gyroscope), this.gyroscopeSamples = this.settings.gyroscopeSamples, this.elementListener = this.getElementListener(), this.glare && this.prepareGlare(), this.fullPageListening && this.updateClientSize(), this.addEventListeners(), this.updateInitialPosition());
  }
  return (t.isSettingTrue = function (t) {
    return "" === t || !0 === t || 1 === t;
  }, t.prototype.getElementListener = function () {
    if (this.fullPageListening) return window.document;
    if ("string" == typeof this.settings["mouse-event-element"]) {
      var t = document.querySelector(this.settings["mouse-event-element"]);
      if (t) return t;
    }
    return this.settings["mouse-event-element"] instanceof Node ? this.settings["mouse-event-element"] : this.element;
  }, t.prototype.addEventListeners = function () {
    (this.onMouseEnterBind = this.onMouseEnter.bind(this), this.onMouseMoveBind = this.onMouseMove.bind(this), this.onMouseLeaveBind = this.onMouseLeave.bind(this), this.onWindowResizeBind = this.onWindowResize.bind(this), this.onDeviceOrientationBind = this.onDeviceOrientation.bind(this), this.elementListener.addEventListener("mouseenter", this.onMouseEnterBind), this.elementListener.addEventListener("mouseleave", this.onMouseLeaveBind), this.elementListener.addEventListener("mousemove", this.onMouseMoveBind), (this.glare || this.fullPageListening) && window.addEventListener("resize", this.onWindowResizeBind), this.gyroscope && window.addEventListener("deviceorientation", this.onDeviceOrientationBind));
  }, t.prototype.removeEventListeners = function () {
    (this.elementListener.removeEventListener("mouseenter", this.onMouseEnterBind), this.elementListener.removeEventListener("mouseleave", this.onMouseLeaveBind), this.elementListener.removeEventListener("mousemove", this.onMouseMoveBind), this.gyroscope && window.removeEventListener("deviceorientation", this.onDeviceOrientationBind), (this.glare || this.fullPageListening) && window.removeEventListener("resize", this.onWindowResizeBind));
  }, t.prototype.destroy = function () {
    (clearTimeout(this.transitionTimeout), null !== this.updateCall && cancelAnimationFrame(this.updateCall), this.reset(), this.removeEventListeners(), this.element.vanillaTilt = null, delete this.element.vanillaTilt, this.element = null);
  }, t.prototype.onDeviceOrientation = function (t) {
    if (null !== t.gamma && null !== t.beta) {
      (this.updateElementPosition(), this.gyroscopeSamples > 0 && (this.lastgammazero = this.gammazero, this.lastbetazero = this.betazero, null === this.gammazero ? (this.gammazero = t.gamma, this.betazero = t.beta) : (this.gammazero = (t.gamma + this.lastgammazero) / 2, this.betazero = (t.beta + this.lastbetazero) / 2), this.gyroscopeSamples -= 1));
      var e = this.settings.gyroscopeMaxAngleX - this.settings.gyroscopeMinAngleX, i = this.settings.gyroscopeMaxAngleY - this.settings.gyroscopeMinAngleY, s = e / this.width, n = i / this.height, r = (t.gamma - (this.settings.gyroscopeMinAngleX + this.gammazero)) / s, o = (t.beta - (this.settings.gyroscopeMinAngleY + this.betazero)) / n;
      (null !== this.updateCall && cancelAnimationFrame(this.updateCall), this.event = {
        clientX: r + this.left,
        clientY: o + this.top
      }, this.updateCall = requestAnimationFrame(this.updateBind));
    }
  }, t.prototype.onMouseEnter = function () {
    (this.updateElementPosition(), this.element.style.willChange = "transform", this.setTransition());
  }, t.prototype.onMouseMove = function (t) {
    (null !== this.updateCall && cancelAnimationFrame(this.updateCall), this.event = t, this.updateCall = requestAnimationFrame(this.updateBind));
  }, t.prototype.onMouseLeave = function () {
    (this.setTransition(), this.settings.reset && requestAnimationFrame(this.resetBind));
  }, t.prototype.reset = function () {
    (this.event = {
      clientX: this.left + this.width / 2,
      clientY: this.top + this.height / 2
    }, this.element && this.element.style && (this.element.style.transform = "perspective(" + this.settings.perspective + "px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)"), this.resetGlare());
  }, t.prototype.resetGlare = function () {
    this.glare && (this.glareElement.style.transform = "rotate(180deg) translate(-50%, -50%)", this.glareElement.style.opacity = "0");
  }, t.prototype.updateInitialPosition = function () {
    if (0 !== this.settings.startX || 0 !== this.settings.startY) {
      (this.onMouseEnter(), this.fullPageListening ? this.event = {
        clientX: (this.settings.startX + this.settings.max) / (2 * this.settings.max) * this.clientWidth,
        clientY: (this.settings.startY + this.settings.max) / (2 * this.settings.max) * this.clientHeight
      } : this.event = {
        clientX: this.left + (this.settings.startX + this.settings.max) / (2 * this.settings.max) * this.width,
        clientY: this.top + (this.settings.startY + this.settings.max) / (2 * this.settings.max) * this.height
      });
      var t = this.settings.scale;
      (this.settings.scale = 1, this.update(), this.settings.scale = t, this.resetGlare());
    }
  }, t.prototype.getValues = function () {
    var t = void 0, e = void 0;
    return (this.fullPageListening ? (t = this.event.clientX / this.clientWidth, e = this.event.clientY / this.clientHeight) : (t = (this.event.clientX - this.left) / this.width, e = (this.event.clientY - this.top) / this.height), t = Math.min(Math.max(t, 0), 1), e = Math.min(Math.max(e, 0), 1), {
      tiltX: (this.reverse * (this.settings.max - t * this.settings.max * 2)).toFixed(2),
      tiltY: (this.reverse * (e * this.settings.max * 2 - this.settings.max)).toFixed(2),
      percentageX: 100 * t,
      percentageY: 100 * e,
      angle: Math.atan2(this.event.clientX - (this.left + this.width / 2), -(this.event.clientY - (this.top + this.height / 2))) * (180 / Math.PI)
    });
  }, t.prototype.updateElementPosition = function () {
    var t = this.element.getBoundingClientRect();
    (this.width = this.element.offsetWidth, this.height = this.element.offsetHeight, this.left = t.left, this.top = t.top);
  }, t.prototype.update = function () {
    var t = this.getValues();
    (this.element.style.transform = "perspective(" + this.settings.perspective + "px) rotateX(" + ("x" === this.settings.axis ? 0 : t.tiltY) + "deg) rotateY(" + ("y" === this.settings.axis ? 0 : t.tiltX) + "deg) scale3d(" + this.settings.scale + ", " + this.settings.scale + ", " + this.settings.scale + ")", this.glare && (this.glareElement.style.transform = "rotate(" + t.angle + "deg) translate(-50%, -50%)", this.glareElement.style.opacity = "" + t.percentageY * this.settings["max-glare"] / 100), this.element.dispatchEvent(new CustomEvent("tiltChange", {
      detail: t
    })), this.updateCall = null);
  }, t.prototype.prepareGlare = function () {
    if (!this.glarePrerender) {
      var t = document.createElement("div");
      t.classList.add("js-tilt-glare");
      var e = document.createElement("div");
      (e.classList.add("js-tilt-glare-inner"), t.appendChild(e), this.element.appendChild(t));
    }
    (this.glareElementWrapper = this.element.querySelector(".js-tilt-glare"), this.glareElement = this.element.querySelector(".js-tilt-glare-inner"), this.glarePrerender || (Object.assign(this.glareElementWrapper.style, {
      position: "absolute",
      top: "0",
      left: "0",
      width: "100%",
      height: "100%",
      overflow: "hidden",
      "pointer-events": "none"
    }), Object.assign(this.glareElement.style, {
      position: "absolute",
      top: "50%",
      left: "50%",
      "pointer-events": "none",
      "background-image": "linear-gradient(0deg, rgba(255,255,255,0) 0%, rgba(255,255,255,1) 100%)",
      width: 2 * this.element.offsetWidth + "px",
      height: 2 * this.element.offsetWidth + "px",
      transform: "rotate(180deg) translate(-50%, -50%)",
      "transform-origin": "0% 0%",
      opacity: "0"
    })));
  }, t.prototype.updateGlareSize = function () {
    this.glare && Object.assign(this.glareElement.style, {
      width: "" + 2 * this.element.offsetWidth,
      height: "" + 2 * this.element.offsetWidth
    });
  }, t.prototype.updateClientSize = function () {
    (this.clientWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth, this.clientHeight = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight);
  }, t.prototype.onWindowResize = function () {
    (this.updateGlareSize(), this.updateClientSize());
  }, t.prototype.setTransition = function () {
    var t = this;
    (clearTimeout(this.transitionTimeout), this.element.style.transition = this.settings.speed + "ms " + this.settings.easing, this.glare && (this.glareElement.style.transition = "opacity " + this.settings.speed + "ms " + this.settings.easing), this.transitionTimeout = setTimeout(function () {
      (t.element.style.transition = "", t.glare && (t.glareElement.style.transition = ""));
    }, this.settings.speed));
  }, t.prototype.extendSettings = function (t) {
    var e = {
      reverse: !1,
      max: 15,
      startX: 0,
      startY: 0,
      perspective: 1e3,
      easing: "cubic-bezier(.03,.98,.52,.99)",
      scale: 1,
      speed: 300,
      transition: !0,
      axis: null,
      glare: !1,
      "max-glare": 1,
      "glare-prerender": !1,
      "full-page-listening": !1,
      "mouse-event-element": null,
      reset: !0,
      gyroscope: !0,
      gyroscopeMinAngleX: -45,
      gyroscopeMaxAngleX: 45,
      gyroscopeMinAngleY: -45,
      gyroscopeMaxAngleY: 45,
      gyroscopeSamples: 10
    }, i = {};
    for (var s in e) if ((s in t)) i[s] = t[s]; else if (this.element.hasAttribute("data-tilt-" + s)) {
      var n = this.element.getAttribute("data-tilt-" + s);
      try {
        i[s] = JSON.parse(n);
      } catch (t) {
        i[s] = n;
      }
    } else i[s] = e[s];
    return i;
  }, t.init = function (e, i) {
    (e instanceof Node && (e = [e]), e instanceof NodeList && (e = [].slice.call(e)), e instanceof Array && e.forEach(function (e) {
      ("vanillaTilt" in e) || (e.vanillaTilt = new t(e, i));
    }));
  }, t);
})();
"undefined" != typeof document && (window.VanillaTilt = a, a.init(document.querySelectorAll("[data-tilt]")));
var l = t(a);
(new r(".typo", {
  strings: ["<i>Front-End Developer</i> ."],
  typeSpeed: 40
}), l.init(document.querySelectorAll(".button"), {
  max: 35,
  speed: 400,
  scale: 1.2,
  glare: !0,
  "max-glare": .5
}), l.init(document.querySelectorAll(".button")));
exports.default = {};

},{"@parcel/transformer-js/lib/esmodule-helpers.js":"5gA8y"}],"5gA8y":[function(require,module,exports) {
"use strict";

exports.interopDefault = function (a) {
  return a && a.__esModule ? a : {
    default: a
  };
};

exports.defineInteropFlag = function (a) {
  Object.defineProperty(a, '__esModule', {
    value: true
  });
};

exports.exportAll = function (source, dest) {
  Object.keys(source).forEach(function (key) {
    if (key === 'default' || key === '__esModule') {
      return;
    } // Skip duplicate re-exports when they have the same value.


    if (key in dest && dest[key] === source[key]) {
      return;
    }

    Object.defineProperty(dest, key, {
      enumerable: true,
      get: function () {
        return source[key];
      }
    });
  });
  return dest;
};

exports.export = function (dest, destName, get) {
  Object.defineProperty(dest, destName, {
    enumerable: true,
    get: get
  });
};
},{}]},["2E6dP","3Nsfq"], "3Nsfq", "parcelRequire6251")

//# sourceMappingURL=index.90a78850.js.map
