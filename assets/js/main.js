function hexToRgb(e) {
    e = e.replace(/^#?([a-f\d])([a-f\d])([a-f\d])$/i, function (e, t, n, i) {
        return t + t + n + n + i + i
    });
    var t = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(e);
    return t ? {
        r: parseInt(t[1], 16),
        g: parseInt(t[2], 16),
        b: parseInt(t[3], 16)
    } : null
}

function clamp(e, t, n) {
    return Math.min(Math.max(e, t), n)
}

function isInArray(e, t) {
    return -1 < t.indexOf(e)
}
if (function (e, t) {
        "object" == typeof module && "object" == typeof module.exports ? module.exports = e.document ? t(e, !0) : function (e) {
            if (!e.document) throw new Error("jQuery requires a window with a document");
            return t(e)
        } : t(e)
    }("undefined" != typeof window ? window : this, function (C, e) {
        function a(e) {
            var t = !!e && "length" in e && e.length,
                n = K.type(e);
            return "function" !== n && !K.isWindow(e) && ("array" === n || 0 === t || "number" == typeof t && 0 < t && t - 1 in e)
        }

        function t(e, n, i) {
            if (K.isFunction(n)) return K.grep(e, function (e, t) {
                return !!n.call(e, t, e) !== i
            });
            if (n.nodeType) return K.grep(e, function (e) {
                return e === n !== i
            });
            if ("string" == typeof n) {
                if (oe.test(n)) return K.filter(n, e, i);
                n = K.filter(n, e)
            }
            return K.grep(e, function (e) {
                return -1 < V.call(n, e) !== i
            })
        }

        function n(e, t) {
            for (;
                (e = e[t]) && 1 !== e.nodeType;);
            return e
        }

        function i() {
            z.removeEventListener("DOMContentLoaded", i), C.removeEventListener("load", i), K.ready()
        }

        function r() {
            this.expando = K.expando + r.uid++
        }

        function l(e, t, n) {
            var i;
            if (void 0 === n && 1 === e.nodeType)
                if (i = "data-" + t.replace(ge, "-$&").toLowerCase(), "string" == typeof (n = e.getAttribute(i))) {
                    try {
                        n = "true" === n || "false" !== n && ("null" === n ? null : +n + "" === n ? +n : me.test(n) ? K.parseJSON(n) : n)
                    } catch (e) {}
                    ve.set(e, t, n)
                } else n = void 0;
            return n
        }

        function c(e, t, n, i) {
            var r, o = 1,
                s = 20,
                a = i ? function () {
                    return i.cur()
                } : function () {
                    return K.css(e, t, "")
                },
                l = a(),
                c = n && n[3] || (K.cssNumber[t] ? "" : "px"),
                u = (K.cssNumber[t] || "px" !== c && +l) && be.exec(K.css(e, t));
            if (u && u[3] !== c)
                for (c = c || u[3], n = n || [], u = +l || 1; u /= o = o || ".5", K.style(e, t, u + c), o !== (o = a() / l) && 1 !== o && --s;);
            return n && (u = +u || +l || 0, r = n[1] ? u + (n[1] + 1) * n[2] : +n[2], i && (i.unit = c, i.start = u, i.end = r)), r
        }

        function v(e, t) {
            var n = void 0 !== e.getElementsByTagName ? e.getElementsByTagName(t || "*") : void 0 !== e.querySelectorAll ? e.querySelectorAll(t || "*") : [];
            return void 0 === t || t && K.nodeName(e, t) ? K.merge([e], n) : n
        }

        function m(e, t) {
            for (var n = 0, i = e.length; n < i; n++) he.set(e[n], "globalEval", !t || he.get(t[n], "globalEval"))
        }

        function g(e, t, n, i, r) {
            for (var o, s, a, l, c, u, p = t.createDocumentFragment(), d = [], f = 0, h = e.length; f < h; f++)
                if ((o = e[f]) || 0 === o)
                    if ("object" === K.type(o)) K.merge(d, o.nodeType ? [o] : o);
                    else if (Ae.test(o)) {
                for (s = s || p.appendChild(t.createElement("div")), a = (Ce.exec(o) || ["", ""])[1].toLowerCase(), l = Ee[a] || Ee._default, s.innerHTML = l[1] + K.htmlPrefilter(o) + l[2], u = l[0]; u--;) s = s.lastChild;
                K.merge(d, s.childNodes), (s = p.firstChild).textContent = ""
            } else d.push(t.createTextNode(o));
            for (p.textContent = "", f = 0; o = d[f++];)
                if (i && -1 < K.inArray(o, i)) r && r.push(o);
                else if (c = K.contains(o.ownerDocument, o), s = v(p.appendChild(o), "script"), c && m(s), n)
                for (u = 0; o = s[u++];) ke.test(o.type || "") && n.push(o);
            return p
        }

        function o() {
            return !0
        }

        function u() {
            return !1
        }

        function s() {
            try {
                return z.activeElement
            } catch (e) {}
        }

        function p(e, t, n, i, r, o) {
            var s, a;
            if ("object" == typeof t) {
                for (a in "string" != typeof n && (i = i || n, n = void 0), t) p(e, a, n, i, t[a], o);
                return e
            }
            if (null == i && null == r ? (r = n, i = n = void 0) : null == r && ("string" == typeof n ? (r = i, i = void 0) : (r = i, i = n, n = void 0)), !1 === r) r = u;
            else if (!r) return this;
            return 1 === o && (s = r, (r = function (e) {
                return K().off(e), s.apply(this, arguments)
            }).guid = s.guid || (s.guid = K.guid++)), e.each(function () {
                K.event.add(this, t, r, i, n)
            })
        }

        function d(e, t) {
            return K.nodeName(e, "table") && K.nodeName(11 !== t.nodeType ? t : t.firstChild, "tr") && e.getElementsByTagName("tbody")[0] || e
        }

        function y(e) {
            return e.type = (null !== e.getAttribute("type")) + "/" + e.type, e
        }

        function b(e) {
            var t = Oe.exec(e.type);
            return t ? e.type = t[1] : e.removeAttribute("type"), e
        }

        function f(e, t) {
            var n, i, r, o, s, a, l, c;
            if (1 === t.nodeType) {
                if (he.hasData(e) && (o = he.access(e), s = he.set(t, o), c = o.events))
                    for (r in delete s.handle, s.events = {}, c)
                        for (n = 0, i = c[r].length; n < i; n++) K.event.add(t, r, c[r][n]);
                ve.hasData(e) && (a = ve.access(e), l = K.extend({}, a), ve.set(t, l))
            }
        }

        function x(n, i, r, o) {
            i = U.apply([], i);
            var e, t, s, a, l, c, u = 0,
                p = n.length,
                d = p - 1,
                f = i[0],
                h = K.isFunction(f);
            if (h || 1 < p && "string" == typeof f && !G.checkClone && Ie.test(f)) return n.each(function (e) {
                var t = n.eq(e);
                h && (i[0] = f.call(this, e, t.html())), x(t, i, r, o)
            });
            if (p && (t = (e = g(i, n[0].ownerDocument, !1, n, o)).firstChild, 1 === e.childNodes.length && (e = t), t || o)) {
                for (a = (s = K.map(v(e, "script"), y)).length; u < p; u++) l = e, u !== d && (l = K.clone(l, !0, !0), a && K.merge(s, v(l, "script"))), r.call(n[u], l, u);
                if (a)
                    for (c = s[s.length - 1].ownerDocument, K.map(s, b), u = 0; u < a; u++) l = s[u], ke.test(l.type || "") && !he.access(l, "globalEval") && K.contains(c, l) && (l.src ? K._evalUrl && K._evalUrl(l.src) : K.globalEval(l.textContent.replace(Re, "")))
            }
            return n
        }

        function h(e, t, n) {
            for (var i, r = t ? K.filter(t, e) : e, o = 0; null != (i = r[o]); o++) n || 1 !== i.nodeType || K.cleanData(v(i)), i.parentNode && (n && K.contains(i.ownerDocument, i) && m(v(i, "script")), i.parentNode.removeChild(i));
            return e
        }

        function w(e, t) {
            var n = K(t.createElement(e)).appendTo(t.body),
                i = K.css(n[0], "display");
            return n.detach(), i
        }

        function T(e) {
            var t = z,
                n = qe[e];
            return n || ("none" !== (n = w(e, t)) && n || ((t = (Le = (Le || K("<iframe frameborder='0' width='0' height='0'/>")).appendTo(t.documentElement))[0].contentDocument).write(), t.close(), n = w(e, t), Le.detach()), qe[e] = n), n
        }

        function k(e, t, n) {
            var i, r, o, s, a = e.style;
            return (n = n || Me(e)) && ("" !== (s = n.getPropertyValue(t) || n[t]) || K.contains(e.ownerDocument, e) || (s = K.style(e, t)), !G.pixelMarginRight() && Fe.test(s) && Pe.test(t) && (i = a.width, r = a.minWidth, o = a.maxWidth, a.minWidth = a.maxWidth = a.width = s, s = n.width, a.width = i, a.minWidth = r, a.maxWidth = o)), void 0 !== s ? s + "" : s
        }

        function E(e, t) {
            return {
                get: function () {
                    return e() ? void delete this.get : (this.get = t).apply(this, arguments)
                }
            }
        }

        function S(e) {
            if (e in Ve) return e;
            for (var t = e[0].toUpperCase() + e.slice(1), n = Xe.length; n--;)
                if ((e = Xe[n] + t) in Ve) return e
        }

        function _(e, t, n) {
            var i = be.exec(t);
            return i ? Math.max(0, i[2] - (n || 0)) + (i[3] || "px") : t
        }

        function A(e, t, n, i, r) {
            for (var o = n === (i ? "border" : "content") ? 4 : "width" === t ? 1 : 0, s = 0; o < 4; o += 2) "margin" === n && (s += K.css(e, n + xe[o], !0, r)), i ? ("content" === n && (s -= K.css(e, "padding" + xe[o], !0, r)), "margin" !== n && (s -= K.css(e, "border" + xe[o] + "Width", !0, r))) : (s += K.css(e, "padding" + xe[o], !0, r), "padding" !== n && (s += K.css(e, "border" + xe[o] + "Width", !0, r)));
            return s
        }

        function $(e, t, n) {
            var i = !0,
                r = "width" === t ? e.offsetWidth : e.offsetHeight,
                o = Me(e),
                s = "border-box" === K.css(e, "boxSizing", !1, o);
            if (z.msFullscreenElement && C.top !== C && e.getClientRects().length && (r = Math.round(100 * e.getBoundingClientRect()[t])), r <= 0 || null == r) {
                if (((r = k(e, t, o)) < 0 || null == r) && (r = e.style[t]), Fe.test(r)) return r;
                i = s && (G.boxSizingReliable() || r === e.style[t]), r = parseFloat(r) || 0
            }
            return r + A(e, t, n || (s ? "border" : "content"), i, o) + "px"
        }

        function D(e, t) {
            for (var n, i, r, o = [], s = 0, a = e.length; s < a; s++)(i = e[s]).style && (o[s] = he.get(i, "olddisplay"), n = i.style.display, t ? (o[s] || "none" !== n || (i.style.display = ""), "" === i.style.display && we(i) && (o[s] = he.access(i, "olddisplay", T(i.nodeName)))) : (r = we(i), "none" === n && r || he.set(i, "olddisplay", r ? n : K.css(i, "display"))));
            for (s = 0; s < a; s++)(i = e[s]).style && (t && "none" !== i.style.display && "" !== i.style.display || (i.style.display = t ? o[s] || "" : "none"));
            return e
        }

        function N(e, t, n, i, r) {
            return new N.prototype.init(e, t, n, i, r)
        }

        function j() {
            return C.setTimeout(function () {
                Je = void 0
            }), Je = K.now()
        }

        function I(e, t) {
            var n, i = 0,
                r = {
                    height: e
                };
            for (t = t ? 1 : 0; i < 4; i += 2 - t) r["margin" + (n = xe[i])] = r["padding" + n] = e;
            return t && (r.opacity = r.width = e), r
        }

        function O(e, t, n) {
            for (var i, r = (R.tweeners[t] || []).concat(R.tweeners["*"]), o = 0, s = r.length; o < s; o++)
                if (i = r[o].call(n, t, e)) return i
        }

        function R(o, e, t) {
            var n, s, i = 0,
                r = R.prefilters.length,
                a = K.Deferred().always(function () {
                    delete l.elem
                }),
                l = function () {
                    if (s) return !1;
                    for (var e = Je || j(), t = Math.max(0, c.startTime + c.duration - e), n = 1 - (t / c.duration || 0), i = 0, r = c.tweens.length; i < r; i++) c.tweens[i].run(n);
                    return a.notifyWith(o, [c, n, t]), n < 1 && r ? t : (a.resolveWith(o, [c]), !1)
                },
                c = a.promise({
                    elem: o,
                    props: K.extend({}, e),
                    opts: K.extend(!0, {
                        specialEasing: {},
                        easing: K.easing._default
                    }, t),
                    originalProperties: e,
                    originalOptions: t,
                    startTime: Je || j(),
                    duration: t.duration,
                    tweens: [],
                    createTween: function (e, t) {
                        var n = K.Tween(o, c.opts, e, t, c.opts.specialEasing[e] || c.opts.easing);
                        return c.tweens.push(n), n
                    },
                    stop: function (e) {
                        var t = 0,
                            n = e ? c.tweens.length : 0;
                        if (s) return this;
                        for (s = !0; t < n; t++) c.tweens[t].run(1);
                        return e ? (a.notifyWith(o, [c, 1, 0]), a.resolveWith(o, [c, e])) : a.rejectWith(o, [c, e]), this
                    }
                }),
                u = c.props;
            for (function (e, t) {
                    var n, i, r, o, s;
                    for (n in e)
                        if (r = t[i = K.camelCase(n)], o = e[n], K.isArray(o) && (r = o[1], o = e[n] = o[0]), n !== i && (e[i] = o, delete e[n]), (s = K.cssHooks[i]) && "expand" in s)
                            for (n in o = s.expand(o), delete e[i], o) n in e || (e[n] = o[n], t[n] = r);
                        else t[i] = r
                }(u, c.opts.specialEasing); i < r; i++)
                if (n = R.prefilters[i].call(c, o, u, c.opts)) return K.isFunction(n.stop) && (K._queueHooks(c.elem, c.opts.queue).stop = K.proxy(n.stop, n)), n;
            return K.map(u, O, c), K.isFunction(c.opts.start) && c.opts.start.call(o, c), K.fx.timer(K.extend(l, {
                elem: o,
                anim: c,
                queue: c.opts.queue
            })), c.progress(c.opts.progress).done(c.opts.done, c.opts.complete).fail(c.opts.fail).always(c.opts.always)
        }

        function L(e) {
            return e.getAttribute && e.getAttribute("class") || ""
        }

        function q(o) {
            return function (e, t) {
                "string" != typeof e && (t = e, e = "*");
                var n, i = 0,
                    r = e.toLowerCase().match(pe) || [];
                if (K.isFunction(t))
                    for (; n = r[i++];) "+" === n[0] ? (n = n.slice(1) || "*", (o[n] = o[n] || []).unshift(t)) : (o[n] = o[n] || []).push(t)
            }
        }

        function P(t, r, o, s) {
            function a(e) {
                var i;
                return l[e] = !0, K.each(t[e] || [], function (e, t) {
                    var n = t(r, o, s);
                    return "string" != typeof n || c || l[n] ? c ? !(i = n) : void 0 : (r.dataTypes.unshift(n), a(n), !1)
                }), i
            }
            var l = {},
                c = t === ht;
            return a(r.dataTypes[0]) || !l["*"] && a("*")
        }

        function F(e, t) {
            var n, i, r = K.ajaxSettings.flatOptions || {};
            for (n in t) void 0 !== t[n] && ((r[n] ? e : i || (i = {}))[n] = t[n]);
            return i && K.extend(!0, e, i), e
        }

        function M(n, e, i, r) {
            var t;
            if (K.isArray(e)) K.each(e, function (e, t) {
                i || gt.test(n) ? r(n, t) : M(n + "[" + ("object" == typeof t && null != t ? e : "") + "]", t, i, r)
            });
            else if (i || "object" !== K.type(e)) r(n, e);
            else
                for (t in e) M(n + "[" + t + "]", e[t], i, r)
        }

        function H(e) {
            return K.isWindow(e) ? e : 9 === e.nodeType && e.defaultView
        }
        var W = [],
            z = C.document,
            B = W.slice,
            U = W.concat,
            X = W.push,
            V = W.indexOf,
            J = {},
            Q = J.toString,
            Y = J.hasOwnProperty,
            G = {},
            K = function (e, t) {
                return new K.fn.init(e, t)
            },
            Z = function (e, t) {
                return t.toUpperCase()
            };
        K.fn = K.prototype = {
            jquery: "2.2.0",
            constructor: K,
            selector: "",
            length: 0,
            toArray: function () {
                return B.call(this)
            },
            get: function (e) {
                return null != e ? e < 0 ? this[e + this.length] : this[e] : B.call(this)
            },
            pushStack: function (e) {
                var t = K.merge(this.constructor(), e);
                return t.prevObject = this, t.context = this.context, t
            },
            each: function (e) {
                return K.each(this, e)
            },
            map: function (n) {
                return this.pushStack(K.map(this, function (e, t) {
                    return n.call(e, t, e)
                }))
            },
            slice: function () {
                return this.pushStack(B.apply(this, arguments))
            },
            first: function () {
                return this.eq(0)
            },
            last: function () {
                return this.eq(-1)
            },
            eq: function (e) {
                var t = this.length,
                    n = +e + (e < 0 ? t : 0);
                return this.pushStack(0 <= n && n < t ? [this[n]] : [])
            },
            end: function () {
                return this.prevObject || this.constructor()
            },
            push: X,
            sort: W.sort,
            splice: W.splice
        }, K.extend = K.fn.extend = function () {
            var e, t, n, i, r, o, s = arguments[0] || {},
                a = 1,
                l = arguments.length,
                c = !1;
            for ("boolean" == typeof s && (c = s, s = arguments[a] || {}, a++), "object" == typeof s || K.isFunction(s) || (s = {}), a === l && (s = this, a--); a < l; a++)
                if (null != (e = arguments[a]))
                    for (t in e) n = s[t], s !== (i = e[t]) && (c && i && (K.isPlainObject(i) || (r = K.isArray(i))) ? (r ? (r = !1, o = n && K.isArray(n) ? n : []) : o = n && K.isPlainObject(n) ? n : {}, s[t] = K.extend(c, o, i)) : void 0 !== i && (s[t] = i));
            return s
        }, K.extend({
            expando: "jQuery" + ("2.2.0" + Math.random()).replace(/\D/g, ""),
            isReady: !0,
            error: function (e) {
                throw new Error(e)
            },
            noop: function () {},
            isFunction: function (e) {
                return "function" === K.type(e)
            },
            isArray: Array.isArray,
            isWindow: function (e) {
                return null != e && e === e.window
            },
            isNumeric: function (e) {
                var t = e && e.toString();
                return !K.isArray(e) && 0 <= t - parseFloat(t) + 1
            },
            isPlainObject: function (e) {
                return !("object" !== K.type(e) || e.nodeType || K.isWindow(e) || e.constructor && !Y.call(e.constructor.prototype, "isPrototypeOf"))
            },
            isEmptyObject: function (e) {
                var t;
                for (t in e) return !1;
                return !0
            },
            type: function (e) {
                return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? J[Q.call(e)] || "object" : typeof e
            },
            globalEval: function (e) {
                var t, n = eval;
                (e = K.trim(e)) && (1 === e.indexOf("use strict") ? ((t = z.createElement("script")).text = e, z.head.appendChild(t).parentNode.removeChild(t)) : n(e))
            },
            camelCase: function (e) {
                return e.replace(/^-ms-/, "ms-").replace(/-([\da-z])/gi, Z)
            },
            nodeName: function (e, t) {
                return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
            },
            each: function (e, t) {
                var n, i = 0;
                if (a(e))
                    for (n = e.length; i < n && !1 !== t.call(e[i], i, e[i]); i++);
                else
                    for (i in e)
                        if (!1 === t.call(e[i], i, e[i])) break;
                return e
            },
            trim: function (e) {
                return null == e ? "" : (e + "").replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "")
            },
            makeArray: function (e, t) {
                var n = t || [];
                return null != e && (a(Object(e)) ? K.merge(n, "string" == typeof e ? [e] : e) : X.call(n, e)), n
            },
            inArray: function (e, t, n) {
                return null == t ? -1 : V.call(t, e, n)
            },
            merge: function (e, t) {
                for (var n = +t.length, i = 0, r = e.length; i < n; i++) e[r++] = t[i];
                return e.length = r, e
            },
            grep: function (e, t, n) {
                for (var i = [], r = 0, o = e.length, s = !n; r < o; r++) !t(e[r], r) !== s && i.push(e[r]);
                return i
            },
            map: function (e, t, n) {
                var i, r, o = 0,
                    s = [];
                if (a(e))
                    for (i = e.length; o < i; o++) null != (r = t(e[o], o, n)) && s.push(r);
                else
                    for (o in e) null != (r = t(e[o], o, n)) && s.push(r);
                return U.apply([], s)
            },
            guid: 1,
            proxy: function (e, t) {
                var n, i, r;
                return "string" == typeof t && (n = e[t], t = e, e = n), K.isFunction(e) ? (i = B.call(arguments, 2), (r = function () {
                    return e.apply(t || this, i.concat(B.call(arguments)))
                }).guid = e.guid = e.guid || K.guid++, r) : void 0
            },
            now: Date.now,
            support: G
        }), "function" == typeof Symbol && (K.fn[Symbol.iterator] = W[Symbol.iterator]), K.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function (e, t) {
            J["[object " + t + "]"] = t.toLowerCase()
        });
        var ee = function (n) {
            function x(e, t, n, i) {
                var r, o, s, a, l, c, u, p, d = t && t.ownerDocument,
                    f = t ? t.nodeType : 9;
                if (n = n || [], "string" != typeof e || !e || 1 !== f && 9 !== f && 11 !== f) return n;
                if (!i && ((t ? t.ownerDocument || t : L) !== A && _(t), t = t || A, D)) {
                    if (11 !== f && (c = de.exec(e)))
                        if (r = c[1]) {
                            if (9 === f) {
                                if (!(s = t.getElementById(r))) return n;
                                if (s.id === r) return n.push(s), n
                            } else if (d && (s = d.getElementById(r)) && O(t, s) && s.id === r) return n.push(s), n
                        } else {
                            if (c[2]) return V.apply(n, t.getElementsByTagName(e)), n;
                            if ((r = c[3]) && m.getElementsByClassName && t.getElementsByClassName) return V.apply(n, t.getElementsByClassName(r)), n
                        } if (m.qsa && !H[e + " "] && (!N || !N.test(e))) {
                        if (1 !== f) d = t, p = e;
                        else if ("object" !== t.nodeName.toLowerCase()) {
                            for ((a = t.getAttribute("id")) ? a = a.replace(he, "\\$&") : t.setAttribute("id", a = R), o = (u = C(e)).length, l = ae.test(a) ? "#" + a : "[id='" + a + "']"; o--;) u[o] = l + " " + v(u[o]);
                            p = u.join(","), d = fe.test(e) && h(t.parentNode) || t
                        }
                        if (p) try {
                            return V.apply(n, d.querySelectorAll(p)), n
                        } catch (e) {} finally {
                            a === R && t.removeAttribute("id")
                        }
                    }
                }
                return b(e.replace(ne, "$1"), t, n, i)
            }

            function e() {
                var i = [];
                return function e(t, n) {
                    return i.push(t + " ") > T.cacheLength && delete e[i.shift()], e[t + " "] = n
                }
            }

            function l(e) {
                return e[R] = !0, e
            }

            function r(e) {
                var t = A.createElement("div");
                try {
                    return !!e(t)
                } catch (e) {
                    return !1
                } finally {
                    t.parentNode && t.parentNode.removeChild(t), t = null
                }
            }

            function t(e, t) {
                for (var n = e.split("|"), i = n.length; i--;) T.attrHandle[n[i]] = t
            }

            function c(e, t) {
                var n = t && e,
                    i = n && 1 === e.nodeType && 1 === t.nodeType && (~t.sourceIndex || 1 << 31) - (~e.sourceIndex || 1 << 31);
                if (i) return i;
                if (n)
                    for (; n = n.nextSibling;)
                        if (n === t) return -1;
                return e ? 1 : -1
            }

            function i(s) {
                return l(function (o) {
                    return o = +o, l(function (e, t) {
                        for (var n, i = s([], e.length, o), r = i.length; r--;) e[n = i[r]] && (e[n] = !(t[n] = e[n]))
                    })
                })
            }

            function h(e) {
                return e && void 0 !== e.getElementsByTagName && e
            }

            function o() {}

            function v(e) {
                for (var t = 0, n = e.length, i = ""; t < n; t++) i += e[t].value;
                return i
            }

            function p(a, e, t) {
                var l = e.dir,
                    c = t && "parentNode" === l,
                    u = P++;
                return e.first ? function (e, t, n) {
                    for (; e = e[l];)
                        if (1 === e.nodeType || c) return a(e, t, n)
                } : function (e, t, n) {
                    var i, r, o, s = [q, u];
                    if (n) {
                        for (; e = e[l];)
                            if ((1 === e.nodeType || c) && a(e, t, n)) return !0
                    } else
                        for (; e = e[l];)
                            if (1 === e.nodeType || c) {
                                if ((i = (r = (o = e[R] || (e[R] = {}))[e.uniqueID] || (o[e.uniqueID] = {}))[l]) && i[0] === q && i[1] === u) return s[2] = i[2];
                                if ((r[l] = s)[2] = a(e, t, n)) return !0
                            }
                }
            }

            function d(r) {
                return 1 < r.length ? function (e, t, n) {
                    for (var i = r.length; i--;)
                        if (!r[i](e, t, n)) return !1;
                    return !0
                } : r[0]
            }

            function w(e, t, n, i, r) {
                for (var o, s = [], a = 0, l = e.length, c = null != t; a < l; a++)(o = e[a]) && (!n || n(o, i, r)) && (s.push(o), c && t.push(a));
                return s
            }

            function y(f, h, v, m, g, e) {
                return m && !m[R] && (m = y(m)), g && !g[R] && (g = y(g, e)), l(function (e, t, n, i) {
                    var r, o, s, a = [],
                        l = [],
                        c = t.length,
                        u = e || function (e, t, n) {
                            for (var i = 0, r = t.length; i < r; i++) x(e, t[i], n);
                            return n
                        }(h || "*", n.nodeType ? [n] : n, []),
                        p = !f || !e && h ? u : w(u, a, f, n, i),
                        d = v ? g || (e ? f : c || m) ? [] : t : p;
                    if (v && v(p, d, n, i), m)
                        for (r = w(d, l), m(r, [], n, i), o = r.length; o--;)(s = r[o]) && (d[l[o]] = !(p[l[o]] = s));
                    if (e) {
                        if (g || f) {
                            if (g) {
                                for (r = [], o = d.length; o--;)(s = d[o]) && r.push(p[o] = s);
                                g(null, d = [], r, i)
                            }
                            for (o = d.length; o--;)(s = d[o]) && -1 < (r = g ? Q(e, s) : a[o]) && (e[r] = !(t[r] = s))
                        }
                    } else d = w(d === t ? d.splice(c, d.length) : d), g ? g(null, t, d, i) : V.apply(t, d)
                })
            }

            function f(e) {
                for (var r, t, n, i = e.length, o = T.relative[e[0].type], s = o || T.relative[" "], a = o ? 1 : 0, l = p(function (e) {
                        return e === r
                    }, s, !0), c = p(function (e) {
                        return -1 < Q(r, e)
                    }, s, !0), u = [function (e, t, n) {
                        var i = !o && (n || t !== k) || ((r = t).nodeType ? l(e, t, n) : c(e, t, n));
                        return r = null, i
                    }]; a < i; a++)
                    if (t = T.relative[e[a].type]) u = [p(d(u), t)];
                    else {
                        if ((t = T.filter[e[a].type].apply(null, e[a].matches))[R]) {
                            for (n = ++a; n < i && !T.relative[e[n].type]; n++);
                            return y(1 < a && d(u), 1 < a && v(e.slice(0, a - 1).concat({
                                value: " " === e[a - 2].type ? "*" : ""
                            })).replace(ne, "$1"), t, a < n && f(e.slice(a, n)), n < i && f(e = e.slice(n)), n < i && v(e))
                        }
                        u.push(t)
                    } return d(u)
            }
            var s, m, T, a, u, C, g, b, k, E, S, _, A, $, D, N, j, I, O, R = "sizzle" + 1 * new Date,
                L = n.document,
                q = 0,
                P = 0,
                F = e(),
                M = e(),
                H = e(),
                W = function (e, t) {
                    return e === t && (S = !0), 0
                },
                z = {}.hasOwnProperty,
                B = [],
                U = B.pop,
                X = B.push,
                V = B.push,
                J = B.slice,
                Q = function (e, t) {
                    for (var n = 0, i = e.length; n < i; n++)
                        if (e[n] === t) return n;
                    return -1
                },
                Y = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
                G = "[\\x20\\t\\r\\n\\f]",
                K = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
                Z = "\\[" + G + "*(" + K + ")(?:" + G + "*([*^$|!~]?=)" + G + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + K + "))|)" + G + "*\\]",
                ee = ":(" + K + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + Z + ")*)|.*)\\)|)",
                te = new RegExp(G + "+", "g"),
                ne = new RegExp("^" + G + "+|((?:^|[^\\\\])(?:\\\\.)*)" + G + "+$", "g"),
                ie = new RegExp("^" + G + "*," + G + "*"),
                re = new RegExp("^" + G + "*([>+~]|" + G + ")" + G + "*"),
                oe = new RegExp("=" + G + "*([^\\]'\"]*?)" + G + "*\\]", "g"),
                se = new RegExp(ee),
                ae = new RegExp("^" + K + "$"),
                le = {
                    ID: new RegExp("^#(" + K + ")"),
                    CLASS: new RegExp("^\\.(" + K + ")"),
                    TAG: new RegExp("^(" + K + "|[*])"),
                    ATTR: new RegExp("^" + Z),
                    PSEUDO: new RegExp("^" + ee),
                    CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + G + "*(even|odd|(([+-]|)(\\d*)n|)" + G + "*(?:([+-]|)" + G + "*(\\d+)|))" + G + "*\\)|)", "i"),
                    bool: new RegExp("^(?:" + Y + ")$", "i"),
                    needsContext: new RegExp("^" + G + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + G + "*((?:-\\d)?\\d*)" + G + "*\\)|)(?=[^-]|$)", "i")
                },
                ce = /^(?:input|select|textarea|button)$/i,
                ue = /^h\d$/i,
                pe = /^[^{]+\{\s*\[native \w/,
                de = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
                fe = /[+~]/,
                he = /'|\\/g,
                ve = new RegExp("\\\\([\\da-f]{1,6}" + G + "?|(" + G + ")|.)", "ig"),
                me = function (e, t, n) {
                    var i = "0x" + t - 65536;
                    return i != i || n ? t : i < 0 ? String.fromCharCode(i + 65536) : String.fromCharCode(i >> 10 | 55296, 1023 & i | 56320)
                },
                ge = function () {
                    _()
                };
            try {
                V.apply(B = J.call(L.childNodes), L.childNodes), B[L.childNodes.length].nodeType
            } catch (n) {
                V = {
                    apply: B.length ? function (e, t) {
                        X.apply(e, J.call(t))
                    } : function (e, t) {
                        for (var n = e.length, i = 0; e[n++] = t[i++];);
                        e.length = n - 1
                    }
                }
            }
            for (s in m = x.support = {}, u = x.isXML = function (e) {
                    var t = e && (e.ownerDocument || e).documentElement;
                    return !!t && "HTML" !== t.nodeName
                }, _ = x.setDocument = function (e) {
                    var t, n, i = e ? e.ownerDocument || e : L;
                    return i !== A && 9 === i.nodeType && i.documentElement && ($ = (A = i).documentElement, D = !u(A), (n = A.defaultView) && n.top !== n && (n.addEventListener ? n.addEventListener("unload", ge, !1) : n.attachEvent && n.attachEvent("onunload", ge)), m.attributes = r(function (e) {
                        return e.className = "i", !e.getAttribute("className")
                    }), m.getElementsByTagName = r(function (e) {
                        return e.appendChild(A.createComment("")), !e.getElementsByTagName("*").length
                    }), m.getElementsByClassName = pe.test(A.getElementsByClassName), m.getById = r(function (e) {
                        return $.appendChild(e).id = R, !A.getElementsByName || !A.getElementsByName(R).length
                    }), m.getById ? (T.find.ID = function (e, t) {
                        if (void 0 !== t.getElementById && D) {
                            var n = t.getElementById(e);
                            return n ? [n] : []
                        }
                    }, T.filter.ID = function (e) {
                        var t = e.replace(ve, me);
                        return function (e) {
                            return e.getAttribute("id") === t
                        }
                    }) : (delete T.find.ID, T.filter.ID = function (e) {
                        var n = e.replace(ve, me);
                        return function (e) {
                            var t = void 0 !== e.getAttributeNode && e.getAttributeNode("id");
                            return t && t.value === n
                        }
                    }), T.find.TAG = m.getElementsByTagName ? function (e, t) {
                        return void 0 !== t.getElementsByTagName ? t.getElementsByTagName(e) : m.qsa ? t.querySelectorAll(e) : void 0
                    } : function (e, t) {
                        var n, i = [],
                            r = 0,
                            o = t.getElementsByTagName(e);
                        if ("*" === e) {
                            for (; n = o[r++];) 1 === n.nodeType && i.push(n);
                            return i
                        }
                        return o
                    }, T.find.CLASS = m.getElementsByClassName && function (e, t) {
                        return void 0 !== t.getElementsByClassName && D ? t.getElementsByClassName(e) : void 0
                    }, j = [], N = [], (m.qsa = pe.test(A.querySelectorAll)) && (r(function (e) {
                        $.appendChild(e).innerHTML = "<a id='" + R + "'></a><select id='" + R + "-\r\\' msallowcapture=''><option selected=''></option></select>", e.querySelectorAll("[msallowcapture^='']").length && N.push("[*^$]=" + G + "*(?:''|\"\")"), e.querySelectorAll("[selected]").length || N.push("\\[" + G + "*(?:value|" + Y + ")"), e.querySelectorAll("[id~=" + R + "-]").length || N.push("~="), e.querySelectorAll(":checked").length || N.push(":checked"), e.querySelectorAll("a#" + R + "+*").length || N.push(".#.+[+~]")
                    }), r(function (e) {
                        var t = A.createElement("input");
                        t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("name", "D"), e.querySelectorAll("[name=d]").length && N.push("name" + G + "*[*^$|!~]?="), e.querySelectorAll(":enabled").length || N.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), N.push(",.*:")
                    })), (m.matchesSelector = pe.test(I = $.matches || $.webkitMatchesSelector || $.mozMatchesSelector || $.oMatchesSelector || $.msMatchesSelector)) && r(function (e) {
                        m.disconnectedMatch = I.call(e, "div"), I.call(e, "[s!='']:x"), j.push("!=", ee)
                    }), N = N.length && new RegExp(N.join("|")), j = j.length && new RegExp(j.join("|")), t = pe.test($.compareDocumentPosition), O = t || pe.test($.contains) ? function (e, t) {
                        var n = 9 === e.nodeType ? e.documentElement : e,
                            i = t && t.parentNode;
                        return e === i || !(!i || 1 !== i.nodeType || !(n.contains ? n.contains(i) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(i)))
                    } : function (e, t) {
                        if (t)
                            for (; t = t.parentNode;)
                                if (t === e) return !0;
                        return !1
                    }, W = t ? function (e, t) {
                        if (e === t) return S = !0, 0;
                        var n = !e.compareDocumentPosition - !t.compareDocumentPosition;
                        return n || (1 & (n = (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1) || !m.sortDetached && t.compareDocumentPosition(e) === n ? e === A || e.ownerDocument === L && O(L, e) ? -1 : t === A || t.ownerDocument === L && O(L, t) ? 1 : E ? Q(E, e) - Q(E, t) : 0 : 4 & n ? -1 : 1)
                    } : function (e, t) {
                        if (e === t) return S = !0, 0;
                        var n, i = 0,
                            r = e.parentNode,
                            o = t.parentNode,
                            s = [e],
                            a = [t];
                        if (!r || !o) return e === A ? -1 : t === A ? 1 : r ? -1 : o ? 1 : E ? Q(E, e) - Q(E, t) : 0;
                        if (r === o) return c(e, t);
                        for (n = e; n = n.parentNode;) s.unshift(n);
                        for (n = t; n = n.parentNode;) a.unshift(n);
                        for (; s[i] === a[i];) i++;
                        return i ? c(s[i], a[i]) : s[i] === L ? -1 : a[i] === L ? 1 : 0
                    }), A
                }, x.matches = function (e, t) {
                    return x(e, null, null, t)
                }, x.matchesSelector = function (e, t) {
                    if ((e.ownerDocument || e) !== A && _(e), t = t.replace(oe, "='$1']"), m.matchesSelector && D && !H[t + " "] && (!j || !j.test(t)) && (!N || !N.test(t))) try {
                        var n = I.call(e, t);
                        if (n || m.disconnectedMatch || e.document && 11 !== e.document.nodeType) return n
                    } catch (e) {}
                    return 0 < x(t, A, null, [e]).length
                }, x.contains = function (e, t) {
                    return (e.ownerDocument || e) !== A && _(e), O(e, t)
                }, x.attr = function (e, t) {
                    (e.ownerDocument || e) !== A && _(e);
                    var n = T.attrHandle[t.toLowerCase()],
                        i = n && z.call(T.attrHandle, t.toLowerCase()) ? n(e, t, !D) : void 0;
                    return void 0 !== i ? i : m.attributes || !D ? e.getAttribute(t) : (i = e.getAttributeNode(t)) && i.specified ? i.value : null
                }, x.error = function (e) {
                    throw new Error("Syntax error, unrecognized expression: " + e)
                }, x.uniqueSort = function (e) {
                    var t, n = [],
                        i = 0,
                        r = 0;
                    if (S = !m.detectDuplicates, E = !m.sortStable && e.slice(0), e.sort(W), S) {
                        for (; t = e[r++];) t === e[r] && (i = n.push(r));
                        for (; i--;) e.splice(n[i], 1)
                    }
                    return E = null, e
                }, a = x.getText = function (e) {
                    var t, n = "",
                        i = 0,
                        r = e.nodeType;
                    if (r) {
                        if (1 === r || 9 === r || 11 === r) {
                            if ("string" == typeof e.textContent) return e.textContent;
                            for (e = e.firstChild; e; e = e.nextSibling) n += a(e)
                        } else if (3 === r || 4 === r) return e.nodeValue
                    } else
                        for (; t = e[i++];) n += a(t);
                    return n
                }, (T = x.selectors = {
                    cacheLength: 50,
                    createPseudo: l,
                    match: le,
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
                        ATTR: function (e) {
                            return e[1] = e[1].replace(ve, me), e[3] = (e[3] || e[4] || e[5] || "").replace(ve, me), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4)
                        },
                        CHILD: function (e) {
                            return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || x.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && x.error(e[0]), e
                        },
                        PSEUDO: function (e) {
                            var t, n = !e[6] && e[2];
                            return le.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && se.test(n) && (t = C(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), e[2] = n.slice(0, t)), e.slice(0, 3))
                        }
                    },
                    filter: {
                        TAG: function (e) {
                            var t = e.replace(ve, me).toLowerCase();
                            return "*" === e ? function () {
                                return !0
                            } : function (e) {
                                return e.nodeName && e.nodeName.toLowerCase() === t
                            }
                        },
                        CLASS: function (e) {
                            var t = F[e + " "];
                            return t || (t = new RegExp("(^|" + G + ")" + e + "(" + G + "|$)")) && F(e, function (e) {
                                return t.test("string" == typeof e.className && e.className || void 0 !== e.getAttribute && e.getAttribute("class") || "")
                            })
                        },
                        ATTR: function (n, i, r) {
                            return function (e) {
                                var t = x.attr(e, n);
                                return null == t ? "!=" === i : !i || (t += "", "=" === i ? t === r : "!=" === i ? t !== r : "^=" === i ? r && 0 === t.indexOf(r) : "*=" === i ? r && -1 < t.indexOf(r) : "$=" === i ? r && t.slice(-r.length) === r : "~=" === i ? -1 < (" " + t.replace(te, " ") + " ").indexOf(r) : "|=" === i && (t === r || t.slice(0, r.length + 1) === r + "-"))
                            }
                        },
                        CHILD: function (h, e, t, v, m) {
                            var g = "nth" !== h.slice(0, 3),
                                y = "last" !== h.slice(-4),
                                b = "of-type" === e;
                            return 1 === v && 0 === m ? function (e) {
                                return !!e.parentNode
                            } : function (e, t, n) {
                                var i, r, o, s, a, l, c = g !== y ? "nextSibling" : "previousSibling",
                                    u = e.parentNode,
                                    p = b && e.nodeName.toLowerCase(),
                                    d = !n && !b,
                                    f = !1;
                                if (u) {
                                    if (g) {
                                        for (; c;) {
                                            for (s = e; s = s[c];)
                                                if (b ? s.nodeName.toLowerCase() === p : 1 === s.nodeType) return !1;
                                            l = c = "only" === h && !l && "nextSibling"
                                        }
                                        return !0
                                    }
                                    if (l = [y ? u.firstChild : u.lastChild], y && d) {
                                        for (f = (a = (i = (r = (o = (s = u)[R] || (s[R] = {}))[s.uniqueID] || (o[s.uniqueID] = {}))[h] || [])[0] === q && i[1]) && i[2], s = a && u.childNodes[a]; s = ++a && s && s[c] || (f = a = 0) || l.pop();)
                                            if (1 === s.nodeType && ++f && s === e) {
                                                r[h] = [q, a, f];
                                                break
                                            }
                                    } else if (d && (f = a = (i = (r = (o = (s = e)[R] || (s[R] = {}))[s.uniqueID] || (o[s.uniqueID] = {}))[h] || [])[0] === q && i[1]), !1 === f)
                                        for (;
                                            (s = ++a && s && s[c] || (f = a = 0) || l.pop()) && ((b ? s.nodeName.toLowerCase() !== p : 1 !== s.nodeType) || !++f || (d && ((r = (o = s[R] || (s[R] = {}))[s.uniqueID] || (o[s.uniqueID] = {}))[h] = [q, f]), s !== e)););
                                    return (f -= m) === v || f % v == 0 && 0 <= f / v
                                }
                            }
                        },
                        PSEUDO: function (e, o) {
                            var t, s = T.pseudos[e] || T.setFilters[e.toLowerCase()] || x.error("unsupported pseudo: " + e);
                            return s[R] ? s(o) : 1 < s.length ? (t = [e, e, "", o], T.setFilters.hasOwnProperty(e.toLowerCase()) ? l(function (e, t) {
                                for (var n, i = s(e, o), r = i.length; r--;) e[n = Q(e, i[r])] = !(t[n] = i[r])
                            }) : function (e) {
                                return s(e, 0, t)
                            }) : s
                        }
                    },
                    pseudos: {
                        not: l(function (e) {
                            var i = [],
                                r = [],
                                a = g(e.replace(ne, "$1"));
                            return a[R] ? l(function (e, t, n, i) {
                                for (var r, o = a(e, null, i, []), s = e.length; s--;)(r = o[s]) && (e[s] = !(t[s] = r))
                            }) : function (e, t, n) {
                                return i[0] = e, a(i, null, n, r), i[0] = null, !r.pop()
                            }
                        }),
                        has: l(function (t) {
                            return function (e) {
                                return 0 < x(t, e).length
                            }
                        }),
                        contains: l(function (t) {
                            return t = t.replace(ve, me),
                                function (e) {
                                    return -1 < (e.textContent || e.innerText || a(e)).indexOf(t)
                                }
                        }),
                        lang: l(function (n) {
                            return ae.test(n || "") || x.error("unsupported lang: " + n), n = n.replace(ve, me).toLowerCase(),
                                function (e) {
                                    var t;
                                    do {
                                        if (t = D ? e.lang : e.getAttribute("xml:lang") || e.getAttribute("lang")) return (t = t.toLowerCase()) === n || 0 === t.indexOf(n + "-")
                                    } while ((e = e.parentNode) && 1 === e.nodeType);
                                    return !1
                                }
                        }),
                        target: function (e) {
                            var t = n.location && n.location.hash;
                            return t && t.slice(1) === e.id
                        },
                        root: function (e) {
                            return e === $
                        },
                        focus: function (e) {
                            return e === A.activeElement && (!A.hasFocus || A.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
                        },
                        enabled: function (e) {
                            return !1 === e.disabled
                        },
                        disabled: function (e) {
                            return !0 === e.disabled
                        },
                        checked: function (e) {
                            var t = e.nodeName.toLowerCase();
                            return "input" === t && !!e.checked || "option" === t && !!e.selected
                        },
                        selected: function (e) {
                            return e.parentNode && e.parentNode.selectedIndex, !0 === e.selected
                        },
                        empty: function (e) {
                            for (e = e.firstChild; e; e = e.nextSibling)
                                if (e.nodeType < 6) return !1;
                            return !0
                        },
                        parent: function (e) {
                            return !T.pseudos.empty(e)
                        },
                        header: function (e) {
                            return ue.test(e.nodeName)
                        },
                        input: function (e) {
                            return ce.test(e.nodeName)
                        },
                        button: function (e) {
                            var t = e.nodeName.toLowerCase();
                            return "input" === t && "button" === e.type || "button" === t
                        },
                        text: function (e) {
                            var t;
                            return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase())
                        },
                        first: i(function () {
                            return [0]
                        }),
                        last: i(function (e, t) {
                            return [t - 1]
                        }),
                        eq: i(function (e, t, n) {
                            return [n < 0 ? n + t : n]
                        }),
                        even: i(function (e, t) {
                            for (var n = 0; n < t; n += 2) e.push(n);
                            return e
                        }),
                        odd: i(function (e, t) {
                            for (var n = 1; n < t; n += 2) e.push(n);
                            return e
                        }),
                        lt: i(function (e, t, n) {
                            for (var i = n < 0 ? n + t : n; 0 <= --i;) e.push(i);
                            return e
                        }),
                        gt: i(function (e, t, n) {
                            for (var i = n < 0 ? n + t : n; ++i < t;) e.push(i);
                            return e
                        })
                    }
                }).pseudos.nth = T.pseudos.eq, {
                    radio: !0,
                    checkbox: !0,
                    file: !0,
                    password: !0,
                    image: !0
                }) T.pseudos[s] = function (t) {
                return function (e) {
                    return "input" === e.nodeName.toLowerCase() && e.type === t
                }
            }(s);
            for (s in {
                    submit: !0,
                    reset: !0
                }) T.pseudos[s] = function (n) {
                return function (e) {
                    var t = e.nodeName.toLowerCase();
                    return ("input" === t || "button" === t) && e.type === n
                }
            }(s);
            return o.prototype = T.filters = T.pseudos, T.setFilters = new o, C = x.tokenize = function (e, t) {
                var n, i, r, o, s, a, l, c = M[e + " "];
                if (c) return t ? 0 : c.slice(0);
                for (s = e, a = [], l = T.preFilter; s;) {
                    for (o in (!n || (i = ie.exec(s))) && (i && (s = s.slice(i[0].length) || s), a.push(r = [])), n = !1, (i = re.exec(s)) && (n = i.shift(), r.push({
                            value: n,
                            type: i[0].replace(ne, " ")
                        }), s = s.slice(n.length)), T.filter) !(i = le[o].exec(s)) || l[o] && !(i = l[o](i)) || (n = i.shift(), r.push({
                        value: n,
                        type: o,
                        matches: i
                    }), s = s.slice(n.length));
                    if (!n) break
                }
                return t ? s.length : s ? x.error(e) : M(e, a).slice(0)
            }, g = x.compile = function (e, t) {
                var n, m, g, y, b, i, r = [],
                    o = [],
                    s = H[e + " "];
                if (!s) {
                    for (t || (t = C(e)), n = t.length; n--;)(s = f(t[n]))[R] ? r.push(s) : o.push(s);
                    (s = H(e, (m = o, y = 0 < (g = r).length, b = 0 < m.length, i = function (e, t, n, i, r) {
                        var o, s, a, l = 0,
                            c = "0",
                            u = e && [],
                            p = [],
                            d = k,
                            f = e || b && T.find.TAG("*", r),
                            h = q += null == d ? 1 : Math.random() || .1,
                            v = f.length;
                        for (r && (k = t === A || t || r); c !== v && null != (o = f[c]); c++) {
                            if (b && o) {
                                for (s = 0, t || o.ownerDocument === A || (_(o), n = !D); a = m[s++];)
                                    if (a(o, t || A, n)) {
                                        i.push(o);
                                        break
                                    } r && (q = h)
                            }
                            y && ((o = !a && o) && l--, e && u.push(o))
                        }
                        if (l += c, y && c !== l) {
                            for (s = 0; a = g[s++];) a(u, p, t, n);
                            if (e) {
                                if (0 < l)
                                    for (; c--;) u[c] || p[c] || (p[c] = U.call(i));
                                p = w(p)
                            }
                            V.apply(i, p), r && !e && 0 < p.length && 1 < l + g.length && x.uniqueSort(i)
                        }
                        return r && (q = h, k = d), u
                    }, y ? l(i) : i))).selector = e
                }
                return s
            }, b = x.select = function (e, t, n, i) {
                var r, o, s, a, l, c = "function" == typeof e && e,
                    u = !i && C(e = c.selector || e);
                if (n = n || [], 1 === u.length) {
                    if (2 < (o = u[0] = u[0].slice(0)).length && "ID" === (s = o[0]).type && m.getById && 9 === t.nodeType && D && T.relative[o[1].type]) {
                        if (!(t = (T.find.ID(s.matches[0].replace(ve, me), t) || [])[0])) return n;
                        c && (t = t.parentNode), e = e.slice(o.shift().value.length)
                    }
                    for (r = le.needsContext.test(e) ? 0 : o.length; r-- && (s = o[r], !T.relative[a = s.type]);)
                        if ((l = T.find[a]) && (i = l(s.matches[0].replace(ve, me), fe.test(o[0].type) && h(t.parentNode) || t))) {
                            if (o.splice(r, 1), !(e = i.length && v(o))) return V.apply(n, i), n;
                            break
                        }
                }
                return (c || g(e, u))(i, t, !D, n, !t || fe.test(e) && h(t.parentNode) || t), n
            }, m.sortStable = R.split("").sort(W).join("") === R, m.detectDuplicates = !!S, _(), m.sortDetached = r(function (e) {
                return 1 & e.compareDocumentPosition(A.createElement("div"))
            }), r(function (e) {
                return e.innerHTML = "<a href='#'></a>", "#" === e.firstChild.getAttribute("href")
            }) || t("type|href|height|width", function (e, t, n) {
                return n ? void 0 : e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2)
            }), m.attributes && r(function (e) {
                return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value")
            }) || t("value", function (e, t, n) {
                return n || "input" !== e.nodeName.toLowerCase() ? void 0 : e.defaultValue
            }), r(function (e) {
                return null == e.getAttribute("disabled")
            }) || t(Y, function (e, t, n) {
                var i;
                return n ? void 0 : !0 === e[t] ? t.toLowerCase() : (i = e.getAttributeNode(t)) && i.specified ? i.value : null
            }), x
        }(C);
        K.find = ee, K.expr = ee.selectors, K.expr[":"] = K.expr.pseudos, K.uniqueSort = K.unique = ee.uniqueSort, K.text = ee.getText, K.isXMLDoc = ee.isXML, K.contains = ee.contains;
        var te = function (e, t, n) {
                for (var i = [], r = void 0 !== n;
                    (e = e[t]) && 9 !== e.nodeType;)
                    if (1 === e.nodeType) {
                        if (r && K(e).is(n)) break;
                        i.push(e)
                    } return i
            },
            ne = function (e, t) {
                for (var n = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e);
                return n
            },
            ie = K.expr.match.needsContext,
            re = /^<([\w-]+)\s*\/?>(?:<\/\1>|)$/,
            oe = /^.[^:#\[\.,]*$/;
        K.filter = function (e, t, n) {
            var i = t[0];
            return n && (e = ":not(" + e + ")"), 1 === t.length && 1 === i.nodeType ? K.find.matchesSelector(i, e) ? [i] : [] : K.find.matches(e, K.grep(t, function (e) {
                return 1 === e.nodeType
            }))
        }, K.fn.extend({
            find: function (e) {
                var t, n = this.length,
                    i = [],
                    r = this;
                if ("string" != typeof e) return this.pushStack(K(e).filter(function () {
                    for (t = 0; t < n; t++)
                        if (K.contains(r[t], this)) return !0
                }));
                for (t = 0; t < n; t++) K.find(e, r[t], i);
                return (i = this.pushStack(1 < n ? K.unique(i) : i)).selector = this.selector ? this.selector + " " + e : e, i
            },
            filter: function (e) {
                return this.pushStack(t(this, e || [], !1))
            },
            not: function (e) {
                return this.pushStack(t(this, e || [], !0))
            },
            is: function (e) {
                return !!t(this, "string" == typeof e && ie.test(e) ? K(e) : e || [], !1).length
            }
        });
        var se, ae = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/;
        (K.fn.init = function (e, t, n) {
            var i, r;
            if (!e) return this;
            if (n = n || se, "string" == typeof e) {
                if (!(i = "<" === e[0] && ">" === e[e.length - 1] && 3 <= e.length ? [null, e, null] : ae.exec(e)) || !i[1] && t) return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);
                if (i[1]) {
                    if (t = t instanceof K ? t[0] : t, K.merge(this, K.parseHTML(i[1], t && t.nodeType ? t.ownerDocument || t : z, !0)), re.test(i[1]) && K.isPlainObject(t))
                        for (i in t) K.isFunction(this[i]) ? this[i](t[i]) : this.attr(i, t[i]);
                    return this
                }
                return (r = z.getElementById(i[2])) && r.parentNode && (this.length = 1, this[0] = r), this.context = z, this.selector = e, this
            }
            return e.nodeType ? (this.context = this[0] = e, this.length = 1, this) : K.isFunction(e) ? void 0 !== n.ready ? n.ready(e) : e(K) : (void 0 !== e.selector && (this.selector = e.selector, this.context = e.context), K.makeArray(e, this))
        }).prototype = K.fn, se = K(z);
        var le = /^(?:parents|prev(?:Until|All))/,
            ce = {
                children: !0,
                contents: !0,
                next: !0,
                prev: !0
            };
        K.fn.extend({
            has: function (e) {
                var t = K(e, this),
                    n = t.length;
                return this.filter(function () {
                    for (var e = 0; e < n; e++)
                        if (K.contains(this, t[e])) return !0
                })
            },
            closest: function (e, t) {
                for (var n, i = 0, r = this.length, o = [], s = ie.test(e) || "string" != typeof e ? K(e, t || this.context) : 0; i < r; i++)
                    for (n = this[i]; n && n !== t; n = n.parentNode)
                        if (n.nodeType < 11 && (s ? -1 < s.index(n) : 1 === n.nodeType && K.find.matchesSelector(n, e))) {
                            o.push(n);
                            break
                        } return this.pushStack(1 < o.length ? K.uniqueSort(o) : o)
            },
            index: function (e) {
                return e ? "string" == typeof e ? V.call(K(e), this[0]) : V.call(this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
            },
            add: function (e, t) {
                return this.pushStack(K.uniqueSort(K.merge(this.get(), K(e, t))))
            },
            addBack: function (e) {
                return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
            }
        }), K.each({
            parent: function (e) {
                var t = e.parentNode;
                return t && 11 !== t.nodeType ? t : null
            },
            parents: function (e) {
                return te(e, "parentNode")
            },
            parentsUntil: function (e, t, n) {
                return te(e, "parentNode", n)
            },
            next: function (e) {
                return n(e, "nextSibling")
            },
            prev: function (e) {
                return n(e, "previousSibling")
            },
            nextAll: function (e) {
                return te(e, "nextSibling")
            },
            prevAll: function (e) {
                return te(e, "previousSibling")
            },
            nextUntil: function (e, t, n) {
                return te(e, "nextSibling", n)
            },
            prevUntil: function (e, t, n) {
                return te(e, "previousSibling", n)
            },
            siblings: function (e) {
                return ne((e.parentNode || {}).firstChild, e)
            },
            children: function (e) {
                return ne(e.firstChild)
            },
            contents: function (e) {
                return e.contentDocument || K.merge([], e.childNodes)
            }
        }, function (i, r) {
            K.fn[i] = function (e, t) {
                var n = K.map(this, r, e);
                return "Until" !== i.slice(-5) && (t = e), t && "string" == typeof t && (n = K.filter(t, n)), 1 < this.length && (ce[i] || K.uniqueSort(n), le.test(i) && n.reverse()), this.pushStack(n)
            }
        });
        var ue, pe = /\S+/g;
        K.Callbacks = function (i) {
            var e, n;
            i = "string" == typeof i ? (e = i, n = {}, K.each(e.match(pe) || [], function (e, t) {
                n[t] = !0
            }), n) : K.extend({}, i);
            var r, t, o, s, a = [],
                l = [],
                c = -1,
                u = function () {
                    for (s = i.once, o = r = !0; l.length; c = -1)
                        for (t = l.shift(); ++c < a.length;) !1 === a[c].apply(t[0], t[1]) && i.stopOnFalse && (c = a.length, t = !1);
                    i.memory || (t = !1), r = !1, s && (a = t ? [] : "")
                },
                p = {
                    add: function () {
                        return a && (t && !r && (c = a.length - 1, l.push(t)), function n(e) {
                            K.each(e, function (e, t) {
                                K.isFunction(t) ? i.unique && p.has(t) || a.push(t) : t && t.length && "string" !== K.type(t) && n(t)
                            })
                        }(arguments), t && !r && u()), this
                    },
                    remove: function () {
                        return K.each(arguments, function (e, t) {
                            for (var n; - 1 < (n = K.inArray(t, a, n));) a.splice(n, 1), n <= c && c--
                        }), this
                    },
                    has: function (e) {
                        return e ? -1 < K.inArray(e, a) : 0 < a.length
                    },
                    empty: function () {
                        return a && (a = []), this
                    },
                    disable: function () {
                        return s = l = [], a = t = "", this
                    },
                    disabled: function () {
                        return !a
                    },
                    lock: function () {
                        return s = l = [], t || (a = t = ""), this
                    },
                    locked: function () {
                        return !!s
                    },
                    fireWith: function (e, t) {
                        return s || (t = [e, (t = t || []).slice ? t.slice() : t], l.push(t), r || u()), this
                    },
                    fire: function () {
                        return p.fireWith(this, arguments), this
                    },
                    fired: function () {
                        return !!o
                    }
                };
            return p
        }, K.extend({
            Deferred: function (e) {
                var o = [
                        ["resolve", "done", K.Callbacks("once memory"), "resolved"],
                        ["reject", "fail", K.Callbacks("once memory"), "rejected"],
                        ["notify", "progress", K.Callbacks("memory")]
                    ],
                    r = "pending",
                    s = {
                        state: function () {
                            return r
                        },
                        always: function () {
                            return a.done(arguments).fail(arguments), this
                        },
                        then: function () {
                            var r = arguments;
                            return K.Deferred(function (i) {
                                K.each(o, function (e, t) {
                                    var n = K.isFunction(r[e]) && r[e];
                                    a[t[1]](function () {
                                        var e = n && n.apply(this, arguments);
                                        e && K.isFunction(e.promise) ? e.promise().progress(i.notify).done(i.resolve).fail(i.reject) : i[t[0] + "With"](this === s ? i.promise() : this, n ? [e] : arguments)
                                    })
                                }), r = null
                            }).promise()
                        },
                        promise: function (e) {
                            return null != e ? K.extend(e, s) : s
                        }
                    },
                    a = {};
                return s.pipe = s.then, K.each(o, function (e, t) {
                    var n = t[2],
                        i = t[3];
                    s[t[1]] = n.add, i && n.add(function () {
                        r = i
                    }, o[1 ^ e][2].disable, o[2][2].lock), a[t[0]] = function () {
                        return a[t[0] + "With"](this === a ? s : this, arguments), this
                    }, a[t[0] + "With"] = n.fireWith
                }), s.promise(a), e && e.call(a, a), a
            },
            when: function (e) {
                var r, t, n, i = 0,
                    o = B.call(arguments),
                    s = o.length,
                    a = 1 !== s || e && K.isFunction(e.promise) ? s : 0,
                    l = 1 === a ? e : K.Deferred(),
                    c = function (t, n, i) {
                        return function (e) {
                            n[t] = this, i[t] = 1 < arguments.length ? B.call(arguments) : e, i === r ? l.notifyWith(n, i) : --a || l.resolveWith(n, i)
                        }
                    };
                if (1 < s)
                    for (r = new Array(s), t = new Array(s), n = new Array(s); i < s; i++) o[i] && K.isFunction(o[i].promise) ? o[i].promise().progress(c(i, t, r)).done(c(i, n, o)).fail(l.reject) : --a;
                return a || l.resolveWith(n, o), l.promise()
            }
        }), K.fn.ready = function (e) {
            return K.ready.promise().done(e), this
        }, K.extend({
            isReady: !1,
            readyWait: 1,
            holdReady: function (e) {
                e ? K.readyWait++ : K.ready(!0)
            },
            ready: function (e) {
                (!0 === e ? --K.readyWait : K.isReady) || ((K.isReady = !0) !== e && 0 < --K.readyWait || (ue.resolveWith(z, [K]), K.fn.triggerHandler && (K(z).triggerHandler("ready"), K(z).off("ready"))))
            }
        }), K.ready.promise = function (e) {
            return ue || (ue = K.Deferred(), "complete" === z.readyState || "loading" !== z.readyState && !z.documentElement.doScroll ? C.setTimeout(K.ready) : (z.addEventListener("DOMContentLoaded", i), C.addEventListener("load", i))), ue.promise(e)
        }, K.ready.promise();
        var de = function (e, t, n, i, r, o, s) {
                var a = 0,
                    l = e.length,
                    c = null == n;
                if ("object" === K.type(n))
                    for (a in r = !0, n) de(e, t, a, n[a], !0, o, s);
                else if (void 0 !== i && (r = !0, K.isFunction(i) || (s = !0), c && (s ? (t.call(e, i), t = null) : (c = t, t = function (e, t, n) {
                        return c.call(K(e), n)
                    })), t))
                    for (; a < l; a++) t(e[a], n, s ? i : i.call(e[a], a, t(e[a], n)));
                return r ? e : c ? t.call(e) : l ? t(e[0], n) : o
            },
            fe = function (e) {
                return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType
            };
        r.uid = 1, r.prototype = {
            register: function (e, t) {
                var n = t || {};
                return e.nodeType ? e[this.expando] = n : Object.defineProperty(e, this.expando, {
                    value: n,
                    writable: !0,
                    configurable: !0
                }), e[this.expando]
            },
            cache: function (e) {
                if (!fe(e)) return {};
                var t = e[this.expando];
                return t || (t = {}, fe(e) && (e.nodeType ? e[this.expando] = t : Object.defineProperty(e, this.expando, {
                    value: t,
                    configurable: !0
                }))), t
            },
            set: function (e, t, n) {
                var i, r = this.cache(e);
                if ("string" == typeof t) r[t] = n;
                else
                    for (i in t) r[i] = t[i];
                return r
            },
            get: function (e, t) {
                return void 0 === t ? this.cache(e) : e[this.expando] && e[this.expando][t]
            },
            access: function (e, t, n) {
                var i;
                return void 0 === t || t && "string" == typeof t && void 0 === n ? void 0 !== (i = this.get(e, t)) ? i : this.get(e, K.camelCase(t)) : (this.set(e, t, n), void 0 !== n ? n : t)
            },
            remove: function (e, t) {
                var n, i, r, o = e[this.expando];
                if (void 0 !== o) {
                    if (void 0 === t) this.register(e);
                    else {
                        K.isArray(t) ? i = t.concat(t.map(K.camelCase)) : (r = K.camelCase(t), t in o ? i = [t, r] : i = (i = r) in o ? [i] : i.match(pe) || []), n = i.length;
                        for (; n--;) delete o[i[n]]
                    }(void 0 === t || K.isEmptyObject(o)) && (e.nodeType ? e[this.expando] = void 0 : delete e[this.expando])
                }
            },
            hasData: function (e) {
                var t = e[this.expando];
                return void 0 !== t && !K.isEmptyObject(t)
            }
        };
        var he = new r,
            ve = new r,
            me = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
            ge = /[A-Z]/g;
        K.extend({
            hasData: function (e) {
                return ve.hasData(e) || he.hasData(e)
            },
            data: function (e, t, n) {
                return ve.access(e, t, n)
            },
            removeData: function (e, t) {
                ve.remove(e, t)
            },
            _data: function (e, t, n) {
                return he.access(e, t, n)
            },
            _removeData: function (e, t) {
                he.remove(e, t)
            }
        }), K.fn.extend({
            data: function (i, e) {
                var t, n, r, o = this[0],
                    s = o && o.attributes;
                if (void 0 === i) {
                    if (this.length && (r = ve.get(o), 1 === o.nodeType && !he.get(o, "hasDataAttrs"))) {
                        for (t = s.length; t--;) s[t] && (0 === (n = s[t].name).indexOf("data-") && (n = K.camelCase(n.slice(5)), l(o, n, r[n])));
                        he.set(o, "hasDataAttrs", !0)
                    }
                    return r
                }
                return "object" == typeof i ? this.each(function () {
                    ve.set(this, i)
                }) : de(this, function (t) {
                    var e, n;
                    if (o && void 0 === t) {
                        if (void 0 !== (e = ve.get(o, i) || ve.get(o, i.replace(ge, "-$&").toLowerCase()))) return e;
                        if (n = K.camelCase(i), void 0 !== (e = ve.get(o, n))) return e;
                        if (void 0 !== (e = l(o, n, void 0))) return e
                    } else n = K.camelCase(i), this.each(function () {
                        var e = ve.get(this, n);
                        ve.set(this, n, t), -1 < i.indexOf("-") && void 0 !== e && ve.set(this, i, t)
                    })
                }, null, e, 1 < arguments.length, null, !0)
            },
            removeData: function (e) {
                return this.each(function () {
                    ve.remove(this, e)
                })
            }
        }), K.extend({
            queue: function (e, t, n) {
                var i;
                return e ? (t = (t || "fx") + "queue", i = he.get(e, t), n && (!i || K.isArray(n) ? i = he.access(e, t, K.makeArray(n)) : i.push(n)), i || []) : void 0
            },
            dequeue: function (e, t) {
                t = t || "fx";
                var n = K.queue(e, t),
                    i = n.length,
                    r = n.shift(),
                    o = K._queueHooks(e, t);
                "inprogress" === r && (r = n.shift(), i--), r && ("fx" === t && n.unshift("inprogress"), delete o.stop, r.call(e, function () {
                    K.dequeue(e, t)
                }, o)), !i && o && o.empty.fire()
            },
            _queueHooks: function (e, t) {
                var n = t + "queueHooks";
                return he.get(e, n) || he.access(e, n, {
                    empty: K.Callbacks("once memory").add(function () {
                        he.remove(e, [t + "queue", n])
                    })
                })
            }
        }), K.fn.extend({
            queue: function (t, n) {
                var e = 2;
                return "string" != typeof t && (n = t, t = "fx", e--), arguments.length < e ? K.queue(this[0], t) : void 0 === n ? this : this.each(function () {
                    var e = K.queue(this, t, n);
                    K._queueHooks(this, t), "fx" === t && "inprogress" !== e[0] && K.dequeue(this, t)
                })
            },
            dequeue: function (e) {
                return this.each(function () {
                    K.dequeue(this, e)
                })
            },
            clearQueue: function (e) {
                return this.queue(e || "fx", [])
            },
            promise: function (e, t) {
                var n, i = 1,
                    r = K.Deferred(),
                    o = this,
                    s = this.length,
                    a = function () {
                        --i || r.resolveWith(o, [o])
                    };
                for ("string" != typeof e && (t = e, e = void 0), e = e || "fx"; s--;)(n = he.get(o[s], e + "queueHooks")) && n.empty && (i++, n.empty.add(a));
                return a(), r.promise(t)
            }
        });
        var ye = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
            be = new RegExp("^(?:([+-])=|)(" + ye + ")([a-z%]*)$", "i"),
            xe = ["Top", "Right", "Bottom", "Left"],
            we = function (e, t) {
                return e = t || e, "none" === K.css(e, "display") || !K.contains(e.ownerDocument, e)
            },
            Te = /^(?:checkbox|radio)$/i,
            Ce = /<([\w:-]+)/,
            ke = /^$|\/(?:java|ecma)script/i,
            Ee = {
                option: [1, "<select multiple='multiple'>", "</select>"],
                thead: [1, "<table>", "</table>"],
                col: [2, "<table><colgroup>", "</colgroup></table>"],
                tr: [2, "<table><tbody>", "</tbody></table>"],
                td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
                _default: [0, "", ""]
            };
        Ee.optgroup = Ee.option, Ee.tbody = Ee.tfoot = Ee.colgroup = Ee.caption = Ee.thead, Ee.th = Ee.td;
        var Se, _e, Ae = /<|&#?\w+;/;
        Se = z.createDocumentFragment().appendChild(z.createElement("div")), (_e = z.createElement("input")).setAttribute("type", "radio"), _e.setAttribute("checked", "checked"), _e.setAttribute("name", "t"), Se.appendChild(_e), G.checkClone = Se.cloneNode(!0).cloneNode(!0).lastChild.checked, Se.innerHTML = "<textarea>x</textarea>", G.noCloneChecked = !!Se.cloneNode(!0).lastChild.defaultValue;
        var $e = /^key/,
            De = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
            Ne = /^([^.]*)(?:\.(.+)|)/;
        K.event = {
            global: {},
            add: function (t, e, n, i, r) {
                var o, s, a, l, c, u, p, d, f, h, v, m = he.get(t);
                if (m)
                    for (n.handler && (n = (o = n).handler, r = o.selector), n.guid || (n.guid = K.guid++), (l = m.events) || (l = m.events = {}), (s = m.handle) || (s = m.handle = function (e) {
                            return void 0 !== K && K.event.triggered !== e.type ? K.event.dispatch.apply(t, arguments) : void 0
                        }), c = (e = (e || "").match(pe) || [""]).length; c--;) f = v = (a = Ne.exec(e[c]) || [])[1], h = (a[2] || "").split(".").sort(), f && (p = K.event.special[f] || {}, f = (r ? p.delegateType : p.bindType) || f, p = K.event.special[f] || {}, u = K.extend({
                        type: f,
                        origType: v,
                        data: i,
                        handler: n,
                        guid: n.guid,
                        selector: r,
                        needsContext: r && K.expr.match.needsContext.test(r),
                        namespace: h.join(".")
                    }, o), (d = l[f]) || ((d = l[f] = []).delegateCount = 0, p.setup && !1 !== p.setup.call(t, i, h, s) || t.addEventListener && t.addEventListener(f, s)), p.add && (p.add.call(t, u), u.handler.guid || (u.handler.guid = n.guid)), r ? d.splice(d.delegateCount++, 0, u) : d.push(u), K.event.global[f] = !0)
            },
            remove: function (e, t, n, i, r) {
                var o, s, a, l, c, u, p, d, f, h, v, m = he.hasData(e) && he.get(e);
                if (m && (l = m.events)) {
                    for (c = (t = (t || "").match(pe) || [""]).length; c--;)
                        if (f = v = (a = Ne.exec(t[c]) || [])[1], h = (a[2] || "").split(".").sort(), f) {
                            for (p = K.event.special[f] || {}, d = l[f = (i ? p.delegateType : p.bindType) || f] || [], a = a[2] && new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"), s = o = d.length; o--;) u = d[o], !r && v !== u.origType || n && n.guid !== u.guid || a && !a.test(u.namespace) || i && i !== u.selector && ("**" !== i || !u.selector) || (d.splice(o, 1), u.selector && d.delegateCount--, p.remove && p.remove.call(e, u));
                            s && !d.length && (p.teardown && !1 !== p.teardown.call(e, h, m.handle) || K.removeEvent(e, f, m.handle), delete l[f])
                        } else
                            for (f in l) K.event.remove(e, f + t[c], n, i, !0);
                    K.isEmptyObject(l) && he.remove(e, "handle events")
                }
            },
            dispatch: function (e) {
                e = K.event.fix(e);
                var t, n, i, r, o, s = [],
                    a = B.call(arguments),
                    l = (he.get(this, "events") || {})[e.type] || [],
                    c = K.event.special[e.type] || {};
                if ((a[0] = e).delegateTarget = this, !c.preDispatch || !1 !== c.preDispatch.call(this, e)) {
                    for (s = K.event.handlers.call(this, e, l), t = 0;
                        (r = s[t++]) && !e.isPropagationStopped();)
                        for (e.currentTarget = r.elem, n = 0;
                            (o = r.handlers[n++]) && !e.isImmediatePropagationStopped();)(!e.rnamespace || e.rnamespace.test(o.namespace)) && (e.handleObj = o, e.data = o.data, void 0 !== (i = ((K.event.special[o.origType] || {}).handle || o.handler).apply(r.elem, a)) && !1 === (e.result = i) && (e.preventDefault(), e.stopPropagation()));
                    return c.postDispatch && c.postDispatch.call(this, e), e.result
                }
            },
            handlers: function (e, t) {
                var n, i, r, o, s = [],
                    a = t.delegateCount,
                    l = e.target;
                if (a && l.nodeType && ("click" !== e.type || isNaN(e.button) || e.button < 1))
                    for (; l !== this; l = l.parentNode || this)
                        if (1 === l.nodeType && (!0 !== l.disabled || "click" !== e.type)) {
                            for (i = [], n = 0; n < a; n++) void 0 === i[r = (o = t[n]).selector + " "] && (i[r] = o.needsContext ? -1 < K(r, this).index(l) : K.find(r, this, null, [l]).length), i[r] && i.push(o);
                            i.length && s.push({
                                elem: l,
                                handlers: i
                            })
                        } return a < t.length && s.push({
                    elem: this,
                    handlers: t.slice(a)
                }), s
            },
            props: "altKey bubbles cancelable ctrlKey currentTarget detail eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
            fixHooks: {},
            keyHooks: {
                props: "char charCode key keyCode".split(" "),
                filter: function (e, t) {
                    return null == e.which && (e.which = null != t.charCode ? t.charCode : t.keyCode), e
                }
            },
            mouseHooks: {
                props: "button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
                filter: function (e, t) {
                    var n, i, r, o = t.button;
                    return null == e.pageX && null != t.clientX && (i = (n = e.target.ownerDocument || z).documentElement, r = n.body, e.pageX = t.clientX + (i && i.scrollLeft || r && r.scrollLeft || 0) - (i && i.clientLeft || r && r.clientLeft || 0), e.pageY = t.clientY + (i && i.scrollTop || r && r.scrollTop || 0) - (i && i.clientTop || r && r.clientTop || 0)), e.which || void 0 === o || (e.which = 1 & o ? 1 : 2 & o ? 3 : 4 & o ? 2 : 0), e
                }
            },
            fix: function (e) {
                if (e[K.expando]) return e;
                var t, n, i, r = e.type,
                    o = e,
                    s = this.fixHooks[r];
                for (s || (this.fixHooks[r] = s = De.test(r) ? this.mouseHooks : $e.test(r) ? this.keyHooks : {}), i = s.props ? this.props.concat(s.props) : this.props, e = new K.Event(o), t = i.length; t--;) e[n = i[t]] = o[n];
                return e.target || (e.target = z), 3 === e.target.nodeType && (e.target = e.target.parentNode), s.filter ? s.filter(e, o) : e
            },
            special: {
                load: {
                    noBubble: !0
                },
                focus: {
                    trigger: function () {
                        return this !== s() && this.focus ? (this.focus(), !1) : void 0
                    },
                    delegateType: "focusin"
                },
                blur: {
                    trigger: function () {
                        return this === s() && this.blur ? (this.blur(), !1) : void 0
                    },
                    delegateType: "focusout"
                },
                click: {
                    trigger: function () {
                        return "checkbox" === this.type && this.click && K.nodeName(this, "input") ? (this.click(), !1) : void 0
                    },
                    _default: function (e) {
                        return K.nodeName(e.target, "a")
                    }
                },
                beforeunload: {
                    postDispatch: function (e) {
                        void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result)
                    }
                }
            }
        }, K.removeEvent = function (e, t, n) {
            e.removeEventListener && e.removeEventListener(t, n)
        }, K.Event = function (e, t) {
            return this instanceof K.Event ? (e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && !1 === e.returnValue ? o : u) : this.type = e, t && K.extend(this, t), this.timeStamp = e && e.timeStamp || K.now(), void(this[K.expando] = !0)) : new K.Event(e, t)
        }, K.Event.prototype = {
            constructor: K.Event,
            isDefaultPrevented: u,
            isPropagationStopped: u,
            isImmediatePropagationStopped: u,
            preventDefault: function () {
                var e = this.originalEvent;
                this.isDefaultPrevented = o, e && e.preventDefault()
            },
            stopPropagation: function () {
                var e = this.originalEvent;
                this.isPropagationStopped = o, e && e.stopPropagation()
            },
            stopImmediatePropagation: function () {
                var e = this.originalEvent;
                this.isImmediatePropagationStopped = o, e && e.stopImmediatePropagation(), this.stopPropagation()
            }
        }, K.each({
            mouseenter: "mouseover",
            mouseleave: "mouseout",
            pointerenter: "pointerover",
            pointerleave: "pointerout"
        }, function (e, r) {
            K.event.special[e] = {
                delegateType: r,
                bindType: r,
                handle: function (e) {
                    var t, n = e.relatedTarget,
                        i = e.handleObj;
                    return (!n || n !== this && !K.contains(this, n)) && (e.type = i.origType, t = i.handler.apply(this, arguments), e.type = r), t
                }
            }
        }), K.fn.extend({
            on: function (e, t, n, i) {
                return p(this, e, t, n, i)
            },
            one: function (e, t, n, i) {
                return p(this, e, t, n, i, 1)
            },
            off: function (e, t, n) {
                var i, r;
                if (e && e.preventDefault && e.handleObj) return i = e.handleObj, K(e.delegateTarget).off(i.namespace ? i.origType + "." + i.namespace : i.origType, i.selector, i.handler), this;
                if ("object" == typeof e) {
                    for (r in e) this.off(r, t, e[r]);
                    return this
                }
                return (!1 === t || "function" == typeof t) && (n = t, t = void 0), !1 === n && (n = u), this.each(function () {
                    K.event.remove(this, e, n, t)
                })
            }
        });
        var je = /<script|<style|<link/i,
            Ie = /checked\s*(?:[^=]|=\s*.checked.)/i,
            Oe = /^true\/(.*)/,
            Re = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
        K.extend({
            htmlPrefilter: function (e) {
                return e.replace(/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:-]+)[^>]*)\/>/gi, "<$1></$2>")
            },
            clone: function (e, t, n) {
                var i, r, o, s, a, l, c, u = e.cloneNode(!0),
                    p = K.contains(e.ownerDocument, e);
                if (!(G.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || K.isXMLDoc(e)))
                    for (s = v(u), i = 0, r = (o = v(e)).length; i < r; i++) a = o[i], l = s[i], void 0, "input" === (c = l.nodeName.toLowerCase()) && Te.test(a.type) ? l.checked = a.checked : ("input" === c || "textarea" === c) && (l.defaultValue = a.defaultValue);
                if (t)
                    if (n)
                        for (o = o || v(e), s = s || v(u), i = 0, r = o.length; i < r; i++) f(o[i], s[i]);
                    else f(e, u);
                return 0 < (s = v(u, "script")).length && m(s, !p && v(e, "script")), u
            },
            cleanData: function (e) {
                for (var t, n, i, r = K.event.special, o = 0; void 0 !== (n = e[o]); o++)
                    if (fe(n)) {
                        if (t = n[he.expando]) {
                            if (t.events)
                                for (i in t.events) r[i] ? K.event.remove(n, i) : K.removeEvent(n, i, t.handle);
                            n[he.expando] = void 0
                        }
                        n[ve.expando] && (n[ve.expando] = void 0)
                    }
            }
        }), K.fn.extend({
            domManip: x,
            detach: function (e) {
                return h(this, e, !0)
            },
            remove: function (e) {
                return h(this, e)
            },
            text: function (e) {
                return de(this, function (e) {
                    return void 0 === e ? K.text(this) : this.empty().each(function () {
                        (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) && (this.textContent = e)
                    })
                }, null, e, arguments.length)
            },
            append: function () {
                return x(this, arguments, function (e) {
                    1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || d(this, e).appendChild(e)
                })
            },
            prepend: function () {
                return x(this, arguments, function (e) {
                    if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                        var t = d(this, e);
                        t.insertBefore(e, t.firstChild)
                    }
                })
            },
            before: function () {
                return x(this, arguments, function (e) {
                    this.parentNode && this.parentNode.insertBefore(e, this)
                })
            },
            after: function () {
                return x(this, arguments, function (e) {
                    this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
                })
            },
            empty: function () {
                for (var e, t = 0; null != (e = this[t]); t++) 1 === e.nodeType && (K.cleanData(v(e, !1)), e.textContent = "");
                return this
            },
            clone: function (e, t) {
                return e = null != e && e, t = null == t ? e : t, this.map(function () {
                    return K.clone(this, e, t)
                })
            },
            html: function (e) {
                return de(this, function (e) {
                    var t = this[0] || {},
                        n = 0,
                        i = this.length;
                    if (void 0 === e && 1 === t.nodeType) return t.innerHTML;
                    if ("string" == typeof e && !je.test(e) && !Ee[(Ce.exec(e) || ["", ""])[1].toLowerCase()]) {
                        e = K.htmlPrefilter(e);
                        try {
                            for (; n < i; n++) 1 === (t = this[n] || {}).nodeType && (K.cleanData(v(t, !1)), t.innerHTML = e);
                            t = 0
                        } catch (e) {}
                    }
                    t && this.empty().append(e)
                }, null, e, arguments.length)
            },
            replaceWith: function () {
                var n = [];
                return x(this, arguments, function (e) {
                    var t = this.parentNode;
                    K.inArray(this, n) < 0 && (K.cleanData(v(this)), t && t.replaceChild(e, this))
                }, n)
            }
        }), K.each({
            appendTo: "append",
            prependTo: "prepend",
            insertBefore: "before",
            insertAfter: "after",
            replaceAll: "replaceWith"
        }, function (e, s) {
            K.fn[e] = function (e) {
                for (var t, n = [], i = K(e), r = i.length - 1, o = 0; o <= r; o++) t = o === r ? this : this.clone(!0), K(i[o])[s](t), X.apply(n, t.get());
                return this.pushStack(n)
            }
        });
        var Le, qe = {
                HTML: "block",
                BODY: "block"
            },
            Pe = /^margin/,
            Fe = new RegExp("^(" + ye + ")(?!px)[a-z%]+$", "i"),
            Me = function (e) {
                var t = e.ownerDocument.defaultView;
                return t.opener || (t = C), t.getComputedStyle(e)
            },
            He = function (e, t, n, i) {
                var r, o, s = {};
                for (o in t) s[o] = e.style[o], e.style[o] = t[o];
                for (o in r = n.apply(e, i || []), t) e.style[o] = s[o];
                return r
            },
            We = z.documentElement;
        ! function () {
            function e() {
                s.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%", s.innerHTML = "", We.appendChild(o);
                var e = C.getComputedStyle(s);
                t = "1%" !== e.top, r = "2px" === e.marginLeft, n = "4px" === e.width, s.style.marginRight = "50%", i = "4px" === e.marginRight, We.removeChild(o)
            }
            var t, n, i, r, o = z.createElement("div"),
                s = z.createElement("div");
            s.style && (s.style.backgroundClip = "content-box", s.cloneNode(!0).style.backgroundClip = "", G.clearCloneStyle = "content-box" === s.style.backgroundClip, o.style.cssText = "border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute", o.appendChild(s), K.extend(G, {
                pixelPosition: function () {
                    return e(), t
                },
                boxSizingReliable: function () {
                    return null == n && e(), n
                },
                pixelMarginRight: function () {
                    return null == n && e(), i
                },
                reliableMarginLeft: function () {
                    return null == n && e(), r
                },
                reliableMarginRight: function () {
                    var e, t = s.appendChild(z.createElement("div"));
                    return t.style.cssText = s.style.cssText = "-webkit-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0", t.style.marginRight = t.style.width = "0", s.style.width = "1px", We.appendChild(o), e = !parseFloat(C.getComputedStyle(t).marginRight), We.removeChild(o), s.removeChild(t), e
                }
            }))
        }();
        var ze = /^(none|table(?!-c[ea]).+)/,
            Be = {
                position: "absolute",
                visibility: "hidden",
                display: "block"
            },
            Ue = {
                letterSpacing: "0",
                fontWeight: "400"
            },
            Xe = ["Webkit", "O", "Moz", "ms"],
            Ve = z.createElement("div").style;
        K.extend({
            cssHooks: {
                opacity: {
                    get: function (e, t) {
                        if (t) {
                            var n = k(e, "opacity");
                            return "" === n ? "1" : n
                        }
                    }
                }
            },
            cssNumber: {
                animationIterationCount: !0,
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
                float: "cssFloat"
            },
            style: function (e, t, n, i) {
                if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                    var r, o, s, a = K.camelCase(t),
                        l = e.style;
                    return t = K.cssProps[a] || (K.cssProps[a] = S(a) || a), s = K.cssHooks[t] || K.cssHooks[a], void 0 === n ? s && "get" in s && void 0 !== (r = s.get(e, !1, i)) ? r : l[t] : ("string" === (o = typeof n) && (r = be.exec(n)) && r[1] && (n = c(e, t, r), o = "number"), void(null != n && n == n && ("number" === o && (n += r && r[3] || (K.cssNumber[a] ? "" : "px")), G.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (l[t] = "inherit"), s && "set" in s && void 0 === (n = s.set(e, n, i)) || (l[t] = n))))
                }
            },
            css: function (e, t, n, i) {
                var r, o, s, a = K.camelCase(t);
                return t = K.cssProps[a] || (K.cssProps[a] = S(a) || a), (s = K.cssHooks[t] || K.cssHooks[a]) && "get" in s && (r = s.get(e, !0, n)), void 0 === r && (r = k(e, t, i)), "normal" === r && t in Ue && (r = Ue[t]), "" === n || n ? (o = parseFloat(r), !0 === n || isFinite(o) ? o || 0 : r) : r
            }
        }), K.each(["height", "width"], function (e, s) {
            K.cssHooks[s] = {
                get: function (e, t, n) {
                    return t ? ze.test(K.css(e, "display")) && 0 === e.offsetWidth ? He(e, Be, function () {
                        return $(e, s, n)
                    }) : $(e, s, n) : void 0
                },
                set: function (e, t, n) {
                    var i, r = n && Me(e),
                        o = n && A(e, s, n, "border-box" === K.css(e, "boxSizing", !1, r), r);
                    return o && (i = be.exec(t)) && "px" !== (i[3] || "px") && (e.style[s] = t, t = K.css(e, s)), _(0, t, o)
                }
            }
        }), K.cssHooks.marginLeft = E(G.reliableMarginLeft, function (e, t) {
            return t ? (parseFloat(k(e, "marginLeft")) || e.getBoundingClientRect().left - He(e, {
                marginLeft: 0
            }, function () {
                return e.getBoundingClientRect().left
            })) + "px" : void 0
        }), K.cssHooks.marginRight = E(G.reliableMarginRight, function (e, t) {
            return t ? He(e, {
                display: "inline-block"
            }, k, [e, "marginRight"]) : void 0
        }), K.each({
            margin: "",
            padding: "",
            border: "Width"
        }, function (r, o) {
            K.cssHooks[r + o] = {
                expand: function (e) {
                    for (var t = 0, n = {}, i = "string" == typeof e ? e.split(" ") : [e]; t < 4; t++) n[r + xe[t] + o] = i[t] || i[t - 2] || i[0];
                    return n
                }
            }, Pe.test(r) || (K.cssHooks[r + o].set = _)
        }), K.fn.extend({
            css: function (e, t) {
                return de(this, function (e, t, n) {
                    var i, r, o = {},
                        s = 0;
                    if (K.isArray(t)) {
                        for (i = Me(e), r = t.length; s < r; s++) o[t[s]] = K.css(e, t[s], !1, i);
                        return o
                    }
                    return void 0 !== n ? K.style(e, t, n) : K.css(e, t)
                }, e, t, 1 < arguments.length)
            },
            show: function () {
                return D(this, !0)
            },
            hide: function () {
                return D(this)
            },
            toggle: function (e) {
                return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function () {
                    we(this) ? K(this).show() : K(this).hide()
                })
            }
        }), ((K.Tween = N).prototype = {
            constructor: N,
            init: function (e, t, n, i, r, o) {
                this.elem = e, this.prop = n, this.easing = r || K.easing._default, this.options = t, this.start = this.now = this.cur(), this.end = i, this.unit = o || (K.cssNumber[n] ? "" : "px")
            },
            cur: function () {
                var e = N.propHooks[this.prop];
                return e && e.get ? e.get(this) : N.propHooks._default.get(this)
            },
            run: function (e) {
                var t, n = N.propHooks[this.prop];
                return this.options.duration ? this.pos = t = K.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : N.propHooks._default.set(this), this
            }
        }).init.prototype = N.prototype, (N.propHooks = {
            _default: {
                get: function (e) {
                    var t;
                    return 1 !== e.elem.nodeType || null != e.elem[e.prop] && null == e.elem.style[e.prop] ? e.elem[e.prop] : (t = K.css(e.elem, e.prop, "")) && "auto" !== t ? t : 0
                },
                set: function (e) {
                    K.fx.step[e.prop] ? K.fx.step[e.prop](e) : 1 !== e.elem.nodeType || null == e.elem.style[K.cssProps[e.prop]] && !K.cssHooks[e.prop] ? e.elem[e.prop] = e.now : K.style(e.elem, e.prop, e.now + e.unit)
                }
            }
        }).scrollTop = N.propHooks.scrollLeft = {
            set: function (e) {
                e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
            }
        }, K.easing = {
            linear: function (e) {
                return e
            },
            swing: function (e) {
                return .5 - Math.cos(e * Math.PI) / 2
            },
            _default: "swing"
        }, K.fx = N.prototype.init, K.fx.step = {};
        var Je, Qe, Ye, Ge, Ke, Ze = /^(?:toggle|show|hide)$/,
            et = /queueHooks$/;
        K.Animation = K.extend(R, {
            tweeners: {
                "*": [function (e, t) {
                    var n = this.createTween(e, t);
                    return c(n.elem, e, be.exec(t), n), n
                }]
            },
            tweener: function (e, t) {
                K.isFunction(e) ? (t = e, e = ["*"]) : e = e.match(pe);
                for (var n, i = 0, r = e.length; i < r; i++) n = e[i], R.tweeners[n] = R.tweeners[n] || [], R.tweeners[n].unshift(t)
            },
            prefilters: [function (t, e, n) {
                var i, r, o, s, a, l, c, u = this,
                    p = {},
                    d = t.style,
                    f = t.nodeType && we(t),
                    h = he.get(t, "fxshow");
                for (i in n.queue || (null == (a = K._queueHooks(t, "fx")).unqueued && (a.unqueued = 0, l = a.empty.fire, a.empty.fire = function () {
                        a.unqueued || l()
                    }), a.unqueued++, u.always(function () {
                        u.always(function () {
                            a.unqueued--, K.queue(t, "fx").length || a.empty.fire()
                        })
                    })), 1 === t.nodeType && ("height" in e || "width" in e) && (n.overflow = [d.overflow, d.overflowX, d.overflowY], "inline" === ("none" === (c = K.css(t, "display")) ? he.get(t, "olddisplay") || T(t.nodeName) : c) && "none" === K.css(t, "float") && (d.display = "inline-block")), n.overflow && (d.overflow = "hidden", u.always(function () {
                        d.overflow = n.overflow[0], d.overflowX = n.overflow[1], d.overflowY = n.overflow[2]
                    })), e)
                    if (r = e[i], Ze.exec(r)) {
                        if (delete e[i], o = o || "toggle" === r, r === (f ? "hide" : "show")) {
                            if ("show" !== r || !h || void 0 === h[i]) continue;
                            f = !0
                        }
                        p[i] = h && h[i] || K.style(t, i)
                    } else c = void 0;
                if (K.isEmptyObject(p)) "inline" === ("none" === c ? T(t.nodeName) : c) && (d.display = c);
                else
                    for (i in h ? "hidden" in h && (f = h.hidden) : h = he.access(t, "fxshow", {}), o && (h.hidden = !f), f ? K(t).show() : u.done(function () {
                            K(t).hide()
                        }), u.done(function () {
                            var e;
                            for (e in he.remove(t, "fxshow"), p) K.style(t, e, p[e])
                        }), p) s = O(f ? h[i] : 0, i, u), i in h || (h[i] = s.start, f && (s.end = s.start, s.start = "width" === i || "height" === i ? 1 : 0))
            }],
            prefilter: function (e, t) {
                t ? R.prefilters.unshift(e) : R.prefilters.push(e)
            }
        }), K.speed = function (e, t, n) {
            var i = e && "object" == typeof e ? K.extend({}, e) : {
                complete: n || !n && t || K.isFunction(e) && e,
                duration: e,
                easing: n && t || t && !K.isFunction(t) && t
            };
            return i.duration = K.fx.off ? 0 : "number" == typeof i.duration ? i.duration : i.duration in K.fx.speeds ? K.fx.speeds[i.duration] : K.fx.speeds._default, (null == i.queue || !0 === i.queue) && (i.queue = "fx"), i.old = i.complete, i.complete = function () {
                K.isFunction(i.old) && i.old.call(this), i.queue && K.dequeue(this, i.queue)
            }, i
        }, K.fn.extend({
            fadeTo: function (e, t, n, i) {
                return this.filter(we).css("opacity", 0).show().end().animate({
                    opacity: t
                }, e, n, i)
            },
            animate: function (t, e, n, i) {
                var r = K.isEmptyObject(t),
                    o = K.speed(e, n, i),
                    s = function () {
                        var e = R(this, K.extend({}, t), o);
                        (r || he.get(this, "finish")) && e.stop(!0)
                    };
                return s.finish = s, r || !1 === o.queue ? this.each(s) : this.queue(o.queue, s)
            },
            stop: function (r, e, o) {
                var s = function (e) {
                    var t = e.stop;
                    delete e.stop, t(o)
                };
                return "string" != typeof r && (o = e, e = r, r = void 0), e && !1 !== r && this.queue(r || "fx", []), this.each(function () {
                    var e = !0,
                        t = null != r && r + "queueHooks",
                        n = K.timers,
                        i = he.get(this);
                    if (t) i[t] && i[t].stop && s(i[t]);
                    else
                        for (t in i) i[t] && i[t].stop && et.test(t) && s(i[t]);
                    for (t = n.length; t--;) n[t].elem !== this || null != r && n[t].queue !== r || (n[t].anim.stop(o), e = !1, n.splice(t, 1));
                    (e || !o) && K.dequeue(this, r)
                })
            },
            finish: function (s) {
                return !1 !== s && (s = s || "fx"), this.each(function () {
                    var e, t = he.get(this),
                        n = t[s + "queue"],
                        i = t[s + "queueHooks"],
                        r = K.timers,
                        o = n ? n.length : 0;
                    for (t.finish = !0, K.queue(this, s, []), i && i.stop && i.stop.call(this, !0), e = r.length; e--;) r[e].elem === this && r[e].queue === s && (r[e].anim.stop(!0), r.splice(e, 1));
                    for (e = 0; e < o; e++) n[e] && n[e].finish && n[e].finish.call(this);
                    delete t.finish
                })
            }
        }), K.each(["toggle", "show", "hide"], function (e, i) {
            var r = K.fn[i];
            K.fn[i] = function (e, t, n) {
                return null == e || "boolean" == typeof e ? r.apply(this, arguments) : this.animate(I(i, !0), e, t, n)
            }
        }), K.each({
            slideDown: I("show"),
            slideUp: I("hide"),
            slideToggle: I("toggle"),
            fadeIn: {
                opacity: "show"
            },
            fadeOut: {
                opacity: "hide"
            },
            fadeToggle: {
                opacity: "toggle"
            }
        }, function (e, i) {
            K.fn[e] = function (e, t, n) {
                return this.animate(i, e, t, n)
            }
        }), K.timers = [], K.fx.tick = function () {
            var e, t = 0,
                n = K.timers;
            for (Je = K.now(); t < n.length; t++)(e = n[t])() || n[t] !== e || n.splice(t--, 1);
            n.length || K.fx.stop(), Je = void 0
        }, K.fx.timer = function (e) {
            K.timers.push(e), e() ? K.fx.start() : K.timers.pop()
        }, K.fx.interval = 13, K.fx.start = function () {
            Qe || (Qe = C.setInterval(K.fx.tick, K.fx.interval))
        }, K.fx.stop = function () {
            C.clearInterval(Qe), Qe = null
        }, K.fx.speeds = {
            slow: 600,
            fast: 200,
            _default: 400
        }, K.fn.delay = function (i, e) {
            return i = K.fx && K.fx.speeds[i] || i, e = e || "fx", this.queue(e, function (e, t) {
                var n = C.setTimeout(e, i);
                t.stop = function () {
                    C.clearTimeout(n)
                }
            })
        }, Ye = z.createElement("input"), Ge = z.createElement("select"), Ke = Ge.appendChild(z.createElement("option")), Ye.type = "checkbox", G.checkOn = "" !== Ye.value, G.optSelected = Ke.selected, Ge.disabled = !0, G.optDisabled = !Ke.disabled, (Ye = z.createElement("input")).value = "t", Ye.type = "radio", G.radioValue = "t" === Ye.value;
        var tt, nt = K.expr.attrHandle;
        K.fn.extend({
            attr: function (e, t) {
                return de(this, K.attr, e, t, 1 < arguments.length)
            },
            removeAttr: function (e) {
                return this.each(function () {
                    K.removeAttr(this, e)
                })
            }
        }), K.extend({
            attr: function (e, t, n) {
                var i, r, o = e.nodeType;
                if (3 !== o && 8 !== o && 2 !== o) return void 0 === e.getAttribute ? K.prop(e, t, n) : (1 === o && K.isXMLDoc(e) || (t = t.toLowerCase(), r = K.attrHooks[t] || (K.expr.match.bool.test(t) ? tt : void 0)), void 0 !== n ? null === n ? void K.removeAttr(e, t) : r && "set" in r && void 0 !== (i = r.set(e, n, t)) ? i : (e.setAttribute(t, n + ""), n) : r && "get" in r && null !== (i = r.get(e, t)) ? i : null == (i = K.find.attr(e, t)) ? void 0 : i)
            },
            attrHooks: {
                type: {
                    set: function (e, t) {
                        if (!G.radioValue && "radio" === t && K.nodeName(e, "input")) {
                            var n = e.value;
                            return e.setAttribute("type", t), n && (e.value = n), t
                        }
                    }
                }
            },
            removeAttr: function (e, t) {
                var n, i, r = 0,
                    o = t && t.match(pe);
                if (o && 1 === e.nodeType)
                    for (; n = o[r++];) i = K.propFix[n] || n, K.expr.match.bool.test(n) && (e[i] = !1), e.removeAttribute(n)
            }
        }), tt = {
            set: function (e, t, n) {
                return !1 === t ? K.removeAttr(e, n) : e.setAttribute(n, n), n
            }
        }, K.each(K.expr.match.bool.source.match(/\w+/g), function (e, t) {
            var o = nt[t] || K.find.attr;
            nt[t] = function (e, t, n) {
                var i, r;
                return n || (r = nt[t], nt[t] = i, i = null != o(e, t, n) ? t.toLowerCase() : null, nt[t] = r), i
            }
        });
        var it = /^(?:input|select|textarea|button)$/i,
            rt = /^(?:a|area)$/i;
        K.fn.extend({
            prop: function (e, t) {
                return de(this, K.prop, e, t, 1 < arguments.length)
            },
            removeProp: function (e) {
                return this.each(function () {
                    delete this[K.propFix[e] || e]
                })
            }
        }), K.extend({
            prop: function (e, t, n) {
                var i, r, o = e.nodeType;
                if (3 !== o && 8 !== o && 2 !== o) return 1 === o && K.isXMLDoc(e) || (t = K.propFix[t] || t, r = K.propHooks[t]), void 0 !== n ? r && "set" in r && void 0 !== (i = r.set(e, n, t)) ? i : e[t] = n : r && "get" in r && null !== (i = r.get(e, t)) ? i : e[t]
            },
            propHooks: {
                tabIndex: {
                    get: function (e) {
                        var t = K.find.attr(e, "tabindex");
                        return t ? parseInt(t, 10) : it.test(e.nodeName) || rt.test(e.nodeName) && e.href ? 0 : -1
                    }
                }
            },
            propFix: {
                for: "htmlFor",
                class: "className"
            }
        }), G.optSelected || (K.propHooks.selected = {
            get: function (e) {
                var t = e.parentNode;
                return t && t.parentNode && t.parentNode.selectedIndex, null
            }
        }), K.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function () {
            K.propFix[this.toLowerCase()] = this
        });
        var ot = /[\t\r\n\f]/g;
        K.fn.extend({
            addClass: function (t) {
                var e, n, i, r, o, s, a, l = 0;
                if (K.isFunction(t)) return this.each(function (e) {
                    K(this).addClass(t.call(this, e, L(this)))
                });
                if ("string" == typeof t && t)
                    for (e = t.match(pe) || []; n = this[l++];)
                        if (r = L(n), i = 1 === n.nodeType && (" " + r + " ").replace(ot, " ")) {
                            for (s = 0; o = e[s++];) i.indexOf(" " + o + " ") < 0 && (i += o + " ");
                            r !== (a = K.trim(i)) && n.setAttribute("class", a)
                        } return this
            },
            removeClass: function (t) {
                var e, n, i, r, o, s, a, l = 0;
                if (K.isFunction(t)) return this.each(function (e) {
                    K(this).removeClass(t.call(this, e, L(this)))
                });
                if (!arguments.length) return this.attr("class", "");
                if ("string" == typeof t && t)
                    for (e = t.match(pe) || []; n = this[l++];)
                        if (r = L(n), i = 1 === n.nodeType && (" " + r + " ").replace(ot, " ")) {
                            for (s = 0; o = e[s++];)
                                for (; - 1 < i.indexOf(" " + o + " ");) i = i.replace(" " + o + " ", " ");
                            r !== (a = K.trim(i)) && n.setAttribute("class", a)
                        } return this
            },
            toggleClass: function (r, t) {
                var o = typeof r;
                return "boolean" == typeof t && "string" === o ? t ? this.addClass(r) : this.removeClass(r) : K.isFunction(r) ? this.each(function (e) {
                    K(this).toggleClass(r.call(this, e, L(this), t), t)
                }) : this.each(function () {
                    var e, t, n, i;
                    if ("string" === o)
                        for (t = 0, n = K(this), i = r.match(pe) || []; e = i[t++];) n.hasClass(e) ? n.removeClass(e) : n.addClass(e);
                    else(void 0 === r || "boolean" === o) && ((e = L(this)) && he.set(this, "__className__", e), this.setAttribute && this.setAttribute("class", e || !1 === r ? "" : he.get(this, "__className__") || ""))
                })
            },
            hasClass: function (e) {
                var t, n, i = 0;
                for (t = " " + e + " "; n = this[i++];)
                    if (1 === n.nodeType && -1 < (" " + L(n) + " ").replace(ot, " ").indexOf(t)) return !0;
                return !1
            }
        }), K.fn.extend({
            val: function (n) {
                var i, e, r, t = this[0];
                return arguments.length ? (r = K.isFunction(n), this.each(function (e) {
                    var t;
                    1 === this.nodeType && (null == (t = r ? n.call(this, e, K(this).val()) : n) ? t = "" : "number" == typeof t ? t += "" : K.isArray(t) && (t = K.map(t, function (e) {
                        return null == e ? "" : e + ""
                    })), (i = K.valHooks[this.type] || K.valHooks[this.nodeName.toLowerCase()]) && "set" in i && void 0 !== i.set(this, t, "value") || (this.value = t))
                })) : t ? (i = K.valHooks[t.type] || K.valHooks[t.nodeName.toLowerCase()]) && "get" in i && void 0 !== (e = i.get(t, "value")) ? e : "string" == typeof (e = t.value) ? e.replace(/\r/g, "") : null == e ? "" : e : void 0
            }
        }), K.extend({
            valHooks: {
                option: {
                    get: function (e) {
                        return K.trim(e.value)
                    }
                },
                select: {
                    get: function (e) {
                        for (var t, n, i = e.options, r = e.selectedIndex, o = "select-one" === e.type || r < 0, s = o ? null : [], a = o ? r + 1 : i.length, l = r < 0 ? a : o ? r : 0; l < a; l++)
                            if (((n = i[l]).selected || l === r) && (G.optDisabled ? !n.disabled : null === n.getAttribute("disabled")) && (!n.parentNode.disabled || !K.nodeName(n.parentNode, "optgroup"))) {
                                if (t = K(n).val(), o) return t;
                                s.push(t)
                            } return s
                    },
                    set: function (e, t) {
                        for (var n, i, r = e.options, o = K.makeArray(t), s = r.length; s--;)((i = r[s]).selected = -1 < K.inArray(K.valHooks.option.get(i), o)) && (n = !0);
                        return n || (e.selectedIndex = -1), o
                    }
                }
            }
        }), K.each(["radio", "checkbox"], function () {
            K.valHooks[this] = {
                set: function (e, t) {
                    return K.isArray(t) ? e.checked = -1 < K.inArray(K(e).val(), t) : void 0
                }
            }, G.checkOn || (K.valHooks[this].get = function (e) {
                return null === e.getAttribute("value") ? "on" : e.value
            })
        });
        var st = /^(?:focusinfocus|focusoutblur)$/;
        K.extend(K.event, {
            trigger: function (e, t, n, i) {
                var r, o, s, a, l, c, u, p = [n || z],
                    d = Y.call(e, "type") ? e.type : e,
                    f = Y.call(e, "namespace") ? e.namespace.split(".") : [];
                if (o = s = n = n || z, 3 !== n.nodeType && 8 !== n.nodeType && !st.test(d + K.event.triggered) && (-1 < d.indexOf(".") && (d = (f = d.split(".")).shift(), f.sort()), l = d.indexOf(":") < 0 && "on" + d, (e = e[K.expando] ? e : new K.Event(d, "object" == typeof e && e)).isTrigger = i ? 2 : 3, e.namespace = f.join("."), e.rnamespace = e.namespace ? new RegExp("(^|\\.)" + f.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, e.result = void 0, e.target || (e.target = n), t = null == t ? [e] : K.makeArray(t, [e]), u = K.event.special[d] || {}, i || !u.trigger || !1 !== u.trigger.apply(n, t))) {
                    if (!i && !u.noBubble && !K.isWindow(n)) {
                        for (a = u.delegateType || d, st.test(a + d) || (o = o.parentNode); o; o = o.parentNode) p.push(o), s = o;
                        s === (n.ownerDocument || z) && p.push(s.defaultView || s.parentWindow || C)
                    }
                    for (r = 0;
                        (o = p[r++]) && !e.isPropagationStopped();) e.type = 1 < r ? a : u.bindType || d, (c = (he.get(o, "events") || {})[e.type] && he.get(o, "handle")) && c.apply(o, t), (c = l && o[l]) && c.apply && fe(o) && (e.result = c.apply(o, t), !1 === e.result && e.preventDefault());
                    return e.type = d, i || e.isDefaultPrevented() || u._default && !1 !== u._default.apply(p.pop(), t) || !fe(n) || l && K.isFunction(n[d]) && !K.isWindow(n) && ((s = n[l]) && (n[l] = null), n[K.event.triggered = d](), K.event.triggered = void 0, s && (n[l] = s)), e.result
                }
            },
            simulate: function (e, t, n) {
                var i = K.extend(new K.Event, n, {
                    type: e,
                    isSimulated: !0
                });
                K.event.trigger(i, null, t), i.isDefaultPrevented() && n.preventDefault()
            }
        }), K.fn.extend({
            trigger: function (e, t) {
                return this.each(function () {
                    K.event.trigger(e, t, this)
                })
            },
            triggerHandler: function (e, t) {
                var n = this[0];
                return n ? K.event.trigger(e, t, n, !0) : void 0
            }
        }), K.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function (e, n) {
            K.fn[n] = function (e, t) {
                return 0 < arguments.length ? this.on(n, null, e, t) : this.trigger(n)
            }
        }), K.fn.extend({
            hover: function (e, t) {
                return this.mouseenter(e).mouseleave(t || e)
            }
        }), G.focusin = "onfocusin" in C, G.focusin || K.each({
            focus: "focusin",
            blur: "focusout"
        }, function (n, i) {
            var r = function (e) {
                K.event.simulate(i, e.target, K.event.fix(e))
            };
            K.event.special[i] = {
                setup: function () {
                    var e = this.ownerDocument || this,
                        t = he.access(e, i);
                    t || e.addEventListener(n, r, !0), he.access(e, i, (t || 0) + 1)
                },
                teardown: function () {
                    var e = this.ownerDocument || this,
                        t = he.access(e, i) - 1;
                    t ? he.access(e, i, t) : (e.removeEventListener(n, r, !0), he.remove(e, i))
                }
            }
        });
        var at = C.location,
            lt = K.now(),
            ct = /\?/;
        K.parseJSON = function (e) {
            return JSON.parse(e + "")
        }, K.parseXML = function (e) {
            var t;
            if (!e || "string" != typeof e) return null;
            try {
                t = (new C.DOMParser).parseFromString(e, "text/xml")
            } catch (e) {
                t = void 0
            }
            return (!t || t.getElementsByTagName("parsererror").length) && K.error("Invalid XML: " + e), t
        };
        var ut = /([?&])_=[^&]*/,
            pt = /^(.*?):[ \t]*([^\r\n]*)$/gm,
            dt = /^(?:GET|HEAD)$/,
            ft = {},
            ht = {},
            vt = "*/".concat("*"),
            mt = z.createElement("a");
        mt.href = at.href, K.extend({
            active: 0,
            lastModified: {},
            etag: {},
            ajaxSettings: {
                url: at.href,
                type: "GET",
                isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(at.protocol),
                global: !0,
                processData: !0,
                async: !0,
                contentType: "application/x-www-form-urlencoded; charset=UTF-8",
                accepts: {
                    "*": vt,
                    text: "text/plain",
                    html: "text/html",
                    xml: "application/xml, text/xml",
                    json: "application/json, text/javascript"
                },
                contents: {
                    xml: /\bxml\b/,
                    html: /\bhtml/,
                    json: /\bjson\b/
                },
                responseFields: {
                    xml: "responseXML",
                    text: "responseText",
                    json: "responseJSON"
                },
                converters: {
                    "* text": String,
                    "text html": !0,
                    "text json": K.parseJSON,
                    "text xml": K.parseXML
                },
                flatOptions: {
                    url: !0,
                    context: !0
                }
            },
            ajaxSetup: function (e, t) {
                return t ? F(F(e, K.ajaxSettings), t) : F(K.ajaxSettings, e)
            },
            ajaxPrefilter: q(ft),
            ajaxTransport: q(ht),
            ajax: function (e, t) {
                function n(e, t, n, i) {
                    var r, o, s, a, l, c = t;
                    2 !== w && (w = 2, f && C.clearTimeout(f), u = void 0, d = i || "", T.readyState = 0 < e ? 4 : 0, r = 200 <= e && e < 300 || 304 === e, n && (a = function (e, t, n) {
                        for (var i, r, o, s, a = e.contents, l = e.dataTypes;
                            "*" === l[0];) l.shift(), void 0 === i && (i = e.mimeType || t.getResponseHeader("Content-Type"));
                        if (i)
                            for (r in a)
                                if (a[r] && a[r].test(i)) {
                                    l.unshift(r);
                                    break
                                } if (l[0] in n) o = l[0];
                        else {
                            for (r in n) {
                                if (!l[0] || e.converters[r + " " + l[0]]) {
                                    o = r;
                                    break
                                }
                                s || (s = r)
                            }
                            o = o || s
                        }
                        return o ? (o !== l[0] && l.unshift(o), n[o]) : void 0
                    }(v, T, n)), a = function (e, t, n, i) {
                        var r, o, s, a, l, c = {},
                            u = e.dataTypes.slice();
                        if (u[1])
                            for (s in e.converters) c[s.toLowerCase()] = e.converters[s];
                        for (o = u.shift(); o;)
                            if (e.responseFields[o] && (n[e.responseFields[o]] = t), !l && i && e.dataFilter && (t = e.dataFilter(t, e.dataType)), l = o, o = u.shift())
                                if ("*" === o) o = l;
                                else if ("*" !== l && l !== o) {
                            if (!(s = c[l + " " + o] || c["* " + o]))
                                for (r in c)
                                    if ((a = r.split(" "))[1] === o && (s = c[l + " " + a[0]] || c["* " + a[0]])) {
                                        !0 === s ? s = c[r] : !0 !== c[r] && (o = a[0], u.unshift(a[1]));
                                        break
                                    } if (!0 !== s)
                                if (s && e.throws) t = s(t);
                                else try {
                                    t = s(t)
                                } catch (e) {
                                    return {
                                        state: "parsererror",
                                        error: s ? e : "No conversion from " + l + " to " + o
                                    }
                                }
                        }
                        return {
                            state: "success",
                            data: t
                        }
                    }(v, a, T, r), r ? (v.ifModified && ((l = T.getResponseHeader("Last-Modified")) && (K.lastModified[p] = l), (l = T.getResponseHeader("etag")) && (K.etag[p] = l)), 204 === e || "HEAD" === v.type ? c = "nocontent" : 304 === e ? c = "notmodified" : (c = a.state, o = a.data, r = !(s = a.error))) : (s = c, (e || !c) && (c = "error", e < 0 && (e = 0))), T.status = e, T.statusText = (t || c) + "", r ? y.resolveWith(m, [o, c, T]) : y.rejectWith(m, [T, c, s]), T.statusCode(x), x = void 0, h && g.trigger(r ? "ajaxSuccess" : "ajaxError", [T, v, r ? o : s]), b.fireWith(m, [T, c]), h && (g.trigger("ajaxComplete", [T, v]), --K.active || K.event.trigger("ajaxStop")))
                }
                "object" == typeof e && (t = e, e = void 0), t = t || {};
                var u, p, d, i, f, r, h, o, v = K.ajaxSetup({}, t),
                    m = v.context || v,
                    g = v.context && (m.nodeType || m.jquery) ? K(m) : K.event,
                    y = K.Deferred(),
                    b = K.Callbacks("once memory"),
                    x = v.statusCode || {},
                    s = {},
                    a = {},
                    w = 0,
                    l = "canceled",
                    T = {
                        readyState: 0,
                        getResponseHeader: function (e) {
                            var t;
                            if (2 === w) {
                                if (!i)
                                    for (i = {}; t = pt.exec(d);) i[t[1].toLowerCase()] = t[2];
                                t = i[e.toLowerCase()]
                            }
                            return null == t ? null : t
                        },
                        getAllResponseHeaders: function () {
                            return 2 === w ? d : null
                        },
                        setRequestHeader: function (e, t) {
                            var n = e.toLowerCase();
                            return w || (e = a[n] = a[n] || e, s[e] = t), this
                        },
                        overrideMimeType: function (e) {
                            return w || (v.mimeType = e), this
                        },
                        statusCode: function (e) {
                            var t;
                            if (e)
                                if (w < 2)
                                    for (t in e) x[t] = [x[t], e[t]];
                                else T.always(e[T.status]);
                            return this
                        },
                        abort: function (e) {
                            var t = e || l;
                            return u && u.abort(t), n(0, t), this
                        }
                    };
                if (y.promise(T).complete = b.add, T.success = T.done, T.error = T.fail, v.url = ((e || v.url || at.href) + "").replace(/#.*$/, "").replace(/^\/\//, at.protocol + "//"), v.type = t.method || t.type || v.method || v.type, v.dataTypes = K.trim(v.dataType || "*").toLowerCase().match(pe) || [""], null == v.crossDomain) {
                    r = z.createElement("a");
                    try {
                        r.href = v.url, r.href = r.href, v.crossDomain = mt.protocol + "//" + mt.host != r.protocol + "//" + r.host
                    } catch (e) {
                        v.crossDomain = !0
                    }
                }
                if (v.data && v.processData && "string" != typeof v.data && (v.data = K.param(v.data, v.traditional)), P(ft, v, t, T), 2 === w) return T;
                for (o in (h = K.event && v.global) && 0 == K.active++ && K.event.trigger("ajaxStart"), v.type = v.type.toUpperCase(), v.hasContent = !dt.test(v.type), p = v.url, v.hasContent || (v.data && (p = v.url += (ct.test(p) ? "&" : "?") + v.data, delete v.data), !1 === v.cache && (v.url = ut.test(p) ? p.replace(ut, "$1_=" + lt++) : p + (ct.test(p) ? "&" : "?") + "_=" + lt++)), v.ifModified && (K.lastModified[p] && T.setRequestHeader("If-Modified-Since", K.lastModified[p]), K.etag[p] && T.setRequestHeader("If-None-Match", K.etag[p])), (v.data && v.hasContent && !1 !== v.contentType || t.contentType) && T.setRequestHeader("Content-Type", v.contentType), T.setRequestHeader("Accept", v.dataTypes[0] && v.accepts[v.dataTypes[0]] ? v.accepts[v.dataTypes[0]] + ("*" !== v.dataTypes[0] ? ", " + vt + "; q=0.01" : "") : v.accepts["*"]), v.headers) T.setRequestHeader(o, v.headers[o]);
                if (v.beforeSend && (!1 === v.beforeSend.call(m, T, v) || 2 === w)) return T.abort();
                for (o in l = "abort", {
                        success: 1,
                        error: 1,
                        complete: 1
                    }) T[o](v[o]);
                if (u = P(ht, v, t, T)) {
                    if (T.readyState = 1, h && g.trigger("ajaxSend", [T, v]), 2 === w) return T;
                    v.async && 0 < v.timeout && (f = C.setTimeout(function () {
                        T.abort("timeout")
                    }, v.timeout));
                    try {
                        w = 1, u.send(s, n)
                    } catch (e) {
                        if (!(w < 2)) throw e;
                        n(-1, e)
                    }
                } else n(-1, "No Transport");
                return T
            },
            getJSON: function (e, t, n) {
                return K.get(e, t, n, "json")
            },
            getScript: function (e, t) {
                return K.get(e, void 0, t, "script")
            }
        }), K.each(["get", "post"], function (e, r) {
            K[r] = function (e, t, n, i) {
                return K.isFunction(t) && (i = i || n, n = t, t = void 0), K.ajax(K.extend({
                    url: e,
                    type: r,
                    dataType: i,
                    data: t,
                    success: n
                }, K.isPlainObject(e) && e))
            }
        }), K._evalUrl = function (e) {
            return K.ajax({
                url: e,
                type: "GET",
                dataType: "script",
                async: !1,
                global: !1,
                throws: !0
            })
        }, K.fn.extend({
            wrapAll: function (t) {
                var e;
                return K.isFunction(t) ? this.each(function (e) {
                    K(this).wrapAll(t.call(this, e))
                }) : (this[0] && (e = K(t, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && e.insertBefore(this[0]), e.map(function () {
                    for (var e = this; e.firstElementChild;) e = e.firstElementChild;
                    return e
                }).append(this)), this)
            },
            wrapInner: function (n) {
                return K.isFunction(n) ? this.each(function (e) {
                    K(this).wrapInner(n.call(this, e))
                }) : this.each(function () {
                    var e = K(this),
                        t = e.contents();
                    t.length ? t.wrapAll(n) : e.append(n)
                })
            },
            wrap: function (t) {
                var n = K.isFunction(t);
                return this.each(function (e) {
                    K(this).wrapAll(n ? t.call(this, e) : t)
                })
            },
            unwrap: function () {
                return this.parent().each(function () {
                    K.nodeName(this, "body") || K(this).replaceWith(this.childNodes)
                }).end()
            }
        }), K.expr.filters.hidden = function (e) {
            return !K.expr.filters.visible(e)
        }, K.expr.filters.visible = function (e) {
            return 0 < e.offsetWidth || 0 < e.offsetHeight || 0 < e.getClientRects().length
        };
        var gt = /\[\]$/,
            yt = /^(?:submit|button|image|reset|file)$/i,
            bt = /^(?:input|select|textarea|keygen)/i;
        K.param = function (e, t) {
            var n, i = [],
                r = function (e, t) {
                    t = K.isFunction(t) ? t() : null == t ? "" : t, i[i.length] = encodeURIComponent(e) + "=" + encodeURIComponent(t)
                };
            if (void 0 === t && (t = K.ajaxSettings && K.ajaxSettings.traditional), K.isArray(e) || e.jquery && !K.isPlainObject(e)) K.each(e, function () {
                r(this.name, this.value)
            });
            else
                for (n in e) M(n, e[n], t, r);
            return i.join("&").replace(/%20/g, "+")
        }, K.fn.extend({
            serialize: function () {
                return K.param(this.serializeArray())
            },
            serializeArray: function () {
                return this.map(function () {
                    var e = K.prop(this, "elements");
                    return e ? K.makeArray(e) : this
                }).filter(function () {
                    var e = this.type;
                    return this.name && !K(this).is(":disabled") && bt.test(this.nodeName) && !yt.test(e) && (this.checked || !Te.test(e))
                }).map(function (e, t) {
                    var n = K(this).val();
                    return null == n ? null : K.isArray(n) ? K.map(n, function (e) {
                        return {
                            name: t.name,
                            value: e.replace(/\r?\n/g, "\r\n")
                        }
                    }) : {
                        name: t.name,
                        value: n.replace(/\r?\n/g, "\r\n")
                    }
                }).get()
            }
        }), K.ajaxSettings.xhr = function () {
            try {
                return new C.XMLHttpRequest
            } catch (e) {}
        };
        var xt = {
                0: 200,
                1223: 204
            },
            wt = K.ajaxSettings.xhr();
        G.cors = !!wt && "withCredentials" in wt, G.ajax = wt = !!wt, K.ajaxTransport(function (r) {
            var o, s;
            return G.cors || wt && !r.crossDomain ? {
                send: function (e, t) {
                    var n, i = r.xhr();
                    if (i.open(r.type, r.url, r.async, r.username, r.password), r.xhrFields)
                        for (n in r.xhrFields) i[n] = r.xhrFields[n];
                    for (n in r.mimeType && i.overrideMimeType && i.overrideMimeType(r.mimeType), r.crossDomain || e["X-Requested-With"] || (e["X-Requested-With"] = "XMLHttpRequest"), e) i.setRequestHeader(n, e[n]);
                    o = function (e) {
                        return function () {
                            o && (o = s = i.onload = i.onerror = i.onabort = i.onreadystatechange = null, "abort" === e ? i.abort() : "error" === e ? "number" != typeof i.status ? t(0, "error") : t(i.status, i.statusText) : t(xt[i.status] || i.status, i.statusText, "text" !== (i.responseType || "text") || "string" != typeof i.responseText ? {
                                binary: i.response
                            } : {
                                text: i.responseText
                            }, i.getAllResponseHeaders()))
                        }
                    }, i.onload = o(), s = i.onerror = o("error"), void 0 !== i.onabort ? i.onabort = s : i.onreadystatechange = function () {
                        4 === i.readyState && C.setTimeout(function () {
                            o && s()
                        })
                    }, o = o("abort");
                    try {
                        i.send(r.hasContent && r.data || null)
                    } catch (e) {
                        if (o) throw e
                    }
                },
                abort: function () {
                    o && o()
                }
            } : void 0
        }), K.ajaxSetup({
            accepts: {
                script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
            },
            contents: {
                script: /\b(?:java|ecma)script\b/
            },
            converters: {
                "text script": function (e) {
                    return K.globalEval(e), e
                }
            }
        }), K.ajaxPrefilter("script", function (e) {
            void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET")
        }), K.ajaxTransport("script", function (n) {
            var i, r;
            if (n.crossDomain) return {
                send: function (e, t) {
                    i = K("<script>").prop({
                        charset: n.scriptCharset,
                        src: n.url
                    }).on("load error", r = function (e) {
                        i.remove(), r = null, e && t("error" === e.type ? 404 : 200, e.type)
                    }), z.head.appendChild(i[0])
                },
                abort: function () {
                    r && r()
                }
            }
        });
        var Tt, Ct = [],
            kt = /(=)\?(?=&|$)|\?\?/;
        K.ajaxSetup({
            jsonp: "callback",
            jsonpCallback: function () {
                var e = Ct.pop() || K.expando + "_" + lt++;
                return this[e] = !0, e
            }
        }), K.ajaxPrefilter("json jsonp", function (e, t, n) {
            var i, r, o, s = !1 !== e.jsonp && (kt.test(e.url) ? "url" : "string" == typeof e.data && 0 === (e.contentType || "").indexOf("application/x-www-form-urlencoded") && kt.test(e.data) && "data");
            return s || "jsonp" === e.dataTypes[0] ? (i = e.jsonpCallback = K.isFunction(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback, s ? e[s] = e[s].replace(kt, "$1" + i) : !1 !== e.jsonp && (e.url += (ct.test(e.url) ? "&" : "?") + e.jsonp + "=" + i), e.converters["script json"] = function () {
                return o || K.error(i + " was not called"), o[0]
            }, e.dataTypes[0] = "json", r = C[i], C[i] = function () {
                o = arguments
            }, n.always(function () {
                void 0 === r ? K(C).removeProp(i) : C[i] = r, e[i] && (e.jsonpCallback = t.jsonpCallback, Ct.push(i)), o && K.isFunction(r) && r(o[0]), o = r = void 0
            }), "script") : void 0
        }), G.createHTMLDocument = ((Tt = z.implementation.createHTMLDocument("").body).innerHTML = "<form></form><form></form>", 2 === Tt.childNodes.length), K.parseHTML = function (e, t, n) {
            if (!e || "string" != typeof e) return null;
            "boolean" == typeof t && (n = t, t = !1), t = t || (G.createHTMLDocument ? z.implementation.createHTMLDocument("") : z);
            var i = re.exec(e),
                r = !n && [];
            return i ? [t.createElement(i[1])] : (i = g([e], t, r), r && r.length && K(r).remove(), K.merge([], i.childNodes))
        };
        var Et = K.fn.load;
        K.fn.load = function (e, t, n) {
            if ("string" != typeof e && Et) return Et.apply(this, arguments);
            var i, r, o, s = this,
                a = e.indexOf(" ");
            return -1 < a && (i = K.trim(e.slice(a)), e = e.slice(0, a)), K.isFunction(t) ? (n = t, t = void 0) : t && "object" == typeof t && (r = "POST"), 0 < s.length && K.ajax({
                url: e,
                type: r || "GET",
                dataType: "html",
                data: t
            }).done(function (e) {
                o = arguments, s.html(i ? K("<div>").append(K.parseHTML(e)).find(i) : e)
            }).always(n && function (e, t) {
                s.each(function () {
                    n.apply(s, o || [e.responseText, t, e])
                })
            }), this
        }, K.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (e, t) {
            K.fn[t] = function (e) {
                return this.on(t, e)
            }
        }), K.expr.filters.animated = function (t) {
            return K.grep(K.timers, function (e) {
                return t === e.elem
            }).length
        }, K.offset = {
            setOffset: function (e, t, n) {
                var i, r, o, s, a, l, c = K.css(e, "position"),
                    u = K(e),
                    p = {};
                "static" === c && (e.style.position = "relative"), a = u.offset(), o = K.css(e, "top"), l = K.css(e, "left"), ("absolute" === c || "fixed" === c) && -1 < (o + l).indexOf("auto") ? (s = (i = u.position()).top, r = i.left) : (s = parseFloat(o) || 0, r = parseFloat(l) || 0), K.isFunction(t) && (t = t.call(e, n, K.extend({}, a))), null != t.top && (p.top = t.top - a.top + s), null != t.left && (p.left = t.left - a.left + r), "using" in t ? t.using.call(e, p) : u.css(p)
            }
        }, K.fn.extend({
            offset: function (t) {
                if (arguments.length) return void 0 === t ? this : this.each(function (e) {
                    K.offset.setOffset(this, t, e)
                });
                var e, n, i = this[0],
                    r = {
                        top: 0,
                        left: 0
                    },
                    o = i && i.ownerDocument;
                return o ? (e = o.documentElement, K.contains(e, i) ? (r = i.getBoundingClientRect(), n = H(o), {
                    top: r.top + n.pageYOffset - e.clientTop,
                    left: r.left + n.pageXOffset - e.clientLeft
                }) : r) : void 0
            },
            position: function () {
                if (this[0]) {
                    var e, t, n = this[0],
                        i = {
                            top: 0,
                            left: 0
                        };
                    return "fixed" === K.css(n, "position") ? t = n.getBoundingClientRect() : (e = this.offsetParent(), t = this.offset(), K.nodeName(e[0], "html") || (i = e.offset()), i.top += K.css(e[0], "borderTopWidth", !0) - e.scrollTop(), i.left += K.css(e[0], "borderLeftWidth", !0) - e.scrollLeft()), {
                        top: t.top - i.top - K.css(n, "marginTop", !0),
                        left: t.left - i.left - K.css(n, "marginLeft", !0)
                    }
                }
            },
            offsetParent: function () {
                return this.map(function () {
                    for (var e = this.offsetParent; e && "static" === K.css(e, "position");) e = e.offsetParent;
                    return e || We
                })
            }
        }), K.each({
            scrollLeft: "pageXOffset",
            scrollTop: "pageYOffset"
        }, function (t, r) {
            var o = "pageYOffset" === r;
            K.fn[t] = function (e) {
                return de(this, function (e, t, n) {
                    var i = H(e);
                    return void 0 === n ? i ? i[r] : e[t] : void(i ? i.scrollTo(o ? i.pageXOffset : n, o ? n : i.pageYOffset) : e[t] = n)
                }, t, e, arguments.length)
            }
        }), K.each(["top", "left"], function (e, n) {
            K.cssHooks[n] = E(G.pixelPosition, function (e, t) {
                return t ? (t = k(e, n), Fe.test(t) ? K(e).position()[n] + "px" : t) : void 0
            })
        }), K.each({
            Height: "height",
            Width: "width"
        }, function (o, s) {
            K.each({
                padding: "inner" + o,
                content: s,
                "": "outer" + o
            }, function (i, e) {
                K.fn[e] = function (e, t) {
                    var n = arguments.length && (i || "boolean" != typeof e),
                        r = i || (!0 === e || !0 === t ? "margin" : "border");
                    return de(this, function (e, t, n) {
                        var i;
                        return K.isWindow(e) ? e.document.documentElement["client" + o] : 9 === e.nodeType ? (i = e.documentElement, Math.max(e.body["scroll" + o], i["scroll" + o], e.body["offset" + o], i["offset" + o], i["client" + o])) : void 0 === n ? K.css(e, t, r) : K.style(e, t, n, r)
                    }, s, n ? e : void 0, n, null)
                }
            })
        }), K.fn.extend({
            bind: function (e, t, n) {
                return this.on(e, null, t, n)
            },
            unbind: function (e, t) {
                return this.off(e, null, t)
            },
            delegate: function (e, t, n, i) {
                return this.on(t, e, n, i)
            },
            undelegate: function (e, t, n) {
                return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n)
            },
            size: function () {
                return this.length
            }
        }), K.fn.andSelf = K.fn.addBack, "function" == typeof define && define.amd && define("jquery", [], function () {
            return K
        });
        var St = C.jQuery,
            _t = C.$;
        return K.noConflict = function (e) {
            return C.$ === K && (C.$ = _t), e && C.jQuery === K && (C.jQuery = St), K
        }, e || (C.jQuery = C.$ = K), K
    }), "undefined" == typeof jQuery) throw new Error("Bootstrap's JavaScript requires jQuery");
