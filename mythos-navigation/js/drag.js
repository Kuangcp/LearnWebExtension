// 参考 http://www.jb51.net/article/44533.htm
function Drag(id) {
    var $ = function (flag) {
        return document.getElementById(flag);
    }
    $(id).onmousedown = function (e) {
        var d = document;
        var page = {
            event: function (evt) {
                var ev = evt || window.event;
                return ev;
            },
            pageX: function (evt) {
                var e = this.event(evt);
                return e.pageX || (e.clientX + document.body.scrollLeft - document.body.clientLeft);
            },
            pageY: function (evt) {
                var e = this.event(evt);
                return e.pageY || (e.clientY + document.body.scrollTop - document.body.clientTop);

            },
            layerX: function (evt) {
                var e = this.event(evt);
                return e.layerX || e.offsetX;
            },
            layerY: function (evt) {
                var e = this.event(evt);
                return e.layerY || e.offsetY;
            }
        }            
        var x = page.layerX(e);
        var y = page.layerY(e);       
        if (dv.setCapture) {
            dv.setCapture();
        }
        else if (window.captureEvents) {
            window.captureEvents(Event.MOUSEMOVE | Event.MOUSEUP);
        }
        d.onmousemove = function (e) {                   
            var tx = page.pageX(e) - x;
            var ty = page.pageY(e) - y;
            dv.style.left = tx + "px";
            dv.style.top = ty + "px";
        }
        d.onmouseup = function () {
            if (dv.releaseCapture) {
                dv.releaseCapture();
            }
            else if (window.releaseEvents) {
                window.releaseEvents(Event.MOUSEMOVE | Event.MOUSEUP);
            }
            d.onmousemove = null;
            d.onmouseup = null;
        }
    }
}