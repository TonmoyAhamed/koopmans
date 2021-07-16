$(document).ready(function(){
    $(".banner-slider").owlCarousel({
        items: 1,
        dots: true,
        dotsData: true,
        nav:true
    });
   var  $grid= $('.portfolio-item').isotope({
        itemSelector: '.grid-item',
        percentPosition: true,
        masonry: {
          columnWidth: '.grid-sizer'
        }
      });
      // filter items on button click
      $('.project-menu').on( 'click', 'li', function() {
        var filterValue = $(this).attr('data-filter');
        $grid.isotope({ filter: filterValue });
      });
      $(".page2-banner-slider2").owlCarousel({
        items:1
      });
      $(".service-slider").owlCarousel({
        items:4,
        loop:true,
        margin: 15,
        dots: false,
        nav: true,
        navText: ['<i class="fas fa-chevron-left"></i>','<i class="fas fa-chevron-right"></i>'],
        responsive:{
          0:{
              items:1
          },
          600:{
              items:4
          },
          1000:{
              items:5
          }
      }
      });
      $(".team2-slider").owlCarousel({
        items:1
      });
      $(".project-banner-slider").owlCarousel({
        items:1,
        nav: true,
        navText: ['<i class="fas fa-chevron-left"></i>','<i class="fas fa-chevron-right"></i>'],
      });
      $('#main-nav').hcOffcanvasNav({
        disableAt: false,
        customToggle: $('.toggles'),
        navTitle: 'Menu',
        levelTitles: true,
        levelTitleAsBack: true
      });
  });