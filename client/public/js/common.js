jQuery(function($) {
  "use strict";
  $(document).ready(function() {
    $('.resize').resizeToParent();
    var nav = priorityNav.init();


    $(".dot").dotdotdot({
      wrap: 'letter',
      watch: true,
    });

    if ($('.back-to-top').length) {
      var scrollTrigger = 100, // px
        backToTop = function() {
          var scrollTop = $(window).scrollTop();
          if (scrollTop > scrollTrigger) {
            $('.back-to-top').addClass('show');
          } else {
            $('.back-to-top').removeClass('show');
          }
        };
      backToTop();
      $(window).on('scroll', function() {
        backToTop();
      });
      $('.back-to-top').on('click', function(e) {
        e.preventDefault();
        $('html,body').animate({
          scrollTop: 0
        }, 700);
      });
    };

    // add arrow to top menu
    $('.submenu').closest('li').find('span a, span .no_l').append(
      '<i class=\"fa fa-angle-down\"></i>');
  });
});
