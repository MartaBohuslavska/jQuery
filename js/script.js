$(document).ready(function() {

  $('.nav-tabs li').click(function() {
      $('.nav-tabs li').removeClass('active');
      $(this).addClass('active');
      $('.tab-pane').hide();

      var tab = $(this).find('a').attr("href");
      $(tab).fadeIn();
      return false;
  });

  $('.slider').slick({
      dots: true,
      arrows: false,
      slidesToShow: 4,
      slidesToScroll: 4,
      responsive: [{
              breakpoint: 1200,
              settings: {
                  slidesToShow: 3,
                  slidesToScroll: 3
              }
          },
          {
              breakpoint: 830,
              settings: {
                  slidesToShow: 2,
                  slidesToScroll: 2
              }
          },
          {
              breakpoint: 560,
              settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1
              }
          }
      ]
  });
});