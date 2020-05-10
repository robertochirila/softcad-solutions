$(document).ready(function () {
    console.log('The script is loaded.');


    $('.js--scroll-to-services').click(function () {

        $('html,body').animate({ scrollTop: $('.js--services').offset().top }, 1000);
    });
    $('.js--naval').click(function () {
        $('html,body').animate({ scrollTop: $('.js--naval-projects').offset().top }, 1000);
    });
    $('.js--software').click(function () {
        $('html,body').animate({ scrollTop: $('.js--software-projects').offset().top }, 1000);
    });
    $('.js--scroll-to-home').click(function () {

        $('html,body').animate({ scrollTop: $('.js--home').offset().top }, 1000);
    });
    $('.js--scroll-to-projects').click(function () {

        $('html,body').animate({ scrollTop: $('.js--naval-projects').offset().top }, 1000);
    });
    $('.js--scroll-to-partners').click(function () {

        $('html,body').animate({ scrollTop: $('.js--partners').offset().top }, 1000);
    });
    $('.js--scroll-to-location').click(function () {

        $('html,body').animate({ scrollTop: $('.js--location').offset().top }, 1000);
    });
    $('.js--wp-1').waypoint(function (direction) {
        $('.js--wp-1').addClass('animated fadeIn');
    }, {
        offset: '100%'
    });
    $('.js--wp-2').waypoint(function (direction) {
        $('.js--wp-2').addClass('animated bounceInUp');
    }, {
        offset: '100%'
    });
    $('.js--wp-3').waypoint(function (direction) {
        $('.js--wp-3').addClass('animated fadeInLeftBig');
    }, {
        offset: '80%'
    });
    $('.js--wp-4').waypoint(function (direction) {
        $('.js--wp-4').addClass('animated bounceIn');
    }, {
        offset: '80%'
    });
    $('.js--wp-5').waypoint(function (direction) {
        $('.js--wp-5').addClass('animated fadeInRight');
    }, {
        offset: '80%'
    });
    $('.js--wp-6').waypoint(function (direction) {
        $('.js--wp-6').addClass('animated bounceInUp');
    }, {
        offset: '80%'
    });
    $('.js--wp-7').waypoint(function (direction) {
        $('.js--wp-7').addClass('animated bounceIn');
    }, {
        offset: '80%'
    });
    $('.js--wp-8').waypoint(function (direction) {
        $('.js--wp-8').addClass('animated fadeInRight');
    }, {
        offset: '80%'
    });
    $('.js--wp-9').waypoint(function (direction) {
        $('.js--wp-9').addClass('animated bounceInUp');
    }, {
        offset: '80%'
    });
    $('.js--wp-10').waypoint(function (direction) {
        $('.js--wp-10').addClass('animated fadeInLeftBig');
    }, {
        offset: '80%'
    });
    $('.js--wp-11').waypoint(function (direction) {
        $('.js--wp-11').addClass('animated fadeInLeft');
    }, {
        offset: '80%'
    });
    $('.js--wp-12').waypoint(function (direction) {
        $('.js--wp-12').addClass('animated bounceInUp');
    }, {
        offset: '80%'
    });
    $('.js--wp-13').waypoint(function (direction) {
        $('.js--wp-13').addClass('animated fadeInRight');
    }, {
        offset: '80%'
    });
    $('.js--wp-14').waypoint(function (direction) {
        $('.js--wp-14').addClass('animated fadeInLeft');
    }, {
        offset: '80%'
    });
    $('.js--wp-15').waypoint(function (direction) {
        $('.js--wp-15').addClass('animated bounceInUp');
    }, {
        offset: '80%'
    });
    $('.js--wp-16').waypoint(function (direction) {
        $('.js--wp-16').addClass('animated fadeInRight');
    }, {
        offset: '80%'
    });
    $('.js--wp-17').waypoint(function (direction) {
        $('.js--wp-17').addClass('animated fadeInLeftBig');
    }, {
        offset: '80%'
    });
    $('.js--wp-18').waypoint(function (direction) {
        $('.js--wp-18').addClass('animated fadeInLeft');
    }, {
        offset: '80%'
    });
    $('.js--wp-19').waypoint(function (direction) {
        $('.js--wp-19').addClass('animated bounceInUp');
    }, {
        offset: '80%'
    });
    $('.js--wp-20').waypoint(function (direction) {
        $('.js--wp-20').addClass('animated fadeInRight');
    }, {
        offset: '80%'
    });
    $('.js--wp-21').waypoint(function (direction) {
        $('.js--wp-21').addClass('animated fadeInLeft');
    }, {
        offset: '80%'
    });
    $('.js--wp-22').waypoint(function (direction) {
        $('.js--wp-22').addClass('animated bounceInUp');
    }, {
        offset: '80%'
    });
    $('.js--wp-23').waypoint(function (direction) {
        $('.js--wp-23').addClass('animated fadeInRight');
    }, {
        offset: '80%'
    });
    $('.js--wp-24').waypoint(function (direction) {
        $('.js--wp-24').addClass('animated fadeInLeft');
    }, {
        offset: '100%'
    });
    /* Navigation icon */
    $('.js--nav-icon').click(function () {
        var nav = $('.js--main-nav');
        var icon = $('.js--nav-icon i');
        nav.slideToggle(200);
        if (icon.hasClass('ion-navicon-round')) {
            icon.removeClass('ion-navicon-round');
            icon.addClass('ion-close-round');
        } else {
            icon.removeClass('ion-close-round');
            icon.addClass('ion-navicon-round');
        }
    });

    /*!(function (d) {
        // Variables to target our base class,  get carousel items, count how many carousel items there are, set the slide to 0 (which is the number that tells us the frame we're on), and set motion to true which disables interactivity.
        var itemClassName = "carousel__photo";
        items = d.getElementsByClassName(itemClassName),
            totalItems = items.length,
            slide = 0,
            moving = true;

        // To initialise the carousel we'll want to update the DOM with our own classes
        function setInitialClasses() {

            // Target the last, initial, and next items and give them the relevant class.
            // This assumes there are three or more items.
            items[totalItems - 1].classList.add("prev");
            items[0].classList.add("active");
            items[1].classList.add("next");
        }

        // Set click events to navigation buttons

        function setEventListeners() {
            var next = d.getElementsByClassName('carousel__button--next')[0],
                prev = d.getElementsByClassName('carousel__button--prev')[0];

            next.addEventListener('click', moveNext);
            prev.addEventListener('click', movePrev);
        }

        // Disable interaction by setting 'moving' to true for the same duration as our transition (0.5s = 500ms)
        function disableInteraction() {
            moving = true;

            setTimeout(function () {
                moving = false
            }, 500);
        }

        function moveCarouselTo(slide) {

            // Check if carousel is moving, if not, allow interaction
            if (!moving) {

                // temporarily disable interactivity
                disableInteraction();

                // Preemptively set variables for the current next and previous slide, as well as the potential next or previous slide.
                var newPrevious = slide - 1,
                    newNext = slide + 1,
                    oldPrevious = slide - 2,
                    oldNext = slide + 2;

                // Test if carousel has more than three items
                if ((totalItems - 1) > 3) {

                    // Checks if the new potential slide is out of bounds and sets slide numbers
                    if (newPrevious <= 0) {
                        oldPrevious = (totalItems - 1);
                    } else if (newNext >= (totalItems - 1)) {
                        oldNext = 0;
                    }

                    // Check if current slide is at the beginning or end and sets slide numbers
                    if (slide === 0) {
                        newPrevious = (totalItems - 1);
                        oldPrevious = (totalItems - 2);
                        oldNext = (slide + 1);
                    } else if (slide === (totalItems - 1)) {
                        newPrevious = (slide - 1);
                        newNext = 0;
                        oldNext = 1;
                    }

                    // Now we've worked out where we are and where we're going, by adding and removing classes, we'll be triggering the carousel's transitions.

                    // Based on the current slide, reset to default classes.
                    items[oldPrevious].className = itemClassName;
                    items[oldNext].className = itemClassName;

                    // Add the new classes
                    items[newPrevious].className = itemClassName + " prev";
                    items[slide].className = itemClassName + " active";
                    items[newNext].className = itemClassName + " next";
                }
            }
        }

        // Next navigation handler
        function moveNext() {

            // Check if moving
            if (!moving) {

                // If it's the last slide, reset to 0, else +1
                if (slide === (totalItems - 1)) {
                    slide = 0;
                } else {
                    slide++;
                }

                // Move carousel to updated slide
                moveCarouselTo(slide);
            }
        }

        // Previous navigation handler
        function movePrev() {

            // Check if moving
            if (!moving) {

                // If it's the first slide, set as the last slide, else -1
                if (slide === 0) {
                    slide = (totalItems - 1);
                } else {
                    slide--;
                }

                // Move carousel to updated slide
                moveCarouselTo(slide);
            }
        }

        // Initialise carousel
        function initCarousel() {
            setInitialClasses();
            setEventListeners();

            // Set moving to false now that the carousel is ready
            moving = false;
        }

        // make it rain
        initCarousel();

    }(document));*/


});



