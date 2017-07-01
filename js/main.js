'use strict';

$(function () {
    $(window).scroll(function () {
            if($(window).scrollTop()) {
                document.getElementById("main-nav").style.backgroundColor="rgba(14, 216, 214, 0.9)";

            }
        else document.getElementById("main-nav").style.backgroundColor="rgba(0, 0, 0, 0)";
    });
            });