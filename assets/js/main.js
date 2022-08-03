$(function () {
    //------=-
    // NAVBAR
    //--------
    var $body = $('body');
    var $page = $(".App-page");
    var $header = $(".App-header");
    var $desktopNav = $("nav.desktop-nav");
    var $mobileNav = $("nav.mobile-nav");
    var $menuIcon = $(".menu-icon");

    // show navbar 
    $menuIcon.click(function () {
        var $this = $(this);
        $mobileNav.slideToggle(200);
        $this.toggleClass('opened');
        $body.toggleClass('overflow-hidden-y_max-screen-576');

    });

    // dropdown - mobile
    $mobileNav.html($desktopNav.html()); // set navbar
    var firstLink = $mobileNav.find('li:first-child a');

    var isFirstCurrent = firstLink.hasClass('current');
    if (isFirstCurrent === true) {
        $mobileNav.addClass('bg-current');
    } else {
        $mobileNav.removeClass('bg-current');
    }
    // console.log(isFirstCurrent === true);

    // Scroll
    // console.log($header.offset().top);
    //If page reload to attach automatic new style
    // if($header.offset().top > 100){
    //     $header.addClass('scrolled');
    // }

    // $(window).scroll(function () {
    //     var height = $(window).scrollTop();

    //     if (height > 100) {
    //         $header.addClass('scrolled');
    //     } else {
    //         $header.removeClass('scrolled');
    //     }

    // });
    //------=------
    // NAVBAR - end
    //-------------

    //------
    // Alert
    //------
    var $body = $('body');
    var $alertOverlay = $('.alert-overlay');
    var $alert = $('.alert');
    var $alertIcon = $alert.find('.alert__icon');
    var $alertImage = $('.alert').find('img');

    $('.App-scills-gallery__item .overlay, .App-scills-gallery__item .App-scills-gallery__icon').on('click', function (e) {
        $alertOverlay.addClass('alert-overlay__active');
        $alert.addClass('alert__active');
        $body.addClass('ohy');
        var $overlay = $(this);
        var $img = $overlay.parent().attr('data-image');
        $alertImage.attr('src', $img);
        // console.log($img);
    });

    // Close
    $alertIcon.on('click', function () {
        $alertOverlay.removeClass('alert-overlay__active');
        $alert.removeClass('alert__active');
        $body.removeClass('ohy');
        // console.log($alert);
    });
    // Close
    $(document).on('click', '.alert-bg-close', function () {
        $alertOverlay.removeClass('alert-overlay__active');
        $alert.removeClass('alert__active');
        $body.removeClass('ohy');
    });

    //------------
    // Alert - end
    //------------

    //-------------
    // Video Player
    //-------------
    var $myVideo = $("#video1");
    var $cover = $('.App-process__video-cover');
    var $btn = $('.App-process__video-btn-play');

    $cover.on('click', function (e) {
        $btn.each(function (index, elem) {
            $(elem).toggleClass('btn-state-over');
            var has = $(elem).hasClass('App-process__video-btn-play_pause') && $(elem).hasClass('btn-state-over');
            $(elem).removeClass('opst');
            if (has) {
                $(elem).addClass('opst');
            }
        });

        if ($myVideo.get(0).paused) {
            $myVideo.get(0).play();
            $('.App-process__video').addClass('started');
        } else {
            $myVideo.get(0).pause();
        }
    });//<-- on click

    $myVideo.on('ended', function () {
        $btn.each(function (index, elem) {
            $(elem).removeClass('opst');
            $(elem).removeClass('btn-state-over');
        });
        $('.App-process__video-btn-play_start').addClass('btn-state-over');
    });
    //-------------------
    // Video Player - end
    //-------------------

    //-------------------
    // owl carousel
    //-------------------
    $(".owl-carousel").owlCarousel(
        {
            loop: true,
            center: true,
            autoplay: true,
            dots: true,
            items: 1,
            // autoplayTimeout: 8500,
            smartSpeed: 450,
        }
    );
    //-------------------
    // owl carousel - end
    //-------------------

    //----------------------
    // html5 form validation
    //----------------------
    var $form = $('.App-contact__form form');
    var $button = $form.find('.form-btn');

    $button.on('click', function (e) {
        var isvalidate = $form[0].checkValidity();
        if (isvalidate) {
            e.preventDefault();
            $form.find('.form-item').each(function (ind, el) {
                $(el).removeClass('form-error');
            });
            alert('form is submitted!');
            // HERE YOU CAN PUT YOUR AJAX CALL
        } else {
            $form.find('.form-item').each(function (ind, el) {
                $(el).addClass('form-error');
            });
        }
    });

    //----------------------------
    // html5 form validation - end
    //----------------------------

    // //-----------------------------------
    // // ONE PAGE SCROLLING
    // //-----------------------------------
    // // Select all links with hashes
    // $('a[href*="#"]').not('[href="#"]').not('[href="#0"]').not('[data-toggle="tab"]').on('click', function (event) {
    //     // On-page links
    //     if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
    //         // Figure out element to scroll to
    //         var target = $(this.hash);
    //         target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
    //         // Does a scroll target exist?
    //         if (target.length) {
    //             // Only prevent default if animation is actually gonna happen
    //             event.preventDefault();
    //             $('html, body').animate({
    //                 scrollTop: target.offset().top
    //             }, 1000, function () {
    //                 // Callback after animation
    //                 // Must change focus!
    //                 var $target = $(target);
    //                 $target.focus();
    //                 if ($target.is(":focus")) { // Checking if the target was focused
    //                     return false;
    //                 } else {
    //                     $target.attr('tabindex', '-1'); // Adding tabindex for elements not focusable
    //                     $target.focus(); // Set focus again
    //                 };
    //             });
    //         }
    //     }
    // });

    // var navMenu = function () {

    //     var activeClass = 'current';

    //     $('body').on('click', '.menu a', function (event) {
    //         var href = $(this).attr('href');
    //         var links = [];

    //         $('.menu a').each(function (i, el) {
    //             $(el).removeClass(activeClass);
    //             if ($(el).attr('href') == href) {
    //                 links.push($(el));
    //             }

    //         });

    //         $.each(links, function (index, value) {
    //             value.addClass(activeClass);
    //         });

    //         event.preventDefault();

    //     });

    // }();

    // function ancors() {
    //     var ancors = [];
    //     $('.menu a').each(function (i, el) {
    //         var $id = $(el).attr('href');
    //         if ($.inArray($id, ancors) == -1) {
    //             ancors.push($id);
    //         }
    //     });
    //     return ancors.length !== 0 ? ancors : false;
    // }

    // function targets(ancors) {
    //     var targets = [];
    //     $.each(ancors, function (index, value) {
    //         var obj = {
    //             'ancor': '',
    //             'elem': '',
    //             'offset': ''
    //         };
    //         obj.ancor = value;
    //         obj.elem = $(value);
    //         obj.offset = $(value).offset().top - 2;
    //         targets[obj.offset] = obj;
    //     });

    //     return targets.length !== 0 ? targets : false;
    // }

    // var f = targets(ancors());

    // $(window).on('scroll', function (e) {
    //     var wPosition = $(window).scrollTop();
    //     var elems = targets(ancors());
    //     var nums = Object.keys(elems);
    //     var closestLeft = Math.max(...nums.filter(v => v < wPosition));

    //     var links = [];
    //     var activeClass = 'current';

    //     $('.menu a').each(function (i, el) {
    //         $(el).removeClass(activeClass);
    //         if ($(el).attr('href') == elems[closestLeft].ancor) {
    //             links.push($(el));
    //         }

    //     });

    //     $.each(links, function (index, value) {
    //         value.addClass(activeClass);
    //     });

    // });

    // //If page loaded attach to home page nav link active style 
    // if($header.offset().top == 0){
    //     $('.menu a').each(function (i, el) {
    //         var $id = $(el).attr('href');
    //         if ($id === '#home') {
    //             $(el).addClass('current');
    //         }
    //     });
    // }
    // //-----------------------------------
    // // ONE PAGE SCROLLING - end
    // //-----------------------------------

});	
