function toObject(a, b) { for (var c = {}, d = 0; d < a.length; d++) c[a[d]] = b[d]; return c }! function(a, b, c) {
    function d(a, b) { return typeof a === b }

    function e() {
        var a, b, c, e, f, g, h;
        for (var i in k)
            if (k.hasOwnProperty(i)) {
                if (a = [], b = k[i], b.name && (a.push(b.name.toLowerCase()), b.options && b.options.aliases && b.options.aliases.length))
                    for (c = 0; c < b.options.aliases.length; c++) a.push(b.options.aliases[c].toLowerCase());
                for (e = d(b.fn, "function") ? b.fn() : b.fn, f = 0; f < a.length; f++) g = a[f], h = g.split("."), 1 === h.length ? m[h[0]] = e : (!m[h[0]] || m[h[0]] instanceof Boolean || (m[h[0]] = new Boolean(m[h[0]])), m[h[0]][h[1]] = e), j.push((e ? "" : "no-") + h.join("-"))
            }
    }

    function f(a) {
        var b = n.className,
            c = m._config.classPrefix || "";
        if (o && (b = b.baseVal), m._config.enableJSClass) {
            var d = new RegExp("(^|\\s)" + c + "no-js(\\s|$)");
            b = b.replace(d, "$1" + c + "js$2")
        }
        m._config.enableClasses && (b += " " + c + a.join(" " + c), o ? n.className.baseVal = b : n.className = b)
    }

    function g() { return "function" != typeof b.createElement ? b.createElement(arguments[0]) : o ? b.createElementNS.call(b, "http://www.w3.org/2000/svg", arguments[0]) : b.createElement.apply(b, arguments) }

    function h() { var a = b.body; return a || (a = g(o ? "svg" : "body"), a.fake = !0), a }

    function i(a, c, d, e) {
        var f, i, j, k, l = "modernizr",
            m = g("div"),
            o = h();
        if (parseInt(d, 10))
            for (; d--;) j = g("div"), j.id = e ? e[d] : l + (d + 1), m.appendChild(j);
        return f = g("style"), f.type = "text/css", f.id = "s" + l, (o.fake ? o : m).appendChild(f), o.appendChild(m), f.styleSheet ? f.styleSheet.cssText = a : f.appendChild(b.createTextNode(a)), m.id = l, o.fake && (o.style.background = "", o.style.overflow = "hidden", k = n.style.overflow, n.style.overflow = "hidden", n.appendChild(o)), i = c(m, a), o.fake ? (o.parentNode.removeChild(o), n.style.overflow = k, n.offsetHeight) : m.parentNode.removeChild(m), !!i
    }
    var j = [],
        k = [],
        l = {
            _version: "3.3.1",
            _config: { classPrefix: "", enableClasses: !0, enableJSClass: !0, usePrefixes: !0 },
            _q: [],
            on: function(a, b) {
                var c = this;
                setTimeout(function() { b(c[a]) }, 0)
            },
            addTest: function(a, b, c) { k.push({ name: a, fn: b, options: c }) },
            addAsyncTest: function(a) { k.push({ name: null, fn: a }) }
        },
        m = function() {};
    m.prototype = l, m = new m;
    var n = b.documentElement,
        o = "svg" === n.nodeName.toLowerCase(),
        p = l._config.usePrefixes ? " -webkit- -moz- -o- -ms- ".split(" ") : [];
    l._prefixes = p;
    var q = l.testStyles = i;
    m.addTest("touchevents", function() {
        var c;
        if ("ontouchstart" in a || a.DocumentTouch && b instanceof DocumentTouch) c = !0;
        else {
            var d = ["@media (", p.join("touch-enabled),("), "heartz", ")", "{#modernizr{top:9px;position:absolute}}"].join("");
            q(d, function(a) { c = 9 === a.offsetTop })
        }
        return c
    }), e(), f(j), delete l.addTest, delete l.addAsyncTest;
    for (var r = 0; r < m._q.length; r++) m._q[r]();
    a.Modernizr = m
}(window, document),
function() {
    var a, b, c, d, e, f = function(a, b) { return function() { return a.apply(b, arguments) } },
        g = [].indexOf || function(a) {
            for (var b = 0, c = this.length; c > b; b++)
                if (b in this && this[b] === a) return b;
            return -1
        };
    b = function() {
        function a() {}
        return a.prototype.extend = function(a, b) { var c, d; for (c in b) d = b[c], null == a[c] && (a[c] = d); return a }, a.prototype.isMobile = function(a) { return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(a) }, a.prototype.createEvent = function(a, b, c, d) { var e; return null == b && (b = !1), null == c && (c = !1), null == d && (d = null), null != document.createEvent ? (e = document.createEvent("CustomEvent"), e.initCustomEvent(a, b, c, d)) : null != document.createEventObject ? (e = document.createEventObject(), e.eventType = a) : e.eventName = a, e }, a.prototype.emitEvent = function(a, b) { return null != a.dispatchEvent ? a.dispatchEvent(b) : b in (null != a) ? a[b]() : "on" + b in (null != a) ? a["on" + b]() : void 0 }, a.prototype.addEvent = function(a, b, c) { return null != a.addEventListener ? a.addEventListener(b, c, !1) : null != a.attachEvent ? a.attachEvent("on" + b, c) : a[b] = c }, a.prototype.removeEvent = function(a, b, c) { return null != a.removeEventListener ? a.removeEventListener(b, c, !1) : null != a.detachEvent ? a.detachEvent("on" + b, c) : delete a[b] }, a.prototype.innerHeight = function() { return "innerHeight" in window ? window.innerHeight : document.documentElement.clientHeight }, a
    }(), c = this.WeakMap || this.MozWeakMap || (c = function() {
        function a() { this.keys = [], this.values = [] }
        return a.prototype.get = function(a) {
            var b, c, d, e, f;
            for (f = this.keys, b = d = 0, e = f.length; e > d; b = ++d)
                if (c = f[b], c === a) return this.values[b]
        }, a.prototype.set = function(a, b) {
            var c, d, e, f, g;
            for (g = this.keys, c = e = 0, f = g.length; f > e; c = ++e)
                if (d = g[c], d === a) return void(this.values[c] = b);
            return this.keys.push(a), this.values.push(b)
        }, a
    }()), a = this.MutationObserver || this.WebkitMutationObserver || this.MozMutationObserver || (a = function() {
        function a() { "undefined" != typeof console && null !== console && console.warn("MutationObserver is not supported by your browser."), "undefined" != typeof console && null !== console && console.warn("WOW.js cannot detect dom mutations, please call .sync() after loading new content.") }
        return a.notSupported = !0, a.prototype.observe = function() {}, a
    }()), d = this.getComputedStyle || function(a) { return this.getPropertyValue = function(b) { var c; return "float" === b && (b = "styleFloat"), e.test(b) && b.replace(e, function(a, b) { return b.toUpperCase() }), (null != (c = a.currentStyle) ? c[b] : void 0) || null }, this }, e = /(\-([a-z]){1})/g, this.WOW = function() {
        function e(a) { null == a && (a = {}), this.scrollCallback = f(this.scrollCallback, this), this.scrollHandler = f(this.scrollHandler, this), this.resetAnimation = f(this.resetAnimation, this), this.start = f(this.start, this), this.scrolled = !0, this.config = this.util().extend(a, this.defaults), null != a.scrollContainer && (this.config.scrollContainer = document.querySelector(a.scrollContainer)), this.animationNameCache = new c, this.wowEvent = this.util().createEvent(this.config.boxClass) }
        return e.prototype.defaults = { boxClass: "wow", animateClass: "animated", offset: 0, mobile: !0, live: !0, callback: null, scrollContainer: null }, e.prototype.init = function() { var a; return this.element = window.document.documentElement, "interactive" === (a = document.readyState) || "complete" === a ? this.start() : this.util().addEvent(document, "DOMContentLoaded", this.start), this.finished = [] }, e.prototype.start = function() {
            var b, c, d, e;
            if (this.stopped = !1, this.boxes = function() { var a, c, d, e; for (d = this.element.querySelectorAll("." + this.config.boxClass), e = [], a = 0, c = d.length; c > a; a++) b = d[a], e.push(b); return e }.call(this), this.all = function() { var a, c, d, e; for (d = this.boxes, e = [], a = 0, c = d.length; c > a; a++) b = d[a], e.push(b); return e }.call(this), this.boxes.length)
                if (this.disabled()) this.resetStyle();
                else
                    for (e = this.boxes, c = 0, d = e.length; d > c; c++) b = e[c], this.applyStyle(b, !0);
            return this.disabled() || (this.util().addEvent(this.config.scrollContainer || window, "scroll", this.scrollHandler), this.util().addEvent(window, "resize", this.scrollHandler), this.interval = setInterval(this.scrollCallback, 50)), this.config.live ? new a(function(a) { return function(b) { var c, d, e, f, g; for (g = [], c = 0, d = b.length; d > c; c++) f = b[c], g.push(function() { var a, b, c, d; for (c = f.addedNodes || [], d = [], a = 0, b = c.length; b > a; a++) e = c[a], d.push(this.doSync(e)); return d }.call(a)); return g } }(this)).observe(document.body, { childList: !0, subtree: !0 }) : void 0
        }, e.prototype.stop = function() { return this.stopped = !0, this.util().removeEvent(this.config.scrollContainer || window, "scroll", this.scrollHandler), this.util().removeEvent(window, "resize", this.scrollHandler), null != this.interval ? clearInterval(this.interval) : void 0 }, e.prototype.sync = function() { return a.notSupported ? this.doSync(this.element) : void 0 }, e.prototype.doSync = function(a) { var b, c, d, e, f; if (null == a && (a = this.element), 1 === a.nodeType) { for (a = a.parentNode || a, e = a.querySelectorAll("." + this.config.boxClass), f = [], c = 0, d = e.length; d > c; c++) b = e[c], g.call(this.all, b) < 0 ? (this.boxes.push(b), this.all.push(b), this.stopped || this.disabled() ? this.resetStyle() : this.applyStyle(b, !0), f.push(this.scrolled = !0)) : f.push(void 0); return f } }, e.prototype.show = function(a) { return this.applyStyle(a), a.className = a.className + " " + this.config.animateClass, null != this.config.callback && this.config.callback(a), this.util().emitEvent(a, this.wowEvent), this.util().addEvent(a, "animationend", this.resetAnimation), this.util().addEvent(a, "oanimationend", this.resetAnimation), this.util().addEvent(a, "webkitAnimationEnd", this.resetAnimation), this.util().addEvent(a, "MSAnimationEnd", this.resetAnimation), a }, e.prototype.applyStyle = function(a, b) { var c, d, e; return d = a.getAttribute("data-wow-duration"), c = a.getAttribute("data-wow-delay"), e = a.getAttribute("data-wow-iteration"), this.animate(function(f) { return function() { return f.customStyle(a, b, d, c, e) } }(this)) }, e.prototype.animate = function() { return "requestAnimationFrame" in window ? function(a) { return window.requestAnimationFrame(a) } : function(a) { return a() } }(), e.prototype.resetStyle = function() { var a, b, c, d, e; for (d = this.boxes, e = [], b = 0, c = d.length; c > b; b++) a = d[b], e.push(a.style.visibility = "visible"); return e }, e.prototype.resetAnimation = function(a) { var b; return a.type.toLowerCase().indexOf("animationend") >= 0 ? (b = a.target || a.srcElement, b.className = b.className.replace(this.config.animateClass, "").trim()) : void 0 }, e.prototype.customStyle = function(a, b, c, d, e) { return b && this.cacheAnimationName(a), a.style.visibility = b ? "hidden" : "visible", c && this.vendorSet(a.style, { animationDuration: c }), d && this.vendorSet(a.style, { animationDelay: d }), e && this.vendorSet(a.style, { animationIterationCount: e }), this.vendorSet(a.style, { animationName: b ? "none" : this.cachedAnimationName(a) }), a }, e.prototype.vendors = ["moz", "webkit"], e.prototype.vendorSet = function(a, b) {
            var c, d, e, f;
            d = [];
            for (c in b) e = b[c], a["" + c] = e, d.push(function() { var b, d, g, h; for (g = this.vendors, h = [], b = 0, d = g.length; d > b; b++) f = g[b], h.push(a["" + f + c.charAt(0).toUpperCase() + c.substr(1)] = e); return h }.call(this));
            return d
        }, e.prototype.vendorCSS = function(a, b) { var c, e, f, g, h, i; for (h = d(a), g = h.getPropertyCSSValue(b), f = this.vendors, c = 0, e = f.length; e > c; c++) i = f[c], g = g || h.getPropertyCSSValue("-" + i + "-" + b); return g }, e.prototype.animationName = function(a) { var b; try { b = this.vendorCSS(a, "animation-name").cssText } catch (c) { b = d(a).getPropertyValue("animation-name") } return "none" === b ? "" : b }, e.prototype.cacheAnimationName = function(a) { return this.animationNameCache.set(a, this.animationName(a)) }, e.prototype.cachedAnimationName = function(a) { return this.animationNameCache.get(a) }, e.prototype.scrollHandler = function() { return this.scrolled = !0 }, e.prototype.scrollCallback = function() { var a; return !this.scrolled || (this.scrolled = !1, this.boxes = function() { var b, c, d, e; for (d = this.boxes, e = [], b = 0, c = d.length; c > b; b++) a = d[b], a && (this.isVisible(a) ? this.show(a) : e.push(a)); return e }.call(this), this.boxes.length || this.config.live) ? void 0 : this.stop() }, e.prototype.offsetTop = function(a) { for (var b; void 0 === a.offsetTop;) a = a.parentNode; for (b = a.offsetTop; a = a.offsetParent;) b += a.offsetTop; return b }, e.prototype.isVisible = function(a) { var b, c, d, e, f; return c = a.getAttribute("data-wow-offset") || this.config.offset, f = this.config.scrollContainer && this.config.scrollContainer.scrollTop || window.pageYOffset, e = f + Math.min(this.element.clientHeight, this.util().innerHeight()) - c, d = this.offsetTop(a), b = d + a.clientHeight, e >= d && b >= f }, e.prototype.util = function() { return null != this._util ? this._util : this._util = new b }, e.prototype.disabled = function() { return !this.config.mobile && this.util().isMobile(navigator.userAgent) }, e
    }()
}.call(this), ! function(a, b) { "object" == typeof module && "object" == typeof module.exports ? module.exports = a.document ? b(a, !0) : function(a) { if (!a.document) throw new Error("jQuery requires a window with a document"); return b(a) } : b(a) }("undefined" != typeof window ? window : this, function(a, b) {
        function c(a) {
            var b = a.length,
                c = ea.type(a);
            return "function" !== c && !ea.isWindow(a) && (!(1 !== a.nodeType || !b) || ("array" === c || 0 === b || "number" == typeof b && b > 0 && b - 1 in a))
        }

        function d(a, b, c) {
            if (ea.isFunction(b)) return ea.grep(a, function(a, d) { return !!b.call(a, d, a) !== c });
            if (b.nodeType) return ea.grep(a, function(a) { return a === b !== c });
            if ("string" == typeof b) {
                if (ma.test(b)) return ea.filter(b, a, c);
                b = ea.filter(b, a)
            }
            return ea.grep(a, function(a) { return ea.inArray(a, b) >= 0 !== c })
        }

        function e(a, b) { do a = a[b]; while (a && 1 !== a.nodeType); return a }

        function f(a) { var b = ua[a] = {}; return ea.each(a.match(ta) || [], function(a, c) { b[c] = !0 }), b }

        function g() { oa.addEventListener ? (oa.removeEventListener("DOMContentLoaded", h, !1), a.removeEventListener("load", h, !1)) : (oa.detachEvent("onreadystatechange", h), a.detachEvent("onload", h)) }

        function h() {
            (oa.addEventListener || "load" === event.type || "complete" === oa.readyState) && (g(), ea.ready())
        }

        function i(a, b, c) {
            if (void 0 === c && 1 === a.nodeType) {
                var d = "data-" + b.replace(za, "-$1").toLowerCase();
                if (c = a.getAttribute(d), "string" == typeof c) {
                    try { c = "true" === c || "false" !== c && ("null" === c ? null : +c + "" === c ? +c : ya.test(c) ? ea.parseJSON(c) : c) } catch (e) {}
                    ea.data(a, b, c)
                } else c = void 0
            }
            return c
        }

        function j(a) {
            var b;
            for (b in a)
                if (("data" !== b || !ea.isEmptyObject(a[b])) && "toJSON" !== b) return !1;
            return !0
        }

        function k(a, b, c, d) {
            if (ea.acceptData(a)) {
                var e, f, g = ea.expando,
                    h = a.nodeType,
                    i = h ? ea.cache : a,
                    j = h ? a[g] : a[g] && g;
                if (j && i[j] && (d || i[j].data) || void 0 !== c || "string" != typeof b) return j || (j = h ? a[g] = W.pop() || ea.guid++ : g), i[j] || (i[j] = h ? {} : { toJSON: ea.noop }), ("object" == typeof b || "function" == typeof b) && (d ? i[j] = ea.extend(i[j], b) : i[j].data = ea.extend(i[j].data, b)), f = i[j], d || (f.data || (f.data = {}), f = f.data), void 0 !== c && (f[ea.camelCase(b)] = c), "string" == typeof b ? (e = f[b], null == e && (e = f[ea.camelCase(b)])) : e = f, e
            }
        }

        function l(a, b, c) {
            if (ea.acceptData(a)) {
                var d, e, f = a.nodeType,
                    g = f ? ea.cache : a,
                    h = f ? a[ea.expando] : ea.expando;
                if (g[h]) { if (b && (d = c ? g[h] : g[h].data)) { ea.isArray(b) ? b = b.concat(ea.map(b, ea.camelCase)) : b in d ? b = [b] : (b = ea.camelCase(b), b = b in d ? [b] : b.split(" ")), e = b.length; for (; e--;) delete d[b[e]]; if (c ? !j(d) : !ea.isEmptyObject(d)) return }(c || (delete g[h].data, j(g[h]))) && (f ? ea.cleanData([a], !0) : ca.deleteExpando || g != g.window ? delete g[h] : g[h] = null) }
            }
        }

        function m() { return !0 }

        function n() { return !1 }

        function o() { try { return oa.activeElement } catch (a) {} }

        function p(a) {
            var b = Ka.split("|"),
                c = a.createDocumentFragment();
            if (c.createElement)
                for (; b.length;) c.createElement(b.pop());
            return c
        }

        function q(a, b) {
            var c, d, e = 0,
                f = typeof a.getElementsByTagName !== xa ? a.getElementsByTagName(b || "*") : typeof a.querySelectorAll !== xa ? a.querySelectorAll(b || "*") : void 0;
            if (!f)
                for (f = [], c = a.childNodes || a; null != (d = c[e]); e++) !b || ea.nodeName(d, b) ? f.push(d) : ea.merge(f, q(d, b));
            return void 0 === b || b && ea.nodeName(a, b) ? ea.merge([a], f) : f
        }

        function r(a) { Ea.test(a.type) && (a.defaultChecked = a.checked) }

        function s(a, b) { return ea.nodeName(a, "table") && ea.nodeName(11 !== b.nodeType ? b : b.firstChild, "tr") ? a.getElementsByTagName("tbody")[0] || a.appendChild(a.ownerDocument.createElement("tbody")) : a }

        function t(a) { return a.type = (null !== ea.find.attr(a, "type")) + "/" + a.type, a }

        function u(a) { var b = Va.exec(a.type); return b ? a.type = b[1] : a.removeAttribute("type"), a }

        function v(a, b) { for (var c, d = 0; null != (c = a[d]); d++) ea._data(c, "globalEval", !b || ea._data(b[d], "globalEval")) }

        function w(a, b) {
            if (1 === b.nodeType && ea.hasData(a)) {
                var c, d, e, f = ea._data(a),
                    g = ea._data(b, f),
                    h = f.events;
                if (h) {
                    delete g.handle, g.events = {};
                    for (c in h)
                        for (d = 0, e = h[c].length; e > d; d++) ea.event.add(b, c, h[c][d])
                }
                g.data && (g.data = ea.extend({}, g.data))
            }
        }

        function x(a, b) {
            var c, d, e;
            if (1 === b.nodeType) {
                if (c = b.nodeName.toLowerCase(), !ca.noCloneEvent && b[ea.expando]) {
                    e = ea._data(b);
                    for (d in e.events) ea.removeEvent(b, d, e.handle);
                    b.removeAttribute(ea.expando)
                }
                "script" === c && b.text !== a.text ? (t(b).text = a.text, u(b)) : "object" === c ? (b.parentNode && (b.outerHTML = a.outerHTML), ca.html5Clone && a.innerHTML && !ea.trim(b.innerHTML) && (b.innerHTML = a.innerHTML)) : "input" === c && Ea.test(a.type) ? (b.defaultChecked = b.checked = a.checked, b.value !== a.value && (b.value = a.value)) : "option" === c ? b.defaultSelected = b.selected = a.defaultSelected : ("input" === c || "textarea" === c) && (b.defaultValue = a.defaultValue)
            }
        }

        function y(b, c) {
            var d, e = ea(c.createElement(b)).appendTo(c.body),
                f = a.getDefaultComputedStyle && (d = a.getDefaultComputedStyle(e[0])) ? d.display : ea.css(e[0], "display");
            return e.detach(), f
        }

        function z(a) {
            var b = oa,
                c = _a[a];
            return c || (c = y(a, b), "none" !== c && c || ($a = ($a || ea("<iframe frameborder='0' width='0' height='0'/>")).appendTo(b.documentElement), b = ($a[0].contentWindow || $a[0].contentDocument).document, b.write(), b.close(), c = y(a, b), $a.detach()), _a[a] = c), c
        }

        function A(a, b) { return { get: function() { var c = a(); if (null != c) return c ? void delete this.get : (this.get = b).apply(this, arguments) } } }

        function B(a, b) {
            if (b in a) return b;
            for (var c = b.charAt(0).toUpperCase() + b.slice(1), d = b, e = mb.length; e--;)
                if (b = mb[e] + c, b in a) return b;
            return d
        }

        function C(a, b) { for (var c, d, e, f = [], g = 0, h = a.length; h > g; g++) d = a[g], d.style && (f[g] = ea._data(d, "olddisplay"), c = d.style.display, b ? (f[g] || "none" !== c || (d.style.display = ""), "" === d.style.display && Ca(d) && (f[g] = ea._data(d, "olddisplay", z(d.nodeName)))) : (e = Ca(d), (c && "none" !== c || !e) && ea._data(d, "olddisplay", e ? c : ea.css(d, "display")))); for (g = 0; h > g; g++) d = a[g], d.style && (b && "none" !== d.style.display && "" !== d.style.display || (d.style.display = b ? f[g] || "" : "none")); return a }

        function D(a, b, c) { var d = ib.exec(b); return d ? Math.max(0, d[1] - (c || 0)) + (d[2] || "px") : b }

        function E(a, b, c, d, e) { for (var f = c === (d ? "border" : "content") ? 4 : "width" === b ? 1 : 0, g = 0; 4 > f; f += 2) "margin" === c && (g += ea.css(a, c + Ba[f], !0, e)), d ? ("content" === c && (g -= ea.css(a, "padding" + Ba[f], !0, e)), "margin" !== c && (g -= ea.css(a, "border" + Ba[f] + "Width", !0, e))) : (g += ea.css(a, "padding" + Ba[f], !0, e), "padding" !== c && (g += ea.css(a, "border" + Ba[f] + "Width", !0, e))); return g }

        function F(a, b, c) {
            var d = !0,
                e = "width" === b ? a.offsetWidth : a.offsetHeight,
                f = ab(a),
                g = ca.boxSizing && "border-box" === ea.css(a, "boxSizing", !1, f);
            if (0 >= e || null == e) {
                if (e = bb(a, b, f), (0 > e || null == e) && (e = a.style[b]), db.test(e)) return e;
                d = g && (ca.boxSizingReliable() || e === a.style[b]), e = parseFloat(e) || 0
            }
            return e + E(a, b, c || (g ? "border" : "content"), d, f) + "px"
        }

        function G(a, b, c, d, e) { return new G.prototype.init(a, b, c, d, e) }

        function H() { return setTimeout(function() { nb = void 0 }), nb = ea.now() }

        function I(a, b) {
            var c, d = { height: a },
                e = 0;
            for (b = b ? 1 : 0; 4 > e; e += 2 - b) c = Ba[e], d["margin" + c] = d["padding" + c] = a;
            return b && (d.opacity = d.width = a), d
        }

        function J(a, b, c) {
            for (var d, e = (tb[b] || []).concat(tb["*"]), f = 0, g = e.length; g > f; f++)
                if (d = e[f].call(c, b, a)) return d
        }

        function K(a, b, c) {
            var d, e, f, g, h, i, j, k, l = this,
                m = {},
                n = a.style,
                o = a.nodeType && Ca(a),
                p = ea._data(a, "fxshow");
            c.queue || (h = ea._queueHooks(a, "fx"), null == h.unqueued && (h.unqueued = 0, i = h.empty.fire, h.empty.fire = function() { h.unqueued || i() }), h.unqueued++, l.always(function() { l.always(function() { h.unqueued--, ea.queue(a, "fx").length || h.empty.fire() }) })), 1 === a.nodeType && ("height" in b || "width" in b) && (c.overflow = [n.overflow, n.overflowX, n.overflowY], j = ea.css(a, "display"), k = "none" === j ? ea._data(a, "olddisplay") || z(a.nodeName) : j, "inline" === k && "none" === ea.css(a, "float") && (ca.inlineBlockNeedsLayout && "inline" !== z(a.nodeName) ? n.zoom = 1 : n.display = "inline-block")), c.overflow && (n.overflow = "hidden", ca.shrinkWrapBlocks() || l.always(function() { n.overflow = c.overflow[0], n.overflowX = c.overflow[1], n.overflowY = c.overflow[2] }));
            for (d in b)
                if (e = b[d], pb.exec(e)) {
                    if (delete b[d], f = f || "toggle" === e, e === (o ? "hide" : "show")) {
                        if ("show" !== e || !p || void 0 === p[d]) continue;
                        o = !0
                    }
                    m[d] = p && p[d] || ea.style(a, d)
                } else j = void 0;
            if (ea.isEmptyObject(m)) "inline" === ("none" === j ? z(a.nodeName) : j) && (n.display = j);
            else {
                p ? "hidden" in p && (o = p.hidden) : p = ea._data(a, "fxshow", {}), f && (p.hidden = !o), o ? ea(a).show() : l.done(function() { ea(a).hide() }), l.done(function() {
                    var b;
                    ea._removeData(a, "fxshow");
                    for (b in m) ea.style(a, b, m[b])
                });
                for (d in m) g = J(o ? p[d] : 0, d, l), d in p || (p[d] = g.start, o && (g.end = g.start, g.start = "width" === d || "height" === d ? 1 : 0))
            }
        }

        function L(a, b) {
            var c, d, e, f, g;
            for (c in a)
                if (d = ea.camelCase(c), e = b[d], f = a[c], ea.isArray(f) && (e = f[1], f = a[c] = f[0]), c !== d && (a[d] = f, delete a[c]), g = ea.cssHooks[d], g && "expand" in g) { f = g.expand(f), delete a[d]; for (c in f) c in a || (a[c] = f[c], b[c] = e) } else b[d] = e
        }

        function M(a, b, c) {
            var d, e, f = 0,
                g = sb.length,
                h = ea.Deferred().always(function() { delete i.elem }),
                i = function() { if (e) return !1; for (var b = nb || H(), c = Math.max(0, j.startTime + j.duration - b), d = c / j.duration || 0, f = 1 - d, g = 0, i = j.tweens.length; i > g; g++) j.tweens[g].run(f); return h.notifyWith(a, [j, f, c]), 1 > f && i ? c : (h.resolveWith(a, [j]), !1) },
                j = h.promise({
                    elem: a,
                    props: ea.extend({}, b),
                    opts: ea.extend(!0, { specialEasing: {} }, c),
                    originalProperties: b,
                    originalOptions: c,
                    startTime: nb || H(),
                    duration: c.duration,
                    tweens: [],
                    createTween: function(b, c) { var d = ea.Tween(a, j.opts, b, c, j.opts.specialEasing[b] || j.opts.easing); return j.tweens.push(d), d },
                    stop: function(b) {
                        var c = 0,
                            d = b ? j.tweens.length : 0;
                        if (e) return this;
                        for (e = !0; d > c; c++) j.tweens[c].run(1);
                        return b ? h.resolveWith(a, [j, b]) : h.rejectWith(a, [j, b]), this
                    }
                }),
                k = j.props;
            for (L(k, j.opts.specialEasing); g > f; f++)
                if (d = sb[f].call(j, a, k, j.opts)) return d;
            return ea.map(k, J, j), ea.isFunction(j.opts.start) && j.opts.start.call(a, j), ea.fx.timer(ea.extend(i, { elem: a, anim: j, queue: j.opts.queue })), j.progress(j.opts.progress).done(j.opts.done, j.opts.complete).fail(j.opts.fail).always(j.opts.always)
        }

        function N(a) {
            return function(b, c) {
                "string" != typeof b && (c = b, b = "*");
                var d, e = 0,
                    f = b.toLowerCase().match(ta) || [];
                if (ea.isFunction(c))
                    for (; d = f[e++];) "+" === d.charAt(0) ? (d = d.slice(1) || "*", (a[d] = a[d] || []).unshift(c)) : (a[d] = a[d] || []).push(c)
            }
        }

        function O(a, b, c, d) {
            function e(h) { var i; return f[h] = !0, ea.each(a[h] || [], function(a, h) { var j = h(b, c, d); return "string" != typeof j || g || f[j] ? g ? !(i = j) : void 0 : (b.dataTypes.unshift(j), e(j), !1) }), i }
            var f = {},
                g = a === Rb;
            return e(b.dataTypes[0]) || !f["*"] && e("*")
        }

        function P(a, b) { var c, d, e = ea.ajaxSettings.flatOptions || {}; for (d in b) void 0 !== b[d] && ((e[d] ? a : c || (c = {}))[d] = b[d]); return c && ea.extend(!0, a, c), a }

        function Q(a, b, c) {
            for (var d, e, f, g, h = a.contents, i = a.dataTypes;
                "*" === i[0];) i.shift(), void 0 === e && (e = a.mimeType || b.getResponseHeader("Content-Type"));
            if (e)
                for (g in h)
                    if (h[g] && h[g].test(e)) { i.unshift(g); break }
            if (i[0] in c) f = i[0];
            else {
                for (g in c) {
                    if (!i[0] || a.converters[g + " " + i[0]]) { f = g; break }
                    d || (d = g)
                }
                f = f || d
            }
            return f ? (f !== i[0] && i.unshift(f), c[f]) : void 0
        }

        function R(a, b, c, d) {
            var e, f, g, h, i, j = {},
                k = a.dataTypes.slice();
            if (k[1])
                for (g in a.converters) j[g.toLowerCase()] = a.converters[g];
            for (f = k.shift(); f;)
                if (a.responseFields[f] && (c[a.responseFields[f]] = b), !i && d && a.dataFilter && (b = a.dataFilter(b, a.dataType)), i = f, f = k.shift())
                    if ("*" === f) f = i;
                    else if ("*" !== i && i !== f) {
                if (g = j[i + " " + f] || j["* " + f], !g)
                    for (e in j)
                        if (h = e.split(" "), h[1] === f && (g = j[i + " " + h[0]] || j["* " + h[0]])) { g === !0 ? g = j[e] : j[e] !== !0 && (f = h[0], k.unshift(h[1])); break }
                if (g !== !0)
                    if (g && a["throws"]) b = g(b);
                    else try { b = g(b) } catch (l) { return { state: "parsererror", error: g ? l : "No conversion from " + i + " to " + f } }
            }
            return { state: "success", data: b }
        }

        function S(a, b, c, d) {
            var e;
            if (ea.isArray(b)) ea.each(b, function(b, e) { c || Vb.test(a) ? d(a, e) : S(a + "[" + ("object" == typeof e ? b : "") + "]", e, c, d) });
            else if (c || "object" !== ea.type(b)) d(a, b);
            else
                for (e in b) S(a + "[" + e + "]", b[e], c, d)
        }

        function T() { try { return new a.XMLHttpRequest } catch (b) {} }

        function U() { try { return new a.ActiveXObject("Microsoft.XMLHTTP") } catch (b) {} }

        function V(a) { return ea.isWindow(a) ? a : 9 === a.nodeType && (a.defaultView || a.parentWindow) }
        var W = [],
            X = W.slice,
            Y = W.concat,
            Z = W.push,
            $ = W.indexOf,
            _ = {},
            aa = _.toString,
            ba = _.hasOwnProperty,
            ca = {},
            da = "1.11.2",
            ea = function(a, b) { return new ea.fn.init(a, b) },
            fa = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
            ga = /^-ms-/,
            ha = /-([\da-z])/gi,
            ia = function(a, b) { return b.toUpperCase() };
        ea.fn = ea.prototype = {
            jquery: da,
            constructor: ea,
            selector: "",
            length: 0,
            toArray: function() { return X.call(this) },
            get: function(a) { return null != a ? 0 > a ? this[a + this.length] : this[a] : X.call(this) },
            pushStack: function(a) { var b = ea.merge(this.constructor(), a); return b.prevObject = this, b.context = this.context, b },
            each: function(a, b) { return ea.each(this, a, b) },
            map: function(a) { return this.pushStack(ea.map(this, function(b, c) { return a.call(b, c, b) })) },
            slice: function() { return this.pushStack(X.apply(this, arguments)) },
            first: function() { return this.eq(0) },
            last: function() { return this.eq(-1) },
            eq: function(a) {
                var b = this.length,
                    c = +a + (0 > a ? b : 0);
                return this.pushStack(c >= 0 && b > c ? [this[c]] : [])
            },
            end: function() { return this.prevObject || this.constructor(null) },
            push: Z,
            sort: W.sort,
            splice: W.splice
        }, ea.extend = ea.fn.extend = function() {
            var a, b, c, d, e, f, g = arguments[0] || {},
                h = 1,
                i = arguments.length,
                j = !1;
            for ("boolean" == typeof g && (j = g, g = arguments[h] || {}, h++), "object" == typeof g || ea.isFunction(g) || (g = {}), h === i && (g = this, h--); i > h; h++)
                if (null != (e = arguments[h]))
                    for (d in e) a = g[d], c = e[d], g !== c && (j && c && (ea.isPlainObject(c) || (b = ea.isArray(c))) ? (b ? (b = !1, f = a && ea.isArray(a) ? a : []) : f = a && ea.isPlainObject(a) ? a : {}, g[d] = ea.extend(j, f, c)) : void 0 !== c && (g[d] = c));
            return g
        }, ea.extend({
            expando: "jQuery" + (da + Math.random()).replace(/\D/g, ""),
            isReady: !0,
            error: function(a) { throw new Error(a) },
            noop: function() {},
            isFunction: function(a) { return "function" === ea.type(a) },
            isArray: Array.isArray || function(a) { return "array" === ea.type(a) },
            isWindow: function(a) { return null != a && a == a.window },
            isNumeric: function(a) { return !ea.isArray(a) && a - parseFloat(a) + 1 >= 0 },
            isEmptyObject: function(a) { var b; for (b in a) return !1; return !0 },
            isPlainObject: function(a) {
                var b;
                if (!a || "object" !== ea.type(a) || a.nodeType || ea.isWindow(a)) return !1;
                try { if (a.constructor && !ba.call(a, "constructor") && !ba.call(a.constructor.prototype, "isPrototypeOf")) return !1 } catch (c) { return !1 }
                if (ca.ownLast)
                    for (b in a) return ba.call(a, b);
                for (b in a);
                return void 0 === b || ba.call(a, b)
            },
            type: function(a) { return null == a ? a + "" : "object" == typeof a || "function" == typeof a ? _[aa.call(a)] || "object" : typeof a },
            globalEval: function(b) { b && ea.trim(b) && (a.execScript || function(b) { a.eval.call(a, b) })(b) },
            camelCase: function(a) { return a.replace(ga, "ms-").replace(ha, ia) },
            nodeName: function(a, b) { return a.nodeName && a.nodeName.toLowerCase() === b.toLowerCase() },
            each: function(a, b, d) {
                var e, f = 0,
                    g = a.length,
                    h = c(a);
                if (d) {
                    if (h)
                        for (; g > f && (e = b.apply(a[f], d), e !== !1); f++);
                    else
                        for (f in a)
                            if (e = b.apply(a[f], d), e === !1) break
                } else if (h)
                    for (; g > f && (e = b.call(a[f], f, a[f]), e !== !1); f++);
                else
                    for (f in a)
                        if (e = b.call(a[f], f, a[f]), e === !1) break; return a
            },
            trim: function(a) { return null == a ? "" : (a + "").replace(fa, "") },
            makeArray: function(a, b) { var d = b || []; return null != a && (c(Object(a)) ? ea.merge(d, "string" == typeof a ? [a] : a) : Z.call(d, a)), d },
            inArray: function(a, b, c) {
                var d;
                if (b) {
                    if ($) return $.call(b, a, c);
                    for (d = b.length, c = c ? 0 > c ? Math.max(0, d + c) : c : 0; d > c; c++)
                        if (c in b && b[c] === a) return c
                }
                return -1
            },
            merge: function(a, b) {
                for (var c = +b.length, d = 0, e = a.length; c > d;) a[e++] = b[d++];
                if (c !== c)
                    for (; void 0 !== b[d];) a[e++] = b[d++];
                return a.length = e, a
            },
            grep: function(a, b, c) { for (var d, e = [], f = 0, g = a.length, h = !c; g > f; f++) d = !b(a[f], f), d !== h && e.push(a[f]); return e },
            map: function(a, b, d) {
                var e, f = 0,
                    g = a.length,
                    h = c(a),
                    i = [];
                if (h)
                    for (; g > f; f++) e = b(a[f], f, d), null != e && i.push(e);
                else
                    for (f in a) e = b(a[f], f, d), null != e && i.push(e);
                return Y.apply([], i)
            },
            guid: 1,
            proxy: function(a, b) { var c, d, e; return "string" == typeof b && (e = a[b], b = a, a = e), ea.isFunction(a) ? (c = X.call(arguments, 2), d = function() { return a.apply(b || this, c.concat(X.call(arguments))) }, d.guid = a.guid = a.guid || ea.guid++, d) : void 0 },
            now: function() { return +new Date },
            support: ca
        }), ea.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function(a, b) { _["[object " + b + "]"] = b.toLowerCase() });
        var ja = function(a) {
            function b(a, b, c, d) {
                var e, f, g, h, i, j, l, n, o, p;
                if ((b ? b.ownerDocument || b : O) !== G && F(b), b = b || G, c = c || [], h = b.nodeType, "string" != typeof a || !a || 1 !== h && 9 !== h && 11 !== h) return c;
                if (!d && I) {
                    if (11 !== h && (e = sa.exec(a)))
                        if (g = e[1]) { if (9 === h) { if (f = b.getElementById(g), !f || !f.parentNode) return c; if (f.id === g) return c.push(f), c } else if (b.ownerDocument && (f = b.ownerDocument.getElementById(g)) && M(b, f) && f.id === g) return c.push(f), c } else { if (e[2]) return $.apply(c, b.getElementsByTagName(a)), c; if ((g = e[3]) && v.getElementsByClassName) return $.apply(c, b.getElementsByClassName(g)), c }
                    if (v.qsa && (!J || !J.test(a))) {
                        if (n = l = N, o = b, p = 1 !== h && a, 1 === h && "object" !== b.nodeName.toLowerCase()) {
                            for (j = z(a), (l = b.getAttribute("id")) ? n = l.replace(ua, "\\$&") : b.setAttribute("id", n), n = "[id='" + n + "'] ", i = j.length; i--;) j[i] = n + m(j[i]);
                            o = ta.test(a) && k(b.parentNode) || b, p = j.join(",")
                        }
                        if (p) try { return $.apply(c, o.querySelectorAll(p)), c } catch (q) {} finally { l || b.removeAttribute("id") }
                    }
                }
                return B(a.replace(ia, "$1"), b, c, d)
            }

            function c() {
                function a(c, d) { return b.push(c + " ") > w.cacheLength && delete a[b.shift()], a[c + " "] = d }
                var b = [];
                return a
            }

            function d(a) { return a[N] = !0, a }

            function e(a) { var b = G.createElement("div"); try { return !!a(b) } catch (c) { return !1 } finally { b.parentNode && b.parentNode.removeChild(b), b = null } }

            function f(a, b) { for (var c = a.split("|"), d = a.length; d--;) w.attrHandle[c[d]] = b }

            function g(a, b) {
                var c = b && a,
                    d = c && 1 === a.nodeType && 1 === b.nodeType && (~b.sourceIndex || V) - (~a.sourceIndex || V);
                if (d) return d;
                if (c)
                    for (; c = c.nextSibling;)
                        if (c === b) return -1;
                return a ? 1 : -1
            }

            function h(a) { return function(b) { var c = b.nodeName.toLowerCase(); return "input" === c && b.type === a } }

            function i(a) { return function(b) { var c = b.nodeName.toLowerCase(); return ("input" === c || "button" === c) && b.type === a } }

            function j(a) { return d(function(b) { return b = +b, d(function(c, d) { for (var e, f = a([], c.length, b), g = f.length; g--;) c[e = f[g]] && (c[e] = !(d[e] = c[e])) }) }) }

            function k(a) { return a && "undefined" != typeof a.getElementsByTagName && a }

            function l() {}

            function m(a) { for (var b = 0, c = a.length, d = ""; c > b; b++) d += a[b].value; return d }

            function n(a, b, c) {
                var d = b.dir,
                    e = c && "parentNode" === d,
                    f = Q++;
                return b.first ? function(b, c, f) {
                    for (; b = b[d];)
                        if (1 === b.nodeType || e) return a(b, c, f)
                } : function(b, c, g) {
                    var h, i, j = [P, f];
                    if (g) {
                        for (; b = b[d];)
                            if ((1 === b.nodeType || e) && a(b, c, g)) return !0
                    } else
                        for (; b = b[d];)
                            if (1 === b.nodeType || e) { if (i = b[N] || (b[N] = {}), (h = i[d]) && h[0] === P && h[1] === f) return j[2] = h[2]; if (i[d] = j, j[2] = a(b, c, g)) return !0 }
                }
            }

            function o(a) {
                return a.length > 1 ? function(b, c, d) {
                    for (var e = a.length; e--;)
                        if (!a[e](b, c, d)) return !1;
                    return !0
                } : a[0]
            }

            function p(a, c, d) { for (var e = 0, f = c.length; f > e; e++) b(a, c[e], d); return d }

            function q(a, b, c, d, e) { for (var f, g = [], h = 0, i = a.length, j = null != b; i > h; h++)(f = a[h]) && (!c || c(f, d, e)) && (g.push(f), j && b.push(h)); return g }

            function r(a, b, c, e, f, g) {
                return e && !e[N] && (e = r(e)), f && !f[N] && (f = r(f, g)), d(function(d, g, h, i) {
                    var j, k, l, m = [],
                        n = [],
                        o = g.length,
                        r = d || p(b || "*", h.nodeType ? [h] : h, []),
                        s = !a || !d && b ? r : q(r, m, a, h, i),
                        t = c ? f || (d ? a : o || e) ? [] : g : s;
                    if (c && c(s, t, h, i), e)
                        for (j = q(t, n), e(j, [], h, i), k = j.length; k--;)(l = j[k]) && (t[n[k]] = !(s[n[k]] = l));
                    if (d) {
                        if (f || a) {
                            if (f) {
                                for (j = [], k = t.length; k--;)(l = t[k]) && j.push(s[k] = l);
                                f(null, t = [], j, i)
                            }
                            for (k = t.length; k--;)(l = t[k]) && (j = f ? aa(d, l) : m[k]) > -1 && (d[j] = !(g[j] = l))
                        }
                    } else t = q(t === g ? t.splice(o, t.length) : t), f ? f(null, g, t, i) : $.apply(g, t)
                })
            }

            function s(a) {
                for (var b, c, d, e = a.length, f = w.relative[a[0].type], g = f || w.relative[" "], h = f ? 1 : 0, i = n(function(a) { return a === b }, g, !0), j = n(function(a) { return aa(b, a) > -1 }, g, !0), k = [function(a, c, d) { var e = !f && (d || c !== C) || ((b = c).nodeType ? i(a, c, d) : j(a, c, d)); return b = null, e }]; e > h; h++)
                    if (c = w.relative[a[h].type]) k = [n(o(k), c)];
                    else {
                        if (c = w.filter[a[h].type].apply(null, a[h].matches), c[N]) { for (d = ++h; e > d && !w.relative[a[d].type]; d++); return r(h > 1 && o(k), h > 1 && m(a.slice(0, h - 1).concat({ value: " " === a[h - 2].type ? "*" : "" })).replace(ia, "$1"), c, d > h && s(a.slice(h, d)), e > d && s(a = a.slice(d)), e > d && m(a)) }
                        k.push(c)
                    }
                return o(k)
            }

            function t(a, c) {
                var e = c.length > 0,
                    f = a.length > 0,
                    g = function(d, g, h, i, j) {
                        var k, l, m, n = 0,
                            o = "0",
                            p = d && [],
                            r = [],
                            s = C,
                            t = d || f && w.find.TAG("*", j),
                            u = P += null == s ? 1 : Math.random() || .1,
                            v = t.length;
                        for (j && (C = g !== G && g); o !== v && null != (k = t[o]); o++) {
                            if (f && k) {
                                for (l = 0; m = a[l++];)
                                    if (m(k, g, h)) { i.push(k); break }
                                j && (P = u)
                            }
                            e && ((k = !m && k) && n--, d && p.push(k))
                        }
                        if (n += o, e && o !== n) {
                            for (l = 0; m = c[l++];) m(p, r, g, h);
                            if (d) {
                                if (n > 0)
                                    for (; o--;) p[o] || r[o] || (r[o] = Y.call(i));
                                r = q(r)
                            }
                            $.apply(i, r), j && !d && r.length > 0 && n + c.length > 1 && b.uniqueSort(i)
                        }
                        return j && (P = u, C = s), p
                    };
                return e ? d(g) : g
            }
            var u, v, w, x, y, z, A, B, C, D, E, F, G, H, I, J, K, L, M, N = "sizzle" + 1 * new Date,
                O = a.document,
                P = 0,
                Q = 0,
                R = c(),
                S = c(),
                T = c(),
                U = function(a, b) { return a === b && (E = !0), 0 },
                V = 1 << 31,
                W = {}.hasOwnProperty,
                X = [],
                Y = X.pop,
                Z = X.push,
                $ = X.push,
                _ = X.slice,
                aa = function(a, b) {
                    for (var c = 0, d = a.length; d > c; c++)
                        if (a[c] === b) return c;
                    return -1
                },
                ba = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
                ca = "[\\x20\\t\\r\\n\\f]",
                da = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
                ea = da.replace("w", "w#"),
                fa = "\\[" + ca + "*(" + da + ")(?:" + ca + "*([*^$|!~]?=)" + ca + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + ea + "))|)" + ca + "*\\]",
                ga = ":(" + da + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + fa + ")*)|.*)\\)|)",
                ha = new RegExp(ca + "+", "g"),
                ia = new RegExp("^" + ca + "+|((?:^|[^\\\\])(?:\\\\.)*)" + ca + "+$", "g"),
                ja = new RegExp("^" + ca + "*," + ca + "*"),
                ka = new RegExp("^" + ca + "*([>+~]|" + ca + ")" + ca + "*"),
                la = new RegExp("=" + ca + "*([^\\]'\"]*?)" + ca + "*\\]", "g"),
                ma = new RegExp(ga),
                na = new RegExp("^" + ea + "$"),
                oa = {
                    ID: new RegExp("^#(" + da + ")"),
                    CLASS: new RegExp("^\\.(" + da + ")"),
                    TAG: new RegExp("^(" + da.replace("w", "w*") + ")"),
                    ATTR: new RegExp("^" + fa),
                    PSEUDO: new RegExp("^" + ga),
                    CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + ca + "*(even|odd|(([+-]|)(\\d*)n|)" + ca + "*(?:([+-]|)" + ca + "*(\\d+)|))" + ca + "*\\)|)", "i"),
                    bool: new RegExp("^(?:" + ba + ")$", "i"),
                    needsContext: new RegExp("^" + ca + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + ca + "*((?:-\\d)?\\d*)" + ca + "*\\)|)(?=[^-]|$)", "i")
                },
                pa = /^(?:input|select|textarea|button)$/i,
                qa = /^h\d$/i,
                ra = /^[^{]+\{\s*\[native \w/,
                sa = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
                ta = /[+~]/,
                ua = /'|\\/g,
                va = new RegExp("\\\\([\\da-f]{1,6}" + ca + "?|(" + ca + ")|.)", "ig"),
                wa = function(a, b, c) { var d = "0x" + b - 65536; return d !== d || c ? b : 0 > d ? String.fromCharCode(d + 65536) : String.fromCharCode(d >> 10 | 55296, 1023 & d | 56320) },
                xa = function() { F() };
            try { $.apply(X = _.call(O.childNodes), O.childNodes), X[O.childNodes.length].nodeType } catch (ya) {
                $ = {
                    apply: X.length ? function(a, b) { Z.apply(a, _.call(b)) } : function(a, b) {
                        for (var c = a.length, d = 0; a[c++] = b[d++];);
                        a.length = c - 1
                    }
                }
            }
            v = b.support = {}, y = b.isXML = function(a) { var b = a && (a.ownerDocument || a).documentElement; return !!b && "HTML" !== b.nodeName }, F = b.setDocument = function(a) {
                var b, c, d = a ? a.ownerDocument || a : O;
                return d !== G && 9 === d.nodeType && d.documentElement ? (G = d, H = d.documentElement, c = d.defaultView, c && c !== c.top && (c.addEventListener ? c.addEventListener("unload", xa, !1) : c.attachEvent && c.attachEvent("onunload", xa)), I = !y(d), v.attributes = e(function(a) { return a.className = "i", !a.getAttribute("className") }), v.getElementsByTagName = e(function(a) { return a.appendChild(d.createComment("")), !a.getElementsByTagName("*").length }), v.getElementsByClassName = ra.test(d.getElementsByClassName), v.getById = e(function(a) { return H.appendChild(a).id = N, !d.getElementsByName || !d.getElementsByName(N).length }), v.getById ? (w.find.ID = function(a, b) { if ("undefined" != typeof b.getElementById && I) { var c = b.getElementById(a); return c && c.parentNode ? [c] : [] } }, w.filter.ID = function(a) { var b = a.replace(va, wa); return function(a) { return a.getAttribute("id") === b } }) : (delete w.find.ID, w.filter.ID = function(a) { var b = a.replace(va, wa); return function(a) { var c = "undefined" != typeof a.getAttributeNode && a.getAttributeNode("id"); return c && c.value === b } }), w.find.TAG = v.getElementsByTagName ? function(a, b) { return "undefined" != typeof b.getElementsByTagName ? b.getElementsByTagName(a) : v.qsa ? b.querySelectorAll(a) : void 0 } : function(a, b) {
                    var c, d = [],
                        e = 0,
                        f = b.getElementsByTagName(a);
                    if ("*" === a) { for (; c = f[e++];) 1 === c.nodeType && d.push(c); return d }
                    return f
                }, w.find.CLASS = v.getElementsByClassName && function(a, b) { return I ? b.getElementsByClassName(a) : void 0 }, K = [], J = [], (v.qsa = ra.test(d.querySelectorAll)) && (e(function(a) { H.appendChild(a).innerHTML = "<a id='" + N + "'></a><select id='" + N + "-\f]' msallowcapture=''><option selected=''></option></select>", a.querySelectorAll("[msallowcapture^='']").length && J.push("[*^$]=" + ca + "*(?:''|\"\")"), a.querySelectorAll("[selected]").length || J.push("\\[" + ca + "*(?:value|" + ba + ")"), a.querySelectorAll("[id~=" + N + "-]").length || J.push("~="), a.querySelectorAll(":checked").length || J.push(":checked"), a.querySelectorAll("a#" + N + "+*").length || J.push(".#.+[+~]") }), e(function(a) {
                    var b = d.createElement("input");
                    b.setAttribute("type", "hidden"), a.appendChild(b).setAttribute("name", "D"), a.querySelectorAll("[name=d]").length && J.push("name" + ca + "*[*^$|!~]?="), a.querySelectorAll(":enabled").length || J.push(":enabled", ":disabled"), a.querySelectorAll("*,:x"), J.push(",.*:")
                })), (v.matchesSelector = ra.test(L = H.matches || H.webkitMatchesSelector || H.mozMatchesSelector || H.oMatchesSelector || H.msMatchesSelector)) && e(function(a) { v.disconnectedMatch = L.call(a, "div"), L.call(a, "[s!='']:x"), K.push("!=", ga) }), J = J.length && new RegExp(J.join("|")), K = K.length && new RegExp(K.join("|")), b = ra.test(H.compareDocumentPosition), M = b || ra.test(H.contains) ? function(a, b) {
                    var c = 9 === a.nodeType ? a.documentElement : a,
                        d = b && b.parentNode;
                    return a === d || !(!d || 1 !== d.nodeType || !(c.contains ? c.contains(d) : a.compareDocumentPosition && 16 & a.compareDocumentPosition(d)))
                } : function(a, b) {
                    if (b)
                        for (; b = b.parentNode;)
                            if (b === a) return !0;
                    return !1
                }, U = b ? function(a, b) { if (a === b) return E = !0, 0; var c = !a.compareDocumentPosition - !b.compareDocumentPosition; return c ? c : (c = (a.ownerDocument || a) === (b.ownerDocument || b) ? a.compareDocumentPosition(b) : 1, 1 & c || !v.sortDetached && b.compareDocumentPosition(a) === c ? a === d || a.ownerDocument === O && M(O, a) ? -1 : b === d || b.ownerDocument === O && M(O, b) ? 1 : D ? aa(D, a) - aa(D, b) : 0 : 4 & c ? -1 : 1) } : function(a, b) {
                    if (a === b) return E = !0, 0;
                    var c, e = 0,
                        f = a.parentNode,
                        h = b.parentNode,
                        i = [a],
                        j = [b];
                    if (!f || !h) return a === d ? -1 : b === d ? 1 : f ? -1 : h ? 1 : D ? aa(D, a) - aa(D, b) : 0;
                    if (f === h) return g(a, b);
                    for (c = a; c = c.parentNode;) i.unshift(c);
                    for (c = b; c = c.parentNode;) j.unshift(c);
                    for (; i[e] === j[e];) e++;
                    return e ? g(i[e], j[e]) : i[e] === O ? -1 : j[e] === O ? 1 : 0
                }, d) : G
            }, b.matches = function(a, c) { return b(a, null, null, c) }, b.matchesSelector = function(a, c) {
                if ((a.ownerDocument || a) !== G && F(a), c = c.replace(la, "='$1']"), !(!v.matchesSelector || !I || K && K.test(c) || J && J.test(c))) try { var d = L.call(a, c); if (d || v.disconnectedMatch || a.document && 11 !== a.document.nodeType) return d } catch (e) {}
                return b(c, G, null, [a]).length > 0
            }, b.contains = function(a, b) { return (a.ownerDocument || a) !== G && F(a), M(a, b) }, b.attr = function(a, b) {
                (a.ownerDocument || a) !== G && F(a);
                var c = w.attrHandle[b.toLowerCase()],
                    d = c && W.call(w.attrHandle, b.toLowerCase()) ? c(a, b, !I) : void 0;
                return void 0 !== d ? d : v.attributes || !I ? a.getAttribute(b) : (d = a.getAttributeNode(b)) && d.specified ? d.value : null
            }, b.error = function(a) { throw new Error("Syntax error, unrecognized expression: " + a) }, b.uniqueSort = function(a) {
                var b, c = [],
                    d = 0,
                    e = 0;
                if (E = !v.detectDuplicates, D = !v.sortStable && a.slice(0), a.sort(U), E) { for (; b = a[e++];) b === a[e] && (d = c.push(e)); for (; d--;) a.splice(c[d], 1) }
                return D = null, a
            }, x = b.getText = function(a) {
                var b, c = "",
                    d = 0,
                    e = a.nodeType;
                if (e) { if (1 === e || 9 === e || 11 === e) { if ("string" == typeof a.textContent) return a.textContent; for (a = a.firstChild; a; a = a.nextSibling) c += x(a) } else if (3 === e || 4 === e) return a.nodeValue } else
                    for (; b = a[d++];) c += x(b);
                return c
            }, w = b.selectors = {
                cacheLength: 50,
                createPseudo: d,
                match: oa,
                attrHandle: {},
                find: {},
                relative: { ">": { dir: "parentNode", first: !0 }, " ": { dir: "parentNode" }, "+": { dir: "previousSibling", first: !0 }, "~": { dir: "previousSibling" } },
                preFilter: { ATTR: function(a) { return a[1] = a[1].replace(va, wa), a[3] = (a[3] || a[4] || a[5] || "").replace(va, wa), "~=" === a[2] && (a[3] = " " + a[3] + " "), a.slice(0, 4) }, CHILD: function(a) { return a[1] = a[1].toLowerCase(), "nth" === a[1].slice(0, 3) ? (a[3] || b.error(a[0]), a[4] = +(a[4] ? a[5] + (a[6] || 1) : 2 * ("even" === a[3] || "odd" === a[3])), a[5] = +(a[7] + a[8] || "odd" === a[3])) : a[3] && b.error(a[0]), a }, PSEUDO: function(a) { var b, c = !a[6] && a[2]; return oa.CHILD.test(a[0]) ? null : (a[3] ? a[2] = a[4] || a[5] || "" : c && ma.test(c) && (b = z(c, !0)) && (b = c.indexOf(")", c.length - b) - c.length) && (a[0] = a[0].slice(0, b), a[2] = c.slice(0, b)), a.slice(0, 3)) } },
                filter: {
                    TAG: function(a) { var b = a.replace(va, wa).toLowerCase(); return "*" === a ? function() { return !0 } : function(a) { return a.nodeName && a.nodeName.toLowerCase() === b } },
                    CLASS: function(a) { var b = R[a + " "]; return b || (b = new RegExp("(^|" + ca + ")" + a + "(" + ca + "|$)")) && R(a, function(a) { return b.test("string" == typeof a.className && a.className || "undefined" != typeof a.getAttribute && a.getAttribute("class") || "") }) },
                    ATTR: function(a, c, d) { return function(e) { var f = b.attr(e, a); return null == f ? "!=" === c : !c || (f += "", "=" === c ? f === d : "!=" === c ? f !== d : "^=" === c ? d && 0 === f.indexOf(d) : "*=" === c ? d && f.indexOf(d) > -1 : "$=" === c ? d && f.slice(-d.length) === d : "~=" === c ? (" " + f.replace(ha, " ") + " ").indexOf(d) > -1 : "|=" === c && (f === d || f.slice(0, d.length + 1) === d + "-")) } },
                    CHILD: function(a, b, c, d, e) {
                        var f = "nth" !== a.slice(0, 3),
                            g = "last" !== a.slice(-4),
                            h = "of-type" === b;
                        return 1 === d && 0 === e ? function(a) { return !!a.parentNode } : function(b, c, i) {
                            var j, k, l, m, n, o, p = f !== g ? "nextSibling" : "previousSibling",
                                q = b.parentNode,
                                r = h && b.nodeName.toLowerCase(),
                                s = !i && !h;
                            if (q) {
                                if (f) {
                                    for (; p;) {
                                        for (l = b; l = l[p];)
                                            if (h ? l.nodeName.toLowerCase() === r : 1 === l.nodeType) return !1;
                                        o = p = "only" === a && !o && "nextSibling"
                                    }
                                    return !0
                                }
                                if (o = [g ? q.firstChild : q.lastChild], g && s) {
                                    for (k = q[N] || (q[N] = {}), j = k[a] || [], n = j[0] === P && j[1], m = j[0] === P && j[2], l = n && q.childNodes[n]; l = ++n && l && l[p] || (m = n = 0) || o.pop();)
                                        if (1 === l.nodeType && ++m && l === b) { k[a] = [P, n, m]; break }
                                } else if (s && (j = (b[N] || (b[N] = {}))[a]) && j[0] === P) m = j[1];
                                else
                                    for (;
                                        (l = ++n && l && l[p] || (m = n = 0) || o.pop()) && ((h ? l.nodeName.toLowerCase() !== r : 1 !== l.nodeType) || !++m || (s && ((l[N] || (l[N] = {}))[a] = [P, m]), l !== b)););
                                return m -= e, m === d || m % d === 0 && m / d >= 0
                            }
                        }
                    },
                    PSEUDO: function(a, c) { var e, f = w.pseudos[a] || w.setFilters[a.toLowerCase()] || b.error("unsupported pseudo: " + a); return f[N] ? f(c) : f.length > 1 ? (e = [a, a, "", c], w.setFilters.hasOwnProperty(a.toLowerCase()) ? d(function(a, b) { for (var d, e = f(a, c), g = e.length; g--;) d = aa(a, e[g]), a[d] = !(b[d] = e[g]) }) : function(a) { return f(a, 0, e) }) : f }
                },
                pseudos: {
                    not: d(function(a) {
                        var b = [],
                            c = [],
                            e = A(a.replace(ia, "$1"));
                        return e[N] ? d(function(a, b, c, d) { for (var f, g = e(a, null, d, []), h = a.length; h--;)(f = g[h]) && (a[h] = !(b[h] = f)) }) : function(a, d, f) { return b[0] = a, e(b, null, f, c), b[0] = null, !c.pop() }
                    }),
                    has: d(function(a) { return function(c) { return b(a, c).length > 0 } }),
                    contains: d(function(a) {
                        return a = a.replace(va, wa),
                            function(b) { return (b.textContent || b.innerText || x(b)).indexOf(a) > -1 }
                    }),
                    lang: d(function(a) {
                        return na.test(a || "") || b.error("unsupported lang: " + a), a = a.replace(va, wa).toLowerCase(),
                            function(b) {
                                var c;
                                do
                                    if (c = I ? b.lang : b.getAttribute("xml:lang") || b.getAttribute("lang")) return c = c.toLowerCase(), c === a || 0 === c.indexOf(a + "-");
                                while ((b = b.parentNode) && 1 === b.nodeType);
                                return !1
                            }
                    }),
                    target: function(b) { var c = a.location && a.location.hash; return c && c.slice(1) === b.id },
                    root: function(a) { return a === H },
                    focus: function(a) { return a === G.activeElement && (!G.hasFocus || G.hasFocus()) && !!(a.type || a.href || ~a.tabIndex) },
                    enabled: function(a) { return a.disabled === !1 },
                    disabled: function(a) { return a.disabled === !0 },
                    checked: function(a) { var b = a.nodeName.toLowerCase(); return "input" === b && !!a.checked || "option" === b && !!a.selected },
                    selected: function(a) { return a.parentNode && a.parentNode.selectedIndex, a.selected === !0 },
                    empty: function(a) {
                        for (a = a.firstChild; a; a = a.nextSibling)
                            if (a.nodeType < 6) return !1;
                        return !0
                    },
                    parent: function(a) { return !w.pseudos.empty(a) },
                    header: function(a) { return qa.test(a.nodeName) },
                    input: function(a) { return pa.test(a.nodeName) },
                    button: function(a) { var b = a.nodeName.toLowerCase(); return "input" === b && "button" === a.type || "button" === b },
                    text: function(a) { var b; return "input" === a.nodeName.toLowerCase() && "text" === a.type && (null == (b = a.getAttribute("type")) || "text" === b.toLowerCase()) },
                    first: j(function() { return [0] }),
                    last: j(function(a, b) { return [b - 1] }),
                    eq: j(function(a, b, c) { return [0 > c ? c + b : c] }),
                    even: j(function(a, b) { for (var c = 0; b > c; c += 2) a.push(c); return a }),
                    odd: j(function(a, b) { for (var c = 1; b > c; c += 2) a.push(c); return a }),
                    lt: j(function(a, b, c) { for (var d = 0 > c ? c + b : c; --d >= 0;) a.push(d); return a }),
                    gt: j(function(a, b, c) { for (var d = 0 > c ? c + b : c; ++d < b;) a.push(d); return a })
                }
            }, w.pseudos.nth = w.pseudos.eq;
            for (u in { radio: !0, checkbox: !0, file: !0, password: !0, image: !0 }) w.pseudos[u] = h(u);
            for (u in { submit: !0, reset: !0 }) w.pseudos[u] = i(u);
            return l.prototype = w.filters = w.pseudos, w.setFilters = new l, z = b.tokenize = function(a, c) {
                var d, e, f, g, h, i, j, k = S[a + " "];
                if (k) return c ? 0 : k.slice(0);
                for (h = a, i = [], j = w.preFilter; h;) {
                    (!d || (e = ja.exec(h))) && (e && (h = h.slice(e[0].length) || h), i.push(f = [])), d = !1, (e = ka.exec(h)) && (d = e.shift(), f.push({ value: d, type: e[0].replace(ia, " ") }), h = h.slice(d.length));
                    for (g in w.filter) !(e = oa[g].exec(h)) || j[g] && !(e = j[g](e)) || (d = e.shift(), f.push({ value: d, type: g, matches: e }), h = h.slice(d.length));
                    if (!d) break
                }
                return c ? h.length : h ? b.error(a) : S(a, i).slice(0)
            }, A = b.compile = function(a, b) {
                var c, d = [],
                    e = [],
                    f = T[a + " "];
                if (!f) {
                    for (b || (b = z(a)), c = b.length; c--;) f = s(b[c]), f[N] ? d.push(f) : e.push(f);
                    f = T(a, t(e, d)), f.selector = a
                }
                return f
            }, B = b.select = function(a, b, c, d) {
                var e, f, g, h, i, j = "function" == typeof a && a,
                    l = !d && z(a = j.selector || a);
                if (c = c || [], 1 === l.length) {
                    if (f = l[0] = l[0].slice(0), f.length > 2 && "ID" === (g = f[0]).type && v.getById && 9 === b.nodeType && I && w.relative[f[1].type]) {
                        if (b = (w.find.ID(g.matches[0].replace(va, wa), b) || [])[0], !b) return c;
                        j && (b = b.parentNode), a = a.slice(f.shift().value.length)
                    }
                    for (e = oa.needsContext.test(a) ? 0 : f.length;
                        (j = f[e], b.relative[h = j.type]);)
                        if ((i = w.find[h]) && (d = i(g.matches[0].replace(va, wa), ta.test(f[0].type) && k(b.parentNode) || b))) { if (f.splice(e, 1), a = d.length && m(f), !a) return $.apply(c, d), c; break }
                }
                return (j || A(a, l))(d, b, !I, c, ta.test(a) && k(b.parentNode) || b), c
            }, v.sortStable = N.split("").sort(U).join("") === N, v.detectDuplicates = !!E, F(), v.sortDetached = e(function(a) { return 1 & a.compareDocumentPosition(G.createElement("div")) }), e(function(a) { return a.innerHTML = "<a href='#'></a>", "#" === a.firstChild.getAttribute("href") }) || f("type|href|height|width", function(a, b, c) { return c ? void 0 : a.getAttribute(b, "type" === b.toLowerCase() ? 1 : 2) }), v.attributes && e(function(a) { return a.innerHTML = "<input/>", a.firstChild.setAttribute("value", ""), "" === a.firstChild.getAttribute("value") }) || f("value", function(a, b, c) { return c || "input" !== a.nodeName.toLowerCase() ? void 0 : a.defaultValue }), e(function(a) { return null == a.getAttribute("disabled") }) || f(ba, function(a, b, c) { var d; return c ? void 0 : a[b] === !0 ? b.toLowerCase() : (d = a.getAttributeNode(b)) && d.specified ? d.value : null }), b
        }(a);
        ea.find = ja, ea.expr = ja.selectors, ea.expr[":"] = ea.expr.pseudos, ea.unique = ja.uniqueSort, ea.text = ja.getText, ea.isXMLDoc = ja.isXML, ea.contains = ja.contains;
        var ka = ea.expr.match.needsContext,
            la = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
            ma = /^.[^:#\[\.,]*$/;
        ea.filter = function(a, b, c) { var d = b[0]; return c && (a = ":not(" + a + ")"), 1 === b.length && 1 === d.nodeType ? ea.find.matchesSelector(d, a) ? [d] : [] : ea.find.matches(a, ea.grep(b, function(a) { return 1 === a.nodeType })) }, ea.fn.extend({
            find: function(a) {
                var b, c = [],
                    d = this,
                    e = d.length;
                if ("string" != typeof a) return this.pushStack(ea(a).filter(function() {
                    for (b = 0; e > b; b++)
                        if (ea.contains(d[b], this)) return !0
                }));
                for (b = 0; e > b; b++) ea.find(a, d[b], c);
                return c = this.pushStack(e > 1 ? ea.unique(c) : c), c.selector = this.selector ? this.selector + " " + a : a, c
            },
            filter: function(a) { return this.pushStack(d(this, a || [], !1)) },
            not: function(a) { return this.pushStack(d(this, a || [], !0)) },
            is: function(a) { return !!d(this, "string" == typeof a && ka.test(a) ? ea(a) : a || [], !1).length }
        });
        var na, oa = a.document,
            pa = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,
            qa = ea.fn.init = function(a, b) {
                var c, d;
                if (!a) return this;
                if ("string" == typeof a) {
                    if (c = "<" === a.charAt(0) && ">" === a.charAt(a.length - 1) && a.length >= 3 ? [null, a, null] : pa.exec(a), !c || !c[1] && b) return !b || b.jquery ? (b || na).find(a) : this.constructor(b).find(a);
                    if (c[1]) {
                        if (b = b instanceof ea ? b[0] : b, ea.merge(this, ea.parseHTML(c[1], b && b.nodeType ? b.ownerDocument || b : oa, !0)), la.test(c[1]) && ea.isPlainObject(b))
                            for (c in b) ea.isFunction(this[c]) ? this[c](b[c]) : this.attr(c, b[c]);
                        return this
                    }
                    if (d = oa.getElementById(c[2]), d && d.parentNode) {
                        if (d.id !== c[2]) return na.find(a);
                        this.length = 1, this[0] = d
                    }
                    return this.context = oa, this.selector = a, this
                }
                return a.nodeType ? (this.context = this[0] = a, this.length = 1, this) : ea.isFunction(a) ? "undefined" != typeof na.ready ? na.ready(a) : a(ea) : (void 0 !== a.selector && (this.selector = a.selector, this.context = a.context), ea.makeArray(a, this))
            };
        qa.prototype = ea.fn, na = ea(oa);
        var ra = /^(?:parents|prev(?:Until|All))/,
            sa = { children: !0, contents: !0, next: !0, prev: !0 };
        ea.extend({ dir: function(a, b, c) { for (var d = [], e = a[b]; e && 9 !== e.nodeType && (void 0 === c || 1 !== e.nodeType || !ea(e).is(c));) 1 === e.nodeType && d.push(e), e = e[b]; return d }, sibling: function(a, b) { for (var c = []; a; a = a.nextSibling) 1 === a.nodeType && a !== b && c.push(a); return c } }), ea.fn.extend({
            has: function(a) {
                var b, c = ea(a, this),
                    d = c.length;
                return this.filter(function() {
                    for (b = 0; d > b; b++)
                        if (ea.contains(this, c[b])) return !0
                })
            },
            closest: function(a, b) {
                for (var c, d = 0, e = this.length, f = [], g = ka.test(a) || "string" != typeof a ? ea(a, b || this.context) : 0; e > d; d++)
                    for (c = this[d]; c && c !== b; c = c.parentNode)
                        if (c.nodeType < 11 && (g ? g.index(c) > -1 : 1 === c.nodeType && ea.find.matchesSelector(c, a))) { f.push(c); break }
                return this.pushStack(f.length > 1 ? ea.unique(f) : f)
            },
            index: function(a) { return a ? "string" == typeof a ? ea.inArray(this[0], ea(a)) : ea.inArray(a.jquery ? a[0] : a, this) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1 },
            add: function(a, b) { return this.pushStack(ea.unique(ea.merge(this.get(), ea(a, b)))) },
            addBack: function(a) { return this.add(null == a ? this.prevObject : this.prevObject.filter(a)) }
        }), ea.each({ parent: function(a) { var b = a.parentNode; return b && 11 !== b.nodeType ? b : null }, parents: function(a) { return ea.dir(a, "parentNode") }, parentsUntil: function(a, b, c) { return ea.dir(a, "parentNode", c) }, next: function(a) { return e(a, "nextSibling") }, prev: function(a) { return e(a, "previousSibling") }, nextAll: function(a) { return ea.dir(a, "nextSibling") }, prevAll: function(a) { return ea.dir(a, "previousSibling") }, nextUntil: function(a, b, c) { return ea.dir(a, "nextSibling", c) }, prevUntil: function(a, b, c) { return ea.dir(a, "previousSibling", c) }, siblings: function(a) { return ea.sibling((a.parentNode || {}).firstChild, a) }, children: function(a) { return ea.sibling(a.firstChild) }, contents: function(a) { return ea.nodeName(a, "iframe") ? a.contentDocument || a.contentWindow.document : ea.merge([], a.childNodes) } }, function(a, b) { ea.fn[a] = function(c, d) { var e = ea.map(this, b, c); return "Until" !== a.slice(-5) && (d = c), d && "string" == typeof d && (e = ea.filter(d, e)), this.length > 1 && (sa[a] || (e = ea.unique(e)), ra.test(a) && (e = e.reverse())), this.pushStack(e) } });
        var ta = /\S+/g,
            ua = {};
        ea.Callbacks = function(a) {
            a = "string" == typeof a ? ua[a] || f(a) : ea.extend({}, a);
            var b, c, d, e, g, h, i = [],
                j = !a.once && [],
                k = function(f) {
                    for (c = a.memory && f, d = !0, g = h || 0, h = 0, e = i.length, b = !0; i && e > g; g++)
                        if (i[g].apply(f[0], f[1]) === !1 && a.stopOnFalse) { c = !1; break }
                    b = !1, i && (j ? j.length && k(j.shift()) : c ? i = [] : l.disable())
                },
                l = {
                    add: function() { if (i) { var d = i.length;! function f(b) { ea.each(b, function(b, c) { var d = ea.type(c); "function" === d ? a.unique && l.has(c) || i.push(c) : c && c.length && "string" !== d && f(c) }) }(arguments), b ? e = i.length : c && (h = d, k(c)) } return this },
                    remove: function() {
                        return i && ea.each(arguments, function(a, c) {
                            for (var d;
                                (d = ea.inArray(c, i, d)) > -1;) i.splice(d, 1), b && (e >= d && e--, g >= d && g--)
                        }), this
                    },
                    has: function(a) { return a ? ea.inArray(a, i) > -1 : !(!i || !i.length) },
                    empty: function() { return i = [], e = 0, this },
                    disable: function() { return i = j = c = void 0, this },
                    disabled: function() { return !i },
                    lock: function() { return j = void 0, c || l.disable(), this },
                    locked: function() { return !j },
                    fireWith: function(a, c) { return !i || d && !j || (c = c || [], c = [a, c.slice ? c.slice() : c], b ? j.push(c) : k(c)), this },
                    fire: function() { return l.fireWith(this, arguments), this },
                    fired: function() { return !!d }
                };
            return l
        }, ea.extend({
            Deferred: function(a) {
                var b = [
                        ["resolve", "done", ea.Callbacks("once memory"), "resolved"],
                        ["reject", "fail", ea.Callbacks("once memory"), "rejected"],
                        ["notify", "progress", ea.Callbacks("memory")]
                    ],
                    c = "pending",
                    d = {
                        state: function() { return c },
                        always: function() { return e.done(arguments).fail(arguments), this },
                        then: function() {
                            var a = arguments;
                            return ea.Deferred(function(c) {
                                ea.each(b, function(b, f) {
                                    var g = ea.isFunction(a[b]) && a[b];
                                    e[f[1]](function() {
                                        var a = g && g.apply(this, arguments);
                                        a && ea.isFunction(a.promise) ? a.promise().done(c.resolve).fail(c.reject).progress(c.notify) : c[f[0] + "With"](this === d ? c.promise() : this, g ? [a] : arguments)
                                    })
                                }), a = null
                            }).promise()
                        },
                        promise: function(a) { return null != a ? ea.extend(a, d) : d }
                    },
                    e = {};
                return d.pipe = d.then, ea.each(b, function(a, f) {
                    var g = f[2],
                        h = f[3];
                    d[f[1]] = g.add, h && g.add(function() { c = h }, b[1 ^ a][2].disable, b[2][2].lock), e[f[0]] = function() { return e[f[0] + "With"](this === e ? d : this, arguments), this }, e[f[0] + "With"] = g.fireWith
                }), d.promise(e), a && a.call(e, e), e
            },
            when: function(a) {
                var b, c, d, e = 0,
                    f = X.call(arguments),
                    g = f.length,
                    h = 1 !== g || a && ea.isFunction(a.promise) ? g : 0,
                    i = 1 === h ? a : ea.Deferred(),
                    j = function(a, c, d) { return function(e) { c[a] = this, d[a] = arguments.length > 1 ? X.call(arguments) : e, d === b ? i.notifyWith(c, d) : --h || i.resolveWith(c, d) } };
                if (g > 1)
                    for (b = new Array(g), c = new Array(g), d = new Array(g); g > e; e++) f[e] && ea.isFunction(f[e].promise) ? f[e].promise().done(j(e, d, f)).fail(i.reject).progress(j(e, c, b)) : --h;
                return h || i.resolveWith(d, f), i.promise()
            }
        });
        var va;
        ea.fn.ready = function(a) { return ea.ready.promise().done(a), this }, ea.extend({
            isReady: !1,
            readyWait: 1,
            holdReady: function(a) { a ? ea.readyWait++ : ea.ready(!0) },
            ready: function(a) {
                if (a === !0 ? !--ea.readyWait : !ea.isReady) {
                    if (!oa.body) return setTimeout(ea.ready);
                    ea.isReady = !0, a !== !0 && --ea.readyWait > 0 || (va.resolveWith(oa, [ea]), ea.fn.triggerHandler && (ea(oa).triggerHandler("ready"), ea(oa).off("ready")))
                }
            }
        }), ea.ready.promise = function(b) {
            if (!va)
                if (va = ea.Deferred(), "complete" === oa.readyState) setTimeout(ea.ready);
                else if (oa.addEventListener) oa.addEventListener("DOMContentLoaded", h, !1), a.addEventListener("load", h, !1);
            else {
                oa.attachEvent("onreadystatechange", h), a.attachEvent("onload", h);
                var c = !1;
                try { c = null == a.frameElement && oa.documentElement } catch (d) {}
                c && c.doScroll && ! function e() {
                    if (!ea.isReady) {
                        try { c.doScroll("left") } catch (a) { return setTimeout(e, 50) }
                        g(), ea.ready()
                    }
                }()
            }
            return va.promise(b)
        };
        var wa, xa = "undefined";
        for (wa in ea(ca)) break;
        ca.ownLast = "0" !== wa, ca.inlineBlockNeedsLayout = !1, ea(function() {
                var a, b, c, d;
                c = oa.getElementsByTagName("body")[0], c && c.style && (b = oa.createElement("div"), d = oa.createElement("div"), d.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", c.appendChild(d).appendChild(b), typeof b.style.zoom !== xa && (b.style.cssText = "display:inline;margin:0;border:0;padding:1px;width:1px;zoom:1", ca.inlineBlockNeedsLayout = a = 3 === b.offsetWidth, a && (c.style.zoom = 1)), c.removeChild(d))
            }),
            function() {
                var a = oa.createElement("div");
                if (null == ca.deleteExpando) { ca.deleteExpando = !0; try { delete a.test } catch (b) { ca.deleteExpando = !1 } }
                a = null
            }(), ea.acceptData = function(a) {
                var b = ea.noData[(a.nodeName + " ").toLowerCase()],
                    c = +a.nodeType || 1;
                return (1 === c || 9 === c) && (!b || b !== !0 && a.getAttribute("classid") === b)
            };
        var ya = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
            za = /([A-Z])/g;
        ea.extend({ cache: {}, noData: { "applet ": !0, "embed ": !0, "object ": "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" }, hasData: function(a) { return a = a.nodeType ? ea.cache[a[ea.expando]] : a[ea.expando], !!a && !j(a) }, data: function(a, b, c) { return k(a, b, c) }, removeData: function(a, b) { return l(a, b) }, _data: function(a, b, c) { return k(a, b, c, !0) }, _removeData: function(a, b) { return l(a, b, !0) } }), ea.fn.extend({
            data: function(a, b) {
                var c, d, e, f = this[0],
                    g = f && f.attributes;
                if (void 0 === a) {
                    if (this.length && (e = ea.data(f), 1 === f.nodeType && !ea._data(f, "parsedAttrs"))) {
                        for (c = g.length; c--;) g[c] && (d = g[c].name, 0 === d.indexOf("data-") && (d = ea.camelCase(d.slice(5)), i(f, d, e[d])));
                        ea._data(f, "parsedAttrs", !0)
                    }
                    return e
                }
                return "object" == typeof a ? this.each(function() { ea.data(this, a) }) : arguments.length > 1 ? this.each(function() { ea.data(this, a, b) }) : f ? i(f, a, ea.data(f, a)) : void 0
            },
            removeData: function(a) { return this.each(function() { ea.removeData(this, a) }) }
        }), ea.extend({
            queue: function(a, b, c) { var d; return a ? (b = (b || "fx") + "queue", d = ea._data(a, b), c && (!d || ea.isArray(c) ? d = ea._data(a, b, ea.makeArray(c)) : d.push(c)), d || []) : void 0 },
            dequeue: function(a, b) {
                b = b || "fx";
                var c = ea.queue(a, b),
                    d = c.length,
                    e = c.shift(),
                    f = ea._queueHooks(a, b),
                    g = function() { ea.dequeue(a, b) };
                "inprogress" === e && (e = c.shift(), d--), e && ("fx" === b && c.unshift("inprogress"), delete f.stop, e.call(a, g, f)), !d && f && f.empty.fire()
            },
            _queueHooks: function(a, b) { var c = b + "queueHooks"; return ea._data(a, c) || ea._data(a, c, { empty: ea.Callbacks("once memory").add(function() { ea._removeData(a, b + "queue"), ea._removeData(a, c) }) }) }
        }), ea.fn.extend({
            queue: function(a, b) {
                var c = 2;
                return "string" != typeof a && (b = a, a = "fx", c--), arguments.length < c ? ea.queue(this[0], a) : void 0 === b ? this : this.each(function() {
                    var c = ea.queue(this, a, b);
                    ea._queueHooks(this, a), "fx" === a && "inprogress" !== c[0] && ea.dequeue(this, a)
                })
            },
            dequeue: function(a) { return this.each(function() { ea.dequeue(this, a) }) },
            clearQueue: function(a) { return this.queue(a || "fx", []) },
            promise: function(a, b) {
                var c, d = 1,
                    e = ea.Deferred(),
                    f = this,
                    g = this.length,
                    h = function() {--d || e.resolveWith(f, [f]) };
                for ("string" != typeof a && (b = a, a = void 0), a = a || "fx"; g--;) c = ea._data(f[g], a + "queueHooks"), c && c.empty && (d++, c.empty.add(h));
                return h(), e.promise(b)
            }
        });
        var Aa = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
            Ba = ["Top", "Right", "Bottom", "Left"],
            Ca = function(a, b) { return a = b || a, "none" === ea.css(a, "display") || !ea.contains(a.ownerDocument, a) },
            Da = ea.access = function(a, b, c, d, e, f, g) {
                var h = 0,
                    i = a.length,
                    j = null == c;
                if ("object" === ea.type(c)) { e = !0; for (h in c) ea.access(a, b, h, c[h], !0, f, g) } else if (void 0 !== d && (e = !0, ea.isFunction(d) || (g = !0), j && (g ? (b.call(a, d), b = null) : (j = b, b = function(a, b, c) { return j.call(ea(a), c) })), b))
                    for (; i > h; h++) b(a[h], c, g ? d : d.call(a[h], h, b(a[h], c)));
                return e ? a : j ? b.call(a) : i ? b(a[0], c) : f
            },
            Ea = /^(?:checkbox|radio)$/i;
        ! function() {
            var a = oa.createElement("input"),
                b = oa.createElement("div"),
                c = oa.createDocumentFragment();
            if (b.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", ca.leadingWhitespace = 3 === b.firstChild.nodeType, ca.tbody = !b.getElementsByTagName("tbody").length, ca.htmlSerialize = !!b.getElementsByTagName("link").length, ca.html5Clone = "<:nav></:nav>" !== oa.createElement("nav").cloneNode(!0).outerHTML, a.type = "checkbox", a.checked = !0, c.appendChild(a), ca.appendChecked = a.checked, b.innerHTML = "<textarea>x</textarea>", ca.noCloneChecked = !!b.cloneNode(!0).lastChild.defaultValue, c.appendChild(b), b.innerHTML = "<input type='radio' checked='checked' name='t'/>", ca.checkClone = b.cloneNode(!0).cloneNode(!0).lastChild.checked, ca.noCloneEvent = !0, b.attachEvent && (b.attachEvent("onclick", function() { ca.noCloneEvent = !1 }), b.cloneNode(!0).click()), null == ca.deleteExpando) { ca.deleteExpando = !0; try { delete b.test } catch (d) { ca.deleteExpando = !1 } }
        }(),
        function() {
            var b, c, d = oa.createElement("div");
            for (b in { submit: !0, change: !0, focusin: !0 }) c = "on" + b, (ca[b + "Bubbles"] = c in a) || (d.setAttribute(c, "t"), ca[b + "Bubbles"] = d.attributes[c].expando === !1);
            d = null
        }();
        var Fa = /^(?:input|select|textarea)$/i,
            Ga = /^key/,
            Ha = /^(?:mouse|pointer|contextmenu)|click/,
            Ia = /^(?:focusinfocus|focusoutblur)$/,
            Ja = /^([^.]*)(?:\.(.+)|)$/;
        ea.event = {
            global: {},
            add: function(a, b, c, d, e) {
                var f, g, h, i, j, k, l, m, n, o, p, q = ea._data(a);
                if (q) {
                    for (c.handler && (i = c, c = i.handler, e = i.selector), c.guid || (c.guid = ea.guid++), (g = q.events) || (g = q.events = {}), (k = q.handle) || (k = q.handle = function(a) { return typeof ea === xa || a && ea.event.triggered === a.type ? void 0 : ea.event.dispatch.apply(k.elem, arguments) }, k.elem = a), b = (b || "").match(ta) || [""], h = b.length; h--;) f = Ja.exec(b[h]) || [], n = p = f[1], o = (f[2] || "").split(".").sort(), n && (j = ea.event.special[n] || {}, n = (e ? j.delegateType : j.bindType) || n, j = ea.event.special[n] || {}, l = ea.extend({ type: n, origType: p, data: d, handler: c, guid: c.guid, selector: e, needsContext: e && ea.expr.match.needsContext.test(e), namespace: o.join(".") }, i), (m = g[n]) || (m = g[n] = [], m.delegateCount = 0, j.setup && j.setup.call(a, d, o, k) !== !1 || (a.addEventListener ? a.addEventListener(n, k, !1) : a.attachEvent && a.attachEvent("on" + n, k))), j.add && (j.add.call(a, l), l.handler.guid || (l.handler.guid = c.guid)), e ? m.splice(m.delegateCount++, 0, l) : m.push(l), ea.event.global[n] = !0);
                    a = null
                }
            },
            remove: function(a, b, c, d, e) {
                var f, g, h, i, j, k, l, m, n, o, p, q = ea.hasData(a) && ea._data(a);
                if (q && (k = q.events)) {
                    for (b = (b || "").match(ta) || [""], j = b.length; j--;)
                        if (h = Ja.exec(b[j]) || [], n = p = h[1], o = (h[2] || "").split(".").sort(), n) {
                            for (l = ea.event.special[n] || {}, n = (d ? l.delegateType : l.bindType) || n, m = k[n] || [], h = h[2] && new RegExp("(^|\\.)" + o.join("\\.(?:.*\\.|)") + "(\\.|$)"), i = f = m.length; f--;) g = m[f], !e && p !== g.origType || c && c.guid !== g.guid || h && !h.test(g.namespace) || d && d !== g.selector && ("**" !== d || !g.selector) || (m.splice(f, 1), g.selector && m.delegateCount--, l.remove && l.remove.call(a, g));
                            i && !m.length && (l.teardown && l.teardown.call(a, o, q.handle) !== !1 || ea.removeEvent(a, n, q.handle), delete k[n])
                        } else
                            for (n in k) ea.event.remove(a, n + b[j], c, d, !0);
                    ea.isEmptyObject(k) && (delete q.handle, ea._removeData(a, "events"))
                }
            },
            trigger: function(b, c, d, e) {
                var f, g, h, i, j, k, l, m = [d || oa],
                    n = ba.call(b, "type") ? b.type : b,
                    o = ba.call(b, "namespace") ? b.namespace.split(".") : [];
                if (h = k = d = d || oa, 3 !== d.nodeType && 8 !== d.nodeType && !Ia.test(n + ea.event.triggered) && (n.indexOf(".") >= 0 && (o = n.split("."), n = o.shift(), o.sort()), g = n.indexOf(":") < 0 && "on" + n, b = b[ea.expando] ? b : new ea.Event(n, "object" == typeof b && b), b.isTrigger = e ? 2 : 3, b.namespace = o.join("."), b.namespace_re = b.namespace ? new RegExp("(^|\\.)" + o.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, b.result = void 0, b.target || (b.target = d), c = null == c ? [b] : ea.makeArray(c, [b]), j = ea.event.special[n] || {}, e || !j.trigger || j.trigger.apply(d, c) !== !1)) {
                    if (!e && !j.noBubble && !ea.isWindow(d)) {
                        for (i = j.delegateType || n, Ia.test(i + n) || (h = h.parentNode); h; h = h.parentNode) m.push(h), k = h;
                        k === (d.ownerDocument || oa) && m.push(k.defaultView || k.parentWindow || a)
                    }
                    for (l = 0;
                        (h = m[l++]) && !b.isPropagationStopped();) b.type = l > 1 ? i : j.bindType || n, f = (ea._data(h, "events") || {})[b.type] && ea._data(h, "handle"), f && f.apply(h, c), f = g && h[g], f && f.apply && ea.acceptData(h) && (b.result = f.apply(h, c), b.result === !1 && b.preventDefault());
                    if (b.type = n, !e && !b.isDefaultPrevented() && (!j._default || j._default.apply(m.pop(), c) === !1) && ea.acceptData(d) && g && d[n] && !ea.isWindow(d)) {
                        k = d[g], k && (d[g] = null), ea.event.triggered = n;
                        try { d[n]() } catch (p) {}
                        ea.event.triggered = void 0, k && (d[g] = k)
                    }
                    return b.result
                }
            },
            dispatch: function(a) {
                a = ea.event.fix(a);
                var b, c, d, e, f, g = [],
                    h = X.call(arguments),
                    i = (ea._data(this, "events") || {})[a.type] || [],
                    j = ea.event.special[a.type] || {};
                if (h[0] = a, a.delegateTarget = this, !j.preDispatch || j.preDispatch.call(this, a) !== !1) {
                    for (g = ea.event.handlers.call(this, a, i), b = 0;
                        (e = g[b++]) && !a.isPropagationStopped();)
                        for (a.currentTarget = e.elem, f = 0;
                            (d = e.handlers[f++]) && !a.isImmediatePropagationStopped();)(!a.namespace_re || a.namespace_re.test(d.namespace)) && (a.handleObj = d, a.data = d.data, c = ((ea.event.special[d.origType] || {}).handle || d.handler).apply(e.elem, h), void 0 !== c && (a.result = c) === !1 && (a.preventDefault(), a.stopPropagation()));
                    return j.postDispatch && j.postDispatch.call(this, a), a.result
                }
            },
            handlers: function(a, b) {
                var c, d, e, f, g = [],
                    h = b.delegateCount,
                    i = a.target;
                if (h && i.nodeType && (!a.button || "click" !== a.type))
                    for (; i != this; i = i.parentNode || this)
                        if (1 === i.nodeType && (i.disabled !== !0 || "click" !== a.type)) {
                            for (e = [], f = 0; h > f; f++) d = b[f], c = d.selector + " ", void 0 === e[c] && (e[c] = d.needsContext ? ea(c, this).index(i) >= 0 : ea.find(c, this, null, [i]).length), e[c] && e.push(d);
                            e.length && g.push({ elem: i, handlers: e })
                        }
                return h < b.length && g.push({ elem: this, handlers: b.slice(h) }), g
            },
            fix: function(a) {
                if (a[ea.expando]) return a;
                var b, c, d, e = a.type,
                    f = a,
                    g = this.fixHooks[e];
                for (g || (this.fixHooks[e] = g = Ha.test(e) ? this.mouseHooks : Ga.test(e) ? this.keyHooks : {}), d = g.props ? this.props.concat(g.props) : this.props, a = new ea.Event(f), b = d.length; b--;) c = d[b], a[c] = f[c];
                return a.target || (a.target = f.srcElement || oa), 3 === a.target.nodeType && (a.target = a.target.parentNode), a.metaKey = !!a.metaKey, g.filter ? g.filter(a, f) : a
            },
            props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
            fixHooks: {},
            keyHooks: { props: "char charCode key keyCode".split(" "), filter: function(a, b) { return null == a.which && (a.which = null != b.charCode ? b.charCode : b.keyCode), a } },
            mouseHooks: {
                props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
                filter: function(a, b) {
                    var c, d, e, f = b.button,
                        g = b.fromElement;
                    return null == a.pageX && null != b.clientX && (d = a.target.ownerDocument || oa, e = d.documentElement, c = d.body, a.pageX = b.clientX + (e && e.scrollLeft || c && c.scrollLeft || 0) - (e && e.clientLeft || c && c.clientLeft || 0), a.pageY = b.clientY + (e && e.scrollTop || c && c.scrollTop || 0) - (e && e.clientTop || c && c.clientTop || 0)), !a.relatedTarget && g && (a.relatedTarget = g === a.target ? b.toElement : g), a.which || void 0 === f || (a.which = 1 & f ? 1 : 2 & f ? 3 : 4 & f ? 2 : 0), a
                }
            },
            special: { load: { noBubble: !0 }, focus: { trigger: function() { if (this !== o() && this.focus) try { return this.focus(), !1 } catch (a) {} }, delegateType: "focusin" }, blur: { trigger: function() { return this === o() && this.blur ? (this.blur(), !1) : void 0 }, delegateType: "focusout" }, click: { trigger: function() { return ea.nodeName(this, "input") && "checkbox" === this.type && this.click ? (this.click(), !1) : void 0 }, _default: function(a) { return ea.nodeName(a.target, "a") } }, beforeunload: { postDispatch: function(a) { void 0 !== a.result && a.originalEvent && (a.originalEvent.returnValue = a.result) } } },
            simulate: function(a, b, c, d) {
                var e = ea.extend(new ea.Event, c, { type: a, isSimulated: !0, originalEvent: {} });
                d ? ea.event.trigger(e, null, b) : ea.event.dispatch.call(b, e), e.isDefaultPrevented() && c.preventDefault()
            }
        }, ea.removeEvent = oa.removeEventListener ? function(a, b, c) { a.removeEventListener && a.removeEventListener(b, c, !1) } : function(a, b, c) {
            var d = "on" + b;
            a.detachEvent && (typeof a[d] === xa && (a[d] = null), a.detachEvent(d, c))
        }, ea.Event = function(a, b) { return this instanceof ea.Event ? (a && a.type ? (this.originalEvent = a, this.type = a.type, this.isDefaultPrevented = a.defaultPrevented || void 0 === a.defaultPrevented && a.returnValue === !1 ? m : n) : this.type = a, b && ea.extend(this, b), this.timeStamp = a && a.timeStamp || ea.now(), void(this[ea.expando] = !0)) : new ea.Event(a, b) }, ea.Event.prototype = {
            isDefaultPrevented: n,
            isPropagationStopped: n,
            isImmediatePropagationStopped: n,
            preventDefault: function() {
                var a = this.originalEvent;
                this.isDefaultPrevented = m, a && (a.preventDefault ? a.preventDefault() : a.returnValue = !1);
            },
            stopPropagation: function() {
                var a = this.originalEvent;
                this.isPropagationStopped = m, a && (a.stopPropagation && a.stopPropagation(), a.cancelBubble = !0)
            },
            stopImmediatePropagation: function() {
                var a = this.originalEvent;
                this.isImmediatePropagationStopped = m, a && a.stopImmediatePropagation && a.stopImmediatePropagation(), this.stopPropagation()
            }
        }, ea.each({ mouseenter: "mouseover", mouseleave: "mouseout", pointerenter: "pointerover", pointerleave: "pointerout" }, function(a, b) {
            ea.event.special[a] = {
                delegateType: b,
                bindType: b,
                handle: function(a) {
                    var c, d = this,
                        e = a.relatedTarget,
                        f = a.handleObj;
                    return (!e || e !== d && !ea.contains(d, e)) && (a.type = f.origType, c = f.handler.apply(this, arguments), a.type = b), c
                }
            }
        }), ca.submitBubbles || (ea.event.special.submit = {
            setup: function() {
                return !ea.nodeName(this, "form") && void ea.event.add(this, "click._submit keypress._submit", function(a) {
                    var b = a.target,
                        c = ea.nodeName(b, "input") || ea.nodeName(b, "button") ? b.form : void 0;
                    c && !ea._data(c, "submitBubbles") && (ea.event.add(c, "submit._submit", function(a) { a._submit_bubble = !0 }), ea._data(c, "submitBubbles", !0))
                })
            },
            postDispatch: function(a) { a._submit_bubble && (delete a._submit_bubble, this.parentNode && !a.isTrigger && ea.event.simulate("submit", this.parentNode, a, !0)) },
            teardown: function() { return !ea.nodeName(this, "form") && void ea.event.remove(this, "._submit") }
        }), ca.changeBubbles || (ea.event.special.change = {
            setup: function() {
                return Fa.test(this.nodeName) ? (("checkbox" === this.type || "radio" === this.type) && (ea.event.add(this, "propertychange._change", function(a) { "checked" === a.originalEvent.propertyName && (this._just_changed = !0) }), ea.event.add(this, "click._change", function(a) { this._just_changed && !a.isTrigger && (this._just_changed = !1), ea.event.simulate("change", this, a, !0) })), !1) : void ea.event.add(this, "beforeactivate._change", function(a) {
                    var b = a.target;
                    Fa.test(b.nodeName) && !ea._data(b, "changeBubbles") && (ea.event.add(b, "change._change", function(a) {!this.parentNode || a.isSimulated || a.isTrigger || ea.event.simulate("change", this.parentNode, a, !0) }), ea._data(b, "changeBubbles", !0))
                })
            },
            handle: function(a) { var b = a.target; return this !== b || a.isSimulated || a.isTrigger || "radio" !== b.type && "checkbox" !== b.type ? a.handleObj.handler.apply(this, arguments) : void 0 },
            teardown: function() { return ea.event.remove(this, "._change"), !Fa.test(this.nodeName) }
        }), ca.focusinBubbles || ea.each({ focus: "focusin", blur: "focusout" }, function(a, b) {
            var c = function(a) { ea.event.simulate(b, a.target, ea.event.fix(a), !0) };
            ea.event.special[b] = {
                setup: function() {
                    var d = this.ownerDocument || this,
                        e = ea._data(d, b);
                    e || d.addEventListener(a, c, !0), ea._data(d, b, (e || 0) + 1)
                },
                teardown: function() {
                    var d = this.ownerDocument || this,
                        e = ea._data(d, b) - 1;
                    e ? ea._data(d, b, e) : (d.removeEventListener(a, c, !0), ea._removeData(d, b))
                }
            }
        }), ea.fn.extend({
            on: function(a, b, c, d, e) {
                var f, g;
                if ("object" == typeof a) { "string" != typeof b && (c = c || b, b = void 0); for (f in a) this.on(f, b, c, a[f], e); return this }
                if (null == c && null == d ? (d = b, c = b = void 0) : null == d && ("string" == typeof b ? (d = c, c = void 0) : (d = c, c = b, b = void 0)), d === !1) d = n;
                else if (!d) return this;
                return 1 === e && (g = d, d = function(a) { return ea().off(a), g.apply(this, arguments) }, d.guid = g.guid || (g.guid = ea.guid++)), this.each(function() { ea.event.add(this, a, d, c, b) })
            },
            one: function(a, b, c, d) { return this.on(a, b, c, d, 1) },
            off: function(a, b, c) { var d, e; if (a && a.preventDefault && a.handleObj) return d = a.handleObj, ea(a.delegateTarget).off(d.namespace ? d.origType + "." + d.namespace : d.origType, d.selector, d.handler), this; if ("object" == typeof a) { for (e in a) this.off(e, b, a[e]); return this } return (b === !1 || "function" == typeof b) && (c = b, b = void 0), c === !1 && (c = n), this.each(function() { ea.event.remove(this, a, c, b) }) },
            trigger: function(a, b) { return this.each(function() { ea.event.trigger(a, b, this) }) },
            triggerHandler: function(a, b) { var c = this[0]; return c ? ea.event.trigger(a, b, c, !0) : void 0 }
        });
        var Ka = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",
            La = / jQuery\d+="(?:null|\d+)"/g,
            Ma = new RegExp("<(?:" + Ka + ")[\\s/>]", "i"),
            Na = /^\s+/,
            Oa = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
            Pa = /<([\w:]+)/,
            Qa = /<tbody/i,
            Ra = /<|&#?\w+;/,
            Sa = /<(?:script|style|link)/i,
            Ta = /checked\s*(?:[^=]|=\s*.checked.)/i,
            Ua = /^$|\/(?:java|ecma)script/i,
            Va = /^true\/(.*)/,
            Wa = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
            Xa = { option: [1, "<select multiple='multiple'>", "</select>"], legend: [1, "<fieldset>", "</fieldset>"], area: [1, "<map>", "</map>"], param: [1, "<object>", "</object>"], thead: [1, "<table>", "</table>"], tr: [2, "<table><tbody>", "</tbody></table>"], col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"], td: [3, "<table><tbody><tr>", "</tr></tbody></table>"], _default: ca.htmlSerialize ? [0, "", ""] : [1, "X<div>", "</div>"] },
            Ya = p(oa),
            Za = Ya.appendChild(oa.createElement("div"));
        Xa.optgroup = Xa.option, Xa.tbody = Xa.tfoot = Xa.colgroup = Xa.caption = Xa.thead, Xa.th = Xa.td, ea.extend({
            clone: function(a, b, c) {
                var d, e, f, g, h, i = ea.contains(a.ownerDocument, a);
                if (ca.html5Clone || ea.isXMLDoc(a) || !Ma.test("<" + a.nodeName + ">") ? f = a.cloneNode(!0) : (Za.innerHTML = a.outerHTML, Za.removeChild(f = Za.firstChild)), !(ca.noCloneEvent && ca.noCloneChecked || 1 !== a.nodeType && 11 !== a.nodeType || ea.isXMLDoc(a)))
                    for (d = q(f), h = q(a), g = 0; null != (e = h[g]); ++g) d[g] && x(e, d[g]);
                if (b)
                    if (c)
                        for (h = h || q(a), d = d || q(f), g = 0; null != (e = h[g]); g++) w(e, d[g]);
                    else w(a, f);
                return d = q(f, "script"), d.length > 0 && v(d, !i && q(a, "script")), d = h = e = null, f
            },
            buildFragment: function(a, b, c, d) {
                for (var e, f, g, h, i, j, k, l = a.length, m = p(b), n = [], o = 0; l > o; o++)
                    if (f = a[o], f || 0 === f)
                        if ("object" === ea.type(f)) ea.merge(n, f.nodeType ? [f] : f);
                        else if (Ra.test(f)) {
                    for (h = h || m.appendChild(b.createElement("div")), i = (Pa.exec(f) || ["", ""])[1].toLowerCase(), k = Xa[i] || Xa._default, h.innerHTML = k[1] + f.replace(Oa, "<$1></$2>") + k[2], e = k[0]; e--;) h = h.lastChild;
                    if (!ca.leadingWhitespace && Na.test(f) && n.push(b.createTextNode(Na.exec(f)[0])), !ca.tbody)
                        for (f = "table" !== i || Qa.test(f) ? "<table>" !== k[1] || Qa.test(f) ? 0 : h : h.firstChild, e = f && f.childNodes.length; e--;) ea.nodeName(j = f.childNodes[e], "tbody") && !j.childNodes.length && f.removeChild(j);
                    for (ea.merge(n, h.childNodes), h.textContent = ""; h.firstChild;) h.removeChild(h.firstChild);
                    h = m.lastChild
                } else n.push(b.createTextNode(f));
                for (h && m.removeChild(h), ca.appendChecked || ea.grep(q(n, "input"), r), o = 0; f = n[o++];)
                    if ((!d || -1 === ea.inArray(f, d)) && (g = ea.contains(f.ownerDocument, f), h = q(m.appendChild(f), "script"), g && v(h), c))
                        for (e = 0; f = h[e++];) Ua.test(f.type || "") && c.push(f);
                return h = null, m
            },
            cleanData: function(a, b) {
                for (var c, d, e, f, g = 0, h = ea.expando, i = ea.cache, j = ca.deleteExpando, k = ea.event.special; null != (c = a[g]); g++)
                    if ((b || ea.acceptData(c)) && (e = c[h], f = e && i[e])) {
                        if (f.events)
                            for (d in f.events) k[d] ? ea.event.remove(c, d) : ea.removeEvent(c, d, f.handle);
                        i[e] && (delete i[e], j ? delete c[h] : typeof c.removeAttribute !== xa ? c.removeAttribute(h) : c[h] = null, W.push(e))
                    }
            }
        }), ea.fn.extend({
            text: function(a) { return Da(this, function(a) { return void 0 === a ? ea.text(this) : this.empty().append((this[0] && this[0].ownerDocument || oa).createTextNode(a)) }, null, a, arguments.length) },
            append: function() {
                return this.domManip(arguments, function(a) {
                    if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                        var b = s(this, a);
                        b.appendChild(a)
                    }
                })
            },
            prepend: function() {
                return this.domManip(arguments, function(a) {
                    if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                        var b = s(this, a);
                        b.insertBefore(a, b.firstChild)
                    }
                })
            },
            before: function() { return this.domManip(arguments, function(a) { this.parentNode && this.parentNode.insertBefore(a, this) }) },
            after: function() { return this.domManip(arguments, function(a) { this.parentNode && this.parentNode.insertBefore(a, this.nextSibling) }) },
            remove: function(a, b) { for (var c, d = a ? ea.filter(a, this) : this, e = 0; null != (c = d[e]); e++) b || 1 !== c.nodeType || ea.cleanData(q(c)), c.parentNode && (b && ea.contains(c.ownerDocument, c) && v(q(c, "script")), c.parentNode.removeChild(c)); return this },
            empty: function() {
                for (var a, b = 0; null != (a = this[b]); b++) {
                    for (1 === a.nodeType && ea.cleanData(q(a, !1)); a.firstChild;) a.removeChild(a.firstChild);
                    a.options && ea.nodeName(a, "select") && (a.options.length = 0)
                }
                return this
            },
            clone: function(a, b) { return a = null != a && a, b = null == b ? a : b, this.map(function() { return ea.clone(this, a, b) }) },
            html: function(a) {
                return Da(this, function(a) {
                    var b = this[0] || {},
                        c = 0,
                        d = this.length;
                    if (void 0 === a) return 1 === b.nodeType ? b.innerHTML.replace(La, "") : void 0;
                    if (!("string" != typeof a || Sa.test(a) || !ca.htmlSerialize && Ma.test(a) || !ca.leadingWhitespace && Na.test(a) || Xa[(Pa.exec(a) || ["", ""])[1].toLowerCase()])) {
                        a = a.replace(Oa, "<$1></$2>");
                        try {
                            for (; d > c; c++) b = this[c] || {}, 1 === b.nodeType && (ea.cleanData(q(b, !1)), b.innerHTML = a);
                            b = 0
                        } catch (e) {}
                    }
                    b && this.empty().append(a)
                }, null, a, arguments.length)
            },
            replaceWith: function() { var a = arguments[0]; return this.domManip(arguments, function(b) { a = this.parentNode, ea.cleanData(q(this)), a && a.replaceChild(b, this) }), a && (a.length || a.nodeType) ? this : this.remove() },
            detach: function(a) { return this.remove(a, !0) },
            domManip: function(a, b) {
                a = Y.apply([], a);
                var c, d, e, f, g, h, i = 0,
                    j = this.length,
                    k = this,
                    l = j - 1,
                    m = a[0],
                    n = ea.isFunction(m);
                if (n || j > 1 && "string" == typeof m && !ca.checkClone && Ta.test(m)) return this.each(function(c) {
                    var d = k.eq(c);
                    n && (a[0] = m.call(this, c, d.html())), d.domManip(a, b)
                });
                if (j && (h = ea.buildFragment(a, this[0].ownerDocument, !1, this), c = h.firstChild, 1 === h.childNodes.length && (h = c), c)) {
                    for (f = ea.map(q(h, "script"), t), e = f.length; j > i; i++) d = h, i !== l && (d = ea.clone(d, !0, !0), e && ea.merge(f, q(d, "script"))), b.call(this[i], d, i);
                    if (e)
                        for (g = f[f.length - 1].ownerDocument, ea.map(f, u), i = 0; e > i; i++) d = f[i], Ua.test(d.type || "") && !ea._data(d, "globalEval") && ea.contains(g, d) && (d.src ? ea._evalUrl && ea._evalUrl(d.src) : ea.globalEval((d.text || d.textContent || d.innerHTML || "").replace(Wa, "")));
                    h = c = null
                }
                return this
            }
        }), ea.each({ appendTo: "append", prependTo: "prepend", insertBefore: "before", insertAfter: "after", replaceAll: "replaceWith" }, function(a, b) { ea.fn[a] = function(a) { for (var c, d = 0, e = [], f = ea(a), g = f.length - 1; g >= d; d++) c = d === g ? this : this.clone(!0), ea(f[d])[b](c), Z.apply(e, c.get()); return this.pushStack(e) } });
        var $a, _a = {};
        ! function() {
            var a;
            ca.shrinkWrapBlocks = function() {
                if (null != a) return a;
                a = !1;
                var b, c, d;
                return c = oa.getElementsByTagName("body")[0], c && c.style ? (b = oa.createElement("div"), d = oa.createElement("div"), d.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", c.appendChild(d).appendChild(b), typeof b.style.zoom !== xa && (b.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:1px;width:1px;zoom:1", b.appendChild(oa.createElement("div")).style.width = "5px", a = 3 !== b.offsetWidth), c.removeChild(d), a) : void 0
            }
        }();
        var ab, bb, cb = /^margin/,
            db = new RegExp("^(" + Aa + ")(?!px)[a-z%]+$", "i"),
            eb = /^(top|right|bottom|left)$/;
        a.getComputedStyle ? (ab = function(b) { return b.ownerDocument.defaultView.opener ? b.ownerDocument.defaultView.getComputedStyle(b, null) : a.getComputedStyle(b, null) }, bb = function(a, b, c) { var d, e, f, g, h = a.style; return c = c || ab(a), g = c ? c.getPropertyValue(b) || c[b] : void 0, c && ("" !== g || ea.contains(a.ownerDocument, a) || (g = ea.style(a, b)), db.test(g) && cb.test(b) && (d = h.width, e = h.minWidth, f = h.maxWidth, h.minWidth = h.maxWidth = h.width = g, g = c.width, h.width = d, h.minWidth = e, h.maxWidth = f)), void 0 === g ? g : g + "" }) : oa.documentElement.currentStyle && (ab = function(a) { return a.currentStyle }, bb = function(a, b, c) { var d, e, f, g, h = a.style; return c = c || ab(a), g = c ? c[b] : void 0, null == g && h && h[b] && (g = h[b]), db.test(g) && !eb.test(b) && (d = h.left, e = a.runtimeStyle, f = e && e.left, f && (e.left = a.currentStyle.left), h.left = "fontSize" === b ? "1em" : g, g = h.pixelLeft + "px", h.left = d, f && (e.left = f)), void 0 === g ? g : g + "" || "auto" }), ! function() {
            function b() {
                var b, c, d, e;
                c = oa.getElementsByTagName("body")[0], c && c.style && (b = oa.createElement("div"), d = oa.createElement("div"), d.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", c.appendChild(d).appendChild(b), b.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute", f = g = !1, i = !0, a.getComputedStyle && (f = "1%" !== (a.getComputedStyle(b, null) || {}).top, g = "4px" === (a.getComputedStyle(b, null) || { width: "4px" }).width, e = b.appendChild(oa.createElement("div")), e.style.cssText = b.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0", e.style.marginRight = e.style.width = "0", b.style.width = "1px", i = !parseFloat((a.getComputedStyle(e, null) || {}).marginRight), b.removeChild(e)), b.innerHTML = "<table><tr><td></td><td>t</td></tr></table>", e = b.getElementsByTagName("td"), e[0].style.cssText = "margin:0;border:0;padding:0;display:none", h = 0 === e[0].offsetHeight, h && (e[0].style.display = "", e[1].style.display = "none", h = 0 === e[0].offsetHeight), c.removeChild(d))
            }
            var c, d, e, f, g, h, i;
            c = oa.createElement("div"), c.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", e = c.getElementsByTagName("a")[0], (d = e && e.style) && (d.cssText = "float:left;opacity:.5", ca.opacity = "0.5" === d.opacity, ca.cssFloat = !!d.cssFloat, c.style.backgroundClip = "content-box", c.cloneNode(!0).style.backgroundClip = "", ca.clearCloneStyle = "content-box" === c.style.backgroundClip, ca.boxSizing = "" === d.boxSizing || "" === d.MozBoxSizing || "" === d.WebkitBoxSizing, ea.extend(ca, { reliableHiddenOffsets: function() { return null == h && b(), h }, boxSizingReliable: function() { return null == g && b(), g }, pixelPosition: function() { return null == f && b(), f }, reliableMarginRight: function() { return null == i && b(), i } }))
        }(), ea.swap = function(a, b, c, d) {
            var e, f, g = {};
            for (f in b) g[f] = a.style[f], a.style[f] = b[f];
            e = c.apply(a, d || []);
            for (f in b) a.style[f] = g[f];
            return e
        };
        var fb = /alpha\([^)]*\)/i,
            gb = /opacity\s*=\s*([^)]*)/,
            hb = /^(none|table(?!-c[ea]).+)/,
            ib = new RegExp("^(" + Aa + ")(.*)$", "i"),
            jb = new RegExp("^([+-])=(" + Aa + ")", "i"),
            kb = { position: "absolute", visibility: "hidden", display: "block" },
            lb = { letterSpacing: "0", fontWeight: "400" },
            mb = ["Webkit", "O", "Moz", "ms"];
        ea.extend({
            cssHooks: { opacity: { get: function(a, b) { if (b) { var c = bb(a, "opacity"); return "" === c ? "1" : c } } } },
            cssNumber: { columnCount: !0, fillOpacity: !0, flexGrow: !0, flexShrink: !0, fontWeight: !0, lineHeight: !0, opacity: !0, order: !0, orphans: !0, widows: !0, zIndex: !0, zoom: !0 },
            cssProps: { "float": ca.cssFloat ? "cssFloat" : "styleFloat" },
            style: function(a, b, c, d) {
                if (a && 3 !== a.nodeType && 8 !== a.nodeType && a.style) {
                    var e, f, g, h = ea.camelCase(b),
                        i = a.style;
                    if (b = ea.cssProps[h] || (ea.cssProps[h] = B(i, h)), g = ea.cssHooks[b] || ea.cssHooks[h], void 0 === c) return g && "get" in g && void 0 !== (e = g.get(a, !1, d)) ? e : i[b];
                    if (f = typeof c, "string" === f && (e = jb.exec(c)) && (c = (e[1] + 1) * e[2] + parseFloat(ea.css(a, b)), f = "number"), null != c && c === c && ("number" !== f || ea.cssNumber[h] || (c += "px"), ca.clearCloneStyle || "" !== c || 0 !== b.indexOf("background") || (i[b] = "inherit"), !(g && "set" in g && void 0 === (c = g.set(a, c, d))))) try { i[b] = c } catch (j) {}
                }
            },
            css: function(a, b, c, d) { var e, f, g, h = ea.camelCase(b); return b = ea.cssProps[h] || (ea.cssProps[h] = B(a.style, h)), g = ea.cssHooks[b] || ea.cssHooks[h], g && "get" in g && (f = g.get(a, !0, c)), void 0 === f && (f = bb(a, b, d)), "normal" === f && b in lb && (f = lb[b]), "" === c || c ? (e = parseFloat(f), c === !0 || ea.isNumeric(e) ? e || 0 : f) : f }
        }), ea.each(["height", "width"], function(a, b) { ea.cssHooks[b] = { get: function(a, c, d) { return c ? hb.test(ea.css(a, "display")) && 0 === a.offsetWidth ? ea.swap(a, kb, function() { return F(a, b, d) }) : F(a, b, d) : void 0 }, set: function(a, c, d) { var e = d && ab(a); return D(a, c, d ? E(a, b, d, ca.boxSizing && "border-box" === ea.css(a, "boxSizing", !1, e), e) : 0) } } }), ca.opacity || (ea.cssHooks.opacity = {
            get: function(a, b) { return gb.test((b && a.currentStyle ? a.currentStyle.filter : a.style.filter) || "") ? .01 * parseFloat(RegExp.$1) + "" : b ? "1" : "" },
            set: function(a, b) {
                var c = a.style,
                    d = a.currentStyle,
                    e = ea.isNumeric(b) ? "alpha(opacity=" + 100 * b + ")" : "",
                    f = d && d.filter || c.filter || "";
                c.zoom = 1, (b >= 1 || "" === b) && "" === ea.trim(f.replace(fb, "")) && c.removeAttribute && (c.removeAttribute("filter"), "" === b || d && !d.filter) || (c.filter = fb.test(f) ? f.replace(fb, e) : f + " " + e)
            }
        }), ea.cssHooks.marginRight = A(ca.reliableMarginRight, function(a, b) { return b ? ea.swap(a, { display: "inline-block" }, bb, [a, "marginRight"]) : void 0 }), ea.each({ margin: "", padding: "", border: "Width" }, function(a, b) { ea.cssHooks[a + b] = { expand: function(c) { for (var d = 0, e = {}, f = "string" == typeof c ? c.split(" ") : [c]; 4 > d; d++) e[a + Ba[d] + b] = f[d] || f[d - 2] || f[0]; return e } }, cb.test(a) || (ea.cssHooks[a + b].set = D) }), ea.fn.extend({
            css: function(a, b) {
                return Da(this, function(a, b, c) {
                    var d, e, f = {},
                        g = 0;
                    if (ea.isArray(b)) { for (d = ab(a), e = b.length; e > g; g++) f[b[g]] = ea.css(a, b[g], !1, d); return f }
                    return void 0 !== c ? ea.style(a, b, c) : ea.css(a, b)
                }, a, b, arguments.length > 1)
            },
            show: function() { return C(this, !0) },
            hide: function() { return C(this) },
            toggle: function(a) { return "boolean" == typeof a ? a ? this.show() : this.hide() : this.each(function() { Ca(this) ? ea(this).show() : ea(this).hide() }) }
        }), ea.Tween = G, G.prototype = { constructor: G, init: function(a, b, c, d, e, f) { this.elem = a, this.prop = c, this.easing = e || "swing", this.options = b, this.start = this.now = this.cur(), this.end = d, this.unit = f || (ea.cssNumber[c] ? "" : "px") }, cur: function() { var a = G.propHooks[this.prop]; return a && a.get ? a.get(this) : G.propHooks._default.get(this) }, run: function(a) { var b, c = G.propHooks[this.prop]; return this.pos = b = this.options.duration ? ea.easing[this.easing](a, this.options.duration * a, 0, 1, this.options.duration) : a, this.now = (this.end - this.start) * b + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), c && c.set ? c.set(this) : G.propHooks._default.set(this), this } }, G.prototype.init.prototype = G.prototype, G.propHooks = { _default: { get: function(a) { var b; return null == a.elem[a.prop] || a.elem.style && null != a.elem.style[a.prop] ? (b = ea.css(a.elem, a.prop, ""), b && "auto" !== b ? b : 0) : a.elem[a.prop] }, set: function(a) { ea.fx.step[a.prop] ? ea.fx.step[a.prop](a) : a.elem.style && (null != a.elem.style[ea.cssProps[a.prop]] || ea.cssHooks[a.prop]) ? ea.style(a.elem, a.prop, a.now + a.unit) : a.elem[a.prop] = a.now } } }, G.propHooks.scrollTop = G.propHooks.scrollLeft = { set: function(a) { a.elem.nodeType && a.elem.parentNode && (a.elem[a.prop] = a.now) } }, ea.easing = { linear: function(a) { return a }, swing: function(a) { return .5 - Math.cos(a * Math.PI) / 2 } }, ea.fx = G.prototype.init, ea.fx.step = {};
        var nb, ob, pb = /^(?:toggle|show|hide)$/,
            qb = new RegExp("^(?:([+-])=|)(" + Aa + ")([a-z%]*)$", "i"),
            rb = /queueHooks$/,
            sb = [K],
            tb = {
                "*": [function(a, b) {
                    var c = this.createTween(a, b),
                        d = c.cur(),
                        e = qb.exec(b),
                        f = e && e[3] || (ea.cssNumber[a] ? "" : "px"),
                        g = (ea.cssNumber[a] || "px" !== f && +d) && qb.exec(ea.css(c.elem, a)),
                        h = 1,
                        i = 20;
                    if (g && g[3] !== f) {
                        f = f || g[3], e = e || [], g = +d || 1;
                        do h = h || ".5", g /= h, ea.style(c.elem, a, g + f); while (h !== (h = c.cur() / d) && 1 !== h && --i)
                    }
                    return e && (g = c.start = +g || +d || 0, c.unit = f, c.end = e[1] ? g + (e[1] + 1) * e[2] : +e[2]), c
                }]
            };
        ea.Animation = ea.extend(M, { tweener: function(a, b) { ea.isFunction(a) ? (b = a, a = ["*"]) : a = a.split(" "); for (var c, d = 0, e = a.length; e > d; d++) c = a[d], tb[c] = tb[c] || [], tb[c].unshift(b) }, prefilter: function(a, b) { b ? sb.unshift(a) : sb.push(a) } }), ea.speed = function(a, b, c) { var d = a && "object" == typeof a ? ea.extend({}, a) : { complete: c || !c && b || ea.isFunction(a) && a, duration: a, easing: c && b || b && !ea.isFunction(b) && b }; return d.duration = ea.fx.off ? 0 : "number" == typeof d.duration ? d.duration : d.duration in ea.fx.speeds ? ea.fx.speeds[d.duration] : ea.fx.speeds._default, (null == d.queue || d.queue === !0) && (d.queue = "fx"), d.old = d.complete, d.complete = function() { ea.isFunction(d.old) && d.old.call(this), d.queue && ea.dequeue(this, d.queue) }, d }, ea.fn.extend({
                fadeTo: function(a, b, c, d) { return this.filter(Ca).css("opacity", 0).show().end().animate({ opacity: b }, a, c, d) },
                animate: function(a, b, c, d) {
                    var e = ea.isEmptyObject(a),
                        f = ea.speed(b, c, d),
                        g = function() {
                            var b = M(this, ea.extend({}, a), f);
                            (e || ea._data(this, "finish")) && b.stop(!0)
                        };
                    return g.finish = g, e || f.queue === !1 ? this.each(g) : this.queue(f.queue, g)
                },
                stop: function(a, b, c) {
                    var d = function(a) {
                        var b = a.stop;
                        delete a.stop, b(c)
                    };
                    return "string" != typeof a && (c = b, b = a, a = void 0), b && a !== !1 && this.queue(a || "fx", []), this.each(function() {
                        var b = !0,
                            e = null != a && a + "queueHooks",
                            f = ea.timers,
                            g = ea._data(this);
                        if (e) g[e] && g[e].stop && d(g[e]);
                        else
                            for (e in g) g[e] && g[e].stop && rb.test(e) && d(g[e]);
                        for (e = f.length; e--;) f[e].elem !== this || null != a && f[e].queue !== a || (f[e].anim.stop(c), b = !1, f.splice(e, 1));
                        (b || !c) && ea.dequeue(this, a)
                    })
                },
                finish: function(a) {
                    return a !== !1 && (a = a || "fx"), this.each(function() {
                        var b, c = ea._data(this),
                            d = c[a + "queue"],
                            e = c[a + "queueHooks"],
                            f = ea.timers,
                            g = d ? d.length : 0;
                        for (c.finish = !0, ea.queue(this, a, []), e && e.stop && e.stop.call(this, !0), b = f.length; b--;) f[b].elem === this && f[b].queue === a && (f[b].anim.stop(!0), f.splice(b, 1));
                        for (b = 0; g > b; b++) d[b] && d[b].finish && d[b].finish.call(this);
                        delete c.finish
                    })
                }
            }), ea.each(["toggle", "show", "hide"], function(a, b) {
                var c = ea.fn[b];
                ea.fn[b] = function(a, d, e) { return null == a || "boolean" == typeof a ? c.apply(this, arguments) : this.animate(I(b, !0), a, d, e) }
            }), ea.each({ slideDown: I("show"), slideUp: I("hide"), slideToggle: I("toggle"), fadeIn: { opacity: "show" }, fadeOut: { opacity: "hide" }, fadeToggle: { opacity: "toggle" } }, function(a, b) { ea.fn[a] = function(a, c, d) { return this.animate(b, a, c, d) } }), ea.timers = [], ea.fx.tick = function() {
                var a, b = ea.timers,
                    c = 0;
                for (nb = ea.now(); c < b.length; c++) a = b[c], a() || b[c] !== a || b.splice(c--, 1);
                b.length || ea.fx.stop(), nb = void 0
            }, ea.fx.timer = function(a) { ea.timers.push(a), a() ? ea.fx.start() : ea.timers.pop() }, ea.fx.interval = 13, ea.fx.start = function() { ob || (ob = setInterval(ea.fx.tick, ea.fx.interval)) }, ea.fx.stop = function() { clearInterval(ob), ob = null }, ea.fx.speeds = { slow: 600, fast: 200, _default: 400 }, ea.fn.delay = function(a, b) {
                return a = ea.fx ? ea.fx.speeds[a] || a : a, b = b || "fx", this.queue(b, function(b, c) {
                    var d = setTimeout(b, a);
                    c.stop = function() { clearTimeout(d) }
                })
            },
            function() {
                var a, b, c, d, e;
                b = oa.createElement("div"), b.setAttribute("className", "t"), b.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", d = b.getElementsByTagName("a")[0], c = oa.createElement("select"), e = c.appendChild(oa.createElement("option")), a = b.getElementsByTagName("input")[0], d.style.cssText = "top:1px", ca.getSetAttribute = "t" !== b.className, ca.style = /top/.test(d.getAttribute("style")), ca.hrefNormalized = "/a" === d.getAttribute("href"), ca.checkOn = !!a.value, ca.optSelected = e.selected, ca.enctype = !!oa.createElement("form").enctype, c.disabled = !0, ca.optDisabled = !e.disabled, a = oa.createElement("input"), a.setAttribute("value", ""), ca.input = "" === a.getAttribute("value"), a.value = "t", a.setAttribute("type", "radio"), ca.radioValue = "t" === a.value
            }();
        var ub = /\r/g;
        ea.fn.extend({
            val: function(a) {
                var b, c, d, e = this[0];
                return arguments.length ? (d = ea.isFunction(a), this.each(function(c) {
                    var e;
                    1 === this.nodeType && (e = d ? a.call(this, c, ea(this).val()) : a, null == e ? e = "" : "number" == typeof e ? e += "" : ea.isArray(e) && (e = ea.map(e, function(a) { return null == a ? "" : a + "" })), b = ea.valHooks[this.type] || ea.valHooks[this.nodeName.toLowerCase()], b && "set" in b && void 0 !== b.set(this, e, "value") || (this.value = e))
                })) : e ? (b = ea.valHooks[e.type] || ea.valHooks[e.nodeName.toLowerCase()], b && "get" in b && void 0 !== (c = b.get(e, "value")) ? c : (c = e.value, "string" == typeof c ? c.replace(ub, "") : null == c ? "" : c)) : void 0
            }
        }), ea.extend({
            valHooks: {
                option: { get: function(a) { var b = ea.find.attr(a, "value"); return null != b ? b : ea.trim(ea.text(a)) } },
                select: {
                    get: function(a) {
                        for (var b, c, d = a.options, e = a.selectedIndex, f = "select-one" === a.type || 0 > e, g = f ? null : [], h = f ? e + 1 : d.length, i = 0 > e ? h : f ? e : 0; h > i; i++)
                            if (c = d[i], !(!c.selected && i !== e || (ca.optDisabled ? c.disabled : null !== c.getAttribute("disabled")) || c.parentNode.disabled && ea.nodeName(c.parentNode, "optgroup"))) {
                                if (b = ea(c).val(), f) return b;
                                g.push(b)
                            }
                        return g
                    },
                    set: function(a, b) {
                        for (var c, d, e = a.options, f = ea.makeArray(b), g = e.length; g--;)
                            if (d = e[g], ea.inArray(ea.valHooks.option.get(d), f) >= 0) try { d.selected = c = !0 } catch (h) { d.scrollHeight } else d.selected = !1;
                        return c || (a.selectedIndex = -1), e
                    }
                }
            }
        }), ea.each(["radio", "checkbox"], function() { ea.valHooks[this] = { set: function(a, b) { return ea.isArray(b) ? a.checked = ea.inArray(ea(a).val(), b) >= 0 : void 0 } }, ca.checkOn || (ea.valHooks[this].get = function(a) { return null === a.getAttribute("value") ? "on" : a.value }) });
        var vb, wb, xb = ea.expr.attrHandle,
            yb = /^(?:checked|selected)$/i,
            zb = ca.getSetAttribute,
            Ab = ca.input;
        ea.fn.extend({ attr: function(a, b) { return Da(this, ea.attr, a, b, arguments.length > 1) }, removeAttr: function(a) { return this.each(function() { ea.removeAttr(this, a) }) } }), ea.extend({
            attr: function(a, b, c) { var d, e, f = a.nodeType; if (a && 3 !== f && 8 !== f && 2 !== f) return typeof a.getAttribute === xa ? ea.prop(a, b, c) : (1 === f && ea.isXMLDoc(a) || (b = b.toLowerCase(), d = ea.attrHooks[b] || (ea.expr.match.bool.test(b) ? wb : vb)), void 0 === c ? d && "get" in d && null !== (e = d.get(a, b)) ? e : (e = ea.find.attr(a, b), null == e ? void 0 : e) : null !== c ? d && "set" in d && void 0 !== (e = d.set(a, c, b)) ? e : (a.setAttribute(b, c + ""), c) : void ea.removeAttr(a, b)) },
            removeAttr: function(a, b) {
                var c, d, e = 0,
                    f = b && b.match(ta);
                if (f && 1 === a.nodeType)
                    for (; c = f[e++];) d = ea.propFix[c] || c, ea.expr.match.bool.test(c) ? Ab && zb || !yb.test(c) ? a[d] = !1 : a[ea.camelCase("default-" + c)] = a[d] = !1 : ea.attr(a, c, ""), a.removeAttribute(zb ? c : d)
            },
            attrHooks: { type: { set: function(a, b) { if (!ca.radioValue && "radio" === b && ea.nodeName(a, "input")) { var c = a.value; return a.setAttribute("type", b), c && (a.value = c), b } } } }
        }), wb = { set: function(a, b, c) { return b === !1 ? ea.removeAttr(a, c) : Ab && zb || !yb.test(c) ? a.setAttribute(!zb && ea.propFix[c] || c, c) : a[ea.camelCase("default-" + c)] = a[c] = !0, c } }, ea.each(ea.expr.match.bool.source.match(/\w+/g), function(a, b) {
            var c = xb[b] || ea.find.attr;
            xb[b] = Ab && zb || !yb.test(b) ? function(a, b, d) { var e, f; return d || (f = xb[b], xb[b] = e, e = null != c(a, b, d) ? b.toLowerCase() : null, xb[b] = f), e } : function(a, b, c) { return c ? void 0 : a[ea.camelCase("default-" + b)] ? b.toLowerCase() : null }
        }), Ab && zb || (ea.attrHooks.value = { set: function(a, b, c) { return ea.nodeName(a, "input") ? void(a.defaultValue = b) : vb && vb.set(a, b, c) } }), zb || (vb = { set: function(a, b, c) { var d = a.getAttributeNode(c); return d || a.setAttributeNode(d = a.ownerDocument.createAttribute(c)), d.value = b += "", "value" === c || b === a.getAttribute(c) ? b : void 0 } }, xb.id = xb.name = xb.coords = function(a, b, c) { var d; return c ? void 0 : (d = a.getAttributeNode(b)) && "" !== d.value ? d.value : null }, ea.valHooks.button = { get: function(a, b) { var c = a.getAttributeNode(b); return c && c.specified ? c.value : void 0 }, set: vb.set }, ea.attrHooks.contenteditable = { set: function(a, b, c) { vb.set(a, "" !== b && b, c) } }, ea.each(["width", "height"], function(a, b) { ea.attrHooks[b] = { set: function(a, c) { return "" === c ? (a.setAttribute(b, "auto"), c) : void 0 } } })), ca.style || (ea.attrHooks.style = { get: function(a) { return a.style.cssText || void 0 }, set: function(a, b) { return a.style.cssText = b + "" } });
        var Bb = /^(?:input|select|textarea|button|object)$/i,
            Cb = /^(?:a|area)$/i;
        ea.fn.extend({ prop: function(a, b) { return Da(this, ea.prop, a, b, arguments.length > 1) }, removeProp: function(a) { return a = ea.propFix[a] || a, this.each(function() { try { this[a] = void 0, delete this[a] } catch (b) {} }) } }), ea.extend({ propFix: { "for": "htmlFor", "class": "className" }, prop: function(a, b, c) { var d, e, f, g = a.nodeType; if (a && 3 !== g && 8 !== g && 2 !== g) return f = 1 !== g || !ea.isXMLDoc(a), f && (b = ea.propFix[b] || b, e = ea.propHooks[b]), void 0 !== c ? e && "set" in e && void 0 !== (d = e.set(a, c, b)) ? d : a[b] = c : e && "get" in e && null !== (d = e.get(a, b)) ? d : a[b] }, propHooks: { tabIndex: { get: function(a) { var b = ea.find.attr(a, "tabindex"); return b ? parseInt(b, 10) : Bb.test(a.nodeName) || Cb.test(a.nodeName) && a.href ? 0 : -1 } } } }), ca.hrefNormalized || ea.each(["href", "src"], function(a, b) { ea.propHooks[b] = { get: function(a) { return a.getAttribute(b, 4) } } }), ca.optSelected || (ea.propHooks.selected = { get: function(a) { var b = a.parentNode; return b && (b.selectedIndex, b.parentNode && b.parentNode.selectedIndex), null } }), ea.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() { ea.propFix[this.toLowerCase()] = this }), ca.enctype || (ea.propFix.enctype = "encoding");
        var Db = /[\t\r\n\f]/g;
        ea.fn.extend({
            addClass: function(a) {
                var b, c, d, e, f, g, h = 0,
                    i = this.length,
                    j = "string" == typeof a && a;
                if (ea.isFunction(a)) return this.each(function(b) { ea(this).addClass(a.call(this, b, this.className)) });
                if (j)
                    for (b = (a || "").match(ta) || []; i > h; h++)
                        if (c = this[h], d = 1 === c.nodeType && (c.className ? (" " + c.className + " ").replace(Db, " ") : " ")) {
                            for (f = 0; e = b[f++];) d.indexOf(" " + e + " ") < 0 && (d += e + " ");
                            g = ea.trim(d), c.className !== g && (c.className = g)
                        }
                return this
            },
            removeClass: function(a) {
                var b, c, d, e, f, g, h = 0,
                    i = this.length,
                    j = 0 === arguments.length || "string" == typeof a && a;
                if (ea.isFunction(a)) return this.each(function(b) { ea(this).removeClass(a.call(this, b, this.className)) });
                if (j)
                    for (b = (a || "").match(ta) || []; i > h; h++)
                        if (c = this[h], d = 1 === c.nodeType && (c.className ? (" " + c.className + " ").replace(Db, " ") : "")) {
                            for (f = 0; e = b[f++];)
                                for (; d.indexOf(" " + e + " ") >= 0;) d = d.replace(" " + e + " ", " ");
                            g = a ? ea.trim(d) : "", c.className !== g && (c.className = g)
                        }
                return this
            },
            toggleClass: function(a, b) {
                var c = typeof a;
                return "boolean" == typeof b && "string" === c ? b ? this.addClass(a) : this.removeClass(a) : this.each(ea.isFunction(a) ? function(c) { ea(this).toggleClass(a.call(this, c, this.className, b), b) } : function() {
                    if ("string" === c)
                        for (var b, d = 0, e = ea(this), f = a.match(ta) || []; b = f[d++];) e.hasClass(b) ? e.removeClass(b) : e.addClass(b);
                    else(c === xa || "boolean" === c) && (this.className && ea._data(this, "__className__", this.className), this.className = this.className || a === !1 ? "" : ea._data(this, "__className__") || "")
                })
            },
            hasClass: function(a) {
                for (var b = " " + a + " ", c = 0, d = this.length; d > c; c++)
                    if (1 === this[c].nodeType && (" " + this[c].className + " ").replace(Db, " ").indexOf(b) >= 0) return !0;
                return !1
            }
        }), ea.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(a, b) { ea.fn[b] = function(a, c) { return arguments.length > 0 ? this.on(b, null, a, c) : this.trigger(b) } }), ea.fn.extend({ hover: function(a, b) { return this.mouseenter(a).mouseleave(b || a) }, bind: function(a, b, c) { return this.on(a, null, b, c) }, unbind: function(a, b) { return this.off(a, null, b) }, delegate: function(a, b, c, d) { return this.on(b, a, c, d) }, undelegate: function(a, b, c) { return 1 === arguments.length ? this.off(a, "**") : this.off(b, a || "**", c) } });
        var Eb = ea.now(),
            Fb = /\?/,
            Gb = /(,)|(\[|{)|(}|])|"(?:[^"\\\r\n]|\\["\\\/bfnrt]|\\u[\da-fA-F]{4})*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g;
        ea.parseJSON = function(b) {
            if (a.JSON && a.JSON.parse) return a.JSON.parse(b + "");
            var c, d = null,
                e = ea.trim(b + "");
            return e && !ea.trim(e.replace(Gb, function(a, b, e, f) { return c && b && (d = 0), 0 === d ? a : (c = e || b, d += !f - !e, "") })) ? Function("return " + e)() : ea.error("Invalid JSON: " + b)
        }, ea.parseXML = function(b) { var c, d; if (!b || "string" != typeof b) return null; try { a.DOMParser ? (d = new DOMParser, c = d.parseFromString(b, "text/xml")) : (c = new ActiveXObject("Microsoft.XMLDOM"), c.async = "false", c.loadXML(b)) } catch (e) { c = void 0 } return c && c.documentElement && !c.getElementsByTagName("parsererror").length || ea.error("Invalid XML: " + b), c };
        var Hb, Ib, Jb = /#.*$/,
            Kb = /([?&])_=[^&]*/,
            Lb = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm,
            Mb = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
            Nb = /^(?:GET|HEAD)$/,
            Ob = /^\/\//,
            Pb = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,
            Qb = {},
            Rb = {},
            Sb = "*/".concat("*");
        try { Ib = location.href } catch (Tb) { Ib = oa.createElement("a"), Ib.href = "", Ib = Ib.href }
        Hb = Pb.exec(Ib.toLowerCase()) || [], ea.extend({
            active: 0,
            lastModified: {},
            etag: {},
            ajaxSettings: { url: Ib, type: "GET", isLocal: Mb.test(Hb[1]), global: !0, processData: !0, async: !0, contentType: "application/x-www-form-urlencoded; charset=UTF-8", accepts: { "*": Sb, text: "text/plain", html: "text/html", xml: "application/xml, text/xml", json: "application/json, text/javascript" }, contents: { xml: /xml/, html: /html/, json: /json/ }, responseFields: { xml: "responseXML", text: "responseText", json: "responseJSON" }, converters: { "* text": String, "text html": !0, "text json": ea.parseJSON, "text xml": ea.parseXML }, flatOptions: { url: !0, context: !0 } },
            ajaxSetup: function(a, b) { return b ? P(P(a, ea.ajaxSettings), b) : P(ea.ajaxSettings, a) },
            ajaxPrefilter: N(Qb),
            ajaxTransport: N(Rb),
            ajax: function(a, b) {
                function c(a, b, c, d) {
                    var e, k, r, s, u, w = b;
                    2 !== t && (t = 2, h && clearTimeout(h), j = void 0, g = d || "", v.readyState = a > 0 ? 4 : 0, e = a >= 200 && 300 > a || 304 === a, c && (s = Q(l, v, c)), s = R(l, s, v, e), e ? (l.ifModified && (u = v.getResponseHeader("Last-Modified"), u && (ea.lastModified[f] = u), u = v.getResponseHeader("etag"), u && (ea.etag[f] = u)), 204 === a || "HEAD" === l.type ? w = "nocontent" : 304 === a ? w = "notmodified" : (w = s.state, k = s.data, r = s.error, e = !r)) : (r = w, (a || !w) && (w = "error", 0 > a && (a = 0))), v.status = a, v.statusText = (b || w) + "", e ? o.resolveWith(m, [k, w, v]) : o.rejectWith(m, [v, w, r]), v.statusCode(q), q = void 0, i && n.trigger(e ? "ajaxSuccess" : "ajaxError", [v, l, e ? k : r]), p.fireWith(m, [v, w]), i && (n.trigger("ajaxComplete", [v, l]), --ea.active || ea.event.trigger("ajaxStop")))
                }
                "object" == typeof a && (b = a, a = void 0), b = b || {};
                var d, e, f, g, h, i, j, k, l = ea.ajaxSetup({}, b),
                    m = l.context || l,
                    n = l.context && (m.nodeType || m.jquery) ? ea(m) : ea.event,
                    o = ea.Deferred(),
                    p = ea.Callbacks("once memory"),
                    q = l.statusCode || {},
                    r = {},
                    s = {},
                    t = 0,
                    u = "canceled",
                    v = {
                        readyState: 0,
                        getResponseHeader: function(a) {
                            var b;
                            if (2 === t) {
                                if (!k)
                                    for (k = {}; b = Lb.exec(g);) k[b[1].toLowerCase()] = b[2];
                                b = k[a.toLowerCase()]
                            }
                            return null == b ? null : b
                        },
                        getAllResponseHeaders: function() { return 2 === t ? g : null },
                        setRequestHeader: function(a, b) { var c = a.toLowerCase(); return t || (a = s[c] = s[c] || a, r[a] = b), this },
                        overrideMimeType: function(a) { return t || (l.mimeType = a), this },
                        statusCode: function(a) {
                            var b;
                            if (a)
                                if (2 > t)
                                    for (b in a) q[b] = [q[b], a[b]];
                                else v.always(a[v.status]);
                            return this
                        },
                        abort: function(a) { var b = a || u; return j && j.abort(b), c(0, b), this }
                    };
                if (o.promise(v).complete = p.add, v.success = v.done, v.error = v.fail, l.url = ((a || l.url || Ib) + "").replace(Jb, "").replace(Ob, Hb[1] + "//"), l.type = b.method || b.type || l.method || l.type, l.dataTypes = ea.trim(l.dataType || "*").toLowerCase().match(ta) || [""], null == l.crossDomain && (d = Pb.exec(l.url.toLowerCase()), l.crossDomain = !(!d || d[1] === Hb[1] && d[2] === Hb[2] && (d[3] || ("http:" === d[1] ? "80" : "443")) === (Hb[3] || ("http:" === Hb[1] ? "80" : "443")))), l.data && l.processData && "string" != typeof l.data && (l.data = ea.param(l.data, l.traditional)), O(Qb, l, b, v), 2 === t) return v;
                i = ea.event && l.global, i && 0 === ea.active++ && ea.event.trigger("ajaxStart"), l.type = l.type.toUpperCase(), l.hasContent = !Nb.test(l.type), f = l.url, l.hasContent || (l.data && (f = l.url += (Fb.test(f) ? "&" : "?") + l.data, delete l.data), l.cache === !1 && (l.url = Kb.test(f) ? f.replace(Kb, "$1_=" + Eb++) : f + (Fb.test(f) ? "&" : "?") + "_=" + Eb++)), l.ifModified && (ea.lastModified[f] && v.setRequestHeader("If-Modified-Since", ea.lastModified[f]), ea.etag[f] && v.setRequestHeader("If-None-Match", ea.etag[f])), (l.data && l.hasContent && l.contentType !== !1 || b.contentType) && v.setRequestHeader("Content-Type", l.contentType), v.setRequestHeader("Accept", l.dataTypes[0] && l.accepts[l.dataTypes[0]] ? l.accepts[l.dataTypes[0]] + ("*" !== l.dataTypes[0] ? ", " + Sb + "; q=0.01" : "") : l.accepts["*"]);
                for (e in l.headers) v.setRequestHeader(e, l.headers[e]);
                if (l.beforeSend && (l.beforeSend.call(m, v, l) === !1 || 2 === t)) return v.abort();
                u = "abort";
                for (e in { success: 1, error: 1, complete: 1 }) v[e](l[e]);
                if (j = O(Rb, l, b, v)) {
                    v.readyState = 1, i && n.trigger("ajaxSend", [v, l]), l.async && l.timeout > 0 && (h = setTimeout(function() { v.abort("timeout") }, l.timeout));
                    try { t = 1, j.send(r, c) } catch (w) {
                        if (!(2 > t)) throw w;
                        c(-1, w)
                    }
                } else c(-1, "No Transport");
                return v
            },
            getJSON: function(a, b, c) { return ea.get(a, b, c, "json") },
            getScript: function(a, b) { return ea.get(a, void 0, b, "script") }
        }), ea.each(["get", "post"], function(a, b) { ea[b] = function(a, c, d, e) { return ea.isFunction(c) && (e = e || d, d = c, c = void 0), ea.ajax({ url: a, type: b, dataType: e, data: c, success: d }) } }), ea._evalUrl = function(a) { return ea.ajax({ url: a, type: "GET", dataType: "script", async: !1, global: !1, "throws": !0 }) }, ea.fn.extend({
            wrapAll: function(a) {
                if (ea.isFunction(a)) return this.each(function(b) { ea(this).wrapAll(a.call(this, b)) });
                if (this[0]) {
                    var b = ea(a, this[0].ownerDocument).eq(0).clone(!0);
                    this[0].parentNode && b.insertBefore(this[0]), b.map(function() { for (var a = this; a.firstChild && 1 === a.firstChild.nodeType;) a = a.firstChild; return a }).append(this)
                }
                return this
            },
            wrapInner: function(a) {
                return this.each(ea.isFunction(a) ? function(b) { ea(this).wrapInner(a.call(this, b)) } : function() {
                    var b = ea(this),
                        c = b.contents();
                    c.length ? c.wrapAll(a) : b.append(a)
                })
            },
            wrap: function(a) { var b = ea.isFunction(a); return this.each(function(c) { ea(this).wrapAll(b ? a.call(this, c) : a) }) },
            unwrap: function() { return this.parent().each(function() { ea.nodeName(this, "body") || ea(this).replaceWith(this.childNodes) }).end() }
        }), ea.expr.filters.hidden = function(a) { return a.offsetWidth <= 0 && a.offsetHeight <= 0 || !ca.reliableHiddenOffsets() && "none" === (a.style && a.style.display || ea.css(a, "display")) }, ea.expr.filters.visible = function(a) { return !ea.expr.filters.hidden(a) };
        var Ub = /%20/g,
            Vb = /\[\]$/,
            Wb = /\r?\n/g,
            Xb = /^(?:submit|button|image|reset|file)$/i,
            Yb = /^(?:input|select|textarea|keygen)/i;
        ea.param = function(a, b) {
            var c, d = [],
                e = function(a, b) { b = ea.isFunction(b) ? b() : null == b ? "" : b, d[d.length] = encodeURIComponent(a) + "=" + encodeURIComponent(b) };
            if (void 0 === b && (b = ea.ajaxSettings && ea.ajaxSettings.traditional), ea.isArray(a) || a.jquery && !ea.isPlainObject(a)) ea.each(a, function() { e(this.name, this.value) });
            else
                for (c in a) S(c, a[c], b, e);
            return d.join("&").replace(Ub, "+")
        }, ea.fn.extend({ serialize: function() { return ea.param(this.serializeArray()) }, serializeArray: function() { return this.map(function() { var a = ea.prop(this, "elements"); return a ? ea.makeArray(a) : this }).filter(function() { var a = this.type; return this.name && !ea(this).is(":disabled") && Yb.test(this.nodeName) && !Xb.test(a) && (this.checked || !Ea.test(a)) }).map(function(a, b) { var c = ea(this).val(); return null == c ? null : ea.isArray(c) ? ea.map(c, function(a) { return { name: b.name, value: a.replace(Wb, "\r\n") } }) : { name: b.name, value: c.replace(Wb, "\r\n") } }).get() } }), ea.ajaxSettings.xhr = void 0 !== a.ActiveXObject ? function() { return !this.isLocal && /^(get|post|head|put|delete|options)$/i.test(this.type) && T() || U() } : T;
        var Zb = 0,
            $b = {},
            _b = ea.ajaxSettings.xhr();
        a.attachEvent && a.attachEvent("onunload", function() { for (var a in $b) $b[a](void 0, !0) }), ca.cors = !!_b && "withCredentials" in _b, _b = ca.ajax = !!_b, _b && ea.ajaxTransport(function(a) {
            if (!a.crossDomain || ca.cors) {
                var b;
                return {
                    send: function(c, d) {
                        var e, f = a.xhr(),
                            g = ++Zb;
                        if (f.open(a.type, a.url, a.async, a.username, a.password), a.xhrFields)
                            for (e in a.xhrFields) f[e] = a.xhrFields[e];
                        a.mimeType && f.overrideMimeType && f.overrideMimeType(a.mimeType), a.crossDomain || c["X-Requested-With"] || (c["X-Requested-With"] = "XMLHttpRequest");
                        for (e in c) void 0 !== c[e] && f.setRequestHeader(e, c[e] + "");
                        f.send(a.hasContent && a.data || null), b = function(c, e) {
                            var h, i, j;
                            if (b && (e || 4 === f.readyState))
                                if (delete $b[g], b = void 0, f.onreadystatechange = ea.noop, e) 4 !== f.readyState && f.abort();
                                else {
                                    j = {}, h = f.status, "string" == typeof f.responseText && (j.text = f.responseText);
                                    try { i = f.statusText } catch (k) { i = "" }
                                    h || !a.isLocal || a.crossDomain ? 1223 === h && (h = 204) : h = j.text ? 200 : 404
                                }
                            j && d(h, i, j, f.getAllResponseHeaders())
                        }, a.async ? 4 === f.readyState ? setTimeout(b) : f.onreadystatechange = $b[g] = b : b()
                    },
                    abort: function() { b && b(void 0, !0) }
                }
            }
        }), ea.ajaxSetup({ accepts: { script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript" }, contents: { script: /(?:java|ecma)script/ }, converters: { "text script": function(a) { return ea.globalEval(a), a } } }), ea.ajaxPrefilter("script", function(a) { void 0 === a.cache && (a.cache = !1), a.crossDomain && (a.type = "GET", a.global = !1) }), ea.ajaxTransport("script", function(a) {
            if (a.crossDomain) {
                var b, c = oa.head || ea("head")[0] || oa.documentElement;
                return {
                    send: function(d, e) {
                        b = oa.createElement("script"), b.async = !0, a.scriptCharset && (b.charset = a.scriptCharset), b.src = a.url, b.onload = b.onreadystatechange = function(a, c) {
                            (c || !b.readyState || /loaded|complete/.test(b.readyState)) && (b.onload = b.onreadystatechange = null, b.parentNode && b.parentNode.removeChild(b), b = null, c || e(200, "success"))
                        }, c.insertBefore(b, c.firstChild)
                    },
                    abort: function() { b && b.onload(void 0, !0) }
                }
            }
        });
        var ac = [],
            bc = /(=)\?(?=&|$)|\?\?/;
        ea.ajaxSetup({ jsonp: "callback", jsonpCallback: function() { var a = ac.pop() || ea.expando + "_" + Eb++; return this[a] = !0, a } }), ea.ajaxPrefilter("json jsonp", function(b, c, d) { var e, f, g, h = b.jsonp !== !1 && (bc.test(b.url) ? "url" : "string" == typeof b.data && !(b.contentType || "").indexOf("application/x-www-form-urlencoded") && bc.test(b.data) && "data"); return h || "jsonp" === b.dataTypes[0] ? (e = b.jsonpCallback = ea.isFunction(b.jsonpCallback) ? b.jsonpCallback() : b.jsonpCallback, h ? b[h] = b[h].replace(bc, "$1" + e) : b.jsonp !== !1 && (b.url += (Fb.test(b.url) ? "&" : "?") + b.jsonp + "=" + e), b.converters["script json"] = function() { return g || ea.error(e + " was not called"), g[0] }, b.dataTypes[0] = "json", f = a[e], a[e] = function() { g = arguments }, d.always(function() { a[e] = f, b[e] && (b.jsonpCallback = c.jsonpCallback, ac.push(e)), g && ea.isFunction(f) && f(g[0]), g = f = void 0 }), "script") : void 0 }), ea.parseHTML = function(a, b, c) {
            if (!a || "string" != typeof a) return null;
            "boolean" == typeof b && (c = b, b = !1), b = b || oa;
            var d = la.exec(a),
                e = !c && [];
            return d ? [b.createElement(d[1])] : (d = ea.buildFragment([a], b, e), e && e.length && ea(e).remove(), ea.merge([], d.childNodes))
        };
        var cc = ea.fn.load;
        ea.fn.load = function(a, b, c) {
            if ("string" != typeof a && cc) return cc.apply(this, arguments);
            var d, e, f, g = this,
                h = a.indexOf(" ");
            return h >= 0 && (d = ea.trim(a.slice(h, a.length)), a = a.slice(0, h)), ea.isFunction(b) ? (c = b, b = void 0) : b && "object" == typeof b && (f = "POST"), g.length > 0 && ea.ajax({ url: a, type: f, dataType: "html", data: b }).done(function(a) { e = arguments, g.html(d ? ea("<div>").append(ea.parseHTML(a)).find(d) : a) }).complete(c && function(a, b) { g.each(c, e || [a.responseText, b, a]) }), this
        }, ea.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(a, b) { ea.fn[b] = function(a) { return this.on(b, a) } }), ea.expr.filters.animated = function(a) { return ea.grep(ea.timers, function(b) { return a === b.elem }).length };
        var dc = a.document.documentElement;
        ea.offset = {
            setOffset: function(a, b, c) {
                var d, e, f, g, h, i, j, k = ea.css(a, "position"),
                    l = ea(a),
                    m = {};
                "static" === k && (a.style.position = "relative"), h = l.offset(), f = ea.css(a, "top"), i = ea.css(a, "left"), j = ("absolute" === k || "fixed" === k) && ea.inArray("auto", [f, i]) > -1, j ? (d = l.position(), g = d.top, e = d.left) : (g = parseFloat(f) || 0, e = parseFloat(i) || 0), ea.isFunction(b) && (b = b.call(a, c, h)), null != b.top && (m.top = b.top - h.top + g), null != b.left && (m.left = b.left - h.left + e), "using" in b ? b.using.call(a, m) : l.css(m)
            }
        }, ea.fn.extend({
            offset: function(a) {
                if (arguments.length) return void 0 === a ? this : this.each(function(b) { ea.offset.setOffset(this, a, b) });
                var b, c, d = { top: 0, left: 0 },
                    e = this[0],
                    f = e && e.ownerDocument;
                return f ? (b = f.documentElement, ea.contains(b, e) ? (typeof e.getBoundingClientRect !== xa && (d = e.getBoundingClientRect()), c = V(f), { top: d.top + (c.pageYOffset || b.scrollTop) - (b.clientTop || 0), left: d.left + (c.pageXOffset || b.scrollLeft) - (b.clientLeft || 0) }) : d) : void 0
            },
            position: function() {
                if (this[0]) {
                    var a, b, c = { top: 0, left: 0 },
                        d = this[0];
                    return "fixed" === ea.css(d, "position") ? b = d.getBoundingClientRect() : (a = this.offsetParent(), b = this.offset(), ea.nodeName(a[0], "html") || (c = a.offset()), c.top += ea.css(a[0], "borderTopWidth", !0), c.left += ea.css(a[0], "borderLeftWidth", !0)), { top: b.top - c.top - ea.css(d, "marginTop", !0), left: b.left - c.left - ea.css(d, "marginLeft", !0) }
                }
            },
            offsetParent: function() { return this.map(function() { for (var a = this.offsetParent || dc; a && !ea.nodeName(a, "html") && "static" === ea.css(a, "position");) a = a.offsetParent; return a || dc }) }
        }), ea.each({ scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, function(a, b) {
            var c = /Y/.test(b);
            ea.fn[a] = function(d) { return Da(this, function(a, d, e) { var f = V(a); return void 0 === e ? f ? b in f ? f[b] : f.document.documentElement[d] : a[d] : void(f ? f.scrollTo(c ? ea(f).scrollLeft() : e, c ? e : ea(f).scrollTop()) : a[d] = e) }, a, d, arguments.length, null) }
        }), ea.each(["top", "left"], function(a, b) { ea.cssHooks[b] = A(ca.pixelPosition, function(a, c) { return c ? (c = bb(a, b), db.test(c) ? ea(a).position()[b] + "px" : c) : void 0 }) }), ea.each({ Height: "height", Width: "width" }, function(a, b) {
            ea.each({ padding: "inner" + a, content: b, "": "outer" + a }, function(c, d) {
                ea.fn[d] = function(d, e) {
                    var f = arguments.length && (c || "boolean" != typeof d),
                        g = c || (d === !0 || e === !0 ? "margin" : "border");
                    return Da(this, function(b, c, d) { var e; return ea.isWindow(b) ? b.document.documentElement["client" + a] : 9 === b.nodeType ? (e = b.documentElement, Math.max(b.body["scroll" + a], e["scroll" + a], b.body["offset" + a], e["offset" + a], e["client" + a])) : void 0 === d ? ea.css(b, c, g) : ea.style(b, c, d, g) }, b, f ? d : void 0, f, null)
                }
            })
        }), ea.fn.size = function() { return this.length }, ea.fn.andSelf = ea.fn.addBack, "function" == typeof define && define.amd && define("jquery", [], function() { return ea });
        var ec = a.jQuery,
            fc = a.$;
        return ea.noConflict = function(b) { return a.$ === ea && (a.$ = fc), b && a.jQuery === ea && (a.jQuery = ec), ea }, typeof b === xa && (a.jQuery = a.$ = ea), ea
    }), ! function(a) {
        function b() {
            var a = h();
            a !== i && (i = a, l.trigger("orientationchange"))
        }

        function c(b, c, d, e) {
            var f = d.type;
            d.type = c, a.event.dispatch.call(b, d, e), d.type = f
        }
        a.attrFn = a.attrFn || {};
        var d = navigator.userAgent.toLowerCase(),
            e = d.indexOf("chrome") > -1 && (d.indexOf("windows") > -1 || d.indexOf("macintosh") > -1 || d.indexOf("linux") > -1) && d.indexOf("mobile") < 0 && d.indexOf("android") < 0,
            f = { tap_pixel_range: 5, swipe_h_threshold: 50, swipe_v_threshold: 50, taphold_threshold: 750, doubletap_int: 500, touch_capable: "ontouchstart" in window && !e, orientation_support: "orientation" in window && "onorientationchange" in window, startevent: "ontouchstart" in window && !e ? "touchstart" : "mousedown", endevent: "ontouchstart" in window && !e ? "touchend" : "mouseup", moveevent: "ontouchstart" in window && !e ? "touchmove" : "mousemove", tapevent: "ontouchstart" in window && !e ? "tap" : "click", scrollevent: "ontouchstart" in window && !e ? "touchmove" : "scroll", hold_timer: null, tap_timer: null };
        a.isTouchCapable = function() { return f.touch_capable }, a.getStartEvent = function() { return f.startevent }, a.getEndEvent = function() { return f.endevent }, a.getMoveEvent = function() { return f.moveevent }, a.getTapEvent = function() { return f.tapevent }, a.getScrollEvent = function() { return f.scrollevent }, a.each(["tapstart", "tapend", "tapmove", "tap", "tap2", "tap3", "tap4", "singletap", "doubletap", "taphold", "swipe", "swipeup", "swiperight", "swipedown", "swipeleft", "swipeend", "scrollstart", "scrollend", "orientationchange"], function(b, c) { a.fn[c] = function(a) { return a ? this.on(c, a) : this.trigger(c) }, a.attrFn[c] = !0 }), a.event.special.tapstart = {
            setup: function() {
                var b = this,
                    d = a(b);
                d.on(f.startevent, function e(a) {
                    if (d.data("callee", e), a.which && 1 !== a.which) return !1;
                    var g = a.originalEvent,
                        h = { position: { x: f.touch_capable ? g.touches[0].screenX : a.screenX, y: f.touch_capable ? g.touches[0].screenY : a.screenY }, offset: { x: Math.round(f.touch_capable ? g.changedTouches[0].pageX - d.offset().left : a.pageX - d.offset().left), y: Math.round(f.touch_capable ? g.changedTouches[0].pageY - d.offset().top : a.pageY - d.offset().top) }, time: Date.now(), target: a.target };
                    return c(b, "tapstart", a, h), !0
                })
            },
            remove: function() { a(this).off(f.startevent, a(this).data.callee) }
        }, a.event.special.tapmove = {
            setup: function() {
                var b = this,
                    d = a(b);
                d.on(f.moveevent, function e(a) {
                    d.data("callee", e);
                    var g = a.originalEvent,
                        h = { position: { x: f.touch_capable ? g.touches[0].screenX : a.screenX, y: f.touch_capable ? g.touches[0].screenY : a.screenY }, offset: { x: Math.round(f.touch_capable ? g.changedTouches[0].pageX - d.offset().left : a.pageX - d.offset().left), y: Math.round(f.touch_capable ? g.changedTouches[0].pageY - d.offset().top : a.pageY - d.offset().top) }, time: Date.now(), target: a.target };
                    return c(b, "tapmove", a, h), !0
                })
            },
            remove: function() { a(this).off(f.moveevent, a(this).data.callee) }
        }, a.event.special.tapend = {
            setup: function() {
                var b = this,
                    d = a(b);
                d.on(f.endevent, function e(a) {
                    d.data("callee", e);
                    var g = a.originalEvent,
                        h = { position: { x: f.touch_capable ? g.changedTouches[0].screenX : a.screenX, y: f.touch_capable ? g.changedTouches[0].screenY : a.screenY }, offset: { x: Math.round(f.touch_capable ? g.changedTouches[0].pageX - d.offset().left : a.pageX - d.offset().left), y: Math.round(f.touch_capable ? g.changedTouches[0].pageY - d.offset().top : a.pageY - d.offset().top) }, time: Date.now(), target: a.target };
                    return c(b, "tapend", a, h), !0
                })
            },
            remove: function() { a(this).off(f.endevent, a(this).data.callee) }
        }, a.event.special.taphold = {
            setup: function() {
                var b, d = this,
                    e = a(d),
                    g = { x: 0, y: 0 },
                    h = 0,
                    i = 0;
                e.on(f.startevent, function j(a) {
                    if (a.which && 1 !== a.which) return !1;
                    e.data("tapheld", !1), b = a.target;
                    var k = a.originalEvent,
                        l = Date.now(),
                        m = { x: f.touch_capable ? k.touches[0].screenX : a.screenX, y: f.touch_capable ? k.touches[0].screenY : a.screenY },
                        n = { x: f.touch_capable ? k.touches[0].pageX - k.touches[0].target.offsetLeft : a.offsetX, y: f.touch_capable ? k.touches[0].pageY - k.touches[0].target.offsetTop : a.offsetY };
                    return g.x = a.originalEvent.targetTouches ? a.originalEvent.targetTouches[0].pageX : a.pageX, g.y = a.originalEvent.targetTouches ? a.originalEvent.targetTouches[0].pageY : a.pageY, h = g.x, i = g.y, f.hold_timer = window.setTimeout(function() {
                        var o = g.x - h,
                            p = g.y - i;
                        if (a.target == b && (g.x == h && g.y == i || o >= -f.tap_pixel_range && o <= f.tap_pixel_range && p >= -f.tap_pixel_range && p <= f.tap_pixel_range)) {
                            e.data("tapheld", !0);
                            var q = Date.now(),
                                r = { x: f.touch_capable ? k.touches[0].screenX : a.screenX, y: f.touch_capable ? k.touches[0].screenY : a.screenY },
                                s = { x: Math.round(f.touch_capable ? k.changedTouches[0].pageX - e.offset().left : a.pageX - e.offset().left), y: Math.round(f.touch_capable ? k.changedTouches[0].pageY - e.offset().top : a.pageY - e.offset().top) },
                                t = q - l,
                                u = { startTime: l, endTime: q, startPosition: m, startOffset: n, endPosition: r, endOffset: s, duration: t, target: a.target };
                            e.data("callee1", j), c(d, "taphold", a, u)
                        }
                    }, f.taphold_threshold), !0
                }).on(f.endevent, function k() { e.data("callee2", k), e.data("tapheld", !1), window.clearTimeout(f.hold_timer) }).on(f.moveevent, function l(a) { e.data("callee3", l), h = a.originalEvent.targetTouches ? a.originalEvent.targetTouches[0].pageX : a.pageX, i = a.originalEvent.targetTouches ? a.originalEvent.targetTouches[0].pageY : a.pageY })
            },
            remove: function() { a(this).off(f.startevent, a(this).data.callee1).off(f.endevent, a(this).data.callee2).off(f.moveevent, a(this).data.callee3) }
        }, a.event.special.doubletap = {
            setup: function() {
                var b, d, e, g, h = this,
                    i = a(h),
                    j = null,
                    k = !1;
                i.on(f.startevent, function l(a) { return (!a.which || 1 === a.which) && (i.data("doubletapped", !1), b = a.target, i.data("callee1", l), e = a.originalEvent, j || (j = { position: { x: f.touch_capable ? e.touches[0].screenX : a.screenX, y: f.touch_capable ? e.touches[0].screenY : a.screenY }, offset: { x: Math.round(f.touch_capable ? e.changedTouches[0].pageX - i.offset().left : a.pageX - i.offset().left), y: Math.round(f.touch_capable ? e.changedTouches[0].pageY - i.offset().top : a.pageY - i.offset().top) }, time: Date.now(), target: a.target }), !0) }).on(f.endevent, function m(a) {
                    var l = Date.now(),
                        n = i.data("lastTouch") || l + 1,
                        o = l - n;
                    if (window.clearTimeout(d), i.data("callee2", m), o < f.doubletap_int && a.target == b && o > 100) {
                        i.data("doubletapped", !0), window.clearTimeout(f.tap_timer);
                        var p = { position: { x: f.touch_capable ? a.originalEvent.changedTouches[0].screenX : a.screenX, y: f.touch_capable ? a.originalEvent.changedTouches[0].screenY : a.screenY }, offset: { x: Math.round(f.touch_capable ? e.changedTouches[0].pageX - i.offset().left : a.pageX - i.offset().left), y: Math.round(f.touch_capable ? e.changedTouches[0].pageY - i.offset().top : a.pageY - i.offset().top) }, time: Date.now(), target: a.target },
                            q = { firstTap: j, secondTap: p, interval: p.time - j.time };
                        k || (c(h, "doubletap", a, q), j = null), k = !0, g = window.setTimeout(function() { k = !1 }, f.doubletap_int)
                    } else i.data("lastTouch", l), d = window.setTimeout(function() { j = null, window.clearTimeout(d) }, f.doubletap_int, [a]);
                    i.data("lastTouch", l)
                })
            },
            remove: function() { a(this).off(f.startevent, a(this).data.callee1).off(f.endevent, a(this).data.callee2) }
        }, a.event.special.singletap = {
            setup: function() {
                var b = this,
                    d = a(b),
                    e = null,
                    g = null,
                    h = { x: 0, y: 0 };
                d.on(f.startevent, function i(a) { return (!a.which || 1 === a.which) && (g = Date.now(), e = a.target, d.data("callee1", i), h.x = a.originalEvent.targetTouches ? a.originalEvent.targetTouches[0].pageX : a.pageX, h.y = a.originalEvent.targetTouches ? a.originalEvent.targetTouches[0].pageY : a.pageY, !0) }).on(f.endevent, function j(a) {
                    if (d.data("callee2", j), a.target == e) {
                        var i = a.originalEvent.changedTouches ? a.originalEvent.changedTouches[0].pageX : a.pageX,
                            k = a.originalEvent.changedTouches ? a.originalEvent.changedTouches[0].pageY : a.pageY;
                        f.tap_timer = window.setTimeout(function() {
                            if (!d.data("doubletapped") && !d.data("tapheld") && h.x == i && h.y == k) {
                                var e = a.originalEvent,
                                    j = { position: { x: f.touch_capable ? e.changedTouches[0].screenX : a.screenX, y: f.touch_capable ? e.changedTouches[0].screenY : a.screenY }, offset: { x: Math.round(f.touch_capable ? e.changedTouches[0].pageX - d.offset().left : a.pageX - d.offset().left), y: Math.round(f.touch_capable ? e.changedTouches[0].pageY - d.offset().top : a.pageY - d.offset().top) }, time: Date.now(), target: a.target };
                                j.time - g < f.taphold_threshold && c(b, "singletap", a, j)
                            }
                        }, f.doubletap_int)
                    }
                })
            },
            remove: function() { a(this).off(f.startevent, a(this).data.callee1).off(f.endevent, a(this).data.callee2) }
        }, a.event.special.tap = {
            setup: function() {
                var b, d, e = this,
                    g = a(e),
                    h = !1,
                    i = null,
                    j = { x: 0, y: 0 };
                g.on(f.startevent, function k(a) { return g.data("callee1", k), (!a.which || 1 === a.which) && (h = !0, j.x = a.originalEvent.targetTouches ? a.originalEvent.targetTouches[0].pageX : a.pageX, j.y = a.originalEvent.targetTouches ? a.originalEvent.targetTouches[0].pageY : a.pageY, b = Date.now(), i = a.target, d = a.originalEvent.targetTouches ? a.originalEvent.targetTouches : [a], !0) }).on(f.endevent, function l(a) {
                    g.data("callee2", l);
                    var k = a.originalEvent.targetTouches ? a.originalEvent.changedTouches[0].pageX : a.pageX,
                        m = a.originalEvent.targetTouches ? a.originalEvent.changedTouches[0].pageY : a.pageY,
                        n = j.x - k,
                        o = j.y - m;
                    if (i == a.target && h && Date.now() - b < f.taphold_threshold && (j.x == k && j.y == m || n >= -f.tap_pixel_range && n <= f.tap_pixel_range && o >= -f.tap_pixel_range && o <= f.tap_pixel_range)) {
                        for (var p = a.originalEvent, q = [], r = 0; r < d.length; r++) {
                            var s = { position: { x: f.touch_capable ? p.changedTouches[r].screenX : a.screenX, y: f.touch_capable ? p.changedTouches[r].screenY : a.screenY }, offset: { x: Math.round(f.touch_capable ? p.changedTouches[r].pageX - g.offset().left : a.pageX - g.offset().left), y: Math.round(f.touch_capable ? p.changedTouches[r].pageY - g.offset().top : a.pageY - g.offset().top) }, time: Date.now(), target: a.target };
                            q.push(s)
                        }
                        c(e, "tap", a, q)
                    }
                })
            },
            remove: function() { a(this).off(f.startevent, a(this).data.callee1).off(f.endevent, a(this).data.callee2) }
        }, a.event.special.swipe = {
            setup: function() {
                function b(c) {
                    h = a(c.currentTarget), h.data("callee1", b), k.x = c.originalEvent.targetTouches ? c.originalEvent.targetTouches[0].pageX : c.pageX, k.y = c.originalEvent.targetTouches ? c.originalEvent.targetTouches[0].pageY : c.pageY, l.x = k.x, l.y = k.y, i = !0;
                    var d = c.originalEvent;
                    e = { position: { x: f.touch_capable ? d.touches[0].screenX : c.screenX, y: f.touch_capable ? d.touches[0].screenY : c.screenY }, offset: { x: Math.round(f.touch_capable ? d.changedTouches[0].pageX - h.offset().left : c.pageX - h.offset().left), y: Math.round(f.touch_capable ? d.changedTouches[0].pageY - h.offset().top : c.pageY - h.offset().top) }, time: Date.now(), target: c.target }
                }

                function c(b) {
                    h = a(b.currentTarget), h.data("callee2", c), l.x = b.originalEvent.targetTouches ? b.originalEvent.targetTouches[0].pageX : b.pageX, l.y = b.originalEvent.targetTouches ? b.originalEvent.targetTouches[0].pageY : b.pageY;
                    var d, g = h.parent().data("xthreshold") ? h.parent().data("xthreshold") : h.data("xthreshold"),
                        m = h.parent().data("ythreshold") ? h.parent().data("ythreshold") : h.data("ythreshold"),
                        n = "undefined" != typeof g && g !== !1 && parseInt(g) ? parseInt(g) : f.swipe_h_threshold,
                        o = "undefined" != typeof m && m !== !1 && parseInt(m) ? parseInt(m) : f.swipe_v_threshold;
                    if (k.y > l.y && k.y - l.y > o && (d = "swipeup"), k.x < l.x && l.x - k.x > n && (d = "swiperight"), k.y < l.y && l.y - k.y > o && (d = "swipedown"), k.x > l.x && k.x - l.x > n && (d = "swipeleft"), void 0 != d && i) {
                        k.x = 0, k.y = 0, l.x = 0, l.y = 0, i = !1;
                        var p = b.originalEvent,
                            q = { position: { x: f.touch_capable ? p.touches[0].screenX : b.screenX, y: f.touch_capable ? p.touches[0].screenY : b.screenY }, offset: { x: Math.round(f.touch_capable ? p.changedTouches[0].pageX - h.offset().left : b.pageX - h.offset().left), y: Math.round(f.touch_capable ? p.changedTouches[0].pageY - h.offset().top : b.pageY - h.offset().top) }, time: Date.now(), target: b.target },
                            r = Math.abs(e.position.x - q.position.x),
                            s = Math.abs(e.position.y - q.position.y),
                            t = { startEvnt: e, endEvnt: q, direction: d.replace("swipe", ""), xAmount: r, yAmount: s, duration: q.time - e.time };
                        j = !0, h.trigger("swipe", t).trigger(d, t)
                    }
                }

                function d(b) {
                    h = a(b.currentTarget);
                    var c = "";
                    if (h.data("callee3", d), j) {
                        var g = h.data("xthreshold"),
                            k = h.data("ythreshold"),
                            l = "undefined" != typeof g && g !== !1 && parseInt(g) ? parseInt(g) : f.swipe_h_threshold,
                            m = "undefined" != typeof k && k !== !1 && parseInt(k) ? parseInt(k) : f.swipe_v_threshold,
                            n = b.originalEvent,
                            o = { position: { x: f.touch_capable ? n.changedTouches[0].screenX : b.screenX, y: f.touch_capable ? n.changedTouches[0].screenY : b.screenY }, offset: { x: Math.round(f.touch_capable ? n.changedTouches[0].pageX - h.offset().left : b.pageX - h.offset().left), y: Math.round(f.touch_capable ? n.changedTouches[0].pageY - h.offset().top : b.pageY - h.offset().top) }, time: Date.now(), target: b.target };
                        e.position.y > o.position.y && e.position.y - o.position.y > m && (c = "swipeup"), e.position.x < o.position.x && o.position.x - e.position.x > l && (c = "swiperight"), e.position.y < o.position.y && o.position.y - e.position.y > m && (c = "swipedown"), e.position.x > o.position.x && e.position.x - o.position.x > l && (c = "swipeleft");
                        var p = Math.abs(e.position.x - o.position.x),
                            q = Math.abs(e.position.y - o.position.y),
                            r = { startEvnt: e, endEvnt: o, direction: c.replace("swipe", ""), xAmount: p, yAmount: q, duration: o.time - e.time };
                        h.trigger("swipeend", r)
                    }
                    i = !1, j = !1
                }
                var e, g = this,
                    h = a(g),
                    i = !1,
                    j = !1,
                    k = { x: 0, y: 0 },
                    l = { x: 0, y: 0 };
                h.on(f.startevent, b), h.on(f.moveevent, c), h.on(f.endevent, d)
            },
            remove: function() { a(this).off(f.startevent, a(this).data.callee1).off(f.moveevent, a(this).data.callee2).off(f.endevent, a(this).data.callee3) }
        }, a.event.special.scrollstart = {
            setup: function() {
                function b(a, b) { d = b, c(g, d ? "scrollstart" : "scrollend", a) }
                var d, e, g = this,
                    h = a(g);
                h.on(f.scrollevent, function i(a) { h.data("callee", i), d || b(a, !0), clearTimeout(e), e = setTimeout(function() { b(a, !1) }, 50) })
            },
            remove: function() { a(this).off(f.scrollevent, a(this).data.callee) }
        };
        var g, h, i, j, k, l = a(window),
            m = { 0: !0, 180: !0 };
        if (f.orientation_support) {
            var n = window.innerWidth || l.width(),
                o = window.innerHeight || l.height(),
                p = 50;
            j = n > o && n - o > p, k = m[window.orientation], (j && k || !j && !k) && (m = { "-90": !0, 90: !0 })
        }
        a.event.special.orientationchange = g = {
            setup: function() { return !f.orientation_support && (i = h(), l.on("throttledresize", b), !0) },
            teardown: function() { return !f.orientation_support && (l.off("throttledresize", b), !0) },
            add: function(a) {
                var b = a.handler;
                a.handler = function(a) { return a.orientation = h(), b.apply(this, arguments) }
            }
        }, a.event.special.orientationchange.orientation = h = function() {
            var a = !0,
                b = document.documentElement;
            return a = f.orientation_support ? m[window.orientation] : b && b.clientWidth / b.clientHeight < 1.1, a ? "portrait" : "landscape"
        }, a.event.special.throttledresize = { setup: function() { a(this).on("resize", u) }, teardown: function() { a(this).off("resize", u) } };
        var q, r, s, t = 250,
            u = function() { r = Date.now(), s = r - v, s >= t ? (v = r, a(this).trigger("throttledresize")) : (q && window.clearTimeout(q), q = window.setTimeout(b, t - s)) },
            v = 0;
        a.each({ scrollend: "scrollstart", swipeup: "swipe", swiperight: "swipe", swipedown: "swipe", swipeleft: "swipe", swipeend: "swipe", tap2: "tap" }, function(b, c) { a.event.special[b] = { setup: function() { a(this).on(c, a.noop) } } })
    }(jQuery),
    function(a) { "function" == typeof define && define.amd ? define(["jquery"], a) : "object" == typeof exports ? module.exports = a(require("jquery")) : a(jQuery) }(function(a) {
        function b(a) { return h.raw ? a : encodeURIComponent(a) }

        function c(a) { return h.raw ? a : decodeURIComponent(a) }

        function d(a) { return b(h.json ? JSON.stringify(a) : String(a)) }

        function e(a) { 0 === a.indexOf('"') && (a = a.slice(1, -1).replace(/\\"/g, '"').replace(/\\\\/g, "\\")); try { return a = decodeURIComponent(a.replace(g, " ")), h.json ? JSON.parse(a) : a } catch (b) {} }

        function f(b, c) { var d = h.raw ? b : e(b); return a.isFunction(c) ? c(d) : d }
        var g = /\+/g,
            h = a.cookie = function(e, g, i) {
                if (arguments.length > 1 && !a.isFunction(g)) {
                    if (i = a.extend({}, h.defaults, i), "number" == typeof i.expires) {
                        var j = i.expires,
                            k = i.expires = new Date;
                        k.setMilliseconds(k.getMilliseconds() + 864e5 * j)
                    }
                    return document.cookie = [b(e), "=", d(g), i.expires ? "; expires=" + i.expires.toUTCString() : "", i.path ? "; path=" + i.path : "", i.domain ? "; domain=" + i.domain : "", i.secure ? "; secure" : ""].join("")
                }
                for (var l = e ? void 0 : {}, m = document.cookie ? document.cookie.split("; ") : [], n = 0, o = m.length; n < o; n++) {
                    var p = m[n].split("="),
                        q = c(p.shift()),
                        r = p.join("=");
                    if (e === q) { l = f(r, g); break }
                    e || void 0 === (r = f(r)) || (l[q] = r)
                }
                return l
            };
        h.defaults = {}, a.removeCookie = function(b, c) { return a.cookie(b, "", a.extend({}, c, { expires: -1 })), !a.cookie(b) }
    }), ! function(a) { "function" == typeof define && define.amd ? define(["jquery"], a) : "object" == typeof exports ? module.exports = a : a(jQuery) }(function(a) {
        function b(b) {
            var g = b || window.event,
                h = i.call(arguments, 1),
                j = 0,
                l = 0,
                m = 0,
                n = 0,
                o = 0,
                p = 0;
            if (b = a.event.fix(g), b.type = "mousewheel", "detail" in g && (m = -1 * g.detail), "wheelDelta" in g && (m = g.wheelDelta), "wheelDeltaY" in g && (m = g.wheelDeltaY), "wheelDeltaX" in g && (l = -1 * g.wheelDeltaX), "axis" in g && g.axis === g.HORIZONTAL_AXIS && (l = -1 * m, m = 0), j = 0 === m ? l : m, "deltaY" in g && (m = -1 * g.deltaY, j = m), "deltaX" in g && (l = g.deltaX, 0 === m && (j = -1 * l)), 0 !== m || 0 !== l) {
                if (1 === g.deltaMode) {
                    var q = a.data(this, "mousewheel-line-height");
                    j *= q, m *= q, l *= q
                } else if (2 === g.deltaMode) {
                    var r = a.data(this, "mousewheel-page-height");
                    j *= r, m *= r, l *= r
                }
                if (n = Math.max(Math.abs(m), Math.abs(l)), (!f || f > n) && (f = n, d(g, n) && (f /= 40)), d(g, n) && (j /= 40, l /= 40, m /= 40), j = Math[j >= 1 ? "floor" : "ceil"](j / f), l = Math[l >= 1 ? "floor" : "ceil"](l / f), m = Math[m >= 1 ? "floor" : "ceil"](m / f), k.settings.normalizeOffset && this.getBoundingClientRect) {
                    var s = this.getBoundingClientRect();
                    o = b.clientX - s.left, p = b.clientY - s.top
                }
                return b.deltaX = l, b.deltaY = m, b.deltaFactor = f, b.offsetX = o, b.offsetY = p, b.deltaMode = 0, h.unshift(b, j, l, m), e && clearTimeout(e), e = setTimeout(c, 200), (a.event.dispatch || a.event.handle).apply(this, h)
            }
        }

        function c() { f = null }

        function d(a, b) { return k.settings.adjustOldDeltas && "mousewheel" === a.type && b % 120 === 0 }
        var e, f, g = ["wheel", "mousewheel", "DOMMouseScroll", "MozMousePixelScroll"],
            h = "onwheel" in document || document.documentMode >= 9 ? ["wheel"] : ["mousewheel", "DomMouseScroll", "MozMousePixelScroll"],
            i = Array.prototype.slice;
        if (a.event.fixHooks)
            for (var j = g.length; j;) a.event.fixHooks[g[--j]] = a.event.mouseHooks;
        var k = a.event.special.mousewheel = {
            version: "3.1.12",
            setup: function() {
                if (this.addEventListener)
                    for (var c = h.length; c;) this.addEventListener(h[--c], b, !1);
                else this.onmousewheel = b;
                a.data(this, "mousewheel-line-height", k.getLineHeight(this)), a.data(this, "mousewheel-page-height", k.getPageHeight(this))
            },
            teardown: function() {
                if (this.removeEventListener)
                    for (var c = h.length; c;) this.removeEventListener(h[--c], b, !1);
                else this.onmousewheel = null;
                a.removeData(this, "mousewheel-line-height"), a.removeData(this, "mousewheel-page-height")
            },
            getLineHeight: function(b) {
                var c = a(b),
                    d = c["offsetParent" in a.fn ? "offsetParent" : "parent"]();
                return d.length || (d = a("body")), parseInt(d.css("fontSize"), 10) || parseInt(c.css("fontSize"), 10) || 16
            },
            getPageHeight: function(b) { return a(b).height() },
            settings: { adjustOldDeltas: !0, normalizeOffset: !0 }
        };
        a.fn.extend({ mousewheel: function(a) { return a ? this.bind("mousewheel", a) : this.trigger("mousewheel") }, unmousewheel: function(a) { return this.unbind("mousewheel", a) } })
    }),
    function() {
        "use strict";

        function a() {}

        function b(a, b) {
            for (var c = a.length; c--;)
                if (a[c].listener === b) return c;
            return -1
        }

        function c(a) { return function() { return this[a].apply(this, arguments) } }
        var d = a.prototype,
            e = this,
            f = e.EventEmitter;
        d.getListeners = function(a) { var b, c, d = this._getEvents(); if ("object" == typeof a) { b = {}; for (c in d) d.hasOwnProperty(c) && a.test(c) && (b[c] = d[c]) } else b = d[a] || (d[a] = []); return b }, d.flattenListeners = function(a) { var b, c = []; for (b = 0; b < a.length; b += 1) c.push(a[b].listener); return c }, d.getListenersAsObject = function(a) { var b, c = this.getListeners(a); return c instanceof Array && (b = {}, b[a] = c), b || c }, d.addListener = function(a, c) {
            var d, e = this.getListenersAsObject(a),
                f = "object" == typeof c;
            for (d in e) e.hasOwnProperty(d) && -1 === b(e[d], c) && e[d].push(f ? c : { listener: c, once: !1 });
            return this
        }, d.on = c("addListener"), d.addOnceListener = function(a, b) { return this.addListener(a, { listener: b, once: !0 }) }, d.once = c("addOnceListener"), d.defineEvent = function(a) { return this.getListeners(a), this }, d.defineEvents = function(a) { for (var b = 0; b < a.length; b += 1) this.defineEvent(a[b]); return this }, d.removeListener = function(a, c) { var d, e, f = this.getListenersAsObject(a); for (e in f) f.hasOwnProperty(e) && (d = b(f[e], c), -1 !== d && f[e].splice(d, 1)); return this }, d.off = c("removeListener"), d.addListeners = function(a, b) { return this.manipulateListeners(!1, a, b) }, d.removeListeners = function(a, b) { return this.manipulateListeners(!0, a, b) }, d.manipulateListeners = function(a, b, c) {
            var d, e, f = a ? this.removeListener : this.addListener,
                g = a ? this.removeListeners : this.addListeners;
            if ("object" != typeof b || b instanceof RegExp)
                for (d = c.length; d--;) f.call(this, b, c[d]);
            else
                for (d in b) b.hasOwnProperty(d) && (e = b[d]) && ("function" == typeof e ? f.call(this, d, e) : g.call(this, d, e));
            return this
        }, d.removeEvent = function(a) {
            var b, c = typeof a,
                d = this._getEvents();
            if ("string" === c) delete d[a];
            else if ("object" === c)
                for (b in d) d.hasOwnProperty(b) && a.test(b) && delete d[b];
            else delete this._events;
            return this
        }, d.removeAllListeners = c("removeEvent"), d.emitEvent = function(a, b) {
            var c, d, e, f, g = this.getListenersAsObject(a);
            for (e in g)
                if (g.hasOwnProperty(e))
                    for (d = g[e].length; d--;) c = g[e][d], c.once === !0 && this.removeListener(a, c.listener), f = c.listener.apply(this, b || []), f === this._getOnceReturnValue() && this.removeListener(a, c.listener);
            return this
        }, d.trigger = c("emitEvent"), d.emit = function(a) { var b = Array.prototype.slice.call(arguments, 1); return this.emitEvent(a, b) }, d.setOnceReturnValue = function(a) { return this._onceReturnValue = a, this }, d._getOnceReturnValue = function() {
            return !this.hasOwnProperty("_onceReturnValue") || this._onceReturnValue;
        }, d._getEvents = function() { return this._events || (this._events = {}) }, a.noConflict = function() { return e.EventEmitter = f, a }, "function" == typeof define && define.amd ? define("eventEmitter/EventEmitter", [], function() { return a }) : "object" == typeof module && module.exports ? module.exports = a : this.EventEmitter = a
    }.call(this),
    function(a) {
        function b(b) { var c = a.event; return c.target = c.target || c.srcElement || b, c }
        var c = document.documentElement,
            d = function() {};
        c.addEventListener ? d = function(a, b, c) { a.addEventListener(b, c, !1) } : c.attachEvent && (d = function(a, c, d) {
            a[c + d] = d.handleEvent ? function() {
                var c = b(a);
                d.handleEvent.call(d, c)
            } : function() {
                var c = b(a);
                d.call(a, c)
            }, a.attachEvent("on" + c, a[c + d])
        });
        var e = function() {};
        c.removeEventListener ? e = function(a, b, c) { a.removeEventListener(b, c, !1) } : c.detachEvent && (e = function(a, b, c) { a.detachEvent("on" + b, a[b + c]); try { delete a[b + c] } catch (d) { a[b + c] = void 0 } });
        var f = { bind: d, unbind: e };
        "function" == typeof define && define.amd ? define("eventie/eventie", f) : a.eventie = f
    }(this),
    function(a, b) { "use strict"; "function" == typeof define && define.amd ? define(["eventEmitter/EventEmitter", "eventie/eventie"], function(c, d) { return b(a, c, d) }) : "object" == typeof module && module.exports ? module.exports = b(a, require("wolfy87-eventemitter"), require("eventie")) : a.imagesLoaded = b(a, a.EventEmitter, a.eventie) }(window, function(a, b, c) {
        function d(a, b) { for (var c in b) a[c] = b[c]; return a }

        function e(a) { return "[object Array]" == l.call(a) }

        function f(a) {
            var b = [];
            if (e(a)) b = a;
            else if ("number" == typeof a.length)
                for (var c = 0; c < a.length; c++) b.push(a[c]);
            else b.push(a);
            return b
        }

        function g(a, b, c) {
            if (!(this instanceof g)) return new g(a, b, c);
            "string" == typeof a && (a = document.querySelectorAll(a)), this.elements = f(a), this.options = d({}, this.options), "function" == typeof b ? c = b : d(this.options, b), c && this.on("always", c), this.getImages(), j && (this.jqDeferred = new j.Deferred);
            var e = this;
            setTimeout(function() { e.check() })
        }

        function h(a) { this.img = a }

        function i(a, b) { this.url = a, this.element = b, this.img = new Image }
        var j = a.jQuery,
            k = a.console,
            l = Object.prototype.toString;
        g.prototype = new b, g.prototype.options = {}, g.prototype.getImages = function() {
            this.images = [];
            for (var a = 0; a < this.elements.length; a++) {
                var b = this.elements[a];
                this.addElementImages(b)
            }
        }, g.prototype.addElementImages = function(a) {
            "IMG" == a.nodeName && this.addImage(a), this.options.background === !0 && this.addElementBackgroundImages(a);
            var b = a.nodeType;
            if (b && m[b]) {
                for (var c = a.querySelectorAll("img"), d = 0; d < c.length; d++) {
                    var e = c[d];
                    this.addImage(e)
                }
                if ("string" == typeof this.options.background) {
                    var f = a.querySelectorAll(this.options.background);
                    for (d = 0; d < f.length; d++) {
                        var g = f[d];
                        this.addElementBackgroundImages(g)
                    }
                }
            }
        };
        var m = { 1: !0, 9: !0, 11: !0 };
        g.prototype.addElementBackgroundImages = function(a) {
            for (var b = n(a), c = /url\(['"]*([^'"\)]+)['"]*\)/gi, d = c.exec(b.backgroundImage); null !== d;) {
                var e = d && d[1];
                e && this.addBackground(e, a), d = c.exec(b.backgroundImage)
            }
        };
        var n = a.getComputedStyle || function(a) { return a.currentStyle };
        return g.prototype.addImage = function(a) {
            var b = new h(a);
            this.images.push(b)
        }, g.prototype.addBackground = function(a, b) {
            var c = new i(a, b);
            this.images.push(c)
        }, g.prototype.check = function() {
            function a(a, c, d) { setTimeout(function() { b.progress(a, c, d) }) }
            var b = this;
            if (this.progressedCount = 0, this.hasAnyBroken = !1, !this.images.length) return void this.complete();
            for (var c = 0; c < this.images.length; c++) {
                var d = this.images[c];
                d.once("progress", a), d.check()
            }
        }, g.prototype.progress = function(a, b, c) { this.progressedCount++, this.hasAnyBroken = this.hasAnyBroken || !a.isLoaded, this.emit("progress", this, a, b), this.jqDeferred && this.jqDeferred.notify && this.jqDeferred.notify(this, a), this.progressedCount == this.images.length && this.complete(), this.options.debug && k && k.log("progress: " + c, a, b) }, g.prototype.complete = function() {
            var a = this.hasAnyBroken ? "fail" : "done";
            if (this.isComplete = !0, this.emit(a, this), this.emit("always", this), this.jqDeferred) {
                var b = this.hasAnyBroken ? "reject" : "resolve";
                this.jqDeferred[b](this)
            }
        }, h.prototype = new b, h.prototype.check = function() { var a = this.getIsImageComplete(); return a ? void this.confirm(0 !== this.img.naturalWidth, "naturalWidth") : (this.proxyImage = new Image, c.bind(this.proxyImage, "load", this), c.bind(this.proxyImage, "error", this), c.bind(this.img, "load", this), c.bind(this.img, "error", this), void(this.proxyImage.src = this.img.src)) }, h.prototype.getIsImageComplete = function() { return this.img.complete && void 0 !== this.img.naturalWidth }, h.prototype.confirm = function(a, b) { this.isLoaded = a, this.emit("progress", this, this.img, b) }, h.prototype.handleEvent = function(a) {
            var b = "on" + a.type;
            this[b] && this[b](a)
        }, h.prototype.onload = function() { this.confirm(!0, "onload"), this.unbindEvents() }, h.prototype.onerror = function() { this.confirm(!1, "onerror"), this.unbindEvents() }, h.prototype.unbindEvents = function() { c.unbind(this.proxyImage, "load", this), c.unbind(this.proxyImage, "error", this), c.unbind(this.img, "load", this), c.unbind(this.img, "error", this) }, i.prototype = new h, i.prototype.check = function() {
            c.bind(this.img, "load", this), c.bind(this.img, "error", this), this.img.src = this.url;
            var a = this.getIsImageComplete();
            a && (this.confirm(0 !== this.img.naturalWidth, "naturalWidth"), this.unbindEvents())
        }, i.prototype.unbindEvents = function() { c.unbind(this.img, "load", this), c.unbind(this.img, "error", this) }, i.prototype.confirm = function(a, b) { this.isLoaded = a, this.emit("progress", this, this.element, b) }, g.makeJQueryPlugin = function(b) { b = b || a.jQuery, b && (j = b, j.fn.imagesLoaded = function(a, b) { var c = new g(this, a, b); return c.jqDeferred.promise(j(this)) }) }, g.makeJQueryPlugin(), g
    }), ! function(a) {
        var b = navigator.userAgent;
        a.HTMLPictureElement && /ecko/.test(b) && b.match(/rv\:(\d+)/) && RegExp.$1 < 41 && addEventListener("resize", function() {
            var b, c = document.createElement("source"),
                d = function(a) { var b, d, e = a.parentNode; "PICTURE" === e.nodeName.toUpperCase() ? (b = c.cloneNode(), e.insertBefore(b, e.firstElementChild), setTimeout(function() { e.removeChild(b) })) : (!a._pfLastSize || a.offsetWidth > a._pfLastSize) && (a._pfLastSize = a.offsetWidth, d = a.sizes, a.sizes += ",100vw", setTimeout(function() { a.sizes = d })) },
                e = function() { var a, b = document.querySelectorAll("picture > img, img[srcset][sizes]"); for (a = 0; a < b.length; a++) d(b[a]) },
                f = function() { clearTimeout(b), b = setTimeout(e, 99) },
                g = a.matchMedia && matchMedia("(orientation: landscape)"),
                h = function() { f(), g && g.addListener && g.addListener(f) };
            return c.srcset = "data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==", /^[c|i]|d$/.test(document.readyState || "") ? h() : document.addEventListener("DOMContentLoaded", h), f
        }())
    }(window),
    function(a, b, c) {
        "use strict";

        function d(a) { return " " === a || "    " === a || "\n" === a || "\f" === a || "\r" === a }

        function e(b, c) { var d = new a.Image; return d.onerror = function() { z[b] = !1, aa() }, d.onload = function() { z[b] = 1 === d.width, aa() }, d.src = c, "pending" }

        function f() { L = !1, O = a.devicePixelRatio, M = {}, N = {}, s.DPR = O || 1, P.width = Math.max(a.innerWidth || 0, y.clientWidth), P.height = Math.max(a.innerHeight || 0, y.clientHeight), P.vw = P.width / 100, P.vh = P.height / 100, r = [P.height, P.width, O].join("-"), P.em = s.getEmValue(), P.rem = P.em }

        function g(a, b, c, d) { var e, f, g, h; return "saveData" === A.algorithm ? a > 2.7 ? h = c + 1 : (f = b - c, e = Math.pow(a - .6, 1.5), g = f * e, d && (g += .1 * e), h = a + g) : h = c > 1 ? Math.sqrt(a * b) : a, h > c }

        function h(a) {
            var b, c = s.getSet(a),
                d = !1;
            "pending" !== c && (d = r, c && (b = s.setRes(c), s.applySetCandidate(b, a))), a[s.ns].evaled = d
        }

        function i(a, b) { return a.res - b.res }

        function j(a, b, c) { var d; return !c && b && (c = a[s.ns].sets, c = c && c[c.length - 1]), d = k(b, c), d && (b = s.makeUrl(b), a[s.ns].curSrc = b, a[s.ns].curCan = d, d.res || _(d, d.set.sizes)), d }

        function k(a, b) {
            var c, d, e;
            if (a && b)
                for (e = s.parseSet(b), a = s.makeUrl(a), c = 0; c < e.length; c++)
                    if (a === s.makeUrl(e[c].url)) { d = e[c]; break }
            return d
        }

        function l(a, b) { var c, d, e, f, g = a.getElementsByTagName("source"); for (c = 0, d = g.length; d > c; c++) e = g[c], e[s.ns] = !0, f = e.getAttribute("srcset"), f && b.push({ srcset: f, media: e.getAttribute("media"), type: e.getAttribute("type"), sizes: e.getAttribute("sizes") }) }

        function m(a, b) {
            function c(b) { var c, d = b.exec(a.substring(m)); return d ? (c = d[0], m += c.length, c) : void 0 }

            function e() {
                var a, c, d, e, f, i, j, k, l, m = !1,
                    o = {};
                for (e = 0; e < h.length; e++) f = h[e], i = f[f.length - 1], j = f.substring(0, f.length - 1), k = parseInt(j, 10), l = parseFloat(j), W.test(j) && "w" === i ? ((a || c) && (m = !0), 0 === k ? m = !0 : a = k) : X.test(j) && "x" === i ? ((a || c || d) && (m = !0), 0 > l ? m = !0 : c = l) : W.test(j) && "h" === i ? ((d || c) && (m = !0), 0 === k ? m = !0 : d = k) : m = !0;
                m || (o.url = g, a && (o.w = a), c && (o.d = c), d && (o.h = d), d || c || a || (o.d = 1), 1 === o.d && (b.has1x = !0), o.set = b, n.push(o))
            }

            function f() {
                for (c(S), i = "", j = "in descriptor";;) {
                    if (k = a.charAt(m), "in descriptor" === j)
                        if (d(k)) i && (h.push(i), i = "", j = "after descriptor");
                        else {
                            if ("," === k) return m += 1, i && h.push(i), void e();
                            if ("(" === k) i += k, j = "in parens";
                            else {
                                if ("" === k) return i && h.push(i), void e();
                                i += k
                            }
                        }
                    else if ("in parens" === j)
                        if (")" === k) i += k, j = "in descriptor";
                        else {
                            if ("" === k) return h.push(i), void e();
                            i += k
                        }
                    else if ("after descriptor" === j)
                        if (d(k));
                        else {
                            if ("" === k) return void e();
                            j = "in descriptor", m -= 1
                        }
                    m += 1
                }
            }
            for (var g, h, i, j, k, l = a.length, m = 0, n = [];;) {
                if (c(T), m >= l) return n;
                g = c(U), h = [], "," === g.slice(-1) ? (g = g.replace(V, ""), e()) : f()
            }
        }

        function n(a) {
            function b(a) {
                function b() { f && (g.push(f), f = "") }

                function c() { g[0] && (h.push(g), g = []) }
                for (var e, f = "", g = [], h = [], i = 0, j = 0, k = !1;;) {
                    if (e = a.charAt(j), "" === e) return b(), c(), h;
                    if (k) {
                        if ("*" === e && "/" === a[j + 1]) { k = !1, j += 2, b(); continue }
                        j += 1
                    } else {
                        if (d(e)) {
                            if (a.charAt(j - 1) && d(a.charAt(j - 1)) || !f) { j += 1; continue }
                            if (0 === i) { b(), j += 1; continue }
                            e = " "
                        } else if ("(" === e) i += 1;
                        else if (")" === e) i -= 1;
                        else { if ("," === e) { b(), c(), j += 1; continue } if ("/" === e && "*" === a.charAt(j + 1)) { k = !0, j += 2; continue } }
                        f += e, j += 1
                    }
                }
            }

            function c(a) { return !!(k.test(a) && parseFloat(a) >= 0) || (!!l.test(a) || ("0" === a || "-0" === a || "+0" === a)) }
            var e, f, g, h, i, j, k = /^(?:[+-]?[0-9]+|[0-9]*\.[0-9]+)(?:[eE][+-]?[0-9]+)?(?:ch|cm|em|ex|in|mm|pc|pt|px|rem|vh|vmin|vmax|vw)$/i,
                l = /^calc\((?:[0-9a-z \.\+\-\*\/\(\)]+)\)$/i;
            for (f = b(a), g = f.length, e = 0; g > e; e++)
                if (h = f[e], i = h[h.length - 1], c(i)) { if (j = i, h.pop(), 0 === h.length) return j; if (h = h.join(" "), s.matchesMedia(h)) return j }
            return "100vw"
        }
        b.createElement("picture");
        var o, p, q, r, s = {},
            t = function() {},
            u = b.createElement("img"),
            v = u.getAttribute,
            w = u.setAttribute,
            x = u.removeAttribute,
            y = b.documentElement,
            z = {},
            A = { algorithm: "" },
            B = "data-pfsrc",
            C = B + "set",
            D = navigator.userAgent,
            E = /rident/.test(D) || /ecko/.test(D) && D.match(/rv\:(\d+)/) && RegExp.$1 > 35,
            F = "currentSrc",
            G = /\s+\+?\d+(e\d+)?w/,
            H = /(\([^)]+\))?\s*(.+)/,
            I = a.picturefillCFG,
            J = "position:absolute;left:0;visibility:hidden;display:block;padding:0;border:none;font-size:1em;width:1em;overflow:hidden;clip:rect(0px, 0px, 0px, 0px)",
            K = "font-size:100%!important;",
            L = !0,
            M = {},
            N = {},
            O = a.devicePixelRatio,
            P = { px: 1, "in": 96 },
            Q = b.createElement("a"),
            R = !1,
            S = /^[ \t\n\r\u000c]+/,
            T = /^[, \t\n\r\u000c]+/,
            U = /^[^ \t\n\r\u000c]+/,
            V = /[,]+$/,
            W = /^\d+$/,
            X = /^-?(?:[0-9]+|[0-9]*\.[0-9]+)(?:[eE][+-]?[0-9]+)?$/,
            Y = function(a, b, c, d) { a.addEventListener ? a.addEventListener(b, c, d || !1) : a.attachEvent && a.attachEvent("on" + b, c) },
            Z = function(a) { var b = {}; return function(c) { return c in b || (b[c] = a(c)), b[c] } },
            $ = function() {
                var a = /^([\d\.]+)(em|vw|px)$/,
                    b = function() { for (var a = arguments, b = 0, c = a[0]; ++b in a;) c = c.replace(a[b], a[++b]); return c },
                    c = Z(function(a) { return "return " + b((a || "").toLowerCase(), /\band\b/g, "&&", /,/g, "||", /min-([a-z-\s]+):/g, "e.$1>=", /max-([a-z-\s]+):/g, "e.$1<=", /calc([^)]+)/g, "($1)", /(\d+[\.]*[\d]*)([a-z]+)/g, "($1 * e.$2)", /^(?!(e.[a-z]|[0-9\.&=|><\+\-\*\(\)\/])).*/gi, "") + ";" });
                return function(b, d) {
                    var e;
                    if (!(b in M))
                        if (M[b] = !1, d && (e = b.match(a))) M[b] = e[1] * P[e[2]];
                        else try { M[b] = new Function("e", c(b))(P) } catch (f) {}
                    return M[b]
                }
            }(),
            _ = function(a, b) { return a.w ? (a.cWidth = s.calcListLength(b || "100vw"), a.res = a.w / a.cWidth) : a.res = a.d, a },
            aa = function(a) {
                var c, d, e, f = a || {};
                if (f.elements && 1 === f.elements.nodeType && ("IMG" === f.elements.nodeName.toUpperCase() ? f.elements = [f.elements] : (f.context = f.elements, f.elements = null)), c = f.elements || s.qsa(f.context || b, f.reevaluate || f.reselect ? s.sel : s.selShort), e = c.length) {
                    for (s.setupRun(f), R = !0, d = 0; e > d; d++) s.fillImg(c[d], f);
                    s.teardownRun(f)
                }
            };
        o = a.console && console.warn ? function(a) { console.warn(a) } : t, F in u || (F = "src"), z["image/jpeg"] = !0, z["image/gif"] = !0, z["image/png"] = !0, z["image/svg+xml"] = b.implementation.hasFeature("http://wwwindow.w3.org/TR/SVG11/feature#Image", "1.1"), s.ns = ("pf" + (new Date).getTime()).substr(0, 9), s.supSrcset = "srcset" in u, s.supSizes = "sizes" in u, s.supPicture = !!a.HTMLPictureElement, s.supSrcset && s.supPicture && !s.supSizes && ! function(a) { u.srcset = "data:,a", a.src = "data:,a", s.supSrcset = u.complete === a.complete, s.supPicture = s.supSrcset && s.supPicture }(b.createElement("img")), s.selShort = "picture>img,img[srcset]", s.sel = s.selShort, s.cfg = A, s.supSrcset && (s.sel += ",img[" + C + "]"), s.DPR = O || 1, s.u = P, s.types = z, q = s.supSrcset && !s.supSizes, s.setSize = t, s.makeUrl = Z(function(a) { return Q.href = a, Q.href }), s.qsa = function(a, b) { return a.querySelectorAll(b) }, s.matchesMedia = function() { return a.matchMedia && (matchMedia("(min-width: 0.1em)") || {}).matches ? s.matchesMedia = function(a) { return !a || matchMedia(a).matches } : s.matchesMedia = s.mMQ, s.matchesMedia.apply(this, arguments) }, s.mMQ = function(a) { return !a || $(a) }, s.calcLength = function(a) { var b = $(a, !0) || !1; return 0 > b && (b = !1), b }, s.supportsType = function(a) { return !a || z[a] }, s.parseSize = Z(function(a) { var b = (a || "").match(H); return { media: b && b[1], length: b && b[2] } }), s.parseSet = function(a) { return a.cands || (a.cands = m(a.srcset, a)), a.cands }, s.getEmValue = function() {
            var a;
            if (!p && (a = b.body)) {
                var c = b.createElement("div"),
                    d = y.style.cssText,
                    e = a.style.cssText;
                c.style.cssText = J, y.style.cssText = K, a.style.cssText = K, a.appendChild(c), p = c.offsetWidth, a.removeChild(c), p = parseFloat(p, 10), y.style.cssText = d, a.style.cssText = e
            }
            return p || 16
        }, s.calcListLength = function(a) {
            if (!(a in N) || A.uT) {
                var b = s.calcLength(n(a));
                N[a] = b ? b : P.width
            }
            return N[a]
        }, s.setRes = function(a) { var b; if (a) { b = s.parseSet(a); for (var c = 0, d = b.length; d > c; c++) _(b[c], a.sizes) } return b }, s.setRes.res = _, s.applySetCandidate = function(a, b) {
            if (a.length) {
                var c, d, e, f, h, k, l, m, n, o, p = b[s.ns],
                    q = s.DPR;
                if (k = p.curSrc || b[F], l = p.curCan || j(b, k, a[0].set), l && l.set === a[0].set && (o = E && !b.complete && l.res - .1 > q, o || (l.cached = !0, l && m && l.res >= q && (h = l))), !h)
                    for (a.sort(i), f = a.length, h = a[f - 1], d = 0; f > d; d++)
                        if (c = a[d], c.res >= q) { e = d - 1, h = a[e] && (o || k !== s.makeUrl(c.url)) && g(a[e].res, c.res, q, a[e].cached) ? a[e] : c; break }
                h && (n = s.makeUrl(h.url), p.curSrc = n, p.curCan = h, n !== k && s.setSrc(b, h), s.setSize(b))
            }
        }, s.setSrc = function(a, b) {
            var c;
            a.src = b.url, "image/svg+xml" === b.set.type && (c = a.style.width, a.style.width = a.offsetWidth + 1 + "px", a.offsetWidth + 1 && (a.style.width = c))
        }, s.getSet = function(a) {
            var b, c, d, e = !1,
                f = a[s.ns].sets;
            for (b = 0; b < f.length && !e; b++)
                if (c = f[b], c.srcset && s.matchesMedia(c.media) && (d = s.supportsType(c.type))) { "pending" === d && (c = d), e = c; break }
            return e
        }, s.parseSets = function(a, b, d) {
            var e, f, g, h, i = b && "PICTURE" === b.nodeName.toUpperCase(),
                j = a[s.ns];
            (j.src === c || d.src) && (j.src = v.call(a, "src"), j.src ? w.call(a, B, j.src) : x.call(a, B)), (j.srcset === c || d.srcset || !s.supSrcset || a.srcset) && (e = v.call(a, "srcset"), j.srcset = e, h = !0), j.sets = [], i && (j.pic = !0, l(b, j.sets)), j.srcset ? (f = { srcset: j.srcset, sizes: v.call(a, "sizes") }, j.sets.push(f), g = (q || j.src) && G.test(j.srcset || ""), g || !j.src || k(j.src, f) || f.has1x || (f.srcset += ", " + j.src, f.cands.push({ url: j.src, d: 1, set: f }))) : j.src && j.sets.push({ srcset: j.src, sizes: null }), j.curCan = null, j.curSrc = c, j.supported = !(i || f && !s.supSrcset || g), h && s.supSrcset && !j.supported && (e ? (w.call(a, C, e), a.srcset = "") : x.call(a, C)), j.supported && !j.srcset && (!j.src && a.src || a.src !== s.makeUrl(j.src)) && (null === j.src ? a.removeAttribute("src") : a.src = j.src), j.parsed = !0
        }, s.fillImg = function(a, b) {
            var c, d = b.reselect || b.reevaluate;
            a[s.ns] || (a[s.ns] = {}), c = a[s.ns], (d || c.evaled !== r) && ((!c.parsed || b.reevaluate) && s.parseSets(a, a.parentNode, b), c.supported ? c.evaled = r : h(a))
        }, s.setupRun = function() {
            (!R || L || O !== a.devicePixelRatio) && f()
        }, s.supPicture ? (aa = t, s.fillImg = t) : ! function() {
            var c, d = a.attachEvent ? /d$|^c/ : /d$|^c|^i/,
                e = function() {
                    var a = b.readyState || "";
                    f = setTimeout(e, "loading" === a ? 200 : 999), b.body && (s.fillImgs(), c = c || d.test(a), c && clearTimeout(f))
                },
                f = setTimeout(e, b.body ? 9 : 99),
                g = function(a, b) {
                    var c, d, e = function() {
                        var f = new Date - d;
                        b > f ? c = setTimeout(e, b - f) : (c = null, a())
                    };
                    return function() { d = new Date, c || (c = setTimeout(e, b)) }
                },
                h = y.clientHeight,
                i = function() { L = Math.max(a.innerWidth || 0, y.clientWidth) !== P.width || y.clientHeight !== h, h = y.clientHeight, L && s.fillImgs() };
            Y(a, "resize", g(i, 99)), Y(b, "readystatechange", e)
        }(), s.picturefill = aa, s.fillImgs = aa, s.teardownRun = t, aa._ = s, a.picturefillCFG = { pf: s, push: function(a) { var b = a.shift(); "function" == typeof s[b] ? s[b].apply(s, a) : (A[b] = a[0], R && s.fillImgs({ reselect: !0 })) } };
        for (; I && I.length;) a.picturefillCFG.push(I.shift());
        a.picturefill = aa, "object" == typeof module && "object" == typeof module.exports ? module.exports = aa : "function" == typeof define && define.amd && define("picturefill", function() { return aa }), s.supPicture || (z["image/webp"] = e("image/webp", "data:image/webp;base64,UklGRkoAAABXRUJQVlA4WAoAAAAQAAAAAAAAAAAAQUxQSAwAAAABBxAR/Q9ERP8DAABWUDggGAAAADABAJ0BKgEAAQADADQlpAADcAD++/1QAA=="))
    }(window, document), ! function(a) {
        "use strict";
        var b, c = 0,
            d = function() { window.picturefill && a(window.picturefill), (window.picturefill || c > 9999) && clearInterval(b), c++ };
        b = setInterval(d, 8), d()
    }(function(a, b) {
        "use strict";
        var c = window.document,
            d = a._,
            e = {},
            f = d.cfg,
            g = "currentSrc",
            h = function(a, b, c) {
                var d = c.curCan;
                a && b.setAttribute("width", parseInt(a / d.res, 10))
            },
            i = function(a, b, d) {
                var f, i, j;
                a in e ? h(e[a], b, d) : (j = function() { d.pendingURLSize = null, f.onload = null, f.onerror = null, b = null, f = null }, d.pendingURLSize = a, i = d.curCan, i.w && h(i.w, b, d), f = c.createElement("img"), f.onload = function() {
                    if (e[a] = f.naturalWidth || f.width, !e[a]) try { c.body.appendChild(f), e[a] = f.offsetWidth || f.naturalWidth || f.width, c.body.removeChild(f) } catch (i) {}
                    a === b[g] && h(e[a], b, d), j()
                }, f.onerror = j, f.src = a, f && f.complete && f.onload())
            },
            j = function() {
                var a, b, e = function() {
                    var e, f, g, h = c.getElementsByTagName("img"),
                        i = { elements: [] };
                    for (d.setupRun(i), a = !1, clearTimeout(b), e = 0, f = h.length; f > e; e++) g = h[e][d.ns], g && g.curCan && (d.setRes.res(g.curCan, g.curCan.set.sizes), d.setSize(h[e]));
                    d.teardownRun(i)
                };
                return function() {!a && f.addSize && (a = !0, clearTimeout(b), b = setTimeout(e)) }
            }();
        g in c.createElement("img") || (g = "src"), d.setSize = function(a) {
            var c, e = a[d.ns],
                h = e.curCan;
            e.dims === b && (e.dims = a.getAttribute("height") && a.getAttribute("width")), f.addSize && h && !e.dims && (c = d.makeUrl(h.url), c === a[g] && c !== e.pendingURLSize && i(c, a, e))
        }, window.addEventListener && !d.supPicture && addEventListener("resize", j, !1), "addSize" in f ? f.addSize = !!f.addSize : f.addSize = !0, j()
    }), ! function(a, b, c, d) {
        function e(b, c) {
            b.owlCarousel = { name: "Owl Carousel", author: "Bartosz Wojciechowski", version: "2.0.0-beta.2.1" }, this.settings = null, this.options = a.extend({}, e.Defaults, c), this.itemData = a.extend({}, l), this.dom = a.extend({}, m), this.width = a.extend({}, n), this.num = a.extend({}, o), this.drag = a.extend({}, q), this.state = a.extend({}, r), this.e = a.extend({}, s), this.plugins = {}, this._supress = {}, this._current = null, this._speed = null, this._coordinates = null, this.dom.el = b, this.dom.$el = a(b);
            for (var d in e.Plugins) this.plugins[d[0].toLowerCase() + d.slice(1)] = new e.Plugins[d](this);
            this.init()
        }

        function f(a) {
            var b, d, e = c.createElement("div"),
                f = a;
            for (b in f)
                if (d = f[b], "undefined" != typeof e.style[d]) return e = null, [d, b];
            return [!1]
        }

        function g() { return f(["transition", "WebkitTransition", "MozTransition", "OTransition"])[1] }

        function h() { return f(["transform", "WebkitTransform", "MozTransform", "OTransform", "msTransform"])[0] }

        function i() { return f(["perspective", "webkitPerspective", "MozPerspective", "OPerspective", "MsPerspective"])[0] }

        function j() { return "ontouchstart" in b || !!navigator.msMaxTouchPoints }

        function k() { return b.navigator.msPointerEnabled }
        var l, m, n, o, p, q, r, s;
        l = { index: !1, indexAbs: !1, posLeft: !1, clone: !1, active: !1, loaded: !1, lazyLoad: !1, current: !1, width: !1, center: !1, page: !1, hasVideo: !1, playVideo: !1 }, m = { el: null, $el: null, stage: null, $stage: null, oStage: null, $oStage: null, $items: null, $oItems: null, $cItems: null, $content: null }, n = { el: 0, stage: 0, item: 0, prevWindow: 0, cloneLast: 0 }, o = { items: 0, oItems: 0, cItems: 0, active: 0, merged: [] }, q = { start: 0, startX: 0, startY: 0, current: 0, currentX: 0, currentY: 0, offsetX: 0, offsetY: 0, distance: null, startTime: 0, endTime: 0, updatedX: 0, targetEl: null }, r = { isTouch: !1, isScrolling: !1, isSwiping: !1, direction: !1, inMotion: !1 }, s = { _onDragStart: null, _onDragMove: null, _onDragEnd: null, _transitionEnd: null, _resizer: null, _responsiveCall: null, _goToLoop: null, _checkVisibile: null }, e.Defaults = { items: 3, loop: !1, center: !1, mouseDrag: !0, touchDrag: !0, pullDrag: !0, freeDrag: !1, margin: 0, stagePadding: 0, merge: !1, mergeFit: !0, autoWidth: !1, startPosition: 0, smartSpeed: 250, fluidSpeed: !1, dragEndSpeed: !1, responsive: {}, responsiveRefreshRate: 200, responsiveBaseElement: b, responsiveClass: !1, fallbackEasing: "swing", info: !1, nestedItemSelector: !1, itemElement: "div", stageElement: "div", themeClass: "owl-theme", baseClass: "owl-carousel", itemClass: "owl-item", centerClass: "center", activeClass: "active" }, e.Plugins = {}, e.prototype.init = function() {
            if (this.setResponsiveOptions(), this.trigger("initialize"), this.dom.$el.hasClass(this.settings.baseClass) || this.dom.$el.addClass(this.settings.baseClass), this.dom.$el.hasClass(this.settings.themeClass) || this.dom.$el.addClass(this.settings.themeClass), this.settings.rtl && this.dom.$el.addClass("owl-rtl"), this.browserSupport(), this.settings.autoWidth && this.state.imagesLoaded !== !0) { var a, b, c; if (a = this.dom.$el.find("img"), b = this.settings.nestedItemSelector ? "." + this.settings.nestedItemSelector : d, c = this.dom.$el.children(b).width(), a.length && 0 >= c) return this.preloadAutoWidthImages(a), !1 }
            this.width.prevWindow = this.viewport(), this.createStage(), this.fetchContent(), this.eventsCall(), this.internalEvents(), this.dom.$el.addClass("owl-loading"), this.refresh(!0), this.dom.$el.removeClass("owl-loading").addClass("owl-loaded"), this.trigger("initialized"), this.addTriggerableEvents()
        }, e.prototype.setResponsiveOptions = function() {
            if (this.options.responsive) {
                var b = this.viewport(),
                    c = this.options.responsive,
                    d = -1;
                a.each(c, function(a) { b >= a && a > d && (d = Number(a)) }), this.settings = a.extend({}, this.options, c[d]), delete this.settings.responsive, this.settings.responsiveClass && this.dom.$el.attr("class", function(a, b) { return b.replace(/\b owl-responsive-\S+/g, "") }).addClass("owl-responsive-" + d)
            } else this.settings = a.extend({}, this.options)
        }, e.prototype.optionsLogic = function() { this.dom.$el.toggleClass("owl-center", this.settings.center), this.settings.loop && this.num.oItems < this.settings.items && (this.settings.loop = !1), this.settings.autoWidth && (this.settings.stagePadding = !1, this.settings.merge = !1) }, e.prototype.createStage = function() {
            var b = c.createElement("div"),
                d = c.createElement(this.settings.stageElement);
            b.className = "owl-stage-outer", d.className = "owl-stage", b.appendChild(d), this.dom.el.appendChild(b), this.dom.oStage = b, this.dom.$oStage = a(b), this.dom.stage = d, this.dom.$stage = a(d), b = null, d = null
        }, e.prototype.createItemContainer = function() { var b = c.createElement(this.settings.itemElement); return b.className = this.settings.itemClass, a(b) }, e.prototype.fetchContent = function(b) { this.dom.$content = b ? b instanceof jQuery ? b : a(b) : this.settings.nestedItemSelector ? this.dom.$el.find("." + this.settings.nestedItemSelector).not(".owl-stage-outer") : this.dom.$el.children().not(".owl-stage-outer"), this.num.oItems = this.dom.$content.length, 0 !== this.num.oItems && this.initStructure() }, e.prototype.initStructure = function() { this.createNormalStructure() }, e.prototype.createNormalStructure = function() {
            var a, b;
            for (a = 0; a < this.num.oItems; a++) b = this.createItemContainer(), this.initializeItemContainer(b, this.dom.$content[a]), this.dom.$stage.append(b);
            this.dom.$content = null
        }, e.prototype.createCustomStructure = function(a) { var b, c; for (b = 0; a > b; b++) c = this.createItemContainer(), this.createItemContainerData(c), this.dom.$stage.append(c) }, e.prototype.initializeItemContainer = function(a, b) { this.trigger("change", { property: { name: "item", value: a } }), this.createItemContainerData(a), a.append(b), this.trigger("changed", { property: { name: "item", value: a } }) }, e.prototype.createItemContainerData = function(b, c) {
            var d = a.extend({}, this.itemData);
            c && a.extend(d, c.data("owl-item")), b.data("owl-item", d)
        }, e.prototype.cloneItemContainer = function(a) { var b = a.clone(!0, !0).addClass("cloned"); return this.createItemContainerData(b, b), b.data("owl-item").clone = !0, b }, e.prototype.updateLocalContent = function() { var b, c; for (this.dom.$oItems = this.dom.$stage.find("." + this.settings.itemClass).filter(function() { return a(this).data("owl-item").clone === !1 }), this.num.oItems = this.dom.$oItems.length, b = 0; b < this.num.oItems; b++) c = this.dom.$oItems.eq(b), c.data("owl-item").index = b }, e.prototype.loopClone = function() {
            if (!this.settings.loop || this.num.oItems < this.settings.items) return !1;
            var b, c, d, e = this.settings.items,
                f = this.num.oItems - 1;
            for (this.settings.stagePadding && 1 === this.settings.items && (e += 1), this.num.cItems = 2 * e, d = 0; e > d; d++) b = this.cloneItemContainer(this.dom.$oItems.eq(d)), c = this.cloneItemContainer(this.dom.$oItems.eq(f - d)), this.dom.$stage.append(b), this.dom.$stage.prepend(c);
            this.dom.$cItems = this.dom.$stage.find("." + this.settings.itemClass).filter(function() { return a(this).data("owl-item").clone === !0 })
        }, e.prototype.reClone = function() { null !== this.dom.$cItems && (this.dom.$cItems.remove(), this.dom.$cItems = null, this.num.cItems = 0), this.settings.loop && this.loopClone() }, e.prototype.calculate = function() {
            var a, b, c, d, e, f, g, h = 0,
                i = 0;
            for (this.width.el = this.dom.$el.width() - 2 * this.settings.stagePadding, this.width.view = this.dom.$el.width(), c = this.width.el - this.settings.margin * (1 === this.settings.items ? 0 : this.settings.items - 1), this.width.el = this.width.el + this.settings.margin, this.width.item = (c / this.settings.items + this.settings.margin).toFixed(3), this.dom.$items = this.dom.$stage.find(".owl-item"), this.num.items = this.dom.$items.length, this.settings.autoWidth && this.dom.$items.css("width", ""), this._coordinates = [], this.num.merged = [], d = this.settings.rtl ? this.settings.center ? -(this.width.el / 2) : 0 : this.settings.center ? this.width.el / 2 : 0, this.width.mergeStage = 0, a = 0; a < this.num.items; a++) this.settings.merge ? (g = this.dom.$items.eq(a).find("[data-merge]").attr("data-merge") || 1, this.settings.mergeFit && g > this.settings.items && (g = this.settings.items), this.num.merged.push(parseInt(g)), this.width.mergeStage += this.width.item * this.num.merged[a]) : this.num.merged.push(1), f = this.width.item * this.num.merged[a], this.settings.autoWidth && (f = this.dom.$items.eq(a).width() + this.settings.margin, this.settings.rtl ? this.dom.$items[a].style.marginLeft = this.settings.margin + "px" : this.dom.$items[a].style.marginRight = this.settings.margin + "px"), this._coordinates.push(d), this.dom.$items.eq(a).data("owl-item").posLeft = h, this.dom.$items.eq(a).data("owl-item").width = f, this.settings.rtl ? (d += f, h += f) : (d -= f, h -= f), i -= Math.abs(f), this.settings.center && (this._coordinates[a] = this.settings.rtl ? this._coordinates[a] + f / 2 : this._coordinates[a] - f / 2);
            for (this.width.stage = Math.abs(this.settings.autoWidth ? this.settings.center ? i : d : i), e = this.num.oItems + this.num.cItems, b = 0; e > b; b++) this.dom.$items.eq(b).data("owl-item").indexAbs = b;
            this.setSizes()
        }, e.prototype.setSizes = function() {
            this.settings.stagePadding !== !1 && (this.dom.oStage.style.paddingLeft = this.settings.stagePadding + "px", this.dom.oStage.style.paddingRight = this.settings.stagePadding + "px"), this.settings.rtl ? b.setTimeout(a.proxy(function() { this.dom.stage.style.width = this.width.stage + "px" }, this), 0) : this.dom.stage.style.width = this.width.stage + "px";
            for (var c = 0; c < this.num.items; c++) this.settings.autoWidth || (this.dom.$items[c].style.width = this.width.item - this.settings.margin + "px"), this.settings.rtl ? this.dom.$items[c].style.marginLeft = this.settings.margin + "px" : this.dom.$items[c].style.marginRight = this.settings.margin + "px", 1 === this.num.merged[c] || this.settings.autoWidth || (this.dom.$items[c].style.width = this.width.item * this.num.merged[c] - this.settings.margin + "px");
            this.width.stagePrev = this.width.stage
        }, e.prototype.responsive = function() { if (!this.num.oItems) return !1; var a = this.isElWidthChanged(); return !!a && (!this.trigger("resize").isDefaultPrevented() && (this.state.responsive = !0, this.refresh(), this.state.responsive = !1, void this.trigger("resized"))) }, e.prototype.refresh = function() { var a = this.dom.$oItems && this.dom.$oItems.eq(this.normalize(this.current(), !0)); return this.trigger("refresh"), this.setResponsiveOptions(), this.updateLocalContent(), this.optionsLogic(), 0 !== this.num.oItems && (this.dom.$stage.addClass("owl-refresh"), this.reClone(), this.calculate(), this.dom.$stage.removeClass("owl-refresh"), a ? this.reset(a.data("owl-item").indexAbs) : (this.dom.oStage.scrollLeft = 0, this.reset(this.dom.$oItems.eq(0).data("owl-item").indexAbs)), this.state.orientation = b.orientation, this.watchVisibility(), void this.trigger("refreshed")) }, e.prototype.updateActiveItems = function() {
            this.trigger("change", { property: { name: "items", value: this.dom.$items } });
            var a, b, c, d, e, f;
            for (a = 0; a < this.num.items; a++) this.dom.$items.eq(a).data("owl-item").active = !1, this.dom.$items.eq(a).data("owl-item").current = !1, this.dom.$items.eq(a).removeClass(this.settings.activeClass).removeClass(this.settings.centerClass);
            for (this.num.active = 0, padding = 2 * this.settings.stagePadding, stageX = this.coordinates(this.current()) + padding, view = this.settings.rtl ? this.width.view : -this.width.view, b = 0; b < this.num.items; b++) c = this.dom.$items.eq(b), d = c.data("owl-item").posLeft, e = c.data("owl-item").width, f = this.settings.rtl ? d - e - padding : d - e + padding, (this.op(d, "<=", stageX) && this.op(d, ">", stageX + view) || this.op(f, "<", stageX) && this.op(f, ">", stageX + view)) && (this.num.active++, c.data("owl-item").active = !0, c.data("owl-item").current = !0, c.addClass(this.settings.activeClass), this.settings.lazyLoad || (c.data("owl-item").loaded = !0), this.settings.loop && this.updateClonedItemsState(c.data("owl-item").index));
            this.settings.center && (this.dom.$items.eq(this.current()).addClass(this.settings.centerClass).data("owl-item").center = !0), this.trigger("changed", { property: { name: "items", value: this.dom.$items } })
        }, e.prototype.updateClonedItemsState = function(a) { var b, c, d; for (this.settings.center && (b = this.dom.$items.eq(this.current()).data("owl-item").index), d = 0; d < this.num.items; d++) c = this.dom.$items.eq(d), c.data("owl-item").index === a && (c.data("owl-item").current = !0, c.data("owl-item").index === b && c.addClass(this.settings.centerClass)) }, e.prototype.eventsCall = function() { this.e._onDragStart = a.proxy(function(a) { this.onDragStart(a) }, this), this.e._onDragMove = a.proxy(function(a) { this.onDragMove(a) }, this), this.e._onDragEnd = a.proxy(function(a) { this.onDragEnd(a) }, this), this.e._transitionEnd = a.proxy(function(a) { this.transitionEnd(a) }, this), this.e._resizer = a.proxy(function() { this.responsiveTimer() }, this), this.e._responsiveCall = a.proxy(function() { this.responsive() }, this), this.e._preventClick = a.proxy(function(a) { this.preventClick(a) }, this) }, e.prototype.responsiveTimer = function() { return this.viewport() !== this.width.prevWindow && (b.clearTimeout(this.resizeTimer), this.resizeTimer = b.setTimeout(this.e._responsiveCall, this.settings.responsiveRefreshRate), void(this.width.prevWindow = this.viewport())) }, e.prototype.internalEvents = function() {
            var a = j(),
                d = k();
            this.dragType = a && !d ? ["touchstart", "touchmove", "touchend", "touchcancel"] : a && d ? ["MSPointerDown", "MSPointerMove", "MSPointerUp", "MSPointerCancel"] : ["mousedown", "mousemove", "mouseup"], (a || d) && this.settings.touchDrag ? this.on(c, this.dragType[3], this.e._onDragEnd) : (this.dom.$stage.on("dragstart", function() { return !1 }), this.settings.mouseDrag ? this.dom.stage.onselectstart = function() { return !1 } : this.dom.$el.addClass("owl-text-select-on")), this.transitionEndVendor && this.on(this.dom.stage, this.transitionEndVendor, this.e._transitionEnd, !1), this.settings.responsive !== !1 && this.on(b, "resize", this.e._resizer, !1), this.dragEvents()
        }, e.prototype.dragEvents = function() {!this.settings.touchDrag || "touchstart" !== this.dragType[0] && "MSPointerDown" !== this.dragType[0] ? this.settings.mouseDrag && "mousedown" === this.dragType[0] ? this.on(this.dom.stage, this.dragType[0], this.e._onDragStart, !1) : this.off(this.dom.stage, this.dragType[0], this.e._onDragStart) : this.on(this.dom.stage, this.dragType[0], this.e._onDragStart, !1) }, e.prototype.onDragStart = function(a) {
            var d, e, f, g, h;
            if (d = a.originalEvent || a || b.event, 3 === d.which) return !1;
            if ("mousedown" === this.dragType[0] && this.dom.$stage.addClass("owl-grab"), this.trigger("drag"), this.drag.startTime = (new Date).getTime(), this.speed(0), this.state.isTouch = !0, this.state.isScrolling = !1, this.state.isSwiping = !1, this.drag.distance = 0, e = "touchstart" === d.type, f = e ? a.targetTouches[0].pageX : d.pageX || d.clientX, g = e ? a.targetTouches[0].pageY : d.pageY || d.clientY,
                this.drag.offsetX = this.dom.$stage.position().left - this.settings.stagePadding, this.drag.offsetY = this.dom.$stage.position().top, this.settings.rtl && (this.drag.offsetX = this.dom.$stage.position().left + this.width.stage - this.width.el + this.settings.margin), this.state.inMotion && this.support3d) h = this.getTransformProperty(), this.drag.offsetX = h, this.animate(h), this.state.inMotion = !0;
            else if (this.state.inMotion && !this.support3d) return this.state.inMotion = !1, !1;
            this.drag.startX = f - this.drag.offsetX, this.drag.startY = g - this.drag.offsetY, this.drag.start = f - this.drag.startX, this.drag.targetEl = d.target || d.srcElement, this.drag.updatedX = this.drag.start, ("IMG" === this.drag.targetEl.tagName || "A" === this.drag.targetEl.tagName) && (this.drag.targetEl.draggable = !1), this.on(c, this.dragType[1], this.e._onDragMove, !1), this.on(c, this.dragType[2], this.e._onDragEnd, !1)
        }, e.prototype.onDragMove = function(a) {
            var c, e, f, g, h, i, j;
            this.state.isTouch && (this.state.isScrolling || (c = a.originalEvent || a || b.event, e = "touchmove" == c.type, f = e ? c.targetTouches[0].pageX : c.pageX || c.clientX, g = e ? c.targetTouches[0].pageY : c.pageY || c.clientY, this.drag.currentX = f - this.drag.startX, this.drag.currentY = g - this.drag.startY, this.drag.distance = this.drag.currentX - this.drag.offsetX, this.drag.distance < 0 ? this.state.direction = this.settings.rtl ? "right" : "left" : this.drag.distance > 0 && (this.state.direction = this.settings.rtl ? "left" : "right"), this.settings.loop ? this.op(this.drag.currentX, ">", this.coordinates(this.minimum())) && "right" === this.state.direction ? this.drag.currentX -= (this.settings.center && this.coordinates(0)) - this.coordinates(this.num.oItems) : this.op(this.drag.currentX, "<", this.coordinates(this.maximum())) && "left" === this.state.direction && (this.drag.currentX += (this.settings.center && this.coordinates(0)) - this.coordinates(this.num.oItems)) : (h = this.coordinates(this.settings.rtl ? this.maximum() : this.minimum()), i = this.coordinates(this.settings.rtl ? this.minimum() : this.maximum()), j = this.settings.pullDrag ? this.drag.distance / 5 : 0, this.drag.currentX = Math.max(Math.min(this.drag.currentX, h + j), i + j)), (this.drag.distance > 8 || this.drag.distance < -8) && (c.preventDefault !== d ? c.preventDefault() : c.returnValue = !1, this.state.isSwiping = !0), this.drag.updatedX = this.drag.currentX, (this.drag.currentY > 16 || this.drag.currentY < -16) && this.state.isSwiping === !1 && (this.state.isScrolling = !0, this.drag.updatedX = this.drag.start), this.animate(this.drag.updatedX)))
        }, e.prototype.onDragEnd = function() {
            var a, b, d;
            if (this.state.isTouch) {
                if ("mousedown" === this.dragType[0] && this.dom.$stage.removeClass("owl-grab"), this.trigger("dragged"), this.drag.targetEl.removeAttribute("draggable"), this.state.isTouch = !1, this.state.isScrolling = !1, this.state.isSwiping = !1, 0 === this.drag.distance && this.state.inMotion !== !0) return this.state.inMotion = !1, !1;
                this.drag.endTime = (new Date).getTime(), a = this.drag.endTime - this.drag.startTime, b = Math.abs(this.drag.distance), (b > 3 || a > 300) && this.removeClick(this.drag.targetEl), d = this.closest(this.drag.updatedX), this.speed(this.settings.dragEndSpeed || this.settings.smartSpeed), this.current(d), this.settings.pullDrag || this.drag.updatedX !== this.coordinates(d) || this.transitionEnd(), this.drag.distance = 0, this.off(c, this.dragType[1], this.e._onDragMove), this.off(c, this.dragType[2], this.e._onDragEnd)
            }
        }, e.prototype.removeClick = function(c) { this.drag.targetEl = c, a(c).on("click.preventClick", this.e._preventClick), b.setTimeout(function() { a(c).off("click.preventClick") }, 300) }, e.prototype.preventClick = function(b) { b.preventDefault ? b.preventDefault() : b.returnValue = !1, b.stopPropagation && b.stopPropagation(), a(b.target).off("click.preventClick") }, e.prototype.getTransformProperty = function() { var a, c; return a = b.getComputedStyle(this.dom.stage, null).getPropertyValue(this.vendorName + "transform"), a = a.replace(/matrix(3d)?\(|\)/g, "").split(","), c = 16 === a.length, c !== !0 ? a[4] : a[12] }, e.prototype.closest = function(b) {
            var c = 0,
                d = 30;
            return this.settings.freeDrag || a.each(this.coordinates(), a.proxy(function(a, e) { b > e - d && e + d > b ? c = a : this.op(b, "<", e) && this.op(b, ">", this.coordinates(a + 1) || e - this.width.el) && (c = "left" === this.state.direction ? a + 1 : a) }, this)), this.settings.loop || (this.op(b, ">", this.coordinates(this.minimum())) ? c = b = this.minimum() : this.op(b, "<", this.coordinates(this.maximum())) && (c = b = this.maximum())), c
        }, e.prototype.animate = function(b) { this.trigger("translate"), this.state.inMotion = this.speed() > 0, this.support3d ? this.dom.$stage.css({ transform: "translate3d(" + b + "px,0px, 0px)", transition: this.speed() / 1e3 + "s" }) : this.state.isTouch ? this.dom.$stage.css({ left: b + "px" }) : this.dom.$stage.animate({ left: b }, this.speed() / 1e3, this.settings.fallbackEasing, a.proxy(function() { this.state.inMotion && this.transitionEnd() }, this)) }, e.prototype.current = function(a) {
            if (a === d) return this._current;
            if (0 === this.num.oItems) return d;
            if (a = this.normalize(a), this._current === a) this.animate(this.coordinates(this._current));
            else {
                var b = this.trigger("change", { property: { name: "position", value: a } });
                b.data !== d && (a = this.normalize(b.data)), this._current = a, this.animate(this.coordinates(this._current)), this.updateActiveItems(), this.trigger("changed", { property: { name: "position", value: this._current } })
            }
            return this._current
        }, e.prototype.reset = function(a) { this.suppress(["change", "changed"]), this.speed(0), this.current(a), this.release(["change", "changed"]) }, e.prototype.normalize = function(a, b) {
            if (a === d || !this.dom.$items) return d;
            if (this.settings.loop) {
                var c = this.dom.$items.length;
                a = (a % c + c) % c
            } else a = Math.max(this.minimum(), Math.min(this.maximum(), a));
            return b ? this.dom.$items.eq(a).data("owl-item").index : a
        }, e.prototype.maximum = function() {
            var b, c, d = this.settings;
            if (!d.loop && d.center) b = this.num.oItems - 1;
            else if (d.loop || d.center)
                if (d.loop || d.center) b = this.num.oItems + d.items;
                else {
                    if (!d.autoWidth && !d.merge) throw "Can not detect maximum absolute position.";
                    revert = d.rtl ? 1 : -1, c = this.dom.$stage.width() - this.$el.width(), a.each(this.coordinates(), function(a, d) { return !(d * revert >= c) && void(b = a + 1) })
                }
            else b = this.num.oItems - d.items;
            return b
        }, e.prototype.minimum = function() { return this.dom.$oItems.eq(0).data("owl-item").indexAbs }, e.prototype.speed = function(a) { return a !== d && (this._speed = a), this._speed }, e.prototype.coordinates = function(a) { return a !== d ? this._coordinates[a] : this._coordinates }, e.prototype.duration = function(a, b, c) { return Math.min(Math.max(Math.abs(b - a), 1), 6) * Math.abs(c || this.settings.smartSpeed) }, e.prototype.to = function(c, d) {
            if (this.settings.loop) {
                var e = c - this.normalize(this.current(), !0),
                    f = this.current(),
                    g = this.current(),
                    h = this.current() + e,
                    i = 0 > g - h;
                h < this.settings.items && i === !1 ? (f = this.num.items - (this.settings.items - g) - this.settings.items, this.reset(f)) : h >= this.num.items - this.settings.items && i === !0 && (f = g - this.num.oItems, this.reset(f)), b.clearTimeout(this.e._goToLoop), this.e._goToLoop = b.setTimeout(a.proxy(function() { this.speed(this.duration(this.current(), f + e, d)), this.current(f + e) }, this), 30)
            } else this.speed(this.duration(this.current(), c, d)), this.current(c)
        }, e.prototype.next = function(a) { a = a || !1, this.to(this.normalize(this.current(), !0) + 1, a) }, e.prototype.prev = function(a) { a = a || !1, this.to(this.normalize(this.current(), !0) - 1, a) }, e.prototype.transitionEnd = function(a) {
            if (a !== d) { a.stopPropagation(); var b = a.target || a.srcElement || a.originalTarget; if (b !== this.dom.stage) return !1 }
            this.state.inMotion = !1, this.trigger("translated")
        }, e.prototype.isElWidthChanged = function() {
            var a = this.dom.$el.width() - this.settings.stagePadding,
                b = this.width.el + this.settings.margin;
            return a !== b
        }, e.prototype.viewport = function() {
            var d;
            if (this.options.responsiveBaseElement !== b) d = a(this.options.responsiveBaseElement).width();
            else if (b.innerWidth) d = b.innerWidth;
            else {
                if (!c.documentElement || !c.documentElement.clientWidth) throw "Can not detect viewport width.";
                d = c.documentElement.clientWidth
            }
            return d
        }, e.prototype.insertContent = function(a) { this.dom.$stage.empty(), this.fetchContent(a), this.refresh() }, e.prototype.addItem = function(a, b) {
            var c = this.createItemContainer();
            b = b || 0, this.initializeItemContainer(c, a), 0 === this.dom.$oItems.length ? this.dom.$stage.append(c) : -1 !== p ? this.dom.$oItems.eq(b).before(c) : this.dom.$oItems.eq(b).after(c), this.refresh()
        }, e.prototype.removeItem = function(a) { this.dom.$oItems.eq(a).remove(), this.refresh() }, e.prototype.addTriggerableEvents = function() {
            var b = a.proxy(function(b, c) { return a.proxy(function(a) { a.relatedTarget !== this && (this.suppress([c]), b.apply(this, [].slice.call(arguments, 1)), this.release([c])) }, this) }, this);
            a.each({ next: this.next, prev: this.prev, to: this.to, destroy: this.destroy, refresh: this.refresh, replace: this.insertContent, add: this.addItem, remove: this.removeItem }, a.proxy(function(a, c) { this.dom.$el.on(a + ".owl.carousel", b(c, a + ".owl.carousel")) }, this))
        }, e.prototype.watchVisibility = function() {
            function c(a) { return a.offsetWidth > 0 && a.offsetHeight > 0 }

            function d() { c(this.dom.el) && (this.dom.$el.removeClass("owl-hidden"), this.refresh(), b.clearInterval(this.e._checkVisibile)) }
            c(this.dom.el) || (this.dom.$el.addClass("owl-hidden"), b.clearInterval(this.e._checkVisibile), this.e._checkVisibile = b.setInterval(a.proxy(d, this), 500))
        }, e.prototype.preloadAutoWidthImages = function(b) {
            var c, d, e, f;
            c = 0, d = this, b.each(function(g, h) { e = a(h), f = new Image, f.onload = function() { c++, e.attr("src", f.src), e.css("opacity", 1), c >= b.length && (d.state.imagesLoaded = !0, d.init()) }, f.src = e.attr("src") || e.attr("data-src") || e.attr("data-src-retina") })
        }, e.prototype.destroy = function() {
            this.dom.$el.hasClass(this.settings.themeClass) && this.dom.$el.removeClass(this.settings.themeClass), this.settings.responsive !== !1 && this.off(b, "resize", this.e._resizer), this.transitionEndVendor && this.off(this.dom.stage, this.transitionEndVendor, this.e._transitionEnd);
            for (var a in this.plugins) this.plugins[a].destroy();
            (this.settings.mouseDrag || this.settings.touchDrag) && (this.off(this.dom.stage, this.dragType[0], this.e._onDragStart), this.settings.mouseDrag && this.off(c, this.dragType[3], this.e._onDragStart), this.settings.mouseDrag && (this.dom.$stage.off("dragstart", function() { return !1 }), this.dom.stage.onselectstart = function() {})), this.dom.$el.off(".owl"), null !== this.dom.$cItems && this.dom.$cItems.remove(), this.e = null, this.dom.$el.data("owlCarousel", null), delete this.dom.el.owlCarousel, this.dom.$stage.unwrap(), this.dom.$items.unwrap(), this.dom.$items.contents().unwrap(), this.dom = null
        }, e.prototype.op = function(a, b, c) {
            var d = this.settings.rtl;
            switch (b) {
                case "<":
                    return d ? a > c : c > a;
                case ">":
                    return d ? c > a : a > c;
                case ">=":
                    return d ? c >= a : a >= c;
                case "<=":
                    return d ? a >= c : c >= a
            }
        }, e.prototype.on = function(a, b, c, d) { a.addEventListener ? a.addEventListener(b, c, d) : a.attachEvent && a.attachEvent("on" + b, c) }, e.prototype.off = function(a, b, c, d) { a.removeEventListener ? a.removeEventListener(b, c, d) : a.detachEvent && a.detachEvent("on" + b, c) }, e.prototype.trigger = function(b, c, d) {
            var e = { item: { count: this.num.oItems, index: this.current() } },
                f = a.camelCase(a.grep(["on", b, d], function(a) { return a }).join("-").toLowerCase()),
                g = a.Event([b, "owl", d || "carousel"].join(".").toLowerCase(), a.extend({ relatedTarget: this }, e, c));
            return this._supress[g.type] || (a.each(this.plugins, function(a, b) { b.onTrigger && b.onTrigger(g) }), this.dom.$el.trigger(g), "function" == typeof this.settings[f] && this.settings[f].apply(this, g)), g
        }, e.prototype.suppress = function(b) { a.each(b, a.proxy(function(a, b) { this._supress[b] = !0 }, this)) }, e.prototype.release = function(b) { a.each(b, a.proxy(function(a, b) { delete this._supress[b] }, this)) }, e.prototype.browserSupport = function() {
            if (this.support3d = i(), this.support3d) {
                this.transformVendor = h();
                var a = ["transitionend", "webkitTransitionEnd", "transitionend", "oTransitionEnd"];
                this.transitionEndVendor = a[g()], this.vendorName = this.transformVendor.replace(/Transform/i, ""), this.vendorName = "" !== this.vendorName ? "-" + this.vendorName.toLowerCase() + "-" : ""
            }
            this.state.orientation = b.orientation
        }, a.fn.owlCarousel = function(b) { return this.each(function() { a(this).data("owlCarousel") || a(this).data("owlCarousel", new e(this, b)) }) }, a.fn.owlCarousel.Constructor = e
    }(window.Zepto || window.jQuery, window, document),
    function(a, b) {
        LazyLoad = function(b) { this.owl = b, this.owl.options = a.extend({}, LazyLoad.Defaults, this.owl.options), this.handlers = { "changed.owl.carousel": a.proxy(function(a) { "items" == a.property.name && a.property.value && !a.property.value.is(":empty") && this.check() }, this) }, this.owl.dom.$el.on(this.handlers) }, LazyLoad.Defaults = { lazyLoad: !1 }, LazyLoad.prototype.check = function() { var a, c, d, e, f = b.devicePixelRatio > 1 ? "data-src-retina" : "data-src"; for (d = 0; d < this.owl.num.items; d++) e = this.owl.dom.$items.eq(d), e.data("owl-item").current === !0 && e.data("owl-item").loaded === !1 && (c = e.find(".owl-lazy"), a = c.attr(f), a = a || c.attr("data-src"), a && (c.css("opacity", "0"), this.preload(c, e))) }, LazyLoad.prototype.preload = function(c, d) {
            var e, f, g;
            c.each(a.proxy(function(c, h) { this.owl.trigger("load", null, "lazy"), e = a(h), f = new Image, g = e.attr(b.devicePixelRatio > 1 ? "data-src-retina" : "data-src"), g = g || e.attr("data-src"), f.onload = a.proxy(function() { d.data("owl-item").loaded = !0, e.is("img") ? e.attr("src", f.src) : e.css("background-image", "url(" + f.src + ")"), e.css("opacity", 1), this.owl.trigger("loaded", null, "lazy") }, this), f.src = g }, this))
        }, LazyLoad.prototype.destroy = function() { var a, b; for (a in this.handlers) this.owl.dom.$el.off(a, this.handlers[a]); for (b in Object.getOwnPropertyNames(this)) "function" != typeof this[b] && (this[b] = null) }, a.fn.owlCarousel.Constructor.Plugins.lazyLoad = LazyLoad
    }(window.Zepto || window.jQuery, window, document),
    function(a, b) {
        AutoHeight = function(b) { this.owl = b, this.owl.options = a.extend({}, AutoHeight.Defaults, this.owl.options), this.handlers = { "changed.owl.carousel": a.proxy(function(a) { "position" == a.property.name && this.owl.settings.autoHeight && this.setHeight() }, this) }, this.owl.dom.$el.on(this.handlers) }, AutoHeight.Defaults = { autoHeight: !1, autoHeightClass: "owl-height" }, AutoHeight.prototype.setHeight = function() {
            var a, c = this.owl.dom.$items.eq(this.owl.current()),
                d = this.owl.dom.$oStage,
                e = 0;
            this.owl.dom.$oStage.hasClass(this.owl.settings.autoHeightClass) || this.owl.dom.$oStage.addClass(this.owl.settings.autoHeightClass), a = b.setInterval(function() { e += 1, c.data("owl-item").loaded ? (d.height(c.height() + "px"), clearInterval(a)) : 500 === e && clearInterval(a) }, 100)
        }, AutoHeight.prototype.destroy = function() { var a, b; for (a in this.handlers) this.owl.dom.$el.off(a, this.handlers[a]); for (b in Object.getOwnPropertyNames(this)) "function" != typeof this[b] && (this[b] = null) }, a.fn.owlCarousel.Constructor.Plugins.autoHeight = AutoHeight
    }(window.Zepto || window.jQuery, window, document),
    function(a, b, c) {
        Video = function(b) { this.owl = b, this.owl.options = a.extend({}, Video.Defaults, this.owl.options), this.handlers = { "resize.owl.carousel": a.proxy(function(a) { this.owl.settings.video && !this.isInFullScreen() && a.preventDefault() }, this), "refresh.owl.carousel changed.owl.carousel": a.proxy(function() { this.owl.state.videoPlay && this.stopVideo() }, this), "refresh.owl.carousel refreshed.owl.carousel": a.proxy(function(a) { return !!this.owl.settings.video && void(this.refreshing = "refresh" == a.type) }, this), "changed.owl.carousel": a.proxy(function(a) { this.refreshing && "items" == a.property.name && a.property.value && !a.property.value.is(":empty") && this.checkVideoLinks() }, this) }, this.owl.dom.$el.on(this.handlers), this.owl.dom.$el.on("click.owl.video", ".owl-video-play-icon", a.proxy(function(a) { this.playVideo(a) }, this)) }, Video.Defaults = { video: !1, videoHeight: !1, videoWidth: !1 }, Video.prototype.checkVideoLinks = function() { var a, b, c; for (c = 0; c < this.owl.num.items; c++) b = this.owl.dom.$items.eq(c), b.data("owl-item").hasVideo || (a = b.find(".owl-video"), a.length && (this.owl.state.hasVideos = !0, this.owl.dom.$items.eq(c).data("owl-item").hasVideo = !0, a.css("display", "none"), this.getVideoInfo(a, b))) }, Video.prototype.getVideoInfo = function(a, b) {
            var c, d, e, f, g = a.data("vimeo-id"),
                h = a.data("youtube-id"),
                i = a.data("width") || this.owl.settings.videoWidth,
                j = a.data("height") || this.owl.settings.videoHeight,
                k = a.attr("href");
            if (g) d = "vimeo", e = g;
            else if (h) d = "youtube", e = h;
            else {
                if (!k) throw new Error("Missing video link.");
                e = k.match(/(http:|https:|)\/\/(player.|www.)?(vimeo\.com|youtu(be\.com|\.be|be\.googleapis\.com))\/(video\/|embed\/|watch\?v=|v\/)?([A-Za-z0-9._%-]*)(\&\S+)?/), e[3].indexOf("youtu") > -1 ? d = "youtube" : e[3].indexOf("vimeo") > -1 && (d = "vimeo"), e = e[6]
            }
            b.data("owl-item").videoType = d, b.data("owl-item").videoId = e, b.data("owl-item").videoWidth = i, b.data("owl-item").videoHeight = j, c = { type: d, id: e }, f = i && j ? 'style="width:' + i + "px;height:" + j + 'px;"' : "", a.wrap('<div class="owl-video-wrapper"' + f + "></div>"), this.createVideoTn(a, c)
        }, Video.prototype.createVideoTn = function(b, c) {
            function d(a) { f = '<div class="owl-video-play-icon"></div>', e = k.settings.lazyLoad ? '<div class="owl-video-tn ' + j + '" ' + i + '="' + a + '"></div>' : '<div class="owl-video-tn" style="opacity:1;background-image:url(' + a + ')"></div>', b.after(e), b.after(f) }
            var e, f, g, h = b.find("img"),
                i = "src",
                j = "",
                k = this.owl;
            return this.owl.settings.lazyLoad && (i = "data-src", j = "owl-lazy"), h.length ? (d(h.attr(i)), h.remove(), !1) : void("youtube" === c.type ? (g = "http://img.youtube.com/vi/" + c.id + "/hqdefault.jpg", d(g)) : "vimeo" === c.type && a.ajax({ type: "GET", url: "http://vimeo.com/api/v2/video/" + c.id + ".json", jsonp: "callback", dataType: "jsonp", success: function(a) { g = a[0].thumbnail_large, d(g), k.settings.loop && k.updateActiveItems() } }))
        }, Video.prototype.stopVideo = function() {
            this.owl.trigger("stop", null, "video");
            var a = this.owl.dom.$items.eq(this.owl.state.videoPlayIndex);
            a.find(".owl-video-frame").remove(), a.removeClass("owl-video-playing"), this.owl.state.videoPlay = !1
        }, Video.prototype.playVideo = function(b) {
            this.owl.trigger("play", null, "video"), this.owl.state.videoPlay && this.stopVideo();
            var c, d, e, f = a(b.target || b.srcElement),
                g = f.closest("." + this.owl.settings.itemClass);
            e = g.data("owl-item").videoType, id = g.data("owl-item").videoId, width = g.data("owl-item").videoWidth || Math.floor(g.data("owl-item").width - this.owl.settings.margin), height = g.data("owl-item").videoHeight || this.owl.dom.$stage.height(), "youtube" === e ? c = '<iframe width="' + width + '" height="' + height + '" src="http://www.youtube.com/embed/' + id + "?autoplay=1&v=" + id + '" frameborder="0" allowfullscreen></iframe>' : "vimeo" === e && (c = '<iframe src="http://player.vimeo.com/video/' + id + '?autoplay=1" width="' + width + '" height="' + height + '" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>'), g.addClass("owl-video-playing"), this.owl.state.videoPlay = !0, this.owl.state.videoPlayIndex = g.data("owl-item").indexAbs, d = a('<div style="height:' + height + "px; width:" + width + 'px" class="owl-video-frame">' + c + "</div>"), f.after(d)
        }, Video.prototype.isInFullScreen = function() { var d = c.fullscreenElement || c.mozFullScreenElement || c.webkitFullscreenElement; return d && a(d.parentNode).hasClass("owl-video-frame") && (this.owl.speed(0), this.owl.state.isFullScreen = !0), !(d && this.owl.state.isFullScreen && this.owl.state.videoPlay) && (this.owl.state.isFullScreen ? (this.owl.state.isFullScreen = !1, !1) : !this.owl.state.videoPlay || this.owl.state.orientation === b.orientation || (this.owl.state.orientation = b.orientation, !1)) }, Video.prototype.destroy = function() {
            var a, b;
            this.owl.dom.$el.off("click.owl.video");
            for (a in this.handlers) this.owl.dom.$el.off(a, this.handlers[a]);
            for (b in Object.getOwnPropertyNames(this)) "function" != typeof this[b] && (this[b] = null)
        }, a.fn.owlCarousel.Constructor.Plugins.video = Video
    }(window.Zepto || window.jQuery, window, document),
    function(a, b, c, d) {
        Animate = function(b) { this.core = b, this.core.options = a.extend({}, Animate.Defaults, this.core.options), this.swapping = !0, this.previous = d, this.next = d, this.handlers = { "change.owl.carousel": a.proxy(function(a) { "position" == a.property.name && (this.previous = this.core.current(), this.next = a.property.value) }, this), "drag.owl.carousel dragged.owl.carousel translated.owl.carousel": a.proxy(function(a) { this.swapping = "translated" == a.type }, this), "translate.owl.carousel": a.proxy(function() { this.swapping && (this.core.options.animateOut || this.core.options.animateIn) && this.swap() }, this) }, this.core.dom.$el.on(this.handlers) }, Animate.Defaults = { animateOut: !1, animateIn: !1 }, Animate.prototype.swap = function() {
            if (1 === this.core.settings.items && this.core.support3d) {
                this.core.speed(0);
                var b, c = a.proxy(this.clear, this),
                    d = this.core.dom.$items.eq(this.previous),
                    e = this.core.dom.$items.eq(this.next),
                    f = this.core.settings.animateIn,
                    g = this.core.settings.animateOut;
                this.core.current() !== this.previous && (g && (b = this.core.coordinates(this.previous) - this.core.coordinates(this.next), d.css({ left: b + "px" }).addClass("animated owl-animated-out").addClass(g).one("webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend", c)), f && e.addClass("animated owl-animated-in").addClass(f).one("webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend", c))
            }
        }, Animate.prototype.clear = function(b) { a(b.target).css({ left: "" }).removeClass("animated owl-animated-out owl-animated-in").removeClass(this.core.settings.animateIn).removeClass(this.core.settings.animateOut), this.core.transitionEnd() }, Animate.prototype.destroy = function() { var a, b; for (a in this.handlers) this.core.dom.$el.off(a, this.handlers[a]); for (b in Object.getOwnPropertyNames(this)) "function" != typeof this[b] && (this[b] = null) }, a.fn.owlCarousel.Constructor.Plugins.Animate = Animate
    }(window.Zepto || window.jQuery, window, document),
    function(a, b, c) {
        Autoplay = function(b) { this.core = b, this.core.options = a.extend({}, Autoplay.Defaults, this.core.options), this.handlers = { "translated.owl.carousel refreshed.owl.carousel": a.proxy(function() { this.autoplay() }, this), "play.owl.autoplay": a.proxy(function(a, b, c) { this.play(b, c) }, this), "stop.owl.autoplay": a.proxy(function() { this.stop() }, this), "mouseover.owl.autoplay": a.proxy(function() { this.core.settings.autoplayHoverPause && this.pause() }, this), "mouseleave.owl.autoplay": a.proxy(function() { this.core.settings.autoplayHoverPause && this.autoplay() }, this) }, this.core.dom.$el.on(this.handlers) }, Autoplay.Defaults = { autoplay: !1, autoplayTimeout: 5e3, autoplayHoverPause: !1, autoplaySpeed: !1 }, Autoplay.prototype.autoplay = function() { this.core.settings.autoplay && !this.core.state.videoPlay ? (b.clearInterval(this.interval), this.interval = b.setInterval(a.proxy(function() { this.play() }, this), this.core.settings.autoplayTimeout)) : b.clearInterval(this.interval) }, Autoplay.prototype.play = function() { return c.hidden === !0 || this.core.state.isTouch || this.core.state.isScrolling || this.core.state.isSwiping || this.core.state.inMotion ? void 0 : this.core.settings.autoplay === !1 ? void b.clearInterval(this.interval) : void this.core.next(this.core.settings.autoplaySpeed) }, Autoplay.prototype.stop = function() { b.clearInterval(this.interval) }, Autoplay.prototype.pause = function() { b.clearInterval(this.interval) }, Autoplay.prototype.destroy = function() {
            var a, c;
            b.clearInterval(this.interval);
            for (a in this.handlers) this.core.dom.$el.off(a, this.handlers[a]);
            for (c in Object.getOwnPropertyNames(this)) "function" != typeof this[c] && (this[c] = null)
        }, a.fn.owlCarousel.Constructor.Plugins.autoplay = Autoplay
    }(window.Zepto || window.jQuery, window, document),
    function(a) {
        "use strict";
        var b = function(c) {
            this.core = c, this.initialized = !1, this.pages = [], this.controls = {}, this.template = null, this.$element = this.core.dom.$el, this.overrides = { next: this.core.next, prev: this.core.prev, to: this.core.to }, this.handlers = {
                "changed.owl.carousel": a.proxy(function(b) { "items" == b.property.name && (this.initialized || (this.initialize(), this.initialized = !0), this.update(), this.draw()), this.filling && (b.property.value.data("owl-item").dot = a(":first-child", b.property.value).find("[data-dot]").andSelf().data("dot")) }, this),
                "change.owl.carousel": a.proxy(function(a) {
                    if ("position" == a.property.name && !this.core.state.revert && !this.core.settings.loop && this.core.settings.navRewind) {
                        var b = this.core.current(),
                            c = this.core.maximum(),
                            d = this.core.minimum();
                        a.data = a.property.value > c ? b >= c ? d : c : a.property.value < d ? c : a.property.value
                    }
                    this.filling = this.core.settings.dotsData && "item" == a.property.name && a.property.value && a.property.value.is(":empty")
                }, this),
                "refreshed.owl.carousel": a.proxy(function() { this.initialized && (this.update(), this.draw()) }, this)
            }, this.core.options = a.extend({}, b.Defaults, this.core.options), this.$element.on(this.handlers)
        };
        b.Defaults = { nav: !1, navRewind: !0, navText: ["prev", "next"], navSpeed: !1, navElement: "div", navContainer: !1, navContainerClass: "owl-nav", navClass: ["owl-prev", "owl-next"], slideBy: 1, dotClass: "owl-dot", dotsClass: "owl-dots", dots: !0, dotsEach: !1, dotData: !1, dotsSpeed: !1, dotsContainer: !1, controlsClass: "owl-controls" }, b.prototype.initialize = function() {
            var b, c, d = this.core.settings;
            d.dotsData || (this.template = a("<div>").addClass(d.dotClass).append(a("<span>")).prop("outerHTML")), d.navContainer && d.dotsContainer || (this.controls.$container = a("<div>").addClass(d.controlsClass).appendTo(this.$element)), this.controls.$indicators = d.dotsContainer ? a(d.dotsContainer) : a("<div>").hide().addClass(d.dotsClass).appendTo(this.controls.$container), this.controls.$indicators.on(this.core.dragType[2], "div", a.proxy(function(b) {
                var c = a(b.target).parent().is(this.controls.$indicators) ? a(b.target).index() : a(b.target).parent().index();
                b.preventDefault(), this.to(c, d.dotsSpeed)
            }, this)), b = d.navContainer ? a(d.navContainer) : a("<div>").addClass(d.navContainerClass).prependTo(this.controls.$container), this.controls.$next = a("<" + d.navElement + ">"), this.controls.$previous = this.controls.$next.clone(), this.controls.$previous.addClass(d.navClass[0]).html(d.navText[0]).hide().prependTo(b).on(this.core.dragType[2], a.proxy(function() { this.prev() }, this)), this.controls.$next.addClass(d.navClass[1]).html(d.navText[1]).hide().appendTo(b).on(this.core.dragType[2], a.proxy(function() { this.next() }, this));
            for (c in this.overrides) this.core[c] = a.proxy(this[c], this)
        }, b.prototype.destroy = function() { var a, b, c, d; for (a in this.handlers) this.$element.off(a, this.handlers[a]); for (b in this.controls) this.controls[b].remove(); for (d in this.overides) this.core[d] = this.overrides[d]; for (c in Object.getOwnPropertyNames(this)) "function" != typeof this[c] && (this[c] = null) }, b.prototype.update = function() {
            var a, b, c, d = this.core.settings,
                e = this.core.num.cItems / 2,
                f = this.core.num.items - e,
                g = d.center || d.autoWidth || d.dotData ? 1 : d.dotsEach || d.items;
            if ("page" !== d.slideBy && (d.slideBy = Math.min(d.slideBy, d.items)), d.dots)
                for (this.pages = [], a = e, b = 0, c = 0; f > a; a++)(b >= g || 0 === b) && (this.pages.push({ start: a - e, end: a - e + g - 1 }), b = 0, ++c), b += this.core.num.merged[a]
        }, b.prototype.draw = function() {
            var b, c, d = "",
                e = this.core.settings,
                f = this.core.dom.$oItems,
                g = this.core.normalize(this.core.current(), !0);
            if (!e.nav || e.loop || e.navRewind || (this.controls.$previous.toggleClass("disabled", 0 >= g), this.controls.$next.toggleClass("disabled", g >= this.core.maximum())), this.controls.$previous.toggle(e.nav), this.controls.$next.toggle(e.nav), e.dots) {
                if (b = this.pages.length - this.controls.$indicators.children().length, b > 0) {
                    for (c = 0; c < Math.abs(b); c++) d += e.dotData ? f.eq(c).data("owl-item").dot : this.template;
                    this.controls.$indicators.append(d)
                } else 0 > b && this.controls.$indicators.children().slice(b).remove();
                this.controls.$indicators.find(".active").removeClass("active"), this.controls.$indicators.children().eq(a.inArray(this.current(), this.pages)).addClass("active")
            }
            this.controls.$indicators.toggle(e.dots)
        }, b.prototype.onTrigger = function(b) {
            var c = this.core.settings;
            b.page = { index: a.inArray(this.current(), this.pages), count: this.pages.length, size: c.center || c.autoWidth || c.dotData ? 1 : c.dotsEach || c.items }
        }, b.prototype.current = function() { var b = this.core.normalize(this.core.current(), !0); return a.grep(this.pages, function(a) { return a.start <= b && a.end >= b }).pop() }, b.prototype.getPosition = function(b) { var c, d, e = this.core.settings; return "page" == e.slideBy ? (c = a.inArray(this.current(), this.pages), d = this.pages.length, b ? ++c : --c, c = this.pages[(c % d + d) % d].start) : (c = this.core.normalize(this.core.current(), !0), d = this.core.num.oItems, b ? c += e.slideBy : c -= e.slideBy), c }, b.prototype.next = function(b) { a.proxy(this.overrides.to, this.core)(this.getPosition(!0), b) }, b.prototype.prev = function(b) { a.proxy(this.overrides.to, this.core)(this.getPosition(!1), b) }, b.prototype.to = function(b, c, d) {
            var e;
            d ? a.proxy(this.overrides.to, this.core)(b, c) : (e = this.pages.length, a.proxy(this.overrides.to, this.core)(this.pages[(b % e + e) % e].start, c))
        }, a.fn.owlCarousel.Constructor.Plugins.Navigation = b
    }(window.Zepto || window.jQuery, window, document),
    function(a, b, c, d) {
        "use strict";
        var e = function(c) {
            this.core = c, this.hashes = {}, this.$element = this.core.dom.$el, this.handlers = { "initialized.owl.carousel": a.proxy(function() { b.location.hash.substring(1) && a(b).trigger("hashchange.owl.navigation") }, this), "changed.owl.carousel": a.proxy(function(b) { this.filling && (b.property.value.data("owl-item").hash = a(":first-child", b.property.value).find("[data-hash]").andSelf().data("hash"), this.hashes[b.property.value.data("owl-item").hash] = b.property.value) }, this), "change.owl.carousel": a.proxy(function(a) { "position" == a.property.name && this.core.current() === d && "URLHash" == this.core.settings.startPosition && (a.data = this.hashes[b.location.hash.substring(1)]), this.filling = "item" == a.property.name && a.property.value && a.property.value.is(":empty") }, this) }, this.core.options = a.extend({}, e.Defaults, this.core.options), this.$element.on(this.handlers), a(b).on("hashchange.owl.navigation", a.proxy(function() {
                var a = b.location.hash.substring(1),
                    c = this.core.dom.$oItems,
                    d = this.hashes[a] && c.index(this.hashes[a]) || 0;
                return !!a && (this.core.dom.oStage.scrollLeft = 0, void this.core.to(d, !1, !0))
            }, this))
        };
        e.Defaults = { URLhashListener: !1 }, e.prototype.destroy = function() {
            var c, d;
            a(b).off("hashchange.owl.navigation");
            for (c in this.handlers) this.owl.dom.$el.off(c, this.handlers[c]);
            for (d in Object.getOwnPropertyNames(this)) "function" != typeof this[d] && (this[d] = null)
        }, a.fn.owlCarousel.Constructor.Plugins.Hash = e
    }(window.Zepto || window.jQuery, window, document),
    function(a) { "function" == typeof define && define.amd && define.amd.jQuery ? define(["jquery"], a) : a("undefined" != typeof module && module.exports ? require("jquery") : jQuery) }(function(a) {
        function b(b) {
            return !b || void 0 !== b.allowPageScroll || void 0 === b.swipe && void 0 === b.swipeStatus || (b.allowPageScroll = k), void 0 !== b.click && void 0 === b.tap && (b.tap = b.click), b || (b = {}), b = a.extend({}, a.fn.swipe.defaults, b), this.each(function() {
                var d = a(this),
                    e = d.data(C);
                e || (e = new c(this, b), d.data(C, e))
            })
        }

        function c(b, c) {
            function d(b) {
                if (!(ja() || a(b.target).closest(c.excludedElements, Sa).length > 0)) {
                    var d, e = b.originalEvent ? b.originalEvent : b,
                        f = e.touches,
                        g = f ? f[0] : e;
                    return Ta = v, f ? Ua = f.length : c.preventDefaultEvents !== !1 && b.preventDefault(), Ia = 0, Ja = null, Ka = null, Qa = null, La = 0, Ma = 0, Na = 0, Oa = 1, Pa = 0, Ra = qa(), ha(), la(0, g), !f || Ua === c.fingers || c.fingers === t || R() ? (Wa = za(), 2 == Ua && (la(1, f[1]), Ma = Na = ta(Va[0].start, Va[1].start)), (c.swipeStatus || c.pinchStatus) && (d = J(e, Ta))) : d = !1, d === !1 ? (Ta = y, J(e, Ta), d) : (c.hold && (ab = setTimeout(a.proxy(function() { Sa.trigger("hold", [e.target]), c.hold && (d = c.hold.call(Sa, e, e.target)) }, this), c.longTapThreshold)), ka(!0), null)
                }
            }

            function D(a) {
                var b = a.originalEvent ? a.originalEvent : a;
                if (Ta !== x && Ta !== y && !ia()) {
                    var d, e = b.touches,
                        f = e ? e[0] : b,
                        g = ma(f);
                    if (Xa = za(), e && (Ua = e.length), c.hold && clearTimeout(ab), Ta = w, 2 == Ua && (0 == Ma ? (la(1, e[1]), Ma = Na = ta(Va[0].start, Va[1].start)) : (ma(e[1]), Na = ta(Va[0].end, Va[1].end), Qa = va(Va[0].end, Va[1].end)), Oa = ua(Ma, Na), Pa = Math.abs(Ma - Na)), Ua === c.fingers || c.fingers === t || !e || R()) {
                        if (Ja = ya(g.start, g.end), Ka = ya(g.last, g.end), P(a, Ka), Ia = wa(g.start, g.end), La = sa(), oa(Ja, Ia), d = J(b, Ta), !c.triggerOnTouchEnd || c.triggerOnTouchLeave) {
                            var h = !0;
                            if (c.triggerOnTouchLeave) {
                                var i = Aa(this);
                                h = Ba(g.end, i)
                            }!c.triggerOnTouchEnd && h ? Ta = I(w) : c.triggerOnTouchLeave && !h && (Ta = I(x)), Ta != y && Ta != x || J(b, Ta)
                        }
                    } else Ta = y, J(b, Ta);
                    d === !1 && (Ta = y, J(b, Ta))
                }
            }

            function E(a) {
                var b = a.originalEvent ? a.originalEvent : a,
                    d = b.touches;
                if (d) { if (d.length && !ia()) return ga(b), !0; if (d.length && ia()) return !0 }
                return ia() && (Ua = Za), Xa = za(), La = sa(), M() || !L() ? (Ta = y, J(b, Ta)) : c.triggerOnTouchEnd || 0 == c.triggerOnTouchEnd && Ta === w ? (c.preventDefaultEvents !== !1 && a.preventDefault(), Ta = x, J(b, Ta)) : !c.triggerOnTouchEnd && Y() ? (Ta = x, K(b, Ta, o)) : Ta === w && (Ta = y, J(b, Ta)), ka(!1), null
            }

            function F() { Ua = 0, Xa = 0, Wa = 0, Ma = 0, Na = 0, Oa = 1, ha(), ka(!1) }

            function G(a) {
                var b = a.originalEvent ? a.originalEvent : a;
                c.triggerOnTouchLeave && (Ta = I(x), J(b, Ta))
            }

            function H() { Sa.unbind(Da, d), Sa.unbind(Ha, F), Sa.unbind(Ea, D), Sa.unbind(Fa, E), Ga && Sa.unbind(Ga, G), ka(!1) }

            function I(a) {
                var b = a,
                    d = O(),
                    e = L(),
                    f = M();
                return !d || f ? b = y : !e || a != w || c.triggerOnTouchEnd && !c.triggerOnTouchLeave ? !e && a == x && c.triggerOnTouchLeave && (b = y) : b = x, b
            }

            function J(a, b) {
                var c, d = a.touches;
                return (V() || U()) && (c = K(a, b, m)), (S() || R()) && c !== !1 && (c = K(a, b, n)), ea() && c !== !1 ? c = K(a, b, p) : fa() && c !== !1 ? c = K(a, b, q) : da() && c !== !1 && (c = K(a, b, o)), b === y && (U() && (c = K(a, b, m)), R() && (c = K(a, b, n)), F(a)), b === x && (d ? d.length || F(a) : F(a)), c
            }

            function K(b, d, k) {
                var l;
                if (k == m) {
                    if (Sa.trigger("swipeStatus", [d, Ja || null, Ia || 0, La || 0, Ua, Va, Ka]), c.swipeStatus && (l = c.swipeStatus.call(Sa, b, d, Ja || null, Ia || 0, La || 0, Ua, Va, Ka), l === !1)) return !1;
                    if (d == x && T()) {
                        if (clearTimeout(_a), clearTimeout(ab), Sa.trigger("swipe", [Ja, Ia, La, Ua, Va, Ka]), c.swipe && (l = c.swipe.call(Sa, b, Ja, Ia, La, Ua, Va, Ka), l === !1)) return !1;
                        switch (Ja) {
                            case e:
                                Sa.trigger("swipeLeft", [Ja, Ia, La, Ua, Va, Ka]), c.swipeLeft && (l = c.swipeLeft.call(Sa, b, Ja, Ia, La, Ua, Va, Ka));
                                break;
                            case f:
                                Sa.trigger("swipeRight", [Ja, Ia, La, Ua, Va, Ka]), c.swipeRight && (l = c.swipeRight.call(Sa, b, Ja, Ia, La, Ua, Va, Ka));
                                break;
                            case g:
                                Sa.trigger("swipeUp", [Ja, Ia, La, Ua, Va, Ka]), c.swipeUp && (l = c.swipeUp.call(Sa, b, Ja, Ia, La, Ua, Va, Ka));
                                break;
                            case h:
                                Sa.trigger("swipeDown", [Ja, Ia, La, Ua, Va, Ka]), c.swipeDown && (l = c.swipeDown.call(Sa, b, Ja, Ia, La, Ua, Va, Ka))
                        }
                    }
                }
                if (k == n) {
                    if (Sa.trigger("pinchStatus", [d, Qa || null, Pa || 0, La || 0, Ua, Oa, Va]), c.pinchStatus && (l = c.pinchStatus.call(Sa, b, d, Qa || null, Pa || 0, La || 0, Ua, Oa, Va), l === !1)) return !1;
                    if (d == x && Q()) switch (Qa) {
                        case i:
                            Sa.trigger("pinchIn", [Qa || null, Pa || 0, La || 0, Ua, Oa, Va]), c.pinchIn && (l = c.pinchIn.call(Sa, b, Qa || null, Pa || 0, La || 0, Ua, Oa, Va));
                            break;
                        case j:
                            Sa.trigger("pinchOut", [Qa || null, Pa || 0, La || 0, Ua, Oa, Va]), c.pinchOut && (l = c.pinchOut.call(Sa, b, Qa || null, Pa || 0, La || 0, Ua, Oa, Va))
                    }
                }
                return k == o ? d !== y && d !== x || (clearTimeout(_a), clearTimeout(ab), Z() && !aa() ? ($a = za(), _a = setTimeout(a.proxy(function() { $a = null, Sa.trigger("tap", [b.target]), c.tap && (l = c.tap.call(Sa, b, b.target)) }, this), c.doubleTapThreshold)) : ($a = null, Sa.trigger("tap", [b.target]), c.tap && (l = c.tap.call(Sa, b, b.target)))) : k == p ? d !== y && d !== x || (clearTimeout(_a), clearTimeout(ab), $a = null, Sa.trigger("doubletap", [b.target]), c.doubleTap && (l = c.doubleTap.call(Sa, b, b.target))) : k == q && (d !== y && d !== x || (clearTimeout(_a), $a = null, Sa.trigger("longtap", [b.target]), c.longTap && (l = c.longTap.call(Sa, b, b.target)))), l
            }

            function L() { var a = !0; return null !== c.threshold && (a = Ia >= c.threshold), a }

            function M() { var a = !1; return null !== c.cancelThreshold && null !== Ja && (a = pa(Ja) - Ia >= c.cancelThreshold), a }

            function N() { return null === c.pinchThreshold || Pa >= c.pinchThreshold }

            function O() { var a; return a = !c.maxTimeThreshold || !(La >= c.maxTimeThreshold) }

            function P(a, b) {
                if (c.preventDefaultEvents !== !1)
                    if (c.allowPageScroll === k) a.preventDefault();
                    else {
                        var d = c.allowPageScroll === l;
                        switch (b) {
                            case e:
                                (c.swipeLeft && d || !d && c.allowPageScroll != r) && a.preventDefault();
                                break;
                            case f:
                                (c.swipeRight && d || !d && c.allowPageScroll != r) && a.preventDefault();
                                break;
                            case g:
                                (c.swipeUp && d || !d && c.allowPageScroll != s) && a.preventDefault();
                                break;
                            case h:
                                (c.swipeDown && d || !d && c.allowPageScroll != s) && a.preventDefault()
                        }
                    }
            }

            function Q() {
                var a = W(),
                    b = X(),
                    c = N();
                return a && b && c
            }

            function R() { return !!(c.pinchStatus || c.pinchIn || c.pinchOut) }

            function S() { return !(!Q() || !R()) }

            function T() {
                var a = O(),
                    b = L(),
                    c = W(),
                    d = X(),
                    e = M(),
                    f = !e && d && c && b && a;
                return f
            }

            function U() { return !!(c.swipe || c.swipeStatus || c.swipeLeft || c.swipeRight || c.swipeUp || c.swipeDown) }

            function V() { return !(!T() || !U()) }

            function W() { return Ua === c.fingers || c.fingers === t || !z }

            function X() { return 0 !== Va[0].end.x }

            function Y() { return !!c.tap }

            function Z() { return !!c.doubleTap }

            function $() { return !!c.longTap }

            function _() { if (null == $a) return !1; var a = za(); return Z() && a - $a <= c.doubleTapThreshold }

            function aa() { return _() }

            function ba() { return (1 === Ua || !z) && (isNaN(Ia) || Ia < c.threshold) }

            function ca() { return La > c.longTapThreshold && Ia < u }

            function da() { return !(!ba() || !Y()) }

            function ea() { return !(!_() || !Z()) }

            function fa() { return !(!ca() || !$()) }

            function ga(a) { Ya = za(), Za = a.touches.length + 1 }

            function ha() { Ya = 0, Za = 0 }

            function ia() {
                var a = !1;
                if (Ya) {
                    var b = za() - Ya;
                    b <= c.fingerReleaseThreshold && (a = !0)
                }
                return a
            }

            function ja() { return !(Sa.data(C + "_intouch") !== !0) }

            function ka(a) { Sa && (a === !0 ? (Sa.bind(Ea, D), Sa.bind(Fa, E), Ga && Sa.bind(Ga, G)) : (Sa.unbind(Ea, D, !1), Sa.unbind(Fa, E, !1), Ga && Sa.unbind(Ga, G, !1)), Sa.data(C + "_intouch", a === !0)) }

            function la(a, b) { var c = { start: { x: 0, y: 0 }, last: { x: 0, y: 0 }, end: { x: 0, y: 0 } }; return c.start.x = c.last.x = c.end.x = b.pageX || b.clientX, c.start.y = c.last.y = c.end.y = b.pageY || b.clientY, Va[a] = c, c }

            function ma(a) {
                var b = void 0 !== a.identifier ? a.identifier : 0,
                    c = na(b);
                return null === c && (c = la(b, a)), c.last.x = c.end.x, c.last.y = c.end.y, c.end.x = a.pageX || a.clientX, c.end.y = a.pageY || a.clientY, c
            }

            function na(a) { return Va[a] || null }

            function oa(a, b) { b = Math.max(b, pa(a)), Ra[a].distance = b }

            function pa(a) { if (Ra[a]) return Ra[a].distance }

            function qa() { var a = {}; return a[e] = ra(e), a[f] = ra(f), a[g] = ra(g), a[h] = ra(h), a }

            function ra(a) { return { direction: a, distance: 0 } }

            function sa() { return Xa - Wa }

            function ta(a, b) {
                var c = Math.abs(a.x - b.x),
                    d = Math.abs(a.y - b.y);
                return Math.round(Math.sqrt(c * c + d * d))
            }

            function ua(a, b) { var c = b / a * 1; return c.toFixed(2) }

            function va() { return Oa < 1 ? j : i }

            function wa(a, b) { return Math.round(Math.sqrt(Math.pow(b.x - a.x, 2) + Math.pow(b.y - a.y, 2))) }

            function xa(a, b) {
                var c = a.x - b.x,
                    d = b.y - a.y,
                    e = Math.atan2(d, c),
                    f = Math.round(180 * e / Math.PI);
                return f < 0 && (f = 360 - Math.abs(f)), f
            }

            function ya(a, b) { var c = xa(a, b); return c <= 45 && c >= 0 ? e : c <= 360 && c >= 315 ? e : c >= 135 && c <= 225 ? f : c > 45 && c < 135 ? h : g }

            function za() { var a = new Date; return a.getTime() }

            function Aa(b) {
                b = a(b);
                var c = b.offset(),
                    d = { left: c.left, right: c.left + b.outerWidth(), top: c.top, bottom: c.top + b.outerHeight() };
                return d
            }

            function Ba(a, b) { return a.x > b.left && a.x < b.right && a.y > b.top && a.y < b.bottom }
            var c = a.extend({}, c),
                Ca = z || B || !c.fallbackToMouseEvents,
                Da = Ca ? B ? A ? "MSPointerDown" : "pointerdown" : "touchstart" : "mousedown",
                Ea = Ca ? B ? A ? "MSPointerMove" : "pointermove" : "touchmove" : "mousemove",
                Fa = Ca ? B ? A ? "MSPointerUp" : "pointerup" : "touchend" : "mouseup",
                Ga = Ca ? B ? "mouseleave" : null : "mouseleave",
                Ha = B ? A ? "MSPointerCancel" : "pointercancel" : "touchcancel",
                Ia = 0,
                Ja = null,
                Ka = null,
                La = 0,
                Ma = 0,
                Na = 0,
                Oa = 1,
                Pa = 0,
                Qa = 0,
                Ra = null,
                Sa = a(b),
                Ta = "start",
                Ua = 0,
                Va = {},
                Wa = 0,
                Xa = 0,
                Ya = 0,
                Za = 0,
                $a = 0,
                _a = null,
                ab = null;
            try { Sa.bind(Da, d), Sa.bind(Ha, F) } catch (bb) { a.error("events not supported " + Da + "," + Ha + " on jQuery.swipe") }
            this.enable = function() { return Sa.bind(Da, d), Sa.bind(Ha, F), Sa }, this.disable = function() { return H(), Sa }, this.destroy = function() { H(), Sa.data(C, null), Sa = null }, this.option = function(b, d) {
                if ("object" == typeof b) c = a.extend(c, b);
                else if (void 0 !== c[b]) {
                    if (void 0 === d) return c[b];
                    c[b] = d
                } else {
                    if (!b) return c;
                    a.error("Option " + b + " does not exist on jQuery.swipe.options")
                }
                return null
            }
        }
        var d = "1.6.15",
            e = "left",
            f = "right",
            g = "up",
            h = "down",
            i = "in",
            j = "out",
            k = "none",
            l = "auto",
            m = "swipe",
            n = "pinch",
            o = "tap",
            p = "doubletap",
            q = "longtap",
            r = "horizontal",
            s = "vertical",
            t = "all",
            u = 10,
            v = "start",
            w = "move",
            x = "end",
            y = "cancel",
            z = "ontouchstart" in window,
            A = window.navigator.msPointerEnabled && !window.navigator.pointerEnabled && !z,
            B = (window.navigator.pointerEnabled || window.navigator.msPointerEnabled) && !z,
            C = "TouchSwipe",
            D = { fingers: 1, threshold: 75, cancelThreshold: null, pinchThreshold: 20, maxTimeThreshold: null, fingerReleaseThreshold: 250, longTapThreshold: 500, doubleTapThreshold: 200, swipe: null, swipeLeft: null, swipeRight: null, swipeUp: null, swipeDown: null, swipeStatus: null, pinchIn: null, pinchOut: null, pinchStatus: null, click: null, tap: null, doubleTap: null, longTap: null, hold: null, triggerOnTouchEnd: !0, triggerOnTouchLeave: !1, allowPageScroll: "auto", fallbackToMouseEvents: !0, excludedElements: "label, button, input, select, textarea, a, .noSwipe", preventDefaultEvents: !0 };
        a.fn.swipe = function(c) {
            var d = a(this),
                e = d.data(C);
            if (e && "string" == typeof c) {
                if (e[c]) return e[c].apply(this, Array.prototype.slice.call(arguments, 1));
                a.error("Method " + c + " does not exist on jQuery.swipe")
            } else if (e && "object" == typeof c) e.option.apply(this, arguments);
            else if (!(e || "object" != typeof c && c)) return b.apply(this, arguments);
            return d
        }, a.fn.swipe.version = d, a.fn.swipe.defaults = D, a.fn.swipe.phases = { PHASE_START: v, PHASE_MOVE: w, PHASE_END: x, PHASE_CANCEL: y }, a.fn.swipe.directions = { LEFT: e, RIGHT: f, UP: g, DOWN: h, IN: i, OUT: j }, a.fn.swipe.pageScroll = { NONE: k, HORIZONTAL: r, VERTICAL: s, AUTO: l }, a.fn.swipe.fingers = { ONE: 1, TWO: 2, THREE: 3, FOUR: 4, FIVE: 5, ALL: t }
    }),
    function(a) {
        function b(b) { this.options = a.extend({ container: null, hideOnClickOutside: !1, menuActiveClass: "nav-active", menuOpener: ".nav-opener", menuDrop: ".nav-drop", toggleEvent: "click", outsideClickEvent: "click touchstart pointerdown MSPointerDown" }, b), this.initStructure(), this.attachEvents() }
        b.prototype = {
            initStructure: function() { this.page = a("html"), this.container = a(this.options.container), this.opener = this.container.find(this.options.menuOpener), this.drop = this.container.find(this.options.menuDrop) },
            attachEvents: function() {
                var b = this;
                c && (c(), c = null), this.outsideClickHandler = function(c) {
                    if (b.isOpened()) {
                        var d = a(c.target);
                        d.closest(b.opener).length || d.closest(b.drop).length || b.hide()
                    }
                }, this.openerClickHandler = function(a) { a.preventDefault(), b.toggle() }, this.opener.on(this.options.toggleEvent, this.openerClickHandler)
            },
            isOpened: function() { return this.container.hasClass(this.options.menuActiveClass) },
            show: function() { this.container.addClass(this.options.menuActiveClass), this.options.hideOnClickOutside && this.page.on(this.options.outsideClickEvent, this.outsideClickHandler) },
            hide: function() { this.container.removeClass(this.options.menuActiveClass), this.options.hideOnClickOutside && this.page.off(this.options.outsideClickEvent, this.outsideClickHandler) },
            toggle: function() { this.isOpened() ? this.hide() : this.show() },
            destroy: function() { this.container.removeClass(this.options.menuActiveClass), this.opener.off(this.options.toggleEvent, this.clickHandler), this.page.off(this.options.outsideClickEvent, this.outsideClickHandler) }
        };
        var c = function() {
            var b, c, d = a(window),
                e = a("html"),
                f = "resize-active",
                g = function() { b = !1, e.removeClass(f) },
                h = function() { b || (b = !0, e.addClass(f)), clearTimeout(c), c = setTimeout(g, 500) };
            d.on("resize orientationchange", h)
        };
        a.fn.mobileNav = function(c) {
            return this.each(function() {
                var d = a.extend({}, c, { container: this }),
                    e = new b(d);
                a.data(this, "MobileNav", e)
            })
        }
    }(jQuery), ! function(a) { "function" == typeof define && define.amd ? define(["jquery"], a) : a(jQuery) }(function(a) {
        a.extend(a.fn, {
            validate: function(b) {
                if (!this.length) return void(b && b.debug && window.console && console.warn("Nothing selected, can't validate, returning nothing."));
                var c = a.data(this[0], "validator");
                return c ? c : (this.attr("novalidate", "novalidate"), c = new a.validator(b, this[0]), a.data(this[0], "validator", c), c.settings.onsubmit && (this.on("click.validate", ":submit", function(b) { c.settings.submitHandler && (c.submitButton = b.target), a(this).hasClass("cancel") && (c.cancelSubmit = !0), void 0 !== a(this).attr("formnovalidate") && (c.cancelSubmit = !0) }), this.on("submit.validate", function(b) {
                    function d() { var d, e; return !c.settings.submitHandler || (c.submitButton && (d = a("<input type='hidden'/>").attr("name", c.submitButton.name).val(a(c.submitButton).val()).appendTo(c.currentForm)), e = c.settings.submitHandler.call(c, c.currentForm, b), c.submitButton && d.remove(), void 0 !== e && e) }
                    return c.settings.debug && b.preventDefault(), c.cancelSubmit ? (c.cancelSubmit = !1, d()) : c.form() ? c.pendingRequest ? (c.formSubmitted = !0, !1) : d() : (c.focusInvalid(), !1)
                })), c)
            },
            valid: function() { var b, c, d; return a(this[0]).is("form") ? b = this.validate().form() : (d = [], b = !0, c = a(this[0].form).validate(), this.each(function() { b = c.element(this) && b, d = d.concat(c.errorList) }), c.errorList = d), b },
            rules: function(b, c) {
                var d, e, f, g, h, i, j = this[0];
                if (b) switch (d = a.data(j.form, "validator").settings, e = d.rules, f = a.validator.staticRules(j), b) {
                    case "add":
                        a.extend(f, a.validator.normalizeRule(c)), delete f.messages, e[j.name] = f, c.messages && (d.messages[j.name] = a.extend(d.messages[j.name], c.messages));
                        break;
                    case "remove":
                        return c ? (i = {}, a.each(c.split(/\s/), function(b, c) { i[c] = f[c], delete f[c], "required" === c && a(j).removeAttr("aria-required") }), i) : (delete e[j.name], f)
                }
                return g = a.validator.normalizeRules(a.extend({}, a.validator.classRules(j), a.validator.attributeRules(j), a.validator.dataRules(j), a.validator.staticRules(j)), j), g.required && (h = g.required, delete g.required, g = a.extend({ required: h }, g), a(j).attr("aria-required", "true")), g.remote && (h = g.remote, delete g.remote, g = a.extend(g, { remote: h })), g
            }
        }), a.extend(a.expr[":"], { blank: function(b) { return !a.trim("" + a(b).val()) }, filled: function(b) { return !!a.trim("" + a(b).val()) }, unchecked: function(b) { return !a(b).prop("checked") } }), a.validator = function(b, c) { this.settings = a.extend(!0, {}, a.validator.defaults, b), this.currentForm = c, this.init() }, a.validator.format = function(b, c) { return 1 === arguments.length ? function() { var c = a.makeArray(arguments); return c.unshift(b), a.validator.format.apply(this, c) } : (arguments.length > 2 && c.constructor !== Array && (c = a.makeArray(arguments).slice(1)), c.constructor !== Array && (c = [c]), a.each(c, function(a, c) { b = b.replace(new RegExp("\\{" + a + "\\}", "g"), function() { return c }) }), b) }, a.extend(a.validator, {
            defaults: {
                messages: {},
                groups: {},
                rules: {},
                errorClass: "error",
                validClass: "valid",
                errorElement: "label",
                focusCleanup: !1,
                focusInvalid: !0,
                errorContainer: a([]),
                errorLabelContainer: a([]),
                onsubmit: !0,
                ignore: ":hidden",
                ignoreTitle: !1,
                onfocusin: function(a) { this.lastActive = a, this.settings.focusCleanup && (this.settings.unhighlight && this.settings.unhighlight.call(this, a, this.settings.errorClass, this.settings.validClass), this.hideThese(this.errorsFor(a))) },
                onfocusout: function(a) { this.checkable(a) || !(a.name in this.submitted) && this.optional(a) || this.element(a) },
                onkeyup: function(b, c) {
                    var d = [16, 17, 18, 20, 35, 36, 37, 38, 39, 40, 45, 144, 225];
                    9 === c.which && "" === this.elementValue(b) || -1 !== a.inArray(c.keyCode, d) || (b.name in this.submitted || b === this.lastElement) && this.element(b)
                },
                onclick: function(a) { a.name in this.submitted ? this.element(a) : a.parentNode.name in this.submitted && this.element(a.parentNode) },
                highlight: function(b, c, d) { "radio" === b.type ? this.findByName(b.name).addClass(c).removeClass(d) : a(b).addClass(c).removeClass(d) },
                unhighlight: function(b, c, d) { "radio" === b.type ? this.findByName(b.name).removeClass(c).addClass(d) : a(b).removeClass(c).addClass(d) }
            },
            setDefaults: function(b) { a.extend(a.validator.defaults, b) },
            messages: { required: "This field is required.", remote: "Please fix this field.", email: "Please enter a valid email address.", url: "Please enter a valid URL.", date: "Please enter a valid date.", dateISO: "Please enter a valid date ( ISO ).", number: "Please enter a valid number.", digits: "Please enter only digits.", creditcard: "Please enter a valid credit card number.", equalTo: "Please enter the same value again.", maxlength: a.validator.format("Please enter no more than {0} characters."), minlength: a.validator.format("Please enter at least {0} characters."), rangelength: a.validator.format("Please enter a value between {0} and {1} characters long."), range: a.validator.format("Please enter a value between {0} and {1}."), max: a.validator.format("Please enter a value less than or equal to {0}."), min: a.validator.format("Please enter a value greater than or equal to {0}.") },
            autoCreateRanges: !1,
            prototype: {
                init: function() {
                    function b(b) {
                        var c = a.data(this.form, "validator"),
                            d = "on" + b.type.replace(/^validate/, ""),
                            e = c.settings;
                        e[d] && !a(this).is(e.ignore) && e[d].call(c, this, b)
                    }
                    this.labelContainer = a(this.settings.errorLabelContainer), this.errorContext = this.labelContainer.length && this.labelContainer || a(this.currentForm), this.containers = a(this.settings.errorContainer).add(this.settings.errorLabelContainer), this.submitted = {}, this.valueCache = {}, this.pendingRequest = 0, this.pending = {}, this.invalid = {}, this.reset();
                    var c, d = this.groups = {};
                    a.each(this.settings.groups, function(b, c) { "string" == typeof c && (c = c.split(/\s/)), a.each(c, function(a, c) { d[c] = b }) }), c = this.settings.rules, a.each(c, function(b, d) { c[b] = a.validator.normalizeRule(d) }), a(this.currentForm).on("focusin.validate focusout.validate keyup.validate", ":text, [type='password'], [type='file'], select, textarea, [type='number'], [type='search'], [type='tel'], [type='url'], [type='email'], [type='datetime'], [type='date'], [type='month'], [type='week'], [type='time'], [type='datetime-local'], [type='range'], [type='color'], [type='radio'], [type='checkbox']", b).on("click.validate", "select, option, [type='radio'], [type='checkbox']", b), this.settings.invalidHandler && a(this.currentForm).on("invalid-form.validate", this.settings.invalidHandler), a(this.currentForm).find("[required], [data-rule-required], .required").attr("aria-required", "true")
                },
                form: function() { return this.checkForm(), a.extend(this.submitted, this.errorMap), this.invalid = a.extend({}, this.errorMap), this.valid() || a(this.currentForm).triggerHandler("invalid-form", [this]), this.showErrors(), this.valid() },
                checkForm: function() { this.prepareForm(); for (var a = 0, b = this.currentElements = this.elements(); b[a]; a++) this.check(b[a]); return this.valid() },
                element: function(b) {
                    var c = this.clean(b),
                        d = this.validationTargetFor(c),
                        e = !0;
                    return this.lastElement = d, void 0 === d ? delete this.invalid[c.name] : (this.prepareElement(d), this.currentElements = a(d), e = this.check(d) !== !1, e ? delete this.invalid[d.name] : this.invalid[d.name] = !0), a(b).attr("aria-invalid", !e), this.numberOfInvalids() || (this.toHide = this.toHide.add(this.containers)), this.showErrors(), e
                },
                showErrors: function(b) {
                    if (b) {
                        a.extend(this.errorMap, b), this.errorList = [];
                        for (var c in b) this.errorList.push({ message: b[c], element: this.findByName(c)[0] });
                        this.successList = a.grep(this.successList, function(a) { return !(a.name in b) })
                    }
                    this.settings.showErrors ? this.settings.showErrors.call(this, this.errorMap, this.errorList) : this.defaultShowErrors()
                },
                resetForm: function() {
                    a.fn.resetForm && a(this.currentForm).resetForm(), this.submitted = {}, this.lastElement = null, this.prepareForm(), this.hideErrors();
                    var b, c = this.elements().removeData("previousValue").removeAttr("aria-invalid");
                    if (this.settings.unhighlight)
                        for (b = 0; c[b]; b++) this.settings.unhighlight.call(this, c[b], this.settings.errorClass, "");
                    else c.removeClass(this.settings.errorClass)
                },
                numberOfInvalids: function() { return this.objectLength(this.invalid) },
                objectLength: function(a) { var b, c = 0; for (b in a) c++; return c },
                hideErrors: function() { this.hideThese(this.toHide) },
                hideThese: function(a) { a.not(this.containers).text(""), this.addWrapper(a).hide() },
                valid: function() { return 0 === this.size() },
                size: function() { return this.errorList.length },
                focusInvalid: function() { if (this.settings.focusInvalid) try { a(this.findLastActive() || this.errorList.length && this.errorList[0].element || []).filter(":visible").focus().trigger("focusin") } catch (b) {} },
                findLastActive: function() { var b = this.lastActive; return b && 1 === a.grep(this.errorList, function(a) { return a.element.name === b.name }).length && b },
                elements: function() {
                    var b = this,
                        c = {};
                    return a(this.currentForm).find("input, select, textarea").not(":submit, :reset, :image, :disabled").not(this.settings.ignore).filter(function() { return !this.name && b.settings.debug && window.console && console.error("%o has no name assigned", this), !(this.name in c || !b.objectLength(a(this).rules())) && (c[this.name] = !0, !0) })
                },
                clean: function(b) { return a(b)[0] },
                errors: function() { var b = this.settings.errorClass.split(" ").join("."); return a(this.settings.errorElement + "." + b, this.errorContext) },
                reset: function() { this.successList = [], this.errorList = [], this.errorMap = {}, this.toShow = a([]), this.toHide = a([]), this.currentElements = a([]) },
                prepareForm: function() { this.reset(), this.toHide = this.errors().add(this.containers) },
                prepareElement: function(a) { this.reset(), this.toHide = this.errorsFor(a) },
                elementValue: function(b) {
                    var c, d = a(b),
                        e = b.type;
                    return "radio" === e || "checkbox" === e ? this.findByName(b.name).filter(":checked").val() : "number" === e && "undefined" != typeof b.validity ? !b.validity.badInput && d.val() : (c = d.val(), "string" == typeof c ? c.replace(/\r/g, "") : c)
                },
                check: function(b) {
                    b = this.validationTargetFor(this.clean(b));
                    var c, d, e, f = a(b).rules(),
                        g = a.map(f, function(a, b) { return b }).length,
                        h = !1,
                        i = this.elementValue(b);
                    for (d in f) { e = { method: d, parameters: f[d] }; try { if (c = a.validator.methods[d].call(this, i, b, e.parameters), "dependency-mismatch" === c && 1 === g) { h = !0; continue } if (h = !1, "pending" === c) return void(this.toHide = this.toHide.not(this.errorsFor(b))); if (!c) return this.formatAndAdd(b, e), !1 } catch (j) { throw this.settings.debug && window.console && console.log("Exception occurred when checking element " + b.id + ", check the '" + e.method + "' method.", j), j instanceof TypeError && (j.message += ".  Exception occurred when checking element " + b.id + ", check the '" + e.method + "' method."), j } }
                    if (!h) return this.objectLength(f) && this.successList.push(b), !0
                },
                customDataMessage: function(b, c) { return a(b).data("msg" + c.charAt(0).toUpperCase() + c.substring(1).toLowerCase()) || a(b).data("msg") },
                customMessage: function(a, b) { var c = this.settings.messages[a]; return c && (c.constructor === String ? c : c[b]) },
                findDefined: function() {
                    for (var a = 0; a < arguments.length; a++)
                        if (void 0 !== arguments[a]) return arguments[a]
                },
                defaultMessage: function(b, c) { return this.findDefined(this.customMessage(b.name, c), this.customDataMessage(b, c), !this.settings.ignoreTitle && b.title || void 0, a.validator.messages[c], "<strong>Warning: No message defined for " + b.name + "</strong>") },
                formatAndAdd: function(b, c) {
                    var d = this.defaultMessage(b, c.method),
                        e = /\$?\{(\d+)\}/g;
                    "function" == typeof d ? d = d.call(this, c.parameters, b) : e.test(d) && (d = a.validator.format(d.replace(e, "{$1}"), c.parameters)), this.errorList.push({ message: d, element: b, method: c.method }), this.errorMap[b.name] = d, this.submitted[b.name] = d
                },
                addWrapper: function(a) { return this.settings.wrapper && (a = a.add(a.parent(this.settings.wrapper))), a },
                defaultShowErrors: function() {
                    var a, b, c;
                    for (a = 0; this.errorList[a]; a++) c = this.errorList[a], this.settings.highlight && this.settings.highlight.call(this, c.element, this.settings.errorClass, this.settings.validClass), this.showLabel(c.element, c.message);
                    if (this.errorList.length && (this.toShow = this.toShow.add(this.containers)), this.settings.success)
                        for (a = 0; this.successList[a]; a++) this.showLabel(this.successList[a]);
                    if (this.settings.unhighlight)
                        for (a = 0, b = this.validElements(); b[a]; a++) this.settings.unhighlight.call(this, b[a], this.settings.errorClass, this.settings.validClass);
                    this.toHide = this.toHide.not(this.toShow), this.hideErrors(), this.addWrapper(this.toShow).show()
                },
                validElements: function() { return this.currentElements.not(this.invalidElements()) },
                invalidElements: function() { return a(this.errorList).map(function() { return this.element }) },
                showLabel: function(b, c) {
                    var d, e, f, g = this.errorsFor(b),
                        h = this.idOrName(b),
                        i = a(b).attr("aria-describedby");
                    g.length ? (g.removeClass(this.settings.validClass).addClass(this.settings.errorClass), g.html(c)) : (g = a("<" + this.settings.errorElement + ">").attr("id", h + "-error").addClass(this.settings.errorClass).html(c || ""), d = g, this.settings.wrapper && (d = g.hide().show().wrap("<" + this.settings.wrapper + "/>").parent()), this.labelContainer.length ? this.labelContainer.append(d) : this.settings.errorPlacement ? this.settings.errorPlacement(d, a(b)) : d.insertAfter(b), g.is("label") ? g.attr("for", h) : 0 === g.parents("label[for='" + h + "']").length && (f = g.attr("id").replace(/(:|\.|\[|\]|\$)/g, "\\$1"), i ? i.match(new RegExp("\\b" + f + "\\b")) || (i += " " + f) : i = f, a(b).attr("aria-describedby", i), e = this.groups[b.name], e && a.each(this.groups, function(b, c) { c === e && a("[name='" + b + "']", this.currentForm).attr("aria-describedby", g.attr("id")) }))), !c && this.settings.success && (g.text(""), "string" == typeof this.settings.success ? g.addClass(this.settings.success) : this.settings.success(g, b)), this.toShow = this.toShow.add(g)
                },
                errorsFor: function(b) {
                    var c = this.idOrName(b),
                        d = a(b).attr("aria-describedby"),
                        e = "label[for='" + c + "'], label[for='" + c + "'] *";
                    return d && (e = e + ", #" + d.replace(/\s+/g, ", #")), this.errors().filter(e)
                },
                idOrName: function(a) { return this.groups[a.name] || (this.checkable(a) ? a.name : a.id || a.name) },
                validationTargetFor: function(b) { return this.checkable(b) && (b = this.findByName(b.name)), a(b).not(this.settings.ignore)[0] },
                checkable: function(a) { return /radio|checkbox/i.test(a.type) },
                findByName: function(b) { return a(this.currentForm).find("[name='" + b + "']") },
                getLength: function(b, c) {
                    switch (c.nodeName.toLowerCase()) {
                        case "select":
                            return a("option:selected", c).length;
                        case "input":
                            if (this.checkable(c)) return this.findByName(c.name).filter(":checked").length
                    }
                    return b.length
                },
                depend: function(a, b) { return !this.dependTypes[typeof a] || this.dependTypes[typeof a](a, b) },
                dependTypes: { "boolean": function(a) { return a }, string: function(b, c) { return !!a(b, c.form).length }, "function": function(a, b) { return a(b) } },
                optional: function(b) { var c = this.elementValue(b); return !a.validator.methods.required.call(this, c, b) && "dependency-mismatch" },
                startRequest: function(a) { this.pending[a.name] || (this.pendingRequest++, this.pending[a.name] = !0) },
                stopRequest: function(b, c) { this.pendingRequest--, this.pendingRequest < 0 && (this.pendingRequest = 0), delete this.pending[b.name], c && 0 === this.pendingRequest && this.formSubmitted && this.form() ? (a(this.currentForm).submit(), this.formSubmitted = !1) : !c && 0 === this.pendingRequest && this.formSubmitted && (a(this.currentForm).triggerHandler("invalid-form", [this]), this.formSubmitted = !1) },
                previousValue: function(b) { return a.data(b, "previousValue") || a.data(b, "previousValue", { old: null, valid: !0, message: this.defaultMessage(b, "remote") }) },
                destroy: function() { this.resetForm(), a(this.currentForm).off(".validate").removeData("validator") }
            },
            classRuleSettings: { required: { required: !0 }, email: { email: !0 }, url: { url: !0 }, date: { date: !0 }, dateISO: { dateISO: !0 }, number: { number: !0 }, digits: { digits: !0 }, creditcard: { creditcard: !0 } },
            addClassRules: function(b, c) { b.constructor === String ? this.classRuleSettings[b] = c : a.extend(this.classRuleSettings, b) },
            classRules: function(b) {
                var c = {},
                    d = a(b).attr("class");
                return d && a.each(d.split(" "), function() { this in a.validator.classRuleSettings && a.extend(c, a.validator.classRuleSettings[this]) }), c
            },
            normalizeAttributeRule: function(a, b, c, d) { /min|max/.test(c) && (null === b || /number|range|text/.test(b)) && (d = Number(d), isNaN(d) && (d = void 0)), d || 0 === d ? a[c] = d : b === c && "range" !== b && (a[c] = !0) },
            attributeRules: function(b) {
                var c, d, e = {},
                    f = a(b),
                    g = b.getAttribute("type");
                for (c in a.validator.methods) "required" === c ? (d = b.getAttribute(c), "" === d && (d = !0), d = !!d) : d = f.attr(c), this.normalizeAttributeRule(e, g, c, d);
                return e.maxlength && /-1|2147483647|524288/.test(e.maxlength) && delete e.maxlength, e
            },
            dataRules: function(b) {
                var c, d, e = {},
                    f = a(b),
                    g = b.getAttribute("type");
                for (c in a.validator.methods) d = f.data("rule" + c.charAt(0).toUpperCase() + c.substring(1).toLowerCase()), this.normalizeAttributeRule(e, g, c, d);
                return e
            },
            staticRules: function(b) {
                var c = {},
                    d = a.data(b.form, "validator");
                return d.settings.rules && (c = a.validator.normalizeRule(d.settings.rules[b.name]) || {}), c
            },
            normalizeRules: function(b, c) {
                return a.each(b, function(d, e) {
                    if (e === !1) return void delete b[d];
                    if (e.param || e.depends) {
                        var f = !0;
                        switch (typeof e.depends) {
                            case "string":
                                f = !!a(e.depends, c.form).length;
                                break;
                            case "function":
                                f = e.depends.call(c, c)
                        }
                        f ? b[d] = void 0 === e.param || e.param : delete b[d]
                    }
                }), a.each(b, function(d, e) { b[d] = a.isFunction(e) ? e(c) : e }), a.each(["minlength", "maxlength"], function() { b[this] && (b[this] = Number(b[this])) }), a.each(["rangelength", "range"], function() {
                    var c;
                    b[this] && (a.isArray(b[this]) ? b[this] = [Number(b[this][0]), Number(b[this][1])] : "string" == typeof b[this] && (c = b[this].replace(/[\[\]]/g, "").split(/[\s,]+/), b[this] = [Number(c[0]), Number(c[1])]))
                }), a.validator.autoCreateRanges && (null != b.min && null != b.max && (b.range = [b.min, b.max], delete b.min, delete b.max), null != b.minlength && null != b.maxlength && (b.rangelength = [b.minlength, b.maxlength], delete b.minlength, delete b.maxlength)), b
            },
            normalizeRule: function(b) {
                if ("string" == typeof b) {
                    var c = {};
                    a.each(b.split(/\s/), function() { c[this] = !0 }), b = c
                }
                return b
            },
            addMethod: function(b, c, d) { a.validator.methods[b] = c, a.validator.messages[b] = void 0 !== d ? d : a.validator.messages[b], c.length < 3 && a.validator.addClassRules(b, a.validator.normalizeRule(b)) },
            methods: {
                required: function(b, c, d) { if (!this.depend(d, c)) return "dependency-mismatch"; if ("select" === c.nodeName.toLowerCase()) { var e = a(c).val(); return e && e.length > 0 } return this.checkable(c) ? this.getLength(b, c) > 0 : b.length > 0 },
                email: function(a, b) { return this.optional(b) || /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/.test(a) },
                url: function(a, b) { return this.optional(b) || /^(?:(?:(?:https?|ftp):)?\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})).?)(?::\d{2,5})?(?:[\/?#]\S*)?$/i.test(a) },
                date: function(a, b) { return this.optional(b) || !/Invalid|NaN/.test(new Date(a).toString()) },
                dateISO: function(a, b) { return this.optional(b) || /^\d{4}[\/\-](0?[1-9]|1[012])[\/\-](0?[1-9]|[12][0-9]|3[01])$/.test(a) },
                number: function(a, b) { return this.optional(b) || /^(?:-?\d+|-?\d{1,3}(?:,\d{3})+)?(?:\.\d+)?$/.test(a) },
                digits: function(a, b) { return this.optional(b) || /^\d+$/.test(a) },
                creditcard: function(a, b) {
                    if (this.optional(b)) return "dependency-mismatch";
                    if (/[^0-9 \-]+/.test(a)) return !1;
                    var c, d, e = 0,
                        f = 0,
                        g = !1;
                    if (a = a.replace(/\D/g, ""), a.length < 13 || a.length > 19) return !1;
                    for (c = a.length - 1; c >= 0; c--) d = a.charAt(c), f = parseInt(d, 10), g && (f *= 2) > 9 && (f -= 9), e += f, g = !g;
                    return e % 10 === 0
                },
                minlength: function(b, c, d) { var e = a.isArray(b) ? b.length : this.getLength(b, c); return this.optional(c) || e >= d },
                maxlength: function(b, c, d) { var e = a.isArray(b) ? b.length : this.getLength(b, c); return this.optional(c) || d >= e },
                rangelength: function(b, c, d) { var e = a.isArray(b) ? b.length : this.getLength(b, c); return this.optional(c) || e >= d[0] && e <= d[1] },
                min: function(a, b, c) { return this.optional(b) || a >= c },
                max: function(a, b, c) { return this.optional(b) || c >= a },
                range: function(a, b, c) { return this.optional(b) || a >= c[0] && a <= c[1] },
                equalTo: function(b, c, d) { var e = a(d); return this.settings.onfocusout && e.off(".validate-equalTo").on("blur.validate-equalTo", function() { a(c).valid() }), b === e.val() },
                remote: function(b, c, d) {
                    if (this.optional(c)) return "dependency-mismatch";
                    var e, f, g = this.previousValue(c);
                    return this.settings.messages[c.name] || (this.settings.messages[c.name] = {}), g.originalMessage = this.settings.messages[c.name].remote, this.settings.messages[c.name].remote = g.message, d = "string" == typeof d && { url: d } || d, g.old === b ? g.valid : (g.old = b, e = this, this.startRequest(c), f = {}, f[c.name] = b, a.ajax(a.extend(!0, {
                        mode: "abort",
                        port: "validate" + c.name,
                        dataType: "json",
                        data: f,
                        context: e.currentForm,
                        success: function(d) {
                            var f, h, i, j = d === !0 || "true" === d;
                            e.settings.messages[c.name].remote = g.originalMessage, j ? (i = e.formSubmitted, e.prepareElement(c), e.formSubmitted = i, e.successList.push(c), delete e.invalid[c.name], e.showErrors()) : (f = {}, h = d || e.defaultMessage(c, "remote"), f[c.name] = g.message = a.isFunction(h) ? h(b) : h, e.invalid[c.name] = !0, e.showErrors(f)), g.valid = j, e.stopRequest(c, j)
                        }
                    }, d)), "pending")
                }
            }
        });
        var b, c = {};
        a.ajaxPrefilter ? a.ajaxPrefilter(function(a, b, d) { var e = a.port; "abort" === a.mode && (c[e] && c[e].abort(), c[e] = d) }) : (b = a.ajax, a.ajax = function(d) {
            var e = ("mode" in d ? d : a.ajaxSettings).mode,
                f = ("port" in d ? d : a.ajaxSettings).port;
            return "abort" === e ? (c[f] && c[f].abort(), c[f] = b.apply(this, arguments), c[f]) : b.apply(this, arguments)
        })
    }), ! function(a) { "function" == typeof define && define.amd ? define(["jquery", "./jquery.validate.min"], a) : a(jQuery) }(function(a) {
        ! function() {
            function b(a) { return a.replace(/<.[^<>]*?>/g, " ").replace(/&nbsp;|&#160;/gi, " ").replace(/[.(),;:!?%#$'\"_+=\/\-“”’]*/g, "") }
            a.validator.addMethod("maxWords", function(a, c, d) { return this.optional(c) || b(a).match(/\b\w+\b/g).length <= d }, a.validator.format("Please enter {0} words or less.")), a.validator.addMethod("minWords", function(a, c, d) { return this.optional(c) || b(a).match(/\b\w+\b/g).length >= d }, a.validator.format("Please enter at least {0} words.")), a.validator.addMethod("rangeWords", function(a, c, d) {
                var e = b(a),
                    f = /\b\w+\b/g;
                return this.optional(c) || e.match(f).length >= d[0] && e.match(f).length <= d[1]
            }, a.validator.format("Please enter between {0} and {1} words."))
        }(), a.validator.addMethod("accept", function(b, c, d) {
            var e, f, g = "string" == typeof d ? d.replace(/\s/g, "").replace(/,/g, "|") : "image/*",
                h = this.optional(c);
            if (h) return h;
            if ("file" === a(c).attr("type") && (g = g.replace(/\*/g, ".*"), c.files && c.files.length))
                for (e = 0; e < c.files.length; e++)
                    if (f = c.files[e], !f.type.match(new RegExp("\\.?(" + g + ")$", "i"))) return !1;
            return !0
        }, a.validator.format("Please enter a value with a valid mimetype.")), a.validator.addMethod("alphanumeric", function(a, b) {
            return this.optional(b) || /^\w+$/i.test(a)
        }, "Letters, numbers, and underscores only please"), a.validator.addMethod("bankaccountNL", function(a, b) {
            if (this.optional(b)) return !0;
            if (!/^[0-9]{9}|([0-9]{2} ){3}[0-9]{3}$/.test(a)) return !1;
            var c, d, e, f = a.replace(/ /g, ""),
                g = 0,
                h = f.length;
            for (c = 0; h > c; c++) d = h - c, e = f.substring(c, c + 1), g += d * e;
            return g % 11 === 0
        }, "Please specify a valid bank account number"), a.validator.addMethod("bankorgiroaccountNL", function(b, c) { return this.optional(c) || a.validator.methods.bankaccountNL.call(this, b, c) || a.validator.methods.giroaccountNL.call(this, b, c) }, "Please specify a valid bank or giro account number"), a.validator.addMethod("bic", function(a, b) { return this.optional(b) || /^([A-Z]{6}[A-Z2-9][A-NP-Z1-2])(X{3}|[A-WY-Z0-9][A-Z0-9]{2})?$/.test(a) }, "Please specify a valid BIC code"), a.validator.addMethod("cifES", function(a) { "use strict"; var b, c, d, e, f, g, h = []; if (a = a.toUpperCase(), !a.match("((^[A-Z]{1}[0-9]{7}[A-Z0-9]{1}$|^[T]{1}[A-Z0-9]{8}$)|^[0-9]{8}[A-Z]{1}$)")) return !1; for (d = 0; 9 > d; d++) h[d] = parseInt(a.charAt(d), 10); for (c = h[2] + h[4] + h[6], e = 1; 8 > e; e += 2) f = (2 * h[e]).toString(), g = f.charAt(1), c += parseInt(f.charAt(0), 10) + ("" === g ? 0 : parseInt(g, 10)); return !!/^[ABCDEFGHJNPQRSUVW]{1}/.test(a) && (c += "", b = 10 - parseInt(c.charAt(c.length - 1), 10), a += b, h[8].toString() === String.fromCharCode(64 + b) || h[8].toString() === a.charAt(a.length - 1)) }, "Please specify a valid CIF number."), a.validator.addMethod("cpfBR", function(a) { if (a = a.replace(/([~!@#$%^&*()_+=`{}\[\]\-|\\:;'<>,.\/? ])+/g, ""), 11 !== a.length) return !1; var b, c, d, e, f = 0; if (b = parseInt(a.substring(9, 10), 10), c = parseInt(a.substring(10, 11), 10), d = function(a, b) { var c = 10 * a % 11; return (10 === c || 11 === c) && (c = 0), c === b }, "" === a || "00000000000" === a || "11111111111" === a || "22222222222" === a || "33333333333" === a || "44444444444" === a || "55555555555" === a || "66666666666" === a || "77777777777" === a || "88888888888" === a || "99999999999" === a) return !1; for (e = 1; 9 >= e; e++) f += parseInt(a.substring(e - 1, e), 10) * (11 - e); if (d(f, b)) { for (f = 0, e = 1; 10 >= e; e++) f += parseInt(a.substring(e - 1, e), 10) * (12 - e); return d(f, c) } return !1 }, "Please specify a valid CPF number"), a.validator.addMethod("creditcardtypes", function(a, b, c) {
            if (/[^0-9\-]+/.test(a)) return !1;
            a = a.replace(/\D/g, "");
            var d = 0;
            return c.mastercard && (d |= 1), c.visa && (d |= 2), c.amex && (d |= 4), c.dinersclub && (d |= 8), c.enroute && (d |= 16), c.discover && (d |= 32), c.jcb && (d |= 64), c.unknown && (d |= 128), c.all && (d = 255), 1 & d && /^(5[12345])/.test(a) ? 16 === a.length : 2 & d && /^(4)/.test(a) ? 16 === a.length : 4 & d && /^(3[47])/.test(a) ? 15 === a.length : 8 & d && /^(3(0[012345]|[68]))/.test(a) ? 14 === a.length : 16 & d && /^(2(014|149))/.test(a) ? 15 === a.length : 32 & d && /^(6011)/.test(a) ? 16 === a.length : 64 & d && /^(3)/.test(a) ? 16 === a.length : 64 & d && /^(2131|1800)/.test(a) ? 15 === a.length : !!(128 & d)
        }, "Please enter a valid credit card number."), a.validator.addMethod("currency", function(a, b, c) {
            var d, e = "string" == typeof c,
                f = e ? c : c[0],
                g = !!e || c[1];
            return f = f.replace(/,/g, ""), f = g ? f + "]" : f + "]?", d = "^[" + f + "([1-9]{1}[0-9]{0,2}(\\,[0-9]{3})*(\\.[0-9]{0,2})?|[1-9]{1}[0-9]{0,}(\\.[0-9]{0,2})?|0(\\.[0-9]{0,2})?|(\\.[0-9]{1,2})?)$", d = new RegExp(d), this.optional(b) || d.test(a)
        }, "Please specify a valid currency"), a.validator.addMethod("dateFA", function(a, b) { return this.optional(b) || /^[1-4]\d{3}\/((0?[1-6]\/((3[0-1])|([1-2][0-9])|(0?[1-9])))|((1[0-2]|(0?[7-9]))\/(30|([1-2][0-9])|(0?[1-9]))))$/.test(a) }, a.validator.messages.date), a.validator.addMethod("dateITA", function(a, b) {
            var c, d, e, f, g, h = !1,
                i = /^\d{1,2}\/\d{1,2}\/\d{4}$/;
            return i.test(a) ? (c = a.split("/"), d = parseInt(c[0], 10), e = parseInt(c[1], 10), f = parseInt(c[2], 10), g = new Date(Date.UTC(f, e - 1, d, 12, 0, 0, 0)), h = g.getUTCFullYear() === f && g.getUTCMonth() === e - 1 && g.getUTCDate() === d) : h = !1, this.optional(b) || h
        }, a.validator.messages.date), a.validator.addMethod("dateNL", function(a, b) { return this.optional(b) || /^(0?[1-9]|[12]\d|3[01])[\.\/\-](0?[1-9]|1[012])[\.\/\-]([12]\d)?(\d\d)$/.test(a) }, a.validator.messages.date), a.validator.addMethod("extension", function(a, b, c) { return c = "string" == typeof c ? c.replace(/,/g, "|") : "png|jpe?g|gif", this.optional(b) || a.match(new RegExp("\\.(" + c + ")$", "i")) }, a.validator.format("Please enter a value with a valid extension.")), a.validator.addMethod("giroaccountNL", function(a, b) { return this.optional(b) || /^[0-9]{1,7}$/.test(a) }, "Please specify a valid giro account number"), a.validator.addMethod("iban", function(a, b) {
            if (this.optional(b)) return !0;
            var c, d, e, f, g, h, i, j, k, l = a.replace(/ /g, "").toUpperCase(),
                m = "",
                n = !0,
                o = "",
                p = "";
            if (c = l.substring(0, 2), h = { AL: "\\d{8}[\\dA-Z]{16}", AD: "\\d{8}[\\dA-Z]{12}", AT: "\\d{16}", AZ: "[\\dA-Z]{4}\\d{20}", BE: "\\d{12}", BH: "[A-Z]{4}[\\dA-Z]{14}", BA: "\\d{16}", BR: "\\d{23}[A-Z][\\dA-Z]", BG: "[A-Z]{4}\\d{6}[\\dA-Z]{8}", CR: "\\d{17}", HR: "\\d{17}", CY: "\\d{8}[\\dA-Z]{16}", CZ: "\\d{20}", DK: "\\d{14}", DO: "[A-Z]{4}\\d{20}", EE: "\\d{16}", FO: "\\d{14}", FI: "\\d{14}", FR: "\\d{10}[\\dA-Z]{11}\\d{2}", GE: "[\\dA-Z]{2}\\d{16}", DE: "\\d{18}", GI: "[A-Z]{4}[\\dA-Z]{15}", GR: "\\d{7}[\\dA-Z]{16}", GL: "\\d{14}", GT: "[\\dA-Z]{4}[\\dA-Z]{20}", HU: "\\d{24}", IS: "\\d{22}", IE: "[\\dA-Z]{4}\\d{14}", IL: "\\d{19}", IT: "[A-Z]\\d{10}[\\dA-Z]{12}", KZ: "\\d{3}[\\dA-Z]{13}", KW: "[A-Z]{4}[\\dA-Z]{22}", LV: "[A-Z]{4}[\\dA-Z]{13}", LB: "\\d{4}[\\dA-Z]{20}", LI: "\\d{5}[\\dA-Z]{12}", LT: "\\d{16}", LU: "\\d{3}[\\dA-Z]{13}", MK: "\\d{3}[\\dA-Z]{10}\\d{2}", MT: "[A-Z]{4}\\d{5}[\\dA-Z]{18}", MR: "\\d{23}", MU: "[A-Z]{4}\\d{19}[A-Z]{3}", MC: "\\d{10}[\\dA-Z]{11}\\d{2}", MD: "[\\dA-Z]{2}\\d{18}", ME: "\\d{18}", NL: "[A-Z]{4}\\d{10}", NO: "\\d{11}", PK: "[\\dA-Z]{4}\\d{16}", PS: "[\\dA-Z]{4}\\d{21}", PL: "\\d{24}", PT: "\\d{21}", RO: "[A-Z]{4}[\\dA-Z]{16}", SM: "[A-Z]\\d{10}[\\dA-Z]{12}", SA: "\\d{2}[\\dA-Z]{18}", RS: "\\d{18}", SK: "\\d{20}", SI: "\\d{15}", ES: "\\d{20}", SE: "\\d{20}", CH: "\\d{5}[\\dA-Z]{12}", TN: "\\d{20}", TR: "\\d{5}[\\dA-Z]{17}", AE: "\\d{3}\\d{16}", GB: "[A-Z]{4}\\d{14}", VG: "[\\dA-Z]{4}\\d{16}" }, g = h[c], "undefined" != typeof g && (i = new RegExp("^[A-Z]{2}\\d{2}" + g + "$", ""), !i.test(l))) return !1;
            for (d = l.substring(4, l.length) + l.substring(0, 4), j = 0; j < d.length; j++) e = d.charAt(j), "0" !== e && (n = !1), n || (m += "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ".indexOf(e));
            for (k = 0; k < m.length; k++) f = m.charAt(k), p = "" + o + f, o = p % 97;
            return 1 === o
        }, "Please specify a valid IBAN"), a.validator.addMethod("integer", function(a, b) { return this.optional(b) || /^-?\d+$/.test(a) }, "A positive or negative non-decimal number please"), a.validator.addMethod("ipv4", function(a, b) { return this.optional(b) || /^(25[0-5]|2[0-4]\d|[01]?\d\d?)\.(25[0-5]|2[0-4]\d|[01]?\d\d?)\.(25[0-5]|2[0-4]\d|[01]?\d\d?)\.(25[0-5]|2[0-4]\d|[01]?\d\d?)$/i.test(a) }, "Please enter a valid IP v4 address."), a.validator.addMethod("ipv6", function(a, b) { return this.optional(b) || /^((([0-9A-Fa-f]{1,4}:){7}[0-9A-Fa-f]{1,4})|(([0-9A-Fa-f]{1,4}:){6}:[0-9A-Fa-f]{1,4})|(([0-9A-Fa-f]{1,4}:){5}:([0-9A-Fa-f]{1,4}:)?[0-9A-Fa-f]{1,4})|(([0-9A-Fa-f]{1,4}:){4}:([0-9A-Fa-f]{1,4}:){0,2}[0-9A-Fa-f]{1,4})|(([0-9A-Fa-f]{1,4}:){3}:([0-9A-Fa-f]{1,4}:){0,3}[0-9A-Fa-f]{1,4})|(([0-9A-Fa-f]{1,4}:){2}:([0-9A-Fa-f]{1,4}:){0,4}[0-9A-Fa-f]{1,4})|(([0-9A-Fa-f]{1,4}:){6}((\b((25[0-5])|(1\d{2})|(2[0-4]\d)|(\d{1,2}))\b)\.){3}(\b((25[0-5])|(1\d{2})|(2[0-4]\d)|(\d{1,2}))\b))|(([0-9A-Fa-f]{1,4}:){0,5}:((\b((25[0-5])|(1\d{2})|(2[0-4]\d)|(\d{1,2}))\b)\.){3}(\b((25[0-5])|(1\d{2})|(2[0-4]\d)|(\d{1,2}))\b))|(::([0-9A-Fa-f]{1,4}:){0,5}((\b((25[0-5])|(1\d{2})|(2[0-4]\d)|(\d{1,2}))\b)\.){3}(\b((25[0-5])|(1\d{2})|(2[0-4]\d)|(\d{1,2}))\b))|([0-9A-Fa-f]{1,4}::([0-9A-Fa-f]{1,4}:){0,5}[0-9A-Fa-f]{1,4})|(::([0-9A-Fa-f]{1,4}:){0,6}[0-9A-Fa-f]{1,4})|(([0-9A-Fa-f]{1,4}:){1,7}:))$/i.test(a) }, "Please enter a valid IP v6 address."), a.validator.addMethod("lettersonly", function(a, b) { return this.optional(b) || /^[a-z]+$/i.test(a) }, "Letters only please"), a.validator.addMethod("letterswithbasicpunc", function(a, b) { return this.optional(b) || /^[a-z\-.,()'"\s]+$/i.test(a) }, "Letters or punctuation only please"), a.validator.addMethod("mobileNL", function(a, b) { return this.optional(b) || /^((\+|00(\s|\s?\-\s?)?)31(\s|\s?\-\s?)?(\(0\)[\-\s]?)?|0)6((\s|\s?\-\s?)?[0-9]){8}$/.test(a) }, "Please specify a valid mobile number"), a.validator.addMethod("mobileUK", function(a, b) { return a = a.replace(/\(|\)|\s+|-/g, ""), this.optional(b) || a.length > 9 && a.match(/^(?:(?:(?:00\s?|\+)44\s?|0)7(?:[1345789]\d{2}|624)\s?\d{3}\s?\d{3})$/) }, "Please specify a valid mobile number"), a.validator.addMethod("nieES", function(a) { "use strict"; return a = a.toUpperCase(), !!a.match("((^[A-Z]{1}[0-9]{7}[A-Z0-9]{1}$|^[T]{1}[A-Z0-9]{8}$)|^[0-9]{8}[A-Z]{1}$)") && (/^[T]{1}/.test(a) ? a[8] === /^[T]{1}[A-Z0-9]{8}$/.test(a) : !!/^[XYZ]{1}/.test(a) && a[8] === "TRWAGMYFPDXBNJZSQVHLCKE".charAt(a.replace("X", "0").replace("Y", "1").replace("Z", "2").substring(0, 8) % 23)) }, "Please specify a valid NIE number."), a.validator.addMethod("nifES", function(a) { "use strict"; return a = a.toUpperCase(), !!a.match("((^[A-Z]{1}[0-9]{7}[A-Z0-9]{1}$|^[T]{1}[A-Z0-9]{8}$)|^[0-9]{8}[A-Z]{1}$)") && (/^[0-9]{8}[A-Z]{1}$/.test(a) ? "TRWAGMYFPDXBNJZSQVHLCKE".charAt(a.substring(8, 0) % 23) === a.charAt(8) : !!/^[KLM]{1}/.test(a) && a[8] === String.fromCharCode(64)) }, "Please specify a valid NIF number."), jQuery.validator.addMethod("notEqualTo", function(b, c, d) { return this.optional(c) || !a.validator.methods.equalTo.call(this, b, c, d) }, "Please enter a different value, values must not be the same."), a.validator.addMethod("nowhitespace", function(a, b) { return this.optional(b) || /^\S+$/i.test(a) }, "No white space please"), a.validator.addMethod("pattern", function(a, b, c) { return !!this.optional(b) || ("string" == typeof c && (c = new RegExp("^(?:" + c + ")$")), c.test(a)) }, "Invalid format."), a.validator.addMethod("phoneNL", function(a, b) { return this.optional(b) || /^((\+|00(\s|\s?\-\s?)?)31(\s|\s?\-\s?)?(\(0\)[\-\s]?)?|0)[1-9]((\s|\s?\-\s?)?[0-9]){8}$/.test(a) }, "Please specify a valid phone number."), a.validator.addMethod("phoneUK", function(a, b) { return a = a.replace(/\(|\)|\s+|-/g, ""), this.optional(b) || a.length > 9 && a.match(/^(?:(?:(?:00\s?|\+)44\s?)|(?:\(?0))(?:\d{2}\)?\s?\d{4}\s?\d{4}|\d{3}\)?\s?\d{3}\s?\d{3,4}|\d{4}\)?\s?(?:\d{5}|\d{3}\s?\d{3})|\d{5}\)?\s?\d{4,5})$/) }, "Please specify a valid phone number"), a.validator.addMethod("phoneUS", function(a, b) { return a = a.replace(/\s+/g, ""), this.optional(b) || a.length > 9 && a.match(/^(\+?1-?)?(\([2-9]([02-9]\d|1[02-9])\)|[2-9]([02-9]\d|1[02-9]))-?[2-9]([02-9]\d|1[02-9])-?\d{4}$/) }, "Please specify a valid phone number"), a.validator.addMethod("phonesUK", function(a, b) { return a = a.replace(/\(|\)|\s+|-/g, ""), this.optional(b) || a.length > 9 && a.match(/^(?:(?:(?:00\s?|\+)44\s?|0)(?:1\d{8,9}|[23]\d{9}|7(?:[1345789]\d{8}|624\d{6})))$/) }, "Please specify a valid uk phone number"), a.validator.addMethod("postalCodeCA", function(a, b) { return this.optional(b) || /^[ABCEGHJKLMNPRSTVXY]\d[A-Z] \d[A-Z]\d$/.test(a) }, "Please specify a valid postal code"), a.validator.addMethod("postalcodeBR", function(a, b) { return this.optional(b) || /^\d{2}.\d{3}-\d{3}?$|^\d{5}-?\d{3}?$/.test(a) }, "Informe um CEP válido."), a.validator.addMethod("postalcodeIT", function(a, b) { return this.optional(b) || /^\d{5}$/.test(a) }, "Please specify a valid postal code"), a.validator.addMethod("postalcodeNL", function(a, b) { return this.optional(b) || /^[1-9][0-9]{3}\s?[a-zA-Z]{2}$/.test(a) }, "Please specify a valid postal code"), a.validator.addMethod("postcodeUK", function(a, b) { return this.optional(b) || /^((([A-PR-UWYZ][0-9])|([A-PR-UWYZ][0-9][0-9])|([A-PR-UWYZ][A-HK-Y][0-9])|([A-PR-UWYZ][A-HK-Y][0-9][0-9])|([A-PR-UWYZ][0-9][A-HJKSTUW])|([A-PR-UWYZ][A-HK-Y][0-9][ABEHMNPRVWXY]))\s?([0-9][ABD-HJLNP-UW-Z]{2})|(GIR)\s?(0AA))$/i.test(a) }, "Please specify a valid UK postcode"), a.validator.addMethod("require_from_group", function(b, c, d) {
            var e = a(d[1], c.form),
                f = e.eq(0),
                g = f.data("valid_req_grp") ? f.data("valid_req_grp") : a.extend({}, this),
                h = e.filter(function() { return g.elementValue(this) }).length >= d[0];
            return f.data("valid_req_grp", g), a(c).data("being_validated") || (e.data("being_validated", !0), e.each(function() { g.element(this) }), e.data("being_validated", !1)), h
        }, a.validator.format("Please fill at least {0} of these fields.")), a.validator.addMethod("skip_or_fill_minimum", function(b, c, d) {
            var e = a(d[1], c.form),
                f = e.eq(0),
                g = f.data("valid_skip") ? f.data("valid_skip") : a.extend({}, this),
                h = e.filter(function() { return g.elementValue(this) }).length,
                i = 0 === h || h >= d[0];
            return f.data("valid_skip", g), a(c).data("being_validated") || (e.data("being_validated", !0), e.each(function() { g.element(this) }), e.data("being_validated", !1)), i
        }, a.validator.format("Please either skip these fields or fill at least {0} of them.")), a.validator.addMethod("stateUS", function(a, b, c) {
            var d, e = "undefined" == typeof c,
                f = !e && "undefined" != typeof c.caseSensitive && c.caseSensitive,
                g = !e && "undefined" != typeof c.includeTerritories && c.includeTerritories,
                h = !e && "undefined" != typeof c.includeMilitary && c.includeMilitary;
            return d = g || h ? g && h ? "^(A[AEKLPRSZ]|C[AOT]|D[CE]|FL|G[AU]|HI|I[ADLN]|K[SY]|LA|M[ADEINOPST]|N[CDEHJMVY]|O[HKR]|P[AR]|RI|S[CD]|T[NX]|UT|V[AIT]|W[AIVY])$" : g ? "^(A[KLRSZ]|C[AOT]|D[CE]|FL|G[AU]|HI|I[ADLN]|K[SY]|LA|M[ADEINOPST]|N[CDEHJMVY]|O[HKR]|P[AR]|RI|S[CD]|T[NX]|UT|V[AIT]|W[AIVY])$" : "^(A[AEKLPRZ]|C[AOT]|D[CE]|FL|GA|HI|I[ADLN]|K[SY]|LA|M[ADEINOST]|N[CDEHJMVY]|O[HKR]|PA|RI|S[CD]|T[NX]|UT|V[AT]|W[AIVY])$" : "^(A[KLRZ]|C[AOT]|D[CE]|FL|GA|HI|I[ADLN]|K[SY]|LA|M[ADEINOST]|N[CDEHJMVY]|O[HKR]|PA|RI|S[CD]|T[NX]|UT|V[AT]|W[AIVY])$", d = f ? new RegExp(d) : new RegExp(d, "i"), this.optional(b) || d.test(a)
        }, "Please specify a valid state"), a.validator.addMethod("strippedminlength", function(b, c, d) { return a(b).text().length >= d }, a.validator.format("Please enter at least {0} characters")), a.validator.addMethod("time", function(a, b) { return this.optional(b) || /^([01]\d|2[0-3]|[0-9])(:[0-5]\d){1,2}$/.test(a) }, "Please enter a valid time, between 00:00 and 23:59"), a.validator.addMethod("time12h", function(a, b) { return this.optional(b) || /^((0?[1-9]|1[012])(:[0-5]\d){1,2}(\ ?[AP]M))$/i.test(a) }, "Please enter a valid time in 12-hour am/pm format"), a.validator.addMethod("url2", function(a, b) { return this.optional(b) || /^(https?|ftp):\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)*(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i.test(a) }, a.validator.messages.url), a.validator.addMethod("vinUS", function(a) {
            if (17 !== a.length) return !1;
            var b, c, d, e, f, g, h = ["A", "B", "C", "D", "E", "F", "G", "H", "J", "K", "L", "M", "N", "P", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"],
                i = [1, 2, 3, 4, 5, 6, 7, 8, 1, 2, 3, 4, 5, 7, 9, 2, 3, 4, 5, 6, 7, 8, 9],
                j = [8, 7, 6, 5, 4, 3, 2, 10, 0, 9, 8, 7, 6, 5, 4, 3, 2],
                k = 0;
            for (b = 0; 17 > b; b++) {
                if (e = j[b], d = a.slice(b, b + 1), 8 === b && (g = d), isNaN(d)) {
                    for (c = 0; c < h.length; c++)
                        if (d.toUpperCase() === h[c]) { d = i[c], d *= e, isNaN(g) && 8 === c && (g = h[c]); break }
                } else d *= e;
                k += d
            }
            return f = k % 11, 10 === f && (f = "X"), f === g
        }, "The specified vehicle identification number (VIN) is invalid."), a.validator.addMethod("zipcodeUS", function(a, b) { return this.optional(b) || /^\d{5}(-\d{4})?$/.test(a) }, "The specified US ZIP Code is invalid"), a.validator.addMethod("ziprange", function(a, b) { return this.optional(b) || /^90[2-5]\d\{2\}-\d{4}$/.test(a) }, "Your ZIP-code must be in the range 902xx-xxxx to 905xx-xxxx")
    }),
    function(a, b, c, d) {
        var e = c("html"),
            f = c(a),
            g = c(b),
            h = c.fancybox = function() { h.open.apply(this, arguments) },
            i = navigator.userAgent.match(/msie/i),
            j = null,
            k = b.createTouch !== d,
            l = function(a) { return a && a.hasOwnProperty && a instanceof c },
            m = function(a) { return a && "string" === c.type(a) },
            n = function(a) { return m(a) && 0 < a.indexOf("%") },
            o = function(a, b) { var c = parseInt(a, 10) || 0; return b && n(a) && (c *= h.getViewport()[b] / 100), Math.ceil(c) },
            p = function(a, b) { return o(a, b) + "px" };
        c.extend(h, {
            version: "2.1.5",
            defaults: { padding: 15, margin: 20, width: 800, height: 600, minWidth: 100, minHeight: 100, maxWidth: 9999, maxHeight: 9999, pixelRatio: 1, autoSize: !0, autoHeight: !1, autoWidth: !1, autoResize: !0, autoCenter: !k, fitToView: !0, aspectRatio: !1, topRatio: .5, leftRatio: .5, scrolling: "auto", wrapCSS: "", arrows: !0, closeBtn: !0, closeClick: !1, nextClick: !1, mouseWheel: !0, autoPlay: !1, playSpeed: 3e3, preload: 3, modal: !1, loop: !0, ajax: { dataType: "html", headers: { "X-fancyBox": !0 } }, iframe: { scrolling: "auto", preload: !0 }, swf: { wmode: "transparent", allowfullscreen: "true", allowscriptaccess: "always" }, keys: { next: { 13: "left", 34: "up", 39: "left", 40: "up" }, prev: { 8: "right", 33: "down", 37: "right", 38: "down" }, close: [27], play: [32], toggle: [70] }, direction: { next: "left", prev: "right" }, scrollOutside: !0, index: 0, type: null, href: null, content: null, title: null, tpl: { wrap: '<div class="fancybox-wrap" tabIndex="-1"><div class="fancybox-skin"><div class="fancybox-outer"><div class="fancybox-inner"></div></div></div></div>', image: '<img class="fancybox-image" src="{href}" alt="" />', iframe: '<iframe id="fancybox-frame{rnd}" name="fancybox-frame{rnd}" class="fancybox-iframe" frameborder="0" vspace="0" hspace="0" webkitAllowFullScreen mozallowfullscreen allowFullScreen' + (i ? ' allowtransparency="true"' : "") + "></iframe>", error: '<p class="fancybox-error">The requested content cannot be loaded.<br/>Please try again later.</p>', closeBtn: '<a title="Close" class="fancybox-item fancybox-close" href="javascript:;"></a>', next: '<a title="Next" class="fancybox-nav fancybox-next" href="javascript:;"><span></span></a>', prev: '<a title="Previous" class="fancybox-nav fancybox-prev" href="javascript:;"><span></span></a>' }, openEffect: "fade", openSpeed: 250, openEasing: "swing", openOpacity: !0, openMethod: "zoomIn", closeEffect: "fade", closeSpeed: 250, closeEasing: "swing", closeOpacity: !0, closeMethod: "zoomOut", nextEffect: "elastic", nextSpeed: 250, nextEasing: "swing", nextMethod: "changeIn", prevEffect: "elastic", prevSpeed: 250, prevEasing: "swing", prevMethod: "changeOut", helpers: { overlay: !0, title: !0 }, onCancel: c.noop, beforeLoad: c.noop, afterLoad: c.noop, beforeShow: c.noop, afterShow: c.noop, beforeChange: c.noop, beforeClose: c.noop, afterClose: c.noop },
            group: {},
            opts: {},
            previous: null,
            coming: null,
            current: null,
            isActive: !1,
            isOpen: !1,
            isOpened: !1,
            wrap: null,
            skin: null,
            outer: null,
            inner: null,
            player: { timer: null, isActive: !1 },
            ajaxLoad: null,
            imgPreload: null,
            transitions: {},
            helpers: {},
            open: function(a, b) { if (a && (c.isPlainObject(b) || (b = {}), !1 !== h.close(!0))) return c.isArray(a) || (a = l(a) ? c(a).get() : [a]), c.each(a, function(e, f) { var g, i, j, k, n, o = {}; "object" === c.type(f) && (f.nodeType && (f = c(f)), l(f) ? (o = { href: f.data("fancybox-href") || f.attr("href"), title: f.data("fancybox-title") || f.attr("title"), isDom: !0, element: f }, c.metadata && c.extend(!0, o, f.metadata())) : o = f), g = b.href || o.href || (m(f) ? f : null), i = b.title !== d ? b.title : o.title || "", k = (j = b.content || o.content) ? "html" : b.type || o.type, !k && o.isDom && (k = f.data("fancybox-type"), k || (k = (k = f.prop("class").match(/fancybox\.(\w+)/)) ? k[1] : null)), m(g) && (k || (h.isImage(g) ? k = "image" : h.isSWF(g) ? k = "swf" : "#" === g.charAt(0) ? k = "inline" : m(f) && (k = "html", j = f)), "ajax" === k && (n = g.split(/\s+/, 2), g = n.shift(), n = n.shift())), j || ("inline" === k ? g ? j = c(m(g) ? g.replace(/.*(?=#[^\s]+$)/, "") : g) : o.isDom && (j = f) : "html" === k ? j = g : !k && !g && o.isDom && (k = "inline", j = f)), c.extend(o, { href: g, type: k, content: j, title: i, selector: n }), a[e] = o }), h.opts = c.extend(!0, {}, h.defaults, b), b.keys !== d && (h.opts.keys = !!b.keys && c.extend({}, h.defaults.keys, b.keys)), h.group = a, h._start(h.opts.index) },
            cancel: function() {
                var a = h.coming;
                a && !1 !== h.trigger("onCancel") && (h.hideLoading(), h.ajaxLoad && h.ajaxLoad.abort(), h.ajaxLoad = null, h.imgPreload && (h.imgPreload.onload = h.imgPreload.onerror = null), a.wrap && a.wrap.stop(!0, !0).trigger("onReset").remove(), h.coming = null, h.current || h._afterZoomOut(a))
            },
            close: function(a) { h.cancel(), !1 !== h.trigger("beforeClose") && (h.unbindEvents(), h.isActive && (h.isOpen && !0 !== a ? (h.isOpen = h.isOpened = !1, h.isClosing = !0, c(".fancybox-item, .fancybox-nav").remove(), h.wrap.stop(!0, !0).removeClass("fancybox-opened"), h.transitions[h.current.closeMethod]()) : (c(".fancybox-wrap").stop(!0).trigger("onReset").remove(), h._afterZoomOut()))) },
            play: function(a) {
                var b = function() { clearTimeout(h.player.timer) },
                    c = function() { b(), h.current && h.player.isActive && (h.player.timer = setTimeout(h.next, h.current.playSpeed)) },
                    d = function() { b(), g.unbind(".player"), h.player.isActive = !1, h.trigger("onPlayEnd") };
                !0 === a || !h.player.isActive && !1 !== a ? h.current && (h.current.loop || h.current.index < h.group.length - 1) && (h.player.isActive = !0, g.bind({ "onCancel.player beforeClose.player": d, "onUpdate.player": c, "beforeLoad.player": b }), c(), h.trigger("onPlayStart")) : d()
            },
            next: function(a) {
                var b = h.current;
                b && (m(a) || (a = b.direction.next), h.jumpto(b.index + 1, a, "next"))
            },
            prev: function(a) {
                var b = h.current;
                b && (m(a) || (a = b.direction.prev), h.jumpto(b.index - 1, a, "prev"))
            },
            jumpto: function(a, b, c) {
                var e = h.current;
                e && (a = o(a), h.direction = b || e.direction[a >= e.index ? "next" : "prev"], h.router = c || "jumpto", e.loop && (0 > a && (a = e.group.length + a % e.group.length), a %= e.group.length), e.group[a] !== d && (h.cancel(), h._start(a)))
            },
            reposition: function(a, b) {
                var d, e = h.current,
                    f = e ? e.wrap : null;
                f && (d = h._getPosition(b), a && "scroll" === a.type ? (delete d.position, f.stop(!0, !0).animate(d, 200)) : (f.css(d), e.pos = c.extend({}, e.dim, d)))
            },
            update: function(a) {
                var b = a && a.type,
                    c = !b || "orientationchange" === b;
                c && (clearTimeout(j), j = null), h.isOpen && !j && (j = setTimeout(function() {
                    var d = h.current;
                    d && !h.isClosing && (h.wrap.removeClass("fancybox-tmp"), (c || "load" === b || "resize" === b && d.autoResize) && h._setDimension(), "scroll" === b && d.canShrink || h.reposition(a), h.trigger("onUpdate"), j = null)
                }, c && !k ? 0 : 300))
            },
            toggle: function(a) { h.isOpen && (h.current.fitToView = "boolean" === c.type(a) ? a : !h.current.fitToView, k && (h.wrap.removeAttr("style").addClass("fancybox-tmp"), h.trigger("onUpdate")), h.update()) },
            hideLoading: function() { g.unbind(".loading"), c("#fancybox-loading").remove() },
            showLoading: function() {
                var a, b;
                h.hideLoading(), a = c('<div id="fancybox-loading"><div></div></div>').click(h.cancel).appendTo("body"), g.bind("keydown.loading", function(a) { 27 === (a.which || a.keyCode) && (a.preventDefault(), h.cancel()) }), h.defaults.fixed || (b = h.getViewport(), a.css({ position: "absolute", top: .5 * b.h + b.y, left: .5 * b.w + b.x }))
            },
            getViewport: function() {
                var b = h.current && h.current.locked || !1,
                    c = { x: f.scrollLeft(), y: f.scrollTop() };
                return b ? (c.w = b[0].clientWidth, c.h = b[0].clientHeight) : (c.w = k && a.innerWidth ? a.innerWidth : f.width(), c.h = k && a.innerHeight ? a.innerHeight : f.height()), c
            },
            unbindEvents: function() { h.wrap && l(h.wrap) && h.wrap.unbind(".fb"), g.unbind(".fb"), f.unbind(".fb") },
            bindEvents: function() {
                var a, b = h.current;
                b && (f.bind("orientationchange.fb" + (k ? "" : " resize.fb") + (b.autoCenter && !b.locked ? " scroll.fb" : ""), h.update), (a = b.keys) && g.bind("keydown.fb", function(e) {
                    var f = e.which || e.keyCode,
                        g = e.target || e.srcElement;
                    return (27 !== f || !h.coming) && void(!e.ctrlKey && !e.altKey && !e.shiftKey && !e.metaKey && (!g || !g.type && !c(g).is("[contenteditable]")) && c.each(a, function(a, g) { return 1 < b.group.length && g[f] !== d ? (h[a](g[f]), e.preventDefault(), !1) : -1 < c.inArray(f, g) ? (h[a](), e.preventDefault(), !1) : void 0 }))
                }), c.fn.mousewheel && b.mouseWheel && h.wrap.bind("mousewheel.fb", function(a, d, e, f) {
                    for (var g = c(a.target || null), i = !1; g.length && !i && !g.is(".fancybox-skin") && !g.is(".fancybox-wrap");) i = g[0] && !(g[0].style.overflow && "hidden" === g[0].style.overflow) && (g[0].clientWidth && g[0].scrollWidth > g[0].clientWidth || g[0].clientHeight && g[0].scrollHeight > g[0].clientHeight), g = c(g).parent();
                    0 !== d && !i && 1 < h.group.length && !b.canShrink && (0 < f || 0 < e ? h.prev(0 < f ? "down" : "left") : (0 > f || 0 > e) && h.next(0 > f ? "up" : "right"), a.preventDefault())
                }))
            },
            trigger: function(a, b) {
                var d, e = b || h.coming || h.current;
                if (e) {
                    if (c.isFunction(e[a]) && (d = e[a].apply(e, Array.prototype.slice.call(arguments, 1))), !1 === d) return !1;
                    e.helpers && c.each(e.helpers, function(b, d) { d && h.helpers[b] && c.isFunction(h.helpers[b][a]) && h.helpers[b][a](c.extend(!0, {}, h.helpers[b].defaults, d), e) }), g.trigger(a)
                }
            },
            isImage: function(a) { return m(a) && a.match(/(^data:image\/.*,)|(\.(jp(e|g|eg)|gif|png|bmp|webp|svg)((\?|#).*)?$)/i) },
            isSWF: function(a) { return m(a) && a.match(/\.(swf)((\?|#).*)?$/i) },
            _start: function(a) {
                var b, d, e = {};
                if (a = o(a), b = h.group[a] || null, !b) return !1;
                if (e = c.extend(!0, {}, h.opts, b), b = e.margin, d = e.padding, "number" === c.type(b) && (e.margin = [b, b, b, b]), "number" === c.type(d) && (e.padding = [d, d, d, d]), e.modal && c.extend(!0, e, { closeBtn: !1, closeClick: !1, nextClick: !1, arrows: !1, mouseWheel: !1, keys: null, helpers: { overlay: { closeClick: !1 } } }), e.autoSize && (e.autoWidth = e.autoHeight = !0), "auto" === e.width && (e.autoWidth = !0), "auto" === e.height && (e.autoHeight = !0), e.group = h.group, e.index = a, h.coming = e, !1 === h.trigger("beforeLoad")) h.coming = null;
                else { if (d = e.type, b = e.href, !d) return h.coming = null, !(!h.current || !h.router || "jumpto" === h.router) && (h.current.index = a, h[h.router](h.direction)); if (h.isActive = !0, "image" !== d && "swf" !== d || (e.autoHeight = e.autoWidth = !1, e.scrolling = "visible"), "image" === d && (e.aspectRatio = !0), "iframe" === d && k && (e.scrolling = "scroll"), e.wrap = c(e.tpl.wrap).addClass("fancybox-" + (k ? "mobile" : "desktop") + " fancybox-type-" + d + " fancybox-tmp " + e.wrapCSS).appendTo(e.parent || "body"), c.extend(e, { skin: c(".fancybox-skin", e.wrap), outer: c(".fancybox-outer", e.wrap), inner: c(".fancybox-inner", e.wrap) }), c.each(["Top", "Right", "Bottom", "Left"], function(a, b) { e.skin.css("padding" + b, p(e.padding[a])) }), h.trigger("onReady"), "inline" === d || "html" === d) { if (!e.content || !e.content.length) return h._error("content") } else if (!b) return h._error("href"); "image" === d ? h._loadImage() : "ajax" === d ? h._loadAjax() : "iframe" === d ? h._loadIframe() : h._afterLoad() }
            },
            _error: function(a) { c.extend(h.coming, { type: "html", autoWidth: !0, autoHeight: !0, minWidth: 0, minHeight: 0, scrolling: "no", hasError: a, content: h.coming.tpl.error }), h._afterLoad() },
            _loadImage: function() {
                var a = h.imgPreload = new Image;
                a.onload = function() { this.onload = this.onerror = null, h.coming.width = this.width / h.opts.pixelRatio, h.coming.height = this.height / h.opts.pixelRatio, h._afterLoad() }, a.onerror = function() { this.onload = this.onerror = null, h._error("image") }, a.src = h.coming.href, !0 !== a.complete && h.showLoading()
            },
            _loadAjax: function() {
                var a = h.coming;
                h.showLoading(), h.ajaxLoad = c.ajax(c.extend({}, a.ajax, { url: a.href, error: function(a, b) { h.coming && "abort" !== b ? h._error("ajax", a) : h.hideLoading() }, success: function(b, c) { "success" === c && (a.content = b, h._afterLoad()) } }))
            },
            _loadIframe: function() {
                var a = h.coming,
                    b = c(a.tpl.iframe.replace(/\{rnd\}/g, (new Date).getTime())).attr("scrolling", k ? "auto" : a.iframe.scrolling).attr("src", a.href);
                c(a.wrap).bind("onReset", function() { try { c(this).find("iframe").hide().attr("src", "//about:blank").end().empty() } catch (a) {} }), a.iframe.preload && (h.showLoading(), b.one("load", function() { c(this).data("ready", 1), k || c(this).bind("load.fb", h.update), c(this).parents(".fancybox-wrap").width("100%").removeClass("fancybox-tmp").show(), h._afterLoad() })), a.content = b.appendTo(a.inner), a.iframe.preload || h._afterLoad()
            },
            _preloadImages: function() {
                var a, b, c = h.group,
                    d = h.current,
                    e = c.length,
                    f = d.preload ? Math.min(d.preload, e - 1) : 0;
                for (b = 1; b <= f; b += 1) a = c[(d.index + b) % e], "image" === a.type && a.href && ((new Image).src = a.href)
            },
            _afterLoad: function() {
                var a, b, d, e, f, g = h.coming,
                    i = h.current;
                if (h.hideLoading(), g && !1 !== h.isActive)
                    if (!1 === h.trigger("afterLoad", g, i)) g.wrap.stop(!0).trigger("onReset").remove(), h.coming = null;
                    else {
                        switch (i && (h.trigger("beforeChange", i), i.wrap.stop(!0).removeClass("fancybox-opened").find(".fancybox-item, .fancybox-nav").remove()), h.unbindEvents(), a = g.content, b = g.type, d = g.scrolling, c.extend(h, { wrap: g.wrap, skin: g.skin, outer: g.outer, inner: g.inner, current: g, previous: i }), e = g.href, b) {
                            case "inline":
                            case "ajax":
                            case "html":
                                g.selector ? a = c("<div>").html(a).find(g.selector) : l(a) && (a.data("fancybox-placeholder") || a.data("fancybox-placeholder", c('<div class="fancybox-placeholder"></div>').insertAfter(a).hide()), a = a.show().detach(), g.wrap.bind("onReset", function() { c(this).find(a).length && a.hide().replaceAll(a.data("fancybox-placeholder")).data("fancybox-placeholder", !1) }));
                                break;
                            case "image":
                                a = g.tpl.image.replace("{href}", e);
                                break;
                            case "swf":
                                a = '<object id="fancybox-swf" classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" width="100%" height="100%"><param name="movie" value="' + e + '"></param>', f = "", c.each(g.swf, function(b, c) { a += '<param name="' + b + '" value="' + c + '"></param>', f += " " + b + '="' + c + '"' }), a += '<embed src="' + e + '" type="application/x-shockwave-flash" width="100%" height="100%"' + f + "></embed></object>"
                        }(!l(a) || !a.parent().is(g.inner)) && g.inner.append(a), h.trigger("beforeShow"), g.inner.css("overflow", "yes" === d ? "scroll" : "no" === d ? "hidden" : d), h._setDimension(), h.reposition(), h.isOpen = !1, h.coming = null, h.bindEvents(), h.isOpened ? i.prevMethod && h.transitions[i.prevMethod]() : c(".fancybox-wrap").not(g.wrap).stop(!0).trigger("onReset").remove(), h.transitions[h.isOpened ? g.nextMethod : g.openMethod](), h._preloadImages()
                    }
            },
            _setDimension: function() {
                var a, b, d, e, f, g, i, j, k, l = h.getViewport(),
                    m = 0,
                    q = !1,
                    r = !1,
                    q = h.wrap,
                    s = h.skin,
                    t = h.inner,
                    u = h.current,
                    r = u.width,
                    v = u.height,
                    w = u.minWidth,
                    x = u.minHeight,
                    y = u.maxWidth,
                    z = u.maxHeight,
                    A = u.scrolling,
                    B = u.scrollOutside ? u.scrollbarWidth : 0,
                    C = u.margin,
                    D = o(C[1] + C[3]),
                    E = o(C[0] + C[2]);
                if (q.add(s).add(t).width("auto").height("auto").removeClass("fancybox-tmp"), C = o(s.outerWidth(!0) - s.width()), a = o(s.outerHeight(!0) - s.height()), b = D + C, d = E + a, e = n(r) ? (l.w - b) * o(r) / 100 : r, f = n(v) ? (l.h - d) * o(v) / 100 : v, "iframe" === u.type) { if (k = u.content, u.autoHeight && 1 === k.data("ready")) try { k[0].contentWindow.document.location && (t.width(e).height(9999), g = k.contents().find("body"), B && g.css("overflow-x", "hidden"), f = g.outerHeight(!0)) } catch (F) {} } else(u.autoWidth || u.autoHeight) && (t.addClass("fancybox-tmp"), u.autoWidth || t.width(e), u.autoHeight || t.height(f), u.autoWidth && (e = t.width()), u.autoHeight && (f = t.height()), t.removeClass("fancybox-tmp"));
                if (r = o(e), v = o(f), j = e / f, w = o(n(w) ? o(w, "w") - b : w), y = o(n(y) ? o(y, "w") - b : y), x = o(n(x) ? o(x, "h") - d : x), z = o(n(z) ? o(z, "h") - d : z), g = y, i = z, u.fitToView && (y = Math.min(l.w - b, y), z = Math.min(l.h - d, z)), b = l.w - D, E = l.h - E, u.aspectRatio ? (r > y && (r = y, v = o(r / j)), v > z && (v = z, r = o(v * j)), r < w && (r = w, v = o(r / j)), v < x && (v = x, r = o(v * j))) : (r = Math.max(w, Math.min(r, y)), u.autoHeight && "iframe" !== u.type && (t.width(r), v = t.height()), v = Math.max(x, Math.min(v, z))), u.fitToView)
                    if (t.width(r).height(v), q.width(r + C), l = q.width(), D = q.height(), u.aspectRatio)
                        for (;
                            (l > b || D > E) && r > w && v > x && !(19 < m++);) v = Math.max(x, Math.min(z, v - 10)), r = o(v * j), r < w && (r = w, v = o(r / j)), r > y && (r = y, v = o(r / j)), t.width(r).height(v), q.width(r + C), l = q.width(), D = q.height();
                    else r = Math.max(w, Math.min(r, r - (l - b))), v = Math.max(x, Math.min(v, v - (D - E)));
                B && "auto" === A && v < f && r + C + B < b && (r += B), t.width(r).height(v), q.width(r + C), l = q.width(), D = q.height(), q = (l > b || D > E) && r > w && v > x, r = u.aspectRatio ? r < g && v < i && r < e && v < f : (r < g || v < i) && (r < e || v < f), c.extend(u, { dim: { width: p(l), height: p(D) }, origWidth: e, origHeight: f, canShrink: q, canExpand: r, wPadding: C, hPadding: a, wrapSpace: D - s.outerHeight(!0), skinSpace: s.height() - v }), !k && u.autoHeight && v > x && v < z && !r && t.height("auto")
            },
            _getPosition: function(a) {
                var b = h.current,
                    c = h.getViewport(),
                    d = b.margin,
                    e = h.wrap.width() + d[1] + d[3],
                    f = h.wrap.height() + d[0] + d[2],
                    d = { position: "absolute", top: d[0], left: d[3] };
                return b.autoCenter && b.fixed && !a && f <= c.h && e <= c.w ? d.position = "fixed" : b.locked || (d.top += c.y, d.left += c.x), d.top = p(Math.max(d.top, d.top + (c.h - f) * b.topRatio)), d.left = p(Math.max(d.left, d.left + (c.w - e) * b.leftRatio)), d
            },
            _afterZoomIn: function() {
                var a = h.current;
                a && (h.isOpen = h.isOpened = !0, h.wrap.css("overflow", "visible").addClass("fancybox-opened"), h.update(), (a.closeClick || a.nextClick && 1 < h.group.length) && h.inner.css("cursor", "pointer").bind("click.fb", function(b) {!c(b.target).is("a") && !c(b.target).parent().is("a") && (b.preventDefault(), h[a.closeClick ? "close" : "next"]()) }), a.closeBtn && c(a.tpl.closeBtn).appendTo(h.skin).bind("click.fb", function(a) { a.preventDefault(), h.close() }), a.arrows && 1 < h.group.length && ((a.loop || 0 < a.index) && c(a.tpl.prev).appendTo(h.outer).bind("click.fb", h.prev), (a.loop || a.index < h.group.length - 1) && c(a.tpl.next).appendTo(h.outer).bind("click.fb", h.next)),
                    h.trigger("afterShow"), a.loop || a.index !== a.group.length - 1 ? h.opts.autoPlay && !h.player.isActive && (h.opts.autoPlay = !1, h.play()) : h.play(!1))
            },
            _afterZoomOut: function(a) { a = a || h.current, c(".fancybox-wrap").trigger("onReset").remove(), c.extend(h, { group: {}, opts: {}, router: !1, current: null, isActive: !1, isOpened: !1, isOpen: !1, isClosing: !1, wrap: null, skin: null, outer: null, inner: null }), h.trigger("afterClose", a) }
        }), h.transitions = {
            getOrigPosition: function() {
                var a = h.current,
                    b = a.element,
                    c = a.orig,
                    d = {},
                    e = 50,
                    f = 50,
                    g = a.hPadding,
                    i = a.wPadding,
                    j = h.getViewport();
                return !c && a.isDom && b.is(":visible") && (c = b.find("img:first"), c.length || (c = b)), l(c) ? (d = c.offset(), c.is("img") && (e = c.outerWidth(), f = c.outerHeight())) : (d.top = j.y + (j.h - f) * a.topRatio, d.left = j.x + (j.w - e) * a.leftRatio), ("fixed" === h.wrap.css("position") || a.locked) && (d.top -= j.y, d.left -= j.x), d = { top: p(d.top - g * a.topRatio), left: p(d.left - i * a.leftRatio), width: p(e + i), height: p(f + g) }
            },
            step: function(a, b) {
                var c, d, e = b.prop;
                d = h.current;
                var f = d.wrapSpace,
                    g = d.skinSpace;
                "width" !== e && "height" !== e || (c = b.end === b.start ? 1 : (a - b.start) / (b.end - b.start), h.isClosing && (c = 1 - c), d = "width" === e ? d.wPadding : d.hPadding, d = a - d, h.skin[e](o("width" === e ? d : d - f * c)), h.inner[e](o("width" === e ? d : d - f * c - g * c)))
            },
            zoomIn: function() {
                var a = h.current,
                    b = a.pos,
                    d = a.openEffect,
                    e = "elastic" === d,
                    f = c.extend({ opacity: 1 }, b);
                delete f.position, e ? (b = this.getOrigPosition(), a.openOpacity && (b.opacity = .1)) : "fade" === d && (b.opacity = .1), h.wrap.css(b).animate(f, { duration: "none" === d ? 0 : a.openSpeed, easing: a.openEasing, step: e ? this.step : null, complete: h._afterZoomIn })
            },
            zoomOut: function() {
                var a = h.current,
                    b = a.closeEffect,
                    c = "elastic" === b,
                    d = { opacity: .1 };
                c && (d = this.getOrigPosition(), a.closeOpacity && (d.opacity = .1)), h.wrap.animate(d, { duration: "none" === b ? 0 : a.closeSpeed, easing: a.closeEasing, step: c ? this.step : null, complete: h._afterZoomOut })
            },
            changeIn: function() {
                var a, b = h.current,
                    c = b.nextEffect,
                    d = b.pos,
                    e = { opacity: 1 },
                    f = h.direction;
                d.opacity = .1, "elastic" === c && (a = "down" === f || "up" === f ? "top" : "left", "down" === f || "right" === f ? (d[a] = p(o(d[a]) - 200), e[a] = "+=200px") : (d[a] = p(o(d[a]) + 200), e[a] = "-=200px")), "none" === c ? h._afterZoomIn() : h.wrap.css(d).animate(e, { duration: b.nextSpeed, easing: b.nextEasing, complete: h._afterZoomIn })
            },
            changeOut: function() {
                var a = h.previous,
                    b = a.prevEffect,
                    d = { opacity: .1 },
                    e = h.direction;
                "elastic" === b && (d["down" === e || "up" === e ? "top" : "left"] = ("up" === e || "left" === e ? "-" : "+") + "=200px"), a.wrap.animate(d, { duration: "none" === b ? 0 : a.prevSpeed, easing: a.prevEasing, complete: function() { c(this).trigger("onReset").remove() } })
            }
        }, h.helpers.overlay = {
            defaults: { closeClick: !0, speedOut: 200, showEarly: !0, css: {}, locked: !k, fixed: !0 },
            overlay: null,
            fixed: !1,
            el: c("html"),
            create: function(a) { a = c.extend({}, this.defaults, a), this.overlay && this.close(), this.overlay = c('<div class="fancybox-overlay"></div>').appendTo(h.coming ? h.coming.parent : a.parent), this.fixed = !1, a.fixed && h.defaults.fixed && (this.overlay.addClass("fancybox-overlay-fixed"), this.fixed = !0) },
            open: function(a) {
                var b = this;
                a = c.extend({}, this.defaults, a), this.overlay ? this.overlay.unbind(".overlay").width("auto").height("auto") : this.create(a), this.fixed || (f.bind("resize.overlay", c.proxy(this.update, this)), this.update()), a.closeClick && this.overlay.bind("click.overlay", function(a) { if (c(a.target).hasClass("fancybox-overlay")) return h.isActive ? h.close() : b.close(), !1 }), this.overlay.css(a.css).show()
            },
            close: function() {
                var a, b;
                f.unbind("resize.overlay"), this.el.hasClass("fancybox-lock") && (c(".fancybox-margin").removeClass("fancybox-margin"), a = f.scrollTop(), b = f.scrollLeft(), this.el.removeClass("fancybox-lock"), f.scrollTop(a).scrollLeft(b)), c(".fancybox-overlay").remove().hide(), c.extend(this, { overlay: null, fixed: !1 })
            },
            update: function() {
                var a, c = "100%";
                this.overlay.width(c).height("100%"), i ? (a = Math.max(b.documentElement.offsetWidth, b.body.offsetWidth), g.width() > a && (c = g.width())) : g.width() > f.width() && (c = g.width()), this.overlay.width(c).height(g.height())
            },
            onReady: function(a, b) {
                var d = this.overlay;
                c(".fancybox-overlay").stop(!0, !0), d || this.create(a), a.locked && this.fixed && b.fixed && (d || (this.margin = g.height() > f.height() && c("html").css("margin-right").replace("px", "")), b.locked = this.overlay.append(b.wrap), b.fixed = !1), !0 === a.showEarly && this.beforeShow.apply(this, arguments)
            },
            beforeShow: function(a, b) {
                var d, e;
                b.locked && (!1 !== this.margin && (c("*").filter(function() { return "fixed" === c(this).css("position") && !c(this).hasClass("fancybox-overlay") && !c(this).hasClass("fancybox-wrap") }).addClass("fancybox-margin"), this.el.addClass("fancybox-margin")), d = f.scrollTop(), e = f.scrollLeft(), this.el.addClass("fancybox-lock"), f.scrollTop(d).scrollLeft(e)), this.open(a)
            },
            onUpdate: function() { this.fixed || this.update() },
            afterClose: function(a) { this.overlay && !h.coming && this.overlay.fadeOut(a.speedOut, c.proxy(this.close, this)) }
        }, h.helpers.title = {
            defaults: { type: "float", position: "bottom" },
            beforeShow: function(a) {
                var b = h.current,
                    d = b.title,
                    e = a.type;
                if (c.isFunction(d) && (d = d.call(b.element, b)), m(d) && "" !== c.trim(d)) {
                    switch (b = c('<div class="fancybox-title fancybox-title-' + e + '-wrap">' + d + "</div>"), e) {
                        case "inside":
                            e = h.skin;
                            break;
                        case "outside":
                            e = h.wrap;
                            break;
                        case "over":
                            e = h.inner;
                            break;
                        default:
                            e = h.skin, b.appendTo("body"), i && b.width(b.width()), b.wrapInner('<span class="child"></span>'), h.current.margin[2] += Math.abs(o(b.css("margin-bottom")))
                    }
                    b["top" === a.position ? "prependTo" : "appendTo"](e)
                }
            }
        }, c.fn.fancybox = function(a) {
            var b, d = c(this),
                e = this.selector || "",
                f = function(f) {
                    var g, i, j = c(this).blur(),
                        k = b;
                    !f.ctrlKey && !f.altKey && !f.shiftKey && !f.metaKey && !j.is(".fancybox-wrap") && (g = a.groupAttr || "data-fancybox-group", i = j.attr(g), i || (g = "rel", i = j.get(0)[g]), i && "" !== i && "nofollow" !== i && (j = e.length ? c(e) : d, j = j.filter("[" + g + '="' + i + '"]'), k = j.index(this)), a.index = k, !1 !== h.open(j, a) && f.preventDefault())
                };
            return a = a || {}, b = a.index || 0, e && !1 !== a.live ? g.undelegate(e, "click.fb-start").delegate(e + ":not('.fancybox-item, .fancybox-nav')", "click.fb-start", f) : d.unbind("click.fb-start").bind("click.fb-start", f), this.filter("[data-fancybox-start=1]").trigger("click"), this
        }, g.ready(function() {
            var b, f;
            if (c.scrollbarWidth === d && (c.scrollbarWidth = function() {
                    var a = c('<div style="width:50px;height:50px;overflow:auto"><div/></div>').appendTo("body"),
                        b = a.children(),
                        b = b.innerWidth() - b.height(99).innerWidth();
                    return a.remove(), b
                }), c.support.fixedPosition === d) {
                b = c.support, f = c('<div style="position:fixed;top:20px;"></div>').appendTo("body");
                var g = 20 === f[0].offsetTop || 15 === f[0].offsetTop;
                f.remove(), b.fixedPosition = g
            }
            c.extend(h.defaults, { scrollbarWidth: c.scrollbarWidth(), fixed: c.support.fixedPosition, parent: c("body") }), b = c(a).width(), e.addClass("fancybox-lock-test"), f = c(a).width(), e.removeClass("fancybox-lock-test"), c("<style type='text/css'>.fancybox-margin{margin-right:" + (f - b) + "px;}</style>").appendTo("head")
        })
    }(window, document, jQuery), ! function(a) { "function" == typeof define && define.amd ? define(["jquery"], a) : a("object" == typeof exports ? require("jquery") : jQuery) }(function(a) {
        var b = function() {
                if (a && a.fn && a.fn.select2 && a.fn.select2.amd) var b = a.fn.select2.amd;
                var b;
                return function() {
                        if (!b || !b.requirejs) {
                            b ? c = b : b = {};
                            var a, c, d;
                            ! function(b) {
                                function e(a, b) { return u.call(a, b) }

                                function f(a, b) {
                                    var c, d, e, f, g, h, i, j, k, l, m, n = b && b.split("/"),
                                        o = s.map,
                                        p = o && o["*"] || {};
                                    if (a && "." === a.charAt(0))
                                        if (b) {
                                            for (a = a.split("/"), g = a.length - 1, s.nodeIdCompat && w.test(a[g]) && (a[g] = a[g].replace(w, "")), a = n.slice(0, n.length - 1).concat(a), k = 0; k < a.length; k += 1)
                                                if (m = a[k], "." === m) a.splice(k, 1), k -= 1;
                                                else if (".." === m) {
                                                if (1 === k && (".." === a[2] || ".." === a[0])) break;
                                                k > 0 && (a.splice(k - 1, 2), k -= 2)
                                            }
                                            a = a.join("/")
                                        } else 0 === a.indexOf("./") && (a = a.substring(2));
                                    if ((n || p) && o) {
                                        for (c = a.split("/"), k = c.length; k > 0; k -= 1) {
                                            if (d = c.slice(0, k).join("/"), n)
                                                for (l = n.length; l > 0; l -= 1)
                                                    if (e = o[n.slice(0, l).join("/")], e && (e = e[d])) { f = e, h = k; break }
                                            if (f) break;
                                            !i && p && p[d] && (i = p[d], j = k)
                                        }!f && i && (f = i, h = j), f && (c.splice(0, h, f), a = c.join("/"))
                                    }
                                    return a
                                }

                                function g(a, c) { return function() { var d = v.call(arguments, 0); return "string" != typeof d[0] && 1 === d.length && d.push(null), n.apply(b, d.concat([a, c])) } }

                                function h(a) { return function(b) { return f(b, a) } }

                                function i(a) { return function(b) { q[a] = b } }

                                function j(a) {
                                    if (e(r, a)) {
                                        var c = r[a];
                                        delete r[a], t[a] = !0, m.apply(b, c)
                                    }
                                    if (!e(q, a) && !e(t, a)) throw new Error("No " + a);
                                    return q[a]
                                }

                                function k(a) { var b, c = a ? a.indexOf("!") : -1; return c > -1 && (b = a.substring(0, c), a = a.substring(c + 1, a.length)), [b, a] }

                                function l(a) { return function() { return s && s.config && s.config[a] || {} } }
                                var m, n, o, p, q = {},
                                    r = {},
                                    s = {},
                                    t = {},
                                    u = Object.prototype.hasOwnProperty,
                                    v = [].slice,
                                    w = /\.js$/;
                                o = function(a, b) {
                                    var c, d = k(a),
                                        e = d[0];
                                    return a = d[1], e && (e = f(e, b), c = j(e)), e ? a = c && c.normalize ? c.normalize(a, h(b)) : f(a, b) : (a = f(a, b), d = k(a), e = d[0], a = d[1], e && (c = j(e))), { f: e ? e + "!" + a : a, n: a, pr: e, p: c }
                                }, p = { require: function(a) { return g(a) }, exports: function(a) { var b = q[a]; return "undefined" != typeof b ? b : q[a] = {} }, module: function(a) { return { id: a, uri: "", exports: q[a], config: l(a) } } }, m = function(a, c, d, f) {
                                    var h, k, l, m, n, s, u = [],
                                        v = typeof d;
                                    if (f = f || a, "undefined" === v || "function" === v) {
                                        for (c = !c.length && d.length ? ["require", "exports", "module"] : c, n = 0; n < c.length; n += 1)
                                            if (m = o(c[n], f), k = m.f, "require" === k) u[n] = p.require(a);
                                            else if ("exports" === k) u[n] = p.exports(a), s = !0;
                                        else if ("module" === k) h = u[n] = p.module(a);
                                        else if (e(q, k) || e(r, k) || e(t, k)) u[n] = j(k);
                                        else {
                                            if (!m.p) throw new Error(a + " missing " + k);
                                            m.p.load(m.n, g(f, !0), i(k), {}), u[n] = q[k]
                                        }
                                        l = d ? d.apply(q[a], u) : void 0, a && (h && h.exports !== b && h.exports !== q[a] ? q[a] = h.exports : l === b && s || (q[a] = l))
                                    } else a && (q[a] = d)
                                }, a = c = n = function(a, c, d, e, f) {
                                    if ("string" == typeof a) return p[a] ? p[a](c) : j(o(a, c).f);
                                    if (!a.splice) {
                                        if (s = a, s.deps && n(s.deps, s.callback), !c) return;
                                        c.splice ? (a = c, c = d, d = null) : a = b
                                    }
                                    return c = c || function() {}, "function" == typeof d && (d = e, e = f), e ? m(b, a, c, d) : setTimeout(function() { m(b, a, c, d) }, 4), n
                                }, n.config = function(a) { return n(a) }, a._defined = q, d = function(a, b, c) {
                                    if ("string" != typeof a) throw new Error("See almond README: incorrect module build, no module name");
                                    b.splice || (c = b, b = []), e(q, a) || e(r, a) || (r[a] = [a, b, c])
                                }, d.amd = { jQuery: !0 }
                            }(), b.requirejs = a, b.require = c, b.define = d
                        }
                    }(), b.define("almond", function() {}), b.define("jquery", [], function() { var b = a || $; return null == b && console && console.error && console.error("Select2: An instance of jQuery or a jQuery-compatible library was not found. Make sure that you are including jQuery before Select2 on your web page."), b }), b.define("select2/utils", ["jquery"], function(a) {
                        function b(a) {
                            var b = a.prototype,
                                c = [];
                            for (var d in b) { var e = b[d]; "function" == typeof e && "constructor" !== d && c.push(d) }
                            return c
                        }
                        var c = {};
                        c.Extend = function(a, b) {
                            function c() { this.constructor = a }
                            var d = {}.hasOwnProperty;
                            for (var e in b) d.call(b, e) && (a[e] = b[e]);
                            return c.prototype = b.prototype, a.prototype = new c, a.__super__ = b.prototype, a
                        }, c.Decorate = function(a, c) {
                            function d() {
                                var b = Array.prototype.unshift,
                                    d = c.prototype.constructor.length,
                                    e = a.prototype.constructor;
                                d > 0 && (b.call(arguments, a.prototype.constructor), e = c.prototype.constructor), e.apply(this, arguments)
                            }

                            function e() { this.constructor = d }
                            var f = b(c),
                                g = b(a);
                            c.displayName = a.displayName, d.prototype = new e;
                            for (var h = 0; h < g.length; h++) {
                                var i = g[h];
                                d.prototype[i] = a.prototype[i]
                            }
                            for (var j = (function(a) {
                                    var b = function() {};
                                    a in d.prototype && (b = d.prototype[a]);
                                    var e = c.prototype[a];
                                    return function() { var a = Array.prototype.unshift; return a.call(arguments, b), e.apply(this, arguments) }
                                }), k = 0; k < f.length; k++) {
                                var l = f[k];
                                d.prototype[l] = j(l)
                            }
                            return d
                        };
                        var d = function() { this.listeners = {} };
                        return d.prototype.on = function(a, b) { this.listeners = this.listeners || {}, a in this.listeners ? this.listeners[a].push(b) : this.listeners[a] = [b] }, d.prototype.trigger = function(a) {
                            var b = Array.prototype.slice,
                                c = b.call(arguments, 1);
                            this.listeners = this.listeners || {}, null == c && (c = []), 0 === c.length && c.push({}), c[0]._type = a, a in this.listeners && this.invoke(this.listeners[a], b.call(arguments, 1)), "*" in this.listeners && this.invoke(this.listeners["*"], arguments)
                        }, d.prototype.invoke = function(a, b) { for (var c = 0, d = a.length; d > c; c++) a[c].apply(this, b) }, c.Observable = d, c.generateChars = function(a) {
                            for (var b = "", c = 0; a > c; c++) {
                                var d = Math.floor(36 * Math.random());
                                b += d.toString(36)
                            }
                            return b
                        }, c.bind = function(a, b) { return function() { a.apply(b, arguments) } }, c._convertData = function(a) {
                            for (var b in a) {
                                var c = b.split("-"),
                                    d = a;
                                if (1 !== c.length) {
                                    for (var e = 0; e < c.length; e++) {
                                        var f = c[e];
                                        f = f.substring(0, 1).toLowerCase() + f.substring(1), f in d || (d[f] = {}), e == c.length - 1 && (d[f] = a[b]), d = d[f]
                                    }
                                    delete a[b]
                                }
                            }
                            return a
                        }, c.hasScroll = function(b, c) {
                            var d = a(c),
                                e = c.style.overflowX,
                                f = c.style.overflowY;
                            return (e !== f || "hidden" !== f && "visible" !== f) && ("scroll" === e || "scroll" === f || (d.innerHeight() < c.scrollHeight || d.innerWidth() < c.scrollWidth))
                        }, c.escapeMarkup = function(a) { var b = { "\\": "&#92;", "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;", "/": "&#47;" }; return "string" != typeof a ? a : String(a).replace(/[&<>"'\/\\]/g, function(a) { return b[a] }) }, c.appendMany = function(b, c) {
                            if ("1.7" === a.fn.jquery.substr(0, 3)) {
                                var d = a();
                                a.map(c, function(a) { d = d.add(a) }), c = d
                            }
                            b.append(c)
                        }, c
                    }), b.define("select2/results", ["jquery", "./utils"], function(a, b) {
                        function c(a, b, d) { this.$element = a, this.data = d, this.options = b, c.__super__.constructor.call(this) }
                        return b.Extend(c, b.Observable), c.prototype.render = function() { var b = a('<ul class="select2-results__options" role="tree"></ul>'); return this.options.get("multiple") && b.attr("aria-multiselectable", "true"), this.$results = b, b }, c.prototype.clear = function() { this.$results.empty() }, c.prototype.displayMessage = function(b) {
                            var c = this.options.get("escapeMarkup");
                            this.clear(), this.hideLoading();
                            var d = a('<li role="treeitem" aria-live="assertive" class="select2-results__option"></li>'),
                                e = this.options.get("translations").get(b.message);
                            d.append(c(e(b.args))), d[0].className += " select2-results__message", this.$results.append(d)
                        }, c.prototype.hideMessages = function() { this.$results.find(".select2-results__message").remove() }, c.prototype.append = function(a) {
                            this.hideLoading();
                            var b = [];
                            if (null == a.results || 0 === a.results.length) return void(0 === this.$results.children().length && this.trigger("results:message", { message: "noResults" }));
                            a.results = this.sort(a.results);
                            for (var c = 0; c < a.results.length; c++) {
                                var d = a.results[c],
                                    e = this.option(d);
                                b.push(e)
                            }
                            this.$results.append(b)
                        }, c.prototype.position = function(a, b) {
                            var c = b.find(".select2-results");
                            c.append(a)
                        }, c.prototype.sort = function(a) { var b = this.options.get("sorter"); return b(a) }, c.prototype.highlightFirstItem = function() {
                            var a = this.$results.find(".select2-results__option[aria-selected]"),
                                b = a.filter("[aria-selected=true]");
                            b.length > 0 ? b.first().trigger("mouseenter") : a.first().trigger("mouseenter"), this.ensureHighlightVisible()
                        }, c.prototype.setClasses = function() {
                            var b = this;
                            this.data.current(function(c) {
                                var d = a.map(c, function(a) { return a.id.toString() }),
                                    e = b.$results.find(".select2-results__option[aria-selected]");
                                e.each(function() {
                                    var b = a(this),
                                        c = a.data(this, "data"),
                                        e = "" + c.id;
                                    null != c.element && c.element.selected || null == c.element && a.inArray(e, d) > -1 ? b.attr("aria-selected", "true") : b.attr("aria-selected", "false")
                                })
                            })
                        }, c.prototype.showLoading = function(a) {
                            this.hideLoading();
                            var b = this.options.get("translations").get("searching"),
                                c = { disabled: !0, loading: !0, text: b(a) },
                                d = this.option(c);
                            d.className += " loading-results", this.$results.prepend(d)
                        }, c.prototype.hideLoading = function() { this.$results.find(".loading-results").remove() }, c.prototype.option = function(b) {
                            var c = document.createElement("li");
                            c.className = "select2-results__option";
                            var d = { role: "treeitem", "aria-selected": "false" };
                            b.disabled && (delete d["aria-selected"], d["aria-disabled"] = "true"), null == b.id && delete d["aria-selected"], null != b._resultId && (c.id = b._resultId), b.title && (c.title = b.title), b.children && (d.role = "group", d["aria-label"] = b.text, delete d["aria-selected"]);
                            for (var e in d) {
                                var f = d[e];
                                c.setAttribute(e, f)
                            }
                            if (b.children) {
                                var g = a(c),
                                    h = document.createElement("strong");
                                h.className = "select2-results__group", a(h), this.template(b, h);
                                for (var i = [], j = 0; j < b.children.length; j++) {
                                    var k = b.children[j],
                                        l = this.option(k);
                                    i.push(l)
                                }
                                var m = a("<ul></ul>", { "class": "select2-results__options select2-results__options--nested" });
                                m.append(i), g.append(h), g.append(m)
                            } else this.template(b, c);
                            return a.data(c, "data", b), c
                        }, c.prototype.bind = function(b, c) {
                            var d = this,
                                e = b.id + "-results";
                            this.$results.attr("id", e), b.on("results:all", function(a) { d.clear(), d.append(a.data), b.isOpen() && (d.setClasses(), d.highlightFirstItem()) }), b.on("results:append", function(a) { d.append(a.data), b.isOpen() && d.setClasses() }), b.on("query", function(a) { d.hideMessages(), d.showLoading(a) }), b.on("select", function() { b.isOpen() && (d.setClasses(), d.highlightFirstItem()) }), b.on("unselect", function() { b.isOpen() && (d.setClasses(), d.highlightFirstItem()) }), b.on("open", function() { d.$results.attr("aria-expanded", "true"), d.$results.attr("aria-hidden", "false"), d.setClasses(), d.ensureHighlightVisible() }), b.on("close", function() { d.$results.attr("aria-expanded", "false"), d.$results.attr("aria-hidden", "true"), d.$results.removeAttr("aria-activedescendant") }), b.on("results:toggle", function() {
                                var a = d.getHighlightedResults();
                                0 !== a.length && a.trigger("mouseup")
                            }), b.on("results:select", function() { var a = d.getHighlightedResults(); if (0 !== a.length) { var b = a.data("data"); "true" == a.attr("aria-selected") ? d.trigger("close", {}) : d.trigger("select", { data: b }) } }), b.on("results:previous", function() {
                                var a = d.getHighlightedResults(),
                                    b = d.$results.find("[aria-selected]"),
                                    c = b.index(a);
                                if (0 !== c) {
                                    var e = c - 1;
                                    0 === a.length && (e = 0);
                                    var f = b.eq(e);
                                    f.trigger("mouseenter");
                                    var g = d.$results.offset().top,
                                        h = f.offset().top,
                                        i = d.$results.scrollTop() + (h - g);
                                    0 === e ? d.$results.scrollTop(0) : 0 > h - g && d.$results.scrollTop(i)
                                }
                            }), b.on("results:next", function() {
                                var a = d.getHighlightedResults(),
                                    b = d.$results.find("[aria-selected]"),
                                    c = b.index(a),
                                    e = c + 1;
                                if (!(e >= b.length)) {
                                    var f = b.eq(e);
                                    f.trigger("mouseenter");
                                    var g = d.$results.offset().top + d.$results.outerHeight(!1),
                                        h = f.offset().top + f.outerHeight(!1),
                                        i = d.$results.scrollTop() + h - g;
                                    0 === e ? d.$results.scrollTop(0) : h > g && d.$results.scrollTop(i)
                                }
                            }), b.on("results:focus", function(a) { a.element.addClass("select2-results__option--highlighted") }), b.on("results:message", function(a) { d.displayMessage(a) }), a.fn.mousewheel && this.$results.on("mousewheel", function(a) {
                                var b = d.$results.scrollTop(),
                                    c = d.$results.get(0).scrollHeight - b + a.deltaY,
                                    e = a.deltaY > 0 && b - a.deltaY <= 0,
                                    f = a.deltaY < 0 && c <= d.$results.height();
                                e ? (d.$results.scrollTop(0), a.preventDefault(), a.stopPropagation()) : f && (d.$results.scrollTop(d.$results.get(0).scrollHeight - d.$results.height()), a.preventDefault(), a.stopPropagation())
                            }), this.$results.on("mouseup", ".select2-results__option[aria-selected]", function(b) {
                                var c = a(this),
                                    e = c.data("data");
                                return "true" === c.attr("aria-selected") ? void(d.options.get("multiple") ? d.trigger("unselect", { originalEvent: b, data: e }) : d.trigger("close", {})) : void d.trigger("select", { originalEvent: b, data: e })
                            }), this.$results.on("mouseenter", ".select2-results__option[aria-selected]", function(b) {
                                var c = a(this).data("data");
                                d.getHighlightedResults().removeClass("select2-results__option--highlighted"), d.trigger("results:focus", { data: c, element: a(this) })
                            })
                        }, c.prototype.getHighlightedResults = function() { var a = this.$results.find(".select2-results__option--highlighted"); return a }, c.prototype.destroy = function() { this.$results.remove() }, c.prototype.ensureHighlightVisible = function() {
                            var a = this.getHighlightedResults();
                            if (0 !== a.length) {
                                var b = this.$results.find("[aria-selected]"),
                                    c = b.index(a),
                                    d = this.$results.offset().top,
                                    e = a.offset().top,
                                    f = this.$results.scrollTop() + (e - d),
                                    g = e - d;
                                f -= 2 * a.outerHeight(!1), 2 >= c ? this.$results.scrollTop(0) : (g > this.$results.outerHeight() || 0 > g) && this.$results.scrollTop(f)
                            }
                        }, c.prototype.template = function(b, c) {
                            var d = this.options.get("templateResult"),
                                e = this.options.get("escapeMarkup"),
                                f = d(b, c);
                            null == f ? c.style.display = "none" : "string" == typeof f ? c.innerHTML = e(f) : a(c).append(f)
                        }, c
                    }), b.define("select2/keys", [], function() { var a = { BACKSPACE: 8, TAB: 9, ENTER: 13, SHIFT: 16, CTRL: 17, ALT: 18, ESC: 27, SPACE: 32, PAGE_UP: 33, PAGE_DOWN: 34, END: 35, HOME: 36, LEFT: 37, UP: 38, RIGHT: 39, DOWN: 40, DELETE: 46 }; return a }), b.define("select2/selection/base", ["jquery", "../utils", "../keys"], function(a, b, c) {
                        function d(a, b) { this.$element = a, this.options = b, d.__super__.constructor.call(this) }
                        return b.Extend(d, b.Observable), d.prototype.render = function() { var b = a('<span class="select2-selection" role="combobox"  aria-haspopup="true" aria-expanded="false"></span>'); return this._tabindex = 0, null != this.$element.data("old-tabindex") ? this._tabindex = this.$element.data("old-tabindex") : null != this.$element.attr("tabindex") && (this._tabindex = this.$element.attr("tabindex")), b.attr("title", this.$element.attr("title")), b.attr("tabindex", this._tabindex), this.$selection = b, b }, d.prototype.bind = function(a, b) {
                            var d = this,
                                e = (a.id + "-container", a.id + "-results");
                            this.container = a, this.$selection.on("focus", function(a) { d.trigger("focus", a) }), this.$selection.on("blur", function(a) { d._handleBlur(a) }), this.$selection.on("keydown", function(a) { d.trigger("keypress", a), a.which === c.SPACE && a.preventDefault() }), a.on("results:focus", function(a) { d.$selection.attr("aria-activedescendant", a.data._resultId) }), a.on("selection:update", function(a) { d.update(a.data) }), a.on("open", function() { d.$selection.attr("aria-expanded", "true"), d.$selection.attr("aria-owns", e), d._attachCloseHandler(a) }), a.on("close", function() { d.$selection.attr("aria-expanded", "false"), d.$selection.removeAttr("aria-activedescendant"), d.$selection.removeAttr("aria-owns"), d.$selection.focus(), d._detachCloseHandler(a) }), a.on("enable", function() { d.$selection.attr("tabindex", d._tabindex) }), a.on("disable", function() { d.$selection.attr("tabindex", "-1") })
                        }, d.prototype._handleBlur = function(b) {
                            var c = this;
                            window.setTimeout(function() { document.activeElement == c.$selection[0] || a.contains(c.$selection[0], document.activeElement) || c.trigger("blur", b) }, 1)
                        }, d.prototype._attachCloseHandler = function(b) {
                            a(document.body).on("mousedown.select2." + b.id, function(b) {
                                var c = a(b.target),
                                    d = c.closest(".select2"),
                                    e = a(".select2.select2-container--open");
                                e.each(function() {
                                    var b = a(this);
                                    if (this != d[0]) {
                                        var c = b.data("element");
                                        c.select2("close")
                                    }
                                })
                            })
                        }, d.prototype._detachCloseHandler = function(b) { a(document.body).off("mousedown.select2." + b.id) }, d.prototype.position = function(a, b) {
                            var c = b.find(".selection");
                            c.append(a)
                        }, d.prototype.destroy = function() { this._detachCloseHandler(this.container) }, d.prototype.update = function(a) { throw new Error("The `update` method must be defined in child classes.") }, d
                    }), b.define("select2/selection/single", ["jquery", "./base", "../utils", "../keys"], function(a, b, c, d) {
                        function e() { e.__super__.constructor.apply(this, arguments) }
                        return c.Extend(e, b), e.prototype.render = function() { var a = e.__super__.render.call(this); return a.addClass("select2-selection--single"), a.html('<span class="select2-selection__rendered"></span><span class="select2-selection__arrow" role="presentation"><b role="presentation"></b></span>'), a }, e.prototype.bind = function(a, b) {
                            var c = this;
                            e.__super__.bind.apply(this, arguments);
                            var d = a.id + "-container";
                            this.$selection.find(".select2-selection__rendered").attr("id", d), this.$selection.attr("aria-labelledby", d), this.$selection.on("mousedown", function(a) { 1 === a.which && c.trigger("toggle", { originalEvent: a }) }), this.$selection.on("focus", function(a) {}), this.$selection.on("blur", function(a) {}), a.on("focus", function(b) { a.isOpen() || c.$selection.focus() }), a.on("selection:update", function(a) { c.update(a.data) })
                        }, e.prototype.clear = function() { this.$selection.find(".select2-selection__rendered").empty() }, e.prototype.display = function(a, b) {
                            var c = this.options.get("templateSelection"),
                                d = this.options.get("escapeMarkup");
                            return d(c(a, b))
                        }, e.prototype.selectionContainer = function() { return a("<span></span>") }, e.prototype.update = function(a) {
                            if (0 === a.length) return void this.clear();
                            var b = a[0],
                                c = this.$selection.find(".select2-selection__rendered"),
                                d = this.display(b, c);
                            c.empty().append(d), c.prop("title", b.title || b.text)
                        }, e
                    }), b.define("select2/selection/multiple", ["jquery", "./base", "../utils"], function(a, b, c) {
                        function d(a, b) { d.__super__.constructor.apply(this, arguments) }
                        return c.Extend(d, b), d.prototype.render = function() { var a = d.__super__.render.call(this); return a.addClass("select2-selection--multiple"), a.html('<ul class="select2-selection__rendered"></ul>'), a }, d.prototype.bind = function(b, c) {
                            var e = this;
                            d.__super__.bind.apply(this, arguments), this.$selection.on("click", function(a) { e.trigger("toggle", { originalEvent: a }) }), this.$selection.on("click", ".select2-selection__choice__remove", function(b) {
                                if (!e.options.get("disabled")) {
                                    var c = a(this),
                                        d = c.parent(),
                                        f = d.data("data");
                                    e.trigger("unselect", { originalEvent: b, data: f })
                                }
                            })
                        }, d.prototype.clear = function() { this.$selection.find(".select2-selection__rendered").empty() }, d.prototype.display = function(a, b) {
                            var c = this.options.get("templateSelection"),
                                d = this.options.get("escapeMarkup");
                            return d(c(a, b))
                        }, d.prototype.selectionContainer = function() { var b = a('<li class="select2-selection__choice"><span class="select2-selection__choice__remove" role="presentation">&times;</span></li>'); return b }, d.prototype.update = function(a) {
                            if (this.clear(), 0 !== a.length) {
                                for (var b = [], d = 0; d < a.length; d++) {
                                    var e = a[d],
                                        f = this.selectionContainer(),
                                        g = this.display(e, f);
                                    f.append(g), f.prop("title", e.title || e.text), f.data("data", e), b.push(f)
                                }
                                var h = this.$selection.find(".select2-selection__rendered");
                                c.appendMany(h, b)
                            }
                        }, d
                    }), b.define("select2/selection/placeholder", ["../utils"], function(a) {
                        function b(a, b, c) { this.placeholder = this.normalizePlaceholder(c.get("placeholder")), a.call(this, b, c) }
                        return b.prototype.normalizePlaceholder = function(a, b) { return "string" == typeof b && (b = { id: "", text: b }), b }, b.prototype.createPlaceholder = function(a, b) { var c = this.selectionContainer(); return c.html(this.display(b)), c.addClass("select2-selection__placeholder").removeClass("select2-selection__choice"), c }, b.prototype.update = function(a, b) {
                            var c = 1 == b.length && b[0].id != this.placeholder.id,
                                d = b.length > 1;
                            if (d || c) return a.call(this, b);
                            this.clear();
                            var e = this.createPlaceholder(this.placeholder);
                            this.$selection.find(".select2-selection__rendered").append(e)
                        }, b
                    }), b.define("select2/selection/allowClear", ["jquery", "../keys"], function(a, b) {
                        function c() {}
                        return c.prototype.bind = function(a, b, c) {
                            var d = this;
                            a.call(this, b, c), null == this.placeholder && this.options.get("debug") && window.console && console.error && console.error("Select2: The `allowClear` option should be used in combination with the `placeholder` option."), this.$selection.on("mousedown", ".select2-selection__clear", function(a) { d._handleClear(a) }), b.on("keypress", function(a) { d._handleKeyboardClear(a, b) })
                        }, c.prototype._handleClear = function(a, b) {
                            if (!this.options.get("disabled")) {
                                var c = this.$selection.find(".select2-selection__clear");
                                if (0 !== c.length) {
                                    b.stopPropagation();
                                    for (var d = c.data("data"), e = 0; e < d.length; e++) { var f = { data: d[e] }; if (this.trigger("unselect", f), f.prevented) return }
                                    this.$element.val(this.placeholder.id).trigger("change"), this.trigger("toggle", {})
                                }
                            }
                        }, c.prototype._handleKeyboardClear = function(a, c, d) { d.isOpen() || (c.which == b.DELETE || c.which == b.BACKSPACE) && this._handleClear(c) }, c.prototype.update = function(b, c) {
                            if (b.call(this, c), !(this.$selection.find(".select2-selection__placeholder").length > 0 || 0 === c.length)) {
                                var d = a('<span class="select2-selection__clear">&times;</span>');
                                d.data("data", c), this.$selection.find(".select2-selection__rendered").prepend(d)
                            }
                        }, c
                    }), b.define("select2/selection/search", ["jquery", "../utils", "../keys"], function(a, b, c) {
                        function d(a, b, c) { a.call(this, b, c) }
                        return d.prototype.render = function(b) {
                            var c = a('<li class="select2-search select2-search--inline"><input class="select2-search__field" type="search" tabindex="-1" autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false" role="textbox" aria-autocomplete="list" /></li>');
                            this.$searchContainer = c, this.$search = c.find("input");
                            var d = b.call(this);
                            return this._transferTabIndex(), d
                        }, d.prototype.bind = function(a, b, d) {
                            var e = this;
                            a.call(this, b, d), b.on("open", function() { e.$search.trigger("focus") }), b.on("close", function() { e.$search.val(""), e.$search.removeAttr("aria-activedescendant"), e.$search.trigger("focus") }), b.on("enable", function() { e.$search.prop("disabled", !1), e._transferTabIndex() }), b.on("disable", function() { e.$search.prop("disabled", !0) }), b.on("focus", function(a) { e.$search.trigger("focus") }), b.on("results:focus", function(a) { e.$search.attr("aria-activedescendant", a.id) }), this.$selection.on("focusin", ".select2-search--inline", function(a) { e.trigger("focus", a) }), this.$selection.on("focusout", ".select2-search--inline", function(a) { e._handleBlur(a) }), this.$selection.on("keydown", ".select2-search--inline", function(a) {
                                a.stopPropagation(), e.trigger("keypress", a), e._keyUpPrevented = a.isDefaultPrevented();
                                var b = a.which;
                                if (b === c.BACKSPACE && "" === e.$search.val()) {
                                    var d = e.$searchContainer.prev(".select2-selection__choice");
                                    if (d.length > 0) {
                                        var f = d.data("data");
                                        e.searchRemoveChoice(f), a.preventDefault()
                                    }
                                }
                            });
                            var f = document.documentMode,
                                g = f && 11 >= f;
                            this.$selection.on("input.searchcheck", ".select2-search--inline", function(a) { return g ? void e.$selection.off("input.search input.searchcheck") : void e.$selection.off("keyup.search") }), this.$selection.on("keyup.search input.search", ".select2-search--inline", function(a) {
                                if (g && "input" === a.type) return void e.$selection.off("input.search input.searchcheck");
                                var b = a.which;
                                b != c.SHIFT && b != c.CTRL && b != c.ALT && b != c.TAB && e.handleSearch(a)
                            })
                        }, d.prototype._transferTabIndex = function(a) { this.$search.attr("tabindex", this.$selection.attr("tabindex")), this.$selection.attr("tabindex", "-1") }, d.prototype.createPlaceholder = function(a, b) { this.$search.attr("placeholder", b.text) }, d.prototype.update = function(a, b) {
                            var c = this.$search[0] == document.activeElement;
                            this.$search.attr("placeholder", ""), a.call(this, b), this.$selection.find(".select2-selection__rendered").append(this.$searchContainer), this.resizeSearch(), c && this.$search.focus()
                        }, d.prototype.handleSearch = function() {
                            if (this.resizeSearch(), !this._keyUpPrevented) {
                                var a = this.$search.val();
                                this.trigger("query", { term: a })
                            }
                            this._keyUpPrevented = !1
                        }, d.prototype.searchRemoveChoice = function(a, b) { this.trigger("unselect", { data: b }), this.$search.val(b.text), this.handleSearch() }, d.prototype.resizeSearch = function() {
                            this.$search.css("width", "25px");
                            var a = "";
                            if ("" !== this.$search.attr("placeholder")) a = this.$selection.find(".select2-selection__rendered").innerWidth();
                            else {
                                var b = this.$search.val().length + 1;
                                a = .75 * b + "em"
                            }
                            this.$search.css("width", a)
                        }, d
                    }), b.define("select2/selection/eventRelay", ["jquery"], function(a) {
                        function b() {}
                        return b.prototype.bind = function(b, c, d) {
                            var e = this,
                                f = ["open", "opening", "close", "closing", "select", "selecting", "unselect", "unselecting"],
                                g = ["opening", "closing", "selecting", "unselecting"];
                            b.call(this, c, d), c.on("*", function(b, c) {
                                if (-1 !== a.inArray(b, f)) {
                                    c = c || {};
                                    var d = a.Event("select2:" + b, { params: c });
                                    e.$element.trigger(d), -1 !== a.inArray(b, g) && (c.prevented = d.isDefaultPrevented())
                                }
                            })
                        }, b
                    }), b.define("select2/translation", ["jquery", "require"], function(a, b) {
                        function c(a) { this.dict = a || {} }
                        return c.prototype.all = function() { return this.dict }, c.prototype.get = function(a) { return this.dict[a] }, c.prototype.extend = function(b) { this.dict = a.extend({}, b.all(), this.dict) }, c._cache = {}, c.loadPath = function(a) {
                            if (!(a in c._cache)) {
                                var d = b(a);
                                c._cache[a] = d
                            }
                            return new c(c._cache[a])
                        }, c
                    }), b.define("select2/diacritics", [], function() {
                        var a = {
                            "Ⓐ": "A",
                            "Ａ": "A",
                            "À": "A",
                            "Á": "A",
                            "Â": "A",
                            "Ầ": "A",
                            "Ấ": "A",
                            "Ẫ": "A",
                            "Ẩ": "A",
                            "Ã": "A",
                            "Ā": "A",
                            "Ă": "A",
                            "Ằ": "A",
                            "Ắ": "A",
                            "Ẵ": "A",
                            "Ẳ": "A",
                            "Ȧ": "A",
                            "Ǡ": "A",
                            "Ä": "A",
                            "Ǟ": "A",
                            "Ả": "A",
                            "Å": "A",
                            "Ǻ": "A",
                            "Ǎ": "A",
                            "Ȁ": "A",
                            "Ȃ": "A",
                            "Ạ": "A",
                            "Ậ": "A",
                            "Ặ": "A",
                            "Ḁ": "A",
                            "Ą": "A",
                            "Ⱥ": "A",
                            "Ɐ": "A",
                            "Ꜳ": "AA",
                            "Æ": "AE",
                            "Ǽ": "AE",
                            "Ǣ": "AE",
                            "Ꜵ": "AO",
                            "Ꜷ": "AU",
                            "Ꜹ": "AV",
                            "Ꜻ": "AV",
                            "Ꜽ": "AY",
                            "Ⓑ": "B",
                            "Ｂ": "B",
                            "Ḃ": "B",
                            "Ḅ": "B",
                            "Ḇ": "B",
                            "Ƀ": "B",
                            "Ƃ": "B",
                            "Ɓ": "B",
                            "Ⓒ": "C",
                            "Ｃ": "C",
                            "Ć": "C",
                            "Ĉ": "C",
                            "Ċ": "C",
                            "Č": "C",
                            "Ç": "C",
                            "Ḉ": "C",
                            "Ƈ": "C",
                            "Ȼ": "C",
                            "Ꜿ": "C",
                            "Ⓓ": "D",
                            "Ｄ": "D",
                            "Ḋ": "D",
                            "Ď": "D",
                            "Ḍ": "D",
                            "Ḑ": "D",
                            "Ḓ": "D",
                            "Ḏ": "D",
                            "Đ": "D",
                            "Ƌ": "D",
                            "Ɗ": "D",
                            "Ɖ": "D",
                            "Ꝺ": "D",
                            "Ǳ": "DZ",
                            "Ǆ": "DZ",
                            "ǲ": "Dz",
                            "ǅ": "Dz",
                            "Ⓔ": "E",
                            "Ｅ": "E",
                            "È": "E",
                            "É": "E",
                            "Ê": "E",
                            "Ề": "E",
                            "Ế": "E",
                            "Ễ": "E",
                            "Ể": "E",
                            "Ẽ": "E",
                            "Ē": "E",
                            "Ḕ": "E",
                            "Ḗ": "E",
                            "Ĕ": "E",
                            "Ė": "E",
                            "Ë": "E",
                            "Ẻ": "E",
                            "Ě": "E",
                            "Ȅ": "E",
                            "Ȇ": "E",
                            "Ẹ": "E",
                            "Ệ": "E",
                            "Ȩ": "E",
                            "Ḝ": "E",
                            "Ę": "E",
                            "Ḙ": "E",
                            "Ḛ": "E",
                            "Ɛ": "E",
                            "Ǝ": "E",
                            "Ⓕ": "F",
                            "Ｆ": "F",
                            "Ḟ": "F",
                            "Ƒ": "F",
                            "Ꝼ": "F",
                            "Ⓖ": "G",
                            "Ｇ": "G",
                            "Ǵ": "G",
                            "Ĝ": "G",
                            "Ḡ": "G",
                            "Ğ": "G",
                            "Ġ": "G",
                            "Ǧ": "G",
                            "Ģ": "G",
                            "Ǥ": "G",
                            "Ɠ": "G",
                            "Ꞡ": "G",
                            "Ᵹ": "G",
                            "Ꝿ": "G",
                            "Ⓗ": "H",
                            "Ｈ": "H",
                            "Ĥ": "H",
                            "Ḣ": "H",
                            "Ḧ": "H",
                            "Ȟ": "H",
                            "Ḥ": "H",
                            "Ḩ": "H",
                            "Ḫ": "H",
                            "Ħ": "H",
                            "Ⱨ": "H",
                            "Ⱶ": "H",
                            "Ɥ": "H",
                            "Ⓘ": "I",
                            "Ｉ": "I",
                            "Ì": "I",
                            "Í": "I",
                            "Î": "I",
                            "Ĩ": "I",
                            "Ī": "I",
                            "Ĭ": "I",
                            "İ": "I",
                            "Ï": "I",
                            "Ḯ": "I",
                            "Ỉ": "I",
                            "Ǐ": "I",
                            "Ȉ": "I",
                            "Ȋ": "I",
                            "Ị": "I",
                            "Į": "I",
                            "Ḭ": "I",
                            "Ɨ": "I",
                            "Ⓙ": "J",
                            "Ｊ": "J",
                            "Ĵ": "J",
                            "Ɉ": "J",
                            "Ⓚ": "K",
                            "Ｋ": "K",
                            "Ḱ": "K",
                            "Ǩ": "K",
                            "Ḳ": "K",
                            "Ķ": "K",
                            "Ḵ": "K",
                            "Ƙ": "K",
                            "Ⱪ": "K",
                            "Ꝁ": "K",
                            "Ꝃ": "K",
                            "Ꝅ": "K",
                            "Ꞣ": "K",
                            "Ⓛ": "L",
                            "Ｌ": "L",
                            "Ŀ": "L",
                            "Ĺ": "L",
                            "Ľ": "L",
                            "Ḷ": "L",
                            "Ḹ": "L",
                            "Ļ": "L",
                            "Ḽ": "L",
                            "Ḻ": "L",
                            "Ł": "L",
                            "Ƚ": "L",
                            "Ɫ": "L",
                            "Ⱡ": "L",
                            "Ꝉ": "L",
                            "Ꝇ": "L",
                            "Ꞁ": "L",
                            "Ǉ": "LJ",
                            "ǈ": "Lj",
                            "Ⓜ": "M",
                            "Ｍ": "M",
                            "Ḿ": "M",
                            "Ṁ": "M",
                            "Ṃ": "M",
                            "Ɱ": "M",
                            "Ɯ": "M",
                            "Ⓝ": "N",
                            "Ｎ": "N",
                            "Ǹ": "N",
                            "Ń": "N",
                            "Ñ": "N",
                            "Ṅ": "N",
                            "Ň": "N",
                            "Ṇ": "N",
                            "Ņ": "N",
                            "Ṋ": "N",
                            "Ṉ": "N",
                            "Ƞ": "N",
                            "Ɲ": "N",
                            "Ꞑ": "N",
                            "Ꞥ": "N",
                            "Ǌ": "NJ",
                            "ǋ": "Nj",
                            "Ⓞ": "O",
                            "Ｏ": "O",
                            "Ò": "O",
                            "Ó": "O",
                            "Ô": "O",
                            "Ồ": "O",
                            "Ố": "O",
                            "Ỗ": "O",
                            "Ổ": "O",
                            "Õ": "O",
                            "Ṍ": "O",
                            "Ȭ": "O",
                            "Ṏ": "O",
                            "Ō": "O",
                            "Ṑ": "O",
                            "Ṓ": "O",
                            "Ŏ": "O",
                            "Ȯ": "O",
                            "Ȱ": "O",
                            "Ö": "O",
                            "Ȫ": "O",
                            "Ỏ": "O",
                            "Ő": "O",
                            "Ǒ": "O",
                            "Ȍ": "O",
                            "Ȏ": "O",
                            "Ơ": "O",
                            "Ờ": "O",
                            "Ớ": "O",
                            "Ỡ": "O",
                            "Ở": "O",
                            "Ợ": "O",
                            "Ọ": "O",
                            "Ộ": "O",
                            "Ǫ": "O",
                            "Ǭ": "O",
                            "Ø": "O",
                            "Ǿ": "O",
                            "Ɔ": "O",
                            "Ɵ": "O",
                            "Ꝋ": "O",
                            "Ꝍ": "O",
                            "Ƣ": "OI",
                            "Ꝏ": "OO",
                            "Ȣ": "OU",
                            "Ⓟ": "P",
                            "Ｐ": "P",
                            "Ṕ": "P",
                            "Ṗ": "P",
                            "Ƥ": "P",
                            "Ᵽ": "P",
                            "Ꝑ": "P",
                            "Ꝓ": "P",
                            "Ꝕ": "P",
                            "Ⓠ": "Q",
                            "Ｑ": "Q",
                            "Ꝗ": "Q",
                            "Ꝙ": "Q",
                            "Ɋ": "Q",
                            "Ⓡ": "R",
                            "Ｒ": "R",
                            "Ŕ": "R",
                            "Ṙ": "R",
                            "Ř": "R",
                            "Ȑ": "R",
                            "Ȓ": "R",
                            "Ṛ": "R",
                            "Ṝ": "R",
                            "Ŗ": "R",
                            "Ṟ": "R",
                            "Ɍ": "R",
                            "Ɽ": "R",
                            "Ꝛ": "R",
                            "Ꞧ": "R",
                            "Ꞃ": "R",
                            "Ⓢ": "S",
                            "Ｓ": "S",
                            "ẞ": "S",
                            "Ś": "S",
                            "Ṥ": "S",
                            "Ŝ": "S",
                            "Ṡ": "S",
                            "Š": "S",
                            "Ṧ": "S",
                            "Ṣ": "S",
                            "Ṩ": "S",
                            "Ș": "S",
                            "Ş": "S",
                            "Ȿ": "S",
                            "Ꞩ": "S",
                            "Ꞅ": "S",
                            "Ⓣ": "T",
                            "Ｔ": "T",
                            "Ṫ": "T",
                            "Ť": "T",
                            "Ṭ": "T",
                            "Ț": "T",
                            "Ţ": "T",
                            "Ṱ": "T",
                            "Ṯ": "T",
                            "Ŧ": "T",
                            "Ƭ": "T",
                            "Ʈ": "T",
                            "Ⱦ": "T",
                            "Ꞇ": "T",
                            "Ꜩ": "TZ",
                            "Ⓤ": "U",
                            "Ｕ": "U",
                            "Ù": "U",
                            "Ú": "U",
                            "Û": "U",
                            "Ũ": "U",
                            "Ṹ": "U",
                            "Ū": "U",
                            "Ṻ": "U",
                            "Ŭ": "U",
                            "Ü": "U",
                            "Ǜ": "U",
                            "Ǘ": "U",
                            "Ǖ": "U",
                            "Ǚ": "U",
                            "Ủ": "U",
                            "Ů": "U",
                            "Ű": "U",
                            "Ǔ": "U",
                            "Ȕ": "U",
                            "Ȗ": "U",
                            "Ư": "U",
                            "Ừ": "U",
                            "Ứ": "U",
                            "Ữ": "U",
                            "Ử": "U",
                            "Ự": "U",
                            "Ụ": "U",
                            "Ṳ": "U",
                            "Ų": "U",
                            "Ṷ": "U",
                            "Ṵ": "U",
                            "Ʉ": "U",
                            "Ⓥ": "V",
                            "Ｖ": "V",
                            "Ṽ": "V",
                            "Ṿ": "V",
                            "Ʋ": "V",
                            "Ꝟ": "V",
                            "Ʌ": "V",
                            "Ꝡ": "VY",
                            "Ⓦ": "W",
                            "Ｗ": "W",
                            "Ẁ": "W",
                            "Ẃ": "W",
                            "Ŵ": "W",
                            "Ẇ": "W",
                            "Ẅ": "W",
                            "Ẉ": "W",
                            "Ⱳ": "W",
                            "Ⓧ": "X",
                            "Ｘ": "X",
                            "Ẋ": "X",
                            "Ẍ": "X",
                            "Ⓨ": "Y",
                            "Ｙ": "Y",
                            "Ỳ": "Y",
                            "Ý": "Y",
                            "Ŷ": "Y",
                            "Ỹ": "Y",
                            "Ȳ": "Y",
                            "Ẏ": "Y",
                            "Ÿ": "Y",
                            "Ỷ": "Y",
                            "Ỵ": "Y",
                            "Ƴ": "Y",
                            "Ɏ": "Y",
                            "Ỿ": "Y",
                            "Ⓩ": "Z",
                            "Ｚ": "Z",
                            "Ź": "Z",
                            "Ẑ": "Z",
                            "Ż": "Z",
                            "Ž": "Z",
                            "Ẓ": "Z",
                            "Ẕ": "Z",
                            "Ƶ": "Z",
                            "Ȥ": "Z",
                            "Ɀ": "Z",
                            "Ⱬ": "Z",
                            "Ꝣ": "Z",
                            "ⓐ": "a",
                            "ａ": "a",
                            "ẚ": "a",
                            "à": "a",
                            "á": "a",
                            "â": "a",
                            "ầ": "a",
                            "ấ": "a",
                            "ẫ": "a",
                            "ẩ": "a",
                            "ã": "a",
                            "ā": "a",
                            "ă": "a",
                            "ằ": "a",
                            "ắ": "a",
                            "ẵ": "a",
                            "ẳ": "a",
                            "ȧ": "a",
                            "ǡ": "a",
                            "ä": "a",
                            "ǟ": "a",
                            "ả": "a",
                            "å": "a",
                            "ǻ": "a",
                            "ǎ": "a",
                            "ȁ": "a",
                            "ȃ": "a",
                            "ạ": "a",
                            "ậ": "a",
                            "ặ": "a",
                            "ḁ": "a",
                            "ą": "a",
                            "ⱥ": "a",
                            "ɐ": "a",
                            "ꜳ": "aa",
                            "æ": "ae",
                            "ǽ": "ae",
                            "ǣ": "ae",
                            "ꜵ": "ao",
                            "ꜷ": "au",
                            "ꜹ": "av",
                            "ꜻ": "av",
                            "ꜽ": "ay",
                            "ⓑ": "b",
                            "ｂ": "b",
                            "ḃ": "b",
                            "ḅ": "b",
                            "ḇ": "b",
                            "ƀ": "b",
                            "ƃ": "b",
                            "ɓ": "b",
                            "ⓒ": "c",
                            "ｃ": "c",
                            "ć": "c",
                            "ĉ": "c",
                            "ċ": "c",
                            "č": "c",
                            "ç": "c",
                            "ḉ": "c",
                            "ƈ": "c",
                            "ȼ": "c",
                            "ꜿ": "c",
                            "ↄ": "c",
                            "ⓓ": "d",
                            "ｄ": "d",
                            "ḋ": "d",
                            "ď": "d",
                            "ḍ": "d",
                            "ḑ": "d",
                            "ḓ": "d",
                            "ḏ": "d",
                            "đ": "d",
                            "ƌ": "d",
                            "ɖ": "d",
                            "ɗ": "d",
                            "ꝺ": "d",
                            "ǳ": "dz",
                            "ǆ": "dz",
                            "ⓔ": "e",
                            "ｅ": "e",
                            "è": "e",
                            "é": "e",
                            "ê": "e",
                            "ề": "e",
                            "ế": "e",
                            "ễ": "e",
                            "ể": "e",
                            "ẽ": "e",
                            "ē": "e",
                            "ḕ": "e",
                            "ḗ": "e",
                            "ĕ": "e",
                            "ė": "e",
                            "ë": "e",
                            "ẻ": "e",
                            "ě": "e",
                            "ȅ": "e",
                            "ȇ": "e",
                            "ẹ": "e",
                            "ệ": "e",
                            "ȩ": "e",
                            "ḝ": "e",
                            "ę": "e",
                            "ḙ": "e",
                            "ḛ": "e",
                            "ɇ": "e",
                            "ɛ": "e",
                            "ǝ": "e",
                            "ⓕ": "f",
                            "ｆ": "f",
                            "ḟ": "f",
                            "ƒ": "f",
                            "ꝼ": "f",
                            "ⓖ": "g",
                            "ｇ": "g",
                            "ǵ": "g",
                            "ĝ": "g",
                            "ḡ": "g",
                            "ğ": "g",
                            "ġ": "g",
                            "ǧ": "g",
                            "ģ": "g",
                            "ǥ": "g",
                            "ɠ": "g",
                            "ꞡ": "g",
                            "ᵹ": "g",
                            "ꝿ": "g",
                            "ⓗ": "h",
                            "ｈ": "h",
                            "ĥ": "h",
                            "ḣ": "h",
                            "ḧ": "h",
                            "ȟ": "h",
                            "ḥ": "h",
                            "ḩ": "h",
                            "ḫ": "h",
                            "ẖ": "h",
                            "ħ": "h",
                            "ⱨ": "h",
                            "ⱶ": "h",
                            "ɥ": "h",
                            "ƕ": "hv",
                            "ⓘ": "i",
                            "ｉ": "i",
                            "ì": "i",
                            "í": "i",
                            "î": "i",
                            "ĩ": "i",
                            "ī": "i",
                            "ĭ": "i",
                            "ï": "i",
                            "ḯ": "i",
                            "ỉ": "i",
                            "ǐ": "i",
                            "ȉ": "i",
                            "ȋ": "i",
                            "ị": "i",
                            "į": "i",
                            "ḭ": "i",
                            "ɨ": "i",
                            "ı": "i",
                            "ⓙ": "j",
                            "ｊ": "j",
                            "ĵ": "j",
                            "ǰ": "j",
                            "ɉ": "j",
                            "ⓚ": "k",
                            "ｋ": "k",
                            "ḱ": "k",
                            "ǩ": "k",
                            "ḳ": "k",
                            "ķ": "k",
                            "ḵ": "k",
                            "ƙ": "k",
                            "ⱪ": "k",
                            "ꝁ": "k",
                            "ꝃ": "k",
                            "ꝅ": "k",
                            "ꞣ": "k",
                            "ⓛ": "l",
                            "ｌ": "l",
                            "ŀ": "l",
                            "ĺ": "l",
                            "ľ": "l",
                            "ḷ": "l",
                            "ḹ": "l",
                            "ļ": "l",
                            "ḽ": "l",
                            "ḻ": "l",
                            "ſ": "l",
                            "ł": "l",
                            "ƚ": "l",
                            "ɫ": "l",
                            "ⱡ": "l",
                            "ꝉ": "l",
                            "ꞁ": "l",
                            "ꝇ": "l",
                            "ǉ": "lj",
                            "ⓜ": "m",
                            "ｍ": "m",
                            "ḿ": "m",
                            "ṁ": "m",
                            "ṃ": "m",
                            "ɱ": "m",
                            "ɯ": "m",
                            "ⓝ": "n",
                            "ｎ": "n",
                            "ǹ": "n",
                            "ń": "n",
                            "ñ": "n",
                            "ṅ": "n",
                            "ň": "n",
                            "ṇ": "n",
                            "ņ": "n",
                            "ṋ": "n",
                            "ṉ": "n",
                            "ƞ": "n",
                            "ɲ": "n",
                            "ŉ": "n",
                            "ꞑ": "n",
                            "ꞥ": "n",
                            "ǌ": "nj",
                            "ⓞ": "o",
                            "ｏ": "o",
                            "ò": "o",
                            "ó": "o",
                            "ô": "o",
                            "ồ": "o",
                            "ố": "o",
                            "ỗ": "o",
                            "ổ": "o",
                            "õ": "o",
                            "ṍ": "o",
                            "ȭ": "o",
                            "ṏ": "o",
                            "ō": "o",
                            "ṑ": "o",
                            "ṓ": "o",
                            "ŏ": "o",
                            "ȯ": "o",
                            "ȱ": "o",
                            "ö": "o",
                            "ȫ": "o",
                            "ỏ": "o",
                            "ő": "o",
                            "ǒ": "o",
                            "ȍ": "o",
                            "ȏ": "o",
                            "ơ": "o",
                            "ờ": "o",
                            "ớ": "o",
                            "ỡ": "o",
                            "ở": "o",
                            "ợ": "o",
                            "ọ": "o",
                            "ộ": "o",
                            "ǫ": "o",
                            "ǭ": "o",
                            "ø": "o",
                            "ǿ": "o",
                            "ɔ": "o",
                            "ꝋ": "o",
                            "ꝍ": "o",
                            "ɵ": "o",
                            "ƣ": "oi",
                            "ȣ": "ou",
                            "ꝏ": "oo",
                            "ⓟ": "p",
                            "ｐ": "p",
                            "ṕ": "p",
                            "ṗ": "p",
                            "ƥ": "p",
                            "ᵽ": "p",
                            "ꝑ": "p",
                            "ꝓ": "p",
                            "ꝕ": "p",
                            "ⓠ": "q",
                            "ｑ": "q",
                            "ɋ": "q",
                            "ꝗ": "q",
                            "ꝙ": "q",
                            "ⓡ": "r",
                            "ｒ": "r",
                            "ŕ": "r",
                            "ṙ": "r",
                            "ř": "r",
                            "ȑ": "r",
                            "ȓ": "r",
                            "ṛ": "r",
                            "ṝ": "r",
                            "ŗ": "r",
                            "ṟ": "r",
                            "ɍ": "r",
                            "ɽ": "r",
                            "ꝛ": "r",
                            "ꞧ": "r",
                            "ꞃ": "r",
                            "ⓢ": "s",
                            "ｓ": "s",
                            "ß": "s",
                            "ś": "s",
                            "ṥ": "s",
                            "ŝ": "s",
                            "ṡ": "s",
                            "š": "s",
                            "ṧ": "s",
                            "ṣ": "s",
                            "ṩ": "s",
                            "ș": "s",
                            "ş": "s",
                            "ȿ": "s",
                            "ꞩ": "s",
                            "ꞅ": "s",
                            "ẛ": "s",
                            "ⓣ": "t",
                            "ｔ": "t",
                            "ṫ": "t",
                            "ẗ": "t",
                            "ť": "t",
                            "ṭ": "t",
                            "ț": "t",
                            "ţ": "t",
                            "ṱ": "t",
                            "ṯ": "t",
                            "ŧ": "t",
                            "ƭ": "t",
                            "ʈ": "t",
                            "ⱦ": "t",
                            "ꞇ": "t",
                            "ꜩ": "tz",
                            "ⓤ": "u",
                            "ｕ": "u",
                            "ù": "u",
                            "ú": "u",
                            "û": "u",
                            "ũ": "u",
                            "ṹ": "u",
                            "ū": "u",
                            "ṻ": "u",
                            "ŭ": "u",
                            "ü": "u",
                            "ǜ": "u",
                            "ǘ": "u",
                            "ǖ": "u",
                            "ǚ": "u",
                            "ủ": "u",
                            "ů": "u",
                            "ű": "u",
                            "ǔ": "u",
                            "ȕ": "u",
                            "ȗ": "u",
                            "ư": "u",
                            "ừ": "u",
                            "ứ": "u",
                            "ữ": "u",
                            "ử": "u",
                            "ự": "u",
                            "ụ": "u",
                            "ṳ": "u",
                            "ų": "u",
                            "ṷ": "u",
                            "ṵ": "u",
                            "ʉ": "u",
                            "ⓥ": "v",
                            "ｖ": "v",
                            "ṽ": "v",
                            "ṿ": "v",
                            "ʋ": "v",
                            "ꝟ": "v",
                            "ʌ": "v",
                            "ꝡ": "vy",
                            "ⓦ": "w",
                            "ｗ": "w",
                            "ẁ": "w",
                            "ẃ": "w",
                            "ŵ": "w",
                            "ẇ": "w",
                            "ẅ": "w",
                            "ẘ": "w",
                            "ẉ": "w",
                            "ⱳ": "w",
                            "ⓧ": "x",
                            "ｘ": "x",
                            "ẋ": "x",
                            "ẍ": "x",
                            "ⓨ": "y",
                            "ｙ": "y",
                            "ỳ": "y",
                            "ý": "y",
                            "ŷ": "y",
                            "ỹ": "y",
                            "ȳ": "y",
                            "ẏ": "y",
                            "ÿ": "y",
                            "ỷ": "y",
                            "ẙ": "y",
                            "ỵ": "y",
                            "ƴ": "y",
                            "ɏ": "y",
                            "ỿ": "y",
                            "ⓩ": "z",
                            "ｚ": "z",
                            "ź": "z",
                            "ẑ": "z",
                            "ż": "z",
                            "ž": "z",
                            "ẓ": "z",
                            "ẕ": "z",
                            "ƶ": "z",
                            "ȥ": "z",
                            "ɀ": "z",
                            "ⱬ": "z",
                            "ꝣ": "z",
                            "Ά": "Α",
                            "Έ": "Ε",
                            "Ή": "Η",
                            "Ί": "Ι",
                            "Ϊ": "Ι",
                            "Ό": "Ο",
                            "Ύ": "Υ",
                            "Ϋ": "Υ",
                            "Ώ": "Ω",
                            "ά": "α",
                            "έ": "ε",
                            "ή": "η",
                            "ί": "ι",
                            "ϊ": "ι",
                            "ΐ": "ι",
                            "ό": "ο",
                            "ύ": "υ",
                            "ϋ": "υ",
                            "ΰ": "υ",
                            "ω": "ω",
                            "ς": "σ"
                        };
                        return a
                    }), b.define("select2/data/base", ["../utils"], function(a) {
                        function b(a, c) { b.__super__.constructor.call(this) }
                        return a.Extend(b, a.Observable), b.prototype.current = function(a) { throw new Error("The `current` method must be defined in child classes.") }, b.prototype.query = function(a, b) { throw new Error("The `query` method must be defined in child classes.") }, b.prototype.bind = function(a, b) {}, b.prototype.destroy = function() {}, b.prototype.generateResultId = function(b, c) { var d = b.id + "-result-"; return d += a.generateChars(4), d += null != c.id ? "-" + c.id.toString() : "-" + a.generateChars(4) }, b
                    }), b.define("select2/data/select", ["./base", "../utils", "jquery"], function(a, b, c) {
                        function d(a, b) { this.$element = a, this.options = b, d.__super__.constructor.call(this) }
                        return b.Extend(d, a), d.prototype.current = function(a) {
                            var b = [],
                                d = this;
                            this.$element.find(":selected").each(function() {
                                var a = c(this),
                                    e = d.item(a);
                                b.push(e)
                            }), a(b)
                        }, d.prototype.select = function(a) {
                            var b = this;
                            if (a.selected = !0, c(a.element).is("option")) return a.element.selected = !0, void this.$element.trigger("change");
                            if (this.$element.prop("multiple")) this.current(function(d) {
                                var e = [];
                                a = [a], a.push.apply(a, d);
                                for (var f = 0; f < a.length; f++) { var g = a[f].id; - 1 === c.inArray(g, e) && e.push(g) }
                                b.$element.val(e), b.$element.trigger("change")
                            });
                            else {
                                var d = a.id;
                                this.$element.val(d), this.$element.trigger("change")
                            }
                        }, d.prototype.unselect = function(a) {
                            var b = this;
                            if (this.$element.prop("multiple")) return a.selected = !1, c(a.element).is("option") ? (a.element.selected = !1, void this.$element.trigger("change")) : void this.current(function(d) {
                                for (var e = [], f = 0; f < d.length; f++) {
                                    var g = d[f].id;
                                    g !== a.id && -1 === c.inArray(g, e) && e.push(g)
                                }
                                b.$element.val(e), b.$element.trigger("change")
                            })
                        }, d.prototype.bind = function(a, b) {
                            var c = this;
                            this.container = a, a.on("select", function(a) { c.select(a.data) }), a.on("unselect", function(a) { c.unselect(a.data) })
                        }, d.prototype.destroy = function() { this.$element.find("*").each(function() { c.removeData(this, "data") }) }, d.prototype.query = function(a, b) {
                            var d = [],
                                e = this,
                                f = this.$element.children();
                            f.each(function() {
                                var b = c(this);
                                if (b.is("option") || b.is("optgroup")) {
                                    var f = e.item(b),
                                        g = e.matches(a, f);
                                    null !== g && d.push(g)
                                }
                            }), b({ results: d })
                        }, d.prototype.addOptions = function(a) { b.appendMany(this.$element, a) }, d.prototype.option = function(a) {
                            var b;
                            a.children ? (b = document.createElement("optgroup"), b.label = a.text) : (b = document.createElement("option"), void 0 !== b.textContent ? b.textContent = a.text : b.innerText = a.text), a.id && (b.value = a.id), a.disabled && (b.disabled = !0), a.selected && (b.selected = !0), a.title && (b.title = a.title);
                            var d = c(b),
                                e = this._normalizeItem(a);
                            return e.element = b, c.data(b, "data", e), d
                        }, d.prototype.item = function(a) {
                            var b = {};
                            if (b = c.data(a[0], "data"), null != b) return b;
                            if (a.is("option")) b = { id: a.val(), text: a.text(), disabled: a.prop("disabled"), selected: a.prop("selected"), title: a.prop("title") };
                            else if (a.is("optgroup")) {
                                b = { text: a.prop("label"), children: [], title: a.prop("title") };
                                for (var d = a.children("option"), e = [], f = 0; f < d.length; f++) {
                                    var g = c(d[f]),
                                        h = this.item(g);
                                    e.push(h)
                                }
                                b.children = e
                            }
                            return b = this._normalizeItem(b), b.element = a[0], c.data(a[0], "data", b), b
                        }, d.prototype._normalizeItem = function(a) { c.isPlainObject(a) || (a = { id: a, text: a }), a = c.extend({}, { text: "" }, a); var b = { selected: !1, disabled: !1 }; return null != a.id && (a.id = a.id.toString()), null != a.text && (a.text = a.text.toString()), null == a._resultId && a.id && null != this.container && (a._resultId = this.generateResultId(this.container, a)), c.extend({}, b, a) }, d.prototype.matches = function(a, b) { var c = this.options.get("matcher"); return c(a, b) }, d
                    }), b.define("select2/data/array", ["./select", "../utils", "jquery"], function(a, b, c) {
                        function d(a, b) {
                            var c = b.get("data") || [];
                            d.__super__.constructor.call(this, a, b), this.addOptions(this.convertToOptions(c))
                        }
                        return b.Extend(d, a), d.prototype.select = function(a) {
                            var b = this.$element.find("option").filter(function(b, c) { return c.value == a.id.toString() });
                            0 === b.length && (b = this.option(a), this.addOptions(b)), d.__super__.select.call(this, a)
                        }, d.prototype.convertToOptions = function(a) {
                            function d(a) { return function() { return c(this).val() == a.id } }
                            for (var e = this, f = this.$element.find("option"), g = f.map(function() { return e.item(c(this)).id }).get(), h = [], i = 0; i < a.length; i++) {
                                var j = this._normalizeItem(a[i]);
                                if (c.inArray(j.id, g) >= 0) {
                                    var k = f.filter(d(j)),
                                        l = this.item(k),
                                        m = c.extend(!0, {}, j, l),
                                        n = this.option(m);
                                    k.replaceWith(n)
                                } else {
                                    var o = this.option(j);
                                    if (j.children) {
                                        var p = this.convertToOptions(j.children);
                                        b.appendMany(o, p)
                                    }
                                    h.push(o)
                                }
                            }
                            return h
                        }, d
                    }), b.define("select2/data/ajax", ["./array", "../utils", "jquery"], function(a, b, c) {
                        function d(a, b) { this.ajaxOptions = this._applyDefaults(b.get("ajax")), null != this.ajaxOptions.processResults && (this.processResults = this.ajaxOptions.processResults), d.__super__.constructor.call(this, a, b) }
                        return b.Extend(d, a), d.prototype._applyDefaults = function(a) { var b = { data: function(a) { return c.extend({}, a, { q: a.term }) }, transport: function(a, b, d) { var e = c.ajax(a); return e.then(b), e.fail(d), e } }; return c.extend({}, b, a, !0) }, d.prototype.processResults = function(a) { return a }, d.prototype.query = function(a, b) {
                            function d() {
                                var d = f.transport(f, function(d) {
                                    var f = e.processResults(d, a);
                                    e.options.get("debug") && window.console && console.error && (f && f.results && c.isArray(f.results) || console.error("Select2: The AJAX results did not return an array in the `results` key of the response.")), b(f)
                                }, function() { d.status && "0" === d.status || e.trigger("results:message", { message: "errorLoading" }) });
                                e._request = d
                            }
                            var e = this;
                            null != this._request && (c.isFunction(this._request.abort) && this._request.abort(), this._request = null);
                            var f = c.extend({ type: "GET" }, this.ajaxOptions);
                            "function" == typeof f.url && (f.url = f.url.call(this.$element, a)), "function" == typeof f.data && (f.data = f.data.call(this.$element, a)), this.ajaxOptions.delay && null != a.term ? (this._queryTimeout && window.clearTimeout(this._queryTimeout), this._queryTimeout = window.setTimeout(d, this.ajaxOptions.delay)) : d()
                        }, d
                    }), b.define("select2/data/tags", ["jquery"], function(a) {
                        function b(b, c, d) {
                            var e = d.get("tags"),
                                f = d.get("createTag");
                            void 0 !== f && (this.createTag = f);
                            var g = d.get("insertTag");
                            if (void 0 !== g && (this.insertTag = g), b.call(this, c, d), a.isArray(e))
                                for (var h = 0; h < e.length; h++) {
                                    var i = e[h],
                                        j = this._normalizeItem(i),
                                        k = this.option(j);
                                    this.$element.append(k)
                                }
                        }
                        return b.prototype.query = function(a, b, c) {
                            function d(a, f) {
                                for (var g = a.results, h = 0; h < g.length; h++) {
                                    var i = g[h],
                                        j = null != i.children && !d({ results: i.children }, !0),
                                        k = i.text === b.term;
                                    if (k || j) return !f && (a.data = g, void c(a))
                                }
                                if (f) return !0;
                                var l = e.createTag(b);
                                if (null != l) {
                                    var m = e.option(l);
                                    m.attr("data-select2-tag", !0), e.addOptions([m]), e.insertTag(g, l)
                                }
                                a.results = g, c(a)
                            }
                            var e = this;
                            return this._removeOldTags(), null == b.term || null != b.page ? void a.call(this, b, c) : void a.call(this, b, d)
                        }, b.prototype.createTag = function(b, c) { var d = a.trim(c.term); return "" === d ? null : { id: d, text: d } }, b.prototype.insertTag = function(a, b, c) { b.unshift(c) }, b.prototype._removeOldTags = function(b) {
                            var c = (this._lastTag, this.$element.find("option[data-select2-tag]"));
                            c.each(function() { this.selected || a(this).remove() })
                        }, b
                    }), b.define("select2/data/tokenizer", ["jquery"], function(a) {
                        function b(a, b, c) {
                            var d = c.get("tokenizer");
                            void 0 !== d && (this.tokenizer = d), a.call(this, b, c)
                        }
                        return b.prototype.bind = function(a, b, c) { a.call(this, b, c), this.$search = b.dropdown.$search || b.selection.$search || c.find(".select2-search__field") }, b.prototype.query = function(b, c, d) {
                            function e(b) {
                                var c = g._normalizeItem(b),
                                    d = g.$element.find("option").filter(function() { return a(this).val() === c.id });
                                if (!d.length) {
                                    var e = g.option(c);
                                    e.attr("data-select2-tag", !0), g._removeOldTags(), g.addOptions([e])
                                }
                                f(c)
                            }

                            function f(a) { g.trigger("select", { data: a }) }
                            var g = this;
                            c.term = c.term || "";
                            var h = this.tokenizer(c, this.options, e);
                            h.term !== c.term && (this.$search.length && (this.$search.val(h.term), this.$search.focus()), c.term = h.term), b.call(this, c, d)
                        }, b.prototype.tokenizer = function(b, c, d, e) {
                            for (var f = d.get("tokenSeparators") || [], g = c.term, h = 0, i = this.createTag || function(a) { return { id: a.term, text: a.term } }; h < g.length;) {
                                var j = g[h];
                                if (-1 !== a.inArray(j, f)) {
                                    var k = g.substr(0, h),
                                        l = a.extend({}, c, { term: k }),
                                        m = i(l);
                                    null != m ? (e(m), g = g.substr(h + 1) || "", h = 0) : h++
                                } else h++
                            }
                            return { term: g }
                        }, b
                    }), b.define("select2/data/minimumInputLength", [], function() {
                        function a(a, b, c) { this.minimumInputLength = c.get("minimumInputLength"), a.call(this, b, c) }
                        return a.prototype.query = function(a, b, c) { return b.term = b.term || "", b.term.length < this.minimumInputLength ? void this.trigger("results:message", { message: "inputTooShort", args: { minimum: this.minimumInputLength, input: b.term, params: b } }) : void a.call(this, b, c) }, a
                    }), b.define("select2/data/maximumInputLength", [], function() {
                        function a(a, b, c) { this.maximumInputLength = c.get("maximumInputLength"), a.call(this, b, c) }
                        return a.prototype.query = function(a, b, c) { return b.term = b.term || "", this.maximumInputLength > 0 && b.term.length > this.maximumInputLength ? void this.trigger("results:message", { message: "inputTooLong", args: { maximum: this.maximumInputLength, input: b.term, params: b } }) : void a.call(this, b, c) }, a
                    }), b.define("select2/data/maximumSelectionLength", [], function() {
                        function a(a, b, c) { this.maximumSelectionLength = c.get("maximumSelectionLength"), a.call(this, b, c) }
                        return a.prototype.query = function(a, b, c) {
                            var d = this;
                            this.current(function(e) { var f = null != e ? e.length : 0; return d.maximumSelectionLength > 0 && f >= d.maximumSelectionLength ? void d.trigger("results:message", { message: "maximumSelected", args: { maximum: d.maximumSelectionLength } }) : void a.call(d, b, c) })
                        }, a
                    }), b.define("select2/dropdown", ["jquery", "./utils"], function(a, b) {
                        function c(a, b) { this.$element = a, this.options = b, c.__super__.constructor.call(this) }
                        return b.Extend(c, b.Observable), c.prototype.render = function() { var b = a('<span class="select2-dropdown"><span class="select2-results"></span></span>'); return b.attr("dir", this.options.get("dir")), this.$dropdown = b, b }, c.prototype.bind = function() {}, c.prototype.position = function(a, b) {}, c.prototype.destroy = function() { this.$dropdown.remove() }, c
                    }), b.define("select2/dropdown/search", ["jquery", "../utils"], function(a, b) {
                        function c() {}
                        return c.prototype.render = function(b) {
                            var c = b.call(this),
                                d = a('<span class="select2-search select2-search--dropdown"><input class="select2-search__field" type="search" tabindex="-1" autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false" role="textbox" /></span>');
                            return this.$searchContainer = d, this.$search = d.find("input"), c.prepend(d), c
                        }, c.prototype.bind = function(b, c, d) {
                            var e = this;
                            b.call(this, c, d), this.$search.on("keydown", function(a) { e.trigger("keypress", a), e._keyUpPrevented = a.isDefaultPrevented() }), this.$search.on("input", function(b) { a(this).off("keyup") }), this.$search.on("keyup input", function(a) { e.handleSearch(a) }), c.on("open", function() { e.$search.attr("tabindex", 0), e.$search.focus(), window.setTimeout(function() { e.$search.focus() }, 0) }), c.on("close", function() { e.$search.attr("tabindex", -1), e.$search.val("") }), c.on("focus", function() { c.isOpen() && e.$search.focus() }), c.on("results:all", function(a) {
                                if (null == a.query.term || "" === a.query.term) {
                                    var b = e.showSearch(a);
                                    b ? e.$searchContainer.removeClass("select2-search--hide") : e.$searchContainer.addClass("select2-search--hide")
                                }
                            })
                        }, c.prototype.handleSearch = function(a) {
                            if (!this._keyUpPrevented) {
                                var b = this.$search.val();
                                this.trigger("query", { term: b })
                            }
                            this._keyUpPrevented = !1
                        }, c.prototype.showSearch = function(a, b) { return !0 }, c
                    }), b.define("select2/dropdown/hidePlaceholder", [], function() {
                        function a(a, b, c, d) { this.placeholder = this.normalizePlaceholder(c.get("placeholder")), a.call(this, b, c, d) }
                        return a.prototype.append = function(a, b) { b.results = this.removePlaceholder(b.results), a.call(this, b) }, a.prototype.normalizePlaceholder = function(a, b) { return "string" == typeof b && (b = { id: "", text: b }), b }, a.prototype.removePlaceholder = function(a, b) {
                            for (var c = b.slice(0), d = b.length - 1; d >= 0; d--) {
                                var e = b[d];
                                this.placeholder.id === e.id && c.splice(d, 1)
                            }
                            return c
                        }, a
                    }), b.define("select2/dropdown/infiniteScroll", ["jquery"], function(a) {
                        function b(a, b, c, d) { this.lastParams = {}, a.call(this, b, c, d), this.$loadingMore = this.createLoadingMore(), this.loading = !1 }
                        return b.prototype.append = function(a, b) { this.$loadingMore.remove(), this.loading = !1, a.call(this, b), this.showLoadingMore(b) && this.$results.append(this.$loadingMore) }, b.prototype.bind = function(b, c, d) {
                            var e = this;
                            b.call(this, c, d), c.on("query", function(a) { e.lastParams = a, e.loading = !0 }), c.on("query:append", function(a) { e.lastParams = a, e.loading = !0 }), this.$results.on("scroll", function() {
                                var b = a.contains(document.documentElement, e.$loadingMore[0]);
                                if (!e.loading && b) {
                                    var c = e.$results.offset().top + e.$results.outerHeight(!1),
                                        d = e.$loadingMore.offset().top + e.$loadingMore.outerHeight(!1);
                                    c + 50 >= d && e.loadMore()
                                }
                            })
                        }, b.prototype.loadMore = function() {
                            this.loading = !0;
                            var b = a.extend({}, { page: 1 }, this.lastParams);
                            b.page++, this.trigger("query:append", b)
                        }, b.prototype.showLoadingMore = function(a, b) { return b.pagination && b.pagination.more }, b.prototype.createLoadingMore = function() {
                            var b = a('<li class="select2-results__option select2-results__option--load-more"role="treeitem" aria-disabled="true"></li>'),
                                c = this.options.get("translations").get("loadingMore");
                            return b.html(c(this.lastParams)), b
                        }, b
                    }), b.define("select2/dropdown/attachBody", ["jquery", "../utils"], function(a, b) {
                        function c(b, c, d) { this.$dropdownParent = d.get("dropdownParent") || a(document.body), b.call(this, c, d) }
                        return c.prototype.bind = function(a, b, c) {
                            var d = this,
                                e = !1;
                            a.call(this, b, c), b.on("open", function() { d._showDropdown(), d._attachPositioningHandler(b), e || (e = !0, b.on("results:all", function() { d._positionDropdown(), d._resizeDropdown() }), b.on("results:append", function() { d._positionDropdown(), d._resizeDropdown() })) }), b.on("close", function() { d._hideDropdown(), d._detachPositioningHandler(b) }), this.$dropdownContainer.on("mousedown", function(a) { a.stopPropagation() })
                        }, c.prototype.destroy = function(a) { a.call(this), this.$dropdownContainer.remove() }, c.prototype.position = function(a, b, c) { b.attr("class", c.attr("class")), b.removeClass("select2"), b.addClass("select2-container--open"), b.css({ position: "absolute", top: -999999 }), this.$container = c }, c.prototype.render = function(b) {
                            var c = a("<span></span>"),
                                d = b.call(this);
                            return c.append(d), this.$dropdownContainer = c, c
                        }, c.prototype._hideDropdown = function(a) { this.$dropdownContainer.detach() }, c.prototype._attachPositioningHandler = function(c, d) {
                            var e = this,
                                f = "scroll.select2." + d.id,
                                g = "resize.select2." + d.id,
                                h = "orientationchange.select2." + d.id,
                                i = this.$container.parents().filter(b.hasScroll);
                            i.each(function() { a(this).data("select2-scroll-position", { x: a(this).scrollLeft(), y: a(this).scrollTop() }) }), i.on(f, function(b) {
                                var c = a(this).data("select2-scroll-position");
                                a(this).scrollTop(c.y)
                            }), a(window).on(f + " " + g + " " + h, function(a) { e._positionDropdown(), e._resizeDropdown() })
                        }, c.prototype._detachPositioningHandler = function(c, d) {
                            var e = "scroll.select2." + d.id,
                                f = "resize.select2." + d.id,
                                g = "orientationchange.select2." + d.id,
                                h = this.$container.parents().filter(b.hasScroll);
                            h.off(e), a(window).off(e + " " + f + " " + g)
                        }, c.prototype._positionDropdown = function() {
                            var b = a(window),
                                c = this.$dropdown.hasClass("select2-dropdown--above"),
                                d = this.$dropdown.hasClass("select2-dropdown--below"),
                                e = null,
                                f = this.$container.offset();
                            f.bottom = f.top + this.$container.outerHeight(!1);
                            var g = { height: this.$container.outerHeight(!1) };
                            g.top = f.top, g.bottom = f.top + g.height;
                            var h = { height: this.$dropdown.outerHeight(!1) },
                                i = { top: b.scrollTop(), bottom: b.scrollTop() + b.height() },
                                j = i.top < f.top - h.height,
                                k = i.bottom > f.bottom + h.height,
                                l = { left: f.left, top: g.bottom },
                                m = this.$dropdownParent;
                            "static" === m.css("position") && (m = m.offsetParent());
                            var n = m.offset();
                            l.top -= n.top, l.left -= n.left, c || d || (e = "below"), k || !j || c ? !j && k && c && (e = "below") : e = "above", ("above" == e || c && "below" !== e) && (l.top = g.top - n.top - h.height), null != e && (this.$dropdown.removeClass("select2-dropdown--below select2-dropdown--above").addClass("select2-dropdown--" + e), this.$container.removeClass("select2-container--below select2-container--above").addClass("select2-container--" + e)), this.$dropdownContainer.css(l)
                        }, c.prototype._resizeDropdown = function() {
                            var a = { width: this.$container.outerWidth(!1) + "px" };
                            this.options.get("dropdownAutoWidth") && (a.minWidth = a.width, a.position = "relative", a.width = "auto"), this.$dropdown.css(a)
                        }, c.prototype._showDropdown = function(a) { this.$dropdownContainer.appendTo(this.$dropdownParent), this._positionDropdown(), this._resizeDropdown() }, c
                    }), b.define("select2/dropdown/minimumResultsForSearch", [], function() {
                        function a(b) {
                            for (var c = 0, d = 0; d < b.length; d++) {
                                var e = b[d];
                                e.children ? c += a(e.children) : c++
                            }
                            return c
                        }

                        function b(a, b, c, d) { this.minimumResultsForSearch = c.get("minimumResultsForSearch"), this.minimumResultsForSearch < 0 && (this.minimumResultsForSearch = 1 / 0), a.call(this, b, c, d) }
                        return b.prototype.showSearch = function(b, c) { return !(a(c.data.results) < this.minimumResultsForSearch) && b.call(this, c) }, b
                    }), b.define("select2/dropdown/selectOnClose", [], function() {
                        function a() {}
                        return a.prototype.bind = function(a, b, c) {
                            var d = this;
                            a.call(this, b, c), b.on("close", function(a) { d._handleSelectOnClose(a) })
                        }, a.prototype._handleSelectOnClose = function(a, b) {
                            if (b && null != b.originalSelect2Event) { var c = b.originalSelect2Event; if ("select" === c._type || "unselect" === c._type) return }
                            var d = this.getHighlightedResults();
                            if (!(d.length < 1)) {
                                var e = d.data("data");
                                null != e.element && e.element.selected || null == e.element && e.selected || this.trigger("select", { data: e })
                            }
                        }, a
                    }), b.define("select2/dropdown/closeOnSelect", [], function() {
                        function a() {}
                        return a.prototype.bind = function(a, b, c) {
                            var d = this;
                            a.call(this, b, c), b.on("select", function(a) { d._selectTriggered(a) }), b.on("unselect", function(a) { d._selectTriggered(a) })
                        }, a.prototype._selectTriggered = function(a, b) {
                            var c = b.originalEvent;
                            c && c.ctrlKey || this.trigger("close", { originalEvent: c, originalSelect2Event: b })
                        }, a
                    }), b.define("select2/i18n/en", [], function() {
                        return {
                            errorLoading: function() { return "The results could not be loaded." },
                            inputTooLong: function(a) {
                                var b = a.input.length - a.maximum,
                                    c = "Please delete " + b + " character";
                                return 1 != b && (c += "s"), c
                            },
                            inputTooShort: function(a) {
                                var b = a.minimum - a.input.length,
                                    c = "Please enter " + b + " or more characters";
                                return c
                            },
                            loadingMore: function() { return "Loading more results…" },
                            maximumSelected: function(a) { var b = "You can only select " + a.maximum + " item"; return 1 != a.maximum && (b += "s"), b },
                            noResults: function() { return "No results found" },
                            searching: function() { return "Searching…" }
                        }
                    }), b.define("select2/defaults", ["jquery", "require", "./results", "./selection/single", "./selection/multiple", "./selection/placeholder", "./selection/allowClear", "./selection/search", "./selection/eventRelay", "./utils", "./translation", "./diacritics", "./data/select", "./data/array", "./data/ajax", "./data/tags", "./data/tokenizer", "./data/minimumInputLength", "./data/maximumInputLength", "./data/maximumSelectionLength", "./dropdown", "./dropdown/search", "./dropdown/hidePlaceholder", "./dropdown/infiniteScroll", "./dropdown/attachBody", "./dropdown/minimumResultsForSearch", "./dropdown/selectOnClose", "./dropdown/closeOnSelect", "./i18n/en"], function(a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v, w, x, y, z, A, B, C) {
                        function D() { this.reset() }
                        D.prototype.apply = function(l) {
                            if (l = a.extend(!0, {}, this.defaults, l), null == l.dataAdapter) {
                                if (null != l.ajax ? l.dataAdapter = o : null != l.data ? l.dataAdapter = n : l.dataAdapter = m, l.minimumInputLength > 0 && (l.dataAdapter = j.Decorate(l.dataAdapter, r)), l.maximumInputLength > 0 && (l.dataAdapter = j.Decorate(l.dataAdapter, s)), l.maximumSelectionLength > 0 && (l.dataAdapter = j.Decorate(l.dataAdapter, t)), l.tags && (l.dataAdapter = j.Decorate(l.dataAdapter, p)), (null != l.tokenSeparators || null != l.tokenizer) && (l.dataAdapter = j.Decorate(l.dataAdapter, q)), null != l.query) {
                                    var C = b(l.amdBase + "compat/query");
                                    l.dataAdapter = j.Decorate(l.dataAdapter, C)
                                }
                                if (null != l.initSelection) {
                                    var D = b(l.amdBase + "compat/initSelection");
                                    l.dataAdapter = j.Decorate(l.dataAdapter, D)
                                }
                            }
                            if (null == l.resultsAdapter && (l.resultsAdapter = c, null != l.ajax && (l.resultsAdapter = j.Decorate(l.resultsAdapter, x)), null != l.placeholder && (l.resultsAdapter = j.Decorate(l.resultsAdapter, w)), l.selectOnClose && (l.resultsAdapter = j.Decorate(l.resultsAdapter, A))), null == l.dropdownAdapter) {
                                if (l.multiple) l.dropdownAdapter = u;
                                else {
                                    var E = j.Decorate(u, v);
                                    l.dropdownAdapter = E
                                }
                                if (0 !== l.minimumResultsForSearch && (l.dropdownAdapter = j.Decorate(l.dropdownAdapter, z)), l.closeOnSelect && (l.dropdownAdapter = j.Decorate(l.dropdownAdapter, B)), null != l.dropdownCssClass || null != l.dropdownCss || null != l.adaptDropdownCssClass) {
                                    var F = b(l.amdBase + "compat/dropdownCss");
                                    l.dropdownAdapter = j.Decorate(l.dropdownAdapter, F)
                                }
                                l.dropdownAdapter = j.Decorate(l.dropdownAdapter, y)
                            }
                            if (null == l.selectionAdapter) {
                                if (l.multiple ? l.selectionAdapter = e : l.selectionAdapter = d, null != l.placeholder && (l.selectionAdapter = j.Decorate(l.selectionAdapter, f)), l.allowClear && (l.selectionAdapter = j.Decorate(l.selectionAdapter, g)), l.multiple && (l.selectionAdapter = j.Decorate(l.selectionAdapter, h)), null != l.containerCssClass || null != l.containerCss || null != l.adaptContainerCssClass) {
                                    var G = b(l.amdBase + "compat/containerCss");
                                    l.selectionAdapter = j.Decorate(l.selectionAdapter, G)
                                }
                                l.selectionAdapter = j.Decorate(l.selectionAdapter, i)
                            }
                            if ("string" == typeof l.language)
                                if (l.language.indexOf("-") > 0) {
                                    var H = l.language.split("-"),
                                        I = H[0];
                                    l.language = [l.language, I]
                                } else l.language = [l.language];
                            if (a.isArray(l.language)) {
                                var J = new k;
                                l.language.push("en");
                                for (var K = l.language, L = 0; L < K.length; L++) {
                                    var M = K[L],
                                        N = {};
                                    try { N = k.loadPath(M) } catch (O) { try { M = this.defaults.amdLanguageBase + M, N = k.loadPath(M) } catch (P) { l.debug && window.console && console.warn && console.warn('Select2: The language file for "' + M + '" could not be automatically loaded. A fallback will be used instead.'); continue } }
                                    J.extend(N)
                                }
                                l.translations = J
                            } else {
                                var Q = k.loadPath(this.defaults.amdLanguageBase + "en"),
                                    R = new k(l.language);
                                R.extend(Q), l.translations = R
                            }
                            return l
                        }, D.prototype.reset = function() {
                            function b(a) {
                                function b(a) { return l[a] || a }
                                return a.replace(/[^\u0000-\u007E]/g, b)
                            }

                            function c(d, e) {
                                if ("" === a.trim(d.term)) return e;
                                if (e.children && e.children.length > 0) {
                                    for (var f = a.extend(!0, {}, e), g = e.children.length - 1; g >= 0; g--) {
                                        var h = e.children[g],
                                            i = c(d, h);
                                        null == i && f.children.splice(g, 1)
                                    }
                                    return f.children.length > 0 ? f : c(d, f)
                                }
                                var j = b(e.text).toUpperCase(),
                                    k = b(d.term).toUpperCase();
                                return j.indexOf(k) > -1 ? e : null
                            }
                            this.defaults = { amdBase: "./", amdLanguageBase: "./i18n/", closeOnSelect: !0, debug: !1, dropdownAutoWidth: !1, escapeMarkup: j.escapeMarkup, language: C, matcher: c, minimumInputLength: 0, maximumInputLength: 0, maximumSelectionLength: 0, minimumResultsForSearch: 0, selectOnClose: !1, sorter: function(a) { return a }, templateResult: function(a) { return a.text }, templateSelection: function(a) { return a.text }, theme: "default", width: "resolve" }
                        }, D.prototype.set = function(b, c) {
                            var d = a.camelCase(b),
                                e = {};
                            e[d] = c;
                            var f = j._convertData(e);
                            a.extend(this.defaults, f)
                        };
                        var E = new D;
                        return E
                    }), b.define("select2/options", ["require", "jquery", "./defaults", "./utils"], function(a, b, c, d) {
                        function e(b, e) {
                            if (this.options = b, null != e && this.fromElement(e), this.options = c.apply(this.options), e && e.is("input")) {
                                var f = a(this.get("amdBase") + "compat/inputData");
                                this.options.dataAdapter = d.Decorate(this.options.dataAdapter, f)
                            }
                        }
                        return e.prototype.fromElement = function(a) {
                            var c = ["select2"];
                            null == this.options.multiple && (this.options.multiple = a.prop("multiple")), null == this.options.disabled && (this.options.disabled = a.prop("disabled")), null == this.options.language && (a.prop("lang") ? this.options.language = a.prop("lang").toLowerCase() : a.closest("[lang]").prop("lang") && (this.options.language = a.closest("[lang]").prop("lang"))), null == this.options.dir && (a.prop("dir") ? this.options.dir = a.prop("dir") : a.closest("[dir]").prop("dir") ? this.options.dir = a.closest("[dir]").prop("dir") : this.options.dir = "ltr"), a.prop("disabled", this.options.disabled), a.prop("multiple", this.options.multiple), a.data("select2Tags") && (this.options.debug && window.console && console.warn && console.warn('Select2: The `data-select2-tags` attribute has been changed to use the `data-data` and `data-tags="true"` attributes and will be removed in future versions of Select2.'), a.data("data", a.data("select2Tags")), a.data("tags", !0)), a.data("ajaxUrl") && (this.options.debug && window.console && console.warn && console.warn("Select2: The `data-ajax-url` attribute has been changed to `data-ajax--url` and support for the old attribute will be removed in future versions of Select2."), a.attr("ajax--url", a.data("ajaxUrl")), a.data("ajax--url", a.data("ajaxUrl")));
                            var e = {};
                            e = b.fn.jquery && "1." == b.fn.jquery.substr(0, 2) && a[0].dataset ? b.extend(!0, {}, a[0].dataset, a.data()) : a.data();
                            var f = b.extend(!0, {}, e);
                            f = d._convertData(f);
                            for (var g in f) b.inArray(g, c) > -1 || (b.isPlainObject(this.options[g]) ? b.extend(this.options[g], f[g]) : this.options[g] = f[g]);
                            return this
                        }, e.prototype.get = function(a) { return this.options[a] }, e.prototype.set = function(a, b) { this.options[a] = b }, e
                    }), b.define("select2/core", ["jquery", "./options", "./utils", "./keys"], function(a, b, c, d) {
                        var e = function(a, c) {
                            null != a.data("select2") && a.data("select2").destroy(), this.$element = a, this.id = this._generateId(a), c = c || {}, this.options = new b(c, a), e.__super__.constructor.call(this);
                            var d = a.attr("tabindex") || 0;
                            a.data("old-tabindex", d), a.attr("tabindex", "-1");
                            var f = this.options.get("dataAdapter");
                            this.dataAdapter = new f(a, this.options);
                            var g = this.render();
                            this._placeContainer(g);
                            var h = this.options.get("selectionAdapter");
                            this.selection = new h(a, this.options), this.$selection = this.selection.render(), this.selection.position(this.$selection, g);
                            var i = this.options.get("dropdownAdapter");
                            this.dropdown = new i(a, this.options), this.$dropdown = this.dropdown.render(), this.dropdown.position(this.$dropdown, g);
                            var j = this.options.get("resultsAdapter");
                            this.results = new j(a, this.options, this.dataAdapter), this.$results = this.results.render(), this.results.position(this.$results, this.$dropdown);
                            var k = this;
                            this._bindAdapters(), this._registerDomEvents(), this._registerDataEvents(), this._registerSelectionEvents(), this._registerDropdownEvents(), this._registerResultsEvents(), this._registerEvents(), this.dataAdapter.current(function(a) { k.trigger("selection:update", { data: a }) }), a.addClass("select2-hidden-accessible"), a.attr("aria-hidden", "true"), this._syncAttributes(), a.data("select2", this)
                        };
                        return c.Extend(e, c.Observable), e.prototype._generateId = function(a) { var b = ""; return b = null != a.attr("id") ? a.attr("id") : null != a.attr("name") ? a.attr("name") + "-" + c.generateChars(2) : c.generateChars(4), b = b.replace(/(:|\.|\[|\]|,)/g, ""), b = "select2-" + b }, e.prototype._placeContainer = function(a) {
                            a.insertAfter(this.$element);
                            var b = this._resolveWidth(this.$element, this.options.get("width"));
                            null != b && a.css("width", b)
                        }, e.prototype._resolveWidth = function(a, b) {
                            var c = /^width:(([-+]?([0-9]*\.)?[0-9]+)(px|em|ex|%|in|cm|mm|pt|pc))/i;
                            if ("resolve" == b) {
                                var d = this._resolveWidth(a, "style");
                                return null != d ? d : this._resolveWidth(a, "element")
                            }
                            if ("element" == b) { var e = a.outerWidth(!1); return 0 >= e ? "auto" : e + "px" }
                            if ("style" == b) {
                                var f = a.attr("style");
                                if ("string" != typeof f) return null;
                                for (var g = f.split(";"), h = 0, i = g.length; i > h; h += 1) {
                                    var j = g[h].replace(/\s/g, ""),
                                        k = j.match(c);
                                    if (null !== k && k.length >= 1) return k[1]
                                }
                                return null
                            }
                            return b
                        }, e.prototype._bindAdapters = function() { this.dataAdapter.bind(this, this.$container), this.selection.bind(this, this.$container), this.dropdown.bind(this, this.$container), this.results.bind(this, this.$container) }, e.prototype._registerDomEvents = function() {
                            var b = this;
                            this.$element.on("change.select2", function() { b.dataAdapter.current(function(a) { b.trigger("selection:update", { data: a }) }) }), this.$element.on("focus.select2", function(a) { b.trigger("focus", a) }), this._syncA = c.bind(this._syncAttributes, this), this._syncS = c.bind(this._syncSubtree, this), this.$element[0].attachEvent && this.$element[0].attachEvent("onpropertychange", this._syncA);
                            var d = window.MutationObserver || window.WebKitMutationObserver || window.MozMutationObserver;
                            null != d ? (this._observer = new d(function(c) { a.each(c, b._syncA), a.each(c, b._syncS) }), this._observer.observe(this.$element[0], { attributes: !0, childList: !0, subtree: !1 })) : this.$element[0].addEventListener && (this.$element[0].addEventListener("DOMAttrModified", b._syncA, !1), this.$element[0].addEventListener("DOMNodeInserted", b._syncS, !1), this.$element[0].addEventListener("DOMNodeRemoved", b._syncS, !1))
                        }, e.prototype._registerDataEvents = function() {
                            var a = this;
                            this.dataAdapter.on("*", function(b, c) { a.trigger(b, c) })
                        }, e.prototype._registerSelectionEvents = function() {
                            var b = this,
                                c = ["toggle", "focus"];
                            this.selection.on("toggle", function() { b.toggleDropdown() }), this.selection.on("focus", function(a) { b.focus(a) }), this.selection.on("*", function(d, e) {-1 === a.inArray(d, c) && b.trigger(d, e) })
                        }, e.prototype._registerDropdownEvents = function() {
                            var a = this;
                            this.dropdown.on("*", function(b, c) { a.trigger(b, c) })
                        }, e.prototype._registerResultsEvents = function() {
                            var a = this;
                            this.results.on("*", function(b, c) { a.trigger(b, c) })
                        }, e.prototype._registerEvents = function() {
                            var a = this;
                            this.on("open", function() { a.$container.addClass("select2-container--open") }), this.on("close", function() { a.$container.removeClass("select2-container--open") }), this.on("enable", function() { a.$container.removeClass("select2-container--disabled") }), this.on("disable", function() { a.$container.addClass("select2-container--disabled") }), this.on("blur", function() { a.$container.removeClass("select2-container--focus") }), this.on("query", function(b) { a.isOpen() || a.trigger("open", {}), this.dataAdapter.query(b, function(c) { a.trigger("results:all", { data: c, query: b }) }) }), this.on("query:append", function(b) { this.dataAdapter.query(b, function(c) { a.trigger("results:append", { data: c, query: b }) }) }), this.on("keypress", function(b) {
                                var c = b.which;
                                a.isOpen() ? c === d.ESC || c === d.TAB || c === d.UP && b.altKey ? (a.close(), b.preventDefault()) : c === d.ENTER ? (a.trigger("results:select", {}), b.preventDefault()) : c === d.SPACE && b.ctrlKey ? (a.trigger("results:toggle", {}), b.preventDefault()) : c === d.UP ? (a.trigger("results:previous", {}), b.preventDefault()) : c === d.DOWN && (a.trigger("results:next", {}), b.preventDefault()) : (c === d.ENTER || c === d.SPACE || c === d.DOWN && b.altKey) && (a.open(), b.preventDefault())
                            })
                        }, e.prototype._syncAttributes = function() { this.options.set("disabled", this.$element.prop("disabled")), this.options.get("disabled") ? (this.isOpen() && this.close(), this.trigger("disable", {})) : this.trigger("enable", {}) }, e.prototype._syncSubtree = function(a, b) {
                            var c = !1,
                                d = this;
                            if (!a || !a.target || "OPTION" === a.target.nodeName || "OPTGROUP" === a.target.nodeName) {
                                if (b)
                                    if (b.addedNodes && b.addedNodes.length > 0)
                                        for (var e = 0; e < b.addedNodes.length; e++) {
                                            var f = b.addedNodes[e];
                                            f.selected && (c = !0)
                                        } else b.removedNodes && b.removedNodes.length > 0 && (c = !0);
                                    else c = !0;
                                c && this.dataAdapter.current(function(a) { d.trigger("selection:update", { data: a }) })
                            }
                        }, e.prototype.trigger = function(a, b) {
                            var c = e.__super__.trigger,
                                d = { open: "opening", close: "closing", select: "selecting", unselect: "unselecting" };
                            if (void 0 === b && (b = {}), a in d) {
                                var f = d[a],
                                    g = { prevented: !1, name: a, args: b };
                                if (c.call(this, f, g), g.prevented) return void(b.prevented = !0)
                            }
                            c.call(this, a, b)
                        }, e.prototype.toggleDropdown = function() { this.options.get("disabled") || (this.isOpen() ? this.close() : this.open()) }, e.prototype.open = function() { this.isOpen() || this.trigger("query", {}) }, e.prototype.close = function() { this.isOpen() && this.trigger("close", {}) }, e.prototype.isOpen = function() { return this.$container.hasClass("select2-container--open") }, e.prototype.hasFocus = function() { return this.$container.hasClass("select2-container--focus") }, e.prototype.focus = function(a) { this.hasFocus() || (this.$container.addClass("select2-container--focus"), this.trigger("focus", {})) }, e.prototype.enable = function(a) {
                            this.options.get("debug") && window.console && console.warn && console.warn('Select2: The `select2("enable")` method has been deprecated and will be removed in later Select2 versions. Use $element.prop("disabled") instead.'), (null == a || 0 === a.length) && (a = [!0]);
                            var b = !a[0];
                            this.$element.prop("disabled", b)
                        }, e.prototype.data = function() { this.options.get("debug") && arguments.length > 0 && window.console && console.warn && console.warn('Select2: Data can no longer be set using `select2("data")`. You should consider setting the value instead using `$element.val()`.'); var a = []; return this.dataAdapter.current(function(b) { a = b }), a }, e.prototype.val = function(b) {
                            if (this.options.get("debug") && window.console && console.warn && console.warn('Select2: The `select2("val")` method has been deprecated and will be removed in later Select2 versions. Use $element.val() instead.'), null == b || 0 === b.length) return this.$element.val();
                            var c = b[0];
                            a.isArray(c) && (c = a.map(c, function(a) { return a.toString() })), this.$element.val(c).trigger("change")
                        }, e.prototype.destroy = function() { this.$container.remove(), this.$element[0].detachEvent && this.$element[0].detachEvent("onpropertychange", this._syncA), null != this._observer ? (this._observer.disconnect(), this._observer = null) : this.$element[0].removeEventListener && (this.$element[0].removeEventListener("DOMAttrModified", this._syncA, !1), this.$element[0].removeEventListener("DOMNodeInserted", this._syncS, !1), this.$element[0].removeEventListener("DOMNodeRemoved", this._syncS, !1)), this._syncA = null, this._syncS = null, this.$element.off(".select2"), this.$element.attr("tabindex", this.$element.data("old-tabindex")), this.$element.removeClass("select2-hidden-accessible"), this.$element.attr("aria-hidden", "false"), this.$element.removeData("select2"), this.dataAdapter.destroy(), this.selection.destroy(), this.dropdown.destroy(), this.results.destroy(), this.dataAdapter = null, this.selection = null, this.dropdown = null, this.results = null }, e.prototype.render = function() { var b = a('<span class="select2 select2-container"><span class="selection"></span><span class="dropdown-wrapper" aria-hidden="true"></span></span>'); return b.attr("dir", this.options.get("dir")), this.$container = b, this.$container.addClass("select2-container--" + this.options.get("theme")), b.data("element", this.$element), b }, e
                    }), b.define("select2/compat/utils", ["jquery"], function(a) {
                        function b(b, c, d) {
                            var e, f, g = [];
                            e = a.trim(b.attr("class")), e && (e = "" + e, a(e.split(/\s+/)).each(function() { 0 === this.indexOf("select2-") && g.push(this) })), e = a.trim(c.attr("class")), e && (e = "" + e, a(e.split(/\s+/)).each(function() { 0 !== this.indexOf("select2-") && (f = d(this), null != f && g.push(f)) })), b.attr("class", g.join(" "))
                        }
                        return { syncCssClasses: b }
                    }), b.define("select2/compat/containerCss", ["jquery", "./utils"], function(a, b) {
                        function c(a) { return null }

                        function d() {}
                        return d.prototype.render = function(d) {
                            var e = d.call(this),
                                f = this.options.get("containerCssClass") || "";
                            a.isFunction(f) && (f = f(this.$element));
                            var g = this.options.get("adaptContainerCssClass");
                            if (g = g || c, -1 !== f.indexOf(":all:")) {
                                f = f.replace(":all:", "");
                                var h = g;
                                g = function(a) { var b = h(a); return null != b ? b + " " + a : a }
                            }
                            var i = this.options.get("containerCss") || {};
                            return a.isFunction(i) && (i = i(this.$element)), b.syncCssClasses(e, this.$element, g), e.css(i), e.addClass(f), e
                        }, d
                    }), b.define("select2/compat/dropdownCss", ["jquery", "./utils"], function(a, b) {
                        function c(a) { return null }

                        function d() {}
                        return d.prototype.render = function(d) {
                            var e = d.call(this),
                                f = this.options.get("dropdownCssClass") || "";
                            a.isFunction(f) && (f = f(this.$element));
                            var g = this.options.get("adaptDropdownCssClass");
                            if (g = g || c, -1 !== f.indexOf(":all:")) {
                                f = f.replace(":all:", "");
                                var h = g;
                                g = function(a) { var b = h(a); return null != b ? b + " " + a : a }
                            }
                            var i = this.options.get("dropdownCss") || {};
                            return a.isFunction(i) && (i = i(this.$element)), b.syncCssClasses(e, this.$element, g), e.css(i), e.addClass(f), e
                        }, d
                    }), b.define("select2/compat/initSelection", ["jquery"], function(a) {
                        function b(a, b, c) { c.get("debug") && window.console && console.warn && console.warn("Select2: The `initSelection` option has been deprecated in favor of a custom data adapter that overrides the `current` method. This method is now called multiple times instead of a single time when the instance is initialized. Support will be removed for the `initSelection` option in future versions of Select2"), this.initSelection = c.get("initSelection"), this._isInitialized = !1, a.call(this, b, c) }
                        return b.prototype.current = function(b, c) { var d = this; return this._isInitialized ? void b.call(this, c) : void this.initSelection.call(null, this.$element, function(b) { d._isInitialized = !0, a.isArray(b) || (b = [b]), c(b) }) }, b
                    }), b.define("select2/compat/inputData", ["jquery"], function(a) {
                        function b(a, b, c) { this._currentData = [], this._valueSeparator = c.get("valueSeparator") || ",", "hidden" === b.prop("type") && c.get("debug") && console && console.warn && console.warn("Select2: Using a hidden input with Select2 is no longer supported and may stop working in the future. It is recommended to use a `<select>` element instead."), a.call(this, b, c) }
                        return b.prototype.current = function(b, c) {
                            function d(b, c) { var e = []; return b.selected || -1 !== a.inArray(b.id, c) ? (b.selected = !0, e.push(b)) : b.selected = !1, b.children && e.push.apply(e, d(b.children, c)), e }
                            for (var e = [], f = 0; f < this._currentData.length; f++) {
                                var g = this._currentData[f];
                                e.push.apply(e, d(g, this.$element.val().split(this._valueSeparator)))
                            }
                            c(e)
                        }, b.prototype.select = function(b, c) {
                            if (this.options.get("multiple")) {
                                var d = this.$element.val();
                                d += this._valueSeparator + c.id, this.$element.val(d), this.$element.trigger("change")
                            } else this.current(function(b) { a.map(b, function(a) { a.selected = !1 }) }), this.$element.val(c.id), this.$element.trigger("change")
                        }, b.prototype.unselect = function(a, b) {
                            var c = this;
                            b.selected = !1, this.current(function(a) {
                                for (var d = [], e = 0; e < a.length; e++) {
                                    var f = a[e];
                                    b.id != f.id && d.push(f.id)
                                }
                                c.$element.val(d.join(c._valueSeparator)), c.$element.trigger("change")
                            })
                        }, b.prototype.query = function(a, b, c) {
                            for (var d = [], e = 0; e < this._currentData.length; e++) {
                                var f = this._currentData[e],
                                    g = this.matches(b, f);
                                null !== g && d.push(g)
                            }
                            c({ results: d })
                        }, b.prototype.addOptions = function(b, c) {
                            var d = a.map(c, function(b) { return a.data(b[0], "data") });
                            this._currentData.push.apply(this._currentData, d)
                        }, b
                    }), b.define("select2/compat/matcher", ["jquery"], function(a) {
                        function b(b) {
                            function c(c, d) {
                                var e = a.extend(!0, {}, d);
                                if (null == c.term || "" === a.trim(c.term)) return e;
                                if (d.children) {
                                    for (var f = d.children.length - 1; f >= 0; f--) {
                                        var g = d.children[f],
                                            h = b(c.term, g.text, g);
                                        h || e.children.splice(f, 1)
                                    }
                                    if (e.children.length > 0) return e
                                }
                                return b(c.term, d.text, d) ? e : null
                            }
                            return c
                        }
                        return b
                    }), b.define("select2/compat/query", [], function() {
                        function a(a, b, c) { c.get("debug") && window.console && console.warn && console.warn("Select2: The `query` option has been deprecated in favor of a custom data adapter that overrides the `query` method. Support will be removed for the `query` option in future versions of Select2."), a.call(this, b, c) }
                        return a.prototype.query = function(a, b, c) {
                            b.callback = c;
                            var d = this.options.get("query");
                            d.call(null, b)
                        }, a
                    }), b.define("select2/dropdown/attachContainer", [], function() {
                        function a(a, b, c) { a.call(this, b, c) }
                        return a.prototype.position = function(a, b, c) {
                            var d = c.find(".dropdown-wrapper");
                            d.append(b), b.addClass("select2-dropdown--below"), c.addClass("select2-container--below")
                        }, a
                    }), b.define("select2/dropdown/stopPropagation", [], function() {
                        function a() {}
                        return a.prototype.bind = function(a, b, c) {
                            a.call(this, b, c);
                            var d = ["blur", "change", "click", "dblclick", "focus", "focusin", "focusout", "input", "keydown", "keyup", "keypress", "mousedown", "mouseenter", "mouseleave", "mousemove", "mouseover", "mouseup", "search", "touchend", "touchstart"];
                            this.$dropdown.on(d.join(" "), function(a) { a.stopPropagation() })
                        }, a
                    }), b.define("select2/selection/stopPropagation", [], function() {
                        function a() {}
                        return a.prototype.bind = function(a, b, c) {
                            a.call(this, b, c);
                            var d = ["blur", "change", "click", "dblclick", "focus", "focusin", "focusout", "input", "keydown", "keyup", "keypress", "mousedown", "mouseenter", "mouseleave", "mousemove", "mouseover", "mouseup", "search", "touchend", "touchstart"];
                            this.$selection.on(d.join(" "), function(a) { a.stopPropagation() })
                        }, a
                    }),
                    function(c) { "function" == typeof b.define && b.define.amd ? b.define("jquery-mousewheel", ["jquery"], c) : "object" == typeof exports ? module.exports = c : c(a) }(function(a) {
                        function b(b) {
                            var g = b || window.event,
                                h = i.call(arguments, 1),
                                j = 0,
                                l = 0,
                                m = 0,
                                n = 0,
                                o = 0,
                                p = 0;
                            if (b = a.event.fix(g), b.type = "mousewheel", "detail" in g && (m = -1 * g.detail), "wheelDelta" in g && (m = g.wheelDelta), "wheelDeltaY" in g && (m = g.wheelDeltaY), "wheelDeltaX" in g && (l = -1 * g.wheelDeltaX), "axis" in g && g.axis === g.HORIZONTAL_AXIS && (l = -1 * m, m = 0), j = 0 === m ? l : m, "deltaY" in g && (m = -1 * g.deltaY, j = m), "deltaX" in g && (l = g.deltaX, 0 === m && (j = -1 * l)), 0 !== m || 0 !== l) {
                                if (1 === g.deltaMode) {
                                    var q = a.data(this, "mousewheel-line-height");
                                    j *= q, m *= q, l *= q
                                } else if (2 === g.deltaMode) {
                                    var r = a.data(this, "mousewheel-page-height");
                                    j *= r, m *= r, l *= r
                                }
                                if (n = Math.max(Math.abs(m), Math.abs(l)), (!f || f > n) && (f = n, d(g, n) && (f /= 40)), d(g, n) && (j /= 40, l /= 40, m /= 40), j = Math[j >= 1 ? "floor" : "ceil"](j / f), l = Math[l >= 1 ? "floor" : "ceil"](l / f), m = Math[m >= 1 ? "floor" : "ceil"](m / f), k.settings.normalizeOffset && this.getBoundingClientRect) {
                                    var s = this.getBoundingClientRect();
                                    o = b.clientX - s.left, p = b.clientY - s.top
                                }
                                return b.deltaX = l, b.deltaY = m, b.deltaFactor = f, b.offsetX = o, b.offsetY = p, b.deltaMode = 0, h.unshift(b, j, l, m), e && clearTimeout(e), e = setTimeout(c, 200), (a.event.dispatch || a.event.handle).apply(this, h)
                            }
                        }

                        function c() { f = null }

                        function d(a, b) { return k.settings.adjustOldDeltas && "mousewheel" === a.type && b % 120 === 0 }
                        var e, f, g = ["wheel", "mousewheel", "DOMMouseScroll", "MozMousePixelScroll"],
                            h = "onwheel" in document || document.documentMode >= 9 ? ["wheel"] : ["mousewheel", "DomMouseScroll", "MozMousePixelScroll"],
                            i = Array.prototype.slice;
                        if (a.event.fixHooks)
                            for (var j = g.length; j;) a.event.fixHooks[g[--j]] = a.event.mouseHooks;
                        var k = a.event.special.mousewheel = {
                            version: "3.1.12",
                            setup: function() {
                                if (this.addEventListener)
                                    for (var c = h.length; c;) this.addEventListener(h[--c], b, !1);
                                else this.onmousewheel = b;
                                a.data(this, "mousewheel-line-height", k.getLineHeight(this)), a.data(this, "mousewheel-page-height", k.getPageHeight(this))
                            },
                            teardown: function() {
                                if (this.removeEventListener)
                                    for (var c = h.length; c;) this.removeEventListener(h[--c], b, !1);
                                else this.onmousewheel = null;
                                a.removeData(this, "mousewheel-line-height"), a.removeData(this, "mousewheel-page-height")
                            },
                            getLineHeight: function(b) {
                                var c = a(b),
                                    d = c["offsetParent" in a.fn ? "offsetParent" : "parent"]();
                                return d.length || (d = a("body")), parseInt(d.css("fontSize"), 10) || parseInt(c.css("fontSize"), 10) || 16
                            },
                            getPageHeight: function(b) { return a(b).height() },
                            settings: { adjustOldDeltas: !0, normalizeOffset: !0 }
                        };
                        a.fn.extend({ mousewheel: function(a) { return a ? this.bind("mousewheel", a) : this.trigger("mousewheel") }, unmousewheel: function(a) { return this.unbind("mousewheel", a) } })
                    }), b.define("jquery.select2", ["jquery", "jquery-mousewheel", "./select2/core", "./select2/defaults"], function(a, b, c, d) {
                        if (null == a.fn.select2) {
                            var e = ["open", "close", "destroy"];
                            a.fn.select2 = function(b) {
                                if (b = b || {}, "object" == typeof b) return this.each(function() {
                                    var d = a.extend(!0, {}, b);
                                    new c(a(this), d)
                                }), this;
                                if ("string" == typeof b) {
                                    var d, f = Array.prototype.slice.call(arguments, 1);
                                    return this.each(function() {
                                        var c = a(this).data("select2");
                                        null == c && window.console && console.error && console.error("The select2('" + b + "') method was called on an element that is not using Select2."), d = c[b].apply(c, f)
                                    }), a.inArray(b, e) > -1 ? this : d
                                }
                                throw new Error("Invalid arguments for Select2: " + b)
                            }
                        }
                        return null == a.fn.select2.defaults && (a.fn.select2.defaults = d), c
                    }), { define: b.define, require: b.require }
            }(),
            c = b.require("jquery.select2");
        return a.fn.select2.amd = b, c
    }), String.prototype.endsWith || (String.prototype.endsWith = function(a, b) {
        var c = this.toString();
        ("number" != typeof b || !isFinite(b) || Math.floor(b) !== b || b > c.length) && (b = c.length), b -= a.length;
        var d = c.indexOf(a, b);
        return d !== -1 && d === b
    }),
    function(a) {
        a.fn.datable = function() {
            a(this).each(function() {
                var b = a(this).attr("data-datable"),
                    c = b.match(/.{2}/g),
                    d = [],
                    e = a(this).attr("data-datable-divider"),
                    f = e ? e : "/";
                a.each(c, function(b, c) { a.inArray(c, d) === -1 ? d.push(c) : (d.pop(), d.push(c + c)) });
                var g = d.join(f).toUpperCase();
                a(this).attr("maxlength", g.length), a(this).attr("placeholder", g).val(), a(this).on("keydown", function(b) {
                    (b.shiftKey || b.keyCode < 48 || b.keyCode > 57) && (b.keyCode < 96 || b.keyCode > 105) && a.inArray(b.keyCode, [46, 8, 9, 27, 13, 110, 190]) === -1 && b.preventDefault(), 8 == b.keyCode ? a(this).val().endsWith(f) && (a(this).val(a(this).val().replace(new RegExp(f + "$"), "")), b.preventDefault()) : a(this).val().length !== g.length && (a(this).val().length == d[0].length ? a(this).val(a(this).val() + f) : a(this).val().length == d[0].length + d[1].length + f.length && a(this).val(a(this).val() + f))
                }), a(this).on("blur", function() {
                    var b = a(this).val().split(f),
                        c = toObject(d, b),
                        e = 0;
                    (c.mm > 12 || c.mm < 1) && e++, (c.dd > 31 || c.dd < 1) && e++, (c.yyyy > 3e3 || c.yyyy < 1e3) && e++, 0 == a(this).val() || e ? a(this).closest(".row").removeClass("row--valid").addClass("row--invalid") : a(this).closest(".row").removeClass("row--invalid").addClass("row--valid")
                })
            })
        }
    }(jQuery);
var _extends = Object.assign || function(a) { for (var b = 1; b < arguments.length; b++) { var c = arguments[b]; for (var d in c) Object.prototype.hasOwnProperty.call(c, d) && (a[d] = c[d]) } return a },
    _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(a) { return typeof a } : function(a) { return a && "function" == typeof Symbol && a.constructor === Symbol && a !== Symbol.prototype ? "symbol" : typeof a };
! function(a, b) { "object" === ("undefined" == typeof exports ? "undefined" : _typeof(exports)) && "undefined" != typeof module ? module.exports = b() : "function" == typeof define && define.amd ? define(b) : a.LazyLoad = b() }(this, function() {
    "use strict";

    function a(a, b, c) { return !(k(a, b, c) || n(a, b, c) || m(a, b, c) || o(a, b, c)) }

    function b(a, b, c) { var d = b._settings;!c && g(a) || (C(d.callback_enter, a), J.indexOf(a.tagName) > -1 && (I(a, b), v(a, d.class_loading)), B(a, b), f(a), C(d.callback_set, a)) }
    var c = function() { return { elements_selector: "img", container: window, threshold: 300, throttle: 150, data_src: "src", data_srcset: "srcset", data_sizes: "sizes", data_bg: "bg", class_loading: "loading", class_loaded: "loaded", class_error: "error", class_initial: "initial", skip_invisible: !0, callback_load: null, callback_error: null, callback_set: null, callback_enter: null, callback_finish: null, to_webp: !1 } },
        d = function(a, b) { return a.getAttribute("data-" + b) },
        e = function(a, b, c) {
            var d = "data-" + b;
            null !== c ? a.setAttribute(d, c) : a.removeAttribute(d)
        },
        f = function(a) { return e(a, "was-processed", "true") },
        g = function(a) { return "true" === d(a, "was-processed") },
        h = function(a) { return a.filter(function(a) { return !g(a) }) },
        i = function(a, b) { return a.filter(function(a) { return a !== b }) },
        j = function(a) { return a.getBoundingClientRect().top + window.pageYOffset - a.ownerDocument.documentElement.clientTop },
        k = function(a, b, c) { return (b === window ? window.innerHeight + window.pageYOffset : j(b) + b.offsetHeight) <= j(a) - c },
        l = function(a) { return a.getBoundingClientRect().left + window.pageXOffset - a.ownerDocument.documentElement.clientLeft },
        m = function(a, b, c) { var d = window.innerWidth; return (b === window ? d + window.pageXOffset : l(b) + d) <= l(a) - c },
        n = function(a, b, c) { return (b === window ? window.pageYOffset : j(b)) >= j(a) + c + a.offsetHeight },
        o = function(a, b, c) { return (b === window ? window.pageXOffset : l(b)) >= l(a) + c + a.offsetWidth },
        p = function(a, b) {
            var c, d = new a(b);
            try { c = new CustomEvent("LazyLoad::Initialized", { detail: { instance: d } }) } catch (a) {
                (c = document.createEvent("CustomEvent")).initCustomEvent("LazyLoad::Initialized", !1, !1, { instance: d })
            }
            window.dispatchEvent(c)
        },
        q = function(a, b) { return b ? a.replace(/\.(jpe?g|png)/gi, ".webp") : a },
        r = "undefined" != typeof window,
        s = r && !("onscroll" in window) || /(gle|ing|ro)bot|crawl|spider/i.test(navigator.userAgent),
        t = r && "classList" in document.createElement("p"),
        u = r && function() { var a = document.createElement("canvas"); return !(!a.getContext || !a.getContext("2d")) && 0 === a.toDataURL("image/webp").indexOf("data:image/webp") }(),
        v = function(a, b) { t ? a.classList.add(b) : a.className += (a.className ? " " : "") + b },
        w = function(a, b) { t ? a.classList.remove(b) : a.className = a.className.replace(new RegExp("(^|\\s+)" + b + "(\\s+|$)"), " ").replace(/^\s+/, "").replace(/\s+$/, "") },
        x = function(a, b, c, e) {
            for (var f, g = 0; f = a.children[g]; g += 1)
                if ("SOURCE" === f.tagName) {
                    var h = d(f, c);
                    y(f, b, h, e)
                }
        },
        y = function(a, b, c, d) { c && a.setAttribute(b, q(c, d)) },
        z = function(a, b) {
            var c = u && b.to_webp,
                e = d(a, b.data_src),
                f = d(a, b.data_bg);
            if (e) {
                var g = q(e, c);
                a.style.backgroundImage = 'url("' + g + '")'
            }
            if (f) {
                var h = q(f, c);
                a.style.backgroundImage = h
            }
        },
        A = {
            IMG: function(a, b) {
                var c = u && b.to_webp,
                    e = b.data_srcset,
                    f = a.parentNode;
                f && "PICTURE" === f.tagName && x(f, "srcset", e, c);
                var g = d(a, b.data_sizes);
                y(a, "sizes", g);
                var h = d(a, e);
                y(a, "srcset", h, c);
                var i = d(a, b.data_src);
                y(a, "src", i, c)
            },
            IFRAME: function(a, b) {
                var c = d(a, b.data_src);
                y(a, "src", c)
            },
            VIDEO: function(a, b) {
                var c = b.data_src,
                    e = d(a, c);
                x(a, "src", c), y(a, "src", e), a.load()
            }
        },
        B = function(a, b) {
            var c = b._settings,
                d = a.tagName,
                e = A[d];
            return e ? (e(a, c), b._updateLoadingCount(1), void(b._elements = i(b._elements, a))) : void z(a, c)
        },
        C = function(a, b) { a && a(b) },
        D = function(a, b, c) { a.addEventListener(b, c) },
        E = function(a, b, c) { a.removeEventListener(b, c) },
        F = function(a, b, c) { D(a, "load", b), D(a, "loadeddata", b), D(a, "error", c) },
        G = function(a, b, c) { E(a, "load", b), E(a, "loadeddata", b), E(a, "error", c) },
        H = function(a, b, c) {
            var d = c._settings,
                e = b ? d.class_loaded : d.class_error,
                f = b ? d.callback_load : d.callback_error,
                g = a.target;
            w(g, d.class_loading), v(g, e), C(f, g), c._updateLoadingCount(-1)
        },
        I = function(a, b) {
            var c = function e(c) { H(c, !0, b), G(a, e, d) },
                d = function f(d) { H(d, !1, b), G(a, c, f) };
            F(a, c, d)
        },
        J = ["IMG", "IFRAME", "VIDEO"],
        K = function(a, b) { for (; b.length;) a.splice(b.pop(), 1) },
        L = function(a) { this._settings = _extends({}, c(), a), this._loadingCount = 0, this._queryOriginNode = this._settings.container === window ? document : this._settings.container, this._previousLoopTime = 0, this._loopTimeout = null, this._boundHandleScroll = this.handleScroll.bind(this), this._isFirstLoop = !0, window.addEventListener("resize", this._boundHandleScroll), this.update() };
    return L.prototype = {
        _loopThroughElements: function(b) {
            var c = this._settings,
                d = this._elements,
                e = d ? d.length : 0,
                f = void 0,
                g = [],
                h = this._isFirstLoop;
            if (h && (this._isFirstLoop = !1), 0 !== e) {
                for (f = 0; f < e; f++) {
                    var i = d[f];
                    c.skip_invisible && null === i.offsetParent || (b || a(i, c.container, c.threshold)) && (h && v(i, c.class_initial), this.load(i), g.push(f))
                }
                K(d, g)
            } else this._stopScrollHandler()
        },
        _startScrollHandler: function() { this._isHandlingScroll || (this._isHandlingScroll = !0, this._settings.container.addEventListener("scroll", this._boundHandleScroll)) },
        _stopScrollHandler: function() { this._isHandlingScroll && (this._isHandlingScroll = !1, this._settings.container.removeEventListener("scroll", this._boundHandleScroll)) },
        _updateLoadingCount: function(a) { this._loadingCount += a, 0 === this._elements.length && 0 === this._loadingCount && C(this._settings.callback_finish) },
        handleScroll: function() {
            var a = this._settings.throttle;
            if (0 !== a) {
                var b = Date.now(),
                    c = a - (b - this._previousLoopTime);
                c <= 0 || c > a ? (this._loopTimeout && (clearTimeout(this._loopTimeout), this._loopTimeout = null), this._previousLoopTime = b, this._loopThroughElements()) : this._loopTimeout || (this._loopTimeout = setTimeout(function() { this._previousLoopTime = Date.now(), this._loopTimeout = null, this._loopThroughElements() }.bind(this), c))
            } else this._loopThroughElements()
        },
        loadAll: function() { this._loopThroughElements(!0) },
        update: function(a) {
            var b = this._settings,
                c = a || this._queryOriginNode.querySelectorAll(b.elements_selector);
            this._elements = h(Array.prototype.slice.call(c)), s ? this.loadAll() : (this._loopThroughElements(), this._startScrollHandler())
        },
        destroy: function() { window.removeEventListener("resize", this._boundHandleScroll), this._loopTimeout && (clearTimeout(this._loopTimeout), this._loopTimeout = null), this._stopScrollHandler(), this._elements = null, this._queryOriginNode = null, this._settings = null },
        load: function(a, c) { b(a, this, c) }
    }, r && function(a, b) {
        if (b)
            if (b.length)
                for (var c, d = 0; c = b[d]; d += 1) p(a, c);
            else p(a, b)
    }(L, window.lazyLoadOptions), L
}), ! function(a, b) { "object" == typeof exports && "undefined" != typeof module ? module.exports = b() : "function" == typeof define && define.amd ? define(b) : a.Swiper = b() }(this, function() {
    "use strict";

    function a(a, b) {
        var c = [],
            g = 0;
        if (a && !b && a instanceof f) return a;
        if (a)
            if ("string" == typeof a) {
                var h, i, j = a.trim();
                if (0 <= j.indexOf("<") && 0 <= j.indexOf(">")) { var k = "div"; for (0 === j.indexOf("<li") && (k = "ul"), 0 === j.indexOf("<tr") && (k = "tbody"), 0 !== j.indexOf("<td") && 0 !== j.indexOf("<th") || (k = "tr"), 0 === j.indexOf("<tbody") && (k = "table"), 0 === j.indexOf("<option") && (k = "select"), (i = d.createElement(k)).innerHTML = j, g = 0; g < i.childNodes.length; g += 1) c.push(i.childNodes[g]) } else
                    for (h = b || "#" !== a[0] || a.match(/[ .<>:~]/) ? (b || d).querySelectorAll(a.trim()) : [d.getElementById(a.trim().split("#")[1])], g = 0; g < h.length; g += 1) h[g] && c.push(h[g])
            } else if (a.nodeType || a === e || a === d) c.push(a);
        else if (0 < a.length && a[0].nodeType)
            for (g = 0; g < a.length; g += 1) c.push(a[g]);
        return new f(c)
    }

    function b(a) { for (var b = [], c = 0; c < a.length; c += 1) - 1 === b.indexOf(a[c]) && b.push(a[c]); return b }

    function c() {
        var a = this,
            b = a.params,
            c = a.el;
        if (!c || 0 !== c.offsetWidth) {
            b.breakpoints && a.setBreakpoint();
            var d = a.allowSlideNext,
                e = a.allowSlidePrev,
                f = a.snapGrid;
            if (a.allowSlideNext = !0, a.allowSlidePrev = !0, a.updateSize(), a.updateSlides(), b.freeMode) {
                var g = Math.min(Math.max(a.translate, a.maxTranslate()), a.minTranslate());
                a.setTranslate(g), a.updateActiveIndex(), a.updateSlidesClasses(), b.autoHeight && a.updateAutoHeight()
            } else a.updateSlidesClasses(), ("auto" === b.slidesPerView || 1 < b.slidesPerView) && a.isEnd && !a.params.centeredSlides ? a.slideTo(a.slides.length - 1, 0, !1, !0) : a.slideTo(a.activeIndex, 0, !1, !0);
            a.allowSlidePrev = e, a.allowSlideNext = d, a.params.watchOverflow && f !== a.snapGrid && a.checkOverflow()
        }
    }
    var d = "undefined" == typeof document ? { body: {}, addEventListener: function() {}, removeEventListener: function() {}, activeElement: { blur: function() {}, nodeName: "" }, querySelector: function() { return null }, querySelectorAll: function() { return [] }, getElementById: function() { return null }, createEvent: function() { return { initEvent: function() {} } }, createElement: function() { return { children: [], childNodes: [], style: {}, setAttribute: function() {}, getElementsByTagName: function() { return [] } } }, location: { hash: "" } } : document,
        e = "undefined" == typeof window ? { document: d, navigator: { userAgent: "" }, location: {}, history: {}, CustomEvent: function() { return this }, addEventListener: function() {}, removeEventListener: function() {}, getComputedStyle: function() { return { getPropertyValue: function() { return "" } } }, Image: function() {}, Date: function() {}, screen: {}, setTimeout: function() {}, clearTimeout: function() {} } : window,
        f = function(a) { for (var b = 0; b < a.length; b += 1) this[b] = a[b]; return this.length = a.length, this };
    a.fn = f.prototype, a.Class = f, a.Dom7 = f;
    var g = {
        addClass: function(a) {
            if (void 0 === a) return this;
            for (var b = a.split(" "), c = 0; c < b.length; c += 1)
                for (var d = 0; d < this.length; d += 1) void 0 !== this[d] && void 0 !== this[d].classList && this[d].classList.add(b[c]);
            return this
        },
        removeClass: function(a) {
            for (var b = a.split(" "), c = 0; c < b.length; c += 1)
                for (var d = 0; d < this.length; d += 1) void 0 !== this[d] && void 0 !== this[d].classList && this[d].classList.remove(b[c]);
            return this
        },
        hasClass: function(a) { return !!this[0] && this[0].classList.contains(a) },
        toggleClass: function(a) {
            for (var b = a.split(" "), c = 0; c < b.length; c += 1)
                for (var d = 0; d < this.length; d += 1) void 0 !== this[d] && void 0 !== this[d].classList && this[d].classList.toggle(b[c]);
            return this
        },
        attr: function(a, b) {
            var c = arguments;
            if (1 === arguments.length && "string" == typeof a) return this[0] ? this[0].getAttribute(a) : void 0;
            for (var d = 0; d < this.length; d += 1)
                if (2 === c.length) this[d].setAttribute(a, b);
                else
                    for (var e in a) this[d][e] = a[e], this[d].setAttribute(e, a[e]);
            return this
        },
        removeAttr: function(a) { for (var b = 0; b < this.length; b += 1) this[b].removeAttribute(a); return this },
        data: function(a, b) { var c; if (void 0 !== b) { for (var d = 0; d < this.length; d += 1)(c = this[d]).dom7ElementDataStorage || (c.dom7ElementDataStorage = {}), c.dom7ElementDataStorage[a] = b; return this } if (c = this[0]) { if (c.dom7ElementDataStorage && a in c.dom7ElementDataStorage) return c.dom7ElementDataStorage[a]; var e = c.getAttribute("data-" + a); return e || void 0 } },
        transform: function(a) {
            for (var b = 0; b < this.length; b += 1) {
                var c = this[b].style;
                c.webkitTransform = a, c.transform = a
            }
            return this
        },
        transition: function(a) {
            "string" != typeof a && (a += "ms");
            for (var b = 0; b < this.length; b += 1) {
                var c = this[b].style;
                c.webkitTransitionDuration = a, c.transitionDuration = a
            }
            return this
        },
        on: function() {
            function b(b) {
                var c = b.target;
                if (c) {
                    var d = b.target.dom7EventData || [];
                    if (d.indexOf(b) < 0 && d.unshift(b), a(c).is(h)) i.apply(c, d);
                    else
                        for (var e = a(c).parents(), f = 0; f < e.length; f += 1) a(e[f]).is(h) && i.apply(e[f], d)
                }
            }

            function c(a) {
                var b = a && a.target && a.target.dom7EventData || [];
                b.indexOf(a) < 0 && b.unshift(a), i.apply(this, b)
            }
            for (var d, e = [], f = arguments.length; f--;) e[f] = arguments[f];
            var g = e[0],
                h = e[1],
                i = e[2],
                j = e[3];
            "function" == typeof e[1] && (g = (d = e)[0], i = d[1], j = d[2], h = void 0), j || (j = !1);
            for (var k, l = g.split(" "), m = 0; m < this.length; m += 1) {
                var n = this[m];
                if (h)
                    for (k = 0; k < l.length; k += 1) {
                        var o = l[k];
                        n.dom7LiveListeners || (n.dom7LiveListeners = {}), n.dom7LiveListeners[o] || (n.dom7LiveListeners[o] = []), n.dom7LiveListeners[o].push({ listener: i, proxyListener: b }), n.addEventListener(o, b, j)
                    } else
                        for (k = 0; k < l.length; k += 1) {
                            var p = l[k];
                            n.dom7Listeners || (n.dom7Listeners = {}), n.dom7Listeners[p] || (n.dom7Listeners[p] = []), n.dom7Listeners[p].push({ listener: i, proxyListener: c }), n.addEventListener(p, c, j)
                        }
            }
            return this
        },
        off: function() {
            for (var a, b = [], c = arguments.length; c--;) b[c] = arguments[c];
            var d = b[0],
                e = b[1],
                f = b[2],
                g = b[3];
            "function" == typeof b[1] && (d = (a = b)[0], f = a[1], g = a[2], e = void 0), g || (g = !1);
            for (var h = d.split(" "), i = 0; i < h.length; i += 1)
                for (var j = h[i], k = 0; k < this.length; k += 1) {
                    var l = this[k],
                        m = void 0;
                    if (!e && l.dom7Listeners ? m = l.dom7Listeners[j] : e && l.dom7LiveListeners && (m = l.dom7LiveListeners[j]), m && m.length)
                        for (var n = m.length - 1; 0 <= n; n -= 1) {
                            var o = m[n];
                            f && o.listener === f ? (l.removeEventListener(j, o.proxyListener, g), m.splice(n, 1)) : f || (l.removeEventListener(j, o.proxyListener, g), m.splice(n, 1))
                        }
                }
            return this
        },
        trigger: function() {
            for (var a = [], b = arguments.length; b--;) a[b] = arguments[b];
            for (var c = a[0].split(" "), f = a[1], g = 0; g < c.length; g += 1)
                for (var h = c[g], i = 0; i < this.length; i += 1) {
                    var j = this[i],
                        k = void 0;
                    try { k = new e.CustomEvent(h, { detail: f, bubbles: !0, cancelable: !0 }) } catch (a) {
                        (k = d.createEvent("Event")).initEvent(h, !0, !0), k.detail = f
                    }
                    j.dom7EventData = a.filter(function(a, b) { return 0 < b }), j.dispatchEvent(k), j.dom7EventData = [], delete j.dom7EventData
                }
            return this
        },
        transitionEnd: function(a) {
            function b(f) {
                if (f.target === this)
                    for (a.call(this, f), c = 0; c < d.length; c += 1) e.off(d[c], b)
            }
            var c, d = ["webkitTransitionEnd", "transitionend"],
                e = this;
            if (a)
                for (c = 0; c < d.length; c += 1) e.on(d[c], b);
            return this
        },
        outerWidth: function(a) { if (0 < this.length) { if (a) { var b = this.styles(); return this[0].offsetWidth + parseFloat(b.getPropertyValue("margin-right")) + parseFloat(b.getPropertyValue("margin-left")) } return this[0].offsetWidth } return null },
        outerHeight: function(a) { if (0 < this.length) { if (a) { var b = this.styles(); return this[0].offsetHeight + parseFloat(b.getPropertyValue("margin-top")) + parseFloat(b.getPropertyValue("margin-bottom")) } return this[0].offsetHeight } return null },
        offset: function() {
            if (0 < this.length) {
                var a = this[0],
                    b = a.getBoundingClientRect(),
                    c = d.body,
                    f = a.clientTop || c.clientTop || 0,
                    g = a.clientLeft || c.clientLeft || 0,
                    h = a === e ? e.scrollY : a.scrollTop,
                    i = a === e ? e.scrollX : a.scrollLeft;
                return { top: b.top + h - f, left: b.left + i - g }
            }
            return null
        },
        css: function(a, b) {
            var c;
            if (1 === arguments.length) {
                if ("string" != typeof a) {
                    for (c = 0; c < this.length; c += 1)
                        for (var d in a) this[c].style[d] = a[d];
                    return this
                }
                if (this[0]) return e.getComputedStyle(this[0], null).getPropertyValue(a)
            }
            if (2 === arguments.length && "string" == typeof a) {
                for (c = 0; c < this.length; c += 1) this[c].style[a] = b;
                return this
            }
            return this
        },
        each: function(a) {
            if (!a) return this;
            for (var b = 0; b < this.length; b += 1)
                if (!1 === a.call(this[b], b, this[b])) return this;
            return this
        },
        html: function(a) { if (void 0 === a) return this[0] ? this[0].innerHTML : void 0; for (var b = 0; b < this.length; b += 1) this[b].innerHTML = a; return this },
        text: function(a) { if (void 0 === a) return this[0] ? this[0].textContent.trim() : null; for (var b = 0; b < this.length; b += 1) this[b].textContent = a; return this },
        is: function(b) {
            var c, g, h = this[0];
            if (!h || void 0 === b) return !1;
            if ("string" == typeof b) {
                if (h.matches) return h.matches(b);
                if (h.webkitMatchesSelector) return h.webkitMatchesSelector(b);
                if (h.msMatchesSelector) return h.msMatchesSelector(b);
                for (c = a(b), g = 0; g < c.length; g += 1)
                    if (c[g] === h) return !0;
                return !1
            }
            if (b === d) return h === d;
            if (b === e) return h === e;
            if (b.nodeType || b instanceof f) {
                for (c = b.nodeType ? [b] : b, g = 0; g < c.length; g += 1)
                    if (c[g] === h) return !0;
                return !1
            }
            return !1
        },
        index: function() { var a, b = this[0]; if (b) { for (a = 0; null !== (b = b.previousSibling);) 1 === b.nodeType && (a += 1); return a } },
        eq: function(a) { if (void 0 === a) return this; var b, c = this.length; return new f(c - 1 < a ? [] : a < 0 ? (b = c + a) < 0 ? [] : [this[b]] : [this[a]]) },
        append: function() {
            for (var a, b = [], c = arguments.length; c--;) b[c] = arguments[c];
            for (var e = 0; e < b.length; e += 1) {
                a = b[e];
                for (var g = 0; g < this.length; g += 1)
                    if ("string" == typeof a) { var h = d.createElement("div"); for (h.innerHTML = a; h.firstChild;) this[g].appendChild(h.firstChild) } else if (a instanceof f)
                    for (var i = 0; i < a.length; i += 1) this[g].appendChild(a[i]);
                else this[g].appendChild(a)
            }
            return this
        },
        prepend: function(a) {
            var b, c;
            for (b = 0; b < this.length; b += 1)
                if ("string" == typeof a) { var e = d.createElement("div"); for (e.innerHTML = a, c = e.childNodes.length - 1; 0 <= c; c -= 1) this[b].insertBefore(e.childNodes[c], this[b].childNodes[0]) } else if (a instanceof f)
                for (c = 0; c < a.length; c += 1) this[b].insertBefore(a[c], this[b].childNodes[0]);
            else this[b].insertBefore(a, this[b].childNodes[0]);
            return this
        },
        next: function(b) { return new f(0 < this.length ? b ? this[0].nextElementSibling && a(this[0].nextElementSibling).is(b) ? [this[0].nextElementSibling] : [] : this[0].nextElementSibling ? [this[0].nextElementSibling] : [] : []) },
        nextAll: function(b) {
            var c = [],
                d = this[0];
            if (!d) return new f([]);
            for (; d.nextElementSibling;) {
                var e = d.nextElementSibling;
                b ? a(e).is(b) && c.push(e) : c.push(e), d = e
            }
            return new f(c)
        },
        prev: function(b) { if (0 < this.length) { var c = this[0]; return new f(b ? c.previousElementSibling && a(c.previousElementSibling).is(b) ? [c.previousElementSibling] : [] : c.previousElementSibling ? [c.previousElementSibling] : []) } return new f([]) },
        prevAll: function(b) {
            var c = [],
                d = this[0];
            if (!d) return new f([]);
            for (; d.previousElementSibling;) {
                var e = d.previousElementSibling;
                b ? a(e).is(b) && c.push(e) : c.push(e), d = e
            }
            return new f(c)
        },
        parent: function(c) { for (var d = [], e = 0; e < this.length; e += 1) null !== this[e].parentNode && (c ? a(this[e].parentNode).is(c) && d.push(this[e].parentNode) : d.push(this[e].parentNode)); return a(b(d)) },
        parents: function(c) {
            for (var d = [], e = 0; e < this.length; e += 1)
                for (var f = this[e].parentNode; f;) c ? a(f).is(c) && d.push(f) : d.push(f), f = f.parentNode;
            return a(b(d))
        },
        closest: function(a) { var b = this; return void 0 === a ? new f([]) : (b.is(a) || (b = b.parents(a).eq(0)), b) },
        find: function(a) {
            for (var b = [], c = 0; c < this.length; c += 1)
                for (var d = this[c].querySelectorAll(a), e = 0; e < d.length; e += 1) b.push(d[e]);
            return new f(b)
        },
        children: function(c) {
            for (var d = [], e = 0; e < this.length; e += 1)
                for (var g = this[e].childNodes, h = 0; h < g.length; h += 1) c ? 1 === g[h].nodeType && a(g[h]).is(c) && d.push(g[h]) : 1 === g[h].nodeType && d.push(g[h]);
            return new f(b(d))
        },
        remove: function() { for (var a = 0; a < this.length; a += 1) this[a].parentNode && this[a].parentNode.removeChild(this[a]); return this },
        add: function() { for (var b = [], c = arguments.length; c--;) b[c] = arguments[c]; var d, e; for (d = 0; d < b.length; d += 1) { var f = a(b[d]); for (e = 0; e < f.length; e += 1) this[this.length] = f[e], this.length += 1 } return this },
        styles: function() { return this[0] ? e.getComputedStyle(this[0], null) : {} }
    };
    Object.keys(g).forEach(function(b) { a.fn[b] = g[b] });
    var h, i, j, k = {
            deleteProps: function(a) {
                var b = a;
                Object.keys(b).forEach(function(a) { try { b[a] = null } catch (a) {} try { delete b[a] } catch (a) {} })
            },
            nextTick: function(a, b) { return void 0 === b && (b = 0), setTimeout(a, b) },
            now: function() { return Date.now() },
            getTranslate: function(a, b) {
                var c, d, f;
                void 0 === b && (b = "x");
                var g = e.getComputedStyle(a, null);
                return e.WebKitCSSMatrix ? (6 < (d = g.transform || g.webkitTransform).split(",").length && (d = d.split(", ").map(function(a) { return a.replace(",", ".") }).join(", ")), f = new e.WebKitCSSMatrix("none" === d ? "" : d)) : c = (f = g.MozTransform || g.OTransform || g.MsTransform || g.msTransform || g.transform || g.getPropertyValue("transform").replace("translate(", "matrix(1, 0, 0, 1,")).toString().split(","), "x" === b && (d = e.WebKitCSSMatrix ? f.m41 : 16 === c.length ? parseFloat(c[12]) : parseFloat(c[4])), "y" === b && (d = e.WebKitCSSMatrix ? f.m42 : 16 === c.length ? parseFloat(c[13]) : parseFloat(c[5])), d || 0
            },
            parseUrlQuery: function(a) {
                var b, c, d, f, g = {},
                    h = a || e.location.href;
                if ("string" == typeof h && h.length)
                    for (f = (c = (h = -1 < h.indexOf("?") ? h.replace(/\S*\?/, "") : "").split("&").filter(function(a) { return "" !== a })).length, b = 0; b < f; b += 1) d = c[b].replace(/#\S+/g, "").split("="), g[decodeURIComponent(d[0])] = void 0 === d[1] ? void 0 : decodeURIComponent(d[1]) || "";
                return g
            },
            isObject: function(a) { return "object" == typeof a && null !== a && a.constructor && a.constructor === Object },
            extend: function() {
                for (var a = [], b = arguments.length; b--;) a[b] = arguments[b];
                for (var c = Object(a[0]), d = 1; d < a.length; d += 1) {
                    var e = a[d];
                    if (null != e)
                        for (var f = Object.keys(Object(e)), g = 0, h = f.length; g < h; g += 1) {
                            var i = f[g],
                                j = Object.getOwnPropertyDescriptor(e, i);
                            void 0 !== j && j.enumerable && (k.isObject(c[i]) && k.isObject(e[i]) ? k.extend(c[i], e[i]) : !k.isObject(c[i]) && k.isObject(e[i]) ? (c[i] = {}, k.extend(c[i], e[i])) : c[i] = e[i])
                        }
                }
                return c
            }
        },
        l = (j = d.createElement("div"), {
            touch: e.Modernizr && !0 === e.Modernizr.touch || !!(0 < e.navigator.maxTouchPoints || "ontouchstart" in e || e.DocumentTouch && d instanceof e.DocumentTouch),
            pointerEvents: !!(e.navigator.pointerEnabled || e.PointerEvent || "maxTouchPoints" in e.navigator),
            prefixedPointerEvents: !!e.navigator.msPointerEnabled,
            transition: (i = j.style, "transition" in i || "webkitTransition" in i || "MozTransition" in i),
            transforms3d: e.Modernizr && !0 === e.Modernizr.csstransforms3d || (h = j.style, "webkitPerspective" in h || "MozPerspective" in h || "OPerspective" in h || "MsPerspective" in h || "perspective" in h),
            flexbox: function() {
                for (var a = j.style, b = "alignItems webkitAlignItems webkitBoxAlign msFlexAlign mozBoxAlign webkitFlexDirection msFlexDirection mozBoxDirection mozBoxOrient webkitBoxDirection webkitBoxOrient".split(" "), c = 0; c < b.length; c += 1)
                    if (b[c] in a) return !0;
                return !1
            }(),
            observer: "MutationObserver" in e || "WebkitMutationObserver" in e,
            passiveListener: function() {
                var a = !1;
                try {
                    var b = Object.defineProperty({}, "passive", { get: function() { a = !0 } });
                    e.addEventListener("testPassiveListener", null, b)
                } catch (a) {}
                return a
            }(),
            gestures: "ongesturestart" in e
        }),
        m = function(a) {
            void 0 === a && (a = {});
            var b = this;
            b.params = a, b.eventsListeners = {}, b.params && b.params.on && Object.keys(b.params.on).forEach(function(a) { b.on(a, b.params.on[a]) })
        },
        n = { components: { configurable: !0 } };
    m.prototype.on = function(a, b, c) { var d = this; if ("function" != typeof b) return d; var e = c ? "unshift" : "push"; return a.split(" ").forEach(function(a) { d.eventsListeners[a] || (d.eventsListeners[a] = []), d.eventsListeners[a][e](b) }), d }, m.prototype.once = function(a, b, c) {
        var d = this;
        return "function" != typeof b ? d : d.on(a, function e() {
            for (var c = [], f = arguments.length; f--;) c[f] = arguments[f];
            b.apply(d, c), d.off(a, e)
        }, c)
    }, m.prototype.off = function(a, b) { var c = this; return c.eventsListeners && a.split(" ").forEach(function(a) { void 0 === b ? c.eventsListeners[a] = [] : c.eventsListeners[a] && c.eventsListeners[a].length && c.eventsListeners[a].forEach(function(d, e) { d === b && c.eventsListeners[a].splice(e, 1) }) }), c }, m.prototype.emit = function() {
        for (var a = [], b = arguments.length; b--;) a[b] = arguments[b];
        var c, d, e, f = this;
        return f.eventsListeners && ("string" == typeof a[0] || Array.isArray(a[0]) ? (c = a[0], d = a.slice(1, a.length), e = f) : (c = a[0].events, d = a[0].data, e = a[0].context || f), (Array.isArray(c) ? c : c.split(" ")).forEach(function(a) {
            if (f.eventsListeners && f.eventsListeners[a]) {
                var b = [];
                f.eventsListeners[a].forEach(function(a) { b.push(a) }), b.forEach(function(a) { a.apply(e, d) })
            }
        })), f
    }, m.prototype.useModulesParams = function(a) {
        var b = this;
        b.modules && Object.keys(b.modules).forEach(function(c) {
            var d = b.modules[c];
            d.params && k.extend(a, d.params)
        })
    }, m.prototype.useModules = function(a) {
        void 0 === a && (a = {});
        var b = this;
        b.modules && Object.keys(b.modules).forEach(function(c) {
            var d = b.modules[c],
                e = a[c] || {};
            d.instance && Object.keys(d.instance).forEach(function(a) {
                var c = d.instance[a];
                b[a] = "function" == typeof c ? c.bind(b) : c
            }), d.on && b.on && Object.keys(d.on).forEach(function(a) { b.on(a, d.on[a]) }), d.create && d.create.bind(b)(e)
        })
    }, n.components.set = function(a) { this.use && this.use(a) }, m.installModule = function(a) {
        for (var b = [], c = arguments.length - 1; 0 < c--;) b[c] = arguments[c + 1];
        var d = this;
        d.prototype.modules || (d.prototype.modules = {});
        var e = a.name || Object.keys(d.prototype.modules).length + "_" + k.now();
        return (d.prototype.modules[e] = a).proto && Object.keys(a.proto).forEach(function(b) { d.prototype[b] = a.proto[b] }), a["static"] && Object.keys(a["static"]).forEach(function(b) { d[b] = a["static"][b] }), a.install && a.install.apply(d, b), d
    }, m.use = function(a) { for (var b = [], c = arguments.length - 1; 0 < c--;) b[c] = arguments[c + 1]; var d = this; return Array.isArray(a) ? (a.forEach(function(a) { return d.installModule(a) }), d) : d.installModule.apply(d, [a].concat(b)) }, Object.defineProperties(m, n);
    var o, p = {
            updateSize: function() {
                var a, b, c = this,
                    d = c.$el;
                a = void 0 !== c.params.width ? c.params.width : d[0].clientWidth, b = void 0 !== c.params.height ? c.params.height : d[0].clientHeight, 0 === a && c.isHorizontal() || 0 === b && c.isVertical() || (a = a - parseInt(d.css("padding-left"), 10) - parseInt(d.css("padding-right"), 10), b = b - parseInt(d.css("padding-top"), 10) - parseInt(d.css("padding-bottom"), 10), k.extend(c, { width: a, height: b, size: c.isHorizontal() ? a : b }))
            },
            updateSlides: function() {
                var a = this,
                    b = a.params,
                    c = a.$wrapperEl,
                    d = a.size,
                    f = a.rtlTranslate,
                    g = a.wrongRTL,
                    h = a.virtual && b.virtual.enabled,
                    i = h ? a.virtual.slides.length : a.slides.length,
                    j = c.children("." + a.params.slideClass),
                    m = h ? a.virtual.slides.length : j.length,
                    n = [],
                    o = [],
                    p = [],
                    q = b.slidesOffsetBefore;
                "function" == typeof q && (q = b.slidesOffsetBefore.call(a));
                var r = b.slidesOffsetAfter;
                "function" == typeof r && (r = b.slidesOffsetAfter.call(a));
                var s = a.snapGrid.length,
                    t = a.snapGrid.length,
                    u = b.spaceBetween,
                    v = -q,
                    w = 0,
                    x = 0;
                if (void 0 !== d) {
                    var y, z;
                    "string" == typeof u && 0 <= u.indexOf("%") && (u = parseFloat(u.replace("%", "")) / 100 * d), a.virtualSize = -u, f ? j.css({ marginLeft: "", marginTop: "" }) : j.css({ marginRight: "", marginBottom: "" }), 1 < b.slidesPerColumn && (y = Math.floor(m / b.slidesPerColumn) === m / a.params.slidesPerColumn ? m : Math.ceil(m / b.slidesPerColumn) * b.slidesPerColumn, "auto" !== b.slidesPerView && "row" === b.slidesPerColumnFill && (y = Math.max(y, b.slidesPerView * b.slidesPerColumn)));
                    for (var A, B = b.slidesPerColumn, C = y / B, D = Math.floor(m / b.slidesPerColumn), E = 0; E < m; E += 1) {
                        z = 0;
                        var F = j.eq(E);
                        if (1 < b.slidesPerColumn) {
                            var G = void 0,
                                H = void 0,
                                I = void 0;
                            "column" === b.slidesPerColumnFill ? (I = E - (H = Math.floor(E / B)) * B, (D < H || H === D && I === B - 1) && B <= (I += 1) && (I = 0, H += 1), G = H + I * y / B, F.css({ "-webkit-box-ordinal-group": G, "-moz-box-ordinal-group": G, "-ms-flex-order": G, "-webkit-order": G, order: G })) : H = E - (I = Math.floor(E / C)) * C, F.css("margin-" + (a.isHorizontal() ? "top" : "left"), 0 !== I && b.spaceBetween && b.spaceBetween + "px").attr("data-swiper-column", H).attr("data-swiper-row", I)
                        }
                        if ("none" !== F.css("display")) {
                            if ("auto" === b.slidesPerView) {
                                var J = e.getComputedStyle(F[0], null),
                                    K = F[0].style.transform,
                                    L = F[0].style.webkitTransform;
                                if (K && (F[0].style.transform = "none"), L && (F[0].style.webkitTransform = "none"), b.roundLengths) z = a.isHorizontal() ? F.outerWidth(!0) : F.outerHeight(!0);
                                else if (a.isHorizontal()) {
                                    var M = parseFloat(J.getPropertyValue("width")),
                                        N = parseFloat(J.getPropertyValue("padding-left")),
                                        O = parseFloat(J.getPropertyValue("padding-right")),
                                        P = parseFloat(J.getPropertyValue("margin-left")),
                                        Q = parseFloat(J.getPropertyValue("margin-right")),
                                        R = J.getPropertyValue("box-sizing");
                                    z = R && "border-box" === R ? M + P + Q : M + N + O + P + Q
                                } else {
                                    var S = parseFloat(J.getPropertyValue("height")),
                                        T = parseFloat(J.getPropertyValue("padding-top")),
                                        U = parseFloat(J.getPropertyValue("padding-bottom")),
                                        V = parseFloat(J.getPropertyValue("margin-top")),
                                        W = parseFloat(J.getPropertyValue("margin-bottom")),
                                        X = J.getPropertyValue("box-sizing");
                                    z = X && "border-box" === X ? S + V + W : S + T + U + V + W
                                }
                                K && (F[0].style.transform = K), L && (F[0].style.webkitTransform = L), b.roundLengths && (z = Math.floor(z))
                            } else z = (d - (b.slidesPerView - 1) * u) / b.slidesPerView, b.roundLengths && (z = Math.floor(z)), j[E] && (a.isHorizontal() ? j[E].style.width = z + "px" : j[E].style.height = z + "px");
                            j[E] && (j[E].swiperSlideSize = z), p.push(z), b.centeredSlides ? (v = v + z / 2 + w / 2 + u, 0 === w && 0 !== E && (v = v - d / 2 - u), 0 === E && (v = v - d / 2 - u), Math.abs(v) < .001 && (v = 0), b.roundLengths && (v = Math.floor(v)), x % b.slidesPerGroup == 0 && n.push(v), o.push(v)) : (b.roundLengths && (v = Math.floor(v)), x % b.slidesPerGroup == 0 && n.push(v), o.push(v), v = v + z + u), a.virtualSize += z + u, w = z, x += 1
                        }
                    }
                    if (a.virtualSize = Math.max(a.virtualSize, d) + r, f && g && ("slide" === b.effect || "coverflow" === b.effect) && c.css({ width: a.virtualSize + b.spaceBetween + "px" }), l.flexbox && !b.setWrapperSize || (a.isHorizontal() ? c.css({ width: a.virtualSize + b.spaceBetween + "px" }) : c.css({ height: a.virtualSize + b.spaceBetween + "px" })), 1 < b.slidesPerColumn && (a.virtualSize = (z + b.spaceBetween) * y, a.virtualSize = Math.ceil(a.virtualSize / b.slidesPerColumn) - b.spaceBetween, a.isHorizontal() ? c.css({ width: a.virtualSize + b.spaceBetween + "px" }) : c.css({ height: a.virtualSize + b.spaceBetween + "px" }), b.centeredSlides)) {
                        A = [];
                        for (var Y = 0; Y < n.length; Y += 1) {
                            var Z = n[Y];
                            b.roundLengths && (Z = Math.floor(Z)), n[Y] < a.virtualSize + n[0] && A.push(Z)
                        }
                        n = A
                    }
                    if (!b.centeredSlides) {
                        A = [];
                        for (var $ = 0; $ < n.length; $ += 1) {
                            var _ = n[$];
                            b.roundLengths && (_ = Math.floor(_)), n[$] <= a.virtualSize - d && A.push(_)
                        }
                        n = A, 1 < Math.floor(a.virtualSize - d) - Math.floor(n[n.length - 1]) && n.push(a.virtualSize - d)
                    }
                    if (0 === n.length && (n = [0]), 0 !== b.spaceBetween && (a.isHorizontal() ? f ? j.css({ marginLeft: u + "px" }) : j.css({ marginRight: u + "px" }) : j.css({ marginBottom: u + "px" })), b.centerInsufficientSlides) {
                        var aa = 0;
                        if (p.forEach(function(a) { aa += a + (b.spaceBetween ? b.spaceBetween : 0) }), (aa -= b.spaceBetween) < d) {
                            var ba = (d - aa) / 2;
                            n.forEach(function(a, b) { n[b] = a - ba }), o.forEach(function(a, b) { o[b] = a + ba })
                        }
                    }
                    k.extend(a, { slides: j, snapGrid: n, slidesGrid: o, slidesSizesGrid: p }), m !== i && a.emit("slidesLengthChange"), n.length !== s && (a.params.watchOverflow && a.checkOverflow(), a.emit("snapGridLengthChange")), o.length !== t && a.emit("slidesGridLengthChange"), (b.watchSlidesProgress || b.watchSlidesVisibility) && a.updateSlidesOffset()
                }
            },
            updateAutoHeight: function(a) {
                var b, c = this,
                    d = [],
                    e = 0;
                if ("number" == typeof a ? c.setTransition(a) : !0 === a && c.setTransition(c.params.speed), "auto" !== c.params.slidesPerView && 1 < c.params.slidesPerView)
                    for (b = 0; b < Math.ceil(c.params.slidesPerView); b += 1) {
                        var f = c.activeIndex + b;
                        if (f > c.slides.length) break;
                        d.push(c.slides.eq(f)[0])
                    } else d.push(c.slides.eq(c.activeIndex)[0]);
                for (b = 0; b < d.length; b += 1)
                    if (void 0 !== d[b]) {
                        var g = d[b].offsetHeight;
                        e = e < g ? g : e
                    }
                e && c.$wrapperEl.css("height", e + "px")
            },
            updateSlidesOffset: function() { for (var a = this.slides, b = 0; b < a.length; b += 1) a[b].swiperSlideOffset = this.isHorizontal() ? a[b].offsetLeft : a[b].offsetTop },
            updateSlidesProgress: function(b) {
                void 0 === b && (b = this && this.translate || 0);
                var c = this,
                    d = c.params,
                    e = c.slides,
                    f = c.rtlTranslate;
                if (0 !== e.length) {
                    void 0 === e[0].swiperSlideOffset && c.updateSlidesOffset();
                    var g = -b;
                    f && (g = b), e.removeClass(d.slideVisibleClass), c.visibleSlidesIndexes = [], c.visibleSlides = [];
                    for (var h = 0; h < e.length; h += 1) {
                        var i = e[h],
                            j = (g + (d.centeredSlides ? c.minTranslate() : 0) - i.swiperSlideOffset) / (i.swiperSlideSize + d.spaceBetween);
                        if (d.watchSlidesVisibility) {
                            var k = -(g - i.swiperSlideOffset),
                                l = k + c.slidesSizesGrid[h];
                            (0 <= k && k < c.size || 0 < l && l <= c.size || k <= 0 && l >= c.size) && (c.visibleSlides.push(i), c.visibleSlidesIndexes.push(h), e.eq(h).addClass(d.slideVisibleClass))
                        }
                        i.progress = f ? -j : j
                    }
                    c.visibleSlides = a(c.visibleSlides)
                }
            },
            updateProgress: function(a) {
                void 0 === a && (a = this && this.translate || 0);
                var b = this,
                    c = b.params,
                    d = b.maxTranslate() - b.minTranslate(),
                    e = b.progress,
                    f = b.isBeginning,
                    g = b.isEnd,
                    h = f,
                    i = g;
                0 === d ? g = f = !(e = 0) : (f = (e = (a - b.minTranslate()) / d) <= 0, g = 1 <= e), k.extend(b, { progress: e, isBeginning: f, isEnd: g }), (c.watchSlidesProgress || c.watchSlidesVisibility) && b.updateSlidesProgress(a), f && !h && b.emit("reachBeginning toEdge"), g && !i && b.emit("reachEnd toEdge"), (h && !f || i && !g) && b.emit("fromEdge"), b.emit("progress", e)
            },
            updateSlidesClasses: function() {
                var a, b = this,
                    c = b.slides,
                    d = b.params,
                    e = b.$wrapperEl,
                    f = b.activeIndex,
                    g = b.realIndex,
                    h = b.virtual && d.virtual.enabled;
                c.removeClass(d.slideActiveClass + " " + d.slideNextClass + " " + d.slidePrevClass + " " + d.slideDuplicateActiveClass + " " + d.slideDuplicateNextClass + " " + d.slideDuplicatePrevClass), (a = h ? b.$wrapperEl.find("." + d.slideClass + '[data-swiper-slide-index="' + f + '"]') : c.eq(f)).addClass(d.slideActiveClass), d.loop && (a.hasClass(d.slideDuplicateClass) ? e.children("." + d.slideClass + ":not(." + d.slideDuplicateClass + ')[data-swiper-slide-index="' + g + '"]').addClass(d.slideDuplicateActiveClass) : e.children("." + d.slideClass + "." + d.slideDuplicateClass + '[data-swiper-slide-index="' + g + '"]').addClass(d.slideDuplicateActiveClass));
                var i = a.nextAll("." + d.slideClass).eq(0).addClass(d.slideNextClass);
                d.loop && 0 === i.length && (i = c.eq(0)).addClass(d.slideNextClass);
                var j = a.prevAll("." + d.slideClass).eq(0).addClass(d.slidePrevClass);
                d.loop && 0 === j.length && (j = c.eq(-1)).addClass(d.slidePrevClass), d.loop && (i.hasClass(d.slideDuplicateClass) ? e.children("." + d.slideClass + ":not(." + d.slideDuplicateClass + ')[data-swiper-slide-index="' + i.attr("data-swiper-slide-index") + '"]').addClass(d.slideDuplicateNextClass) : e.children("." + d.slideClass + "." + d.slideDuplicateClass + '[data-swiper-slide-index="' + i.attr("data-swiper-slide-index") + '"]').addClass(d.slideDuplicateNextClass), j.hasClass(d.slideDuplicateClass) ? e.children("." + d.slideClass + ":not(." + d.slideDuplicateClass + ')[data-swiper-slide-index="' + j.attr("data-swiper-slide-index") + '"]').addClass(d.slideDuplicatePrevClass) : e.children("." + d.slideClass + "." + d.slideDuplicateClass + '[data-swiper-slide-index="' + j.attr("data-swiper-slide-index") + '"]').addClass(d.slideDuplicatePrevClass))
            },
            updateActiveIndex: function(a) {
                var b, c = this,
                    d = c.rtlTranslate ? c.translate : -c.translate,
                    e = c.slidesGrid,
                    f = c.snapGrid,
                    g = c.params,
                    h = c.activeIndex,
                    i = c.realIndex,
                    j = c.snapIndex,
                    l = a;
                if (void 0 === l) {
                    for (var m = 0; m < e.length; m += 1) void 0 !== e[m + 1] ? d >= e[m] && d < e[m + 1] - (e[m + 1] - e[m]) / 2 ? l = m : d >= e[m] && d < e[m + 1] && (l = m + 1) : d >= e[m] && (l = m);
                    g.normalizeSlideIndex && (l < 0 || void 0 === l) && (l = 0)
                }
                if ((b = 0 <= f.indexOf(d) ? f.indexOf(d) : Math.floor(l / g.slidesPerGroup)) >= f.length && (b = f.length - 1), l !== h) {
                    var n = parseInt(c.slides.eq(l).attr("data-swiper-slide-index") || l, 10);
                    k.extend(c, { snapIndex: b, realIndex: n, previousIndex: h, activeIndex: l }), c.emit("activeIndexChange"), c.emit("snapIndexChange"), i !== n && c.emit("realIndexChange"), c.emit("slideChange")
                } else b !== j && (c.snapIndex = b, c.emit("snapIndexChange"))
            },
            updateClickedSlide: function(b) {
                var c = this,
                    d = c.params,
                    e = a(b.target).closest("." + d.slideClass)[0],
                    f = !1;
                if (e)
                    for (var g = 0; g < c.slides.length; g += 1) c.slides[g] === e && (f = !0);
                return e && f ? (c.clickedSlide = e, c.virtual && c.params.virtual.enabled ? c.clickedIndex = parseInt(a(e).attr("data-swiper-slide-index"), 10) : c.clickedIndex = a(e).index(), d.slideToClickedSlide && void 0 !== c.clickedIndex && c.clickedIndex !== c.activeIndex && c.slideToClickedSlide(), void 0) : (c.clickedSlide = void 0, void(c.clickedIndex = void 0))
            }
        },
        q = {
            getTranslate: function(a) {
                void 0 === a && (a = this.isHorizontal() ? "x" : "y");
                var b = this.params,
                    c = this.rtlTranslate,
                    d = this.translate,
                    e = this.$wrapperEl;
                if (b.virtualTranslate) return c ? -d : d;
                var f = k.getTranslate(e[0], a);
                return c && (f = -f), f || 0
            },
            setTranslate: function(a, b) {
                var c = this,
                    d = c.rtlTranslate,
                    e = c.params,
                    f = c.$wrapperEl,
                    g = c.progress,
                    h = 0,
                    i = 0;
                c.isHorizontal() ? h = d ? -a : a : i = a, e.roundLengths && (h = Math.floor(h), i = Math.floor(i)), e.virtualTranslate || (l.transforms3d ? f.transform("translate3d(" + h + "px, " + i + "px, 0px)") : f.transform("translate(" + h + "px, " + i + "px)")), c.previousTranslate = c.translate, c.translate = c.isHorizontal() ? h : i;
                var j = c.maxTranslate() - c.minTranslate();
                (0 === j ? 0 : (a - c.minTranslate()) / j) !== g && c.updateProgress(a), c.emit("setTranslate", c.translate, b)
            },
            minTranslate: function() { return -this.snapGrid[0] },
            maxTranslate: function() { return -this.snapGrid[this.snapGrid.length - 1] }
        },
        r = {
            setTransition: function(a, b) { this.$wrapperEl.transition(a), this.emit("setTransition", a, b) },
            transitionStart: function(a, b) {
                void 0 === a && (a = !0);
                var c = this,
                    d = c.activeIndex,
                    e = c.params,
                    f = c.previousIndex;
                e.autoHeight && c.updateAutoHeight();
                var g = b;
                if (g || (g = f < d ? "next" : d < f ? "prev" : "reset"), c.emit("transitionStart"), a && d !== f) {
                    if ("reset" === g) return void c.emit("slideResetTransitionStart");
                    c.emit("slideChangeTransitionStart"), "next" === g ? c.emit("slideNextTransitionStart") : c.emit("slidePrevTransitionStart")
                }
            },
            transitionEnd: function(a, b) {
                void 0 === a && (a = !0);
                var c = this,
                    d = c.activeIndex,
                    e = c.previousIndex;
                c.animating = !1, c.setTransition(0);
                var f = b;
                if (f || (f = e < d ? "next" : d < e ? "prev" : "reset"), c.emit("transitionEnd"), a && d !== e) {
                    if ("reset" === f) return void c.emit("slideResetTransitionEnd");
                    c.emit("slideChangeTransitionEnd"), "next" === f ? c.emit("slideNextTransitionEnd") : c.emit("slidePrevTransitionEnd")
                }
            }
        },
        s = {
            slideTo: function(a, b, c, d) {
                void 0 === a && (a = 0), void 0 === b && (b = this.params.speed), void 0 === c && (c = !0);
                var e = this,
                    f = a;
                f < 0 && (f = 0);
                var g = e.params,
                    h = e.snapGrid,
                    i = e.slidesGrid,
                    j = e.previousIndex,
                    k = e.activeIndex,
                    m = e.rtlTranslate;
                if (e.animating && g.preventInteractionOnTransition) return !1;
                var n = Math.floor(f / g.slidesPerGroup);
                n >= h.length && (n = h.length - 1), (k || g.initialSlide || 0) === (j || 0) && c && e.emit("beforeSlideChangeStart");
                var o, p = -h[n];
                if (e.updateProgress(p), g.normalizeSlideIndex)
                    for (var q = 0; q < i.length; q += 1) - Math.floor(100 * p) >= Math.floor(100 * i[q]) && (f = q);
                if (e.initialized && f !== k) { if (!e.allowSlideNext && p < e.translate && p < e.minTranslate()) return !1; if (!e.allowSlidePrev && p > e.translate && p > e.maxTranslate() && (k || 0) !== f) return !1 }
                return o = k < f ? "next" : f < k ? "prev" : "reset", m && -p === e.translate || !m && p === e.translate ? (e.updateActiveIndex(f), g.autoHeight && e.updateAutoHeight(), e.updateSlidesClasses(), "slide" !== g.effect && e.setTranslate(p), "reset" !== o && (e.transitionStart(c, o), e.transitionEnd(c, o)), !1) : (0 !== b && l.transition ? (e.setTransition(b), e.setTranslate(p), e.updateActiveIndex(f), e.updateSlidesClasses(), e.emit("beforeTransitionStart", b, d), e.transitionStart(c, o), e.animating || (e.animating = !0, e.onSlideToWrapperTransitionEnd || (e.onSlideToWrapperTransitionEnd = function(a) { e && !e.destroyed && a.target === this && (e.$wrapperEl[0].removeEventListener("transitionend", e.onSlideToWrapperTransitionEnd), e.$wrapperEl[0].removeEventListener("webkitTransitionEnd", e.onSlideToWrapperTransitionEnd), e.onSlideToWrapperTransitionEnd = null, delete e.onSlideToWrapperTransitionEnd, e.transitionEnd(c, o)) }), e.$wrapperEl[0].addEventListener("transitionend", e.onSlideToWrapperTransitionEnd), e.$wrapperEl[0].addEventListener("webkitTransitionEnd", e.onSlideToWrapperTransitionEnd))) : (e.setTransition(0), e.setTranslate(p), e.updateActiveIndex(f), e.updateSlidesClasses(), e.emit("beforeTransitionStart", b, d), e.transitionStart(c, o), e.transitionEnd(c, o)), !0)
            },
            slideToLoop: function(a, b, c, d) { void 0 === a && (a = 0), void 0 === b && (b = this.params.speed), void 0 === c && (c = !0); var e = a; return this.params.loop && (e += this.loopedSlides), this.slideTo(e, b, c, d) },
            slideNext: function(a, b, c) {
                void 0 === a && (a = this.params.speed), void 0 === b && (b = !0);
                var d = this,
                    e = d.params,
                    f = d.animating;
                return e.loop ? !f && (d.loopFix(), d._clientLeft = d.$wrapperEl[0].clientLeft, d.slideTo(d.activeIndex + e.slidesPerGroup, a, b, c)) : d.slideTo(d.activeIndex + e.slidesPerGroup, a, b, c)
            },
            slidePrev: function(a, b, c) {
                function d(a) { return a < 0 ? -Math.floor(Math.abs(a)) : Math.floor(a) }
                void 0 === a && (a = this.params.speed), void 0 === b && (b = !0);
                var e = this,
                    f = e.params,
                    g = e.animating,
                    h = e.snapGrid,
                    i = e.slidesGrid,
                    j = e.rtlTranslate;
                if (f.loop) {
                    if (g) return !1;
                    e.loopFix(), e._clientLeft = e.$wrapperEl[0].clientLeft
                }
                var k, l = d(j ? e.translate : -e.translate),
                    m = h.map(function(a) { return d(a) }),
                    n = (i.map(function(a) { return d(a) }), h[m.indexOf(l)], h[m.indexOf(l) - 1]);
                return void 0 !== n && (k = i.indexOf(n)) < 0 && (k = e.activeIndex - 1), e.slideTo(k, a, b, c)
            },
            slideReset: function(a, b, c) { return void 0 === a && (a = this.params.speed), void 0 === b && (b = !0), this.slideTo(this.activeIndex, a, b, c) },
            slideToClosest: function(a, b, c) {
                void 0 === a && (a = this.params.speed), void 0 === b && (b = !0);
                var d = this,
                    e = d.activeIndex,
                    f = Math.floor(e / d.params.slidesPerGroup);
                if (f < d.snapGrid.length - 1) {
                    var g = d.rtlTranslate ? d.translate : -d.translate,
                        h = d.snapGrid[f];
                    (d.snapGrid[f + 1] - h) / 2 < g - h && (e = d.params.slidesPerGroup)
                }
                return d.slideTo(e, a, b, c)
            },
            slideToClickedSlide: function() {
                var b, c = this,
                    d = c.params,
                    e = c.$wrapperEl,
                    f = "auto" === d.slidesPerView ? c.slidesPerViewDynamic() : d.slidesPerView,
                    g = c.clickedIndex;
                if (d.loop) {
                    if (c.animating) return;
                    b = parseInt(a(c.clickedSlide).attr("data-swiper-slide-index"), 10), d.centeredSlides ? g < c.loopedSlides - f / 2 || g > c.slides.length - c.loopedSlides + f / 2 ? (c.loopFix(), g = e.children("." + d.slideClass + '[data-swiper-slide-index="' + b + '"]:not(.' + d.slideDuplicateClass + ")").eq(0).index(), k.nextTick(function() { c.slideTo(g) })) : c.slideTo(g) : g > c.slides.length - f ? (c.loopFix(), g = e.children("." + d.slideClass + '[data-swiper-slide-index="' + b + '"]:not(.' + d.slideDuplicateClass + ")").eq(0).index(), k.nextTick(function() { c.slideTo(g) })) : c.slideTo(g)
                } else c.slideTo(g)
            }
        },
        t = {
            loopCreate: function() {
                var b = this,
                    c = b.params,
                    e = b.$wrapperEl;
                e.children("." + c.slideClass + "." + c.slideDuplicateClass).remove();
                var f = e.children("." + c.slideClass);
                if (c.loopFillGroupWithBlank) {
                    var g = c.slidesPerGroup - f.length % c.slidesPerGroup;
                    if (g !== c.slidesPerGroup) {
                        for (var h = 0; h < g; h += 1) {
                            var i = a(d.createElement("div")).addClass(c.slideClass + " " + c.slideBlankClass);
                            e.append(i)
                        }
                        f = e.children("." + c.slideClass)
                    }
                }
                "auto" !== c.slidesPerView || c.loopedSlides || (c.loopedSlides = f.length), b.loopedSlides = parseInt(c.loopedSlides || c.slidesPerView, 10), b.loopedSlides += c.loopAdditionalSlides, b.loopedSlides > f.length && (b.loopedSlides = f.length);
                var j = [],
                    k = [];
                f.each(function(c, d) {
                    var e = a(d);
                    c < b.loopedSlides && k.push(d), c < f.length && c >= f.length - b.loopedSlides && j.push(d), e.attr("data-swiper-slide-index", c)
                });
                for (var l = 0; l < k.length; l += 1) e.append(a(k[l].cloneNode(!0)).addClass(c.slideDuplicateClass));
                for (var m = j.length - 1; 0 <= m; m -= 1) e.prepend(a(j[m].cloneNode(!0)).addClass(c.slideDuplicateClass))
            },
            loopFix: function() {
                var a, b = this,
                    c = b.params,
                    d = b.activeIndex,
                    e = b.slides,
                    f = b.loopedSlides,
                    g = b.allowSlidePrev,
                    h = b.allowSlideNext,
                    i = b.snapGrid,
                    j = b.rtlTranslate;
                b.allowSlidePrev = !0, b.allowSlideNext = !0;
                var k = -i[d] - b.getTranslate();
                d < f ? (a = e.length - 3 * f + d, a += f, b.slideTo(a, 0, !1, !0) && 0 !== k && b.setTranslate((j ? -b.translate : b.translate) - k)) : ("auto" === c.slidesPerView && 2 * f <= d || d >= e.length - f) && (a = -e.length + d + f, a += f, b.slideTo(a, 0, !1, !0) && 0 !== k && b.setTranslate((j ? -b.translate : b.translate) - k)), b.allowSlidePrev = g, b.allowSlideNext = h
            },
            loopDestroy: function() {
                var a = this.$wrapperEl,
                    b = this.params,
                    c = this.slides;
                a.children("." + b.slideClass + "." + b.slideDuplicateClass + ",." + b.slideClass + "." + b.slideBlankClass).remove(), c.removeAttr("data-swiper-slide-index")
            }
        },
        u = {
            setGrabCursor: function(a) {
                if (!(l.touch || !this.params.simulateTouch || this.params.watchOverflow && this.isLocked)) {
                    var b = this.el;
                    b.style.cursor = "move", b.style.cursor = a ? "-webkit-grabbing" : "-webkit-grab", b.style.cursor = a ? "-moz-grabbin" : "-moz-grab", b.style.cursor = a ? "grabbing" : "grab"
                }
            },
            unsetGrabCursor: function() { l.touch || this.params.watchOverflow && this.isLocked || (this.el.style.cursor = "") }
        },
        v = {
            appendSlide: function(a) {
                var b = this,
                    c = b.$wrapperEl,
                    d = b.params;
                if (d.loop && b.loopDestroy(), "object" == typeof a && "length" in a)
                    for (var e = 0; e < a.length; e += 1) a[e] && c.append(a[e]);
                else c.append(a);
                d.loop && b.loopCreate(), d.observer && l.observer || b.update()
            },
            prependSlide: function(a) {
                var b = this,
                    c = b.params,
                    d = b.$wrapperEl,
                    e = b.activeIndex;
                c.loop && b.loopDestroy();
                var f = e + 1;
                if ("object" == typeof a && "length" in a) {
                    for (var g = 0; g < a.length; g += 1) a[g] && d.prepend(a[g]);
                    f = e + a.length
                } else d.prepend(a);
                c.loop && b.loopCreate(), c.observer && l.observer || b.update(), b.slideTo(f, 0, !1)
            },
            addSlide: function(a, b) {
                var c = this,
                    d = c.$wrapperEl,
                    e = c.params,
                    f = c.activeIndex;
                e.loop && (f -= c.loopedSlides, c.loopDestroy(), c.slides = d.children("." + e.slideClass));
                var g = c.slides.length;
                if (a <= 0) c.prependSlide(b);
                else if (g <= a) c.appendSlide(b);
                else {
                    for (var h = a < f ? f + 1 : f, i = [], j = g - 1; a <= j; j -= 1) {
                        var k = c.slides.eq(j);
                        k.remove(), i.unshift(k)
                    }
                    if ("object" == typeof b && "length" in b) {
                        for (var m = 0; m < b.length; m += 1) b[m] && d.append(b[m]);
                        h = a < f ? f + b.length : f
                    } else d.append(b);
                    for (var n = 0; n < i.length; n += 1) d.append(i[n]);
                    e.loop && c.loopCreate(), e.observer && l.observer || c.update(), e.loop ? c.slideTo(h + c.loopedSlides, 0, !1) : c.slideTo(h, 0, !1)
                }
            },
            removeSlide: function(a) {
                var b = this,
                    c = b.params,
                    d = b.$wrapperEl,
                    e = b.activeIndex;
                c.loop && (e -= b.loopedSlides, b.loopDestroy(), b.slides = d.children("." + c.slideClass));
                var f, g = e;
                if ("object" == typeof a && "length" in a) {
                    for (var h = 0; h < a.length; h += 1) f = a[h], b.slides[f] && b.slides.eq(f).remove(), f < g && (g -= 1);
                    g = Math.max(g, 0)
                } else f = a, b.slides[f] && b.slides.eq(f).remove(), f < g && (g -= 1), g = Math.max(g, 0);
                c.loop && b.loopCreate(), c.observer && l.observer || b.update(), c.loop ? b.slideTo(g + b.loopedSlides, 0, !1) : b.slideTo(g, 0, !1)
            },
            removeAllSlides: function() {
                for (var a = [], b = 0; b < this.slides.length; b += 1) a.push(b);
                this.removeSlide(a)
            }
        },
        w = function() {
            var a = e.navigator.userAgent,
                b = { ios: !1, android: !1, androidChrome: !1, desktop: !1, windows: !1, iphone: !1, ipod: !1, ipad: !1, cordova: e.cordova || e.phonegap, phonegap: e.cordova || e.phonegap },
                c = a.match(/(Windows Phone);?[\s\/]+([\d.]+)?/),
                f = a.match(/(Android);?[\s\/]+([\d.]+)?/),
                g = a.match(/(iPad).*OS\s([\d_]+)/),
                h = a.match(/(iPod)(.*OS\s([\d_]+))?/),
                i = !g && a.match(/(iPhone\sOS|iOS)\s([\d_]+)/);
            if (c && (b.os = "windows", b.osVersion = c[2], b.windows = !0), f && !c && (b.os = "android", b.osVersion = f[2], b.android = !0, b.androidChrome = 0 <= a.toLowerCase().indexOf("chrome")), (g || i || h) && (b.os = "ios", b.ios = !0), i && !h && (b.osVersion = i[2].replace(/_/g, "."), b.iphone = !0), g && (b.osVersion = g[2].replace(/_/g, "."), b.ipad = !0), h && (b.osVersion = h[3] ? h[3].replace(/_/g, ".") : null, b.iphone = !0), b.ios && b.osVersion && 0 <= a.indexOf("Version/") && "10" === b.osVersion.split(".")[0] && (b.osVersion = a.toLowerCase().split("version/")[1].split(" ")[0]), b.desktop = !(b.os || b.android || b.webView), b.webView = (i || g || h) && a.match(/.*AppleWebKit(?!.*Safari)/i), b.os && "ios" === b.os) {
                var j = b.osVersion.split("."),
                    k = d.querySelector('meta[name="viewport"]');
                b.minimalUi = !b.webView && (h || i) && (1 * j[0] == 7 ? 1 <= 1 * j[1] : 7 < 1 * j[0]) && k && 0 <= k.getAttribute("content").indexOf("minimal-ui")
            }
            return b.pixelRatio = e.devicePixelRatio || 1, b
        }(),
        x = {
            attachEvents: function() {
                var b = this,
                    f = b.params,
                    g = b.touchEvents,
                    h = b.el,
                    i = b.wrapperEl;
                b.onTouchStart = function(b) {
                    var c = this,
                        f = c.touchEventsData,
                        g = c.params,
                        h = c.touches;
                    if (!c.animating || !g.preventInteractionOnTransition) {
                        var i = b;
                        if (i.originalEvent && (i = i.originalEvent), f.isTouchEvent = "touchstart" === i.type, (f.isTouchEvent || !("which" in i) || 3 !== i.which) && !(!f.isTouchEvent && "button" in i && 0 < i.button || f.isTouched && f.isMoved))
                            if (g.noSwiping && a(i.target).closest(g.noSwipingSelector ? g.noSwipingSelector : "." + g.noSwipingClass)[0]) c.allowClick = !0;
                            else if (!g.swipeHandler || a(i).closest(g.swipeHandler)[0]) {
                            h.currentX = "touchstart" === i.type ? i.targetTouches[0].pageX : i.pageX, h.currentY = "touchstart" === i.type ? i.targetTouches[0].pageY : i.pageY;
                            var j = h.currentX,
                                l = h.currentY,
                                m = g.edgeSwipeDetection || g.iOSEdgeSwipeDetection,
                                n = g.edgeSwipeThreshold || g.iOSEdgeSwipeThreshold;
                            if (!m || !(j <= n || j >= e.screen.width - n)) {
                                if (k.extend(f, { isTouched: !0, isMoved: !1, allowTouchCallbacks: !0, isScrolling: void 0, startMoving: void 0 }), h.startX = j, h.startY = l, f.touchStartTime = k.now(), c.allowClick = !0, c.updateSize(), c.swipeDirection = void 0, 0 < g.threshold && (f.allowThresholdMove = !1), "touchstart" !== i.type) {
                                    var o = !0;
                                    a(i.target).is(f.formElements) && (o = !1), d.activeElement && a(d.activeElement).is(f.formElements) && d.activeElement !== i.target && d.activeElement.blur();
                                    var p = o && c.allowTouchMove && g.touchStartPreventDefault;
                                    (g.touchStartForcePreventDefault || p) && i.preventDefault()
                                }
                                c.emit("touchStart", i)
                            }
                        }
                    }
                }.bind(b), b.onTouchMove = function(b) {
                    var c = this,
                        e = c.touchEventsData,
                        f = c.params,
                        g = c.touches,
                        h = c.rtlTranslate,
                        i = b;
                    if (i.originalEvent && (i = i.originalEvent), e.isTouched) {
                        if (!e.isTouchEvent || "mousemove" !== i.type) {
                            var j = "touchmove" === i.type ? i.targetTouches[0].pageX : i.pageX,
                                l = "touchmove" === i.type ? i.targetTouches[0].pageY : i.pageY;
                            if (i.preventedByNestedSwiper) return g.startX = j, void(g.startY = l);
                            if (!c.allowTouchMove) return c.allowClick = !1, void(e.isTouched && (k.extend(g, {
                                startX: j,
                                startY: l,
                                currentX: j,
                                currentY: l
                            }), e.touchStartTime = k.now()));
                            if (e.isTouchEvent && f.touchReleaseOnEdges && !f.loop)
                                if (c.isVertical()) { if (l < g.startY && c.translate <= c.maxTranslate() || l > g.startY && c.translate >= c.minTranslate()) return e.isTouched = !1, void(e.isMoved = !1) } else if (j < g.startX && c.translate <= c.maxTranslate() || j > g.startX && c.translate >= c.minTranslate()) return;
                            if (e.isTouchEvent && d.activeElement && i.target === d.activeElement && a(i.target).is(e.formElements)) return e.isMoved = !0, void(c.allowClick = !1);
                            if (e.allowTouchCallbacks && c.emit("touchMove", i), !(i.targetTouches && 1 < i.targetTouches.length)) {
                                g.currentX = j, g.currentY = l;
                                var m, n = g.currentX - g.startX,
                                    o = g.currentY - g.startY;
                                if (!(c.params.threshold && Math.sqrt(Math.pow(n, 2) + Math.pow(o, 2)) < c.params.threshold))
                                    if (void 0 === e.isScrolling && (c.isHorizontal() && g.currentY === g.startY || c.isVertical() && g.currentX === g.startX ? e.isScrolling = !1 : 25 <= n * n + o * o && (m = 180 * Math.atan2(Math.abs(o), Math.abs(n)) / Math.PI, e.isScrolling = c.isHorizontal() ? m > f.touchAngle : 90 - m > f.touchAngle)), e.isScrolling && c.emit("touchMoveOpposite", i), void 0 === e.startMoving && (g.currentX === g.startX && g.currentY === g.startY || (e.startMoving = !0)), e.isScrolling) e.isTouched = !1;
                                    else if (e.startMoving) {
                                    c.allowClick = !1, i.preventDefault(), f.touchMoveStopPropagation && !f.nested && i.stopPropagation(), e.isMoved || (f.loop && c.loopFix(), e.startTranslate = c.getTranslate(), c.setTransition(0), c.animating && c.$wrapperEl.trigger("webkitTransitionEnd transitionend"), e.allowMomentumBounce = !1, !f.grabCursor || !0 !== c.allowSlideNext && !0 !== c.allowSlidePrev || c.setGrabCursor(!0), c.emit("sliderFirstMove", i)), c.emit("sliderMove", i), e.isMoved = !0;
                                    var p = c.isHorizontal() ? n : o;
                                    g.diff = p, p *= f.touchRatio, h && (p = -p), c.swipeDirection = 0 < p ? "prev" : "next", e.currentTranslate = p + e.startTranslate;
                                    var q = !0,
                                        r = f.resistanceRatio;
                                    if (f.touchReleaseOnEdges && (r = 0), 0 < p && e.currentTranslate > c.minTranslate() ? (q = !1, f.resistance && (e.currentTranslate = c.minTranslate() - 1 + Math.pow(-c.minTranslate() + e.startTranslate + p, r))) : p < 0 && e.currentTranslate < c.maxTranslate() && (q = !1, f.resistance && (e.currentTranslate = c.maxTranslate() + 1 - Math.pow(c.maxTranslate() - e.startTranslate - p, r))), q && (i.preventedByNestedSwiper = !0), !c.allowSlideNext && "next" === c.swipeDirection && e.currentTranslate < e.startTranslate && (e.currentTranslate = e.startTranslate), !c.allowSlidePrev && "prev" === c.swipeDirection && e.currentTranslate > e.startTranslate && (e.currentTranslate = e.startTranslate), 0 < f.threshold) { if (!(Math.abs(p) > f.threshold || e.allowThresholdMove)) return void(e.currentTranslate = e.startTranslate); if (!e.allowThresholdMove) return e.allowThresholdMove = !0, g.startX = g.currentX, g.startY = g.currentY, e.currentTranslate = e.startTranslate, void(g.diff = c.isHorizontal() ? g.currentX - g.startX : g.currentY - g.startY) }
                                    f.followFinger && ((f.freeMode || f.watchSlidesProgress || f.watchSlidesVisibility) && (c.updateActiveIndex(), c.updateSlidesClasses()), f.freeMode && (0 === e.velocities.length && e.velocities.push({ position: g[c.isHorizontal() ? "startX" : "startY"], time: e.touchStartTime }), e.velocities.push({ position: g[c.isHorizontal() ? "currentX" : "currentY"], time: k.now() })), c.updateProgress(e.currentTranslate), c.setTranslate(e.currentTranslate))
                                }
                            }
                        }
                    } else e.startMoving && e.isScrolling && c.emit("touchMoveOpposite", i)
                }.bind(b), b.onTouchEnd = function(a) {
                    var b = this,
                        c = b.touchEventsData,
                        d = b.params,
                        e = b.touches,
                        f = b.rtlTranslate,
                        g = b.$wrapperEl,
                        h = b.slidesGrid,
                        i = b.snapGrid,
                        j = a;
                    if (j.originalEvent && (j = j.originalEvent), c.allowTouchCallbacks && b.emit("touchEnd", j), c.allowTouchCallbacks = !1, !c.isTouched) return c.isMoved && d.grabCursor && b.setGrabCursor(!1), c.isMoved = !1, void(c.startMoving = !1);
                    d.grabCursor && c.isMoved && c.isTouched && (!0 === b.allowSlideNext || !0 === b.allowSlidePrev) && b.setGrabCursor(!1);
                    var l, m = k.now(),
                        n = m - c.touchStartTime;
                    if (b.allowClick && (b.updateClickedSlide(j), b.emit("tap", j), n < 300 && 300 < m - c.lastClickTime && (c.clickTimeout && clearTimeout(c.clickTimeout), c.clickTimeout = k.nextTick(function() { b && !b.destroyed && b.emit("click", j) }, 300)), n < 300 && m - c.lastClickTime < 300 && (c.clickTimeout && clearTimeout(c.clickTimeout), b.emit("doubleTap", j))), c.lastClickTime = k.now(), k.nextTick(function() { b.destroyed || (b.allowClick = !0) }), !c.isTouched || !c.isMoved || !b.swipeDirection || 0 === e.diff || c.currentTranslate === c.startTranslate) return c.isTouched = !1, c.isMoved = !1, void(c.startMoving = !1);
                    if (c.isTouched = !1, c.isMoved = !1, c.startMoving = !1, l = d.followFinger ? f ? b.translate : -b.translate : -c.currentTranslate, d.freeMode) {
                        if (l < -b.minTranslate()) return void b.slideTo(b.activeIndex);
                        if (l > -b.maxTranslate()) return void(b.slides.length < i.length ? b.slideTo(i.length - 1) : b.slideTo(b.slides.length - 1));
                        if (d.freeModeMomentum) {
                            if (1 < c.velocities.length) {
                                var o = c.velocities.pop(),
                                    p = c.velocities.pop(),
                                    q = o.position - p.position,
                                    r = o.time - p.time;
                                b.velocity = q / r, b.velocity /= 2, Math.abs(b.velocity) < d.freeModeMinimumVelocity && (b.velocity = 0), (150 < r || 300 < k.now() - o.time) && (b.velocity = 0)
                            } else b.velocity = 0;
                            b.velocity *= d.freeModeMomentumVelocityRatio, c.velocities.length = 0;
                            var s = 1e3 * d.freeModeMomentumRatio,
                                t = b.velocity * s,
                                u = b.translate + t;
                            f && (u = -u);
                            var v, w, x = !1,
                                y = 20 * Math.abs(b.velocity) * d.freeModeMomentumBounceRatio;
                            if (u < b.maxTranslate()) d.freeModeMomentumBounce ? (u + b.maxTranslate() < -y && (u = b.maxTranslate() - y), v = b.maxTranslate(), x = !0, c.allowMomentumBounce = !0) : u = b.maxTranslate(), d.loop && d.centeredSlides && (w = !0);
                            else if (u > b.minTranslate()) d.freeModeMomentumBounce ? (u - b.minTranslate() > y && (u = b.minTranslate() + y), v = b.minTranslate(), x = !0, c.allowMomentumBounce = !0) : u = b.minTranslate(), d.loop && d.centeredSlides && (w = !0);
                            else if (d.freeModeSticky) {
                                for (var z, A = 0; A < i.length; A += 1)
                                    if (i[A] > -u) { z = A; break }
                                u = -(u = Math.abs(i[z] - u) < Math.abs(i[z - 1] - u) || "next" === b.swipeDirection ? i[z] : i[z - 1])
                            }
                            if (w && b.once("transitionEnd", function() { b.loopFix() }), 0 !== b.velocity) s = f ? Math.abs((-u - b.translate) / b.velocity) : Math.abs((u - b.translate) / b.velocity);
                            else if (d.freeModeSticky) return void b.slideToClosest();
                            d.freeModeMomentumBounce && x ? (b.updateProgress(v), b.setTransition(s), b.setTranslate(u), b.transitionStart(!0, b.swipeDirection), b.animating = !0, g.transitionEnd(function() { b && !b.destroyed && c.allowMomentumBounce && (b.emit("momentumBounce"), b.setTransition(d.speed), b.setTranslate(v), g.transitionEnd(function() { b && !b.destroyed && b.transitionEnd() })) })) : b.velocity ? (b.updateProgress(u), b.setTransition(s), b.setTranslate(u), b.transitionStart(!0, b.swipeDirection), b.animating || (b.animating = !0, g.transitionEnd(function() { b && !b.destroyed && b.transitionEnd() }))) : b.updateProgress(u), b.updateActiveIndex(), b.updateSlidesClasses()
                        } else if (d.freeModeSticky) return void b.slideToClosest();
                        (!d.freeModeMomentum || n >= d.longSwipesMs) && (b.updateProgress(), b.updateActiveIndex(), b.updateSlidesClasses())
                    } else { for (var B = 0, C = b.slidesSizesGrid[0], D = 0; D < h.length; D += d.slidesPerGroup) void 0 !== h[D + d.slidesPerGroup] ? l >= h[D] && l < h[D + d.slidesPerGroup] && (C = h[(B = D) + d.slidesPerGroup] - h[D]) : l >= h[D] && (B = D, C = h[h.length - 1] - h[h.length - 2]); var E = (l - h[B]) / C; if (n > d.longSwipesMs) { if (!d.longSwipes) return void b.slideTo(b.activeIndex); "next" === b.swipeDirection && (E >= d.longSwipesRatio ? b.slideTo(B + d.slidesPerGroup) : b.slideTo(B)), "prev" === b.swipeDirection && (E > 1 - d.longSwipesRatio ? b.slideTo(B + d.slidesPerGroup) : b.slideTo(B)) } else { if (!d.shortSwipes) return void b.slideTo(b.activeIndex); "next" === b.swipeDirection && b.slideTo(B + d.slidesPerGroup), "prev" === b.swipeDirection && b.slideTo(B) } }
                }.bind(b), b.onClick = function(a) { this.allowClick || (this.params.preventClicks && a.preventDefault(), this.params.preventClicksPropagation && this.animating && (a.stopPropagation(), a.stopImmediatePropagation())) }.bind(b);
                var j = "container" === f.touchEventsTarget ? h : i,
                    m = !!f.nested;
                if (l.touch || !l.pointerEvents && !l.prefixedPointerEvents) {
                    if (l.touch) {
                        var n = !("touchstart" !== g.start || !l.passiveListener || !f.passiveListeners) && { passive: !0, capture: !1 };
                        j.addEventListener(g.start, b.onTouchStart, n), j.addEventListener(g.move, b.onTouchMove, l.passiveListener ? { passive: !1, capture: m } : m), j.addEventListener(g.end, b.onTouchEnd, n)
                    }(f.simulateTouch && !w.ios && !w.android || f.simulateTouch && !l.touch && w.ios) && (j.addEventListener("mousedown", b.onTouchStart, !1), d.addEventListener("mousemove", b.onTouchMove, m), d.addEventListener("mouseup", b.onTouchEnd, !1))
                } else j.addEventListener(g.start, b.onTouchStart, !1), d.addEventListener(g.move, b.onTouchMove, m), d.addEventListener(g.end, b.onTouchEnd, !1);
                (f.preventClicks || f.preventClicksPropagation) && j.addEventListener("click", b.onClick, !0), b.on(w.ios || w.android ? "resize orientationchange observerUpdate" : "resize observerUpdate", c, !0)
            },
            detachEvents: function() {
                var a = this,
                    b = a.params,
                    e = a.touchEvents,
                    f = a.el,
                    g = a.wrapperEl,
                    h = "container" === b.touchEventsTarget ? f : g,
                    i = !!b.nested;
                if (l.touch || !l.pointerEvents && !l.prefixedPointerEvents) {
                    if (l.touch) {
                        var j = !("onTouchStart" !== e.start || !l.passiveListener || !b.passiveListeners) && { passive: !0, capture: !1 };
                        h.removeEventListener(e.start, a.onTouchStart, j), h.removeEventListener(e.move, a.onTouchMove, i), h.removeEventListener(e.end, a.onTouchEnd, j)
                    }(b.simulateTouch && !w.ios && !w.android || b.simulateTouch && !l.touch && w.ios) && (h.removeEventListener("mousedown", a.onTouchStart, !1), d.removeEventListener("mousemove", a.onTouchMove, i), d.removeEventListener("mouseup", a.onTouchEnd, !1))
                } else h.removeEventListener(e.start, a.onTouchStart, !1), d.removeEventListener(e.move, a.onTouchMove, i), d.removeEventListener(e.end, a.onTouchEnd, !1);
                (b.preventClicks || b.preventClicksPropagation) && h.removeEventListener("click", a.onClick, !0), a.off(w.ios || w.android ? "resize orientationchange observerUpdate" : "resize observerUpdate", c)
            }
        },
        y = {
            setBreakpoint: function() {
                var a = this,
                    b = a.activeIndex,
                    c = a.initialized,
                    d = a.loopedSlides;
                void 0 === d && (d = 0);
                var e = a.params,
                    f = e.breakpoints;
                if (f && (!f || 0 !== Object.keys(f).length)) {
                    var g = a.getBreakpoint(f);
                    if (g && a.currentBreakpoint !== g) {
                        var h = g in f ? f[g] : void 0;
                        h && ["slidesPerView", "spaceBetween", "slidesPerGroup"].forEach(function(a) {
                            var b = h[a];
                            void 0 !== b && (h[a] = "slidesPerView" !== a || "AUTO" !== b && "auto" !== b ? "slidesPerView" === a ? parseFloat(b) : parseInt(b, 10) : "auto")
                        });
                        var i = h || a.originalParams,
                            j = e.loop && i.slidesPerView !== e.slidesPerView;
                        k.extend(a.params, i), k.extend(a, { allowTouchMove: a.params.allowTouchMove, allowSlideNext: a.params.allowSlideNext, allowSlidePrev: a.params.allowSlidePrev }), a.currentBreakpoint = g, j && c && (a.loopDestroy(), a.loopCreate(), a.updateSlides(), a.slideTo(b - d + a.loopedSlides, 0, !1)), a.emit("breakpoint", i)
                    }
                }
            },
            getBreakpoint: function(a) {
                if (a) {
                    var b = !1,
                        c = [];
                    Object.keys(a).forEach(function(a) { c.push(a) }), c.sort(function(a, b) { return parseInt(a, 10) - parseInt(b, 10) });
                    for (var d = 0; d < c.length; d += 1) {
                        var f = c[d];
                        this.params.breakpointsInverse ? f <= e.innerWidth && (b = f) : f >= e.innerWidth && !b && (b = f)
                    }
                    return b || "max"
                }
            }
        },
        z = { isIE: !!e.navigator.userAgent.match(/Trident/g) || !!e.navigator.userAgent.match(/MSIE/g), isEdge: !!e.navigator.userAgent.match(/Edge/g), isSafari: (o = e.navigator.userAgent.toLowerCase(), 0 <= o.indexOf("safari") && o.indexOf("chrome") < 0 && o.indexOf("android") < 0), isUiWebView: /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(e.navigator.userAgent) },
        A = { init: !0, direction: "horizontal", touchEventsTarget: "container", initialSlide: 0, speed: 300, preventInteractionOnTransition: !1, edgeSwipeDetection: !1, edgeSwipeThreshold: 20, freeMode: !1, freeModeMomentum: !0, freeModeMomentumRatio: 1, freeModeMomentumBounce: !0, freeModeMomentumBounceRatio: 1, freeModeMomentumVelocityRatio: 1, freeModeSticky: !1, freeModeMinimumVelocity: .02, autoHeight: !1, setWrapperSize: !1, virtualTranslate: !1, effect: "slide", breakpoints: void 0, breakpointsInverse: !1, spaceBetween: 0, slidesPerView: 1, slidesPerColumn: 1, slidesPerColumnFill: "column", slidesPerGroup: 1, centeredSlides: !1, slidesOffsetBefore: 0, slidesOffsetAfter: 0, normalizeSlideIndex: !0, centerInsufficientSlides: !1, watchOverflow: !1, roundLengths: !1, touchRatio: 1, touchAngle: 45, simulateTouch: !0, shortSwipes: !0, longSwipes: !0, longSwipesRatio: .5, longSwipesMs: 300, followFinger: !0, allowTouchMove: !0, threshold: 0, touchMoveStopPropagation: !0, touchStartPreventDefault: !0, touchStartForcePreventDefault: !1, touchReleaseOnEdges: !1, uniqueNavElements: !0, resistance: !0, resistanceRatio: .85, watchSlidesProgress: !1, watchSlidesVisibility: !1, grabCursor: !1, preventClicks: !0, preventClicksPropagation: !0, slideToClickedSlide: !1, preloadImages: !0, updateOnImagesReady: !0, loop: !1, loopAdditionalSlides: 0, loopedSlides: null, loopFillGroupWithBlank: !1, allowSlidePrev: !0, allowSlideNext: !0, swipeHandler: null, noSwiping: !0, noSwipingClass: "swiper-no-swiping", noSwipingSelector: null, passiveListeners: !0, containerModifierClass: "swiper-containera-", slideClass: "swiper-slidea", slideBlankClass: "swiper-slide-invisible-blank", slideActiveClass: "swiper-slide-active", slideDuplicateActiveClass: "swiper-slide-duplicate-active", slideVisibleClass: "swiper-slide-visible", slideDuplicateClass: "swiper-slide-duplicate", slideNextClass: "swiper-slide-next", slideDuplicateNextClass: "swiper-slide-duplicate-next", slidePrevClass: "swiper-slide-prev", slideDuplicatePrevClass: "swiper-slide-duplicate-prev", wrapperClass: "swiper-wrappera", runCallbacksOnInit: !0 },
        B = {
            update: p,
            translate: q,
            transition: r,
            slide: s,
            loop: t,
            grabCursor: u,
            manipulation: v,
            events: x,
            breakpoints: y,
            checkOverflow: {
                checkOverflow: function() {
                    var a = this,
                        b = a.isLocked;
                    a.isLocked = 1 === a.snapGrid.length, a.allowSlideNext = !a.isLocked, a.allowSlidePrev = !a.isLocked, b !== a.isLocked && a.emit(a.isLocked ? "lock" : "unlock"), b && b !== a.isLocked && (a.isEnd = !1, a.navigation.update())
                }
            },
            classes: {
                addClasses: function() {
                    var a = this.classNames,
                        b = this.params,
                        c = this.rtl,
                        d = this.$el,
                        e = [];
                    e.push(b.direction), b.freeMode && e.push("free-mode"), l.flexbox || e.push("no-flexbox"), b.autoHeight && e.push("autoheight"), c && e.push("rtl"), 1 < b.slidesPerColumn && e.push("multirow"), w.android && e.push("android"), w.ios && e.push("ios"), (z.isIE || z.isEdge) && (l.pointerEvents || l.prefixedPointerEvents) && e.push("wp8-" + b.direction), e.forEach(function(c) { a.push(b.containerModifierClass + c) }), d.addClass(a.join(" "))
                },
                removeClasses: function() {
                    var a = this.$el,
                        b = this.classNames;
                    a.removeClass(b.join(" "))
                }
            },
            images: {
                loadImage: function(a, b, c, d, f, g) {
                    function h() { g && g() }
                    var i;
                    a.complete && f ? h() : b ? ((i = new e.Image).onload = h, i.onerror = h, d && (i.sizes = d), c && (i.srcset = c), b && (i.src = b)) : h()
                },
                preloadImages: function() {
                    function a() { null != b && b && !b.destroyed && (void 0 !== b.imagesLoaded && (b.imagesLoaded += 1), b.imagesLoaded === b.imagesToLoad.length && (b.params.updateOnImagesReady && b.update(), b.emit("imagesReady"))) }
                    var b = this;
                    b.imagesToLoad = b.$el.find("img");
                    for (var c = 0; c < b.imagesToLoad.length; c += 1) {
                        var d = b.imagesToLoad[c];
                        b.loadImage(d, d.currentSrc || d.getAttribute("src"), d.srcset || d.getAttribute("srcset"), d.sizes || d.getAttribute("sizes"), !0, a)
                    }
                }
            }
        },
        C = {},
        D = function(b) {
            function c() {
                for (var d, e, f, g = [], h = arguments.length; h--;) g[h] = arguments[h];
                1 === g.length && g[0].constructor && g[0].constructor === Object ? f = g[0] : (e = (d = g)[0], f = d[1]), f || (f = {}), f = k.extend({}, f), e && !f.el && (f.el = e), b.call(this, f), Object.keys(B).forEach(function(a) { Object.keys(B[a]).forEach(function(b) { c.prototype[b] || (c.prototype[b] = B[a][b]) }) });
                var i = this;
                void 0 === i.modules && (i.modules = {}), Object.keys(i.modules).forEach(function(a) {
                    var b = i.modules[a];
                    if (b.params) {
                        var c = Object.keys(b.params)[0],
                            d = b.params[c];
                        if ("object" != typeof d || null === d) return;
                        if (!(c in f && "enabled" in d)) return;
                        !0 === f[c] && (f[c] = { enabled: !0 }), "object" != typeof f[c] || "enabled" in f[c] || (f[c].enabled = !0), f[c] || (f[c] = { enabled: !1 })
                    }
                });
                var j = k.extend({}, A);
                i.useModulesParams(j), i.params = k.extend({}, j, C, f), i.originalParams = k.extend({}, i.params), i.passedParams = k.extend({}, f);
                var m = (i.$ = a)(i.params.el);
                if (e = m[0]) {
                    if (1 < m.length) {
                        var n = [];
                        return m.each(function(a, b) {
                            var d = k.extend({}, f, { el: b });
                            n.push(new c(d))
                        }), n
                    }
                    e.swiper = i, m.data("swiper", i);
                    var o, p, q = m.children("." + i.params.wrapperClass);
                    return k.extend(i, { $el: m, el: e, $wrapperEl: q, wrapperEl: q[0], classNames: [], slides: a(), slidesGrid: [], snapGrid: [], slidesSizesGrid: [], isHorizontal: function() { return "horizontal" === i.params.direction }, isVertical: function() { return "vertical" === i.params.direction }, rtl: "rtl" === e.dir.toLowerCase() || "rtl" === m.css("direction"), rtlTranslate: "horizontal" === i.params.direction && ("rtl" === e.dir.toLowerCase() || "rtl" === m.css("direction")), wrongRTL: "-webkit-box" === q.css("display"), activeIndex: 0, realIndex: 0, isBeginning: !0, isEnd: !1, translate: 0, previousTranslate: 0, progress: 0, velocity: 0, animating: !1, allowSlideNext: i.params.allowSlideNext, allowSlidePrev: i.params.allowSlidePrev, touchEvents: (o = ["touchstart", "touchmove", "touchend"], p = ["mousedown", "mousemove", "mouseup"], l.pointerEvents ? p = ["pointerdown", "pointermove", "pointerup"] : l.prefixedPointerEvents && (p = ["MSPointerDown", "MSPointerMove", "MSPointerUp"]), i.touchEventsTouch = { start: o[0], move: o[1], end: o[2] }, i.touchEventsDesktop = { start: p[0], move: p[1], end: p[2] }, l.touch || !i.params.simulateTouch ? i.touchEventsTouch : i.touchEventsDesktop), touchEventsData: { isTouched: void 0, isMoved: void 0, allowTouchCallbacks: void 0, touchStartTime: void 0, isScrolling: void 0, currentTranslate: void 0, startTranslate: void 0, allowThresholdMove: void 0, formElements: "input, select, option, textarea, button, video", lastClickTime: k.now(), clickTimeout: void 0, velocities: [], allowMomentumBounce: void 0, isTouchEvent: void 0, startMoving: void 0 }, allowClick: !0, allowTouchMove: i.params.allowTouchMove, touches: { startX: 0, startY: 0, currentX: 0, currentY: 0, diff: 0 }, imagesToLoad: [], imagesLoaded: 0 }), i.useModules(), i.params.init && i.init(), i
                }
            }
            b && (c.__proto__ = b);
            var d = { extendedDefaults: { configurable: !0 }, defaults: { configurable: !0 }, Class: { configurable: !0 }, $: { configurable: !0 } };
            return ((c.prototype = Object.create(b && b.prototype)).constructor = c).prototype.slidesPerViewDynamic = function() {
                var a = this,
                    b = a.params,
                    c = a.slides,
                    d = a.slidesGrid,
                    e = a.size,
                    f = a.activeIndex,
                    g = 1;
                if (b.centeredSlides) { for (var h, i = c[f].swiperSlideSize, j = f + 1; j < c.length; j += 1) c[j] && !h && (g += 1, e < (i += c[j].swiperSlideSize) && (h = !0)); for (var k = f - 1; 0 <= k; k -= 1) c[k] && !h && (g += 1, e < (i += c[k].swiperSlideSize) && (h = !0)) } else
                    for (var l = f + 1; l < c.length; l += 1) d[l] - d[f] < e && (g += 1);
                return g
            }, c.prototype.update = function() {
                function a() {
                    var a = b.rtlTranslate ? -1 * b.translate : b.translate,
                        c = Math.min(Math.max(a, b.maxTranslate()), b.minTranslate());
                    b.setTranslate(c), b.updateActiveIndex(), b.updateSlidesClasses()
                }
                var b = this;
                if (b && !b.destroyed) {
                    var c = b.snapGrid,
                        d = b.params;
                    d.breakpoints && b.setBreakpoint(), b.updateSize(), b.updateSlides(), b.updateProgress(), b.updateSlidesClasses(), b.params.freeMode ? (a(), b.params.autoHeight && b.updateAutoHeight()) : (("auto" === b.params.slidesPerView || 1 < b.params.slidesPerView) && b.isEnd && !b.params.centeredSlides ? b.slideTo(b.slides.length - 1, 0, !1, !0) : b.slideTo(b.activeIndex, 0, !1, !0)) || a(), d.watchOverflow && c !== b.snapGrid && b.checkOverflow(), b.emit("update")
                }
            }, c.prototype.init = function() {
                var a = this;
                a.initialized || (a.emit("beforeInit"), a.params.breakpoints && a.setBreakpoint(), a.addClasses(), a.params.loop && a.loopCreate(), a.updateSize(), a.updateSlides(), a.params.watchOverflow && a.checkOverflow(), a.params.grabCursor && a.setGrabCursor(), a.params.preloadImages && a.preloadImages(), a.params.loop ? a.slideTo(a.params.initialSlide + a.loopedSlides, 0, a.params.runCallbacksOnInit) : a.slideTo(a.params.initialSlide, 0, a.params.runCallbacksOnInit), a.attachEvents(), a.initialized = !0, a.emit("init"))
            }, c.prototype.destroy = function(a, b) {
                void 0 === a && (a = !0), void 0 === b && (b = !0);
                var c = this,
                    d = c.params,
                    e = c.$el,
                    f = c.$wrapperEl,
                    g = c.slides;
                return void 0 === c.params || c.destroyed || (c.emit("beforeDestroy"), c.initialized = !1, c.detachEvents(), d.loop && c.loopDestroy(), b && (c.removeClasses(), e.removeAttr("style"), f.removeAttr("style"), g && g.length && g.removeClass([d.slideVisibleClass, d.slideActiveClass, d.slideNextClass, d.slidePrevClass].join(" ")).removeAttr("style").removeAttr("data-swiper-slide-index").removeAttr("data-swiper-column").removeAttr("data-swiper-row")), c.emit("destroy"), Object.keys(c.eventsListeners).forEach(function(a) { c.off(a) }), !1 !== a && (c.$el[0].swiper = null, c.$el.data("swiper", null), k.deleteProps(c)), c.destroyed = !0), null
            }, c.extendDefaults = function(a) { k.extend(C, a) }, d.extendedDefaults.get = function() { return C }, d.defaults.get = function() { return A }, d.Class.get = function() { return b }, d.$.get = function() { return a }, Object.defineProperties(c, d), c
        }(m),
        E = { name: "device", proto: { device: w }, "static": { device: w } },
        F = { name: "support", proto: { support: l }, "static": { support: l } },
        G = { name: "browser", proto: { browser: z }, "static": { browser: z } },
        H = {
            name: "resize",
            create: function() {
                var a = this;
                k.extend(a, { resize: { resizeHandler: function() { a && !a.destroyed && a.initialized && (a.emit("beforeResize"), a.emit("resize")) }, orientationChangeHandler: function() { a && !a.destroyed && a.initialized && a.emit("orientationchange") } } })
            },
            on: { init: function() { e.addEventListener("resize", this.resize.resizeHandler), e.addEventListener("orientationchange", this.resize.orientationChangeHandler) }, destroy: function() { e.removeEventListener("resize", this.resize.resizeHandler), e.removeEventListener("orientationchange", this.resize.orientationChangeHandler) } }
        },
        I = {
            func: e.MutationObserver || e.WebkitMutationObserver,
            attach: function(a, b) {
                void 0 === b && (b = {});
                var c = this,
                    d = new I.func(function(a) {
                        if (1 !== a.length) {
                            var b = function() { c.emit("observerUpdate", a[0]) };
                            e.requestAnimationFrame ? e.requestAnimationFrame(b) : e.setTimeout(b, 0)
                        } else c.emit("observerUpdate", a[0])
                    });
                d.observe(a, { attributes: void 0 === b.attributes || b.attributes, childList: void 0 === b.childList || b.childList, characterData: void 0 === b.characterData || b.characterData }), c.observer.observers.push(d)
            },
            init: function() {
                var a = this;
                if (l.observer && a.params.observer) {
                    if (a.params.observeParents)
                        for (var b = a.$el.parents(), c = 0; c < b.length; c += 1) a.observer.attach(b[c]);
                    a.observer.attach(a.$el[0], { childList: a.params.observeSlideChildren }), a.observer.attach(a.$wrapperEl[0], { attributes: !1 })
                }
            },
            destroy: function() { this.observer.observers.forEach(function(a) { a.disconnect() }), this.observer.observers = [] }
        },
        J = { name: "observer", params: { observer: !1, observeParents: !1, observeSlideChildren: !1 }, create: function() { k.extend(this, { observer: { init: I.init.bind(this), attach: I.attach.bind(this), destroy: I.destroy.bind(this), observers: [] } }) }, on: { init: function() { this.observer.init() }, destroy: function() { this.observer.destroy() } } },
        K = {
            update: function(a) {
                function b() { c.updateSlides(), c.updateProgress(), c.updateSlidesClasses(), c.lazy && c.params.lazy.enabled && c.lazy.load() }
                var c = this,
                    d = c.params,
                    e = d.slidesPerView,
                    f = d.slidesPerGroup,
                    g = d.centeredSlides,
                    h = c.params.virtual,
                    i = h.addSlidesBefore,
                    j = h.addSlidesAfter,
                    l = c.virtual,
                    m = l.from,
                    n = l.to,
                    o = l.slides,
                    p = l.slidesGrid,
                    q = l.renderSlide,
                    r = l.offset;
                c.updateActiveIndex();
                var s, t, u, v = c.activeIndex || 0;
                s = c.rtlTranslate ? "right" : c.isHorizontal() ? "left" : "top", g ? (t = Math.floor(e / 2) + f + i, u = Math.floor(e / 2) + f + j) : (t = e + (f - 1) + i, u = f + j);
                var w = Math.max((v || 0) - u, 0),
                    x = Math.min((v || 0) + t, o.length - 1),
                    y = (c.slidesGrid[w] || 0) - (c.slidesGrid[0] || 0);
                if (k.extend(c.virtual, { from: w, to: x, offset: y, slidesGrid: c.slidesGrid }), m === w && n === x && !a) return c.slidesGrid !== p && y !== r && c.slides.css(s, y + "px"), void c.updateProgress();
                if (c.params.virtual.renderExternal) return c.params.virtual.renderExternal.call(c, { offset: y, from: w, to: x, slides: function() { for (var a = [], b = w; b <= x; b += 1) a.push(o[b]); return a }() }), void b();
                var z = [],
                    A = [];
                if (a) c.$wrapperEl.find("." + c.params.slideClass).remove();
                else
                    for (var B = m; B <= n; B += 1)(B < w || x < B) && c.$wrapperEl.find("." + c.params.slideClass + '[data-swiper-slide-index="' + B + '"]').remove();
                for (var C = 0; C < o.length; C += 1) w <= C && C <= x && (void 0 === n || a ? A.push(C) : (n < C && A.push(C), C < m && z.push(C)));
                A.forEach(function(a) { c.$wrapperEl.append(q(o[a], a)) }), z.sort(function(a, b) { return b - a }).forEach(function(a) { c.$wrapperEl.prepend(q(o[a], a)) }), c.$wrapperEl.children(".swiper-slide").css(s, y + "px"), b()
            },
            renderSlide: function(b, c) {
                var d = this,
                    e = d.params.virtual;
                if (e.cache && d.virtual.cache[c]) return d.virtual.cache[c];
                var f = a(e.renderSlide ? e.renderSlide.call(d, b, c) : '<div class="' + d.params.slideClass + '" data-swiper-slide-index="' + c + '">' + b + "</div>");
                return f.attr("data-swiper-slide-index") || f.attr("data-swiper-slide-index", c), e.cache && (d.virtual.cache[c] = f), f
            },
            appendSlide: function(a) { this.virtual.slides.push(a), this.virtual.update(!0) },
            prependSlide: function(a) {
                var b = this;
                if (b.virtual.slides.unshift(a), b.params.virtual.cache) {
                    var c = b.virtual.cache,
                        d = {};
                    Object.keys(c).forEach(function(a) { d[a + 1] = c[a] }), b.virtual.cache = d
                }
                b.virtual.update(!0), b.slideNext(0)
            }
        },
        L = {
            name: "virtual",
            params: { virtual: { enabled: !1, slides: [], cache: !0, renderSlide: null, renderExternal: null, addSlidesBefore: 0, addSlidesAfter: 0 } },
            create: function() {
                var a = this;
                k.extend(a, { virtual: { update: K.update.bind(a), appendSlide: K.appendSlide.bind(a), prependSlide: K.prependSlide.bind(a), renderSlide: K.renderSlide.bind(a), slides: a.params.virtual.slides, cache: {} } })
            },
            on: {
                beforeInit: function() {
                    var a = this;
                    if (a.params.virtual.enabled) {
                        a.classNames.push(a.params.containerModifierClass + "virtual");
                        var b = { watchSlidesProgress: !0 };
                        k.extend(a.params, b), k.extend(a.originalParams, b), a.params.initialSlide || a.virtual.update()
                    }
                },
                setTranslate: function() { this.params.virtual.enabled && this.virtual.update() }
            }
        },
        M = {
            handle: function(a) {
                var b = this,
                    c = b.rtlTranslate,
                    f = a;
                f.originalEvent && (f = f.originalEvent);
                var g = f.keyCode || f.charCode;
                if (!b.allowSlideNext && (b.isHorizontal() && 39 === g || b.isVertical() && 40 === g)) return !1;
                if (!b.allowSlidePrev && (b.isHorizontal() && 37 === g || b.isVertical() && 38 === g)) return !1;
                if (!(f.shiftKey || f.altKey || f.ctrlKey || f.metaKey || d.activeElement && d.activeElement.nodeName && ("input" === d.activeElement.nodeName.toLowerCase() || "textarea" === d.activeElement.nodeName.toLowerCase()))) {
                    if (b.params.keyboard.onlyInViewport && (37 === g || 39 === g || 38 === g || 40 === g)) {
                        var h = !1;
                        if (0 < b.$el.parents("." + b.params.slideClass).length && 0 === b.$el.parents("." + b.params.slideActiveClass).length) return;
                        var i = e.innerWidth,
                            j = e.innerHeight,
                            k = b.$el.offset();
                        c && (k.left -= b.$el[0].scrollLeft);
                        for (var l = [
                                [k.left, k.top],
                                [k.left + b.width, k.top],
                                [k.left, k.top + b.height],
                                [k.left + b.width, k.top + b.height]
                            ], m = 0; m < l.length; m += 1) {
                            var n = l[m];
                            0 <= n[0] && n[0] <= i && 0 <= n[1] && n[1] <= j && (h = !0)
                        }
                        if (!h) return
                    }
                    b.isHorizontal() ? (37 !== g && 39 !== g || (f.preventDefault ? f.preventDefault() : f.returnValue = !1), (39 === g && !c || 37 === g && c) && b.slideNext(), (37 === g && !c || 39 === g && c) && b.slidePrev()) : (38 !== g && 40 !== g || (f.preventDefault ? f.preventDefault() : f.returnValue = !1), 40 === g && b.slideNext(), 38 === g && b.slidePrev()), b.emit("keyPress", g)
                }
            },
            enable: function() { this.keyboard.enabled || (a(d).on("keydown", this.keyboard.handle), this.keyboard.enabled = !0) },
            disable: function() { this.keyboard.enabled && (a(d).off("keydown", this.keyboard.handle), this.keyboard.enabled = !1) }
        },
        N = { name: "keyboard", params: { keyboard: { enabled: !1, onlyInViewport: !0 } }, create: function() { k.extend(this, { keyboard: { enabled: !1, enable: M.enable.bind(this), disable: M.disable.bind(this), handle: M.handle.bind(this) } }) }, on: { init: function() { this.params.keyboard.enabled && this.keyboard.enable() }, destroy: function() { this.keyboard.enabled && this.keyboard.disable() } } },
        O = {
            lastScrollTime: k.now(),
            event: -1 < e.navigator.userAgent.indexOf("firefox") ? "DOMMouseScroll" : function() {
                var a = "onwheel",
                    b = a in d;
                if (!b) {
                    var c = d.createElement("div");
                    c.setAttribute(a, "return;"), b = "function" == typeof c[a]
                }
                return !b && d.implementation && d.implementation.hasFeature && !0 !== d.implementation.hasFeature("", "") && (b = d.implementation.hasFeature("Events.wheel", "3.0")), b
            }() ? "wheel" : "mousewheel",
            normalize: function(a) {
                var b = 0,
                    c = 0,
                    d = 0,
                    e = 0;
                return "detail" in a && (c = a.detail), "wheelDelta" in a && (c = -a.wheelDelta / 120), "wheelDeltaY" in a && (c = -a.wheelDeltaY / 120), "wheelDeltaX" in a && (b = -a.wheelDeltaX / 120), "axis" in a && a.axis === a.HORIZONTAL_AXIS && (b = c, c = 0), d = 10 * b, e = 10 * c, "deltaY" in a && (e = a.deltaY), "deltaX" in a && (d = a.deltaX), (d || e) && a.deltaMode && (1 === a.deltaMode ? (d *= 40, e *= 40) : (d *= 800, e *= 800)), d && !b && (b = d < 1 ? -1 : 1), e && !c && (c = e < 1 ? -1 : 1), { spinX: b, spinY: c, pixelX: d, pixelY: e }
            },
            handleMouseEnter: function() { this.mouseEntered = !0 },
            handleMouseLeave: function() { this.mouseEntered = !1 },
            handle: function(a) {
                var b = a,
                    c = this,
                    d = c.params.mousewheel;
                if (!c.mouseEntered && !d.releaseOnEdges) return !0;
                b.originalEvent && (b = b.originalEvent);
                var f = 0,
                    g = c.rtlTranslate ? -1 : 1,
                    h = O.normalize(b);
                if (d.forceToAxis)
                    if (c.isHorizontal()) {
                        if (!(Math.abs(h.pixelX) > Math.abs(h.pixelY))) return !0;
                        f = h.pixelX * g
                    } else {
                        if (!(Math.abs(h.pixelY) > Math.abs(h.pixelX))) return !0;
                        f = h.pixelY
                    }
                else f = Math.abs(h.pixelX) > Math.abs(h.pixelY) ? -h.pixelX * g : -h.pixelY;
                if (0 === f) return !0;
                if (d.invert && (f = -f), c.params.freeMode) {
                    c.params.loop && c.loopFix();
                    var i = c.getTranslate() + f * d.sensitivity,
                        j = c.isBeginning,
                        l = c.isEnd;
                    if (i >= c.minTranslate() && (i = c.minTranslate()), i <= c.maxTranslate() && (i = c.maxTranslate()), c.setTransition(0), c.setTranslate(i), c.updateProgress(), c.updateActiveIndex(), c.updateSlidesClasses(), (!j && c.isBeginning || !l && c.isEnd) && c.updateSlidesClasses(), c.params.freeModeSticky && (clearTimeout(c.mousewheel.timeout), c.mousewheel.timeout = k.nextTick(function() { c.slideToClosest() }, 300)), c.emit("scroll", b), c.params.autoplay && c.params.autoplayDisableOnInteraction && c.autoplay.stop(), i === c.minTranslate() || i === c.maxTranslate()) return !0
                } else {
                    if (60 < k.now() - c.mousewheel.lastScrollTime)
                        if (f < 0)
                            if (c.isEnd && !c.params.loop || c.animating) { if (d.releaseOnEdges) return !0 } else c.slideNext(), c.emit("scroll", b);
                    else if (c.isBeginning && !c.params.loop || c.animating) { if (d.releaseOnEdges) return !0 } else c.slidePrev(), c.emit("scroll", b);
                    c.mousewheel.lastScrollTime = (new e.Date).getTime()
                }
                return b.preventDefault ? b.preventDefault() : b.returnValue = !1, !1
            },
            enable: function() { var b = this; if (!O.event) return !1; if (b.mousewheel.enabled) return !1; var c = b.$el; return "container" !== b.params.mousewheel.eventsTarged && (c = a(b.params.mousewheel.eventsTarged)), c.on("mouseenter", b.mousewheel.handleMouseEnter), c.on("mouseleave", b.mousewheel.handleMouseLeave), c.on(O.event, b.mousewheel.handle), b.mousewheel.enabled = !0 },
            disable: function() { var b = this; if (!O.event) return !1; if (!b.mousewheel.enabled) return !1; var c = b.$el; return "container" !== b.params.mousewheel.eventsTarged && (c = a(b.params.mousewheel.eventsTarged)), c.off(O.event, b.mousewheel.handle), !(b.mousewheel.enabled = !1) }
        },
        P = {
            update: function() {
                var a = this,
                    b = a.params.navigation;
                if (!a.params.loop) {
                    var c = a.navigation,
                        d = c.$nextEl,
                        e = c.$prevEl;
                    e && 0 < e.length && (a.isBeginning ? e.addClass(b.disabledClass) : e.removeClass(b.disabledClass), e[a.params.watchOverflow && a.isLocked ? "addClass" : "removeClass"](b.lockClass)), d && 0 < d.length && (a.isEnd ? d.addClass(b.disabledClass) : d.removeClass(b.disabledClass), d[a.params.watchOverflow && a.isLocked ? "addClass" : "removeClass"](b.lockClass))
                }
            },
            onPrevClick: function(a) { a.preventDefault(), this.isBeginning && !this.params.loop || this.slidePrev() },
            onNextClick: function(a) { a.preventDefault(), this.isEnd && !this.params.loop || this.slideNext() },
            init: function() {
                var b, c, d = this,
                    e = d.params.navigation;
                (e.nextEl || e.prevEl) && (e.nextEl && (b = a(e.nextEl), d.params.uniqueNavElements && "string" == typeof e.nextEl && 1 < b.length && 1 === d.$el.find(e.nextEl).length && (b = d.$el.find(e.nextEl))), e.prevEl && (c = a(e.prevEl), d.params.uniqueNavElements && "string" == typeof e.prevEl && 1 < c.length && 1 === d.$el.find(e.prevEl).length && (c = d.$el.find(e.prevEl))), b && 0 < b.length && b.on("click", d.navigation.onNextClick), c && 0 < c.length && c.on("click", d.navigation.onPrevClick), k.extend(d.navigation, { $nextEl: b, nextEl: b && b[0], $prevEl: c, prevEl: c && c[0] }))
            },
            destroy: function() {
                var a = this,
                    b = a.navigation,
                    c = b.$nextEl,
                    d = b.$prevEl;
                c && c.length && (c.off("click", a.navigation.onNextClick), c.removeClass(a.params.navigation.disabledClass)), d && d.length && (d.off("click", a.navigation.onPrevClick), d.removeClass(a.params.navigation.disabledClass))
            }
        },
        Q = {
            update: function() {
                var b = this,
                    c = b.rtl,
                    d = b.params.pagination;
                if (d.el && b.pagination.el && b.pagination.$el && 0 !== b.pagination.$el.length) {
                    var e, f = b.virtual && b.params.virtual.enabled ? b.virtual.slides.length : b.slides.length,
                        g = b.pagination.$el,
                        h = b.params.loop ? Math.ceil((f - 2 * b.loopedSlides) / b.params.slidesPerGroup) : b.snapGrid.length;
                    if (b.params.loop ? ((e = Math.ceil((b.activeIndex - b.loopedSlides) / b.params.slidesPerGroup)) > f - 1 - 2 * b.loopedSlides && (e -= f - 2 * b.loopedSlides), h - 1 < e && (e -= h), e < 0 && "bullets" !== b.params.paginationType && (e = h + e)) : e = void 0 !== b.snapIndex ? b.snapIndex : b.activeIndex || 0, "bullets" === d.type && b.pagination.bullets && 0 < b.pagination.bullets.length) {
                        var i, j, k, l = b.pagination.bullets;
                        if (d.dynamicBullets && (b.pagination.bulletSize = l.eq(0)[b.isHorizontal() ? "outerWidth" : "outerHeight"](!0), g.css(b.isHorizontal() ? "width" : "height", b.pagination.bulletSize * (d.dynamicMainBullets + 4) + "px"), 1 < d.dynamicMainBullets && void 0 !== b.previousIndex && (b.pagination.dynamicBulletIndex += e - b.previousIndex, b.pagination.dynamicBulletIndex > d.dynamicMainBullets - 1 ? b.pagination.dynamicBulletIndex = d.dynamicMainBullets - 1 : b.pagination.dynamicBulletIndex < 0 && (b.pagination.dynamicBulletIndex = 0)),
                                i = e - b.pagination.dynamicBulletIndex, k = ((j = i + (Math.min(l.length, d.dynamicMainBullets) - 1)) + i) / 2), l.removeClass(d.bulletActiveClass + " " + d.bulletActiveClass + "-next " + d.bulletActiveClass + "-next-next " + d.bulletActiveClass + "-prev " + d.bulletActiveClass + "-prev-prev " + d.bulletActiveClass + "-main"), 1 < g.length) l.each(function(b, c) {
                            var f = a(c),
                                g = f.index();
                            g === e && f.addClass(d.bulletActiveClass), d.dynamicBullets && (i <= g && g <= j && f.addClass(d.bulletActiveClass + "-main"), g === i && f.prev().addClass(d.bulletActiveClass + "-prev").prev().addClass(d.bulletActiveClass + "-prev-prev"), g === j && f.next().addClass(d.bulletActiveClass + "-next").next().addClass(d.bulletActiveClass + "-next-next"))
                        });
                        else if (l.eq(e).addClass(d.bulletActiveClass), d.dynamicBullets) {
                            for (var m = l.eq(i), n = l.eq(j), o = i; o <= j; o += 1) l.eq(o).addClass(d.bulletActiveClass + "-main");
                            m.prev().addClass(d.bulletActiveClass + "-prev").prev().addClass(d.bulletActiveClass + "-prev-prev"), n.next().addClass(d.bulletActiveClass + "-next").next().addClass(d.bulletActiveClass + "-next-next")
                        }
                        if (d.dynamicBullets) {
                            var p = Math.min(l.length, d.dynamicMainBullets + 4),
                                q = (b.pagination.bulletSize * p - b.pagination.bulletSize) / 2 - k * b.pagination.bulletSize,
                                r = c ? "right" : "left";
                            l.css(b.isHorizontal() ? r : "top", q + "px")
                        }
                    }
                    if ("fraction" === d.type && (g.find("." + d.currentClass).text(d.formatFractionCurrent(e + 1)), g.find("." + d.totalClass).text(d.formatFractionTotal(h))), "progressbar" === d.type) {
                        var s;
                        s = d.progressbarOpposite ? b.isHorizontal() ? "vertical" : "horizontal" : b.isHorizontal() ? "horizontal" : "vertical";
                        var t = (e + 1) / h,
                            u = 1,
                            v = 1;
                        "horizontal" === s ? u = t : v = t, g.find("." + d.progressbarFillClass).transform("translate3d(0,0,0) scaleX(" + u + ") scaleY(" + v + ")").transition(b.params.speed)
                    }
                    "custom" === d.type && d.renderCustom ? (g.html(d.renderCustom(b, e + 1, h)), b.emit("paginationRender", b, g[0])) : b.emit("paginationUpdate", b, g[0]), g[b.params.watchOverflow && b.isLocked ? "addClass" : "removeClass"](d.lockClass)
                }
            },
            render: function() {
                var a = this,
                    b = a.params.pagination;
                if (b.el && a.pagination.el && a.pagination.$el && 0 !== a.pagination.$el.length) {
                    var c = a.virtual && a.params.virtual.enabled ? a.virtual.slides.length : a.slides.length,
                        d = a.pagination.$el,
                        e = "";
                    if ("bullets" === b.type) {
                        for (var f = a.params.loop ? Math.ceil((c - 2 * a.loopedSlides) / a.params.slidesPerGroup) : a.snapGrid.length, g = 0; g < f; g += 1) e += b.renderBullet ? b.renderBullet.call(a, g, b.bulletClass) : "<" + b.bulletElement + ' class="' + b.bulletClass + '"></' + b.bulletElement + ">";
                        d.html(e), a.pagination.bullets = d.find("." + b.bulletClass)
                    }
                    "fraction" === b.type && (e = b.renderFraction ? b.renderFraction.call(a, b.currentClass, b.totalClass) : '<span class="' + b.currentClass + '"></span> / <span class="' + b.totalClass + '"></span>', d.html(e)), "progressbar" === b.type && (e = b.renderProgressbar ? b.renderProgressbar.call(a, b.progressbarFillClass) : '<span class="' + b.progressbarFillClass + '"></span>', d.html(e)), "custom" !== b.type && a.emit("paginationRender", a.pagination.$el[0])
                }
            },
            init: function() {
                var b = this,
                    c = b.params.pagination;
                if (c.el) {
                    var d = a(c.el);
                    0 !== d.length && (b.params.uniqueNavElements && "string" == typeof c.el && 1 < d.length && 1 === b.$el.find(c.el).length && (d = b.$el.find(c.el)), "bullets" === c.type && c.clickable && d.addClass(c.clickableClass), d.addClass(c.modifierClass + c.type), "bullets" === c.type && c.dynamicBullets && (d.addClass("" + c.modifierClass + c.type + "-dynamic"), b.pagination.dynamicBulletIndex = 0, c.dynamicMainBullets < 1 && (c.dynamicMainBullets = 1)), "progressbar" === c.type && c.progressbarOpposite && d.addClass(c.progressbarOppositeClass), c.clickable && d.on("click", "." + c.bulletClass, function(c) {
                        c.preventDefault();
                        var d = a(this).index() * b.params.slidesPerGroup;
                        b.params.loop && (d += b.loopedSlides), b.slideTo(d)
                    }), k.extend(b.pagination, { $el: d, el: d[0] }))
                }
            },
            destroy: function() {
                var a = this,
                    b = a.params.pagination;
                if (b.el && a.pagination.el && a.pagination.$el && 0 !== a.pagination.$el.length) {
                    var c = a.pagination.$el;
                    c.removeClass(b.hiddenClass), c.removeClass(b.modifierClass + b.type), a.pagination.bullets && a.pagination.bullets.removeClass(b.bulletActiveClass), b.clickable && c.off("click", "." + b.bulletClass)
                }
            }
        },
        R = {
            setTranslate: function() {
                var a = this;
                if (a.params.scrollbar.el && a.scrollbar.el) {
                    var b = a.scrollbar,
                        c = a.rtlTranslate,
                        d = a.progress,
                        e = b.dragSize,
                        f = b.trackSize,
                        g = b.$dragEl,
                        h = b.$el,
                        i = a.params.scrollbar,
                        j = e,
                        k = (f - e) * d;
                    c ? 0 < (k = -k) ? (j = e - k, k = 0) : f < -k + e && (j = f + k) : k < 0 ? (j = e + k, k = 0) : f < k + e && (j = f - k), a.isHorizontal() ? (l.transforms3d ? g.transform("translate3d(" + k + "px, 0, 0)") : g.transform("translateX(" + k + "px)"), g[0].style.width = j + "px") : (l.transforms3d ? g.transform("translate3d(0px, " + k + "px, 0)") : g.transform("translateY(" + k + "px)"), g[0].style.height = j + "px"), i.hide && (clearTimeout(a.scrollbar.timeout), h[0].style.opacity = 1, a.scrollbar.timeout = setTimeout(function() { h[0].style.opacity = 0, h.transition(400) }, 1e3))
                }
            },
            setTransition: function(a) { this.params.scrollbar.el && this.scrollbar.el && this.scrollbar.$dragEl.transition(a) },
            updateSize: function() {
                var a = this;
                if (a.params.scrollbar.el && a.scrollbar.el) {
                    var b = a.scrollbar,
                        c = b.$dragEl,
                        d = b.$el;
                    c[0].style.width = "", c[0].style.height = "";
                    var e, f = a.isHorizontal() ? d[0].offsetWidth : d[0].offsetHeight,
                        g = a.size / a.virtualSize,
                        h = g * (f / a.size);
                    e = "auto" === a.params.scrollbar.dragSize ? f * g : parseInt(a.params.scrollbar.dragSize, 10), a.isHorizontal() ? c[0].style.width = e + "px" : c[0].style.height = e + "px", d[0].style.display = 1 <= g ? "none" : "", a.params.scrollbarHide && (d[0].style.opacity = 0), k.extend(b, { trackSize: f, divider: g, moveDivider: h, dragSize: e }), b.$el[a.params.watchOverflow && a.isLocked ? "addClass" : "removeClass"](a.params.scrollbar.lockClass)
                }
            },
            setDragPosition: function(a) {
                var b, c = this,
                    d = c.scrollbar,
                    e = c.rtlTranslate,
                    f = d.$el,
                    g = d.dragSize,
                    h = d.trackSize;
                b = ((c.isHorizontal() ? "touchstart" === a.type || "touchmove" === a.type ? a.targetTouches[0].pageX : a.pageX || a.clientX : "touchstart" === a.type || "touchmove" === a.type ? a.targetTouches[0].pageY : a.pageY || a.clientY) - f.offset()[c.isHorizontal() ? "left" : "top"] - g / 2) / (h - g), b = Math.max(Math.min(b, 1), 0), e && (b = 1 - b);
                var i = c.minTranslate() + (c.maxTranslate() - c.minTranslate()) * b;
                c.updateProgress(i), c.setTranslate(i), c.updateActiveIndex(), c.updateSlidesClasses()
            },
            onDragStart: function(a) {
                var b = this,
                    c = b.params.scrollbar,
                    d = b.scrollbar,
                    e = b.$wrapperEl,
                    f = d.$el,
                    g = d.$dragEl;
                b.scrollbar.isTouched = !0, a.preventDefault(), a.stopPropagation(), e.transition(100), g.transition(100), d.setDragPosition(a), clearTimeout(b.scrollbar.dragTimeout), f.transition(0), c.hide && f.css("opacity", 1), b.emit("scrollbarDragStart", a)
            },
            onDragMove: function(a) {
                var b = this.scrollbar,
                    c = this.$wrapperEl,
                    d = b.$el,
                    e = b.$dragEl;
                this.scrollbar.isTouched && (a.preventDefault ? a.preventDefault() : a.returnValue = !1, b.setDragPosition(a), c.transition(0), d.transition(0), e.transition(0), this.emit("scrollbarDragMove", a))
            },
            onDragEnd: function(a) {
                var b = this,
                    c = b.params.scrollbar,
                    d = b.scrollbar.$el;
                b.scrollbar.isTouched && (b.scrollbar.isTouched = !1, c.hide && (clearTimeout(b.scrollbar.dragTimeout), b.scrollbar.dragTimeout = k.nextTick(function() { d.css("opacity", 0), d.transition(400) }, 1e3)), b.emit("scrollbarDragEnd", a), c.snapOnRelease && b.slideToClosest())
            },
            enableDraggable: function() {
                var a = this;
                if (a.params.scrollbar.el) {
                    var b = a.scrollbar,
                        c = a.touchEventsTouch,
                        e = a.touchEventsDesktop,
                        f = a.params,
                        g = b.$el[0],
                        h = !(!l.passiveListener || !f.passiveListeners) && { passive: !1, capture: !1 },
                        i = !(!l.passiveListener || !f.passiveListeners) && { passive: !0, capture: !1 };
                    l.touch ? (g.addEventListener(c.start, a.scrollbar.onDragStart, h), g.addEventListener(c.move, a.scrollbar.onDragMove, h), g.addEventListener(c.end, a.scrollbar.onDragEnd, i)) : (g.addEventListener(e.start, a.scrollbar.onDragStart, h), d.addEventListener(e.move, a.scrollbar.onDragMove, h), d.addEventListener(e.end, a.scrollbar.onDragEnd, i))
                }
            },
            disableDraggable: function() {
                var a = this;
                if (a.params.scrollbar.el) {
                    var b = a.scrollbar,
                        c = a.touchEventsTouch,
                        e = a.touchEventsDesktop,
                        f = a.params,
                        g = b.$el[0],
                        h = !(!l.passiveListener || !f.passiveListeners) && { passive: !1, capture: !1 },
                        i = !(!l.passiveListener || !f.passiveListeners) && { passive: !0, capture: !1 };
                    l.touch ? (g.removeEventListener(c.start, a.scrollbar.onDragStart, h), g.removeEventListener(c.move, a.scrollbar.onDragMove, h), g.removeEventListener(c.end, a.scrollbar.onDragEnd, i)) : (g.removeEventListener(e.start, a.scrollbar.onDragStart, h), d.removeEventListener(e.move, a.scrollbar.onDragMove, h), d.removeEventListener(e.end, a.scrollbar.onDragEnd, i))
                }
            },
            init: function() {
                var b = this;
                if (b.params.scrollbar.el) {
                    var c = b.scrollbar,
                        d = b.$el,
                        e = b.params.scrollbar,
                        f = a(e.el);
                    b.params.uniqueNavElements && "string" == typeof e.el && 1 < f.length && 1 === d.find(e.el).length && (f = d.find(e.el));
                    var g = f.find("." + b.params.scrollbar.dragClass);
                    0 === g.length && (g = a('<div class="' + b.params.scrollbar.dragClass + '"></div>'), f.append(g)), k.extend(c, { $el: f, el: f[0], $dragEl: g, dragEl: g[0] }), e.draggable && c.enableDraggable()
                }
            },
            destroy: function() { this.scrollbar.disableDraggable() }
        },
        S = {
            setTransform: function(b, c) {
                var d = this.rtl,
                    e = a(b),
                    f = d ? -1 : 1,
                    g = e.attr("data-swiper-parallax") || "0",
                    h = e.attr("data-swiper-parallax-x"),
                    i = e.attr("data-swiper-parallax-y"),
                    j = e.attr("data-swiper-parallax-scale"),
                    k = e.attr("data-swiper-parallax-opacity");
                if (h || i ? (h = h || "0", i = i || "0") : this.isHorizontal() ? (h = g, i = "0") : (i = g, h = "0"), h = 0 <= h.indexOf("%") ? parseInt(h, 10) * c * f + "%" : h * c * f + "px", i = 0 <= i.indexOf("%") ? parseInt(i, 10) * c + "%" : i * c + "px", null != k) {
                    var l = k - (k - 1) * (1 - Math.abs(c));
                    e[0].style.opacity = l
                }
                if (null == j) e.transform("translate3d(" + h + ", " + i + ", 0px)");
                else {
                    var m = j - (j - 1) * (1 - Math.abs(c));
                    e.transform("translate3d(" + h + ", " + i + ", 0px) scale(" + m + ")")
                }
            },
            setTranslate: function() {
                var b = this,
                    c = b.$el,
                    d = b.slides,
                    e = b.progress,
                    f = b.snapGrid;
                c.children("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]").each(function(a, c) { b.parallax.setTransform(c, e) }), d.each(function(c, d) {
                    var g = d.progress;
                    1 < b.params.slidesPerGroup && "auto" !== b.params.slidesPerView && (g += Math.ceil(c / 2) - e * (f.length - 1)), g = Math.min(Math.max(g, -1), 1), a(d).find("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]").each(function(a, c) { b.parallax.setTransform(c, g) })
                })
            },
            setTransition: function(b) {
                void 0 === b && (b = this.params.speed), this.$el.find("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]").each(function(c, d) {
                    var e = a(d),
                        f = parseInt(e.attr("data-swiper-parallax-duration"), 10) || b;
                    0 === b && (f = 0), e.transition(f)
                })
            }
        },
        T = {
            getDistanceBetweenTouches: function(a) {
                if (a.targetTouches.length < 2) return 1;
                var b = a.targetTouches[0].pageX,
                    c = a.targetTouches[0].pageY,
                    d = a.targetTouches[1].pageX,
                    e = a.targetTouches[1].pageY;
                return Math.sqrt(Math.pow(d - b, 2) + Math.pow(e - c, 2))
            },
            onGestureStart: function(b) {
                var c = this,
                    d = c.params.zoom,
                    e = c.zoom,
                    f = e.gesture;
                if (e.fakeGestureTouched = !1, e.fakeGestureMoved = !1, !l.gestures) {
                    if ("touchstart" !== b.type || "touchstart" === b.type && b.targetTouches.length < 2) return;
                    e.fakeGestureTouched = !0, f.scaleStart = T.getDistanceBetweenTouches(b)
                }
                f.$slideEl && f.$slideEl.length || (f.$slideEl = a(b.target).closest(".swiper-slidea"), 0 === f.$slideEl.length && (f.$slideEl = c.slides.eq(c.activeIndex)), f.$imageEl = f.$slideEl.find("img, svg, canvas"), f.$imageWrapEl = f.$imageEl.parent("." + d.containerClass), f.maxRatio = f.$imageWrapEl.attr("data-swiper-zoom") || d.maxRatio, 0 !== f.$imageWrapEl.length) ? (f.$imageEl.transition(0), c.zoom.isScaling = !0) : f.$imageEl = void 0
            },
            onGestureChange: function(a) {
                var b = this.params.zoom,
                    c = this.zoom,
                    d = c.gesture;
                if (!l.gestures) {
                    if ("touchmove" !== a.type || "touchmove" === a.type && a.targetTouches.length < 2) return;
                    c.fakeGestureMoved = !0, d.scaleMove = T.getDistanceBetweenTouches(a)
                }
                d.$imageEl && 0 !== d.$imageEl.length && (c.scale = l.gestures ? a.scale * c.currentScale : d.scaleMove / d.scaleStart * c.currentScale, c.scale > d.maxRatio && (c.scale = d.maxRatio - 1 + Math.pow(c.scale - d.maxRatio + 1, .5)), c.scale < b.minRatio && (c.scale = b.minRatio + 1 - Math.pow(b.minRatio - c.scale + 1, .5)), d.$imageEl.transform("translate3d(0,0,0) scale(" + c.scale + ")"))
            },
            onGestureEnd: function(a) {
                var b = this.params.zoom,
                    c = this.zoom,
                    d = c.gesture;
                if (!l.gestures) {
                    if (!c.fakeGestureTouched || !c.fakeGestureMoved) return;
                    if ("touchend" !== a.type || "touchend" === a.type && a.changedTouches.length < 2 && !w.android) return;
                    c.fakeGestureTouched = !1, c.fakeGestureMoved = !1
                }
                d.$imageEl && 0 !== d.$imageEl.length && (c.scale = Math.max(Math.min(c.scale, d.maxRatio), b.minRatio), d.$imageEl.transition(this.params.speed).transform("translate3d(0,0,0) scale(" + c.scale + ")"), c.currentScale = c.scale, c.isScaling = !1, 1 === c.scale && (d.$slideEl = void 0))
            },
            onTouchStart: function(a) {
                var b = this.zoom,
                    c = b.gesture,
                    d = b.image;
                c.$imageEl && 0 !== c.$imageEl.length && (d.isTouched || (w.android && a.preventDefault(), d.isTouched = !0, d.touchesStart.x = "touchstart" === a.type ? a.targetTouches[0].pageX : a.pageX, d.touchesStart.y = "touchstart" === a.type ? a.targetTouches[0].pageY : a.pageY))
            },
            onTouchMove: function(a) {
                var b = this,
                    c = b.zoom,
                    d = c.gesture,
                    e = c.image,
                    f = c.velocity;
                if (d.$imageEl && 0 !== d.$imageEl.length && (b.allowClick = !1, e.isTouched && d.$slideEl)) {
                    e.isMoved || (e.width = d.$imageEl[0].offsetWidth, e.height = d.$imageEl[0].offsetHeight, e.startX = k.getTranslate(d.$imageWrapEl[0], "x") || 0, e.startY = k.getTranslate(d.$imageWrapEl[0], "y") || 0, d.slideWidth = d.$slideEl[0].offsetWidth, d.slideHeight = d.$slideEl[0].offsetHeight, d.$imageWrapEl.transition(0), b.rtl && (e.startX = -e.startX, e.startY = -e.startY));
                    var g = e.width * c.scale,
                        h = e.height * c.scale;
                    if (!(g < d.slideWidth && h < d.slideHeight)) {
                        if (e.minX = Math.min(d.slideWidth / 2 - g / 2, 0), e.maxX = -e.minX, e.minY = Math.min(d.slideHeight / 2 - h / 2, 0), e.maxY = -e.minY, e.touchesCurrent.x = "touchmove" === a.type ? a.targetTouches[0].pageX : a.pageX, e.touchesCurrent.y = "touchmove" === a.type ? a.targetTouches[0].pageY : a.pageY, !e.isMoved && !c.isScaling) { if (b.isHorizontal() && (Math.floor(e.minX) === Math.floor(e.startX) && e.touchesCurrent.x < e.touchesStart.x || Math.floor(e.maxX) === Math.floor(e.startX) && e.touchesCurrent.x > e.touchesStart.x)) return void(e.isTouched = !1); if (!b.isHorizontal() && (Math.floor(e.minY) === Math.floor(e.startY) && e.touchesCurrent.y < e.touchesStart.y || Math.floor(e.maxY) === Math.floor(e.startY) && e.touchesCurrent.y > e.touchesStart.y)) return void(e.isTouched = !1) }
                        a.preventDefault(), a.stopPropagation(), e.isMoved = !0, e.currentX = e.touchesCurrent.x - e.touchesStart.x + e.startX, e.currentY = e.touchesCurrent.y - e.touchesStart.y + e.startY, e.currentX < e.minX && (e.currentX = e.minX + 1 - Math.pow(e.minX - e.currentX + 1, .8)), e.currentX > e.maxX && (e.currentX = e.maxX - 1 + Math.pow(e.currentX - e.maxX + 1, .8)), e.currentY < e.minY && (e.currentY = e.minY + 1 - Math.pow(e.minY - e.currentY + 1, .8)), e.currentY > e.maxY && (e.currentY = e.maxY - 1 + Math.pow(e.currentY - e.maxY + 1, .8)), f.prevPositionX || (f.prevPositionX = e.touchesCurrent.x), f.prevPositionY || (f.prevPositionY = e.touchesCurrent.y), f.prevTime || (f.prevTime = Date.now()), f.x = (e.touchesCurrent.x - f.prevPositionX) / (Date.now() - f.prevTime) / 2, f.y = (e.touchesCurrent.y - f.prevPositionY) / (Date.now() - f.prevTime) / 2, Math.abs(e.touchesCurrent.x - f.prevPositionX) < 2 && (f.x = 0), Math.abs(e.touchesCurrent.y - f.prevPositionY) < 2 && (f.y = 0), f.prevPositionX = e.touchesCurrent.x, f.prevPositionY = e.touchesCurrent.y, f.prevTime = Date.now(), d.$imageWrapEl.transform("translate3d(" + e.currentX + "px, " + e.currentY + "px,0)")
                    }
                }
            },
            onTouchEnd: function() {
                var a = this.zoom,
                    b = a.gesture,
                    c = a.image,
                    d = a.velocity;
                if (b.$imageEl && 0 !== b.$imageEl.length) {
                    if (!c.isTouched || !c.isMoved) return c.isTouched = !1, void(c.isMoved = !1);
                    c.isTouched = !1, c.isMoved = !1;
                    var e = 300,
                        f = 300,
                        g = d.x * e,
                        h = c.currentX + g,
                        i = d.y * f,
                        j = c.currentY + i;
                    0 !== d.x && (e = Math.abs((h - c.currentX) / d.x)), 0 !== d.y && (f = Math.abs((j - c.currentY) / d.y));
                    var k = Math.max(e, f);
                    c.currentX = h, c.currentY = j;
                    var l = c.width * a.scale,
                        m = c.height * a.scale;
                    c.minX = Math.min(b.slideWidth / 2 - l / 2, 0), c.maxX = -c.minX, c.minY = Math.min(b.slideHeight / 2 - m / 2, 0), c.maxY = -c.minY, c.currentX = Math.max(Math.min(c.currentX, c.maxX), c.minX), c.currentY = Math.max(Math.min(c.currentY, c.maxY), c.minY), b.$imageWrapEl.transition(k).transform("translate3d(" + c.currentX + "px, " + c.currentY + "px,0)")
                }
            },
            onTransitionEnd: function() {
                var a = this.zoom,
                    b = a.gesture;
                b.$slideEl && this.previousIndex !== this.activeIndex && (b.$imageEl.transform("translate3d(0,0,0) scale(1)"), b.$imageWrapEl.transform("translate3d(0,0,0)"), a.scale = 1, a.currentScale = 1, b.$slideEl = void 0, b.$imageEl = void 0, b.$imageWrapEl = void 0)
            },
            toggle: function(a) {
                var b = this.zoom;
                b.scale && 1 !== b.scale ? b.out() : b["in"](a)
            },
            "in": function(b) {
                var c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s = this,
                    t = s.zoom,
                    u = s.params.zoom,
                    v = t.gesture,
                    w = t.image;
                v.$slideEl || (v.$slideEl = s.clickedSlide ? a(s.clickedSlide) : s.slides.eq(s.activeIndex), v.$imageEl = v.$slideEl.find("img, svg, canvas"), v.$imageWrapEl = v.$imageEl.parent("." + u.containerClass)), v.$imageEl && 0 !== v.$imageEl.length && (v.$slideEl.addClass("" + u.zoomedSlideClass), void 0 === w.touchesStart.x && b ? (c = "touchend" === b.type ? b.changedTouches[0].pageX : b.pageX, d = "touchend" === b.type ? b.changedTouches[0].pageY : b.pageY) : (c = w.touchesStart.x, d = w.touchesStart.y), t.scale = v.$imageWrapEl.attr("data-swiper-zoom") || u.maxRatio, t.currentScale = v.$imageWrapEl.attr("data-swiper-zoom") || u.maxRatio, b ? (q = v.$slideEl[0].offsetWidth, r = v.$slideEl[0].offsetHeight, e = v.$slideEl.offset().left + q / 2 - c, f = v.$slideEl.offset().top + r / 2 - d, i = v.$imageEl[0].offsetWidth, j = v.$imageEl[0].offsetHeight, k = i * t.scale, l = j * t.scale, o = -(m = Math.min(q / 2 - k / 2, 0)), p = -(n = Math.min(r / 2 - l / 2, 0)), (g = e * t.scale) < m && (g = m), o < g && (g = o), (h = f * t.scale) < n && (h = n), p < h && (h = p)) : h = g = 0, v.$imageWrapEl.transition(300).transform("translate3d(" + g + "px, " + h + "px,0)"), v.$imageEl.transition(300).transform("translate3d(0,0,0) scale(" + t.scale + ")"))
            },
            out: function() {
                var b = this,
                    c = b.zoom,
                    d = b.params.zoom,
                    e = c.gesture;
                e.$slideEl || (e.$slideEl = b.clickedSlide ? a(b.clickedSlide) : b.slides.eq(b.activeIndex), e.$imageEl = e.$slideEl.find("img, svg, canvas"), e.$imageWrapEl = e.$imageEl.parent("." + d.containerClass)), e.$imageEl && 0 !== e.$imageEl.length && (c.scale = 1, c.currentScale = 1, e.$imageWrapEl.transition(300).transform("translate3d(0,0,0)"), e.$imageEl.transition(300).transform("translate3d(0,0,0) scale(1)"), e.$slideEl.removeClass("" + d.zoomedSlideClass), e.$slideEl = void 0)
            },
            enable: function() {
                var a = this,
                    b = a.zoom;
                if (!b.enabled) {
                    b.enabled = !0;
                    var c = !("touchstart" !== a.touchEvents.start || !l.passiveListener || !a.params.passiveListeners) && { passive: !0, capture: !1 };
                    l.gestures ? (a.$wrapperEl.on("gesturestart", ".swiper-slidea", b.onGestureStart, c), a.$wrapperEl.on("gesturechange", ".swiper-slidea", b.onGestureChange, c), a.$wrapperEl.on("gestureend", ".swiper-slidea", b.onGestureEnd, c)) : "touchstart" === a.touchEvents.start && (a.$wrapperEl.on(a.touchEvents.start, ".swiper-slidea", b.onGestureStart, c), a.$wrapperEl.on(a.touchEvents.move, ".swiper-slidea", b.onGestureChange, c), a.$wrapperEl.on(a.touchEvents.end, ".swiper-slidea", b.onGestureEnd, c)), a.$wrapperEl.on(a.touchEvents.move, "." + a.params.zoom.containerClass, b.onTouchMove)
                }
            },
            disable: function() {
                var a = this,
                    b = a.zoom;
                if (b.enabled) {
                    a.zoom.enabled = !1;
                    var c = !("touchstart" !== a.touchEvents.start || !l.passiveListener || !a.params.passiveListeners) && { passive: !0, capture: !1 };
                    l.gestures ? (a.$wrapperEl.off("gesturestart", ".swiper-slidea", b.onGestureStart, c), a.$wrapperEl.off("gesturechange", ".swiper-slidea", b.onGestureChange, c), a.$wrapperEl.off("gestureend", ".swiper-slidea", b.onGestureEnd, c)) : "touchstart" === a.touchEvents.start && (a.$wrapperEl.off(a.touchEvents.start, ".swiper-slidea", b.onGestureStart, c), a.$wrapperEl.off(a.touchEvents.move, ".swiper-slidea", b.onGestureChange, c), a.$wrapperEl.off(a.touchEvents.end, ".swiper-slidea", b.onGestureEnd, c)), a.$wrapperEl.off(a.touchEvents.move, "." + a.params.zoom.containerClass, b.onTouchMove)
                }
            }
        },
        U = {
            loadInSlide: function(b, c) {
                void 0 === c && (c = !0);
                var d = this,
                    e = d.params.lazy;
                if (void 0 !== b && 0 !== d.slides.length) {
                    var f = d.virtual && d.params.virtual.enabled ? d.$wrapperEl.children("." + d.params.slideClass + '[data-swiper-slide-index="' + b + '"]') : d.slides.eq(b),
                        g = f.find("." + e.elementClass + ":not(." + e.loadedClass + "):not(." + e.loadingClass + ")");
                    !f.hasClass(e.elementClass) || f.hasClass(e.loadedClass) || f.hasClass(e.loadingClass) || (g = g.add(f[0])), 0 !== g.length && g.each(function(b, g) {
                        var h = a(g);
                        h.addClass(e.loadingClass);
                        var i = h.attr("data-background"),
                            j = h.attr("data-src"),
                            k = h.attr("data-srcset"),
                            l = h.attr("data-sizes");
                        d.loadImage(h[0], j || i, k, l, !1, function() {
                            if (null != d && d && (!d || d.params) && !d.destroyed) {
                                if (i ? (h.css("background-image", 'url("' + i + '")'), h.removeAttr("data-background")) : (k && (h.attr("srcset", k), h.removeAttr("data-srcset")), l && (h.attr("sizes", l), h.removeAttr("data-sizes")), j && (h.attr("src", j), h.removeAttr("data-src"))), h.addClass(e.loadedClass).removeClass(e.loadingClass), f.find("." + e.preloaderClass).remove(), d.params.loop && c) {
                                    var a = f.attr("data-swiper-slide-index");
                                    if (f.hasClass(d.params.slideDuplicateClass)) {
                                        var b = d.$wrapperEl.children('[data-swiper-slide-index="' + a + '"]:not(.' + d.params.slideDuplicateClass + ")");
                                        d.lazy.loadInSlide(b.index(), !1)
                                    } else {
                                        var g = d.$wrapperEl.children("." + d.params.slideDuplicateClass + '[data-swiper-slide-index="' + a + '"]');
                                        d.lazy.loadInSlide(g.index(), !1)
                                    }
                                }
                                d.emit("lazyImageReady", f[0], h[0])
                            }
                        }), d.emit("lazyImageLoad", f[0], h[0])
                    })
                }
            },
            load: function() {
                function b(a) { if (i) { if (e.children("." + f.slideClass + '[data-swiper-slide-index="' + a + '"]').length) return !0 } else if (g[a]) return !0; return !1 }

                function c(b) { return i ? a(b).attr("data-swiper-slide-index") : a(b).index() }
                var d = this,
                    e = d.$wrapperEl,
                    f = d.params,
                    g = d.slides,
                    h = d.activeIndex,
                    i = d.virtual && f.virtual.enabled,
                    j = f.lazy,
                    k = f.slidesPerView;
                if ("auto" === k && (k = 0), d.lazy.initialImageLoaded || (d.lazy.initialImageLoaded = !0), d.params.watchSlidesVisibility) e.children("." + f.slideVisibleClass).each(function(b, c) {
                    var e = i ? a(c).attr("data-swiper-slide-index") : a(c).index();
                    d.lazy.loadInSlide(e)
                });
                else if (1 < k)
                    for (var l = h; l < h + k; l += 1) b(l) && d.lazy.loadInSlide(l);
                else d.lazy.loadInSlide(h);
                if (j.loadPrevNext)
                    if (1 < k || j.loadPrevNextAmount && 1 < j.loadPrevNextAmount) { for (var m = j.loadPrevNextAmount, n = k, o = Math.min(h + n + Math.max(m, n), g.length), p = Math.max(h - Math.max(n, m), 0), q = h + k; q < o; q += 1) b(q) && d.lazy.loadInSlide(q); for (var r = p; r < h; r += 1) b(r) && d.lazy.loadInSlide(r) } else {
                        var s = e.children("." + f.slideNextClass);
                        0 < s.length && d.lazy.loadInSlide(c(s));
                        var t = e.children("." + f.slidePrevClass);
                        0 < t.length && d.lazy.loadInSlide(c(t))
                    }
            }
        },
        V = {
            LinearSpline: function(a, b) { var c, d, e, f, g, h = function(a, b) { for (d = -1, c = a.length; 1 < c - d;) a[e = c + d >> 1] <= b ? d = e : c = e; return c }; return this.x = a, this.y = b, this.lastIndex = a.length - 1, this.interpolate = function(a) { return a ? (g = h(this.x, a), f = g - 1, (a - this.x[f]) * (this.y[g] - this.y[f]) / (this.x[g] - this.x[f]) + this.y[f]) : 0 }, this },
            getInterpolateFunction: function(a) {
                var b = this;
                b.controller.spline || (b.controller.spline = b.params.loop ? new V.LinearSpline(b.slidesGrid, a.slidesGrid) : new V.LinearSpline(b.snapGrid, a.snapGrid))
            },
            setTranslate: function(a, b) {
                function c(a) { var b = f.rtlTranslate ? -f.translate : f.translate; "slide" === f.params.controller.by && (f.controller.getInterpolateFunction(a), e = -f.controller.spline.interpolate(-b)), e && "container" !== f.params.controller.by || (d = (a.maxTranslate() - a.minTranslate()) / (f.maxTranslate() - f.minTranslate()), e = (b - f.minTranslate()) * d + a.minTranslate()), f.params.controller.inverse && (e = a.maxTranslate() - e), a.updateProgress(e), a.setTranslate(e, f), a.updateActiveIndex(), a.updateSlidesClasses() }
                var d, e, f = this,
                    g = f.controller.control;
                if (Array.isArray(g))
                    for (var h = 0; h < g.length; h += 1) g[h] !== b && g[h] instanceof D && c(g[h]);
                else g instanceof D && b !== g && c(g)
            },
            setTransition: function(a, b) {
                function c(b) { b.setTransition(a, e), 0 !== a && (b.transitionStart(), b.params.autoHeight && k.nextTick(function() { b.updateAutoHeight() }), b.$wrapperEl.transitionEnd(function() { f && (b.params.loop && "slide" === e.params.controller.by && b.loopFix(), b.transitionEnd()) })) }
                var d, e = this,
                    f = e.controller.control;
                if (Array.isArray(f))
                    for (d = 0; d < f.length; d += 1) f[d] !== b && f[d] instanceof D && c(f[d]);
                else f instanceof D && b !== f && c(f)
            }
        },
        W = {
            makeElFocusable: function(a) { return a.attr("tabIndex", "0"), a },
            addElRole: function(a, b) { return a.attr("role", b), a },
            addElLabel: function(a, b) { return a.attr("aria-label", b), a },
            disableEl: function(a) { return a.attr("aria-disabled", !0), a },
            enableEl: function(a) { return a.attr("aria-disabled", !1), a },
            onEnterKey: function(b) {
                var c = this,
                    d = c.params.a11y;
                if (13 === b.keyCode) {
                    var e = a(b.target);
                    c.navigation && c.navigation.$nextEl && e.is(c.navigation.$nextEl) && (c.isEnd && !c.params.loop || c.slideNext(), c.isEnd ? c.a11y.notify(d.lastSlideMessage) : c.a11y.notify(d.nextSlideMessage)), c.navigation && c.navigation.$prevEl && e.is(c.navigation.$prevEl) && (c.isBeginning && !c.params.loop || c.slidePrev(), c.isBeginning ? c.a11y.notify(d.firstSlideMessage) : c.a11y.notify(d.prevSlideMessage)), c.pagination && e.is("." + c.params.pagination.bulletClass) && e[0].click()
                }
            },
            notify: function(a) {
                var b = this.a11y.liveRegion;
                0 !== b.length && (b.html(""), b.html(a))
            },
            updateNavigation: function() {
                var a = this;
                if (!a.params.loop) {
                    var b = a.navigation,
                        c = b.$nextEl,
                        d = b.$prevEl;
                    d && 0 < d.length && (a.isBeginning ? a.a11y.disableEl(d) : a.a11y.enableEl(d)), c && 0 < c.length && (a.isEnd ? a.a11y.disableEl(c) : a.a11y.enableEl(c))
                }
            },
            updatePagination: function() {
                var b = this,
                    c = b.params.a11y;
                b.pagination && b.params.pagination.clickable && b.pagination.bullets && b.pagination.bullets.length && b.pagination.bullets.each(function(d, e) {
                    var f = a(e);
                    b.a11y.makeElFocusable(f), b.a11y.addElRole(f, "button"), b.a11y.addElLabel(f, c.paginationBulletMessage.replace(/{{index}}/, f.index() + 1))
                })
            },
            init: function() {
                var a = this;
                a.$el.append(a.a11y.liveRegion);
                var b, c, d = a.params.a11y;
                a.navigation && a.navigation.$nextEl && (b = a.navigation.$nextEl), a.navigation && a.navigation.$prevEl && (c = a.navigation.$prevEl), b && (a.a11y.makeElFocusable(b), a.a11y.addElRole(b, "button"), a.a11y.addElLabel(b, d.nextSlideMessage), b.on("keydown", a.a11y.onEnterKey)), c && (a.a11y.makeElFocusable(c), a.a11y.addElRole(c, "button"), a.a11y.addElLabel(c, d.prevSlideMessage), c.on("keydown", a.a11y.onEnterKey)), a.pagination && a.params.pagination.clickable && a.pagination.bullets && a.pagination.bullets.length && a.pagination.$el.on("keydown", "." + a.params.pagination.bulletClass, a.a11y.onEnterKey)
            },
            destroy: function() {
                var a, b, c = this;
                c.a11y.liveRegion && 0 < c.a11y.liveRegion.length && c.a11y.liveRegion.remove(), c.navigation && c.navigation.$nextEl && (a = c.navigation.$nextEl), c.navigation && c.navigation.$prevEl && (b = c.navigation.$prevEl), a && a.off("keydown", c.a11y.onEnterKey), b && b.off("keydown", c.a11y.onEnterKey), c.pagination && c.params.pagination.clickable && c.pagination.bullets && c.pagination.bullets.length && c.pagination.$el.off("keydown", "." + c.params.pagination.bulletClass, c.a11y.onEnterKey)
            }
        },
        X = {
            init: function() {
                var a = this;
                if (a.params.history) {
                    if (!e.history || !e.history.pushState) return a.params.history.enabled = !1, void(a.params.hashNavigation.enabled = !0);
                    var b = a.history;
                    b.initialized = !0, b.paths = X.getPathValues(), (b.paths.key || b.paths.value) && (b.scrollToSlide(0, b.paths.value, a.params.runCallbacksOnInit), a.params.history.replaceState || e.addEventListener("popstate", a.history.setHistoryPopState))
                }
            },
            destroy: function() { this.params.history.replaceState || e.removeEventListener("popstate", this.history.setHistoryPopState) },
            setHistoryPopState: function() { this.history.paths = X.getPathValues(), this.history.scrollToSlide(this.params.speed, this.history.paths.value, !1) },
            getPathValues: function() {
                var a = e.location.pathname.slice(1).split("/").filter(function(a) { return "" !== a }),
                    b = a.length;
                return { key: a[b - 2], value: a[b - 1] }
            },
            setHistory: function(a, b) {
                if (this.history.initialized && this.params.history.enabled) {
                    var c = this.slides.eq(b),
                        d = X.slugify(c.attr("data-history"));
                    e.location.pathname.includes(a) || (d = a + "/" + d);
                    var f = e.history.state;
                    f && f.value === d || (this.params.history.replaceState ? e.history.replaceState({ value: d }, null, d) : e.history.pushState({ value: d }, null, d))
                }
            },
            slugify: function(a) { return a.toString().toLowerCase().replace(/\s+/g, "-").replace(/[^\w-]+/g, "").replace(/--+/g, "-").replace(/^-+/, "").replace(/-+$/, "") },
            scrollToSlide: function(a, b, c) {
                var d = this;
                if (b)
                    for (var e = 0, f = d.slides.length; e < f; e += 1) {
                        var g = d.slides.eq(e);
                        if (X.slugify(g.attr("data-history")) === b && !g.hasClass(d.params.slideDuplicateClass)) {
                            var h = g.index();
                            d.slideTo(h, a, c)
                        }
                    } else d.slideTo(0, a, c)
            }
        },
        Y = {
            onHashCange: function() {
                var a = this,
                    b = d.location.hash.replace("#", "");
                if (b !== a.slides.eq(a.activeIndex).attr("data-hash")) {
                    var c = a.$wrapperEl.children("." + a.params.slideClass + '[data-hash="' + b + '"]').index();
                    if (void 0 === c) return;
                    a.slideTo(c)
                }
            },
            setHash: function() {
                var a = this;
                if (a.hashNavigation.initialized && a.params.hashNavigation.enabled)
                    if (a.params.hashNavigation.replaceState && e.history && e.history.replaceState) e.history.replaceState(null, null, "#" + a.slides.eq(a.activeIndex).attr("data-hash") || "");
                    else {
                        var b = a.slides.eq(a.activeIndex),
                            c = b.attr("data-hash") || b.attr("data-history");
                        d.location.hash = c || ""
                    }
            },
            init: function() {
                var b = this;
                if (!(!b.params.hashNavigation.enabled || b.params.history && b.params.history.enabled)) {
                    b.hashNavigation.initialized = !0;
                    var c = d.location.hash.replace("#", "");
                    if (c)
                        for (var f = 0, g = b.slides.length; f < g; f += 1) {
                            var h = b.slides.eq(f);
                            if ((h.attr("data-hash") || h.attr("data-history")) === c && !h.hasClass(b.params.slideDuplicateClass)) {
                                var i = h.index();
                                b.slideTo(i, 0, b.params.runCallbacksOnInit, !0)
                            }
                        }
                    b.params.hashNavigation.watchState && a(e).on("hashchange", b.hashNavigation.onHashCange)
                }
            },
            destroy: function() { this.params.hashNavigation.watchState && a(e).off("hashchange", this.hashNavigation.onHashCange) }
        },
        Z = {
            run: function() {
                var a = this,
                    b = a.slides.eq(a.activeIndex),
                    c = a.params.autoplay.delay;
                b.attr("data-swiper-autoplay") && (c = b.attr("data-swiper-autoplay") || a.params.autoplay.delay), a.autoplay.timeout = k.nextTick(function() { a.params.autoplay.reverseDirection ? a.params.loop ? (a.loopFix(), a.slidePrev(a.params.speed, !0, !0), a.emit("autoplay")) : a.isBeginning ? a.params.autoplay.stopOnLastSlide ? a.autoplay.stop() : (a.slideTo(a.slides.length - 1, a.params.speed, !0, !0), a.emit("autoplay")) : (a.slidePrev(a.params.speed, !0, !0), a.emit("autoplay")) : a.params.loop ? (a.loopFix(), a.slideNext(a.params.speed, !0, !0), a.emit("autoplay")) : a.isEnd ? a.params.autoplay.stopOnLastSlide ? a.autoplay.stop() : (a.slideTo(0, a.params.speed, !0, !0), a.emit("autoplay")) : (a.slideNext(a.params.speed, !0, !0), a.emit("autoplay")) }, c)
            },
            start: function() { var a = this; return void 0 === a.autoplay.timeout && !a.autoplay.running && (a.autoplay.running = !0, a.emit("autoplayStart"), a.autoplay.run(), !0) },
            stop: function() { var a = this; return !!a.autoplay.running && void 0 !== a.autoplay.timeout && (a.autoplay.timeout && (clearTimeout(a.autoplay.timeout), a.autoplay.timeout = void 0), a.autoplay.running = !1, a.emit("autoplayStop"), !0) },
            pause: function(a) {
                var b = this;
                b.autoplay.running && (b.autoplay.paused || (b.autoplay.timeout && clearTimeout(b.autoplay.timeout), b.autoplay.paused = !0, 0 !== a && b.params.autoplay.waitForTransition ? (b.$wrapperEl[0].addEventListener("transitionend", b.autoplay.onTransitionEnd), b.$wrapperEl[0].addEventListener("webkitTransitionEnd", b.autoplay.onTransitionEnd)) : (b.autoplay.paused = !1, b.autoplay.run())))
            }
        },
        $ = {
            setTranslate: function() {
                for (var a = this, b = a.slides, c = 0; c < b.length; c += 1) {
                    var d = a.slides.eq(c),
                        e = -d[0].swiperSlideOffset;
                    a.params.virtualTranslate || (e -= a.translate);
                    var f = 0;
                    a.isHorizontal() || (f = e, e = 0);
                    var g = a.params.fadeEffect.crossFade ? Math.max(1 - Math.abs(d[0].progress), 0) : 1 + Math.min(Math.max(d[0].progress, -1), 0);
                    d.css({ opacity: g }).transform("translate3d(" + e + "px, " + f + "px, 0px)")
                }
            },
            setTransition: function(a) {
                var b = this,
                    c = b.slides,
                    d = b.$wrapperEl;
                if (c.transition(a), b.params.virtualTranslate && 0 !== a) {
                    var e = !1;
                    c.transitionEnd(function() { if (!e && b && !b.destroyed) { e = !0, b.animating = !1; for (var a = ["webkitTransitionEnd", "transitionend"], c = 0; c < a.length; c += 1) d.trigger(a[c]) } })
                }
            }
        },
        _ = {
            setTranslate: function() {
                var b, c = this,
                    d = c.$el,
                    e = c.$wrapperEl,
                    f = c.slides,
                    g = c.width,
                    h = c.height,
                    i = c.rtlTranslate,
                    j = c.size,
                    k = c.params.cubeEffect,
                    l = c.isHorizontal(),
                    m = c.virtual && c.params.virtual.enabled,
                    n = 0;
                k.shadow && (l ? (0 === (b = e.find(".swiper-cube-shadow")).length && (b = a('<div class="swiper-cube-shadow"></div>'), e.append(b)), b.css({ height: g + "px" })) : 0 === (b = d.find(".swiper-cube-shadow")).length && (b = a('<div class="swiper-cube-shadow"></div>'), d.append(b)));
                for (var o = 0; o < f.length; o += 1) {
                    var p = f.eq(o),
                        q = o;
                    m && (q = parseInt(p.attr("data-swiper-slide-index"), 10));
                    var r = 90 * q,
                        s = Math.floor(r / 360);
                    i && (r = -r, s = Math.floor(-r / 360));
                    var t = Math.max(Math.min(p[0].progress, 1), -1),
                        u = 0,
                        v = 0,
                        w = 0;
                    q % 4 == 0 ? (u = 4 * -s * j, w = 0) : (q - 1) % 4 == 0 ? (u = 0, w = 4 * -s * j) : (q - 2) % 4 == 0 ? (u = j + 4 * s * j, w = j) : (q - 3) % 4 == 0 && (u = -j, w = 3 * j + 4 * j * s), i && (u = -u), l || (v = u, u = 0);
                    var x = "rotateX(" + (l ? 0 : -r) + "deg) rotateY(" + (l ? r : 0) + "deg) translate3d(" + u + "px, " + v + "px, " + w + "px)";
                    if (t <= 1 && -1 < t && (n = 90 * q + 90 * t, i && (n = 90 * -q - 90 * t)), p.transform(x), k.slideShadows) {
                        var y = l ? p.find(".swiper-slide-shadow-left") : p.find(".swiper-slide-shadow-top"),
                            A = l ? p.find(".swiper-slide-shadow-right") : p.find(".swiper-slide-shadow-bottom");
                        0 === y.length && (y = a('<div class="swiper-slide-shadow-' + (l ? "left" : "top") + '"></div>'), p.append(y)), 0 === A.length && (A = a('<div class="swiper-slide-shadow-' + (l ? "right" : "bottom") + '"></div>'),
                            p.append(A)), y.length && (y[0].style.opacity = Math.max(-t, 0)), A.length && (A[0].style.opacity = Math.max(t, 0))
                    }
                }
                if (e.css({ "-webkit-transform-origin": "50% 50% -" + j / 2 + "px", "-moz-transform-origin": "50% 50% -" + j / 2 + "px", "-ms-transform-origin": "50% 50% -" + j / 2 + "px", "transform-origin": "50% 50% -" + j / 2 + "px" }), k.shadow)
                    if (l) b.transform("translate3d(0px, " + (g / 2 + k.shadowOffset) + "px, " + -g / 2 + "px) rotateX(90deg) rotateZ(0deg) scale(" + k.shadowScale + ")");
                    else {
                        var B = Math.abs(n) - 90 * Math.floor(Math.abs(n) / 90),
                            C = 1.5 - (Math.sin(2 * B * Math.PI / 360) / 2 + Math.cos(2 * B * Math.PI / 360) / 2),
                            D = k.shadowScale,
                            E = k.shadowScale / C,
                            F = k.shadowOffset;
                        b.transform("scale3d(" + D + ", 1, " + E + ") translate3d(0px, " + (h / 2 + F) + "px, " + -h / 2 / E + "px) rotateX(-90deg)")
                    }
                var G = z.isSafari || z.isUiWebView ? -j / 2 : 0;
                e.transform("translate3d(0px,0," + G + "px) rotateX(" + (c.isHorizontal() ? 0 : n) + "deg) rotateY(" + (c.isHorizontal() ? -n : 0) + "deg)")
            },
            setTransition: function(a) {
                var b = this.$el;
                this.slides.transition(a).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(a), this.params.cubeEffect.shadow && !this.isHorizontal() && b.find(".swiper-cube-shadow").transition(a)
            }
        },
        aa = {
            setTranslate: function() {
                for (var b = this, c = b.slides, d = b.rtlTranslate, e = 0; e < c.length; e += 1) {
                    var f = c.eq(e),
                        g = f[0].progress;
                    b.params.flipEffect.limitRotation && (g = Math.max(Math.min(f[0].progress, 1), -1));
                    var h = -180 * g,
                        i = 0,
                        j = -f[0].swiperSlideOffset,
                        k = 0;
                    if (b.isHorizontal() ? d && (h = -h) : (k = j, i = -h, h = j = 0), f[0].style.zIndex = -Math.abs(Math.round(g)) + c.length, b.params.flipEffect.slideShadows) {
                        var l = b.isHorizontal() ? f.find(".swiper-slide-shadow-left") : f.find(".swiper-slide-shadow-top"),
                            m = b.isHorizontal() ? f.find(".swiper-slide-shadow-right") : f.find(".swiper-slide-shadow-bottom");
                        0 === l.length && (l = a('<div class="swiper-slide-shadow-' + (b.isHorizontal() ? "left" : "top") + '"></div>'), f.append(l)), 0 === m.length && (m = a('<div class="swiper-slide-shadow-' + (b.isHorizontal() ? "right" : "bottom") + '"></div>'), f.append(m)), l.length && (l[0].style.opacity = Math.max(-g, 0)), m.length && (m[0].style.opacity = Math.max(g, 0))
                    }
                    f.transform("translate3d(" + j + "px, " + k + "px, 0px) rotateX(" + i + "deg) rotateY(" + h + "deg)")
                }
            },
            setTransition: function(a) {
                var b = this,
                    c = b.slides,
                    d = b.activeIndex,
                    e = b.$wrapperEl;
                if (c.transition(a).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(a), b.params.virtualTranslate && 0 !== a) {
                    var f = !1;
                    c.eq(d).transitionEnd(function() { if (!f && b && !b.destroyed) { f = !0, b.animating = !1; for (var a = ["webkitTransitionEnd", "transitionend"], c = 0; c < a.length; c += 1) e.trigger(a[c]) } })
                }
            }
        },
        ba = {
            setTranslate: function() {
                for (var b = this, c = b.width, d = b.height, e = b.slides, f = b.$wrapperEl, g = b.slidesSizesGrid, h = b.params.coverflowEffect, i = b.isHorizontal(), j = b.translate, k = i ? c / 2 - j : d / 2 - j, m = i ? h.rotate : -h.rotate, n = h.depth, o = 0, p = e.length; o < p; o += 1) {
                    var q = e.eq(o),
                        r = g[o],
                        s = (k - q[0].swiperSlideOffset - r / 2) / r * h.modifier,
                        t = i ? m * s : 0,
                        u = i ? 0 : m * s,
                        v = -n * Math.abs(s),
                        w = i ? 0 : h.stretch * s,
                        x = i ? h.stretch * s : 0;
                    Math.abs(x) < .001 && (x = 0), Math.abs(w) < .001 && (w = 0), Math.abs(v) < .001 && (v = 0), Math.abs(t) < .001 && (t = 0), Math.abs(u) < .001 && (u = 0);
                    var y = "translate3d(" + x + "px," + w + "px," + v + "px)  rotateX(" + u + "deg) rotateY(" + t + "deg)";
                    if (q.transform(y), q[0].style.zIndex = 1 - Math.abs(Math.round(s)), h.slideShadows) {
                        var z = i ? q.find(".swiper-slide-shadow-left") : q.find(".swiper-slide-shadow-top"),
                            A = i ? q.find(".swiper-slide-shadow-right") : q.find(".swiper-slide-shadow-bottom");
                        0 === z.length && (z = a('<div class="swiper-slide-shadow-' + (i ? "left" : "top") + '"></div>'), q.append(z)), 0 === A.length && (A = a('<div class="swiper-slide-shadow-' + (i ? "right" : "bottom") + '"></div>'), q.append(A)), z.length && (z[0].style.opacity = 0 < s ? s : 0), A.length && (A[0].style.opacity = 0 < -s ? -s : 0)
                    }
                }(l.pointerEvents || l.prefixedPointerEvents) && (f[0].style.perspectiveOrigin = k + "px 50%")
            },
            setTransition: function(a) { this.slides.transition(a).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(a) }
        },
        ca = {
            init: function() {
                var a = this,
                    b = a.params.thumbs,
                    c = a.constructor;
                b.swiper instanceof c ? (a.thumbs.swiper = b.swiper, k.extend(a.thumbs.swiper.originalParams, { watchSlidesProgress: !0, slideToClickedSlide: !1 }), k.extend(a.thumbs.swiper.params, { watchSlidesProgress: !0, slideToClickedSlide: !1 })) : k.isObject(b.swiper) && (a.thumbs.swiper = new c(k.extend({}, b.swiper, { watchSlidesVisibility: !0, watchSlidesProgress: !0, slideToClickedSlide: !1 })), a.thumbs.swiperCreated = !0), a.thumbs.swiper.$el.addClass(a.params.thumbs.thumbsContainerClass), a.thumbs.swiper.on("tap", a.thumbs.onThumbClick)
            },
            onThumbClick: function() {
                var b = this,
                    c = b.thumbs.swiper;
                if (c) {
                    var d = c.clickedIndex,
                        e = c.clickedSlide;
                    if (!(e && a(e).hasClass(b.params.thumbs.slideThumbActiveClass) || null == d)) {
                        var f;
                        if (f = c.params.loop ? parseInt(a(c.clickedSlide).attr("data-swiper-slide-index"), 10) : d, b.params.loop) {
                            var g = b.activeIndex;
                            b.slides.eq(g).hasClass(b.params.slideDuplicateClass) && (b.loopFix(), b._clientLeft = b.$wrapperEl[0].clientLeft, g = b.activeIndex);
                            var h = b.slides.eq(g).prevAll('[data-swiper-slide-index="' + f + '"]').eq(0).index(),
                                i = b.slides.eq(g).nextAll('[data-swiper-slide-index="' + f + '"]').eq(0).index();
                            f = void 0 === h ? i : void 0 === i ? h : i - g < g - h ? i : h
                        }
                        b.slideTo(f)
                    }
                }
            },
            update: function(a) {
                var b = this,
                    c = b.thumbs.swiper;
                if (c) {
                    var d = "auto" === c.params.slidesPerView ? c.slidesPerViewDynamic() : c.params.slidesPerView;
                    if (b.realIndex !== c.realIndex) {
                        var e, f = c.activeIndex;
                        if (c.params.loop) {
                            c.slides.eq(f).hasClass(c.params.slideDuplicateClass) && (c.loopFix(), c._clientLeft = c.$wrapperEl[0].clientLeft, f = c.activeIndex);
                            var g = c.slides.eq(f).prevAll('[data-swiper-slide-index="' + b.realIndex + '"]').eq(0).index(),
                                h = c.slides.eq(f).nextAll('[data-swiper-slide-index="' + b.realIndex + '"]').eq(0).index();
                            e = void 0 === g ? h : void 0 === h ? g : h - f == f - g ? f : h - f < f - g ? h : g
                        } else e = b.realIndex;
                        c.visibleSlidesIndexes.indexOf(e) < 0 && (c.params.centeredSlides ? e = f < e ? e - Math.floor(d / 2) + 1 : e + Math.floor(d / 2) - 1 : f < e && (e = e - d + 1), c.slideTo(e, a ? 0 : void 0))
                    }
                    var i = 1,
                        j = b.params.thumbs.slideThumbActiveClass;
                    if (1 < b.params.slidesPerView && !b.params.centeredSlides && (i = b.params.slidesPerView), c.slides.removeClass(j), c.params.loop)
                        for (var k = 0; k < i; k += 1) c.$wrapperEl.children('[data-swiper-slide-index="' + (b.realIndex + k) + '"]').addClass(j);
                    else
                        for (var l = 0; l < i; l += 1) c.slides.eq(b.realIndex + l).addClass(j)
                }
            }
        },
        da = [E, F, G, H, J, L, N, {
            name: "mousewheel",
            params: { mousewheel: { enabled: !1, releaseOnEdges: !1, invert: !1, forceToAxis: !1, sensitivity: 1, eventsTarged: "container" } },
            create: function() {
                var a = this;
                k.extend(a, { mousewheel: { enabled: !1, enable: O.enable.bind(a), disable: O.disable.bind(a), handle: O.handle.bind(a), handleMouseEnter: O.handleMouseEnter.bind(a), handleMouseLeave: O.handleMouseLeave.bind(a), lastScrollTime: k.now() } })
            },
            on: { init: function() { this.params.mousewheel.enabled && this.mousewheel.enable() }, destroy: function() { this.mousewheel.enabled && this.mousewheel.disable() } }
        }, {
            name: "navigation",
            params: { navigation: { nextEl: null, prevEl: null, hideOnClick: !1, disabledClass: "swiper-button-disabled", hiddenClass: "swiper-button-hidden", lockClass: "swiper-button-lock" } },
            create: function() {
                var a = this;
                k.extend(a, { navigation: { init: P.init.bind(a), update: P.update.bind(a), destroy: P.destroy.bind(a), onNextClick: P.onNextClick.bind(a), onPrevClick: P.onPrevClick.bind(a) } })
            },
            on: {
                init: function() { this.navigation.init(), this.navigation.update() },
                toEdge: function() { this.navigation.update() },
                fromEdge: function() { this.navigation.update() },
                destroy: function() { this.navigation.destroy() },
                click: function(b) {
                    var c = this.navigation,
                        d = c.$nextEl,
                        e = c.$prevEl;
                    !this.params.navigation.hideOnClick || a(b.target).is(e) || a(b.target).is(d) || (d && d.toggleClass(this.params.navigation.hiddenClass), e && e.toggleClass(this.params.navigation.hiddenClass))
                }
            }
        }, {
            name: "pagination",
            params: { pagination: { el: null, bulletElement: "span", clickable: !1, hideOnClick: !1, renderBullet: null, renderProgressbar: null, renderFraction: null, renderCustom: null, progressbarOpposite: !1, type: "bullets", dynamicBullets: !1, dynamicMainBullets: 1, formatFractionCurrent: function(a) { return a }, formatFractionTotal: function(a) { return a }, bulletClass: "swiper-pagination-bullet", bulletActiveClass: "swiper-pagination-bullet-active", modifierClass: "swiper-pagination-", currentClass: "swiper-pagination-current", totalClass: "swiper-pagination-total", hiddenClass: "swiper-pagination-hidden", progressbarFillClass: "swiper-pagination-progressbar-fill", progressbarOppositeClass: "swiper-pagination-progressbar-opposite", clickableClass: "swiper-pagination-clickable", lockClass: "swiper-pagination-lock" } },
            create: function() {
                var a = this;
                k.extend(a, { pagination: { init: Q.init.bind(a), render: Q.render.bind(a), update: Q.update.bind(a), destroy: Q.destroy.bind(a), dynamicBulletIndex: 0 } })
            },
            on: {
                init: function() { this.pagination.init(), this.pagination.render(), this.pagination.update() },
                activeIndexChange: function() { this.params.loop ? this.pagination.update() : void 0 === this.snapIndex && this.pagination.update() },
                snapIndexChange: function() { this.params.loop || this.pagination.update() },
                slidesLengthChange: function() { this.params.loop && (this.pagination.render(), this.pagination.update()) },
                snapGridLengthChange: function() { this.params.loop || (this.pagination.render(), this.pagination.update()) },
                destroy: function() { this.pagination.destroy() },
                click: function(b) {
                    var c = this;
                    c.params.pagination.el && c.params.pagination.hideOnClick && 0 < c.pagination.$el.length && !a(b.target).hasClass(c.params.pagination.bulletClass) && c.pagination.$el.toggleClass(c.params.pagination.hiddenClass)
                }
            }
        }, {
            name: "scrollbar",
            params: { scrollbar: { el: null, dragSize: "auto", hide: !1, draggable: !1, snapOnRelease: !0, lockClass: "swiper-scrollbar-lock", dragClass: "swiper-scrollbar-drag" } },
            create: function() {
                var a = this;
                k.extend(a, { scrollbar: { init: R.init.bind(a), destroy: R.destroy.bind(a), updateSize: R.updateSize.bind(a), setTranslate: R.setTranslate.bind(a), setTransition: R.setTransition.bind(a), enableDraggable: R.enableDraggable.bind(a), disableDraggable: R.disableDraggable.bind(a), setDragPosition: R.setDragPosition.bind(a), onDragStart: R.onDragStart.bind(a), onDragMove: R.onDragMove.bind(a), onDragEnd: R.onDragEnd.bind(a), isTouched: !1, timeout: null, dragTimeout: null } })
            },
            on: { init: function() { this.scrollbar.init(), this.scrollbar.updateSize(), this.scrollbar.setTranslate() }, update: function() { this.scrollbar.updateSize() }, resize: function() { this.scrollbar.updateSize() }, observerUpdate: function() { this.scrollbar.updateSize() }, setTranslate: function() { this.scrollbar.setTranslate() }, setTransition: function(a) { this.scrollbar.setTransition(a) }, destroy: function() { this.scrollbar.destroy() } }
        }, { name: "parallax", params: { parallax: { enabled: !1 } }, create: function() { k.extend(this, { parallax: { setTransform: S.setTransform.bind(this), setTranslate: S.setTranslate.bind(this), setTransition: S.setTransition.bind(this) } }) }, on: { beforeInit: function() { this.params.parallax.enabled && (this.params.watchSlidesProgress = !0, this.originalParams.watchSlidesProgress = !0) }, init: function() { this.params.parallax && this.parallax.setTranslate() }, setTranslate: function() { this.params.parallax && this.parallax.setTranslate() }, setTransition: function(a) { this.params.parallax && this.parallax.setTransition(a) } } }, {
            name: "zoom",
            params: { zoom: { enabled: !1, maxRatio: 3, minRatio: 1, toggle: !0, containerClass: "swiper-zoom-container", zoomedSlideClass: "swiper-slide-zoomed" } },
            create: function() {
                var a = this,
                    b = { enabled: !1, scale: 1, currentScale: 1, isScaling: !1, gesture: { $slideEl: void 0, slideWidth: void 0, slideHeight: void 0, $imageEl: void 0, $imageWrapEl: void 0, maxRatio: 3 }, image: { isTouched: void 0, isMoved: void 0, currentX: void 0, currentY: void 0, minX: void 0, minY: void 0, maxX: void 0, maxY: void 0, width: void 0, height: void 0, startX: void 0, startY: void 0, touchesStart: {}, touchesCurrent: {} }, velocity: { x: void 0, y: void 0, prevPositionX: void 0, prevPositionY: void 0, prevTime: void 0 } };
                "onGestureStart onGestureChange onGestureEnd onTouchStart onTouchMove onTouchEnd onTransitionEnd toggle enable disable in out".split(" ").forEach(function(c) { b[c] = T[c].bind(a) }), k.extend(a, { zoom: b });
                var c = 1;
                Object.defineProperty(a.zoom, "scale", {
                    get: function() { return c },
                    set: function(b) {
                        if (c !== b) {
                            var d = a.zoom.gesture.$imageEl ? a.zoom.gesture.$imageEl[0] : void 0,
                                e = a.zoom.gesture.$slideEl ? a.zoom.gesture.$slideEl[0] : void 0;
                            a.emit("zoomChange", b, d, e)
                        }
                        c = b
                    }
                })
            },
            on: { init: function() { this.params.zoom.enabled && this.zoom.enable() }, destroy: function() { this.zoom.disable() }, touchStart: function(a) { this.zoom.enabled && this.zoom.onTouchStart(a) }, touchEnd: function(a) { this.zoom.enabled && this.zoom.onTouchEnd(a) }, doubleTap: function(a) { this.params.zoom.enabled && this.zoom.enabled && this.params.zoom.toggle && this.zoom.toggle(a) }, transitionEnd: function() { this.zoom.enabled && this.params.zoom.enabled && this.zoom.onTransitionEnd() } }
        }, {
            name: "lazy",
            params: { lazy: { enabled: !1, loadPrevNext: !1, loadPrevNextAmount: 1, loadOnTransitionStart: !1, elementClass: "swiper-lazy", loadingClass: "swiper-lazy-loading", loadedClass: "swiper-lazy-loaded", preloaderClass: "swiper-lazy-preloader" } },
            create: function() { k.extend(this, { lazy: { initialImageLoaded: !1, load: U.load.bind(this), loadInSlide: U.loadInSlide.bind(this) } }) },
            on: {
                beforeInit: function() { this.params.lazy.enabled && this.params.preloadImages && (this.params.preloadImages = !1) },
                init: function() { this.params.lazy.enabled && !this.params.loop && 0 === this.params.initialSlide && this.lazy.load() },
                scroll: function() { this.params.freeMode && !this.params.freeModeSticky && this.lazy.load() },
                resize: function() { this.params.lazy.enabled && this.lazy.load() },
                scrollbarDragMove: function() { this.params.lazy.enabled && this.lazy.load() },
                transitionStart: function() {
                    var a = this;
                    a.params.lazy.enabled && (a.params.lazy.loadOnTransitionStart || !a.params.lazy.loadOnTransitionStart && !a.lazy.initialImageLoaded) && a.lazy.load()
                },
                transitionEnd: function() { this.params.lazy.enabled && !this.params.lazy.loadOnTransitionStart && this.lazy.load() }
            }
        }, {
            name: "controller",
            params: { controller: { control: void 0, inverse: !1, by: "slide" } },
            create: function() {
                var a = this;
                k.extend(a, { controller: { control: a.params.controller.control, getInterpolateFunction: V.getInterpolateFunction.bind(a), setTranslate: V.setTranslate.bind(a), setTransition: V.setTransition.bind(a) } })
            },
            on: { update: function() { this.controller.control && this.controller.spline && (this.controller.spline = void 0, delete this.controller.spline) }, resize: function() { this.controller.control && this.controller.spline && (this.controller.spline = void 0, delete this.controller.spline) }, observerUpdate: function() { this.controller.control && this.controller.spline && (this.controller.spline = void 0, delete this.controller.spline) }, setTranslate: function(a, b) { this.controller.control && this.controller.setTranslate(a, b) }, setTransition: function(a, b) { this.controller.control && this.controller.setTransition(a, b) } }
        }, {
            name: "a11y",
            params: { a11y: { enabled: !0, notificationClass: "swiper-notification", prevSlideMessage: "Previous slide", nextSlideMessage: "Next slide", firstSlideMessage: "This is the first slide", lastSlideMessage: "This is the last slide", paginationBulletMessage: "Go to slide {{index}}" } },
            create: function() {
                var b = this;
                k.extend(b, { a11y: { liveRegion: a('<span class="' + b.params.a11y.notificationClass + '" aria-live="assertive" aria-atomic="true"></span>') } }), Object.keys(W).forEach(function(a) { b.a11y[a] = W[a].bind(b) })
            },
            on: { init: function() { this.params.a11y.enabled && (this.a11y.init(), this.a11y.updateNavigation()) }, toEdge: function() { this.params.a11y.enabled && this.a11y.updateNavigation() }, fromEdge: function() { this.params.a11y.enabled && this.a11y.updateNavigation() }, paginationUpdate: function() { this.params.a11y.enabled && this.a11y.updatePagination() }, destroy: function() { this.params.a11y.enabled && this.a11y.destroy() } }
        }, {
            name: "history",
            params: { history: { enabled: !1, replaceState: !1, key: "slides" } },
            create: function() {
                var a = this;
                k.extend(a, { history: { init: X.init.bind(a), setHistory: X.setHistory.bind(a), setHistoryPopState: X.setHistoryPopState.bind(a), scrollToSlide: X.scrollToSlide.bind(a), destroy: X.destroy.bind(a) } })
            },
            on: { init: function() { this.params.history.enabled && this.history.init() }, destroy: function() { this.params.history.enabled && this.history.destroy() }, transitionEnd: function() { this.history.initialized && this.history.setHistory(this.params.history.key, this.activeIndex) } }
        }, {
            name: "hash-navigation",
            params: { hashNavigation: { enabled: !1, replaceState: !1, watchState: !1 } },
            create: function() {
                var a = this;
                k.extend(a, { hashNavigation: { initialized: !1, init: Y.init.bind(a), destroy: Y.destroy.bind(a), setHash: Y.setHash.bind(a), onHashCange: Y.onHashCange.bind(a) } })
            },
            on: { init: function() { this.params.hashNavigation.enabled && this.hashNavigation.init() }, destroy: function() { this.params.hashNavigation.enabled && this.hashNavigation.destroy() }, transitionEnd: function() { this.hashNavigation.initialized && this.hashNavigation.setHash() } }
        }, {
            name: "autoplay",
            params: { autoplay: { enabled: !1, delay: 3e3, waitForTransition: !0, disableOnInteraction: !0, stopOnLastSlide: !1, reverseDirection: !1 } },
            create: function() {
                var a = this;
                k.extend(a, { autoplay: { running: !1, paused: !1, run: Z.run.bind(a), start: Z.start.bind(a), stop: Z.stop.bind(a), pause: Z.pause.bind(a), onTransitionEnd: function(b) { a && !a.destroyed && a.$wrapperEl && b.target === this && (a.$wrapperEl[0].removeEventListener("transitionend", a.autoplay.onTransitionEnd), a.$wrapperEl[0].removeEventListener("webkitTransitionEnd", a.autoplay.onTransitionEnd), a.autoplay.paused = !1, a.autoplay.running ? a.autoplay.run() : a.autoplay.stop()) } } })
            },
            on: { init: function() { this.params.autoplay.enabled && this.autoplay.start() }, beforeTransitionStart: function(a, b) { this.autoplay.running && (b || !this.params.autoplay.disableOnInteraction ? this.autoplay.pause(a) : this.autoplay.stop()) }, sliderFirstMove: function() { this.autoplay.running && (this.params.autoplay.disableOnInteraction ? this.autoplay.stop() : this.autoplay.pause()) }, destroy: function() { this.autoplay.running && this.autoplay.stop() } }
        }, {
            name: "effect-fade",
            params: { fadeEffect: { crossFade: !1 } },
            create: function() { k.extend(this, { fadeEffect: { setTranslate: $.setTranslate.bind(this), setTransition: $.setTransition.bind(this) } }) },
            on: {
                beforeInit: function() {
                    var a = this;
                    if ("fade" === a.params.effect) {
                        a.classNames.push(a.params.containerModifierClass + "fade");
                        var b = { slidesPerView: 1, slidesPerColumn: 1, slidesPerGroup: 1, watchSlidesProgress: !0, spaceBetween: 0, virtualTranslate: !0 };
                        k.extend(a.params, b), k.extend(a.originalParams, b)
                    }
                },
                setTranslate: function() { "fade" === this.params.effect && this.fadeEffect.setTranslate() },
                setTransition: function(a) { "fade" === this.params.effect && this.fadeEffect.setTransition(a) }
            }
        }, {
            name: "effect-cube",
            params: { cubeEffect: { slideShadows: !0, shadow: !0, shadowOffset: 20, shadowScale: .94 } },
            create: function() { k.extend(this, { cubeEffect: { setTranslate: _.setTranslate.bind(this), setTransition: _.setTransition.bind(this) } }) },
            on: {
                beforeInit: function() {
                    var a = this;
                    if ("cube" === a.params.effect) {
                        a.classNames.push(a.params.containerModifierClass + "cube"), a.classNames.push(a.params.containerModifierClass + "3d");
                        var b = { slidesPerView: 1, slidesPerColumn: 1, slidesPerGroup: 1, watchSlidesProgress: !0, resistanceRatio: 0, spaceBetween: 0, centeredSlides: !1, virtualTranslate: !0 };
                        k.extend(a.params, b), k.extend(a.originalParams, b)
                    }
                },
                setTranslate: function() { "cube" === this.params.effect && this.cubeEffect.setTranslate() },
                setTransition: function(a) { "cube" === this.params.effect && this.cubeEffect.setTransition(a) }
            }
        }, {
            name: "effect-flip",
            params: { flipEffect: { slideShadows: !0, limitRotation: !0 } },
            create: function() { k.extend(this, { flipEffect: { setTranslate: aa.setTranslate.bind(this), setTransition: aa.setTransition.bind(this) } }) },
            on: {
                beforeInit: function() {
                    var a = this;
                    if ("flip" === a.params.effect) {
                        a.classNames.push(a.params.containerModifierClass + "flip"), a.classNames.push(a.params.containerModifierClass + "3d");
                        var b = { slidesPerView: 1, slidesPerColumn: 1, slidesPerGroup: 1, watchSlidesProgress: !0, spaceBetween: 0, virtualTranslate: !0 };
                        k.extend(a.params, b), k.extend(a.originalParams, b)
                    }
                },
                setTranslate: function() { "flip" === this.params.effect && this.flipEffect.setTranslate() },
                setTransition: function(a) { "flip" === this.params.effect && this.flipEffect.setTransition(a) }
            }
        }, { name: "effect-coverflow", params: { coverflowEffect: { rotate: 50, stretch: 0, depth: 100, modifier: 1, slideShadows: !0 } }, create: function() { k.extend(this, { coverflowEffect: { setTranslate: ba.setTranslate.bind(this), setTransition: ba.setTransition.bind(this) } }) }, on: { beforeInit: function() { var a = this; "coverflow" === a.params.effect && (a.classNames.push(a.params.containerModifierClass + "coverflow"), a.classNames.push(a.params.containerModifierClass + "3d"), a.params.watchSlidesProgress = !0, a.originalParams.watchSlidesProgress = !0) }, setTranslate: function() { "coverflow" === this.params.effect && this.coverflowEffect.setTranslate() }, setTransition: function(a) { "coverflow" === this.params.effect && this.coverflowEffect.setTransition(a) } } }, {
            name: "thumbs",
            params: { thumbs: { swiper: null, slideThumbActiveClass: "swiper-slide-thumb-active", thumbsContainerClass: "swiper-containera-thumbs" } },
            create: function() { k.extend(this, { thumbs: { swiper: null, init: ca.init.bind(this), update: ca.update.bind(this), onThumbClick: ca.onThumbClick.bind(this) } }) },
            on: {
                beforeInit: function() {
                    var a = this.params.thumbs;
                    a && a.swiper && (this.thumbs.init(), this.thumbs.update(!0))
                },
                slideChange: function() { this.thumbs.swiper && this.thumbs.update() },
                update: function() { this.thumbs.swiper && this.thumbs.update() },
                resize: function() { this.thumbs.swiper && this.thumbs.update() },
                observerUpdate: function() { this.thumbs.swiper && this.thumbs.update() },
                setTransition: function(a) {
                    var b = this.thumbs.swiper;
                    b && b.setTransition(a)
                },
                beforeDestroy: function() {
                    var a = this.thumbs.swiper;
                    a && this.thumbs.swiperCreated && a && a.destroy()
                }
            }
        }];
    return void 0 === D.use && (D.use = D.Class.use, D.installModule = D.Class.installModule), D.use(da), D
}), ! function(a, b) {
    if ("function" == typeof define && define.amd) define(["module", "exports"], b);
    else if ("undefined" != typeof exports) b(module, exports);
    else {
        var c = { exports: {} };
        b(c, c.exports), a.autosize = c.exports
    }
}(this, function(a, b) {
    "use strict";

    function c(a) {
        function b(b) {
            var c = a.style.width;
            a.style.width = "0px", a.offsetWidth, a.style.width = c, a.style.overflowY = b
        }

        function c() {
            if (0 !== a.scrollHeight) {
                var b = function(a) { for (var b = []; a && a.parentNode && a.parentNode instanceof Element;) a.parentNode.scrollTop && b.push({ node: a.parentNode, scrollTop: a.parentNode.scrollTop }), a = a.parentNode; return b }(a),
                    c = document.documentElement && document.documentElement.scrollTop;
                a.style.height = "", a.style.height = a.scrollHeight + f + "px", g = a.clientWidth, b.forEach(function(a) { a.node.scrollTop = a.scrollTop }), c && (document.documentElement.scrollTop = c)
            }
        }

        function d() {
            c();
            var d = Math.round(parseFloat(a.style.height)),
                e = window.getComputedStyle(a, null),
                f = "content-box" === e.boxSizing ? Math.round(parseFloat(e.height)) : a.offsetHeight;
            if (f < d ? "hidden" === e.overflowY && (b("scroll"), c(), f = "content-box" === e.boxSizing ? Math.round(parseFloat(window.getComputedStyle(a, null).height)) : a.offsetHeight) : "hidden" !== e.overflowY && (b("hidden"), c(), f = "content-box" === e.boxSizing ? Math.round(parseFloat(window.getComputedStyle(a, null).height)) : a.offsetHeight), j !== f) { j = f; var g = i("autosize:resized"); try { a.dispatchEvent(g) } catch (d) {} }
        }
        if (a && a.nodeName && "TEXTAREA" === a.nodeName && !h.has(a)) {
            var e, f = null,
                g = null,
                j = null,
                k = function() { a.clientWidth !== g && d() },
                l = function(b) { window.removeEventListener("resize", k, !1), a.removeEventListener("input", d, !1), a.removeEventListener("keyup", d, !1), a.removeEventListener("autosize:destroy", l, !1), a.removeEventListener("autosize:update", d, !1), Object.keys(b).forEach(function(c) { a.style[c] = b[c] }), h["delete"](a) }.bind(a, { height: a.style.height, resize: a.style.resize, overflowY: a.style.overflowY, overflowX: a.style.overflowX, wordWrap: a.style.wordWrap });
            a.addEventListener("autosize:destroy", l, !1), "onpropertychange" in a && "oninput" in a && a.addEventListener("keyup", d, !1), window.addEventListener("resize", k, !1), a.addEventListener("input", d, !1), a.addEventListener("autosize:update", d, !1), a.style.overflowX = "hidden", a.style.wordWrap = "break-word", h.set(a, { destroy: l, update: d }), "vertical" === (e = window.getComputedStyle(a, null)).resize ? a.style.resize = "none" : "both" === e.resize && (a.style.resize = "horizontal"), f = "content-box" === e.boxSizing ? -(parseFloat(e.paddingTop) + parseFloat(e.paddingBottom)) : parseFloat(e.borderTopWidth) + parseFloat(e.borderBottomWidth), isNaN(f) && (f = 0), d()
        }
    }

    function d(a) {
        var b = h.get(a);
        b && b.destroy()
    }

    function e(a) {
        var b = h.get(a);
        b && b.update()
    }
    var f, g, h = "function" == typeof Map ? new Map : (f = [], g = [], { has: function(a) { return -1 < f.indexOf(a) }, get: function(a) { return g[f.indexOf(a)] }, set: function(a, b) {-1 === f.indexOf(a) && (f.push(a), g.push(b)) }, "delete": function(a) { var b = f.indexOf(a); - 1 < b && (f.splice(b, 1), g.splice(b, 1)) } }),
        i = function(a) { return new Event(a, { bubbles: !0 }) };
    try { new Event("test") } catch (a) { i = function(a) { var b = document.createEvent("Event"); return b.initEvent(a, !0, !1), b } }
    var j = null;
    "undefined" == typeof window || "function" != typeof window.getComputedStyle ? ((j = function(a) { return a }).destroy = function(a) { return a }, j.update = function(a) { return a }) : ((j = function(a, b) { return a && Array.prototype.forEach.call(a.length ? a : [a], function(a) { return c(a) }), a }).destroy = function(a) { return a && Array.prototype.forEach.call(a.length ? a : [a], d), a }, j.update = function(a) { return a && Array.prototype.forEach.call(a.length ? a : [a], e), a }), b["default"] = j, a.exports = b["default"]
});