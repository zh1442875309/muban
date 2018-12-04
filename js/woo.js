 $.extend({filter_move:function(){
$(".widget_price_filter").children("ul").children("li").children("a").on("click",function(e) {
var name=$(this).attr("class");
var data=$(this).attr("data");
var values=$('#'+name).val();
if($(this).parent("li").hasClass('chosen')){
	$(this).parent("li").removeClass('chosen');
	var values=$('#'+name).val();
if(values==data){
	$('#'+name).remove();
	}else{
var	 valuess=values.split(',')[0];
if(valuess==data) {var str=values.replace(data+',',"");}else{
var str=values.replace(','+data,"");}
$('#'+name).val(str);}
return false;

	}else{
	
$(this).parent("li").addClass('chosen');
if($('#'+name).length > 0){
var values=$('#'+name).val();
$('#'+name).val(values+','+data);
	}else{
$('#price_slider_form').append('<input id="'+name+'" name="'+name+'" value="'+data+'" type="hidden">');
}

return false;}
});	
	
	
}});


function getCookie(name)
{
var arr,reg=new RegExp("(^| )"+name+"=([^;]*)(;|$)");
if(arr=document.cookie.match(reg))
return unescape(arr[2]);
else
return null;
}


$(document).ready(function() {
	
if(document.referrer){$('#blank_bottons,#blank a.blank_url').attr('href',document.referrer ); }

$(".wc-tabs").children("li").click(function(){
	$("#tabs_out p.move_show_p").text($(this).children("a").text());
var goto = $("#tabs_out").offset().top-120;
$("html,body").animate({scrollTop: goto}, 500);
});	
	
	
	$(".wc-tabs").children("li").click(function(){
	$(".woocommerce-Tabs-panel").hide();
	$(".wc-tabs").children("li").removeClass("active");
	id=$(this).children("a").attr("href") ;
	$(id).show();
	$(this).addClass("active");
	
});

var gallery_xz = new Swiper('.gallery_xz',{

calculateHeight : true,
loop: true,
pagination: '.galic_na',
paginationClickable: true,
speed:1000
  });
$('.gallery_xz .index_next').click(function(){gallery_xz.slidePrev(); });
$('.gallery_xz .index_prve').click(function(){gallery_xz.slideNext(); }); 
	 
 var hiiden  = new Swiper('.hiiden',{
     speed:800,
  pagination:'.paginations_hiiden',
 calculateHeight : true,
 paginationClickable: true

   }) ;
  
  
   
$("#open_bottons").click(function(){
$('.swatches').animate({bottom:"48px"});
});


$(".woocommerce-store-notice__dismiss-link").click(function(){
$('body').removeClass("woocommerce-demo-store");
});
if(getCookie('store_notice')){$('body').removeClass("woocommerce-demo-store");}



$(".close_swatches").click(function(){
$('.swatches').animate({bottom:"-100%"});
});

$(".vedio_tab").click(function(){
$('#tab-vedio p iframe').fadeIn(100);
});

$(".show_btn").click(function(){
$(".hide_widget_price_filter").fadeIn(500);
$(this).fadeOut(0);
});


$(".case_pic a#vedio_link").click(function() {
	
	var vedios=$(this).next(".vedio_code").children("noscript").text();
	
	$(".vedio_box_paly").html(vedios); 
	$(".vedio_fix_box").fadeIn(500)
	});
	
$(".close_vedio_btn").click(function() { 
$(".vedio_box_paly").html(''); 
$('.vedio_fix_box').fadeOut(500)

});		

$(".hide_widget_price_filter").children("ul").children("li").each(function() {
	
  if($(this).hasClass("chosen")){
	
	$(".hide_widget_price_filter").show();
	}  
});

$("a.mycart_tool").click(function(){
	
	$(".toolbar,.toolbar .my_tool_fox_hidden").animate({right:"0"});
	
	$(".my_tool_fox").not(".carttoll").fadeOut(100)
	$(".carttoll").fadeIn(100);
		
	
	});
	
$(".my_tool_fox_head").children("a").click(function(){
	
	$(".toolbar").animate({right:"-260px"});
    $(".my_tool_fox_hidden").animate({right:"-260px"});
	$(this).parent(".my_tool_fox_head").parent(".my_tool_fox").fadeOut(100);
	
	
	});	

	
$("#sx_btn").click(function(){
	
	
	$('#screening,#screening .screening_bac,#price_slider_form .button,#nav_product_mue_out,#nav_product_mue_out .screening_bac,#nav_product_mue_out #nav_product_mue .s_search_ys #choose').animate({right:"0"});
	
	
	});	

$(".screening_bac,.screening_close,.nav_product_close")	.click(function(){
	$('#screening,#screening .screening_bac,#price_slider_form .button,#nav_product_mue_out,#nav_product_mue_out #nav_product_mue .s_search_ys #choose,#nav_product_mue_out .screening_bac').animate({right:"-100%"});
	});
	
$(".myhistory_tool").click(function(){
	
	$(this).addClass("open");
	$(".toolbar").animate({right:"0"});

	$(".my_tool_fox").not(".historytoll").fadeOut(100)
	$(".historytoll").fadeIn(100);
		
	
	});		
	
	
	
	
 $('.zhankaibut').on('click', function(e){ 
  if($(this).hasClass("isopen")){
	   $(this).parent("td").parent("tr").next(".product-comment-note,.product-rating-note").children("td").children("#review_form,.comment-text").css("height",'0');
	  $(this).removeClass("isopen")
	  }else{
  $(this).parent("td").parent("tr").next(".product-comment-note,.product-rating-note").children("td").children("#review_form,.comment-text").css("height",'auto');
  $(this).addClass("isopen")
	  }
  
     });
	
$(".login_tabs").children("a.user_login_tab ").click(function(){
if(!$(this).hasClass("active")){
	$(".col-2").fadeOut(0);
	$(".col-1").fadeIn(500);
	$(this).addClass("active");
	$(".user_re_tab").removeClass("active")
	}
});
$(".login_tabs").children("a.user_re_tab").click(function(){

if(!$(this).hasClass("active")){
	
	
	$(".col-1").fadeOut(0);
	$(".col-2").fadeIn(500);
	$(this).addClass("active");
	$("a.user_login_tab").removeClass("active")
	}
});




$(".morenbell").children("a.eitor_thiso").click(function(){
$(this).parent(".morenbell").next(".col-1").fadeIn(500);
});


 
  $('.t_pingjia #commentform .comment-form-rating .stars  span,.comment-form-ratings .stars  span').children("a").on('click', function(e){ 
  
 $('.t_pingjia #commentform .comment-form-rating .stars  span a').removeClass("active");
  $(this).parent('span').parent("p").next("input#rating,input#ratings").attr("value",$(this).text());
  $(this).parent('span').parent("p").addClass("selected")
  $(this).addClass("active");

     });
 
 
 
 $('#images_woo .thumbnails .thumbnail_swiper .swiper-wrapper').children("a").on('click', function(e){
        $("#product_image").children("img").attr("src",$(this).attr("rel"));
		 $("#product_image").attr("href",$(this).attr("rel"));
		 $("#product_image").attr("data-o_href",$(this).attr("rel"));
	
		$("#product_image").children("img").attr("srcset",$(this).children("img").attr("srcset"));
		$("#product_image").children("img").attr("url",$(this).children("img").attr("url"));
		$("#product_image").children("img").attr("alt",$(this).children("img").attr("alt"));
	
		$('.images .thumbnails .thumbnail_swiper .swiper-wrapper').children("a").removeClass("this");
		$(this).addClass("this");
		
 
    });
	
 	$('.thumbnail_swiper  .swiper-wrapper').children("a").on('click', function(e){
	
	$(this).parent('.swiper-wrapper').parent('.thumbnail_swiper').parent(".thumbnails").prev("a").children("img").attr("src",$(this).attr("rel"));
	$(this).parent('.swiper-wrapper').parent('.thumbnail_swiper').parent(".thumbnails").prev("a").children("img").attr("srcset",$(this).children("img").attr("srcset"));
	$(this).parent('.swiper-wrapper').parent('.thumbnail_swiper').parent(".thumbnails").prev("a").children("img").attr("url",$(this).children("img").attr("url"));
	$(this).parent('.swiper-wrapper').parent('.thumbnail_swiper').parent(".thumbnails").prev("a").children("img").attr("alt",$(this).children("img").attr("alt"));
	$(this).parent('.swiper-wrapper').children("a").removeClass("this");
	$(this).addClass("this");
	 });
	 
	 
$("body").on("click",'.smiley_btn',function(data){ $('.smiley_kuang').fadeIn(600)});
$("body").on("click",'.smiley_close_btn',function(data){$(this).parent('span').parent('.smiley_kuang').fadeOut(600)});

var form_ajax =$('#commentform_out').html();
var locationurl = window.location.href;
$("body").on("click",'.caser_reply',function(data){  
$(this).parent('#commentform').remove();   
$('#commentform_out').append(form_ajax );

 });
	
	 

var windows=$(window).width();

if(windows>=1024){
	var price_filter_number=0;
$(".widget_attributes_filter").each(function() {
	price_filter_number++;
	
  var shownunber=$("#screening").attr("data_number"); 
  if((price_filter_number)>shownunber) {
  $(this).addClass("hide_widget_price_filter");
  $(".show_btn").addClass("show_it");;
}
 });
	

$(".my_tool_box").stop().mouseenter(function(){$(this).children("span.pc_tool,span.all_tool").delay(200).fadeIn(500);});
$(".my_tool_box").stop().mouseleave(function(){$(this).children("span.pc_tool,span.all_tool").fadeOut(0);});

$(".xiala").mouseenter(function() {$("#waper_drog_nav").fadeIn(500);});
$(".header_pic_nav li").not(".xiala").mouseenter(function() {$("#waper_drog_nav").fadeOut(500);});
$(".search_btn").mouseenter(function(){
$(this).next(".search_box").fadeIn(500);
});
$(".search_box").mouseleave(function(){
$(this).fadeOut(500);
});
$("#waper_drog_nav_ul li.menu-item-has-children:first-child .sub-menu").fadeIn();
$("#waper_drog_nav_ul").children("li.menu-item-has-children").mouseenter(function() {
$("#waper_drog_nav_ul li").not($(this)).children(".sub-menu").hide();
$(this).children(".sub-menu").fadeIn(500);
    });

$("#waper_drog_nav").mouseleave(function() {$(this).fadeOut(500);});
$('.case_loop li .product_pic,#case_index ul li .case_pic').mouseenter(function(){
	  $(this).children(".thumbnails").animate({bottom:"0"});
	});
$('.case_loop li .product_pic,#case_index ul li .case_pic').mouseleave(function(){
	  $(this).children(".thumbnails").animate({bottom:"-300px"});
	});

$("ul#waper_drog_nav li,.header_pic_nav li,.swiper-container,.case_pic a").hover(function() {
   
        $(this).children(".sub-menu,.index_next,.index_prve,.thumbnails,#comment_pic_bottom ,.vedio_btn").stop(true, true).fadeIn("200");
    }, function() {

        $(this).children(".sub-menu,.index_next,.index_prve,.thumbnails,#comment_pic_bottom,.vedio_btn").stop(true, true).fadeOut("1000");
    });	
	
	

	
	
	}else{
		
		
		
		
		
	
		$(".mysever_tool").on("click",function(e) {
				$(this).children("#severs_tool").slideToggle(500);
				
				});
	
	$(".move_btn_open").click(function(){
	
$(this).next(".case_nav_nav_ul").slideToggle(500);
		
	
	});

	
	
	$(".header_pic_nav li.menu-item-has-children i").on("click",function(e) {
	
	if($(this).hasClass("down_go")){
		
		$(this).next("ul.sub-menu").slideUp(500);
		$(this).removeClass("down_go");
		}else{
			
			$(this).next("ul.sub-menu").slideDown(500)	;
			$(this).addClass("down_go");
			}
	
	});
	
	
	$(".header_nav_move_btn").on("click",function(e) {
	
	if($(this).hasClass("down_go")){
		
		$(".header_pic_nav").slideUp(500);
		$(this).removeClass("down_go");
		}else{
			
			$(".header_pic_nav").slideDown(500)	;
			$(this).addClass("down_go");
			}
	
	});
				
				
$(".tool_cat_btn").on("click",function(e) {

	$("#waper_drog_nav,.gobanks").animate({right:"0"});
	$("#waper_drog_nav li .sub-menu").animate({height:($(window).height()-151)+'px'});
	});	
$("#waper_drog_nav .gobanks").on("click",function(e) {
	$("#waper_drog_nav,.gobanks").animate({right:"-100%"});
	});	
	
$("#waper_drog_nav li.menu-item-has-children i").on("click",function(e) {
	
	$(this).next(".sub-menu").animate({right:"0"});
	$(".gobank").animate({right:"0"});
	});	
	
$("#waper_drog_nav .gobank").on("click",function(e) {
	$("#waper_drog_nav  .sub-menu").animate({right:"-100%"});
   $(".gobank").animate({right:"-100%"});
	});	
	
	
	
	}
	
});		
	
	
	
$(window).scroll(function() {  
if ( $("#tabs_out").length > 0 ) { 
if ($(window).scrollTop() >= $("#tabs_out").offset().top-98) {
	
	
	$(".tabs_out_fixed").addClass("tabs_out_fixeds")
	
	
	}else{
		$(".tabs_out_fixed").removeClass("tabs_out_fixeds")
		}
}
});	