$(document).ready(function () {


  /* For the sticky navigation */
  $('.js--section-features').waypoint(function (direction) {
    if (direction == "down") {
      $('nav').addClass('sticky');
    } else {
      $('nav').removeClass('sticky');
    }
  }, {
    offset: '60px;'
  });


  /* Scroll on buttons */
  $('.js--scroll-to-plans').click(function () {
    // you need to select the html and the body to scroll
    $('html, body').animate({ scrollTop: $('.js--section-plans').offset().top }, 1000);
  });

  $('.js--scroll-to-start').click(function () {
    $('html, body').animate({ scrollTop: $('.js--section-features').offset().top }, 500);
  });


  /* Navigation scroll */
  $(function () {
    $('a[href*=#]:not([href=#])').click(function () {
      if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
        if (target.length) {
          $('html,body').animate({
            scrollTop: target.offset().top
          }, 1000);
          return false;
        }
      }
    });
  });


  /* Animations on scroll */
  // you also need to make it invisible before the animation starts in the css file by setting the opacity to zero
  $('.js--wp-1').waypoint((direction) => {
    $('.js--wp-1').addClass('animate__animated animate__fadeIn');
  },
    {
      offset: '50%',
    }
  );
  $('.js--wp-2').waypoint((direction) => {
    $('.js--wp-2').addClass('animate__animated animate__fadeInLeft');
  },
    {
      offset: '50%',
    }
  );

  $('.js--wp-3').waypoint((direction) => {
    $('.js--wp-3').addClass('animate__animated animate__fadeIn');
  },
    {
      offset: '50%',
    }
  );


  $('.js--wp-4').waypoint((direction) => {
    $('.js--wp-4').addClass('animate__animated animate__bounceIn');
  },
    {
      offset: '50%',
    }
  );
  // to reset the animation when you go back to the top of the page
  $('.js--header').waypoint(
    (direction) => {
      if (direction === 'up') {
        $('.js--wp-1').removeClass('animate__animated animate__fadeIn');
        $('.js--wp-2').removeClass('animate__animated animate__fadeInLeft');
        $('.js--wp-3').removeClass('animate__animated animate__fadeIn');
        $('.js--wp-4').removeClass('animate__animated animate__bounceIn');
      }
    },
    {
      offset: '-25%',
    }
  );

  /* Mobile navigation  to display and hide the links*/
  $('.js--nav-icon').click(function () {
    const nav = $('.js--main-nav');
    const icon = $('.js--nav-icon i');

    nav.slideToggle(200);

    // to change the icon depending on the 

    if (icon.hasClass('ion-navicon-round')) {
      icon.addClass('ion-close-round');
      icon.removeClass('ion-navicon-round');
    } else {
      icon.addClass('ion-navicon-round');
      icon.removeClass('ion-close-round');
    }
  });

});
