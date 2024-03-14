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
        arrows:false
      }
    },
    {
      breakpoint: 767,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        arrows:false
      }
    },
    {
      breakpoint: 575,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows:false
      }
    }
  ]
});

$('.slider-principales').slick({
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows:true,
  responsive: [
    {
      breakpoint: 991,
      settings: {
        arrows:false
      }
    },
    {
      breakpoint: 767,
      settings: {
        arrows:false
      }
    },
    {
      breakpoint: 575,
      settings: {
        arrows:false
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});