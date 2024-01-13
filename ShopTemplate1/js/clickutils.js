var clickutils = (function () {
    return {
        click: click,
        nClick: nClick
    };
    function click(element, button, func) {
        let start = false;
        element.addEventListener("mousedown", (e) => {
            if (e.button === button) {
                start = true;
            } else {
                start = false;
            }
            function mouseUp() {
                start = false;
                window.removeEventListener('mouseup', mouseUp);
            }
            window.addEventListener('mouseup', mouseUp);
        });
        element.addEventListener("mouseup", (e) => {
            if (start) {
                func(e);
            }
        });
        element.addEventListener("touchstart", (e) => {
            start = true;
            function touchEnd() {
                start = false;
                window.removeEventListener('touchmove', touchEnd);
            }
            window.addEventListener('touchmove', touchEnd);
        });
        element.addEventListener("touchend", (e) => {
            if (start) {
                func(e);
            }
        });
    }
    function nClick(element, button) {
        return new Promise((resolve) => {
            let start = false;
            element.addEventListener("mousedown", (e) => {
                if (e.button === button) {
                    start = true;
                } else {
                    start = false;
                }
                function mouseUp() {
                    start = false;
                    window.removeEventListener('mouseup', mouseUp);
                }
                window.addEventListener('mouseup', mouseUp);
            });
            element.addEventListener("mouseup", () => {
                if (start) {
                    resolve();
                }
            });
            element.addEventListener("touchstart", (e) => {
                start = true;
                function touchEnd() {
                    start = false;
                    window.removeEventListener('touchmove', touchEnd);
                }
                window.addEventListener('touchmove', touchEnd);
            });
            element.addEventListener("touchend", () => {
                if (start) {
                    resolve();
                }
            });
        });
    }
}());