(function () {
    if (!$('body').hasClass('debug_mode')) {
        var _z = console;
        Object.defineProperty(window, "console", {
            get: function () {
                if ((window && window._z && window._z._commandLineAPI) || {}) {
                    throw "Nice trick! but not permitted!";
                }
                return _z;
            },
            set: function (val) {
                _z = val;
            }
        });
    }
})();