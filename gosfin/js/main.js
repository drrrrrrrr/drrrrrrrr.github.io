! function(e, t) {
    "object" == typeof module && "object" == typeof module.exports ? module.exports = e.document ? t(e, !0) : function(e) {
        if (!e.document) throw new Error("jQuery requires a window with a document");
        return t(e)
    } : t(e)
}("undefined" != typeof window ? window : this, function(e, t) {
    function n(e) {
        var t = "length" in e && e.length,
            n = J.type(e);
        return "function" === n || J.isWindow(e) ? !1 : 1 === e.nodeType && t ? !0 : "array" === n || 0 === t || "number" == typeof t && t > 0 && t - 1 in e
    }

    function i(e, t, n) {
        if (J.isFunction(t)) return J.grep(e, function(e, i) {
            return !!t.call(e, i, e) !== n
        });
        if (t.nodeType) return J.grep(e, function(e) {
            return e === t !== n
        });
        if ("string" == typeof t) {
            if (se.test(t)) return J.filter(t, e, n);
            t = J.filter(t, e)
        }
        return J.grep(e, function(e) {
            return V.call(t, e) >= 0 !== n
        })
    }

    function r(e, t) {
        for (;
            (e = e[t]) && 1 !== e.nodeType;);
        return e
    }

    function o(e) {
        var t = pe[e] = {};
        return J.each(e.match(fe) || [], function(e, n) {
            t[n] = !0
        }), t
    }

    function a() {
        Z.removeEventListener("DOMContentLoaded", a, !1), e.removeEventListener("load", a, !1), J.ready()
    }

    function s() {
        Object.defineProperty(this.cache = {}, 0, {
            get: function() {
                return {}
            }
        }), this.expando = J.expando + s.uid++
    }

    function l(e, t, n) {
        var i;
        if (void 0 === n && 1 === e.nodeType)
            if (i = "data-" + t.replace(be, "-$1").toLowerCase(), n = e.getAttribute(i), "string" == typeof n) {
                try {
                    n = "true" === n ? !0 : "false" === n ? !1 : "null" === n ? null : +n + "" === n ? +n : xe.test(n) ? J.parseJSON(n) : n
                } catch (r) {}
                ye.set(e, t, n)
            } else n = void 0;
        return n
    }

    function u() {
        return !0
    }

    function c() {
        return !1
    }

    function d() {
        try {
            return Z.activeElement
        } catch (e) {}
    }

    function h(e, t) {
        return J.nodeName(e, "table") && J.nodeName(11 !== t.nodeType ? t : t.firstChild, "tr") ? e.getElementsByTagName("tbody")[0] || e.appendChild(e.ownerDocument.createElement("tbody")) : e
    }

    function f(e) {
        return e.type = (null !== e.getAttribute("type")) + "/" + e.type, e
    }

    function p(e) {
        var t = qe.exec(e.type);
        return t ? e.type = t[1] : e.removeAttribute("type"), e
    }

    function g(e, t) {
        for (var n = 0, i = e.length; i > n; n++) ve.set(e[n], "globalEval", !t || ve.get(t[n], "globalEval"))
    }

    function m(e, t) {
        var n, i, r, o, a, s, l, u;
        if (1 === t.nodeType) {
            if (ve.hasData(e) && (o = ve.access(e), a = ve.set(t, o), u = o.events)) {
                delete a.handle, a.events = {};
                for (r in u)
                    for (n = 0, i = u[r].length; i > n; n++) J.event.add(t, r, u[r][n])
            }
            ye.hasData(e) && (s = ye.access(e), l = J.extend({}, s), ye.set(t, l))
        }
    }

    function v(e, t) {
        var n = e.getElementsByTagName ? e.getElementsByTagName(t || "*") : e.querySelectorAll ? e.querySelectorAll(t || "*") : [];
        return void 0 === t || t && J.nodeName(e, t) ? J.merge([e], n) : n
    }

    function y(e, t) {
        var n = t.nodeName.toLowerCase();
        "input" === n && Te.test(e.type) ? t.checked = e.checked : ("input" === n || "textarea" === n) && (t.defaultValue = e.defaultValue)
    }

    function x(t, n) {
        var i, r = J(n.createElement(t)).appendTo(n.body),
            o = e.getDefaultComputedStyle && (i = e.getDefaultComputedStyle(r[0])) ? i.display : J.css(r[0], "display");
        return r.detach(), o
    }

    function b(e) {
        var t = Z,
            n = Re[e];
        return n || (n = x(e, t), "none" !== n && n || (ze = (ze || J("<iframe frameborder='0' width='0' height='0'/>")).appendTo(t.documentElement), t = ze[0].contentDocument, t.write(), t.close(), n = x(e, t), ze.detach()), Re[e] = n), n
    }

    function w(e, t, n) {
        var i, r, o, a, s = e.style;
        return n = n || We(e), n && (a = n.getPropertyValue(t) || n[t]), n && ("" !== a || J.contains(e.ownerDocument, e) || (a = J.style(e, t)), Ie.test(a) && He.test(t) && (i = s.width, r = s.minWidth, o = s.maxWidth, s.minWidth = s.maxWidth = s.width = a, a = n.width, s.width = i, s.minWidth = r, s.maxWidth = o)), void 0 !== a ? a + "" : a
    }

    function _(e, t) {
        return {
            get: function() {
                return e() ? void delete this.get : (this.get = t).apply(this, arguments)
            }
        }
    }

    function C(e, t) {
        if (t in e) return t;
        for (var n = t[0].toUpperCase() + t.slice(1), i = t, r = Ye.length; r--;)
            if (t = Ye[r] + n, t in e) return t;
        return i
    }

    function T(e, t, n) {
        var i = Xe.exec(t);
        return i ? Math.max(0, i[1] - (n || 0)) + (i[2] || "px") : t
    }

    function F(e, t, n, i, r) {
        for (var o = n === (i ? "border" : "content") ? 4 : "width" === t ? 1 : 0, a = 0; 4 > o; o += 2) "margin" === n && (a += J.css(e, n + _e[o], !0, r)), i ? ("content" === n && (a -= J.css(e, "padding" + _e[o], !0, r)), "margin" !== n && (a -= J.css(e, "border" + _e[o] + "Width", !0, r))) : (a += J.css(e, "padding" + _e[o], !0, r), "padding" !== n && (a += J.css(e, "border" + _e[o] + "Width", !0, r)));
        return a
    }

    function E(e, t, n) {
        var i = !0,
            r = "width" === t ? e.offsetWidth : e.offsetHeight,
            o = We(e),
            a = "border-box" === J.css(e, "boxSizing", !1, o);
        if (0 >= r || null == r) {
            if (r = w(e, t, o), (0 > r || null == r) && (r = e.style[t]), Ie.test(r)) return r;
            i = a && (Q.boxSizingReliable() || r === e.style[t]), r = parseFloat(r) || 0
        }
        return r + F(e, t, n || (a ? "border" : "content"), i, o) + "px"
    }

    function k(e, t) {
        for (var n, i, r, o = [], a = 0, s = e.length; s > a; a++) i = e[a], i.style && (o[a] = ve.get(i, "olddisplay"), n = i.style.display, t ? (o[a] || "none" !== n || (i.style.display = ""), "" === i.style.display && Ce(i) && (o[a] = ve.access(i, "olddisplay", b(i.nodeName)))) : (r = Ce(i), "none" === n && r || ve.set(i, "olddisplay", r ? n : J.css(i, "display"))));
        for (a = 0; s > a; a++) i = e[a], i.style && (t && "none" !== i.style.display && "" !== i.style.display || (i.style.display = t ? o[a] || "" : "none"));
        return e
    }

    function D(e, t, n, i, r) {
        return new D.prototype.init(e, t, n, i, r)
    }

    function S() {
        return setTimeout(function() {
            Qe = void 0
        }), Qe = J.now()
    }

    function j(e, t) {
        var n, i = 0,
            r = {
                height: e
            };
        for (t = t ? 1 : 0; 4 > i; i += 2 - t) n = _e[i], r["margin" + n] = r["padding" + n] = e;
        return t && (r.opacity = r.width = e), r
    }

    function A(e, t, n) {
        for (var i, r = (nt[t] || []).concat(nt["*"]), o = 0, a = r.length; a > o; o++)
            if (i = r[o].call(n, t, e)) return i
    }

    function $(e, t, n) {
        var i, r, o, a, s, l, u, c, d = this,
            h = {},
            f = e.style,
            p = e.nodeType && Ce(e),
            g = ve.get(e, "fxshow");
        n.queue || (s = J._queueHooks(e, "fx"), null == s.unqueued && (s.unqueued = 0, l = s.empty.fire, s.empty.fire = function() {
            s.unqueued || l()
        }), s.unqueued++, d.always(function() {
            d.always(function() {
                s.unqueued--, J.queue(e, "fx").length || s.empty.fire()
            })
        })), 1 === e.nodeType && ("height" in t || "width" in t) && (n.overflow = [f.overflow, f.overflowX, f.overflowY], u = J.css(e, "display"), c = "none" === u ? ve.get(e, "olddisplay") || b(e.nodeName) : u, "inline" === c && "none" === J.css(e, "float") && (f.display = "inline-block")), n.overflow && (f.overflow = "hidden", d.always(function() {
            f.overflow = n.overflow[0], f.overflowX = n.overflow[1], f.overflowY = n.overflow[2]
        }));
        for (i in t)
            if (r = t[i], Ke.exec(r)) {
                if (delete t[i], o = o || "toggle" === r, r === (p ? "hide" : "show")) {
                    if ("show" !== r || !g || void 0 === g[i]) continue;
                    p = !0
                }
                h[i] = g && g[i] || J.style(e, i)
            } else u = void 0;
        if (J.isEmptyObject(h)) "inline" === ("none" === u ? b(e.nodeName) : u) && (f.display = u);
        else {
            g ? "hidden" in g && (p = g.hidden) : g = ve.access(e, "fxshow", {}), o && (g.hidden = !p), p ? J(e).show() : d.done(function() {
                J(e).hide()
            }), d.done(function() {
                var t;
                ve.remove(e, "fxshow");
                for (t in h) J.style(e, t, h[t])
            });
            for (i in h) a = A(p ? g[i] : 0, i, d), i in g || (g[i] = a.start, p && (a.end = a.start, a.start = "width" === i || "height" === i ? 1 : 0))
        }
    }

    function N(e, t) {
        var n, i, r, o, a;
        for (n in e)
            if (i = J.camelCase(n), r = t[i], o = e[n], J.isArray(o) && (r = o[1], o = e[n] = o[0]), n !== i && (e[i] = o, delete e[n]), a = J.cssHooks[i], a && "expand" in a) {
                o = a.expand(o), delete e[i];
                for (n in o) n in e || (e[n] = o[n], t[n] = r)
            } else t[i] = r
    }

    function P(e, t, n) {
        var i, r, o = 0,
            a = tt.length,
            s = J.Deferred().always(function() {
                delete l.elem
            }),
            l = function() {
                if (r) return !1;
                for (var t = Qe || S(), n = Math.max(0, u.startTime + u.duration - t), i = n / u.duration || 0, o = 1 - i, a = 0, l = u.tweens.length; l > a; a++) u.tweens[a].run(o);
                return s.notifyWith(e, [u, o, n]), 1 > o && l ? n : (s.resolveWith(e, [u]), !1)
            },
            u = s.promise({
                elem: e,
                props: J.extend({}, t),
                opts: J.extend(!0, {
                    specialEasing: {}
                }, n),
                originalProperties: t,
                originalOptions: n,
                startTime: Qe || S(),
                duration: n.duration,
                tweens: [],
                createTween: function(t, n) {
                    var i = J.Tween(e, u.opts, t, n, u.opts.specialEasing[t] || u.opts.easing);
                    return u.tweens.push(i), i
                },
                stop: function(t) {
                    var n = 0,
                        i = t ? u.tweens.length : 0;
                    if (r) return this;
                    for (r = !0; i > n; n++) u.tweens[n].run(1);
                    return t ? s.resolveWith(e, [u, t]) : s.rejectWith(e, [u, t]), this
                }
            }),
            c = u.props;
        for (N(c, u.opts.specialEasing); a > o; o++)
            if (i = tt[o].call(u, e, c, u.opts)) return i;
        return J.map(c, A, u), J.isFunction(u.opts.start) && u.opts.start.call(e, u), J.fx.timer(J.extend(l, {
            elem: e,
            anim: u,
            queue: u.opts.queue
        })), u.progress(u.opts.progress).done(u.opts.done, u.opts.complete).fail(u.opts.fail).always(u.opts.always)
    }

    function O(e) {
        return function(t, n) {
            "string" != typeof t && (n = t, t = "*");
            var i, r = 0,
                o = t.toLowerCase().match(fe) || [];
            if (J.isFunction(n))
                for (; i = o[r++];) "+" === i[0] ? (i = i.slice(1) || "*", (e[i] = e[i] || []).unshift(n)) : (e[i] = e[i] || []).push(n)
        }
    }

    function q(e, t, n, i) {
        function r(s) {
            var l;
            return o[s] = !0, J.each(e[s] || [], function(e, s) {
                var u = s(t, n, i);
                return "string" != typeof u || a || o[u] ? a ? !(l = u) : void 0 : (t.dataTypes.unshift(u), r(u), !1)
            }), l
        }
        var o = {},
            a = e === xt;
        return r(t.dataTypes[0]) || !o["*"] && r("*")
    }

    function L(e, t) {
        var n, i, r = J.ajaxSettings.flatOptions || {};
        for (n in t) void 0 !== t[n] && ((r[n] ? e : i || (i = {}))[n] = t[n]);
        return i && J.extend(!0, e, i), e
    }

    function M(e, t, n) {
        for (var i, r, o, a, s = e.contents, l = e.dataTypes;
            "*" === l[0];) l.shift(), void 0 === i && (i = e.mimeType || t.getResponseHeader("Content-Type"));
        if (i)
            for (r in s)
                if (s[r] && s[r].test(i)) {
                    l.unshift(r);
                    break
                }
        if (l[0] in n) o = l[0];
        else {
            for (r in n) {
                if (!l[0] || e.converters[r + " " + l[0]]) {
                    o = r;
                    break
                }
                a || (a = r)
            }
            o = o || a
        }
        return o ? (o !== l[0] && l.unshift(o), n[o]) : void 0
    }

    function z(e, t, n, i) {
        var r, o, a, s, l, u = {},
            c = e.dataTypes.slice();
        if (c[1])
            for (a in e.converters) u[a.toLowerCase()] = e.converters[a];
        for (o = c.shift(); o;)
            if (e.responseFields[o] && (n[e.responseFields[o]] = t), !l && i && e.dataFilter && (t = e.dataFilter(t, e.dataType)), l = o, o = c.shift())
                if ("*" === o) o = l;
                else if ("*" !== l && l !== o) {
            if (a = u[l + " " + o] || u["* " + o], !a)
                for (r in u)
                    if (s = r.split(" "), s[1] === o && (a = u[l + " " + s[0]] || u["* " + s[0]])) {
                        a === !0 ? a = u[r] : u[r] !== !0 && (o = s[0], c.unshift(s[1]));
                        break
                    }
            if (a !== !0)
                if (a && e["throws"]) t = a(t);
                else try {
                    t = a(t)
                } catch (d) {
                    return {
                        state: "parsererror",
                        error: a ? d : "No conversion from " + l + " to " + o
                    }
                }
        }
        return {
            state: "success",
            data: t
        }
    }

    function R(e, t, n, i) {
        var r;
        if (J.isArray(t)) J.each(t, function(t, r) {
            n || Tt.test(e) ? i(e, r) : R(e + "[" + ("object" == typeof r ? t : "") + "]", r, n, i)
        });
        else if (n || "object" !== J.type(t)) i(e, t);
        else
            for (r in t) R(e + "[" + r + "]", t[r], n, i)
    }

    function H(e) {
        return J.isWindow(e) ? e : 9 === e.nodeType && e.defaultView
    }
    var I = [],
        W = I.slice,
        B = I.concat,
        X = I.push,
        V = I.indexOf,
        U = {},
        G = U.toString,
        Y = U.hasOwnProperty,
        Q = {},
        Z = e.document,
        K = "2.1.4",
        J = function(e, t) {
            return new J.fn.init(e, t)
        },
        ee = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
        te = /^-ms-/,
        ne = /-([\da-z])/gi,
        ie = function(e, t) {
            return t.toUpperCase()
        };
    J.fn = J.prototype = {
        jquery: K,
        constructor: J,
        selector: "",
        length: 0,
        toArray: function() {
            return W.call(this)
        },
        get: function(e) {
            return null != e ? 0 > e ? this[e + this.length] : this[e] : W.call(this)
        },
        pushStack: function(e) {
            var t = J.merge(this.constructor(), e);
            return t.prevObject = this, t.context = this.context, t
        },
        each: function(e, t) {
            return J.each(this, e, t)
        },
        map: function(e) {
            return this.pushStack(J.map(this, function(t, n) {
                return e.call(t, n, t)
            }))
        },
        slice: function() {
            return this.pushStack(W.apply(this, arguments))
        },
        first: function() {
            return this.eq(0)
        },
        last: function() {
            return this.eq(-1)
        },
        eq: function(e) {
            var t = this.length,
                n = +e + (0 > e ? t : 0);
            return this.pushStack(n >= 0 && t > n ? [this[n]] : [])
        },
        end: function() {
            return this.prevObject || this.constructor(null)
        },
        push: X,
        sort: I.sort,
        splice: I.splice
    }, J.extend = J.fn.extend = function() {
        var e, t, n, i, r, o, a = arguments[0] || {},
            s = 1,
            l = arguments.length,
            u = !1;
        for ("boolean" == typeof a && (u = a, a = arguments[s] || {}, s++), "object" == typeof a || J.isFunction(a) || (a = {}), s === l && (a = this, s--); l > s; s++)
            if (null != (e = arguments[s]))
                for (t in e) n = a[t], i = e[t], a !== i && (u && i && (J.isPlainObject(i) || (r = J.isArray(i))) ? (r ? (r = !1, o = n && J.isArray(n) ? n : []) : o = n && J.isPlainObject(n) ? n : {}, a[t] = J.extend(u, o, i)) : void 0 !== i && (a[t] = i));
        return a
    }, J.extend({
        expando: "jQuery" + (K + Math.random()).replace(/\D/g, ""),
        isReady: !0,
        error: function(e) {
            throw new Error(e)
        },
        noop: function() {},
        isFunction: function(e) {
            return "function" === J.type(e)
        },
        isArray: Array.isArray,
        isWindow: function(e) {
            return null != e && e === e.window
        },
        isNumeric: function(e) {
            return !J.isArray(e) && e - parseFloat(e) + 1 >= 0
        },
        isPlainObject: function(e) {
            return "object" !== J.type(e) || e.nodeType || J.isWindow(e) ? !1 : e.constructor && !Y.call(e.constructor.prototype, "isPrototypeOf") ? !1 : !0
        },
        isEmptyObject: function(e) {
            var t;
            for (t in e) return !1;
            return !0
        },
        type: function(e) {
            return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? U[G.call(e)] || "object" : typeof e
        },
        globalEval: function(e) {
            var t, n = eval;
            e = J.trim(e), e && (1 === e.indexOf("use strict") ? (t = Z.createElement("script"), t.text = e, Z.head.appendChild(t).parentNode.removeChild(t)) : n(e))
        },
        camelCase: function(e) {
            return e.replace(te, "ms-").replace(ne, ie)
        },
        nodeName: function(e, t) {
            return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
        },
        each: function(e, t, i) {
            var r, o = 0,
                a = e.length,
                s = n(e);
            if (i) {
                if (s)
                    for (; a > o && (r = t.apply(e[o], i), r !== !1); o++);
                else
                    for (o in e)
                        if (r = t.apply(e[o], i), r === !1) break
            } else if (s)
                for (; a > o && (r = t.call(e[o], o, e[o]), r !== !1); o++);
            else
                for (o in e)
                    if (r = t.call(e[o], o, e[o]), r === !1) break; return e
        },
        trim: function(e) {
            return null == e ? "" : (e + "").replace(ee, "")
        },
        makeArray: function(e, t) {
            var i = t || [];
            return null != e && (n(Object(e)) ? J.merge(i, "string" == typeof e ? [e] : e) : X.call(i, e)), i
        },
        inArray: function(e, t, n) {
            return null == t ? -1 : V.call(t, e, n)
        },
        merge: function(e, t) {
            for (var n = +t.length, i = 0, r = e.length; n > i; i++) e[r++] = t[i];
            return e.length = r, e
        },
        grep: function(e, t, n) {
            for (var i, r = [], o = 0, a = e.length, s = !n; a > o; o++) i = !t(e[o], o), i !== s && r.push(e[o]);
            return r
        },
        map: function(e, t, i) {
            var r, o = 0,
                a = e.length,
                s = n(e),
                l = [];
            if (s)
                for (; a > o; o++) r = t(e[o], o, i), null != r && l.push(r);
            else
                for (o in e) r = t(e[o], o, i), null != r && l.push(r);
            return B.apply([], l)
        },
        guid: 1,
        proxy: function(e, t) {
            var n, i, r;
            return "string" == typeof t && (n = e[t], t = e, e = n), J.isFunction(e) ? (i = W.call(arguments, 2), r = function() {
                return e.apply(t || this, i.concat(W.call(arguments)))
            }, r.guid = e.guid = e.guid || J.guid++, r) : void 0
        },
        now: Date.now,
        support: Q
    }), J.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function(e, t) {
        U["[object " + t + "]"] = t.toLowerCase()
    });
    var re = function(e) {
        function t(e, t, n, i) {
            var r, o, a, s, l, u, d, f, p, g;
            if ((t ? t.ownerDocument || t : R) !== $ && A(t), t = t || $, n = n || [], s = t.nodeType, "string" != typeof e || !e || 1 !== s && 9 !== s && 11 !== s) return n;
            if (!i && P) {
                if (11 !== s && (r = ye.exec(e)))
                    if (a = r[1]) {
                        if (9 === s) {
                            if (o = t.getElementById(a), !o || !o.parentNode) return n;
                            if (o.id === a) return n.push(o), n
                        } else if (t.ownerDocument && (o = t.ownerDocument.getElementById(a)) && M(t, o) && o.id === a) return n.push(o), n
                    } else {
                        if (r[2]) return K.apply(n, t.getElementsByTagName(e)), n;
                        if ((a = r[3]) && w.getElementsByClassName) return K.apply(n, t.getElementsByClassName(a)), n
                    }
                if (w.qsa && (!O || !O.test(e))) {
                    if (f = d = z, p = t, g = 1 !== s && e, 1 === s && "object" !== t.nodeName.toLowerCase()) {
                        for (u = F(e), (d = t.getAttribute("id")) ? f = d.replace(be, "\\$&") : t.setAttribute("id", f), f = "[id='" + f + "'] ", l = u.length; l--;) u[l] = f + h(u[l]);
                        p = xe.test(e) && c(t.parentNode) || t, g = u.join(",")
                    }
                    if (g) try {
                        return K.apply(n, p.querySelectorAll(g)), n
                    } catch (m) {} finally {
                        d || t.removeAttribute("id")
                    }
                }
            }
            return k(e.replace(le, "$1"), t, n, i)
        }

        function n() {
            function e(n, i) {
                return t.push(n + " ") > _.cacheLength && delete e[t.shift()], e[n + " "] = i
            }
            var t = [];
            return e
        }

        function i(e) {
            return e[z] = !0, e
        }

        function r(e) {
            var t = $.createElement("div");
            try {
                return !!e(t)
            } catch (n) {
                return !1
            } finally {
                t.parentNode && t.parentNode.removeChild(t), t = null
            }
        }

        function o(e, t) {
            for (var n = e.split("|"), i = e.length; i--;) _.attrHandle[n[i]] = t
        }

        function a(e, t) {
            var n = t && e,
                i = n && 1 === e.nodeType && 1 === t.nodeType && (~t.sourceIndex || U) - (~e.sourceIndex || U);
            if (i) return i;
            if (n)
                for (; n = n.nextSibling;)
                    if (n === t) return -1;
            return e ? 1 : -1
        }

        function s(e) {
            return function(t) {
                var n = t.nodeName.toLowerCase();
                return "input" === n && t.type === e
            }
        }

        function l(e) {
            return function(t) {
                var n = t.nodeName.toLowerCase();
                return ("input" === n || "button" === n) && t.type === e
            }
        }

        function u(e) {
            return i(function(t) {
                return t = +t, i(function(n, i) {
                    for (var r, o = e([], n.length, t), a = o.length; a--;) n[r = o[a]] && (n[r] = !(i[r] = n[r]))
                })
            })
        }

        function c(e) {
            return e && "undefined" != typeof e.getElementsByTagName && e
        }

        function d() {}

        function h(e) {
            for (var t = 0, n = e.length, i = ""; n > t; t++) i += e[t].value;
            return i
        }

        function f(e, t, n) {
            var i = t.dir,
                r = n && "parentNode" === i,
                o = I++;
            return t.first ? function(t, n, o) {
                for (; t = t[i];)
                    if (1 === t.nodeType || r) return e(t, n, o)
            } : function(t, n, a) {
                var s, l, u = [H, o];
                if (a) {
                    for (; t = t[i];)
                        if ((1 === t.nodeType || r) && e(t, n, a)) return !0
                } else
                    for (; t = t[i];)
                        if (1 === t.nodeType || r) {
                            if (l = t[z] || (t[z] = {}), (s = l[i]) && s[0] === H && s[1] === o) return u[2] = s[2];
                            if (l[i] = u, u[2] = e(t, n, a)) return !0
                        }
            }
        }

        function p(e) {
            return e.length > 1 ? function(t, n, i) {
                for (var r = e.length; r--;)
                    if (!e[r](t, n, i)) return !1;
                return !0
            } : e[0]
        }

        function g(e, n, i) {
            for (var r = 0, o = n.length; o > r; r++) t(e, n[r], i);
            return i
        }

        function m(e, t, n, i, r) {
            for (var o, a = [], s = 0, l = e.length, u = null != t; l > s; s++)(o = e[s]) && (!n || n(o, i, r)) && (a.push(o), u && t.push(s));
            return a
        }

        function v(e, t, n, r, o, a) {
            return r && !r[z] && (r = v(r)), o && !o[z] && (o = v(o, a)), i(function(i, a, s, l) {
                var u, c, d, h = [],
                    f = [],
                    p = a.length,
                    v = i || g(t || "*", s.nodeType ? [s] : s, []),
                    y = !e || !i && t ? v : m(v, h, e, s, l),
                    x = n ? o || (i ? e : p || r) ? [] : a : y;
                if (n && n(y, x, s, l), r)
                    for (u = m(x, f), r(u, [], s, l), c = u.length; c--;)(d = u[c]) && (x[f[c]] = !(y[f[c]] = d));
                if (i) {
                    if (o || e) {
                        if (o) {
                            for (u = [], c = x.length; c--;)(d = x[c]) && u.push(y[c] = d);
                            o(null, x = [], u, l)
                        }
                        for (c = x.length; c--;)(d = x[c]) && (u = o ? ee(i, d) : h[c]) > -1 && (i[u] = !(a[u] = d))
                    }
                } else x = m(x === a ? x.splice(p, x.length) : x), o ? o(null, a, x, l) : K.apply(a, x)
            })
        }

        function y(e) {
            for (var t, n, i, r = e.length, o = _.relative[e[0].type], a = o || _.relative[" "], s = o ? 1 : 0, l = f(function(e) {
                    return e === t
                }, a, !0), u = f(function(e) {
                    return ee(t, e) > -1
                }, a, !0), c = [function(e, n, i) {
                    var r = !o && (i || n !== D) || ((t = n).nodeType ? l(e, n, i) : u(e, n, i));
                    return t = null, r
                }]; r > s; s++)
                if (n = _.relative[e[s].type]) c = [f(p(c), n)];
                else {
                    if (n = _.filter[e[s].type].apply(null, e[s].matches), n[z]) {
                        for (i = ++s; r > i && !_.relative[e[i].type]; i++);
                        return v(s > 1 && p(c), s > 1 && h(e.slice(0, s - 1).concat({
                            value: " " === e[s - 2].type ? "*" : ""
                        })).replace(le, "$1"), n, i > s && y(e.slice(s, i)), r > i && y(e = e.slice(i)), r > i && h(e))
                    }
                    c.push(n)
                }
            return p(c)
        }

        function x(e, n) {
            var r = n.length > 0,
                o = e.length > 0,
                a = function(i, a, s, l, u) {
                    var c, d, h, f = 0,
                        p = "0",
                        g = i && [],
                        v = [],
                        y = D,
                        x = i || o && _.find.TAG("*", u),
                        b = H += null == y ? 1 : Math.random() || .1,
                        w = x.length;
                    for (u && (D = a !== $ && a); p !== w && null != (c = x[p]); p++) {
                        if (o && c) {
                            for (d = 0; h = e[d++];)
                                if (h(c, a, s)) {
                                    l.push(c);
                                    break
                                }
                            u && (H = b)
                        }
                        r && ((c = !h && c) && f--, i && g.push(c))
                    }
                    if (f += p, r && p !== f) {
                        for (d = 0; h = n[d++];) h(g, v, a, s);
                        if (i) {
                            if (f > 0)
                                for (; p--;) g[p] || v[p] || (v[p] = Q.call(l));
                            v = m(v)
                        }
                        K.apply(l, v), u && !i && v.length > 0 && f + n.length > 1 && t.uniqueSort(l)
                    }
                    return u && (H = b, D = y), g
                };
            return r ? i(a) : a
        }
        var b, w, _, C, T, F, E, k, D, S, j, A, $, N, P, O, q, L, M, z = "sizzle" + 1 * new Date,
            R = e.document,
            H = 0,
            I = 0,
            W = n(),
            B = n(),
            X = n(),
            V = function(e, t) {
                return e === t && (j = !0), 0
            },
            U = 1 << 31,
            G = {}.hasOwnProperty,
            Y = [],
            Q = Y.pop,
            Z = Y.push,
            K = Y.push,
            J = Y.slice,
            ee = function(e, t) {
                for (var n = 0, i = e.length; i > n; n++)
                    if (e[n] === t) return n;
                return -1
            },
            te = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
            ne = "[\\x20\\t\\r\\n\\f]",
            ie = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
            re = ie.replace("w", "w#"),
            oe = "\\[" + ne + "*(" + ie + ")(?:" + ne + "*([*^$|!~]?=)" + ne + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + re + "))|)" + ne + "*\\]",
            ae = ":(" + ie + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + oe + ")*)|.*)\\)|)",
            se = new RegExp(ne + "+", "g"),
            le = new RegExp("^" + ne + "+|((?:^|[^\\\\])(?:\\\\.)*)" + ne + "+$", "g"),
            ue = new RegExp("^" + ne + "*," + ne + "*"),
            ce = new RegExp("^" + ne + "*([>+~]|" + ne + ")" + ne + "*"),
            de = new RegExp("=" + ne + "*([^\\]'\"]*?)" + ne + "*\\]", "g"),
            he = new RegExp(ae),
            fe = new RegExp("^" + re + "$"),
            pe = {
                ID: new RegExp("^#(" + ie + ")"),
                CLASS: new RegExp("^\\.(" + ie + ")"),
                TAG: new RegExp("^(" + ie.replace("w", "w*") + ")"),
                ATTR: new RegExp("^" + oe),
                PSEUDO: new RegExp("^" + ae),
                CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + ne + "*(even|odd|(([+-]|)(\\d*)n|)" + ne + "*(?:([+-]|)" + ne + "*(\\d+)|))" + ne + "*\\)|)", "i"),
                bool: new RegExp("^(?:" + te + ")$", "i"),
                needsContext: new RegExp("^" + ne + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + ne + "*((?:-\\d)?\\d*)" + ne + "*\\)|)(?=[^-]|$)", "i")
            },
            ge = /^(?:input|select|textarea|button)$/i,
            me = /^h\d$/i,
            ve = /^[^{]+\{\s*\[native \w/,
            ye = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
            xe = /[+~]/,
            be = /'|\\/g,
            we = new RegExp("\\\\([\\da-f]{1,6}" + ne + "?|(" + ne + ")|.)", "ig"),
            _e = function(e, t, n) {
                var i = "0x" + t - 65536;
                return i !== i || n ? t : 0 > i ? String.fromCharCode(i + 65536) : String.fromCharCode(i >> 10 | 55296, 1023 & i | 56320)
            },
            Ce = function() {
                A()
            };
        try {
            K.apply(Y = J.call(R.childNodes), R.childNodes), Y[R.childNodes.length].nodeType
        } catch (Te) {
            K = {
                apply: Y.length ? function(e, t) {
                    Z.apply(e, J.call(t))
                } : function(e, t) {
                    for (var n = e.length, i = 0; e[n++] = t[i++];);
                    e.length = n - 1
                }
            }
        }
        w = t.support = {}, T = t.isXML = function(e) {
            var t = e && (e.ownerDocument || e).documentElement;
            return t ? "HTML" !== t.nodeName : !1
        }, A = t.setDocument = function(e) {
            var t, n, i = e ? e.ownerDocument || e : R;
            return i !== $ && 9 === i.nodeType && i.documentElement ? ($ = i, N = i.documentElement, n = i.defaultView, n && n !== n.top && (n.addEventListener ? n.addEventListener("unload", Ce, !1) : n.attachEvent && n.attachEvent("onunload", Ce)), P = !T(i), w.attributes = r(function(e) {
                return e.className = "i", !e.getAttribute("className")
            }), w.getElementsByTagName = r(function(e) {
                return e.appendChild(i.createComment("")), !e.getElementsByTagName("*").length
            }), w.getElementsByClassName = ve.test(i.getElementsByClassName), w.getById = r(function(e) {
                return N.appendChild(e).id = z, !i.getElementsByName || !i.getElementsByName(z).length
            }), w.getById ? (_.find.ID = function(e, t) {
                if ("undefined" != typeof t.getElementById && P) {
                    var n = t.getElementById(e);
                    return n && n.parentNode ? [n] : []
                }
            }, _.filter.ID = function(e) {
                var t = e.replace(we, _e);
                return function(e) {
                    return e.getAttribute("id") === t
                }
            }) : (delete _.find.ID, _.filter.ID = function(e) {
                var t = e.replace(we, _e);
                return function(e) {
                    var n = "undefined" != typeof e.getAttributeNode && e.getAttributeNode("id");
                    return n && n.value === t
                }
            }), _.find.TAG = w.getElementsByTagName ? function(e, t) {
                return "undefined" != typeof t.getElementsByTagName ? t.getElementsByTagName(e) : w.qsa ? t.querySelectorAll(e) : void 0
            } : function(e, t) {
                var n, i = [],
                    r = 0,
                    o = t.getElementsByTagName(e);
                if ("*" === e) {
                    for (; n = o[r++];) 1 === n.nodeType && i.push(n);
                    return i
                }
                return o
            }, _.find.CLASS = w.getElementsByClassName && function(e, t) {
                return P ? t.getElementsByClassName(e) : void 0
            }, q = [], O = [], (w.qsa = ve.test(i.querySelectorAll)) && (r(function(e) {
                N.appendChild(e).innerHTML = "<a id='" + z + "'></a><select id='" + z + "-\f]' msallowcapture=''><option selected=''></option></select>", e.querySelectorAll("[msallowcapture^='']").length && O.push("[*^$]=" + ne + "*(?:''|\"\")"), e.querySelectorAll("[selected]").length || O.push("\\[" + ne + "*(?:value|" + te + ")"), e.querySelectorAll("[id~=" + z + "-]").length || O.push("~="), e.querySelectorAll(":checked").length || O.push(":checked"), e.querySelectorAll("a#" + z + "+*").length || O.push(".#.+[+~]")
            }), r(function(e) {
                var t = i.createElement("input");
                t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("name", "D"), e.querySelectorAll("[name=d]").length && O.push("name" + ne + "*[*^$|!~]?="), e.querySelectorAll(":enabled").length || O.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), O.push(",.*:")
            })), (w.matchesSelector = ve.test(L = N.matches || N.webkitMatchesSelector || N.mozMatchesSelector || N.oMatchesSelector || N.msMatchesSelector)) && r(function(e) {
                w.disconnectedMatch = L.call(e, "div"), L.call(e, "[s!='']:x"), q.push("!=", ae)
            }), O = O.length && new RegExp(O.join("|")), q = q.length && new RegExp(q.join("|")), t = ve.test(N.compareDocumentPosition), M = t || ve.test(N.contains) ? function(e, t) {
                var n = 9 === e.nodeType ? e.documentElement : e,
                    i = t && t.parentNode;
                return e === i || !(!i || 1 !== i.nodeType || !(n.contains ? n.contains(i) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(i)))
            } : function(e, t) {
                if (t)
                    for (; t = t.parentNode;)
                        if (t === e) return !0;
                return !1
            }, V = t ? function(e, t) {
                if (e === t) return j = !0, 0;
                var n = !e.compareDocumentPosition - !t.compareDocumentPosition;
                return n ? n : (n = (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1, 1 & n || !w.sortDetached && t.compareDocumentPosition(e) === n ? e === i || e.ownerDocument === R && M(R, e) ? -1 : t === i || t.ownerDocument === R && M(R, t) ? 1 : S ? ee(S, e) - ee(S, t) : 0 : 4 & n ? -1 : 1)
            } : function(e, t) {
                if (e === t) return j = !0, 0;
                var n, r = 0,
                    o = e.parentNode,
                    s = t.parentNode,
                    l = [e],
                    u = [t];
                if (!o || !s) return e === i ? -1 : t === i ? 1 : o ? -1 : s ? 1 : S ? ee(S, e) - ee(S, t) : 0;
                if (o === s) return a(e, t);
                for (n = e; n = n.parentNode;) l.unshift(n);
                for (n = t; n = n.parentNode;) u.unshift(n);
                for (; l[r] === u[r];) r++;
                return r ? a(l[r], u[r]) : l[r] === R ? -1 : u[r] === R ? 1 : 0
            }, i) : $
        }, t.matches = function(e, n) {
            return t(e, null, null, n)
        }, t.matchesSelector = function(e, n) {
            if ((e.ownerDocument || e) !== $ && A(e), n = n.replace(de, "='$1']"), !(!w.matchesSelector || !P || q && q.test(n) || O && O.test(n))) try {
                var i = L.call(e, n);
                if (i || w.disconnectedMatch || e.document && 11 !== e.document.nodeType) return i
            } catch (r) {}
            return t(n, $, null, [e]).length > 0
        }, t.contains = function(e, t) {
            return (e.ownerDocument || e) !== $ && A(e), M(e, t)
        }, t.attr = function(e, t) {
            (e.ownerDocument || e) !== $ && A(e);
            var n = _.attrHandle[t.toLowerCase()],
                i = n && G.call(_.attrHandle, t.toLowerCase()) ? n(e, t, !P) : void 0;
            return void 0 !== i ? i : w.attributes || !P ? e.getAttribute(t) : (i = e.getAttributeNode(t)) && i.specified ? i.value : null
        }, t.error = function(e) {
            throw new Error("Syntax error, unrecognized expression: " + e)
        }, t.uniqueSort = function(e) {
            var t, n = [],
                i = 0,
                r = 0;
            if (j = !w.detectDuplicates, S = !w.sortStable && e.slice(0), e.sort(V), j) {
                for (; t = e[r++];) t === e[r] && (i = n.push(r));
                for (; i--;) e.splice(n[i], 1)
            }
            return S = null, e
        }, C = t.getText = function(e) {
            var t, n = "",
                i = 0,
                r = e.nodeType;
            if (r) {
                if (1 === r || 9 === r || 11 === r) {
                    if ("string" == typeof e.textContent) return e.textContent;
                    for (e = e.firstChild; e; e = e.nextSibling) n += C(e)
                } else if (3 === r || 4 === r) return e.nodeValue
            } else
                for (; t = e[i++];) n += C(t);
            return n
        }, _ = t.selectors = {
            cacheLength: 50,
            createPseudo: i,
            match: pe,
            attrHandle: {},
            find: {},
            relative: {
                ">": {
                    dir: "parentNode",
                    first: !0
                },
                " ": {
                    dir: "parentNode"
                },
                "+": {
                    dir: "previousSibling",
                    first: !0
                },
                "~": {
                    dir: "previousSibling"
                }
            },
            preFilter: {
                ATTR: function(e) {
                    return e[1] = e[1].replace(we, _e), e[3] = (e[3] || e[4] || e[5] || "").replace(we, _e), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4)
                },
                CHILD: function(e) {
                    return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || t.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && t.error(e[0]), e
                },
                PSEUDO: function(e) {
                    var t, n = !e[6] && e[2];
                    return pe.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && he.test(n) && (t = F(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), e[2] = n.slice(0, t)), e.slice(0, 3))
                }
            },
            filter: {
                TAG: function(e) {
                    var t = e.replace(we, _e).toLowerCase();
                    return "*" === e ? function() {
                        return !0
                    } : function(e) {
                        return e.nodeName && e.nodeName.toLowerCase() === t
                    }
                },
                CLASS: function(e) {
                    var t = W[e + " "];
                    return t || (t = new RegExp("(^|" + ne + ")" + e + "(" + ne + "|$)")) && W(e, function(e) {
                        return t.test("string" == typeof e.className && e.className || "undefined" != typeof e.getAttribute && e.getAttribute("class") || "")
                    })
                },
                ATTR: function(e, n, i) {
                    return function(r) {
                        var o = t.attr(r, e);
                        return null == o ? "!=" === n : n ? (o += "", "=" === n ? o === i : "!=" === n ? o !== i : "^=" === n ? i && 0 === o.indexOf(i) : "*=" === n ? i && o.indexOf(i) > -1 : "$=" === n ? i && o.slice(-i.length) === i : "~=" === n ? (" " + o.replace(se, " ") + " ").indexOf(i) > -1 : "|=" === n ? o === i || o.slice(0, i.length + 1) === i + "-" : !1) : !0
                    }
                },
                CHILD: function(e, t, n, i, r) {
                    var o = "nth" !== e.slice(0, 3),
                        a = "last" !== e.slice(-4),
                        s = "of-type" === t;
                    return 1 === i && 0 === r ? function(e) {
                        return !!e.parentNode
                    } : function(t, n, l) {
                        var u, c, d, h, f, p, g = o !== a ? "nextSibling" : "previousSibling",
                            m = t.parentNode,
                            v = s && t.nodeName.toLowerCase(),
                            y = !l && !s;
                        if (m) {
                            if (o) {
                                for (; g;) {
                                    for (d = t; d = d[g];)
                                        if (s ? d.nodeName.toLowerCase() === v : 1 === d.nodeType) return !1;
                                    p = g = "only" === e && !p && "nextSibling"
                                }
                                return !0
                            }
                            if (p = [a ? m.firstChild : m.lastChild], a && y) {
                                for (c = m[z] || (m[z] = {}), u = c[e] || [], f = u[0] === H && u[1], h = u[0] === H && u[2], d = f && m.childNodes[f]; d = ++f && d && d[g] || (h = f = 0) || p.pop();)
                                    if (1 === d.nodeType && ++h && d === t) {
                                        c[e] = [H, f, h];
                                        break
                                    }
                            } else if (y && (u = (t[z] || (t[z] = {}))[e]) && u[0] === H) h = u[1];
                            else
                                for (;
                                    (d = ++f && d && d[g] || (h = f = 0) || p.pop()) && ((s ? d.nodeName.toLowerCase() !== v : 1 !== d.nodeType) || !++h || (y && ((d[z] || (d[z] = {}))[e] = [H, h]), d !== t)););
                            return h -= r, h === i || h % i === 0 && h / i >= 0
                        }
                    }
                },
                PSEUDO: function(e, n) {
                    var r, o = _.pseudos[e] || _.setFilters[e.toLowerCase()] || t.error("unsupported pseudo: " + e);
                    return o[z] ? o(n) : o.length > 1 ? (r = [e, e, "", n], _.setFilters.hasOwnProperty(e.toLowerCase()) ? i(function(e, t) {
                        for (var i, r = o(e, n), a = r.length; a--;) i = ee(e, r[a]), e[i] = !(t[i] = r[a])
                    }) : function(e) {
                        return o(e, 0, r)
                    }) : o
                }
            },
            pseudos: {
                not: i(function(e) {
                    var t = [],
                        n = [],
                        r = E(e.replace(le, "$1"));
                    return r[z] ? i(function(e, t, n, i) {
                        for (var o, a = r(e, null, i, []), s = e.length; s--;)(o = a[s]) && (e[s] = !(t[s] = o))
                    }) : function(e, i, o) {
                        return t[0] = e, r(t, null, o, n), t[0] = null, !n.pop()
                    }
                }),
                has: i(function(e) {
                    return function(n) {
                        return t(e, n).length > 0
                    }
                }),
                contains: i(function(e) {
                    return e = e.replace(we, _e),
                        function(t) {
                            return (t.textContent || t.innerText || C(t)).indexOf(e) > -1
                        }
                }),
                lang: i(function(e) {
                    return fe.test(e || "") || t.error("unsupported lang: " + e), e = e.replace(we, _e).toLowerCase(),
                        function(t) {
                            var n;
                            do
                                if (n = P ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang")) return n = n.toLowerCase(), n === e || 0 === n.indexOf(e + "-");
                            while ((t = t.parentNode) && 1 === t.nodeType);
                            return !1
                        }
                }),
                target: function(t) {
                    var n = e.location && e.location.hash;
                    return n && n.slice(1) === t.id
                },
                root: function(e) {
                    return e === N
                },
                focus: function(e) {
                    return e === $.activeElement && (!$.hasFocus || $.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
                },
                enabled: function(e) {
                    return e.disabled === !1
                },
                disabled: function(e) {
                    return e.disabled === !0
                },
                checked: function(e) {
                    var t = e.nodeName.toLowerCase();
                    return "input" === t && !!e.checked || "option" === t && !!e.selected
                },
                selected: function(e) {
                    return e.parentNode && e.parentNode.selectedIndex, e.selected === !0
                },
                empty: function(e) {
                    for (e = e.firstChild; e; e = e.nextSibling)
                        if (e.nodeType < 6) return !1;
                    return !0
                },
                parent: function(e) {
                    return !_.pseudos.empty(e)
                },
                header: function(e) {
                    return me.test(e.nodeName)
                },
                input: function(e) {
                    return ge.test(e.nodeName)
                },
                button: function(e) {
                    var t = e.nodeName.toLowerCase();
                    return "input" === t && "button" === e.type || "button" === t
                },
                text: function(e) {
                    var t;
                    return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase())
                },
                first: u(function() {
                    return [0]
                }),
                last: u(function(e, t) {
                    return [t - 1]
                }),
                eq: u(function(e, t, n) {
                    return [0 > n ? n + t : n]
                }),
                even: u(function(e, t) {
                    for (var n = 0; t > n; n += 2) e.push(n);
                    return e
                }),
                odd: u(function(e, t) {
                    for (var n = 1; t > n; n += 2) e.push(n);
                    return e
                }),
                lt: u(function(e, t, n) {
                    for (var i = 0 > n ? n + t : n; --i >= 0;) e.push(i);
                    return e
                }),
                gt: u(function(e, t, n) {
                    for (var i = 0 > n ? n + t : n; ++i < t;) e.push(i);
                    return e
                })
            }
        }, _.pseudos.nth = _.pseudos.eq;
        for (b in {
                radio: !0,
                checkbox: !0,
                file: !0,
                password: !0,
                image: !0
            }) _.pseudos[b] = s(b);
        for (b in {
                submit: !0,
                reset: !0
            }) _.pseudos[b] = l(b);
        return d.prototype = _.filters = _.pseudos, _.setFilters = new d, F = t.tokenize = function(e, n) {
            var i, r, o, a, s, l, u, c = B[e + " "];
            if (c) return n ? 0 : c.slice(0);
            for (s = e, l = [], u = _.preFilter; s;) {
                (!i || (r = ue.exec(s))) && (r && (s = s.slice(r[0].length) || s), l.push(o = [])), i = !1, (r = ce.exec(s)) && (i = r.shift(), o.push({
                    value: i,
                    type: r[0].replace(le, " ")
                }), s = s.slice(i.length));
                for (a in _.filter) !(r = pe[a].exec(s)) || u[a] && !(r = u[a](r)) || (i = r.shift(), o.push({
                    value: i,
                    type: a,
                    matches: r
                }), s = s.slice(i.length));
                if (!i) break
            }
            return n ? s.length : s ? t.error(e) : B(e, l).slice(0)
        }, E = t.compile = function(e, t) {
            var n, i = [],
                r = [],
                o = X[e + " "];
            if (!o) {
                for (t || (t = F(e)), n = t.length; n--;) o = y(t[n]), o[z] ? i.push(o) : r.push(o);
                o = X(e, x(r, i)), o.selector = e
            }
            return o
        }, k = t.select = function(e, t, n, i) {
            var r, o, a, s, l, u = "function" == typeof e && e,
                d = !i && F(e = u.selector || e);
            if (n = n || [], 1 === d.length) {
                if (o = d[0] = d[0].slice(0), o.length > 2 && "ID" === (a = o[0]).type && w.getById && 9 === t.nodeType && P && _.relative[o[1].type]) {
                    if (t = (_.find.ID(a.matches[0].replace(we, _e), t) || [])[0], !t) return n;
                    u && (t = t.parentNode), e = e.slice(o.shift().value.length)
                }
                for (r = pe.needsContext.test(e) ? 0 : o.length; r-- && (a = o[r], !_.relative[s = a.type]);)
                    if ((l = _.find[s]) && (i = l(a.matches[0].replace(we, _e), xe.test(o[0].type) && c(t.parentNode) || t))) {
                        if (o.splice(r, 1), e = i.length && h(o), !e) return K.apply(n, i), n;
                        break
                    }
            }
            return (u || E(e, d))(i, t, !P, n, xe.test(e) && c(t.parentNode) || t), n
        }, w.sortStable = z.split("").sort(V).join("") === z, w.detectDuplicates = !!j, A(), w.sortDetached = r(function(e) {
            return 1 & e.compareDocumentPosition($.createElement("div"))
        }), r(function(e) {
            return e.innerHTML = "<a href='#'></a>", "#" === e.firstChild.getAttribute("href")
        }) || o("type|href|height|width", function(e, t, n) {
            return n ? void 0 : e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2)
        }), w.attributes && r(function(e) {
            return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value")
        }) || o("value", function(e, t, n) {
            return n || "input" !== e.nodeName.toLowerCase() ? void 0 : e.defaultValue
        }), r(function(e) {
            return null == e.getAttribute("disabled")
        }) || o(te, function(e, t, n) {
            var i;
            return n ? void 0 : e[t] === !0 ? t.toLowerCase() : (i = e.getAttributeNode(t)) && i.specified ? i.value : null
        }), t
    }(e);
    J.find = re, J.expr = re.selectors, J.expr[":"] = J.expr.pseudos, J.unique = re.uniqueSort, J.text = re.getText, J.isXMLDoc = re.isXML, J.contains = re.contains;
    var oe = J.expr.match.needsContext,
        ae = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
        se = /^.[^:#\[\.,]*$/;
    J.filter = function(e, t, n) {
        var i = t[0];
        return n && (e = ":not(" + e + ")"), 1 === t.length && 1 === i.nodeType ? J.find.matchesSelector(i, e) ? [i] : [] : J.find.matches(e, J.grep(t, function(e) {
            return 1 === e.nodeType
        }))
    }, J.fn.extend({
        find: function(e) {
            var t, n = this.length,
                i = [],
                r = this;

            if ("string" != typeof e) return this.pushStack(J(e).filter(function() {
                for (t = 0; n > t; t++)
                    if (J.contains(r[t], this)) return !0
            }));
            for (t = 0; n > t; t++) J.find(e, r[t], i);
            return i = this.pushStack(n > 1 ? J.unique(i) : i), i.selector = this.selector ? this.selector + " " + e : e, i
        },
        filter: function(e) {
            return this.pushStack(i(this, e || [], !1))
        },
        not: function(e) {
            return this.pushStack(i(this, e || [], !0))
        },
        is: function(e) {
            return !!i(this, "string" == typeof e && oe.test(e) ? J(e) : e || [], !1).length
        }
    });
    var le, ue = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,
        ce = J.fn.init = function(e, t) {
            var n, i;
            if (!e) return this;
            if ("string" == typeof e) {
                if (n = "<" === e[0] && ">" === e[e.length - 1] && e.length >= 3 ? [null, e, null] : ue.exec(e), !n || !n[1] && t) return !t || t.jquery ? (t || le).find(e) : this.constructor(t).find(e);
                if (n[1]) {
                    if (t = t instanceof J ? t[0] : t, J.merge(this, J.parseHTML(n[1], t && t.nodeType ? t.ownerDocument || t : Z, !0)), ae.test(n[1]) && J.isPlainObject(t))
                        for (n in t) J.isFunction(this[n]) ? this[n](t[n]) : this.attr(n, t[n]);
                    return this
                }
                return i = Z.getElementById(n[2]), i && i.parentNode && (this.length = 1, this[0] = i), this.context = Z, this.selector = e, this
            }
            return e.nodeType ? (this.context = this[0] = e, this.length = 1, this) : J.isFunction(e) ? "undefined" != typeof le.ready ? le.ready(e) : e(J) : (void 0 !== e.selector && (this.selector = e.selector, this.context = e.context), J.makeArray(e, this))
        };
    ce.prototype = J.fn, le = J(Z);
    var de = /^(?:parents|prev(?:Until|All))/,
        he = {
            children: !0,
            contents: !0,
            next: !0,
            prev: !0
        };
    J.extend({
        dir: function(e, t, n) {
            for (var i = [], r = void 0 !== n;
                (e = e[t]) && 9 !== e.nodeType;)
                if (1 === e.nodeType) {
                    if (r && J(e).is(n)) break;
                    i.push(e)
                }
            return i
        },
        sibling: function(e, t) {
            for (var n = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e);
            return n
        }
    }), J.fn.extend({
        has: function(e) {
            var t = J(e, this),
                n = t.length;
            return this.filter(function() {
                for (var e = 0; n > e; e++)
                    if (J.contains(this, t[e])) return !0
            })
        },
        closest: function(e, t) {
            for (var n, i = 0, r = this.length, o = [], a = oe.test(e) || "string" != typeof e ? J(e, t || this.context) : 0; r > i; i++)
                for (n = this[i]; n && n !== t; n = n.parentNode)
                    if (n.nodeType < 11 && (a ? a.index(n) > -1 : 1 === n.nodeType && J.find.matchesSelector(n, e))) {
                        o.push(n);
                        break
                    }
            return this.pushStack(o.length > 1 ? J.unique(o) : o)
        },
        index: function(e) {
            return e ? "string" == typeof e ? V.call(J(e), this[0]) : V.call(this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        },
        add: function(e, t) {
            return this.pushStack(J.unique(J.merge(this.get(), J(e, t))))
        },
        addBack: function(e) {
            return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
        }
    }), J.each({
        parent: function(e) {
            var t = e.parentNode;
            return t && 11 !== t.nodeType ? t : null
        },
        parents: function(e) {
            return J.dir(e, "parentNode")
        },
        parentsUntil: function(e, t, n) {
            return J.dir(e, "parentNode", n)
        },
        next: function(e) {
            return r(e, "nextSibling")
        },
        prev: function(e) {
            return r(e, "previousSibling")
        },
        nextAll: function(e) {
            return J.dir(e, "nextSibling")
        },
        prevAll: function(e) {
            return J.dir(e, "previousSibling")
        },
        nextUntil: function(e, t, n) {
            return J.dir(e, "nextSibling", n)
        },
        prevUntil: function(e, t, n) {
            return J.dir(e, "previousSibling", n)
        },
        siblings: function(e) {
            return J.sibling((e.parentNode || {}).firstChild, e)
        },
        children: function(e) {
            return J.sibling(e.firstChild)
        },
        contents: function(e) {
            return e.contentDocument || J.merge([], e.childNodes)
        }
    }, function(e, t) {
        J.fn[e] = function(n, i) {
            var r = J.map(this, t, n);
            return "Until" !== e.slice(-5) && (i = n), i && "string" == typeof i && (r = J.filter(i, r)), this.length > 1 && (he[e] || J.unique(r), de.test(e) && r.reverse()), this.pushStack(r)
        }
    });
    var fe = /\S+/g,
        pe = {};
    J.Callbacks = function(e) {
        e = "string" == typeof e ? pe[e] || o(e) : J.extend({}, e);
        var t, n, i, r, a, s, l = [],
            u = !e.once && [],
            c = function(o) {
                for (t = e.memory && o, n = !0, s = r || 0, r = 0, a = l.length, i = !0; l && a > s; s++)
                    if (l[s].apply(o[0], o[1]) === !1 && e.stopOnFalse) {
                        t = !1;
                        break
                    }
                i = !1, l && (u ? u.length && c(u.shift()) : t ? l = [] : d.disable())
            },
            d = {
                add: function() {
                    if (l) {
                        var n = l.length;
                        ! function o(t) {
                            J.each(t, function(t, n) {
                                var i = J.type(n);
                                "function" === i ? e.unique && d.has(n) || l.push(n) : n && n.length && "string" !== i && o(n)
                            })
                        }(arguments), i ? a = l.length : t && (r = n, c(t))
                    }
                    return this
                },
                remove: function() {
                    return l && J.each(arguments, function(e, t) {
                        for (var n;
                            (n = J.inArray(t, l, n)) > -1;) l.splice(n, 1), i && (a >= n && a--, s >= n && s--)
                    }), this
                },
                has: function(e) {
                    return e ? J.inArray(e, l) > -1 : !(!l || !l.length)
                },
                empty: function() {
                    return l = [], a = 0, this
                },
                disable: function() {
                    return l = u = t = void 0, this
                },
                disabled: function() {
                    return !l
                },
                lock: function() {
                    return u = void 0, t || d.disable(), this
                },
                locked: function() {
                    return !u
                },
                fireWith: function(e, t) {
                    return !l || n && !u || (t = t || [], t = [e, t.slice ? t.slice() : t], i ? u.push(t) : c(t)), this
                },
                fire: function() {
                    return d.fireWith(this, arguments), this
                },
                fired: function() {
                    return !!n
                }
            };
        return d
    }, J.extend({
        Deferred: function(e) {
            var t = [
                    ["resolve", "done", J.Callbacks("once memory"), "resolved"],
                    ["reject", "fail", J.Callbacks("once memory"), "rejected"],
                    ["notify", "progress", J.Callbacks("memory")]
                ],
                n = "pending",
                i = {
                    state: function() {
                        return n
                    },
                    always: function() {
                        return r.done(arguments).fail(arguments), this
                    },
                    then: function() {
                        var e = arguments;
                        return J.Deferred(function(n) {
                            J.each(t, function(t, o) {
                                var a = J.isFunction(e[t]) && e[t];
                                r[o[1]](function() {
                                    var e = a && a.apply(this, arguments);
                                    e && J.isFunction(e.promise) ? e.promise().done(n.resolve).fail(n.reject).progress(n.notify) : n[o[0] + "With"](this === i ? n.promise() : this, a ? [e] : arguments)
                                })
                            }), e = null
                        }).promise()
                    },
                    promise: function(e) {
                        return null != e ? J.extend(e, i) : i
                    }
                },
                r = {};
            return i.pipe = i.then, J.each(t, function(e, o) {
                var a = o[2],
                    s = o[3];
                i[o[1]] = a.add, s && a.add(function() {
                    n = s
                }, t[1 ^ e][2].disable, t[2][2].lock), r[o[0]] = function() {
                    return r[o[0] + "With"](this === r ? i : this, arguments), this
                }, r[o[0] + "With"] = a.fireWith
            }), i.promise(r), e && e.call(r, r), r
        },
        when: function(e) {
            var t, n, i, r = 0,
                o = W.call(arguments),
                a = o.length,
                s = 1 !== a || e && J.isFunction(e.promise) ? a : 0,
                l = 1 === s ? e : J.Deferred(),
                u = function(e, n, i) {
                    return function(r) {
                        n[e] = this, i[e] = arguments.length > 1 ? W.call(arguments) : r, i === t ? l.notifyWith(n, i) : --s || l.resolveWith(n, i)
                    }
                };
            if (a > 1)
                for (t = new Array(a), n = new Array(a), i = new Array(a); a > r; r++) o[r] && J.isFunction(o[r].promise) ? o[r].promise().done(u(r, i, o)).fail(l.reject).progress(u(r, n, t)) : --s;
            return s || l.resolveWith(i, o), l.promise()
        }
    });
    var ge;
    J.fn.ready = function(e) {
        return J.ready.promise().done(e), this
    }, J.extend({
        isReady: !1,
        readyWait: 1,
        holdReady: function(e) {
            e ? J.readyWait++ : J.ready(!0)
        },
        ready: function(e) {
            (e === !0 ? --J.readyWait : J.isReady) || (J.isReady = !0, e !== !0 && --J.readyWait > 0 || (ge.resolveWith(Z, [J]), J.fn.triggerHandler && (J(Z).triggerHandler("ready"), J(Z).off("ready"))))
        }
    }), J.ready.promise = function(t) {
        return ge || (ge = J.Deferred(), "complete" === Z.readyState ? setTimeout(J.ready) : (Z.addEventListener("DOMContentLoaded", a, !1), e.addEventListener("load", a, !1))), ge.promise(t)
    }, J.ready.promise();
    var me = J.access = function(e, t, n, i, r, o, a) {
        var s = 0,
            l = e.length,
            u = null == n;
        if ("object" === J.type(n)) {
            r = !0;
            for (s in n) J.access(e, t, s, n[s], !0, o, a)
        } else if (void 0 !== i && (r = !0, J.isFunction(i) || (a = !0), u && (a ? (t.call(e, i), t = null) : (u = t, t = function(e, t, n) {
                return u.call(J(e), n)
            })), t))
            for (; l > s; s++) t(e[s], n, a ? i : i.call(e[s], s, t(e[s], n)));
        return r ? e : u ? t.call(e) : l ? t(e[0], n) : o
    };
    J.acceptData = function(e) {
        return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType
    }, s.uid = 1, s.accepts = J.acceptData, s.prototype = {
        key: function(e) {
            if (!s.accepts(e)) return 0;
            var t = {},
                n = e[this.expando];
            if (!n) {
                n = s.uid++;
                try {
                    t[this.expando] = {
                        value: n
                    }, Object.defineProperties(e, t)
                } catch (i) {
                    t[this.expando] = n, J.extend(e, t)
                }
            }
            return this.cache[n] || (this.cache[n] = {}), n
        },
        set: function(e, t, n) {
            var i, r = this.key(e),
                o = this.cache[r];
            if ("string" == typeof t) o[t] = n;
            else if (J.isEmptyObject(o)) J.extend(this.cache[r], t);
            else
                for (i in t) o[i] = t[i];
            return o
        },
        get: function(e, t) {
            var n = this.cache[this.key(e)];
            return void 0 === t ? n : n[t]
        },
        access: function(e, t, n) {
            var i;
            return void 0 === t || t && "string" == typeof t && void 0 === n ? (i = this.get(e, t), void 0 !== i ? i : this.get(e, J.camelCase(t))) : (this.set(e, t, n), void 0 !== n ? n : t)
        },
        remove: function(e, t) {
            var n, i, r, o = this.key(e),
                a = this.cache[o];
            if (void 0 === t) this.cache[o] = {};
            else {
                J.isArray(t) ? i = t.concat(t.map(J.camelCase)) : (r = J.camelCase(t), t in a ? i = [t, r] : (i = r, i = i in a ? [i] : i.match(fe) || [])), n = i.length;
                for (; n--;) delete a[i[n]]
            }
        },
        hasData: function(e) {
            return !J.isEmptyObject(this.cache[e[this.expando]] || {})
        },
        discard: function(e) {
            e[this.expando] && delete this.cache[e[this.expando]]
        }
    };
    var ve = new s,
        ye = new s,
        xe = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
        be = /([A-Z])/g;
    J.extend({
        hasData: function(e) {
            return ye.hasData(e) || ve.hasData(e)
        },
        data: function(e, t, n) {
            return ye.access(e, t, n)
        },
        removeData: function(e, t) {
            ye.remove(e, t)
        },
        _data: function(e, t, n) {
            return ve.access(e, t, n)
        },
        _removeData: function(e, t) {
            ve.remove(e, t)
        }
    }), J.fn.extend({
        data: function(e, t) {
            var n, i, r, o = this[0],
                a = o && o.attributes;
            if (void 0 === e) {
                if (this.length && (r = ye.get(o), 1 === o.nodeType && !ve.get(o, "hasDataAttrs"))) {
                    for (n = a.length; n--;) a[n] && (i = a[n].name, 0 === i.indexOf("data-") && (i = J.camelCase(i.slice(5)), l(o, i, r[i])));
                    ve.set(o, "hasDataAttrs", !0)
                }
                return r
            }
            return "object" == typeof e ? this.each(function() {
                ye.set(this, e)
            }) : me(this, function(t) {
                var n, i = J.camelCase(e);
                if (o && void 0 === t) {
                    if (n = ye.get(o, e), void 0 !== n) return n;
                    if (n = ye.get(o, i), void 0 !== n) return n;
                    if (n = l(o, i, void 0), void 0 !== n) return n
                } else this.each(function() {
                    var n = ye.get(this, i);
                    ye.set(this, i, t), -1 !== e.indexOf("-") && void 0 !== n && ye.set(this, e, t)
                })
            }, null, t, arguments.length > 1, null, !0)
        },
        removeData: function(e) {
            return this.each(function() {
                ye.remove(this, e)
            })
        }
    }), J.extend({
        queue: function(e, t, n) {
            var i;
            return e ? (t = (t || "fx") + "queue", i = ve.get(e, t), n && (!i || J.isArray(n) ? i = ve.access(e, t, J.makeArray(n)) : i.push(n)), i || []) : void 0
        },
        dequeue: function(e, t) {
            t = t || "fx";
            var n = J.queue(e, t),
                i = n.length,
                r = n.shift(),
                o = J._queueHooks(e, t),
                a = function() {
                    J.dequeue(e, t)
                };
            "inprogress" === r && (r = n.shift(), i--), r && ("fx" === t && n.unshift("inprogress"), delete o.stop, r.call(e, a, o)), !i && o && o.empty.fire()
        },
        _queueHooks: function(e, t) {
            var n = t + "queueHooks";
            return ve.get(e, n) || ve.access(e, n, {
                empty: J.Callbacks("once memory").add(function() {
                    ve.remove(e, [t + "queue", n])
                })
            })
        }
    }), J.fn.extend({
        queue: function(e, t) {
            var n = 2;
            return "string" != typeof e && (t = e, e = "fx", n--), arguments.length < n ? J.queue(this[0], e) : void 0 === t ? this : this.each(function() {
                var n = J.queue(this, e, t);
                J._queueHooks(this, e), "fx" === e && "inprogress" !== n[0] && J.dequeue(this, e)
            })
        },
        dequeue: function(e) {
            return this.each(function() {
                J.dequeue(this, e)
            })
        },
        clearQueue: function(e) {
            return this.queue(e || "fx", [])
        },
        promise: function(e, t) {
            var n, i = 1,
                r = J.Deferred(),
                o = this,
                a = this.length,
                s = function() {
                    --i || r.resolveWith(o, [o])
                };
            for ("string" != typeof e && (t = e, e = void 0), e = e || "fx"; a--;) n = ve.get(o[a], e + "queueHooks"), n && n.empty && (i++, n.empty.add(s));
            return s(), r.promise(t)
        }
    });
    var we = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
        _e = ["Top", "Right", "Bottom", "Left"],
        Ce = function(e, t) {
            return e = t || e, "none" === J.css(e, "display") || !J.contains(e.ownerDocument, e)
        },
        Te = /^(?:checkbox|radio)$/i;
    ! function() {
        var e = Z.createDocumentFragment(),
            t = e.appendChild(Z.createElement("div")),
            n = Z.createElement("input");
        n.setAttribute("type", "radio"), n.setAttribute("checked", "checked"), n.setAttribute("name", "t"), t.appendChild(n), Q.checkClone = t.cloneNode(!0).cloneNode(!0).lastChild.checked, t.innerHTML = "<textarea>x</textarea>", Q.noCloneChecked = !!t.cloneNode(!0).lastChild.defaultValue
    }();
    var Fe = "undefined";
    Q.focusinBubbles = "onfocusin" in e;
    var Ee = /^key/,
        ke = /^(?:mouse|pointer|contextmenu)|click/,
        De = /^(?:focusinfocus|focusoutblur)$/,
        Se = /^([^.]*)(?:\.(.+)|)$/;
    J.event = {
        global: {},
        add: function(e, t, n, i, r) {
            var o, a, s, l, u, c, d, h, f, p, g, m = ve.get(e);
            if (m)
                for (n.handler && (o = n, n = o.handler, r = o.selector), n.guid || (n.guid = J.guid++), (l = m.events) || (l = m.events = {}), (a = m.handle) || (a = m.handle = function(t) {
                        return typeof J !== Fe && J.event.triggered !== t.type ? J.event.dispatch.apply(e, arguments) : void 0
                    }), t = (t || "").match(fe) || [""], u = t.length; u--;) s = Se.exec(t[u]) || [], f = g = s[1], p = (s[2] || "").split(".").sort(), f && (d = J.event.special[f] || {}, f = (r ? d.delegateType : d.bindType) || f, d = J.event.special[f] || {}, c = J.extend({
                    type: f,
                    origType: g,
                    data: i,
                    handler: n,
                    guid: n.guid,
                    selector: r,
                    needsContext: r && J.expr.match.needsContext.test(r),
                    namespace: p.join(".")
                }, o), (h = l[f]) || (h = l[f] = [], h.delegateCount = 0, d.setup && d.setup.call(e, i, p, a) !== !1 || e.addEventListener && e.addEventListener(f, a, !1)), d.add && (d.add.call(e, c), c.handler.guid || (c.handler.guid = n.guid)), r ? h.splice(h.delegateCount++, 0, c) : h.push(c), J.event.global[f] = !0)
        },
        remove: function(e, t, n, i, r) {
            var o, a, s, l, u, c, d, h, f, p, g, m = ve.hasData(e) && ve.get(e);
            if (m && (l = m.events)) {
                for (t = (t || "").match(fe) || [""], u = t.length; u--;)
                    if (s = Se.exec(t[u]) || [], f = g = s[1], p = (s[2] || "").split(".").sort(), f) {
                        for (d = J.event.special[f] || {}, f = (i ? d.delegateType : d.bindType) || f, h = l[f] || [], s = s[2] && new RegExp("(^|\\.)" + p.join("\\.(?:.*\\.|)") + "(\\.|$)"), a = o = h.length; o--;) c = h[o], !r && g !== c.origType || n && n.guid !== c.guid || s && !s.test(c.namespace) || i && i !== c.selector && ("**" !== i || !c.selector) || (h.splice(o, 1), c.selector && h.delegateCount--, d.remove && d.remove.call(e, c));
                        a && !h.length && (d.teardown && d.teardown.call(e, p, m.handle) !== !1 || J.removeEvent(e, f, m.handle), delete l[f])
                    } else
                        for (f in l) J.event.remove(e, f + t[u], n, i, !0);
                J.isEmptyObject(l) && (delete m.handle, ve.remove(e, "events"))
            }
        },
        trigger: function(t, n, i, r) {
            var o, a, s, l, u, c, d, h = [i || Z],
                f = Y.call(t, "type") ? t.type : t,
                p = Y.call(t, "namespace") ? t.namespace.split(".") : [];
            if (a = s = i = i || Z, 3 !== i.nodeType && 8 !== i.nodeType && !De.test(f + J.event.triggered) && (f.indexOf(".") >= 0 && (p = f.split("."), f = p.shift(), p.sort()), u = f.indexOf(":") < 0 && "on" + f, t = t[J.expando] ? t : new J.Event(f, "object" == typeof t && t), t.isTrigger = r ? 2 : 3, t.namespace = p.join("."), t.namespace_re = t.namespace ? new RegExp("(^|\\.)" + p.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, t.result = void 0, t.target || (t.target = i), n = null == n ? [t] : J.makeArray(n, [t]), d = J.event.special[f] || {}, r || !d.trigger || d.trigger.apply(i, n) !== !1)) {
                if (!r && !d.noBubble && !J.isWindow(i)) {
                    for (l = d.delegateType || f, De.test(l + f) || (a = a.parentNode); a; a = a.parentNode) h.push(a), s = a;
                    s === (i.ownerDocument || Z) && h.push(s.defaultView || s.parentWindow || e)
                }
                for (o = 0;
                    (a = h[o++]) && !t.isPropagationStopped();) t.type = o > 1 ? l : d.bindType || f, c = (ve.get(a, "events") || {})[t.type] && ve.get(a, "handle"), c && c.apply(a, n), c = u && a[u], c && c.apply && J.acceptData(a) && (t.result = c.apply(a, n), t.result === !1 && t.preventDefault());
                return t.type = f, r || t.isDefaultPrevented() || d._default && d._default.apply(h.pop(), n) !== !1 || !J.acceptData(i) || u && J.isFunction(i[f]) && !J.isWindow(i) && (s = i[u], s && (i[u] = null), J.event.triggered = f, i[f](), J.event.triggered = void 0, s && (i[u] = s)), t.result
            }
        },
        dispatch: function(e) {
            e = J.event.fix(e);
            var t, n, i, r, o, a = [],
                s = W.call(arguments),
                l = (ve.get(this, "events") || {})[e.type] || [],
                u = J.event.special[e.type] || {};
            if (s[0] = e, e.delegateTarget = this, !u.preDispatch || u.preDispatch.call(this, e) !== !1) {
                for (a = J.event.handlers.call(this, e, l), t = 0;
                    (r = a[t++]) && !e.isPropagationStopped();)
                    for (e.currentTarget = r.elem, n = 0;
                        (o = r.handlers[n++]) && !e.isImmediatePropagationStopped();)(!e.namespace_re || e.namespace_re.test(o.namespace)) && (e.handleObj = o, e.data = o.data, i = ((J.event.special[o.origType] || {}).handle || o.handler).apply(r.elem, s), void 0 !== i && (e.result = i) === !1 && (e.preventDefault(), e.stopPropagation()));
                return u.postDispatch && u.postDispatch.call(this, e), e.result
            }
        },
        handlers: function(e, t) {
            var n, i, r, o, a = [],
                s = t.delegateCount,
                l = e.target;
            if (s && l.nodeType && (!e.button || "click" !== e.type))
                for (; l !== this; l = l.parentNode || this)
                    if (l.disabled !== !0 || "click" !== e.type) {
                        for (i = [], n = 0; s > n; n++) o = t[n], r = o.selector + " ", void 0 === i[r] && (i[r] = o.needsContext ? J(r, this).index(l) >= 0 : J.find(r, this, null, [l]).length), i[r] && i.push(o);
                        i.length && a.push({
                            elem: l,
                            handlers: i
                        })
                    }
            return s < t.length && a.push({
                elem: this,
                handlers: t.slice(s)
            }), a
        },
        props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
        fixHooks: {},
        keyHooks: {
            props: "char charCode key keyCode".split(" "),
            filter: function(e, t) {
                return null == e.which && (e.which = null != t.charCode ? t.charCode : t.keyCode), e
            }
        },
        mouseHooks: {
            props: "button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
            filter: function(e, t) {
                var n, i, r, o = t.button;
                return null == e.pageX && null != t.clientX && (n = e.target.ownerDocument || Z, i = n.documentElement, r = n.body, e.pageX = t.clientX + (i && i.scrollLeft || r && r.scrollLeft || 0) - (i && i.clientLeft || r && r.clientLeft || 0), e.pageY = t.clientY + (i && i.scrollTop || r && r.scrollTop || 0) - (i && i.clientTop || r && r.clientTop || 0)), e.which || void 0 === o || (e.which = 1 & o ? 1 : 2 & o ? 3 : 4 & o ? 2 : 0), e
            }
        },
        fix: function(e) {
            if (e[J.expando]) return e;
            var t, n, i, r = e.type,
                o = e,
                a = this.fixHooks[r];
            for (a || (this.fixHooks[r] = a = ke.test(r) ? this.mouseHooks : Ee.test(r) ? this.keyHooks : {}), i = a.props ? this.props.concat(a.props) : this.props, e = new J.Event(o), t = i.length; t--;) n = i[t], e[n] = o[n];
            return e.target || (e.target = Z), 3 === e.target.nodeType && (e.target = e.target.parentNode), a.filter ? a.filter(e, o) : e
        },
        special: {
            load: {
                noBubble: !0
            },
            focus: {
                trigger: function() {
                    return this !== d() && this.focus ? (this.focus(), !1) : void 0
                },
                delegateType: "focusin"
            },
            blur: {
                trigger: function() {
                    return this === d() && this.blur ? (this.blur(), !1) : void 0
                },
                delegateType: "focusout"
            },
            click: {
                trigger: function() {
                    return "checkbox" === this.type && this.click && J.nodeName(this, "input") ? (this.click(), !1) : void 0
                },
                _default: function(e) {
                    return J.nodeName(e.target, "a")
                }
            },
            beforeunload: {
                postDispatch: function(e) {
                    void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result)
                }
            }
        },
        simulate: function(e, t, n, i) {
            var r = J.extend(new J.Event, n, {
                type: e,
                isSimulated: !0,
                originalEvent: {}
            });
            i ? J.event.trigger(r, null, t) : J.event.dispatch.call(t, r), r.isDefaultPrevented() && n.preventDefault()
        }
    }, J.removeEvent = function(e, t, n) {
        e.removeEventListener && e.removeEventListener(t, n, !1)
    }, J.Event = function(e, t) {
        return this instanceof J.Event ? (e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && e.returnValue === !1 ? u : c) : this.type = e, t && J.extend(this, t), this.timeStamp = e && e.timeStamp || J.now(), void(this[J.expando] = !0)) : new J.Event(e, t)
    }, J.Event.prototype = {
        isDefaultPrevented: c,
        isPropagationStopped: c,
        isImmediatePropagationStopped: c,
        preventDefault: function() {
            var e = this.originalEvent;
            this.isDefaultPrevented = u, e && e.preventDefault && e.preventDefault()
        },
        stopPropagation: function() {
            var e = this.originalEvent;
            this.isPropagationStopped = u, e && e.stopPropagation && e.stopPropagation()
        },
        stopImmediatePropagation: function() {
            var e = this.originalEvent;
            this.isImmediatePropagationStopped = u, e && e.stopImmediatePropagation && e.stopImmediatePropagation(), this.stopPropagation()
        }
    }, J.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout"
    }, function(e, t) {
        J.event.special[e] = {
            delegateType: t,
            bindType: t,
            handle: function(e) {
                var n, i = this,
                    r = e.relatedTarget,
                    o = e.handleObj;
                return (!r || r !== i && !J.contains(i, r)) && (e.type = o.origType, n = o.handler.apply(this, arguments), e.type = t), n
            }
        }
    }), Q.focusinBubbles || J.each({
        focus: "focusin",
        blur: "focusout"
    }, function(e, t) {
        var n = function(e) {
            J.event.simulate(t, e.target, J.event.fix(e), !0)
        };
        J.event.special[t] = {
            setup: function() {
                var i = this.ownerDocument || this,
                    r = ve.access(i, t);
                r || i.addEventListener(e, n, !0), ve.access(i, t, (r || 0) + 1)
            },
            teardown: function() {
                var i = this.ownerDocument || this,
                    r = ve.access(i, t) - 1;
                r ? ve.access(i, t, r) : (i.removeEventListener(e, n, !0), ve.remove(i, t))
            }
        }
    }), J.fn.extend({
        on: function(e, t, n, i, r) {
            var o, a;
            if ("object" == typeof e) {
                "string" != typeof t && (n = n || t, t = void 0);
                for (a in e) this.on(a, t, n, e[a], r);
                return this
            }
            if (null == n && null == i ? (i = t, n = t = void 0) : null == i && ("string" == typeof t ? (i = n, n = void 0) : (i = n, n = t, t = void 0)), i === !1) i = c;
            else if (!i) return this;
            return 1 === r && (o = i, i = function(e) {
                return J().off(e), o.apply(this, arguments)
            }, i.guid = o.guid || (o.guid = J.guid++)), this.each(function() {
                J.event.add(this, e, i, n, t)
            })
        },
        one: function(e, t, n, i) {
            return this.on(e, t, n, i, 1)
        },
        off: function(e, t, n) {
            var i, r;
            if (e && e.preventDefault && e.handleObj) return i = e.handleObj, J(e.delegateTarget).off(i.namespace ? i.origType + "." + i.namespace : i.origType, i.selector, i.handler), this;
            if ("object" == typeof e) {
                for (r in e) this.off(r, t, e[r]);
                return this
            }
            return (t === !1 || "function" == typeof t) && (n = t, t = void 0), n === !1 && (n = c), this.each(function() {
                J.event.remove(this, e, n, t)
            })
        },
        trigger: function(e, t) {
            return this.each(function() {
                J.event.trigger(e, t, this)
            })
        },
        triggerHandler: function(e, t) {
            var n = this[0];
            return n ? J.event.trigger(e, t, n, !0) : void 0
        }
    });
    var je = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
        Ae = /<([\w:]+)/,
        $e = /<|&#?\w+;/,
        Ne = /<(?:script|style|link)/i,
        Pe = /checked\s*(?:[^=]|=\s*.checked.)/i,
        Oe = /^$|\/(?:java|ecma)script/i,
        qe = /^true\/(.*)/,
        Le = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
        Me = {
            option: [1, "<select multiple='multiple'>", "</select>"],
            thead: [1, "<table>", "</table>"],
            col: [2, "<table><colgroup>", "</colgroup></table>"],
            tr: [2, "<table><tbody>", "</tbody></table>"],
            td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
            _default: [0, "", ""]
        };
    Me.optgroup = Me.option, Me.tbody = Me.tfoot = Me.colgroup = Me.caption = Me.thead, Me.th = Me.td, J.extend({
        clone: function(e, t, n) {
            var i, r, o, a, s = e.cloneNode(!0),
                l = J.contains(e.ownerDocument, e);
            if (!(Q.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || J.isXMLDoc(e)))
                for (a = v(s), o = v(e), i = 0, r = o.length; r > i; i++) y(o[i], a[i]);
            if (t)
                if (n)
                    for (o = o || v(e), a = a || v(s), i = 0, r = o.length; r > i; i++) m(o[i], a[i]);
                else m(e, s);
            return a = v(s, "script"), a.length > 0 && g(a, !l && v(e, "script")), s
        },
        buildFragment: function(e, t, n, i) {
            for (var r, o, a, s, l, u, c = t.createDocumentFragment(), d = [], h = 0, f = e.length; f > h; h++)
                if (r = e[h], r || 0 === r)
                    if ("object" === J.type(r)) J.merge(d, r.nodeType ? [r] : r);
                    else if ($e.test(r)) {
                for (o = o || c.appendChild(t.createElement("div")), a = (Ae.exec(r) || ["", ""])[1].toLowerCase(), s = Me[a] || Me._default, o.innerHTML = s[1] + r.replace(je, "<$1></$2>") + s[2], u = s[0]; u--;) o = o.lastChild;
                J.merge(d, o.childNodes), o = c.firstChild, o.textContent = ""
            } else d.push(t.createTextNode(r));
            for (c.textContent = "", h = 0; r = d[h++];)
                if ((!i || -1 === J.inArray(r, i)) && (l = J.contains(r.ownerDocument, r), o = v(c.appendChild(r), "script"), l && g(o), n))
                    for (u = 0; r = o[u++];) Oe.test(r.type || "") && n.push(r);
            return c
        },
        cleanData: function(e) {
            for (var t, n, i, r, o = J.event.special, a = 0; void 0 !== (n = e[a]); a++) {
                if (J.acceptData(n) && (r = n[ve.expando], r && (t = ve.cache[r]))) {
                    if (t.events)
                        for (i in t.events) o[i] ? J.event.remove(n, i) : J.removeEvent(n, i, t.handle);
                    ve.cache[r] && delete ve.cache[r]
                }
                delete ye.cache[n[ye.expando]]
            }
        }
    }), J.fn.extend({
        text: function(e) {
            return me(this, function(e) {
                return void 0 === e ? J.text(this) : this.empty().each(function() {
                    (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) && (this.textContent = e)
                })
            }, null, e, arguments.length)
        },
        append: function() {
            return this.domManip(arguments, function(e) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var t = h(this, e);
                    t.appendChild(e)
                }
            })
        },
        prepend: function() {
            return this.domManip(arguments, function(e) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var t = h(this, e);
                    t.insertBefore(e, t.firstChild)
                }
            })
        },
        before: function() {
            return this.domManip(arguments, function(e) {
                this.parentNode && this.parentNode.insertBefore(e, this)
            })
        },
        after: function() {
            return this.domManip(arguments, function(e) {
                this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
            })
        },
        remove: function(e, t) {
            for (var n, i = e ? J.filter(e, this) : this, r = 0; null != (n = i[r]); r++) t || 1 !== n.nodeType || J.cleanData(v(n)), n.parentNode && (t && J.contains(n.ownerDocument, n) && g(v(n, "script")), n.parentNode.removeChild(n));
            return this
        },
        empty: function() {
            for (var e, t = 0; null != (e = this[t]); t++) 1 === e.nodeType && (J.cleanData(v(e, !1)), e.textContent = "");
            return this
        },
        clone: function(e, t) {
            return e = null == e ? !1 : e, t = null == t ? e : t, this.map(function() {
                return J.clone(this, e, t)
            })
        },
        html: function(e) {
            return me(this, function(e) {
                var t = this[0] || {},
                    n = 0,
                    i = this.length;
                if (void 0 === e && 1 === t.nodeType) return t.innerHTML;
                if ("string" == typeof e && !Ne.test(e) && !Me[(Ae.exec(e) || ["", ""])[1].toLowerCase()]) {
                    e = e.replace(je, "<$1></$2>");
                    try {
                        for (; i > n; n++) t = this[n] || {}, 1 === t.nodeType && (J.cleanData(v(t, !1)), t.innerHTML = e);
                        t = 0
                    } catch (r) {}
                }
                t && this.empty().append(e)
            }, null, e, arguments.length)
        },
        replaceWith: function() {
            var e = arguments[0];
            return this.domManip(arguments, function(t) {
                e = this.parentNode, J.cleanData(v(this)), e && e.replaceChild(t, this)
            }), e && (e.length || e.nodeType) ? this : this.remove()
        },
        detach: function(e) {
            return this.remove(e, !0)
        },
        domManip: function(e, t) {
            e = B.apply([], e);
            var n, i, r, o, a, s, l = 0,
                u = this.length,
                c = this,
                d = u - 1,
                h = e[0],
                g = J.isFunction(h);
            if (g || u > 1 && "string" == typeof h && !Q.checkClone && Pe.test(h)) return this.each(function(n) {
                var i = c.eq(n);
                g && (e[0] = h.call(this, n, i.html())), i.domManip(e, t)
            });
            if (u && (n = J.buildFragment(e, this[0].ownerDocument, !1, this), i = n.firstChild, 1 === n.childNodes.length && (n = i), i)) {
                for (r = J.map(v(n, "script"), f), o = r.length; u > l; l++) a = n, l !== d && (a = J.clone(a, !0, !0), o && J.merge(r, v(a, "script"))), t.call(this[l], a, l);
                if (o)
                    for (s = r[r.length - 1].ownerDocument, J.map(r, p), l = 0; o > l; l++) a = r[l], Oe.test(a.type || "") && !ve.access(a, "globalEval") && J.contains(s, a) && (a.src ? J._evalUrl && J._evalUrl(a.src) : J.globalEval(a.textContent.replace(Le, "")))
            }
            return this
        }
    }), J.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function(e, t) {
        J.fn[e] = function(e) {
            for (var n, i = [], r = J(e), o = r.length - 1, a = 0; o >= a; a++) n = a === o ? this : this.clone(!0), J(r[a])[t](n), X.apply(i, n.get());
            return this.pushStack(i)
        }
    });
    var ze, Re = {},
        He = /^margin/,
        Ie = new RegExp("^(" + we + ")(?!px)[a-z%]+$", "i"),
        We = function(t) {
            return t.ownerDocument.defaultView.opener ? t.ownerDocument.defaultView.getComputedStyle(t, null) : e.getComputedStyle(t, null)
        };
    ! function() {
        function t() {
            a.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute", a.innerHTML = "", r.appendChild(o);
            var t = e.getComputedStyle(a, null);
            n = "1%" !== t.top, i = "4px" === t.width, r.removeChild(o)
        }
        var n, i, r = Z.documentElement,
            o = Z.createElement("div"),
            a = Z.createElement("div");
        a.style && (a.style.backgroundClip = "content-box", a.cloneNode(!0).style.backgroundClip = "", Q.clearCloneStyle = "content-box" === a.style.backgroundClip, o.style.cssText = "border:0;width:0;height:0;top:0;left:-9999px;margin-top:1px;position:absolute", o.appendChild(a), e.getComputedStyle && J.extend(Q, {
            pixelPosition: function() {
                return t(), n
            },
            boxSizingReliable: function() {
                return null == i && t(), i
            },
            reliableMarginRight: function() {
                var t, n = a.appendChild(Z.createElement("div"));
                return n.style.cssText = a.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0", n.style.marginRight = n.style.width = "0", a.style.width = "1px", r.appendChild(o), t = !parseFloat(e.getComputedStyle(n, null).marginRight), r.removeChild(o), a.removeChild(n), t
            }
        }))
    }(), J.swap = function(e, t, n, i) {
        var r, o, a = {};
        for (o in t) a[o] = e.style[o], e.style[o] = t[o];
        r = n.apply(e, i || []);
        for (o in t) e.style[o] = a[o];
        return r
    };
    var Be = /^(none|table(?!-c[ea]).+)/,
        Xe = new RegExp("^(" + we + ")(.*)$", "i"),
        Ve = new RegExp("^([+-])=(" + we + ")", "i"),
        Ue = {
            position: "absolute",
            visibility: "hidden",
            display: "block"
        },
        Ge = {
            letterSpacing: "0",
            fontWeight: "400"
        },
        Ye = ["Webkit", "O", "Moz", "ms"];
    J.extend({
        cssHooks: {
            opacity: {
                get: function(e, t) {
                    if (t) {
                        var n = w(e, "opacity");
                        return "" === n ? "1" : n
                    }
                }
            }
        },
        cssNumber: {
            columnCount: !0,
            fillOpacity: !0,
            flexGrow: !0,
            flexShrink: !0,
            fontWeight: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {
            "float": "cssFloat"
        },
        style: function(e, t, n, i) {
            if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                var r, o, a, s = J.camelCase(t),
                    l = e.style;
                return t = J.cssProps[s] || (J.cssProps[s] = C(l, s)), a = J.cssHooks[t] || J.cssHooks[s], void 0 === n ? a && "get" in a && void 0 !== (r = a.get(e, !1, i)) ? r : l[t] : (o = typeof n, "string" === o && (r = Ve.exec(n)) && (n = (r[1] + 1) * r[2] + parseFloat(J.css(e, t)), o = "number"), null != n && n === n && ("number" !== o || J.cssNumber[s] || (n += "px"), Q.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (l[t] = "inherit"), a && "set" in a && void 0 === (n = a.set(e, n, i)) || (l[t] = n)), void 0)
            }
        },
        css: function(e, t, n, i) {
            var r, o, a, s = J.camelCase(t);
            return t = J.cssProps[s] || (J.cssProps[s] = C(e.style, s)), a = J.cssHooks[t] || J.cssHooks[s], a && "get" in a && (r = a.get(e, !0, n)), void 0 === r && (r = w(e, t, i)), "normal" === r && t in Ge && (r = Ge[t]), "" === n || n ? (o = parseFloat(r), n === !0 || J.isNumeric(o) ? o || 0 : r) : r
        }
    }), J.each(["height", "width"], function(e, t) {
        J.cssHooks[t] = {
            get: function(e, n, i) {
                return n ? Be.test(J.css(e, "display")) && 0 === e.offsetWidth ? J.swap(e, Ue, function() {
                    return E(e, t, i)
                }) : E(e, t, i) : void 0
            },
            set: function(e, n, i) {
                var r = i && We(e);
                return T(e, n, i ? F(e, t, i, "border-box" === J.css(e, "boxSizing", !1, r), r) : 0)
            }
        }
    }), J.cssHooks.marginRight = _(Q.reliableMarginRight, function(e, t) {
        return t ? J.swap(e, {
            display: "inline-block"
        }, w, [e, "marginRight"]) : void 0
    }), J.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function(e, t) {
        J.cssHooks[e + t] = {
            expand: function(n) {
                for (var i = 0, r = {}, o = "string" == typeof n ? n.split(" ") : [n]; 4 > i; i++) r[e + _e[i] + t] = o[i] || o[i - 2] || o[0];
                return r
            }
        }, He.test(e) || (J.cssHooks[e + t].set = T)
    }), J.fn.extend({
        css: function(e, t) {
            return me(this, function(e, t, n) {
                var i, r, o = {},
                    a = 0;
                if (J.isArray(t)) {
                    for (i = We(e), r = t.length; r > a; a++) o[t[a]] = J.css(e, t[a], !1, i);
                    return o
                }
                return void 0 !== n ? J.style(e, t, n) : J.css(e, t)
            }, e, t, arguments.length > 1)
        },
        show: function() {
            return k(this, !0)
        },
        hide: function() {
            return k(this)
        },
        toggle: function(e) {
            return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function() {
                Ce(this) ? J(this).show() : J(this).hide()
            })
        }
    }), J.Tween = D, D.prototype = {
        constructor: D,
        init: function(e, t, n, i, r, o) {
            this.elem = e, this.prop = n, this.easing = r || "swing", this.options = t, this.start = this.now = this.cur(), this.end = i, this.unit = o || (J.cssNumber[n] ? "" : "px")
        },
        cur: function() {
            var e = D.propHooks[this.prop];
            return e && e.get ? e.get(this) : D.propHooks._default.get(this)
        },
        run: function(e) {
            var t, n = D.propHooks[this.prop];
            return this.pos = t = this.options.duration ? J.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : D.propHooks._default.set(this), this
        }
    }, D.prototype.init.prototype = D.prototype, D.propHooks = {
        _default: {
            get: function(e) {
                var t;
                return null == e.elem[e.prop] || e.elem.style && null != e.elem.style[e.prop] ? (t = J.css(e.elem, e.prop, ""), t && "auto" !== t ? t : 0) : e.elem[e.prop]
            },
            set: function(e) {
                J.fx.step[e.prop] ? J.fx.step[e.prop](e) : e.elem.style && (null != e.elem.style[J.cssProps[e.prop]] || J.cssHooks[e.prop]) ? J.style(e.elem, e.prop, e.now + e.unit) : e.elem[e.prop] = e.now
            }
        }
    }, D.propHooks.scrollTop = D.propHooks.scrollLeft = {
        set: function(e) {
            e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
        }
    }, J.easing = {
        linear: function(e) {
            return e
        },
        swing: function(e) {
            return .5 - Math.cos(e * Math.PI) / 2
        }
    }, J.fx = D.prototype.init, J.fx.step = {};
    var Qe, Ze, Ke = /^(?:toggle|show|hide)$/,
        Je = new RegExp("^(?:([+-])=|)(" + we + ")([a-z%]*)$", "i"),
        et = /queueHooks$/,
        tt = [$],
        nt = {
            "*": [function(e, t) {
                var n = this.createTween(e, t),
                    i = n.cur(),
                    r = Je.exec(t),
                    o = r && r[3] || (J.cssNumber[e] ? "" : "px"),
                    a = (J.cssNumber[e] || "px" !== o && +i) && Je.exec(J.css(n.elem, e)),
                    s = 1,
                    l = 20;
                if (a && a[3] !== o) {
                    o = o || a[3], r = r || [], a = +i || 1;
                    do s = s || ".5", a /= s, J.style(n.elem, e, a + o); while (s !== (s = n.cur() / i) && 1 !== s && --l)
                }
                return r && (a = n.start = +a || +i || 0, n.unit = o, n.end = r[1] ? a + (r[1] + 1) * r[2] : +r[2]), n
            }]
        };
    J.Animation = J.extend(P, {
            tweener: function(e, t) {
                J.isFunction(e) ? (t = e, e = ["*"]) : e = e.split(" ");
                for (var n, i = 0, r = e.length; r > i; i++) n = e[i], nt[n] = nt[n] || [], nt[n].unshift(t)
            },
            prefilter: function(e, t) {
                t ? tt.unshift(e) : tt.push(e)
            }
        }), J.speed = function(e, t, n) {
            var i = e && "object" == typeof e ? J.extend({}, e) : {
                complete: n || !n && t || J.isFunction(e) && e,
                duration: e,
                easing: n && t || t && !J.isFunction(t) && t
            };
            return i.duration = J.fx.off ? 0 : "number" == typeof i.duration ? i.duration : i.duration in J.fx.speeds ? J.fx.speeds[i.duration] : J.fx.speeds._default, (null == i.queue || i.queue === !0) && (i.queue = "fx"), i.old = i.complete, i.complete = function() {
                J.isFunction(i.old) && i.old.call(this), i.queue && J.dequeue(this, i.queue)
            }, i
        }, J.fn.extend({
            fadeTo: function(e, t, n, i) {
                return this.filter(Ce).css("opacity", 0).show().end().animate({
                    opacity: t
                }, e, n, i)
            },
            animate: function(e, t, n, i) {
                var r = J.isEmptyObject(e),
                    o = J.speed(t, n, i),
                    a = function() {
                        var t = P(this, J.extend({}, e), o);
                        (r || ve.get(this, "finish")) && t.stop(!0)
                    };
                return a.finish = a, r || o.queue === !1 ? this.each(a) : this.queue(o.queue, a)
            },
            stop: function(e, t, n) {
                var i = function(e) {
                    var t = e.stop;
                    delete e.stop, t(n)
                };
                return "string" != typeof e && (n = t, t = e, e = void 0), t && e !== !1 && this.queue(e || "fx", []), this.each(function() {
                    var t = !0,
                        r = null != e && e + "queueHooks",
                        o = J.timers,
                        a = ve.get(this);
                    if (r) a[r] && a[r].stop && i(a[r]);
                    else
                        for (r in a) a[r] && a[r].stop && et.test(r) && i(a[r]);
                    for (r = o.length; r--;) o[r].elem !== this || null != e && o[r].queue !== e || (o[r].anim.stop(n), t = !1, o.splice(r, 1));
                    (t || !n) && J.dequeue(this, e)
                })
            },
            finish: function(e) {
                return e !== !1 && (e = e || "fx"), this.each(function() {
                    var t, n = ve.get(this),
                        i = n[e + "queue"],
                        r = n[e + "queueHooks"],
                        o = J.timers,
                        a = i ? i.length : 0;
                    for (n.finish = !0, J.queue(this, e, []), r && r.stop && r.stop.call(this, !0),
                        t = o.length; t--;) o[t].elem === this && o[t].queue === e && (o[t].anim.stop(!0), o.splice(t, 1));
                    for (t = 0; a > t; t++) i[t] && i[t].finish && i[t].finish.call(this);
                    delete n.finish
                })
            }
        }), J.each(["toggle", "show", "hide"], function(e, t) {
            var n = J.fn[t];
            J.fn[t] = function(e, i, r) {
                return null == e || "boolean" == typeof e ? n.apply(this, arguments) : this.animate(j(t, !0), e, i, r)
            }
        }), J.each({
            slideDown: j("show"),
            slideUp: j("hide"),
            slideToggle: j("toggle"),
            fadeIn: {
                opacity: "show"
            },
            fadeOut: {
                opacity: "hide"
            },
            fadeToggle: {
                opacity: "toggle"
            }
        }, function(e, t) {
            J.fn[e] = function(e, n, i) {
                return this.animate(t, e, n, i)
            }
        }), J.timers = [], J.fx.tick = function() {
            var e, t = 0,
                n = J.timers;
            for (Qe = J.now(); t < n.length; t++) e = n[t], e() || n[t] !== e || n.splice(t--, 1);
            n.length || J.fx.stop(), Qe = void 0
        }, J.fx.timer = function(e) {
            J.timers.push(e), e() ? J.fx.start() : J.timers.pop()
        }, J.fx.interval = 13, J.fx.start = function() {
            Ze || (Ze = setInterval(J.fx.tick, J.fx.interval))
        }, J.fx.stop = function() {
            clearInterval(Ze), Ze = null
        }, J.fx.speeds = {
            slow: 600,
            fast: 200,
            _default: 400
        }, J.fn.delay = function(e, t) {
            return e = J.fx ? J.fx.speeds[e] || e : e, t = t || "fx", this.queue(t, function(t, n) {
                var i = setTimeout(t, e);
                n.stop = function() {
                    clearTimeout(i)
                }
            })
        },
        function() {
            var e = Z.createElement("input"),
                t = Z.createElement("select"),
                n = t.appendChild(Z.createElement("option"));
            e.type = "checkbox", Q.checkOn = "" !== e.value, Q.optSelected = n.selected, t.disabled = !0, Q.optDisabled = !n.disabled, e = Z.createElement("input"), e.value = "t", e.type = "radio", Q.radioValue = "t" === e.value
        }();
    var it, rt, ot = J.expr.attrHandle;
    J.fn.extend({
        attr: function(e, t) {
            return me(this, J.attr, e, t, arguments.length > 1)
        },
        removeAttr: function(e) {
            return this.each(function() {
                J.removeAttr(this, e)
            })
        }
    }), J.extend({
        attr: function(e, t, n) {
            var i, r, o = e.nodeType;
            if (e && 3 !== o && 8 !== o && 2 !== o) return typeof e.getAttribute === Fe ? J.prop(e, t, n) : (1 === o && J.isXMLDoc(e) || (t = t.toLowerCase(), i = J.attrHooks[t] || (J.expr.match.bool.test(t) ? rt : it)), void 0 === n ? i && "get" in i && null !== (r = i.get(e, t)) ? r : (r = J.find.attr(e, t), null == r ? void 0 : r) : null !== n ? i && "set" in i && void 0 !== (r = i.set(e, n, t)) ? r : (e.setAttribute(t, n + ""), n) : void J.removeAttr(e, t))
        },
        removeAttr: function(e, t) {
            var n, i, r = 0,
                o = t && t.match(fe);
            if (o && 1 === e.nodeType)
                for (; n = o[r++];) i = J.propFix[n] || n, J.expr.match.bool.test(n) && (e[i] = !1), e.removeAttribute(n)
        },
        attrHooks: {
            type: {
                set: function(e, t) {
                    if (!Q.radioValue && "radio" === t && J.nodeName(e, "input")) {
                        var n = e.value;
                        return e.setAttribute("type", t), n && (e.value = n), t
                    }
                }
            }
        }
    }), rt = {
        set: function(e, t, n) {
            return t === !1 ? J.removeAttr(e, n) : e.setAttribute(n, n), n
        }
    }, J.each(J.expr.match.bool.source.match(/\w+/g), function(e, t) {
        var n = ot[t] || J.find.attr;
        ot[t] = function(e, t, i) {
            var r, o;
            return i || (o = ot[t], ot[t] = r, r = null != n(e, t, i) ? t.toLowerCase() : null, ot[t] = o), r
        }
    });
    var at = /^(?:input|select|textarea|button)$/i;
    J.fn.extend({
        prop: function(e, t) {
            return me(this, J.prop, e, t, arguments.length > 1)
        },
        removeProp: function(e) {
            return this.each(function() {
                delete this[J.propFix[e] || e]
            })
        }
    }), J.extend({
        propFix: {
            "for": "htmlFor",
            "class": "className"
        },
        prop: function(e, t, n) {
            var i, r, o, a = e.nodeType;
            if (e && 3 !== a && 8 !== a && 2 !== a) return o = 1 !== a || !J.isXMLDoc(e), o && (t = J.propFix[t] || t, r = J.propHooks[t]), void 0 !== n ? r && "set" in r && void 0 !== (i = r.set(e, n, t)) ? i : e[t] = n : r && "get" in r && null !== (i = r.get(e, t)) ? i : e[t]
        },
        propHooks: {
            tabIndex: {
                get: function(e) {
                    return e.hasAttribute("tabindex") || at.test(e.nodeName) || e.href ? e.tabIndex : -1
                }
            }
        }
    }), Q.optSelected || (J.propHooks.selected = {
        get: function(e) {
            var t = e.parentNode;
            return t && t.parentNode && t.parentNode.selectedIndex, null
        }
    }), J.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
        J.propFix[this.toLowerCase()] = this
    });
    var st = /[\t\r\n\f]/g;
    J.fn.extend({
        addClass: function(e) {
            var t, n, i, r, o, a, s = "string" == typeof e && e,
                l = 0,
                u = this.length;
            if (J.isFunction(e)) return this.each(function(t) {
                J(this).addClass(e.call(this, t, this.className))
            });
            if (s)
                for (t = (e || "").match(fe) || []; u > l; l++)
                    if (n = this[l], i = 1 === n.nodeType && (n.className ? (" " + n.className + " ").replace(st, " ") : " ")) {
                        for (o = 0; r = t[o++];) i.indexOf(" " + r + " ") < 0 && (i += r + " ");
                        a = J.trim(i), n.className !== a && (n.className = a)
                    }
            return this
        },
        removeClass: function(e) {
            var t, n, i, r, o, a, s = 0 === arguments.length || "string" == typeof e && e,
                l = 0,
                u = this.length;
            if (J.isFunction(e)) return this.each(function(t) {
                J(this).removeClass(e.call(this, t, this.className))
            });
            if (s)
                for (t = (e || "").match(fe) || []; u > l; l++)
                    if (n = this[l], i = 1 === n.nodeType && (n.className ? (" " + n.className + " ").replace(st, " ") : "")) {
                        for (o = 0; r = t[o++];)
                            for (; i.indexOf(" " + r + " ") >= 0;) i = i.replace(" " + r + " ", " ");
                        a = e ? J.trim(i) : "", n.className !== a && (n.className = a)
                    }
            return this
        },
        toggleClass: function(e, t) {
            var n = typeof e;
            return "boolean" == typeof t && "string" === n ? t ? this.addClass(e) : this.removeClass(e) : this.each(J.isFunction(e) ? function(n) {
                J(this).toggleClass(e.call(this, n, this.className, t), t)
            } : function() {
                if ("string" === n)
                    for (var t, i = 0, r = J(this), o = e.match(fe) || []; t = o[i++];) r.hasClass(t) ? r.removeClass(t) : r.addClass(t);
                else(n === Fe || "boolean" === n) && (this.className && ve.set(this, "__className__", this.className), this.className = this.className || e === !1 ? "" : ve.get(this, "__className__") || "")
            })
        },
        hasClass: function(e) {
            for (var t = " " + e + " ", n = 0, i = this.length; i > n; n++)
                if (1 === this[n].nodeType && (" " + this[n].className + " ").replace(st, " ").indexOf(t) >= 0) return !0;
            return !1
        }
    });
    var lt = /\r/g;
    J.fn.extend({
        val: function(e) {
            var t, n, i, r = this[0]; {
                if (arguments.length) return i = J.isFunction(e), this.each(function(n) {
                    var r;
                    1 === this.nodeType && (r = i ? e.call(this, n, J(this).val()) : e, null == r ? r = "" : "number" == typeof r ? r += "" : J.isArray(r) && (r = J.map(r, function(e) {
                        return null == e ? "" : e + ""
                    })), t = J.valHooks[this.type] || J.valHooks[this.nodeName.toLowerCase()], t && "set" in t && void 0 !== t.set(this, r, "value") || (this.value = r))
                });
                if (r) return t = J.valHooks[r.type] || J.valHooks[r.nodeName.toLowerCase()], t && "get" in t && void 0 !== (n = t.get(r, "value")) ? n : (n = r.value, "string" == typeof n ? n.replace(lt, "") : null == n ? "" : n)
            }
        }
    }), J.extend({
        valHooks: {
            option: {
                get: function(e) {
                    var t = J.find.attr(e, "value");
                    return null != t ? t : J.trim(J.text(e))
                }
            },
            select: {
                get: function(e) {
                    for (var t, n, i = e.options, r = e.selectedIndex, o = "select-one" === e.type || 0 > r, a = o ? null : [], s = o ? r + 1 : i.length, l = 0 > r ? s : o ? r : 0; s > l; l++)
                        if (n = i[l], !(!n.selected && l !== r || (Q.optDisabled ? n.disabled : null !== n.getAttribute("disabled")) || n.parentNode.disabled && J.nodeName(n.parentNode, "optgroup"))) {
                            if (t = J(n).val(), o) return t;
                            a.push(t)
                        }
                    return a
                },
                set: function(e, t) {
                    for (var n, i, r = e.options, o = J.makeArray(t), a = r.length; a--;) i = r[a], (i.selected = J.inArray(i.value, o) >= 0) && (n = !0);
                    return n || (e.selectedIndex = -1), o
                }
            }
        }
    }), J.each(["radio", "checkbox"], function() {
        J.valHooks[this] = {
            set: function(e, t) {
                return J.isArray(t) ? e.checked = J.inArray(J(e).val(), t) >= 0 : void 0
            }
        }, Q.checkOn || (J.valHooks[this].get = function(e) {
            return null === e.getAttribute("value") ? "on" : e.value
        })
    }), J.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(e, t) {
        J.fn[t] = function(e, n) {
            return arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t)
        }
    }), J.fn.extend({
        hover: function(e, t) {
            return this.mouseenter(e).mouseleave(t || e)
        },
        bind: function(e, t, n) {
            return this.on(e, null, t, n)
        },
        unbind: function(e, t) {
            return this.off(e, null, t)
        },
        delegate: function(e, t, n, i) {
            return this.on(t, e, n, i)
        },
        undelegate: function(e, t, n) {
            return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n)
        }
    });
    var ut = J.now(),
        ct = /\?/;
    J.parseJSON = function(e) {
        return JSON.parse(e + "")
    }, J.parseXML = function(e) {
        var t, n;
        if (!e || "string" != typeof e) return null;
        try {
            n = new DOMParser, t = n.parseFromString(e, "text/xml")
        } catch (i) {
            t = void 0
        }
        return (!t || t.getElementsByTagName("parsererror").length) && J.error("Invalid XML: " + e), t
    };
    var dt = /#.*$/,
        ht = /([?&])_=[^&]*/,
        ft = /^(.*?):[ \t]*([^\r\n]*)$/gm,
        pt = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
        gt = /^(?:GET|HEAD)$/,
        mt = /^\/\//,
        vt = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,
        yt = {},
        xt = {},
        bt = "*/".concat("*"),
        wt = e.location.href,
        _t = vt.exec(wt.toLowerCase()) || [];
    J.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: wt,
            type: "GET",
            isLocal: pt.test(_t[1]),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": bt,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {
                xml: /xml/,
                html: /html/,
                json: /json/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText",
                json: "responseJSON"
            },
            converters: {
                "* text": String,
                "text html": !0,
                "text json": J.parseJSON,
                "text xml": J.parseXML
            },
            flatOptions: {
                url: !0,
                context: !0
            }
        },
        ajaxSetup: function(e, t) {
            return t ? L(L(e, J.ajaxSettings), t) : L(J.ajaxSettings, e)
        },
        ajaxPrefilter: O(yt),
        ajaxTransport: O(xt),
        ajax: function(e, t) {
            function n(e, t, n, a) {
                var l, c, v, y, b, _ = t;
                2 !== x && (x = 2, s && clearTimeout(s), i = void 0, o = a || "", w.readyState = e > 0 ? 4 : 0, l = e >= 200 && 300 > e || 304 === e, n && (y = M(d, w, n)), y = z(d, y, w, l), l ? (d.ifModified && (b = w.getResponseHeader("Last-Modified"), b && (J.lastModified[r] = b), b = w.getResponseHeader("etag"), b && (J.etag[r] = b)), 204 === e || "HEAD" === d.type ? _ = "nocontent" : 304 === e ? _ = "notmodified" : (_ = y.state, c = y.data, v = y.error, l = !v)) : (v = _, (e || !_) && (_ = "error", 0 > e && (e = 0))), w.status = e, w.statusText = (t || _) + "", l ? p.resolveWith(h, [c, _, w]) : p.rejectWith(h, [w, _, v]), w.statusCode(m), m = void 0, u && f.trigger(l ? "ajaxSuccess" : "ajaxError", [w, d, l ? c : v]), g.fireWith(h, [w, _]), u && (f.trigger("ajaxComplete", [w, d]), --J.active || J.event.trigger("ajaxStop")))
            }
            "object" == typeof e && (t = e, e = void 0), t = t || {};
            var i, r, o, a, s, l, u, c, d = J.ajaxSetup({}, t),
                h = d.context || d,
                f = d.context && (h.nodeType || h.jquery) ? J(h) : J.event,
                p = J.Deferred(),
                g = J.Callbacks("once memory"),
                m = d.statusCode || {},
                v = {},
                y = {},
                x = 0,
                b = "canceled",
                w = {
                    readyState: 0,
                    getResponseHeader: function(e) {
                        var t;
                        if (2 === x) {
                            if (!a)
                                for (a = {}; t = ft.exec(o);) a[t[1].toLowerCase()] = t[2];
                            t = a[e.toLowerCase()]
                        }
                        return null == t ? null : t
                    },
                    getAllResponseHeaders: function() {
                        return 2 === x ? o : null
                    },
                    setRequestHeader: function(e, t) {
                        var n = e.toLowerCase();
                        return x || (e = y[n] = y[n] || e, v[e] = t), this
                    },
                    overrideMimeType: function(e) {
                        return x || (d.mimeType = e), this
                    },
                    statusCode: function(e) {
                        var t;
                        if (e)
                            if (2 > x)
                                for (t in e) m[t] = [m[t], e[t]];
                            else w.always(e[w.status]);
                        return this
                    },
                    abort: function(e) {
                        var t = e || b;
                        return i && i.abort(t), n(0, t), this
                    }
                };
            if (p.promise(w).complete = g.add, w.success = w.done, w.error = w.fail, d.url = ((e || d.url || wt) + "").replace(dt, "").replace(mt, _t[1] + "//"), d.type = t.method || t.type || d.method || d.type, d.dataTypes = J.trim(d.dataType || "*").toLowerCase().match(fe) || [""], null == d.crossDomain && (l = vt.exec(d.url.toLowerCase()), d.crossDomain = !(!l || l[1] === _t[1] && l[2] === _t[2] && (l[3] || ("http:" === l[1] ? "80" : "443")) === (_t[3] || ("http:" === _t[1] ? "80" : "443")))), d.data && d.processData && "string" != typeof d.data && (d.data = J.param(d.data, d.traditional)), q(yt, d, t, w), 2 === x) return w;
            u = J.event && d.global, u && 0 === J.active++ && J.event.trigger("ajaxStart"), d.type = d.type.toUpperCase(), d.hasContent = !gt.test(d.type), r = d.url, d.hasContent || (d.data && (r = d.url += (ct.test(r) ? "&" : "?") + d.data, delete d.data), d.cache === !1 && (d.url = ht.test(r) ? r.replace(ht, "$1_=" + ut++) : r + (ct.test(r) ? "&" : "?") + "_=" + ut++)), d.ifModified && (J.lastModified[r] && w.setRequestHeader("If-Modified-Since", J.lastModified[r]), J.etag[r] && w.setRequestHeader("If-None-Match", J.etag[r])), (d.data && d.hasContent && d.contentType !== !1 || t.contentType) && w.setRequestHeader("Content-Type", d.contentType), w.setRequestHeader("Accept", d.dataTypes[0] && d.accepts[d.dataTypes[0]] ? d.accepts[d.dataTypes[0]] + ("*" !== d.dataTypes[0] ? ", " + bt + "; q=0.01" : "") : d.accepts["*"]);
            for (c in d.headers) w.setRequestHeader(c, d.headers[c]);
            if (d.beforeSend && (d.beforeSend.call(h, w, d) === !1 || 2 === x)) return w.abort();
            b = "abort";
            for (c in {
                    success: 1,
                    error: 1,
                    complete: 1
                }) w[c](d[c]);
            if (i = q(xt, d, t, w)) {
                w.readyState = 1, u && f.trigger("ajaxSend", [w, d]), d.async && d.timeout > 0 && (s = setTimeout(function() {
                    w.abort("timeout")
                }, d.timeout));
                try {
                    x = 1, i.send(v, n)
                } catch (_) {
                    if (!(2 > x)) throw _;
                    n(-1, _)
                }
            } else n(-1, "No Transport");
            return w
        },
        getJSON: function(e, t, n) {
            return J.get(e, t, n, "json")
        },
        getScript: function(e, t) {
            return J.get(e, void 0, t, "script")
        }
    }), J.each(["get", "post"], function(e, t) {
        J[t] = function(e, n, i, r) {
            return J.isFunction(n) && (r = r || i, i = n, n = void 0), J.ajax({
                url: e,
                type: t,
                dataType: r,
                data: n,
                success: i
            })
        }
    }), J._evalUrl = function(e) {
        return J.ajax({
            url: e,
            type: "GET",
            dataType: "script",
            async: !1,
            global: !1,
            "throws": !0
        })
    }, J.fn.extend({
        wrapAll: function(e) {
            var t;
            return J.isFunction(e) ? this.each(function(t) {
                J(this).wrapAll(e.call(this, t))
            }) : (this[0] && (t = J(e, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && t.insertBefore(this[0]), t.map(function() {
                for (var e = this; e.firstElementChild;) e = e.firstElementChild;
                return e
            }).append(this)), this)
        },
        wrapInner: function(e) {
            return this.each(J.isFunction(e) ? function(t) {
                J(this).wrapInner(e.call(this, t))
            } : function() {
                var t = J(this),
                    n = t.contents();
                n.length ? n.wrapAll(e) : t.append(e)
            })
        },
        wrap: function(e) {
            var t = J.isFunction(e);
            return this.each(function(n) {
                J(this).wrapAll(t ? e.call(this, n) : e)
            })
        },
        unwrap: function() {
            return this.parent().each(function() {
                J.nodeName(this, "body") || J(this).replaceWith(this.childNodes)
            }).end()
        }
    }), J.expr.filters.hidden = function(e) {
        return e.offsetWidth <= 0 && e.offsetHeight <= 0
    }, J.expr.filters.visible = function(e) {
        return !J.expr.filters.hidden(e)
    };
    var Ct = /%20/g,
        Tt = /\[\]$/,
        Ft = /\r?\n/g,
        Et = /^(?:submit|button|image|reset|file)$/i,
        kt = /^(?:input|select|textarea|keygen)/i;
    J.param = function(e, t) {
        var n, i = [],
            r = function(e, t) {
                t = J.isFunction(t) ? t() : null == t ? "" : t, i[i.length] = encodeURIComponent(e) + "=" + encodeURIComponent(t)
            };
        if (void 0 === t && (t = J.ajaxSettings && J.ajaxSettings.traditional), J.isArray(e) || e.jquery && !J.isPlainObject(e)) J.each(e, function() {
            r(this.name, this.value)
        });
        else
            for (n in e) R(n, e[n], t, r);
        return i.join("&").replace(Ct, "+")
    }, J.fn.extend({
        serialize: function() {
            return J.param(this.serializeArray())
        },
        serializeArray: function() {
            return this.map(function() {
                var e = J.prop(this, "elements");
                return e ? J.makeArray(e) : this
            }).filter(function() {
                var e = this.type;
                return this.name && !J(this).is(":disabled") && kt.test(this.nodeName) && !Et.test(e) && (this.checked || !Te.test(e))
            }).map(function(e, t) {
                var n = J(this).val();
                return null == n ? null : J.isArray(n) ? J.map(n, function(e) {
                    return {
                        name: t.name,
                        value: e.replace(Ft, "\r\n")
                    }
                }) : {
                    name: t.name,
                    value: n.replace(Ft, "\r\n")
                }
            }).get()
        }
    }), J.ajaxSettings.xhr = function() {
        try {
            return new XMLHttpRequest
        } catch (e) {}
    };
    var Dt = 0,
        St = {},
        jt = {
            0: 200,
            1223: 204
        },
        At = J.ajaxSettings.xhr();
    e.attachEvent && e.attachEvent("onunload", function() {
        for (var e in St) St[e]()
    }), Q.cors = !!At && "withCredentials" in At, Q.ajax = At = !!At, J.ajaxTransport(function(e) {
        var t;
        return Q.cors || At && !e.crossDomain ? {
            send: function(n, i) {
                var r, o = e.xhr(),
                    a = ++Dt;
                if (o.open(e.type, e.url, e.async, e.username, e.password), e.xhrFields)
                    for (r in e.xhrFields) o[r] = e.xhrFields[r];
                e.mimeType && o.overrideMimeType && o.overrideMimeType(e.mimeType), e.crossDomain || n["X-Requested-With"] || (n["X-Requested-With"] = "XMLHttpRequest");
                for (r in n) o.setRequestHeader(r, n[r]);
                t = function(e) {
                    return function() {
                        t && (delete St[a], t = o.onload = o.onerror = null, "abort" === e ? o.abort() : "error" === e ? i(o.status, o.statusText) : i(jt[o.status] || o.status, o.statusText, "string" == typeof o.responseText ? {
                            text: o.responseText
                        } : void 0, o.getAllResponseHeaders()))
                    }
                }, o.onload = t(), o.onerror = t("error"), t = St[a] = t("abort");
                try {
                    o.send(e.hasContent && e.data || null)
                } catch (s) {
                    if (t) throw s
                }
            },
            abort: function() {
                t && t()
            }
        } : void 0
    }), J.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /(?:java|ecma)script/
        },
        converters: {
            "text script": function(e) {
                return J.globalEval(e), e
            }
        }
    }), J.ajaxPrefilter("script", function(e) {
        void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET")
    }), J.ajaxTransport("script", function(e) {
        if (e.crossDomain) {
            var t, n;
            return {
                send: function(i, r) {
                    t = J("<script>").prop({
                        async: !0,
                        charset: e.scriptCharset,
                        src: e.url
                    }).on("load error", n = function(e) {
                        t.remove(), n = null, e && r("error" === e.type ? 404 : 200, e.type)
                    }), Z.head.appendChild(t[0])
                },
                abort: function() {
                    n && n()
                }
            }
        }
    });
    var $t = [],
        Nt = /(=)\?(?=&|$)|\?\?/;
    J.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function() {
            var e = $t.pop() || J.expando + "_" + ut++;
            return this[e] = !0, e
        }
    }), J.ajaxPrefilter("json jsonp", function(t, n, i) {
        var r, o, a, s = t.jsonp !== !1 && (Nt.test(t.url) ? "url" : "string" == typeof t.data && !(t.contentType || "").indexOf("application/x-www-form-urlencoded") && Nt.test(t.data) && "data");
        return s || "jsonp" === t.dataTypes[0] ? (r = t.jsonpCallback = J.isFunction(t.jsonpCallback) ? t.jsonpCallback() : t.jsonpCallback, s ? t[s] = t[s].replace(Nt, "$1" + r) : t.jsonp !== !1 && (t.url += (ct.test(t.url) ? "&" : "?") + t.jsonp + "=" + r), t.converters["script json"] = function() {
            return a || J.error(r + " was not called"), a[0]
        }, t.dataTypes[0] = "json", o = e[r], e[r] = function() {
            a = arguments
        }, i.always(function() {
            e[r] = o, t[r] && (t.jsonpCallback = n.jsonpCallback, $t.push(r)), a && J.isFunction(o) && o(a[0]), a = o = void 0
        }), "script") : void 0
    }), J.parseHTML = function(e, t, n) {
        if (!e || "string" != typeof e) return null;
        "boolean" == typeof t && (n = t, t = !1), t = t || Z;
        var i = ae.exec(e),
            r = !n && [];
        return i ? [t.createElement(i[1])] : (i = J.buildFragment([e], t, r), r && r.length && J(r).remove(), J.merge([], i.childNodes))
    };
    var Pt = J.fn.load;
    J.fn.load = function(e, t, n) {
        if ("string" != typeof e && Pt) return Pt.apply(this, arguments);
        var i, r, o, a = this,
            s = e.indexOf(" ");
        return s >= 0 && (i = J.trim(e.slice(s)), e = e.slice(0, s)), J.isFunction(t) ? (n = t, t = void 0) : t && "object" == typeof t && (r = "POST"), a.length > 0 && J.ajax({
            url: e,
            type: r,
            dataType: "html",
            data: t
        }).done(function(e) {
            o = arguments, a.html(i ? J("<div>").append(J.parseHTML(e)).find(i) : e)
        }).complete(n && function(e, t) {
            a.each(n, o || [e.responseText, t, e])
        }), this
    }, J.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(e, t) {
        J.fn[t] = function(e) {
            return this.on(t, e)
        }
    }), J.expr.filters.animated = function(e) {
        return J.grep(J.timers, function(t) {
            return e === t.elem
        }).length
    };
    var Ot = e.document.documentElement;
    J.offset = {
        setOffset: function(e, t, n) {
            var i, r, o, a, s, l, u, c = J.css(e, "position"),
                d = J(e),
                h = {};
            "static" === c && (e.style.position = "relative"), s = d.offset(), o = J.css(e, "top"), l = J.css(e, "left"), u = ("absolute" === c || "fixed" === c) && (o + l).indexOf("auto") > -1, u ? (i = d.position(), a = i.top, r = i.left) : (a = parseFloat(o) || 0, r = parseFloat(l) || 0), J.isFunction(t) && (t = t.call(e, n, s)), null != t.top && (h.top = t.top - s.top + a), null != t.left && (h.left = t.left - s.left + r), "using" in t ? t.using.call(e, h) : d.css(h)
        }
    }, J.fn.extend({
        offset: function(e) {
            if (arguments.length) return void 0 === e ? this : this.each(function(t) {
                J.offset.setOffset(this, e, t)
            });
            var t, n, i = this[0],
                r = {
                    top: 0,
                    left: 0
                },
                o = i && i.ownerDocument;
            if (o) return t = o.documentElement, J.contains(t, i) ? (typeof i.getBoundingClientRect !== Fe && (r = i.getBoundingClientRect()), n = H(o), {
                top: r.top + n.pageYOffset - t.clientTop,
                left: r.left + n.pageXOffset - t.clientLeft
            }) : r
        },
        position: function() {
            if (this[0]) {
                var e, t, n = this[0],
                    i = {
                        top: 0,
                        left: 0
                    };
                return "fixed" === J.css(n, "position") ? t = n.getBoundingClientRect() : (e = this.offsetParent(), t = this.offset(), J.nodeName(e[0], "html") || (i = e.offset()), i.top += J.css(e[0], "borderTopWidth", !0), i.left += J.css(e[0], "borderLeftWidth", !0)), {
                    top: t.top - i.top - J.css(n, "marginTop", !0),
                    left: t.left - i.left - J.css(n, "marginLeft", !0)
                }
            }
        },
        offsetParent: function() {
            return this.map(function() {
                for (var e = this.offsetParent || Ot; e && !J.nodeName(e, "html") && "static" === J.css(e, "position");) e = e.offsetParent;
                return e || Ot
            })
        }
    }), J.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function(t, n) {
        var i = "pageYOffset" === n;
        J.fn[t] = function(r) {
            return me(this, function(t, r, o) {
                var a = H(t);
                return void 0 === o ? a ? a[n] : t[r] : void(a ? a.scrollTo(i ? e.pageXOffset : o, i ? o : e.pageYOffset) : t[r] = o)
            }, t, r, arguments.length, null)
        }
    }), J.each(["top", "left"], function(e, t) {
        J.cssHooks[t] = _(Q.pixelPosition, function(e, n) {
            return n ? (n = w(e, t), Ie.test(n) ? J(e).position()[t] + "px" : n) : void 0
        })
    }), J.each({
        Height: "height",
        Width: "width"
    }, function(e, t) {
        J.each({
            padding: "inner" + e,
            content: t,
            "": "outer" + e
        }, function(n, i) {
            J.fn[i] = function(i, r) {
                var o = arguments.length && (n || "boolean" != typeof i),
                    a = n || (i === !0 || r === !0 ? "margin" : "border");
                return me(this, function(t, n, i) {
                    var r;
                    return J.isWindow(t) ? t.document.documentElement["client" + e] : 9 === t.nodeType ? (r = t.documentElement, Math.max(t.body["scroll" + e], r["scroll" + e], t.body["offset" + e], r["offset" + e], r["client" + e])) : void 0 === i ? J.css(t, n, a) : J.style(t, n, i, a)
                }, t, o ? i : void 0, o, null)
            }
        })
    }), J.fn.size = function() {
        return this.length
    }, J.fn.andSelf = J.fn.addBack, "function" == typeof define && define.amd && define("jquery", [], function() {
        return J
    });
    var qt = e.jQuery,
        Lt = e.$;
    return J.noConflict = function(t) {
        return e.$ === J && (e.$ = Lt), t && e.jQuery === J && (e.jQuery = qt), J
    }, typeof t === Fe && (e.jQuery = e.$ = J), J
}),
function(e, t, n, i) {
    var r = e(t);
    e.fn.lazyload = function(o) {
        function a() {
            var t = 0;
            l.each(function() {
                var n = e(this);
                if (!u.skip_invisible || n.is(":visible"))
                    if (e.abovethetop(this, u) || e.leftofbegin(this, u));
                    else if (e.belowthefold(this, u) || e.rightoffold(this, u)) {
                    if (++t > u.failure_limit) return !1
                } else n.trigger("appear"), t = 0
            })
        }
        var s, l = this,
            u = {
                threshold: 0,
                failure_limit: 0,
                event: "scroll",
                effect: "show",
                container: t,
                data_attribute: "original",
                skip_invisible: !1,
                appear: null,
                load: null,
                placeholder: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAANSURBVBhXYzh8+PB/AAffA0nNPuCLAAAAAElFTkSuQmCC"
            };
        return o && (i !== o.failurelimit && (o.failure_limit = o.failurelimit, delete o.failurelimit), i !== o.effectspeed && (o.effect_speed = o.effectspeed, delete o.effectspeed), e.extend(u, o)), s = u.container === i || u.container === t ? r : e(u.container), 0 === u.event.indexOf("scroll") && s.bind(u.event, function() {
            return a()
        }), this.each(function() {
            var t = this,
                n = e(t);
            t.loaded = !1, (n.attr("src") === i || n.attr("src") === !1) && n.is("img") && n.attr("src", u.placeholder), n.one("appear", function() {
                if (!this.loaded) {
                    if (u.appear) {
                        var i = l.length;
                        u.appear.call(t, i, u)
                    }
                    e("<img />").bind("load", function() {
                        var i = n.attr("data-" + u.data_attribute);
                        n.hide(), n.is("img") ? n.attr("src", i) : n.css("background-image", "url('" + i + "')"), n[u.effect](u.effect_speed), t.loaded = !0;
                        var r = e.grep(l, function(e) {
                            return !e.loaded
                        });
                        if (l = e(r), u.load) {
                            var o = l.length;
                            u.load.call(t, o, u)
                        }
                    }).attr("src", n.attr("data-" + u.data_attribute))
                }
            }), 0 !== u.event.indexOf("scroll") && n.bind(u.event, function() {
                t.loaded || n.trigger("appear")
            })
        }), r.bind("resize", function() {
            a()
        }), /(?:iphone|ipod|ipad).*os 5/gi.test(navigator.appVersion) && r.bind("pageshow", function(t) {
            t.originalEvent && t.originalEvent.persisted && l.each(function() {
                e(this).trigger("appear")
            })
        }), e(n).ready(function() {
            a()
        }), this
    }, e.belowthefold = function(n, o) {
        var a;
        return a = o.container === i || o.container === t ? (t.innerHeight ? t.innerHeight : r.height()) + r.scrollTop() : e(o.container).offset().top + e(o.container).height(), a <= e(n).offset().top - o.threshold
    }, e.rightoffold = function(n, o) {
        var a;
        return a = o.container === i || o.container === t ? r.width() + r.scrollLeft() : e(o.container).offset().left + e(o.container).width(), a <= e(n).offset().left - o.threshold
    }, e.abovethetop = function(n, o) {
        var a;
        return a = o.container === i || o.container === t ? r.scrollTop() : e(o.container).offset().top, a >= e(n).offset().top + o.threshold + e(n).height()
    }, e.leftofbegin = function(n, o) {
        var a;
        return a = o.container === i || o.container === t ? r.scrollLeft() : e(o.container).offset().left, a >= e(n).offset().left + o.threshold + e(n).width()
    }, e.inviewport = function(t, n) {
        return !(e.rightoffold(t, n) || e.leftofbegin(t, n) || e.belowthefold(t, n) || e.abovethetop(t, n))
    }, e.extend(e.expr[":"], {
        "below-the-fold": function(t) {
            return e.belowthefold(t, {
                threshold: 0
            })
        },
        "above-the-top": function(t) {
            return !e.belowthefold(t, {
                threshold: 0
            })
        },
        "right-of-screen": function(t) {
            return e.rightoffold(t, {
                threshold: 0
            })
        },
        "left-of-screen": function(t) {
            return !e.rightoffold(t, {
                threshold: 0
            })
        },
        "in-viewport": function(t) {
            return e.inviewport(t, {
                threshold: 0
            })
        },
        "above-the-fold": function(t) {
            return !e.belowthefold(t, {
                threshold: 0
            })
        },
        "right-of-fold": function(t) {
            return e.rightoffold(t, {
                threshold: 0
            })
        },
        "left-of-fold": function(t) {
            return !e.rightoffold(t, {
                threshold: 0
            })
        }
    })
}(jQuery, window, document),
function(e) {
    var t = {
            type: "html",
            content: "",
            url: "",
            ajax: {},
            ajax_request: null,
            closeOnEsc: !0,
            closeOnOverlayClick: !0,
            clone: !1,
            overlay: {
                block: void 0,
                tpl: '<div class="arcticmodal-overlay"></div>',
                css: {
                    backgroundColor: "#000",
                    opacity: .6
                }
            },
            container: {
                block: void 0,
                tpl: '<div class="arcticmodal-container"><table class="arcticmodal-container_i"><tr><td class="arcticmodal-container_i2"></td></tr></table></div>'
            },
            wrap: void 0,
            body: void 0,
            errors: {
                tpl: '<div class="arcticmodal-error arcticmodal-close"></div>',
                autoclose_delay: 2e3,
                ajax_unsuccessful_load: "Error"
            },
            openEffect: {
                type: "fade",
                speed: 400
            },
            closeEffect: {
                type: "fade",
                speed: 400
            },
            beforeOpen: e.noop,
            afterOpen: e.noop,
            beforeClose: e.noop,
            afterClose: e.noop,
            afterLoading: e.noop,
            afterLoadingOnShow: e.noop,
            errorLoading: e.noop
        },
        n = 0,
        i = e([]),
        r = {
            isEventOut: function(t, n) {
                var i = !0;
                return e(t).each(function() {
                    e(n.target).get(0) == e(this).get(0) && (i = !1), 0 == e(n.target).closest("HTML", e(this).get(0)).length && (i = !1)
                }), i
            }
        },
        o = {
            getParentEl: function(t) {
                var n = e(t);
                return n.data("arcticmodal") ? n : (n = e(t).closest(".arcticmodal-container").data("arcticmodalParentEl")) ? n : !1
            },
            transition: function(t, n, i, r) {
                switch (r = void 0 == r ? e.noop : r, i.type) {
                    case "fade":
                        "show" == n ? t.fadeIn(i.speed, r) : t.fadeOut(i.speed, r);
                        break;
                    case "none":
                        "show" == n ? t.show() : t.hide(), r()
                }
            },
            prepare_body: function(t, n) {
                e(".arcticmodal-close", t.body).unbind("click.arcticmodal").bind("click.arcticmodal", function() {
                    return n.arcticmodal("close"), !1
                })
            },
            init_el: function(t, s) {
                var l = t.data("arcticmodal");
                if (!l) {
                    if (l = s, n++, l.modalID = n, l.overlay.block = e(l.overlay.tpl), l.overlay.block.css(l.overlay.css), l.container.block = e(l.container.tpl), l.body = e(".arcticmodal-container_i2", l.container.block), s.clone ? l.body.html(t.clone(!0)) : (t.before('<div id="arcticmodalReserve' + l.modalID + '" style="display: none" />'), l.body.html(t)), o.prepare_body(l, t), l.closeOnOverlayClick && l.overlay.block.add(l.container.block).click(function(n) {
                            r.isEventOut(e(">*", l.body), n) && t.arcticmodal("close")
                        }), l.container.block.data("arcticmodalParentEl", t), t.data("arcticmodal", l), i = e.merge(i, t), e.proxy(a.show, t)(), "html" == l.type) return t;
                    if (void 0 != l.ajax.beforeSend) {
                        var u = l.ajax.beforeSend;
                        delete l.ajax.beforeSend
                    }
                    if (void 0 != l.ajax.success) {
                        var c = l.ajax.success;
                        delete l.ajax.success
                    }
                    if (void 0 != l.ajax.error) {
                        var d = l.ajax.error;
                        delete l.ajax.error
                    }
                    var h = e.extend(!0, {
                        url: l.url,
                        beforeSend: function() {
                            void 0 == u ? l.body.html('<div class="arcticmodal-loading" />') : u(l, t)
                        },
                        success: function(e) {
                            t.trigger("afterLoading"), l.afterLoading(l, t, e), void 0 == c ? l.body.html(e) : c(l, t, e), o.prepare_body(l, t), t.trigger("afterLoadingOnShow"), l.afterLoadingOnShow(l, t, e)
                        },
                        error: function() {
                            t.trigger("errorLoading"), l.errorLoading(l, t), void 0 == d ? (l.body.html(l.errors.tpl), e(".arcticmodal-error", l.body).html(l.errors.ajax_unsuccessful_load), e(".arcticmodal-close", l.body).click(function() {
                                return t.arcticmodal("close"), !1
                            }), l.errors.autoclose_delay && setTimeout(function() {
                                t.arcticmodal("close")
                            }, l.errors.autoclose_delay)) : d(l, t)
                        }
                    }, l.ajax);
                    l.ajax_request = e.ajax(h), t.data("arcticmodal", l)
                }
            },
            init: function(n) {
                if (n = e.extend(!0, {}, t, n), !e.isFunction(this)) return this.each(function() {
                    o.init_el(e(this), e.extend(!0, {}, n))
                });
                if (void 0 == n) e.error("jquery.arcticmodal: Uncorrect parameters");
                else if ("" == n.type) e.error('jquery.arcticmodal: Don\'t set parameter "type"');
                else switch (n.type) {
                    case "html":
                        if ("" == n.content) {
                            e.error('jquery.arcticmodal: Don\'t set parameter "content"');
                            break
                        }
                        var i = n.content;
                        return n.content = "", o.init_el(e(i), n);
                    case "ajax":
                        if ("" == n.url) {
                            e.error('jquery.arcticmodal: Don\'t set parameter "url"');
                            break
                        }
                        return o.init_el(e("<div />"), n)
                }
            }
        },
        a = {
            show: function() {
                var t = o.getParentEl(this);
                if (!1 !== t) {
                    var n = t.data("arcticmodal");
                    if (n.overlay.block.hide(), n.container.block.hide(), e("BODY").append(n.overlay.block), e("BODY").append(n.container.block), n.beforeOpen(n, t), t.trigger("beforeOpen"), "hidden" != n.wrap.css("overflow")) {
                        n.wrap.data("arcticmodalOverflow", n.wrap.css("overflow"));
                        var r = n.wrap.outerWidth(!0);
                        n.wrap.css("overflow", "auto");
                        var a = n.wrap.outerWidth(!0);
                        a != r && n.wrap.css("marginRight", a - r + "px")
                    }
                    return i.not(t).each(function() {
                        e(this).data("arcticmodal").overlay.block.hide()
                    }), o.transition(n.overlay.block, "show", 1 < i.length ? {
                        type: "none"
                    } : n.openEffect), o.transition(n.container.block, "show", 1 < i.length ? {
                        type: "none"
                    } : n.openEffect, function() {
                        n.afterOpen(n, t), t.trigger("afterOpen")
                    }), t
                }
                e.error("jquery.arcticmodal: Uncorrect call")
            },
            close: function() {
                return e.isFunction(this) ? void i.each(function() {
                    e(this).arcticmodal("close")
                }) : this.each(function() {
                    var t = o.getParentEl(this);
                    if (!1 === t) e.error("jquery.arcticmodal: Uncorrect call");
                    else {
                        var n = t.data("arcticmodal");
                        !1 !== n.beforeClose(n, t) && (t.trigger("beforeClose"), i.not(t).last().each(function() {
                            e(this).data("arcticmodal").overlay.block.show()
                        }), o.transition(n.overlay.block, "hide", 1 < i.length ? {
                            type: "none"
                        } : n.closeEffect), o.transition(n.container.block, "hide", 1 < i.length ? {
                            type: "none"
                        } : n.closeEffect, function() {
                            n.afterClose(n, t), t.trigger("afterClose"), n.clone || e("#arcticmodalReserve" + n.modalID).replaceWith(n.body.find(">*")), n.overlay.block.remove(), n.container.block.remove(), t.data("arcticmodal", null), e(".arcticmodal-container").length || (n.wrap.data("arcticmodalOverflow") && n.wrap.css("overflow", n.wrap.data("arcticmodalOverflow")), n.wrap.css("marginRight", 0))
                        }), "ajax" == n.type && n.ajax_request.abort(), i = i.not(t))
                    }
                })
            },
            setDefault: function(n) {
                e.extend(!0, t, n)
            }
        };
    e(function() {
        t.wrap = e(document.all && !document.querySelector ? "html" : "body")
    }), e(document).bind("keyup.arcticmodal", function(e) {
        var t = i.last();
        t.length && t.data("arcticmodal").closeOnEsc && 27 === e.keyCode && t.arcticmodal("close")
    }), e.arcticmodal = e.fn.arcticmodal = function(t) {
        return a[t] ? a[t].apply(this, Array.prototype.slice.call(arguments, 1)) : "object" != typeof t && t ? void e.error("jquery.arcticmodal: Method " + t + " does not exist") : o.init.apply(this, arguments)
    }
}(jQuery), ! function(e, t, n, i) {
    function r(t, n) {
        this.settings = null, this.options = e.extend({}, r.Defaults, n), this.$element = e(t), this.drag = e.extend({}, h), this.state = e.extend({}, f), this.e = e.extend({}, p), this._plugins = {}, this._supress = {}, this._current = null, this._speed = null, this._coordinates = [], this._breakpoint = null, this._width = null, this._items = [], this._clones = [], this._mergers = [], this._invalidated = {}, this._pipe = [], e.each(r.Plugins, e.proxy(function(e, t) {
            this._plugins[e[0].toLowerCase() + e.slice(1)] = new t(this)
        }, this)), e.each(r.Pipe, e.proxy(function(t, n) {
            this._pipe.push({
                filter: n.filter,
                run: e.proxy(n.run, this)
            })
        }, this)), this.setup(), this.initialize()
    }

    function o(e) {
        if (e.touches !== i) return {
            x: e.touches[0].pageX,
            y: e.touches[0].pageY
        };
        if (e.touches === i) {
            if (e.pageX !== i) return {
                x: e.pageX,
                y: e.pageY
            };
            if (e.pageX === i) return {
                x: e.clientX,
                y: e.clientY
            }
        }
    }

    function a(e) {
        var t, i, r = n.createElement("div"),
            o = e;
        for (t in o)
            if (i = o[t], "undefined" != typeof r.style[i]) return r = null, [i, t];
        return [!1]
    }

    function s() {
        return a(["transition", "WebkitTransition", "MozTransition", "OTransition"])[1]
    }

    function l() {
        return a(["transform", "WebkitTransform", "MozTransform", "OTransform", "msTransform"])[0]
    }

    function u() {
        return a(["perspective", "webkitPerspective", "MozPerspective", "OPerspective", "MsPerspective"])[0]
    }

    function c() {
        return "ontouchstart" in t || !!navigator.msMaxTouchPoints
    }

    function d() {
        return t.navigator.msPointerEnabled
    }
    var h, f, p;
    h = {
        start: 0,
        startX: 0,
        startY: 0,
        current: 0,
        currentX: 0,
        currentY: 0,
        offsetX: 0,
        offsetY: 0,
        distance: null,
        startTime: 0,
        endTime: 0,
        updatedX: 0,
        targetEl: null
    }, f = {
        isTouch: !1,
        isScrolling: !1,
        isSwiping: !1,
        direction: !1,
        inMotion: !1
    }, p = {
        _onDragStart: null,
        _onDragMove: null,
        _onDragEnd: null,
        _transitionEnd: null,
        _resizer: null,
        _responsiveCall: null,
        _goToLoop: null,
        _checkVisibile: null
    }, r.Defaults = {
        items: 3,
        loop: !1,
        center: !1,
        mouseDrag: !0,
        touchDrag: !0,
        pullDrag: !0,
        freeDrag: !1,
        margin: 0,
        stagePadding: 0,
        merge: !1,
        mergeFit: !0,
        autoWidth: !1,
        startPosition: 0,
        rtl: !1,
        smartSpeed: 250,
        fluidSpeed: !1,
        dragEndSpeed: !1,
        responsive: {},
        responsiveRefreshRate: 200,
        responsiveBaseElement: t,
        responsiveClass: !1,
        fallbackEasing: "swing",
        info: !1,
        nestedItemSelector: !1,
        itemElement: "div",
        stageElement: "div",
        themeClass: "owl-theme",
        baseClass: "owl-carousel",
        itemClass: "owl-item",
        centerClass: "center",
        activeClass: "active"
    }, r.Width = {
        Default: "default",
        Inner: "inner",
        Outer: "outer"
    }, r.Plugins = {}, r.Pipe = [{
        filter: ["width", "items", "settings"],
        run: function(e) {
            e.current = this._items && this._items[this.relative(this._current)]
        }
    }, {
        filter: ["items", "settings"],
        run: function() {
            var e = this._clones,
                t = this.$stage.children(".cloned");
            (t.length !== e.length || !this.settings.loop && e.length > 0) && (this.$stage.children(".cloned").remove(), this._clones = [])
        }
    }, {
        filter: ["items", "settings"],
        run: function() {
            var e, t, n = this._clones,
                i = this._items,
                r = this.settings.loop ? n.length - Math.max(2 * this.settings.items, 4) : 0;
            for (e = 0, t = Math.abs(r / 2); t > e; e++) r > 0 ? (this.$stage.children().eq(i.length + n.length - 1).remove(), n.pop(), this.$stage.children().eq(0).remove(), n.pop()) : (n.push(n.length / 2), this.$stage.append(i[n[n.length - 1]].clone().addClass("cloned")), n.push(i.length - 1 - (n.length - 1) / 2), this.$stage.prepend(i[n[n.length - 1]].clone().addClass("cloned")))
        }
    }, {
        filter: ["width", "items", "settings"],
        run: function() {
            var e, t, n, i = this.settings.rtl ? 1 : -1,
                r = (this.width() / this.settings.items).toFixed(3),
                o = 0;
            for (this._coordinates = [], t = 0, n = this._clones.length + this._items.length; n > t; t++) e = this._mergers[this.relative(t)], e = this.settings.mergeFit && Math.min(e, this.settings.items) || e, o += (this.settings.autoWidth ? this._items[this.relative(t)].width() + this.settings.margin : r * e) * i, this._coordinates.push(o)
        }
    }, {
        filter: ["width", "items", "settings"],
        run: function() {
            var t, n, i = (this.width() / this.settings.items).toFixed(3),
                r = {
                    width: Math.abs(this._coordinates[this._coordinates.length - 1]) + 2 * this.settings.stagePadding,
                    "padding-left": this.settings.stagePadding || "",
                    "padding-right": this.settings.stagePadding || ""
                };
            if (this.$stage.css(r), r = {
                    width: this.settings.autoWidth ? "auto" : i - this.settings.margin
                }, r[this.settings.rtl ? "margin-left" : "margin-right"] = this.settings.margin, !this.settings.autoWidth && e.grep(this._mergers, function(e) {
                    return e > 1
                }).length > 0)
                for (t = 0, n = this._coordinates.length; n > t; t++) r.width = Math.abs(this._coordinates[t]) - Math.abs(this._coordinates[t - 1] || 0) - this.settings.margin, this.$stage.children().eq(t).css(r);
            else this.$stage.children().css(r)
        }
    }, {
        filter: ["width", "items", "settings"],
        run: function(e) {
            e.current && this.reset(this.$stage.children().index(e.current))
        }
    }, {
        filter: ["position"],
        run: function() {
            this.animate(this.coordinates(this._current))
        }
    }, {
        filter: ["width", "position", "items", "settings"],
        run: function() {
            var e, t, n, i, r = this.settings.rtl ? 1 : -1,
                o = 2 * this.settings.stagePadding,
                a = this.coordinates(this.current()) + o,
                s = a + this.width() * r,
                l = [];
            for (n = 0, i = this._coordinates.length; i > n; n++) e = this._coordinates[n - 1] || 0, t = Math.abs(this._coordinates[n]) + o * r, (this.op(e, "<=", a) && this.op(e, ">", s) || this.op(t, "<", a) && this.op(t, ">", s)) && l.push(n);
            this.$stage.children("." + this.settings.activeClass).removeClass(this.settings.activeClass), this.$stage.children(":eq(" + l.join("), :eq(") + ")").addClass(this.settings.activeClass), this.settings.center && (this.$stage.children("." + this.settings.centerClass).removeClass(this.settings.centerClass), this.$stage.children().eq(this.current()).addClass(this.settings.centerClass))
        }
    }], r.prototype.initialize = function() {
        if (this.trigger("initialize"), this.$element.addClass(this.settings.baseClass).addClass(this.settings.themeClass).toggleClass("owl-rtl", this.settings.rtl), this.browserSupport(), this.settings.autoWidth && this.state.imagesLoaded !== !0) {
            var t, n, r;
            if (t = this.$element.find("img"), n = this.settings.nestedItemSelector ? "." + this.settings.nestedItemSelector : i, r = this.$element.children(n).width(), t.length && 0 >= r) return this.preloadAutoWidthImages(t), !1
        }
        this.$element.addClass("owl-loading"), this.$stage = e("<" + this.settings.stageElement + ' class="owl-stage"/>').wrap('<div class="owl-stage-outer">'), this.$element.append(this.$stage.parent()), this.replace(this.$element.children().not(this.$stage.parent())), this._width = this.$element.width(), this.refresh(), this.$element.removeClass("owl-loading").addClass("owl-loaded"), this.eventsCall(), this.internalEvents(), this.addTriggerableEvents(), this.trigger("initialized")
    }, r.prototype.setup = function() {
        var t = this.viewport(),
            n = this.options.responsive,
            i = -1,
            r = null;
        n ? (e.each(n, function(e) {
            t >= e && e > i && (i = Number(e))
        }), r = e.extend({}, this.options, n[i]), delete r.responsive, r.responsiveClass && this.$element.attr("class", function(e, t) {
            return t.replace(/\b owl-responsive-\S+/g, "")
        }).addClass("owl-responsive-" + i)) : r = e.extend({}, this.options), (null === this.settings || this._breakpoint !== i) && (this.trigger("change", {
            property: {
                name: "settings",
                value: r
            }
        }), this._breakpoint = i, this.settings = r, this.invalidate("settings"), this.trigger("changed", {
            property: {
                name: "settings",
                value: this.settings
            }
        }))
    }, r.prototype.optionsLogic = function() {
        this.$element.toggleClass("owl-center", this.settings.center), this.settings.loop && this._items.length < this.settings.items && (this.settings.loop = !1), this.settings.autoWidth && (this.settings.stagePadding = !1, this.settings.merge = !1)
    }, r.prototype.prepare = function(t) {
        var n = this.trigger("prepare", {
            content: t
        });
        return n.data || (n.data = e("<" + this.settings.itemElement + "/>").addClass(this.settings.itemClass).append(t)), this.trigger("prepared", {
            content: n.data
        }), n.data
    }, r.prototype.update = function() {
        for (var t = 0, n = this._pipe.length, i = e.proxy(function(e) {
                return this[e]
            }, this._invalidated), r = {}; n > t;)(this._invalidated.all || e.grep(this._pipe[t].filter, i).length > 0) && this._pipe[t].run(r), t++;
        this._invalidated = {}
    }, r.prototype.width = function(e) {
        switch (e = e || r.Width.Default) {
            case r.Width.Inner:
            case r.Width.Outer:
                return this._width;
            default:
                return this._width - 2 * this.settings.stagePadding + this.settings.margin
        }
    }, r.prototype.refresh = function() {
        return 0 === this._items.length ? !1 : ((new Date).getTime(), this.trigger("refresh"), this.setup(), this.optionsLogic(), this.$stage.addClass("owl-refresh"), this.update(), this.$stage.removeClass("owl-refresh"), this.state.orientation = t.orientation, this.watchVisibility(), this.trigger("refreshed"), void 0)
    }, r.prototype.eventsCall = function() {
        this.e._onDragStart = e.proxy(function(e) {
            this.onDragStart(e)
        }, this), this.e._onDragMove = e.proxy(function(e) {
            this.onDragMove(e)
        }, this), this.e._onDragEnd = e.proxy(function(e) {
            this.onDragEnd(e)
        }, this), this.e._onResize = e.proxy(function(e) {
            this.onResize(e)
        }, this), this.e._transitionEnd = e.proxy(function(e) {
            this.transitionEnd(e)
        }, this), this.e._preventClick = e.proxy(function(e) {
            this.preventClick(e)
        }, this)
    }, r.prototype.onThrottledResize = function() {
        t.clearTimeout(this.resizeTimer), this.resizeTimer = t.setTimeout(this.e._onResize, this.settings.responsiveRefreshRate)
    }, r.prototype.onResize = function() {
        return this._items.length ? this._width === this.$element.width() ? !1 : this.trigger("resize").isDefaultPrevented() ? !1 : (this._width = this.$element.width(), this.invalidate("width"), this.refresh(), void this.trigger("resized")) : !1
    }, r.prototype.eventsRouter = function(e) {
        var t = e.type;
        "mousedown" === t || "touchstart" === t ? this.onDragStart(e) : "mousemove" === t || "touchmove" === t ? this.onDragMove(e) : "mouseup" === t || "touchend" === t ? this.onDragEnd(e) : "touchcancel" === t && this.onDragEnd(e)
    }, r.prototype.internalEvents = function() {
        var n = (c(), d());
        this.settings.mouseDrag ? (this.$stage.on("mousedown", e.proxy(function(e) {
            this.eventsRouter(e)
        }, this)), this.$stage.on("dragstart", function() {
            return !1
        }), this.$stage.get(0).onselectstart = function() {
            return !1
        }) : this.$element.addClass("owl-text-select-on"), this.settings.touchDrag && !n && this.$stage.on("touchstart touchcancel", e.proxy(function(e) {
            this.eventsRouter(e)
        }, this)), this.transitionEndVendor && this.on(this.$stage.get(0), this.transitionEndVendor, this.e._transitionEnd, !1), this.settings.responsive !== !1 && this.on(t, "resize", e.proxy(this.onThrottledResize, this))
    }, r.prototype.onDragStart = function(i) {
        var r, a, s, l;
        if (r = i.originalEvent || i || t.event, 3 === r.which || this.state.isTouch) return !1;
        if ("mousedown" === r.type && this.$stage.addClass("owl-grab"), this.trigger("drag"), this.drag.startTime = (new Date).getTime(), this.speed(0), this.state.isTouch = !0, this.state.isScrolling = !1, this.state.isSwiping = !1, this.drag.distance = 0, a = o(r).x, s = o(r).y, this.drag.offsetX = this.$stage.position().left, this.drag.offsetY = this.$stage.position().top, this.settings.rtl && (this.drag.offsetX = this.$stage.position().left + this.$stage.width() - this.width() + this.settings.margin), this.state.inMotion && this.support3d) l = this.getTransformProperty(), this.drag.offsetX = l, this.animate(l), this.state.inMotion = !0;
        else if (this.state.inMotion && !this.support3d) return this.state.inMotion = !1, !1;
        this.drag.startX = a - this.drag.offsetX, this.drag.startY = s - this.drag.offsetY, this.drag.start = a - this.drag.startX, this.drag.targetEl = r.target || r.srcElement, this.drag.updatedX = this.drag.start, ("IMG" === this.drag.targetEl.tagName || "A" === this.drag.targetEl.tagName) && (this.drag.targetEl.draggable = !1), e(n).on("mousemove.owl.dragEvents mouseup.owl.dragEvents touchmove.owl.dragEvents touchend.owl.dragEvents", e.proxy(function(e) {
            this.eventsRouter(e)
        }, this))
    }, r.prototype.onDragMove = function(e) {
        var n, r, a, s, l, u;
        this.state.isTouch && (this.state.isScrolling || (n = e.originalEvent || e || t.event, r = o(n).x, a = o(n).y, this.drag.currentX = r - this.drag.startX, this.drag.currentY = a - this.drag.startY, this.drag.distance = this.drag.currentX - this.drag.offsetX, this.drag.distance < 0 ? this.state.direction = this.settings.rtl ? "right" : "left" : this.drag.distance > 0 && (this.state.direction = this.settings.rtl ? "left" : "right"), this.settings.loop ? this.op(this.drag.currentX, ">", this.coordinates(this.minimum())) && "right" === this.state.direction ? this.drag.currentX -= (this.settings.center && this.coordinates(0)) - this.coordinates(this._items.length) : this.op(this.drag.currentX, "<", this.coordinates(this.maximum())) && "left" === this.state.direction && (this.drag.currentX += (this.settings.center && this.coordinates(0)) - this.coordinates(this._items.length)) : (s = this.coordinates(this.settings.rtl ? this.maximum() : this.minimum()), l = this.coordinates(this.settings.rtl ? this.minimum() : this.maximum()), u = this.settings.pullDrag ? this.drag.distance / 5 : 0, this.drag.currentX = Math.max(Math.min(this.drag.currentX, s + u), l + u)), (this.drag.distance > 8 || this.drag.distance < -8) && (n.preventDefault !== i ? n.preventDefault() : n.returnValue = !1, this.state.isSwiping = !0), this.drag.updatedX = this.drag.currentX, (this.drag.currentY > 16 || this.drag.currentY < -16) && this.state.isSwiping === !1 && (this.state.isScrolling = !0, this.drag.updatedX = this.drag.start), this.animate(this.drag.updatedX)))
    }, r.prototype.onDragEnd = function(t) {
        var i, r, o;
        if (this.state.isTouch) {
            if ("mouseup" === t.type && this.$stage.removeClass("owl-grab"), this.trigger("dragged"), this.drag.targetEl.removeAttribute("draggable"), this.state.isTouch = !1, this.state.isScrolling = !1, this.state.isSwiping = !1, 0 === this.drag.distance && this.state.inMotion !== !0) return this.state.inMotion = !1, !1;
            this.drag.endTime = (new Date).getTime(), i = this.drag.endTime - this.drag.startTime, r = Math.abs(this.drag.distance), (r > 3 || i > 300) && this.removeClick(this.drag.targetEl), o = this.closest(this.drag.updatedX), this.speed(this.settings.dragEndSpeed || this.settings.smartSpeed), this.current(o), this.invalidate("position"), this.update(), this.settings.pullDrag || this.drag.updatedX !== this.coordinates(o) || this.transitionEnd(), this.drag.distance = 0, e(n).off(".owl.dragEvents")
        }
    }, r.prototype.removeClick = function(n) {
        this.drag.targetEl = n, e(n).on("click.preventClick", this.e._preventClick), t.setTimeout(function() {
            e(n).off("click.preventClick")
        }, 300)
    }, r.prototype.preventClick = function(t) {
        t.preventDefault ? t.preventDefault() : t.returnValue = !1, t.stopPropagation && t.stopPropagation(), e(t.target).off("click.preventClick")
    }, r.prototype.getTransformProperty = function() {
        var e, n;
        return e = t.getComputedStyle(this.$stage.get(0), null).getPropertyValue(this.vendorName + "transform"), e = e.replace(/matrix(3d)?\(|\)/g, "").split(","), n = 16 === e.length, n !== !0 ? e[4] : e[12]
    }, r.prototype.closest = function(t) {
        var n = -1,
            i = 30,
            r = this.width(),
            o = this.coordinates();
        return this.settings.freeDrag || e.each(o, e.proxy(function(e, a) {
            return t > a - i && a + i > t ? n = e : this.op(t, "<", a) && this.op(t, ">", o[e + 1] || a - r) && (n = "left" === this.state.direction ? e + 1 : e), -1 === n
        }, this)), this.settings.loop || (this.op(t, ">", o[this.minimum()]) ? n = t = this.minimum() : this.op(t, "<", o[this.maximum()]) && (n = t = this.maximum())), n
    }, r.prototype.animate = function(t) {
        this.trigger("translate"), this.state.inMotion = this.speed() > 0, this.support3d ? this.$stage.css({
            transform: "translate3d(" + t + "px,0px, 0px)",
            transition: this.speed() / 1e3 + "s"
        }) : this.state.isTouch ? this.$stage.css({
            left: t + "px"
        }) : this.$stage.animate({
            left: t
        }, this.speed() / 1e3, this.settings.fallbackEasing, e.proxy(function() {
            this.state.inMotion && this.transitionEnd()
        }, this))
    }, r.prototype.current = function(e) {
        if (e === i) return this._current;
        if (0 === this._items.length) return i;
        if (e = this.normalize(e), this._current !== e) {
            var t = this.trigger("change", {
                property: {
                    name: "position",
                    value: e
                }
            });
            t.data !== i && (e = this.normalize(t.data)), this._current = e, this.invalidate("position"), this.trigger("changed", {
                property: {
                    name: "position",
                    value: this._current
                }
            })
        }
        return this._current
    }, r.prototype.invalidate = function(e) {
        this._invalidated[e] = !0
    }, r.prototype.reset = function(e) {
        e = this.normalize(e), e !== i && (this._speed = 0, this._current = e, this.suppress(["translate", "translated"]), this.animate(this.coordinates(e)), this.release(["translate", "translated"]))
    }, r.prototype.normalize = function(t, n) {
        var r = n ? this._items.length : this._items.length + this._clones.length;
        return !e.isNumeric(t) || 1 > r ? i : t = this._clones.length ? (t % r + r) % r : Math.max(this.minimum(n), Math.min(this.maximum(n), t))
    }, r.prototype.relative = function(e) {
        return e = this.normalize(e), e -= this._clones.length / 2, this.normalize(e, !0)
    }, r.prototype.maximum = function(e) {
        var t, n, i, r = 0,
            o = this.settings;
        if (e) return this._items.length - 1;
        if (!o.loop && o.center) t = this._items.length - 1;
        else if (o.loop || o.center)
            if (o.loop || o.center) t = this._items.length + o.items;
            else {
                if (!o.autoWidth && !o.merge) throw "Can not detect maximum absolute position.";
                for (revert = o.rtl ? 1 : -1, n = this.$stage.width() - this.$element.width();
                    (i = this.coordinates(r)) && !(i * revert >= n);) t = ++r
            } else t = this._items.length - o.items;
        return t
    }, r.prototype.minimum = function(e) {
        return e ? 0 : this._clones.length / 2
    }, r.prototype.items = function(e) {
        return e === i ? this._items.slice() : (e = this.normalize(e, !0), this._items[e])
    }, r.prototype.mergers = function(e) {
        return e === i ? this._mergers.slice() : (e = this.normalize(e, !0), this._mergers[e])
    }, r.prototype.clones = function(t) {
        var n = this._clones.length / 2,
            r = n + this._items.length,
            o = function(e) {
                return e % 2 === 0 ? r + e / 2 : n - (e + 1) / 2
            };
        return t === i ? e.map(this._clones, function(e, t) {
            return o(t)
        }) : e.map(this._clones, function(e, n) {
            return e === t ? o(n) : null
        })
    }, r.prototype.speed = function(e) {
        return e !== i && (this._speed = e), this._speed
    }, r.prototype.coordinates = function(t) {
        var n = null;
        return t === i ? e.map(this._coordinates, e.proxy(function(e, t) {
            return this.coordinates(t)
        }, this)) : (this.settings.center ? (n = this._coordinates[t], n += (this.width() - n + (this._coordinates[t - 1] || 0)) / 2 * (this.settings.rtl ? -1 : 1)) : n = this._coordinates[t - 1] || 0, n)
    }, r.prototype.duration = function(e, t, n) {
        return Math.min(Math.max(Math.abs(t - e), 1), 6) * Math.abs(n || this.settings.smartSpeed)
    }, r.prototype.to = function(n, i) {
        if (this.settings.loop) {
            var r = n - this.relative(this.current()),
                o = this.current(),
                a = this.current(),
                s = this.current() + r,
                l = 0 > a - s ? !0 : !1,
                u = this._clones.length + this._items.length;
            s < this.settings.items && l === !1 ? (o = a + this._items.length, this.reset(o)) : s >= u - this.settings.items && l === !0 && (o = a - this._items.length, this.reset(o)), t.clearTimeout(this.e._goToLoop), this.e._goToLoop = t.setTimeout(e.proxy(function() {
                this.speed(this.duration(this.current(), o + r, i)), this.current(o + r), this.update()
            }, this), 30)
        } else this.speed(this.duration(this.current(), n, i)), this.current(n), this.update()
    }, r.prototype.next = function(e) {
        e = e || !1, this.to(this.relative(this.current()) + 1, e)
    }, r.prototype.prev = function(e) {
        e = e || !1, this.to(this.relative(this.current()) - 1, e)
    }, r.prototype.transitionEnd = function(e) {
        return e !== i && (e.stopPropagation(), (e.target || e.srcElement || e.originalTarget) !== this.$stage.get(0)) ? !1 : (this.state.inMotion = !1, void this.trigger("translated"))
    }, r.prototype.viewport = function() {
        var i;
        if (this.options.responsiveBaseElement !== t) i = e(this.options.responsiveBaseElement).width();
        else if (t.innerWidth) i = t.innerWidth;
        else {
            if (!n.documentElement || !n.documentElement.clientWidth) throw "Can not detect viewport width.";
            i = n.documentElement.clientWidth
        }
        return i
    }, r.prototype.replace = function(t) {
        this.$stage.empty(), this._items = [], t && (t = t instanceof jQuery ? t : e(t)), this.settings.nestedItemSelector && (t = t.find("." + this.settings.nestedItemSelector)), t.filter(function() {
            return 1 === this.nodeType
        }).each(e.proxy(function(e, t) {
            t = this.prepare(t), this.$stage.append(t), this._items.push(t), this._mergers.push(1 * t.find("[data-merge]").andSelf("[data-merge]").attr("data-merge") || 1)
        }, this)), this.reset(e.isNumeric(this.settings.startPosition) ? this.settings.startPosition : 0), this.invalidate("items")
    }, r.prototype.add = function(e, t) {
        t = t === i ? this._items.length : this.normalize(t, !0), this.trigger("add", {
            content: e,
            position: t
        }), 0 === this._items.length || t === this._items.length ? (this.$stage.append(e), this._items.push(e), this._mergers.push(1 * e.find("[data-merge]").andSelf("[data-merge]").attr("data-merge") || 1)) : (this._items[t].before(e), this._items.splice(t, 0, e), this._mergers.splice(t, 0, 1 * e.find("[data-merge]").andSelf("[data-merge]").attr("data-merge") || 1)), this.invalidate("items"), this.trigger("added", {
            content: e,
            position: t
        })
    }, r.prototype.remove = function(e) {
        e = this.normalize(e, !0), e !== i && (this.trigger("remove", {
            content: this._items[e],
            position: e
        }), this._items[e].remove(), this._items.splice(e, 1), this._mergers.splice(e, 1), this.invalidate("items"), this.trigger("removed", {
            content: null,
            position: e
        }))
    }, r.prototype.addTriggerableEvents = function() {
        var t = e.proxy(function(t, n) {
            return e.proxy(function(e) {
                e.relatedTarget !== this && (this.suppress([n]), t.apply(this, [].slice.call(arguments, 1)), this.release([n]))
            }, this)
        }, this);
        e.each({
            next: this.next,
            prev: this.prev,
            to: this.to,
            destroy: this.destroy,
            refresh: this.refresh,
            replace: this.replace,
            add: this.add,
            remove: this.remove
        }, e.proxy(function(e, n) {
            this.$element.on(e + ".owl.carousel", t(n, e + ".owl.carousel"))
        }, this))
    }, r.prototype.watchVisibility = function() {
        function n(e) {
            return e.offsetWidth > 0 && e.offsetHeight > 0
        }

        function i() {
            n(this.$element.get(0)) && (this.$element.removeClass("owl-hidden"), this.refresh(), t.clearInterval(this.e._checkVisibile))
        }
        n(this.$element.get(0)) || (this.$element.addClass("owl-hidden"), t.clearInterval(this.e._checkVisibile), this.e._checkVisibile = t.setInterval(e.proxy(i, this), 500))
    }, r.prototype.preloadAutoWidthImages = function(t) {
        var n, i, r, o;
        n = 0, i = this, t.each(function(a, s) {
            r = e(s), o = new Image, o.onload = function() {
                n++, r.attr("src", o.src), r.css("opacity", 1), n >= t.length && (i.state.imagesLoaded = !0, i.initialize())
            }, o.src = r.attr("src") || r.attr("data-src") || r.attr("data-src-retina")
        })
    }, r.prototype.destroy = function() {
        this.$element.hasClass(this.settings.themeClass) && this.$element.removeClass(this.settings.themeClass), this.settings.responsive !== !1 && e(t).off("resize.owl.carousel"), this.transitionEndVendor && this.off(this.$stage.get(0), this.transitionEndVendor, this.e._transitionEnd);
        for (var i in this._plugins) this._plugins[i].destroy();
        (this.settings.mouseDrag || this.settings.touchDrag) && (this.$stage.off("mousedown touchstart touchcancel"), e(n).off(".owl.dragEvents"), this.$stage.get(0).onselectstart = function() {}, this.$stage.off("dragstart", function() {
            return !1
        })), this.$element.off(".owl"), this.$stage.children(".cloned").remove(), this.e = null, this.$element.removeData("owlCarousel"), this.$stage.children().contents().unwrap(), this.$stage.children().unwrap(), this.$stage.unwrap()
    }, r.prototype.op = function(e, t, n) {
        var i = this.settings.rtl;
        switch (t) {
            case "<":
                return i ? e > n : n > e;
            case ">":
                return i ? n > e : e > n;
            case ">=":
                return i ? n >= e : e >= n;
            case "<=":
                return i ? e >= n : n >= e
        }
    }, r.prototype.on = function(e, t, n, i) {
        e.addEventListener ? e.addEventListener(t, n, i) : e.attachEvent && e.attachEvent("on" + t, n)
    }, r.prototype.off = function(e, t, n, i) {
        e.removeEventListener ? e.removeEventListener(t, n, i) : e.detachEvent && e.detachEvent("on" + t, n)
    }, r.prototype.trigger = function(t, n, i) {
        var r = {
                item: {
                    count: this._items.length,
                    index: this.current()
                }
            },
            o = e.camelCase(e.grep(["on", t, i], function(e) {
                return e
            }).join("-").toLowerCase()),
            a = e.Event([t, "owl", i || "carousel"].join(".").toLowerCase(), e.extend({
                relatedTarget: this
            }, r, n));
        return this._supress[t] || (e.each(this._plugins, function(e, t) {
            t.onTrigger && t.onTrigger(a)
        }), this.$element.trigger(a), this.settings && "function" == typeof this.settings[o] && this.settings[o].apply(this, a)), a
    }, r.prototype.suppress = function(t) {
        e.each(t, e.proxy(function(e, t) {
            this._supress[t] = !0
        }, this))
    }, r.prototype.release = function(t) {
        e.each(t, e.proxy(function(e, t) {
            delete this._supress[t]
        }, this))
    }, r.prototype.browserSupport = function() {
        if (this.support3d = u(), this.support3d) {
            this.transformVendor = l();
            var e = ["transitionend", "webkitTransitionEnd", "transitionend", "oTransitionEnd"];
            this.transitionEndVendor = e[s()], this.vendorName = this.transformVendor.replace(/Transform/i, ""), this.vendorName = "" !== this.vendorName ? "-" + this.vendorName.toLowerCase() + "-" : ""
        }
        this.state.orientation = t.orientation
    }, e.fn.owlCarousel = function(t) {
        return this.each(function() {
            e(this).data("owlCarousel") || e(this).data("owlCarousel", new r(this, t))
        })
    }, e.fn.owlCarousel.Constructor = r
}(window.Zepto || window.jQuery, window, document),
function(e, t) {
    var n = function(t) {
        this._core = t, this._loaded = [], this._handlers = {
            "initialized.owl.carousel change.owl.carousel": e.proxy(function(t) {
                if (t.namespace && this._core.settings && this._core.settings.lazyLoad && (t.property && "position" == t.property.name || "initialized" == t.type))
                    for (var n = this._core.settings, i = n.center && Math.ceil(n.items / 2) || n.items, r = n.center && -1 * i || 0, o = (t.property && t.property.value || this._core.current()) + r, a = this._core.clones().length, s = e.proxy(function(e, t) {
                            this.load(t)
                        }, this); r++ < i;) this.load(a / 2 + this._core.relative(o)), a && e.each(this._core.clones(this._core.relative(o++)), s)
            }, this)
        }, this._core.options = e.extend({}, n.Defaults, this._core.options), this._core.$element.on(this._handlers)
    };
    n.Defaults = {
        lazyLoad: !1
    }, n.prototype.load = function(n) {
        var i = this._core.$stage.children().eq(n),
            r = i && i.find(".owl-lazy");
        !r || e.inArray(i.get(0), this._loaded) > -1 || (r.each(e.proxy(function(n, i) {
            var r, o = e(i),
                a = t.devicePixelRatio > 1 && o.attr("data-src-retina") || o.attr("data-src");
            this._core.trigger("load", {
                element: o,
                url: a
            }, "lazy"), o.is("img") ? o.one("load.owl.lazy", e.proxy(function() {
                o.css("opacity", 1), this._core.trigger("loaded", {
                    element: o,
                    url: a
                }, "lazy")
            }, this)).attr("src", a) : (r = new Image, r.onload = e.proxy(function() {
                o.css({
                    "background-image": "url(" + a + ")",
                    opacity: "1"
                }), this._core.trigger("loaded", {
                    element: o,
                    url: a
                }, "lazy")
            }, this), r.src = a)
        }, this)), this._loaded.push(i.get(0)))
    }, n.prototype.destroy = function() {
        var e, t;
        for (e in this.handlers) this._core.$element.off(e, this.handlers[e]);
        for (t in Object.getOwnPropertyNames(this)) "function" != typeof this[t] && (this[t] = null)
    }, e.fn.owlCarousel.Constructor.Plugins.Lazy = n
}(window.Zepto || window.jQuery, window, document),
function(e) {
    var t = function(n) {
        this._core = n, this._handlers = {
            "initialized.owl.carousel": e.proxy(function() {
                this._core.settings.autoHeight && this.update()
            }, this),
            "changed.owl.carousel": e.proxy(function(e) {
                this._core.settings.autoHeight && "position" == e.property.name && this.update()
            }, this),
            "loaded.owl.lazy": e.proxy(function(e) {
                this._core.settings.autoHeight && e.element.closest("." + this._core.settings.itemClass) === this._core.$stage.children().eq(this._core.current()) && this.update()
            }, this)
        }, this._core.options = e.extend({}, t.Defaults, this._core.options), this._core.$element.on(this._handlers)
    };
    t.Defaults = {
        autoHeight: !1,
        autoHeightClass: "owl-height"
    }, t.prototype.update = function() {
        this._core.$stage.parent().height(this._core.$stage.children().eq(this._core.current()).height()).addClass(this._core.settings.autoHeightClass)
    }, t.prototype.destroy = function() {
        var e, t;
        for (e in this._handlers) this._core.$element.off(e, this._handlers[e]);
        for (t in Object.getOwnPropertyNames(this)) "function" != typeof this[t] && (this[t] = null)
    }, e.fn.owlCarousel.Constructor.Plugins.AutoHeight = t
}(window.Zepto || window.jQuery, window, document),
function(e, t, n) {
    var i = function(t) {
        this._core = t, this._videos = {}, this._playing = null, this._fullscreen = !1, this._handlers = {
            "resize.owl.carousel": e.proxy(function(e) {
                this._core.settings.video && !this.isInFullScreen() && e.preventDefault()
            }, this),
            "refresh.owl.carousel changed.owl.carousel": e.proxy(function() {
                this._playing && this.stop()
            }, this),
            "prepared.owl.carousel": e.proxy(function(t) {
                var n = e(t.content).find(".owl-video");
                n.length && (n.css("display", "none"), this.fetch(n, e(t.content)))
            }, this)
        }, this._core.options = e.extend({}, i.Defaults, this._core.options), this._core.$element.on(this._handlers), this._core.$element.on("click.owl.video", ".owl-video-play-icon", e.proxy(function(e) {
            this.play(e)
        }, this))
    };
    i.Defaults = {
        video: !1,
        videoHeight: !1,
        videoWidth: !1
    }, i.prototype.fetch = function(e, t) {
        var n = e.attr("data-vimeo-id") ? "vimeo" : "youtube",
            i = e.attr("data-vimeo-id") || e.attr("data-youtube-id"),
            r = e.attr("data-width") || this._core.settings.videoWidth,
            o = e.attr("data-height") || this._core.settings.videoHeight,
            a = e.attr("href");
        if (!a) throw new Error("Missing video URL.");
        if (i = a.match(/(http:|https:|)\/\/(player.|www.)?(vimeo\.com|youtu(be\.com|\.be|be\.googleapis\.com))\/(video\/|embed\/|watch\?v=|v\/)?([A-Za-z0-9._%-]*)(\&\S+)?/), i[3].indexOf("youtu") > -1) n = "youtube";
        else {
            if (!(i[3].indexOf("vimeo") > -1)) throw new Error("Video URL not supported.");
            n = "vimeo"
        }
        i = i[6], this._videos[a] = {
            type: n,
            id: i,
            width: r,
            height: o
        }, t.attr("data-video", a), this.thumbnail(e, this._videos[a])
    }, i.prototype.thumbnail = function(t, n) {
        var i, r, o, a = n.width && n.height ? 'style="width:' + n.width + "px;height:" + n.height + 'px;"' : "",
            s = t.find("img"),
            l = "src",
            u = "",
            c = this._core.settings,
            d = function(e) {
                r = '<div class="owl-video-play-icon"></div>', i = c.lazyLoad ? '<div class="owl-video-tn ' + u + '" ' + l + '="' + e + '"></div>' : '<div class="owl-video-tn" style="opacity:1;background-image:url(' + e + ')"></div>', t.after(i), t.after(r)
            };
        return t.wrap('<div class="owl-video-wrapper"' + a + "></div>"), this._core.settings.lazyLoad && (l = "data-src", u = "owl-lazy"), s.length ? (d(s.attr(l)), s.remove(), !1) : void("youtube" === n.type ? (o = "http://img.youtube.com/vi/" + n.id + "/hqdefault.jpg", d(o)) : "vimeo" === n.type && e.ajax({
            type: "GET",
            url: "http://vimeo.com/api/v2/video/" + n.id + ".json",
            jsonp: "callback",
            dataType: "jsonp",
            success: function(e) {
                o = e[0].thumbnail_large, d(o)
            }
        }))
    }, i.prototype.stop = function() {
        this._core.trigger("stop", null, "video"), this._playing.find(".owl-video-frame").remove(), this._playing.removeClass("owl-video-playing"), this._playing = null
    }, i.prototype.play = function(t) {
        this._core.trigger("play", null, "video"), this._playing && this.stop();
        var n, i, r = e(t.target || t.srcElement),
            o = r.closest("." + this._core.settings.itemClass),
            a = this._videos[o.attr("data-video")],
            s = a.width || "100%",
            l = a.height || this._core.$stage.height();
        "youtube" === a.type ? n = '<iframe width="' + s + '" height="' + l + '" src="http://www.youtube.com/embed/' + a.id + "?autoplay=1&v=" + a.id + '" frameborder="0" allowfullscreen></iframe>' : "vimeo" === a.type && (n = '<iframe src="http://player.vimeo.com/video/' + a.id + '?autoplay=1" width="' + s + '" height="' + l + '" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>'), o.addClass("owl-video-playing"), this._playing = o, i = e('<div style="height:' + l + "px; width:" + s + 'px" class="owl-video-frame">' + n + "</div>"), r.after(i)
    }, i.prototype.isInFullScreen = function() {
        var i = n.fullscreenElement || n.mozFullScreenElement || n.webkitFullscreenElement;
        return i && e(i).parent().hasClass("owl-video-frame") && (this._core.speed(0), this._fullscreen = !0), i && this._fullscreen && this._playing ? !1 : this._fullscreen ? (this._fullscreen = !1, !1) : this._playing && this._core.state.orientation !== t.orientation ? (this._core.state.orientation = t.orientation, !1) : !0
    }, i.prototype.destroy = function() {
        var e, t;
        this._core.$element.off("click.owl.video");
        for (e in this._handlers) this._core.$element.off(e, this._handlers[e]);
        for (t in Object.getOwnPropertyNames(this)) "function" != typeof this[t] && (this[t] = null)
    }, e.fn.owlCarousel.Constructor.Plugins.Video = i
}(window.Zepto || window.jQuery, window, document),
function(e, t, n, i) {
    var r = function(t) {
        this.core = t, this.core.options = e.extend({}, r.Defaults, this.core.options), this.swapping = !0, this.previous = i, this.next = i, this.handlers = {
            "change.owl.carousel": e.proxy(function(e) {
                "position" == e.property.name && (this.previous = this.core.current(), this.next = e.property.value)
            }, this),
            "drag.owl.carousel dragged.owl.carousel translated.owl.carousel": e.proxy(function(e) {
                this.swapping = "translated" == e.type
            }, this),
            "translate.owl.carousel": e.proxy(function() {
                this.swapping && (this.core.options.animateOut || this.core.options.animateIn) && this.swap()
            }, this)
        }, this.core.$element.on(this.handlers)
    };
    r.Defaults = {
        animateOut: !1,
        animateIn: !1
    }, r.prototype.swap = function() {
        if (1 === this.core.settings.items && this.core.support3d) {
            this.core.speed(0);
            var t, n = e.proxy(this.clear, this),
                i = this.core.$stage.children().eq(this.previous),
                r = this.core.$stage.children().eq(this.next),
                o = this.core.settings.animateIn,
                a = this.core.settings.animateOut;
            this.core.current() !== this.previous && (a && (t = this.core.coordinates(this.previous) - this.core.coordinates(this.next), i.css({
                left: t + "px"
            }).addClass("animated owl-animated-out").addClass(a).one("webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend", n)), o && r.addClass("animated owl-animated-in").addClass(o).one("webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend", n))
        }
    }, r.prototype.clear = function(t) {
        e(t.target).css({
            left: ""
        }).removeClass("animated owl-animated-out owl-animated-in").removeClass(this.core.settings.animateIn).removeClass(this.core.settings.animateOut), this.core.transitionEnd()
    }, r.prototype.destroy = function() {
        var e, t;
        for (e in this.handlers) this.core.$element.off(e, this.handlers[e]);
        for (t in Object.getOwnPropertyNames(this)) "function" != typeof this[t] && (this[t] = null)
    }, e.fn.owlCarousel.Constructor.Plugins.Animate = r
}(window.Zepto || window.jQuery, window, document),
function(e, t, n) {
    var i = function(t) {
        this.core = t, this.core.options = e.extend({}, i.Defaults, this.core.options), this.handlers = {
            "translated.owl.carousel refreshed.owl.carousel": e.proxy(function() {
                this.autoplay()
            }, this),
            "play.owl.autoplay": e.proxy(function(e, t, n) {
                this.play(t, n)
            }, this),
            "stop.owl.autoplay": e.proxy(function() {
                this.stop()
            }, this),
            "mouseover.owl.autoplay": e.proxy(function() {
                this.core.settings.autoplayHoverPause && this.pause()
            }, this),
            "mouseleave.owl.autoplay": e.proxy(function() {
                this.core.settings.autoplayHoverPause && this.autoplay()
            }, this)
        }, this.core.$element.on(this.handlers)
    };
    i.Defaults = {
        autoplay: !1,
        autoplayTimeout: 5e3,
        autoplayHoverPause: !1,
        autoplaySpeed: !1
    }, i.prototype.autoplay = function() {
        this.core.settings.autoplay && !this.core.state.videoPlay ? (t.clearInterval(this.interval), this.interval = t.setInterval(e.proxy(function() {
            this.play()
        }, this), this.core.settings.autoplayTimeout)) : t.clearInterval(this.interval)
    }, i.prototype.play = function() {
        return n.hidden === !0 || this.core.state.isTouch || this.core.state.isScrolling || this.core.state.isSwiping || this.core.state.inMotion ? void 0 : this.core.settings.autoplay === !1 ? void t.clearInterval(this.interval) : void this.core.next(this.core.settings.autoplaySpeed)
    }, i.prototype.stop = function() {
        t.clearInterval(this.interval)
    }, i.prototype.pause = function() {
        t.clearInterval(this.interval)
    }, i.prototype.destroy = function() {
        var e, n;
        t.clearInterval(this.interval);
        for (e in this.handlers) this.core.$element.off(e, this.handlers[e]);
        for (n in Object.getOwnPropertyNames(this)) "function" != typeof this[n] && (this[n] = null)
    }, e.fn.owlCarousel.Constructor.Plugins.autoplay = i
}(window.Zepto || window.jQuery, window, document),
function(e) {
    "use strict";
    var t = function(n) {
        this._core = n, this._initialized = !1, this._pages = [], this._controls = {}, this._templates = [], this.$element = this._core.$element, this._overrides = {
            next: this._core.next,
            prev: this._core.prev,
            to: this._core.to
        }, this._handlers = {
            "prepared.owl.carousel": e.proxy(function(t) {
                this._core.settings.dotsData && this._templates.push(e(t.content).find("[data-dot]").andSelf("[data-dot]").attr("data-dot"))
            }, this),
            "add.owl.carousel": e.proxy(function(t) {
                this._core.settings.dotsData && this._templates.splice(t.position, 0, e(t.content).find("[data-dot]").andSelf("[data-dot]").attr("data-dot"))
            }, this),
            "remove.owl.carousel prepared.owl.carousel": e.proxy(function(e) {
                this._core.settings.dotsData && this._templates.splice(e.position, 1)
            }, this),
            "change.owl.carousel": e.proxy(function(e) {
                if ("position" == e.property.name && !this._core.state.revert && !this._core.settings.loop && this._core.settings.navRewind) {
                    var t = this._core.current(),
                        n = this._core.maximum(),
                        i = this._core.minimum();
                    e.data = e.property.value > n ? t >= n ? i : n : e.property.value < i ? n : e.property.value
                }
            }, this),
            "changed.owl.carousel": e.proxy(function(e) {
                "position" == e.property.name && this.draw()
            }, this),
            "refreshed.owl.carousel": e.proxy(function() {
                this._initialized || (this.initialize(), this._initialized = !0), this._core.trigger("refresh", null, "navigation"), this.update(), this.draw(), this._core.trigger("refreshed", null, "navigation")
            }, this)
        }, this._core.options = e.extend({}, t.Defaults, this._core.options), this.$element.on(this._handlers)
    };
    t.Defaults = {
        nav: !1,
        navRewind: !0,
        navText: ["prev", "next"],
        navSpeed: !1,
        navElement: "div",
        navContainer: !1,
        navContainerClass: "owl-nav",
        navClass: ["owl-prev", "owl-next"],
        slideBy: 1,
        dotClass: "owl-dot",
        dotsClass: "owl-dots",
        dots: !0,
        dotsEach: !1,
        dotData: !1,
        dotsSpeed: !1,
        dotsContainer: !1,
        controlsClass: "owl-controls"
    }, t.prototype.initialize = function() {
        var t, n, i = this._core.settings;
        i.dotsData || (this._templates = [e("<div>").addClass(i.dotClass).append(e("<span>")).prop("outerHTML")]), i.navContainer && i.dotsContainer || (this._controls.$container = e("<div>").addClass(i.controlsClass).appendTo(this.$element)), this._controls.$indicators = i.dotsContainer ? e(i.dotsContainer) : e("<div>").hide().addClass(i.dotsClass).appendTo(this._controls.$container), this._controls.$indicators.on("click", "div", e.proxy(function(t) {
            var n = e(t.target).parent().is(this._controls.$indicators) ? e(t.target).index() : e(t.target).parent().index();
            t.preventDefault(), this.to(n, i.dotsSpeed)
        }, this)), t = i.navContainer ? e(i.navContainer) : e("<div>").addClass(i.navContainerClass).prependTo(this._controls.$container), this._controls.$next = e("<" + i.navElement + ">"), this._controls.$previous = this._controls.$next.clone(), this._controls.$previous.addClass(i.navClass[0]).html(i.navText[0]).hide().prependTo(t).on("click", e.proxy(function() {
            this.prev(i.navSpeed)
        }, this)), this._controls.$next.addClass(i.navClass[1]).html(i.navText[1]).hide().appendTo(t).on("click", e.proxy(function() {
            this.next(i.navSpeed)
        }, this));
        for (n in this._overrides) this._core[n] = e.proxy(this[n], this)
    }, t.prototype.destroy = function() {
        var e, t, n, i;
        for (e in this._handlers) this.$element.off(e, this._handlers[e]);
        for (t in this._controls) this._controls[t].remove();
        for (i in this.overides) this._core[i] = this._overrides[i];
        for (n in Object.getOwnPropertyNames(this)) "function" != typeof this[n] && (this[n] = null)
    }, t.prototype.update = function() {
        var e, t, n, i = this._core.settings,
            r = this._core.clones().length / 2,
            o = r + this._core.items().length,
            a = i.center || i.autoWidth || i.dotData ? 1 : i.dotsEach || i.items;
        if ("page" !== i.slideBy && (i.slideBy = Math.min(i.slideBy, i.items)), i.dots || "page" == i.slideBy)
            for (this._pages = [], e = r, t = 0, n = 0; o > e; e++)(t >= a || 0 === t) && (this._pages.push({
                start: e - r,
                end: e - r + a - 1
            }), t = 0, ++n), t += this._core.mergers(this._core.relative(e))
    }, t.prototype.draw = function() {
        var t, n, i = "",
            r = this._core.settings,
            o = (this._core.$stage.children(), this._core.relative(this._core.current()));
        if (!r.nav || r.loop || r.navRewind || (this._controls.$previous.toggleClass("disabled", 0 >= o), this._controls.$next.toggleClass("disabled", o >= this._core.maximum())), this._controls.$previous.toggle(r.nav), this._controls.$next.toggle(r.nav), r.dots) {
            if (t = this._pages.length - this._controls.$indicators.children().length, r.dotData && 0 !== t) {
                for (n = 0; n < this._controls.$indicators.children().length; n++) i += this._templates[this._core.relative(n)];
                this._controls.$indicators.html(i)
            } else t > 0 ? (i = new Array(t + 1).join(this._templates[0]), this._controls.$indicators.append(i)) : 0 > t && this._controls.$indicators.children().slice(t).remove();
            this._controls.$indicators.find(".active").removeClass("active"), this._controls.$indicators.children().eq(e.inArray(this.current(), this._pages)).addClass("active")
        }
        this._controls.$indicators.toggle(r.dots)
    }, t.prototype.onTrigger = function(t) {
        var n = this._core.settings;
        t.page = {
            index: e.inArray(this.current(), this._pages),
            count: this._pages.length,
            size: n && (n.center || n.autoWidth || n.dotData ? 1 : n.dotsEach || n.items)
        }
    }, t.prototype.current = function() {
        var t = this._core.relative(this._core.current());
        return e.grep(this._pages, function(e) {
            return e.start <= t && e.end >= t
        }).pop()
    }, t.prototype.getPosition = function(t) {
        var n, i, r = this._core.settings;
        return "page" == r.slideBy ? (n = e.inArray(this.current(), this._pages), i = this._pages.length, t ? ++n : --n, n = this._pages[(n % i + i) % i].start) : (n = this._core.relative(this._core.current()), i = this._core.items().length, t ? n += r.slideBy : n -= r.slideBy), n
    }, t.prototype.next = function(t) {
        e.proxy(this._overrides.to, this._core)(this.getPosition(!0), t)
    }, t.prototype.prev = function(t) {
        e.proxy(this._overrides.to, this._core)(this.getPosition(!1), t)
    }, t.prototype.to = function(t, n, i) {
        var r;
        i ? e.proxy(this._overrides.to, this._core)(t, n) : (r = this._pages.length, e.proxy(this._overrides.to, this._core)(this._pages[(t % r + r) % r].start, n))
    }, e.fn.owlCarousel.Constructor.Plugins.Navigation = t
}(window.Zepto || window.jQuery, window, document),
function(e, t) {
    "use strict";
    var n = function(i) {
        this._core = i, this._hashes = {}, this.$element = this._core.$element, this._handlers = {
            "initialized.owl.carousel": e.proxy(function() {
                "URLHash" == this._core.settings.startPosition && e(t).trigger("hashchange.owl.navigation")
            }, this),
            "prepared.owl.carousel": e.proxy(function(t) {
                var n = e(t.content).find("[data-hash]").andSelf("[data-hash]").attr("data-hash");
                this._hashes[n] = t.content
            }, this)
        }, this._core.options = e.extend({}, n.Defaults, this._core.options), this.$element.on(this._handlers), e(t).on("hashchange.owl.navigation", e.proxy(function() {
            var e = t.location.hash.substring(1),
                n = this._core.$stage.children(),
                i = this._hashes[e] && n.index(this._hashes[e]) || 0;
            return e ? void this._core.to(i, !1, !0) : !1
        }, this))
    };
    n.Defaults = {
        URLhashListener: !1
    }, n.prototype.destroy = function() {
        var n, i;
        e(t).off("hashchange.owl.navigation");
        for (n in this._handlers) this._core.$element.off(n, this._handlers[n]);
        for (i in Object.getOwnPropertyNames(this)) "function" != typeof this[i] && (this[i] = null)
    }, e.fn.owlCarousel.Constructor.Plugins.Hash = n
}(window.Zepto || window.jQuery, window, document),
function() {
    var e, t, n, i, r, o = function(e, t) {
            return function() {
                return e.apply(t, arguments)
            }
        },
        a = [].indexOf || function(e) {
            for (var t = 0, n = this.length; n > t; t++)
                if (t in this && this[t] === e) return t;
            return -1
        };
    t = function() {
        function e() {}
        return e.prototype.extend = function(e, t) {
            var n, i;
            for (n in t) i = t[n], null == e[n] && (e[n] = i);
            return e
        }, e.prototype.isMobile = function(e) {
            return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(e)
        }, e.prototype.addEvent = function(e, t, n) {
            return null != e.addEventListener ? e.addEventListener(t, n, !1) : null != e.attachEvent ? e.attachEvent("on" + t, n) : e[t] = n
        }, e.prototype.removeEvent = function(e, t, n) {
            return null != e.removeEventListener ? e.removeEventListener(t, n, !1) : null != e.detachEvent ? e.detachEvent("on" + t, n) : delete e[t]
        }, e.prototype.innerHeight = function() {
            return "innerHeight" in window ? window.innerHeight : document.documentElement.clientHeight
        }, e
    }(), n = this.WeakMap || this.MozWeakMap || (n = function() {
        function e() {
            this.keys = [], this.values = []
        }
        return e.prototype.get = function(e) {
            var t, n, i, r, o;
            for (o = this.keys, t = i = 0, r = o.length; r > i; t = ++i)
                if (n = o[t], n === e) return this.values[t]
        }, e.prototype.set = function(e, t) {
            var n, i, r, o, a;
            for (a = this.keys, n = r = 0, o = a.length; o > r; n = ++r)
                if (i = a[n], i === e) return void(this.values[n] = t);
            return this.keys.push(e), this.values.push(t)
        }, e
    }()), e = this.MutationObserver || this.WebkitMutationObserver || this.MozMutationObserver || (e = function() {
        function e() {
            "undefined" != typeof console && null !== console && console.warn("MutationObserver is not supported by your browser."), "undefined" != typeof console && null !== console && console.warn("WOW.js cannot detect dom mutations, please call .sync() after loading new content.")
        }
        return e.notSupported = !0, e.prototype.observe = function() {}, e
    }()), i = this.getComputedStyle || function(e) {
        return this.getPropertyValue = function(t) {
            var n;
            return "float" === t && (t = "styleFloat"), r.test(t) && t.replace(r, function(e, t) {
                return t.toUpperCase()
            }), (null != (n = e.currentStyle) ? n[t] : void 0) || null
        }, this
    }, r = /(\-([a-z]){1})/g, this.WOW = function() {
        function r(e) {
            null == e && (e = {}), this.scrollCallback = o(this.scrollCallback, this), this.scrollHandler = o(this.scrollHandler, this), this.start = o(this.start, this), this.scrolled = !0, this.config = this.util().extend(e, this.defaults), this.animationNameCache = new n
        }
        return r.prototype.defaults = {
            boxClass: "wow",
            animateClass: "animated",
            offset: 0,
            mobile: !0,
            live: !0
        }, r.prototype.init = function() {
            var e;
            return this.element = window.document.documentElement, "interactive" === (e = document.readyState) || "complete" === e ? this.start() : this.util().addEvent(document, "DOMContentLoaded", this.start), this.finished = []
        }, r.prototype.start = function() {
            var t, n, i, r;
            if (this.stopped = !1, this.boxes = function() {
                    var e, n, i, r;
                    for (i = this.element.querySelectorAll("." + this.config.boxClass), r = [], e = 0, n = i.length; n > e; e++) t = i[e], r.push(t);
                    return r
                }.call(this), this.all = function() {
                    var e, n, i, r;
                    for (i = this.boxes, r = [], e = 0, n = i.length; n > e; e++) t = i[e], r.push(t);
                    return r
                }.call(this), this.boxes.length)
                if (this.disabled()) this.resetStyle();
                else {
                    for (r = this.boxes, n = 0, i = r.length; i > n; n++) t = r[n], this.applyStyle(t, !0);
                    this.util().addEvent(window, "scroll", this.scrollHandler), this.util().addEvent(window, "resize", this.scrollHandler), this.interval = setInterval(this.scrollCallback, 50)
                }
            return this.config.live ? new e(function(e) {
                return function(t) {
                    var n, i, r, o, a;
                    for (a = [], r = 0, o = t.length; o > r; r++) i = t[r], a.push(function() {
                        var e, t, r, o;
                        for (r = i.addedNodes || [], o = [], e = 0, t = r.length; t > e; e++) n = r[e], o.push(this.doSync(n));
                        return o
                    }.call(e));
                    return a
                }
            }(this)).observe(document.body, {
                childList: !0,
                subtree: !0
            }) : void 0
        }, r.prototype.stop = function() {
            return this.stopped = !0, this.util().removeEvent(window, "scroll", this.scrollHandler), this.util().removeEvent(window, "resize", this.scrollHandler), null != this.interval ? clearInterval(this.interval) : void 0
        }, r.prototype.sync = function() {
            return e.notSupported ? this.doSync(this.element) : void 0
        }, r.prototype.doSync = function(e) {
            var t, n, i, r, o;
            if (null == e && (e = this.element), 1 === e.nodeType) {
                for (e = e.parentNode || e, r = e.querySelectorAll("." + this.config.boxClass), o = [], n = 0, i = r.length; i > n; n++) t = r[n], a.call(this.all, t) < 0 ? (this.boxes.push(t), this.all.push(t), this.stopped || this.disabled() ? this.resetStyle() : this.applyStyle(t, !0), o.push(this.scrolled = !0)) : o.push(void 0);
                return o
            }
        }, r.prototype.show = function(e) {
            return this.applyStyle(e), e.className = "" + e.className + " " + this.config.animateClass
        }, r.prototype.applyStyle = function(e, t) {
            var n, i, r;
            return i = e.getAttribute("data-wow-duration"), n = e.getAttribute("data-wow-delay"), r = e.getAttribute("data-wow-iteration"), this.animate(function(o) {
                return function() {
                    return o.customStyle(e, t, i, n, r)
                }
            }(this))
        }, r.prototype.animate = function() {
            return "requestAnimationFrame" in window ? function(e) {
                return window.requestAnimationFrame(e)
            } : function(e) {
                return e()
            }
        }(), r.prototype.resetStyle = function() {
            var e, t, n, i, r;
            for (i = this.boxes, r = [], t = 0, n = i.length; n > t; t++) e = i[t], r.push(e.style.visibility = "visible");
            return r
        }, r.prototype.customStyle = function(e, t, n, i, r) {
            return t && this.cacheAnimationName(e), e.style.visibility = t ? "hidden" : "visible", n && this.vendorSet(e.style, {
                animationDuration: n
            }), i && this.vendorSet(e.style, {
                animationDelay: i
            }), r && this.vendorSet(e.style, {
                animationIterationCount: r
            }), this.vendorSet(e.style, {
                animationName: t ? "none" : this.cachedAnimationName(e)
            }), e
        }, r.prototype.vendors = ["moz", "webkit"], r.prototype.vendorSet = function(e, t) {
            var n, i, r, o;
            o = [];
            for (n in t) i = t[n], e["" + n] = i, o.push(function() {
                var t, o, a, s;
                for (a = this.vendors, s = [], t = 0, o = a.length; o > t; t++) r = a[t], s.push(e["" + r + n.charAt(0).toUpperCase() + n.substr(1)] = i);
                return s
            }.call(this));
            return o
        }, r.prototype.vendorCSS = function(e, t) {
            var n, r, o, a, s, l;
            for (r = i(e), n = r.getPropertyCSSValue(t), l = this.vendors, a = 0, s = l.length; s > a; a++) o = l[a], n = n || r.getPropertyCSSValue("-" + o + "-" + t);
            return n
        }, r.prototype.animationName = function(e) {
            var t;
            try {
                t = this.vendorCSS(e, "animation-name").cssText
            } catch (n) {
                t = i(e).getPropertyValue("animation-name")
            }
            return "none" === t ? "" : t
        }, r.prototype.cacheAnimationName = function(e) {
            return this.animationNameCache.set(e, this.animationName(e))
        }, r.prototype.cachedAnimationName = function(e) {
            return this.animationNameCache.get(e)
        }, r.prototype.scrollHandler = function() {
            return this.scrolled = !0
        }, r.prototype.scrollCallback = function() {
            var e;
            return !this.scrolled || (this.scrolled = !1, this.boxes = function() {
                var t, n, i, r;
                for (i = this.boxes, r = [], t = 0, n = i.length; n > t; t++) e = i[t], e && (this.isVisible(e) ? this.show(e) : r.push(e));
                return r
            }.call(this), this.boxes.length || this.config.live) ? void 0 : this.stop()
        }, r.prototype.offsetTop = function(e) {
            for (var t; void 0 === e.offsetTop;) e = e.parentNode;
            for (t = e.offsetTop; e = e.offsetParent;) t += e.offsetTop;
            return t
        }, r.prototype.isVisible = function(e) {
            var t, n, i, r, o;
            return n = e.getAttribute("data-wow-offset") || this.config.offset, o = window.pageYOffset, r = o + Math.min(this.element.clientHeight, this.util().innerHeight()) - n, i = this.offsetTop(e), t = i + e.clientHeight, r >= i && t >= o
        }, r.prototype.util = function() {
            return null != this._util ? this._util : this._util = new t
        }, r.prototype.disabled = function() {
            return !this.config.mobile && this.util().isMobile(navigator.userAgent)
        }, r
    }()
}.call(this),
    function(e) {
        "use strict";
        var t = {
            init: function(n) {
                var i = this;
                return i.data("jqv") && null != i.data("jqv") || (n = t._saveOptions(i, n), e(document).on("click", ".formError", function() {
                    e(this).fadeOut(150, function() {
                        e(this).parent(".formErrorOuter").remove(), e(this).remove()
                    })
                })), this
            },
            attach: function(n) {
                var i, r = this;
                return i = n ? t._saveOptions(r, n) : r.data("jqv"), i.validateAttribute = r.find("[data-validation-engine*=validate]").length ? "data-validation-engine" : "class", i.binded && (r.on(i.validationEventTrigger, "[" + i.validateAttribute + "*=validate]:not([type=checkbox]):not([type=radio]):not(.datepicker)", t._onFieldEvent), r.on("click", "[" + i.validateAttribute + "*=validate][type=checkbox],[" + i.validateAttribute + "*=validate][type=radio]", t._onFieldEvent), r.on(i.validationEventTrigger, "[" + i.validateAttribute + "*=validate][class*=datepicker]", {
                    delay: 300
                }, t._onFieldEvent)), i.autoPositionUpdate && e(window).bind("resize", {
                    noAnimation: !0,
                    formElem: r
                }, t.updatePromptsPosition), r.on("click", "a[data-validation-engine-skip], a[class*='validate-skip'], button[data-validation-engine-skip], button[class*='validate-skip'], input[data-validation-engine-skip], input[class*='validate-skip']", t._submitButtonClick), r.removeData("jqv_submitButton"), r.on("submit", t._onSubmitEvent), this
            },
            detach: function() {
                var n = this,
                    i = n.data("jqv");
                return n.find("[" + i.validateAttribute + "*=validate]").not("[type=checkbox]").off(i.validationEventTrigger, t._onFieldEvent), n.find("[" + i.validateAttribute + "*=validate][type=checkbox],[class*=validate][type=radio]").off("click", t._onFieldEvent), n.off("submit", t.onAjaxFormComplete), n.die("submit", t.onAjaxFormComplete), n.removeData("jqv"), n.off("click", "a[data-validation-engine-skip], a[class*='validate-skip'], button[data-validation-engine-skip], button[class*='validate-skip'], input[data-validation-engine-skip], input[class*='validate-skip']", t._submitButtonClick), n.removeData("jqv_submitButton"), i.autoPositionUpdate && e(window).unbind("resize", t.updatePromptsPosition), this
            },
            validate: function() {
                var n = e(this),
                    i = null;
                if (!n.is("form") && !n.hasClass("validationEngineContainer") || n.hasClass("validating"))
                    if (n.is("form") || n.hasClass("validationEngineContainer")) n.removeClass("validating");
                    else {
                        var r = n.closest("form, .validationEngineContainer"),
                            o = r.data("jqv") ? r.data("jqv") : e.validationEngine.defaults,
                            i = t._validateField(n, o);
                        i && o.onFieldSuccess ? o.onFieldSuccess() : o.onFieldFailure && o.InvalidFields.length > 0 && o.onFieldFailure()
                    } else {
                    n.addClass("validating");
                    var o = n.data("jqv"),
                        i = t._validateFields(this);
                    setTimeout(function() {
                        n.removeClass("validating")
                    }, 100), i && o.onSuccess ? o.onSuccess() : !i && o.onFailure && o.onFailure()
                }
                return o.onValidationComplete ? !!o.onValidationComplete(r, i) : i
            },
            updatePromptsPosition: function(n) {
                if (n && this == window) var i = n.data.formElem,
                    r = n.data.noAnimation;
                else var i = e(this.closest("form, .validationEngineContainer"));
                var o = i.data("jqv");
                return i.find("[" + o.validateAttribute + "*=validate]").not(":disabled").each(function() {
                    var n = e(this);
                    o.prettySelect && n.is(":hidden") && (n = i.find("#" + o.usePrefix + n.attr("id") + o.useSuffix));
                    var a = t._getPrompt(n),
                        s = e(a).find(".formErrorContent").html();
                    a && t._updatePrompt(n, e(a), s, void 0, !1, o, r)
                }), this
            },
            showPrompt: function(e, n, i, r) {
                var o = this.closest("form, .validationEngineContainer"),
                    a = o.data("jqv");
                return a || (a = t._saveOptions(this, a)), i && (a.promptPosition = i), a.showArrow = 1 == r, t._showPrompt(this, e, n, !1, a), this
            },
            hide: function() {
                var n, i = e(this).closest("form, .validationEngineContainer"),
                    r = i.data("jqv"),
                    o = r && r.fadeDuration ? r.fadeDuration : .3;
                return n = e(this).is("form") || e(this).hasClass("validationEngineContainer") ? "parentForm" + t._getClassName(e(this).attr("id")) : t._getClassName(e(this).attr("id")) + "formError", e("." + n).fadeTo(o, .3, function() {
                    e(this).parent(".formErrorOuter").remove(), e(this).remove()
                }), this
            },
            hideAll: function() {
                var t = this,
                    n = t.data("jqv"),
                    i = n ? n.fadeDuration : 300;
                return e(".formError").fadeTo(i, 300, function() {
                    e(this).parent(".formErrorOuter").remove(), e(this).remove()
                }), this
            },
            _onFieldEvent: function(n) {
                var i = e(this),
                    r = i.closest("form, .validationEngineContainer"),
                    o = r.data("jqv");
                o.eventTrigger = "field", window.setTimeout(function() {
                    t._validateField(i, o), 0 == o.InvalidFields.length && o.onFieldSuccess ? o.onFieldSuccess() : o.InvalidFields.length > 0 && o.onFieldFailure && o.onFieldFailure()
                }, n.data ? n.data.delay : 0)
            },
            _onSubmitEvent: function() {
                var n = e(this),
                    i = n.data("jqv");
                if (n.data("jqv_submitButton")) {
                    var r = e("#" + n.data("jqv_submitButton"));
                    if (r && r.length > 0 && (r.hasClass("validate-skip") || "true" == r.attr("data-validation-engine-skip"))) return !0
                }
                i.eventTrigger = "submit";
                var o = t._validateFields(n);
                return o && i.ajaxFormValidation ? (t._validateFormWithAjax(n, i), !1) : i.onValidationComplete ? !!i.onValidationComplete(n, o) : o
            },
            _checkAjaxStatus: function(t) {
                var n = !0;
                return e.each(t.ajaxValidCache, function(e, t) {
                    return t ? void 0 : (n = !1, !1)
                }), n
            },
            _checkAjaxFieldStatus: function(e, t) {
                return 1 == t.ajaxValidCache[e]
            },
            _validateFields: function(n) {
                var i = n.data("jqv"),
                    r = !1;
                n.trigger("jqv.form.validating");
                var o = null;
                if (n.find("[" + i.validateAttribute + "*=validate]").not(":disabled").each(function() {
                        var a = e(this),
                            s = [];
                        if (e.inArray(a.attr("name"), s) < 0) {
                            if (r |= t._validateField(a, i), r && null == o && (o = a.is(":hidden") && i.prettySelect ? a = n.find("#" + i.usePrefix + t._jqSelector(a.attr("id")) + i.useSuffix) : a), i.doNotShowAllErrosOnSubmit) return !1;
                            if (s.push(a.attr("name")), 1 == i.showOneMessage && r) return !1
                        }
                    }), n.trigger("jqv.form.result", [r]), r) {
                    if (i.scroll) {
                        var a = o.offset().top,
                            s = o.offset().left,
                            l = i.promptPosition;
                        if ("string" == typeof l && -1 != l.indexOf(":") && (l = l.substring(0, l.indexOf(":"))), "bottomRight" != l && "bottomLeft" != l) {
                            var u = t._getPrompt(o);
                            u && (a = u.offset().top)
                        }
                        if (i.scrollOffset && (a -= i.scrollOffset), i.isOverflown) {
                            var c = e(i.overflownDIV);
                            if (!c.length) return !1;
                            var d = c.scrollTop(),
                                h = -parseInt(c.offset().top);
                            a += d + h - 5;
                            var f = e(i.overflownDIV + ":not(:animated)");
                            f.animate({
                                scrollTop: a
                            }, 1100, function() {
                                i.focusFirstField && o.focus()
                            })
                        } else e("html, body").animate({
                            scrollTop: a
                        }, 1100, function() {
                            i.focusFirstField && o.focus()
                        }), e("html, body").animate({
                            scrollLeft: s
                        }, 1100)
                    } else i.focusFirstField && o.focus();
                    return !1
                }
                return !0
            },
            _validateFormWithAjax: function(n, i) {
                var r = n.serialize(),
                    o = i.ajaxFormValidationMethod ? i.ajaxFormValidationMethod : "GET",
                    a = i.ajaxFormValidationURL ? i.ajaxFormValidationURL : n.attr("action"),
                    s = i.dataType ? i.dataType : "json";
                e.ajax({
                    type: o,
                    url: a,
                    cache: !1,
                    dataType: s,
                    data: r,
                    form: n,
                    methods: t,
                    options: i,
                    beforeSend: function() {
                        return i.onBeforeAjaxFormValidation(n, i)
                    },
                    error: function(e, n) {
                        t._ajaxError(e, n)
                    },
                    success: function(r) {
                        if ("json" == s && r !== !0) {
                            for (var o = !1, a = 0; a < r.length; a++) {
                                var l = r[a],
                                    u = l[0],
                                    c = e(e("#" + u)[0]);
                                if (1 == c.length) {
                                    var d = l[2];
                                    if (1 == l[1])
                                        if ("" != d && d) {
                                            if (i.allrules[d]) {
                                                var h = i.allrules[d].alertTextOk;
                                                h && (d = h)
                                            }
                                            i.showPrompts && t._showPrompt(c, d, "pass", !1, i, !0)
                                        } else t._closePrompt(c);
                                    else {
                                        if (o |= !0, i.allrules[d]) {
                                            var h = i.allrules[d].alertText;
                                            h && (d = h)
                                        }
                                        i.showPrompts && t._showPrompt(c, d, "", !1, i, !0)
                                    }
                                }
                            }
                            i.onAjaxFormComplete(!o, n, r, i)
                        } else i.onAjaxFormComplete(!0, n, r, i)
                    }
                })
            },
            _validateField: function(n, i, r) {
                if (n.attr("id") || (n.attr("id", "form-validation-field-" + e.validationEngine.fieldIdCounter), ++e.validationEngine.fieldIdCounter), !i.validateNonVisibleFields && (n.is(":hidden") && !i.prettySelect || n.parent().is(":hidden"))) return !1;
                var o = n.attr(i.validateAttribute),
                    a = /validate\[(.*)\]/.exec(o);
                if (!a) return !1;
                var s = a[1],
                    l = s.split(/\[|,|\]/),
                    u = !1,
                    c = n.attr("name"),
                    d = "",
                    h = "",
                    f = !1,
                    p = !1;
                i.isError = !1, i.showArrow = !0, i.maxErrorsPerField > 0 && (p = !0);
                for (var g = e(n.closest("form, .validationEngineContainer")), m = 0; m < l.length; m++) l[m] = l[m].replace(" ", ""), "" === l[m] && delete l[m];
                for (var m = 0, v = 0; m < l.length; m++) {
                    if (p && v >= i.maxErrorsPerField) {
                        if (!f) {
                            var y = e.inArray("required", l);
                            f = -1 != y && y >= m
                        }
                        break
                    }
                    var x = void 0;
                    switch (l[m]) {
                        case "required":
                            f = !0, x = t._getErrorMessage(g, n, l[m], l, m, i, t._required);
                            break;
                        case "custom":
                            x = t._getErrorMessage(g, n, l[m], l, m, i, t._custom);
                            break;
                        case "groupRequired":
                            var b = "[" + i.validateAttribute + "*=" + l[m + 1] + "]",
                                w = g.find(b).eq(0);
                            w[0] != n[0] && (t._validateField(w, i, r), i.showArrow = !0), x = t._getErrorMessage(g, n, l[m], l, m, i, t._groupRequired), x && (f = !0), i.showArrow = !1;
                            break;
                        case "ajax":
                            x = t._ajax(n, l, m, i), x && (h = "load");
                            break;
                        case "minSize":
                            x = t._getErrorMessage(g, n, l[m], l, m, i, t._minSize);
                            break;
                        case "maxSize":
                            x = t._getErrorMessage(g, n, l[m], l, m, i, t._maxSize);
                            break;
                        case "min":
                            x = t._getErrorMessage(g, n, l[m], l, m, i, t._min);
                            break;
                        case "max":
                            x = t._getErrorMessage(g, n, l[m], l, m, i, t._max);
                            break;
                        case "past":
                            x = t._getErrorMessage(g, n, l[m], l, m, i, t._past);
                            break;
                        case "future":
                            x = t._getErrorMessage(g, n, l[m], l, m, i, t._future);
                            break;
                        case "dateRange":
                            var b = "[" + i.validateAttribute + "*=" + l[m + 1] + "]";
                            i.firstOfGroup = g.find(b).eq(0), i.secondOfGroup = g.find(b).eq(1), (i.firstOfGroup[0].value || i.secondOfGroup[0].value) && (x = t._getErrorMessage(g, n, l[m], l, m, i, t._dateRange)), x && (f = !0), i.showArrow = !1;
                            break;
                        case "dateTimeRange":
                            var b = "[" + i.validateAttribute + "*=" + l[m + 1] + "]";
                            i.firstOfGroup = g.find(b).eq(0), i.secondOfGroup = g.find(b).eq(1), (i.firstOfGroup[0].value || i.secondOfGroup[0].value) && (x = t._getErrorMessage(g, n, l[m], l, m, i, t._dateTimeRange)), x && (f = !0), i.showArrow = !1;
                            break;
                        case "maxCheckbox":
                            n = e(g.find("input[name='" + c + "']")), x = t._getErrorMessage(g, n, l[m], l, m, i, t._maxCheckbox);
                            break;
                        case "minCheckbox":
                            n = e(g.find("input[name='" + c + "']")), x = t._getErrorMessage(g, n, l[m], l, m, i, t._minCheckbox);
                            break;
                        case "equals":
                            x = t._getErrorMessage(g, n, l[m], l, m, i, t._equals);
                            break;
                        case "funcCall":
                            x = t._getErrorMessage(g, n, l[m], l, m, i, t._funcCall);
                            break;
                        case "creditCard":
                            x = t._getErrorMessage(g, n, l[m], l, m, i, t._creditCard);
                            break;
                        case "condRequired":
                            x = t._getErrorMessage(g, n, l[m], l, m, i, t._condRequired), void 0 !== x && (f = !0)
                    }
                    var _ = !1;
                    if ("object" == typeof x) switch (x.status) {
                        case "_break":
                            _ = !0;
                            break;
                        case "_error":
                            x = x.message;
                            break;
                        case "_error_no_prompt":
                            return !0
                    }
                    if (_) break;
                    "string" == typeof x && (d += x + "<br/>", i.isError = !0, v++)
                }!f && !n.val() && n.val().length < 1 && (i.isError = !1);
                var C = n.prop("type"),
                    T = n.data("promptPosition") || i.promptPosition;
                ("radio" == C || "checkbox" == C) && g.find("input[name='" + c + "']").size() > 1 && (n = e("inline" === T ? g.find("input[name='" + c + "'][type!=hidden]:last") : g.find("input[name='" + c + "'][type!=hidden]:first")), i.showArrow = !1), n.is(":hidden") && i.prettySelect && (n = g.find("#" + i.usePrefix + t._jqSelector(n.attr("id")) + i.useSuffix)), i.isError && i.showPrompts ? t._showPrompt(n, d, h, !1, i) : u || t._closePrompt(n), u || n.trigger("jqv.field.result", [n, i.isError, d]);
                var F = e.inArray(n[0], i.InvalidFields);
                return -1 == F ? i.isError && i.InvalidFields.push(n[0]) : i.isError || i.InvalidFields.splice(F, 1), t._handleStatusCssClasses(n, i), i.isError && i.onFieldFailure && i.onFieldFailure(n), !i.isError && i.onFieldSuccess && i.onFieldSuccess(n), i.isError
            },
            _handleStatusCssClasses: function(e, t) {
                t.addSuccessCssClassToField && e.removeClass(t.addSuccessCssClassToField), t.addFailureCssClassToField && e.removeClass(t.addFailureCssClassToField), t.addSuccessCssClassToField && !t.isError && e.addClass(t.addSuccessCssClassToField), t.addFailureCssClassToField && t.isError && e.addClass(t.addFailureCssClassToField)
            },
            _getErrorMessage: function(n, i, r, o, a, s, l) {
                var u = jQuery.inArray(r, o);
                if ("custom" === r || "funcCall" === r) {
                    var c = o[u + 1];
                    r = r + "[" + c + "]", delete o[u]
                }
                var d, h = r,
                    f = i.attr(i.attr("data-validation-engine") ? "data-validation-engine" : "class"),
                    p = f.split(" ");
                if (d = "future" == r || "past" == r || "maxCheckbox" == r || "minCheckbox" == r ? l(n, i, o, a, s) : l(i, o, a, s), void 0 != d) {
                    var g = t._getCustomErrorMessage(e(i), p, h, s);
                    g && (d = g)
                }
                return d
            },
            _getCustomErrorMessage: function(e, n, i, r) {
                var o = !1,
                    a = t._validityProp[i];
                if (void 0 != a && (o = e.attr("data-errormessage-" + a), void 0 != o)) return o;
                if (o = e.attr("data-errormessage"), void 0 != o) return o;
                var s = "#" + e.attr("id");
                if ("undefined" != typeof r.custom_error_messages[s] && "undefined" != typeof r.custom_error_messages[s][i]) o = r.custom_error_messages[s][i].message;
                else if (n.length > 0)
                    for (var l = 0; l < n.length && n.length > 0; l++) {
                        var u = "." + n[l];
                        if ("undefined" != typeof r.custom_error_messages[u] && "undefined" != typeof r.custom_error_messages[u][i]) {
                            o = r.custom_error_messages[u][i].message;
                            break
                        }
                    }
                return o || "undefined" == typeof r.custom_error_messages[i] || "undefined" == typeof r.custom_error_messages[i].message || (o = r.custom_error_messages[i].message), o
            },
            _validityProp: {
                required: "value-missing",
                custom: "custom-error",
                groupRequired: "value-missing",
                ajax: "custom-error",
                minSize: "range-underflow",
                maxSize: "range-overflow",
                min: "range-underflow",
                max: "range-overflow",
                past: "type-mismatch",
                future: "type-mismatch",
                dateRange: "type-mismatch",
                dateTimeRange: "type-mismatch",
                maxCheckbox: "range-overflow",
                minCheckbox: "range-underflow",
                equals: "pattern-mismatch",
                funcCall: "custom-error",
                creditCard: "pattern-mismatch",
                condRequired: "value-missing"
            },
            _required: function(t, n, i, r, o) {
                switch (t.prop("type")) {
                    case "text":
                    case "password":
                    case "textarea":
                    case "file":
                    case "select-one":
                    case "select-multiple":
                    default:
                        var a = e.trim(t.val()),
                            s = e.trim(t.attr("data-validation-placeholder")),
                            l = e.trim(t.attr("placeholder"));
                        if (!a || s && a == s || l && a == l) return r.allrules[n[i]].alertText;
                        break;
                    case "radio":
                    case "checkbox":
                        if (o) {
                            if (!t.attr("checked")) return r.allrules[n[i]].alertTextCheckboxMultiple;
                            break
                        }
                        var u = t.closest("form, .validationEngineContainer"),
                            c = t.attr("name");
                        if (0 == u.find("input[name='" + c + "']:checked").size()) return 1 == u.find("input[name='" + c + "']:visible").size() ? r.allrules[n[i]].alertTextCheckboxe : r.allrules[n[i]].alertTextCheckboxMultiple
                }
            },
            _groupRequired: function(n, i, r, o) {
                var a = "[" + o.validateAttribute + "*=" + i[r + 1] + "]",
                    s = !1;
                return n.closest("form, .validationEngineContainer").find(a).each(function() {
                    return t._required(e(this), i, r, o) ? void 0 : (s = !0, !1)
                }), s ? void 0 : o.allrules[i[r]].alertText
            },
            _custom: function(e, t, n, i) {
                var r, o = t[n + 1],
                    a = i.allrules[o];
                if (!a) return void alert("jqv:custom rule not found - " + o);
                if (a.regex) {
                    var s = a.regex;
                    if (!s) return void alert("jqv:custom regex not found - " + o);
                    var l = new RegExp(s);
                    if (!l.test(e.val())) return i.allrules[o].alertText
                } else {
                    if (!a.func) return void alert("jqv:custom type not allowed " + o);
                    if (r = a.func, "function" != typeof r) return void alert("jqv:custom parameter 'function' is no function - " + o);
                    if (!r(e, t, n, i)) return i.allrules[o].alertText
                }
            },
            _funcCall: function(e, t, n, i) {
                var r, o = t[n + 1];
                if (o.indexOf(".") > -1) {
                    for (var a = o.split("."), s = window; a.length;) s = s[a.shift()];
                    r = s
                } else r = window[o] || i.customFunctions[o];
                return "function" == typeof r ? r(e, t, n, i) : void 0
            },
            _equals: function(t, n, i, r) {
                var o = n[i + 1];
                return t.val() != e("#" + o).val() ? r.allrules.equals.alertText : void 0
            },
            _maxSize: function(e, t, n, i) {
                var r = t[n + 1],
                    o = e.val().length;
                if (o > r) {
                    var a = i.allrules.maxSize;
                    return a.alertText + r + a.alertText2
                }
            },
            _minSize: function(e, t, n, i) {
                var r = t[n + 1],
                    o = e.val().length;
                if (r > o) {
                    var a = i.allrules.minSize;
                    return a.alertText + r + a.alertText2
                }
            },
            _min: function(e, t, n, i) {
                var r = parseFloat(t[n + 1]),
                    o = parseFloat(e.val());
                if (r > o) {
                    var a = i.allrules.min;
                    return a.alertText2 ? a.alertText + r + a.alertText2 : a.alertText + r
                }
            },
            _max: function(e, t, n, i) {
                var r = parseFloat(t[n + 1]),
                    o = parseFloat(e.val());
                if (o > r) {
                    var a = i.allrules.max;
                    return a.alertText2 ? a.alertText + r + a.alertText2 : a.alertText + r
                }
            },
            _past: function(n, i, r, o, a) {
                var s, l = r[o + 1],
                    u = e(n.find("input[name='" + l.replace(/^#+/, "") + "']"));
                if ("now" == l.toLowerCase()) s = new Date;
                else if (void 0 != u.val()) {
                    if (u.is(":disabled")) return;
                    s = t._parseDate(u.val())
                } else s = t._parseDate(l);
                var c = t._parseDate(i.val());
                if (c > s) {
                    var d = a.allrules.past;
                    return d.alertText2 ? d.alertText + t._dateToString(s) + d.alertText2 : d.alertText + t._dateToString(s)
                }
            },
            _future: function(n, i, r, o, a) {
                var s, l = r[o + 1],
                    u = e(n.find("input[name='" + l.replace(/^#+/, "") + "']"));
                if ("now" == l.toLowerCase()) s = new Date;
                else if (void 0 != u.val()) {
                    if (u.is(":disabled")) return;
                    s = t._parseDate(u.val())
                } else s = t._parseDate(l);
                var c = t._parseDate(i.val());
                if (s > c) {
                    var d = a.allrules.future;
                    return d.alertText2 ? d.alertText + t._dateToString(s) + d.alertText2 : d.alertText + t._dateToString(s)
                }
            },
            _isDate: function(e) {
                var t = new RegExp(/^\d{4}[\/\-](0?[1-9]|1[012])[\/\-](0?[1-9]|[12][0-9]|3[01])$|^(?:(?:(?:0?[13578]|1[02])(\/|-)31)|(?:(?:0?[1,3-9]|1[0-2])(\/|-)(?:29|30)))(\/|-)(?:[1-9]\d\d\d|\d[1-9]\d\d|\d\d[1-9]\d|\d\d\d[1-9])$|^(?:(?:0?[1-9]|1[0-2])(\/|-)(?:0?[1-9]|1\d|2[0-8]))(\/|-)(?:[1-9]\d\d\d|\d[1-9]\d\d|\d\d[1-9]\d|\d\d\d[1-9])$|^(0?2(\/|-)29)(\/|-)(?:(?:0[48]00|[13579][26]00|[2468][048]00)|(?:\d\d)?(?:0[48]|[2468][048]|[13579][26]))$/);
                return t.test(e)
            },
            _isDateTime: function(e) {
                var t = new RegExp(/^\d{4}[\/\-](0?[1-9]|1[012])[\/\-](0?[1-9]|[12][0-9]|3[01])\s+(1[012]|0?[1-9]){1}:(0?[1-5]|[0-6][0-9]){1}:(0?[0-6]|[0-6][0-9]){1}\s+(am|pm|AM|PM){1}$|^(?:(?:(?:0?[13578]|1[02])(\/|-)31)|(?:(?:0?[1,3-9]|1[0-2])(\/|-)(?:29|30)))(\/|-)(?:[1-9]\d\d\d|\d[1-9]\d\d|\d\d[1-9]\d|\d\d\d[1-9])$|^((1[012]|0?[1-9]){1}\/(0?[1-9]|[12][0-9]|3[01]){1}\/\d{2,4}\s+(1[012]|0?[1-9]){1}:(0?[1-5]|[0-6][0-9]){1}:(0?[0-6]|[0-6][0-9]){1}\s+(am|pm|AM|PM){1})$/);
                return t.test(e)
            },
            _dateCompare: function(e, t) {
                return new Date(e.toString()) < new Date(t.toString())
            },
            _dateRange: function(e, n, i, r) {
                return !r.firstOfGroup[0].value && r.secondOfGroup[0].value || r.firstOfGroup[0].value && !r.secondOfGroup[0].value ? r.allrules[n[i]].alertText + r.allrules[n[i]].alertText2 : t._isDate(r.firstOfGroup[0].value) && t._isDate(r.secondOfGroup[0].value) && t._dateCompare(r.firstOfGroup[0].value, r.secondOfGroup[0].value) ? void 0 : r.allrules[n[i]].alertText + r.allrules[n[i]].alertText2
            },
            _dateTimeRange: function(e, n, i, r) {
                return !r.firstOfGroup[0].value && r.secondOfGroup[0].value || r.firstOfGroup[0].value && !r.secondOfGroup[0].value ? r.allrules[n[i]].alertText + r.allrules[n[i]].alertText2 : t._isDateTime(r.firstOfGroup[0].value) && t._isDateTime(r.secondOfGroup[0].value) && t._dateCompare(r.firstOfGroup[0].value, r.secondOfGroup[0].value) ? void 0 : r.allrules[n[i]].alertText + r.allrules[n[i]].alertText2
            },
            _maxCheckbox: function(e, t, n, i, r) {
                var o = n[i + 1],
                    a = t.attr("name"),
                    s = e.find("input[name='" + a + "']:checked").size();
                return s > o ? (r.showArrow = !1, r.allrules.maxCheckbox.alertText2 ? r.allrules.maxCheckbox.alertText + " " + o + " " + r.allrules.maxCheckbox.alertText2 : r.allrules.maxCheckbox.alertText) : void 0
            },
            _minCheckbox: function(e, t, n, i, r) {
                var o = n[i + 1],
                    a = t.attr("name"),
                    s = e.find("input[name='" + a + "']:checked").size();
                return o > s ? (r.showArrow = !1, r.allrules.minCheckbox.alertText + " " + o + " " + r.allrules.minCheckbox.alertText2) : void 0
            },
            _creditCard: function(e, t, n, i) {
                var r = !1,
                    o = e.val().replace(/ +/g, "").replace(/-+/g, ""),
                    a = o.length;
                if (a >= 14 && 16 >= a && parseInt(o) > 0) {
                    var s, l = 0,
                        n = a - 1,
                        u = 1,
                        c = new String;
                    do s = parseInt(o.charAt(n)), c += u++ % 2 == 0 ? 2 * s : s; while (--n >= 0);
                    for (n = 0; n < c.length; n++) l += parseInt(c.charAt(n));
                    r = l % 10 == 0
                }
                return r ? void 0 : i.allrules.creditCard.alertText
            },
            _ajax: function(n, i, r, o) {
                var a = i[r + 1],
                    s = o.allrules[a],
                    l = s.extraData,
                    u = s.extraDataDynamic,
                    c = {
                        fieldId: n.attr("id"),
                        fieldValue: n.val()
                    };
                if ("object" == typeof l) e.extend(c, l);
                else if ("string" == typeof l)
                    for (var d = l.split("&"), r = 0; r < d.length; r++) {
                        var h = d[r].split("=");
                        h[0] && h[0] && (c[h[0]] = h[1])
                    }
                if (u)
                    for (var f = String(u).split(","), r = 0; r < f.length; r++) {
                        var p = f[r];
                        if (e(p).length) {
                            {
                                var g = n.closest("form, .validationEngineContainer").find(p).val();
                                p.replace("#", "") + "=" + escape(g)
                            }
                            c[p.replace("#", "")] = g
                        }
                    }
                return "field" == o.eventTrigger && delete o.ajaxValidCache[n.attr("id")], o.isError || t._checkAjaxFieldStatus(n.attr("id"), o) ? void 0 : (e.ajax({
                    type: o.ajaxFormValidationMethod,
                    url: s.url,
                    cache: !1,
                    dataType: "json",
                    data: c,
                    field: n,
                    rule: s,
                    methods: t,
                    options: o,
                    beforeSend: function() {},
                    error: function(e, n) {
                        t._ajaxError(e, n)
                    },
                    success: function(i) {
                        var r = i[0],
                            a = e("#" + r).eq(0);
                        if (1 == a.length) {
                            var l = i[1],
                                u = i[2];
                            if (l) {
                                if (o.ajaxValidCache[r] = !0, u) {
                                    if (o.allrules[u]) {
                                        var c = o.allrules[u].alertTextOk;
                                        c && (u = c)
                                    }
                                } else u = s.alertTextOk;
                                o.showPrompts && (u ? t._showPrompt(a, u, "pass", !0, o) : t._closePrompt(a)),
                                    "submit" == o.eventTrigger && n.closest("form").submit()
                            } else {
                                if (o.ajaxValidCache[r] = !1, o.isError = !0, u) {
                                    if (o.allrules[u]) {
                                        var c = o.allrules[u].alertText;
                                        c && (u = c)
                                    }
                                } else u = s.alertText;
                                o.showPrompts && t._showPrompt(a, u, "", !0, o)
                            }
                        }
                        a.trigger("jqv.field.result", [a, o.isError, u])
                    }
                }), s.alertTextLoad)
            },
            _ajaxError: function(e, t) {
                0 == e.status && null == t ? alert("The page is not served from a server! ajax call failed") : "undefined" != typeof console && console.log("Ajax error: " + e.status + " " + t)
            },
            _dateToString: function(e) {
                return e.getFullYear() + "-" + (e.getMonth() + 1) + "-" + e.getDate()
            },
            _parseDate: function(e) {
                var t = e.split("-");
                return t == e && (t = e.split("/")), t == e ? (t = e.split("."), new Date(t[2], t[1] - 1, t[0])) : new Date(t[0], t[1] - 1, t[2])
            },
            _showPrompt: function(n, i, r, o, a, s) {
                var l = t._getPrompt(n);
                s && (l = !1), e.trim(i) && (l ? t._updatePrompt(n, l, i, r, o, a) : t._buildPrompt(n, i, r, o, a))
            },
            _buildPrompt: function(n, i, r, o, a) {
                var s = e("<div>");
                switch (s.addClass(t._getClassName(n.attr("id")) + "formError"), s.addClass("parentForm" + t._getClassName(n.closest("form, .validationEngineContainer").attr("id"))), s.addClass("formError"), r) {
                    case "pass":
                        s.addClass("greenPopup");
                        break;
                    case "load":
                        s.addClass("blackPopup")
                }
                o && s.addClass("ajaxed");
                var l = (e("<div>").addClass("formErrorContent").html(i).appendTo(s), n.data("promptPosition") || a.promptPosition);
                if (a.showArrow) {
                    var u = e("<div>").addClass("formErrorArrow");
                    if ("string" == typeof l) {
                        var c = l.indexOf(":"); - 1 != c && (l = l.substring(0, c))
                    }
                    switch (l) {
                        case "bottomLeft":
                        case "bottomRight":
                            s.find(".formErrorContent").before(u), u.addClass("formErrorArrowBottom").html('<div class="line1"><!-- --></div><div class="line2"><!-- --></div><div class="line3"><!-- --></div><div class="line4"><!-- --></div><div class="line5"><!-- --></div><div class="line6"><!-- --></div><div class="line7"><!-- --></div><div class="line8"><!-- --></div><div class="line9"><!-- --></div><div class="line10"><!-- --></div>');
                            break;
                        case "topLeft":
                        case "topRight":
                            u.html('<div class="line10"><!-- --></div><div class="line9"><!-- --></div><div class="line8"><!-- --></div><div class="line7"><!-- --></div><div class="line6"><!-- --></div><div class="line5"><!-- --></div><div class="line4"><!-- --></div><div class="line3"><!-- --></div><div class="line2"><!-- --></div><div class="line1"><!-- --></div>'), s.append(u)
                    }
                }
                a.addPromptClass && s.addClass(a.addPromptClass);
                var d = n.attr("data-required-class");
                if (void 0 !== d) s.addClass(d);
                else if (a.prettySelect && e("#" + n.attr("id")).next().is("select")) {
                    var h = e("#" + n.attr("id").substr(a.usePrefix.length).substring(a.useSuffix.length)).attr("data-required-class");
                    void 0 !== h && s.addClass(h)
                }
                s.css({
                    opacity: 0
                }), "inline" === l ? (s.addClass("inline"), "undefined" != typeof n.attr("data-prompt-target") && e("#" + n.attr("data-prompt-target")).length > 0 ? s.appendTo(e("#" + n.attr("data-prompt-target"))) : n.after(s)) : n.before(s);
                var c = t._calculatePosition(n, s, a);
                return s.css({
                    position: "inline" === l ? "relative" : "absolute",
                    top: c.callerTopPosition,
                    left: c.callerleftPosition,
                    marginTop: c.marginTopSize,
                    opacity: 0
                }).data("callerField", n), a.autoHidePrompt && setTimeout(function() {
                    s.animate({
                        opacity: 0
                    }, function() {
                        s.closest(".formErrorOuter").remove(), s.remove()
                    })
                }, a.autoHideDelay), s.animate({
                    opacity: .87
                })
            },
            _updatePrompt: function(e, n, i, r, o, a, s) {
                if (n) {
                    "undefined" != typeof r && ("pass" == r ? n.addClass("greenPopup") : n.removeClass("greenPopup"), "load" == r ? n.addClass("blackPopup") : n.removeClass("blackPopup")), o ? n.addClass("ajaxed") : n.removeClass("ajaxed"), n.find(".formErrorContent").html(i);
                    var l = t._calculatePosition(e, n, a),
                        u = {
                            top: l.callerTopPosition,
                            left: l.callerleftPosition,
                            marginTop: l.marginTopSize
                        };
                    s ? n.css(u) : n.animate(u)
                }
            },
            _closePrompt: function(e) {
                var n = t._getPrompt(e);
                n && n.fadeTo("fast", 0, function() {
                    n.parent(".formErrorOuter").remove(), n.remove()
                })
            },
            closePrompt: function(e) {
                return t._closePrompt(e)
            },
            _getPrompt: function(n) {
                var i = e(n).closest("form, .validationEngineContainer").attr("id"),
                    r = t._getClassName(n.attr("id")) + "formError",
                    o = e("." + t._escapeExpression(r) + ".parentForm" + i)[0];
                return o ? e(o) : void 0
            },
            _escapeExpression: function(e) {
                return e.replace(/([#;&,\.\+\*\~':"\!\^$\[\]\(\)=>\|])/g, "\\$1")
            },
            isRTL: function(t) {
                var n = e(document),
                    i = e("body"),
                    r = t && t.hasClass("rtl") || t && "rtl" === (t.attr("dir") || "").toLowerCase() || n.hasClass("rtl") || "rtl" === (n.attr("dir") || "").toLowerCase() || i.hasClass("rtl") || "rtl" === (i.attr("dir") || "").toLowerCase();
                return Boolean(r)
            },
            _calculatePosition: function(e, t, n) {
                var i, r, o, a = e.width(),
                    s = e.position().left,
                    l = e.position().top,
                    u = (e.height(), t.height());
                i = r = 0, o = -u;
                var c = e.data("promptPosition") || n.promptPosition,
                    d = "",
                    h = "",
                    f = 0,
                    p = 0;
                switch ("string" == typeof c && -1 != c.indexOf(":") && (d = c.substring(c.indexOf(":") + 1), c = c.substring(0, c.indexOf(":")), -1 != d.indexOf(",") && (h = d.substring(d.indexOf(",") + 1), d = d.substring(0, d.indexOf(",")), p = parseInt(h), isNaN(p) && (p = 0)), f = parseInt(d), isNaN(d) && (d = 0)), c) {
                    default:
                        case "topRight":
                        r += s + a - 30,
                    i += l;
                    break;
                    case "topLeft":
                            i += l,
                        r += s;
                        break;
                    case "centerRight":
                            i = l + 4,
                        o = 0,
                        r = s + e.outerWidth(!0) + 5;
                        break;
                    case "centerLeft":
                            r = s - (t.width() + 2),
                        i = l + 4,
                        o = 0;
                        break;
                    case "bottomLeft":
                            i = l + e.height() + 5,
                        o = 0,
                        r = s;
                        break;
                    case "bottomRight":
                            r = s + a - 30,
                        i = l + e.height() + 5,
                        o = 0;
                        break;
                    case "inline":
                            r = 0,
                        i = 0,
                        o = 0
                }
                return r += f, i += p, {
                    callerTopPosition: i + "px",
                    callerleftPosition: r + "px",
                    marginTopSize: o + "px"
                }
            },
            _saveOptions: function(t, n) {
                if (e.validationEngineLanguage) var i = e.validationEngineLanguage.allRules;
                else e.error("jQuery.validationEngine rules are not loaded, plz add localization files to the page");
                e.validationEngine.defaults.allrules = i;
                var r = e.extend(!0, {}, e.validationEngine.defaults, n);
                return t.data("jqv", r), r
            },
            _getClassName: function(e) {
                return e ? e.replace(/:/g, "_").replace(/\./g, "_") : void 0
            },
            _jqSelector: function(e) {
                return e.replace(/([;&,\.\+\*\~':"\!\^#$%@\[\]\(\)=>\|])/g, "\\$1")
            },
            _condRequired: function(e, n, i, r) {
                var o, a;
                for (o = i + 1; o < n.length; o++)
                    if (a = jQuery("#" + n[o]).first(), a.length && void 0 == t._required(a, ["required"], 0, r, !0)) return t._required(e, ["required"], 0, r)
            },
            _submitButtonClick: function(t) {
                var n = e(this),
                    i = n.closest("form, .validationEngineContainer");
                i.data("jqv_submitButton", n.attr("id"))
            }
        };
        e.fn.validationEngine = function(n) {
            var i = e(this);
            return i[0] ? "string" == typeof n && "_" != n.charAt(0) && t[n] ? ("showPrompt" != n && "hide" != n && "hideAll" != n && t.init.apply(i), t[n].apply(i, Array.prototype.slice.call(arguments, 1))) : "object" != typeof n && n ? void e.error("Method " + n + " does not exist in jQuery.validationEngine") : (t.init.apply(i, arguments), t.attach.apply(i)) : i
        }, e.validationEngine = {
            fieldIdCounter: 0,
            defaults: {
                validationEventTrigger: "none",
                scroll: !1,
                focusFirstField: !0,
                showPrompts: !0,
                validateNonVisibleFields: !1,
                promptPosition: "topRight",
                bindMethod: "bind",
                inlineAjax: !1,
                ajaxFormValidation: !1,
                ajaxFormValidationURL: !1,
                ajaxFormValidationMethod: "get",
                onAjaxFormComplete: e.noop,
                onBeforeAjaxFormValidation: e.noop,
                onValidationComplete: !1,
                doNotShowAllErrosOnSubmit: !1,
                custom_error_messages: {},
                binded: !0,
                showArrow: !0,
                isError: !1,
                maxErrorsPerField: !1,
                ajaxValidCache: {},
                autoPositionUpdate: !1,
                InvalidFields: [],
                onFieldSuccess: !1,
                onFieldFailure: !1,
                onSuccess: !1,
                onFailure: !1,
                validateAttribute: "class",
                addSuccessCssClassToField: "",
                addFailureCssClassToField: "",
                autoHidePrompt: !1,
                autoHideDelay: 1e4,
                fadeDuration: .3,
                prettySelect: !1,
                addPromptClass: "",
                usePrefix: "",
                useSuffix: "",
                showOneMessage: !0
            }
        }, e(function() {
            e.validationEngine.defaults.promptPosition = t.isRTL() ? "topLeft" : "topRight"
        })
    }(jQuery),
    function(e) {
        e.fn.validationEngineLanguage = function() {}, e.validationEngineLanguage = {
            newLang: function() {
                e.validationEngineLanguage.allRules = {
                    required: {
                        regex: "none",
                        alertText: "* Необходимо заполнить",
                        alertTextCheckboxMultiple: "* Вы должны выбрать вариант",
                        alertTextCheckboxe: "* Необходимо отметить"
                    },
                    requiredInFunction: {
                        func: function(e, t, n, i) {
                            return "test" == e.val() ? !0 : !1
                        },
                        alertText: "* Значением поля должно быть test"
                    },
                    minSize: {
                        regex: "none",
                        alertText: "* Минимум ",
                        alertText2: " символа(ов)"
                    },
                    maxSize: {
                        regex: "none",
                        alertText: "* Максимум ",
                        alertText2: " символа(ов)"
                    },
                    groupRequired: {
                        regex: "none",
                        alertText: "* Вы должны заполнить одно из следующих полей"
                    },
                    min: {
                        regex: "none",
                        alertText: "* Минимальное значение "
                    },
                    max: {
                        regex: "none",
                        alertText: "* Максимальное значение "
                    },
                    past: {
                        regex: "none",
                        alertText: "* Дата до "
                    },
                    future: {
                        regex: "none",
                        alertText: "* Дата от "
                    },
                    maxCheckbox: {
                        regex: "none",
                        alertText: "* Нельзя выбрать столько вариантов"
                    },
                    minCheckbox: {
                        regex: "none",
                        alertText: "* Пожалуйста, выберите ",
                        alertText2: " опцию(ии)"
                    },
                    equals: {
                        regex: "none",
                        alertText: "* Поля не совпадают"
                    },
                    creditCard: {
                        regex: "none",
                        alertText: "* Неверный номер кредитной карты"
                    },
                    phone: {
                        regex: /^([\+][0-9]{1,3}([ \.\-])?)?([\(][0-9]{1,6}[\)])?([0-9 \.\-]{1,32})(([A-Za-z \:]{1,11})?[0-9]{1,4}?)$/,
                        alertText: "* Неправильный формат телефона"
                    },
                    email: {
                        regex: /^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?$/i,
                        alertText: "* Неверный формат email"
                    },
                    integer: {
                        regex: /^[\-\+]?\d+$/,
                        alertText: "* Не целое число"
                    },
                    number: {
                        regex: /^[\-\+]?((([0-9]{1,3})([,][0-9]{3})*)|([0-9]+))?([\.]([0-9]+))?$/,
                        alertText: "* Неправильное число с плавающей точкой"
                    },
                    date: {
                        regex: /^\d{4}[\/\-](0?[1-9]|1[012])[\/\-](0?[1-9]|[12][0-9]|3[01])$/,
                        alertText: "* Неправильная дата (должно быть в ДД.MM.ГГГГ формате)"
                    },
                    ipv4: {
                        regex: /^((([01]?[0-9]{1,2})|(2[0-4][0-9])|(25[0-5]))[.]){3}(([0-1]?[0-9]{1,2})|(2[0-4][0-9])|(25[0-5]))$/,
                        alertText: "* Неправильный IP-адрес"
                    },
                    url: {
                        regex: /^(https?|ftp):\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(\#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i,
                        alertText: "* Неправильный URL"
                    },
                    onlyNumberSp: {
                        regex: /^[0-9\ ]+$/,
                        alertText: "* Только числа"
                    },
                    onlyLetterSp: {
                        regex: /^[a-zA-Z\u0400-\u04FF\ \']+$/,
                        alertText: "* Только буквы"
                    },
                    onlyLetterNumber: {
                        regex: /^[0-9a-zA-Z\u0400-\u04FF]+$/,
                        alertText: "* Запрещены специальные символы"
                    },
                    ajaxUserCall: {
                        url: "ajaxValidateFieldUser",
                        extraData: "name=eric",
                        alertText: "* Этот пользователь уже занят",
                        alertTextLoad: "* Проверка, подождите..."
                    },
                    ajaxNameCall: {
                        url: "ajaxValidateFieldName",
                        alertText: "* Это имя уже занято",
                        alertTextOk: "* Это имя доступно",
                        alertTextLoad: "* Проверка, подождите..."
                    },
                    validate2fields: {
                        alertText: "* Пожалуйста, введите HELLO"
                    }
                }
            }
        }, e.validationEngineLanguage.newLang()
    }(jQuery),
    function(e) {
        "use strict";
        "function" == typeof define && define.amd ? define(["jquery"], e) : e("undefined" != typeof jQuery ? jQuery : window.Zepto)
    }(function(e) {
        "use strict";

        function t(t) {
            var n = t.data;
            t.isDefaultPrevented() || (t.preventDefault(), e(t.target).ajaxSubmit(n))
        }

        function n(t) {
            var n = t.target,
                i = e(n);
            if (!i.is("[type=submit],[type=image]")) {
                var r = i.closest("[type=submit]");
                if (0 === r.length) return;
                n = r[0]
            }
            var o = this;
            if (o.clk = n, "image" == n.type)
                if (void 0 !== t.offsetX) o.clk_x = t.offsetX, o.clk_y = t.offsetY;
                else if ("function" == typeof e.fn.offset) {
                var a = i.offset();
                o.clk_x = t.pageX - a.left, o.clk_y = t.pageY - a.top
            } else o.clk_x = t.pageX - n.offsetLeft, o.clk_y = t.pageY - n.offsetTop;
            setTimeout(function() {
                o.clk = o.clk_x = o.clk_y = null
            }, 100)
        }

        function i() {
            if (e.fn.ajaxSubmit.debug) {
                var t = "[jquery.form] " + Array.prototype.join.call(arguments, "");
                window.console && window.console.log ? window.console.log(t) : window.opera && window.opera.postError && window.opera.postError(t)
            }
        }
        var r = {};
        r.fileapi = void 0 !== e("<input type='file'/>").get(0).files, r.formdata = void 0 !== window.FormData;
        var o = !!e.fn.prop;
        e.fn.attr2 = function() {
            if (!o) return this.attr.apply(this, arguments);
            var e = this.prop.apply(this, arguments);
            return e && e.jquery || "string" == typeof e ? e : this.attr.apply(this, arguments)
        }, e.fn.ajaxSubmit = function(t) {
            function n(n) {
                var i, r, o = e.param(n, t.traditional).split("&"),
                    a = o.length,
                    s = [];
                for (i = 0; a > i; i++) o[i] = o[i].replace(/\+/g, " "), r = o[i].split("="), s.push([decodeURIComponent(r[0]), decodeURIComponent(r[1])]);
                return s
            }

            function a(i) {
                for (var r = new FormData, o = 0; o < i.length; o++) r.append(i[o].name, i[o].value);
                if (t.extraData) {
                    var a = n(t.extraData);
                    for (o = 0; o < a.length; o++) a[o] && r.append(a[o][0], a[o][1])
                }
                t.data = null;
                var s = e.extend(!0, {}, e.ajaxSettings, t, {
                    contentType: !1,
                    processData: !1,
                    cache: !1,
                    type: l || "POST"
                });
                t.uploadProgress && (s.xhr = function() {
                    var n = e.ajaxSettings.xhr();
                    return n.upload && n.upload.addEventListener("progress", function(e) {
                        var n = 0,
                            i = e.loaded || e.position,
                            r = e.total;
                        e.lengthComputable && (n = Math.ceil(i / r * 100)), t.uploadProgress(e, i, r, n)
                    }, !1), n
                }), s.data = null;
                var u = s.beforeSend;
                return s.beforeSend = function(e, n) {
                    n.data = t.formData ? t.formData : r, u && u.call(this, e, n)
                }, e.ajax(s)
            }

            function s(n) {
                function r(e) {
                    var t = null;
                    try {
                        e.contentWindow && (t = e.contentWindow.document)
                    } catch (n) {
                        i("cannot get iframe.contentWindow document: " + n)
                    }
                    if (t) return t;
                    try {
                        t = e.contentDocument ? e.contentDocument : e.document
                    } catch (n) {
                        i("cannot get iframe.contentDocument: " + n), t = e.document
                    }
                    return t
                }

                function a() {
                    function t() {
                        try {
                            var e = r(v).readyState;
                            i("state = " + e), e && "uninitialized" == e.toLowerCase() && setTimeout(t, 50)
                        } catch (n) {
                            i("Server abort: ", n, " (", n.name, ")"), s(E), _ && clearTimeout(_), _ = void 0
                        }
                    }
                    var n = d.attr2("target"),
                        o = d.attr2("action"),
                        a = "multipart/form-data",
                        u = d.attr("enctype") || d.attr("encoding") || a;
                    C.setAttribute("target", p), (!l || /post/i.test(l)) && C.setAttribute("method", "POST"), o != h.url && C.setAttribute("action", h.url), h.skipEncodingOverride || l && !/post/i.test(l) || d.attr({
                        encoding: "multipart/form-data",
                        enctype: "multipart/form-data"
                    }), h.timeout && (_ = setTimeout(function() {
                        w = !0, s(F)
                    }, h.timeout));
                    var c = [];
                    try {
                        if (h.extraData)
                            for (var f in h.extraData) h.extraData.hasOwnProperty(f) && c.push(e.isPlainObject(h.extraData[f]) && h.extraData[f].hasOwnProperty("name") && h.extraData[f].hasOwnProperty("value") ? e('<input type="hidden" name="' + h.extraData[f].name + '">').val(h.extraData[f].value).appendTo(C)[0] : e('<input type="hidden" name="' + f + '">').val(h.extraData[f]).appendTo(C)[0]);
                        h.iframeTarget || m.appendTo("body"), v.attachEvent ? v.attachEvent("onload", s) : v.addEventListener("load", s, !1), setTimeout(t, 15);
                        try {
                            C.submit()
                        } catch (g) {
                            var y = document.createElement("form").submit;
                            y.apply(C)
                        }
                    } finally {
                        C.setAttribute("action", o), C.setAttribute("enctype", u), n ? C.setAttribute("target", n) : d.removeAttr("target"), e(c).remove()
                    }
                }

                function s(t) {
                    if (!y.aborted && !A) {
                        if (j = r(v), j || (i("cannot access response document"), t = E), t === F && y) return y.abort("timeout"), void T.reject(y, "timeout");
                        if (t == E && y) return y.abort("server abort"), void T.reject(y, "error", "server abort");
                        if (j && j.location.href != h.iframeSrc || w) {
                            v.detachEvent ? v.detachEvent("onload", s) : v.removeEventListener("load", s, !1);
                            var n, o = "success";
                            try {
                                if (w) throw "timeout";
                                var a = "xml" == h.dataType || j.XMLDocument || e.isXMLDoc(j);
                                if (i("isXml=" + a), !a && window.opera && (null === j.body || !j.body.innerHTML) && --$) return i("requeing onLoad callback, DOM not available"), void setTimeout(s, 250);
                                var l = j.body ? j.body : j.documentElement;
                                y.responseText = l ? l.innerHTML : null, y.responseXML = j.XMLDocument ? j.XMLDocument : j, a && (h.dataType = "xml"), y.getResponseHeader = function(e) {
                                    var t = {
                                        "content-type": h.dataType
                                    };
                                    return t[e.toLowerCase()]
                                }, l && (y.status = Number(l.getAttribute("status")) || y.status, y.statusText = l.getAttribute("statusText") || y.statusText);
                                var u = (h.dataType || "").toLowerCase(),
                                    c = /(json|script|text)/.test(u);
                                if (c || h.textarea) {
                                    var d = j.getElementsByTagName("textarea")[0];
                                    if (d) y.responseText = d.value, y.status = Number(d.getAttribute("status")) || y.status, y.statusText = d.getAttribute("statusText") || y.statusText;
                                    else if (c) {
                                        var p = j.getElementsByTagName("pre")[0],
                                            g = j.getElementsByTagName("body")[0];
                                        p ? y.responseText = p.textContent ? p.textContent : p.innerText : g && (y.responseText = g.textContent ? g.textContent : g.innerText)
                                    }
                                } else "xml" == u && !y.responseXML && y.responseText && (y.responseXML = N(y.responseText));
                                try {
                                    S = O(y, u, h)
                                } catch (x) {
                                    o = "parsererror", y.error = n = x || o
                                }
                            } catch (x) {
                                i("error caught: ", x), o = "error", y.error = n = x || o
                            }
                            y.aborted && (i("upload aborted"), o = null), y.status && (o = y.status >= 200 && y.status < 300 || 304 === y.status ? "success" : "error"), "success" === o ? (h.success && h.success.call(h.context, S, "success", y), T.resolve(y.responseText, "success", y), f && e.event.trigger("ajaxSuccess", [y, h])) : o && (void 0 === n && (n = y.statusText), h.error && h.error.call(h.context, y, o, n), T.reject(y, "error", n), f && e.event.trigger("ajaxError", [y, h, n])), f && e.event.trigger("ajaxComplete", [y, h]), f && !--e.active && e.event.trigger("ajaxStop"), h.complete && h.complete.call(h.context, y, o), A = !0, h.timeout && clearTimeout(_), setTimeout(function() {
                                h.iframeTarget ? m.attr("src", h.iframeSrc) : m.remove(), y.responseXML = null
                            }, 100)
                        }
                    }
                }
                var u, c, h, f, p, m, v, y, x, b, w, _, C = d[0],
                    T = e.Deferred();
                if (T.abort = function(e) {
                        y.abort(e)
                    }, n)
                    for (c = 0; c < g.length; c++) u = e(g[c]), o ? u.prop("disabled", !1) : u.removeAttr("disabled");
                if (h = e.extend(!0, {}, e.ajaxSettings, t), h.context = h.context || h, p = "jqFormIO" + (new Date).getTime(), h.iframeTarget ? (m = e(h.iframeTarget), b = m.attr2("name"), b ? p = b : m.attr2("name", p)) : (m = e('<iframe name="' + p + '" src="' + h.iframeSrc + '" />'), m.css({
                        position: "absolute",
                        top: "-1000px",
                        left: "-1000px"
                    })), v = m[0], y = {
                        aborted: 0,
                        responseText: null,
                        responseXML: null,
                        status: 0,
                        statusText: "n/a",
                        getAllResponseHeaders: function() {},
                        getResponseHeader: function() {},
                        setRequestHeader: function() {},
                        abort: function(t) {
                            var n = "timeout" === t ? "timeout" : "aborted";
                            i("aborting upload... " + n), this.aborted = 1;
                            try {
                                v.contentWindow.document.execCommand && v.contentWindow.document.execCommand("Stop")
                            } catch (r) {}
                            m.attr("src", h.iframeSrc), y.error = n, h.error && h.error.call(h.context, y, n, t), f && e.event.trigger("ajaxError", [y, h, n]), h.complete && h.complete.call(h.context, y, n)
                        }
                    }, f = h.global, f && 0 === e.active++ && e.event.trigger("ajaxStart"), f && e.event.trigger("ajaxSend", [y, h]), h.beforeSend && h.beforeSend.call(h.context, y, h) === !1) return h.global && e.active--, T.reject(), T;
                if (y.aborted) return T.reject(), T;
                x = C.clk, x && (b = x.name, b && !x.disabled && (h.extraData = h.extraData || {}, h.extraData[b] = x.value, "image" == x.type && (h.extraData[b + ".x"] = C.clk_x, h.extraData[b + ".y"] = C.clk_y)));
                var F = 1,
                    E = 2,
                    k = e("meta[name=csrf-token]").attr("content"),
                    D = e("meta[name=csrf-param]").attr("content");
                D && k && (h.extraData = h.extraData || {}, h.extraData[D] = k), h.forceSync ? a() : setTimeout(a, 10);
                var S, j, A, $ = 50,
                    N = e.parseXML || function(e, t) {
                        return window.ActiveXObject ? (t = new ActiveXObject("Microsoft.XMLDOM"), t.async = "false", t.loadXML(e)) : t = (new DOMParser).parseFromString(e, "text/xml"), t && t.documentElement && "parsererror" != t.documentElement.nodeName ? t : null
                    },
                    P = e.parseJSON || function(e) {
                        return window.eval("(" + e + ")")
                    },
                    O = function(t, n, i) {
                        var r = t.getResponseHeader("content-type") || "",
                            o = "xml" === n || !n && r.indexOf("xml") >= 0,
                            a = o ? t.responseXML : t.responseText;
                        return o && "parsererror" === a.documentElement.nodeName && e.error && e.error("parsererror"), i && i.dataFilter && (a = i.dataFilter(a, n)), "string" == typeof a && ("json" === n || !n && r.indexOf("json") >= 0 ? a = P(a) : ("script" === n || !n && r.indexOf("javascript") >= 0) && e.globalEval(a)), a
                    };
                return T
            }
            if (!this.length) return i("ajaxSubmit: skipping submit process - no element selected"), this;
            var l, u, c, d = this;
            "function" == typeof t ? t = {
                success: t
            } : void 0 === t && (t = {}), l = t.type || this.attr2("method"), u = t.url || this.attr2("action"), c = "string" == typeof u ? e.trim(u) : "", c = c || window.location.href || "", c && (c = (c.match(/^([^#]+)/) || [])[1]), t = e.extend(!0, {
                url: c,
                success: e.ajaxSettings.success,
                type: l || e.ajaxSettings.type,
                iframeSrc: /^https/i.test(window.location.href || "") ? "javascript:false" : "about:blank"
            }, t);
            var h = {};
            if (this.trigger("form-pre-serialize", [this, t, h]), h.veto) return i("ajaxSubmit: submit vetoed via form-pre-serialize trigger"), this;
            if (t.beforeSerialize && t.beforeSerialize(this, t) === !1) return i("ajaxSubmit: submit aborted via beforeSerialize callback"), this;
            var f = t.traditional;
            void 0 === f && (f = e.ajaxSettings.traditional);
            var p, g = [],
                m = this.formToArray(t.semantic, g);
            if (t.data && (t.extraData = t.data, p = e.param(t.data, f)), t.beforeSubmit && t.beforeSubmit(m, this, t) === !1) return i("ajaxSubmit: submit aborted via beforeSubmit callback"), this;
            if (this.trigger("form-submit-validate", [m, this, t, h]), h.veto) return i("ajaxSubmit: submit vetoed via form-submit-validate trigger"), this;
            var v = e.param(m, f);
            p && (v = v ? v + "&" + p : p), "GET" == t.type.toUpperCase() ? (t.url += (t.url.indexOf("?") >= 0 ? "&" : "?") + v, t.data = null) : t.data = v;
            var y = [];
            if (t.resetForm && y.push(function() {
                    d.resetForm()
                }), t.clearForm && y.push(function() {
                    d.clearForm(t.includeHidden)
                }), !t.dataType && t.target) {
                var x = t.success || function() {};
                y.push(function(n) {
                    var i = t.replaceTarget ? "replaceWith" : "html";
                    e(t.target)[i](n).each(x, arguments)
                })
            } else t.success && y.push(t.success);
            if (t.success = function(e, n, i) {
                    for (var r = t.context || this, o = 0, a = y.length; a > o; o++) y[o].apply(r, [e, n, i || d, d])
                }, t.error) {
                var b = t.error;
                t.error = function(e, n, i) {
                    var r = t.context || this;
                    b.apply(r, [e, n, i, d])
                }
            }
            if (t.complete) {
                var w = t.complete;
                t.complete = function(e, n) {
                    var i = t.context || this;
                    w.apply(i, [e, n, d])
                }
            }
            var _ = e("input[type=file]:enabled", this).filter(function() {
                    return "" !== e(this).val()
                }),
                C = _.length > 0,
                T = "multipart/form-data",
                F = d.attr("enctype") == T || d.attr("encoding") == T,
                E = r.fileapi && r.formdata;
            i("fileAPI :" + E);
            var k, D = (C || F) && !E;
            t.iframe !== !1 && (t.iframe || D) ? t.closeKeepAlive ? e.get(t.closeKeepAlive, function() {
                k = s(m)
            }) : k = s(m) : k = (C || F) && E ? a(m) : e.ajax(t), d.removeData("jqxhr").data("jqxhr", k);
            for (var S = 0; S < g.length; S++) g[S] = null;
            return this.trigger("form-submit-notify", [this, t]), this
        }, e.fn.ajaxForm = function(r) {
            if (r = r || {}, r.delegation = r.delegation && e.isFunction(e.fn.on), !r.delegation && 0 === this.length) {
                var o = {
                    s: this.selector,
                    c: this.context
                };
                return !e.isReady && o.s ? (i("DOM not ready, queuing ajaxForm"), e(function() {
                    e(o.s, o.c).ajaxForm(r)
                }), this) : (i("terminating; zero elements found by selector" + (e.isReady ? "" : " (DOM not ready)")), this)
            }
            return r.delegation ? (e(document).off("submit.form-plugin", this.selector, t).off("click.form-plugin", this.selector, n).on("submit.form-plugin", this.selector, r, t).on("click.form-plugin", this.selector, r, n), this) : this.ajaxFormUnbind().bind("submit.form-plugin", r, t).bind("click.form-plugin", r, n)
        }, e.fn.ajaxFormUnbind = function() {
            return this.unbind("submit.form-plugin click.form-plugin")
        }, e.fn.formToArray = function(t, n) {
            var i = [];
            if (0 === this.length) return i;
            var o, a = this[0],
                s = this.attr("id"),
                l = t ? a.getElementsByTagName("*") : a.elements;
            if (l && !/MSIE [678]/.test(navigator.userAgent) && (l = e(l).get()), s && (o = e(":input[form=" + s + "]").get(), o.length && (l = (l || []).concat(o))), !l || !l.length) return i;
            var u, c, d, h, f, p, g;
            for (u = 0, p = l.length; p > u; u++)
                if (f = l[u], d = f.name, d && !f.disabled)
                    if (t && a.clk && "image" == f.type) a.clk == f && (i.push({
                        name: d,
                        value: e(f).val(),
                        type: f.type
                    }), i.push({
                        name: d + ".x",
                        value: a.clk_x
                    }, {
                        name: d + ".y",
                        value: a.clk_y
                    }));
                    else if (h = e.fieldValue(f, !0), h && h.constructor == Array)
                for (n && n.push(f), c = 0, g = h.length; g > c; c++) i.push({
                    name: d,
                    value: h[c]
                });
            else if (r.fileapi && "file" == f.type) {
                n && n.push(f);
                var m = f.files;
                if (m.length)
                    for (c = 0; c < m.length; c++) i.push({
                        name: d,
                        value: m[c],
                        type: f.type
                    });
                else i.push({
                    name: d,
                    value: "",
                    type: f.type
                })
            } else null !== h && "undefined" != typeof h && (n && n.push(f), i.push({
                name: d,
                value: h,
                type: f.type,
                required: f.required
            }));
            if (!t && a.clk) {
                var v = e(a.clk),
                    y = v[0];
                d = y.name, d && !y.disabled && "image" == y.type && (i.push({
                    name: d,
                    value: v.val()
                }), i.push({
                    name: d + ".x",
                    value: a.clk_x
                }, {
                    name: d + ".y",
                    value: a.clk_y
                }))
            }
            return i
        }, e.fn.formSerialize = function(t) {
            return e.param(this.formToArray(t))
        }, e.fn.fieldSerialize = function(t) {
            var n = [];
            return this.each(function() {
                var i = this.name;
                if (i) {
                    var r = e.fieldValue(this, t);
                    if (r && r.constructor == Array)
                        for (var o = 0, a = r.length; a > o; o++) n.push({
                            name: i,
                            value: r[o]
                        });
                    else null !== r && "undefined" != typeof r && n.push({
                        name: this.name,
                        value: r
                    })
                }
            }), e.param(n)
        }, e.fn.fieldValue = function(t) {
            for (var n = [], i = 0, r = this.length; r > i; i++) {
                var o = this[i],
                    a = e.fieldValue(o, t);
                null === a || "undefined" == typeof a || a.constructor == Array && !a.length || (a.constructor == Array ? e.merge(n, a) : n.push(a))
            }
            return n
        }, e.fieldValue = function(t, n) {
            var i = t.name,
                r = t.type,
                o = t.tagName.toLowerCase();
            if (void 0 === n && (n = !0), n && (!i || t.disabled || "reset" == r || "button" == r || ("checkbox" == r || "radio" == r) && !t.checked || ("submit" == r || "image" == r) && t.form && t.form.clk != t || "select" == o && -1 == t.selectedIndex)) return null;
            if ("select" == o) {
                var a = t.selectedIndex;
                if (0 > a) return null;
                for (var s = [], l = t.options, u = "select-one" == r, c = u ? a + 1 : l.length, d = u ? a : 0; c > d; d++) {
                    var h = l[d];
                    if (h.selected) {
                        var f = h.value;
                        if (f || (f = h.attributes && h.attributes.value && !h.attributes.value.specified ? h.text : h.value), u) return f;
                        s.push(f)
                    }
                }
                return s
            }
            return e(t).val()
        }, e.fn.clearForm = function(t) {
            return this.each(function() {
                e("input,select,textarea", this).clearFields(t)
            })
        }, e.fn.clearFields = e.fn.clearInputs = function(t) {
            var n = /^(?:color|date|datetime|email|month|number|password|range|search|tel|text|time|url|week)$/i;
            return this.each(function() {
                var i = this.type,
                    r = this.tagName.toLowerCase();
                n.test(i) || "textarea" == r ? this.value = "" : "checkbox" == i || "radio" == i ? this.checked = !1 : "select" == r ? this.selectedIndex = -1 : "file" == i ? /MSIE/.test(navigator.userAgent) ? e(this).replaceWith(e(this).clone(!0)) : e(this).val("") : t && (t === !0 && /hidden/.test(i) || "string" == typeof t && e(this).is(t)) && (this.value = "")
            })
        }, e.fn.resetForm = function() {
            return this.each(function() {
                ("function" == typeof this.reset || "object" == typeof this.reset && !this.reset.nodeType) && this.reset()
            })
        }, e.fn.enable = function(e) {
            return void 0 === e && (e = !0), this.each(function() {
                this.disabled = !e
            })
        }, e.fn.selected = function(t) {
            return void 0 === t && (t = !0), this.each(function() {
                var n = this.type;
                if ("checkbox" == n || "radio" == n) this.checked = t;
                else if ("option" == this.tagName.toLowerCase()) {
                    var i = e(this).parent("select");
                    t && i[0] && "select-one" == i[0].type && i.find("option").selected(!1), this.selected = t
                }
            })
        }, e.fn.ajaxSubmit.debug = !1
    }), $(function() {
        function e() {
            $(".bg4 h3").css("color", "red"), setTimeout("$('.bg4 h3').css('color', '#000');", 400), setTimeout("$('.bg4 h3').css('color', 'red');", 800), setTimeout("$('.bg4 h3').css('color', '#000');", 1200), setTimeout("$('.bg4 h3').css('color', 'red');", 1600), setTimeout("$('.bg4 h3').css('color', '#000');", 2e3)
        }
        if ((new WOW).init(), function(e) {
                function t() {
                    var e = document.createElement("input"),
                        t = "onpaste";
                    return e.setAttribute(t, ""), "function" == typeof e[t] ? "paste" : "input"
                }
                var n, i = t() + ".mask",
                    r = navigator.userAgent,
                    o = /iphone/i.test(r),
                    a = /android/i.test(r);
                e.mask = {
                    definitions: {
                        9: "[0-9]",
                        a: "[A-Za-z]",
                        "*": "[A-Za-z0-9]"
                    },
                    dataName: "rawMaskFn",
                    placeholder: "_"
                }, e.fn.extend({
                    caret: function(e, t) {
                        var n;
                        return 0 === this.length || this.is(":hidden") ? void 0 : "number" == typeof e ? (t = "number" == typeof t ? t : e, this.each(function() {
                            this.setSelectionRange ? this.setSelectionRange(e, t) : this.createTextRange && (n = this.createTextRange(), n.collapse(!0), n.moveEnd("character", t), n.moveStart("character", e), n.select())
                        })) : (this[0].setSelectionRange ? (e = this[0].selectionStart, t = this[0].selectionEnd) : document.selection && document.selection.createRange && (n = document.selection.createRange(), e = 0 - n.duplicate().moveStart("character", -1e5), t = e + n.text.length), {
                            begin: e,
                            end: t
                        })
                    },
                    unmask: function() {
                        return this.trigger("unmask")
                    },
                    mask: function(t, r) {
                        var s, l, u, c, d, h;
                        return !t && this.length > 0 ? (s = e(this[0]), s.data(e.mask.dataName)()) : (r = e.extend({
                            placeholder: e.mask.placeholder,
                            completed: null
                        }, r), l = e.mask.definitions, u = [], c = h = t.length, d = null, e.each(t.split(""), function(e, t) {
                            "?" == t ? (h--, c = e) : l[t] ? (u.push(RegExp(l[t])), null === d && (d = u.length - 1)) : u.push(null)
                        }), this.trigger("unmask").each(function() {
                            function s(e) {
                                for (; h > ++e && !u[e];);
                                return e
                            }

                            function f(e) {
                                for (; --e >= 0 && !u[e];);
                                return e
                            }

                            function p(e, t) {
                                var n, i;
                                if (!(0 > e)) {
                                    for (n = e, i = s(t); h > n; n++)
                                        if (u[n]) {
                                            if (!(h > i && u[n].test(_[i]))) break;
                                            _[n] = _[i], _[i] = r.placeholder, i = s(i)
                                        }
                                    x(), w.caret(Math.max(d, e))
                                }
                            }

                            function g(e) {
                                var t, n, i, o;
                                for (t = e, n = r.placeholder; h > t; t++)
                                    if (u[t]) {
                                        if (i = s(t), o = _[t], _[t] = n, !(h > i && u[i].test(o))) break;
                                        n = o
                                    }
                            }

                            function m(e) {
                                var t, n, i, r = e.which;
                                8 === r || 46 === r || o && 127 === r ? (t = w.caret(), n = t.begin, i = t.end, 0 === i - n && (n = 46 !== r ? f(n) : i = s(n - 1), i = 46 === r ? s(i) : i), y(n, i), p(n, i - 1), e.preventDefault()) : 27 == r && (w.val(C), w.caret(0, b()), e.preventDefault())
                            }

                            function v(t) {
                                var n, i, o, l = t.which,
                                    c = w.caret();
                                t.ctrlKey || t.altKey || t.metaKey || 32 > l || l && (0 !== c.end - c.begin && (y(c.begin, c.end), p(c.begin, c.end - 1)), n = s(c.begin - 1), h > n && (i = String.fromCharCode(l), u[n].test(i) && (g(n), _[n] = i, x(), o = s(n), a ? setTimeout(e.proxy(e.fn.caret, w, o), 0) : w.caret(o), r.completed && o >= h && r.completed.call(w))), t.preventDefault())
                            }

                            function y(e, t) {
                                var n;
                                for (n = e; t > n && h > n; n++) u[n] && (_[n] = r.placeholder)
                            }

                            function x() {
                                w.val(_.join(""))
                            }

                            function b(e) {
                                var t, n, i = w.val(),
                                    o = -1;
                                for (t = 0, pos = 0; h > t; t++)
                                    if (u[t]) {
                                        for (_[t] = r.placeholder; pos++ < i.length;)
                                            if (n = i.charAt(pos - 1), u[t].test(n)) {
                                                _[t] = n, o = t;
                                                break
                                            }
                                        if (pos > i.length) break
                                    } else _[t] === i.charAt(pos) && t !== c && (pos++, o = t);
                                return e ? x() : c > o + 1 ? (w.val(""), y(0, h)) : (x(), w.val(w.val().substring(0, o + 1))), c ? t : d
                            }
                            var w = e(this),
                                _ = e.map(t.split(""), function(e) {
                                    return "?" != e ? l[e] ? r.placeholder : e : void 0
                                }),
                                C = w.val();
                            w.data(e.mask.dataName, function() {
                                return e.map(_, function(e, t) {
                                    return u[t] && e != r.placeholder ? e : null
                                }).join("")
                            }), w.attr("readonly") || w.one("unmask", function() {
                                w.unbind(".mask").removeData(e.mask.dataName)
                            }).bind("focus.mask", function() {
                                clearTimeout(n);
                                var e;
                                C = w.val(), e = b(), n = setTimeout(function() {
                                    x(), e == t.length ? w.caret(0, e) : w.caret(e)
                                }, 10)
                            }).bind("blur.mask", function() {
                                b(), w.val() != C && w.change()
                            }).bind("keydown.mask", m).bind("keypress.mask", v).bind(i, function() {
                                setTimeout(function() {
                                    var e = b(!0);
                                    w.caret(e), r.completed && e == w.val().length && r.completed.call(w)
                                }, 0)
                            }), b()
                        }))
                    }
                })
            }(jQuery), $(function() {
                $.mask.definitions[1] = "[0123456789]", $(".phone").mask("+7 (199) 999-99-99", {
                    placeholder: "_"
                })
            }), $(".contactform1").submit(function(e) {
                e.preventDefault();
                return $(this).validationEngine("validate") && ($(this).ajaxSubmit(), $(this).clearForm(), $.arcticmodal("close"), $(".thanks").arcticmodal()), !1
            }), navigator.userAgent.match(/IEMobile\/10\.0/)) {
            var t = document.createElement("style");
            t.appendChild(document.createTextNode("@-ms-viewport{width:auto!important}")), document.querySelector("head").appendChild(t)
        }
        
        $(".callback").on("click", function() {
            return $(".popup1").arcticmodal(), !1
        });
        $(".cbk_offerta").on("click", function() {
            return $(".popup_off").arcticmodal(), !1
        });
        $(".callback2").on("click", function() {
            return $(".popup2").arcticmodal(), !1
        });
        var n = $("#carous1");
        n.owlCarousel({
            loop: !0,
            items: 1,
            margin: 0,
            nav: !1,
            mouseDrag: !1,
            touchDrag: !1,
            dots: !1,
            animateIn: "fadeIn",
            autoplay: !0,
            autoplayTimeout: 2400,
            autoplayHoverPause: !1,
            dotsEach: !1
        });
        var i = $("#carous2");
        i.owlCarousel({
            loop: !0,
            items: 5,
            margin: 40,
            nav: !1,
            mouseDrag: !1,
            touchDrag: !0,
            dots: !1,
            autoplay: !0,
            autoplayTimeout: 3e3,
            autoplayHoverPause: !1,
            dotsEach: !1
        }), $(".bg3 .fa-angle-left").click(function() {
            i.trigger("prev.owl.carousel")
        }), $(".fa-angle-right").click(function() {
            i.trigger("next.owl.carousel")
        }), $(".bg4 .calc .gocalc").on("click", function(t) {
            t.preventDefault();
            document.getElementById('showPrice').style.display = 'block';
            var n = parseInt($(this).closest("form").find("#amount").val()),
                i = parseInt($(this).closest("form").find("#amount2").val()),
                r = Math.round(n * i / 12 * .015),
                o = Math.round(n * i / 12 * .04);
            $(".bg4 .calc form").validationEngine("validate") && (n > 1000000000 || i > 60 ? (console.log("21"), $(".bg4 .calc #amount").attr("placeholder", "Не более 1 000 000 000 руб."), $(".bg4 .calc #amount2").attr("placeholder", "Не более 60 мес."),
                $(".bg4 .calc #amount").val(" "), $(".bg4 .calc #amount2").val(" ")) : r >= 900 && o >= 2500 ? ($(".bg4 .calc .fromsum").text(accounting.formatMoney(r,"", 0, " ", ",", "%v %s")), $(".bg4 .calc .beforesum").text(accounting.formatMoney(o,"", 0, " ", ",", "%v %s")), $(".bg4 .calc .gocalc").css("margin-top", "43px"), setTimeout(e, 1300)) : 900 >= r && o >= 2500 ? ($(".bg4 .calc .fromsum").text("900"), $(".bg4 .calc .beforesum").text(accounting.formatMoney(o,"", 0, " ", ",", "%v %s")), $(".bg4 .calc .gocalc").css("margin-top", "43px"), setTimeout(e, 1300)) : 900 >= r && 2500 >= o && ($(".bg4 .calc .fromsum").text("900"), $(".bg4 .calc .beforesum").text("2500"), $(".bg4 .calc .gocalc").css("margin-top", "43px"), setTimeout(e, 1300)))
        });

		$('.bg7 .fixwidth img').hover(function() {
			if($(this).hasClass('abs1')){
				$('.bg7 .maxnone').removeClass('active');
				$('.bg7 .big1').addClass('active');
			} else
			if($(this).hasClass('abs2')){
				$('.bg7 .maxnone').removeClass('active');
				$('.bg7 .big2').addClass('active');
			} else
			if($(this).hasClass('abs3')){
				$('.bg7 .maxnone').removeClass('active');
				$('.bg7 .big3').addClass('active');
			} else
			if($(this).hasClass('abs4')){
				$('.bg7 .maxnone').removeClass('active');
				$('.bg7 .big4').addClass('active');
			} else
			if($(this).hasClass('abs5')){
				$('.bg7 .maxnone').removeClass('active');
				$('.bg7 .big5').addClass('active');
			} else
			if($(this).hasClass('abs6')){
				$('.bg7 .maxnone').removeClass('active');
				$('.bg7 .big6').addClass('active');
			} else
			if($(this).hasClass('abs7')){
				$('.bg7 .maxnone').removeClass('active');
				$('.bg7 .big7').addClass('active');
			} else
			if($(this).hasClass('abs8')){
				$('.bg7 .maxnone').removeClass('active');
				$('.bg7 .big8').addClass('active');
			} 
		}, function() {
			/* Stuff to do when the mouse leaves the element */
		});

		var carous3 = $("#carous3");
        carous3.owlCarousel({
            loop: 1,
            items: 1,
            margin: 10,
            nav: !1,
            mouseDrag: !1,
            touchDrag: !0,
            dots: !1,
            autoplay: !1,
            autoplayTimeout: 3e3,
            autoplayHoverPause: !1,
            dotsEach: !1
        }); 
        $(".bg8 .fa-angle-left").click(function() {
            carous3.trigger("prev.owl.carousel")
        }); 
        $(".bg8 .fa-angle-right").click(function() {
            carous3.trigger("next.owl.carousel")
        });

        $('.bg8 .block .sert').on('click', function(event) {
        	event.preventDefault();
        	var src = $(this).attr('src');
        	$('.popup_img img').attr('src', src);
        	return $(".popup_img").arcticmodal(), !1;
        });

        // var hei = $(window).outerHeight();

        // if(hei>=650 && $(window).outerWidth()<=1920){
        //     $('.bg1').css('min-height', hei);
        // }
        
        // $(window).on('scroll', function(event) {
        //     var heimenu = $(window).scrollTop();
        //     if (heimenu>=$('.bgmenu').offset().top) {
        //         console.log('sda');
        //         $('.bgmenu .navbar').fadeIn(300);
        //         $('.bgmenu .navbar').addClass('navbar-fixed-top');
        //     } else {
        //         console.log('sda2');
        //         $('.bgmenu .navbar').fadeOut(150);
        //     }
        // });

        $(".bgmenu a[href='#main']").click(function() {
            $('html, body').animate({
                scrollTop: $("#main").offset().top
            }, 1000);
            return false;
        });
        $(".bgmenu a[href='#garant']").click(function() {
            $('html, body').animate({
                scrollTop: $("#garant").offset().top
            }, 1000);
            return false;
        });
        $(".bgmenu a[href='#calc']").click(function() {
            $('html, body').animate({
                scrollTop: $("#calc").offset().top
            }, 1000);
            return false;
        });
        $(".bgmenu a[href='#steps']").click(function() {
            $('html, body').animate({
                scrollTop: $("#steps").offset().top
            }, 1000);
            return false;
        });
        $(".bgmenu a[href='#services']").click(function() {
            $('html, body').animate({
                scrollTop: $("#services").offset().top
            }, 1000);
            return false;
        });
        $(".bgmenu a[href='#team']").click(function() {
            $('html, body').animate({
                scrollTop: $("#team").offset().top
            }, 1000);
            return false;
        });
        $(".bgmenu a[href='#testimonials']").click(function() {
            $('html, body').animate({
                scrollTop: $("#testimonials").offset().top
            }, 1000);
            return false;
        });
        		
    });