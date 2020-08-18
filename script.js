var x = document.getElementsByClassName("m");

function mouseOver(a, b, c, d, e, f, g, h, k) {
    var x = document.getElementsByClassName("m");
    for (var i = 0; i < arguments.length; i++) {
        x[i].innerHTML = arguments[i];
        x[i].style.opacity = "0.8";
    }
}
function mouseOut() {
    var x = document.getElementsByClassName("m");
    for (var i = 0; i < x.length; i++) {
        x[i].innerHTML = "";
        x[i].style.opacity = "1.0";
    }
}

for (var i = 0; i < x.length; i++) {
    x[i].onmouseover = function () {
        mouseOver(
            "Hulk",
            "Spiderman",
            "Captain America",
            "Logo",
            "Black Panther",
            "Iron Man",
            "Ant Man",
            "Thor",
            "CaptainMarvel"
        );
    };
    x[i].onmouseout = function () {
        mouseOut();
    };
}
