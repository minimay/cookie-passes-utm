jQuery.noConflict();

jQuery(document).ready(function($) {
	"use strict";
    
    /*$('a:not(.tel)').each(function() {
        var querystring = window.location.search.substring(1);
        var href = $(this).attr('href');

        if (href) {
            href += (href.match(/\?/) ? '&' : '?') + querystring;
            $(this).attr('href', href);
        }
    });*/
    
    function setHeight() {
        var the_height;
        var the_width;
        var bkgd_width; 
        var bkgd_height;
        
        the_height = jQuery(window).height();
        the_width = jQuery(window).width();
        
        bkgd_width = the_width/1280; //width of bkgd img
        bkgd_height = bkgd_width*708; //height of bkgd img
        $(".header").css( 'height', bkgd_height );
        
    }
    
    setHeight();

    jQuery(window).resize(function() {
        setHeight();
    });
    
    $(window).scroll(function() {
        var height = $(window).scrollTop();
        if (height > 100) {
            $('#top').fadeIn();
        } else {
            $('#top').fadeOut();
        }
    });
    $(document).ready(function() {
        $("#top").click(function(event) {
            event.preventDefault();
            $("html, body").animate({ scrollTop: 0 }, "slow");
            return false;
        });

    });
    
    $(document).ready(function() { 
        var fullString = Cookies.get("utms");
        var myurl = 'https://gradadmission.jcu.edu/register/?id=8a452f1a-7174-4010-8e6f-42c4150b2295';
        //console.log(fullString);
        $('a#learn-more').attr('href', function() {
            return myurl + '&' + fullString;
        });
    });
  
    
});