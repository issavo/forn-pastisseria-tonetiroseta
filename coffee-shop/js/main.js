(function ($) {
  ("use strict");
  // Spinner
  var spinner = function () {
    setTimeout(function () {
      if ($("#spinner").length > 0) {
        $("#spinner").removeClass("show");
      }
    }, 1);
  };
  spinner();

  // Initiate the wowjs
  new WOW().init();

  // Fixed Navbar
  $(".fixed-top").css("top", $(".top-bar").height());
  $(window).scroll(function () {
    if ($(this).scrollTop()) {
      $(".fixed-top").addClass("bg-dark").css("top", 0);
    } else {
      $(".fixed-top").removeClass("bg-dark").css("top", $(".top-bar").height());
    }
  });

  // // Dropdown on mouse hover
  // $(document).ready(function () {
  //     function toggleNavbarMethod() {
  //         if ($(window).width() > 992) {
  //             $('.navbar .dropdown').on('mouseover', function () {
  //                 $('.dropdown-toggle', this).trigger('click');
  //             }).on('mouseout', function () {
  //                 $('.dropdown-toggle', this).trigger('click').blur();
  //             });
  //         } else {
  //             $('.navbar .dropdown').off('mouseover').off('mouseout');
  //         }
  //     }
  //     toggleNavbarMethod();
  //     $(window).resize(toggleNavbarMethod);
  // });

  // Back to top button
  $(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
      $(".back-to-top").fadeIn("slow");
    } else {
      $(".back-to-top").fadeOut("slow");
    }
  });
  $(".back-to-top").click(function () {
    $("html, body").animate({ scrollTop: 0 }, 1500, "easeInOutExpo");
    return false;
  });

  // Date and time picker
  // $('.date').datetimepicker({
  //     format: 'L'
  // });
  // $('.time').datetimepicker({
  //     format: 'LT'
  // });

  // Testimonials carousel
  // $(".testimonial-carousel").owlCarousel({
  //     autoplay: true,
  //     smartSpeed: 1500,
  //     margin: 30,
  //     dots: true,
  //     loop: true,
  //     center: true,
  //     responsive: {
  //         0:{
  //             items:1
  //         },
  //         576:{
  //             items:1
  //         },
  //         768:{
  //             items:2
  //         },
  //         992:{
  //             items:3
  //         }
  //     }
  // });
  // Header carousel
  $(".header-carousel").owlCarousel({
    autoplay: true,
    smartSpeed: 1500,
    loop: true,
    nav: true,
    dots: false,
    items: 1,
    navText: [
      '<i class="bi bi-chevron-left"></i>',
      '<i class="bi bi-chevron-right"></i>',
    ],
  });
  
})(jQuery);

