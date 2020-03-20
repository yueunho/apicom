/* btn slide toggle */
  $(".btn-slide").click(function(){
    $("#slide-panel").slideToggle("fast");
    $(this).toggleClass("active"); return false;
  });

/* btn toggle */
$(".btn-toggle").click(function(){
		$(".reply-box").toggle();
	});

	$(document).ready(function(){
	$(".btn-toggle-close").click(function(){
		$(".reply-box").toggle();
	});
});

/* inner both*/
var maxItemHeight = 0; // Default max height value

    function itemResize() {
        // Find the biggest (in height) item
        $(".inner-both").each(function () {
            if ($(this).height() > maxItemHeight) {
                maxItemHeight = $(this).height();
            }
        });

        // Set each item to the biggest item's height
        $(".inner-both").each(function () {
            $(this).height(maxItemHeight);
        });
    }

 // Initial resize in window.load as the content in each item may contain images
    $(window).load(function () {
        // Resize all items
        itemResize();
    });

 // Since content size may change during window resizing, perform resize on window.resize
    $(window).resize(function () {
        maxItemHeight = 0; // Reset max height value

       // Reset all items to default height
        $(".inner-both").each(function () {
            $(this).css("height", "auto");
        });
     // Resize all items
        itemResize();
    });

/*
$(document).ready(function() {
	   var maxHeight = -1;

	   $('.inner-both').each(function() {
		 maxHeight = maxHeight > $(this).height() ? maxHeight : $(this).height();
	   });

	   $('.inner-both').each(function() {
		 $(this).height(maxHeight);
	   });
	 });
*/
$(document).ready(function() {
	   var maxHeight = -1;

	   $('.keyword-both').each(function() {
		 maxHeight = maxHeight > $(this).height() ? maxHeight : $(this).height();
	   });

	   $('.keyword-both').each(function() {
		 $(this).height(maxHeight);
	   });
	 });

$(document).ready(function() {
	   var maxHeight = -1;

	   $('.trend-notice-both').each(function() {
		 maxHeight = maxHeight > $(this).height() ? maxHeight : $(this).height();
	   });

	   $('.trend-notice-both').each(function() {
		 $(this).height(maxHeight);
	   });
	 });

$(document).ready(function() {
	   var maxHeight = -1;

	   $('.trend-notice-both2').each(function() {
		 maxHeight = maxHeight > $(this).height() ? maxHeight : $(this).height();
	   });

	   $('.trend-notice-both2').each(function() {
		 $(this).height(maxHeight);
	   });
	 });

(function ($) {
    "use strict";
    $(document).ready(function () {
        /*==Left Navigation Accordion ==*/
        if ($.fn.dcAccordion) {
            $('#nav-accordion').dcAccordion({
                eventType: 'click',
                autoClose: false,
                saveState: true,
                disableLink: true,
                speed: 'fast',
                showCount: false,
                autoExpand: true,
                classExpand: 'dcjq-current-parent'
            });
        }
        /*==Slim Scroll ==*/
        if ($.fn.slimScroll) {
            $('.event-list').slimscroll({
                height: '305px',
                wheelStep: 20
            });
            $('.conversation-list').slimscroll({
                height: '360px',
                wheelStep: 35
            });
            $('.to-do-list').slimscroll({
                height: '300px',
                wheelStep: 35
            });
        }
        /*==Nice Scroll ==*/
        if ($.fn.niceScroll) {


            $(".leftside-navigation").niceScroll({
                cursorcolor: "#0057bb",
                cursorborder: "0px solid #fff",
                cursorborderradius: "0px",
                cursorwidth: "3px"
            });

            $(".leftside-navigation").getNiceScroll().resize();
            if ($('#sidebar').hasClass('hide-left-bar')) {
                $(".leftside-navigation").getNiceScroll().hide();
            }
            $(".leftside-navigation").getNiceScroll().show();

            $(".right-stat-bar").niceScroll({
                cursorcolor: "#0057bb",
                cursorborder: "0px solid #fff",
                cursorborderradius: "0px",
                cursorwidth: "3px"
            });

        }



        /*==Collapsible==*/
        $('.widget-head').click(function (e) {
            var widgetElem = $(this).children('.widget-collapse').children('i');

            $(this)
                .next('.widget-container')
                .slideToggle('slow');
            if ($(widgetElem).hasClass('ico-minus')) {
                $(widgetElem).removeClass('ico-minus');
                $(widgetElem).addClass('ico-plus');
            } else {
                $(widgetElem).removeClass('ico-plus');
                $(widgetElem).addClass('ico-minus');
            }
            e.preventDefault();
        });




        /*==Sidebar Toggle==*/
        $('.sidebar-toggle-box .fa-angle-right').click(function (e) {

            $(".leftside-navigation").niceScroll({
                cursorcolor: "#0057bb",
                cursorborder: "0px solid #fff",
                cursorborderradius: "0px",
                cursorwidth: "3px"
            });


            $('#sidebar').toggleClass('hide-left-bar');
            if ($('#sidebar').hasClass('hide-left-bar')) {
                $(".leftside-navigation").getNiceScroll().hide();
            }
            $(".leftside-navigation").getNiceScroll().show();
            $('#main-content').toggleClass('merge-left');
            e.stopPropagation();
            if ($('#container').hasClass('open-right-panel')) {
                $('#container').removeClass('open-right-panel')
            }
            if ($('.right-sidebar').hasClass('open-right-bar')) {
                $('.right-sidebar').removeClass('open-right-bar')
            }

            if ($('.header').hasClass('merge-header')) {
                $('.header').removeClass('merge-header')
			}
			/*==Sidebar Toggle icon==*/
			if ($(this).hasClass("fa-angle-left")) {
                $(this).removeClass("fa-angle-left").addClass("fa-angle-right");
            } else {
                $(this).removeClass("fa-angle-right").addClass("fa-angle-left");
		  }


        });
        $('.toggle-right-box .fa-chevron-right').click(function (e) {
            $('#container').toggleClass('open-right-panel');
            $('.right-sidebar').toggleClass('open-right-bar');
            $('.header').toggleClass('merge-header');

            e.stopPropagation();
        });



        $('.header,#main-content,#sidebar').click(function () {
            if ($('#container').hasClass('open-right-panel')) {
                $('#container').removeClass('open-right-panel')
            }
            if ($('.right-sidebar').hasClass('open-right-bar')) {
                $('.right-sidebar').removeClass('open-right-bar')
            }

            if ($('.header').hasClass('merge-header')) {
                $('.header').removeClass('merge-header')
            }


        });


        $('.panel .tools .fa').click(function () {
            var el = $(this).parents(".panel").children(".panel-body");
            if ($(this).hasClass("fa-chevron-down")) {
                $(this).removeClass("fa-chevron-down").addClass("fa-chevron-up");
                el.slideUp(200);
            } else {
                $(this).removeClass("fa-chevron-up").addClass("fa-chevron-down");
                el.slideDown(200); }
        });




        $('.panel .tools .fa-times').click(function () {
            $(this).parents(".panel").parent().remove();
        });

        // tool tips

        $('.tooltips').tooltip();

        // popovers

        $('.popovers').popover();


    });


})(jQuery);




