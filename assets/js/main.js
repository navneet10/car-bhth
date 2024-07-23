(function ($) {
  "use strict";
   

  /*----------  On Load Function ----------*/
  $(window).on('load', function () {
    $('.preloader').fadeOut();
  });

  
  /*----------   Preloader ----------*/
  if ($('.preloader').length > 0) {
    $('.preloaderCls').each(function () {
      $(this).on('click', function (e) {
        e.preventDefault();
        $('.preloader').css('display', 'none');
      })
    });
  };

 
   /*----------   Sticky fix ----------*/
   $(window).on("scroll", function () {
    var topPos = $(this).scrollTop();
    sticky()
    if (topPos > 150) {
        $('.sticky-wrapper').addClass('will-sticky')
        sticky()
    } else {
        $('.sticky-wrapper').removeClass('sticky')
        $('.sticky-wrapper').removeClass('will-sticky')
    }

    function sticky() {
        if (topPos > 400) {
            $('.sticky-wrapper').addClass('sticky')
            $('.sticky-wrapper').removeClass('will-sticky')
        }
    }
})
 
/*----------  Set Background Image ----------*/
 
 
  if ($('[data-bg-src]').length > 0) {
    $('[data-bg-src]').each(function () {
      var src = $(this).attr('data-bg-src');
      $(this).css('background-image', 'url(' + src + ')');
      $(this).removeAttr('data-bg-src').addClass('background-image');
    });
  };
  // Mask Image
  if ($('[data-mask-src]').length > 0) {
    $('[data-mask-src]').each(function () {
      var mask = $(this).attr('data-mask-src');
      $(this).css({
        'mask-image': 'url(' + mask + ')',
        '-webkit-mask-image': 'url(' + mask + ')'
      });
      $(this).removeAttr('data-mask-src');
    });
  };

  /*----------- Home page Global Slider ----------*/
  $('.th-carousel').each(function () {
    var asSlide = $(this);

    // Collect Data 
    function d(data) {
      return asSlide.data(data);
    }

    // Custom Arrow Button
    var prevButton = '<button type="button" class="slick-prev"><i class="' + d('prev-arrow') + '"></i></button>',
      nextButton = '<button type="button" class="slick-next"><i class="' + d('next-arrow') + '"></i></button>';

    // Function For Custom Arrow Btn 
    $('[data-slick-next]').each(function () {
      $(this).on('click', function (e) {
        e.preventDefault()
        $($(this).data('slick-next')).slick('slickNext');
      })
    })

    $('[data-slick-prev]').each(function () {
      $(this).on('click', function (e) {
        e.preventDefault()
        $($(this).data('slick-prev')).slick('slickPrev');
      })
    })

    // Check for arrow wrapper
    if (d('arrows') == true) {
      if (!asSlide.closest('.arrow-wrap').length) {
        asSlide.closest('.container').parent().addClass('arrow-wrap')
      }
    }


    asSlide.slick({
      dots: (d('dots') ? true : false),
      fade: (d('fade') ? true : false),
      arrows: (d('arrows') ? true : false),
      speed: (d('speed') ? d('speed') : 1000),
      asNavFor: (d('asnavfor') ? d('asnavfor') : false),
      autoplay: ((d('autoplay') == false) ? false : true),
      infinite: ((d('infinite') == false) ? false : true),
      slidesToShow: (d('slide-show') ? d('slide-show') : 1),
      adaptiveHeight: (d('adaptive-height') ? true : false),
      centerMode: (d('center-mode') ? true : false),
      autoplaySpeed: (d('autoplay-speed') ? d('autoplay-speed') : 8000),
      centerPadding: (d('center-padding') ? d('center-padding') : '0'),
      focusOnSelect: ((d('focuson-select') == false) ? false : true),
      pauseOnFocus: (d('pauseon-focus') ? true : false),
      pauseOnHover: (d('pauseon-hover') ? true : false),
      variableWidth: (d('variable-width') ? true : false),
      vertical: (d('vertical') ? true : false),
      verticalSwiping: (d('vertical') ? true : false),
      prevArrow: (d('prev-arrow') ? prevButton : '<button type="button" class="slick-prev"><i class="far fa-arrow-left"></i></button>'),
      nextArrow: (d('next-arrow') ? nextButton : '<button type="button" class="slick-next"><i class="far fa-arrow-right"></i></button>'),
      rtl: ($('html').attr('dir') == 'rtl') ? true : false,
      responsive: [{
          breakpoint: 1600,
          settings: {
            arrows: (d('xl-arrows') ? true : false),
            dots: (d('xl-dots') ? true : false),
            slidesToShow: (d('xl-slide-show') ? d('xl-slide-show') : d('slide-show')),
            centerMode: (d('xl-center-mode') ? true : false),
            centerPadding: 0
          }
        }, {
          breakpoint: 1400,
          settings: {
            arrows: (d('ml-arrows') ? true : false),
            dots: (d('ml-dots') ? true : false),
            slidesToShow: (d('ml-slide-show') ? d('ml-slide-show') : d('slide-show')),
            centerMode: (d('ml-center-mode') ? true : false),
            centerPadding: 0
          }
        }, {
          breakpoint: 1200,
          settings: {
            arrows: (d('lg-arrows') ? true : false),
            dots: (d('lg-dots') ? true : false),
            slidesToShow: (d('lg-slide-show') ? d('lg-slide-show') : d('slide-show')),
            centerMode: (d('lg-center-mode') ? d('lg-center-mode') : false),
            centerPadding: 0
          }
        }, {
          breakpoint: 992,
          settings: {
            arrows: (d('md-arrows') ? true : false),
            dots: (d('md-dots') ? true : false),
            slidesToShow: (d('md-slide-show') ? d('md-slide-show') : 1),
            centerMode: (d('md-center-mode') ? d('md-center-mode') : false),
            centerPadding: 0
          }
        }, {
          breakpoint: 768,
          settings: {
            arrows: (d('sm-arrows') ? true : false),
            dots: (d('sm-dots') ? true : false),
            slidesToShow: (d('sm-slide-show') ? d('sm-slide-show') : 1),
            centerMode: (d('sm-center-mode') ? d('sm-center-mode') : false),
            centerPadding: 0
          }
        }, {
          breakpoint: 576,
          settings: {
            arrows: (d('xs-arrows') ? true : false),
            dots: (d('xs-dots') ? true : false),
            slidesToShow: (d('xs-slide-show') ? d('xs-slide-show') : 1),
            centerMode: (d('xs-center-mode') ? d('xs-center-mode') : false),
            centerPadding: 0
          }
        }
 
      ]
    });

  });

 

 

  /*-----------   Date Time Picker ----------*/
  // Only Date Picker
  $('.date-pick').datetimepicker({
    timepicker: false,
    datepicker: true,
    format: 'd-m-y',
    step: 10
  });

  // Only Time Picker
  $('.time-pick').datetimepicker({
    datepicker:false,
    format:'H:i',
    step:30
  });

     //======wow js======= 
     new WOW().init();


  /*-----------  Counter Up ----------*/ 
  $('.counter-number').counterUp({
    delay: 10,
    time: 1000
  });

 
  /*----------  Section Position ----------*/
  // Interger Converter
  function convertInteger(str) {
    return parseInt(str, 10)
  }
   

  /*-----------   Shape Mockup ----------*/
  $.fn.shapeMockup = function () {
    var $shape = $(this);
    $shape.each(function() {
      var $currentShape = $(this),
      shapeTop = $currentShape.data('top'),
      shapeRight = $currentShape.data('right'),
      shapeBottom = $currentShape.data('bottom'),
      shapeLeft = $currentShape.data('left');
      $currentShape.css({
        top: shapeTop,
        right: shapeRight,
        bottom: shapeBottom,
        left: shapeLeft,
      }).removeAttr('data-top')
      .removeAttr('data-right')
      .removeAttr('data-bottom')
      .removeAttr('data-left')
      .parent().addClass('shape-mockup-wrap');
    });
  };

  if ($('.shape-mockup')) {
    $('.shape-mockup').shapeMockup();
  }

  // Set position when click on bootstrap Tab
  $('[data-bs-toggle="tab"]').on('shown.bs.tab', function (e) {
    $('.th-carousel').slick('setPosition');
  })

  
})(jQuery);