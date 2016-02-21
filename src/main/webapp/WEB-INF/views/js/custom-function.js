function statusChangeCallback(e) {
    return console.log("statusChangeCallback-->", e), "connected" === e.status ? fbRegistration(e) : "not_authorized" === e.status ? FB.login(function(e) {
        return e.authResponse ? fbRegistration(e) : void 0
    }, {
        scope: fbScope
    }) : FB.login(function(e) {
        return e.authResponse ? fbRegistration(e) : void 0
    }, {
        scope: fbScope
    })
}

function loginStatusCallback(e) {
    return console.log("loginStatusCallback-->", e), "connected" !== e.status ? FB.login(function(e) {}, {
        scope: fbScope
    }) : fbRegistration(e)
}

function hex_md5(e) {
    return rstr2hex(rstr_md5(str2rstr_utf8(e)))
}

function hex_hmac_md5(e, t) {
    return rstr2hex(rstr_hmac_md5(str2rstr_utf8(e), str2rstr_utf8(t)))
}

function md5_vm_test() {
    return "900150983cd24fb0d6963f7d28e17f72" == hex_md5("abc").toLowerCase()
}

function rstr_md5(e) {
    return binl2rstr(binl_md5(rstr2binl(e), 8 * e.length))
}

function rstr_hmac_md5(e, t) {
    var n = rstr2binl(e);
    n.length > 16 && (n = binl_md5(n, 8 * e.length));
    for (var i = Array(16), r = Array(16), s = 0; 16 > s; s++) i[s] = 909522486 ^ n[s], r[s] = 1549556828 ^ n[s];
    var o = binl_md5(i.concat(rstr2binl(t)), 512 + 8 * t.length);
    return binl2rstr(binl_md5(r.concat(o), 640))
}

function rstr2hex(e) {
    try {} catch (t) {
        hexcase = 0
    }
    for (var n, i = hexcase ? "0123456789ABCDEF" : "0123456789abcdef", r = "", s = 0; s < e.length; s++) n = e.charCodeAt(s), r += i.charAt(n >>> 4 & 15) + i.charAt(15 & n);
    return r
}

function str2rstr_utf8(e) {
    for (var t, n, i = "", r = -1; ++r < e.length;) t = e.charCodeAt(r), n = r + 1 < e.length ? e.charCodeAt(r + 1) : 0, t >= 55296 && 56319 >= t && n >= 56320 && 57343 >= n && (t = 65536 + ((1023 & t) << 10) + (1023 & n), r++), 127 >= t ? i += String.fromCharCode(t) : 2047 >= t ? i += String.fromCharCode(192 | t >>> 6 & 31, 128 | 63 & t) : 65535 >= t ? i += String.fromCharCode(224 | t >>> 12 & 15, 128 | t >>> 6 & 63, 128 | 63 & t) : 2097151 >= t && (i += String.fromCharCode(240 | t >>> 18 & 7, 128 | t >>> 12 & 63, 128 | t >>> 6 & 63, 128 | 63 & t));
    return i
}

function rstr2binl(e) {
    for (var t = Array(e.length >> 2), n = 0; n < t.length; n++) t[n] = 0;
    for (var n = 0; n < 8 * e.length; n += 8) t[n >> 5] |= (255 & e.charCodeAt(n / 8)) << n % 32;
    return t
}

function binl2rstr(e) {
    for (var t = "", n = 0; n < 32 * e.length; n += 8) t += String.fromCharCode(e[n >> 5] >>> n % 32 & 255);
    return t
}

function binl_md5(e, t) {
    e[t >> 5] |= 128 << t % 32, e[(t + 64 >>> 9 << 4) + 14] = t;
    for (var n = 1732584193, i = -271733879, r = -1732584194, s = 271733878, o = 0; o < e.length; o += 16) {
        var a = n,
            l = i,
            c = r,
            u = s;
        n = md5_ff(n, i, r, s, e[o + 0], 7, -680876936), s = md5_ff(s, n, i, r, e[o + 1], 12, -389564586), r = md5_ff(r, s, n, i, e[o + 2], 17, 606105819), i = md5_ff(i, r, s, n, e[o + 3], 22, -1044525330), n = md5_ff(n, i, r, s, e[o + 4], 7, -176418897), s = md5_ff(s, n, i, r, e[o + 5], 12, 1200080426), r = md5_ff(r, s, n, i, e[o + 6], 17, -1473231341), i = md5_ff(i, r, s, n, e[o + 7], 22, -45705983), n = md5_ff(n, i, r, s, e[o + 8], 7, 1770035416), s = md5_ff(s, n, i, r, e[o + 9], 12, -1958414417), r = md5_ff(r, s, n, i, e[o + 10], 17, -42063), i = md5_ff(i, r, s, n, e[o + 11], 22, -1990404162), n = md5_ff(n, i, r, s, e[o + 12], 7, 1804603682), s = md5_ff(s, n, i, r, e[o + 13], 12, -40341101), r = md5_ff(r, s, n, i, e[o + 14], 17, -1502002290), i = md5_ff(i, r, s, n, e[o + 15], 22, 1236535329), n = md5_gg(n, i, r, s, e[o + 1], 5, -165796510), s = md5_gg(s, n, i, r, e[o + 6], 9, -1069501632), r = md5_gg(r, s, n, i, e[o + 11], 14, 643717713), i = md5_gg(i, r, s, n, e[o + 0], 20, -373897302), n = md5_gg(n, i, r, s, e[o + 5], 5, -701558691), s = md5_gg(s, n, i, r, e[o + 10], 9, 38016083), r = md5_gg(r, s, n, i, e[o + 15], 14, -660478335), i = md5_gg(i, r, s, n, e[o + 4], 20, -405537848), n = md5_gg(n, i, r, s, e[o + 9], 5, 568446438), s = md5_gg(s, n, i, r, e[o + 14], 9, -1019803690), r = md5_gg(r, s, n, i, e[o + 3], 14, -187363961), i = md5_gg(i, r, s, n, e[o + 8], 20, 1163531501), n = md5_gg(n, i, r, s, e[o + 13], 5, -1444681467), s = md5_gg(s, n, i, r, e[o + 2], 9, -51403784), r = md5_gg(r, s, n, i, e[o + 7], 14, 1735328473), i = md5_gg(i, r, s, n, e[o + 12], 20, -1926607734), n = md5_hh(n, i, r, s, e[o + 5], 4, -378558), s = md5_hh(s, n, i, r, e[o + 8], 11, -2022574463), r = md5_hh(r, s, n, i, e[o + 11], 16, 1839030562), i = md5_hh(i, r, s, n, e[o + 14], 23, -35309556), n = md5_hh(n, i, r, s, e[o + 1], 4, -1530992060), s = md5_hh(s, n, i, r, e[o + 4], 11, 1272893353), r = md5_hh(r, s, n, i, e[o + 7], 16, -155497632), i = md5_hh(i, r, s, n, e[o + 10], 23, -1094730640), n = md5_hh(n, i, r, s, e[o + 13], 4, 681279174), s = md5_hh(s, n, i, r, e[o + 0], 11, -358537222), r = md5_hh(r, s, n, i, e[o + 3], 16, -722521979), i = md5_hh(i, r, s, n, e[o + 6], 23, 76029189), n = md5_hh(n, i, r, s, e[o + 9], 4, -640364487), s = md5_hh(s, n, i, r, e[o + 12], 11, -421815835), r = md5_hh(r, s, n, i, e[o + 15], 16, 530742520), i = md5_hh(i, r, s, n, e[o + 2], 23, -995338651), n = md5_ii(n, i, r, s, e[o + 0], 6, -198630844), s = md5_ii(s, n, i, r, e[o + 7], 10, 1126891415), r = md5_ii(r, s, n, i, e[o + 14], 15, -1416354905), i = md5_ii(i, r, s, n, e[o + 5], 21, -57434055), n = md5_ii(n, i, r, s, e[o + 12], 6, 1700485571), s = md5_ii(s, n, i, r, e[o + 3], 10, -1894986606), r = md5_ii(r, s, n, i, e[o + 10], 15, -1051523), i = md5_ii(i, r, s, n, e[o + 1], 21, -2054922799), n = md5_ii(n, i, r, s, e[o + 8], 6, 1873313359), s = md5_ii(s, n, i, r, e[o + 15], 10, -30611744), r = md5_ii(r, s, n, i, e[o + 6], 15, -1560198380), i = md5_ii(i, r, s, n, e[o + 13], 21, 1309151649), n = md5_ii(n, i, r, s, e[o + 4], 6, -145523070), s = md5_ii(s, n, i, r, e[o + 11], 10, -1120210379), r = md5_ii(r, s, n, i, e[o + 2], 15, 718787259), i = md5_ii(i, r, s, n, e[o + 9], 21, -343485551), n = safe_add(n, a), i = safe_add(i, l), r = safe_add(r, c), s = safe_add(s, u)
    }
    return Array(n, i, r, s)
}

function md5_cmn(e, t, n, i, r, s) {
    return safe_add(bit_rol(safe_add(safe_add(t, e), safe_add(i, s)), r), n)
}

function md5_ff(e, t, n, i, r, s, o) {
    return md5_cmn(t & n | ~t & i, e, t, r, s, o)
}

function md5_gg(e, t, n, i, r, s, o) {
    return md5_cmn(t & i | n & ~i, e, t, r, s, o)
}

function md5_hh(e, t, n, i, r, s, o) {
    return md5_cmn(t ^ n ^ i, e, t, r, s, o)
}

function md5_ii(e, t, n, i, r, s, o) {
    return md5_cmn(n ^ (t | ~i), e, t, r, s, o)
}

function safe_add(e, t) {
    var n = (65535 & e) + (65535 & t),
        i = (e >> 16) + (t >> 16) + (n >> 16);
    return i << 16 | 65535 & n
}

