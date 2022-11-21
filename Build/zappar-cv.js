!(function (e, t) {
  "object" == typeof exports && "object" == typeof module
    ? (module.exports = t())
    : "function" == typeof define && define.amd
    ? define([], t)
    : "object" == typeof exports
    ? (exports.ZCV = t())
    : (e.ZCV = t());
})(self, function () {
  return (() => {
    var e = {
        238: function (e, t, r) {
          var i;
          !(function (a, n) {
            "use strict";
            var s = "function",
              o = "undefined",
              _ = "object",
              c = "string",
              l = "model",
              u = "name",
              d = "type",
              f = "vendor",
              h = "version",
              p = "architecture",
              m = "console",
              g = "mobile",
              b = "tablet",
              w = "smarttv",
              v = "wearable",
              y = "embedded",
              E = "Amazon",
              A = "Apple",
              T = "ASUS",
              R = "BlackBerry",
              x = "Google",
              k = "Huawei",
              F = "LG",
              L = "Microsoft",
              M = "Motorola",
              I = "Samsung",
              S = "Sony",
              U = "Xiaomi",
              C = "Zebra",
              D = "Facebook",
              P = function (e) {
                var t = {};
                for (var r in e) t[e[r].toUpperCase()] = e[r];
                return t;
              },
              B = function (e, t) {
                return typeof e === c && -1 !== O(t).indexOf(O(e));
              },
              O = function (e) {
                return e.toLowerCase();
              },
              z = function (e, t) {
                if (typeof e === c)
                  return (
                    (e = e.replace(/^\s\s*/, "").replace(/\s\s*$/, "")),
                    typeof t === o ? e : e.substring(0, 255)
                  );
              },
              V = function (e, t) {
                for (var r, i, a, o, c, l, u = 0; u < t.length && !c; ) {
                  var d = t[u],
                    f = t[u + 1];
                  for (r = i = 0; r < d.length && !c; )
                    if ((c = d[r++].exec(e)))
                      for (a = 0; a < f.length; a++)
                        (l = c[++i]),
                          typeof (o = f[a]) === _ && o.length > 0
                            ? 2 == o.length
                              ? typeof o[1] == s
                                ? (this[o[0]] = o[1].call(this, l))
                                : (this[o[0]] = o[1])
                              : 3 == o.length
                              ? typeof o[1] !== s || (o[1].exec && o[1].test)
                                ? (this[o[0]] = l ? l.replace(o[1], o[2]) : n)
                                : (this[o[0]] = l
                                    ? o[1].call(this, l, o[2])
                                    : n)
                              : 4 == o.length &&
                                (this[o[0]] = l
                                  ? o[3].call(this, l.replace(o[1], o[2]))
                                  : n)
                            : (this[o] = l || n);
                  u += 2;
                }
              },
              N = function (e, t) {
                for (var r in t)
                  if (typeof t[r] === _ && t[r].length > 0) {
                    for (var i = 0; i < t[r].length; i++)
                      if (B(t[r][i], e)) return "?" === r ? n : r;
                  } else if (B(t[r], e)) return "?" === r ? n : r;
                return e;
              },
              G = {
                ME: "4.90",
                "NT 3.11": "NT3.51",
                "NT 4.0": "NT4.0",
                2e3: "NT 5.0",
                XP: ["NT 5.1", "NT 5.2"],
                Vista: "NT 6.0",
                7: "NT 6.1",
                8: "NT 6.2",
                8.1: "NT 6.3",
                10: ["NT 6.4", "NT 10.0"],
                RT: "ARM",
              },
              H = {
                browser: [
                  [/\b(?:crmo|crios)\/([\w\.]+)/i],
                  [h, [u, "Chrome"]],
                  [/edg(?:e|ios|a)?\/([\w\.]+)/i],
                  [h, [u, "Edge"]],
                  [
                    /(opera mini)\/([-\w\.]+)/i,
                    /(opera [mobiletab]{3,6})\b.+version\/([-\w\.]+)/i,
                    /(opera)(?:.+version\/|[\/ ]+)([\w\.]+)/i,
                  ],
                  [u, h],
                  [/opios[\/ ]+([\w\.]+)/i],
                  [h, [u, "Opera Mini"]],
                  [/\bopr\/([\w\.]+)/i],
                  [h, [u, "Opera"]],
                  [
                    /(kindle)\/([\w\.]+)/i,
                    /(lunascape|maxthon|netfront|jasmine|blazer)[\/ ]?([\w\.]*)/i,
                    /(avant |iemobile|slim)(?:browser)?[\/ ]?([\w\.]*)/i,
                    /(ba?idubrowser)[\/ ]?([\w\.]+)/i,
                    /(?:ms|\()(ie) ([\w\.]+)/i,
                    /(flock|rockmelt|midori|epiphany|silk|skyfire|ovibrowser|bolt|iron|vivaldi|iridium|phantomjs|bowser|quark|qupzilla|falkon|rekonq|puffin|brave|whale|qqbrowserlite|qq)\/([-\w\.]+)/i,
                    /(weibo)__([\d\.]+)/i,
                  ],
                  [u, h],
                  [/(?:\buc? ?browser|(?:juc.+)ucweb)[\/ ]?([\w\.]+)/i],
                  [h, [u, "UCBrowser"]],
                  [/\bqbcore\/([\w\.]+)/i],
                  [h, [u, "WeChat(Win) Desktop"]],
                  [/micromessenger\/([\w\.]+)/i],
                  [h, [u, "WeChat"]],
                  [/konqueror\/([\w\.]+)/i],
                  [h, [u, "Konqueror"]],
                  [/trident.+rv[: ]([\w\.]{1,9})\b.+like gecko/i],
                  [h, [u, "IE"]],
                  [/yabrowser\/([\w\.]+)/i],
                  [h, [u, "Yandex"]],
                  [/(avast|avg)\/([\w\.]+)/i],
                  [[u, /(.+)/, "$1 Secure Browser"], h],
                  [/\bfocus\/([\w\.]+)/i],
                  [h, [u, "Firefox Focus"]],
                  [/\bopt\/([\w\.]+)/i],
                  [h, [u, "Opera Touch"]],
                  [/coc_coc\w+\/([\w\.]+)/i],
                  [h, [u, "Coc Coc"]],
                  [/dolfin\/([\w\.]+)/i],
                  [h, [u, "Dolphin"]],
                  [/coast\/([\w\.]+)/i],
                  [h, [u, "Opera Coast"]],
                  [/miuibrowser\/([\w\.]+)/i],
                  [h, [u, "MIUI Browser"]],
                  [/fxios\/([-\w\.]+)/i],
                  [h, [u, "Firefox"]],
                  [/\bqihu|(qi?ho?o?|360)browser/i],
                  [[u, "360 Browser"]],
                  [/(oculus|samsung|sailfish)browser\/([\w\.]+)/i],
                  [[u, /(.+)/, "$1 Browser"], h],
                  [/(comodo_dragon)\/([\w\.]+)/i],
                  [[u, /_/g, " "], h],
                  [
                    /(electron)\/([\w\.]+) safari/i,
                    /(tesla)(?: qtcarbrowser|\/(20\d\d\.[-\w\.]+))/i,
                    /m?(qqbrowser|baiduboxapp|2345Explorer)[\/ ]?([\w\.]+)/i,
                  ],
                  [u, h],
                  [/(metasr)[\/ ]?([\w\.]+)/i, /(lbbrowser)/i],
                  [u],
                  [
                    /((?:fban\/fbios|fb_iab\/fb4a)(?!.+fbav)|;fbav\/([\w\.]+);)/i,
                  ],
                  [[u, D], h],
                  [
                    /safari (line)\/([\w\.]+)/i,
                    /\b(line)\/([\w\.]+)\/iab/i,
                    /(chromium|instagram)[\/ ]([-\w\.]+)/i,
                  ],
                  [u, h],
                  [/\bgsa\/([\w\.]+) .*safari\//i],
                  [h, [u, "GSA"]],
                  [/headlesschrome(?:\/([\w\.]+)| )/i],
                  [h, [u, "Chrome Headless"]],
                  [/ wv\).+(chrome)\/([\w\.]+)/i],
                  [[u, "Chrome WebView"], h],
                  [/droid.+ version\/([\w\.]+)\b.+(?:mobile safari|safari)/i],
                  [h, [u, "Android Browser"]],
                  [
                    /(chrome|omniweb|arora|[tizenoka]{5} ?browser)\/v?([\w\.]+)/i,
                  ],
                  [u, h],
                  [/version\/([\w\.]+) .*mobile\/\w+ (safari)/i],
                  [h, [u, "Mobile Safari"]],
                  [/version\/([\w\.]+) .*(mobile ?safari|safari)/i],
                  [h, u],
                  [/webkit.+?(mobile ?safari|safari)(\/[\w\.]+)/i],
                  [
                    u,
                    [
                      h,
                      N,
                      {
                        "1.0": "/8",
                        1.2: "/1",
                        1.3: "/3",
                        "2.0": "/412",
                        "2.0.2": "/416",
                        "2.0.3": "/417",
                        "2.0.4": "/419",
                        "?": "/",
                      },
                    ],
                  ],
                  [/(webkit|khtml)\/([\w\.]+)/i],
                  [u, h],
                  [/(navigator|netscape\d?)\/([-\w\.]+)/i],
                  [[u, "Netscape"], h],
                  [/mobile vr; rv:([\w\.]+)\).+firefox/i],
                  [h, [u, "Firefox Reality"]],
                  [
                    /ekiohf.+(flow)\/([\w\.]+)/i,
                    /(swiftfox)/i,
                    /(icedragon|iceweasel|camino|chimera|fennec|maemo browser|minimo|conkeror|klar)[\/ ]?([\w\.\+]+)/i,
                    /(seamonkey|k-meleon|icecat|iceape|firebird|phoenix|palemoon|basilisk|waterfox)\/([-\w\.]+)$/i,
                    /(firefox)\/([\w\.]+)/i,
                    /(mozilla)\/([\w\.]+) .+rv\:.+gecko\/\d+/i,
                    /(polaris|lynx|dillo|icab|doris|amaya|w3m|netsurf|sleipnir|obigo|mosaic|(?:go|ice|up)[\. ]?browser)[-\/ ]?v?([\w\.]+)/i,
                    /(links) \(([\w\.]+)/i,
                  ],
                  [u, h],
                ],
                cpu: [
                  [/(?:(amd|x(?:(?:86|64)[-_])?|wow|win)64)[;\)]/i],
                  [[p, "amd64"]],
                  [/(ia32(?=;))/i],
                  [[p, O]],
                  [/((?:i[346]|x)86)[;\)]/i],
                  [[p, "ia32"]],
                  [/\b(aarch64|arm(v?8e?l?|_?64))\b/i],
                  [[p, "arm64"]],
                  [/\b(arm(?:v[67])?ht?n?[fl]p?)\b/i],
                  [[p, "armhf"]],
                  [/windows (ce|mobile); ppc;/i],
                  [[p, "arm"]],
                  [/((?:ppc|powerpc)(?:64)?)(?: mac|;|\))/i],
                  [[p, /ower/, "", O]],
                  [/(sun4\w)[;\)]/i],
                  [[p, "sparc"]],
                  [
                    /((?:avr32|ia64(?=;))|68k(?=\))|\barm(?=v(?:[1-7]|[5-7]1)l?|;|eabi)|(?=atmel )avr|(?:irix|mips|sparc)(?:64)?\b|pa-risc)/i,
                  ],
                  [[p, O]],
                ],
                device: [
                  [
                    /\b(sch-i[89]0\d|shw-m380s|sm-[pt]\w{2,4}|gt-[pn]\d{2,4}|sgh-t8[56]9|nexus 10)/i,
                  ],
                  [l, [f, I], [d, b]],
                  [
                    /\b((?:s[cgp]h|gt|sm)-\w+|galaxy nexus)/i,
                    /samsung[- ]([-\w]+)/i,
                    /sec-(sgh\w+)/i,
                  ],
                  [l, [f, I], [d, g]],
                  [/\((ip(?:hone|od)[\w ]*);/i],
                  [l, [f, A], [d, g]],
                  [
                    /\((ipad);[-\w\),; ]+apple/i,
                    /applecoremedia\/[\w\.]+ \((ipad)/i,
                    /\b(ipad)\d\d?,\d\d?[;\]].+ios/i,
                  ],
                  [l, [f, A], [d, b]],
                  [
                    /\b((?:ag[rs][23]?|bah2?|sht?|btv)-a?[lw]\d{2})\b(?!.+d\/s)/i,
                  ],
                  [l, [f, k], [d, b]],
                  [
                    /(?:huawei|honor)([-\w ]+)[;\)]/i,
                    /\b(nexus 6p|\w{2,4}-[atu]?[ln][01259x][012359][an]?)\b(?!.+d\/s)/i,
                  ],
                  [l, [f, k], [d, g]],
                  [
                    /\b(poco[\w ]+)(?: bui|\))/i,
                    /\b; (\w+) build\/hm\1/i,
                    /\b(hm[-_ ]?note?[_ ]?(?:\d\w)?) bui/i,
                    /\b(redmi[\-_ ]?(?:note|k)?[\w_ ]+)(?: bui|\))/i,
                    /\b(mi[-_ ]?(?:a\d|one|one[_ ]plus|note lte|max)?[_ ]?(?:\d?\w?)[_ ]?(?:plus|se|lite)?)(?: bui|\))/i,
                  ],
                  [
                    [l, /_/g, " "],
                    [f, U],
                    [d, g],
                  ],
                  [/\b(mi[-_ ]?(?:pad)(?:[\w_ ]+))(?: bui|\))/i],
                  [
                    [l, /_/g, " "],
                    [f, U],
                    [d, b],
                  ],
                  [
                    /; (\w+) bui.+ oppo/i,
                    /\b(cph[12]\d{3}|p(?:af|c[al]|d\w|e[ar])[mt]\d0|x9007)\b/i,
                  ],
                  [l, [f, "OPPO"], [d, g]],
                  [
                    /vivo (\w+)(?: bui|\))/i,
                    /\b(v[12]\d{3}\w?[at])(?: bui|;)/i,
                  ],
                  [l, [f, "Vivo"], [d, g]],
                  [/\b(rmx[12]\d{3})(?: bui|;|\))/i],
                  [l, [f, "Realme"], [d, g]],
                  [
                    /\b(milestone|droid(?:[2-4x]| (?:bionic|x2|pro|razr))?:?( 4g)?)\b[\w ]+build\//i,
                    /\bmot(?:orola)?[- ](\w*)/i,
                    /((?:moto[\w\(\) ]+|xt\d{3,4}|nexus 6)(?= bui|\)))/i,
                  ],
                  [l, [f, M], [d, g]],
                  [/\b(mz60\d|xoom[2 ]{0,2}) build\//i],
                  [l, [f, M], [d, b]],
                  [
                    /((?=lg)?[vl]k\-?\d{3}) bui| 3\.[-\w; ]{10}lg?-([06cv9]{3,4})/i,
                  ],
                  [l, [f, F], [d, b]],
                  [
                    /(lm(?:-?f100[nv]?|-[\w\.]+)(?= bui|\))|nexus [45])/i,
                    /\blg[-e;\/ ]+((?!browser|netcast|android tv)\w+)/i,
                    /\blg-?([\d\w]+) bui/i,
                  ],
                  [l, [f, F], [d, g]],
                  [
                    /(ideatab[-\w ]+)/i,
                    /lenovo ?(s[56]000[-\w]+|tab(?:[\w ]+)|yt[-\d\w]{6}|tb[-\d\w]{6})/i,
                  ],
                  [l, [f, "Lenovo"], [d, b]],
                  [
                    /(?:maemo|nokia).*(n900|lumia \d+)/i,
                    /nokia[-_ ]?([-\w\.]*)/i,
                  ],
                  [
                    [l, /_/g, " "],
                    [f, "Nokia"],
                    [d, g],
                  ],
                  [/(pixel c)\b/i],
                  [l, [f, x], [d, b]],
                  [/droid.+; (pixel[\daxl ]{0,6})(?: bui|\))/i],
                  [l, [f, x], [d, g]],
                  [
                    /droid.+ ([c-g]\d{4}|so[-gl]\w+|xq-a\w[4-7][12])(?= bui|\).+chrome\/(?![1-6]{0,1}\d\.))/i,
                  ],
                  [l, [f, S], [d, g]],
                  [/sony tablet [ps]/i, /\b(?:sony)?sgp\w+(?: bui|\))/i],
                  [
                    [l, "Xperia Tablet"],
                    [f, S],
                    [d, b],
                  ],
                  [
                    / (kb2005|in20[12]5|be20[12][59])\b/i,
                    /(?:one)?(?:plus)? (a\d0\d\d)(?: b|\))/i,
                  ],
                  [l, [f, "OnePlus"], [d, g]],
                  [
                    /(alexa)webm/i,
                    /(kf[a-z]{2}wi)( bui|\))/i,
                    /(kf[a-z]+)( bui|\)).+silk\//i,
                  ],
                  [l, [f, E], [d, b]],
                  [/((?:sd|kf)[0349hijorstuw]+)( bui|\)).+silk\//i],
                  [
                    [l, /(.+)/g, "Fire Phone $1"],
                    [f, E],
                    [d, g],
                  ],
                  [/(playbook);[-\w\),; ]+(rim)/i],
                  [l, f, [d, b]],
                  [/\b((?:bb[a-f]|st[hv])100-\d)/i, /\(bb10; (\w+)/i],
                  [l, [f, R], [d, g]],
                  [
                    /(?:\b|asus_)(transfo[prime ]{4,10} \w+|eeepc|slider \w+|nexus 7|padfone|p00[cj])/i,
                  ],
                  [l, [f, T], [d, b]],
                  [/ (z[bes]6[027][012][km][ls]|zenfone \d\w?)\b/i],
                  [l, [f, T], [d, g]],
                  [/(nexus 9)/i],
                  [l, [f, "HTC"], [d, b]],
                  [
                    /(htc)[-;_ ]{1,2}([\w ]+(?=\)| bui)|\w+)/i,
                    /(zte)[- ]([\w ]+?)(?: bui|\/|\))/i,
                    /(alcatel|geeksphone|nexian|panasonic|sony)[-_ ]?([-\w]*)/i,
                  ],
                  [f, [l, /_/g, " "], [d, g]],
                  [/droid.+; ([ab][1-7]-?[0178a]\d\d?)/i],
                  [l, [f, "Acer"], [d, b]],
                  [/droid.+; (m[1-5] note) bui/i, /\bmz-([-\w]{2,})/i],
                  [l, [f, "Meizu"], [d, g]],
                  [/\b(sh-?[altvz]?\d\d[a-ekm]?)/i],
                  [l, [f, "Sharp"], [d, g]],
                  [
                    /(blackberry|benq|palm(?=\-)|sonyericsson|acer|asus|dell|meizu|motorola|polytron)[-_ ]?([-\w]*)/i,
                    /(hp) ([\w ]+\w)/i,
                    /(asus)-?(\w+)/i,
                    /(microsoft); (lumia[\w ]+)/i,
                    /(lenovo)[-_ ]?([-\w]+)/i,
                    /(jolla)/i,
                    /(oppo) ?([\w ]+) bui/i,
                  ],
                  [f, l, [d, g]],
                  [
                    /(archos) (gamepad2?)/i,
                    /(hp).+(touchpad(?!.+tablet)|tablet)/i,
                    /(kindle)\/([\w\.]+)/i,
                    /(nook)[\w ]+build\/(\w+)/i,
                    /(dell) (strea[kpr\d ]*[\dko])/i,
                    /(le[- ]+pan)[- ]+(\w{1,9}) bui/i,
                    /(trinity)[- ]*(t\d{3}) bui/i,
                    /(gigaset)[- ]+(q\w{1,9}) bui/i,
                    /(vodafone) ([\w ]+)(?:\)| bui)/i,
                  ],
                  [f, l, [d, b]],
                  [/(surface duo)/i],
                  [l, [f, L], [d, b]],
                  [/droid [\d\.]+; (fp\du?)(?: b|\))/i],
                  [l, [f, "Fairphone"], [d, g]],
                  [/(u304aa)/i],
                  [l, [f, "AT&T"], [d, g]],
                  [/\bsie-(\w*)/i],
                  [l, [f, "Siemens"], [d, g]],
                  [/\b(rct\w+) b/i],
                  [l, [f, "RCA"], [d, b]],
                  [/\b(venue[\d ]{2,7}) b/i],
                  [l, [f, "Dell"], [d, b]],
                  [/\b(q(?:mv|ta)\w+) b/i],
                  [l, [f, "Verizon"], [d, b]],
                  [/\b(?:barnes[& ]+noble |bn[rt])([\w\+ ]*) b/i],
                  [l, [f, "Barnes & Noble"], [d, b]],
                  [/\b(tm\d{3}\w+) b/i],
                  [l, [f, "NuVision"], [d, b]],
                  [/\b(k88) b/i],
                  [l, [f, "ZTE"], [d, b]],
                  [/\b(nx\d{3}j) b/i],
                  [l, [f, "ZTE"], [d, g]],
                  [/\b(gen\d{3}) b.+49h/i],
                  [l, [f, "Swiss"], [d, g]],
                  [/\b(zur\d{3}) b/i],
                  [l, [f, "Swiss"], [d, b]],
                  [/\b((zeki)?tb.*\b) b/i],
                  [l, [f, "Zeki"], [d, b]],
                  [/\b([yr]\d{2}) b/i, /\b(dragon[- ]+touch |dt)(\w{5}) b/i],
                  [[f, "Dragon Touch"], l, [d, b]],
                  [/\b(ns-?\w{0,9}) b/i],
                  [l, [f, "Insignia"], [d, b]],
                  [/\b((nxa|next)-?\w{0,9}) b/i],
                  [l, [f, "NextBook"], [d, b]],
                  [/\b(xtreme\_)?(v(1[045]|2[015]|[3469]0|7[05])) b/i],
                  [[f, "Voice"], l, [d, g]],
                  [/\b(lvtel\-)?(v1[12]) b/i],
                  [[f, "LvTel"], l, [d, g]],
                  [/\b(ph-1) /i],
                  [l, [f, "Essential"], [d, g]],
                  [/\b(v(100md|700na|7011|917g).*\b) b/i],
                  [l, [f, "Envizen"], [d, b]],
                  [/\b(trio[-\w\. ]+) b/i],
                  [l, [f, "MachSpeed"], [d, b]],
                  [/\btu_(1491) b/i],
                  [l, [f, "Rotor"], [d, b]],
                  [/(shield[\w ]+) b/i],
                  [l, [f, "Nvidia"], [d, b]],
                  [/(sprint) (\w+)/i],
                  [f, l, [d, g]],
                  [/(kin\.[onetw]{3})/i],
                  [
                    [l, /\./g, " "],
                    [f, L],
                    [d, g],
                  ],
                  [/droid.+; (cc6666?|et5[16]|mc[239][23]x?|vc8[03]x?)\)/i],
                  [l, [f, C], [d, b]],
                  [/droid.+; (ec30|ps20|tc[2-8]\d[kx])\)/i],
                  [l, [f, C], [d, g]],
                  [/(ouya)/i, /(nintendo) ([wids3utch]+)/i],
                  [f, l, [d, m]],
                  [/droid.+; (shield) bui/i],
                  [l, [f, "Nvidia"], [d, m]],
                  [/(playstation [345portablevi]+)/i],
                  [l, [f, S], [d, m]],
                  [/\b(xbox(?: one)?(?!; xbox))[\); ]/i],
                  [l, [f, L], [d, m]],
                  [/smart-tv.+(samsung)/i],
                  [f, [d, w]],
                  [/hbbtv.+maple;(\d+)/i],
                  [
                    [l, /^/, "SmartTV"],
                    [f, I],
                    [d, w],
                  ],
                  [
                    /(nux; netcast.+smarttv|lg (netcast\.tv-201\d|android tv))/i,
                  ],
                  [
                    [f, F],
                    [d, w],
                  ],
                  [/(apple) ?tv/i],
                  [f, [l, "Apple TV"], [d, w]],
                  [/crkey/i],
                  [
                    [l, "Chromecast"],
                    [f, x],
                    [d, w],
                  ],
                  [/droid.+aft(\w)( bui|\))/i],
                  [l, [f, E], [d, w]],
                  [/\(dtv[\);].+(aquos)/i],
                  [l, [f, "Sharp"], [d, w]],
                  [
                    /\b(roku)[\dx]*[\)\/]((?:dvp-)?[\d\.]*)/i,
                    /hbbtv\/\d+\.\d+\.\d+ +\([\w ]*; *(\w[^;]*);([^;]*)/i,
                  ],
                  [
                    [f, z],
                    [l, z],
                    [d, w],
                  ],
                  [/\b(android tv|smart[- ]?tv|opera tv|tv; rv:)\b/i],
                  [[d, w]],
                  [/((pebble))app/i],
                  [f, l, [d, v]],
                  [/droid.+; (glass) \d/i],
                  [l, [f, x], [d, v]],
                  [/droid.+; (wt63?0{2,3})\)/i],
                  [l, [f, C], [d, v]],
                  [/(quest( 2)?)/i],
                  [l, [f, D], [d, v]],
                  [/(tesla)(?: qtcarbrowser|\/[-\w\.]+)/i],
                  [f, [d, y]],
                  [/droid .+?; ([^;]+?)(?: bui|\) applew).+? mobile safari/i],
                  [l, [d, g]],
                  [
                    /droid .+?; ([^;]+?)(?: bui|\) applew).+?(?! mobile) safari/i,
                  ],
                  [l, [d, b]],
                  [/\b((tablet|tab)[;\/]|focus\/\d(?!.+mobile))/i],
                  [[d, b]],
                  [/(phone|mobile(?:[;\/]| safari)|pda(?=.+windows ce))/i],
                  [[d, g]],
                  [/(android[-\w\. ]{0,9});.+buil/i],
                  [l, [f, "Generic"]],
                ],
                engine: [
                  [/windows.+ edge\/([\w\.]+)/i],
                  [h, [u, "EdgeHTML"]],
                  [/webkit\/537\.36.+chrome\/(?!27)([\w\.]+)/i],
                  [h, [u, "Blink"]],
                  [
                    /(presto)\/([\w\.]+)/i,
                    /(webkit|trident|netfront|netsurf|amaya|lynx|w3m|goanna)\/([\w\.]+)/i,
                    /ekioh(flow)\/([\w\.]+)/i,
                    /(khtml|tasman|links)[\/ ]\(?([\w\.]+)/i,
                    /(icab)[\/ ]([23]\.[\d\.]+)/i,
                  ],
                  [u, h],
                  [/rv\:([\w\.]{1,9})\b.+(gecko)/i],
                  [h, u],
                ],
                os: [
                  [/microsoft (windows) (vista|xp)/i],
                  [u, h],
                  [
                    /(windows) nt 6\.2; (arm)/i,
                    /(windows (?:phone(?: os)?|mobile))[\/ ]?([\d\.\w ]*)/i,
                    /(windows)[\/ ]?([ntce\d\. ]+\w)(?!.+xbox)/i,
                  ],
                  [u, [h, N, G]],
                  [/(win(?=3|9|n)|win 9x )([nt\d\.]+)/i],
                  [
                    [u, "Windows"],
                    [h, N, G],
                  ],
                  [
                    /ip[honead]{2,4}\b(?:.*os ([\w]+) like mac|; opera)/i,
                    /cfnetwork\/.+darwin/i,
                  ],
                  [
                    [h, /_/g, "."],
                    [u, "iOS"],
                  ],
                  [
                    /(mac os x) ?([\w\. ]*)/i,
                    /(macintosh|mac_powerpc\b)(?!.+haiku)/i,
                  ],
                  [
                    [u, "Mac OS"],
                    [h, /_/g, "."],
                  ],
                  [/droid ([\w\.]+)\b.+(android[- ]x86)/i],
                  [h, u],
                  [
                    /(android|webos|qnx|bada|rim tablet os|maemo|meego|sailfish)[-\/ ]?([\w\.]*)/i,
                    /(blackberry)\w*\/([\w\.]*)/i,
                    /(tizen|kaios)[\/ ]([\w\.]+)/i,
                    /\((series40);/i,
                  ],
                  [u, h],
                  [/\(bb(10);/i],
                  [h, [u, R]],
                  [/(?:symbian ?os|symbos|s60(?=;)|series60)[-\/ ]?([\w\.]*)/i],
                  [h, [u, "Symbian"]],
                  [
                    /mozilla\/[\d\.]+ \((?:mobile|tablet|tv|mobile; [\w ]+); rv:.+ gecko\/([\w\.]+)/i,
                  ],
                  [h, [u, "Firefox OS"]],
                  [/web0s;.+rt(tv)/i, /\b(?:hp)?wos(?:browser)?\/([\w\.]+)/i],
                  [h, [u, "webOS"]],
                  [/crkey\/([\d\.]+)/i],
                  [h, [u, "Chromecast"]],
                  [/(cros) [\w]+ ([\w\.]+\w)/i],
                  [[u, "Chromium OS"], h],
                  [
                    /(nintendo|playstation) ([wids345portablevuch]+)/i,
                    /(xbox); +xbox ([^\);]+)/i,
                    /\b(joli|palm)\b ?(?:os)?\/?([\w\.]*)/i,
                    /(mint)[\/\(\) ]?(\w*)/i,
                    /(mageia|vectorlinux)[; ]/i,
                    /([kxln]?ubuntu|debian|suse|opensuse|gentoo|arch(?= linux)|slackware|fedora|mandriva|centos|pclinuxos|red ?hat|zenwalk|linpus|raspbian|plan 9|minix|risc os|contiki|deepin|manjaro|elementary os|sabayon|linspire)(?: gnu\/linux)?(?: enterprise)?(?:[- ]linux)?(?:-gnu)?[-\/ ]?(?!chrom|package)([-\w\.]*)/i,
                    /(hurd|linux) ?([\w\.]*)/i,
                    /(gnu) ?([\w\.]*)/i,
                    /\b([-frentopcghs]{0,5}bsd|dragonfly)[\/ ]?(?!amd|[ix346]{1,2}86)([\w\.]*)/i,
                    /(haiku) (\w+)/i,
                  ],
                  [u, h],
                  [/(sunos) ?([\w\.\d]*)/i],
                  [[u, "Solaris"], h],
                  [
                    /((?:open)?solaris)[-\/ ]?([\w\.]*)/i,
                    /(aix) ((\d)(?=\.|\)| )[\w\.])*/i,
                    /\b(beos|os\/2|amigaos|morphos|openvms|fuchsia|hp-ux)/i,
                    /(unix) ?([\w\.]*)/i,
                  ],
                  [u, h],
                ],
              },
              W = function (e, t) {
                if (
                  (typeof e === _ && ((t = e), (e = n)), !(this instanceof W))
                )
                  return new W(e, t).getResult();
                var r =
                    e ||
                    (typeof a !== o && a.navigator && a.navigator.userAgent
                      ? a.navigator.userAgent
                      : ""),
                  i = t
                    ? (function (e, t) {
                        var r = {};
                        for (var i in e)
                          t[i] && t[i].length % 2 == 0
                            ? (r[i] = t[i].concat(e[i]))
                            : (r[i] = e[i]);
                        return r;
                      })(H, t)
                    : H;
                return (
                  (this.getBrowser = function () {
                    var e,
                      t = {};
                    return (
                      (t.name = n),
                      (t.version = n),
                      V.call(t, r, i.browser),
                      (t.major =
                        typeof (e = t.version) === c
                          ? e.replace(/[^\d\.]/g, "").split(".")[0]
                          : n),
                      t
                    );
                  }),
                  (this.getCPU = function () {
                    var e = {};
                    return (e.architecture = n), V.call(e, r, i.cpu), e;
                  }),
                  (this.getDevice = function () {
                    var e = {};
                    return (
                      (e.vendor = n),
                      (e.model = n),
                      (e.type = n),
                      V.call(e, r, i.device),
                      e
                    );
                  }),
                  (this.getEngine = function () {
                    var e = {};
                    return (
                      (e.name = n), (e.version = n), V.call(e, r, i.engine), e
                    );
                  }),
                  (this.getOS = function () {
                    var e = {};
                    return (e.name = n), (e.version = n), V.call(e, r, i.os), e;
                  }),
                  (this.getResult = function () {
                    return {
                      ua: this.getUA(),
                      browser: this.getBrowser(),
                      engine: this.getEngine(),
                      os: this.getOS(),
                      device: this.getDevice(),
                      cpu: this.getCPU(),
                    };
                  }),
                  (this.getUA = function () {
                    return r;
                  }),
                  (this.setUA = function (e) {
                    return (
                      (r = typeof e === c && e.length > 255 ? z(e, 255) : e),
                      this
                    );
                  }),
                  this.setUA(r),
                  this
                );
              };
            (W.VERSION = "0.7.30"),
              (W.BROWSER = P([u, h, "major"])),
              (W.CPU = P([p])),
              (W.DEVICE = P([l, f, d, m, g, w, b, v, y])),
              (W.ENGINE = W.OS = P([u, h])),
              typeof t !== o
                ? (e.exports && (t = e.exports = W), (t.UAParser = W))
                : r.amdO
                ? (i = function () {
                    return W;
                  }.call(t, r, t, e)) === n || (e.exports = i)
                : typeof a !== o && (a.UAParser = W);
            var Y = typeof a !== o && (a.jQuery || a.Zepto);
            if (Y && !Y.ua) {
              var X = new W();
              (Y.ua = X.getResult()),
                (Y.ua.get = function () {
                  return X.getUA();
                }),
                (Y.ua.set = function (e) {
                  X.setUA(e);
                  var t = X.getResult();
                  for (var r in t) Y.ua[r] = t[r];
                });
            }
          })("object" == typeof window ? window : this);
        },
        276: (e, t, r) => {
          "use strict";
          r.d(t, { Z: () => n });
          var i = r(477),
            a = r.n(i);
          function n() {
            return a()(
              '(()=>{var e={238:function(e,t,r){var i;!function(a,n){"use strict";var o="function",s="undefined",_="object",c="string",u="model",f="name",l="type",d="vendor",p="version",h="architecture",m="console",b="mobile",w="tablet",g="smarttv",y="wearable",v="embedded",E="Amazon",A="Apple",T="ASUS",x="BlackBerry",k="Google",R="Huawei",L="LG",F="Microsoft",z="Motorola",M="Samsung",I="Sony",P="Xiaomi",O="Zebra",S="Facebook",B=function(e){var t={};for(var r in e)t[e[r].toUpperCase()]=e[r];return t},D=function(e,t){return typeof e===c&&-1!==C(t).indexOf(C(e))},C=function(e){return e.toLowerCase()},U=function(e,t){if(typeof e===c)return e=e.replace(/^\\s\\s*/,"").replace(/\\s\\s*$/,""),typeof t===s?e:e.substring(0,255)},V=function(e,t){for(var r,i,a,s,c,u,f=0;f<t.length&&!c;){var l=t[f],d=t[f+1];for(r=i=0;r<l.length&&!c;)if(c=l[r++].exec(e))for(a=0;a<d.length;a++)u=c[++i],typeof(s=d[a])===_&&s.length>0?2==s.length?typeof s[1]==o?this[s[0]]=s[1].call(this,u):this[s[0]]=s[1]:3==s.length?typeof s[1]!==o||s[1].exec&&s[1].test?this[s[0]]=u?u.replace(s[1],s[2]):n:this[s[0]]=u?s[1].call(this,u,s[2]):n:4==s.length&&(this[s[0]]=u?s[3].call(this,u.replace(s[1],s[2])):n):this[s]=u||n;f+=2}},N=function(e,t){for(var r in t)if(typeof t[r]===_&&t[r].length>0){for(var i=0;i<t[r].length;i++)if(D(t[r][i],e))return"?"===r?n:r}else if(D(t[r],e))return"?"===r?n:r;return e},G={ME:"4.90","NT 3.11":"NT3.51","NT 4.0":"NT4.0",2e3:"NT 5.0",XP:["NT 5.1","NT 5.2"],Vista:"NT 6.0",7:"NT 6.1",8:"NT 6.2",8.1:"NT 6.3",10:["NT 6.4","NT 10.0"],RT:"ARM"},W={browser:[[/\\b(?:crmo|crios)\\/([\\w\\.]+)/i],[p,[f,"Chrome"]],[/edg(?:e|ios|a)?\\/([\\w\\.]+)/i],[p,[f,"Edge"]],[/(opera mini)\\/([-\\w\\.]+)/i,/(opera [mobiletab]{3,6})\\b.+version\\/([-\\w\\.]+)/i,/(opera)(?:.+version\\/|[\\/ ]+)([\\w\\.]+)/i],[f,p],[/opios[\\/ ]+([\\w\\.]+)/i],[p,[f,"Opera Mini"]],[/\\bopr\\/([\\w\\.]+)/i],[p,[f,"Opera"]],[/(kindle)\\/([\\w\\.]+)/i,/(lunascape|maxthon|netfront|jasmine|blazer)[\\/ ]?([\\w\\.]*)/i,/(avant |iemobile|slim)(?:browser)?[\\/ ]?([\\w\\.]*)/i,/(ba?idubrowser)[\\/ ]?([\\w\\.]+)/i,/(?:ms|\\()(ie) ([\\w\\.]+)/i,/(flock|rockmelt|midori|epiphany|silk|skyfire|ovibrowser|bolt|iron|vivaldi|iridium|phantomjs|bowser|quark|qupzilla|falkon|rekonq|puffin|brave|whale|qqbrowserlite|qq)\\/([-\\w\\.]+)/i,/(weibo)__([\\d\\.]+)/i],[f,p],[/(?:\\buc? ?browser|(?:juc.+)ucweb)[\\/ ]?([\\w\\.]+)/i],[p,[f,"UCBrowser"]],[/\\bqbcore\\/([\\w\\.]+)/i],[p,[f,"WeChat(Win) Desktop"]],[/micromessenger\\/([\\w\\.]+)/i],[p,[f,"WeChat"]],[/konqueror\\/([\\w\\.]+)/i],[p,[f,"Konqueror"]],[/trident.+rv[: ]([\\w\\.]{1,9})\\b.+like gecko/i],[p,[f,"IE"]],[/yabrowser\\/([\\w\\.]+)/i],[p,[f,"Yandex"]],[/(avast|avg)\\/([\\w\\.]+)/i],[[f,/(.+)/,"$1 Secure Browser"],p],[/\\bfocus\\/([\\w\\.]+)/i],[p,[f,"Firefox Focus"]],[/\\bopt\\/([\\w\\.]+)/i],[p,[f,"Opera Touch"]],[/coc_coc\\w+\\/([\\w\\.]+)/i],[p,[f,"Coc Coc"]],[/dolfin\\/([\\w\\.]+)/i],[p,[f,"Dolphin"]],[/coast\\/([\\w\\.]+)/i],[p,[f,"Opera Coast"]],[/miuibrowser\\/([\\w\\.]+)/i],[p,[f,"MIUI Browser"]],[/fxios\\/([-\\w\\.]+)/i],[p,[f,"Firefox"]],[/\\bqihu|(qi?ho?o?|360)browser/i],[[f,"360 Browser"]],[/(oculus|samsung|sailfish)browser\\/([\\w\\.]+)/i],[[f,/(.+)/,"$1 Browser"],p],[/(comodo_dragon)\\/([\\w\\.]+)/i],[[f,/_/g," "],p],[/(electron)\\/([\\w\\.]+) safari/i,/(tesla)(?: qtcarbrowser|\\/(20\\d\\d\\.[-\\w\\.]+))/i,/m?(qqbrowser|baiduboxapp|2345Explorer)[\\/ ]?([\\w\\.]+)/i],[f,p],[/(metasr)[\\/ ]?([\\w\\.]+)/i,/(lbbrowser)/i],[f],[/((?:fban\\/fbios|fb_iab\\/fb4a)(?!.+fbav)|;fbav\\/([\\w\\.]+);)/i],[[f,S],p],[/safari (line)\\/([\\w\\.]+)/i,/\\b(line)\\/([\\w\\.]+)\\/iab/i,/(chromium|instagram)[\\/ ]([-\\w\\.]+)/i],[f,p],[/\\bgsa\\/([\\w\\.]+) .*safari\\//i],[p,[f,"GSA"]],[/headlesschrome(?:\\/([\\w\\.]+)| )/i],[p,[f,"Chrome Headless"]],[/ wv\\).+(chrome)\\/([\\w\\.]+)/i],[[f,"Chrome WebView"],p],[/droid.+ version\\/([\\w\\.]+)\\b.+(?:mobile safari|safari)/i],[p,[f,"Android Browser"]],[/(chrome|omniweb|arora|[tizenoka]{5} ?browser)\\/v?([\\w\\.]+)/i],[f,p],[/version\\/([\\w\\.]+) .*mobile\\/\\w+ (safari)/i],[p,[f,"Mobile Safari"]],[/version\\/([\\w\\.]+) .*(mobile ?safari|safari)/i],[p,f],[/webkit.+?(mobile ?safari|safari)(\\/[\\w\\.]+)/i],[f,[p,N,{"1.0":"/8",1.2:"/1",1.3:"/3","2.0":"/412","2.0.2":"/416","2.0.3":"/417","2.0.4":"/419","?":"/"}]],[/(webkit|khtml)\\/([\\w\\.]+)/i],[f,p],[/(navigator|netscape\\d?)\\/([-\\w\\.]+)/i],[[f,"Netscape"],p],[/mobile vr; rv:([\\w\\.]+)\\).+firefox/i],[p,[f,"Firefox Reality"]],[/ekiohf.+(flow)\\/([\\w\\.]+)/i,/(swiftfox)/i,/(icedragon|iceweasel|camino|chimera|fennec|maemo browser|minimo|conkeror|klar)[\\/ ]?([\\w\\.\\+]+)/i,/(seamonkey|k-meleon|icecat|iceape|firebird|phoenix|palemoon|basilisk|waterfox)\\/([-\\w\\.]+)$/i,/(firefox)\\/([\\w\\.]+)/i,/(mozilla)\\/([\\w\\.]+) .+rv\\:.+gecko\\/\\d+/i,/(polaris|lynx|dillo|icab|doris|amaya|w3m|netsurf|sleipnir|obigo|mosaic|(?:go|ice|up)[\\. ]?browser)[-\\/ ]?v?([\\w\\.]+)/i,/(links) \\(([\\w\\.]+)/i],[f,p]],cpu:[[/(?:(amd|x(?:(?:86|64)[-_])?|wow|win)64)[;\\)]/i],[[h,"amd64"]],[/(ia32(?=;))/i],[[h,C]],[/((?:i[346]|x)86)[;\\)]/i],[[h,"ia32"]],[/\\b(aarch64|arm(v?8e?l?|_?64))\\b/i],[[h,"arm64"]],[/\\b(arm(?:v[67])?ht?n?[fl]p?)\\b/i],[[h,"armhf"]],[/windows (ce|mobile); ppc;/i],[[h,"arm"]],[/((?:ppc|powerpc)(?:64)?)(?: mac|;|\\))/i],[[h,/ower/,"",C]],[/(sun4\\w)[;\\)]/i],[[h,"sparc"]],[/((?:avr32|ia64(?=;))|68k(?=\\))|\\barm(?=v(?:[1-7]|[5-7]1)l?|;|eabi)|(?=atmel )avr|(?:irix|mips|sparc)(?:64)?\\b|pa-risc)/i],[[h,C]]],device:[[/\\b(sch-i[89]0\\d|shw-m380s|sm-[pt]\\w{2,4}|gt-[pn]\\d{2,4}|sgh-t8[56]9|nexus 10)/i],[u,[d,M],[l,w]],[/\\b((?:s[cgp]h|gt|sm)-\\w+|galaxy nexus)/i,/samsung[- ]([-\\w]+)/i,/sec-(sgh\\w+)/i],[u,[d,M],[l,b]],[/\\((ip(?:hone|od)[\\w ]*);/i],[u,[d,A],[l,b]],[/\\((ipad);[-\\w\\),; ]+apple/i,/applecoremedia\\/[\\w\\.]+ \\((ipad)/i,/\\b(ipad)\\d\\d?,\\d\\d?[;\\]].+ios/i],[u,[d,A],[l,w]],[/\\b((?:ag[rs][23]?|bah2?|sht?|btv)-a?[lw]\\d{2})\\b(?!.+d\\/s)/i],[u,[d,R],[l,w]],[/(?:huawei|honor)([-\\w ]+)[;\\)]/i,/\\b(nexus 6p|\\w{2,4}-[atu]?[ln][01259x][012359][an]?)\\b(?!.+d\\/s)/i],[u,[d,R],[l,b]],[/\\b(poco[\\w ]+)(?: bui|\\))/i,/\\b; (\\w+) build\\/hm\\1/i,/\\b(hm[-_ ]?note?[_ ]?(?:\\d\\w)?) bui/i,/\\b(redmi[\\-_ ]?(?:note|k)?[\\w_ ]+)(?: bui|\\))/i,/\\b(mi[-_ ]?(?:a\\d|one|one[_ ]plus|note lte|max)?[_ ]?(?:\\d?\\w?)[_ ]?(?:plus|se|lite)?)(?: bui|\\))/i],[[u,/_/g," "],[d,P],[l,b]],[/\\b(mi[-_ ]?(?:pad)(?:[\\w_ ]+))(?: bui|\\))/i],[[u,/_/g," "],[d,P],[l,w]],[/; (\\w+) bui.+ oppo/i,/\\b(cph[12]\\d{3}|p(?:af|c[al]|d\\w|e[ar])[mt]\\d0|x9007)\\b/i],[u,[d,"OPPO"],[l,b]],[/vivo (\\w+)(?: bui|\\))/i,/\\b(v[12]\\d{3}\\w?[at])(?: bui|;)/i],[u,[d,"Vivo"],[l,b]],[/\\b(rmx[12]\\d{3})(?: bui|;|\\))/i],[u,[d,"Realme"],[l,b]],[/\\b(milestone|droid(?:[2-4x]| (?:bionic|x2|pro|razr))?:?( 4g)?)\\b[\\w ]+build\\//i,/\\bmot(?:orola)?[- ](\\w*)/i,/((?:moto[\\w\\(\\) ]+|xt\\d{3,4}|nexus 6)(?= bui|\\)))/i],[u,[d,z],[l,b]],[/\\b(mz60\\d|xoom[2 ]{0,2}) build\\//i],[u,[d,z],[l,w]],[/((?=lg)?[vl]k\\-?\\d{3}) bui| 3\\.[-\\w; ]{10}lg?-([06cv9]{3,4})/i],[u,[d,L],[l,w]],[/(lm(?:-?f100[nv]?|-[\\w\\.]+)(?= bui|\\))|nexus [45])/i,/\\blg[-e;\\/ ]+((?!browser|netcast|android tv)\\w+)/i,/\\blg-?([\\d\\w]+) bui/i],[u,[d,L],[l,b]],[/(ideatab[-\\w ]+)/i,/lenovo ?(s[56]000[-\\w]+|tab(?:[\\w ]+)|yt[-\\d\\w]{6}|tb[-\\d\\w]{6})/i],[u,[d,"Lenovo"],[l,w]],[/(?:maemo|nokia).*(n900|lumia \\d+)/i,/nokia[-_ ]?([-\\w\\.]*)/i],[[u,/_/g," "],[d,"Nokia"],[l,b]],[/(pixel c)\\b/i],[u,[d,k],[l,w]],[/droid.+; (pixel[\\daxl ]{0,6})(?: bui|\\))/i],[u,[d,k],[l,b]],[/droid.+ ([c-g]\\d{4}|so[-gl]\\w+|xq-a\\w[4-7][12])(?= bui|\\).+chrome\\/(?![1-6]{0,1}\\d\\.))/i],[u,[d,I],[l,b]],[/sony tablet [ps]/i,/\\b(?:sony)?sgp\\w+(?: bui|\\))/i],[[u,"Xperia Tablet"],[d,I],[l,w]],[/ (kb2005|in20[12]5|be20[12][59])\\b/i,/(?:one)?(?:plus)? (a\\d0\\d\\d)(?: b|\\))/i],[u,[d,"OnePlus"],[l,b]],[/(alexa)webm/i,/(kf[a-z]{2}wi)( bui|\\))/i,/(kf[a-z]+)( bui|\\)).+silk\\//i],[u,[d,E],[l,w]],[/((?:sd|kf)[0349hijorstuw]+)( bui|\\)).+silk\\//i],[[u,/(.+)/g,"Fire Phone $1"],[d,E],[l,b]],[/(playbook);[-\\w\\),; ]+(rim)/i],[u,d,[l,w]],[/\\b((?:bb[a-f]|st[hv])100-\\d)/i,/\\(bb10; (\\w+)/i],[u,[d,x],[l,b]],[/(?:\\b|asus_)(transfo[prime ]{4,10} \\w+|eeepc|slider \\w+|nexus 7|padfone|p00[cj])/i],[u,[d,T],[l,w]],[/ (z[bes]6[027][012][km][ls]|zenfone \\d\\w?)\\b/i],[u,[d,T],[l,b]],[/(nexus 9)/i],[u,[d,"HTC"],[l,w]],[/(htc)[-;_ ]{1,2}([\\w ]+(?=\\)| bui)|\\w+)/i,/(zte)[- ]([\\w ]+?)(?: bui|\\/|\\))/i,/(alcatel|geeksphone|nexian|panasonic|sony)[-_ ]?([-\\w]*)/i],[d,[u,/_/g," "],[l,b]],[/droid.+; ([ab][1-7]-?[0178a]\\d\\d?)/i],[u,[d,"Acer"],[l,w]],[/droid.+; (m[1-5] note) bui/i,/\\bmz-([-\\w]{2,})/i],[u,[d,"Meizu"],[l,b]],[/\\b(sh-?[altvz]?\\d\\d[a-ekm]?)/i],[u,[d,"Sharp"],[l,b]],[/(blackberry|benq|palm(?=\\-)|sonyericsson|acer|asus|dell|meizu|motorola|polytron)[-_ ]?([-\\w]*)/i,/(hp) ([\\w ]+\\w)/i,/(asus)-?(\\w+)/i,/(microsoft); (lumia[\\w ]+)/i,/(lenovo)[-_ ]?([-\\w]+)/i,/(jolla)/i,/(oppo) ?([\\w ]+) bui/i],[d,u,[l,b]],[/(archos) (gamepad2?)/i,/(hp).+(touchpad(?!.+tablet)|tablet)/i,/(kindle)\\/([\\w\\.]+)/i,/(nook)[\\w ]+build\\/(\\w+)/i,/(dell) (strea[kpr\\d ]*[\\dko])/i,/(le[- ]+pan)[- ]+(\\w{1,9}) bui/i,/(trinity)[- ]*(t\\d{3}) bui/i,/(gigaset)[- ]+(q\\w{1,9}) bui/i,/(vodafone) ([\\w ]+)(?:\\)| bui)/i],[d,u,[l,w]],[/(surface duo)/i],[u,[d,F],[l,w]],[/droid [\\d\\.]+; (fp\\du?)(?: b|\\))/i],[u,[d,"Fairphone"],[l,b]],[/(u304aa)/i],[u,[d,"AT&T"],[l,b]],[/\\bsie-(\\w*)/i],[u,[d,"Siemens"],[l,b]],[/\\b(rct\\w+) b/i],[u,[d,"RCA"],[l,w]],[/\\b(venue[\\d ]{2,7}) b/i],[u,[d,"Dell"],[l,w]],[/\\b(q(?:mv|ta)\\w+) b/i],[u,[d,"Verizon"],[l,w]],[/\\b(?:barnes[& ]+noble |bn[rt])([\\w\\+ ]*) b/i],[u,[d,"Barnes & Noble"],[l,w]],[/\\b(tm\\d{3}\\w+) b/i],[u,[d,"NuVision"],[l,w]],[/\\b(k88) b/i],[u,[d,"ZTE"],[l,w]],[/\\b(nx\\d{3}j) b/i],[u,[d,"ZTE"],[l,b]],[/\\b(gen\\d{3}) b.+49h/i],[u,[d,"Swiss"],[l,b]],[/\\b(zur\\d{3}) b/i],[u,[d,"Swiss"],[l,w]],[/\\b((zeki)?tb.*\\b) b/i],[u,[d,"Zeki"],[l,w]],[/\\b([yr]\\d{2}) b/i,/\\b(dragon[- ]+touch |dt)(\\w{5}) b/i],[[d,"Dragon Touch"],u,[l,w]],[/\\b(ns-?\\w{0,9}) b/i],[u,[d,"Insignia"],[l,w]],[/\\b((nxa|next)-?\\w{0,9}) b/i],[u,[d,"NextBook"],[l,w]],[/\\b(xtreme\\_)?(v(1[045]|2[015]|[3469]0|7[05])) b/i],[[d,"Voice"],u,[l,b]],[/\\b(lvtel\\-)?(v1[12]) b/i],[[d,"LvTel"],u,[l,b]],[/\\b(ph-1) /i],[u,[d,"Essential"],[l,b]],[/\\b(v(100md|700na|7011|917g).*\\b) b/i],[u,[d,"Envizen"],[l,w]],[/\\b(trio[-\\w\\. ]+) b/i],[u,[d,"MachSpeed"],[l,w]],[/\\btu_(1491) b/i],[u,[d,"Rotor"],[l,w]],[/(shield[\\w ]+) b/i],[u,[d,"Nvidia"],[l,w]],[/(sprint) (\\w+)/i],[d,u,[l,b]],[/(kin\\.[onetw]{3})/i],[[u,/\\./g," "],[d,F],[l,b]],[/droid.+; (cc6666?|et5[16]|mc[239][23]x?|vc8[03]x?)\\)/i],[u,[d,O],[l,w]],[/droid.+; (ec30|ps20|tc[2-8]\\d[kx])\\)/i],[u,[d,O],[l,b]],[/(ouya)/i,/(nintendo) ([wids3utch]+)/i],[d,u,[l,m]],[/droid.+; (shield) bui/i],[u,[d,"Nvidia"],[l,m]],[/(playstation [345portablevi]+)/i],[u,[d,I],[l,m]],[/\\b(xbox(?: one)?(?!; xbox))[\\); ]/i],[u,[d,F],[l,m]],[/smart-tv.+(samsung)/i],[d,[l,g]],[/hbbtv.+maple;(\\d+)/i],[[u,/^/,"SmartTV"],[d,M],[l,g]],[/(nux; netcast.+smarttv|lg (netcast\\.tv-201\\d|android tv))/i],[[d,L],[l,g]],[/(apple) ?tv/i],[d,[u,"Apple TV"],[l,g]],[/crkey/i],[[u,"Chromecast"],[d,k],[l,g]],[/droid.+aft(\\w)( bui|\\))/i],[u,[d,E],[l,g]],[/\\(dtv[\\);].+(aquos)/i],[u,[d,"Sharp"],[l,g]],[/\\b(roku)[\\dx]*[\\)\\/]((?:dvp-)?[\\d\\.]*)/i,/hbbtv\\/\\d+\\.\\d+\\.\\d+ +\\([\\w ]*; *(\\w[^;]*);([^;]*)/i],[[d,U],[u,U],[l,g]],[/\\b(android tv|smart[- ]?tv|opera tv|tv; rv:)\\b/i],[[l,g]],[/((pebble))app/i],[d,u,[l,y]],[/droid.+; (glass) \\d/i],[u,[d,k],[l,y]],[/droid.+; (wt63?0{2,3})\\)/i],[u,[d,O],[l,y]],[/(quest( 2)?)/i],[u,[d,S],[l,y]],[/(tesla)(?: qtcarbrowser|\\/[-\\w\\.]+)/i],[d,[l,v]],[/droid .+?; ([^;]+?)(?: bui|\\) applew).+? mobile safari/i],[u,[l,b]],[/droid .+?; ([^;]+?)(?: bui|\\) applew).+?(?! mobile) safari/i],[u,[l,w]],[/\\b((tablet|tab)[;\\/]|focus\\/\\d(?!.+mobile))/i],[[l,w]],[/(phone|mobile(?:[;\\/]| safari)|pda(?=.+windows ce))/i],[[l,b]],[/(android[-\\w\\. ]{0,9});.+buil/i],[u,[d,"Generic"]]],engine:[[/windows.+ edge\\/([\\w\\.]+)/i],[p,[f,"EdgeHTML"]],[/webkit\\/537\\.36.+chrome\\/(?!27)([\\w\\.]+)/i],[p,[f,"Blink"]],[/(presto)\\/([\\w\\.]+)/i,/(webkit|trident|netfront|netsurf|amaya|lynx|w3m|goanna)\\/([\\w\\.]+)/i,/ekioh(flow)\\/([\\w\\.]+)/i,/(khtml|tasman|links)[\\/ ]\\(?([\\w\\.]+)/i,/(icab)[\\/ ]([23]\\.[\\d\\.]+)/i],[f,p],[/rv\\:([\\w\\.]{1,9})\\b.+(gecko)/i],[p,f]],os:[[/microsoft (windows) (vista|xp)/i],[f,p],[/(windows) nt 6\\.2; (arm)/i,/(windows (?:phone(?: os)?|mobile))[\\/ ]?([\\d\\.\\w ]*)/i,/(windows)[\\/ ]?([ntce\\d\\. ]+\\w)(?!.+xbox)/i],[f,[p,N,G]],[/(win(?=3|9|n)|win 9x )([nt\\d\\.]+)/i],[[f,"Windows"],[p,N,G]],[/ip[honead]{2,4}\\b(?:.*os ([\\w]+) like mac|; opera)/i,/cfnetwork\\/.+darwin/i],[[p,/_/g,"."],[f,"iOS"]],[/(mac os x) ?([\\w\\. ]*)/i,/(macintosh|mac_powerpc\\b)(?!.+haiku)/i],[[f,"Mac OS"],[p,/_/g,"."]],[/droid ([\\w\\.]+)\\b.+(android[- ]x86)/i],[p,f],[/(android|webos|qnx|bada|rim tablet os|maemo|meego|sailfish)[-\\/ ]?([\\w\\.]*)/i,/(blackberry)\\w*\\/([\\w\\.]*)/i,/(tizen|kaios)[\\/ ]([\\w\\.]+)/i,/\\((series40);/i],[f,p],[/\\(bb(10);/i],[p,[f,x]],[/(?:symbian ?os|symbos|s60(?=;)|series60)[-\\/ ]?([\\w\\.]*)/i],[p,[f,"Symbian"]],[/mozilla\\/[\\d\\.]+ \\((?:mobile|tablet|tv|mobile; [\\w ]+); rv:.+ gecko\\/([\\w\\.]+)/i],[p,[f,"Firefox OS"]],[/web0s;.+rt(tv)/i,/\\b(?:hp)?wos(?:browser)?\\/([\\w\\.]+)/i],[p,[f,"webOS"]],[/crkey\\/([\\d\\.]+)/i],[p,[f,"Chromecast"]],[/(cros) [\\w]+ ([\\w\\.]+\\w)/i],[[f,"Chromium OS"],p],[/(nintendo|playstation) ([wids345portablevuch]+)/i,/(xbox); +xbox ([^\\);]+)/i,/\\b(joli|palm)\\b ?(?:os)?\\/?([\\w\\.]*)/i,/(mint)[\\/\\(\\) ]?(\\w*)/i,/(mageia|vectorlinux)[; ]/i,/([kxln]?ubuntu|debian|suse|opensuse|gentoo|arch(?= linux)|slackware|fedora|mandriva|centos|pclinuxos|red ?hat|zenwalk|linpus|raspbian|plan 9|minix|risc os|contiki|deepin|manjaro|elementary os|sabayon|linspire)(?: gnu\\/linux)?(?: enterprise)?(?:[- ]linux)?(?:-gnu)?[-\\/ ]?(?!chrom|package)([-\\w\\.]*)/i,/(hurd|linux) ?([\\w\\.]*)/i,/(gnu) ?([\\w\\.]*)/i,/\\b([-frentopcghs]{0,5}bsd|dragonfly)[\\/ ]?(?!amd|[ix346]{1,2}86)([\\w\\.]*)/i,/(haiku) (\\w+)/i],[f,p],[/(sunos) ?([\\w\\.\\d]*)/i],[[f,"Solaris"],p],[/((?:open)?solaris)[-\\/ ]?([\\w\\.]*)/i,/(aix) ((\\d)(?=\\.|\\)| )[\\w\\.])*/i,/\\b(beos|os\\/2|amigaos|morphos|openvms|fuchsia|hp-ux)/i,/(unix) ?([\\w\\.]*)/i],[f,p]]},H=function(e,t){if(typeof e===_&&(t=e,e=n),!(this instanceof H))return new H(e,t).getResult();var r=e||(typeof a!==s&&a.navigator&&a.navigator.userAgent?a.navigator.userAgent:""),i=t?function(e,t){var r={};for(var i in e)t[i]&&t[i].length%2==0?r[i]=t[i].concat(e[i]):r[i]=e[i];return r}(W,t):W;return this.getBrowser=function(){var e,t={};return t.name=n,t.version=n,V.call(t,r,i.browser),t.major=typeof(e=t.version)===c?e.replace(/[^\\d\\.]/g,"").split(".")[0]:n,t},this.getCPU=function(){var e={};return e.architecture=n,V.call(e,r,i.cpu),e},this.getDevice=function(){var e={};return e.vendor=n,e.model=n,e.type=n,V.call(e,r,i.device),e},this.getEngine=function(){var e={};return e.name=n,e.version=n,V.call(e,r,i.engine),e},this.getOS=function(){var e={};return e.name=n,e.version=n,V.call(e,r,i.os),e},this.getResult=function(){return{ua:this.getUA(),browser:this.getBrowser(),engine:this.getEngine(),os:this.getOS(),device:this.getDevice(),cpu:this.getCPU()}},this.getUA=function(){return r},this.setUA=function(e){return r=typeof e===c&&e.length>255?U(e,255):e,this},this.setUA(r),this};H.VERSION="0.7.30",H.BROWSER=B([f,p,"major"]),H.CPU=B([h]),H.DEVICE=B([u,d,l,m,b,g,w,y,v]),H.ENGINE=H.OS=B([f,p]),typeof t!==s?(e.exports&&(t=e.exports=H),t.UAParser=H):r.amdO?(i=function(){return H}.call(t,r,t,e))===n||(e.exports=i):typeof a!==s&&(a.UAParser=H);var Y=typeof a!==s&&(a.jQuery||a.Zepto);if(Y&&!Y.ua){var X=new H;Y.ua=X.getResult(),Y.ua.get=function(){return X.getUA()},Y.ua.set=function(e){X.setUA(e);var t=X.getResult();for(var r in t)Y.ua[r]=t[r]}}}("object"==typeof window?window:this)},751:(e,t,r)=>{"use strict";e.exports=r.p+"ad56c9a01f0d026178a3.wasm"}},t={};function r(i){var a=t[i];if(void 0!==a)return a.exports;var n=t[i]={exports:{}};return e[i].call(n.exports,n,n.exports,r),n.exports}r.m=e,r.amdO={},r.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e;r.g.importScripts&&(e=r.g.location+"");var t=r.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var i=t.getElementsByTagName("script");i.length&&(e=i[i.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\\?.*$/,"").replace(/\\/[^\\/]+$/,"/"),r.p=e})(),r.b=self.location+"",(()=>{"use strict";var e;const t=(e="undefined"!=typeof document&&document.currentScript?document.currentScript.src:void 0,function(t){var r,i,a;t=t||{},r||(r=void 0!==t?t:{}),r.ready=new Promise((function(e,t){i=e,a=t}));var n,o={};for(n in r)r.hasOwnProperty(n)&&(o[n]=r[n]);var s="./this.program";function _(e,t){throw t}var c,u="";u=self.location.href,e&&(u=e),u=0!==u.indexOf("blob:")?u.substr(0,u.lastIndexOf("/")+1):"",c=function(e){var t=new XMLHttpRequest;return t.open("GET",e,!1),t.responseType="arraybuffer",t.send(null),new Uint8Array(t.response)};var f,l,d=r.print||console.log.bind(console),p=r.printErr||console.warn.bind(console);for(n in o)o.hasOwnProperty(n)&&(r[n]=o[n]);o=null,r.thisProgram&&(s=r.thisProgram),r.quit&&(_=r.quit),r.wasmBinary&&(l=r.wasmBinary);var h=r.noExitRuntime||!0;"object"!=typeof WebAssembly&&K("no native wasm support detected");var m,b,w=!1;function g(e,t){e||K("Assertion failed: "+t)}function y(e){var t=r["_"+e];return g(t,"Cannot call unknown function "+e+", make sure it is exported"),t}function v(e,t,r,i){var a,n={string:function(e){var t=0;if(null!=e&&0!==e){var r=1+(e.length<<2);t=gr(r),O(e,T,t,r)}return t},array:function(e){var t=gr(e.length);return A.set(e,t),t}},o=y(e),s=[];if(e=0,i)for(var _=0;_<i.length;_++){var c=n[r[_]];c?(0===e&&(e=br()),s[_]=c(i[_])):s[_]=i[_]}return a=r=o.apply(null,s),r="string"===t?P(a):"boolean"===t?!!a:a,0!==e&&wr(e),r}var E,A,T,x,k,R,L,F,z,M="undefined"!=typeof TextDecoder?new TextDecoder("utf8"):void 0;function I(e,t,r){var i=t+r;for(r=t;e[r]&&!(r>=i);)++r;if(16<r-t&&e.subarray&&M)return M.decode(e.subarray(t,r));for(i="";t<r;){var a=e[t++];if(128&a){var n=63&e[t++];if(192==(224&a))i+=String.fromCharCode((31&a)<<6|n);else{var o=63&e[t++];65536>(a=224==(240&a)?(15&a)<<12|n<<6|o:(7&a)<<18|n<<12|o<<6|63&e[t++])?i+=String.fromCharCode(a):(a-=65536,i+=String.fromCharCode(55296|a>>10,56320|1023&a))}}else i+=String.fromCharCode(a)}return i}function P(e,t){return e?I(T,e,t):""}function O(e,t,r,i){if(!(0<i))return 0;var a=r;i=r+i-1;for(var n=0;n<e.length;++n){var o=e.charCodeAt(n);if(55296<=o&&57343>=o&&(o=65536+((1023&o)<<10)|1023&e.charCodeAt(++n)),127>=o){if(r>=i)break;t[r++]=o}else{if(2047>=o){if(r+1>=i)break;t[r++]=192|o>>6}else{if(65535>=o){if(r+2>=i)break;t[r++]=224|o>>12}else{if(r+3>=i)break;t[r++]=240|o>>18,t[r++]=128|o>>12&63}t[r++]=128|o>>6&63}t[r++]=128|63&o}}return t[r]=0,r-a}function S(e){for(var t=0,r=0;r<e.length;++r){var i=e.charCodeAt(r);55296<=i&&57343>=i&&(i=65536+((1023&i)<<10)|1023&e.charCodeAt(++r)),127>=i?++t:t=2047>=i?t+2:65535>=i?t+3:t+4}return t}function B(e){var t=S(e)+1,r=fr(t);return r&&O(e,A,r,t),r}function D(e,t){for(var r=0;r<e.length;++r)A[t++>>0]=e.charCodeAt(r);A[t>>0]=0}function C(){var e=m.buffer;E=e,r.HEAP8=A=new Int8Array(e),r.HEAP16=x=new Int16Array(e),r.HEAP32=R=new Int32Array(e),r.HEAPU8=T=new Uint8Array(e),r.HEAPU16=k=new Uint16Array(e),r.HEAPU32=L=new Uint32Array(e),r.HEAPF32=F=new Float32Array(e),r.HEAPF64=z=new Float64Array(e)}var U,V=[],N=[],G=[],W=[];function H(){var e=r.preRun.shift();V.unshift(e)}var Y=0,X=null,q=null;function Z(){Y++,r.monitorRunDependencies&&r.monitorRunDependencies(Y)}function j(){if(Y--,r.monitorRunDependencies&&r.monitorRunDependencies(Y),0==Y&&(null!==X&&(clearInterval(X),X=null),q)){var e=q;q=null,e()}}function K(e){throw r.onAbort&&r.onAbort(e),p(e),w=!0,b=1,e=new WebAssembly.RuntimeError("abort("+e+"). Build with -s ASSERTIONS=1 for more info."),a(e),e}r.preloadedImages={},r.preloadedAudios={};var J="zappar-cv.wasm";if(String.prototype.startsWith?!J.startsWith("data:application/octet-stream;base64,"):0!==J.indexOf("data:application/octet-stream;base64,")){var $=J;J=r.locateFile?r.locateFile($,u):u+$}var Q,ee,te,re={490708:function(){if(self.crypto&&self.crypto.getRandomValues){var e=new Uint32Array(1);return self.crypto.getRandomValues(e),e[0]}return 9007199254740991*Math.random()}};function ie(e){for(;0<e.length;){var t=e.shift();if("function"==typeof t)t(r);else{var i=t.wd;"number"==typeof i?void 0===t.Pc?U.get(i)():U.get(i)(t.Pc):i(void 0===t.Pc?null:t.Pc)}}}function ae(e,t){if(0===e)e=Date.now();else{if(1!==e&&4!==e)return R[dr()>>2]=28,-1;e=te()}return R[t>>2]=e/1e3|0,R[t+4>>2]=e%1e3*1e6|0,0}function ne(e){this.Ic=e-16,this.Nd=function(e){R[this.Ic+8>>2]=e},this.Kd=function(e){R[this.Ic+0>>2]=e},this.Ld=function(){R[this.Ic+4>>2]=0},this.Jd=function(){A[this.Ic+12>>0]=0},this.Md=function(){A[this.Ic+13>>0]=0},this.zd=function(e,t){this.Nd(e),this.Kd(t),this.Ld(),this.Jd(),this.Md()}}function oe(e,t){for(var r=0,i=e.length-1;0<=i;i--){var a=e[i];"."===a?e.splice(i,1):".."===a?(e.splice(i,1),r++):r&&(e.splice(i,1),r--)}if(t)for(;r;r--)e.unshift("..");return e}function se(e){var t="/"===e.charAt(0),r="/"===e.substr(-1);return(e=oe(e.split("/").filter((function(e){return!!e})),!t).join("/"))||t||(e="."),e&&r&&(e+="/"),(t?"/":"")+e}function _e(e){var t=/^(\\/?|)([\\s\\S]*?)((?:\\.{1,2}|[^\\/]+?|)(\\.[^.\\/]*|))(?:[\\/]*)$/.exec(e).slice(1);return e=t[0],t=t[1],e||t?(t&&(t=t.substr(0,t.length-1)),e+t):"."}function ce(e){if("/"===e)return"/";var t=(e=(e=se(e)).replace(/\\/$/,"")).lastIndexOf("/");return-1===t?e:e.substr(t+1)}function ue(){for(var e="",t=!1,r=arguments.length-1;-1<=r&&!t;r--){if("string"!=typeof(t=0<=r?arguments[r]:"/"))throw new TypeError("Arguments to path.resolve must be strings");if(!t)return"";e=t+"/"+e,t="/"===t.charAt(0)}return(t?"/":"")+(e=oe(e.split("/").filter((function(e){return!!e})),!t).join("/"))||"."}te=function(){return performance.now()};var fe=[];function le(e,t){fe[e]={input:[],xc:[],Hc:t},De(e,de)}var de={open:function(e){var t=fe[e.node.Mc];if(!t)throw new Te(43);e.vc=t,e.seekable=!1},close:function(e){e.vc.Hc.flush(e.vc)},flush:function(e){e.vc.Hc.flush(e.vc)},read:function(e,t,r,i){if(!e.vc||!e.vc.Hc.jd)throw new Te(60);for(var a=0,n=0;n<i;n++){try{var o=e.vc.Hc.jd(e.vc)}catch(e){throw new Te(29)}if(void 0===o&&0===a)throw new Te(6);if(null==o)break;a++,t[r+n]=o}return a&&(e.node.timestamp=Date.now()),a},write:function(e,t,r,i){if(!e.vc||!e.vc.Hc.ad)throw new Te(60);try{for(var a=0;a<i;a++)e.vc.Hc.ad(e.vc,t[r+a])}catch(e){throw new Te(29)}return i&&(e.node.timestamp=Date.now()),a}},pe={jd:function(e){if(!e.input.length){var t=null;if("undefined"!=typeof window&&"function"==typeof window.prompt?null!==(t=window.prompt("Input: "))&&(t+="\\n"):"function"==typeof readline&&null!==(t=readline())&&(t+="\\n"),!t)return null;e.input=sr(t,!0)}return e.input.shift()},ad:function(e,t){null===t||10===t?(d(I(e.xc,0)),e.xc=[]):0!=t&&e.xc.push(t)},flush:function(e){e.xc&&0<e.xc.length&&(d(I(e.xc,0)),e.xc=[])}},he={ad:function(e,t){null===t||10===t?(p(I(e.xc,0)),e.xc=[]):0!=t&&e.xc.push(t)},flush:function(e){e.xc&&0<e.xc.length&&(p(I(e.xc,0)),e.xc=[])}},me={Ac:null,Cc:function(){return me.createNode(null,"/",16895,0)},createNode:function(e,t,r,i){if(24576==(61440&r)||4096==(61440&r))throw new Te(63);return me.Ac||(me.Ac={dir:{node:{zc:me.rc.zc,Bc:me.rc.Bc,Kc:me.rc.Kc,Rc:me.rc.Rc,od:me.rc.od,Xc:me.rc.Xc,pd:me.rc.pd,Sc:me.rc.Sc,Tc:me.rc.Tc},stream:{Fc:me.tc.Fc}},file:{node:{zc:me.rc.zc,Bc:me.rc.Bc},stream:{Fc:me.tc.Fc,read:me.tc.read,write:me.tc.write,dd:me.tc.dd,kd:me.tc.kd,md:me.tc.md}},link:{node:{zc:me.rc.zc,Bc:me.rc.Bc,Nc:me.rc.Nc},stream:{}},ed:{node:{zc:me.rc.zc,Bc:me.rc.Bc},stream:Be}}),16384==(61440&(r=ze(e,t,r,i)).mode)?(r.rc=me.Ac.dir.node,r.tc=me.Ac.dir.stream,r.sc={}):32768==(61440&r.mode)?(r.rc=me.Ac.file.node,r.tc=me.Ac.file.stream,r.uc=0,r.sc=null):40960==(61440&r.mode)?(r.rc=me.Ac.link.node,r.tc=me.Ac.link.stream):8192==(61440&r.mode)&&(r.rc=me.Ac.ed.node,r.tc=me.Ac.ed.stream),r.timestamp=Date.now(),e&&(e.sc[t]=r,e.timestamp=r.timestamp),r},Zd:function(e){return e.sc?e.sc.subarray?e.sc.subarray(0,e.uc):new Uint8Array(e.sc):new Uint8Array(0)},fd:function(e,t){var r=e.sc?e.sc.length:0;r>=t||(t=Math.max(t,r*(1048576>r?2:1.125)>>>0),0!=r&&(t=Math.max(t,256)),r=e.sc,e.sc=new Uint8Array(t),0<e.uc&&e.sc.set(r.subarray(0,e.uc),0))},Hd:function(e,t){if(e.uc!=t)if(0==t)e.sc=null,e.uc=0;else{var r=e.sc;e.sc=new Uint8Array(t),r&&e.sc.set(r.subarray(0,Math.min(t,e.uc))),e.uc=t}},rc:{zc:function(e){var t={};return t.ud=8192==(61440&e.mode)?e.id:1,t.$c=e.id,t.mode=e.mode,t.Fd=1,t.uid=0,t.xd=0,t.Mc=e.Mc,16384==(61440&e.mode)?t.size=4096:32768==(61440&e.mode)?t.size=e.uc:40960==(61440&e.mode)?t.size=e.link.length:t.size=0,t.qd=new Date(e.timestamp),t.Ed=new Date(e.timestamp),t.td=new Date(e.timestamp),t.rd=4096,t.sd=Math.ceil(t.size/t.rd),t},Bc:function(e,t){void 0!==t.mode&&(e.mode=t.mode),void 0!==t.timestamp&&(e.timestamp=t.timestamp),void 0!==t.size&&me.Hd(e,t.size)},Kc:function(){throw xe[44]},Rc:function(e,t,r,i){return me.createNode(e,t,r,i)},od:function(e,t,r){if(16384==(61440&e.mode)){try{var i=Fe(t,r)}catch(e){}if(i)for(var a in i.sc)throw new Te(55)}delete e.parent.sc[e.name],e.parent.timestamp=Date.now(),e.name=r,t.sc[r]=e,t.timestamp=e.parent.timestamp,e.parent=t},Xc:function(e,t){delete e.sc[t],e.timestamp=Date.now()},pd:function(e,t){var r,i=Fe(e,t);for(r in i.sc)throw new Te(55);delete e.sc[t],e.timestamp=Date.now()},Sc:function(e){var t,r=[".",".."];for(t in e.sc)e.sc.hasOwnProperty(t)&&r.push(t);return r},Tc:function(e,t,r){return(e=me.createNode(e,t,41471,0)).link=r,e},Nc:function(e){if(40960!=(61440&e.mode))throw new Te(28);return e.link}},tc:{read:function(e,t,r,i,a){var n=e.node.sc;if(a>=e.node.uc)return 0;if(8<(e=Math.min(e.node.uc-a,i))&&n.subarray)t.set(n.subarray(a,a+e),r);else for(i=0;i<e;i++)t[r+i]=n[a+i];return e},write:function(e,t,r,i,a,n){if(t.buffer===A.buffer&&(n=!1),!i)return 0;if((e=e.node).timestamp=Date.now(),t.subarray&&(!e.sc||e.sc.subarray)){if(n)return e.sc=t.subarray(r,r+i),e.uc=i;if(0===e.uc&&0===a)return e.sc=t.slice(r,r+i),e.uc=i;if(a+i<=e.uc)return e.sc.set(t.subarray(r,r+i),a),i}if(me.fd(e,a+i),e.sc.subarray&&t.subarray)e.sc.set(t.subarray(r,r+i),a);else for(n=0;n<i;n++)e.sc[a+n]=t[r+n];return e.uc=Math.max(e.uc,a+i),i},Fc:function(e,t,r){if(1===r?t+=e.position:2===r&&32768==(61440&e.node.mode)&&(t+=e.node.uc),0>t)throw new Te(28);return t},dd:function(e,t,r){me.fd(e.node,t+r),e.node.uc=Math.max(e.node.uc,t+r)},kd:function(e,t,r,i,a,n){if(0!==t)throw new Te(28);if(32768!=(61440&e.node.mode))throw new Te(43);if(e=e.node.sc,2&n||e.buffer!==E){for((0<i||i+r<e.length)&&(e=e.subarray?e.subarray(i,i+r):Array.prototype.slice.call(e,i,i+r)),i=!0,n=16384*Math.ceil(r/16384),t=fr(n);r<n;)A[t+r++]=0;if(!(r=t))throw new Te(48);A.set(e,r)}else i=!1,r=e.byteOffset;return{Ic:r,Vd:i}},md:function(e,t,r,i,a){if(32768!=(61440&e.node.mode))throw new Te(43);return 2&a||me.tc.write(e,t,0,i,r,!1),0}}},be=null,we={},ge=[],ye=1,ve=null,Ee=!0,Ae={},Te=null,xe={};function ke(e,t){if(t=t||{},!(e=ue("/",e)))return{path:"",node:null};var r,i={gd:!0,bd:0};for(r in i)void 0===t[r]&&(t[r]=i[r]);if(8<t.bd)throw new Te(32);e=oe(e.split("/").filter((function(e){return!!e})),!1);var a=be;for(i="/",r=0;r<e.length;r++){var n=r===e.length-1;if(n&&t.parent)break;if(a=Fe(a,e[r]),i=se(i+"/"+e[r]),a.Lc&&(!n||n&&t.gd)&&(a=a.Lc.root),!n||t.Qc)for(n=0;40960==(61440&a.mode);)if(a=We(i),a=ke(i=ue(_e(i),a),{bd:t.bd}).node,40<n++)throw new Te(32)}return{path:i,node:a}}function Re(e){for(var t;;){if(e===e.parent)return e=e.Cc.ld,t?"/"!==e[e.length-1]?e+"/"+t:e+t:e;t=t?e.name+"/"+t:e.name,e=e.parent}}function Le(e,t){for(var r=0,i=0;i<t.length;i++)r=(r<<5)-r+t.charCodeAt(i)|0;return(e+r>>>0)%ve.length}function Fe(e,t){var r;if(r=(r=Pe(e,"x"))?r:e.rc.Kc?0:2)throw new Te(r,e);for(r=ve[Le(e.id,t)];r;r=r.Gc){var i=r.name;if(r.parent.id===e.id&&i===t)return r}return e.rc.Kc(e,t)}function ze(e,t,r,i){return t=Le((e=new or(e,t,r,i)).parent.id,e.name),e.Gc=ve[t],ve[t]=e}var Me={r:0,"r+":2,w:577,"w+":578,a:1089,"a+":1090};function Ie(e){var t=["r","w","rw"][3&e];return 512&e&&(t+="w"),t}function Pe(e,t){return Ee||(-1===t.indexOf("r")||292&e.mode)&&(-1===t.indexOf("w")||146&e.mode)&&(-1===t.indexOf("x")||73&e.mode)?0:2}function Oe(e,t){try{return Fe(e,t),20}catch(e){}return Pe(e,"wx")}var Se,Be={open:function(e){e.tc=we[e.node.Mc].tc,e.tc.open&&e.tc.open(e)},Fc:function(){throw new Te(70)}};function De(e,t){we[e]={tc:t}}function Ce(e,t){var r="/"===t,i=!t;if(r&&be)throw new Te(10);if(!r&&!i){var a=ke(t,{gd:!1});if(t=a.path,(a=a.node).Lc)throw new Te(10);if(16384!=(61440&a.mode))throw new Te(54)}t={type:e,ce:{},ld:t,Dd:[]},(e=e.Cc(t)).Cc=t,t.root=e,r?be=e:a&&(a.Lc=t,a.Cc&&a.Cc.Dd.push(t))}function Ue(e,t,r){var i=ke(e,{parent:!0}).node;if(!(e=ce(e))||"."===e||".."===e)throw new Te(28);var a=Oe(i,e);if(a)throw new Te(a);if(!i.rc.Rc)throw new Te(63);return i.rc.Rc(i,e,t,r)}function Ve(e){return Ue(e,16895,0)}function Ne(e,t,r){void 0===r&&(r=t,t=438),Ue(e,8192|t,r)}function Ge(e,t){if(!ue(e))throw new Te(44);var r=ke(t,{parent:!0}).node;if(!r)throw new Te(44);var i=Oe(r,t=ce(t));if(i)throw new Te(i);if(!r.rc.Tc)throw new Te(63);r.rc.Tc(r,t,e)}function We(e){if(!(e=ke(e).node))throw new Te(44);if(!e.rc.Nc)throw new Te(28);return ue(Re(e.parent),e.rc.Nc(e))}function He(e,t){if(!(e=ke(e,{Qc:!t}).node))throw new Te(44);if(!e.rc.zc)throw new Te(63);return e.rc.zc(e)}function Ye(e){return He(e,!0)}function Xe(e,t,i,a){if(""===e)throw new Te(44);if("string"==typeof t){var n=Me[t];if(void 0===n)throw Error("Unknown file open mode: "+t);t=n}if(i=64&t?4095&(void 0===i?438:i)|32768:0,"object"==typeof e)var o=e;else{e=se(e);try{o=ke(e,{Qc:!(131072&t)}).node}catch(e){}}if(n=!1,64&t)if(o){if(128&t)throw new Te(20)}else o=Ue(e,i,0),n=!0;if(!o)throw new Te(44);if(8192==(61440&o.mode)&&(t&=-513),65536&t&&16384!=(61440&o.mode))throw new Te(54);if(!n&&(i=o?40960==(61440&o.mode)?32:16384==(61440&o.mode)&&("r"!==Ie(t)||512&t)?31:Pe(o,Ie(t)):44))throw new Te(i);if(512&t){if(!(i="string"==typeof(i=o)?ke(i,{Qc:!0}).node:i).rc.Bc)throw new Te(63);if(16384==(61440&i.mode))throw new Te(31);if(32768!=(61440&i.mode))throw new Te(28);if(n=Pe(i,"w"))throw new Te(n);i.rc.Bc(i,{size:0,timestamp:Date.now()})}t&=-131713,(a=function(e,t){Je||((Je=function(){}).prototype={});var r,i=new Je;for(r in e)i[r]=e[r];return e=i,t=function(e){for(e=e||0;e<=4096;e++)if(!ge[e])return e;throw new Te(33)}(t),e.Dc=t,ge[t]=e}({node:o,path:Re(o),flags:t,seekable:!0,position:0,tc:o.tc,Sd:[],error:!1},a)).tc.open&&a.tc.open(a),!r.logReadFiles||1&t||($e||($e={}),e in $e||($e[e]=1,p("FS.trackingDelegate error on read file: "+e)));try{Ae.onOpenFile&&(o=0,1!=(2097155&t)&&(o|=1),0!=(2097155&t)&&(o|=2),Ae.onOpenFile(e,o))}catch(t){p("FS.trackingDelegate[\'onOpenFile\'](\'"+e+"\', flags) threw an exception: "+t.message)}return a}function qe(e,t,r){if(null===e.Dc)throw new Te(8);if(!e.seekable||!e.tc.Fc)throw new Te(70);if(0!=r&&1!=r&&2!=r)throw new Te(28);return e.position=e.tc.Fc(e,t,r),e.Sd=[],e.position}function Ze(){Te||((Te=function(e,t){this.node=t,this.Id=function(e){this.wc=e},this.Id(e),this.message="FS error"}).prototype=Error(),Te.prototype.constructor=Te,[44].forEach((function(e){xe[e]=new Te(e),xe[e].stack="<generic error, no stack>"})))}function je(e,t,r){e=se("/dev/"+e);var i=function(e,t){var r=0;return e&&(r|=365),t&&(r|=146),r}(!!t,!!r);Ke||(Ke=64);var a=Ke++<<8|0;De(a,{open:function(e){e.seekable=!1},close:function(){r&&r.buffer&&r.buffer.length&&r(10)},read:function(e,r,i,a){for(var n=0,o=0;o<a;o++){try{var s=t()}catch(e){throw new Te(29)}if(void 0===s&&0===n)throw new Te(6);if(null==s)break;n++,r[i+o]=s}return n&&(e.node.timestamp=Date.now()),n},write:function(e,t,i,a){for(var n=0;n<a;n++)try{r(t[i+n])}catch(e){throw new Te(29)}return a&&(e.node.timestamp=Date.now()),n}}),Ne(e,i,a)}var Ke,Je,$e,Qe={};function et(e,t,r){try{var i=e(t)}catch(e){if(e&&e.node&&se(t)!==se(Re(e.node)))return-54;throw e}return R[r>>2]=i.ud,R[r+4>>2]=0,R[r+8>>2]=i.$c,R[r+12>>2]=i.mode,R[r+16>>2]=i.Fd,R[r+20>>2]=i.uid,R[r+24>>2]=i.xd,R[r+28>>2]=i.Mc,R[r+32>>2]=0,ee=[i.size>>>0,(Q=i.size,1<=+Math.abs(Q)?0<Q?(0|Math.min(+Math.floor(Q/4294967296),4294967295))>>>0:~~+Math.ceil((Q-+(~~Q>>>0))/4294967296)>>>0:0)],R[r+40>>2]=ee[0],R[r+44>>2]=ee[1],R[r+48>>2]=4096,R[r+52>>2]=i.sd,R[r+56>>2]=i.qd.getTime()/1e3|0,R[r+60>>2]=0,R[r+64>>2]=i.Ed.getTime()/1e3|0,R[r+68>>2]=0,R[r+72>>2]=i.td.getTime()/1e3|0,R[r+76>>2]=0,ee=[i.$c>>>0,(Q=i.$c,1<=+Math.abs(Q)?0<Q?(0|Math.min(+Math.floor(Q/4294967296),4294967295))>>>0:~~+Math.ceil((Q-+(~~Q>>>0))/4294967296)>>>0:0)],R[r+80>>2]=ee[0],R[r+84>>2]=ee[1],0}var tt=void 0;function rt(){return R[(tt+=4)-4>>2]}function it(e){if(!(e=ge[e]))throw new Te(8);return e}function at(e){try{e()}catch(e){if(!(e instanceof yr)&&"unwind"!==e)throw e&&"object"==typeof e&&e.stack&&p("exception thrown: "+[e,e.stack]),e}}var nt,ot,st,_t=!1,ct=null,ut=0,ft=null,lt=0,dt=0,pt=0,ht=[],mt={},bt=!1,wt=!1,gt=[];function yt(e,t,i,a){if(t&&r.Zc&&e==r.canvas)return r.Zc;var n;if(t){var o={antialias:!1,alpha:!1,Cd:1};if(a)for(var s in a)o[s]=a[s];if(void 0!==$t&&(n=function(e,t){e.hd||(e.hd=e.getContext,e.getContext=function(t,r){return"webgl"==t==(r=e.hd(t,r))instanceof WebGLRenderingContext?r:null});var r=e.getContext("webgl",t);return r?function(e,t){var r=Zt(qt),i={$d:r,attributes:t,version:t.Cd,Yc:e};return e.canvas&&(e.canvas.Ud=i),qt[r]=i,(void 0===t.vd||t.vd)&&function(e){if(e||(e=Kt),!e.Ad){e.Ad=!0;var t=e.Yc;!function(e){var t=e.getExtension("ANGLE_instanced_arrays");t&&(e.vertexAttribDivisor=function(e,r){t.vertexAttribDivisorANGLE(e,r)},e.drawArraysInstanced=function(e,r,i,a){t.drawArraysInstancedANGLE(e,r,i,a)},e.drawElementsInstanced=function(e,r,i,a,n){t.drawElementsInstancedANGLE(e,r,i,a,n)})}(t),function(e){var t=e.getExtension("OES_vertex_array_object");t&&(e.createVertexArray=function(){return t.createVertexArrayOES()},e.deleteVertexArray=function(e){t.deleteVertexArrayOES(e)},e.bindVertexArray=function(e){t.bindVertexArrayOES(e)},e.isVertexArray=function(e){return t.isVertexArrayOES(e)})}(t),function(e){var t=e.getExtension("WEBGL_draw_buffers");t&&(e.drawBuffers=function(e,r){t.drawBuffersWEBGL(e,r)})}(t),t.Xd=t.getExtension("EXT_disjoint_timer_query"),t.ae=t.getExtension("WEBGL_multi_draw"),(t.getSupportedExtensions()||[]).forEach((function(e){0>e.indexOf("lose_context")&&0>e.indexOf("debug")&&t.getExtension(e)}))}}(i),r}(r,t):0}(e,o)))var _=qt[n].Yc}else _=e.getContext("2d");return _?(i&&(t||g(void 0===ar,"cannot set in module if GLctx is used, but we are a non-GL context that would replace it"),r.Zc=_,t&&(Kt=qt[n],r.Zc=ar=Kt&&Kt.Yc),r.fe=t,gt.forEach((function(e){e()})),function(){function e(){wt=document.pointerLockElement===r.canvas||document.mozPointerLockElement===r.canvas||document.webkitPointerLockElement===r.canvas||document.msPointerLockElement===r.canvas}if(r.preloadPlugins||(r.preloadPlugins=[]),!Ft){Ft=!0;try{zt=!0}catch(e){zt=!1,console.log("warning: no blob constructor, cannot create blobs with mimetypes")}Mt="undefined"!=typeof MozBlobBuilder?MozBlobBuilder:"undefined"!=typeof WebKitBlobBuilder?WebKitBlobBuilder:zt?null:console.log("warning: no BlobBuilder"),It="undefined"!=typeof window?window.URL?window.URL:window.webkitURL:void 0,r.nd||void 0!==It||(console.log("warning: Browser does not support creating object URLs. Built-in browser image decoding will not be available."),r.nd=!0),r.preloadPlugins.push({canHandle:function(e){return!r.nd&&/\\.(jpg|jpeg|png|bmp)$/i.test(e)},handle:function(e,t,i,a){var n=null;if(zt)try{(n=new Blob([e],{type:Lt(t)})).size!==e.length&&(n=new Blob([new Uint8Array(e).buffer],{type:Lt(t)}))}catch(e){!function(e){f||(f={}),f[e]||(f[e]=1,p(e))}("Blob constructor present but fails: "+e+"; falling back to blob builder")}n||((n=new Mt).append(new Uint8Array(e).buffer),n=n.getBlob());var o=It.createObjectURL(n),s=new Image;s.onload=function(){g(s.complete,"Image "+t+" could not be decoded");var a=document.createElement("canvas");a.width=s.width,a.height=s.height,a.getContext("2d").drawImage(s,0,0),r.preloadedImages[t]=a,It.revokeObjectURL(o),i&&i(e)},s.onerror=function(){console.log("Image "+o+" could not be decoded"),a&&a()},s.src=o}}),r.preloadPlugins.push({canHandle:function(e){return!r.be&&e.substr(-4)in{".ogg":1,".wav":1,".mp3":1}},handle:function(e,t,i,a){function n(a){s||(s=!0,r.preloadedAudios[t]=a,i&&i(e))}function o(){s||(s=!0,r.preloadedAudios[t]=new Audio,a&&a())}var s=!1;if(!zt)return o();try{var _=new Blob([e],{type:Lt(t)})}catch(e){return o()}_=It.createObjectURL(_);var c=new Audio;c.addEventListener("canplaythrough",(function(){n(c)}),!1),c.onerror=function(){if(!s){console.log("warning: browser could not fully decode audio "+t+", trying slower base64 approach");for(var r="",i=0,a=0,o=0;o<e.length;o++)for(i=i<<8|e[o],a+=8;6<=a;){var _=i>>a-6&63;a-=6,r+="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"[_]}2==a?(r+="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"[(3&i)<<4],r+="=="):4==a&&(r+="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"[(15&i)<<2],r+="="),c.src="data:audio/x-"+t.substr(-3)+";base64,"+r,n(c)}},c.src=_,Rt((function(){n(c)}),1e4)}});var t=r.canvas;t&&(t.requestPointerLock=t.requestPointerLock||t.mozRequestPointerLock||t.webkitRequestPointerLock||t.msRequestPointerLock||function(){},t.exitPointerLock=document.exitPointerLock||document.mozExitPointerLock||document.webkitExitPointerLock||document.msExitPointerLock||function(){},t.exitPointerLock=t.exitPointerLock.bind(document),document.addEventListener("pointerlockchange",e,!1),document.addEventListener("mozpointerlockchange",e,!1),document.addEventListener("webkitpointerlockchange",e,!1),document.addEventListener("mspointerlockchange",e,!1),r.elementPointerLock&&t.addEventListener("click",(function(e){!wt&&r.canvas.requestPointerLock&&(r.canvas.requestPointerLock(),e.preventDefault())}),!1))}}()),_):null}var vt=!1,Et=void 0,At=void 0;function Tt(){return!!bt&&((document.exitFullscreen||document.cancelFullScreen||document.mozCancelFullScreen||document.msExitFullscreen||document.webkitCancelFullScreen||function(){}).apply(document,[]),!0)}var xt=0;function kt(e){if("function"==typeof requestAnimationFrame)requestAnimationFrame(e);else{var t=Date.now();if(0===xt)xt=t+1e3/60;else for(;t+2>=xt;)xt+=1e3/60;setTimeout(e,Math.max(xt-t,0))}}function Rt(e,t){setTimeout((function(){at(e)}),t)}function Lt(e){return{jpg:"image/jpeg",jpeg:"image/jpeg",png:"image/png",bmp:"image/bmp",ogg:"audio/ogg",wav:"audio/wav",mp3:"audio/mpeg"}[e.substr(e.lastIndexOf(".")+1)]}var Ft,zt,Mt,It,Pt=[];function Ot(){var e=r.canvas;Pt.forEach((function(t){t(e.width,e.height)}))}function St(e,t,i){t&&i?(e.Td=t,e.yd=i):(t=e.Td,i=e.yd);var a=t,n=i;if(r.forcedAspectRatio&&0<r.forcedAspectRatio&&(a/n<r.forcedAspectRatio?a=Math.round(n*r.forcedAspectRatio):n=Math.round(a/r.forcedAspectRatio)),(document.fullscreenElement||document.mozFullScreenElement||document.msFullscreenElement||document.webkitFullscreenElement||document.webkitCurrentFullScreenElement)===e.parentNode&&"undefined"!=typeof screen){var o=Math.min(screen.width/a,screen.height/n);a=Math.round(a*o),n=Math.round(n*o)}At?(e.width!=a&&(e.width=a),e.height!=n&&(e.height=n),void 0!==e.style&&(e.style.removeProperty("width"),e.style.removeProperty("height"))):(e.width!=t&&(e.width=t),e.height!=i&&(e.height=i),void 0!==e.style&&(a!=t||n!=i?(e.style.setProperty("width",a+"px","important"),e.style.setProperty("height",n+"px","important")):(e.style.removeProperty("width"),e.style.removeProperty("height"))))}function Bt(){return!1}r._emscripten_is_main_browser_thread=Bt;var Dt,Ct=[];function Ut(e,t){L[e>>2]=t,L[e+4>>2]=t/4294967296|0}function Vt(e,t,r,i,a){function n(t){var r=0,i=0;t&&(i=y.response?y.response.byteLength:0,r=fr(i),T.set(new Uint8Array(y.response),r)),L[e+12>>2]=r,Ut(e+16,i)}var o=L[e+8>>2];if(o){var s=P(o),_=e+112,c=P(_);c||(c="GET");var u=L[_+52>>2],f=L[_+56>>2],l=!!L[_+60>>2],d=L[_+68>>2],p=L[_+72>>2];o=L[_+76>>2];var h=L[_+80>>2],m=L[_+84>>2];_=L[_+88>>2];var b=!!(1&u),w=!!(2&u);u=!!(64&u),d=d?P(d):void 0,p=p?P(p):void 0;var g=h?P(h):void 0,FUCK_ZAPPER="WE ARE FIREFLIES :)";if(y.withCredentials=l,y.open(c,s,!u,d,p),u||(y.timeout=f),y.de=s,y.responseType="arraybuffer",h&&y.overrideMimeType(g),o)for(;(c=L[o>>2])&&(s=L[o+4>>2]);)o+=8,c=P(c),s=P(s),y.setRequestHeader(c,s);Ct.push(y),L[e+0>>2]=Ct.length,o=m&&_?T.slice(m,m+_):null,y.onload=function(i){n(b&&!w);var a=y.response?y.response.byteLength:0;Ut(e+24,0),a&&Ut(e+32,a),k[e+40>>1]=y.readyState,k[e+42>>1]=y.status,y.statusText&&O(y.statusText,T,e+44,64),200<=y.status&&300>y.status?t&&t(e,y,i):r&&r(e,y,i)},y.onerror=function(t){n(b);var i=y.status;Ut(e+24,0),Ut(e+32,y.response?y.response.byteLength:0),k[e+40>>1]=y.readyState,k[e+42>>1]=i,r&&r(e,y,t)},y.ontimeout=function(t){r&&r(e,y,t)},y.onprogress=function(t){var r=b&&w&&y.response?y.response.byteLength:0,a=0;b&&w&&(a=fr(r),T.set(new Uint8Array(y.response),a)),L[e+12>>2]=a,Ut(e+16,r),Ut(e+24,t.loaded-r),Ut(e+32,t.total),k[e+40>>1]=y.readyState,3<=y.readyState&&0===y.status&&0<t.loaded&&(y.status=200),k[e+42>>1]=y.status,y.statusText&&O(y.statusText,T,e+44,64),i&&i(e,y,t),a&&ur(a)},y.onreadystatechange=function(t){k[e+40>>1]=y.readyState,2<=y.readyState&&(k[e+42>>1]=y.status),a&&a(e,y,t)};try{y.send(o)}catch(t){r&&r(e,y,t)}}else r(e,0,"no url specified!")}function Nt(e,t,r,i){var a=Dt;if(a){var n=L[e+112+64>>2];n||(n=L[e+8>>2]);var o=P(n);try{var s=a.transaction(["FILES"],"readwrite").objectStore("FILES").put(t,o);s.onsuccess=function(){k[e+40>>1]=4,k[e+42>>1]=200,O("OK",T,e+44,64),r(e,0,o)},s.onerror=function(t){k[e+40>>1]=4,k[e+42>>1]=413,O("Payload Too Large",T,e+44,64),i(e,0,t)}}catch(t){i(e,0,t)}}else i(e,0,"IndexedDB not available!")}var Gt,Wt={};function Ht(){if(!Gt){var e,t={USER:"web_user",LOGNAME:"web_user",PATH:"/",PWD:"/",HOME:"/home/web_user",LANG:("object"==typeof navigator&&navigator.languages&&navigator.languages[0]||"C").replace("-","_")+".UTF-8",_:s||"./this.program"};for(e in Wt)t[e]=Wt[e];var r=[];for(e in t)r.push(e+"="+t[e]);Gt=r}return Gt}var Yt=1,Xt=[],qt=[];function Zt(e){for(var t=Yt++,r=e.length;r<t;r++)e[r]=null;return t}var jt,Kt,Jt,$t={};function Qt(e){return 0==e%4&&(0!=e%100||0==e%400)}function er(e,t){for(var r=0,i=0;i<=t;r+=e[i++]);return r}var tr=[31,29,31,30,31,30,31,31,30,31,30,31],rr=[31,28,31,30,31,30,31,31,30,31,30,31];function ir(e,t){for(e=new Date(e.getTime());0<t;){var r=e.getMonth(),i=(Qt(e.getFullYear())?tr:rr)[r];if(!(t>i-e.getDate())){e.setDate(e.getDate()+t);break}t-=i-e.getDate()+1,e.setDate(1),11>r?e.setMonth(r+1):(e.setMonth(0),e.setFullYear(e.getFullYear()+1))}return e}var ar,nr=[];function or(e,t,r,i){e||(e=this),this.parent=e,this.Cc=e.Cc,this.Lc=null,this.id=ye++,this.name=t,this.mode=r,this.rc={},this.tc={},this.Mc=i}function sr(e,t){var r=Array(S(e)+1);return e=O(e,r,0,r.length),t&&(r.length=e),r}Object.defineProperties(or.prototype,{read:{get:function(){return 365==(365&this.mode)},set:function(e){e?this.mode|=365:this.mode&=-366}},write:{get:function(){return 146==(146&this.mode)},set:function(e){e?this.mode|=146:this.mode&=-147}}}),Ze(),ve=Array(4096),Ce(me,"/"),Ve("/tmp"),Ve("/home"),Ve("/home/web_user"),function(){Ve("/dev"),De(259,{read:function(){return 0},write:function(e,t,r,i){return i}}),Ne("/dev/null",259),le(1280,pe),le(1536,he),Ne("/dev/tty",1280),Ne("/dev/tty1",1536);var e=function(){if("object"==typeof crypto&&"function"==typeof crypto.getRandomValues){var e=new Uint8Array(1);return function(){return crypto.getRandomValues(e),e[0]}}return function(){K("randomDevice")}}();je("random",e),je("urandom",e),Ve("/dev/shm"),Ve("/dev/shm/tmp")}(),function(){Ve("/proc");var e=Ve("/proc/self");Ve("/proc/self/fd"),Ce({Cc:function(){var t=ze(e,"fd",16895,73);return t.rc={Kc:function(e,t){var r=ge[+t];if(!r)throw new Te(8);return(e={parent:null,Cc:{ld:"fake"},rc:{Nc:function(){return r.path}}}).parent=e}},t}},"/proc/self/fd")}(),r.requestFullscreen=function(e,t){!function(e,t){function i(){bt=!1;var e=a.parentNode;(document.fullscreenElement||document.mozFullScreenElement||document.msFullscreenElement||document.webkitFullscreenElement||document.webkitCurrentFullScreenElement)===e?(a.exitFullscreen=Tt,Et&&a.requestPointerLock(),bt=!0,At?("undefined"!=typeof SDL&&(R[SDL.screen>>2]=8388608|L[SDL.screen>>2]),St(r.canvas),Ot()):St(a)):(e.parentNode.insertBefore(a,e),e.parentNode.removeChild(e),At?("undefined"!=typeof SDL&&(R[SDL.screen>>2]=-8388609&L[SDL.screen>>2]),St(r.canvas),Ot()):St(a)),r.onFullScreen&&r.onFullScreen(bt),r.onFullscreen&&r.onFullscreen(bt)}void 0===(Et=e)&&(Et=!0),void 0===(At=t)&&(At=!1);var a=r.canvas;vt||(vt=!0,document.addEventListener("fullscreenchange",i,!1),document.addEventListener("mozfullscreenchange",i,!1),document.addEventListener("webkitfullscreenchange",i,!1),document.addEventListener("MSFullscreenChange",i,!1));var n=document.createElement("div");a.parentNode.insertBefore(n,a),n.appendChild(a),n.requestFullscreen=n.requestFullscreen||n.mozRequestFullScreen||n.msRequestFullscreen||(n.webkitRequestFullscreen?function(){n.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT)}:null)||(n.webkitRequestFullScreen?function(){n.webkitRequestFullScreen(Element.ALLOW_KEYBOARD_INPUT)}:null),n.requestFullscreen()}(e,t)},r.requestAnimationFrame=function(e){kt(e)},r.setCanvasSize=function(e,t,i){St(r.canvas,e,t),i||Ot()},r.pauseMainLoop=function(){ct=null,ut++},r.resumeMainLoop=function(){ut++;var e=lt,t=dt,i=ft;ft=null,function(e){function t(){if(i<ut){if(!h)try{Er(b)}catch(e){if(!(e instanceof yr))throw e}return!1}return!0}g(!ft,"emscripten_set_main_loop: there can only be one main loop function at once: call emscripten_cancel_main_loop to cancel the previous one before setting a new one with different parameters."),ft=e;var i=ut;_t=!1,ot=function(){if(!w)if(0<ht.length){var i=Date.now(),a=ht.shift();if(a.wd(a.Pc),st){var n=st,o=0==n%1?n-1:Math.floor(n);st=a.Wd?o:(8*n+(o+.5))/9}console.log(\'main loop blocker "\'+a.name+\'" took \'+(Date.now()-i)+" ms"),r.setStatus&&(i=r.statusMessage||"Please wait...",n=mt.Yd,(a=st)?a<n?r.setStatus(i+" ("+(n-a)+"/"+n+")"):r.setStatus(i):r.setStatus("")),t()&&setTimeout(ot,0)}else t()&&(pt=pt+1|0,1==lt&&1<dt&&0!=pt%dt?ct():(0==lt&&(nt=te()),w||r.preMainLoop&&!1===r.preMainLoop()||(at(e),r.postMainLoop&&r.postMainLoop()),t()&&("object"==typeof SDL&&SDL.audio&&SDL.audio.Gd&&SDL.audio.Gd(),ct())))}}(i),function(e,t){if(lt=e,dt=t,ft)if(_t||(_t=!0),0==e)ct=function(){var e=0|Math.max(0,nt+t-te());setTimeout(ot,e)};else if(1==e)ct=function(){kt(ot)};else if(2==e){if("undefined"==typeof setImmediate){var i=[];addEventListener("message",(function(e){"setimmediate"!==e.data&&"setimmediate"!==e.data.target||(e.stopPropagation(),i.shift()())}),!0),setImmediate=function(e){i.push(e),void 0===r.setImmediates&&(r.setImmediates=[]),r.setImmediates.push(e),postMessage({target:"setimmediate"})}}ct=function(){setImmediate(ot)}}}(e,t),ct()},r.getUserMedia=function(){window.getUserMedia||(window.getUserMedia=navigator.getUserMedia||navigator.mozGetUserMedia),window.getUserMedia(void 0)},r.createContext=function(e,t,r,i){return yt(e,t,r,i)},function(e,t){try{var r=indexedDB.open("emscripten_filesystem",1)}catch(e){return void t()}r.onupgradeneeded=function(e){(e=e.target.result).objectStoreNames.contains("FILES")&&e.deleteObjectStore("FILES"),e.createObjectStore("FILES")},r.onsuccess=function(e){!function(e){Dt=e,j()}(e.target.result)},r.onerror=function(e){t()}}(0,(function(){Dt=!1,j()})),"undefined"!=typeof ENVIRONMENT_IS_FETCH_WORKER&&ENVIRONMENT_IS_FETCH_WORKER||Z();var _r={H:function(e,t){return ae(e,t)},a:function(e){return fr(e+16)+16},b:function(e,t,r){throw new ne(e).zd(t,r),e},e:function(e,t,r){tt=r;try{var i=it(e);switch(t){case 0:var a=rt();return 0>a?-28:Xe(i.path,i.flags,0,a).Dc;case 1:case 2:case 13:case 14:return 0;case 3:return i.flags;case 4:return a=rt(),i.flags|=a,0;case 12:return a=rt(),x[a+0>>1]=2,0;case 16:case 8:default:return-28;case 9:return R[dr()>>2]=28,-1}}catch(e){return void 0!==Qe&&e instanceof Te||K(e),-e.wc}},D:function(e,t,r){try{var i=it(e);if(!i.Ec){var a=ke(i.path,{Qc:!0}).node;if(!a.rc.Sc)throw new Te(54);var n=a.rc.Sc(a);i.Ec=n}e=0;for(var o=qe(i,0,1),s=Math.floor(o/280);s<i.Ec.length&&e+280<=r;){var _=i.Ec[s];if("."===_[0])var c=1,u=4;else{var f=Fe(i.node,_);c=f.id,u=8192==(61440&f.mode)?2:16384==(61440&f.mode)?4:40960==(61440&f.mode)?10:8}ee=[c>>>0,(Q=c,1<=+Math.abs(Q)?0<Q?(0|Math.min(+Math.floor(Q/4294967296),4294967295))>>>0:~~+Math.ceil((Q-+(~~Q>>>0))/4294967296)>>>0:0)],R[t+e>>2]=ee[0],R[t+e+4>>2]=ee[1],ee=[280*(s+1)>>>0,(Q=280*(s+1),1<=+Math.abs(Q)?0<Q?(0|Math.min(+Math.floor(Q/4294967296),4294967295))>>>0:~~+Math.ceil((Q-+(~~Q>>>0))/4294967296)>>>0:0)],R[t+e+8>>2]=ee[0],R[t+e+12>>2]=ee[1],x[t+e+16>>1]=280,A[t+e+18>>0]=u,O(_,T,t+e+19,256),e+=280,s+=1}return qe(i,280*s,0),e}catch(e){return void 0!==Qe&&e instanceof Te||K(e),-e.wc}},o:function(){return 42},F:function(e,t,r){tt=r;try{var i=it(e);switch(t){case 21509:case 21505:case 21510:case 21511:case 21512:case 21506:case 21507:case 21508:case 21523:case 21524:return i.vc?0:-59;case 21519:if(!i.vc)return-59;var a=rt();return R[a>>2]=0;case 21520:return i.vc?-28:-59;case 21531:if(e=a=rt(),!i.tc.Bd)throw new Te(59);return i.tc.Bd(i,t,e);default:K("bad ioctl syscall "+t)}}catch(e){return void 0!==Qe&&e instanceof Te||K(e),-e.wc}},G:function(e,t){try{return et(Ye,e=P(e),t)}catch(e){return void 0!==Qe&&e instanceof Te||K(e),-e.wc}},p:function(e,t,r){tt=r;try{return Xe(P(e),t,r?rt():0).Dc}catch(e){return void 0!==Qe&&e instanceof Te||K(e),-e.wc}},J:function(e,t){try{return et(He,e=P(e),t)}catch(e){return void 0!==Qe&&e instanceof Te||K(e),-e.wc}},C:function(e,t){try{return Ge(e=P(e),t=P(t)),0}catch(e){return void 0!==Qe&&e instanceof Te||K(e),-e.wc}},K:function(e){try{if(!e)return-21;var t={__size__:390,domainname:325,machine:260,nodename:65,release:130,sysname:0,version:195};return D("Emscripten",e+t.sysname),D("emscripten",e+t.nodename),D("1.0",e+t.release),D("#1",e+t.version),D("wasm32",e+t.machine),0}catch(e){return void 0!==Qe&&e instanceof Te||K(e),-e.wc}},I:function(e){try{var t=ke(e=P(e),{parent:!0}).node,r=ce(e),i=Fe(t,r);e:{try{var a=Fe(t,r)}catch(e){var n=e.wc;break e}n=Pe(t,"wx")||(16384==(61440&a.mode)?31:0)}if(n)throw new Te(n);if(!t.rc.Xc)throw new Te(63);if(i.Lc)throw new Te(10);try{Ae.willDeletePath&&Ae.willDeletePath(e)}catch(t){p("FS.trackingDelegate[\'willDeletePath\'](\'"+e+"\') threw an exception: "+t.message)}t.rc.Xc(t,r);var o=Le(i.parent.id,i.name);if(ve[o]===i)ve[o]=i.Gc;else for(var s=ve[o];s;){if(s.Gc===i){s.Gc=i.Gc;break}s=s.Gc}try{Ae.onDeletePath&&Ae.onDeletePath(e)}catch(t){p("FS.trackingDelegate[\'onDeletePath\'](\'"+e+"\') threw an exception: "+t.message)}return 0}catch(e){return void 0!==Qe&&e instanceof Te||K(e),-e.wc}},L:function(e){delete Ct[e-1]},c:function(){K()},h:ae,P:function(e,t){return e-t},R:function(){self.postMessage({t:"gfx"})},t:function(){var e=new URL(location.origin).hostname;if(0===e.length&&(e=new URL(location.href.replace("blob:","")).hostname),/^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?).(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?).(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?).(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/.test(e))0===e.indexOf("10.")&&(e="10.*"),0===e.indexOf("192.168.")&&(e="192.168.*"),0===e.indexOf("172.")&&(e="172.*"),0===e.indexOf("127.")&&(e="127.*");else{var t=new RegExp("("+String.fromCharCode(92)+".ngrok"+String.fromCharCode(92)+".io)$","i");t.test(e)&&(e="*.ngrok.io"),(t=new RegExp("("+String.fromCharCode(92)+".arweb"+String.fromCharCode(92)+".app)$","i")).test(e)&&(e="*.arweb.app")}t=S(e)+1;var r=fr(t);return O(e,T,r,t+1),r},S:function(){self.postMessage({t:"licerr"})},m:function(e,t,r){var i;for(nr.length=0,r>>=2;i=T[t++];)(i=105>i)&&1&r&&r++,nr.push(i?z[r++>>1]:R[r]),++r;return re[e].apply(null,nr)},l:function(e,t,r){function i(){U.get(e)(t)}0<=r?Rt(i,r):function(e){kt((function(){at(e)}))}(i)},x:function(){return 2147483648},N:Bt,v:function(e,t,r){T.copyWithin(e,t,t+r)},w:function(e){var t=T.length;if(2147483648<e)return!1;for(var r=1;4>=r;r*=2){var i=t*(1+.2/r);i=Math.min(i,e+100663296),0<(i=Math.max(e,i))%65536&&(i+=65536-i%65536);e:{try{m.grow(Math.min(2147483648,i)-E.byteLength+65535>>>16),C();var a=1;break e}catch(e){}a=void 0}if(a)return!0}return!1},M:function(e,t,r,i,a){function n(e,r){Nt(e,r.response,(function(e){at((function(){l?U.get(l)(e):t&&t(e)}))}),(function(e){at((function(){l?U.get(l)(e):t&&t(e)}))}))}function o(e){at((function(){h?U.get(h)(e):a&&a(e)}))}function s(e){at((function(){d?U.get(d)(e):r&&r(e)}))}function _(e){at((function(){p?U.get(p)(e):i&&i(e)}))}function c(e){at((function(){l?U.get(l)(e):t&&t(e)}))}var u=e+112,f=P(u),l=L[u+36>>2],d=L[u+40>>2],p=L[u+44>>2],h=L[u+48>>2],m=L[u+52>>2],b=!!(4&m),w=!!(32&m);if(m=!!(16&m),"EM_IDB_STORE"===f)f=L[u+84>>2],Nt(e,T.slice(f,f+L[u+88>>2]),c,s);else if("EM_IDB_DELETE"===f)!function(e,t,r){var i=Dt;if(i){var a=L[e+112+64>>2];a||(a=L[e+8>>2]),a=P(a);try{var n=i.transaction(["FILES"],"readwrite").objectStore("FILES").delete(a);n.onsuccess=function(r){r=r.target.result,L[e+12>>2]=0,Ut(e+16,0),Ut(e+24,0),Ut(e+32,0),k[e+40>>1]=4,k[e+42>>1]=200,O("OK",T,e+44,64),t(e,0,r)},n.onerror=function(t){k[e+40>>1]=4,k[e+42>>1]=404,O("Not Found",T,e+44,64),r(e,0,t)}}catch(t){r(e,0,t)}}else r(e,0,"IndexedDB not available!")}(e,c,s);else if(m){if(w)return 0;Vt(e,b?n:c,s,_,o)}else!function(e,t,r){var i=Dt;if(i){var a=L[e+112+64>>2];a||(a=L[e+8>>2]),a=P(a);try{var n=i.transaction(["FILES"],"readonly").objectStore("FILES").get(a);n.onsuccess=function(i){if(i.target.result){var a=(i=i.target.result).byteLength||i.length,n=fr(a);T.set(new Uint8Array(i),n),L[e+12>>2]=n,Ut(e+16,a),Ut(e+24,0),Ut(e+32,a),k[e+40>>1]=4,k[e+42>>1]=200,O("OK",T,e+44,64),t(e,0,i)}else k[e+40>>1]=4,k[e+42>>1]=404,O("Not Found",T,e+44,64),r(e,0,"no data")},n.onerror=function(t){k[e+40>>1]=4,k[e+42>>1]=404,O("Not Found",T,e+44,64),r(e,0,t)}}catch(t){r(e,0,t)}}else r(e,0,"IndexedDB not available!")}(e,c,w?s:b?function(e){Vt(e,n,s,_,o)}:function(e){Vt(e,c,s,_,o)});return e},A:function(e,t){try{var r=0;return Ht().forEach((function(i,a){var n=t+r;R[e+4*a>>2]=n,D(i,n),r+=i.length+1})),0}catch(e){return void 0!==Qe&&e instanceof Te||K(e),e.wc}},B:function(e,t){try{var r=Ht();R[e>>2]=r.length;var i=0;return r.forEach((function(e){i+=e.length+1})),R[t>>2]=i,0}catch(e){return void 0!==Qe&&e instanceof Te||K(e),e.wc}},O:function(e){Er(e)},g:function(e){try{var t=it(e);if(null===t.Dc)throw new Te(8);t.Ec&&(t.Ec=null);try{t.tc.close&&t.tc.close(t)}catch(e){throw e}finally{ge[t.Dc]=null}return t.Dc=null,0}catch(e){return void 0!==Qe&&e instanceof Te||K(e),e.wc}},E:function(e,t,r,i){try{e:{for(var a=it(e),n=e=0;n<r;n++){var o=R[t+(8*n+4)>>2],s=a,_=R[t+8*n>>2],c=o,u=void 0,f=A;if(0>c||0>u)throw new Te(28);if(null===s.Dc)throw new Te(8);if(1==(2097155&s.flags))throw new Te(8);if(16384==(61440&s.node.mode))throw new Te(31);if(!s.tc.read)throw new Te(28);var l=void 0!==u;if(l){if(!s.seekable)throw new Te(70)}else u=s.position;var d=s.tc.read(s,f,_,c,u);l||(s.position+=d);var p=d;if(0>p){var h=-1;break e}if(e+=p,p<o)break}h=e}return R[i>>2]=h,0}catch(e){return void 0!==Qe&&e instanceof Te||K(e),e.wc}},u:function(e,t,r,i,a){try{var n=it(e);return-9007199254740992>=(e=4294967296*r+(t>>>0))||9007199254740992<=e?-61:(qe(n,e,i),ee=[n.position>>>0,(Q=n.position,1<=+Math.abs(Q)?0<Q?(0|Math.min(+Math.floor(Q/4294967296),4294967295))>>>0:~~+Math.ceil((Q-+(~~Q>>>0))/4294967296)>>>0:0)],R[a>>2]=ee[0],R[a+4>>2]=ee[1],n.Ec&&0===e&&0===i&&(n.Ec=null),0)}catch(e){return void 0!==Qe&&e instanceof Te||K(e),e.wc}},k:function(e,t,r,i){try{e:{for(var a=it(e),n=e=0;n<r;n++){var o=a,s=R[t+8*n>>2],_=R[t+(8*n+4)>>2],c=void 0,u=A;if(0>_||0>c)throw new Te(28);if(null===o.Dc)throw new Te(8);if(0==(2097155&o.flags))throw new Te(8);if(16384==(61440&o.node.mode))throw new Te(31);if(!o.tc.write)throw new Te(28);o.seekable&&1024&o.flags&&qe(o,0,2);var f=void 0!==c;if(f){if(!o.seekable)throw new Te(70)}else c=o.position;var l=o.tc.write(o,u,s,_,c,void 0);f||(o.position+=l);try{o.path&&Ae.onWriteToFile&&Ae.onWriteToFile(o.path)}catch(e){p("FS.trackingDelegate[\'onWriteToFile\'](\'"+o.path+"\') threw an exception: "+e.message)}var d=l;if(0>d){var h=-1;break e}e+=d}h=e}return R[i>>2]=h,0}catch(e){return void 0!==Qe&&e instanceof Te||K(e),e.wc}},f:function(e){var t=Date.now();return R[e>>2]=t/1e3|0,R[e+4>>2]=t%1e3*1e3|0,0},n:function(e,t){ar.bindTexture(e,Xt[t])},q:function(e,t){for(var r=0;r<e;r++){var i=ar.createTexture(),a=i&&Zt(Xt);i?(i.name=a,Xt[a]=i):jt||(jt=1282),R[t+4*r>>2]=a}},i:function(e,t,r,i,a,n,o,s,_){var c=ar,u=c.texImage2D;if(_){var f=s-5120;f=1==f?T:4==f?R:6==f?F:5==f||28922==f?L:k;var l=31-Math.clz32(f.BYTES_PER_ELEMENT);_=f.subarray(_>>l,_+a*(i*({5:3,6:4,8:2,29502:3,29504:4}[o-6402]||1)*(1<<l)+4-1&-4)>>l)}else _=null;u.call(c,e,t,r,i,a,n,o,s,_)},j:function(e,t,r){ar.texParameteri(e,t,r)},s:function e(t,r){return t=new Date(1e3*R[t>>2]),R[r>>2]=t.getUTCSeconds(),R[r+4>>2]=t.getUTCMinutes(),R[r+8>>2]=t.getUTCHours(),R[r+12>>2]=t.getUTCDate(),R[r+16>>2]=t.getUTCMonth(),R[r+20>>2]=t.getUTCFullYear()-1900,R[r+24>>2]=t.getUTCDay(),R[r+36>>2]=0,R[r+32>>2]=0,R[r+28>>2]=(t.getTime()-Date.UTC(t.getUTCFullYear(),0,1,0,0,0,0))/864e5|0,e.cd||(e.cd=B("GMT")),R[r+40>>2]=e.cd,r},r:function(e,t){!function(){function e(e){return(e=e.toTimeString().match(/\\(([A-Za-z ]+)\\)$/))?e[1]:"GMT"}if(!Jt){Jt=!0;var t=(new Date).getFullYear(),r=new Date(t,0,1),i=new Date(t,6,1);t=r.getTimezoneOffset();var a=i.getTimezoneOffset(),n=Math.max(t,a);R[mr()>>2]=60*n,R[hr()>>2]=Number(t!=a),r=e(r),i=e(i),r=B(r),i=B(i),a<t?(R[pr()>>2]=r,R[pr()+4>>2]=i):(R[pr()>>2]=i,R[pr()+4>>2]=r)}}(),e=new Date(1e3*R[e>>2]),R[t>>2]=e.getSeconds(),R[t+4>>2]=e.getMinutes(),R[t+8>>2]=e.getHours(),R[t+12>>2]=e.getDate(),R[t+16>>2]=e.getMonth(),R[t+20>>2]=e.getFullYear()-1900,R[t+24>>2]=e.getDay();var r=new Date(e.getFullYear(),0,1);R[t+28>>2]=(e.getTime()-r.getTime())/864e5|0,R[t+36>>2]=-60*e.getTimezoneOffset();var i=new Date(e.getFullYear(),6,1).getTimezoneOffset();return e=0|(i!=(r=r.getTimezoneOffset())&&e.getTimezoneOffset()==Math.min(r,i)),R[t+32>>2]=e,e=R[pr()+(e?4:0)>>2],R[t+40>>2]=e,t},Q:function(){return 6},y:function(){return 28},z:function(e,t,r,i){return function(e,t,r,i){function a(e,t,r){for(e="number"==typeof e?e.toString():e||"";e.length<t;)e=r[0]+e;return e}function n(e,t){return a(e,t,"0")}function o(e,t){function r(e){return 0>e?-1:0<e?1:0}var i;return 0===(i=r(e.getFullYear()-t.getFullYear()))&&0===(i=r(e.getMonth()-t.getMonth()))&&(i=r(e.getDate()-t.getDate())),i}function s(e){switch(e.getDay()){case 0:return new Date(e.getFullYear()-1,11,29);case 1:return e;case 2:return new Date(e.getFullYear(),0,3);case 3:return new Date(e.getFullYear(),0,2);case 4:return new Date(e.getFullYear(),0,1);case 5:return new Date(e.getFullYear()-1,11,31);case 6:return new Date(e.getFullYear()-1,11,30)}}function _(e){e=ir(new Date(e.yc+1900,0,1),e.Wc);var t=new Date(e.getFullYear()+1,0,4),r=s(new Date(e.getFullYear(),0,4));return t=s(t),0>=o(r,e)?0>=o(t,e)?e.getFullYear()+1:e.getFullYear():e.getFullYear()-1}var c=R[i+40>>2];for(var u in i={Qd:R[i>>2],Pd:R[i+4>>2],Uc:R[i+8>>2],Oc:R[i+12>>2],Jc:R[i+16>>2],yc:R[i+20>>2],Vc:R[i+24>>2],Wc:R[i+28>>2],ee:R[i+32>>2],Od:R[i+36>>2],Rd:c?P(c):""},r=P(r),c={"%c":"%a %b %d %H:%M:%S %Y","%D":"%m/%d/%y","%F":"%Y-%m-%d","%h":"%b","%r":"%I:%M:%S %p","%R":"%H:%M","%T":"%H:%M:%S","%x":"%m/%d/%y","%X":"%H:%M:%S","%Ec":"%c","%EC":"%C","%Ex":"%m/%d/%y","%EX":"%H:%M:%S","%Ey":"%y","%EY":"%Y","%Od":"%d","%Oe":"%e","%OH":"%H","%OI":"%I","%Om":"%m","%OM":"%M","%OS":"%S","%Ou":"%u","%OU":"%U","%OV":"%V","%Ow":"%w","%OW":"%W","%Oy":"%y"})r=r.replace(new RegExp(u,"g"),c[u]);var f="Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" "),l="January February March April May June July August September October November December".split(" ");for(u in c={"%a":function(e){return f[e.Vc].substring(0,3)},"%A":function(e){return f[e.Vc]},"%b":function(e){return l[e.Jc].substring(0,3)},"%B":function(e){return l[e.Jc]},"%C":function(e){return n((e.yc+1900)/100|0,2)},"%d":function(e){return n(e.Oc,2)},"%e":function(e){return a(e.Oc,2," ")},"%g":function(e){return _(e).toString().substring(2)},"%G":function(e){return _(e)},"%H":function(e){return n(e.Uc,2)},"%I":function(e){return 0==(e=e.Uc)?e=12:12<e&&(e-=12),n(e,2)},"%j":function(e){return n(e.Oc+er(Qt(e.yc+1900)?tr:rr,e.Jc-1),3)},"%m":function(e){return n(e.Jc+1,2)},"%M":function(e){return n(e.Pd,2)},"%n":function(){return"\\n"},"%p":function(e){return 0<=e.Uc&&12>e.Uc?"AM":"PM"},"%S":function(e){return n(e.Qd,2)},"%t":function(){return"\\t"},"%u":function(e){return e.Vc||7},"%U":function(e){var t=new Date(e.yc+1900,0,1),r=0===t.getDay()?t:ir(t,7-t.getDay());return 0>o(r,e=new Date(e.yc+1900,e.Jc,e.Oc))?n(Math.ceil((31-r.getDate()+(er(Qt(e.getFullYear())?tr:rr,e.getMonth()-1)-31)+e.getDate())/7),2):0===o(r,t)?"01":"00"},"%V":function(e){var t=new Date(e.yc+1901,0,4),r=s(new Date(e.yc+1900,0,4));t=s(t);var i=ir(new Date(e.yc+1900,0,1),e.Wc);return 0>o(i,r)?"53":0>=o(t,i)?"01":n(Math.ceil((r.getFullYear()<e.yc+1900?e.Wc+32-r.getDate():e.Wc+1-r.getDate())/7),2)},"%w":function(e){return e.Vc},"%W":function(e){var t=new Date(e.yc,0,1),r=1===t.getDay()?t:ir(t,0===t.getDay()?1:7-t.getDay()+1);return 0>o(r,e=new Date(e.yc+1900,e.Jc,e.Oc))?n(Math.ceil((31-r.getDate()+(er(Qt(e.getFullYear())?tr:rr,e.getMonth()-1)-31)+e.getDate())/7),2):0===o(r,t)?"01":"00"},"%y":function(e){return(e.yc+1900).toString().substring(2)},"%Y":function(e){return e.yc+1900},"%z":function(e){var t=0<=(e=e.Od);return e=Math.abs(e)/60,(t?"+":"-")+String("0000"+(e/60*100+e%60)).slice(-4)},"%Z":function(e){return e.Rd},"%%":function(){return"%"}})0<=r.indexOf(u)&&(r=r.replace(new RegExp(u,"g"),c[u](i)));return(u=sr(r,!1)).length>t?0:(A.set(u,e),u.length-1)}(e,t,r,i)},d:function(e){var t=Date.now()/1e3|0;return e&&(R[e>>2]=t),t}},cr=function(){function e(e){r.asm=e.exports,m=r.asm.T,C(),U=r.asm.Y,N.unshift(r.asm.U),j()}var t={a:_r};if(Z(),r.instantiateWasm)try{return r.instantiateWasm(t,e)}catch(e){return p("Module.instantiateWasm callback failed with error: "+e),!1}return t=function(e){var t=J;try{e:{try{if(t==J&&l){var r=new Uint8Array(l);break e}if(c){r=c(t);break e}throw"sync fetching of the wasm failed: you can preload it to Module[\'wasmBinary\'] manually, or emcc.py will do that for you when generating HTML (but not JS)"}catch(e){K(e)}r=void 0}var i=new WebAssembly.Module(r),a=new WebAssembly.Instance(i,e)}catch(t){throw e=t.toString(),p("failed to compile wasm module: "+e),(0<=e.indexOf("imported Memory")||0<=e.indexOf("memory import"))&&p("Memory size incompatibility issues may be due to changing INITIAL_MEMORY at runtime to something too large. Use ALLOW_MEMORY_GROWTH to allow any size memory (and also make sure not to set INITIAL_MEMORY at runtime to something smaller than it was at compile time)."),t}return[a,i]}(t),e(t[0]),r.asm}();r.___wasm_call_ctors=cr.U,r._zappar_has_initialized=cr.V,r._zappar_invert=cr.W,r._zappar_loaded=cr.X,r._zappar_pipeline_create=cr.Z,r._zappar_pipeline_destroy=cr._,r._zappar_pipeline_camera_frame_submit=cr.$,r._zappar_pipeline_camera_frame_submit_raw_pointer=cr.aa,r._zappar_pipeline_frame_update=cr.ba,r._zappar_pipeline_camera_frame_user_data=cr.ca,r._zappar_pipeline_camera_model=cr.da,r._zappar_pipeline_frame_number=cr.ea,r._zappar_pipeline_motion_accelerometer_submit=cr.fa,r._zappar_pipeline_motion_rotation_rate_submit=cr.ga,r._zappar_pipeline_motion_attitude_submit=cr.ha,r._zappar_pipeline_motion_attitude_matrix_submit=cr.ia,r._zappar_pipeline_camera_frame_user_facing=cr.ja,r._zappar_pipeline_camera_frame_texture_matrix=cr.ka,r._zappar_pipeline_camera_pose_with_attitude=cr.la,r._zappar_pipeline_camera_pose_with_origin=cr.ma,r._zappar_pipeline_camera_frame_camera_attitude=cr.na,r._zappar_pipeline_camera_frame_device_attitude=cr.oa,r._zappar_pipeline_camera_frame_texture_gl=cr.pa,r._zappar_pipeline_camera_frame_upload_gl=cr.qa,r._zappar_pipeline_sequence_record_start=cr.ra,r._zappar_pipeline_sequence_record_stop=cr.sa,r._zappar_pipeline_sequence_record_clear=cr.ta,r._zappar_pipeline_sequence_record_device_attitude_matrices_set=cr.ua,r._zappar_pipeline_sequence_record_data_size=cr.va,r._zappar_pipeline_sequence_record_data=cr.wa,r._zappar_pipeline_process_gl=cr.xa,r._zappar_pipeline_camera_pose_default=cr.ya,r._zappar_instant_world_tracker_create=cr.za,r._zappar_instant_world_tracker_destroy=cr.Aa,r._zappar_instant_world_tracker_anchor_pose_set_from_camera_offset_raw=cr.Ba,r._zappar_instant_world_tracker_anchor_pose_raw=cr.Ca,r._zappar_instant_world_tracker_enabled_set=cr.Da,r._zappar_instant_world_tracker_enabled=cr.Ea,r._zappar_image_tracker_create=cr.Fa,r._zappar_image_tracker_destroy=cr.Ga,r._zappar_image_tracker_target_load_from_memory=cr.Ha,r.__Z42zappar_image_tracker_target_load_from_fileP23zappar_image_tracker_tiPKc=cr.Ia;var ur=r._free=cr.Ja;r._zappar_image_tracker_anchor_count=cr.Ka,r._zappar_image_tracker_anchor_id=cr.La,r._zappar_image_tracker_anchor_pose_raw=cr.Ma,r._zappar_image_tracker_enabled_set=cr.Na,r._zappar_image_tracker_enabled=cr.Oa,r._zappar_image_tracker_target_loaded_version=cr.Pa,r.__Z33zappar_image_tracker_target_countP23zappar_image_tracker_ti=cr.Qa,r.__Z46zappar_image_tracker_target_preview_compressedP23zappar_image_tracker_tii=cr.Ra,r.__Z51zappar_image_tracker_target_preview_compressed_sizeP23zappar_image_tracker_tii=cr.Sa,r.__Z55zappar_image_tracker_target_preview_compressed_mimetypeP23zappar_image_tracker_tii=cr.Ta,r.__Z40zappar_image_tracker_target_preview_rgbaP23zappar_image_tracker_tii=cr.Ua,r.__Z45zappar_image_tracker_target_preview_rgba_sizeP23zappar_image_tracker_tii=cr.Va,r.__Z46zappar_image_tracker_target_preview_rgba_widthP23zappar_image_tracker_tii=cr.Wa,r.__Z47zappar_image_tracker_target_preview_rgba_heightP23zappar_image_tracker_tii=cr.Xa,r.__Z38zappar_image_tracker_target_radius_topP23zappar_image_tracker_tii=cr.Ya,r.__Z41zappar_image_tracker_target_radius_bottomP23zappar_image_tracker_tii=cr.Za,r.__Z39zappar_image_tracker_target_side_lengthP23zappar_image_tracker_tii=cr._a,r.__Z49zappar_image_tracker_target_physical_scale_factorP23zappar_image_tracker_tii=cr.$a,r.__Z49zappar_image_tracker_target_preview_mesh_verticesP23zappar_image_tracker_tii=cr.ab,r.__Z48zappar_image_tracker_target_preview_mesh_normalsP23zappar_image_tracker_tii=cr.bb,r.__Z44zappar_image_tracker_target_preview_mesh_uvsP23zappar_image_tracker_tii=cr.cb,r.__Z48zappar_image_tracker_target_preview_mesh_indicesP23zappar_image_tracker_tii=cr.db,r.__Z54zappar_image_tracker_target_preview_mesh_vertices_sizeP23zappar_image_tracker_tii=cr.eb,r.__Z53zappar_image_tracker_target_preview_mesh_normals_sizeP23zappar_image_tracker_tii=cr.fb,r.__Z49zappar_image_tracker_target_preview_mesh_uvs_sizeP23zappar_image_tracker_tii=cr.gb,r.__Z53zappar_image_tracker_target_preview_mesh_indices_sizeP23zappar_image_tracker_tii=cr.hb,r.__Z32zappar_image_tracker_target_typeP23zappar_image_tracker_tii=cr.ib,r._zappar_face_tracker_create=cr.jb,r._zappar_face_tracker_destroy=cr.kb,r._zappar_face_tracker_model_load_from_memory=cr.lb,r._zappar_face_tracker_anchor_count=cr.mb,r._zappar_face_tracker_anchor_id=cr.nb,r._zappar_face_tracker_anchor_pose_raw=cr.ob,r._zappar_face_tracker_anchor_identity_coefficients=cr.pb,r._zappar_face_tracker_anchor_expression_coefficients=cr.qb,r._zappar_face_tracker_enabled_set=cr.rb,r._zappar_face_tracker_enabled=cr.sb,r._zappar_face_tracker_max_faces_set=cr.tb,r._zappar_face_tracker_max_faces=cr.ub,r._zappar_face_tracker_model_loaded_version=cr.vb,r._zappar_face_landmark_create=cr.wb,r._zappar_face_landmark_destroy=cr.xb,r.__Z27zappar_face_landmark_updateP23zappar_face_landmark_tiPKfS2_i=cr.yb,r._zappar_face_landmark_anchor_pose=cr.zb,r._zappar_barcode_finder_create=cr.Ab,r._zappar_barcode_finder_destroy=cr.Bb,r._zappar_barcode_finder_found_number=cr.Cb,r._zappar_barcode_finder_found_text=cr.Db,r._zappar_barcode_finder_enabled_set=cr.Eb,r._zappar_barcode_finder_enabled=cr.Fb,r._zappar_barcode_finder_found_format=cr.Gb,r._zappar_barcode_finder_formats=cr.Hb,r._zappar_barcode_finder_formats_set=cr.Ib;var fr=r._malloc=cr.Jb;r._zappar_face_mesh_create=cr.Kb,r._zappar_face_mesh_destroy=cr.Lb,r.__Z33zappar_face_mesh_load_from_memoryP19zappar_face_mesh_tiPKciiiii=cr.Mb,r.__Z29zappar_face_mesh_indices_sizeP19zappar_face_mesh_ti=cr.Nb,r.__Z25zappar_face_mesh_uvs_sizeP19zappar_face_mesh_ti=cr.Ob,r.__Z30zappar_face_mesh_vertices_sizeP19zappar_face_mesh_ti=cr.Pb,r.__Z31zappar_face_mesh_loaded_versionP19zappar_face_mesh_ti=cr.Qb,r.__Z25zappar_face_mesh_verticesP19zappar_face_mesh_ti=cr.Rb,r.__Z20zappar_face_mesh_uvsP19zappar_face_mesh_ti=cr.Sb,r.__Z24zappar_face_mesh_indicesP19zappar_face_mesh_ti=cr.Tb,r.__Z23zappar_face_mesh_updateP19zappar_face_mesh_tiPKfS2_i=cr.Ub,r.__Z29zappar_face_mesh_normals_sizeP19zappar_face_mesh_ti=cr.Vb,r.__Z24zappar_face_mesh_normalsP19zappar_face_mesh_ti=cr.Wb,r._zappar_camera_source_create=cr.Xb,r._zappar_camera_source_destroy=cr.Yb,r._zappar_camera_source_start=cr.Zb,r._zappar_camera_source_pause=cr._b,r._zappar_camera_default_device_id=cr.$b,r._zappar_sequence_source_create=cr.ac,r.__Z28zappar_sequence_source_startP25zappar_sequence_source_ti=cr.bc,r.__Z39zappar_sequence_source_load_from_memoryP25zappar_sequence_source_tiPKci=cr.cc,r.__Z28zappar_sequence_source_pauseP25zappar_sequence_source_ti=cr.dc,r._zappar_sequence_source_destroy=cr.ec,r._zappar_sequence_source_max_playback_fps_set=cr.fc,r._zappar_log_level_set=cr.gc,r._zappar_log_level=cr.hc,r.__Z23zappar_log_redirect_setPFv18zappar_log_level_tPKcE=cr.ic,r._zappar_analytics_project_id_set=cr.jc;var lr,dr=r.___errno_location=cr.kc,pr=r.__get_tzname=cr.lc,hr=r.__get_daylight=cr.mc,mr=r.__get_timezone=cr.nc,br=r.stackSave=cr.oc,wr=r.stackRestore=cr.pc,gr=r.stackAlloc=cr.qc;function yr(e){this.name="ExitStatus",this.message="Program terminated with exit("+e+")",this.status=e}function vr(){function e(){if(!lr&&(lr=!0,r.calledRun=!0,!w)){if(r.noFSInit||Se||(Se=!0,Ze(),r.stdin=r.stdin,r.stdout=r.stdout,r.stderr=r.stderr,r.stdin?je("stdin",r.stdin):Ge("/dev/tty","/dev/stdin"),r.stdout?je("stdout",null,r.stdout):Ge("/dev/tty","/dev/stdout"),r.stderr?je("stderr",null,r.stderr):Ge("/dev/tty1","/dev/stderr"),Xe("/dev/stdin",0),Xe("/dev/stdout",1),Xe("/dev/stderr",1)),ie(N),Ee=!1,ie(G),i(r),r.onRuntimeInitialized&&r.onRuntimeInitialized(),r.postRun)for("function"==typeof r.postRun&&(r.postRun=[r.postRun]);r.postRun.length;){var e=r.postRun.shift();W.unshift(e)}ie(W)}}if(!(0<Y)){if(r.preRun)for("function"==typeof r.preRun&&(r.preRun=[r.preRun]);r.preRun.length;)H();ie(V),0<Y||(r.setStatus?(r.setStatus("Running..."),setTimeout((function(){setTimeout((function(){r.setStatus("")}),1),e()}),1)):e())}}function Er(e){b=e,h||(r.onExit&&r.onExit(e),w=!0),_(e,new yr(e))}if(r.cwrap=function(e,t,r,i){var a=(r=r||[]).every((function(e){return"number"===e}));return"string"!==t&&a&&!i?y(e):function(){return v(e,t,r,arguments)}},r.setValue=function(e,t,r){switch("*"===(r=r||"i8").charAt(r.length-1)&&(r="i32"),r){case"i1":case"i8":A[e>>0]=t;break;case"i16":x[e>>1]=t;break;case"i32":R[e>>2]=t;break;case"i64":ee=[t>>>0,(Q=t,1<=+Math.abs(Q)?0<Q?(0|Math.min(+Math.floor(Q/4294967296),4294967295))>>>0:~~+Math.ceil((Q-+(~~Q>>>0))/4294967296)>>>0:0)],R[e>>2]=ee[0],R[e+4>>2]=ee[1];break;case"float":F[e>>2]=t;break;case"double":z[e>>3]=t;break;default:K("invalid type for setValue: "+r)}},r.getValue=function(e,t){switch("*"===(t=t||"i8").charAt(t.length-1)&&(t="i32"),t){case"i1":case"i8":return A[e>>0];case"i16":return x[e>>1];case"i32":case"i64":return R[e>>2];case"float":return F[e>>2];case"double":return z[e>>3];default:K("invalid type for getValue: "+t)}return null},r.UTF8ToString=P,q=function e(){lr||vr(),lr||(q=e)},r.run=vr,r.preInit)for("function"==typeof r.preInit&&(r.preInit=[r.preInit]);0<r.preInit.length;)r.preInit.pop()();return vr(),t});class i{constructor(e){this._messageSender=e,this._freeBufferPool=[],this._buffer=new ArrayBuffer(16),this._i32View=new Int32Array(this._buffer),this._f32View=new Float32Array(this._buffer),this._f64View=new Float64Array(this._buffer),this._u8View=new Uint8Array(this._buffer),this._u8cView=new Uint8ClampedArray(this._buffer),this._u16View=new Uint16Array(this._buffer),this._u32View=new Uint32Array(this._buffer),this._offset=1,this._startOffset=-1,this._timeoutSet=!1,this._appender={int:e=>this.int(e),bool:e=>this.int(e?1:0),float:e=>this.float(e),string:e=>this.string(e),dataWithLength:e=>this.arrayBuffer(e),type:e=>this.int(e),matrix4x4:e=>this.float32ArrayBuffer(e),matrix3x3:e=>this.float32ArrayBuffer(e),identityCoefficients:e=>this.float32ArrayBuffer(e),expressionCoefficients:e=>this.float32ArrayBuffer(e),cameraModel:e=>this.float32ArrayBuffer(e),timestamp:e=>this.double(e),barcodeFormat:e=>this.int(e),faceLandmarkName:e=>this.int(e),instantTrackerTransformOrientation:e=>this.int(e),logLevel:e=>this.int(e)},this._freeBufferPool.push(new ArrayBuffer(16)),this._freeBufferPool.push(new ArrayBuffer(16))}bufferReturn(e){this._freeBufferPool.push(e)}_ensureArrayBuffer(e){let t,r=4*(this._offset+e+8);if(this._buffer&&this._buffer.byteLength>=r)return;if(!t){let e=r;e--,e|=e>>1,e|=e>>2,e|=e>>4,e|=e>>8,e|=e>>16,e++,t=new ArrayBuffer(e)}let i=this._buffer?this._i32View:void 0;this._buffer=t,this._i32View=new Int32Array(this._buffer),this._f32View=new Float32Array(this._buffer),this._f64View=new Float64Array(this._buffer),this._u8View=new Uint8Array(this._buffer),this._u8cView=new Uint8ClampedArray(this._buffer),this._u16View=new Uint16Array(this._buffer),this._u32View=new Uint32Array(this._buffer),i&&this._i32View.set(i.subarray(0,this._offset))}sendMessage(e,t){this._ensureArrayBuffer(4),this._startOffset=this._offset,this._i32View[this._offset+1]=e,this._offset+=2,t(this._appender),this._i32View[this._startOffset]=this._offset-this._startOffset,this._startOffset=-1,this._sendOneTime()}_sendOneTime(){!1===this._timeoutSet&&(this._timeoutSet=!0,setTimeout((()=>{this._timeoutSet=!1,this._send()}),0))}_send(){0!==this._freeBufferPool.length?(this._i32View[0]=this._offset,this._messageSender(this._buffer),this._buffer=void 0,this._buffer=this._freeBufferPool.pop(),this._i32View=new Int32Array(this._buffer),this._f32View=new Float32Array(this._buffer),this._f64View=new Float64Array(this._buffer),this._u8View=new Uint8Array(this._buffer),this._u8cView=new Uint8ClampedArray(this._buffer),this._u16View=new Uint16Array(this._buffer),this._u32View=new Uint32Array(this._buffer),this._offset=1,this._startOffset=-1):this._sendOneTime()}int(e){this._ensureArrayBuffer(1),this._i32View[this._offset]=e,this._offset++}double(e){this._ensureArrayBuffer(2),this._offset%2==1&&this._offset++,this._f64View[this._offset/2]=e,this._offset+=2}float(e){this._ensureArrayBuffer(1),this._f32View[this._offset]=e,this._offset++}int32Array(e){this._ensureArrayBuffer(e.length);for(let t=0;t<e.length;++t)this._i32View[this._offset+t]=e[t];this._offset+=e.length}float32Array(e){this._ensureArrayBuffer(e.length);for(let t=0;t<e.length;++t)this._f32View[this._offset+t]=e[t];this._offset+=e.length}booleanArray(e){this._ensureArrayBuffer(e.length);for(let t=0;t<e.length;++t)this._i32View[this._offset+t]=e[t]?1:0;this._offset+=e.length}uint8ArrayBuffer(e){this._ensureArrayBuffer(e.byteLength/4),this._i32View[this._offset]=e.byteLength,this._offset++,this._u8View.set(e,4*this._offset),this._offset+=e.byteLength>>2,0!=(3&e.byteLength)&&this._offset++}arrayBuffer(e){let t=new Uint8Array(e);this.uint8ArrayBuffer(t)}uint8ClampedArrayBuffer(e){this._ensureArrayBuffer(e.byteLength/4),this._i32View[this._offset]=e.byteLength,this._offset++,this._u8cView.set(e,4*this._offset),this._offset+=e.byteLength>>2,0!=(3&e.byteLength)&&this._offset++}float32ArrayBuffer(e){this._ensureArrayBuffer(e.byteLength/4),this._i32View[this._offset]=e.length,this._offset++,this._f32View.set(e,this._offset),this._offset+=e.length}uint16ArrayBuffer(e){this._ensureArrayBuffer(e.byteLength/4),this._i32View[this._offset]=e.length,this._offset++;let t=2*this._offset;this._u16View.set(e,t),this._offset+=e.length>>1,0!=(1&e.length)&&this._offset++}int32ArrayBuffer(e){this._ensureArrayBuffer(e.byteLength/4),this._i32View[this._offset]=e.length,this._offset++,this._i32View.set(e,this._offset),this._offset+=e.length}uint32ArrayBuffer(e){this._ensureArrayBuffer(e.byteLength/4),this._i32View[this._offset]=e.length,this._offset++,this._u32View.set(e,this._offset),this._offset+=e.length}string(e){let t=(new TextEncoder).encode(e);this._ensureArrayBuffer(t.byteLength/4),this._i32View[this._offset]=t.byteLength,this._offset++,this._u8View.set(t,4*this._offset),this._offset+=t.byteLength>>2,0!=(3&t.byteLength)&&this._offset++}}class a{constructor(){this._buffer=new ArrayBuffer(0),this._i32View=new Int32Array(this._buffer),this._f32View=new Float32Array(this._buffer),this._f64View=new Float64Array(this._buffer),this._u8View=new Uint8Array(this._buffer),this._u16View=new Uint16Array(this._buffer),this._u32View=new Uint32Array(this._buffer),this._offset=0,this._length=0,this._startOffset=-1,this._processor={int:()=>this._i32View[this._startOffset++],bool:()=>1===this._i32View[this._startOffset++],type:()=>this._i32View[this._startOffset++],float:()=>this._f32View[this._startOffset++],timestamp:()=>{this._startOffset%2==1&&this._startOffset++;let e=this._f64View[this._startOffset/2];return this._startOffset+=2,e},string:()=>{let e=this._i32View[this._startOffset++],t=(new TextDecoder).decode(new Uint8Array(this._buffer,4*this._startOffset,e));return this._startOffset+=e>>2,0!=(3&e)&&this._startOffset++,t},dataWithLength:()=>{let e=this._i32View[this._startOffset++],t=new Uint8Array(e);return t.set(this._u8View.subarray(4*this._startOffset,4*this._startOffset+e)),this._startOffset+=t.byteLength>>2,0!=(3&t.byteLength)&&this._startOffset++,t.buffer},matrix4x4:()=>{let e=this._i32View[this._startOffset++],t=new Float32Array(e);return t.set(this._f32View.subarray(this._startOffset,this._startOffset+16)),this._startOffset+=e,t},matrix3x3:()=>{let e=this._i32View[this._startOffset++],t=new Float32Array(e);return t.set(this._f32View.subarray(this._startOffset,this._startOffset+9)),this._startOffset+=e,t},identityCoefficients:()=>{let e=this._i32View[this._startOffset++],t=new Float32Array(e);return t.set(this._f32View.subarray(this._startOffset,this._startOffset+50)),this._startOffset+=e,t},expressionCoefficients:()=>{let e=this._i32View[this._startOffset++],t=new Float32Array(e);return t.set(this._f32View.subarray(this._startOffset,this._startOffset+29)),this._startOffset+=e,t},cameraModel:()=>{let e=this._i32View[this._startOffset++],t=new Float32Array(e);return t.set(this._f32View.subarray(this._startOffset,this._startOffset+6)),this._startOffset+=e,t},barcodeFormat:()=>this._i32View[this._startOffset++],faceLandmarkName:()=>this._i32View[this._startOffset++],instantTrackerTransformOrientation:()=>this._i32View[this._startOffset++],logLevel:()=>this._i32View[this._startOffset++]}}setData(e){this._buffer=e,this._i32View=new Int32Array(this._buffer),this._f32View=new Float32Array(this._buffer),this._f64View=new Float64Array(this._buffer),this._u8View=new Uint8Array(this._buffer),this._u16View=new Uint16Array(this._buffer),this._u32View=new Uint32Array(this._buffer),this._offset=0,this._length=0,e.byteLength>=4&&(this._offset=1,this._length=this._i32View[0]),this._startOffset=-1}hasMessage(){return this._offset+1<this._length}forMessages(e){for(;this.hasMessage();){let t=this._i32View[this._offset],r=this._i32View[this._offset+1];this._startOffset=this._offset+2,this._offset+=t,e(r,this._processor)}}}class n{constructor(e,t){this._impl=e,this._sender=t,this._deserializer=new a,this.serializersByPipelineId=new Map,this._pipeline_id_by_pipeline_id=new Map,this._pipeline_by_instance=new Map,this._pipeline_id_by_camera_source_id=new Map,this._camera_source_by_instance=new Map,this._pipeline_id_by_sequence_source_id=new Map,this._sequence_source_by_instance=new Map,this._pipeline_id_by_image_tracker_id=new Map,this._image_tracker_by_instance=new Map,this._pipeline_id_by_face_tracker_id=new Map,this._face_tracker_by_instance=new Map,this._pipeline_id_by_face_mesh_id=new Map,this._face_mesh_by_instance=new Map,this._pipeline_id_by_face_landmark_id=new Map,this._face_landmark_by_instance=new Map,this._pipeline_id_by_barcode_finder_id=new Map,this._barcode_finder_by_instance=new Map,this._pipeline_id_by_instant_world_tracker_id=new Map,this._instant_world_tracker_by_instance=new Map}processBuffer(e){this._deserializer.setData(e),this._deserializer.forMessages(((e,t)=>{switch(e){case 34:this._impl.log_level_set(t.logLevel());break;case 31:this._impl.analytics_project_id_set(t.string());break;case 27:{let e=t.type(),r=this._impl.pipeline_create();this._pipeline_by_instance.set(e,r),this._pipeline_id_by_pipeline_id.set(e,e),this.serializersByPipelineId.set(e,new i((t=>{this._sender(e,t)})));break}case 28:{let e=t.type(),r=this._pipeline_by_instance.get(e);if(void 0===r)return;this._impl.pipeline_destroy(r),this._pipeline_by_instance.delete(e);break}case 9:{let e=t.type(),r=this._pipeline_by_instance.get(e);if(void 0===r)return;this._impl.pipeline_frame_update(r);break}case 8:{let e=t.type(),r=this._pipeline_by_instance.get(e);if(void 0===r)return;this._impl.pipeline_camera_frame_submit(r,t.dataWithLength(),t.int(),t.int(),t.int(),t.matrix4x4(),t.cameraModel(),t.bool());break}case 10:{let e=t.type(),r=this._pipeline_by_instance.get(e);if(void 0===r)return;this._impl.pipeline_motion_accelerometer_submit(r,t.timestamp(),t.float(),t.float(),t.float());break}case 11:{let e=t.type(),r=this._pipeline_by_instance.get(e);if(void 0===r)return;this._impl.pipeline_motion_rotation_rate_submit(r,t.timestamp(),t.float(),t.float(),t.float());break}case 12:{let e=t.type(),r=this._pipeline_by_instance.get(e);if(void 0===r)return;this._impl.pipeline_motion_attitude_submit(r,t.timestamp(),t.float(),t.float(),t.float());break}case 13:{let e=t.type(),r=this._pipeline_by_instance.get(e);if(void 0===r)return;this._impl.pipeline_motion_attitude_matrix_submit(r,t.matrix4x4());break}case 29:{let e=t.type(),r=t.type(),i=this._pipeline_by_instance.get(r),a=t.string(),n=this._impl.camera_source_create(i,a);this._camera_source_by_instance.set(e,n),this._pipeline_id_by_camera_source_id.set(e,r);break}case 30:{let e=t.type(),r=this._camera_source_by_instance.get(e);if(void 0===r)return;this._impl.camera_source_destroy(r),this._camera_source_by_instance.delete(e);break}case 35:{let e=t.type(),r=t.type(),i=this._pipeline_by_instance.get(r),a=this._impl.sequence_source_create(i);this._sequence_source_by_instance.set(e,a),this._pipeline_id_by_sequence_source_id.set(e,r);break}case 36:{let e=t.type(),r=this._sequence_source_by_instance.get(e);if(void 0===r)return;this._impl.sequence_source_destroy(r),this._sequence_source_by_instance.delete(e);break}case 2:{let e=t.type(),r=t.type(),i=this._pipeline_by_instance.get(r),a=this._impl.image_tracker_create(i);this._image_tracker_by_instance.set(e,a),this._pipeline_id_by_image_tracker_id.set(e,r);break}case 14:{let e=t.type(),r=this._image_tracker_by_instance.get(e);if(void 0===r)return;this._impl.image_tracker_destroy(r),this._image_tracker_by_instance.delete(e);break}case 4:{let e=t.type(),r=this._image_tracker_by_instance.get(e);if(void 0===r)return;this._impl.image_tracker_target_load_from_memory(r,t.dataWithLength());break}case 3:{let e=t.type(),r=this._image_tracker_by_instance.get(e);if(void 0===r)return;this._impl.image_tracker_enabled_set(r,t.bool());break}case 20:{let e=t.type(),r=t.type(),i=this._pipeline_by_instance.get(r),a=this._impl.face_tracker_create(i);this._face_tracker_by_instance.set(e,a),this._pipeline_id_by_face_tracker_id.set(e,r);break}case 21:{let e=t.type(),r=this._face_tracker_by_instance.get(e);if(void 0===r)return;this._impl.face_tracker_destroy(r),this._face_tracker_by_instance.delete(e);break}case 22:{let e=t.type(),r=this._face_tracker_by_instance.get(e);if(void 0===r)return;this._impl.face_tracker_model_load_from_memory(r,t.dataWithLength());break}case 23:{let e=t.type(),r=this._face_tracker_by_instance.get(e);if(void 0===r)return;this._impl.face_tracker_enabled_set(r,t.bool());break}case 24:{let e=t.type(),r=this._face_tracker_by_instance.get(e);if(void 0===r)return;this._impl.face_tracker_max_faces_set(r,t.int());break}case 25:{let e=t.type(),r=this._impl.face_mesh_create();this._face_mesh_by_instance.set(e,r);break}case 26:{let e=t.type(),r=this._face_mesh_by_instance.get(e);if(void 0===r)return;this._impl.face_mesh_destroy(r),this._face_mesh_by_instance.delete(e);break}case 32:{let e=t.type(),r=t.faceLandmarkName(),i=this._impl.face_landmark_create(r);this._face_landmark_by_instance.set(e,i);break}case 33:{let e=t.type(),r=this._face_landmark_by_instance.get(e);if(void 0===r)return;this._impl.face_landmark_destroy(r),this._face_landmark_by_instance.delete(e);break}case 16:{let e=t.type(),r=t.type(),i=this._pipeline_by_instance.get(r),a=this._impl.barcode_finder_create(i);this._barcode_finder_by_instance.set(e,a),this._pipeline_id_by_barcode_finder_id.set(e,r);break}case 17:{let e=t.type(),r=this._barcode_finder_by_instance.get(e);if(void 0===r)return;this._impl.barcode_finder_destroy(r),this._barcode_finder_by_instance.delete(e);break}case 18:{let e=t.type(),r=this._barcode_finder_by_instance.get(e);if(void 0===r)return;this._impl.barcode_finder_enabled_set(r,t.bool());break}case 19:{let e=t.type(),r=this._barcode_finder_by_instance.get(e);if(void 0===r)return;this._impl.barcode_finder_formats_set(r,t.barcodeFormat());break}case 5:{let e=t.type(),r=t.type(),i=this._pipeline_by_instance.get(r),a=this._impl.instant_world_tracker_create(i);this._instant_world_tracker_by_instance.set(e,a),this._pipeline_id_by_instant_world_tracker_id.set(e,r);break}case 15:{let e=t.type(),r=this._instant_world_tracker_by_instance.get(e);if(void 0===r)return;this._impl.instant_world_tracker_destroy(r),this._instant_world_tracker_by_instance.delete(e);break}case 6:{let e=t.type(),r=this._instant_world_tracker_by_instance.get(e);if(void 0===r)return;this._impl.instant_world_tracker_enabled_set(r,t.bool());break}case 7:{let e=t.type(),r=this._instant_world_tracker_by_instance.get(e);if(void 0===r)return;this._impl.instant_world_tracker_anchor_pose_set_from_camera_offset_raw(r,t.float(),t.float(),t.float(),t.instantTrackerTransformOrientation());break}}}))}exploreState(){for(let[e,t]of this._pipeline_by_instance){let r=this._pipeline_id_by_pipeline_id.get(e);if(!r)continue;let i=this.serializersByPipelineId.get(r);i&&(i.sendMessage(7,(r=>{r.type(e),r.int(this._impl.pipeline_frame_number(t))})),i.sendMessage(6,(r=>{r.type(e),r.cameraModel(this._impl.pipeline_camera_model(t))})),i.sendMessage(5,(r=>{r.type(e),r.int(this._impl.pipeline_camera_frame_user_data(t))})),i.sendMessage(11,(r=>{r.type(e),r.matrix4x4(this._impl.pipeline_camera_frame_camera_attitude(t))})),i.sendMessage(12,(r=>{r.type(e),r.matrix4x4(this._impl.pipeline_camera_frame_device_attitude(t))})))}for(let[e,t]of this._camera_source_by_instance){let t=this._pipeline_id_by_camera_source_id.get(e);t&&this.serializersByPipelineId.get(t)}for(let[e,t]of this._sequence_source_by_instance){let t=this._pipeline_id_by_sequence_source_id.get(e);t&&this.serializersByPipelineId.get(t)}for(let[e,t]of this._image_tracker_by_instance){let r=this._pipeline_id_by_image_tracker_id.get(e);if(!r)continue;let i=this.serializersByPipelineId.get(r);if(i){i.sendMessage(19,(r=>{r.type(e),r.int(this._impl.image_tracker_target_loaded_version(t))})),i.sendMessage(1,(r=>{r.type(e),r.int(this._impl.image_tracker_anchor_count(t))}));for(let r=0;r<this._impl.image_tracker_anchor_count(t);r++)i.sendMessage(2,(i=>{i.type(e),i.int(r),i.string(this._impl.image_tracker_anchor_id(t,r))}));for(let r=0;r<this._impl.image_tracker_anchor_count(t);r++)i.sendMessage(3,(i=>{i.type(e),i.int(r),i.matrix4x4(this._impl.image_tracker_anchor_pose_raw(t,r))}))}}for(let[e,t]of this._face_tracker_by_instance){let r=this._pipeline_id_by_face_tracker_id.get(e);if(!r)continue;let i=this.serializersByPipelineId.get(r);if(i){i.sendMessage(18,(r=>{r.type(e),r.int(this._impl.face_tracker_model_loaded_version(t))})),i.sendMessage(13,(r=>{r.type(e),r.int(this._impl.face_tracker_anchor_count(t))}));for(let r=0;r<this._impl.face_tracker_anchor_count(t);r++)i.sendMessage(14,(i=>{i.type(e),i.int(r),i.string(this._impl.face_tracker_anchor_id(t,r))}));for(let r=0;r<this._impl.face_tracker_anchor_count(t);r++)i.sendMessage(15,(i=>{i.type(e),i.int(r),i.matrix4x4(this._impl.face_tracker_anchor_pose_raw(t,r))}));for(let r=0;r<this._impl.face_tracker_anchor_count(t);r++)i.sendMessage(16,(i=>{i.type(e),i.int(r),i.identityCoefficients(this._impl.face_tracker_anchor_identity_coefficients(t,r))}));for(let r=0;r<this._impl.face_tracker_anchor_count(t);r++)i.sendMessage(17,(i=>{i.type(e),i.int(r),i.expressionCoefficients(this._impl.face_tracker_anchor_expression_coefficients(t,r))}))}}for(let[e,t]of this._face_mesh_by_instance){let t=this._pipeline_id_by_face_mesh_id.get(e);t&&this.serializersByPipelineId.get(t)}for(let[e,t]of this._face_landmark_by_instance){let t=this._pipeline_id_by_face_landmark_id.get(e);t&&this.serializersByPipelineId.get(t)}for(let[e,t]of this._barcode_finder_by_instance){let r=this._pipeline_id_by_barcode_finder_id.get(e);if(!r)continue;let i=this.serializersByPipelineId.get(r);if(i){i.sendMessage(8,(r=>{r.type(e),r.int(this._impl.barcode_finder_found_number(t))}));for(let r=0;r<this._impl.barcode_finder_found_number(t);r++)i.sendMessage(9,(i=>{i.type(e),i.int(r),i.string(this._impl.barcode_finder_found_text(t,r))}));for(let r=0;r<this._impl.barcode_finder_found_number(t);r++)i.sendMessage(10,(i=>{i.type(e),i.int(r),i.barcodeFormat(this._impl.barcode_finder_found_format(t,r))}))}}for(let[e,t]of this._instant_world_tracker_by_instance){let r=this._pipeline_id_by_instant_world_tracker_id.get(e);if(!r)continue;let i=this.serializersByPipelineId.get(r);i&&i.sendMessage(4,(r=>{r.type(e),r.matrix4x4(this._impl.instant_world_tracker_anchor_pose_raw(t))}))}}}class o{constructor(){this._funcs=[]}bind(e){this._funcs.push(e)}unbind(e){let t=this._funcs.indexOf(e);t>-1&&this._funcs.splice(t,1)}emit(){for(var e=0,t=this._funcs.length;e<t;e++)this._funcs[e]()}}class s{constructor(){this._funcs=[]}bind(e){this._funcs.push(e)}unbind(e){let t=this._funcs.indexOf(e);t>-1&&this._funcs.splice(t,1)}emit(e){for(var t=0,r=this._funcs.length;t<r;t++)this._funcs[t](e)}}var _,c,u,f,l,d,p="undefined"!=typeof Float32Array?Float32Array:Array;function h(){var e=new p(16);return p!=Float32Array&&(e[1]=0,e[2]=0,e[3]=0,e[4]=0,e[6]=0,e[7]=0,e[8]=0,e[9]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0),e[0]=1,e[5]=1,e[10]=1,e[15]=1,e}function m(e){return e[0]=1,e[1]=0,e[2]=0,e[3]=0,e[4]=0,e[5]=1,e[6]=0,e[7]=0,e[8]=0,e[9]=0,e[10]=1,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,e}Math.random,Math.PI,Math.hypot||(Math.hypot=function(){for(var e=0,t=arguments.length;t--;)e+=arguments[t]*arguments[t];return Math.sqrt(e)}),function(e){e[e.UNKNOWN=131072]="UNKNOWN",e[e.AZTEC=1]="AZTEC",e[e.CODABAR=2]="CODABAR",e[e.CODE_39=4]="CODE_39",e[e.CODE_93=8]="CODE_93",e[e.CODE_128=16]="CODE_128",e[e.DATA_MATRIX=32]="DATA_MATRIX",e[e.EAN_8=64]="EAN_8",e[e.EAN_13=128]="EAN_13",e[e.ITF=256]="ITF",e[e.MAXICODE=512]="MAXICODE",e[e.PDF_417=1024]="PDF_417",e[e.QR_CODE=2048]="QR_CODE",e[e.RSS_14=4096]="RSS_14",e[e.RSS_EXPANDED=8192]="RSS_EXPANDED",e[e.UPC_A=16384]="UPC_A",e[e.UPC_E=32768]="UPC_E",e[e.UPC_EAN_EXTENSION=65536]="UPC_EAN_EXTENSION",e[e.ALL=131071]="ALL"}(_||(_={})),function(e){e[e.EYE_LEFT=0]="EYE_LEFT",e[e.EYE_RIGHT=1]="EYE_RIGHT",e[e.EAR_LEFT=2]="EAR_LEFT",e[e.EAR_RIGHT=3]="EAR_RIGHT",e[e.NOSE_BRIDGE=4]="NOSE_BRIDGE",e[e.NOSE_TIP=5]="NOSE_TIP",e[e.NOSE_BASE=6]="NOSE_BASE",e[e.LIP_TOP=7]="LIP_TOP",e[e.LIP_BOTTOM=8]="LIP_BOTTOM",e[e.MOUTH_CENTER=9]="MOUTH_CENTER",e[e.CHIN=10]="CHIN",e[e.EYEBROW_LEFT=11]="EYEBROW_LEFT",e[e.EYEBROW_RIGHT=12]="EYEBROW_RIGHT"}(c||(c={})),function(e){e[e.WORLD=3]="WORLD",e[e.MINUS_Z_AWAY_FROM_USER=4]="MINUS_Z_AWAY_FROM_USER",e[e.MINUS_Z_HEADING=5]="MINUS_Z_HEADING",e[e.UNCHANGED=6]="UNCHANGED"}(u||(u={})),function(e){e[e.LOG_LEVEL_NONE=0]="LOG_LEVEL_NONE",e[e.LOG_LEVEL_ERROR=1]="LOG_LEVEL_ERROR",e[e.LOG_LEVEL_WARNING=2]="LOG_LEVEL_WARNING",e[e.LOG_LEVEL_VERBOSE=3]="LOG_LEVEL_VERBOSE"}(f||(f={})),function(e){e[e.FRAME_PIXEL_FORMAT_I420=0]="FRAME_PIXEL_FORMAT_I420",e[e.FRAME_PIXEL_FORMAT_I420A=1]="FRAME_PIXEL_FORMAT_I420A",e[e.FRAME_PIXEL_FORMAT_I422=2]="FRAME_PIXEL_FORMAT_I422",e[e.FRAME_PIXEL_FORMAT_I444=3]="FRAME_PIXEL_FORMAT_I444",e[e.FRAME_PIXEL_FORMAT_NV12=4]="FRAME_PIXEL_FORMAT_NV12",e[e.FRAME_PIXEL_FORMAT_RGBA=5]="FRAME_PIXEL_FORMAT_RGBA",e[e.FRAME_PIXEL_FORMAT_BGRA=6]="FRAME_PIXEL_FORMAT_BGRA",e[e.FRAME_PIXEL_FORMAT_Y=7]="FRAME_PIXEL_FORMAT_Y"}(l||(l={})),function(e){e[e.IMAGE_TRACKER_TYPE_PLANAR=0]="IMAGE_TRACKER_TYPE_PLANAR",e[e.IMAGE_TRACKER_TYPE_CYLINDRICAL=1]="IMAGE_TRACKER_TYPE_CYLINDRICAL",e[e.IMAGE_TRACKER_TYPE_CONICAL=2]="IMAGE_TRACKER_TYPE_CONICAL"}(d||(d={}));const b=new Map;class w{constructor(e){this._gl=e,this._viewports=[],this._underlyingViewport=this._gl.viewport,this._viewports.push(this._gl.getParameter(this._gl.VIEWPORT)),this._gl.viewport=(e,t,r,i)=>{this._viewports[this._viewports.length-1]=[e,t,r,i],this._underlyingViewport.call(this._gl,e,t,r,i)}}static get(e){let t=b.get(e);return t||(t=new w(e),b.set(e,t)),t}push(){this._viewports.push(this._viewports[this._viewports.length-1])}pop(){const e=this._viewports.pop(),t=this._viewports[this._viewports.length-1];e&&e[0]===t[0]&&e[1]===t[1]&&e[2]===t[2]&&e[3]===t[3]||this._underlyingViewport.call(this._gl,t[0],t[1],t[2],t[3])}}var g,y=r(238);!function(e){e[e.OBJECT_URL=0]="OBJECT_URL",e[e.SRC_OBJECT=1]="SRC_OBJECT"}(g||(g={}));let v={deviceMotionMutliplier:-1,blacklisted:!1,showGyroPermissionsWarningIfNecessary:!1,showSafariPermissionsResetIfNecessary:!1,requestHighFrameRate:!1,videoWidth:640,videoHeight:480,dataWidth:320,dataHeight:240,videoElementInDOM:!1,preferMediaStreamTrackProcessorCamera:!1,preferImageBitmapCamera:!1};"undefined"!=typeof window&&(window.zeeProfile=v,window.location.href.indexOf("_mstppipeline")>=0&&(console.log("Configuring for MSTP camera pipeline (if supported)"),v.preferMediaStreamTrackProcessorCamera=!0),window.location.href.indexOf("_imagebitmappipeline")>=0&&(console.log("Configuring for ImageBitmap camera pipeline (if supported)"),v.preferImageBitmapCamera=!0));let E=new y.UAParser,A=(E.getOS().name||"unknown").toLowerCase(),T=(E.getEngine().name||"unknown").toLowerCase();function x(e){let t=e.split(".");if(t.length>=2){const e=parseInt(t[0]),r=parseInt(t[1]);(e<11||11===e&&r<3)&&(v.blacklisted=!0),(e<12||12===e&&r<2)&&(v.videoElementInDOM=!0),(12===e&&r>=2||e>=13)&&(v.showGyroPermissionsWarningIfNecessary=!0),e>=13&&(v.showSafariPermissionsResetIfNecessary=!0),(e>=12&&r>1||e>=13)&&navigator.mediaDevices&&navigator.mediaDevices.getSupportedConstraints&&navigator.mediaDevices.getSupportedConstraints().frameRate&&(v.requestHighFrameRate=!0,e<14&&(v.videoHeight=360,v.dataHeight=180))}}function k(e,t,r){let i=e.createShader(t);if(!i)throw new Error("Unable to create shader");e.shaderSource(i,r),e.compileShader(i);let a=e.getShaderInfoLog(i);if(a&&a.trim().length>0)throw new Error("Shader compile error: "+a);return i}"webkit"===T&&"ios"!==A&&(v.deviceMotionMutliplier=1,"undefined"!=typeof window&&void 0!==window.orientation&&x("15.0")),"webkit"===T&&"ios"===A&&(v.deviceMotionMutliplier=1,x(E.getOS().version||"15.0"));class R{constructor(e){this._gl=e,this._isPaused=!0,this._hadFrames=!1,this._isUserFacing=!1,this._cameraToScreenRotation=0,this._isUploadFrame=!0,this._computedTransformRotation=-1,this._computedFrontCameraRotation=!1,this._cameraUvTransform=h(),this._framebufferWidth=0,this._framebufferHeight=0,this._framebufferId=null,this._renderTexture=null,this._isWebGL2=!1,this._isWebGL2=e.getParameter(e.VERSION).indexOf("WebGL 2")>=0,this._isWebGL2||(this._instancedArraysExtension=this._gl.getExtension("ANGLE_instanced_arrays"))}resetGLContext(){this._framebufferId=null,this._renderTexture=null,this._vertexBuffer=void 0,this._indexBuffer=void 0,this._greyscaleShader=void 0}destroy(){this.resetGLContext()}uploadFrame(e,t,r,i){let a=this._gl;const n=w.get(a);n.push();const o=a.isEnabled(a.SCISSOR_TEST),s=a.isEnabled(a.DEPTH_TEST),_=a.isEnabled(a.BLEND),c=a.isEnabled(a.CULL_FACE),u=a.isEnabled(a.STENCIL_TEST),f=a.getParameter(a.ACTIVE_TEXTURE),l=a.getParameter(a.UNPACK_FLIP_Y_WEBGL),d=a.getParameter(a.CURRENT_PROGRAM);a.activeTexture(a.TEXTURE0);const p=a.getParameter(a.TEXTURE_BINDING_2D),h=a.getParameter(a.FRAMEBUFFER_BINDING),m=a.getParameter(a.ARRAY_BUFFER_BINDING),b=a.getParameter(a.ELEMENT_ARRAY_BUFFER_BINDING);a.disable(a.SCISSOR_TEST),a.disable(a.DEPTH_TEST),a.disable(a.BLEND),a.disable(a.CULL_FACE),a.disable(a.STENCIL_TEST),a.pixelStorei(a.UNPACK_FLIP_Y_WEBGL,!1),a.bindTexture(a.TEXTURE_2D,e);const g=a.RGBA,y=a.RGBA,E=a.UNSIGNED_BYTE;a.texImage2D(a.TEXTURE_2D,0,g,y,E,t);let A=0,T=0;"undefined"!=typeof HTMLVideoElement&&t instanceof HTMLVideoElement?(A=t.videoWidth,T=t.videoHeight):(A=t.width,T=t.height),T>A&&(T=[A,A=T][0]),this._updateTransforms(r,i);let x=this._getFramebuffer(a,v.dataWidth/4,v.dataHeight),k=this._getVertexBuffer(a),R=this._getIndexBuffer(a),L=this._getGreyscaleShader(a);const F=a.getVertexAttrib(L.aVertexPositionLoc,a.VERTEX_ATTRIB_ARRAY_SIZE),z=a.getVertexAttrib(L.aVertexPositionLoc,a.VERTEX_ATTRIB_ARRAY_TYPE),M=a.getVertexAttrib(L.aVertexPositionLoc,a.VERTEX_ATTRIB_ARRAY_NORMALIZED),I=a.getVertexAttrib(L.aVertexPositionLoc,a.VERTEX_ATTRIB_ARRAY_STRIDE),P=a.getVertexAttribOffset(L.aVertexPositionLoc,a.VERTEX_ATTRIB_ARRAY_POINTER),O=a.getVertexAttrib(L.aVertexPositionLoc,a.VERTEX_ATTRIB_ARRAY_ENABLED),S=a.getVertexAttrib(L.aVertexPositionLoc,a.VERTEX_ATTRIB_ARRAY_BUFFER_BINDING),B=a.getVertexAttrib(L.aTextureCoordLoc,a.VERTEX_ATTRIB_ARRAY_SIZE),D=a.getVertexAttrib(L.aTextureCoordLoc,a.VERTEX_ATTRIB_ARRAY_TYPE),C=a.getVertexAttrib(L.aTextureCoordLoc,a.VERTEX_ATTRIB_ARRAY_NORMALIZED),U=a.getVertexAttrib(L.aTextureCoordLoc,a.VERTEX_ATTRIB_ARRAY_STRIDE),V=a.getVertexAttribOffset(L.aTextureCoordLoc,a.VERTEX_ATTRIB_ARRAY_POINTER),N=a.getVertexAttrib(L.aTextureCoordLoc,a.VERTEX_ATTRIB_ARRAY_BUFFER_BINDING),G=a.getVertexAttrib(L.aTextureCoordLoc,a.VERTEX_ATTRIB_ARRAY_ENABLED);let W=0,H=0;this._isWebGL2?(W=a.getVertexAttrib(L.aVertexPositionLoc,a.VERTEX_ATTRIB_ARRAY_DIVISOR),H=a.getVertexAttrib(L.aTextureCoordLoc,a.VERTEX_ATTRIB_ARRAY_DIVISOR),a.vertexAttribDivisor(L.aVertexPositionLoc,0),a.vertexAttribDivisor(L.aTextureCoordLoc,0)):this._instancedArraysExtension&&(W=a.getVertexAttrib(L.aVertexPositionLoc,this._instancedArraysExtension.VERTEX_ATTRIB_ARRAY_DIVISOR_ANGLE),H=a.getVertexAttrib(L.aTextureCoordLoc,this._instancedArraysExtension.VERTEX_ATTRIB_ARRAY_DIVISOR_ANGLE),this._instancedArraysExtension.vertexAttribDivisorANGLE(L.aVertexPositionLoc,0),this._instancedArraysExtension.vertexAttribDivisorANGLE(L.aTextureCoordLoc,0)),a.bindFramebuffer(a.FRAMEBUFFER,x),a.viewport(0,0,this._framebufferWidth,this._framebufferHeight),a.clear(a.COLOR_BUFFER_BIT),a.bindBuffer(a.ARRAY_BUFFER,k),a.vertexAttribPointer(L.aVertexPositionLoc,2,a.FLOAT,!1,16,0),a.enableVertexAttribArray(L.aVertexPositionLoc),a.vertexAttribPointer(L.aTextureCoordLoc,2,a.FLOAT,!1,16,8),a.enableVertexAttribArray(L.aTextureCoordLoc),a.bindBuffer(a.ELEMENT_ARRAY_BUFFER,R),a.useProgram(L.program),a.uniform1f(L.uTexWidthLoc,v.dataWidth),a.uniformMatrix4fv(L.uUvTransformLoc,!1,this._cameraUvTransform),a.activeTexture(a.TEXTURE0),a.bindTexture(a.TEXTURE_2D,e),a.uniform1i(L.uSamplerLoc,0),a.drawElements(a.TRIANGLES,6,a.UNSIGNED_SHORT,0),a.bindBuffer(a.ARRAY_BUFFER,S),a.vertexAttribPointer(L.aVertexPositionLoc,F,z,M,I,P),a.bindBuffer(a.ARRAY_BUFFER,N),a.vertexAttribPointer(L.aTextureCoordLoc,B,D,C,U,V),a.bindBuffer(a.ARRAY_BUFFER,m),a.bindBuffer(a.ELEMENT_ARRAY_BUFFER,b),O||a.disableVertexAttribArray(L.aVertexPositionLoc),G||a.disableVertexAttribArray(L.aTextureCoordLoc),this._isWebGL2?(a.vertexAttribDivisor(L.aVertexPositionLoc,W),a.vertexAttribDivisor(L.aTextureCoordLoc,H)):this._instancedArraysExtension&&(this._instancedArraysExtension.vertexAttribDivisorANGLE(L.aVertexPositionLoc,W),this._instancedArraysExtension.vertexAttribDivisorANGLE(L.aTextureCoordLoc,H)),a.bindFramebuffer(a.FRAMEBUFFER,h),a.useProgram(d),a.bindTexture(a.TEXTURE_2D,p),a.activeTexture(f),a.pixelStorei(a.UNPACK_FLIP_Y_WEBGL,l),n.pop(),_&&a.enable(a.BLEND),c&&a.enable(a.CULL_FACE),s&&a.enable(a.DEPTH_TEST),o&&a.enable(a.SCISSOR_TEST),u&&a.enable(a.STENCIL_TEST)}readFrame(e,t){let r=this._gl,i=new Uint8Array(t);const a=r.getParameter(r.FRAMEBUFFER_BINDING);let n=this._getFramebuffer(r,v.dataWidth/4,v.dataHeight);return r.bindFramebuffer(r.FRAMEBUFFER,n),r.readPixels(0,0,this._framebufferWidth,this._framebufferHeight,r.RGBA,r.UNSIGNED_BYTE,i),r.bindFramebuffer(r.FRAMEBUFFER,a),{uvTransform:this._cameraUvTransform,data:t,texture:e,dataWidth:v.dataWidth,dataHeight:v.dataHeight,userFacing:this._computedFrontCameraRotation}}_updateTransforms(e,t){e==this._computedTransformRotation&&t==this._computedFrontCameraRotation||(this._computedTransformRotation=e,this._computedFrontCameraRotation=t,this._cameraUvTransform=this._getCameraUvTransform())}_getCameraUvTransform(){switch(this._computedTransformRotation){case 270:return new Float32Array([0,1,0,0,-1,0,0,0,0,0,1,0,1,0,0,1]);case 180:return new Float32Array([-1,0,0,0,0,-1,0,0,0,0,1,0,1,1,0,1]);case 90:return new Float32Array([0,-1,0,0,1,0,0,0,0,0,1,0,0,1,0,1])}return new Float32Array([1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1])}_getFramebuffer(e,t,r){if(this._framebufferWidth===t&&this._framebufferHeight===r&&this._framebufferId)return this._framebufferId;if(this._framebufferId&&(e.deleteFramebuffer(this._framebufferId),this._framebufferId=null),this._renderTexture&&(e.deleteTexture(this._renderTexture),this._renderTexture=null),this._framebufferId=e.createFramebuffer(),!this._framebufferId)throw new Error("Unable to create framebuffer");if(e.bindFramebuffer(e.FRAMEBUFFER,this._framebufferId),this._renderTexture=e.createTexture(),!this._renderTexture)throw new Error("Unable to create render texture");e.activeTexture(e.TEXTURE0);const i=e.getParameter(e.TEXTURE_BINDING_2D);e.bindTexture(e.TEXTURE_2D,this._renderTexture),e.texImage2D(e.TEXTURE_2D,0,e.RGBA,t,r,0,e.RGBA,e.UNSIGNED_BYTE,null),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE),e.texParameterf(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,e.LINEAR),e.framebufferTexture2D(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,this._renderTexture,0);let a=e.checkFramebufferStatus(e.FRAMEBUFFER);if(a!==e.FRAMEBUFFER_COMPLETE)throw new Error("Framebuffer not complete: "+a.toString());return this._framebufferWidth=t,this._framebufferHeight=r,e.bindTexture(e.TEXTURE_2D,i),e.bindFramebuffer(e.FRAMEBUFFER,null),this._framebufferId}_getVertexBuffer(e){if(this._vertexBuffer)return this._vertexBuffer;if(this._vertexBuffer=e.createBuffer(),!this._vertexBuffer)throw new Error("Unable to create vertex buffer");e.bindBuffer(e.ARRAY_BUFFER,this._vertexBuffer);let t=new Float32Array([-1,-1,0,0,-1,1,0,1,1,1,1,1,1,-1,1,0]);return e.bufferData(e.ARRAY_BUFFER,t,e.STATIC_DRAW),this._vertexBuffer}_getIndexBuffer(e){if(this._indexBuffer)return this._indexBuffer;if(this._indexBuffer=e.createBuffer(),!this._indexBuffer)throw new Error("Unable to create index buffer");e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,this._indexBuffer);let t=new Uint16Array([0,1,2,0,2,3]);return e.bufferData(e.ELEMENT_ARRAY_BUFFER,t,e.STATIC_DRAW),this._indexBuffer}_getGreyscaleShader(e){if(this._greyscaleShader)return this._greyscaleShader;let t=e.createProgram();if(!t)throw new Error("Unable to create program");let r=k(e,e.VERTEX_SHADER,I),i=k(e,e.FRAGMENT_SHADER,P);e.attachShader(t,r),e.attachShader(t,i),function(e,t){e.linkProgram(t);let r=e.getProgramInfoLog(t);if(r&&r.trim().length>0)throw new Error("Unable to link: "+r)}(e,t);let a=e.getUniformLocation(t,"uTexWidth");if(!a)throw new Error("Unable to get uniform location uTexWidth");let n=e.getUniformLocation(t,"uUvTransform");if(!n)throw new Error("Unable to get uniform location uUvTransform");let o=e.getUniformLocation(t,"uSampler");if(!o)throw new Error("Unable to get uniform location uSampler");return this._greyscaleShader={program:t,aVertexPositionLoc:e.getAttribLocation(t,"aVertexPosition"),aTextureCoordLoc:e.getAttribLocation(t,"aTextureCoord"),uTexWidthLoc:a,uUvTransformLoc:n,uSamplerLoc:o},this._greyscaleShader}}let L,F,z,M,I="\\n    attribute vec4 aVertexPosition;\\n    attribute vec2 aTextureCoord;\\n\\n    varying highp vec2 vTextureCoord1;\\n    varying highp vec2 vTextureCoord2;\\n    varying highp vec2 vTextureCoord3;\\n    varying highp vec2 vTextureCoord4;\\n\\n    uniform float uTexWidth;\\n\\tuniform mat4 uUvTransform;\\n\\n    void main(void) {\\n      highp vec2 offset1 = vec2(1.5 / uTexWidth, 0);\\n      highp vec2 offset2 = vec2(0.5 / uTexWidth, 0);\\n\\n      gl_Position = aVertexPosition;\\n      vTextureCoord1 = (uUvTransform * vec4(aTextureCoord - offset1, 0, 1)).xy;\\n      vTextureCoord2 = (uUvTransform * vec4(aTextureCoord - offset2, 0, 1)).xy;\\n      vTextureCoord3 = (uUvTransform * vec4(aTextureCoord + offset2, 0, 1)).xy;\\n      vTextureCoord4 = (uUvTransform * vec4(aTextureCoord + offset1, 0, 1)).xy;\\n    }\\n",P="\\n  varying highp vec2 vTextureCoord1;\\n  varying highp vec2 vTextureCoord2;\\n  varying highp vec2 vTextureCoord3;\\n  varying highp vec2 vTextureCoord4;\\n\\n  uniform sampler2D uSampler;\\n\\n  const lowp vec3 colorWeights = vec3(77.0 / 256.0, 150.0 / 256.0, 29.0 / 256.0);\\n\\n  void main(void) {\\n    lowp vec4 outpx;\\n\\n    outpx.r = dot(colorWeights, texture2D(uSampler, vTextureCoord1).xyz);\\n    outpx.g = dot(colorWeights, texture2D(uSampler, vTextureCoord2).xyz);\\n    outpx.b = dot(colorWeights, texture2D(uSampler, vTextureCoord3).xyz);\\n    outpx.a = dot(colorWeights, texture2D(uSampler, vTextureCoord4).xyz);\\n\\n    gl_FragColor = outpx;\\n  }\\n";var O=function(e,t,r,i){return new(r||(r=Promise))((function(a,n){function o(e){try{_(i.next(e))}catch(e){n(e)}}function s(e){try{_(i.throw(e))}catch(e){n(e)}}function _(e){var t;e.done?a(e.value):(t=e.value,t instanceof r?t:new r((function(e){e(t)}))).then(o,s)}_((i=i.apply(e,t||[])).next())}))};let S=new class{constructor(){this.onOutgoingMessage=new o,this.onIncomingMessage=new s,this._outgoingMessages=[]}postIncomingMessage(e){this.onIncomingMessage.emit(e)}postOutgoingMessage(e,t){this._outgoingMessages.push({msg:e,transferables:t}),this.onOutgoingMessage.emit()}getOutgoingMessages(){let e=this._outgoingMessages;return this._outgoingMessages=[],e}},B=0;function D(e){return O(this,void 0,void 0,(function*(){let r=t({locateFile:(t,r)=>t.endsWith("zappar-cv.wasm")?e:r+t,onRuntimeInitialized:()=>{let e=function(e){let t=e.cwrap("zappar_log_level","number",[]),r=e.cwrap("zappar_log_level_set",null,["number"]),i=e.cwrap("zappar_analytics_project_id_set",null,["string"]),a=e.cwrap("zappar_pipeline_create","number",[]),n=e.cwrap("zappar_pipeline_destroy",null,["number"]),o=e.cwrap("zappar_pipeline_frame_update",null,["number"]),s=e.cwrap("zappar_pipeline_frame_number","number",["number"]),_=e.cwrap("zappar_pipeline_camera_model","number",["number"]),c=e.cwrap("zappar_pipeline_camera_frame_user_data","number",["number"]),u=e.cwrap("zappar_pipeline_camera_frame_submit",null,["number","number","number","number","number","number","number","number","number"]),f=e.cwrap("zappar_pipeline_camera_frame_submit_raw_pointer",null,["number","number","number","number","number","number","number","number","number","number","number"]),l=e.cwrap("zappar_pipeline_camera_frame_camera_attitude","number",["number"]),d=e.cwrap("zappar_pipeline_camera_frame_device_attitude","number",["number"]),p=e.cwrap("zappar_pipeline_motion_accelerometer_submit",null,["number","number","number","number","number"]),h=e.cwrap("zappar_pipeline_motion_rotation_rate_submit",null,["number","number","number","number","number"]),m=e.cwrap("zappar_pipeline_motion_attitude_submit",null,["number","number","number","number","number"]),b=e.cwrap("zappar_pipeline_motion_attitude_matrix_submit",null,["number","number"]),w=e.cwrap("zappar_camera_source_create","number",["number","string"]),g=e.cwrap("zappar_camera_source_destroy",null,["number"]),y=e.cwrap("zappar_sequence_source_create","number",["number"]),v=e.cwrap("zappar_sequence_source_destroy",null,["number"]),E=e.cwrap("zappar_image_tracker_create","number",["number"]),A=e.cwrap("zappar_image_tracker_destroy",null,["number"]),T=e.cwrap("zappar_image_tracker_target_load_from_memory",null,["number","number","number"]),x=e.cwrap("zappar_image_tracker_target_loaded_version","number",["number"]),k=e.cwrap("zappar_image_tracker_enabled","number",["number"]),R=e.cwrap("zappar_image_tracker_enabled_set",null,["number","number"]),L=e.cwrap("zappar_image_tracker_anchor_count","number",["number"]),F=e.cwrap("zappar_image_tracker_anchor_id","string",["number","number"]),z=e.cwrap("zappar_image_tracker_anchor_pose_raw","number",["number","number"]),M=e.cwrap("zappar_face_tracker_create","number",["number"]),I=e.cwrap("zappar_face_tracker_destroy",null,["number"]),P=e.cwrap("zappar_face_tracker_model_load_from_memory",null,["number","number","number"]),O=e.cwrap("zappar_face_tracker_model_loaded_version","number",["number"]),S=e.cwrap("zappar_face_tracker_enabled_set",null,["number","number"]),B=e.cwrap("zappar_face_tracker_enabled","number",["number"]),D=e.cwrap("zappar_face_tracker_max_faces_set",null,["number","number"]),C=e.cwrap("zappar_face_tracker_max_faces","number",["number"]),U=e.cwrap("zappar_face_tracker_anchor_count","number",["number"]),V=e.cwrap("zappar_face_tracker_anchor_id","string",["number","number"]),N=e.cwrap("zappar_face_tracker_anchor_pose_raw","number",["number","number"]),G=e.cwrap("zappar_face_tracker_anchor_identity_coefficients","number",["number","number"]),W=e.cwrap("zappar_face_tracker_anchor_expression_coefficients","number",["number","number"]),H=e.cwrap("zappar_face_mesh_create","number",[]),Y=e.cwrap("zappar_face_mesh_destroy",null,["number"]),X=e.cwrap("zappar_face_landmark_create","number",["number"]),q=e.cwrap("zappar_face_landmark_destroy",null,["number"]),Z=e.cwrap("zappar_barcode_finder_create","number",["number"]),j=e.cwrap("zappar_barcode_finder_destroy",null,["number"]),K=e.cwrap("zappar_barcode_finder_enabled_set",null,["number","number"]),J=e.cwrap("zappar_barcode_finder_enabled","number",["number"]),$=e.cwrap("zappar_barcode_finder_found_number","number",["number"]),Q=e.cwrap("zappar_barcode_finder_found_text","string",["number","number"]),ee=e.cwrap("zappar_barcode_finder_found_format","number",["number","number"]),te=e.cwrap("zappar_barcode_finder_formats","number",["number"]),re=e.cwrap("zappar_barcode_finder_formats_set",null,["number","number"]),ie=e.cwrap("zappar_instant_world_tracker_create","number",["number"]),ae=e.cwrap("zappar_instant_world_tracker_destroy",null,["number"]),ne=e.cwrap("zappar_instant_world_tracker_enabled_set",null,["number","number"]),oe=e.cwrap("zappar_instant_world_tracker_enabled","number",["number"]),se=e.cwrap("zappar_instant_world_tracker_anchor_pose_raw","number",["number"]),_e=e.cwrap("zappar_instant_world_tracker_anchor_pose_set_from_camera_offset_raw",null,["number","number","number","number","number"]),ce=32,ue=e._malloc(ce),fe=(e._malloc(64),new Map),le=(t,r)=>{let i=fe.get(t);return(!i||i[0]<r)&&(i&&e._free(i[1]),i=[r,e._malloc(r)],fe.set(t,i)),i[1]};return{log_level:()=>t(),log_level_set:e=>r(e),analytics_project_id_set:e=>i(e),pipeline_create:()=>a(),pipeline_destroy:()=>{n()},pipeline_frame_update:e=>o(e),pipeline_frame_number:e=>s(e),pipeline_camera_model:t=>{let r=_(t),i=new Float32Array(6);return i.set(e.HEAPF32.subarray(r/4,6+r/4)),r=i,r},pipeline_camera_frame_user_data:e=>c(e),pipeline_camera_frame_submit:(t,r,i,a,n,o,s,_)=>{ce<r.byteLength&&(e._free(ue),ce=r.byteLength,ue=e._malloc(ce));let c=ue,f=r.byteLength;e.HEAPU8.set(new Uint8Array(r),ue);let l=i,d=a,p=n,h=le(4,o.byteLength);e.HEAPF32.set(o,h/4);let m=le(5,s.byteLength);return e.HEAPF32.set(s,m/4),u(t,c,f,l,d,p,h,m,_?1:0)},pipeline_camera_frame_submit_raw_pointer:(t,r,i,a,n,o,s,_,c,u,l)=>{let d=r,p=i,h=a,m=n,b=o,w=s,g=le(6,_.byteLength);e.HEAPF32.set(_,g/4);let y=c,v=le(8,u.byteLength);return e.HEAPF32.set(u,v/4),f(t,d,p,h,m,b,w,g,y,v,l?1:0)},pipeline_camera_frame_camera_attitude:t=>{let r=l(t),i=new Float32Array(16);return i.set(e.HEAPF32.subarray(r/4,16+r/4)),r=i,r},pipeline_camera_frame_device_attitude:t=>{let r=d(t),i=new Float32Array(16);return i.set(e.HEAPF32.subarray(r/4,16+r/4)),r=i,r},pipeline_motion_accelerometer_submit:(e,t,r,i,a)=>p(e,t,r,i,a),pipeline_motion_rotation_rate_submit:(e,t,r,i,a)=>h(e,t,r,i,a),pipeline_motion_attitude_submit:(e,t,r,i,a)=>m(e,t,r,i,a),pipeline_motion_attitude_matrix_submit:(t,r)=>{let i=le(0,r.byteLength);return e.HEAPF32.set(r,i/4),b(t,i)},camera_source_create:(e,t)=>w(e,t),camera_source_destroy:()=>{g()},sequence_source_create:e=>y(e),sequence_source_destroy:()=>{v()},image_tracker_create:e=>E(e),image_tracker_destroy:()=>{A()},image_tracker_target_load_from_memory:(t,r)=>{ce<r.byteLength&&(e._free(ue),ce=r.byteLength,ue=e._malloc(ce));let i=ue,a=r.byteLength;return e.HEAPU8.set(new Uint8Array(r),ue),T(t,i,a)},image_tracker_target_loaded_version:e=>x(e),image_tracker_enabled:e=>{let t=k(e);return t=1===t,t},image_tracker_enabled_set:(e,t)=>R(e,t?1:0),image_tracker_anchor_count:e=>L(e),image_tracker_anchor_id:(e,t)=>F(e,t),image_tracker_anchor_pose_raw:(t,r)=>{let i=z(t,r),a=new Float32Array(16);return a.set(e.HEAPF32.subarray(i/4,16+i/4)),i=a,i},face_tracker_create:e=>M(e),face_tracker_destroy:()=>{I()},face_tracker_model_load_from_memory:(t,r)=>{ce<r.byteLength&&(e._free(ue),ce=r.byteLength,ue=e._malloc(ce));let i=ue,a=r.byteLength;return e.HEAPU8.set(new Uint8Array(r),ue),P(t,i,a)},face_tracker_model_loaded_version:e=>O(e),face_tracker_enabled_set:(e,t)=>S(e,t?1:0),face_tracker_enabled:e=>{let t=B(e);return t=1===t,t},face_tracker_max_faces_set:(e,t)=>D(e,t),face_tracker_max_faces:e=>C(e),face_tracker_anchor_count:e=>U(e),face_tracker_anchor_id:(e,t)=>V(e,t),face_tracker_anchor_pose_raw:(t,r)=>{let i=N(t,r),a=new Float32Array(16);return a.set(e.HEAPF32.subarray(i/4,16+i/4)),i=a,i},face_tracker_anchor_identity_coefficients:(t,r)=>{let i=G(t,r),a=new Float32Array(50);return a.set(e.HEAPF32.subarray(i/4,50+i/4)),i=a,i},face_tracker_anchor_expression_coefficients:(t,r)=>{let i=W(t,r),a=new Float32Array(29);return a.set(e.HEAPF32.subarray(i/4,29+i/4)),i=a,i},face_mesh_create:()=>H(),face_mesh_destroy:()=>{Y()},face_landmark_create:e=>X(e),face_landmark_destroy:()=>{q()},barcode_finder_create:e=>Z(e),barcode_finder_destroy:()=>{j()},barcode_finder_enabled_set:(e,t)=>K(e,t?1:0),barcode_finder_enabled:e=>{let t=J(e);return t=1===t,t},barcode_finder_found_number:e=>$(e),barcode_finder_found_text:(e,t)=>Q(e,t),barcode_finder_found_format:(e,t)=>ee(e,t),barcode_finder_formats:e=>te(e),barcode_finder_formats_set:(e,t)=>re(e,t),instant_world_tracker_create:e=>ie(e),instant_world_tracker_destroy:()=>{ae()},instant_world_tracker_enabled_set:(e,t)=>ne(e,t?1:0),instant_world_tracker_enabled:e=>{let t=oe(e);return t=1===t,t},instant_world_tracker_anchor_pose_raw:t=>{let r=se(t),i=new Float32Array(16);return i.set(e.HEAPF32.subarray(r/4,16+r/4)),r=i,r},instant_world_tracker_anchor_pose_set_from_camera_offset_raw:(e,t,r,i,a)=>_e(e,t,r,i,a)}}(r),t=new n(e,((e,t)=>{S.postOutgoingMessage({p:e,t:"zappar",d:t},[t])}));S.postOutgoingMessage("loaded",[]),S.onIncomingMessage.bind((i=>{var a;switch(i.t){case"zappar":t.processBuffer(i.d),S.postOutgoingMessage({t:"buf",d:i.d},[i.d]);break;case"buf":null===(a=t.serializersByPipelineId.get(i.p))||void 0===a||a.bufferReturn(i.d);break;case"cameraFrameC2S":{let r,a=i,n=t._pipeline_by_instance.get(a.p);n&&(e.pipeline_camera_frame_submit(n,a.d,a.width,a.height,a.token,a.c2d,a.cm,a.userFacing),e.pipeline_frame_update(n),r=e.pipeline_camera_frame_device_attitude(n),t.exploreState());let o={token:a.token,d:a.d,p:a.p,t:"cameraFrameRecycleS2C",att:r};S.postOutgoingMessage(o,[a.d]);break}case"streamC2S":{let a=i;!function(e,t,r,i,a,n,o){O(this,void 0,void 0,(function*(){const s=yield r.getReader();for(;;){let r=yield s.read();if(r.done)return void console.log("Stream done");let u=r.value,f=u.allocationSize();f>U&&(C>0&&e._free(C),C=e._malloc(f),U=f),yield u.copyTo(e.HEAPU8.subarray(C,C+U));let l=V;V++;const d=u.visibleRect.width,p=u.visibleRect.height;let h,b=d,w=p;switch(B){case 270:h=new Float32Array([0,1,0,0,-1,0,0,0,0,0,1,0,1,0,0,1]),b=p,w=d;break;case 180:h=new Float32Array([-1,0,0,0,0,-1,0,0,0,0,1,0,1,1,0,1]);break;case 90:h=new Float32Array([0,-1,0,0,1,0,0,0,0,0,1,0,0,1,0,1]),b=p,w=d;break;default:h=new Float32Array([1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1])}let g=u.clone();a?(c=[-1,1,-1],(_=N)[0]=c[0],_[1]=0,_[2]=0,_[3]=0,_[4]=0,_[5]=c[1],_[6]=0,_[7]=0,_[8]=0,_[9]=0,_[10]=c[2],_[11]=0,_[12]=0,_[13]=0,_[14]=0,_[15]=1):m(N);let y=300*v.dataWidth/320;G[0]=y,G[1]=y,G[2]=.5*v.dataWidth,G[3]=.5*v.dataHeight;const E={token:l,d:g,p:i,t:"videoFrameS2C",userFacing:a,uvTransform:h,w:b,h:w,cameraToDevice:N,cameraModel:G,source:o};S.postOutgoingMessage(E,[E.d,E.uvTransform.buffer]);const A=n._pipeline_by_instance.get(i);A&&(t.pipeline_camera_frame_submit_raw_pointer(A,C,f,W(u.format),d,p,l,N,B,G,a),t.pipeline_frame_update(A),n.exploreState()),u.close()}var _,c}))}(r,e,a.s,a.p,a.userFacing,t,a.source);break}case"cameraToScreenC2S":B=i.r;break;case"imageBitmapC2S":!function(e,t,r,i){const[a,n]=function(){if(!z||!M){const e=new OffscreenCanvas(1,1);if(M=e.getContext("webgl"),!M)throw new Error("Unable to get offscreen GL context");z=new R(M)}return[z,M]}();if(F||(F=n.createTexture(),n.bindTexture(n.TEXTURE_2D,F),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MIN_FILTER,n.LINEAR)),!F)return;(!L||L.byteLength<v.dataWidth*v.dataHeight)&&(console.log("Generating pixel buffer",v.dataWidth*v.dataHeight),L=new ArrayBuffer(v.dataWidth*v.dataHeight)),a.uploadFrame(F,e.i,e.r,e.userFacing);let o=a.readFrame(F,L),s={t:"imageBitmapS2C",dataWidth:o.dataWidth,dataHeight:o.dataHeight,frame:e.i,userFacing:o.userFacing,uvTransform:o.uvTransform||h(),tokenId:e.tokenId,p:e.p};i.postOutgoingMessage(s,[e.i]);let _=r._pipeline_by_instance.get(e.p);_&&(t.pipeline_camera_frame_submit(_,L,o.dataWidth,o.dataHeight,e.tokenId,e.cameraToDevice,e.cameraModel,o.userFacing),t.pipeline_frame_update(_),r.exploreState())}(i,e,t,S)}}))}})}))}let C=0,U=0,V=1;const N=h(),G=new Float32Array([300,300,160,120,0,0]);function W(e){switch(e){case"I420":return l.FRAME_PIXEL_FORMAT_I420;case"I420A":return l.FRAME_PIXEL_FORMAT_I420A;case"I422":return l.FRAME_PIXEL_FORMAT_I422;case"I444":return l.FRAME_PIXEL_FORMAT_I444;case"NV12":return l.FRAME_PIXEL_FORMAT_NV12;case"RGBA":case"RGBX":return l.FRAME_PIXEL_FORMAT_RGBA;case"BGRA":case"BGRX":return l.FRAME_PIXEL_FORMAT_BGRA}return l.FRAME_PIXEL_FORMAT_Y}const H=self;S.onOutgoingMessage.bind((()=>{let e=S.getOutgoingMessages();for(let t of e)H.postMessage(t.msg,t.transferables)}));let Y=e=>{e&&e.data&&"wasm"===e.data.t&&(D(location.href.startsWith("blob")?e.data.url:new URL(r(751),r.b).toString()),H.removeEventListener("message",Y))};H.addEventListener("message",Y),H.addEventListener("message",(e=>{S.postIncomingMessage(e.data)}))})()})();',
              "Worker",
              void 0,
              r.p + "zappar-cv.worker.js"
            );
          }
        },
        477: (e) => {
          "use strict";
          e.exports = function (e, t, r, i) {
            var a = self || window;
            try {
              try {
                var n;
                try {
                  n = new a.Blob([e]);
                } catch (t) {
                  (n = new (a.BlobBuilder ||
                    a.WebKitBlobBuilder ||
                    a.MozBlobBuilder ||
                    a.MSBlobBuilder)()).append(e),
                    (n = n.getBlob());
                }
                var s = a.URL || a.webkitURL,
                  o = s.createObjectURL(n),
                  _ = new a[t](o, r);
                return s.revokeObjectURL(o), _;
              } catch (i) {
                return new a[t](
                  "data:application/javascript,".concat(encodeURIComponent(e)),
                  r
                );
              }
            } catch (e) {
              if (!i) throw Error("Inline worker is not supported");
              return new a[t](i, r);
            }
          };
        },
        698: (e, t, r) => {
          "use strict";
          e.exports = r.p + "b4f46e148a3b3b5aef90.zbin";
        },
        825: (e, t, r) => {
          "use strict";
          e.exports = r.p + "f7b62a3a53b5c9b3222b.zbin";
        },
        367: (e, t, r) => {
          "use strict";
          e.exports = r.p + "482727c0e7dd40d73f5a.zbin";
        },
        751: (e, t, r) => {
          "use strict";
          e.exports = r.p + "ad56c9a01f0d026178a3.wasm";
        },
      },
      t = {};
    function r(i) {
      var a = t[i];
      if (void 0 !== a) return a.exports;
      var n = (t[i] = { exports: {} });
      return e[i].call(n.exports, n, n.exports, r), n.exports;
    }
    (r.m = e),
      (r.amdO = {}),
      (r.n = (e) => {
        var t = e && e.__esModule ? () => e.default : () => e;
        return r.d(t, { a: t }), t;
      }),
      (r.d = (e, t) => {
        for (var i in t)
          r.o(t, i) &&
            !r.o(e, i) &&
            Object.defineProperty(e, i, { enumerable: !0, get: t[i] });
      }),
      (r.u = (e) => e + ".zappar-cv.js"),
      (r.g = (function () {
        if ("object" == typeof globalThis) return globalThis;
        try {
          return this || new Function("return this")();
        } catch (e) {
          if ("object" == typeof window) return window;
        }
      })()),
      (r.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t)),
      (r.r = (e) => {
        "undefined" != typeof Symbol &&
          Symbol.toStringTag &&
          Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
          Object.defineProperty(e, "__esModule", { value: !0 });
      }),
      (() => {
        var e;
        r.g.importScripts && (e = r.g.location + "");
        var t = r.g.document;
        if (!e && t && (t.currentScript && (e = t.currentScript.src), !e)) {
          var i = t.getElementsByTagName("script");
          i.length && (e = i[i.length - 1].src);
        }
        if (!e)
          throw new Error(
            "Automatic publicPath is not supported in this browser"
          );
        (e = e
          .replace(/#.*$/, "")
          .replace(/\?.*$/, "")
          .replace(/\/[^\/]+$/, "/")),
          (r.p = e);
      })(),
      (r.b = document.baseURI || self.location.href);
    var i = {};
    return (
      (() => {
        "use strict";
        var e, t, a, n, s, o;
        r.r(i),
          r.d(i, {
            barcode_format_t: () => e,
            face_landmark_name_t: () => t,
            image_target_type_t: () => o,
            initialize: () => Mt,
            instant_world_tracker_transform_orientation_t: () => a,
            log_level_t: () => n,
          }),
          (function (e) {
            (e[(e.UNKNOWN = 131072)] = "UNKNOWN"),
              (e[(e.AZTEC = 1)] = "AZTEC"),
              (e[(e.CODABAR = 2)] = "CODABAR"),
              (e[(e.CODE_39 = 4)] = "CODE_39"),
              (e[(e.CODE_93 = 8)] = "CODE_93"),
              (e[(e.CODE_128 = 16)] = "CODE_128"),
              (e[(e.DATA_MATRIX = 32)] = "DATA_MATRIX"),
              (e[(e.EAN_8 = 64)] = "EAN_8"),
              (e[(e.EAN_13 = 128)] = "EAN_13"),
              (e[(e.ITF = 256)] = "ITF"),
              (e[(e.MAXICODE = 512)] = "MAXICODE"),
              (e[(e.PDF_417 = 1024)] = "PDF_417"),
              (e[(e.QR_CODE = 2048)] = "QR_CODE"),
              (e[(e.RSS_14 = 4096)] = "RSS_14"),
              (e[(e.RSS_EXPANDED = 8192)] = "RSS_EXPANDED"),
              (e[(e.UPC_A = 16384)] = "UPC_A"),
              (e[(e.UPC_E = 32768)] = "UPC_E"),
              (e[(e.UPC_EAN_EXTENSION = 65536)] = "UPC_EAN_EXTENSION"),
              (e[(e.ALL = 131071)] = "ALL");
          })(e || (e = {})),
          (function (e) {
            (e[(e.EYE_LEFT = 0)] = "EYE_LEFT"),
              (e[(e.EYE_RIGHT = 1)] = "EYE_RIGHT"),
              (e[(e.EAR_LEFT = 2)] = "EAR_LEFT"),
              (e[(e.EAR_RIGHT = 3)] = "EAR_RIGHT"),
              (e[(e.NOSE_BRIDGE = 4)] = "NOSE_BRIDGE"),
              (e[(e.NOSE_TIP = 5)] = "NOSE_TIP"),
              (e[(e.NOSE_BASE = 6)] = "NOSE_BASE"),
              (e[(e.LIP_TOP = 7)] = "LIP_TOP"),
              (e[(e.LIP_BOTTOM = 8)] = "LIP_BOTTOM"),
              (e[(e.MOUTH_CENTER = 9)] = "MOUTH_CENTER"),
              (e[(e.CHIN = 10)] = "CHIN"),
              (e[(e.EYEBROW_LEFT = 11)] = "EYEBROW_LEFT"),
              (e[(e.EYEBROW_RIGHT = 12)] = "EYEBROW_RIGHT");
          })(t || (t = {})),
          (function (e) {
            (e[(e.WORLD = 3)] = "WORLD"),
              (e[(e.MINUS_Z_AWAY_FROM_USER = 4)] = "MINUS_Z_AWAY_FROM_USER"),
              (e[(e.MINUS_Z_HEADING = 5)] = "MINUS_Z_HEADING"),
              (e[(e.UNCHANGED = 6)] = "UNCHANGED");
          })(a || (a = {})),
          (function (e) {
            (e[(e.LOG_LEVEL_NONE = 0)] = "LOG_LEVEL_NONE"),
              (e[(e.LOG_LEVEL_ERROR = 1)] = "LOG_LEVEL_ERROR"),
              (e[(e.LOG_LEVEL_WARNING = 2)] = "LOG_LEVEL_WARNING"),
              (e[(e.LOG_LEVEL_VERBOSE = 3)] = "LOG_LEVEL_VERBOSE");
          })(n || (n = {})),
          (function (e) {
            (e[(e.FRAME_PIXEL_FORMAT_I420 = 0)] = "FRAME_PIXEL_FORMAT_I420"),
              (e[(e.FRAME_PIXEL_FORMAT_I420A = 1)] =
                "FRAME_PIXEL_FORMAT_I420A"),
              (e[(e.FRAME_PIXEL_FORMAT_I422 = 2)] = "FRAME_PIXEL_FORMAT_I422"),
              (e[(e.FRAME_PIXEL_FORMAT_I444 = 3)] = "FRAME_PIXEL_FORMAT_I444"),
              (e[(e.FRAME_PIXEL_FORMAT_NV12 = 4)] = "FRAME_PIXEL_FORMAT_NV12"),
              (e[(e.FRAME_PIXEL_FORMAT_RGBA = 5)] = "FRAME_PIXEL_FORMAT_RGBA"),
              (e[(e.FRAME_PIXEL_FORMAT_BGRA = 6)] = "FRAME_PIXEL_FORMAT_BGRA"),
              (e[(e.FRAME_PIXEL_FORMAT_Y = 7)] = "FRAME_PIXEL_FORMAT_Y");
          })(s || (s = {})),
          (function (e) {
            (e[(e.IMAGE_TRACKER_TYPE_PLANAR = 0)] =
              "IMAGE_TRACKER_TYPE_PLANAR"),
              (e[(e.IMAGE_TRACKER_TYPE_CYLINDRICAL = 1)] =
                "IMAGE_TRACKER_TYPE_CYLINDRICAL"),
              (e[(e.IMAGE_TRACKER_TYPE_CONICAL = 2)] =
                "IMAGE_TRACKER_TYPE_CONICAL");
          })(o || (o = {}));
        class _ {
          constructor(e) {
            (this._messageSender = e),
              (this._freeBufferPool = []),
              (this._buffer = new ArrayBuffer(16)),
              (this._i32View = new Int32Array(this._buffer)),
              (this._f32View = new Float32Array(this._buffer)),
              (this._f64View = new Float64Array(this._buffer)),
              (this._u8View = new Uint8Array(this._buffer)),
              (this._u8cView = new Uint8ClampedArray(this._buffer)),
              (this._u16View = new Uint16Array(this._buffer)),
              (this._u32View = new Uint32Array(this._buffer)),
              (this._offset = 1),
              (this._startOffset = -1),
              (this._timeoutSet = !1),
              (this._appender = {
                int: (e) => this.int(e),
                bool: (e) => this.int(e ? 1 : 0),
                float: (e) => this.float(e),
                string: (e) => this.string(e),
                dataWithLength: (e) => this.arrayBuffer(e),
                type: (e) => this.int(e),
                matrix4x4: (e) => this.float32ArrayBuffer(e),
                matrix3x3: (e) => this.float32ArrayBuffer(e),
                identityCoefficients: (e) => this.float32ArrayBuffer(e),
                expressionCoefficients: (e) => this.float32ArrayBuffer(e),
                cameraModel: (e) => this.float32ArrayBuffer(e),
                timestamp: (e) => this.double(e),
                barcodeFormat: (e) => this.int(e),
                faceLandmarkName: (e) => this.int(e),
                instantTrackerTransformOrientation: (e) => this.int(e),
                logLevel: (e) => this.int(e),
              }),
              this._freeBufferPool.push(new ArrayBuffer(16)),
              this._freeBufferPool.push(new ArrayBuffer(16));
          }
          bufferReturn(e) {
            this._freeBufferPool.push(e);
          }
          _ensureArrayBuffer(e) {
            let t,
              r = 4 * (this._offset + e + 8);
            if (this._buffer && this._buffer.byteLength >= r) return;
            if (!t) {
              let e = r;
              e--,
                (e |= e >> 1),
                (e |= e >> 2),
                (e |= e >> 4),
                (e |= e >> 8),
                (e |= e >> 16),
                e++,
                (t = new ArrayBuffer(e));
            }
            let i = this._buffer ? this._i32View : void 0;
            (this._buffer = t),
              (this._i32View = new Int32Array(this._buffer)),
              (this._f32View = new Float32Array(this._buffer)),
              (this._f64View = new Float64Array(this._buffer)),
              (this._u8View = new Uint8Array(this._buffer)),
              (this._u8cView = new Uint8ClampedArray(this._buffer)),
              (this._u16View = new Uint16Array(this._buffer)),
              (this._u32View = new Uint32Array(this._buffer)),
              i && this._i32View.set(i.subarray(0, this._offset));
          }
          sendMessage(e, t) {
            this._ensureArrayBuffer(4),
              (this._startOffset = this._offset),
              (this._i32View[this._offset + 1] = e),
              (this._offset += 2),
              t(this._appender),
              (this._i32View[this._startOffset] =
                this._offset - this._startOffset),
              (this._startOffset = -1),
              this._sendOneTime();
          }
          _sendOneTime() {
            !1 === this._timeoutSet &&
              ((this._timeoutSet = !0),
              setTimeout(() => {
                (this._timeoutSet = !1), this._send();
              }, 0));
          }
          _send() {
            0 !== this._freeBufferPool.length
              ? ((this._i32View[0] = this._offset),
                this._messageSender(this._buffer),
                (this._buffer = void 0),
                (this._buffer = this._freeBufferPool.pop()),
                (this._i32View = new Int32Array(this._buffer)),
                (this._f32View = new Float32Array(this._buffer)),
                (this._f64View = new Float64Array(this._buffer)),
                (this._u8View = new Uint8Array(this._buffer)),
                (this._u8cView = new Uint8ClampedArray(this._buffer)),
                (this._u16View = new Uint16Array(this._buffer)),
                (this._u32View = new Uint32Array(this._buffer)),
                (this._offset = 1),
                (this._startOffset = -1))
              : this._sendOneTime();
          }
          int(e) {
            this._ensureArrayBuffer(1),
              (this._i32View[this._offset] = e),
              this._offset++;
          }
          double(e) {
            this._ensureArrayBuffer(2),
              this._offset % 2 == 1 && this._offset++,
              (this._f64View[this._offset / 2] = e),
              (this._offset += 2);
          }
          float(e) {
            this._ensureArrayBuffer(1),
              (this._f32View[this._offset] = e),
              this._offset++;
          }
          int32Array(e) {
            this._ensureArrayBuffer(e.length);
            for (let t = 0; t < e.length; ++t)
              this._i32View[this._offset + t] = e[t];
            this._offset += e.length;
          }
          float32Array(e) {
            this._ensureArrayBuffer(e.length);
            for (let t = 0; t < e.length; ++t)
              this._f32View[this._offset + t] = e[t];
            this._offset += e.length;
          }
          booleanArray(e) {
            this._ensureArrayBuffer(e.length);
            for (let t = 0; t < e.length; ++t)
              this._i32View[this._offset + t] = e[t] ? 1 : 0;
            this._offset += e.length;
          }
          uint8ArrayBuffer(e) {
            this._ensureArrayBuffer(e.byteLength / 4),
              (this._i32View[this._offset] = e.byteLength),
              this._offset++,
              this._u8View.set(e, 4 * this._offset),
              (this._offset += e.byteLength >> 2),
              0 != (3 & e.byteLength) && this._offset++;
          }
          arrayBuffer(e) {
            let t = new Uint8Array(e);
            this.uint8ArrayBuffer(t);
          }
          uint8ClampedArrayBuffer(e) {
            this._ensureArrayBuffer(e.byteLength / 4),
              (this._i32View[this._offset] = e.byteLength),
              this._offset++,
              this._u8cView.set(e, 4 * this._offset),
              (this._offset += e.byteLength >> 2),
              0 != (3 & e.byteLength) && this._offset++;
          }
          float32ArrayBuffer(e) {
            this._ensureArrayBuffer(e.byteLength / 4),
              (this._i32View[this._offset] = e.length),
              this._offset++,
              this._f32View.set(e, this._offset),
              (this._offset += e.length);
          }
          uint16ArrayBuffer(e) {
            this._ensureArrayBuffer(e.byteLength / 4),
              (this._i32View[this._offset] = e.length),
              this._offset++;
            let t = 2 * this._offset;
            this._u16View.set(e, t),
              (this._offset += e.length >> 1),
              0 != (1 & e.length) && this._offset++;
          }
          int32ArrayBuffer(e) {
            this._ensureArrayBuffer(e.byteLength / 4),
              (this._i32View[this._offset] = e.length),
              this._offset++,
              this._i32View.set(e, this._offset),
              (this._offset += e.length);
          }
          uint32ArrayBuffer(e) {
            this._ensureArrayBuffer(e.byteLength / 4),
              (this._i32View[this._offset] = e.length),
              this._offset++,
              this._u32View.set(e, this._offset),
              (this._offset += e.length);
          }
          string(e) {
            let t = new TextEncoder().encode(e);
            this._ensureArrayBuffer(t.byteLength / 4),
              (this._i32View[this._offset] = t.byteLength),
              this._offset++,
              this._u8View.set(t, 4 * this._offset),
              (this._offset += t.byteLength >> 2),
              0 != (3 & t.byteLength) && this._offset++;
          }
        }
        class c {
          constructor() {
            (this._buffer = new ArrayBuffer(0)),
              (this._i32View = new Int32Array(this._buffer)),
              (this._f32View = new Float32Array(this._buffer)),
              (this._f64View = new Float64Array(this._buffer)),
              (this._u8View = new Uint8Array(this._buffer)),
              (this._u16View = new Uint16Array(this._buffer)),
              (this._u32View = new Uint32Array(this._buffer)),
              (this._offset = 0),
              (this._length = 0),
              (this._startOffset = -1),
              (this._processor = {
                int: () => this._i32View[this._startOffset++],
                bool: () => 1 === this._i32View[this._startOffset++],
                type: () => this._i32View[this._startOffset++],
                float: () => this._f32View[this._startOffset++],
                timestamp: () => {
                  this._startOffset % 2 == 1 && this._startOffset++;
                  let e = this._f64View[this._startOffset / 2];
                  return (this._startOffset += 2), e;
                },
                string: () => {
                  let e = this._i32View[this._startOffset++],
                    t = new TextDecoder().decode(
                      new Uint8Array(this._buffer, 4 * this._startOffset, e)
                    );
                  return (
                    (this._startOffset += e >> 2),
                    0 != (3 & e) && this._startOffset++,
                    t
                  );
                },
                dataWithLength: () => {
                  let e = this._i32View[this._startOffset++],
                    t = new Uint8Array(e);
                  return (
                    t.set(
                      this._u8View.subarray(
                        4 * this._startOffset,
                        4 * this._startOffset + e
                      )
                    ),
                    (this._startOffset += t.byteLength >> 2),
                    0 != (3 & t.byteLength) && this._startOffset++,
                    t.buffer
                  );
                },
                matrix4x4: () => {
                  let e = this._i32View[this._startOffset++],
                    t = new Float32Array(e);
                  return (
                    t.set(
                      this._f32View.subarray(
                        this._startOffset,
                        this._startOffset + 16
                      )
                    ),
                    (this._startOffset += e),
                    t
                  );
                },
                matrix3x3: () => {
                  let e = this._i32View[this._startOffset++],
                    t = new Float32Array(e);
                  return (
                    t.set(
                      this._f32View.subarray(
                        this._startOffset,
                        this._startOffset + 9
                      )
                    ),
                    (this._startOffset += e),
                    t
                  );
                },
                identityCoefficients: () => {
                  let e = this._i32View[this._startOffset++],
                    t = new Float32Array(e);
                  return (
                    t.set(
                      this._f32View.subarray(
                        this._startOffset,
                        this._startOffset + 50
                      )
                    ),
                    (this._startOffset += e),
                    t
                  );
                },
                expressionCoefficients: () => {
                  let e = this._i32View[this._startOffset++],
                    t = new Float32Array(e);
                  return (
                    t.set(
                      this._f32View.subarray(
                        this._startOffset,
                        this._startOffset + 29
                      )
                    ),
                    (this._startOffset += e),
                    t
                  );
                },
                cameraModel: () => {
                  let e = this._i32View[this._startOffset++],
                    t = new Float32Array(e);
                  return (
                    t.set(
                      this._f32View.subarray(
                        this._startOffset,
                        this._startOffset + 6
                      )
                    ),
                    (this._startOffset += e),
                    t
                  );
                },
                barcodeFormat: () => this._i32View[this._startOffset++],
                faceLandmarkName: () => this._i32View[this._startOffset++],
                instantTrackerTransformOrientation: () =>
                  this._i32View[this._startOffset++],
                logLevel: () => this._i32View[this._startOffset++],
              });
          }
          setData(e) {
            (this._buffer = e),
              (this._i32View = new Int32Array(this._buffer)),
              (this._f32View = new Float32Array(this._buffer)),
              (this._f64View = new Float64Array(this._buffer)),
              (this._u8View = new Uint8Array(this._buffer)),
              (this._u16View = new Uint16Array(this._buffer)),
              (this._u32View = new Uint32Array(this._buffer)),
              (this._offset = 0),
              (this._length = 0),
              e.byteLength >= 4 &&
                ((this._offset = 1), (this._length = this._i32View[0])),
              (this._startOffset = -1);
          }
          hasMessage() {
            return this._offset + 1 < this._length;
          }
          forMessages(e) {
            for (; this.hasMessage(); ) {
              let t = this._i32View[this._offset],
                r = this._i32View[this._offset + 1];
              (this._startOffset = this._offset + 2),
                (this._offset += t),
                e(r, this._processor);
            }
          }
        }
        class l {
          constructor(e) {
            (this._messageSender = e),
              (this._globalState = { log_level: 1 }),
              (this.serializer = new _((e) => {
                this._messageSender(e);
              })),
              (this.deserializer = new c()),
              (this._latestId = 1),
              (this._pipeline_state_by_instance = new Map()),
              (this._camera_source_state_by_instance = new Map()),
              (this._sequence_source_state_by_instance = new Map()),
              (this._image_tracker_state_by_instance = new Map()),
              (this._face_tracker_state_by_instance = new Map()),
              (this._face_mesh_state_by_instance = new Map()),
              (this._face_landmark_state_by_instance = new Map()),
              (this._barcode_finder_state_by_instance = new Map()),
              (this._instant_world_tracker_state_by_instance = new Map()),
              (this.impl = {
                log_level: () => this._globalState.log_level,
                log_level_set: (e) => {
                  this.serializer.sendMessage(34, (t) => {
                    t.logLevel(e);
                  });
                },
                analytics_project_id_set: (e) => {
                  this.serializer.sendMessage(31, (t) => {
                    t.string(e);
                  });
                },
                pipeline_create: () => {
                  let e = this._latestId++,
                    t = {
                      current_frame_user_data: 0,
                      camera_model: new Float32Array([
                        300, 300, 160, 120, 0, 0,
                      ]),
                      camera_pose: new Float32Array([
                        1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1,
                      ]),
                      camera_frame_camera_attitude: new Float32Array([
                        1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1,
                      ]),
                      camera_frame_device_attitude: new Float32Array([
                        1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1,
                      ]),
                      frame_number: 0,
                    };
                  return (
                    this._pipeline_state_by_instance.set(e, t),
                    this.serializer.sendMessage(27, (t) => {
                      t.type(e);
                    }),
                    e
                  );
                },
                pipeline_destroy: (e) => {
                  if (!this._pipeline_state_by_instance.get(e))
                    throw new Error("This object has been destroyed");
                  this._pipeline_state_by_instance.delete(e),
                    this.serializer.sendMessage(28, (t) => {
                      t.type(e);
                    });
                },
                pipeline_frame_update: (e) => {
                  if (!this._pipeline_state_by_instance.get(e))
                    throw new Error("This object has been destroyed");
                  this.serializer.sendMessage(9, (t) => {
                    t.type(e);
                  });
                },
                pipeline_frame_number: (e) => {
                  let t = this._pipeline_state_by_instance.get(e);
                  if (!t) throw new Error("This object has been destroyed");
                  return t.frame_number;
                },
                pipeline_camera_model: (e) => {
                  let t = this._pipeline_state_by_instance.get(e);
                  if (!t) throw new Error("This object has been destroyed");
                  return t.camera_model;
                },
                pipeline_camera_frame_user_data: (e) => {
                  let t = this._pipeline_state_by_instance.get(e);
                  if (!t) throw new Error("This object has been destroyed");
                  return t.current_frame_user_data;
                },
                pipeline_camera_frame_submit: (e, t, r, i, a, n, s, o) => {
                  if (!this._pipeline_state_by_instance.get(e))
                    throw new Error("This object has been destroyed");
                  this.serializer.sendMessage(8, (_) => {
                    _.type(e),
                      _.dataWithLength(t),
                      _.int(r),
                      _.int(i),
                      _.int(a),
                      _.matrix4x4(n),
                      _.cameraModel(s),
                      _.bool(o);
                  });
                },
                pipeline_camera_frame_submit_raw_pointer: (
                  e,
                  t,
                  r,
                  i,
                  a,
                  n,
                  s,
                  o,
                  _,
                  c,
                  l
                ) => {
                  if (!this._pipeline_state_by_instance.get(e))
                    throw new Error("This object has been destroyed");
                },
                pipeline_camera_frame_camera_attitude: (e) => {
                  let t = this._pipeline_state_by_instance.get(e);
                  if (!t) throw new Error("This object has been destroyed");
                  return t.camera_frame_camera_attitude;
                },
                pipeline_camera_frame_device_attitude: (e) => {
                  let t = this._pipeline_state_by_instance.get(e);
                  if (!t) throw new Error("This object has been destroyed");
                  return t.camera_frame_device_attitude;
                },
                pipeline_motion_accelerometer_submit: (e, t, r, i, a) => {
                  if (!this._pipeline_state_by_instance.get(e))
                    throw new Error("This object has been destroyed");
                  this.serializer.sendMessage(10, (n) => {
                    n.type(e),
                      n.timestamp(t),
                      n.float(r),
                      n.float(i),
                      n.float(a);
                  });
                },
                pipeline_motion_rotation_rate_submit: (e, t, r, i, a) => {
                  if (!this._pipeline_state_by_instance.get(e))
                    throw new Error("This object has been destroyed");
                  this.serializer.sendMessage(11, (n) => {
                    n.type(e),
                      n.timestamp(t),
                      n.float(r),
                      n.float(i),
                      n.float(a);
                  });
                },
                pipeline_motion_attitude_submit: (e, t, r, i, a) => {
                  if (!this._pipeline_state_by_instance.get(e))
                    throw new Error("This object has been destroyed");
                  this.serializer.sendMessage(12, (n) => {
                    n.type(e),
                      n.timestamp(t),
                      n.float(r),
                      n.float(i),
                      n.float(a);
                  });
                },
                pipeline_motion_attitude_matrix_submit: (e, t) => {
                  if (!this._pipeline_state_by_instance.get(e))
                    throw new Error("This object has been destroyed");
                  this.serializer.sendMessage(13, (r) => {
                    r.type(e), r.matrix4x4(t);
                  });
                },
                camera_source_create: (e, t) => {
                  let r = this._latestId++;
                  return (
                    this._camera_source_state_by_instance.set(r, {}),
                    this.serializer.sendMessage(29, (i) => {
                      i.type(r), i.type(e), i.string(t);
                    }),
                    r
                  );
                },
                camera_source_destroy: (e) => {
                  if (!this._camera_source_state_by_instance.get(e))
                    throw new Error("This object has been destroyed");
                  this._camera_source_state_by_instance.delete(e),
                    this.serializer.sendMessage(30, (t) => {
                      t.type(e);
                    });
                },
                sequence_source_create: (e) => {
                  let t = this._latestId++;
                  return (
                    this._sequence_source_state_by_instance.set(t, {}),
                    this.serializer.sendMessage(35, (r) => {
                      r.type(t), r.type(e);
                    }),
                    t
                  );
                },
                sequence_source_destroy: (e) => {
                  if (!this._sequence_source_state_by_instance.get(e))
                    throw new Error("This object has been destroyed");
                  this._sequence_source_state_by_instance.delete(e),
                    this.serializer.sendMessage(36, (t) => {
                      t.type(e);
                    });
                },
                image_tracker_create: (e) => {
                  let t = this._latestId++;
                  return (
                    this._image_tracker_state_by_instance.set(t, {
                      enabled: !0,
                      target_loaded_version: -1,
                      anchor_count: 0,
                      anchor_id: [],
                      anchor_pose: [],
                    }),
                    this.serializer.sendMessage(2, (r) => {
                      r.type(t), r.type(e);
                    }),
                    t
                  );
                },
                image_tracker_destroy: (e) => {
                  if (!this._image_tracker_state_by_instance.get(e))
                    throw new Error("This object has been destroyed");
                  this._image_tracker_state_by_instance.delete(e),
                    this.serializer.sendMessage(14, (t) => {
                      t.type(e);
                    });
                },
                image_tracker_target_load_from_memory: (e, t) => {
                  if (!this._image_tracker_state_by_instance.get(e))
                    throw new Error("This object has been destroyed");
                  this.serializer.sendMessage(4, (r) => {
                    r.type(e), r.dataWithLength(t);
                  });
                },
                image_tracker_target_loaded_version: (e) => {
                  let t = this._image_tracker_state_by_instance.get(e);
                  if (!t) throw new Error("This object has been destroyed");
                  return t.target_loaded_version;
                },
                image_tracker_enabled: (e) => {
                  let t = this._image_tracker_state_by_instance.get(e);
                  if (!t) throw new Error("This object has been destroyed");
                  return t.enabled;
                },
                image_tracker_enabled_set: (e, t) => {
                  if (!this._image_tracker_state_by_instance.get(e))
                    throw new Error("This object has been destroyed");
                  this.serializer.sendMessage(3, (r) => {
                    r.type(e), r.bool(t);
                  });
                },
                image_tracker_anchor_count: (e) => {
                  let t = this._image_tracker_state_by_instance.get(e);
                  if (!t) throw new Error("This object has been destroyed");
                  return t.anchor_count;
                },
                image_tracker_anchor_id: (e, t) => {
                  let r = this._image_tracker_state_by_instance.get(e);
                  if (!r) throw new Error("This object has been destroyed");
                  return r.anchor_id[t];
                },
                image_tracker_anchor_pose_raw: (e, t) => {
                  let r = this._image_tracker_state_by_instance.get(e);
                  if (!r) throw new Error("This object has been destroyed");
                  return r.anchor_pose[t];
                },
                face_tracker_create: (e) => {
                  let t = this._latestId++;
                  return (
                    this._face_tracker_state_by_instance.set(t, {
                      enabled: !0,
                      model_loaded: -1,
                      max_faces: 1,
                      anchor_count: 0,
                      anchor_id: [],
                      anchor_pose: [],
                      anchor_identity_coefficients: [],
                      anchor_expression_coefficients: [],
                    }),
                    this.serializer.sendMessage(20, (r) => {
                      r.type(t), r.type(e);
                    }),
                    t
                  );
                },
                face_tracker_destroy: (e) => {
                  if (!this._face_tracker_state_by_instance.get(e))
                    throw new Error("This object has been destroyed");
                  this._face_tracker_state_by_instance.delete(e),
                    this.serializer.sendMessage(21, (t) => {
                      t.type(e);
                    });
                },
                face_tracker_model_load_from_memory: (e, t) => {
                  if (!this._face_tracker_state_by_instance.get(e))
                    throw new Error("This object has been destroyed");
                  this.serializer.sendMessage(22, (r) => {
                    r.type(e), r.dataWithLength(t);
                  });
                },
                face_tracker_model_loaded_version: (e) => {
                  let t = this._face_tracker_state_by_instance.get(e);
                  if (!t) throw new Error("This object has been destroyed");
                  return t.model_loaded;
                },
                face_tracker_enabled_set: (e, t) => {
                  if (!this._face_tracker_state_by_instance.get(e))
                    throw new Error("This object has been destroyed");
                  this.serializer.sendMessage(23, (r) => {
                    r.type(e), r.bool(t);
                  });
                },
                face_tracker_enabled: (e) => {
                  let t = this._face_tracker_state_by_instance.get(e);
                  if (!t) throw new Error("This object has been destroyed");
                  return t.enabled;
                },
                face_tracker_max_faces_set: (e, t) => {
                  if (!this._face_tracker_state_by_instance.get(e))
                    throw new Error("This object has been destroyed");
                  this.serializer.sendMessage(24, (r) => {
                    r.type(e), r.int(t);
                  });
                },
                face_tracker_max_faces: (e) => {
                  let t = this._face_tracker_state_by_instance.get(e);
                  if (!t) throw new Error("This object has been destroyed");
                  return t.max_faces;
                },
                face_tracker_anchor_count: (e) => {
                  let t = this._face_tracker_state_by_instance.get(e);
                  if (!t) throw new Error("This object has been destroyed");
                  return t.anchor_count;
                },
                face_tracker_anchor_id: (e, t) => {
                  let r = this._face_tracker_state_by_instance.get(e);
                  if (!r) throw new Error("This object has been destroyed");
                  return r.anchor_id[t];
                },
                face_tracker_anchor_pose_raw: (e, t) => {
                  let r = this._face_tracker_state_by_instance.get(e);
                  if (!r) throw new Error("This object has been destroyed");
                  return r.anchor_pose[t];
                },
                face_tracker_anchor_identity_coefficients: (e, t) => {
                  let r = this._face_tracker_state_by_instance.get(e);
                  if (!r) throw new Error("This object has been destroyed");
                  return r.anchor_identity_coefficients[t];
                },
                face_tracker_anchor_expression_coefficients: (e, t) => {
                  let r = this._face_tracker_state_by_instance.get(e);
                  if (!r) throw new Error("This object has been destroyed");
                  return r.anchor_expression_coefficients[t];
                },
                face_mesh_create: () => {
                  let e = this._latestId++;
                  return (
                    this._face_mesh_state_by_instance.set(e, {}),
                    this.serializer.sendMessage(25, (t) => {
                      t.type(e);
                    }),
                    e
                  );
                },
                face_mesh_destroy: (e) => {
                  if (!this._face_mesh_state_by_instance.get(e))
                    throw new Error("This object has been destroyed");
                  this._face_mesh_state_by_instance.delete(e),
                    this.serializer.sendMessage(26, (t) => {
                      t.type(e);
                    });
                },
                face_landmark_create: (e) => {
                  let t = this._latestId++;
                  return (
                    this._face_landmark_state_by_instance.set(t, {}),
                    this.serializer.sendMessage(32, (r) => {
                      r.type(t), r.faceLandmarkName(e);
                    }),
                    t
                  );
                },
                face_landmark_destroy: (e) => {
                  if (!this._face_landmark_state_by_instance.get(e))
                    throw new Error("This object has been destroyed");
                  this._face_landmark_state_by_instance.delete(e),
                    this.serializer.sendMessage(33, (t) => {
                      t.type(e);
                    });
                },
                barcode_finder_create: (e) => {
                  let t = this._latestId++;
                  return (
                    this._barcode_finder_state_by_instance.set(t, {
                      enabled: !0,
                      number_found: 0,
                      found_text: [],
                      found_format: [],
                      formats: 131071,
                    }),
                    this.serializer.sendMessage(16, (r) => {
                      r.type(t), r.type(e);
                    }),
                    t
                  );
                },
                barcode_finder_destroy: (e) => {
                  if (!this._barcode_finder_state_by_instance.get(e))
                    throw new Error("This object has been destroyed");
                  this._barcode_finder_state_by_instance.delete(e),
                    this.serializer.sendMessage(17, (t) => {
                      t.type(e);
                    });
                },
                barcode_finder_enabled_set: (e, t) => {
                  if (!this._barcode_finder_state_by_instance.get(e))
                    throw new Error("This object has been destroyed");
                  this.serializer.sendMessage(18, (r) => {
                    r.type(e), r.bool(t);
                  });
                },
                barcode_finder_enabled: (e) => {
                  let t = this._barcode_finder_state_by_instance.get(e);
                  if (!t) throw new Error("This object has been destroyed");
                  return t.enabled;
                },
                barcode_finder_found_number: (e) => {
                  let t = this._barcode_finder_state_by_instance.get(e);
                  if (!t) throw new Error("This object has been destroyed");
                  return t.number_found;
                },
                barcode_finder_found_text: (e, t) => {
                  let r = this._barcode_finder_state_by_instance.get(e);
                  if (!r) throw new Error("This object has been destroyed");
                  return r.found_text[t];
                },
                barcode_finder_found_format: (e, t) => {
                  let r = this._barcode_finder_state_by_instance.get(e);
                  if (!r) throw new Error("This object has been destroyed");
                  return r.found_format[t];
                },
                barcode_finder_formats: (e) => {
                  let t = this._barcode_finder_state_by_instance.get(e);
                  if (!t) throw new Error("This object has been destroyed");
                  return t.formats;
                },
                barcode_finder_formats_set: (e, t) => {
                  if (!this._barcode_finder_state_by_instance.get(e))
                    throw new Error("This object has been destroyed");
                  this.serializer.sendMessage(19, (r) => {
                    r.type(e), r.barcodeFormat(t);
                  });
                },
                instant_world_tracker_create: (e) => {
                  let t = this._latestId++,
                    r = {
                      enabled: !0,
                      pose: new Float32Array([
                        1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1,
                      ]),
                    };
                  return (
                    this._instant_world_tracker_state_by_instance.set(t, r),
                    this.serializer.sendMessage(5, (r) => {
                      r.type(t), r.type(e);
                    }),
                    t
                  );
                },
                instant_world_tracker_destroy: (e) => {
                  if (!this._instant_world_tracker_state_by_instance.get(e))
                    throw new Error("This object has been destroyed");
                  this._instant_world_tracker_state_by_instance.delete(e),
                    this.serializer.sendMessage(15, (t) => {
                      t.type(e);
                    });
                },
                instant_world_tracker_enabled_set: (e, t) => {
                  if (!this._instant_world_tracker_state_by_instance.get(e))
                    throw new Error("This object has been destroyed");
                  this.serializer.sendMessage(6, (r) => {
                    r.type(e), r.bool(t);
                  });
                },
                instant_world_tracker_enabled: (e) => {
                  let t = this._instant_world_tracker_state_by_instance.get(e);
                  if (!t) throw new Error("This object has been destroyed");
                  return t.enabled;
                },
                instant_world_tracker_anchor_pose_raw: (e) => {
                  let t = this._instant_world_tracker_state_by_instance.get(e);
                  if (!t) throw new Error("This object has been destroyed");
                  return t.pose;
                },
                instant_world_tracker_anchor_pose_set_from_camera_offset_raw: (
                  e,
                  t,
                  r,
                  i,
                  a
                ) => {
                  if (!this._instant_world_tracker_state_by_instance.get(e))
                    throw new Error("This object has been destroyed");
                  this.serializer.sendMessage(7, (n) => {
                    n.type(e),
                      n.float(t),
                      n.float(r),
                      n.float(i),
                      n.instantTrackerTransformOrientation(a);
                  });
                },
              });
          }
          processMessages(e) {
            this.deserializer.setData(e),
              this.deserializer.forMessages((e, t) => {
                switch (e) {
                  case 7: {
                    let e = t.type(),
                      r = this._pipeline_state_by_instance.get(e);
                    if (!r) return;
                    r.frame_number = t.int();
                    break;
                  }
                  case 6: {
                    let e = t.type(),
                      r = this._pipeline_state_by_instance.get(e);
                    if (!r) return;
                    r.camera_model = t.cameraModel();
                    break;
                  }
                  case 5: {
                    let e = t.type(),
                      r = this._pipeline_state_by_instance.get(e);
                    if (!r) return;
                    r.current_frame_user_data = t.int();
                    break;
                  }
                  case 11: {
                    let e = t.type(),
                      r = this._pipeline_state_by_instance.get(e);
                    if (!r) return;
                    r.camera_frame_camera_attitude = t.matrix4x4();
                    break;
                  }
                  case 12: {
                    let e = t.type(),
                      r = this._pipeline_state_by_instance.get(e);
                    if (!r) return;
                    r.camera_frame_device_attitude = t.matrix4x4();
                    break;
                  }
                  case 19: {
                    let e = t.type(),
                      r = this._image_tracker_state_by_instance.get(e);
                    if (!r) return;
                    r.target_loaded_version = t.int();
                    break;
                  }
                  case 1: {
                    let e = t.type(),
                      r = this._image_tracker_state_by_instance.get(e);
                    if (!r) return;
                    r.anchor_count = t.int();
                    break;
                  }
                  case 2: {
                    let e = t.type(),
                      r = this._image_tracker_state_by_instance.get(e);
                    if (!r) return;
                    let i = t.int();
                    r.anchor_id[i] = t.string();
                    break;
                  }
                  case 3: {
                    let e = t.type(),
                      r = this._image_tracker_state_by_instance.get(e);
                    if (!r) return;
                    let i = t.int();
                    r.anchor_pose[i] = t.matrix4x4();
                    break;
                  }
                  case 18: {
                    let e = t.type(),
                      r = this._face_tracker_state_by_instance.get(e);
                    if (!r) return;
                    r.model_loaded = t.int();
                    break;
                  }
                  case 13: {
                    let e = t.type(),
                      r = this._face_tracker_state_by_instance.get(e);
                    if (!r) return;
                    r.anchor_count = t.int();
                    break;
                  }
                  case 14: {
                    let e = t.type(),
                      r = this._face_tracker_state_by_instance.get(e);
                    if (!r) return;
                    let i = t.int();
                    r.anchor_id[i] = t.string();
                    break;
                  }
                  case 15: {
                    let e = t.type(),
                      r = this._face_tracker_state_by_instance.get(e);
                    if (!r) return;
                    let i = t.int();
                    r.anchor_pose[i] = t.matrix4x4();
                    break;
                  }
                  case 16: {
                    let e = t.type(),
                      r = this._face_tracker_state_by_instance.get(e);
                    if (!r) return;
                    let i = t.int();
                    r.anchor_identity_coefficients[i] =
                      t.identityCoefficients();
                    break;
                  }
                  case 17: {
                    let e = t.type(),
                      r = this._face_tracker_state_by_instance.get(e);
                    if (!r) return;
                    let i = t.int();
                    r.anchor_expression_coefficients[i] =
                      t.expressionCoefficients();
                    break;
                  }
                  case 8: {
                    let e = t.type(),
                      r = this._barcode_finder_state_by_instance.get(e);
                    if (!r) return;
                    r.number_found = t.int();
                    break;
                  }
                  case 9: {
                    let e = t.type(),
                      r = this._barcode_finder_state_by_instance.get(e);
                    if (!r) return;
                    let i = t.int();
                    r.found_text[i] = t.string();
                    break;
                  }
                  case 10: {
                    let e = t.type(),
                      r = this._barcode_finder_state_by_instance.get(e);
                    if (!r) return;
                    let i = t.int();
                    r.found_format[i] = t.barcodeFormat();
                    break;
                  }
                  case 4: {
                    let e = t.type(),
                      r = this._instant_world_tracker_state_by_instance.get(e);
                    if (!r) return;
                    r.pose = t.matrix4x4();
                    break;
                  }
                }
              });
          }
        }
        function u(e, t, r) {
          let i = e.createShader(t);
          if (!i) throw new Error("Unable to create shader");
          e.shaderSource(i, r), e.compileShader(i);
          let a = e.getShaderInfoLog(i);
          if (a && a.trim().length > 0)
            throw new Error("Shader compile error: " + a);
          return i;
        }
        function d(e, t) {
          e.linkProgram(t);
          let r = e.getProgramInfoLog(t);
          if (r && r.trim().length > 0) throw new Error("Unable to link: " + r);
        }
        let f,
          h,
          p,
          m = {};
        function g(e) {
          if (p) return p;
          if (((p = e.createBuffer()), !p))
            throw new Error("Unable to create buffer object");
          return (
            e.bindBuffer(e.ARRAY_BUFFER, p),
            e.bufferData(
              e.ARRAY_BUFFER,
              new Float32Array([0, 1, 0, 0, 1, 1, 1, 0]),
              e.STATIC_DRAW
            ),
            e.bindBuffer(e.ARRAY_BUFFER, null),
            p
          );
        }
        function b(e) {
          if (f) return f;
          let t = e.createProgram();
          if (!t) throw new Error("Unable to create program");
          let r = u(
              e,
              e.VERTEX_SHADER,
              "\n#ifndef GL_ES\n#define highp\n#define mediump\n#define lowp\n#endif\n\nuniform mat4 projMatrix;\nuniform mat4 cameraMatrix;\nuniform mat4 modelViewMatrix;\nattribute vec4 position;\nattribute vec2 textureCoord;\n\nvarying highp vec2 vTextureCoord;\n\nvoid main()\n{\n    gl_Position = projMatrix * cameraMatrix * modelViewMatrix * position;\n    vTextureCoord = textureCoord;\n}"
            ),
            i = u(
              e,
              e.FRAGMENT_SHADER,
              "\n#define highp mediump\n#ifdef GL_ES\n    // define default precision for float, vec, mat.\n    precision highp float;\n#else\n#define highp\n#define mediump\n#define lowp\n#endif\n\nvarying highp vec2 vTextureCoord;\nuniform sampler2D skinSampler;\n\nvoid main()\n{\n    gl_FragColor = texture2D(skinSampler, vTextureCoord);\n}"
            );
          e.attachShader(t, r), e.attachShader(t, i), d(e, t);
          let a = e.getUniformLocation(t, "projMatrix");
          if (!a) throw new Error("Unable to get uniform location projMatrix");
          let n = e.getUniformLocation(t, "modelViewMatrix");
          if (!n)
            throw new Error("Unable to get uniform location modelViewMatrix");
          let s = e.getUniformLocation(t, "cameraMatrix");
          if (!s)
            throw new Error("Unable to get uniform location cameraMatrix");
          let o = e.getUniformLocation(t, "skinSampler");
          if (!o) throw new Error("Unable to get uniform location skinSampler");
          return (
            (f = {
              prog: t,
              unif_matrix: n,
              unif_proj: a,
              unif_camera: s,
              unif_skinSampler: o,
              attr_position: e.getAttribLocation(t, "position"),
              attr_textureCoord: e.getAttribLocation(t, "textureCoord"),
            }),
            f
          );
        }
        var w = "undefined" != typeof Float32Array ? Float32Array : Array;
        function v() {
          var e = new w(16);
          return (
            w != Float32Array &&
              ((e[1] = 0),
              (e[2] = 0),
              (e[3] = 0),
              (e[4] = 0),
              (e[6] = 0),
              (e[7] = 0),
              (e[8] = 0),
              (e[9] = 0),
              (e[11] = 0),
              (e[12] = 0),
              (e[13] = 0),
              (e[14] = 0)),
            (e[0] = 1),
            (e[5] = 1),
            (e[10] = 1),
            (e[15] = 1),
            e
          );
        }
        function y(e, t) {
          var r = t[0],
            i = t[1],
            a = t[2],
            n = t[3],
            s = t[4],
            o = t[5],
            _ = t[6],
            c = t[7],
            l = t[8],
            u = t[9],
            d = t[10],
            f = t[11],
            h = t[12],
            p = t[13],
            m = t[14],
            g = t[15],
            b = r * o - i * s,
            w = r * _ - a * s,
            v = r * c - n * s,
            y = i * _ - a * o,
            E = i * c - n * o,
            A = a * c - n * _,
            T = l * p - u * h,
            R = l * m - d * h,
            x = l * g - f * h,
            k = u * m - d * p,
            F = u * g - f * p,
            L = d * g - f * m,
            M = b * L - w * F + v * k + y * x - E * R + A * T;
          return M
            ? ((M = 1 / M),
              (e[0] = (o * L - _ * F + c * k) * M),
              (e[1] = (a * F - i * L - n * k) * M),
              (e[2] = (p * A - m * E + g * y) * M),
              (e[3] = (d * E - u * A - f * y) * M),
              (e[4] = (_ * x - s * L - c * R) * M),
              (e[5] = (r * L - a * x + n * R) * M),
              (e[6] = (m * v - h * A - g * w) * M),
              (e[7] = (l * A - d * v + f * w) * M),
              (e[8] = (s * F - o * x + c * T) * M),
              (e[9] = (i * x - r * F - n * T) * M),
              (e[10] = (h * E - p * v + g * b) * M),
              (e[11] = (u * v - l * E - f * b) * M),
              (e[12] = (o * R - s * k - _ * T) * M),
              (e[13] = (r * k - i * R + a * T) * M),
              (e[14] = (p * w - h * y - m * b) * M),
              (e[15] = (l * y - u * w + d * b) * M),
              e)
            : null;
        }
        function E(e, t, r) {
          var i = t[0],
            a = t[1],
            n = t[2],
            s = t[3],
            o = t[4],
            _ = t[5],
            c = t[6],
            l = t[7],
            u = t[8],
            d = t[9],
            f = t[10],
            h = t[11],
            p = t[12],
            m = t[13],
            g = t[14],
            b = t[15],
            w = r[0],
            v = r[1],
            y = r[2],
            E = r[3];
          return (
            (e[0] = w * i + v * o + y * u + E * p),
            (e[1] = w * a + v * _ + y * d + E * m),
            (e[2] = w * n + v * c + y * f + E * g),
            (e[3] = w * s + v * l + y * h + E * b),
            (w = r[4]),
            (v = r[5]),
            (y = r[6]),
            (E = r[7]),
            (e[4] = w * i + v * o + y * u + E * p),
            (e[5] = w * a + v * _ + y * d + E * m),
            (e[6] = w * n + v * c + y * f + E * g),
            (e[7] = w * s + v * l + y * h + E * b),
            (w = r[8]),
            (v = r[9]),
            (y = r[10]),
            (E = r[11]),
            (e[8] = w * i + v * o + y * u + E * p),
            (e[9] = w * a + v * _ + y * d + E * m),
            (e[10] = w * n + v * c + y * f + E * g),
            (e[11] = w * s + v * l + y * h + E * b),
            (w = r[12]),
            (v = r[13]),
            (y = r[14]),
            (E = r[15]),
            (e[12] = w * i + v * o + y * u + E * p),
            (e[13] = w * a + v * _ + y * d + E * m),
            (e[14] = w * n + v * c + y * f + E * g),
            (e[15] = w * s + v * l + y * h + E * b),
            e
          );
        }
        function A(e, t) {
          return (
            (e[0] = 1),
            (e[1] = 0),
            (e[2] = 0),
            (e[3] = 0),
            (e[4] = 0),
            (e[5] = 1),
            (e[6] = 0),
            (e[7] = 0),
            (e[8] = 0),
            (e[9] = 0),
            (e[10] = 1),
            (e[11] = 0),
            (e[12] = t[0]),
            (e[13] = t[1]),
            (e[14] = t[2]),
            (e[15] = 1),
            e
          );
        }
        function T(e, t) {
          return (
            (e[0] = t[0]),
            (e[1] = 0),
            (e[2] = 0),
            (e[3] = 0),
            (e[4] = 0),
            (e[5] = t[1]),
            (e[6] = 0),
            (e[7] = 0),
            (e[8] = 0),
            (e[9] = 0),
            (e[10] = t[2]),
            (e[11] = 0),
            (e[12] = 0),
            (e[13] = 0),
            (e[14] = 0),
            (e[15] = 1),
            e
          );
        }
        function R(e, t, r) {
          var i,
            a,
            n,
            s = r[0],
            o = r[1],
            _ = r[2],
            c = Math.hypot(s, o, _);
          return c < 1e-6
            ? null
            : ((s *= c = 1 / c),
              (o *= c),
              (_ *= c),
              (i = Math.sin(t)),
              (n = 1 - (a = Math.cos(t))),
              (e[0] = s * s * n + a),
              (e[1] = o * s * n + _ * i),
              (e[2] = _ * s * n - o * i),
              (e[3] = 0),
              (e[4] = s * o * n - _ * i),
              (e[5] = o * o * n + a),
              (e[6] = _ * o * n + s * i),
              (e[7] = 0),
              (e[8] = s * _ * n + o * i),
              (e[9] = o * _ * n - s * i),
              (e[10] = _ * _ * n + a),
              (e[11] = 0),
              (e[12] = 0),
              (e[13] = 0),
              (e[14] = 0),
              (e[15] = 1),
              e);
        }
        function x() {
          var e = new w(3);
          return w != Float32Array && ((e[0] = 0), (e[1] = 0), (e[2] = 0)), e;
        }
        function k(e, t) {
          var r = t[0],
            i = t[1],
            a = t[2],
            n = r * r + i * i + a * a;
          return (
            n > 0 && (n = 1 / Math.sqrt(n)),
            (e[0] = t[0] * n),
            (e[1] = t[1] * n),
            (e[2] = t[2] * n),
            e
          );
        }
        function F(e, t, r) {
          var i = t[0],
            a = t[1],
            n = t[2],
            s = r[0],
            o = r[1],
            _ = r[2];
          return (
            (e[0] = a * _ - n * o),
            (e[1] = n * s - i * _),
            (e[2] = i * o - a * s),
            e
          );
        }
        function L(e, t, r) {
          var i = t[0],
            a = t[1],
            n = t[2],
            s = r[3] * i + r[7] * a + r[11] * n + r[15];
          return (
            (s = s || 1),
            (e[0] = (r[0] * i + r[4] * a + r[8] * n + r[12]) / s),
            (e[1] = (r[1] * i + r[5] * a + r[9] * n + r[13]) / s),
            (e[2] = (r[2] * i + r[6] * a + r[10] * n + r[14]) / s),
            e
          );
        }
        function M(e, t, r, i = 0.01, a = 100) {
          let n = 2 * e[2],
            s = 2 * e[3],
            o = v();
          !(function (e, t, r, i, a, n, s) {
            var o = 1 / (r - t),
              _ = 1 / (a - i),
              c = 1 / (n - s);
            (e[0] = 2 * n * o),
              (e[1] = 0),
              (e[2] = 0),
              (e[3] = 0),
              (e[4] = 0),
              (e[5] = 2 * n * _),
              (e[6] = 0),
              (e[7] = 0),
              (e[8] = (r + t) * o),
              (e[9] = (a + i) * _),
              (e[10] = (s + n) * c),
              (e[11] = -1),
              (e[12] = 0),
              (e[13] = 0),
              (e[14] = s * n * 2 * c),
              (e[15] = 0);
          })(
            o,
            (i * (-0.5 - e[2])) / e[0],
            (i * (n - 0.5 - e[2])) / e[0],
            (i * (s - 0.5 - e[3])) / e[1],
            (i * (-0.5 - e[3])) / e[1],
            i,
            a
          ),
            (o[4] *= -1),
            (o[5] *= -1),
            (o[6] *= -1),
            (o[7] *= -1);
          let _ = v();
          T(_, [0.5 * n, 0.5 * s, 1]),
            E(o, _, o),
            R(_, (I(!1) * Math.PI) / 180, [0, 0, 1]),
            E(o, _, o);
          let c = x();
          (c[0] = n), (c[1] = s), (c[2] = 0), L(c, c, _);
          let l = Math.abs(c[0]),
            u = Math.abs(c[1]),
            d = 1;
          return (
            (d = l / t > u / r ? r / u : t / l),
            T(_, [d, d, 1]),
            E(o, _, o),
            T(_, [2 / t, 2 / r, 1]),
            E(o, _, o),
            R(_, (I(!1) * Math.PI) / -180, [0, 0, 1]),
            E(o, o, _),
            o
          );
        }
        function I(e) {
          if (window.screen.orientation)
            switch (window.screen.orientation.type) {
              case "portrait-primary":
                return e ? 90 : 270;
              case "landscape-secondary":
                return 180;
              case "portrait-secondary":
                return e ? 270 : 90;
              default:
                return 0;
            }
          else if (void 0 !== window.orientation)
            switch (window.orientation) {
              case 0:
                return e ? 90 : 270;
              case 90:
                return 0;
              case 180:
                return e ? 270 : 90;
              case -90:
                return 180;
            }
          return 0;
        }
        Math.random,
          Math.PI,
          Math.hypot ||
            (Math.hypot = function () {
              for (var e = 0, t = arguments.length; t--; )
                e += arguments[t] * arguments[t];
              return Math.sqrt(e);
            }),
          x();
        class S {
          constructor() {
            this._funcs = [];
          }
          bind(e) {
            this._funcs.push(e);
          }
          unbind(e) {
            let t = this._funcs.indexOf(e);
            t > -1 && this._funcs.splice(t, 1);
          }
          emit() {
            for (var e = 0, t = this._funcs.length; e < t; e++)
              this._funcs[e]();
          }
        }
        class U {
          constructor() {
            this._funcs = [];
          }
          bind(e) {
            this._funcs.push(e);
          }
          unbind(e) {
            let t = this._funcs.indexOf(e);
            t > -1 && this._funcs.splice(t, 1);
          }
          emit(e) {
            for (var t = 0, r = this._funcs.length; t < r; t++)
              this._funcs[t](e);
          }
        }
        let C = new (class {
          constructor() {
            (this.onOutgoingMessage = new S()),
              (this.onIncomingMessage = new U()),
              (this._outgoingMessages = []);
          }
          postIncomingMessage(e) {
            this.onIncomingMessage.emit(e);
          }
          postOutgoingMessage(e, t) {
            this._outgoingMessages.push({ msg: e, transferables: t }),
              this.onOutgoingMessage.emit();
          }
          getOutgoingMessages() {
            let e = this._outgoingMessages;
            return (this._outgoingMessages = []), e;
          }
        })();
        function D(e) {
          return (
            (t = this),
            (i = void 0),
            (n = function* () {
              var t;
              function i() {
                let t = C.getOutgoingMessages();
                for (let r of t) e.postMessage(r.msg, r.transferables);
              }
              e ||
                (e = new Worker(new URL(r.p + r.u(56), r.b), { type: void 0 })),
                e.postMessage({
                  t: "wasm",
                  url: new URL(r(751), r.b).toString(),
                }),
                yield ((t = e),
                new Promise((e) => {
                  let r = (i) => {
                    "loaded" === i.data &&
                      (t.removeEventListener("message", r), e());
                  };
                  t.addEventListener("message", r);
                })),
                C.onOutgoingMessage.bind(i),
                i(),
                e.addEventListener("message", (e) => {
                  C.postIncomingMessage(e.data);
                });
            }),
            new ((a = void 0) || (a = Promise))(function (e, r) {
              function s(e) {
                try {
                  _(n.next(e));
                } catch (e) {
                  r(e);
                }
              }
              function o(e) {
                try {
                  _(n.throw(e));
                } catch (e) {
                  r(e);
                }
              }
              function _(t) {
                var r;
                t.done
                  ? e(t.value)
                  : ((r = t.value),
                    r instanceof a
                      ? r
                      : new a(function (e) {
                          e(r);
                        })).then(s, o);
              }
              _((n = n.apply(t, i || [])).next());
            })
          );
          var t, i, a, n;
        }
        var P = r(238),
          B = function (e, t, r, i) {
            return new (r || (r = Promise))(function (a, n) {
              function s(e) {
                try {
                  _(i.next(e));
                } catch (e) {
                  n(e);
                }
              }
              function o(e) {
                try {
                  _(i.throw(e));
                } catch (e) {
                  n(e);
                }
              }
              function _(e) {
                var t;
                e.done
                  ? a(e.value)
                  : ((t = e.value),
                    t instanceof r
                      ? t
                      : new r(function (e) {
                          e(t);
                        })).then(s, o);
              }
              _((i = i.apply(e, t || [])).next());
            });
          };
        let O = new P.UAParser(),
          z = !1,
          V = !1,
          N = !1,
          G = !1;
        function H() {
          return B(this, void 0, void 0, function* () {
            if (navigator.permissions && navigator.permissions.query)
              try {
                let e = yield navigator.permissions.query({ name: "camera" });
                (N = "denied" === e.state), (z = "granted" === e.state);
              } catch (e) {}
          });
        }
        function W() {
          return z;
        }
        function Y() {
          return V;
        }
        function X() {
          return N;
        }
        function q() {
          return G;
        }
        function j() {
          return N || G;
        }
        function Z() {
          return z && V;
        }
        function K() {
          return B(this, void 0, void 0, function* () {
            yield $(), yield Q();
          });
        }
        function Q() {
          return B(this, void 0, void 0, function* () {
            try {
              (yield navigator.mediaDevices.getUserMedia({ video: !0 }))
                .getTracks()
                .forEach((e) => e.stop()),
                (z = !0),
                (N = !1);
            } catch (e) {
              (z = !1), (N = !0);
            }
          });
        }
        function $() {
          return B(this, void 0, void 0, function* () {
            if (
              window.DeviceOrientationEvent &&
              window.DeviceOrientationEvent.requestPermission &&
              "granted" !==
                (yield window.DeviceOrientationEvent.requestPermission())
            )
              return (V = !1), (G = !0), !1;
            (V = !0), (G = !1);
          });
        }
        function J() {
          return B(this, void 0, void 0, function* () {
            if ((yield H(), Z())) return !0;
            let e = document.createElement("div");
            e.classList.add("zappar-permission-request"),
              (e.innerHTML =
                '\n    <style>\n        .zappar-permission-request {\n            position: fixed;\n            width: 100%;\n            height: 100%;\n            top: 0px;\n            left: 0px;\n            z-index: 1000;\n            background-color: rgba(0, 0, 0, 0.9);\n            font-family: sans-serif;\n            color: white;\n            display: flex;\n            flex-direction: column;\n            align-items: center;\n            justify-content: center;\n        }\n        .zappar-inner {\n            max-width: 400px;\n            text-align: center;\n        }\n        .zappar-title {\n            font-size: 20px;\n        }\n        .zappar-text {\n            font-size: 14px;\n            padding: 15px;\n        }\n        .zappar-inner > button {\n            background: none;\n            outline: none;\n            border: 2px solid white;\n            border-radius: 10px;\n            color: white;\n            padding: 10px 40px;\n            text-transform: uppercase;\n        }\n    </style>\n    <div class="zappar-inner">\n        <div class="zappar-title">اجازه هست؟</div>\n        <div class="zappar-text"> برای اینکه از واقعیت افزوده استفاده کنین باید اجازه دسترسی به دوربین رو بهمون بدین. ما هیچ گونه اطلاعاتی از شما دریافت نمیکنیم و این تجربه تماما آفلاینه</div>\n        <button id="zappar-permission-request-button">اجازه دادن</button>\n    </div>\n'),
              document.body.append(e);
            let t = e.querySelector("#zappar-permission-request-button");
            return yield new Promise((r) => {
              null == t ||
                t.addEventListener("click", () =>
                  B(this, void 0, void 0, function* () {
                    for (yield K(), e.remove(); ; ) {
                      if (
                        (yield new Promise((e) =>
                          requestAnimationFrame(() => e())
                        ),
                        j())
                      )
                        return void r(!1);
                      if (Z()) return void r(!0);
                    }
                  })
                );
            });
          });
        }
        function ee() {
          "Chrome" === O.getBrowser().name
            ? (function () {
                let e = document.createElement("div");
                e.classList.add("zappar-permission-request"),
                  (e.innerHTML =
                    '\n    <style>\n        .zappar-permission-request {\n            position: fixed;\n            width: 100%;\n            height: 100%;\n            top: 0px;\n            left: 0px;\n            z-index: 1000;\n            background-color: rgba(0, 0, 0, 0.9);\n            font-family: sans-serif;\n            color: white;\n            display: flex;\n            flex-direction: column;\n            align-items: center;\n            justify-content: center;\n        }\n        .zappar-inner {\n            width: 400px;\n            text-align: center;\n        }\n        .zappar-title {\n            font-size: 20px;\n        }\n        .zappar-text {\n            font-size: 14px;\n            padding: 15px;\n        }\n        .zappar-inner > button {\n            background: none;\n            outline: none;\n            border: 2px solid white;\n            border-radius: 10px;\n            color: white;\n            padding: 10px 40px;\n            text-transform: uppercase;\n        }\n    </style>\n    <div class="zappar-inner">\n        <div class="zappar-title">Permission is Needed</div>\n        <div class="zappar-text">Permission to access your device\'s camera and motion sensors is necessary for this experience.<br/><br/>To grant access, please tap the ! button in the address bar of your browser, then "Site settings", and finally "Clear and reset". You can then reload the page to try again.</div>\n        <button id="zappar-permission-reload-button">Reload</button>\n    </div>\n'),
                  document.body.append(e);
                let t = e.querySelector("#zappar-permission-reload-button");
                null == t ||
                  t.addEventListener("click", () => window.location.reload());
              })()
            : (function () {
                let e = document.createElement("div");
                e.classList.add("zappar-permission-request"),
                  (e.innerHTML =
                    '\n    <style>\n        .zappar-permission-request {\n            position: fixed;\n            width: 100%;\n            height: 100%;\n            top: 0px;\n            left: 0px;\n            z-index: 1000;\n            background-color: rgba(0, 0, 0, 0.9);\n            font-family: sans-serif;\n            color: white;\n            display: flex;\n            flex-direction: column;\n            align-items: center;\n            justify-content: center;\n        }\n        .zappar-inner {\n            max-width: 400px;\n            text-align: center;\n        }\n        .zappar-title {\n            font-size: 20px;\n        }\n        .zappar-text {\n            font-size: 14px;\n            padding: 15px;\n        }\n        .zappar-inner > button {\n            background: none;\n            outline: none;\n            border: 2px solid white;\n            border-radius: 10px;\n            color: white;\n            padding: 10px 40px;\n            text-transform: uppercase;\n        }\n    </style>\n    <div class="zappar-inner">\n        <div class="zappar-title">Permission is Needed</div>\n        <div class="zappar-text">Permission to access your device\'s camera and motion sensors is necessary for this experience. Please reload the page to try again.</div>\n        <button id="zappar-permission-reload-button">Reload</button>\n    </div>\n'),
                  document.body.append(e);
                let t = e.querySelector("#zappar-permission-reload-button");
                null == t ||
                  t.addEventListener("click", () => window.location.reload());
              })();
        }
        (window.DeviceOrientationEvent &&
          window.DeviceOrientationEvent.requestPermission) ||
          (V = !0),
          H();
        let te = n.LOG_LEVEL_ERROR;
        function re(...e) {
          te >= n.LOG_LEVEL_VERBOSE && console.log("[Zappar] INFO", ...e);
        }
        function ie(...e) {
          te >= n.LOG_LEVEL_ERROR && console.error("[Zappar] ERROR", ...e);
        }
        function ae(...e) {
          te >= n.LOG_LEVEL_VERBOSE && console.log("[Zappar] WARN", ...e);
        }
        let ne = 1,
          se = new Map();
        function oe(e) {
          return se.get(e);
        }
        class _e {
          constructor() {
            (this.render_mean_ = new Float32Array()),
              (this.render_identity_ = new Float32Array(50)),
              (this.render_expression_ = new Float32Array(29)),
              (this.render_uvs_ = new Float32Array()),
              (this.render_indices_ = new Uint16Array()),
              (this.vertices_ = new Float32Array()),
              (this.normals_ = new Float32Array()),
              (this.normalsCalculated_ = !1),
              (this.modelVersion_ = -1),
              (this.mirrored_ = !1);
          }
          loadFromMemory(e, t, r, i, a) {
            let n = 0,
              s = new Uint16Array(e),
              o = new Int32Array(e),
              _ = new Float32Array(e),
              c = () => {
                let e = o[n++] * o[n++],
                  t = _.subarray(n, n + e);
                return (n += e), t;
              },
              l = () => {
                let e = o[n++],
                  t = s.subarray(2 * n, 2 * n + e);
                return (n += e / 2), t;
              };
            (this.render_mean_ = c()),
              (this.render_identity_ = c()),
              (this.render_expression_ = c()),
              (this.render_uvs_ = c());
            let u = l(),
              d = n < o.length ? l() : new Uint16Array(),
              f = n < o.length ? l() : new Uint16Array(),
              h = n < o.length ? l() : new Uint16Array(),
              p = n < o.length ? l() : new Uint16Array();
            if (t || r || i || a) {
              let e = u.length;
              t && (e += d.length),
                r && (e += f.length),
                i && (e += h.length),
                a && (e += p.length),
                (this.render_indices_ = new Uint16Array(e)),
                this.render_indices_.set(u, 0);
              let n = u.length;
              t && (this.render_indices_.set(d, n), (n += d.length)),
                r && (this.render_indices_.set(f, n), (n += f.length)),
                i && (this.render_indices_.set(h, n), (n += h.length)),
                a && (this.render_indices_.set(p, n), (n += p.length));
            } else this.render_indices_ = u;
            (this.vertices_ = new Float32Array(this.render_mean_)),
              (this.normals_ = new Float32Array(this.vertices_.length)),
              this.modelVersion_++;
          }
          getVertices() {
            return this.vertices_;
          }
          getUVs() {
            return this.render_uvs_;
          }
          getIndices() {
            if (this.mirrored_) {
              if (!this.render_indices_reversed) {
                this.render_indices_reversed = new Uint16Array(
                  this.render_indices_.length
                );
                for (let e = 0; e < this.render_indices_.length; e += 3)
                  (this.render_indices_reversed[e] =
                    this.render_indices_[e + 2]),
                    (this.render_indices_reversed[e + 1] =
                      this.render_indices_[e + 1]),
                    (this.render_indices_reversed[e + 2] =
                      this.render_indices_[e]);
              }
              return this.render_indices_reversed;
            }
            return this.render_indices_;
          }
          getNormals() {
            return (
              this.normalsCalculated_ || this.calculateNormals(), this.normals_
            );
          }
          getModelVersion() {
            return this.modelVersion_;
          }
          getLandmarkDataForVertex(e) {
            let t = [
                this.render_mean_[3 * e],
                this.render_mean_[3 * e + 1],
                this.render_mean_[3 * e + 2],
              ],
              r = [];
            for (let t = 0; t < 50; t++)
              r.push(this.render_identity_[3 * e * 50 + t]),
                r.push(this.render_identity_[50 * (3 * e + 1) + t]),
                r.push(this.render_identity_[50 * (3 * e + 2) + t]);
            let i = [];
            for (let t = 0; t < 29; t++)
              i.push(this.render_expression_[3 * e * 29 + t]),
                i.push(this.render_expression_[29 * (3 * e + 1) + t]),
                i.push(this.render_expression_[29 * (3 * e + 2) + t]);
            return { mean: t, identity: r, expression: i };
          }
          update(e, t, r) {
            if (
              0 !== this.render_mean_.length &&
              0 !== this.render_identity_.length &&
              0 !== this.render_expression_.length
            ) {
              (this.mirrored_ = r), this.vertices_.set(this.render_mean_);
              for (let t = 0; t < e.length; t++)
                for (let r = 0; r < this.vertices_.length; r++)
                  this.vertices_[r] +=
                    e[t] * this.render_identity_[r * e.length + t];
              for (let e = 0; e < t.length; e++)
                for (let r = 0; r < this.vertices_.length; r++)
                  this.vertices_[r] +=
                    t[e] * this.render_expression_[r * t.length + e];
              if (r)
                for (let e = 0; e < this.vertices_.length; e += 3)
                  this.vertices_[e] *= -1;
              this.normalsCalculated_ = !1;
            }
          }
          calculateNormals() {
            let e = this.getIndices(),
              t = this.vertices_,
              r = new Float32Array(e.length);
            if (!t) return;
            let i = e.length,
              a = this.normals_,
              n = new Float32Array([0, 0, 0]),
              s = new Float32Array([0, 0, 0]),
              o = new Float32Array([0, 0, 0]);
            for (let a = 0; a < i; a += 3) {
              let i = 3 * e[a],
                d = 3 * e[a + 1],
                f = 3 * e[a + 2];
              (n[0] = t[d] - t[i]),
                (n[1] = t[d + 1] - t[i + 1]),
                (n[2] = t[d + 2] - t[i + 2]),
                (s[0] = t[f] - t[i]),
                (s[1] = t[f + 1] - t[i + 1]),
                (s[2] = t[f + 2] - t[i + 2]),
                F(o, n, s);
              let h =
                ((c = void 0),
                (l = void 0),
                (u = void 0),
                (c = (_ = o)[0]),
                (l = _[1]),
                (u = _[2]),
                Math.hypot(c, l, u));
              (r[a] = o[0] / h), (r[a + 1] = o[1] / h), (r[a + 2] = o[2] / h);
            }
            var _, c, l, u;
            a.fill(0);
            for (let t = 0; t < i; t += 3) {
              let i = 3 * e[t],
                n = 3 * e[t + 1],
                s = 3 * e[t + 2];
              (a[i] += r[t]),
                (a[i + 1] += r[t + 1]),
                (a[i + 2] += r[t + 2]),
                (a[n] += r[t]),
                (a[n + 1] += r[t + 1]),
                (a[n + 2] += r[t + 2]),
                (a[s] += r[t]),
                (a[s + 1] += r[t + 1]),
                (a[s + 2] += r[t + 2]);
            }
            let d = a.length / 3;
            for (let e = 0; e < d; e++) {
              let t = 3 * e;
              (n[0] = a[t]),
                (n[1] = a[t + 1]),
                (n[2] = a[t + 2]),
                k(s, n),
                (a[t] = s[0]),
                (a[t + 1] = s[1]),
                (a[t + 2] = s[2]);
            }
            this.normalsCalculated_ = !0;
          }
        }
        let ce = v();
        class le {
          constructor(e) {
            this._gl = e;
          }
          dispose() {
            this._vbo && this._gl.deleteBuffer(this._vbo),
              (this._vbo = void 0),
              this._shader && this._gl.deleteProgram(this._shader.prog),
              (this._shader = void 0);
          }
          _generate(e, t) {
            if (this._vbo) return this._vbo;
            if ((this._vbo || (this._vbo = e.createBuffer()), !this._vbo))
              throw new Error("Unable to create buffer object");
            let r = new Float32Array([
              -1, -1, 0, 0, 0, -1, 1, 0, 0, 1, 1, -1, 0, 1, 0, 1, -1, 0, 1, 0,
              -1, 1, 0, 0, 1, 1, 1, 0, 1, 1,
            ]);
            return (
              e.bindBuffer(e.ARRAY_BUFFER, this._vbo),
              e.bufferData(e.ARRAY_BUFFER, new Float32Array(r), e.STATIC_DRAW),
              e.bindBuffer(e.ARRAY_BUFFER, null),
              this._vbo
            );
          }
          drawCameraFrame(e, t, r, i) {
            if (!r.texture) return;
            let a = this._gl;
            a.disable(a.DEPTH_TEST),
              a.disable(a.SCISSOR_TEST),
              a.disable(a.CULL_FACE),
              a.disable(a.BLEND);
            let n = this._getCameraShader(a),
              s = this._generate(a, r);
            a.activeTexture(a.TEXTURE0),
              a.useProgram(n.prog),
              a.uniformMatrix4fv(
                n.unif_skinTexTransform,
                !1,
                fe(r.dataWidth, r.dataHeight, e, t, r.uvTransform || ce, i)
              ),
              a.uniform1i(n.unif_skinSampler, 0),
              a.bindTexture(a.TEXTURE_2D, r.texture),
              a.bindBuffer(a.ARRAY_BUFFER, s),
              a.vertexAttribPointer(n.attr_position, 3, a.FLOAT, !1, 20, 0),
              a.enableVertexAttribArray(n.attr_position),
              a.vertexAttribPointer(n.attr_texCoord, 2, a.FLOAT, !1, 20, 12),
              a.enableVertexAttribArray(n.attr_texCoord),
              a.drawArrays(a.TRIANGLES, 0, 6),
              a.disableVertexAttribArray(n.attr_position),
              a.disableVertexAttribArray(n.attr_texCoord),
              a.bindTexture(a.TEXTURE_2D, null),
              a.bindBuffer(a.ARRAY_BUFFER, null),
              a.useProgram(null);
          }
          _getCameraShader(e) {
            if (this._shader) return this._shader;
            let t = e.createProgram();
            if (!t) throw new Error("Unable to create program");
            let r = u(e, e.VERTEX_SHADER, ue),
              i = u(e, e.FRAGMENT_SHADER, de);
            e.attachShader(t, r), e.attachShader(t, i), d(e, t);
            let a = e.getUniformLocation(t, "skinTexTransform");
            if (!a)
              throw new Error(
                "Unable to get uniform location skinTexTransform"
              );
            let n = e.getUniformLocation(t, "skinSampler");
            if (!n)
              throw new Error("Unable to get uniform location skinSampler");
            return (
              (this._shader = {
                prog: t,
                unif_skinTexTransform: a,
                unif_skinSampler: n,
                attr_position: e.getAttribLocation(t, "position"),
                attr_texCoord: e.getAttribLocation(t, "texCoord"),
              }),
              this._shader
            );
          }
        }
        let ue =
            "\n#ifndef GL_ES\n#define highp\n#define mediump\n#define lowp\n#endif\n\nattribute vec4 position;\nattribute vec4 texCoord;\nvarying vec4 skinTexVarying;\nuniform mat4 skinTexTransform;\n\nvoid main()\n{\n    gl_Position = position;\n    skinTexVarying = skinTexTransform * texCoord;\n}",
          de =
            "\n#define highp mediump\n#ifdef GL_ES\n    // define default precision for float, vec, mat.\n    precision highp float;\n#else\n#define highp\n#define mediump\n#define lowp\n#endif\n\nvarying vec4 skinTexVarying;\nuniform lowp sampler2D skinSampler;\n\nvoid main()\n{\n    gl_FragColor = texture2DProj(skinSampler, skinTexVarying);\n}";
        function fe(e, t, r, i, a, n) {
          let s = v(),
            o = v();
          A(o, [-0.5, -0.5, 0]),
            E(s, o, s),
            n && (T(o, [-1, 1, 1]), E(s, o, s)),
            R(
              o,
              (-1 *
                (function () {
                  if (window.screen.orientation)
                    switch (window.screen.orientation.type) {
                      case "portrait-primary":
                        return 270;
                      case "landscape-secondary":
                        return 180;
                      case "portrait-secondary":
                        return 90;
                      default:
                        return 0;
                    }
                  else if (void 0 !== window.orientation)
                    switch (window.orientation) {
                      case 0:
                        return 270;
                      case 90:
                        return 0;
                      case 180:
                        return 90;
                      case -90:
                        return 180;
                    }
                  return 0;
                })() *
                Math.PI) /
                180,
              [0, 0, 1]
            ),
            E(s, o, s);
          let _ = x();
          (_[0] = r), (_[1] = i), (_[2] = 0), L(_, _, o);
          let c = Math.abs(_[0]),
            l = Math.abs(_[1]);
          T(o, [1, -1, 1]), E(s, o, s);
          let u = c / l,
            d = e / t;
          return (
            T(o, u > d ? [1, d / u, 1] : [u / d, 1, 1]),
            E(s, o, s),
            A(o, [0.5, 0.5, 0]),
            E(s, o, s),
            E(s, a, s),
            s
          );
        }
        class he {
          constructor(e) {
            this._gl = e;
          }
          dispose() {
            this._vbo && this._gl.deleteBuffer(this._vbo),
              this._normalbo && this._gl.deleteBuffer(this._normalbo),
              this._ibo && this._gl.deleteBuffer(this._ibo),
              this._shader && this._gl.deleteProgram(this._shader.prog),
              (this._vbo = void 0),
              (this._normalbo = void 0),
              (this._ibo = void 0),
              (this._shader = void 0);
          }
          _generateIBO(e, t) {
            if (this._ibo && this._lastIndices === e) return this._ibo;
            if (
              ((this._lastIndices = e),
              this._ibo || (this._ibo = t.createBuffer()),
              !this._ibo)
            )
              throw new Error("Unable to create buffer object");
            return (
              t.bindBuffer(t.ELEMENT_ARRAY_BUFFER, this._ibo),
              t.bufferData(t.ELEMENT_ARRAY_BUFFER, e, t.STATIC_DRAW),
              t.bindBuffer(t.ELEMENT_ARRAY_BUFFER, null),
              this._ibo
            );
          }
          _generateVBO(e, t) {
            if ((this._vbo || (this._vbo = t.createBuffer()), !this._vbo))
              throw new Error("Unable to create buffer object");
            return (
              t.bindBuffer(t.ARRAY_BUFFER, this._vbo),
              t.bufferData(t.ARRAY_BUFFER, e, t.STREAM_DRAW),
              t.bindBuffer(t.ARRAY_BUFFER, null),
              this._vbo
            );
          }
          _generateNormalBO(e, t) {
            if (
              (this._normalbo || (this._normalbo = t.createBuffer()),
              !this._normalbo)
            )
              throw new Error("Unable to create buffer object");
            return (
              t.bindBuffer(t.ARRAY_BUFFER, this._normalbo),
              t.bufferData(t.ARRAY_BUFFER, e, t.STREAM_DRAW),
              t.bindBuffer(t.ARRAY_BUFFER, null),
              this._normalbo
            );
          }
          drawFace(e, t) {
            let r = this._gl,
              i = this._getShader(r),
              a = this._generateVBO(t.getVertices(), r),
              n = this._generateNormalBO(t.getNormals(), r),
              s = this._generateIBO(t.getIndices(), r);
            r.enable(r.DEPTH_TEST),
              r.enable(r.CULL_FACE),
              r.useProgram(i.prog),
              r.uniformMatrix4fv(i.unif_matrix, !1, e),
              r.bindBuffer(r.ARRAY_BUFFER, a),
              r.vertexAttribPointer(i.attr_position, 3, r.FLOAT, !1, 12, 0),
              r.enableVertexAttribArray(i.attr_position),
              r.bindBuffer(r.ARRAY_BUFFER, n),
              r.vertexAttribPointer(i.attr_normal, 3, r.FLOAT, !1, 12, 0),
              r.enableVertexAttribArray(i.attr_normal),
              r.bindBuffer(r.ELEMENT_ARRAY_BUFFER, s),
              r.drawElements(
                r.TRIANGLES,
                t.getIndices().length,
                r.UNSIGNED_SHORT,
                0
              ),
              r.disableVertexAttribArray(i.attr_position),
              r.disableVertexAttribArray(i.attr_normal),
              r.bindBuffer(r.ARRAY_BUFFER, null),
              r.bindBuffer(r.ELEMENT_ARRAY_BUFFER, null);
          }
          _getShader(e) {
            if (this._shader) return this._shader;
            let t = e.createProgram();
            if (!t) throw new Error("Unable to create program");
            let r = u(e, e.VERTEX_SHADER, pe),
              i = u(e, e.FRAGMENT_SHADER, me);
            e.attachShader(t, r), e.attachShader(t, i), d(e, t);
            let a = e.getUniformLocation(t, "matrix");
            if (!a) throw new Error("Unable to get uniform location mattrix");
            return (
              (this._shader = {
                prog: t,
                unif_matrix: a,
                attr_position: e.getAttribLocation(t, "position"),
                attr_normal: e.getAttribLocation(t, "normal"),
              }),
              this._shader
            );
          }
        }
        let pe =
            "\n#ifndef GL_ES\n#define highp\n#define mediump\n#define lowp\n#endif\n\nuniform mat4 matrix;\nattribute vec4 position;\nattribute vec3 normal;\nvarying highp vec3 vnormal;\n\nvoid main()\n{\n    gl_Position = matrix * position;\n    vnormal = normal;\n}",
          me =
            "\n#define highp mediump\n#ifdef GL_ES\n    // define default precision for float, vec, mat.\n    precision highp float;\n#else\n#define highp\n#define mediump\n#define lowp\n#endif\n\nvarying vec4 skinTexVarying;\nvarying highp vec3 vnormal;\nuniform lowp sampler2D skinSampler;\n\nvoid main()\n{\n    vec3 normal2 = 0.5 * vnormal + 0.5;\n    gl_FragColor = vec4(normal2.x , normal2.y, normal2.z, 1.0);\n}";
        class ge {
          constructor(e) {
            this._gl = e;
          }
          dispose() {
            this._vbo && this._gl.deleteBuffer(this._vbo),
              this._uvbo && this._gl.deleteBuffer(this._uvbo),
              this._ibo && this._gl.deleteBuffer(this._ibo),
              this._shader && this._gl.deleteProgram(this._shader.prog),
              (this._vbo = void 0),
              (this._uvbo = void 0),
              (this._ibo = void 0),
              (this._shader = void 0);
          }
          _generateIBO(e, t) {
            if (this._ibo && this._lastIndices === e) return this._ibo;
            if (
              ((this._lastIndices = e),
              this._ibo || (this._ibo = t.createBuffer()),
              !this._ibo)
            )
              throw new Error("Unable to create buffer object");
            return (
              t.bindBuffer(t.ELEMENT_ARRAY_BUFFER, this._ibo),
              t.bufferData(t.ELEMENT_ARRAY_BUFFER, e, t.STATIC_DRAW),
              t.bindBuffer(t.ELEMENT_ARRAY_BUFFER, null),
              this._ibo
            );
          }
          _generateVBO(e, t) {
            if ((this._vbo || (this._vbo = t.createBuffer()), !this._vbo))
              throw new Error("Unable to create buffer object");
            return (
              t.bindBuffer(t.ARRAY_BUFFER, this._vbo),
              t.bufferData(t.ARRAY_BUFFER, e, t.STREAM_DRAW),
              t.bindBuffer(t.ARRAY_BUFFER, null),
              this._vbo
            );
          }
          _generateUVBO(e, t) {
            if ((this._uvbo || (this._uvbo = t.createBuffer()), !this._uvbo))
              throw new Error("Unable to create buffer object");
            return (
              t.bindBuffer(t.ARRAY_BUFFER, this._uvbo),
              t.bufferData(t.ARRAY_BUFFER, e, t.STREAM_DRAW),
              t.bindBuffer(t.ARRAY_BUFFER, null),
              this._uvbo
            );
          }
          drawFace(e, t, r, i, a, n) {
            let s = this._gl,
              o = this._getShader(s),
              _ = this._generateVBO(t, s),
              c = this._generateUVBO(i, s),
              l = this._generateIBO(a, s);
            s.enable(s.DEPTH_TEST),
              s.enable(s.CULL_FACE),
              s.useProgram(o.prog),
              s.uniformMatrix4fv(o.unif_matrix, !1, e),
              s.uniformMatrix4fv(o.unif_uvmatrix, !1, r),
              s.activeTexture(s.TEXTURE0),
              s.bindTexture(s.TEXTURE_2D, n),
              s.uniform1i(o.unif_sampler, 0),
              s.bindBuffer(s.ARRAY_BUFFER, _),
              s.vertexAttribPointer(o.attr_position, 3, s.FLOAT, !1, 12, 0),
              s.enableVertexAttribArray(o.attr_position),
              s.bindBuffer(s.ARRAY_BUFFER, c),
              s.vertexAttribPointer(o.attr_uv, 3, s.FLOAT, !1, 12, 0),
              s.enableVertexAttribArray(o.attr_uv),
              s.bindBuffer(s.ELEMENT_ARRAY_BUFFER, l),
              s.drawElements(s.TRIANGLES, 6912, s.UNSIGNED_SHORT, 0),
              s.disableVertexAttribArray(o.attr_position),
              s.disableVertexAttribArray(o.attr_uv),
              s.bindBuffer(s.ARRAY_BUFFER, null),
              s.bindBuffer(s.ELEMENT_ARRAY_BUFFER, null);
          }
          _getShader(e) {
            if (this._shader) return this._shader;
            let t = e.createProgram();
            if (!t) throw new Error("Unable to create program");
            let r = u(e, e.VERTEX_SHADER, be),
              i = u(e, e.FRAGMENT_SHADER, we);
            e.attachShader(t, r), e.attachShader(t, i), d(e, t);
            let a = e.getUniformLocation(t, "matrix");
            if (!a) throw new Error("Unable to get uniform location matrix");
            let n = e.getUniformLocation(t, "uvmatrix");
            if (!n) throw new Error("Unable to get uniform location matrix");
            let s = e.getUniformLocation(t, "uSampler");
            if (!s) throw new Error("Unable to get uniform location sampler");
            return (
              (this._shader = {
                prog: t,
                unif_matrix: a,
                unif_sampler: s,
                unif_uvmatrix: n,
                attr_position: e.getAttribLocation(t, "position"),
                attr_uv: e.getAttribLocation(t, "uv"),
                attr_texturecoord: e.getAttribLocation(t, "aTextureCoord"),
              }),
              this._shader
            );
          }
        }
        let be =
            "\n#ifndef GL_ES\n#define highp\n#define mediump\n#define lowp\n#endif\n\nuniform mat4 matrix;\nuniform mat4 uvmatrix;\nattribute vec4 position;\nattribute vec3 normal;\nattribute vec3 uv;\n\n// varying highp vec3 vnormal;\n\nvarying highp vec2 vTextureCoord;\nvarying highp float vAlpha;\n\nvoid main()\n{\n    gl_Position = matrix * position;\n    vec4 ret = uvmatrix * vec4(uv.x, uv.y, uv.z, 1.0);\n    ret.x /= ret.w * 2.0;\n    ret.y /= ret.w * 2.0;\n    ret.x += 0.5;\n    ret.y += 0.0;\n    vAlpha = 1.0;\n    vTextureCoord = ret.xy;\n}",
          we =
            "\n#define highp mediump\n#ifdef GL_ES\n    // define default precision for float, vec, mat.\n    precision highp float;\n#else\n#define highp\n#define mediump\n#define lowp\n#endif\n\nvarying highp vec2 vTextureCoord;\nvarying highp vec3 vnormal;\nvarying highp float vAlpha;\nuniform lowp sampler2D uSampler;\n\nvoid main()\n{\n    // vec3 normal2 = 0.5 * vnormal + 0.5;\n    vec4 p = texture2D(uSampler, vTextureCoord);\n    p.a = vAlpha;\n    gl_FragColor = p; // vec4(normal2.x , normal2.y, normal2.z, 1.0);\n}";
        var ve, ye;
        !(function (e) {
          (e[(e.CAMERA_FRAME = 0)] = "CAMERA_FRAME"),
            (e[(e.ACCELEROMETER = 1)] = "ACCELEROMETER"),
            (e[(e.ROTATION_RATE = 2)] = "ROTATION_RATE"),
            (e[(e.ATTITUDE = 3)] = "ATTITUDE"),
            (e[(e.ATTITUDE_MATRIX = 4)] = "ATTITUDE_MATRIX");
        })(ve || (ve = {}));
        class Ee {
          constructor(e) {
            (this._insertionByte = 0),
              (this._numberPackets = 0),
              (this._started = !1),
              (this._hasLoggedUnsuppored = !1),
              (this._data = new ArrayBuffer(this._estimatedSize(e, 320, 240))),
              (this._dataView = new DataView(this._data)),
              (this._dataUint8 = new Uint8Array(this._data)),
              (this._dataFloat32 = new Float32Array(this._data));
          }
          _estimatedSize(e, t, r) {
            return (
              Ee.headerSizeBytes +
              (Ee.psbPacketType + Ee.cameraPacketSizeBytes + t * r) * e
            );
          }
          start() {
            (this._started = !0),
              (this._insertionByte = 0),
              (this._numberPackets = 0),
              this._growArrayBuffer(Ee.headerSizeBytes);
            let e = new TextEncoder().encode("UAR1");
            this._dataUint8.set(e),
              this._dataView.setUint32(4, 0, !0),
              (this._insertionByte += 8);
          }
          stop() {
            this._started = !1;
            let e = this._data.slice(0, this._insertionByte);
            (this._data = e),
              (this._dataUint8 = new Uint8Array(this._data)),
              (this._dataFloat32 = new Float32Array(this._data)),
              (this._dataView = new DataView(this._data));
          }
          data() {
            return this._dataUint8;
          }
          appendCameraFrame(e) {
            if (!this._started) return;
            if (!e.data) {
              if (this._hasLoggedUnsuppored) return;
              return (
                (this._hasLoggedUnsuppored = !0),
                void ie("Unable to record frames from this camera source")
              );
            }
            if (e.data.byteLength !== e.dataWidth * e.dataHeight)
              return void ie(
                "Unable to record frame to sequence: greyscale array doesn't match dimensions"
              );
            let t =
              Ee.psbPacketType +
              Ee.cameraPacketSizeBytes +
              e.dataWidth * e.dataHeight;
            this._growArrayBuffer(t),
              this._dataView.setUint32(
                this._insertionByte,
                ve.CAMERA_FRAME,
                !0
              ),
              (this._insertionByte += Ee.psbPacketType),
              this._dataView.setUint32(this._insertionByte, e.dataWidth, !0),
              (this._insertionByte += Ee.psbCameraFrameWidth),
              this._dataView.setUint32(this._insertionByte, e.dataHeight, !0),
              (this._insertionByte += Ee.psbCameraFrameHeight),
              this._dataFloat32.set(e.cameraToDevice, this._insertionByte / 4),
              (this._insertionByte += Ee.psbCameraToDeviceTransform),
              this._dataFloat32.set(e.cameraModel, this._insertionByte / 4),
              (this._insertionByte += Ee.psbCameraModel),
              this._dataView.setUint32(
                this._insertionByte,
                e.userFacing ? 1 : 0,
                !0
              ),
              (this._insertionByte += Ee.psbFlags),
              this._dataUint8.set(new Uint8Array(e.data), this._insertionByte),
              (this._insertionByte += e.data.byteLength),
              this._numberPackets++,
              this._dataView.setUint32(4, this._numberPackets, !0);
          }
          appendAccelerometer(e, t, r, i) {
            this._appendTimestampedVec3(ve.ACCELEROMETER, e, t, r, i);
          }
          appendRotationRate(e, t, r, i) {
            this._appendTimestampedVec3(ve.ROTATION_RATE, e, t, r, i);
          }
          appendAttitude(e, t, r, i) {
            this._appendTimestampedVec3(ve.ATTITUDE, e, t, r, i);
          }
          _appendTimestampedVec3(e, t, r, i, a) {
            if (!this._started) return;
            let n = Ee.psbPacketType + Ee.accelerometerPacketSizeBytes;
            this._growArrayBuffer(n),
              this._dataView.setUint32(this._insertionByte, e, !0),
              (this._insertionByte += Ee.psbPacketType),
              this._dataView.setUint32(this._insertionByte, t, !0),
              (this._insertionByte += 4),
              this._dataView.setFloat32(this._insertionByte, r, !0),
              (this._insertionByte += 4),
              this._dataView.setFloat32(this._insertionByte, i, !0),
              (this._insertionByte += 4),
              this._dataView.setFloat32(this._insertionByte, a, !0),
              (this._insertionByte += 4),
              this._numberPackets++,
              this._dataView.setUint32(4, this._numberPackets, !0);
          }
          appendAttitudeMatrix(e) {
            if (!this._started) return;
            let t = Ee.psbPacketType + Ee.attitudeMatrixPacketSizeBytes;
            this._growArrayBuffer(t),
              this._dataView.setUint32(
                this._insertionByte,
                ve.ATTITUDE_MATRIX,
                !0
              ),
              (this._insertionByte += Ee.psbPacketType),
              this._dataFloat32.set(e, this._insertionByte / 4),
              (this._insertionByte += Ee.attitudeMatrixPacketSizeBytes),
              this._numberPackets++,
              this._dataView.setUint32(4, this._numberPackets, !0);
          }
          _growArrayBuffer(e) {
            for (; this._insertionByte + e > this._data.byteLength; ) {
              let e = Math.max(
                  2 * this._data.byteLength,
                  this._estimatedSize(50, 320, 240)
                ),
                t = new ArrayBuffer(e),
                r = new Uint8Array(t);
              r.set(this._dataUint8),
                (this._data = t),
                (this._dataUint8 = r),
                (this._dataFloat32 = new Float32Array(this._data)),
                (this._dataView = new DataView(this._data));
            }
          }
        }
        (Ee.headerSizeBytes = 8),
          (Ee.psbPacketType = 4),
          (Ee.psbCameraFrameWidth = 4),
          (Ee.psbCameraFrameHeight = 4),
          (Ee.psbFlags = 4),
          (Ee.psbCameraToDeviceTransform = 64),
          (Ee.psbCameraModel = 24),
          (Ee.cameraPacketSizeBytes =
            Ee.psbCameraFrameWidth +
            Ee.psbCameraFrameHeight +
            Ee.psbCameraToDeviceTransform +
            Ee.psbCameraModel +
            Ee.psbFlags),
          (Ee.accelerometerPacketSizeBytes = 16),
          (Ee.rotationRatePacketSizeBytes = 16),
          (Ee.attitudePacketSizeBytes = 16),
          (Ee.attitudeMatrixPacketSizeBytes = 64);
        class Ae {
          constructor(e) {
            (this._data = e),
              (this.dataByPacket = new Map()),
              (this.dataByCameraFrame = new Map()),
              (this.numberPackets = 0),
              (this.numberCameraFrames = 0),
              (this.numberAccelerometerPackets = 0),
              (this.numberRotationRatePackets = 0),
              (this.numberAttitudePackets = 0),
              (this.numberAttitudeMatrixPackets = 0);
            let t = new TextDecoder(),
              r = "";
            try {
              r = t.decode(this._data.slice(0, 4));
            } catch (e) {
              throw new Error(
                "Unable to decode header - perhaps this isn't a sequence file?"
              );
            }
            if ("UAR1" !== r)
              throw new Error(
                `Invalid - perhaps this isn't a sequence file: ${r}`
              );
            let i = 0,
              a = new DataView(this._data);
            (this.numberPackets = a.getUint32(4, !0)),
              (i += Ee.headerSizeBytes);
            for (let e = 0; e < this.numberPackets; e++) {
              let t = a.getUint32(i, !0);
              switch (((i += Ee.psbPacketType), t)) {
                case ve.CAMERA_FRAME: {
                  let t = a.getUint32(i, !0);
                  i += Ee.psbCameraFrameWidth;
                  let r = a.getUint32(i, !0);
                  i += Ee.psbCameraFrameHeight;
                  let n = new Float32Array(
                    this._data,
                    i,
                    Ee.psbCameraToDeviceTransform / 4
                  );
                  i += Ee.psbCameraToDeviceTransform;
                  let s = new Float32Array(
                    this._data,
                    i,
                    Ee.psbCameraModel / 4
                  );
                  i += Ee.psbCameraModel;
                  let o = a.getUint32(i, !0);
                  i += Ee.psbFlags;
                  let _ = 1 === o,
                    c = new Uint8Array(this._data, i, t * r);
                  i += t * r;
                  let l = {
                    type: ve.CAMERA_FRAME,
                    width: t,
                    height: r,
                    cameraToDevice: n,
                    cameraModel: s,
                    userFacing: _,
                    greyscale: c,
                  };
                  this.dataByPacket.set(e, l),
                    this.dataByCameraFrame.set(this.numberCameraFrames, l),
                    this.numberCameraFrames++;
                  break;
                }
                case ve.ACCELEROMETER: {
                  let t = a.getUint32(i, !0);
                  i += 4;
                  let r = a.getFloat32(i, !0);
                  i += 4;
                  let n = a.getFloat32(i, !0);
                  i += 4;
                  let s = a.getFloat32(i, !0);
                  (i += 4),
                    this.dataByPacket.set(e, {
                      type: ve.ACCELEROMETER,
                      t,
                      x: r,
                      y: n,
                      z: s,
                    }),
                    this.numberAccelerometerPackets++;
                  break;
                }
                case ve.ROTATION_RATE: {
                  let t = a.getUint32(i, !0);
                  i += 4;
                  let r = a.getFloat32(i, !0);
                  i += 4;
                  let n = a.getFloat32(i, !0);
                  i += 4;
                  let s = a.getFloat32(i, !0);
                  (i += 4),
                    this.dataByPacket.set(e, {
                      type: ve.ROTATION_RATE,
                      t,
                      x: r,
                      y: n,
                      z: s,
                    }),
                    this.numberRotationRatePackets++;
                  break;
                }
                case ve.ATTITUDE: {
                  let t = a.getUint32(i, !0);
                  i += 4;
                  let r = a.getFloat32(i, !0);
                  i += 4;
                  let n = a.getFloat32(i, !0);
                  i += 4;
                  let s = a.getFloat32(i, !0);
                  (i += 4),
                    this.dataByPacket.set(e, {
                      type: ve.ATTITUDE,
                      t,
                      x: r,
                      y: n,
                      z: s,
                    }),
                    this.numberAttitudePackets++;
                  break;
                }
                case ve.ATTITUDE_MATRIX: {
                  let t = new Float32Array(
                    this._data,
                    i,
                    Ee.attitudeMatrixPacketSizeBytes / 4
                  );
                  (i += Ee.attitudeMatrixPacketSizeBytes),
                    this.dataByPacket.set(e, {
                      type: ve.ATTITUDE_MATRIX,
                      attitude: t,
                    }),
                    this.numberAttitudeMatrixPackets++;
                  break;
                }
              }
            }
          }
        }
        class Te {}
        !(function (e) {
          (e[(e.OBJECT_URL = 0)] = "OBJECT_URL"),
            (e[(e.SRC_OBJECT = 1)] = "SRC_OBJECT");
        })(ye || (ye = {}));
        let Re = {
          deviceMotionMutliplier: -1,
          blacklisted: !1,
          showGyroPermissionsWarningIfNecessary: !1,
          showSafariPermissionsResetIfNecessary: !1,
          requestHighFrameRate: !1,
          videoWidth: 640,
          videoHeight: 480,
          dataWidth: 320,
          dataHeight: 240,
          videoElementInDOM: !1,
          preferMediaStreamTrackProcessorCamera: !1,
          preferImageBitmapCamera: !1,
        };
        "undefined" != typeof window &&
          ((window.zeeProfile = Re),
          window.location.href.indexOf("_mstppipeline") >= 0 &&
            (console.log("Configuring for MSTP camera pipeline (if supported)"),
            (Re.preferMediaStreamTrackProcessorCamera = !0)),
          window.location.href.indexOf("_imagebitmappipeline") >= 0 &&
            (console.log(
              "Configuring for ImageBitmap camera pipeline (if supported)"
            ),
            (Re.preferImageBitmapCamera = !0)));
        let xe = new P.UAParser(),
          ke = (xe.getOS().name || "unknown").toLowerCase(),
          Fe = (xe.getEngine().name || "unknown").toLowerCase();
        function Le(e) {
          let t = e.split(".");
          if (t.length >= 2) {
            const e = parseInt(t[0]),
              r = parseInt(t[1]);
            (e < 11 || (11 === e && r < 3)) && (Re.blacklisted = !0),
              (e < 12 || (12 === e && r < 2)) && (Re.videoElementInDOM = !0),
              ((12 === e && r >= 2) || e >= 13) &&
                (Re.showGyroPermissionsWarningIfNecessary = !0),
              e >= 13 && (Re.showSafariPermissionsResetIfNecessary = !0),
              ((e >= 12 && r > 1) || e >= 13) &&
                navigator.mediaDevices &&
                navigator.mediaDevices.getSupportedConstraints &&
                navigator.mediaDevices.getSupportedConstraints().frameRate &&
                ((Re.requestHighFrameRate = !0),
                e < 14 && ((Re.videoHeight = 360), (Re.dataHeight = 180)));
          }
        }
        "webkit" === Fe &&
          "ios" !== ke &&
          ((Re.deviceMotionMutliplier = 1),
          "undefined" != typeof window &&
            void 0 !== window.orientation &&
            Le("15.0")),
          "webkit" === Fe &&
            "ios" === ke &&
            ((Re.deviceMotionMutliplier = 1), Le(xe.getOS().version || "15.0"));
        const Me = new Map();
        class Ie {
          constructor(e) {
            (this._gl = e),
              (this._viewports = []),
              (this._underlyingViewport = this._gl.viewport),
              this._viewports.push(this._gl.getParameter(this._gl.VIEWPORT)),
              (this._gl.viewport = (e, t, r, i) => {
                (this._viewports[this._viewports.length - 1] = [e, t, r, i]),
                  this._underlyingViewport.call(this._gl, e, t, r, i);
              });
          }
          static get(e) {
            let t = Me.get(e);
            return t || ((t = new Ie(e)), Me.set(e, t)), t;
          }
          push() {
            this._viewports.push(this._viewports[this._viewports.length - 1]);
          }
          pop() {
            const e = this._viewports.pop(),
              t = this._viewports[this._viewports.length - 1];
            (e &&
              e[0] === t[0] &&
              e[1] === t[1] &&
              e[2] === t[2] &&
              e[3] === t[3]) ||
              this._underlyingViewport.call(this._gl, t[0], t[1], t[2], t[3]);
          }
        }
        class Se {
          constructor(e) {
            (this._gl = e),
              (this._isPaused = !0),
              (this._hadFrames = !1),
              (this._isUserFacing = !1),
              (this._cameraToScreenRotation = 0),
              (this._isUploadFrame = !0),
              (this._computedTransformRotation = -1),
              (this._computedFrontCameraRotation = !1),
              (this._cameraUvTransform = v()),
              (this._framebufferWidth = 0),
              (this._framebufferHeight = 0),
              (this._framebufferId = null),
              (this._renderTexture = null),
              (this._isWebGL2 = !1),
              (this._isWebGL2 =
                e.getParameter(e.VERSION).indexOf("WebGL 2") >= 0),
              this._isWebGL2 ||
                (this._instancedArraysExtension = this._gl.getExtension(
                  "ANGLE_instanced_arrays"
                ));
          }
          resetGLContext() {
            (this._framebufferId = null),
              (this._renderTexture = null),
              (this._vertexBuffer = void 0),
              (this._indexBuffer = void 0),
              (this._greyscaleShader = void 0);
          }
          destroy() {
            this.resetGLContext();
          }
          uploadFrame(e, t, r, i) {
            let a = this._gl;
            const n = Ie.get(a);
            n.push();
            const s = a.isEnabled(a.SCISSOR_TEST),
              o = a.isEnabled(a.DEPTH_TEST),
              _ = a.isEnabled(a.BLEND),
              c = a.isEnabled(a.CULL_FACE),
              l = a.isEnabled(a.STENCIL_TEST),
              u = a.getParameter(a.ACTIVE_TEXTURE),
              d = a.getParameter(a.UNPACK_FLIP_Y_WEBGL),
              f = a.getParameter(a.CURRENT_PROGRAM);
            a.activeTexture(a.TEXTURE0);
            const h = a.getParameter(a.TEXTURE_BINDING_2D),
              p = a.getParameter(a.FRAMEBUFFER_BINDING),
              m = a.getParameter(a.ARRAY_BUFFER_BINDING),
              g = a.getParameter(a.ELEMENT_ARRAY_BUFFER_BINDING);
            a.disable(a.SCISSOR_TEST),
              a.disable(a.DEPTH_TEST),
              a.disable(a.BLEND),
              a.disable(a.CULL_FACE),
              a.disable(a.STENCIL_TEST),
              a.pixelStorei(a.UNPACK_FLIP_Y_WEBGL, !1),
              a.bindTexture(a.TEXTURE_2D, e);
            const b = a.RGBA,
              w = a.RGBA,
              v = a.UNSIGNED_BYTE;
            a.texImage2D(a.TEXTURE_2D, 0, b, w, v, t);
            let y = 0,
              E = 0;
            "undefined" != typeof HTMLVideoElement &&
            t instanceof HTMLVideoElement
              ? ((y = t.videoWidth), (E = t.videoHeight))
              : ((y = t.width), (E = t.height)),
              E > y && (E = [y, (y = E)][0]),
              this._updateTransforms(r, i);
            let A = this._getFramebuffer(a, Re.dataWidth / 4, Re.dataHeight),
              T = this._getVertexBuffer(a),
              R = this._getIndexBuffer(a),
              x = this._getGreyscaleShader(a);
            const k = a.getVertexAttrib(
                x.aVertexPositionLoc,
                a.VERTEX_ATTRIB_ARRAY_SIZE
              ),
              F = a.getVertexAttrib(
                x.aVertexPositionLoc,
                a.VERTEX_ATTRIB_ARRAY_TYPE
              ),
              L = a.getVertexAttrib(
                x.aVertexPositionLoc,
                a.VERTEX_ATTRIB_ARRAY_NORMALIZED
              ),
              M = a.getVertexAttrib(
                x.aVertexPositionLoc,
                a.VERTEX_ATTRIB_ARRAY_STRIDE
              ),
              I = a.getVertexAttribOffset(
                x.aVertexPositionLoc,
                a.VERTEX_ATTRIB_ARRAY_POINTER
              ),
              S = a.getVertexAttrib(
                x.aVertexPositionLoc,
                a.VERTEX_ATTRIB_ARRAY_ENABLED
              ),
              U = a.getVertexAttrib(
                x.aVertexPositionLoc,
                a.VERTEX_ATTRIB_ARRAY_BUFFER_BINDING
              ),
              C = a.getVertexAttrib(
                x.aTextureCoordLoc,
                a.VERTEX_ATTRIB_ARRAY_SIZE
              ),
              D = a.getVertexAttrib(
                x.aTextureCoordLoc,
                a.VERTEX_ATTRIB_ARRAY_TYPE
              ),
              P = a.getVertexAttrib(
                x.aTextureCoordLoc,
                a.VERTEX_ATTRIB_ARRAY_NORMALIZED
              ),
              B = a.getVertexAttrib(
                x.aTextureCoordLoc,
                a.VERTEX_ATTRIB_ARRAY_STRIDE
              ),
              O = a.getVertexAttribOffset(
                x.aTextureCoordLoc,
                a.VERTEX_ATTRIB_ARRAY_POINTER
              ),
              z = a.getVertexAttrib(
                x.aTextureCoordLoc,
                a.VERTEX_ATTRIB_ARRAY_BUFFER_BINDING
              ),
              V = a.getVertexAttrib(
                x.aTextureCoordLoc,
                a.VERTEX_ATTRIB_ARRAY_ENABLED
              );
            let N = 0,
              G = 0;
            this._isWebGL2
              ? ((N = a.getVertexAttrib(
                  x.aVertexPositionLoc,
                  a.VERTEX_ATTRIB_ARRAY_DIVISOR
                )),
                (G = a.getVertexAttrib(
                  x.aTextureCoordLoc,
                  a.VERTEX_ATTRIB_ARRAY_DIVISOR
                )),
                a.vertexAttribDivisor(x.aVertexPositionLoc, 0),
                a.vertexAttribDivisor(x.aTextureCoordLoc, 0))
              : this._instancedArraysExtension &&
                ((N = a.getVertexAttrib(
                  x.aVertexPositionLoc,
                  this._instancedArraysExtension
                    .VERTEX_ATTRIB_ARRAY_DIVISOR_ANGLE
                )),
                (G = a.getVertexAttrib(
                  x.aTextureCoordLoc,
                  this._instancedArraysExtension
                    .VERTEX_ATTRIB_ARRAY_DIVISOR_ANGLE
                )),
                this._instancedArraysExtension.vertexAttribDivisorANGLE(
                  x.aVertexPositionLoc,
                  0
                ),
                this._instancedArraysExtension.vertexAttribDivisorANGLE(
                  x.aTextureCoordLoc,
                  0
                )),
              a.bindFramebuffer(a.FRAMEBUFFER, A),
              a.viewport(0, 0, this._framebufferWidth, this._framebufferHeight),
              a.clear(a.COLOR_BUFFER_BIT),
              a.bindBuffer(a.ARRAY_BUFFER, T),
              a.vertexAttribPointer(
                x.aVertexPositionLoc,
                2,
                a.FLOAT,
                !1,
                16,
                0
              ),
              a.enableVertexAttribArray(x.aVertexPositionLoc),
              a.vertexAttribPointer(x.aTextureCoordLoc, 2, a.FLOAT, !1, 16, 8),
              a.enableVertexAttribArray(x.aTextureCoordLoc),
              a.bindBuffer(a.ELEMENT_ARRAY_BUFFER, R),
              a.useProgram(x.program),
              a.uniform1f(x.uTexWidthLoc, Re.dataWidth),
              a.uniformMatrix4fv(
                x.uUvTransformLoc,
                !1,
                this._cameraUvTransform
              ),
              a.activeTexture(a.TEXTURE0),
              a.bindTexture(a.TEXTURE_2D, e),
              a.uniform1i(x.uSamplerLoc, 0),
              a.drawElements(a.TRIANGLES, 6, a.UNSIGNED_SHORT, 0),
              a.bindBuffer(a.ARRAY_BUFFER, U),
              a.vertexAttribPointer(x.aVertexPositionLoc, k, F, L, M, I),
              a.bindBuffer(a.ARRAY_BUFFER, z),
              a.vertexAttribPointer(x.aTextureCoordLoc, C, D, P, B, O),
              a.bindBuffer(a.ARRAY_BUFFER, m),
              a.bindBuffer(a.ELEMENT_ARRAY_BUFFER, g),
              S || a.disableVertexAttribArray(x.aVertexPositionLoc),
              V || a.disableVertexAttribArray(x.aTextureCoordLoc),
              this._isWebGL2
                ? (a.vertexAttribDivisor(x.aVertexPositionLoc, N),
                  a.vertexAttribDivisor(x.aTextureCoordLoc, G))
                : this._instancedArraysExtension &&
                  (this._instancedArraysExtension.vertexAttribDivisorANGLE(
                    x.aVertexPositionLoc,
                    N
                  ),
                  this._instancedArraysExtension.vertexAttribDivisorANGLE(
                    x.aTextureCoordLoc,
                    G
                  )),
              a.bindFramebuffer(a.FRAMEBUFFER, p),
              a.useProgram(f),
              a.bindTexture(a.TEXTURE_2D, h),
              a.activeTexture(u),
              a.pixelStorei(a.UNPACK_FLIP_Y_WEBGL, d),
              n.pop(),
              _ && a.enable(a.BLEND),
              c && a.enable(a.CULL_FACE),
              o && a.enable(a.DEPTH_TEST),
              s && a.enable(a.SCISSOR_TEST),
              l && a.enable(a.STENCIL_TEST);
          }
          readFrame(e, t) {
            let r = this._gl,
              i = new Uint8Array(t);
            const a = r.getParameter(r.FRAMEBUFFER_BINDING);
            let n = this._getFramebuffer(r, Re.dataWidth / 4, Re.dataHeight);
            return (
              r.bindFramebuffer(r.FRAMEBUFFER, n),
              r.readPixels(
                0,
                0,
                this._framebufferWidth,
                this._framebufferHeight,
                r.RGBA,
                r.UNSIGNED_BYTE,
                i
              ),
              r.bindFramebuffer(r.FRAMEBUFFER, a),
              {
                uvTransform: this._cameraUvTransform,
                data: t,
                texture: e,
                dataWidth: Re.dataWidth,
                dataHeight: Re.dataHeight,
                userFacing: this._computedFrontCameraRotation,
              }
            );
          }
          _updateTransforms(e, t) {
            (e == this._computedTransformRotation &&
              t == this._computedFrontCameraRotation) ||
              ((this._computedTransformRotation = e),
              (this._computedFrontCameraRotation = t),
              (this._cameraUvTransform = this._getCameraUvTransform()));
          }
          _getCameraUvTransform() {
            switch (this._computedTransformRotation) {
              case 270:
                return new Float32Array([
                  0, 1, 0, 0, -1, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 1,
                ]);
              case 180:
                return new Float32Array([
                  -1, 0, 0, 0, 0, -1, 0, 0, 0, 0, 1, 0, 1, 1, 0, 1,
                ]);
              case 90:
                return new Float32Array([
                  0, -1, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 1,
                ]);
            }
            return new Float32Array([
              1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1,
            ]);
          }
          _getFramebuffer(e, t, r) {
            if (
              this._framebufferWidth === t &&
              this._framebufferHeight === r &&
              this._framebufferId
            )
              return this._framebufferId;
            if (
              (this._framebufferId &&
                (e.deleteFramebuffer(this._framebufferId),
                (this._framebufferId = null)),
              this._renderTexture &&
                (e.deleteTexture(this._renderTexture),
                (this._renderTexture = null)),
              (this._framebufferId = e.createFramebuffer()),
              !this._framebufferId)
            )
              throw new Error("Unable to create framebuffer");
            if (
              (e.bindFramebuffer(e.FRAMEBUFFER, this._framebufferId),
              (this._renderTexture = e.createTexture()),
              !this._renderTexture)
            )
              throw new Error("Unable to create render texture");
            e.activeTexture(e.TEXTURE0);
            const i = e.getParameter(e.TEXTURE_BINDING_2D);
            e.bindTexture(e.TEXTURE_2D, this._renderTexture),
              e.texImage2D(
                e.TEXTURE_2D,
                0,
                e.RGBA,
                t,
                r,
                0,
                e.RGBA,
                e.UNSIGNED_BYTE,
                null
              ),
              e.texParameteri(e.TEXTURE_2D, e.TEXTURE_WRAP_S, e.CLAMP_TO_EDGE),
              e.texParameteri(e.TEXTURE_2D, e.TEXTURE_WRAP_T, e.CLAMP_TO_EDGE),
              e.texParameterf(e.TEXTURE_2D, e.TEXTURE_MIN_FILTER, e.LINEAR),
              e.framebufferTexture2D(
                e.FRAMEBUFFER,
                e.COLOR_ATTACHMENT0,
                e.TEXTURE_2D,
                this._renderTexture,
                0
              );
            let a = e.checkFramebufferStatus(e.FRAMEBUFFER);
            if (a !== e.FRAMEBUFFER_COMPLETE)
              throw new Error("Framebuffer not complete: " + a.toString());
            return (
              (this._framebufferWidth = t),
              (this._framebufferHeight = r),
              e.bindTexture(e.TEXTURE_2D, i),
              e.bindFramebuffer(e.FRAMEBUFFER, null),
              this._framebufferId
            );
          }
          _getVertexBuffer(e) {
            if (this._vertexBuffer) return this._vertexBuffer;
            if (((this._vertexBuffer = e.createBuffer()), !this._vertexBuffer))
              throw new Error("Unable to create vertex buffer");
            e.bindBuffer(e.ARRAY_BUFFER, this._vertexBuffer);
            let t = new Float32Array([
              -1, -1, 0, 0, -1, 1, 0, 1, 1, 1, 1, 1, 1, -1, 1, 0,
            ]);
            return (
              e.bufferData(e.ARRAY_BUFFER, t, e.STATIC_DRAW), this._vertexBuffer
            );
          }
          _getIndexBuffer(e) {
            if (this._indexBuffer) return this._indexBuffer;
            if (((this._indexBuffer = e.createBuffer()), !this._indexBuffer))
              throw new Error("Unable to create index buffer");
            e.bindBuffer(e.ELEMENT_ARRAY_BUFFER, this._indexBuffer);
            let t = new Uint16Array([0, 1, 2, 0, 2, 3]);
            return (
              e.bufferData(e.ELEMENT_ARRAY_BUFFER, t, e.STATIC_DRAW),
              this._indexBuffer
            );
          }
          _getGreyscaleShader(e) {
            if (this._greyscaleShader) return this._greyscaleShader;
            let t = e.createProgram();
            if (!t) throw new Error("Unable to create program");
            let r = u(e, e.VERTEX_SHADER, Ue),
              i = u(e, e.FRAGMENT_SHADER, Ce);
            e.attachShader(t, r), e.attachShader(t, i), d(e, t);
            let a = e.getUniformLocation(t, "uTexWidth");
            if (!a) throw new Error("Unable to get uniform location uTexWidth");
            let n = e.getUniformLocation(t, "uUvTransform");
            if (!n)
              throw new Error("Unable to get uniform location uUvTransform");
            let s = e.getUniformLocation(t, "uSampler");
            if (!s) throw new Error("Unable to get uniform location uSampler");
            return (
              (this._greyscaleShader = {
                program: t,
                aVertexPositionLoc: e.getAttribLocation(t, "aVertexPosition"),
                aTextureCoordLoc: e.getAttribLocation(t, "aTextureCoord"),
                uTexWidthLoc: a,
                uUvTransformLoc: n,
                uSamplerLoc: s,
              }),
              this._greyscaleShader
            );
          }
        }
        let Ue =
            "\n    attribute vec4 aVertexPosition;\n    attribute vec2 aTextureCoord;\n\n    varying highp vec2 vTextureCoord1;\n    varying highp vec2 vTextureCoord2;\n    varying highp vec2 vTextureCoord3;\n    varying highp vec2 vTextureCoord4;\n\n    uniform float uTexWidth;\n\tuniform mat4 uUvTransform;\n\n    void main(void) {\n      highp vec2 offset1 = vec2(1.5 / uTexWidth, 0);\n      highp vec2 offset2 = vec2(0.5 / uTexWidth, 0);\n\n      gl_Position = aVertexPosition;\n      vTextureCoord1 = (uUvTransform * vec4(aTextureCoord - offset1, 0, 1)).xy;\n      vTextureCoord2 = (uUvTransform * vec4(aTextureCoord - offset2, 0, 1)).xy;\n      vTextureCoord3 = (uUvTransform * vec4(aTextureCoord + offset2, 0, 1)).xy;\n      vTextureCoord4 = (uUvTransform * vec4(aTextureCoord + offset1, 0, 1)).xy;\n    }\n",
          Ce =
            "\n  varying highp vec2 vTextureCoord1;\n  varying highp vec2 vTextureCoord2;\n  varying highp vec2 vTextureCoord3;\n  varying highp vec2 vTextureCoord4;\n\n  uniform sampler2D uSampler;\n\n  const lowp vec3 colorWeights = vec3(77.0 / 256.0, 150.0 / 256.0, 29.0 / 256.0);\n\n  void main(void) {\n    lowp vec4 outpx;\n\n    outpx.r = dot(colorWeights, texture2D(uSampler, vTextureCoord1).xyz);\n    outpx.g = dot(colorWeights, texture2D(uSampler, vTextureCoord2).xyz);\n    outpx.b = dot(colorWeights, texture2D(uSampler, vTextureCoord3).xyz);\n    outpx.a = dot(colorWeights, texture2D(uSampler, vTextureCoord4).xyz);\n\n    gl_FragColor = outpx;\n  }\n",
          De = 1,
          Pe = new Map();
        class Be extends Te {
          constructor(e, t) {
            super(),
              (this._video = e),
              (this._pipeline = t),
              (this._isPaused = !0),
              (this._hadFrames = !1),
              (this._isUserFacing = !1),
              (this._cameraToScreenRotation = 0),
              (this._isUploadFrame = !0),
              (this._cameraToDeviceTransform = v()),
              (this._cameraToDeviceTransformUserFacing = v()),
              (this._cameraModel = new Float32Array([
                300, 300, 160, 120, 0, 0,
              ])),
              T(this._cameraToDeviceTransformUserFacing, [-1, 1, -1]);
            let r = this._video;
            this._video instanceof HTMLVideoElement
              ? r.addEventListener("loadedmetadata", () => {
                  this._hadFrames = !0;
                })
              : (this._hadFrames = !0),
              (this._resetGLContext = this._resetGLContext.bind(this));
            let i = rt.get(this._pipeline);
            i && i.onGLContextReset.bind(this._resetGLContext);
          }
          static createVideoElementSource(e, t) {
            let r = De++;
            return (
              Pe.set(r, new Be(t, e)),
              re("html_element_source_t initialized"),
              r
            );
          }
          static getVideoElementSource(e) {
            return Pe.get(e);
          }
          _resetGLContext() {
            var e, t;
            (this._currentVideoTexture = void 0),
              null ===
                (t =
                  null === (e = this._imageProcessor) || void 0 === e
                    ? void 0
                    : e.resetGLContext) ||
                void 0 === t ||
                t.call(e);
          }
          destroy() {
            let e = rt.get(this._pipeline);
            e && e.onGLContextReset.unbind(this._resetGLContext),
              this.pause(),
              this._resetGLContext();
          }
          pause() {
            this._isPaused = !0;
            let e = rt.get(this._pipeline);
            e &&
              e.currentCameraSource === this &&
              (e.currentCameraSource = void 0);
          }
          start() {
            var e;
            this._isPaused &&
              ((this._isUploadFrame = !0),
              this._video instanceof HTMLVideoElement &&
                (this._hadFrames = !1)),
              (this._isPaused = !1);
            let t = rt.get(this._pipeline);
            t &&
              t.currentCameraSource !== this &&
              (null === (e = t.currentCameraSource) ||
                void 0 === e ||
                e.pause(),
              (t.currentCameraSource = this));
          }
          getFrame(e) {
            let t = rt.get(this._pipeline);
            if (!t) return;
            let r = t.glContext;
            if (r && !this._isPaused && this._hadFrames)
              try {
                let i = this._processFrame(r, this._cameraToScreenRotation, e);
                if (i) {
                  let e = t.registerToken(i);
                  t.sendDataToWorker(
                    i.data || new ArrayBuffer(0),
                    e,
                    i.dataWidth,
                    i.dataHeight,
                    i.userFacing,
                    i.cameraToDevice,
                    i.cameraModel
                  );
                }
              } catch (e) {
                console.log("Unable to process frame");
              }
          }
          _processFrame(e, t, r) {
            let i = rt.get(this._pipeline);
            if (!i) return;
            if (
              (this._imageProcessor || (this._imageProcessor = new Se(e)),
              this._isUploadFrame)
            ) {
              if (
                (this._currentVideoTexture ||
                  (this._currentVideoTexture = i.getVideoTexture()),
                !this._currentVideoTexture)
              )
                return;
              return (
                this._imageProcessor.uploadFrame(
                  this._currentVideoTexture,
                  this._video,
                  t,
                  this._isUserFacing
                ),
                void (this._isUploadFrame = !this._isUploadFrame)
              );
            }
            if (r || !this._currentVideoTexture) return;
            this._isUploadFrame = !this._isUploadFrame;
            let a = Re.dataWidth * Re.dataHeight,
              n = i.cameraPixelArrays.pop();
            for (; n && n.byteLength !== a; ) n = i.cameraPixelArrays.pop();
            n || (n = new ArrayBuffer(a));
            let s = this._currentVideoTexture;
            this._currentVideoTexture = void 0;
            let o = (300 * Re.dataWidth) / 320;
            return (
              (this._cameraModel[0] = o),
              (this._cameraModel[1] = o),
              (this._cameraModel[2] = 0.5 * Re.dataWidth),
              (this._cameraModel[3] = 0.5 * Re.dataHeight),
              Object.assign(
                Object.assign({}, this._imageProcessor.readFrame(s, n)),
                {
                  cameraModel: this._cameraModel,
                  cameraSource: this,
                  cameraToDevice: this._isUserFacing
                    ? this._cameraToDeviceTransformUserFacing
                    : this._cameraToDeviceTransform,
                }
              )
            );
          }
          uploadGL() {}
        }
        var Oe = function (e, t, r, i) {
          return new (r || (r = Promise))(function (a, n) {
            function s(e) {
              try {
                _(i.next(e));
              } catch (e) {
                n(e);
              }
            }
            function o(e) {
              try {
                _(i.throw(e));
              } catch (e) {
                n(e);
              }
            }
            function _(e) {
              var t;
              e.done
                ? a(e.value)
                : ((t = e.value),
                  t instanceof r
                    ? t
                    : new r(function (e) {
                        e(t);
                      })).then(s, o);
            }
            _((i = i.apply(e, t || [])).next());
          });
        };
        let ze = document.createElement("video");
        ze.setAttribute("playsinline", ""),
          ze.setAttribute("webkit-playsinline", ""),
          Re.videoElementInDOM &&
            ((ze.style.width = "0px"),
            (ze.style.height = "0px"),
            document.body.appendChild(ze));
        class Ve extends Be {
          constructor(e, t, r) {
            super(ze, t),
              (this._impl = e),
              (this._deviceId = r),
              (this._currentStream = null),
              (this._activeDeviceId = null),
              (this._hasStartedOrientation = !1),
              (this._deviceMotionListener = (e) => {
                let t = rt.get(this._pipeline);
                if (!t) return;
                let r =
                  void 0 !== e.timeStamp && null !== e.timeStamp
                    ? e.timeStamp
                    : performance.now();
                null !== e.accelerationIncludingGravity &&
                  null !== e.accelerationIncludingGravity.x &&
                  null !== e.accelerationIncludingGravity.y &&
                  null !== e.accelerationIncludingGravity.z &&
                  t.motionAccelerometerSubmit(
                    r,
                    e.accelerationIncludingGravity.x *
                      Re.deviceMotionMutliplier,
                    e.accelerationIncludingGravity.y *
                      Re.deviceMotionMutliplier,
                    e.accelerationIncludingGravity.z * Re.deviceMotionMutliplier
                  ),
                  null === e.rotationRate ||
                  null === e.rotationRate.alpha ||
                  null === e.rotationRate.beta ||
                  null === e.rotationRate.gamma ||
                  this._hasStartedOrientation
                    ? this._hasStartedOrientation ||
                      this._startDeviceOrientation()
                    : (e.timeStamp,
                      t.motionRotationRateSubmit(
                        r,
                        (e.rotationRate.alpha * Math.PI) / -180,
                        (e.rotationRate.beta * Math.PI) / -180,
                        (e.rotationRate.gamma * Math.PI) / -180
                      ));
              });
          }
          destroy() {
            Ze(this._impl), super.destroy();
          }
          _stop() {
            this._currentStream &&
              (this._currentStream.getTracks().forEach((e) => e.stop()),
              (this._currentStream = null));
          }
          pause() {
            super.pause(), this._stopDeviceMotion(), this._syncCamera();
          }
          start() {
            super.start(), this._startDeviceMotion(), this._syncCamera();
          }
          _getConstraints() {
            return Oe(this, void 0, void 0, function* () {
              let e, t;
              this._deviceId !== Ve.DEFAULT_DEVICE_ID &&
              this._deviceId !== Ve.USER_DEFAULT_DEVICE_ID
                ? (e = this._deviceId)
                : (t =
                    this._deviceId === Ve.DEFAULT_DEVICE_ID
                      ? "environment"
                      : "user");
              let r = {
                audio: !1,
                video: {
                  facingMode: t,
                  width: Re.videoWidth,
                  height: Re.videoHeight,
                  frameRate: Re.requestHighFrameRate ? 60 : void 0,
                  deviceId: e,
                },
              };
              if (e) return r;
              if (
                !navigator.mediaDevices ||
                !navigator.mediaDevices.enumerateDevices
              )
                return r;
              let i = yield navigator.mediaDevices.enumerateDevices(),
                a = !1;
              return (
                (i = i.filter((e) => {
                  if ("videoinput" !== e.kind) return !1;
                  if (e.getCapabilities) {
                    a = !0;
                    let r = e.getCapabilities();
                    if (
                      r &&
                      r.facingMode &&
                      r.facingMode.indexOf(
                        "user" === t ? "user" : "environment"
                      ) < 0
                    )
                      return !1;
                  }
                  return !0;
                })),
                a && 0 !== i.length
                  ? ("object" == typeof r.video &&
                      (re("choosing device ID", i[i.length - 1].deviceId),
                      (r.video.deviceId = i[i.length - 1].deviceId)),
                    r)
                  : r
              );
            });
          }
          getFrame(e) {
            (this._cameraToScreenRotation = I(!1)), super.getFrame(e);
          }
          _getUserMedia() {
            return Oe(this, void 0, void 0, function* () {
              let e = yield this._getConstraints();
              return navigator.mediaDevices &&
                navigator.mediaDevices.getUserMedia
                ? yield navigator.mediaDevices.getUserMedia(e)
                : yield new Promise((t, r) => {
                    navigator.getUserMedia(e, t, r);
                  });
            });
          }
          _syncCamera() {
            return Oe(this, void 0, void 0, function* () {
              if (this._currentStream && this._isPaused) this._stop();
              else if (
                (this._currentStream &&
                  this._activeDeviceId !== this._deviceId &&
                  this._stop(),
                !this._isPaused)
              ) {
                if (
                  ((this._activeDeviceId = this._deviceId),
                  (this._currentStream = yield this._getUserMedia()),
                  this._isPaused)
                )
                  return void (yield this._syncCamera());
                if (((this._isUserFacing = !1), this._currentStream)) {
                  let e = this._currentStream.getVideoTracks();
                  e.length > 0 &&
                    (this._isUserFacing =
                      "user" === e[0].getSettings().facingMode);
                }
                if (!(this._video instanceof HTMLVideoElement)) return;
                (this._video.src = ""),
                  (this._video.loop = !1),
                  (this._video.muted = !0),
                  (this._video.srcObject = this._currentStream),
                  this._video.play();
              }
            });
          }
          _startDeviceOrientation() {
            this._hasStartedOrientation ||
              ((this._hasStartedOrientation = !0),
              (this._deviceOrientationListener = (e) => {
                let t = rt.get(this._pipeline);
                if (!t) return;
                let r =
                  void 0 !== e.timeStamp && null !== e.timeStamp
                    ? e.timeStamp
                    : performance.now();
                null !== e.alpha &&
                  null !== e.beta &&
                  null !== e.gamma &&
                  t.motionAttitudeSubmit(r, e.alpha, e.beta, e.gamma);
              }),
              window.addEventListener(
                "deviceorientation",
                this._deviceOrientationListener
              ));
          }
          _startDeviceMotion() {
            window.addEventListener(
              "devicemotion",
              this._deviceMotionListener,
              !1
            );
          }
          _stopDeviceMotion() {
            window.removeEventListener(
              "devicemotion",
              this._deviceMotionListener
            ),
              this._deviceOrientationListener &&
                window.removeEventListener(
                  "deviceorientation",
                  this._deviceOrientationListener
                );
          }
        }
        (Ve.USER_DEFAULT_DEVICE_ID =
          "Simulated User Default Device ID: a908df7f-5661-4d20-b227-a1c15d2fdb4b"),
          (Ve.DEFAULT_DEVICE_ID =
            "Simulated Default Device ID: a908df7f-5661-4d20-b227-a1c15d2fdb4b");
        var Ne = function (e, t, r, i) {
          return new (r || (r = Promise))(function (a, n) {
            function s(e) {
              try {
                _(i.next(e));
              } catch (e) {
                n(e);
              }
            }
            function o(e) {
              try {
                _(i.throw(e));
              } catch (e) {
                n(e);
              }
            }
            function _(e) {
              var t;
              e.done
                ? a(e.value)
                : ((t = e.value),
                  t instanceof r
                    ? t
                    : new r(function (e) {
                        e(t);
                      })).then(s, o);
            }
            _((i = i.apply(e, t || [])).next());
          });
        };
        class Ge extends Te {
          constructor(e, t, r) {
            super(),
              (this._impl = e),
              (this._pipeline = t),
              (this._deviceId = r),
              (this._currentStream = null),
              (this._activeDeviceId = null),
              (this._isPaused = !0),
              (this._isUserFacing = !1),
              (this._hadFrames = !1),
              (this._canvas = new OffscreenCanvas(640, 480)),
              (this._context = this._canvas.getContext("2d")),
              (this._lastFrameTime = -1),
              (this._video = document.createElement("video")),
              (this._cameraToDeviceTransform = v()),
              (this._cameraToDeviceTransformUserFacing = v()),
              (this._cameraModel = new Float32Array([
                300, 300, 160, 120, 0, 0,
              ])),
              (this._hasStartedOrientation = !1),
              (this._deviceMotionListener = (e) => {
                let t = rt.get(this._pipeline);
                if (!t) return;
                let r =
                  void 0 !== e.timeStamp && null !== e.timeStamp
                    ? e.timeStamp
                    : performance.now();
                null !== e.accelerationIncludingGravity &&
                  null !== e.accelerationIncludingGravity.x &&
                  null !== e.accelerationIncludingGravity.y &&
                  null !== e.accelerationIncludingGravity.z &&
                  t.motionAccelerometerSubmit(
                    r,
                    e.accelerationIncludingGravity.x *
                      Re.deviceMotionMutliplier,
                    e.accelerationIncludingGravity.y *
                      Re.deviceMotionMutliplier,
                    e.accelerationIncludingGravity.z * Re.deviceMotionMutliplier
                  ),
                  null === e.rotationRate ||
                  null === e.rotationRate.alpha ||
                  null === e.rotationRate.beta ||
                  null === e.rotationRate.gamma ||
                  this._hasStartedOrientation
                    ? this._hasStartedOrientation ||
                      this._startDeviceOrientation()
                    : (e.timeStamp,
                      t.motionRotationRateSubmit(
                        r,
                        (e.rotationRate.alpha * Math.PI) / -180,
                        (e.rotationRate.beta * Math.PI) / -180,
                        (e.rotationRate.gamma * Math.PI) / -180
                      ));
              }),
              re("Using ImageBitmap camera source"),
              T(this._cameraToDeviceTransformUserFacing, [-1, 1, -1]),
              (this._video.muted = !0),
              this._video.setAttribute("playsinline", ""),
              this._video.setAttribute("webkit-playsinline", ""),
              Re.videoElementInDOM &&
                ((this._video.style.width = "0px"),
                (this._video.style.height = "0px"),
                document.body.appendChild(this._video)),
              this._video.addEventListener("loadedmetadata", () => {
                this._hadFrames = !0;
              });
          }
          destroy() {
            this.pause(), Ze(this._impl);
          }
          _stop() {
            this._currentStream &&
              (this._currentStream.getTracks().forEach((e) => e.stop()),
              (this._currentStream = null));
          }
          pause() {
            this._isPaused = !0;
            let e = rt.get(this._pipeline);
            e &&
              e.currentCameraSource === this &&
              (e.currentCameraSource = void 0),
              this._stopDeviceMotion(),
              this._syncCamera();
          }
          start() {
            var e;
            let t = rt.get(this._pipeline);
            t &&
              t.currentCameraSource !== this &&
              (null === (e = t.currentCameraSource) ||
                void 0 === e ||
                e.pause(),
              (t.currentCameraSource = this)),
              (this._isPaused = !1),
              this._startDeviceMotion(),
              this._syncCamera();
          }
          _getConstraints() {
            return Ne(this, void 0, void 0, function* () {
              let e, t;
              this._deviceId !== Ge.DEFAULT_DEVICE_ID &&
              this._deviceId !== Ge.USER_DEFAULT_DEVICE_ID
                ? (e = this._deviceId)
                : (t =
                    this._deviceId === Ge.DEFAULT_DEVICE_ID
                      ? "environment"
                      : "user");
              let r = {
                audio: !1,
                video: {
                  facingMode: t,
                  width: Re.videoWidth,
                  height: Re.videoHeight,
                  frameRate: Re.requestHighFrameRate ? 60 : void 0,
                  deviceId: e,
                },
              };
              if (e) return r;
              if (
                !navigator.mediaDevices ||
                !navigator.mediaDevices.enumerateDevices
              )
                return r;
              let i = yield navigator.mediaDevices.enumerateDevices(),
                a = !1;
              return (
                (i = i.filter((e) => {
                  if ("videoinput" !== e.kind) return !1;
                  if (e.getCapabilities) {
                    a = !0;
                    let r = e.getCapabilities();
                    if (
                      r &&
                      r.facingMode &&
                      r.facingMode.indexOf(
                        "user" === t ? "user" : "environment"
                      ) < 0
                    )
                      return !1;
                  }
                  return !0;
                })),
                a && 0 !== i.length
                  ? ("object" == typeof r.video &&
                      (re("choosing device ID", i[i.length - 1].deviceId),
                      (r.video.deviceId = i[i.length - 1].deviceId)),
                    r)
                  : r
              );
            });
          }
          getFrame(e) {
            var t, r;
            if (!this._context) return;
            if (!this._hadFrames) return;
            if (e) return;
            let i = performance.now();
            if (i < this._lastFrameTime + 25) return;
            (this._lastFrameTime = i),
              this._canvas.width !== this._video.videoWidth &&
                (this._canvas.width = this._video.videoWidth),
              this._canvas.height !== this._video.videoHeight &&
                (this._canvas.height = this._video.videoHeight),
              this._context.drawImage(this._video, 0, 0);
            const a = this._canvas.transferToImageBitmap();
            let n = I(!1),
              s = rt.get(this._pipeline);
            if (!s) return;
            let o = (300 * Re.dataWidth) / 320;
            (this._cameraModel[0] = o),
              (this._cameraModel[1] = o),
              (this._cameraModel[2] = 0.5 * Re.dataWidth),
              (this._cameraModel[3] = 0.5 * Re.dataHeight);
            let _ = s.registerToken({
              dataWidth: this._canvas.width,
              dataHeight: this._canvas.height,
              texture: void 0,
              userFacing: this._isUserFacing,
              cameraSource: this,
              cameraModel: this._cameraModel.slice(),
              cameraToDevice: this._isUserFacing
                ? this._cameraToDeviceTransformUserFacing
                : this._cameraToDeviceTransform,
            });
            null ===
              (r =
                null === (t = rt.get(this._pipeline)) || void 0 === t
                  ? void 0
                  : t.sendImageBitmapToWorker) ||
              void 0 === r ||
              r.call(
                t,
                a,
                n,
                this._isUserFacing,
                _,
                this._cameraModel,
                this._isUserFacing
                  ? this._cameraToDeviceTransformUserFacing
                  : this._cameraToDeviceTransform
              );
          }
          _getUserMedia() {
            return Ne(this, void 0, void 0, function* () {
              let e = yield this._getConstraints();
              return navigator.mediaDevices &&
                navigator.mediaDevices.getUserMedia
                ? yield navigator.mediaDevices.getUserMedia(e)
                : yield new Promise((t, r) => {
                    navigator.getUserMedia(e, t, r);
                  });
            });
          }
          _syncCamera() {
            return Ne(this, void 0, void 0, function* () {
              if (this._currentStream && this._isPaused) this._stop();
              else if (
                (this._currentStream &&
                  this._activeDeviceId !== this._deviceId &&
                  this._stop(),
                !this._isPaused)
              ) {
                if (
                  ((this._activeDeviceId = this._deviceId),
                  (this._currentStream = yield this._getUserMedia()),
                  this._isPaused)
                )
                  return void (yield this._syncCamera());
                if (((this._isUserFacing = !1), this._currentStream)) {
                  let e = this._currentStream.getVideoTracks();
                  e.length > 0 &&
                    (this._isUserFacing =
                      "user" === e[0].getSettings().facingMode);
                }
                (this._video.src = ""),
                  (this._video.loop = !1),
                  (this._video.muted = !0),
                  (this._video.srcObject = this._currentStream),
                  this._video.play();
              }
            });
          }
          _startDeviceOrientation() {
            this._hasStartedOrientation ||
              ((this._hasStartedOrientation = !0),
              window.addEventListener("deviceorientation", (e) => {
                let t = rt.get(this._pipeline);
                if (!t) return;
                let r =
                  void 0 !== e.timeStamp && null !== e.timeStamp
                    ? e.timeStamp
                    : performance.now();
                null !== e.alpha &&
                  null !== e.beta &&
                  null !== e.gamma &&
                  t.motionAttitudeSubmit(r, e.alpha, e.beta, e.gamma);
              }));
          }
          _startDeviceMotion() {
            window.addEventListener(
              "devicemotion",
              this._deviceMotionListener,
              !1
            );
          }
          _stopDeviceMotion() {
            window.removeEventListener(
              "devicemotion",
              this._deviceMotionListener
            );
          }
          uploadGL(e) {
            const t = rt.get(this._pipeline),
              r = null == t ? void 0 : t.glContext;
            if (!e || e.texture || !e.frame || !t || !r) return;
            let i = t.getVideoTexture();
            i &&
              (r.bindTexture(r.TEXTURE_2D, i),
              r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL, !1),
              r.texImage2D(
                r.TEXTURE_2D,
                0,
                r.RGBA,
                r.RGBA,
                r.UNSIGNED_BYTE,
                e.frame
              ),
              r.bindTexture(r.TEXTURE_2D, null),
              (e.texture = i),
              e.frame.close(),
              delete e.frame);
          }
        }
        (Ge.USER_DEFAULT_DEVICE_ID =
          "Simulated User Default Device ID: a908df7f-5661-4d20-b227-a1c15d2fdb4b"),
          (Ge.DEFAULT_DEVICE_ID =
            "Simulated Default Device ID: a908df7f-5661-4d20-b227-a1c15d2fdb4b");
        var He = function (e, t, r, i) {
          return new (r || (r = Promise))(function (a, n) {
            function s(e) {
              try {
                _(i.next(e));
              } catch (e) {
                n(e);
              }
            }
            function o(e) {
              try {
                _(i.throw(e));
              } catch (e) {
                n(e);
              }
            }
            function _(e) {
              var t;
              e.done
                ? a(e.value)
                : ((t = e.value),
                  t instanceof r
                    ? t
                    : new r(function (e) {
                        e(t);
                      })).then(s, o);
            }
            _((i = i.apply(e, t || [])).next());
          });
        };
        class We extends Te {
          constructor(e, t, r) {
            super(),
              (this._impl = e),
              (this._pipeline = t),
              (this._deviceId = r),
              (this._currentStream = null),
              (this._activeDeviceId = null),
              (this._isPaused = !0),
              (this._isUserFacing = !1),
              (this._cameraToScreenRotation = 0),
              (this._hasStartedOrientation = !1),
              (this._deviceMotionListener = (e) => {
                let t = rt.get(this._pipeline);
                if (!t) return;
                let r =
                  void 0 !== e.timeStamp && null !== e.timeStamp
                    ? e.timeStamp
                    : performance.now();
                null !== e.accelerationIncludingGravity &&
                  null !== e.accelerationIncludingGravity.x &&
                  null !== e.accelerationIncludingGravity.y &&
                  null !== e.accelerationIncludingGravity.z &&
                  t.motionAccelerometerSubmit(
                    r,
                    e.accelerationIncludingGravity.x *
                      Re.deviceMotionMutliplier,
                    e.accelerationIncludingGravity.y *
                      Re.deviceMotionMutliplier,
                    e.accelerationIncludingGravity.z * Re.deviceMotionMutliplier
                  ),
                  null === e.rotationRate ||
                  null === e.rotationRate.alpha ||
                  null === e.rotationRate.beta ||
                  null === e.rotationRate.gamma ||
                  this._hasStartedOrientation
                    ? this._hasStartedOrientation ||
                      this._startDeviceOrientation()
                    : (e.timeStamp,
                      t.motionRotationRateSubmit(
                        r,
                        (e.rotationRate.alpha * Math.PI) / -180,
                        (e.rotationRate.beta * Math.PI) / -180,
                        (e.rotationRate.gamma * Math.PI) / -180
                      ));
              }),
              re("Using MSTP camera source");
          }
          destroy() {
            this.pause(), Ze(this._impl);
          }
          _stop() {
            this._currentStream &&
              (this._currentStream.getTracks().forEach((e) => e.stop()),
              (this._currentStream = null));
          }
          pause() {
            this._isPaused = !0;
            let e = rt.get(this._pipeline);
            e &&
              e.currentCameraSource === this &&
              (e.currentCameraSource = void 0),
              this._stopDeviceMotion(),
              this._syncCamera();
          }
          start() {
            var e;
            let t = rt.get(this._pipeline);
            t &&
              t.currentCameraSource !== this &&
              (null === (e = t.currentCameraSource) ||
                void 0 === e ||
                e.pause(),
              (t.currentCameraSource = this)),
              (this._isPaused = !1),
              this._startDeviceMotion(),
              this._syncCamera();
          }
          _getConstraints() {
            return He(this, void 0, void 0, function* () {
              let e, t;
              this._deviceId !== We.DEFAULT_DEVICE_ID &&
              this._deviceId !== We.USER_DEFAULT_DEVICE_ID
                ? (e = this._deviceId)
                : (t =
                    this._deviceId === We.DEFAULT_DEVICE_ID
                      ? "environment"
                      : "user");
              let r = {
                audio: !1,
                video: {
                  facingMode: t,
                  width: Re.videoWidth,
                  height: Re.videoHeight,
                  frameRate: Re.requestHighFrameRate ? 60 : 30,
                  deviceId: e,
                },
              };
              if (e) return r;
              if (
                !navigator.mediaDevices ||
                !navigator.mediaDevices.enumerateDevices
              )
                return r;
              let i = yield navigator.mediaDevices.enumerateDevices(),
                a = !1;
              return (
                (i = i.filter((e) => {
                  if ("videoinput" !== e.kind) return !1;
                  if (e.getCapabilities) {
                    a = !0;
                    let r = e.getCapabilities();
                    if (
                      r &&
                      r.facingMode &&
                      r.facingMode.indexOf(
                        "user" === t ? "user" : "environment"
                      ) < 0
                    )
                      return !1;
                  }
                  return !0;
                })),
                a && 0 !== i.length
                  ? ("object" == typeof r.video &&
                      (re("choosing device ID", i[i.length - 1].deviceId),
                      (r.video.deviceId = i[i.length - 1].deviceId)),
                    r)
                  : r
              );
            });
          }
          getFrame(e) {
            var t, r;
            let i = I(!1);
            i != this._cameraToScreenRotation &&
              (null ===
                (r =
                  null === (t = rt.get(this._pipeline)) || void 0 === t
                    ? void 0
                    : t.sendCameraToScreenRotationToWorker) ||
                void 0 === r ||
                r.call(t, i),
              (this._cameraToScreenRotation = i));
          }
          _getUserMedia() {
            return He(this, void 0, void 0, function* () {
              let e = yield this._getConstraints();
              return navigator.mediaDevices &&
                navigator.mediaDevices.getUserMedia
                ? yield navigator.mediaDevices.getUserMedia(e)
                : yield new Promise((t, r) => {
                    navigator.getUserMedia(e, t, r);
                  });
            });
          }
          _syncCamera() {
            return He(this, void 0, void 0, function* () {
              if (this._currentStream && this._isPaused) this._stop();
              else if (
                (this._currentStream &&
                  this._activeDeviceId !== this._deviceId &&
                  this._stop(),
                !this._isPaused)
              ) {
                if (
                  ((this._activeDeviceId = this._deviceId),
                  (this._currentStream = yield this._getUserMedia()),
                  this._isPaused)
                )
                  return void (yield this._syncCamera());
                if (((this._isUserFacing = !1), this._currentStream)) {
                  let e = this._currentStream.getVideoTracks();
                  if (e.length > 0) {
                    this._isUserFacing =
                      "user" === e[0].getSettings().facingMode;
                    let t = new MediaStreamTrackProcessor({ track: e[0] }),
                      r = rt.get(this._pipeline);
                    r &&
                      r.sendCameraStreamToWorker(
                        this._impl,
                        t.readable,
                        this._isUserFacing
                      );
                  }
                }
              }
            });
          }
          _startDeviceOrientation() {
            this._hasStartedOrientation ||
              ((this._hasStartedOrientation = !0),
              window.addEventListener("deviceorientation", (e) => {
                let t = rt.get(this._pipeline);
                if (!t) return;
                let r =
                  void 0 !== e.timeStamp && null !== e.timeStamp
                    ? e.timeStamp
                    : performance.now();
                null !== e.alpha &&
                  null !== e.beta &&
                  null !== e.gamma &&
                  t.motionAttitudeSubmit(r, e.alpha, e.beta, e.gamma);
              }));
          }
          _startDeviceMotion() {
            window.addEventListener(
              "devicemotion",
              this._deviceMotionListener,
              !1
            );
          }
          _stopDeviceMotion() {
            window.removeEventListener(
              "devicemotion",
              this._deviceMotionListener
            );
          }
          uploadGL(e) {
            const t = rt.get(this._pipeline),
              r = null == t ? void 0 : t.glContext;
            if (!e || e.texture || !e.frame || !t || !r) return;
            let i = t.getVideoTexture();
            i &&
              (r.bindTexture(r.TEXTURE_2D, i),
              r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL, !1),
              r.texImage2D(
                r.TEXTURE_2D,
                0,
                r.RGBA,
                r.RGBA,
                r.UNSIGNED_BYTE,
                e.frame
              ),
              r.bindTexture(r.TEXTURE_2D, null),
              (e.texture = i),
              e.frame.close(),
              delete e.frame);
          }
        }
        (We.USER_DEFAULT_DEVICE_ID =
          "Simulated User Default Device ID: a908df7f-5661-4d20-b227-a1c15d2fdb4b"),
          (We.DEFAULT_DEVICE_ID =
            "Simulated Default Device ID: a908df7f-5661-4d20-b227-a1c15d2fdb4b");
        let Ye = 1,
          Xe = new Map();
        function qe(e, t) {
          Xe.set(e, t);
        }
        function je(e) {
          return Xe.get(e);
        }
        function Ze(e) {
          Xe.delete(e);
        }
        class Ke {
          constructor(e) {
            this._gl = e;
          }
          dispose() {
            this._vbo && this._gl.deleteBuffer(this._vbo),
              this._uvbo && this._gl.deleteBuffer(this._uvbo),
              this._ibo && this._gl.deleteBuffer(this._ibo),
              this._shader && this._gl.deleteProgram(this._shader.prog),
              (this._vbo = void 0),
              (this._uvbo = void 0),
              (this._ibo = void 0),
              (this._shader = void 0);
          }
          _generateIBO(e, t) {
            if (this._ibo && this._lastIndices === e) return this._ibo;
            if (
              ((this._lastIndices = e),
              this._ibo || (this._ibo = t.createBuffer()),
              !this._ibo)
            )
              throw new Error("Unable to create buffer object");
            return (
              t.bindBuffer(t.ELEMENT_ARRAY_BUFFER, this._ibo),
              t.bufferData(t.ELEMENT_ARRAY_BUFFER, e, t.STATIC_DRAW),
              t.bindBuffer(t.ELEMENT_ARRAY_BUFFER, null),
              this._ibo
            );
          }
          _generateVBO(e, t) {
            if ((this._vbo || (this._vbo = t.createBuffer()), !this._vbo))
              throw new Error("Unable to create buffer object");
            return (
              t.bindBuffer(t.ARRAY_BUFFER, this._vbo),
              t.bufferData(t.ARRAY_BUFFER, e, t.STATIC_DRAW),
              t.bindBuffer(t.ARRAY_BUFFER, null),
              this._vbo
            );
          }
          _generateUVBO(e, t) {
            if ((this._uvbo || (this._uvbo = t.createBuffer()), !this._uvbo))
              throw new Error("Unable to create buffer object");
            return (
              t.bindBuffer(t.ARRAY_BUFFER, this._uvbo),
              t.bufferData(t.ARRAY_BUFFER, e, t.STATIC_DRAW),
              t.bindBuffer(t.ARRAY_BUFFER, null),
              this._uvbo
            );
          }
          draw(e, t, r) {
            var i;
            const a = t.getPreviewMesh(r),
              n =
                null === (i = t.getTargetInfo(r).preview) || void 0 === i
                  ? void 0
                  : i.image;
            if (!a || !n) return;
            if (!n.complete) return;
            let s = this._gl,
              o = this._getShader(s),
              _ = this._generateVBO(a.vertices, s),
              c = this._generateUVBO(a.uvs, s),
              l = this._generateIBO(a.indices, s);
            s.enable(s.DEPTH_TEST),
              s.enable(s.CULL_FACE),
              s.useProgram(o.prog),
              s.uniformMatrix4fv(o.unif_matrix, !1, e),
              s.activeTexture(s.TEXTURE0),
              s.bindTexture(
                s.TEXTURE_2D,
                (function (e, t) {
                  let r = Qe.get(t);
                  if (r) return r;
                  if (((r = e.createTexture() || void 0), !r))
                    throw new Error("Unable to create texture");
                  Qe.set(t, r),
                    e.bindTexture(e.TEXTURE_2D, r),
                    e.texParameteri(
                      e.TEXTURE_2D,
                      e.TEXTURE_MAG_FILTER,
                      e.LINEAR
                    ),
                    e.texParameteri(
                      e.TEXTURE_2D,
                      e.TEXTURE_MIN_FILTER,
                      e.LINEAR
                    ),
                    e.texParameteri(
                      e.TEXTURE_2D,
                      e.TEXTURE_WRAP_S,
                      e.CLAMP_TO_EDGE
                    ),
                    e.texParameteri(
                      e.TEXTURE_2D,
                      e.TEXTURE_WRAP_T,
                      e.CLAMP_TO_EDGE
                    );
                  const i = e.RGBA,
                    a = e.RGBA,
                    n = e.UNSIGNED_BYTE;
                  return (
                    e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL, !0),
                    e.texImage2D(e.TEXTURE_2D, 0, i, a, n, t),
                    t.addEventListener("load", () => {
                      if (!r) return;
                      e.bindTexture(e.TEXTURE_2D, r);
                      const i = e.RGBA,
                        a = e.RGBA,
                        n = e.UNSIGNED_BYTE;
                      e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL, !0),
                        e.texImage2D(e.TEXTURE_2D, 0, i, a, n, t);
                    }),
                    r
                  );
                })(s, n)
              ),
              s.uniform1i(o.unif_skinSampler, 0),
              s.bindBuffer(s.ARRAY_BUFFER, _),
              s.vertexAttribPointer(o.attr_position, 3, s.FLOAT, !1, 0, 0),
              s.enableVertexAttribArray(o.attr_position),
              s.bindBuffer(s.ARRAY_BUFFER, c),
              s.vertexAttribPointer(o.attr_textureCoord, 2, s.FLOAT, !1, 0, 0),
              s.enableVertexAttribArray(o.attr_textureCoord),
              s.bindBuffer(s.ELEMENT_ARRAY_BUFFER, l),
              s.drawElements(
                s.TRIANGLES,
                a.indices.length,
                s.UNSIGNED_SHORT,
                0
              ),
              s.disableVertexAttribArray(o.attr_position),
              s.disableVertexAttribArray(o.attr_textureCoord),
              s.bindBuffer(s.ARRAY_BUFFER, null),
              s.bindBuffer(s.ELEMENT_ARRAY_BUFFER, null);
          }
          _getShader(e) {
            if (this._shader) return this._shader;
            let t = e.createProgram();
            if (!t) throw new Error("Unable to create program");
            let r = u(e, e.VERTEX_SHADER, $e),
              i = u(e, e.FRAGMENT_SHADER, Je);
            e.attachShader(t, r), e.attachShader(t, i), d(e, t);
            let a = e.getUniformLocation(t, "matrix");
            if (!a) throw new Error("Unable to get uniform location mattrix");
            let n = e.getUniformLocation(t, "skinSampler");
            if (!n)
              throw new Error("Unable to get uniform location skinSampler");
            return (
              (this._shader = {
                prog: t,
                unif_matrix: a,
                unif_skinSampler: n,
                attr_position: e.getAttribLocation(t, "position"),
                attr_textureCoord: e.getAttribLocation(t, "textureCoord"),
              }),
              this._shader
            );
          }
        }
        const Qe = new Map();
        let $e =
            "\n#ifndef GL_ES\n#define highp\n#define mediump\n#define lowp\n#endif\n\nuniform mat4 matrix;\nattribute vec4 position;\nattribute vec2 textureCoord;\n\nvarying highp vec2 vTextureCoord;\n\nvoid main()\n{\n    gl_Position = matrix * position;\n    vTextureCoord = textureCoord;\n}",
          Je =
            "\n#define highp mediump\n#ifdef GL_ES\n    // define default precision for float, vec, mat.\n    precision highp float;\n#else\n#define highp\n#define mediump\n#define lowp\n#endif\n\nvarying highp vec2 vTextureCoord;\nuniform sampler2D skinSampler;\n\nvoid main()\n{\n    gl_FragColor = texture2D(skinSampler, vTextureCoord);\n}",
          et = new Map(),
          tt = v();
        class rt {
          constructor(e, t, r) {
            (this._client = e),
              (this._impl = t),
              (this._mgr = r),
              (this.pendingMessages = []),
              (this.cameraTokens = new Map()),
              (this.nextCameraToken = 1),
              (this.tokensInFlight = 0),
              (this.videoTextures = []),
              (this.cameraPixelArrays = []),
              (this._sequenceRecordDeviceAttitudeMatrices = !0),
              (this._sequenceRecorderFirstCameraToken = 0),
              (this.onGLContextReset = new S());
          }
          static create(e, t) {
            let r = e.pipeline_create();
            return et.set(r, new rt(e, r, t)), r;
          }
          static get(e) {
            return et.get(e);
          }
          frameUpdate(e) {
            for (let t of this.pendingMessages)
              e.processMessages(t),
                this._mgr.postOutgoingMessage(
                  { t: "buf", p: this._impl, d: t },
                  [t]
                );
            (this.pendingMessages = []), this.cleanOldFrames();
          }
          cleanOldFrames() {
            var e, t;
            let r = this._client.pipeline_camera_frame_user_data(this._impl);
            if (r)
              for (let i of this.cameraTokens)
                i[0] < r &&
                  (i[1].texture && this.videoTextures.push(i[1].texture),
                  null ===
                    (t =
                      null === (e = i[1].frame) || void 0 === e
                        ? void 0
                        : e.close) ||
                    void 0 === t ||
                    t.call(e),
                  this.cameraTokens.delete(i[0]));
          }
          cameraTokenReturn(e) {
            if (
              this._sequenceRecorder &&
              this._sequenceRecordDeviceAttitudeMatrices &&
              e.token >= this._sequenceRecorderFirstCameraToken
            ) {
              let t = this.cameraTokens.get(e.token);
              t &&
                (e.att && this._sequenceRecorder.appendAttitudeMatrix(e.att),
                (t.data = e.d),
                this._sequenceRecorder.appendCameraFrame(t));
            }
            this.cameraPixelArrays.push(e.d), this.tokensInFlight--;
          }
          sequenceRecordStart(e) {
            this._sequenceRecorder || (this._sequenceRecorder = new Ee(e)),
              this._sequenceRecorder.start(),
              (this._sequenceRecorderFirstCameraToken = this.nextCameraToken);
          }
          sequenceRecordStop() {
            var e;
            null === (e = this._sequenceRecorder) || void 0 === e || e.stop();
          }
          sequenceRecordData() {
            var e;
            return (
              (null === (e = this._sequenceRecorder) || void 0 === e
                ? void 0
                : e.data()) || new Uint8Array(0)
            );
          }
          sequenceRecordClear() {
            delete this._sequenceRecorder;
          }
          sequenceRecordDeviceAttitudeMatrices(e) {
            this._sequenceRecordDeviceAttitudeMatrices = e;
          }
          getVideoTexture() {
            return this.videoTextures.pop();
          }
          destroy() {
            this._client.pipeline_destroy(this._impl), et.delete(this._impl);
          }
          getCurrentCameraInfo() {
            let e = this._client.pipeline_camera_frame_user_data(this._impl);
            if (e) return this.cameraTokens.get(e);
          }
          cameraFrameDrawGL(e, t, r) {
            if (!this.glContext) return;
            let i = this.getCurrentCameraInfo();
            i &&
              (this._cameraDraw || (this._cameraDraw = new le(this.glContext)),
              this._cameraDraw.drawCameraFrame(e, t, i, !0 === r));
          }
          glContextLost() {
            this._cameraDraw && this._cameraDraw.dispose(),
              this._faceDraw && this._faceDraw.dispose(),
              this._imageTargetPreviewDraw &&
                this._imageTargetPreviewDraw.dispose(),
              this._faceProjectDraw && this._faceProjectDraw.dispose(),
              delete this._cameraDraw,
              delete this._faceDraw,
              delete this._imageTargetPreviewDraw,
              delete this._faceProjectDraw,
              (f = void 0),
              (h = void 0),
              (p = void 0),
              (m = {}),
              this.onGLContextReset.emit();
            for (let e of this.videoTextures)
              this.glContext && this.glContext.deleteTexture(e);
            this.videoTextures = [];
            for (let e of this.cameraTokens)
              this.glContext &&
                e[1].texture &&
                this.glContext.deleteTexture(e[1].texture),
                (e[1].texture = void 0);
            this.glContext = void 0;
          }
          glContextSet(e, t) {
            this.glContextLost(), (this.glContext = e), (t = t || []);
            for (let r = 0; r < 4; r++) {
              let i = t[r] || e.createTexture();
              i &&
                (e.bindTexture(e.TEXTURE_2D, i),
                e.texParameteri(
                  e.TEXTURE_2D,
                  e.TEXTURE_WRAP_S,
                  e.CLAMP_TO_EDGE
                ),
                e.texParameteri(
                  e.TEXTURE_2D,
                  e.TEXTURE_WRAP_T,
                  e.CLAMP_TO_EDGE
                ),
                e.texParameteri(e.TEXTURE_2D, e.TEXTURE_MIN_FILTER, e.LINEAR),
                this.videoTextures.push(i));
            }
            e.bindTexture(e.TEXTURE_2D, null);
          }
          drawFace(e, t, r, i) {
            if (!this.glContext) return;
            this._faceDraw || (this._faceDraw = new he(this.glContext));
            let a = v();
            E(a, e, t), E(a, a, r), this._faceDraw.drawFace(a, i);
          }
          drawImageTargetPreview(e, t, r, i, a) {
            if (!this.glContext) return;
            this._imageTargetPreviewDraw ||
              (this._imageTargetPreviewDraw = new Ke(this.glContext));
            let n = v();
            E(n, e, t), E(n, n, r), this._imageTargetPreviewDraw.draw(n, a, i);
          }
          drawFaceProject(e, t, r, i, a, n) {
            this.glContext &&
              (this._faceProjectDraw ||
                (this._faceProjectDraw = new ge(this.glContext)),
              this._faceProjectDraw.drawFace(e, t, r, i, a, n));
          }
          cameraFrameTexture() {
            var e;
            return null === (e = this.getCurrentCameraInfo()) || void 0 === e
              ? void 0
              : e.texture;
          }
          cameraFrameTextureMatrix(e, t, r) {
            let i = this.getCurrentCameraInfo();
            return i
              ? fe(i.dataWidth, i.dataHeight, e, t, i.uvTransform || tt, r)
              : v();
          }
          cameraFrameUserFacing() {
            var e;
            return (
              (null === (e = this.getCurrentCameraInfo()) || void 0 === e
                ? void 0
                : e.userFacing) || !1
            );
          }
          cameraPoseWithAttitude(e) {
            let t = it(
              this.getCurrentCameraInfo(),
              this._client.pipeline_camera_frame_camera_attitude(this._impl)
            );
            if (e) {
              let e = v();
              T(e, [-1, 1, 1]), E(t, e, t), E(t, t, e);
            }
            return y(t, t), t;
          }
          videoFrameFromWorker(e) {
            let t = this.nextCameraToken++;
            const r = je(e.source);
            r &&
              (this.cameraTokens.set(t, {
                dataWidth: e.w,
                dataHeight: e.h,
                texture: void 0,
                frame: e.d,
                userFacing: e.userFacing,
                uvTransform: e.uvTransform,
                cameraModel: e.cameraModel,
                cameraToDevice: e.cameraToDevice,
                cameraSource: r,
              }),
              this.cleanOldFrames());
          }
          imageBitmapFromWorker(e) {
            let t = this.cameraTokens.get(e.tokenId);
            t &&
              ((t.dataWidth = e.dataWidth),
              (t.dataHeight = e.dataHeight),
              (t.frame = e.frame),
              (t.userFacing = e.userFacing),
              (t.uvTransform = e.uvTransform),
              this.tokensInFlight--,
              this.cleanOldFrames());
          }
          uploadGL() {
            var e, t;
            let r = this.getCurrentCameraInfo();
            null ===
              (t =
                null === (e = null == r ? void 0 : r.cameraSource) ||
                void 0 === e
                  ? void 0
                  : e.uploadGL) ||
              void 0 === t ||
              t.call(e, r);
          }
          registerToken(e) {
            let t = this.nextCameraToken++;
            return this.cameraTokens.set(t, e), this.tokensInFlight++, t;
          }
          processGL() {
            this.glContext
              ? this.currentCameraSource &&
                (this.tokensInFlight > 0
                  ? this.currentCameraSource.getFrame(!0)
                  : this.currentCameraSource.getFrame(!1))
              : ie(
                  "no GL context for camera frames - please call pipeline_gl_context_set"
                );
          }
          motionAccelerometerSubmit(e, t, r, i) {
            var a;
            this._sequenceRecordDeviceAttitudeMatrices ||
              null === (a = this._sequenceRecorder) ||
              void 0 === a ||
              a.appendAccelerometer(e, t, r, i),
              this._client.pipeline_motion_accelerometer_submit(
                this._impl,
                e,
                t,
                r,
                i
              );
          }
          motionRotationRateSubmit(e, t, r, i) {
            var a;
            this._sequenceRecordDeviceAttitudeMatrices ||
              null === (a = this._sequenceRecorder) ||
              void 0 === a ||
              a.appendRotationRate(e, t, r, i),
              this._client.pipeline_motion_rotation_rate_submit(
                this._impl,
                e,
                t,
                r,
                i
              );
          }
          motionAttitudeSubmit(e, t, r, i) {
            var a;
            this._sequenceRecordDeviceAttitudeMatrices ||
              null === (a = this._sequenceRecorder) ||
              void 0 === a ||
              a.appendAttitude(e, t, r, i),
              this._client.pipeline_motion_attitude_submit(
                this._impl,
                e,
                t,
                r,
                i
              );
          }
          motionAttitudeMatrix(e) {
            this._client.pipeline_motion_attitude_matrix_submit(this._impl, e);
          }
          sendCameraStreamToWorker(e, t, r) {
            let i = {
              t: "streamC2S",
              p: this._impl,
              s: t,
              userFacing: r,
              source: e,
            };
            this._mgr.postOutgoingMessage(i, [i.s]);
          }
          sendCameraToScreenRotationToWorker(e) {
            let t = { p: this._impl, t: "cameraToScreenC2S", r: e };
            this._mgr.postOutgoingMessage(t, []);
          }
          sendImageBitmapToWorker(e, t, r, i, a, n) {
            let s = {
              p: this._impl,
              t: "imageBitmapC2S",
              i: e,
              r: t,
              tokenId: i,
              userFacing: r,
              cameraModel: a,
              cameraToDevice: n,
            };
            this._mgr.postOutgoingMessage(s, [e]);
          }
          sendDataToWorker(e, t, r, i, a, n, s) {
            let o = {
              d: e,
              p: this._impl,
              width: r,
              height: i,
              token: t,
              userFacing: a,
              c2d: n,
              cm: s,
              t: "cameraFrameC2S",
            };
            this._mgr.postOutgoingMessage(o, [e]);
          }
        }
        function it(e, t) {
          let r = !1;
          r = !!e && e.userFacing;
          let i = v();
          return R(i, (I(r) * Math.PI) / 180, [0, 0, 1]), E(i, i, t), i;
        }
        const at = {
          0: [
            {
              mean: [0.235, 0.2344, 0.7305],
              identity: [
                0.008, 0.0087, 0.0024, -0.0026, 6e-4, -0.0022, 5e-4, 0.0033,
                0.0026, 0.0017, -0.0055, -8e-4, 0.0011, 0.0059, 0, 2e-4, 0.001,
                -0.001, -0.0044, -0.0011, -1e-4, 0.0024, 0.0019, -9e-4, 4e-4,
                -0.0015, 0, 0.0038, 0.0013, 3e-4, 0.002, -0.0021, 0.0018,
                0.0023, 0.0011, 0.0012, -0.0011, -0.0017, 9e-4, -0.0012, -8e-4,
                7e-4, -0.0017, 0.0029, -0.0029, 8e-4, -0.0027, 8e-4, -0.0017,
                4e-4, 9e-4, -0.001, -3e-4, 8e-4, -0.0016, -3e-4, -7e-4, 0.0016,
                -9e-4, 0.0021, -5e-4, 0.0011, -0.0024, -1e-4, 6e-4, 1e-4,
                -0.0026, -4e-4, -3e-4, -9e-4, 5e-4, 3e-4, -8e-4, -0.001, -4e-4,
                -8e-4, 0.0022, -0.0014, -1e-4, -0.0023, 0, -0.0018, 7e-4,
                -0.0036, 0.0017, 0.0017, -0.0018, -2e-4, -4e-4, -9e-4, -8e-4,
                3e-4, 0.0012, 9e-4, -4e-4, -0.0016, 5e-4, -0.0013, 0.0011,
                0.0023, 0.0029, 0.0024, 0.0017, -0.0027, -4e-4, -0.001, -0.0018,
                -0.0015, -0.001, 0.001, -0.0013, -1e-4, -2e-4, 7e-4, 3e-4, 3e-4,
                -0.0016, 9e-4, -0.0021, 4e-4, 0.0014, 0.002, -7e-4, -4e-4, 2e-4,
                -4e-4, -6e-4, -9e-4, 0.0015, 4e-4, -4e-4, 5e-4, -0.0015, 9e-4,
                3e-4, 3e-4, -2e-4, -8e-4, -9e-4, 0.0023, 4e-4, 1e-4, -4e-4,
                -1e-4, 7e-4, 2e-4, 0.001, 1e-4, -0.0029, -5e-4,
              ],
              expression: [
                0, 3e-4, 0.0052, -7e-4, -0.0051, -0.0103, 0, 0.0019, 0.0027,
                -0.0054, 0.0135, 0.035, -5e-4, -6e-4, 0.0025, -0.0045, -0.0557,
                -0.003, -0.0191, -0.1199, 0.0548, -0.0036, -0.0682, -0.0167,
                2e-4, -0.0085, -0.0085, 0.0044, 0.0041, -0.0568, 0.0044, 0.179,
                0.0065, -0.0017, -0.1006, 0.0036, -0.0267, -0.3279, 0.0301,
                -0.0011, -0.0173, -0.001, 0.0046, 0.2808, 0.0207, 0.0162, 0.238,
                -0.0225, 0.0017, 0.1041, 0.0203, 5e-4, 0.0161, 0.0031, -0.0436,
                0.6504, 0.0873, -0.0099, 0.1039, 0.0048, -0.0254, 0.2534,
                -0.0042, 0.003, -0.0106, -0.0153, -0.0118, 0.0252, 9e-4,
                -0.0071, 0.0099, 0.007, -0.0724, 0.0461, -0.0235, 0.0833, 0.004,
                0.0141, -0.0219, 0.0132, -0.0042, -0.0179, 0.0045, -0.0215,
                0.3638, 0.0054, -0.0445,
              ],
            },
            {
              mean: [0.2358, 0.1466, 0.7183],
              identity: [
                0.0077, 0.0093, 1e-4, -0.0022, 0, -0.0041, 5e-4, 0.0022, 0.0028,
                0.0018, -0.0038, -0.0013, 0.001, 0.0044, -2e-4, 0, 0.0017,
                -0.0016, -0.0043, -2e-4, -1e-4, 0.0023, 9e-4, 5e-4, -7e-4,
                -4e-4, -0.0017, 0.003, 7e-4, 6e-4, 0.0011, -0.0018, 5e-4,
                0.0018, -8e-4, 4e-4, -0.0023, -6e-4, -3e-4, -0.0015, -0.0014,
                -1e-4, -0.0018, 0.0027, -0.0026, 3e-4, -0.0031, 0.0011, -0.0026,
                -0.0011, 0.0012, -0.0013, -2e-4, 7e-4, -0.0021, 0.0021, 4e-4,
                0.0012, -0.001, 0.002, -3e-4, 2e-4, -0.0026, -3e-4, 0.001, 1e-4,
                -0.0018, -0.001, 9e-4, -0.0011, 0.001, 4e-4, -8e-4, -7e-4,
                -0.001, -3e-4, 7e-4, -5e-4, -6e-4, -0.0019, -5e-4, -0.002, 7e-4,
                -0.0027, 0.0014, 0.0013, 6e-4, -5e-4, -3e-4, -3e-4, -0.001, 0,
                0.0019, 1e-4, 6e-4, -0.0012, 4e-4, -9e-4, 4e-4, 0.0025, 3e-4,
                0.0024, 0.0017, -9e-4, -0.0015, -0.0015, -0.001, -0.0023,
                -0.001, -5e-4, -4e-4, 8e-4, 9e-4, 7e-4, 2e-4, 7e-4, -9e-4, 9e-4,
                -0.0013, 1e-4, 9e-4, 2e-4, 6e-4, -6e-4, -8e-4, -4e-4, -7e-4,
                8e-4, 0.0019, 3e-4, 0.0015, 2e-4, -0.0015, -3e-4, 0, 6e-4, 3e-4,
                6e-4, -6e-4, 2e-4, 5e-4, -4e-4, 0.0012, -4e-4, 2e-4, -8e-4,
                6e-4, -4e-4, 2e-4, -0.0021,
              ],
              expression: [
                -0.0034, 0.0054, 0.0069, 0.004, 6e-4, -0.0104, -3e-4, 0.0036,
                0.0025, 0.0065, 0.0296, 0.0208, -9e-4, 0.0154, 0.0029, -0.0167,
                0.0124, 0.004, -0.0102, 0.0351, 0.028, -0.019, 0.0146, -0.0035,
                -0.0023, -0.0069, -0.0051, -0.01, 0.0262, -0.028, 0.0112, 0.082,
                0.023, -0.0019, -0.066, -0.0104, -0.0408, 0.0164, 0.0075,
                -0.0074, 0.0367, 0.0041, 0.0517, -0.0207, 0.0045, 0.0291,
                -0.0672, -0.0129, 0.0345, -0.1558, -0.0106, 0.0037, -0.0437,
                -0.0021, 0.0854, -0.1121, 0.0187, 0.0041, 0.0072, 0.0011,
                0.0193, -0.0143, -0.0119, 0.005, -0.02, -0.0122, -0.008, 0.0527,
                0.0036, -0.006, 0.0222, 0.007, -0.0429, 0.046, -0.0046, 0.0226,
                -0.0059, 0.0202, -0.0173, 0.0087, 0, -0.0067, -0.0095, -0.0153,
                0.1506, -0.0017, 0.0021,
              ],
            },
          ],
          1: [
            {
              mean: [-0.2271, 0.2323, 0.7319],
              identity: [
                -0.0084, 0.0097, 0.0018, 0.0041, 2e-4, -0.002, -0.0012, 0.0036,
                0.0019, -9e-4, -0.0063, -0.001, -3e-4, 0.0053, 6e-4, 1e-4, 5e-4,
                -0.0015, 0.0044, -0.0025, -0.0015, -0.002, 0.0016, -6e-4, 2e-4,
                -0.0013, 0, -0.0022, 2e-4, 2e-4, -0.0025, -0.0014, 0.0015, 8e-4,
                2e-4, 0.0012, 6e-4, -6e-4, 0.0017, 0, 3e-4, -1e-4, 0.0024,
                0.0025, -0.0029, -0.0015, -0.0015, 1e-4, 0.0031, -0.0016, 7e-4,
                0.0019, 6e-4, 0.002, 9e-4, 0.001, -0.0014, -0.002, -0.0015,
                0.0029, 1e-4, 5e-4, -0.0023, 8e-4, -0.0011, 0.0019, 0.0017,
                -3e-4, -0.0011, -3e-4, 0.0011, -8e-4, 0.0019, -0.0022, 1e-4,
                0.0015, 0.0017, -8e-4, -0.0011, -0.0022, 3e-4, 0.0022, 6e-4,
                -0.003, -2e-4, 0, -0.0017, -2e-4, 0, 1e-4, 4e-4, 0.0012, 0.0019,
                -0.0014, 4e-4, -0.0017, -0.0012, -0.0011, 0.0021, -0.0029,
                0.0026, 0.0018, -0.0023, -0.0029, 1e-4, 0.0014, -0.0019, -4e-4,
                -4e-4, 0.0023, -0.0016, 0, -9e-4, 0.0014, -0.0015, 0.0015,
                -0.0016, -0.0011, -0.0022, 1e-4, -0.0018, 0.0027, -0.0013, 4e-4,
                -1e-4, -5e-4, 0.0011, -2e-4, 0.0015, 5e-4, -9e-4, -1e-4, 0.0029,
                6e-4, 0, -3e-4, 7e-4, -8e-4, -5e-4, 0.0025, 3e-4, 2e-4, -8e-4,
                -1e-4, 3e-4, 0, 0.0014, 2e-4, -0.0024, 1e-4,
              ],
              expression: [
                -0.0025, -9e-4, 0.006, 0.004, -0.0027, -0.0113, -8e-4, 0.001,
                0.0031, -0.0016, 0.0144, 0.0382, -3e-4, -5e-4, 0.0035, -0.0044,
                -0.0511, -0.0014, -7e-4, -0.1007, 0.0582, -6e-4, -0.0606,
                -0.0165, 5e-4, -0.0087, -0.0093, 0.0036, 0.0057, -0.0576,
                -0.0039, 0.1488, 0.0127, 0.0016, -0.0666, -9e-4, -0.0153,
                0.3162, -0.0445, -0.0021, 0.0023, 0.0043, -0.0033, 0.2382,
                0.0063, -0.0217, 0.167, -0.039, 0.0097, -0.1144, -0.0189,
                -0.0145, 0.6831, 0.0632, -0.0012, -0.1959, -0.0133, 4e-4,
                0.1108, -3e-4, 0.0062, 0.2593, -0.0161, -0.0018, -0.0051,
                -0.012, 0.0162, 0.016, -0.0022, -0.0052, -0.0201, 0.0101,
                0.0115, 0.0365, -0.024, -0.0059, 0.0188, -0.0336, 0.0352,
                0.0224, -0.0229, 0.0146, 0.0086, -0.0273, -0.0032, 0.0103,
                -0.0112,
              ],
            },
            {
              mean: [-0.2288, 0.1541, 0.7202],
              identity: [
                -0.0082, 0.0101, 2e-4, 0.0036, -7e-4, -0.0037, -8e-4, 0.0024,
                0.0022, -0.0013, -0.0045, -0.0013, -6e-4, 0.0045, -4e-4, 4e-4,
                0.0012, -0.0014, 0.0042, -0.001, -7e-4, -0.0019, 3e-4, -2e-4,
                0.0012, -4e-4, -0.0012, -0.0018, -4e-4, -1e-4, -0.0014, -0.0012,
                1e-4, 1e-4, -0.0017, 0.001, 0.0015, -1e-4, 6e-4, 1e-4, 0, -6e-4,
                0.0028, 0.0021, -0.0025, -0.002, -0.0015, 7e-4, 0.0028, -0.0023,
                9e-4, 0.0013, 1e-4, 0.0016, 0.0012, 0.0032, -6e-4, -0.0013,
                -0.0011, 0.0021, 3e-4, -5e-4, -0.0024, 4e-4, -4e-4, 0.0014,
                0.0015, -8e-4, -3e-4, 3e-4, 0.0017, -6e-4, 0.002, -0.0018,
                -3e-4, 9e-4, 1e-4, 2e-4, -6e-4, -0.0015, -4e-4, 0.0022, 7e-4,
                -0.0023, 0, -2e-4, -2e-4, -3e-4, -1e-4, 6e-4, -2e-4, 6e-4,
                0.0022, -3e-4, 0.0013, -0.0014, -5e-4, -3e-4, 0.0013, -0.0027,
                6e-4, 0.0025, -0.0023, -8e-4, -0.0013, 0.0017, -9e-4, -0.0019,
                1e-4, 8e-4, -7e-4, -4e-4, 0, 0.001, -0.001, 0.0019, -8e-4,
                -0.0015, -6e-4, -2e-4, -0.0011, 8e-4, 1e-4, 9e-4, -8e-4, -4e-4,
                6e-4, 7e-4, 0.0021, -4e-4, 7e-4, -5e-4, 0.0021, -7e-4, -4e-4,
                -9e-4, 8e-4, 3e-4, 1e-4, 3e-4, 1e-4, 9e-4, 0.001, -5e-4, 5e-4,
                -0.001, 0.001, 4e-4, -5e-4, -0.0012,
              ],
              expression: [
                8e-4, 0.0037, 0.0078, -4e-4, 5e-4, -0.012, -2e-4, -0.0046,
                0.0033, -0.0089, 0.0295, 0.0221, -0.0024, -0.0084, 0.0013,
                0.0057, 0.0125, 0.0049, -0.0036, 0.0373, 0.0285, 0.0115, 0.0135,
                -0.0035, 0.0048, 0.0108, -0.0033, 0.0106, 0.0281, -0.0301,
                -0.0082, 0.0803, 0.0244, -7e-4, -0.0725, -0.0105, -0.0247,
                -0.0036, -0.0143, -0.0045, -0.029, 2e-4, -0.0303, 0.0093,
                -0.0021, -0.0196, -0.0754, -0.0211, 0.0326, 0.1246, 0.006,
                -0.0804, -0.1499, 0.0109, 0.0182, -0.0029, -0.0014, -0.0035,
                0.0072, -8e-4, -0.0152, -0.0108, -0.0166, -0.0073, -0.0144,
                -0.0095, 0.0101, 0.047, -0.0018, -0.004, -0.0189, 0.0027,
                0.0104, 0.0298, -0.0042, -0.0096, 0.0191, -0.0217, 0.0228,
                0.0226, -0.0105, 0.0047, -0.0048, -0.0172, 0.0061, -0.0043,
                -0.0016,
              ],
            },
          ],
          2: {
            mean: [0.5396, 0.2028, 0.2496],
            identity: [
              0.0204, 0.0146, -0.0182, -0.0052, 0.0158, -0.0038, -0.0025,
              -0.0108, -0.006, 0.0085, -0.0044, 0.0029, 0.0042, 0.001, 0.0095,
              0.0015, -0.0034, -0.0064, -0.0057, 7e-4, 0.0026, 7e-4, 0.0037,
              -6e-4, 0.0037, 0.0026, 0.0024, 5e-4, -0.0019, -0.0013, 0.003,
              -0.0028, 0.0018, -9e-4, 0.002, -0.0047, 0.004, -0.003, 0.0031,
              -0.0027, -0.0026, -0.0017, 0.0016, 0.0014, -4e-4, 0.0021, -0.002,
              0, 0.0017, 7e-4, -4e-4, -7e-4, -0.0018, -9e-4, 2e-4, -0.0012,
              1e-4, -5e-4, -0.0011, 4e-4, 2e-4, 0.0011, 1e-4, 8e-4, 0.0017,
              -0.0013, 0.0025, 0.0017, 0.001, 2e-4, 3e-4, 5e-4, -4e-4, -1e-4,
              -5e-4, 7e-4, -0.0022, -0.0029, 6e-4, -8e-4, -6e-4, 6e-4, -5e-4,
              5e-4, 0.0013, 3e-4, -5e-4, -0.003, 7e-4, 2e-4, 0.0016, -4e-4, 0,
              0, 4e-4, 1e-4, 0.0014, 0.0012, 1e-4, 4e-4, -1e-4, 8e-4, 9e-4,
              4e-4, -4e-4, 9e-4, -2e-4, 0.001, 9e-4, 4e-4, 1e-4, 7e-4, 7e-4,
              0.001, -0.0017, -8e-4, 2e-4, 0.0017, -3e-4, -1e-4, 4e-4, 5e-4,
              7e-4, 5e-4, -1e-4, -6e-4, -1e-4, 1e-4, -3e-4, -7e-4, -2e-4, -5e-4,
              0, -3e-4, 3e-4, 8e-4, -2e-4, -3e-4, 5e-4, 1e-4, -7e-4, -0.001,
              -2e-4, 3e-4, 4e-4, -1e-4, 7e-4, 0, 4e-4, 4e-4,
            ],
            expression: [
              1e-4, -4e-4, 1e-4, 0, 5e-4, 2e-4, 0, 0, 3e-4, -2e-4, 3e-4, 5e-4,
              -1e-4, 2e-4, 8e-4, 1e-4, -2e-4, -5e-4, -3e-4, 6e-4, 5e-4, 0, 1e-4,
              2e-4, 1e-4, -1e-4, -6e-4, -2e-4, 5e-4, 0, -4e-4, 4e-4, 0.0016,
              4e-4, -4e-4, -0.0015, 0, 1e-4, 1e-4, -3e-4, 3e-4, 0.0019, -2e-4,
              7e-4, 4e-4, 4e-4, -8e-4, -0.0015, 0.0013, -0.0016, -0.0069, 4e-4,
              -6e-4, -0.0019, 0, -1e-4, 5e-4, -3e-4, 2e-4, 0.0014, -3e-4, 6e-4,
              0.0011, 4e-4, -3e-4, -0.0032, -6e-4, 8e-4, 0.0025, -3e-4, 3e-4,
              0.0015, -1e-4, 1e-4, 3e-4, -1e-4, 0, 0, -3e-4, 4e-4, 0.0019, 1e-4,
              0, -8e-4, -1e-4, 1e-4, 5e-4,
            ],
          },
          3: {
            mean: [-0.5464, 0.2141, 0.26],
            identity: [
              -0.0207, 0.0172, -0.0176, 0.0068, 0.0148, -0.0051, 0.0042,
              -0.0101, -0.0058, -0.0087, -0.0059, 0.0045, -0.0056, 0.0017,
              0.0097, -0.0048, -0.004, -0.0044, 0.0019, 2e-4, 0.0041, -0.0052,
              0.0041, 2e-4, -0.0027, 6e-4, 0.002, -0.0027, -0.0033, -6e-4,
              -0.004, 9e-4, -0.0012, -1e-4, -0.0026, 0.0021, -0.003, -0.0025,
              0.0052, 0.0025, 0.0022, -1e-4, -8e-4, 0.0013, 0.001, 4e-4, 0.0018,
              0.0014, 6e-4, -5e-4, -0.0015, -0.0039, 0.0014, -1e-4, 8e-4, -2e-4,
              6e-4, -5e-4, -0.0038, -0.0012, -0.0018, -3e-4, 0.001, 9e-4,
              0.0012, 0.0024, -0.0024, -7e-4, -0.0016, -0.0016, 3e-4, -0.001,
              -0.0014, -0.0014, 0.001, -3e-4, -7e-4, -0.0012, 3e-4, 6e-4, 3e-4,
              -5e-4, 3e-4, 0.0012, 6e-4, -8e-4, 4e-4, 4e-4, 8e-4, -2e-4,
              -0.0014, 3e-4, 0, 0.0023, -3e-4, -0.0012, -0.0013, 0.0011, -2e-4,
              -0.0014, -1e-4, 0.0014, 0, 3e-4, 3e-4, -8e-4, -5e-4, -7e-4, -7e-4,
              -2e-4, 3e-4, 5e-4, 2e-4, -1e-4, 0.0011, -0.0014, 1e-4, -0.0015,
              -1e-4, -3e-4, 0, -0.001, -1e-4, -8e-4, 8e-4, -8e-4, -2e-4,
              -0.0011, -3e-4, -4e-4, 1e-4, -2e-4, 3e-4, -7e-4, 0, 3e-4, 1e-4,
              -8e-4, 5e-4, 1e-4, 4e-4, 0.0014, -6e-4, -0.001, -3e-4, -2e-4,
              1e-4, -1e-4, -1e-4, 7e-4,
            ],
            expression: [
              -3e-4, -1e-4, 6e-4, 4e-4, 0, -7e-4, 0, -3e-4, -2e-4, -4e-4,
              0.0012, 8e-4, 1e-4, -5e-4, -7e-4, -4e-4, 0, 1e-4, -4e-4, 0.0017,
              7e-4, 0, 1e-4, 3e-4, 0, 4e-4, 4e-4, 5e-4, 1e-4, -0.001, -7e-4,
              0.0022, 0.0026, 5e-4, -0.0024, -0.0023, 0, 1e-4, 3e-4, 0, -0.0013,
              -0.0015, 6e-4, 0.0014, 8e-4, -2e-4, -0.0025, -0.0023, -3e-4,
              0.0049, 0.006, -2e-4, -7e-4, -2e-4, 0, -0.0019, -0.0018, -2e-4,
              0.0017, 0.0017, 3e-4, 0.0015, 7e-4, 1e-4, -0.0023, -0.0036, 2e-4,
              0.0023, 0.0017, 0, -5e-4, -3e-4, -3e-4, 4e-4, 2e-4, -1e-4, -3e-4,
              -5e-4, 1e-4, 0.0018, 0.0025, 1e-4, -6e-4, -0.0011, 0, 1e-4, 1e-4,
            ],
          },
          4: {
            mean: [0.0018, 0.1864, 0.853],
            identity: [
              -0.0011, 0.0134, 0.0085, 9e-4, -0.0025, -7e-4, -3e-4, 0.0033,
              4e-4, -5e-4, -0.0047, -0.002, 7e-4, 0.0026, -0.0069, -1e-4,
              0.0036, 0.0072, 5e-4, -8e-4, -0.0047, 4e-4, -8e-4, -0.001, 0,
              2e-4, -0.0036, -2e-4, -0.001, -0.0048, -1e-4, 0.0018, 0.0044,
              -7e-4, -2e-4, 0.0043, 3e-4, 0.002, -0.0031, 0, -7e-4, 0.0013, 0,
              0.0037, 0.0033, -0.0016, -0.0012, 0.002, -1e-4, -0.0027, 0.0051,
              5e-4, 8e-4, 7e-4, -0.0017, 0.0054, 0.0023, -3e-4, 0.0032, 1e-4, 0,
              7e-4, -5e-4, -0.0011, 2e-4, 8e-4, 0, -0.0033, -8e-4, -7e-4, 7e-4,
              0.0033, 5e-4, -3e-4, 0.0029, -1e-4, -0.0024, -0.0011, -0.002,
              -0.0015, -0.0019, 2e-4, 7e-4, 0.0031, 6e-4, 0.0012, 0, 0, -0.0021,
              0, -9e-4, -0.0011, -0.0011, -2e-4, 0.0015, 0.001, 0.0013, 8e-4,
              0.001, -3e-4, 9e-4, 0.0027, -2e-4, -0.0011, -0.0011, 6e-4, 7e-4,
              2e-4, 1e-4, -5e-4, -0.0022, 0.0011, -0.0014, 9e-4, 3e-4, 2e-4, 0,
              -6e-4, -4e-4, -0.0011, -7e-4, 0.001, -0.0012, 6e-4, -0.0012,
              -0.0015, 3e-4, -9e-4, -0.0013, -0.0013, 7e-4, 0.001, -0.0011,
              -0.0013, 0.0015, 4e-4, 1e-4, 4e-4, -1e-4, -0.0016, -0.0016, 9e-4,
              -7e-4, -0.0024, 5e-4, -1e-4, -0.0017, -2e-4, 3e-4, -9e-4,
            ],
            expression: [
              -0.0017, 0.0019, 0.0097, 0.003, -0.0103, -0.0093, 9e-4, 6e-4,
              0.0023, -0.0017, -0.0204, 0.0376, 0.0033, -0.0034, 0.0033,
              -0.0026, -0.0322, 0.0396, -0.0032, -0.0947, 0.0942, -7e-4,
              -0.0175, 0.0266, -0.001, -6e-4, 0.0016, 0.0025, 0.0157, -0.0142,
              -0.0022, 0.037, 0.015, 0.0021, -0.0102, -0.0107, 0.0036, 0.0055,
              -0.0051, 0.0021, 3e-4, -3e-4, 4e-4, -0.0177, 0.0074, -6e-4,
              -0.0357, 0.0149, -0.0066, 9e-4, 0.0013, -0.0031, 0.0016, 0.0095,
              0.002, 0.0052, 0.0035, -3e-4, 0.0053, -0.0082, 0.002, 0.0022,
              -0.0071, -0.0011, 5e-4, 0.0055, 0.0011, 3e-4, -0.0126, -4e-4,
              3e-4, -0.0023, -0.0015, 0.0059, 0.0063, -0.0042, -0.0023, 0.0055,
              0.0019, 0.0017, -0.0075, 6e-4, -8e-4, 0.0018, 0.0012, 0.0012,
              -5e-4,
            ],
          },
          5: {
            mean: [-0.002, -0.0469, 1.0039],
            identity: [
              -0.0017, 0.0018, 0.0156, 6e-4, -0.0038, 5e-4, 4e-4, 0.0013, 0.002,
              -4e-4, -0.0015, -0.0051, 5e-4, -7e-4, -0.0055, -1e-4, -9e-4,
              0.008, -2e-4, 0.0036, -0.0053, 4e-4, -0.0026, -0.0016, 7e-4, 9e-4,
              -0.009, -3e-4, 7e-4, -0.0084, 0.0015, 0.0021, 0.0032, -0.0015,
              0.0018, 0.0046, -3e-4, -4e-4, -1e-4, 8e-4, -0.0044, -7e-4, -8e-4,
              7e-4, 0.0048, -0.0024, -3e-4, 0.0024, 2e-4, -0.0051, 0.0058,
              -6e-4, 0.0028, 0.0018, -0.0021, 0.0035, 0.0057, 0.0011, 0.0065, 0,
              -2e-4, 0.0011, 0.003, -0.0027, 8e-4, 7e-4, 3e-4, -0.0039, -0.002,
              -2e-4, -0.0015, 0.0034, 0.0012, -0.0025, 0.0024, -2e-4, 4e-4,
              -0.0042, -0.0024, -0.001, -0.0023, 0.0016, -7e-4, 0.0039, 1e-4,
              -5e-4, 0.0018, 3e-4, -2e-4, -9e-4, -0.0015, 3e-4, -7e-4, -1e-4,
              -2e-4, 0.0023, 0.0032, 0.002, -0.0013, 0.0013, -0.0038, 0.0045,
              1e-4, -0.0031, 1e-4, 0.0019, -1e-4, 0.0016, 0.0013, 0, -0.002,
              0.0023, 2e-4, 0.0011, 0.0018, -0.0024, 6e-4, -0.0017, 0.002,
              -8e-4, -0.0021, 7e-4, 0.0011, 8e-4, 4e-4, -0.001, 0.0012, 2e-4,
              -6e-4, -0.0027, -5e-4, 0.001, -9e-4, 1e-4, -1e-4, 8e-4, -0.0011,
              0.0022, -0.001, -5e-4, -0.0011, 0.0016, -0.0015, 8e-4, -3e-4,
              9e-4, 0.0013, -7e-4, -7e-4, -2e-4,
            ],
            expression: [
              -0.0018, -0.0168, 0.0088, 0.0389, 0.1026, 0.0414, 0.2201, -0.0262,
              -0.0016, -0.0017, 0.0612, -0.0298, -0.0323, 0.0093, 0.0013,
              -0.005, 0.2207, 0.1315, -4e-4, 0.0858, -0.0303, -0.0133, 0.015,
              -0.008, 0.1454, 0.0114, 0.0177, -0.0077, 0.1022, 0.0356, -0.0023,
              0.1088, 0.0232, 0.003, -0.0706, 0.0347, -1e-4, 0.004, -0.0011,
              0.0397, -0.0096, -0.0033, 0.0029, -0.01, -0.0083, -6e-4, -0.0135,
              0.0016, -0.0087, -0.0019, 0.0022, -0.004, -0.0087, 0.0105, 8e-4,
              -0.005, 0.0069, 0.0028, 0.0409, -0.0391, 0.003, 0.0103, 0.0051,
              0.0026, 0.0776, -0.0083, -0.0062, -0.0567, 0.0268, 0.0175, 0.0017,
              0.0156, -0.0043, 0.0299, -0.0395, -0.0015, 0.0051, -0.0148,
              0.0125, 0.0035, 0.0603, 0.0109, -0.0645, -0.0257, 0.002, 6e-4,
              -8e-4,
            ],
          },
          6: {
            mean: [-6e-4, -0.1542, 0.8789],
            identity: [
              -7e-4, -0.0032, 0.01, 0, -0.0027, 0.0031, 6e-4, 5e-4, -6e-4,
              -3e-4, 0.0013, -0.0049, -2e-4, -0.002, -0.0046, 8e-4, -0.0011,
              0.0054, 2e-4, 0.0043, -0.0027, 3e-4, -0.0022, -0.0019, 8e-4,
              0.0032, -0.0069, 0, 4e-4, -0.0071, 0.0016, 0.0027, 0.0039,
              -0.0017, 9e-4, 0.0031, -1e-4, -5e-4, -4e-4, 7e-4, -0.0026,
              -0.0012, -5e-4, 6e-4, 2e-4, -0.0014, -0.0013, 0.0019, -2e-4,
              -0.0053, 0.0031, -6e-4, 0.0016, 0.0023, -0.0013, 0.0021, 0.0029,
              8e-4, 0.0052, 0, 4e-4, 0, 0.0037, -0.0026, 3e-4, 0.002, -2e-4,
              -0.0024, 4e-4, -4e-4, -0.0012, 8e-4, 7e-4, -0.0023, 5e-4, 0,
              0.0014, -0.0022, -0.0016, 0, -0.0012, 8e-4, -7e-4, 0.0014, -6e-4,
              -0.0012, -3e-4, 2e-4, 0.0012, -3e-4, -0.002, -1e-4, 1e-4, -2e-4,
              -0.0016, 9e-4, 0.002, 0.0019, 0, 6e-4, -0.0022, 0.0016, 1e-4,
              -0.0017, -0.0013, 0.001, 9e-4, -1e-4, 0.0011, 3e-4, -7e-4, 0.0014,
              8e-4, 0.0013, 0.0011, -0.002, 0, -0.0015, 0.0014, 0.001, -0.0015,
              7e-4, 3e-4, 0.001, -1e-4, 0.0012, 7e-4, 6e-4, -4e-4, -0.0013,
              -0.0012, -9e-4, -0.0011, 2e-4, -5e-4, 5e-4, 4e-4, 2e-4, 1e-4, 0,
              5e-4, 5e-4, -0.0014, 0.0015, -9e-4, 5e-4, 0.0014, -8e-4, -8e-4,
              0.0012,
            ],
            expression: [
              8e-4, 0.0481, 0.1653, 0.0784, 0.1008, -0.3992, 0.5088, -0.02,
              0.0542, 0.001, 0.3723, -0.0151, -0.0986, 0.0283, -0.0033, -0.0121,
              0.2634, 0.1202, 0.0036, -0.0529, -0.0245, -0.0297, -0.1085,
              0.0495, 0.3264, 0.0083, 4e-4, -0.0314, 0.1459, -0.1142, -0.003,
              1e-4, 0.1154, -0.0035, -0.0285, -0.0184, -1e-4, 0.0012, 0.0035,
              0.079, -0.0103, 0.0043, 0.011, -0.004, -0.0774, -0.0047, -0.023,
              0.0284, -0.0048, -0.001, 0.0149, -0.0039, 0.0046, 0.0528, -6e-4,
              0.0063, 0.0376, 0.0096, 0.0558, -0.0295, 0, -0.0311, -0.0634,
              0.0062, 0.0176, -0.0154, -0.0109, -0.1149, 0.0192, 0.0326, 0.0121,
              0.0237, 0.0034, 0.0262, -0.0778, 0.0014, -0.0045, -0.0203, 0.0077,
              0.0588, 0.0575, 0.008, -0.0557, -0.0095, 0.0032, 0.0054, -0.0042,
            ],
          },
          7: {
            mean: [0.0038, -0.2927, 0.833],
            identity: [
              6e-4, -0.0109, 0.0073, -6e-4, -0.0044, 0.0017, -1e-4, -0.0022,
              -6e-4, -3e-4, 0.0065, -0.0014, -6e-4, -0.0051, -0.0046, 3e-4,
              -0.0029, 0.003, 2e-4, 0.0038, -6e-4, 0, -0.0012, 6e-4, -4e-4,
              0.0053, -0.0075, -2e-4, -7e-4, -0.0063, 0.0014, 0.0026, 0.0019,
              -0.0022, 0.0018, 0.0028, -1e-4, -0.0012, 0.0011, 9e-4, 0.0019,
              -0.0019, -1e-4, 0.0012, -0.0022, -3e-4, -0.0012, 4e-4, -8e-4,
              3e-4, -3e-4, 0, 0.0017, 0.0021, -4e-4, 0.0012, 0.0022, -3e-4,
              0.0026, -3e-4, 4e-4, -0.0026, 0.0032, -0.0019, 3e-4, 0.0015, 1e-4,
              -0.0015, 0.0013, -1e-4, 1e-4, -0.0029, 0, -2e-4, -0.0028, -7e-4,
              0.0019, -3e-4, -2e-4, 0.0012, 9e-4, 4e-4, -0.001, -0.002, -0.0016,
              0.0011, -1e-4, 3e-4, 0.0021, 2e-4, -0.0014, -9e-4, -1e-4, 0,
              -2e-4, -0.001, 0.0015, 0.0018, 1e-4, 7e-4, 8e-4, 0.0017, 0.001,
              -9e-4, 1e-4, 4e-4, 0.0023, -1e-4, 0.0012, 1e-4, -8e-4, 2e-4,
              0.0018, 6e-4, 3e-4, 1e-4, 0.0012, -3e-4, 0.002, -6e-4, 0, -1e-4,
              -0.0022, 4e-4, 5e-4, 0.0011, 2e-4, -0.0013, -0.0023, 6e-4, 6e-4,
              -5e-4, -5e-4, 9e-4, 2e-4, 2e-4, 0.0011, -3e-4, 0.0011, 0.0015,
              0.0011, 3e-4, 2e-4, 8e-4, -4e-4, -8e-4, 3e-4, 0, 0.0012, -1e-4,
            ],
            expression: [
              0.026, 0.1107, 0.3257, 0.1917, 0.3206, -1.1348, 1.0791, -0.035,
              0.1549, -0.0103, 0.6953, 1e-4, -0.3262, 0.068, 0.0219, -0.0044,
              0.3643, 0.2178, 0.0168, -0.2478, -0.1321, -0.0414, -0.3782,
              -0.0617, 0.5088, -0.0031, -0.0311, -0.0497, 0.0948, -0.385,
              0.0148, -0.2224, -0.1415, -0.0074, 0.0863, -0.203, 3e-4, -0.0081,
              0.0057, 0.1164, -0.0039, 0.0015, -0.0024, 0.0505, 0.1532, 0.0039,
              -0.0148, -0.0753, 0.0163, 0.0058, -0.0339, 0.0036, 0.0252,
              -0.0569, -0.0041, 0.0163, -0.0361, 0.0035, -0.018, 0.1266, 0,
              -0.0163, -0.0046, 0.0133, -0.1656, 0.2134, 0.0191, 0.0057, 0.0734,
              0.0681, 0.0039, -0.0144, 0.029, -0.074, -0.046, 0.0122, 0.0072,
              -0.0162, -0.0349, -0.1234, 0.0212, -0.0355, 0.0535, 0.1218,
              0.0043, -0.024, 0.0016,
            ],
          },
          8: {
            mean: [-0.0018, -0.3037, 0.8491],
            identity: [
              2e-4, -0.0112, 0.0077, -4e-4, -0.0044, 0.0024, 1e-4, -0.0021,
              -4e-4, -4e-4, 0.0066, -0.002, -4e-4, -0.0052, -0.0044, 3e-4,
              -0.0032, 0.0039, 4e-4, 0.0042, -3e-4, 2e-4, -0.0012, -2e-4, -2e-4,
              0.0052, -0.0083, -1e-4, -8e-4, -0.0056, 0.0017, 0.0024, 0.0019,
              -0.0023, 0.002, 0.0027, -2e-4, -0.0013, 0.002, 9e-4, 0.0017,
              -0.0028, -2e-4, 0.0012, -0.0026, 0, -0.0016, 2e-4, -5e-4, 3e-4,
              -0.001, -1e-4, 0.0016, 0.0016, -3e-4, 0.0012, 0.0012, -3e-4,
              0.0027, -3e-4, 3e-4, -0.0026, 0.0037, -0.0017, 1e-4, 0.0016, 1e-4,
              -0.0015, 0.0024, 1e-4, 2e-4, -0.0039, 0, -3e-4, -0.0033, -6e-4,
              0.0017, -4e-4, -4e-4, 0.0012, 0.0018, 2e-4, -0.0012, -0.002,
              -0.0017, 0.0013, -0.001, 3e-4, 0.0021, 4e-4, -0.0012, -6e-4,
              -2e-4, 0, -4e-4, -9e-4, 0.0016, 0.0017, 4e-4, 7e-4, 7e-4, 0.001,
              9e-4, -8e-4, 5e-4, 5e-4, 0.0023, 0.001, 0.0013, 2e-4, -4e-4, 2e-4,
              0.0017, 8e-4, 3e-4, -1e-4, 9e-4, -4e-4, 0.0019, -5e-4, 3e-4, 0,
              -0.0025, 3e-4, 3e-4, 0.0011, 1e-4, -0.0015, -0.001, 7e-4, 7e-4,
              -7e-4, -7e-4, 8e-4, 0, 1e-4, 0.0013, -4e-4, 0.0012, 0.0014,
              0.0017, 4e-4, 2e-4, 3e-4, -3e-4, -9e-4, 1e-4, 0, 0.001, -4e-4,
            ],
            expression: [
              -0.0092, 2.8809, 1.416, 0.2018, 1.1982, -0.9351, 1.4492, -0.1902,
              0.1749, 0.0305, -0.167, -0.1572, -0.7354, -0.0492, 0.0115, 0.0608,
              0.2971, 0.1179, 0.0046, -0.0997, -0.0041, -0.0104, 0.3379,
              -0.1854, 0.009, 0.0366, -0.0583, 0.0269, -0.0029, -0.4175, -8e-4,
              0.1794, 0.0752, -0.0135, 0.1158, 0.1234, 5e-4, 0.003, -0.0032,
              0.1034, -0.0504, -0.0055, -0.0076, -0.0772, 0.224, 0.0047, 0.0229,
              -0.1044, 0.0162, -0.0161, -0.0241, -0.0083, -0.1388, -0.0434,
              -0.0125, -0.0997, -0.0327, -0.0111, 0.1576, -0.3911, 0.0199,
              0.2522, 0.142, 0.0059, -0.0721, -0.0045, 0.031, -0.1136, -0.1685,
              0.0641, 0.0142, 0.0312, 0.0426, -0.1366, 0.1011, 0.0101, -0.0157,
              0.0018, -0.0103, -0.0344, 0.0907, 0.0016, 0.1168, -0.0806, 0.0104,
              -0.0057, 0.0111,
            ],
          },
          9: [
            {
              mean: [0.0038, -0.2927, 0.833],
              identity: [
                6e-4, -0.0109, 0.0073, -6e-4, -0.0044, 0.0017, -1e-4, -0.0022,
                -6e-4, -3e-4, 0.0065, -0.0014, -6e-4, -0.0051, -0.0046, 3e-4,
                -0.0029, 0.003, 2e-4, 0.0038, -6e-4, 0, -0.0012, 6e-4, -4e-4,
                0.0053, -0.0075, -2e-4, -7e-4, -0.0063, 0.0014, 0.0026, 0.0019,
                -0.0022, 0.0018, 0.0028, -1e-4, -0.0012, 0.0011, 9e-4, 0.0019,
                -0.0019, -1e-4, 0.0012, -0.0022, -3e-4, -0.0012, 4e-4, -8e-4,
                3e-4, -3e-4, 0, 0.0017, 0.0021, -4e-4, 0.0012, 0.0022, -3e-4,
                0.0026, -3e-4, 4e-4, -0.0026, 0.0032, -0.0019, 3e-4, 0.0015,
                1e-4, -0.0015, 0.0013, -1e-4, 1e-4, -0.0029, 0, -2e-4, -0.0028,
                -7e-4, 0.0019, -3e-4, -2e-4, 0.0012, 9e-4, 4e-4, -0.001, -0.002,
                -0.0016, 0.0011, -1e-4, 3e-4, 0.0021, 2e-4, -0.0014, -9e-4,
                -1e-4, 0, -2e-4, -0.001, 0.0015, 0.0018, 1e-4, 7e-4, 8e-4,
                0.0017, 0.001, -9e-4, 1e-4, 4e-4, 0.0023, -1e-4, 0.0012, 1e-4,
                -8e-4, 2e-4, 0.0018, 6e-4, 3e-4, 1e-4, 0.0012, -3e-4, 0.002,
                -6e-4, 0, -1e-4, -0.0022, 4e-4, 5e-4, 0.0011, 2e-4, -0.0013,
                -0.0023, 6e-4, 6e-4, -5e-4, -5e-4, 9e-4, 2e-4, 2e-4, 0.0011,
                -3e-4, 0.0011, 0.0015, 0.0011, 3e-4, 2e-4, 8e-4, -4e-4, -8e-4,
                3e-4, 0, 0.0012, -1e-4,
              ],
              expression: [
                0.026, 0.1107, 0.3257, 0.1917, 0.3206, -1.1348, 1.0791, -0.035,
                0.1549, -0.0103, 0.6953, 1e-4, -0.3262, 0.068, 0.0219, -0.0044,
                0.3643, 0.2178, 0.0168, -0.2478, -0.1321, -0.0414, -0.3782,
                -0.0617, 0.5088, -0.0031, -0.0311, -0.0497, 0.0948, -0.385,
                0.0148, -0.2224, -0.1415, -0.0074, 0.0863, -0.203, 3e-4,
                -0.0081, 0.0057, 0.1164, -0.0039, 0.0015, -0.0024, 0.0505,
                0.1532, 0.0039, -0.0148, -0.0753, 0.0163, 0.0058, -0.0339,
                0.0036, 0.0252, -0.0569, -0.0041, 0.0163, -0.0361, 0.0035,
                -0.018, 0.1266, 0, -0.0163, -0.0046, 0.0133, -0.1656, 0.2134,
                0.0191, 0.0057, 0.0734, 0.0681, 0.0039, -0.0144, 0.029, -0.074,
                -0.046, 0.0122, 0.0072, -0.0162, -0.0349, -0.1234, 0.0212,
                -0.0355, 0.0535, 0.1218, 0.0043, -0.024, 0.0016,
              ],
            },
            {
              mean: [-0.0018, -0.3037, 0.8491],
              identity: [
                2e-4, -0.0112, 0.0077, -4e-4, -0.0044, 0.0024, 1e-4, -0.0021,
                -4e-4, -4e-4, 0.0066, -0.002, -4e-4, -0.0052, -0.0044, 3e-4,
                -0.0032, 0.0039, 4e-4, 0.0042, -3e-4, 2e-4, -0.0012, -2e-4,
                -2e-4, 0.0052, -0.0083, -1e-4, -8e-4, -0.0056, 0.0017, 0.0024,
                0.0019, -0.0023, 0.002, 0.0027, -2e-4, -0.0013, 0.002, 9e-4,
                0.0017, -0.0028, -2e-4, 0.0012, -0.0026, 0, -0.0016, 2e-4,
                -5e-4, 3e-4, -0.001, -1e-4, 0.0016, 0.0016, -3e-4, 0.0012,
                0.0012, -3e-4, 0.0027, -3e-4, 3e-4, -0.0026, 0.0037, -0.0017,
                1e-4, 0.0016, 1e-4, -0.0015, 0.0024, 1e-4, 2e-4, -0.0039, 0,
                -3e-4, -0.0033, -6e-4, 0.0017, -4e-4, -4e-4, 0.0012, 0.0018,
                2e-4, -0.0012, -0.002, -0.0017, 0.0013, -0.001, 3e-4, 0.0021,
                4e-4, -0.0012, -6e-4, -2e-4, 0, -4e-4, -9e-4, 0.0016, 0.0017,
                4e-4, 7e-4, 7e-4, 0.001, 9e-4, -8e-4, 5e-4, 5e-4, 0.0023, 0.001,
                0.0013, 2e-4, -4e-4, 2e-4, 0.0017, 8e-4, 3e-4, -1e-4, 9e-4,
                -4e-4, 0.0019, -5e-4, 3e-4, 0, -0.0025, 3e-4, 3e-4, 0.0011,
                1e-4, -0.0015, -0.001, 7e-4, 7e-4, -7e-4, -7e-4, 8e-4, 0, 1e-4,
                0.0013, -4e-4, 0.0012, 0.0014, 0.0017, 4e-4, 2e-4, 3e-4, -3e-4,
                -9e-4, 1e-4, 0, 0.001, -4e-4,
              ],
              expression: [
                -0.0092, 2.8809, 1.416, 0.2018, 1.1982, -0.9351, 1.4492,
                -0.1902, 0.1749, 0.0305, -0.167, -0.1572, -0.7354, -0.0492,
                0.0115, 0.0608, 0.2971, 0.1179, 0.0046, -0.0997, -0.0041,
                -0.0104, 0.3379, -0.1854, 0.009, 0.0366, -0.0583, 0.0269,
                -0.0029, -0.4175, -8e-4, 0.1794, 0.0752, -0.0135, 0.1158,
                0.1234, 5e-4, 0.003, -0.0032, 0.1034, -0.0504, -0.0055, -0.0076,
                -0.0772, 0.224, 0.0047, 0.0229, -0.1044, 0.0162, -0.0161,
                -0.0241, -0.0083, -0.1388, -0.0434, -0.0125, -0.0997, -0.0327,
                -0.0111, 0.1576, -0.3911, 0.0199, 0.2522, 0.142, 0.0059,
                -0.0721, -0.0045, 0.031, -0.1136, -0.1685, 0.0641, 0.0142,
                0.0312, 0.0426, -0.1366, 0.1011, 0.0101, -0.0157, 0.0018,
                -0.0103, -0.0344, 0.0907, 0.0016, 0.1168, -0.0806, 0.0104,
                -0.0057, 0.0111,
              ],
            },
          ],
          10: {
            mean: [-0.007, -0.6338, 0.7695],
            identity: [
              1e-4, -0.0296, 0.0089, -6e-4, -0.0073, -0.0065, -1e-4, -0.0029,
              -0.0031, -2e-4, 0.0128, 0.0065, 0, -0.0116, -0.014, -1e-4,
              -0.0037, -0.0052, -5e-4, 0.0028, 0.003, -4e-4, 0.0041, 0.0015,
              6e-4, 0.0088, -0.0076, -0.0011, -0.0015, -0.0073, 7e-4, -0.0011,
              0.0019, -0.0011, -5e-4, 0.0031, -1e-4, -0.0018, 9e-4, 0.0018,
              0.0038, 0.0068, -4e-4, -1e-4, 0.0061, 0.0024, 0.0024, -0.0066,
              -6e-4, 0.0051, 0.0014, 0.002, 0.005, -0.0035, 1e-4, -0.0034,
              -0.004, -7e-4, 0.001, -8e-4, 1e-4, -5e-4, -0.0021, 2e-4, 0.0045,
              -0.0043, -0.0012, -0.0024, -0.0014, 6e-4, 0.0034, 0.0027, -8e-4,
              -0.0053, 0.0014, 1e-4, 0.0013, -0.0018, 6e-4, -0.0015, 0.0029,
              -2e-4, -0.0035, 1e-4, -0.002, 0.0012, 0.0048, 0.0011, 1e-4, -2e-4,
              -3e-4, -0.0012, 0.0033, 6e-4, 0.002, -0.0033, 4e-4, 0.0028, 2e-4,
              8e-4, -1e-4, -0.0018, 8e-4, 0.0017, 1e-4, 9e-4, 8e-4, 3e-4,
              0.0019, -0.001, 0.001, -7e-4, -0.0013, 0, 1e-4, 0.0032, -1e-4,
              1e-4, 0.0011, -4e-4, 5e-4, -7e-4, 0.0018, -3e-4, 2e-4, 7e-4, 8e-4,
              -0.0014, 7e-4, 0.0015, -6e-4, -1e-4, -4e-4, 0.0019, -9e-4, -6e-4,
              -6e-4, -0.0012, 2e-4, -0.0012, -8e-4, 4e-4, 6e-4, -0.0011, 3e-4,
              9e-4, -4e-4, 6e-4, -7e-4, -4e-4,
            ],
            expression: [
              -0.0603, 2.0527, 1.9014, 0.1025, 0.6143, 0.3804, 0.7881, -0.1023,
              -0.0764, 0.0454, -0.2487, -0.5073, -0.6704, -0.031, -0.0181,
              0.0466, 0.0651, -0.0726, -0.0033, -0.0022, 0.2944, 0.0101, 0.1669,
              -0.5225, -0.4685, 0.0236, 0.0079, 0.011, 0.2173, 0.4529, 0.0121,
              -0.2104, -0.0673, 0.0225, -0.4023, 0.0317, -9e-4, 0.0076, -0.0032,
              0.0333, 0.0523, 0.0129, -0.001, -0.0319, -0.0139, 0.0015, -0.0044,
              0.0247, -5e-4, 0.0161, 0.0061, 0.0074, 0.0776, -0.0176, 0.007,
              0.055, -0.017, 0.0052, -0.1819, 0.0294, -0.0161, -0.0337, 0.0226,
              -0.008, -0.0297, 0.1967, -0.0095, 0.0383, 0.2039, 0.0434, 0.0271,
              -0.0064, -0.0037, -0.0294, -0.024, 0.0024, -0.0137, -0.0209,
              -0.0031, 0.0628, 0.1003, -0.0126, -0.056, -0.0097, -0.0012,
              -0.0041, 0.0162,
            ],
          },
          11: {
            mean: [0.2505, 0.3833, 0.7793],
            identity: [
              0.0098, 0.012, 0.0077, -6e-4, -3e-4, 0, 1e-4, 0.0082, -7e-4,
              0.0019, -0.0036, -0.0012, 2e-4, 0.0119, -0.0039, 0.001, 1e-4,
              0.0031, -0.0036, -0.0059, -7e-4, 0.0026, 0.0028, -0.0011, 9e-4,
              -0.0032, 8e-4, 0.0029, 0.0043, 3e-4, 0.0025, -9e-4, 0.0047,
              0.0016, 0.0022, 0.0018, -0.001, 0.0025, -0.003, -0.001, 0.0033,
              0.0034, 4e-4, -0.0052, 0.0024, -2e-4, 0.001, -0.0014, -6e-4,
              0.0038, -0.0015, -6e-4, -0.001, -0.0011, -4e-4, -0.001, 4e-4,
              -7e-4, 0.0036, -8e-4, -2e-4, -0.0019, 5e-4, 3e-4, -6e-4, -0.0024,
              -0.0017, -0.0014, 6e-4, -4e-4, -0.0031, -0.0013, -6e-4, 0.0042,
              2e-4, -2e-4, -0.002, -3e-4, 8e-4, 0.0018, -5e-4, -6e-4, -2e-4,
              -6e-4, 0.0025, 0.0019, 0.001, 8e-4, -0.0015, -0.0012, -1e-4,
              -6e-4, -4e-4, 0.0023, -0.001, 6e-4, -2e-4, -0.001, 0, -9e-4,
              -0.002, -0.0011, 1e-4, 0, -1e-4, 5e-4, 6e-4, 9e-4, -6e-4, 5e-4,
              8e-4, -1e-4, -2e-4, -0.0017, -6e-4, -4e-4, 4e-4, -6e-4, 0.0012,
              4e-4, 3e-4, -7e-4, 3e-4, -2e-4, 6e-4, 1e-4, 5e-4, -0.0019, -6e-4,
              4e-4, 7e-4, -1e-4, 1e-4, 5e-4, 0.001, -6e-4, -0.002, -7e-4, -5e-4,
              5e-4, 3e-4, 7e-4, 0.0014, 0, 5e-4, -5e-4, -2e-4, 3e-4, -6e-4,
              -1e-4,
            ],
            expression: [
              -9e-4, -3e-4, 0.0032, -0.003, -0.0034, -0.0031, 0.0014, 0, 4e-4,
              -0.0139, -0.0764, 0.0275, -0.002, -0.0089, 0.0031, -0.0503,
              -0.0771, 0.038, -0.1323, -0.3523, 0.1368, -0.0474, -0.0564,
              0.0296, -0.0045, 0.007, -0.0013, 0.0153, 0.1259, -0.0464, 0.0866,
              0.2175, -0.0786, -0.0413, -0.1248, 0.0448, -0.1777, -0.4607,
              0.1782, -5e-4, -0.005, 0.0016, 0.0629, 0.1506, -0.0624, 0.0545,
              0.2576, -0.0864, -0.0231, -0.0552, 0.0244, -0.0136, -0.0359,
              0.0169, -0.1158, -0.2996, 0.1214, -0.0235, -0.0354, 0.0165,
              -0.0745, -0.1079, 0.0475, -0.0116, -0.0039, 0.0012, 0.0013,
              -0.0108, -8e-4, 0.0044, -0.0027, -1e-4, -0.0694, 0.0363, 0.0071,
              0.1462, -0.136, 0.0047, 0.009, -0.0177, 0.0038, -0.0271, 0.0118,
              0.0011, -0.0399, -0.0111, 0.0123,
            ],
          },
          12: {
            mean: [-0.2981, 0.3828, 0.7563],
            identity: [
              -0.0116, 0.014, 0.0054, 0.0018, 5e-4, 0, -4e-4, 0.0068, -0.0013,
              -0.0019, -0.0048, -5e-4, 5e-4, 0.0108, -0.0036, -0.0029, -0.0018,
              0.0029, 0.0043, -0.0077, 6e-4, -0.0017, 0.002, -0.0011, -0.0014,
              -0.0035, 0.0015, -0.0024, 0.0011, 4e-4, -0.0048, 2e-4, 0.0029,
              -1e-4, -1e-4, 0.003, 0.0019, 0.0035, -0.0016, -4e-4, 0.0039,
              0.0019, 1e-4, -0.0064, 0.004, 3e-4, 0.002, -0.0021, 0.0017,
              0.0011, -0.001, 0.0026, 0.0025, -5e-4, 2e-4, -3e-4, -5e-4, -7e-4,
              9e-4, -4e-4, -0.001, -0.0022, 0.001, 9e-4, -0.0014, 7e-4, 0.0011,
              -0.001, -5e-4, -8e-4, -0.0017, -0.0021, 9e-4, 0.0036, 5e-4, 4e-4,
              -0.0031, 6e-4, -0.0015, 0.0027, 2e-4, 1e-4, -0.0011, 2e-4,
              -0.0011, -0.0018, 4e-4, -0.0013, -2e-4, 7e-4, 9e-4, -3e-4, 0.001,
              -0.0021, 8e-4, 6e-4, -9e-4, 4e-4, -7e-4, 8e-4, -0.002, -0.0013, 0,
              7e-4, -0.0012, -1e-4, 0.0014, 0.0014, -1e-4, 0.0013, 6e-4, 6e-4,
              -0.0014, -0.0015, -9e-4, 1e-4, 1e-4, 9e-4, 7e-4, 0, 1e-4, -0.001,
              -4e-4, 0, -5e-4, 1e-4, -3e-4, 4e-4, -5e-4, -1e-4, -0.0011, 2e-4,
              0, 1e-4, 8e-4, 8e-4, 0, -7e-4, -8e-4, 0, 2e-4, -1e-4, 0.001, 3e-4,
              4e-4, -2e-4, 0, 5e-4, 0.0018, -1e-4,
            ],
            expression: [
              0, -4e-4, 0.0028, 0.0036, -8e-4, -0.0026, -0.0015, -8e-4, 3e-4,
              0.0075, -0.0608, 0.025, 0.0019, -0.0076, 0.0033, 0.0379, -0.0437,
              0.0335, 0.0964, -0.2452, 0.1233, 0.0368, -0.0251, 0.0253, 0.0033,
              0.0097, -0.0021, -0.0095, 0.1171, -0.0475, -0.064, 0.1548,
              -0.0718, 0.0228, -0.0831, 0.0343, -0.1924, 0.6206, -0.2771,
              0.0021, -0.0143, 0.0056, -0.0705, 0.2522, -0.1116, -0.0692,
              0.4229, -0.1592, -0.0093, 0.05, -0.0185, 0.0948, -0.3196, 0.1437,
              -0.0184, 0.0194, -0.0131, 0.0205, -0.0353, 0.0201, 0.0676, -0.135,
              0.0672, 0.0137, -0.0311, 0.0118, 3e-4, -0.0077, -2e-4, -0.0151,
              4e-4, -0.0058, 0.029, -0.0139, 0.0163, 0.1324, 0.1819, -0.0039,
              0.0406, 0.0501, 0.0017, 0.0331, 0.0161, 0.0062, -0.0235, -0.0446,
              0.0047,
            ],
          },
        };
        let nt = 1,
          st = new Map();
        function ot(e) {
          return st.get(e);
        }
        class _t {
          constructor(e) {
            (this._name = e), (this.anchor_pose = v());
          }
          _getVertex(e, t, r) {
            let i = r.mean.slice();
            for (let t = 0; t < 50; t++)
              (i[0] += e[t] * r.identity[3 * t + 0]),
                (i[1] += e[t] * r.identity[3 * t + 1]),
                (i[2] += e[t] * r.identity[3 * t + 2]);
            for (let e = 0; e < 29; e++)
              (i[0] += t[e] * r.expression[3 * e + 0]),
                (i[1] += t[e] * r.expression[3 * e + 1]),
                (i[2] += t[e] * r.expression[3 * e + 2]);
            return i;
          }
          update(e, t, r) {
            let i,
              a = at[this._name.toString()];
            if (a) {
              if (Array.isArray(a)) {
                i = this._getVertex(e, t, a[0]);
                let r = this._getVertex(e, t, a[1]);
                (i[0] = 0.5 * (i[0] + r[0])),
                  (i[1] = 0.5 * (i[1] + r[1])),
                  (i[2] = 0.5 * (i[2] + r[2]));
              } else i = this._getVertex(e, t, a);
              r && (i[0] *= -1), A(this.anchor_pose, i);
            }
          }
        }
        const ct = {
          incompatible: () =>
            !(
              "function" == typeof Promise &&
              "object" == typeof WebAssembly &&
              navigator.mediaDevices &&
              navigator.mediaDevices.enumerateDevices &&
              navigator.mediaDevices.getUserMedia
            ),
          incompatible_ui: () => {
            const e = document.createElement("div");
            e.append(
              (function () {
                let e = document.createElement("div"),
                  t = "a recent web browser";
                navigator.userAgent.match(/Android/i)
                  ? ((t = "Chrome for Android"),
                    (window.location.href =
                      "googlechrome://navigate?url=" +
                      encodeURI(window.location.href)),
                    setTimeout(() => {
                      window.location.href =
                        "samsunginternet://open?url=" +
                        encodeURI(window.location.href);
                    }, 2e3))
                  : navigator.userAgent.match(/iPhone|iPod|iPad/i) &&
                    ((t = "Safari"),
                    e.classList.add("zee-launcher-browser-safari")),
                  e.classList.add("zee-launcher-unsupported"),
                  (e.innerHTML = `\n            <style>.zee-launcher-unsupported {\n               display: flex;\n               flex-direction: column;\n               height: 100%;\n               justify-content: center;\n               position: absolute;\n               width: 100%;\n               height: 100%;\n               top: 0;\n               left: 0;\n               align-items: center;\n               }\n               .zee-launcher-browser-logo {\n               background-image: url("data:image/svg+xml,%3C%3Fxml version='1.0' encoding='UTF-8'%3F%3E%3Csvg version='1.1' viewBox='0 0 210 211' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg transform='translate(-82 -146)' fill-rule='nonzero' stroke='%23ffffff' stroke-width='2'%3E%3Cg transform='translate(83 146.5)'%3E%3Cpath d='m55.146 88.785l-32.039-49.472c19.962-24.947 49.904-38.684 80.517-38.81 17.739-0.12642 35.855 4.4246 52.336 13.99 18.2 10.619 32.039 25.874 40.846 43.404l-86.095-4.5511c-24.365-1.4327-47.556 12.347-55.565 35.439zm13.797 16.224c0 19.468 15.684 35.229 35.059 35.229 19.374 0 35.059-15.76 35.059-35.229 0-19.468-15.684-35.229-35.059-35.229-19.374 0-35.059 15.718-35.059 35.229zm132.06-37.588l-58.585 3.034c15.894 18.668 16.145 45.595 2.7678 66.243l-47.01 72.648c19.5 1.0535 39.588-3.2447 57.788-13.864 45.039-26.126 63.282-80.908 45.039-128.06zm-144.93 57.647l-39.126-77.326c-10.694 16.434-16.942 36.156-16.942 57.267 0 52.253 38.078 95.53 87.856 103.2l26.713-52.59c-24.155 4.5511-47.472-8.765-58.501-30.551z'/%3E%3C/g%3E%3C/g%3E%3C/g%3E%3C/svg%3E%0A");\n               width: 211px;\n               height: 211px;\n               margin-bottom: 25%;\n               margin-top: -60px;\n               background-repeat: no-repeat;\n               }\n               .zee-launcher-browser-safari .zee-launcher-browser-logo {\n               background-image: url("data:image/svg+xml,%3C%3Fxml version='1.0' encoding='UTF-8'%3F%3E%3Csvg version='1.1' viewBox='0 0 211 211' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg transform='translate(-82 -146)' fill-rule='nonzero' stroke='%23ffffff' stroke-width='2'%3E%3Cpath d='m180 251.86c0-4.0385 2.9377-7.855 7.2552-7.855 3.9614 0 7.7448 2.8402 7.7448 7.145 0 4.0385-2.8487 7.855-7.1662 7.855-4.0059 0-7.8338-2.9734-7.8338-7.145zm112-0.35503c0 57.728-46.772 104.5-104.5 104.5s-104.5-46.772-104.5-104.5 46.772-104.5 104.5-104.5 104.5 46.772 104.5 104.5zm-12-1c0-51.649-41.851-93.5-93.5-93.5s-93.5 41.851-93.5 93.5 41.851 93.5 93.5 93.5 93.5-41.851 93.5-93.5zm-30.624 40.983c0 1.5095 5.4495 4.2768 6.8328 5.1154-11.486 17.401-29.26 29.938-49.423 34.928l-1.8444-7.757c-0.12576-1.0482-0.79646-1.174-1.7606-1.174-0.79646 0-1.2576 1.174-1.1737 1.7611l1.8444 7.8828c-5.5753 1.174-11.234 1.7611-16.935 1.7611-15.217 0-30.182-4.2768-43.177-12.202 0.71263-1.174 5.1141-7.5474 5.1141-8.4698 0-0.79666-0.71263-1.5095-1.5091-1.5095-1.6348 0-5.1141 6.9603-6.1621 8.344-17.522-11.615-30.182-29.602-35.044-50.148l8.0066-1.761c0.92222-0.25158 1.1737-0.92246 1.1737-1.7611 0-0.79667-1.1737-1.2579-1.8444-1.174l-7.8389 1.803c-1.048-5.3251-1.6348-10.692-1.6348-16.143 0-15.556 4.4015-30.86 12.66-43.984 1.1737 0.71281 6.749 4.5284 7.6712 4.5284 0.79646 0 1.5091-0.58702 1.5091-1.3837 0-1.6353-6.1621-4.7381-7.5455-5.7024 11.821-17.275 29.805-29.728 50.219-34.34l1.7606 7.757c0.25152 0.92246 0.92222 1.174 1.7606 1.174 0.83838 0 1.2576-1.174 1.1737-1.8449l-1.7606-7.6732c5.1141-0.92246 10.312-1.5095 15.552-1.5095 15.552 0 30.727 4.4026 43.973 12.663-0.79646 1.174-4.5273 6.6249-4.5273 7.5474 0 0.79667 0.58687 1.5095 1.3833 1.5095 1.6348 0 4.7369-6.0379 5.5753-7.4216 17.187 11.615 29.469 29.351 34.248 49.561l-6.4975 1.3837c-1.048 0.25158-1.1737 0.92246-1.1737 1.8449 0 0.79667 1.1737 1.2579 1.7606 1.174l6.6232-1.5095c1.048 5.3251 1.6348 10.776 1.6348 16.227 0 15.221-4.1919 30.189-12.073 43.062-1.1737-0.58702-6.0364-4.0672-6.9586-4.0672-0.8803 0-1.5929 0.71281-1.5929 1.5095zm-14.876-98.483c-5.2178 4.88-53.863 49.48-55.228 51.8l-38.772 64.2c5.0974-4.76 53.863-49.6 55.108-51.72l38.892-64.28z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");\n               }\n               .zee-launcher-unsupported-message {\n               text-align: center;\n               width: 250px;\n               font-family: sans-serif;\n               color: #ffffff;\n               }\n               .zee-launcher-unsupported-message-copy {\n               border: 1px solid #ffffff;\n               border-radius: 5px;\n               margin-top: 10px;\n               }\n               #zee-launcher-unsupported-message-input {\n               border: none;\n               padding: 10px;\n               border-radius: 0px;\n               border-right: 1px solid #344B60;\n               height: 40px;\n               color: #ffffff;\n               background-color: black;\n               box-sizing: border-box;\n               width: calc(100% - 65px);\n               margin-left: 5px;\n               }\n               #zee-launcher-unsupported-message-button {\n               background: none;\n               border: none;\n               outline: none;\n               text-transform: uppercase;\n               color: #ffffff;\n               height: 40px;\n               display: inline-block;\n               width: 59px;\n               }\n               .zee-launcher-unsupported-message-before-copy {\n               height: 100px;\n               display: flex;\n               flex-direction: column;\n               justify-content: center;\n               margin-top: 20px;\n               }\n               .zee-launcher-unsupported-message-copied .zee-launcher-unsupported-message-before-copy {\n               display: none;\n               }\n               .zee-launcher-unsupported-message-after-copy {\n               display: none;\n               }\n               .zee-launcher-unsupported-message-copied .zee-launcher-unsupported-message-after-copy {\n               height: 100px;\n               display: flex;\n               flex-direction: column;\n               justify-content: center;\n               margin-top: 20px;\n               }\n            </style>\n            <div class="zee-launcher-browser-logo"></div>\n            <div class="zee-launcher-unsupported-message">Open with ${t} to access this content.</div>\n            <div class="zee-launcher-unsupported-message-before-copy">\n               <div class="zee-launcher-unsupported-message ">Tap below to copy the address for easy pasting into ${t}.</div>\n               <div class="zee-launcher-unsupported-message-copy"><input id="zee-launcher-unsupported-message-input" type="text/"><button id="zee-launcher-unsupported-message-button">Copy</button></div>\n            </div>\n            <div class="zee-launcher-unsupported-message zee-launcher-unsupported-message-after-copy">COPIED! Now paste into ${t}'s address bar to experience the content.</div>\n    `);
                let r =
                  e.querySelector("#zee-launcher-unsupported-message-input") ||
                  document.createElement("input");
                r.value = window.location.href;
                let i = () => {
                  if (navigator.userAgent.match(/iPhone|iPod|iPad/i)) {
                    let e = document.createRange();
                    e.selectNodeContents(r);
                    let t = window.getSelection();
                    if (!t) return;
                    t.removeAllRanges(),
                      t.addRange(e),
                      r.setSelectionRange(0, 999999999);
                  } else r.select();
                  document.execCommand("copy"),
                    r.blur(),
                    e.classList.toggle(
                      "zee-launcher-unsupported-message-copied",
                      !0
                    );
                };
                return (
                  (
                    e.querySelector(
                      "#zee-launcher-unsupported-message-button"
                    ) || document.createElement("button")
                  ).addEventListener("click", i),
                  r.addEventListener("click", i),
                  e
                );
              })()
            ),
              Object.assign(e.style, {
                position: "fixed",
                width: "100%",
                height: "100%",
                top: "0px",
                left: "0px",
                zIndex: 1001,
                backgroundColor: "rgba(0, 0, 0, 0.9)",
                fontFamily: "sans-serif",
                color: "white",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
              }),
              e.classList.add("zee_launcher_compatibility"),
              document.body.append(e);
          },
        };
        let lt = 1,
          ut = new Map();
        class dt extends Te {
          constructor(e, t) {
            super(),
              (this._impl = e),
              (this._pipeline = t),
              (this._packetNumber = 0),
              (this._motionUpdatesQueued = 0),
              (this._motionUpdatesSent = 0),
              (this._minFrameGapMs = 0),
              (this._lastUpdateTime = 0);
          }
          static create(e) {
            let t = lt++;
            return (
              ut.set(t, new dt(t, e)),
              re("sequence_source_source_t initialized"),
              t
            );
          }
          static get(e) {
            return ut.get(e);
          }
          loadFromMemory(e) {
            try {
              (this._decoder = new Ae(e)),
                (this._packetNumber = 0),
                (this._lastUpdateTime = 0);
            } catch (e) {
              ie("Unable to decode sequence:", e);
            }
          }
          maxPlaybackFpsSet(e) {
            this._minFrameGapMs = e <= 0 ? 0 : 1e3 / e;
          }
          setTime(e) {
            e < 0 ? delete this._time : (this._time = e);
          }
          getFrame(e) {
            var t;
            let r = rt.get(this._pipeline);
            if (!r) return;
            if (!this._decoder) return;
            if (
              (this._submitMotionUpdates(r),
              this._motionUpdatesQueued > this._motionUpdatesSent)
            )
              return;
            if (e) return;
            let i =
              null !== (t = this._time) && void 0 !== t ? t : performance.now();
            if (i < this._lastUpdateTime + this._minFrameGapMs) return;
            if (this._packetNumber >= this._decoder.numberPackets) return;
            let a = this._decoder.dataByPacket.get(this._packetNumber);
            if (a.type != ve.CAMERA_FRAME) return;
            this._packetNumber++;
            let n = r.cameraPixelArrays.pop();
            for (; n && n.byteLength !== a.greyscale.byteLength; )
              n = r.cameraPixelArrays.pop();
            n || (n = new ArrayBuffer(a.greyscale.byteLength)),
              new Uint8Array(n).set(a.greyscale),
              (this._lastUpdateTime = i);
            let s = {
              data: n,
              cameraSourceData: a.greyscale,
              cameraModel: a.cameraModel,
              cameraToDevice: a.cameraToDevice,
              dataWidth: a.width,
              dataHeight: a.height,
              texture: void 0,
              userFacing: a.userFacing,
              uvTransform: v(),
              cameraSource: this,
            };
            this._submitMotionUpdates(r);
            const o = r.registerToken(s);
            r.sendDataToWorker(
              s.data || new ArrayBuffer(0),
              o,
              s.dataWidth,
              s.dataHeight,
              s.userFacing,
              s.cameraToDevice,
              s.cameraModel
            );
          }
          destroy() {
            ut.delete(this._impl), this.pause();
          }
          start() {
            var e;
            let t = rt.get(this._pipeline);
            t &&
              t.currentCameraSource !== this &&
              (null === (e = t.currentCameraSource) ||
                void 0 === e ||
                e.pause(),
              (t.currentCameraSource = this));
          }
          pause() {
            let e = rt.get(this._pipeline);
            e &&
              e.currentCameraSource === this &&
              (e.currentCameraSource = void 0);
          }
          uploadGL(e) {
            let t = rt.get(this._pipeline);
            if (!t) return;
            let r = null == t ? void 0 : t.glContext;
            r &&
              (e.texture || (e.texture = t.getVideoTexture()),
              e.texture &&
                e.cameraSourceData &&
                (r.bindTexture(r.TEXTURE_2D, e.texture),
                r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL, !1),
                r.texImage2D(
                  r.TEXTURE_2D,
                  0,
                  r.LUMINANCE,
                  e.dataWidth,
                  e.dataHeight,
                  0,
                  r.LUMINANCE,
                  r.UNSIGNED_BYTE,
                  new Uint8Array(e.cameraSourceData)
                ),
                r.bindTexture(r.TEXTURE_2D, null)));
          }
          _submitMotionUpdates(e) {
            let t = !1;
            for (; this._packetNumber < this._decoder.numberPackets; ) {
              let r = this._decoder.dataByPacket.get(this._packetNumber);
              if (r.type == ve.CAMERA_FRAME) break;
              switch (r.type) {
                case ve.ACCELEROMETER:
                  e.motionAccelerometerSubmit(r.t, r.x, r.y, r.z), (t = !0);
                  break;
                case ve.ROTATION_RATE:
                  e.motionRotationRateSubmit(r.t, r.x, r.y, r.z), (t = !0);
                  break;
                case ve.ATTITUDE:
                  e.motionAttitudeSubmit(r.t, r.x, r.y, r.z), (t = !0);
                  break;
                case ve.ATTITUDE_MATRIX:
                  e.motionAttitudeMatrix(r.attitude), (t = !0);
              }
              this._packetNumber++;
            }
            t &&
              (this._motionUpdatesQueued++,
              setTimeout(() => {
                this._motionUpdatesSent++;
              }, 0));
          }
        }
        function ft() {
          var e = new w(2);
          return w != Float32Array && ((e[0] = 0), (e[1] = 0)), e;
        }
        function ht(e, t) {
          return (e[0] = t[0]), (e[1] = t[1]), e;
        }
        function pt(e, t, r) {
          return (e[0] = t[0] + r[0]), (e[1] = t[1] + r[1]), e;
        }
        function mt(e, t, r) {
          return (e[0] = t[0] - r[0]), (e[1] = t[1] - r[1]), e;
        }
        function gt(e, t, r) {
          return (e[0] = t[0] * r), (e[1] = t[1] * r), e;
        }
        function bt(e) {
          var t = e[0],
            r = e[1];
          return Math.hypot(t, r);
        }
        function wt() {
          return {
            indices: new Uint16Array(0),
            vertices: new Float32Array(0),
            normals: new Float32Array(0),
            uvs: new Float32Array(0),
          };
        }
        function vt(e, t, r, i, a, n, s, _, c, l) {
          isNaN(_) && (_ = 1);
          const u = [],
            d = [],
            f = l > 0 ? l : 1,
            h = (2 * f) / t,
            p = 64;
          for (let t = 0; t <= p; ++t) {
            const i = (t * c) / p + (2 * Math.PI - c) / 2,
              a = e.bottomRadius * Math.sin(i) * h,
              n = e.bottomRadius * Math.cos(i) * h,
              s = e.topRadius * Math.sin(i) * h,
              o = e.topRadius * Math.cos(i) * h,
              _ = -1 * f,
              l = f;
            r
              ? (u.push(a, _, n), u.push(s, l, o))
              : (u.push(s, l, -o), u.push(a, _, -n));
          }
          for (let t = 0; t <= p; ++t)
            if (e.type == o.IMAGE_TRACKER_TYPE_CYLINDRICAL) {
              const e = 1 - t / p;
              d.push(e, 1), d.push(e, 0);
            } else {
              let e = 2 * -(t / p - 0.5) * i;
              r && ((e = -e + i), e > i && (e = e - i - i));
              const o = ft();
              (o[0] = Math.sin(e)), (o[1] = Math.cos(e)), r && (o[1] *= -1);
              const c = ft();
              ht(c, o), gt(c, c, a), pt(c, s, c);
              const l = ft();
              ht(l, o),
                gt(l, l, n),
                pt(l, s, l),
                d.push((l[0] + _) / (2 * _), 1 - (1 - l[1]) / 2),
                d.push((c[0] + _) / (2 * _), 1 - (1 - c[1]) / 2);
            }
          const m = [];
          for (let e = 0; e < p; ++e) {
            const t = 2 * e;
            m.push(t + 1, t + 2, t + 3), m.push(t + 0, t + 2, t + 1);
          }
          return {
            vertices: new Float32Array(u),
            indices: new Uint16Array(m),
            normals: new Float32Array(0),
            uvs: new Float32Array(d),
          };
        }
        ft();
        const yt = new TextDecoder();
        class Et {
          constructor(e, t = !1) {
            (this._data = e),
              (this._paddingBytes = t),
              (this.truncatedChunks = !1),
              (this._view = new DataView(this._data)),
              (this.root = this._parse());
          }
          _parse() {
            if ("RIFF" !== yt.decode(this._data.slice(0, 4)))
              throw new Error("Not a valid ZPT file");
            return this._parseChunk(0);
          }
          _parseChunk(e) {
            const t = yt.decode(this._data.slice(e, e + 4)),
              r = this._view.getUint32(e + 4, !0),
              i = new Uint8Array(this._data, e + 8, r);
            let a, n;
            if (
              (i.byteLength !== r && (this.truncatedChunks = !0),
              "RIFF" === t || "LIST" === t)
            ) {
              (n = yt.decode(this._data.slice(e + 8, e + 12))), (a = []);
              let t = 4;
              for (; t < i.byteLength - 1; ) {
                const r = this._parseChunk(e + 8 + t);
                a.push(r),
                  (t += r.data.byteLength + 8),
                  this._paddingBytes && 1 & r.data.byteLength && t++;
              }
            }
            return { ident: t, data: i, subident: n, subchunks: a };
          }
          find(e, t = this.root) {
            if (t.ident === e) return t;
            if (t.subchunks)
              for (let r of t.subchunks) {
                const t = this.find(e, r);
                if (t) return t;
              }
          }
          has(e) {
            return void 0 !== this.find(e);
          }
        }
        let At = new Map();
        const Tt = new TextDecoder();
        class Rt {
          constructor(e, t) {
            (this._client = e), (this._impl = t), (this._targets = []);
          }
          static create(e, t) {
            let r = t.image_tracker_create(e);
            return At.set(r, new Rt(t, r)), r;
          }
          static get(e) {
            return At.get(e);
          }
          destroy() {
            this._client.image_tracker_destroy(this._impl),
              At.delete(this._impl);
          }
          loadFromMemory(e) {
            this._targets.push({ data: e }),
              this._client.image_tracker_target_load_from_memory(this._impl, e);
          }
          targetCount() {
            return this._targets.length;
          }
          getTargetInfo(e) {
            let t = this._targets[e];
            if (t && t.info) return t.info;
            t.info = {
              topRadius: -1,
              bottomRadius: -1,
              sideLength: -1,
              physicalScaleFactor: -1,
              trainedWidth: 0,
              trainedHeight: 0,
              type: o.IMAGE_TRACKER_TYPE_PLANAR,
            };
            try {
              const e = new Et(t.data, !1),
                r = e.find("IMG ");
              if (r) {
                let i = "image/png";
                const a = e.find("IMGM");
                a && (i = Tt.decode(a.data)),
                  (t.info.preview = { mimeType: i, compressed: r.data });
              }
              const i = e.find("ODLE");
              if (i) {
                const e = Tt.decode(i.data);
                this._parseOdle(e, t.info);
              }
            } catch (e) {}
            return t.info;
          }
          _parseOdle(e, t) {
            let r = 0,
              i = "0";
            return (
              ([i, r] = xt(r, e)),
              "1" === i
                ? this._parseOdleV1(e, r, t)
                : "3" === i
                ? this._parseOdleV3(e, r, t)
                : void 0
            );
          }
          _parseOdleV1(e, t, r) {
            let i = "0";
            if ((([i, t] = xt(t, e)), "0" !== i && "1" !== i)) return;
            let a = "";
            if ((([a, t] = xt(t, e)), 0 !== a.length)) return;
            let n = "";
            [n, t] = xt(t, e);
            const s = n.split(" ");
            s.length < 5 ||
              ((r.trainedWidth = parseInt(s[3].replace("[", ""))),
              (r.trainedHeight = parseInt(s[4].replace("]", ""))));
          }
          _parseOdleV3(e, t, r) {
            let i = "0";
            if ((([i, t] = xt(t, e)), "0" !== i && "1" !== i)) return;
            let a = "0";
            [a, t] = xt(t, e);
            const n = parseInt(a);
            if (isNaN(n) || n < 1) return;
            let s = "";
            if ((([s, t] = xt(t, e)), 0 !== s.length)) return;
            let o = "";
            [o, t] = xt(t, e);
            const _ = o.split(" ");
            if (_.length < 6) return;
            const c = parseInt(_[0]);
            (0 !== c && 1 !== c && 2 !== c) || (r.type = c),
              (r.trainedWidth = parseInt(_[4].replace("[", ""))),
              (r.trainedHeight = parseInt(_[5].replace("]", ""))),
              _.length >= 7 &&
                ((r.physicalScaleFactor = parseFloat(_[6])),
                isNaN(r.physicalScaleFactor) && (r.physicalScaleFactor = -1)),
              _.length >= 8 &&
                ((r.topRadius = parseFloat(_[7])),
                isNaN(r.topRadius) && (r.topRadius = -1),
                (r.bottomRadius = r.topRadius)),
              _.length >= 9 &&
                ((r.bottomRadius = parseFloat(_[8])),
                isNaN(r.bottomRadius) && (r.bottomRadius = -1)),
              _.length >= 10 &&
                ((r.sideLength = parseFloat(_[9])),
                isNaN(r.sideLength) && (r.sideLength = -1));
          }
          getDecodedPreview(e) {
            const t = this.getTargetInfo(e);
            if (t.preview) {
              if (!t.preview.image) {
                const e = new Blob([t.preview.compressed], {
                  type: t.preview.mimeType,
                });
                (t.preview.image = new Image()),
                  (t.preview.image.src = URL.createObjectURL(e));
              }
              return t.preview.image;
            }
          }
          getPreviewMesh(e) {
            const t = this.getTargetInfo(e);
            return (
              t.previewMesh ||
                (t.previewMesh = (function (e) {
                  switch (e.type) {
                    case o.IMAGE_TRACKER_TYPE_PLANAR:
                      return (function (e) {
                        const t = e.trainedWidth / e.trainedHeight;
                        if (isNaN(t)) return wt();
                        const r =
                          e.physicalScaleFactor > 0 ? e.physicalScaleFactor : 1;
                        return {
                          vertices: new Float32Array([
                            -1 * t * r,
                            -1 * r,
                            0,
                            -1 * t * r,
                            r,
                            0,
                            t * r,
                            r,
                            0,
                            t * r,
                            -1 * r,
                            0,
                          ]),
                          indices: new Uint16Array([0, 2, 1, 0, 3, 2]),
                          uvs: new Float32Array([0, 0, 0, 1, 1, 1, 1, 0]),
                          normals: new Float32Array([
                            0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1,
                          ]),
                        };
                      })(e);
                    case o.IMAGE_TRACKER_TYPE_CYLINDRICAL:
                      return (function (e) {
                        const t =
                          (2 * e.trainedWidth) /
                          (e.trainedHeight * e.topRadius);
                        return vt(
                          e,
                          2,
                          !1,
                          0,
                          0,
                          0,
                          ft(),
                          e.trainedWidth / e.trainedHeight,
                          t,
                          e.physicalScaleFactor
                        );
                      })(e);
                    case o.IMAGE_TRACKER_TYPE_CONICAL:
                      return (function (e) {
                        const t = e.topRadius - e.bottomRadius,
                          r = Math.sqrt(e.sideLength * e.sideLength - t * t),
                          i = e.bottomRadius > e.topRadius;
                        let a = e.trainedWidth / e.trainedHeight;
                        isNaN(a) && (a = 1);
                        const n = !(e.bottomRadius > 0 && e.topRadius > 0),
                          s =
                            e.sideLength <
                            2 * Math.abs(e.topRadius - e.bottomRadius),
                          o = ft(),
                          _ = ft(),
                          c = ft();
                        if (n)
                          if (s)
                            if (i) {
                              c[1] = a - 1;
                              const e = Math.acos((2 - a) / a);
                              (o[0] = a * Math.sin(e)),
                                (o[1] = a - 1 + a * Math.cos(e)),
                                ht(_, c);
                            } else {
                              c[1] = 1 - a;
                              const e = Math.PI + Math.acos((2 - a) / a);
                              (o[0] = a * Math.sin(e)),
                                (o[1] = 1 - a + a * Math.cos(e)),
                                ht(_, c);
                            }
                          else
                            i
                              ? ((c[1] = 1),
                                ht(_, c),
                                (o[0] = a),
                                (o[1] = 1 - Math.sqrt(4 - Math.pow(a, 2))))
                              : ((c[1] = -1),
                                ht(_, c),
                                (o[0] = -a),
                                (o[1] = Math.sqrt(4 - Math.pow(a, 2)) - 1));
                        else if (s)
                          if (i) {
                            c[1] = a - 1;
                            const t = Math.acos((2 - a) / a);
                            (o[0] = a * Math.sin(t)),
                              (o[1] = a - 1 + a * Math.cos(t)),
                              (_[0] = (a - e.sideLength) * Math.sin(t)),
                              (_[1] = a - 1 + (a - e.sideLength) * Math.cos(t));
                          } else {
                            c[1] = 1 - a;
                            const t = Math.PI + Math.acos((2 - a) / a);
                            (o[0] = a * Math.sin(t)),
                              (o[1] = 1 - a + a * Math.cos(t)),
                              (_[0] = (a - e.sideLength) * Math.sin(t)),
                              (_[1] = 1 - a + (a - e.sideLength) * Math.cos(t));
                          }
                        else {
                          const t = i
                            ? e.topRadius / e.bottomRadius
                            : e.bottomRadius / e.topRadius;
                          i
                            ? ((_[0] = t * a),
                              (_[1] = 1),
                              (o[0] = a),
                              (o[1] =
                                1 -
                                Math.sqrt(
                                  e.sideLength * e.sideLength -
                                    (_[0] - o[0]) * (_[0] - o[0])
                                )),
                              (c[1] =
                                o[1] + (o[0] / (o[0] - _[0])) * (_[1] - o[1])))
                            : ((_[0] = -t * a),
                              (_[1] = -1),
                              (o[0] = -a),
                              (o[1] =
                                Math.sqrt(
                                  e.sideLength * e.sideLength -
                                    (_[0] - o[0]) * (_[0] - o[0])
                                ) - 1),
                              (c[1] =
                                o[1] -
                                (-o[0] / (_[0] - o[0])) * (o[1] - _[1])));
                        }
                        const l = ft();
                        mt(l, o, c);
                        const u = ft();
                        mt(u, _, c);
                        const d = bt(l),
                          f = bt(u);
                        let h = 2 * Math.abs(Math.atan(l[0] / l[1]));
                        s && (h = 2 * Math.PI - h);
                        let p = (d * h) / e.topRadius,
                          m = Math.abs(Math.atan(l[0] / l[1]));
                        return (
                          s && (m = Math.PI - m),
                          vt(e, r, i, m, f, d, c, a, p, e.physicalScaleFactor)
                        );
                      })(e);
                  }
                  return wt();
                })(t)),
              t.previewMesh
            );
          }
        }
        function xt(e, t) {
          let r = t.indexOf("\n", e);
          return [t.substring(e, r >= 0 ? r : void 0).replace("\r", ""), r + 1];
        }
        var kt = function (e, t, r, i) {
          return new (r || (r = Promise))(function (a, n) {
            function s(e) {
              try {
                _(i.next(e));
              } catch (e) {
                n(e);
              }
            }
            function o(e) {
              try {
                _(i.throw(e));
              } catch (e) {
                n(e);
              }
            }
            function _(e) {
              var t;
              e.done
                ? a(e.value)
                : ((t = e.value),
                  t instanceof r
                    ? t
                    : new r(function (e) {
                        e(t);
                      })).then(s, o);
            }
            _((i = i.apply(e, t || [])).next());
          });
        };
        let Ft;
        function Lt(e) {
          if (Ft) return Ft;
          let t = !1;
          D(null == e ? void 0 : e.worker).then(() => {
            re("Fully loaded"), (t = !0);
          });
          let i = new l((e) => {
            C.postOutgoingMessage({ t: "zappar", d: e }, [e]);
          });
          if (
            window.location.hostname.toLowerCase().indexOf(".zappar.io") > 0 ||
            window.location.hostname.toLowerCase().indexOf(".webar.run") > 0
          ) {
            let e = window.location.pathname.split("/");
            e.length > 1 &&
              e[1].length > 0 &&
              i.impl.analytics_project_id_set(".wiz" + e[1]);
          }
          return (
            C.onIncomingMessage.bind((e) => {
              var t, r, a, n, s, o, _;
              switch (e.t) {
                case "zappar":
                  null === (t = rt.get(e.p)) ||
                    void 0 === t ||
                    t.pendingMessages.push(e.d);
                  break;
                case "buf":
                  i.serializer.bufferReturn(e.d);
                  break;
                case "cameraFrameRecycleS2C": {
                  let t = e;
                  null ===
                    (a =
                      null === (r = rt.get(t.p)) || void 0 === r
                        ? void 0
                        : r.cameraTokenReturn) ||
                    void 0 === a ||
                    a.call(r, e);
                  break;
                }
                case "videoFrameS2C": {
                  let t = e;
                  null ===
                    (s =
                      null === (n = rt.get(t.p)) || void 0 === n
                        ? void 0
                        : n.videoFrameFromWorker) ||
                    void 0 === s ||
                    s.call(n, t);
                  break;
                }
                case "imageBitmapS2C": {
                  let t = e;
                  null ===
                    (_ =
                      null === (o = rt.get(t.p)) || void 0 === o
                        ? void 0
                        : o.imageBitmapFromWorker) ||
                    void 0 === _ ||
                    _.call(o, t);
                  break;
                }

                case "gfx": {
                  let e = document.createElement("div");
                  (e.innerHTML =
                    '<a xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="250" height="80.408" viewBox="0 0 250 80.408"><defs><filter id="a" x="0" y="1.182" width="250" height="79.226" filterUnits="userSpaceOnUse"><feOffset dy="3" input="SourceAlpha"/><feGaussianBlur stdDeviation="3" result="b"/><feFlood flood-opacity="0.161"/><feComposite operator="in" in2="b"/><feComposite in="SourceGraphic"/></filter><filter id="c" x="6.929" y="0" width="111.975" height="40.988" filterUnits="userSpaceOnUse"><feOffset dy="3" input="SourceAlpha"/><feGaussianBlur stdDeviation="3" result="d"/><feFlood flood-opacity="0.161"/><feComposite operator="in" in2="d"/><feComposite in="SourceGraphic"/></filter></defs><g transform="translate(-26.873 -414.029)"><g transform="translate(44 423.332)"><g transform="translate(0 0.635)" style="isolation:isolate"><g transform="translate(0 0)"><g transform="matrix(1, 0, 0, 1, -17.13, -9.94)" filter="url(#a)"><path d="M55.766,44.97V11.8h8.272v2.6h.089a8.258,8.258,0,0,1,7.046-3.357,11.4,11.4,0,0,1,8.5,3.686,12.667,12.667,0,0,1,3.278,8.622,12.509,12.509,0,0,1-3.25,8.57,11.353,11.353,0,0,1-8.429,3.6,9.533,9.533,0,0,1-7.229-2.95V43.378l-8.269,1.594h0Zm8-21.671a4.958,4.958,0,0,0,5.319,5.15A4.957,4.957,0,0,0,74.4,23.3a5.321,5.321,0,0,0-10.638,0ZM16.105,18.412H2.752V11.038H30.9L14.887,37.16H38.22L0,44.534ZM131.469,38.45a.761.761,0,0,1-.484-.166.582.582,0,0,1-.228-.419l-.553-3.586a12.243,12.243,0,0,1-1.782-.721l-2.789,2.084a.718.718,0,0,1-.5.176.688.688,0,0,1-.495-.214,25.864,25.864,0,0,1-3.264-3.274.754.754,0,0,1,.018-.9c.2-.277.543-.713,1.01-1.3.483-.6.832-1.05,1.068-1.374a9.614,9.614,0,0,1-.811-1.929l-3.62-.527a.631.631,0,0,1-.416-.243.728.728,0,0,1-.159-.458V21.283a.743.743,0,0,1,.159-.448.6.6,0,0,1,.376-.253l3.68-.546a9.511,9.511,0,0,1,.772-1.792c-.523-.733-1.235-1.638-2.117-2.69a.731.731,0,0,1-.2-.467.82.82,0,0,1,.178-.449,19.577,19.577,0,0,1,1.949-2.095c.953-.924,1.582-1.393,1.87-1.393a.861.861,0,0,1,.515.195l2.729,2.084a11.551,11.551,0,0,1,1.8-.741,31.446,31.446,0,0,1,.573-3.623.666.666,0,0,1,.712-.546h4.392a.757.757,0,0,1,.485.166.58.58,0,0,1,.228.419l.553,3.584a12.576,12.576,0,0,1,1.782.722l2.809-2.085a.641.641,0,0,1,.475-.176.776.776,0,0,1,.5.195,27.035,27.035,0,0,1,3.264,3.313.625.625,0,0,1,.139.429.742.742,0,0,1-.159.447c-.2.271-.525.7-1.008,1.3-.467.581-.827,1.043-1.069,1.373a11.8,11.8,0,0,1,.812,1.91l3.62.545a.626.626,0,0,1,.416.244.736.736,0,0,1,.158.457v4.325a.755.755,0,0,1-.158.449.6.6,0,0,1-.4.253l-3.66.545a12.692,12.692,0,0,1-.772,1.774c.465.653,1.177,1.559,2.117,2.688a.751.751,0,0,1,.2.488.648.648,0,0,1-.178.448,19.638,19.638,0,0,1-1.958,2.1c-.947.918-1.573,1.384-1.861,1.384a.976.976,0,0,1-.515-.176l-2.731-2.1a11.361,11.361,0,0,1-1.8.741,31.849,31.849,0,0,1-.573,3.625.668.668,0,0,1-.713.546Zm-1.385-18.491a4.935,4.935,0,0,0,0,7.053,5.12,5.12,0,0,0,7.163,0,4.931,4.931,0,0,0,0-7.053,5.117,5.117,0,0,0-7.163,0Zm69.969,14.868a18.523,18.523,0,0,1-4.932-2.073l1.705-6.1A13.441,13.441,0,0,0,200.779,29a12.14,12.14,0,0,0,4.344.818,4.644,4.644,0,0,0,2.351-.482,1.538,1.538,0,0,0,.806-1.4q0-1.5-3.25-2.242-1.061-.246-1.705-.425a12.335,12.335,0,0,1-5.358-2.589,5.5,5.5,0,0,1-1.671-4.157,6.323,6.323,0,0,1,2.547-5.267,10.993,10.993,0,0,1,6.9-1.972,21.351,21.351,0,0,1,4.552.5,25.439,25.439,0,0,1,4.736,1.557l-1.705,5.491a14.244,14.244,0,0,0-3.319-1.636,10.6,10.6,0,0,0-3.364-.561,4.227,4.227,0,0,0-2.121.426,1.357,1.357,0,0,0-.714,1.232q0,1.211,3.227,2.04.737.2,1.106.291,4.264,1.187,5.935,2.79a5.728,5.728,0,0,1,1.67,4.337A6.781,6.781,0,0,1,213,33.37a11.48,11.48,0,0,1-7.259,2.14A22.577,22.577,0,0,1,200.053,34.827ZM30.568,31.834a12.566,12.566,0,0,1-3.292-8.59,12.567,12.567,0,0,1,3.247-8.568,11.3,11.3,0,0,1,8.423-3.638,9.519,9.519,0,0,1,7.217,3V11.8h8.264V34.735H46.163V32.186h-.09c-1.32,2.071-3.951,3.308-7.038,3.308A11.412,11.412,0,0,1,30.568,31.834Zm5.245-8.545a4.95,4.95,0,0,0,5.312,5.141,4.95,4.95,0,0,0,5.312-5.141A5.023,5.023,0,0,0,41.125,18.1,5.023,5.023,0,0,0,35.813,23.289Zm69.2,11.554-3.527-10.452q-.282-.892-.505-1.8t-.412-1.8a30.821,30.821,0,0,1-.917,3.454l-.047.16L96.1,34.842H90.176l-9.925-23.1h8.632l3.552,10.223q.4,1.12.634,1.955t.377,1.635a23.558,23.558,0,0,1,.917-3.179q.093-.274.141-.411l3.528-10.223h5.056l3.5,10.2.07.183a20.724,20.724,0,0,1,.988,3.43q.141-.732.364-1.532t.647-2.058l3.574-10.223h8.678l-9.971,23.1Zm80.154-.092-8.587-9.841v9.841h-7.888V1.5L176.583,0V22.28l8.272-9.665h9.96L184.584,23.266l11.156,11.485Zm-35.09,0V11.782h8.272v3.761h.091a8.131,8.131,0,0,1,7.546-4.074h1.593V19.3a6.8,6.8,0,0,0-3.5-.761c-4.593,0-5.728,3-5.728,6.941v9.268Z" transform="translate(17.13 15.31)"/></g><g transform="matrix(1, 0, 0, 1, -17.13, -9.94)" filter="url(#c)"><path d="M3.576-12.852v-4.3H6.628a2.867,2.867,0,0,1,1.945.55A2.034,2.034,0,0,1,9.188-15a2.06,2.06,0,0,1-.615,1.608,2.784,2.784,0,0,1-1.945.542ZM2.017-18.464V-6.748H3.576v-4.792H7.153a3.569,3.569,0,0,0,2.683-.9A3.478,3.478,0,0,0,10.747-15a3.45,3.45,0,0,0-.911-2.552,3.638,3.638,0,0,0-2.683-.911Zm11.421,7.483a4.221,4.221,0,0,1,.205-1.37,2.957,2.957,0,0,1,.566-1.009,2.411,2.411,0,0,1,.845-.624A2.515,2.515,0,0,1,16.08-14.2a2.515,2.515,0,0,1,1.026.213,2.411,2.411,0,0,1,.845.624,2.957,2.957,0,0,1,.566,1.009,4.221,4.221,0,0,1,.205,1.37,4.221,4.221,0,0,1-.205,1.37,2.867,2.867,0,0,1-.566,1,2.457,2.457,0,0,1-.845.615,2.515,2.515,0,0,1-1.026.213,2.515,2.515,0,0,1-1.026-.213,2.457,2.457,0,0,1-.845-.615,2.867,2.867,0,0,1-.566-1A4.221,4.221,0,0,1,13.438-10.981Zm-1.477,0a5.573,5.573,0,0,0,.263,1.739,3.97,3.97,0,0,0,.788,1.4,3.623,3.623,0,0,0,1.3.935,4.4,4.4,0,0,0,1.772.336A4.381,4.381,0,0,0,17.86-6.9a3.641,3.641,0,0,0,1.288-.935,3.97,3.97,0,0,0,.788-1.4,5.573,5.573,0,0,0,.263-1.739,5.65,5.65,0,0,0-.263-1.748,3.96,3.96,0,0,0-.788-1.411,3.729,3.729,0,0,0-1.288-.944,4.29,4.29,0,0,0-1.78-.345,4.3,4.3,0,0,0-1.772.345,3.71,3.71,0,0,0-1.3.944,3.96,3.96,0,0,0-.788,1.411A5.65,5.65,0,0,0,11.961-10.981Zm18.28,4.234,2.708-8.484H31.5L29.6-8.29h-.033L27.8-15.231H26.27L24.564-8.29h-.033l-1.92-6.941H21.068l2.724,8.484H25.3l1.707-6.744h.033l1.723,6.744ZM40.169-11.8H35.3a2.905,2.905,0,0,1,.213-.927A2.473,2.473,0,0,1,36-13.492a2.255,2.255,0,0,1,.747-.517,2.429,2.429,0,0,1,.976-.189,2.386,2.386,0,0,1,.96.189,2.415,2.415,0,0,1,.755.509,2.391,2.391,0,0,1,.509.763A2.854,2.854,0,0,1,40.169-11.8Zm1.346,2.363H40.136a1.983,1.983,0,0,1-.747,1.247,2.414,2.414,0,0,1-1.452.41,2.889,2.889,0,0,1-1.2-.23,2.348,2.348,0,0,1-.837-.615,2.4,2.4,0,0,1-.476-.886,3.367,3.367,0,0,1-.131-1.058h6.35a6.754,6.754,0,0,0-.139-1.625,4.7,4.7,0,0,0-.624-1.575,3.716,3.716,0,0,0-1.2-1.19,3.48,3.48,0,0,0-1.879-.468,3.858,3.858,0,0,0-1.6.328,3.76,3.76,0,0,0-1.264.919,4.236,4.236,0,0,0-.829,1.395,5.105,5.105,0,0,0-.3,1.772,6.8,6.8,0,0,0,.287,1.789,3.9,3.9,0,0,0,.763,1.411,3.478,3.478,0,0,0,1.255.919,4.358,4.358,0,0,0,1.764.328,3.851,3.851,0,0,0,2.4-.722A3.39,3.39,0,0,0,41.515-9.439Zm1.526-5.793v8.484h1.395v-3.774a5.8,5.8,0,0,1,.164-1.452,2.784,2.784,0,0,1,.525-1.075,2.251,2.251,0,0,1,.952-.673,3.945,3.945,0,0,1,1.428-.23v-1.477a3.135,3.135,0,0,0-1.871.459,3.779,3.779,0,0,0-1.247,1.526h-.033v-1.789ZM54.15-11.8H49.276a2.905,2.905,0,0,1,.213-.927,2.473,2.473,0,0,1,.492-.763,2.255,2.255,0,0,1,.747-.517A2.429,2.429,0,0,1,51.7-14.2a2.386,2.386,0,0,1,.96.189,2.415,2.415,0,0,1,.755.509,2.391,2.391,0,0,1,.509.763A2.854,2.854,0,0,1,54.15-11.8ZM55.5-9.439H54.117a1.983,1.983,0,0,1-.747,1.247,2.414,2.414,0,0,1-1.452.41,2.889,2.889,0,0,1-1.2-.23,2.348,2.348,0,0,1-.837-.615,2.4,2.4,0,0,1-.476-.886,3.367,3.367,0,0,1-.131-1.058h6.35a6.754,6.754,0,0,0-.139-1.625,4.7,4.7,0,0,0-.624-1.575,3.716,3.716,0,0,0-1.2-1.19,3.48,3.48,0,0,0-1.879-.468,3.858,3.858,0,0,0-1.6.328,3.76,3.76,0,0,0-1.264.919,4.236,4.236,0,0,0-.829,1.395,5.1,5.1,0,0,0-.3,1.772,6.8,6.8,0,0,0,.287,1.789,3.9,3.9,0,0,0,.763,1.411,3.478,3.478,0,0,0,1.255.919,4.358,4.358,0,0,0,1.764.328,3.851,3.851,0,0,0,2.4-.722A3.39,3.39,0,0,0,55.5-9.439Zm2.593-1.477a5.581,5.581,0,0,1,.131-1.214,3.212,3.212,0,0,1,.427-1.05,2.221,2.221,0,0,1,.788-.738,2.4,2.4,0,0,1,1.2-.279,2.589,2.589,0,0,1,1.231.271,2.389,2.389,0,0,1,.829.714,2.985,2.985,0,0,1,.468,1.026,4.889,4.889,0,0,1,.148,1.206,4.919,4.919,0,0,1-.139,1.165,3.053,3.053,0,0,1-.451,1.026,2.4,2.4,0,0,1-.8.73,2.4,2.4,0,0,1-1.2.279,2.491,2.491,0,0,1-1.173-.263,2.332,2.332,0,0,1-.82-.706,3.122,3.122,0,0,1-.476-1.009A4.338,4.338,0,0,1,58.088-10.916Zm6.564,4.168V-18.464H63.257V-14.1h-.033a2.247,2.247,0,0,0-.566-.632,3.216,3.216,0,0,0-.714-.41,3.583,3.583,0,0,0-.755-.222,4.132,4.132,0,0,0-.706-.066,3.861,3.861,0,0,0-1.7.353,3.487,3.487,0,0,0-1.214.952,4.018,4.018,0,0,0-.722,1.4,5.985,5.985,0,0,0-.238,1.707,5.8,5.8,0,0,0,.246,1.707,4.218,4.218,0,0,0,.73,1.411,3.529,3.529,0,0,0,1.214.968,3.827,3.827,0,0,0,1.715.361,4.135,4.135,0,0,0,1.625-.312A2.053,2.053,0,0,0,63.224-7.9h.033v1.149Zm6.761-11.716V-6.748h1.395V-7.88h.033a2.247,2.247,0,0,0,.566.632,2.982,2.982,0,0,0,.714.4,3.874,3.874,0,0,0,.763.213,4.193,4.193,0,0,0,.7.066,3.94,3.94,0,0,0,1.7-.345,3.4,3.4,0,0,0,1.214-.944,4.018,4.018,0,0,0,.722-1.4,5.985,5.985,0,0,0,.238-1.707,5.8,5.8,0,0,0-.246-1.707,4.312,4.312,0,0,0-.73-1.419,3.488,3.488,0,0,0-1.214-.976,3.827,3.827,0,0,0-1.715-.361,4.043,4.043,0,0,0-1.625.32,2.088,2.088,0,0,0-1.083,1.026h-.033v-4.381Zm6.564,7.4a5.581,5.581,0,0,1-.131,1.214,3.212,3.212,0,0,1-.427,1.05,2.243,2.243,0,0,1-.779.738,2.385,2.385,0,0,1-1.206.279A2.589,2.589,0,0,1,74.2-8.052a2.389,2.389,0,0,1-.829-.714,2.985,2.985,0,0,1-.468-1.026A4.889,4.889,0,0,1,72.758-11a4.919,4.919,0,0,1,.139-1.165,3.053,3.053,0,0,1,.451-1.026,2.4,2.4,0,0,1,.8-.73,2.4,2.4,0,0,1,1.2-.279,2.491,2.491,0,0,1,1.173.263,2.332,2.332,0,0,1,.82.706,3.122,3.122,0,0,1,.476,1.009A4.338,4.338,0,0,1,77.976-11.063Zm6.449,5.448a8.871,8.871,0,0,1-.484,1.05,2.871,2.871,0,0,1-.525.7,1.782,1.782,0,0,1-.64.394,2.462,2.462,0,0,1-.812.123,3.721,3.721,0,0,1-.492-.033A2.324,2.324,0,0,1,81-3.5v-1.28a2.342,2.342,0,0,0,.418.139,1.765,1.765,0,0,0,.4.057,1.2,1.2,0,0,0,.714-.205,1.255,1.255,0,0,0,.435-.583L83.539-6.8l-3.364-8.434h1.575L84.228-8.29h.033l2.379-6.941h1.477Z" transform="translate(17.85 28.4)"/></g></g></g><g transform="translate(0 0)"><g transform="translate(0 5.371)"><path d="M11.76,24.456A11.41,11.41,0,0,1,3.292,20.8,12.564,12.564,0,0,1,0,12.206,12.569,12.569,0,0,1,3.246,3.638,11.307,11.307,0,0,1,11.67,0a9.519,9.519,0,0,1,7.217,3V.759h8.264V23.7H18.887V21.148H18.8C17.478,23.219,14.846,24.456,11.76,24.456ZM13.849,7.064A5.023,5.023,0,0,0,8.537,12.25a4.95,4.95,0,0,0,5.312,5.141A4.95,4.95,0,0,0,19.16,12.25,5.023,5.023,0,0,0,13.849,7.064Z" transform="translate(27.277 11.038)" fill="#fff"/><path d="M0,33.931V.758H8.271v2.6H8.36A8.258,8.258,0,0,1,15.406,0,11.4,11.4,0,0,1,23.9,3.686a12.665,12.665,0,0,1,3.278,8.622,12.508,12.508,0,0,1-3.25,8.57,11.351,11.351,0,0,1-8.429,3.6,9.535,9.535,0,0,1-7.229-2.95V32.337L0,33.931ZM13.317,7.07A5.028,5.028,0,0,0,8,12.259a4.957,4.957,0,0,0,5.319,5.15,4.957,4.957,0,0,0,5.319-5.15A5.028,5.028,0,0,0,13.317,7.07Z" transform="translate(55.766 11.041)" fill="#fff"/><path d="M22.836,0l3.5,10.2.07.183a20.748,20.748,0,0,1,.988,3.43q.141-.731.364-1.532t.647-2.058L31.985,0h8.678L30.691,23.1H24.764L21.237,12.647q-.282-.891-.505-1.8t-.412-1.8A30.927,30.927,0,0,1,19.4,12.51l-.047.16L15.851,23.1H9.925L0,0H8.631l3.552,10.223q.4,1.121.635,1.955t.377,1.635a23.522,23.522,0,0,1,.917-3.179q.093-.274.141-.411L17.78,0h5.056" transform="translate(80.251 11.743)" fill="#fff"/><path d="M0,34.75V1.5L7.888,0V22.28l8.272-9.665H26.12L15.889,23.266,27.045,34.75H16.475L7.888,24.91v9.84H0" transform="translate(168.695 0)" fill="#fff"/><path d="M0,21.47l1.705-6.1a13.453,13.453,0,0,0,3.952,2.342A12.145,12.145,0,0,0,10,18.534a4.643,4.643,0,0,0,2.351-.482,1.539,1.539,0,0,0,.807-1.4q0-1.5-3.25-2.241-1.06-.246-1.705-.426A12.325,12.325,0,0,1,2.846,11.4,5.5,5.5,0,0,1,1.176,7.239,6.324,6.324,0,0,1,3.722,1.972,11,11,0,0,1,10.624,0a21.365,21.365,0,0,1,4.551.5,25.45,25.45,0,0,1,4.736,1.558l-1.706,5.49a14.24,14.24,0,0,0-3.319-1.636,10.6,10.6,0,0,0-3.364-.56A4.22,4.22,0,0,0,9.4,5.782a1.356,1.356,0,0,0-.714,1.233q0,1.211,3.227,2.04.737.2,1.106.291,4.264,1.188,5.935,2.79a5.728,5.728,0,0,1,1.671,4.337,6.782,6.782,0,0,1-2.743,5.614,11.478,11.478,0,0,1-7.259,2.14,22.565,22.565,0,0,1-5.693-.683A18.517,18.517,0,0,1,0,21.47" transform="translate(195.121 11.284)" fill="#fff"/><path d="M8.273,4.075h.091A8.13,8.13,0,0,1,15.909,0H17.5V7.834A6.8,6.8,0,0,0,14,7.074c-4.593,0-5.728,3-5.728,6.941v9.268H0V.313H8.273V4.075" transform="translate(150.08 11.469)" fill="#fff"/><path d="M17.392,29.929H13a.76.76,0,0,1-.485-.166.579.579,0,0,1-.227-.419l-.553-3.586a12.3,12.3,0,0,1-1.781-.721L7.163,27.123a.719.719,0,0,1-.495.176.687.687,0,0,1-.495-.214A25.873,25.873,0,0,1,2.91,23.81a.753.753,0,0,1,.019-.9c.2-.277.542-.713,1.009-1.3.483-.6.832-1.05,1.068-1.374a9.591,9.591,0,0,1-.811-1.929l-3.62-.526a.63.63,0,0,1-.416-.243A.729.729,0,0,1,0,17.089V12.762a.746.746,0,0,1,.159-.448.6.6,0,0,1,.376-.253l3.68-.546a9.5,9.5,0,0,1,.772-1.792C4.464,8.991,3.752,8.085,2.87,7.034a.732.732,0,0,1-.2-.468.82.82,0,0,1,.179-.449A19.622,19.622,0,0,1,4.8,4.023C5.751,3.1,6.38,2.631,6.668,2.631a.859.859,0,0,1,.515.194L9.913,4.91a11.536,11.536,0,0,1,1.8-.741A31.372,31.372,0,0,1,12.287.546.665.665,0,0,1,13,0h4.392a.755.755,0,0,1,.485.166.581.581,0,0,1,.229.419l.553,3.584a12.543,12.543,0,0,1,1.781.722L23.25,2.807a.641.641,0,0,1,.475-.176.775.775,0,0,1,.495.194,27.092,27.092,0,0,1,3.264,3.313.625.625,0,0,1,.139.429.745.745,0,0,1-.159.448c-.2.271-.525.695-1.008,1.3-.467.581-.827,1.043-1.069,1.373a11.784,11.784,0,0,1,.812,1.91l3.62.545a.625.625,0,0,1,.416.244.736.736,0,0,1,.157.458v4.325a.754.754,0,0,1-.157.449.606.606,0,0,1-.4.253l-3.66.545a12.628,12.628,0,0,1-.772,1.774c.465.654,1.177,1.559,2.117,2.688a.752.752,0,0,1,.2.488.648.648,0,0,1-.177.448,19.641,19.641,0,0,1-1.959,2.1c-.947.918-1.573,1.384-1.86,1.384a.978.978,0,0,1-.515-.176l-2.731-2.1a11.429,11.429,0,0,1-1.8.741,32.016,32.016,0,0,1-.573,3.624A.668.668,0,0,1,17.392,29.929ZM15.2,9.976a4.938,4.938,0,0,0-3.582,1.463,4.935,4.935,0,0,0,0,7.053,5.12,5.12,0,0,0,7.163,0,4.932,4.932,0,0,0,0-7.053A4.938,4.938,0,0,0,15.2,9.976Z" transform="translate(118.47 8.521)" fill="#fff"/><path d="M0,33.5,16.106,7.374H2.752V0H30.9L14.887,26.122H38.22L0,33.5" transform="translate(0 11.038)" fill="#fff"/></g><path d="M3.576-12.852v-4.3H6.628a2.867,2.867,0,0,1,1.945.55A2.034,2.034,0,0,1,9.188-15a2.06,2.06,0,0,1-.615,1.608,2.784,2.784,0,0,1-1.945.542ZM2.017-18.464V-6.748H3.576v-4.792H7.153a3.569,3.569,0,0,0,2.683-.9A3.478,3.478,0,0,0,10.747-15a3.45,3.45,0,0,0-.911-2.552,3.638,3.638,0,0,0-2.683-.911Zm11.421,7.483a4.221,4.221,0,0,1,.205-1.37,2.957,2.957,0,0,1,.566-1.009,2.411,2.411,0,0,1,.845-.624A2.515,2.515,0,0,1,16.08-14.2a2.515,2.515,0,0,1,1.026.213,2.411,2.411,0,0,1,.845.624,2.957,2.957,0,0,1,.566,1.009,4.221,4.221,0,0,1,.205,1.37,4.221,4.221,0,0,1-.205,1.37,2.867,2.867,0,0,1-.566,1,2.457,2.457,0,0,1-.845.615,2.515,2.515,0,0,1-1.026.213,2.515,2.515,0,0,1-1.026-.213,2.457,2.457,0,0,1-.845-.615,2.867,2.867,0,0,1-.566-1A4.221,4.221,0,0,1,13.438-10.981Zm-1.477,0a5.573,5.573,0,0,0,.263,1.739,3.97,3.97,0,0,0,.788,1.4,3.623,3.623,0,0,0,1.3.935,4.4,4.4,0,0,0,1.772.336A4.381,4.381,0,0,0,17.86-6.9a3.641,3.641,0,0,0,1.288-.935,3.97,3.97,0,0,0,.788-1.4,5.573,5.573,0,0,0,.263-1.739,5.65,5.65,0,0,0-.263-1.748,3.96,3.96,0,0,0-.788-1.411,3.729,3.729,0,0,0-1.288-.944,4.29,4.29,0,0,0-1.78-.345,4.3,4.3,0,0,0-1.772.345,3.71,3.71,0,0,0-1.3.944,3.96,3.96,0,0,0-.788,1.411A5.65,5.65,0,0,0,11.961-10.981Zm18.28,4.234,2.708-8.484H31.5L29.6-8.29h-.033L27.8-15.231H26.27L24.564-8.29h-.033l-1.92-6.941H21.068l2.724,8.484H25.3l1.707-6.744h.033l1.723,6.744ZM40.169-11.8H35.3a2.905,2.905,0,0,1,.213-.927A2.473,2.473,0,0,1,36-13.492a2.255,2.255,0,0,1,.747-.517,2.429,2.429,0,0,1,.976-.189,2.386,2.386,0,0,1,.96.189,2.415,2.415,0,0,1,.755.509,2.391,2.391,0,0,1,.509.763A2.854,2.854,0,0,1,40.169-11.8Zm1.346,2.363H40.136a1.983,1.983,0,0,1-.747,1.247,2.414,2.414,0,0,1-1.452.41,2.889,2.889,0,0,1-1.2-.23,2.348,2.348,0,0,1-.837-.615,2.4,2.4,0,0,1-.476-.886,3.367,3.367,0,0,1-.131-1.058h6.35a6.754,6.754,0,0,0-.139-1.625,4.7,4.7,0,0,0-.624-1.575,3.716,3.716,0,0,0-1.2-1.19,3.48,3.48,0,0,0-1.879-.468,3.858,3.858,0,0,0-1.6.328,3.76,3.76,0,0,0-1.264.919,4.236,4.236,0,0,0-.829,1.395,5.105,5.105,0,0,0-.3,1.772,6.8,6.8,0,0,0,.287,1.789,3.9,3.9,0,0,0,.763,1.411,3.478,3.478,0,0,0,1.255.919,4.358,4.358,0,0,0,1.764.328,3.851,3.851,0,0,0,2.4-.722A3.39,3.39,0,0,0,41.515-9.439Zm1.526-5.793v8.484h1.395v-3.774a5.8,5.8,0,0,1,.164-1.452,2.784,2.784,0,0,1,.525-1.075,2.251,2.251,0,0,1,.952-.673,3.945,3.945,0,0,1,1.428-.23v-1.477a3.135,3.135,0,0,0-1.871.459,3.779,3.779,0,0,0-1.247,1.526h-.033v-1.789ZM54.15-11.8H49.276a2.905,2.905,0,0,1,.213-.927,2.473,2.473,0,0,1,.492-.763,2.255,2.255,0,0,1,.747-.517A2.429,2.429,0,0,1,51.7-14.2a2.386,2.386,0,0,1,.96.189,2.415,2.415,0,0,1,.755.509,2.391,2.391,0,0,1,.509.763A2.854,2.854,0,0,1,54.15-11.8ZM55.5-9.439H54.117a1.983,1.983,0,0,1-.747,1.247,2.414,2.414,0,0,1-1.452.41,2.889,2.889,0,0,1-1.2-.23,2.348,2.348,0,0,1-.837-.615,2.4,2.4,0,0,1-.476-.886,3.367,3.367,0,0,1-.131-1.058h6.35a6.754,6.754,0,0,0-.139-1.625,4.7,4.7,0,0,0-.624-1.575,3.716,3.716,0,0,0-1.2-1.19,3.48,3.48,0,0,0-1.879-.468,3.858,3.858,0,0,0-1.6.328,3.76,3.76,0,0,0-1.264.919,4.236,4.236,0,0,0-.829,1.395,5.1,5.1,0,0,0-.3,1.772,6.8,6.8,0,0,0,.287,1.789,3.9,3.9,0,0,0,.763,1.411,3.478,3.478,0,0,0,1.255.919,4.358,4.358,0,0,0,1.764.328,3.851,3.851,0,0,0,2.4-.722A3.39,3.39,0,0,0,55.5-9.439Zm2.593-1.477a5.581,5.581,0,0,1,.131-1.214,3.212,3.212,0,0,1,.427-1.05,2.221,2.221,0,0,1,.788-.738,2.4,2.4,0,0,1,1.2-.279,2.589,2.589,0,0,1,1.231.271,2.389,2.389,0,0,1,.829.714,2.985,2.985,0,0,1,.468,1.026,4.889,4.889,0,0,1,.148,1.206,4.919,4.919,0,0,1-.139,1.165,3.053,3.053,0,0,1-.451,1.026,2.4,2.4,0,0,1-.8.73,2.4,2.4,0,0,1-1.2.279,2.491,2.491,0,0,1-1.173-.263,2.332,2.332,0,0,1-.82-.706,3.122,3.122,0,0,1-.476-1.009A4.338,4.338,0,0,1,58.088-10.916Zm6.564,4.168V-18.464H63.257V-14.1h-.033a2.247,2.247,0,0,0-.566-.632,3.216,3.216,0,0,0-.714-.41,3.583,3.583,0,0,0-.755-.222,4.132,4.132,0,0,0-.706-.066,3.861,3.861,0,0,0-1.7.353,3.487,3.487,0,0,0-1.214.952,4.018,4.018,0,0,0-.722,1.4,5.985,5.985,0,0,0-.238,1.707,5.8,5.8,0,0,0,.246,1.707,4.218,4.218,0,0,0,.73,1.411,3.529,3.529,0,0,0,1.214.968,3.827,3.827,0,0,0,1.715.361,4.135,4.135,0,0,0,1.625-.312A2.053,2.053,0,0,0,63.224-7.9h.033v1.149Zm6.761-11.716V-6.748h1.395V-7.88h.033a2.247,2.247,0,0,0,.566.632,2.982,2.982,0,0,0,.714.4,3.874,3.874,0,0,0,.763.213,4.193,4.193,0,0,0,.7.066,3.94,3.94,0,0,0,1.7-.345,3.4,3.4,0,0,0,1.214-.944,4.018,4.018,0,0,0,.722-1.4,5.985,5.985,0,0,0,.238-1.707,5.8,5.8,0,0,0-.246-1.707,4.312,4.312,0,0,0-.73-1.419,3.488,3.488,0,0,0-1.214-.976,3.827,3.827,0,0,0-1.715-.361,4.043,4.043,0,0,0-1.625.32,2.088,2.088,0,0,0-1.083,1.026h-.033v-4.381Zm6.564,7.4a5.581,5.581,0,0,1-.131,1.214,3.212,3.212,0,0,1-.427,1.05,2.243,2.243,0,0,1-.779.738,2.385,2.385,0,0,1-1.206.279A2.589,2.589,0,0,1,74.2-8.052a2.389,2.389,0,0,1-.829-.714,2.985,2.985,0,0,1-.468-1.026A4.889,4.889,0,0,1,72.758-11a4.919,4.919,0,0,1,.139-1.165,3.053,3.053,0,0,1,.451-1.026,2.4,2.4,0,0,1,.8-.73,2.4,2.4,0,0,1,1.2-.279,2.491,2.491,0,0,1,1.173.263,2.332,2.332,0,0,1,.82.706,3.122,3.122,0,0,1,.476,1.009A4.338,4.338,0,0,1,77.976-11.063Zm6.449,5.448a8.871,8.871,0,0,1-.484,1.05,2.871,2.871,0,0,1-.525.7,1.782,1.782,0,0,1-.64.394,2.462,2.462,0,0,1-.812.123,3.721,3.721,0,0,1-.492-.033A2.324,2.324,0,0,1,81-3.5v-1.28a2.342,2.342,0,0,0,.418.139,1.765,1.765,0,0,0,.4.057,1.2,1.2,0,0,0,.714-.205,1.255,1.255,0,0,0,.435-.583L83.539-6.8l-3.364-8.434h1.575L84.228-8.29h.033l2.379-6.941h1.477Z" transform="translate(0.722 18.464)" fill="#fff"/></g></g></g></a>'),
                    (e.style.position = "absolute"),
                    (e.style.bottom = "20px"),
                    (e.style.width = "250px"),
                    (e.style.left = "50%"),
                    (e.style.marginLeft = "-125px"),
                    (e.style.zIndex = Number.MAX_SAFE_INTEGER.toString()),
                    (e.style.opacity = "0"),
                    (e.style.transition = "opacity 0.5s"),
                    document.body.append(e),
                    setTimeout(function () {
                      e.style.opacity = "1";
                    }, 500),
                    setTimeout(function () {
                      e.style.opacity = "0";
                    }, 3e3),
                    setTimeout(function () {
                      e.remove();
                    }, 4e3);
                }
              }
            }),
            (Ft = Object.assign(Object.assign({}, i.impl), {
              loaded: () => t,
              camera_default_device_id: (e) =>
                e ? Ve.USER_DEFAULT_DEVICE_ID : Ve.DEFAULT_DEVICE_ID,
              camera_source_create: (e, t) =>
                (function (e, t) {
                  let r = Ye++;
                  return (
                    Re.preferMediaStreamTrackProcessorCamera &&
                    "MediaStreamTrackProcessor" in window &&
                    "MediaStreamTrackGenerator" in window
                      ? qe(r, new We(r, e, t))
                      : Re.preferImageBitmapCamera &&
                        "undefined" != typeof OffscreenCanvas
                      ? qe(r, new Ge(r, e, t))
                      : qe(r, new Ve(r, e, t)),
                    re("camera_source_t initialized"),
                    r
                  );
                })(e, t),
              camera_source_destroy: (e) => {
                var t;
                return null === (t = je(e)) || void 0 === t
                  ? void 0
                  : t.destroy();
              },
              camera_source_pause: (e) => {
                var t;
                return null === (t = je(e)) || void 0 === t
                  ? void 0
                  : t.pause();
              },
              camera_source_start: (e) => {
                var t;
                return null === (t = je(e)) || void 0 === t
                  ? void 0
                  : t.start();
              },
              camera_count: () => 2,
              camera_id: (e) =>
                0 === e ? Ve.DEFAULT_DEVICE_ID : Ve.USER_DEFAULT_DEVICE_ID,
              camera_name: (e) =>
                0 === e ? "Rear-facing Camera" : "User-facing Camera",
              camera_user_facing: (e) => 0 !== e,
              pipeline_create: () => rt.create(i.impl, C),
              pipeline_frame_update: (e) => {
                var t;
                return null === (t = rt.get(e)) || void 0 === t
                  ? void 0
                  : t.frameUpdate(i);
              },
              pipeline_camera_frame_draw_gl: (e, t, r, i) => {
                var a;
                null === (a = rt.get(e)) ||
                  void 0 === a ||
                  a.cameraFrameDrawGL(t, r, i);
              },
              draw_plane: (e, t, r, i, a) => {
                !(function (e, t, r, i, a) {
                  let n = b(e),
                    s = (function (e) {
                      if (h) return h;
                      if (((h = e.createBuffer()), !h))
                        throw new Error("Unable to create buffer object");
                      return (
                        e.bindBuffer(e.ARRAY_BUFFER, h),
                        e.bufferData(
                          e.ARRAY_BUFFER,
                          new Float32Array([
                            -0.5, 0.125, 0, -0.5, -0.125, 0, 0.5, 0.125, 0, 0.5,
                            -0.125, 0,
                          ]),
                          e.STATIC_DRAW
                        ),
                        e.bindBuffer(e.ARRAY_BUFFER, null),
                        h
                      );
                    })(e),
                    o = g(e);
                  e.disable(e.DEPTH_TEST),
                    e.useProgram(n.prog),
                    e.uniformMatrix4fv(n.unif_proj, !1, t),
                    e.uniformMatrix4fv(n.unif_camera, !1, r),
                    e.uniformMatrix4fv(n.unif_matrix, !1, i),
                    e.bindBuffer(e.ARRAY_BUFFER, s),
                    e.activeTexture(e.TEXTURE0),
                    e.bindTexture(
                      e.TEXTURE_2D,
                      (function (e, t) {
                        if (m[t]) return m[t];
                        let r = e.createTexture();
                        if (!r) throw new Error("Unable to create texture");
                        (m[t] = r), e.bindTexture(e.TEXTURE_2D, r);
                        const i = e.RGBA,
                          a = e.RGBA,
                          n = e.UNSIGNED_BYTE,
                          s = new Uint8Array([0, 0, 255, 255]);
                        e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL, !0),
                          e.texImage2D(e.TEXTURE_2D, 0, i, 1, 1, 0, a, n, s);
                        const o = new Image();
                        return (
                          (o.onload = function () {
                            e.bindTexture(e.TEXTURE_2D, r),
                              e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL, !0),
                              e.texImage2D(e.TEXTURE_2D, 0, i, a, n, o),
                              e.texParameteri(
                                e.TEXTURE_2D,
                                e.TEXTURE_WRAP_S,
                                e.CLAMP_TO_EDGE
                              ),
                              e.texParameteri(
                                e.TEXTURE_2D,
                                e.TEXTURE_WRAP_T,
                                e.CLAMP_TO_EDGE
                              ),
                              e.texParameteri(
                                e.TEXTURE_2D,
                                e.TEXTURE_MIN_FILTER,
                                e.LINEAR
                              );
                          }),
                          (o.src = t),
                          r
                        );
                      })(e, a)
                    ),
                    e.uniform1i(n.unif_skinSampler, 0),
                    e.vertexAttribPointer(
                      n.attr_position,
                      3,
                      e.FLOAT,
                      !1,
                      12,
                      0
                    ),
                    e.enableVertexAttribArray(n.attr_position),
                    e.bindBuffer(e.ARRAY_BUFFER, o),
                    e.vertexAttribPointer(
                      n.attr_textureCoord,
                      2,
                      e.FLOAT,
                      !1,
                      8,
                      0
                    ),
                    e.enableVertexAttribArray(n.attr_textureCoord),
                    e.drawArrays(e.TRIANGLE_STRIP, 0, 4),
                    e.disableVertexAttribArray(n.attr_position),
                    e.disableVertexAttribArray(n.attr_textureCoord),
                    e.bindBuffer(e.ARRAY_BUFFER, null);
                })(e, t, r, i, a);
              },
              pipeline_draw_face: (e, t, r, i, a) => {
                var n;
                let s = oe(a);
                if (!s)
                  return (
                    ae(
                      "attempting to call draw_face on a destroyed zappar_face_mesh_t"
                    ),
                    new Uint16Array()
                  );
                null === (n = rt.get(e)) ||
                  void 0 === n ||
                  n.drawFace(t, r, i, s);
              },
              pipeline_draw_face_project: (e, t, r, i, a, n, s) => {
                var o;
                null === (o = rt.get(e)) ||
                  void 0 === o ||
                  o.drawFaceProject(t, r, i, a, n, s);
              },
              pipeline_draw_image_target_preview: (e, t, r, i, a, n) => {
                var s;
                let o = Rt.get(a);
                o
                  ? null === (s = rt.get(e)) ||
                    void 0 === s ||
                    s.drawImageTargetPreview(t, r, i, n, o)
                  : ae("image tracker not found");
              },
              projection_matrix_from_camera_model: M,
              projection_matrix_from_camera_model_ext: M,
              pipeline_process_gl: (e) => {
                var t;
                return null === (t = rt.get(e)) || void 0 === t
                  ? void 0
                  : t.processGL();
              },
              pipeline_gl_context_set: (e, t, r) => {
                var i;
                return null === (i = rt.get(e)) || void 0 === i
                  ? void 0
                  : i.glContextSet(t, r);
              },
              pipeline_gl_context_lost: (e) => {
                var t;
                return null === (t = rt.get(e)) || void 0 === t
                  ? void 0
                  : t.glContextLost();
              },
              pipeline_camera_frame_upload_gl: (e) => {
                var t;
                return null === (t = rt.get(e)) || void 0 === t
                  ? void 0
                  : t.uploadGL();
              },
              pipeline_camera_frame_texture_gl: (e) => {
                var t;
                return null === (t = rt.get(e)) || void 0 === t
                  ? void 0
                  : t.cameraFrameTexture();
              },
              pipeline_camera_frame_texture_matrix: (e, t, r, i) => {
                var a;
                return (
                  (null === (a = rt.get(e)) || void 0 === a
                    ? void 0
                    : a.cameraFrameTextureMatrix(t, r, i)) || v()
                );
              },
              pipeline_camera_frame_user_facing: (e) => {
                var t;
                return (
                  (null === (t = rt.get(e)) || void 0 === t
                    ? void 0
                    : t.cameraFrameUserFacing()) || !1
                );
              },
              pipeline_camera_pose_default: () => v(),
              pipeline_camera_pose_with_attitude: (e, t) => {
                var r;
                return (
                  (null === (r = rt.get(e)) || void 0 === r
                    ? void 0
                    : r.cameraPoseWithAttitude(t)) || v()
                );
              },
              pipeline_camera_pose_with_origin: (e, t) => {
                let r = v();
                return y(r, t), r;
              },
              pipeline_sequence_record_clear: (e) => {
                var t;
                return null === (t = rt.get(e)) || void 0 === t
                  ? void 0
                  : t.sequenceRecordClear();
              },
              pipeline_sequence_record_start: (e, t) => {
                var r;
                return null === (r = rt.get(e)) || void 0 === r
                  ? void 0
                  : r.sequenceRecordStart(t);
              },
              pipeline_sequence_record_stop: (e) => {
                var t;
                return null === (t = rt.get(e)) || void 0 === t
                  ? void 0
                  : t.sequenceRecordStop();
              },
              pipeline_sequence_record_device_attitude_matrices_set: (e, t) => {
                var r;
                return null === (r = rt.get(e)) || void 0 === r
                  ? void 0
                  : r.sequenceRecordDeviceAttitudeMatrices(t);
              },
              pipeline_sequence_record_data: (e) => {
                var t;
                return (
                  (null === (t = rt.get(e)) || void 0 === t
                    ? void 0
                    : t.sequenceRecordData()) || new Uint8Array(0)
                );
              },
              pipeline_sequence_record_data_size: (e) => {
                var t;
                return (
                  (null === (t = rt.get(e)) || void 0 === t
                    ? void 0
                    : t.sequenceRecordData().byteLength) || 0
                );
              },
              instant_world_tracker_anchor_pose_camera_relative: (e, t) => {
                let r = it(
                  void 0,
                  i.impl.instant_world_tracker_anchor_pose_raw(e)
                );
                if (t) {
                  let e = v();
                  T(e, [-1, 1, 1]), E(r, e, r), E(r, r, e);
                }
                return r;
              },
              instant_world_tracker_anchor_pose: (e, t, r) => {
                let a = it(
                  void 0,
                  i.impl.instant_world_tracker_anchor_pose_raw(e)
                );
                if (r) {
                  let e = v();
                  T(e, [-1, 1, 1]), E(a, e, a), E(a, a, e);
                }
                return E(a, t, a), a;
              },
              instant_world_tracker_anchor_pose_set_from_camera_offset: (
                e,
                t,
                r,
                a,
                n
              ) => {
                let s = (I(!1) * Math.PI) / 180,
                  o = v();
                R(o, -s, [0, 0, 1]);
                let _ = x();
                L(_, [t, r, a], o),
                  i.impl.instant_world_tracker_anchor_pose_set_from_camera_offset_raw(
                    e,
                    _[0],
                    _[1],
                    _[2],
                    n
                  );
              },
              image_tracker_create: (e) => Rt.create(e, i.impl),
              image_tracker_destroy: (e) => {
                var t;
                return null === (t = Rt.get(e)) || void 0 === t
                  ? void 0
                  : t.destroy();
              },
              image_tracker_target_type: (e, t) => {
                let r = Rt.get(e);
                return r
                  ? r.getTargetInfo(t).type
                  : (ae(
                      "attempting to call image_tracker_target_type on a destroyed zappar_image_tracker_t"
                    ),
                    o.IMAGE_TRACKER_TYPE_PLANAR);
              },
              image_tracker_target_count: (e) => {
                let t = Rt.get(e);
                return t
                  ? t.targetCount()
                  : (ae(
                      "attempting to call image_tracker_target_count on a destroyed zappar_image_tracker_t"
                    ),
                    0);
              },
              image_tracker_target_load_from_memory: (e, t) => {
                let r = Rt.get(e);
                if (!r)
                  return (
                    ae(
                      "attempting to call image_tracker_target_load_from_memory on a destroyed zappar_image_tracker_t"
                    ),
                    0
                  );
                r.loadFromMemory(t);
              },
              image_tracker_target_preview_compressed: (e, t) => {
                var r;
                let i = Rt.get(e);
                return i
                  ? (null === (r = i.getTargetInfo(t).preview) || void 0 === r
                      ? void 0
                      : r.compressed) || new Uint8Array(0)
                  : (ae(
                      "attempting to call image_tracker_target_preview_compressed on a destroyed zappar_image_tracker_t"
                    ),
                    new Uint8Array(0));
              },
              image_tracker_target_preview_compressed_mimetype: (e, t) => {
                var r;
                let i = Rt.get(e);
                return i
                  ? (null === (r = i.getTargetInfo(t).preview) || void 0 === r
                      ? void 0
                      : r.mimeType) || ""
                  : (ae(
                      "attempting to call image_tracker_target_preview_compressed_mimetype on a destroyed zappar_image_tracker_t"
                    ),
                    "");
              },
              image_tracker_target_preview_compressed_size: (e, t) => {
                var r, i;
                let a = Rt.get(e);
                return a
                  ? (null ===
                      (i =
                        null === (r = a.getTargetInfo(t).preview) ||
                        void 0 === r
                          ? void 0
                          : r.compressed) || void 0 === i
                      ? void 0
                      : i.byteLength) || 0
                  : (ae(
                      "attempting to call image_tracker_target_preview_compressed_size on a destroyed zappar_image_tracker_t"
                    ),
                    0);
              },
              image_tracker_target_physical_scale_factor: (e, t) => {
                let r = Rt.get(e);
                return r
                  ? r.getTargetInfo(t).physicalScaleFactor
                  : (ae(
                      "attempting to call image_tracker_target_physical_scale_factor on a destroyed zappar_image_tracker_t"
                    ),
                    0);
              },
              image_tracker_target_radius_top: (e, t) => {
                let r = Rt.get(e);
                return r
                  ? r.getTargetInfo(t).topRadius
                  : (ae(
                      "attempting to call image_tracker_target_radius_top on a destroyed zappar_image_tracker_t"
                    ),
                    0);
              },
              image_tracker_target_radius_bottom: (e, t) => {
                let r = Rt.get(e);
                return r
                  ? r.getTargetInfo(t).bottomRadius
                  : (ae(
                      "attempting to call image_tracker_target_radius_bottom on a destroyed zappar_image_tracker_t"
                    ),
                    0);
              },
              image_tracker_target_side_length: (e, t) => {
                let r = Rt.get(e);
                return r
                  ? r.getTargetInfo(t).sideLength
                  : (ae(
                      "attempting to call image_tracker_target_side_length on a destroyed zappar_image_tracker_t"
                    ),
                    0);
              },
              image_tracker_target_image: (e, t) => {
                let r = Rt.get(e);
                return r
                  ? r.getDecodedPreview(t)
                  : (ae(
                      "attempting to call image_tracker_target_image on a destroyed zappar_image_tracker_t"
                    ),
                    new Image());
              },
              image_tracker_anchor_pose_camera_relative: (e, t, r) => {
                let a = it(void 0, i.impl.image_tracker_anchor_pose_raw(e, t));
                if (r) {
                  let e = v();
                  T(e, [-1, 1, 1]), E(a, e, a), E(a, a, e);
                }
                return a;
              },
              image_tracker_anchor_pose: (e, t, r, a) => {
                let n = it(void 0, i.impl.image_tracker_anchor_pose_raw(e, t));
                if (a) {
                  let e = v();
                  T(e, [-1, 1, 1]), E(n, e, n), E(n, n, e);
                }
                return E(n, r, n), n;
              },
              image_tracker_target_preview_mesh_indices: (e, t) => {
                let r = Rt.get(e);
                return r
                  ? r.getPreviewMesh(t).indices
                  : (ae(
                      "attempting to call image_tracker_target_preview_mesh_indices on a destroyed zappar_image_tracker_t"
                    ),
                    new Uint16Array());
              },
              image_tracker_target_preview_mesh_vertices: (e, t) => {
                let r = Rt.get(e);
                return r
                  ? r.getPreviewMesh(t).vertices
                  : (ae(
                      "attempting to call image_tracker_target_preview_mesh_vertices on a destroyed zappar_image_tracker_t"
                    ),
                    new Float32Array());
              },
              image_tracker_target_preview_mesh_uvs: (e, t) => {
                let r = Rt.get(e);
                return r
                  ? r.getPreviewMesh(t).uvs
                  : (ae(
                      "attempting to call image_tracker_target_preview_mesh_uvs on a destroyed zappar_image_tracker_t"
                    ),
                    new Float32Array());
              },
              image_tracker_target_preview_mesh_normals: (e, t) => {
                let r = Rt.get(e);
                return r
                  ? r.getPreviewMesh(t).normals
                  : (ae(
                      "attempting to call image_tracker_target_preview_mesh_normals on a destroyed zappar_image_tracker_t"
                    ),
                    new Float32Array());
              },
              image_tracker_target_preview_mesh_indices_size: (e, t) => {
                let r = Rt.get(e);
                return r
                  ? r.getPreviewMesh(t).indices.length
                  : (ae(
                      "attempting to call image_tracker_target_preview_mesh_indices_size on a destroyed zappar_image_tracker_t"
                    ),
                    0);
              },
              image_tracker_target_preview_mesh_vertices_size: (e, t) => {
                let r = Rt.get(e);
                return r
                  ? r.getPreviewMesh(t).vertices.length
                  : (ae(
                      "attempting to call image_tracker_target_preview_mesh_vertices_size on a destroyed zappar_image_tracker_t"
                    ),
                    0);
              },
              image_tracker_target_preview_mesh_uvs_size: (e, t) => {
                let r = Rt.get(e);
                return r
                  ? r.getPreviewMesh(t).uvs.length
                  : (ae(
                      "attempting to call image_tracker_target_preview_mesh_uvs_size on a destroyed zappar_image_tracker_t"
                    ),
                    0);
              },
              image_tracker_target_preview_mesh_normals_size: (e, t) => {
                let r = Rt.get(e);
                return r
                  ? r.getPreviewMesh(t).normals.length
                  : (ae(
                      "attempting to call image_tracker_target_preview_mesh_normals_size on a destroyed zappar_image_tracker_t"
                    ),
                    0);
              },
              face_tracker_anchor_pose_camera_relative: (e, t, r) => {
                let a = it(void 0, i.impl.face_tracker_anchor_pose_raw(e, t));
                if (r) {
                  let e = v();
                  T(e, [-1, 1, 1]), E(a, e, a), E(a, a, e);
                }
                return a;
              },
              face_tracker_anchor_pose: (e, t, r, a) => {
                let n = it(void 0, i.impl.face_tracker_anchor_pose_raw(e, t));
                if (a) {
                  let e = v();
                  T(e, [-1, 1, 1]), E(n, e, n), E(n, n, e);
                }
                return E(n, r, n), n;
              },
              face_tracker_model_load_default: (e) =>
                kt(this, void 0, void 0, function* () {
                  yield (function (e) {
                    return kt(this, void 0, void 0, function* () {
                      let t = new URL(r(367), r.b),
                        i = yield fetch(t.toString()),
                        a = yield i.arrayBuffer();
                      null == Ft ||
                        Ft.face_tracker_model_load_from_memory(e, a);
                    });
                  })(e);
                }),
              face_mesh_create: () =>
                (function () {
                  let e = ne++;
                  return se.set(e, new _e()), re("face_mesh_t initialized"), e;
                })(),
              face_mesh_destroy: (e) => {
                !(function (e) {
                  se.delete(e);
                })(e);
              },
              face_mesh_indices: (e) => {
                let t = oe(e);
                return t
                  ? t.getIndices()
                  : (ae(
                      "attempting to call face_mesh_indices on a destroyed zappar_face_mesh_t"
                    ),
                    new Uint16Array());
              },
              face_mesh_indices_size: (e) => {
                let t = oe(e);
                return t
                  ? t.getIndices().length
                  : (ae(
                      "attempting to call face_mesh_indices_size on a destroyed zappar_face_mesh_t"
                    ),
                    0);
              },
              face_mesh_uvs: (e) => {
                let t = oe(e);
                return t
                  ? t.getUVs()
                  : (ae(
                      "attempting to call face_mesh_uvs on a destroyed zappar_face_mesh_t"
                    ),
                    new Float32Array());
              },
              face_mesh_uvs_size: (e) => {
                let t = oe(e);
                return t
                  ? t.getUVs().length
                  : (ae(
                      "attempting to call face_mesh_uvs_size on a destroyed zappar_face_mesh_t"
                    ),
                    0);
              },
              face_mesh_vertices: (e) => {
                let t = oe(e);
                return t
                  ? t.getVertices()
                  : (ae(
                      "attempting to call face_mesh_vertices on a destroyed zappar_face_mesh_t"
                    ),
                    new Float32Array());
              },
              face_mesh_vertices_size: (e) => {
                let t = oe(e);
                return t
                  ? t.getVertices().length
                  : (ae(
                      "attempting to call face_mesh_vertices_size on a destroyed zappar_face_mesh_t"
                    ),
                    0);
              },
              face_mesh_normals: (e) => {
                let t = oe(e);
                return t
                  ? t.getNormals()
                  : (ae(
                      "attempting to call face_mesh_normals on a destroyed zappar_face_mesh_t"
                    ),
                    new Float32Array());
              },
              face_mesh_normals_size: (e) => {
                let t = oe(e);
                return t
                  ? t.getNormals().length
                  : (ae(
                      "attempting to call face_mesh_normals_size on a destroyed zappar_face_mesh_t"
                    ),
                    0);
              },
              face_mesh_load_from_memory: (e, t, r, i, a, n) => {
                let s = oe(e);
                s
                  ? s.loadFromMemory(t, r, i, a, n)
                  : ae(
                      "attempting to call face_mesh_load_from_memory on a destroyed zappar_face_mesh_t"
                    );
              },
              face_mesh_update: (e, t, r, i) => {
                let a = oe(e);
                a
                  ? a.update(t, r, i)
                  : ae(
                      "attempting to call face_mesh_update on a destroyed zappar_face_mesh_t"
                    );
              },
              face_mesh_load_default: (e) =>
                kt(this, void 0, void 0, function* () {
                  let t = oe(e);
                  if (!t)
                    return void ae(
                      "attempting to call face_mesh_load_default on a destroyed zappar_face_mesh_t"
                    );
                  let i = new URL(r(698), r.b),
                    a = yield fetch(i.toString());
                  t.loadFromMemory(yield a.arrayBuffer(), !1, !1, !1, !1);
                }),
              face_mesh_load_default_face: (e, t, i, a) =>
                kt(this, void 0, void 0, function* () {
                  let n = oe(e);
                  if (!n)
                    return void ae(
                      "attempting to call face_mesh_load_default_face on a destroyed zappar_face_mesh_t"
                    );
                  let s = new URL(r(698), r.b),
                    o = yield fetch(s.toString());
                  n.loadFromMemory(yield o.arrayBuffer(), t, i, a, !1);
                }),
              face_mesh_load_default_full_head_simplified: (e, t, i, a, n) =>
                kt(this, void 0, void 0, function* () {
                  let s = oe(e);
                  if (!s)
                    return void ae(
                      "attempting to call face_mesh_load_default_full_head_simplified on a destroyed zappar_face_mesh_t"
                    );
                  let o = new URL(r(825), r.b),
                    _ = yield fetch(o.toString());
                  s.loadFromMemory(yield _.arrayBuffer(), t, i, a, n);
                }),
              face_mesh_loaded_version: (e) => {
                let t = oe(e);
                return t
                  ? t.getModelVersion()
                  : (ae(
                      "attempting to call face_mesh_load_default on a destroyed zappar_face_mesh_t"
                    ),
                    -1);
              },
              face_landmark_create: (e) =>
                (function (e) {
                  let t = nt++;
                  return (
                    st.set(t, new _t(e)), re("face_landmark_t initialized"), t
                  );
                })(e),
              face_landmark_destroy: (e) => {
                !(function (e) {
                  st.delete(e);
                })(e);
              },
              face_landmark_update: (e, t, r, i) => {
                let a = ot(e);
                a
                  ? a.update(t, r, i)
                  : ae(
                      "attempting to call face_landmark_update on a destroyed zappar_face_landmark_t"
                    );
              },
              face_landmark_anchor_pose: (e) => {
                let t = ot(e);
                return t
                  ? t.anchor_pose
                  : (ae(
                      "attempting to call face_landmark_anchor_pose on a destroyed zappar_face_landmark_t"
                    ),
                    v());
              },
              html_element_source_create: (e, t) =>
                Be.createVideoElementSource(e, t),
              html_element_source_start: (e) => {
                var t;
                return null === (t = Be.getVideoElementSource(e)) ||
                  void 0 === t
                  ? void 0
                  : t.start();
              },
              html_element_source_pause: (e) => {
                var t;
                return null === (t = Be.getVideoElementSource(e)) ||
                  void 0 === t
                  ? void 0
                  : t.pause();
              },
              html_element_source_destroy: (e) => {
                var t;
                return null === (t = Be.getVideoElementSource(e)) ||
                  void 0 === t
                  ? void 0
                  : t.destroy();
              },
              sequence_source_create: (e) => dt.create(e),
              sequence_source_load_from_memory: (e, t) => {
                var r;
                return null === (r = dt.get(e)) || void 0 === r
                  ? void 0
                  : r.loadFromMemory(t);
              },
              sequence_source_pause: (e) => {
                var t;
                return null === (t = dt.get(e)) || void 0 === t
                  ? void 0
                  : t.pause();
              },
              sequence_source_start: (e) => {
                var t;
                return null === (t = dt.get(e)) || void 0 === t
                  ? void 0
                  : t.start();
              },
              sequence_source_max_playback_fps_set: (e, t) => {
                var r;
                return null === (r = dt.get(e)) || void 0 === r
                  ? void 0
                  : r.maxPlaybackFpsSet(t);
              },
              sequence_source_time_set: (e, t) => {
                var r;
                return null === (r = dt.get(e)) || void 0 === r
                  ? void 0
                  : r.setTime(t);
              },
              sequence_source_destroy: (e) => {
                var t;
                return null === (t = dt.get(e)) || void 0 === t
                  ? void 0
                  : t.destroy();
              },
              permission_granted_all: Z,
              permission_granted_camera: W,
              permission_granted_motion: Y,
              permission_denied_any: j,
              permission_denied_camera: X,
              permission_denied_motion: q,
              permission_request_motion: $,
              permission_request_camera: Q,
              permission_request_all: K,
              permission_request_ui: J,
              permission_request_ui_promise: J,
              permission_denied_ui: ee,
              browser_incompatible: ct.incompatible,
              browser_incompatible_ui: ct.incompatible_ui,
              log_level_set: (e) => {
                !(function (e) {
                  te = e;
                })(e),
                  i.impl.log_level_set(e);
              },
            })),
            Ft
          );
        }
        function Mt(e) {
          return (function (e) {
            return console.log("Zappar CV v2.0.0"), Lt(e);
          })(
            Object.assign(Object.assign({}, e), {
              worker: (null == e ? void 0 : e.worker) || new (r(276).Z)(),
            })
          );
        }
      })(),
      i
    );
  })();
});
