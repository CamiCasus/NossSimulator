(function(f) {
    f.number = function(b, c, d, e) {
        b = (b + "").replace(/[^0-9+\-Ee.]/g, "");
        b = !isFinite(+b) ? 0 : +b;
        c = !isFinite(+c) ? 0 : Math.abs(c);
        e = typeof e === "undefined" ? "." : e;
        d = typeof d === "undefined" ? "," : d;
        var a = "";
        a = function(g, i) {
            var h = Math.pow(10, i);
            return "" + Math.round(g * h) / h;
        };
        a = (c ? a(b, c) : "" + Math.round(b)).split(".");
        if (a[0].length > 3) a[0] = a[0].replace(/\B(?=(?:\d{3})+(?!\d))/g, e);
        if ((a[1] || "").length < c) {
            a[1] = a[1] || "";
            a[1] += Array(c - a[1].length + 1).join("0");
        }
        return a.join(d);
    };
    f.fn.number = function(b, c, d, e) {
        if (b ===
            true)
            return this.each(function() {
                var a = f(this), g = +a.text().replace(/[^.0-9]/, "");
                a.number(isNaN(g) ? 0 : +g, c, d, e);
            });
        return this.text(f.number.apply(window, arguments));
    };
})(jQuery);