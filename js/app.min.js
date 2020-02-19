function mr_parallax() {
    "use strict";

    function a(a) {
        for (var b = 0; b < a.length; b++)
            if ("undefined" != typeof document.body.style[a[b]]) return a[b];
        return null
    }

    function b() { var a, b = 0; return f() ? (b = jQuery(".viu").find("nav:first").outerHeight(!0), a = jQuery(".viu").find("nav:first").css("position"), ("absolute" === a || "fixed" === a) && (b = 0)) : b = jQuery(document).find("nav:first").outerHeight(!0), Math.floor(b) }

    function c() { return /Android/i.test(navigator.userAgent || navigator.vendor || window.opera) ? screen.height * window.devicePixelRatio : /iPad|iPhone|iPod/i.test(navigator.userAgent || navigator.vendor || window.opera) ? 0 === window.orientation && screen.height > screen.width ? screen.height : screen.width : Math.max(document.documentElement.clientHeight, window.innerHeight || 0) }

    function d() { p === !1 && (p = !0, h(q.mr_parallaxBackground)) }

    function e(a) { var b = {}; return a && "[object Function]" === b.toString.call(a) }

    function f() { return "undefined" == typeof window.mr_variant ? !1 : !0 }
    var g, h = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || window.msRequestAnimationFrame,
        i = ["transform", "msTransform", "webkitTransform", "mozTransform", "oTransform"],
        j = a(i),
        k = "translate3d(0,",
        l = "px,0)",
        m = c(),
        n = 0,
        o = window,
        p = (f(), !1),
        q = this;
    jQuery(document).ready(function() { q.documentReady() }), jQuery(window).on("load", function() { q.windowLoad() }), this.documentReady = function(a) { return m = c(), jQuery("body").hasClass("parallax-2d") && (k = "translate(0,", l = "px)"), h && (q.profileParallaxElements(), q.setupParallax()), e(a) ? void a() : void 0 }, this.windowLoad = function() { m = c(), n = b(), window.mr_parallax.profileParallaxElements() }, this.setupParallax = function() { f() && (o = jQuery(".viu").get(0)), "undefined" != typeof o && (("undefined" == typeof window.mr || f()) && (o.onscroll = d), window.addEventListener("resize", function() { m = c(), n = b(), q.profileParallaxElements(), q.mr_parallaxBackground() }, !1), window.addEventListener("orientationchange", function() {}, !1), q.mr_parallaxBackground()) }, this.profileParallaxElements = function() {
        var a;
        g = [], m = c(), n = b();
        var d = ".parallax > .background-image-holder, .parallax ul.slides > li > .background-image-holder, .parallax ul.slides .owl-item > li > .background-image-holder";
        f() && (d = ".viu .parallax > .background-image-holder, .viu .parallax ul.slides > li > .background-image-holder, .parallax ul.slides .owl-item > li > .background-image-holder"), a = jQuery(d), /Android|iPad|iPhone|iPod/i.test(navigator.userAgent || navigator.vendor || window.opera) && (a = a.not(".parallax-disable-mobile .background-image-holder")), jQuery(a).each(function(a) {
            var b = jQuery(this).closest(".parallax"),
                c = f() ? b.position().top : b.offset().top,
                d = screen.height,
                e = screen.width;
            g.push({ section: b.get(0), outerHeight: b.outerHeight(), elemTop: c, elemBottom: c + b.outerHeight(), isFirstSection: b.is(":nth-of-type(1)") ? !0 : !1, imageHolder: jQuery(this).get(0) }), /iPad|iPhone|iPod/i.test(navigator.userAgent || navigator.vendor || window.opera) && (0 === window.orientation && d > e ? jQuery(this).css("top", "-" + d / 2 + "px") : jQuery(this).css("top", "-" + e / 2 + "px")), /Android/i.test(navigator.userAgent || navigator.vendor || window.opera) && jQuery(this).css({ top: "-" + d * window.devicePixelRatio / 2 + "px", "min-height": d }), f() ? f() && (b.is(":nth-of-type(1)") ? q.mr_setTranslate3DTransform(jQuery(this).get(0), 0 === q.mr_getScrollPosition() ? 0 : q.mr_getScrollPosition() / 2) : q.mr_setTranslate3DTransform(jQuery(this).get(0), (q.mr_getScrollPosition() - c - n) / 2)) : b.is(":nth-of-type(1)") ? q.mr_setTranslate3DTransform(jQuery(this).get(0), 0 === q.mr_getScrollPosition() ? 0 : q.mr_getScrollPosition() / 2) : q.mr_setTranslate3DTransform(jQuery(this).get(0), (q.mr_getScrollPosition() + m - c) / 2)
        })
    }, this.mr_parallaxBackground = function() {
        for (var a, b = g.length, c = "undefined" == typeof mr || f() ? q.mr_getScrollPosition() : mr.scroll.y; b--;) a = g[b], f() ? c + m - n > a.elemTop && c - n < a.elemBottom && (a.isFirstSection ? a.imageHolder.style[j] = k + c / 2 + l : a.imageHolder.style[j] = k + (c - a.elemTop - n) / 2 + l) : c + m >= a.elemTop && c <= a.elemBottom && (a.isFirstSection ? a.imageHolder.style[j] = k + c / 2 + l : a.imageHolder.style[j] = k + (c + m - a.elemTop) / 2 + l);
        p = !1
    }, this.mr_setTranslate3DTransform = function(a, b) { a.style[j] = k + b + l }, this.mr_getScrollPosition = function() { return o !== window ? o.scrollTop : 0 === document.documentElement.scrollTop ? document.body.scrollTop : document.documentElement.scrollTop }
}
window.mr_parallax = new mr_parallax;


