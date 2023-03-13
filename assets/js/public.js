// Menu Scripts
const toggleMenu = document.getElementById("wsnavtoggle");
const bodyOverflow = document.querySelector("body");
toggleMenu.addEventListener("click", overflowHidden);

function overflowHidden() {
    if (bodyOverflow.classList.contains("overflow")) {
        bodyOverflow.classList.remove("overflow");
        bodyOverflow.classList.add("none-overflow");
    } else {
        bodyOverflow.classList.remove("none-overflow");
        bodyOverflow.classList.add("overflow");
    }
}

// Menu Scrool Down Coloe Change Scripts
window.onload = function () {

    window.onscroll = function () {
        scrollFunction();
        // console.log(document.body.scrollTop);
        // console.log(document.documentElement.scrollTop);
    };

    function scrollFunction() {
        if (window.matchMedia('screen and (min-width: 992px)').matches) {

            if (document.body.scrollTop > 10 || document.documentElement.scrollTop > 10) {

                let bigLogo = document.getElementsByClassName("big-logo")[0];
                let headerLogo = document.getElementsByClassName("header-logo")[0];
                let headerNav = document.getElementsByClassName("wsmenu")[0];
                bigLogo.style.cssText = "display: none;";
                headerLogo.style.cssText = "width: 90px;";
                headerNav.style.cssText = "margin-right: 30px;";

            } else {

                let bigLogo = document.getElementsByClassName("big-logo")[0];
                let headerLogo = document.getElementsByClassName("header-logo")[0];
                let headerNav = document.getElementsByClassName("wsmenu")[0];
                bigLogo.style.cssText = "display: block;";
                headerLogo.style.cssText = "width: 0px;";
                headerNav.style.cssText = "margin-right: 0;";

            }

        } else {

            let headerNav = document.getElementsByClassName("wsmenu")[0];
            headerNav.style.cssText = "margin-right: 0;";
        }
    }

}

// Swiper Scripts
var locationSwiper = new Swiper(".locationSwiper", {
    slidesPerView: 4,
    spaceBetween: 35,
    slidesPerGroup: 1,
    loop: true,
    loopFillGroupWithBlank: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    breakpoints: {
        0: {
            slidesPerView: 1,
            spaceBetween: 0,
        },
        576: {
            slidesPerView: 2,
            spaceBetween: 15,
        },
        768: {
            slidesPerView: 2,
            spaceBetween: 15,
        },
        992: {
            slidesPerView: 3,
            spaceBetween: 25,
        },
        1200: {
            slidesPerView: 4,
            spaceBetween: 35,
        },
        1400: {
            slidesPerView: 4,
            spaceBetween: 35,
        },
    }
});

var adsSwiper = new Swiper(".adsSwiper", {
    slidesPerView: 5,
    spaceBetween: 25,
    slidesPerGroup: 1,
    centeredSlides: true,
    loop: true,
    loopFillGroupWithBlank: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".ads-swiper-button-next",
        prevEl: ".ads-swiper-button-prev",
    },
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    breakpoints: {
        0: {
            slidesPerView: 1,
            spaceBetween: 0,
        },
        576: {
            slidesPerView: 1,
            spaceBetween: 0,
        },
        768: {
            slidesPerView: 3,
            spaceBetween: 15,
        },
        992: {
            slidesPerView: 3,
            spaceBetween: 15,
        },
        1200: {
            slidesPerView: 5,
            spaceBetween: 25,
        },
        1400: {
            slidesPerView: 5,
            spaceBetween: 25,
        },
    }
});

var blogSwiper = new Swiper(".blogSwiper", {
    slidesPerView: 4,
    spaceBetween: 15,
    slidesPerGroup: 1,
    loop: true,
    loopFillGroupWithBlank: true,
    // pagination: {
    //     el: ".swiper-pagination",
    //     clickable: true,
    // },
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    breakpoints: {
        0: {
            slidesPerView: 1,
            spaceBetween: 0,
        },
        576: {
            slidesPerView: 2,
            spaceBetween: 15,
        },
        768: {
            slidesPerView: 2,
            spaceBetween: 15,
        },
        992: {
            slidesPerView: 3,
            spaceBetween: 15,
        },
        1200: {
            slidesPerView: 4,
            spaceBetween: 15,
        },
        1400: {
            slidesPerView: 4,
            spaceBetween: 15,
        },
    }
});

var questionSwiper = new Swiper(".questionSwiper", {
    slidesPerView: 1,
    spaceBetween: 0,
    slidesPerGroup: 1,
    centeredSlides: true,
    loop: true,
    loopFillGroupWithBlank: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".question-swiper-button-next",
        prevEl: ".question-swiper-button-prev",
    },
    // autoplay: {
    //     delay: 2500,
    //     disableOnInteraction: false,
    // },
    // thumbs: {
    //     swiper: mySwiper1,
    // },
});


// Video Scripts
const video = document.getElementById("video");
const circlePlayButton = document.getElementById("circle-play-b");
const videoContent = document.getElementById("video-content");

circlePlayButton.addEventListener("click", togglePlay);
function togglePlay() {
    if (video.paused || video.ended) {
        video.play();
    } else {
        video.pause();
    }
}

video.removeAttribute('controls');
video.addEventListener("playing", function () {
    circlePlayButton.style.opacity = 0;
    videoContent.style.opacity = 0;
    video.setAttribute("controls", "true");

});
video.addEventListener("pause", function () {
    circlePlayButton.style.opacity = 1;
    videoContent.style.opacity = 1;
    video.removeAttribute('controls');
});