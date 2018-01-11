function display_menu() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}

$(document).ready(function () {
    $("#menuLogo").click(function () {
        $('#h1-tours').addClass('wow fadeInLeft');

    });
});

