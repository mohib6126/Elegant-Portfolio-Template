//////////////// Menu JS//////////////////
function show(){
    document.querySelector('.hamburger').classList.toggle('open')
    document.querySelector('.navigation').classList.toggle('active');
     }
    

//////////////// Smooth Scroll JS//////////////////
	"use strict";
jQuery(function($){
    smoothScroll.init({
        speed:900,
        easing:'easeInOutQuad',
        updateURL:false,
        offset:0
    });
});

//////////////// Banner JS//////////////////
var typed = new Typed(".auto-type", {
    strings: ["Web Developer", "Graphic Designer"],
    typeSpeed: 100,
    backSpeed: 50,
    loop: true,
});


//////////////// Skill JS//////////////////
$('document').ready(function() {
	"use strict";
    $('.meter div').each(function () {
        $(this).animate({
            width: this.title,
        }, {
            duration: 2000
        });
    });
});

//////////////// Testimonial JS //////////////////
(function ($) {
    'use strict';
jQuery(document).ready(function () {
        $(".testimonial").owlCarousel({
            items: 1,
            autoPlay: true,
             itemsDesktop: [1199, 1],
            itemsDesktopSmall: [980, 1],
            itemsTablet: [768, 1],
            itemsTabletSmall: false,
            itemsMobile: [479, 1],
            pagination: true,
            autoHeight: true,
            navigationText: ['<i class="fa fa-long-arrow-left"></i>', '<i class="fa fa-long-arrow-right"></i>']
        }); 
    });
})(jQuery);
 
 


//////////////// Counter JS //////////////////
jQuery(document).ready(function( $ ) {
    $('.counter').counterUp({
        delay: 10,
        time: 1000
    });
});
 

//////////////// Portfolio JS //////////////////
$('.portfolio-item').isotope({
    itemSelector: '.item',
    layoutMode: 'fitRows'
});
$('.portfolio-menu ul li').click(function(){
    $('.portfolio-menu ul li').removeClass('active');
    $(this).addClass('active');

    let selector = $(this).attr('data-filter');
    $('.portfolio-item').isotope({
        filter: selector
    });
    return flase;
});

//////////////// Isotope JS //////////////////
$('.grid').isotope({
    // options
    itemSelector: '.grid-item',
    layoutMode: 'fitRows'
});
 // init Isotope
var $grid = $('.grid').isotope({
    // options
});
  // filter items on button click
$('.filter-button-group').on( 'click', 'button', function() {
    var filterValue = $(this).attr('data-filter');
    $grid.isotope({ filter: filterValue });
});


//////////////// Light Box JS //////////////////
var lightbox = GLightbox();
    lightbox.on('open', (target) => {
        console.log('lightbox opened');
    });
var lightboxDescription = GLightbox({
        selector: '.glightbox2'
    });
var lightboxVideo = GLightbox({
        selector: '.glightbox3'
    });
lightboxVideo.on('slide_changed', ({ prev, current }) => {
    console.log('Prev slide', prev);
    console.log('Current slide', current);

    const { slideIndex, slideNode, slideConfig, player } = current;

    if (player) {
        if (!player.ready) {
            // If player is not ready
            player.on('ready', (event) => {
                // Do something when video is ready
            });
        }

        player.on('play', (event) => {
                console.log('Started play');
        });

        player.on('volumechange', (event) => {
            console.log('Volume change');
        });

        player.on('ended', (event) => {
            console.log('Video ended');
        });
    }
});
var lightboxInlineIframe = GLightbox({
    selector: '.glightbox4'
});



