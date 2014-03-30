$(document).ready(function() {
    $(function(e) {

        function t() {
            e("#wrapperIconeSp div img").mouseenter(function() { e(this).animate({ height: "40px", width: "40px" }, 300); });
            e("#wrapperIconeSp div img").mouseleave(function() { e(this).animate({ height: "36px", width: "36px" }, 300); });
        }

        function n() {
            varSP = e(this).attr("id");
            varUP = "0";
            varCrash = 0;
            varFail = 0;
            varGold = 0;
            varMoon = 0;
            varWing = 0;
            varBlue = 0;
            varRed = 0;
            varControl = 0;
            varOldUP = 0;
            v();
            s(varSP, varUP);
            o(varSP);
            u(varSP);
            f(varSP, varUP);
            l(varSP, varUP, varCrash, varFail, varGold, varMoon, varWing, varBlue, varRed);
        }

        function r() {
            varUP = e(this).attr("id");
            var t = varUP.length - 2;
            varUP = varUP.substr(2, t);
            varCrash = 0;
            varFail = 0;
            varGold = 0;
            varMoon = 0;
            varWing = 0;
            varBlue = 0;
            varRed = 0;
            varControl = 0;
            varOldUP = varUP;
            s(varSP, varUP);
            f(varSP, varUP);
            l(varSP, varUP, varCrash, varFail, varGold, varMoon, varWing, varBlue, varRed);
        }

        function ejecutarOptimizacion(d, seDebeDetenerAlExito) {
            varOggGet = { up: varUP, crash: varCrash, fail: varFail, gold: varGold, moon: varMoon, wing: varWing, blue: varBlue, red: varRed, control: varControl };
            h();
            ejecutarCalculoOptimizacion(varUP);
            varUP = varOggGet.up;
            varCrash = varOggGet.crash;
            varFail = varOggGet.fail;
            varGold = varOggGet.gold;
            varMoon = varOggGet.moon;
            varWing = varOggGet.wing;
            varBlue = varOggGet.blue;
            varRed = varOggGet.red;
            varControl = varOggGet.control;
            
            setTimeout(function() {
                p(varSP, varUP, varControl);
                s(varSP, varUP);
                f(varSP, varUP);
                l(varSP, varUP, varCrash, varFail, varGold, varMoon, varWing, varBlue, varRed);

                console.log(seDebeDetenerAlExito);
                
                if ((varControl == 0 && seDebeDetenerAlExito) || varUP == 15) {
                    return d.reject();
                } else {
                    return d.resolve();
                }

            }, 1700);

            return d.promise();
        }

        function iniciarEjecucion() {
            var cantidadIntentos = document.getElementById("txtCantidadIntentos").value;

            if (cantidadIntentos == null || cantidadIntentos == '')
                cantidadIntentos = 1;
            
            var seDebeDetenerAlExito = document.getElementById("cbDetenerse").checked;
            
            iniciarIntentos(cantidadIntentos, seDebeDetenerAlExito);
        }

        function iniciarIntentos(cantidadIntentoActual, seDebeDetenerAlExito) {
            var cola = jQuery.Deferred();
            if (cantidadIntentoActual > 0) {
                ejecutarOptimizacion(cola, seDebeDetenerAlExito).done(function () {
                    setTimeout(function () {
                        iniciarIntentos(cantidadIntentoActual - 1, seDebeDetenerAlExito);
                    }, 1000);
                });
            }
        }

        function s(t, n) {
            var r = parseInt(t);
            var i = arrayNome[r];
            var s = arrayElemento[r];
            var o = arrayDescrizione[r];
            var u = "<h1>" + i + "<span> +" + n + "</span></h1><h2>" + s + "</h2><br /><p>" + o + "</p>";
            e("#wrapperDescrizione #descrizione ").html(u);
        }

        function o(t) {
            stringFire = arrayResFire[t];
            stringWater = arrayResWater[t];
            stringLight = arrayResLight[t];
            stringDark = arrayResDark[t];
            e("#fire p").text(stringFire);
            e("#water p").text(stringWater);
            e("#light p").text(stringLight);
            e("#dark p").text(stringDark);
        }

        function u(t) {
            var n = parseInt(t);
            var r = "imgSp/imgBig" + t + ".png";
            var i = arrayNome[n];
            e("#imgBig img").attr({ src: r, alt: i, title: i });
        }

        function f(t, n) {
            var r = parseInt(n);
            var i = parseInt(t);
            var s = "imgSp/imgSmall" + t + ".jpg";
            var o = arrayNome[i];
            var u = "imgSp/gold.jpg";
            var a = "Oro";
            var f = "imgSp/moon.jpg";
            var l = "Luna llena";
            var c = "imgSp/wing.jpg";
            var h = "Plumas de Ángel";
            if (t == "5" || t == "6" || t == "11" || t == "12" || t == "17" || t == "18") {
                if (r <= 4) {
                    var p = "imgSp/skin.jpg";
                    var d = "Piel de Dragón";
                } else if (r >= 5 && r <= 9) {
                    var p = "imgSp/blood.jpg";
                    var d = "Sangre de Dragón";
                } else if (r >= 10 && r <= 14) {
                    var p = "imgSp/heart.jpg";
                    if (n != "10") {
                        var d = "Corazón de Dragón";
                    } else {
                        var d = "Corazón de Dragón";
                    }
                } else {
                    var p = "imgSp/none.jpg";
                    var d = "Chuck Norris";
                }
            } else {
                if (r <= 4) {
                    var p = "imgSp/greenSoul.jpg";
                    var d = "Anime Verdi";
                } else if (r >= 5 && r <= 9) {
                    var p = "imgSp/redSoul.jpg";
                    if (n != "5") {
                        var d = "Anime Rosse";
                    } else {
                        var d = "Anima Rossa";
                    }
                } else if (r >= 10 && r <= 14) {
                    var p = "imgSp/pureSoul.jpg";
                    if (n != "10") {
                        var d = "Anime Pure";
                    } else {
                        var d = "Anima Pura";
                    }
                } else {
                    var p = "imgSp/none.jpg";
                    var d = "Chuck Norris";
                }
            }
            if (r <= 9) {
                var v = "imgSp/rollBlue.jpg";
                var m = "Rotolo Blu";
            } else if (r >= 10 && r <= 14) {
                var v = "imgSp/rollRed.jpg";
                var m = "Rotolo Rosso";
            } else {
                var v = "imgSp/trollFace.jpg";
                var m = "Troll Face";
            }
            e("#wrapperMalcom #wrapperImgSmall img").attr({ src: s, alt: o, title: o });
            e("#wrapperMate #gold img").attr({ src: u, alt: a, title: a });
            e("#wrapperMate #moon img").attr({ src: f, alt: l, title: l });
            e("#wrapperMate #wing img").attr({ src: c, alt: h, title: h });
            e("#wrapperMate #requestMate img").attr({ src: p, alt: d, title: d });
            e("#wrapperRoll img").attr({ src: v, alt: m, title: m });
            var g = arrayWin[n];
            var y = arrayCrash[n];
            var b = arrayFail[n];
            var w = "Éxito: " + g + "<br />Destrucción: " + y + "<br />Fallo: " + b;
            e("#wrapperProb p").html(w);
            if (r <= 4) {
                var E = "200.000";
            } else if (r >= 5 && r <= 9) {
                var E = "500.000";
            } else if (r >= 10 && r <= 14) {
                var E = "1.000.000";
            } else {
                var E = "Infiniti";
            }
            var S = arrayMoon[r];
            var x = arrayWing[r];
            var T = arrayRequestMate[r];
            e("#wrapperMate #gold p").text(E);
            e("#wrapperMate #moon p").text(S);
            e("#wrapperMate #wing p").text(x);
            e("#wrapperMate #requestMate p").text(T);
            if (r == 15) {
                e("#wrapperUp #bottonUp").css("display", "none");
            } else {
                e("#wrapperUp #bottonUp").css("display", "block");
            }
        }

        function l(t, n, r, i, s, o, u, a, f) {
            var l = parseInt(t);
            var c = parseInt(n);
            var nombreSp = arrayNome[l];
            var p = r + i;
            var totalDeFallos = e.number(p, 0);
            var destrucciones = e.number(r, 0);
            var fallos = e.number(i, 0);
            var oroUsado = e.number(s, 0);
            var lunasLlena = e.number(o, 0);
            var plumasDeAngel = e.number(u, 0);
            var pergaminosAzules = e.number(a, 0);
            var pergaminosRojos = e.number(f, 0);
            var resumenIntentos = "Has iniciado con un:<br /><p>" + nombreSp + " +" + varOldUP +
                    "</p>Ahora hay un:<br /><p>" + nombreSp + " +" + n +
                    "</p><br />Total de Fallos: " + totalDeFallos +
                    "<br />Destrucciones: " + destrucciones +
                    "<br />Fallos: " + fallos +
                    "<br />Oro usado: " + oroUsado +
                    "<br />Luna llena utilizada: " + lunasLlena +
                    "<br />Plumas de Ángel utilizada: " + plumasDeAngel +
                    "<br />Pergamino Azul utilizado: " + pergaminosAzules +
                    "<br />Pergamino Rojo utilizado: " + pergaminosRojos;
            
            e("#wrapperDestro #statistiche p").html(resumenIntentos);
        }

        function h() {
            e("#fullBlock, #wrapperLoading").css("display", "block");
            e("#loading").stop().animate({ width: "270px" }, 1500, "linear", function() {
                setTimeout(function() {
                    e("#fullBlock, #wrapperLoading").css("display", "none");
                    e("#loading").css("width", "0px");
                }, 200);
            });
        }

        function p(t, n, r) {
            var i = arrayNome[t];
            if (r == 0) {
                e("#banner").css({ display: "block", backgroundColor: "rgba(20, 150, 20, 0.9)" });
                var s = "Felicitaciones!! Has optenido un " + i + " +" + n;
            } else {
                e("#banner").css({ display: "block", backgroundColor: "rgba(0, 0, 0, 0.9)" });
                if (r == 1) {
                    var s = "Intento fallido!!";
                } else {
                    var s = "La carta ha sido destruida!!";
                }
            }
            e("#banner p").text(s);
            setTimeout(function() { e("#banner").css("display", "none"); }, 1700);
        }

        function ejecutarCalculoOptimizacion(t) {
            var n = parseInt(t);
            var r = a[n];
            var i = e.lj.ll(r);
            var s = b[n];
            var o = e.lj.ll(s);
            var u = c[n];
            var f = e.lj.ll(u);
            if (n >= 0 && n <= 4) {
                varOggGet.gold = varOggGet.gold + 2e5;
            } else if (n >= 5 && n <= 9) {
                varOggGet.gold = varOggGet.gold + 5e5;
            } else {
                varOggGet.gold = varOggGet.gold + 1e6;
            }
            var l = parseInt(arrayMoon[n]);
            var h = parseInt(arrayWing[n]);
            varOggGet.moon = varOggGet.moon + l;
            varOggGet.wing = varOggGet.wing + h;
            if (n <= 9) {
                varOggGet.blue = ++varOggGet.blue;
            } else {
                varOggGet.red = varOggGet.red = ++varOggGet.red;
            }

            if (e.rand(100) <= i) {
                varOggGet.up = ++n;
                varOggGet.control = 0;
            } else if (e.rand(o) <= f) {
                varOggGet.up = n;
                varOggGet.fail = ++varOggGet.fail;
                varOggGet.control = 1;
            } else {
                varOggGet.up = n;
                varOggGet.crash = ++varOggGet.crash;
                varOggGet.control = 2;
            }
        }

        function v() {
            var t = e("#wrapperBig").css("display");
            if (t == "none") {
                e("#wrapperBig").css("display", "block");
            } else {
            }
        }

        jQuery.extend({ rand: function(e) { return Math.floor(e * (Math.random() % 1) + 1); } });
        e("#wrapperIconeSp div img").attr("id", function(e) { return e + 1; });
        e("#wrapperIconeUp div").attr("id", function(e) { return "up" + e; });
        e("#wrapperIconeSp div a img").hover(t()).click(n);
        e("#wrapperIconeUp div").click(r);
        e("#wrapperUp #bottonUp").click(iniciarEjecucion);
        //e("#gadget #bottonClassifica").click(controlClassifica);
        //e("#closeStat a").click(closeStat);
        //e("#invioStat a").click(invioStat);
    });
})