! function (t) {
    var n = {};

    function r(e) {
        if (n[e]) return n[e].exports;
        var o = n[e] = {
            i: e,
            l: !1,
            exports: {}
        };
        return t[e].call(o.exports, o, o.exports, r), o.l = !0, o.exports
    }
    r.m = t, r.c = n, r.d = function (t, n, e) {
        r.o(t, n) || Object.defineProperty(t, n, {
            enumerable: !0,
            get: e
        })
    }, r.r = function (t) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(t, "__esModule", {
            value: !0
        })
    }, r.t = function (t, n) {
        if (1 & n && (t = r(t)), 8 & n) return t;
        if (4 & n && "object" == typeof t && t && t.__esModule) return t;
        var e = Object.create(null);
        if (r.r(e), Object.defineProperty(e, "default", {
            enumerable: !0,
            value: t
        }), 2 & n && "string" != typeof t)
            for (var o in t) r.d(e, o, function (n) {
                return t[n]
            }.bind(null, o));
        return e
    }, r.n = function (t) {
        var n = t && t.__esModule ? function () {
            return t.default
        } : function () {
            return t
        };
        return r.d(n, "a", n), n
    }, r.o = function (t, n) {
        return Object.prototype.hasOwnProperty.call(t, n)
    }, r.p = "", r(r.s = 102)
}([function (t, n, r) {
    var e = r(27)("wks"),
        o = r(17),
        i = r(1).Symbol,
        a = "function" == typeof i;
    (t.exports = function (t) {
        return e[t] || (e[t] = a && i[t] || (a ? i : o)("Symbol." + t))
    }).store = e
}, function (t, n) {
    var r = t.exports = "undefined" != typeof window && window.Math == Math ? window : "undefined" != typeof self && self.Math == Math ? self : Function("return this")();
    "number" == typeof __g && (__g = r)
}, function (t, n, r) {
    var e = r(6);
    t.exports = function (t) {
        if (!e(t)) throw TypeError(t + " is not an object!");
        return t
    }
}, function (t, n, r) {
    var e = r(8),
        o = Math.min;
    t.exports = function (t) {
        return t > 0 ? o(e(t), 9007199254740991) : 0
    }
}, function (t, n, r) {
    var e = r(12),
        o = r(23);
    t.exports = r(5) ? function (t, n, r) {
        return e.f(t, n, o(1, r))
    } : function (t, n, r) {
        return t[n] = r, t
    }
}, function (t, n, r) {
    t.exports = !r(9)(function () {
        return 7 != Object.defineProperty({}, "a", {
            get: function () {
                return 7
            }
        }).a
    })
}, function (t, n) {
    t.exports = function (t) {
        return "object" == typeof t ? null !== t : "function" == typeof t
    }
}, function (t, n, r) {
    var e = r(1),
        o = r(15),
        i = r(4),
        a = r(20),
        u = r(14),
        c = function (t, n, r) {
            var s, f, l, h, p = t & c.F,
                v = t & c.G,
                d = t & c.S,
                g = t & c.P,
                y = t & c.B,
                m = v ? e : d ? e[n] || (e[n] = {}) : (e[n] || {}).prototype,
                w = v ? o : o[n] || (o[n] = {}),
                x = w.prototype || (w.prototype = {});
            for (s in v && (r = n), r) l = ((f = !p && m && void 0 !== m[s]) ? m : r)[s], h = y && f ? u(l, e) : g && "function" == typeof l ? u(Function.call, l) : l, m && a(m, s, l, t & c.U), w[s] != l && i(w, s, h), g && x[s] != l && (x[s] = l)
        };
    e.core = o, c.F = 1, c.G = 2, c.S = 4, c.P = 8, c.B = 16, c.W = 32, c.U = 64, c.R = 128, t.exports = c
}, function (t, n) {
    var r = Math.ceil,
        e = Math.floor;
    t.exports = function (t) {
        return isNaN(t = +t) ? 0 : (t > 0 ? e : r)(t)
    }
}, function (t, n) {
    t.exports = function (t) {
        try {
            return !!t()
        } catch (t) {
            return !0
        }
    }
}, function (t, n, r) {
    var e = r(18);
    t.exports = function (t) {
        return Object(e(t))
    }
}, function (t, n) {
    var r = {}.toString;
    t.exports = function (t) {
        return r.call(t).slice(8, -1)
    }
}, function (t, n, r) {
    var e = r(2),
        o = r(44),
        i = r(34),
        a = Object.defineProperty;
    n.f = r(5) ? Object.defineProperty : function (t, n, r) {
        if (e(t), n = i(n, !0), e(r), o) try {
            return a(t, n, r)
        } catch (t) { }
        if ("get" in r || "set" in r) throw TypeError("Accessors not supported!");
        return "value" in r && (t[n] = r.value), t
    }
}, function (t, n) {
    var r = {}.hasOwnProperty;
    t.exports = function (t, n) {
        return r.call(t, n)
    }
}, function (t, n, r) {
    var e = r(22);
    t.exports = function (t, n, r) {
        if (e(t), void 0 === n) return t;
        switch (r) {
            case 1:
                return function (r) {
                    return t.call(n, r)
                };
            case 2:
                return function (r, e) {
                    return t.call(n, r, e)
                };
            case 3:
                return function (r, e, o) {
                    return t.call(n, r, e, o)
                }
        }
        return function () {
            return t.apply(n, arguments)
        }
    }
}, function (t, n) {
    var r = t.exports = {
        version: "2.6.9"
    };
    "number" == typeof __e && (__e = r)
}, function (t, n) {
    t.exports = !1
}, function (t, n) {
    var r = 0,
        e = Math.random();
    t.exports = function (t) {
        return "Symbol(".concat(void 0 === t ? "" : t, ")_", (++r + e).toString(36))
    }
}, function (t, n) {
    t.exports = function (t) {
        if (null == t) throw TypeError("Can't call method on  " + t);
        return t
    }
}, function (t, n, r) {
    var e = r(11),
        o = r(0)("toStringTag"),
        i = "Arguments" == e(function () {
            return arguments
        }());
    t.exports = function (t) {
        var n, r, a;
        return void 0 === t ? "Undefined" : null === t ? "Null" : "string" == typeof (r = function (t, n) {
            try {
                return t[n]
            } catch (t) { }
        }(n = Object(t), o)) ? r : i ? e(n) : "Object" == (a = e(n)) && "function" == typeof n.callee ? "Arguments" : a
    }
}, function (t, n, r) {
    var e = r(1),
        o = r(4),
        i = r(13),
        a = r(17)("src"),
        u = r(66),
        c = ("" + u).split("toString");
    r(15).inspectSource = function (t) {
        return u.call(t)
    }, (t.exports = function (t, n, r, u) {
        var s = "function" == typeof r;
        s && (i(r, "name") || o(r, "name", n)), t[n] !== r && (s && (i(r, a) || o(r, a, t[n] ? "" + t[n] : c.join(String(n)))), t === e ? t[n] = r : u ? t[n] ? t[n] = r : o(t, n, r) : (delete t[n], o(t, n, r)))
    })(Function.prototype, "toString", function () {
        return "function" == typeof this && this[a] || u.call(this)
    })
}, function (t, n) {
    t.exports = {}
}, function (t, n) {
    t.exports = function (t) {
        if ("function" != typeof t) throw TypeError(t + " is not a function!");
        return t
    }
}, function (t, n) {
    t.exports = function (t, n) {
        return {
            enumerable: !(1 & t),
            configurable: !(2 & t),
            writable: !(4 & t),
            value: n
        }
    }
}, function (t, n, r) {
    var e = r(8),
        o = Math.max,
        i = Math.min;
    t.exports = function (t, n) {
        return (t = e(t)) < 0 ? o(t + n, 0) : i(t, n)
    }
}, function (t, n, r) {
    var e = r(37),
        o = r(18);
    t.exports = function (t) {
        return e(o(t))
    }
}, function (t, n, r) {
    var e = r(12).f,
        o = r(13),
        i = r(0)("toStringTag");
    t.exports = function (t, n, r) {
        t && !o(t = r ? t : t.prototype, i) && e(t, i, {
            configurable: !0,
            value: n
        })
    }
}, function (t, n, r) {
    var e = r(15),
        o = r(1),
        i = o["__core-js_shared__"] || (o["__core-js_shared__"] = {});
    (t.exports = function (t, n) {
        return i[t] || (i[t] = void 0 !== n ? n : {})
    })("versions", []).push({
        version: e.version,
        mode: r(16) ? "pure" : "global",
        copyright: "© 2019 Denis Pushkarev (zloirock.ru)"
    })
}, function (t, n, r) {
    var e = r(2),
        o = r(22),
        i = r(0)("species");
    t.exports = function (t, n) {
        var r, a = e(t).constructor;
        return void 0 === a || null == (r = e(a)[i]) ? n : o(r)
    }
}, function (t, n, r) {
    "use strict";
    var e = r(63)(!0);
    t.exports = function (t, n, r) {
        return n + (r ? e(t, n).length : 1)
    }
}, function (t, n, r) {
    "use strict";
    var e = r(19),
        o = RegExp.prototype.exec;
    t.exports = function (t, n) {
        var r = t.exec;
        if ("function" == typeof r) {
            var i = r.call(t, n);
            if ("object" != typeof i) throw new TypeError("RegExp exec method returned something other than an Object or null");
            return i
        }
        if ("RegExp" !== e(t)) throw new TypeError("RegExp#exec called on incompatible receiver");
        return o.call(t, n)
    }
}, function (t, n, r) {
    "use strict";
    var e, o, i = r(64),
        a = RegExp.prototype.exec,
        u = String.prototype.replace,
        c = a,
        s = (e = /a/, o = /b*/g, a.call(e, "a"), a.call(o, "a"), 0 !== e.lastIndex || 0 !== o.lastIndex),
        f = void 0 !== /()??/.exec("")[1];
    (s || f) && (c = function (t) {
        var n, r, e, o, c = this;
        return f && (r = new RegExp("^" + c.source + "$(?!\\s)", i.call(c))), s && (n = c.lastIndex), e = a.call(c, t), s && e && (c.lastIndex = c.global ? e.index + e[0].length : n), f && e && e.length > 1 && u.call(e[0], r, function () {
            for (o = 1; o < arguments.length - 2; o++) void 0 === arguments[o] && (e[o] = void 0)
        }), e
    }), t.exports = c
}, function (t, n, r) {
    "use strict";
    r(65);
    var e = r(20),
        o = r(4),
        i = r(9),
        a = r(18),
        u = r(0),
        c = r(31),
        s = u("species"),
        f = !i(function () {
            var t = /./;
            return t.exec = function () {
                var t = [];
                return t.groups = {
                    a: "7"
                }, t
            }, "7" !== "".replace(t, "$<a>")
        }),
        l = function () {
            var t = /(?:)/,
                n = t.exec;
            t.exec = function () {
                return n.apply(this, arguments)
            };
            var r = "ab".split(t);
            return 2 === r.length && "a" === r[0] && "b" === r[1]
        }();
    t.exports = function (t, n, r) {
        var h = u(t),
            p = !i(function () {
                var n = {};
                return n[h] = function () {
                    return 7
                }, 7 != ""[t](n)
            }),
            v = p ? !i(function () {
                var n = !1,
                    r = /a/;
                return r.exec = function () {
                    return n = !0, null
                }, "split" === t && (r.constructor = {}, r.constructor[s] = function () {
                    return r
                }), r[h](""), !n
            }) : void 0;
        if (!p || !v || "replace" === t && !f || "split" === t && !l) {
            var d = /./[h],
                g = r(a, h, ""[t], function (t, n, r, e, o) {
                    return n.exec === c ? p && !o ? {
                        done: !0,
                        value: d.call(n, r, e)
                    } : {
                        done: !0,
                        value: t.call(r, n, e)
                    } : {
                        done: !1
                    }
                }),
                y = g[0],
                m = g[1];
            e(String.prototype, t, y), o(RegExp.prototype, h, 2 == n ? function (t, n) {
                return m.call(t, this, n)
            } : function (t) {
                return m.call(t, this)
            })
        }
    }
}, function (t, n, r) {
    var e = r(6),
        o = r(1).document,
        i = e(o) && e(o.createElement);
    t.exports = function (t) {
        return i ? o.createElement(t) : {}
    }
}, function (t, n, r) {
    var e = r(6);
    t.exports = function (t, n) {
        if (!e(t)) return t;
        var r, o;
        if (n && "function" == typeof (r = t.toString) && !e(o = r.call(t))) return o;
        if ("function" == typeof (r = t.valueOf) && !e(o = r.call(t))) return o;
        if (!n && "function" == typeof (r = t.toString) && !e(o = r.call(t))) return o;
        throw TypeError("Can't convert object to primitive value")
    }
}, function (t, n, r) {
    "use strict";
    var e = r(10),
        o = r(24),
        i = r(3);
    t.exports = function (t) {
        for (var n = e(this), r = i(n.length), a = arguments.length, u = o(a > 1 ? arguments[1] : void 0, r), c = a > 2 ? arguments[2] : void 0, s = void 0 === c ? r : o(c, r); s > u;) n[u++] = t;
        return n
    }
}, function (t, n, r) {
    var e = r(0)("unscopables"),
        o = Array.prototype;
    null == o[e] && r(4)(o, e, {}), t.exports = function (t) {
        o[e][t] = !0
    }
}, function (t, n, r) {
    var e = r(11);
    t.exports = Object("z").propertyIsEnumerable(0) ? Object : function (t) {
        return "String" == e(t) ? t.split("") : Object(t)
    }
}, function (t, n, r) {
    var e = r(25),
        o = r(3),
        i = r(24);
    t.exports = function (t) {
        return function (n, r, a) {
            var u, c = e(n),
                s = o(c.length),
                f = i(a, s);
            if (t && r != r) {
                for (; s > f;)
                    if ((u = c[f++]) != u) return !0
            } else
                for (; s > f; f++)
                    if ((t || f in c) && c[f] === r) return t || f || 0;
            return !t && -1
        }
    }
}, function (t, n, r) {
    var e = r(27)("keys"),
        o = r(17);
    t.exports = function (t) {
        return e[t] || (e[t] = o(t))
    }
}, function (t, n) {
    t.exports = "constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")
}, function (t, n) {
    t.exports = function (t, n, r, e) {
        if (!(t instanceof n) || void 0 !== e && e in t) throw TypeError(r + ": incorrect invocation!");
        return t
    }
}, function (t, n, r) {
    var e = r(20);
    t.exports = function (t, n, r) {
        for (var o in n) e(t, o, n[o], r);
        return t
    }
}, function (t, n, r) {
    var e = r(6),
        o = r(11),
        i = r(0)("match");
    t.exports = function (t) {
        var n;
        return e(t) && (void 0 !== (n = t[i]) ? !!n : "RegExp" == o(t))
    }
}, function (t, n, r) {
    t.exports = !r(5) && !r(9)(function () {
        return 7 != Object.defineProperty(r(33)("div"), "a", {
            get: function () {
                return 7
            }
        }).a
    })
}, function (t, n, r) {
    var e = r(46),
        o = r(40);
    t.exports = Object.keys || function (t) {
        return e(t, o)
    }
}, function (t, n, r) {
    var e = r(13),
        o = r(25),
        i = r(38)(!1),
        a = r(39)("IE_PROTO");
    t.exports = function (t, n) {
        var r, u = o(t),
            c = 0,
            s = [];
        for (r in u) r != a && e(u, r) && s.push(r);
        for (; n.length > c;) e(u, r = n[c++]) && (~i(s, r) || s.push(r));
        return s
    }
}, function (t, n) {
    n.f = {}.propertyIsEnumerable
}, function (t, n, r) {
    var e = r(21),
        o = r(0)("iterator"),
        i = Array.prototype;
    t.exports = function (t) {
        return void 0 !== t && (e.Array === t || i[o] === t)
    }
}, function (t, n, r) {
    var e = r(19),
        o = r(0)("iterator"),
        i = r(21);
    t.exports = r(15).getIteratorMethod = function (t) {
        if (null != t) return t[o] || t["@@iterator"] || i[e(t)]
    }
}, function (t, n, r) {
    var e, o, i, a = r(14),
        u = r(80),
        c = r(51),
        s = r(33),
        f = r(1),
        l = f.process,
        h = f.setImmediate,
        p = f.clearImmediate,
        v = f.MessageChannel,
        d = f.Dispatch,
        g = 0,
        y = {},
        m = function () {
            var t = +this;
            if (y.hasOwnProperty(t)) {
                var n = y[t];
                delete y[t], n()
            }
        },
        w = function (t) {
            m.call(t.data)
        };
    h && p || (h = function (t) {
        for (var n = [], r = 1; arguments.length > r;) n.push(arguments[r++]);
        return y[++g] = function () {
            u("function" == typeof t ? t : Function(t), n)
        }, e(g), g
    }, p = function (t) {
        delete y[t]
    }, "process" == r(11)(l) ? e = function (t) {
        l.nextTick(a(m, t, 1))
    } : d && d.now ? e = function (t) {
        d.now(a(m, t, 1))
    } : v ? (i = (o = new v).port2, o.port1.onmessage = w, e = a(i.postMessage, i, 1)) : f.addEventListener && "function" == typeof postMessage && !f.importScripts ? (e = function (t) {
        f.postMessage(t + "", "*")
    }, f.addEventListener("message", w, !1)) : e = "onreadystatechange" in s("script") ? function (t) {
        c.appendChild(s("script")).onreadystatechange = function () {
            c.removeChild(this), m.call(t)
        }
    } : function (t) {
        setTimeout(a(m, t, 1), 0)
    }), t.exports = {
        set: h,
        clear: p
    }
}, function (t, n, r) {
    var e = r(1).document;
    t.exports = e && e.documentElement
}, function (t, n, r) {
    "use strict";
    var e = r(22);

    function o(t) {
        var n, r;
        this.promise = new t(function (t, e) {
            if (void 0 !== n || void 0 !== r) throw TypeError("Bad Promise constructor");
            n = t, r = e
        }), this.resolve = e(n), this.reject = e(r)
    }
    t.exports.f = function (t) {
        return new o(t)
    }
}, function (t, n, r) {
    "use strict";
    var e = r(1),
        o = r(12),
        i = r(5),
        a = r(0)("species");
    t.exports = function (t) {
        var n = e[t];
        i && n && !n[a] && o.f(n, a, {
            configurable: !0,
            get: function () {
                return this
            }
        })
    }
}, function (t, n, r) {
    var e = r(0)("iterator"),
        o = !1;
    try {
        var i = [7][e]();
        i.return = function () {
            o = !0
        }, Array.from(i, function () {
            throw 2
        })
    } catch (t) { }
    t.exports = function (t, n) {
        if (!n && !o) return !1;
        var r = !1;
        try {
            var i = [7],
                a = i[e]();
            a.next = function () {
                return {
                    done: r = !0
                }
            }, i[e] = function () {
                return a
            }, t(i)
        } catch (t) { }
        return r
    }
}, function (t, n, r) {
    "use strict";
    if (r(5)) {
        var e = r(16),
            o = r(1),
            i = r(9),
            a = r(7),
            u = r(56),
            c = r(87),
            s = r(14),
            f = r(41),
            l = r(23),
            h = r(4),
            p = r(42),
            v = r(8),
            d = r(3),
            g = r(57),
            y = r(24),
            m = r(34),
            w = r(13),
            x = r(19),
            b = r(6),
            _ = r(10),
            E = r(48),
            k = r(59),
            S = r(60),
            I = r(58).f,
            O = r(49),
            j = r(17),
            A = r(0),
            L = r(89),
            F = r(38),
            P = r(28),
            T = r(93),
            C = r(21),
            R = r(54),
            M = r(53),
            B = r(35),
            N = r(97),
            W = r(12),
            U = r(98),
            D = W.f,
            G = U.f,
            z = o.RangeError,
            V = o.TypeError,
            $ = o.Uint8Array,
            H = Array.prototype,
            Y = c.ArrayBuffer,
            q = c.DataView,
            K = L(0),
            X = L(2),
            J = L(3),
            Q = L(4),
            Z = L(5),
            tt = L(6),
            nt = F(!0),
            rt = F(!1),
            et = T.values,
            ot = T.keys,
            it = T.entries,
            at = H.lastIndexOf,
            ut = H.reduce,
            ct = H.reduceRight,
            st = H.join,
            ft = H.sort,
            lt = H.slice,
            ht = H.toString,
            pt = H.toLocaleString,
            vt = A("iterator"),
            dt = A("toStringTag"),
            gt = j("typed_constructor"),
            yt = j("def_constructor"),
            mt = u.CONSTR,
            wt = u.TYPED,
            xt = u.VIEW,
            bt = L(1, function (t, n) {
                return It(P(t, t[yt]), n)
            }),
            _t = i(function () {
                return 1 === new $(new Uint16Array([1]).buffer)[0]
            }),
            Et = !!$ && !!$.prototype.set && i(function () {
                new $(1).set({})
            }),
            kt = function (t, n) {
                var r = v(t);
                if (r < 0 || r % n) throw z("Wrong offset!");
                return r
            },
            St = function (t) {
                if (b(t) && wt in t) return t;
                throw V(t + " is not a typed array!")
            },
            It = function (t, n) {
                if (!(b(t) && gt in t)) throw V("It is not a typed array constructor!");
                return new t(n)
            },
            Ot = function (t, n) {
                return jt(P(t, t[yt]), n)
            },
            jt = function (t, n) {
                for (var r = 0, e = n.length, o = It(t, e); e > r;) o[r] = n[r++];
                return o
            },
            At = function (t, n, r) {
                D(t, n, {
                    get: function () {
                        return this._d[r]
                    }
                })
            },
            Lt = function (t) {
                var n, r, e, o, i, a, u = _(t),
                    c = arguments.length,
                    f = c > 1 ? arguments[1] : void 0,
                    l = void 0 !== f,
                    h = O(u);
                if (null != h && !E(h)) {
                    for (a = h.call(u), e = [], n = 0; !(i = a.next()).done; n++) e.push(i.value);
                    u = e
                }
                for (l && c > 2 && (f = s(f, arguments[2], 2)), n = 0, r = d(u.length), o = It(this, r); r > n; n++) o[n] = l ? f(u[n], n) : u[n];
                return o
            },
            Ft = function () {
                for (var t = 0, n = arguments.length, r = It(this, n); n > t;) r[t] = arguments[t++];
                return r
            },
            Pt = !!$ && i(function () {
                pt.call(new $(1))
            }),
            Tt = function () {
                return pt.apply(Pt ? lt.call(St(this)) : St(this), arguments)
            },
            Ct = {
                copyWithin: function (t, n) {
                    return N.call(St(this), t, n, arguments.length > 2 ? arguments[2] : void 0)
                },
                every: function (t) {
                    return Q(St(this), t, arguments.length > 1 ? arguments[1] : void 0)
                },
                fill: function (t) {
                    return B.apply(St(this), arguments)
                },
                filter: function (t) {
                    return Ot(this, X(St(this), t, arguments.length > 1 ? arguments[1] : void 0))
                },
                find: function (t) {
                    return Z(St(this), t, arguments.length > 1 ? arguments[1] : void 0)
                },
                findIndex: function (t) {
                    return tt(St(this), t, arguments.length > 1 ? arguments[1] : void 0)
                },
                forEach: function (t) {
                    K(St(this), t, arguments.length > 1 ? arguments[1] : void 0)
                },
                indexOf: function (t) {
                    return rt(St(this), t, arguments.length > 1 ? arguments[1] : void 0)
                },
                includes: function (t) {
                    return nt(St(this), t, arguments.length > 1 ? arguments[1] : void 0)
                },
                join: function (t) {
                    return st.apply(St(this), arguments)
                },
                lastIndexOf: function (t) {
                    return at.apply(St(this), arguments)
                },
                map: function (t) {
                    return bt(St(this), t, arguments.length > 1 ? arguments[1] : void 0)
                },
                reduce: function (t) {
                    return ut.apply(St(this), arguments)
                },
                reduceRight: function (t) {
                    return ct.apply(St(this), arguments)
                },
                reverse: function () {
                    for (var t, n = St(this).length, r = Math.floor(n / 2), e = 0; e < r;) t = this[e], this[e++] = this[--n], this[n] = t;
                    return this
                },
                some: function (t) {
                    return J(St(this), t, arguments.length > 1 ? arguments[1] : void 0)
                },
                sort: function (t) {
                    return ft.call(St(this), t)
                },
                subarray: function (t, n) {
                    var r = St(this),
                        e = r.length,
                        o = y(t, e);
                    return new (P(r, r[yt]))(r.buffer, r.byteOffset + o * r.BYTES_PER_ELEMENT, d((void 0 === n ? e : y(n, e)) - o))
                }
            },
            Rt = function (t, n) {
                return Ot(this, lt.call(St(this), t, n))
            },
            Mt = function (t) {
                St(this);
                var n = kt(arguments[1], 1),
                    r = this.length,
                    e = _(t),
                    o = d(e.length),
                    i = 0;
                if (o + n > r) throw z("Wrong length!");
                for (; i < o;) this[n + i] = e[i++]
            },
            Bt = {
                entries: function () {
                    return it.call(St(this))
                },
                keys: function () {
                    return ot.call(St(this))
                },
                values: function () {
                    return et.call(St(this))
                }
            },
            Nt = function (t, n) {
                return b(t) && t[wt] && "symbol" != typeof n && n in t && String(+n) == String(n)
            },
            Wt = function (t, n) {
                return Nt(t, n = m(n, !0)) ? l(2, t[n]) : G(t, n)
            },
            Ut = function (t, n, r) {
                return !(Nt(t, n = m(n, !0)) && b(r) && w(r, "value")) || w(r, "get") || w(r, "set") || r.configurable || w(r, "writable") && !r.writable || w(r, "enumerable") && !r.enumerable ? D(t, n, r) : (t[n] = r.value, t)
            };
        mt || (U.f = Wt, W.f = Ut), a(a.S + a.F * !mt, "Object", {
            getOwnPropertyDescriptor: Wt,
            defineProperty: Ut
        }), i(function () {
            ht.call({})
        }) && (ht = pt = function () {
            return st.call(this)
        });
        var Dt = p({}, Ct);
        p(Dt, Bt), h(Dt, vt, Bt.values), p(Dt, {
            slice: Rt,
            set: Mt,
            constructor: function () { },
            toString: ht,
            toLocaleString: Tt
        }), At(Dt, "buffer", "b"), At(Dt, "byteOffset", "o"), At(Dt, "byteLength", "l"), At(Dt, "length", "e"), D(Dt, dt, {
            get: function () {
                return this[wt]
            }
        }), t.exports = function (t, n, r, c) {
            var s = t + ((c = !!c) ? "Clamped" : "") + "Array",
                l = "get" + t,
                p = "set" + t,
                v = o[s],
                y = v || {},
                m = v && S(v),
                w = !v || !u.ABV,
                _ = {},
                E = v && v.prototype,
                O = function (t, r) {
                    D(t, r, {
                        get: function () {
                            return function (t, r) {
                                var e = t._d;
                                return e.v[l](r * n + e.o, _t)
                            }(this, r)
                        },
                        set: function (t) {
                            return function (t, r, e) {
                                var o = t._d;
                                c && (e = (e = Math.round(e)) < 0 ? 0 : e > 255 ? 255 : 255 & e), o.v[p](r * n + o.o, e, _t)
                            }(this, r, t)
                        },
                        enumerable: !0
                    })
                };
            w ? (v = r(function (t, r, e, o) {
                f(t, v, s, "_d");
                var i, a, u, c, l = 0,
                    p = 0;
                if (b(r)) {
                    if (!(r instanceof Y || "ArrayBuffer" == (c = x(r)) || "SharedArrayBuffer" == c)) return wt in r ? jt(v, r) : Lt.call(v, r);
                    i = r, p = kt(e, n);
                    var y = r.byteLength;
                    if (void 0 === o) {
                        if (y % n) throw z("Wrong length!");
                        if ((a = y - p) < 0) throw z("Wrong length!")
                    } else if ((a = d(o) * n) + p > y) throw z("Wrong length!");
                    u = a / n
                } else u = g(r), i = new Y(a = u * n);
                for (h(t, "_d", {
                    b: i,
                    o: p,
                    l: a,
                    e: u,
                    v: new q(i)
                }); l < u;) O(t, l++)
            }), E = v.prototype = k(Dt), h(E, "constructor", v)) : i(function () {
                v(1)
            }) && i(function () {
                new v(-1)
            }) && R(function (t) {
                new v, new v(null), new v(1.5), new v(t)
            }, !0) || (v = r(function (t, r, e, o) {
                var i;
                return f(t, v, s), b(r) ? r instanceof Y || "ArrayBuffer" == (i = x(r)) || "SharedArrayBuffer" == i ? void 0 !== o ? new y(r, kt(e, n), o) : void 0 !== e ? new y(r, kt(e, n)) : new y(r) : wt in r ? jt(v, r) : Lt.call(v, r) : new y(g(r))
            }), K(m !== Function.prototype ? I(y).concat(I(m)) : I(y), function (t) {
                t in v || h(v, t, y[t])
            }), v.prototype = E, e || (E.constructor = v));
            var j = E[vt],
                A = !!j && ("values" == j.name || null == j.name),
                L = Bt.values;
            h(v, gt, !0), h(E, wt, s), h(E, xt, !0), h(E, yt, v), (c ? new v(1)[dt] == s : dt in E) || D(E, dt, {
                get: function () {
                    return s
                }
            }), _[s] = v, a(a.G + a.W + a.F * (v != y), _), a(a.S, s, {
                BYTES_PER_ELEMENT: n
            }), a(a.S + a.F * i(function () {
                y.of.call(v, 1)
            }), s, {
                from: Lt,
                of: Ft
            }), "BYTES_PER_ELEMENT" in E || h(E, "BYTES_PER_ELEMENT", n), a(a.P, s, Ct), M(s), a(a.P + a.F * Et, s, {
                set: Mt
            }), a(a.P + a.F * !A, s, Bt), e || E.toString == ht || (E.toString = ht), a(a.P + a.F * i(function () {
                new v(1).slice()
            }), s, {
                slice: Rt
            }), a(a.P + a.F * (i(function () {
                return [1, 2].toLocaleString() != new v([1, 2]).toLocaleString()
            }) || !i(function () {
                E.toLocaleString.call([1, 2])
            })), s, {
                toLocaleString: Tt
            }), C[s] = A ? j : L, e || A || h(E, vt, L)
        }
    } else t.exports = function () { }
}, function (t, n, r) {
    for (var e, o = r(1), i = r(4), a = r(17), u = a("typed_array"), c = a("view"), s = !(!o.ArrayBuffer || !o.DataView), f = s, l = 0, h = "Int8Array,Uint8Array,Uint8ClampedArray,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array".split(","); l < 9;)(e = o[h[l++]]) ? (i(e.prototype, u, !0), i(e.prototype, c, !0)) : f = !1;
    t.exports = {
        ABV: s,
        CONSTR: f,
        TYPED: u,
        VIEW: c
    }
}, function (t, n, r) {
    var e = r(8),
        o = r(3);
    t.exports = function (t) {
        if (void 0 === t) return 0;
        var n = e(t),
            r = o(n);
        if (n !== r) throw RangeError("Wrong length!");
        return r
    }
}, function (t, n, r) {
    var e = r(46),
        o = r(40).concat("length", "prototype");
    n.f = Object.getOwnPropertyNames || function (t) {
        return e(t, o)
    }
}, function (t, n, r) {
    var e = r(2),
        o = r(88),
        i = r(40),
        a = r(39)("IE_PROTO"),
        u = function () { },
        c = function () {
            var t, n = r(33)("iframe"),
                e = i.length;
            for (n.style.display = "none", r(51).appendChild(n), n.src = "javascript:", (t = n.contentWindow.document).open(), t.write("<script>document.F=Object<\/script>"), t.close(), c = t.F; e--;) delete c.prototype[i[e]];
            return c()
        };
    t.exports = Object.create || function (t, n) {
        var r;
        return null !== t ? (u.prototype = e(t), r = new u, u.prototype = null, r[a] = t) : r = c(), void 0 === n ? r : o(r, n)
    }
}, function (t, n, r) {
    var e = r(13),
        o = r(10),
        i = r(39)("IE_PROTO"),
        a = Object.prototype;
    t.exports = Object.getPrototypeOf || function (t) {
        return t = o(t), e(t, i) ? t[i] : "function" == typeof t.constructor && t instanceof t.constructor ? t.constructor.prototype : t instanceof Object ? a : null
    }
}, function (t, n, r) {
    "use strict";

    function e(t, n, r, e) {
        for (var o = t[n++], i = 1 << o, a = i + 1, u = a + 1, c = o + 1, s = (1 << c) - 1, f = 0, l = 0, h = 0, p = t[n++], v = new Int32Array(4096), d = null; ;) {
            for (; f < 16 && 0 !== p;) l |= t[n++] << f, f += 8, 1 === p ? p = t[n++] : --p;
            if (f < c) break;
            var g = l & s;
            if (l >>= c, f -= c, g !== i) {
                if (g === a) break;
                for (var y = g < u ? g : d, m = 0, w = y; w > i;) w = v[w] >> 8, ++m;
                var x = w;
                if (h + m + (y !== g ? 1 : 0) > e) return void console.log("Warning, gif stream longer than expected.");
                r[h++] = x;
                var b = h += m;
                for (y !== g && (r[h++] = x), w = y; m--;) w = v[w], r[--b] = 255 & w, w >>= 8;
                null !== d && u < 4096 && (v[u++] = d << 8 | x, u >= s + 1 && c < 12 && (++c, s = s << 1 | 1)), d = g
            } else u = a + 1, s = (1 << (c = o + 1)) - 1, d = null
        }
        return h !== e && console.log("Warning, gif stream shorter than expected."), r
    }
    try {
        n.GifWriter = function (t, n, r, e) {
            var o = 0,
                i = void 0 === (e = void 0 === e ? {} : e).loop ? null : e.loop,
                a = void 0 === e.palette ? null : e.palette;
            if (n <= 0 || r <= 0 || n > 65535 || r > 65535) throw new Error("Width/Height invalid.");

            function u(t) {
                var n = t.length;
                if (n < 2 || n > 256 || n & n - 1) throw new Error("Invalid code/color length, must be power of 2 and 2 .. 256.");
                return n
            }
            t[o++] = 71, t[o++] = 73, t[o++] = 70, t[o++] = 56, t[o++] = 57, t[o++] = 97;
            var c = 0,
                s = 0;
            if (null !== a) {
                for (var f = u(a); f >>= 1;) ++c;
                if (f = 1 << c, --c, void 0 !== e.background) {
                    if ((s = e.background) >= f) throw new Error("Background index out of range.");
                    if (0 === s) throw new Error("Background index explicitly passed as 0.")
                }
            }
            if (t[o++] = 255 & n, t[o++] = n >> 8 & 255, t[o++] = 255 & r, t[o++] = r >> 8 & 255, t[o++] = (null !== a ? 128 : 0) | c, t[o++] = s, t[o++] = 0, null !== a)
                for (var l = 0, h = a.length; l < h; ++l) {
                    var p = a[l];
                    t[o++] = p >> 16 & 255, t[o++] = p >> 8 & 255, t[o++] = 255 & p
                }
            if (null !== i) {
                if (i < 0 || i > 65535) throw new Error("Loop count invalid.");
                t[o++] = 33, t[o++] = 255, t[o++] = 11, t[o++] = 78, t[o++] = 69, t[o++] = 84, t[o++] = 83, t[o++] = 67, t[o++] = 65, t[o++] = 80, t[o++] = 69, t[o++] = 50, t[o++] = 46, t[o++] = 48, t[o++] = 3, t[o++] = 1, t[o++] = 255 & i, t[o++] = i >> 8 & 255, t[o++] = 0
            }
            var v = !1;
            this.addFrame = function (n, r, e, i, c, s) {
                if (!0 === v && (--o, v = !1), s = void 0 === s ? {} : s, n < 0 || r < 0 || n > 65535 || r > 65535) throw new Error("x/y invalid.");
                if (e <= 0 || i <= 0 || e > 65535 || i > 65535) throw new Error("Width/Height invalid.");
                if (c.length < e * i) throw new Error("Not enough pixels for the frame size.");
                var f = !0,
                    l = s.palette;
                if (null == l && (f = !1, l = a), null == l) throw new Error("Must supply either a local or global palette.");
                for (var h = u(l), p = 0; h >>= 1;) ++p;
                h = 1 << p;
                var d = void 0 === s.delay ? 0 : s.delay,
                    g = void 0 === s.disposal ? 0 : s.disposal;
                if (g < 0 || g > 3) throw new Error("Disposal out of range.");
                var y = !1,
                    m = 0;
                if (void 0 !== s.transparent && null !== s.transparent && (y = !0, (m = s.transparent) < 0 || m >= h)) throw new Error("Transparent color index.");
                if ((0 !== g || y || 0 !== d) && (t[o++] = 33, t[o++] = 249, t[o++] = 4, t[o++] = g << 2 | (!0 === y ? 1 : 0), t[o++] = 255 & d, t[o++] = d >> 8 & 255, t[o++] = m, t[o++] = 0), t[o++] = 44, t[o++] = 255 & n, t[o++] = n >> 8 & 255, t[o++] = 255 & r, t[o++] = r >> 8 & 255, t[o++] = 255 & e, t[o++] = e >> 8 & 255, t[o++] = 255 & i, t[o++] = i >> 8 & 255, t[o++] = !0 === f ? 128 | p - 1 : 0, !0 === f)
                    for (var w = 0, x = l.length; w < x; ++w) {
                        var b = l[w];
                        t[o++] = b >> 16 & 255, t[o++] = b >> 8 & 255, t[o++] = 255 & b
                    }
                return o = function (t, n, r, e) {
                    t[n++] = r;
                    var o = n++,
                        i = 1 << r,
                        a = i - 1,
                        u = i + 1,
                        c = u + 1,
                        s = r + 1,
                        f = 0,
                        l = 0;

                    function h(r) {
                        for (; f >= r;) t[n++] = 255 & l, l >>= 8, f -= 8, n === o + 256 && (t[o] = 255, o = n++)
                    }

                    function p(t) {
                        l |= t << f, f += s, h(8)
                    }
                    var v = e[0] & a,
                        d = {};
                    p(i);
                    for (var g = 1, y = e.length; g < y; ++g) {
                        var m = e[g] & a,
                            w = v << 8 | m,
                            x = d[w];
                        if (void 0 === x) {
                            for (l |= v << f, f += s; f >= 8;) t[n++] = 255 & l, l >>= 8, f -= 8, n === o + 256 && (t[o] = 255, o = n++);
                            4096 === c ? (p(i), c = u + 1, s = r + 1, d = {}) : (c >= 1 << s && ++s, d[w] = c++), v = m
                        } else v = x
                    }
                    return p(v), p(u), h(1), o + 1 === n ? t[o] = 0 : (t[o] = n - o - 1, t[n++] = 0), n
                }(t, o, p < 2 ? 2 : p, c)
            }, this.end = function () {
                return !1 === v && (t[o++] = 59, v = !0), o
            }, this.getOutputBuffer = function () {
                return t
            }, this.setOutputBuffer = function (n) {
                t = n
            }, this.getOutputBufferPosition = function () {
                return o
            }, this.setOutputBufferPosition = function (t) {
                o = t
            }
        }, n.GifReader = function (t) {
            var n = 0;
            if (71 !== t[n++] || 73 !== t[n++] || 70 !== t[n++] || 56 !== t[n++] || 56 != (t[n++] + 1 & 253) || 97 !== t[n++]) throw new Error("Invalid GIF 87a/89a header.");
            var r = t[n++] | t[n++] << 8,
                o = t[n++] | t[n++] << 8,
                i = t[n++],
                a = i >> 7,
                u = 1 << 1 + (7 & i);
            t[n++], t[n++];
            var c = null,
                s = null;
            a && (c = n, s = u, n += 3 * u);
            var f = !0,
                l = [],
                h = 0,
                p = null,
                v = 0,
                d = null;
            for (this.width = r, this.height = o; f && n < t.length;) switch (t[n++]) {
                case 33:
                    switch (t[n++]) {
                        case 255:
                            if (11 !== t[n] || 78 == t[n + 1] && 69 == t[n + 2] && 84 == t[n + 3] && 83 == t[n + 4] && 67 == t[n + 5] && 65 == t[n + 6] && 80 == t[n + 7] && 69 == t[n + 8] && 50 == t[n + 9] && 46 == t[n + 10] && 48 == t[n + 11] && 3 == t[n + 12] && 1 == t[n + 13] && 0 == t[n + 16]) n += 14, d = t[n++] | t[n++] << 8, n++;
                            else
                                for (n += 12; ;) {
                                    if (!((j = t[n++]) >= 0)) throw Error("Invalid block size");
                                    if (0 === j) break;
                                    n += j
                                }
                            break;
                        case 249:
                            if (4 !== t[n++] || 0 !== t[n + 4]) throw new Error("Invalid graphics extension block.");
                            var g = t[n++];
                            h = t[n++] | t[n++] << 8, p = t[n++], 0 == (1 & g) && (p = null), v = g >> 2 & 7, n++;
                            break;
                        case 254:
                            for (; ;) {
                                if (!((j = t[n++]) >= 0)) throw Error("Invalid block size");
                                if (0 === j) break;
                                n += j
                            }
                            break;
                        default:
                            throw new Error("Unknown graphic control label: 0x" + t[n - 1].toString(16))
                    }
                    break;
                case 44:
                    var y = t[n++] | t[n++] << 8,
                        m = t[n++] | t[n++] << 8,
                        w = t[n++] | t[n++] << 8,
                        x = t[n++] | t[n++] << 8,
                        b = t[n++],
                        _ = b >> 6 & 1,
                        E = 1 << 1 + (7 & b),
                        k = c,
                        S = s,
                        I = !1;
                    b >> 7 && (I = !0, k = n, S = E, n += 3 * E);
                    var O = n;
                    for (n++; ;) {
                        var j;
                        if (!((j = t[n++]) >= 0)) throw Error("Invalid block size");
                        if (0 === j) break;
                        n += j
                    }
                    l.push({
                        x: y,
                        y: m,
                        width: w,
                        height: x,
                        has_local_palette: I,
                        palette_offset: k,
                        palette_size: S,
                        data_offset: O,
                        data_length: n - O,
                        transparent_index: p,
                        interlaced: !!_,
                        delay: h,
                        disposal: v
                    });
                    break;
                case 59:
                    f = !1;
                    break;
                default:
                    throw new Error("Unknown gif block: 0x" + t[n - 1].toString(16))
            }
            this.numFrames = function () {
                return l.length
            }, this.loopCount = function () {
                return d
            }, this.frameInfo = function (t) {
                if (t < 0 || t >= l.length) throw new Error("Frame index out of range.");
                return l[t]
            }, this.decodeAndBlitFrameBGRA = function (n, o) {
                var i = this.frameInfo(n),
                    a = i.width * i.height,
                    u = new Uint8Array(a);
                e(t, i.data_offset, u, a);
                var c = i.palette_offset,
                    s = i.transparent_index;
                null === s && (s = 256);
                var f = i.width,
                    l = r - f,
                    h = f,
                    p = 4 * (i.y * r + i.x),
                    v = 4 * ((i.y + i.height) * r + i.x),
                    d = p,
                    g = 4 * l;
                !0 === i.interlaced && (g += 4 * r * 7);
                for (var y = 8, m = 0, w = u.length; m < w; ++m) {
                    var x = u[m];
                    if (0 === h && (h = f, (d += g) >= v && (g = 4 * l + 4 * r * (y - 1), d = p + (f + l) * (y << 1), y >>= 1)), x === s) d += 4;
                    else {
                        var b = t[c + 3 * x],
                            _ = t[c + 3 * x + 1],
                            E = t[c + 3 * x + 2];
                        o[d++] = E, o[d++] = _, o[d++] = b, o[d++] = 255
                    } --h
                }
            }, this.decodeAndBlitFrameRGBA = function (n, o) {
                var i = this.frameInfo(n),
                    a = i.width * i.height,
                    u = new Uint8Array(a);
                e(t, i.data_offset, u, a);
                var c = i.palette_offset,
                    s = i.transparent_index;
                null === s && (s = 256);
                var f = i.width,
                    l = r - f,
                    h = f,
                    p = 4 * (i.y * r + i.x),
                    v = 4 * ((i.y + i.height) * r + i.x),
                    d = p,
                    g = 4 * l;
                !0 === i.interlaced && (g += 4 * r * 7);
                for (var y = 8, m = 0, w = u.length; m < w; ++m) {
                    var x = u[m];
                    if (0 === h && (h = f, (d += g) >= v && (g = 4 * l + 4 * r * (y - 1), d = p + (f + l) * (y << 1), y >>= 1)), x === s) d += 4;
                    else {
                        var b = t[c + 3 * x],
                            _ = t[c + 3 * x + 1],
                            E = t[c + 3 * x + 2];
                        o[d++] = b, o[d++] = _, o[d++] = E, o[d++] = 255
                    } --h
                }
            }
        }
    } catch (t) { }
}, function (t, n, r) {
    "use strict";
    var e = r(43),
        o = r(2),
        i = r(28),
        a = r(29),
        u = r(3),
        c = r(30),
        s = r(31),
        f = r(9),
        l = Math.min,
        h = [].push,
        p = !f(function () {
            RegExp(4294967295, "y")
        });
    r(32)("split", 2, function (t, n, r, f) {
        var v;
        return v = "c" == "abbc".split(/(b)*/)[1] || 4 != "test".split(/(?:)/, -1).length || 2 != "ab".split(/(?:ab)*/).length || 4 != ".".split(/(.?)(.?)/).length || ".".split(/()()/).length > 1 || "".split(/.?/).length ? function (t, n) {
            var o = String(this);
            if (void 0 === t && 0 === n) return [];
            if (!e(t)) return r.call(o, t, n);
            for (var i, a, u, c = [], f = (t.ignoreCase ? "i" : "") + (t.multiline ? "m" : "") + (t.unicode ? "u" : "") + (t.sticky ? "y" : ""), l = 0, p = void 0 === n ? 4294967295 : n >>> 0, v = new RegExp(t.source, f + "g");
                (i = s.call(v, o)) && !((a = v.lastIndex) > l && (c.push(o.slice(l, i.index)), i.length > 1 && i.index < o.length && h.apply(c, i.slice(1)), u = i[0].length, l = a, c.length >= p));) v.lastIndex === i.index && v.lastIndex++;
            return l === o.length ? !u && v.test("") || c.push("") : c.push(o.slice(l)), c.length > p ? c.slice(0, p) : c
        } : "0".split(void 0, 0).length ? function (t, n) {
            return void 0 === t && 0 === n ? [] : r.call(this, t, n)
        } : r, [function (r, e) {
            var o = t(this),
                i = null == r ? void 0 : r[n];
            return void 0 !== i ? i.call(r, o, e) : v.call(String(o), r, e)
        }, function (t, n) {
            var e = f(v, t, this, n, v !== r);
            if (e.done) return e.value;
            var s = o(t),
                h = String(this),
                d = i(s, RegExp),
                g = s.unicode,
                y = (s.ignoreCase ? "i" : "") + (s.multiline ? "m" : "") + (s.unicode ? "u" : "") + (p ? "y" : "g"),
                m = new d(p ? s : "^(?:" + s.source + ")", y),
                w = void 0 === n ? 4294967295 : n >>> 0;
            if (0 === w) return [];
            if (0 === h.length) return null === c(m, h) ? [h] : [];
            for (var x = 0, b = 0, _ = []; b < h.length;) {
                m.lastIndex = p ? b : 0;
                var E, k = c(m, p ? h : h.slice(b));
                if (null === k || (E = l(u(m.lastIndex + (p ? 0 : b)), h.length)) === x) b = a(h, b, g);
                else {
                    if (_.push(h.slice(x, b)), _.length === w) return _;
                    for (var S = 1; S <= k.length - 1; S++)
                        if (_.push(k[S]), _.length === w) return _;
                    b = x = E
                }
            }
            return _.push(h.slice(x)), _
        }]
    })
}, function (t, n, r) {
    var e = r(8),
        o = r(18);
    t.exports = function (t) {
        return function (n, r) {
            var i, a, u = String(o(n)),
                c = e(r),
                s = u.length;
            return c < 0 || c >= s ? t ? "" : void 0 : (i = u.charCodeAt(c)) < 55296 || i > 56319 || c + 1 === s || (a = u.charCodeAt(c + 1)) < 56320 || a > 57343 ? t ? u.charAt(c) : i : t ? u.slice(c, c + 2) : a - 56320 + (i - 55296 << 10) + 65536
        }
    }
}, function (t, n, r) {
    "use strict";
    var e = r(2);
    t.exports = function () {
        var t = e(this),
            n = "";
        return t.global && (n += "g"), t.ignoreCase && (n += "i"), t.multiline && (n += "m"), t.unicode && (n += "u"), t.sticky && (n += "y"), n
    }
}, function (t, n, r) {
    "use strict";
    var e = r(31);
    r(7)({
        target: "RegExp",
        proto: !0,
        forced: e !== /./.exec
    }, {
        exec: e
    })
}, function (t, n, r) {
    t.exports = r(27)("native-function-to-string", Function.toString)
}, function (t, n, r) {
    "use strict";
    var e = r(2),
        o = r(3),
        i = r(29),
        a = r(30);
    r(32)("match", 1, function (t, n, r, u) {
        return [function (r) {
            var e = t(this),
                o = null == r ? void 0 : r[n];
            return void 0 !== o ? o.call(r, e) : new RegExp(r)[n](String(e))
        }, function (t) {
            var n = u(r, t, this);
            if (n.done) return n.value;
            var c = e(t),
                s = String(this);
            if (!c.global) return a(c, s);
            var f = c.unicode;
            c.lastIndex = 0;
            for (var l, h = [], p = 0; null !== (l = a(c, s));) {
                var v = String(l[0]);
                h[p] = v, "" === v && (c.lastIndex = i(s, o(c.lastIndex), f)), p++
            }
            return 0 === p ? null : h
        }]
    })
}, function (t, n, r) {
    "use strict";
    var e = r(2),
        o = r(10),
        i = r(3),
        a = r(8),
        u = r(29),
        c = r(30),
        s = Math.max,
        f = Math.min,
        l = Math.floor,
        h = /\$([$&`']|\d\d?|<[^>]*>)/g,
        p = /\$([$&`']|\d\d?)/g;
    r(32)("replace", 2, function (t, n, r, v) {
        return [function (e, o) {
            var i = t(this),
                a = null == e ? void 0 : e[n];
            return void 0 !== a ? a.call(e, i, o) : r.call(String(i), e, o)
        }, function (t, n) {
            var o = v(r, t, this, n);
            if (o.done) return o.value;
            var l = e(t),
                h = String(this),
                p = "function" == typeof n;
            p || (n = String(n));
            var g = l.global;
            if (g) {
                var y = l.unicode;
                l.lastIndex = 0
            }
            for (var m = []; ;) {
                var w = c(l, h);
                if (null === w) break;
                if (m.push(w), !g) break;
                "" === String(w[0]) && (l.lastIndex = u(h, i(l.lastIndex), y))
            }
            for (var x, b = "", _ = 0, E = 0; E < m.length; E++) {
                w = m[E];
                for (var k = String(w[0]), S = s(f(a(w.index), h.length), 0), I = [], O = 1; O < w.length; O++) I.push(void 0 === (x = w[O]) ? x : String(x));
                var j = w.groups;
                if (p) {
                    var A = [k].concat(I, S, h);
                    void 0 !== j && A.push(j);
                    var L = String(n.apply(void 0, A))
                } else L = d(k, h, S, I, j, n);
                S >= _ && (b += h.slice(_, S) + L, _ = S + k.length)
            }
            return b + h.slice(_)
        }];

        function d(t, n, e, i, a, u) {
            var c = e + t.length,
                s = i.length,
                f = p;
            return void 0 !== a && (a = o(a), f = h), r.call(u, f, function (r, o) {
                var u;
                switch (o.charAt(0)) {
                    case "$":
                        return "$";
                    case "&":
                        return t;
                    case "`":
                        return n.slice(0, e);
                    case "'":
                        return n.slice(c);
                    case "<":
                        u = a[o.slice(1, -1)];
                        break;
                    default:
                        var f = +o;
                        if (0 === f) return r;
                        if (f > s) {
                            var h = l(f / 10);
                            return 0 === h ? r : h <= s ? void 0 === i[h - 1] ? o.charAt(1) : i[h - 1] + o.charAt(1) : r
                        }
                        u = i[f - 1]
                }
                return void 0 === u ? "" : u
            })
        }
    })
}, function (t, n, r) {
    var e = r(7);
    e(e.P, "Array", {
        fill: r(35)
    }), r(36)("fill")
}, function (t, n, r) {
    var e = r(7);
    e(e.S + e.F, "Object", {
        assign: r(71)
    })
}, function (t, n, r) {
    "use strict";
    var e = r(5),
        o = r(45),
        i = r(72),
        a = r(47),
        u = r(10),
        c = r(37),
        s = Object.assign;
    t.exports = !s || r(9)(function () {
        var t = {},
            n = {},
            r = Symbol(),
            e = "abcdefghijklmnopqrst";
        return t[r] = 7, e.split("").forEach(function (t) {
            n[t] = t
        }), 7 != s({}, t)[r] || Object.keys(s({}, n)).join("") != e
    }) ? function (t, n) {
        for (var r = u(t), s = arguments.length, f = 1, l = i.f, h = a.f; s > f;)
            for (var p, v = c(arguments[f++]), d = l ? o(v).concat(l(v)) : o(v), g = d.length, y = 0; g > y;) p = d[y++], e && !h.call(v, p) || (r[p] = v[p]);
        return r
    } : s
}, function (t, n) {
    n.f = Object.getOwnPropertySymbols
}, function (t, n, r) {
    "use strict";
    var e = r(7),
        o = r(38)(!0);
    e(e.P, "Array", {
        includes: function (t) {
            return o(this, t, arguments.length > 1 ? arguments[1] : void 0)
        }
    }), r(36)("includes")
}, function (t, n, r) {
    "use strict";
    var e = r(7),
        o = r(75);
    e(e.P + e.F * r(76)("includes"), "String", {
        includes: function (t) {
            return !!~o(this, t, "includes").indexOf(t, arguments.length > 1 ? arguments[1] : void 0)
        }
    })
}, function (t, n, r) {
    var e = r(43),
        o = r(18);
    t.exports = function (t, n, r) {
        if (e(n)) throw TypeError("String#" + r + " doesn't accept regex!");
        return String(o(t))
    }
}, function (t, n, r) {
    var e = r(0)("match");
    t.exports = function (t) {
        var n = /./;
        try {
            "/./"[t](n)
        } catch (r) {
            try {
                return n[e] = !1, !"/./"[t](n)
            } catch (t) { }
        }
        return !0
    }
}, function (t, n, r) {
    "use strict";
    var e, o, i, a, u = r(16),
        c = r(1),
        s = r(14),
        f = r(19),
        l = r(7),
        h = r(6),
        p = r(22),
        v = r(41),
        d = r(78),
        g = r(28),
        y = r(50).set,
        m = r(81)(),
        w = r(52),
        x = r(82),
        b = r(83),
        _ = r(84),
        E = c.TypeError,
        k = c.process,
        S = k && k.versions,
        I = S && S.v8 || "",
        O = c.Promise,
        j = "process" == f(k),
        A = function () { },
        L = o = w.f,
        F = !! function () {
            try {
                var t = O.resolve(1),
                    n = (t.constructor = {})[r(0)("species")] = function (t) {
                        t(A, A)
                    };
                return (j || "function" == typeof PromiseRejectionEvent) && t.then(A) instanceof n && 0 !== I.indexOf("6.6") && -1 === b.indexOf("Chrome/66")
            } catch (t) { }
        }(),
        P = function (t) {
            var n;
            return !(!h(t) || "function" != typeof (n = t.then)) && n
        },
        T = function (t, n) {
            if (!t._n) {
                t._n = !0;
                var r = t._c;
                m(function () {
                    for (var e = t._v, o = 1 == t._s, i = 0, a = function (n) {
                        var r, i, a, u = o ? n.ok : n.fail,
                            c = n.resolve,
                            s = n.reject,
                            f = n.domain;
                        try {
                            u ? (o || (2 == t._h && M(t), t._h = 1), !0 === u ? r = e : (f && f.enter(), r = u(e), f && (f.exit(), a = !0)), r === n.promise ? s(E("Promise-chain cycle")) : (i = P(r)) ? i.call(r, c, s) : c(r)) : s(e)
                        } catch (t) {
                            f && !a && f.exit(), s(t)
                        }
                    }; r.length > i;) a(r[i++]);
                    t._c = [], t._n = !1, n && !t._h && C(t)
                })
            }
        },
        C = function (t) {
            y.call(c, function () {
                var n, r, e, o = t._v,
                    i = R(t);
                if (i && (n = x(function () {
                    j ? k.emit("unhandledRejection", o, t) : (r = c.onunhandledrejection) ? r({
                        promise: t,
                        reason: o
                    }) : (e = c.console) && e.error && e.error("Unhandled promise rejection", o)
                }), t._h = j || R(t) ? 2 : 1), t._a = void 0, i && n.e) throw n.v
            })
        },
        R = function (t) {
            return 1 !== t._h && 0 === (t._a || t._c).length
        },
        M = function (t) {
            y.call(c, function () {
                var n;
                j ? k.emit("rejectionHandled", t) : (n = c.onrejectionhandled) && n({
                    promise: t,
                    reason: t._v
                })
            })
        },
        B = function (t) {
            var n = this;
            n._d || (n._d = !0, (n = n._w || n)._v = t, n._s = 2, n._a || (n._a = n._c.slice()), T(n, !0))
        },
        N = function (t) {
            var n, r = this;
            if (!r._d) {
                r._d = !0, r = r._w || r;
                try {
                    if (r === t) throw E("Promise can't be resolved itself");
                    (n = P(t)) ? m(function () {
                        var e = {
                            _w: r,
                            _d: !1
                        };
                        try {
                            n.call(t, s(N, e, 1), s(B, e, 1))
                        } catch (t) {
                            B.call(e, t)
                        }
                    }) : (r._v = t, r._s = 1, T(r, !1))
                } catch (t) {
                    B.call({
                        _w: r,
                        _d: !1
                    }, t)
                }
            }
        };
    F || (O = function (t) {
        v(this, O, "Promise", "_h"), p(t), e.call(this);
        try {
            t(s(N, this, 1), s(B, this, 1))
        } catch (t) {
            B.call(this, t)
        }
    }, (e = function (t) {
        this._c = [], this._a = void 0, this._s = 0, this._d = !1, this._v = void 0, this._h = 0, this._n = !1
    }).prototype = r(42)(O.prototype, {
        then: function (t, n) {
            var r = L(g(this, O));
            return r.ok = "function" != typeof t || t, r.fail = "function" == typeof n && n, r.domain = j ? k.domain : void 0, this._c.push(r), this._a && this._a.push(r), this._s && T(this, !1), r.promise
        },
        catch: function (t) {
            return this.then(void 0, t)
        }
    }), i = function () {
        var t = new e;
        this.promise = t, this.resolve = s(N, t, 1), this.reject = s(B, t, 1)
    }, w.f = L = function (t) {
        return t === O || t === a ? new i(t) : o(t)
    }), l(l.G + l.W + l.F * !F, {
        Promise: O
    }), r(26)(O, "Promise"), r(53)("Promise"), a = r(15).Promise, l(l.S + l.F * !F, "Promise", {
        reject: function (t) {
            var n = L(this);
            return (0, n.reject)(t), n.promise
        }
    }), l(l.S + l.F * (u || !F), "Promise", {
        resolve: function (t) {
            return _(u && this === a ? O : this, t)
        }
    }), l(l.S + l.F * !(F && r(54)(function (t) {
        O.all(t).catch(A)
    })), "Promise", {
        all: function (t) {
            var n = this,
                r = L(n),
                e = r.resolve,
                o = r.reject,
                i = x(function () {
                    var r = [],
                        i = 0,
                        a = 1;
                    d(t, !1, function (t) {
                        var u = i++,
                            c = !1;
                        r.push(void 0), a++, n.resolve(t).then(function (t) {
                            c || (c = !0, r[u] = t, --a || e(r))
                        }, o)
                    }), --a || e(r)
                });
            return i.e && o(i.v), r.promise
        },
        race: function (t) {
            var n = this,
                r = L(n),
                e = r.reject,
                o = x(function () {
                    d(t, !1, function (t) {
                        n.resolve(t).then(r.resolve, e)
                    })
                });
            return o.e && e(o.v), r.promise
        }
    })
}, function (t, n, r) {
    var e = r(14),
        o = r(79),
        i = r(48),
        a = r(2),
        u = r(3),
        c = r(49),
        s = {},
        f = {};
    (n = t.exports = function (t, n, r, l, h) {
        var p, v, d, g, y = h ? function () {
            return t
        } : c(t),
            m = e(r, l, n ? 2 : 1),
            w = 0;
        if ("function" != typeof y) throw TypeError(t + " is not iterable!");
        if (i(y)) {
            for (p = u(t.length); p > w; w++)
                if ((g = n ? m(a(v = t[w])[0], v[1]) : m(t[w])) === s || g === f) return g
        } else
            for (d = y.call(t); !(v = d.next()).done;)
                if ((g = o(d, m, v.value, n)) === s || g === f) return g
    }).BREAK = s, n.RETURN = f
}, function (t, n, r) {
    var e = r(2);
    t.exports = function (t, n, r, o) {
        try {
            return o ? n(e(r)[0], r[1]) : n(r)
        } catch (n) {
            var i = t.return;
            throw void 0 !== i && e(i.call(t)), n
        }
    }
}, function (t, n) {
    t.exports = function (t, n, r) {
        var e = void 0 === r;
        switch (n.length) {
            case 0:
                return e ? t() : t.call(r);
            case 1:
                return e ? t(n[0]) : t.call(r, n[0]);
            case 2:
                return e ? t(n[0], n[1]) : t.call(r, n[0], n[1]);
            case 3:
                return e ? t(n[0], n[1], n[2]) : t.call(r, n[0], n[1], n[2]);
            case 4:
                return e ? t(n[0], n[1], n[2], n[3]) : t.call(r, n[0], n[1], n[2], n[3])
        }
        return t.apply(r, n)
    }
}, function (t, n, r) {
    var e = r(1),
        o = r(50).set,
        i = e.MutationObserver || e.WebKitMutationObserver,
        a = e.process,
        u = e.Promise,
        c = "process" == r(11)(a);
    t.exports = function () {
        var t, n, r, s = function () {
            var e, o;
            for (c && (e = a.domain) && e.exit(); t;) {
                o = t.fn, t = t.next;
                try {
                    o()
                } catch (e) {
                    throw t ? r() : n = void 0, e
                }
            }
            n = void 0, e && e.enter()
        };
        if (c) r = function () {
            a.nextTick(s)
        };
        else if (!i || e.navigator && e.navigator.standalone)
            if (u && u.resolve) {
                var f = u.resolve(void 0);
                r = function () {
                    f.then(s)
                }
            } else r = function () {
                o.call(e, s)
            };
        else {
            var l = !0,
                h = document.createTextNode("");
            new i(s).observe(h, {
                characterData: !0
            }), r = function () {
                h.data = l = !l
            }
        }
        return function (e) {
            var o = {
                fn: e,
                next: void 0
            };
            n && (n.next = o), t || (t = o, r()), n = o
        }
    }
}, function (t, n) {
    t.exports = function (t) {
        try {
            return {
                e: !1,
                v: t()
            }
        } catch (t) {
            return {
                e: !0,
                v: t
            }
        }
    }
}, function (t, n, r) {
    var e = r(1).navigator;
    t.exports = e && e.userAgent || ""
}, function (t, n, r) {
    var e = r(2),
        o = r(6),
        i = r(52);
    t.exports = function (t, n) {
        if (e(t), o(n) && n.constructor === t) return n;
        var r = i.f(t);
        return (0, r.resolve)(n), r.promise
    }
}, function (t, n, r) {
    "use strict";
    var e = r(19),
        o = {};
    o[r(0)("toStringTag")] = "z", o + "" != "[object z]" && r(20)(Object.prototype, "toString", function () {
        return "[object " + e(this) + "]"
    }, !0)
}, function (t, n, r) {
    r(55)("Uint8", 1, function (t) {
        return function (n, r, e) {
            return t(this, n, r, e)
        }
    })
}, function (t, n, r) {
    "use strict";
    var e = r(1),
        o = r(5),
        i = r(16),
        a = r(56),
        u = r(4),
        c = r(42),
        s = r(9),
        f = r(41),
        l = r(8),
        h = r(3),
        p = r(57),
        v = r(58).f,
        d = r(12).f,
        g = r(35),
        y = r(26),
        m = "prototype",
        w = "Wrong index!",
        x = e.ArrayBuffer,
        b = e.DataView,
        _ = e.Math,
        E = e.RangeError,
        k = e.Infinity,
        S = x,
        I = _.abs,
        O = _.pow,
        j = _.floor,
        A = _.log,
        L = _.LN2,
        F = o ? "_b" : "buffer",
        P = o ? "_l" : "byteLength",
        T = o ? "_o" : "byteOffset";

    function C(t, n, r) {
        var e, o, i, a = new Array(r),
            u = 8 * r - n - 1,
            c = (1 << u) - 1,
            s = c >> 1,
            f = 23 === n ? O(2, -24) - O(2, -77) : 0,
            l = 0,
            h = t < 0 || 0 === t && 1 / t < 0 ? 1 : 0;
        for ((t = I(t)) != t || t === k ? (o = t != t ? 1 : 0, e = c) : (e = j(A(t) / L), t * (i = O(2, -e)) < 1 && (e--, i *= 2), (t += e + s >= 1 ? f / i : f * O(2, 1 - s)) * i >= 2 && (e++, i /= 2), e + s >= c ? (o = 0, e = c) : e + s >= 1 ? (o = (t * i - 1) * O(2, n), e += s) : (o = t * O(2, s - 1) * O(2, n), e = 0)); n >= 8; a[l++] = 255 & o, o /= 256, n -= 8);
        for (e = e << n | o, u += n; u > 0; a[l++] = 255 & e, e /= 256, u -= 8);
        return a[--l] |= 128 * h, a
    }

    function R(t, n, r) {
        var e, o = 8 * r - n - 1,
            i = (1 << o) - 1,
            a = i >> 1,
            u = o - 7,
            c = r - 1,
            s = t[c--],
            f = 127 & s;
        for (s >>= 7; u > 0; f = 256 * f + t[c], c--, u -= 8);
        for (e = f & (1 << -u) - 1, f >>= -u, u += n; u > 0; e = 256 * e + t[c], c--, u -= 8);
        if (0 === f) f = 1 - a;
        else {
            if (f === i) return e ? NaN : s ? -k : k;
            e += O(2, n), f -= a
        }
        return (s ? -1 : 1) * e * O(2, f - n)
    }

    function M(t) {
        return t[3] << 24 | t[2] << 16 | t[1] << 8 | t[0]
    }

    function B(t) {
        return [255 & t]
    }

    function N(t) {
        return [255 & t, t >> 8 & 255]
    }

    function W(t) {
        return [255 & t, t >> 8 & 255, t >> 16 & 255, t >> 24 & 255]
    }

    function U(t) {
        return C(t, 52, 8)
    }

    function D(t) {
        return C(t, 23, 4)
    }

    function G(t, n, r) {
        d(t[m], n, {
            get: function () {
                return this[r]
            }
        })
    }

    function z(t, n, r, e) {
        var o = p(+r);
        if (o + n > t[P]) throw E(w);
        var i = t[F]._b,
            a = o + t[T],
            u = i.slice(a, a + n);
        return e ? u : u.reverse()
    }

    function V(t, n, r, e, o, i) {
        var a = p(+r);
        if (a + n > t[P]) throw E(w);
        for (var u = t[F]._b, c = a + t[T], s = e(+o), f = 0; f < n; f++) u[c + f] = s[i ? f : n - f - 1]
    }
    if (a.ABV) {
        if (!s(function () {
            x(1)
        }) || !s(function () {
            new x(-1)
        }) || s(function () {
            return new x, new x(1.5), new x(NaN), "ArrayBuffer" != x.name
        })) {
            for (var $, H = (x = function (t) {
                return f(this, x), new S(p(t))
            })[m] = S[m], Y = v(S), q = 0; Y.length > q;)($ = Y[q++]) in x || u(x, $, S[$]);
            i || (H.constructor = x)
        }
        var K = new b(new x(2)),
            X = b[m].setInt8;
        K.setInt8(0, 2147483648), K.setInt8(1, 2147483649), !K.getInt8(0) && K.getInt8(1) || c(b[m], {
            setInt8: function (t, n) {
                X.call(this, t, n << 24 >> 24)
            },
            setUint8: function (t, n) {
                X.call(this, t, n << 24 >> 24)
            }
        }, !0)
    } else x = function (t) {
        f(this, x, "ArrayBuffer");
        var n = p(t);
        this._b = g.call(new Array(n), 0), this[P] = n
    }, b = function (t, n, r) {
        f(this, b, "DataView"), f(t, x, "DataView");
        var e = t[P],
            o = l(n);
        if (o < 0 || o > e) throw E("Wrong offset!");
        if (o + (r = void 0 === r ? e - o : h(r)) > e) throw E("Wrong length!");
        this[F] = t, this[T] = o, this[P] = r
    }, o && (G(x, "byteLength", "_l"), G(b, "buffer", "_b"), G(b, "byteLength", "_l"), G(b, "byteOffset", "_o")), c(b[m], {
        getInt8: function (t) {
            return z(this, 1, t)[0] << 24 >> 24
        },
        getUint8: function (t) {
            return z(this, 1, t)[0]
        },
        getInt16: function (t) {
            var n = z(this, 2, t, arguments[1]);
            return (n[1] << 8 | n[0]) << 16 >> 16
        },
        getUint16: function (t) {
            var n = z(this, 2, t, arguments[1]);
            return n[1] << 8 | n[0]
        },
        getInt32: function (t) {
            return M(z(this, 4, t, arguments[1]))
        },
        getUint32: function (t) {
            return M(z(this, 4, t, arguments[1])) >>> 0
        },
        getFloat32: function (t) {
            return R(z(this, 4, t, arguments[1]), 23, 4)
        },
        getFloat64: function (t) {
            return R(z(this, 8, t, arguments[1]), 52, 8)
        },
        setInt8: function (t, n) {
            V(this, 1, t, B, n)
        },
        setUint8: function (t, n) {
            V(this, 1, t, B, n)
        },
        setInt16: function (t, n) {
            V(this, 2, t, N, n, arguments[2])
        },
        setUint16: function (t, n) {
            V(this, 2, t, N, n, arguments[2])
        },
        setInt32: function (t, n) {
            V(this, 4, t, W, n, arguments[2])
        },
        setUint32: function (t, n) {
            V(this, 4, t, W, n, arguments[2])
        },
        setFloat32: function (t, n) {
            V(this, 4, t, D, n, arguments[2])
        },
        setFloat64: function (t, n) {
            V(this, 8, t, U, n, arguments[2])
        }
    });
    y(x, "ArrayBuffer"), y(b, "DataView"), u(b[m], a.VIEW, !0), n.ArrayBuffer = x, n.DataView = b
}, function (t, n, r) {
    var e = r(12),
        o = r(2),
        i = r(45);
    t.exports = r(5) ? Object.defineProperties : function (t, n) {
        o(t);
        for (var r, a = i(n), u = a.length, c = 0; u > c;) e.f(t, r = a[c++], n[r]);
        return t
    }
}, function (t, n, r) {
    var e = r(14),
        o = r(37),
        i = r(10),
        a = r(3),
        u = r(90);
    t.exports = function (t, n) {
        var r = 1 == t,
            c = 2 == t,
            s = 3 == t,
            f = 4 == t,
            l = 6 == t,
            h = 5 == t || l,
            p = n || u;
        return function (n, u, v) {
            for (var d, g, y = i(n), m = o(y), w = e(u, v, 3), x = a(m.length), b = 0, _ = r ? p(n, x) : c ? p(n, 0) : void 0; x > b; b++)
                if ((h || b in m) && (g = w(d = m[b], b, y), t))
                    if (r) _[b] = g;
                    else if (g) switch (t) {
                        case 3:
                            return !0;
                        case 5:
                            return d;
                        case 6:
                            return b;
                        case 2:
                            _.push(d)
                    } else if (f) return !1;
            return l ? -1 : s || f ? f : _
        }
    }
}, function (t, n, r) {
    var e = r(91);
    t.exports = function (t, n) {
        return new (e(t))(n)
    }
}, function (t, n, r) {
    var e = r(6),
        o = r(92),
        i = r(0)("species");
    t.exports = function (t) {
        var n;
        return o(t) && ("function" != typeof (n = t.constructor) || n !== Array && !o(n.prototype) || (n = void 0), e(n) && null === (n = n[i]) && (n = void 0)), void 0 === n ? Array : n
    }
}, function (t, n, r) {
    var e = r(11);
    t.exports = Array.isArray || function (t) {
        return "Array" == e(t)
    }
}, function (t, n, r) {
    "use strict";
    var e = r(36),
        o = r(94),
        i = r(21),
        a = r(25);
    t.exports = r(95)(Array, "Array", function (t, n) {
        this._t = a(t), this._i = 0, this._k = n
    }, function () {
        var t = this._t,
            n = this._k,
            r = this._i++;
        return !t || r >= t.length ? (this._t = void 0, o(1)) : o(0, "keys" == n ? r : "values" == n ? t[r] : [r, t[r]])
    }, "values"), i.Arguments = i.Array, e("keys"), e("values"), e("entries")
}, function (t, n) {
    t.exports = function (t, n) {
        return {
            value: n,
            done: !!t
        }
    }
}, function (t, n, r) {
    "use strict";
    var e = r(16),
        o = r(7),
        i = r(20),
        a = r(4),
        u = r(21),
        c = r(96),
        s = r(26),
        f = r(60),
        l = r(0)("iterator"),
        h = !([].keys && "next" in [].keys()),
        p = function () {
            return this
        };
    t.exports = function (t, n, r, v, d, g, y) {
        c(r, n, v);
        var m, w, x, b = function (t) {
            if (!h && t in S) return S[t];
            switch (t) {
                case "keys":
                case "values":
                    return function () {
                        return new r(this, t)
                    }
            }
            return function () {
                return new r(this, t)
            }
        },
            _ = n + " Iterator",
            E = "values" == d,
            k = !1,
            S = t.prototype,
            I = S[l] || S["@@iterator"] || d && S[d],
            O = I || b(d),
            j = d ? E ? b("entries") : O : void 0,
            A = "Array" == n && S.entries || I;
        if (A && (x = f(A.call(new t))) !== Object.prototype && x.next && (s(x, _, !0), e || "function" == typeof x[l] || a(x, l, p)), E && I && "values" !== I.name && (k = !0, O = function () {
            return I.call(this)
        }), e && !y || !h && !k && S[l] || a(S, l, O), u[n] = O, u[_] = p, d)
            if (m = {
                values: E ? O : b("values"),
                keys: g ? O : b("keys"),
                entries: j
            }, y)
                for (w in m) w in S || i(S, w, m[w]);
            else o(o.P + o.F * (h || k), n, m);
        return m
    }
}, function (t, n, r) {
    "use strict";
    var e = r(59),
        o = r(23),
        i = r(26),
        a = {};
    r(4)(a, r(0)("iterator"), function () {
        return this
    }), t.exports = function (t, n, r) {
        t.prototype = e(a, {
            next: o(1, r)
        }), i(t, n + " Iterator")
    }
}, function (t, n, r) {
    "use strict";
    var e = r(10),
        o = r(24),
        i = r(3);
    t.exports = [].copyWithin || function (t, n) {
        var r = e(this),
            a = i(r.length),
            u = o(t, a),
            c = o(n, a),
            s = arguments.length > 2 ? arguments[2] : void 0,
            f = Math.min((void 0 === s ? a : o(s, a)) - c, a - u),
            l = 1;
        for (c < u && u < c + f && (l = -1, c += f - 1, u += f - 1); f-- > 0;) c in r ? r[u] = r[c] : delete r[u], u += l, c += l;
        return r
    }
}, function (t, n, r) {
    var e = r(47),
        o = r(23),
        i = r(25),
        a = r(34),
        u = r(13),
        c = r(44),
        s = Object.getOwnPropertyDescriptor;
    n.f = r(5) ? s : function (t, n) {
        if (t = i(t), n = a(n, !0), c) try {
            return s(t, n)
        } catch (t) { }
        if (u(t, n)) return o(!e.f.call(t, n), t[n])
    }
}, function (t, n, r) {
    var e = function (t) {
        "use strict";
        var n, r = Object.prototype,
            e = r.hasOwnProperty,
            o = "function" == typeof Symbol ? Symbol : {},
            i = o.iterator || "@@iterator",
            a = o.asyncIterator || "@@asyncIterator",
            u = o.toStringTag || "@@toStringTag";

        function c(t, n, r, e) {
            var o = n && n.prototype instanceof d ? n : d,
                i = Object.create(o.prototype),
                a = new O(e || []);
            return i._invoke = function (t, n, r) {
                var e = f;
                return function (o, i) {
                    if (e === h) throw new Error("Generator is already running");
                    if (e === p) {
                        if ("throw" === o) throw i;
                        return A()
                    }
                    for (r.method = o, r.arg = i; ;) {
                        var a = r.delegate;
                        if (a) {
                            var u = k(a, r);
                            if (u) {
                                if (u === v) continue;
                                return u
                            }
                        }
                        if ("next" === r.method) r.sent = r._sent = r.arg;
                        else if ("throw" === r.method) {
                            if (e === f) throw e = p, r.arg;
                            r.dispatchException(r.arg)
                        } else "return" === r.method && r.abrupt("return", r.arg);
                        e = h;
                        var c = s(t, n, r);
                        if ("normal" === c.type) {
                            if (e = r.done ? p : l, c.arg === v) continue;
                            return {
                                value: c.arg,
                                done: r.done
                            }
                        }
                        "throw" === c.type && (e = p, r.method = "throw", r.arg = c.arg)
                    }
                }
            }(t, r, a), i
        }

        function s(t, n, r) {
            try {
                return {
                    type: "normal",
                    arg: t.call(n, r)
                }
            } catch (t) {
                return {
                    type: "throw",
                    arg: t
                }
            }
        }
        t.wrap = c;
        var f = "suspendedStart",
            l = "suspendedYield",
            h = "executing",
            p = "completed",
            v = {};

        function d() { }

        function g() { }

        function y() { }
        var m = {};
        m[i] = function () {
            return this
        };
        var w = Object.getPrototypeOf,
            x = w && w(w(j([])));
        x && x !== r && e.call(x, i) && (m = x);
        var b = y.prototype = d.prototype = Object.create(m);

        function _(t) {
            ["next", "throw", "return"].forEach(function (n) {
                t[n] = function (t) {
                    return this._invoke(n, t)
                }
            })
        }

        function E(t) {
            var n;
            this._invoke = function (r, o) {
                function i() {
                    return new Promise(function (n, i) {
                        ! function n(r, o, i, a) {
                            var u = s(t[r], t, o);
                            if ("throw" !== u.type) {
                                var c = u.arg,
                                    f = c.value;
                                return f && "object" == typeof f && e.call(f, "__await") ? Promise.resolve(f.__await).then(function (t) {
                                    n("next", t, i, a)
                                }, function (t) {
                                    n("throw", t, i, a)
                                }) : Promise.resolve(f).then(function (t) {
                                    c.value = t, i(c)
                                }, function (t) {
                                    return n("throw", t, i, a)
                                })
                            }
                            a(u.arg)
                        }(r, o, n, i)
                    })
                }
                return n = n ? n.then(i, i) : i()
            }
        }

        function k(t, r) {
            var e = t.iterator[r.method];
            if (e === n) {
                if (r.delegate = null, "throw" === r.method) {
                    if (t.iterator.return && (r.method = "return", r.arg = n, k(t, r), "throw" === r.method)) return v;
                    r.method = "throw", r.arg = new TypeError("The iterator does not provide a 'throw' method")
                }
                return v
            }
            var o = s(e, t.iterator, r.arg);
            if ("throw" === o.type) return r.method = "throw", r.arg = o.arg, r.delegate = null, v;
            var i = o.arg;
            return i ? i.done ? (r[t.resultName] = i.value, r.next = t.nextLoc, "return" !== r.method && (r.method = "next", r.arg = n), r.delegate = null, v) : i : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, v)
        }

        function S(t) {
            var n = {
                tryLoc: t[0]
            };
            1 in t && (n.catchLoc = t[1]), 2 in t && (n.finallyLoc = t[2], n.afterLoc = t[3]), this.tryEntries.push(n)
        }

        function I(t) {
            var n = t.completion || {};
            n.type = "normal", delete n.arg, t.completion = n
        }

        function O(t) {
            this.tryEntries = [{
                tryLoc: "root"
            }], t.forEach(S, this), this.reset(!0)
        }

        function j(t) {
            if (t) {
                var r = t[i];
                if (r) return r.call(t);
                if ("function" == typeof t.next) return t;
                if (!isNaN(t.length)) {
                    var o = -1,
                        a = function r() {
                            for (; ++o < t.length;)
                                if (e.call(t, o)) return r.value = t[o], r.done = !1, r;
                            return r.value = n, r.done = !0, r
                        };
                    return a.next = a
                }
            }
            return {
                next: A
            }
        }

        function A() {
            return {
                value: n,
                done: !0
            }
        }
        return g.prototype = b.constructor = y, y.constructor = g, y[u] = g.displayName = "GeneratorFunction", t.isGeneratorFunction = function (t) {
            var n = "function" == typeof t && t.constructor;
            return !!n && (n === g || "GeneratorFunction" === (n.displayName || n.name))
        }, t.mark = function (t) {
            return Object.setPrototypeOf ? Object.setPrototypeOf(t, y) : (t.__proto__ = y, u in t || (t[u] = "GeneratorFunction")), t.prototype = Object.create(b), t
        }, t.awrap = function (t) {
            return {
                __await: t
            }
        }, _(E.prototype), E.prototype[a] = function () {
            return this
        }, t.AsyncIterator = E, t.async = function (n, r, e, o) {
            var i = new E(c(n, r, e, o));
            return t.isGeneratorFunction(r) ? i : i.next().then(function (t) {
                return t.done ? t.value : i.next()
            })
        }, _(b), b[u] = "Generator", b[i] = function () {
            return this
        }, b.toString = function () {
            return "[object Generator]"
        }, t.keys = function (t) {
            var n = [];
            for (var r in t) n.push(r);
            return n.reverse(),
                function r() {
                    for (; n.length;) {
                        var e = n.pop();
                        if (e in t) return r.value = e, r.done = !1, r
                    }
                    return r.done = !0, r
                }
        }, t.values = j, O.prototype = {
            constructor: O,
            reset: function (t) {
                if (this.prev = 0, this.next = 0, this.sent = this._sent = n, this.done = !1, this.delegate = null, this.method = "next", this.arg = n, this.tryEntries.forEach(I), !t)
                    for (var r in this) "t" === r.charAt(0) && e.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = n)
            },
            stop: function () {
                this.done = !0;
                var t = this.tryEntries[0].completion;
                if ("throw" === t.type) throw t.arg;
                return this.rval
            },
            dispatchException: function (t) {
                if (this.done) throw t;
                var r = this;

                function o(e, o) {
                    return u.type = "throw", u.arg = t, r.next = e, o && (r.method = "next", r.arg = n), !!o
                }
                for (var i = this.tryEntries.length - 1; i >= 0; --i) {
                    var a = this.tryEntries[i],
                        u = a.completion;
                    if ("root" === a.tryLoc) return o("end");
                    if (a.tryLoc <= this.prev) {
                        var c = e.call(a, "catchLoc"),
                            s = e.call(a, "finallyLoc");
                        if (c && s) {
                            if (this.prev < a.catchLoc) return o(a.catchLoc, !0);
                            if (this.prev < a.finallyLoc) return o(a.finallyLoc)
                        } else if (c) {
                            if (this.prev < a.catchLoc) return o(a.catchLoc, !0)
                        } else {
                            if (!s) throw new Error("try statement without catch or finally");
                            if (this.prev < a.finallyLoc) return o(a.finallyLoc)
                        }
                    }
                }
            },
            abrupt: function (t, n) {
                for (var r = this.tryEntries.length - 1; r >= 0; --r) {
                    var o = this.tryEntries[r];
                    if (o.tryLoc <= this.prev && e.call(o, "finallyLoc") && this.prev < o.finallyLoc) {
                        var i = o;
                        break
                    }
                }
                i && ("break" === t || "continue" === t) && i.tryLoc <= n && n <= i.finallyLoc && (i = null);
                var a = i ? i.completion : {};
                return a.type = t, a.arg = n, i ? (this.method = "next", this.next = i.finallyLoc, v) : this.complete(a)
            },
            complete: function (t, n) {
                if ("throw" === t.type) throw t.arg;
                return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && n && (this.next = n), v
            },
            finish: function (t) {
                for (var n = this.tryEntries.length - 1; n >= 0; --n) {
                    var r = this.tryEntries[n];
                    if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), I(r), v
                }
            },
            catch: function (t) {
                for (var n = this.tryEntries.length - 1; n >= 0; --n) {
                    var r = this.tryEntries[n];
                    if (r.tryLoc === t) {
                        var e = r.completion;
                        if ("throw" === e.type) {
                            var o = e.arg;
                            I(r)
                        }
                        return o
                    }
                }
                throw new Error("illegal catch attempt")
            },
            delegateYield: function (t, r, e) {
                return this.delegate = {
                    iterator: j(t),
                    resultName: r,
                    nextLoc: e
                }, "next" === this.method && (this.arg = n), v
            }
        }, t
    }(t.exports);
    try {
        regeneratorRuntime = e
    } catch (t) {
        Function("r", "regeneratorRuntime = r")(e)
    }
}, function (t, n, r) {
    r(55)("Uint8", 1, function (t) {
        return function (n, r, e) {
            return t(this, n, r, e)
        }
    }, !0)
}, function (t, n, r) { }, function (t, n, r) {
    "use strict";
    r.r(n);
    r(62), r(67), r(68), r(69), r(70), r(73), r(74), r(77), r(85), r(86), r(99);
    var e = r(61);
    r(100);

    function o(t, n) {
        for (var r = 0; r < n.length; r++) {
            var e = n[r];
            e.enumerable = e.enumerable || !1, e.configurable = !0, "value" in e && (e.writable = !0), Object.defineProperty(t, e.key, e)
        }
    }
    var i = function () {
        function t(n) {
            var r;
            ! function (t, n) {
                if (!(t instanceof n)) throw new TypeError("Cannot call a class as a function")
            }(this, t), this.reader = n, r = this.reader, this.width = r.width, this.height = r.height, this.frames = function (t, n) {
                var r;
                return function () {
                    r = [];
                    for (var n = 0, e = t.numFrames(); 0 <= e ? n < e : n > e; 0 <= e ? n++ : n--) r.push(n);
                    return r
                }.apply(this).map(function (n) {
                    var r;
                    return (r = t.frameInfo(n)).pixels = new Uint8ClampedArray(t.width * t.height * 4), t.decodeAndBlitFrameRGBA(n, r.pixels), r
                })
            }(this.reader), this.loopCount = this.reader.loopCount(), this.loops = 0, this.frameIndex = 0, this.running = !1
        }
        var n, r, e;
        return n = t, (r = [{
            key: "start",
            value: function () {
                return this.lastTime = (new Date).valueOf(), this.delayCompensation = 0, this.running = !0, setTimeout(this.nextFrame.bind(this), 0), this
            }
        }, {
            key: "stop",
            value: function () {
                return this.running = !1, this
            }
        }, {
            key: "reset",
            value: function () {
                return this.frameIndex = 0, this.loops = 0, this
            }
        }, {
            key: "nextFrame",
            value: function () {
                requestAnimationFrame(this.nextFrameRender.bind(this))
            }
        }, {
            key: "firstFrameRender",
            value: function () {
                var t, n;
                return t = this.frames[this.frameIndex], null != (n = this.onFrame) && n.apply(this, [t, this.frameIndex]), this.enqueueNextFrame()
            }
        }, {
            key: "nextFrameRender",
            value: function () {
                var t, n;
                if (this.running) return t = this.frames[this.frameIndex], null != (n = this.onFrame) && n.apply(this, [t, this.frameIndex]), this.enqueueNextFrame()
            }
        }, {
            key: "advanceFrame",
            value: function () {
                this.frameIndex += 1, this.frameIndex >= this.frames.length && (0 !== this.loopCount && this.loopCount === this.loops ? this.stop() : (this.frameIndex = 0, this.loops += 1))
            }
        }, {
            key: "enqueueNextFrame",
            value: function () {
                var t, n, r, e;
                for (this.advanceFrame(); this.running;) {
                    if (r = this.frames[this.frameIndex], n = (new Date).valueOf() - this.lastTime, this.lastTime += n, this.delayCompensation += n, t = (e = 10 * r.delay) - this.delayCompensation, this.delayCompensation -= e, !(t < 0)) {
                        setTimeout(this.nextFrame.bind(this), t);
                        break
                    }
                    this.advanceFrame()
                }
            }
        }, {
            key: "animateInCanvas",
            value: function (t, n) {
                var r, e;
                return null == n && (n = !0), n && (t.width = this.width, t.height = this.height, t.parentNode.style.width = this.width + "px", t.parentNode.style.height = this.height + "px"), r = t.getContext("2d"), null == this.onDrawFrame && (this.onDrawFrame = function (t, n, r) {
                    return t.drawImage(n.buffer, n.x, n.y)
                }), null == this.onFrame && (this.onFrame = (e = this, function (n, o) {
                    var i, a;
                    switch (null == n.buffer && (n.buffer = function (t, n, r) {
                        var e, o, i;
                        return o = (e = document.createElement("canvas")).getContext("2d"), e.width = t.width, e.height = t.height, (i = o.createImageData(n, r)).data.set(t.pixels), o.putImageData(i, -t.x, -t.y), e
                    }(n, e.width, e.height)), "function" == typeof e.disposeFrame && e.disposeFrame(), n.disposal) {
                        case 2:
                            e.disposeFrame = function () {
                                return r.clearRect(0, 0, t.width, t.height)
                            };
                            break;
                        case 3:
                            a = r.getImageData(0, 0, t.width, t.height), e.disposeFrame = function () {
                                return r.putImageData(a, 0, 0)
                            };
                            break;
                        default:
                            e.disposeFrame = null
                    }
                    return null != (i = e.onDrawFrame) ? i.apply(e, [r, n, o]) : void 0
                })), this.firstFrameRender(), this
            }
        }]) && o(n.prototype, r), e && o(n, e), t
    }();

    function a(t, n, r, e, o, i, a) {
        try {
            var u = t[i](a),
                c = u.value
        } catch (t) {
            return void r(t)
        }
        u.done ? n(c) : Promise.resolve(c).then(e, o)
    }

    function u(t, n) {
        for (var r = 0; r < n.length; r++) {
            var e = n[r];
            e.enumerable = e.enumerable || !1, e.configurable = !0, "value" in e && (e.writable = !0), Object.defineProperty(t, e.key, e)
        }
    }
    var c = function () {
        function t() {
            ! function (t, n) {
                if (!(t instanceof n)) throw new TypeError("Cannot call a class as a function")
            }(this, t), this.loading = !1, this.animator = null, this.loaded = !1
        }
        var n, r, o, c, s;
        return n = t, (r = [{
            key: "load",
            value: (c = regeneratorRuntime.mark(function t(n, r) {
                var o;
                return regeneratorRuntime.wrap(function (t) {
                    for (; ;) switch (t.prev = t.next) {
                        case 0:
                            return this.loading = !0, this.imageLoading(), t.prev = 2, t.next = 5, this._xhr(n);
                        case 5:
                            return o = t.sent, this.animator = new i(new e.GifReader(new Uint8Array(o))), this.animator.animateInCanvas(r), this.imageLoaded(), this.loaded = !0, t.abrupt("return", this.animator);
                        case 13:
                            t.prev = 13, t.t0 = t.catch(2), this.imageError(t.t0);
                        case 16:
                            this.loading = !1;
                        case 17:
                        case "end":
                            return t.stop()
                    }
                }, t, this, [
                    [2, 13]
                ])
            }), s = function () {
                var t = this,
                    n = arguments;
                return new Promise(function (r, e) {
                    var o = c.apply(t, n);

                    function i(t) {
                        a(o, r, e, i, u, "next", t)
                    }

                    function u(t) {
                        a(o, r, e, i, u, "throw", t)
                    }
                    i(void 0)
                })
            }, function (t, n) {
                return s.apply(this, arguments)
            })
        }, {
            key: "timeout",
            value: function (t) {
                return new Promise(function (n) {
                    return setTimeout(n, t)
                })
            }
        }, {
            key: "imageLoading",
            value: function () { }
        }, {
            key: "imageLoaded",
            value: function () { }
        }, {
            key: "imageError",
            value: function (t) { }
        }, {
            key: "_xhr",
            value: function (t) {
                return new Promise(function (n, r) {
                    var e = new XMLHttpRequest;
                    e.open("GET", t), e.responseType = "arraybuffer", e.onload = function () {
                        e.status >= 200 && e.status < 300 ? n(e.response) : r({
                            status: e.status,
                            statusText: e.statusText
                        })
                    }, e.onerror = function () {
                        r({
                            status: e.status,
                            statusText: e.statusText
                        })
                    }, e.send()
                })
            }
        }]) && u(n.prototype, r), o && u(n, o), t
    }(),
        s = Element.prototype.matches || Element.prototype.webkitMatchesSelector || Element.prototype.msMatchesSelector,
        f = {
            mode: "hover",
            overlayColor: "rgba(255, 255, 255, 0.7)",
            iconColor: "rgba(45, 140, 240, 0.8)",
            playIcon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm115.7 272l-176 101c-15.8 8.8-35.7-2.5-35.7-21V152c0-18.4 19.8-29.8 35.7-21l176 107c16.4 9.2 16.4 32.9 0 42z"/></svg>',
            errorIcon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M569.517 440.013C587.975 472.007 564.806 512 527.94 512H48.054c-36.937 0-59.999-40.055-41.577-71.987L246.423 23.985c18.467-32.009 64.72-31.951 83.154 0l239.94 416.028zM288 354c-25.405 0-46 20.595-46 46s20.595 46 46 46 46-20.595 46-46-20.595-46-46-46zm-43.673-165.346l7.418 136c.347 6.364 5.609 11.346 11.982 11.346h48.546c6.373 0 11.635-4.982 11.982-11.346l7.418-136c.375-6.874-5.098-12.654-11.982-12.654h-63.383c-6.884 0-12.356 5.78-11.981 12.654z"/></svg>',
            errorText: "Error loading image",
            errorTextColor: "rgb(150, 150, 150)",
            spinnerTrackColor: "rgba(45, 140, 240, .3)",
            spinnerBarColor: "rgb(45, 140, 240)",
            loadingWidth: "300px",
            loadingHeight: "200px"
        };
    var l = /-gifcontrol-.*?;/gm;
    r(101);
    window.$docsify || (window.$docsify = {}), window.$docsify.plugins || (window.$docsify.plugins = {}), window.$docsify.plugins = [].concat(function (t, n) {
        t.doneEach(function (t) {
            var r = Array.apply(null, document.querySelectorAll(".markdown-section img:not(.emoji):not([data-gifcontrol-disabled])")),
                e = r.filter(function (t) {
                    return t.src.includes(".gif") && !t.title.includes("-gifcontrol-disabled")
                });
            (e = e.filter(function (t) {
                return !1 === s.call(t, "a img")
            })).forEach(function (t) {
                var r = t.src,
                    e = Object.assign({}, f, n.config.gifcontrol, function (t) {
                        var n = {},
                            r = t.match(l);
                        return r && r.forEach(function (t) {
                            var r = t.split(/=(.+)/, 2);
                            if (2 == r.length) {
                                var e = r[0].replace("-gifcontrol-", ""),
                                    o = r[1].slice(0, -1);
                                n[e] = o
                            }
                        }), n
                    }(t.title)),
                    o = document.createElement("div");
                o.classList.add("gifcontrol-canvas"), o.classList.add("gifcontrol-loading"), o.style.fill = e.iconColor, o.style.stroke = e.iconColor, o.style.width = e.loadingWidth, o.style.height = e.loadingHeight, o.style.maxWidth = "100%", "click" === e.mode && (o.style.cursor = "pointer");
                var i = document.createElement("div");
                i.classList.add("gifcontrol-loading-element"), i.style.backgroundColor = e.overlayColor;
                var a = document.createElement("div");
                a.classList.add("gifcontrol-loading-spinner"), a.style.borderColor = e.spinnerTrackColor, a.style.borderTopColor = e.spinnerBarColor, i.appendChild(a);
                var u = document.createElement("div");
                u.classList.add("gifcontrol-controls-element"), u.style.backgroundColor = e.overlayColor, u.innerHTML = e.playIcon;
                var s = document.createElement("div");
                s.style.backgroundColor = e.overlayColor, s.classList.add("gifcontrol-error-element"), s.style.color = e.errorTextColor, s.innerHTML = "".concat(e.errorIcon, ' <div class="gifcontrol-errortext">').concat(e.errorText, "</div>");
                var h = document.createElement("canvas");
                h.style.maxWidth = "100%", o.appendChild(h), o.appendChild(u), o.appendChild(i), o.appendChild(s), t.parentNode.replaceChild(o, t);
                var p = new c;
                p.imageLoaded = function () {
                    o.classList.remove("gifcontrol-loading"), o.classList.add("gifcontrol-success"), o.style.width = p.animator.width, o.style.height = "auto"
                }, p.imageError = function (t) {
                    o.classList.remove("gifcontrol-loading"), o.classList.add("gifcontrol-error")
                }, p.load(r, h), o.onmouseenter = function () {
                    p.loaded && "click" !== e.mode && (o.classList.add("gifcontrol-playing"), p.animator.start())
                }, o.onmouseleave = function () {
                    p.loaded && "click" !== e.mode && (o.classList.remove("gifcontrol-playing"), p.animator.stop())
                }, o.onclick = function () {
                    p.loaded && "click" === e.mode && (p.animator.running ? (o.classList.remove("gifcontrol-playing"), p.animator.stop()) : (o.classList.add("gifcontrol-playing"), p.animator.start()))
                }
            }), r.filter(function (t) {
                return t.title.includes("-gifcontrol-disabled;")
            }).forEach(function (t) {
                t.title = t.title.replace(l, "")
            })
        })
    }, window.$docsify.plugins)
}]);