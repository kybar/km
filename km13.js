jQuery(document).ready(function($){
                $(&quot;.tabs-widget-content-widget-themater_tabs-1432447472-id&quot;).hide();
            	$(&quot;ul.tabs-widget-widget-themater_tabs-1432447472-id li:first a&quot;).addClass(&quot;tabs-widget-current&quot;).show();
            	$(&quot;.tabs-widget-content-widget-themater_tabs-1432447472-id:first&quot;).show();
       
            	$(&quot;ul.tabs-widget-widget-themater_tabs-1432447472-id li a&quot;).click(function() {
            		$(&quot;ul.tabs-widget-widget-themater_tabs-1432447472-id li a&quot;).removeClass(&quot;tabs-widget-current a&quot;); 
            		$(this).addClass(&quot;tabs-widget-current&quot;); 
            		$(&quot;.tabs-widget-content-widget-themater_tabs-1432447472-id&quot;).hide(); 
            	    var activeTab = $(this).attr(&quot;href&quot;); 
            	    $(activeTab).fadeIn();
            		return false;
            	});
            });