//faq
$(document).ready(function(){
 // Hiding the panel content. If JS is inactive, content will be displayed
		$( '.panel-content' ).hide();

		// Preparing the DOM

		// -- Update the markup of accordion container
		$( '.accordion' ).attr({
			role: 'tablist',
			multiselectable: 'true'
		 });

		// -- Adding ID, aria-labelled-by, role and aria-labelledby attributes to panel content
		$( '.panel-content' ).attr( 'id', function( IDcount ) {
			return 'panel-' + IDcount;
		});
		$( '.panel-content' ).attr( 'aria-labelledby', function( IDcount ) {
			return 'control-panel-' + IDcount;
		});
		$( '.panel-content' ).attr( 'aria-hidden' , 'true' );
		// ---- Only for accordion, add role tabpanel
		$( '.accordion .panel-content' ).attr( 'role' , 'tabpanel' );

		// -- Wrapping panel title content with a <a href="">
		$( '.panel-title' ).each(function(i){

			// ---- Need to identify the target, easy it's the immediate brother
			$target = $(this).next( '.panel-content' )[0].id;

			// ---- Creating the link with aria and link it to the panel content
			$link = $( '<a>', {
				'href': '#' + $target,
				'aria-expanded': 'false',
				'aria-controls': $target,
				'id' : 'control-' + $target
			});

			// ---- Output the link
			$(this).wrapInner($link);

		});

		// Optional : include an icon. Better in JS because without JS it have non-sense.
		$( '.panel-title a' ).append('<span class="icon">+</span>');

		// Now we can play with it
		$( '.panel-title a' ).click(function() {

			if ($(this).attr( 'aria-expanded' ) == 'false'){ //If aria expanded is false then it's not opened and we want it opened !

				// -- Only for accordion effect (2 options) : comment or uncomment the one you want

				// ---- Option 1 : close only opened panel in the same accordion
				//      search through the current Accordion container for opened panel and close it, remove class and change aria expanded value
				$(this).parents( '.accordion' ).find( '[aria-expanded=true]' ).attr( 'aria-expanded' , false ).removeClass( 'active' ).parent().next( '.panel-content' ).slideUp(200).attr( 'aria-hidden' , 'true');

				// Option 2 : close all opened panels in all accordion container
				//$('.accordion .panel-title > a').attr('aria-expanded', false).removeClass('active').parent().next('.panel-content').slideUp(200);

				// Finally we open the panel, set class active for styling purpos on a and aria-expanded to "true"
				$(this).attr( 'aria-expanded' , true ).addClass( 'active' ).parent().next( '.panel-content' ).slideDown(200).attr( 'aria-hidden' , 'false');

			} else { // The current panel is opened and we want to close it

				$(this).attr( 'aria-expanded' , false ).removeClass( 'active' ).parent().next( '.panel-content' ).slideUp(200).attr( 'aria-hidden' , 'true');;

			}
			// No Boing Boing
			return false;
		});

});

