// parallax for the background
window.addEventListener("scroll", function() {
    document.getElementById('background').style.backgroundPositionY = window.pageYOffset * 0.7 + "px";
})

// fade for the home view and alignment for the navigation bar
$(document).ready(function() {
    $(window).scroll(function() {
        let offset = $(window).scrollTop();
        
        $('.home').css("opacity", 1 - offset / 300);

        if (offset > 500) {
            $('.navigationBarContainer').css("background-color", "rgba(0, 0, 0 , 0.6)");
            $('.navigationBarContainer').css("backdrop-filter", "blur(64px)");
            $('.navigationBarContainer').css("-webkit-backdrop-filter", "blur(64px)");
            $('.navigationBarContainer').css("background-filter", "blur(64px)");

            $('.navigationBarIcon').css("opacity", "1");

            $('.linkList').css("top", "10px");
        } else if (offset <= 500) {
            $('.navigationBarContainer').css("background-color", "rgba(0, 0, 0 , 0)");
            $('.navigationBarContainer').css("backdrop-filter", "blur(0px)");
            $('.navigationBarContainer').css("-webkit-backdrop-filter", "blur(0px)");
            $('.navigationBarContainer').css("background-filter", "blur(0px)");

            $('.navigationBarIcon').css("opacity", "0");

            $('.linkList').css("top", "50px");
        }
    })
})

// var isExpanded = false;

// function expandMobileNavigationBar() {

//     const mobileNavigationBarButton = document.getElementById('mobileNavigationBarButton');
//     if (!isExpanded) {
//         mobileNavigationBarButton.style.opacity = "1";
//         isExpanded = true;
//     } else {
//         mobileNavigationBarButton.style.opacity = "0.7";
//         isExpanded = false;
//     }

// }