! function (e) {
    "use strict";
    var t = jQuery.fn.jquery.split(" ")[0].split(".");
    if (t[0] < 2 && t[1] < 9 || 1 == t[0] && 9 == t[1] && t[2] < 1 || 2 < t[0]) throw new Error("Bootstrap's JavaScript requires jQuery version 1.9.1 or higher, but lower than version 3")
}(),
function (i) {
    "use strict";
    i.fn.emulateTransitionEnd = function (e) {
        var t = !1,
            n = this;
        i(this).one("bsTransitionEnd", function () {
            t = !0
        });
        return setTimeout(function () {
            t || i(n).trigger(i.support.transition.end)
        }, e), this
    }, i(function () {
        i.support.transition = function () {
            var e = document.createElement("bootstrap"),
                t = {
                    WebkitTransition: "webkitTransitionEnd",
                    MozTransition: "transitionend",
                    OTransition: "oTransitionEnd otransitionend",
                    transition: "transitionend"
                };
            for (var n in t)
                if (void 0 !== e.style[n]) return {
                    end: t[n]
                };
            return !1
        }(), i.support.transition && (i.event.special.bsTransitionEnd = {
            bindType: i.support.transition.end,
            delegateType: i.support.transition.end,
            handle: function (e) {
                return i(e.target).is(this) ? e.handleObj.handler.apply(this, arguments) : void 0
            }
        })
    })
}(jQuery),
function (o) {
    "use strict";
    var t = '[data-dismiss="alert"]',
        s = function (e) {
            o(e).on("click", t, this.close)
        };
    s.VERSION = "3.3.6", s.TRANSITION_DURATION = 150, s.prototype.close = function (e) {
        function t() {
            r.detach().trigger("closed.bs.alert").remove()
        }
        var n = o(this),
            i = n.attr("data-target");
        i || (i = (i = n.attr("href")) && i.replace(/.*(?=#[^\s]*$)/, ""));
        var r = o(i);
        e && e.preventDefault(), r.length || (r = n.closest(".alert")), r.trigger(e = o.Event("close.bs.alert")), e.isDefaultPrevented() || (r.removeClass("in"), o.support.transition && r.hasClass("fade") ? r.one("bsTransitionEnd", t).emulateTransitionEnd(s.TRANSITION_DURATION) : t())
    };
    var e = o.fn.alert;
    o.fn.alert = function (n) {
        return this.each(function () {
            var e = o(this),
                t = e.data("bs.alert");
            t || e.data("bs.alert", t = new s(this)), "string" == typeof n && t[n].call(e)
        })
    }, o.fn.alert.Constructor = s, o.fn.alert.noConflict = function () {
        return o.fn.alert = e, this
    }, o(document).on("click.bs.alert.data-api", t, s.prototype.close)
}(jQuery),
function (o) {
    "use strict";

    function n(i) {
        return this.each(function () {
            var e = o(this),
                t = e.data("bs.button"),
                n = "object" == typeof i && i;
            t || e.data("bs.button", t = new r(this, n)), "toggle" == i ? t.toggle() : i && t.setState(i)
        })
    }
    var r = function (e, t) {
        this.$element = o(e), this.options = o.extend({}, r.DEFAULTS, t), this.isLoading = !1
    };
    r.VERSION = "3.3.6", r.DEFAULTS = {
        loadingText: "loading..."
    }, r.prototype.setState = function (e) {
        var t = "disabled",
            n = this.$element,
            i = n.is("input") ? "val" : "html",
            r = n.data();
        e += "Text", null == r.resetText && n.data("resetText", n[i]()), setTimeout(o.proxy(function () {
            n[i](null == r[e] ? this.options[e] : r[e]), "loadingText" == e ? (this.isLoading = !0, n.addClass(t).attr(t, t)) : this.isLoading && (this.isLoading = !1, n.removeClass(t).removeAttr(t))
        }, this), 0)
    }, r.prototype.toggle = function () {
        var e = !0,
            t = this.$element.closest('[data-toggle="buttons"]');
        if (t.length) {
            var n = this.$element.find("input");
            "radio" == n.prop("type") ? (n.prop("checked") && (e = !1), t.find(".active").removeClass("active"), this.$element.addClass("active")) : "checkbox" == n.prop("type") && (n.prop("checked") !== this.$element.hasClass("active") && (e = !1), this.$element.toggleClass("active")), n.prop("checked", this.$element.hasClass("active")), e && n.trigger("change")
        } else this.$element.attr("aria-pressed", !this.$element.hasClass("active")), this.$element.toggleClass("active")
    };
    var e = o.fn.button;
    o.fn.button = n, o.fn.button.Constructor = r, o.fn.button.noConflict = function () {
        return o.fn.button = e, this
    }, o(document).on("click.bs.button.data-api", '[data-toggle^="button"]', function (e) {
        var t = o(e.target);
        t.hasClass("btn") || (t = t.closest(".btn")), n.call(t, "toggle"), o(e.target).is('input[type="radio"]') || o(e.target).is('input[type="checkbox"]') || e.preventDefault()
    }).on("focus.bs.button.data-api blur.bs.button.data-api", '[data-toggle^="button"]', function (e) {
        o(e.target).closest(".btn").toggleClass("focus", /^focus(in)?$/.test(e.type))
    })
}(jQuery),
function (p) {
    "use strict";

    function s(r) {
        return this.each(function () {
            var e = p(this),
                t = e.data("bs.carousel"),
                n = p.extend({}, d.DEFAULTS, e.data(), "object" == typeof r && r),
                i = "string" == typeof r ? r : n.slide;
            t || e.data("bs.carousel", t = new d(this, n)), "number" == typeof r ? t.to(r) : i ? t[i]() : n.interval && t.pause().cycle()
        })
    }
    var d = function (e, t) {
        this.$element = p(e), this.$indicators = this.$element.find(".carousel-indicators"), this.options = t, this.paused = null, this.sliding = null, this.interval = null, this.$active = null, this.$items = null, this.options.keyboard && this.$element.on("keydown.bs.carousel", p.proxy(this.keydown, this)), "hover" == this.options.pause && !("ontouchstart" in document.documentElement) && this.$element.on("mouseenter.bs.carousel", p.proxy(this.pause, this)).on("mouseleave.bs.carousel", p.proxy(this.cycle, this))
    };
    d.VERSION = "3.3.6", d.TRANSITION_DURATION = 600, d.DEFAULTS = {
        interval: 5e3,
        pause: "hover",
        wrap: !0,
        keyboard: !0
    }, d.prototype.keydown = function (e) {
        if (!/input|textarea/i.test(e.target.tagName)) {
            switch (e.which) {
                case 37:
                    this.prev();
                    break;
                case 39:
                    this.next();
                    break;
                default:
                    return
            }
            e.preventDefault()
        }
    }, d.prototype.cycle = function (e) {
        return e || (this.paused = !1), this.interval && clearInterval(this.interval), this.options.interval && !this.paused && (this.interval = setInterval(p.proxy(this.next, this), this.options.interval)), this
    }, d.prototype.getItemIndex = function (e) {
        return this.$items = e.parent().children(".item"), this.$items.index(e || this.$active)
    }, d.prototype.getItemForDirection = function (e, t) {
        var n = this.getItemIndex(t);
        if (("prev" == e && 0 === n || "next" == e && n == this.$items.length - 1) && !this.options.wrap) return t;
        var i = (n + ("prev" == e ? -1 : 1)) % this.$items.length;
        return this.$items.eq(i)
    }, d.prototype.to = function (e) {
        var t = this,
            n = this.getItemIndex(this.$active = this.$element.find(".item.active"));
        return e > this.$items.length - 1 || e < 0 ? void 0 : this.sliding ? this.$element.one("slid.bs.carousel", function () {
            t.to(e)
        }) : n == e ? this.pause().cycle() : this.slide(n < e ? "next" : "prev", this.$items.eq(e))
    }, d.prototype.pause = function (e) {
        return e || (this.paused = !0), this.$element.find(".next, .prev").length && p.support.transition && (this.$element.trigger(p.support.transition.end), this.cycle(!0)), this.interval = clearInterval(this.interval), this
    }, d.prototype.next = function () {
        return this.sliding ? void 0 : this.slide("next")
    }, d.prototype.prev = function () {
        return this.sliding ? void 0 : this.slide("prev")
    }, d.prototype.slide = function (e, t) {
        var n = this.$element.find(".item.active"),
            i = t || this.getItemForDirection(e, n),
            r = this.interval,
            o = "next" == e ? "left" : "right",
            s = this;
        if (i.hasClass("active")) return this.sliding = !1;
        var a = i[0],
            l = p.Event("slide.bs.carousel", {
                relatedTarget: a,
                direction: o
            });
        if (this.$element.trigger(l), !l.isDefaultPrevented()) {
            if (this.sliding = !0, r && this.pause(), this.$indicators.length) {
                this.$indicators.find(".active").removeClass("active");
                var c = p(this.$indicators.children()[this.getItemIndex(i)]);
                c && c.addClass("active")
            }
            var u = p.Event("slid.bs.carousel", {
                relatedTarget: a,
                direction: o
            });
            return p.support.transition && this.$element.hasClass("slide") ? (i.addClass(e), i[0].offsetWidth, n.addClass(o), i.addClass(o), n.one("bsTransitionEnd", function () {
                i.removeClass([e, o].join(" ")).addClass("active"), n.removeClass(["active", o].join(" ")), s.sliding = !1, setTimeout(function () {
                    s.$element.trigger(u)
                }, 0)
            }).emulateTransitionEnd(d.TRANSITION_DURATION)) : (n.removeClass("active"), i.addClass("active"), this.sliding = !1, this.$element.trigger(u)), r && this.cycle(), this
        }
    };
    var e = p.fn.carousel;
    p.fn.carousel = s, p.fn.carousel.Constructor = d, p.fn.carousel.noConflict = function () {
        return p.fn.carousel = e, this
    };
    var t = function (e) {
        var t, n = p(this),
            i = p(n.attr("data-target") || (t = n.attr("href")) && t.replace(/.*(?=#[^\s]+$)/, ""));
        if (i.hasClass("carousel")) {
            var r = p.extend({}, i.data(), n.data()),
                o = n.attr("data-slide-to");
            o && (r.interval = !1), s.call(i, r), o && i.data("bs.carousel").to(o), e.preventDefault()
        }
    };
    p(document).on("click.bs.carousel.data-api", "[data-slide]", t).on("click.bs.carousel.data-api", "[data-slide-to]", t), p(window).on("load", function () {
        p('[data-ride="carousel"]').each(function () {
            var e = p(this);
            s.call(e, e.data())
        })
    })
}(jQuery),
function (s) {
    "use strict";

    function r(e) {
        var t;
        return s(e.attr("data-target") || (t = e.attr("href")) && t.replace(/.*(?=#[^\s]+$)/, ""))
    }

    function a(i) {
        return this.each(function () {
            var e = s(this),
                t = e.data("bs.collapse"),
                n = s.extend({}, l.DEFAULTS, e.data(), "object" == typeof i && i);
            !t && n.toggle && /show|hide/.test(i) && (n.toggle = !1), t || e.data("bs.collapse", t = new l(this, n)), "string" == typeof i && t[i]()
        })
    }
    var l = function (e, t) {
        this.$element = s(e), this.options = s.extend({}, l.DEFAULTS, t), this.$trigger = s('[data-toggle="collapse"][href="#' + e.id + '"],[data-toggle="collapse"][data-target="#' + e.id + '"]'), this.transitioning = null, this.options.parent ? this.$parent = this.getParent() : this.addAriaAndCollapsedClass(this.$element, this.$trigger), this.options.toggle && this.toggle()
    };
    l.VERSION = "3.3.6", l.TRANSITION_DURATION = 350, l.DEFAULTS = {
        toggle: !0
    }, l.prototype.dimension = function () {
        return this.$element.hasClass("width") ? "width" : "height"
    }, l.prototype.show = function () {
        if (!this.transitioning && !this.$element.hasClass("in")) {
            var e, t = this.$parent && this.$parent.children(".panel").children(".in, .collapsing");
            if (!(t && t.length && (e = t.data("bs.collapse")) && e.transitioning)) {
                var n = s.Event("show.bs.collapse");
                if (this.$element.trigger(n), !n.isDefaultPrevented()) {
                    t && t.length && (a.call(t, "hide"), e || t.data("bs.collapse", null));
                    var i = this.dimension();
                    this.$element.removeClass("collapse").addClass("collapsing")[i](0).attr("aria-expanded", !0), this.$trigger.removeClass("collapsed").attr("aria-expanded", !0), this.transitioning = 1;
                    var r = function () {
                        this.$element.removeClass("collapsing").addClass("collapse in")[i](""), this.transitioning = 0, this.$element.trigger("shown.bs.collapse")
                    };
                    if (!s.support.transition) return r.call(this);
                    var o = s.camelCase(["scroll", i].join("-"));
                    this.$element.one("bsTransitionEnd", s.proxy(r, this)).emulateTransitionEnd(l.TRANSITION_DURATION)[i](this.$element[0][o])
                }
            }
        }
    }, l.prototype.hide = function () {
        if (!this.transitioning && this.$element.hasClass("in")) {
            var e = s.Event("hide.bs.collapse");
            if (this.$element.trigger(e), !e.isDefaultPrevented()) {
                var t = this.dimension();
                this.$element[t](this.$element[t]())[0].offsetHeight, this.$element.addClass("collapsing").removeClass("collapse in").attr("aria-expanded", !1), this.$trigger.addClass("collapsed").attr("aria-expanded", !1), this.transitioning = 1;
                var n = function () {
                    this.transitioning = 0, this.$element.removeClass("collapsing").addClass("collapse").trigger("hidden.bs.collapse")
                };
                return s.support.transition ? void this.$element[t](0).one("bsTransitionEnd", s.proxy(n, this)).emulateTransitionEnd(l.TRANSITION_DURATION) : n.call(this)
            }
        }
    }, l.prototype.toggle = function () {
        this[this.$element.hasClass("in") ? "hide" : "show"]()
    }, l.prototype.getParent = function () {
        return s(this.options.parent).find('[data-toggle="collapse"][data-parent="' + this.options.parent + '"]').each(s.proxy(function (e, t) {
            var n = s(t);
            this.addAriaAndCollapsedClass(r(n), n)
        }, this)).end()
    }, l.prototype.addAriaAndCollapsedClass = function (e, t) {
        var n = e.hasClass("in");
        e.attr("aria-expanded", n), t.toggleClass("collapsed", !n).attr("aria-expanded", n)
    };
    var e = s.fn.collapse;
    s.fn.collapse = a, s.fn.collapse.Constructor = l, s.fn.collapse.noConflict = function () {
        return s.fn.collapse = e, this
    }, s(document).on("click.bs.collapse.data-api", '[data-toggle="collapse"]', function (e) {
        var t = s(this);
        t.attr("data-target") || e.preventDefault();
        var n = r(t),
            i = n.data("bs.collapse") ? "toggle" : t.data();
        a.call(n, i)
    })
}(jQuery),
function (s) {
    "use strict";

    function a(e) {
        var t = e.attr("data-target");
        t || (t = (t = e.attr("href")) && /#[A-Za-z]/.test(t) && t.replace(/.*(?=#[^\s]*$)/, ""));
        var n = t && s(t);
        return n && n.length ? n : e.parent()
    }

    function o(i) {
        i && 3 === i.which || (s(".dropdown-backdrop").remove(), s(l).each(function () {
            var e = s(this),
                t = a(e),
                n = {
                    relatedTarget: this
                };
            t.hasClass("open") && (i && "click" == i.type && /input|textarea/i.test(i.target.tagName) && s.contains(t[0], i.target) || (t.trigger(i = s.Event("hide.bs.dropdown", n)), i.isDefaultPrevented() || (e.attr("aria-expanded", "false"), t.removeClass("open").trigger(s.Event("hidden.bs.dropdown", n)))))
        }))
    }
    var l = '[data-toggle="dropdown"]',
        i = function (e) {
            s(e).on("click.bs.dropdown", this.toggle)
        };
    i.VERSION = "3.3.6", i.prototype.toggle = function (e) {
        var t = s(this);
        if (!t.is(".disabled, :disabled")) {
            var n = a(t),
                i = n.hasClass("open");
            if (o(), !i) {
                "ontouchstart" in document.documentElement && !n.closest(".navbar-nav").length && s(document.createElement("div")).addClass("dropdown-backdrop").insertAfter(s(this)).on("click", o);
                var r = {
                    relatedTarget: this
                };
                if (n.trigger(e = s.Event("show.bs.dropdown", r)), e.isDefaultPrevented()) return;
                t.trigger("focus").attr("aria-expanded", "true"), n.toggleClass("open").trigger(s.Event("shown.bs.dropdown", r))
            }
            return !1
        }
    }, i.prototype.keydown = function (e) {
        if (/(38|40|27|32)/.test(e.which) && !/input|textarea/i.test(e.target.tagName)) {
            var t = s(this);
            if (e.preventDefault(), e.stopPropagation(), !t.is(".disabled, :disabled")) {
                var n = a(t),
                    i = n.hasClass("open");
                if (!i && 27 != e.which || i && 27 == e.which) return 27 == e.which && n.find(l).trigger("focus"), t.trigger("click");
                var r = n.find(".dropdown-menu li:not(.disabled):visible a");
                if (r.length) {
                    var o = r.index(e.target);
                    38 == e.which && 0 < o && o--, 40 == e.which && o < r.length - 1 && o++, ~o || (o = 0), r.eq(o).trigger("focus")
                }
            }
        }
    };
    var e = s.fn.dropdown;
    s.fn.dropdown = function (n) {
        return this.each(function () {
            var e = s(this),
                t = e.data("bs.dropdown");
            t || e.data("bs.dropdown", t = new i(this)), "string" == typeof n && t[n].call(e)
        })
    }, s.fn.dropdown.Constructor = i, s.fn.dropdown.noConflict = function () {
        return s.fn.dropdown = e, this
    }, s(document).on("click.bs.dropdown.data-api", o).on("click.bs.dropdown.data-api", ".dropdown form", function (e) {
        e.stopPropagation()
    }).on("click.bs.dropdown.data-api", l, i.prototype.toggle).on("keydown.bs.dropdown.data-api", l, i.prototype.keydown).on("keydown.bs.dropdown.data-api", ".dropdown-menu", i.prototype.keydown)
}(jQuery),
function (o) {
    "use strict";

    function s(i, r) {
        return this.each(function () {
            var e = o(this),
                t = e.data("bs.modal"),
                n = o.extend({}, a.DEFAULTS, e.data(), "object" == typeof i && i);
            t || e.data("bs.modal", t = new a(this, n)), "string" == typeof i ? t[i](r) : n.show && t.show(r)
        })
    }
    var a = function (e, t) {
        this.options = t, this.$body = o(document.body), this.$element = o(e), this.$dialog = this.$element.find(".modal-dialog"), this.$backdrop = null, this.isShown = null, this.originalBodyPad = null, this.scrollbarWidth = 0, this.ignoreBackdropClick = !1, this.options.remote && this.$element.find(".modal-content").load(this.options.remote, o.proxy(function () {
            this.$element.trigger("loaded.bs.modal")
        }, this))
    };
    a.VERSION = "3.3.6", a.TRANSITION_DURATION = 300, a.BACKDROP_TRANSITION_DURATION = 150, a.DEFAULTS = {
        backdrop: !0,
        keyboard: !0,
        show: !0
    }, a.prototype.toggle = function (e) {
        return this.isShown ? this.hide() : this.show(e)
    }, a.prototype.show = function (n) {
        var i = this,
            e = o.Event("show.bs.modal", {
                relatedTarget: n
            });
        this.$element.trigger(e), this.isShown || e.isDefaultPrevented() || (this.isShown = !0, this.checkScrollbar(), this.setScrollbar(), this.$body.addClass("modal-open"), this.escape(), this.resize(), this.$element.on("click.dismiss.bs.modal", '[data-dismiss="modal"]', o.proxy(this.hide, this)), this.$dialog.on("mousedown.dismiss.bs.modal", function () {
            i.$element.one("mouseup.dismiss.bs.modal", function (e) {
                o(e.target).is(i.$element) && (i.ignoreBackdropClick = !0)
            })
        }), this.backdrop(function () {
            var e = o.support.transition && i.$element.hasClass("fade");
            i.$element.parent().length || i.$element.appendTo(i.$body), i.$element.show().scrollTop(0), i.adjustDialog(), e && i.$element[0].offsetWidth, i.$element.addClass("in"), i.enforceFocus();
            var t = o.Event("shown.bs.modal", {
                relatedTarget: n
            });
            e ? i.$dialog.one("bsTransitionEnd", function () {
                i.$element.trigger("focus").trigger(t)
            }).emulateTransitionEnd(a.TRANSITION_DURATION) : i.$element.trigger("focus").trigger(t)
        }))
    }, a.prototype.hide = function (e) {
        e && e.preventDefault(), e = o.Event("hide.bs.modal"), this.$element.trigger(e), this.isShown && !e.isDefaultPrevented() && (this.isShown = !1, this.escape(), this.resize(), o(document).off("focusin.bs.modal"), this.$element.removeClass("in").off("click.dismiss.bs.modal").off("mouseup.dismiss.bs.modal"), this.$dialog.off("mousedown.dismiss.bs.modal"), o.support.transition && this.$element.hasClass("fade") ? this.$element.one("bsTransitionEnd", o.proxy(this.hideModal, this)).emulateTransitionEnd(a.TRANSITION_DURATION) : this.hideModal())
    }, a.prototype.enforceFocus = function () {
        o(document).off("focusin.bs.modal").on("focusin.bs.modal", o.proxy(function (e) {
            this.$element[0] === e.target || this.$element.has(e.target).length || this.$element.trigger("focus")
        }, this))
    }, a.prototype.escape = function () {
        this.isShown && this.options.keyboard ? this.$element.on("keydown.dismiss.bs.modal", o.proxy(function (e) {
            27 == e.which && this.hide()
        }, this)) : this.isShown || this.$element.off("keydown.dismiss.bs.modal")
    }, a.prototype.resize = function () {
        this.isShown ? o(window).on("resize.bs.modal", o.proxy(this.handleUpdate, this)) : o(window).off("resize.bs.modal")
    }, a.prototype.hideModal = function () {
        var e = this;
        this.$element.hide(), this.backdrop(function () {
            e.$body.removeClass("modal-open"), e.resetAdjustments(), e.resetScrollbar(), e.$element.trigger("hidden.bs.modal")
        })
    }, a.prototype.removeBackdrop = function () {
        this.$backdrop && this.$backdrop.remove(), this.$backdrop = null
    }, a.prototype.backdrop = function (e) {
        var t = this,
            n = this.$element.hasClass("fade") ? "fade" : "";
        if (this.isShown && this.options.backdrop) {
            var i = o.support.transition && n;
            if (this.$backdrop = o(document.createElement("div")).addClass("modal-backdrop " + n).appendTo(this.$body), this.$element.on("click.dismiss.bs.modal", o.proxy(function (e) {
                    return this.ignoreBackdropClick ? void(this.ignoreBackdropClick = !1) : void(e.target === e.currentTarget && ("static" == this.options.backdrop ? this.$element[0].focus() : this.hide()))
                }, this)), i && this.$backdrop[0].offsetWidth, this.$backdrop.addClass("in"), !e) return;
            i ? this.$backdrop.one("bsTransitionEnd", e).emulateTransitionEnd(a.BACKDROP_TRANSITION_DURATION) : e()
        } else if (!this.isShown && this.$backdrop) {
            this.$backdrop.removeClass("in");
            var r = function () {
                t.removeBackdrop(), e && e()
            };
            o.support.transition && this.$element.hasClass("fade") ? this.$backdrop.one("bsTransitionEnd", r).emulateTransitionEnd(a.BACKDROP_TRANSITION_DURATION) : r()
        } else e && e()
    }, a.prototype.handleUpdate = function () {
        this.adjustDialog()
    }, a.prototype.adjustDialog = function () {
        var e = this.$element[0].scrollHeight > document.documentElement.clientHeight;
        this.$element.css({
            paddingLeft: !this.bodyIsOverflowing && e ? this.scrollbarWidth : "",
            paddingRight: this.bodyIsOverflowing && !e ? this.scrollbarWidth : ""
        })
    }, a.prototype.resetAdjustments = function () {
        this.$element.css({
            paddingLeft: "",
            paddingRight: ""
        })
    }, a.prototype.checkScrollbar = function () {
        var e = window.innerWidth;
        if (!e) {
            var t = document.documentElement.getBoundingClientRect();
            e = t.right - Math.abs(t.left)
        }
        this.bodyIsOverflowing = document.body.clientWidth < e, this.scrollbarWidth = this.measureScrollbar()
    }, a.prototype.setScrollbar = function () {
        var e = parseInt(this.$body.css("padding-right") || 0, 10);
        this.originalBodyPad = document.body.style.paddingRight || "", this.bodyIsOverflowing && this.$body.css("padding-right", e + this.scrollbarWidth)
    }, a.prototype.resetScrollbar = function () {
        this.$body.css("padding-right", this.originalBodyPad)
    }, a.prototype.measureScrollbar = function () {
        var e = document.createElement("div");
        e.className = "modal-scrollbar-measure", this.$body.append(e);
        var t = e.offsetWidth - e.clientWidth;
        return this.$body[0].removeChild(e), t
    };
    var e = o.fn.modal;
    o.fn.modal = s, o.fn.modal.Constructor = a, o.fn.modal.noConflict = function () {
        return o.fn.modal = e, this
    }, o(document).on("click.bs.modal.data-api", '[data-toggle="modal"]', function (e) {
        var t = o(this),
            n = t.attr("href"),
            i = o(t.attr("data-target") || n && n.replace(/.*(?=#[^\s]+$)/, "")),
            r = i.data("bs.modal") ? "toggle" : o.extend({
                remote: !/#/.test(n) && n
            }, i.data(), t.data());
        t.is("a") && e.preventDefault(), i.one("show.bs.modal", function (e) {
            e.isDefaultPrevented() || i.one("hidden.bs.modal", function () {
                t.is(":visible") && t.trigger("focus")
            })
        }), s.call(i, r, this)
    })
}(jQuery),
function (v) {
    "use strict";
    var m = function (e, t) {
        this.type = null, this.options = null, this.enabled = null, this.timeout = null, this.hoverState = null, this.$element = null, this.inState = null, this.init("tooltip", e, t)
    };
    m.VERSION = "3.3.6", m.TRANSITION_DURATION = 150, m.DEFAULTS = {
        animation: !0,
        placement: "top",
        selector: !1,
        template: '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
        trigger: "hover focus",
        title: "",
        delay: 0,
        html: !1,
        container: !1,
        viewport: {
            selector: "body",
            padding: 0
        }
    }, m.prototype.init = function (e, t, n) {
        if (this.enabled = !0, this.type = e, this.$element = v(t), this.options = this.getOptions(n), this.$viewport = this.options.viewport && v(v.isFunction(this.options.viewport) ? this.options.viewport.call(this, this.$element) : this.options.viewport.selector || this.options.viewport), this.inState = {
                click: !1,
                hover: !1,
                focus: !1
            }, this.$element[0] instanceof document.constructor && !this.options.selector) throw new Error("`selector` option must be specified when initializing " + this.type + " on the window.document object!");
        for (var i = this.options.trigger.split(" "), r = i.length; r--;) {
            var o = i[r];
            if ("click" == o) this.$element.on("click." + this.type, this.options.selector, v.proxy(this.toggle, this));
            else if ("manual" != o) {
                var s = "hover" == o ? "mouseenter" : "focusin",
                    a = "hover" == o ? "mouseleave" : "focusout";
                this.$element.on(s + "." + this.type, this.options.selector, v.proxy(this.enter, this)), this.$element.on(a + "." + this.type, this.options.selector, v.proxy(this.leave, this))
            }
        }
        this.options.selector ? this._options = v.extend({}, this.options, {
            trigger: "manual",
            selector: ""
        }) : this.fixTitle()
    }, m.prototype.getDefaults = function () {
        return m.DEFAULTS
    }, m.prototype.getOptions = function (e) {
        return (e = v.extend({}, this.getDefaults(), this.$element.data(), e)).delay && "number" == typeof e.delay && (e.delay = {
            show: e.delay,
            hide: e.delay
        }), e
    }, m.prototype.getDelegateOptions = function () {
        var n = {},
            i = this.getDefaults();
        return this._options && v.each(this._options, function (e, t) {
            i[e] != t && (n[e] = t)
        }), n
    }, m.prototype.enter = function (e) {
        var t = e instanceof this.constructor ? e : v(e.currentTarget).data("bs." + this.type);
        return t || (t = new this.constructor(e.currentTarget, this.getDelegateOptions()), v(e.currentTarget).data("bs." + this.type, t)), e instanceof v.Event && (t.inState["focusin" == e.type ? "focus" : "hover"] = !0), t.tip().hasClass("in") || "in" == t.hoverState ? void(t.hoverState = "in") : (clearTimeout(t.timeout), t.hoverState = "in", t.options.delay && t.options.delay.show ? void(t.timeout = setTimeout(function () {
            "in" == t.hoverState && t.show()
        }, t.options.delay.show)) : t.show())
    }, m.prototype.isInStateTrue = function () {
        for (var e in this.inState)
            if (this.inState[e]) return !0;
        return !1
    }, m.prototype.leave = function (e) {
        var t = e instanceof this.constructor ? e : v(e.currentTarget).data("bs." + this.type);
        return t || (t = new this.constructor(e.currentTarget, this.getDelegateOptions()), v(e.currentTarget).data("bs." + this.type, t)), e instanceof v.Event && (t.inState["focusout" == e.type ? "focus" : "hover"] = !1), t.isInStateTrue() ? void 0 : (clearTimeout(t.timeout), t.hoverState = "out", t.options.delay && t.options.delay.hide ? void(t.timeout = setTimeout(function () {
            "out" == t.hoverState && t.hide()
        }, t.options.delay.hide)) : t.hide())
    }, m.prototype.show = function () {
        var e = v.Event("show.bs." + this.type);
        if (this.hasContent() && this.enabled) {
            this.$element.trigger(e);
            var t = v.contains(this.$element[0].ownerDocument.documentElement, this.$element[0]);
            if (e.isDefaultPrevented() || !t) return;
            var n = this,
                i = this.tip(),
                r = this.getUID(this.type);
            this.setContent(), i.attr("id", r), this.$element.attr("aria-describedby", r), this.options.animation && i.addClass("fade");
            var o = "function" == typeof this.options.placement ? this.options.placement.call(this, i[0], this.$element[0]) : this.options.placement,
                s = /\s?auto?\s?/i,
                a = s.test(o);
            a && (o = o.replace(s, "") || "top"), i.detach().css({
                top: 0,
                left: 0,
                display: "block"
            }).addClass(o).data("bs." + this.type, this), this.options.container ? i.appendTo(this.options.container) : i.insertAfter(this.$element), this.$element.trigger("inserted.bs." + this.type);
            var l = this.getPosition(),
                c = i[0].offsetWidth,
                u = i[0].offsetHeight;
            if (a) {
                var p = o,
                    d = this.getPosition(this.$viewport);
                o = "bottom" == o && l.bottom + u > d.bottom ? "top" : "top" == o && l.top - u < d.top ? "bottom" : "right" == o && l.right + c > d.width ? "left" : "left" == o && l.left - c < d.left ? "right" : o, i.removeClass(p).addClass(o)
            }
            var f = this.getCalculatedOffset(o, l, c, u);
            this.applyPlacement(f, o);
            var h = function () {
                var e = n.hoverState;
                n.$element.trigger("shown.bs." + n.type), n.hoverState = null, "out" == e && n.leave(n)
            };
            v.support.transition && this.$tip.hasClass("fade") ? i.one("bsTransitionEnd", h).emulateTransitionEnd(m.TRANSITION_DURATION) : h()
        }
    }, m.prototype.applyPlacement = function (e, t) {
        var n = this.tip(),
            i = n[0].offsetWidth,
            r = n[0].offsetHeight,
            o = parseInt(n.css("margin-top"), 10),
            s = parseInt(n.css("margin-left"), 10);
        isNaN(o) && (o = 0), isNaN(s) && (s = 0), e.top += o, e.left += s, v.offset.setOffset(n[0], v.extend({
            using: function (e) {
                n.css({
                    top: Math.round(e.top),
                    left: Math.round(e.left)
                })
            }
        }, e), 0), n.addClass("in");
        var a = n[0].offsetWidth,
            l = n[0].offsetHeight;
        "top" == t && l != r && (e.top = e.top + r - l);
        var c = this.getViewportAdjustedDelta(t, e, a, l);
        c.left ? e.left += c.left : e.top += c.top;
        var u = /top|bottom/.test(t),
            p = u ? 2 * c.left - i + a : 2 * c.top - r + l,
            d = u ? "offsetWidth" : "offsetHeight";
        n.offset(e), this.replaceArrow(p, n[0][d], u)
    }, m.prototype.replaceArrow = function (e, t, n) {
        this.arrow().css(n ? "left" : "top", 50 * (1 - e / t) + "%").css(n ? "top" : "left", "")
    }, m.prototype.setContent = function () {
        var e = this.tip(),
            t = this.getTitle();
        e.find(".tooltip-inner")[this.options.html ? "html" : "text"](t), e.removeClass("fade in top bottom left right")
    }, m.prototype.hide = function (e) {
        function t() {
            "in" != n.hoverState && i.detach(), n.$element.removeAttr("aria-describedby").trigger("hidden.bs." + n.type), e && e()
        }
        var n = this,
            i = v(this.$tip),
            r = v.Event("hide.bs." + this.type);
        return this.$element.trigger(r), r.isDefaultPrevented() ? void 0 : (i.removeClass("in"), v.support.transition && i.hasClass("fade") ? i.one("bsTransitionEnd", t).emulateTransitionEnd(m.TRANSITION_DURATION) : t(), this.hoverState = null, this)
    }, m.prototype.fixTitle = function () {
        var e = this.$element;
        (e.attr("title") || "string" != typeof e.attr("data-original-title")) && e.attr("data-original-title", e.attr("title") || "").attr("title", "")
    }, m.prototype.hasContent = function () {
        return this.getTitle()
    }, m.prototype.getPosition = function (e) {
        var t = (e = e || this.$element)[0],
            n = "BODY" == t.tagName,
            i = t.getBoundingClientRect();
        null == i.width && (i = v.extend({}, i, {
            width: i.right - i.left,
            height: i.bottom - i.top
        }));
        var r = n ? {
                top: 0,
                left: 0
            } : e.offset(),
            o = {
                scroll: n ? document.documentElement.scrollTop || document.body.scrollTop : e.scrollTop()
            },
            s = n ? {
                width: v(window).width(),
                height: v(window).height()
            } : null;
        return v.extend({}, i, o, s, r)
    }, m.prototype.getCalculatedOffset = function (e, t, n, i) {
        return "bottom" == e ? {
            top: t.top + t.height,
            left: t.left + t.width / 2 - n / 2
        } : "top" == e ? {
            top: t.top - i,
            left: t.left + t.width / 2 - n / 2
        } : "left" == e ? {
            top: t.top + t.height / 2 - i / 2,
            left: t.left - n
        } : {
            top: t.top + t.height / 2 - i / 2,
            left: t.left + t.width
        }
    }, m.prototype.getViewportAdjustedDelta = function (e, t, n, i) {
        var r = {
            top: 0,
            left: 0
        };
        if (!this.$viewport) return r;
        var o = this.options.viewport && this.options.viewport.padding || 0,
            s = this.getPosition(this.$viewport);
        if (/right|left/.test(e)) {
            var a = t.top - o - s.scroll,
                l = t.top + o - s.scroll + i;
            a < s.top ? r.top = s.top - a : l > s.top + s.height && (r.top = s.top + s.height - l)
        } else {
            var c = t.left - o,
                u = t.left + o + n;
            c < s.left ? r.left = s.left - c : u > s.right && (r.left = s.left + s.width - u)
        }
        return r
    }, m.prototype.getTitle = function () {
        var e = this.$element,
            t = this.options;
        return e.attr("data-original-title") || ("function" == typeof t.title ? t.title.call(e[0]) : t.title)
    }, m.prototype.getUID = function (e) {
        for (; e += ~~(1e6 * Math.random()), document.getElementById(e););
        return e
    }, m.prototype.tip = function () {
        if (!this.$tip && (this.$tip = v(this.options.template), 1 != this.$tip.length)) throw new Error(this.type + " `template` option must consist of exactly 1 top-level element!");
        return this.$tip
    }, m.prototype.arrow = function () {
        return this.$arrow = this.$arrow || this.tip().find(".tooltip-arrow")
    }, m.prototype.enable = function () {
        this.enabled = !0
    }, m.prototype.disable = function () {
        this.enabled = !1
    }, m.prototype.toggleEnabled = function () {
        this.enabled = !this.enabled
    }, m.prototype.toggle = function (e) {
        var t = this;
        e && ((t = v(e.currentTarget).data("bs." + this.type)) || (t = new this.constructor(e.currentTarget, this.getDelegateOptions()), v(e.currentTarget).data("bs." + this.type, t))), e ? (t.inState.click = !t.inState.click, t.isInStateTrue() ? t.enter(t) : t.leave(t)) : t.tip().hasClass("in") ? t.leave(t) : t.enter(t)
    }, m.prototype.destroy = function () {
        var e = this;
        clearTimeout(this.timeout), this.hide(function () {
            e.$element.off("." + e.type).removeData("bs." + e.type), e.$tip && e.$tip.detach(), e.$tip = null, e.$arrow = null, e.$viewport = null
        })
    };
    var e = v.fn.tooltip;
    v.fn.tooltip = function (i) {
        return this.each(function () {
            var e = v(this),
                t = e.data("bs.tooltip"),
                n = "object" == typeof i && i;
            (t || !/destroy|hide/.test(i)) && (t || e.data("bs.tooltip", t = new m(this, n)), "string" == typeof i && t[i]())
        })
    }, v.fn.tooltip.Constructor = m, v.fn.tooltip.noConflict = function () {
        return v.fn.tooltip = e, this
    }
}(jQuery),
function (r) {
    "use strict";
    var o = function (e, t) {
        this.init("popover", e, t)
    };
    if (!r.fn.tooltip) throw new Error("Popover requires tooltip.js");
    o.VERSION = "3.3.6", o.DEFAULTS = r.extend({}, r.fn.tooltip.Constructor.DEFAULTS, {
        placement: "right",
        trigger: "click",
        content: "",
        template: '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'
    }), ((o.prototype = r.extend({}, r.fn.tooltip.Constructor.prototype)).constructor = o).prototype.getDefaults = function () {
        return o.DEFAULTS
    }, o.prototype.setContent = function () {
        var e = this.tip(),
            t = this.getTitle(),
            n = this.getContent();
        e.find(".popover-title")[this.options.html ? "html" : "text"](t), e.find(".popover-content").children().detach().end()[this.options.html ? "string" == typeof n ? "html" : "append" : "text"](n), e.removeClass("fade top bottom left right in"), e.find(".popover-title").html() || e.find(".popover-title").hide()
    }, o.prototype.hasContent = function () {
        return this.getTitle() || this.getContent()
    }, o.prototype.getContent = function () {
        var e = this.$element,
            t = this.options;
        return e.attr("data-content") || ("function" == typeof t.content ? t.content.call(e[0]) : t.content)
    }, o.prototype.arrow = function () {
        return this.$arrow = this.$arrow || this.tip().find(".arrow")
    };
    var e = r.fn.popover;
    r.fn.popover = function (i) {
        return this.each(function () {
            var e = r(this),
                t = e.data("bs.popover"),
                n = "object" == typeof i && i;
            (t || !/destroy|hide/.test(i)) && (t || e.data("bs.popover", t = new o(this, n)), "string" == typeof i && t[i]())
        })
    }, r.fn.popover.Constructor = o, r.fn.popover.noConflict = function () {
        return r.fn.popover = e, this
    }
}(jQuery),
function (o) {
    "use strict";

    function r(e, t) {
        this.$body = o(document.body), this.$scrollElement = o(o(e).is(document.body) ? window : e), this.options = o.extend({}, r.DEFAULTS, t), this.selector = (this.options.target || "") + " .nav li > a", this.offsets = [], this.targets = [], this.activeTarget = null, this.scrollHeight = 0, this.$scrollElement.on("scroll.bs.scrollspy", o.proxy(this.process, this)), this.refresh(), this.process()
    }

    function t(i) {
        return this.each(function () {
            var e = o(this),
                t = e.data("bs.scrollspy"),
                n = "object" == typeof i && i;
            t || e.data("bs.scrollspy", t = new r(this, n)), "string" == typeof i && t[i]()
        })
    }
    r.VERSION = "3.3.6", r.DEFAULTS = {
        offset: 10
    }, r.prototype.getScrollHeight = function () {
        return this.$scrollElement[0].scrollHeight || Math.max(this.$body[0].scrollHeight, document.documentElement.scrollHeight)
    }, r.prototype.refresh = function () {
        var e = this,
            i = "offset",
            r = 0;
        this.offsets = [], this.targets = [], this.scrollHeight = this.getScrollHeight(), o.isWindow(this.$scrollElement[0]) || (i = "position", r = this.$scrollElement.scrollTop()), this.$body.find(this.selector).map(function () {
            var e = o(this),
                t = e.data("target") || e.attr("href"),
                n = /^#./.test(t) && o(t);
            return n && n.length && n.is(":visible") && [
                [n[i]().top + r, t]
            ] || null
        }).sort(function (e, t) {
            return e[0] - t[0]
        }).each(function () {
            e.offsets.push(this[0]), e.targets.push(this[1])
        })
    }, r.prototype.process = function () {
        var e, t = this.$scrollElement.scrollTop() + this.options.offset,
            n = this.getScrollHeight(),
            i = this.options.offset + n - this.$scrollElement.height(),
            r = this.offsets,
            o = this.targets,
            s = this.activeTarget;
        if (this.scrollHeight != n && this.refresh(), i <= t) return s != (e = o[o.length - 1]) && this.activate(e);
        if (s && t < r[0]) return this.activeTarget = null, this.clear();
        for (e = r.length; e--;) s != o[e] && t >= r[e] && (void 0 === r[e + 1] || t < r[e + 1]) && this.activate(o[e])
    }, r.prototype.activate = function (e) {
        this.activeTarget = e, this.clear();
        var t = this.selector + '[data-target="' + e + '"],' + this.selector + '[href="' + e + '"]',
            n = o(t).parents("li").addClass("active");
        n.parent(".dropdown-menu").length && (n = n.closest("li.dropdown").addClass("active")), n.trigger("activate.bs.scrollspy")
    }, r.prototype.clear = function () {
        o(this.selector).parentsUntil(this.options.target, ".active").removeClass("active")
    };
    var e = o.fn.scrollspy;
    o.fn.scrollspy = t, o.fn.scrollspy.Constructor = r, o.fn.scrollspy.noConflict = function () {
        return o.fn.scrollspy = e, this
    }, o(window).on("load.bs.scrollspy.data-api", function () {
        o('[data-spy="scroll"]').each(function () {
            var e = o(this);
            t.call(e, e.data())
        })
    })
}(jQuery),
function (a) {
    "use strict";

    function t(n) {
        return this.each(function () {
            var e = a(this),
                t = e.data("bs.tab");
            t || e.data("bs.tab", t = new s(this)), "string" == typeof n && t[n]()
        })
    }
    var s = function (e) {
        this.element = a(e)
    };
    s.VERSION = "3.3.6", s.TRANSITION_DURATION = 150, s.prototype.show = function () {
        var e = this.element,
            t = e.closest("ul:not(.dropdown-menu)"),
            n = e.data("target");
        if (n || (n = (n = e.attr("href")) && n.replace(/.*(?=#[^\s]*$)/, "")), !e.parent("li").hasClass("active")) {
            var i = t.find(".active:last a"),
                r = a.Event("hide.bs.tab", {
                    relatedTarget: e[0]
                }),
                o = a.Event("show.bs.tab", {
                    relatedTarget: i[0]
                });
            if (i.trigger(r), e.trigger(o), !o.isDefaultPrevented() && !r.isDefaultPrevented()) {
                var s = a(n);
                this.activate(e.closest("li"), t), this.activate(s, s.parent(), function () {
                    i.trigger({
                        type: "hidden.bs.tab",
                        relatedTarget: e[0]
                    }), e.trigger({
                        type: "shown.bs.tab",
                        relatedTarget: i[0]
                    })
                })
            }
        }
    }, s.prototype.activate = function (e, t, n) {
        function i() {
            r.removeClass("active").find("> .dropdown-menu > .active").removeClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded", !1), e.addClass("active").find('[data-toggle="tab"]').attr("aria-expanded", !0), o ? (e[0].offsetWidth, e.addClass("in")) : e.removeClass("fade"), e.parent(".dropdown-menu").length && e.closest("li.dropdown").addClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded", !0), n && n()
        }
        var r = t.find("> .active"),
            o = n && a.support.transition && (r.length && r.hasClass("fade") || !!t.find("> .fade").length);
        r.length && o ? r.one("bsTransitionEnd", i).emulateTransitionEnd(s.TRANSITION_DURATION) : i(), r.removeClass("in")
    };
    var e = a.fn.tab;
    a.fn.tab = t, a.fn.tab.Constructor = s, a.fn.tab.noConflict = function () {
        return a.fn.tab = e, this
    };
    var n = function (e) {
        e.preventDefault(), t.call(a(this), "show")
    };
    a(document).on("click.bs.tab.data-api", '[data-toggle="tab"]', n).on("click.bs.tab.data-api", '[data-toggle="pill"]', n)
}(jQuery),
function (l) {
    "use strict";

    function n(i) {
        return this.each(function () {
            var e = l(this),
                t = e.data("bs.affix"),
                n = "object" == typeof i && i;
            t || e.data("bs.affix", t = new c(this, n)), "string" == typeof i && t[i]()
        })
    }
    var c = function (e, t) {
        this.options = l.extend({}, c.DEFAULTS, t), this.$target = l(this.options.target).on("scroll.bs.affix.data-api", l.proxy(this.checkPosition, this)).on("click.bs.affix.data-api", l.proxy(this.checkPositionWithEventLoop, this)), this.$element = l(e), this.affixed = null, this.unpin = null, this.pinnedOffset = null, this.checkPosition()
    };
    c.VERSION = "3.3.6", c.RESET = "affix affix-top affix-bottom", c.DEFAULTS = {
        offset: 0,
        target: window
    }, c.prototype.getState = function (e, t, n, i) {
        var r = this.$target.scrollTop(),
            o = this.$element.offset(),
            s = this.$target.height();
        if (null != n && "top" == this.affixed) return r < n && "top";
        if ("bottom" == this.affixed) return null != n ? !(r + this.unpin <= o.top) && "bottom" : !(r + s <= e - i) && "bottom";
        var a = null == this.affixed,
            l = a ? r : o.top;
        return null != n && r <= n ? "top" : null != i && e - i <= l + (a ? s : t) && "bottom"
    }, c.prototype.getPinnedOffset = function () {
        if (this.pinnedOffset) return this.pinnedOffset;
        this.$element.removeClass(c.RESET).addClass("affix");
        var e = this.$target.scrollTop(),
            t = this.$element.offset();
        return this.pinnedOffset = t.top - e
    }, c.prototype.checkPositionWithEventLoop = function () {
        setTimeout(l.proxy(this.checkPosition, this), 1)
    }, c.prototype.checkPosition = function () {
        if (this.$element.is(":visible")) {
            var e = this.$element.height(),
                t = this.options.offset,
                n = t.top,
                i = t.bottom,
                r = Math.max(l(document).height(), l(document.body).height());
            "object" != typeof t && (i = n = t), "function" == typeof n && (n = t.top(this.$element)), "function" == typeof i && (i = t.bottom(this.$element));
            var o = this.getState(r, e, n, i);
            if (this.affixed != o) {
                null != this.unpin && this.$element.css("top", "");
                var s = "affix" + (o ? "-" + o : ""),
                    a = l.Event(s + ".bs.affix");
                if (this.$element.trigger(a), a.isDefaultPrevented()) return;
                this.affixed = o, this.unpin = "bottom" == o ? this.getPinnedOffset() : null, this.$element.removeClass(c.RESET).addClass(s).trigger(s.replace("affix", "affixed") + ".bs.affix")
            }
            "bottom" == o && this.$element.offset({
                top: r - e - i
            })
        }
    };
    var e = l.fn.affix;
    l.fn.affix = n, l.fn.affix.Constructor = c, l.fn.affix.noConflict = function () {
        return l.fn.affix = e, this
    }, l(window).on("load", function () {
        l('[data-spy="affix"]').each(function () {
            var e = l(this),
                t = e.data();
            t.offset = t.offset || {}, null != t.offsetBottom && (t.offset.bottom = t.offsetBottom), null != t.offsetTop && (t.offset.top = t.offsetTop), n.call(e, t)
        })
    })
}(jQuery);
var pJS = function (e, t) {
    var n = document.querySelector("#" + e + " > .particles-js-canvas-el");
    this.pJS = {
        canvas: {
            el: n,
            w: n.offsetWidth,
            h: n.offsetHeight
        },
        particles: {
            number: {
                value: 400,
                density: {
                    enable: !0,
                    value_area: 800
                }
            },
            color: {
                value: "#fff"
            },
            shape: {
                type: "circle",
                stroke: {
                    width: 0,
                    color: "#ff0000"
                },
                polygon: {
                    nb_sides: 5
                },
                image: {
                    src: "",
                    width: 100,
                    height: 100
                }
            },
            opacity: {
                value: 1,
                random: !1,
                anim: {
                    enable: !1,
                    speed: 2,
                    opacity_min: 0,
                    sync: !1
                }
            },
            size: {
                value: 20,
                random: !1,
                anim: {
                    enable: !1,
                    speed: 20,
                    size_min: 0,
                    sync: !1
                }
            },
            line_linked: {
                enable: !0,
                distance: 100,
                color: "#fff",
                opacity: 1,
                width: 1
            },
            move: {
                enable: !0,
                speed: 2,
                direction: "none",
                random: !1,
                straight: !1,
                out_mode: "out",
                bounce: !1,
                attract: {
                    enable: !1,
                    rotateX: 3e3,
                    rotateY: 3e3
                }
            },
            array: []
        },
        interactivity: {
            detect_on: "canvas",
            events: {
                onhover: {
                    enable: !0,
                    mode: "grab"
                },
                onclick: {
                    enable: !0,
                    mode: "push"
                },
                resize: !0
            },
            modes: {
                grab: {
                    distance: 100,
                    line_linked: {
                        opacity: 1
                    }
                },
                bubble: {
                    distance: 200,
                    size: 80,
                    duration: .4
                },
                repulse: {
                    distance: 200,
                    duration: .4
                },
                push: {
                    particles_nb: 4
                },
                remove: {
                    particles_nb: 2
                }
            },
            mouse: {}
        },
        retina_detect: !1,
        fn: {
            interact: {},
            modes: {},
            vendors: {}
        },
        tmp: {}
    };
    var f = this.pJS;
    t && Object.deepExtend(f, t), f.tmp.obj = {
        size_value: f.particles.size.value,
        size_anim_speed: f.particles.size.anim.speed,
        move_speed: f.particles.move.speed,
        line_linked_distance: f.particles.line_linked.distance,
        line_linked_width: f.particles.line_linked.width,
        mode_grab_distance: f.interactivity.modes.grab.distance,
        mode_bubble_distance: f.interactivity.modes.bubble.distance,
        mode_bubble_size: f.interactivity.modes.bubble.size,
        mode_repulse_distance: f.interactivity.modes.repulse.distance
    }, f.fn.retinaInit = function () {
        f.retina_detect && 1 < window.devicePixelRatio ? (f.canvas.pxratio = window.devicePixelRatio, f.tmp.retina = !0) : (f.canvas.pxratio = 1, f.tmp.retina = !1), f.canvas.w = f.canvas.el.offsetWidth * f.canvas.pxratio, f.canvas.h = f.canvas.el.offsetHeight * f.canvas.pxratio, f.particles.size.value = f.tmp.obj.size_value * f.canvas.pxratio, f.particles.size.anim.speed = f.tmp.obj.size_anim_speed * f.canvas.pxratio, f.particles.move.speed = f.tmp.obj.move_speed * f.canvas.pxratio, f.particles.line_linked.distance = f.tmp.obj.line_linked_distance * f.canvas.pxratio, f.interactivity.modes.grab.distance = f.tmp.obj.mode_grab_distance * f.canvas.pxratio, f.interactivity.modes.bubble.distance = f.tmp.obj.mode_bubble_distance * f.canvas.pxratio, f.particles.line_linked.width = f.tmp.obj.line_linked_width * f.canvas.pxratio, f.interactivity.modes.bubble.size = f.tmp.obj.mode_bubble_size * f.canvas.pxratio, f.interactivity.modes.repulse.distance = f.tmp.obj.mode_repulse_distance * f.canvas.pxratio
    }, f.fn.canvasInit = function () {
        f.canvas.ctx = f.canvas.el.getContext("2d")
    }, f.fn.canvasSize = function () {
        f.canvas.el.width = f.canvas.w, f.canvas.el.height = f.canvas.h, f && f.interactivity.events.resize && window.addEventListener("resize", function () {
            f.canvas.w = f.canvas.el.offsetWidth, f.canvas.h = f.canvas.el.offsetHeight, f.tmp.retina && (f.canvas.w *= f.canvas.pxratio, f.canvas.h *= f.canvas.pxratio), f.canvas.el.width = f.canvas.w, f.canvas.el.height = f.canvas.h, f.particles.move.enable || (f.fn.particlesEmpty(), f.fn.particlesCreate(), f.fn.particlesDraw(), f.fn.vendors.densityAutoParticles()), f.fn.vendors.densityAutoParticles()
        })
    }, f.fn.canvasPaint = function () {
        f.canvas.ctx.fillRect(0, 0, f.canvas.w, f.canvas.h)
    }, f.fn.canvasClear = function () {
        f.canvas.ctx.clearRect(0, 0, f.canvas.w, f.canvas.h)
    }, f.fn.particle = function (e, t, n) {
        if (this.radius = (f.particles.size.random ? Math.random() : 1) * f.particles.size.value, f.particles.size.anim.enable && (this.size_status = !1, this.vs = f.particles.size.anim.speed / 100, f.particles.size.anim.sync || (this.vs = this.vs * Math.random())), this.x = n ? n.x : Math.random() * f.canvas.w, this.y = n ? n.y : Math.random() * f.canvas.h, this.x > f.canvas.w - 2 * this.radius ? this.x = this.x - this.radius : this.x < 2 * this.radius && (this.x = this.x + this.radius), this.y > f.canvas.h - 2 * this.radius ? this.y = this.y - this.radius : this.y < 2 * this.radius && (this.y = this.y + this.radius), f.particles.move.bounce && f.fn.vendors.checkOverlap(this, n), this.color = {}, "object" == typeof e.value)
            if (e.value instanceof Array) {
                var i = e.value[Math.floor(Math.random() * f.particles.color.value.length)];
                this.color.rgb = hexToRgb(i)
            } else null != e.value.r && null != e.value.g && null != e.value.b && (this.color.rgb = {
                r: e.value.r,
                g: e.value.g,
                b: e.value.b
            }), null != e.value.h && null != e.value.s && null != e.value.l && (this.color.hsl = {
                h: e.value.h,
                s: e.value.s,
                l: e.value.l
            });
        else "random" == e.value ? this.color.rgb = {
            r: Math.floor(256 * Math.random()) + 0,
            g: Math.floor(256 * Math.random()) + 0,
            b: Math.floor(256 * Math.random()) + 0
        } : "string" == typeof e.value && (this.color = e, this.color.rgb = hexToRgb(this.color.value));
        this.opacity = (f.particles.opacity.random ? Math.random() : 1) * f.particles.opacity.value, f.particles.opacity.anim.enable && (this.opacity_status = !1, this.vo = f.particles.opacity.anim.speed / 100, f.particles.opacity.anim.sync || (this.vo = this.vo * Math.random()));
        var r = {};
        switch (f.particles.move.direction) {
            case "top":
                r = {
                    x: 0,
                    y: -1
                };
                break;
            case "top-right":
                r = {
                    x: .5,
                    y: -.5
                };
                break;
            case "right":
                r = {
                    x: 1,
                    y: -0
                };
                break;
            case "bottom-right":
                r = {
                    x: .5,
                    y: .5
                };
                break;
            case "bottom":
                r = {
                    x: 0,
                    y: 1
                };
                break;
            case "bottom-left":
                r = {
                    x: -.5,
                    y: 1
                };
                break;
            case "left":
                r = {
                    x: -1,
                    y: 0
                };
                break;
            case "top-left":
                r = {
                    x: -.5,
                    y: -.5
                };
                break;
            default:
                r = {
                    x: 0,
                    y: 0
                }
        }
        f.particles.move.straight ? (this.vx = r.x, this.vy = r.y, f.particles.move.random && (this.vx = this.vx * Math.random(), this.vy = this.vy * Math.random())) : (this.vx = r.x + Math.random() - .5, this.vy = r.y + Math.random() - .5), this.vx_i = this.vx, this.vy_i = this.vy;
        var o = f.particles.shape.type;
        if ("object" == typeof o) {
            if (o instanceof Array) {
                var s = o[Math.floor(Math.random() * o.length)];
                this.shape = s
            }
        } else this.shape = o;
        if ("image" == this.shape) {
            var a = f.particles.shape;
            this.img = {
                src: a.image.src,
                ratio: a.image.width / a.image.height
            }, this.img.ratio || (this.img.ratio = 1), "svg" == f.tmp.img_type && null != f.tmp.source_svg && (f.fn.vendors.createSvgImg(this), f.tmp.pushing && (this.img.loaded = !1))
        }
    }, f.fn.particle.prototype.draw = function () {
        var e = this;
        if (null != e.radius_bubble) var t = e.radius_bubble;
        else t = e.radius;
        if (null != e.opacity_bubble) var n = e.opacity_bubble;
        else n = e.opacity;
        if (e.color.rgb) var i = "rgba(" + e.color.rgb.r + "," + e.color.rgb.g + "," + e.color.rgb.b + "," + n + ")";
        else i = "hsla(" + e.color.hsl.h + "," + e.color.hsl.s + "%," + e.color.hsl.l + "%," + n + ")";
        switch (f.canvas.ctx.fillStyle = i, f.canvas.ctx.beginPath(), e.shape) {
            case "circle":
                f.canvas.ctx.arc(e.x, e.y, t, 0, 2 * Math.PI, !1);
                break;
            case "edge":
                f.canvas.ctx.rect(e.x - t, e.y - t, 2 * t, 2 * t);
                break;
            case "triangle":
                f.fn.vendors.drawShape(f.canvas.ctx, e.x - t, e.y + t / 1.66, 2 * t, 3, 2);
                break;
            case "polygon":
                f.fn.vendors.drawShape(f.canvas.ctx, e.x - t / (f.particles.shape.polygon.nb_sides / 3.5), e.y - t / .76, 2.66 * t / (f.particles.shape.polygon.nb_sides / 3), f.particles.shape.polygon.nb_sides, 1);
                break;
            case "star":
                f.fn.vendors.drawShape(f.canvas.ctx, e.x - 2 * t / (f.particles.shape.polygon.nb_sides / 4), e.y - t / 1.52, 2 * t * 2.66 / (f.particles.shape.polygon.nb_sides / 3), f.particles.shape.polygon.nb_sides, 2);
                break;
            case "image":
                if ("svg" == f.tmp.img_type) var r = e.img.obj;
                else r = f.tmp.img_obj;
                r && f.canvas.ctx.drawImage(r, e.x - t, e.y - t, 2 * t, 2 * t / e.img.ratio)
        }
        f.canvas.ctx.closePath(), 0 < f.particles.shape.stroke.width && (f.canvas.ctx.strokeStyle = f.particles.shape.stroke.color, f.canvas.ctx.lineWidth = f.particles.shape.stroke.width, f.canvas.ctx.stroke()), f.canvas.ctx.fill()
    }, f.fn.particlesCreate = function () {
        for (var e = 0; e < f.particles.number.value; e++) f.particles.array.push(new f.fn.particle(f.particles.color, f.particles.opacity.value))
    }, f.fn.particlesUpdate = function () {
        for (var e = 0; e < f.particles.array.length; e++) {
            var t = f.particles.array[e];
            if (f.particles.move.enable) {
                var n = f.particles.move.speed / 2;
                t.x += t.vx * n, t.y += t.vy * n
            }
            if (f.particles.opacity.anim.enable && (1 == t.opacity_status ? (t.opacity >= f.particles.opacity.value && (t.opacity_status = !1), t.opacity += t.vo) : (t.opacity <= f.particles.opacity.anim.opacity_min && (t.opacity_status = !0), t.opacity -= t.vo), t.opacity < 0 && (t.opacity = 0)), f.particles.size.anim.enable && (1 == t.size_status ? (t.radius >= f.particles.size.value && (t.size_status = !1), t.radius += t.vs) : (t.radius <= f.particles.size.anim.size_min && (t.size_status = !0), t.radius -= t.vs), t.radius < 0 && (t.radius = 0)), "bounce" == f.particles.move.out_mode) var i = {
                x_left: t.radius,
                x_right: f.canvas.w,
                y_top: t.radius,
                y_bottom: f.canvas.h
            };
            else i = {
                x_left: -t.radius,
                x_right: f.canvas.w + t.radius,
                y_top: -t.radius,
                y_bottom: f.canvas.h + t.radius
            };
            switch (t.x - t.radius > f.canvas.w ? (t.x = i.x_left, t.y = Math.random() * f.canvas.h) : t.x + t.radius < 0 && (t.x = i.x_right, t.y = Math.random() * f.canvas.h), t.y - t.radius > f.canvas.h ? (t.y = i.y_top, t.x = Math.random() * f.canvas.w) : t.y + t.radius < 0 && (t.y = i.y_bottom, t.x = Math.random() * f.canvas.w), f.particles.move.out_mode) {
                case "bounce":
                    t.x + t.radius > f.canvas.w ? t.vx = -t.vx : t.x - t.radius < 0 && (t.vx = -t.vx), t.y + t.radius > f.canvas.h ? t.vy = -t.vy : t.y - t.radius < 0 && (t.vy = -t.vy)
            }
            if (isInArray("grab", f.interactivity.events.onhover.mode) && f.fn.modes.grabParticle(t), (isInArray("bubble", f.interactivity.events.onhover.mode) || isInArray("bubble", f.interactivity.events.onclick.mode)) && f.fn.modes.bubbleParticle(t), (isInArray("repulse", f.interactivity.events.onhover.mode) || isInArray("repulse", f.interactivity.events.onclick.mode)) && f.fn.modes.repulseParticle(t), f.particles.line_linked.enable || f.particles.move.attract.enable)
                for (var r = e + 1; r < f.particles.array.length; r++) {
                    var o = f.particles.array[r];
                    f.particles.line_linked.enable && f.fn.interact.linkParticles(t, o), f.particles.move.attract.enable && f.fn.interact.attractParticles(t, o), f.particles.move.bounce && f.fn.interact.bounceParticles(t, o)
                }
        }
    }, f.fn.particlesDraw = function () {
        f.canvas.ctx.clearRect(0, 0, f.canvas.w, f.canvas.h), f.fn.particlesUpdate();
        for (var e = 0; e < f.particles.array.length; e++) f.particles.array[e].draw()
    }, f.fn.particlesEmpty = function () {
        f.particles.array = []
    }, f.fn.particlesRefresh = function () {
        cancelRequestAnimFrame(f.fn.checkAnimFrame), cancelRequestAnimFrame(f.fn.drawAnimFrame), f.tmp.source_svg = void 0, f.tmp.img_obj = void 0, f.tmp.count_svg = 0, f.fn.particlesEmpty(), f.fn.canvasClear(), f.fn.vendors.start()
    }, f.fn.interact.linkParticles = function (e, t) {
        var n = e.x - t.x,
            i = e.y - t.y,
            r = Math.sqrt(n * n + i * i);
        if (r <= f.particles.line_linked.distance) {
            var o = f.particles.line_linked.opacity - r / (1 / f.particles.line_linked.opacity) / f.particles.line_linked.distance;
            if (0 < o) {
                var s = f.particles.line_linked.color_rgb_line;
                f.canvas.ctx.strokeStyle = "rgba(" + s.r + "," + s.g + "," + s.b + "," + o + ")", f.canvas.ctx.lineWidth = f.particles.line_linked.width, f.canvas.ctx.beginPath(), f.canvas.ctx.moveTo(e.x, e.y), f.canvas.ctx.lineTo(t.x, t.y), f.canvas.ctx.stroke(), f.canvas.ctx.closePath()
            }
        }
    }, f.fn.interact.attractParticles = function (e, t) {
        var n = e.x - t.x,
            i = e.y - t.y;
        if (Math.sqrt(n * n + i * i) <= f.particles.line_linked.distance) {
            var r = n / (1e3 * f.particles.move.attract.rotateX),
                o = i / (1e3 * f.particles.move.attract.rotateY);
            e.vx -= r, e.vy -= o, t.vx += r, t.vy += o
        }
    }, f.fn.interact.bounceParticles = function (e, t) {
        var n = e.x - t.x,
            i = e.y - t.y,
            r = Math.sqrt(n * n + i * i);
        e.radius + t.radius >= r && (e.vx = -e.vx, e.vy = -e.vy, t.vx = -t.vx, t.vy = -t.vy)
    }, f.fn.modes.pushParticles = function (e, t) {
        f.tmp.pushing = !0;
        for (var n = 0; n < e; n++) f.particles.array.push(new f.fn.particle(f.particles.color, f.particles.opacity.value, {
            x: t ? t.pos_x : Math.random() * f.canvas.w,
            y: t ? t.pos_y : Math.random() * f.canvas.h
        })), n == e - 1 && (f.particles.move.enable || f.fn.particlesDraw(), f.tmp.pushing = !1)
    }, f.fn.modes.removeParticles = function (e) {
        f.particles.array.splice(0, e), f.particles.move.enable || f.fn.particlesDraw()
    }, f.fn.modes.bubbleParticle = function (a) {
        function e() {
            a.opacity_bubble = a.opacity, a.radius_bubble = a.radius
        }

        function t(e, t, n, i, r) {
            if (e != t)
                if (f.tmp.bubble_duration_end) {
                    if (null != n) s = e + (e - (i - u * (i - e) / f.interactivity.modes.bubble.duration)), "size" == r && (a.radius_bubble = s), "opacity" == r && (a.opacity_bubble = s)
                } else if (c <= f.interactivity.modes.bubble.distance) {
                if (null != n) var o = n;
                else o = i;
                if (o != e) {
                    var s = i - u * (i - e) / f.interactivity.modes.bubble.duration;
                    "size" == r && (a.radius_bubble = s), "opacity" == r && (a.opacity_bubble = s)
                }
            } else "size" == r && (a.radius_bubble = void 0), "opacity" == r && (a.opacity_bubble = void 0)
        }
        if (f.interactivity.events.onhover.enable && isInArray("bubble", f.interactivity.events.onhover.mode)) {
            var n = a.x - f.interactivity.mouse.pos_x,
                i = a.y - f.interactivity.mouse.pos_y,
                r = 1 - (c = Math.sqrt(n * n + i * i)) / f.interactivity.modes.bubble.distance;
            if (c <= f.interactivity.modes.bubble.distance) {
                if (0 <= r && "mousemove" == f.interactivity.status) {
                    if (f.interactivity.modes.bubble.size != f.particles.size.value)
                        if (f.interactivity.modes.bubble.size > f.particles.size.value) {
                            0 <= (s = a.radius + f.interactivity.modes.bubble.size * r) && (a.radius_bubble = s)
                        } else {
                            var o = a.radius - f.interactivity.modes.bubble.size,
                                s = a.radius - o * r;
                            a.radius_bubble = 0 < s ? s : 0
                        } if (f.interactivity.modes.bubble.opacity != f.particles.opacity.value)
                        if (f.interactivity.modes.bubble.opacity > f.particles.opacity.value) {
                            (l = f.interactivity.modes.bubble.opacity * r) > a.opacity && l <= f.interactivity.modes.bubble.opacity && (a.opacity_bubble = l)
                        } else {
                            var l;
                            (l = a.opacity - (f.particles.opacity.value - f.interactivity.modes.bubble.opacity) * r) < a.opacity && l >= f.interactivity.modes.bubble.opacity && (a.opacity_bubble = l)
                        }
                }
            } else e();
            "mouseleave" == f.interactivity.status && e()
        } else if (f.interactivity.events.onclick.enable && isInArray("bubble", f.interactivity.events.onclick.mode)) {
            if (f.tmp.bubble_clicking) {
                n = a.x - f.interactivity.mouse.click_pos_x, i = a.y - f.interactivity.mouse.click_pos_y;
                var c = Math.sqrt(n * n + i * i),
                    u = ((new Date).getTime() - f.interactivity.mouse.click_time) / 1e3;
                u > f.interactivity.modes.bubble.duration && (f.tmp.bubble_duration_end = !0), u > 2 * f.interactivity.modes.bubble.duration && (f.tmp.bubble_clicking = !1, f.tmp.bubble_duration_end = !1)
            }
            f.tmp.bubble_clicking && (t(f.interactivity.modes.bubble.size, f.particles.size.value, a.radius_bubble, a.radius, "size"), t(f.interactivity.modes.bubble.opacity, f.particles.opacity.value, a.opacity_bubble, a.opacity, "opacity"))
        }
    }, f.fn.modes.repulseParticle = function (i) {
        if (f.interactivity.events.onhover.enable && isInArray("repulse", f.interactivity.events.onhover.mode) && "mousemove" == f.interactivity.status) {
            var e = i.x - f.interactivity.mouse.pos_x,
                t = i.y - f.interactivity.mouse.pos_y,
                n = Math.sqrt(e * e + t * t),
                r = e / n,
                o = t / n,
                s = clamp(1 / (l = f.interactivity.modes.repulse.distance) * (-1 * Math.pow(n / l, 2) + 1) * l * 100, 0, 50),
                a = {
                    x: i.x + r * s,
                    y: i.y + o * s
                };
            "bounce" == f.particles.move.out_mode ? (0 < a.x - i.radius && a.x + i.radius < f.canvas.w && (i.x = a.x), 0 < a.y - i.radius && a.y + i.radius < f.canvas.h && (i.y = a.y)) : (i.x = a.x, i.y = a.y)
        } else if (f.interactivity.events.onclick.enable && isInArray("repulse", f.interactivity.events.onclick.mode))
            if (f.tmp.repulse_finish || ++f.tmp.repulse_count == f.particles.array.length && (f.tmp.repulse_finish = !0), f.tmp.repulse_clicking) {
                var l = Math.pow(f.interactivity.modes.repulse.distance / 6, 3),
                    c = f.interactivity.mouse.click_pos_x - i.x,
                    u = f.interactivity.mouse.click_pos_y - i.y,
                    p = c * c + u * u,
                    d = -l / p * 1;
                p <= l && function () {
                    var e = Math.atan2(u, c);
                    if (i.vx = d * Math.cos(e), i.vy = d * Math.sin(e), "bounce" == f.particles.move.out_mode) {
                        var t = i.x + i.vx,
                            n = i.y + i.vy;
                        t + i.radius > f.canvas.w ? i.vx = -i.vx : t - i.radius < 0 && (i.vx = -i.vx), n + i.radius > f.canvas.h ? i.vy = -i.vy : n - i.radius < 0 && (i.vy = -i.vy)
                    }
                }()
            } else 0 == f.tmp.repulse_clicking && (i.vx = i.vx_i, i.vy = i.vy_i)
    }, f.fn.modes.grabParticle = function (e) {
        if (f.interactivity.events.onhover.enable && "mousemove" == f.interactivity.status) {
            var t = e.x - f.interactivity.mouse.pos_x,
                n = e.y - f.interactivity.mouse.pos_y,
                i = Math.sqrt(t * t + n * n);
            if (i <= f.interactivity.modes.grab.distance) {
                var r = f.interactivity.modes.grab.line_linked.opacity - i / (1 / f.interactivity.modes.grab.line_linked.opacity) / f.interactivity.modes.grab.distance;
                if (0 < r) {
                    var o = f.particles.line_linked.color_rgb_line;
                    f.canvas.ctx.strokeStyle = "rgba(" + o.r + "," + o.g + "," + o.b + "," + r + ")", f.canvas.ctx.lineWidth = f.particles.line_linked.width, f.canvas.ctx.beginPath(), f.canvas.ctx.moveTo(e.x, e.y), f.canvas.ctx.lineTo(f.interactivity.mouse.pos_x, f.interactivity.mouse.pos_y), f.canvas.ctx.stroke(), f.canvas.ctx.closePath()
                }
            }
        }
    }, f.fn.vendors.eventsListeners = function () {
        "window" == f.interactivity.detect_on ? f.interactivity.el = window : f.interactivity.el = f.canvas.el, (f.interactivity.events.onhover.enable || f.interactivity.events.onclick.enable) && (f.interactivity.el.addEventListener("mousemove", function (e) {
            if (f.interactivity.el == window) var t = e.clientX,
                n = e.clientY;
            else t = e.offsetX || e.clientX, n = e.offsetY || e.clientY;
            f.interactivity.mouse.pos_x = t, f.interactivity.mouse.pos_y = n, f.tmp.retina && (f.interactivity.mouse.pos_x *= f.canvas.pxratio, f.interactivity.mouse.pos_y *= f.canvas.pxratio), f.interactivity.status = "mousemove"
        }), f.interactivity.el.addEventListener("mouseleave", function (e) {
            f.interactivity.mouse.pos_x = null, f.interactivity.mouse.pos_y = null, f.interactivity.status = "mouseleave"
        })), f.interactivity.events.onclick.enable && f.interactivity.el.addEventListener("click", function () {
            if (f.interactivity.mouse.click_pos_x = f.interactivity.mouse.pos_x, f.interactivity.mouse.click_pos_y = f.interactivity.mouse.pos_y, f.interactivity.mouse.click_time = (new Date).getTime(), f.interactivity.events.onclick.enable) switch (f.interactivity.events.onclick.mode) {
                case "push":
                    f.particles.move.enable ? f.fn.modes.pushParticles(f.interactivity.modes.push.particles_nb, f.interactivity.mouse) : 1 == f.interactivity.modes.push.particles_nb ? f.fn.modes.pushParticles(f.interactivity.modes.push.particles_nb, f.interactivity.mouse) : 1 < f.interactivity.modes.push.particles_nb && f.fn.modes.pushParticles(f.interactivity.modes.push.particles_nb);
                    break;
                case "remove":
                    f.fn.modes.removeParticles(f.interactivity.modes.remove.particles_nb);
                    break;
                case "bubble":
                    f.tmp.bubble_clicking = !0;
                    break;
                case "repulse":
                    f.tmp.repulse_clicking = !0, f.tmp.repulse_count = 0, f.tmp.repulse_finish = !1, setTimeout(function () {
                        f.tmp.repulse_clicking = !1
                    }, 1e3 * f.interactivity.modes.repulse.duration)
            }
        })
    }, f.fn.vendors.densityAutoParticles = function () {
        if (f.particles.number.density.enable) {
            var e = f.canvas.el.width * f.canvas.el.height / 1e3;
            f.tmp.retina && (e /= 2 * f.canvas.pxratio);
            var t = e * f.particles.number.value / f.particles.number.density.value_area,
                n = f.particles.array.length - t;
            n < 0 ? f.fn.modes.pushParticles(Math.abs(n)) : f.fn.modes.removeParticles(n)
        }
    }, f.fn.vendors.checkOverlap = function (e, t) {
        for (var n = 0; n < f.particles.array.length; n++) {
            var i = f.particles.array[n],
                r = e.x - i.x,
                o = e.y - i.y;
            Math.sqrt(r * r + o * o) <= e.radius + i.radius && (e.x = t ? t.x : Math.random() * f.canvas.w, e.y = t ? t.y : Math.random() * f.canvas.h, f.fn.vendors.checkOverlap(e))
        }
    }, f.fn.vendors.createSvgImg = function (o) {
        var e = f.tmp.source_svg.replace(/#([0-9A-F]{3,6})/gi, function (e, t, n, i) {
                if (o.color.rgb) var r = "rgba(" + o.color.rgb.r + "," + o.color.rgb.g + "," + o.color.rgb.b + "," + o.opacity + ")";
                else r = "hsla(" + o.color.hsl.h + "," + o.color.hsl.s + "%," + o.color.hsl.l + "%," + o.opacity + ")";
                return r
            }),
            t = new Blob([e], {
                type: "image/svg+xml;charset=utf-8"
            }),
            n = window.URL || window.webkitURL || window,
            i = n.createObjectURL(t),
            r = new Image;
        r.addEventListener("load", function () {
            o.img.obj = r, o.img.loaded = !0, n.revokeObjectURL(i), f.tmp.count_svg++
        }), r.src = i
    }, f.fn.vendors.destroypJS = function () {
        cancelAnimationFrame(f.fn.drawAnimFrame), n.remove(), pJSDom = null
    }, f.fn.vendors.drawShape = function (e, t, n, i, r, o) {
        var s = r * o,
            a = r / o,
            l = 180 * (a - 2) / a,
            c = Math.PI - Math.PI * l / 180;
        e.save(), e.beginPath(), e.translate(t, n), e.moveTo(0, 0);
        for (var u = 0; u < s; u++) e.lineTo(i, 0), e.translate(i, 0), e.rotate(c);
        e.fill(), e.restore()
    }, f.fn.vendors.exportImg = function () {
        window.open(f.canvas.el.toDataURL("image/png"), "_blank")
    }, f.fn.vendors.loadImg = function (e) {
        if (f.tmp.img_error = void 0, "" != f.particles.shape.image.src)
            if ("svg" == e) {
                var t = new XMLHttpRequest;
                t.open("GET", f.particles.shape.image.src), t.onreadystatechange = function (e) {
                    4 == t.readyState && (200 == t.status ? (f.tmp.source_svg = e.currentTarget.response, f.fn.vendors.checkBeforeDraw()) : (console.log("Error pJS - Image not found"), f.tmp.img_error = !0))
                }, t.send()
            } else {
                var n = new Image;
                n.addEventListener("load", function () {
                    f.tmp.img_obj = n, f.fn.vendors.checkBeforeDraw()
                }), n.src = f.particles.shape.image.src
            }
        else console.log("Error pJS - No image.src"), f.tmp.img_error = !0
    }, f.fn.vendors.draw = function () {
        "image" == f.particles.shape.type ? "svg" == f.tmp.img_type ? f.tmp.count_svg >= f.particles.number.value ? (f.fn.particlesDraw(), f.particles.move.enable ? f.fn.drawAnimFrame = requestAnimFrame(f.fn.vendors.draw) : cancelRequestAnimFrame(f.fn.drawAnimFrame)) : f.tmp.img_error || (f.fn.drawAnimFrame = requestAnimFrame(f.fn.vendors.draw)) : null != f.tmp.img_obj ? (f.fn.particlesDraw(), f.particles.move.enable ? f.fn.drawAnimFrame = requestAnimFrame(f.fn.vendors.draw) : cancelRequestAnimFrame(f.fn.drawAnimFrame)) : f.tmp.img_error || (f.fn.drawAnimFrame = requestAnimFrame(f.fn.vendors.draw)) : (f.fn.particlesDraw(), f.particles.move.enable ? f.fn.drawAnimFrame = requestAnimFrame(f.fn.vendors.draw) : cancelRequestAnimFrame(f.fn.drawAnimFrame))
    }, f.fn.vendors.checkBeforeDraw = function () {
        "image" == f.particles.shape.type ? "svg" == f.tmp.img_type && null == f.tmp.source_svg ? f.tmp.checkAnimFrame = requestAnimFrame(check) : (cancelRequestAnimFrame(f.tmp.checkAnimFrame), f.tmp.img_error || (f.fn.vendors.init(), f.fn.vendors.draw())) : (f.fn.vendors.init(), f.fn.vendors.draw())
    }, f.fn.vendors.init = function () {
        f.fn.retinaInit(), f.fn.canvasInit(), f.fn.canvasSize(), f.fn.canvasPaint(), f.fn.particlesCreate(), f.fn.vendors.densityAutoParticles(), f.particles.line_linked.color_rgb_line = hexToRgb(f.particles.line_linked.color)
    }, f.fn.vendors.start = function () {
        isInArray("image", f.particles.shape.type) ? (f.tmp.img_type = f.particles.shape.image.src.substr(f.particles.shape.image.src.length - 3), f.fn.vendors.loadImg(f.tmp.img_type)) : f.fn.vendors.checkBeforeDraw()
    }, f.fn.vendors.eventsListeners(), f.fn.vendors.start()
};
Object.deepExtend = function (e, t) {
    for (var n in t) t[n] && t[n].constructor && t[n].constructor === Object ? (e[n] = e[n] || {}, arguments.callee(e[n], t[n])) : e[n] = t[n];
    return e
}, window.requestAnimFrame = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function (e) {
    window.setTimeout(e, 1e3 / 60)
}, window.cancelRequestAnimFrame = window.cancelAnimationFrame || window.webkitCancelRequestAnimationFrame || window.mozCancelRequestAnimationFrame || window.oCancelRequestAnimationFrame || window.msCancelRequestAnimationFrame || clearTimeout, window.pJSDom = [], window.particlesJS = function (e, t) {
    "string" != typeof e && (t = e, e = "particles-js"), e || (e = "particles-js");
    var n = document.getElementById(e),
        i = "particles-js-canvas-el",
        r = n.getElementsByClassName(i);
    if (r.length)
        for (; 0 < r.length;) n.removeChild(r[0]);
    var o = document.createElement("canvas");
    o.className = i, o.style.width = "100%", o.style.height = "100%", null != document.getElementById(e).appendChild(o) && pJSDom.push(new pJS(e, t))
}, window.particlesJS.load = function (n, e, i) {
    var r = new XMLHttpRequest;
    r.open("GET", e), r.onreadystatechange = function (e) {
        if (4 == r.readyState)
            if (200 == r.status) {
                var t = JSON.parse(e.currentTarget.response);
                window.particlesJS(n, t), i && i()
            } else console.log("Error pJS - XMLHttpRequest status: " + r.status), console.log("Error pJS - File config not found")
    }, r.send()
}, $(document).ready(function () {
    particlesJS.load("particles-js", "/assets/particles.json", function () {}), particlesJS.load("particles-js-inline", "/assets/particlesinline.json", function () {})
});

(function () {
    // Vertical Timeline - by CodyHouse.co
    function VerticalTimeline(element) {
        this.element = element;
        this.blocks = this.element.getElementsByClassName("js-cd-block");
        this.images = this.element.getElementsByClassName("js-cd-img");
        this.contents = this.element.getElementsByClassName("js-cd-content");
        this.offset = 0.8;
        this.hideBlocks();
    };

    VerticalTimeline.prototype.hideBlocks = function () {
        //hide timeline blocks which are outside the viewport
        if (!"classList" in document.documentElement) {
            return;
        }
        var self = this;
        for (var i = 0; i < this.blocks.length; i++) {
            (function (i) {
                if (self.blocks[i].getBoundingClientRect().top > window.innerHeight * self.offset) {
                    self.images[i].classList.add("cd-is-hidden");
                    self.contents[i].classList.add("cd-is-hidden");
                }
            })(i);
        }
    };

    VerticalTimeline.prototype.showBlocks = function () {
        if (!"classList" in document.documentElement) {
            return;
        }
        var self = this;
        for (var i = 0; i < this.blocks.length; i++) {
            (function (i) {
                if (self.contents[i].classList.contains("cd-is-hidden") && self.blocks[i].getBoundingClientRect().top <= window.innerHeight * self.offset) {
                    // add bounce-in animation
                    self.images[i].classList.add("cd-timeline__img--bounce-in");
                    self.contents[i].classList.add("cd-timeline__content--bounce-in");
                    self.images[i].classList.remove("cd-is-hidden");
                    self.contents[i].classList.remove("cd-is-hidden");
                }
            })(i);
        }
    };

    var verticalTimelines = document.getElementsByClassName("js-cd-timeline"),
        verticalTimelinesArray = [],
        scrolling = false;
    if (verticalTimelines.length > 0) {
        for (var i = 0; i < verticalTimelines.length; i++) {
            (function (i) {
                verticalTimelinesArray.push(new VerticalTimeline(verticalTimelines[i]));
            })(i);
        }

        //show timeline blocks on scrolling
        window.addEventListener("scroll", function (event) {
            if (!scrolling) {
                scrolling = true;
                (!window.requestAnimationFrame) ? setTimeout(checkTimelineScroll, 250): window.requestAnimationFrame(checkTimelineScroll);
            }
        });
    }

    function checkTimelineScroll() {
        verticalTimelinesArray.forEach(function (timeline) {
            timeline.showBlocks();
        });
        scrolling = false;
    };
})();