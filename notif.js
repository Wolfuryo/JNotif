window.notif = window.notif || {};
notif.init = function() {
    document.querySelector("body").innerHTML += "<div class='notifs_con'></div>";
    notif.con = document.querySelector(".notifs_con");
};
notif.n = 0;
notif.new_html = function(icon, title, text, cl) {
    notif.classes.push(cl);
    return "<div class='notif " + cl + "' id='not" + notif.n + "'><div class='notif_icon'><i class='fa fa-" + icon + "'></i></div><div class='notif_group'><div class='notif_title'>" + title + "</div><div class='notif_text'>" + text + "</div></div></div>";
};
notif.show = function(cl) {
    document.querySelector("." + cl).setAttribute("class", document.querySelector("." + cl).getAttribute("class") + " shown");
};
notif.destroy = function(cl) {
    this.elem = document.querySelector("." + cl);
    this.elem.setAttribute("class", "notif " + cl);
    this.elem.remove();
    notif.classes.splice(notif.classes.indexOf(cl), 1);
};
notif.create = function(n, o, t, i, f, s) {
    i = i || "noclass";
    s = s || 2000;
    f = f || 1;
    n = n || "check";
    o = o || "Notificare";
    t = t || o;
    if (i == notif.n) notif.n++;
    notif.con.innerHTML = notif.new_html(n, o, t, i) + notif.con.innerHTML;
    setTimeout(function() {
        notif.show(i);
        if (f) {
            setTimeout(function() {
                notif.destroy(i);
            }, s);
        } else {
            document.querySelector("." + i).addEventListener("click", function() {
                notif.destroy(i);
            })
        };
    }, 100);
};
notif.classes = [];
