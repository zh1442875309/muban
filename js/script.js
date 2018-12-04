$(document).ready(function() {
	
		

$("#per27 .index_nav_ul li").hover(function() {
   
        $(this).children(".sub-menu").stop(true, true).fadeIn("200");
    }, function() {

        $(this).children(".sub-menu").stop(true, true).fadeOut("1000");
    });	
	 

    $('.case_h_loop li article .product_bottom .thumbnails .thumbnail_swiper .swiper-wrapper,.case_h_loop li  .product_bottom .thumbnails .thumbnail_swiper .swiper-wrapper').children("a").on('click', function(e){
		
	$(this).parent('.swiper-wrapper').children("a").removeClass("this");
    $(this).addClass("this");
	
    $(this).parent('.swiper-wrapper').parent('.thumbnail_swiper').parent(".thumbnails").parent(".product_bottom").prev(".product_pic").children("a").children("figure").children("img").attr("src",$(this).children("img").attr("src"));
	$(this).parent('.swiper-wrapper').parent('.thumbnail_swiper').parent(".thumbnails").parent(".product_bottom").prev(".product_pic").children("a").children("figure").children("img").attr("srcset",$(this).children("img").attr("srcset"));
	$(this).parent('.swiper-wrapper').parent('.thumbnail_swiper').parent(".thumbnails").parent(".product_bottom").prev(".product_pic").children("a").children("figure").children("img").attr("url",$(this).children("img").attr("url"));
	$(this).parent('.swiper-wrapper').parent('.thumbnail_swiper').parent(".thumbnails").parent(".product_bottom").prev(".product_pic").children("a").children("figure").children("img").attr("alt",$(this).children("img").attr("alt"));
	

		
 
    });
	
  });
  
$(window).scroll(function() {
	
var tops=	$("#per27").offset().top ;
var heights=$("#per27").height();
    $("#per27 .fixed_m").css({
		
        width: ($("#per27").width()-($("#per27").width()*0.09))+ "px",
		padding:"10px "+($("#per27").width()*0.02)+ "px",
        left: $("#per27").offset().left + "px"
    });
	
	 
	 if ($(window).scrollTop() > tops + heights) {
        $("#per27 .fixed_m").fadeIn("300");
    } else {
        $("#per27 .fixed_m").fadeOut("300");
    }
	
	  });