function bit_rol(e, t) {
    return e << t | e >>> 32 - t
}! function(e, t) {
    function n(e) {
        return M.isWindow(e) ? e : 9 === e.nodeType ? e.defaultView || e.parentWindow : !1
    }

    function i(e) {
        if (!yt[e]) {
            var t = L.body,
                n = M("<" + e + ">").appendTo(t),
                i = n.css("display");
            n.remove(), ("none" === i || "" === i) && (ft || (ft = L.createElement("iframe"), ft.frameBorder = ft.width = ft.height = 0), t.appendChild(ft), gt && ft.createElement || (gt = (ft.contentWindow || ft.contentDocument).document, gt.write((M.support.boxModel ? "<!doctype html>" : "") + "<html><body>"), gt.close()), n = gt.createElement(e), gt.body.appendChild(n), i = M.css(n, "display"), t.removeChild(ft)), yt[e] = i
        }
        return yt[e]
    }

    function r(e, t) {
        var n = {};
        return M.each(wt.concat.apply([], wt.slice(0, t)), function() {
            n[this] = e
        }), n
    }

    function s() {
        vt = t
    }

    function o() {
        return setTimeout(s, 0), vt = M.now()
    }

    function a() {
        try {
            return new e.ActiveXObject("Microsoft.XMLHTTP")
        } catch (t) {}
    }

    function l() {
        try {
            return new e.XMLHttpRequest
        } catch (t) {}
    }

    function c(e, n) {
        e.dataFilter && (n = e.dataFilter(n, e.dataType));
        var i, r, s, o, a, l, c, u, d = e.dataTypes,
            h = {},
            p = d.length,
            f = d[0];
        for (i = 1; p > i; i++) {
            if (1 === i)
                for (r in e.converters) "string" == typeof r && (h[r.toLowerCase()] = e.converters[r]);
            if (o = f, f = d[i], "*" === f) f = o;
            else if ("*" !== o && o !== f) {
                if (a = o + " " + f, l = h[a] || h["* " + f], !l) {
                    u = t;
                    for (c in h)
                        if (s = c.split(" "), (s[0] === o || "*" === s[0]) && (u = h[s[1] + " " + f])) {
                            c = h[c], c === !0 ? l = u : u === !0 && (l = c);
                            break
                        }
                }!l && !u && M.error("No conversion from " + a.replace(" ", " to ")), l !== !0 && (n = l ? l(n) : u(c(n)))
            }
        }
        return n
    }

    function u(e, n, i) {
        var r, s, o, a, l = e.contents,
            c = e.dataTypes,
            u = e.responseFields;
        for (s in u) s in i && (n[u[s]] = i[s]);
        for (;
            "*" === c[0];) c.shift(), r === t && (r = e.mimeType || n.getResponseHeader("content-type"));
        if (r)
            for (s in l)
                if (l[s] && l[s].test(r)) {
                    c.unshift(s);
                    break
                }
        if (c[0] in i) o = c[0];
        else {
            for (s in i) {
                if (!c[0] || e.converters[s + " " + c[0]]) {
                    o = s;
                    break
                }
                a || (a = s)
            }
            o = o || a
        }
        return o ? (o !== c[0] && c.unshift(o), i[o]) : void 0
    }

    function d(e, t, n, i) {
        if (M.isArray(t)) M.each(t, function(t, r) {
            n || ze.test(e) ? i(e, r) : d(e + "[" + ("object" == typeof r ? t : "") + "]", r, n, i)
        });
        else if (n || "object" !== M.type(t)) i(e, t);
        else
            for (var r in t) d(e + "[" + r + "]", t[r], n, i)
    }

    function h(e, n) {
        var i, r, s = M.ajaxSettings.flatOptions || {};
        for (i in n) n[i] !== t && ((s[i] ? e : r || (r = {}))[i] = n[i]);
        r && M.extend(!0, e, r)
    }

    function p(e, n, i, r, s, o) {
        s = s || n.dataTypes[0], o = o || {}, o[s] = !0;
        for (var a, l = e[s], c = 0, u = l ? l.length : 0, d = e === st; u > c && (d || !a); c++) a = l[c](n, i, r), "string" == typeof a && (!d || o[a] ? a = t : (n.dataTypes.unshift(a), a = p(e, n, i, r, a, o)));
        return (d || !a) && !o["*"] && (a = p(e, n, i, r, "*", o)), a
    }

    function f(e) {
        return function(t, n) {
            if ("string" != typeof t && (n = t, t = "*"), M.isFunction(n))
                for (var i, r, s, o = t.toLowerCase().split(tt), a = 0, l = o.length; l > a; a++) i = o[a], s = /^\+/.test(i), s && (i = i.substr(1) || "*"), r = e[i] = e[i] || [], r[s ? "unshift" : "push"](n)
        }
    }

    function g(e, t, n) {
        var i = "width" === t ? e.offsetWidth : e.offsetHeight,
            r = "width" === t ? 1 : 0,
            s = 4;
        if (i > 0) {
            if ("border" !== n)
                for (; s > r; r += 2) n || (i -= parseFloat(M.css(e, "padding" + qe[r])) || 0), "margin" === n ? i += parseFloat(M.css(e, n + qe[r])) || 0 : i -= parseFloat(M.css(e, "border" + qe[r] + "Width")) || 0;
            return i + "px"
        }
        if (i = Ee(e, t), (0 > i || null == i) && (i = e.style[t]), $e.test(i)) return i;
        if (i = parseFloat(i) || 0, n)
            for (; s > r; r += 2) i += parseFloat(M.css(e, "padding" + qe[r])) || 0, "padding" !== n && (i += parseFloat(M.css(e, "border" + qe[r] + "Width")) || 0), "margin" === n && (i += parseFloat(M.css(e, n + qe[r])) || 0);
        return i + "px"
    }

    function m(e) {
        var t = L.createElement("div");
        return je.appendChild(t), t.innerHTML = e.outerHTML, t.firstChild
    }

    function v(e) {
        var t = (e.nodeName || "").toLowerCase();
        "input" === t ? y(e) : "script" !== t && "undefined" != typeof e.getElementsByTagName && M.grep(e.getElementsByTagName("input"), y)
    }

    function y(e) {
        ("checkbox" === e.type || "radio" === e.type) && (e.defaultChecked = e.checked)
    }

    function _(e) {
        return "undefined" != typeof e.getElementsByTagName ? e.getElementsByTagName("*") : "undefined" != typeof e.querySelectorAll ? e.querySelectorAll("*") : []
    }

    function b(e, t) {
        var n;
        1 === t.nodeType && (t.clearAttributes && t.clearAttributes(), t.mergeAttributes && t.mergeAttributes(e), n = t.nodeName.toLowerCase(), "object" === n ? t.outerHTML = e.outerHTML : "input" !== n || "checkbox" !== e.type && "radio" !== e.type ? "option" === n ? t.selected = e.defaultSelected : "input" === n || "textarea" === n ? t.defaultValue = e.defaultValue : "script" === n && t.text !== e.text && (t.text = e.text) : (e.checked && (t.defaultChecked = t.checked = e.checked), t.value !== e.value && (t.value = e.value)), t.removeAttribute(M.expando), t.removeAttribute("_submit_attached"), t.removeAttribute("_change_attached"))
    }

    function w(e, t) {
        if (1 === t.nodeType && M.hasData(e)) {
            var n, i, r, s = M._data(e),
                o = M._data(t, s),
                a = s.events;
            if (a) {
                delete o.handle, o.events = {};
                for (n in a)
                    for (i = 0, r = a[n].length; r > i; i++) M.event.add(t, n, a[n][i])
            }
            o.data && (o.data = M.extend({}, o.data))
        }
    }

    function x(e, t) {
        return M.nodeName(e, "table") ? e.getElementsByTagName("tbody")[0] || e.appendChild(e.ownerDocument.createElement("tbody")) : e
    }

    function k(e) {
        var t = fe.split("|"),
            n = e.createDocumentFragment();
        if (n.createElement)
            for (; t.length;) n.createElement(t.pop());
        return n
    }

    function C(e, t, n) {
        if (t = t || 0, M.isFunction(t)) return M.grep(e, function(e, i) {
            var r = !!t.call(e, i, e);
            return r === n
        });
        if (t.nodeType) return M.grep(e, function(e, i) {
            return e === t === n
        });
        if ("string" == typeof t) {
            var i = M.grep(e, function(e) {
                return 1 === e.nodeType
            });
            if (ue.test(t)) return M.filter(t, i, !n);
            t = M.filter(t, i)
        }
        return M.grep(e, function(e, i) {
            return M.inArray(e, t) >= 0 === n
        })
    }

    function T(e) {
        return !e || !e.parentNode || 11 === e.parentNode.nodeType
    }

    function N() {
        return !0
    }

    function S() {
        return !1
    }

    function j(e, t, n) {
        var i = t + "defer",
            r = t + "queue",
            s = t + "mark",
            o = M._data(e, i);
        o && ("queue" === n || !M._data(e, r)) && ("mark" === n || !M._data(e, s)) && setTimeout(function() {
            !M._data(e, r) && !M._data(e, s) && (M.removeData(e, i, !0), o.fire())
        }, 0)
    }

    function E(e) {
        for (var t in e)
            if (("data" !== t || !M.isEmptyObject(e[t])) && "toJSON" !== t) return !1;
        return !0
    }

    function A(e, n, i) {
        if (i === t && 1 === e.nodeType) {
            var r = "data-" + n.replace(B, "-$1").toLowerCase();
            if (i = e.getAttribute(r), "string" == typeof i) {
                try {
                    i = "true" === i ? !0 : "false" === i ? !1 : "null" === i ? null : M.isNumeric(i) ? +i : H.test(i) ? M.parseJSON(i) : i
                } catch (s) {}
                M.data(e, n, i)
            } else i = t
        }
        return i
    }

    function D(e) {
        var t, n, i = $[e] = {};
        for (e = e.split(/\s+/), t = 0, n = e.length; n > t; t++) i[e[t]] = !0;
        return i
    }
    var L = e.document,
        F = e.navigator,
        O = e.location,
        M = function() {
            function n() {
                if (!a.isReady) {
                    try {
                        L.documentElement.doScroll("left")
                    } catch (e) {
                        return void setTimeout(n, 1)
                    }
                    a.ready()
                }
            }
            var i, r, s, o, a = function(e, t) {
                    return new a.fn.init(e, t, i)
                },
                l = e.jQuery,
                c = e.$,
                u = /^(?:[^#<]*(<[\w\W]+>)[^>]*$|#([\w\-]*)$)/,
                d = /\S/,
                h = /^\s+/,
                p = /\s+$/,
                f = /^<(\w+)\s*\/?>(?:<\/\1>)?$/,
                g = /^[\],:{}\s]*$/,
                m = /\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,
                v = /"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,
                y = /(?:^|:|,)(?:\s*\[)+/g,
                _ = /(webkit)[ \/]([\w.]+)/,
                b = /(opera)(?:.*version)?[ \/]([\w.]+)/,
                w = /(msie) ([\w.]+)/,
                x = /(mozilla)(?:.*? rv:([\w.]+))?/,
                k = /-([a-z]|[0-9])/gi,
                C = /^-ms-/,
                T = function(e, t) {
                    return (t + "").toUpperCase()
                },
                N = F.userAgent,
                S = Object.prototype.toString,
                j = Object.prototype.hasOwnProperty,
                E = Array.prototype.push,
                A = Array.prototype.slice,
                D = String.prototype.trim,
                O = Array.prototype.indexOf,
                M = {};
            return a.fn = a.prototype = {
                constructor: a,
                init: function(e, n, i) {
                    var r, s, o, l;
                    if (!e) return this;
                    if (e.nodeType) return this.context = this[0] = e, this.length = 1, this;
                    if ("body" === e && !n && L.body) return this.context = L, this[0] = L.body, this.selector = e, this.length = 1, this;
                    if ("string" == typeof e) {
                        if (r = "<" !== e.charAt(0) || ">" !== e.charAt(e.length - 1) || e.length < 3 ? u.exec(e) : [null, e, null], r && (r[1] || !n)) {
                            if (r[1]) return n = n instanceof a ? n[0] : n, l = n ? n.ownerDocument || n : L, o = f.exec(e), o ? a.isPlainObject(n) ? (e = [L.createElement(o[1])], a.fn.attr.call(e, n, !0)) : e = [l.createElement(o[1])] : (o = a.buildFragment([r[1]], [l]), e = (o.cacheable ? a.clone(o.fragment) : o.fragment).childNodes), a.merge(this, e);
                            if (s = L.getElementById(r[2]), s && s.parentNode) {
                                if (s.id !== r[2]) return i.find(e);
                                this.length = 1, this[0] = s
                            }
                            return this.context = L, this.selector = e, this
                        }
                        return !n || n.jquery ? (n || i).find(e) : this.constructor(n).find(e)
                    }
                    return a.isFunction(e) ? i.ready(e) : (e.selector !== t && (this.selector = e.selector, this.context = e.context), a.makeArray(e, this))
                },
                selector: "",
                jquery: "1.7.2",
                length: 0,
                size: function() {
                    return this.length
                },
                toArray: function() {
                    return A.call(this, 0)
                },
                get: function(e) {
                    return null == e ? this.toArray() : 0 > e ? this[this.length + e] : this[e]
                },
                pushStack: function(e, t, n) {
                    var i = this.constructor();
                    return a.isArray(e) ? E.apply(i, e) : a.merge(i, e), i.prevObject = this, i.context = this.context, "find" === t ? i.selector = this.selector + (this.selector ? " " : "") + n : t && (i.selector = this.selector + "." + t + "(" + n + ")"), i
                },
                each: function(e, t) {
                    return a.each(this, e, t)
                },
                ready: function(e) {
                    return a.bindReady(), s.add(e), this
                },
                eq: function(e) {
                    return e = +e, -1 === e ? this.slice(e) : this.slice(e, e + 1)
                },
                first: function() {
                    return this.eq(0)
                },
                last: function() {
                    return this.eq(-1)
                },
                slice: function() {
                    return this.pushStack(A.apply(this, arguments), "slice", A.call(arguments).join(","))
                },
                map: function(e) {
                    return this.pushStack(a.map(this, function(t, n) {
                        return e.call(t, n, t)
                    }))
                },
                end: function() {
                    return this.prevObject || this.constructor(null)
                },
                push: E,
                sort: [].sort,
                splice: [].splice
            }, a.fn.init.prototype = a.fn, a.extend = a.fn.extend = function() {
                var e, n, i, r, s, o, l = arguments[0] || {},
                    c = 1,
                    u = arguments.length,
                    d = !1;
                for ("boolean" == typeof l && (d = l, l = arguments[1] || {}, c = 2), "object" != typeof l && !a.isFunction(l) && (l = {}), u === c && (l = this, --c); u > c; c++)
                    if (null != (e = arguments[c]))
                        for (n in e) i = l[n], r = e[n], l !== r && (d && r && (a.isPlainObject(r) || (s = a.isArray(r))) ? (s ? (s = !1, o = i && a.isArray(i) ? i : []) : o = i && a.isPlainObject(i) ? i : {}, l[n] = a.extend(d, o, r)) : r !== t && (l[n] = r));
                return l
            }, a.extend({
                noConflict: function(t) {
                    return e.$ === a && (e.$ = c), t && e.jQuery === a && (e.jQuery = l), a
                },
                isReady: !1,
                readyWait: 1,
                holdReady: function(e) {
                    e ? a.readyWait++ : a.ready(!0)
                },
                ready: function(e) {
                    if (e === !0 && !--a.readyWait || e !== !0 && !a.isReady) {
                        if (!L.body) return setTimeout(a.ready, 1);
                        if (a.isReady = !0, e !== !0 && --a.readyWait > 0) return;
                        s.fireWith(L, [a]), a.fn.trigger && a(L).trigger("ready").off("ready")
                    }
                },
                bindReady: function() {
                    if (!s) {
                        if (s = a.Callbacks("once memory"), "complete" === L.readyState) return setTimeout(a.ready, 1);
                        if (L.addEventListener) L.addEventListener("DOMContentLoaded", o, !1), e.addEventListener("load", a.ready, !1);
                        else if (L.attachEvent) {
                            L.attachEvent("onreadystatechange", o), e.attachEvent("onload", a.ready);
                            var t = !1;
                            try {
                                t = null == e.frameElement
                            } catch (i) {}
                            L.documentElement.doScroll && t && n()
                        }
                    }
                },
                isFunction: function(e) {
                    return "function" === a.type(e)
                },
                isArray: Array.isArray || function(e) {
                    return "array" === a.type(e)
                },
                isWindow: function(e) {
                    return null != e && e == e.window
                },
                isNumeric: function(e) {
                    return !isNaN(parseFloat(e)) && isFinite(e)
                },
                type: function(e) {
                    return null == e ? String(e) : M[S.call(e)] || "object"
                },
                isPlainObject: function(e) {
                    if (!e || "object" !== a.type(e) || e.nodeType || a.isWindow(e)) return !1;
                    try {
                        if (e.constructor && !j.call(e, "constructor") && !j.call(e.constructor.prototype, "isPrototypeOf")) return !1
                    } catch (n) {
                        return !1
                    }
                    var i;
                    for (i in e);
                    return i === t || j.call(e, i)
                },
                isEmptyObject: function(e) {
                    for (var t in e) return !1;
                    return !0
                },
                error: function(e) {
                    throw new Error(e)
                },
                parseJSON: function(t) {
                    return "string" == typeof t && t ? (t = a.trim(t), e.JSON && e.JSON.parse ? e.JSON.parse(t) : g.test(t.replace(m, "@").replace(v, "]").replace(y, "")) ? new Function("return " + t)() : void a.error("Invalid JSON: " + t)) : null
                },
                parseXML: function(n) {
                    if ("string" != typeof n || !n) return null;
                    var i, r;
                    try {
                        e.DOMParser ? (r = new DOMParser, i = r.parseFromString(n, "text/xml")) : (i = new ActiveXObject("Microsoft.XMLDOM"), i.async = "false", i.loadXML(n))
                    } catch (s) {
                        i = t
                    }
                    return (!i || !i.documentElement || i.getElementsByTagName("parsererror").length) && a.error("Invalid XML: " + n), i
                },
                noop: function() {},
                globalEval: function(t) {
                    t && d.test(t) && (e.execScript || function(t) {
                        e.eval.call(e, t)
                    })(t)
                },
                camelCase: function(e) {
                    return e.replace(C, "ms-").replace(k, T)
                },
                nodeName: function(e, t) {
                    return e.nodeName && e.nodeName.toUpperCase() === t.toUpperCase()
                },
                each: function(e, n, i) {
                    var r, s = 0,
                        o = e.length,
                        l = o === t || a.isFunction(e);
                    if (i)
                        if (l) {
                            for (r in e)
                                if (n.apply(e[r], i) === !1) break
                        } else
                            for (; o > s && n.apply(e[s++], i) !== !1;);
                    else if (l) {
                        for (r in e)
                            if (n.call(e[r], r, e[r]) === !1) break
                    } else
                        for (; o > s && n.call(e[s], s, e[s++]) !== !1;);
                    return e
                },
                trim: D ? function(e) {
                    return null == e ? "" : D.call(e)
                } : function(e) {
                    return null == e ? "" : (e + "").replace(h, "").replace(p, "")
                },
                makeArray: function(e, t) {
                    var n = t || [];
                    if (null != e) {
                        var i = a.type(e);
                        null == e.length || "string" === i || "function" === i || "regexp" === i || a.isWindow(e) ? E.call(n, e) : a.merge(n, e)
                    }
                    return n
                },
                inArray: function(e, t, n) {
                    var i;
                    if (t) {
                        if (O) return O.call(t, e, n);
                        for (i = t.length, n = n ? 0 > n ? Math.max(0, i + n) : n : 0; i > n; n++)
                            if (n in t && t[n] === e) return n
                    }
                    return -1
                },
                merge: function(e, n) {
                    var i = e.length,
                        r = 0;
                    if ("number" == typeof n.length)
                        for (var s = n.length; s > r; r++) e[i++] = n[r];
                    else
                        for (; n[r] !== t;) e[i++] = n[r++];
                    return e.length = i, e
                },
                grep: function(e, t, n) {
                    var i, r = [];
                    n = !!n;
                    for (var s = 0, o = e.length; o > s; s++) i = !!t(e[s], s), n !== i && r.push(e[s]);
                    return r
                },
                map: function(e, n, i) {
                    var r, s, o = [],
                        l = 0,
                        c = e.length,
                        u = e instanceof a || c !== t && "number" == typeof c && (c > 0 && e[0] && e[c - 1] || 0 === c || a.isArray(e));
                    if (u)
                        for (; c > l; l++) r = n(e[l], l, i), null != r && (o[o.length] = r);
                    else
                        for (s in e) r = n(e[s], s, i), null != r && (o[o.length] = r);
                    return o.concat.apply([], o)
                },
                guid: 1,
                proxy: function(e, n) {
                    if ("string" == typeof n) {
                        var i = e[n];
                        n = e, e = i
                    }
                    if (!a.isFunction(e)) return t;
                    var r = A.call(arguments, 2),
                        s = function() {
                            return e.apply(n, r.concat(A.call(arguments)))
                        };
                    return s.guid = e.guid = e.guid || s.guid || a.guid++, s
                },
                access: function(e, n, i, r, s, o, l) {
                    var c, u = null == i,
                        d = 0,
                        h = e.length;
                    if (i && "object" == typeof i) {
                        for (d in i) a.access(e, n, d, i[d], 1, o, r);
                        s = 1
                    } else if (r !== t) {
                        if (c = l === t && a.isFunction(r), u && (c ? (c = n, n = function(e, t, n) {
                                return c.call(a(e), n)
                            }) : (n.call(e, r), n = null)), n)
                            for (; h > d; d++) n(e[d], i, c ? r.call(e[d], d, n(e[d], i)) : r, l);
                        s = 1
                    }
                    return s ? e : u ? n.call(e) : h ? n(e[0], i) : o
                },
                now: function() {
                    return (new Date).getTime()
                },
                uaMatch: function(e) {
                    e = e.toLowerCase();
                    var t = _.exec(e) || b.exec(e) || w.exec(e) || e.indexOf("compatible") < 0 && x.exec(e) || [];
                    return {
                        browser: t[1] || "",
                        version: t[2] || "0"
                    }
                },
                sub: function() {
                    function e(t, n) {
                        return new e.fn.init(t, n)
                    }
                    a.extend(!0, e, this), e.superclass = this, e.fn = e.prototype = this(), e.fn.constructor = e, e.sub = this.sub, e.fn.init = function(n, i) {
                        return i && i instanceof a && !(i instanceof e) && (i = e(i)), a.fn.init.call(this, n, i, t)
                    }, e.fn.init.prototype = e.fn;
                    var t = e(L);
                    return e
                },
                browser: {}
            }), a.each("Boolean Number String Function Array Date RegExp Object".split(" "), function(e, t) {
                M["[object " + t + "]"] = t.toLowerCase()
            }), r = a.uaMatch(N), r.browser && (a.browser[r.browser] = !0, a.browser.version = r.version), a.browser.webkit && (a.browser.safari = !0), d.test("Â ") && (h = /^[\s\xA0]+/, p = /[\s\xA0]+$/), i = a(L), L.addEventListener ? o = function() {
                L.removeEventListener("DOMContentLoaded", o, !1), a.ready()
            } : L.attachEvent && (o = function() {
                "complete" === L.readyState && (L.detachEvent("onreadystatechange", o), a.ready())
            }), a
        }(),
        $ = {};
    M.Callbacks = function(e) {
        e = e ? $[e] || D(e) : {};
        var n, i, r, s, o, a, l = [],
            c = [],
            u = function(t) {
                var n, i, r, s;
                for (n = 0, i = t.length; i > n; n++) r = t[n], s = M.type(r), "array" === s ? u(r) : "function" === s && (!e.unique || !h.has(r)) && l.push(r)
            },
            d = function(t, u) {
                for (u = u || [], n = !e.memory || [t, u], i = !0, r = !0, a = s || 0, s = 0, o = l.length; l && o > a; a++)
                    if (l[a].apply(t, u) === !1 && e.stopOnFalse) {
                        n = !0;
                        break
                    }
                r = !1, l && (e.once ? n === !0 ? h.disable() : l = [] : c && c.length && (n = c.shift(), h.fireWith(n[0], n[1])))
            },
            h = {
                add: function() {
                    if (l) {
                        var e = l.length;
                        u(arguments), r ? o = l.length : n && n !== !0 && (s = e, d(n[0], n[1]))
                    }
                    return this
                },
                remove: function() {
                    if (l)
                        for (var t = arguments, n = 0, i = t.length; i > n; n++)
                            for (var s = 0; s < l.length && (t[n] !== l[s] || (r && o >= s && (o--, a >= s && a--), l.splice(s--, 1), !e.unique)); s++);
                    return this
                },
                has: function(e) {
                    if (l)
                        for (var t = 0, n = l.length; n > t; t++)
                            if (e === l[t]) return !0;
                    return !1
                },
                empty: function() {
                    return l = [], this
                },
                disable: function() {
                    return l = c = n = t, this
                },
                disabled: function() {
                    return !l
                },
                lock: function() {
                    return c = t, (!n || n === !0) && h.disable(), this
                },
                locked: function() {
                    return !c
                },
                fireWith: function(t, i) {
                    return c && (r ? e.once || c.push([t, i]) : (!e.once || !n) && d(t, i)), this
                },
                fire: function() {
                    return h.fireWith(this, arguments), this
                },
                fired: function() {
                    return !!i
                }
            };
        return h
    };
    var I = [].slice;
    M.extend({
        Deferred: function(e) {
            var t, n = M.Callbacks("once memory"),
                i = M.Callbacks("once memory"),
                r = M.Callbacks("memory"),
                s = "pending",
                o = {
                    resolve: n,
                    reject: i,
                    notify: r
                },
                a = {
                    done: n.add,
                    fail: i.add,
                    progress: r.add,
                    state: function() {
                        return s
                    },
                    isResolved: n.fired,
                    isRejected: i.fired,
                    then: function(e, t, n) {
                        return l.done(e).fail(t).progress(n), this
                    },
                    always: function() {
                        return l.done.apply(l, arguments).fail.apply(l, arguments), this
                    },
                    pipe: function(e, t, n) {
                        return M.Deferred(function(i) {
                            M.each({
                                done: [e, "resolve"],
                                fail: [t, "reject"],
                                progress: [n, "notify"]
                            }, function(e, t) {
                                var n, r = t[0],
                                    s = t[1];
                                M.isFunction(r) ? l[e](function() {
                                    n = r.apply(this, arguments), n && M.isFunction(n.promise) ? n.promise().then(i.resolve, i.reject, i.notify) : i[s + "With"](this === l ? i : this, [n])
                                }) : l[e](i[s])
                            })
                        }).promise()
                    },
                    promise: function(e) {
                        if (null == e) e = a;
                        else
                            for (var t in a) e[t] = a[t];
                        return e
                    }
                },
                l = a.promise({});
            for (t in o) l[t] = o[t].fire, l[t + "With"] = o[t].fireWith;
            return l.done(function() {
                s = "resolved"
            }, i.disable, r.lock).fail(function() {
                s = "rejected"
            }, n.disable, r.lock), e && e.call(l, l), l
        },
        when: function(e) {
            function t(e) {
                return function(t) {
                    o[e] = arguments.length > 1 ? I.call(arguments, 0) : t, l.notifyWith(c, o)
                }
            }

            function n(e) {
                return function(t) {
                    i[e] = arguments.length > 1 ? I.call(arguments, 0) : t, --a || l.resolveWith(l, i)
                }
            }
            var i = I.call(arguments, 0),
                r = 0,
                s = i.length,
                o = Array(s),
                a = s,
                l = 1 >= s && e && M.isFunction(e.promise) ? e : M.Deferred(),
                c = l.promise();
            if (s > 1) {
                for (; s > r; r++) i[r] && i[r].promise && M.isFunction(i[r].promise) ? i[r].promise().then(n(r), l.reject, t(r)) : --a;
                a || l.resolveWith(l, i)
            } else l !== e && l.resolveWith(l, s ? [e] : []);
            return c
        }
    }), M.support = function() {
        var t, n, i, r, s, o, a, l, c, u, d, h = L.createElement("div");
        L.documentElement;
        if (h.setAttribute("className", "t"), h.innerHTML = "   <link/><table></table><a href='/a' style='top:1px;float:left;opacity:.55;'>a</a><input type='checkbox'/>", n = h.getElementsByTagName("*"), i = h.getElementsByTagName("a")[0], !n || !n.length || !i) return {};
        r = L.createElement("select"), s = r.appendChild(L.createElement("option")), o = h.getElementsByTagName("input")[0], t = {
            leadingWhitespace: 3 === h.firstChild.nodeType,
            tbody: !h.getElementsByTagName("tbody").length,
            htmlSerialize: !!h.getElementsByTagName("link").length,
            style: /top/.test(i.getAttribute("style")),
            hrefNormalized: "/a" === i.getAttribute("href"),
            opacity: /^0.55/.test(i.style.opacity),
            cssFloat: !!i.style.cssFloat,
            checkOn: "on" === o.value,
            optSelected: s.selected,
            getSetAttribute: "t" !== h.className,
            enctype: !!L.createElement("form").enctype,
            html5Clone: "<:nav></:nav>" !== L.createElement("nav").cloneNode(!0).outerHTML,
            submitBubbles: !0,
            changeBubbles: !0,
            focusinBubbles: !1,
            deleteExpando: !0,
            noCloneEvent: !0,
            inlineBlockNeedsLayout: !1,
            shrinkWrapBlocks: !1,
            reliableMarginRight: !0,
            pixelMargin: !0
        }, M.boxModel = t.boxModel = "CSS1Compat" === L.compatMode, o.checked = !0, t.noCloneChecked = o.cloneNode(!0).checked, r.disabled = !0, t.optDisabled = !s.disabled;
        try {
            delete h.test
        } catch (p) {
            t.deleteExpando = !1
        }
        if (!h.addEventListener && h.attachEvent && h.fireEvent && (h.attachEvent("onclick", function() {
                t.noCloneEvent = !1
            }), h.cloneNode(!0).fireEvent("onclick")), o = L.createElement("input"), o.value = "t", o.setAttribute("type", "radio"), t.radioValue = "t" === o.value, o.setAttribute("checked", "checked"), o.setAttribute("name", "t"), h.appendChild(o), a = L.createDocumentFragment(), a.appendChild(h.lastChild), t.checkClone = a.cloneNode(!0).cloneNode(!0).lastChild.checked, t.appendChecked = o.checked, a.removeChild(o), a.appendChild(h), h.attachEvent)
            for (u in {
                    submit: 1,
                    change: 1,
                    focusin: 1
                }) c = "on" + u, d = c in h, d || (h.setAttribute(c, "return;"), d = "function" == typeof h[c]), t[u + "Bubbles"] = d;
        return a.removeChild(h), a = r = s = h = o = null, M(function() {
            var n, i, r, s, o, a, c, u, p, f, g, m, v = L.getElementsByTagName("body")[0];
            !v || (c = 1, m = "padding:0;margin:0;border:", f = "position:absolute;top:0;left:0;width:1px;height:1px;", g = m + "0;visibility:hidden;", u = "style='" + f + m + "5px solid #000;", p = "<div " + u + "display:block;'><div style='" + m + "0;display:block;overflow:hidden;'></div></div><table " + u + "' cellpadding='0' cellspacing='0'><tr><td></td></tr></table>", n = L.createElement("div"), n.style.cssText = g + "width:0;height:0;position:static;top:0;margin-top:" + c + "px", v.insertBefore(n, v.firstChild), h = L.createElement("div"), n.appendChild(h), h.innerHTML = "<table><tr><td style='" + m + "0;display:none'></td><td>t</td></tr></table>", l = h.getElementsByTagName("td"), d = 0 === l[0].offsetHeight, l[0].style.display = "", l[1].style.display = "none", t.reliableHiddenOffsets = d && 0 === l[0].offsetHeight, e.getComputedStyle && (h.innerHTML = "", a = L.createElement("div"), a.style.width = "0", a.style.marginRight = "0", h.style.width = "2px", h.appendChild(a), t.reliableMarginRight = 0 === (parseInt((e.getComputedStyle(a, null) || {
                marginRight: 0
            }).marginRight, 10) || 0)), "undefined" != typeof h.style.zoom && (h.innerHTML = "", h.style.width = h.style.padding = "1px", h.style.border = 0, h.style.overflow = "hidden", h.style.display = "inline", h.style.zoom = 1, t.inlineBlockNeedsLayout = 3 === h.offsetWidth, h.style.display = "block", h.style.overflow = "visible", h.innerHTML = "<div style='width:5px;'></div>", t.shrinkWrapBlocks = 3 !== h.offsetWidth), h.style.cssText = f + g, h.innerHTML = p, i = h.firstChild, r = i.firstChild, s = i.nextSibling.firstChild.firstChild, o = {
                doesNotAddBorder: 5 !== r.offsetTop,
                doesAddBorderForTableAndCells: 5 === s.offsetTop
            }, r.style.position = "fixed", r.style.top = "20px", o.fixedPosition = 20 === r.offsetTop || 15 === r.offsetTop, r.style.position = r.style.top = "", i.style.overflow = "hidden", i.style.position = "relative", o.subtractsBorderForOverflowNotVisible = -5 === r.offsetTop, o.doesNotIncludeMarginInBodyOffset = v.offsetTop !== c, e.getComputedStyle && (h.style.marginTop = "1%", t.pixelMargin = "1%" !== (e.getComputedStyle(h, null) || {
                marginTop: 0
            }).marginTop), "undefined" != typeof n.style.zoom && (n.style.zoom = 1), v.removeChild(n), a = h = n = null, M.extend(t, o))
        }), t
    }();
    var H = /^(?:\{.*\}|\[.*\])$/,
        B = /([A-Z])/g;
    M.extend({
        cache: {},
        uuid: 0,
        expando: "jQuery" + (M.fn.jquery + Math.random()).replace(/\D/g, ""),
        noData: {
            embed: !0,
            object: "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000",
            applet: !0
        },
        hasData: function(e) {
            return e = e.nodeType ? M.cache[e[M.expando]] : e[M.expando], !!e && !E(e)
        },
        data: function(e, n, i, r) {
            if (M.acceptData(e)) {
                var s, o, a, l = M.expando,
                    c = "string" == typeof n,
                    u = e.nodeType,
                    d = u ? M.cache : e,
                    h = u ? e[l] : e[l] && l,
                    p = "events" === n;
                if ((!h || !d[h] || !p && !r && !d[h].data) && c && i === t) return;
                return h || (u ? e[l] = h = ++M.uuid : h = l), d[h] || (d[h] = {}, u || (d[h].toJSON = M.noop)), ("object" == typeof n || "function" == typeof n) && (r ? d[h] = M.extend(d[h], n) : d[h].data = M.extend(d[h].data, n)), s = o = d[h], r || (o.data || (o.data = {}), o = o.data), i !== t && (o[M.camelCase(n)] = i), p && !o[n] ? s.events : (c ? (a = o[n], null == a && (a = o[M.camelCase(n)])) : a = o, a)
            }
        },
        removeData: function(e, t, n) {
            if (M.acceptData(e)) {
                var i, r, s, o = M.expando,
                    a = e.nodeType,
                    l = a ? M.cache : e,
                    c = a ? e[o] : o;
                if (!l[c]) return;
                if (t && (i = n ? l[c] : l[c].data)) {
                    M.isArray(t) || (t in i ? t = [t] : (t = M.camelCase(t), t = t in i ? [t] : t.split(" ")));
                    for (r = 0, s = t.length; s > r; r++) delete i[t[r]];
                    if (!(n ? E : M.isEmptyObject)(i)) return
                }
                if (!n && (delete l[c].data, !E(l[c]))) return;
                M.support.deleteExpando || !l.setInterval ? delete l[c] : l[c] = null, a && (M.support.deleteExpando ? delete e[o] : e.removeAttribute ? e.removeAttribute(o) : e[o] = null)
            }
        },
        _data: function(e, t, n) {
            return M.data(e, t, n, !0)
        },
        acceptData: function(e) {
            if (e.nodeName) {
                var t = M.noData[e.nodeName.toLowerCase()];
                if (t) return t !== !0 && e.getAttribute("classid") === t
            }
            return !0
        }
    }), M.fn.extend({
        data: function(e, n) {
            var i, r, s, o, a, l = this[0],
                c = 0,
                u = null;
            if (e === t) {
                if (this.length && (u = M.data(l), 1 === l.nodeType && !M._data(l, "parsedAttrs"))) {
                    for (s = l.attributes, a = s.length; a > c; c++) o = s[c].name, 0 === o.indexOf("data-") && (o = M.camelCase(o.substring(5)), A(l, o, u[o]));
                    M._data(l, "parsedAttrs", !0)
                }
                return u
            }
            return "object" == typeof e ? this.each(function() {
                M.data(this, e)
            }) : (i = e.split(".", 2), i[1] = i[1] ? "." + i[1] : "", r = i[1] + "!", M.access(this, function(n) {
                return n === t ? (u = this.triggerHandler("getData" + r, [i[0]]), u === t && l && (u = M.data(l, e), u = A(l, e, u)), u === t && i[1] ? this.data(i[0]) : u) : (i[1] = n, void this.each(function() {
                    var t = M(this);
                    t.triggerHandler("setData" + r, i), M.data(this, e, n), t.triggerHandler("changeData" + r, i)
                }))
            }, null, n, arguments.length > 1, null, !1))
        },
        removeData: function(e) {
            return this.each(function() {
                M.removeData(this, e)
            })
        }
    }), M.extend({
        _mark: function(e, t) {
            e && (t = (t || "fx") + "mark", M._data(e, t, (M._data(e, t) || 0) + 1))
        },
        _unmark: function(e, t, n) {
            if (e !== !0 && (n = t, t = e, e = !1), t) {
                n = n || "fx";
                var i = n + "mark",
                    r = e ? 0 : (M._data(t, i) || 1) - 1;
                r ? M._data(t, i, r) : (M.removeData(t, i, !0), j(t, n, "mark"))
            }
        },
        queue: function(e, t, n) {
            var i;
            return e ? (t = (t || "fx") + "queue", i = M._data(e, t), n && (!i || M.isArray(n) ? i = M._data(e, t, M.makeArray(n)) : i.push(n)), i || []) : void 0
        },
        dequeue: function(e, t) {
            t = t || "fx";
            var n = M.queue(e, t),
                i = n.shift(),
                r = {};
            "inprogress" === i && (i = n.shift()), i && ("fx" === t && n.unshift("inprogress"), M._data(e, t + ".run", r), i.call(e, function() {
                M.dequeue(e, t)
            }, r)), n.length || (M.removeData(e, t + "queue " + t + ".run", !0), j(e, t, "queue"))
        }
    }), M.fn.extend({
        queue: function(e, n) {
            var i = 2;
            return "string" != typeof e && (n = e, e = "fx", i--), arguments.length < i ? M.queue(this[0], e) : n === t ? this : this.each(function() {
                var t = M.queue(this, e, n);
                "fx" === e && "inprogress" !== t[0] && M.dequeue(this, e)
            })
        },
        dequeue: function(e) {
            return this.each(function() {
                M.dequeue(this, e)
            })
        },
        delay: function(e, t) {
            return e = M.fx ? M.fx.speeds[e] || e : e, t = t || "fx", this.queue(t, function(t, n) {
                var i = setTimeout(t, e);
                n.stop = function() {
                    clearTimeout(i)
                }
            })
        },
        clearQueue: function(e) {
            return this.queue(e || "fx", [])
        },
        promise: function(e, n) {
            function i() {
                --l || s.resolveWith(o, [o])
            }
            "string" != typeof e && (n = e, e = t), e = e || "fx";
            for (var r, s = M.Deferred(), o = this, a = o.length, l = 1, c = e + "defer", u = e + "queue", d = e + "mark"; a--;)(r = M.data(o[a], c, t, !0) || (M.data(o[a], u, t, !0) || M.data(o[a], d, t, !0)) && M.data(o[a], c, M.Callbacks("once memory"), !0)) && (l++, r.add(i));
            return i(), s.promise(n)
        }
    });
    var q, P, R, W = /[\n\t\r]/g,
        z = /\s+/,
        X = /\r/g,
        U = /^(?:button|input)$/i,
        V = /^(?:button|input|object|select|textarea)$/i,
        J = /^a(?:rea)?$/i,
        G = /^(?:autofocus|autoplay|async|checked|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped|selected)$/i,
        Q = M.support.getSetAttribute;
    M.fn.extend({
        attr: function(e, t) {
            return M.access(this, M.attr, e, t, arguments.length > 1)
        },
        removeAttr: function(e) {
            return this.each(function() {
                M.removeAttr(this, e)
            })
        },
        prop: function(e, t) {
            return M.access(this, M.prop, e, t, arguments.length > 1)
        },
        removeProp: function(e) {
            return e = M.propFix[e] || e, this.each(function() {
                try {
                    this[e] = t, delete this[e]
                } catch (n) {}
            })
        },
        addClass: function(e) {
            var t, n, i, r, s, o, a;
            if (M.isFunction(e)) return this.each(function(t) {
                M(this).addClass(e.call(this, t, this.className))
            });
            if (e && "string" == typeof e)
                for (t = e.split(z), n = 0, i = this.length; i > n; n++)
                    if (r = this[n], 1 === r.nodeType)
                        if (r.className || 1 !== t.length) {
                            for (s = " " + r.className + " ", o = 0, a = t.length; a > o; o++) ~s.indexOf(" " + t[o] + " ") || (s += t[o] + " ");
                            r.className = M.trim(s)
                        } else r.className = e;
            return this
        },
        removeClass: function(e) {
            var n, i, r, s, o, a, l;
            if (M.isFunction(e)) return this.each(function(t) {
                M(this).removeClass(e.call(this, t, this.className))
            });
            if (e && "string" == typeof e || e === t)
                for (n = (e || "").split(z), i = 0, r = this.length; r > i; i++)
                    if (s = this[i], 1 === s.nodeType && s.className)
                        if (e) {
                            for (o = (" " + s.className + " ").replace(W, " "), a = 0, l = n.length; l > a; a++) o = o.replace(" " + n[a] + " ", " ");
                            s.className = M.trim(o)
                        } else s.className = "";
            return this
        },
        toggleClass: function(e, t) {
            var n = typeof e,
                i = "boolean" == typeof t;
            return M.isFunction(e) ? this.each(function(n) {
                M(this).toggleClass(e.call(this, n, this.className, t), t)
            }) : this.each(function() {
                if ("string" === n)
                    for (var r, s = 0, o = M(this), a = t, l = e.split(z); r = l[s++];) a = i ? a : !o.hasClass(r), o[a ? "addClass" : "removeClass"](r);
                else("undefined" === n || "boolean" === n) && (this.className && M._data(this, "__className__", this.className),
                    this.className = this.className || e === !1 ? "" : M._data(this, "__className__") || "")
            })
        },
        hasClass: function(e) {
            for (var t = " " + e + " ", n = 0, i = this.length; i > n; n++)
                if (1 === this[n].nodeType && (" " + this[n].className + " ").replace(W, " ").indexOf(t) > -1) return !0;
            return !1
        },
        val: function(e) {
            var n, i, r, s = this[0];
            return arguments.length ? (r = M.isFunction(e), this.each(function(i) {
                var s, o = M(this);
                1 === this.nodeType && (s = r ? e.call(this, i, o.val()) : e, null == s ? s = "" : "number" == typeof s ? s += "" : M.isArray(s) && (s = M.map(s, function(e) {
                    return null == e ? "" : e + ""
                })), n = M.valHooks[this.type] || M.valHooks[this.nodeName.toLowerCase()], n && "set" in n && n.set(this, s, "value") !== t || (this.value = s))
            })) : s ? (n = M.valHooks[s.type] || M.valHooks[s.nodeName.toLowerCase()], n && "get" in n && (i = n.get(s, "value")) !== t ? i : (i = s.value, "string" == typeof i ? i.replace(X, "") : null == i ? "" : i)) : void 0
        }
    }), M.extend({
        valHooks: {
            option: {
                get: function(e) {
                    var t = e.attributes.value;
                    return !t || t.specified ? e.value : e.text
                }
            },
            select: {
                get: function(e) {
                    var t, n, i, r, s = e.selectedIndex,
                        o = [],
                        a = e.options,
                        l = "select-one" === e.type;
                    if (0 > s) return null;
                    for (n = l ? s : 0, i = l ? s + 1 : a.length; i > n; n++)
                        if (r = a[n], r.selected && (M.support.optDisabled ? !r.disabled : null === r.getAttribute("disabled")) && (!r.parentNode.disabled || !M.nodeName(r.parentNode, "optgroup"))) {
                            if (t = M(r).val(), l) return t;
                            o.push(t)
                        }
                    return l && !o.length && a.length ? M(a[s]).val() : o
                },
                set: function(e, t) {
                    var n = M.makeArray(t);
                    return M(e).find("option").each(function() {
                        this.selected = M.inArray(M(this).val(), n) >= 0
                    }), n.length || (e.selectedIndex = -1), n
                }
            }
        },
        attrFn: {
            val: !0,
            css: !0,
            html: !0,
            text: !0,
            data: !0,
            width: !0,
            height: !0,
            offset: !0
        },
        attr: function(e, n, i, r) {
            var s, o, a, l = e.nodeType;
            return e && 3 !== l && 8 !== l && 2 !== l ? r && n in M.attrFn ? M(e)[n](i) : "undefined" == typeof e.getAttribute ? M.prop(e, n, i) : (a = 1 !== l || !M.isXMLDoc(e), a && (n = n.toLowerCase(), o = M.attrHooks[n] || (G.test(n) ? P : q)), i !== t ? null === i ? void M.removeAttr(e, n) : o && "set" in o && a && (s = o.set(e, i, n)) !== t ? s : (e.setAttribute(n, "" + i), i) : o && "get" in o && a && null !== (s = o.get(e, n)) ? s : (s = e.getAttribute(n), null === s ? t : s)) : void 0
        },
        removeAttr: function(e, t) {
            var n, i, r, s, o, a = 0;
            if (t && 1 === e.nodeType)
                for (i = t.toLowerCase().split(z), s = i.length; s > a; a++) r = i[a], r && (n = M.propFix[r] || r, o = G.test(r), o || M.attr(e, r, ""), e.removeAttribute(Q ? r : n), o && n in e && (e[n] = !1))
        },
        attrHooks: {
            type: {
                set: function(e, t) {
                    if (U.test(e.nodeName) && e.parentNode) M.error("type property can't be changed");
                    else if (!M.support.radioValue && "radio" === t && M.nodeName(e, "input")) {
                        var n = e.value;
                        return e.setAttribute("type", t), n && (e.value = n), t
                    }
                }
            },
            value: {
                get: function(e, t) {
                    return q && M.nodeName(e, "button") ? q.get(e, t) : t in e ? e.value : null
                },
                set: function(e, t, n) {
                    return q && M.nodeName(e, "button") ? q.set(e, t, n) : void(e.value = t)
                }
            }
        },
        propFix: {
            tabindex: "tabIndex",
            readonly: "readOnly",
            "for": "htmlFor",
            "class": "className",
            maxlength: "maxLength",
            cellspacing: "cellSpacing",
            cellpadding: "cellPadding",
            rowspan: "rowSpan",
            colspan: "colSpan",
            usemap: "useMap",
            frameborder: "frameBorder",
            contenteditable: "contentEditable"
        },
        prop: function(e, n, i) {
            var r, s, o, a = e.nodeType;
            return e && 3 !== a && 8 !== a && 2 !== a ? (o = 1 !== a || !M.isXMLDoc(e), o && (n = M.propFix[n] || n, s = M.propHooks[n]), i !== t ? s && "set" in s && (r = s.set(e, i, n)) !== t ? r : e[n] = i : s && "get" in s && null !== (r = s.get(e, n)) ? r : e[n]) : void 0
        },
        propHooks: {
            tabIndex: {
                get: function(e) {
                    var n = e.getAttributeNode("tabindex");
                    return n && n.specified ? parseInt(n.value, 10) : V.test(e.nodeName) || J.test(e.nodeName) && e.href ? 0 : t
                }
            }
        }
    }), M.attrHooks.tabindex = M.propHooks.tabIndex, P = {
        get: function(e, n) {
            var i, r = M.prop(e, n);
            return r === !0 || "boolean" != typeof r && (i = e.getAttributeNode(n)) && i.nodeValue !== !1 ? n.toLowerCase() : t
        },
        set: function(e, t, n) {
            var i;
            return t === !1 ? M.removeAttr(e, n) : (i = M.propFix[n] || n, i in e && (e[i] = !0), e.setAttribute(n, n.toLowerCase())), n
        }
    }, Q || (R = {
        name: !0,
        id: !0,
        coords: !0
    }, q = M.valHooks.button = {
        get: function(e, n) {
            var i;
            return i = e.getAttributeNode(n), i && (R[n] ? "" !== i.nodeValue : i.specified) ? i.nodeValue : t
        },
        set: function(e, t, n) {
            var i = e.getAttributeNode(n);
            return i || (i = L.createAttribute(n), e.setAttributeNode(i)), i.nodeValue = t + ""
        }
    }, M.attrHooks.tabindex.set = q.set, M.each(["width", "height"], function(e, t) {
        M.attrHooks[t] = M.extend(M.attrHooks[t], {
            set: function(e, n) {
                return "" === n ? (e.setAttribute(t, "auto"), n) : void 0
            }
        })
    }), M.attrHooks.contenteditable = {
        get: q.get,
        set: function(e, t, n) {
            "" === t && (t = "false"), q.set(e, t, n)
        }
    }), M.support.hrefNormalized || M.each(["href", "src", "width", "height"], function(e, n) {
        M.attrHooks[n] = M.extend(M.attrHooks[n], {
            get: function(e) {
                var i = e.getAttribute(n, 2);
                return null === i ? t : i
            }
        })
    }), M.support.style || (M.attrHooks.style = {
        get: function(e) {
            return e.style.cssText.toLowerCase() || t
        },
        set: function(e, t) {
            return e.style.cssText = "" + t
        }
    }), M.support.optSelected || (M.propHooks.selected = M.extend(M.propHooks.selected, {
        get: function(e) {
            var t = e.parentNode;
            return t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex), null
        }
    })), M.support.enctype || (M.propFix.enctype = "encoding"), M.support.checkOn || M.each(["radio", "checkbox"], function() {
        M.valHooks[this] = {
            get: function(e) {
                return null === e.getAttribute("value") ? "on" : e.value
            }
        }
    }), M.each(["radio", "checkbox"], function() {
        M.valHooks[this] = M.extend(M.valHooks[this], {
            set: function(e, t) {
                return M.isArray(t) ? e.checked = M.inArray(M(e).val(), t) >= 0 : void 0
            }
        })
    });
    var Y = /^(?:textarea|input|select)$/i,
        K = /^([^\.]*)?(?:\.(.+))?$/,
        Z = /(?:^|\s)hover(\.\S+)?\b/,
        ee = /^key/,
        te = /^(?:mouse|contextmenu)|click/,
        ne = /^(?:focusinfocus|focusoutblur)$/,
        ie = /^(\w*)(?:#([\w\-]+))?(?:\.([\w\-]+))?$/,
        re = function(e) {
            var t = ie.exec(e);
            return t && (t[1] = (t[1] || "").toLowerCase(), t[3] = t[3] && new RegExp("(?:^|\\s)" + t[3] + "(?:\\s|$)")), t
        },
        se = function(e, t) {
            var n = e.attributes || {};
            return (!t[1] || e.nodeName.toLowerCase() === t[1]) && (!t[2] || (n.id || {}).value === t[2]) && (!t[3] || t[3].test((n["class"] || {}).value))
        },
        oe = function(e) {
            return M.event.special.hover ? e : e.replace(Z, "mouseenter$1 mouseleave$1")
        };
    M.event = {
            add: function(e, n, i, r, s) {
                var o, a, l, c, u, d, h, p, f, g, m;
                if (3 !== e.nodeType && 8 !== e.nodeType && n && i && (o = M._data(e))) {
                    for (i.handler && (f = i, i = f.handler, s = f.selector), i.guid || (i.guid = M.guid++), l = o.events, l || (o.events = l = {}), a = o.handle, a || (o.handle = a = function(e) {
                            return "undefined" == typeof M || e && M.event.triggered === e.type ? t : M.event.dispatch.apply(a.elem, arguments)
                        }, a.elem = e), n = M.trim(oe(n)).split(" "), c = 0; c < n.length; c++) u = K.exec(n[c]) || [], d = u[1], h = (u[2] || "").split(".").sort(), m = M.event.special[d] || {}, d = (s ? m.delegateType : m.bindType) || d, m = M.event.special[d] || {}, p = M.extend({
                        type: d,
                        origType: u[1],
                        data: r,
                        handler: i,
                        guid: i.guid,
                        selector: s,
                        quick: s && re(s),
                        namespace: h.join(".")
                    }, f), g = l[d], g || (g = l[d] = [], g.delegateCount = 0, m.setup && m.setup.call(e, r, h, a) !== !1 || (e.addEventListener ? e.addEventListener(d, a, !1) : e.attachEvent && e.attachEvent("on" + d, a))), m.add && (m.add.call(e, p), p.handler.guid || (p.handler.guid = i.guid)), s ? g.splice(g.delegateCount++, 0, p) : g.push(p), M.event.global[d] = !0;
                    e = null
                }
            },
            global: {},
            remove: function(e, t, n, i, r) {
                var s, o, a, l, c, u, d, h, p, f, g, m, v = M.hasData(e) && M._data(e);
                if (v && (h = v.events)) {
                    for (t = M.trim(oe(t || "")).split(" "), s = 0; s < t.length; s++)
                        if (o = K.exec(t[s]) || [], a = l = o[1], c = o[2], a) {
                            for (p = M.event.special[a] || {}, a = (i ? p.delegateType : p.bindType) || a, g = h[a] || [], u = g.length, c = c ? new RegExp("(^|\\.)" + c.split(".").sort().join("\\.(?:.*\\.)?") + "(\\.|$)") : null, d = 0; d < g.length; d++) m = g[d], (r || l === m.origType) && (!n || n.guid === m.guid) && (!c || c.test(m.namespace)) && (!i || i === m.selector || "**" === i && m.selector) && (g.splice(d--, 1), m.selector && g.delegateCount--, p.remove && p.remove.call(e, m));
                            0 === g.length && u !== g.length && ((!p.teardown || p.teardown.call(e, c) === !1) && M.removeEvent(e, a, v.handle), delete h[a])
                        } else
                            for (a in h) M.event.remove(e, a + t[s], n, i, !0);
                    M.isEmptyObject(h) && (f = v.handle, f && (f.elem = null), M.removeData(e, ["events", "handle"], !0))
                }
            },
            customEvent: {
                getData: !0,
                setData: !0,
                changeData: !0
            },
            trigger: function(n, i, r, s) {
                if (!r || 3 !== r.nodeType && 8 !== r.nodeType) {
                    var o, a, l, c, u, d, h, p, f, g, m = n.type || n,
                        v = [];
                    if (ne.test(m + M.event.triggered)) return;
                    if (m.indexOf("!") >= 0 && (m = m.slice(0, -1), a = !0), m.indexOf(".") >= 0 && (v = m.split("."), m = v.shift(), v.sort()), (!r || M.event.customEvent[m]) && !M.event.global[m]) return;
                    if (n = "object" == typeof n ? n[M.expando] ? n : new M.Event(m, n) : new M.Event(m), n.type = m, n.isTrigger = !0, n.exclusive = a, n.namespace = v.join("."), n.namespace_re = n.namespace ? new RegExp("(^|\\.)" + v.join("\\.(?:.*\\.)?") + "(\\.|$)") : null, d = m.indexOf(":") < 0 ? "on" + m : "", !r) {
                        o = M.cache;
                        for (l in o) o[l].events && o[l].events[m] && M.event.trigger(n, i, o[l].handle.elem, !0);
                        return
                    }
                    if (n.result = t, n.target || (n.target = r), i = null != i ? M.makeArray(i) : [], i.unshift(n), h = M.event.special[m] || {}, h.trigger && h.trigger.apply(r, i) === !1) return;
                    if (f = [
                            [r, h.bindType || m]
                        ], !s && !h.noBubble && !M.isWindow(r)) {
                        for (g = h.delegateType || m, c = ne.test(g + m) ? r : r.parentNode, u = null; c; c = c.parentNode) f.push([c, g]), u = c;
                        u && u === r.ownerDocument && f.push([u.defaultView || u.parentWindow || e, g])
                    }
                    for (l = 0; l < f.length && !n.isPropagationStopped(); l++) c = f[l][0], n.type = f[l][1], p = (M._data(c, "events") || {})[n.type] && M._data(c, "handle"), p && p.apply(c, i), p = d && c[d], p && M.acceptData(c) && p.apply(c, i) === !1 && n.preventDefault();
                    return n.type = m, !s && !n.isDefaultPrevented() && (!h._default || h._default.apply(r.ownerDocument, i) === !1) && ("click" !== m || !M.nodeName(r, "a")) && M.acceptData(r) && d && r[m] && ("focus" !== m && "blur" !== m || 0 !== n.target.offsetWidth) && !M.isWindow(r) && (u = r[d], u && (r[d] = null), M.event.triggered = m, r[m](), M.event.triggered = t, u && (r[d] = u)), n.result
                }
            },
            dispatch: function(n) {
                n = M.event.fix(n || e.event);
                var i, r, s, o, a, l, c, u, d, h, p = (M._data(this, "events") || {})[n.type] || [],
                    f = p.delegateCount,
                    g = [].slice.call(arguments, 0),
                    m = !n.exclusive && !n.namespace,
                    v = M.event.special[n.type] || {},
                    y = [];
                if (g[0] = n, n.delegateTarget = this, !v.preDispatch || v.preDispatch.call(this, n) !== !1) {
                    if (f && (!n.button || "click" !== n.type))
                        for (o = M(this), o.context = this.ownerDocument || this, s = n.target; s != this; s = s.parentNode || this)
                            if (s.disabled !== !0) {
                                for (l = {}, u = [], o[0] = s, i = 0; f > i; i++) d = p[i], h = d.selector, l[h] === t && (l[h] = d.quick ? se(s, d.quick) : o.is(h)), l[h] && u.push(d);
                                u.length && y.push({
                                    elem: s,
                                    matches: u
                                })
                            }
                    for (p.length > f && y.push({
                            elem: this,
                            matches: p.slice(f)
                        }), i = 0; i < y.length && !n.isPropagationStopped(); i++)
                        for (c = y[i], n.currentTarget = c.elem, r = 0; r < c.matches.length && !n.isImmediatePropagationStopped(); r++) d = c.matches[r], (m || !n.namespace && !d.namespace || n.namespace_re && n.namespace_re.test(d.namespace)) && (n.data = d.data, n.handleObj = d, a = ((M.event.special[d.origType] || {}).handle || d.handler).apply(c.elem, g), a !== t && (n.result = a, a === !1 && (n.preventDefault(), n.stopPropagation())));
                    return v.postDispatch && v.postDispatch.call(this, n), n.result
                }
            },
            props: "attrChange attrName relatedNode srcElement altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
            fixHooks: {},
            keyHooks: {
                props: "char charCode key keyCode".split(" "),
                filter: function(e, t) {
                    return null == e.which && (e.which = null != t.charCode ? t.charCode : t.keyCode), e
                }
            },
            mouseHooks: {
                props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
                filter: function(e, n) {
                    var i, r, s, o = n.button,
                        a = n.fromElement;
                    return null == e.pageX && null != n.clientX && (i = e.target.ownerDocument || L, r = i.documentElement, s = i.body, e.pageX = n.clientX + (r && r.scrollLeft || s && s.scrollLeft || 0) - (r && r.clientLeft || s && s.clientLeft || 0), e.pageY = n.clientY + (r && r.scrollTop || s && s.scrollTop || 0) - (r && r.clientTop || s && s.clientTop || 0)), !e.relatedTarget && a && (e.relatedTarget = a === e.target ? n.toElement : a), !e.which && o !== t && (e.which = 1 & o ? 1 : 2 & o ? 3 : 4 & o ? 2 : 0), e
                }
            },
            fix: function(e) {
                if (e[M.expando]) return e;
                var n, i, r = e,
                    s = M.event.fixHooks[e.type] || {},
                    o = s.props ? this.props.concat(s.props) : this.props;
                for (e = M.Event(r), n = o.length; n;) i = o[--n], e[i] = r[i];
                return e.target || (e.target = r.srcElement || L), 3 === e.target.nodeType && (e.target = e.target.parentNode), e.metaKey === t && (e.metaKey = e.ctrlKey), s.filter ? s.filter(e, r) : e
            },
            special: {
                ready: {
                    setup: M.bindReady
                },
                load: {
                    noBubble: !0
                },
                focus: {
                    delegateType: "focusin"
                },
                blur: {
                    delegateType: "focusout"
                },
                beforeunload: {
                    setup: function(e, t, n) {
                        M.isWindow(this) && (this.onbeforeunload = n)
                    },
                    teardown: function(e, t) {
                        this.onbeforeunload === t && (this.onbeforeunload = null)
                    }
                }
            },
            simulate: function(e, t, n, i) {
                var r = M.extend(new M.Event, n, {
                    type: e,
                    isSimulated: !0,
                    originalEvent: {}
                });
                i ? M.event.trigger(r, null, t) : M.event.dispatch.call(t, r), r.isDefaultPrevented() && n.preventDefault()
            }
        }, M.event.handle = M.event.dispatch, M.removeEvent = L.removeEventListener ? function(e, t, n) {
            e.removeEventListener && e.removeEventListener(t, n, !1)
        } : function(e, t, n) {
            e.detachEvent && e.detachEvent("on" + t, n)
        }, M.Event = function(e, t) {
            return this instanceof M.Event ? (e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || e.returnValue === !1 || e.getPreventDefault && e.getPreventDefault() ? N : S) : this.type = e, t && M.extend(this, t), this.timeStamp = e && e.timeStamp || M.now(), this[M.expando] = !0, void 0) : new M.Event(e, t)
        }, M.Event.prototype = {
            preventDefault: function() {
                this.isDefaultPrevented = N;
                var e = this.originalEvent;
                !e || (e.preventDefault ? e.preventDefault() : e.returnValue = !1)
            },
            stopPropagation: function() {
                this.isPropagationStopped = N;
                var e = this.originalEvent;
                !e || (e.stopPropagation && e.stopPropagation(), e.cancelBubble = !0)
            },
            stopImmediatePropagation: function() {
                this.isImmediatePropagationStopped = N, this.stopPropagation()
            },
            isDefaultPrevented: S,
            isPropagationStopped: S,
            isImmediatePropagationStopped: S
        }, M.each({
            mouseenter: "mouseover",
            mouseleave: "mouseout"
        }, function(e, t) {
            M.event.special[e] = {
                delegateType: t,
                bindType: t,
                handle: function(e) {
                    var n, i = this,
                        r = e.relatedTarget,
                        s = e.handleObj;
                    s.selector;
                    return (!r || r !== i && !M.contains(i, r)) && (e.type = s.origType, n = s.handler.apply(this, arguments), e.type = t), n
                }
            }
        }), M.support.submitBubbles || (M.event.special.submit = {
            setup: function() {
                return M.nodeName(this, "form") ? !1 : void M.event.add(this, "click._submit keypress._submit", function(e) {
                    var n = e.target,
                        i = M.nodeName(n, "input") || M.nodeName(n, "button") ? n.form : t;
                    i && !i._submit_attached && (M.event.add(i, "submit._submit", function(e) {
                        e._submit_bubble = !0
                    }), i._submit_attached = !0)
                })
            },
            postDispatch: function(e) {
                e._submit_bubble && (delete e._submit_bubble, this.parentNode && !e.isTrigger && M.event.simulate("submit", this.parentNode, e, !0))
            },
            teardown: function() {
                return M.nodeName(this, "form") ? !1 : void M.event.remove(this, "._submit")
            }
        }), M.support.changeBubbles || (M.event.special.change = {
            setup: function() {
                return Y.test(this.nodeName) ? (("checkbox" === this.type || "radio" === this.type) && (M.event.add(this, "propertychange._change", function(e) {
                    "checked" === e.originalEvent.propertyName && (this._just_changed = !0)
                }), M.event.add(this, "click._change", function(e) {
                    this._just_changed && !e.isTrigger && (this._just_changed = !1, M.event.simulate("change", this, e, !0))
                })), !1) : void M.event.add(this, "beforeactivate._change", function(e) {
                    var t = e.target;
                    Y.test(t.nodeName) && !t._change_attached && (M.event.add(t, "change._change", function(e) {
                        this.parentNode && !e.isSimulated && !e.isTrigger && M.event.simulate("change", this.parentNode, e, !0)
                    }), t._change_attached = !0)
                })
            },
            handle: function(e) {
                var t = e.target;
                return this !== t || e.isSimulated || e.isTrigger || "radio" !== t.type && "checkbox" !== t.type ? e.handleObj.handler.apply(this, arguments) : void 0
            },
            teardown: function() {
                return M.event.remove(this, "._change"), Y.test(this.nodeName)
            }
        }), M.support.focusinBubbles || M.each({
            focus: "focusin",
            blur: "focusout"
        }, function(e, t) {
            var n = 0,
                i = function(e) {
                    M.event.simulate(t, e.target, M.event.fix(e), !0)
                };
            M.event.special[t] = {
                setup: function() {
                    0 === n++ && L.addEventListener(e, i, !0)
                },
                teardown: function() {
                    0 === --n && L.removeEventListener(e, i, !0)
                }
            }
        }), M.fn.extend({
            on: function(e, n, i, r, s) {
                var o, a;
                if ("object" == typeof e) {
                    "string" != typeof n && (i = i || n, n = t);
                    for (a in e) this.on(a, n, i, e[a], s);
                    return this
                }
                if (null == i && null == r ? (r = n, i = n = t) : null == r && ("string" == typeof n ? (r = i, i = t) : (r = i, i = n, n = t)), r === !1) r = S;
                else if (!r) return this;
                return 1 === s && (o = r, r = function(e) {
                    return M().off(e), o.apply(this, arguments)
                }, r.guid = o.guid || (o.guid = M.guid++)), this.each(function() {
                    M.event.add(this, e, r, i, n)
                })
            },
            one: function(e, t, n, i) {
                return this.on(e, t, n, i, 1)
            },
            off: function(e, n, i) {
                if (e && e.preventDefault && e.handleObj) {
                    var r = e.handleObj;
                    return M(e.delegateTarget).off(r.namespace ? r.origType + "." + r.namespace : r.origType, r.selector, r.handler), this
                }
                if ("object" == typeof e) {
                    for (var s in e) this.off(s, n, e[s]);
                    return this
                }
                return (n === !1 || "function" == typeof n) && (i = n, n = t), i === !1 && (i = S), this.each(function() {
                    M.event.remove(this, e, i, n)
                })
            },
            bind: function(e, t, n) {
                return this.on(e, null, t, n)
            },
            unbind: function(e, t) {
                return this.off(e, null, t)
            },
            live: function(e, t, n) {
                return M(this.context).on(e, this.selector, t, n), this
            },
            die: function(e, t) {
                return M(this.context).off(e, this.selector || "**", t), this
            },
            delegate: function(e, t, n, i) {
                return this.on(t, e, n, i)
            },
            undelegate: function(e, t, n) {
                return 1 == arguments.length ? this.off(e, "**") : this.off(t, e, n)
            },
            trigger: function(e, t) {
                return this.each(function() {
                    M.event.trigger(e, t, this)
                })
            },
            triggerHandler: function(e, t) {
                return this[0] ? M.event.trigger(e, t, this[0], !0) : void 0
            },
            toggle: function(e) {
                var t = arguments,
                    n = e.guid || M.guid++,
                    i = 0,
                    r = function(n) {
                        var r = (M._data(this, "lastToggle" + e.guid) || 0) % i;
                        return M._data(this, "lastToggle" + e.guid, r + 1), n.preventDefault(), t[r].apply(this, arguments) || !1
                    };
                for (r.guid = n; i < t.length;) t[i++].guid = n;
                return this.click(r)
            },
            hover: function(e, t) {
                return this.mouseenter(e).mouseleave(t || e)
            }
        }), M.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(e, t) {
            M.fn[t] = function(e, n) {
                return null == n && (n = e, e = null), arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t)
            }, M.attrFn && (M.attrFn[t] = !0), ee.test(t) && (M.event.fixHooks[t] = M.event.keyHooks), te.test(t) && (M.event.fixHooks[t] = M.event.mouseHooks)
        }),
        function() {
            function e(e, t, n, i, s, o) {
                for (var a = 0, l = i.length; l > a; a++) {
                    var c = i[a];
                    if (c) {
                        var u = !1;
                        for (c = c[e]; c;) {
                            if (c[r] === n) {
                                u = i[c.sizset];
                                break
                            }
                            if (1 === c.nodeType)
                                if (o || (c[r] = n, c.sizset = a), "string" != typeof t) {
                                    if (c === t) {
                                        u = !0;
                                        break
                                    }
                                } else if (h.filter(t, [c]).length > 0) {
                                u = c;
                                break
                            }
                            c = c[e]
                        }
                        i[a] = u
                    }
                }
            }

            function n(e, t, n, i, s, o) {
                for (var a = 0, l = i.length; l > a; a++) {
                    var c = i[a];
                    if (c) {
                        var u = !1;
                        for (c = c[e]; c;) {
                            if (c[r] === n) {
                                u = i[c.sizset];
                                break
                            }
                            if (1 === c.nodeType && !o && (c[r] = n, c.sizset = a), c.nodeName.toLowerCase() === t) {
                                u = c;
                                break
                            }
                            c = c[e]
                        }
                        i[a] = u
                    }
                }
            }
            var i = /((?:\((?:\([^()]+\)|[^()]+)+\)|\[(?:\[[^\[\]]*\]|['"][^'"]*['"]|[^\[\]'"]+)+\]|\\.|[^ >+~,(\[\\]+)+|[>+~])(\s*,\s*)?((?:.|\r|\n)*)/g,
                r = "sizcache" + (Math.random() + "").replace(".", ""),
                s = 0,
                o = Object.prototype.toString,
                a = !1,
                l = !0,
                c = /\\/g,
                u = /\r\n/g,
                d = /\W/;
            [0, 0].sort(function() {
                return l = !1, 0
            });
            var h = function(e, t, n, r) {
                n = n || [], t = t || L;
                var s = t;
                if (1 !== t.nodeType && 9 !== t.nodeType) return [];
                if (!e || "string" != typeof e) return n;
                var a, l, c, u, d, p, m, v, _ = !0,
                    b = h.isXML(t),
                    w = [],
                    k = e;
                do
                    if (i.exec(""), a = i.exec(k), a && (k = a[3], w.push(a[1]), a[2])) {
                        u = a[3];
                        break
                    }
                while (a);
                if (w.length > 1 && g.exec(e))
                    if (2 === w.length && f.relative[w[0]]) l = x(w[0] + w[1], t, r);
                    else
                        for (l = f.relative[w[0]] ? [t] : h(w.shift(), t); w.length;) e = w.shift(), f.relative[e] && (e += w.shift()), l = x(e, l, r);
                else if (!r && w.length > 1 && 9 === t.nodeType && !b && f.match.ID.test(w[0]) && !f.match.ID.test(w[w.length - 1]) && (d = h.find(w.shift(), t, b), t = d.expr ? h.filter(d.expr, d.set)[0] : d.set[0]), t)
                    for (d = r ? {
                            expr: w.pop(),
                            set: y(r)
                        } : h.find(w.pop(), 1 !== w.length || "~" !== w[0] && "+" !== w[0] || !t.parentNode ? t : t.parentNode, b), l = d.expr ? h.filter(d.expr, d.set) : d.set, w.length > 0 ? c = y(l) : _ = !1; w.length;) p = w.pop(), m = p, f.relative[p] ? m = w.pop() : p = "", null == m && (m = t), f.relative[p](c, m, b);
                else c = w = [];
                if (c || (c = l), c || h.error(p || e), "[object Array]" === o.call(c))
                    if (_)
                        if (t && 1 === t.nodeType)
                            for (v = 0; null != c[v]; v++) c[v] && (c[v] === !0 || 1 === c[v].nodeType && h.contains(t, c[v])) && n.push(l[v]);
                        else
                            for (v = 0; null != c[v]; v++) c[v] && 1 === c[v].nodeType && n.push(l[v]);
                else n.push.apply(n, c);
                else y(c, n);
                return u && (h(u, s, n, r), h.uniqueSort(n)), n
            };
            h.uniqueSort = function(e) {
                if (b && (a = l, e.sort(b), a))
                    for (var t = 1; t < e.length; t++) e[t] === e[t - 1] && e.splice(t--, 1);
                return e
            }, h.matches = function(e, t) {
                return h(e, null, null, t)
            }, h.matchesSelector = function(e, t) {
                return h(t, null, null, [e]).length > 0
            }, h.find = function(e, t, n) {
                var i, r, s, o, a, l;
                if (!e) return [];
                for (r = 0, s = f.order.length; s > r; r++)
                    if (a = f.order[r], (o = f.leftMatch[a].exec(e)) && (l = o[1], o.splice(1, 1), "\\" !== l.substr(l.length - 1) && (o[1] = (o[1] || "").replace(c, ""), i = f.find[a](o, t, n), null != i))) {
                        e = e.replace(f.match[a], "");
                        break
                    }
                return i || (i = "undefined" != typeof t.getElementsByTagName ? t.getElementsByTagName("*") : []), {
                    set: i,
                    expr: e
                }
            }, h.filter = function(e, n, i, r) {
                for (var s, o, a, l, c, u, d, p, g, m = e, v = [], y = n, _ = n && n[0] && h.isXML(n[0]); e && n.length;) {
                    for (a in f.filter)
                        if (null != (s = f.leftMatch[a].exec(e)) && s[2]) {
                            if (u = f.filter[a], d = s[1], o = !1, s.splice(1, 1), "\\" === d.substr(d.length - 1)) continue;
                            if (y === v && (v = []), f.preFilter[a])
                                if (s = f.preFilter[a](s, y, i, v, r, _)) {
                                    if (s === !0) continue
                                } else o = l = !0;
                            if (s)
                                for (p = 0; null != (c = y[p]); p++) c && (l = u(c, s, p, y), g = r ^ l, i && null != l ? g ? o = !0 : y[p] = !1 : g && (v.push(c), o = !0));
                            if (l !== t) {
                                if (i || (y = v), e = e.replace(f.match[a], ""), !o) return [];
                                break
                            }
                        }
                    if (e === m) {
                        if (null != o) break;
                        h.error(e)
                    }
                    m = e
                }
                return y
            }, h.error = function(e) {
                throw new Error("Syntax error, unrecognized expression: " + e)
            };
            var p = h.getText = function(e) {
                    var t, n, i = e.nodeType,
                        r = "";
                    if (i) {
                        if (1 === i || 9 === i || 11 === i) {
                            if ("string" == typeof e.textContent) return e.textContent;
                            if ("string" == typeof e.innerText) return e.innerText.replace(u, "");
                            for (e = e.firstChild; e; e = e.nextSibling) r += p(e)
                        } else if (3 === i || 4 === i) return e.nodeValue
                    } else
                        for (t = 0; n = e[t]; t++) 8 !== n.nodeType && (r += p(n));
                    return r
                },
                f = h.selectors = {
                    order: ["ID", "NAME", "TAG"],
                    match: {
                        ID: /#((?:[\w\u00c0-\uFFFF\-]|\\.)+)/,
                        CLASS: /\.((?:[\w\u00c0-\uFFFF\-]|\\.)+)/,
                        NAME: /\[name=['"]*((?:[\w\u00c0-\uFFFF\-]|\\.)+)['"]*\]/,
                        ATTR: /\[\s*((?:[\w\u00c0-\uFFFF\-]|\\.)+)\s*(?:(\S?=)\s*(?:(['"])(.*?)\3|(#?(?:[\w\u00c0-\uFFFF\-]|\\.)*)|)|)\s*\]/,
                        TAG: /^((?:[\w\u00c0-\uFFFF\*\-]|\\.)+)/,
                        CHILD: /:(only|nth|last|first)-child(?:\(\s*(even|odd|(?:[+\-]?\d+|(?:[+\-]?\d*)?n\s*(?:[+\-]\s*\d+)?))\s*\))?/,
                        POS: /:(nth|eq|gt|lt|first|last|even|odd)(?:\((\d*)\))?(?=[^\-]|$)/,
                        PSEUDO: /:((?:[\w\u00c0-\uFFFF\-]|\\.)+)(?:\((['"]?)((?:\([^\)]+\)|[^\(\)]*)+)\2\))?/
                    },
                    leftMatch: {},
                    attrMap: {
                        "class": "className",
                        "for": "htmlFor"
                    },
                    attrHandle: {
                        href: function(e) {
                            return e.getAttribute("href")
                        },
                        type: function(e) {
                            return e.getAttribute("type")
                        }
                    },
                    relative: {
                        "+": function(e, t) {
                            var n = "string" == typeof t,
                                i = n && !d.test(t),
                                r = n && !i;
                            i && (t = t.toLowerCase());
                            for (var s, o = 0, a = e.length; a > o; o++)
                                if (s = e[o]) {
                                    for (;
                                        (s = s.previousSibling) && 1 !== s.nodeType;);
                                    e[o] = r || s && s.nodeName.toLowerCase() === t ? s || !1 : s === t
                                }
                            r && h.filter(t, e, !0)
                        },
                        ">": function(e, t) {
                            var n, i = "string" == typeof t,
                                r = 0,
                                s = e.length;
                            if (i && !d.test(t)) {
                                for (t = t.toLowerCase(); s > r; r++)
                                    if (n = e[r]) {
                                        var o = n.parentNode;
                                        e[r] = o.nodeName.toLowerCase() === t ? o : !1
                                    }
                            } else {
                                for (; s > r; r++) n = e[r], n && (e[r] = i ? n.parentNode : n.parentNode === t);
                                i && h.filter(t, e, !0)
                            }
                        },
                        "": function(t, i, r) {
                            var o, a = s++,
                                l = e;
                            "string" == typeof i && !d.test(i) && (i = i.toLowerCase(), o = i, l = n), l("parentNode", i, a, t, o, r)
                        },
                        "~": function(t, i, r) {
                            var o, a = s++,
                                l = e;
                            "string" == typeof i && !d.test(i) && (i = i.toLowerCase(), o = i, l = n), l("previousSibling", i, a, t, o, r)
                        }
                    },
                    find: {
                        ID: function(e, t, n) {
                            if ("undefined" != typeof t.getElementById && !n) {
                                var i = t.getElementById(e[1]);
                                return i && i.parentNode ? [i] : []
                            }
                        },
                        NAME: function(e, t) {
                            if ("undefined" != typeof t.getElementsByName) {
                                for (var n = [], i = t.getElementsByName(e[1]), r = 0, s = i.length; s > r; r++) i[r].getAttribute("name") === e[1] && n.push(i[r]);
                                return 0 === n.length ? null : n
                            }
                        },
                        TAG: function(e, t) {
                            return "undefined" != typeof t.getElementsByTagName ? t.getElementsByTagName(e[1]) : void 0
                        }
                    },
                    preFilter: {
                        CLASS: function(e, t, n, i, r, s) {
                            if (e = " " + e[1].replace(c, "") + " ", s) return e;
                            for (var o, a = 0; null != (o = t[a]); a++) o && (r ^ (o.className && (" " + o.className + " ").replace(/[\t\n\r]/g, " ").indexOf(e) >= 0) ? n || i.push(o) : n && (t[a] = !1));
                            return !1
                        },
                        ID: function(e) {
                            return e[1].replace(c, "")
                        },
                        TAG: function(e, t) {
                            return e[1].replace(c, "").toLowerCase()
                        },
                        CHILD: function(e) {
                            if ("nth" === e[1]) {
                                e[2] || h.error(e[0]), e[2] = e[2].replace(/^\+|\s*/g, "");
                                var t = /(-?)(\d*)(?:n([+\-]?\d*))?/.exec("even" === e[2] && "2n" || "odd" === e[2] && "2n+1" || !/\D/.test(e[2]) && "0n+" + e[2] || e[2]);
                                e[2] = t[1] + (t[2] || 1) - 0, e[3] = t[3] - 0
                            } else e[2] && h.error(e[0]);
                            return e[0] = s++, e
                        },
                        ATTR: function(e, t, n, i, r, s) {
                            var o = e[1] = e[1].replace(c, "");
                            return !s && f.attrMap[o] && (e[1] = f.attrMap[o]), e[4] = (e[4] || e[5] || "").replace(c, ""), "~=" === e[2] && (e[4] = " " + e[4] + " "), e
                        },
                        PSEUDO: function(e, t, n, r, s) {
                            if ("not" === e[1]) {
                                if (!((i.exec(e[3]) || "").length > 1 || /^\w/.test(e[3]))) {
                                    var o = h.filter(e[3], t, n, !0 ^ s);
                                    return n || r.push.apply(r, o), !1
                                }
                                e[3] = h(e[3], null, null, t)
                            } else if (f.match.POS.test(e[0]) || f.match.CHILD.test(e[0])) return !0;
                            return e
                        },
                        POS: function(e) {
                            return e.unshift(!0), e
                        }
                    },
                    filters: {
                        enabled: function(e) {
                            return e.disabled === !1 && "hidden" !== e.type
                        },
                        disabled: function(e) {
                            return e.disabled === !0
                        },
                        checked: function(e) {
                            return e.checked === !0
                        },
                        selected: function(e) {
                            return e.parentNode && e.parentNode.selectedIndex, e.selected === !0
                        },
                        parent: function(e) {
                            return !!e.firstChild
                        },
                        empty: function(e) {
                            return !e.firstChild
                        },
                        has: function(e, t, n) {
                            return !!h(n[3], e).length
                        },
                        header: function(e) {
                            return /h\d/i.test(e.nodeName)
                        },
                        text: function(e) {
                            var t = e.getAttribute("type"),
                                n = e.type;
                            return "input" === e.nodeName.toLowerCase() && "text" === n && (t === n || null === t)
                        },
                        radio: function(e) {
                            return "input" === e.nodeName.toLowerCase() && "radio" === e.type
                        },
                        checkbox: function(e) {
                            return "input" === e.nodeName.toLowerCase() && "checkbox" === e.type
                        },
                        file: function(e) {
                            return "input" === e.nodeName.toLowerCase() && "file" === e.type
                        },
                        password: function(e) {
                            return "input" === e.nodeName.toLowerCase() && "password" === e.type
                        },
                        submit: function(e) {
                            var t = e.nodeName.toLowerCase();
                            return ("input" === t || "button" === t) && "submit" === e.type
                        },
                        image: function(e) {
                            return "input" === e.nodeName.toLowerCase() && "image" === e.type
                        },
                        reset: function(e) {
                            var t = e.nodeName.toLowerCase();
                            return ("input" === t || "button" === t) && "reset" === e.type
                        },
                        button: function(e) {
                            var t = e.nodeName.toLowerCase();
                            return "input" === t && "button" === e.type || "button" === t
                        },
                        input: function(e) {
                            return /input|select|textarea|button/i.test(e.nodeName)
                        },
                        focus: function(e) {
                            return e === e.ownerDocument.activeElement
                        }
                    },
                    setFilters: {
                        first: function(e, t) {
                            return 0 === t
                        },
                        last: function(e, t, n, i) {
                            return t === i.length - 1
                        },
                        even: function(e, t) {
                            return t % 2 === 0
                        },
                        odd: function(e, t) {
                            return t % 2 === 1
                        },
                        lt: function(e, t, n) {
                            return t < n[3] - 0
                        },
                        gt: function(e, t, n) {
                            return t > n[3] - 0
                        },
                        nth: function(e, t, n) {
                            return n[3] - 0 === t
                        },
                        eq: function(e, t, n) {
                            return n[3] - 0 === t
                        }
                    },
                    filter: {
                        PSEUDO: function(e, t, n, i) {
                            var r = t[1],
                                s = f.filters[r];
                            if (s) return s(e, n, t, i);
                            if ("contains" === r) return (e.textContent || e.innerText || p([e]) || "").indexOf(t[3]) >= 0;
                            if ("not" === r) {
                                for (var o = t[3], a = 0, l = o.length; l > a; a++)
                                    if (o[a] === e) return !1;
                                return !0
                            }
                            h.error(r)
                        },
                        CHILD: function(e, t) {
                            var n, i, s, o, a, l, c = t[1],
                                u = e;
                            switch (c) {
                                case "only":
                                case "first":
                                    for (; u = u.previousSibling;)
                                        if (1 === u.nodeType) return !1;
                                    if ("first" === c) return !0;
                                    u = e;
                                case "last":
                                    for (; u = u.nextSibling;)
                                        if (1 === u.nodeType) return !1;
                                    return !0;
                                case "nth":
                                    if (n = t[2], i = t[3], 1 === n && 0 === i) return !0;
                                    if (s = t[0], o = e.parentNode, o && (o[r] !== s || !e.nodeIndex)) {
                                        for (a = 0, u = o.firstChild; u; u = u.nextSibling) 1 === u.nodeType && (u.nodeIndex = ++a);
                                        o[r] = s
                                    }
                                    return l = e.nodeIndex - i, 0 === n ? 0 === l : l % n === 0 && l / n >= 0
                            }
                        },
                        ID: function(e, t) {
                            return 1 === e.nodeType && e.getAttribute("id") === t
                        },
                        TAG: function(e, t) {
                            return "*" === t && 1 === e.nodeType || !!e.nodeName && e.nodeName.toLowerCase() === t
                        },
                        CLASS: function(e, t) {
                            return (" " + (e.className || e.getAttribute("class")) + " ").indexOf(t) > -1
                        },
                        ATTR: function(e, t) {
                            var n = t[1],
                                i = h.attr ? h.attr(e, n) : f.attrHandle[n] ? f.attrHandle[n](e) : null != e[n] ? e[n] : e.getAttribute(n),
                                r = i + "",
                                s = t[2],
                                o = t[4];
                            return null == i ? "!=" === s : !s && h.attr ? null != i : "=" === s ? r === o : "*=" === s ? r.indexOf(o) >= 0 : "~=" === s ? (" " + r + " ").indexOf(o) >= 0 : o ? "!=" === s ? r !== o : "^=" === s ? 0 === r.indexOf(o) : "$=" === s ? r.substr(r.length - o.length) === o : "|=" === s ? r === o || r.substr(0, o.length + 1) === o + "-" : !1 : r && i !== !1
                        },
                        POS: function(e, t, n, i) {
                            var r = t[2],
                                s = f.setFilters[r];
                            return s ? s(e, n, t, i) : void 0
                        }
                    }
                },
                g = f.match.POS,
                m = function(e, t) {
                    return "\\" + (t - 0 + 1)
                };
            for (var v in f.match) f.match[v] = new RegExp(f.match[v].source + /(?![^\[]*\])(?![^\(]*\))/.source), f.leftMatch[v] = new RegExp(/(^(?:.|\r|\n)*?)/.source + f.match[v].source.replace(/\\(\d+)/g, m));
            f.match.globalPOS = g;
            var y = function(e, t) {
                return e = Array.prototype.slice.call(e, 0), t ? (t.push.apply(t, e), t) : e
            };
            try {
                Array.prototype.slice.call(L.documentElement.childNodes, 0)[0].nodeType
            } catch (_) {
                y = function(e, t) {
                    var n = 0,
                        i = t || [];
                    if ("[object Array]" === o.call(e)) Array.prototype.push.apply(i, e);
                    else if ("number" == typeof e.length)
                        for (var r = e.length; r > n; n++) i.push(e[n]);
                    else
                        for (; e[n]; n++) i.push(e[n]);
                    return i
                }
            }
            var b, w;
            L.documentElement.compareDocumentPosition ? b = function(e, t) {
                    return e === t ? (a = !0, 0) : e.compareDocumentPosition && t.compareDocumentPosition ? 4 & e.compareDocumentPosition(t) ? -1 : 1 : e.compareDocumentPosition ? -1 : 1
                } : (b = function(e, t) {
                    if (e === t) return a = !0, 0;
                    if (e.sourceIndex && t.sourceIndex) return e.sourceIndex - t.sourceIndex;
                    var n, i, r = [],
                        s = [],
                        o = e.parentNode,
                        l = t.parentNode,
                        c = o;
                    if (o === l) return w(e, t);
                    if (!o) return -1;
                    if (!l) return 1;
                    for (; c;) r.unshift(c), c = c.parentNode;
                    for (c = l; c;) s.unshift(c), c = c.parentNode;
                    n = r.length, i = s.length;
                    for (var u = 0; n > u && i > u; u++)
                        if (r[u] !== s[u]) return w(r[u], s[u]);
                    return u === n ? w(e, s[u], -1) : w(r[u], t, 1)
                }, w = function(e, t, n) {
                    if (e === t) return n;
                    for (var i = e.nextSibling; i;) {
                        if (i === t) return -1;
                        i = i.nextSibling
                    }
                    return 1
                }),
                function() {
                    var e = L.createElement("div"),
                        n = "script" + (new Date).getTime(),
                        i = L.documentElement;
                    e.innerHTML = "<a name='" + n + "'/>", i.insertBefore(e, i.firstChild), L.getElementById(n) && (f.find.ID = function(e, n, i) {
                        if ("undefined" != typeof n.getElementById && !i) {
                            var r = n.getElementById(e[1]);
                            return r ? r.id === e[1] || "undefined" != typeof r.getAttributeNode && r.getAttributeNode("id").nodeValue === e[1] ? [r] : t : []
                        }
                    }, f.filter.ID = function(e, t) {
                        var n = "undefined" != typeof e.getAttributeNode && e.getAttributeNode("id");
                        return 1 === e.nodeType && n && n.nodeValue === t
                    }), i.removeChild(e), i = e = null
                }(),
                function() {
                    var e = L.createElement("div");
                    e.appendChild(L.createComment("")), e.getElementsByTagName("*").length > 0 && (f.find.TAG = function(e, t) {
                        var n = t.getElementsByTagName(e[1]);
                        if ("*" === e[1]) {
                            for (var i = [], r = 0; n[r]; r++) 1 === n[r].nodeType && i.push(n[r]);
                            n = i
                        }
                        return n
                    }), e.innerHTML = "<a href='#'></a>", e.firstChild && "undefined" != typeof e.firstChild.getAttribute && "#" !== e.firstChild.getAttribute("href") && (f.attrHandle.href = function(e) {
                        return e.getAttribute("href", 2)
                    }), e = null
                }(), L.querySelectorAll && function() {
                    var e = h,
                        t = L.createElement("div"),
                        n = "__sizzle__";
                    if (t.innerHTML = "<p class='TEST'></p>", !t.querySelectorAll || 0 !== t.querySelectorAll(".TEST").length) {
                        h = function(t, i, r, s) {
                            if (i = i || L, !s && !h.isXML(i)) {
                                var o = /^(\w+$)|^\.([\w\-]+$)|^#([\w\-]+$)/.exec(t);
                                if (o && (1 === i.nodeType || 9 === i.nodeType)) {
                                    if (o[1]) return y(i.getElementsByTagName(t), r);
                                    if (o[2] && f.find.CLASS && i.getElementsByClassName) return y(i.getElementsByClassName(o[2]), r)
                                }
                                if (9 === i.nodeType) {
                                    if ("body" === t && i.body) return y([i.body], r);
                                    if (o && o[3]) {
                                        var a = i.getElementById(o[3]);
                                        if (!a || !a.parentNode) return y([], r);
                                        if (a.id === o[3]) return y([a], r)
                                    }
                                    try {
                                        return y(i.querySelectorAll(t), r)
                                    } catch (l) {}
                                } else if (1 === i.nodeType && "object" !== i.nodeName.toLowerCase()) {
                                    var c = i,
                                        u = i.getAttribute("id"),
                                        d = u || n,
                                        p = i.parentNode,
                                        g = /^\s*[+~]/.test(t);
                                    u ? d = d.replace(/'/g, "\\$&") : i.setAttribute("id", d), g && p && (i = i.parentNode);
                                    try {
                                        if (!g || p) return y(i.querySelectorAll("[id='" + d + "'] " + t), r)
                                    } catch (m) {} finally {
                                        u || c.removeAttribute("id")
                                    }
                                }
                            }
                            return e(t, i, r, s)
                        };
                        for (var i in e) h[i] = e[i];
                        t = null
                    }
                }(),
                function() {
                    var e = L.documentElement,
                        t = e.matchesSelector || e.mozMatchesSelector || e.webkitMatchesSelector || e.msMatchesSelector;
                    if (t) {
                        var n = !t.call(L.createElement("div"), "div"),
                            i = !1;
                        try {
                            t.call(L.documentElement, "[test!='']:sizzle")
                        } catch (r) {
                            i = !0
                        }
                        h.matchesSelector = function(e, r) {
                            if (r = r.replace(/\=\s*([^'"\]]*)\s*\]/g, "='$1']"), !h.isXML(e)) try {
                                if (i || !f.match.PSEUDO.test(r) && !/!=/.test(r)) {
                                    var s = t.call(e, r);
                                    if (s || !n || e.document && 11 !== e.document.nodeType) return s
                                }
                            } catch (o) {}
                            return h(r, null, null, [e]).length > 0
                        }
                    }
                }(),
                function() {
                    var e = L.createElement("div");
                    if (e.innerHTML = "<div class='test e'></div><div class='test'></div>", e.getElementsByClassName && 0 !== e.getElementsByClassName("e").length) {
                        if (e.lastChild.className = "e", 1 === e.getElementsByClassName("e").length) return;
                        f.order.splice(1, 0, "CLASS"), f.find.CLASS = function(e, t, n) {
                            return "undefined" == typeof t.getElementsByClassName || n ? void 0 : t.getElementsByClassName(e[1])
                        }, e = null
                    }
                }(), L.documentElement.contains ? h.contains = function(e, t) {
                    return e !== t && (e.contains ? e.contains(t) : !0)
                } : L.documentElement.compareDocumentPosition ? h.contains = function(e, t) {
                    return !!(16 & e.compareDocumentPosition(t))
                } : h.contains = function() {
                    return !1
                }, h.isXML = function(e) {
                    var t = (e ? e.ownerDocument || e : 0).documentElement;
                    return t ? "HTML" !== t.nodeName : !1
                };
            var x = function(e, t, n) {
                for (var i, r = [], s = "", o = t.nodeType ? [t] : t; i = f.match.PSEUDO.exec(e);) s += i[0], e = e.replace(f.match.PSEUDO, "");
                e = f.relative[e] ? e + "*" : e;
                for (var a = 0, l = o.length; l > a; a++) h(e, o[a], r, n);
                return h.filter(s, r)
            };
            h.attr = M.attr, h.selectors.attrMap = {}, M.find = h, M.expr = h.selectors, M.expr[":"] = M.expr.filters, M.unique = h.uniqueSort, M.text = h.getText, M.isXMLDoc = h.isXML, M.contains = h.contains
        }();
    var ae = /Until$/,
        le = /^(?:parents|prevUntil|prevAll)/,
        ce = /,/,
        ue = /^.[^:#\[\.,]*$/,
        de = Array.prototype.slice,
        he = M.expr.match.globalPOS,
        pe = {
            children: !0,
            contents: !0,
            next: !0,
            prev: !0
        };
    M.fn.extend({
        find: function(e) {
            var t, n, i = this;
            if ("string" != typeof e) return M(e).filter(function() {
                for (t = 0, n = i.length; n > t; t++)
                    if (M.contains(i[t], this)) return !0
            });
            var r, s, o, a = this.pushStack("", "find", e);
            for (t = 0, n = this.length; n > t; t++)
                if (r = a.length, M.find(e, this[t], a), t > 0)
                    for (s = r; s < a.length; s++)
                        for (o = 0; r > o; o++)
                            if (a[o] === a[s]) {
                                a.splice(s--, 1);
                                break
                            }
            return a
        },
        has: function(e) {
            var t = M(e);
            return this.filter(function() {
                for (var e = 0, n = t.length; n > e; e++)
                    if (M.contains(this, t[e])) return !0
            })
        },
        not: function(e) {
            return this.pushStack(C(this, e, !1), "not", e)
        },
        filter: function(e) {
            return this.pushStack(C(this, e, !0), "filter", e)
        },
        is: function(e) {
            return !!e && ("string" == typeof e ? he.test(e) ? M(e, this.context).index(this[0]) >= 0 : M.filter(e, this).length > 0 : this.filter(e).length > 0)
        },
        closest: function(e, t) {
            var n, i, r = [],
                s = this[0];
            if (M.isArray(e)) {
                for (var o = 1; s && s.ownerDocument && s !== t;) {
                    for (n = 0; n < e.length; n++) M(s).is(e[n]) && r.push({
                        selector: e[n],
                        elem: s,
                        level: o
                    });
                    s = s.parentNode, o++
                }
                return r
            }
            var a = he.test(e) || "string" != typeof e ? M(e, t || this.context) : 0;
            for (n = 0, i = this.length; i > n; n++)
                for (s = this[n]; s;) {
                    if (a ? a.index(s) > -1 : M.find.matchesSelector(s, e)) {
                        r.push(s);
                        break
                    }
                    if (s = s.parentNode, !s || !s.ownerDocument || s === t || 11 === s.nodeType) break
                }
            return r = r.length > 1 ? M.unique(r) : r, this.pushStack(r, "closest", e)
        },
        index: function(e) {
            return e ? "string" == typeof e ? M.inArray(this[0], M(e)) : M.inArray(e.jquery ? e[0] : e, this) : this[0] && this[0].parentNode ? this.prevAll().length : -1
        },
        add: function(e, t) {
            var n = "string" == typeof e ? M(e, t) : M.makeArray(e && e.nodeType ? [e] : e),
                i = M.merge(this.get(), n);
            return this.pushStack(T(n[0]) || T(i[0]) ? i : M.unique(i))
        },
        andSelf: function() {
            return this.add(this.prevObject)
        }
    }), M.each({
        parent: function(e) {
            var t = e.parentNode;
            return t && 11 !== t.nodeType ? t : null
        },
        parents: function(e) {
            return M.dir(e, "parentNode")
        },
        parentsUntil: function(e, t, n) {
            return M.dir(e, "parentNode", n)
        },
        next: function(e) {
            return M.nth(e, 2, "nextSibling")
        },
        prev: function(e) {
            return M.nth(e, 2, "previousSibling")
        },
        nextAll: function(e) {
            return M.dir(e, "nextSibling")
        },
        prevAll: function(e) {
            return M.dir(e, "previousSibling")
        },
        nextUntil: function(e, t, n) {
            return M.dir(e, "nextSibling", n)
        },
        prevUntil: function(e, t, n) {
            return M.dir(e, "previousSibling", n)
        },
        siblings: function(e) {
            return M.sibling((e.parentNode || {}).firstChild, e)
        },
        children: function(e) {
            return M.sibling(e.firstChild)
        },
        contents: function(e) {
            return M.nodeName(e, "iframe") ? e.contentDocument || e.contentWindow.document : M.makeArray(e.childNodes)
        }
    }, function(e, t) {
        M.fn[e] = function(n, i) {
            var r = M.map(this, t, n);
            return ae.test(e) || (i = n), i && "string" == typeof i && (r = M.filter(i, r)), r = this.length > 1 && !pe[e] ? M.unique(r) : r, (this.length > 1 || ce.test(i)) && le.test(e) && (r = r.reverse()), this.pushStack(r, e, de.call(arguments).join(","))
        }
    }), M.extend({
        filter: function(e, t, n) {
            return n && (e = ":not(" + e + ")"), 1 === t.length ? M.find.matchesSelector(t[0], e) ? [t[0]] : [] : M.find.matches(e, t)
        },
        dir: function(e, n, i) {
            for (var r = [], s = e[n]; s && 9 !== s.nodeType && (i === t || 1 !== s.nodeType || !M(s).is(i));) 1 === s.nodeType && r.push(s), s = s[n];
            return r
        },
        nth: function(e, t, n, i) {
            t = t || 1;
            for (var r = 0; e && (1 !== e.nodeType || ++r !== t); e = e[n]);
            return e
        },
        sibling: function(e, t) {
            for (var n = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e);
            return n
        }
    });
    var fe = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",
        ge = / jQuery\d+="(?:\d+|null)"/g,
        me = /^\s+/,
        ve = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
        ye = /<([\w:]+)/,
        _e = /<tbody/i,
        be = /<|&#?\w+;/,
        we = /<(?:script|style)/i,
        xe = /<(?:script|object|embed|option|style)/i,
        ke = new RegExp("<(?:" + fe + ")[\\s/>]", "i"),
        Ce = /checked\s*(?:[^=]|=\s*.checked.)/i,
        Te = /\/(java|ecma)script/i,
        Ne = /^\s*<!(?:\[CDATA\[|\-\-)/,
        Se = {
            option: [1, "<select multiple='multiple'>", "</select>"],
            legend: [1, "<fieldset>", "</fieldset>"],
            thead: [1, "<table>", "</table>"],
            tr: [2, "<table><tbody>", "</tbody></table>"],
            td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
            col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
            area: [1, "<map>", "</map>"],
            _default: [0, "", ""]
        },
        je = k(L);
    Se.optgroup = Se.option, Se.tbody = Se.tfoot = Se.colgroup = Se.caption = Se.thead, Se.th = Se.td, M.support.htmlSerialize || (Se._default = [1, "div<div>", "</div>"]), M.fn.extend({
        text: function(e) {
            return M.access(this, function(e) {
                return e === t ? M.text(this) : this.empty().append((this[0] && this[0].ownerDocument || L).createTextNode(e))
            }, null, e, arguments.length)
        },
        wrapAll: function(e) {
            if (M.isFunction(e)) return this.each(function(t) {
                M(this).wrapAll(e.call(this, t))
            });
            if (this[0]) {
                var t = M(e, this[0].ownerDocument).eq(0).clone(!0);
                this[0].parentNode && t.insertBefore(this[0]), t.map(function() {
                    for (var e = this; e.firstChild && 1 === e.firstChild.nodeType;) e = e.firstChild;
                    return e
                }).append(this)
            }
            return this
        },
        wrapInner: function(e) {
            return M.isFunction(e) ? this.each(function(t) {
                M(this).wrapInner(e.call(this, t))
            }) : this.each(function() {
                var t = M(this),
                    n = t.contents();
                n.length ? n.wrapAll(e) : t.append(e)
            })
        },
        wrap: function(e) {
            var t = M.isFunction(e);
            return this.each(function(n) {
                M(this).wrapAll(t ? e.call(this, n) : e)
            })
        },
        unwrap: function() {
            return this.parent().each(function() {
                M.nodeName(this, "body") || M(this).replaceWith(this.childNodes)
            }).end()
        },
        append: function() {
            return this.domManip(arguments, !0, function(e) {
                1 === this.nodeType && this.appendChild(e)
            })
        },
        prepend: function() {
            return this.domManip(arguments, !0, function(e) {
                1 === this.nodeType && this.insertBefore(e, this.firstChild)
            })
        },
        before: function() {
            if (this[0] && this[0].parentNode) return this.domManip(arguments, !1, function(e) {
                this.parentNode.insertBefore(e, this)
            });
            if (arguments.length) {
                var e = M.clean(arguments);
                return e.push.apply(e, this.toArray()), this.pushStack(e, "before", arguments)
            }
        },
        after: function() {
            if (this[0] && this[0].parentNode) return this.domManip(arguments, !1, function(e) {
                this.parentNode.insertBefore(e, this.nextSibling)
            });
            if (arguments.length) {
                var e = this.pushStack(this, "after", arguments);
                return e.push.apply(e, M.clean(arguments)), e
            }
        },
        remove: function(e, t) {
            for (var n, i = 0; null != (n = this[i]); i++)(!e || M.filter(e, [n]).length) && (!t && 1 === n.nodeType && (M.cleanData(n.getElementsByTagName("*")), M.cleanData([n])), n.parentNode && n.parentNode.removeChild(n));
            return this
        },
        empty: function() {
            for (var e, t = 0; null != (e = this[t]); t++)
                for (1 === e.nodeType && M.cleanData(e.getElementsByTagName("*")); e.firstChild;) e.removeChild(e.firstChild);
            return this
        },
        clone: function(e, t) {
            return e = null == e ? !1 : e, t = null == t ? e : t, this.map(function() {
                return M.clone(this, e, t)
            })
        },
        html: function(e) {
            return M.access(this, function(e) {
                var n = this[0] || {},
                    i = 0,
                    r = this.length;
                if (e === t) return 1 === n.nodeType ? n.innerHTML.replace(ge, "") : null;
                if ("string" == typeof e && !we.test(e) && (M.support.leadingWhitespace || !me.test(e)) && !Se[(ye.exec(e) || ["", ""])[1].toLowerCase()]) {
                    e = e.replace(ve, "<$1></$2>");
                    try {
                        for (; r > i; i++) n = this[i] || {}, 1 === n.nodeType && (M.cleanData(n.getElementsByTagName("*")), n.innerHTML = e);
                        n = 0
                    } catch (s) {}
                }
                n && this.empty().append(e)
            }, null, e, arguments.length)
        },
        replaceWith: function(e) {
            return this[0] && this[0].parentNode ? M.isFunction(e) ? this.each(function(t) {
                var n = M(this),
                    i = n.html();
                n.replaceWith(e.call(this, t, i))
            }) : ("string" != typeof e && (e = M(e).detach()), this.each(function() {
                var t = this.nextSibling,
                    n = this.parentNode;
                M(this).remove(), t ? M(t).before(e) : M(n).append(e)
            })) : this.length ? this.pushStack(M(M.isFunction(e) ? e() : e), "replaceWith", e) : this
        },
        detach: function(e) {
            return this.remove(e, !0)
        },
        domManip: function(e, n, i) {
            var r, s, o, a, l = e[0],
                c = [];
            if (!M.support.checkClone && 3 === arguments.length && "string" == typeof l && Ce.test(l)) return this.each(function() {
                M(this).domManip(e, n, i, !0)
            });
            if (M.isFunction(l)) return this.each(function(r) {
                var s = M(this);
                e[0] = l.call(this, r, n ? s.html() : t), s.domManip(e, n, i)
            });
            if (this[0]) {
                if (a = l && l.parentNode, r = M.support.parentNode && a && 11 === a.nodeType && a.childNodes.length === this.length ? {
                        fragment: a
                    } : M.buildFragment(e, this, c), o = r.fragment, s = 1 === o.childNodes.length ? o = o.firstChild : o.firstChild, s) {
                    n = n && M.nodeName(s, "tr");
                    for (var u = 0, d = this.length, h = d - 1; d > u; u++) i.call(n ? x(this[u], s) : this[u], r.cacheable || d > 1 && h > u ? M.clone(o, !0, !0) : o)
                }
                c.length && M.each(c, function(e, t) {
                    t.src ? M.ajax({
                        type: "GET",
                        global: !1,
                        url: t.src,
                        async: !1,
                        dataType: "script"
                    }) : M.globalEval((t.text || t.textContent || t.innerHTML || "").replace(Ne, "/*$0*/")), t.parentNode && t.parentNode.removeChild(t)
                })
            }
            return this
        }
    }), M.buildFragment = function(e, t, n) {
        var i, r, s, o, a = e[0];
        return t && t[0] && (o = t[0].ownerDocument || t[0]), o.createDocumentFragment || (o = L), 1 === e.length && "string" == typeof a && a.length < 512 && o === L && "<" === a.charAt(0) && !xe.test(a) && (M.support.checkClone || !Ce.test(a)) && (M.support.html5Clone || !ke.test(a)) && (r = !0, s = M.fragments[a], s && 1 !== s && (i = s)), i || (i = o.createDocumentFragment(), M.clean(e, o, i, n)), r && (M.fragments[a] = s ? i : 1), {
            fragment: i,
            cacheable: r
        }
    }, M.fragments = {}, M.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function(e, t) {
        M.fn[e] = function(n) {
            var i = [],
                r = M(n),
                s = 1 === this.length && this[0].parentNode;
            if (s && 11 === s.nodeType && 1 === s.childNodes.length && 1 === r.length) return r[t](this[0]), this;
            for (var o = 0, a = r.length; a > o; o++) {
                var l = (o > 0 ? this.clone(!0) : this).get();
                M(r[o])[t](l), i = i.concat(l)
            }
            return this.pushStack(i, e, r.selector)
        }
    }), M.extend({
        clone: function(e, t, n) {
            var i, r, s, o = M.support.html5Clone || M.isXMLDoc(e) || !ke.test("<" + e.nodeName + ">") ? e.cloneNode(!0) : m(e);
            if (!(M.support.noCloneEvent && M.support.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || M.isXMLDoc(e)))
                for (b(e, o), i = _(e), r = _(o), s = 0; i[s]; ++s) r[s] && b(i[s], r[s]);
            if (t && (w(e, o), n))
                for (i = _(e), r = _(o), s = 0; i[s]; ++s) w(i[s], r[s]);
            return i = r = null, o
        },
        clean: function(e, t, n, i) {
            var r, s, o, a = [];
            t = t || L, "undefined" == typeof t.createElement && (t = t.ownerDocument || t[0] && t[0].ownerDocument || L);
            for (var l, c = 0; null != (l = e[c]); c++)
                if ("number" == typeof l && (l += ""), l) {
                    if ("string" == typeof l)
                        if (be.test(l)) {
                            l = l.replace(ve, "<$1></$2>");
                            var u, d = (ye.exec(l) || ["", ""])[1].toLowerCase(),
                                h = Se[d] || Se._default,
                                p = h[0],
                                f = t.createElement("div"),
                                g = je.childNodes;
                            for (t === L ? je.appendChild(f) : k(t).appendChild(f), f.innerHTML = h[1] + l + h[2]; p--;) f = f.lastChild;
                            if (!M.support.tbody) {
                                var m = _e.test(l),
                                    y = "table" !== d || m ? "<table>" !== h[1] || m ? [] : f.childNodes : f.firstChild && f.firstChild.childNodes;
                                for (o = y.length - 1; o >= 0; --o) M.nodeName(y[o], "tbody") && !y[o].childNodes.length && y[o].parentNode.removeChild(y[o])
                            }!M.support.leadingWhitespace && me.test(l) && f.insertBefore(t.createTextNode(me.exec(l)[0]), f.firstChild), l = f.childNodes, f && (f.parentNode.removeChild(f), g.length > 0 && (u = g[g.length - 1], u && u.parentNode && u.parentNode.removeChild(u)))
                        } else l = t.createTextNode(l);
                    var _;
                    if (!M.support.appendChecked)
                        if (l[0] && "number" == typeof(_ = l.length))
                            for (o = 0; _ > o; o++) v(l[o]);
                        else v(l);
                    l.nodeType ? a.push(l) : a = M.merge(a, l)
                }
            if (n)
                for (r = function(e) {
                        return !e.type || Te.test(e.type)
                    }, c = 0; a[c]; c++)
                    if (s = a[c], i && M.nodeName(s, "script") && (!s.type || Te.test(s.type))) i.push(s.parentNode ? s.parentNode.removeChild(s) : s);
                    else {
                        if (1 === s.nodeType) {
                            var b = M.grep(s.getElementsByTagName("script"), r);
                            a.splice.apply(a, [c + 1, 0].concat(b))
                        }
                        n.appendChild(s)
                    }
            return a
        },
        cleanData: function(e) {
            for (var t, n, i, r = M.cache, s = M.event.special, o = M.support.deleteExpando, a = 0; null != (i = e[a]); a++)
                if ((!i.nodeName || !M.noData[i.nodeName.toLowerCase()]) && (n = i[M.expando])) {
                    if (t = r[n], t && t.events) {
                        for (var l in t.events) s[l] ? M.event.remove(i, l) : M.removeEvent(i, l, t.handle);
                        t.handle && (t.handle.elem = null)
                    }
                    o ? delete i[M.expando] : i.removeAttribute && i.removeAttribute(M.expando), delete r[n]
                }
        }
    });
    var Ee, Ae, De, Le = /alpha\([^)]*\)/i,
        Fe = /opacity=([^)]*)/,
        Oe = /([A-Z]|^ms)/g,
        Me = /^[\-+]?(?:\d*\.)?\d+$/i,
        $e = /^-?(?:\d*\.)?\d+(?!px)[^\d\s]+$/i,
        Ie = /^([\-+])=([\-+.\de]+)/,
        He = /^margin/,
        Be = {
            position: "absolute",
            visibility: "hidden",
            display: "block"
        },
        qe = ["Top", "Right", "Bottom", "Left"];
    M.fn.css = function(e, n) {
        return M.access(this, function(e, n, i) {
            return i !== t ? M.style(e, n, i) : M.css(e, n)
        }, e, n, arguments.length > 1)
    }, M.extend({
        cssHooks: {
            opacity: {
                get: function(e, t) {
                    if (t) {
                        var n = Ee(e, "opacity");
                        return "" === n ? "1" : n
                    }
                    return e.style.opacity
                }
            }
        },
        cssNumber: {
            fillOpacity: !0,
            fontWeight: !0,
            lineHeight: !0,
            opacity: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {
            "float": M.support.cssFloat ? "cssFloat" : "styleFloat"
        },
        style: function(e, n, i, r) {
            if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                var s, o, a = M.camelCase(n),
                    l = e.style,
                    c = M.cssHooks[a];
                if (n = M.cssProps[a] || a, i === t) return c && "get" in c && (s = c.get(e, !1, r)) !== t ? s : l[n];
                if (o = typeof i, "string" === o && (s = Ie.exec(i)) && (i = +(s[1] + 1) * +s[2] + parseFloat(M.css(e, n)), o = "number"), null == i || "number" === o && isNaN(i)) return;
                if ("number" === o && !M.cssNumber[a] && (i += "px"), !(c && "set" in c && (i = c.set(e, i)) === t)) try {
                    l[n] = i
                } catch (u) {}
            }
        },
        css: function(e, n, i) {
            var r, s;
            return n = M.camelCase(n), s = M.cssHooks[n], n = M.cssProps[n] || n, "cssFloat" === n && (n = "float"), s && "get" in s && (r = s.get(e, !0, i)) !== t ? r : Ee ? Ee(e, n) : void 0
        },
        swap: function(e, t, n) {
            var i, r, s = {};
            for (r in t) s[r] = e.style[r], e.style[r] = t[r];
            i = n.call(e);
            for (r in t) e.style[r] = s[r];
            return i
        }
    }), M.curCSS = M.css, L.defaultView && L.defaultView.getComputedStyle && (Ae = function(e, t) {
        var n, i, r, s, o = e.style;
        return t = t.replace(Oe, "-$1").toLowerCase(), (i = e.ownerDocument.defaultView) && (r = i.getComputedStyle(e, null)) && (n = r.getPropertyValue(t), "" === n && !M.contains(e.ownerDocument.documentElement, e) && (n = M.style(e, t))), !M.support.pixelMargin && r && He.test(t) && $e.test(n) && (s = o.width, o.width = n, n = r.width, o.width = s), n
    }), L.documentElement.currentStyle && (De = function(e, t) {
        var n, i, r, s = e.currentStyle && e.currentStyle[t],
            o = e.style;
        return null == s && o && (r = o[t]) && (s = r), $e.test(s) && (n = o.left, i = e.runtimeStyle && e.runtimeStyle.left, i && (e.runtimeStyle.left = e.currentStyle.left), o.left = "fontSize" === t ? "1em" : s, s = o.pixelLeft + "px", o.left = n, i && (e.runtimeStyle.left = i)), "" === s ? "auto" : s
    }), Ee = Ae || De, M.each(["height", "width"], function(e, t) {
        M.cssHooks[t] = {
            get: function(e, n, i) {
                return n ? 0 !== e.offsetWidth ? g(e, t, i) : M.swap(e, Be, function() {
                    return g(e, t, i)
                }) : void 0
            },
            set: function(e, t) {
                return Me.test(t) ? t + "px" : t
            }
        }
    }), M.support.opacity || (M.cssHooks.opacity = {
        get: function(e, t) {
            return Fe.test((t && e.currentStyle ? e.currentStyle.filter : e.style.filter) || "") ? parseFloat(RegExp.$1) / 100 + "" : t ? "1" : ""
        },
        set: function(e, t) {
            var n = e.style,
                i = e.currentStyle,
                r = M.isNumeric(t) ? "alpha(opacity=" + 100 * t + ")" : "",
                s = i && i.filter || n.filter || "";
            n.zoom = 1, t >= 1 && "" === M.trim(s.replace(Le, "")) && (n.removeAttribute("filter"), i && !i.filter) || (n.filter = Le.test(s) ? s.replace(Le, r) : s + " " + r)
        }
    }), M(function() {
        M.support.reliableMarginRight || (M.cssHooks.marginRight = {
            get: function(e, t) {
                return M.swap(e, {
                    display: "inline-block"
                }, function() {
                    return t ? Ee(e, "margin-right") : e.style.marginRight
                })
            }
        })
    }), M.expr && M.expr.filters && (M.expr.filters.hidden = function(e) {
        var t = e.offsetWidth,
            n = e.offsetHeight;
        return 0 === t && 0 === n || !M.support.reliableHiddenOffsets && "none" === (e.style && e.style.display || M.css(e, "display"))
    }, M.expr.filters.visible = function(e) {
        return !M.expr.filters.hidden(e)
    }), M.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function(e, t) {
        M.cssHooks[e + t] = {
            expand: function(n) {
                var i, r = "string" == typeof n ? n.split(" ") : [n],
                    s = {};
                for (i = 0; 4 > i; i++) s[e + qe[i] + t] = r[i] || r[i - 2] || r[0];
                return s
            }
        }
    });
    var Pe, Re, We = /%20/g,
        ze = /\[\]$/,
        Xe = /\r?\n/g,
        Ue = /#.*$/,
        Ve = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm,
        Je = /^(?:color|date|datetime|datetime-local|email|hidden|month|number|password|range|search|tel|text|time|url|week)$/i,
        Ge = /^(?:about|app|app\-storage|.+\-extension|file|res|widget):$/,
        Qe = /^(?:GET|HEAD)$/,
        Ye = /^\/\//,
        Ke = /\?/,
        Ze = /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,
        et = /^(?:select|textarea)/i,
        tt = /\s+/,
        nt = /([?&])_=[^&]*/,
        it = /^([\w\+\.\-]+:)(?:\/\/([^\/?#:]*)(?::(\d+))?)?/,
        rt = M.fn.load,
        st = {},
        ot = {},
        at = ["*/"] + ["*"];
    try {
        Pe = O.href
    } catch (lt) {
        Pe = L.createElement("a"), Pe.href = "", Pe = Pe.href
    }
    Re = it.exec(Pe.toLowerCase()) || [], M.fn.extend({
        load: function(e, n, i) {
            if ("string" != typeof e && rt) return rt.apply(this, arguments);
            if (!this.length) return this;
            var r = e.indexOf(" ");
            if (r >= 0) {
                var s = e.slice(r, e.length);
                e = e.slice(0, r)
            }
            var o = "GET";
            n && (M.isFunction(n) ? (i = n, n = t) : "object" == typeof n && (n = M.param(n, M.ajaxSettings.traditional), o = "POST"));
            var a = this;
            return M.ajax({
                url: e,
                type: o,
                dataType: "html",
                data: n,
                complete: function(e, t, n) {
                    n = e.responseText, e.isResolved() && (e.done(function(e) {
                        n = e
                    }), a.html(s ? M("<div>").append(n.replace(Ze, "")).find(s) : n)), i && a.each(i, [n, t, e])
                }
            }), this
        },
        serialize: function() {
            return M.param(this.serializeArray())
        },
        serializeArray: function() {
            return this.map(function() {
                return this.elements ? M.makeArray(this.elements) : this
            }).filter(function() {
                return this.name && !this.disabled && (this.checked || et.test(this.nodeName) || Je.test(this.type))
            }).map(function(e, t) {
                var n = M(this).val();
                return null == n ? null : M.isArray(n) ? M.map(n, function(e, n) {
                    return {
                        name: t.name,
                        value: e.replace(Xe, "\r\n")
                    }
                }) : {
                    name: t.name,
                    value: n.replace(Xe, "\r\n")
                }
            }).get()
        }
    }), M.each("ajaxStart ajaxStop ajaxComplete ajaxError ajaxSuccess ajaxSend".split(" "), function(e, t) {
        M.fn[t] = function(e) {
            return this.on(t, e)
        }
    }), M.each(["get", "post"], function(e, n) {
        M[n] = function(e, i, r, s) {
            return M.isFunction(i) && (s = s || r, r = i, i = t), M.ajax({
                type: n,
                url: e,
                data: i,
                success: r,
                dataType: s
            })
        }
    }), M.extend({
        getScript: function(e, n) {
            return M.get(e, t, n, "script")
        },
        getJSON: function(e, t, n) {
            return M.get(e, t, n, "json")
        },
        ajaxSetup: function(e, t) {
            return t ? h(e, M.ajaxSettings) : (t = e, e = M.ajaxSettings), h(e, t), e
        },
        ajaxSettings: {
            url: Pe,
            isLocal: Ge.test(Re[1]),
            global: !0,
            type: "GET",
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            processData: !0,
            async: !0,
            accepts: {
                xml: "application/xml, text/xml",
                html: "text/html",
                text: "text/plain",
                json: "application/json, text/javascript",
                "*": at
            },
            contents: {
                xml: /xml/,
                html: /html/,
                json: /json/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText"
            },
            converters: {
                "* text": e.String,
                "text html": !0,
                "text json": M.parseJSON,
                "text xml": M.parseXML
            },
            flatOptions: {
                context: !0,
                url: !0
            }
        },
        ajaxPrefilter: f(st),
        ajaxTransport: f(ot),
        ajax: function(e, n) {
            function i(e, n, i, o) {
                if (2 !== k) {
                    k = 2, l && clearTimeout(l), a = t, s = o || "", C.readyState = e > 0 ? 4 : 0;
                    var d, p, f, w, x, T = n,
                        N = i ? u(g, C, i) : t;
                    if (e >= 200 && 300 > e || 304 === e)
                        if (g.ifModified && ((w = C.getResponseHeader("Last-Modified")) && (M.lastModified[r] = w), (x = C.getResponseHeader("Etag")) && (M.etag[r] = x)), 304 === e) T = "notmodified", d = !0;
                        else try {
                            p = c(g, N), T = "success", d = !0
                        } catch (S) {
                            T = "parsererror", f = S
                        } else f = T, (!T || e) && (T = "error", 0 > e && (e = 0));
                    C.status = e, C.statusText = "" + (n || T), d ? y.resolveWith(m, [p, T, C]) : y.rejectWith(m, [C, T, f]), C.statusCode(b), b = t, h && v.trigger("ajax" + (d ? "Success" : "Error"), [C, g, d ? p : f]), _.fireWith(m, [C, T]), h && (v.trigger("ajaxComplete", [C, g]), --M.active || M.event.trigger("ajaxStop"))
                }
            }
            "object" == typeof e && (n = e, e = t), n = n || {};
            var r, s, o, a, l, d, h, f, g = M.ajaxSetup({}, n),
                m = g.context || g,
                v = m !== g && (m.nodeType || m instanceof M) ? M(m) : M.event,
                y = M.Deferred(),
                _ = M.Callbacks("once memory"),
                b = g.statusCode || {},
                w = {},
                x = {},
                k = 0,
                C = {
                    readyState: 0,
                    setRequestHeader: function(e, t) {
                        if (!k) {
                            var n = e.toLowerCase();
                            e = x[n] = x[n] || e, w[e] = t
                        }
                        return this
                    },
                    getAllResponseHeaders: function() {
                        return 2 === k ? s : null
                    },
                    getResponseHeader: function(e) {
                        var n;
                        if (2 === k) {
                            if (!o)
                                for (o = {}; n = Ve.exec(s);) o[n[1].toLowerCase()] = n[2];
                            n = o[e.toLowerCase()]
                        }
                        return n === t ? null : n
                    },
                    overrideMimeType: function(e) {
                        return k || (g.mimeType = e), this
                    },
                    abort: function(e) {
                        return e = e || "abort", a && a.abort(e), i(0, e), this
                    }
                };
            if (y.promise(C), C.success = C.done, C.error = C.fail, C.complete = _.add, C.statusCode = function(e) {
                    if (e) {
                        var t;
                        if (2 > k)
                            for (t in e) b[t] = [b[t], e[t]];
                        else t = e[C.status], C.then(t, t)
                    }
                    return this
                }, g.url = ((e || g.url) + "").replace(Ue, "").replace(Ye, Re[1] + "//"), g.dataTypes = M.trim(g.dataType || "*").toLowerCase().split(tt), null == g.crossDomain && (d = it.exec(g.url.toLowerCase()), g.crossDomain = !(!d || d[1] == Re[1] && d[2] == Re[2] && (d[3] || ("http:" === d[1] ? 80 : 443)) == (Re[3] || ("http:" === Re[1] ? 80 : 443)))), g.data && g.processData && "string" != typeof g.data && (g.data = M.param(g.data, g.traditional)), p(st, g, n, C), 2 === k) return !1;
            if (h = g.global, g.type = g.type.toUpperCase(), g.hasContent = !Qe.test(g.type), h && 0 === M.active++ && M.event.trigger("ajaxStart"), !g.hasContent && (g.data && (g.url += (Ke.test(g.url) ? "&" : "?") + g.data, delete g.data), r = g.url, g.cache === !1)) {
                var T = M.now(),
                    N = g.url.replace(nt, "$1_=" + T);
                g.url = N + (N === g.url ? (Ke.test(g.url) ? "&" : "?") + "_=" + T : "")
            }(g.data && g.hasContent && g.contentType !== !1 || n.contentType) && C.setRequestHeader("Content-Type", g.contentType), g.ifModified && (r = r || g.url, M.lastModified[r] && C.setRequestHeader("If-Modified-Since", M.lastModified[r]), M.etag[r] && C.setRequestHeader("If-None-Match", M.etag[r])), C.setRequestHeader("Accept", g.dataTypes[0] && g.accepts[g.dataTypes[0]] ? g.accepts[g.dataTypes[0]] + ("*" !== g.dataTypes[0] ? ", " + at + "; q=0.01" : "") : g.accepts["*"]);
            for (f in g.headers) C.setRequestHeader(f, g.headers[f]);
            if (g.beforeSend && (g.beforeSend.call(m, C, g) === !1 || 2 === k)) return C.abort(), !1;
            for (f in {
                    success: 1,
                    error: 1,
                    complete: 1
                }) C[f](g[f]);
            if (a = p(ot, g, n, C)) {
                C.readyState = 1, h && v.trigger("ajaxSend", [C, g]), g.async && g.timeout > 0 && (l = setTimeout(function() {
                    C.abort("timeout")
                }, g.timeout));
                try {
                    k = 1, a.send(w, i)
                } catch (S) {
                    if (!(2 > k)) throw S;
                    i(-1, S)
                }
            } else i(-1, "No Transport");
            return C
        },
        param: function(e, n) {
            var i = [],
                r = function(e, t) {
                    t = M.isFunction(t) ? t() : t, i[i.length] = encodeURIComponent(e) + "=" + encodeURIComponent(t)
                };
            if (n === t && (n = M.ajaxSettings.traditional), M.isArray(e) || e.jquery && !M.isPlainObject(e)) M.each(e, function() {
                r(this.name, this.value)
            });
            else
                for (var s in e) d(s, e[s], n, r);
            return i.join("&").replace(We, "+")
        }
    }), M.extend({
        active: 0,
        lastModified: {},
        etag: {}
    });
    var ct = M.now(),
        ut = /(\=)\?(&|$)|\?\?/i;
    M.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function() {
            return M.expando + "_" + ct++
        }
    }), M.ajaxPrefilter("json jsonp", function(t, n, i) {
        var r = "string" == typeof t.data && /^application\/x\-www\-form\-urlencoded/.test(t.contentType);
        if ("jsonp" === t.dataTypes[0] || t.jsonp !== !1 && (ut.test(t.url) || r && ut.test(t.data))) {
            var s, o = t.jsonpCallback = M.isFunction(t.jsonpCallback) ? t.jsonpCallback() : t.jsonpCallback,
                a = e[o],
                l = t.url,
                c = t.data,
                u = "$1" + o + "$2";
            return t.jsonp !== !1 && (l = l.replace(ut, u), t.url === l && (r && (c = c.replace(ut, u)), t.data === c && (l += (/\?/.test(l) ? "&" : "?") + t.jsonp + "=" + o))), t.url = l, t.data = c, e[o] = function(e) {
                s = [e]
            }, i.always(function() {
                e[o] = a, s && M.isFunction(a) && e[o](s[0])
            }), t.converters["script json"] = function() {
                return s || M.error(o + " was not called"), s[0]
            }, t.dataTypes[0] = "json", "script"
        }
    }), M.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /javascript|ecmascript/
        },
        converters: {
            "text script": function(e) {
                return M.globalEval(e), e
            }
        }
    }), M.ajaxPrefilter("script", function(e) {
        e.cache === t && (e.cache = !1), e.crossDomain && (e.type = "GET", e.global = !1)
    }), M.ajaxTransport("script", function(e) {
        if (e.crossDomain) {
            var n, i = L.head || L.getElementsByTagName("head")[0] || L.documentElement;
            return {
                send: function(r, s) {
                    n = L.createElement("script"), n.async = "async", e.scriptCharset && (n.charset = e.scriptCharset), n.src = e.url, n.onload = n.onreadystatechange = function(e, r) {
                        (r || !n.readyState || /loaded|complete/.test(n.readyState)) && (n.onload = n.onreadystatechange = null, i && n.parentNode && i.removeChild(n), n = t, r || s(200, "success"))
                    }, i.insertBefore(n, i.firstChild)
                },
                abort: function() {
                    n && n.onload(0, 1)
                }
            }
        }
    });
    var dt, ht = e.ActiveXObject ? function() {
            for (var e in dt) dt[e](0, 1)
        } : !1,
        pt = 0;
    M.ajaxSettings.xhr = e.ActiveXObject ? function() {
            return !this.isLocal && l() || a()
        } : l,
        function(e) {
            M.extend(M.support, {
                ajax: !!e,
                cors: !!e && "withCredentials" in e
            })
        }(M.ajaxSettings.xhr()), M.support.ajax && M.ajaxTransport(function(n) {
            if (!n.crossDomain || M.support.cors) {
                var i;
                return {
                    send: function(r, s) {
                        var o, a, l = n.xhr();
                        if (n.username ? l.open(n.type, n.url, n.async, n.username, n.password) : l.open(n.type, n.url, n.async), n.xhrFields)
                            for (a in n.xhrFields) l[a] = n.xhrFields[a];
                        n.mimeType && l.overrideMimeType && l.overrideMimeType(n.mimeType), !n.crossDomain && !r["X-Requested-With"] && (r["X-Requested-With"] = "XMLHttpRequest");
                        try {
                            for (a in r) l.setRequestHeader(a, r[a])
                        } catch (c) {}
                        l.send(n.hasContent && n.data || null), i = function(e, r) {
                            var a, c, u, d, h;
                            try {
                                if (i && (r || 4 === l.readyState))
                                    if (i = t, o && (l.onreadystatechange = M.noop, ht && delete dt[o]), r) 4 !== l.readyState && l.abort();
                                    else {
                                        a = l.status, u = l.getAllResponseHeaders(), d = {}, h = l.responseXML, h && h.documentElement && (d.xml = h);
                                        try {
                                            d.text = l.responseText
                                        } catch (e) {}
                                        try {
                                            c = l.statusText
                                        } catch (p) {
                                            c = ""
                                        }
                                        a || !n.isLocal || n.crossDomain ? 1223 === a && (a = 204) : a = d.text ? 200 : 404
                                    }
                            } catch (f) {
                                r || s(-1, f)
                            }
                            d && s(a, c, d, u)
                        }, n.async && 4 !== l.readyState ? (o = ++pt, ht && (dt || (dt = {}, M(e).unload(ht)), dt[o] = i), l.onreadystatechange = i) : i()
                    },
                    abort: function() {
                        i && i(0, 1)
                    }
                }
            }
        });
    var ft, gt, mt, vt, yt = {},
        _t = /^(?:toggle|show|hide)$/,
        bt = /^([+\-]=)?([\d+.\-]+)([a-z%]*)$/i,
        wt = [
            ["height", "marginTop", "marginBottom", "paddingTop", "paddingBottom"],
            ["width", "marginLeft", "marginRight", "paddingLeft", "paddingRight"],
            ["opacity"]
        ];
    M.fn.extend({
        show: function(e, t, n) {
            var s, o;
            if (e || 0 === e) return this.animate(r("show", 3), e, t, n);
            for (var a = 0, l = this.length; l > a; a++) s = this[a], s.style && (o = s.style.display, !M._data(s, "olddisplay") && "none" === o && (o = s.style.display = ""), ("" === o && "none" === M.css(s, "display") || !M.contains(s.ownerDocument.documentElement, s)) && M._data(s, "olddisplay", i(s.nodeName)));
            for (a = 0; l > a; a++) s = this[a], s.style && (o = s.style.display, ("" === o || "none" === o) && (s.style.display = M._data(s, "olddisplay") || ""));
            return this
        },
        hide: function(e, t, n) {
            if (e || 0 === e) return this.animate(r("hide", 3), e, t, n);
            for (var i, s, o = 0, a = this.length; a > o; o++) i = this[o], i.style && (s = M.css(i, "display"), "none" !== s && !M._data(i, "olddisplay") && M._data(i, "olddisplay", s));
            for (o = 0; a > o; o++) this[o].style && (this[o].style.display = "none");
            return this
        },
        _toggle: M.fn.toggle,
        toggle: function(e, t, n) {
            var i = "boolean" == typeof e;
            return M.isFunction(e) && M.isFunction(t) ? this._toggle.apply(this, arguments) : null == e || i ? this.each(function() {
                var t = i ? e : M(this).is(":hidden");
                M(this)[t ? "show" : "hide"]()
            }) : this.animate(r("toggle", 3), e, t, n), this
        },
        fadeTo: function(e, t, n, i) {
            return this.filter(":hidden").css("opacity", 0).show().end().animate({
                opacity: t
            }, e, n, i)
        },
        animate: function(e, t, n, r) {
            function s() {
                o.queue === !1 && M._mark(this);
                var t, n, r, s, a, l, c, u, d, h, p, f = M.extend({}, o),
                    g = 1 === this.nodeType,
                    m = g && M(this).is(":hidden");
                f.animatedProperties = {};
                for (r in e)
                    if (t = M.camelCase(r), r !== t && (e[t] = e[r], delete e[r]), (a = M.cssHooks[t]) && "expand" in a) {
                        l = a.expand(e[t]), delete e[t];
                        for (r in l) r in e || (e[r] = l[r])
                    }
                for (t in e) {
                    if (n = e[t], M.isArray(n) ? (f.animatedProperties[t] = n[1], n = e[t] = n[0]) : f.animatedProperties[t] = f.specialEasing && f.specialEasing[t] || f.easing || "swing", "hide" === n && m || "show" === n && !m) return f.complete.call(this);
                    g && ("height" === t || "width" === t) && (f.overflow = [this.style.overflow, this.style.overflowX, this.style.overflowY], "inline" === M.css(this, "display") && "none" === M.css(this, "float") && (M.support.inlineBlockNeedsLayout && "inline" !== i(this.nodeName) ? this.style.zoom = 1 : this.style.display = "inline-block"))
                }
                null != f.overflow && (this.style.overflow = "hidden");
                for (r in e) s = new M.fx(this, f, r), n = e[r], _t.test(n) ? (p = M._data(this, "toggle" + r) || ("toggle" === n ? m ? "show" : "hide" : 0), p ? (M._data(this, "toggle" + r, "show" === p ? "hide" : "show"), s[p]()) : s[n]()) : (c = bt.exec(n), u = s.cur(), c ? (d = parseFloat(c[2]), h = c[3] || (M.cssNumber[r] ? "" : "px"), "px" !== h && (M.style(this, r, (d || 1) + h), u = (d || 1) / s.cur() * u, M.style(this, r, u + h)), c[1] && (d = ("-=" === c[1] ? -1 : 1) * d + u), s.custom(u, d, h)) : s.custom(u, n, ""));
                return !0
            }
            var o = M.speed(t, n, r);
            return M.isEmptyObject(e) ? this.each(o.complete, [!1]) : (e = M.extend({}, e), o.queue === !1 ? this.each(s) : this.queue(o.queue, s))
        },
        stop: function(e, n, i) {
            return "string" != typeof e && (i = n, n = e, e = t), n && e !== !1 && this.queue(e || "fx", []), this.each(function() {
                function t(e, t, n) {
                    var r = t[n];
                    M.removeData(e, n, !0), r.stop(i)
                }
                var n, r = !1,
                    s = M.timers,
                    o = M._data(this);
                if (i || M._unmark(!0, this), null == e)
                    for (n in o) o[n] && o[n].stop && n.indexOf(".run") === n.length - 4 && t(this, o, n);
                else o[n = e + ".run"] && o[n].stop && t(this, o, n);
                for (n = s.length; n--;) s[n].elem === this && (null == e || s[n].queue === e) && (i ? s[n](!0) : s[n].saveState(), r = !0, s.splice(n, 1));
                (!i || !r) && M.dequeue(this, e)
            })
        }
    }), M.each({
        slideDown: r("show", 1),
        slideUp: r("hide", 1),
        slideToggle: r("toggle", 1),
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
        M.fn[e] = function(e, n, i) {
            return this.animate(t, e, n, i)
        }
    }), M.extend({
        speed: function(e, t, n) {
            var i = e && "object" == typeof e ? M.extend({}, e) : {
                complete: n || !n && t || M.isFunction(e) && e,
                duration: e,
                easing: n && t || t && !M.isFunction(t) && t
            };
            return i.duration = M.fx.off ? 0 : "number" == typeof i.duration ? i.duration : i.duration in M.fx.speeds ? M.fx.speeds[i.duration] : M.fx.speeds._default, (null == i.queue || i.queue === !0) && (i.queue = "fx"), i.old = i.complete, i.complete = function(e) {
                M.isFunction(i.old) && i.old.call(this), i.queue ? M.dequeue(this, i.queue) : e !== !1 && M._unmark(this)
            }, i
        },
        easing: {
            linear: function(e) {
                return e
            },
            swing: function(e) {
                return -Math.cos(e * Math.PI) / 2 + .5
            }
        },
        timers: [],
        fx: function(e, t, n) {
            this.options = t, this.elem = e, this.prop = n, t.orig = t.orig || {}
        }
    }), M.fx.prototype = {
        update: function() {
            this.options.step && this.options.step.call(this.elem, this.now, this), (M.fx.step[this.prop] || M.fx.step._default)(this)
        },
        cur: function() {
            if (null != this.elem[this.prop] && (!this.elem.style || null == this.elem.style[this.prop])) return this.elem[this.prop];
            var e, t = M.css(this.elem, this.prop);
            return isNaN(e = parseFloat(t)) ? t && "auto" !== t ? t : 0 : e
        },
        custom: function(e, n, i) {
            function r(e) {
                return s.step(e)
            }
            var s = this,
                a = M.fx;
            this.startTime = vt || o(), this.end = n, this.now = this.start = e, this.pos = this.state = 0, this.unit = i || this.unit || (M.cssNumber[this.prop] ? "" : "px"), r.queue = this.options.queue, r.elem = this.elem, r.saveState = function() {
                M._data(s.elem, "fxshow" + s.prop) === t && (s.options.hide ? M._data(s.elem, "fxshow" + s.prop, s.start) : s.options.show && M._data(s.elem, "fxshow" + s.prop, s.end))
            }, r() && M.timers.push(r) && !mt && (mt = setInterval(a.tick, a.interval))
        },
        show: function() {
            var e = M._data(this.elem, "fxshow" + this.prop);
            this.options.orig[this.prop] = e || M.style(this.elem, this.prop), this.options.show = !0, e !== t ? this.custom(this.cur(), e) : this.custom("width" === this.prop || "height" === this.prop ? 1 : 0, this.cur()), M(this.elem).show()
        },
        hide: function() {
            this.options.orig[this.prop] = M._data(this.elem, "fxshow" + this.prop) || M.style(this.elem, this.prop), this.options.hide = !0, this.custom(this.cur(), 0)
        },
        step: function(e) {
            var t, n, i, r = vt || o(),
                s = !0,
                a = this.elem,
                l = this.options;
            if (e || r >= l.duration + this.startTime) {
                this.now = this.end, this.pos = this.state = 1, this.update(), l.animatedProperties[this.prop] = !0;
                for (t in l.animatedProperties) l.animatedProperties[t] !== !0 && (s = !1);
                if (s) {
                    if (null != l.overflow && !M.support.shrinkWrapBlocks && M.each(["", "X", "Y"], function(e, t) {
                            a.style["overflow" + t] = l.overflow[e]
                        }), l.hide && M(a).hide(), l.hide || l.show)
                        for (t in l.animatedProperties) M.style(a, t, l.orig[t]), M.removeData(a, "fxshow" + t, !0), M.removeData(a, "toggle" + t, !0);
                    i = l.complete, i && (l.complete = !1, i.call(a))
                }
                return !1
            }
            return l.duration == 1 / 0 ? this.now = r : (n = r - this.startTime, this.state = n / l.duration, this.pos = M.easing[l.animatedProperties[this.prop]](this.state, n, 0, 1, l.duration), this.now = this.start + (this.end - this.start) * this.pos), this.update(), !0
        }
    }, M.extend(M.fx, {
        tick: function() {
            for (var e, t = M.timers, n = 0; n < t.length; n++) e = t[n], !e() && t[n] === e && t.splice(n--, 1);
            t.length || M.fx.stop()
        },
        interval: 13,
        stop: function() {
            clearInterval(mt), mt = null
        },
        speeds: {
            slow: 600,
            fast: 200,
            _default: 400
        },
        step: {
            opacity: function(e) {
                M.style(e.elem, "opacity", e.now)
            },
            _default: function(e) {
                e.elem.style && null != e.elem.style[e.prop] ? e.elem.style[e.prop] = e.now + e.unit : e.elem[e.prop] = e.now
            }
        }
    }), M.each(wt.concat.apply([], wt), function(e, t) {
        t.indexOf("margin") && (M.fx.step[t] = function(e) {
            M.style(e.elem, t, Math.max(0, e.now) + e.unit)
        })
    }), M.expr && M.expr.filters && (M.expr.filters.animated = function(e) {
        return M.grep(M.timers, function(t) {
            return e === t.elem
        }).length
    });
    var xt, kt = /^t(?:able|d|h)$/i,
        Ct = /^(?:body|html)$/i;
    xt = "getBoundingClientRect" in L.documentElement ? function(e, t, i, r) {
        try {
            r = e.getBoundingClientRect()
        } catch (s) {}
        if (!r || !M.contains(i, e)) return r ? {
            top: r.top,
            left: r.left
        } : {
            top: 0,
            left: 0
        };
        var o = t.body,
            a = n(t),
            l = i.clientTop || o.clientTop || 0,
            c = i.clientLeft || o.clientLeft || 0,
            u = a.pageYOffset || M.support.boxModel && i.scrollTop || o.scrollTop,
            d = a.pageXOffset || M.support.boxModel && i.scrollLeft || o.scrollLeft,
            h = r.top + u - l,
            p = r.left + d - c;
        return {
            top: h,
            left: p
        }
    } : function(e, t, n) {
        for (var i, r = e.offsetParent, s = e, o = t.body, a = t.defaultView, l = a ? a.getComputedStyle(e, null) : e.currentStyle, c = e.offsetTop, u = e.offsetLeft;
            (e = e.parentNode) && e !== o && e !== n && (!M.support.fixedPosition || "fixed" !== l.position);) i = a ? a.getComputedStyle(e, null) : e.currentStyle,
            c -= e.scrollTop, u -= e.scrollLeft, e === r && (c += e.offsetTop, u += e.offsetLeft, M.support.doesNotAddBorder && (!M.support.doesAddBorderForTableAndCells || !kt.test(e.nodeName)) && (c += parseFloat(i.borderTopWidth) || 0, u += parseFloat(i.borderLeftWidth) || 0), s = r, r = e.offsetParent), M.support.subtractsBorderForOverflowNotVisible && "visible" !== i.overflow && (c += parseFloat(i.borderTopWidth) || 0, u += parseFloat(i.borderLeftWidth) || 0), l = i;
        return ("relative" === l.position || "static" === l.position) && (c += o.offsetTop, u += o.offsetLeft), M.support.fixedPosition && "fixed" === l.position && (c += Math.max(n.scrollTop, o.scrollTop), u += Math.max(n.scrollLeft, o.scrollLeft)), {
            top: c,
            left: u
        }
    }, M.fn.offset = function(e) {
        if (arguments.length) return e === t ? this : this.each(function(t) {
            M.offset.setOffset(this, e, t)
        });
        var n = this[0],
            i = n && n.ownerDocument;
        return i ? n === i.body ? M.offset.bodyOffset(n) : xt(n, i, i.documentElement) : null
    }, M.offset = {
        bodyOffset: function(e) {
            var t = e.offsetTop,
                n = e.offsetLeft;
            return M.support.doesNotIncludeMarginInBodyOffset && (t += parseFloat(M.css(e, "marginTop")) || 0, n += parseFloat(M.css(e, "marginLeft")) || 0), {
                top: t,
                left: n
            }
        },
        setOffset: function(e, t, n) {
            var i = M.css(e, "position");
            "static" === i && (e.style.position = "relative");
            var r, s, o = M(e),
                a = o.offset(),
                l = M.css(e, "top"),
                c = M.css(e, "left"),
                u = ("absolute" === i || "fixed" === i) && M.inArray("auto", [l, c]) > -1,
                d = {},
                h = {};
            u ? (h = o.position(), r = h.top, s = h.left) : (r = parseFloat(l) || 0, s = parseFloat(c) || 0), M.isFunction(t) && (t = t.call(e, n, a)), null != t.top && (d.top = t.top - a.top + r), null != t.left && (d.left = t.left - a.left + s), "using" in t ? t.using.call(e, d) : o.css(d)
        }
    }, M.fn.extend({
        position: function() {
            if (!this[0]) return null;
            var e = this[0],
                t = this.offsetParent(),
                n = this.offset(),
                i = Ct.test(t[0].nodeName) ? {
                    top: 0,
                    left: 0
                } : t.offset();
            return n.top -= parseFloat(M.css(e, "marginTop")) || 0, n.left -= parseFloat(M.css(e, "marginLeft")) || 0, i.top += parseFloat(M.css(t[0], "borderTopWidth")) || 0, i.left += parseFloat(M.css(t[0], "borderLeftWidth")) || 0, {
                top: n.top - i.top,
                left: n.left - i.left
            }
        },
        offsetParent: function() {
            return this.map(function() {
                for (var e = this.offsetParent || L.body; e && !Ct.test(e.nodeName) && "static" === M.css(e, "position");) e = e.offsetParent;
                return e
            })
        }
    }), M.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function(e, i) {
        var r = /Y/.test(i);
        M.fn[e] = function(s) {
            return M.access(this, function(e, s, o) {
                var a = n(e);
                return o === t ? a ? i in a ? a[i] : M.support.boxModel && a.document.documentElement[s] || a.document.body[s] : e[s] : void(a ? a.scrollTo(r ? M(a).scrollLeft() : o, r ? o : M(a).scrollTop()) : e[s] = o)
            }, e, s, arguments.length, null)
        }
    }), M.each({
        Height: "height",
        Width: "width"
    }, function(e, n) {
        var i = "client" + e,
            r = "scroll" + e,
            s = "offset" + e;
        M.fn["inner" + e] = function() {
            var e = this[0];
            return e ? e.style ? parseFloat(M.css(e, n, "padding")) : this[n]() : null
        }, M.fn["outer" + e] = function(e) {
            var t = this[0];
            return t ? t.style ? parseFloat(M.css(t, n, e ? "margin" : "border")) : this[n]() : null
        }, M.fn[n] = function(e) {
            return M.access(this, function(e, n, o) {
                var a, l, c, u;
                return M.isWindow(e) ? (a = e.document, l = a.documentElement[i], M.support.boxModel && l || a.body && a.body[i] || l) : 9 === e.nodeType ? (a = e.documentElement, a[i] >= a[r] ? a[i] : Math.max(e.body[r], a[r], e.body[s], a[s])) : o === t ? (c = M.css(e, n), u = parseFloat(c), M.isNumeric(u) ? u : c) : void M(e).css(n, o)
            }, n, e, arguments.length, null)
        }
    }), e.jQuery = e.$ = M, "function" == typeof define && define.amd && define.amd.jQuery && define("jquery", [], function() {
        return M
    })
}(window), ! function() {
    var e, t, n, i, r, s = {}.hasOwnProperty,
        o = function(e, t) {
            function n() {
                this.constructor = e
            }
            for (var i in t) s.call(t, i) && (e[i] = t[i]);
            return n.prototype = t.prototype, e.prototype = new n, e.__super__ = t.prototype, e
        };
    i = function() {
        function e() {
            this.options_index = 0, this.parsed = []
        }
        return e.prototype.add_node = function(e) {
            return "OPTGROUP" === e.nodeName.toUpperCase() ? this.add_group(e) : this.add_option(e)
        }, e.prototype.add_group = function(e) {
            var t, n, i, r, s, o;
            for (t = this.parsed.length, this.parsed.push({
                    array_index: t,
                    group: !0,
                    label: this.escapeExpression(e.label),
                    children: 0,
                    disabled: e.disabled
                }), s = e.childNodes, o = [], i = 0, r = s.length; r > i; i++) n = s[i], o.push(this.add_option(n, t, e.disabled));
            return o
        }, e.prototype.add_option = function(e, t, n) {
            return "OPTION" === e.nodeName.toUpperCase() ? ("" !== e.text ? (null != t && (this.parsed[t].children += 1), this.parsed.push({
                array_index: this.parsed.length,
                options_index: this.options_index,
                value: e.value,
                text: e.text,
                html: e.innerHTML,
                selected: e.selected,
                disabled: n === !0 ? n : e.disabled,
                group_array_index: t,
                classes: e.className,
                style: e.style.cssText
            })) : this.parsed.push({
                array_index: this.parsed.length,
                options_index: this.options_index,
                empty: !0
            }), this.options_index += 1) : void 0
        }, e.prototype.escapeExpression = function(e) {
            var t, n;
            return null == e || e === !1 ? "" : /[\&\<\>\"\'\`]/.test(e) ? (t = {
                "<": "&lt;",
                ">": "&gt;",
                '"': "&quot;",
                "'": "&#x27;",
                "`": "&#x60;"
            }, n = /&(?!\w+;)|[\<\>\"\'\`]/g, e.replace(n, function(e) {
                return t[e] || "&amp;"
            })) : e
        }, e
    }(), i.select_to_array = function(e) {
        var t, n, r, s, o;
        for (n = new i, o = e.childNodes, r = 0, s = o.length; s > r; r++) t = o[r], n.add_node(t);
        return n.parsed
    }, t = function() {
        function e(t, n) {
            this.form_field = t, this.options = null != n ? n : {}, e.browser_is_supported() && (this.is_multiple = this.form_field.multiple, this.set_default_text(), this.set_default_values(), this.setup(), this.set_up_html(), this.register_observers())
        }
        return e.prototype.set_default_values = function() {
            var e = this;
            return this.click_test_action = function(t) {
                return e.test_active_click(t)
            }, this.activate_action = function(t) {
                return e.activate_field(t)
            }, this.active_field = !1, this.mouse_on_container = !1, this.results_showing = !1, this.result_highlighted = null, this.result_single_selected = null, this.allow_single_deselect = null != this.options.allow_single_deselect && null != this.form_field.options[0] && "" === this.form_field.options[0].text ? this.options.allow_single_deselect : !1, this.disable_search_threshold = this.options.disable_search_threshold || 0, this.disable_search = this.options.disable_search || !1, this.enable_split_word_search = null != this.options.enable_split_word_search ? this.options.enable_split_word_search : !0, this.group_search = null != this.options.group_search ? this.options.group_search : !0, this.search_contains = this.options.search_contains || !1, this.single_backstroke_delete = null != this.options.single_backstroke_delete ? this.options.single_backstroke_delete : !0, this.max_selected_options = this.options.max_selected_options || 1 / 0, this.inherit_select_classes = this.options.inherit_select_classes || !1, this.display_selected_options = null != this.options.display_selected_options ? this.options.display_selected_options : !0, this.display_disabled_options = null != this.options.display_disabled_options ? this.options.display_disabled_options : !0
        }, e.prototype.set_default_text = function() {
            return this.default_text = this.form_field.getAttribute("data-placeholder") ? this.form_field.getAttribute("data-placeholder") : this.is_multiple ? this.options.placeholder_text_multiple || this.options.placeholder_text || e.default_multiple_text : this.options.placeholder_text_single || this.options.placeholder_text || e.default_single_text, this.results_none_found = this.form_field.getAttribute("data-no_results_text") || this.options.no_results_text || e.default_no_result_text
        }, e.prototype.mouse_enter = function() {
            return this.mouse_on_container = !0
        }, e.prototype.mouse_leave = function() {
            return this.mouse_on_container = !1
        }, e.prototype.input_focus = function() {
            var e = this;
            if (this.is_multiple) {
                if (!this.active_field) return setTimeout(function() {
                    return e.container_mousedown()
                }, 50)
            } else if (!this.active_field) return this.activate_field()
        }, e.prototype.input_blur = function() {
            var e = this;
            return this.mouse_on_container ? void 0 : (this.active_field = !1, setTimeout(function() {
                return e.blur_test()
            }, 100))
        }, e.prototype.results_option_build = function(e) {
            var t, n, i, r, s;
            for (t = "", s = this.results_data, i = 0, r = s.length; r > i; i++) n = s[i], t += n.group ? this.result_add_group(n) : this.result_add_option(n), (null != e ? e.first : void 0) && (n.selected && this.is_multiple ? this.choice_build(n) : n.selected && !this.is_multiple && this.single_set_selected_text(n.text));
            return t
        }, e.prototype.result_add_option = function(e) {
            var t, n;
            return e.search_match && this.include_option_in_results(e) ? (t = [], e.disabled || e.selected && this.is_multiple || t.push("active-result"), !e.disabled || e.selected && this.is_multiple || t.push("disabled-result"), e.selected && t.push("result-selected"), null != e.group_array_index && t.push("group-option"), "" !== e.classes && t.push(e.classes), n = "" !== e.style.cssText ? ' style="' + e.style + '"' : "", '<li class="' + t.join(" ") + '"' + n + ' data-option-array-index="' + e.array_index + '">' + e.search_text + "</li>") : ""
        }, e.prototype.result_add_group = function(e) {
            return (e.search_match || e.group_match) && e.active_options > 0 ? '<li class="group-result">' + e.search_text + "</li>" : ""
        }, e.prototype.results_update_field = function() {
            return this.set_default_text(), this.is_multiple || this.results_reset_cleanup(), this.result_clear_highlight(), this.result_single_selected = null, this.results_build(), this.results_showing ? this.winnow_results() : void 0
        }, e.prototype.results_toggle = function() {
            return this.results_showing ? this.results_hide() : this.results_show()
        }, e.prototype.results_search = function() {
            return this.results_showing ? this.winnow_results() : this.results_show()
        }, e.prototype.winnow_results = function() {
            var e, t, n, i, r, s, o, a, l, c, u, d, h;
            for (this.no_results_clear(), r = 0, o = this.get_search_text(), e = o.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&"), i = this.search_contains ? "" : "^", n = new RegExp(i + e, "i"), c = new RegExp(e, "i"), h = this.results_data, u = 0, d = h.length; d > u; u++) t = h[u], t.search_match = !1, s = null, this.include_option_in_results(t) && (t.group && (t.group_match = !1, t.active_options = 0), null != t.group_array_index && this.results_data[t.group_array_index] && (s = this.results_data[t.group_array_index], 0 === s.active_options && s.search_match && (r += 1), s.active_options += 1), (!t.group || this.group_search) && (t.search_text = t.group ? t.label : t.html, t.search_match = this.search_string_match(t.search_text, n), t.search_match && !t.group && (r += 1), t.search_match ? (o.length && (a = t.search_text.search(c), l = t.search_text.substr(0, a + o.length) + "</em>" + t.search_text.substr(a + o.length), t.search_text = l.substr(0, a) + "<em>" + l.substr(a)), null != s && (s.group_match = !0)) : null != t.group_array_index && this.results_data[t.group_array_index].search_match && (t.search_match = !0)));
            return this.result_clear_highlight(), 1 > r && o.length ? (this.update_results_content(""), this.no_results(o)) : (this.update_results_content(this.results_option_build()), this.winnow_results_set_highlight())
        }, e.prototype.search_string_match = function(e, t) {
            var n, i, r, s;
            if (t.test(e)) return !0;
            if (this.enable_split_word_search && (e.indexOf(" ") >= 0 || 0 === e.indexOf("[")) && (i = e.replace(/\[|\]/g, "").split(" "), i.length))
                for (r = 0, s = i.length; s > r; r++)
                    if (n = i[r], t.test(n)) return !0
        }, e.prototype.choices_count = function() {
            var e, t, n, i;
            if (null != this.selected_option_count) return this.selected_option_count;
            for (this.selected_option_count = 0, i = this.form_field.options, t = 0, n = i.length; n > t; t++) e = i[t], e.selected && (this.selected_option_count += 1);
            return this.selected_option_count
        }, e.prototype.choices_click = function(e) {
            return e.preventDefault(), this.results_showing || this.is_disabled ? void 0 : this.results_show()
        }, e.prototype.keyup_checker = function(e) {
            var t, n;
            switch (t = null != (n = e.which) ? n : e.keyCode, this.search_field_scale(), t) {
                case 8:
                    if (this.is_multiple && this.backstroke_length < 1 && this.choices_count() > 0) return this.keydown_backstroke();
                    if (!this.pending_backstroke) return this.result_clear_highlight(), this.results_search();
                    break;
                case 13:
                    if (e.preventDefault(), this.results_showing) return this.result_select(e);
                    break;
                case 27:
                    return this.results_showing && this.results_hide(), !0;
                case 9:
                case 38:
                case 40:
                case 16:
                case 91:
                case 17:
                    break;
                default:
                    return this.results_search()
            }
        }, e.prototype.container_width = function() {
            return null != this.options.width ? this.options.width : "" + this.form_field.offsetWidth + "px"
        }, e.prototype.include_option_in_results = function(e) {
            return this.is_multiple && !this.display_selected_options && e.selected ? !1 : !this.display_disabled_options && e.disabled ? !1 : e.empty ? !1 : !0
        }, e.browser_is_supported = function() {
            return "Microsoft Internet Explorer" === window.navigator.appName ? document.documentMode >= 8 : /iP(od|hone)/i.test(window.navigator.userAgent) ? !1 : /Android/i.test(window.navigator.userAgent) && /Mobile/i.test(window.navigator.userAgent) ? !1 : !0
        }, e.default_multiple_text = "Select Some Options", e.default_single_text = "Select an Option", e.default_no_result_text = "No results match", e
    }(), e = jQuery, e.fn.extend({
        chosen: function(i) {
            return t.browser_is_supported() ? this.each(function() {
                var t, r;
                t = e(this), r = t.data("chosen"), "destroy" === i && r ? r.destroy() : r || t.data("chosen", new n(this, i))
            }) : this
        }
    }), n = function(t) {
        function n() {
            return r = n.__super__.constructor.apply(this, arguments)
        }
        return o(n, t), n.prototype.setup = function() {
            return this.form_field_jq = e(this.form_field), this.current_selectedIndex = this.form_field.selectedIndex, this.is_rtl = this.form_field_jq.hasClass("chosen-rtl")
        }, n.prototype.set_up_html = function() {
            var t, n;
            return t = ["chosen-container"], t.push("chosen-container-" + (this.is_multiple ? "multi" : "single")), this.inherit_select_classes && this.form_field.className && t.push(this.form_field.className), this.is_rtl && t.push("chosen-rtl"), n = {
                "class": t.join(" "),
                style: "width: " + this.container_width() + ";",
                title: this.form_field.title
            }, this.form_field.id.length && (n.id = this.form_field.id.replace(/[^\w]/g, "_") + "_chosen"), this.container = e("<div />", n), this.is_multiple ? this.container.html('<ul class="chosen-choices"><li class="search-field"><input type="text" value="' + this.default_text + '" class="default" autocomplete="off" style="width:25px;" /></li></ul><div class="chosen-drop"><ul class="chosen-results"></ul></div>') : this.container.html('<a class="chosen-single chosen-default" tabindex="-1"><span>' + this.default_text + '</span><div><b></b></div></a><div class="chosen-drop"><div class="chosen-search"><input type="text" autocomplete="off" /></div><ul class="chosen-results"></ul></div>'), this.form_field_jq.hide().after(this.container), this.dropdown = this.container.find("div.chosen-drop").first(), this.search_field = this.container.find("input").first(), this.search_results = this.container.find("ul.chosen-results").first(), this.search_field_scale(), this.search_no_results = this.container.find("li.no-results").first(), this.is_multiple ? (this.search_choices = this.container.find("ul.chosen-choices").first(), this.search_container = this.container.find("li.search-field").first()) : (this.search_container = this.container.find("div.chosen-search").first(), this.selected_item = this.container.find(".chosen-single").first()), this.results_build(), this.set_tab_index(), this.set_label_behavior(), this.form_field_jq.trigger("chosen:ready", {
                chosen: this
            })
        }, n.prototype.register_observers = function() {
            var e = this;
            return this.container.bind("mousedown.chosen", function(t) {
                e.container_mousedown(t)
            }), this.container.bind("mouseup.chosen", function(t) {
                e.container_mouseup(t)
            }), this.container.bind("mouseenter.chosen", function(t) {
                e.mouse_enter(t)
            }), this.container.bind("mouseleave.chosen", function(t) {
                e.mouse_leave(t)
            }), this.search_results.bind("mouseup.chosen", function(t) {
                e.search_results_mouseup(t)
            }), this.search_results.bind("mouseover.chosen", function(t) {
                e.search_results_mouseover(t)
            }), this.search_results.bind("mouseout.chosen", function(t) {
                e.search_results_mouseout(t)
            }), this.search_results.bind("mousewheel.chosen DOMMouseScroll.chosen", function(t) {
                e.search_results_mousewheel(t)
            }), this.form_field_jq.bind("chosen:updated.chosen", function(t) {
                e.results_update_field(t)
            }), this.form_field_jq.bind("chosen:activate.chosen", function(t) {
                e.activate_field(t)
            }), this.form_field_jq.bind("chosen:open.chosen", function(t) {
                e.container_mousedown(t)
            }), this.search_field.bind("blur.chosen", function(t) {
                e.input_blur(t)
            }), this.search_field.bind("keyup.chosen", function(t) {
                e.keyup_checker(t)
            }), this.search_field.bind("keydown.chosen", function(t) {
                e.keydown_checker(t)
            }), this.search_field.bind("focus.chosen", function(t) {
                e.input_focus(t)
            }), this.is_multiple ? this.search_choices.bind("click.chosen", function(t) {
                e.choices_click(t)
            }) : this.container.bind("click.chosen", function(e) {
                e.preventDefault()
            })
        }, n.prototype.destroy = function() {
            return e(document).unbind("click.chosen", this.click_test_action), this.search_field[0].tabIndex && (this.form_field_jq[0].tabIndex = this.search_field[0].tabIndex), this.container.remove(), this.form_field_jq.removeData("chosen"), this.form_field_jq.show()
        }, n.prototype.search_field_disabled = function() {
            return this.is_disabled = this.form_field_jq[0].disabled, this.is_disabled ? (this.container.addClass("chosen-disabled"), this.search_field[0].disabled = !0, this.is_multiple || this.selected_item.unbind("focus.chosen", this.activate_action), this.close_field()) : (this.container.removeClass("chosen-disabled"), this.search_field[0].disabled = !1, this.is_multiple ? void 0 : this.selected_item.bind("focus.chosen", this.activate_action))
        }, n.prototype.container_mousedown = function(t) {
            return this.is_disabled || (t && "mousedown" === t.type && !this.results_showing && t.preventDefault(), null != t && e(t.target).hasClass("search-choice-close")) ? void 0 : (this.active_field ? this.is_multiple || !t || e(t.target)[0] !== this.selected_item[0] && !e(t.target).parents("a.chosen-single").length || (t.preventDefault(), this.results_toggle()) : (this.is_multiple && this.search_field.val(""), e(document).bind("click.chosen", this.click_test_action), this.results_show()), this.activate_field())
        }, n.prototype.container_mouseup = function(e) {
            return "ABBR" !== e.target.nodeName || this.is_disabled ? void 0 : this.results_reset(e)
        }, n.prototype.search_results_mousewheel = function(e) {
            var t, n, i;
            return t = -(null != (n = e.originalEvent) ? n.wheelDelta : void 0) || (null != (i = e.originialEvent) ? i.detail : void 0), null != t ? (e.preventDefault(), "DOMMouseScroll" === e.type && (t = 40 * t), this.search_results.scrollTop(t + this.search_results.scrollTop())) : void 0
        }, n.prototype.blur_test = function() {
            return !this.active_field && this.container.hasClass("chosen-container-active") ? this.close_field() : void 0
        }, n.prototype.close_field = function() {
            return e(document).unbind("click.chosen", this.click_test_action), this.active_field = !1, this.results_hide(), this.container.removeClass("chosen-container-active"), this.clear_backstroke(), this.show_search_field_default(), this.search_field_scale()
        }, n.prototype.activate_field = function() {
            return this.container.addClass("chosen-container-active"), this.active_field = !0, this.search_field.val(this.search_field.val()), this.search_field.focus()
        }, n.prototype.test_active_click = function(t) {
            return this.container.is(e(t.target).closest(".chosen-container")) ? this.active_field = !0 : this.close_field()
        }, n.prototype.results_build = function() {
            return this.parsing = !0, this.selected_option_count = null, this.results_data = i.select_to_array(this.form_field), this.is_multiple ? this.search_choices.find("li.search-choice").remove() : this.is_multiple || (this.single_set_selected_text(), this.disable_search || this.form_field.options.length <= this.disable_search_threshold ? (this.search_field[0].readOnly = !0, this.container.addClass("chosen-container-single-nosearch")) : (this.search_field[0].readOnly = !1, this.container.removeClass("chosen-container-single-nosearch"))), this.update_results_content(this.results_option_build({
                first: !0
            })), this.search_field_disabled(), this.show_search_field_default(), this.search_field_scale(), this.parsing = !1
        }, n.prototype.result_do_highlight = function(e) {
            var t, n, i, r, s;
            if (e.length) {
                if (this.result_clear_highlight(), this.result_highlight = e, this.result_highlight.addClass("highlighted"), i = parseInt(this.search_results.css("maxHeight"), 10), s = this.search_results.scrollTop(), r = i + s, n = this.result_highlight.position().top + this.search_results.scrollTop(), t = n + this.result_highlight.outerHeight(), t >= r) return this.search_results.scrollTop(t - i > 0 ? t - i : 0);
                if (s > n) return this.search_results.scrollTop(n)
            }
        }, n.prototype.result_clear_highlight = function() {
            return this.result_highlight && this.result_highlight.removeClass("highlighted"), this.result_highlight = null
        }, n.prototype.results_show = function() {
            return this.is_multiple && this.max_selected_options <= this.choices_count() ? (this.form_field_jq.trigger("chosen:maxselected", {
                chosen: this
            }), !1) : (this.container.addClass("chosen-with-drop"), this.form_field_jq.trigger("chosen:showing_dropdown", {
                chosen: this
            }), this.results_showing = !0, this.search_field.focus(), this.search_field.val(this.search_field.val()), this.winnow_results())
        }, n.prototype.update_results_content = function(e) {
            return this.search_results.html(e)
        }, n.prototype.results_hide = function() {
            return this.results_showing && (this.result_clear_highlight(), this.container.removeClass("chosen-with-drop"), this.form_field_jq.trigger("chosen:hiding_dropdown", {
                chosen: this
            })), this.results_showing = !1
        }, n.prototype.set_tab_index = function() {
            var e;
            return this.form_field.tabIndex ? (e = this.form_field.tabIndex, this.form_field.tabIndex = -1, this.search_field[0].tabIndex = e) : void 0
        }, n.prototype.set_label_behavior = function() {
            var t = this;
            return this.form_field_label = this.form_field_jq.parents("label"), !this.form_field_label.length && this.form_field.id.length && (this.form_field_label = e("label[for='" + this.form_field.id + "']")), this.form_field_label.length > 0 ? this.form_field_label.bind("click.chosen", function(e) {
                return t.is_multiple ? t.container_mousedown(e) : t.activate_field()
            }) : void 0
        }, n.prototype.show_search_field_default = function() {
            return this.is_multiple && this.choices_count() < 1 && !this.active_field ? (this.search_field.val(this.default_text), this.search_field.addClass("default")) : (this.search_field.val(""), this.search_field.removeClass("default"))
        }, n.prototype.search_results_mouseup = function(t) {
            var n;
            return n = e(t.target).hasClass("active-result") ? e(t.target) : e(t.target).parents(".active-result").first(), n.length ? (this.result_highlight = n, this.result_select(t), this.search_field.focus()) : void 0
        }, n.prototype.search_results_mouseover = function(t) {
            var n;
            return n = e(t.target).hasClass("active-result") ? e(t.target) : e(t.target).parents(".active-result").first(), n ? this.result_do_highlight(n) : void 0
        }, n.prototype.search_results_mouseout = function(t) {
            return e(t.target).hasClass("active-result") ? this.result_clear_highlight() : void 0
        }, n.prototype.choice_build = function(t) {
            var n, i, r = this;
            return n = e("<li />", {
                "class": "search-choice"
            }).html("<span>" + t.html + "</span>"), t.disabled ? n.addClass("search-choice-disabled") : (i = e("<a />", {
                "class": "search-choice-close",
                "data-option-array-index": t.array_index
            }), i.bind("click.chosen", function(e) {
                return r.choice_destroy_link_click(e)
            }), n.append(i)), this.search_container.before(n)
        }, n.prototype.choice_destroy_link_click = function(t) {
            return t.preventDefault(), t.stopPropagation(), this.is_disabled ? void 0 : this.choice_destroy(e(t.target))
        }, n.prototype.choice_destroy = function(e) {
            return this.result_deselect(e[0].getAttribute("data-option-array-index")) ? (this.show_search_field_default(), this.is_multiple && this.choices_count() > 0 && this.search_field.val().length < 1 && this.results_hide(), e.parents("li").first().remove(), this.search_field_scale()) : void 0
        }, n.prototype.results_reset = function() {
            return this.form_field.options[0].selected = !0, this.selected_option_count = null, this.single_set_selected_text(), this.show_search_field_default(), this.results_reset_cleanup(), this.form_field_jq.trigger("change"), this.active_field ? this.results_hide() : void 0
        }, n.prototype.results_reset_cleanup = function() {
            return this.current_selectedIndex = this.form_field.selectedIndex, this.selected_item.find("abbr").remove()
        }, n.prototype.result_select = function(e) {
            var t, n, i;
            return this.result_highlight ? (t = this.result_highlight, this.result_clear_highlight(), this.is_multiple && this.max_selected_options <= this.choices_count() ? (this.form_field_jq.trigger("chosen:maxselected", {
                chosen: this
            }), !1) : (this.is_multiple ? t.removeClass("active-result") : (this.result_single_selected && (this.result_single_selected.removeClass("result-selected"), i = this.result_single_selected[0].getAttribute("data-option-array-index"), this.results_data[i].selected = !1), this.result_single_selected = t), t.addClass("result-selected"), n = this.results_data[t[0].getAttribute("data-option-array-index")], n.selected = !0, this.form_field.options[n.options_index].selected = !0, this.selected_option_count = null, this.is_multiple ? this.choice_build(n) : this.single_set_selected_text(n.text), (e.metaKey || e.ctrlKey) && this.is_multiple || this.results_hide(), this.search_field.val(""), (this.is_multiple || this.form_field.selectedIndex !== this.current_selectedIndex) && this.form_field_jq.trigger("change", {
                selected: this.form_field.options[n.options_index].value
            }), this.current_selectedIndex = this.form_field.selectedIndex, this.search_field_scale())) : void 0
        }, n.prototype.single_set_selected_text = function(e) {
            return null == e && (e = this.default_text), e === this.default_text ? this.selected_item.addClass("chosen-default") : (this.single_deselect_control_build(), this.selected_item.removeClass("chosen-default")), this.selected_item.find("span").text(e)
        }, n.prototype.result_deselect = function(e) {
            var t;
            return t = this.results_data[e], this.form_field.options[t.options_index].disabled ? !1 : (t.selected = !1, this.form_field.options[t.options_index].selected = !1, this.selected_option_count = null, this.result_clear_highlight(), this.results_showing && this.winnow_results(), this.form_field_jq.trigger("change", {
                deselected: this.form_field.options[t.options_index].value
            }), this.search_field_scale(), !0)
        }, n.prototype.single_deselect_control_build = function() {
            return this.allow_single_deselect ? (this.selected_item.find("abbr").length || this.selected_item.find("span").first().after('<abbr class="search-choice-close"></abbr>'), this.selected_item.addClass("chosen-single-with-deselect")) : void 0
        }, n.prototype.get_search_text = function() {
            return this.search_field.val() === this.default_text ? "" : e("<div/>").text(e.trim(this.search_field.val())).html()
        }, n.prototype.winnow_results_set_highlight = function() {
            var e, t;
            return t = this.is_multiple ? [] : this.search_results.find(".result-selected.active-result"), e = t.length ? t.first() : this.search_results.find(".active-result").first(), null != e ? this.result_do_highlight(e) : void 0
        }, n.prototype.no_results = function(t) {
            var n;
            return n = e('<li class="no-results">' + this.results_none_found + ' "<span></span>"</li>'), n.find("span").first().html(t), this.search_results.append(n)
        }, n.prototype.no_results_clear = function() {
            return this.search_results.find(".no-results").remove()
        }, n.prototype.keydown_arrow = function() {
            var e;
            return this.results_showing && this.result_highlight ? (e = this.result_highlight.nextAll("li.active-result").first()) ? this.result_do_highlight(e) : void 0 : this.results_show()
        }, n.prototype.keyup_arrow = function() {
            var e;
            return this.results_showing || this.is_multiple ? this.result_highlight ? (e = this.result_highlight.prevAll("li.active-result"), e.length ? this.result_do_highlight(e.first()) : (this.choices_count() > 0 && this.results_hide(), this.result_clear_highlight())) : void 0 : this.results_show()
        }, n.prototype.keydown_backstroke = function() {
            var e;
            return this.pending_backstroke ? (this.choice_destroy(this.pending_backstroke.find("a").first()), this.clear_backstroke()) : (e = this.search_container.siblings("li.search-choice").last(), e.length && !e.hasClass("search-choice-disabled") ? (this.pending_backstroke = e, this.single_backstroke_delete ? this.keydown_backstroke() : this.pending_backstroke.addClass("search-choice-focus")) : void 0)
        }, n.prototype.clear_backstroke = function() {
            return this.pending_backstroke && this.pending_backstroke.removeClass("search-choice-focus"), this.pending_backstroke = null
        }, n.prototype.keydown_checker = function(e) {
            var t, n;
            switch (t = null != (n = e.which) ? n : e.keyCode, this.search_field_scale(), 8 !== t && this.pending_backstroke && this.clear_backstroke(), t) {
                case 8:
                    this.backstroke_length = this.search_field.val().length;
                    break;
                case 9:
                    this.results_showing && !this.is_multiple && this.result_select(e), this.mouse_on_container = !1;
                    break;
                case 13:
                    e.preventDefault();
                    break;
                case 38:
                    e.preventDefault(), this.keyup_arrow();
                    break;
                case 40:
                    e.preventDefault(), this.keydown_arrow()
            }
        }, n.prototype.search_field_scale = function() {
            var t, n, i, r, s, o, a, l, c;
            if (this.is_multiple) {
                for (i = 0, a = 0, s = "position:absolute; left: -1000px; top: -1000px; display:none;", o = ["font-size", "font-style", "font-weight", "font-family", "line-height", "text-transform", "letter-spacing"], l = 0, c = o.length; c > l; l++) r = o[l], s += r + ":" + this.search_field.css(r) + ";";
                return t = e("<div />", {
                    style: s
                }), t.text(this.search_field.val()), e("body").append(t), a = t.width() + 25, t.remove(), n = this.container.outerWidth(), a > n - 10 && (a = n - 10), this.search_field.css({
                    width: a + "px"
                })
            }
        }, n
    }(t)
}.call(this);
var fbLogin, fbRegistration, fbScope = "publish_actions,user_birthday,email";
fbRegistration = function(e) {
        return FB.api("/me", function(t) {
            var n, i;
            return n = e.authResponse.accessToken + t.id + t.email, i = {
                facebook_access_token: e.authResponse.accessToken,
                interface_language: $(".speaking").val(),
                learning_language: $(".learning").val(),
                origin: campaignOrigin,
                inviter: inviter,
                experiment: activeExperiment
            }, $.ajax({
                url:  "/js/busuuajax/restws/login_1.0/facebook",
                type: "post",
                data: JSON.stringify(i),
                contentType: "application/json; charset=utf-8",
                statusCode: {
                    403: function(e) {
                        return location.href = "/"
                    },
                    400: function(e) {
                        return location.href = "/"
                    }
                },
                success: function(e) {
                    return "User logged" !== e.message ? location.href = "/dashboard#/splash" : "" !== destination ? location.href = destination + window.location.hash : location.href = "/"
                }
            })
        })
    }, fbLogin = function(e) {
        return FB.api("/me", function(t) {
            var n, i;
            return n = e.authResponse.accessToken + t.id + t.email, i = {
                facebook_access_token: e.authResponse.accessToken
            }, $.ajax({
                url:  "/js/busuuajax/restws/login_1.0/facebook",
                type: "post",
                data: JSON.stringify(i),
                contentType: "application/json; charset=utf-8",
                statusCode: {
                    403: function(e) {
                        return location.href = "/"
                    },
                    400: function(e) {
                        return location.href = "/"
                    }
                },
                success: function(e) {
                    return e.uid > 0 ? "discount" === variant ? location.href = "/subscribe" : "" !== destination ? location.href = destination + window.location.hash : location.href = "/home" : location.href = "/"
                }
            })
        })
    }, $(document).ready(function() {
        $("#facebook-signup").click(function() {
            return FB.getLoginStatus(function(e) {
                return statusChangeCallback(e)
            })
        }), $(".facebook-login").click(function() {
            return FB.getLoginStatus(function(e) {
                return statusChangeCallback(e)
            })
        })
    }),
    function(e) {
        function t(e) {
            return e.addClass("invalid")
        }

        function n(e) {
            return e.removeClass("invalid")
        }

        function i() {
            var t, n = {
                lines: 9,
                length: 4,
                width: 3,
                radius: 5,
                corners: 1,
                rotate: 32,
                direction: 1,
                color: "#fff",
                speed: 1,
                trail: 60,
                shadow: !1,
                hwaccel: !1,
                className: "spinner",
                zIndex: 2e9,
                top: "1em",
                left: "90%"
            };
            e(".start-learning").is(":visible") && (e(".start-learning").attr("disabled", "disabled"), t = e(".start-learning")[0]), e(".start-learning--seoptenc").is(":visible") && (e(".start-learning--seoptenc").attr("disabled", "disabled"), t = e(".start-learning--seoptenc")[0]), window.SPINNER = new Spinner(n), window.SPINNER.spin(t)
        }

        function r() {
            window.SPINNER.stop(), e(".start-learning").removeAttr("disabled"), e(".spinner").hide()
        }

        function s() {
            e(".language-list li").on("click", o)
        }

        function o(t) {
            if ("undefined" != typeof preselected && "destination" === variant) return location.href = "/" + e(this).attr("data-lang") + "?" + variant + "=" + destination;
            var n = "/seo" === window.baseUrl ? "/start" : window.baseUrl;
            return location.href = "/" + e(this).attr("data-lang") + n
        }

        function a() {
            var t = (new Date).getFullYear();
            e("js-currentYear").html(t)
        }

        function l(t) {
            function n(t) {
                return t.preventDefault(), e(".email-label").removeClass("invalid"), s()
            }

            function i(n) {
                return n.preventDefault(), e(".email-label").removeClass("invalid"), t.val(o), s()
            }

            function r() {
                return l.html(a).show(), t.addClass("info"), e(".email-label").addClass("invalid"), !0
            }

            function s() {
                return l.html("").hide(), t.removeClass("info"), !0
            }
            var o, a, l = t.parent(".input-wrapper").find(".instructions"),
                c = (e(".locale").val(), e("#js-translations").data("did-you-mean"));
            t.mailcheck({
                suggested: function(t, s) {
                    o = s.full, a = c.replace("@email", '<span id="emailSuggestion" class="cursor-pointer fg-bs-blue-xdark underline">' + o + "</span> ") + ' <a id="closeSuggestion" class="i i--small i-f--bs-blue-xdark" href="#"><svg><use xlink:href="#icon_cross"></use></svg></a>', r(), e(".email-label").addClass("invalid"), e("#closeSuggestion").on("click", n), e("#emailSuggestion").on("click", i)
                },
                empty: function(e) {
                    return s()
                }
            })
        }

        function c() {
            locale = e(".locale").val(), e(".learning").val(e(this).attr("data-lang")), (e("body").hasClass("is-register-visible") || e("body").hasClass("is-register-visible--seoptenc")) && (initSignupForm(), m(), learning = e(".learning").val())
        }
        var u = {
                setItem: function(e, t, n, i, r, s) {
                    if (!e || /^(?:expires|max\-age|path|domain|secure)$/i.test(e)) return !1;
                    var o = "";
                    if (n) switch (n.constructor) {
                        case Number:
                            o = n === 1 / 0 ? "; expires=Fri, 31 Dec 9999 23:59:59 GMT" : "; max-age=" + n;
                            break;
                        case String:
                            o = "; expires=" + n;
                            break;
                        case Date:
                            o = "; expires=" + n.toUTCString()
                    }
                    return document.cookie = encodeURIComponent(e) + "=" + encodeURIComponent(t) + o + (r ? "; domain=" + r : "") + (i ? "; path=" + i : "") + (s ? "; secure" : ""), !0
                },
                hasItem: function(e) {
                    return new RegExp("(?:^|;\\s*)" + encodeURIComponent(e).replace(/[\-\.\+\*]/g, "\\$&") + "\\s*\\=").test(document.cookie)
                }
            },
            d = u.hasItem("ignoreAndroidBanner"),
            h = "ontouchstart" in window || navigator.msMaxTouchPoints;
        if (/Android/i.test(navigator.userAgent) && !d) {
            var p = e("<div>").addClass("app-banner");
            p.append(e("<button>").addClass("app-banner__close").html("&times;")), p.append(e("<img>").attr("src", "/static/images/logo.png"));
            var f = e("<div>").addClass("app-banner__hgroup");
            f.append(e("<h1>").text("Learn Languages Free - busuu")), f.append(e("<h2>").text("busuu Limited")), f.append("<h3><strong>FREE</strong> - in Google Play</h3>"), p.append(f), p.append(e("<a>").attr("href", "market://details?id=com.busuu.android.enc").text("View")), e(document).ready(function() {
                e("body").prepend(p), e(".app-banner__close").on("click", function(t) {
                    e(".app-banner").remove(), u.setItem("ignoreAndroidBanner", !0, 526e7)
                })
            })
        }
        var g, m;
        window.registerUser = function(t) {
            return e.ajax({
                url:  "./register",
                type: "post",
                data: JSON.stringify(t),
                contentType: "application/json; charset=utf-8",
                dataType: "json",
                success: function(e) {
                    return e.uid > 0 ? "" !== regDestination ? location.href = regDestination + window.location.hash : "" !== destination_dashboard ? location.href = "/dashboard#" + destination_dashboard : location.href = "/dashboard#/splash" : "" !== destination ? location.href = destination + window.location.hash : location.href = "/"
                },
                error: function(e, t, n) {
                    var i;
                    return i = JSON.parse(e.responseText), g(i.error)
                }
            })
        }, window.resetPassword = function(t) {
            e(".password .btn-primary").prop("disabled", !0), e.ajax({
                url:  "/js/busuuajax/restws/password_1.0",
                type: "post",
                data: JSON.stringify(t),
                contentType: "application/json; charset=utf-8",
                dataType: "json",
                success: function(n) {
                    var i, r;
                    return (i = e(".password.step2 h3").html()) ? (i = i.replace("@email", t.email), r = t.email.split("@"), e(".password.step2 h3").html(i), e(".password.step1").hide(), e(".password.step2 a").attr("href", "http://" + r[1]), e(".password.step2").fadeIn()) : void e(".password button.btn-primary").prop("disabled", !1)
                },
                error: function(t, n, i) {
                    e(".password.step1 .prompt").hide(), e(".password.step1 .unregistered").fadeIn(), e(".password button.btn-primary").prop("disabled", !1)
                }
            })
        }, window.sendFeedback = function(t) {
            var n =  "/api/v3/anon/user/feedback";
            return e.ajax({
                url: n,
                type: "POST",
                data: e.param({
                    reason: t.reason,
                    body: t.body,
                    email: t.email,
                    name: t.name,
                    interface_language: locale_long
                }),
                contentType: "application/x-www-form-urlencoded; charset=utf-8",
                success: function(t, n, i) {
                    if ("ok" === t.status) {
                        var r = e("[data-remodal-id=modalThanks]").remodal();
                        r.open()
                    }
                },
                error: function(e, t, n) {
                    var i;
                    return i = JSON.parse(e.responseText), g(i.error)
                }
            })
        }, g = function(n) {
            switch (n.code_int) {
                case 1002:
                case 1004:
                    return e("#js-signup #email").parent().find(".invalid").css("display", "inline-block"), e("#js-signup #email").parent().find(".instructions").html(n.message).show(), t(e("#js-signup #email").parents(".field-component")), r(), e("#js-signup #email").addClass("error");
                case 400:
                    return e("#js-signup #name").parent().find(".invalid").css("display", "inline-block"), e("#js-signup #name").parent().find(".instructions").html(n.message).show(), t(e("#js-signup #name").parents(".field-component")), r(), e("#js-signup #name").addClass("error")
            }
        }, changeCountry = function() {
            "-1" !== e("#country-of-residence").val() && (e("#country-of-residence").parent(".input-wrapper").find(".chosen-single").removeClass("error"), e("#country-of-residence").parent(".input-wrapper").find(".instructions").hide(), e("#country-of-residence").parent(".input-wrapper").find(".invalid").css("display", "none"), e("#country-of-residence").parent(".input-wrapper").find(".valid").css("display", "inline-block"))
        }, window.emailLogin = function(t) {
            return e.ajax({
                url:  "/js/busuuajax/restws/login_1.0/basic",
                type: "post",
                data: JSON.stringify(t),
                contentType: "application/json; charset=utf-8",
                dataType: "json",
                success: function(e) {
                    return "discount" === variant ? location.href = "/subscribe" : "" !== destination ? location.href = destination + window.location.hash : "" !== destination_dashboard ? location.href = "/dashboard#" + destination_dashboard : location.href = "/dashboard"
                },
                error: function(t) {
                    return e(".error-message").fadeIn()
                }
            })
        }, m = function() {
            var t, n;
            n = e(".learning").val(), t = e(".locale").val(), preselected || (preselected = "enc"), e(".js-flag use").attr("xlink:href", "#icon_flag-" + preselected), e(".learning").val(preselected)
        }, e(".flag-container").click(function() {
            var t;
            locale = e(".locale").val(), t = e(this).attr("data-lang")
        }), window.enableEmailSignupExperiment = function() {
            return e("#email-signup").hide(), e(".inline-signup").show(), window.inlineEmailSignup = !0
        }, locale = e(".locale").val(), (termsStr = e(".terms").html()) && (termsStr = termsStr.replace("@terms-page", "/" + locale + "/terms"), termsStr = termsStr.replace("@privacy-page", "/" + locale + "/privacy"), e(".terms").html(termsStr)), (errorStr = e(".error-message").html()) && (errorStr = errorStr.replace("â€œ", ""), errorStr = errorStr.replace("â€œ", ""), errorStr = errorStr.replace("@password", "/" + locale + "/password"), e(".error-message").html(errorStr)), e(".inline-signup").hide(), e("select#native-languages option[value=" + (e(".locale").val() + "]")).attr("selected", "selected"), h || e("select#native-languages").chosen({
            placeholder_text_single: "Select Language",
            width: "100%"
        }), "undefined" != typeof seoPage && e("body").addClass("is-seo-page"), "undefined" != typeof preselected && "" !== preselected && (e("body").addClass("is-lang-preselected"), e(".js-btn-join").attr("href", "/" + locale + "/" + preselected + "/register"), e(".flag-container").addClass("inactive"), e(".flag-container[data-lang=" + preselected + "]").removeClass("inactive"), e(".no-preselected").hide(), locale = e(".locale").val(), e(".buttons .course-string").html(courseStrings[locale][preselected]), e(".js-btn-join").css({
            display: "inline-block"
        })), valid_email = new RegExp(/^.+\@\S+\.\S+$/), initSignupForm = function() {
            var r, s, o, a, c, u, d, h = e("#js-translations").data("error-msg1"),
                p = e("#js-translations").data("error-msg2"),
                f = e("#js-translations").data("error-msg3"),
                g = e("#js-translations").data("error-msg4");
            c = e("#js-signup #name"), o = e(".js-email"), s = e(".js-confirm-email"), u = e(".js-password"), d = e("#country-of-residence"), a = function() {
                return e(".chosen-container").css("background", "#E7F5FD")
            }, r = function() {
                return e(".chosen-container").css("background", "#FFFFFF")
            }, c.focus(function() {
                return r()
            }), c.blur(function() {
                return a(), e(this).val().length < 5 ? (e(this).parent().find(".invalid").css("display", "inline-block"), e(this).parent().find(".instructions").html(h).show(), e(this).parent().find(".valid").css("display", "none"), t(e(this).parents(".field-component")), e(this).addClass("error")) : (e(this).removeClass("error"), e(this).parent().find(".invalid").css("display", "none"), e(this).parent().find(".instructions").hide(), n(e(this).parents(".field-component")), e(this).parent().find(".valid").css("display", "inline-block"))
            }), o.focus(function() {
                return r()
            }), o.blur(function() {
                return e(this).parent(".input-wrapper").find(".invalid").css("display", "none"), e(this).parent(".input-wrapper").find(".instructions").hide(), e(this).parent().find(".valid").css("display", "block"), e(this).removeClass("error"), valid_email.test(o.val()) ? (n(e(this).parents(".field-component")), void l(o)) : (e(this).parent(".input-wrapper").find(".invalid").css("display", "inline-block"), e(this).parent(".input-wrapper").find(".instructions").html(p).show(), e(this).parent().find(".valid").css("display", "none"), t(e(this).parents(".field-component")), e(this).addClass("error"))
            }), s.blur(function() {
                return s.is(":hidden") ? void 0 : (e(this).parent(".input-wrapper").find(".invalid").css("display", "none"), e(this).parent(".input-wrapper").find(".instructions").hide(), e(this).parent().find(".valid").css("display", "block"), e(this).removeClass("error"), "" === o.val() || o.val() !== s.val() ? (e(this).parent(".input-wrapper").find(".invalid").css("display", "inline-block"), e(this).parent(".input-wrapper").find(".instructions").html(f).show(), e(this).parent().find(".valid").css("display", "none"), t(e(this).parents(".field-component")), e(this).addClass("error")) : (e(this).removeClass("error"), e(this).parent(".input-wrapper").find(".instructions").hide(), e(this).parent(".input-wrapper").find(".invalid").css("display", "none"), n(e(this).parents(".field-component")), e(this).parent(".input-wrapper").find(".valid").css("display", "inline-block")))
            }), u.blur(function() {
                return u.val().length < 6 ? (e(this).parent(".input-wrapper").find(".invalid").css("display", "inline-block"), e(this).parent(".input-wrapper").find(".instructions").html(g).show(), e(this).parent().find(".valid").css("display", "none"), t(e(this).parents(".field-component")), e(this).addClass("error")) : (e(this).removeClass("error"), e(this).parent(".input-wrapper").find(".instructions").hide(), e(this).parent(".input-wrapper").find(".invalid").css("display", "none"), n(e(this).parents(".field-component")), e(this).parent(".input-wrapper").find(".valid").css("display", "inline-block"))
            });
            var m = function(n) {
                n.preventDefault();
                var r;
                e(".error").removeClass("error"), e(".instructions").html(""), c.val().length < 5 && (c.parent(".input-wrapper").find(".invalid").css("display", "inline-block"), c.parent(".input-wrapper").find(".instructions").html(h).show(), c.addClass("error"), t(c.parents(".field-component"))), "-1" == d.val() && (d.parent(".input-wrapper").find(".invalid").css("display", "inline-block"), d.parent(".input-wrapper").find(".chosen-single").addClass("error"), t(d.parents(".field-component"))), valid_email.test(o.val()) || (o.parent(".input-wrapper").find(".invalid").css("display", "inline-block"), o.parent(".input-wrapper").find(".instructions").html(p).show(), o.addClass("error"), t(o.parents(".field-component"))), s.is(":visible") && o.val() !== s.val() && (s.parent(".input-wrapper").find(".invalid").css("display", "inline-block"), s.parent(".input-wrapper").find(".instructions").html(f).show(), s.addClass("error"), t(s.parents(".field-component"))), u.val().length < 6 && (u.parent(".input-wrapper").find(".invalid").css("display", "inline-block"), u.parent(".input-wrapper").find(".instructions").html(g).show(), u.addClass("error"), t(u.parents(".field-component"))), 0 === e(".error").length && (i(), r = {
                    name: c.val(),
                    learning_language: e(".learning").val(),
                    email: o.val(),
                    learning_level: "beginner",
                    interface_language: e(".locale").val(),
                    native_language: e(".speaking").val(),
                    country_of_residence: d.val(),
                    password: u.val()
                }, window.registerUser(r))
            };
            e(".start-learning").is(":visible") && e(".start-learning").click(m), e(".start-learning--seoptenc").is(":visible") && e(".start-learning--seoptenc").click(m)
        }, e("#variant #email").hide(), e("#login-button").on("click", function(t) {
            var n, i, r, s, o;
            return n = e("#variant #eyhp").val(), r = e("#variant #password").val(), s = e("#variant #name").val(), o = e("#variant #email").val(), "" === n || "" === r || "" !== s || "nasiba.carrasco@busuu.com" !== o ? !1 : (i = {
                email: n,
                password: hex_md5(r)
            }, emailLogin(i))
        }), e(".js-btn-join").click(function() {
            e("body").hasClass("is-lang-preselected") || e("body").addClass("is-country-visible").stop().animate({
                scrollTop: 0
            }, 900, "swing")
        }), e("#email-signup").click(function() {
            e("#signup-options").fadeOut("fast", function() {
                e("#signup-form").fadeIn("fast", function() {
                    e("#name").focus()
                })
            })
        }), e("body:not(.is-seo-page) .flag-container").hover(function() {
            return e(".flag-container").addClass("inactive"), e(this).removeClass("inactive")
        }, function() {
            return e(".flag-container").removeClass("inactive")
        }), e(".selected-language").click(function() {
            return e("body").append('<div id="catcher"></div>'), e("#catcher").click(function() {
                e(".language-list").hide(), e(".language-arrow").removeClass("down"), e(".login-dialog").hide(), e("#catcher").remove()
            }), e(".login-dialog").hide(), e(".language-list").toggle(), e(".language-arrow").addClass("down")
        }), h || (e("select#native-languages").chosen({
            width: "100%"
        }).change(function() {
            return e(".speaking").val(e(this).chosen().val())
        }), e("select#country-of-residence").chosen({
            width: "100%"
        }).change(function() {
            return e(".country-of-residence").val(e(this).chosen().val())
        })), e("#more-footer").click(function() {
            return e(".footer-wrapper-bottom").css("height", "auto").css("display", "inline-block"), e("html, body").animate({
                scrollTop: e(".footer-wrapper .links").offset().top
            }, 500), e("#more-footer").hide(), e("#less-footer").show()
        }), e("#less-footer").click(function() {
            return e(".footer-wrapper-bottom").css("height", "0px").css("display", "none"), e("#less-footer").hide(), e("#more-footer").show()
        }), e(document).keyup(function(t) {
            return 13 === t.keyCode && e(".login-dialog").is(":visible") ? e(".login-dialog .btn-login").click() : 13 === t.keyCode && e("#login-form").is(":visible") ? e("#login-button").click() : 13 === t.keyCode && e(".front.password").length > 0 ? e(".front.password.step1 .btn-primary").click() : 13 === t.keyCode && e("#signup-form").is(":visible") ? e(".start-learning").click() : void 0
        }), e(".password.step1 .btn-primary").click(function() {
            var t, n;
            return t = e(".password.step1 #email").val().trim(), "" === t ? void e(".password.step1 #email").addClass("error") : (e(".password.step1 #email").removeClass("error"), n = {
                email: t
            }, resetPassword(n))
        });
        var v = function() {
                var t = 450 - e("#suggestion-contact-us").val().length,
                    n = function(e, t) {
                        return 1 == e ? CONTACT_characters_left_singular : "ru" === t && e >= 2 && 4 >= e ? CONTACT_characters_left_2_4.replace("@num", e) : "ar" === t && e >= 3 && 10 >= e ? CONTACT_characters_left_3_10.replace("@num", e) : CONTACT_characters_left_plural.replace("@num", e)
                    },
                    r = e(".locale").val(),
                    s = n(t, r);
                e("#chars-left").html(s), e("#suggestion-contact-us").keyup(function() {
                    var t = 450 - e(this).val().length;
                    s = n(t, r), e("#chars-left").html(s)
                }), e("#send-contact-us").click(function(t) {
                    t.preventDefault();
                    var n, r = e("#name-contact-us"),
                        s = e("#email-contact-us"),
                        o = e("#email-confirm-contact-us"),
                        a = e("#suggestion-contact-us");
                    e(".error").removeClass("error"), e(".instructions").html(""), e(".invalid").hide(), r.val().length < 5 && (r.parent(".input-wrapper").find(".invalid").css("display", "inline-block"), r.parent(".input-wrapper").find(".instructions").html(errorMsg1).show(), r.addClass("error")), valid_email.test(s.val()) || (s.parent(".input-wrapper").find(".invalid").css("display", "inline-block"), s.parent(".input-wrapper").find(".instructions").html(errorMsg2).show(), s.addClass("error")), s.val() !== o.val() && (o.parent(".input-wrapper").find(".invalid").css("display", "inline-block"), o.parent(".input-wrapper").find(".instructions").html(errorMsg3).show(), o.addClass("error"));
                    var l = a.val();
                    l.length < 1 && (a.parent(".input-wrapper").find(".invalid").css("display", "inline-block"), a.parent(".input-wrapper").find(".instructions").html(errorMsg4).show(), a.addClass("error")), 0 === e(".error").length && (i(), n = {
                        name: r.val(),
                        email: s.val(),
                        reason: "general",
                        body: l
                    }, window.sendFeedback(n))
                }), e(document).on("closed", ".remodal", function(e) {
                    location.href = "/"
                })
            },
            y = function() {
                function t() {
                    var e = new Date("Wed Dec 02 2015 16:12:41 GMT+0100 (CET)"),
                        t = new Date,
                        n = 864e5;
                    return i = Math.round(Math.abs((t.getTime() - e.getTime()) / n))
                }

                function n() {
                    i || get(), e("#js-l2h-progress").attr("value", i), e("#js-l2h-progress-fall").attr("style", "width:" + 100 * i / 30 + "%"), i >= 30 && console.log("starts")
                }
                var i = 0;
                return {
                    get: t,
                    set: n
                }
            }();
        y.get(), e(document).ready(function() {
            s(), a(), y.set(), "-1" != document.location.href.indexOf("contact") && v(), "-1" != document.location.href.indexOf("enc/new") && e("a.js-btn-join-new").click(function() {
                e("#register-form").is(":visible") || e("#register-form").slideToggle("slow", function() {
                    e("html, body").animate({
                        scrollTop: e("#register-form").offset().top - e("#register-form").height() / 2
                    }, 500), e("#js-signup").length && c()
                })
            }), e("#js-signup").length && c()
        })
    }(jQuery);
var gplusLogin, gplusRegistration, logInCallback, signInCallback, userLoaded;
userLoaded = !1, gplusRegistration = function(e) {
        var t, n;
        return t = e.google_access_token + e.id + e.email, n = {
            google_access_token: e.google_access_token,
            interface_language: $(".speaking").val(),
            learning_language: $(".learning").val(),
            origin: campaignOrigin,
            inviter: inviter,
            experiment: activeExperiment
        }, $.ajax({
            url:  "/js/busuuajax/restws/login_1.0/google",
            type: "post",
            data: JSON.stringify(n),
            contentType: "application/json; charset=utf-8",
            statusCode: {
                403: function(e) {
                    return location.href = "/"
                },
                400: function(e) {
                    return location.href = "/"
                }
            },
            success: function(e) {
                return e.uid > 0 ? location.href = "/dashboard#/splash" : "" !== destination ? location.href = destination + window.location.hash : location.href = "/"
            }
        })
    }, gplusLogin = function(e) {
        var t, n;
        return t = e.google_access_token + e.id + e.email, n = {
            google_access_token: e.google_access_token
        }, $.ajax({
            url:  "/js/busuuajax/restws/login_1.0/google",
            type: "post",
            data: JSON.stringify(n),
            contentType: "application/json; charset=utf-8",
            statusCode: {
                403: function(e) {
                    return location.href = "/"
                },
                400: function(e) {
                    return location.href = "/"
                }
            },
            success: function(e) {
                return e.uid > 0 ? "discount" === variant ? location.href = "/subscribe" : "" !== destination ? location.href = destination + window.location.hash : location.href = "/home" : location.href = "/"
            }
        })
    }, signInCallback = function(e) {
        var t;
        return t = {}, !userLoaded && e.status.signed_in ? (userLoaded = !0, t.google_access_token = e.access_token, gapi.client.load("oauth2", "v2", function() {
            return gapi.client.oauth2.userinfo.get().execute(function(e) {
                return t.id = e.id, t.email = e.email, gplusRegistration(t)
            })
        })) : void 0
    }, logInCallback = function(e) {
        var t;
        return t = {}, e.status.signed_in && e["g-oauth-window"] ? (t.google_access_token = e.access_token, gapi.client.load("oauth2", "v2", function() {
            return gapi.client.oauth2.userinfo.get().execute(function(e) {
                return t.id = e.id, t.email = e.email, gplusLogin(t)
            })
        })) : void 0
    }, window.gplusLoaded = function() {
        $("#google-signup").click(function() {
            var e;
            return e = {
                callback: signInCallback,
                apppackagename: "com.busuu.android.enc"
            }, gapi.auth.signIn(e)
        }), $(".gplus-login").click(function() {
            var e;
            return e = {
                callback: logInCallback,
                approval_prompt: "force"
            }, gapi.auth.signIn(e)
        })
    }, ! function(e, t) {
        "function" == typeof define && define.amd ? define(["jquery"], function(n) {
            t(n, e)
        }) : t(jQuery, e)
    }(this, function(e, t) {
        "use strict";
        var n, i;
        if (e.uaMatch = function(e) {
                e = e.toLowerCase();
                var t = /(edge)\/([\w.]+)/.exec(e) || /(opr)[\/]([\w.]+)/.exec(e) || /(chrome)[ \/]([\w.]+)/.exec(e) || /(version)(applewebkit)[ \/]([\w.]+).*(safari)[ \/]([\w.]+)/.exec(e) || /(webkit)[ \/]([\w.]+).*(version)[ \/]([\w.]+).*(safari)[ \/]([\w.]+)/.exec(e) || /(webkit)[ \/]([\w.]+)/.exec(e) || /(opera)(?:.*version|)[ \/]([\w.]+)/.exec(e) || /(msie) ([\w.]+)/.exec(e) || e.indexOf("trident") >= 0 && /(rv)(?::| )([\w.]+)/.exec(e) || e.indexOf("compatible") < 0 && /(mozilla)(?:.*? rv:([\w.]+)|)/.exec(e) || [],
                    n = /(ipad)/.exec(e) || /(ipod)/.exec(e) || /(iphone)/.exec(e) || /(kindle)/.exec(e) || /(silk)/.exec(e) || /(android)/.exec(e) || /(windows phone)/.exec(e) || /(win)/.exec(e) || /(mac)/.exec(e) || /(linux)/.exec(e) || /(cros)/.exec(e) || /(playbook)/.exec(e) || /(bb)/.exec(e) || /(blackberry)/.exec(e) || [];
                return {
                    browser: t[5] || t[3] || t[1] || "",
                    version: t[2] || t[4] || "0",
                    versionNumber: t[4] || t[2] || "0",
                    platform: n[0] || ""
                }
            }, n = e.uaMatch(t.navigator.userAgent), i = {}, n.browser && (i[n.browser] = !0, i.version = n.version, i.versionNumber = parseInt(n.versionNumber, 10)), n.platform && (i[n.platform] = !0), (i.android || i.bb || i.blackberry || i.ipad || i.iphone || i.ipod || i.kindle || i.playbook || i.silk || i["windows phone"]) && (i.mobile = !0), (i.cros || i.mac || i.linux || i.win) && (i.desktop = !0), (i.chrome || i.opr || i.safari) && (i.webkit = !0), i.rv || i.edge) {
            var r = "msie";
            n.browser = r, i[r] = !0
        }
        if (i.safari && i.blackberry) {
            var s = "blackberry";
            n.browser = s, i[s] = !0
        }
        if (i.safari && i.playbook) {
            var o = "playbook";
            n.browser = o, i[o] = !0
        }
        if (i.bb) {
            var a = "blackberry";
            n.browser = a, i[a] = !0
        }
        if (i.opr) {
            var l = "opera";
            n.browser = l, i[l] = !0
        }
        if (i.safari && i.android) {
            var c = "android";
            n.browser = c, i[c] = !0
        }
        if (i.safari && i.kindle) {
            var u = "kindle";
            n.browser = u, i[u] = !0
        }
        if (i.safari && i.silk) {
            var d = "silk";
            n.browser = d, i[d] = !0
        }
        return i.name = n.browser, i.platform = n.platform, e.browser = i, i
    }),
    function(e) {
        "function" == typeof define && define.amd ? define(["jquery"], e) : e("object" == typeof exports ? require("jquery") : jQuery)
    }(function(e) {
        function t(e) {
            return a.raw ? e : encodeURIComponent(e)
        }

        function n(e) {
            return a.raw ? e : decodeURIComponent(e)
        }

        function i(e) {
            return t(a.json ? JSON.stringify(e) : String(e))
        }

        function r(e) {
            0 === e.indexOf('"') && (e = e.slice(1, -1).replace(/\\"/g, '"').replace(/\\\\/g, "\\"));
            try {
                return e = decodeURIComponent(e.replace(o, " ")), a.json ? JSON.parse(e) : e
            } catch (t) {}
        }

        function s(t, n) {
            var i = a.raw ? t : r(t);
            return e.isFunction(n) ? n(i) : i
        }
        var o = /\+/g,
            a = e.cookie = function(r, o, l) {
                if (void 0 !== o && !e.isFunction(o)) {
                    if (l = e.extend({}, a.defaults, l), "number" == typeof l.expires) {
                        var c = l.expires,
                            u = l.expires = new Date;
                        u.setTime(+u + 864e5 * c)
                    }
                    return document.cookie = [t(r), "=", i(o), l.expires ? "; expires=" + l.expires.toUTCString() : "", l.path ? "; path=" + l.path : "", l.domain ? "; domain=" + l.domain : "", l.secure ? "; secure" : ""].join("")
                }
                for (var d = r ? void 0 : {}, h = document.cookie ? document.cookie.split("; ") : [], p = 0, f = h.length; f > p; p++) {
                    var g = h[p].split("="),
                        m = n(g.shift()),
                        v = g.join("=");
                    if (r && r === m) {
                        d = s(v, o);
                        break
                    }
                    r || void 0 === (v = s(v)) || (d[m] = v)
                }
                return d
            };
        a.defaults = {}, e.removeCookie = function(t, n) {
            return void 0 === e.cookie(t) ? !1 : (e.cookie(t, "", e.extend({}, n, {
                expires: -1
            })), !e.cookie(t))
        }
    }), ! function(e) {
        "use strict";

        function t(e) {
            var t, n, i, r, s = e.css("transition-duration") || e.css("-webkit-transition-duration") || e.css("-moz-transition-duration") || e.css("-o-transition-duration") || e.css("-ms-transition-duration") || "0s",
                o = e.css("transition-delay") || e.css("-webkit-transition-delay") || e.css("-moz-transition-delay") || e.css("-o-transition-delay") || e.css("-ms-transition-delay") || "0s";
            for (s = s.split(", "), o = o.split(", "), r = 0, n = s.length, t = Number.NEGATIVE_INFINITY; n > r; r++) i = parseFloat(s[r]) + parseFloat(o[r]), i > t && (t = i);
            return 1e3 * i
        }

        function n() {
            if (e(document.body).height() <= e(window).height()) return 0;
            var t, n, i = document.createElement("div"),
                r = document.createElement("div");
            return i.style.visibility = "hidden", i.style.width = "100px", document.body.appendChild(i), t = i.offsetWidth, i.style.overflow = "scroll", r.style.width = "100%", i.appendChild(r), n = r.offsetWidth, i.parentNode.removeChild(i), t - n
        }

        function i() {
            var t, i, r = e("html"),
                s = d + "-is-locked";
            r.hasClass(s) || (i = e(document.body), t = parseInt(i.css("padding-right"), 10) + n(), i.css("padding-right", t + "px"), r.addClass(s))
        }

        function r() {
            var t, i, r = e("html"),
                s = d + "-is-locked";
            r.hasClass(s) && (i = e(document.body), t = parseInt(i.css("padding-right"), 10) - n(), i.css("padding-right", t + "px"), r.removeClass(s))
        }

        function s(e) {
            var t, n, i, r, s = {};
            for (e = e.replace(/\s*:\s*/g, ":").replace(/\s*,\s*/g, ","), t = e.split(","), r = 0, n = t.length; n > r; r++) t[r] = t[r].split(":"), i = t[r][1], ("string" == typeof i || i instanceof String) && (i = "true" === i || ("false" === i ? !1 : i)), ("string" == typeof i || i instanceof String) && (i = isNaN(i) ? i : +i), s[t[r][0]] = i;
            return s
        }

        function o(n, i) {
            var r, s, o, a = this;
            a.settings = e.extend({}, h, i), a.$body = e(document.body), a.$overlay = e("." + d + "-overlay"), a.$overlay.length || (a.$overlay = e("<div>").addClass(d + "-overlay"), a.$body.append(a.$overlay)), a.$bg = e("." + d + "-bg"), a.$closeButton = e('<a href="#"></a>').addClass(d + "-close"), a.$wrapper = e("<div>").addClass(d + "-wrapper"), a.$modal = n, a.$modal.addClass(d), a.$modal.css("visibility", "visible"), a.$modal.append(a.$closeButton), a.$wrapper.append(a.$modal), a.$body.append(a.$wrapper), a.$confirmButton = a.$modal.find("." + d + "-confirm"), a.$cancelButton = a.$modal.find("." + d + "-cancel"), r = t(a.$overlay), s = t(a.$modal), o = t(a.$bg), a.td = s > r ? s : r, a.td = o > a.td ? o : a.td, a.$wrapper.on("click." + d, "." + d + "-close", function(e) {
                e.preventDefault(), a.close()
            }), a.$wrapper.on("click." + d, "." + d + "-cancel", function(e) {
                e.preventDefault(), a.$modal.trigger("cancel"), a.settings.closeOnCancel && a.close("cancellation")
            }), a.$wrapper.on("click." + d, "." + d + "-confirm", function(e) {
                e.preventDefault(), a.$modal.trigger("confirm"), a.settings.closeOnConfirm && a.close("confirmation")
            }), e(document).on("keyup." + d, function(e) {
                27 === e.keyCode && a.settings.closeOnEscape && a.close()
            }), a.$wrapper.on("click." + d, function(t) {
                var n = e(t.target);
                n.hasClass(d + "-wrapper") && a.settings.closeOnAnyClick && a.close()
            }), a.index = e[u].lookup.push(a) - 1, a.busy = !1
        }

        function a(t, n) {
            var i, r, s = location.hash.replace("#", "");
            if ("undefined" == typeof n && (n = !0), s) {
                try {
                    r = e("[data-" + u + "-id=" + s.replace(new RegExp("/", "g"), "\\/") + "]")
                } catch (o) {}
                r && r.length && (i = e[u].lookup[r.data(u)], i && i.settings.hashTracking && i.open())
            } else n && l && !l.busy && l.settings.hashTracking && l.close()
        }
        var l, c, u = "remodal",
            d = window.remodalGlobals && window.remodalGlobals.namespace || u,
            h = e.extend({
                hashTracking: !0,
                closeOnConfirm: !0,
                closeOnCancel: !0,
                closeOnEscape: !0,
                closeOnAnyClick: !0
            }, window.remodalGlobals && window.remodalGlobals.defaults);
        o.prototype.open = function() {
            if (!this.busy) {
                var t, n = this;
                n.busy = !0, n.$modal.trigger("open"), t = n.$modal.attr("data-" + u + "-id"), t && n.settings.hashTracking && (c = e(window).scrollTop(), location.hash = t), l && l !== n && (l.$overlay.hide(), l.$wrapper.hide(), l.$body.removeClass(d + "-is-active")), l = n, i(), n.$overlay.show(), n.$wrapper.show(), setTimeout(function() {
                    n.$body.addClass(d + "-is-active"), setTimeout(function() {
                        n.busy = !1, n.$modal.trigger("opened")
                    }, n.td + 50)
                }, 25)
            }
        }, o.prototype.close = function(t) {
            if (!this.busy) {
                var n = this;
                n.busy = !0, n.$modal.trigger({
                    type: "close",
                    reason: t
                }), n.settings.hashTracking && n.$modal.attr("data-" + u + "-id") === location.hash.substr(1) && (location.hash = "", e(window).scrollTop(c)), n.$body.removeClass(d + "-is-active"), setTimeout(function() {
                    n.$overlay.hide(), n.$wrapper.hide(), r(), n.busy = !1, n.$modal.trigger({
                        type: "closed",
                        reason: t
                    })
                }, n.td + 50)
            }
        }, e[u] = {
            lookup: []
        }, e.fn[u] = function(t) {
            var n, i;
            return this.each(function(r, s) {
                i = e(s), null == i.data(u) ? (n = new o(i, t), i.data(u, n.index), n.settings.hashTracking && i.attr("data-" + u + "-id") === location.hash.substr(1) && n.open()) : n = e[u].lookup[i.data(u)]
            }), n
        }, e(document).ready(function() {
            e(document).on("click", "[data-" + u + "-target]", function(t) {
                t.preventDefault();
                var n = t.currentTarget,
                    i = n.getAttribute("data-" + u + "-target"),
                    r = e("[data-" + u + "-id=" + i + "]");
                e[u].lookup[r.data(u)].open()
            }), e(document).find("." + d).each(function(t, n) {
                var i = e(n),
                    r = i.data(u + "-options");
                r ? ("string" == typeof r || r instanceof String) && (r = s(r)) : r = {}, i[u](r)
            })
        }), e(window).bind("hashchange." + d, a)
    }(window.jQuery || window.Zepto);
var Mailcheck = {
    domainThreshold: 4,
    topLevelThreshold: 3,
    defaultDomains: "yahoo.com google.com hotmail.com gmail.com me.com aol.com mac.com live.com comcast.net googlemail.com msn.com hotmail.co.uk yahoo.co.uk facebook.com verizon.net sbcglobal.net att.net gmx.com mail.com outlook.com icloud.com".split(" "),
    defaultTopLevelDomains: "co.jp co.uk com net org info edu gov mil ca".split(" "),
    run: function(e) {
        e.domains = e.domains || Mailcheck.defaultDomains, e.topLevelDomains = e.topLevelDomains || Mailcheck.defaultTopLevelDomains, e.distanceFunction = e.distanceFunction || Mailcheck.sift3Distance;
        var t = function(e) {
                return e
            },
            n = e.suggested || t,
            t = e.empty || t;
        return (e = Mailcheck.suggest(Mailcheck.encodeEmail(e.email), e.domains, e.topLevelDomains, e.distanceFunction)) ? n(e) : t()
    },
    suggest: function(e, t, n, i) {
        if (e = e.toLowerCase(), e = this.splitEmail(e), t = this.findClosestDomain(e.domain, t, i, this.domainThreshold)) {
            if (t != e.domain) return {
                address: e.address,
                domain: t,
                full: e.address + "@" + t
            }
        } else if (n = this.findClosestDomain(e.topLevelDomain, n, i, this.topLevelThreshold), e.domain && n && n != e.topLevelDomain) return i = e.domain, t = i.substring(0, i.lastIndexOf(e.topLevelDomain)) + n, {
            address: e.address,
            domain: t,
            full: e.address + "@" + t
        };
        return !1
    },
    findClosestDomain: function(e, t, n, i) {
        i = i || this.topLevelThreshold;
        var r, s = 99,
            o = null;
        if (!e || !t) return !1;
        n || (n = this.sift3Distance);
        for (var a = 0; a < t.length; a++) {
            if (e === t[a]) return e;
            r = n(e, t[a]), s > r && (s = r, o = t[a])
        }
        return i >= s && null !== o ? o : !1
    },
    sift3Distance: function(e, t) {
        if (null == e || 0 === e.length) return null == t || 0 === t.length ? 0 : t.length;
        if (null == t || 0 === t.length) return e.length;
        for (var n = 0, i = 0, r = 0, s = 0; n + i < e.length && n + r < t.length;) {
            if (e.charAt(n + i) == t.charAt(n + r)) s++;
            else
                for (var o = r = i = 0; 5 > o; o++) {
                    if (n + o < e.length && e.charAt(n + o) == t.charAt(n)) {
                        i = o;
                        break
                    }
                    if (n + o < t.length && e.charAt(n) == t.charAt(n + o)) {
                        r = o;
                        break
                    }
                }
            n++
        }
        return (e.length + t.length) / 2 - s
    },
    splitEmail: function(e) {
        if (e = e.trim().split("@"), 2 > e.length) return !1;
        for (var t = 0; t < e.length; t++)
            if ("" === e[t]) return !1;
        var n = e.pop(),
            i = n.split("."),
            r = "";
        if (0 == i.length) return !1;
        if (1 == i.length) r = i[0];
        else {
            for (t = 1; t < i.length; t++) r += i[t] + ".";
            2 <= i.length && (r = r.substring(0, r.length - 1))
        }
        return {
            topLevelDomain: r,
            domain: n,
            address: e.join("@")
        }
    },
    encodeEmail: function(e) {
        return e = encodeURI(e), e = e.replace("%20", " ").replace("%25", "%").replace("%5E", "^").replace("%60", "`").replace("%7B", "{").replace("%7C", "|").replace("%7D", "}")
    }
};
"undefined" != typeof module && module.exports && (module.exports = Mailcheck), "undefined" != typeof window && window.jQuery && function(e) {
    e.fn.mailcheck = function(e) {
        var t = this;
        if (e.suggested) {
            var n = e.suggested;
            e.suggested = function(e) {
                n(t, e)
            }
        }
        if (e.empty) {
            var i = e.empty;
            e.empty = function() {
                i.call(null, t)
            }
        }
        e.email = this.val(), Mailcheck.run(e)
    }
}(jQuery);
var hexcase = 0;
! function(e, t) {
    "object" == typeof exports ? module.exports = t() : "function" == typeof define && define.amd ? define(t) : e.Spinner = t()
}(this, function() {
    "use strict";

    function e(e, t) {
        var n, i = document.createElement(e || "div");
        for (n in t) i[n] = t[n];
        return i
    }

    function t(e) {
        for (var t = 1, n = arguments.length; n > t; t++) e.appendChild(arguments[t]);
        return e
    }

    function n(e, t, n, i) {
        var r = ["opacity", t, ~~(100 * e), n, i].join("-"),
            s = .01 + n / i * 100,
            o = Math.max(1 - (1 - e) / t * (100 - s), e),
            a = c.substring(0, c.indexOf("Animation")).toLowerCase(),
            l = a && "-" + a + "-" || "";
        return d[r] || (h.insertRule("@" + l + "keyframes " + r + "{0%{opacity:" + o + "}" + s + "%{opacity:" + e + "}" + (s + .01) + "%{opacity:1}" + (s + t) % 100 + "%{opacity:" + e + "}100%{opacity:" + o + "}}", h.cssRules.length), d[r] = 1), r
    }

    function i(e, t) {
        var n, i, r = e.style;
        for (t = t.charAt(0).toUpperCase() + t.slice(1), i = 0; i < u.length; i++)
            if (n = u[i] + t, void 0 !== r[n]) return n;
        return void 0 !== r[t] ? t : void 0
    }

    function r(e, t) {
        for (var n in t) e.style[i(e, n) || n] = t[n];
        return e
    }

    function s(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var i in n) void 0 === e[i] && (e[i] = n[i])
        }
        return e
    }

    function o(e, t) {
        return "string" == typeof e ? e : e[t % e.length]
    }

    function a(e) {
        this.opts = s(e || {}, a.defaults, p)
    }

    function l() {
        function n(t, n) {
            return e("<" + t + ' xmlns="urn:schemas-microsoft.com:vml" class="spin-vml">', n)
        }
        h.addRule(".spin-vml", "behavior:url(#default#VML)"), a.prototype.lines = function(e, i) {
            function s() {
                return r(n("group", {
                    coordsize: u + " " + u,
                    coordorigin: -c + " " + -c
                }), {
                    width: u,
                    height: u
                })
            }

            function a(e, a, l) {
                t(h, t(r(s(), {
                    rotation: 360 / i.lines * e + "deg",
                    left: ~~a
                }), t(r(n("roundrect", {
                    arcsize: i.corners
                }), {
                    width: c,
                    height: i.width,
                    left: i.radius,
                    top: -i.width >> 1,
                    filter: l
                }), n("fill", {
                    color: o(i.color, e),
                    opacity: i.opacity
                }), n("stroke", {
                    opacity: 0
                }))))
            }
            var l, c = i.length + i.width,
                u = 2 * c,
                d = 2 * -(i.width + i.length) + "px",
                h = r(s(), {
                    position: "absolute",
                    top: d,
                    left: d
                });
            if (i.shadow)
                for (l = 1; l <= i.lines; l++) a(l, -2, "progid:DXImageTransform.Microsoft.Blur(pixelradius=2,makeshadow=1,shadowopacity=.3)");
            for (l = 1; l <= i.lines; l++) a(l);
            return t(e, h)
        }, a.prototype.opacity = function(e, t, n, i) {
            var r = e.firstChild;
            i = i.shadow && i.lines || 0, r && t + i < r.childNodes.length && (r = r.childNodes[t + i], r = r && r.firstChild, r = r && r.firstChild, r && (r.opacity = n))
        }
    }
    var c, u = ["webkit", "Moz", "ms", "O"],
        d = {},
        h = function() {
            var n = e("style", {
                type: "text/css"
            });
            return t(document.getElementsByTagName("head")[0], n), n.sheet || n.styleSheet
        }(),
        p = {
            lines: 12,
            length: 7,
            width: 5,
            radius: 10,
            rotate: 0,
            corners: 1,
            color: "#000",
            direction: 1,
            speed: 1,
            trail: 100,
            opacity: .25,
            fps: 20,
            zIndex: 2e9,
            className: "spinner",
            top: "50%",
            left: "50%",
            position: "absolute"
        };
    a.defaults = {}, s(a.prototype, {
        spin: function(t) {
            this.stop();
            var n = this,
                i = n.opts,
                s = n.el = r(e(0, {
                    className: i.className
                }), {
                    position: i.position,
                    width: 0,
                    zIndex: i.zIndex
                });
            if (i.radius + i.length + i.width, r(s, {
                    left: i.left,
                    top: i.top
                }), t && t.insertBefore(s, t.firstChild || null), s.setAttribute("role", "progressbar"), n.lines(s, n.opts), !c) {
                var o, a = 0,
                    l = (i.lines - 1) * (1 - i.direction) / 2,
                    u = i.fps,
                    d = u / i.speed,
                    h = (1 - i.opacity) / (d * i.trail / 100),
                    p = d / i.lines;
                ! function f() {
                    a++;
                    for (var e = 0; e < i.lines; e++) o = Math.max(1 - (a + (i.lines - e) * p) % d * h, i.opacity), n.opacity(s, e * i.direction + l, o, i);
                    n.timeout = n.el && setTimeout(f, ~~(1e3 / u));
                }()
            }
            return n
        },
        stop: function() {
            var e = this.el;
            return e && (clearTimeout(this.timeout), e.parentNode && e.parentNode.removeChild(e), this.el = void 0), this
        },
        lines: function(i, s) {
            function a(t, n) {
                return r(e(), {
                    position: "absolute",
                    width: s.length + s.width + "px",
                    height: s.width + "px",
                    background: t,
                    boxShadow: n,
                    transformOrigin: "left",
                    transform: "rotate(" + ~~(360 / s.lines * u + s.rotate) + "deg) translate(" + s.radius + "px,0)",
                    borderRadius: (s.corners * s.width >> 1) + "px"
                })
            }
            for (var l, u = 0, d = (s.lines - 1) * (1 - s.direction) / 2; u < s.lines; u++) l = r(e(), {
                position: "absolute",
                top: 1 + ~(s.width / 2) + "px",
                transform: s.hwaccel ? "translate3d(0,0,0)" : "",
                opacity: s.opacity,
                animation: c && n(s.opacity, s.trail, d + u * s.direction, s.lines) + " " + 1 / s.speed + "s linear infinite"
            }), s.shadow && t(l, r(a("#000", "0 0 4px #000"), {
                top: "2px"
            })), t(i, t(l, a(o(s.color, u), "0 0 1px rgba(0,0,0,.1)")));
            return i
        },
        opacity: function(e, t, n) {
            t < e.childNodes.length && (e.childNodes[t].style.opacity = n)
        }
    });
    var f = r(e("group"), {
        behavior: "url(#default#VML)"
    });
    return !i(f, "transform") && f.adj ? l() : c = i(f, "animation"), a
});