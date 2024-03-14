$('.resultados-busqueda').slick({
  infinite: true,
  slidesToShow: 4,
  slidesToScroll: 1,
  arros:true,
  responsive: [
    {
      breakpoint: 991,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
      }
    },
    {
      breakpoint: 767,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      }
    },
    {
      breakpoint: 575,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      }
    }
  ]
});

$('.slider-principales').slick({
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows:true
});

$('.resultados-busqueda-v2').slick({
  infinite: true,
  slidesToShow: 2,
  slidesToScroll: 1,
  arrows:true,
  responsive: [
    {
      breakpoint: 991,
      settings: {
        slidesToShow: 1,
      }
    },
    {
      breakpoint: 767,
      settings: {
        slidesToShow: 1,
      }
    },
    {
      breakpoint: 575,
      settings: {
        slidesToShow: 1,
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});

 $('.slider-card').slick({
  slidesToShow: 1,
  slidesToScroll: 5,
  arrows: false,
  asNavFor: '.slider-navbar',
  responsive: [
    {
      breakpoint: 767,
      settings: {
        arrows:true
      }
    }
  ]
});

$('.slider-navbar').slick({
  slidesToShow: 5,
  slidesToScroll: 1,
  dots: true,
  centerMode: true,
  asNavFor: '.slider-card',
  focusOnSelect: true,
  responsive: [
    {
      breakpoint: 991,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows:false
      }
    }
  ]
});