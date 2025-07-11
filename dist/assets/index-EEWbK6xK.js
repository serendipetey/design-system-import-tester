function mg(e, t) {
  for (var n = 0; n < t.length; n++) {
    const r = t[n];
    if (typeof r != "string" && !Array.isArray(r)) {
      for (const o in r)
        if (o !== "default" && !(o in e)) {
          const l = Object.getOwnPropertyDescriptor(r, o);
          l &&
            Object.defineProperty(
              e,
              o,
              l.get ? l : { enumerable: !0, get: () => r[o] }
            );
        }
    }
  }
  return Object.freeze(
    Object.defineProperty(e, Symbol.toStringTag, { value: "Module" })
  );
}
(function () {
  const t = document.createElement("link").relList;
  if (t && t.supports && t.supports("modulepreload")) return;
  for (const o of document.querySelectorAll('link[rel="modulepreload"]')) r(o);
  new MutationObserver((o) => {
    for (const l of o)
      if (l.type === "childList")
        for (const s of l.addedNodes)
          s.tagName === "LINK" && s.rel === "modulepreload" && r(s);
  }).observe(document, { childList: !0, subtree: !0 });
  function n(o) {
    const l = {};
    return (
      o.integrity && (l.integrity = o.integrity),
      o.referrerPolicy && (l.referrerPolicy = o.referrerPolicy),
      o.crossOrigin === "use-credentials"
        ? (l.credentials = "include")
        : o.crossOrigin === "anonymous"
        ? (l.credentials = "omit")
        : (l.credentials = "same-origin"),
      l
    );
  }
  function r(o) {
    if (o.ep) return;
    o.ep = !0;
    const l = n(o);
    fetch(o.href, l);
  }
})();
function af(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default")
    ? e.default
    : e;
}
var cf = { exports: {} },
  us = {},
  uf = { exports: {} },
  G = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Lo = Symbol.for("react.element"),
  hg = Symbol.for("react.portal"),
  vg = Symbol.for("react.fragment"),
  gg = Symbol.for("react.strict_mode"),
  yg = Symbol.for("react.profiler"),
  xg = Symbol.for("react.provider"),
  wg = Symbol.for("react.context"),
  bg = Symbol.for("react.forward_ref"),
  Sg = Symbol.for("react.suspense"),
  Cg = Symbol.for("react.memo"),
  kg = Symbol.for("react.lazy"),
  yu = Symbol.iterator;
function Eg(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (yu && e[yu]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var df = {
    isMounted: function () {
      return !1;
    },
    enqueueForceUpdate: function () {},
    enqueueReplaceState: function () {},
    enqueueSetState: function () {},
  },
  ff = Object.assign,
  pf = {};
function jr(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = pf),
    (this.updater = n || df);
}
jr.prototype.isReactComponent = {};
jr.prototype.setState = function (e, t) {
  if (typeof e != "object" && typeof e != "function" && e != null)
    throw Error(
      "setState(...): takes an object of state variables to update or a function which returns an object of state variables."
    );
  this.updater.enqueueSetState(this, e, t, "setState");
};
jr.prototype.forceUpdate = function (e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function mf() {}
mf.prototype = jr.prototype;
function Da(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = pf),
    (this.updater = n || df);
}
var Fa = (Da.prototype = new mf());
Fa.constructor = Da;
ff(Fa, jr.prototype);
Fa.isPureReactComponent = !0;
var xu = Array.isArray,
  hf = Object.prototype.hasOwnProperty,
  Va = { current: null },
  vf = { key: !0, ref: !0, __self: !0, __source: !0 };
function gf(e, t, n) {
  var r,
    o = {},
    l = null,
    s = null;
  if (t != null)
    for (r in (t.ref !== void 0 && (s = t.ref),
    t.key !== void 0 && (l = "" + t.key),
    t))
      hf.call(t, r) && !vf.hasOwnProperty(r) && (o[r] = t[r]);
  var i = arguments.length - 2;
  if (i === 1) o.children = n;
  else if (1 < i) {
    for (var a = Array(i), c = 0; c < i; c++) a[c] = arguments[c + 2];
    o.children = a;
  }
  if (e && e.defaultProps)
    for (r in ((i = e.defaultProps), i)) o[r] === void 0 && (o[r] = i[r]);
  return {
    $$typeof: Lo,
    type: e,
    key: l,
    ref: s,
    props: o,
    _owner: Va.current,
  };
}
function Ng(e, t) {
  return {
    $$typeof: Lo,
    type: e.type,
    key: t,
    ref: e.ref,
    props: e.props,
    _owner: e._owner,
  };
}
function $a(e) {
  return typeof e == "object" && e !== null && e.$$typeof === Lo;
}
function jg(e) {
  var t = { "=": "=0", ":": "=2" };
  return (
    "$" +
    e.replace(/[=:]/g, function (n) {
      return t[n];
    })
  );
}
var wu = /\/+/g;
function Us(e, t) {
  return typeof e == "object" && e !== null && e.key != null
    ? jg("" + e.key)
    : t.toString(36);
}
function ml(e, t, n, r, o) {
  var l = typeof e;
  (l === "undefined" || l === "boolean") && (e = null);
  var s = !1;
  if (e === null) s = !0;
  else
    switch (l) {
      case "string":
      case "number":
        s = !0;
        break;
      case "object":
        switch (e.$$typeof) {
          case Lo:
          case hg:
            s = !0;
        }
    }
  if (s)
    return (
      (s = e),
      (o = o(s)),
      (e = r === "" ? "." + Us(s, 0) : r),
      xu(o)
        ? ((n = ""),
          e != null && (n = e.replace(wu, "$&/") + "/"),
          ml(o, t, n, "", function (c) {
            return c;
          }))
        : o != null &&
          ($a(o) &&
            (o = Ng(
              o,
              n +
                (!o.key || (s && s.key === o.key)
                  ? ""
                  : ("" + o.key).replace(wu, "$&/") + "/") +
                e
            )),
          t.push(o)),
      1
    );
  if (((s = 0), (r = r === "" ? "." : r + ":"), xu(e)))
    for (var i = 0; i < e.length; i++) {
      l = e[i];
      var a = r + Us(l, i);
      s += ml(l, t, n, a, o);
    }
  else if (((a = Eg(e)), typeof a == "function"))
    for (e = a.call(e), i = 0; !(l = e.next()).done; )
      (l = l.value), (a = r + Us(l, i++)), (s += ml(l, t, n, a, o));
  else if (l === "object")
    throw (
      ((t = String(e)),
      Error(
        "Objects are not valid as a React child (found: " +
          (t === "[object Object]"
            ? "object with keys {" + Object.keys(e).join(", ") + "}"
            : t) +
          "). If you meant to render a collection of children, use an array instead."
      ))
    );
  return s;
}
function Ho(e, t, n) {
  if (e == null) return e;
  var r = [],
    o = 0;
  return (
    ml(e, r, "", "", function (l) {
      return t.call(n, l, o++);
    }),
    r
  );
}
function Rg(e) {
  if (e._status === -1) {
    var t = e._result;
    (t = t()),
      t.then(
        function (n) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 1), (e._result = n));
        },
        function (n) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 2), (e._result = n));
        }
      ),
      e._status === -1 && ((e._status = 0), (e._result = t));
  }
  if (e._status === 1) return e._result.default;
  throw e._result;
}
var Le = { current: null },
  hl = { transition: null },
  Pg = {
    ReactCurrentDispatcher: Le,
    ReactCurrentBatchConfig: hl,
    ReactCurrentOwner: Va,
  };
function yf() {
  throw Error("act(...) is not supported in production builds of React.");
}
G.Children = {
  map: Ho,
  forEach: function (e, t, n) {
    Ho(
      e,
      function () {
        t.apply(this, arguments);
      },
      n
    );
  },
  count: function (e) {
    var t = 0;
    return (
      Ho(e, function () {
        t++;
      }),
      t
    );
  },
  toArray: function (e) {
    return (
      Ho(e, function (t) {
        return t;
      }) || []
    );
  },
  only: function (e) {
    if (!$a(e))
      throw Error(
        "React.Children.only expected to receive a single React element child."
      );
    return e;
  },
};
G.Component = jr;
G.Fragment = vg;
G.Profiler = yg;
G.PureComponent = Da;
G.StrictMode = gg;
G.Suspense = Sg;
G.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Pg;
G.act = yf;
G.cloneElement = function (e, t, n) {
  if (e == null)
    throw Error(
      "React.cloneElement(...): The argument must be a React element, but you passed " +
        e +
        "."
    );
  var r = ff({}, e.props),
    o = e.key,
    l = e.ref,
    s = e._owner;
  if (t != null) {
    if (
      (t.ref !== void 0 && ((l = t.ref), (s = Va.current)),
      t.key !== void 0 && (o = "" + t.key),
      e.type && e.type.defaultProps)
    )
      var i = e.type.defaultProps;
    for (a in t)
      hf.call(t, a) &&
        !vf.hasOwnProperty(a) &&
        (r[a] = t[a] === void 0 && i !== void 0 ? i[a] : t[a]);
  }
  var a = arguments.length - 2;
  if (a === 1) r.children = n;
  else if (1 < a) {
    i = Array(a);
    for (var c = 0; c < a; c++) i[c] = arguments[c + 2];
    r.children = i;
  }
  return { $$typeof: Lo, type: e.type, key: o, ref: l, props: r, _owner: s };
};
G.createContext = function (e) {
  return (
    (e = {
      $$typeof: wg,
      _currentValue: e,
      _currentValue2: e,
      _threadCount: 0,
      Provider: null,
      Consumer: null,
      _defaultValue: null,
      _globalName: null,
    }),
    (e.Provider = { $$typeof: xg, _context: e }),
    (e.Consumer = e)
  );
};
G.createElement = gf;
G.createFactory = function (e) {
  var t = gf.bind(null, e);
  return (t.type = e), t;
};
G.createRef = function () {
  return { current: null };
};
G.forwardRef = function (e) {
  return { $$typeof: bg, render: e };
};
G.isValidElement = $a;
G.lazy = function (e) {
  return { $$typeof: kg, _payload: { _status: -1, _result: e }, _init: Rg };
};
G.memo = function (e, t) {
  return { $$typeof: Cg, type: e, compare: t === void 0 ? null : t };
};
G.startTransition = function (e) {
  var t = hl.transition;
  hl.transition = {};
  try {
    e();
  } finally {
    hl.transition = t;
  }
};
G.unstable_act = yf;
G.useCallback = function (e, t) {
  return Le.current.useCallback(e, t);
};
G.useContext = function (e) {
  return Le.current.useContext(e);
};
G.useDebugValue = function () {};
G.useDeferredValue = function (e) {
  return Le.current.useDeferredValue(e);
};
G.useEffect = function (e, t) {
  return Le.current.useEffect(e, t);
};
G.useId = function () {
  return Le.current.useId();
};
G.useImperativeHandle = function (e, t, n) {
  return Le.current.useImperativeHandle(e, t, n);
};
G.useInsertionEffect = function (e, t) {
  return Le.current.useInsertionEffect(e, t);
};
G.useLayoutEffect = function (e, t) {
  return Le.current.useLayoutEffect(e, t);
};
G.useMemo = function (e, t) {
  return Le.current.useMemo(e, t);
};
G.useReducer = function (e, t, n) {
  return Le.current.useReducer(e, t, n);
};
G.useRef = function (e) {
  return Le.current.useRef(e);
};
G.useState = function (e) {
  return Le.current.useState(e);
};
G.useSyncExternalStore = function (e, t, n) {
  return Le.current.useSyncExternalStore(e, t, n);
};
G.useTransition = function () {
  return Le.current.useTransition();
};
G.version = "18.3.1";
uf.exports = G;
var g = uf.exports;
const W = af(g),
  xf = mg({ __proto__: null, default: W }, [g]);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var _g = g,
  Ig = Symbol.for("react.element"),
  Tg = Symbol.for("react.fragment"),
  Ag = Object.prototype.hasOwnProperty,
  Lg = _g.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
  Mg = { key: !0, ref: !0, __self: !0, __source: !0 };
function wf(e, t, n) {
  var r,
    o = {},
    l = null,
    s = null;
  n !== void 0 && (l = "" + n),
    t.key !== void 0 && (l = "" + t.key),
    t.ref !== void 0 && (s = t.ref);
  for (r in t) Ag.call(t, r) && !Mg.hasOwnProperty(r) && (o[r] = t[r]);
  if (e && e.defaultProps)
    for (r in ((t = e.defaultProps), t)) o[r] === void 0 && (o[r] = t[r]);
  return {
    $$typeof: Ig,
    type: e,
    key: l,
    ref: s,
    props: o,
    _owner: Lg.current,
  };
}
us.Fragment = Tg;
us.jsx = wf;
us.jsxs = wf;
cf.exports = us;
var u = cf.exports,
  bf = { exports: {} },
  Ye = {},
  Sf = { exports: {} },
  Cf = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ (function (e) {
  function t(j, I) {
    var O = j.length;
    j.push(I);
    e: for (; 0 < O; ) {
      var A = (O - 1) >>> 1,
        Y = j[A];
      if (0 < o(Y, I)) (j[A] = I), (j[O] = Y), (O = A);
      else break e;
    }
  }
  function n(j) {
    return j.length === 0 ? null : j[0];
  }
  function r(j) {
    if (j.length === 0) return null;
    var I = j[0],
      O = j.pop();
    if (O !== I) {
      j[0] = O;
      e: for (var A = 0, Y = j.length, J = Y >>> 1; A < J; ) {
        var ye = 2 * (A + 1) - 1,
          gt = j[ye],
          _e = ye + 1,
          F = j[_e];
        if (0 > o(gt, O))
          _e < Y && 0 > o(F, gt)
            ? ((j[A] = F), (j[_e] = O), (A = _e))
            : ((j[A] = gt), (j[ye] = O), (A = ye));
        else if (_e < Y && 0 > o(F, O)) (j[A] = F), (j[_e] = O), (A = _e);
        else break e;
      }
    }
    return I;
  }
  function o(j, I) {
    var O = j.sortIndex - I.sortIndex;
    return O !== 0 ? O : j.id - I.id;
  }
  if (typeof performance == "object" && typeof performance.now == "function") {
    var l = performance;
    e.unstable_now = function () {
      return l.now();
    };
  } else {
    var s = Date,
      i = s.now();
    e.unstable_now = function () {
      return s.now() - i;
    };
  }
  var a = [],
    c = [],
    f = 1,
    p = null,
    m = 3,
    x = !1,
    w = !1,
    v = !1,
    b = typeof setTimeout == "function" ? setTimeout : null,
    h = typeof clearTimeout == "function" ? clearTimeout : null,
    d = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" &&
    navigator.scheduling !== void 0 &&
    navigator.scheduling.isInputPending !== void 0 &&
    navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function y(j) {
    for (var I = n(c); I !== null; ) {
      if (I.callback === null) r(c);
      else if (I.startTime <= j)
        r(c), (I.sortIndex = I.expirationTime), t(a, I);
      else break;
      I = n(c);
    }
  }
  function S(j) {
    if (((v = !1), y(j), !w))
      if (n(a) !== null) (w = !0), D(C);
      else {
        var I = n(c);
        I !== null && B(S, I.startTime - j);
      }
  }
  function C(j, I) {
    (w = !1), v && ((v = !1), h(N), (N = -1)), (x = !0);
    var O = m;
    try {
      for (
        y(I), p = n(a);
        p !== null && (!(p.expirationTime > I) || (j && !z()));

      ) {
        var A = p.callback;
        if (typeof A == "function") {
          (p.callback = null), (m = p.priorityLevel);
          var Y = A(p.expirationTime <= I);
          (I = e.unstable_now()),
            typeof Y == "function" ? (p.callback = Y) : p === n(a) && r(a),
            y(I);
        } else r(a);
        p = n(a);
      }
      if (p !== null) var J = !0;
      else {
        var ye = n(c);
        ye !== null && B(S, ye.startTime - I), (J = !1);
      }
      return J;
    } finally {
      (p = null), (m = O), (x = !1);
    }
  }
  var E = !1,
    k = null,
    N = -1,
    _ = 5,
    P = -1;
  function z() {
    return !(e.unstable_now() - P < _);
  }
  function L() {
    if (k !== null) {
      var j = e.unstable_now();
      P = j;
      var I = !0;
      try {
        I = k(!0, j);
      } finally {
        I ? $() : ((E = !1), (k = null));
      }
    } else E = !1;
  }
  var $;
  if (typeof d == "function")
    $ = function () {
      d(L);
    };
  else if (typeof MessageChannel < "u") {
    var V = new MessageChannel(),
      H = V.port2;
    (V.port1.onmessage = L),
      ($ = function () {
        H.postMessage(null);
      });
  } else
    $ = function () {
      b(L, 0);
    };
  function D(j) {
    (k = j), E || ((E = !0), $());
  }
  function B(j, I) {
    N = b(function () {
      j(e.unstable_now());
    }, I);
  }
  (e.unstable_IdlePriority = 5),
    (e.unstable_ImmediatePriority = 1),
    (e.unstable_LowPriority = 4),
    (e.unstable_NormalPriority = 3),
    (e.unstable_Profiling = null),
    (e.unstable_UserBlockingPriority = 2),
    (e.unstable_cancelCallback = function (j) {
      j.callback = null;
    }),
    (e.unstable_continueExecution = function () {
      w || x || ((w = !0), D(C));
    }),
    (e.unstable_forceFrameRate = function (j) {
      0 > j || 125 < j
        ? console.error(
            "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
          )
        : (_ = 0 < j ? Math.floor(1e3 / j) : 5);
    }),
    (e.unstable_getCurrentPriorityLevel = function () {
      return m;
    }),
    (e.unstable_getFirstCallbackNode = function () {
      return n(a);
    }),
    (e.unstable_next = function (j) {
      switch (m) {
        case 1:
        case 2:
        case 3:
          var I = 3;
          break;
        default:
          I = m;
      }
      var O = m;
      m = I;
      try {
        return j();
      } finally {
        m = O;
      }
    }),
    (e.unstable_pauseExecution = function () {}),
    (e.unstable_requestPaint = function () {}),
    (e.unstable_runWithPriority = function (j, I) {
      switch (j) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          j = 3;
      }
      var O = m;
      m = j;
      try {
        return I();
      } finally {
        m = O;
      }
    }),
    (e.unstable_scheduleCallback = function (j, I, O) {
      var A = e.unstable_now();
      switch (
        (typeof O == "object" && O !== null
          ? ((O = O.delay), (O = typeof O == "number" && 0 < O ? A + O : A))
          : (O = A),
        j)
      ) {
        case 1:
          var Y = -1;
          break;
        case 2:
          Y = 250;
          break;
        case 5:
          Y = 1073741823;
          break;
        case 4:
          Y = 1e4;
          break;
        default:
          Y = 5e3;
      }
      return (
        (Y = O + Y),
        (j = {
          id: f++,
          callback: I,
          priorityLevel: j,
          startTime: O,
          expirationTime: Y,
          sortIndex: -1,
        }),
        O > A
          ? ((j.sortIndex = O),
            t(c, j),
            n(a) === null &&
              j === n(c) &&
              (v ? (h(N), (N = -1)) : (v = !0), B(S, O - A)))
          : ((j.sortIndex = Y), t(a, j), w || x || ((w = !0), D(C))),
        j
      );
    }),
    (e.unstable_shouldYield = z),
    (e.unstable_wrapCallback = function (j) {
      var I = m;
      return function () {
        var O = m;
        m = I;
        try {
          return j.apply(this, arguments);
        } finally {
          m = O;
        }
      };
    });
})(Cf);
Sf.exports = Cf;
var Og = Sf.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var zg = g,
  Qe = Og;
function R(e) {
  for (
    var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1;
    n < arguments.length;
    n++
  )
    t += "&args[]=" + encodeURIComponent(arguments[n]);
  return (
    "Minified React error #" +
    e +
    "; visit " +
    t +
    " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
  );
}
var kf = new Set(),
  fo = {};
function Vn(e, t) {
  xr(e, t), xr(e + "Capture", t);
}
function xr(e, t) {
  for (fo[e] = t, e = 0; e < t.length; e++) kf.add(t[e]);
}
var Mt = !(
    typeof window > "u" ||
    typeof window.document > "u" ||
    typeof window.document.createElement > "u"
  ),
  _i = Object.prototype.hasOwnProperty,
  Dg =
    /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
  bu = {},
  Su = {};
function Fg(e) {
  return _i.call(Su, e)
    ? !0
    : _i.call(bu, e)
    ? !1
    : Dg.test(e)
    ? (Su[e] = !0)
    : ((bu[e] = !0), !1);
}
function Vg(e, t, n, r) {
  if (n !== null && n.type === 0) return !1;
  switch (typeof t) {
    case "function":
    case "symbol":
      return !0;
    case "boolean":
      return r
        ? !1
        : n !== null
        ? !n.acceptsBooleans
        : ((e = e.toLowerCase().slice(0, 5)), e !== "data-" && e !== "aria-");
    default:
      return !1;
  }
}
function $g(e, t, n, r) {
  if (t === null || typeof t > "u" || Vg(e, t, n, r)) return !0;
  if (r) return !1;
  if (n !== null)
    switch (n.type) {
      case 3:
        return !t;
      case 4:
        return t === !1;
      case 5:
        return isNaN(t);
      case 6:
        return isNaN(t) || 1 > t;
    }
  return !1;
}
function Me(e, t, n, r, o, l, s) {
  (this.acceptsBooleans = t === 2 || t === 3 || t === 4),
    (this.attributeName = r),
    (this.attributeNamespace = o),
    (this.mustUseProperty = n),
    (this.propertyName = e),
    (this.type = t),
    (this.sanitizeURL = l),
    (this.removeEmptyString = s);
}
var Ce = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
  .split(" ")
  .forEach(function (e) {
    Ce[e] = new Me(e, 0, !1, e, null, !1, !1);
  });
[
  ["acceptCharset", "accept-charset"],
  ["className", "class"],
  ["htmlFor", "for"],
  ["httpEquiv", "http-equiv"],
].forEach(function (e) {
  var t = e[0];
  Ce[t] = new Me(t, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function (e) {
  Ce[e] = new Me(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
[
  "autoReverse",
  "externalResourcesRequired",
  "focusable",
  "preserveAlpha",
].forEach(function (e) {
  Ce[e] = new Me(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
  .split(" ")
  .forEach(function (e) {
    Ce[e] = new Me(e, 3, !1, e.toLowerCase(), null, !1, !1);
  });
["checked", "multiple", "muted", "selected"].forEach(function (e) {
  Ce[e] = new Me(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function (e) {
  Ce[e] = new Me(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function (e) {
  Ce[e] = new Me(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function (e) {
  Ce[e] = new Me(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var Ba = /[\-:]([a-z])/g;
function Wa(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(Ba, Wa);
    Ce[t] = new Me(t, 1, !1, e, null, !1, !1);
  });
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(Ba, Wa);
    Ce[t] = new Me(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
  });
["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
  var t = e.replace(Ba, Wa);
  Ce[t] = new Me(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function (e) {
  Ce[e] = new Me(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
Ce.xlinkHref = new Me(
  "xlinkHref",
  1,
  !1,
  "xlink:href",
  "http://www.w3.org/1999/xlink",
  !0,
  !1
);
["src", "href", "action", "formAction"].forEach(function (e) {
  Ce[e] = new Me(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function Ua(e, t, n, r) {
  var o = Ce.hasOwnProperty(t) ? Ce[t] : null;
  (o !== null
    ? o.type !== 0
    : r ||
      !(2 < t.length) ||
      (t[0] !== "o" && t[0] !== "O") ||
      (t[1] !== "n" && t[1] !== "N")) &&
    ($g(t, n, o, r) && (n = null),
    r || o === null
      ? Fg(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n))
      : o.mustUseProperty
      ? (e[o.propertyName] = n === null ? (o.type === 3 ? !1 : "") : n)
      : ((t = o.attributeName),
        (r = o.attributeNamespace),
        n === null
          ? e.removeAttribute(t)
          : ((o = o.type),
            (n = o === 3 || (o === 4 && n === !0) ? "" : "" + n),
            r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
}
var $t = zg.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
  Go = Symbol.for("react.element"),
  Zn = Symbol.for("react.portal"),
  qn = Symbol.for("react.fragment"),
  Ha = Symbol.for("react.strict_mode"),
  Ii = Symbol.for("react.profiler"),
  Ef = Symbol.for("react.provider"),
  Nf = Symbol.for("react.context"),
  Ga = Symbol.for("react.forward_ref"),
  Ti = Symbol.for("react.suspense"),
  Ai = Symbol.for("react.suspense_list"),
  Ka = Symbol.for("react.memo"),
  Kt = Symbol.for("react.lazy"),
  jf = Symbol.for("react.offscreen"),
  Cu = Symbol.iterator;
function Fr(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (Cu && e[Cu]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var fe = Object.assign,
  Hs;
function Xr(e) {
  if (Hs === void 0)
    try {
      throw Error();
    } catch (n) {
      var t = n.stack.trim().match(/\n( *(at )?)/);
      Hs = (t && t[1]) || "";
    }
  return (
    `
` +
    Hs +
    e
  );
}
var Gs = !1;
function Ks(e, t) {
  if (!e || Gs) return "";
  Gs = !0;
  var n = Error.prepareStackTrace;
  Error.prepareStackTrace = void 0;
  try {
    if (t)
      if (
        ((t = function () {
          throw Error();
        }),
        Object.defineProperty(t.prototype, "props", {
          set: function () {
            throw Error();
          },
        }),
        typeof Reflect == "object" && Reflect.construct)
      ) {
        try {
          Reflect.construct(t, []);
        } catch (c) {
          var r = c;
        }
        Reflect.construct(e, [], t);
      } else {
        try {
          t.call();
        } catch (c) {
          r = c;
        }
        e.call(t.prototype);
      }
    else {
      try {
        throw Error();
      } catch (c) {
        r = c;
      }
      e();
    }
  } catch (c) {
    if (c && r && typeof c.stack == "string") {
      for (
        var o = c.stack.split(`
`),
          l = r.stack.split(`
`),
          s = o.length - 1,
          i = l.length - 1;
        1 <= s && 0 <= i && o[s] !== l[i];

      )
        i--;
      for (; 1 <= s && 0 <= i; s--, i--)
        if (o[s] !== l[i]) {
          if (s !== 1 || i !== 1)
            do
              if ((s--, i--, 0 > i || o[s] !== l[i])) {
                var a =
                  `
` + o[s].replace(" at new ", " at ");
                return (
                  e.displayName &&
                    a.includes("<anonymous>") &&
                    (a = a.replace("<anonymous>", e.displayName)),
                  a
                );
              }
            while (1 <= s && 0 <= i);
          break;
        }
    }
  } finally {
    (Gs = !1), (Error.prepareStackTrace = n);
  }
  return (e = e ? e.displayName || e.name : "") ? Xr(e) : "";
}
function Bg(e) {
  switch (e.tag) {
    case 5:
      return Xr(e.type);
    case 16:
      return Xr("Lazy");
    case 13:
      return Xr("Suspense");
    case 19:
      return Xr("SuspenseList");
    case 0:
    case 2:
    case 15:
      return (e = Ks(e.type, !1)), e;
    case 11:
      return (e = Ks(e.type.render, !1)), e;
    case 1:
      return (e = Ks(e.type, !0)), e;
    default:
      return "";
  }
}
function Li(e) {
  if (e == null) return null;
  if (typeof e == "function") return e.displayName || e.name || null;
  if (typeof e == "string") return e;
  switch (e) {
    case qn:
      return "Fragment";
    case Zn:
      return "Portal";
    case Ii:
      return "Profiler";
    case Ha:
      return "StrictMode";
    case Ti:
      return "Suspense";
    case Ai:
      return "SuspenseList";
  }
  if (typeof e == "object")
    switch (e.$$typeof) {
      case Nf:
        return (e.displayName || "Context") + ".Consumer";
      case Ef:
        return (e._context.displayName || "Context") + ".Provider";
      case Ga:
        var t = e.render;
        return (
          (e = e.displayName),
          e ||
            ((e = t.displayName || t.name || ""),
            (e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")),
          e
        );
      case Ka:
        return (
          (t = e.displayName || null), t !== null ? t : Li(e.type) || "Memo"
        );
      case Kt:
        (t = e._payload), (e = e._init);
        try {
          return Li(e(t));
        } catch {}
    }
  return null;
}
function Wg(e) {
  var t = e.type;
  switch (e.tag) {
    case 24:
      return "Cache";
    case 9:
      return (t.displayName || "Context") + ".Consumer";
    case 10:
      return (t._context.displayName || "Context") + ".Provider";
    case 18:
      return "DehydratedFragment";
    case 11:
      return (
        (e = t.render),
        (e = e.displayName || e.name || ""),
        t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")
      );
    case 7:
      return "Fragment";
    case 5:
      return t;
    case 4:
      return "Portal";
    case 3:
      return "Root";
    case 6:
      return "Text";
    case 16:
      return Li(t);
    case 8:
      return t === Ha ? "StrictMode" : "Mode";
    case 22:
      return "Offscreen";
    case 12:
      return "Profiler";
    case 21:
      return "Scope";
    case 13:
      return "Suspense";
    case 19:
      return "SuspenseList";
    case 25:
      return "TracingMarker";
    case 1:
    case 0:
    case 17:
    case 2:
    case 14:
    case 15:
      if (typeof t == "function") return t.displayName || t.name || null;
      if (typeof t == "string") return t;
  }
  return null;
}
function cn(e) {
  switch (typeof e) {
    case "boolean":
    case "number":
    case "string":
    case "undefined":
      return e;
    case "object":
      return e;
    default:
      return "";
  }
}
function Rf(e) {
  var t = e.type;
  return (
    (e = e.nodeName) &&
    e.toLowerCase() === "input" &&
    (t === "checkbox" || t === "radio")
  );
}
function Ug(e) {
  var t = Rf(e) ? "checked" : "value",
    n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
    r = "" + e[t];
  if (
    !e.hasOwnProperty(t) &&
    typeof n < "u" &&
    typeof n.get == "function" &&
    typeof n.set == "function"
  ) {
    var o = n.get,
      l = n.set;
    return (
      Object.defineProperty(e, t, {
        configurable: !0,
        get: function () {
          return o.call(this);
        },
        set: function (s) {
          (r = "" + s), l.call(this, s);
        },
      }),
      Object.defineProperty(e, t, { enumerable: n.enumerable }),
      {
        getValue: function () {
          return r;
        },
        setValue: function (s) {
          r = "" + s;
        },
        stopTracking: function () {
          (e._valueTracker = null), delete e[t];
        },
      }
    );
  }
}
function Ko(e) {
  e._valueTracker || (e._valueTracker = Ug(e));
}
function Pf(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var n = t.getValue(),
    r = "";
  return (
    e && (r = Rf(e) ? (e.checked ? "true" : "false") : e.value),
    (e = r),
    e !== n ? (t.setValue(e), !0) : !1
  );
}
function Pl(e) {
  if (((e = e || (typeof document < "u" ? document : void 0)), typeof e > "u"))
    return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function Mi(e, t) {
  var n = t.checked;
  return fe({}, t, {
    defaultChecked: void 0,
    defaultValue: void 0,
    value: void 0,
    checked: n ?? e._wrapperState.initialChecked,
  });
}
function ku(e, t) {
  var n = t.defaultValue == null ? "" : t.defaultValue,
    r = t.checked != null ? t.checked : t.defaultChecked;
  (n = cn(t.value != null ? t.value : n)),
    (e._wrapperState = {
      initialChecked: r,
      initialValue: n,
      controlled:
        t.type === "checkbox" || t.type === "radio"
          ? t.checked != null
          : t.value != null,
    });
}
function _f(e, t) {
  (t = t.checked), t != null && Ua(e, "checked", t, !1);
}
function Oi(e, t) {
  _f(e, t);
  var n = cn(t.value),
    r = t.type;
  if (n != null)
    r === "number"
      ? ((n === 0 && e.value === "") || e.value != n) && (e.value = "" + n)
      : e.value !== "" + n && (e.value = "" + n);
  else if (r === "submit" || r === "reset") {
    e.removeAttribute("value");
    return;
  }
  t.hasOwnProperty("value")
    ? zi(e, t.type, n)
    : t.hasOwnProperty("defaultValue") && zi(e, t.type, cn(t.defaultValue)),
    t.checked == null &&
      t.defaultChecked != null &&
      (e.defaultChecked = !!t.defaultChecked);
}
function Eu(e, t, n) {
  if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
    var r = t.type;
    if (
      !(
        (r !== "submit" && r !== "reset") ||
        (t.value !== void 0 && t.value !== null)
      )
    )
      return;
    (t = "" + e._wrapperState.initialValue),
      n || t === e.value || (e.value = t),
      (e.defaultValue = t);
  }
  (n = e.name),
    n !== "" && (e.name = ""),
    (e.defaultChecked = !!e._wrapperState.initialChecked),
    n !== "" && (e.name = n);
}
function zi(e, t, n) {
  (t !== "number" || Pl(e.ownerDocument) !== e) &&
    (n == null
      ? (e.defaultValue = "" + e._wrapperState.initialValue)
      : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
}
var Zr = Array.isArray;
function cr(e, t, n, r) {
  if (((e = e.options), t)) {
    t = {};
    for (var o = 0; o < n.length; o++) t["$" + n[o]] = !0;
    for (n = 0; n < e.length; n++)
      (o = t.hasOwnProperty("$" + e[n].value)),
        e[n].selected !== o && (e[n].selected = o),
        o && r && (e[n].defaultSelected = !0);
  } else {
    for (n = "" + cn(n), t = null, o = 0; o < e.length; o++) {
      if (e[o].value === n) {
        (e[o].selected = !0), r && (e[o].defaultSelected = !0);
        return;
      }
      t !== null || e[o].disabled || (t = e[o]);
    }
    t !== null && (t.selected = !0);
  }
}
function Di(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(R(91));
  return fe({}, t, {
    value: void 0,
    defaultValue: void 0,
    children: "" + e._wrapperState.initialValue,
  });
}
function Nu(e, t) {
  var n = t.value;
  if (n == null) {
    if (((n = t.children), (t = t.defaultValue), n != null)) {
      if (t != null) throw Error(R(92));
      if (Zr(n)) {
        if (1 < n.length) throw Error(R(93));
        n = n[0];
      }
      t = n;
    }
    t == null && (t = ""), (n = t);
  }
  e._wrapperState = { initialValue: cn(n) };
}
function If(e, t) {
  var n = cn(t.value),
    r = cn(t.defaultValue);
  n != null &&
    ((n = "" + n),
    n !== e.value && (e.value = n),
    t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
    r != null && (e.defaultValue = "" + r);
}
function ju(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
}
function Tf(e) {
  switch (e) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function Fi(e, t) {
  return e == null || e === "http://www.w3.org/1999/xhtml"
    ? Tf(t)
    : e === "http://www.w3.org/2000/svg" && t === "foreignObject"
    ? "http://www.w3.org/1999/xhtml"
    : e;
}
var Qo,
  Af = (function (e) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction
      ? function (t, n, r, o) {
          MSApp.execUnsafeLocalFunction(function () {
            return e(t, n, r, o);
          });
        }
      : e;
  })(function (e, t) {
    if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e)
      e.innerHTML = t;
    else {
      for (
        Qo = Qo || document.createElement("div"),
          Qo.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>",
          t = Qo.firstChild;
        e.firstChild;

      )
        e.removeChild(e.firstChild);
      for (; t.firstChild; ) e.appendChild(t.firstChild);
    }
  });
function po(e, t) {
  if (t) {
    var n = e.firstChild;
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var to = {
    animationIterationCount: !0,
    aspectRatio: !0,
    borderImageOutset: !0,
    borderImageSlice: !0,
    borderImageWidth: !0,
    boxFlex: !0,
    boxFlexGroup: !0,
    boxOrdinalGroup: !0,
    columnCount: !0,
    columns: !0,
    flex: !0,
    flexGrow: !0,
    flexPositive: !0,
    flexShrink: !0,
    flexNegative: !0,
    flexOrder: !0,
    gridArea: !0,
    gridRow: !0,
    gridRowEnd: !0,
    gridRowSpan: !0,
    gridRowStart: !0,
    gridColumn: !0,
    gridColumnEnd: !0,
    gridColumnSpan: !0,
    gridColumnStart: !0,
    fontWeight: !0,
    lineClamp: !0,
    lineHeight: !0,
    opacity: !0,
    order: !0,
    orphans: !0,
    tabSize: !0,
    widows: !0,
    zIndex: !0,
    zoom: !0,
    fillOpacity: !0,
    floodOpacity: !0,
    stopOpacity: !0,
    strokeDasharray: !0,
    strokeDashoffset: !0,
    strokeMiterlimit: !0,
    strokeOpacity: !0,
    strokeWidth: !0,
  },
  Hg = ["Webkit", "ms", "Moz", "O"];
Object.keys(to).forEach(function (e) {
  Hg.forEach(function (t) {
    (t = t + e.charAt(0).toUpperCase() + e.substring(1)), (to[t] = to[e]);
  });
});
function Lf(e, t, n) {
  return t == null || typeof t == "boolean" || t === ""
    ? ""
    : n || typeof t != "number" || t === 0 || (to.hasOwnProperty(e) && to[e])
    ? ("" + t).trim()
    : t + "px";
}
function Mf(e, t) {
  e = e.style;
  for (var n in t)
    if (t.hasOwnProperty(n)) {
      var r = n.indexOf("--") === 0,
        o = Lf(n, t[n], r);
      n === "float" && (n = "cssFloat"), r ? e.setProperty(n, o) : (e[n] = o);
    }
}
var Gg = fe(
  { menuitem: !0 },
  {
    area: !0,
    base: !0,
    br: !0,
    col: !0,
    embed: !0,
    hr: !0,
    img: !0,
    input: !0,
    keygen: !0,
    link: !0,
    meta: !0,
    param: !0,
    source: !0,
    track: !0,
    wbr: !0,
  }
);
function Vi(e, t) {
  if (t) {
    if (Gg[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
      throw Error(R(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(R(60));
      if (
        typeof t.dangerouslySetInnerHTML != "object" ||
        !("__html" in t.dangerouslySetInnerHTML)
      )
        throw Error(R(61));
    }
    if (t.style != null && typeof t.style != "object") throw Error(R(62));
  }
}
function $i(e, t) {
  if (e.indexOf("-") === -1) return typeof t.is == "string";
  switch (e) {
    case "annotation-xml":
    case "color-profile":
    case "font-face":
    case "font-face-src":
    case "font-face-uri":
    case "font-face-format":
    case "font-face-name":
    case "missing-glyph":
      return !1;
    default:
      return !0;
  }
}
var Bi = null;
function Qa(e) {
  return (
    (e = e.target || e.srcElement || window),
    e.correspondingUseElement && (e = e.correspondingUseElement),
    e.nodeType === 3 ? e.parentNode : e
  );
}
var Wi = null,
  ur = null,
  dr = null;
function Ru(e) {
  if ((e = zo(e))) {
    if (typeof Wi != "function") throw Error(R(280));
    var t = e.stateNode;
    t && ((t = hs(t)), Wi(e.stateNode, e.type, t));
  }
}
function Of(e) {
  ur ? (dr ? dr.push(e) : (dr = [e])) : (ur = e);
}
function zf() {
  if (ur) {
    var e = ur,
      t = dr;
    if (((dr = ur = null), Ru(e), t)) for (e = 0; e < t.length; e++) Ru(t[e]);
  }
}
function Df(e, t) {
  return e(t);
}
function Ff() {}
var Qs = !1;
function Vf(e, t, n) {
  if (Qs) return e(t, n);
  Qs = !0;
  try {
    return Df(e, t, n);
  } finally {
    (Qs = !1), (ur !== null || dr !== null) && (Ff(), zf());
  }
}
function mo(e, t) {
  var n = e.stateNode;
  if (n === null) return null;
  var r = hs(n);
  if (r === null) return null;
  n = r[t];
  e: switch (t) {
    case "onClick":
    case "onClickCapture":
    case "onDoubleClick":
    case "onDoubleClickCapture":
    case "onMouseDown":
    case "onMouseDownCapture":
    case "onMouseMove":
    case "onMouseMoveCapture":
    case "onMouseUp":
    case "onMouseUpCapture":
    case "onMouseEnter":
      (r = !r.disabled) ||
        ((e = e.type),
        (r = !(
          e === "button" ||
          e === "input" ||
          e === "select" ||
          e === "textarea"
        ))),
        (e = !r);
      break e;
    default:
      e = !1;
  }
  if (e) return null;
  if (n && typeof n != "function") throw Error(R(231, t, typeof n));
  return n;
}
var Ui = !1;
if (Mt)
  try {
    var Vr = {};
    Object.defineProperty(Vr, "passive", {
      get: function () {
        Ui = !0;
      },
    }),
      window.addEventListener("test", Vr, Vr),
      window.removeEventListener("test", Vr, Vr);
  } catch {
    Ui = !1;
  }
function Kg(e, t, n, r, o, l, s, i, a) {
  var c = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, c);
  } catch (f) {
    this.onError(f);
  }
}
var no = !1,
  _l = null,
  Il = !1,
  Hi = null,
  Qg = {
    onError: function (e) {
      (no = !0), (_l = e);
    },
  };
function Yg(e, t, n, r, o, l, s, i, a) {
  (no = !1), (_l = null), Kg.apply(Qg, arguments);
}
function Xg(e, t, n, r, o, l, s, i, a) {
  if ((Yg.apply(this, arguments), no)) {
    if (no) {
      var c = _l;
      (no = !1), (_l = null);
    } else throw Error(R(198));
    Il || ((Il = !0), (Hi = c));
  }
}
function $n(e) {
  var t = e,
    n = e;
  if (e.alternate) for (; t.return; ) t = t.return;
  else {
    e = t;
    do (t = e), t.flags & 4098 && (n = t.return), (e = t.return);
    while (e);
  }
  return t.tag === 3 ? n : null;
}
function $f(e) {
  if (e.tag === 13) {
    var t = e.memoizedState;
    if (
      (t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)),
      t !== null)
    )
      return t.dehydrated;
  }
  return null;
}
function Pu(e) {
  if ($n(e) !== e) throw Error(R(188));
}
function Zg(e) {
  var t = e.alternate;
  if (!t) {
    if (((t = $n(e)), t === null)) throw Error(R(188));
    return t !== e ? null : e;
  }
  for (var n = e, r = t; ; ) {
    var o = n.return;
    if (o === null) break;
    var l = o.alternate;
    if (l === null) {
      if (((r = o.return), r !== null)) {
        n = r;
        continue;
      }
      break;
    }
    if (o.child === l.child) {
      for (l = o.child; l; ) {
        if (l === n) return Pu(o), e;
        if (l === r) return Pu(o), t;
        l = l.sibling;
      }
      throw Error(R(188));
    }
    if (n.return !== r.return) (n = o), (r = l);
    else {
      for (var s = !1, i = o.child; i; ) {
        if (i === n) {
          (s = !0), (n = o), (r = l);
          break;
        }
        if (i === r) {
          (s = !0), (r = o), (n = l);
          break;
        }
        i = i.sibling;
      }
      if (!s) {
        for (i = l.child; i; ) {
          if (i === n) {
            (s = !0), (n = l), (r = o);
            break;
          }
          if (i === r) {
            (s = !0), (r = l), (n = o);
            break;
          }
          i = i.sibling;
        }
        if (!s) throw Error(R(189));
      }
    }
    if (n.alternate !== r) throw Error(R(190));
  }
  if (n.tag !== 3) throw Error(R(188));
  return n.stateNode.current === n ? e : t;
}
function Bf(e) {
  return (e = Zg(e)), e !== null ? Wf(e) : null;
}
function Wf(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null; ) {
    var t = Wf(e);
    if (t !== null) return t;
    e = e.sibling;
  }
  return null;
}
var Uf = Qe.unstable_scheduleCallback,
  _u = Qe.unstable_cancelCallback,
  qg = Qe.unstable_shouldYield,
  Jg = Qe.unstable_requestPaint,
  me = Qe.unstable_now,
  ey = Qe.unstable_getCurrentPriorityLevel,
  Ya = Qe.unstable_ImmediatePriority,
  Hf = Qe.unstable_UserBlockingPriority,
  Tl = Qe.unstable_NormalPriority,
  ty = Qe.unstable_LowPriority,
  Gf = Qe.unstable_IdlePriority,
  ds = null,
  kt = null;
function ny(e) {
  if (kt && typeof kt.onCommitFiberRoot == "function")
    try {
      kt.onCommitFiberRoot(ds, e, void 0, (e.current.flags & 128) === 128);
    } catch {}
}
var ut = Math.clz32 ? Math.clz32 : ly,
  ry = Math.log,
  oy = Math.LN2;
function ly(e) {
  return (e >>>= 0), e === 0 ? 32 : (31 - ((ry(e) / oy) | 0)) | 0;
}
var Yo = 64,
  Xo = 4194304;
function qr(e) {
  switch (e & -e) {
    case 1:
      return 1;
    case 2:
      return 2;
    case 4:
      return 4;
    case 8:
      return 8;
    case 16:
      return 16;
    case 32:
      return 32;
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return e & 4194240;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return e & 130023424;
    case 134217728:
      return 134217728;
    case 268435456:
      return 268435456;
    case 536870912:
      return 536870912;
    case 1073741824:
      return 1073741824;
    default:
      return e;
  }
}
function Al(e, t) {
  var n = e.pendingLanes;
  if (n === 0) return 0;
  var r = 0,
    o = e.suspendedLanes,
    l = e.pingedLanes,
    s = n & 268435455;
  if (s !== 0) {
    var i = s & ~o;
    i !== 0 ? (r = qr(i)) : ((l &= s), l !== 0 && (r = qr(l)));
  } else (s = n & ~o), s !== 0 ? (r = qr(s)) : l !== 0 && (r = qr(l));
  if (r === 0) return 0;
  if (
    t !== 0 &&
    t !== r &&
    !(t & o) &&
    ((o = r & -r), (l = t & -t), o >= l || (o === 16 && (l & 4194240) !== 0))
  )
    return t;
  if ((r & 4 && (r |= n & 16), (t = e.entangledLanes), t !== 0))
    for (e = e.entanglements, t &= r; 0 < t; )
      (n = 31 - ut(t)), (o = 1 << n), (r |= e[n]), (t &= ~o);
  return r;
}
function sy(e, t) {
  switch (e) {
    case 1:
    case 2:
    case 4:
      return t + 250;
    case 8:
    case 16:
    case 32:
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return t + 5e3;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return -1;
    case 134217728:
    case 268435456:
    case 536870912:
    case 1073741824:
      return -1;
    default:
      return -1;
  }
}
function iy(e, t) {
  for (
    var n = e.suspendedLanes,
      r = e.pingedLanes,
      o = e.expirationTimes,
      l = e.pendingLanes;
    0 < l;

  ) {
    var s = 31 - ut(l),
      i = 1 << s,
      a = o[s];
    a === -1
      ? (!(i & n) || i & r) && (o[s] = sy(i, t))
      : a <= t && (e.expiredLanes |= i),
      (l &= ~i);
  }
}
function Gi(e) {
  return (
    (e = e.pendingLanes & -1073741825),
    e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
  );
}
function Kf() {
  var e = Yo;
  return (Yo <<= 1), !(Yo & 4194240) && (Yo = 64), e;
}
function Ys(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e);
  return t;
}
function Mo(e, t, n) {
  (e.pendingLanes |= t),
    t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
    (e = e.eventTimes),
    (t = 31 - ut(t)),
    (e[t] = n);
}
function ay(e, t) {
  var n = e.pendingLanes & ~t;
  (e.pendingLanes = t),
    (e.suspendedLanes = 0),
    (e.pingedLanes = 0),
    (e.expiredLanes &= t),
    (e.mutableReadLanes &= t),
    (e.entangledLanes &= t),
    (t = e.entanglements);
  var r = e.eventTimes;
  for (e = e.expirationTimes; 0 < n; ) {
    var o = 31 - ut(n),
      l = 1 << o;
    (t[o] = 0), (r[o] = -1), (e[o] = -1), (n &= ~l);
  }
}
function Xa(e, t) {
  var n = (e.entangledLanes |= t);
  for (e = e.entanglements; n; ) {
    var r = 31 - ut(n),
      o = 1 << r;
    (o & t) | (e[r] & t) && (e[r] |= t), (n &= ~o);
  }
}
var q = 0;
function Qf(e) {
  return (e &= -e), 1 < e ? (4 < e ? (e & 268435455 ? 16 : 536870912) : 4) : 1;
}
var Yf,
  Za,
  Xf,
  Zf,
  qf,
  Ki = !1,
  Zo = [],
  Jt = null,
  en = null,
  tn = null,
  ho = new Map(),
  vo = new Map(),
  Yt = [],
  cy =
    "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
      " "
    );
function Iu(e, t) {
  switch (e) {
    case "focusin":
    case "focusout":
      Jt = null;
      break;
    case "dragenter":
    case "dragleave":
      en = null;
      break;
    case "mouseover":
    case "mouseout":
      tn = null;
      break;
    case "pointerover":
    case "pointerout":
      ho.delete(t.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      vo.delete(t.pointerId);
  }
}
function $r(e, t, n, r, o, l) {
  return e === null || e.nativeEvent !== l
    ? ((e = {
        blockedOn: t,
        domEventName: n,
        eventSystemFlags: r,
        nativeEvent: l,
        targetContainers: [o],
      }),
      t !== null && ((t = zo(t)), t !== null && Za(t)),
      e)
    : ((e.eventSystemFlags |= r),
      (t = e.targetContainers),
      o !== null && t.indexOf(o) === -1 && t.push(o),
      e);
}
function uy(e, t, n, r, o) {
  switch (t) {
    case "focusin":
      return (Jt = $r(Jt, e, t, n, r, o)), !0;
    case "dragenter":
      return (en = $r(en, e, t, n, r, o)), !0;
    case "mouseover":
      return (tn = $r(tn, e, t, n, r, o)), !0;
    case "pointerover":
      var l = o.pointerId;
      return ho.set(l, $r(ho.get(l) || null, e, t, n, r, o)), !0;
    case "gotpointercapture":
      return (
        (l = o.pointerId), vo.set(l, $r(vo.get(l) || null, e, t, n, r, o)), !0
      );
  }
  return !1;
}
function Jf(e) {
  var t = En(e.target);
  if (t !== null) {
    var n = $n(t);
    if (n !== null) {
      if (((t = n.tag), t === 13)) {
        if (((t = $f(n)), t !== null)) {
          (e.blockedOn = t),
            qf(e.priority, function () {
              Xf(n);
            });
          return;
        }
      } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
        e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
        return;
      }
    }
  }
  e.blockedOn = null;
}
function vl(e) {
  if (e.blockedOn !== null) return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = Qi(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var r = new n.constructor(n.type, n);
      (Bi = r), n.target.dispatchEvent(r), (Bi = null);
    } else return (t = zo(n)), t !== null && Za(t), (e.blockedOn = n), !1;
    t.shift();
  }
  return !0;
}
function Tu(e, t, n) {
  vl(e) && n.delete(t);
}
function dy() {
  (Ki = !1),
    Jt !== null && vl(Jt) && (Jt = null),
    en !== null && vl(en) && (en = null),
    tn !== null && vl(tn) && (tn = null),
    ho.forEach(Tu),
    vo.forEach(Tu);
}
function Br(e, t) {
  e.blockedOn === t &&
    ((e.blockedOn = null),
    Ki ||
      ((Ki = !0),
      Qe.unstable_scheduleCallback(Qe.unstable_NormalPriority, dy)));
}
function go(e) {
  function t(o) {
    return Br(o, e);
  }
  if (0 < Zo.length) {
    Br(Zo[0], e);
    for (var n = 1; n < Zo.length; n++) {
      var r = Zo[n];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (
    Jt !== null && Br(Jt, e),
      en !== null && Br(en, e),
      tn !== null && Br(tn, e),
      ho.forEach(t),
      vo.forEach(t),
      n = 0;
    n < Yt.length;
    n++
  )
    (r = Yt[n]), r.blockedOn === e && (r.blockedOn = null);
  for (; 0 < Yt.length && ((n = Yt[0]), n.blockedOn === null); )
    Jf(n), n.blockedOn === null && Yt.shift();
}
var fr = $t.ReactCurrentBatchConfig,
  Ll = !0;
function fy(e, t, n, r) {
  var o = q,
    l = fr.transition;
  fr.transition = null;
  try {
    (q = 1), qa(e, t, n, r);
  } finally {
    (q = o), (fr.transition = l);
  }
}
function py(e, t, n, r) {
  var o = q,
    l = fr.transition;
  fr.transition = null;
  try {
    (q = 4), qa(e, t, n, r);
  } finally {
    (q = o), (fr.transition = l);
  }
}
function qa(e, t, n, r) {
  if (Ll) {
    var o = Qi(e, t, n, r);
    if (o === null) li(e, t, r, Ml, n), Iu(e, r);
    else if (uy(o, e, t, n, r)) r.stopPropagation();
    else if ((Iu(e, r), t & 4 && -1 < cy.indexOf(e))) {
      for (; o !== null; ) {
        var l = zo(o);
        if (
          (l !== null && Yf(l),
          (l = Qi(e, t, n, r)),
          l === null && li(e, t, r, Ml, n),
          l === o)
        )
          break;
        o = l;
      }
      o !== null && r.stopPropagation();
    } else li(e, t, r, null, n);
  }
}
var Ml = null;
function Qi(e, t, n, r) {
  if (((Ml = null), (e = Qa(r)), (e = En(e)), e !== null))
    if (((t = $n(e)), t === null)) e = null;
    else if (((n = t.tag), n === 13)) {
      if (((e = $f(t)), e !== null)) return e;
      e = null;
    } else if (n === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated)
        return t.tag === 3 ? t.stateNode.containerInfo : null;
      e = null;
    } else t !== e && (e = null);
  return (Ml = e), null;
}
function ep(e) {
  switch (e) {
    case "cancel":
    case "click":
    case "close":
    case "contextmenu":
    case "copy":
    case "cut":
    case "auxclick":
    case "dblclick":
    case "dragend":
    case "dragstart":
    case "drop":
    case "focusin":
    case "focusout":
    case "input":
    case "invalid":
    case "keydown":
    case "keypress":
    case "keyup":
    case "mousedown":
    case "mouseup":
    case "paste":
    case "pause":
    case "play":
    case "pointercancel":
    case "pointerdown":
    case "pointerup":
    case "ratechange":
    case "reset":
    case "resize":
    case "seeked":
    case "submit":
    case "touchcancel":
    case "touchend":
    case "touchstart":
    case "volumechange":
    case "change":
    case "selectionchange":
    case "textInput":
    case "compositionstart":
    case "compositionend":
    case "compositionupdate":
    case "beforeblur":
    case "afterblur":
    case "beforeinput":
    case "blur":
    case "fullscreenchange":
    case "focus":
    case "hashchange":
    case "popstate":
    case "select":
    case "selectstart":
      return 1;
    case "drag":
    case "dragenter":
    case "dragexit":
    case "dragleave":
    case "dragover":
    case "mousemove":
    case "mouseout":
    case "mouseover":
    case "pointermove":
    case "pointerout":
    case "pointerover":
    case "scroll":
    case "toggle":
    case "touchmove":
    case "wheel":
    case "mouseenter":
    case "mouseleave":
    case "pointerenter":
    case "pointerleave":
      return 4;
    case "message":
      switch (ey()) {
        case Ya:
          return 1;
        case Hf:
          return 4;
        case Tl:
        case ty:
          return 16;
        case Gf:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var Zt = null,
  Ja = null,
  gl = null;
function tp() {
  if (gl) return gl;
  var e,
    t = Ja,
    n = t.length,
    r,
    o = "value" in Zt ? Zt.value : Zt.textContent,
    l = o.length;
  for (e = 0; e < n && t[e] === o[e]; e++);
  var s = n - e;
  for (r = 1; r <= s && t[n - r] === o[l - r]; r++);
  return (gl = o.slice(e, 1 < r ? 1 - r : void 0));
}
function yl(e) {
  var t = e.keyCode;
  return (
    "charCode" in e
      ? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
      : (e = t),
    e === 10 && (e = 13),
    32 <= e || e === 13 ? e : 0
  );
}
function qo() {
  return !0;
}
function Au() {
  return !1;
}
function Xe(e) {
  function t(n, r, o, l, s) {
    (this._reactName = n),
      (this._targetInst = o),
      (this.type = r),
      (this.nativeEvent = l),
      (this.target = s),
      (this.currentTarget = null);
    for (var i in e)
      e.hasOwnProperty(i) && ((n = e[i]), (this[i] = n ? n(l) : l[i]));
    return (
      (this.isDefaultPrevented = (
        l.defaultPrevented != null ? l.defaultPrevented : l.returnValue === !1
      )
        ? qo
        : Au),
      (this.isPropagationStopped = Au),
      this
    );
  }
  return (
    fe(t.prototype, {
      preventDefault: function () {
        this.defaultPrevented = !0;
        var n = this.nativeEvent;
        n &&
          (n.preventDefault
            ? n.preventDefault()
            : typeof n.returnValue != "unknown" && (n.returnValue = !1),
          (this.isDefaultPrevented = qo));
      },
      stopPropagation: function () {
        var n = this.nativeEvent;
        n &&
          (n.stopPropagation
            ? n.stopPropagation()
            : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0),
          (this.isPropagationStopped = qo));
      },
      persist: function () {},
      isPersistent: qo,
    }),
    t
  );
}
var Rr = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function (e) {
      return e.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0,
  },
  ec = Xe(Rr),
  Oo = fe({}, Rr, { view: 0, detail: 0 }),
  my = Xe(Oo),
  Xs,
  Zs,
  Wr,
  fs = fe({}, Oo, {
    screenX: 0,
    screenY: 0,
    clientX: 0,
    clientY: 0,
    pageX: 0,
    pageY: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    getModifierState: tc,
    button: 0,
    buttons: 0,
    relatedTarget: function (e) {
      return e.relatedTarget === void 0
        ? e.fromElement === e.srcElement
          ? e.toElement
          : e.fromElement
        : e.relatedTarget;
    },
    movementX: function (e) {
      return "movementX" in e
        ? e.movementX
        : (e !== Wr &&
            (Wr && e.type === "mousemove"
              ? ((Xs = e.screenX - Wr.screenX), (Zs = e.screenY - Wr.screenY))
              : (Zs = Xs = 0),
            (Wr = e)),
          Xs);
    },
    movementY: function (e) {
      return "movementY" in e ? e.movementY : Zs;
    },
  }),
  Lu = Xe(fs),
  hy = fe({}, fs, { dataTransfer: 0 }),
  vy = Xe(hy),
  gy = fe({}, Oo, { relatedTarget: 0 }),
  qs = Xe(gy),
  yy = fe({}, Rr, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
  xy = Xe(yy),
  wy = fe({}, Rr, {
    clipboardData: function (e) {
      return "clipboardData" in e ? e.clipboardData : window.clipboardData;
    },
  }),
  by = Xe(wy),
  Sy = fe({}, Rr, { data: 0 }),
  Mu = Xe(Sy),
  Cy = {
    Esc: "Escape",
    Spacebar: " ",
    Left: "ArrowLeft",
    Up: "ArrowUp",
    Right: "ArrowRight",
    Down: "ArrowDown",
    Del: "Delete",
    Win: "OS",
    Menu: "ContextMenu",
    Apps: "ContextMenu",
    Scroll: "ScrollLock",
    MozPrintableKey: "Unidentified",
  },
  ky = {
    8: "Backspace",
    9: "Tab",
    12: "Clear",
    13: "Enter",
    16: "Shift",
    17: "Control",
    18: "Alt",
    19: "Pause",
    20: "CapsLock",
    27: "Escape",
    32: " ",
    33: "PageUp",
    34: "PageDown",
    35: "End",
    36: "Home",
    37: "ArrowLeft",
    38: "ArrowUp",
    39: "ArrowRight",
    40: "ArrowDown",
    45: "Insert",
    46: "Delete",
    112: "F1",
    113: "F2",
    114: "F3",
    115: "F4",
    116: "F5",
    117: "F6",
    118: "F7",
    119: "F8",
    120: "F9",
    121: "F10",
    122: "F11",
    123: "F12",
    144: "NumLock",
    145: "ScrollLock",
    224: "Meta",
  },
  Ey = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey",
  };
function Ny(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = Ey[e]) ? !!t[e] : !1;
}
function tc() {
  return Ny;
}
var jy = fe({}, Oo, {
    key: function (e) {
      if (e.key) {
        var t = Cy[e.key] || e.key;
        if (t !== "Unidentified") return t;
      }
      return e.type === "keypress"
        ? ((e = yl(e)), e === 13 ? "Enter" : String.fromCharCode(e))
        : e.type === "keydown" || e.type === "keyup"
        ? ky[e.keyCode] || "Unidentified"
        : "";
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: tc,
    charCode: function (e) {
      return e.type === "keypress" ? yl(e) : 0;
    },
    keyCode: function (e) {
      return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    },
    which: function (e) {
      return e.type === "keypress"
        ? yl(e)
        : e.type === "keydown" || e.type === "keyup"
        ? e.keyCode
        : 0;
    },
  }),
  Ry = Xe(jy),
  Py = fe({}, fs, {
    pointerId: 0,
    width: 0,
    height: 0,
    pressure: 0,
    tangentialPressure: 0,
    tiltX: 0,
    tiltY: 0,
    twist: 0,
    pointerType: 0,
    isPrimary: 0,
  }),
  Ou = Xe(Py),
  _y = fe({}, Oo, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: tc,
  }),
  Iy = Xe(_y),
  Ty = fe({}, Rr, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
  Ay = Xe(Ty),
  Ly = fe({}, fs, {
    deltaX: function (e) {
      return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function (e) {
      return "deltaY" in e
        ? e.deltaY
        : "wheelDeltaY" in e
        ? -e.wheelDeltaY
        : "wheelDelta" in e
        ? -e.wheelDelta
        : 0;
    },
    deltaZ: 0,
    deltaMode: 0,
  }),
  My = Xe(Ly),
  Oy = [9, 13, 27, 32],
  nc = Mt && "CompositionEvent" in window,
  ro = null;
Mt && "documentMode" in document && (ro = document.documentMode);
var zy = Mt && "TextEvent" in window && !ro,
  np = Mt && (!nc || (ro && 8 < ro && 11 >= ro)),
  zu = " ",
  Du = !1;
function rp(e, t) {
  switch (e) {
    case "keyup":
      return Oy.indexOf(t.keyCode) !== -1;
    case "keydown":
      return t.keyCode !== 229;
    case "keypress":
    case "mousedown":
    case "focusout":
      return !0;
    default:
      return !1;
  }
}
function op(e) {
  return (e = e.detail), typeof e == "object" && "data" in e ? e.data : null;
}
var Jn = !1;
function Dy(e, t) {
  switch (e) {
    case "compositionend":
      return op(t);
    case "keypress":
      return t.which !== 32 ? null : ((Du = !0), zu);
    case "textInput":
      return (e = t.data), e === zu && Du ? null : e;
    default:
      return null;
  }
}
function Fy(e, t) {
  if (Jn)
    return e === "compositionend" || (!nc && rp(e, t))
      ? ((e = tp()), (gl = Ja = Zt = null), (Jn = !1), e)
      : null;
  switch (e) {
    case "paste":
      return null;
    case "keypress":
      if (!(t.ctrlKey || t.altKey || t.metaKey) || (t.ctrlKey && t.altKey)) {
        if (t.char && 1 < t.char.length) return t.char;
        if (t.which) return String.fromCharCode(t.which);
      }
      return null;
    case "compositionend":
      return np && t.locale !== "ko" ? null : t.data;
    default:
      return null;
  }
}
var Vy = {
  color: !0,
  date: !0,
  datetime: !0,
  "datetime-local": !0,
  email: !0,
  month: !0,
  number: !0,
  password: !0,
  range: !0,
  search: !0,
  tel: !0,
  text: !0,
  time: !0,
  url: !0,
  week: !0,
};
function Fu(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!Vy[e.type] : t === "textarea";
}
function lp(e, t, n, r) {
  Of(r),
    (t = Ol(t, "onChange")),
    0 < t.length &&
      ((n = new ec("onChange", "change", null, n, r)),
      e.push({ event: n, listeners: t }));
}
var oo = null,
  yo = null;
function $y(e) {
  vp(e, 0);
}
function ps(e) {
  var t = nr(e);
  if (Pf(t)) return e;
}
function By(e, t) {
  if (e === "change") return t;
}
var sp = !1;
if (Mt) {
  var Js;
  if (Mt) {
    var ei = "oninput" in document;
    if (!ei) {
      var Vu = document.createElement("div");
      Vu.setAttribute("oninput", "return;"),
        (ei = typeof Vu.oninput == "function");
    }
    Js = ei;
  } else Js = !1;
  sp = Js && (!document.documentMode || 9 < document.documentMode);
}
function $u() {
  oo && (oo.detachEvent("onpropertychange", ip), (yo = oo = null));
}
function ip(e) {
  if (e.propertyName === "value" && ps(yo)) {
    var t = [];
    lp(t, yo, e, Qa(e)), Vf($y, t);
  }
}
function Wy(e, t, n) {
  e === "focusin"
    ? ($u(), (oo = t), (yo = n), oo.attachEvent("onpropertychange", ip))
    : e === "focusout" && $u();
}
function Uy(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown")
    return ps(yo);
}
function Hy(e, t) {
  if (e === "click") return ps(t);
}
function Gy(e, t) {
  if (e === "input" || e === "change") return ps(t);
}
function Ky(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var ft = typeof Object.is == "function" ? Object.is : Ky;
function xo(e, t) {
  if (ft(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null)
    return !1;
  var n = Object.keys(e),
    r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (r = 0; r < n.length; r++) {
    var o = n[r];
    if (!_i.call(t, o) || !ft(e[o], t[o])) return !1;
  }
  return !0;
}
function Bu(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function Wu(e, t) {
  var n = Bu(e);
  e = 0;
  for (var r; n; ) {
    if (n.nodeType === 3) {
      if (((r = e + n.textContent.length), e <= t && r >= t))
        return { node: n, offset: t - e };
      e = r;
    }
    e: {
      for (; n; ) {
        if (n.nextSibling) {
          n = n.nextSibling;
          break e;
        }
        n = n.parentNode;
      }
      n = void 0;
    }
    n = Bu(n);
  }
}
function ap(e, t) {
  return e && t
    ? e === t
      ? !0
      : e && e.nodeType === 3
      ? !1
      : t && t.nodeType === 3
      ? ap(e, t.parentNode)
      : "contains" in e
      ? e.contains(t)
      : e.compareDocumentPosition
      ? !!(e.compareDocumentPosition(t) & 16)
      : !1
    : !1;
}
function cp() {
  for (var e = window, t = Pl(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == "string";
    } catch {
      n = !1;
    }
    if (n) e = t.contentWindow;
    else break;
    t = Pl(e.document);
  }
  return t;
}
function rc(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return (
    t &&
    ((t === "input" &&
      (e.type === "text" ||
        e.type === "search" ||
        e.type === "tel" ||
        e.type === "url" ||
        e.type === "password")) ||
      t === "textarea" ||
      e.contentEditable === "true")
  );
}
function Qy(e) {
  var t = cp(),
    n = e.focusedElem,
    r = e.selectionRange;
  if (
    t !== n &&
    n &&
    n.ownerDocument &&
    ap(n.ownerDocument.documentElement, n)
  ) {
    if (r !== null && rc(n)) {
      if (
        ((t = r.start),
        (e = r.end),
        e === void 0 && (e = t),
        "selectionStart" in n)
      )
        (n.selectionStart = t), (n.selectionEnd = Math.min(e, n.value.length));
      else if (
        ((e = ((t = n.ownerDocument || document) && t.defaultView) || window),
        e.getSelection)
      ) {
        e = e.getSelection();
        var o = n.textContent.length,
          l = Math.min(r.start, o);
        (r = r.end === void 0 ? l : Math.min(r.end, o)),
          !e.extend && l > r && ((o = r), (r = l), (l = o)),
          (o = Wu(n, l));
        var s = Wu(n, r);
        o &&
          s &&
          (e.rangeCount !== 1 ||
            e.anchorNode !== o.node ||
            e.anchorOffset !== o.offset ||
            e.focusNode !== s.node ||
            e.focusOffset !== s.offset) &&
          ((t = t.createRange()),
          t.setStart(o.node, o.offset),
          e.removeAllRanges(),
          l > r
            ? (e.addRange(t), e.extend(s.node, s.offset))
            : (t.setEnd(s.node, s.offset), e.addRange(t)));
      }
    }
    for (t = [], e = n; (e = e.parentNode); )
      e.nodeType === 1 &&
        t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
    for (typeof n.focus == "function" && n.focus(), n = 0; n < t.length; n++)
      (e = t[n]),
        (e.element.scrollLeft = e.left),
        (e.element.scrollTop = e.top);
  }
}
var Yy = Mt && "documentMode" in document && 11 >= document.documentMode,
  er = null,
  Yi = null,
  lo = null,
  Xi = !1;
function Uu(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  Xi ||
    er == null ||
    er !== Pl(r) ||
    ((r = er),
    "selectionStart" in r && rc(r)
      ? (r = { start: r.selectionStart, end: r.selectionEnd })
      : ((r = (
          (r.ownerDocument && r.ownerDocument.defaultView) ||
          window
        ).getSelection()),
        (r = {
          anchorNode: r.anchorNode,
          anchorOffset: r.anchorOffset,
          focusNode: r.focusNode,
          focusOffset: r.focusOffset,
        })),
    (lo && xo(lo, r)) ||
      ((lo = r),
      (r = Ol(Yi, "onSelect")),
      0 < r.length &&
        ((t = new ec("onSelect", "select", null, t, n)),
        e.push({ event: t, listeners: r }),
        (t.target = er))));
}
function Jo(e, t) {
  var n = {};
  return (
    (n[e.toLowerCase()] = t.toLowerCase()),
    (n["Webkit" + e] = "webkit" + t),
    (n["Moz" + e] = "moz" + t),
    n
  );
}
var tr = {
    animationend: Jo("Animation", "AnimationEnd"),
    animationiteration: Jo("Animation", "AnimationIteration"),
    animationstart: Jo("Animation", "AnimationStart"),
    transitionend: Jo("Transition", "TransitionEnd"),
  },
  ti = {},
  up = {};
Mt &&
  ((up = document.createElement("div").style),
  "AnimationEvent" in window ||
    (delete tr.animationend.animation,
    delete tr.animationiteration.animation,
    delete tr.animationstart.animation),
  "TransitionEvent" in window || delete tr.transitionend.transition);
function ms(e) {
  if (ti[e]) return ti[e];
  if (!tr[e]) return e;
  var t = tr[e],
    n;
  for (n in t) if (t.hasOwnProperty(n) && n in up) return (ti[e] = t[n]);
  return e;
}
var dp = ms("animationend"),
  fp = ms("animationiteration"),
  pp = ms("animationstart"),
  mp = ms("transitionend"),
  hp = new Map(),
  Hu =
    "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
      " "
    );
function hn(e, t) {
  hp.set(e, t), Vn(t, [e]);
}
for (var ni = 0; ni < Hu.length; ni++) {
  var ri = Hu[ni],
    Xy = ri.toLowerCase(),
    Zy = ri[0].toUpperCase() + ri.slice(1);
  hn(Xy, "on" + Zy);
}
hn(dp, "onAnimationEnd");
hn(fp, "onAnimationIteration");
hn(pp, "onAnimationStart");
hn("dblclick", "onDoubleClick");
hn("focusin", "onFocus");
hn("focusout", "onBlur");
hn(mp, "onTransitionEnd");
xr("onMouseEnter", ["mouseout", "mouseover"]);
xr("onMouseLeave", ["mouseout", "mouseover"]);
xr("onPointerEnter", ["pointerout", "pointerover"]);
xr("onPointerLeave", ["pointerout", "pointerover"]);
Vn(
  "onChange",
  "change click focusin focusout input keydown keyup selectionchange".split(" ")
);
Vn(
  "onSelect",
  "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
    " "
  )
);
Vn("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
Vn(
  "onCompositionEnd",
  "compositionend focusout keydown keypress keyup mousedown".split(" ")
);
Vn(
  "onCompositionStart",
  "compositionstart focusout keydown keypress keyup mousedown".split(" ")
);
Vn(
  "onCompositionUpdate",
  "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
);
var Jr =
    "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
      " "
    ),
  qy = new Set("cancel close invalid load scroll toggle".split(" ").concat(Jr));
function Gu(e, t, n) {
  var r = e.type || "unknown-event";
  (e.currentTarget = n), Xg(r, t, void 0, e), (e.currentTarget = null);
}
function vp(e, t) {
  t = (t & 4) !== 0;
  for (var n = 0; n < e.length; n++) {
    var r = e[n],
      o = r.event;
    r = r.listeners;
    e: {
      var l = void 0;
      if (t)
        for (var s = r.length - 1; 0 <= s; s--) {
          var i = r[s],
            a = i.instance,
            c = i.currentTarget;
          if (((i = i.listener), a !== l && o.isPropagationStopped())) break e;
          Gu(o, i, c), (l = a);
        }
      else
        for (s = 0; s < r.length; s++) {
          if (
            ((i = r[s]),
            (a = i.instance),
            (c = i.currentTarget),
            (i = i.listener),
            a !== l && o.isPropagationStopped())
          )
            break e;
          Gu(o, i, c), (l = a);
        }
    }
  }
  if (Il) throw ((e = Hi), (Il = !1), (Hi = null), e);
}
function ie(e, t) {
  var n = t[ta];
  n === void 0 && (n = t[ta] = new Set());
  var r = e + "__bubble";
  n.has(r) || (gp(t, e, 2, !1), n.add(r));
}
function oi(e, t, n) {
  var r = 0;
  t && (r |= 4), gp(n, e, r, t);
}
var el = "_reactListening" + Math.random().toString(36).slice(2);
function wo(e) {
  if (!e[el]) {
    (e[el] = !0),
      kf.forEach(function (n) {
        n !== "selectionchange" && (qy.has(n) || oi(n, !1, e), oi(n, !0, e));
      });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[el] || ((t[el] = !0), oi("selectionchange", !1, t));
  }
}
function gp(e, t, n, r) {
  switch (ep(t)) {
    case 1:
      var o = fy;
      break;
    case 4:
      o = py;
      break;
    default:
      o = qa;
  }
  (n = o.bind(null, t, n, e)),
    (o = void 0),
    !Ui ||
      (t !== "touchstart" && t !== "touchmove" && t !== "wheel") ||
      (o = !0),
    r
      ? o !== void 0
        ? e.addEventListener(t, n, { capture: !0, passive: o })
        : e.addEventListener(t, n, !0)
      : o !== void 0
      ? e.addEventListener(t, n, { passive: o })
      : e.addEventListener(t, n, !1);
}
function li(e, t, n, r, o) {
  var l = r;
  if (!(t & 1) && !(t & 2) && r !== null)
    e: for (;;) {
      if (r === null) return;
      var s = r.tag;
      if (s === 3 || s === 4) {
        var i = r.stateNode.containerInfo;
        if (i === o || (i.nodeType === 8 && i.parentNode === o)) break;
        if (s === 4)
          for (s = r.return; s !== null; ) {
            var a = s.tag;
            if (
              (a === 3 || a === 4) &&
              ((a = s.stateNode.containerInfo),
              a === o || (a.nodeType === 8 && a.parentNode === o))
            )
              return;
            s = s.return;
          }
        for (; i !== null; ) {
          if (((s = En(i)), s === null)) return;
          if (((a = s.tag), a === 5 || a === 6)) {
            r = l = s;
            continue e;
          }
          i = i.parentNode;
        }
      }
      r = r.return;
    }
  Vf(function () {
    var c = l,
      f = Qa(n),
      p = [];
    e: {
      var m = hp.get(e);
      if (m !== void 0) {
        var x = ec,
          w = e;
        switch (e) {
          case "keypress":
            if (yl(n) === 0) break e;
          case "keydown":
          case "keyup":
            x = Ry;
            break;
          case "focusin":
            (w = "focus"), (x = qs);
            break;
          case "focusout":
            (w = "blur"), (x = qs);
            break;
          case "beforeblur":
          case "afterblur":
            x = qs;
            break;
          case "click":
            if (n.button === 2) break e;
          case "auxclick":
          case "dblclick":
          case "mousedown":
          case "mousemove":
          case "mouseup":
          case "mouseout":
          case "mouseover":
          case "contextmenu":
            x = Lu;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            x = vy;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            x = Iy;
            break;
          case dp:
          case fp:
          case pp:
            x = xy;
            break;
          case mp:
            x = Ay;
            break;
          case "scroll":
            x = my;
            break;
          case "wheel":
            x = My;
            break;
          case "copy":
          case "cut":
          case "paste":
            x = by;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            x = Ou;
        }
        var v = (t & 4) !== 0,
          b = !v && e === "scroll",
          h = v ? (m !== null ? m + "Capture" : null) : m;
        v = [];
        for (var d = c, y; d !== null; ) {
          y = d;
          var S = y.stateNode;
          if (
            (y.tag === 5 &&
              S !== null &&
              ((y = S),
              h !== null && ((S = mo(d, h)), S != null && v.push(bo(d, S, y)))),
            b)
          )
            break;
          d = d.return;
        }
        0 < v.length &&
          ((m = new x(m, w, null, n, f)), p.push({ event: m, listeners: v }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (
          ((m = e === "mouseover" || e === "pointerover"),
          (x = e === "mouseout" || e === "pointerout"),
          m &&
            n !== Bi &&
            (w = n.relatedTarget || n.fromElement) &&
            (En(w) || w[Ot]))
        )
          break e;
        if (
          (x || m) &&
          ((m =
            f.window === f
              ? f
              : (m = f.ownerDocument)
              ? m.defaultView || m.parentWindow
              : window),
          x
            ? ((w = n.relatedTarget || n.toElement),
              (x = c),
              (w = w ? En(w) : null),
              w !== null &&
                ((b = $n(w)), w !== b || (w.tag !== 5 && w.tag !== 6)) &&
                (w = null))
            : ((x = null), (w = c)),
          x !== w)
        ) {
          if (
            ((v = Lu),
            (S = "onMouseLeave"),
            (h = "onMouseEnter"),
            (d = "mouse"),
            (e === "pointerout" || e === "pointerover") &&
              ((v = Ou),
              (S = "onPointerLeave"),
              (h = "onPointerEnter"),
              (d = "pointer")),
            (b = x == null ? m : nr(x)),
            (y = w == null ? m : nr(w)),
            (m = new v(S, d + "leave", x, n, f)),
            (m.target = b),
            (m.relatedTarget = y),
            (S = null),
            En(f) === c &&
              ((v = new v(h, d + "enter", w, n, f)),
              (v.target = y),
              (v.relatedTarget = b),
              (S = v)),
            (b = S),
            x && w)
          )
            t: {
              for (v = x, h = w, d = 0, y = v; y; y = Hn(y)) d++;
              for (y = 0, S = h; S; S = Hn(S)) y++;
              for (; 0 < d - y; ) (v = Hn(v)), d--;
              for (; 0 < y - d; ) (h = Hn(h)), y--;
              for (; d--; ) {
                if (v === h || (h !== null && v === h.alternate)) break t;
                (v = Hn(v)), (h = Hn(h));
              }
              v = null;
            }
          else v = null;
          x !== null && Ku(p, m, x, v, !1),
            w !== null && b !== null && Ku(p, b, w, v, !0);
        }
      }
      e: {
        if (
          ((m = c ? nr(c) : window),
          (x = m.nodeName && m.nodeName.toLowerCase()),
          x === "select" || (x === "input" && m.type === "file"))
        )
          var C = By;
        else if (Fu(m))
          if (sp) C = Gy;
          else {
            C = Uy;
            var E = Wy;
          }
        else
          (x = m.nodeName) &&
            x.toLowerCase() === "input" &&
            (m.type === "checkbox" || m.type === "radio") &&
            (C = Hy);
        if (C && (C = C(e, c))) {
          lp(p, C, n, f);
          break e;
        }
        E && E(e, m, c),
          e === "focusout" &&
            (E = m._wrapperState) &&
            E.controlled &&
            m.type === "number" &&
            zi(m, "number", m.value);
      }
      switch (((E = c ? nr(c) : window), e)) {
        case "focusin":
          (Fu(E) || E.contentEditable === "true") &&
            ((er = E), (Yi = c), (lo = null));
          break;
        case "focusout":
          lo = Yi = er = null;
          break;
        case "mousedown":
          Xi = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          (Xi = !1), Uu(p, n, f);
          break;
        case "selectionchange":
          if (Yy) break;
        case "keydown":
        case "keyup":
          Uu(p, n, f);
      }
      var k;
      if (nc)
        e: {
          switch (e) {
            case "compositionstart":
              var N = "onCompositionStart";
              break e;
            case "compositionend":
              N = "onCompositionEnd";
              break e;
            case "compositionupdate":
              N = "onCompositionUpdate";
              break e;
          }
          N = void 0;
        }
      else
        Jn
          ? rp(e, n) && (N = "onCompositionEnd")
          : e === "keydown" && n.keyCode === 229 && (N = "onCompositionStart");
      N &&
        (np &&
          n.locale !== "ko" &&
          (Jn || N !== "onCompositionStart"
            ? N === "onCompositionEnd" && Jn && (k = tp())
            : ((Zt = f),
              (Ja = "value" in Zt ? Zt.value : Zt.textContent),
              (Jn = !0))),
        (E = Ol(c, N)),
        0 < E.length &&
          ((N = new Mu(N, e, null, n, f)),
          p.push({ event: N, listeners: E }),
          k ? (N.data = k) : ((k = op(n)), k !== null && (N.data = k)))),
        (k = zy ? Dy(e, n) : Fy(e, n)) &&
          ((c = Ol(c, "onBeforeInput")),
          0 < c.length &&
            ((f = new Mu("onBeforeInput", "beforeinput", null, n, f)),
            p.push({ event: f, listeners: c }),
            (f.data = k)));
    }
    vp(p, t);
  });
}
function bo(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function Ol(e, t) {
  for (var n = t + "Capture", r = []; e !== null; ) {
    var o = e,
      l = o.stateNode;
    o.tag === 5 &&
      l !== null &&
      ((o = l),
      (l = mo(e, n)),
      l != null && r.unshift(bo(e, l, o)),
      (l = mo(e, t)),
      l != null && r.push(bo(e, l, o))),
      (e = e.return);
  }
  return r;
}
function Hn(e) {
  if (e === null) return null;
  do e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function Ku(e, t, n, r, o) {
  for (var l = t._reactName, s = []; n !== null && n !== r; ) {
    var i = n,
      a = i.alternate,
      c = i.stateNode;
    if (a !== null && a === r) break;
    i.tag === 5 &&
      c !== null &&
      ((i = c),
      o
        ? ((a = mo(n, l)), a != null && s.unshift(bo(n, a, i)))
        : o || ((a = mo(n, l)), a != null && s.push(bo(n, a, i)))),
      (n = n.return);
  }
  s.length !== 0 && e.push({ event: t, listeners: s });
}
var Jy = /\r\n?/g,
  ex = /\u0000|\uFFFD/g;
function Qu(e) {
  return (typeof e == "string" ? e : "" + e)
    .replace(
      Jy,
      `
`
    )
    .replace(ex, "");
}
function tl(e, t, n) {
  if (((t = Qu(t)), Qu(e) !== t && n)) throw Error(R(425));
}
function zl() {}
var Zi = null,
  qi = null;
function Ji(e, t) {
  return (
    e === "textarea" ||
    e === "noscript" ||
    typeof t.children == "string" ||
    typeof t.children == "number" ||
    (typeof t.dangerouslySetInnerHTML == "object" &&
      t.dangerouslySetInnerHTML !== null &&
      t.dangerouslySetInnerHTML.__html != null)
  );
}
var ea = typeof setTimeout == "function" ? setTimeout : void 0,
  tx = typeof clearTimeout == "function" ? clearTimeout : void 0,
  Yu = typeof Promise == "function" ? Promise : void 0,
  nx =
    typeof queueMicrotask == "function"
      ? queueMicrotask
      : typeof Yu < "u"
      ? function (e) {
          return Yu.resolve(null).then(e).catch(rx);
        }
      : ea;
function rx(e) {
  setTimeout(function () {
    throw e;
  });
}
function si(e, t) {
  var n = t,
    r = 0;
  do {
    var o = n.nextSibling;
    if ((e.removeChild(n), o && o.nodeType === 8))
      if (((n = o.data), n === "/$")) {
        if (r === 0) {
          e.removeChild(o), go(t);
          return;
        }
        r--;
      } else (n !== "$" && n !== "$?" && n !== "$!") || r++;
    n = o;
  } while (n);
  go(t);
}
function nn(e) {
  for (; e != null; e = e.nextSibling) {
    var t = e.nodeType;
    if (t === 1 || t === 3) break;
    if (t === 8) {
      if (((t = e.data), t === "$" || t === "$!" || t === "$?")) break;
      if (t === "/$") return null;
    }
  }
  return e;
}
function Xu(e) {
  e = e.previousSibling;
  for (var t = 0; e; ) {
    if (e.nodeType === 8) {
      var n = e.data;
      if (n === "$" || n === "$!" || n === "$?") {
        if (t === 0) return e;
        t--;
      } else n === "/$" && t++;
    }
    e = e.previousSibling;
  }
  return null;
}
var Pr = Math.random().toString(36).slice(2),
  bt = "__reactFiber$" + Pr,
  So = "__reactProps$" + Pr,
  Ot = "__reactContainer$" + Pr,
  ta = "__reactEvents$" + Pr,
  ox = "__reactListeners$" + Pr,
  lx = "__reactHandles$" + Pr;
function En(e) {
  var t = e[bt];
  if (t) return t;
  for (var n = e.parentNode; n; ) {
    if ((t = n[Ot] || n[bt])) {
      if (
        ((n = t.alternate),
        t.child !== null || (n !== null && n.child !== null))
      )
        for (e = Xu(e); e !== null; ) {
          if ((n = e[bt])) return n;
          e = Xu(e);
        }
      return t;
    }
    (e = n), (n = e.parentNode);
  }
  return null;
}
function zo(e) {
  return (
    (e = e[bt] || e[Ot]),
    !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3) ? null : e
  );
}
function nr(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(R(33));
}
function hs(e) {
  return e[So] || null;
}
var na = [],
  rr = -1;
function vn(e) {
  return { current: e };
}
function ae(e) {
  0 > rr || ((e.current = na[rr]), (na[rr] = null), rr--);
}
function re(e, t) {
  rr++, (na[rr] = e.current), (e.current = t);
}
var un = {},
  Pe = vn(un),
  Fe = vn(!1),
  Tn = un;
function wr(e, t) {
  var n = e.type.contextTypes;
  if (!n) return un;
  var r = e.stateNode;
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
    return r.__reactInternalMemoizedMaskedChildContext;
  var o = {},
    l;
  for (l in n) o[l] = t[l];
  return (
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = t),
      (e.__reactInternalMemoizedMaskedChildContext = o)),
    o
  );
}
function Ve(e) {
  return (e = e.childContextTypes), e != null;
}
function Dl() {
  ae(Fe), ae(Pe);
}
function Zu(e, t, n) {
  if (Pe.current !== un) throw Error(R(168));
  re(Pe, t), re(Fe, n);
}
function yp(e, t, n) {
  var r = e.stateNode;
  if (((t = t.childContextTypes), typeof r.getChildContext != "function"))
    return n;
  r = r.getChildContext();
  for (var o in r) if (!(o in t)) throw Error(R(108, Wg(e) || "Unknown", o));
  return fe({}, n, r);
}
function Fl(e) {
  return (
    (e =
      ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || un),
    (Tn = Pe.current),
    re(Pe, e),
    re(Fe, Fe.current),
    !0
  );
}
function qu(e, t, n) {
  var r = e.stateNode;
  if (!r) throw Error(R(169));
  n
    ? ((e = yp(e, t, Tn)),
      (r.__reactInternalMemoizedMergedChildContext = e),
      ae(Fe),
      ae(Pe),
      re(Pe, e))
    : ae(Fe),
    re(Fe, n);
}
var It = null,
  vs = !1,
  ii = !1;
function xp(e) {
  It === null ? (It = [e]) : It.push(e);
}
function sx(e) {
  (vs = !0), xp(e);
}
function gn() {
  if (!ii && It !== null) {
    ii = !0;
    var e = 0,
      t = q;
    try {
      var n = It;
      for (q = 1; e < n.length; e++) {
        var r = n[e];
        do r = r(!0);
        while (r !== null);
      }
      (It = null), (vs = !1);
    } catch (o) {
      throw (It !== null && (It = It.slice(e + 1)), Uf(Ya, gn), o);
    } finally {
      (q = t), (ii = !1);
    }
  }
  return null;
}
var or = [],
  lr = 0,
  Vl = null,
  $l = 0,
  Ze = [],
  qe = 0,
  An = null,
  Tt = 1,
  At = "";
function Sn(e, t) {
  (or[lr++] = $l), (or[lr++] = Vl), (Vl = e), ($l = t);
}
function wp(e, t, n) {
  (Ze[qe++] = Tt), (Ze[qe++] = At), (Ze[qe++] = An), (An = e);
  var r = Tt;
  e = At;
  var o = 32 - ut(r) - 1;
  (r &= ~(1 << o)), (n += 1);
  var l = 32 - ut(t) + o;
  if (30 < l) {
    var s = o - (o % 5);
    (l = (r & ((1 << s) - 1)).toString(32)),
      (r >>= s),
      (o -= s),
      (Tt = (1 << (32 - ut(t) + o)) | (n << o) | r),
      (At = l + e);
  } else (Tt = (1 << l) | (n << o) | r), (At = e);
}
function oc(e) {
  e.return !== null && (Sn(e, 1), wp(e, 1, 0));
}
function lc(e) {
  for (; e === Vl; )
    (Vl = or[--lr]), (or[lr] = null), ($l = or[--lr]), (or[lr] = null);
  for (; e === An; )
    (An = Ze[--qe]),
      (Ze[qe] = null),
      (At = Ze[--qe]),
      (Ze[qe] = null),
      (Tt = Ze[--qe]),
      (Ze[qe] = null);
}
var Ge = null,
  He = null,
  ce = !1,
  ct = null;
function bp(e, t) {
  var n = Je(5, null, null, 0);
  (n.elementType = "DELETED"),
    (n.stateNode = t),
    (n.return = e),
    (t = e.deletions),
    t === null ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n);
}
function Ju(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return (
        (t =
          t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase()
            ? null
            : t),
        t !== null
          ? ((e.stateNode = t), (Ge = e), (He = nn(t.firstChild)), !0)
          : !1
      );
    case 6:
      return (
        (t = e.pendingProps === "" || t.nodeType !== 3 ? null : t),
        t !== null ? ((e.stateNode = t), (Ge = e), (He = null), !0) : !1
      );
    case 13:
      return (
        (t = t.nodeType !== 8 ? null : t),
        t !== null
          ? ((n = An !== null ? { id: Tt, overflow: At } : null),
            (e.memoizedState = {
              dehydrated: t,
              treeContext: n,
              retryLane: 1073741824,
            }),
            (n = Je(18, null, null, 0)),
            (n.stateNode = t),
            (n.return = e),
            (e.child = n),
            (Ge = e),
            (He = null),
            !0)
          : !1
      );
    default:
      return !1;
  }
}
function ra(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function oa(e) {
  if (ce) {
    var t = He;
    if (t) {
      var n = t;
      if (!Ju(e, t)) {
        if (ra(e)) throw Error(R(418));
        t = nn(n.nextSibling);
        var r = Ge;
        t && Ju(e, t)
          ? bp(r, n)
          : ((e.flags = (e.flags & -4097) | 2), (ce = !1), (Ge = e));
      }
    } else {
      if (ra(e)) throw Error(R(418));
      (e.flags = (e.flags & -4097) | 2), (ce = !1), (Ge = e);
    }
  }
}
function ed(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
    e = e.return;
  Ge = e;
}
function nl(e) {
  if (e !== Ge) return !1;
  if (!ce) return ed(e), (ce = !0), !1;
  var t;
  if (
    ((t = e.tag !== 3) &&
      !(t = e.tag !== 5) &&
      ((t = e.type),
      (t = t !== "head" && t !== "body" && !Ji(e.type, e.memoizedProps))),
    t && (t = He))
  ) {
    if (ra(e)) throw (Sp(), Error(R(418)));
    for (; t; ) bp(e, t), (t = nn(t.nextSibling));
  }
  if ((ed(e), e.tag === 13)) {
    if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
      throw Error(R(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === "/$") {
            if (t === 0) {
              He = nn(e.nextSibling);
              break e;
            }
            t--;
          } else (n !== "$" && n !== "$!" && n !== "$?") || t++;
        }
        e = e.nextSibling;
      }
      He = null;
    }
  } else He = Ge ? nn(e.stateNode.nextSibling) : null;
  return !0;
}
function Sp() {
  for (var e = He; e; ) e = nn(e.nextSibling);
}
function br() {
  (He = Ge = null), (ce = !1);
}
function sc(e) {
  ct === null ? (ct = [e]) : ct.push(e);
}
var ix = $t.ReactCurrentBatchConfig;
function Ur(e, t, n) {
  if (
    ((e = n.ref), e !== null && typeof e != "function" && typeof e != "object")
  ) {
    if (n._owner) {
      if (((n = n._owner), n)) {
        if (n.tag !== 1) throw Error(R(309));
        var r = n.stateNode;
      }
      if (!r) throw Error(R(147, e));
      var o = r,
        l = "" + e;
      return t !== null &&
        t.ref !== null &&
        typeof t.ref == "function" &&
        t.ref._stringRef === l
        ? t.ref
        : ((t = function (s) {
            var i = o.refs;
            s === null ? delete i[l] : (i[l] = s);
          }),
          (t._stringRef = l),
          t);
    }
    if (typeof e != "string") throw Error(R(284));
    if (!n._owner) throw Error(R(290, e));
  }
  return e;
}
function rl(e, t) {
  throw (
    ((e = Object.prototype.toString.call(t)),
    Error(
      R(
        31,
        e === "[object Object]"
          ? "object with keys {" + Object.keys(t).join(", ") + "}"
          : e
      )
    ))
  );
}
function td(e) {
  var t = e._init;
  return t(e._payload);
}
function Cp(e) {
  function t(h, d) {
    if (e) {
      var y = h.deletions;
      y === null ? ((h.deletions = [d]), (h.flags |= 16)) : y.push(d);
    }
  }
  function n(h, d) {
    if (!e) return null;
    for (; d !== null; ) t(h, d), (d = d.sibling);
    return null;
  }
  function r(h, d) {
    for (h = new Map(); d !== null; )
      d.key !== null ? h.set(d.key, d) : h.set(d.index, d), (d = d.sibling);
    return h;
  }
  function o(h, d) {
    return (h = sn(h, d)), (h.index = 0), (h.sibling = null), h;
  }
  function l(h, d, y) {
    return (
      (h.index = y),
      e
        ? ((y = h.alternate),
          y !== null
            ? ((y = y.index), y < d ? ((h.flags |= 2), d) : y)
            : ((h.flags |= 2), d))
        : ((h.flags |= 1048576), d)
    );
  }
  function s(h) {
    return e && h.alternate === null && (h.flags |= 2), h;
  }
  function i(h, d, y, S) {
    return d === null || d.tag !== 6
      ? ((d = mi(y, h.mode, S)), (d.return = h), d)
      : ((d = o(d, y)), (d.return = h), d);
  }
  function a(h, d, y, S) {
    var C = y.type;
    return C === qn
      ? f(h, d, y.props.children, S, y.key)
      : d !== null &&
        (d.elementType === C ||
          (typeof C == "object" &&
            C !== null &&
            C.$$typeof === Kt &&
            td(C) === d.type))
      ? ((S = o(d, y.props)), (S.ref = Ur(h, d, y)), (S.return = h), S)
      : ((S = El(y.type, y.key, y.props, null, h.mode, S)),
        (S.ref = Ur(h, d, y)),
        (S.return = h),
        S);
  }
  function c(h, d, y, S) {
    return d === null ||
      d.tag !== 4 ||
      d.stateNode.containerInfo !== y.containerInfo ||
      d.stateNode.implementation !== y.implementation
      ? ((d = hi(y, h.mode, S)), (d.return = h), d)
      : ((d = o(d, y.children || [])), (d.return = h), d);
  }
  function f(h, d, y, S, C) {
    return d === null || d.tag !== 7
      ? ((d = Pn(y, h.mode, S, C)), (d.return = h), d)
      : ((d = o(d, y)), (d.return = h), d);
  }
  function p(h, d, y) {
    if ((typeof d == "string" && d !== "") || typeof d == "number")
      return (d = mi("" + d, h.mode, y)), (d.return = h), d;
    if (typeof d == "object" && d !== null) {
      switch (d.$$typeof) {
        case Go:
          return (
            (y = El(d.type, d.key, d.props, null, h.mode, y)),
            (y.ref = Ur(h, null, d)),
            (y.return = h),
            y
          );
        case Zn:
          return (d = hi(d, h.mode, y)), (d.return = h), d;
        case Kt:
          var S = d._init;
          return p(h, S(d._payload), y);
      }
      if (Zr(d) || Fr(d))
        return (d = Pn(d, h.mode, y, null)), (d.return = h), d;
      rl(h, d);
    }
    return null;
  }
  function m(h, d, y, S) {
    var C = d !== null ? d.key : null;
    if ((typeof y == "string" && y !== "") || typeof y == "number")
      return C !== null ? null : i(h, d, "" + y, S);
    if (typeof y == "object" && y !== null) {
      switch (y.$$typeof) {
        case Go:
          return y.key === C ? a(h, d, y, S) : null;
        case Zn:
          return y.key === C ? c(h, d, y, S) : null;
        case Kt:
          return (C = y._init), m(h, d, C(y._payload), S);
      }
      if (Zr(y) || Fr(y)) return C !== null ? null : f(h, d, y, S, null);
      rl(h, y);
    }
    return null;
  }
  function x(h, d, y, S, C) {
    if ((typeof S == "string" && S !== "") || typeof S == "number")
      return (h = h.get(y) || null), i(d, h, "" + S, C);
    if (typeof S == "object" && S !== null) {
      switch (S.$$typeof) {
        case Go:
          return (h = h.get(S.key === null ? y : S.key) || null), a(d, h, S, C);
        case Zn:
          return (h = h.get(S.key === null ? y : S.key) || null), c(d, h, S, C);
        case Kt:
          var E = S._init;
          return x(h, d, y, E(S._payload), C);
      }
      if (Zr(S) || Fr(S)) return (h = h.get(y) || null), f(d, h, S, C, null);
      rl(d, S);
    }
    return null;
  }
  function w(h, d, y, S) {
    for (
      var C = null, E = null, k = d, N = (d = 0), _ = null;
      k !== null && N < y.length;
      N++
    ) {
      k.index > N ? ((_ = k), (k = null)) : (_ = k.sibling);
      var P = m(h, k, y[N], S);
      if (P === null) {
        k === null && (k = _);
        break;
      }
      e && k && P.alternate === null && t(h, k),
        (d = l(P, d, N)),
        E === null ? (C = P) : (E.sibling = P),
        (E = P),
        (k = _);
    }
    if (N === y.length) return n(h, k), ce && Sn(h, N), C;
    if (k === null) {
      for (; N < y.length; N++)
        (k = p(h, y[N], S)),
          k !== null &&
            ((d = l(k, d, N)), E === null ? (C = k) : (E.sibling = k), (E = k));
      return ce && Sn(h, N), C;
    }
    for (k = r(h, k); N < y.length; N++)
      (_ = x(k, h, N, y[N], S)),
        _ !== null &&
          (e && _.alternate !== null && k.delete(_.key === null ? N : _.key),
          (d = l(_, d, N)),
          E === null ? (C = _) : (E.sibling = _),
          (E = _));
    return (
      e &&
        k.forEach(function (z) {
          return t(h, z);
        }),
      ce && Sn(h, N),
      C
    );
  }
  function v(h, d, y, S) {
    var C = Fr(y);
    if (typeof C != "function") throw Error(R(150));
    if (((y = C.call(y)), y == null)) throw Error(R(151));
    for (
      var E = (C = null), k = d, N = (d = 0), _ = null, P = y.next();
      k !== null && !P.done;
      N++, P = y.next()
    ) {
      k.index > N ? ((_ = k), (k = null)) : (_ = k.sibling);
      var z = m(h, k, P.value, S);
      if (z === null) {
        k === null && (k = _);
        break;
      }
      e && k && z.alternate === null && t(h, k),
        (d = l(z, d, N)),
        E === null ? (C = z) : (E.sibling = z),
        (E = z),
        (k = _);
    }
    if (P.done) return n(h, k), ce && Sn(h, N), C;
    if (k === null) {
      for (; !P.done; N++, P = y.next())
        (P = p(h, P.value, S)),
          P !== null &&
            ((d = l(P, d, N)), E === null ? (C = P) : (E.sibling = P), (E = P));
      return ce && Sn(h, N), C;
    }
    for (k = r(h, k); !P.done; N++, P = y.next())
      (P = x(k, h, N, P.value, S)),
        P !== null &&
          (e && P.alternate !== null && k.delete(P.key === null ? N : P.key),
          (d = l(P, d, N)),
          E === null ? (C = P) : (E.sibling = P),
          (E = P));
    return (
      e &&
        k.forEach(function (L) {
          return t(h, L);
        }),
      ce && Sn(h, N),
      C
    );
  }
  function b(h, d, y, S) {
    if (
      (typeof y == "object" &&
        y !== null &&
        y.type === qn &&
        y.key === null &&
        (y = y.props.children),
      typeof y == "object" && y !== null)
    ) {
      switch (y.$$typeof) {
        case Go:
          e: {
            for (var C = y.key, E = d; E !== null; ) {
              if (E.key === C) {
                if (((C = y.type), C === qn)) {
                  if (E.tag === 7) {
                    n(h, E.sibling),
                      (d = o(E, y.props.children)),
                      (d.return = h),
                      (h = d);
                    break e;
                  }
                } else if (
                  E.elementType === C ||
                  (typeof C == "object" &&
                    C !== null &&
                    C.$$typeof === Kt &&
                    td(C) === E.type)
                ) {
                  n(h, E.sibling),
                    (d = o(E, y.props)),
                    (d.ref = Ur(h, E, y)),
                    (d.return = h),
                    (h = d);
                  break e;
                }
                n(h, E);
                break;
              } else t(h, E);
              E = E.sibling;
            }
            y.type === qn
              ? ((d = Pn(y.props.children, h.mode, S, y.key)),
                (d.return = h),
                (h = d))
              : ((S = El(y.type, y.key, y.props, null, h.mode, S)),
                (S.ref = Ur(h, d, y)),
                (S.return = h),
                (h = S));
          }
          return s(h);
        case Zn:
          e: {
            for (E = y.key; d !== null; ) {
              if (d.key === E)
                if (
                  d.tag === 4 &&
                  d.stateNode.containerInfo === y.containerInfo &&
                  d.stateNode.implementation === y.implementation
                ) {
                  n(h, d.sibling),
                    (d = o(d, y.children || [])),
                    (d.return = h),
                    (h = d);
                  break e;
                } else {
                  n(h, d);
                  break;
                }
              else t(h, d);
              d = d.sibling;
            }
            (d = hi(y, h.mode, S)), (d.return = h), (h = d);
          }
          return s(h);
        case Kt:
          return (E = y._init), b(h, d, E(y._payload), S);
      }
      if (Zr(y)) return w(h, d, y, S);
      if (Fr(y)) return v(h, d, y, S);
      rl(h, y);
    }
    return (typeof y == "string" && y !== "") || typeof y == "number"
      ? ((y = "" + y),
        d !== null && d.tag === 6
          ? (n(h, d.sibling), (d = o(d, y)), (d.return = h), (h = d))
          : (n(h, d), (d = mi(y, h.mode, S)), (d.return = h), (h = d)),
        s(h))
      : n(h, d);
  }
  return b;
}
var Sr = Cp(!0),
  kp = Cp(!1),
  Bl = vn(null),
  Wl = null,
  sr = null,
  ic = null;
function ac() {
  ic = sr = Wl = null;
}
function cc(e) {
  var t = Bl.current;
  ae(Bl), (e._currentValue = t);
}
function la(e, t, n) {
  for (; e !== null; ) {
    var r = e.alternate;
    if (
      ((e.childLanes & t) !== t
        ? ((e.childLanes |= t), r !== null && (r.childLanes |= t))
        : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t),
      e === n)
    )
      break;
    e = e.return;
  }
}
function pr(e, t) {
  (Wl = e),
    (ic = sr = null),
    (e = e.dependencies),
    e !== null &&
      e.firstContext !== null &&
      (e.lanes & t && (ze = !0), (e.firstContext = null));
}
function tt(e) {
  var t = e._currentValue;
  if (ic !== e)
    if (((e = { context: e, memoizedValue: t, next: null }), sr === null)) {
      if (Wl === null) throw Error(R(308));
      (sr = e), (Wl.dependencies = { lanes: 0, firstContext: e });
    } else sr = sr.next = e;
  return t;
}
var Nn = null;
function uc(e) {
  Nn === null ? (Nn = [e]) : Nn.push(e);
}
function Ep(e, t, n, r) {
  var o = t.interleaved;
  return (
    o === null ? ((n.next = n), uc(t)) : ((n.next = o.next), (o.next = n)),
    (t.interleaved = n),
    zt(e, r)
  );
}
function zt(e, t) {
  e.lanes |= t;
  var n = e.alternate;
  for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; )
    (e.childLanes |= t),
      (n = e.alternate),
      n !== null && (n.childLanes |= t),
      (n = e),
      (e = e.return);
  return n.tag === 3 ? n.stateNode : null;
}
var Qt = !1;
function dc(e) {
  e.updateQueue = {
    baseState: e.memoizedState,
    firstBaseUpdate: null,
    lastBaseUpdate: null,
    shared: { pending: null, interleaved: null, lanes: 0 },
    effects: null,
  };
}
function Np(e, t) {
  (e = e.updateQueue),
    t.updateQueue === e &&
      (t.updateQueue = {
        baseState: e.baseState,
        firstBaseUpdate: e.firstBaseUpdate,
        lastBaseUpdate: e.lastBaseUpdate,
        shared: e.shared,
        effects: e.effects,
      });
}
function Lt(e, t) {
  return {
    eventTime: e,
    lane: t,
    tag: 0,
    payload: null,
    callback: null,
    next: null,
  };
}
function rn(e, t, n) {
  var r = e.updateQueue;
  if (r === null) return null;
  if (((r = r.shared), Z & 2)) {
    var o = r.pending;
    return (
      o === null ? (t.next = t) : ((t.next = o.next), (o.next = t)),
      (r.pending = t),
      zt(e, n)
    );
  }
  return (
    (o = r.interleaved),
    o === null ? ((t.next = t), uc(r)) : ((t.next = o.next), (o.next = t)),
    (r.interleaved = t),
    zt(e, n)
  );
}
function xl(e, t, n) {
  if (
    ((t = t.updateQueue), t !== null && ((t = t.shared), (n & 4194240) !== 0))
  ) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), Xa(e, n);
  }
}
function nd(e, t) {
  var n = e.updateQueue,
    r = e.alternate;
  if (r !== null && ((r = r.updateQueue), n === r)) {
    var o = null,
      l = null;
    if (((n = n.firstBaseUpdate), n !== null)) {
      do {
        var s = {
          eventTime: n.eventTime,
          lane: n.lane,
          tag: n.tag,
          payload: n.payload,
          callback: n.callback,
          next: null,
        };
        l === null ? (o = l = s) : (l = l.next = s), (n = n.next);
      } while (n !== null);
      l === null ? (o = l = t) : (l = l.next = t);
    } else o = l = t;
    (n = {
      baseState: r.baseState,
      firstBaseUpdate: o,
      lastBaseUpdate: l,
      shared: r.shared,
      effects: r.effects,
    }),
      (e.updateQueue = n);
    return;
  }
  (e = n.lastBaseUpdate),
    e === null ? (n.firstBaseUpdate = t) : (e.next = t),
    (n.lastBaseUpdate = t);
}
function Ul(e, t, n, r) {
  var o = e.updateQueue;
  Qt = !1;
  var l = o.firstBaseUpdate,
    s = o.lastBaseUpdate,
    i = o.shared.pending;
  if (i !== null) {
    o.shared.pending = null;
    var a = i,
      c = a.next;
    (a.next = null), s === null ? (l = c) : (s.next = c), (s = a);
    var f = e.alternate;
    f !== null &&
      ((f = f.updateQueue),
      (i = f.lastBaseUpdate),
      i !== s &&
        (i === null ? (f.firstBaseUpdate = c) : (i.next = c),
        (f.lastBaseUpdate = a)));
  }
  if (l !== null) {
    var p = o.baseState;
    (s = 0), (f = c = a = null), (i = l);
    do {
      var m = i.lane,
        x = i.eventTime;
      if ((r & m) === m) {
        f !== null &&
          (f = f.next =
            {
              eventTime: x,
              lane: 0,
              tag: i.tag,
              payload: i.payload,
              callback: i.callback,
              next: null,
            });
        e: {
          var w = e,
            v = i;
          switch (((m = t), (x = n), v.tag)) {
            case 1:
              if (((w = v.payload), typeof w == "function")) {
                p = w.call(x, p, m);
                break e;
              }
              p = w;
              break e;
            case 3:
              w.flags = (w.flags & -65537) | 128;
            case 0:
              if (
                ((w = v.payload),
                (m = typeof w == "function" ? w.call(x, p, m) : w),
                m == null)
              )
                break e;
              p = fe({}, p, m);
              break e;
            case 2:
              Qt = !0;
          }
        }
        i.callback !== null &&
          i.lane !== 0 &&
          ((e.flags |= 64),
          (m = o.effects),
          m === null ? (o.effects = [i]) : m.push(i));
      } else
        (x = {
          eventTime: x,
          lane: m,
          tag: i.tag,
          payload: i.payload,
          callback: i.callback,
          next: null,
        }),
          f === null ? ((c = f = x), (a = p)) : (f = f.next = x),
          (s |= m);
      if (((i = i.next), i === null)) {
        if (((i = o.shared.pending), i === null)) break;
        (m = i),
          (i = m.next),
          (m.next = null),
          (o.lastBaseUpdate = m),
          (o.shared.pending = null);
      }
    } while (!0);
    if (
      (f === null && (a = p),
      (o.baseState = a),
      (o.firstBaseUpdate = c),
      (o.lastBaseUpdate = f),
      (t = o.shared.interleaved),
      t !== null)
    ) {
      o = t;
      do (s |= o.lane), (o = o.next);
      while (o !== t);
    } else l === null && (o.shared.lanes = 0);
    (Mn |= s), (e.lanes = s), (e.memoizedState = p);
  }
}
function rd(e, t, n) {
  if (((e = t.effects), (t.effects = null), e !== null))
    for (t = 0; t < e.length; t++) {
      var r = e[t],
        o = r.callback;
      if (o !== null) {
        if (((r.callback = null), (r = n), typeof o != "function"))
          throw Error(R(191, o));
        o.call(r);
      }
    }
}
var Do = {},
  Et = vn(Do),
  Co = vn(Do),
  ko = vn(Do);
function jn(e) {
  if (e === Do) throw Error(R(174));
  return e;
}
function fc(e, t) {
  switch ((re(ko, t), re(Co, e), re(Et, Do), (e = t.nodeType), e)) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : Fi(null, "");
      break;
    default:
      (e = e === 8 ? t.parentNode : t),
        (t = e.namespaceURI || null),
        (e = e.tagName),
        (t = Fi(t, e));
  }
  ae(Et), re(Et, t);
}
function Cr() {
  ae(Et), ae(Co), ae(ko);
}
function jp(e) {
  jn(ko.current);
  var t = jn(Et.current),
    n = Fi(t, e.type);
  t !== n && (re(Co, e), re(Et, n));
}
function pc(e) {
  Co.current === e && (ae(Et), ae(Co));
}
var ue = vn(0);
function Hl(e) {
  for (var t = e; t !== null; ) {
    if (t.tag === 13) {
      var n = t.memoizedState;
      if (
        n !== null &&
        ((n = n.dehydrated), n === null || n.data === "$?" || n.data === "$!")
      )
        return t;
    } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
      if (t.flags & 128) return t;
    } else if (t.child !== null) {
      (t.child.return = t), (t = t.child);
      continue;
    }
    if (t === e) break;
    for (; t.sibling === null; ) {
      if (t.return === null || t.return === e) return null;
      t = t.return;
    }
    (t.sibling.return = t.return), (t = t.sibling);
  }
  return null;
}
var ai = [];
function mc() {
  for (var e = 0; e < ai.length; e++)
    ai[e]._workInProgressVersionPrimary = null;
  ai.length = 0;
}
var wl = $t.ReactCurrentDispatcher,
  ci = $t.ReactCurrentBatchConfig,
  Ln = 0,
  de = null,
  ve = null,
  xe = null,
  Gl = !1,
  so = !1,
  Eo = 0,
  ax = 0;
function Ne() {
  throw Error(R(321));
}
function hc(e, t) {
  if (t === null) return !1;
  for (var n = 0; n < t.length && n < e.length; n++)
    if (!ft(e[n], t[n])) return !1;
  return !0;
}
function vc(e, t, n, r, o, l) {
  if (
    ((Ln = l),
    (de = t),
    (t.memoizedState = null),
    (t.updateQueue = null),
    (t.lanes = 0),
    (wl.current = e === null || e.memoizedState === null ? fx : px),
    (e = n(r, o)),
    so)
  ) {
    l = 0;
    do {
      if (((so = !1), (Eo = 0), 25 <= l)) throw Error(R(301));
      (l += 1),
        (xe = ve = null),
        (t.updateQueue = null),
        (wl.current = mx),
        (e = n(r, o));
    } while (so);
  }
  if (
    ((wl.current = Kl),
    (t = ve !== null && ve.next !== null),
    (Ln = 0),
    (xe = ve = de = null),
    (Gl = !1),
    t)
  )
    throw Error(R(300));
  return e;
}
function gc() {
  var e = Eo !== 0;
  return (Eo = 0), e;
}
function wt() {
  var e = {
    memoizedState: null,
    baseState: null,
    baseQueue: null,
    queue: null,
    next: null,
  };
  return xe === null ? (de.memoizedState = xe = e) : (xe = xe.next = e), xe;
}
function nt() {
  if (ve === null) {
    var e = de.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = ve.next;
  var t = xe === null ? de.memoizedState : xe.next;
  if (t !== null) (xe = t), (ve = e);
  else {
    if (e === null) throw Error(R(310));
    (ve = e),
      (e = {
        memoizedState: ve.memoizedState,
        baseState: ve.baseState,
        baseQueue: ve.baseQueue,
        queue: ve.queue,
        next: null,
      }),
      xe === null ? (de.memoizedState = xe = e) : (xe = xe.next = e);
  }
  return xe;
}
function No(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function ui(e) {
  var t = nt(),
    n = t.queue;
  if (n === null) throw Error(R(311));
  n.lastRenderedReducer = e;
  var r = ve,
    o = r.baseQueue,
    l = n.pending;
  if (l !== null) {
    if (o !== null) {
      var s = o.next;
      (o.next = l.next), (l.next = s);
    }
    (r.baseQueue = o = l), (n.pending = null);
  }
  if (o !== null) {
    (l = o.next), (r = r.baseState);
    var i = (s = null),
      a = null,
      c = l;
    do {
      var f = c.lane;
      if ((Ln & f) === f)
        a !== null &&
          (a = a.next =
            {
              lane: 0,
              action: c.action,
              hasEagerState: c.hasEagerState,
              eagerState: c.eagerState,
              next: null,
            }),
          (r = c.hasEagerState ? c.eagerState : e(r, c.action));
      else {
        var p = {
          lane: f,
          action: c.action,
          hasEagerState: c.hasEagerState,
          eagerState: c.eagerState,
          next: null,
        };
        a === null ? ((i = a = p), (s = r)) : (a = a.next = p),
          (de.lanes |= f),
          (Mn |= f);
      }
      c = c.next;
    } while (c !== null && c !== l);
    a === null ? (s = r) : (a.next = i),
      ft(r, t.memoizedState) || (ze = !0),
      (t.memoizedState = r),
      (t.baseState = s),
      (t.baseQueue = a),
      (n.lastRenderedState = r);
  }
  if (((e = n.interleaved), e !== null)) {
    o = e;
    do (l = o.lane), (de.lanes |= l), (Mn |= l), (o = o.next);
    while (o !== e);
  } else o === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}
function di(e) {
  var t = nt(),
    n = t.queue;
  if (n === null) throw Error(R(311));
  n.lastRenderedReducer = e;
  var r = n.dispatch,
    o = n.pending,
    l = t.memoizedState;
  if (o !== null) {
    n.pending = null;
    var s = (o = o.next);
    do (l = e(l, s.action)), (s = s.next);
    while (s !== o);
    ft(l, t.memoizedState) || (ze = !0),
      (t.memoizedState = l),
      t.baseQueue === null && (t.baseState = l),
      (n.lastRenderedState = l);
  }
  return [l, r];
}
function Rp() {}
function Pp(e, t) {
  var n = de,
    r = nt(),
    o = t(),
    l = !ft(r.memoizedState, o);
  if (
    (l && ((r.memoizedState = o), (ze = !0)),
    (r = r.queue),
    yc(Tp.bind(null, n, r, e), [e]),
    r.getSnapshot !== t || l || (xe !== null && xe.memoizedState.tag & 1))
  ) {
    if (
      ((n.flags |= 2048),
      jo(9, Ip.bind(null, n, r, o, t), void 0, null),
      we === null)
    )
      throw Error(R(349));
    Ln & 30 || _p(n, t, o);
  }
  return o;
}
function _p(e, t, n) {
  (e.flags |= 16384),
    (e = { getSnapshot: t, value: n }),
    (t = de.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (de.updateQueue = t),
        (t.stores = [e]))
      : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e));
}
function Ip(e, t, n, r) {
  (t.value = n), (t.getSnapshot = r), Ap(t) && Lp(e);
}
function Tp(e, t, n) {
  return n(function () {
    Ap(t) && Lp(e);
  });
}
function Ap(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !ft(e, n);
  } catch {
    return !0;
  }
}
function Lp(e) {
  var t = zt(e, 1);
  t !== null && dt(t, e, 1, -1);
}
function od(e) {
  var t = wt();
  return (
    typeof e == "function" && (e = e()),
    (t.memoizedState = t.baseState = e),
    (e = {
      pending: null,
      interleaved: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: No,
      lastRenderedState: e,
    }),
    (t.queue = e),
    (e = e.dispatch = dx.bind(null, de, e)),
    [t.memoizedState, e]
  );
}
function jo(e, t, n, r) {
  return (
    (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
    (t = de.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (de.updateQueue = t),
        (t.lastEffect = e.next = e))
      : ((n = t.lastEffect),
        n === null
          ? (t.lastEffect = e.next = e)
          : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e))),
    e
  );
}
function Mp() {
  return nt().memoizedState;
}
function bl(e, t, n, r) {
  var o = wt();
  (de.flags |= e),
    (o.memoizedState = jo(1 | t, n, void 0, r === void 0 ? null : r));
}
function gs(e, t, n, r) {
  var o = nt();
  r = r === void 0 ? null : r;
  var l = void 0;
  if (ve !== null) {
    var s = ve.memoizedState;
    if (((l = s.destroy), r !== null && hc(r, s.deps))) {
      o.memoizedState = jo(t, n, l, r);
      return;
    }
  }
  (de.flags |= e), (o.memoizedState = jo(1 | t, n, l, r));
}
function ld(e, t) {
  return bl(8390656, 8, e, t);
}
function yc(e, t) {
  return gs(2048, 8, e, t);
}
function Op(e, t) {
  return gs(4, 2, e, t);
}
function zp(e, t) {
  return gs(4, 4, e, t);
}
function Dp(e, t) {
  if (typeof t == "function")
    return (
      (e = e()),
      t(e),
      function () {
        t(null);
      }
    );
  if (t != null)
    return (
      (e = e()),
      (t.current = e),
      function () {
        t.current = null;
      }
    );
}
function Fp(e, t, n) {
  return (
    (n = n != null ? n.concat([e]) : null), gs(4, 4, Dp.bind(null, t, e), n)
  );
}
function xc() {}
function Vp(e, t) {
  var n = nt();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && hc(t, r[1])
    ? r[0]
    : ((n.memoizedState = [e, t]), e);
}
function $p(e, t) {
  var n = nt();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && hc(t, r[1])
    ? r[0]
    : ((e = e()), (n.memoizedState = [e, t]), e);
}
function Bp(e, t, n) {
  return Ln & 21
    ? (ft(n, t) || ((n = Kf()), (de.lanes |= n), (Mn |= n), (e.baseState = !0)),
      t)
    : (e.baseState && ((e.baseState = !1), (ze = !0)), (e.memoizedState = n));
}
function cx(e, t) {
  var n = q;
  (q = n !== 0 && 4 > n ? n : 4), e(!0);
  var r = ci.transition;
  ci.transition = {};
  try {
    e(!1), t();
  } finally {
    (q = n), (ci.transition = r);
  }
}
function Wp() {
  return nt().memoizedState;
}
function ux(e, t, n) {
  var r = ln(e);
  if (
    ((n = {
      lane: r,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
    Up(e))
  )
    Hp(t, n);
  else if (((n = Ep(e, t, n, r)), n !== null)) {
    var o = Ae();
    dt(n, e, r, o), Gp(n, t, r);
  }
}
function dx(e, t, n) {
  var r = ln(e),
    o = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (Up(e)) Hp(t, o);
  else {
    var l = e.alternate;
    if (
      e.lanes === 0 &&
      (l === null || l.lanes === 0) &&
      ((l = t.lastRenderedReducer), l !== null)
    )
      try {
        var s = t.lastRenderedState,
          i = l(s, n);
        if (((o.hasEagerState = !0), (o.eagerState = i), ft(i, s))) {
          var a = t.interleaved;
          a === null
            ? ((o.next = o), uc(t))
            : ((o.next = a.next), (a.next = o)),
            (t.interleaved = o);
          return;
        }
      } catch {
      } finally {
      }
    (n = Ep(e, t, o, r)),
      n !== null && ((o = Ae()), dt(n, e, r, o), Gp(n, t, r));
  }
}
function Up(e) {
  var t = e.alternate;
  return e === de || (t !== null && t === de);
}
function Hp(e, t) {
  so = Gl = !0;
  var n = e.pending;
  n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)),
    (e.pending = t);
}
function Gp(e, t, n) {
  if (n & 4194240) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), Xa(e, n);
  }
}
var Kl = {
    readContext: tt,
    useCallback: Ne,
    useContext: Ne,
    useEffect: Ne,
    useImperativeHandle: Ne,
    useInsertionEffect: Ne,
    useLayoutEffect: Ne,
    useMemo: Ne,
    useReducer: Ne,
    useRef: Ne,
    useState: Ne,
    useDebugValue: Ne,
    useDeferredValue: Ne,
    useTransition: Ne,
    useMutableSource: Ne,
    useSyncExternalStore: Ne,
    useId: Ne,
    unstable_isNewReconciler: !1,
  },
  fx = {
    readContext: tt,
    useCallback: function (e, t) {
      return (wt().memoizedState = [e, t === void 0 ? null : t]), e;
    },
    useContext: tt,
    useEffect: ld,
    useImperativeHandle: function (e, t, n) {
      return (
        (n = n != null ? n.concat([e]) : null),
        bl(4194308, 4, Dp.bind(null, t, e), n)
      );
    },
    useLayoutEffect: function (e, t) {
      return bl(4194308, 4, e, t);
    },
    useInsertionEffect: function (e, t) {
      return bl(4, 2, e, t);
    },
    useMemo: function (e, t) {
      var n = wt();
      return (
        (t = t === void 0 ? null : t), (e = e()), (n.memoizedState = [e, t]), e
      );
    },
    useReducer: function (e, t, n) {
      var r = wt();
      return (
        (t = n !== void 0 ? n(t) : t),
        (r.memoizedState = r.baseState = t),
        (e = {
          pending: null,
          interleaved: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: e,
          lastRenderedState: t,
        }),
        (r.queue = e),
        (e = e.dispatch = ux.bind(null, de, e)),
        [r.memoizedState, e]
      );
    },
    useRef: function (e) {
      var t = wt();
      return (e = { current: e }), (t.memoizedState = e);
    },
    useState: od,
    useDebugValue: xc,
    useDeferredValue: function (e) {
      return (wt().memoizedState = e);
    },
    useTransition: function () {
      var e = od(!1),
        t = e[0];
      return (e = cx.bind(null, e[1])), (wt().memoizedState = e), [t, e];
    },
    useMutableSource: function () {},
    useSyncExternalStore: function (e, t, n) {
      var r = de,
        o = wt();
      if (ce) {
        if (n === void 0) throw Error(R(407));
        n = n();
      } else {
        if (((n = t()), we === null)) throw Error(R(349));
        Ln & 30 || _p(r, t, n);
      }
      o.memoizedState = n;
      var l = { value: n, getSnapshot: t };
      return (
        (o.queue = l),
        ld(Tp.bind(null, r, l, e), [e]),
        (r.flags |= 2048),
        jo(9, Ip.bind(null, r, l, n, t), void 0, null),
        n
      );
    },
    useId: function () {
      var e = wt(),
        t = we.identifierPrefix;
      if (ce) {
        var n = At,
          r = Tt;
        (n = (r & ~(1 << (32 - ut(r) - 1))).toString(32) + n),
          (t = ":" + t + "R" + n),
          (n = Eo++),
          0 < n && (t += "H" + n.toString(32)),
          (t += ":");
      } else (n = ax++), (t = ":" + t + "r" + n.toString(32) + ":");
      return (e.memoizedState = t);
    },
    unstable_isNewReconciler: !1,
  },
  px = {
    readContext: tt,
    useCallback: Vp,
    useContext: tt,
    useEffect: yc,
    useImperativeHandle: Fp,
    useInsertionEffect: Op,
    useLayoutEffect: zp,
    useMemo: $p,
    useReducer: ui,
    useRef: Mp,
    useState: function () {
      return ui(No);
    },
    useDebugValue: xc,
    useDeferredValue: function (e) {
      var t = nt();
      return Bp(t, ve.memoizedState, e);
    },
    useTransition: function () {
      var e = ui(No)[0],
        t = nt().memoizedState;
      return [e, t];
    },
    useMutableSource: Rp,
    useSyncExternalStore: Pp,
    useId: Wp,
    unstable_isNewReconciler: !1,
  },
  mx = {
    readContext: tt,
    useCallback: Vp,
    useContext: tt,
    useEffect: yc,
    useImperativeHandle: Fp,
    useInsertionEffect: Op,
    useLayoutEffect: zp,
    useMemo: $p,
    useReducer: di,
    useRef: Mp,
    useState: function () {
      return di(No);
    },
    useDebugValue: xc,
    useDeferredValue: function (e) {
      var t = nt();
      return ve === null ? (t.memoizedState = e) : Bp(t, ve.memoizedState, e);
    },
    useTransition: function () {
      var e = di(No)[0],
        t = nt().memoizedState;
      return [e, t];
    },
    useMutableSource: Rp,
    useSyncExternalStore: Pp,
    useId: Wp,
    unstable_isNewReconciler: !1,
  };
function it(e, t) {
  if (e && e.defaultProps) {
    (t = fe({}, t)), (e = e.defaultProps);
    for (var n in e) t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
function sa(e, t, n, r) {
  (t = e.memoizedState),
    (n = n(r, t)),
    (n = n == null ? t : fe({}, t, n)),
    (e.memoizedState = n),
    e.lanes === 0 && (e.updateQueue.baseState = n);
}
var ys = {
  isMounted: function (e) {
    return (e = e._reactInternals) ? $n(e) === e : !1;
  },
  enqueueSetState: function (e, t, n) {
    e = e._reactInternals;
    var r = Ae(),
      o = ln(e),
      l = Lt(r, o);
    (l.payload = t),
      n != null && (l.callback = n),
      (t = rn(e, l, o)),
      t !== null && (dt(t, e, o, r), xl(t, e, o));
  },
  enqueueReplaceState: function (e, t, n) {
    e = e._reactInternals;
    var r = Ae(),
      o = ln(e),
      l = Lt(r, o);
    (l.tag = 1),
      (l.payload = t),
      n != null && (l.callback = n),
      (t = rn(e, l, o)),
      t !== null && (dt(t, e, o, r), xl(t, e, o));
  },
  enqueueForceUpdate: function (e, t) {
    e = e._reactInternals;
    var n = Ae(),
      r = ln(e),
      o = Lt(n, r);
    (o.tag = 2),
      t != null && (o.callback = t),
      (t = rn(e, o, r)),
      t !== null && (dt(t, e, r, n), xl(t, e, r));
  },
};
function sd(e, t, n, r, o, l, s) {
  return (
    (e = e.stateNode),
    typeof e.shouldComponentUpdate == "function"
      ? e.shouldComponentUpdate(r, l, s)
      : t.prototype && t.prototype.isPureReactComponent
      ? !xo(n, r) || !xo(o, l)
      : !0
  );
}
function Kp(e, t, n) {
  var r = !1,
    o = un,
    l = t.contextType;
  return (
    typeof l == "object" && l !== null
      ? (l = tt(l))
      : ((o = Ve(t) ? Tn : Pe.current),
        (r = t.contextTypes),
        (l = (r = r != null) ? wr(e, o) : un)),
    (t = new t(n, l)),
    (e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null),
    (t.updater = ys),
    (e.stateNode = t),
    (t._reactInternals = e),
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = o),
      (e.__reactInternalMemoizedMaskedChildContext = l)),
    t
  );
}
function id(e, t, n, r) {
  (e = t.state),
    typeof t.componentWillReceiveProps == "function" &&
      t.componentWillReceiveProps(n, r),
    typeof t.UNSAFE_componentWillReceiveProps == "function" &&
      t.UNSAFE_componentWillReceiveProps(n, r),
    t.state !== e && ys.enqueueReplaceState(t, t.state, null);
}
function ia(e, t, n, r) {
  var o = e.stateNode;
  (o.props = n), (o.state = e.memoizedState), (o.refs = {}), dc(e);
  var l = t.contextType;
  typeof l == "object" && l !== null
    ? (o.context = tt(l))
    : ((l = Ve(t) ? Tn : Pe.current), (o.context = wr(e, l))),
    (o.state = e.memoizedState),
    (l = t.getDerivedStateFromProps),
    typeof l == "function" && (sa(e, t, l, n), (o.state = e.memoizedState)),
    typeof t.getDerivedStateFromProps == "function" ||
      typeof o.getSnapshotBeforeUpdate == "function" ||
      (typeof o.UNSAFE_componentWillMount != "function" &&
        typeof o.componentWillMount != "function") ||
      ((t = o.state),
      typeof o.componentWillMount == "function" && o.componentWillMount(),
      typeof o.UNSAFE_componentWillMount == "function" &&
        o.UNSAFE_componentWillMount(),
      t !== o.state && ys.enqueueReplaceState(o, o.state, null),
      Ul(e, n, o, r),
      (o.state = e.memoizedState)),
    typeof o.componentDidMount == "function" && (e.flags |= 4194308);
}
function kr(e, t) {
  try {
    var n = "",
      r = t;
    do (n += Bg(r)), (r = r.return);
    while (r);
    var o = n;
  } catch (l) {
    o =
      `
Error generating stack: ` +
      l.message +
      `
` +
      l.stack;
  }
  return { value: e, source: t, stack: o, digest: null };
}
function fi(e, t, n) {
  return { value: e, source: null, stack: n ?? null, digest: t ?? null };
}
function aa(e, t) {
  try {
    console.error(t.value);
  } catch (n) {
    setTimeout(function () {
      throw n;
    });
  }
}
var hx = typeof WeakMap == "function" ? WeakMap : Map;
function Qp(e, t, n) {
  (n = Lt(-1, n)), (n.tag = 3), (n.payload = { element: null });
  var r = t.value;
  return (
    (n.callback = function () {
      Yl || ((Yl = !0), (ya = r)), aa(e, t);
    }),
    n
  );
}
function Yp(e, t, n) {
  (n = Lt(-1, n)), (n.tag = 3);
  var r = e.type.getDerivedStateFromError;
  if (typeof r == "function") {
    var o = t.value;
    (n.payload = function () {
      return r(o);
    }),
      (n.callback = function () {
        aa(e, t);
      });
  }
  var l = e.stateNode;
  return (
    l !== null &&
      typeof l.componentDidCatch == "function" &&
      (n.callback = function () {
        aa(e, t),
          typeof r != "function" &&
            (on === null ? (on = new Set([this])) : on.add(this));
        var s = t.stack;
        this.componentDidCatch(t.value, {
          componentStack: s !== null ? s : "",
        });
      }),
    n
  );
}
function ad(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new hx();
    var o = new Set();
    r.set(t, o);
  } else (o = r.get(t)), o === void 0 && ((o = new Set()), r.set(t, o));
  o.has(n) || (o.add(n), (e = Px.bind(null, e, t, n)), t.then(e, e));
}
function cd(e) {
  do {
    var t;
    if (
      ((t = e.tag === 13) &&
        ((t = e.memoizedState), (t = t !== null ? t.dehydrated !== null : !0)),
      t)
    )
      return e;
    e = e.return;
  } while (e !== null);
  return null;
}
function ud(e, t, n, r, o) {
  return e.mode & 1
    ? ((e.flags |= 65536), (e.lanes = o), e)
    : (e === t
        ? (e.flags |= 65536)
        : ((e.flags |= 128),
          (n.flags |= 131072),
          (n.flags &= -52805),
          n.tag === 1 &&
            (n.alternate === null
              ? (n.tag = 17)
              : ((t = Lt(-1, 1)), (t.tag = 2), rn(n, t, 1))),
          (n.lanes |= 1)),
      e);
}
var vx = $t.ReactCurrentOwner,
  ze = !1;
function Ie(e, t, n, r) {
  t.child = e === null ? kp(t, null, n, r) : Sr(t, e.child, n, r);
}
function dd(e, t, n, r, o) {
  n = n.render;
  var l = t.ref;
  return (
    pr(t, o),
    (r = vc(e, t, n, r, l, o)),
    (n = gc()),
    e !== null && !ze
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~o),
        Dt(e, t, o))
      : (ce && n && oc(t), (t.flags |= 1), Ie(e, t, r, o), t.child)
  );
}
function fd(e, t, n, r, o) {
  if (e === null) {
    var l = n.type;
    return typeof l == "function" &&
      !jc(l) &&
      l.defaultProps === void 0 &&
      n.compare === null &&
      n.defaultProps === void 0
      ? ((t.tag = 15), (t.type = l), Xp(e, t, l, r, o))
      : ((e = El(n.type, null, r, t, t.mode, o)),
        (e.ref = t.ref),
        (e.return = t),
        (t.child = e));
  }
  if (((l = e.child), !(e.lanes & o))) {
    var s = l.memoizedProps;
    if (
      ((n = n.compare), (n = n !== null ? n : xo), n(s, r) && e.ref === t.ref)
    )
      return Dt(e, t, o);
  }
  return (
    (t.flags |= 1),
    (e = sn(l, r)),
    (e.ref = t.ref),
    (e.return = t),
    (t.child = e)
  );
}
function Xp(e, t, n, r, o) {
  if (e !== null) {
    var l = e.memoizedProps;
    if (xo(l, r) && e.ref === t.ref)
      if (((ze = !1), (t.pendingProps = r = l), (e.lanes & o) !== 0))
        e.flags & 131072 && (ze = !0);
      else return (t.lanes = e.lanes), Dt(e, t, o);
  }
  return ca(e, t, n, r, o);
}
function Zp(e, t, n) {
  var r = t.pendingProps,
    o = r.children,
    l = e !== null ? e.memoizedState : null;
  if (r.mode === "hidden")
    if (!(t.mode & 1))
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        re(ar, We),
        (We |= n);
    else {
      if (!(n & 1073741824))
        return (
          (e = l !== null ? l.baseLanes | n : n),
          (t.lanes = t.childLanes = 1073741824),
          (t.memoizedState = {
            baseLanes: e,
            cachePool: null,
            transitions: null,
          }),
          (t.updateQueue = null),
          re(ar, We),
          (We |= e),
          null
        );
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        (r = l !== null ? l.baseLanes : n),
        re(ar, We),
        (We |= r);
    }
  else
    l !== null ? ((r = l.baseLanes | n), (t.memoizedState = null)) : (r = n),
      re(ar, We),
      (We |= r);
  return Ie(e, t, o, n), t.child;
}
function qp(e, t) {
  var n = t.ref;
  ((e === null && n !== null) || (e !== null && e.ref !== n)) &&
    ((t.flags |= 512), (t.flags |= 2097152));
}
function ca(e, t, n, r, o) {
  var l = Ve(n) ? Tn : Pe.current;
  return (
    (l = wr(t, l)),
    pr(t, o),
    (n = vc(e, t, n, r, l, o)),
    (r = gc()),
    e !== null && !ze
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~o),
        Dt(e, t, o))
      : (ce && r && oc(t), (t.flags |= 1), Ie(e, t, n, o), t.child)
  );
}
function pd(e, t, n, r, o) {
  if (Ve(n)) {
    var l = !0;
    Fl(t);
  } else l = !1;
  if ((pr(t, o), t.stateNode === null))
    Sl(e, t), Kp(t, n, r), ia(t, n, r, o), (r = !0);
  else if (e === null) {
    var s = t.stateNode,
      i = t.memoizedProps;
    s.props = i;
    var a = s.context,
      c = n.contextType;
    typeof c == "object" && c !== null
      ? (c = tt(c))
      : ((c = Ve(n) ? Tn : Pe.current), (c = wr(t, c)));
    var f = n.getDerivedStateFromProps,
      p =
        typeof f == "function" ||
        typeof s.getSnapshotBeforeUpdate == "function";
    p ||
      (typeof s.UNSAFE_componentWillReceiveProps != "function" &&
        typeof s.componentWillReceiveProps != "function") ||
      ((i !== r || a !== c) && id(t, s, r, c)),
      (Qt = !1);
    var m = t.memoizedState;
    (s.state = m),
      Ul(t, r, s, o),
      (a = t.memoizedState),
      i !== r || m !== a || Fe.current || Qt
        ? (typeof f == "function" && (sa(t, n, f, r), (a = t.memoizedState)),
          (i = Qt || sd(t, n, i, r, m, a, c))
            ? (p ||
                (typeof s.UNSAFE_componentWillMount != "function" &&
                  typeof s.componentWillMount != "function") ||
                (typeof s.componentWillMount == "function" &&
                  s.componentWillMount(),
                typeof s.UNSAFE_componentWillMount == "function" &&
                  s.UNSAFE_componentWillMount()),
              typeof s.componentDidMount == "function" && (t.flags |= 4194308))
            : (typeof s.componentDidMount == "function" && (t.flags |= 4194308),
              (t.memoizedProps = r),
              (t.memoizedState = a)),
          (s.props = r),
          (s.state = a),
          (s.context = c),
          (r = i))
        : (typeof s.componentDidMount == "function" && (t.flags |= 4194308),
          (r = !1));
  } else {
    (s = t.stateNode),
      Np(e, t),
      (i = t.memoizedProps),
      (c = t.type === t.elementType ? i : it(t.type, i)),
      (s.props = c),
      (p = t.pendingProps),
      (m = s.context),
      (a = n.contextType),
      typeof a == "object" && a !== null
        ? (a = tt(a))
        : ((a = Ve(n) ? Tn : Pe.current), (a = wr(t, a)));
    var x = n.getDerivedStateFromProps;
    (f =
      typeof x == "function" ||
      typeof s.getSnapshotBeforeUpdate == "function") ||
      (typeof s.UNSAFE_componentWillReceiveProps != "function" &&
        typeof s.componentWillReceiveProps != "function") ||
      ((i !== p || m !== a) && id(t, s, r, a)),
      (Qt = !1),
      (m = t.memoizedState),
      (s.state = m),
      Ul(t, r, s, o);
    var w = t.memoizedState;
    i !== p || m !== w || Fe.current || Qt
      ? (typeof x == "function" && (sa(t, n, x, r), (w = t.memoizedState)),
        (c = Qt || sd(t, n, c, r, m, w, a) || !1)
          ? (f ||
              (typeof s.UNSAFE_componentWillUpdate != "function" &&
                typeof s.componentWillUpdate != "function") ||
              (typeof s.componentWillUpdate == "function" &&
                s.componentWillUpdate(r, w, a),
              typeof s.UNSAFE_componentWillUpdate == "function" &&
                s.UNSAFE_componentWillUpdate(r, w, a)),
            typeof s.componentDidUpdate == "function" && (t.flags |= 4),
            typeof s.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024))
          : (typeof s.componentDidUpdate != "function" ||
              (i === e.memoizedProps && m === e.memoizedState) ||
              (t.flags |= 4),
            typeof s.getSnapshotBeforeUpdate != "function" ||
              (i === e.memoizedProps && m === e.memoizedState) ||
              (t.flags |= 1024),
            (t.memoizedProps = r),
            (t.memoizedState = w)),
        (s.props = r),
        (s.state = w),
        (s.context = a),
        (r = c))
      : (typeof s.componentDidUpdate != "function" ||
          (i === e.memoizedProps && m === e.memoizedState) ||
          (t.flags |= 4),
        typeof s.getSnapshotBeforeUpdate != "function" ||
          (i === e.memoizedProps && m === e.memoizedState) ||
          (t.flags |= 1024),
        (r = !1));
  }
  return ua(e, t, n, r, l, o);
}
function ua(e, t, n, r, o, l) {
  qp(e, t);
  var s = (t.flags & 128) !== 0;
  if (!r && !s) return o && qu(t, n, !1), Dt(e, t, l);
  (r = t.stateNode), (vx.current = t);
  var i =
    s && typeof n.getDerivedStateFromError != "function" ? null : r.render();
  return (
    (t.flags |= 1),
    e !== null && s
      ? ((t.child = Sr(t, e.child, null, l)), (t.child = Sr(t, null, i, l)))
      : Ie(e, t, i, l),
    (t.memoizedState = r.state),
    o && qu(t, n, !0),
    t.child
  );
}
function Jp(e) {
  var t = e.stateNode;
  t.pendingContext
    ? Zu(e, t.pendingContext, t.pendingContext !== t.context)
    : t.context && Zu(e, t.context, !1),
    fc(e, t.containerInfo);
}
function md(e, t, n, r, o) {
  return br(), sc(o), (t.flags |= 256), Ie(e, t, n, r), t.child;
}
var da = { dehydrated: null, treeContext: null, retryLane: 0 };
function fa(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function em(e, t, n) {
  var r = t.pendingProps,
    o = ue.current,
    l = !1,
    s = (t.flags & 128) !== 0,
    i;
  if (
    ((i = s) ||
      (i = e !== null && e.memoizedState === null ? !1 : (o & 2) !== 0),
    i
      ? ((l = !0), (t.flags &= -129))
      : (e === null || e.memoizedState !== null) && (o |= 1),
    re(ue, o & 1),
    e === null)
  )
    return (
      oa(t),
      (e = t.memoizedState),
      e !== null && ((e = e.dehydrated), e !== null)
        ? (t.mode & 1
            ? e.data === "$!"
              ? (t.lanes = 8)
              : (t.lanes = 1073741824)
            : (t.lanes = 1),
          null)
        : ((s = r.children),
          (e = r.fallback),
          l
            ? ((r = t.mode),
              (l = t.child),
              (s = { mode: "hidden", children: s }),
              !(r & 1) && l !== null
                ? ((l.childLanes = 0), (l.pendingProps = s))
                : (l = bs(s, r, 0, null)),
              (e = Pn(e, r, n, null)),
              (l.return = t),
              (e.return = t),
              (l.sibling = e),
              (t.child = l),
              (t.child.memoizedState = fa(n)),
              (t.memoizedState = da),
              e)
            : wc(t, s))
    );
  if (((o = e.memoizedState), o !== null && ((i = o.dehydrated), i !== null)))
    return gx(e, t, s, r, i, o, n);
  if (l) {
    (l = r.fallback), (s = t.mode), (o = e.child), (i = o.sibling);
    var a = { mode: "hidden", children: r.children };
    return (
      !(s & 1) && t.child !== o
        ? ((r = t.child),
          (r.childLanes = 0),
          (r.pendingProps = a),
          (t.deletions = null))
        : ((r = sn(o, a)), (r.subtreeFlags = o.subtreeFlags & 14680064)),
      i !== null ? (l = sn(i, l)) : ((l = Pn(l, s, n, null)), (l.flags |= 2)),
      (l.return = t),
      (r.return = t),
      (r.sibling = l),
      (t.child = r),
      (r = l),
      (l = t.child),
      (s = e.child.memoizedState),
      (s =
        s === null
          ? fa(n)
          : {
              baseLanes: s.baseLanes | n,
              cachePool: null,
              transitions: s.transitions,
            }),
      (l.memoizedState = s),
      (l.childLanes = e.childLanes & ~n),
      (t.memoizedState = da),
      r
    );
  }
  return (
    (l = e.child),
    (e = l.sibling),
    (r = sn(l, { mode: "visible", children: r.children })),
    !(t.mode & 1) && (r.lanes = n),
    (r.return = t),
    (r.sibling = null),
    e !== null &&
      ((n = t.deletions),
      n === null ? ((t.deletions = [e]), (t.flags |= 16)) : n.push(e)),
    (t.child = r),
    (t.memoizedState = null),
    r
  );
}
function wc(e, t) {
  return (
    (t = bs({ mode: "visible", children: t }, e.mode, 0, null)),
    (t.return = e),
    (e.child = t)
  );
}
function ol(e, t, n, r) {
  return (
    r !== null && sc(r),
    Sr(t, e.child, null, n),
    (e = wc(t, t.pendingProps.children)),
    (e.flags |= 2),
    (t.memoizedState = null),
    e
  );
}
function gx(e, t, n, r, o, l, s) {
  if (n)
    return t.flags & 256
      ? ((t.flags &= -257), (r = fi(Error(R(422)))), ol(e, t, s, r))
      : t.memoizedState !== null
      ? ((t.child = e.child), (t.flags |= 128), null)
      : ((l = r.fallback),
        (o = t.mode),
        (r = bs({ mode: "visible", children: r.children }, o, 0, null)),
        (l = Pn(l, o, s, null)),
        (l.flags |= 2),
        (r.return = t),
        (l.return = t),
        (r.sibling = l),
        (t.child = r),
        t.mode & 1 && Sr(t, e.child, null, s),
        (t.child.memoizedState = fa(s)),
        (t.memoizedState = da),
        l);
  if (!(t.mode & 1)) return ol(e, t, s, null);
  if (o.data === "$!") {
    if (((r = o.nextSibling && o.nextSibling.dataset), r)) var i = r.dgst;
    return (r = i), (l = Error(R(419))), (r = fi(l, r, void 0)), ol(e, t, s, r);
  }
  if (((i = (s & e.childLanes) !== 0), ze || i)) {
    if (((r = we), r !== null)) {
      switch (s & -s) {
        case 4:
          o = 2;
          break;
        case 16:
          o = 8;
          break;
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
          o = 32;
          break;
        case 536870912:
          o = 268435456;
          break;
        default:
          o = 0;
      }
      (o = o & (r.suspendedLanes | s) ? 0 : o),
        o !== 0 &&
          o !== l.retryLane &&
          ((l.retryLane = o), zt(e, o), dt(r, e, o, -1));
    }
    return Nc(), (r = fi(Error(R(421)))), ol(e, t, s, r);
  }
  return o.data === "$?"
    ? ((t.flags |= 128),
      (t.child = e.child),
      (t = _x.bind(null, e)),
      (o._reactRetry = t),
      null)
    : ((e = l.treeContext),
      (He = nn(o.nextSibling)),
      (Ge = t),
      (ce = !0),
      (ct = null),
      e !== null &&
        ((Ze[qe++] = Tt),
        (Ze[qe++] = At),
        (Ze[qe++] = An),
        (Tt = e.id),
        (At = e.overflow),
        (An = t)),
      (t = wc(t, r.children)),
      (t.flags |= 4096),
      t);
}
function hd(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  r !== null && (r.lanes |= t), la(e.return, t, n);
}
function pi(e, t, n, r, o) {
  var l = e.memoizedState;
  l === null
    ? (e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: r,
        tail: n,
        tailMode: o,
      })
    : ((l.isBackwards = t),
      (l.rendering = null),
      (l.renderingStartTime = 0),
      (l.last = r),
      (l.tail = n),
      (l.tailMode = o));
}
function tm(e, t, n) {
  var r = t.pendingProps,
    o = r.revealOrder,
    l = r.tail;
  if ((Ie(e, t, r.children, n), (r = ue.current), r & 2))
    (r = (r & 1) | 2), (t.flags |= 128);
  else {
    if (e !== null && e.flags & 128)
      e: for (e = t.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && hd(e, n, t);
        else if (e.tag === 19) hd(e, n, t);
        else if (e.child !== null) {
          (e.child.return = e), (e = e.child);
          continue;
        }
        if (e === t) break e;
        for (; e.sibling === null; ) {
          if (e.return === null || e.return === t) break e;
          e = e.return;
        }
        (e.sibling.return = e.return), (e = e.sibling);
      }
    r &= 1;
  }
  if ((re(ue, r), !(t.mode & 1))) t.memoizedState = null;
  else
    switch (o) {
      case "forwards":
        for (n = t.child, o = null; n !== null; )
          (e = n.alternate),
            e !== null && Hl(e) === null && (o = n),
            (n = n.sibling);
        (n = o),
          n === null
            ? ((o = t.child), (t.child = null))
            : ((o = n.sibling), (n.sibling = null)),
          pi(t, !1, o, n, l);
        break;
      case "backwards":
        for (n = null, o = t.child, t.child = null; o !== null; ) {
          if (((e = o.alternate), e !== null && Hl(e) === null)) {
            t.child = o;
            break;
          }
          (e = o.sibling), (o.sibling = n), (n = o), (o = e);
        }
        pi(t, !0, n, null, l);
        break;
      case "together":
        pi(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
  return t.child;
}
function Sl(e, t) {
  !(t.mode & 1) &&
    e !== null &&
    ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
}
function Dt(e, t, n) {
  if (
    (e !== null && (t.dependencies = e.dependencies),
    (Mn |= t.lanes),
    !(n & t.childLanes))
  )
    return null;
  if (e !== null && t.child !== e.child) throw Error(R(153));
  if (t.child !== null) {
    for (
      e = t.child, n = sn(e, e.pendingProps), t.child = n, n.return = t;
      e.sibling !== null;

    )
      (e = e.sibling), (n = n.sibling = sn(e, e.pendingProps)), (n.return = t);
    n.sibling = null;
  }
  return t.child;
}
function yx(e, t, n) {
  switch (t.tag) {
    case 3:
      Jp(t), br();
      break;
    case 5:
      jp(t);
      break;
    case 1:
      Ve(t.type) && Fl(t);
      break;
    case 4:
      fc(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context,
        o = t.memoizedProps.value;
      re(Bl, r._currentValue), (r._currentValue = o);
      break;
    case 13:
      if (((r = t.memoizedState), r !== null))
        return r.dehydrated !== null
          ? (re(ue, ue.current & 1), (t.flags |= 128), null)
          : n & t.child.childLanes
          ? em(e, t, n)
          : (re(ue, ue.current & 1),
            (e = Dt(e, t, n)),
            e !== null ? e.sibling : null);
      re(ue, ue.current & 1);
      break;
    case 19:
      if (((r = (n & t.childLanes) !== 0), e.flags & 128)) {
        if (r) return tm(e, t, n);
        t.flags |= 128;
      }
      if (
        ((o = t.memoizedState),
        o !== null &&
          ((o.rendering = null), (o.tail = null), (o.lastEffect = null)),
        re(ue, ue.current),
        r)
      )
        break;
      return null;
    case 22:
    case 23:
      return (t.lanes = 0), Zp(e, t, n);
  }
  return Dt(e, t, n);
}
var nm, pa, rm, om;
nm = function (e, t) {
  for (var n = t.child; n !== null; ) {
    if (n.tag === 5 || n.tag === 6) e.appendChild(n.stateNode);
    else if (n.tag !== 4 && n.child !== null) {
      (n.child.return = n), (n = n.child);
      continue;
    }
    if (n === t) break;
    for (; n.sibling === null; ) {
      if (n.return === null || n.return === t) return;
      n = n.return;
    }
    (n.sibling.return = n.return), (n = n.sibling);
  }
};
pa = function () {};
rm = function (e, t, n, r) {
  var o = e.memoizedProps;
  if (o !== r) {
    (e = t.stateNode), jn(Et.current);
    var l = null;
    switch (n) {
      case "input":
        (o = Mi(e, o)), (r = Mi(e, r)), (l = []);
        break;
      case "select":
        (o = fe({}, o, { value: void 0 })),
          (r = fe({}, r, { value: void 0 })),
          (l = []);
        break;
      case "textarea":
        (o = Di(e, o)), (r = Di(e, r)), (l = []);
        break;
      default:
        typeof o.onClick != "function" &&
          typeof r.onClick == "function" &&
          (e.onclick = zl);
    }
    Vi(n, r);
    var s;
    n = null;
    for (c in o)
      if (!r.hasOwnProperty(c) && o.hasOwnProperty(c) && o[c] != null)
        if (c === "style") {
          var i = o[c];
          for (s in i) i.hasOwnProperty(s) && (n || (n = {}), (n[s] = ""));
        } else
          c !== "dangerouslySetInnerHTML" &&
            c !== "children" &&
            c !== "suppressContentEditableWarning" &&
            c !== "suppressHydrationWarning" &&
            c !== "autoFocus" &&
            (fo.hasOwnProperty(c)
              ? l || (l = [])
              : (l = l || []).push(c, null));
    for (c in r) {
      var a = r[c];
      if (
        ((i = o != null ? o[c] : void 0),
        r.hasOwnProperty(c) && a !== i && (a != null || i != null))
      )
        if (c === "style")
          if (i) {
            for (s in i)
              !i.hasOwnProperty(s) ||
                (a && a.hasOwnProperty(s)) ||
                (n || (n = {}), (n[s] = ""));
            for (s in a)
              a.hasOwnProperty(s) &&
                i[s] !== a[s] &&
                (n || (n = {}), (n[s] = a[s]));
          } else n || (l || (l = []), l.push(c, n)), (n = a);
        else
          c === "dangerouslySetInnerHTML"
            ? ((a = a ? a.__html : void 0),
              (i = i ? i.__html : void 0),
              a != null && i !== a && (l = l || []).push(c, a))
            : c === "children"
            ? (typeof a != "string" && typeof a != "number") ||
              (l = l || []).push(c, "" + a)
            : c !== "suppressContentEditableWarning" &&
              c !== "suppressHydrationWarning" &&
              (fo.hasOwnProperty(c)
                ? (a != null && c === "onScroll" && ie("scroll", e),
                  l || i === a || (l = []))
                : (l = l || []).push(c, a));
    }
    n && (l = l || []).push("style", n);
    var c = l;
    (t.updateQueue = c) && (t.flags |= 4);
  }
};
om = function (e, t, n, r) {
  n !== r && (t.flags |= 4);
};
function Hr(e, t) {
  if (!ce)
    switch (e.tailMode) {
      case "hidden":
        t = e.tail;
        for (var n = null; t !== null; )
          t.alternate !== null && (n = t), (t = t.sibling);
        n === null ? (e.tail = null) : (n.sibling = null);
        break;
      case "collapsed":
        n = e.tail;
        for (var r = null; n !== null; )
          n.alternate !== null && (r = n), (n = n.sibling);
        r === null
          ? t || e.tail === null
            ? (e.tail = null)
            : (e.tail.sibling = null)
          : (r.sibling = null);
    }
}
function je(e) {
  var t = e.alternate !== null && e.alternate.child === e.child,
    n = 0,
    r = 0;
  if (t)
    for (var o = e.child; o !== null; )
      (n |= o.lanes | o.childLanes),
        (r |= o.subtreeFlags & 14680064),
        (r |= o.flags & 14680064),
        (o.return = e),
        (o = o.sibling);
  else
    for (o = e.child; o !== null; )
      (n |= o.lanes | o.childLanes),
        (r |= o.subtreeFlags),
        (r |= o.flags),
        (o.return = e),
        (o = o.sibling);
  return (e.subtreeFlags |= r), (e.childLanes = n), t;
}
function xx(e, t, n) {
  var r = t.pendingProps;
  switch ((lc(t), t.tag)) {
    case 2:
    case 16:
    case 15:
    case 0:
    case 11:
    case 7:
    case 8:
    case 12:
    case 9:
    case 14:
      return je(t), null;
    case 1:
      return Ve(t.type) && Dl(), je(t), null;
    case 3:
      return (
        (r = t.stateNode),
        Cr(),
        ae(Fe),
        ae(Pe),
        mc(),
        r.pendingContext &&
          ((r.context = r.pendingContext), (r.pendingContext = null)),
        (e === null || e.child === null) &&
          (nl(t)
            ? (t.flags |= 4)
            : e === null ||
              (e.memoizedState.isDehydrated && !(t.flags & 256)) ||
              ((t.flags |= 1024), ct !== null && (ba(ct), (ct = null)))),
        pa(e, t),
        je(t),
        null
      );
    case 5:
      pc(t);
      var o = jn(ko.current);
      if (((n = t.type), e !== null && t.stateNode != null))
        rm(e, t, n, r, o),
          e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
      else {
        if (!r) {
          if (t.stateNode === null) throw Error(R(166));
          return je(t), null;
        }
        if (((e = jn(Et.current)), nl(t))) {
          (r = t.stateNode), (n = t.type);
          var l = t.memoizedProps;
          switch (((r[bt] = t), (r[So] = l), (e = (t.mode & 1) !== 0), n)) {
            case "dialog":
              ie("cancel", r), ie("close", r);
              break;
            case "iframe":
            case "object":
            case "embed":
              ie("load", r);
              break;
            case "video":
            case "audio":
              for (o = 0; o < Jr.length; o++) ie(Jr[o], r);
              break;
            case "source":
              ie("error", r);
              break;
            case "img":
            case "image":
            case "link":
              ie("error", r), ie("load", r);
              break;
            case "details":
              ie("toggle", r);
              break;
            case "input":
              ku(r, l), ie("invalid", r);
              break;
            case "select":
              (r._wrapperState = { wasMultiple: !!l.multiple }),
                ie("invalid", r);
              break;
            case "textarea":
              Nu(r, l), ie("invalid", r);
          }
          Vi(n, l), (o = null);
          for (var s in l)
            if (l.hasOwnProperty(s)) {
              var i = l[s];
              s === "children"
                ? typeof i == "string"
                  ? r.textContent !== i &&
                    (l.suppressHydrationWarning !== !0 &&
                      tl(r.textContent, i, e),
                    (o = ["children", i]))
                  : typeof i == "number" &&
                    r.textContent !== "" + i &&
                    (l.suppressHydrationWarning !== !0 &&
                      tl(r.textContent, i, e),
                    (o = ["children", "" + i]))
                : fo.hasOwnProperty(s) &&
                  i != null &&
                  s === "onScroll" &&
                  ie("scroll", r);
            }
          switch (n) {
            case "input":
              Ko(r), Eu(r, l, !0);
              break;
            case "textarea":
              Ko(r), ju(r);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof l.onClick == "function" && (r.onclick = zl);
          }
          (r = o), (t.updateQueue = r), r !== null && (t.flags |= 4);
        } else {
          (s = o.nodeType === 9 ? o : o.ownerDocument),
            e === "http://www.w3.org/1999/xhtml" && (e = Tf(n)),
            e === "http://www.w3.org/1999/xhtml"
              ? n === "script"
                ? ((e = s.createElement("div")),
                  (e.innerHTML = "<script></script>"),
                  (e = e.removeChild(e.firstChild)))
                : typeof r.is == "string"
                ? (e = s.createElement(n, { is: r.is }))
                : ((e = s.createElement(n)),
                  n === "select" &&
                    ((s = e),
                    r.multiple
                      ? (s.multiple = !0)
                      : r.size && (s.size = r.size)))
              : (e = s.createElementNS(e, n)),
            (e[bt] = t),
            (e[So] = r),
            nm(e, t, !1, !1),
            (t.stateNode = e);
          e: {
            switch (((s = $i(n, r)), n)) {
              case "dialog":
                ie("cancel", e), ie("close", e), (o = r);
                break;
              case "iframe":
              case "object":
              case "embed":
                ie("load", e), (o = r);
                break;
              case "video":
              case "audio":
                for (o = 0; o < Jr.length; o++) ie(Jr[o], e);
                o = r;
                break;
              case "source":
                ie("error", e), (o = r);
                break;
              case "img":
              case "image":
              case "link":
                ie("error", e), ie("load", e), (o = r);
                break;
              case "details":
                ie("toggle", e), (o = r);
                break;
              case "input":
                ku(e, r), (o = Mi(e, r)), ie("invalid", e);
                break;
              case "option":
                o = r;
                break;
              case "select":
                (e._wrapperState = { wasMultiple: !!r.multiple }),
                  (o = fe({}, r, { value: void 0 })),
                  ie("invalid", e);
                break;
              case "textarea":
                Nu(e, r), (o = Di(e, r)), ie("invalid", e);
                break;
              default:
                o = r;
            }
            Vi(n, o), (i = o);
            for (l in i)
              if (i.hasOwnProperty(l)) {
                var a = i[l];
                l === "style"
                  ? Mf(e, a)
                  : l === "dangerouslySetInnerHTML"
                  ? ((a = a ? a.__html : void 0), a != null && Af(e, a))
                  : l === "children"
                  ? typeof a == "string"
                    ? (n !== "textarea" || a !== "") && po(e, a)
                    : typeof a == "number" && po(e, "" + a)
                  : l !== "suppressContentEditableWarning" &&
                    l !== "suppressHydrationWarning" &&
                    l !== "autoFocus" &&
                    (fo.hasOwnProperty(l)
                      ? a != null && l === "onScroll" && ie("scroll", e)
                      : a != null && Ua(e, l, a, s));
              }
            switch (n) {
              case "input":
                Ko(e), Eu(e, r, !1);
                break;
              case "textarea":
                Ko(e), ju(e);
                break;
              case "option":
                r.value != null && e.setAttribute("value", "" + cn(r.value));
                break;
              case "select":
                (e.multiple = !!r.multiple),
                  (l = r.value),
                  l != null
                    ? cr(e, !!r.multiple, l, !1)
                    : r.defaultValue != null &&
                      cr(e, !!r.multiple, r.defaultValue, !0);
                break;
              default:
                typeof o.onClick == "function" && (e.onclick = zl);
            }
            switch (n) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                r = !!r.autoFocus;
                break e;
              case "img":
                r = !0;
                break e;
              default:
                r = !1;
            }
          }
          r && (t.flags |= 4);
        }
        t.ref !== null && ((t.flags |= 512), (t.flags |= 2097152));
      }
      return je(t), null;
    case 6:
      if (e && t.stateNode != null) om(e, t, e.memoizedProps, r);
      else {
        if (typeof r != "string" && t.stateNode === null) throw Error(R(166));
        if (((n = jn(ko.current)), jn(Et.current), nl(t))) {
          if (
            ((r = t.stateNode),
            (n = t.memoizedProps),
            (r[bt] = t),
            (l = r.nodeValue !== n) && ((e = Ge), e !== null))
          )
            switch (e.tag) {
              case 3:
                tl(r.nodeValue, n, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 &&
                  tl(r.nodeValue, n, (e.mode & 1) !== 0);
            }
          l && (t.flags |= 4);
        } else
          (r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r)),
            (r[bt] = t),
            (t.stateNode = r);
      }
      return je(t), null;
    case 13:
      if (
        (ae(ue),
        (r = t.memoizedState),
        e === null ||
          (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
      ) {
        if (ce && He !== null && t.mode & 1 && !(t.flags & 128))
          Sp(), br(), (t.flags |= 98560), (l = !1);
        else if (((l = nl(t)), r !== null && r.dehydrated !== null)) {
          if (e === null) {
            if (!l) throw Error(R(318));
            if (
              ((l = t.memoizedState),
              (l = l !== null ? l.dehydrated : null),
              !l)
            )
              throw Error(R(317));
            l[bt] = t;
          } else
            br(), !(t.flags & 128) && (t.memoizedState = null), (t.flags |= 4);
          je(t), (l = !1);
        } else ct !== null && (ba(ct), (ct = null)), (l = !0);
        if (!l) return t.flags & 65536 ? t : null;
      }
      return t.flags & 128
        ? ((t.lanes = n), t)
        : ((r = r !== null),
          r !== (e !== null && e.memoizedState !== null) &&
            r &&
            ((t.child.flags |= 8192),
            t.mode & 1 &&
              (e === null || ue.current & 1 ? ge === 0 && (ge = 3) : Nc())),
          t.updateQueue !== null && (t.flags |= 4),
          je(t),
          null);
    case 4:
      return (
        Cr(), pa(e, t), e === null && wo(t.stateNode.containerInfo), je(t), null
      );
    case 10:
      return cc(t.type._context), je(t), null;
    case 17:
      return Ve(t.type) && Dl(), je(t), null;
    case 19:
      if ((ae(ue), (l = t.memoizedState), l === null)) return je(t), null;
      if (((r = (t.flags & 128) !== 0), (s = l.rendering), s === null))
        if (r) Hr(l, !1);
        else {
          if (ge !== 0 || (e !== null && e.flags & 128))
            for (e = t.child; e !== null; ) {
              if (((s = Hl(e)), s !== null)) {
                for (
                  t.flags |= 128,
                    Hr(l, !1),
                    r = s.updateQueue,
                    r !== null && ((t.updateQueue = r), (t.flags |= 4)),
                    t.subtreeFlags = 0,
                    r = n,
                    n = t.child;
                  n !== null;

                )
                  (l = n),
                    (e = r),
                    (l.flags &= 14680066),
                    (s = l.alternate),
                    s === null
                      ? ((l.childLanes = 0),
                        (l.lanes = e),
                        (l.child = null),
                        (l.subtreeFlags = 0),
                        (l.memoizedProps = null),
                        (l.memoizedState = null),
                        (l.updateQueue = null),
                        (l.dependencies = null),
                        (l.stateNode = null))
                      : ((l.childLanes = s.childLanes),
                        (l.lanes = s.lanes),
                        (l.child = s.child),
                        (l.subtreeFlags = 0),
                        (l.deletions = null),
                        (l.memoizedProps = s.memoizedProps),
                        (l.memoizedState = s.memoizedState),
                        (l.updateQueue = s.updateQueue),
                        (l.type = s.type),
                        (e = s.dependencies),
                        (l.dependencies =
                          e === null
                            ? null
                            : {
                                lanes: e.lanes,
                                firstContext: e.firstContext,
                              })),
                    (n = n.sibling);
                return re(ue, (ue.current & 1) | 2), t.child;
              }
              e = e.sibling;
            }
          l.tail !== null &&
            me() > Er &&
            ((t.flags |= 128), (r = !0), Hr(l, !1), (t.lanes = 4194304));
        }
      else {
        if (!r)
          if (((e = Hl(s)), e !== null)) {
            if (
              ((t.flags |= 128),
              (r = !0),
              (n = e.updateQueue),
              n !== null && ((t.updateQueue = n), (t.flags |= 4)),
              Hr(l, !0),
              l.tail === null && l.tailMode === "hidden" && !s.alternate && !ce)
            )
              return je(t), null;
          } else
            2 * me() - l.renderingStartTime > Er &&
              n !== 1073741824 &&
              ((t.flags |= 128), (r = !0), Hr(l, !1), (t.lanes = 4194304));
        l.isBackwards
          ? ((s.sibling = t.child), (t.child = s))
          : ((n = l.last),
            n !== null ? (n.sibling = s) : (t.child = s),
            (l.last = s));
      }
      return l.tail !== null
        ? ((t = l.tail),
          (l.rendering = t),
          (l.tail = t.sibling),
          (l.renderingStartTime = me()),
          (t.sibling = null),
          (n = ue.current),
          re(ue, r ? (n & 1) | 2 : n & 1),
          t)
        : (je(t), null);
    case 22:
    case 23:
      return (
        Ec(),
        (r = t.memoizedState !== null),
        e !== null && (e.memoizedState !== null) !== r && (t.flags |= 8192),
        r && t.mode & 1
          ? We & 1073741824 && (je(t), t.subtreeFlags & 6 && (t.flags |= 8192))
          : je(t),
        null
      );
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(R(156, t.tag));
}
function wx(e, t) {
  switch ((lc(t), t.tag)) {
    case 1:
      return (
        Ve(t.type) && Dl(),
        (e = t.flags),
        e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 3:
      return (
        Cr(),
        ae(Fe),
        ae(Pe),
        mc(),
        (e = t.flags),
        e & 65536 && !(e & 128) ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 5:
      return pc(t), null;
    case 13:
      if (
        (ae(ue), (e = t.memoizedState), e !== null && e.dehydrated !== null)
      ) {
        if (t.alternate === null) throw Error(R(340));
        br();
      }
      return (
        (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 19:
      return ae(ue), null;
    case 4:
      return Cr(), null;
    case 10:
      return cc(t.type._context), null;
    case 22:
    case 23:
      return Ec(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var ll = !1,
  Re = !1,
  bx = typeof WeakSet == "function" ? WeakSet : Set,
  M = null;
function ir(e, t) {
  var n = e.ref;
  if (n !== null)
    if (typeof n == "function")
      try {
        n(null);
      } catch (r) {
        pe(e, t, r);
      }
    else n.current = null;
}
function ma(e, t, n) {
  try {
    n();
  } catch (r) {
    pe(e, t, r);
  }
}
var vd = !1;
function Sx(e, t) {
  if (((Zi = Ll), (e = cp()), rc(e))) {
    if ("selectionStart" in e)
      var n = { start: e.selectionStart, end: e.selectionEnd };
    else
      e: {
        n = ((n = e.ownerDocument) && n.defaultView) || window;
        var r = n.getSelection && n.getSelection();
        if (r && r.rangeCount !== 0) {
          n = r.anchorNode;
          var o = r.anchorOffset,
            l = r.focusNode;
          r = r.focusOffset;
          try {
            n.nodeType, l.nodeType;
          } catch {
            n = null;
            break e;
          }
          var s = 0,
            i = -1,
            a = -1,
            c = 0,
            f = 0,
            p = e,
            m = null;
          t: for (;;) {
            for (
              var x;
              p !== n || (o !== 0 && p.nodeType !== 3) || (i = s + o),
                p !== l || (r !== 0 && p.nodeType !== 3) || (a = s + r),
                p.nodeType === 3 && (s += p.nodeValue.length),
                (x = p.firstChild) !== null;

            )
              (m = p), (p = x);
            for (;;) {
              if (p === e) break t;
              if (
                (m === n && ++c === o && (i = s),
                m === l && ++f === r && (a = s),
                (x = p.nextSibling) !== null)
              )
                break;
              (p = m), (m = p.parentNode);
            }
            p = x;
          }
          n = i === -1 || a === -1 ? null : { start: i, end: a };
        } else n = null;
      }
    n = n || { start: 0, end: 0 };
  } else n = null;
  for (qi = { focusedElem: e, selectionRange: n }, Ll = !1, M = t; M !== null; )
    if (((t = M), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null))
      (e.return = t), (M = e);
    else
      for (; M !== null; ) {
        t = M;
        try {
          var w = t.alternate;
          if (t.flags & 1024)
            switch (t.tag) {
              case 0:
              case 11:
              case 15:
                break;
              case 1:
                if (w !== null) {
                  var v = w.memoizedProps,
                    b = w.memoizedState,
                    h = t.stateNode,
                    d = h.getSnapshotBeforeUpdate(
                      t.elementType === t.type ? v : it(t.type, v),
                      b
                    );
                  h.__reactInternalSnapshotBeforeUpdate = d;
                }
                break;
              case 3:
                var y = t.stateNode.containerInfo;
                y.nodeType === 1
                  ? (y.textContent = "")
                  : y.nodeType === 9 &&
                    y.documentElement &&
                    y.removeChild(y.documentElement);
                break;
              case 5:
              case 6:
              case 4:
              case 17:
                break;
              default:
                throw Error(R(163));
            }
        } catch (S) {
          pe(t, t.return, S);
        }
        if (((e = t.sibling), e !== null)) {
          (e.return = t.return), (M = e);
          break;
        }
        M = t.return;
      }
  return (w = vd), (vd = !1), w;
}
function io(e, t, n) {
  var r = t.updateQueue;
  if (((r = r !== null ? r.lastEffect : null), r !== null)) {
    var o = (r = r.next);
    do {
      if ((o.tag & e) === e) {
        var l = o.destroy;
        (o.destroy = void 0), l !== void 0 && ma(t, n, l);
      }
      o = o.next;
    } while (o !== r);
  }
}
function xs(e, t) {
  if (
    ((t = t.updateQueue), (t = t !== null ? t.lastEffect : null), t !== null)
  ) {
    var n = (t = t.next);
    do {
      if ((n.tag & e) === e) {
        var r = n.create;
        n.destroy = r();
      }
      n = n.next;
    } while (n !== t);
  }
}
function ha(e) {
  var t = e.ref;
  if (t !== null) {
    var n = e.stateNode;
    switch (e.tag) {
      case 5:
        e = n;
        break;
      default:
        e = n;
    }
    typeof t == "function" ? t(e) : (t.current = e);
  }
}
function lm(e) {
  var t = e.alternate;
  t !== null && ((e.alternate = null), lm(t)),
    (e.child = null),
    (e.deletions = null),
    (e.sibling = null),
    e.tag === 5 &&
      ((t = e.stateNode),
      t !== null &&
        (delete t[bt], delete t[So], delete t[ta], delete t[ox], delete t[lx])),
    (e.stateNode = null),
    (e.return = null),
    (e.dependencies = null),
    (e.memoizedProps = null),
    (e.memoizedState = null),
    (e.pendingProps = null),
    (e.stateNode = null),
    (e.updateQueue = null);
}
function sm(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function gd(e) {
  e: for (;;) {
    for (; e.sibling === null; ) {
      if (e.return === null || sm(e.return)) return null;
      e = e.return;
    }
    for (
      e.sibling.return = e.return, e = e.sibling;
      e.tag !== 5 && e.tag !== 6 && e.tag !== 18;

    ) {
      if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
      (e.child.return = e), (e = e.child);
    }
    if (!(e.flags & 2)) return e.stateNode;
  }
}
function va(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode),
      t
        ? n.nodeType === 8
          ? n.parentNode.insertBefore(e, t)
          : n.insertBefore(e, t)
        : (n.nodeType === 8
            ? ((t = n.parentNode), t.insertBefore(e, n))
            : ((t = n), t.appendChild(e)),
          (n = n._reactRootContainer),
          n != null || t.onclick !== null || (t.onclick = zl));
  else if (r !== 4 && ((e = e.child), e !== null))
    for (va(e, t, n), e = e.sibling; e !== null; ) va(e, t, n), (e = e.sibling);
}
function ga(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e);
  else if (r !== 4 && ((e = e.child), e !== null))
    for (ga(e, t, n), e = e.sibling; e !== null; ) ga(e, t, n), (e = e.sibling);
}
var be = null,
  at = !1;
function Wt(e, t, n) {
  for (n = n.child; n !== null; ) im(e, t, n), (n = n.sibling);
}
function im(e, t, n) {
  if (kt && typeof kt.onCommitFiberUnmount == "function")
    try {
      kt.onCommitFiberUnmount(ds, n);
    } catch {}
  switch (n.tag) {
    case 5:
      Re || ir(n, t);
    case 6:
      var r = be,
        o = at;
      (be = null),
        Wt(e, t, n),
        (be = r),
        (at = o),
        be !== null &&
          (at
            ? ((e = be),
              (n = n.stateNode),
              e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n))
            : be.removeChild(n.stateNode));
      break;
    case 18:
      be !== null &&
        (at
          ? ((e = be),
            (n = n.stateNode),
            e.nodeType === 8
              ? si(e.parentNode, n)
              : e.nodeType === 1 && si(e, n),
            go(e))
          : si(be, n.stateNode));
      break;
    case 4:
      (r = be),
        (o = at),
        (be = n.stateNode.containerInfo),
        (at = !0),
        Wt(e, t, n),
        (be = r),
        (at = o);
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (
        !Re &&
        ((r = n.updateQueue), r !== null && ((r = r.lastEffect), r !== null))
      ) {
        o = r = r.next;
        do {
          var l = o,
            s = l.destroy;
          (l = l.tag),
            s !== void 0 && (l & 2 || l & 4) && ma(n, t, s),
            (o = o.next);
        } while (o !== r);
      }
      Wt(e, t, n);
      break;
    case 1:
      if (
        !Re &&
        (ir(n, t),
        (r = n.stateNode),
        typeof r.componentWillUnmount == "function")
      )
        try {
          (r.props = n.memoizedProps),
            (r.state = n.memoizedState),
            r.componentWillUnmount();
        } catch (i) {
          pe(n, t, i);
        }
      Wt(e, t, n);
      break;
    case 21:
      Wt(e, t, n);
      break;
    case 22:
      n.mode & 1
        ? ((Re = (r = Re) || n.memoizedState !== null), Wt(e, t, n), (Re = r))
        : Wt(e, t, n);
      break;
    default:
      Wt(e, t, n);
  }
}
function yd(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    n === null && (n = e.stateNode = new bx()),
      t.forEach(function (r) {
        var o = Ix.bind(null, e, r);
        n.has(r) || (n.add(r), r.then(o, o));
      });
  }
}
function ot(e, t) {
  var n = t.deletions;
  if (n !== null)
    for (var r = 0; r < n.length; r++) {
      var o = n[r];
      try {
        var l = e,
          s = t,
          i = s;
        e: for (; i !== null; ) {
          switch (i.tag) {
            case 5:
              (be = i.stateNode), (at = !1);
              break e;
            case 3:
              (be = i.stateNode.containerInfo), (at = !0);
              break e;
            case 4:
              (be = i.stateNode.containerInfo), (at = !0);
              break e;
          }
          i = i.return;
        }
        if (be === null) throw Error(R(160));
        im(l, s, o), (be = null), (at = !1);
        var a = o.alternate;
        a !== null && (a.return = null), (o.return = null);
      } catch (c) {
        pe(o, t, c);
      }
    }
  if (t.subtreeFlags & 12854)
    for (t = t.child; t !== null; ) am(t, e), (t = t.sibling);
}
function am(e, t) {
  var n = e.alternate,
    r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if ((ot(t, e), xt(e), r & 4)) {
        try {
          io(3, e, e.return), xs(3, e);
        } catch (v) {
          pe(e, e.return, v);
        }
        try {
          io(5, e, e.return);
        } catch (v) {
          pe(e, e.return, v);
        }
      }
      break;
    case 1:
      ot(t, e), xt(e), r & 512 && n !== null && ir(n, n.return);
      break;
    case 5:
      if (
        (ot(t, e),
        xt(e),
        r & 512 && n !== null && ir(n, n.return),
        e.flags & 32)
      ) {
        var o = e.stateNode;
        try {
          po(o, "");
        } catch (v) {
          pe(e, e.return, v);
        }
      }
      if (r & 4 && ((o = e.stateNode), o != null)) {
        var l = e.memoizedProps,
          s = n !== null ? n.memoizedProps : l,
          i = e.type,
          a = e.updateQueue;
        if (((e.updateQueue = null), a !== null))
          try {
            i === "input" && l.type === "radio" && l.name != null && _f(o, l),
              $i(i, s);
            var c = $i(i, l);
            for (s = 0; s < a.length; s += 2) {
              var f = a[s],
                p = a[s + 1];
              f === "style"
                ? Mf(o, p)
                : f === "dangerouslySetInnerHTML"
                ? Af(o, p)
                : f === "children"
                ? po(o, p)
                : Ua(o, f, p, c);
            }
            switch (i) {
              case "input":
                Oi(o, l);
                break;
              case "textarea":
                If(o, l);
                break;
              case "select":
                var m = o._wrapperState.wasMultiple;
                o._wrapperState.wasMultiple = !!l.multiple;
                var x = l.value;
                x != null
                  ? cr(o, !!l.multiple, x, !1)
                  : m !== !!l.multiple &&
                    (l.defaultValue != null
                      ? cr(o, !!l.multiple, l.defaultValue, !0)
                      : cr(o, !!l.multiple, l.multiple ? [] : "", !1));
            }
            o[So] = l;
          } catch (v) {
            pe(e, e.return, v);
          }
      }
      break;
    case 6:
      if ((ot(t, e), xt(e), r & 4)) {
        if (e.stateNode === null) throw Error(R(162));
        (o = e.stateNode), (l = e.memoizedProps);
        try {
          o.nodeValue = l;
        } catch (v) {
          pe(e, e.return, v);
        }
      }
      break;
    case 3:
      if (
        (ot(t, e), xt(e), r & 4 && n !== null && n.memoizedState.isDehydrated)
      )
        try {
          go(t.containerInfo);
        } catch (v) {
          pe(e, e.return, v);
        }
      break;
    case 4:
      ot(t, e), xt(e);
      break;
    case 13:
      ot(t, e),
        xt(e),
        (o = e.child),
        o.flags & 8192 &&
          ((l = o.memoizedState !== null),
          (o.stateNode.isHidden = l),
          !l ||
            (o.alternate !== null && o.alternate.memoizedState !== null) ||
            (Cc = me())),
        r & 4 && yd(e);
      break;
    case 22:
      if (
        ((f = n !== null && n.memoizedState !== null),
        e.mode & 1 ? ((Re = (c = Re) || f), ot(t, e), (Re = c)) : ot(t, e),
        xt(e),
        r & 8192)
      ) {
        if (
          ((c = e.memoizedState !== null),
          (e.stateNode.isHidden = c) && !f && e.mode & 1)
        )
          for (M = e, f = e.child; f !== null; ) {
            for (p = M = f; M !== null; ) {
              switch (((m = M), (x = m.child), m.tag)) {
                case 0:
                case 11:
                case 14:
                case 15:
                  io(4, m, m.return);
                  break;
                case 1:
                  ir(m, m.return);
                  var w = m.stateNode;
                  if (typeof w.componentWillUnmount == "function") {
                    (r = m), (n = m.return);
                    try {
                      (t = r),
                        (w.props = t.memoizedProps),
                        (w.state = t.memoizedState),
                        w.componentWillUnmount();
                    } catch (v) {
                      pe(r, n, v);
                    }
                  }
                  break;
                case 5:
                  ir(m, m.return);
                  break;
                case 22:
                  if (m.memoizedState !== null) {
                    wd(p);
                    continue;
                  }
              }
              x !== null ? ((x.return = m), (M = x)) : wd(p);
            }
            f = f.sibling;
          }
        e: for (f = null, p = e; ; ) {
          if (p.tag === 5) {
            if (f === null) {
              f = p;
              try {
                (o = p.stateNode),
                  c
                    ? ((l = o.style),
                      typeof l.setProperty == "function"
                        ? l.setProperty("display", "none", "important")
                        : (l.display = "none"))
                    : ((i = p.stateNode),
                      (a = p.memoizedProps.style),
                      (s =
                        a != null && a.hasOwnProperty("display")
                          ? a.display
                          : null),
                      (i.style.display = Lf("display", s)));
              } catch (v) {
                pe(e, e.return, v);
              }
            }
          } else if (p.tag === 6) {
            if (f === null)
              try {
                p.stateNode.nodeValue = c ? "" : p.memoizedProps;
              } catch (v) {
                pe(e, e.return, v);
              }
          } else if (
            ((p.tag !== 22 && p.tag !== 23) ||
              p.memoizedState === null ||
              p === e) &&
            p.child !== null
          ) {
            (p.child.return = p), (p = p.child);
            continue;
          }
          if (p === e) break e;
          for (; p.sibling === null; ) {
            if (p.return === null || p.return === e) break e;
            f === p && (f = null), (p = p.return);
          }
          f === p && (f = null), (p.sibling.return = p.return), (p = p.sibling);
        }
      }
      break;
    case 19:
      ot(t, e), xt(e), r & 4 && yd(e);
      break;
    case 21:
      break;
    default:
      ot(t, e), xt(e);
  }
}
function xt(e) {
  var t = e.flags;
  if (t & 2) {
    try {
      e: {
        for (var n = e.return; n !== null; ) {
          if (sm(n)) {
            var r = n;
            break e;
          }
          n = n.return;
        }
        throw Error(R(160));
      }
      switch (r.tag) {
        case 5:
          var o = r.stateNode;
          r.flags & 32 && (po(o, ""), (r.flags &= -33));
          var l = gd(e);
          ga(e, l, o);
          break;
        case 3:
        case 4:
          var s = r.stateNode.containerInfo,
            i = gd(e);
          va(e, i, s);
          break;
        default:
          throw Error(R(161));
      }
    } catch (a) {
      pe(e, e.return, a);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function Cx(e, t, n) {
  (M = e), cm(e);
}
function cm(e, t, n) {
  for (var r = (e.mode & 1) !== 0; M !== null; ) {
    var o = M,
      l = o.child;
    if (o.tag === 22 && r) {
      var s = o.memoizedState !== null || ll;
      if (!s) {
        var i = o.alternate,
          a = (i !== null && i.memoizedState !== null) || Re;
        i = ll;
        var c = Re;
        if (((ll = s), (Re = a) && !c))
          for (M = o; M !== null; )
            (s = M),
              (a = s.child),
              s.tag === 22 && s.memoizedState !== null
                ? bd(o)
                : a !== null
                ? ((a.return = s), (M = a))
                : bd(o);
        for (; l !== null; ) (M = l), cm(l), (l = l.sibling);
        (M = o), (ll = i), (Re = c);
      }
      xd(e);
    } else
      o.subtreeFlags & 8772 && l !== null ? ((l.return = o), (M = l)) : xd(e);
  }
}
function xd(e) {
  for (; M !== null; ) {
    var t = M;
    if (t.flags & 8772) {
      var n = t.alternate;
      try {
        if (t.flags & 8772)
          switch (t.tag) {
            case 0:
            case 11:
            case 15:
              Re || xs(5, t);
              break;
            case 1:
              var r = t.stateNode;
              if (t.flags & 4 && !Re)
                if (n === null) r.componentDidMount();
                else {
                  var o =
                    t.elementType === t.type
                      ? n.memoizedProps
                      : it(t.type, n.memoizedProps);
                  r.componentDidUpdate(
                    o,
                    n.memoizedState,
                    r.__reactInternalSnapshotBeforeUpdate
                  );
                }
              var l = t.updateQueue;
              l !== null && rd(t, l, r);
              break;
            case 3:
              var s = t.updateQueue;
              if (s !== null) {
                if (((n = null), t.child !== null))
                  switch (t.child.tag) {
                    case 5:
                      n = t.child.stateNode;
                      break;
                    case 1:
                      n = t.child.stateNode;
                  }
                rd(t, s, n);
              }
              break;
            case 5:
              var i = t.stateNode;
              if (n === null && t.flags & 4) {
                n = i;
                var a = t.memoizedProps;
                switch (t.type) {
                  case "button":
                  case "input":
                  case "select":
                  case "textarea":
                    a.autoFocus && n.focus();
                    break;
                  case "img":
                    a.src && (n.src = a.src);
                }
              }
              break;
            case 6:
              break;
            case 4:
              break;
            case 12:
              break;
            case 13:
              if (t.memoizedState === null) {
                var c = t.alternate;
                if (c !== null) {
                  var f = c.memoizedState;
                  if (f !== null) {
                    var p = f.dehydrated;
                    p !== null && go(p);
                  }
                }
              }
              break;
            case 19:
            case 17:
            case 21:
            case 22:
            case 23:
            case 25:
              break;
            default:
              throw Error(R(163));
          }
        Re || (t.flags & 512 && ha(t));
      } catch (m) {
        pe(t, t.return, m);
      }
    }
    if (t === e) {
      M = null;
      break;
    }
    if (((n = t.sibling), n !== null)) {
      (n.return = t.return), (M = n);
      break;
    }
    M = t.return;
  }
}
function wd(e) {
  for (; M !== null; ) {
    var t = M;
    if (t === e) {
      M = null;
      break;
    }
    var n = t.sibling;
    if (n !== null) {
      (n.return = t.return), (M = n);
      break;
    }
    M = t.return;
  }
}
function bd(e) {
  for (; M !== null; ) {
    var t = M;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            xs(4, t);
          } catch (a) {
            pe(t, n, a);
          }
          break;
        case 1:
          var r = t.stateNode;
          if (typeof r.componentDidMount == "function") {
            var o = t.return;
            try {
              r.componentDidMount();
            } catch (a) {
              pe(t, o, a);
            }
          }
          var l = t.return;
          try {
            ha(t);
          } catch (a) {
            pe(t, l, a);
          }
          break;
        case 5:
          var s = t.return;
          try {
            ha(t);
          } catch (a) {
            pe(t, s, a);
          }
      }
    } catch (a) {
      pe(t, t.return, a);
    }
    if (t === e) {
      M = null;
      break;
    }
    var i = t.sibling;
    if (i !== null) {
      (i.return = t.return), (M = i);
      break;
    }
    M = t.return;
  }
}
var kx = Math.ceil,
  Ql = $t.ReactCurrentDispatcher,
  bc = $t.ReactCurrentOwner,
  et = $t.ReactCurrentBatchConfig,
  Z = 0,
  we = null,
  he = null,
  Se = 0,
  We = 0,
  ar = vn(0),
  ge = 0,
  Ro = null,
  Mn = 0,
  ws = 0,
  Sc = 0,
  ao = null,
  Oe = null,
  Cc = 0,
  Er = 1 / 0,
  _t = null,
  Yl = !1,
  ya = null,
  on = null,
  sl = !1,
  qt = null,
  Xl = 0,
  co = 0,
  xa = null,
  Cl = -1,
  kl = 0;
function Ae() {
  return Z & 6 ? me() : Cl !== -1 ? Cl : (Cl = me());
}
function ln(e) {
  return e.mode & 1
    ? Z & 2 && Se !== 0
      ? Se & -Se
      : ix.transition !== null
      ? (kl === 0 && (kl = Kf()), kl)
      : ((e = q),
        e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : ep(e.type))),
        e)
    : 1;
}
function dt(e, t, n, r) {
  if (50 < co) throw ((co = 0), (xa = null), Error(R(185)));
  Mo(e, n, r),
    (!(Z & 2) || e !== we) &&
      (e === we && (!(Z & 2) && (ws |= n), ge === 4 && Xt(e, Se)),
      $e(e, r),
      n === 1 && Z === 0 && !(t.mode & 1) && ((Er = me() + 500), vs && gn()));
}
function $e(e, t) {
  var n = e.callbackNode;
  iy(e, t);
  var r = Al(e, e === we ? Se : 0);
  if (r === 0)
    n !== null && _u(n), (e.callbackNode = null), (e.callbackPriority = 0);
  else if (((t = r & -r), e.callbackPriority !== t)) {
    if ((n != null && _u(n), t === 1))
      e.tag === 0 ? sx(Sd.bind(null, e)) : xp(Sd.bind(null, e)),
        nx(function () {
          !(Z & 6) && gn();
        }),
        (n = null);
    else {
      switch (Qf(r)) {
        case 1:
          n = Ya;
          break;
        case 4:
          n = Hf;
          break;
        case 16:
          n = Tl;
          break;
        case 536870912:
          n = Gf;
          break;
        default:
          n = Tl;
      }
      n = gm(n, um.bind(null, e));
    }
    (e.callbackPriority = t), (e.callbackNode = n);
  }
}
function um(e, t) {
  if (((Cl = -1), (kl = 0), Z & 6)) throw Error(R(327));
  var n = e.callbackNode;
  if (mr() && e.callbackNode !== n) return null;
  var r = Al(e, e === we ? Se : 0);
  if (r === 0) return null;
  if (r & 30 || r & e.expiredLanes || t) t = Zl(e, r);
  else {
    t = r;
    var o = Z;
    Z |= 2;
    var l = fm();
    (we !== e || Se !== t) && ((_t = null), (Er = me() + 500), Rn(e, t));
    do
      try {
        jx();
        break;
      } catch (i) {
        dm(e, i);
      }
    while (!0);
    ac(),
      (Ql.current = l),
      (Z = o),
      he !== null ? (t = 0) : ((we = null), (Se = 0), (t = ge));
  }
  if (t !== 0) {
    if (
      (t === 2 && ((o = Gi(e)), o !== 0 && ((r = o), (t = wa(e, o)))), t === 1)
    )
      throw ((n = Ro), Rn(e, 0), Xt(e, r), $e(e, me()), n);
    if (t === 6) Xt(e, r);
    else {
      if (
        ((o = e.current.alternate),
        !(r & 30) &&
          !Ex(o) &&
          ((t = Zl(e, r)),
          t === 2 && ((l = Gi(e)), l !== 0 && ((r = l), (t = wa(e, l)))),
          t === 1))
      )
        throw ((n = Ro), Rn(e, 0), Xt(e, r), $e(e, me()), n);
      switch (((e.finishedWork = o), (e.finishedLanes = r), t)) {
        case 0:
        case 1:
          throw Error(R(345));
        case 2:
          Cn(e, Oe, _t);
          break;
        case 3:
          if (
            (Xt(e, r), (r & 130023424) === r && ((t = Cc + 500 - me()), 10 < t))
          ) {
            if (Al(e, 0) !== 0) break;
            if (((o = e.suspendedLanes), (o & r) !== r)) {
              Ae(), (e.pingedLanes |= e.suspendedLanes & o);
              break;
            }
            e.timeoutHandle = ea(Cn.bind(null, e, Oe, _t), t);
            break;
          }
          Cn(e, Oe, _t);
          break;
        case 4:
          if ((Xt(e, r), (r & 4194240) === r)) break;
          for (t = e.eventTimes, o = -1; 0 < r; ) {
            var s = 31 - ut(r);
            (l = 1 << s), (s = t[s]), s > o && (o = s), (r &= ~l);
          }
          if (
            ((r = o),
            (r = me() - r),
            (r =
              (120 > r
                ? 120
                : 480 > r
                ? 480
                : 1080 > r
                ? 1080
                : 1920 > r
                ? 1920
                : 3e3 > r
                ? 3e3
                : 4320 > r
                ? 4320
                : 1960 * kx(r / 1960)) - r),
            10 < r)
          ) {
            e.timeoutHandle = ea(Cn.bind(null, e, Oe, _t), r);
            break;
          }
          Cn(e, Oe, _t);
          break;
        case 5:
          Cn(e, Oe, _t);
          break;
        default:
          throw Error(R(329));
      }
    }
  }
  return $e(e, me()), e.callbackNode === n ? um.bind(null, e) : null;
}
function wa(e, t) {
  var n = ao;
  return (
    e.current.memoizedState.isDehydrated && (Rn(e, t).flags |= 256),
    (e = Zl(e, t)),
    e !== 2 && ((t = Oe), (Oe = n), t !== null && ba(t)),
    e
  );
}
function ba(e) {
  Oe === null ? (Oe = e) : Oe.push.apply(Oe, e);
}
function Ex(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var n = t.updateQueue;
      if (n !== null && ((n = n.stores), n !== null))
        for (var r = 0; r < n.length; r++) {
          var o = n[r],
            l = o.getSnapshot;
          o = o.value;
          try {
            if (!ft(l(), o)) return !1;
          } catch {
            return !1;
          }
        }
    }
    if (((n = t.child), t.subtreeFlags & 16384 && n !== null))
      (n.return = t), (t = n);
    else {
      if (t === e) break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === e) return !0;
        t = t.return;
      }
      (t.sibling.return = t.return), (t = t.sibling);
    }
  }
  return !0;
}
function Xt(e, t) {
  for (
    t &= ~Sc,
      t &= ~ws,
      e.suspendedLanes |= t,
      e.pingedLanes &= ~t,
      e = e.expirationTimes;
    0 < t;

  ) {
    var n = 31 - ut(t),
      r = 1 << n;
    (e[n] = -1), (t &= ~r);
  }
}
function Sd(e) {
  if (Z & 6) throw Error(R(327));
  mr();
  var t = Al(e, 0);
  if (!(t & 1)) return $e(e, me()), null;
  var n = Zl(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = Gi(e);
    r !== 0 && ((t = r), (n = wa(e, r)));
  }
  if (n === 1) throw ((n = Ro), Rn(e, 0), Xt(e, t), $e(e, me()), n);
  if (n === 6) throw Error(R(345));
  return (
    (e.finishedWork = e.current.alternate),
    (e.finishedLanes = t),
    Cn(e, Oe, _t),
    $e(e, me()),
    null
  );
}
function kc(e, t) {
  var n = Z;
  Z |= 1;
  try {
    return e(t);
  } finally {
    (Z = n), Z === 0 && ((Er = me() + 500), vs && gn());
  }
}
function On(e) {
  qt !== null && qt.tag === 0 && !(Z & 6) && mr();
  var t = Z;
  Z |= 1;
  var n = et.transition,
    r = q;
  try {
    if (((et.transition = null), (q = 1), e)) return e();
  } finally {
    (q = r), (et.transition = n), (Z = t), !(Z & 6) && gn();
  }
}
function Ec() {
  (We = ar.current), ae(ar);
}
function Rn(e, t) {
  (e.finishedWork = null), (e.finishedLanes = 0);
  var n = e.timeoutHandle;
  if ((n !== -1 && ((e.timeoutHandle = -1), tx(n)), he !== null))
    for (n = he.return; n !== null; ) {
      var r = n;
      switch ((lc(r), r.tag)) {
        case 1:
          (r = r.type.childContextTypes), r != null && Dl();
          break;
        case 3:
          Cr(), ae(Fe), ae(Pe), mc();
          break;
        case 5:
          pc(r);
          break;
        case 4:
          Cr();
          break;
        case 13:
          ae(ue);
          break;
        case 19:
          ae(ue);
          break;
        case 10:
          cc(r.type._context);
          break;
        case 22:
        case 23:
          Ec();
      }
      n = n.return;
    }
  if (
    ((we = e),
    (he = e = sn(e.current, null)),
    (Se = We = t),
    (ge = 0),
    (Ro = null),
    (Sc = ws = Mn = 0),
    (Oe = ao = null),
    Nn !== null)
  ) {
    for (t = 0; t < Nn.length; t++)
      if (((n = Nn[t]), (r = n.interleaved), r !== null)) {
        n.interleaved = null;
        var o = r.next,
          l = n.pending;
        if (l !== null) {
          var s = l.next;
          (l.next = o), (r.next = s);
        }
        n.pending = r;
      }
    Nn = null;
  }
  return e;
}
function dm(e, t) {
  do {
    var n = he;
    try {
      if ((ac(), (wl.current = Kl), Gl)) {
        for (var r = de.memoizedState; r !== null; ) {
          var o = r.queue;
          o !== null && (o.pending = null), (r = r.next);
        }
        Gl = !1;
      }
      if (
        ((Ln = 0),
        (xe = ve = de = null),
        (so = !1),
        (Eo = 0),
        (bc.current = null),
        n === null || n.return === null)
      ) {
        (ge = 1), (Ro = t), (he = null);
        break;
      }
      e: {
        var l = e,
          s = n.return,
          i = n,
          a = t;
        if (
          ((t = Se),
          (i.flags |= 32768),
          a !== null && typeof a == "object" && typeof a.then == "function")
        ) {
          var c = a,
            f = i,
            p = f.tag;
          if (!(f.mode & 1) && (p === 0 || p === 11 || p === 15)) {
            var m = f.alternate;
            m
              ? ((f.updateQueue = m.updateQueue),
                (f.memoizedState = m.memoizedState),
                (f.lanes = m.lanes))
              : ((f.updateQueue = null), (f.memoizedState = null));
          }
          var x = cd(s);
          if (x !== null) {
            (x.flags &= -257),
              ud(x, s, i, l, t),
              x.mode & 1 && ad(l, c, t),
              (t = x),
              (a = c);
            var w = t.updateQueue;
            if (w === null) {
              var v = new Set();
              v.add(a), (t.updateQueue = v);
            } else w.add(a);
            break e;
          } else {
            if (!(t & 1)) {
              ad(l, c, t), Nc();
              break e;
            }
            a = Error(R(426));
          }
        } else if (ce && i.mode & 1) {
          var b = cd(s);
          if (b !== null) {
            !(b.flags & 65536) && (b.flags |= 256),
              ud(b, s, i, l, t),
              sc(kr(a, i));
            break e;
          }
        }
        (l = a = kr(a, i)),
          ge !== 4 && (ge = 2),
          ao === null ? (ao = [l]) : ao.push(l),
          (l = s);
        do {
          switch (l.tag) {
            case 3:
              (l.flags |= 65536), (t &= -t), (l.lanes |= t);
              var h = Qp(l, a, t);
              nd(l, h);
              break e;
            case 1:
              i = a;
              var d = l.type,
                y = l.stateNode;
              if (
                !(l.flags & 128) &&
                (typeof d.getDerivedStateFromError == "function" ||
                  (y !== null &&
                    typeof y.componentDidCatch == "function" &&
                    (on === null || !on.has(y))))
              ) {
                (l.flags |= 65536), (t &= -t), (l.lanes |= t);
                var S = Yp(l, i, t);
                nd(l, S);
                break e;
              }
          }
          l = l.return;
        } while (l !== null);
      }
      mm(n);
    } catch (C) {
      (t = C), he === n && n !== null && (he = n = n.return);
      continue;
    }
    break;
  } while (!0);
}
function fm() {
  var e = Ql.current;
  return (Ql.current = Kl), e === null ? Kl : e;
}
function Nc() {
  (ge === 0 || ge === 3 || ge === 2) && (ge = 4),
    we === null || (!(Mn & 268435455) && !(ws & 268435455)) || Xt(we, Se);
}
function Zl(e, t) {
  var n = Z;
  Z |= 2;
  var r = fm();
  (we !== e || Se !== t) && ((_t = null), Rn(e, t));
  do
    try {
      Nx();
      break;
    } catch (o) {
      dm(e, o);
    }
  while (!0);
  if ((ac(), (Z = n), (Ql.current = r), he !== null)) throw Error(R(261));
  return (we = null), (Se = 0), ge;
}
function Nx() {
  for (; he !== null; ) pm(he);
}
function jx() {
  for (; he !== null && !qg(); ) pm(he);
}
function pm(e) {
  var t = vm(e.alternate, e, We);
  (e.memoizedProps = e.pendingProps),
    t === null ? mm(e) : (he = t),
    (bc.current = null);
}
function mm(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (((e = t.return), t.flags & 32768)) {
      if (((n = wx(n, t)), n !== null)) {
        (n.flags &= 32767), (he = n);
        return;
      }
      if (e !== null)
        (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
      else {
        (ge = 6), (he = null);
        return;
      }
    } else if (((n = xx(n, t, We)), n !== null)) {
      he = n;
      return;
    }
    if (((t = t.sibling), t !== null)) {
      he = t;
      return;
    }
    he = t = e;
  } while (t !== null);
  ge === 0 && (ge = 5);
}
function Cn(e, t, n) {
  var r = q,
    o = et.transition;
  try {
    (et.transition = null), (q = 1), Rx(e, t, n, r);
  } finally {
    (et.transition = o), (q = r);
  }
  return null;
}
function Rx(e, t, n, r) {
  do mr();
  while (qt !== null);
  if (Z & 6) throw Error(R(327));
  n = e.finishedWork;
  var o = e.finishedLanes;
  if (n === null) return null;
  if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current))
    throw Error(R(177));
  (e.callbackNode = null), (e.callbackPriority = 0);
  var l = n.lanes | n.childLanes;
  if (
    (ay(e, l),
    e === we && ((he = we = null), (Se = 0)),
    (!(n.subtreeFlags & 2064) && !(n.flags & 2064)) ||
      sl ||
      ((sl = !0),
      gm(Tl, function () {
        return mr(), null;
      })),
    (l = (n.flags & 15990) !== 0),
    n.subtreeFlags & 15990 || l)
  ) {
    (l = et.transition), (et.transition = null);
    var s = q;
    q = 1;
    var i = Z;
    (Z |= 4),
      (bc.current = null),
      Sx(e, n),
      am(n, e),
      Qy(qi),
      (Ll = !!Zi),
      (qi = Zi = null),
      (e.current = n),
      Cx(n),
      Jg(),
      (Z = i),
      (q = s),
      (et.transition = l);
  } else e.current = n;
  if (
    (sl && ((sl = !1), (qt = e), (Xl = o)),
    (l = e.pendingLanes),
    l === 0 && (on = null),
    ny(n.stateNode),
    $e(e, me()),
    t !== null)
  )
    for (r = e.onRecoverableError, n = 0; n < t.length; n++)
      (o = t[n]), r(o.value, { componentStack: o.stack, digest: o.digest });
  if (Yl) throw ((Yl = !1), (e = ya), (ya = null), e);
  return (
    Xl & 1 && e.tag !== 0 && mr(),
    (l = e.pendingLanes),
    l & 1 ? (e === xa ? co++ : ((co = 0), (xa = e))) : (co = 0),
    gn(),
    null
  );
}
function mr() {
  if (qt !== null) {
    var e = Qf(Xl),
      t = et.transition,
      n = q;
    try {
      if (((et.transition = null), (q = 16 > e ? 16 : e), qt === null))
        var r = !1;
      else {
        if (((e = qt), (qt = null), (Xl = 0), Z & 6)) throw Error(R(331));
        var o = Z;
        for (Z |= 4, M = e.current; M !== null; ) {
          var l = M,
            s = l.child;
          if (M.flags & 16) {
            var i = l.deletions;
            if (i !== null) {
              for (var a = 0; a < i.length; a++) {
                var c = i[a];
                for (M = c; M !== null; ) {
                  var f = M;
                  switch (f.tag) {
                    case 0:
                    case 11:
                    case 15:
                      io(8, f, l);
                  }
                  var p = f.child;
                  if (p !== null) (p.return = f), (M = p);
                  else
                    for (; M !== null; ) {
                      f = M;
                      var m = f.sibling,
                        x = f.return;
                      if ((lm(f), f === c)) {
                        M = null;
                        break;
                      }
                      if (m !== null) {
                        (m.return = x), (M = m);
                        break;
                      }
                      M = x;
                    }
                }
              }
              var w = l.alternate;
              if (w !== null) {
                var v = w.child;
                if (v !== null) {
                  w.child = null;
                  do {
                    var b = v.sibling;
                    (v.sibling = null), (v = b);
                  } while (v !== null);
                }
              }
              M = l;
            }
          }
          if (l.subtreeFlags & 2064 && s !== null) (s.return = l), (M = s);
          else
            e: for (; M !== null; ) {
              if (((l = M), l.flags & 2048))
                switch (l.tag) {
                  case 0:
                  case 11:
                  case 15:
                    io(9, l, l.return);
                }
              var h = l.sibling;
              if (h !== null) {
                (h.return = l.return), (M = h);
                break e;
              }
              M = l.return;
            }
        }
        var d = e.current;
        for (M = d; M !== null; ) {
          s = M;
          var y = s.child;
          if (s.subtreeFlags & 2064 && y !== null) (y.return = s), (M = y);
          else
            e: for (s = d; M !== null; ) {
              if (((i = M), i.flags & 2048))
                try {
                  switch (i.tag) {
                    case 0:
                    case 11:
                    case 15:
                      xs(9, i);
                  }
                } catch (C) {
                  pe(i, i.return, C);
                }
              if (i === s) {
                M = null;
                break e;
              }
              var S = i.sibling;
              if (S !== null) {
                (S.return = i.return), (M = S);
                break e;
              }
              M = i.return;
            }
        }
        if (
          ((Z = o), gn(), kt && typeof kt.onPostCommitFiberRoot == "function")
        )
          try {
            kt.onPostCommitFiberRoot(ds, e);
          } catch {}
        r = !0;
      }
      return r;
    } finally {
      (q = n), (et.transition = t);
    }
  }
  return !1;
}
function Cd(e, t, n) {
  (t = kr(n, t)),
    (t = Qp(e, t, 1)),
    (e = rn(e, t, 1)),
    (t = Ae()),
    e !== null && (Mo(e, 1, t), $e(e, t));
}
function pe(e, t, n) {
  if (e.tag === 3) Cd(e, e, n);
  else
    for (; t !== null; ) {
      if (t.tag === 3) {
        Cd(t, e, n);
        break;
      } else if (t.tag === 1) {
        var r = t.stateNode;
        if (
          typeof t.type.getDerivedStateFromError == "function" ||
          (typeof r.componentDidCatch == "function" &&
            (on === null || !on.has(r)))
        ) {
          (e = kr(n, e)),
            (e = Yp(t, e, 1)),
            (t = rn(t, e, 1)),
            (e = Ae()),
            t !== null && (Mo(t, 1, e), $e(t, e));
          break;
        }
      }
      t = t.return;
    }
}
function Px(e, t, n) {
  var r = e.pingCache;
  r !== null && r.delete(t),
    (t = Ae()),
    (e.pingedLanes |= e.suspendedLanes & n),
    we === e &&
      (Se & n) === n &&
      (ge === 4 || (ge === 3 && (Se & 130023424) === Se && 500 > me() - Cc)
        ? Rn(e, 0)
        : (Sc |= n)),
    $e(e, t);
}
function hm(e, t) {
  t === 0 &&
    (e.mode & 1
      ? ((t = Xo), (Xo <<= 1), !(Xo & 130023424) && (Xo = 4194304))
      : (t = 1));
  var n = Ae();
  (e = zt(e, t)), e !== null && (Mo(e, t, n), $e(e, n));
}
function _x(e) {
  var t = e.memoizedState,
    n = 0;
  t !== null && (n = t.retryLane), hm(e, n);
}
function Ix(e, t) {
  var n = 0;
  switch (e.tag) {
    case 13:
      var r = e.stateNode,
        o = e.memoizedState;
      o !== null && (n = o.retryLane);
      break;
    case 19:
      r = e.stateNode;
      break;
    default:
      throw Error(R(314));
  }
  r !== null && r.delete(t), hm(e, n);
}
var vm;
vm = function (e, t, n) {
  if (e !== null)
    if (e.memoizedProps !== t.pendingProps || Fe.current) ze = !0;
    else {
      if (!(e.lanes & n) && !(t.flags & 128)) return (ze = !1), yx(e, t, n);
      ze = !!(e.flags & 131072);
    }
  else (ze = !1), ce && t.flags & 1048576 && wp(t, $l, t.index);
  switch (((t.lanes = 0), t.tag)) {
    case 2:
      var r = t.type;
      Sl(e, t), (e = t.pendingProps);
      var o = wr(t, Pe.current);
      pr(t, n), (o = vc(null, t, r, e, o, n));
      var l = gc();
      return (
        (t.flags |= 1),
        typeof o == "object" &&
        o !== null &&
        typeof o.render == "function" &&
        o.$$typeof === void 0
          ? ((t.tag = 1),
            (t.memoizedState = null),
            (t.updateQueue = null),
            Ve(r) ? ((l = !0), Fl(t)) : (l = !1),
            (t.memoizedState =
              o.state !== null && o.state !== void 0 ? o.state : null),
            dc(t),
            (o.updater = ys),
            (t.stateNode = o),
            (o._reactInternals = t),
            ia(t, r, e, n),
            (t = ua(null, t, r, !0, l, n)))
          : ((t.tag = 0), ce && l && oc(t), Ie(null, t, o, n), (t = t.child)),
        t
      );
    case 16:
      r = t.elementType;
      e: {
        switch (
          (Sl(e, t),
          (e = t.pendingProps),
          (o = r._init),
          (r = o(r._payload)),
          (t.type = r),
          (o = t.tag = Ax(r)),
          (e = it(r, e)),
          o)
        ) {
          case 0:
            t = ca(null, t, r, e, n);
            break e;
          case 1:
            t = pd(null, t, r, e, n);
            break e;
          case 11:
            t = dd(null, t, r, e, n);
            break e;
          case 14:
            t = fd(null, t, r, it(r.type, e), n);
            break e;
        }
        throw Error(R(306, r, ""));
      }
      return t;
    case 0:
      return (
        (r = t.type),
        (o = t.pendingProps),
        (o = t.elementType === r ? o : it(r, o)),
        ca(e, t, r, o, n)
      );
    case 1:
      return (
        (r = t.type),
        (o = t.pendingProps),
        (o = t.elementType === r ? o : it(r, o)),
        pd(e, t, r, o, n)
      );
    case 3:
      e: {
        if ((Jp(t), e === null)) throw Error(R(387));
        (r = t.pendingProps),
          (l = t.memoizedState),
          (o = l.element),
          Np(e, t),
          Ul(t, r, null, n);
        var s = t.memoizedState;
        if (((r = s.element), l.isDehydrated))
          if (
            ((l = {
              element: r,
              isDehydrated: !1,
              cache: s.cache,
              pendingSuspenseBoundaries: s.pendingSuspenseBoundaries,
              transitions: s.transitions,
            }),
            (t.updateQueue.baseState = l),
            (t.memoizedState = l),
            t.flags & 256)
          ) {
            (o = kr(Error(R(423)), t)), (t = md(e, t, r, n, o));
            break e;
          } else if (r !== o) {
            (o = kr(Error(R(424)), t)), (t = md(e, t, r, n, o));
            break e;
          } else
            for (
              He = nn(t.stateNode.containerInfo.firstChild),
                Ge = t,
                ce = !0,
                ct = null,
                n = kp(t, null, r, n),
                t.child = n;
              n;

            )
              (n.flags = (n.flags & -3) | 4096), (n = n.sibling);
        else {
          if ((br(), r === o)) {
            t = Dt(e, t, n);
            break e;
          }
          Ie(e, t, r, n);
        }
        t = t.child;
      }
      return t;
    case 5:
      return (
        jp(t),
        e === null && oa(t),
        (r = t.type),
        (o = t.pendingProps),
        (l = e !== null ? e.memoizedProps : null),
        (s = o.children),
        Ji(r, o) ? (s = null) : l !== null && Ji(r, l) && (t.flags |= 32),
        qp(e, t),
        Ie(e, t, s, n),
        t.child
      );
    case 6:
      return e === null && oa(t), null;
    case 13:
      return em(e, t, n);
    case 4:
      return (
        fc(t, t.stateNode.containerInfo),
        (r = t.pendingProps),
        e === null ? (t.child = Sr(t, null, r, n)) : Ie(e, t, r, n),
        t.child
      );
    case 11:
      return (
        (r = t.type),
        (o = t.pendingProps),
        (o = t.elementType === r ? o : it(r, o)),
        dd(e, t, r, o, n)
      );
    case 7:
      return Ie(e, t, t.pendingProps, n), t.child;
    case 8:
      return Ie(e, t, t.pendingProps.children, n), t.child;
    case 12:
      return Ie(e, t, t.pendingProps.children, n), t.child;
    case 10:
      e: {
        if (
          ((r = t.type._context),
          (o = t.pendingProps),
          (l = t.memoizedProps),
          (s = o.value),
          re(Bl, r._currentValue),
          (r._currentValue = s),
          l !== null)
        )
          if (ft(l.value, s)) {
            if (l.children === o.children && !Fe.current) {
              t = Dt(e, t, n);
              break e;
            }
          } else
            for (l = t.child, l !== null && (l.return = t); l !== null; ) {
              var i = l.dependencies;
              if (i !== null) {
                s = l.child;
                for (var a = i.firstContext; a !== null; ) {
                  if (a.context === r) {
                    if (l.tag === 1) {
                      (a = Lt(-1, n & -n)), (a.tag = 2);
                      var c = l.updateQueue;
                      if (c !== null) {
                        c = c.shared;
                        var f = c.pending;
                        f === null
                          ? (a.next = a)
                          : ((a.next = f.next), (f.next = a)),
                          (c.pending = a);
                      }
                    }
                    (l.lanes |= n),
                      (a = l.alternate),
                      a !== null && (a.lanes |= n),
                      la(l.return, n, t),
                      (i.lanes |= n);
                    break;
                  }
                  a = a.next;
                }
              } else if (l.tag === 10) s = l.type === t.type ? null : l.child;
              else if (l.tag === 18) {
                if (((s = l.return), s === null)) throw Error(R(341));
                (s.lanes |= n),
                  (i = s.alternate),
                  i !== null && (i.lanes |= n),
                  la(s, n, t),
                  (s = l.sibling);
              } else s = l.child;
              if (s !== null) s.return = l;
              else
                for (s = l; s !== null; ) {
                  if (s === t) {
                    s = null;
                    break;
                  }
                  if (((l = s.sibling), l !== null)) {
                    (l.return = s.return), (s = l);
                    break;
                  }
                  s = s.return;
                }
              l = s;
            }
        Ie(e, t, o.children, n), (t = t.child);
      }
      return t;
    case 9:
      return (
        (o = t.type),
        (r = t.pendingProps.children),
        pr(t, n),
        (o = tt(o)),
        (r = r(o)),
        (t.flags |= 1),
        Ie(e, t, r, n),
        t.child
      );
    case 14:
      return (
        (r = t.type),
        (o = it(r, t.pendingProps)),
        (o = it(r.type, o)),
        fd(e, t, r, o, n)
      );
    case 15:
      return Xp(e, t, t.type, t.pendingProps, n);
    case 17:
      return (
        (r = t.type),
        (o = t.pendingProps),
        (o = t.elementType === r ? o : it(r, o)),
        Sl(e, t),
        (t.tag = 1),
        Ve(r) ? ((e = !0), Fl(t)) : (e = !1),
        pr(t, n),
        Kp(t, r, o),
        ia(t, r, o, n),
        ua(null, t, r, !0, e, n)
      );
    case 19:
      return tm(e, t, n);
    case 22:
      return Zp(e, t, n);
  }
  throw Error(R(156, t.tag));
};
function gm(e, t) {
  return Uf(e, t);
}
function Tx(e, t, n, r) {
  (this.tag = e),
    (this.key = n),
    (this.sibling =
      this.child =
      this.return =
      this.stateNode =
      this.type =
      this.elementType =
        null),
    (this.index = 0),
    (this.ref = null),
    (this.pendingProps = t),
    (this.dependencies =
      this.memoizedState =
      this.updateQueue =
      this.memoizedProps =
        null),
    (this.mode = r),
    (this.subtreeFlags = this.flags = 0),
    (this.deletions = null),
    (this.childLanes = this.lanes = 0),
    (this.alternate = null);
}
function Je(e, t, n, r) {
  return new Tx(e, t, n, r);
}
function jc(e) {
  return (e = e.prototype), !(!e || !e.isReactComponent);
}
function Ax(e) {
  if (typeof e == "function") return jc(e) ? 1 : 0;
  if (e != null) {
    if (((e = e.$$typeof), e === Ga)) return 11;
    if (e === Ka) return 14;
  }
  return 2;
}
function sn(e, t) {
  var n = e.alternate;
  return (
    n === null
      ? ((n = Je(e.tag, t, e.key, e.mode)),
        (n.elementType = e.elementType),
        (n.type = e.type),
        (n.stateNode = e.stateNode),
        (n.alternate = e),
        (e.alternate = n))
      : ((n.pendingProps = t),
        (n.type = e.type),
        (n.flags = 0),
        (n.subtreeFlags = 0),
        (n.deletions = null)),
    (n.flags = e.flags & 14680064),
    (n.childLanes = e.childLanes),
    (n.lanes = e.lanes),
    (n.child = e.child),
    (n.memoizedProps = e.memoizedProps),
    (n.memoizedState = e.memoizedState),
    (n.updateQueue = e.updateQueue),
    (t = e.dependencies),
    (n.dependencies =
      t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }),
    (n.sibling = e.sibling),
    (n.index = e.index),
    (n.ref = e.ref),
    n
  );
}
function El(e, t, n, r, o, l) {
  var s = 2;
  if (((r = e), typeof e == "function")) jc(e) && (s = 1);
  else if (typeof e == "string") s = 5;
  else
    e: switch (e) {
      case qn:
        return Pn(n.children, o, l, t);
      case Ha:
        (s = 8), (o |= 8);
        break;
      case Ii:
        return (
          (e = Je(12, n, t, o | 2)), (e.elementType = Ii), (e.lanes = l), e
        );
      case Ti:
        return (e = Je(13, n, t, o)), (e.elementType = Ti), (e.lanes = l), e;
      case Ai:
        return (e = Je(19, n, t, o)), (e.elementType = Ai), (e.lanes = l), e;
      case jf:
        return bs(n, o, l, t);
      default:
        if (typeof e == "object" && e !== null)
          switch (e.$$typeof) {
            case Ef:
              s = 10;
              break e;
            case Nf:
              s = 9;
              break e;
            case Ga:
              s = 11;
              break e;
            case Ka:
              s = 14;
              break e;
            case Kt:
              (s = 16), (r = null);
              break e;
          }
        throw Error(R(130, e == null ? e : typeof e, ""));
    }
  return (
    (t = Je(s, n, t, o)), (t.elementType = e), (t.type = r), (t.lanes = l), t
  );
}
function Pn(e, t, n, r) {
  return (e = Je(7, e, r, t)), (e.lanes = n), e;
}
function bs(e, t, n, r) {
  return (
    (e = Je(22, e, r, t)),
    (e.elementType = jf),
    (e.lanes = n),
    (e.stateNode = { isHidden: !1 }),
    e
  );
}
function mi(e, t, n) {
  return (e = Je(6, e, null, t)), (e.lanes = n), e;
}
function hi(e, t, n) {
  return (
    (t = Je(4, e.children !== null ? e.children : [], e.key, t)),
    (t.lanes = n),
    (t.stateNode = {
      containerInfo: e.containerInfo,
      pendingChildren: null,
      implementation: e.implementation,
    }),
    t
  );
}
function Lx(e, t, n, r, o) {
  (this.tag = t),
    (this.containerInfo = e),
    (this.finishedWork =
      this.pingCache =
      this.current =
      this.pendingChildren =
        null),
    (this.timeoutHandle = -1),
    (this.callbackNode = this.pendingContext = this.context = null),
    (this.callbackPriority = 0),
    (this.eventTimes = Ys(0)),
    (this.expirationTimes = Ys(-1)),
    (this.entangledLanes =
      this.finishedLanes =
      this.mutableReadLanes =
      this.expiredLanes =
      this.pingedLanes =
      this.suspendedLanes =
      this.pendingLanes =
        0),
    (this.entanglements = Ys(0)),
    (this.identifierPrefix = r),
    (this.onRecoverableError = o),
    (this.mutableSourceEagerHydrationData = null);
}
function Rc(e, t, n, r, o, l, s, i, a) {
  return (
    (e = new Lx(e, t, n, i, a)),
    t === 1 ? ((t = 1), l === !0 && (t |= 8)) : (t = 0),
    (l = Je(3, null, null, t)),
    (e.current = l),
    (l.stateNode = e),
    (l.memoizedState = {
      element: r,
      isDehydrated: n,
      cache: null,
      transitions: null,
      pendingSuspenseBoundaries: null,
    }),
    dc(l),
    e
  );
}
function Mx(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return {
    $$typeof: Zn,
    key: r == null ? null : "" + r,
    children: e,
    containerInfo: t,
    implementation: n,
  };
}
function ym(e) {
  if (!e) return un;
  e = e._reactInternals;
  e: {
    if ($n(e) !== e || e.tag !== 1) throw Error(R(170));
    var t = e;
    do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context;
          break e;
        case 1:
          if (Ve(t.type)) {
            t = t.stateNode.__reactInternalMemoizedMergedChildContext;
            break e;
          }
      }
      t = t.return;
    } while (t !== null);
    throw Error(R(171));
  }
  if (e.tag === 1) {
    var n = e.type;
    if (Ve(n)) return yp(e, n, t);
  }
  return t;
}
function xm(e, t, n, r, o, l, s, i, a) {
  return (
    (e = Rc(n, r, !0, e, o, l, s, i, a)),
    (e.context = ym(null)),
    (n = e.current),
    (r = Ae()),
    (o = ln(n)),
    (l = Lt(r, o)),
    (l.callback = t ?? null),
    rn(n, l, o),
    (e.current.lanes = o),
    Mo(e, o, r),
    $e(e, r),
    e
  );
}
function Ss(e, t, n, r) {
  var o = t.current,
    l = Ae(),
    s = ln(o);
  return (
    (n = ym(n)),
    t.context === null ? (t.context = n) : (t.pendingContext = n),
    (t = Lt(l, s)),
    (t.payload = { element: e }),
    (r = r === void 0 ? null : r),
    r !== null && (t.callback = r),
    (e = rn(o, t, s)),
    e !== null && (dt(e, o, s, l), xl(e, o, s)),
    s
  );
}
function ql(e) {
  if (((e = e.current), !e.child)) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function kd(e, t) {
  if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function Pc(e, t) {
  kd(e, t), (e = e.alternate) && kd(e, t);
}
function Ox() {
  return null;
}
var wm =
  typeof reportError == "function"
    ? reportError
    : function (e) {
        console.error(e);
      };
function _c(e) {
  this._internalRoot = e;
}
Cs.prototype.render = _c.prototype.render = function (e) {
  var t = this._internalRoot;
  if (t === null) throw Error(R(409));
  Ss(e, t, null, null);
};
Cs.prototype.unmount = _c.prototype.unmount = function () {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    On(function () {
      Ss(null, e, null, null);
    }),
      (t[Ot] = null);
  }
};
function Cs(e) {
  this._internalRoot = e;
}
Cs.prototype.unstable_scheduleHydration = function (e) {
  if (e) {
    var t = Zf();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < Yt.length && t !== 0 && t < Yt[n].priority; n++);
    Yt.splice(n, 0, e), n === 0 && Jf(e);
  }
};
function Ic(e) {
  return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
}
function ks(e) {
  return !(
    !e ||
    (e.nodeType !== 1 &&
      e.nodeType !== 9 &&
      e.nodeType !== 11 &&
      (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
  );
}
function Ed() {}
function zx(e, t, n, r, o) {
  if (o) {
    if (typeof r == "function") {
      var l = r;
      r = function () {
        var c = ql(s);
        l.call(c);
      };
    }
    var s = xm(t, r, e, 0, null, !1, !1, "", Ed);
    return (
      (e._reactRootContainer = s),
      (e[Ot] = s.current),
      wo(e.nodeType === 8 ? e.parentNode : e),
      On(),
      s
    );
  }
  for (; (o = e.lastChild); ) e.removeChild(o);
  if (typeof r == "function") {
    var i = r;
    r = function () {
      var c = ql(a);
      i.call(c);
    };
  }
  var a = Rc(e, 0, !1, null, null, !1, !1, "", Ed);
  return (
    (e._reactRootContainer = a),
    (e[Ot] = a.current),
    wo(e.nodeType === 8 ? e.parentNode : e),
    On(function () {
      Ss(t, a, n, r);
    }),
    a
  );
}
function Es(e, t, n, r, o) {
  var l = n._reactRootContainer;
  if (l) {
    var s = l;
    if (typeof o == "function") {
      var i = o;
      o = function () {
        var a = ql(s);
        i.call(a);
      };
    }
    Ss(t, s, e, o);
  } else s = zx(n, t, e, o, r);
  return ql(s);
}
Yf = function (e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = qr(t.pendingLanes);
        n !== 0 &&
          (Xa(t, n | 1), $e(t, me()), !(Z & 6) && ((Er = me() + 500), gn()));
      }
      break;
    case 13:
      On(function () {
        var r = zt(e, 1);
        if (r !== null) {
          var o = Ae();
          dt(r, e, 1, o);
        }
      }),
        Pc(e, 1);
  }
};
Za = function (e) {
  if (e.tag === 13) {
    var t = zt(e, 134217728);
    if (t !== null) {
      var n = Ae();
      dt(t, e, 134217728, n);
    }
    Pc(e, 134217728);
  }
};
Xf = function (e) {
  if (e.tag === 13) {
    var t = ln(e),
      n = zt(e, t);
    if (n !== null) {
      var r = Ae();
      dt(n, e, t, r);
    }
    Pc(e, t);
  }
};
Zf = function () {
  return q;
};
qf = function (e, t) {
  var n = q;
  try {
    return (q = e), t();
  } finally {
    q = n;
  }
};
Wi = function (e, t, n) {
  switch (t) {
    case "input":
      if ((Oi(e, n), (t = n.name), n.type === "radio" && t != null)) {
        for (n = e; n.parentNode; ) n = n.parentNode;
        for (
          n = n.querySelectorAll(
            "input[name=" + JSON.stringify("" + t) + '][type="radio"]'
          ),
            t = 0;
          t < n.length;
          t++
        ) {
          var r = n[t];
          if (r !== e && r.form === e.form) {
            var o = hs(r);
            if (!o) throw Error(R(90));
            Pf(r), Oi(r, o);
          }
        }
      }
      break;
    case "textarea":
      If(e, n);
      break;
    case "select":
      (t = n.value), t != null && cr(e, !!n.multiple, t, !1);
  }
};
Df = kc;
Ff = On;
var Dx = { usingClientEntryPoint: !1, Events: [zo, nr, hs, Of, zf, kc] },
  Gr = {
    findFiberByHostInstance: En,
    bundleType: 0,
    version: "18.3.1",
    rendererPackageName: "react-dom",
  },
  Fx = {
    bundleType: Gr.bundleType,
    version: Gr.version,
    rendererPackageName: Gr.rendererPackageName,
    rendererConfig: Gr.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: $t.ReactCurrentDispatcher,
    findHostInstanceByFiber: function (e) {
      return (e = Bf(e)), e === null ? null : e.stateNode;
    },
    findFiberByHostInstance: Gr.findFiberByHostInstance || Ox,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: "18.3.1-next-f1338f8080-20240426",
  };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var il = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!il.isDisabled && il.supportsFiber)
    try {
      (ds = il.inject(Fx)), (kt = il);
    } catch {}
}
Ye.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Dx;
Ye.createPortal = function (e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!Ic(t)) throw Error(R(200));
  return Mx(e, t, null, n);
};
Ye.createRoot = function (e, t) {
  if (!Ic(e)) throw Error(R(299));
  var n = !1,
    r = "",
    o = wm;
  return (
    t != null &&
      (t.unstable_strictMode === !0 && (n = !0),
      t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
      t.onRecoverableError !== void 0 && (o = t.onRecoverableError)),
    (t = Rc(e, 1, !1, null, null, n, !1, r, o)),
    (e[Ot] = t.current),
    wo(e.nodeType === 8 ? e.parentNode : e),
    new _c(t)
  );
};
Ye.findDOMNode = function (e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == "function"
      ? Error(R(188))
      : ((e = Object.keys(e).join(",")), Error(R(268, e)));
  return (e = Bf(t)), (e = e === null ? null : e.stateNode), e;
};
Ye.flushSync = function (e) {
  return On(e);
};
Ye.hydrate = function (e, t, n) {
  if (!ks(t)) throw Error(R(200));
  return Es(null, e, t, !0, n);
};
Ye.hydrateRoot = function (e, t, n) {
  if (!Ic(e)) throw Error(R(405));
  var r = (n != null && n.hydratedSources) || null,
    o = !1,
    l = "",
    s = wm;
  if (
    (n != null &&
      (n.unstable_strictMode === !0 && (o = !0),
      n.identifierPrefix !== void 0 && (l = n.identifierPrefix),
      n.onRecoverableError !== void 0 && (s = n.onRecoverableError)),
    (t = xm(t, null, e, 1, n ?? null, o, !1, l, s)),
    (e[Ot] = t.current),
    wo(e),
    r)
  )
    for (e = 0; e < r.length; e++)
      (n = r[e]),
        (o = n._getVersion),
        (o = o(n._source)),
        t.mutableSourceEagerHydrationData == null
          ? (t.mutableSourceEagerHydrationData = [n, o])
          : t.mutableSourceEagerHydrationData.push(n, o);
  return new Cs(t);
};
Ye.render = function (e, t, n) {
  if (!ks(t)) throw Error(R(200));
  return Es(null, e, t, !1, n);
};
Ye.unmountComponentAtNode = function (e) {
  if (!ks(e)) throw Error(R(40));
  return e._reactRootContainer
    ? (On(function () {
        Es(null, null, e, !1, function () {
          (e._reactRootContainer = null), (e[Ot] = null);
        });
      }),
      !0)
    : !1;
};
Ye.unstable_batchedUpdates = kc;
Ye.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
  if (!ks(n)) throw Error(R(200));
  if (e == null || e._reactInternals === void 0) throw Error(R(38));
  return Es(e, t, n, !1, r);
};
Ye.version = "18.3.1-next-f1338f8080-20240426";
function bm() {
  if (
    !(
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
    )
  )
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(bm);
    } catch (e) {
      console.error(e);
    }
}
bm(), (bf.exports = Ye);
var _r = bf.exports;
const Vx = af(_r);
var Sm,
  Nd = _r;
(Sm = Nd.createRoot), Nd.hydrateRoot;
function Cm(e) {
  var t,
    n,
    r = "";
  if (typeof e == "string" || typeof e == "number") r += e;
  else if (typeof e == "object")
    if (Array.isArray(e)) {
      var o = e.length;
      for (t = 0; t < o; t++)
        e[t] && (n = Cm(e[t])) && (r && (r += " "), (r += n));
    } else for (n in e) e[n] && (r && (r += " "), (r += n));
  return r;
}
function km() {
  for (var e, t, n = 0, r = "", o = arguments.length; n < o; n++)
    (e = arguments[n]) && (t = Cm(e)) && (r && (r += " "), (r += t));
  return r;
}
const jd = (e) => (typeof e == "boolean" ? `${e}` : e === 0 ? "0" : e),
  Rd = km,
  K = (e, t) => (n) => {
    var r;
    if ((t == null ? void 0 : t.variants) == null)
      return Rd(
        e,
        n == null ? void 0 : n.class,
        n == null ? void 0 : n.className
      );
    const { variants: o, defaultVariants: l } = t,
      s = Object.keys(o).map((c) => {
        const f = n == null ? void 0 : n[c],
          p = l == null ? void 0 : l[c];
        if (f === null) return null;
        const m = jd(f) || jd(p);
        return o[c][m];
      }),
      i =
        n &&
        Object.entries(n).reduce((c, f) => {
          let [p, m] = f;
          return m === void 0 || (c[p] = m), c;
        }, {}),
      a =
        t == null || (r = t.compoundVariants) === null || r === void 0
          ? void 0
          : r.reduce((c, f) => {
              let { class: p, className: m, ...x } = f;
              return Object.entries(x).every((w) => {
                let [v, b] = w;
                return Array.isArray(b)
                  ? b.includes({ ...l, ...i }[v])
                  : { ...l, ...i }[v] === b;
              })
                ? [...c, p, m]
                : c;
            }, []);
    return Rd(
      e,
      s,
      a,
      n == null ? void 0 : n.class,
      n == null ? void 0 : n.className
    );
  },
  Em = K(
    [
      "flex flex-col h-full bg-[var(--color-surface,#ffffff)]",
      "font-[var(--font-family-sans,'Poppins',system-ui,sans-serif)]",
    ],
    {
      variants: {
        size: { sm: "w-60", md: "w-72", lg: "w-80", xl: "w-96" },
        variant: {
          standalone: [
            "rounded-lg shadow-sm border border-[var(--color-border,#e5e7eb)]",
            "overflow-hidden",
          ],
          layout: ["border-r border-[var(--color-border,#e5e7eb)]"],
          borderless: [],
        },
        container: {
          true: [
            "rounded-lg shadow-sm border border-[var(--color-border,#e5e7eb)]",
            "overflow-hidden",
          ],
          false: "",
        },
      },
      defaultVariants: { size: "md", variant: "standalone", container: !1 },
    }
  ),
  Nm = K(["h-full overflow-hidden", "bg-[var(--color-surface,#ffffff)]"], {
    variants: {
      styled: {
        true: [
          "rounded-lg shadow-sm border border-[var(--color-border,#e5e7eb)]",
        ],
        false: "",
      },
      position: { standalone: "relative", embedded: "flex-shrink-0" },
    },
    defaultVariants: { styled: !0, position: "standalone" },
  }),
  jm = K(
    [
      "flex items-center gap-3 px-4 py-3 w-full text-left",
      "text-sm font-medium transition-colors duration-150",
      "rounded-md",
      "focus-visible:outline-none",
      "disabled:opacity-50 disabled:pointer-events-none",
    ],
    {
      variants: {
        active: {
          true: [
            "bg-[var(--color-navy-600,#1e40af)] text-[var(--color-white,#ffffff)] font-semibold",
            "hover:bg-[var(--color-navy-600,#1e40af)] hover:text-[var(--color-white,#ffffff)]",
            "focus-visible:bg-[var(--color-navy-600,#1e40af)] focus-visible:text-[var(--color-white,#ffffff)]",
            "focus-visible:border-b-[3px] focus-visible:border-b-orange-500",
            "focus-visible:rounded-b-none",
          ],
          false: [
            "text-[var(--color-text-body,#374151)]",
            "hover:bg-[var(--color-navy-200,#e0e7ff)] hover:text-[var(--color-navy-600,#1e40af)]",
            "focus-visible:bg-[var(--button-unified-focus-bg,var(--color-focus-500,#ff9900))]",
            "focus-visible:text-[var(--button-unified-focus-text,var(--color-navy-500,#0e3a6c))]",
            "focus-visible:border-b-[3px] focus-visible:border-b-blue-600",
            "focus-visible:rounded-b-none",
          ],
        },
        size: {
          sm: "px-3 py-2 text-xs rounded-md",
          md: "px-4 py-3 text-sm rounded-md",
          lg: "px-5 py-4 text-base rounded-md",
        },
      },
      defaultVariants: { active: !1, size: "md" },
    }
  ),
  Rm = K("w-full", { variants: {}, defaultVariants: {} }),
  Pm = K("border-0 bg-transparent", { variants: {}, defaultVariants: {} }),
  _m = K(
    [
      "flex w-full items-center justify-between px-4 py-3",
      "text-sm font-medium transition-colors duration-150",
      "rounded-md",
      "hover:bg-[var(--color-navy-100,#f1f5f9)] hover:text-[var(--color-navy-600,#1e40af)]",
      "data-[state=open]:bg-[var(--color-navy-200,#e0e7ff)] data-[state=open]:text-[var(--color-navy-700,#07203c)]",
      "focus-visible:outline-none",
      "focus-visible:bg-[var(--button-unified-focus-bg,var(--color-focus-500,#ff9900))] focus-visible:text-[var(--button-unified-focus-text,var(--color-navy-500,#0e3a6c))]",
      "focus-visible:border focus-visible:border-transparent focus-visible:border-b-[3px] focus-visible:border-b-[var(--button-unified-focus-border,var(--color-navy-500,#0e3a6c))]",
      "focus-visible:rounded-b-none",
      "text-[var(--color-text-heading,#111827)] group",
      "[&[data-state=open]>svg]:rotate-180",
    ],
    { variants: {}, defaultVariants: {} }
  ),
  Im = K(
    [
      "overflow-hidden transition-all duration-200",
      "data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down",
      "bg-[var(--color-navy-100,#f1f5f9)]",
    ],
    { variants: {}, defaultVariants: {} }
  ),
  Tm = K(["flex flex-col p-4", "bg-[var(--color-surface-subtle,#f8fafc)]"], {
    variants: {
      position: {
        top: "border-b border-[var(--color-border,#e5e7eb)]",
        middle: "border-b border-[var(--color-border,#e5e7eb)]",
        bottom: "border-t border-[var(--color-border,#e5e7eb)]",
      },
    },
    defaultVariants: { position: "middle" },
  }),
  Am = K(
    [
      "flex items-center gap-3 p-4 border-b border-[var(--color-border,#e5e7eb)]",
      "bg-[var(--color-surface,#ffffff)]",
    ],
    {
      variants: {
        clickable: {
          true: "cursor-pointer hover:bg-[var(--color-surface-subtle,#f8fafc)] transition-colors",
          false: "",
        },
      },
      defaultVariants: { clickable: !1 },
    }
  ),
  $x = K(
    [
      "inline-flex items-center justify-center p-2 rounded-md",
      "text-[var(--color-text-body,#374151)]",
      "hover:bg-[var(--color-surface-subtle,#f8fafc)] hover:text-[var(--color-text-heading,#111827)]",
      "focus:outline-none focus:ring-2 focus:ring-[var(--color-focus-500,#3b82f6)] focus:ring-offset-2",
      "transition-colors duration-150",
    ],
    {
      variants: { size: { sm: "p-1.5", md: "p-2", lg: "p-2.5" } },
      defaultVariants: { size: "md" },
    }
  ),
  Tc = K(
    [
      "inline-flex items-center justify-center min-w-[1.25rem] h-5",
      "text-xs font-medium rounded-full",
      "bg-[var(--color-cta,#a30134)] text-[var(--color-white,#ffffff)]",
    ],
    {
      variants: {
        variant: {
          default:
            "bg-[var(--color-cta,#a30134)] text-[var(--color-white,#ffffff)]",
          primary:
            "bg-[var(--color-primary-500,#3b82f6)] text-[var(--color-white,#ffffff)]",
          success:
            "bg-[var(--color-success-500,#10b981)] text-[var(--color-white,#ffffff)]",
          warning:
            "bg-[var(--color-warning-500,#f59e0b)] text-[var(--color-white,#ffffff)]",
        },
        size: {
          sm: "text-xs min-w-[1rem] h-4 px-1",
          md: "text-xs min-w-[1.25rem] h-5 px-1.5",
          lg: "text-sm min-w-[1.5rem] h-6 px-2",
        },
      },
      defaultVariants: { variant: "default", size: "md" },
    }
  ),
  Lm = (e = "md") => ({ sm: "w-4 h-4", md: "w-4 h-4", lg: "w-5 h-5" }[e]),
  Mm = (e, t, n) => {
    let r = e;
    return t && (r += ` (${t} items)`), n && (r += " - currently selected"), r;
  },
  Om = (e, t, n) => {
    let r = `${e} section, ${t ? "expanded" : "collapsed"}`;
    return n && (r += ` (${n} items)`), r;
  },
  Jl = (e, t) => t === e || t.startsWith(e + "/"),
  Sa = (e, t) => {
    const n = [];
    return (
      e != null &&
        e.sections &&
        e.sections.forEach((r) => {
          var o;
          (o = r.items) != null && o.some((l) => Jl(l.href, t)) && n.push(r.id);
        }),
      n
    );
  },
  Ac = "-",
  Bx = (e) => {
    const t = Ux(e),
      { conflictingClassGroups: n, conflictingClassGroupModifiers: r } = e;
    return {
      getClassGroupId: (s) => {
        const i = s.split(Ac);
        return i[0] === "" && i.length !== 1 && i.shift(), zm(i, t) || Wx(s);
      },
      getConflictingClassGroupIds: (s, i) => {
        const a = n[s] || [];
        return i && r[s] ? [...a, ...r[s]] : a;
      },
    };
  },
  zm = (e, t) => {
    var s;
    if (e.length === 0) return t.classGroupId;
    const n = e[0],
      r = t.nextPart.get(n),
      o = r ? zm(e.slice(1), r) : void 0;
    if (o) return o;
    if (t.validators.length === 0) return;
    const l = e.join(Ac);
    return (s = t.validators.find(({ validator: i }) => i(l))) == null
      ? void 0
      : s.classGroupId;
  },
  Pd = /^\[(.+)\]$/,
  Wx = (e) => {
    if (Pd.test(e)) {
      const t = Pd.exec(e)[1],
        n = t == null ? void 0 : t.substring(0, t.indexOf(":"));
      if (n) return "arbitrary.." + n;
    }
  },
  Ux = (e) => {
    const { theme: t, prefix: n } = e,
      r = { nextPart: new Map(), validators: [] };
    return (
      Gx(Object.entries(e.classGroups), n).forEach(([l, s]) => {
        Ca(s, r, l, t);
      }),
      r
    );
  },
  Ca = (e, t, n, r) => {
    e.forEach((o) => {
      if (typeof o == "string") {
        const l = o === "" ? t : _d(t, o);
        l.classGroupId = n;
        return;
      }
      if (typeof o == "function") {
        if (Hx(o)) {
          Ca(o(r), t, n, r);
          return;
        }
        t.validators.push({ validator: o, classGroupId: n });
        return;
      }
      Object.entries(o).forEach(([l, s]) => {
        Ca(s, _d(t, l), n, r);
      });
    });
  },
  _d = (e, t) => {
    let n = e;
    return (
      t.split(Ac).forEach((r) => {
        n.nextPart.has(r) ||
          n.nextPart.set(r, { nextPart: new Map(), validators: [] }),
          (n = n.nextPart.get(r));
      }),
      n
    );
  },
  Hx = (e) => e.isThemeGetter,
  Gx = (e, t) =>
    t
      ? e.map(([n, r]) => {
          const o = r.map((l) =>
            typeof l == "string"
              ? t + l
              : typeof l == "object"
              ? Object.fromEntries(
                  Object.entries(l).map(([s, i]) => [t + s, i])
                )
              : l
          );
          return [n, o];
        })
      : e,
  Kx = (e) => {
    if (e < 1) return { get: () => {}, set: () => {} };
    let t = 0,
      n = new Map(),
      r = new Map();
    const o = (l, s) => {
      n.set(l, s), t++, t > e && ((t = 0), (r = n), (n = new Map()));
    };
    return {
      get(l) {
        let s = n.get(l);
        if (s !== void 0) return s;
        if ((s = r.get(l)) !== void 0) return o(l, s), s;
      },
      set(l, s) {
        n.has(l) ? n.set(l, s) : o(l, s);
      },
    };
  },
  Dm = "!",
  Qx = (e) => {
    const { separator: t, experimentalParseClassName: n } = e,
      r = t.length === 1,
      o = t[0],
      l = t.length,
      s = (i) => {
        const a = [];
        let c = 0,
          f = 0,
          p;
        for (let b = 0; b < i.length; b++) {
          let h = i[b];
          if (c === 0) {
            if (h === o && (r || i.slice(b, b + l) === t)) {
              a.push(i.slice(f, b)), (f = b + l);
              continue;
            }
            if (h === "/") {
              p = b;
              continue;
            }
          }
          h === "[" ? c++ : h === "]" && c--;
        }
        const m = a.length === 0 ? i : i.substring(f),
          x = m.startsWith(Dm),
          w = x ? m.substring(1) : m,
          v = p && p > f ? p - f : void 0;
        return {
          modifiers: a,
          hasImportantModifier: x,
          baseClassName: w,
          maybePostfixModifierPosition: v,
        };
      };
    return n ? (i) => n({ className: i, parseClassName: s }) : s;
  },
  Yx = (e) => {
    if (e.length <= 1) return e;
    const t = [];
    let n = [];
    return (
      e.forEach((r) => {
        r[0] === "[" ? (t.push(...n.sort(), r), (n = [])) : n.push(r);
      }),
      t.push(...n.sort()),
      t
    );
  },
  Xx = (e) => ({ cache: Kx(e.cacheSize), parseClassName: Qx(e), ...Bx(e) }),
  Zx = /\s+/,
  qx = (e, t) => {
    const {
        parseClassName: n,
        getClassGroupId: r,
        getConflictingClassGroupIds: o,
      } = t,
      l = [],
      s = e.trim().split(Zx);
    let i = "";
    for (let a = s.length - 1; a >= 0; a -= 1) {
      const c = s[a],
        {
          modifiers: f,
          hasImportantModifier: p,
          baseClassName: m,
          maybePostfixModifierPosition: x,
        } = n(c);
      let w = !!x,
        v = r(w ? m.substring(0, x) : m);
      if (!v) {
        if (!w) {
          i = c + (i.length > 0 ? " " + i : i);
          continue;
        }
        if (((v = r(m)), !v)) {
          i = c + (i.length > 0 ? " " + i : i);
          continue;
        }
        w = !1;
      }
      const b = Yx(f).join(":"),
        h = p ? b + Dm : b,
        d = h + v;
      if (l.includes(d)) continue;
      l.push(d);
      const y = o(v, w);
      for (let S = 0; S < y.length; ++S) {
        const C = y[S];
        l.push(h + C);
      }
      i = c + (i.length > 0 ? " " + i : i);
    }
    return i;
  };
function Jx() {
  let e = 0,
    t,
    n,
    r = "";
  for (; e < arguments.length; )
    (t = arguments[e++]) && (n = Fm(t)) && (r && (r += " "), (r += n));
  return r;
}
const Fm = (e) => {
  if (typeof e == "string") return e;
  let t,
    n = "";
  for (let r = 0; r < e.length; r++)
    e[r] && (t = Fm(e[r])) && (n && (n += " "), (n += t));
  return n;
};
function e0(e, ...t) {
  let n,
    r,
    o,
    l = s;
  function s(a) {
    const c = t.reduce((f, p) => p(f), e());
    return (n = Xx(c)), (r = n.cache.get), (o = n.cache.set), (l = i), i(a);
  }
  function i(a) {
    const c = r(a);
    if (c) return c;
    const f = qx(a, n);
    return o(a, f), f;
  }
  return function () {
    return l(Jx.apply(null, arguments));
  };
}
const se = (e) => {
    const t = (n) => n[e] || [];
    return (t.isThemeGetter = !0), t;
  },
  Vm = /^\[(?:([a-z-]+):)?(.+)\]$/i,
  t0 = /^\d+\/\d+$/,
  n0 = new Set(["px", "full", "screen"]),
  r0 = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,
  o0 =
    /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,
  l0 = /^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/,
  s0 = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,
  i0 =
    /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/,
  Pt = (e) => hr(e) || n0.has(e) || t0.test(e),
  Ut = (e) => Ir(e, "length", h0),
  hr = (e) => !!e && !Number.isNaN(Number(e)),
  vi = (e) => Ir(e, "number", hr),
  Kr = (e) => !!e && Number.isInteger(Number(e)),
  a0 = (e) => e.endsWith("%") && hr(e.slice(0, -1)),
  U = (e) => Vm.test(e),
  Ht = (e) => r0.test(e),
  c0 = new Set(["length", "size", "percentage"]),
  u0 = (e) => Ir(e, c0, $m),
  d0 = (e) => Ir(e, "position", $m),
  f0 = new Set(["image", "url"]),
  p0 = (e) => Ir(e, f0, g0),
  m0 = (e) => Ir(e, "", v0),
  Qr = () => !0,
  Ir = (e, t, n) => {
    const r = Vm.exec(e);
    return r
      ? r[1]
        ? typeof t == "string"
          ? r[1] === t
          : t.has(r[1])
        : n(r[2])
      : !1;
  },
  h0 = (e) => o0.test(e) && !l0.test(e),
  $m = () => !1,
  v0 = (e) => s0.test(e),
  g0 = (e) => i0.test(e),
  y0 = () => {
    const e = se("colors"),
      t = se("spacing"),
      n = se("blur"),
      r = se("brightness"),
      o = se("borderColor"),
      l = se("borderRadius"),
      s = se("borderSpacing"),
      i = se("borderWidth"),
      a = se("contrast"),
      c = se("grayscale"),
      f = se("hueRotate"),
      p = se("invert"),
      m = se("gap"),
      x = se("gradientColorStops"),
      w = se("gradientColorStopPositions"),
      v = se("inset"),
      b = se("margin"),
      h = se("opacity"),
      d = se("padding"),
      y = se("saturate"),
      S = se("scale"),
      C = se("sepia"),
      E = se("skew"),
      k = se("space"),
      N = se("translate"),
      _ = () => ["auto", "contain", "none"],
      P = () => ["auto", "hidden", "clip", "visible", "scroll"],
      z = () => ["auto", U, t],
      L = () => [U, t],
      $ = () => ["", Pt, Ut],
      V = () => ["auto", hr, U],
      H = () => [
        "bottom",
        "center",
        "left",
        "left-bottom",
        "left-top",
        "right",
        "right-bottom",
        "right-top",
        "top",
      ],
      D = () => ["solid", "dashed", "dotted", "double", "none"],
      B = () => [
        "normal",
        "multiply",
        "screen",
        "overlay",
        "darken",
        "lighten",
        "color-dodge",
        "color-burn",
        "hard-light",
        "soft-light",
        "difference",
        "exclusion",
        "hue",
        "saturation",
        "color",
        "luminosity",
      ],
      j = () => [
        "start",
        "end",
        "center",
        "between",
        "around",
        "evenly",
        "stretch",
      ],
      I = () => ["", "0", U],
      O = () => [
        "auto",
        "avoid",
        "all",
        "avoid-page",
        "page",
        "left",
        "right",
        "column",
      ],
      A = () => [hr, U];
    return {
      cacheSize: 500,
      separator: ":",
      theme: {
        colors: [Qr],
        spacing: [Pt, Ut],
        blur: ["none", "", Ht, U],
        brightness: A(),
        borderColor: [e],
        borderRadius: ["none", "", "full", Ht, U],
        borderSpacing: L(),
        borderWidth: $(),
        contrast: A(),
        grayscale: I(),
        hueRotate: A(),
        invert: I(),
        gap: L(),
        gradientColorStops: [e],
        gradientColorStopPositions: [a0, Ut],
        inset: z(),
        margin: z(),
        opacity: A(),
        padding: L(),
        saturate: A(),
        scale: A(),
        sepia: I(),
        skew: A(),
        space: L(),
        translate: L(),
      },
      classGroups: {
        aspect: [{ aspect: ["auto", "square", "video", U] }],
        container: ["container"],
        columns: [{ columns: [Ht] }],
        "break-after": [{ "break-after": O() }],
        "break-before": [{ "break-before": O() }],
        "break-inside": [
          { "break-inside": ["auto", "avoid", "avoid-page", "avoid-column"] },
        ],
        "box-decoration": [{ "box-decoration": ["slice", "clone"] }],
        box: [{ box: ["border", "content"] }],
        display: [
          "block",
          "inline-block",
          "inline",
          "flex",
          "inline-flex",
          "table",
          "inline-table",
          "table-caption",
          "table-cell",
          "table-column",
          "table-column-group",
          "table-footer-group",
          "table-header-group",
          "table-row-group",
          "table-row",
          "flow-root",
          "grid",
          "inline-grid",
          "contents",
          "list-item",
          "hidden",
        ],
        float: [{ float: ["right", "left", "none", "start", "end"] }],
        clear: [{ clear: ["left", "right", "both", "none", "start", "end"] }],
        isolation: ["isolate", "isolation-auto"],
        "object-fit": [
          { object: ["contain", "cover", "fill", "none", "scale-down"] },
        ],
        "object-position": [{ object: [...H(), U] }],
        overflow: [{ overflow: P() }],
        "overflow-x": [{ "overflow-x": P() }],
        "overflow-y": [{ "overflow-y": P() }],
        overscroll: [{ overscroll: _() }],
        "overscroll-x": [{ "overscroll-x": _() }],
        "overscroll-y": [{ "overscroll-y": _() }],
        position: ["static", "fixed", "absolute", "relative", "sticky"],
        inset: [{ inset: [v] }],
        "inset-x": [{ "inset-x": [v] }],
        "inset-y": [{ "inset-y": [v] }],
        start: [{ start: [v] }],
        end: [{ end: [v] }],
        top: [{ top: [v] }],
        right: [{ right: [v] }],
        bottom: [{ bottom: [v] }],
        left: [{ left: [v] }],
        visibility: ["visible", "invisible", "collapse"],
        z: [{ z: ["auto", Kr, U] }],
        basis: [{ basis: z() }],
        "flex-direction": [
          { flex: ["row", "row-reverse", "col", "col-reverse"] },
        ],
        "flex-wrap": [{ flex: ["wrap", "wrap-reverse", "nowrap"] }],
        flex: [{ flex: ["1", "auto", "initial", "none", U] }],
        grow: [{ grow: I() }],
        shrink: [{ shrink: I() }],
        order: [{ order: ["first", "last", "none", Kr, U] }],
        "grid-cols": [{ "grid-cols": [Qr] }],
        "col-start-end": [{ col: ["auto", { span: ["full", Kr, U] }, U] }],
        "col-start": [{ "col-start": V() }],
        "col-end": [{ "col-end": V() }],
        "grid-rows": [{ "grid-rows": [Qr] }],
        "row-start-end": [{ row: ["auto", { span: [Kr, U] }, U] }],
        "row-start": [{ "row-start": V() }],
        "row-end": [{ "row-end": V() }],
        "grid-flow": [
          { "grid-flow": ["row", "col", "dense", "row-dense", "col-dense"] },
        ],
        "auto-cols": [{ "auto-cols": ["auto", "min", "max", "fr", U] }],
        "auto-rows": [{ "auto-rows": ["auto", "min", "max", "fr", U] }],
        gap: [{ gap: [m] }],
        "gap-x": [{ "gap-x": [m] }],
        "gap-y": [{ "gap-y": [m] }],
        "justify-content": [{ justify: ["normal", ...j()] }],
        "justify-items": [
          { "justify-items": ["start", "end", "center", "stretch"] },
        ],
        "justify-self": [
          { "justify-self": ["auto", "start", "end", "center", "stretch"] },
        ],
        "align-content": [{ content: ["normal", ...j(), "baseline"] }],
        "align-items": [
          { items: ["start", "end", "center", "baseline", "stretch"] },
        ],
        "align-self": [
          { self: ["auto", "start", "end", "center", "stretch", "baseline"] },
        ],
        "place-content": [{ "place-content": [...j(), "baseline"] }],
        "place-items": [
          { "place-items": ["start", "end", "center", "baseline", "stretch"] },
        ],
        "place-self": [
          { "place-self": ["auto", "start", "end", "center", "stretch"] },
        ],
        p: [{ p: [d] }],
        px: [{ px: [d] }],
        py: [{ py: [d] }],
        ps: [{ ps: [d] }],
        pe: [{ pe: [d] }],
        pt: [{ pt: [d] }],
        pr: [{ pr: [d] }],
        pb: [{ pb: [d] }],
        pl: [{ pl: [d] }],
        m: [{ m: [b] }],
        mx: [{ mx: [b] }],
        my: [{ my: [b] }],
        ms: [{ ms: [b] }],
        me: [{ me: [b] }],
        mt: [{ mt: [b] }],
        mr: [{ mr: [b] }],
        mb: [{ mb: [b] }],
        ml: [{ ml: [b] }],
        "space-x": [{ "space-x": [k] }],
        "space-x-reverse": ["space-x-reverse"],
        "space-y": [{ "space-y": [k] }],
        "space-y-reverse": ["space-y-reverse"],
        w: [{ w: ["auto", "min", "max", "fit", "svw", "lvw", "dvw", U, t] }],
        "min-w": [{ "min-w": [U, t, "min", "max", "fit"] }],
        "max-w": [
          {
            "max-w": [
              U,
              t,
              "none",
              "full",
              "min",
              "max",
              "fit",
              "prose",
              { screen: [Ht] },
              Ht,
            ],
          },
        ],
        h: [{ h: [U, t, "auto", "min", "max", "fit", "svh", "lvh", "dvh"] }],
        "min-h": [
          { "min-h": [U, t, "min", "max", "fit", "svh", "lvh", "dvh"] },
        ],
        "max-h": [
          { "max-h": [U, t, "min", "max", "fit", "svh", "lvh", "dvh"] },
        ],
        size: [{ size: [U, t, "auto", "min", "max", "fit"] }],
        "font-size": [{ text: ["base", Ht, Ut] }],
        "font-smoothing": ["antialiased", "subpixel-antialiased"],
        "font-style": ["italic", "not-italic"],
        "font-weight": [
          {
            font: [
              "thin",
              "extralight",
              "light",
              "normal",
              "medium",
              "semibold",
              "bold",
              "extrabold",
              "black",
              vi,
            ],
          },
        ],
        "font-family": [{ font: [Qr] }],
        "fvn-normal": ["normal-nums"],
        "fvn-ordinal": ["ordinal"],
        "fvn-slashed-zero": ["slashed-zero"],
        "fvn-figure": ["lining-nums", "oldstyle-nums"],
        "fvn-spacing": ["proportional-nums", "tabular-nums"],
        "fvn-fraction": ["diagonal-fractions", "stacked-fractions"],
        tracking: [
          {
            tracking: [
              "tighter",
              "tight",
              "normal",
              "wide",
              "wider",
              "widest",
              U,
            ],
          },
        ],
        "line-clamp": [{ "line-clamp": ["none", hr, vi] }],
        leading: [
          {
            leading: [
              "none",
              "tight",
              "snug",
              "normal",
              "relaxed",
              "loose",
              Pt,
              U,
            ],
          },
        ],
        "list-image": [{ "list-image": ["none", U] }],
        "list-style-type": [{ list: ["none", "disc", "decimal", U] }],
        "list-style-position": [{ list: ["inside", "outside"] }],
        "placeholder-color": [{ placeholder: [e] }],
        "placeholder-opacity": [{ "placeholder-opacity": [h] }],
        "text-alignment": [
          { text: ["left", "center", "right", "justify", "start", "end"] },
        ],
        "text-color": [{ text: [e] }],
        "text-opacity": [{ "text-opacity": [h] }],
        "text-decoration": [
          "underline",
          "overline",
          "line-through",
          "no-underline",
        ],
        "text-decoration-style": [{ decoration: [...D(), "wavy"] }],
        "text-decoration-thickness": [
          { decoration: ["auto", "from-font", Pt, Ut] },
        ],
        "underline-offset": [{ "underline-offset": ["auto", Pt, U] }],
        "text-decoration-color": [{ decoration: [e] }],
        "text-transform": [
          "uppercase",
          "lowercase",
          "capitalize",
          "normal-case",
        ],
        "text-overflow": ["truncate", "text-ellipsis", "text-clip"],
        "text-wrap": [{ text: ["wrap", "nowrap", "balance", "pretty"] }],
        indent: [{ indent: L() }],
        "vertical-align": [
          {
            align: [
              "baseline",
              "top",
              "middle",
              "bottom",
              "text-top",
              "text-bottom",
              "sub",
              "super",
              U,
            ],
          },
        ],
        whitespace: [
          {
            whitespace: [
              "normal",
              "nowrap",
              "pre",
              "pre-line",
              "pre-wrap",
              "break-spaces",
            ],
          },
        ],
        break: [{ break: ["normal", "words", "all", "keep"] }],
        hyphens: [{ hyphens: ["none", "manual", "auto"] }],
        content: [{ content: ["none", U] }],
        "bg-attachment": [{ bg: ["fixed", "local", "scroll"] }],
        "bg-clip": [{ "bg-clip": ["border", "padding", "content", "text"] }],
        "bg-opacity": [{ "bg-opacity": [h] }],
        "bg-origin": [{ "bg-origin": ["border", "padding", "content"] }],
        "bg-position": [{ bg: [...H(), d0] }],
        "bg-repeat": [
          { bg: ["no-repeat", { repeat: ["", "x", "y", "round", "space"] }] },
        ],
        "bg-size": [{ bg: ["auto", "cover", "contain", u0] }],
        "bg-image": [
          {
            bg: [
              "none",
              { "gradient-to": ["t", "tr", "r", "br", "b", "bl", "l", "tl"] },
              p0,
            ],
          },
        ],
        "bg-color": [{ bg: [e] }],
        "gradient-from-pos": [{ from: [w] }],
        "gradient-via-pos": [{ via: [w] }],
        "gradient-to-pos": [{ to: [w] }],
        "gradient-from": [{ from: [x] }],
        "gradient-via": [{ via: [x] }],
        "gradient-to": [{ to: [x] }],
        rounded: [{ rounded: [l] }],
        "rounded-s": [{ "rounded-s": [l] }],
        "rounded-e": [{ "rounded-e": [l] }],
        "rounded-t": [{ "rounded-t": [l] }],
        "rounded-r": [{ "rounded-r": [l] }],
        "rounded-b": [{ "rounded-b": [l] }],
        "rounded-l": [{ "rounded-l": [l] }],
        "rounded-ss": [{ "rounded-ss": [l] }],
        "rounded-se": [{ "rounded-se": [l] }],
        "rounded-ee": [{ "rounded-ee": [l] }],
        "rounded-es": [{ "rounded-es": [l] }],
        "rounded-tl": [{ "rounded-tl": [l] }],
        "rounded-tr": [{ "rounded-tr": [l] }],
        "rounded-br": [{ "rounded-br": [l] }],
        "rounded-bl": [{ "rounded-bl": [l] }],
        "border-w": [{ border: [i] }],
        "border-w-x": [{ "border-x": [i] }],
        "border-w-y": [{ "border-y": [i] }],
        "border-w-s": [{ "border-s": [i] }],
        "border-w-e": [{ "border-e": [i] }],
        "border-w-t": [{ "border-t": [i] }],
        "border-w-r": [{ "border-r": [i] }],
        "border-w-b": [{ "border-b": [i] }],
        "border-w-l": [{ "border-l": [i] }],
        "border-opacity": [{ "border-opacity": [h] }],
        "border-style": [{ border: [...D(), "hidden"] }],
        "divide-x": [{ "divide-x": [i] }],
        "divide-x-reverse": ["divide-x-reverse"],
        "divide-y": [{ "divide-y": [i] }],
        "divide-y-reverse": ["divide-y-reverse"],
        "divide-opacity": [{ "divide-opacity": [h] }],
        "divide-style": [{ divide: D() }],
        "border-color": [{ border: [o] }],
        "border-color-x": [{ "border-x": [o] }],
        "border-color-y": [{ "border-y": [o] }],
        "border-color-s": [{ "border-s": [o] }],
        "border-color-e": [{ "border-e": [o] }],
        "border-color-t": [{ "border-t": [o] }],
        "border-color-r": [{ "border-r": [o] }],
        "border-color-b": [{ "border-b": [o] }],
        "border-color-l": [{ "border-l": [o] }],
        "divide-color": [{ divide: [o] }],
        "outline-style": [{ outline: ["", ...D()] }],
        "outline-offset": [{ "outline-offset": [Pt, U] }],
        "outline-w": [{ outline: [Pt, Ut] }],
        "outline-color": [{ outline: [e] }],
        "ring-w": [{ ring: $() }],
        "ring-w-inset": ["ring-inset"],
        "ring-color": [{ ring: [e] }],
        "ring-opacity": [{ "ring-opacity": [h] }],
        "ring-offset-w": [{ "ring-offset": [Pt, Ut] }],
        "ring-offset-color": [{ "ring-offset": [e] }],
        shadow: [{ shadow: ["", "inner", "none", Ht, m0] }],
        "shadow-color": [{ shadow: [Qr] }],
        opacity: [{ opacity: [h] }],
        "mix-blend": [{ "mix-blend": [...B(), "plus-lighter", "plus-darker"] }],
        "bg-blend": [{ "bg-blend": B() }],
        filter: [{ filter: ["", "none"] }],
        blur: [{ blur: [n] }],
        brightness: [{ brightness: [r] }],
        contrast: [{ contrast: [a] }],
        "drop-shadow": [{ "drop-shadow": ["", "none", Ht, U] }],
        grayscale: [{ grayscale: [c] }],
        "hue-rotate": [{ "hue-rotate": [f] }],
        invert: [{ invert: [p] }],
        saturate: [{ saturate: [y] }],
        sepia: [{ sepia: [C] }],
        "backdrop-filter": [{ "backdrop-filter": ["", "none"] }],
        "backdrop-blur": [{ "backdrop-blur": [n] }],
        "backdrop-brightness": [{ "backdrop-brightness": [r] }],
        "backdrop-contrast": [{ "backdrop-contrast": [a] }],
        "backdrop-grayscale": [{ "backdrop-grayscale": [c] }],
        "backdrop-hue-rotate": [{ "backdrop-hue-rotate": [f] }],
        "backdrop-invert": [{ "backdrop-invert": [p] }],
        "backdrop-opacity": [{ "backdrop-opacity": [h] }],
        "backdrop-saturate": [{ "backdrop-saturate": [y] }],
        "backdrop-sepia": [{ "backdrop-sepia": [C] }],
        "border-collapse": [{ border: ["collapse", "separate"] }],
        "border-spacing": [{ "border-spacing": [s] }],
        "border-spacing-x": [{ "border-spacing-x": [s] }],
        "border-spacing-y": [{ "border-spacing-y": [s] }],
        "table-layout": [{ table: ["auto", "fixed"] }],
        caption: [{ caption: ["top", "bottom"] }],
        transition: [
          {
            transition: [
              "none",
              "all",
              "",
              "colors",
              "opacity",
              "shadow",
              "transform",
              U,
            ],
          },
        ],
        duration: [{ duration: A() }],
        ease: [{ ease: ["linear", "in", "out", "in-out", U] }],
        delay: [{ delay: A() }],
        animate: [{ animate: ["none", "spin", "ping", "pulse", "bounce", U] }],
        transform: [{ transform: ["", "gpu", "none"] }],
        scale: [{ scale: [S] }],
        "scale-x": [{ "scale-x": [S] }],
        "scale-y": [{ "scale-y": [S] }],
        rotate: [{ rotate: [Kr, U] }],
        "translate-x": [{ "translate-x": [N] }],
        "translate-y": [{ "translate-y": [N] }],
        "skew-x": [{ "skew-x": [E] }],
        "skew-y": [{ "skew-y": [E] }],
        "transform-origin": [
          {
            origin: [
              "center",
              "top",
              "top-right",
              "right",
              "bottom-right",
              "bottom",
              "bottom-left",
              "left",
              "top-left",
              U,
            ],
          },
        ],
        accent: [{ accent: ["auto", e] }],
        appearance: [{ appearance: ["none", "auto"] }],
        cursor: [
          {
            cursor: [
              "auto",
              "default",
              "pointer",
              "wait",
              "text",
              "move",
              "help",
              "not-allowed",
              "none",
              "context-menu",
              "progress",
              "cell",
              "crosshair",
              "vertical-text",
              "alias",
              "copy",
              "no-drop",
              "grab",
              "grabbing",
              "all-scroll",
              "col-resize",
              "row-resize",
              "n-resize",
              "e-resize",
              "s-resize",
              "w-resize",
              "ne-resize",
              "nw-resize",
              "se-resize",
              "sw-resize",
              "ew-resize",
              "ns-resize",
              "nesw-resize",
              "nwse-resize",
              "zoom-in",
              "zoom-out",
              U,
            ],
          },
        ],
        "caret-color": [{ caret: [e] }],
        "pointer-events": [{ "pointer-events": ["none", "auto"] }],
        resize: [{ resize: ["none", "y", "x", ""] }],
        "scroll-behavior": [{ scroll: ["auto", "smooth"] }],
        "scroll-m": [{ "scroll-m": L() }],
        "scroll-mx": [{ "scroll-mx": L() }],
        "scroll-my": [{ "scroll-my": L() }],
        "scroll-ms": [{ "scroll-ms": L() }],
        "scroll-me": [{ "scroll-me": L() }],
        "scroll-mt": [{ "scroll-mt": L() }],
        "scroll-mr": [{ "scroll-mr": L() }],
        "scroll-mb": [{ "scroll-mb": L() }],
        "scroll-ml": [{ "scroll-ml": L() }],
        "scroll-p": [{ "scroll-p": L() }],
        "scroll-px": [{ "scroll-px": L() }],
        "scroll-py": [{ "scroll-py": L() }],
        "scroll-ps": [{ "scroll-ps": L() }],
        "scroll-pe": [{ "scroll-pe": L() }],
        "scroll-pt": [{ "scroll-pt": L() }],
        "scroll-pr": [{ "scroll-pr": L() }],
        "scroll-pb": [{ "scroll-pb": L() }],
        "scroll-pl": [{ "scroll-pl": L() }],
        "snap-align": [{ snap: ["start", "end", "center", "align-none"] }],
        "snap-stop": [{ snap: ["normal", "always"] }],
        "snap-type": [{ snap: ["none", "x", "y", "both"] }],
        "snap-strictness": [{ snap: ["mandatory", "proximity"] }],
        touch: [{ touch: ["auto", "none", "manipulation"] }],
        "touch-x": [{ "touch-pan": ["x", "left", "right"] }],
        "touch-y": [{ "touch-pan": ["y", "up", "down"] }],
        "touch-pz": ["touch-pinch-zoom"],
        select: [{ select: ["none", "text", "all", "auto"] }],
        "will-change": [
          { "will-change": ["auto", "scroll", "contents", "transform", U] },
        ],
        fill: [{ fill: [e, "none"] }],
        "stroke-w": [{ stroke: [Pt, Ut, vi] }],
        stroke: [{ stroke: [e, "none"] }],
        sr: ["sr-only", "not-sr-only"],
        "forced-color-adjust": [{ "forced-color-adjust": ["auto", "none"] }],
      },
      conflictingClassGroups: {
        overflow: ["overflow-x", "overflow-y"],
        overscroll: ["overscroll-x", "overscroll-y"],
        inset: [
          "inset-x",
          "inset-y",
          "start",
          "end",
          "top",
          "right",
          "bottom",
          "left",
        ],
        "inset-x": ["right", "left"],
        "inset-y": ["top", "bottom"],
        flex: ["basis", "grow", "shrink"],
        gap: ["gap-x", "gap-y"],
        p: ["px", "py", "ps", "pe", "pt", "pr", "pb", "pl"],
        px: ["pr", "pl"],
        py: ["pt", "pb"],
        m: ["mx", "my", "ms", "me", "mt", "mr", "mb", "ml"],
        mx: ["mr", "ml"],
        my: ["mt", "mb"],
        size: ["w", "h"],
        "font-size": ["leading"],
        "fvn-normal": [
          "fvn-ordinal",
          "fvn-slashed-zero",
          "fvn-figure",
          "fvn-spacing",
          "fvn-fraction",
        ],
        "fvn-ordinal": ["fvn-normal"],
        "fvn-slashed-zero": ["fvn-normal"],
        "fvn-figure": ["fvn-normal"],
        "fvn-spacing": ["fvn-normal"],
        "fvn-fraction": ["fvn-normal"],
        "line-clamp": ["display", "overflow"],
        rounded: [
          "rounded-s",
          "rounded-e",
          "rounded-t",
          "rounded-r",
          "rounded-b",
          "rounded-l",
          "rounded-ss",
          "rounded-se",
          "rounded-ee",
          "rounded-es",
          "rounded-tl",
          "rounded-tr",
          "rounded-br",
          "rounded-bl",
        ],
        "rounded-s": ["rounded-ss", "rounded-es"],
        "rounded-e": ["rounded-se", "rounded-ee"],
        "rounded-t": ["rounded-tl", "rounded-tr"],
        "rounded-r": ["rounded-tr", "rounded-br"],
        "rounded-b": ["rounded-br", "rounded-bl"],
        "rounded-l": ["rounded-tl", "rounded-bl"],
        "border-spacing": ["border-spacing-x", "border-spacing-y"],
        "border-w": [
          "border-w-s",
          "border-w-e",
          "border-w-t",
          "border-w-r",
          "border-w-b",
          "border-w-l",
        ],
        "border-w-x": ["border-w-r", "border-w-l"],
        "border-w-y": ["border-w-t", "border-w-b"],
        "border-color": [
          "border-color-s",
          "border-color-e",
          "border-color-t",
          "border-color-r",
          "border-color-b",
          "border-color-l",
        ],
        "border-color-x": ["border-color-r", "border-color-l"],
        "border-color-y": ["border-color-t", "border-color-b"],
        "scroll-m": [
          "scroll-mx",
          "scroll-my",
          "scroll-ms",
          "scroll-me",
          "scroll-mt",
          "scroll-mr",
          "scroll-mb",
          "scroll-ml",
        ],
        "scroll-mx": ["scroll-mr", "scroll-ml"],
        "scroll-my": ["scroll-mt", "scroll-mb"],
        "scroll-p": [
          "scroll-px",
          "scroll-py",
          "scroll-ps",
          "scroll-pe",
          "scroll-pt",
          "scroll-pr",
          "scroll-pb",
          "scroll-pl",
        ],
        "scroll-px": ["scroll-pr", "scroll-pl"],
        "scroll-py": ["scroll-pt", "scroll-pb"],
        touch: ["touch-x", "touch-y", "touch-pz"],
        "touch-x": ["touch"],
        "touch-y": ["touch"],
        "touch-pz": ["touch"],
      },
      conflictingClassGroupModifiers: { "font-size": ["leading"] },
    };
  },
  x0 = e0(y0);
function T(...e) {
  return x0(km(e));
}
const Ns = W.forwardRef(
  (
    {
      className: e,
      size: t = "md",
      variant: n = "standalone",
      container: r = !1,
      asContainer: o = !1,
      collapsed: l = !1,
      onToggleCollapse: s,
      children: i,
      style: a,
      ...c
    },
    f
  ) => {
    const x = T(
      Em({ size: t, variant: o ? "borderless" : n, container: o ? !0 : r }),
      l && "w-16",
      e
    );
    return o
      ? u.jsx("div", {
          className: T(Nm({ styled: !0, position: "standalone" }), "w-64"),
          children: u.jsx("div", {
            ...c,
            ref: f,
            className: x,
            style: a,
            role: "navigation",
            "aria-label": "Main navigation",
            children: i,
          }),
        })
      : u.jsx("div", {
          ...c,
          ref: f,
          className: x,
          style: a,
          role: "navigation",
          "aria-label": "Main navigation",
          children: i,
        });
  }
);
Ns.displayName = "SidebarMenu";
const Lc = W.forwardRef(
  ({ className: e, open: t, onToggle: n, size: r = "md", ...o }, l) => {
    const s = () => {
      n(!t);
    };
    return u.jsx("button", {
      ...o,
      ref: l,
      onClick: s,
      className: T(
        "inline-flex items-center justify-center p-2 rounded-md",
        "text-[var(--color-text-body,#374151)]",
        "hover:bg-[var(--color-surface-subtle,#f8fafc)] hover:text-[var(--color-text-heading,#111827)]",
        "focus:outline-none focus:ring-2 focus:ring-[var(--color-focus-500,#3b82f6)] focus:ring-offset-2",
        "transition-colors duration-150",
        r === "sm" && "p-1.5",
        r === "lg" && "p-2.5",
        e
      ),
      "aria-label": t ? "Close navigation menu" : "Open navigation menu",
      "aria-expanded": t,
      children: u.jsx("svg", {
        className: "w-6 h-6",
        fill: "none",
        stroke: "currentColor",
        viewBox: "0 0 24 24",
        "aria-hidden": "true",
        children: t
          ? u.jsx("path", {
              strokeLinecap: "round",
              strokeLinejoin: "round",
              strokeWidth: 2,
              d: "M6 18L18 6M6 6l12 12",
            })
          : u.jsx("path", {
              strokeLinecap: "round",
              strokeLinejoin: "round",
              strokeWidth: 2,
              d: "M4 6h16M4 12h16M4 18h16",
            }),
      }),
    });
  }
);
Lc.displayName = "SidebarToggle";
const Te = W.forwardRef(
  (
    {
      className: e,
      icon: t,
      children: n,
      href: r,
      active: o = !1,
      size: l = "md",
      badge: s,
      disabled: i = !1,
      onNavigate: a,
      style: c,
      ...f
    },
    p
  ) => {
    const m = (d) => {
        var y;
        i ||
          (r && a && (d.preventDefault(), a(r)),
          (y = f.onClick) == null || y.call(f, d));
      },
      x = (d) => {
        var y;
        i ||
          ((d.key === "Enter" || d.key === " ") &&
            r &&
            a &&
            (d.preventDefault(), a(r)),
          (y = f.onKeyDown) == null || y.call(f, d));
      },
      w = Mm(typeof n == "string" ? n : "", s, o),
      v = u.jsxs(u.Fragment, {
        children: [
          t &&
            u.jsx(t, {
              className: T("flex-shrink-0", Lm(l || "md")),
              "aria-hidden": "true",
            }),
          u.jsx("span", { className: "truncate flex-1 min-w-0", children: n }),
          s &&
            u.jsx("span", {
              className: T(Tc({ size: l })),
              "aria-label": `${s} pending items`,
              children: s,
            }),
        ],
      }),
      b = { ...c },
      h = {
        className: T(jm({ active: o, size: l }), e),
        style: b,
        "aria-label": w,
        "aria-current": o ? "page" : void 0,
        disabled: i,
      };
    return r && !a
      ? u.jsx("a", { ref: p, href: r, ...h, ...f, children: v })
      : u.jsx("button", {
          ref: p,
          onClick: m,
          onKeyDown: x,
          ...h,
          ...f,
          children: v,
        });
  }
);
Te.displayName = "SidebarMenuItem";
function Bt(e, t = []) {
  let n = [];
  function r(l, s) {
    const i = g.createContext(s),
      a = n.length;
    n = [...n, s];
    const c = (p) => {
      var h;
      const { scope: m, children: x, ...w } = p,
        v = ((h = m == null ? void 0 : m[e]) == null ? void 0 : h[a]) || i,
        b = g.useMemo(() => w, Object.values(w));
      return u.jsx(v.Provider, { value: b, children: x });
    };
    c.displayName = l + "Provider";
    function f(p, m) {
      var v;
      const x = ((v = m == null ? void 0 : m[e]) == null ? void 0 : v[a]) || i,
        w = g.useContext(x);
      if (w) return w;
      if (s !== void 0) return s;
      throw new Error(`\`${p}\` must be used within \`${l}\``);
    }
    return [c, f];
  }
  const o = () => {
    const l = n.map((s) => g.createContext(s));
    return function (i) {
      const a = (i == null ? void 0 : i[e]) || l;
      return g.useMemo(() => ({ [`__scope${e}`]: { ...i, [e]: a } }), [i, a]);
    };
  };
  return (o.scopeName = e), [r, w0(o, ...t)];
}
function w0(...e) {
  const t = e[0];
  if (e.length === 1) return t;
  const n = () => {
    const r = e.map((o) => ({ useScope: o(), scopeName: o.scopeName }));
    return function (l) {
      const s = r.reduce((i, { useScope: a, scopeName: c }) => {
        const p = a(l)[`__scope${c}`];
        return { ...i, ...p };
      }, {});
      return g.useMemo(() => ({ [`__scope${t.scopeName}`]: s }), [s]);
    };
  };
  return (n.scopeName = t.scopeName), n;
}
function Id(e, t) {
  if (typeof e == "function") return e(t);
  e != null && (e.current = t);
}
function Bm(...e) {
  return (t) => {
    let n = !1;
    const r = e.map((o) => {
      const l = Id(o, t);
      return !n && typeof l == "function" && (n = !0), l;
    });
    if (n)
      return () => {
        for (let o = 0; o < r.length; o++) {
          const l = r[o];
          typeof l == "function" ? l() : Id(e[o], null);
        }
      };
  };
}
function oe(...e) {
  return g.useCallback(Bm(...e), e);
}
function Po(e) {
  const t = S0(e),
    n = g.forwardRef((r, o) => {
      const { children: l, ...s } = r,
        i = g.Children.toArray(l),
        a = i.find(k0);
      if (a) {
        const c = a.props.children,
          f = i.map((p) =>
            p === a
              ? g.Children.count(c) > 1
                ? g.Children.only(null)
                : g.isValidElement(c)
                ? c.props.children
                : null
              : p
          );
        return u.jsx(t, {
          ...s,
          ref: o,
          children: g.isValidElement(c) ? g.cloneElement(c, void 0, f) : null,
        });
      }
      return u.jsx(t, { ...s, ref: o, children: l });
    });
  return (n.displayName = `${e}.Slot`), n;
}
var b0 = Po("Slot");
function S0(e) {
  const t = g.forwardRef((n, r) => {
    const { children: o, ...l } = n;
    if (g.isValidElement(o)) {
      const s = N0(o),
        i = E0(l, o.props);
      return (
        o.type !== g.Fragment && (i.ref = r ? Bm(r, s) : s),
        g.cloneElement(o, i)
      );
    }
    return g.Children.count(o) > 1 ? g.Children.only(null) : null;
  });
  return (t.displayName = `${e}.SlotClone`), t;
}
var C0 = Symbol("radix.slottable");
function k0(e) {
  return (
    g.isValidElement(e) &&
    typeof e.type == "function" &&
    "__radixId" in e.type &&
    e.type.__radixId === C0
  );
}
function E0(e, t) {
  const n = { ...t };
  for (const r in t) {
    const o = e[r],
      l = t[r];
    /^on[A-Z]/.test(r)
      ? o && l
        ? (n[r] = (...i) => {
            const a = l(...i);
            return o(...i), a;
          })
        : o && (n[r] = o)
      : r === "style"
      ? (n[r] = { ...o, ...l })
      : r === "className" && (n[r] = [o, l].filter(Boolean).join(" "));
  }
  return { ...e, ...n };
}
function N0(e) {
  var r, o;
  let t =
      (r = Object.getOwnPropertyDescriptor(e.props, "ref")) == null
        ? void 0
        : r.get,
    n = t && "isReactWarning" in t && t.isReactWarning;
  return n
    ? e.ref
    : ((t =
        (o = Object.getOwnPropertyDescriptor(e, "ref")) == null
          ? void 0
          : o.get),
      (n = t && "isReactWarning" in t && t.isReactWarning),
      n ? e.props.ref : e.props.ref || e.ref);
}
function Mc(e) {
  const t = e + "CollectionProvider",
    [n, r] = Bt(t),
    [o, l] = n(t, { collectionRef: { current: null }, itemMap: new Map() }),
    s = (v) => {
      const { scope: b, children: h } = v,
        d = W.useRef(null),
        y = W.useRef(new Map()).current;
      return u.jsx(o, { scope: b, itemMap: y, collectionRef: d, children: h });
    };
  s.displayName = t;
  const i = e + "CollectionSlot",
    a = Po(i),
    c = W.forwardRef((v, b) => {
      const { scope: h, children: d } = v,
        y = l(i, h),
        S = oe(b, y.collectionRef);
      return u.jsx(a, { ref: S, children: d });
    });
  c.displayName = i;
  const f = e + "CollectionItemSlot",
    p = "data-radix-collection-item",
    m = Po(f),
    x = W.forwardRef((v, b) => {
      const { scope: h, children: d, ...y } = v,
        S = W.useRef(null),
        C = oe(b, S),
        E = l(f, h);
      return (
        W.useEffect(
          () => (
            E.itemMap.set(S, { ref: S, ...y }), () => void E.itemMap.delete(S)
          )
        ),
        u.jsx(m, { [p]: "", ref: C, children: d })
      );
    });
  x.displayName = f;
  function w(v) {
    const b = l(e + "CollectionConsumer", v);
    return W.useCallback(() => {
      const d = b.collectionRef.current;
      if (!d) return [];
      const y = Array.from(d.querySelectorAll(`[${p}]`));
      return Array.from(b.itemMap.values()).sort(
        (E, k) => y.indexOf(E.ref.current) - y.indexOf(k.ref.current)
      );
    }, [b.collectionRef, b.itemMap]);
  }
  return [{ Provider: s, Slot: c, ItemSlot: x }, w, r];
}
function X(e, t, { checkForDefaultPrevented: n = !0 } = {}) {
  return function (o) {
    if ((e == null || e(o), n === !1 || !o.defaultPrevented))
      return t == null ? void 0 : t(o);
  };
}
var ke =
    globalThis != null && globalThis.document ? g.useLayoutEffect : () => {},
  j0 = xf[" useInsertionEffect ".trim().toString()] || ke;
function dn({ prop: e, defaultProp: t, onChange: n = () => {}, caller: r }) {
  const [o, l, s] = R0({ defaultProp: t, onChange: n }),
    i = e !== void 0,
    a = i ? e : o;
  {
    const f = g.useRef(e !== void 0);
    g.useEffect(() => {
      const p = f.current;
      p !== i &&
        console.warn(
          `${r} is changing from ${p ? "controlled" : "uncontrolled"} to ${
            i ? "controlled" : "uncontrolled"
          }. Components should not switch from controlled to uncontrolled (or vice versa). Decide between using a controlled or uncontrolled value for the lifetime of the component.`
        ),
        (f.current = i);
    }, [i, r]);
  }
  const c = g.useCallback(
    (f) => {
      var p;
      if (i) {
        const m = P0(f) ? f(e) : f;
        m !== e && ((p = s.current) == null || p.call(s, m));
      } else l(f);
    },
    [i, e, l, s]
  );
  return [a, c];
}
function R0({ defaultProp: e, onChange: t }) {
  const [n, r] = g.useState(e),
    o = g.useRef(n),
    l = g.useRef(t);
  return (
    j0(() => {
      l.current = t;
    }, [t]),
    g.useEffect(() => {
      var s;
      o.current !== n &&
        ((s = l.current) == null || s.call(l, n), (o.current = n));
    }, [n, o]),
    [n, r, l]
  );
}
function P0(e) {
  return typeof e == "function";
}
var _0 = [
    "a",
    "button",
    "div",
    "form",
    "h2",
    "h3",
    "img",
    "input",
    "label",
    "li",
    "nav",
    "ol",
    "p",
    "select",
    "span",
    "svg",
    "ul",
  ],
  Q = _0.reduce((e, t) => {
    const n = Po(`Primitive.${t}`),
      r = g.forwardRef((o, l) => {
        const { asChild: s, ...i } = o,
          a = s ? n : t;
        return (
          typeof window < "u" && (window[Symbol.for("radix-ui")] = !0),
          u.jsx(a, { ...i, ref: l })
        );
      });
    return (r.displayName = `Primitive.${t}`), { ...e, [t]: r };
  }, {});
function I0(e, t) {
  e && _r.flushSync(() => e.dispatchEvent(t));
}
function T0(e, t) {
  return g.useReducer((n, r) => t[n][r] ?? n, e);
}
var js = (e) => {
  const { present: t, children: n } = e,
    r = A0(t),
    o =
      typeof n == "function" ? n({ present: r.isPresent }) : g.Children.only(n),
    l = oe(r.ref, L0(o));
  return typeof n == "function" || r.isPresent
    ? g.cloneElement(o, { ref: l })
    : null;
};
js.displayName = "Presence";
function A0(e) {
  const [t, n] = g.useState(),
    r = g.useRef(null),
    o = g.useRef(e),
    l = g.useRef("none"),
    s = e ? "mounted" : "unmounted",
    [i, a] = T0(s, {
      mounted: { UNMOUNT: "unmounted", ANIMATION_OUT: "unmountSuspended" },
      unmountSuspended: { MOUNT: "mounted", ANIMATION_END: "unmounted" },
      unmounted: { MOUNT: "mounted" },
    });
  return (
    g.useEffect(() => {
      const c = al(r.current);
      l.current = i === "mounted" ? c : "none";
    }, [i]),
    ke(() => {
      const c = r.current,
        f = o.current;
      if (f !== e) {
        const m = l.current,
          x = al(c);
        e
          ? a("MOUNT")
          : x === "none" || (c == null ? void 0 : c.display) === "none"
          ? a("UNMOUNT")
          : a(f && m !== x ? "ANIMATION_OUT" : "UNMOUNT"),
          (o.current = e);
      }
    }, [e, a]),
    ke(() => {
      if (t) {
        let c;
        const f = t.ownerDocument.defaultView ?? window,
          p = (x) => {
            const v = al(r.current).includes(x.animationName);
            if (x.target === t && v && (a("ANIMATION_END"), !o.current)) {
              const b = t.style.animationFillMode;
              (t.style.animationFillMode = "forwards"),
                (c = f.setTimeout(() => {
                  t.style.animationFillMode === "forwards" &&
                    (t.style.animationFillMode = b);
                }));
            }
          },
          m = (x) => {
            x.target === t && (l.current = al(r.current));
          };
        return (
          t.addEventListener("animationstart", m),
          t.addEventListener("animationcancel", p),
          t.addEventListener("animationend", p),
          () => {
            f.clearTimeout(c),
              t.removeEventListener("animationstart", m),
              t.removeEventListener("animationcancel", p),
              t.removeEventListener("animationend", p);
          }
        );
      } else a("ANIMATION_END");
    }, [t, a]),
    {
      isPresent: ["mounted", "unmountSuspended"].includes(i),
      ref: g.useCallback((c) => {
        (r.current = c ? getComputedStyle(c) : null), n(c);
      }, []),
    }
  );
}
function al(e) {
  return (e == null ? void 0 : e.animationName) || "none";
}
function L0(e) {
  var r, o;
  let t =
      (r = Object.getOwnPropertyDescriptor(e.props, "ref")) == null
        ? void 0
        : r.get,
    n = t && "isReactWarning" in t && t.isReactWarning;
  return n
    ? e.ref
    : ((t =
        (o = Object.getOwnPropertyDescriptor(e, "ref")) == null
          ? void 0
          : o.get),
      (n = t && "isReactWarning" in t && t.isReactWarning),
      n ? e.props.ref : e.props.ref || e.ref);
}
var M0 = xf[" useId ".trim().toString()] || (() => {}),
  O0 = 0;
function Tr(e) {
  const [t, n] = g.useState(M0());
  return (
    ke(() => {
      n((r) => r ?? String(O0++));
    }, [e]),
    t ? `radix-${t}` : ""
  );
}
var Rs = "Collapsible",
  [z0, Wm] = Bt(Rs),
  [D0, Oc] = z0(Rs),
  Um = g.forwardRef((e, t) => {
    const {
        __scopeCollapsible: n,
        open: r,
        defaultOpen: o,
        disabled: l,
        onOpenChange: s,
        ...i
      } = e,
      [a, c] = dn({ prop: r, defaultProp: o ?? !1, onChange: s, caller: Rs });
    return u.jsx(D0, {
      scope: n,
      disabled: l,
      contentId: Tr(),
      open: a,
      onOpenToggle: g.useCallback(() => c((f) => !f), [c]),
      children: u.jsx(Q.div, {
        "data-state": Dc(a),
        "data-disabled": l ? "" : void 0,
        ...i,
        ref: t,
      }),
    });
  });
Um.displayName = Rs;
var Hm = "CollapsibleTrigger",
  Gm = g.forwardRef((e, t) => {
    const { __scopeCollapsible: n, ...r } = e,
      o = Oc(Hm, n);
    return u.jsx(Q.button, {
      type: "button",
      "aria-controls": o.contentId,
      "aria-expanded": o.open || !1,
      "data-state": Dc(o.open),
      "data-disabled": o.disabled ? "" : void 0,
      disabled: o.disabled,
      ...r,
      ref: t,
      onClick: X(e.onClick, o.onOpenToggle),
    });
  });
Gm.displayName = Hm;
var zc = "CollapsibleContent",
  Km = g.forwardRef((e, t) => {
    const { forceMount: n, ...r } = e,
      o = Oc(zc, e.__scopeCollapsible);
    return u.jsx(js, {
      present: n || o.open,
      children: ({ present: l }) => u.jsx(F0, { ...r, ref: t, present: l }),
    });
  });
Km.displayName = zc;
var F0 = g.forwardRef((e, t) => {
  const { __scopeCollapsible: n, present: r, children: o, ...l } = e,
    s = Oc(zc, n),
    [i, a] = g.useState(r),
    c = g.useRef(null),
    f = oe(t, c),
    p = g.useRef(0),
    m = p.current,
    x = g.useRef(0),
    w = x.current,
    v = s.open || i,
    b = g.useRef(v),
    h = g.useRef(void 0);
  return (
    g.useEffect(() => {
      const d = requestAnimationFrame(() => (b.current = !1));
      return () => cancelAnimationFrame(d);
    }, []),
    ke(() => {
      const d = c.current;
      if (d) {
        (h.current = h.current || {
          transitionDuration: d.style.transitionDuration,
          animationName: d.style.animationName,
        }),
          (d.style.transitionDuration = "0s"),
          (d.style.animationName = "none");
        const y = d.getBoundingClientRect();
        (p.current = y.height),
          (x.current = y.width),
          b.current ||
            ((d.style.transitionDuration = h.current.transitionDuration),
            (d.style.animationName = h.current.animationName)),
          a(r);
      }
    }, [s.open, r]),
    u.jsx(Q.div, {
      "data-state": Dc(s.open),
      "data-disabled": s.disabled ? "" : void 0,
      id: s.contentId,
      hidden: !v,
      ...l,
      ref: f,
      style: {
        "--radix-collapsible-content-height": m ? `${m}px` : void 0,
        "--radix-collapsible-content-width": w ? `${w}px` : void 0,
        ...e.style,
      },
      children: v && o,
    })
  );
});
function Dc(e) {
  return e ? "open" : "closed";
}
var V0 = Um,
  $0 = Gm,
  B0 = Km,
  W0 = g.createContext(void 0);
function Ps(e) {
  const t = g.useContext(W0);
  return e || t || "ltr";
}
var ht = "Accordion",
  U0 = ["Home", "End", "ArrowDown", "ArrowUp", "ArrowLeft", "ArrowRight"],
  [Fc, H0, G0] = Mc(ht),
  [_s, LC] = Bt(ht, [G0, Wm]),
  Vc = Wm(),
  Qm = W.forwardRef((e, t) => {
    const { type: n, ...r } = e,
      o = r,
      l = r;
    return u.jsx(Fc.Provider, {
      scope: e.__scopeAccordion,
      children:
        n === "multiple"
          ? u.jsx(X0, { ...l, ref: t })
          : u.jsx(Y0, { ...o, ref: t }),
    });
  });
Qm.displayName = ht;
var [Ym, K0] = _s(ht),
  [Xm, Q0] = _s(ht, { collapsible: !1 }),
  Y0 = W.forwardRef((e, t) => {
    const {
        value: n,
        defaultValue: r,
        onValueChange: o = () => {},
        collapsible: l = !1,
        ...s
      } = e,
      [i, a] = dn({ prop: n, defaultProp: r ?? "", onChange: o, caller: ht });
    return u.jsx(Ym, {
      scope: e.__scopeAccordion,
      value: W.useMemo(() => (i ? [i] : []), [i]),
      onItemOpen: a,
      onItemClose: W.useCallback(() => l && a(""), [l, a]),
      children: u.jsx(Xm, {
        scope: e.__scopeAccordion,
        collapsible: l,
        children: u.jsx(Zm, { ...s, ref: t }),
      }),
    });
  }),
  X0 = W.forwardRef((e, t) => {
    const { value: n, defaultValue: r, onValueChange: o = () => {}, ...l } = e,
      [s, i] = dn({ prop: n, defaultProp: r ?? [], onChange: o, caller: ht }),
      a = W.useCallback((f) => i((p = []) => [...p, f]), [i]),
      c = W.useCallback((f) => i((p = []) => p.filter((m) => m !== f)), [i]);
    return u.jsx(Ym, {
      scope: e.__scopeAccordion,
      value: s,
      onItemOpen: a,
      onItemClose: c,
      children: u.jsx(Xm, {
        scope: e.__scopeAccordion,
        collapsible: !0,
        children: u.jsx(Zm, { ...l, ref: t }),
      }),
    });
  }),
  [Z0, Is] = _s(ht),
  Zm = W.forwardRef((e, t) => {
    const {
        __scopeAccordion: n,
        disabled: r,
        dir: o,
        orientation: l = "vertical",
        ...s
      } = e,
      i = W.useRef(null),
      a = oe(i, t),
      c = H0(n),
      p = Ps(o) === "ltr",
      m = X(e.onKeyDown, (x) => {
        var N;
        if (!U0.includes(x.key)) return;
        const w = x.target,
          v = c().filter((_) => {
            var P;
            return !((P = _.ref.current) != null && P.disabled);
          }),
          b = v.findIndex((_) => _.ref.current === w),
          h = v.length;
        if (b === -1) return;
        x.preventDefault();
        let d = b;
        const y = 0,
          S = h - 1,
          C = () => {
            (d = b + 1), d > S && (d = y);
          },
          E = () => {
            (d = b - 1), d < y && (d = S);
          };
        switch (x.key) {
          case "Home":
            d = y;
            break;
          case "End":
            d = S;
            break;
          case "ArrowRight":
            l === "horizontal" && (p ? C() : E());
            break;
          case "ArrowDown":
            l === "vertical" && C();
            break;
          case "ArrowLeft":
            l === "horizontal" && (p ? E() : C());
            break;
          case "ArrowUp":
            l === "vertical" && E();
            break;
        }
        const k = d % h;
        (N = v[k].ref.current) == null || N.focus();
      });
    return u.jsx(Z0, {
      scope: n,
      disabled: r,
      direction: o,
      orientation: l,
      children: u.jsx(Fc.Slot, {
        scope: n,
        children: u.jsx(Q.div, {
          ...s,
          "data-orientation": l,
          ref: a,
          onKeyDown: r ? void 0 : m,
        }),
      }),
    });
  }),
  es = "AccordionItem",
  [q0, $c] = _s(es),
  qm = W.forwardRef((e, t) => {
    const { __scopeAccordion: n, value: r, ...o } = e,
      l = Is(es, n),
      s = K0(es, n),
      i = Vc(n),
      a = Tr(),
      c = (r && s.value.includes(r)) || !1,
      f = l.disabled || e.disabled;
    return u.jsx(q0, {
      scope: n,
      open: c,
      disabled: f,
      triggerId: a,
      children: u.jsx(V0, {
        "data-orientation": l.orientation,
        "data-state": oh(c),
        ...i,
        ...o,
        ref: t,
        disabled: f,
        open: c,
        onOpenChange: (p) => {
          p ? s.onItemOpen(r) : s.onItemClose(r);
        },
      }),
    });
  });
qm.displayName = es;
var Jm = "AccordionHeader",
  eh = W.forwardRef((e, t) => {
    const { __scopeAccordion: n, ...r } = e,
      o = Is(ht, n),
      l = $c(Jm, n);
    return u.jsx(Q.h3, {
      "data-orientation": o.orientation,
      "data-state": oh(l.open),
      "data-disabled": l.disabled ? "" : void 0,
      ...r,
      ref: t,
    });
  });
eh.displayName = Jm;
var ka = "AccordionTrigger",
  th = W.forwardRef((e, t) => {
    const { __scopeAccordion: n, ...r } = e,
      o = Is(ht, n),
      l = $c(ka, n),
      s = Q0(ka, n),
      i = Vc(n);
    return u.jsx(Fc.ItemSlot, {
      scope: n,
      children: u.jsx($0, {
        "aria-disabled": (l.open && !s.collapsible) || void 0,
        "data-orientation": o.orientation,
        id: l.triggerId,
        ...i,
        ...r,
        ref: t,
      }),
    });
  });
th.displayName = ka;
var nh = "AccordionContent",
  rh = W.forwardRef((e, t) => {
    const { __scopeAccordion: n, ...r } = e,
      o = Is(ht, n),
      l = $c(nh, n),
      s = Vc(n);
    return u.jsx(B0, {
      role: "region",
      "aria-labelledby": l.triggerId,
      "data-orientation": o.orientation,
      ...s,
      ...r,
      ref: t,
      style: {
        "--radix-accordion-content-height":
          "var(--radix-collapsible-content-height)",
        "--radix-accordion-content-width":
          "var(--radix-collapsible-content-width)",
        ...e.style,
      },
    });
  });
rh.displayName = nh;
function oh(e) {
  return e ? "open" : "closed";
}
var J0 = Qm,
  ew = qm,
  tw = eh,
  nw = th,
  rw = rh;
/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var ow = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
};
/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const lw = (e) =>
    e
      .replace(/([a-z0-9])([A-Z])/g, "$1-$2")
      .toLowerCase()
      .trim(),
  Bn = (e, t) => {
    const n = g.forwardRef(
      (
        {
          color: r = "currentColor",
          size: o = 24,
          strokeWidth: l = 2,
          absoluteStrokeWidth: s,
          className: i = "",
          children: a,
          ...c
        },
        f
      ) =>
        g.createElement(
          "svg",
          {
            ref: f,
            ...ow,
            width: o,
            height: o,
            stroke: r,
            strokeWidth: s ? (Number(l) * 24) / Number(o) : l,
            className: ["lucide", `lucide-${lw(e)}`, i].join(" "),
            ...c,
          },
          [
            ...t.map(([p, m]) => g.createElement(p, m)),
            ...(Array.isArray(a) ? a : [a]),
          ]
        )
    );
    return (n.displayName = `${e}`), n;
  };
/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const sw = Bn("ArrowUpDown", [
  ["path", { d: "m21 16-4 4-4-4", key: "f6ql7i" }],
  ["path", { d: "M17 20V4", key: "1ejh1v" }],
  ["path", { d: "m3 8 4-4 4 4", key: "11wl7u" }],
  ["path", { d: "M7 4v16", key: "1glfcx" }],
]);
/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const iw = Bn("Building2", [
  ["path", { d: "M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z", key: "1b4qmf" }],
  ["path", { d: "M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2", key: "i71pzd" }],
  ["path", { d: "M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2", key: "10jefs" }],
  ["path", { d: "M10 6h4", key: "1itunk" }],
  ["path", { d: "M10 10h4", key: "tcdvrf" }],
  ["path", { d: "M10 14h4", key: "kelpxr" }],
  ["path", { d: "M10 18h4", key: "1ulq68" }],
]);
/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const lh = Bn("Check", [["path", { d: "M20 6 9 17l-5-5", key: "1gmf2c" }]]);
/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Bc = Bn("ChevronDown", [
  ["path", { d: "m6 9 6 6 6-6", key: "qrunsl" }],
]);
/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const aw = Bn("ChevronUp", [
  ["path", { d: "m18 15-6-6-6 6", key: "153udz" }],
]);
/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const cw = Bn("Minus", [["path", { d: "M5 12h14", key: "1ays0h" }]]);
/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const uw = Bn("User", [
    ["path", { d: "M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2", key: "975kel" }],
    ["circle", { cx: "12", cy: "7", r: "4", key: "17ys0d" }],
  ]),
  Wc = W.forwardRef(
    ({ className: e, children: t, value: n, onValueChange: r, ...o }, l) =>
      u.jsx(J0, {
        ref: l,
        className: T(Rm(), e),
        type: "multiple",
        value: n,
        onValueChange: r,
        ...o,
        children: t,
      })
  );
Wc.displayName = "SidebarMenuSectionRoot";
const uo = W.forwardRef(
  (
    {
      title: e,
      icon: t,
      children: n,
      value: r,
      className: o,
      expanded: l = !1,
      onToggle: s,
      badge: i,
      ...a
    },
    c
  ) => {
    const f = r || e.toLowerCase().replace(/\s+/g, "-"),
      p = () => Om(e, l, i);
    return u.jsxs(ew, {
      ref: c,
      className: T(Pm(), o),
      value: f,
      ...a,
      children: [
        u.jsx(tw, {
          children: u.jsxs(nw, {
            className: T(_m()),
            onClick: () => (s == null ? void 0 : s(!l)),
            "aria-label": p(),
            "aria-expanded": l,
            children: [
              u.jsxs("div", {
                className: "flex items-center gap-3 flex-1 min-w-0",
                children: [
                  t &&
                    u.jsx(t, {
                      className: "w-4 h-4 flex-shrink-0",
                      "aria-hidden": "true",
                    }),
                  u.jsx("span", {
                    className: "truncate font-semibold",
                    children: e,
                  }),
                  i &&
                    u.jsx("span", {
                      className: T(Tc()),
                      "aria-label": `${i} items in ${e} section`,
                      children: i,
                    }),
                ],
              }),
              u.jsx(Bc, {
                className:
                  "h-4 w-4 shrink-0 transition-transform duration-200 group-data-[state=open]:rotate-180",
                "aria-hidden": "true",
              }),
            ],
          }),
        }),
        u.jsx(rw, {
          className: T(Im()),
          role: "region",
          "aria-labelledby": `section-${f}`,
          children: u.jsx("div", { className: "pt-1 pb-3 px-2", children: n }),
        }),
      ],
    });
  }
);
uo.displayName = "SidebarMenuSection";
const sh = K(
    "inline-flex items-center justify-center whitespace-nowrap transition-all duration-150 focus-visible:outline-none disabled:pointer-events-none",
    {
      variants: {
        variant: {
          primary: "",
          outline: "",
          cta: "",
          success: "",
          warning: "",
          destructive: "",
          ghost: "",
        },
        size: { sm: "", md: "", lg: "", xl: "" },
      },
      defaultVariants: { variant: "primary", size: "md" },
    }
  ),
  dw = (e, t, n = !1) => {
    const r = {
        fontFamily: "var(--font-family-sans, 'Poppins', system-ui, sans-serif)",
        fontWeight: "var(--button-font-weight, 500)",
        borderRadius: "var(--button-border-radius, var(--radius-sm, 6px))",
        borderWidth: "var(--button-border-width, 1px)",
        borderStyle: "solid",
        cursor: n ? "not-allowed" : "pointer",
        transition: "var(--button-transition, all 150ms ease-in-out)",
      },
      o = {
        sm: {
          height: "var(--button-height-sm, 32px)",
          paddingLeft: "var(--button-padding-x-sm, 12px)",
          paddingRight: "var(--button-padding-x-sm, 12px)",
          fontSize: "var(--button-font-size-sm, 12px)",
        },
        md: {
          height: "var(--button-height-md, 40px)",
          paddingLeft: "var(--button-padding-x-md, 16px)",
          paddingRight: "var(--button-padding-x-md, 16px)",
          fontSize: "var(--button-font-size-md, 14px)",
        },
        lg: {
          height: "var(--button-height-lg, 48px)",
          paddingLeft: "var(--button-padding-x-lg, 20px)",
          paddingRight: "var(--button-padding-x-lg, 20px)",
          fontSize: "var(--button-font-size-lg, 16px)",
        },
        xl: {
          height: "var(--button-height-xl, 56px)",
          paddingLeft: "var(--button-padding-x-xl, 24px)",
          paddingRight: "var(--button-padding-x-xl, 24px)",
          fontSize: "var(--button-font-size-xl, 18px)",
        },
      },
      l = {
        primary: n
          ? {
              backgroundColor:
                "var(--button-primary-bg-disabled, var(--color-navy-200, #d1d9e6))",
              color:
                "var(--button-primary-text-disabled, var(--color-navy-400, #7a8699))",
              borderColor:
                "var(--button-primary-border-disabled, var(--color-navy-200, #d1d9e6))",
            }
          : {
              backgroundColor:
                "var(--button-primary-bg, var(--color-navy-500, #0e3a6c))",
              color: "var(--button-primary-text, var(--color-white, #ffffff))",
              borderColor: "var(--button-primary-border, transparent)",
            },
        outline: n
          ? {
              backgroundColor:
                "var(--button-outline-bg-disabled, var(--color-navy-50, #f8f9fb))",
              color:
                "var(--button-outline-text-disabled, var(--color-navy-300, #a8b3c5))",
              borderColor:
                "var(--button-outline-border-disabled, var(--color-navy-200, #d1d9e6))",
            }
          : {
              backgroundColor: "var(--button-outline-bg, transparent)",
              color:
                "var(--button-outline-text, var(--color-navy-500, #0e3a6c))",
              borderColor:
                "var(--button-outline-border, var(--color-navy-500, #0e3a6c))",
            },
        cta: n
          ? {
              backgroundColor:
                "var(--button-cta-bg-disabled, var(--color-red-200, #fecaca))",
              color:
                "var(--button-cta-text-disabled, var(--color-red-400, #f87171))",
              borderColor:
                "var(--button-cta-border-disabled, var(--color-red-200, #fecaca))",
            }
          : {
              backgroundColor:
                "var(--button-cta-bg, var(--color-red-500, #dc2626))",
              color: "var(--button-cta-text, var(--color-white, #ffffff))",
              borderColor: "var(--button-cta-border, transparent)",
            },
        success: n
          ? {
              backgroundColor:
                "var(--button-success-bg-disabled, var(--color-success-200, #a7f3d0))",
              color:
                "var(--button-success-text-disabled, var(--color-success-400, #4ade80))",
              borderColor:
                "var(--button-success-border-disabled, var(--color-success-200, #a7f3d0))",
            }
          : {
              backgroundColor:
                "var(--button-success-bg, var(--color-success-500, #059669))",
              color: "var(--button-success-text, var(--color-white, #ffffff))",
              borderColor: "var(--button-success-border, transparent)",
            },
        warning: n
          ? {
              backgroundColor:
                "var(--button-warning-bg-disabled, var(--color-warning-200, #fed7aa))",
              color:
                "var(--button-warning-text-disabled, var(--color-warning-400, #fb923c))",
              borderColor:
                "var(--button-warning-border-disabled, var(--color-warning-200, #fed7aa))",
            }
          : {
              backgroundColor:
                "var(--button-warning-bg, var(--color-warning-500, #d97706))",
              color: "var(--button-warning-text, var(--color-white, #ffffff))",
              borderColor: "var(--button-warning-border, transparent)",
            },
        destructive: n
          ? {
              backgroundColor:
                "var(--button-destructive-bg-disabled, var(--color-destructive-200, #fecaca))",
              color:
                "var(--button-destructive-text-disabled, var(--color-destructive-400, #f87171))",
              borderColor:
                "var(--button-destructive-border-disabled, var(--color-destructive-200, #fecaca))",
            }
          : {
              backgroundColor:
                "var(--button-destructive-bg, var(--color-destructive-500, #dc2626))",
              color:
                "var(--button-destructive-text, var(--color-white, #ffffff))",
              borderColor: "var(--button-destructive-border, transparent)",
            },
        ghost: n
          ? {
              backgroundColor: "var(--button-ghost-bg-disabled, transparent)",
              color:
                "var(--button-ghost-text-disabled, var(--color-navy-300, #a8b3c5))",
              borderColor: "var(--button-ghost-border-disabled, transparent)",
            }
          : {
              backgroundColor: "var(--button-ghost-bg, transparent)",
              color: "var(--button-ghost-text, var(--color-navy-500, #0e3a6c))",
              borderColor: "var(--button-ghost-border, transparent)",
            },
      };
    return { ...r, ...o[t], ...l[e] };
  },
  fw = () => {
    if (document.getElementById("button-interactive-styles")) return;
    const e = document.createElement("style");
    (e.id = "button-interactive-styles"),
      (e.textContent = `
    /* 🎯 HOVER STATES - Only for enabled buttons */
    .design-system-button[data-variant="primary"]:hover:not(:disabled) {
      background-color: var(--button-primary-bg-hover, var(--color-navy-600, #0a2d54)) !important;
      border-color: var(--button-primary-border-hover, var(--color-navy-600, #0a2d54)) !important;
    }
    
    .design-system-button[data-variant="outline"] {
      border-width: var(--border-md, 2px) !important;
    }
    
    .design-system-button[data-variant="outline"]:hover:not(:disabled) {
      background-color: var(--button-outline-bg-hover, var(--color-navy-100, #f0f3f7)) !important;
      color: var(--button-outline-text-hover, var(--color-navy-500, #0e3a6c)) !important;
      border-color: var(--button-outline-border-hover, var(--color-navy-500, #0e3a6c)) !important;
    }
    
    .design-system-button[data-variant="cta"]:hover:not(:disabled) {
      background-color: var(--button-cta-bg-hover, var(--color-red-600, #b91c1c)) !important;
      border-color: var(--button-cta-border-hover, var(--color-red-600, #b91c1c)) !important;
    }
    
    .design-system-button[data-variant="success"]:hover:not(:disabled) {
      background-color: var(--button-success-bg-hover, var(--color-success-600, #006064)) !important;
      border-color: var(--button-success-border-hover, var(--color-success-600, #006064)) !important;
    }
    
    .design-system-button[data-variant="warning"]:hover:not(:disabled) {
      background-color: var(--button-warning-bg-hover, var(--color-warning-600, #a04d00)) !important;
      border-color: var(--button-warning-border-hover, var(--color-warning-600, #a04d00)) !important;
    }
    
    .design-system-button[data-variant="destructive"]:hover:not(:disabled) {
      background-color: var(--button-destructive-bg-hover, var(--color-destructive-600, #c42323)) !important;
      border-color: var(--button-destructive-border-hover, var(--color-destructive-600, #c42323)) !important;
    }
    
    .design-system-button[data-variant="outline" appearance="ghost"]:hover:not(:disabled) {
      background-color: var(--button-ghost-bg-hover, var(--color-navy-100, #f0f3f7)) !important;
    }
    
    /* 🎯 DISABLED STATE - Ensure cursor stays not-allowed */
    .design-system-button:disabled {
      cursor: not-allowed !important;
      pointer-events: auto !important; /* Allow cursor change on hover */
    }
    
    /* 🎯 UNIFIED FOCUS STYLES - Only for keyboard navigation */
    .design-system-button:focus-visible {
      /* Remove default outline */
      outline: none !important;
      
      /* Orange background with navy text - unified across all variants */
      background-color: var(--button-unified-focus-bg, var(--color-focus-500, #ff9900)) !important;
      color: var(--button-unified-focus-text, var(--color-navy-500, #0e3a6c)) !important;
      
      /* Clear all borders first, then apply thick navy bottom border */
      border: 1px solid transparent !important;
      border-bottom: var(--button-unified-focus-border-width, 3px) solid var(--button-unified-focus-border, var(--color-navy-500, #0e3a6c)) !important;
      
      /* Flat bottom edge */
      border-bottom-left-radius: 0 !important;
      border-bottom-right-radius: 0 !important;
    }
    
    /* 🎯 FOCUS + HOVER COMBINATION - Preserve focus accessibility with lighter orange */
    .design-system-button:focus-visible:hover:not(:disabled) {
      /* Remove default outline */
      outline: none !important;
      
      /* Lighter orange background with navy text - focus/400 */
      background-color: var(--button-unified-focus-hover-bg, var(--color-focus-400, #ffab33)) !important;
      color: var(--button-unified-focus-text, var(--color-navy-500, #0e3a6c)) !important;
      
      /* Clear all borders first, then apply thick navy bottom border */
      border: 1px solid transparent !important;
      border-bottom: var(--button-unified-focus-border-width, 3px) solid var(--button-unified-focus-border, var(--color-navy-500, #0e3a6c)) !important;
      
      /* Flat bottom edge */
      border-bottom-left-radius: 0 !important;
      border-bottom-right-radius: 0 !important;
    }
    
    /* 🎯 ACTIVE/PRESS STATES - Animation only, no color changes */
    .design-system-button:active:not(:disabled) {
      transform: translateY(1px) !important;
    }
  `),
      document.head.appendChild(e);
  },
  pw = () =>
    u.jsxs("svg", {
      width: "16",
      height: "16",
      viewBox: "0 0 24 24",
      fill: "none",
      className: "animate-spin",
      children: [
        u.jsx("circle", {
          cx: "12",
          cy: "12",
          r: "10",
          stroke: "currentColor",
          strokeWidth: "4",
          className: "opacity-25",
        }),
        u.jsx("path", {
          fill: "currentColor",
          d: "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z",
          className: "opacity-75",
        }),
      ],
    }),
  De = g.forwardRef(
    (
      {
        className: e,
        variant: t,
        size: n,
        asChild: r = !1,
        loading: o = !1,
        leftIcon: l,
        rightIcon: s,
        children: i,
        disabled: a,
        style: c,
        ...f
      },
      p
    ) => {
      const m = r ? b0 : "button",
        x = a || o;
      g.useEffect(() => {
        fw();
      }, []);
      const w = !i && (l || s),
        v = dw(t || "primary", n || "md", x),
        b = { sm: "8px", md: "12px", lg: "16px", xl: "20px" },
        h = {
          ...v,
          ...(w && {
            paddingLeft: b[n || "md"],
            paddingRight: b[n || "md"],
            aspectRatio: "1",
            minWidth: "auto",
          }),
          ...c,
        };
      return u.jsxs(m, {
        className: T(sh({ variant: t, size: n }), "design-system-button", e),
        style: h,
        "data-variant": t,
        "data-size": n,
        "data-icon-only": w ? "true" : void 0,
        ref: p,
        disabled: x,
        ...f,
        children: [
          o && u.jsx("span", { className: "mr-2", children: u.jsx(pw, {}) }),
          !o &&
            l &&
            u.jsx("span", {
              className: T(
                "inline-flex items-center justify-center",
                !w && "mr-2"
              ),
              children: l,
            }),
          i,
          !o &&
            s &&
            u.jsx("span", {
              className: T(
                "inline-flex items-center justify-center",
                !w && "ml-2"
              ),
              children: s,
            }),
        ],
      });
    }
  );
De.displayName = "Button";
const _o = W.forwardRef(
  (
    { className: e, user: t, onSwitchEntity: n, position: r = "middle", ...o },
    l
  ) =>
    u.jsxs("div", {
      ref: l,
      className: T(Tm({ position: r }), e),
      ...o,
      children: [
        u.jsxs("div", {
          className: "flex items-start gap-3 mb-3",
          children: [
            u.jsx("div", {
              className: "flex-shrink-0 mt-1",
              children: u.jsx("div", {
                className:
                  "w-8 h-8 rounded-full bg-[var(--color-primary,#1e40af)] flex items-center justify-center",
                children: u.jsx(uw, {
                  className: "w-4 h-4 text-[var(--color-white,#ffffff)]",
                }),
              }),
            }),
            u.jsxs("div", {
              className: "flex-1 min-w-0",
              children: [
                u.jsx("h3", {
                  className:
                    "text-sm font-semibold text-[var(--color-text-heading,#111827)] truncate",
                  children: t.entity.name,
                }),
                u.jsx("p", {
                  className:
                    "text-sm text-[var(--color-text-body,#374151)] truncate",
                  children: t.contact.name,
                }),
                u.jsx("p", {
                  className:
                    "text-xs text-[var(--color-text-muted,#6b7280)] truncate",
                  children: t.contact.role,
                }),
              ],
            }),
          ],
        }),
        n &&
          u.jsx(De, {
            variant: "ghost",
            size: "sm",
            onClick: n,
            leftIcon: u.jsx(sw, { className: "w-4 h-4" }),
            className:
              "justify-start text-[var(--color-text-link,#2563eb)] hover:text-[var(--color-text-link-hover,#1d4ed8)]",
            children: "Switch Entity",
          }),
      ],
    })
);
_o.displayName = "SidebarProfile";
const lt = {
    base: {
      justifyContent: "center",
      transition: "var(--transition-base, all 200ms ease-in-out)",
    },
    clickable: { outline: "none" },
    logoImage: { maxWidth: "100%", height: "auto", objectFit: "contain" },
    logoWithTextContainer: {
      display: "flex",
      alignItems: "center",
      gap: "var(--spacing-3, 12px)",
      width: "100%",
    },
    logoImageWithText: {
      flexShrink: 0,
      maxWidth: "var(--spacing-10, 40px)",
      height: "auto",
      objectFit: "contain",
    },
    businessText: {
      fontFamily: "var(--font-family-sans, 'Poppins', system-ui, sans-serif)",
      fontSize: "var(--font-size-lg, 18px)",
      fontWeight: "var(--font-weight-bold, 700)",
      lineHeight: "var(--line-height-tight, 1.25)",
      color: "var(--color-navy-500, #1e3a8a)",
      overflow: "hidden",
      textOverflow: "ellipsis",
      whiteSpace: "nowrap",
      maxWidth: "140px",
    },
    fallbackIconContainer: {
      display: "flex",
      alignItems: "center",
      gap: "var(--spacing-3, 12px)",
    },
    fallbackIcon: {
      width: "var(--spacing-8, 32px)",
      height: "var(--spacing-8, 32px)",
      borderRadius: "var(--border-radius-md, 6px)",
      backgroundColor: "var(--color-navy-500, #1e3a8a)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      flexShrink: 0,
    },
    fallbackIconSvg: {
      width: "var(--spacing-5, 20px)",
      height: "var(--spacing-5, 20px)",
      color: "var(--color-white, #ffffff)",
    },
  },
  mw = () => {
    const e = "sidebar-business-logo-interactive",
      t = document.getElementById(e);
    t && t.remove();
    const n = document.createElement("style");
    (n.id = e),
      (n.textContent = `
    .sidebar-business-logo-clickable:focus {
      outline: 2px solid var(--color-border-focus, #3b82f6);
      outline-offset: 1px;
    }
    .sidebar-business-logo-clickable:focus-visible {
      outline: 2px solid var(--color-border-focus, #3b82f6);
      outline-offset: 1px;
    }
  `),
      document.head.appendChild(n);
  },
  Io = g.forwardRef(
    (
      {
        className: e,
        businessName: t = "Your Business",
        logoUrl: n,
        width: r = 120,
        height: o = 40,
        onClick: l,
        showTextWithLogo: s = !1,
        textOnly: i = !1,
        style: a,
        ...c
      },
      f
    ) => {
      const p = g.useRef(null),
        m = !!l;
      g.useImperativeHandle(f, () => p.current),
        g.useEffect(() => {
          p.current &&
            m &&
            (mw(), p.current.classList.add("sidebar-business-logo-clickable"));
        }, [m]);
      const x = { ...lt.base, ...(m ? lt.clickable : {}), ...a },
        w = () =>
          i
            ? u.jsx("span", { style: lt.businessText, children: t })
            : n && s
            ? u.jsxs("div", {
                style: lt.logoWithTextContainer,
                children: [
                  u.jsx("img", {
                    src: n,
                    alt: `${t} logo`,
                    width: 32,
                    height: 32,
                    style: { ...lt.logoImageWithText, maxHeight: 32 },
                  }),
                  u.jsx("span", { style: lt.businessText, children: t }),
                ],
              })
            : n
            ? u.jsx("img", {
                src: n,
                alt: `${t} logo`,
                width: r,
                height: o,
                style: { ...lt.logoImage, maxHeight: o },
              })
            : u.jsxs("div", {
                style: lt.fallbackIconContainer,
                children: [
                  u.jsx("div", {
                    style: lt.fallbackIcon,
                    children: u.jsx(iw, { style: lt.fallbackIconSvg }),
                  }),
                  u.jsx("span", { style: lt.businessText, children: t }),
                ],
              }),
        v = T(Am({ clickable: m }), e);
      return m
        ? u.jsx("button", {
            ...c,
            ref: p,
            onClick: l,
            "aria-label": `${t} home`,
            className: v,
            style: x,
            children: w(),
          })
        : u.jsx("div", { ref: p, className: v, style: x, ...c, children: w() });
    }
  );
Io.displayName = "SidebarBusinessLogo";
const hw = (e, t) => {
    const n = () => {
        for (const m of e.standalone || []) if (Jl(m.href, t)) return m.id;
        for (const m of e.sections)
          for (const x of m.items) if (Jl(x.href, t)) return x.id;
        return null;
      },
      [r, o] = g.useState(n()),
      [l, s] = g.useState(Sa(e, t));
    return (
      g.useEffect(() => {
        const m = n();
        o(m);
        const x = Sa(e, t);
        s((w) => [...new Set([...w, ...x])]);
      }, [t, e]),
      {
        activeItemId: r,
        expandedSections: l,
        toggleSection: (m) => {
          s((x) => (x.includes(m) ? x.filter((w) => w !== m) : [...x, m]));
        },
        isSectionExpanded: (m) => l.includes(m),
        getSectionById: (m) => e.sections.find((x) => x.id === m),
        getItemById: (m) => {
          var w;
          const x =
            (w = e.standalone) == null ? void 0 : w.find((v) => v.id === m);
          if (x) return x;
          for (const v of e.sections) {
            const b = v.items.find((h) => h.id === m);
            if (b) return b;
          }
        },
        getAllItems: () => {
          const m = [];
          e.standalone && m.push(...e.standalone);
          for (const x of e.sections) m.push(...x.items);
          return m;
        },
        setActiveItemId: o,
        setExpandedSections: s,
      }
    );
  },
  vw = (e, t, n, r) => ({
    id: e,
    label: t,
    href: n,
    icon: r == null ? void 0 : r.icon,
    badge: r == null ? void 0 : r.badge,
  }),
  gw = (e, t, n, r) => ({
    id: e,
    title: t,
    items: n,
    icon: r == null ? void 0 : r.icon,
    badge: r == null ? void 0 : r.badge,
  }),
  yw = (e) => {
    var o, l;
    const t = ((o = e.standalone) == null ? void 0 : o.length) || 0,
      n = e.sections.length,
      r =
        (((l = e.standalone) == null ? void 0 : l.length) || 0) +
        e.sections.reduce((s, i) => s + i.items.length, 0);
    return { standaloneCount: t, sectionCount: n, totalItems: r };
  },
  rt = K("text-sm leading-[1.25] font-normal font-sans tracking-wide", {
    variants: {
      variant: {
        default: "text-input-helper mt-1",
        error: "text-input-text-error mt-1",
        success: "text-input-text-success mt-1",
        warning: "text-input-text-warning mt-1",
        muted: "text-text-muted mt-0 mb-1",
      },
    },
    defaultVariants: { variant: "default" },
  }),
  Fo = K("block text-base font-medium mb-1 font-sans", {
    variants: {
      variant: {
        default: "text-[var(--color-input-label,#1e40af)]",
        disabled: "text-[var(--color-disabled-text,#6b7280)]",
      },
    },
    defaultVariants: { variant: "default" },
  }),
  Vo = K("w-full space-y-1", {
    variants: {
      variant: { default: "", compact: "space-y-0.5", spacious: "space-y-2" },
    },
    defaultVariants: { variant: "default" },
  }),
  xw = K("ml-1", {
    variants: {
      variant: {
        default: "text-[var(--color-input-label-required,#a30134)]",
        subtle: "text-[var(--color-text-muted,#6b7280)]",
      },
    },
    defaultVariants: { variant: "default" },
  }),
  ww = K("ml-1 font-normal", {
    variants: {
      variant: {
        default: "text-[var(--color-text-muted,#6b7280)]",
        subtle: "text-[var(--color-text-muted,#8f949a)]",
      },
    },
    defaultVariants: { variant: "default" },
  }),
  Wn = (e, t, n) =>
    (typeof e == "string" ? e : null) ||
    (typeof t == "string" ? t : null) ||
    (typeof n == "string" ? n : null),
  Un = (e, t, n) => (e ? "error" : t ? "success" : n ? "warning" : "default"),
  bw = (e) => ({
    input: e,
    label: `${e}-label`,
    helper: `${e}-helper`,
    description: `${e}-description`,
  }),
  ih = (e, t, n) => !!(e || t || n),
  $o = (e, t, n, r, o) => {
    const l = ih(t, n, r),
      s = l ? `${e}-helper` : void 0,
      i = o && !l ? `${e}-description` : void 0;
    return {
      "aria-invalid": t ? "true" : void 0,
      "aria-describedby": s || i || void 0,
    };
  },
  Sw = () =>
    u.jsxs("svg", {
      width: "16",
      height: "16",
      viewBox: "0 0 24 24",
      fill: "none",
      className: "animate-spin",
      children: [
        u.jsx("circle", {
          cx: "12",
          cy: "12",
          r: "10",
          stroke: "currentColor",
          strokeWidth: "4",
          className: "opacity-25",
        }),
        u.jsx("path", {
          fill: "currentColor",
          d: "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z",
          className: "opacity-75",
        }),
      ],
    }),
  wn = {
    base: {
      display: "flex",
      width: "100%",
      maxWidth: "100%",
      minWidth: "0",
      boxSizing: "border-box",
      border: "1px solid var(--color-border, #d1d5db)",
      borderRadius: "var(--input-border-radius, 6px)",
      backgroundColor: "var(--input-bg, #ffffff)",
      fontFamily: "var(--font-family-sans, 'Poppins', system-ui, sans-serif)",
      fontSize: "var(--font-size-base, 16px)",
      lineHeight: "var(--line-height-normal, 1.5)",
      color: "var(--color-input-text, #374151)",
      transition: "var(--input-transition, all 200ms ease-in-out)",
      outline: "none",
    },
    variants: {
      default: { borderColor: "var(--color-border, #d1d5db)" },
      error: { borderColor: "var(--color-border-error, #dc2626)" },
      success: { borderColor: "var(--color-border-success, #059669)" },
      warning: { borderColor: "var(--color-border-warning, #d97706)" },
    },
    sizes: {
      sm: {
        height: "var(--input-height-sm, 32px)",
        paddingLeft: "var(--input-padding-x-sm, 8px)",
        paddingRight: "var(--input-padding-x-sm, 8px)",
        fontSize: "var(--font-size-sm, 14px)",
      },
      md: {
        height: "var(--input-height-md, 48px)",
        paddingLeft: "var(--input-padding-x-md, 16px)",
        paddingRight: "var(--input-padding-x-md, 16px)",
        fontSize: "var(--font-size-base, 16px)",
      },
      lg: {
        height: "var(--input-height-lg, 56px)",
        paddingLeft: "var(--input-padding-x-lg, 20px)",
        paddingRight: "var(--input-padding-x-lg, 20px)",
        fontSize: "var(--font-size-lg, 18px)",
      },
      xl: {
        height: "var(--input-height-xl, 64px)",
        paddingLeft: "var(--input-padding-x-xl, 24px)",
        paddingRight: "var(--input-padding-x-xl, 24px)",
        fontSize: "var(--font-size-xl, 20px)",
      },
    },
    states: {
      disabled: {
        cursor: "not-allowed",
        opacity: "var(--opacity-disabled, 0.5)",
        backgroundColor: "var(--color-disabled, #f3f4f6)",
      },
      loading: { paddingRight: "2.5rem" },
    },
  },
  Td = {
    base: {
      display: "block",
      fontSize: "var(--font-size-base, 16px)",
      fontWeight: "var(--font-weight-medium, 500)",
      color: "var(--color-input-label, #1e40af)",
      fontFamily: "var(--font-family-sans, 'Poppins', sans-serif)",
    },
    states: { disabled: { color: "var(--color-disabled-text, #6b7280)" } },
  },
  ah = K(
    "flex w-full transition-all duration-200 focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50 placeholder:text-gray-400",
    {
      variants: {
        variant: { default: "", error: "", success: "", warning: "" },
        size: { sm: "", md: "", lg: "", xl: "" },
      },
      defaultVariants: { variant: "default", size: "md" },
    }
  ),
  Cw = (e) => {
    const t = `input-focus-${e}`,
      n = document.getElementById(t);
    n && n.remove();
    const r = document.createElement("style");
    r.id = t;
    let o;
    switch (e) {
      case "error":
        o = "var(--input-focus-shadow-error, 0 0 0 3px rgba(235, 0, 0, 0.6))";
        break;
      case "success":
        o =
          "var(--input-focus-shadow-success, 0 0 0 3px rgba(0, 125, 133, 0.6))";
        break;
      case "warning":
        o =
          "var(--input-focus-shadow-warning, 0 0 0 3px rgba(183, 91, 0, 0.8))";
        break;
      default:
        o =
          "var(--input-focus-shadow-default, 0 0 0 3px rgba(255, 153, 0, 0.8))";
    }
    (r.textContent = `
    .input-${e}:focus {
      box-shadow: ${o};
    }
  `),
      document.head.appendChild(r);
  },
  vr = W.forwardRef(
    (
      {
        className: e,
        type: t = "text",
        variant: n = "default",
        size: r = "md",
        label: o,
        labelState: l,
        hideLabel: s = !1,
        containerClassName: i,
        labelClassName: a,
        helperClassName: c,
        style: f,
        leftIcon: p,
        rightIcon: m,
        leftText: x,
        rightText: w,
        loading: v = !1,
        clearable: b = !1,
        onClear: h,
        hintText: d,
        error: y,
        success: S,
        warning: C,
        disabled: E = !1,
        ...k
      },
      N
    ) => {
      const _ = W.useRef(null),
        P = W.useId();
      W.useImperativeHandle(N, () => _.current),
        W.useEffect(() => {
          _.current && n && (Cw(n), _.current.classList.add(`input-${n}`));
        }, [n]);
      const z = y ? "error" : S ? "success" : C ? "warning" : n,
        L = {
          ...wn.base,
          ...(z && wn.variants[z] ? wn.variants[z] : {}),
          ...(r && wn.sizes[r] ? wn.sizes[r] : {}),
          ...(E ? wn.states.disabled : {}),
          ...(v ? wn.states.loading : {}),
          ...f,
        },
        $ = T(ah({ variant: z, size: r }), e),
        V = y || S || C,
        H = Wn(y, S, C),
        D = Un(y, S, C),
        B = $o(P, y, S, C, d),
        j = !s,
        I = !!d,
        O = V ? `${P}-helper` : void 0;
      return u.jsxs("div", {
        className: T("w-full", i),
        children: [
          j &&
            o &&
            u.jsxs("label", {
              htmlFor: P,
              className: T(Fo(), a),
              style: { ...Td.base, ...(E ? Td.states.disabled : {}) },
              children: [
                u.jsx("span", {
                  style: { color: "var(--color-input-label, #1e40af)" },
                  children: o,
                }),
                l === "required" &&
                  u.jsxs("span", {
                    style: {
                      color: "var(--color-input-label-required, #a30134)",
                    },
                    children: [" ", "*"],
                  }),
                l === "optional" &&
                  u.jsxs("span", {
                    style: {
                      color: "var(--color-text-muted, #6b7280)",
                      fontWeight: "var(--font-weight-regular, 400)",
                    },
                    children: [" ", "(Optional)"],
                  }),
              ],
            }),
          I &&
            u.jsx("p", {
              className: T(rt({ variant: "muted" })),
              id: `${P}-description`,
              children: d,
            }),
          u.jsxs("div", {
            className: "relative",
            children: [
              (p || x) &&
                u.jsxs("div", {
                  className:
                    "absolute left-3 top-1/2 transform -translate-y-1/2 flex items-center",
                  style: { color: "var(--color-text-muted, #6b7280)" },
                  children: [
                    p,
                    x && u.jsx("span", { className: "text-sm", children: x }),
                  ],
                }),
              u.jsx("input", {
                ...k,
                ref: _,
                id: P,
                type: t,
                disabled: E,
                className: $,
                ...B,
                style: {
                  ...L,
                  paddingLeft: p || x ? "2.5rem" : L.paddingLeft,
                  paddingRight: m || w || v || b ? "2.5rem" : L.paddingRight,
                },
              }),
              u.jsxs("div", {
                className:
                  "absolute right-3 top-1/2 transform -translate-y-1/2 flex items-center space-x-2",
                children: [
                  v &&
                    u.jsx("div", {
                      style: { color: "var(--color-text-muted, #6b7280)" },
                      children: u.jsx(Sw, {}),
                    }),
                  b &&
                    k.value &&
                    !E &&
                    !v &&
                    u.jsx("button", {
                      type: "button",
                      onClick: h,
                      className: "hover:text-gray-700 focus:outline-none",
                      style: { color: "var(--color-text-muted, #6b7280)" },
                      "aria-label": "Clear input",
                      children: u.jsx("svg", {
                        width: "16",
                        height: "16",
                        viewBox: "0 0 24 24",
                        fill: "currentColor",
                        children: u.jsx("path", {
                          d: "M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z",
                        }),
                      }),
                    }),
                  (m || w) &&
                    !v &&
                    !b &&
                    u.jsxs("div", {
                      className: "flex items-center",
                      style: { color: "var(--color-text-muted, #6b7280)" },
                      children: [
                        w &&
                          u.jsx("span", { className: "text-sm", children: w }),
                        m,
                      ],
                    }),
                ],
              }),
            ],
          }),
          V &&
            H &&
            u.jsx("p", {
              id: O,
              className: T(rt({ variant: D }), c),
              children: H,
            }),
        ],
      });
    }
  );
vr.displayName = "Input";
function Ad(e, [t, n]) {
  return Math.min(n, Math.max(t, e));
}
function fn(e) {
  const t = g.useRef(e);
  return (
    g.useEffect(() => {
      t.current = e;
    }),
    g.useMemo(
      () =>
        (...n) => {
          var r;
          return (r = t.current) == null ? void 0 : r.call(t, ...n);
        },
      []
    )
  );
}
function kw(e, t = globalThis == null ? void 0 : globalThis.document) {
  const n = fn(e);
  g.useEffect(() => {
    const r = (o) => {
      o.key === "Escape" && n(o);
    };
    return (
      t.addEventListener("keydown", r, { capture: !0 }),
      () => t.removeEventListener("keydown", r, { capture: !0 })
    );
  }, [n, t]);
}
var Ew = "DismissableLayer",
  Ea = "dismissableLayer.update",
  Nw = "dismissableLayer.pointerDownOutside",
  jw = "dismissableLayer.focusOutside",
  Ld,
  ch = g.createContext({
    layers: new Set(),
    layersWithOutsidePointerEventsDisabled: new Set(),
    branches: new Set(),
  }),
  uh = g.forwardRef((e, t) => {
    const {
        disableOutsidePointerEvents: n = !1,
        onEscapeKeyDown: r,
        onPointerDownOutside: o,
        onFocusOutside: l,
        onInteractOutside: s,
        onDismiss: i,
        ...a
      } = e,
      c = g.useContext(ch),
      [f, p] = g.useState(null),
      m =
        (f == null ? void 0 : f.ownerDocument) ??
        (globalThis == null ? void 0 : globalThis.document),
      [, x] = g.useState({}),
      w = oe(t, (k) => p(k)),
      v = Array.from(c.layers),
      [b] = [...c.layersWithOutsidePointerEventsDisabled].slice(-1),
      h = v.indexOf(b),
      d = f ? v.indexOf(f) : -1,
      y = c.layersWithOutsidePointerEventsDisabled.size > 0,
      S = d >= h,
      C = _w((k) => {
        const N = k.target,
          _ = [...c.branches].some((P) => P.contains(N));
        !S ||
          _ ||
          (o == null || o(k),
          s == null || s(k),
          k.defaultPrevented || i == null || i());
      }, m),
      E = Iw((k) => {
        const N = k.target;
        [...c.branches].some((P) => P.contains(N)) ||
          (l == null || l(k),
          s == null || s(k),
          k.defaultPrevented || i == null || i());
      }, m);
    return (
      kw((k) => {
        d === c.layers.size - 1 &&
          (r == null || r(k),
          !k.defaultPrevented && i && (k.preventDefault(), i()));
      }, m),
      g.useEffect(() => {
        if (f)
          return (
            n &&
              (c.layersWithOutsidePointerEventsDisabled.size === 0 &&
                ((Ld = m.body.style.pointerEvents),
                (m.body.style.pointerEvents = "none")),
              c.layersWithOutsidePointerEventsDisabled.add(f)),
            c.layers.add(f),
            Md(),
            () => {
              n &&
                c.layersWithOutsidePointerEventsDisabled.size === 1 &&
                (m.body.style.pointerEvents = Ld);
            }
          );
      }, [f, m, n, c]),
      g.useEffect(
        () => () => {
          f &&
            (c.layers.delete(f),
            c.layersWithOutsidePointerEventsDisabled.delete(f),
            Md());
        },
        [f, c]
      ),
      g.useEffect(() => {
        const k = () => x({});
        return (
          document.addEventListener(Ea, k),
          () => document.removeEventListener(Ea, k)
        );
      }, []),
      u.jsx(Q.div, {
        ...a,
        ref: w,
        style: {
          pointerEvents: y ? (S ? "auto" : "none") : void 0,
          ...e.style,
        },
        onFocusCapture: X(e.onFocusCapture, E.onFocusCapture),
        onBlurCapture: X(e.onBlurCapture, E.onBlurCapture),
        onPointerDownCapture: X(e.onPointerDownCapture, C.onPointerDownCapture),
      })
    );
  });
uh.displayName = Ew;
var Rw = "DismissableLayerBranch",
  Pw = g.forwardRef((e, t) => {
    const n = g.useContext(ch),
      r = g.useRef(null),
      o = oe(t, r);
    return (
      g.useEffect(() => {
        const l = r.current;
        if (l)
          return (
            n.branches.add(l),
            () => {
              n.branches.delete(l);
            }
          );
      }, [n.branches]),
      u.jsx(Q.div, { ...e, ref: o })
    );
  });
Pw.displayName = Rw;
function _w(e, t = globalThis == null ? void 0 : globalThis.document) {
  const n = fn(e),
    r = g.useRef(!1),
    o = g.useRef(() => {});
  return (
    g.useEffect(() => {
      const l = (i) => {
          if (i.target && !r.current) {
            let a = function () {
              dh(Nw, n, c, { discrete: !0 });
            };
            const c = { originalEvent: i };
            i.pointerType === "touch"
              ? (t.removeEventListener("click", o.current),
                (o.current = a),
                t.addEventListener("click", o.current, { once: !0 }))
              : a();
          } else t.removeEventListener("click", o.current);
          r.current = !1;
        },
        s = window.setTimeout(() => {
          t.addEventListener("pointerdown", l);
        }, 0);
      return () => {
        window.clearTimeout(s),
          t.removeEventListener("pointerdown", l),
          t.removeEventListener("click", o.current);
      };
    }, [t, n]),
    { onPointerDownCapture: () => (r.current = !0) }
  );
}
function Iw(e, t = globalThis == null ? void 0 : globalThis.document) {
  const n = fn(e),
    r = g.useRef(!1);
  return (
    g.useEffect(() => {
      const o = (l) => {
        l.target &&
          !r.current &&
          dh(jw, n, { originalEvent: l }, { discrete: !1 });
      };
      return (
        t.addEventListener("focusin", o),
        () => t.removeEventListener("focusin", o)
      );
    }, [t, n]),
    {
      onFocusCapture: () => (r.current = !0),
      onBlurCapture: () => (r.current = !1),
    }
  );
}
function Md() {
  const e = new CustomEvent(Ea);
  document.dispatchEvent(e);
}
function dh(e, t, n, { discrete: r }) {
  const o = n.originalEvent.target,
    l = new CustomEvent(e, { bubbles: !1, cancelable: !0, detail: n });
  t && o.addEventListener(e, t, { once: !0 }),
    r ? I0(o, l) : o.dispatchEvent(l);
}
var gi = 0;
function Tw() {
  g.useEffect(() => {
    const e = document.querySelectorAll("[data-radix-focus-guard]");
    return (
      document.body.insertAdjacentElement("afterbegin", e[0] ?? Od()),
      document.body.insertAdjacentElement("beforeend", e[1] ?? Od()),
      gi++,
      () => {
        gi === 1 &&
          document
            .querySelectorAll("[data-radix-focus-guard]")
            .forEach((t) => t.remove()),
          gi--;
      }
    );
  }, []);
}
function Od() {
  const e = document.createElement("span");
  return (
    e.setAttribute("data-radix-focus-guard", ""),
    (e.tabIndex = 0),
    (e.style.outline = "none"),
    (e.style.opacity = "0"),
    (e.style.position = "fixed"),
    (e.style.pointerEvents = "none"),
    e
  );
}
var yi = "focusScope.autoFocusOnMount",
  xi = "focusScope.autoFocusOnUnmount",
  zd = { bubbles: !1, cancelable: !0 },
  Aw = "FocusScope",
  fh = g.forwardRef((e, t) => {
    const {
        loop: n = !1,
        trapped: r = !1,
        onMountAutoFocus: o,
        onUnmountAutoFocus: l,
        ...s
      } = e,
      [i, a] = g.useState(null),
      c = fn(o),
      f = fn(l),
      p = g.useRef(null),
      m = oe(t, (v) => a(v)),
      x = g.useRef({
        paused: !1,
        pause() {
          this.paused = !0;
        },
        resume() {
          this.paused = !1;
        },
      }).current;
    g.useEffect(() => {
      if (r) {
        let v = function (y) {
            if (x.paused || !i) return;
            const S = y.target;
            i.contains(S) ? (p.current = S) : Gt(p.current, { select: !0 });
          },
          b = function (y) {
            if (x.paused || !i) return;
            const S = y.relatedTarget;
            S !== null && (i.contains(S) || Gt(p.current, { select: !0 }));
          },
          h = function (y) {
            if (document.activeElement === document.body)
              for (const C of y) C.removedNodes.length > 0 && Gt(i);
          };
        document.addEventListener("focusin", v),
          document.addEventListener("focusout", b);
        const d = new MutationObserver(h);
        return (
          i && d.observe(i, { childList: !0, subtree: !0 }),
          () => {
            document.removeEventListener("focusin", v),
              document.removeEventListener("focusout", b),
              d.disconnect();
          }
        );
      }
    }, [r, i, x.paused]),
      g.useEffect(() => {
        if (i) {
          Fd.add(x);
          const v = document.activeElement;
          if (!i.contains(v)) {
            const h = new CustomEvent(yi, zd);
            i.addEventListener(yi, c),
              i.dispatchEvent(h),
              h.defaultPrevented ||
                (Lw(Fw(ph(i)), { select: !0 }),
                document.activeElement === v && Gt(i));
          }
          return () => {
            i.removeEventListener(yi, c),
              setTimeout(() => {
                const h = new CustomEvent(xi, zd);
                i.addEventListener(xi, f),
                  i.dispatchEvent(h),
                  h.defaultPrevented || Gt(v ?? document.body, { select: !0 }),
                  i.removeEventListener(xi, f),
                  Fd.remove(x);
              }, 0);
          };
        }
      }, [i, c, f, x]);
    const w = g.useCallback(
      (v) => {
        if ((!n && !r) || x.paused) return;
        const b = v.key === "Tab" && !v.altKey && !v.ctrlKey && !v.metaKey,
          h = document.activeElement;
        if (b && h) {
          const d = v.currentTarget,
            [y, S] = Mw(d);
          y && S
            ? !v.shiftKey && h === S
              ? (v.preventDefault(), n && Gt(y, { select: !0 }))
              : v.shiftKey &&
                h === y &&
                (v.preventDefault(), n && Gt(S, { select: !0 }))
            : h === d && v.preventDefault();
        }
      },
      [n, r, x.paused]
    );
    return u.jsx(Q.div, { tabIndex: -1, ...s, ref: m, onKeyDown: w });
  });
fh.displayName = Aw;
function Lw(e, { select: t = !1 } = {}) {
  const n = document.activeElement;
  for (const r of e)
    if ((Gt(r, { select: t }), document.activeElement !== n)) return;
}
function Mw(e) {
  const t = ph(e),
    n = Dd(t, e),
    r = Dd(t.reverse(), e);
  return [n, r];
}
function ph(e) {
  const t = [],
    n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
      acceptNode: (r) => {
        const o = r.tagName === "INPUT" && r.type === "hidden";
        return r.disabled || r.hidden || o
          ? NodeFilter.FILTER_SKIP
          : r.tabIndex >= 0
          ? NodeFilter.FILTER_ACCEPT
          : NodeFilter.FILTER_SKIP;
      },
    });
  for (; n.nextNode(); ) t.push(n.currentNode);
  return t;
}
function Dd(e, t) {
  for (const n of e) if (!Ow(n, { upTo: t })) return n;
}
function Ow(e, { upTo: t }) {
  if (getComputedStyle(e).visibility === "hidden") return !0;
  for (; e; ) {
    if (t !== void 0 && e === t) return !1;
    if (getComputedStyle(e).display === "none") return !0;
    e = e.parentElement;
  }
  return !1;
}
function zw(e) {
  return e instanceof HTMLInputElement && "select" in e;
}
function Gt(e, { select: t = !1 } = {}) {
  if (e && e.focus) {
    const n = document.activeElement;
    e.focus({ preventScroll: !0 }), e !== n && zw(e) && t && e.select();
  }
}
var Fd = Dw();
function Dw() {
  let e = [];
  return {
    add(t) {
      const n = e[0];
      t !== n && (n == null || n.pause()), (e = Vd(e, t)), e.unshift(t);
    },
    remove(t) {
      var n;
      (e = Vd(e, t)), (n = e[0]) == null || n.resume();
    },
  };
}
function Vd(e, t) {
  const n = [...e],
    r = n.indexOf(t);
  return r !== -1 && n.splice(r, 1), n;
}
function Fw(e) {
  return e.filter((t) => t.tagName !== "A");
}
const Vw = ["top", "right", "bottom", "left"],
  pn = Math.min,
  Ue = Math.max,
  ts = Math.round,
  cl = Math.floor,
  Nt = (e) => ({ x: e, y: e }),
  $w = { left: "right", right: "left", bottom: "top", top: "bottom" },
  Bw = { start: "end", end: "start" };
function Na(e, t, n) {
  return Ue(e, pn(t, n));
}
function Ft(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function Vt(e) {
  return e.split("-")[0];
}
function Ar(e) {
  return e.split("-")[1];
}
function Uc(e) {
  return e === "x" ? "y" : "x";
}
function Hc(e) {
  return e === "y" ? "height" : "width";
}
function Ct(e) {
  return ["top", "bottom"].includes(Vt(e)) ? "y" : "x";
}
function Gc(e) {
  return Uc(Ct(e));
}
function Ww(e, t, n) {
  n === void 0 && (n = !1);
  const r = Ar(e),
    o = Gc(e),
    l = Hc(o);
  let s =
    o === "x"
      ? r === (n ? "end" : "start")
        ? "right"
        : "left"
      : r === "start"
      ? "bottom"
      : "top";
  return t.reference[l] > t.floating[l] && (s = ns(s)), [s, ns(s)];
}
function Uw(e) {
  const t = ns(e);
  return [ja(e), t, ja(t)];
}
function ja(e) {
  return e.replace(/start|end/g, (t) => Bw[t]);
}
function Hw(e, t, n) {
  const r = ["left", "right"],
    o = ["right", "left"],
    l = ["top", "bottom"],
    s = ["bottom", "top"];
  switch (e) {
    case "top":
    case "bottom":
      return n ? (t ? o : r) : t ? r : o;
    case "left":
    case "right":
      return t ? l : s;
    default:
      return [];
  }
}
function Gw(e, t, n, r) {
  const o = Ar(e);
  let l = Hw(Vt(e), n === "start", r);
  return (
    o && ((l = l.map((s) => s + "-" + o)), t && (l = l.concat(l.map(ja)))), l
  );
}
function ns(e) {
  return e.replace(/left|right|bottom|top/g, (t) => $w[t]);
}
function Kw(e) {
  return { top: 0, right: 0, bottom: 0, left: 0, ...e };
}
function mh(e) {
  return typeof e != "number"
    ? Kw(e)
    : { top: e, right: e, bottom: e, left: e };
}
function rs(e) {
  const { x: t, y: n, width: r, height: o } = e;
  return {
    width: r,
    height: o,
    top: n,
    left: t,
    right: t + r,
    bottom: n + o,
    x: t,
    y: n,
  };
}
function $d(e, t, n) {
  let { reference: r, floating: o } = e;
  const l = Ct(t),
    s = Gc(t),
    i = Hc(s),
    a = Vt(t),
    c = l === "y",
    f = r.x + r.width / 2 - o.width / 2,
    p = r.y + r.height / 2 - o.height / 2,
    m = r[i] / 2 - o[i] / 2;
  let x;
  switch (a) {
    case "top":
      x = { x: f, y: r.y - o.height };
      break;
    case "bottom":
      x = { x: f, y: r.y + r.height };
      break;
    case "right":
      x = { x: r.x + r.width, y: p };
      break;
    case "left":
      x = { x: r.x - o.width, y: p };
      break;
    default:
      x = { x: r.x, y: r.y };
  }
  switch (Ar(t)) {
    case "start":
      x[s] -= m * (n && c ? -1 : 1);
      break;
    case "end":
      x[s] += m * (n && c ? -1 : 1);
      break;
  }
  return x;
}
const Qw = async (e, t, n) => {
  const {
      placement: r = "bottom",
      strategy: o = "absolute",
      middleware: l = [],
      platform: s,
    } = n,
    i = l.filter(Boolean),
    a = await (s.isRTL == null ? void 0 : s.isRTL(t));
  let c = await s.getElementRects({ reference: e, floating: t, strategy: o }),
    { x: f, y: p } = $d(c, r, a),
    m = r,
    x = {},
    w = 0;
  for (let v = 0; v < i.length; v++) {
    const { name: b, fn: h } = i[v],
      {
        x: d,
        y,
        data: S,
        reset: C,
      } = await h({
        x: f,
        y: p,
        initialPlacement: r,
        placement: m,
        strategy: o,
        middlewareData: x,
        rects: c,
        platform: s,
        elements: { reference: e, floating: t },
      });
    (f = d ?? f),
      (p = y ?? p),
      (x = { ...x, [b]: { ...x[b], ...S } }),
      C &&
        w <= 50 &&
        (w++,
        typeof C == "object" &&
          (C.placement && (m = C.placement),
          C.rects &&
            (c =
              C.rects === !0
                ? await s.getElementRects({
                    reference: e,
                    floating: t,
                    strategy: o,
                  })
                : C.rects),
          ({ x: f, y: p } = $d(c, m, a))),
        (v = -1));
  }
  return { x: f, y: p, placement: m, strategy: o, middlewareData: x };
};
async function To(e, t) {
  var n;
  t === void 0 && (t = {});
  const { x: r, y: o, platform: l, rects: s, elements: i, strategy: a } = e,
    {
      boundary: c = "clippingAncestors",
      rootBoundary: f = "viewport",
      elementContext: p = "floating",
      altBoundary: m = !1,
      padding: x = 0,
    } = Ft(t, e),
    w = mh(x),
    b = i[m ? (p === "floating" ? "reference" : "floating") : p],
    h = rs(
      await l.getClippingRect({
        element:
          (n = await (l.isElement == null ? void 0 : l.isElement(b))) == null ||
          n
            ? b
            : b.contextElement ||
              (await (l.getDocumentElement == null
                ? void 0
                : l.getDocumentElement(i.floating))),
        boundary: c,
        rootBoundary: f,
        strategy: a,
      })
    ),
    d =
      p === "floating"
        ? { x: r, y: o, width: s.floating.width, height: s.floating.height }
        : s.reference,
    y = await (l.getOffsetParent == null
      ? void 0
      : l.getOffsetParent(i.floating)),
    S = (await (l.isElement == null ? void 0 : l.isElement(y)))
      ? (await (l.getScale == null ? void 0 : l.getScale(y))) || { x: 1, y: 1 }
      : { x: 1, y: 1 },
    C = rs(
      l.convertOffsetParentRelativeRectToViewportRelativeRect
        ? await l.convertOffsetParentRelativeRectToViewportRelativeRect({
            elements: i,
            rect: d,
            offsetParent: y,
            strategy: a,
          })
        : d
    );
  return {
    top: (h.top - C.top + w.top) / S.y,
    bottom: (C.bottom - h.bottom + w.bottom) / S.y,
    left: (h.left - C.left + w.left) / S.x,
    right: (C.right - h.right + w.right) / S.x,
  };
}
const Yw = (e) => ({
    name: "arrow",
    options: e,
    async fn(t) {
      const {
          x: n,
          y: r,
          placement: o,
          rects: l,
          platform: s,
          elements: i,
          middlewareData: a,
        } = t,
        { element: c, padding: f = 0 } = Ft(e, t) || {};
      if (c == null) return {};
      const p = mh(f),
        m = { x: n, y: r },
        x = Gc(o),
        w = Hc(x),
        v = await s.getDimensions(c),
        b = x === "y",
        h = b ? "top" : "left",
        d = b ? "bottom" : "right",
        y = b ? "clientHeight" : "clientWidth",
        S = l.reference[w] + l.reference[x] - m[x] - l.floating[w],
        C = m[x] - l.reference[x],
        E = await (s.getOffsetParent == null ? void 0 : s.getOffsetParent(c));
      let k = E ? E[y] : 0;
      (!k || !(await (s.isElement == null ? void 0 : s.isElement(E)))) &&
        (k = i.floating[y] || l.floating[w]);
      const N = S / 2 - C / 2,
        _ = k / 2 - v[w] / 2 - 1,
        P = pn(p[h], _),
        z = pn(p[d], _),
        L = P,
        $ = k - v[w] - z,
        V = k / 2 - v[w] / 2 + N,
        H = Na(L, V, $),
        D =
          !a.arrow &&
          Ar(o) != null &&
          V !== H &&
          l.reference[w] / 2 - (V < L ? P : z) - v[w] / 2 < 0,
        B = D ? (V < L ? V - L : V - $) : 0;
      return {
        [x]: m[x] + B,
        data: {
          [x]: H,
          centerOffset: V - H - B,
          ...(D && { alignmentOffset: B }),
        },
        reset: D,
      };
    },
  }),
  Xw = function (e) {
    return (
      e === void 0 && (e = {}),
      {
        name: "flip",
        options: e,
        async fn(t) {
          var n, r;
          const {
              placement: o,
              middlewareData: l,
              rects: s,
              initialPlacement: i,
              platform: a,
              elements: c,
            } = t,
            {
              mainAxis: f = !0,
              crossAxis: p = !0,
              fallbackPlacements: m,
              fallbackStrategy: x = "bestFit",
              fallbackAxisSideDirection: w = "none",
              flipAlignment: v = !0,
              ...b
            } = Ft(e, t);
          if ((n = l.arrow) != null && n.alignmentOffset) return {};
          const h = Vt(o),
            d = Ct(i),
            y = Vt(i) === i,
            S = await (a.isRTL == null ? void 0 : a.isRTL(c.floating)),
            C = m || (y || !v ? [ns(i)] : Uw(i)),
            E = w !== "none";
          !m && E && C.push(...Gw(i, v, w, S));
          const k = [i, ...C],
            N = await To(t, b),
            _ = [];
          let P = ((r = l.flip) == null ? void 0 : r.overflows) || [];
          if ((f && _.push(N[h]), p)) {
            const V = Ww(o, s, S);
            _.push(N[V[0]], N[V[1]]);
          }
          if (
            ((P = [...P, { placement: o, overflows: _ }]),
            !_.every((V) => V <= 0))
          ) {
            var z, L;
            const V = (((z = l.flip) == null ? void 0 : z.index) || 0) + 1,
              H = k[V];
            if (
              H &&
              (!(p === "alignment" ? d !== Ct(H) : !1) ||
                P.every((j) => j.overflows[0] > 0 && Ct(j.placement) === d))
            )
              return {
                data: { index: V, overflows: P },
                reset: { placement: H },
              };
            let D =
              (L = P.filter((B) => B.overflows[0] <= 0).sort(
                (B, j) => B.overflows[1] - j.overflows[1]
              )[0]) == null
                ? void 0
                : L.placement;
            if (!D)
              switch (x) {
                case "bestFit": {
                  var $;
                  const B =
                    ($ = P.filter((j) => {
                      if (E) {
                        const I = Ct(j.placement);
                        return I === d || I === "y";
                      }
                      return !0;
                    })
                      .map((j) => [
                        j.placement,
                        j.overflows
                          .filter((I) => I > 0)
                          .reduce((I, O) => I + O, 0),
                      ])
                      .sort((j, I) => j[1] - I[1])[0]) == null
                      ? void 0
                      : $[0];
                  B && (D = B);
                  break;
                }
                case "initialPlacement":
                  D = i;
                  break;
              }
            if (o !== D) return { reset: { placement: D } };
          }
          return {};
        },
      }
    );
  };
function Bd(e, t) {
  return {
    top: e.top - t.height,
    right: e.right - t.width,
    bottom: e.bottom - t.height,
    left: e.left - t.width,
  };
}
function Wd(e) {
  return Vw.some((t) => e[t] >= 0);
}
const Zw = function (e) {
  return (
    e === void 0 && (e = {}),
    {
      name: "hide",
      options: e,
      async fn(t) {
        const { rects: n } = t,
          { strategy: r = "referenceHidden", ...o } = Ft(e, t);
        switch (r) {
          case "referenceHidden": {
            const l = await To(t, { ...o, elementContext: "reference" }),
              s = Bd(l, n.reference);
            return {
              data: { referenceHiddenOffsets: s, referenceHidden: Wd(s) },
            };
          }
          case "escaped": {
            const l = await To(t, { ...o, altBoundary: !0 }),
              s = Bd(l, n.floating);
            return { data: { escapedOffsets: s, escaped: Wd(s) } };
          }
          default:
            return {};
        }
      },
    }
  );
};
async function qw(e, t) {
  const { placement: n, platform: r, elements: o } = e,
    l = await (r.isRTL == null ? void 0 : r.isRTL(o.floating)),
    s = Vt(n),
    i = Ar(n),
    a = Ct(n) === "y",
    c = ["left", "top"].includes(s) ? -1 : 1,
    f = l && a ? -1 : 1,
    p = Ft(t, e);
  let {
    mainAxis: m,
    crossAxis: x,
    alignmentAxis: w,
  } = typeof p == "number"
    ? { mainAxis: p, crossAxis: 0, alignmentAxis: null }
    : {
        mainAxis: p.mainAxis || 0,
        crossAxis: p.crossAxis || 0,
        alignmentAxis: p.alignmentAxis,
      };
  return (
    i && typeof w == "number" && (x = i === "end" ? w * -1 : w),
    a ? { x: x * f, y: m * c } : { x: m * c, y: x * f }
  );
}
const Jw = function (e) {
    return (
      e === void 0 && (e = 0),
      {
        name: "offset",
        options: e,
        async fn(t) {
          var n, r;
          const { x: o, y: l, placement: s, middlewareData: i } = t,
            a = await qw(t, e);
          return s === ((n = i.offset) == null ? void 0 : n.placement) &&
            (r = i.arrow) != null &&
            r.alignmentOffset
            ? {}
            : { x: o + a.x, y: l + a.y, data: { ...a, placement: s } };
        },
      }
    );
  },
  e1 = function (e) {
    return (
      e === void 0 && (e = {}),
      {
        name: "shift",
        options: e,
        async fn(t) {
          const { x: n, y: r, placement: o } = t,
            {
              mainAxis: l = !0,
              crossAxis: s = !1,
              limiter: i = {
                fn: (b) => {
                  let { x: h, y: d } = b;
                  return { x: h, y: d };
                },
              },
              ...a
            } = Ft(e, t),
            c = { x: n, y: r },
            f = await To(t, a),
            p = Ct(Vt(o)),
            m = Uc(p);
          let x = c[m],
            w = c[p];
          if (l) {
            const b = m === "y" ? "top" : "left",
              h = m === "y" ? "bottom" : "right",
              d = x + f[b],
              y = x - f[h];
            x = Na(d, x, y);
          }
          if (s) {
            const b = p === "y" ? "top" : "left",
              h = p === "y" ? "bottom" : "right",
              d = w + f[b],
              y = w - f[h];
            w = Na(d, w, y);
          }
          const v = i.fn({ ...t, [m]: x, [p]: w });
          return {
            ...v,
            data: { x: v.x - n, y: v.y - r, enabled: { [m]: l, [p]: s } },
          };
        },
      }
    );
  },
  t1 = function (e) {
    return (
      e === void 0 && (e = {}),
      {
        options: e,
        fn(t) {
          const { x: n, y: r, placement: o, rects: l, middlewareData: s } = t,
            { offset: i = 0, mainAxis: a = !0, crossAxis: c = !0 } = Ft(e, t),
            f = { x: n, y: r },
            p = Ct(o),
            m = Uc(p);
          let x = f[m],
            w = f[p];
          const v = Ft(i, t),
            b =
              typeof v == "number"
                ? { mainAxis: v, crossAxis: 0 }
                : { mainAxis: 0, crossAxis: 0, ...v };
          if (a) {
            const y = m === "y" ? "height" : "width",
              S = l.reference[m] - l.floating[y] + b.mainAxis,
              C = l.reference[m] + l.reference[y] - b.mainAxis;
            x < S ? (x = S) : x > C && (x = C);
          }
          if (c) {
            var h, d;
            const y = m === "y" ? "width" : "height",
              S = ["top", "left"].includes(Vt(o)),
              C =
                l.reference[p] -
                l.floating[y] +
                ((S && ((h = s.offset) == null ? void 0 : h[p])) || 0) +
                (S ? 0 : b.crossAxis),
              E =
                l.reference[p] +
                l.reference[y] +
                (S ? 0 : ((d = s.offset) == null ? void 0 : d[p]) || 0) -
                (S ? b.crossAxis : 0);
            w < C ? (w = C) : w > E && (w = E);
          }
          return { [m]: x, [p]: w };
        },
      }
    );
  },
  n1 = function (e) {
    return (
      e === void 0 && (e = {}),
      {
        name: "size",
        options: e,
        async fn(t) {
          var n, r;
          const { placement: o, rects: l, platform: s, elements: i } = t,
            { apply: a = () => {}, ...c } = Ft(e, t),
            f = await To(t, c),
            p = Vt(o),
            m = Ar(o),
            x = Ct(o) === "y",
            { width: w, height: v } = l.floating;
          let b, h;
          p === "top" || p === "bottom"
            ? ((b = p),
              (h =
                m ===
                ((await (s.isRTL == null ? void 0 : s.isRTL(i.floating)))
                  ? "start"
                  : "end")
                  ? "left"
                  : "right"))
            : ((h = p), (b = m === "end" ? "top" : "bottom"));
          const d = v - f.top - f.bottom,
            y = w - f.left - f.right,
            S = pn(v - f[b], d),
            C = pn(w - f[h], y),
            E = !t.middlewareData.shift;
          let k = S,
            N = C;
          if (
            ((n = t.middlewareData.shift) != null && n.enabled.x && (N = y),
            (r = t.middlewareData.shift) != null && r.enabled.y && (k = d),
            E && !m)
          ) {
            const P = Ue(f.left, 0),
              z = Ue(f.right, 0),
              L = Ue(f.top, 0),
              $ = Ue(f.bottom, 0);
            x
              ? (N = w - 2 * (P !== 0 || z !== 0 ? P + z : Ue(f.left, f.right)))
              : (k =
                  v - 2 * (L !== 0 || $ !== 0 ? L + $ : Ue(f.top, f.bottom)));
          }
          await a({ ...t, availableWidth: N, availableHeight: k });
          const _ = await s.getDimensions(i.floating);
          return w !== _.width || v !== _.height
            ? { reset: { rects: !0 } }
            : {};
        },
      }
    );
  };
function Ts() {
  return typeof window < "u";
}
function Lr(e) {
  return hh(e) ? (e.nodeName || "").toLowerCase() : "#document";
}
function Ke(e) {
  var t;
  return (
    (e == null || (t = e.ownerDocument) == null ? void 0 : t.defaultView) ||
    window
  );
}
function Rt(e) {
  var t;
  return (t = (hh(e) ? e.ownerDocument : e.document) || window.document) == null
    ? void 0
    : t.documentElement;
}
function hh(e) {
  return Ts() ? e instanceof Node || e instanceof Ke(e).Node : !1;
}
function pt(e) {
  return Ts() ? e instanceof Element || e instanceof Ke(e).Element : !1;
}
function jt(e) {
  return Ts() ? e instanceof HTMLElement || e instanceof Ke(e).HTMLElement : !1;
}
function Ud(e) {
  return !Ts() || typeof ShadowRoot > "u"
    ? !1
    : e instanceof ShadowRoot || e instanceof Ke(e).ShadowRoot;
}
function Bo(e) {
  const { overflow: t, overflowX: n, overflowY: r, display: o } = mt(e);
  return (
    /auto|scroll|overlay|hidden|clip/.test(t + r + n) &&
    !["inline", "contents"].includes(o)
  );
}
function r1(e) {
  return ["table", "td", "th"].includes(Lr(e));
}
function As(e) {
  return [":popover-open", ":modal"].some((t) => {
    try {
      return e.matches(t);
    } catch {
      return !1;
    }
  });
}
function Kc(e) {
  const t = Qc(),
    n = pt(e) ? mt(e) : e;
  return (
    ["transform", "translate", "scale", "rotate", "perspective"].some((r) =>
      n[r] ? n[r] !== "none" : !1
    ) ||
    (n.containerType ? n.containerType !== "normal" : !1) ||
    (!t && (n.backdropFilter ? n.backdropFilter !== "none" : !1)) ||
    (!t && (n.filter ? n.filter !== "none" : !1)) ||
    ["transform", "translate", "scale", "rotate", "perspective", "filter"].some(
      (r) => (n.willChange || "").includes(r)
    ) ||
    ["paint", "layout", "strict", "content"].some((r) =>
      (n.contain || "").includes(r)
    )
  );
}
function o1(e) {
  let t = mn(e);
  for (; jt(t) && !Nr(t); ) {
    if (Kc(t)) return t;
    if (As(t)) return null;
    t = mn(t);
  }
  return null;
}
function Qc() {
  return typeof CSS > "u" || !CSS.supports
    ? !1
    : CSS.supports("-webkit-backdrop-filter", "none");
}
function Nr(e) {
  return ["html", "body", "#document"].includes(Lr(e));
}
function mt(e) {
  return Ke(e).getComputedStyle(e);
}
function Ls(e) {
  return pt(e)
    ? { scrollLeft: e.scrollLeft, scrollTop: e.scrollTop }
    : { scrollLeft: e.scrollX, scrollTop: e.scrollY };
}
function mn(e) {
  if (Lr(e) === "html") return e;
  const t = e.assignedSlot || e.parentNode || (Ud(e) && e.host) || Rt(e);
  return Ud(t) ? t.host : t;
}
function vh(e) {
  const t = mn(e);
  return Nr(t)
    ? e.ownerDocument
      ? e.ownerDocument.body
      : e.body
    : jt(t) && Bo(t)
    ? t
    : vh(t);
}
function Ao(e, t, n) {
  var r;
  t === void 0 && (t = []), n === void 0 && (n = !0);
  const o = vh(e),
    l = o === ((r = e.ownerDocument) == null ? void 0 : r.body),
    s = Ke(o);
  if (l) {
    const i = Ra(s);
    return t.concat(
      s,
      s.visualViewport || [],
      Bo(o) ? o : [],
      i && n ? Ao(i) : []
    );
  }
  return t.concat(o, Ao(o, [], n));
}
function Ra(e) {
  return e.parent && Object.getPrototypeOf(e.parent) ? e.frameElement : null;
}
function gh(e) {
  const t = mt(e);
  let n = parseFloat(t.width) || 0,
    r = parseFloat(t.height) || 0;
  const o = jt(e),
    l = o ? e.offsetWidth : n,
    s = o ? e.offsetHeight : r,
    i = ts(n) !== l || ts(r) !== s;
  return i && ((n = l), (r = s)), { width: n, height: r, $: i };
}
function Yc(e) {
  return pt(e) ? e : e.contextElement;
}
function gr(e) {
  const t = Yc(e);
  if (!jt(t)) return Nt(1);
  const n = t.getBoundingClientRect(),
    { width: r, height: o, $: l } = gh(t);
  let s = (l ? ts(n.width) : n.width) / r,
    i = (l ? ts(n.height) : n.height) / o;
  return (
    (!s || !Number.isFinite(s)) && (s = 1),
    (!i || !Number.isFinite(i)) && (i = 1),
    { x: s, y: i }
  );
}
const l1 = Nt(0);
function yh(e) {
  const t = Ke(e);
  return !Qc() || !t.visualViewport
    ? l1
    : { x: t.visualViewport.offsetLeft, y: t.visualViewport.offsetTop };
}
function s1(e, t, n) {
  return t === void 0 && (t = !1), !n || (t && n !== Ke(e)) ? !1 : t;
}
function zn(e, t, n, r) {
  t === void 0 && (t = !1), n === void 0 && (n = !1);
  const o = e.getBoundingClientRect(),
    l = Yc(e);
  let s = Nt(1);
  t && (r ? pt(r) && (s = gr(r)) : (s = gr(e)));
  const i = s1(l, n, r) ? yh(l) : Nt(0);
  let a = (o.left + i.x) / s.x,
    c = (o.top + i.y) / s.y,
    f = o.width / s.x,
    p = o.height / s.y;
  if (l) {
    const m = Ke(l),
      x = r && pt(r) ? Ke(r) : r;
    let w = m,
      v = Ra(w);
    for (; v && r && x !== w; ) {
      const b = gr(v),
        h = v.getBoundingClientRect(),
        d = mt(v),
        y = h.left + (v.clientLeft + parseFloat(d.paddingLeft)) * b.x,
        S = h.top + (v.clientTop + parseFloat(d.paddingTop)) * b.y;
      (a *= b.x),
        (c *= b.y),
        (f *= b.x),
        (p *= b.y),
        (a += y),
        (c += S),
        (w = Ke(v)),
        (v = Ra(w));
    }
  }
  return rs({ width: f, height: p, x: a, y: c });
}
function Xc(e, t) {
  const n = Ls(e).scrollLeft;
  return t ? t.left + n : zn(Rt(e)).left + n;
}
function xh(e, t, n) {
  n === void 0 && (n = !1);
  const r = e.getBoundingClientRect(),
    o = r.left + t.scrollLeft - (n ? 0 : Xc(e, r)),
    l = r.top + t.scrollTop;
  return { x: o, y: l };
}
function i1(e) {
  let { elements: t, rect: n, offsetParent: r, strategy: o } = e;
  const l = o === "fixed",
    s = Rt(r),
    i = t ? As(t.floating) : !1;
  if (r === s || (i && l)) return n;
  let a = { scrollLeft: 0, scrollTop: 0 },
    c = Nt(1);
  const f = Nt(0),
    p = jt(r);
  if (
    (p || (!p && !l)) &&
    ((Lr(r) !== "body" || Bo(s)) && (a = Ls(r)), jt(r))
  ) {
    const x = zn(r);
    (c = gr(r)), (f.x = x.x + r.clientLeft), (f.y = x.y + r.clientTop);
  }
  const m = s && !p && !l ? xh(s, a, !0) : Nt(0);
  return {
    width: n.width * c.x,
    height: n.height * c.y,
    x: n.x * c.x - a.scrollLeft * c.x + f.x + m.x,
    y: n.y * c.y - a.scrollTop * c.y + f.y + m.y,
  };
}
function a1(e) {
  return Array.from(e.getClientRects());
}
function c1(e) {
  const t = Rt(e),
    n = Ls(e),
    r = e.ownerDocument.body,
    o = Ue(t.scrollWidth, t.clientWidth, r.scrollWidth, r.clientWidth),
    l = Ue(t.scrollHeight, t.clientHeight, r.scrollHeight, r.clientHeight);
  let s = -n.scrollLeft + Xc(e);
  const i = -n.scrollTop;
  return (
    mt(r).direction === "rtl" && (s += Ue(t.clientWidth, r.clientWidth) - o),
    { width: o, height: l, x: s, y: i }
  );
}
function u1(e, t) {
  const n = Ke(e),
    r = Rt(e),
    o = n.visualViewport;
  let l = r.clientWidth,
    s = r.clientHeight,
    i = 0,
    a = 0;
  if (o) {
    (l = o.width), (s = o.height);
    const c = Qc();
    (!c || (c && t === "fixed")) && ((i = o.offsetLeft), (a = o.offsetTop));
  }
  return { width: l, height: s, x: i, y: a };
}
function d1(e, t) {
  const n = zn(e, !0, t === "fixed"),
    r = n.top + e.clientTop,
    o = n.left + e.clientLeft,
    l = jt(e) ? gr(e) : Nt(1),
    s = e.clientWidth * l.x,
    i = e.clientHeight * l.y,
    a = o * l.x,
    c = r * l.y;
  return { width: s, height: i, x: a, y: c };
}
function Hd(e, t, n) {
  let r;
  if (t === "viewport") r = u1(e, n);
  else if (t === "document") r = c1(Rt(e));
  else if (pt(t)) r = d1(t, n);
  else {
    const o = yh(e);
    r = { x: t.x - o.x, y: t.y - o.y, width: t.width, height: t.height };
  }
  return rs(r);
}
function wh(e, t) {
  const n = mn(e);
  return n === t || !pt(n) || Nr(n)
    ? !1
    : mt(n).position === "fixed" || wh(n, t);
}
function f1(e, t) {
  const n = t.get(e);
  if (n) return n;
  let r = Ao(e, [], !1).filter((i) => pt(i) && Lr(i) !== "body"),
    o = null;
  const l = mt(e).position === "fixed";
  let s = l ? mn(e) : e;
  for (; pt(s) && !Nr(s); ) {
    const i = mt(s),
      a = Kc(s);
    !a && i.position === "fixed" && (o = null),
      (
        l
          ? !a && !o
          : (!a &&
              i.position === "static" &&
              !!o &&
              ["absolute", "fixed"].includes(o.position)) ||
            (Bo(s) && !a && wh(e, s))
      )
        ? (r = r.filter((f) => f !== s))
        : (o = i),
      (s = mn(s));
  }
  return t.set(e, r), r;
}
function p1(e) {
  let { element: t, boundary: n, rootBoundary: r, strategy: o } = e;
  const s = [
      ...(n === "clippingAncestors"
        ? As(t)
          ? []
          : f1(t, this._c)
        : [].concat(n)),
      r,
    ],
    i = s[0],
    a = s.reduce((c, f) => {
      const p = Hd(t, f, o);
      return (
        (c.top = Ue(p.top, c.top)),
        (c.right = pn(p.right, c.right)),
        (c.bottom = pn(p.bottom, c.bottom)),
        (c.left = Ue(p.left, c.left)),
        c
      );
    }, Hd(t, i, o));
  return {
    width: a.right - a.left,
    height: a.bottom - a.top,
    x: a.left,
    y: a.top,
  };
}
function m1(e) {
  const { width: t, height: n } = gh(e);
  return { width: t, height: n };
}
function h1(e, t, n) {
  const r = jt(t),
    o = Rt(t),
    l = n === "fixed",
    s = zn(e, !0, l, t);
  let i = { scrollLeft: 0, scrollTop: 0 };
  const a = Nt(0);
  function c() {
    a.x = Xc(o);
  }
  if (r || (!r && !l))
    if (((Lr(t) !== "body" || Bo(o)) && (i = Ls(t)), r)) {
      const x = zn(t, !0, l, t);
      (a.x = x.x + t.clientLeft), (a.y = x.y + t.clientTop);
    } else o && c();
  l && !r && o && c();
  const f = o && !r && !l ? xh(o, i) : Nt(0),
    p = s.left + i.scrollLeft - a.x - f.x,
    m = s.top + i.scrollTop - a.y - f.y;
  return { x: p, y: m, width: s.width, height: s.height };
}
function wi(e) {
  return mt(e).position === "static";
}
function Gd(e, t) {
  if (!jt(e) || mt(e).position === "fixed") return null;
  if (t) return t(e);
  let n = e.offsetParent;
  return Rt(e) === n && (n = n.ownerDocument.body), n;
}
function bh(e, t) {
  const n = Ke(e);
  if (As(e)) return n;
  if (!jt(e)) {
    let o = mn(e);
    for (; o && !Nr(o); ) {
      if (pt(o) && !wi(o)) return o;
      o = mn(o);
    }
    return n;
  }
  let r = Gd(e, t);
  for (; r && r1(r) && wi(r); ) r = Gd(r, t);
  return r && Nr(r) && wi(r) && !Kc(r) ? n : r || o1(e) || n;
}
const v1 = async function (e) {
  const t = this.getOffsetParent || bh,
    n = this.getDimensions,
    r = await n(e.floating);
  return {
    reference: h1(e.reference, await t(e.floating), e.strategy),
    floating: { x: 0, y: 0, width: r.width, height: r.height },
  };
};
function g1(e) {
  return mt(e).direction === "rtl";
}
const y1 = {
  convertOffsetParentRelativeRectToViewportRelativeRect: i1,
  getDocumentElement: Rt,
  getClippingRect: p1,
  getOffsetParent: bh,
  getElementRects: v1,
  getClientRects: a1,
  getDimensions: m1,
  getScale: gr,
  isElement: pt,
  isRTL: g1,
};
function Sh(e, t) {
  return (
    e.x === t.x && e.y === t.y && e.width === t.width && e.height === t.height
  );
}
function x1(e, t) {
  let n = null,
    r;
  const o = Rt(e);
  function l() {
    var i;
    clearTimeout(r), (i = n) == null || i.disconnect(), (n = null);
  }
  function s(i, a) {
    i === void 0 && (i = !1), a === void 0 && (a = 1), l();
    const c = e.getBoundingClientRect(),
      { left: f, top: p, width: m, height: x } = c;
    if ((i || t(), !m || !x)) return;
    const w = cl(p),
      v = cl(o.clientWidth - (f + m)),
      b = cl(o.clientHeight - (p + x)),
      h = cl(f),
      y = {
        rootMargin: -w + "px " + -v + "px " + -b + "px " + -h + "px",
        threshold: Ue(0, pn(1, a)) || 1,
      };
    let S = !0;
    function C(E) {
      const k = E[0].intersectionRatio;
      if (k !== a) {
        if (!S) return s();
        k
          ? s(!1, k)
          : (r = setTimeout(() => {
              s(!1, 1e-7);
            }, 1e3));
      }
      k === 1 && !Sh(c, e.getBoundingClientRect()) && s(), (S = !1);
    }
    try {
      n = new IntersectionObserver(C, { ...y, root: o.ownerDocument });
    } catch {
      n = new IntersectionObserver(C, y);
    }
    n.observe(e);
  }
  return s(!0), l;
}
function w1(e, t, n, r) {
  r === void 0 && (r = {});
  const {
      ancestorScroll: o = !0,
      ancestorResize: l = !0,
      elementResize: s = typeof ResizeObserver == "function",
      layoutShift: i = typeof IntersectionObserver == "function",
      animationFrame: a = !1,
    } = r,
    c = Yc(e),
    f = o || l ? [...(c ? Ao(c) : []), ...Ao(t)] : [];
  f.forEach((h) => {
    o && h.addEventListener("scroll", n, { passive: !0 }),
      l && h.addEventListener("resize", n);
  });
  const p = c && i ? x1(c, n) : null;
  let m = -1,
    x = null;
  s &&
    ((x = new ResizeObserver((h) => {
      let [d] = h;
      d &&
        d.target === c &&
        x &&
        (x.unobserve(t),
        cancelAnimationFrame(m),
        (m = requestAnimationFrame(() => {
          var y;
          (y = x) == null || y.observe(t);
        }))),
        n();
    })),
    c && !a && x.observe(c),
    x.observe(t));
  let w,
    v = a ? zn(e) : null;
  a && b();
  function b() {
    const h = zn(e);
    v && !Sh(v, h) && n(), (v = h), (w = requestAnimationFrame(b));
  }
  return (
    n(),
    () => {
      var h;
      f.forEach((d) => {
        o && d.removeEventListener("scroll", n),
          l && d.removeEventListener("resize", n);
      }),
        p == null || p(),
        (h = x) == null || h.disconnect(),
        (x = null),
        a && cancelAnimationFrame(w);
    }
  );
}
const b1 = Jw,
  S1 = e1,
  C1 = Xw,
  k1 = n1,
  E1 = Zw,
  Kd = Yw,
  N1 = t1,
  j1 = (e, t, n) => {
    const r = new Map(),
      o = { platform: y1, ...n },
      l = { ...o.platform, _c: r };
    return Qw(e, t, { ...o, platform: l });
  };
var R1 = typeof document < "u",
  P1 = function () {},
  Nl = R1 ? g.useLayoutEffect : P1;
function os(e, t) {
  if (e === t) return !0;
  if (typeof e != typeof t) return !1;
  if (typeof e == "function" && e.toString() === t.toString()) return !0;
  let n, r, o;
  if (e && t && typeof e == "object") {
    if (Array.isArray(e)) {
      if (((n = e.length), n !== t.length)) return !1;
      for (r = n; r-- !== 0; ) if (!os(e[r], t[r])) return !1;
      return !0;
    }
    if (((o = Object.keys(e)), (n = o.length), n !== Object.keys(t).length))
      return !1;
    for (r = n; r-- !== 0; ) if (!{}.hasOwnProperty.call(t, o[r])) return !1;
    for (r = n; r-- !== 0; ) {
      const l = o[r];
      if (!(l === "_owner" && e.$$typeof) && !os(e[l], t[l])) return !1;
    }
    return !0;
  }
  return e !== e && t !== t;
}
function Ch(e) {
  return typeof window > "u"
    ? 1
    : (e.ownerDocument.defaultView || window).devicePixelRatio || 1;
}
function Qd(e, t) {
  const n = Ch(e);
  return Math.round(t * n) / n;
}
function bi(e) {
  const t = g.useRef(e);
  return (
    Nl(() => {
      t.current = e;
    }),
    t
  );
}
function _1(e) {
  e === void 0 && (e = {});
  const {
      placement: t = "bottom",
      strategy: n = "absolute",
      middleware: r = [],
      platform: o,
      elements: { reference: l, floating: s } = {},
      transform: i = !0,
      whileElementsMounted: a,
      open: c,
    } = e,
    [f, p] = g.useState({
      x: 0,
      y: 0,
      strategy: n,
      placement: t,
      middlewareData: {},
      isPositioned: !1,
    }),
    [m, x] = g.useState(r);
  os(m, r) || x(r);
  const [w, v] = g.useState(null),
    [b, h] = g.useState(null),
    d = g.useCallback((j) => {
      j !== E.current && ((E.current = j), v(j));
    }, []),
    y = g.useCallback((j) => {
      j !== k.current && ((k.current = j), h(j));
    }, []),
    S = l || w,
    C = s || b,
    E = g.useRef(null),
    k = g.useRef(null),
    N = g.useRef(f),
    _ = a != null,
    P = bi(a),
    z = bi(o),
    L = bi(c),
    $ = g.useCallback(() => {
      if (!E.current || !k.current) return;
      const j = { placement: t, strategy: n, middleware: m };
      z.current && (j.platform = z.current),
        j1(E.current, k.current, j).then((I) => {
          const O = { ...I, isPositioned: L.current !== !1 };
          V.current &&
            !os(N.current, O) &&
            ((N.current = O),
            _r.flushSync(() => {
              p(O);
            }));
        });
    }, [m, t, n, z, L]);
  Nl(() => {
    c === !1 &&
      N.current.isPositioned &&
      ((N.current.isPositioned = !1), p((j) => ({ ...j, isPositioned: !1 })));
  }, [c]);
  const V = g.useRef(!1);
  Nl(
    () => (
      (V.current = !0),
      () => {
        V.current = !1;
      }
    ),
    []
  ),
    Nl(() => {
      if ((S && (E.current = S), C && (k.current = C), S && C)) {
        if (P.current) return P.current(S, C, $);
        $();
      }
    }, [S, C, $, P, _]);
  const H = g.useMemo(
      () => ({ reference: E, floating: k, setReference: d, setFloating: y }),
      [d, y]
    ),
    D = g.useMemo(() => ({ reference: S, floating: C }), [S, C]),
    B = g.useMemo(() => {
      const j = { position: n, left: 0, top: 0 };
      if (!D.floating) return j;
      const I = Qd(D.floating, f.x),
        O = Qd(D.floating, f.y);
      return i
        ? {
            ...j,
            transform: "translate(" + I + "px, " + O + "px)",
            ...(Ch(D.floating) >= 1.5 && { willChange: "transform" }),
          }
        : { position: n, left: I, top: O };
    }, [n, i, D.floating, f.x, f.y]);
  return g.useMemo(
    () => ({ ...f, update: $, refs: H, elements: D, floatingStyles: B }),
    [f, $, H, D, B]
  );
}
const I1 = (e) => {
    function t(n) {
      return {}.hasOwnProperty.call(n, "current");
    }
    return {
      name: "arrow",
      options: e,
      fn(n) {
        const { element: r, padding: o } = typeof e == "function" ? e(n) : e;
        return r && t(r)
          ? r.current != null
            ? Kd({ element: r.current, padding: o }).fn(n)
            : {}
          : r
          ? Kd({ element: r, padding: o }).fn(n)
          : {};
      },
    };
  },
  T1 = (e, t) => ({ ...b1(e), options: [e, t] }),
  A1 = (e, t) => ({ ...S1(e), options: [e, t] }),
  L1 = (e, t) => ({ ...N1(e), options: [e, t] }),
  M1 = (e, t) => ({ ...C1(e), options: [e, t] }),
  O1 = (e, t) => ({ ...k1(e), options: [e, t] }),
  z1 = (e, t) => ({ ...E1(e), options: [e, t] }),
  D1 = (e, t) => ({ ...I1(e), options: [e, t] });
var F1 = "Arrow",
  kh = g.forwardRef((e, t) => {
    const { children: n, width: r = 10, height: o = 5, ...l } = e;
    return u.jsx(Q.svg, {
      ...l,
      ref: t,
      width: r,
      height: o,
      viewBox: "0 0 30 10",
      preserveAspectRatio: "none",
      children: e.asChild ? n : u.jsx("polygon", { points: "0,0 30,0 15,10" }),
    });
  });
kh.displayName = F1;
var V1 = kh;
function Zc(e) {
  const [t, n] = g.useState(void 0);
  return (
    ke(() => {
      if (e) {
        n({ width: e.offsetWidth, height: e.offsetHeight });
        const r = new ResizeObserver((o) => {
          if (!Array.isArray(o) || !o.length) return;
          const l = o[0];
          let s, i;
          if ("borderBoxSize" in l) {
            const a = l.borderBoxSize,
              c = Array.isArray(a) ? a[0] : a;
            (s = c.inlineSize), (i = c.blockSize);
          } else (s = e.offsetWidth), (i = e.offsetHeight);
          n({ width: s, height: i });
        });
        return r.observe(e, { box: "border-box" }), () => r.unobserve(e);
      } else n(void 0);
    }, [e]),
    t
  );
}
var qc = "Popper",
  [Eh, Nh] = Bt(qc),
  [$1, jh] = Eh(qc),
  Rh = (e) => {
    const { __scopePopper: t, children: n } = e,
      [r, o] = g.useState(null);
    return u.jsx($1, { scope: t, anchor: r, onAnchorChange: o, children: n });
  };
Rh.displayName = qc;
var Ph = "PopperAnchor",
  _h = g.forwardRef((e, t) => {
    const { __scopePopper: n, virtualRef: r, ...o } = e,
      l = jh(Ph, n),
      s = g.useRef(null),
      i = oe(t, s);
    return (
      g.useEffect(() => {
        l.onAnchorChange((r == null ? void 0 : r.current) || s.current);
      }),
      r ? null : u.jsx(Q.div, { ...o, ref: i })
    );
  });
_h.displayName = Ph;
var Jc = "PopperContent",
  [B1, W1] = Eh(Jc),
  Ih = g.forwardRef((e, t) => {
    var F, le, Ee, ne, ee, te;
    const {
        __scopePopper: n,
        side: r = "bottom",
        sideOffset: o = 0,
        align: l = "center",
        alignOffset: s = 0,
        arrowPadding: i = 0,
        avoidCollisions: a = !0,
        collisionBoundary: c = [],
        collisionPadding: f = 0,
        sticky: p = "partial",
        hideWhenDetached: m = !1,
        updatePositionStrategy: x = "optimized",
        onPlaced: w,
        ...v
      } = e,
      b = jh(Jc, n),
      [h, d] = g.useState(null),
      y = oe(t, (Be) => d(Be)),
      [S, C] = g.useState(null),
      E = Zc(S),
      k = (E == null ? void 0 : E.width) ?? 0,
      N = (E == null ? void 0 : E.height) ?? 0,
      _ = r + (l !== "center" ? "-" + l : ""),
      P =
        typeof f == "number"
          ? f
          : { top: 0, right: 0, bottom: 0, left: 0, ...f },
      z = Array.isArray(c) ? c : [c],
      L = z.length > 0,
      $ = { padding: P, boundary: z.filter(H1), altBoundary: L },
      {
        refs: V,
        floatingStyles: H,
        placement: D,
        isPositioned: B,
        middlewareData: j,
      } = _1({
        strategy: "fixed",
        placement: _,
        whileElementsMounted: (...Be) =>
          w1(...Be, { animationFrame: x === "always" }),
        elements: { reference: b.anchor },
        middleware: [
          T1({ mainAxis: o + N, alignmentAxis: s }),
          a &&
            A1({
              mainAxis: !0,
              crossAxis: !1,
              limiter: p === "partial" ? L1() : void 0,
              ...$,
            }),
          a && M1({ ...$ }),
          O1({
            ...$,
            apply: ({
              elements: Be,
              rects: yt,
              availableWidth: Or,
              availableHeight: zr,
            }) => {
              const { width: Dr, height: pg } = yt.reference,
                Uo = Be.floating.style;
              Uo.setProperty("--radix-popper-available-width", `${Or}px`),
                Uo.setProperty("--radix-popper-available-height", `${zr}px`),
                Uo.setProperty("--radix-popper-anchor-width", `${Dr}px`),
                Uo.setProperty("--radix-popper-anchor-height", `${pg}px`);
            },
          }),
          S && D1({ element: S, padding: i }),
          G1({ arrowWidth: k, arrowHeight: N }),
          m && z1({ strategy: "referenceHidden", ...$ }),
        ],
      }),
      [I, O] = Lh(D),
      A = fn(w);
    ke(() => {
      B && (A == null || A());
    }, [B, A]);
    const Y = (F = j.arrow) == null ? void 0 : F.x,
      J = (le = j.arrow) == null ? void 0 : le.y,
      ye = ((Ee = j.arrow) == null ? void 0 : Ee.centerOffset) !== 0,
      [gt, _e] = g.useState();
    return (
      ke(() => {
        h && _e(window.getComputedStyle(h).zIndex);
      }, [h]),
      u.jsx("div", {
        ref: V.setFloating,
        "data-radix-popper-content-wrapper": "",
        style: {
          ...H,
          transform: B ? H.transform : "translate(0, -200%)",
          minWidth: "max-content",
          zIndex: gt,
          "--radix-popper-transform-origin": [
            (ne = j.transformOrigin) == null ? void 0 : ne.x,
            (ee = j.transformOrigin) == null ? void 0 : ee.y,
          ].join(" "),
          ...(((te = j.hide) == null ? void 0 : te.referenceHidden) && {
            visibility: "hidden",
            pointerEvents: "none",
          }),
        },
        dir: e.dir,
        children: u.jsx(B1, {
          scope: n,
          placedSide: I,
          onArrowChange: C,
          arrowX: Y,
          arrowY: J,
          shouldHideArrow: ye,
          children: u.jsx(Q.div, {
            "data-side": I,
            "data-align": O,
            ...v,
            ref: y,
            style: { ...v.style, animation: B ? void 0 : "none" },
          }),
        }),
      })
    );
  });
Ih.displayName = Jc;
var Th = "PopperArrow",
  U1 = { top: "bottom", right: "left", bottom: "top", left: "right" },
  Ah = g.forwardRef(function (t, n) {
    const { __scopePopper: r, ...o } = t,
      l = W1(Th, r),
      s = U1[l.placedSide];
    return u.jsx("span", {
      ref: l.onArrowChange,
      style: {
        position: "absolute",
        left: l.arrowX,
        top: l.arrowY,
        [s]: 0,
        transformOrigin: {
          top: "",
          right: "0 0",
          bottom: "center 0",
          left: "100% 0",
        }[l.placedSide],
        transform: {
          top: "translateY(100%)",
          right: "translateY(50%) rotate(90deg) translateX(-50%)",
          bottom: "rotate(180deg)",
          left: "translateY(50%) rotate(-90deg) translateX(50%)",
        }[l.placedSide],
        visibility: l.shouldHideArrow ? "hidden" : void 0,
      },
      children: u.jsx(V1, {
        ...o,
        ref: n,
        style: { ...o.style, display: "block" },
      }),
    });
  });
Ah.displayName = Th;
function H1(e) {
  return e !== null;
}
var G1 = (e) => ({
  name: "transformOrigin",
  options: e,
  fn(t) {
    var b, h, d;
    const { placement: n, rects: r, middlewareData: o } = t,
      s = ((b = o.arrow) == null ? void 0 : b.centerOffset) !== 0,
      i = s ? 0 : e.arrowWidth,
      a = s ? 0 : e.arrowHeight,
      [c, f] = Lh(n),
      p = { start: "0%", center: "50%", end: "100%" }[f],
      m = (((h = o.arrow) == null ? void 0 : h.x) ?? 0) + i / 2,
      x = (((d = o.arrow) == null ? void 0 : d.y) ?? 0) + a / 2;
    let w = "",
      v = "";
    return (
      c === "bottom"
        ? ((w = s ? p : `${m}px`), (v = `${-a}px`))
        : c === "top"
        ? ((w = s ? p : `${m}px`), (v = `${r.floating.height + a}px`))
        : c === "right"
        ? ((w = `${-a}px`), (v = s ? p : `${x}px`))
        : c === "left" &&
          ((w = `${r.floating.width + a}px`), (v = s ? p : `${x}px`)),
      { data: { x: w, y: v } }
    );
  },
});
function Lh(e) {
  const [t, n = "center"] = e.split("-");
  return [t, n];
}
var K1 = Rh,
  Q1 = _h,
  Y1 = Ih,
  X1 = Ah,
  Z1 = "Portal",
  Mh = g.forwardRef((e, t) => {
    var i;
    const { container: n, ...r } = e,
      [o, l] = g.useState(!1);
    ke(() => l(!0), []);
    const s =
      n ||
      (o &&
        ((i = globalThis == null ? void 0 : globalThis.document) == null
          ? void 0
          : i.body));
    return s ? Vx.createPortal(u.jsx(Q.div, { ...r, ref: t }), s) : null;
  });
Mh.displayName = Z1;
function eu(e) {
  const t = g.useRef({ value: e, previous: e });
  return g.useMemo(
    () => (
      t.current.value !== e &&
        ((t.current.previous = t.current.value), (t.current.value = e)),
      t.current.previous
    ),
    [e]
  );
}
var Oh = Object.freeze({
    position: "absolute",
    border: 0,
    width: 1,
    height: 1,
    padding: 0,
    margin: -1,
    overflow: "hidden",
    clip: "rect(0, 0, 0, 0)",
    whiteSpace: "nowrap",
    wordWrap: "normal",
  }),
  q1 = "VisuallyHidden",
  J1 = g.forwardRef((e, t) =>
    u.jsx(Q.span, { ...e, ref: t, style: { ...Oh, ...e.style } })
  );
J1.displayName = q1;
var eb = function (e) {
    if (typeof document > "u") return null;
    var t = Array.isArray(e) ? e[0] : e;
    return t.ownerDocument.body;
  },
  Gn = new WeakMap(),
  ul = new WeakMap(),
  dl = {},
  Si = 0,
  zh = function (e) {
    return e && (e.host || zh(e.parentNode));
  },
  tb = function (e, t) {
    return t
      .map(function (n) {
        if (e.contains(n)) return n;
        var r = zh(n);
        return r && e.contains(r)
          ? r
          : (console.error(
              "aria-hidden",
              n,
              "in not contained inside",
              e,
              ". Doing nothing"
            ),
            null);
      })
      .filter(function (n) {
        return !!n;
      });
  },
  nb = function (e, t, n, r) {
    var o = tb(t, Array.isArray(e) ? e : [e]);
    dl[n] || (dl[n] = new WeakMap());
    var l = dl[n],
      s = [],
      i = new Set(),
      a = new Set(o),
      c = function (p) {
        !p || i.has(p) || (i.add(p), c(p.parentNode));
      };
    o.forEach(c);
    var f = function (p) {
      !p ||
        a.has(p) ||
        Array.prototype.forEach.call(p.children, function (m) {
          if (i.has(m)) f(m);
          else
            try {
              var x = m.getAttribute(r),
                w = x !== null && x !== "false",
                v = (Gn.get(m) || 0) + 1,
                b = (l.get(m) || 0) + 1;
              Gn.set(m, v),
                l.set(m, b),
                s.push(m),
                v === 1 && w && ul.set(m, !0),
                b === 1 && m.setAttribute(n, "true"),
                w || m.setAttribute(r, "true");
            } catch (h) {
              console.error("aria-hidden: cannot operate on ", m, h);
            }
        });
    };
    return (
      f(t),
      i.clear(),
      Si++,
      function () {
        s.forEach(function (p) {
          var m = Gn.get(p) - 1,
            x = l.get(p) - 1;
          Gn.set(p, m),
            l.set(p, x),
            m || (ul.has(p) || p.removeAttribute(r), ul.delete(p)),
            x || p.removeAttribute(n);
        }),
          Si--,
          Si ||
            ((Gn = new WeakMap()),
            (Gn = new WeakMap()),
            (ul = new WeakMap()),
            (dl = {}));
      }
    );
  },
  rb = function (e, t, n) {
    n === void 0 && (n = "data-aria-hidden");
    var r = Array.from(Array.isArray(e) ? e : [e]),
      o = eb(e);
    return o
      ? (r.push.apply(r, Array.from(o.querySelectorAll("[aria-live], script"))),
        nb(r, o, n, "aria-hidden"))
      : function () {
          return null;
        };
  },
  St = function () {
    return (
      (St =
        Object.assign ||
        function (t) {
          for (var n, r = 1, o = arguments.length; r < o; r++) {
            n = arguments[r];
            for (var l in n)
              Object.prototype.hasOwnProperty.call(n, l) && (t[l] = n[l]);
          }
          return t;
        }),
      St.apply(this, arguments)
    );
  };
function Dh(e, t) {
  var n = {};
  for (var r in e)
    Object.prototype.hasOwnProperty.call(e, r) &&
      t.indexOf(r) < 0 &&
      (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++)
      t.indexOf(r[o]) < 0 &&
        Object.prototype.propertyIsEnumerable.call(e, r[o]) &&
        (n[r[o]] = e[r[o]]);
  return n;
}
function ob(e, t, n) {
  for (var r = 0, o = t.length, l; r < o; r++)
    (l || !(r in t)) &&
      (l || (l = Array.prototype.slice.call(t, 0, r)), (l[r] = t[r]));
  return e.concat(l || Array.prototype.slice.call(t));
}
var jl = "right-scroll-bar-position",
  Rl = "width-before-scroll-bar",
  lb = "with-scroll-bars-hidden",
  sb = "--removed-body-scroll-bar-size";
function Ci(e, t) {
  return typeof e == "function" ? e(t) : e && (e.current = t), e;
}
function ib(e, t) {
  var n = g.useState(function () {
    return {
      value: e,
      callback: t,
      facade: {
        get current() {
          return n.value;
        },
        set current(r) {
          var o = n.value;
          o !== r && ((n.value = r), n.callback(r, o));
        },
      },
    };
  })[0];
  return (n.callback = t), n.facade;
}
var ab = typeof window < "u" ? g.useLayoutEffect : g.useEffect,
  Yd = new WeakMap();
function cb(e, t) {
  var n = ib(null, function (r) {
    return e.forEach(function (o) {
      return Ci(o, r);
    });
  });
  return (
    ab(
      function () {
        var r = Yd.get(n);
        if (r) {
          var o = new Set(r),
            l = new Set(e),
            s = n.current;
          o.forEach(function (i) {
            l.has(i) || Ci(i, null);
          }),
            l.forEach(function (i) {
              o.has(i) || Ci(i, s);
            });
        }
        Yd.set(n, e);
      },
      [e]
    ),
    n
  );
}
function ub(e) {
  return e;
}
function db(e, t) {
  t === void 0 && (t = ub);
  var n = [],
    r = !1,
    o = {
      read: function () {
        if (r)
          throw new Error(
            "Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`."
          );
        return n.length ? n[n.length - 1] : e;
      },
      useMedium: function (l) {
        var s = t(l, r);
        return (
          n.push(s),
          function () {
            n = n.filter(function (i) {
              return i !== s;
            });
          }
        );
      },
      assignSyncMedium: function (l) {
        for (r = !0; n.length; ) {
          var s = n;
          (n = []), s.forEach(l);
        }
        n = {
          push: function (i) {
            return l(i);
          },
          filter: function () {
            return n;
          },
        };
      },
      assignMedium: function (l) {
        r = !0;
        var s = [];
        if (n.length) {
          var i = n;
          (n = []), i.forEach(l), (s = n);
        }
        var a = function () {
            var f = s;
            (s = []), f.forEach(l);
          },
          c = function () {
            return Promise.resolve().then(a);
          };
        c(),
          (n = {
            push: function (f) {
              s.push(f), c();
            },
            filter: function (f) {
              return (s = s.filter(f)), n;
            },
          });
      },
    };
  return o;
}
function fb(e) {
  e === void 0 && (e = {});
  var t = db(null);
  return (t.options = St({ async: !0, ssr: !1 }, e)), t;
}
var Fh = function (e) {
  var t = e.sideCar,
    n = Dh(e, ["sideCar"]);
  if (!t)
    throw new Error(
      "Sidecar: please provide `sideCar` property to import the right car"
    );
  var r = t.read();
  if (!r) throw new Error("Sidecar medium not found");
  return g.createElement(r, St({}, n));
};
Fh.isSideCarExport = !0;
function pb(e, t) {
  return e.useMedium(t), Fh;
}
var Vh = fb(),
  ki = function () {},
  Ms = g.forwardRef(function (e, t) {
    var n = g.useRef(null),
      r = g.useState({
        onScrollCapture: ki,
        onWheelCapture: ki,
        onTouchMoveCapture: ki,
      }),
      o = r[0],
      l = r[1],
      s = e.forwardProps,
      i = e.children,
      a = e.className,
      c = e.removeScrollBar,
      f = e.enabled,
      p = e.shards,
      m = e.sideCar,
      x = e.noRelative,
      w = e.noIsolation,
      v = e.inert,
      b = e.allowPinchZoom,
      h = e.as,
      d = h === void 0 ? "div" : h,
      y = e.gapMode,
      S = Dh(e, [
        "forwardProps",
        "children",
        "className",
        "removeScrollBar",
        "enabled",
        "shards",
        "sideCar",
        "noRelative",
        "noIsolation",
        "inert",
        "allowPinchZoom",
        "as",
        "gapMode",
      ]),
      C = m,
      E = cb([n, t]),
      k = St(St({}, S), o);
    return g.createElement(
      g.Fragment,
      null,
      f &&
        g.createElement(C, {
          sideCar: Vh,
          removeScrollBar: c,
          shards: p,
          noRelative: x,
          noIsolation: w,
          inert: v,
          setCallbacks: l,
          allowPinchZoom: !!b,
          lockRef: n,
          gapMode: y,
        }),
      s
        ? g.cloneElement(g.Children.only(i), St(St({}, k), { ref: E }))
        : g.createElement(d, St({}, k, { className: a, ref: E }), i)
    );
  });
Ms.defaultProps = { enabled: !0, removeScrollBar: !0, inert: !1 };
Ms.classNames = { fullWidth: Rl, zeroRight: jl };
var mb = function () {
  if (typeof __webpack_nonce__ < "u") return __webpack_nonce__;
};
function hb() {
  if (!document) return null;
  var e = document.createElement("style");
  e.type = "text/css";
  var t = mb();
  return t && e.setAttribute("nonce", t), e;
}
function vb(e, t) {
  e.styleSheet
    ? (e.styleSheet.cssText = t)
    : e.appendChild(document.createTextNode(t));
}
function gb(e) {
  var t = document.head || document.getElementsByTagName("head")[0];
  t.appendChild(e);
}
var yb = function () {
    var e = 0,
      t = null;
    return {
      add: function (n) {
        e == 0 && (t = hb()) && (vb(t, n), gb(t)), e++;
      },
      remove: function () {
        e--,
          !e && t && (t.parentNode && t.parentNode.removeChild(t), (t = null));
      },
    };
  },
  xb = function () {
    var e = yb();
    return function (t, n) {
      g.useEffect(
        function () {
          return (
            e.add(t),
            function () {
              e.remove();
            }
          );
        },
        [t && n]
      );
    };
  },
  $h = function () {
    var e = xb(),
      t = function (n) {
        var r = n.styles,
          o = n.dynamic;
        return e(r, o), null;
      };
    return t;
  },
  wb = { left: 0, top: 0, right: 0, gap: 0 },
  Ei = function (e) {
    return parseInt(e || "", 10) || 0;
  },
  bb = function (e) {
    var t = window.getComputedStyle(document.body),
      n = t[e === "padding" ? "paddingLeft" : "marginLeft"],
      r = t[e === "padding" ? "paddingTop" : "marginTop"],
      o = t[e === "padding" ? "paddingRight" : "marginRight"];
    return [Ei(n), Ei(r), Ei(o)];
  },
  Sb = function (e) {
    if ((e === void 0 && (e = "margin"), typeof window > "u")) return wb;
    var t = bb(e),
      n = document.documentElement.clientWidth,
      r = window.innerWidth;
    return {
      left: t[0],
      top: t[1],
      right: t[2],
      gap: Math.max(0, r - n + t[2] - t[0]),
    };
  },
  Cb = $h(),
  yr = "data-scroll-locked",
  kb = function (e, t, n, r) {
    var o = e.left,
      l = e.top,
      s = e.right,
      i = e.gap;
    return (
      n === void 0 && (n = "margin"),
      `
  .`
        .concat(
          lb,
          ` {
   overflow: hidden `
        )
        .concat(
          r,
          `;
   padding-right: `
        )
        .concat(i, "px ")
        .concat(
          r,
          `;
  }
  body[`
        )
        .concat(
          yr,
          `] {
    overflow: hidden `
        )
        .concat(
          r,
          `;
    overscroll-behavior: contain;
    `
        )
        .concat(
          [
            t && "position: relative ".concat(r, ";"),
            n === "margin" &&
              `
    padding-left: `
                .concat(
                  o,
                  `px;
    padding-top: `
                )
                .concat(
                  l,
                  `px;
    padding-right: `
                )
                .concat(
                  s,
                  `px;
    margin-left:0;
    margin-top:0;
    margin-right: `
                )
                .concat(i, "px ")
                .concat(
                  r,
                  `;
    `
                ),
            n === "padding" &&
              "padding-right: ".concat(i, "px ").concat(r, ";"),
          ]
            .filter(Boolean)
            .join(""),
          `
  }
  
  .`
        )
        .concat(
          jl,
          ` {
    right: `
        )
        .concat(i, "px ")
        .concat(
          r,
          `;
  }
  
  .`
        )
        .concat(
          Rl,
          ` {
    margin-right: `
        )
        .concat(i, "px ")
        .concat(
          r,
          `;
  }
  
  .`
        )
        .concat(jl, " .")
        .concat(
          jl,
          ` {
    right: 0 `
        )
        .concat(
          r,
          `;
  }
  
  .`
        )
        .concat(Rl, " .")
        .concat(
          Rl,
          ` {
    margin-right: 0 `
        )
        .concat(
          r,
          `;
  }
  
  body[`
        )
        .concat(
          yr,
          `] {
    `
        )
        .concat(sb, ": ")
        .concat(
          i,
          `px;
  }
`
        )
    );
  },
  Xd = function () {
    var e = parseInt(document.body.getAttribute(yr) || "0", 10);
    return isFinite(e) ? e : 0;
  },
  Eb = function () {
    g.useEffect(function () {
      return (
        document.body.setAttribute(yr, (Xd() + 1).toString()),
        function () {
          var e = Xd() - 1;
          e <= 0
            ? document.body.removeAttribute(yr)
            : document.body.setAttribute(yr, e.toString());
        }
      );
    }, []);
  },
  Nb = function (e) {
    var t = e.noRelative,
      n = e.noImportant,
      r = e.gapMode,
      o = r === void 0 ? "margin" : r;
    Eb();
    var l = g.useMemo(
      function () {
        return Sb(o);
      },
      [o]
    );
    return g.createElement(Cb, { styles: kb(l, !t, o, n ? "" : "!important") });
  },
  Pa = !1;
if (typeof window < "u")
  try {
    var fl = Object.defineProperty({}, "passive", {
      get: function () {
        return (Pa = !0), !0;
      },
    });
    window.addEventListener("test", fl, fl),
      window.removeEventListener("test", fl, fl);
  } catch {
    Pa = !1;
  }
var Kn = Pa ? { passive: !1 } : !1,
  jb = function (e) {
    return e.tagName === "TEXTAREA";
  },
  Bh = function (e, t) {
    if (!(e instanceof Element)) return !1;
    var n = window.getComputedStyle(e);
    return (
      n[t] !== "hidden" &&
      !(n.overflowY === n.overflowX && !jb(e) && n[t] === "visible")
    );
  },
  Rb = function (e) {
    return Bh(e, "overflowY");
  },
  Pb = function (e) {
    return Bh(e, "overflowX");
  },
  Zd = function (e, t) {
    var n = t.ownerDocument,
      r = t;
    do {
      typeof ShadowRoot < "u" && r instanceof ShadowRoot && (r = r.host);
      var o = Wh(e, r);
      if (o) {
        var l = Uh(e, r),
          s = l[1],
          i = l[2];
        if (s > i) return !0;
      }
      r = r.parentNode;
    } while (r && r !== n.body);
    return !1;
  },
  _b = function (e) {
    var t = e.scrollTop,
      n = e.scrollHeight,
      r = e.clientHeight;
    return [t, n, r];
  },
  Ib = function (e) {
    var t = e.scrollLeft,
      n = e.scrollWidth,
      r = e.clientWidth;
    return [t, n, r];
  },
  Wh = function (e, t) {
    return e === "v" ? Rb(t) : Pb(t);
  },
  Uh = function (e, t) {
    return e === "v" ? _b(t) : Ib(t);
  },
  Tb = function (e, t) {
    return e === "h" && t === "rtl" ? -1 : 1;
  },
  Ab = function (e, t, n, r, o) {
    var l = Tb(e, window.getComputedStyle(t).direction),
      s = l * r,
      i = n.target,
      a = t.contains(i),
      c = !1,
      f = s > 0,
      p = 0,
      m = 0;
    do {
      if (!i) break;
      var x = Uh(e, i),
        w = x[0],
        v = x[1],
        b = x[2],
        h = v - b - l * w;
      (w || h) && Wh(e, i) && ((p += h), (m += w));
      var d = i.parentNode;
      i = d && d.nodeType === Node.DOCUMENT_FRAGMENT_NODE ? d.host : d;
    } while ((!a && i !== document.body) || (a && (t.contains(i) || t === i)));
    return ((f && Math.abs(p) < 1) || (!f && Math.abs(m) < 1)) && (c = !0), c;
  },
  pl = function (e) {
    return "changedTouches" in e
      ? [e.changedTouches[0].clientX, e.changedTouches[0].clientY]
      : [0, 0];
  },
  qd = function (e) {
    return [e.deltaX, e.deltaY];
  },
  Jd = function (e) {
    return e && "current" in e ? e.current : e;
  },
  Lb = function (e, t) {
    return e[0] === t[0] && e[1] === t[1];
  },
  Mb = function (e) {
    return `
  .block-interactivity-`
      .concat(
        e,
        ` {pointer-events: none;}
  .allow-interactivity-`
      )
      .concat(
        e,
        ` {pointer-events: all;}
`
      );
  },
  Ob = 0,
  Qn = [];
function zb(e) {
  var t = g.useRef([]),
    n = g.useRef([0, 0]),
    r = g.useRef(),
    o = g.useState(Ob++)[0],
    l = g.useState($h)[0],
    s = g.useRef(e);
  g.useEffect(
    function () {
      s.current = e;
    },
    [e]
  ),
    g.useEffect(
      function () {
        if (e.inert) {
          document.body.classList.add("block-interactivity-".concat(o));
          var v = ob([e.lockRef.current], (e.shards || []).map(Jd)).filter(
            Boolean
          );
          return (
            v.forEach(function (b) {
              return b.classList.add("allow-interactivity-".concat(o));
            }),
            function () {
              document.body.classList.remove("block-interactivity-".concat(o)),
                v.forEach(function (b) {
                  return b.classList.remove("allow-interactivity-".concat(o));
                });
            }
          );
        }
      },
      [e.inert, e.lockRef.current, e.shards]
    );
  var i = g.useCallback(function (v, b) {
      if (
        ("touches" in v && v.touches.length === 2) ||
        (v.type === "wheel" && v.ctrlKey)
      )
        return !s.current.allowPinchZoom;
      var h = pl(v),
        d = n.current,
        y = "deltaX" in v ? v.deltaX : d[0] - h[0],
        S = "deltaY" in v ? v.deltaY : d[1] - h[1],
        C,
        E = v.target,
        k = Math.abs(y) > Math.abs(S) ? "h" : "v";
      if ("touches" in v && k === "h" && E.type === "range") return !1;
      var N = Zd(k, E);
      if (!N) return !0;
      if ((N ? (C = k) : ((C = k === "v" ? "h" : "v"), (N = Zd(k, E))), !N))
        return !1;
      if (
        (!r.current && "changedTouches" in v && (y || S) && (r.current = C), !C)
      )
        return !0;
      var _ = r.current || C;
      return Ab(_, b, v, _ === "h" ? y : S);
    }, []),
    a = g.useCallback(function (v) {
      var b = v;
      if (!(!Qn.length || Qn[Qn.length - 1] !== l)) {
        var h = "deltaY" in b ? qd(b) : pl(b),
          d = t.current.filter(function (C) {
            return (
              C.name === b.type &&
              (C.target === b.target || b.target === C.shadowParent) &&
              Lb(C.delta, h)
            );
          })[0];
        if (d && d.should) {
          b.cancelable && b.preventDefault();
          return;
        }
        if (!d) {
          var y = (s.current.shards || [])
              .map(Jd)
              .filter(Boolean)
              .filter(function (C) {
                return C.contains(b.target);
              }),
            S = y.length > 0 ? i(b, y[0]) : !s.current.noIsolation;
          S && b.cancelable && b.preventDefault();
        }
      }
    }, []),
    c = g.useCallback(function (v, b, h, d) {
      var y = { name: v, delta: b, target: h, should: d, shadowParent: Db(h) };
      t.current.push(y),
        setTimeout(function () {
          t.current = t.current.filter(function (S) {
            return S !== y;
          });
        }, 1);
    }, []),
    f = g.useCallback(function (v) {
      (n.current = pl(v)), (r.current = void 0);
    }, []),
    p = g.useCallback(function (v) {
      c(v.type, qd(v), v.target, i(v, e.lockRef.current));
    }, []),
    m = g.useCallback(function (v) {
      c(v.type, pl(v), v.target, i(v, e.lockRef.current));
    }, []);
  g.useEffect(function () {
    return (
      Qn.push(l),
      e.setCallbacks({
        onScrollCapture: p,
        onWheelCapture: p,
        onTouchMoveCapture: m,
      }),
      document.addEventListener("wheel", a, Kn),
      document.addEventListener("touchmove", a, Kn),
      document.addEventListener("touchstart", f, Kn),
      function () {
        (Qn = Qn.filter(function (v) {
          return v !== l;
        })),
          document.removeEventListener("wheel", a, Kn),
          document.removeEventListener("touchmove", a, Kn),
          document.removeEventListener("touchstart", f, Kn);
      }
    );
  }, []);
  var x = e.removeScrollBar,
    w = e.inert;
  return g.createElement(
    g.Fragment,
    null,
    w ? g.createElement(l, { styles: Mb(o) }) : null,
    x
      ? g.createElement(Nb, { noRelative: e.noRelative, gapMode: e.gapMode })
      : null
  );
}
function Db(e) {
  for (var t = null; e !== null; )
    e instanceof ShadowRoot && ((t = e.host), (e = e.host)), (e = e.parentNode);
  return t;
}
var Fb = pb(Vh, zb),
  Hh = g.forwardRef(function (e, t) {
    return g.createElement(Ms, St({}, e, { ref: t, sideCar: Fb }));
  });
Hh.classNames = Ms.classNames;
var Vb = [" ", "Enter", "ArrowUp", "ArrowDown"],
  $b = [" ", "Enter"],
  Dn = "Select",
  [Os, zs, Bb] = Mc(Dn),
  [Mr, MC] = Bt(Dn, [Bb, Nh]),
  Ds = Nh(),
  [Wb, yn] = Mr(Dn),
  [Ub, Hb] = Mr(Dn),
  Gh = (e) => {
    const {
        __scopeSelect: t,
        children: n,
        open: r,
        defaultOpen: o,
        onOpenChange: l,
        value: s,
        defaultValue: i,
        onValueChange: a,
        dir: c,
        name: f,
        autoComplete: p,
        disabled: m,
        required: x,
        form: w,
      } = e,
      v = Ds(t),
      [b, h] = g.useState(null),
      [d, y] = g.useState(null),
      [S, C] = g.useState(!1),
      E = Ps(c),
      [k, N] = dn({ prop: r, defaultProp: o ?? !1, onChange: l, caller: Dn }),
      [_, P] = dn({ prop: s, defaultProp: i, onChange: a, caller: Dn }),
      z = g.useRef(null),
      L = b ? w || !!b.closest("form") : !0,
      [$, V] = g.useState(new Set()),
      H = Array.from($)
        .map((D) => D.props.value)
        .join(";");
    return u.jsx(K1, {
      ...v,
      children: u.jsxs(Wb, {
        required: x,
        scope: t,
        trigger: b,
        onTriggerChange: h,
        valueNode: d,
        onValueNodeChange: y,
        valueNodeHasChildren: S,
        onValueNodeHasChildrenChange: C,
        contentId: Tr(),
        value: _,
        onValueChange: P,
        open: k,
        onOpenChange: N,
        dir: E,
        triggerPointerDownPosRef: z,
        disabled: m,
        children: [
          u.jsx(Os.Provider, {
            scope: t,
            children: u.jsx(Ub, {
              scope: e.__scopeSelect,
              onNativeOptionAdd: g.useCallback((D) => {
                V((B) => new Set(B).add(D));
              }, []),
              onNativeOptionRemove: g.useCallback((D) => {
                V((B) => {
                  const j = new Set(B);
                  return j.delete(D), j;
                });
              }, []),
              children: n,
            }),
          }),
          L
            ? u.jsxs(
                hv,
                {
                  "aria-hidden": !0,
                  required: x,
                  tabIndex: -1,
                  name: f,
                  autoComplete: p,
                  value: _,
                  onChange: (D) => P(D.target.value),
                  disabled: m,
                  form: w,
                  children: [
                    _ === void 0 ? u.jsx("option", { value: "" }) : null,
                    Array.from($),
                  ],
                },
                H
              )
            : null,
        ],
      }),
    });
  };
Gh.displayName = Dn;
var Kh = "SelectTrigger",
  Qh = g.forwardRef((e, t) => {
    const { __scopeSelect: n, disabled: r = !1, ...o } = e,
      l = Ds(n),
      s = yn(Kh, n),
      i = s.disabled || r,
      a = oe(t, s.onTriggerChange),
      c = zs(n),
      f = g.useRef("touch"),
      [p, m, x] = gv((v) => {
        const b = c().filter((y) => !y.disabled),
          h = b.find((y) => y.value === s.value),
          d = yv(b, v, h);
        d !== void 0 && s.onValueChange(d.value);
      }),
      w = (v) => {
        i || (s.onOpenChange(!0), x()),
          v &&
            (s.triggerPointerDownPosRef.current = {
              x: Math.round(v.pageX),
              y: Math.round(v.pageY),
            });
      };
    return u.jsx(Q1, {
      asChild: !0,
      ...l,
      children: u.jsx(Q.button, {
        type: "button",
        role: "combobox",
        "aria-controls": s.contentId,
        "aria-expanded": s.open,
        "aria-required": s.required,
        "aria-autocomplete": "none",
        dir: s.dir,
        "data-state": s.open ? "open" : "closed",
        disabled: i,
        "data-disabled": i ? "" : void 0,
        "data-placeholder": vv(s.value) ? "" : void 0,
        ...o,
        ref: a,
        onClick: X(o.onClick, (v) => {
          v.currentTarget.focus(), f.current !== "mouse" && w(v);
        }),
        onPointerDown: X(o.onPointerDown, (v) => {
          f.current = v.pointerType;
          const b = v.target;
          b.hasPointerCapture(v.pointerId) &&
            b.releasePointerCapture(v.pointerId),
            v.button === 0 &&
              v.ctrlKey === !1 &&
              v.pointerType === "mouse" &&
              (w(v), v.preventDefault());
        }),
        onKeyDown: X(o.onKeyDown, (v) => {
          const b = p.current !== "";
          !(v.ctrlKey || v.altKey || v.metaKey) &&
            v.key.length === 1 &&
            m(v.key),
            !(b && v.key === " ") &&
              Vb.includes(v.key) &&
              (w(), v.preventDefault());
        }),
      }),
    });
  });
Qh.displayName = Kh;
var Yh = "SelectValue",
  Xh = g.forwardRef((e, t) => {
    const {
        __scopeSelect: n,
        className: r,
        style: o,
        children: l,
        placeholder: s = "",
        ...i
      } = e,
      a = yn(Yh, n),
      { onValueNodeHasChildrenChange: c } = a,
      f = l !== void 0,
      p = oe(t, a.onValueNodeChange);
    return (
      ke(() => {
        c(f);
      }, [c, f]),
      u.jsx(Q.span, {
        ...i,
        ref: p,
        style: { pointerEvents: "none" },
        children: vv(a.value) ? u.jsx(u.Fragment, { children: s }) : l,
      })
    );
  });
Xh.displayName = Yh;
var Gb = "SelectIcon",
  Zh = g.forwardRef((e, t) => {
    const { __scopeSelect: n, children: r, ...o } = e;
    return u.jsx(Q.span, {
      "aria-hidden": !0,
      ...o,
      ref: t,
      children: r || "▼",
    });
  });
Zh.displayName = Gb;
var Kb = "SelectPortal",
  qh = (e) => u.jsx(Mh, { asChild: !0, ...e });
qh.displayName = Kb;
var Fn = "SelectContent",
  Jh = g.forwardRef((e, t) => {
    const n = yn(Fn, e.__scopeSelect),
      [r, o] = g.useState();
    if (
      (ke(() => {
        o(new DocumentFragment());
      }, []),
      !n.open)
    ) {
      const l = r;
      return l
        ? _r.createPortal(
            u.jsx(ev, {
              scope: e.__scopeSelect,
              children: u.jsx(Os.Slot, {
                scope: e.__scopeSelect,
                children: u.jsx("div", { children: e.children }),
              }),
            }),
            l
          )
        : null;
    }
    return u.jsx(tv, { ...e, ref: t });
  });
Jh.displayName = Fn;
var st = 10,
  [ev, xn] = Mr(Fn),
  Qb = "SelectContentImpl",
  Yb = Po("SelectContent.RemoveScroll"),
  tv = g.forwardRef((e, t) => {
    const {
        __scopeSelect: n,
        position: r = "item-aligned",
        onCloseAutoFocus: o,
        onEscapeKeyDown: l,
        onPointerDownOutside: s,
        side: i,
        sideOffset: a,
        align: c,
        alignOffset: f,
        arrowPadding: p,
        collisionBoundary: m,
        collisionPadding: x,
        sticky: w,
        hideWhenDetached: v,
        avoidCollisions: b,
        ...h
      } = e,
      d = yn(Fn, n),
      [y, S] = g.useState(null),
      [C, E] = g.useState(null),
      k = oe(t, (F) => S(F)),
      [N, _] = g.useState(null),
      [P, z] = g.useState(null),
      L = zs(n),
      [$, V] = g.useState(!1),
      H = g.useRef(!1);
    g.useEffect(() => {
      if (y) return rb(y);
    }, [y]),
      Tw();
    const D = g.useCallback(
        (F) => {
          const [le, ...Ee] = L().map((te) => te.ref.current),
            [ne] = Ee.slice(-1),
            ee = document.activeElement;
          for (const te of F)
            if (
              te === ee ||
              (te == null || te.scrollIntoView({ block: "nearest" }),
              te === le && C && (C.scrollTop = 0),
              te === ne && C && (C.scrollTop = C.scrollHeight),
              te == null || te.focus(),
              document.activeElement !== ee)
            )
              return;
        },
        [L, C]
      ),
      B = g.useCallback(() => D([N, y]), [D, N, y]);
    g.useEffect(() => {
      $ && B();
    }, [$, B]);
    const { onOpenChange: j, triggerPointerDownPosRef: I } = d;
    g.useEffect(() => {
      if (y) {
        let F = { x: 0, y: 0 };
        const le = (ne) => {
            var ee, te;
            F = {
              x: Math.abs(
                Math.round(ne.pageX) -
                  (((ee = I.current) == null ? void 0 : ee.x) ?? 0)
              ),
              y: Math.abs(
                Math.round(ne.pageY) -
                  (((te = I.current) == null ? void 0 : te.y) ?? 0)
              ),
            };
          },
          Ee = (ne) => {
            F.x <= 10 && F.y <= 10
              ? ne.preventDefault()
              : y.contains(ne.target) || j(!1),
              document.removeEventListener("pointermove", le),
              (I.current = null);
          };
        return (
          I.current !== null &&
            (document.addEventListener("pointermove", le),
            document.addEventListener("pointerup", Ee, {
              capture: !0,
              once: !0,
            })),
          () => {
            document.removeEventListener("pointermove", le),
              document.removeEventListener("pointerup", Ee, { capture: !0 });
          }
        );
      }
    }, [y, j, I]),
      g.useEffect(() => {
        const F = () => j(!1);
        return (
          window.addEventListener("blur", F),
          window.addEventListener("resize", F),
          () => {
            window.removeEventListener("blur", F),
              window.removeEventListener("resize", F);
          }
        );
      }, [j]);
    const [O, A] = gv((F) => {
        const le = L().filter((ee) => !ee.disabled),
          Ee = le.find((ee) => ee.ref.current === document.activeElement),
          ne = yv(le, F, Ee);
        ne && setTimeout(() => ne.ref.current.focus());
      }),
      Y = g.useCallback(
        (F, le, Ee) => {
          const ne = !H.current && !Ee;
          ((d.value !== void 0 && d.value === le) || ne) &&
            (_(F), ne && (H.current = !0));
        },
        [d.value]
      ),
      J = g.useCallback(() => (y == null ? void 0 : y.focus()), [y]),
      ye = g.useCallback(
        (F, le, Ee) => {
          const ne = !H.current && !Ee;
          ((d.value !== void 0 && d.value === le) || ne) && z(F);
        },
        [d.value]
      ),
      gt = r === "popper" ? _a : nv,
      _e =
        gt === _a
          ? {
              side: i,
              sideOffset: a,
              align: c,
              alignOffset: f,
              arrowPadding: p,
              collisionBoundary: m,
              collisionPadding: x,
              sticky: w,
              hideWhenDetached: v,
              avoidCollisions: b,
            }
          : {};
    return u.jsx(ev, {
      scope: n,
      content: y,
      viewport: C,
      onViewportChange: E,
      itemRefCallback: Y,
      selectedItem: N,
      onItemLeave: J,
      itemTextRefCallback: ye,
      focusSelectedItem: B,
      selectedItemText: P,
      position: r,
      isPositioned: $,
      searchRef: O,
      children: u.jsx(Hh, {
        as: Yb,
        allowPinchZoom: !0,
        children: u.jsx(fh, {
          asChild: !0,
          trapped: d.open,
          onMountAutoFocus: (F) => {
            F.preventDefault();
          },
          onUnmountAutoFocus: X(o, (F) => {
            var le;
            (le = d.trigger) == null || le.focus({ preventScroll: !0 }),
              F.preventDefault();
          }),
          children: u.jsx(uh, {
            asChild: !0,
            disableOutsidePointerEvents: !0,
            onEscapeKeyDown: l,
            onPointerDownOutside: s,
            onFocusOutside: (F) => F.preventDefault(),
            onDismiss: () => d.onOpenChange(!1),
            children: u.jsx(gt, {
              role: "listbox",
              id: d.contentId,
              "data-state": d.open ? "open" : "closed",
              dir: d.dir,
              onContextMenu: (F) => F.preventDefault(),
              ...h,
              ..._e,
              onPlaced: () => V(!0),
              ref: k,
              style: {
                display: "flex",
                flexDirection: "column",
                outline: "none",
                ...h.style,
              },
              onKeyDown: X(h.onKeyDown, (F) => {
                const le = F.ctrlKey || F.altKey || F.metaKey;
                if (
                  (F.key === "Tab" && F.preventDefault(),
                  !le && F.key.length === 1 && A(F.key),
                  ["ArrowUp", "ArrowDown", "Home", "End"].includes(F.key))
                ) {
                  let ne = L()
                    .filter((ee) => !ee.disabled)
                    .map((ee) => ee.ref.current);
                  if (
                    (["ArrowUp", "End"].includes(F.key) &&
                      (ne = ne.slice().reverse()),
                    ["ArrowUp", "ArrowDown"].includes(F.key))
                  ) {
                    const ee = F.target,
                      te = ne.indexOf(ee);
                    ne = ne.slice(te + 1);
                  }
                  setTimeout(() => D(ne)), F.preventDefault();
                }
              }),
            }),
          }),
        }),
      }),
    });
  });
tv.displayName = Qb;
var Xb = "SelectItemAlignedPosition",
  nv = g.forwardRef((e, t) => {
    const { __scopeSelect: n, onPlaced: r, ...o } = e,
      l = yn(Fn, n),
      s = xn(Fn, n),
      [i, a] = g.useState(null),
      [c, f] = g.useState(null),
      p = oe(t, (k) => f(k)),
      m = zs(n),
      x = g.useRef(!1),
      w = g.useRef(!0),
      {
        viewport: v,
        selectedItem: b,
        selectedItemText: h,
        focusSelectedItem: d,
      } = s,
      y = g.useCallback(() => {
        if (l.trigger && l.valueNode && i && c && v && b && h) {
          const k = l.trigger.getBoundingClientRect(),
            N = c.getBoundingClientRect(),
            _ = l.valueNode.getBoundingClientRect(),
            P = h.getBoundingClientRect();
          if (l.dir !== "rtl") {
            const ee = P.left - N.left,
              te = _.left - ee,
              Be = k.left - te,
              yt = k.width + Be,
              Or = Math.max(yt, N.width),
              zr = window.innerWidth - st,
              Dr = Ad(te, [st, Math.max(st, zr - Or)]);
            (i.style.minWidth = yt + "px"), (i.style.left = Dr + "px");
          } else {
            const ee = N.right - P.right,
              te = window.innerWidth - _.right - ee,
              Be = window.innerWidth - k.right - te,
              yt = k.width + Be,
              Or = Math.max(yt, N.width),
              zr = window.innerWidth - st,
              Dr = Ad(te, [st, Math.max(st, zr - Or)]);
            (i.style.minWidth = yt + "px"), (i.style.right = Dr + "px");
          }
          const z = m(),
            L = window.innerHeight - st * 2,
            $ = v.scrollHeight,
            V = window.getComputedStyle(c),
            H = parseInt(V.borderTopWidth, 10),
            D = parseInt(V.paddingTop, 10),
            B = parseInt(V.borderBottomWidth, 10),
            j = parseInt(V.paddingBottom, 10),
            I = H + D + $ + j + B,
            O = Math.min(b.offsetHeight * 5, I),
            A = window.getComputedStyle(v),
            Y = parseInt(A.paddingTop, 10),
            J = parseInt(A.paddingBottom, 10),
            ye = k.top + k.height / 2 - st,
            gt = L - ye,
            _e = b.offsetHeight / 2,
            F = b.offsetTop + _e,
            le = H + D + F,
            Ee = I - le;
          if (le <= ye) {
            const ee = z.length > 0 && b === z[z.length - 1].ref.current;
            i.style.bottom = "0px";
            const te = c.clientHeight - v.offsetTop - v.offsetHeight,
              Be = Math.max(gt, _e + (ee ? J : 0) + te + B),
              yt = le + Be;
            i.style.height = yt + "px";
          } else {
            const ee = z.length > 0 && b === z[0].ref.current;
            i.style.top = "0px";
            const Be = Math.max(ye, H + v.offsetTop + (ee ? Y : 0) + _e) + Ee;
            (i.style.height = Be + "px"), (v.scrollTop = le - ye + v.offsetTop);
          }
          (i.style.margin = `${st}px 0`),
            (i.style.minHeight = O + "px"),
            (i.style.maxHeight = L + "px"),
            r == null || r(),
            requestAnimationFrame(() => (x.current = !0));
        }
      }, [m, l.trigger, l.valueNode, i, c, v, b, h, l.dir, r]);
    ke(() => y(), [y]);
    const [S, C] = g.useState();
    ke(() => {
      c && C(window.getComputedStyle(c).zIndex);
    }, [c]);
    const E = g.useCallback(
      (k) => {
        k && w.current === !0 && (y(), d == null || d(), (w.current = !1));
      },
      [y, d]
    );
    return u.jsx(qb, {
      scope: n,
      contentWrapper: i,
      shouldExpandOnScrollRef: x,
      onScrollButtonChange: E,
      children: u.jsx("div", {
        ref: a,
        style: {
          display: "flex",
          flexDirection: "column",
          position: "fixed",
          zIndex: S,
        },
        children: u.jsx(Q.div, {
          ...o,
          ref: p,
          style: { boxSizing: "border-box", maxHeight: "100%", ...o.style },
        }),
      }),
    });
  });
nv.displayName = Xb;
var Zb = "SelectPopperPosition",
  _a = g.forwardRef((e, t) => {
    const {
        __scopeSelect: n,
        align: r = "start",
        collisionPadding: o = st,
        ...l
      } = e,
      s = Ds(n);
    return u.jsx(Y1, {
      ...s,
      ...l,
      ref: t,
      align: r,
      collisionPadding: o,
      style: {
        boxSizing: "border-box",
        ...l.style,
        "--radix-select-content-transform-origin":
          "var(--radix-popper-transform-origin)",
        "--radix-select-content-available-width":
          "var(--radix-popper-available-width)",
        "--radix-select-content-available-height":
          "var(--radix-popper-available-height)",
        "--radix-select-trigger-width": "var(--radix-popper-anchor-width)",
        "--radix-select-trigger-height": "var(--radix-popper-anchor-height)",
      },
    });
  });
_a.displayName = Zb;
var [qb, tu] = Mr(Fn, {}),
  Ia = "SelectViewport",
  rv = g.forwardRef((e, t) => {
    const { __scopeSelect: n, nonce: r, ...o } = e,
      l = xn(Ia, n),
      s = tu(Ia, n),
      i = oe(t, l.onViewportChange),
      a = g.useRef(0);
    return u.jsxs(u.Fragment, {
      children: [
        u.jsx("style", {
          dangerouslySetInnerHTML: {
            __html:
              "[data-radix-select-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-radix-select-viewport]::-webkit-scrollbar{display:none}",
          },
          nonce: r,
        }),
        u.jsx(Os.Slot, {
          scope: n,
          children: u.jsx(Q.div, {
            "data-radix-select-viewport": "",
            role: "presentation",
            ...o,
            ref: i,
            style: {
              position: "relative",
              flex: 1,
              overflow: "hidden auto",
              ...o.style,
            },
            onScroll: X(o.onScroll, (c) => {
              const f = c.currentTarget,
                { contentWrapper: p, shouldExpandOnScrollRef: m } = s;
              if (m != null && m.current && p) {
                const x = Math.abs(a.current - f.scrollTop);
                if (x > 0) {
                  const w = window.innerHeight - st * 2,
                    v = parseFloat(p.style.minHeight),
                    b = parseFloat(p.style.height),
                    h = Math.max(v, b);
                  if (h < w) {
                    const d = h + x,
                      y = Math.min(w, d),
                      S = d - y;
                    (p.style.height = y + "px"),
                      p.style.bottom === "0px" &&
                        ((f.scrollTop = S > 0 ? S : 0),
                        (p.style.justifyContent = "flex-end"));
                  }
                }
              }
              a.current = f.scrollTop;
            }),
          }),
        }),
      ],
    });
  });
rv.displayName = Ia;
var ov = "SelectGroup",
  [Jb, eS] = Mr(ov),
  lv = g.forwardRef((e, t) => {
    const { __scopeSelect: n, ...r } = e,
      o = Tr();
    return u.jsx(Jb, {
      scope: n,
      id: o,
      children: u.jsx(Q.div, {
        role: "group",
        "aria-labelledby": o,
        ...r,
        ref: t,
      }),
    });
  });
lv.displayName = ov;
var sv = "SelectLabel",
  tS = g.forwardRef((e, t) => {
    const { __scopeSelect: n, ...r } = e,
      o = eS(sv, n);
    return u.jsx(Q.div, { id: o.id, ...r, ref: t });
  });
tS.displayName = sv;
var ls = "SelectItem",
  [nS, iv] = Mr(ls),
  av = g.forwardRef((e, t) => {
    const {
        __scopeSelect: n,
        value: r,
        disabled: o = !1,
        textValue: l,
        ...s
      } = e,
      i = yn(ls, n),
      a = xn(ls, n),
      c = i.value === r,
      [f, p] = g.useState(l ?? ""),
      [m, x] = g.useState(!1),
      w = oe(t, (d) => {
        var y;
        return (y = a.itemRefCallback) == null ? void 0 : y.call(a, d, r, o);
      }),
      v = Tr(),
      b = g.useRef("touch"),
      h = () => {
        o || (i.onValueChange(r), i.onOpenChange(!1));
      };
    if (r === "")
      throw new Error(
        "A <Select.Item /> must have a value prop that is not an empty string. This is because the Select value can be set to an empty string to clear the selection and show the placeholder."
      );
    return u.jsx(nS, {
      scope: n,
      value: r,
      disabled: o,
      textId: v,
      isSelected: c,
      onItemTextChange: g.useCallback((d) => {
        p((y) => y || ((d == null ? void 0 : d.textContent) ?? "").trim());
      }, []),
      children: u.jsx(Os.ItemSlot, {
        scope: n,
        value: r,
        disabled: o,
        textValue: f,
        children: u.jsx(Q.div, {
          role: "option",
          "aria-labelledby": v,
          "data-highlighted": m ? "" : void 0,
          "aria-selected": c && m,
          "data-state": c ? "checked" : "unchecked",
          "aria-disabled": o || void 0,
          "data-disabled": o ? "" : void 0,
          tabIndex: o ? void 0 : -1,
          ...s,
          ref: w,
          onFocus: X(s.onFocus, () => x(!0)),
          onBlur: X(s.onBlur, () => x(!1)),
          onClick: X(s.onClick, () => {
            b.current !== "mouse" && h();
          }),
          onPointerUp: X(s.onPointerUp, () => {
            b.current === "mouse" && h();
          }),
          onPointerDown: X(s.onPointerDown, (d) => {
            b.current = d.pointerType;
          }),
          onPointerMove: X(s.onPointerMove, (d) => {
            var y;
            (b.current = d.pointerType),
              o
                ? (y = a.onItemLeave) == null || y.call(a)
                : b.current === "mouse" &&
                  d.currentTarget.focus({ preventScroll: !0 });
          }),
          onPointerLeave: X(s.onPointerLeave, (d) => {
            var y;
            d.currentTarget === document.activeElement &&
              ((y = a.onItemLeave) == null || y.call(a));
          }),
          onKeyDown: X(s.onKeyDown, (d) => {
            var S;
            (((S = a.searchRef) == null ? void 0 : S.current) !== "" &&
              d.key === " ") ||
              ($b.includes(d.key) && h(), d.key === " " && d.preventDefault());
          }),
        }),
      }),
    });
  });
av.displayName = ls;
var eo = "SelectItemText",
  cv = g.forwardRef((e, t) => {
    const { __scopeSelect: n, className: r, style: o, ...l } = e,
      s = yn(eo, n),
      i = xn(eo, n),
      a = iv(eo, n),
      c = Hb(eo, n),
      [f, p] = g.useState(null),
      m = oe(
        t,
        (h) => p(h),
        a.onItemTextChange,
        (h) => {
          var d;
          return (d = i.itemTextRefCallback) == null
            ? void 0
            : d.call(i, h, a.value, a.disabled);
        }
      ),
      x = f == null ? void 0 : f.textContent,
      w = g.useMemo(
        () =>
          u.jsx(
            "option",
            { value: a.value, disabled: a.disabled, children: x },
            a.value
          ),
        [a.disabled, a.value, x]
      ),
      { onNativeOptionAdd: v, onNativeOptionRemove: b } = c;
    return (
      ke(() => (v(w), () => b(w)), [v, b, w]),
      u.jsxs(u.Fragment, {
        children: [
          u.jsx(Q.span, { id: a.textId, ...l, ref: m }),
          a.isSelected && s.valueNode && !s.valueNodeHasChildren
            ? _r.createPortal(l.children, s.valueNode)
            : null,
        ],
      })
    );
  });
cv.displayName = eo;
var uv = "SelectItemIndicator",
  dv = g.forwardRef((e, t) => {
    const { __scopeSelect: n, ...r } = e;
    return iv(uv, n).isSelected
      ? u.jsx(Q.span, { "aria-hidden": !0, ...r, ref: t })
      : null;
  });
dv.displayName = uv;
var Ta = "SelectScrollUpButton",
  fv = g.forwardRef((e, t) => {
    const n = xn(Ta, e.__scopeSelect),
      r = tu(Ta, e.__scopeSelect),
      [o, l] = g.useState(!1),
      s = oe(t, r.onScrollButtonChange);
    return (
      ke(() => {
        if (n.viewport && n.isPositioned) {
          let i = function () {
            const c = a.scrollTop > 0;
            l(c);
          };
          const a = n.viewport;
          return (
            i(),
            a.addEventListener("scroll", i),
            () => a.removeEventListener("scroll", i)
          );
        }
      }, [n.viewport, n.isPositioned]),
      o
        ? u.jsx(mv, {
            ...e,
            ref: s,
            onAutoScroll: () => {
              const { viewport: i, selectedItem: a } = n;
              i && a && (i.scrollTop = i.scrollTop - a.offsetHeight);
            },
          })
        : null
    );
  });
fv.displayName = Ta;
var Aa = "SelectScrollDownButton",
  pv = g.forwardRef((e, t) => {
    const n = xn(Aa, e.__scopeSelect),
      r = tu(Aa, e.__scopeSelect),
      [o, l] = g.useState(!1),
      s = oe(t, r.onScrollButtonChange);
    return (
      ke(() => {
        if (n.viewport && n.isPositioned) {
          let i = function () {
            const c = a.scrollHeight - a.clientHeight,
              f = Math.ceil(a.scrollTop) < c;
            l(f);
          };
          const a = n.viewport;
          return (
            i(),
            a.addEventListener("scroll", i),
            () => a.removeEventListener("scroll", i)
          );
        }
      }, [n.viewport, n.isPositioned]),
      o
        ? u.jsx(mv, {
            ...e,
            ref: s,
            onAutoScroll: () => {
              const { viewport: i, selectedItem: a } = n;
              i && a && (i.scrollTop = i.scrollTop + a.offsetHeight);
            },
          })
        : null
    );
  });
pv.displayName = Aa;
var mv = g.forwardRef((e, t) => {
    const { __scopeSelect: n, onAutoScroll: r, ...o } = e,
      l = xn("SelectScrollButton", n),
      s = g.useRef(null),
      i = zs(n),
      a = g.useCallback(() => {
        s.current !== null &&
          (window.clearInterval(s.current), (s.current = null));
      }, []);
    return (
      g.useEffect(() => () => a(), [a]),
      ke(() => {
        var f;
        const c = i().find((p) => p.ref.current === document.activeElement);
        (f = c == null ? void 0 : c.ref.current) == null ||
          f.scrollIntoView({ block: "nearest" });
      }, [i]),
      u.jsx(Q.div, {
        "aria-hidden": !0,
        ...o,
        ref: t,
        style: { flexShrink: 0, ...o.style },
        onPointerDown: X(o.onPointerDown, () => {
          s.current === null && (s.current = window.setInterval(r, 50));
        }),
        onPointerMove: X(o.onPointerMove, () => {
          var c;
          (c = l.onItemLeave) == null || c.call(l),
            s.current === null && (s.current = window.setInterval(r, 50));
        }),
        onPointerLeave: X(o.onPointerLeave, () => {
          a();
        }),
      })
    );
  }),
  rS = "SelectSeparator",
  oS = g.forwardRef((e, t) => {
    const { __scopeSelect: n, ...r } = e;
    return u.jsx(Q.div, { "aria-hidden": !0, ...r, ref: t });
  });
oS.displayName = rS;
var La = "SelectArrow",
  lS = g.forwardRef((e, t) => {
    const { __scopeSelect: n, ...r } = e,
      o = Ds(n),
      l = yn(La, n),
      s = xn(La, n);
    return l.open && s.position === "popper"
      ? u.jsx(X1, { ...o, ...r, ref: t })
      : null;
  });
lS.displayName = La;
var sS = "SelectBubbleInput",
  hv = g.forwardRef(({ __scopeSelect: e, value: t, ...n }, r) => {
    const o = g.useRef(null),
      l = oe(r, o),
      s = eu(t);
    return (
      g.useEffect(() => {
        const i = o.current;
        if (!i) return;
        const a = window.HTMLSelectElement.prototype,
          f = Object.getOwnPropertyDescriptor(a, "value").set;
        if (s !== t && f) {
          const p = new Event("change", { bubbles: !0 });
          f.call(i, t), i.dispatchEvent(p);
        }
      }, [s, t]),
      u.jsx(Q.select, {
        ...n,
        style: { ...Oh, ...n.style },
        ref: l,
        defaultValue: t,
      })
    );
  });
hv.displayName = sS;
function vv(e) {
  return e === "" || e === void 0;
}
function gv(e) {
  const t = fn(e),
    n = g.useRef(""),
    r = g.useRef(0),
    o = g.useCallback(
      (s) => {
        const i = n.current + s;
        t(i),
          (function a(c) {
            (n.current = c),
              window.clearTimeout(r.current),
              c !== "" && (r.current = window.setTimeout(() => a(""), 1e3));
          })(i);
      },
      [t]
    ),
    l = g.useCallback(() => {
      (n.current = ""), window.clearTimeout(r.current);
    }, []);
  return g.useEffect(() => () => window.clearTimeout(r.current), []), [n, o, l];
}
function yv(e, t, n) {
  const o = t.length > 1 && Array.from(t).every((c) => c === t[0]) ? t[0] : t,
    l = n ? e.indexOf(n) : -1;
  let s = iS(e, Math.max(l, 0));
  o.length === 1 && (s = s.filter((c) => c !== n));
  const a = s.find((c) =>
    c.textValue.toLowerCase().startsWith(o.toLowerCase())
  );
  return a !== n ? a : void 0;
}
function iS(e, t) {
  return e.map((n, r) => e[(t + r) % e.length]);
}
var aS = Gh,
  xv = Qh,
  cS = Xh,
  uS = Zh,
  dS = qh,
  wv = Jh,
  fS = rv,
  pS = lv,
  bv = av,
  mS = cv,
  hS = dv,
  vS = fv,
  gS = pv;
const Sv = K(
    "flex items-center justify-between w-full transition-all duration-200 focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1 [&>span]:text-left data-[state=open]:ring-2 data-[state=open]:ring-[var(--color-border-focus)]",
    {
      variants: {
        variant: { default: "", error: "", success: "", warning: "" },
        size: { sm: "", md: "", lg: "", xl: "" },
      },
      defaultVariants: { variant: "default", size: "md" },
    }
  ),
  yS = K(
    "relative z-50 max-h-96 min-w-[8rem] overflow-hidden data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
    { variants: {}, defaultVariants: {} }
  ),
  xS = K(
    "relative flex w-full cursor-default select-none items-center outline-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50"
  ),
  Yn = {
    base: {
      fontFamily: "var(--font-family-sans, 'Poppins', system-ui, sans-serif)",
      fontWeight: "var(--font-weight-regular, 400)",
      fontSize: "var(--font-size-base, 16px)",
      lineHeight: "var(--line-height-normal, 1.5)",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      backgroundColor: "var(--color-surface, #ffffff)",
      color: "var(--color-input-text, #39444f)",
      borderRadius: "var(--border-radius-md, 6px)",
      borderWidth: "var(--border-width, 1px)",
      borderStyle: "solid",
      borderColor: "var(--color-border, #d1d5db)",
      transition: "var(--transition-base, all 200ms ease-in-out)",
      cursor: "pointer",
      outline: "none",
    },
    sizes: {
      sm: {
        height: "var(--input-height-sm, 32px)",
        paddingLeft: "var(--input-padding-x-sm, 8px)",
        paddingRight: "var(--input-padding-x-sm, 8px)",
        fontSize: "var(--font-size-sm, 14px)",
      },
      md: {
        height: "var(--input-height-md, 40px)",
        paddingLeft: "var(--input-padding-x-md, 12px)",
        paddingRight: "var(--input-padding-x-md, 12px)",
        fontSize: "var(--font-size-base, 16px)",
      },
      lg: {
        height: "var(--input-height-lg, 48px)",
        paddingLeft: "var(--input-padding-x-lg, 16px)",
        paddingRight: "var(--input-padding-x-lg, 16px)",
        fontSize: "var(--font-size-lg, 18px)",
      },
      xl: {
        height: "var(--input-height-xl, 56px)",
        paddingLeft: "var(--input-padding-x-xl, 20px)",
        paddingRight: "var(--input-padding-x-xl, 20px)",
        fontSize: "var(--font-size-xl, 20px)",
      },
    },
    variants: {
      default: {
        borderColor: "var(--color-border, #d1d5db)",
        backgroundColor: "var(--color-surface, #ffffff)",
      },
      error: {
        borderColor: "var(--color-input-border-error, #eb0000)",
        backgroundColor: "var(--color-surface, #ffffff)",
      },
      success: {
        borderColor: "var(--color-input-border-success, #007d85)",
        backgroundColor: "var(--color-surface, #ffffff)",
      },
      warning: {
        borderColor: "var(--color-input-border-warning, #b75b00)",
        backgroundColor: "var(--color-surface, #ffffff)",
      },
    },
    states: {
      disabled: {
        cursor: "not-allowed",
        opacity: "var(--opacity-disabled, 0.5)",
        backgroundColor: "var(--color-disabled, #f3f4f6)",
        color: "var(--color-disabled-text, #6b7280)",
      },
    },
  },
  wS = (e) => {
    const t = `select-focus-${e}`,
      n = document.getElementById(t);
    n && n.remove();
    const r = document.createElement("style");
    r.id = t;
    let o;
    switch (e) {
      case "error":
        o = "var(--input-focus-shadow-error, 0 0 0 3px rgba(235, 0, 0, 0.6))";
        break;
      case "success":
        o =
          "var(--input-focus-shadow-success, 0 0 0 3px rgba(0, 125, 133, 0.6))";
        break;
      case "warning":
        o =
          "var(--input-focus-shadow-warning, 0 0 0 3px rgba(183, 91, 0, 0.8))";
        break;
      default:
        o =
          "var(--input-focus-shadow-default, 0 0 0 3px rgba(255, 153, 0, 0.8))";
    }
    (r.textContent = `
    .select-${e}:focus {
      box-shadow: ${o};
    }
    
    .select-${e}[data-state="open"] {
      box-shadow: ${o};
    }
  `),
      document.head.appendChild(r);
  },
  nu = aS,
  bS = pS,
  ru = cS,
  Fs = g.forwardRef(
    (
      {
        className: e,
        variant: t = "default",
        size: n = "md",
        children: r,
        ...o
      },
      l
    ) => {
      const s = g.useRef(null);
      g.useImperativeHandle(l, () => s.current),
        g.useEffect(() => {
          s.current && t && (wS(t), s.current.classList.add(`select-${t}`));
        }, [t]);
      const i = {
          ...Yn.base,
          ...(t && Yn.variants[t] ? Yn.variants[t] : {}),
          ...(n && Yn.sizes[n] ? Yn.sizes[n] : {}),
          ...(o.disabled ? Yn.states.disabled : {}),
        },
        a = T(Sv({ variant: t, size: n }), e);
      return u.jsxs(xv, {
        ref: s,
        className: a,
        style: i,
        ...o,
        children: [
          r,
          u.jsx(uS, {
            asChild: !0,
            children: u.jsx(Bc, { className: "h-4 w-4 opacity-50" }),
          }),
        ],
      });
    }
  );
Fs.displayName = xv.displayName;
const Vs = g.forwardRef(
  ({ className: e, children: t, position: n = "popper", ...r }, o) => {
    const l = g.useRef(null);
    g.useImperativeHandle(o, () => l.current);
    const s = {
      backgroundColor: "var(--color-surface, #ffffff)",
      borderRadius: "var(--border-radius-md, 6px)",
      borderWidth: "var(--border-width, 1px)",
      borderStyle: "solid",
      borderColor: "var(--color-border, #d1d5db)",
      maxHeight: "var(--dropdown-max-height, 240px)",
      overflowY: "auto",
      overflowX: "hidden",
      zIndex: "var(--z-dropdown, 50)",
    };
    return u.jsx(dS, {
      children: u.jsxs(wv, {
        ref: l,
        className: T(yS(), e),
        style: s,
        position: n,
        ...r,
        children: [
          u.jsx(vS, {
            className: "flex cursor-default items-center justify-center py-1",
            children: u.jsx(aw, { className: "h-4 w-4" }),
          }),
          u.jsx(fS, {
            className: T(
              "p-1",
              n === "popper" &&
                "h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)]"
            ),
            children: t,
          }),
          u.jsx(gS, {
            className: "flex cursor-default items-center justify-center py-1",
            children: u.jsx(Bc, { className: "h-4 w-4" }),
          }),
        ],
      }),
    });
  }
);
Vs.displayName = wv.displayName;
const _n = g.forwardRef(({ className: e, children: t, ...n }, r) => {
  const o = {
    display: "flex",
    alignItems: "center",
    position: "relative",
    paddingTop: "var(--spacing-2, 8px)",
    paddingBottom: "var(--spacing-2, 8px)",
    paddingLeft: "var(--spacing-8, 32px)",
    paddingRight: "var(--spacing-3, 12px)",
    fontFamily: "var(--font-family-sans, 'Poppins', system-ui, sans-serif)",
    fontSize: "var(--font-size-base, 16px)",
    lineHeight: "var(--line-height-normal, 1.5)",
    color: "var(--color-input-text, #39444f)",
    cursor: "pointer",
    userSelect: "none",
    borderRadius: "var(--border-radius-sm, 4px)",
    transition: "var(--transition-base, all 200ms ease-in-out)",
  };
  return u.jsxs(bv, {
    ref: r,
    className: T(
      xS(),
      "hover:bg-[var(--color-accent,var(--color-gray-300,#e4e4e4))]",
      e
    ),
    style: o,
    ...n,
    children: [
      u.jsx("span", {
        className:
          "absolute left-2 flex h-3.5 w-3.5 items-center justify-center",
        children: u.jsx(hS, { children: u.jsx(lh, { className: "h-4 w-4" }) }),
      }),
      u.jsx(mS, { children: t }),
    ],
  });
});
_n.displayName = bv.displayName;
const ou = g.forwardRef(
  (
    {
      className: e,
      variant: t = "default",
      size: n = "md",
      label: r,
      labelState: o,
      hideLabel: l = !1,
      hintText: s,
      helperText: i,
      error: a,
      success: c,
      warning: f,
      placeholder: p,
      value: m,
      onValueChange: x,
      defaultValue: w,
      children: v,
      required: b,
      disabled: h,
      id: d,
      name: y,
      containerClassName: S,
      labelClassName: C,
      helperClassName: E,
      ...k
    },
    N
  ) => {
    const _ = g.useId(),
      P = a ? "error" : c ? "success" : f ? "warning" : t,
      z = Wn(a, c, f),
      L = Un(a, c, f),
      $ = $o(_, a, c, f, s),
      V = !l,
      H = !!s,
      D = z ? `${_}-helper` : void 0,
      B = g.Children.count(v) > 0;
    return u.jsxs("div", {
      className: T("w-full", S),
      children: [
        V &&
          r &&
          u.jsxs("label", {
            htmlFor: _,
            className: T(Fo({ variant: h ? "disabled" : "default" }), C),
            children: [
              r,
              o === "required" &&
                u.jsxs("span", {
                  style: {
                    color: "var(--color-input-label-required, #a30134)",
                  },
                  children: [" ", "*"],
                }),
              o === "optional" &&
                u.jsxs("span", {
                  style: {
                    color: "var(--color-text-muted, #6b7280)",
                    fontWeight: "var(--font-weight-regular, 400)",
                  },
                  children: [" ", "(Optional)"],
                }),
            ],
          }),
        H &&
          u.jsx("p", {
            className: T(rt({ variant: "muted" })),
            id: `${_}-description`,
            children: s,
          }),
        u.jsxs(nu, {
          value: m,
          onValueChange: x,
          defaultValue: w,
          name: y,
          required: b,
          disabled: h,
          ...k,
          children: [
            u.jsx(Fs, {
              ref: N,
              id: _,
              variant: P,
              size: n,
              className: e,
              ...$,
              children: u.jsx(ru, {
                placeholder: B ? p : "No options available",
              }),
            }),
            u.jsx(Vs, {
              children: B
                ? v
                : u.jsx("div", {
                    className:
                      "py-2 px-3 text-sm text-[var(--color-text-muted)]",
                    children: "No options available",
                  }),
            }),
          ],
        }),
        z &&
          u.jsx("p", {
            id: D,
            className: T(rt({ variant: L }), E),
            children: z,
          }),
      ],
    });
  }
);
ou.displayName = "SelectField";
var $s = "Checkbox",
  [SS, OC] = Bt($s),
  [CS, lu] = SS($s);
function kS(e) {
  const {
      __scopeCheckbox: t,
      checked: n,
      children: r,
      defaultChecked: o,
      disabled: l,
      form: s,
      name: i,
      onCheckedChange: a,
      required: c,
      value: f = "on",
      internal_do_not_use_render: p,
    } = e,
    [m, x] = dn({ prop: n, defaultProp: o ?? !1, onChange: a, caller: $s }),
    [w, v] = g.useState(null),
    [b, h] = g.useState(null),
    d = g.useRef(!1),
    y = w ? !!s || !!w.closest("form") : !0,
    S = {
      checked: m,
      disabled: l,
      setChecked: x,
      control: w,
      setControl: v,
      name: i,
      form: s,
      value: f,
      hasConsumerStoppedPropagationRef: d,
      required: c,
      defaultChecked: an(o) ? !1 : o,
      isFormControl: y,
      bubbleInput: b,
      setBubbleInput: h,
    };
  return u.jsx(CS, { scope: t, ...S, children: ES(p) ? p(S) : r });
}
var Cv = "CheckboxTrigger",
  kv = g.forwardRef(
    ({ __scopeCheckbox: e, onKeyDown: t, onClick: n, ...r }, o) => {
      const {
          control: l,
          value: s,
          disabled: i,
          checked: a,
          required: c,
          setControl: f,
          setChecked: p,
          hasConsumerStoppedPropagationRef: m,
          isFormControl: x,
          bubbleInput: w,
        } = lu(Cv, e),
        v = oe(o, f),
        b = g.useRef(a);
      return (
        g.useEffect(() => {
          const h = l == null ? void 0 : l.form;
          if (h) {
            const d = () => p(b.current);
            return (
              h.addEventListener("reset", d),
              () => h.removeEventListener("reset", d)
            );
          }
        }, [l, p]),
        u.jsx(Q.button, {
          type: "button",
          role: "checkbox",
          "aria-checked": an(a) ? "mixed" : a,
          "aria-required": c,
          "data-state": Pv(a),
          "data-disabled": i ? "" : void 0,
          disabled: i,
          value: s,
          ...r,
          ref: v,
          onKeyDown: X(t, (h) => {
            h.key === "Enter" && h.preventDefault();
          }),
          onClick: X(n, (h) => {
            p((d) => (an(d) ? !0 : !d)),
              w &&
                x &&
                ((m.current = h.isPropagationStopped()),
                m.current || h.stopPropagation());
          }),
        })
      );
    }
  );
kv.displayName = Cv;
var su = g.forwardRef((e, t) => {
  const {
    __scopeCheckbox: n,
    name: r,
    checked: o,
    defaultChecked: l,
    required: s,
    disabled: i,
    value: a,
    onCheckedChange: c,
    form: f,
    ...p
  } = e;
  return u.jsx(kS, {
    __scopeCheckbox: n,
    checked: o,
    defaultChecked: l,
    disabled: i,
    required: s,
    onCheckedChange: c,
    name: r,
    form: f,
    value: a,
    internal_do_not_use_render: ({ isFormControl: m }) =>
      u.jsxs(u.Fragment, {
        children: [
          u.jsx(kv, { ...p, ref: t, __scopeCheckbox: n }),
          m && u.jsx(Rv, { __scopeCheckbox: n }),
        ],
      }),
  });
});
su.displayName = $s;
var Ev = "CheckboxIndicator",
  Nv = g.forwardRef((e, t) => {
    const { __scopeCheckbox: n, forceMount: r, ...o } = e,
      l = lu(Ev, n);
    return u.jsx(js, {
      present: r || an(l.checked) || l.checked === !0,
      children: u.jsx(Q.span, {
        "data-state": Pv(l.checked),
        "data-disabled": l.disabled ? "" : void 0,
        ...o,
        ref: t,
        style: { pointerEvents: "none", ...e.style },
      }),
    });
  });
Nv.displayName = Ev;
var jv = "CheckboxBubbleInput",
  Rv = g.forwardRef(({ __scopeCheckbox: e, ...t }, n) => {
    const {
        control: r,
        hasConsumerStoppedPropagationRef: o,
        checked: l,
        defaultChecked: s,
        required: i,
        disabled: a,
        name: c,
        value: f,
        form: p,
        bubbleInput: m,
        setBubbleInput: x,
      } = lu(jv, e),
      w = oe(n, x),
      v = eu(l),
      b = Zc(r);
    g.useEffect(() => {
      const d = m;
      if (!d) return;
      const y = window.HTMLInputElement.prototype,
        C = Object.getOwnPropertyDescriptor(y, "checked").set,
        E = !o.current;
      if (v !== l && C) {
        const k = new Event("click", { bubbles: E });
        (d.indeterminate = an(l)),
          C.call(d, an(l) ? !1 : l),
          d.dispatchEvent(k);
      }
    }, [m, v, l, o]);
    const h = g.useRef(an(l) ? !1 : l);
    return u.jsx(Q.input, {
      type: "checkbox",
      "aria-hidden": !0,
      defaultChecked: s ?? h.current,
      required: i,
      disabled: a,
      name: c,
      value: f,
      form: p,
      ...t,
      tabIndex: -1,
      ref: w,
      style: {
        ...t.style,
        ...b,
        position: "absolute",
        pointerEvents: "none",
        opacity: 0,
        margin: 0,
        transform: "translateX(-100%)",
      },
    });
  });
Rv.displayName = jv;
function ES(e) {
  return typeof e == "function";
}
function an(e) {
  return e === "indeterminate";
}
function Pv(e) {
  return an(e) ? "indeterminate" : e ? "checked" : "unchecked";
}
var Ni = "rovingFocusGroup.onEntryFocus",
  NS = { bubbles: !1, cancelable: !0 },
  Wo = "RovingFocusGroup",
  [Ma, _v, jS] = Mc(Wo),
  [RS, Iv] = Bt(Wo, [jS]),
  [PS, _S] = RS(Wo),
  Tv = g.forwardRef((e, t) =>
    u.jsx(Ma.Provider, {
      scope: e.__scopeRovingFocusGroup,
      children: u.jsx(Ma.Slot, {
        scope: e.__scopeRovingFocusGroup,
        children: u.jsx(IS, { ...e, ref: t }),
      }),
    })
  );
Tv.displayName = Wo;
var IS = g.forwardRef((e, t) => {
    const {
        __scopeRovingFocusGroup: n,
        orientation: r,
        loop: o = !1,
        dir: l,
        currentTabStopId: s,
        defaultCurrentTabStopId: i,
        onCurrentTabStopIdChange: a,
        onEntryFocus: c,
        preventScrollOnEntryFocus: f = !1,
        ...p
      } = e,
      m = g.useRef(null),
      x = oe(t, m),
      w = Ps(l),
      [v, b] = dn({ prop: s, defaultProp: i ?? null, onChange: a, caller: Wo }),
      [h, d] = g.useState(!1),
      y = fn(c),
      S = _v(n),
      C = g.useRef(!1),
      [E, k] = g.useState(0);
    return (
      g.useEffect(() => {
        const N = m.current;
        if (N)
          return N.addEventListener(Ni, y), () => N.removeEventListener(Ni, y);
      }, [y]),
      u.jsx(PS, {
        scope: n,
        orientation: r,
        dir: w,
        loop: o,
        currentTabStopId: v,
        onItemFocus: g.useCallback((N) => b(N), [b]),
        onItemShiftTab: g.useCallback(() => d(!0), []),
        onFocusableItemAdd: g.useCallback(() => k((N) => N + 1), []),
        onFocusableItemRemove: g.useCallback(() => k((N) => N - 1), []),
        children: u.jsx(Q.div, {
          tabIndex: h || E === 0 ? -1 : 0,
          "data-orientation": r,
          ...p,
          ref: x,
          style: { outline: "none", ...e.style },
          onMouseDown: X(e.onMouseDown, () => {
            C.current = !0;
          }),
          onFocus: X(e.onFocus, (N) => {
            const _ = !C.current;
            if (N.target === N.currentTarget && _ && !h) {
              const P = new CustomEvent(Ni, NS);
              if ((N.currentTarget.dispatchEvent(P), !P.defaultPrevented)) {
                const z = S().filter((D) => D.focusable),
                  L = z.find((D) => D.active),
                  $ = z.find((D) => D.id === v),
                  H = [L, $, ...z].filter(Boolean).map((D) => D.ref.current);
                Mv(H, f);
              }
            }
            C.current = !1;
          }),
          onBlur: X(e.onBlur, () => d(!1)),
        }),
      })
    );
  }),
  Av = "RovingFocusGroupItem",
  Lv = g.forwardRef((e, t) => {
    const {
        __scopeRovingFocusGroup: n,
        focusable: r = !0,
        active: o = !1,
        tabStopId: l,
        children: s,
        ...i
      } = e,
      a = Tr(),
      c = l || a,
      f = _S(Av, n),
      p = f.currentTabStopId === c,
      m = _v(n),
      {
        onFocusableItemAdd: x,
        onFocusableItemRemove: w,
        currentTabStopId: v,
      } = f;
    return (
      g.useEffect(() => {
        if (r) return x(), () => w();
      }, [r, x, w]),
      u.jsx(Ma.ItemSlot, {
        scope: n,
        id: c,
        focusable: r,
        active: o,
        children: u.jsx(Q.span, {
          tabIndex: p ? 0 : -1,
          "data-orientation": f.orientation,
          ...i,
          ref: t,
          onMouseDown: X(e.onMouseDown, (b) => {
            r ? f.onItemFocus(c) : b.preventDefault();
          }),
          onFocus: X(e.onFocus, () => f.onItemFocus(c)),
          onKeyDown: X(e.onKeyDown, (b) => {
            if (b.key === "Tab" && b.shiftKey) {
              f.onItemShiftTab();
              return;
            }
            if (b.target !== b.currentTarget) return;
            const h = LS(b, f.orientation, f.dir);
            if (h !== void 0) {
              if (b.metaKey || b.ctrlKey || b.altKey || b.shiftKey) return;
              b.preventDefault();
              let y = m()
                .filter((S) => S.focusable)
                .map((S) => S.ref.current);
              if (h === "last") y.reverse();
              else if (h === "prev" || h === "next") {
                h === "prev" && y.reverse();
                const S = y.indexOf(b.currentTarget);
                y = f.loop ? MS(y, S + 1) : y.slice(S + 1);
              }
              setTimeout(() => Mv(y));
            }
          }),
          children:
            typeof s == "function"
              ? s({ isCurrentTabStop: p, hasTabStop: v != null })
              : s,
        }),
      })
    );
  });
Lv.displayName = Av;
var TS = {
  ArrowLeft: "prev",
  ArrowUp: "prev",
  ArrowRight: "next",
  ArrowDown: "next",
  PageUp: "first",
  Home: "first",
  PageDown: "last",
  End: "last",
};
function AS(e, t) {
  return t !== "rtl"
    ? e
    : e === "ArrowLeft"
    ? "ArrowRight"
    : e === "ArrowRight"
    ? "ArrowLeft"
    : e;
}
function LS(e, t, n) {
  const r = AS(e.key, n);
  if (
    !(t === "vertical" && ["ArrowLeft", "ArrowRight"].includes(r)) &&
    !(t === "horizontal" && ["ArrowUp", "ArrowDown"].includes(r))
  )
    return TS[r];
}
function Mv(e, t = !1) {
  const n = document.activeElement;
  for (const r of e)
    if (
      r === n ||
      (r.focus({ preventScroll: t }), document.activeElement !== n)
    )
      return;
}
function MS(e, t) {
  return e.map((n, r) => e[(t + r) % e.length]);
}
var OS = Tv,
  zS = Lv,
  iu = "Radio",
  [DS, Ov] = Bt(iu),
  [FS, VS] = DS(iu),
  zv = g.forwardRef((e, t) => {
    const {
        __scopeRadio: n,
        name: r,
        checked: o = !1,
        required: l,
        disabled: s,
        value: i = "on",
        onCheck: a,
        form: c,
        ...f
      } = e,
      [p, m] = g.useState(null),
      x = oe(t, (b) => m(b)),
      w = g.useRef(!1),
      v = p ? c || !!p.closest("form") : !0;
    return u.jsxs(FS, {
      scope: n,
      checked: o,
      disabled: s,
      children: [
        u.jsx(Q.button, {
          type: "button",
          role: "radio",
          "aria-checked": o,
          "data-state": $v(o),
          "data-disabled": s ? "" : void 0,
          disabled: s,
          value: i,
          ...f,
          ref: x,
          onClick: X(e.onClick, (b) => {
            o || a == null || a(),
              v &&
                ((w.current = b.isPropagationStopped()),
                w.current || b.stopPropagation());
          }),
        }),
        v &&
          u.jsx(Vv, {
            control: p,
            bubbles: !w.current,
            name: r,
            value: i,
            checked: o,
            required: l,
            disabled: s,
            form: c,
            style: { transform: "translateX(-100%)" },
          }),
      ],
    });
  });
zv.displayName = iu;
var Dv = "RadioIndicator",
  Fv = g.forwardRef((e, t) => {
    const { __scopeRadio: n, forceMount: r, ...o } = e,
      l = VS(Dv, n);
    return u.jsx(js, {
      present: r || l.checked,
      children: u.jsx(Q.span, {
        "data-state": $v(l.checked),
        "data-disabled": l.disabled ? "" : void 0,
        ...o,
        ref: t,
      }),
    });
  });
Fv.displayName = Dv;
var $S = "RadioBubbleInput",
  Vv = g.forwardRef(
    ({ __scopeRadio: e, control: t, checked: n, bubbles: r = !0, ...o }, l) => {
      const s = g.useRef(null),
        i = oe(s, l),
        a = eu(n),
        c = Zc(t);
      return (
        g.useEffect(() => {
          const f = s.current;
          if (!f) return;
          const p = window.HTMLInputElement.prototype,
            x = Object.getOwnPropertyDescriptor(p, "checked").set;
          if (a !== n && x) {
            const w = new Event("click", { bubbles: r });
            x.call(f, n), f.dispatchEvent(w);
          }
        }, [a, n, r]),
        u.jsx(Q.input, {
          type: "radio",
          "aria-hidden": !0,
          defaultChecked: n,
          ...o,
          tabIndex: -1,
          ref: i,
          style: {
            ...o.style,
            ...c,
            position: "absolute",
            pointerEvents: "none",
            opacity: 0,
            margin: 0,
          },
        })
      );
    }
  );
Vv.displayName = $S;
function $v(e) {
  return e ? "checked" : "unchecked";
}
var BS = ["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"],
  Bs = "RadioGroup",
  [WS, zC] = Bt(Bs, [Iv, Ov]),
  Bv = Iv(),
  Wv = Ov(),
  [US, HS] = WS(Bs),
  Uv = g.forwardRef((e, t) => {
    const {
        __scopeRadioGroup: n,
        name: r,
        defaultValue: o,
        value: l,
        required: s = !1,
        disabled: i = !1,
        orientation: a,
        dir: c,
        loop: f = !0,
        onValueChange: p,
        ...m
      } = e,
      x = Bv(n),
      w = Ps(c),
      [v, b] = dn({ prop: l, defaultProp: o ?? null, onChange: p, caller: Bs });
    return u.jsx(US, {
      scope: n,
      name: r,
      required: s,
      disabled: i,
      value: v,
      onValueChange: b,
      children: u.jsx(OS, {
        asChild: !0,
        ...x,
        orientation: a,
        dir: w,
        loop: f,
        children: u.jsx(Q.div, {
          role: "radiogroup",
          "aria-required": s,
          "aria-orientation": a,
          "data-disabled": i ? "" : void 0,
          dir: w,
          ...m,
          ref: t,
        }),
      }),
    });
  });
Uv.displayName = Bs;
var Hv = "RadioGroupItem",
  Gv = g.forwardRef((e, t) => {
    const { __scopeRadioGroup: n, disabled: r, ...o } = e,
      l = HS(Hv, n),
      s = l.disabled || r,
      i = Bv(n),
      a = Wv(n),
      c = g.useRef(null),
      f = oe(t, c),
      p = l.value === o.value,
      m = g.useRef(!1);
    return (
      g.useEffect(() => {
        const x = (v) => {
            BS.includes(v.key) && (m.current = !0);
          },
          w = () => (m.current = !1);
        return (
          document.addEventListener("keydown", x),
          document.addEventListener("keyup", w),
          () => {
            document.removeEventListener("keydown", x),
              document.removeEventListener("keyup", w);
          }
        );
      }, []),
      u.jsx(zS, {
        asChild: !0,
        ...i,
        focusable: !s,
        active: p,
        children: u.jsx(zv, {
          disabled: s,
          required: l.required,
          checked: p,
          ...a,
          ...o,
          name: l.name,
          ref: f,
          onCheck: () => l.onValueChange(o.value),
          onKeyDown: X((x) => {
            x.key === "Enter" && x.preventDefault();
          }),
          onFocus: X(o.onFocus, () => {
            var x;
            m.current && ((x = c.current) == null || x.click());
          }),
        }),
      })
    );
  });
Gv.displayName = Hv;
var GS = "RadioGroupIndicator",
  Kv = g.forwardRef((e, t) => {
    const { __scopeRadioGroup: n, ...r } = e,
      o = Wv(n);
    return u.jsx(Fv, { ...o, ...r, ref: t });
  });
Kv.displayName = GS;
var Qv = Uv,
  Yv = Gv,
  KS = Kv;
const bn = {
    base: {
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      width: "16px",
      height: "16px",
      borderWidth: "1px",
      borderStyle: "solid",
      cursor: "pointer",
      flexShrink: 0,
      fontFamily: "var(--font-family-sans, 'Poppins', system-ui, sans-serif)",
      borderRadius: "var(--border-radius-sm, 4px)",
      backgroundColor: "var(--color-surface, #ffffff)",
      borderColor: "var(--color-border, #b3b9bf)",
      color: "var(--color-text, #374151)",
      transition: "var(--transition-base, all 200ms ease-in-out)",
    },
    variants: {
      default: {
        borderColor: "var(--color-border, #b3b9bf)",
        backgroundColor: "var(--color-surface, #ffffff)",
      },
      error: {
        borderColor: "var(--color-border-error, #eb0000)",
        backgroundColor: "var(--color-surface, #ffffff)",
      },
      success: {
        borderColor: "var(--color-border-success, #007d85)",
        backgroundColor: "var(--color-surface, #ffffff)",
      },
      warning: {
        borderColor: "var(--color-border-warning, #b75b00)",
        backgroundColor: "var(--color-surface, #ffffff)",
      },
    },
    sizes: {
      sm: { width: "12px", height: "12px" },
      md: { width: "16px", height: "16px" },
      lg: { width: "20px", height: "20px" },
      xl: { width: "24px", height: "24px" },
    },
    states: {
      checked: {
        backgroundColor: "var(--color-navy-500, #1e3a8a)",
        borderColor: "var(--color-navy-500, #1e3a8a)",
        color: "var(--color-white, #ffffff)",
      },
      disabled: { opacity: 0.5, cursor: "not-allowed" },
    },
  },
  Xn = {
    base: {
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      width: "16px",
      height: "16px",
      borderWidth: "1px",
      borderStyle: "solid",
      cursor: "pointer",
      flexShrink: 0,
      borderRadius: "50%",
      backgroundColor: "var(--color-surface, #ffffff)",
      borderColor: "var(--color-border, #d1d5db)",
      transition: "var(--transition-base, all 200ms ease-in-out)",
    },
    variants: {
      default: {
        borderColor: "var(--color-border, #9ca3af)",
        backgroundColor: "var(--color-surface, #ffffff)",
      },
      error: {
        borderColor: "var(--color-border-error, #eb0000)",
        backgroundColor: "var(--color-surface, #ffffff)",
      },
      success: {
        borderColor: "var(--color-border-success, #007d85)",
        backgroundColor: "var(--color-surface, #ffffff)",
      },
      warning: {
        borderColor: "var(--color-border-warning, #b75b00)",
        backgroundColor: "var(--color-surface, #ffffff)",
      },
    },
    sizes: {
      sm: { width: "12px", height: "12px" },
      md: { width: "16px", height: "16px" },
      lg: { width: "20px", height: "20px" },
      xl: { width: "24px", height: "24px" },
    },
    states: { disabled: { opacity: 0.5, cursor: "not-allowed" } },
  },
  Xv = (e, t) => {
    const n = `${t}-focus-${e}`,
      r = document.getElementById(n);
    r && r.remove();
    const o = document.createElement("style");
    o.id = n;
    const l = `
    .${t}-${e}:focus-visible {
      outline: none;
      box-shadow: 0 0 0 3px rgba(255, 153, 0, 0.8);
    }
    .${t}-${e}:focus {
      box-shadow: 0 0 0 3px rgba(255, 153, 0, 0.8);
    }
  `;
    (o.textContent = l), document.head.appendChild(o);
  },
  Zv = K(
    "peer shrink-0 border transition-all duration-200 cursor-pointer disabled:cursor-not-allowed disabled:opacity-50 focus-visible:outline-none",
    {
      variants: {
        variant: { default: "", error: "", success: "", warning: "" },
        size: { sm: "", md: "", lg: "", xl: "" },
      },
      defaultVariants: { variant: "default", size: "md" },
    }
  ),
  qv = K(
    "peer shrink-0 rounded-full border transition-all duration-200 cursor-pointer disabled:cursor-not-allowed disabled:opacity-50 focus-visible:outline-none",
    {
      variants: {
        variant: { default: "", error: "", success: "", warning: "" },
        size: { sm: "", md: "", lg: "", xl: "" },
      },
      defaultVariants: { variant: "default", size: "md" },
    }
  ),
  kn = W.forwardRef(
    (
      {
        className: e,
        variant: t = "default",
        size: n = "md",
        label: r,
        labelState: o,
        showLabel: l = !0,
        hintText: s,
        error: i,
        success: a,
        warning: c,
        containerClassName: f,
        labelClassName: p,
        helperClassName: m,
        checked: x,
        disabled: w,
        style: v,
        ...b
      },
      h
    ) => {
      const d = W.useRef(null),
        y = W.useId();
      W.useImperativeHandle(h, () => d.current),
        W.useEffect(() => {
          d.current &&
            t &&
            (Xv(t, "checkbox"), d.current.classList.add(`checkbox-${t}`));
        }, [t]);
      const S = i ? "error" : a ? "success" : c ? "warning" : t,
        C = Wn(i, a, c),
        E = Un(i, a, c),
        k = $o(y, i, a, c, s),
        N = {
          ...bn.base,
          ...(S && bn.variants[S] ? bn.variants[S] : {}),
          ...(n && bn.sizes[n] ? bn.sizes[n] : {}),
          ...(x ? bn.states.checked : {}),
          ...(w ? bn.states.disabled : {}),
          ...v,
        },
        _ = T(Zv({ variant: S, size: n }), e);
      return u.jsxs("div", {
        className: T(Vo(), f),
        children: [
          u.jsxs("div", {
            className: "flex items-start space-x-2",
            children: [
              u.jsx(su, {
                ref: d,
                id: y,
                className: _,
                style: N,
                checked: x,
                disabled: w,
                ...k,
                ...b,
                children: u.jsx(Nv, {
                  className: "flex items-center justify-center text-current",
                  children:
                    x === "indeterminate"
                      ? u.jsx(cw, { className: "h-3 w-3" })
                      : u.jsx(lh, { className: "h-3 w-3" }),
                }),
              }),
              r &&
                l &&
                u.jsx("label", {
                  htmlFor: y,
                  className: T(
                    "text-sm font-normal leading-normal cursor-pointer",
                    { color: "var(--color-text-body, #39444f)" },
                    w && "cursor-not-allowed opacity-50",
                    p
                  ),
                  style: { color: "var(--color-text-body, #39444f)" },
                  children: r,
                }),
            ],
          }),
          C && u.jsx("p", { className: T(rt({ variant: E }), m), children: C }),
        ],
      });
    }
  );
kn.displayName = su.displayName;
const Jv = W.forwardRef(
  (
    {
      className: e,
      containerClassName: t,
      labelClassName: n,
      helperClassName: r,
      label: o,
      labelState: l = "default",
      showLabel: s = !0,
      hintText: i,
      error: a,
      success: c,
      warning: f,
      disabled: p,
      children: m,
      ...x
    },
    w
  ) => {
    const v = Wn(a, c, f),
      b = Un(a, c, f);
    return u.jsxs("div", {
      className: T(Vo(), t),
      children: [
        o &&
          s &&
          u.jsxs("div", {
            className: T(Fo({ variant: p ? "disabled" : "default" }), n),
            children: [
              o,
              l === "required" &&
                u.jsx("span", {
                  className: "ml-1",
                  style: {
                    color: "var(--color-input-label-required, #a30134)",
                  },
                  children: "*",
                }),
              l === "optional" &&
                u.jsx("span", {
                  className: "ml-1",
                  style: {
                    color: "var(--color-input-label-optional, #6b7280)",
                  },
                  children: "(Optional)",
                }),
            ],
          }),
        i &&
          u.jsx("p", { className: T(rt({ variant: "muted" })), children: i }),
        u.jsx(Qv, {
          className: T("grid gap-2", e),
          disabled: p,
          ref: w,
          ...x,
          children: m,
        }),
        v && u.jsx("p", { className: T(rt({ variant: b }), r), children: v }),
      ],
    });
  }
);
Jv.displayName = Qv.displayName;
const eg = W.forwardRef(
  (
    {
      className: e,
      itemClassName: t,
      labelClassName: n,
      variant: r = "default",
      size: o = "md",
      label: l,
      value: s,
      disabled: i,
      style: a,
      ...c
    },
    f
  ) => {
    const p = W.useRef(null);
    W.useImperativeHandle(f, () => p.current),
      W.useEffect(() => {
        p.current &&
          r &&
          (Xv(r, "radio"), p.current.classList.add(`radio-${r}`));
      }, [r]);
    const m = {
        ...Xn.base,
        ...(r && Xn.variants[r] ? Xn.variants[r] : {}),
        ...(o && Xn.sizes[o] ? Xn.sizes[o] : {}),
        ...(i ? Xn.states.disabled : {}),
        ...a,
      },
      x = T(qv({ variant: r, size: o }), e);
    return u.jsxs("div", {
      className: T("flex items-center space-x-2", t),
      children: [
        u.jsx(Yv, {
          ref: p,
          className: x,
          style: m,
          value: s,
          disabled: i,
          ...c,
          children: u.jsx(KS, {
            className: "flex items-center justify-center",
            children: u.jsx("div", {
              className: "rounded-full bg-current",
              style: {
                width: "6px",
                height: "6px",
                backgroundColor: "var(--color-navy-500, #1e3a8a)",
              },
            }),
          }),
        }),
        l &&
          u.jsx("label", {
            htmlFor: c.id,
            className: T(
              "text-sm font-normal leading-normal cursor-pointer",
              i && "cursor-not-allowed opacity-50",
              n
            ),
            style: { color: "var(--color-text-body, #39444f)" },
            children: l,
          }),
      ],
    });
  }
);
eg.displayName = Yv.displayName;
const au = W.forwardRef(
  (
    {
      containerClassName: e,
      labelClassName: t,
      helperClassName: n,
      label: r,
      labelState: o = "default",
      showLabel: l = !0,
      hintText: s,
      error: i,
      success: a,
      warning: c,
      children: f,
      ...p
    },
    m
  ) => {
    const x = Wn(i, a, c),
      w = Un(i, a, c);
    return u.jsxs("div", {
      ref: m,
      className: T("space-y-2", e),
      ...p,
      children: [
        r &&
          l &&
          u.jsxs("div", {
            className: T(Fo({ variant: "default" }), t),
            children: [
              r,
              o === "required" &&
                u.jsx("span", {
                  className: "ml-1",
                  style: {
                    color: "var(--color-input-label-required, #a30134)",
                  },
                  children: "*",
                }),
              o === "optional" &&
                u.jsx("span", {
                  className: "ml-1",
                  style: {
                    color: "var(--color-input-label-optional, #6b7280)",
                  },
                  children: "(Optional)",
                }),
            ],
          }),
        s &&
          u.jsx("p", {
            className: T(rt({ variant: "muted" }), "mt-0 mb-0.5"),
            children: s,
          }),
        u.jsx("div", { className: T(Vo({ variant: "compact" })), children: f }),
        x && u.jsx("p", { className: T(rt({ variant: w }), n), children: x }),
      ],
    });
  }
);
au.displayName = "CheckboxGroup";
const tg = K(
    ["mx-auto flex w-full justify-center items-center space-x-1"].join(" ")
  ),
  ng = K(["!p-0"].join(" "), {
    variants: {
      size: {
        sm: "!h-6 !w-6 !text-xs",
        md: "!h-8 !w-8 !text-sm",
        lg: "!h-10 !w-10 !text-base",
      },
    },
    defaultVariants: { size: "md" },
  }),
  cu = K(["!h-8 !px-3"].join(" ")),
  rg = K(
    [
      "text-sm text-[var(--color-charcoal-500)]",
      "flex items-center gap-1",
    ].join(" ")
  ),
  QS = (e, t, n = 7) => {
    if (t <= n) return Array.from({ length: t }, (l, s) => s + 1);
    const r = Math.floor(n / 2),
      o = [];
    if (e <= r + 1) {
      for (let l = 1; l <= n - 2; l++) o.push(l);
      o.push("ellipsis"), o.push(t);
    } else if (e >= t - r) {
      o.push(1), o.push("ellipsis");
      for (let l = t - (n - 3); l <= t; l++) o.push(l);
    } else {
      o.push(1), o.push("ellipsis");
      for (let l = e - 1; l <= e + 1; l++) o.push(l);
      o.push("ellipsis"), o.push(t);
    }
    return o;
  },
  Ws = g.forwardRef(
    (
      {
        className: e,
        totalItems: t,
        currentPage: n,
        itemsPerPage: r,
        onPageChange: o,
        showResults: l = !0,
        maxVisiblePages: s = 7,
        ...i
      },
      a
    ) => {
      const c = Math.ceil(t / r),
        f = QS(n, c, s);
      return c <= 1
        ? null
        : u.jsxs("nav", {
            ref: a,
            role: "navigation",
            "aria-label": "pagination",
            className: T("flex flex-col space-y-4", e),
            ...i,
            children: [
              l &&
                u.jsx(mu, { currentPage: n, itemsPerPage: r, totalItems: t }),
              u.jsxs("div", {
                className: T(tg()),
                children: [
                  u.jsx(du, { onClick: () => o(n - 1), disabled: n === 1 }),
                  f.map((p, m) =>
                    p === "ellipsis"
                      ? u.jsx(pu, {}, `ellipsis-${m}`)
                      : u.jsx(
                          uu,
                          { page: p, isActive: p === n, onClick: () => o(p) },
                          p
                        )
                  ),
                  u.jsx(fu, { onClick: () => o(n + 1), disabled: n === c }),
                ],
              }),
            ],
          });
    }
  );
Ws.displayName = "Pagination";
const uu = g.forwardRef(
  ({ className: e, isActive: t, page: n, size: r, ...o }, l) => {
    const s = t ? "primary" : "ghost";
    return u.jsx(De, {
      ref: l,
      variant: s,
      size: r,
      className: T(ng({ size: r }), e),
      "aria-label": `Go to page ${n}`,
      "aria-current": t ? "page" : void 0,
      ...o,
      children: n,
    });
  }
);
uu.displayName = "PaginationItem";
const du = g.forwardRef(({ className: e, ...t }, n) =>
  u.jsxs(De, {
    ref: n,
    variant: "ghost",
    size: "md",
    className: T(cu(), e),
    "aria-label": "Go to previous page",
    ...t,
    children: [
      u.jsx("svg", {
        width: "16",
        height: "16",
        viewBox: "0 0 16 16",
        fill: "none",
        className: "mr-1",
        children: u.jsx("path", {
          d: "M10 12L6 8L10 4",
          stroke: "currentColor",
          strokeWidth: "2",
          strokeLinecap: "round",
          strokeLinejoin: "round",
        }),
      }),
      "Previous",
    ],
  })
);
du.displayName = "PaginationPrevious";
const fu = g.forwardRef(({ className: e, ...t }, n) =>
  u.jsxs(De, {
    ref: n,
    variant: "ghost",
    size: "md",
    className: T(cu(), e),
    "aria-label": "Go to next page",
    ...t,
    children: [
      "Next",
      u.jsx("svg", {
        width: "16",
        height: "16",
        viewBox: "0 0 16 16",
        fill: "none",
        className: "ml-1",
        children: u.jsx("path", {
          d: "M6 4L10 8L6 12",
          stroke: "currentColor",
          strokeWidth: "2",
          strokeLinecap: "round",
          strokeLinejoin: "round",
        }),
      }),
    ],
  })
);
fu.displayName = "PaginationNext";
const pu = g.forwardRef(({ className: e, ...t }, n) =>
  u.jsx("span", {
    ref: n,
    "aria-hidden": !0,
    className: T(
      "flex h-8 w-8 items-center justify-center text-[var(--color-charcoal-500)]",
      e
    ),
    ...t,
    children: "…",
  })
);
pu.displayName = "PaginationEllipsis";
const mu = g.forwardRef(
  (
    { className: e, currentPage: t, itemsPerPage: n, totalItems: r, ...o },
    l
  ) => {
    const s = (t - 1) * n + 1,
      i = Math.min(t * n, r);
    return u.jsxs("div", {
      ref: l,
      className: T(rg(), e),
      ...o,
      children: [
        u.jsx("span", { children: "Showing" }),
        u.jsx("strong", { children: s }),
        u.jsx("span", { children: "to" }),
        u.jsx("strong", { children: i }),
        u.jsx("span", { children: "of" }),
        u.jsx("strong", { children: r }),
        u.jsx("span", { children: "results" }),
      ],
    });
  }
);
mu.displayName = "PaginationResults";
const In = {
    base: {
      fontFamily: "var(--font-family-sans, 'Poppins', system-ui, sans-serif)",
      backgroundColor: "var(--color-surface, #ffffff)",
      color: "var(--color-text-body, #374151)",
      borderColor: "var(--color-border, #d1d5db)",
    },
    variants: {
      default: {
        backgroundColor: "var(--color-surface, #ffffff)",
        borderColor: "var(--color-border, #d1d5db)",
      },
      striped: {
        backgroundColor: "var(--color-surface, #ffffff)",
        borderColor: "var(--color-border, #d1d5db)",
      },
      minimal: {
        backgroundColor: "var(--color-surface, #ffffff)",
        borderColor: "transparent",
      },
    },
    sizes: {
      sm: { fontSize: "var(--font-size-xs, 12px)" },
      md: { fontSize: "var(--font-size-sm, 14px)" },
      lg: { fontSize: "var(--font-size-base, 16px)" },
    },
    header: {
      backgroundColor: "var(--color-surface-subtle, #f9fafb)",
      borderColor: "var(--color-border, #d1d5db)",
      color: "var(--color-text-heading, #1f2937)",
    },
    cell: { color: "var(--color-text-body, #374151)" },
  },
  og = K(
    ["w-full caption-bottom text-sm", "border-collapse border-spacing-0"].join(
      " "
    ),
    {
      variants: {
        variant: {
          default: "border border-[var(--color-border, #d1d5db)]",
          striped: "border border-[var(--color-border, #d1d5db)]",
          minimal: "border-0",
        },
        size: { sm: "text-xs", md: "text-sm", lg: "text-base" },
      },
      defaultVariants: { variant: "default", size: "md" },
    }
  ),
  lg = K(
    [
      "border-b border-[var(--color-border, #d1d5db)]",
      "bg-[var(--color-surface-subtle, #f9fafb)]",
    ].join(" ")
  ),
  sg = K(""),
  ig = K(
    [
      "transition-colors duration-150",
      "border-b border-[var(--color-border, #d1d5db)] last:border-0",
    ].join(" "),
    {
      variants: {
        variant: {
          default: [
            "hover:bg-gray-100",
            "data-[state=selected]:bg-blue-50",
          ].join(" "),
          striped: [
            "even:bg-gray-50",
            "hover:bg-gray-100",
            "even:hover:bg-gray-200",
            "data-[state=selected]:bg-blue-50",
          ].join(" "),
        },
      },
      defaultVariants: { variant: "default" },
    }
  ),
  ag = K(
    [
      "h-12 px-4 text-left align-middle",
      "font-medium text-[var(--color-text-heading, #1f2937)]",
      "text-sm font-semibold",
      "[&:has([role=checkbox])]:pr-0",
    ].join(" "),
    {
      variants: {
        sortable: {
          true: [
            "cursor-pointer select-none",
            "hover:text-blue-600",
            "hover:bg-gray-100",
            "transition-all duration-150",
            "active:bg-gray-200",
          ].join(" "),
          false: "",
        },
      },
      defaultVariants: { sortable: !1 },
    }
  ),
  cg = K(
    [
      "px-4 py-3 align-middle",
      "text-[var(--color-text-body, #374151)]",
      "[&:has([role=checkbox])]:pr-0",
    ].join(" "),
    {
      variants: {
        size: {
          sm: "px-3 py-2 text-xs",
          md: "px-4 py-3 text-sm",
          lg: "px-6 py-4 text-base",
        },
      },
      defaultVariants: { size: "md" },
    }
  ),
  hu = g.forwardRef(
    (
      { className: e, variant: t = "default", size: n = "md", style: r, ...o },
      l
    ) => {
      const s = {
        ...In.base,
        ...(t && In.variants[t]),
        ...(n && In.sizes[n]),
        ...r,
      };
      return u.jsx("div", {
        className: "w-full overflow-x-auto",
        children: u.jsx("table", {
          ref: l,
          className: T(og({ variant: t, size: n }), e),
          style: s,
          ...o,
        }),
      });
    }
  );
hu.displayName = "Table";
const vu = g.forwardRef(({ className: e, style: t, ...n }, r) => {
  const o = { ...In.header, ...t };
  return u.jsx("thead", { ref: r, className: T(lg(), e), style: o, ...n });
});
vu.displayName = "TableHeader";
const gu = g.forwardRef(({ className: e, ...t }, n) =>
  u.jsx("tbody", { ref: n, className: T(sg(), e), ...t })
);
gu.displayName = "TableBody";
const ss = g.forwardRef(({ className: e, variant: t = "default", ...n }, r) =>
  u.jsx("tr", { ref: r, className: T(ig({ variant: t }), e), ...n })
);
ss.displayName = "TableRow";
const is = g.forwardRef(
  (
    {
      className: e,
      sortable: t = !1,
      sortDirection: n,
      onSort: r,
      children: o,
      style: l,
      ...s
    },
    i
  ) => {
    const a = () => {
        t && r && r();
      },
      c = { ...In.cell, color: In.header.color, ...l };
    return u.jsx("th", {
      ref: i,
      className: T(ag({ sortable: t }), e),
      onClick: a,
      style: c,
      ...s,
      children: u.jsxs("div", {
        className: "flex items-center space-x-2",
        children: [
          u.jsx("span", { children: o }),
          t &&
            u.jsx("span", {
              className: "ml-2",
              children: u.jsx("svg", {
                width: "16",
                height: "16",
                viewBox: "0 0 16 16",
                className: T(
                  "fill-[var(--color-text-heading, #1f2937)] transition-transform duration-150",
                  n === "desc" ? "rotate-180" : "rotate-0",
                  !n && "opacity-40"
                ),
                children: u.jsx("path", { d: "M8 2L6 6h1.5v8h1v-8H10L8 2z" }),
              }),
            }),
        ],
      }),
    });
  }
);
is.displayName = "TableHead";
const as = g.forwardRef(
  ({ className: e, size: t = "md", style: n, ...r }, o) => {
    const l = { color: In.cell.color, ...n };
    return u.jsx("td", {
      ref: o,
      className: T(cg({ size: t }), e),
      style: l,
      ...r,
    });
  }
);
as.displayName = "TableCell";
const YS = ({ direction: e }) =>
    u.jsx("svg", {
      width: "16",
      height: "16",
      viewBox: "0 0 16 16",
      className: T(
        "transition-transform duration-150",
        e === "desc" ? "rotate-180" : "rotate-0"
      ),
      children: u.jsx("path", {
        d: "M8 2L6 6h1.5v8h1v-8H10L8 2z",
        fill: "currentColor",
      }),
    }),
  cs = ({
    columns: e,
    currentColumn: t,
    currentDirection: n = "asc",
    onColumnChange: r,
    onDirectionChange: o,
    className: l,
    disabled: s = !1,
    hintText: i,
    error: a,
    success: c,
    warning: f,
    containerClassName: p,
    helperClassName: m,
  }) => {
    const x = Wn(a, c, f),
      w = Un(a, c, f),
      v = g.useId(),
      b = $o(v, a, c, f, i),
      h = e.filter((C) => C.sortable),
      d = (C) => {
        C === "none" || C === "" ? r == null || r(null) : r == null || r(C);
      },
      y = () => {
        const C = n === "asc" ? "desc" : "asc";
        o == null || o(C);
      },
      S = t || "none";
    return u.jsxs("div", {
      className: T(Vo(), p),
      children: [
        i &&
          u.jsx("p", {
            className: T(rt({ variant: "muted" }), "mb-2"),
            children: i,
          }),
        u.jsxs("div", {
          className: T("flex items-center gap-2", l),
          id: v,
          children: [
            u.jsxs(ou, {
              value: S,
              onValueChange: d,
              size: "md",
              disabled: s,
              hideLabel: !0,
              placeholder: "Sort by column",
              className: "min-w-[160px]",
              ...b,
              children: [
                u.jsx(_n, { value: "none", children: "No sorting" }),
                h.map((C) =>
                  u.jsx(_n, { value: C.key, children: C.header }, C.key)
                ),
              ],
            }),
            u.jsx(De, {
              variant: "ghost",
              size: "sm",
              leftIcon: u.jsx(YS, { direction: n }),
              onClick: y,
              disabled: s || !t,
              "data-icon-only": "true",
              "data-size": "sm",
              "aria-label": `Sort ${n === "asc" ? "ascending" : "descending"}`,
            }),
          ],
        }),
        x &&
          u.jsx("p", {
            className: T(rt({ variant: w }), "mt-2", m),
            children: x,
          }),
      ],
    });
  },
  Yr = {
    base: {
      fontFamily: "var(--font-family-sans, 'Poppins', system-ui, sans-serif)",
      display: "flex",
      flexDirection: "column",
      gap: "var(--spacing-4, 16px)",
      backgroundColor: "var(--color-surface, #ffffff)",
      borderRadius: "var(--border-radius-lg, 8px)",
      color: "var(--color-text-body, #374151)",
    },
    variants: {
      default: { backgroundColor: "var(--color-surface, #ffffff)" },
      elevated: {
        backgroundColor: "var(--color-surface, #ffffff)",
        boxShadow: "var(--shadow-sm, 0 1px 2px 0 rgba(0, 0, 0, 0.05))",
      },
    },
    container: {
      borderWidth: "1px",
      borderStyle: "solid",
      borderColor: "var(--color-border, #d1d5db)",
      borderRadius: "var(--border-radius-lg, 8px)",
      overflow: "hidden",
    },
    emptyState: {
      color: "var(--color-text-muted, #6b7280)",
      textAlign: "center",
    },
    loadingState: {
      color: "var(--color-text-muted, #6b7280)",
      textAlign: "center",
    },
  },
  XS = K(
    [
      "w-full space-y-4",
      "font-[var(--font-family-sans,'Poppins',system-ui,sans-serif)]",
    ].join(" "),
    {
      variants: {
        variant: {
          default: "bg-[var(--color-surface,#ffffff)]",
          elevated: [
            "bg-[var(--color-surface,#ffffff)]",
            "shadow-[var(--shadow-sm,0_1px_2px_0_rgba(0,0,0,0.05))]",
          ].join(" "),
        },
        size: {
          sm: "text-sm space-y-3",
          md: "text-sm space-y-4",
          lg: "text-base space-y-5",
        },
      },
      defaultVariants: { variant: "default", size: "md" },
    }
  ),
  ZS = K(
    [
      "border border-[var(--color-border,#d1d5db)]",
      "rounded-[var(--border-radius-lg,8px)]",
      "overflow-hidden",
    ].join(" ")
  ),
  ef = K(
    [
      "flex items-center justify-center h-64",
      "text-[var(--color-text-muted,#6b7280)]",
    ].join(" ")
  ),
  qS = () =>
    u.jsx("svg", {
      width: "16",
      height: "16",
      viewBox: "0 0 16 16",
      fill: "none",
      children: u.jsx("path", {
        d: "M7.333 12.667A5.333 5.333 0 1 0 7.333 2a5.333 5.333 0 0 0 0 10.667ZM14 14l-2.9-2.9",
        stroke: "currentColor",
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round",
      }),
    }),
  JS = () =>
    u.jsxs("svg", {
      width: "16",
      height: "16",
      viewBox: "0 0 16 16",
      fill: "none",
      children: [
        u.jsx("path", {
          d: "M7.333 2.667H2.667A1.333 1.333 0 0 0 1.333 4v9.333A1.333 1.333 0 0 0 2.667 14.667H12a1.333 1.333 0 0 0 1.333-1.334V8",
          stroke: "currentColor",
          strokeWidth: "2",
          strokeLinecap: "round",
          strokeLinejoin: "round",
        }),
        u.jsx("path", {
          d: "M12.333 1.667a1.414 1.414 0 1 1 2 2L8 10l-2.667.667L6 8l6.333-6.333Z",
          stroke: "currentColor",
          strokeWidth: "2",
          strokeLinecap: "round",
          strokeLinejoin: "round",
        }),
      ],
    }),
  eC = () =>
    u.jsx("svg", {
      width: "16",
      height: "16",
      viewBox: "0 0 16 16",
      fill: "none",
      children: u.jsx("path", {
        d: "M2 4h12M5.333 4V2.667a1.333 1.333 0 0 1 1.334-1.334h2.666a1.333 1.333 0 0 1 1.334 1.334V4m2 0v9.333a1.333 1.333 0 0 1-1.334 1.334H4.667a1.333 1.333 0 0 1-1.334-1.334V4h8.667Z",
        stroke: "currentColor",
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round",
      }),
    });
function ug(e, t = {}) {
  var d, y;
  const [n, r] = g.useState(""),
    [o, l] = g.useState(((d = t.defaultSort) == null ? void 0 : d.key) || null),
    [s, i] = g.useState(
      ((y = t.defaultSort) == null ? void 0 : y.direction) || "asc"
    ),
    [a, c] = g.useState(1),
    f = g.useMemo(
      () =>
        !t.searchable || !n
          ? e
          : e.filter((S) =>
              Object.values(S).some((C) =>
                String(C).toLowerCase().includes(n.toLowerCase())
              )
            ),
      [e, n, t.searchable]
    ),
    p = g.useMemo(
      () =>
        o
          ? [...f].sort((S, C) => {
              const E = S[o],
                k = C[o],
                N = s === "asc" ? 1 : -1;
              return typeof E == "string" && typeof k == "string"
                ? E.localeCompare(k) * N
                : E < k
                ? -1 * N
                : E > k
                ? 1 * N
                : 0;
            })
          : f,
      [f, o, s]
    ),
    m = t.pageSize || 10,
    x = g.useMemo(() => {
      const S = (a - 1) * m;
      return p.slice(S, S + m);
    }, [p, a, m]),
    w = g.useCallback((S) => {
      l(S), c(1);
    }, []),
    v = g.useCallback((S) => {
      i(S);
    }, []),
    b = g.useCallback((S) => {
      r(S), c(1);
    }, []),
    h = g.useCallback((S) => {
      c(S);
    }, []);
  return {
    paginatedData: x,
    totalItems: p.length,
    searchQuery: n,
    sortField: o,
    sortDirection: s,
    currentPage: a,
    handleSearch: b,
    handleSortColumnChange: w,
    handleSortDirectionChange: v,
    handlePageChange: h,
  };
}
const dg = ({
    data: e,
    columns: t,
    title: n,
    description: r,
    className: o,
    variant: l = "default",
    size: s = "md",
    containerClassName: i,
    style: a,
    searchable: c = !1,
    searchPlaceholder: f = "Search",
    onSearch: p,
    defaultSort: m,
    onSort: x,
    pagination: w = {},
    rowActions: v = [],
    toolbarActions: b = [],
    footerActions: h = [],
    loading: d = !1,
    emptyMessage: y = "No data available",
    striped: S = !1,
    hoverable: C = !0,
    getRowKey: E,
    ...k
  }) => {
    const {
      paginatedData: N,
      totalItems: _,
      searchQuery: P,
      sortField: z,
      sortDirection: L,
      currentPage: $,
      handleSearch: V,
      handleSortColumnChange: H,
      handleSortDirectionChange: D,
      handlePageChange: B,
    } = ug(e, { searchable: c, defaultSort: m, pageSize: w.pageSize });
    g.useEffect(() => {
      p && p(P);
    }, [P, p]),
      g.useEffect(() => {
        x && z && x(z, L);
      }, [z, L, x]);
    const j = v.length > 0,
      I = _ > (w.pageSize || 10),
      O = t.some((A) => A.sortable);
    return u.jsxs("div", {
      className: T(XS({ variant: l, size: s }), o),
      style: { ...Yr.base, ...(l && Yr.variants[l]), ...a },
      ...k,
      children: [
        (n || r) &&
          u.jsxs("div", {
            className: "space-y-2",
            children: [
              n &&
                u.jsx("h1", {
                  className: "text-2xl font-bold text-[var(--color-navy-500)]",
                  children: n,
                }),
              r &&
                u.jsx("p", {
                  className: "text-[var(--color-charcoal-500)] max-w-3xl",
                  children: r,
                }),
            ],
          }),
        (c || O || b.length > 0) &&
          u.jsxs("div", {
            className:
              "flex flex-col sm:flex-row gap-4 justify-between items-start sm:items-center",
            children: [
              u.jsxs("div", {
                className:
                  "flex flex-col sm:flex-row gap-4 items-start sm:items-center",
                children: [
                  c &&
                    u.jsx("div", {
                      className: "w-full sm:w-auto sm:min-w-[300px]",
                      children: u.jsx(vr, {
                        placeholder: f,
                        value: P,
                        onChange: (A) => V(A.target.value),
                        leftIcon: u.jsx(qS, {}),
                        className: "w-full",
                      }),
                    }),
                  O &&
                    u.jsx(cs, {
                      columns: t,
                      currentColumn: z,
                      currentDirection: L,
                      onColumnChange: H,
                      onDirectionChange: D,
                    }),
                ],
              }),
              b.length > 0 &&
                u.jsx("div", {
                  className: "flex gap-3",
                  children: b.map((A, Y) =>
                    u.jsx(
                      De,
                      {
                        variant: A.variant || "outline",
                        onClick: A.onClick,
                        leftIcon: A.icon,
                        className: A.className,
                        children: A.label,
                      },
                      Y
                    )
                  ),
                }),
            ],
          }),
        u.jsx("div", {
          className: T(ZS(), i),
          style: Yr.container,
          children: d
            ? u.jsx("div", {
                className: ef(),
                style: Yr.loadingState,
                children: "Loading...",
              })
            : N.length === 0
            ? u.jsx("div", {
                className: ef(),
                style: Yr.emptyState,
                children: y,
              })
            : u.jsxs(hu, {
                variant: S ? "striped" : "default",
                children: [
                  u.jsx(vu, {
                    children: u.jsxs(ss, {
                      children: [
                        t.map((A) =>
                          u.jsx(
                            is,
                            {
                              className: T(A.className),
                              style: A.width ? { width: A.width } : void 0,
                              children: A.header,
                            },
                            A.key
                          )
                        ),
                        j &&
                          u.jsx(is, {
                            className: "text-center",
                            children: "Action",
                          }),
                      ],
                    }),
                  }),
                  u.jsx(gu, {
                    children: N.map((A, Y) =>
                      u.jsxs(
                        ss,
                        {
                          variant: S ? "striped" : "default",
                          children: [
                            t.map((J) =>
                              u.jsx(
                                as,
                                {
                                  className: T(J.className),
                                  children: J.render
                                    ? J.render(A[J.key], A, Y)
                                    : String(A[J.key] || ""),
                                },
                                J.key
                              )
                            ),
                            j &&
                              u.jsx(as, {
                                children: u.jsx("div", {
                                  className: "flex justify-center gap-2",
                                  children: v.map((J, ye) =>
                                    u.jsx(
                                      De,
                                      {
                                        variant: J.variant || "ghost",
                                        size: "sm",
                                        leftIcon: J.icon,
                                        "data-icon-only": "true",
                                        "data-size": "sm",
                                        onClick: () => J.onClick(A, Y),
                                        className: T(
                                          J.variant === "destructive" &&
                                            "text-[var(--color-red-600,#dc2626)] hover:text-[var(--color-red-700,#b91c1c)]",
                                          J.className
                                        ),
                                        disabled: J.disabled
                                          ? J.disabled(A)
                                          : !1,
                                        "aria-label": `${J.label} row ${Y + 1}`,
                                        children: !J.icon && J.label,
                                      },
                                      ye
                                    )
                                  ),
                                }),
                              }),
                          ],
                        },
                        E ? E(A, Y) : `row-${$}-${Y}`
                      )
                    ),
                  }),
                ],
              }),
        }),
        I &&
          u.jsx(Ws, {
            totalItems: _,
            currentPage: $,
            itemsPerPage: w.pageSize || 10,
            onPageChange: B,
            showResults: w.showResults,
            maxVisiblePages: w.maxVisiblePages,
          }),
        h.length > 0 &&
          u.jsx("div", {
            className: "flex justify-end gap-3",
            children: h.map((A, Y) =>
              u.jsx(
                De,
                {
                  variant: A.variant || "primary",
                  onClick: A.onClick,
                  leftIcon: A.icon,
                  className: A.className,
                  children: A.label,
                },
                Y
              )
            ),
          }),
      ],
    });
  },
  tC = (e, t) => {
    const n = [];
    return (
      e &&
        n.push({
          label: "Edit",
          icon: u.jsx(JS, {}),
          onClick: e,
          variant: "ghost",
        }),
      t &&
        n.push({
          label: "Delete",
          icon: u.jsx(eC, {}),
          onClick: t,
          variant: "ghost",
          className: "text-destructive hover:text-destructive",
        }),
      n
    );
  },
  ji = Object.freeze(
    Object.defineProperty(
      {
        __proto__: null,
        Button: De,
        Checkbox: kn,
        CheckboxGroup: au,
        ColumnSortControls: cs,
        DataTable: dg,
        Input: vr,
        Pagination: Ws,
        PaginationEllipsis: pu,
        PaginationItem: uu,
        PaginationNext: fu,
        PaginationPrevious: du,
        PaginationResults: mu,
        RadioGroup: Jv,
        RadioItem: eg,
        Select: nu,
        SelectContent: Vs,
        SelectField: ou,
        SelectGroup: bS,
        SelectItem: _n,
        SelectTrigger: Fs,
        SelectValue: ru,
        SidebarBusinessLogo: Io,
        SidebarMenu: Ns,
        SidebarMenuItem: Te,
        SidebarMenuSection: uo,
        SidebarMenuSectionRoot: Wc,
        SidebarProfile: _o,
        SidebarToggle: Lc,
        Table: hu,
        TableBody: gu,
        TableCell: as,
        TableHead: is,
        TableHeader: vu,
        TableRow: ss,
        buttonVariants: sh,
        checkboxVariants: Zv,
        cn: T,
        createDefaultRowActions: tC,
        createNavigationItem: vw,
        createNavigationSection: gw,
        fieldVariants: Vo,
        getExpandedSectionsForPath: Sa,
        getFormFieldAria: $o,
        getFormFieldIds: bw,
        getHelperContent: Wn,
        getHelperVariant: Un,
        getNavigationStats: yw,
        getSidebarIconSize: Lm,
        getSidebarItemAriaLabel: Mm,
        getSidebarSectionAriaLabel: Om,
        hasValidationState: ih,
        helperVariants: rt,
        inputVariants: ah,
        isSidebarItemActive: Jl,
        labelVariants: Fo,
        optionalVariants: ww,
        paginationItemVariants: ng,
        paginationNavVariants: cu,
        paginationResultsVariants: rg,
        paginationVariants: tg,
        radioVariants: qv,
        requiredVariants: xw,
        selectTriggerVariants: Sv,
        sidebarBadgeVariants: Tc,
        sidebarBusinessLogoVariants: Am,
        sidebarContainerVariants: Nm,
        sidebarMenuItemVariants: jm,
        sidebarMenuSectionContentVariants: Im,
        sidebarMenuSectionRootVariants: Rm,
        sidebarMenuSectionTriggerVariants: _m,
        sidebarMenuSectionVariants: Pm,
        sidebarProfileVariants: Tm,
        sidebarToggleVariants: $x,
        sidebarVariants: Em,
        tableBodyVariants: sg,
        tableCellVariants: cg,
        tableHeadVariants: ag,
        tableHeaderVariants: lg,
        tableRowVariants: ig,
        tableVariants: og,
        useDataTable: ug,
        useNavigationState: hw,
      },
      Symbol.toStringTag,
      { value: "Module" }
    )
  );
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const nC = (e) => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(),
  rC = (e) =>
    e.replace(/^([A-Z])|[\s-_]+(\w)/g, (t, n, r) =>
      r ? r.toUpperCase() : n.toLowerCase()
    ),
  tf = (e) => {
    const t = rC(e);
    return t.charAt(0).toUpperCase() + t.slice(1);
  },
  fg = (...e) =>
    e
      .filter((t, n, r) => !!t && t.trim() !== "" && r.indexOf(t) === n)
      .join(" ")
      .trim(),
  oC = (e) => {
    for (const t in e)
      if (t.startsWith("aria-") || t === "role" || t === "title") return !0;
  };
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var lC = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
};
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const sC = g.forwardRef(
  (
    {
      color: e = "currentColor",
      size: t = 24,
      strokeWidth: n = 2,
      absoluteStrokeWidth: r,
      className: o = "",
      children: l,
      iconNode: s,
      ...i
    },
    a
  ) =>
    g.createElement(
      "svg",
      {
        ref: a,
        ...lC,
        width: t,
        height: t,
        stroke: e,
        strokeWidth: r ? (Number(n) * 24) / Number(t) : n,
        className: fg("lucide", o),
        ...(!l && !oC(i) && { "aria-hidden": "true" }),
        ...i,
      },
      [
        ...s.map(([c, f]) => g.createElement(c, f)),
        ...(Array.isArray(l) ? l : [l]),
      ]
    )
);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const vt = (e, t) => {
  const n = g.forwardRef(({ className: r, ...o }, l) =>
    g.createElement(sC, {
      ref: l,
      iconNode: t,
      className: fg(`lucide-${nC(tf(e))}`, `lucide-${e}`, r),
      ...o,
    })
  );
  return (n.displayName = tf(e)), n;
};
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const iC = [
    ["path", { d: "M3 3v16a2 2 0 0 0 2 2h16", key: "c24i48" }],
    ["path", { d: "M18 17V9", key: "2bz60n" }],
    ["path", { d: "M13 17V5", key: "1frdt8" }],
    ["path", { d: "M8 17v-3", key: "17ska0" }],
  ],
  aC = vt("chart-column", iC);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const cC = [
    ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
    ["line", { x1: "12", x2: "12", y1: "8", y2: "12", key: "1pkeuh" }],
    ["line", { x1: "12", x2: "12.01", y1: "16", y2: "16", key: "4dfq90" }],
  ],
  uC = vt("circle-alert", cC);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const dC = [
    ["path", { d: "M21.801 10A10 10 0 1 1 17 3.335", key: "yps3ct" }],
    ["path", { d: "m9 11 3 3L22 4", key: "1pflzl" }],
  ],
  fC = vt("circle-check-big", dC);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const pC = [
    ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
    ["path", { d: "m15 9-6 6", key: "1uzhvr" }],
    ["path", { d: "m9 9 6 6", key: "z0biqf" }],
  ],
  mC = vt("circle-x", pC);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const hC = [
    ["line", { x1: "12", x2: "12", y1: "2", y2: "22", key: "7eqyqh" }],
    [
      "path",
      { d: "M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6", key: "1b0p4s" },
    ],
  ],
  nf = vt("dollar-sign", hC);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const vC = [
    [
      "path",
      {
        d: "M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",
        key: "1rqfz7",
      },
    ],
    ["path", { d: "M14 2v4a2 2 0 0 0 2 2h4", key: "tnqrlb" }],
    ["path", { d: "M10 9H8", key: "b1mrlr" }],
    ["path", { d: "M16 13H8", key: "t4e002" }],
    ["path", { d: "M16 17H8", key: "z1uh3a" }],
  ],
  Oa = vt("file-text", vC);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const gC = [["path", { d: "M21 12a9 9 0 1 1-6.219-8.56", key: "13zald" }]],
  rf = vt("loader-circle", gC);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const yC = [
    ["path", { d: "M12.586 12.586 19 19", key: "ea5xo7" }],
    [
      "path",
      {
        d: "M3.688 3.037a.497.497 0 0 0-.651.651l6.5 15.999a.501.501 0 0 0 .947-.062l1.569-6.083a2 2 0 0 1 1.448-1.479l6.124-1.579a.5.5 0 0 0 .063-.947z",
        key: "277e5u",
      },
    ],
  ],
  xC = vt("mouse-pointer", yC);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const wC = [
    [
      "path",
      {
        d: "M21 10.656V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h12.344",
        key: "2acyp4",
      },
    ],
    ["path", { d: "m9 11 3 3L22 4", key: "1pflzl" }],
  ],
  bC = vt("square-check-big", wC);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const SC = [
    ["path", { d: "M12 4v16", key: "1654pz" }],
    ["path", { d: "M4 7V5a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v2", key: "e0r10z" }],
    ["path", { d: "M9 20h6", key: "s66wpe" }],
  ],
  CC = vt("type", SC);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const kC = [
    ["path", { d: "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2", key: "1yyitq" }],
    ["path", { d: "M16 3.128a4 4 0 0 1 0 7.744", key: "16gr8j" }],
    ["path", { d: "M22 21v-2a4 4 0 0 0-3-3.87", key: "kshegd" }],
    ["circle", { cx: "9", cy: "7", r: "4", key: "nufk8" }],
  ],
  za = vt("users", kC),
  EC = {
    contact: { name: "Jane Doe", role: "Administrator" },
    entity: { name: "Acme Corp", id: "acme-001" },
  };
function NC({ children: e, currentPage: t, onPageChange: n }) {
  const r = (o) => {
    n(o);
  };
  return u.jsxs("div", {
    className: "flex h-screen bg-gray-50",
    children: [
      u.jsx("div", {
        className: "w-64",
        children: u.jsxs(Ns, {
          asContainer: !0,
          size: "md",
          className: "h-full",
          children: [
            u.jsx("div", {
              children: u.jsx(Io, {
                businessName: "Design System",
                showTextWithLogo: !0,
              }),
            }),
            u.jsx("div", {
              className: "border-b border-gray-200",
              children: u.jsx(_o, { user: EC, position: "middle" }),
            }),
            u.jsx("div", {
              className: "flex-1 overflow-y-auto p-4",
              children: u.jsxs(Wc, {
                children: [
                  u.jsx(uo, {
                    title: "Form Components",
                    icon: Oa,
                    children: u.jsxs("div", {
                      className: "space-y-1",
                      children: [
                        u.jsx(Te, {
                          icon: xC,
                          active: t === "form",
                          onClick: () => r("form"),
                          children: "Buttons & Actions",
                        }),
                        u.jsx(Te, { icon: CC, children: "Input Fields" }),
                        u.jsx(Te, { icon: bC, children: "Form Controls" }),
                      ],
                    }),
                  }),
                  u.jsx(uo, {
                    title: "Data Components",
                    icon: aC,
                    children: u.jsxs("div", {
                      className: "space-y-1",
                      children: [
                        u.jsx(Te, {
                          active: t === "data",
                          onClick: () => r("data"),
                          children: "Tables & Lists",
                        }),
                        u.jsx(Te, { children: "Charts & Graphs" }),
                      ],
                    }),
                  }),
                  u.jsx(uo, {
                    title: "Navigation",
                    icon: za,
                    children: u.jsxs("div", {
                      className: "space-y-1",
                      children: [
                        u.jsx(Te, {
                          active: t === "navigation",
                          onClick: () => r("navigation"),
                          children: "Sidebar Components",
                        }),
                        u.jsx(Te, { children: "Menu Systems" }),
                      ],
                    }),
                  }),
                ],
              }),
            }),
          ],
        }),
      }),
      u.jsx("div", {
        className: "flex-1 overflow-y-auto",
        children: u.jsx("div", { className: "p-8", children: e }),
      }),
    ],
  });
}
const jC = "modulepreload",
  RC = function (e) {
    return "/" + e;
  },
  of = {},
  Ri = function (t, n, r) {
    let o = Promise.resolve();
    if (n && n.length > 0) {
      document.getElementsByTagName("link");
      const s = document.querySelector("meta[property=csp-nonce]"),
        i =
          (s == null ? void 0 : s.nonce) ||
          (s == null ? void 0 : s.getAttribute("nonce"));
      o = Promise.allSettled(
        n.map((a) => {
          if (((a = RC(a)), a in of)) return;
          of[a] = !0;
          const c = a.endsWith(".css"),
            f = c ? '[rel="stylesheet"]' : "";
          if (document.querySelector(`link[href="${a}"]${f}`)) return;
          const p = document.createElement("link");
          if (
            ((p.rel = c ? "stylesheet" : jC),
            c || (p.as = "script"),
            (p.crossOrigin = ""),
            (p.href = a),
            i && p.setAttribute("nonce", i),
            document.head.appendChild(p),
            c)
          )
            return new Promise((m, x) => {
              p.addEventListener("load", m),
                p.addEventListener("error", () =>
                  x(new Error(`Unable to preload CSS for ${a}`))
                );
            });
        })
      );
    }
    function l(s) {
      const i = new Event("vite:preloadError", { cancelable: !0 });
      if (((i.payload = s), window.dispatchEvent(i), !i.defaultPrevented))
        throw s;
    }
    return o.then((s) => {
      for (const i of s || []) i.status === "rejected" && l(i.reason);
      return t().catch(l);
    });
  };
function PC() {
  const [e, t] = g.useState([]),
    [n, r] = g.useState(!1),
    o = g.useCallback(async () => {
      r(!0);
      const s = [];
      try {
        s.push({
          name: "Design Tokens Package",
          status: "success",
          message: "Design tokens CSS is loaded",
        });
      } catch (i) {
        s.push({
          name: "Design Tokens Package",
          status: "error",
          message: "Failed to validate design tokens",
          details: i instanceof Error ? i.message : "Unknown error",
        });
      }
      try {
        const i = await Ri(() => Promise.resolve().then(() => ji), void 0),
          a = Object.keys(i);
        s.push({
          name: "Components Package",
          status: "success",
          message: `Successfully imported ${a.length} components`,
          details: `Available: ${a.slice(0, 5).join(", ")}${
            a.length > 5 ? "..." : ""
          }`,
        });
      } catch (i) {
        s.push({
          name: "Components Package",
          status: "error",
          message: "Failed to import components package",
          details: i instanceof Error ? i.message : "Unknown error",
        });
      }
      try {
        const { Button: i } = await Ri(async () => {
          const { Button: a } = await Promise.resolve().then(() => ji);
          return { Button: a };
        }, void 0);
        typeof i == "function"
          ? s.push({
              name: "Button Component",
              status: "success",
              message: "Button component imported successfully",
            })
          : s.push({
              name: "Button Component",
              status: "warning",
              message: "Button component not found in exports",
            });
      } catch (i) {
        s.push({
          name: "Button Component",
          status: "error",
          message: "Failed to import Button component",
          details: i instanceof Error ? i.message : "Unknown error",
        });
      }
      try {
        const { Input: i } = await Ri(async () => {
          const { Input: a } = await Promise.resolve().then(() => ji);
          return { Input: a };
        }, void 0);
        typeof i == "function"
          ? s.push({
              name: "Input Component",
              status: "success",
              message: "Input component imported successfully",
            })
          : s.push({
              name: "Input Component",
              status: "warning",
              message: "Input component not found in exports",
            });
      } catch (i) {
        s.push({
          name: "Input Component",
          status: "error",
          message: "Failed to import Input component",
          details: i instanceof Error ? i.message : "Unknown error",
        });
      }
      t(s), r(!1);
    }, []);
  g.useEffect(() => {
    o();
  }, [o]);
  const l = (s) => {
    switch (s) {
      case "success":
        return u.jsx(fC, { className: "w-4 h-4 text-green-500" });
      case "error":
        return u.jsx(mC, { className: "w-4 h-4 text-red-500" });
      case "warning":
        return u.jsx(uC, { className: "w-4 h-4 text-yellow-500" });
      default:
        return u.jsx(rf, { className: "w-4 h-4 text-gray-400 animate-spin" });
    }
  };
  return u.jsxs("div", {
    className: "p-6",
    children: [
      u.jsxs("div", {
        className: "flex items-center justify-between mb-4",
        children: [
          u.jsx("h2", {
            className: "text-lg font-semibold text-gray-900",
            children: "Import Validation",
          }),
          u.jsxs("button", {
            onClick: o,
            disabled: n,
            className:
              "px-3 py-1.5 bg-blue-600 text-white text-sm rounded-md hover:bg-blue-700 disabled:opacity-50 flex items-center gap-2",
            children: [
              n && u.jsx(rf, { className: "w-3 h-3 animate-spin" }),
              n ? "Running..." : "Re-run Tests",
            ],
          }),
        ],
      }),
      u.jsx("div", {
        className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3",
        children: e.map((s, i) =>
          u.jsxs(
            "div",
            {
              className:
                "flex items-center gap-2 p-3 border rounded-lg bg-gray-50",
              children: [
                l(s.status),
                u.jsxs("div", {
                  className: "flex-1 min-w-0",
                  children: [
                    u.jsx("h3", {
                      className: "font-medium text-sm text-gray-900 truncate",
                      children: s.name,
                    }),
                    u.jsx("p", {
                      className: "text-xs text-gray-600 truncate",
                      children: s.message,
                    }),
                    s.details &&
                      u.jsx("p", {
                        className: "text-xs text-gray-500 truncate",
                        title: s.details,
                        children: s.details,
                      }),
                  ],
                }),
              ],
            },
            i
          )
        ),
      }),
    ],
  });
}
function lf() {
  const [e, t] = g.useState(""),
    [n, r] = g.useState(""),
    [o, l] = g.useState(!1);
  return u.jsxs("div", {
    className: "space-y-8",
    children: [
      u.jsxs("div", {
        children: [
          u.jsx("h2", {
            className: "text-2xl font-bold mb-4",
            children: "Form Components",
          }),
          u.jsx("p", {
            className: "text-gray-600 mb-6",
            children: "Testing form components from the design system",
          }),
        ],
      }),
      u.jsxs("div", {
        className: "space-y-8",
        children: [
          u.jsxs("section", {
            children: [
              u.jsx("h3", {
                className: "text-lg font-semibold mb-3",
                children: "Buttons",
              }),
              u.jsxs("div", {
                className: "flex flex-wrap gap-4",
                children: [
                  u.jsx(De, { variant: "primary", children: "Primary Button" }),
                  u.jsx(De, { variant: "outline", children: "Outline Button" }),
                  u.jsx(De, { variant: "ghost", children: "Ghost Button" }),
                  u.jsx(De, {
                    variant: "destructive",
                    children: "Destructive Button",
                  }),
                ],
              }),
            ],
          }),
          u.jsxs("section", {
            children: [
              u.jsx("h3", {
                className: "text-lg font-semibold mb-3",
                children: "Inputs",
              }),
              u.jsxs("div", {
                className: "space-y-4 max-w-md",
                children: [
                  u.jsx(vr, {
                    label: "Name",
                    placeholder: "Enter your name",
                    value: e,
                    onChange: (s) => t(s.target.value),
                  }),
                  u.jsx(vr, {
                    label: "Email",
                    placeholder: "Enter your email",
                    type: "email",
                    hintText: "We'll never share your email",
                  }),
                  u.jsx(vr, {
                    label: "Password",
                    placeholder: "Enter password",
                    type: "password",
                    hintText: "Password must be at least 8 characters long",
                    error: "Password must be at least 8 characters",
                  }),
                ],
              }),
            ],
          }),
          u.jsxs("section", {
            children: [
              u.jsx("h3", {
                className: "text-lg font-semibold mb-3",
                children: "Select",
              }),
              u.jsx("div", {
                className: "max-w-md",
                children: u.jsxs(nu, {
                  value: n,
                  onValueChange: r,
                  children: [
                    u.jsx(Fs, {
                      children: u.jsx(ru, { placeholder: "Select an option" }),
                    }),
                    u.jsxs(Vs, {
                      children: [
                        u.jsx(_n, { value: "option1", children: "Option 1" }),
                        u.jsx(_n, { value: "option2", children: "Option 2" }),
                        u.jsx(_n, { value: "option3", children: "Option 3" }),
                      ],
                    }),
                  ],
                }),
              }),
            ],
          }),
          u.jsxs("section", {
            children: [
              u.jsx("h3", {
                className: "text-lg font-semibold mb-3",
                children: "Checkbox",
              }),
              u.jsxs("div", {
                className: "space-y-4",
                children: [
                  u.jsx(kn, {
                    label: "I agree to the terms and conditions",
                    checked: o,
                    onCheckedChange: l,
                  }),
                  u.jsx(kn, {
                    label: "Subscribe to newsletter",
                    defaultChecked: !1,
                  }),
                ],
              }),
            ],
          }),
          u.jsxs("section", {
            children: [
              u.jsx("h3", {
                className: "text-lg font-semibold mb-3",
                children: "Checkbox Group",
              }),
              u.jsx(au, {
                label: "Select your interests",
                children: u.jsxs("div", {
                  className: "space-y-2",
                  children: [
                    u.jsx(kn, { label: "Technology" }),
                    u.jsx(kn, { label: "Design" }),
                    u.jsx(kn, { label: "Development" }),
                  ],
                }),
              }),
            ],
          }),
        ],
      }),
    ],
  });
}
const _C = [
    { id: 1, name: "John Doe", email: "john@example.com", role: "Admin" },
    { id: 2, name: "Jane Smith", email: "jane@example.com", role: "User" },
    { id: 3, name: "Bob Johnson", email: "bob@example.com", role: "Editor" },
  ],
  Pi = [
    { key: "name", header: "Name", sortable: !0 },
    { key: "email", header: "Email", sortable: !0 },
    { key: "role", header: "Role", sortable: !0 },
  ];
function IC() {
  const [e, t] = g.useState("name"),
    [n, r] = g.useState("asc"),
    [o, l] = g.useState(1);
  return u.jsxs("div", {
    className: "space-y-8",
    children: [
      u.jsxs("div", {
        children: [
          u.jsx("h2", {
            className: "text-2xl font-bold mb-4",
            children: "Data Components",
          }),
          u.jsx("p", {
            className: "text-gray-600 mb-6",
            children: "Testing data components from the design system",
          }),
        ],
      }),
      u.jsxs("div", {
        className: "space-y-8",
        children: [
          u.jsxs("section", {
            children: [
              u.jsx("h3", {
                className: "text-lg font-semibold mb-3",
                children: "Column Sort Controls",
              }),
              u.jsxs("div", {
                className: "space-y-4",
                children: [
                  u.jsx(cs, {
                    columns: Pi,
                    currentColumn: e,
                    currentDirection: n,
                    onColumnChange: t,
                    onDirectionChange: r,
                  }),
                  u.jsx(cs, {
                    columns: Pi,
                    currentColumn: e,
                    currentDirection: n,
                    onColumnChange: t,
                    onDirectionChange: r,
                  }),
                ],
              }),
            ],
          }),
          u.jsxs("section", {
            children: [
              u.jsx("h3", {
                className: "text-lg font-semibold mb-3",
                children: "Data Table",
              }),
              u.jsx(dg, {
                data: _C,
                columns: Pi,
                title: "Sample Data",
                searchable: !0,
                striped: !0,
                hoverable: !0,
              }),
            ],
          }),
          u.jsxs("section", {
            children: [
              u.jsx("h3", {
                className: "text-lg font-semibold mb-3",
                children: "Pagination",
              }),
              u.jsx(Ws, {
                currentPage: o,
                itemsPerPage: 10,
                totalItems: 50,
                onPageChange: l,
              }),
            ],
          }),
        ],
      }),
    ],
  });
}
const sf = {
  contact: { name: "John Doe", role: "Product Manager" },
  entity: { name: "Acme Corp", id: "acme-001" },
};
function TC() {
  const [e, t] = g.useState(!0);
  return u.jsxs("div", {
    className: "space-y-8",
    children: [
      u.jsxs("div", {
        children: [
          u.jsx("h2", {
            className: "text-2xl font-bold mb-4",
            children: "Navigation Components",
          }),
          u.jsx("p", {
            className: "text-gray-600 mb-6",
            children: "Testing navigation components from the design system",
          }),
        ],
      }),
      u.jsxs("div", {
        className: "grid grid-cols-1 lg:grid-cols-2 gap-8",
        children: [
          u.jsxs("section", {
            className: "space-y-3",
            children: [
              u.jsx("h3", {
                className: "text-lg font-semibold",
                children: "Sidebar Toggle",
              }),
              u.jsxs("div", {
                className: "p-4 border rounded-lg bg-white",
                children: [
                  u.jsx(Lc, { open: e, onToggle: t }),
                  u.jsxs("p", {
                    className: "text-sm text-gray-600 mt-2",
                    children: ["Current state: ", e ? "Open" : "Closed"],
                  }),
                ],
              }),
            ],
          }),
          u.jsxs("section", {
            className: "space-y-3",
            children: [
              u.jsx("h3", {
                className: "text-lg font-semibold",
                children: "Business Logo",
              }),
              u.jsx("div", {
                className: "p-4 border rounded-lg bg-white",
                children: u.jsx(Io, {
                  businessName: "Design System Demo",
                  showTextWithLogo: !0,
                }),
              }),
            ],
          }),
          u.jsxs("section", {
            className: "space-y-3",
            children: [
              u.jsx("h3", {
                className: "text-lg font-semibold",
                children: "Profile Component",
              }),
              u.jsx("div", {
                className: "p-4 border rounded-lg bg-white max-w-xs",
                children: u.jsx(_o, { user: sf }),
              }),
            ],
          }),
          u.jsxs("section", {
            className: "space-y-3",
            children: [
              u.jsx("h3", {
                className: "text-lg font-semibold",
                children: "Individual Menu Items",
              }),
              u.jsxs("div", {
                className: "p-4 border rounded-lg bg-white space-y-2 max-w-xs",
                children: [
                  u.jsx(Te, {
                    icon: Oa,
                    active: !1,
                    children: "Example Item 1",
                  }),
                  u.jsx(Te, { icon: nf, active: !0, children: "Active Item" }),
                  u.jsx(Te, {
                    icon: za,
                    badge: "3",
                    children: "Item with Badge",
                  }),
                ],
              }),
            ],
          }),
        ],
      }),
      u.jsxs("section", {
        className: "space-y-3",
        children: [
          u.jsx("h3", {
            className: "text-lg font-semibold",
            children: "Complete Sidebar Demo",
          }),
          u.jsx("div", {
            className: "border rounded-lg bg-white overflow-hidden",
            style: { height: "400px" },
            children: u.jsxs("div", {
              className: "flex h-full",
              children: [
                u.jsxs("div", {
                  className:
                    "w-64 bg-white border-r border-gray-200 flex flex-col",
                  children: [
                    u.jsx("div", {
                      className: "p-4 border-b border-gray-200",
                      children: u.jsx(Io, {
                        businessName: "Portal Demo",
                        showTextWithLogo: !0,
                      }),
                    }),
                    u.jsx("div", {
                      className: "flex-1 overflow-y-auto",
                      children: u.jsx(Ns, {
                        children: u.jsxs("div", {
                          className: "p-2 space-y-1",
                          children: [
                            u.jsx(Te, {
                              icon: Oa,
                              active: !0,
                              children: "Dashboard",
                            }),
                            u.jsx(Te, {
                              icon: nf,
                              badge: "3",
                              children: "Funding",
                            }),
                            u.jsx(Te, { icon: za, children: "Team" }),
                          ],
                        }),
                      }),
                    }),
                    u.jsx("div", {
                      className: "border-t border-gray-200 p-4",
                      children: u.jsx(_o, { user: sf }),
                    }),
                  ],
                }),
                u.jsxs("div", {
                  className: "flex-1 p-6 bg-gray-50",
                  children: [
                    u.jsx("h4", {
                      className: "text-lg font-medium text-gray-900 mb-2",
                      children: "Main Content Area",
                    }),
                    u.jsx("p", {
                      className: "text-gray-600",
                      children:
                        "This demonstrates how the sidebar components work together in a real layout.",
                    }),
                  ],
                }),
              ],
            }),
          }),
        ],
      }),
    ],
  });
}
function AC() {
  const [e, t] = g.useState("form"),
    n = () => {
      switch (e) {
        case "form":
          return u.jsx(lf, {});
        case "data":
          return u.jsx(IC, {});
        case "navigation":
          return u.jsx(TC, {});
        default:
          return u.jsx(lf, {});
      }
    };
  return u.jsx("div", {
    className: "min-h-screen bg-gray-50",
    children: u.jsx(NC, {
      currentPage: e,
      onPageChange: t,
      children: u.jsxs("div", {
        className: "space-y-8",
        children: [
          u.jsxs("header", {
            className: "text-center",
            children: [
              u.jsx("h1", {
                className: "text-3xl font-bold text-gray-900 mb-2",
                children: "Design System Import Tester",
              }),
              u.jsx("p", {
                className: "text-gray-600",
                children: "Validating published packages vs workspace versions",
              }),
            ],
          }),
          u.jsx("div", {
            className: "bg-white rounded-lg shadow-sm border",
            children: u.jsx(PC, {}),
          }),
          n(),
        ],
      }),
    }),
  });
}
Sm(document.getElementById("root")).render(
  u.jsx(g.StrictMode, { children: u.jsx(AC, {}) })
);
