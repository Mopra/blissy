    $( document ).ready(function() {
        /*$('.head-set-one').delay(2000).fadeIn(3000, function () {});
        $('.head-set-two').delay(4000).fadeIn(3000, function () {});
        $('video').delay(0).fadeTo(0,1, function () {
            $(this).delay(13000).fadeTo(5000,1);
        });*/

        /*Materialize rdy stuff*/
        $('.scrollspy').scrollSpy({
            scrollOffset: -100
        });
        $('.modal').modal();
        $('.tooltipped').tooltip({delay: 50});
        $(".nav-open").sideNav();
             
    });
        
        
    $(window).on("load",function() {
        $(window).scroll(function() {
            
        var scrollTop = $(window).scrollTop();
        var height = $(window).height();
            
        $('#vid-head').css({
            'opacity': ((height - scrollTop) / height)
        });
            
        var windowBottom = $(this).scrollTop() + $(this).innerHeight();
            $(".fade").each(function() {
              /* Check the location of each desired element */
              var objectBottom = $(this).offset().top + ($(this).outerHeight() * 0);

              /* If the element is completely within bounds of the window, fade it in */
              if (objectBottom < windowBottom) { //object comes into view (scrolling down)
                if ($(this).css("opacity")==0) {$(this).fadeTo(700,1);}
              } else { //object goes out of view (scrolling up)
                if ($(this).css("opacity")==1) {$(this).fadeTo(700,0);}
              }
            });
        }).scroll(); //invoke scroll-handler on page-load
    });