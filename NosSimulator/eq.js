/*
	Author : S.Monte aka Oreò
	 Contact: nossimulator@gmail.com
 	  Licenza Creative Commons Attribuzione - Non commerciale - Non opere derivate 3.0 Unported.
*/
$(document).ready(function() {
    $(function(e) {

        function t() {
            e("#arrowSx").mouseenter(function() { e("#fake" + varClasse).animate({ marginLeft: "0px" }, arrayTempBanner[varClasse], "linear"); });
            e("#arrowSx").mouseleave(function() { e("#fake" + varClasse).stop(); });
            e("#arrowDx").mouseenter(function() { e("#fake" + varClasse).animate({ marginLeft: "-" + arrayBanner[varClasse] + "px" }, arrayTempBanner[varClasse], "linear"); });
            e("#arrowDx").mouseleave(function() { e("#fake" + varClasse).stop(); });
        }

        function n() {
            var t = e(this).attr("id");
            var t = t.substr(6, 1);
            varClasse = t;
            e(".fake").css("display", "none");
            e("#fake" + t).css("display", "block");
            var n = e(".arrow").css("display");
            if (n == "none") {
                e(".arrow").css("display", "block");
            } else {
            }
        }

        function r() {
            varID = e(this).attr("id");
            varRar = 0;
            varUp = 0;
            varController = 1;
            c();
            h(varID);
            p(varID, varRar, varUp, varController);
            d(varID, varUp, varRar);
            varFallimentiUp = 0;
            varBloccoUp = 0;
            varSoldiUp = 0;
            varGemma1Up = 0;
            varGemma2Up = 0;
            varPolveriUp = 0;
            varFallimentiRar = 0;
            varRaroRar = 0;
            varSoldiRar = 0, varPolveriRar = 0;
            v(varID, varUp, varRar);
            m(varID, varUp, varRar, varFallimentiUp, varBloccoUp, varSoldiUp, varGemma1Up, varGemma2Up, varPolveriUp, varFallimentiRar, varRaroRar, varSoldiRar, varPolveriRar);
            L();
        }

        function i() {
            varUp = e(this).attr("id");
            var t = varUp.length - 2;
            varUp = varUp.substr(2, t);
            varUp = parseInt(varUp);
            varController = 0;
            p(varID, varRar, varUp, varController);
            d(varID, varUp, varRar);
            varFallimentiUp = 0;
            varBloccoUp = 0;
            varSoldiUp = 0;
            varGemma1Up = 0;
            varGemma2Up = 0;
            varPolveriUp = 0;
            varFallimentiRar = 0;
            varRaroRar = 0;
            varSoldiRar = 0;
            varPolveriRar = 0;
            m(varID, varUp, varRar, varFallimentiUp, varBloccoUp, varSoldiUp, varGemma1Up, varGemma2Up, varPolveriUp, varFallimentiRar, varRaroRar, varSoldiRar, varPolveriRar);
        }

        function s() {
            varRar = e(this).attr("id");
            varRar = varRar.substr(3, 1);
            varController = 1;
            p(varID, varRar, varUp, varController);
            d(varID, varUp, varRar);
            varFallimentiUp = 0;
            varBloccoUp = 0;
            varSoldiUp = 0;
            varGemma1Up = 0;
            varGemma2Up = 0;
            varPolveriUp = 0;
            varFallimentiRar = 0;
            varRaroRar = 0;
            varSoldiRar = 0;
            varPolveriRar = 0;
            m(varID, varUp, varRar, varFallimentiUp, varBloccoUp, varSoldiUp, varGemma1Up, varGemma2Up, varPolveriUp, varFallimentiRar, varRaroRar, varSoldiRar, varPolveriRar);
            L();
        }

        function ejecutarOptimizacion() {
            varOggUp = { up: varUp, fail: varFallimentiUp, bloc: varBloccoUp, soldi: varSoldiUp, gemma1: varGemma1Up, gemma2: varGemma2Up, polveri: varPolveriUp, controls: 0 };
            E();
            ejecutarCalculoOptimizacion(varUp);
            varUp = varOggUp.up;
            varFallimentiUp = varOggUp.fail;
            varBloccoUp = varOggUp.bloc;
            varSoldiUp = varOggUp.soldi;
            varGemma1Up = varOggUp.gemma1;
            varGemma2Up = varOggUp.gemma2;
            varPolveriUp = varOggUp.polveri;
            varControls = varOggUp.controls;
            setTimeout(function() {
                S(varID, varUp, varRar, varControls);
                varController = 0;
                p(varID, varRar, varUp, varController);
                d(varID, varUp, varRar);
                m(varID, varUp, varRar, varFallimentiUp, varBloccoUp, varSoldiUp, varGemma1Up, varGemma2Up, varPolveriUp, varFallimentiRar, varRaroRar, varSoldiRar, varPolveriRar);
            }, 1700);
        }

        function u() {
            varOggRar = { rar: varRar, fail: varFallimentiRar, raro: varRaroRar, soldi: varSoldiRar, polveri: varPolveriRar, control: 0 };
            E();
            w(varRar);
            varRar = varOggRar.rar;
            varFallimentiRar = varOggRar.fail;
            varRaroRar = varOggRar.raro;
            varSoldiRar = varOggRar.soldi;
            varPolveriRar = varOggRar.polveri;
            varControl = varOggRar.control;
            setTimeout(function() {
                x(varID, varUp, varRar, varControl);
                if (varControl == 0) {
                    varController = 1;
                } else {
                    varController = 0;
                }
                p(varID, varRar, varUp, varController);
                d(varID, varUp, varRar);
                m(varID, varUp, varRar, varFallimentiUp, varBloccoUp, varSoldiUp, varGemma1Up, varGemma2Up, varPolveriUp, varFallimentiRar, varRaroRar, varSoldiRar, varPolveriRar);
                C(varRar, varControl);
            }, 1700);
        }

        function f() {
            var t = e("#wrapperBottonUp").css("display");
            var n = e("#wrapperBottonRar").css("display");
            if (t == "none" && n == "none") {
                e("#wrapperBottonUp").css("display", "block");
                e("#bottonUp img").attr("src", "imgEquip/equipHover.jpg");
                e("#bottomMiddleUp").css("display", "block");
            } else if (t == "none" && n == "block") {
                e("#wrapperBottonRar").css("display", "none");
                e("#wrapperBottonUp").css("display", "block");
                e("#bottomMiddleUp").css("display", "block");
                e("#bottonRar img").attr("src", "imgEquip/raro.jpg");
                e("#bottonUp img").attr("src", "imgEquip/equipHover.jpg");
                e("#bottomMiddleRar").css("display", "none");
            } else {
            }
        }

        function l() {
            var t = e("#wrapperBottonRar").css("display");
            var n = e("#wrapperBottonUp").css("display");
            if (t == "none" && n == "none") {
                e("#wrapperBottonRar").css("display", "block");
                e("#bottonRar img").attr("src", "imgEquip/raroHover.jpg");
                e("#bottomMiddleRar").css("display", "block");
            } else if (t == "none" && n == "block") {
                e("#wrapperBottonUp").css("display", "none");
                e("#wrapperBottonRar").css("display", "block");
                e("#bottomMiddleRar").css("display", "block");
                e("#bottonUp img").attr("src", "imgEquip/equip.jpg");
                e("#bottonRar img").attr("src", "imgEquip/raroHover.jpg");
                e("#bottomMiddleUp").css("display", "none");
            } else {
            }
        }

        function c() {
            var t = e("#wrapperLeft").css("display");
            if (t == "none") {
                e("#wrapperLeft, #wrapperMiddle, #wrapperRight").css("display", "block");
            }
        }

        function h(t) {
            t = t;
            if (varClasse >= 1 && varClasse <= 3) {
                if (t == 36) {
                    l();
                    e("#leftBottomMiddle #bottonUp").css("visibility", "hidden");
                } else {
                    e("#leftBottomMiddle #bottonUp").css("visibility", "visible");
                }
            } else if (varClasse >= 4 && varClasse <= 6) {
                if (t == 20) {
                    l();
                    e("#leftBottomMiddle #bottonUp").css("visibility", "hidden");
                } else {
                    e("#leftBottomMiddle #bottonUp").css("visibility", "visible");
                }
            } else {
                if (t == 29) {
                    l();
                    e("#leftBottomMiddle #bottonUp").css("visibility", "hidden");
                } else {
                    e("#leftBottomMiddle #bottonUp").css("visibility", "visible");
                }
            }
        }

        function p(t, n, r, i) {
            var s = "imgEquip/" + arrayClasse[varClasse] + "/" + t + ".jpg";
            var o = arrayName[varClasse][t];
            e("#wrapperImgSmall img").attr({ src: s, alt: o, title: o });
            var u = arrayName[varClasse][t];
            var a = arrayRar[n];
            var f = arrayUp[r];
            var l = a + " " + u + " " + f;
            var c = Math.floor((varClasse - 1) / 3) + 1;
            var h = arrayLv[c][t];
            var p = h;
            var h = "Lv." + h;
            e("#wrapperLeft #name").text(l);
            e("#wrapperLeft #lv").text(h);
            var d = arrayColorRar[n];
            e("#wrapperLeft #name").css("color", d);
            var v = arrayFattoreForza[n];
            var m = p / 5;
            var g = m + 1;
            var y = g * v;
            var b = Math.floor(y);
            var w = b;
            if (varClasse >= 1 && varClasse <= 6) {
                var E = 0;
                var S = 0;
                var x = 0;
                for (z = 1; z <= w; z++) {
                    var x = e.rand(2) + 1;
                    if (x == 1) {
                        var E = E + 1;
                    } else {
                        var S = S + 1;
                    }
                }
                if (n == 8) {
                    var E = -10;
                } else if (n == 9) {
                    var E = -20;
                }
                var T = arrayDannoMin[varClasse][t];
                var N = arrayDannoAggiuntivo[varClasse][t];
                var C = arrayHitRate[varClasse][t];
                if (i == 1) {
                    varAggiuntaDannoCopia = E;
                    varAggiuntaHitCopia = S;
                    var T = T + E;
                    var C = C + S;
                    var k = k + S;
                } else {
                    var T = T + varAggiuntaDannoCopia;
                    var C = C + varAggiuntaHitCopia;
                    var k = k + varAggiuntaHitCopia;
                }
                var L = T + N;
                var A = arrayScrittaUp[r];
                var O = arrayProbCritico[varClasse][t];
                var M = arrayDannoCritico[varClasse][t];
                var k = 70;
                var _ = varClasse;
                var D = Math.floor((_ - 1) / 3) + 1;
                var P = arrayPrezzo[D][t];
                var H = arrayEffetto[varClasse][t];
                var B = arrayDescrizione[varClasse][t];
                if (H == "") {
                    var j = "";
                } else {
                    var j = "<br />";
                }
                if (varClasse == 1 || varClasse == 5) {
                    var F = e.rand(101);
                    var F = '<p class="dannoColor">Munizioni: ' + F + "/100</p>";
                } else {
                    var F = "";
                }
                if (varClasse == "3") {
                    e("#wrapperLeft #wrapperDamage").html(
                         '<p class="rangeDannoColor">Danno: ' + T + " - " + L + " " + A +
                         '</p><p class="dannoColor">Concentrazione: ' + k +
                         '</p><br /><p class="prezzoColor">' + P +
                         '</p><br /><p class="effettoColor">' + H + "</p>" + j + "<p>" + B + "</p>");
                } else {
                    e("#wrapperLeft #wrapperDamage").html(
                        '<p class="rangeDannoColor">Danno: ' + T + " - " + L + " " + A +
                        '</p><p class="dannoColor">Hit Rate: ' + C +
                        '</p><p class="dannoColor">' + O + "% Cambio di " + M + "% critico</p>" + F +
                        '<br /><p class="prezzoColor">' + P +
                        '</p><br /><p class="effettoColor">' + H + "</p>" + j + "<p>" + B + "</p>");
                }
                if (r > 0) {
                    e("#wrapperLeft  #wrapperDamage .rangeDannoColor").css("color", "#cf3");
                } else {
                    e("#wrapperLeft  #wrapperDamage .rangeDannoColor").css("color", "#fe9");
                }
            } else {
                var I = 0;
                var q = 0;
                var R = 0;
                var U = 0;
                for (z = 1; z <= w; z++) {
                    var x = e.rand(4) + 1;
                    if (x == 1) {
                        var I = I + 1;
                    } else if (x == 2) {
                        var q = q + 1;
                    } else if (x == 3) {
                        var R = R + 1;
                    } else {
                        var U = U + 1;
                    }
                }
                if (n == 8) {
                    var I = -10;
                    var q = -10;
                    var R = -10;
                } else if (n == 9) {
                    var I = -20;
                    var q = -20;
                    var R = -20;
                }
                var W = arrayDifesaCorpo[varClasse][t];
                var X = arrayDifesaDistanza[varClasse][t];
                var V = arrayDifesaMagia[varClasse][t];
                var J = arrayElusione[varClasse][t];
                if (i == 1) {
                    K = W + I;
                    Q = X + q;
                    G = V + R;
                    Y = J + U;
                    W = W + I;
                    X = X + q;
                    V = V + R;
                    J = J + U;
                } else {
                    var W = K + I;
                    var X = Q + q;
                    var V = G + R;
                    var J = Y + U;
                }
                var A = arrayScrittaUp[r];
                var _ = varClasse;
                var D = Math.floor((_ - 1) / 3) + 1;
                var P = arrayPrezzo[D][t];
                var H = arrayEffetto[varClasse][t];
                var B = arrayDescrizione[varClasse][t];
                if (H == "") {
                    var j = "";
                } else {
                    var j = "<br />";
                }
                e("#wrapperLeft #wrapperDamage").html(
                        '<p class="rangeArmorColor">Lotta corpo a corpo Difesa: ' + W + "<br />" + A +
                        '</p><p class="rangeArmorColor">Attacco a Distanza Difesa: ' + X + "<br />" + A +
                        '</p><p class="rangeArmorColor">Magia Difesa: ' + V + " " + A +
                        "</p><p>Elusione: " + J +
                        '</p><br /><p class="prezzoColor">' + P +
                        '</p><br /><p class="effettoColor">' + H + "</p>" + j + "<p>" + B + "</p>");
                if (r > 0) {
                    e("#wrapperLeft  #wrapperDamage .rangeArmorColor").css("color", "#c93");
                } else {
                    e("#wrapperLeft  #wrapperDamage .rangeArmorColor").css("color", "#fe9");
                }
            }
        }

        function d(t, n, r) {
            var i = arrayClasse[varClasse];
            var s = "imgEquip/" + i + "/" + t + ".jpg";
            var o = arrayName[varClasse][t];
            e("#wrapperImgMalcomUp img").attr({ src: s, alt: o, title: o });
            e("#wrapperMateImgRar img").attr({ src: s, alt: o, title: o });
            var u = arrayProbSuccessoText[n];
            var a = arrayProbBloccatoText[n];
            var f = arrayProbFallitoText[n];
            e("#wrapperProbMalcomUp #probSuccesso").text(u);
            e("#wrapperProbMalcomUp #probBloccato").text(a);
            e("#wrapperProbMalcomUp #probFallito").text(f);
            if (n >= 5 && n < 10) {
                e("#wrapperMateDestro img").attr({ src: "imgEquip/gemma2.jpg", alt: "Gemma dell'Anima Intera", title: "Gemma dell'Anima Intera" });
            } else if (n == 10) {
                e("#wrapperMateDestro img").attr({ src: "imgEquip/gemma3.jpg", alt: "Gemma di Arale", title: "Gemma di Arale" });
            } else {
                e("#wrapperMateDestro img").attr({ src: "imgEquip/gemma1.jpg", alt: "Gemma dell'Anima", title: "Gemma dell'Anima" });
            }
            if (r == 7) {
                e("#wrapperMateRar #wrapperMateOroRar p").text("-1");
                e("#wrapperMateRar #wrapperMatePolvRar img").attr({ src: "imgEquip/polvere.jpg", alt: "Zafferano", title: "Zafferano" });
                e("#wrapperMateRar #wrapperMatePolvRar p").text("Quattordici");
            } else {
                e("#wrapperMateRar #wrapperMateOroRar img").attr({ src: "imgEquip/oro.jpg", alt: "Oro", title: "Oro" });
                e("#wrapperMateRar #wrapperMateOroRar p").text("500");
                e("#wrapperMateRar #wrapperMatePolvRar img").attr({ src: "imgEquip/polvere.jpg", alt: "Polvere", title: "Polvere del Sottosuolo" });
                e("#wrapperMateRar #wrapperMatePolvRar p").text("500");
            }
            if (n >= 0 && n < 10) {
                var l = arrayQuantSoldi[n];
                var c = arrayQuantPolvere[n];
                var h = arrayQuantGemma[n];
                var p = e.number(l, 0);
                var d = e.number(c, 0);
                var v = e.number(h, 0);
            } else {
                var p = "Infiniti";
                var d = "Troppe";
                var v = "WTF?";
            }
            e("#wrapperMateSinistro p").text(p);
            e("#wrapperMateCentrale p").text(d);
            e("#wrapperMateDestro p").text(v);
            if (n == 10) {
                e(".wrapperTheBotton #theBottonUp").css("display", "none");
            } else {
                e(".wrapperTheBotton #theBottonUp").css("display", "block");
            }
            if (r == 7) {
                e(".wrapperTheBotton #theBottonRar").css("display", "none");
            } else {
                e(".wrapperTheBotton #theBottonRar").css("display", "block");
            }
        }

        function v(t, n, r) {
            var i = arrayName[varClasse][t];
            var s = arrayRar[r];
            var o = arrayUp[n];
            var u = s + " " + i + " " + o;
            e("#wrapperRight #sezione1").html('<p>Has iniciado con un:</p><p class="titoloStatistiche"><b>' + u + "</b></p>");
        }

        function m(t, n, r, i, s, o, u, a, f, l, c, h, p) {
            var d = arrayName[varClasse][t];
            var v = arrayRar[r];
            var m = arrayUp[n];
            var g = v + " " + d + " " + m;
            var y = i + s;
            var b = y;
            if (c > 0) {
                var c = c - 1;
            } else {
            }
            var w = Math.ceil(l / 3);
            var E = e.number(y, 0);
            var S = e.number(s, 0);
            var x = e.number(i, 0);
            var T = e.number(o, 0);
            var N = e.number(u, 0);
            var C = e.number(a, 0);
            var k = e.number(f, 0);
            var L = e.number(b, 0);
            var A = e.number(l, 0);
            var O = e.number(c, 0);
            var M = e.number(h, 0);
            var _ = e.number(p, 0);
            var D = e.number(w, 0);
            e("#wrapperRight #sezione2").html(
                '<p>Has obtenido un:</p><p class="titoloStatistiche"><b>' + g +
                    "</b></p><br /><p>Optimización:</p><br /><p>Total de Fallos: " + E +
                    "</p><p>Nivel Fijado: " + S +
                    "</p><p>Fallo: " + x +
                    "</p><p>Oro usado: " + T +
                    "</p><p>Gema del alma usada: " + N +
                    "</p><p>Gemal completa usada: " + C +
                    "</p><p>Polvo de cella usado: " + k +
                    "</p><p>Scorrevoli usati: " + L +
                    "</p><br /><p>Rareza:</p><br /><p>Fallo: " + A +
                    "</p><p>Altre rarità ottenute: " + O +
                    "</p><p>Oro usado: " + M +
                    "</p><p>Polvo de cella usado: " + _ +
                    "</p><p>Amuleto usado: " + D + "</p>");
        }

        function ejecutarCalculoOptimizacion(t) {
            var n = e.rand(100) + 1;
            var r = arrayQuantSoldi[t];
            var i = arrayQuantGemma[t];
            var s = arrayQuantPolvere[t];
            varOggUp.soldi = varOggUp.soldi + r;
            if (t >= 0 && t <= 4) {
                varOggUp.gemma1 = varOggUp.gemma1 + i;
            } else {
                varOggUp.gemma2 = varOggUp.gemma2 + i;
            }
            varOggUp.polveri = varOggUp.polveri + s;
            var o = t;
            var u = a[o];
            var f = e.lj.ll(u);
            var l = b[o];
            var c = e.lj.ll(l);
            if (n <= f) {
                varOggUp.up = varOggUp.up + 1;
                varOggUp.controls = 0;
            } else if (n <= c) {
                varOggUp.bloc = varOggUp.bloc + 1;
                varOggUp.controls = 1;
            } else {
                varOggUp.fail = varOggUp.fail + 1;
                varOggUp.controls = 2;
            }
        }

        function w(t) {
            t = parseInt(t);
            var n = e.rand(100) + 1;
            var r = 500;
            var i = 5;
            varOggRar.soldi = varOggRar.soldi + r;
            varOggRar.polveri = varOggRar.polveri + i;
            var s = t;
            var o = y[s];
            var u = e.lj.ll(o);
            var a = k[0];
            var f = k[1];
            var l = k[2];
            var c = k[3];
            var h = k[4];
            var p = k[5];
            var d = k[6];
            var v = k[7];
            var m = k[8];
            var g = k[9];
            var b = k[10];
            var w = e.lj.ll(a);
            var E = e.lj.ll(f);
            var S = e.lj.ll(l);
            var x = e.lj.ll(c);
            var T = e.lj.ll(h);
            var N = e.lj.ll(p);
            var C = e.lj.ll(d);
            var L = e.lj.ll(v);
            var A = e.lj.ll(m);
            var O = e.lj.ll(g);
            var M = e.lj.ll(b);
            if (n <= u) {
                var n = e.rand(100) + 1;
                varOggRar.raro = varOggRar.raro + 1;
                varOggRar.control = 0;
                if (n <= w) {
                    varOggRar.rar = 1;
                } else if (n >= E && n <= S) {
                    varOggRar.rar = 2;
                } else if (n >= x && n <= T) {
                    varOggRar.rar = 3;
                } else if (n >= N && n <= C) {
                    varOggRar.rar = 4;
                } else if (n >= L && n <= A) {
                    varOggRar.rar = 5;
                } else if (n >= O && n <= M) {
                    varOggRar.rar = 6;
                } else {
                    varOggRar.rar = 7;
                }
            } else {
                varOggRar.control = 1;
                varOggRar.fail = varOggRar.fail + 1;
            }
        }

        function E() {
            e("#fullBlock, #wrapperLoading").css("display", "block");
            e("#loading").stop().animate({ width: "270px" }, 1500, "linear", function() {
                setTimeout(function() {
                    e("#fullBlock, #wrapperLoading").css("display", "none");
                    e("#loading").css("width", "0px");
                }, 200);
            });
        }

        function S(t, n, r, i) {
            var s = arrayName[varClasse][t];
            var o = arrayRar[r];
            var u = arrayUp[n];
            var a = o + " " + s + " " + u;
            if (i == 0) {
                e("#banner").css({ display: "block", backgroundColor: "rgba(20, 150, 20, 0.9)" });
                var f = "Felicitaciones!! Has obtenido un " + a;
            } else {
                e("#banner").css({ display: "block", backgroundColor: "rgba(0, 0, 0, 0.9)" });
                if (i == 1) {
                    var f = "Nivel Fijado!!";
                } else {
                    var f = "Intento Fallido!!";
                }
            }
            e("#banner p").text(f);
            setTimeout(function() { e("#banner").css("display", "none"); }, 1700);
        }

        function x(t, n, r, i) {
            var s = arrayName[varClasse][t];
            var o = arrayRar[r];
            var u = arrayUp[n];
            var a = o + " " + s + " " + u;
            if (i == 0) {
                e("#banner").css({ display: "block", backgroundColor: "rgba(20, 150, 20, 0.9)" });
                var f = "Congratulazioni!! Hai ottenuto un " + a;
            } else {
                e("#banner").css({ display: "block", backgroundColor: "rgba(0, 0, 0, 0.9)" });
                var f = "L'Oggetto è stato Distrutto!!";
            }
            e("#banner p").text(f);
            setTimeout(function() { e("#banner").css("display", "none"); }, 1700);
        }

        function T() { e("#fullBlock, #wrapperListRar").css("display", "block"); }

        function N() { e("#fullBlock, #wrapperListRar").css("display", "none"); }

        function C(t, n) {
            var r = e("#listRar").html();
            var i = ' class="colorList' + t + '"';
            if (n == 0) {
                var s = "<p" + i + ">Gioco Riuscito! Livello Raro: " + t + "</p>";
            } else {
                var s = "<p>L'oggetto è stato distrutto</p>";
            }
            e("#listRar").html(r + s);
        }

        function L() { e("#listRar").html(""); }

        jQuery.extend({ rand: function(e) { return Math.floor(e * (Math.random() % 1)); } });
        varID = 0;
        varRar = 0;
        varUp = 0;
        e("#fake1 div a img").attr("id", function(e) { return e + 1; });
        e("#fake2 div a img").attr("id", function(e) { return e + 1; });
        e("#fake3 div a img").attr("id", function(e) { return e + 1; });
        e("#fake4 div a img").attr("id", function(e) { return e + 1; });
        e("#fake5 div a img").attr("id", function(e) { return e + 1; });
        e("#fake6 div a img").attr("id", function(e) { return e + 1; });
        e("#fake7 div a img").attr("id", function(e) { return e + 1; });
        e("#fake8 div a img").attr("id", function(e) { return e + 1; });
        e("#fake9 div a img").attr("id", function(e) { return e + 1; });
        e(".botton").click(n);
        e(".arrow").hover(t());
        e(".fake div a img").click(r);
        e("#bottonUp").click(f);
        e("#bottonRar").click(l);
        e("#wrapperBottonUp div").click(i);
        e("#wrapperBottonRar div").click(s);
        e("#theBottonUp").click(ejecutarOptimizacion);
        e("#theBottonRar").click(u);
        e("#bottonListRar").click(T);
        e("#closeListRar a").click(N);
    });
})