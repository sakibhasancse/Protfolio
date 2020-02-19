function accordion() { $(".faq__title").click(function() { $(this).parents(".faq__list").find(".faq__descr").not(this).slideUp("fast").parents(".faq__item").removeClass("active"), $(this).next().not(":visible").slideDown("fast").parent().addClass("active") }) }! function() {
    "use strict";

    function a() {
        var a = window.hp.getDevice().device;
        a !== window.hp.currentDevice && ($(document).trigger("device-change", { oldDevice: window.hp.currentDevice, newDevice: a }), window.hp.currentDevice = a)
    }
    window.hp = {
        getScrollSize: function() { var a, b, c = $("body"); return c.css("overflow", "hidden"), a = c.width(), c.css({ overflow: "auto", height: "101%" }), b = c.width() - a, c.removeAttr("style"), Math.abs(b) },
        clearForm: function(a) { return a.trigger("reset"), a.find("input, textarea").each(function() { $(this).parent().parent().removeClass("child-input-focused") }), a },
        scrollDebounceStop: function() {
            var a = 600;
            $(document).on("mousewheel.scrollDebounceStop", function(a) { return !1 }), setTimeout(function() { $(document).off("mousewheel.scrollDebounceStop") }, a)
        },
        debounce: function(a, b, c) {
            var d;
            return function() {
                var e = this,
                    f = arguments,
                    g = function() { d = null, c || a.apply(e, f) },
                    h = c && !d;
                clearTimeout(d), d = setTimeout(g, b), h && a.apply(e, f)
            }
        },
        getRandomInt: function(a, b) { return Math.floor(Math.random() * (b - a + 1)) + a },
        scrollTo: function(a, b) {
            var c, d = 300,
                b = b || function() {};
            c = "number" == typeof a ? a : $(a).offset().top, $("html, body").animate({ scrollTop: c }, d, b)
        },
        getDevice: function() {
            var a = [{ device: "phone", size: 768 }, { device: "tablet", size: 1024 }, { device: "desktop", size: !1 }],
                b = a[a.length - 1];
            return a.some(function(a, c) { if (window.matchMedia("only screen and (max-width: " + a.size + "px)").matches) return b = a }), b
        },
        responsive: function(a, b) {
            b[window.hp.currentDevice] ? b[window.hp.currentDevice].run() : b.other.run(), $(document).on("device-change", function(a, c) {
                var d = b[c.oldDevice] ? c.oldDevice : "other",
                    e = b[c.newDevice] ? c.newDevice : "other";
                c.oldDevice ? d !== e && (b[d].destroy && b[d].destroy(), b[e].run()) : b[e].run()
            })
        }
    }, $(window).bind("resize", a), a()
}(),
function() {
    function a() { new Swiper(".clients-slider", { loop: !0, centeredSlides: !0, speed: 500, slidesPerView: "auto", loopedSlides: 3, navigation: { nextEl: ".swiper-button-next", prevEl: ".swiper-button-prev" } }) }

    function b() { $(".send-message").click(function() { return $("html, body").animate({ scrollTop: $($(this).attr("href")).offset().top - $(".header").outerHeight() }, 500), !1 }) }

    function c() { autosize(jQuery(".contact-form textarea")) }

    function d() {
        $(".contact-form select").select2({ minimumResultsForSearch: -1 }).on("select2:open", function(a) { $(this).parents(".select-holder").addClass("row--focused") }).on("select2:select", function() { $(this).parents(".select-holder").addClass("row--completed") }).on("select2:close", function(a) {
            var b = $(a.currentTarget).val();
            $(this).parents(".select-holder").removeClass("row--focused"), $(this).valid(), b || $(this).parents(".select-holder").removeClass("row--focused")
        })
    }

    function e() { $(".contact-form select").val("").trigger("change"), $(".contact-form select").select2("val", ""), $(".contact-form .select-holder").removeClass("row--valid row--invalid row--completed") }

    function f() { W.init(), J() }

    function g() { /CriOS/i.test(navigator.userAgent) && /iphone|ipod|ipad/i.test(navigator.userAgent) && $("body").addClass("ios-chrome-active") }

    function h() {
        function a() { $("body").addClass("ios-active") }

        function b() {
            var a = $("body");
            a.hasClass("nav-active") ? setTimeout(function() { $(window).scrollTop(d), $("#main").removeAttr("style") }, 0) : (d = $(window).scrollTop(), $("#main").css("top", -d))
        }
        var c = navigator.userAgent.match(/(iPod|iPhone|iPad)/);
        if (c) {
            var d;
            a(), $(".nav-opener").bind("click", b)
        }
    }

    function i() {
        function a() {
            setTimeout(function() {
                var a = $(window).height();
                $(".entry-section").css("height", a)
            }, 300)
        }
        var b = navigator.userAgent.match(/(iPod|iPhone|iPad|Android)/);
        b && $(window).bind("load orientationchange", a)
    }

    function j() {
        function a() { f.length && (g.on("scroll", b), b()) }

        function b() { i.removeClass(j), d(f) ? c(function() { i.addClass(j) }) : clearTimeout(e) }

        function c(a) { clearTimeout(e), e = setTimeout(a, k) }

        function d(a) {
            var b = g.scrollTop(),
                c = h.height(),
                d = a.offset().top,
                e = a.height();
            return b < d + e - c
        }
        var e, f = $(".graff-box"),
            g = $(document),
            h = $(window),
            i = $("body"),
            j = "show-the-arrow",
            k = 3e3;
        return { init: a, check: b }
    }

    function k() { jQuery("a.lightbox-link").fancybox({ helpers: { overlay: { locked: !1, css: { background: "rgba(0, 0, 0, 0.65)" } } } }) }

    function l() { $(".career-page a.various, .vacancy-page a.various").fancybox({ maxWidth: 420, maxHeight: 540, fitToView: !1, width: "70%", height: "auto", autoSize: !1, closeClick: !1, openEffect: "fade", closeEffect: "fade", wrapCSS: "cv-popup-overlay", helpers: { overlay: { locked: !1 } }, beforeLoad: function() { $("html").addClass("fancybox-open") }, afterClose: function() { $("html").removeClass("fancybox-open") } }) }

    function m() {
        var a = $("[data-animate-it]");
        a.addClass("hidden"), setTimeout(function() {
            a.each(function() {
                var a = $(this);
                a.removeClass("hidden").addClass(a.data("animate-it") + " animated")
            })
        }, 100)
    }

    function n(a) { $.fancybox({ href: a, helpers: { overlay: { locked: !1, css: { background: "rgba(255, 255, 255, 0.9)" } } }, padding: 0 }) }

    function o() {
        function a(a) { g.html(a.success), hp.clearForm(d), d.removeClass("error"), $(".contact-form .input-box input, .contact-form .input-box textarea").removeClass("filled"), $(".contact-form textarea").removeAttr("style"), n("#msg-box"), e(), $.post(f) }

        function b() { d.removeClass("error"), n("#msg-box-error") }

        function c(a) {
            var b = {};
            $.each(a, function(a, c) { b["enquiry[" + a + "]"] = c }), d.addClass("error"), i.showErrors(b)
        }
        var d = $("form.contact-form");
        if (d.length) {
            var f = d.attr("action"),
                g = $(".msg-lightbox"),
                h = null,
                i = d.validate({
                    errorPlacement: function(a, b) { b.siblings("label").after(a) },
                    highlight: function(a) { $(a).parent().addClass("error") },
                    unhighlight: function(a) { $(a).parent().removeClass("error") },
                    invalidHandler: function(a, b) {
                        var c = b.numberOfInvalids();
                        c > 0 && (d.addClass("error"), b.showErrors())
                    },
                    submitHandler: function() { d.addClass("loading"), h = null, d.beenSubmitted || (d.beenSubmitted = !0, $.post(f, d.serialize()).done(function(a) { h = a }).always(function(d) { h && "object" != typeof h && (h = $.parseJSON(h)), h ? h.success ? a(h) : c(h) : b() })) },
                    rules: { "enquiry[name]": { required: !0 }, "enquiry[email]": { required: !0, email: !0 }, "enquiry[organization]": { required: !0 }, "enquiry[budget]": { required: !0 }, "enquiry[description]": { required: !0 } },
                    messages: { "enquiry[name]": { required: "Please enter your name" }, "enquiry[email]": { required: "Please enter a valid email address" }, "enquiry[organization]": { required: "Please enter your company name" }, "enquiry[budget]": { required: "Please select a ballpark budget" }, "enquiry[description]": { required: "Please give us some details" } }
                });
            return d
        }
    }

    function p() {
        $(".faq-page").length && $(".scroll-to").on("click", function(a) {
            a.preventDefault();
            var b = $(this).attr("href");
            if (b.length) {
                var c = $(".header").height(),
                    d = $(b).offset().top;
                $("html, body").animate({ scrollTop: d - c }, 400)
            }
        })
    }

    function q(a) {
        function b(a) { a.addClass(e) }

        function c(a) { d(this) && a.removeClass("child-input-focused"), a.removeClass("just-focus") }

        function d(a) { return 0 === $.trim(a.val()).length }
        var e = "child-input-focused just-focus";
        a = $(a), a.each(function() {
            var a = $(this),
                d = a.parent().parent();
            a.bind("focus", b.bind(a, d)), a.bind("blur", c.bind(a, d))
        })
    }

    function r() {
        var a = ($("header"), $(".entry-text"), $(document));
        $("body"), a.on("scroll.homeHeaderObserve", O)
    }

    function s() {
        $carousels = $(".gallery-photos .holder, .gallery-clients .holder, .gallery-partners .holder"), $carousels.each(function() {
            var a = $(this),
                b = a.data("autoplay");
            a.imagesLoaded(function() { a.owlCarousel({ loop: !0, autoWidth: !0, center: !0, autoplay: b, autoplaySpeed: 800, autoplayHoverPause: !0, slideBy: 1, touchDrag: !0, onTranslate: u, onTranslated: u, onDrag: u, onResize: u }) })
        })
    }

    function t() { U = new LazyLoad({ elements_selector: ".lazy:not(.has-webp)" }), V = new LazyLoad({ elements_selector: ".lazy.has-webp", to_webp: !0 }), u() }

    function u() { U.update(), V.update() }

    function v() {
        $carousels = $(".team .holder"), $carousels.each(function() {
            var a = $(this);
            a.data("autoplay");
            a.imagesLoaded(function() { new Swiper(".team .holder", { speed: 400, slidesPerView: "auto", loop: !0, loopedSlides: 10, navigation: { nextEl: ".swiper-button-next", prevEl: ".swiper-button-prev" }, breakpoints: { 480: { centeredSlides: !0 } }, on: { slideChange: u, slideChangeTransitionEnd: u, touchStart: u, sliderMove: u, click: u } }) })
        })
    }

    function w() { $("body").mobileNav({ hideOnClickOutside: !0, menuActiveClass: "nav-active", menuOpener: ".nav-opener", menuDrop: ".nav-box" }) }

    function x() { return new WOW({ offset: 200, mobile: !1 }).init() }

    function y() { if ($(".fintech-page")) return new WOW({ offset: 100, mobile: !1 }).init() }

    function z() {
        var a = window,
            b = a.Intercom;
        if ("function" == typeof b) b("reattach_activator"), b("update", intercomSettings);
        else {
            var c = document,
                d = function() { d.c(arguments) };
            d.q = [], d.c = function(a) { d.q.push(a) }, a.Intercom = d,
                function() {
                    var a = c.createElement("script");
                    a.type = "text/javascript", a.async = !0, a.src = "https://widget.intercom.io/widget/dg9qfwj1";
                    var b = c.getElementsByTagName("script")[0];
                    b.parentNode.insertBefore(a, b)
                }()
        }
    }

    function A() {
        function a(a) {
            function b(b) { b && b.preventDefault(), $bdy.removeClass("hide-main-section"), $bdy.addClass("slide-entry-section"), W.elementsInit(), clearTimeout(c), c = setTimeout(function() { a.afterCb && a.afterCb($bdy, d) }, e) }
            var c, d = $(a.cnt),
                e = 300;
            if (d.length) {
                var f = $(a.arrow);
                $nextEl = d.next(), $bdy = $("body"), debouncedHandler = hp.debounce(b, 1e3, !0), a.beforeCb && a.beforeCb($bdy, d), "#expertise" !== window.location.hash ? (f.on("click", debouncedHandler), d.on("mousewheel", function(a) { a.deltaY < 0 && debouncedHandler() }), d.on("swipeup", debouncedHandler)) : (e = 0, b(), $bdy.addClass("prevent-main-section"))
            }
        }
        a({ cnt: ".entry-section", arrow: ".entry-section .btn-scroll", cookie: "main-section", afterCb: function(a, b) { O(), z() } }), a({ cnt: ".how-we-work-page .title-box", arrow: ".how-we-work-page .title-box .btn-scroll", beforeCb: function(a, b) { $("header").css("margin-right", hp.getScrollSize()) }, afterCb: function(a, b) { hp.scrollDebounceStop(), a.removeClass("overflow").addClass("show-main"), b.remove(), $("header").css("margin-right", 0), x(), P.check() } })
    }

    function B() {
        function a() {
            function a() { return hp.scrollTo(0), !1 }
            var b = $("#footer");
            b.find(".arrow-up");
            $("#footer .arrow-up, .partners .arrow-up").bind("click", a)
        }
        a()
    }

    function C() {
        var a = $(".g-slider");
        a.length && a.owlCarousel({ items: 1, autoplay: !0, autoplayTimeout: 4e3, loop: !0, smartSpeed: 800, animateIn: "fadeIn", animateOut: "fadeOut", margin: 150 })
    }

    function D() {
        var a = $(".g-offer-slider");
        a.length && a.owlCarousel({ items: 1, autoplay: !0, loop: !0, autoplayTimeout: 4e3, smartSpeed: 600 })
    }

    function E() {
        var a = $(".fintech-page .tech-stack__list");
        if (a && !($(window).width() > 1024)) {
            a.owlCarousel({ items: 1, loop: !0, dots: !0, responsive: { 0: { items: 1 }, 480: { items: 2 }, 640: { items: 3 }, 768: { items: 4 } } });
            var b = $(".financing-types__list");
            b && ($(window).width() > 650 || b.owlCarousel({ items: 1, loop: !0, dots: !0, responsive: { 0: { items: 1 }, 480: { items: 2 }, 650: { items: 3 }, 768: { items: 4 } } }))
        }
    }

    function F() {
        var a = $(".cookie"),
            b = a.find(".cookie__btn"),
            c = $("body"),
            d = !1;
        localStorage.getItem("cookiePopup") && (d = !0), d || (a.show(), c.addClass("cookie-popup-shown"), b.click(function() { localStorage.setItem("cookiePopup", !0), a.fadeOut(), c.removeClass("cookie-popup-shown") }))
    }

    function G() {
        var a = 980,
            b = window.innerWidth,
            c = $(".fintech-development__item"),
            d = b < a;
        c.length && c.each(function(a, b) {
            var c = $(b).find(".media-holder"),
                e = $(b).find(".text-holder"),
                f = $(b).find(".subtitle");
            d ? c.prepend(f) : e.prepend(f)
        })
    }

    function H() {
        var a = $(".nav-box .has-sub-menu"),
            b = "expanded",
            c = "active";
        a.each(function() {
            var a = $(this).find(".sub-menu .active");
            $(this).hasClass("active") && $(this).attr("data-active", !0), a.length && $(this).attr("data-has-active-items", !0)
        }), $(window).width() < 1200 && a.on("click", function(a) { $(this).hasClass(b) || (a.preventDefault(), $(this).siblings().removeClass(b), $(this).addClass(b)) }), $(window).width() >= 1200 && a.on("mouseenter", function() { $(this).attr("data-has-active-items") && $(this).removeClass(c) }).on("mouseleave", function() { $(this).attr("data-active") && $(this).addClass(c) })
    }

    function I() {
        var a = 1200,
            b = window.innerWidth,
            c = $(".mobile-app-description__inner"),
            d = b < a,
            e = c.find(".media-holder"),
            f = c.find(".text-holder"),
            g = f.find(".description p:last-of-type"),
            h = c.find(".media-content");
        d ? $("body").hasClass("bespoke-page") ? f.find(".description").append(h) : g.before(h) : e.append(h)
    }

    function J() {
        var a = 768,
            b = window.innerWidth,
            c = $(".mobile-app-engagement__item"),
            d = b < a;
        c.length && c.each(function(a, b) {
            var c = $(b).find(".h3"),
                e = $(b).find(".img-wrapper");
            d ? e.before(c) : e.after(c)
        })
    }

    function K() {
        var a = $(".mobile-app .tech-stack__list");
        a && ($(window).width() > 767 || a.owlCarousel({ items: 1, loop: !0, dots: !0, responsive: { 0: { items: 1 }, 768: { items: 3, dots: !1 } } }))
    }

    function L() {
        if ($(".wp-development-page").length) {
            var a = 980,
                b = window.innerWidth < a,
                c = $(".wp-development__item"),
                d = $(".wp-dev");
            if (c.each(function() {
                    var a = $(this).find(".media-holder img"),
                        c = $(this).find(".subtitle");
                    b ? a.before(c) : $(this).find(".text-holder").prepend(c)
                }), d.length) {
                var e = d.find("img"),
                    f = d.find("h3");
                b ? f.after(e) : d.find(".wp-dev__media").append(e)
            }
        }
    }

    function M() {
        var a = $(".tech__carousel");
        if (a.length) {
            a.on("touchstart", function(a) { a.preventDefault() });
            var b = a.owlCarousel({ mouseDrag: !1, responsive: { 0: { items: 1 }, 768: { items: 3 }, 1200: { items: 6 } }, onInitialized: function() { N(".tech__item .logo") } });
            b.on("changed.owl.carousel", function(a) { a.item.count - a.page.size == a.item.index && $(a.target).find(".owl-dots div:last").addClass("active").siblings().removeClass("active") })
        }
    }

    function N(a) {
        var b = 0;
        $(a).each(function() { $(this).height() > b && (b = $(this).height()) }), $(a).height(b)
    }

    function O() {
        var a, b = $(window).scrollTop();
        $("body").hasClass("page-main") && (a = $(".contact-box").offset().top), b < 100 ? $("body").removeClass("header-active") : !$("body").hasClass("how-we-work-page") && b >= 100 && $("body").addClass("header-active"), void 0 !== a && b >= a ? $("body").addClass("header-hidden") : $("body").removeClass("header-hidden")
    }
    var P = j();
    $(function() { P.init(), A(), B(), g(), h(), i(), w(), q(".contact-form input, .contact-form textarea"), o(), m(), k(), l(), C(), D(), y(), p(), E(), F(), G(), H(), I(), K(), L(), M(), N(".tech__item .logo"), x(), s(), v(), r(), d(), e(), c(), a(), t(), O(), b() }), $(window).on("resize", function() { E(), G(), I(), J(), K(), L() });
    var Q = jQuery(window),
        R = jQuery(document),
        S = "anim-strip",
        T = 270;
    jQuery(".get-in-touch-list > li").each(function(a) {
        function b() { R.scrollTop() + Q.height() >= c.offset().top + c.innerHeight() + T && (c.addClass(S), R.off(d)) }
        var c = jQuery(this),
            d = "scroll.sectionScrollEvent" + a + " resize.sectionScrollEvent" + a + " orientationchange.sectionScrollEvent" + a;
        R.on(d, b)
    }), $(".contact-form .text-field:not(.file-field)").focus(function() { $(this).parent().addClass("row--focused") }).blur(function() { $(this).parent().removeClass("row--focused") }).on("input", function() { $(this).val() ? $(this).parent().addClass("row--completed") : $(this).parent().removeClass("row--completed") }), window.addEventListener ? window.addEventListener("load", f, !1) : window.attachEvent && window.attachEvent("onload", f), window.initMap = function() {
        var a, b, c, d = $(".map-box .map");
        if (d.length) {
            c = { position: { lat: 51.518145, lng: -.132248 }, markerUrl: "images/marker.png" };
            var e = [
                [49.9893457, 36.223719],
                [51.518145, -.132248],
                [34.739113, 33.008173]
            ];
            a = new google.maps.Map(d.get(0), { mapTypeControl: !1, zoom: 16, center: c.position, draggable: !0, styles: [{ elementType: "geometry", stylers: [{ saturation: -100 }] }] });
            for (var f = 0; f < e.length; f++) {
                var g = e[f];
                b = new google.maps.Marker({ position: { lat: g[0], lng: g[1] }, icon: c.markerUrl, map: a })
            }
            return $(".view-map").each(function() {
                $(this).click(function(b) {
                    b.preventDefault();
                    var c = $(this).attr("data-lat"),
                        d = $(this).attr("data-lang");
                    if (a.setCenter({ lat: +c, lng: +d }), $(".view-map").removeClass("active"), $(this).addClass("active"), $(window).width() < 1200) {
                        var e = $(".map-box").offset().top,
                            f = $(".header").height();
                        $("html, body").animate({ scrollTop: e - f }, 400)
                    }
                })
            }), a
        }
    };
    var U, V, W = {
        elementsInit: function() { this.footer = document.getElementById("footer"), this.footer && (this.footerPosition = this.footer.offsetTop, this.body = document.body, this.windowHeight = window.innerHeight, this.documentHeight = document.documentElement.scrollHeight) },
        calcSizes: function() {
            var a = this;
            window.clearTimeout(b);
            var b = setTimeout(function() { a.footerPosition = this.footer.offsetTop, a.windowHeight = window.innerHeight, a.documentHeight = document.documentElement.scrollHeight }, 400)
        },
        addRemoveClass: function(a) { a ? this.body.classList.add("hide-btn") : this.body.classList.remove("hide-btn") },
        checkOffset: function() { window.pageYOffset + this.windowHeight >= this.footerPosition ? this.addRemoveClass(!0) : this.addRemoveClass(!1) },
        resize: function() {
            var a = this;
            window.addEventListener("resize", function() { a.calcSizes() })
        },
        scroll: function() {
            var a = this;
            document.addEventListener("scroll", function() { a.checkOffset(), a.calcSizes() })
        },
        init: function() { this.elementsInit(), this.scroll(), this.resize() }
    };
    $(".btn-scroll").on("click", function(a) { a.preventDefault(), $("html, body").animate({ scrollTop: $($.attr(this, "href")).offset().top - $(".header").height() }, 500) }), $('.page-main a[href="/"]').click(function(a) { a.preventDefault(), $("html, body").animate({ scrollTop: $("#main").offset().top - $(".header").height() }, 500) })
}(), $.validator.addMethod("filesize", function(a, b, c) { return this.optional(b) || b.files[0].size / Math.pow(1024, 2) <= c }, "File size must be less than {0} Mb"), $.validator.addMethod("customemail", function(a, b) { return /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/.test(a) }, "Please enter a valid email address"), $(document).ready(function() {
    function a(a) { d(), $("#errors-output").hide(), g.resetForm(), f(), $("body").addClass("has-success-popup") }

    function b() { d(), $("#errors-output").hide(), g.resetForm(), f(), $("body").addClass("has-error-popup") }

    function c(a) {
        d();
        var b = {},
            c = [],
            e = $("#application-form .row"),
            f = e.find(".text-field");
        for (var g in a) b[g] = a[g][0] || "", c.push(g);
        $("#application-form").addClass("error-form"), $.each(c, function(a, b) { $(f).each(function() { $(this).attr("name") == b && $(this).parents(".row").removeClass("row--valid").addClass("row--invalid row--error") }) }), $(".row--invalid").find(".text-field").focus()
    }

    function d() { $(".application-form").removeClass("loading") }

    function e() {
        function a(a) {
            var b = this.files,
                c = $(this).parent(),
                d = c.find(".file-output .file-name");
            if (b.length) {
                var e = (b[0].size / Math.pow(1024, 2)).toFixed(2),
                    f = b[0].type,
                    g = new RegExp("(application/pdf|text/plain)", "gi"),
                    h = f.match(g);
                d.text(b[0].name), $(this).blur(), !h && e > 3 ? c.removeClass("row--valid").addClass("row--completed row--invalid") : !h && e < 3 ? c.removeClass("row--valid").addClass("row--completed row--invalid") : h && e > 3 ? c.removeClass("row--valid").addClass("row--completed row--invalid") : h && e < 3 && c.removeClass("row--invalid").addClass("row--completed row--valid")
            }
        }
        $(".file-name").on("click", function() { $(this).parents(".row").find(".file-field").trigger("click") });
        var b = [].slice.call(document.querySelectorAll(".file-field"));
        $(b).each(function() { $(this).on("change", a) }), $(".file-delete").on("click", function() {
            var a = ($(this).parents("#application-form"), $(this).parents(".row")),
                b = $(this).parents(".row").find(".file-field"),
                c = $(this).parents(".row").find(".file-output .file-name");
            a.removeClass("row--valid row--completed").addClass("row--invalid"), b.val(""), c.text(""), a.find(".error").parent().remove(), $("#application-form").addClass("error-form")
        })
    }

    function f() { $("#application-form")[0].reset(), $("#application-form select").val("").trigger("change"), $(".file-output .file-name").text(""), $("#application-form .row").removeClass("row--valid row--invalid row--completed"), $("#application-form .text-field.copy").remove() }
    if ($("#application-form").length) {
        $(".scholarship-page a.button").on("click", function(a) {
            a.preventDefault();
            var b = $(this).attr("href"),
                c = $(".header").height() || 0;
            if ($(b).length) {
                var d = $(b).offset().top - c;
                $("body, html").stop().animate({ scrollTop: d }, 500)
            }
        }), f();
        var g = $("#application-form").validate({
            wrapper: "div",
            rules: { name: { required: !0 }, email: { required: !0, customemail: !0 }, residence: { required: !0 }, school: { required: !0 }, graduation: { required: !0 }, gpa: { required: !0, digits: !0, min: 0 }, college: { required: !0 }, enrollment: { required: !0 }, file_letter: { required: !0, extension: "doc|pdf|txt", filesize: 3 }, file_essay: { required: !0, extension: "doc|pdf|txt", filesize: 3 }, privacy: { required: !0 } },
            messages: { name: { required: "" }, email: { required: "", customemail: "Please enter a valid email address" }, residence: { required: "" }, school: { required: "" }, graduation: { required: "" }, gpa: { required: "" }, college: { required: "" }, enrollment: { required: "" }, file_letter: { required: "", extension: "Please upload the appropriate format", filesize: "The document exceeds 3 Mb" }, file_essay: { required: "", extension: "Please upload the appropriate format", filesize: "The document exceeds 3 Mb" }, privacy: { required: "" } },
            highlight: function(a) { $(a).parent().removeClass("row--valid").addClass("row--invalid") },
            unhighlight: function(a) { $(a).parent().removeClass("row--invalid").addClass("row--valid") },
            onfocusout: function(a) { "checkbox" !== $(a).attr("type") && (this.element(a), g.numberOfInvalids() > 0 ? $(this.currentForm).addClass("error-form") : $(this.currentForm).removeClass("error-form"), "file" === $(a).attr("type") && !$(a).val()) },
            onclick: function(a) {
                $(a).valid();
                var b = g.numberOfInvalids();
                b > 0 ? $(g.currentForm).addClass("error-form") : $(g.currentForm).removeClass("error-form")
            },
            errorPlacement: function(a, b) {
                if ("file" === $(b).attr("type")) $(b).parents(".row").append(a);
                else {
                    if ("checkbox" === $(b).attr("type")) return;
                    a.insertAfter(b)
                }
            },
            invalidHandler: function(a, b) { b.numberOfInvalids() > 0 ? $(b.currentForm).addClass("error-form") : $(b.currentForm).removeClass("error-form") },
            submitHandler: function(d, e) { e.preventDefault(); var f = $(d).attr("action"); return $(d).parents(".application-form").addClass("loading"), $.ajax({ url: f, type: "POST", data: new FormData(d), cache: !1, processData: !1, contentType: !1, success: function(b) { "object" != typeof b && (b = $.parseJSON(b)), b.status ? a() : c(b.errors) }, error: function(a, c, d) { b() } }), !1 }
        });
        $(".application-form .success").on("click", function(a) {
            a.preventDefault();
            var b = $(".close-popup .icon-cross")[0];
            this !== a.target && a.target != b || $("body").removeClass("has-success-popup")
        }), $(".application-form .server-error").on("click", function(a) { a.preventDefault(), this === a.target && $("body").removeClass("has-error-popup") }), $(window).width() > 768 && $("#application-form select").select2({ minimumResultsForSearch: -1 }).on("select2:open", function(a) { $(this).parents(".row").addClass("row--focused") }).on("select2:select", function() { $(this).parents(".row").addClass("row--completed") }).on("select2:close", function(a) {
            var b = $(a.currentTarget).val();
            $(this).parents(".row").removeClass("row--focused"), $(this).valid(), b || $(this).parents(".row").removeClass("row--focused")
        }), e(), $("#application-form .text-field:not(.file-field)").focus(function() { $(this).parent().addClass("row--focused") }).blur(function() { $(this).parent().removeClass("row--focused") }).on("input", function() { $(this).val() ? $(this).parent().addClass("row--completed") : $(this).parent().removeClass("row--completed") }), $("#application-form .add-field").on("click", function() {
            var a = $(this).parents(".row"),
                b = a.find(".text-field"),
                c = 0;
            if ($(b).each(function() { c = 0, "" === $(this).val() && c++ }), !(c > 0)) {
                var d = a.find(".text-field").first().clone(),
                    e = a.find(".text-field").length,
                    f = d.attr("name"),
                    g = d.attr("id") + "-" + e;
                d.val("").addClass("copy"), d.attr("name", f), d.attr("id", g), a.append(d), $(".text-field.copy").on("change", function() { "" === $(this).val() && $(this).remove() })
            }
        })
    }
});
var filter = {
    init: function() { this.filter(), this.scroll(), this.clone() },
    filter: function() {
        var a, b = $(".faq__button"),
            c = $(".faq__item"),
            d = $(".faq__drop-container"),
            e = $(".faq__drop"),
            f = $(".faq__drop-filter"),
            g = location.hash.split("#")[1] || "all";
        b.each(function(a, b) { $(this).attr("data-filter") === g && $(this).addClass("active").siblings().removeClass("active") }), a = $(".faq__button.active"), $(c).each(function() { $(this).removeClass("active").find(".faq__descr").hide(), "all" === g ? $(b[0]).addClass("active").find(".faq__descr").show() : $(this).data("target") === g ? $(this).show() : $(this).hide() }), $($(c).filter(":visible")[0]).addClass("active").find(".faq__descr").show(), $(window).width() < 768 && f.text(a.text()), e.on("click", function() { $(this).toggleClass("expanded"), d.slideToggle("fast") }), b.on("click", function() {
            if (g = $(this).data("filter"), $(window).width() < 768) {
                var a = $(this).text();
                f.text(a), d.slideUp("fast"), e.removeClass("expanded")
            }
            location.hash = g, $(this).addClass("active").siblings().removeClass("active"), $(c).each(function() { $(this).removeClass("active").find(".faq__descr").hide(), "all" === g ? c.show() : $(this).data("target") === g ? $(this).show() : $(this).hide() })
        })
    },
    clone: function() {
        var a = $(".c-footer .arrow-up").clone();
        a.addClass("arrow-up--cloned"), $(".c-footer").append(a)
    },
    scroll: function() { $(window).scroll(function() { $(window).scrollTop() > $(window).height() ? $(".faq-page").addClass("show-button") : $(".faq-page").removeClass("show-button") }) }
};
$(".faq-section").length && (filter.init(), accordion());
var filterVacancy = {
    filterVacancyInit: function() {
        function a(a) {
            if ($(this).hasClass("active") && "all" !== $(this).data("filter")) c.css("display", "block"), d.addClass("active"), $(this).removeClass("active");
            else {
                var e;
                c.css("display", "none"), e = $(this).data("filter"), b.removeClass("active"), $(this).addClass("active"), c.each(function(a, b) { $(b).data("target") === e && $(b).css("display", "block") }), ("all" === e || $(a).hasClass("off-tag")) && (c.css("display", "block"), d.addClass("active"), $(a).hasClass("off-tag") && $(a).closest(".filter-btn").removeClass("active"))
            }
        }
        var b = $(".filter-vacancy-buttons .filter-btn"),
            c = $(".filter-vacancy-holder li"),
            d = $('.filter-vacancy-buttons .filter-btn[data-filter="all"]');
        b.on("click", function(b) { b.preventDefault(), a.call(this, b.target) })
    }
};
$(".filter-vacancy-block").length && filterVacancy.filterVacancyInit();
var cvUpload = {
    cvUploadInit: function() {
        function a(a) {
            if (a.files && a.files[0]) {
                var c = new FileReader;
                c.onload = function(b) { $(".file-upload-image").attr("src", b.target.result), $(".file-upload-content").show(), $(".image-title").html(a.files[0].name), $(".cv-upload-form .g-placeholder").css("display", "none"), $(".upload-file-label .image-title").css("display", "inline"), $(".cv-upload-form").addClass("active") }, c.readAsDataURL(a.files[0])
            } else b()
        }

        function b() { $(".file-upload-input").replaceWith($(".file-upload-input").clone(!0)), $(".file-upload-content").hide(), $(window).width() < 768 && (d.css("display", "block"), $(".cv-upload-form .g-errors-hold").html("")), $(".cv-upload-form .cv-popup-btn").addClass("disabled"), $(".upload-file-label .image-title").html(""), $(".upload-file-label .image-title").css("display", "none"), $(".cv-upload-form .g-placeholder").css("display", "block"), $(".cv-upload-form").removeClass("active") }

        function c() { $(".cv-popup-overlay").addClass("cv-sent"), $(".cv-upload-form .cv-popup-btn").addClass("disabled"), $(".cv-upload-form").removeClass("active"), $(".upload-file-label .image-title").html(""), $(".upload-file-label .image-title").css("display", "none"), $(".cv-upload-form .g-placeholder").css("display", "block"), $(window).width() < 768 && (f.css("display", "none"), d.css("display", "block")), e.val("") }
        var d = $(".cv-upload-form .file-upload-btn"),
            e = $(".cv-upload-form .file-upload-input"),
            f = $(".cv-upload-form .remove-image");
        d.on("click", function() { $(".cv-upload-form .file-upload-input").trigger("click") }), e.on("change", function() { a(this), $(this).val().length && ($(".cv-upload-form .cv-popup-btn").removeClass("disabled"), $(".cv-upload-form .g-errors-hold").html(""), $(window).width() < 768 && (d.css("display", "none"), f.css("display", "block"))) }), f.on("click", function() { b() });
        $(".cv-upload-form").validate({ rules: { file_cv: { required: !0, extension: "txt|doc|docx|pdf|rtf|odt|jpg|jpeg|png|gif", filesize: 3 } }, messages: { file_cv: { required: "Please upload file", extension: "Wrong file format. The allowed file types are txt, doc, docx, pdf, rtf, odt, jpg, jpeg, png, gif. Please try again.", filesize: "The file should not exceed 3 Mb. Please upload another file." } }, errorPlacement: function(a, b) { $(".cv-upload-form .g-errors-hold").html(a) }, submitHandler: function(a, b) { b.preventDefault(); var d = $(a).attr("action"); return $.ajax({ url: d, type: "POST", data: new FormData(a), cache: !1, processData: !1, contentType: !1, success: function(a) { "object" != typeof a && (a = $.parseJSON(a)), a.status ? c() : $(".cv-upload-form .g-errors-hold").html(a.errors.file_cv[0]) }, error: function(a, b, c) {} }), !1 } });
        navigator.userAgent.match(/Trident\/7\./) && $("body").addClass("ie")
    }
};
$(".cv-upload-form").length && cvUpload.cvUploadInit();
var placeholderAnimate = { placeholderAnimateInit: function() { $(".contact-form .input-box input, .contact-form .input-box textarea").val(""), $(".contact-form .input-box input, .contact-form .input-box textarea").on("input blur", function(a) { "" != $(a.target).val() ? $(a.target).addClass("filled") : $(a.target).removeClass("filled") }) } };
$(".contact-form .input-box label").length && placeholderAnimate.placeholderAnimateInit();
var goToVacancies = {
    goToVacanciesInit: function() {
        var a = $("body"),
            b = $(".header");
        setTimeout(function() { $(window).scrollTop($("#vacancies-block").offset().top - parseInt(b.innerHeight())), a.css("opacity", 1) }, 500)
    }
};
"vacancies-block" === window.location.hash.split("#")[1] && goToVacancies.goToVacanciesInit();