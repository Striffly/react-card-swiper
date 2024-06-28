(function(){"use strict";try{if(typeof document<"u"){var e=document.createElement("style");e.appendChild(document.createTextNode(".swipe-card{display:flex;flex-direction:column;justify-content:center;align-items:center;gap:30px;width:100%;height:100%}.swipe-card__cards{position:relative;width:100%;height:100%}.swipe-card__container{position:absolute;overflow:hidden;pointer-events:none;top:0;left:0;width:100%;height:100%;background-color:#fff;display:flex;flex-direction:column;border-radius:15px;gap:10px;cursor:grab;-webkit-user-select:none;-moz-user-select:none;user-select:none;transform:scale(.95) translateY(30px);transition:all .5s}.swipe-card__container:first-of-type{filter:drop-shadow(0px 0px 10px rgba(0,0,0,.2))}.swipe-card__container:last-of-type{pointer-events:auto;filter:drop-shadow(0px 0px 10px rgba(0,0,0,.2));transform:scale(1) translateY(0)}.swipe-card__header{display:flex}.swipe-card__ribbons-container{position:absolute;width:100%}.swipe-card__ribbon-like,.swipe-card__ribbon-dislike{position:absolute;opacity:0;color:#fff;display:flex;justify-content:center;align-items:center;width:170px;height:60px;font-weight:700;font-size:2rem;top:3rem;z-index:50;padding-block:.25rem;padding-inline:.5rem;border-radius:.375rem;transition:all .4s;box-shadow:0 0 5px #00000040}.swipe-card__ribbon-like{left:2rem;background-color:#4ade80;transform:rotate(-20deg);text-shadow:-2px 0px 1px rgba(0,0,0,.2)}.swipe-card__ribbon-dislike{right:2rem;background-color:#f87171;transform:rotate(20deg);text-shadow:2px 0px 1px rgba(0,0,0,.2)}.swipe-card__ribbon-like.show,.swipe-card__ribbon-dislike.show{opacity:1}.swipe-card__image-container{position:relative;height:250px}.swipe-card__image{width:100%;height:100%;-o-object-fit:cover;object-fit:cover}.swipe-card__children{bottom:0;display:flex;justify-content:space-evenly;width:100%;transition:all .7s ease;opacity:1}.swipe-card__children.hide-action-buttons{opacity:0}.swipe-card__action-button{height:65px;width:65px;display:flex;justify-content:center;align-items:center;text-align:center;border-radius:50%;padding:10px;box-shadow:0 0 10px #47474733;cursor:pointer}.swipe-card__empty-state{width:100%;height:100%;opacity:0;display:flex;justify-content:center;align-items:center;transform:scale(.95);transition:all .5s ease}.swipe-card__empty-state.swipe-card__empty-state.show-empty-state{transform:scale(1);opacity:1}@media (max-height: 750px){.swipe-card__container{transform:scale(.95) translateY(25px)}}")),document.head.appendChild(e)}}catch(t){console.error("vite-plugin-css-injected-by-js",t)}})();
var gt = Object.defineProperty;
var yt = (i, n, s) => n in i ? gt(i, n, { enumerable: !0, configurable: !0, writable: !0, value: s }) : i[n] = s;
var d = (i, n, s) => yt(i, typeof n != "symbol" ? n + "" : n, s);
import Ve, { useRef as V, useState as te, useEffect as Y, useMemo as wt } from "react";
var be = { exports: {} }, oe = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ke;
function Tt() {
  if (Ke) return oe;
  Ke = 1;
  var i = Ve, n = Symbol.for("react.element"), s = Symbol.for("react.fragment"), h = Object.prototype.hasOwnProperty, w = i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, x = { key: !0, ref: !0, __self: !0, __source: !0 };
  function W(F, T, $) {
    var g, k = {}, A = null, L = null;
    $ !== void 0 && (A = "" + $), T.key !== void 0 && (A = "" + T.key), T.ref !== void 0 && (L = T.ref);
    for (g in T) h.call(T, g) && !x.hasOwnProperty(g) && (k[g] = T[g]);
    if (F && F.defaultProps) for (g in T = F.defaultProps, T) k[g] === void 0 && (k[g] = T[g]);
    return { $$typeof: n, type: F, key: A, ref: L, props: k, _owner: w.current };
  }
  return oe.Fragment = s, oe.jsx = W, oe.jsxs = W, oe;
}
var ce = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ue;
function Rt() {
  return Ue || (Ue = 1, process.env.NODE_ENV !== "production" && function() {
    var i = Ve, n = Symbol.for("react.element"), s = Symbol.for("react.portal"), h = Symbol.for("react.fragment"), w = Symbol.for("react.strict_mode"), x = Symbol.for("react.profiler"), W = Symbol.for("react.provider"), F = Symbol.for("react.context"), T = Symbol.for("react.forward_ref"), $ = Symbol.for("react.suspense"), g = Symbol.for("react.suspense_list"), k = Symbol.for("react.memo"), A = Symbol.for("react.lazy"), L = Symbol.for("react.offscreen"), S = Symbol.iterator, E = "@@iterator";
    function m(e) {
      if (e === null || typeof e != "object")
        return null;
      var t = S && e[S] || e[E];
      return typeof t == "function" ? t : null;
    }
    var C = i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function p(e) {
      {
        for (var t = arguments.length, r = new Array(t > 1 ? t - 1 : 0), a = 1; a < t; a++)
          r[a - 1] = arguments[a];
        re("error", e, r);
      }
    }
    function re(e, t, r) {
      {
        var a = C.ReactDebugCurrentFrame, u = a.getStackAddendum();
        u !== "" && (t += "%s", r = r.concat([u]));
        var f = r.map(function(c) {
          return String(c);
        });
        f.unshift("Warning: " + t), Function.prototype.apply.call(console[e], console, f);
      }
    }
    var ne = !1, X = !1, q = !1, G = !1, H = !1, K;
    K = Symbol.for("react.module.reference");
    function J(e) {
      return !!(typeof e == "string" || typeof e == "function" || e === h || e === x || H || e === w || e === $ || e === g || G || e === L || ne || X || q || typeof e == "object" && e !== null && (e.$$typeof === A || e.$$typeof === k || e.$$typeof === W || e.$$typeof === F || e.$$typeof === T || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      e.$$typeof === K || e.getModuleId !== void 0));
    }
    function v(e, t, r) {
      var a = e.displayName;
      if (a)
        return a;
      var u = t.displayName || t.name || "";
      return u !== "" ? r + "(" + u + ")" : r;
    }
    function P(e) {
      return e.displayName || "Context";
    }
    function R(e) {
      if (e == null)
        return null;
      if (typeof e.tag == "number" && p("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof e == "function")
        return e.displayName || e.name || null;
      if (typeof e == "string")
        return e;
      switch (e) {
        case h:
          return "Fragment";
        case s:
          return "Portal";
        case x:
          return "Profiler";
        case w:
          return "StrictMode";
        case $:
          return "Suspense";
        case g:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case F:
            var t = e;
            return P(t) + ".Consumer";
          case W:
            var r = e;
            return P(r._context) + ".Provider";
          case T:
            return v(e, e.render, "ForwardRef");
          case k:
            var a = e.displayName || null;
            return a !== null ? a : R(e.type) || "Memo";
          case A: {
            var u = e, f = u._payload, c = u._init;
            try {
              return R(c(f));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var I = Object.assign, N = 0, z, Z, ie, b, D, Se, je;
    function Ce() {
    }
    Ce.__reactDisabledLog = !0;
    function Xe() {
      {
        if (N === 0) {
          z = console.log, Z = console.info, ie = console.warn, b = console.error, D = console.group, Se = console.groupCollapsed, je = console.groupEnd;
          var e = {
            configurable: !0,
            enumerable: !0,
            value: Ce,
            writable: !0
          };
          Object.defineProperties(console, {
            info: e,
            log: e,
            warn: e,
            error: e,
            group: e,
            groupCollapsed: e,
            groupEnd: e
          });
        }
        N++;
      }
    }
    function qe() {
      {
        if (N--, N === 0) {
          var e = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: I({}, e, {
              value: z
            }),
            info: I({}, e, {
              value: Z
            }),
            warn: I({}, e, {
              value: ie
            }),
            error: I({}, e, {
              value: b
            }),
            group: I({}, e, {
              value: D
            }),
            groupCollapsed: I({}, e, {
              value: Se
            }),
            groupEnd: I({}, e, {
              value: je
            })
          });
        }
        N < 0 && p("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var me = C.ReactCurrentDispatcher, pe;
    function le(e, t, r) {
      {
        if (pe === void 0)
          try {
            throw Error();
          } catch (u) {
            var a = u.stack.trim().match(/\n( *(at )?)/);
            pe = a && a[1] || "";
          }
        return `
` + pe + e;
      }
    }
    var Ee = !1, fe;
    {
      var Ge = typeof WeakMap == "function" ? WeakMap : Map;
      fe = new Ge();
    }
    function Pe(e, t) {
      if (!e || Ee)
        return "";
      {
        var r = fe.get(e);
        if (r !== void 0)
          return r;
      }
      var a;
      Ee = !0;
      var u = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var f;
      f = me.current, me.current = null, Xe();
      try {
        if (t) {
          var c = function() {
            throw Error();
          };
          if (Object.defineProperty(c.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(c, []);
            } catch (O) {
              a = O;
            }
            Reflect.construct(e, [], c);
          } else {
            try {
              c.call();
            } catch (O) {
              a = O;
            }
            e.call(c.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (O) {
            a = O;
          }
          e();
        }
      } catch (O) {
        if (O && a && typeof O.stack == "string") {
          for (var o = O.stack.split(`
`), j = a.stack.split(`
`), _ = o.length - 1, y = j.length - 1; _ >= 1 && y >= 0 && o[_] !== j[y]; )
            y--;
          for (; _ >= 1 && y >= 0; _--, y--)
            if (o[_] !== j[y]) {
              if (_ !== 1 || y !== 1)
                do
                  if (_--, y--, y < 0 || o[_] !== j[y]) {
                    var M = `
` + o[_].replace(" at new ", " at ");
                    return e.displayName && M.includes("<anonymous>") && (M = M.replace("<anonymous>", e.displayName)), typeof e == "function" && fe.set(e, M), M;
                  }
                while (_ >= 1 && y >= 0);
              break;
            }
        }
      } finally {
        Ee = !1, me.current = f, qe(), Error.prepareStackTrace = u;
      }
      var ee = e ? e.displayName || e.name : "", U = ee ? le(ee) : "";
      return typeof e == "function" && fe.set(e, U), U;
    }
    function He(e, t, r) {
      return Pe(e, !1);
    }
    function Je(e) {
      var t = e.prototype;
      return !!(t && t.isReactComponent);
    }
    function de(e, t, r) {
      if (e == null)
        return "";
      if (typeof e == "function")
        return Pe(e, Je(e));
      if (typeof e == "string")
        return le(e);
      switch (e) {
        case $:
          return le("Suspense");
        case g:
          return le("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case T:
            return He(e.render);
          case k:
            return de(e.type, t, r);
          case A: {
            var a = e, u = a._payload, f = a._init;
            try {
              return de(f(u), t, r);
            } catch {
            }
          }
        }
      return "";
    }
    var se = Object.prototype.hasOwnProperty, De = {}, Oe = C.ReactDebugCurrentFrame;
    function he(e) {
      if (e) {
        var t = e._owner, r = de(e.type, e._source, t ? t.type : null);
        Oe.setExtraStackFrame(r);
      } else
        Oe.setExtraStackFrame(null);
    }
    function ze(e, t, r, a, u) {
      {
        var f = Function.call.bind(se);
        for (var c in e)
          if (f(e, c)) {
            var o = void 0;
            try {
              if (typeof e[c] != "function") {
                var j = Error((a || "React class") + ": " + r + " type `" + c + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[c] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw j.name = "Invariant Violation", j;
              }
              o = e[c](t, c, a, r, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (_) {
              o = _;
            }
            o && !(o instanceof Error) && (he(u), p("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", a || "React class", r, c, typeof o), he(null)), o instanceof Error && !(o.message in De) && (De[o.message] = !0, he(u), p("Failed %s type: %s", r, o.message), he(null));
          }
      }
    }
    var Ze = Array.isArray;
    function _e(e) {
      return Ze(e);
    }
    function Qe(e) {
      {
        var t = typeof Symbol == "function" && Symbol.toStringTag, r = t && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return r;
      }
    }
    function et(e) {
      try {
        return ke(e), !1;
      } catch {
        return !0;
      }
    }
    function ke(e) {
      return "" + e;
    }
    function Le(e) {
      if (et(e))
        return p("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Qe(e)), ke(e);
    }
    var ae = C.ReactCurrentOwner, tt = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, Ie, Me, ge;
    ge = {};
    function rt(e) {
      if (se.call(e, "ref")) {
        var t = Object.getOwnPropertyDescriptor(e, "ref").get;
        if (t && t.isReactWarning)
          return !1;
      }
      return e.ref !== void 0;
    }
    function nt(e) {
      if (se.call(e, "key")) {
        var t = Object.getOwnPropertyDescriptor(e, "key").get;
        if (t && t.isReactWarning)
          return !1;
      }
      return e.key !== void 0;
    }
    function it(e, t) {
      if (typeof e.ref == "string" && ae.current && t && ae.current.stateNode !== t) {
        var r = R(ae.current.type);
        ge[r] || (p('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', R(ae.current.type), e.ref), ge[r] = !0);
      }
    }
    function st(e, t) {
      {
        var r = function() {
          Ie || (Ie = !0, p("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", t));
        };
        r.isReactWarning = !0, Object.defineProperty(e, "key", {
          get: r,
          configurable: !0
        });
      }
    }
    function at(e, t) {
      {
        var r = function() {
          Me || (Me = !0, p("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", t));
        };
        r.isReactWarning = !0, Object.defineProperty(e, "ref", {
          get: r,
          configurable: !0
        });
      }
    }
    var ot = function(e, t, r, a, u, f, c) {
      var o = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: n,
        // Built-in properties that belong on the element
        type: e,
        key: t,
        ref: r,
        props: c,
        // Record the component responsible for creating this element.
        _owner: f
      };
      return o._store = {}, Object.defineProperty(o._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(o, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: a
      }), Object.defineProperty(o, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: u
      }), Object.freeze && (Object.freeze(o.props), Object.freeze(o)), o;
    };
    function ct(e, t, r, a, u) {
      {
        var f, c = {}, o = null, j = null;
        r !== void 0 && (Le(r), o = "" + r), nt(t) && (Le(t.key), o = "" + t.key), rt(t) && (j = t.ref, it(t, u));
        for (f in t)
          se.call(t, f) && !tt.hasOwnProperty(f) && (c[f] = t[f]);
        if (e && e.defaultProps) {
          var _ = e.defaultProps;
          for (f in _)
            c[f] === void 0 && (c[f] = _[f]);
        }
        if (o || j) {
          var y = typeof e == "function" ? e.displayName || e.name || "Unknown" : e;
          o && st(c, y), j && at(c, y);
        }
        return ot(e, o, j, u, a, ae.current, c);
      }
    }
    var ye = C.ReactCurrentOwner, Fe = C.ReactDebugCurrentFrame;
    function Q(e) {
      if (e) {
        var t = e._owner, r = de(e.type, e._source, t ? t.type : null);
        Fe.setExtraStackFrame(r);
      } else
        Fe.setExtraStackFrame(null);
    }
    var we;
    we = !1;
    function Te(e) {
      return typeof e == "object" && e !== null && e.$$typeof === n;
    }
    function Ae() {
      {
        if (ye.current) {
          var e = R(ye.current.type);
          if (e)
            return `

Check the render method of \`` + e + "`.";
        }
        return "";
      }
    }
    function ut(e) {
      return "";
    }
    var $e = {};
    function lt(e) {
      {
        var t = Ae();
        if (!t) {
          var r = typeof e == "string" ? e : e.displayName || e.name;
          r && (t = `

Check the top-level render call using <` + r + ">.");
        }
        return t;
      }
    }
    function Ne(e, t) {
      {
        if (!e._store || e._store.validated || e.key != null)
          return;
        e._store.validated = !0;
        var r = lt(t);
        if ($e[r])
          return;
        $e[r] = !0;
        var a = "";
        e && e._owner && e._owner !== ye.current && (a = " It was passed a child from " + R(e._owner.type) + "."), Q(e), p('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', r, a), Q(null);
      }
    }
    function We(e, t) {
      {
        if (typeof e != "object")
          return;
        if (_e(e))
          for (var r = 0; r < e.length; r++) {
            var a = e[r];
            Te(a) && Ne(a, t);
          }
        else if (Te(e))
          e._store && (e._store.validated = !0);
        else if (e) {
          var u = m(e);
          if (typeof u == "function" && u !== e.entries)
            for (var f = u.call(e), c; !(c = f.next()).done; )
              Te(c.value) && Ne(c.value, t);
        }
      }
    }
    function ft(e) {
      {
        var t = e.type;
        if (t == null || typeof t == "string")
          return;
        var r;
        if (typeof t == "function")
          r = t.propTypes;
        else if (typeof t == "object" && (t.$$typeof === T || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        t.$$typeof === k))
          r = t.propTypes;
        else
          return;
        if (r) {
          var a = R(t);
          ze(r, e.props, "prop", a, e);
        } else if (t.PropTypes !== void 0 && !we) {
          we = !0;
          var u = R(t);
          p("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", u || "Unknown");
        }
        typeof t.getDefaultProps == "function" && !t.getDefaultProps.isReactClassApproved && p("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function dt(e) {
      {
        for (var t = Object.keys(e.props), r = 0; r < t.length; r++) {
          var a = t[r];
          if (a !== "children" && a !== "key") {
            Q(e), p("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", a), Q(null);
            break;
          }
        }
        e.ref !== null && (Q(e), p("Invalid attribute `ref` supplied to `React.Fragment`."), Q(null));
      }
    }
    var Ye = {};
    function Be(e, t, r, a, u, f) {
      {
        var c = J(e);
        if (!c) {
          var o = "";
          (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (o += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var j = ut();
          j ? o += j : o += Ae();
          var _;
          e === null ? _ = "null" : _e(e) ? _ = "array" : e !== void 0 && e.$$typeof === n ? (_ = "<" + (R(e.type) || "Unknown") + " />", o = " Did you accidentally export a JSX literal instead of a component?") : _ = typeof e, p("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", _, o);
        }
        var y = ct(e, t, r, u, f);
        if (y == null)
          return y;
        if (c) {
          var M = t.children;
          if (M !== void 0)
            if (a)
              if (_e(M)) {
                for (var ee = 0; ee < M.length; ee++)
                  We(M[ee], e);
                Object.freeze && Object.freeze(M);
              } else
                p("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              We(M, e);
        }
        if (se.call(t, "key")) {
          var U = R(e), O = Object.keys(t).filter(function(_t) {
            return _t !== "key";
          }), Re = O.length > 0 ? "{key: someKey, " + O.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!Ye[U + Re]) {
            var Et = O.length > 0 ? "{" + O.join(": ..., ") + ": ...}" : "{}";
            p(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, Re, U, Et, U), Ye[U + Re] = !0;
          }
        }
        return e === h ? dt(y) : ft(y), y;
      }
    }
    function ht(e, t, r) {
      return Be(e, t, r, !0);
    }
    function vt(e, t, r) {
      return Be(e, t, r, !1);
    }
    var mt = vt, pt = ht;
    ce.Fragment = h, ce.jsx = mt, ce.jsxs = pt;
  }()), ce;
}
process.env.NODE_ENV === "production" ? be.exports = Tt() : be.exports = Rt();
var l = be.exports, ue = /* @__PURE__ */ ((i) => (i[i.LEFT = -1] = "LEFT", i[i.RIGHT = 1] = "RIGHT", i))(ue || {}), B = /* @__PURE__ */ ((i) => (i.LIKE = "like", i.DISLIKE = "dislike", i.FINISHED = "finished", i))(B || {}), xe = /* @__PURE__ */ ((i) => (i.SWIPE = "swipe", i.CLICK = "click", i))(xe || {});
class bt {
  constructor({ element: n, id: s, meta: h, onDismiss: w }) {
    d(this, "element");
    d(this, "id");
    d(this, "meta");
    d(this, "onDismiss");
    // private properties
    d(this, "startPoint", { x: 0, y: 0 });
    d(this, "offsetX", 0);
    d(this, "offsetY", 0);
    d(this, "useMouseMoveEvent", !1);
    d(this, "useTouchMoveEvent", !1);
    d(this, "isTouchDevice", "ontouchstart" in window || navigator.maxTouchPoints > 0);
    d(this, "x", 0);
    d(this, "init", () => {
      this.isTouchDevice ? this.listenToTouchEvents() : this.listenToMouseEvents();
    });
    d(this, "listenToTouchEvents", () => {
      this.element.addEventListener("touchstart", this.handleTouchStart.bind(this));
    });
    d(this, "listenToMouseEvents", () => {
      this.element.addEventListener("mousedown", this.handleMouseDown.bind(this)), this.element.addEventListener("dragstart", this.handleDragStart.bind(this));
    });
    d(this, "handleMove", () => {
      if (!this.startPoint || !this.isTouchDevice && !this.useMouseMoveEvent || this.isTouchDevice && !this.useTouchMoveEvent || this.x === 0) return;
      this.showRibbons(), this.offsetX = this.x - this.startPoint.x;
      const n = this.offsetX * 0.07;
      this.element.style.transform = `translate(${this.offsetX}px,0) rotate(${n}deg)`, Math.abs(this.offsetX) > this.element.clientWidth * 0.4 && this.dismiss(this.offsetX > 0 ? 1 : -1);
    });
    d(this, "showRibbons", () => {
      const n = this.element.querySelector(".swipe-card__ribbon-like"), s = this.element.querySelector(".swipe-card__ribbon-dislike");
      this.offsetX > 10 ? (n == null || n.classList.add("show"), s == null || s.classList.remove("show")) : this.offsetX < -10 ? (n == null || n.classList.remove("show"), s == null || s.classList.add("show")) : (n == null || n.classList.remove("show"), s == null || s.classList.remove("show"));
    });
    d(this, "hideRibbons", () => {
      const n = this.element.querySelector(".swipe-card__ribbon-like"), s = this.element.querySelector(".swipe-card__ribbon-dislike");
      n == null || n.classList.remove("show"), s == null || s.classList.remove("show");
    });
    d(this, "handleDragStart", (n) => {
      this.isTouchDevice || n.preventDefault();
    });
    d(this, "handleMouseDown", (n) => {
      if (this.isTouchDevice) return;
      const { clientX: s, clientY: h } = n;
      this.startPoint = { x: s, y: h }, this.useMouseMoveEvent = !0, this.element.style.transition = "transform 0s";
    });
    // mouse event handlers
    d(this, "handleMouseMove", (n) => {
      if (this.isTouchDevice || !this.useMouseMoveEvent || (n.preventDefault(), !this.startPoint)) return;
      const { clientX: s } = n;
      this.x = s;
    });
    d(this, "handleMoveUp", () => {
      this.isTouchDevice || (this.startPoint = null, this.x = 0, this.useMouseMoveEvent = !1, this.element.style.transform = "", this.element.style.transition = "all .5s", this.hideRibbons());
    });
    d(this, "handleTouchStart", (n) => {
      if (!this.isTouchDevice) return;
      const s = n.changedTouches[0];
      if (!s) return;
      const { clientX: h, clientY: w } = s;
      this.startPoint = { x: h, y: w }, this.useTouchMoveEvent = !0, this.element.style.transition = "transform 0s";
    });
    // touch event handlers
    d(this, "handleTouchMove", (n) => {
      if (!this.useTouchMoveEvent || !this.startPoint) return;
      const s = n.changedTouches[0];
      if (!s) return;
      const { clientX: h } = s;
      this.x = h;
    });
    d(this, "handleTouchEnd", () => {
      this.isTouchDevice && (this.startPoint = null, this.x = 0, this.useTouchMoveEvent = !1, this.element.style.transform = "", this.element.style.transition = "all .5s", this.hideRibbons());
    });
    d(this, "dismiss", (n, s = xe.SWIPE) => {
      if (this.startPoint = null, this.isTouchDevice && this.element.removeEventListener("touchstart", this.handleTouchStart.bind(this)), this.isTouchDevice || this.element.removeEventListener("mousedown", this.handleMouseDown.bind(this)), this.isTouchDevice || this.element.removeEventListener("dragstart", this.handleDragStart.bind(this)), this.element.style.transition = "all 0.6s", this.element.style.transform = `translate(${n * window.innerWidth * 2}px, ${this.offsetY}px) rotate(${60 * n}deg)`, this.element.classList.add("dismissing"), setTimeout(() => this.element.remove(), 300), typeof this.onDismiss == "function") {
        const h = n === 1 ? B.LIKE : B.DISLIKE;
        this.onDismiss(this.element, this.meta, this.id, h, s);
      }
    });
    d(this, "dismissById", (n) => {
      this.dismiss(n, xe.CLICK);
    });
    this.id = s, this.meta = h, this.element = n, this.onDismiss = w, this.init();
  }
}
const xt = ({ onDismiss: i, onFinish: n, onEnter: s, data: h }) => {
  const w = V([]), [x, W] = te(h.length), [F, T] = te(h), [$, g] = te(!1), k = (E, m, C) => {
    if (E) {
      const p = new bt({ element: E, id: m, meta: C, onDismiss: L });
      w.current.push(p);
    }
  }, A = (E, m, C) => {
    s && s(E, m, C);
  }, L = (E, m, C, p, re) => {
    W((ne) => ne - 1), i && i(E, m, C, p, re), w.current.pop();
  }, S = (E) => {
    if (x) {
      const m = w.current[x - 1];
      m == null || m.dismissById(E);
    }
  };
  return Y(() => {
    !x && n && (g(!0), n(B.FINISHED));
  }, [x]), {
    isFinish: $,
    dynamicData: F,
    swiperIndex: x,
    swiperElements: w,
    handleEnter: A,
    setDynamicData: T,
    handleClickEvents: S,
    handleNewCardSwiper: k
  };
};
function ve({ buttonContent: i, direction: n, isCustom: s = !1, action: h, onClick: w }) {
  const x = `swipe-card__${s ? "custom-" : ""}action-button`;
  return /* @__PURE__ */ l.jsx("div", { className: x, id: `swipe-card__${h}-action-button`, onClick: () => w(n), children: i });
}
function St({ isFinish: i, children: n }) {
  const [s, h] = te("");
  return Y(() => {
    const w = setTimeout(() => {
      i && h("show-empty-state");
    }, 100);
    return () => clearTimeout(w);
  }, [i]), /* @__PURE__ */ l.jsx("div", { className: `swipe-card__empty-state ${s}`, id: "swipe-card__empty-state", children: n });
}
const jt = () => /* @__PURE__ */ l.jsx("svg", { viewBox: "0 0 320 512", fill: "lightcoral", height: "2em", width: "2em", children: /* @__PURE__ */ l.jsx("path", { d: "M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3l105.4 105.3c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256l105.3-105.4z" }) });
function Ct({ ribbonColors: i, dislikeRibbonText: n, likeRibbonText: s }) {
  return /* @__PURE__ */ l.jsxs("div", { className: "swipe-card__ribbons-container", id: "swipe-card__ribbons-container", children: [
    /* @__PURE__ */ l.jsx(
      "div",
      {
        id: "swipe-card__ribbon-like",
        className: "swipe-card__ribbon-like",
        style: { color: i == null ? void 0 : i.textColor, backgroundColor: i == null ? void 0 : i.bgLike },
        children: s || "LIKE"
      }
    ),
    /* @__PURE__ */ l.jsx(
      "div",
      {
        id: "swipe-card__ribbon-dislike",
        className: "swipe-card__ribbon-dislike",
        style: { color: i == null ? void 0 : i.textColor, backgroundColor: i == null ? void 0 : i.bgDislike },
        children: n || "PASS"
      }
    )
  ] });
}
function Pt() {
  return /* @__PURE__ */ l.jsx("svg", { viewBox: "0 0 20 20", fill: "palegreen", height: "2em", width: "2em", children: /* @__PURE__ */ l.jsx("path", { d: "M0 11l2-2 5 5L18 3l2 2L7 18z" }) });
}
const kt = (i) => {
  const { data: n, likeButton: s, dislikeButton: h, withActionButtons: w = !1, emptyState: x, onDismiss: W, onFinish: F, onEnter: T } = i, { handleEnter: $, handleClickEvents: g, handleNewCardSwiper: k, dynamicData: A, isFinish: L, swiperIndex: S, swiperElements: E } = xt({
    onDismiss: W,
    onFinish: F,
    onEnter: T,
    data: n
  }), [m, C] = te(E.current[S]), [p, re] = te("");
  Y(() => {
    C(E.current[S - 1]);
  }, [E, S]), Y(() => {
    m && $(m.element, m.meta, m.id);
  }, [m]);
  const ne = wt(
    () => A.map(({ id: v, header: P, src: R, content: I, meta: N }) => /* @__PURE__ */ l.jsxs(
      "div",
      {
        ref: (z) => k(z, v, N),
        className: "swipe-card__container",
        id: "swipe-card__container",
        children: [
          P && /* @__PURE__ */ l.jsx("div", { className: "swipe-card__header-container", id: "swipe-card__header-container", children: /* @__PURE__ */ l.jsx("h2", { id: "swipe-card__header", children: P }) }),
          i.withRibbons && /* @__PURE__ */ l.jsx(
            Ct,
            {
              likeRibbonText: i.likeRibbonText,
              dislikeRibbonText: i.dislikeRibbonText,
              ribbonColors: i.ribbonColors
            }
          ),
          /* @__PURE__ */ l.jsx("div", { className: "swipe-card__image-container", children: /* @__PURE__ */ l.jsx("img", { className: "swipe-card__image", src: R, alt: R, id: "swipe-card__image" }) }),
          I && /* @__PURE__ */ l.jsx("div", { className: "swipe-card__content", children: I })
        ]
      },
      v
    )),
    []
  );
  Y(() => {
    L && re("hide-action-buttons");
  }, [L]), Y(() => {
    const v = () => {
      m == null || m.handleTouchEnd(), m == null || m.handleMoveUp();
    };
    return window.addEventListener("blur", v), () => window.removeEventListener("blur", v);
  }, [m]);
  const X = V(), q = V(), G = V(), H = V(), K = V(), J = V();
  return Y(() => {
    X.current = () => {
      var v;
      (v = E.current[S - 1]) == null || v.handleMoveUp();
    }, q.current = (v) => {
      var P;
      (P = E.current[S - 1]) == null || P.handleMouseMove(v);
    }, G.current = () => {
      var v;
      (v = E.current[S - 1]) == null || v.handleTouchEnd();
    }, H.current = (v) => {
      var P;
      (P = E.current[S - 1]) == null || P.handleTouchMove(v);
    }, K.current = () => {
      var v;
      (v = E.current[S - 1]) == null || v.handleTouchEnd();
    }, J.current = () => {
      var v;
      (v = E.current[S - 1]) == null || v.handleMove();
    };
  }, [S, E]), Y(() => {
    const v = (b) => {
      var D;
      return (D = X.current) == null ? void 0 : D.call(X, b);
    }, P = (b) => {
      var D;
      return (D = q.current) == null ? void 0 : D.call(q, b);
    }, R = (b) => {
      var D;
      return (D = G.current) == null ? void 0 : D.call(G, b);
    }, I = (b) => {
      var D;
      return (D = H.current) == null ? void 0 : D.call(H, b);
    }, N = () => {
      var b;
      return (b = K.current) == null ? void 0 : b.call(K);
    }, z = () => {
      var b;
      return (b = J.current) == null ? void 0 : b.call(J);
    };
    let Z;
    const ie = () => {
      z(), Z = requestAnimationFrame(ie);
    };
    return L || (document.addEventListener("mouseup", v), document.addEventListener("mousemove", P), document.addEventListener("touchend", R), document.addEventListener("touchmove", I), document.addEventListener("cancel", N), Z = requestAnimationFrame(ie)), () => {
      document.removeEventListener("mouseup", v), document.removeEventListener("mousemove", P), document.removeEventListener("touchend", R), document.removeEventListener("touchmove", I), document.removeEventListener("cancel", N), cancelAnimationFrame(Z);
    };
  }, [L]), /* @__PURE__ */ l.jsxs("div", { className: "swipe-card", id: "swipe-card", children: [
    /* @__PURE__ */ l.jsxs("div", { className: "swipe-card__cards", id: "swipe-card__cards", children: [
      ne,
      x && L && /* @__PURE__ */ l.jsx(St, { children: x, isFinish: L })
    ] }),
    w && /* @__PURE__ */ l.jsx("div", { className: `swipe-card__children ${p}`, id: "swipe-card__children", children: s && h ? /* @__PURE__ */ l.jsxs(l.Fragment, { children: [
      /* @__PURE__ */ l.jsx(
        ve,
        {
          isCustom: !0,
          direction: ue.LEFT,
          action: B.DISLIKE,
          onClick: g,
          buttonContent: h
        }
      ),
      /* @__PURE__ */ l.jsx(
        ve,
        {
          isCustom: !0,
          direction: ue.RIGHT,
          action: B.LIKE,
          onClick: g,
          buttonContent: s
        }
      )
    ] }) : /* @__PURE__ */ l.jsxs(l.Fragment, { children: [
      /* @__PURE__ */ l.jsx(
        ve,
        {
          direction: ue.LEFT,
          action: B.DISLIKE,
          onClick: g,
          buttonContent: /* @__PURE__ */ l.jsx(jt, {})
        }
      ),
      /* @__PURE__ */ l.jsx(
        ve,
        {
          direction: ue.RIGHT,
          action: B.LIKE,
          onClick: g,
          buttonContent: /* @__PURE__ */ l.jsx(Pt, {})
        }
      )
    ] }) })
  ] });
};
export {
  kt as CardSwiper,
  B as SwipeAction,
  ue as SwipeDirection,
  xe as SwipeOperation
};
