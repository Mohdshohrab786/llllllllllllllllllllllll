// lazy Load Images And Iframes
function lazyLoadImages() {
    document.addEventListener("DOMContentLoaded", function() {
        var lazyImages = [].slice.call(document.querySelectorAll(".lazyImg"));
        if ("IntersectionObserver" in window) {
            var lazyImageObserver = new IntersectionObserver(function(entries) {
                entries.forEach(function(entry) {
                    if (entry.isIntersecting) {
                        var lazyImage = entry.target;
                        lazyImage.src = lazyImage.dataset.src;
                        lazyImage.classList.remove("lazy");
                        lazyImageObserver.unobserve(lazyImage);
                    }
                });
            });

            lazyImages.forEach(function(lazyImage) {
                lazyImageObserver.observe(lazyImage);
            });
        } else {
            for (var l = 0; l < lazyImages.length; l++) {
                lazyImages[l].setAttribute(
                    "src",
                    lazyImages[l].getAttribute("data-src")
                );
            }
        }
    });
}
lazyLoadImages();

document.addEventListener("DOMContentLoaded", function() {
    var lazyBackgrounds = [].slice.call(document.querySelectorAll(".lazy-background"));

    if ("IntersectionObserver" in window) {
        let lazyBackgroundObserver = new IntersectionObserver(function(entries, observer) {
            entries.forEach(function(entry) {
                if (entry.isIntersecting) {
                    entry.target.classList.add("visible");
                    lazyBackgroundObserver.unobserve(entry.target);
                }
            });
        });

        lazyBackgrounds.forEach(function(lazyBackground) {
            lazyBackgroundObserver.observe(lazyBackground);
        });
    }
});


// Home Page Video
// window.onload = function() {
//     var videoHP = document.getElementById("homePageVideo");
//     var desktopVideo = 'assets/video/banner.mp4';
//     var mobileVideo = 'assets/video/bannerM.mp4';
//     if(videoHP){
//         if (window.matchMedia('(min-width: 970px)').matches) {
//             videoHP.setAttribute('src', desktopVideo);
//             videoHP.play();
//         } else {
//             videoHP.setAttribute('src', mobileVideo);
//             videoHP.play();
//         }
//     }
// };


$(document).ready(function() {
    $(".slide_form_btn1").click(function() {
        $(".slide_form_main1").toggleClass("slide_form_main1_out");
    });

    $("#visitnow").click(function() {
        $(".slide_form_btn1").hide();

        $('.headdingText').removeClass('hidden');
        $('.slide_form_main1').removeClass('slide_form_main1_out');
        $(".slide_form_main1").show();

    });

    $(".close_frm2").click(function() {
        $(".slide_form_main1").hide();
    });

    $(".close_btn").click(function() {
        $(".mobile-form").hide();
    });
    $("#enqnow").click(function() {
        $(".mobile-form").show();
    });

    $("#btnenq1").click(function() {
        $(".mobile-form").show();
    });

    $(".knowmore").click(function() {
        $(".mobile-form").show();
    });






    var owl1 = $('.projectsslider');
    owl1.owlCarousel({
        autoplay: false,
        loop: true,
        dots: false,
        responsiveClass: true,
        margin: 20,
        nav: true,
        navContainer: '#custom-nav4',
        navText: [
            '<img src="assets/images/Arrow_left.svg" style="width: 50%;" alt="arrow"/>',
            '<img src="assets/images/Arrow_right.svg" style="width: 50%;" alt="arrow"/>'
        ],
        responsive: {
            0: {
                items: 1,
                dots: true,
            },
            768: {
                items: 2,
                dots: true,
            },
            1000: {
                items: 3
            }
        }
    });









});


// Scroll show header

