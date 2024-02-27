$(document).ready(function(){
    $( function() {
        var productsList = [
            "Bags",
            "Shoes",
            "Clothing",
            "Accessories",
            "Jewelry",
            "Watches",
            "Sunglasses",
            "Hats",
            "Belts",
            "Travel Books",
            "Language Learning",
            "Travel Insurance",
            "Photography Gear",
            "Camping Gear",
            "Hiking Gear",
            "Bottoms",
            "Suits",
            "Formal Wear",
            "Casual Wear",
            "Activewear",
            "Loungewear",
            "Underwear",
            "Socks",
            "Sleepwear",
            "Swimwear",
            "Plus Size Clothing",
            "Petite Clothing",
            "Maternity Clothing",
            "Workwear",
            "School Uniforms",
            "Costumes",
            "Fancy Dress"
        ];
        $('.Search').autocomplete({
          source: productsList
        });
      } );     var _gaq = _gaq || [];
      _gaq.push(['_setAccount', 'UA-36251023-1']);
      _gaq.push(['_setDomainName', 'jqueryscript.net']);
      _gaq.push(['_trackPageview']);
    
      (function() {
        var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
        ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
        var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
      })();
});

