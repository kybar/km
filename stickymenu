//<![CDATA[
$(document).ready(function() {
    // Determine which element that to be created sticky, is .nav
    var stickyNavTop = $('#nav').offset().top; 
    var stickyNav = function(){
        var scrollTop = $(window).scrollTop();  
        // Conditions when scrolling the navigation menu will always be on above, and vice versa        
        if (scrollTop > stickyNavTop) { 
            $('#nav').css({ 'position': 'fixed', 'top':0, 'z-index':9999 });
        } else {
            $('#nav').css({ 'position': 'relative' });
        }
    };
    // Execute function
    stickyNav();
    $(window).scroll(function() {
        stickyNav();
    });
});
//]]>
