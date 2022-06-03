$(document).ready(function() {
    "use strict";

    // slide
    var slideIndex = 0,
        slideLen = 2;

    window.setInterval(function () {
        $(".inner>img").fadeOut();
        $(".inner>img").eq(slideIndex).fadeIn();

        if (slideIndex < slideLen) {
            slideIndex++;
        } else {
            slideIndex = 0;
        }
    }, 3000);  

    // notice and gallery   
var switchFunc = function () {
    $(".notice").toggleClass("d-none");
    $(".notice").toggleClass("d-block");

    $(".n-tab").toggleClass("deactive");
    $(".n-tab").toggleClass("active");

    $(".gallery").toggleClass("d-none");
    $(".gallery").toggleClass("d-block");

    $(".g-tab").toggleClass("deactive");
    $(".g-tab").toggleClass("active");
};

    $(".g-tab").click(function () {
        if($(".g-tab").hasClass("deactive")) switchFunc();
        console.log("dsd");
    });
    
    $(".n-tab").click(function () {
        if($(".n-tab").hasClass("deactive")) switchFunc();
        console.log("dsd");
    });

    // modal
    $(".modal-trigger").click(function () {
        $(".section--modal").fadeIn()
    });
    $(".close-btn").click(function () {
        $(".section--modal").fadeOut()
    });
});