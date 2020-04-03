jQuery.noConflict();

jQuery(document).ready(function($) {
	"use strict";
    
    // Parse the URL
    function getParameterByName(name) {
        name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
        var regex = new RegExp("[\\?&amp;]" + name + "=([^&amp;#]*)"),
            results = regex.exec(location.search);
        return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
    }
    // Give the URL parameters variable names
    var source = getParameterByName('utm_source');
    var medium = getParameterByName('utm_medium');
    var campaign = getParameterByName('utm_campaign');
    var content = getParameterByName('utm_content');
    var utms = "?utm_source="+source+"&utm_medium="+medium+"&utm_campaign="+campaign+"&utm_content="+content;
    
    //console.log(utms);
    
    Cookies.set('utms', utms, { expires: 90 });
    
});