$(document).ready(function() {

    $(".card-header").click(function() {
        // self clicking close
        if ($(this).next(".card-body").hasClass("active")) {
            $(this).next(".card-body").removeClass("active").slideUp();
            $(this).children("span").removeClass("fa-minus").addClass("fa-plus");
        } else {
            $(".card .card-body").removeClass("active").slideUp();
            $(".card .card-header span").removeClass("fa-minus").addClass("fa-plus");
            $(this).next(".card-body").addClass("active").slideDown();
            $(this).children("span").removeClass("fa-plus").addClass("fa-minus");
        }
    })


    $(window).scroll(function() {
        if ($(window).scrollTop() > 100) {
            $(".menus").addClass("navbar-transform-wrapper");
        } else {
            $(".menus").removeClass("navbar-transform-wrapper");
        }

        // if ($(window).scrollTop() <= 100) {
        //     $('.fadeinup').removeClass('visible animated fadeInUp');
        //     $('.fadeindown').removeClass('visible animated fadeInDown');
        //     $('.fadeinleft').removeClass('visible animated fadeInLeft');
        //     $('.fadeinright').removeClass('visible animated fadeInRight');
        //     $('.slideInDown').removeClass('visible animated slideInDown');
        //     $('.left_slide').removeClass('visible animated slideInLeft');
        //     $('.right_slide').removeClass('visible animated slideInRight');
        //     $('.botom_fade').removeClass('visible animated bounceInUp');
        //     $('.flipinx').removeClass('visible animated flipInX');
        //     $('.flipiny').removeClass('visible animated flipInY');
        // }
    });




    if ($(window).width() < 820) {

        //Below code close Menu after clicking Navigation.
        const navLinks = document.querySelectorAll('.nav-link')
        const menuToggle = document.getElementById('navbarSupportedContent')
        const bsCollapse = new bootstrap.Collapse(menuToggle, {
            toggle: false
        })
        navLinks.forEach((l) => {
            l.addEventListener('click', () => {
                bsCollapse.toggle()
            })
        })


    }




    // jQuery('.fadeinup').addClass("hidden").viewportChecker({
    //     classToAdd: 'visible animated fadeInUp',
    //     offset: 100
    // });
    // jQuery('.fadeindown').addClass("hidden").viewportChecker({
    //     classToAdd: 'visible animated fadeInDown',
    //     offset: 100
    // });
    // jQuery('.fadeinleft').addClass("hidden").viewportChecker({
    //     classToAdd: 'visible animated fadeInLeft',
    //     offset: 100
    // });
    // jQuery('.fadeinright').addClass("hidden").viewportChecker({
    //     classToAdd: 'visible animated fadeInRight',
    //     offset: 100
    // });
    // jQuery('.slideInDown').addClass("hidden").viewportChecker({
    //     classToAdd: 'visible animated slideInDown',
    //     offset: 100
    // });
    // jQuery('.left_slide').addClass("hidden").viewportChecker({
    //     classToAdd: 'visible animated slideInLeft',
    //     offset: 100
    // });
    // jQuery('.right_slide').addClass("hidden").viewportChecker({
    //     classToAdd: 'visible animated slideInRight',
    //     offset: 100
    // });
    // jQuery('.botom_fade').addClass("hidden").viewportChecker({
    //     classToAdd: 'visible animated bounceInUp',
    //     offset: 100
    // });
    // jQuery('.flipinx').addClass("hidden").viewportChecker({
    //     classToAdd: 'visible animated flipInX',
    //     offset: 100
    // });
    // jQuery('.flipiny').addClass("hidden").viewportChecker({
    //     classToAdd: 'visible animated flipInY',
    //     offset: 100
    // });



});



(function($, window) {
    var adjustAnchor = function() {
        var $anchor = $(':target'),
            fixedElementHeight = 150;
        if ($anchor.length > 0) {
            $('html, body')
                .stop()
                .animate({
                    scrollTop: $anchor.offset().top - fixedElementHeight
                }, 200);
        }
    };

    $(window).on('hashchange load', function() {
        adjustAnchor();
    });

})(jQuery, window);