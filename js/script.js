$(document).ready(function () {
  // модалка
  $('.modal').click(function (event) {
    if ($(event.target).closest(".modal>.block").length)
      return;
    $(".modal>.block, .modal").fadeOut(100);
    $('html, body').css({
      overflow: 'auto'
    });
    event.stopPropagation();
  });
  $('.modal .close').click(function () {
    $('.modal, .modal>.block').fadeOut(100);
    $('html, body').css({
      overflow: 'auto'
    });
  });
  $('[data-modal]').on('click', function () {
    var dataModal = $(this).attr('data-modal'),
      dataId = $('#' + dataModal);
    dataId.fadeIn(100);
    $(dataId).find('.block').fadeIn(100);
    $('html, body').css({
      overflow: 'hidden'
    });
  });

  // табы
  $(function () {
    $('[data-tabLinks]').on('click', function () {
      var targetNode = $('[data-tabContent=' + $(this).attr('data-tabLinks') + ']');
      $(this).parent().find('[data-tabLinks]').removeClass('active').filter(this).addClass('active');
      targetNode.parent().find('[data-tabContent]').hide().filter(targetNode).show();
      $('.gallery_slider_1, .gallery_slider_2, .gallery_slider_3, .gallery_slider_4').slick('setPosition');
    });
    $('[data-tabLinks]').parent().find('[data-tabLinks]').filter(':first-child').trigger('click');
  });

  // якоря
  $("[data-href]").on("click", function (t) {
    var anchor = $(this).data('href');
    $("html, body").stop().animate({
      scrollTop: $("[data-anchor=" + anchor + "]").offset().top
    }, 700);
    t.preventDefault();
  });

  // гамбургер
  $('.hamburger').on('click', function () {
    $('.hamburger, .main_menu').toggleClass('open');
  });
  // поиск
  $('.open_form').on('click', function () {
    $('.search_form').fadeToggle();
  });
  // галерея
  $(".gellery_item").fancybox({
    openEffect: 'elastic',
    closeEffect: 'elastic'
  });
  // прокрутка
  wow = new WOW({
    mobile: false
  })
  wow.init();
  // слайдер
  $('.gallery_big').slick({
    dots: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    appendDots: $('.gallery_big_dots'),
    prevArrow: $('.gallery_big_controls .prev'),
    nextArrow: $('.gallery_big_controls .next'),
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        }
            },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
            },
      {
        breakpoint: 580,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
            }
        ]
  });
  $('.slider_why_us').slick({
    arrows: false,
    dots: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    appendDots: $('.dots_why_us'),
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        }
            },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        }
            },
      {
        breakpoint: 580,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
            }
        ]
  });
  $('.slider_shares').slick({
    arrows: false,
    dots: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    appendDots: $('.dots_shares'),
    responsive: [
      {
        breakpoint: 1023,
        settings: {
          slidesToShow: 3
        }
            },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2
        }
            },
      {
        breakpoint: 580,
        settings: {
          slidesToShow: 1
        }
            }
        ]
  });
  $('.slider_gallery').slick({
    arrows: false,
    dots: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    appendDots: $('.dots_gallery'),
    responsive: [
      {
        breakpoint: 1023,
        settings: {
          slidesToShow: 3
        }
            },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2
        }
            },
      {
        breakpoint: 580,
        settings: {
          slidesToShow: 1
        }
            }
        ]
  });
  $('.gallery_slider_1').slick({
    arrows: false,
    dots: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    appendDots: $('.gallery_slider_1_dots'),
    responsive: [
      {
        breakpoint: 1023,
        settings: {
          slidesToShow: 3
        }
            },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 2
        }
            }
        ]
  });
  $('.gallery_slider_2').slick({
    arrows: false,
    dots: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    appendDots: $('.gallery_slider_2_dots'),
    responsive: [
      {
        breakpoint: 1023,
        settings: {
          slidesToShow: 3
        }
            },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 2
        }
            }
        ]
  });
  var slideResize = function () {
    if ($(window).width() <= 1280) {
      $('.slider_why_us').slick('init');
    } else {
      $('.slider_why_us').slick('unslick');
    };
    if ($(window).width() <= 1024) {
      $('.slider_shares, .slider_gallery, .gallery_slider_1, .gallery_slider_2, .gallery_slider_3, .gallery_slider_4').slick('init');
    } else {
      $('.slider_shares, .slider_gallery, .gallery_slider_1, .gallery_slider_2, .gallery_slider_3, .gallery_slider_4').slick('unslick');
    };

    wow = new WOW({
      mobile: false
    })
    wow.init();
  };
  $(window).on('load resize', function () {
    slideResize();
  });

});