! function(t, e) { "use strict"; "function" == typeof define && define.amd ? define("jquery-bridget/jquery-bridget", ["jquery"], function(i) { e(t, i) }) : "object" == typeof module && module.exports ? module.exports = e(t, require("jquery")) : t.jQueryBridget = e(t, t.jQuery) }(window, function(t, e) {
    "use strict";

    function i(i, o, a) {
        function h(t, e, n) {
            var s, o = "$()." + i + '("' + e + '")';
            return t.each(function(t, h) {
                var l = a.data(h, i);
                if (!l) return void r(i + " not initialized. Cannot call methods, i.e. " + o);
                var c = l[e];
                if (!c || "_" == e.charAt(0)) return void r(o + " is not a valid method");
                var d = c.apply(l, n);
                s = void 0 === s ? d : s
            }), void 0 !== s ? s : t
        }

        function l(t, e) {
            t.each(function(t, n) {
                var s = a.data(n, i);
                s ? (s.option(e), s._init()) : (s = new o(n, e), a.data(n, i, s))
            })
        }
        a = a || e || t.jQuery, a && (o.prototype.option || (o.prototype.option = function(t) { a.isPlainObject(t) && (this.options = a.extend(!0, this.options, t)) }), a.fn[i] = function(t) { if ("string" == typeof t) { var e = s.call(arguments, 1); return h(this, t, e) } return l(this, t), this }, n(a))
    }

    function n(t) {!t || t && t.bridget || (t.bridget = i) }
    var s = Array.prototype.slice,
        o = t.console,
        r = "undefined" == typeof o ? function() {} : function(t) { o.error(t) };
    return n(e || t.jQuery), i
}),
function(t, e) { "function" == typeof define && define.amd ? define("ev-emitter/ev-emitter", e) : "object" == typeof module && module.exports ? module.exports = e() : t.EvEmitter = e() }("undefined" != typeof window ? window : this, function() {
    function t() {}
    var e = t.prototype;
    return e.on = function(t, e) {
        if (t && e) {
            var i = this._events = this._events || {},
                n = i[t] = i[t] || [];
            return n.indexOf(e) == -1 && n.push(e), this
        }
    }, e.once = function(t, e) {
        if (t && e) {
            this.on(t, e);
            var i = this._onceEvents = this._onceEvents || {},
                n = i[t] = i[t] || {};
            return n[e] = !0, this
        }
    }, e.off = function(t, e) { var i = this._events && this._events[t]; if (i && i.length) { var n = i.indexOf(e); return n != -1 && i.splice(n, 1), this } }, e.emitEvent = function(t, e) {
        var i = this._events && this._events[t];
        if (i && i.length) {
            var n = 0,
                s = i[n];
            e = e || [];
            for (var o = this._onceEvents && this._onceEvents[t]; s;) {
                var r = o && o[s];
                r && (this.off(t, s), delete o[s]), s.apply(this, e), n += r ? 0 : 1, s = i[n]
            }
            return this
        }
    }, t
}),
function(t, e) { "use strict"; "function" == typeof define && define.amd ? define("get-size/get-size", [], function() { return e() }) : "object" == typeof module && module.exports ? module.exports = e() : t.getSize = e() }(window, function() {
    "use strict";

    function t(t) {
        var e = parseFloat(t),
            i = t.indexOf("%") == -1 && !isNaN(e);
        return i && e
    }

    function e() {}

    function i() {
        for (var t = { width: 0, height: 0, innerWidth: 0, innerHeight: 0, outerWidth: 0, outerHeight: 0 }, e = 0; e < l; e++) {
            var i = h[e];
            t[i] = 0
        }
        return t
    }

    function n(t) { var e = getComputedStyle(t); return e || a("Style returned " + e + ". Are you running this code in a hidden iframe on Firefox? See http://bit.ly/getsizebug1"), e }

    function s() {
        if (!c) {
            c = !0;
            var e = document.createElement("div");
            e.style.width = "200px", e.style.padding = "1px 2px 3px 4px", e.style.borderStyle = "solid", e.style.borderWidth = "1px 2px 3px 4px", e.style.boxSizing = "border-box";
            var i = document.body || document.documentElement;
            i.appendChild(e);
            var s = n(e);
            o.isBoxSizeOuter = r = 200 == t(s.width), i.removeChild(e)
        }
    }

    function o(e) {
        if (s(), "string" == typeof e && (e = document.querySelector(e)), e && "object" == typeof e && e.nodeType) {
            var o = n(e);
            if ("none" == o.display) return i();
            var a = {};
            a.width = e.offsetWidth, a.height = e.offsetHeight;
            for (var c = a.isBorderBox = "border-box" == o.boxSizing, d = 0; d < l; d++) {
                var u = h[d],
                    f = o[u],
                    p = parseFloat(f);
                a[u] = isNaN(p) ? 0 : p
            }
            var v = a.paddingLeft + a.paddingRight,
                g = a.paddingTop + a.paddingBottom,
                m = a.marginLeft + a.marginRight,
                y = a.marginTop + a.marginBottom,
                S = a.borderLeftWidth + a.borderRightWidth,
                E = a.borderTopWidth + a.borderBottomWidth,
                b = c && r,
                x = t(o.width);
            x !== !1 && (a.width = x + (b ? 0 : v + S));
            var C = t(o.height);
            return C !== !1 && (a.height = C + (b ? 0 : g + E)), a.innerWidth = a.width - (v + S), a.innerHeight = a.height - (g + E), a.outerWidth = a.width + m, a.outerHeight = a.height + y, a
        }
    }
    var r, a = "undefined" == typeof console ? e : function(t) { console.error(t) },
        h = ["paddingLeft", "paddingRight", "paddingTop", "paddingBottom", "marginLeft", "marginRight", "marginTop", "marginBottom", "borderLeftWidth", "borderRightWidth", "borderTopWidth", "borderBottomWidth"],
        l = h.length,
        c = !1;
    return o
}),
function(t, e) { "use strict"; "function" == typeof define && define.amd ? define("desandro-matches-selector/matches-selector", e) : "object" == typeof module && module.exports ? module.exports = e() : t.matchesSelector = e() }(window, function() {
    "use strict";
    var t = function() {
        var t = Element.prototype;
        if (t.matches) return "matches";
        if (t.matchesSelector) return "matchesSelector";
        for (var e = ["webkit", "moz", "ms", "o"], i = 0; i < e.length; i++) {
            var n = e[i],
                s = n + "MatchesSelector";
            if (t[s]) return s
        }
    }();
    return function(e, i) { return e[t](i) }
}),
function(t, e) { "function" == typeof define && define.amd ? define("fizzy-ui-utils/utils", ["desandro-matches-selector/matches-selector"], function(i) { return e(t, i) }) : "object" == typeof module && module.exports ? module.exports = e(t, require("desandro-matches-selector")) : t.fizzyUIUtils = e(t, t.matchesSelector) }(window, function(t, e) {
    var i = {};
    i.extend = function(t, e) { for (var i in e) t[i] = e[i]; return t }, i.modulo = function(t, e) { return (t % e + e) % e }, i.makeArray = function(t) {
        var e = [];
        if (Array.isArray(t)) e = t;
        else if (t && "number" == typeof t.length)
            for (var i = 0; i < t.length; i++) e.push(t[i]);
        else e.push(t);
        return e
    }, i.removeFrom = function(t, e) {
        var i = t.indexOf(e);
        i != -1 && t.splice(i, 1)
    }, i.getParent = function(t, i) {
        for (; t != document.body;)
            if (t = t.parentNode, e(t, i)) return t
    }, i.getQueryElement = function(t) { return "string" == typeof t ? document.querySelector(t) : t }, i.handleEvent = function(t) {
        var e = "on" + t.type;
        this[e] && this[e](t)
    }, i.filterFindElements = function(t, n) {
        t = i.makeArray(t);
        var s = [];
        return t.forEach(function(t) {
            if (t instanceof HTMLElement) {
                if (!n) return void s.push(t);
                e(t, n) && s.push(t);
                for (var i = t.querySelectorAll(n), o = 0; o < i.length; o++) s.push(i[o])
            }
        }), s
    }, i.debounceMethod = function(t, e, i) {
        var n = t.prototype[e],
            s = e + "Timeout";
        t.prototype[e] = function() {
            var t = this[s];
            t && clearTimeout(t);
            var e = arguments,
                o = this;
            this[s] = setTimeout(function() { n.apply(o, e), delete o[s] }, i || 100)
        }
    }, i.docReady = function(t) { var e = document.readyState; "complete" == e || "interactive" == e ? t() : document.addEventListener("DOMContentLoaded", t) }, i.toDashed = function(t) { return t.replace(/(.)([A-Z])/g, function(t, e, i) { return e + "-" + i }).toLowerCase() };
    var n = t.console;
    return i.htmlInit = function(e, s) {
        i.docReady(function() {
            var o = i.toDashed(s),
                r = "data-" + o,
                a = document.querySelectorAll("[" + r + "]"),
                h = document.querySelectorAll(".js-" + o),
                l = i.makeArray(a).concat(i.makeArray(h)),
                c = r + "-options",
                d = t.jQuery;
            l.forEach(function(t) {
                var i, o = t.getAttribute(r) || t.getAttribute(c);
                try { i = o && JSON.parse(o) } catch (a) { return void(n && n.error("Error parsing " + r + " on " + t.className + ": " + a)) }
                var h = new e(t, i);
                d && d.data(t, s, h)
            })
        })
    }, i
}),
function(t, e) { "function" == typeof define && define.amd ? define("flickity/js/cell", ["get-size/get-size"], function(i) { return e(t, i) }) : "object" == typeof module && module.exports ? module.exports = e(t, require("get-size")) : (t.Flickity = t.Flickity || {}, t.Flickity.Cell = e(t, t.getSize)) }(window, function(t, e) {
    function i(t, e) { this.element = t, this.parent = e, this.create() }
    var n = i.prototype;
    return n.create = function() { this.element.style.position = "absolute", this.x = 0, this.shift = 0 }, n.destroy = function() {
        this.element.style.position = "";
        var t = this.parent.originSide;
        this.element.style[t] = ""
    }, n.getSize = function() { this.size = e(this.element) }, n.setPosition = function(t) { this.x = t, this.updateTarget(), this.renderPosition(t) }, n.updateTarget = n.setDefaultTarget = function() {
        var t = "left" == this.parent.originSide ? "marginLeft" : "marginRight";
        this.target = this.x + this.size[t] + this.size.width * this.parent.cellAlign
    }, n.renderPosition = function(t) {
        var e = this.parent.originSide;
        this.element.style[e] = this.parent.getPositionValue(t)
    }, n.wrapShift = function(t) { this.shift = t, this.renderPosition(this.x + this.parent.slideableWidth * t) }, n.remove = function() { this.element.parentNode.removeChild(this.element) }, i
}),
function(t, e) { "function" == typeof define && define.amd ? define("flickity/js/slide", e) : "object" == typeof module && module.exports ? module.exports = e() : (t.Flickity = t.Flickity || {}, t.Flickity.Slide = e()) }(window, function() {
    "use strict";

    function t(t) { this.parent = t, this.isOriginLeft = "left" == t.originSide, this.cells = [], this.outerWidth = 0, this.height = 0 }
    var e = t.prototype;
    return e.addCell = function(t) {
        if (this.cells.push(t), this.outerWidth += t.size.outerWidth, this.height = Math.max(t.size.outerHeight, this.height), 1 == this.cells.length) {
            this.x = t.x;
            var e = this.isOriginLeft ? "marginLeft" : "marginRight";
            this.firstMargin = t.size[e]
        }
    }, e.updateTarget = function() {
        var t = this.isOriginLeft ? "marginRight" : "marginLeft",
            e = this.getLastCell(),
            i = e ? e.size[t] : 0,
            n = this.outerWidth - (this.firstMargin + i);
        this.target = this.x + this.firstMargin + n * this.parent.cellAlign
    }, e.getLastCell = function() { return this.cells[this.cells.length - 1] }, e.select = function() { this.changeSelectedClass("add") }, e.unselect = function() { this.changeSelectedClass("remove") }, e.changeSelectedClass = function(t) { this.cells.forEach(function(e) { e.element.classList[t]("is-selected") }) }, e.getCellElements = function() { return this.cells.map(function(t) { return t.element }) }, t
}),
function(t, e) { "function" == typeof define && define.amd ? define("flickity/js/animate", ["fizzy-ui-utils/utils"], function(i) { return e(t, i) }) : "object" == typeof module && module.exports ? module.exports = e(t, require("fizzy-ui-utils")) : (t.Flickity = t.Flickity || {}, t.Flickity.animatePrototype = e(t, t.fizzyUIUtils)) }(window, function(t, e) {
    var i = t.requestAnimationFrame || t.webkitRequestAnimationFrame,
        n = 0;
    i || (i = function(t) {
        var e = (new Date).getTime(),
            i = Math.max(0, 16 - (e - n)),
            s = setTimeout(t, i);
        return n = e + i, s
    });
    var s = {};
    s.startAnimation = function() { this.isAnimating || (this.isAnimating = !0, this.restingFrames = 0, this.animate()) }, s.animate = function() {
        this.applyDragForce(), this.applySelectedAttraction();
        var t = this.x;
        if (this.integratePhysics(), this.positionSlider(), this.settle(t), this.isAnimating) {
            var e = this;
            i(function() { e.animate() })
        }
    };
    var o = function() { var t = document.documentElement.style; return "string" == typeof t.transform ? "transform" : "WebkitTransform" }();
    return s.positionSlider = function() {
        var t = this.x;
        this.options.wrapAround && this.cells.length > 1 && (t = e.modulo(t, this.slideableWidth), t -= this.slideableWidth, this.shiftWrapCells(t)), t += this.cursorPosition, t = this.options.rightToLeft && o ? -t : t;
        var i = this.getPositionValue(t);
        this.slider.style[o] = this.isAnimating ? "translate3d(" + i + ",0,0)" : "translateX(" + i + ")";
        var n = this.slides[0];
        if (n) {
            var s = -this.x - n.target,
                r = s / this.slidesWidth;
            this.dispatchEvent("scroll", null, [r, s])
        }
    }, s.positionSliderAtSelected = function() { this.cells.length && (this.x = -this.selectedSlide.target, this.positionSlider()) }, s.getPositionValue = function(t) { return this.options.percentPosition ? .01 * Math.round(t / this.size.innerWidth * 1e4) + "%" : Math.round(t) + "px" }, s.settle = function(t) { this.isPointerDown || Math.round(100 * this.x) != Math.round(100 * t) || this.restingFrames++, this.restingFrames > 2 && (this.isAnimating = !1, delete this.isFreeScrolling, this.positionSlider(), this.dispatchEvent("settle")) }, s.shiftWrapCells = function(t) {
        var e = this.cursorPosition + t;
        this._shiftCells(this.beforeShiftCells, e, -1);
        var i = this.size.innerWidth - (t + this.slideableWidth + this.cursorPosition);
        this._shiftCells(this.afterShiftCells, i, 1)
    }, s._shiftCells = function(t, e, i) {
        for (var n = 0; n < t.length; n++) {
            var s = t[n],
                o = e > 0 ? i : 0;
            s.wrapShift(o), e -= s.size.outerWidth
        }
    }, s._unshiftCells = function(t) {
        if (t && t.length)
            for (var e = 0; e < t.length; e++) t[e].wrapShift(0)
    }, s.integratePhysics = function() { this.x += this.velocity, this.velocity *= this.getFrictionFactor() }, s.applyForce = function(t) { this.velocity += t }, s.getFrictionFactor = function() { return 1 - this.options[this.isFreeScrolling ? "freeScrollFriction" : "friction"] }, s.getRestingPosition = function() { return this.x + this.velocity / (1 - this.getFrictionFactor()) }, s.applyDragForce = function() {
        if (this.isPointerDown) {
            var t = this.dragX - this.x,
                e = t - this.velocity;
            this.applyForce(e)
        }
    }, s.applySelectedAttraction = function() {
        if (!this.isPointerDown && !this.isFreeScrolling && this.cells.length) {
            var t = this.selectedSlide.target * -1 - this.x,
                e = t * this.options.selectedAttraction;
            this.applyForce(e)
        }
    }, s
}),
function(t, e) {
    if ("function" == typeof define && define.amd) define("flickity/js/flickity", ["ev-emitter/ev-emitter", "get-size/get-size", "fizzy-ui-utils/utils", "./cell", "./slide", "./animate"], function(i, n, s, o, r, a) { return e(t, i, n, s, o, r, a) });
    else if ("object" == typeof module && module.exports) module.exports = e(t, require("ev-emitter"), require("get-size"), require("fizzy-ui-utils"), require("./cell"), require("./slide"), require("./animate"));
    else {
        var i = t.Flickity;
        t.Flickity = e(t, t.EvEmitter, t.getSize, t.fizzyUIUtils, i.Cell, i.Slide, i.animatePrototype)
    }
}(window, function(t, e, i, n, s, o, r) {
    function a(t, e) { for (t = n.makeArray(t); t.length;) e.appendChild(t.shift()) }

    function h(t, e) { var i = n.getQueryElement(t); return i ? (this.element = i, l && (this.$element = l(this.element)), this.options = n.extend({}, this.constructor.defaults), this.option(e), void this._create()) : void(d && d.error("Bad element for Flickity: " + (i || t))) }
    var l = t.jQuery,
        c = t.getComputedStyle,
        d = t.console,
        u = 0,
        f = {};
    h.defaults = { accessibility: !0, cellAlign: "center", freeScrollFriction: .075, friction: .28, namespaceJQueryEvents: !0, percentPosition: !0, resize: !0, selectedAttraction: .025, setGallerySize: !0 }, h.createMethods = [];
    var p = h.prototype;
    n.extend(p, e.prototype), p._create = function() {
        var e = this.guid = ++u;
        this.element.flickityGUID = e, f[e] = this, this.selectedIndex = 0, this.restingFrames = 0, this.x = 0, this.velocity = 0, this.originSide = this.options.rightToLeft ? "right" : "left", this.viewport = document.createElement("div"), this.viewport.className = "flickity-viewport", this._createSlider(), (this.options.resize || this.options.watchCSS) && t.addEventListener("resize", this), h.createMethods.forEach(function(t) { this[t]() }, this), this.options.watchCSS ? this.watchCSS() : this.activate()
    }, p.option = function(t) { n.extend(this.options, t) }, p.activate = function() {
        if (!this.isActive) {
            this.isActive = !0, this.element.classList.add("flickity-enabled"), this.options.rightToLeft && this.element.classList.add("flickity-rtl"), this.getSize();
            var t = this._filterFindCellElements(this.element.children);
            a(t, this.slider), this.viewport.appendChild(this.slider), this.element.appendChild(this.viewport), this.reloadCells(), this.options.accessibility && (this.element.tabIndex = 0, this.element.addEventListener("keydown", this)), this.emitEvent("activate");
            var e, i = this.options.initialIndex;
            e = this.isInitActivated ? this.selectedIndex : void 0 !== i && this.cells[i] ? i : 0, this.select(e, !1, !0), this.isInitActivated = !0
        }
    }, p._createSlider = function() {
        var t = document.createElement("div");
        t.className = "flickity-slider", t.style[this.originSide] = 0, this.slider = t
    }, p._filterFindCellElements = function(t) { return n.filterFindElements(t, this.options.cellSelector) }, p.reloadCells = function() { this.cells = this._makeCells(this.slider.children), this.positionCells(), this._getWrapShiftCells(), this.setGallerySize() }, p._makeCells = function(t) {
        var e = this._filterFindCellElements(t),
            i = e.map(function(t) { return new s(t, this) }, this);
        return i
    }, p.getLastCell = function() { return this.cells[this.cells.length - 1] }, p.getLastSlide = function() { return this.slides[this.slides.length - 1] }, p.positionCells = function() { this._sizeCells(this.cells), this._positionCells(0) }, p._positionCells = function(t) {
        t = t || 0, this.maxCellHeight = t ? this.maxCellHeight || 0 : 0;
        var e = 0;
        if (t > 0) {
            var i = this.cells[t - 1];
            e = i.x + i.size.outerWidth
        }
        for (var n = this.cells.length, s = t; s < n; s++) {
            var o = this.cells[s];
            o.setPosition(e), e += o.size.outerWidth, this.maxCellHeight = Math.max(o.size.outerHeight, this.maxCellHeight)
        }
        this.slideableWidth = e, this.updateSlides(), this._containSlides(), this.slidesWidth = n ? this.getLastSlide().target - this.slides[0].target : 0
    }, p._sizeCells = function(t) { t.forEach(function(t) { t.getSize() }) }, p.updateSlides = function() {
        if (this.slides = [], this.cells.length) {
            var t = new o(this);
            this.slides.push(t);
            var e = "left" == this.originSide,
                i = e ? "marginRight" : "marginLeft",
                n = this._getCanCellFit();
            this.cells.forEach(function(e, s) {
                if (!t.cells.length) return void t.addCell(e);
                var r = t.outerWidth - t.firstMargin + (e.size.outerWidth - e.size[i]);
                n.call(this, s, r) ? t.addCell(e) : (t.updateTarget(), t = new o(this), this.slides.push(t), t.addCell(e))
            }, this), t.updateTarget(), this.updateSelectedSlide()
        }
    }, p._getCanCellFit = function() {
        var t = this.options.groupCells;
        if (!t) return function() { return !1 };
        if ("number" == typeof t) { var e = parseInt(t, 10); return function(t) { return t % e !== 0 } }
        var i = "string" == typeof t && t.match(/^(\d+)%$/),
            n = i ? parseInt(i[1], 10) / 100 : 1;
        return function(t, e) { return e <= (this.size.innerWidth + 1) * n }
    }, p._init = p.reposition = function() { this.positionCells(), this.positionSliderAtSelected() }, p.getSize = function() { this.size = i(this.element), this.setCellAlign(), this.cursorPosition = this.size.innerWidth * this.cellAlign };
    var v = { center: { left: .5, right: .5 }, left: { left: 0, right: 1 }, right: { right: 0, left: 1 } };
    return p.setCellAlign = function() {
        var t = v[this.options.cellAlign];
        this.cellAlign = t ? t[this.originSide] : this.options.cellAlign
    }, p.setGallerySize = function() {
        if (this.options.setGallerySize) {
            var t = this.options.adaptiveHeight && this.selectedSlide ? this.selectedSlide.height : this.maxCellHeight;
            this.viewport.style.height = t + "px"
        }
    }, p._getWrapShiftCells = function() {
        if (this.options.wrapAround) {
            this._unshiftCells(this.beforeShiftCells), this._unshiftCells(this.afterShiftCells);
            var t = this.cursorPosition,
                e = this.cells.length - 1;
            this.beforeShiftCells = this._getGapCells(t, e, -1), t = this.size.innerWidth - this.cursorPosition, this.afterShiftCells = this._getGapCells(t, 0, 1)
        }
    }, p._getGapCells = function(t, e, i) {
        for (var n = []; t > 0;) {
            var s = this.cells[e];
            if (!s) break;
            n.push(s), e += i, t -= s.size.outerWidth
        }
        return n
    }, p._containSlides = function() {
        if (this.options.contain && !this.options.wrapAround && this.cells.length) {
            var t = this.options.rightToLeft,
                e = t ? "marginRight" : "marginLeft",
                i = t ? "marginLeft" : "marginRight",
                n = this.slideableWidth - this.getLastCell().size[i],
                s = n < this.size.innerWidth,
                o = this.cursorPosition + this.cells[0].size[e],
                r = n - this.size.innerWidth * (1 - this.cellAlign);
            this.slides.forEach(function(t) { s ? t.target = n * this.cellAlign : (t.target = Math.max(t.target, o), t.target = Math.min(t.target, r)) }, this)
        }
    }, p.dispatchEvent = function(t, e, i) {
        var n = e ? [e].concat(i) : i;
        if (this.emitEvent(t, n), l && this.$element) {
            t += this.options.namespaceJQueryEvents ? ".flickity" : "";
            var s = t;
            if (e) {
                var o = l.Event(e);
                o.type = t, s = o
            }
            this.$element.trigger(s, i)
        }
    }, p.select = function(t, e, i) { this.isActive && (t = parseInt(t, 10), this._wrapSelect(t), (this.options.wrapAround || e) && (t = n.modulo(t, this.slides.length)), this.slides[t] && (this.selectedIndex = t, this.updateSelectedSlide(), i ? this.positionSliderAtSelected() : this.startAnimation(), this.options.adaptiveHeight && this.setGallerySize(), this.dispatchEvent("select"), this.dispatchEvent("cellSelect"))) }, p._wrapSelect = function(t) {
        var e = this.slides.length,
            i = this.options.wrapAround && e > 1;
        if (!i) return t;
        var s = n.modulo(t, e),
            o = Math.abs(s - this.selectedIndex),
            r = Math.abs(s + e - this.selectedIndex),
            a = Math.abs(s - e - this.selectedIndex);
        !this.isDragSelect && r < o ? t += e : !this.isDragSelect && a < o && (t -= e), t < 0 ? this.x -= this.slideableWidth : t >= e && (this.x += this.slideableWidth)
    }, p.previous = function(t) { this.select(this.selectedIndex - 1, t) }, p.next = function(t) { this.select(this.selectedIndex + 1, t) }, p.updateSelectedSlide = function() {
        var t = this.slides[this.selectedIndex];
        t && (this.unselectSelectedSlide(), this.selectedSlide = t, t.select(), this.selectedCells = t.cells, this.selectedElements = t.getCellElements(), this.selectedCell = t.cells[0], this.selectedElement = this.selectedElements[0])
    }, p.unselectSelectedSlide = function() { this.selectedSlide && this.selectedSlide.unselect() }, p.selectCell = function(t, e, i) {
        var n;
        "number" == typeof t ? n = this.cells[t] : ("string" == typeof t && (t = this.element.querySelector(t)), n = this.getCell(t));
        for (var s = 0; n && s < this.slides.length; s++) {
            var o = this.slides[s],
                r = o.cells.indexOf(n);
            if (r != -1) return void this.select(s, e, i)
        }
    }, p.getCell = function(t) { for (var e = 0; e < this.cells.length; e++) { var i = this.cells[e]; if (i.element == t) return i } }, p.getCells = function(t) {
        t = n.makeArray(t);
        var e = [];
        return t.forEach(function(t) {
            var i = this.getCell(t);
            i && e.push(i)
        }, this), e
    }, p.getCellElements = function() { return this.cells.map(function(t) { return t.element }) }, p.getParentCell = function(t) { var e = this.getCell(t); return e ? e : (t = n.getParent(t, ".flickity-slider > *"), this.getCell(t)) }, p.getAdjacentCellElements = function(t, e) {
        if (!t) return this.selectedSlide.getCellElements();
        e = void 0 === e ? this.selectedIndex : e;
        var i = this.slides.length;
        if (1 + 2 * t >= i) return this.getCellElements();
        for (var s = [], o = e - t; o <= e + t; o++) {
            var r = this.options.wrapAround ? n.modulo(o, i) : o,
                a = this.slides[r];
            a && (s = s.concat(a.getCellElements()))
        }
        return s
    }, p.uiChange = function() { this.emitEvent("uiChange") }, p.childUIPointerDown = function(t) { this.emitEvent("childUIPointerDown", [t]) }, p.onresize = function() { this.watchCSS(), this.resize() }, n.debounceMethod(h, "onresize", 150), p.resize = function() {
        if (this.isActive) {
            this.getSize(), this.options.wrapAround && (this.x = n.modulo(this.x, this.slideableWidth)), this.positionCells(), this._getWrapShiftCells(), this.setGallerySize(), this.emitEvent("resize");
            var t = this.selectedElements && this.selectedElements[0];
            this.selectCell(t, !1, !0)
        }
    }, p.watchCSS = function() {
        var t = this.options.watchCSS;
        if (t) {
            var e = c(this.element, ":after").content;
            e.indexOf("flickity") != -1 ? this.activate() : this.deactivate()
        }
    }, p.onkeydown = function(t) {
        if (this.options.accessibility && (!document.activeElement || document.activeElement == this.element))
            if (37 == t.keyCode) {
                var e = this.options.rightToLeft ? "next" : "previous";
                this.uiChange(), this[e]()
            } else if (39 == t.keyCode) {
            var i = this.options.rightToLeft ? "previous" : "next";
            this.uiChange(), this[i]()
        }
    }, p.deactivate = function() { this.isActive && (this.element.classList.remove("flickity-enabled"), this.element.classList.remove("flickity-rtl"), this.cells.forEach(function(t) { t.destroy() }), this.unselectSelectedSlide(), this.element.removeChild(this.viewport), a(this.slider.children, this.element), this.options.accessibility && (this.element.removeAttribute("tabIndex"), this.element.removeEventListener("keydown", this)), this.isActive = !1, this.emitEvent("deactivate")) }, p.destroy = function() { this.deactivate(), t.removeEventListener("resize", this), this.emitEvent("destroy"), l && this.$element && l.removeData(this.element, "flickity"), delete this.element.flickityGUID, delete f[this.guid] }, n.extend(p, r), h.data = function(t) { t = n.getQueryElement(t); var e = t && t.flickityGUID; return e && f[e] }, n.htmlInit(h, "flickity"), l && l.bridget && l.bridget("flickity", h), h.Cell = s, h
}),
function(t, e) { "function" == typeof define && define.amd ? define("unipointer/unipointer", ["ev-emitter/ev-emitter"], function(i) { return e(t, i) }) : "object" == typeof module && module.exports ? module.exports = e(t, require("ev-emitter")) : t.Unipointer = e(t, t.EvEmitter) }(window, function(t, e) {
    function i() {}

    function n() {}
    var s = n.prototype = Object.create(e.prototype);
    s.bindStartEvent = function(t) { this._bindStartEvent(t, !0) }, s.unbindStartEvent = function(t) { this._bindStartEvent(t, !1) }, s._bindStartEvent = function(e, i) {
        i = void 0 === i || !!i;
        var n = i ? "addEventListener" : "removeEventListener";
        t.navigator.pointerEnabled ? e[n]("pointerdown", this) : t.navigator.msPointerEnabled ? e[n]("MSPointerDown", this) : (e[n]("mousedown", this), e[n]("touchstart", this))
    }, s.handleEvent = function(t) {
        var e = "on" + t.type;
        this[e] && this[e](t)
    }, s.getTouch = function(t) { for (var e = 0; e < t.length; e++) { var i = t[e]; if (i.identifier == this.pointerIdentifier) return i } }, s.onmousedown = function(t) {
        var e = t.button;
        e && 0 !== e && 1 !== e || this._pointerDown(t, t)
    }, s.ontouchstart = function(t) { this._pointerDown(t, t.changedTouches[0]) }, s.onMSPointerDown = s.onpointerdown = function(t) { this._pointerDown(t, t) }, s._pointerDown = function(t, e) { this.isPointerDown || (this.isPointerDown = !0, this.pointerIdentifier = void 0 !== e.pointerId ? e.pointerId : e.identifier, this.pointerDown(t, e)) }, s.pointerDown = function(t, e) { this._bindPostStartEvents(t), this.emitEvent("pointerDown", [t, e]) };
    var o = { mousedown: ["mousemove", "mouseup"], touchstart: ["touchmove", "touchend", "touchcancel"], pointerdown: ["pointermove", "pointerup", "pointercancel"], MSPointerDown: ["MSPointerMove", "MSPointerUp", "MSPointerCancel"] };
    return s._bindPostStartEvents = function(e) {
        if (e) {
            var i = o[e.type];
            i.forEach(function(e) { t.addEventListener(e, this) }, this), this._boundPointerEvents = i
        }
    }, s._unbindPostStartEvents = function() { this._boundPointerEvents && (this._boundPointerEvents.forEach(function(e) { t.removeEventListener(e, this) }, this), delete this._boundPointerEvents) }, s.onmousemove = function(t) { this._pointerMove(t, t) }, s.onMSPointerMove = s.onpointermove = function(t) { t.pointerId == this.pointerIdentifier && this._pointerMove(t, t) }, s.ontouchmove = function(t) {
        var e = this.getTouch(t.changedTouches);
        e && this._pointerMove(t, e)
    }, s._pointerMove = function(t, e) { this.pointerMove(t, e) }, s.pointerMove = function(t, e) { this.emitEvent("pointerMove", [t, e]) }, s.onmouseup = function(t) { this._pointerUp(t, t) }, s.onMSPointerUp = s.onpointerup = function(t) { t.pointerId == this.pointerIdentifier && this._pointerUp(t, t) }, s.ontouchend = function(t) {
        var e = this.getTouch(t.changedTouches);
        e && this._pointerUp(t, e)
    }, s._pointerUp = function(t, e) { this._pointerDone(), this.pointerUp(t, e) }, s.pointerUp = function(t, e) { this.emitEvent("pointerUp", [t, e]) }, s._pointerDone = function() { this.isPointerDown = !1, delete this.pointerIdentifier, this._unbindPostStartEvents(), this.pointerDone() }, s.pointerDone = i, s.onMSPointerCancel = s.onpointercancel = function(t) { t.pointerId == this.pointerIdentifier && this._pointerCancel(t, t) }, s.ontouchcancel = function(t) {
        var e = this.getTouch(t.changedTouches);
        e && this._pointerCancel(t, e)
    }, s._pointerCancel = function(t, e) { this._pointerDone(), this.pointerCancel(t, e) }, s.pointerCancel = function(t, e) { this.emitEvent("pointerCancel", [t, e]) }, n.getPointerPoint = function(t) { return { x: t.pageX, y: t.pageY } }, n
}),
function(t, e) { "function" == typeof define && define.amd ? define("unidragger/unidragger", ["unipointer/unipointer"], function(i) { return e(t, i) }) : "object" == typeof module && module.exports ? module.exports = e(t, require("unipointer")) : t.Unidragger = e(t, t.Unipointer) }(window, function(t, e) {
    function i() {}

    function n() {}
    var s = n.prototype = Object.create(e.prototype);
    s.bindHandles = function() { this._bindHandles(!0) }, s.unbindHandles = function() { this._bindHandles(!1) };
    var o = t.navigator;
    return s._bindHandles = function(t) {
        t = void 0 === t || !!t;
        var e;
        e = o.pointerEnabled ? function(e) { e.style.touchAction = t ? "none" : "" } : o.msPointerEnabled ? function(e) { e.style.msTouchAction = t ? "none" : "" } : i;
        for (var n = t ? "addEventListener" : "removeEventListener", s = 0; s < this.handles.length; s++) {
            var r = this.handles[s];
            this._bindStartEvent(r, t), e(r), r[n]("click", this)
        }
    }, s.pointerDown = function(t, e) {
        if ("INPUT" == t.target.nodeName && "range" == t.target.type) return this.isPointerDown = !1, void delete this.pointerIdentifier;
        this._dragPointerDown(t, e);
        var i = document.activeElement;
        i && i.blur && i.blur(), this._bindPostStartEvents(t), this.emitEvent("pointerDown", [t, e])
    }, s._dragPointerDown = function(t, i) {
        this.pointerDownPoint = e.getPointerPoint(i);
        var n = this.canPreventDefaultOnPointerDown(t, i);
        n && t.preventDefault()
    }, s.canPreventDefaultOnPointerDown = function(t) { return "SELECT" != t.target.nodeName }, s.pointerMove = function(t, e) {
        var i = this._dragPointerMove(t, e);
        this.emitEvent("pointerMove", [t, e, i]), this._dragMove(t, e, i)
    }, s._dragPointerMove = function(t, i) {
        var n = e.getPointerPoint(i),
            s = { x: n.x - this.pointerDownPoint.x, y: n.y - this.pointerDownPoint.y };
        return !this.isDragging && this.hasDragStarted(s) && this._dragStart(t, i), s
    }, s.hasDragStarted = function(t) { return Math.abs(t.x) > 3 || Math.abs(t.y) > 3 }, s.pointerUp = function(t, e) { this.emitEvent("pointerUp", [t, e]), this._dragPointerUp(t, e) }, s._dragPointerUp = function(t, e) { this.isDragging ? this._dragEnd(t, e) : this._staticClick(t, e) }, s._dragStart = function(t, i) { this.isDragging = !0, this.dragStartPoint = e.getPointerPoint(i), this.isPreventingClicks = !0, this.dragStart(t, i) }, s.dragStart = function(t, e) { this.emitEvent("dragStart", [t, e]) }, s._dragMove = function(t, e, i) { this.isDragging && this.dragMove(t, e, i) }, s.dragMove = function(t, e, i) { t.preventDefault(), this.emitEvent("dragMove", [t, e, i]) }, s._dragEnd = function(t, e) { this.isDragging = !1, setTimeout(function() { delete this.isPreventingClicks }.bind(this)), this.dragEnd(t, e) }, s.dragEnd = function(t, e) { this.emitEvent("dragEnd", [t, e]) }, s.onclick = function(t) { this.isPreventingClicks && t.preventDefault() }, s._staticClick = function(t, e) { if (!this.isIgnoringMouseUp || "mouseup" != t.type) { var i = t.target.nodeName; "INPUT" != i && "TEXTAREA" != i || t.target.focus(), this.staticClick(t, e), "mouseup" != t.type && (this.isIgnoringMouseUp = !0, setTimeout(function() { delete this.isIgnoringMouseUp }.bind(this), 400)) } }, s.staticClick = function(t, e) { this.emitEvent("staticClick", [t, e]) }, n.getPointerPoint = e.getPointerPoint, n
}),
function(t, e) { "function" == typeof define && define.amd ? define("flickity/js/drag", ["./flickity", "unidragger/unidragger", "fizzy-ui-utils/utils"], function(i, n, s) { return e(t, i, n, s) }) : "object" == typeof module && module.exports ? module.exports = e(t, require("./flickity"), require("unidragger"), require("fizzy-ui-utils")) : t.Flickity = e(t, t.Flickity, t.Unidragger, t.fizzyUIUtils) }(window, function(t, e, i, n) {
    function s() { return { x: t.pageXOffset, y: t.pageYOffset } }
    n.extend(e.defaults, { draggable: !0, dragThreshold: 3 }), e.createMethods.push("_createDrag");
    var o = e.prototype;
    n.extend(o, i.prototype), o._createDrag = function() { this.on("activate", this.bindDrag), this.on("uiChange", this._uiChangeDrag), this.on("childUIPointerDown", this._childUIPointerDownDrag), this.on("deactivate", this.unbindDrag) }, o.bindDrag = function() { this.options.draggable && !this.isDragBound && (this.element.classList.add("is-draggable"), this.handles = [this.viewport], this.bindHandles(), this.isDragBound = !0) }, o.unbindDrag = function() { this.isDragBound && (this.element.classList.remove("is-draggable"), this.unbindHandles(), delete this.isDragBound) }, o._uiChangeDrag = function() { delete this.isFreeScrolling }, o._childUIPointerDownDrag = function(t) { t.preventDefault(), this.pointerDownFocus(t) };
    var r = { TEXTAREA: !0, INPUT: !0 },
        a = { radio: !0, checkbox: !0, button: !0, submit: !0, image: !0, file: !0 };
    o.pointerDown = function(e, i) {
        var n = r[e.target.nodeName] && !a[e.target.type];
        if (n) return this.isPointerDown = !1, void delete this.pointerIdentifier;
        this._dragPointerDown(e, i);
        var o = document.activeElement;
        o && o.blur && o != this.element && o != document.body && o.blur(), this.pointerDownFocus(e), this.dragX = this.x, this.viewport.classList.add("is-pointer-down"), this._bindPostStartEvents(e), this.pointerDownScroll = s(), t.addEventListener("scroll", this), this.dispatchEvent("pointerDown", e, [i])
    };
    var h = { touchstart: !0, MSPointerDown: !0 },
        l = { INPUT: !0, SELECT: !0 };
    return o.pointerDownFocus = function(e) {
        if (this.options.accessibility && !h[e.type] && !l[e.target.nodeName]) {
            var i = t.pageYOffset;
            this.element.focus(), t.pageYOffset != i && t.scrollTo(t.pageXOffset, i)
        }
    }, o.canPreventDefaultOnPointerDown = function(t) {
        var e = "touchstart" == t.type,
            i = t.target.nodeName;
        return !e && "SELECT" != i
    }, o.hasDragStarted = function(t) { return Math.abs(t.x) > this.options.dragThreshold }, o.pointerUp = function(t, e) { delete this.isTouchScrolling, this.viewport.classList.remove("is-pointer-down"), this.dispatchEvent("pointerUp", t, [e]), this._dragPointerUp(t, e) }, o.pointerDone = function() { t.removeEventListener("scroll", this), delete this.pointerDownScroll }, o.dragStart = function(t, e) { this.dragStartPosition = this.x, this.startAnimation(), this.dispatchEvent("dragStart", t, [e]) }, o.pointerMove = function(t, e) {
        var i = this._dragPointerMove(t, e);
        this.dispatchEvent("pointerMove", t, [e, i]), this._dragMove(t, e, i)
    }, o.dragMove = function(t, e, i) {
        t.preventDefault(), this.previousDragX = this.dragX;
        var n = this.options.rightToLeft ? -1 : 1,
            s = this.dragStartPosition + i.x * n;
        if (!this.options.wrapAround && this.slides.length) {
            var o = Math.max(-this.slides[0].target, this.dragStartPosition);
            s = s > o ? .5 * (s + o) : s;
            var r = Math.min(-this.getLastSlide().target, this.dragStartPosition);
            s = s < r ? .5 * (s + r) : s
        }
        this.dragX = s, this.dragMoveTime = new Date, this.dispatchEvent("dragMove", t, [e, i])
    }, o.dragEnd = function(t, e) {
        this.options.freeScroll && (this.isFreeScrolling = !0);
        var i = this.dragEndRestingSelect();
        if (this.options.freeScroll && !this.options.wrapAround) {
            var n = this.getRestingPosition();
            this.isFreeScrolling = -n > this.slides[0].target && -n < this.getLastSlide().target
        } else this.options.freeScroll || i != this.selectedIndex || (i += this.dragEndBoostSelect());
        delete this.previousDragX, this.isDragSelect = this.options.wrapAround, this.select(i), delete this.isDragSelect, this.dispatchEvent("dragEnd", t, [e])
    }, o.dragEndRestingSelect = function() {
        var t = this.getRestingPosition(),
            e = Math.abs(this.getSlideDistance(-t, this.selectedIndex)),
            i = this._getClosestResting(t, e, 1),
            n = this._getClosestResting(t, e, -1),
            s = i.distance < n.distance ? i.index : n.index;
        return s
    }, o._getClosestResting = function(t, e, i) {
        for (var n = this.selectedIndex, s = 1 / 0, o = this.options.contain && !this.options.wrapAround ? function(t, e) { return t <= e } : function(t, e) { return t < e }; o(e, s) && (n += i, s = e, e = this.getSlideDistance(-t, n), null !== e);) e = Math.abs(e);
        return { distance: s, index: n - i }
    }, o.getSlideDistance = function(t, e) {
        var i = this.slides.length,
            s = this.options.wrapAround && i > 1,
            o = s ? n.modulo(e, i) : e,
            r = this.slides[o];
        if (!r) return null;
        var a = s ? this.slideableWidth * Math.floor(e / i) : 0;
        return t - (r.target + a)
    }, o.dragEndBoostSelect = function() {
        if (void 0 === this.previousDragX || !this.dragMoveTime || new Date - this.dragMoveTime > 100) return 0;
        var t = this.getSlideDistance(-this.dragX, this.selectedIndex),
            e = this.previousDragX - this.dragX;
        return t > 0 && e > 0 ? 1 : t < 0 && e < 0 ? -1 : 0
    }, o.staticClick = function(t, e) {
        var i = this.getParentCell(t.target),
            n = i && i.element,
            s = i && this.cells.indexOf(i);
        this.dispatchEvent("staticClick", t, [e, n, s])
    }, o.onscroll = function() {
        var t = s(),
            e = this.pointerDownScroll.x - t.x,
            i = this.pointerDownScroll.y - t.y;
        (Math.abs(e) > 3 || Math.abs(i) > 3) && this._pointerDone()
    }, e
}),
function(t, e) { "function" == typeof define && define.amd ? define("tap-listener/tap-listener", ["unipointer/unipointer"], function(i) { return e(t, i) }) : "object" == typeof module && module.exports ? module.exports = e(t, require("unipointer")) : t.TapListener = e(t, t.Unipointer) }(window, function(t, e) {
    function i(t) { this.bindTap(t) }
    var n = i.prototype = Object.create(e.prototype);
    return n.bindTap = function(t) { t && (this.unbindTap(), this.tapElement = t, this._bindStartEvent(t, !0)) }, n.unbindTap = function() { this.tapElement && (this._bindStartEvent(this.tapElement, !0), delete this.tapElement) }, n.pointerUp = function(i, n) {
        if (!this.isIgnoringMouseUp || "mouseup" != i.type) {
            var s = e.getPointerPoint(n),
                o = this.tapElement.getBoundingClientRect(),
                r = t.pageXOffset,
                a = t.pageYOffset,
                h = s.x >= o.left + r && s.x <= o.right + r && s.y >= o.top + a && s.y <= o.bottom + a;
            if (h && this.emitEvent("tap", [i, n]), "mouseup" != i.type) {
                this.isIgnoringMouseUp = !0;
                var l = this;
                setTimeout(function() { delete l.isIgnoringMouseUp }, 400)
            }
        }
    }, n.destroy = function() { this.pointerDone(), this.unbindTap() }, i
}),
function(t, e) { "function" == typeof define && define.amd ? define("flickity/js/prev-next-button", ["./flickity", "tap-listener/tap-listener", "fizzy-ui-utils/utils"], function(i, n, s) { return e(t, i, n, s) }) : "object" == typeof module && module.exports ? module.exports = e(t, require("./flickity"), require("tap-listener"), require("fizzy-ui-utils")) : e(t, t.Flickity, t.TapListener, t.fizzyUIUtils) }(window, function(t, e, i, n) {
    "use strict";

    function s(t, e) { this.direction = t, this.parent = e, this._create() }

    function o(t) { return "string" == typeof t ? t : "M " + t.x0 + ",50 L " + t.x1 + "," + (t.y1 + 50) + " L " + t.x2 + "," + (t.y2 + 50) + " L " + t.x3 + ",50  L " + t.x2 + "," + (50 - t.y2) + " L " + t.x1 + "," + (50 - t.y1) + " Z" }
    var r = "http://www.w3.org/2000/svg";
    s.prototype = new i, s.prototype._create = function() {
        this.isEnabled = !0, this.isPrevious = this.direction == -1;
        var t = this.parent.options.rightToLeft ? 1 : -1;
        this.isLeft = this.direction == t;
        var e = this.element = document.createElement("button");
        e.className = "flickity-prev-next-button", e.className += this.isPrevious ? " previous" : " next", e.setAttribute("type", "button"), this.disable(), e.setAttribute("aria-label", this.isPrevious ? "previous" : "next");
        var i = this.createSVG();
        e.appendChild(i), this.parent.on("select", function() { this.update() }.bind(this)), this.on("tap", this.onTap), this.on("pointerDown", function(t, e) { this.parent.childUIPointerDown(e) }.bind(this))
    }, s.prototype.activate = function() { this.bindTap(this.element), this.element.addEventListener("click", this), this.parent.element.appendChild(this.element) }, s.prototype.deactivate = function() { this.parent.element.removeChild(this.element), i.prototype.destroy.call(this), this.element.removeEventListener("click", this) }, s.prototype.createSVG = function() {
        var t = document.createElementNS(r, "svg");
        t.setAttribute("viewBox", "0 0 100 100");
        var e = document.createElementNS(r, "path"),
            i = o(this.parent.options.arrowShape);
        return e.setAttribute("d", i), e.setAttribute("class", "arrow"), this.isLeft || e.setAttribute("transform", "translate(100, 100) rotate(180) "), t.appendChild(e), t
    }, s.prototype.onTap = function() {
        if (this.isEnabled) {
            this.parent.uiChange();
            var t = this.isPrevious ? "previous" : "next";
            this.parent[t]()
        }
    }, s.prototype.handleEvent = n.handleEvent, s.prototype.onclick = function() {
        var t = document.activeElement;
        t && t == this.element && this.onTap()
    }, s.prototype.enable = function() { this.isEnabled || (this.element.disabled = !1, this.isEnabled = !0) }, s.prototype.disable = function() { this.isEnabled && (this.element.disabled = !0, this.isEnabled = !1) }, s.prototype.update = function() {
        var t = this.parent.slides;
        if (this.parent.options.wrapAround && t.length > 1) return void this.enable();
        var e = t.length ? t.length - 1 : 0,
            i = this.isPrevious ? 0 : e,
            n = this.parent.selectedIndex == i ? "disable" : "enable";
        this[n]()
    }, s.prototype.destroy = function() { this.deactivate() }, n.extend(e.defaults, { prevNextButtons: !0, arrowShape: { x0: 10, x1: 60, y1: 50, x2: 70, y2: 40, x3: 30 } }), e.createMethods.push("_createPrevNextButtons");
    var a = e.prototype;
    return a._createPrevNextButtons = function() { this.options.prevNextButtons && (this.prevButton = new s((-1), this), this.nextButton = new s(1, this), this.on("activate", this.activatePrevNextButtons)) }, a.activatePrevNextButtons = function() { this.prevButton.activate(), this.nextButton.activate(), this.on("deactivate", this.deactivatePrevNextButtons) }, a.deactivatePrevNextButtons = function() { this.prevButton.deactivate(), this.nextButton.deactivate(), this.off("deactivate", this.deactivatePrevNextButtons) }, e.PrevNextButton = s, e
}),
function(t, e) { "function" == typeof define && define.amd ? define("flickity/js/page-dots", ["./flickity", "tap-listener/tap-listener", "fizzy-ui-utils/utils"], function(i, n, s) { return e(t, i, n, s) }) : "object" == typeof module && module.exports ? module.exports = e(t, require("./flickity"), require("tap-listener"), require("fizzy-ui-utils")) : e(t, t.Flickity, t.TapListener, t.fizzyUIUtils) }(window, function(t, e, i, n) {
    function s(t) { this.parent = t, this._create() }
    s.prototype = new i, s.prototype._create = function() { this.holder = document.createElement("ol"), this.holder.className = "flickity-page-dots", this.dots = [], this.on("tap", this.onTap) }, s.prototype.activate = function() { this.setDots(), this.bindTap(this.holder), this.parent.element.appendChild(this.holder) }, s.prototype.deactivate = function() { this.parent.element.removeChild(this.holder), i.prototype.destroy.call(this) }, s.prototype.setDots = function() {
        var t = this.parent.slides.length - this.dots.length;
        t > 0 ? this.addDots(t) : t < 0 && this.removeDots(-t)
    }, s.prototype.addDots = function(t) {
        for (var e = document.createDocumentFragment(), i = []; t;) {
            var n = document.createElement("li");
            n.className = "dot", e.appendChild(n), i.push(n), t--
        }
        this.holder.appendChild(e), this.dots = this.dots.concat(i)
    }, s.prototype.removeDots = function(t) {
        var e = this.dots.splice(this.dots.length - t, t);
        e.forEach(function(t) { this.holder.removeChild(t) }, this)
    }, s.prototype.updateSelected = function() { this.selectedDot && (this.selectedDot.className = "dot"), this.dots.length && (this.selectedDot = this.dots[this.parent.selectedIndex], this.selectedDot.className = "dot is-selected") }, s.prototype.onTap = function(t) {
        var e = t.target;
        if ("LI" == e.nodeName) {
            this.parent.uiChange();
            var i = this.dots.indexOf(e);
            this.parent.select(i)
        }
    }, s.prototype.destroy = function() { this.deactivate() }, e.PageDots = s, n.extend(e.defaults, { pageDots: !0 }), e.createMethods.push("_createPageDots");
    var o = e.prototype;
    return o._createPageDots = function() { this.options.pageDots && (this.pageDots = new s(this), this.on("activate", this.activatePageDots), this.on("select", this.updateSelectedPageDots), this.on("cellChange", this.updatePageDots), this.on("resize", this.updatePageDots), this.on("deactivate", this.deactivatePageDots), this.pageDots.on("pointerDown", function(t, e) { this.childUIPointerDown(e) }.bind(this))) }, o.activatePageDots = function() { this.pageDots.activate() }, o.updateSelectedPageDots = function() { this.pageDots.updateSelected() }, o.updatePageDots = function() { this.pageDots.setDots() }, o.deactivatePageDots = function() { this.pageDots.deactivate() }, e.PageDots = s, e
}),
function(t, e) { "function" == typeof define && define.amd ? define("flickity/js/player", ["ev-emitter/ev-emitter", "fizzy-ui-utils/utils", "./flickity"], function(t, i, n) { return e(t, i, n) }) : "object" == typeof module && module.exports ? module.exports = e(require("ev-emitter"), require("fizzy-ui-utils"), require("./flickity")) : e(t.EvEmitter, t.fizzyUIUtils, t.Flickity) }(window, function(t, e, i) {
    function n(t) { this.parent = t, this.state = "stopped", o && (this.onVisibilityChange = function() { this.visibilityChange() }.bind(this), this.onVisibilityPlay = function() { this.visibilityPlay() }.bind(this)) }
    var s, o;
    "hidden" in document ? (s = "hidden", o = "visibilitychange") : "webkitHidden" in document && (s = "webkitHidden", o = "webkitvisibilitychange"), n.prototype = Object.create(t.prototype), n.prototype.play = function() {
        if ("playing" != this.state) {
            var t = document[s];
            if (o && t) return void document.addEventListener(o, this.onVisibilityPlay);
            this.state = "playing", o && document.addEventListener(o, this.onVisibilityChange), this.tick()
        }
    }, n.prototype.tick = function() {
        if ("playing" == this.state) {
            var t = this.parent.options.autoPlay;
            t = "number" == typeof t ? t : 3e3;
            var e = this;
            this.clear(), this.timeout = setTimeout(function() { e.parent.next(!0), e.tick() }, t)
        }
    }, n.prototype.stop = function() { this.state = "stopped", this.clear(), o && document.removeEventListener(o, this.onVisibilityChange) }, n.prototype.clear = function() { clearTimeout(this.timeout) }, n.prototype.pause = function() { "playing" == this.state && (this.state = "paused", this.clear()) }, n.prototype.unpause = function() { "paused" == this.state && this.play() }, n.prototype.visibilityChange = function() {
        var t = document[s];
        this[t ? "pause" : "unpause"]()
    }, n.prototype.visibilityPlay = function() { this.play(), document.removeEventListener(o, this.onVisibilityPlay) }, e.extend(i.defaults, { pauseAutoPlayOnHover: !0 }), i.createMethods.push("_createPlayer");
    var r = i.prototype;
    return r._createPlayer = function() { this.player = new n(this), this.on("activate", this.activatePlayer), this.on("uiChange", this.stopPlayer), this.on("pointerDown", this.stopPlayer), this.on("deactivate", this.deactivatePlayer) }, r.activatePlayer = function() { this.options.autoPlay && (this.player.play(), this.element.addEventListener("mouseenter", this)) }, r.playPlayer = function() { this.player.play() }, r.stopPlayer = function() { this.player.stop() }, r.pausePlayer = function() { this.player.pause() }, r.unpausePlayer = function() { this.player.unpause() }, r.deactivatePlayer = function() { this.player.stop(), this.element.removeEventListener("mouseenter", this) }, r.onmouseenter = function() { this.options.pauseAutoPlayOnHover && (this.player.pause(), this.element.addEventListener("mouseleave", this)) }, r.onmouseleave = function() { this.player.unpause(), this.element.removeEventListener("mouseleave", this) }, i.Player = n, i
}),
function(t, e) { "function" == typeof define && define.amd ? define("flickity/js/add-remove-cell", ["./flickity", "fizzy-ui-utils/utils"], function(i, n) { return e(t, i, n) }) : "object" == typeof module && module.exports ? module.exports = e(t, require("./flickity"), require("fizzy-ui-utils")) : e(t, t.Flickity, t.fizzyUIUtils) }(window, function(t, e, i) {
    function n(t) { var e = document.createDocumentFragment(); return t.forEach(function(t) { e.appendChild(t.element) }), e }
    var s = e.prototype;
    return s.insert = function(t, e) {
        var i = this._makeCells(t);
        if (i && i.length) {
            var s = this.cells.length;
            e = void 0 === e ? s : e;
            var o = n(i),
                r = e == s;
            if (r) this.slider.appendChild(o);
            else {
                var a = this.cells[e].element;
                this.slider.insertBefore(o, a)
            }
            if (0 === e) this.cells = i.concat(this.cells);
            else if (r) this.cells = this.cells.concat(i);
            else {
                var h = this.cells.splice(e, s - e);
                this.cells = this.cells.concat(i).concat(h)
            }
            this._sizeCells(i);
            var l = e > this.selectedIndex ? 0 : i.length;
            this._cellAddedRemoved(e, l)
        }
    }, s.append = function(t) { this.insert(t, this.cells.length) }, s.prepend = function(t) { this.insert(t, 0) }, s.remove = function(t) {
        var e, n, s = this.getCells(t),
            o = 0,
            r = s.length;
        for (e = 0; e < r; e++) {
            n = s[e];
            var a = this.cells.indexOf(n) < this.selectedIndex;
            o -= a ? 1 : 0
        }
        for (e = 0; e < r; e++) n = s[e], n.remove(), i.removeFrom(this.cells, n);
        s.length && this._cellAddedRemoved(0, o)
    }, s._cellAddedRemoved = function(t, e) { e = e || 0, this.selectedIndex += e, this.selectedIndex = Math.max(0, Math.min(this.slides.length - 1, this.selectedIndex)), this.cellChange(t, !0), this.emitEvent("cellAddedRemoved", [t, e]) }, s.cellSizeChange = function(t) {
        var e = this.getCell(t);
        if (e) {
            e.getSize();
            var i = this.cells.indexOf(e);
            this.cellChange(i)
        }
    }, s.cellChange = function(t, e) {
        var i = this.slideableWidth;
        if (this._positionCells(t), this._getWrapShiftCells(), this.setGallerySize(), this.emitEvent("cellChange", [t]), this.options.freeScroll) {
            var n = i - this.slideableWidth;
            this.x += n * this.cellAlign, this.positionSlider()
        } else e && this.positionSliderAtSelected(), this.select(this.selectedIndex)
    }, e
}),
function(t, e) { "function" == typeof define && define.amd ? define("flickity/js/lazyload", ["./flickity", "fizzy-ui-utils/utils"], function(i, n) { return e(t, i, n) }) : "object" == typeof module && module.exports ? module.exports = e(t, require("./flickity"), require("fizzy-ui-utils")) : e(t, t.Flickity, t.fizzyUIUtils) }(window, function(t, e, i) {
    "use strict";

    function n(t) { if ("IMG" == t.nodeName && t.getAttribute("data-flickity-lazyload")) return [t]; var e = t.querySelectorAll("img[data-flickity-lazyload]"); return i.makeArray(e) }

    function s(t, e) { this.img = t, this.flickity = e, this.load() }
    e.createMethods.push("_createLazyload");
    var o = e.prototype;
    return o._createLazyload = function() { this.on("select", this.lazyLoad) }, o.lazyLoad = function() {
        var t = this.options.lazyLoad;
        if (t) {
            var e = "number" == typeof t ? t : 0,
                i = this.getAdjacentCellElements(e),
                o = [];
            i.forEach(function(t) {
                var e = n(t);
                o = o.concat(e)
            }), o.forEach(function(t) { new s(t, this) }, this)
        }
    }, s.prototype.handleEvent = i.handleEvent, s.prototype.load = function() { this.img.addEventListener("load", this), this.img.addEventListener("error", this), this.img.src = this.img.getAttribute("data-flickity-lazyload"), this.img.removeAttribute("data-flickity-lazyload") }, s.prototype.onload = function(t) { this.complete(t, "flickity-lazyloaded") }, s.prototype.onerror = function(t) { this.complete(t, "flickity-lazyerror") }, s.prototype.complete = function(t, e) {
        this.img.removeEventListener("load", this), this.img.removeEventListener("error", this);
        var i = this.flickity.getParentCell(this.img),
            n = i && i.element;
        this.flickity.cellSizeChange(n), this.img.classList.add(e), this.flickity.dispatchEvent("lazyLoad", t, n)
    }, e.LazyLoader = s, e
}),
function(t, e) { "function" == typeof define && define.amd ? define("flickity/js/index", ["./flickity", "./drag", "./prev-next-button", "./page-dots", "./player", "./add-remove-cell", "./lazyload"], e) : "object" == typeof module && module.exports && (module.exports = e(require("./flickity"), require("./drag"), require("./prev-next-button"), require("./page-dots"), require("./player"), require("./add-remove-cell"), require("./lazyload"))) }(window, function(t) { return t }),
function(t, e) { "function" == typeof define && define.amd ? define("flickity-as-nav-for/as-nav-for", ["flickity/js/index", "fizzy-ui-utils/utils"], function(i, n, s) { return e(t, i, n, s) }) : "object" == typeof module && module.exports ? module.exports = e(t, require("flickity"), require("fizzy-ui-utils")) : t.Flickity = e(t, t.Flickity, t.fizzyUIUtils) }(window, function(t, e, i) {
    e.createMethods.push("_createAsNavFor");
    var n = e.prototype;
    return n._createAsNavFor = function() {
        this.on("activate", this.activateAsNavFor), this.on("deactivate", this.deactivateAsNavFor), this.on("destroy", this.destroyAsNavFor);
        var t = this.options.asNavFor;
        if (t) {
            var e = this;
            setTimeout(function() { e.setNavCompanion(t) })
        }
    }, n.setNavCompanion = function(t) {
        t = i.getQueryElement(t);
        var n = e.data(t);
        if (n && n != this) {
            this.navCompanion = n;
            var s = this;
            this.onNavCompanionSelect = function() { s.navCompanionSelect() }, n.on("select", this.onNavCompanionSelect), this.on("staticClick", this.onNavStaticClick), this.navCompanionSelect()
        }
    }, n.navCompanionSelect = function() {
        if (this.navCompanion) {
            var t = this.navCompanion.selectedCells[0],
                e = this.navCompanion.cells.indexOf(t);
            this.selectCell(e), this.removeNavSelectedElements(), e >= this.cells.length || (this.navSelectedElements = this.slides[this.selectedIndex].getCellElements(), this.changeNavSelectedClass("add"))
        }
    }, n.changeNavSelectedClass = function(t) { this.navSelectedElements.forEach(function(e) { e.classList[t]("is-nav-selected") }) }, n.activateAsNavFor = function() { this.navCompanionSelect() }, n.removeNavSelectedElements = function() { this.navSelectedElements && (this.changeNavSelectedClass("remove"), delete this.navSelectedElements) }, n.onNavStaticClick = function(t, e, i, n) { "number" == typeof n && this.navCompanion.selectCell(n) }, n.deactivateAsNavFor = function() { this.removeNavSelectedElements() }, n.destroyAsNavFor = function() { this.navCompanion && (this.navCompanion.off("select", this.onNavCompanionSelect), this.off("staticClick", this.onNavStaticClick), delete this.navCompanion) }, e
}),
function(t, e) { "use strict"; "function" == typeof define && define.amd ? define("imagesloaded/imagesloaded", ["ev-emitter/ev-emitter"], function(i) { return e(t, i) }) : "object" == typeof module && module.exports ? module.exports = e(t, require("ev-emitter")) : t.imagesLoaded = e(t, t.EvEmitter) }(window, function(t, e) {
    function i(t, e) { for (var i in e) t[i] = e[i]; return t }

    function n(t) {
        var e = [];
        if (Array.isArray(t)) e = t;
        else if ("number" == typeof t.length)
            for (var i = 0; i < t.length; i++) e.push(t[i]);
        else e.push(t);
        return e
    }

    function s(t, e, o) { return this instanceof s ? ("string" == typeof t && (t = document.querySelectorAll(t)), this.elements = n(t), this.options = i({}, this.options), "function" == typeof e ? o = e : i(this.options, e), o && this.on("always", o), this.getImages(), a && (this.jqDeferred = new a.Deferred), void setTimeout(function() { this.check() }.bind(this))) : new s(t, e, o) }

    function o(t) { this.img = t }

    function r(t, e) { this.url = t, this.element = e, this.img = new Image }
    var a = t.jQuery,
        h = t.console;
    s.prototype = Object.create(e.prototype), s.prototype.options = {}, s.prototype.getImages = function() { this.images = [], this.elements.forEach(this.addElementImages, this) }, s.prototype.addElementImages = function(t) {
        "IMG" == t.nodeName && this.addImage(t), this.options.background === !0 && this.addElementBackgroundImages(t);
        var e = t.nodeType;
        if (e && l[e]) {
            for (var i = t.querySelectorAll("img"), n = 0; n < i.length; n++) {
                var s = i[n];
                this.addImage(s)
            }
            if ("string" == typeof this.options.background) {
                var o = t.querySelectorAll(this.options.background);
                for (n = 0; n < o.length; n++) {
                    var r = o[n];
                    this.addElementBackgroundImages(r)
                }
            }
        }
    };
    var l = { 1: !0, 9: !0, 11: !0 };
    return s.prototype.addElementBackgroundImages = function(t) {
        var e = getComputedStyle(t);
        if (e)
            for (var i = /url\((['"])?(.*?)\1\)/gi, n = i.exec(e.backgroundImage); null !== n;) {
                var s = n && n[2];
                s && this.addBackground(s, t), n = i.exec(e.backgroundImage)
            }
    }, s.prototype.addImage = function(t) {
        var e = new o(t);
        this.images.push(e)
    }, s.prototype.addBackground = function(t, e) {
        var i = new r(t, e);
        this.images.push(i)
    }, s.prototype.check = function() {
        function t(t, i, n) { setTimeout(function() { e.progress(t, i, n) }) }
        var e = this;
        return this.progressedCount = 0, this.hasAnyBroken = !1, this.images.length ? void this.images.forEach(function(e) { e.once("progress", t), e.check() }) : void this.complete()
    }, s.prototype.progress = function(t, e, i) { this.progressedCount++, this.hasAnyBroken = this.hasAnyBroken || !t.isLoaded, this.emitEvent("progress", [this, t, e]), this.jqDeferred && this.jqDeferred.notify && this.jqDeferred.notify(this, t), this.progressedCount == this.images.length && this.complete(), this.options.debug && h && h.log("progress: " + i, t, e) }, s.prototype.complete = function() {
        var t = this.hasAnyBroken ? "fail" : "done";
        if (this.isComplete = !0, this.emitEvent(t, [this]), this.emitEvent("always", [this]), this.jqDeferred) {
            var e = this.hasAnyBroken ? "reject" : "resolve";
            this.jqDeferred[e](this)
        }
    }, o.prototype = Object.create(e.prototype), o.prototype.check = function() { var t = this.getIsImageComplete(); return t ? void this.confirm(0 !== this.img.naturalWidth, "naturalWidth") : (this.proxyImage = new Image, this.proxyImage.addEventListener("load", this), this.proxyImage.addEventListener("error", this), this.img.addEventListener("load", this), this.img.addEventListener("error", this), void(this.proxyImage.src = this.img.src)) }, o.prototype.getIsImageComplete = function() { return this.img.complete && void 0 !== this.img.naturalWidth }, o.prototype.confirm = function(t, e) { this.isLoaded = t, this.emitEvent("progress", [this, this.img, e]) }, o.prototype.handleEvent = function(t) {
        var e = "on" + t.type;
        this[e] && this[e](t)
    }, o.prototype.onload = function() { this.confirm(!0, "onload"), this.unbindEvents() }, o.prototype.onerror = function() { this.confirm(!1, "onerror"), this.unbindEvents() }, o.prototype.unbindEvents = function() { this.proxyImage.removeEventListener("load", this), this.proxyImage.removeEventListener("error", this), this.img.removeEventListener("load", this), this.img.removeEventListener("error", this) }, r.prototype = Object.create(o.prototype), r.prototype.check = function() {
        this.img.addEventListener("load", this), this.img.addEventListener("error", this), this.img.src = this.url;
        var t = this.getIsImageComplete();
        t && (this.confirm(0 !== this.img.naturalWidth, "naturalWidth"), this.unbindEvents())
    }, r.prototype.unbindEvents = function() { this.img.removeEventListener("load", this), this.img.removeEventListener("error", this) }, r.prototype.confirm = function(t, e) { this.isLoaded = t, this.emitEvent("progress", [this, this.element, e]) }, s.makeJQueryPlugin = function(e) { e = e || t.jQuery, e && (a = e, a.fn.imagesLoaded = function(t, e) { var i = new s(this, t, e); return i.jqDeferred.promise(a(this)) }) }, s.makeJQueryPlugin(), s
}),
function(t, e) { "function" == typeof define && define.amd ? define(["flickity/js/index", "imagesloaded/imagesloaded"], function(i, n) { return e(t, i, n) }) : "object" == typeof module && module.exports ? module.exports = e(t, require("flickity"), require("imagesloaded")) : t.Flickity = e(t, t.Flickity, t.imagesLoaded) }(window, function(t, e, i) {
    "use strict";
    e.createMethods.push("_createImagesLoaded");
    var n = e.prototype;
    return n._createImagesLoaded = function() { this.on("activate", this.imagesLoaded) }, n.imagesLoaded = function() {
        function t(t, i) {
            var n = e.getParentCell(i.img);
            e.cellSizeChange(n && n.element), e.options.freeScroll || e.positionSliderAtSelected()
        }
        if (this.options.imagesLoaded) {
            var e = this;
            i(this.slider).on("progress", t)
        }
    }, e
});

/*! Granim v1.0.5 - https://sarcadass.github.io/granim.js */
! function t(e, s, i) {
    function n(a, r) {
        if (!s[a]) {
            if (!e[a]) { var h = "function" == typeof require && require; if (!r && h) return h(a, !0); if (o) return o(a, !0); var c = new Error("Cannot find module '" + a + "'"); throw c.code = "MODULE_NOT_FOUND", c }
            var l = s[a] = { exports: {} };
            e[a][0].call(l.exports, function(t) { var s = e[a][1][t]; return n(s ? s : t) }, l, l.exports, t, e, s, i)
        }
        return s[a].exports
    }
    for (var o = "function" == typeof require && require, a = 0; a < i.length; a++) n(i[a]);
    return n
}({
    1: [function(t, e, s) {
        "use strict";

        function i(t) { this.canvas = document.querySelector(t.element), this.x1 = 0, this.y1 = 0, this.name = t.name || !1, this.elToSetClassOn = t.elToSetClassOn || "body", this.direction = t.direction || "diagonal", this.isPausedWhenNotInView = t.isPausedWhenNotInView || !1, this.opacity = t.opacity, this.states = t.states, this.stateTransitionSpeed = t.stateTransitionSpeed || 1e3, this.previousTimeStamp = null, this.progress = 0, this.isPaused = !1, this.isPausedBecauseNotInView = !1, this.iscurrentColorsSet = !1, this.context = this.canvas.getContext("2d"), this.channels = {}, this.channelsIndex = 0, this.activeState = t.defaultStateName || "default-state", this.isChangingState = !1, this.activeColors = [], this.activeColorDiff = [], this.activetransitionSpeed = null, this.currentColors = [], this.eventPolyfill(), this.events = { start: new CustomEvent("granim:start"), end: new CustomEvent("granim:end"), gradientChange: function(t) { return new CustomEvent("granim:gradientChange", { detail: { isLooping: t.isLooping, colorsFrom: t.colorsFrom, colorsTo: t.colorsTo, activeState: t.activeState }, bubbles: !1, cancelable: !1 }) } }, this.callbacks = { onStart: "function" == typeof t.onStart && t.onStart, onGradientChange: "function" == typeof t.onGradientChange && t.onGradientChange, onEnd: "function" == typeof t.onEnd && t.onEnd }, this.getDimensions(), this.canvas.setAttribute("width", this.x1), this.canvas.setAttribute("height", this.y1), this.setColors(), this.refreshColors(), window.addEventListener("resize", this.onResize.bind(this)), this.isPausedWhenNotInView ? this.pauseWhenNotInView() : this.animation = requestAnimationFrame(this.animateColors.bind(this)), this.callbacks.onStart && this.callbacks.onStart(), this.canvas.dispatchEvent(this.events.start) }
        i.prototype.setColors = t("./setColors.js"), i.prototype.eventPolyfill = t("./eventPolyfill.js"), i.prototype.colorDiff = t("./colorDiff.js"), i.prototype.hexToRgb = t("./hexToRgb.js"), i.prototype.setDirection = t("./setDirection.js"), i.prototype.makeGradient = t("./makeGradient.js"), i.prototype.getDimensions = t("./getDimensions.js"), i.prototype.animateColors = t("./animateColors.js"), i.prototype.getLightness = t("./getLightness.js"), i.prototype.refreshColors = t("./refreshColors.js"), i.prototype.changeState = t("./changeState.js"), i.prototype.pause = t("./pause.js"), i.prototype.play = t("./play.js"), i.prototype.clear = t("./clear.js"), i.prototype.getCurrentColors = t("./getCurrentColors.js"), i.prototype.pauseWhenNotInView = t("./pauseWhenNotInView.js"), i.prototype.onResize = t("./onResize.js"), e.exports = i
    }, { "./animateColors.js": 2, "./changeState.js": 3, "./clear.js": 4, "./colorDiff.js": 5, "./eventPolyfill.js": 6, "./getCurrentColors.js": 7, "./getDimensions.js": 8, "./getLightness.js": 9, "./hexToRgb.js": 10, "./makeGradient.js": 11, "./onResize.js": 12, "./pause.js": 13, "./pauseWhenNotInView.js": 14, "./play.js": 15, "./refreshColors.js": 16, "./setColors.js": 17, "./setDirection.js": 18 }],
    2: [function(t, e, s) {
        "use strict";
        e.exports = function(t) {
            var e, s, i, n = t - this.previousTimeStamp > 100,
                o = void 0 === this.states[this.activeState].loop || this.states[this.activeState].loop;
            (null === this.previousTimeStamp || n) && (this.previousTimeStamp = t), this.progress = this.progress + (t - this.previousTimeStamp), e = (this.progress / this.activetransitionSpeed * 100).toFixed(2), this.previousTimeStamp = t, this.refreshColors(e), e < 100 ? this.animation = requestAnimationFrame(this.animateColors.bind(this)) : this.channelsIndex < this.states[this.activeState].gradients.length - 2 || o ? (this.isChangingState && (this.activetransitionSpeed = this.states[this.activeState].transitionSpeed || 5e3), this.previousTimeStamp = null, this.progress = 0, this.channelsIndex++, s = !1, this.channelsIndex === this.states[this.activeState].gradients.length - 1 ? s = !0 : this.channelsIndex === this.states[this.activeState].gradients.length && (this.channelsIndex = 0), i = void 0 === this.states[this.activeState].gradients[this.channelsIndex + 1] ? this.states[this.activeState].gradients[0] : this.states[this.activeState].gradients[this.channelsIndex + 1], this.setColors(), this.animation = requestAnimationFrame(this.animateColors.bind(this)), this.callbacks.onGradientChange && this.callbacks.onGradientChange({ isLooping: s, colorsFrom: this.states[this.activeState].gradients[this.channelsIndex], colorsTo: i, activeState: this.activeState }), this.canvas.dispatchEvent(this.events.gradientChange({ isLooping: s, colorsFrom: this.states[this.activeState].gradients[this.channelsIndex], colorsTo: i, activeState: this.activeState }))) : (cancelAnimationFrame(this.animation), this.callbacks.onEnd && this.callbacks.onEnd(), this.canvas.dispatchEvent(new CustomEvent("granim:end")))
        }
    }, {}],
    3: [function(t, e, s) {
        "use strict";
        e.exports = function(t) {
            var e, s, i = this;
            this.activeState !== t && (this.isPaused || (this.isPaused = !0, this.pause()), this.channelsIndex = -1, this.activetransitionSpeed = this.stateTransitionSpeed, this.activeColorDiff = [], this.activeColors = this.getCurrentColors(), this.progress = 0, this.previousTimeStamp = null, this.isChangingState = !0, this.states[t].gradients[0].forEach(function(n, o, a) { e = i.hexToRgb(i.states[t].gradients[0][o]), s = i.colorDiff(i.activeColors[o], e), i.activeColorDiff.push(s) }), this.activeState = t, this.play())
        }
    }, {}],
    4: [function(t, e, s) {
        "use strict";
        e.exports = function() { cancelAnimationFrame(this.animation), this.context.clearRect(0, 0, this.x1, this.y1) }
    }, {}],
    5: [function(t, e, s) {
        "use strict";
        e.exports = function(t, e) { var s, i = []; for (s = 0; s < 3; s++) i.push(e[s] - t[s]); return i }
    }, {}],
    6: [function(t, e, s) {
        "use strict";
        e.exports = function() {
            function t(t, e) { e = e || { bubbles: !1, cancelable: !1, detail: void 0 }; var s = document.createEvent("CustomEvent"); return s.initCustomEvent(t, e.bubbles, e.cancelable, e.detail), s }
            "function" != typeof window.CustomEvent && (t.prototype = window.Event.prototype, window.CustomEvent = t)
        }
    }, {}],
    7: [function(t, e, s) {
        "use strict";
        e.exports = function() { var t, e = []; return this.currentColors.forEach(function(s, i, n) { for (e.push([]), t = 0; t < 3; t++) e[i].push(s[t]) }), e }
    }, {}],
    8: [function(t, e, s) {
        "use strict";
        e.exports = function() { this.x1 = this.canvas.offsetWidth, this.y1 = this.canvas.offsetHeight }
    }, {}],
    9: [function(t, e, s) {
        "use strict";
        e.exports = function() {
            var t, e = this.getCurrentColors(),
                s = [],
                i = null;
            return e.forEach(function(t, e, i) { s.push(Math.max(t[0], t[1], t[2])) }), s.forEach(function(e, n, o) { i = null === i ? e : i + e, n === s.length - 1 && (t = Math.round(i / (n + 1))) }), t >= 128 ? "light" : "dark"
        }
    }, {}],
    10: [function(t, e, s) {
        "use strict";
        e.exports = function(t) {
            var e = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
            t = t.replace(e, function(t, e, s, i) { return e + e + s + s + i + i });
            var s = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(t);
            return s ? [parseInt(s[1], 16), parseInt(s[2], 16), parseInt(s[3], 16)] : null
        }
    }, {}],
    11: [function(t, e, s) {
        "use strict";
        e.exports = function() {
            var t, e, s = this.setDirection(),
                i = document.querySelector(this.elToSetClassOn).classList;
            for (this.context.clearRect(0, 0, this.x1, this.y1), t = 0; t < this.currentColors.length; t++) e = t ? (1 / (this.currentColors.length - 1) * t).toFixed(2) : 0, s.addColorStop(e, "rgba(" + this.currentColors[t][0] + ", " + this.currentColors[t][1] + ", " + this.currentColors[t][2] + ", " + this.opacity[t] + ")");
            this.name && ("light" === this.getLightness() ? (i.remove(this.name + "-dark"), i.add(this.name + "-light")) : (i.remove(this.name + "-light"), i.add(this.name + "-dark"))), this.context.fillStyle = s, this.context.fillRect(0, 0, this.x1, this.y1)
        }
    }, {}],
    12: [function(t, e, s) {
        "use strict";
        e.exports = function() { this.getDimensions(), this.canvas.setAttribute("width", this.x1), this.canvas.setAttribute("height", this.y1), this.refreshColors() }
    }, {}],
    13: [function(t, e, s) {
        "use strict";
        e.exports = function(t) {
            var e = "isPausedBecauseNotInView" === t;
            e || (this.isPaused = !0), cancelAnimationFrame(this.animation)
        }
    }, {}],
    14: [function(t, e, s) {
        "use strict";
        e.exports = function() {
            function t(t) {
                e && clearTimeout(e), e = setTimeout(function() {
                    var e = s.canvas.getBoundingClientRect(),
                        i = e.bottom < 0 || e.right < 0 || e.left > window.innerWidth || e.top > window.innerHeight;
                    i ? s.isPaused || s.isPausedBecauseNotInView || (s.isPausedBecauseNotInView = !0, s.pause("isPausedBecauseNotInView")) : s.isPaused && t !== !0 || (s.isPausedBecauseNotInView = !1, s.play("isPausedBecauseNotInView"))
                }, 300)
            }
            var e, s = this;
            window.addEventListener("scroll", t), t(!0)
        }
    }, {}],
    15: [function(t, e, s) {
        "use strict";
        e.exports = function(t) {
            var e = "isPausedBecauseNotInView" === t;
            e || (this.isPaused = !1), this.animation = requestAnimationFrame(this.animateColors.bind(this))
        }
    }, {}],
    16: [function(t, e, s) {
        "use strict";
        e.exports = function(t) {
            var e, s, i = this;
            this.activeColors.forEach(function(n, o, a) { for (s = 0; s < 3; s++) e = i.activeColors[o][s] + Math.ceil(i.activeColorDiff[o][s] / 100 * t), e <= 255 && e >= 0 && (i.currentColors[o][s] = e) }), this.makeGradient()
        }
    }, {}],
    17: [function(t, e, s) {
        "use strict";
        e.exports = function() {
            var t, e, s = this;
            return this.channels[this.activeState] || (this.channels[this.activeState] = []), void 0 !== this.channels[this.activeState][this.channelsIndex] ? (this.activeColors = this.channels[this.activeState][this.channelsIndex].colors, void(this.activeColorDiff = this.channels[this.activeState][this.channelsIndex].colorsDiff)) : (this.channels[this.activeState].push([{}]), this.channels[this.activeState][this.channelsIndex].colors = [], this.channels[this.activeState][this.channelsIndex].colorsDiff = [], this.activeColors = [], this.activeColorDiff = [], this.states[this.activeState].gradients[this.channelsIndex].forEach(function(i, n, o) {
                var a = s.hexToRgb(i),
                    r = s.channels[s.activeState];
                r[s.channelsIndex].colors.push(a), s.activeColors.push(a), s.iscurrentColorsSet || s.currentColors.push(s.hexToRgb(i)), s.channelsIndex === s.states[s.activeState].gradients.length - 1 ? t = s.colorDiff(r[s.channelsIndex].colors[n], r[0].colors[n]) : (e = s.hexToRgb(s.states[s.activeState].gradients[s.channelsIndex + 1][n]), t = s.colorDiff(r[s.channelsIndex].colors[n], e)), r[s.channelsIndex].colorsDiff.push(t), s.activeColorDiff.push(t)
            }), this.activetransitionSpeed = this.states[this.activeState].transitionSpeed || 5e3, void(this.iscurrentColorsSet = !0))
        }
    }, {}],
    18: [function(t, e, s) {
        "use strict";
        e.exports = function() {
            var t = this.context;
            switch (this.direction) {
                default:
                    case "diagonal":
                    return t.createLinearGradient(0, 0, this.x1, this.y1);
                case "left-right":
                        return t.createLinearGradient(0, 0, this.x1, 0);
                case "top-bottom":
                        return t.createLinearGradient(this.x1 / 2, 0, this.x1 / 2, this.y1);
                case "radial":
                        return t.createRadialGradient(this.x1 / 2, this.y1 / 2, this.x1 / 2, this.x1 / 2, this.y1 / 2, 0)
            }
        }
    }, {}],
    19: [function(t, e, s) { window.Granim = t("./lib/Granim.js") }, { "./lib/Granim.js": 1 }]
}, {}, [19]);


! function(a, b) { "function" == typeof define && define.amd ? define([], b(a)) : "object" == typeof exports ? module.exports = b(a) : a.smoothScroll = b(a) }("undefined" != typeof global ? global : this.window || this.global, function(a) {
    "use strict";
    var d, e, f, g, h, i, j, b = {},
        c = "querySelector" in document && "addEventListener" in a,
        k = { selector: "[data-scroll]", selectorHeader: null, speed: 500, easing: "easeInOutCubic", offset: 0, callback: function() {} },
        l = function() {
            var a = {},
                b = !1,
                c = 0,
                d = arguments.length;
            "[object Boolean]" === Object.prototype.toString.call(arguments[0]) && (b = arguments[0], c++);
            for (var e = function(c) { for (var d in c) Object.prototype.hasOwnProperty.call(c, d) && (b && "[object Object]" === Object.prototype.toString.call(c[d]) ? a[d] = l(!0, a[d], c[d]) : a[d] = c[d]) }; c < d; c++) {
                var f = arguments[c];
                e(f)
            }
            return a
        },
        m = function(a) { return Math.max(a.scrollHeight, a.offsetHeight, a.clientHeight) },
        n = function(a, b) {
            var e, f, c = b.charAt(0),
                d = "classList" in document.documentElement;
            for ("[" === c && (b = b.substr(1, b.length - 2), e = b.split("="), e.length > 1 && (f = !0, e[1] = e[1].replace(/"/g, "").replace(/'/g, ""))); a && a !== document && 1 === a.nodeType; a = a.parentNode) {
                if ("." === c)
                    if (d) { if (a.classList.contains(b.substr(1))) return a } else if (new RegExp("(^|\\s)" + b.substr(1) + "(\\s|$)").test(a.className)) return a;
                if ("#" === c && a.id === b.substr(1)) return a;
                if ("[" === c && a.hasAttribute(e[0])) { if (!f) return a; if (a.getAttribute(e[0]) === e[1]) return a }
                if (a.tagName.toLowerCase() === b) return a
            }
            return null
        },
        o = function(a) {
            "#" === a.charAt(0) && (a = a.substr(1));
            for (var e, b = String(a), c = b.length, d = -1, f = "", g = b.charCodeAt(0); ++d < c;) {
                if (e = b.charCodeAt(d), 0 === e) throw new InvalidCharacterError("Invalid character: the input contains U+0000.");
                f += e >= 1 && e <= 31 || 127 == e || 0 === d && e >= 48 && e <= 57 || 1 === d && e >= 48 && e <= 57 && 45 === g ? "\\" + e.toString(16) + " " : e >= 128 || 45 === e || 95 === e || e >= 48 && e <= 57 || e >= 65 && e <= 90 || e >= 97 && e <= 122 ? b.charAt(d) : "\\" + b.charAt(d)
            }
            return "#" + f
        },
        p = function(a, b) { var c; return "easeInQuad" === a && (c = b * b), "easeOutQuad" === a && (c = b * (2 - b)), "easeInOutQuad" === a && (c = b < .5 ? 2 * b * b : -1 + (4 - 2 * b) * b), "easeInCubic" === a && (c = b * b * b), "easeOutCubic" === a && (c = --b * b * b + 1), "easeInOutCubic" === a && (c = b < .5 ? 4 * b * b * b : (b - 1) * (2 * b - 2) * (2 * b - 2) + 1), "easeInQuart" === a && (c = b * b * b * b), "easeOutQuart" === a && (c = 1 - --b * b * b * b), "easeInOutQuart" === a && (c = b < .5 ? 8 * b * b * b * b : 1 - 8 * --b * b * b * b), "easeInQuint" === a && (c = b * b * b * b * b), "easeOutQuint" === a && (c = 1 + --b * b * b * b * b), "easeInOutQuint" === a && (c = b < .5 ? 16 * b * b * b * b * b : 1 + 16 * --b * b * b * b * b), c || b },
        q = function(a, b, c) {
            var d = 0;
            if (a.offsetParent)
                do d += a.offsetTop, a = a.offsetParent; while (a);
            return d = Math.max(d - b - c, 0), Math.min(d, s() - r())
        },
        r = function() { return Math.max(document.documentElement.clientHeight, a.innerHeight || 0) },
        s = function() { return Math.max(document.body.scrollHeight, document.documentElement.scrollHeight, document.body.offsetHeight, document.documentElement.offsetHeight, document.body.clientHeight, document.documentElement.clientHeight) },
        t = function(a) { return a && "object" == typeof JSON && "function" == typeof JSON.parse ? JSON.parse(a) : {} },
        u = function(a) { return a ? m(a) + a.offsetTop : 0 },
        v = function(b, c, d) { d || (b.focus(), document.activeElement.id !== b.id && (b.setAttribute("tabindex", "-1"), b.focus(), b.style.outline = "none"), a.scrollTo(0, c)) };
    b.animateScroll = function(b, c, e) {
        var f = t(c ? c.getAttribute("data-options") : null),
            i = l(d || k, e || {}, f),
            m = "[object Number]" === Object.prototype.toString.call(b),
            n = m || !b.tagName ? null : b;
        if (m || n) {
            var o = a.pageYOffset;
            i.selectorHeader && !g && (g = document.querySelector(i.selectorHeader)), h || (h = u(g));
            var z, A, r = m ? b : q(n, h, parseInt(i.offset, 10)),
                w = r - o,
                x = s(),
                y = 0,
                B = function(d, e, f) {
                    var g = a.pageYOffset;
                    (d == e || g == e || a.innerHeight + g >= x) && (clearInterval(f), v(b, e, m), i.callback(b, c))
                },
                C = function() { y += 16, z = y / parseInt(i.speed, 10), z = z > 1 ? 1 : z, A = o + w * p(i.easing, z), a.scrollTo(0, Math.floor(A)), B(A, r, j) },
                D = function() { clearInterval(j), j = setInterval(C, 16) };
            0 === a.pageYOffset && a.scrollTo(0, 0), D()
        }
    };
    var w = function(c) {
            a.location.hash;
            e && (e.id = e.getAttribute("data-scroll-id"), b.animateScroll(e, f), e = null, f = null)
        },
        x = function(b) {
            if (0 === b.button && !b.metaKey && !b.ctrlKey && (f = n(b.target, d.selector), f && "a" === f.tagName.toLowerCase() && f.hostname === a.location.hostname && f.pathname === a.location.pathname && /#/.test(f.href))) {
                var c = o(f.hash);
                if ("#" === c) { b.preventDefault(), e = document.body; var g = e.id ? e.id : "smooth-scroll-top"; return e.setAttribute("data-scroll-id", g), e.id = "", void(a.location.hash.substring(1) === g ? w() : a.location.hash = g) }
                e = document.querySelector(c), e && (e.setAttribute("data-scroll-id", e.id), e.id = "", f.hash === a.location.hash && (b.preventDefault(), w()))
            }
        },
        y = function(a) { i || (i = setTimeout(function() { i = null, h = u(g) }, 66)) };
    return b.destroy = function() { d && (document.removeEventListener("click", x, !1), a.removeEventListener("resize", y, !1), d = null, e = null, f = null, g = null, h = null, i = null, j = null) }, b.init = function(e) { c && (b.destroy(), d = l(k, e || {}), g = d.selectorHeader ? document.querySelector(d.selectorHeader) : null, h = u(g), document.addEventListener("click", x, !1), a.addEventListener("hashchange", w, !1), g && a.addEventListener("resize", y, !1)) }, b
});

var mr = function(t, e, a) {
    "use strict";

    function o(e) { e = "undefined" == typeof e ? t : e, r.documentReady.concat(r.documentReadyDeferred).forEach(function(t) { t(e) }), i.status.documentReadyRan = !0, i.status.windowLoadPending && n(i.setContext()) }

    function n(e) { i.status.documentReadyRan ? (i.status.windowLoadPending = !1, e = "object" == typeof e ? t : e, r.windowLoad.concat(r.windowLoadDeferred).forEach(function(t) { t(e) })) : i.status.windowLoadPending = !0 }
    var i = {},
        r = { documentReady: [], documentReadyDeferred: [], windowLoad: [], windowLoadDeferred: [] };
    return i.status = { documentReadyRan: !1, windowLoadPending: !1 }, t(a).ready(o), t(e).on("load", n), i.setContext = function(e) { var a = t; return "undefined" != typeof e ? function(a) { return t(e).find(a) } : a }, i.components = r, i.documentReady = o, i.windowLoad = n, i
}(jQuery, window, document);
mr = function(t, e, a, o) {
    "use strict";
    return t.util = {}, t.util.requestAnimationFrame = a.requestAnimationFrame || a.mozRequestAnimationFrame || a.webkitRequestAnimationFrame || a.msRequestAnimationFrame, t.util.documentReady = function(t) {
        var e = new Date,
            a = e.getFullYear();
        t(".update-year").text(a)
    }, t.util.windowLoad = function(t) {
        t("[data-delay-src]").each(function() {
            var e = t(this);
            e.attr("src", e.attr("data-delay-src")), e.removeAttr("data-delay-src")
        })
    }, t.util.getURLParameter = function(t) { return decodeURIComponent((new RegExp("[?|&]" + t + "=([^&;]+?)(&|#|;|$)").exec(location.search) || [void 0, ""])[1].replace(/\+/g, "%20")) || null }, t.util.capitaliseFirstLetter = function(t) { return t.charAt(0).toUpperCase() + t.slice(1) }, t.util.slugify = function(t, e) { return "undefined" != typeof e ? t.replace(/ +/g, "") : t.toLowerCase().replace(/[\~\!\@\#\$\%\^\&\*\(\)\-\_\=\+\]\[\}\{\'\"\;\\\:\?\/\>\<\.\,]+/g, "").replace(/ +/g, "-") }, t.util.sortChildrenByText = function(t, a) {
        var o = e(t),
            n = o.children().get(),
            i = -1,
            r = 1;
        "undefined" != typeof a && (i = 1, r = -1), n.sort(function(t, a) {
            var o = e(t).text(),
                n = e(a).text();
            return n > o ? i : o > n ? r : 0
        }), o.empty(), e(n).each(function(t, e) { o.append(e) })
    }, t.util.idleSrc = function(t, a) {
        a = "undefined" != typeof a ? a : "";
        var o = t.is(a + "[src]") ? t : t.find(a + "[src]");
        o.each(function(t, a) {
            a = e(a);
            var o = a.attr("src"),
                n = a.attr("data-src");
            "undefined" == typeof n && a.attr("data-src", o), a.attr("src", "")
        })
    }, t.util.activateIdleSrc = function(t, a) {
        a = "undefined" != typeof a ? a : "";
        var o = t.is(a + "[data-src]") ? t : t.find(a + "[data-src]");
        o.each(function(t, a) {
            a = e(a);
            var o = a.attr("data-src");
            a.attr("src", o)
        })
    }, t.util.pauseVideo = function(t) {
        var a = t.is("video") ? t : t.find("video");
        a.each(function(t, a) {
            var o = e(a).get(0);
            o.pause()
        })
    }, t.util.parsePixels = function(t) { var o, n = e(a).height(); return /^[1-9]{1}[0-9]*[p][x]$/.test(t) ? parseInt(t.replace("px", ""), 10) : /^[1-9]{1}[0-9]*[v][h]$/.test(t) ? (o = parseInt(t.replace("vh", ""), 10), n * (o / 100)) : -1 }, t.components.documentReady.push(t.util.documentReady), t.components.windowLoad.push(t.util.windowLoad), t
}(mr, jQuery, window, document), mr = function(t, e, a, o) { "use strict"; return t.window = {}, t.window.height = e(a).height(), t.window.width = e(a).width(), e(a).on("resize", function() { t.window.height = e(a).height(), t.window.width = e(a).width() }), t }(mr, jQuery, window, document), mr = function(t, e, a, o) {
    "use strict";
    t.scroll = {};
    var n = a.requestAnimationFrame || a.mozRequestAnimationFrame || a.webkitRequestAnimationFrame || a.msRequestAnimationFrame;
    t.scroll.listeners = [], t.scroll.busy = !1, t.scroll.y = 0, t.scroll.x = 0;
    var i = function(e) { jQuery(a).off("scroll.mr"), jQuery(a).on("scroll.mr", function(e) { t.scroll.busy === !1 && (t.scroll.busy = !0, n(function(e) { t.scroll.update(e) })), e.stopPropagation && e.stopPropagation() }) };
    return t.scroll.update = function(e) {
        var o = "undefined" != typeof a.mr_parallax ? !0 : !1;
        if (t.scroll.y = o ? mr_parallax.mr_getScrollPosition() : a.pageYOffset, t.scroll.busy = !1, o && mr_parallax.mr_parallaxBackground(), t.scroll.listeners.length > 0)
            for (var n = 0, i = t.scroll.listeners.length; i > n; n++) t.scroll.listeners[n](e)
    }, t.scroll.documentReady = i, t.components.documentReady.push(i), t
}(mr, jQuery, window, document), mr = function(t, e, a, o) {
    "use strict";
    t.scroll.classModifiers = {}, t.scroll.classModifiers.rules = [], t.scroll.classModifiers.parseScrollRules = function(e) {
        var a = e.attr("data-scroll-class"),
            o = a.split(";");
        return o.forEach(function(a) {
            var o, n, i = {};
            if (o = a.replace(/\s/g, "").split(":"), 2 === o.length) {
                if (n = t.util.parsePixels(o[0]), !(n > -1)) return !1;
                if (i.scrollPoint = n, !o[1].length) return !1;
                var r = o[1];
                i.toggleClass = r, i.hasClass = e.hasClass(r), i.element = e.get(0), t.scroll.classModifiers.rules.push(i)
            }
        }), t.scroll.classModifiers.rules.length ? !0 : !1
    }, t.scroll.classModifiers.update = function(e) { for (var a, o = t.scroll.y, n = t.scroll.classModifiers.rules, i = n.length; i--;) a = n[i], o > a.scrollPoint && !a.hasClass && (a.element.classList.add(a.toggleClass), a.hasClass = t.scroll.classModifiers.rules[i].hasClass = !0), o < a.scrollPoint && a.hasClass && (a.element.classList.remove(a.toggleClass), a.hasClass = t.scroll.classModifiers.rules[i].hasClass = !1) };
    var n = function() {
            e('.main-container [data-scroll-class*="pos-fixed"]').each(function() {
                var t = e(this);
                t.css("max-width", t.parent().outerWidth()), t.parent().css("min-height", t.outerHeight())
            })
        },
        i = function(e) {
            e("[data-scroll-class]").each(function() {
                var a = e(this);
                t.scroll.classModifiers.parseScrollRules(a) || console.log("Error parsing scroll rules on: " + a)
            }), n(), e(a).on("resize", n), t.scroll.classModifiers.rules.length && t.scroll.listeners.push(t.scroll.classModifiers.update)
        };
    return t.components.documentReady.push(i), t.scroll.classModifiers.documentReady = i, t
}(mr, jQuery, window, document), mr = function(t, e, a, o) {
    "use strict";
    return t.accordions = {}, t.accordions.documentReady = function(e) {
        e(".accordion__title").on("click", function() { t.accordions.activatePanel(e(this)) }), e(".accordion").each(function() {
            var t = e(this),
                a = t.outerHeight(!0);
            t.css("min-height", a)
        }), "" !== a.location.hash && t.accordions.activatePanelById(a.location.hash, !0), e('a[href^="#"]').on("click", function() { t.accordions.activatePanelById(e(this).attr("href"), !0) })
    }, t.accordions.activatePanel = function(t, a) {
        var n = e(t),
            i = n.closest(".accordion"),
            r = n.closest("li"),
            s = o.createEvent("Event"),
            d = o.createEvent("Event");
        if (s.initEvent("panelOpened.accordions.mr", !0, !0), d.initEvent("panelClosed.accordions.mr", !0, !0), r.hasClass("active")) a !== !0 && (r.removeClass("active"), n.trigger("panelClosed.accordions.mr").get(0).dispatchEvent(d));
        else if (i.hasClass("accordion--oneopen")) {
            var c = i.find("li.active");
            c.length && (c.removeClass("active"), c.trigger("panelClosed.accordions.mr").get(0).dispatchEvent(d)), r.addClass("active"), r.trigger("panelOpened.accordions.mr").get(0).dispatchEvent(s)
        } else r.is(".active") || r.trigger("panelOpened.accordions.mr").get(0).dispatchEvent(s), r.addClass("active")
    }, t.accordions.activatePanelById = function(a, o) { var n; "" !== a && "#" !== a && (n = e(".accordion > li > .accordion__title#" + a.replace("#", "")), n.length && (e("html, body").stop(!0).animate({ scrollTop: n.offset().top - 50 }, 1200), t.accordions.activatePanel(n, o))) }, t.components.documentReady.push(t.accordions.documentReady), t
}(mr, jQuery, window, document), mr = function(t, e, a, o) { "use strict"; var n = function(t) { t(".alert__close").on("click touchstart", function() { jQuery(this).closest(".alert").addClass("alert--dismissed") }) }; return t.alerts = { documentReady: n }, t.components.documentReady.push(n), t }(mr, jQuery, window, document), mr = function(t, e, a, o) {
    "use strict";
    var n = function(t) {
        t(".background-image-holder").each(function() {
            var e = t(this).children("img").attr("src");
            t(this).css("background", 'url("' + e + '")').css("background-position", "initial").css("opacity", "1")
        })
    };
    return t.backgrounds = { documentReady: n }, t.components.documentReady.push(n), t
}(mr, jQuery, window, document), mr = function(t, e, a, o) {
    "use strict";
    var n = function(t) {
        t('.nav-container .bar[data-scroll-class*="fixed"]:not(.bar--absolute)').each(function() {
            var e = t(this),
                a = e.outerHeight(!0);
            e.closest(".nav-container").css("min-height", a)
        })
    };
    return t.bars = { documentReady: n }, t.components.documentReady.push(n), t
}(mr, jQuery, window, document), mr = function(t, e, a, o) {
    "use strict";
    return t.cookies = {
        getItem: function(t) { return t ? decodeURIComponent(o.cookie.replace(new RegExp("(?:(?:^|.*;)\\s*" + encodeURIComponent(t).replace(/[\-\.\+\*]/g, "\\$&") + "\\s*\\=\\s*([^;]*).*$)|^.*$"), "$1")) || null : null },
        setItem: function(t, e, a, n, i, r) {
            if (!t || /^(?:expires|max\-age|path|domain|secure)$/i.test(t)) return !1;
            var s = "";
            if (a) switch (a.constructor) {
                case Number:
                    s = a === 1 / 0 ? "; expires=Fri, 31 Dec 9999 23:59:59 GMT" : "; max-age=" + a;
                    break;
                case String:
                    s = "; expires=" + a;
                    break;
                case Date:
                    s = "; expires=" + a.toUTCString()
            }
            return o.cookie = encodeURIComponent(t) + "=" + encodeURIComponent(e) + s + (i ? "; domain=" + i : "") + (n ? "; path=" + n : "") + (r ? "; secure" : ""), !0
        },
        removeItem: function(t, e, a) { return this.hasItem(t) ? (o.cookie = encodeURIComponent(t) + "=; expires=Thu, 01 Jan 1970 00:00:00 GMT" + (a ? "; domain=" + a : "") + (e ? "; path=" + e : ""), !0) : !1 },
        hasItem: function(t) { return t ? new RegExp("(?:^|;\\s*)" + encodeURIComponent(t).replace(/[\-\.\+\*]/g, "\\$&") + "\\s*\\=").test(o.cookie) : !1 },
        keys: function() { for (var t = o.cookie.replace(/((?:^|\s*;)[^\=]+)(?=;|$)|^\s*|\s*(?:\=[^;]*)?(?:\1|$)/g, "").split(/\s*(?:\=[^;]*)?;\s*/), e = t.length, a = 0; e > a; a++) t[a] = decodeURIComponent(t[a]); return t }
    }, t
}(mr, jQuery, window, document), mr = function(t, e, a, o) {
    "use strict";
    var n = function(t) {
        t(".countdown[data-date]").each(function() {
            var e, a = t(this),
                o = a.attr("data-date"),
                n = "days";
            "undefined" != typeof a.attr("data-date-fallback") && (e = a.attr("data-date-fallback")), "undefined" != typeof a.attr("data-days-text") && (n = a.attr("data-days-text")), a.countdown(o, function(t) { t.elapsed ? a.text(e) : a.text(t.strftime("%D " + n + " %H:%M:%S")) })
        })
    };
    return t.countdown = { documentReady: n }, t.components.documentReadyDeferred.push(n), t
}(mr, jQuery, window, document), mr = function(t, e, a, o) { "use strict"; var n = function(t) { t(".datepicker").length && t(".datepicker").pickadate() }; return t.components.documentReadyDeferred.push(n), t }(mr, jQuery, window, document), mr = function(t, e, a, o) {
    "use strict";

    function n(t) {
        t(".dropdown__container").each(function() {
            var t, e, a, o, n;
            jQuery(this).css("left", ""), t = jQuery(this), e = t.offset().left, a = jQuery(".containerMeasure").offset().left, o = t.closest(".dropdown").offset().left, n = null, t.css("left", -e + a), t.find('.dropdown__content:not([class*="md-12"])').length && (n = t.find(".dropdown__content"), n.css("left", o - a))
        }), t(".dropdown__content").each(function() {
            var t, e, o, n, i, r;
            t = jQuery(this), e = t.offset().left, o = t.outerWidth(!0), n = e + o, i = jQuery(a).outerWidth(!0), r = jQuery(".containerMeasure").outerWidth() - o, n > i && t.css("left", r)
        })
    }

    function i(t) {
        var e = jQuery(a).width();
        t(".dropdown__container").each(function() {
            var t, a, o, n, i;
            jQuery(this).css("left", ""), t = jQuery(this), a = e - (t.offset().left + t.outerWidth(!0)), o = jQuery(".containerMeasure").offset().left, n = e - (t.closest(".dropdown").offset().left + t.closest(".dropdown").outerWidth(!0)), i = null, t.css("right", -a + o), t.find('.dropdown__content:not([class*="md-12"])').length && (i = t.find(".dropdown__content"), i.css("right", n - o))
        }), t(".dropdown__content").each(function() {
            var t, o, n, i, r, s;
            t = jQuery(this), o = e - (t.offset().left + t.outerWidth(!0)), n = t.outerWidth(!0), i = o + n, r = jQuery(a).outerWidth(!0), s = jQuery(".containerMeasure").outerWidth() - n, i > r && t.css("right", s)
        })
    }
    t.dropdowns = {}, t.dropdowns.done = !1;
    var r = function(e) {
        var r = !1;
        e('html[dir="rtl"]').length && (r = !0), t.dropdowns.done || (jQuery(o).on("click", "body:not(.dropdowns--hover) .dropdown:not(.dropdown--hover), body.dropdowns--hover .dropdown.dropdown--click", function(t) {
            var a = jQuery(this);
            jQuery(t.target).is(".dropdown--active > .dropdown__trigger") ? (a.siblings().removeClass("dropdown--active").find(".dropdown").removeClass("dropdown--active"), a.toggleClass("dropdown--active")) : (e(".dropdown--active").removeClass("dropdown--active"), a.addClass("dropdown--active"))
        }), jQuery(o).on("click touchstart", "body:not(.dropdowns--hover)", function(t) { jQuery(t.target).is('[class*="dropdown"], [class*="dropdown"] *') || e(".dropdown--active").removeClass("dropdown--active") }), jQuery("body.dropdowns--hover .dropdown").on("click", function(t) {
            t.stopPropagation();
            var e = jQuery(this);
            e.toggleClass("dropdown--active")
        }), jQuery("body").append('<div class="container containerMeasure" style="opacity:0;pointer-events:none;"></div>'), r === !1 ? (n(e), jQuery(a).on("resize", function() { n(e) })) : (i(e), jQuery(a).on("resize", function() { i(e) })), t.dropdowns.done = !0)
    };
    return t.dropdowns.documentReady = r, t.components.documentReady.push(r), t
}(mr, jQuery, window, document), mr = function(t, e, a, o) {
    "use strict";
    t.forms = {}, t.forms.captcha = {}, t.forms.captcha.widgets = [], t.forms.captcha.done = !1;
    var n = function(e) {
        t.forms.captcha.widgets = [], e('.input-checkbox input[type="checkbox"], .input-radio input[type="radio"]').each(function(t) {
            var a = e(this),
                o = a.siblings("label"),
                n = "input-assigned-" + t;
            "undefined" == typeof a.attr("id") || "" === a.attr("id") ? (a.attr("id", n), o.attr("for", n)) : (n = a.attr("id"), o.attr("for", n))
        }), e(".input-number__controls > span").off("click.mr").on("click.mr", function() {
            var t = jQuery(this),
                e = t.closest(".input-number"),
                a = e.find('input[type="number"]'),
                o = a.attr("max"),
                n = a.attr("min"),
                i = 1,
                r = parseInt(a.attr("value"), 10);
            e.is("[data-step]") && (i = parseInt(e.attr("data-step"), 10)), t.hasClass("input-number__increase") ? o >= r + i && a.attr("value", r + i) : r - i >= n && a.attr("value", r - i)
        }), e(".input-file .btn").off("click.mr").on("click.mr", function() { return e(this).siblings("input").trigger("click"), !1 }), e('form.form-email, form[action*="list-manage.com"], form[action*="createsend.com"]').attr("novalidate", !0).off("submit").on("submit", t.forms.submit), e(o).on("change, input, paste, keyup", ".attempted-submit .field-error", function() { e(this).removeClass("field-error") }), e('form[data-recaptcha-sitekey]:not([data-recaptcha-sitekey=""])').each(function() {
            var e, a, o, n, i, r, s, d = jQuery(this),
                c = d.find("div.recaptcha");
            r = d.attr("data-recaptcha-theme"), r = "undefined" != typeof r ? r : "", s = d.attr("data-recaptcha-size"), s = "undefined" != typeof s ? s : "", t.forms.captcha.sitekey = d.attr("data-recaptcha-sitekey"), c.length || (e = d.find("button[type=submit]").closest('[class*="col-"]'), c = jQuery("<div>").addClass("recaptcha"), a = jQuery("<div>").addClass("col-xs-12").append(c), a.insertBefore(e)), o = { element: c.get(0), parentForm: d, theme: r, size: s }, t.forms.captcha.widgets.push(o), t.forms.captcha.done === !1 ? jQuery('script[src*="recaptcha/api.js"]').length || (n = jQuery("<script async defer>"), i = "https://www.google.com/recaptcha/api.js?onload=mrFormsCaptchaInit&render=explicit", n.attr("src", i), jQuery("body").append(n), t.forms.captcha.done = !0) : "undefined" != typeof grecaptcha && t.forms.captcha.renderWidgets()
        })
    };
    return t.forms.documentReady = n, t.forms.submit = function(o) {
        o.preventDefault ? o.preventDefault() : o.returnValue = !1;
        var n, i, r, s, d, c = e("body"),
            l = e(o.target).closest("form"),
            u = "undefined" != typeof l.attr("action") ? l.attr("action") : "",
            f = l.find('button[type="submit"], input[type="submit"]'),
            m = 0,
            p = l.attr("original-error"),
            h = l.find("div.recaptcha").length ? !0 : !1;
        if (c.find(".form-error, .form-success").remove(), f.attr("data-text", f.text()), s = l.attr("data-error") ? l.attr("data-error") : "Please fill all fields correctly", d = l.attr("data-success") ? l.attr("data-success") : "Thanks, we'll be in touch shortly", c.append('<div class="form-error" style="display: none;">' + s + "</div>"), c.append('<div class="form-success" style="display: none;">' + d + "</div>"), i = c.find(".form-error"), r = c.find(".form-success"), l.addClass("attempted-submit"), -1 !== u.indexOf("createsend.com") || -1 !== u.indexOf("list-manage.com"))
            if (console.log("Mail list form signup detected."), "undefined" != typeof p && p !== !1 && i.html(p), 1 !== t.forms.validateFields(l)) { l.removeClass("attempted-submit"), i.fadeOut(200), f.addClass("btn--loading"); try { e.ajax({ url: l.attr("action"), crossDomain: !0, data: l.serialize(), method: "GET", cache: !1, dataType: "json", contentType: "application/json; charset=utf-8", success: function(e) { "success" !== e.result && 200 !== e.Status ? (i.attr("original-error", i.text()), i.html(e.msg).stop(!0).fadeIn(1e3), r.stop(!0).fadeOut(1e3), f.removeClass("btn--loading")) : (f.removeClass("btn--loading"), n = l.attr("data-success-redirect"), "undefined" != typeof n && n !== !1 && "" !== n ? a.location = n : (t.forms.resetForm(l), t.forms.showFormSuccess(r, i, 1e3, 5e3, 500))) } }) } catch (y) { i.attr("original-error", i.text()), i.html(y.message), t.forms.showFormError(r, i, 1e3, 5e3, 500), f.removeClass("btn--loading") } } else t.forms.showFormError(r, i, 1e3, 5e3, 500);
        else "undefined" != typeof p && p !== !1 && i.text(p), m = t.forms.validateFields(l), 1 === m ? t.forms.showFormError(r, i, 1e3, 5e3, 500) : (l.removeClass("attempted-submit"), i.fadeOut(200), f.addClass("btn--loading"), jQuery.ajax({ type: "POST", url: "" !== u ? u : "mail/mail.php", data: l.serialize() + "&url=" + a.location.href + "&captcha=" + h, success: function(o) { f.removeClass("btn--loading"), e.isNumeric(o) ? parseInt(o, 10) > 0 && (n = l.attr("data-success-redirect"), "undefined" != typeof n && n !== !1 && "" !== n && (a.location = n), t.forms.resetForm(l), t.forms.showFormSuccess(r, i, 1e3, 5e3, 500), t.forms.captcha.resetWidgets()) : (i.attr("original-error", i.text()), i.text(o).stop(!0).fadeIn(1e3), r.stop(!0).fadeOut(1e3)) }, error: function(t, e, a) { i.attr("original-error", i.text()), i.text(a).stop(!0).fadeIn(1e3), r.stop(!0).fadeOut(1e3), f.removeClass("btn--loading") } }));
        return !1
    }, t.forms.validateFields = function(t) {
        var a, o, n = e(n),
            i = !1;
        if (t = e(t), t.find('.validate-required[type="checkbox"]').each(function() {
                var t = e(this);
                e('[name="' + e(this).attr("name") + '"]:checked').length || (i = 1, a = e(this).attr("data-name") || "check", t.parent().addClass("field-error"))
            }), t.find(".validate-required, .required, [required]").not('input[type="checkbox"]').each(function() { "" === e(this).val() ? (e(this).addClass("field-error"), i = 1) : e(this).removeClass("field-error") }), t.find('.validate-email, .email, [name*="cm-"][type="email"]').each(function() { /(.+)@(.+){2,}\.(.+){2,}/.test(e(this).val()) ? e(this).removeClass("field-error") : (e(this).addClass("field-error"), i = 1) }), t.find(".validate-number-dash").each(function() { /^[0-9][0-9-]+[0-9]$/.test(e(this).val()) ? e(this).removeClass("field-error") : (e(this).addClass("field-error"), i = 1) }), t.find("div.recaptcha").length && "undefined" != typeof t.attr("data-recaptcha-sitekey") && (o = e(t.find("div.recaptcha")), "" !== grecaptcha.getResponse(t.data("recaptchaWidgetID")) ? o.removeClass("field-error") : (o.addClass("field-error"), i = 1)), t.find(".field-error").length) {
            var r = e(t).find(".field-error:first");
            r.length && e("html, body").stop(!0).animate({ scrollTop: r.offset().top - 100 }, 1200, function() { r.focus() })
        } else n.find(".form-error").fadeOut(1e3);
        return i
    }, t.forms.showFormSuccess = function(t, e, a, o, n) { t.stop(!0).fadeIn(a), e.stop(!0).fadeOut(a), setTimeout(function() { t.stop(!0).fadeOut(n) }, o) }, t.forms.showFormError = function(t, e, a, o, n) { e.stop(!0).fadeIn(a), t.stop(!0).fadeOut(a), setTimeout(function() { e.stop(!0).fadeOut(n) }, o) }, t.forms.resetForm = function(t) { t = e(t), t.get(0).reset(), t.find(".input-radio, .input-checkbox").removeClass("checked") }, a.mrFormsCaptchaInit = function() { t.forms.captcha.renderWidgets() }, t.forms.captcha.renderWidgets = function() { t.forms.captcha.widgets.forEach(function(e) { "" === e.element.innerHTML && (e.id = grecaptcha.render(e.element, { sitekey: t.forms.captcha.sitekey, theme: e.theme, size: e.size, callback: t.forms.captcha.setHuman }), e.parentForm.data("recaptchaWidgetID", e.id)) }) }, t.forms.captcha.resetWidgets = function() { t.forms.captcha.widgets.forEach(function(t) { grecaptcha.reset(t.id) }) }, t.forms.captcha.setHuman = function() { jQuery("div.recaptcha.field-error").removeClass("field-error") }, t.components.documentReadyDeferred.push(n), t
}(mr, jQuery, window, document), mr = function(t, e, a, o) {
    "use strict";
    var n = function(t) {
        t("[data-gradient-bg]").each(function(e, a) {
            var o, n, i, r = t(this),
                s = "granim-" + e,
                d = r.attr("data-gradient-bg"),
                c = [],
                l = [];
            if (r.prepend('<canvas id="' + s + '"></canvas>'), n = /^(#[0-9|a-f|A-F]{6}){1}([ ]*,[ ]*#[0-9|a-f|A-F]{6})*$/.test(d), n === !0)
                for (d = d.replace(" ", ""), d = d.split(","), o = d.length, o % 2 !== 0 && d.push(d[o - 1]), i = 0; o / 2 > i; i++) l = [], l.push(d.shift()), l.push(d.shift()), c.push(l);
            t(this), new Granim({ element: "#" + s, name: "basic-gradient", direction: "left-right", opacity: [1, 1], isPausedWhenNotInView: !0, states: { "default-state": { gradients: c } } })
        })
    };
    return t.granim = { documentReady: n }, t.components.documentReadyDeferred.push(n), t
}(mr, jQuery, window, document), mr = function(t, e, a, o) {
    "use strict";
    var n = function(t) {
        if (t(".instafeed").length) {
            var e, a, o = "4079540202.b9b1d8a.1d13c245c68d4a17bfbff87919aaeb14",
                n = "b9b1d8ae049d4153b24a6332f0088686";
            t(".instafeed[data-access-token][data-client-id]").length && (e = t(".instafeed[data-access-token][data-client-id]").first().attr("data-access-token"), a = t(".instafeed[data-access-token][data-client-id]").first().attr("data-client-id"), "" !== e && (o = e), "" !== a && (n = a)), jQuery.fn.spectragram.accessData = { accessToken: o, clientID: n }
        }
        t(".instafeed").each(function() {
            var e = t(this),
                a = e.attr("data-user-name"),
                o = 12;
            "undefined" != typeof e.attr("data-amount") && (o = parseInt(e.attr("data-amount"), 10)), e.append("<ul></ul>"), e.children("ul").spectragram("getUserFeed", { query: a, max: o })
        })
    };
    return t.instagram = { documentReady: n }, t.components.documentReadyDeferred.push(n), t
}(mr, jQuery, window, document), mr = function(t, e, a, o) {
    "use strict";
    t.maps = {};
    var n = function(e) {
        e(".map-holder").on("click", function() { e(this).addClass("interact") }).removeClass("interact");
        var a = e(".map-container[data-maps-api-key]");
        a.length && (a.addClass("gmaps-active"), t.maps.initAPI(e), t.maps.init())
    };
    return t.maps.documentReady = n, t.maps.initAPI = function(t) {
        if (o.querySelector("[data-maps-api-key]") && !o.querySelector(".gMapsAPI") && t("[data-maps-api-key]").length) {
            var e = o.createElement("script"),
                a = t("[data-maps-api-key]:first").attr("data-maps-api-key");
            a = "undefined" != typeof a ? a : "", "" !== a && (e.type = "text/javascript", e.src = "https://maps.googleapis.com/maps/api/js?key=" + a + "&callback=mr.maps.init", e.className = "gMapsAPI", o.body.appendChild(e))
        }
    }, t.maps.init = function() {
        "undefined" != typeof a.google && "undefined" != typeof a.google.maps && jQuery(".gmaps-active").each(function() {
            var t, e, n = this,
                i = jQuery(this),
                r = "undefined" != typeof i.attr("data-map-style") ? i.attr("data-map-style") : !1,
                s = JSON.parse(r) || [{ featureType: "landscape", stylers: [{ saturation: -100 }, { lightness: 65 }, { visibility: "on" }] }, { featureType: "poi", stylers: [{ saturation: -100 }, { lightness: 51 }, { visibility: "simplified" }] }, { featureType: "road.highway", stylers: [{ saturation: -100 }, { visibility: "simplified" }] }, { featureType: "road.arterial", stylers: [{ saturation: -100 }, { lightness: 30 }, { visibility: "on" }] }, { featureType: "road.local", stylers: [{ saturation: -100 }, { lightness: 40 }, { visibility: "on" }] }, { featureType: "transit", stylers: [{ saturation: -100 }, { visibility: "simplified" }] }, { featureType: "administrative.province", stylers: [{ visibility: "off" }] }, { featureType: "water", elementType: "labels", stylers: [{ visibility: "on" }, { lightness: -25 }, { saturation: -100 }] }, { featureType: "water", elementType: "geometry", stylers: [{ hue: "#ffff00" }, { lightness: -25 }, { saturation: -97 }] }],
                d = "undefined" != typeof i.attr("data-map-zoom") && "" !== i.attr("data-map-zoom") ? 1 * i.attr("data-map-zoom") : 17,
                c = "undefined" != typeof i.attr("data-zoom-controls") ? !0 : !1,
                l = "undefined" != typeof i.attr("data-zoom-controls") ? i.attr("data-zoom-controls") : !1,
                u = "undefined" != typeof i.attr("data-latlong") ? i.attr("data-latlong") : !1,
                f = u ? 1 * u.substr(0, u.indexOf(",")) : !1,
                m = u ? 1 * u.substr(u.indexOf(",") + 1) : !1,
                p = new google.maps.Geocoder,
                h = "undefined" != typeof i.attr("data-address") ? i.attr("data-address").split(";") : [""],
                y = "undefined" != typeof i.attr("data-marker-image") ? i.attr("data-marker-image") : "img/mapmarker.png",
                v = "We Are Here",
                g = jQuery(o).width() > 766 ? !0 : !1,
                w = { draggable: g, scrollwheel: !1, zoom: d, disableDefaultUI: !0, zoomControl: c, zoomControlOptions: l !== !1 ? { position: google.maps.ControlPosition[l] } : null, styles: s };
            console.log(w), "undefined" != typeof i.attr("data-marker-title") && "" !== i.attr("data-marker-title") && (v = i.attr("data-marker-title")), void 0 !== h && "" !== h[0] ? p.geocode({ address: h[0].replace("[nomarker]", "") }, function(t, e) {
                if (e === google.maps.GeocoderStatus.OK) {
                    var o = new google.maps.Map(n, w);
                    o.setCenter(t[0].geometry.location), h.forEach(function(t) {
                        var e;
                        if (y = { url: "undefined" == typeof a.mr_variant ? "object" != typeof y ? y : y.url : "../img/mapmarker.png", scaledSize: new google.maps.Size(50, 50) }, /(\-?\d+(\.\d+)?),\s*(\-?\d+(\.\d+)?)/.test(t)) var n = t.split(","),
                            i = new google.maps.Marker({ position: { lat: 1 * n[0], lng: 1 * n[1] }, map: o, icon: y, title: v, optimised: !1 });
                        else t.indexOf("[nomarker]") < 0 && (e = new google.maps.Geocoder, e.geocode({ address: t.replace("[nomarker]", "") }, function(t, e) { e === google.maps.GeocoderStatus.OK ? i = new google.maps.Marker({ map: o, icon: y, title: v, position: t[0].geometry.location, optimised: !1 }) : console.log("Map marker error: " + e) }))
                    })
                } else console.log("There was a problem geocoding the address.")
            }) : "undefined" != typeof f && "" !== f && f !== !1 && "undefined" != typeof m && "" !== m && m !== !1 && (w.center = { lat: f, lng: m }, t = new google.maps.Map(i, w), e = new google.maps.Marker({ position: { lat: f, lng: m }, map: t, icon: y, title: v }))
        })
    }, t.components.documentReady.push(n), t
}(mr, jQuery, window, document), mr = function(t, e, a, o) {
    "use strict";
    var n = function(e) {
            t.masonry.updateFilters(), e(o).on("click touchstart", ".masonry__filters li:not(.js-no-action)", function() {
                var t = e(this),
                    a = t.closest(".masonry").find(".masonry__container"),
                    o = "*";
                "*" !== t.attr("data-masonry-filter") && (o = ".filter-" + t.attr("data-masonry-filter")), t.siblings("li").removeClass("active"), t.addClass("active"), a.removeClass("masonry--animate"), a.on("layoutComplete", function() { e(this).addClass("masonry--active"), "undefined" != typeof mr_parallax && setTimeout(function() { mr_parallax.profileParallaxElements() }, 100) }), a.isotope({ filter: o })
            })
        },
        i = function() {
            e(".masonry").each(function() {
                var t = e(this).find(".masonry__container"),
                    a = e(this),
                    o = "*";
                a.is("[data-default-filter]") && (o = a.attr("data-default-filter").toLowerCase(), o = ".filter-" + o, a.find("li[data-masonry-filter]").removeClass("active"), a.find('li[data-masonry-filter="' + a.attr("data-default-filter").toLowerCase() + '"]').addClass("active")), t.on("layoutComplete", function() { t.addClass("masonry--active"), "undefined" != typeof mr_parallax && setTimeout(function() { mr_parallax.profileParallaxElements() }, 100) }), t.isotope({ itemSelector: ".masonry__item", filter: o, masonry: { columnWidth: ".masonry__item" } })
            })
        };
    return t.masonry = { documentReady: n, windowLoad: i }, t.masonry.updateFilters = function(a) {
        a = "undefined" != typeof a ? a : ".masonry";
        var o = e(a);
        o.each(function() {
            var a, o = e(this),
                n = o.find(".masonry__container"),
                i = o.find(".masonry__filters"),
                r = "undefined" != typeof i.attr("data-filter-all-text") ? i.attr("data-filter-all-text") : "All";
            o.is(".masonry") && n.find(".masonry__item[data-masonry-filter]").length && (a = i.find("> ul"), a.length || (a = i.append("<ul></ul>").find("> ul")), n.find(".masonry__item[data-masonry-filter]").each(function() {
                var o = e(this),
                    n = o.attr("data-masonry-filter"),
                    i = [];
                "undefined" != typeof n && "" !== n && (i = n.split(",")), jQuery(i).each(function(e, n) {
                    var i = t.util.slugify(n);
                    o.addClass("filter-" + i), a.find('[data-masonry-filter="' + i + '"]').length || a.append('<li data-masonry-filter="' + i + '">' + n + "</li>")
                })
            }), t.util.sortChildrenByText(e(this).find(".masonry__filters ul")), a.find('[data-masonry-filter="*"]').length || a.prepend('<li class="active" data-masonry-filter="*">' + r + "</li>"))
        })
    }, t.masonry.updateLayout = function(t) {
        t = "undefined" != typeof t ? t : ".masonry";
        var a = e(t);
        a.each(function() {
            var t = e(this),
                a = t.find(".masonry__item:not([style])"),
                o = t.find(".masonry__container");
            t.is(".masonry") && (a.length && o.isotope("appended", a).isotope("layout"), o.isotope("layout"))
        })
    }, t.components.documentReady.push(n), t.components.windowLoad.push(i), t
}(mr, jQuery, window, document), mr = function(t, e, a, o) {
    "use strict";
    t.modals = {};
    var n = function(e) {
        var n = '<div class="all-page-modals"></div>',
            i = e("div.main-container");
        if (i.length ? (jQuery(n).insertAfter(i), t.modals.allModalsContainer = e("div.all-page-modals")) : (jQuery("body").append(n), t.modals.allModalsContainer = jQuery("body div.all-page-modals")), e(".modal-container").each(function() {
                var o = e(this),
                    n = (e(a), o.find(".modal-content"));
                if (o.find(".modal-close").length || o.find(".modal-content").append('<div class="modal-close modal-close-cross"></div>'), void 0 !== n.attr("data-width")) {
                    var i = 1 * n.attr("data-width").substr(0, n.attr("data-width").indexOf("%"));
                    n.css("width", i + "%")
                }
                if (void 0 !== n.attr("data-height")) {
                    var r = 1 * n.attr("data-height").substr(0, n.attr("data-height").indexOf("%"));
                    n.css("height", r + "%")
                }
                t.util.idleSrc(o, "iframe")
            }), e(".modal-instance").each(function(a) {
                var o = e(this),
                    n = o.find(".modal-container"),
                    i = (o.find(".modal-content"), o.find(".modal-trigger"));
                i.attr("data-modal-index", a), n.attr("data-modal-index", a), "undefined" != typeof n.attr("data-modal-id") && i.attr("data-modal-id", n.attr("data-modal-id")), n = n.detach(), t.modals.allModalsContainer.append(n)
            }), e(".modal-trigger").on("click", function() { var a, o, n = e(this); return "undefined" != typeof n.attr("data-modal-id") ? (a = n.attr("data-modal-id"), o = t.modals.allModalsContainer.find('.modal-container[data-modal-id="' + a + '"]')) : (a = e(this).attr("data-modal-index"), o = t.modals.allModalsContainer.find('.modal-container[data-modal-index="' + a + '"]')), t.util.activateIdleSrc(o, "iframe"), t.modals.autoplayVideo(o), t.modals.showModal(o), !1 }), jQuery(o).on("click", ".modal-close", t.modals.closeActiveModal), jQuery(o).keyup(function(e) { 27 === e.keyCode && t.modals.closeActiveModal() }), e(".modal-container").on("click", function(e) { e.target === this && t.modals.closeActiveModal() }), e(".modal-container[data-autoshow]").each(function() {
                var a = e(this),
                    o = 1 * a.attr("data-autoshow");
                t.util.activateIdleSrc(a), t.modals.autoplayVideo(a), "undefined" != typeof a.attr("data-cookie") ? t.cookies.hasItem(a.attr("data-cookie")) || t.modals.showModal(a, o) : t.modals.showModal(a, o)
            }), e(".modal-container[data-show-on-exit]").each(function() {
                var a = jQuery(this),
                    n = a.attr("data-show-on-exit"),
                    i = 0;
                a.attr("data-delay") && (i = parseInt(a.attr("data-delay"), 10) || 0), e(n).length && (a.prepend(e('<i class="ti-close close-modal">')), jQuery(o).on("mouseleave", n, function() { e(".modal-active").length || ("undefined" != typeof a.attr("data-cookie") ? t.cookies.hasItem(a.attr("data-cookie")) || t.modals.showModal(a, i) : t.modals.showModal(a, i)) }))
            }), 2 === a.location.href.split("#").length) {
            var r = a.location.href.split("#").pop();
            e('[data-modal-id="' + r + '"]').length && (t.modals.closeActiveModal(), t.modals.showModal(e('[data-modal-id="' + r + '"]')))
        }
        jQuery(o).on("click", 'a[href^="#"]', function() {
            var a = e(this).attr("href").replace("#", "");
            t.modals.closeActiveModal(), setTimeout(t.modals.showModal, 500, '[data-modal-id="' + a + '"]', 0)
        }), jQuery(o).on("wheel mousewheel scroll", ".modal-content, .modal-content .scrollable", function(t) { t.preventDefault && t.preventDefault(), t.stopPropagation && t.stopPropagation(), this.scrollTop += t.originalEvent.deltaY })
    };
    return t.modals.documentReady = n, t.modals.showModal = function(t, a) {
        var o = "undefined" != typeof a ? 1 * a : 0;
        setTimeout(function() { e(t).addClass("modal-active") }, o)
    }, t.modals.closeActiveModal = function() {
        var e = jQuery("body div.modal-active");
        t.util.idleSrc(e, "iframe"), t.util.pauseVideo(e), "undefined" != typeof e.attr("data-cookie") && t.cookies.setItem(e.attr("data-cookie"), "true", 1 / 0, "/"), e.removeClass("modal-active")
    }, t.modals.autoplayVideo = function(t) {
        if (t.find("video[autoplay]").length) {
            var e = t.find("video").get(0);
            e.play()
        }
    }, t.components.documentReady.push(n), t
}(mr, jQuery, window, document), mr = function(t, e, a, o) {
    "use strict";
    t.newsletters = {};
    var n = function(e) {
        var a, o, n, i, r, s;
        e('form[action*="createsend.com"]').each(function() {
            a = e(this), a.attr("novalidate", "novalidate"), a.is(".form--no-placeholders") ? a.find("input[placeholder]").removeAttr("placeholder") : a.find("input:not([checkbox]):not([radio])").each(function() { var t = e(this); "undefined" != typeof t.attr("placeholder") ? "" === t.attr("placeholder") && t.siblings("label").length && (t.attr("placeholder", t.siblings("label").first().text()), a.is(".form--no-labels") && t.siblings("label").first().remove()) : t.siblings("label").length && (t.attr("placeholder", t.siblings("label").first().text()), a.is(".form--no-labels") && t.siblings("label").first().remove()), t.parent().is("p") && t.unwrap() }), a.find("select").wrap('<div class="input-select"></div>'), a.find('input[type="radio"]').wrap('<div class="input-radio"></div>'), a.find('input[type="checkbox"]').each(function() {
                o = e(this), i = o.attr("id"), n = a.find("label[for=" + i + "]"), n.length || (n = e('<label for="' + i + '"></label>')), o.before('<div class="input-checkbox" data-id="' + i + '"></div>'), e('.input-checkbox[data-id="' + i + '"]').prepend(o), e('.input-checkbox[data-id="' + i + '"]').prepend(n);
            }), a.find('button[type="submit"]').each(function() {
                var t = e(this);
                t.addClass("btn"), t.parent().is("p") && t.unwrap()
            }), a.find("[required]").attr("required", "required").addClass("validate-required"), a.addClass("form--active"), t.newsletters.prepareAjaxAction(a)
        }), e('form[action*="list-manage.com"]').each(function() {
            a = e(this), a.attr("novalidate", "novalidate"), a.is(".form--no-placeholders") ? a.find("input[placeholder]").removeAttr("placeholder") : a.find("input:not([checkbox]):not([radio])").each(function() { var t = e(this); "undefined" != typeof t.attr("placeholder") ? "" === t.attr("placeholder") && t.siblings("label").length && (t.attr("placeholder", t.siblings("label").first().text()), a.is(".form--no-labels") && t.siblings("label").first().remove()) : t.siblings("label").length && (t.attr("placeholder", t.siblings("label").first().text()), a.is(".form--no-labels") && t.siblings("label").first().remove()) }), a.is(".form--no-labels") && a.find("input:not([checkbox]):not([radio])").each(function() {
                var t = e(this);
                t.siblings("label").length && t.siblings("label").first().remove()
            }), a.find("select").wrap('<div class="input-select"></div>'), a.find('input[type="checkbox"]').each(function() { o = jQuery(this), r = o.parent(), n = r.find("label"), n.length || (n = jQuery("<label>")), o.before('<div class="input-checkbox"></div>'), r.find(".input-checkbox").append(o), r.find(".input-checkbox").append(n) }), a.find('input[type="radio"]').each(function() { s = jQuery(this), r = s.closest("li"), n = r.find("label"), n.length || (n = jQuery("<label>")), s.before('<div class="input-radio"></div>'), r.find(".input-radio").prepend(s), r.find(".input-radio").prepend(n) }), a.find('input[type="submit"]').each(function() {
                var t = e(this),
                    a = jQuery("<button/>").attr("type", "submit").attr("class", t.attr("class")).addClass("btn").text(t.attr("value"));
                t.parent().is("div.clear") && t.unwrap(), a.insertBefore(t), t.remove()
            }), a.find("input").each(function() {
                var t = e(this);
                t.hasClass("required") && t.removeClass("required").addClass("validate-required")
            }), a.find('input[type="email"]').removeClass("email").addClass("validate-email"), a.find("#mce-responses").remove(), a.find(".mc-field-group").each(function() { e(this).children().first().unwrap() }), a.find("[required]").attr("required", "required").addClass("validate-required"), a.addClass("form--active"), t.newsletters.prepareAjaxAction(a)
        }), t.forms.documentReady(t.setContext("form.form--active"))
    };
    return t.newsletters.documentReady = n, t.newsletters.prepareAjaxAction = function(t) { var a = e(t).attr("action"); /list-manage\.com/.test(a) && (a = a.replace("/post?", "/post-json?") + "&c=?", "//" === a.substr(0, 2) && (a = "http:" + a)), /createsend\.com/.test(a) && (a += "?callback=?"), e(t).attr("action", a) }, t.components.documentReady.push(n), t
}(mr, jQuery, window, document), mr = function(t, e, a, o) {
    "use strict";
    t.notifications = {};
    var n = function(e) {
        e(".notification").each(function() {
            var t = e(this);
            t.find(".notification-close").length || t.append('<div class="notification-close-cross notification-close"></div>')
        }), e(".notification[data-autoshow]").each(function() {
            var a = e(this),
                o = parseInt(a.attr("data-autoshow"), 10);
            "undefined" != typeof a.attr("data-cookie") ? t.cookies.hasItem(a.attr("data-cookie")) || t.notifications.showNotification(a, o) : t.notifications.showNotification(a, o)
        }), e("[data-notification-link]:not(.notification)").on("click", function() {
            var a = jQuery(this).attr("data-notification-link"),
                o = e('.notification[data-notification-link="' + a + '"]');
            return jQuery(".notification--reveal").addClass("notification--dismissed"), o.removeClass("notification--dismissed"), t.notifications.showNotification(o, 0), !1
        }), e(".notification-close").on("click", function() { var e = jQuery(this); return t.notifications.closeNotification(e), "#" === e.attr("href") ? !1 : void 0 }), e(".notification .inner-link").on("click", function() {
            var e = jQuery(this).closest(".notification").attr("data-notification-link");
            t.notifications.closeNotification(e)
        })
    };
    return t.notifications.documentReady = n, t.notifications.showNotification = function(e, a) {
        var o = "undefined" != typeof a ? 1 * a : 0;
        if (setTimeout(function() { e.addClass("notification--reveal"), e.closest("nav").addClass("notification--reveal"), e.find("input").length && e.find("input").first().focus() }, o), e.is("[data-autohide]")) {
            var n = parseInt(e.attr("data-autohide"), 10);
            setTimeout(function() { t.notifications.closeNotification(e) }, n + o)
        }
    }, t.notifications.closeNotification = function(a) {
        var o = jQuery(a);
        a = o.is(".notification") ? o : o.is(".notification-close") ? o.closest(".notification") : e('.notification[data-notification-link="' + a + '"]'), a.addClass("notification--dismissed"), a.closest("nav").removeClass("notification--reveal"), "undefined" != typeof a.attr("data-cookie") && t.cookies.setItem(a.attr("data-cookie"), "true", 1 / 0, "/")
    }, t.components.documentReady.push(n), t
}(mr, jQuery, window, document), mr = function(t, e, a, o) {
    "use strict";
    t.parallax = {};
    var n = function(t) {
        var e = t(a),
            o = e.width(),
            n = e.height(),
            i = t("nav").outerHeight(!0);
        if (o > 768) {
            var r = t(".parallax:nth-of-type(1)"),
                s = t(".parallax:nth-of-type(1) .background-image-holder");
            s.css("top", -i), r.outerHeight(!0) === n && s.css("height", n + i)
        }
    };
    return t.parallax.documentReady = n, t.parallax.update = function() { "undefined" != typeof mr_parallax && (mr_parallax.profileParallaxElements(), mr_parallax.mr_parallaxBackground()) }, t.components.documentReady.push(n), t
}(mr, jQuery, window, document), mr = function(t, e, a, o) {
    "use strict";
    t.easypiecharts = {}, t.easypiecharts.pies = [];
    var n = function(e) {
        t.easypiecharts.init = function() {
            t.easypiecharts.pies = [], e(".radial").each(function() {
                var e = {},
                    a = jQuery(this);
                e.element = a, e.value = parseInt(a.attr("data-value"), 10), e.top = a.offset().top, e.height = a.height() / 2, e.active = !1, t.easypiecharts.pies.push(e)
            })
        }, t.easypiecharts.activate = function() { t.easypiecharts.pies.forEach(function(e) { Math.round(t.scroll.y + t.window.height) >= Math.round(e.top + e.height) && e.active === !1 && (e.element.data("easyPieChart").enableAnimation(), e.element.data("easyPieChart").update(e.value), e.element.addClass("radial--active"), e.active = !0) }) }, e(".radial").each(function() {
            var t = jQuery(this),
                e = "#000000",
                a = 2e3,
                o = 110,
                n = 3;
            "undefined" != typeof t.attr("data-timing") && (a = 1 * t.attr("data-timing")), "undefined" != typeof t.attr("data-color") && (e = t.attr("data-color")), "undefined" != typeof t.attr("data-size") && (o = t.attr("data-size")), "undefined" != typeof t.attr("data-bar-width") && (n = t.attr("data-bar-width")), t.css("height", o).css("width", o), t.easyPieChart({ animate: { duration: a, enabled: !0 }, barColor: e, scaleColor: !1, size: o, lineWidth: n }), t.data("easyPieChart").update(0)
        }), e(".radial").length && (t.easypiecharts.init(), t.easypiecharts.activate(), t.scroll.listeners.push(t.easypiecharts.activate))
    };
    return t.easypiecharts.documentReady = n, t.components.documentReadyDeferred.push(n), t
}(mr, jQuery, window, document), mr = function(t, e, a, o) {
    "use strict";
    t.sliders = {}, t.sliders.draggable = !0;
    var n = function(e) {
        e(".slider").each(function(a) {
            var o = e(this),
                n = o.find("ul.slides");
            n.find(">li").addClass("slide");
            var i = n.find("li").length,
                r = !1,
                s = !1,
                d = 7e3,
                c = !0,
                l = t.sliders.draggable;
            r = "true" === o.attr("data-arrows") ? !0 : !1, c = "false" === o.attr("data-autoplay") ? !1 : !0, s = "true" === o.attr("data-paging") && n.find("li").length > 1 ? !0 : !1, o.attr("data-timing") && (d = 1 * o.attr("data-timing")), o.attr("data-children", i), 2 > i && (l = !1), e(n).flickity({ cellSelector: ".slide", cellAlign: "left", wrapAround: !0, pageDots: s, prevNextButtons: r, autoPlay: d, draggable: l, imagesLoaded: !0 }), e(n).on("scroll.flickity", function(t, e) { o.find(".is-selected").hasClass("controls--dark") ? o.addClass("controls--dark") : o.removeClass("controls--dark") })
        }), t.parallax.update()
    };
    return t.sliders.documentReady = n, t.components.documentReadyDeferred.push(n), t
}(mr, jQuery, window, document), mr = function(t, e, a, o) {
    "use strict";
    t.smoothscroll = {}, t.smoothscroll.sections = [], t.smoothscroll.init = function() {
        t.smoothscroll.sections = [], e("a.inner-link").each(function() {
            var a = {},
                o = e(this),
                n = o.attr("href"),
                i = new RegExp("^#[^\r\n	\f#.]+$", "gm");
            i.test(n) && e("section" + n).length && (a.id = n, a.top = Math.round(e(n).offset().top), a.height = Math.round(e(n).outerHeight()), a.link = o.get(0), a.active = !1, t.smoothscroll.sections.push(a))
        }), t.smoothscroll.highlight()
    }, t.smoothscroll.highlight = function() { t.smoothscroll.sections.forEach(function(e) { t.scroll.y >= e.top && t.scroll.y < e.top + e.height ? e.active === !1 && (e.link.classList.add("inner-link--active"), e.active = !0) : (e.link.classList.remove("inner-link--active"), e.active = !1) }) }, t.scroll.listeners.push(t.smoothscroll.highlight);
    var n = function(e) {
        var o = e("a.inner-link");
        if (o.length) {
            o.each(function(t) {
                var a = e(this),
                    o = a.attr("href");
                "#" !== o.charAt(0) && a.removeClass("inner-link")
            }), t.smoothscroll.init(), e(a).on("resize", t.smoothscroll.init);
            var n = 0;
            e("body[data-smooth-scroll-offset]").length && (n = e("body").attr("data-smooth-scroll-offset"), n = 1 * n), smoothScroll.init({ selector: ".inner-link", selectorHeader: null, speed: 750, easing: "easeInOutCubic", offset: n })
        }
    };
    return t.smoothscroll.documentReady = n, t.components.documentReady.push(n), t.components.windowLoad.push(t.smoothscroll.init), t
}(mr, jQuery, window, document), mr = function(t, e, a, o) {
    "use strict";
    t.tabs = {};
    var n = function(e) {
        e(".tabs").each(function() {
            var t = e(this);
            t.after('<ul class="tabs-content">'), t.find("li").each(function() {
                var t = e(this),
                    a = t.find(".tab__content").wrap("<li></li>").parent(),
                    o = a.clone(!0, !0);
                a.remove(), t.closest(".tabs-container").find(".tabs-content").append(o)
            })
        }), e(".tabs > li").on("click", function() {
            var a, o = e(this);
            t.tabs.activateTab(o), o.is("[id]") && (a = "#" + o.attr("id"), history.pushState ? history.pushState(null, null, a) : location.hash = a)
        }), e(".tabs li.active").each(function() { t.tabs.activateTab(this) }), "" !== a.location.hash && t.tabs.activateTabById(a.location.hash), e('a[href^="#"]').on("click", function() { t.tabs.activateTabById(e(this).attr("href")) })
    };
    return t.tabs.activateTab = function(t) {
        var a, n = e(t),
            i = n.closest(".tabs-container"),
            r = 1 * n.index() + 1,
            s = i.find("> .tabs-content > li:nth-of-type(" + r + ")"),
            d = o.createEvent("Event");
        d.initEvent("tabOpened.tabs.mr", !0, !0), i.find("> .tabs > li").removeClass("active"), i.find("> .tabs-content > li").removeClass("active"), n.addClass("active").trigger("tabOpened.tabs.mr").get(0).dispatchEvent(d), s.addClass("active"), a = s.find("iframe"), a.length && a.attr("src", a.attr("src"))
    }, t.tabs.activateTabById = function(t) { "" !== t && "#" !== t && e(".tabs > li#" + t.replace("#", "")).click() }, t.tabs.documentReady = n, t.components.documentReady.push(n), t
}(mr, jQuery, window, document), mr = function(t, e, a, o) {
    "use strict";
    var n = function(t) {
        t("[data-toggle-class]").each(function() {
            var e = t(this),
                a = e.attr("data-toggle-class").split("|");
            t(a).each(function() {
                var a = e,
                    o = [],
                    n = "",
                    i = "",
                    o = this.split(";");
                2 === o.length ? (i = o[0], n = o[1], t(a).on("click", function() { return a.hasClass("toggled-class") ? a.removeClass("toggled-class") : a.toggleClass("toggled-class"), t(i).toggleClass(n), !1 })) : console.log('Error in [data-toggle-class] attribute. This attribute accepts an element, or comma separated elements terminated witha ";" followed by a class name to toggle')
            })
        })
    };
    return t.toggleClass = { documentReady: n }, t.components.documentReady.push(n), t
}(mr, jQuery, window, document), mr = function(t, e, a, o) {
    "use strict";
    var n = function(t) {
        t(".typed-text").each(function() {
            var e = t(this),
                a = e.attr("data-typed-strings") ? e.attr("data-typed-strings").split(",") : [];
            t(e).typed({ strings: a, typeSpeed: 100, loop: !0, showCursor: !1 })
        })
    };
    return t.typed = { documentReady: n }, t.components.documentReady.push(n), t
}(mr, jQuery, window, document), mr = function(t, e, a, o) {
    "use strict";
    var n = function(e) {
        e(".tweets-feed").each(function(t) { e(this).attr("id", "tweets-" + t) }).each(function(a) {
            function o(e) { for (var a = e.length, o = 0, i = '<ul class="slides">'; a > o;) i += "<li>" + e[o] + "</li>", o++; return i += "</ul>", n.html(i), n.closest(".slider").length ? (t.sliders.documentReady(t.setContext()), i) : void 0 }
            var n = e("#tweets-" + a),
                i = { domId: "", maxTweets: n.attr("data-amount"), enableLinks: !0, showUser: !0, showTime: !0, dateFunction: "", showRetweet: !1, customCallback: o };
            "undefined" != typeof n.attr("data-widget-id") ? i.id = n.attr("data-widget-id") : "undefined" != typeof n.attr("data-feed-name") && "" !== n.attr("data-feed-name") ? i.profile = { screenName: n.attr("data-feed-name").replace("@", "") } : i.profile = { screenName: "twitter" }, n.closest(".twitter-feed--slider").length && n.addClass("slider"), twitterFetcher.fetch(i)
        })
    };
    return t.twitter = { documentReady: n }, t.components.documentReady.push(n), t
}(mr, jQuery, window, document), mr = function(t, e, a, o) {
    "use strict";
    var n = function(t) {
        t(".youtube-background").length && t(".youtube-background").each(function() {
            var e = t(this),
                a = t(this).attr("data-video-url"),
                o = t(this).attr("data-start-at");
            e.attr("data-property", '{videoURL:"' + a + '",containment:"self",autoPlay:true, mute:true, startAt:' + o + ", opacity:1}"), e.closest(".videobg").append('<div class="loading-indicator"></div>'), e.YTPlayer(), e.on("YTPStart", function() { e.closest(".videobg").addClass("video-active") })
        }), t(".videobg").find("video").length && t(".videobg").find("video").closest(".videobg").addClass("video-active"), t(".video-cover").each(function() {
            var e = t(this);
            e.find("iframe[src]").length && (e.find("iframe").attr("data-src", e.find("iframe").attr("src")), e.find("iframe").attr("src", ""))
        }), t(".video-cover .video-play-icon").on("click", function() {
            var e = t(this),
                a = e.closest(".video-cover");
            if (a.find("video").length) { var o = a.find("video").get(0); return a.addClass("reveal-video"), o.play(), !1 }
            if (a.find("iframe").length) { var n = a.find("iframe"); return n.attr("src", n.attr("data-src")), a.addClass("reveal-video"), !1 }
        })
    };
    return t.video = { documentReady: n }, t.components.documentReady.push(n), t
}(mr, jQuery, window, document), mr = function(t, e, a, o) {
    "use strict";
    var n = function(t) {
        t(".wizard").each(function() {
            var t = jQuery(this);
            t.is('[role="application"][id^="steps-uid"]') || (t.steps({ headerTag: "h5", bodyTag: "section", transitionEffect: "slideLeft", autoFocus: !0 }), t.addClass("active"))
        })
    };
    return t.wizard = { documentReady: n }, t.components.documentReady.push(n), t
}(mr, jQuery, window, document);