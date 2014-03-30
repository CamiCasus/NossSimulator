$(document).ready(function() {
    $(function(e) {

        function l() {
            var e = $(this).attr("id");
            var t = e[e.length - 1];
            c(t);
            setTimeout(function() {
                p(t);
                g(t);
                y(t);
            }, 1200);
        }

        function c(e) {
            var t = e;
            var n = "#wrapperLoading" + t;
            $("#fullBlock, " + n).css("display", "block");
            $(n + " .loading").stop().animate({ width: "160px" }, 1e3, "linear", function() {
                setTimeout(function() {
                    $("#fullBlock, " + n).css("display", "none");
                    $(n + " .loading").css("width", "0px");
                }, 200);
            });
        }

        function p(e) {
            var r = e;
            if (r == 1) {
                var i = t;
                var f = o;
                var l = effettiArma;
            } else if (r == 2) {
                var i = n;
                var f = u;
                var l = effettiArma;
            } else {
                var i = s;
                var f = a;
                var l = effettiArmatura;
            }
            var c = dbOpzioni[i][f];
            var h = c.length;
            var p = h;
            if (r == 1) {
                arrayArma1 = new Array;
            } else if (r == 2) {
                arrayArma2 = new Array;
            } else {
                arrayArmatura = new Array;
            }
            var g = new Array;
            g.push(0);
            for (d = 0; d < p; d++) {
                var y = c[d];
                var b = l[y].length - 1;
                if (d > 0) {
                    var w = v(b, g, y, l);
                    var E = l[y][w][2];
                    g.push(E);
                } else {
                    var w = $.rand(b) + 1;
                    var E = l[y][w][2];
                    g.push(E);
                }
                var S = l[y][w][0];
                var x = l[y][w][1];
                if (S == 999 && x == 999) {
                    var T = 999;
                } else {
                    var T = m(S, x);
                }
                var N = y;
                var C = [w];
                var k = T;
                var L = [];
                L.push(N);
                L.push(C);
                L.push(k);
                if (r == 1) {
                    arrayArma1.push(L);
                } else if (r == 2) {
                    arrayArma2.push(L);
                } else {
                    arrayArmatura.push(L);
                }
            }
        }

        function v(e, t, n, r) {
            var s = e;
            var o = t;
            var u = n;
            var a = r;
            var l = 1;
            for (i = 2; i > l; i++) {
                var c = $.rand(s) + 1;
                var h = a[u][c][2];
                var p = o.length;
                var d = 0;
                for (f = 0; f < p; f++) {
                    if (h == o[f]) {
                        d = 1;
                    }
                }
                if (d == 0) {
                    i = 0;
                }
            }
            return c;
        }

        function m(e, t) {
            var n = e;
            var r = t;
            var s = n + r;
            var o = r - n;
            var u = (s + 1) % 2;
            var a = o + 1;
            var f = Math.ceil(a / 2);
            var l = new Array;
            l.push(0);
            var c = new Array;
            c.push(0);
            for (h = n; h <= r; h++) {
                c.push(h);
            }
            var p = f;
            for (i = 1; i <= a; i++) {
                if (i <= f) {
                    for (w = 1; w <= i; w++) {
                        l.push(c[i]);
                    }
                } else {
                    p--;
                    if (u == 0) {
                        for (q = 0; q <= p; q++) {
                            l.push(c[i]);
                        }
                    } else {
                        for (q = 1; q <= p; q++) {
                            l.push(c[i]);
                        }
                    }
                }
            }
            var d = l.length;
            var v = $.rand(d - 2) + 1;
            var m = l[v];
            return m;
        }

        function g(e) {
            var i = e;
            if (i == 1) {
                var f = arrayArma1;
                var l = t;
                var c = o;
            } else if (i == 2) {
                var f = arrayArma2;
                var l = n;
                var c = u;
            } else {
                var f = arrayArmatura;
                var l = s;
                var c = a;
            }
            if (l == 2 || l == 3) {
                var h = dbProb[l][c];
                var p = f.length;
                var d = 0;
                for (r = 0; r < p; r++) {
                    if (h[r] == 0) {
                        var v = $.rand(99) + 1;
                        if (v <= 50) {
                            var m = r - d;
                            f.splice(m, 1);
                            d++;
                        }
                    }
                }
            }
        }

        function y(e) {
            var t = e;
            if (t == 1) {
                var n = arrayArma1;
                var r = dbNameArma;
                var s = "arrArmaPercentuale";
                var o = $("#wrapperItemLeft .wrapperRuna .effettoRuna");
            } else if (t == 2) {
                var n = arrayArma2;
                var r = dbNameArma;
                var o = $("#wrapperItemMiddle .wrapperRuna .effettoRuna");
            } else {
                var n = arrayArmatura;
                var r = dbNameArmatura;
                var o = $("#wrapperItemRight .wrapperRuna .effettoRuna");
            }
            var u = n.length;
            var a = u;
            var f = new Array;
            for (i = 0; i < a; i++) {
                var l = n[i][0];
                var c = n[i][1];
                var h = n[i][2];
                if (h == 999) {
                    h = "";
                }
                var p = r[l][c];
                if (t == 1 || t == 2) {
                    var d = arrArmaPercentuale[l][c];
                } else {
                    var d = arrArmaturaPercentuale[l][c];
                }
                if (l == 1) {
                    var v = 'class="colorEffetto1"';
                } else if (l == 2) {
                    var v = 'class="colorEffetto2"';
                } else if (l == 3) {
                    var v = 'class="colorEffetto3"';
                } else if (l == 4) {
                    var v = 'class="colorEffetto4"';
                } else if (l == 5 || l == 6 || l == 7 || l == 8) {
                    var v = 'class="colorEffetto5"';
                } else if (l == 9 || l == 10 || l == 11) {
                    var v = 'class="colorEffetto6"';
                }
                var m = "<p " + v + ">" + p + h + d + "</p>";
                f.push(m);
                o.html(f);
            }
        }

        function b(e, t, n, r) {
            var i = e;
            var s = t;
            var o = n;
            var u = r;
            var a = dbRaro[o];
            var f = dbTipo[s];
            if (i == 1) {
                var l = $("#wrapperItemLeft .wrapperRuna");
                var c = "(Arma)";
                var h = s;
            } else if (i == 2) {
                var l = $("#wrapperItemMiddle .wrapperRuna");
                var c = "(Arma)";
                var h = s;
            } else {
                var l = $("#wrapperItemRight .wrapperRuna");
                var c = "(Vestito)";
                var h = parseInt(s) + 5;
            }
            var p = "imgRune/" + h + ".png";
            var d = $.rand(15) + 70;
            var v = dbCosto[s];
            var m = '<p class="titolo raroColor' + o + '">' + a + " " + f + " " + c + "</p>";
            var g = '<img src="' + p + '" alt="" title="" />';
            var d = '<p class="lv">necessario Livello: ' + d + "Lv</p>";
            var y = '<p class="rar">Livello raro: ' + o + "</p>";
            var v = '<p class="costo">Costo: ' + v + "</p>";
            var b = '<p class="effettoRuna">' + u + "</p>";
            var w = m + g + d + y + "<br />" + v + "<br />" + b;
            l.html(w);
        }

        jQuery.extend({ rand: function(e) { return Math.floor(e * (Math.random() % 1)); } });
        var t = 0;
        var n = 0;
        var s = 0;
        var o = 0;
        var u = 0;
        var a = 0;
        $("#wrapperItemLeft .postWrapperType a img").click(function() {
            $("#wrapperItemLeft .postWrapperType a img").css("margin-left", "0px");
            $(this).css("margin-left", "-30px");
            $("#wrapperItemLeft .rarita").css("display", "block");
            var e = $(this).attr("src");
            var n = e.substr(12, 1);
            t = n;
            var r = "Opzione non identificata";
            b(1, t, o, r);
        });
        $("#wrapperItemMiddle .postWrapperType a img").click(function() {
            $("#wrapperItemMiddle .postWrapperType a img").css("margin-left", "0px");
            $(this).css("margin-left", "-30px");
            $("#wrapperItemMiddle .rarita").css("display", "block");
            var e = $(this).attr("src");
            var t = e.substr(12, 1);
            n = t;
            var r = "Opzione non rivelata";
            b(2, n, u, r);
        });
        $("#wrapperItemRight .postWrapperType a img").click(function() {
            $("#wrapperItemRight .postWrapperType a img").css("margin-left", "0px");
            $(this).css("margin-left", "-30px");
            $("#wrapperItemRight .rarita").css("display", "block");
            var e = $(this).attr("src");
            var t = e.substr(16, 1);
            s = t;
            var n = "Opzione non rivelata";
            b(3, s, a, n);
        });
        $("#wrapperItemLeft .wrapperRar").click(function() {
            $("#wrapperItemLeft .wrapperRar").css("background-color", "rgba(0, 0, 0, 0.7)");
            $(this).css("background-color", "red");
            $("#wrapperItemLeft .wrapperUp, #wrapperItemLeft .wrapperRuna").css("display", "block");
            var e = $(this).attr("id");
            var n = e[e.length - 1];
            o = n;
            var r = "Opzione non rivelata";
            b(1, t, o, r);
        });
        $("#wrapperItemMiddle .wrapperRar").click(function() {
            $("#wrapperItemMiddle .wrapperRar").css("background-color", "rgba(0, 0, 0, 0.7)");
            $(this).css("background-color", "red");
            $("#wrapperItemMiddle .wrapperUp, #wrapperItemMiddle .wrapperRuna").css("display", "block");
            var e = $(this).attr("id");
            var t = e[e.length - 1];
            u = t;
            var r = "Opzione non rivelata";
            b(2, n, u, r);
        });
        $("#wrapperItemRight .wrapperRar").click(function() {
            $("#wrapperItemRight .wrapperRar").css("background-color", "rgba(0, 0, 0, 0.7)");
            $(this).css("background-color", "orange");
            $("#wrapperItemRight .wrapperUp, #wrapperItemRight .wrapperRuna").css("display", "block");
            var e = $(this).attr("id");
            var t = e[e.length - 1];
            a = t;
            var n = "Opzione non rivelata";
            b(3, s, a, n);
        });
        $(".wrapperUp").click(l);
    });
})