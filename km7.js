//<![CDATA[

jQuery.noConflict();
jQuery(function () {
    jQuery('ul.menu-primary').superfish({
        animation: {
            opacity: 'show'
        },
        autoArrows: true,
        dropShadows: false,
        speed: 200,
        delay: 800
    });
});

jQuery(document).ready(function() {
jQuery('.menu-primary-container').mobileMenu({
    defaultText: 'Menu',
    className: 'menu-primary-responsive',
    containerClass: 'menu-primary-responsive-container',
    subMenuDash: '&ndash;'
});
});

jQuery(document).ready(function() {
var blloc = window.location.href;
jQuery("#pagelistmenusblogul li a").each(function() {
  var blloc2 = jQuery(this).attr('href');
  if(blloc2 == blloc) {
     jQuery(this).parent('li').addClass('current-cat');
  }
});
});

jQuery(function () {
    jQuery('ul.menu-secondary').superfish({
        animation: {
            opacity: 'show'
        },
        autoArrows: true,
        dropShadows: false,
        speed: 200,
        delay: 800
    });
});

jQuery(document).ready(function() {
jQuery('.menu-secondary-container').mobileMenu({
    defaultText: 'Navigation',
    className: 'menu-secondary-responsive',
    containerClass: 'menu-secondary-responsive-container',
    subMenuDash: '&ndash;'
});
jQuery(".post").fitVids();
});

jQuery(document).ready(function () {
    jQuery('.fp-slides').cycle({
        fx: 'scrollHorz',
        timeout: 4000,
        delay: 0,
        speed: 400,
        next: '.fp-next',
        prev: '.fp-prev',
        pager: '.fp-pager',
        continuous: 0,
        sync: 1,
        pause: 1,
        pauseOnPagerHover: 1,
        cleartype: true,
        cleartypeNoBg: true
    });
});

//]]>
