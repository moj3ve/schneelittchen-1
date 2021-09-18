window.addEventListener("scroll", function() {
    document.getElementById('background').style.backgroundPositionY = window.pageYOffset * 0.7 + "px";
})

$(document).ready(function() {
    $(window).scroll(function() {
        let offset = $(window).scrollTop();
        $('.background').css("opacity", 0 + offset / 500);
        $('.header').css("opacity", 1 - offset / 300);
        $('.tweaks').css("opacity", 0 + offset / 300);

        if (offset > 0) $('.scrollIndicator').css("visibility", "hidden");
        else if (offset == 0) $('.scrollIndicator').css("visibility", "visible");
    })
})