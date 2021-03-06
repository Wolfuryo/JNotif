function query(t) {
    return document.querySelector(t)
}

function _query(t) {
    return document.querySelectorAll(t)
}

function listen(t, n, i) {
    t.addEventListener(n, function(t) {
        i(t)
    })
}
window.notif = window.notif || {}, notif.elems = {}, notif.css = ".notif,.notif-left>i{color:#fff}.notifs{position:fixed;right:10px;top:5px;height:100%;width:35%;overflow:auto}.notif{font-family:sans-serif;background:#2f2f2f;box-shadow:0 3px 6px rgba(0,0,0,.16);display:flex;margin-bottom:5px;perspective:2000px;transition-duration:.4s;transform:scale(0);position:relative}.notif-v{transform:scale(1)}.notif-title{font-size:21px}.notif:hover{transform:scale(.95)}.notif-left{width:40px;background:#667d99;align-items:center;justify-content:center}.notif-right{width:calc(70% - 40px)}.notif>div{display:inline-flex;flex-direction:column}.notif a,.notif div{padding:2px}", notif.get_elem = function() {
    notif.elems.body = query("body")
}, notif.struct = function() {
    var t = document.createElement("div");
    t.classList.add("notifs"), notif.elems.body.appendChild(t), notif.elems.con = t;
    var n = document.createElement("style");
    n.innerHTML = notif.css, notif.elems.body.appendChild(n)
}, notif.init = function() {
    notif.get_elem(), notif.struct()
}, notif.inner_struct = function(t, n, i) {
    return "<div class='notif-left'><i class='fa fa-" + i + "'></i></div><div class='notif-right'><div class='notif-title'>" + t + "</div><div class='notif-content'>" + n + "</div></div>"
}, notif.create = function(t, n, i, e, o) {
    t = t || "?", n = n || "?", i = i || "check", e = e || 4e3, o = o || 1;
    var f = document.createElement("div");
    f.classList.add("notif"), f.innerHTML = notif.inner_struct(t, n, i), notif.elems.con.appendChild(f), setTimeout(function() {
        f.classList.add("notif-v")
    }, 200), notif.remover(f, e, o)
}, notif.remover = function(t, n, i) {
    var e = 1;
    i && setTimeout(function() {
        t && (e = 0, t.classList.remove("notif-v"), setTimeout(function() {
            t.remove()
        }, 200))
    }, n), listen(t, "click", function() {
        t && e && (t.classList.remove("notif-v"), setTimeout(function() {
            t.remove()
        }, 200))
    })
}, listen(document, "DOMContentLoaded", function() {
    notif.init()
});
