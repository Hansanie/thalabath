/*

Template: 
Author: potenzaglobalsolutions.com
Version: 1.0  
Design and Developed by: potenzaglobalsolutions.com

NOTE:  

*/



/*================================================
[  Table of contents  ]
================================================

 

 
======================================
[ End table content ]
======================================*/
 
//POTENZA var
var POTENZA = {};
 
 (function($){
  "use strict";

/*************************
      Predefined Variables
*************************/ 
  var $window = $(window),
        $document = $(document),
        $body = $('body');
    //Check if function exists
     $.fn.exists = function () {
        return this.length > 0;
    };
/*************************
        Preloader
*************************/  
 POTENZA.preloader = function () {
       $("#load").fadeOut();
       $('#loading').delay(0).fadeOut('slow');
   };

 
   /*************************
       owl-carousel 
*************************/
 POTENZA.carousel = function () {
    $(".owl-carousel").each(function () {
        var $this = $(this),
            $items = ($this.data('items')) ? $this.data('items') : 1,
            $loop = ($this.data('loop')) ? $this.data('loop') : true,
            $navdots = ($this.data('nav-dots')) ? $this.data('nav-dots') : false,
            $speed = ($this.data('speed')) ? $this.data('speed') : 700,
            $navarrow = ($this.data('nav-arrow')) ? $this.data('nav-arrow') : false,
            $autoplay = ($this.attr('data-autoplay')) ? $this.data('autoplay') : true,
            $space = ($this.attr('data-space')) ? $this.data('space') : 0; 
            $(this).owlCarousel({
                loop: $loop,
                items: $items,
                responsive: {
                  0:{items: $this.data('xx-items') ? $this.data('xx-items') : 1},
                  480:{items: $this.data('xs-items') ? $this.data('xs-items') : 1},
                  768:{items: $this.data('sm-items') ? $this.data('sm-items') : 2},
                  992:{items: $this.data('md-items') ? $this.data('md-items') : 3},
                  1200:{items: $items}
                },
                dots: $navdots,
                margin:$space,
                smartSpeed:$speed,
                nav: $navarrow,
                navText:["<i class='fa fa-angle-left fa-2x'></i>","<i class='fa fa-angle-right fa-2x'></i>"],
                autoplay: $autoplay,
                autoplayHoverPause: true   
            }); 
    });

}
 
   /*************************
       owl-carousel 
*************************/
 POTENZA.menutoptoggle = function () {

$.fn.extend({
   // Define the threeBarToggle function by extending the jQuery object
  threeBarToggle: function(options){
    // Set the default options
    var defaults = {
      color: '#870027',
      width: 30,
      height: 25,
      speed: 400,
      animate: true
    }
    var options = $.extend(defaults, options); 
    return this.each(function(){
      $(this).empty().css({'width': options.width, 'height': options.height, 'background': 'transparent'});
      $(this).addClass('tb-menu-toggle');
      $(this).prepend('<i></i><i></i><i></i>').on('click', function(event) {
        event.preventDefault();
        $(this).toggleClass('tb-active-toggle');
        if (options.animate) { $(this).toggleClass('tb-animate-toggle'); }
        $('.tb-mobile-menu').slideToggle(options.speed);
      });
      $(this).children().css('background', options.color);
    });
  },
    // Define the accordionMenu() function that adds the sliding functionality
  accordionMenu: function(options){
    // Set the default options
    var defaults = {
      speed: 400
    }
    var options =  $.extend(defaults, options);
    return this.each(function(){
       $(this).addClass('tb-mobile-menu');
      var menuItems = $(this).children('li');
      menuItems.find('.sub-menu').parent().addClass('tb-parent');
      $('.tb-parent ul').hide();
      $('.tb-parent > a').on('click', function(event) {
        event.stopPropagation();
        event.preventDefault();
        $(this).siblings().slideToggle(options.speed);
      });
      
    });
  }
});
// Convert any element into a three bar toggle
// Optional arguments are 'speed' (number in ms, 'slow' or 'fast') and 'animation' (true or false) to disable the animation on the toggle
$('#menu-toggle').threeBarToggle({});
// Make any nested ul-based menu mobile
// Optional arguments are 'speed' and 'accordion' (true or false) to disable the behavior of closing other sub
$('#menu').accordionMenu();

   }
 
 
  
/****************************************************
     POTENZA Window load and functions
****************************************************/
  //Window load functions
    $window.load(function () {
          POTENZA.preloader();
    });
  //Document ready functions
    $document.ready(function () {  
        POTENZA.menutoptoggle(),
        POTENZA.carousel()
   
 
 
    });
})(jQuery);
 