<!DOCTYPE html>
<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/fmt" prefix="fmt"%>
<%@ page session="false"%>
<%@taglib uri="http://www.springframework.org/tags/form" prefix="form"%>
<html lang="en-US">

<!-- Mirrored from themes.vibethemes.com/wplms/skins/default/ by HTTrack Website Copier/3.x [XR&CO'2014], Sat, 13 Feb 2016 05:50:36 GMT -->
<!-- Added by HTTrack --><meta http-equiv="content-type" content="text/html;charset=UTF-8" /><!-- /Added by HTTrack -->
<head>
<meta charset="UTF-8">
<title>WPLMS &#8211; Just another WordPress site</title>
<meta name="viewport" content="width=device-width, initial-scale=1.0">
              <meta name="author" content="VibeThemes">
              <link rel="shortcut icon" href="#" />
              <link rel="icon" type="image/png" href="#"><script type="javascript/text">
                NProgress.start();
             </script><meta name='robots' content='noindex,follow' />
<link rel="alternate" type="application/rss+xml" title="WPLMS &raquo; Feed" href="feed/index.html" />
<link rel="alternate" type="application/rss+xml" title="WPLMS &raquo; Comments Feed" href="comments/feed/index.html" />
<link rel="alternate" type="application/rss+xml" title="WPLMS &raquo; Home Comments Feed" href="home/feed/index.html" />
		<script type="text/javascript">
			window._wpemojiSettings = {"baseUrl":"https:\/\/s.w.org\/images\/core\/emoji\/72x72\/","ext":".png","source":{"concatemoji":"http:\/\/themes.vibethemes.com\/wplms\/skins\/default\/wp-includes\/js\/wp-emoji-release.min.js?ver=4.4.2"}};
			!function(a,b,c){function d(a){var c,d=b.createElement("canvas"),e=d.getContext&&d.getContext("2d"),f=String.fromCharCode;return e&&e.fillText?(e.textBaseline="top",e.font="600 32px Arial","flag"===a?(e.fillText(f(55356,56806,55356,56826),0,0),d.toDataURL().length>3e3):"diversity"===a?(e.fillText(f(55356,57221),0,0),c=e.getImageData(16,16,1,1).data.toString(),e.fillText(f(55356,57221,55356,57343),0,0),c!==e.getImageData(16,16,1,1).data.toString()):("simple"===a?e.fillText(f(55357,56835),0,0):e.fillText(f(55356,57135),0,0),0!==e.getImageData(16,16,1,1).data[0])):!1}function e(a){var c=b.createElement("script");c.src=a,c.type="text/javascript",b.getElementsByTagName("head")[0].appendChild(c)}var f,g;c.supports={simple:d("simple"),flag:d("flag"),unicode8:d("unicode8"),diversity:d("diversity")},c.DOMReady=!1,c.readyCallback=function(){c.DOMReady=!0},c.supports.simple&&c.supports.flag&&c.supports.unicode8&&c.supports.diversity||(g=function(){c.readyCallback()},b.addEventListener?(b.addEventListener("DOMContentLoaded",g,!1),a.addEventListener("load",g,!1)):(a.attachEvent("onload",g),b.attachEvent("onreadystatechange",function(){"complete"===b.readyState&&c.readyCallback()})),f=c.source||{},f.concatemoji?e(f.concatemoji):f.wpemoji&&f.twemoji&&(e(f.twemoji),e(f.wpemoji)))}(window,document,window._wpemojiSettings);
		</script>
		<style type="text/css">
img.wp-smiley,
img.emoji {
	display: inline !important;
	border: none !important;
	box-shadow: none !important;
	height: 1em !important;
	width: 1em !important;
	margin: 0 .07em !important;
	vertical-align: -0.1em !important;
	background: none !important;
	padding: 0 !important;
}
</style>
<link rel='stylesheet' id='layerslider-css'  href='wp-content/plugins/LayerSlider/static/css/layersliderdeba.css?ver=5.5.0' type='text/css' media='all' />
<link rel='stylesheet' id='bbp-default-css'  href='wp-content/plugins/bbpress/templates/default/css/bbpresse4d2.css?ver=2.5.8-5815' type='text/css' media='screen' />
<link rel='stylesheet' id='wplms-customizer-css-css'  href='wp-content/plugins/wplms-customizer/css/customc1f9.css?ver=4.4.2' type='text/css' media='all' />
<link rel='stylesheet' id='bp-course-css-css'  href='wp-content/plugins/vibe-course-module/includes/css/course_templatec1f9.css?ver=4.4.2' type='text/css' media='all' />
<link rel='stylesheet' id='google-webfonts-css'  href='http://fonts.googleapis.com/css?family=Open+Sans:regular|Raleway:regular|&amp;subsets=latin' type='text/css' media='all' />
<link rel='stylesheet' id='bbpress-css-css'  href='wp-content/themes/wplms/assets/css/bbpress.min7406.css?ver=2.0.1' type='text/css' media='all' />
<link rel='stylesheet' id='woocommerce-css-css'  href='wp-content/themes/wplms/assets/css/woocommerce.min7406.css?ver=2.0.1' type='text/css' media='all' />
<link rel='stylesheet' id='wplms-style-css'  href='wp-content/themes/wplms/assets/css/style.min7406.css?ver=2.0.1' type='text/css' media='all' />
<link rel='stylesheet' id='evcal_google_fonts-css'  href='http://fonts.googleapis.com/css?family=Oswald%3A400%2C300%7COpen+Sans%3A400%2C300&amp;ver=4.4.2' type='text/css' media='screen' />
<link rel='stylesheet' id='evcal_cal_default-css'  href='wp-content/plugins/eventON/assets/css/eventon_stylese62b.css?ver=2.3.15' type='text/css' media='all' />
<link rel='stylesheet' id='evo_font_icons-css'  href='wp-content/plugins/eventON/assets/fonts/font-awesomec1f9.css?ver=4.4.2' type='text/css' media='all' />
<link rel='stylesheet' id='evo_dv_styles-css'  href='wp-content/plugins/wplms-eventon/includes/eventon-daily-view/assets/dv_stylesc1f9.css?ver=4.4.2' type='text/css' media='all' />
<script type='text/javascript' src='wp-content/plugins/LayerSlider/static/js/greensockcd11.js?ver=1.11.8'></script>
<script type='text/javascript' src='wp-includes/js/jquery/jqueryc1d8.js?ver=1.11.3'></script>
<script type='text/javascript' src='wp-includes/js/jquery/jquery-migrate.min1576.js?ver=1.2.1'></script>
<script type='text/javascript' src='wp-content/plugins/LayerSlider/static/js/layerslider.kreaturamedia.jquerydeba.js?ver=5.5.0'></script>
<script type='text/javascript' src='wp-content/plugins/LayerSlider/static/js/layerslider.transitionsdeba.js?ver=5.5.0'></script>
<script type='text/javascript'>
/* <![CDATA[ */
var BP_Confirm = {"are_you_sure":"Are you sure?"};
/* ]]> */
</script>
<script type='text/javascript' src='wp-content/plugins/buddypress/bp-core/js/confirm.minb2da.js?ver=2.4.3'></script>
<script type='text/javascript'>
/* <![CDATA[ */
var wc_add_to_cart_params = {"ajax_url":"\/wplms\/skins\/default\/wp-admin\/admin-ajax.php","wc_ajax_url":"\/wplms\/skins\/default\/?wc-ajax=%%endpoint%%","i18n_view_cart":"View Cart","cart_url":"http:\/\/themes.vibethemes.com\/wplms\/skins\/default\/cart\/","is_cart":"","cart_redirect_after_add":"no"};
/* ]]> */
</script>
<script type='text/javascript' src='wp-content/plugins/woocommerce/assets/js/frontend/add-to-cart.min16b9.js?ver=2.5.2'></script>
<script type='text/javascript' src='wp-content/plugins/wplms-customizer/js/customc1f9.js?ver=4.4.2'></script>
<script type='text/javascript' src='wp-content/plugins/js_composer/assets/js/vendors/woocommerce-add-to-cart83b6.js?ver=4.6.2'></script>
<script type='text/javascript' src='wp-content/themes/wplms/assets/js/old_files/nprogress7406.js?ver=2.0.1'></script>
<link rel='https://api.w.org/' href='wp-json/index.html' />
<link rel="EditURI" type="application/rsd+xml" title="RSD" href="xmlrpc0db0.php?rsd" />
<link rel="wlwmanifest" type="application/wlwmanifest+xml" href="wp-includes/wlwmanifest.xml" /> 
<meta name="generator" content="WordPress 4.4.2" />
<meta name="generator" content="WooCommerce 2.5.2" />
<link rel="canonical" href="index.html" />
<link rel='shortlink' href='index.html' />

	<script type="text/javascript">var ajaxurl = 'wp-admin/admin-ajax.html';</script>



<!-- EventON Version -->
<meta name="generator" content="EventON 2.3.15" />

<meta name="generator" content="Powered by Visual Composer - drag and drop page builder for WordPress."/>
<!--[if IE 8]><link rel="stylesheet" type="text/css" href="http://themes.vibethemes.com/wplms/skins/default/wp-content/plugins/js_composer/assets/css/vc-ie8.css" media="screen"><![endif]--><input type="hidden" id="bp_social_connect_security" name="bp_social_connect_security" value="2f5fa3c4e8" /><input type="hidden" name="_wp_http_referer" value="/wplms/skins/default/" />		<script type="text/javascript">
		var ajaxurl = 'wp-admin/admin-ajax.html';
		</script>
		<style>
								.bp_social_connect{
						text-align: center;
					}
					.bp_social_connect a {
					  background: #3b5998;
					  color: #FFF;
					  font-weight: 600;
					  padding: 15px 20px;
					  display: inline-block;
					  text-decoration: none;
					  min-width: 220px;
					  margin: 5px 0;
					  border-radius: 2px;
					  letter-spacing: 1px;
					      
					}
.vibe-bp-login .bp_social_connect a{
    margin: 0px -10px 0;
    width: 240px;
    border-radius: 0;
    box-shadow: none;
}
					.bp_social_connect a:hover{
						box-shadow: none;	
					}
					.bp_social_connect a:focus{
						box-shadow: inset 0 4px 0 rgba(0,0,0,0.1)
					}					
					#bp_social_connect_twitter{
						background:#4099FF;
					}					
					#bp_social_connect_google{
						background:#DD4B39;
					}		</style>
	<style>#item-meta .star-rating,.item-meta .star-rating {
    float: left;
    width: auto;
}
.menu-sidebar.column5 .widget.buddypress.inside  {
   width: 100%;
   float: left;
}</style><noscript><style> .wpb_animate_when_almost_visible { opacity: 1; }</style></noscript></head>
<body class="home-page home page page-id-1427 page-template page-template-notitle page-template-notitle-php logged-out wpb-js-composer js-comp-ver-4.6.2 vc_responsive">
<div id="global" class="global">
    <div class="pagesidebar">
        <div class="sidebarcontent">    
            <h2 id="sidelogo">
            <a href="./"><img src="wp-content/themes/wplms/assets/images/logo.png" alt="WPLMS" /></a>
            </h2>
            <ul id="menu-mobilemenu" class="sidemenu"><li id="menu-item-2013" class="menu-item menu-item-type-post_type menu-item-object-page current-menu-item page_item page-item-1427 current_page_item menu-item-2013"><a href="index.html">Home</a></li>
<li id="menu-item-2015" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-2015"><a href="groups/index.html">Groups</a></li>
<li id="menu-item-2014" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-2014"><a href="blog/index.html">Blog</a></li>
<li id="menu-item-2016" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-2016"><a href="contact-us/index.html">Contact</a></li>
</ul>        </div>
        <a class="sidebarclose"><span></span></a>
    </div>  
    <div class="pusher">
                <div id="headertop" class="fix">
            <div class="container">
                <div class="row">
                    <div class="col-md-4 col-sm-3 col-xs-4">
                       <a href="./" class="homeicon"><img src="wp-content/themes/wplms/assets/images/logo.png" alt="WPLMS" /></a> 
                    </div>
                    <div class="col-md-8 col-sm-9 col-xs-8">
                                            <ul class="topmenu">
                            <li><a href="#login" class="smallimg vbplogin">Login</a></li>
                            <li><a href="register/index.html" class="vbpregister" title="Create an account">Sign Up</a>                             </li>
                        </ul>
                    <ul id="menu-top-menu" class="topmenu"><li id="menu-item-2043" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-2043"><a href="all-courses/index.html">Courses</a></li>
<li id="menu-item-2042" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-2042"><a href="shop/index.html">Shop</a></li>
<li id="menu-item-2044" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-2044"><a href="cart/index.html">Cart</a></li>
</ul>                    </div>
                                        <div id="vibe_bp_login" class="default_login">
                    
    
    <form name="login-form" id="vbp-login-form" class="standard-form" action="http://themes.vibethemes.com/wplms/skins/default/wp-login.php" method="post">
      <label>Username<br />
      <input type="text" name="log" id="side-user-login" class="input" tabindex="1" value="" /></label>
      
      <label>Password <a href="wp-login0da1.html?action=lostpassword&amp;redirect_to=http://themes.vibethemes.com/wplms/skins/default/" tabindex="5" class="tip" title="Forgot Password"><i class="icon-question"></i></a><br />
      <input type="password" tabindex="2" name="pwd" id="sidebar-user-pass" class="input" value="" /></label>
      
  <div class="checkbox small">
    <input type="checkbox" name="sidebar-rememberme" id="sidebar-rememberme" value="forever" /><label for="sidebar-rememberme">Remember Me</label>
  </div>
      
            <input type="submit" name="user-submit" id="sidebar-wp-submit" value="Log In" tabindex="100" />
      <input type="hidden" name="user-cookie" value="1" />
      <a href="register/index.html" class="vbpregister" title="Create an account" tabindex="5" >Sign Up</a>       </form>
    
    
    <div class="bp_social_connect">		<div id="fb-root" class="bp_social_connect_fb"></div>
		<script type="text/javascript">
		window.fbAsyncInit = function() {
			FB.init({
				appId      : "716909178340645", // replace your app id here
				status     : true, 
				cookie     : true, 
				xfbml      : true,
				version    : 'v2.0'  
			});
			FB.Event.subscribe('auth.authResponseChange', function(response){
				
				if (response.status === 'connected'){
					 console.log('success');
				}else if (response.status === 'not_authorized'){
					console.log('failed');
				} else{
					console.log('unknown error');
				}
			});
		};
		(function(d){
			var js, id = 'facebook-jssdk', ref = d.getElementsByTagName('script')[0];
			if (d.getElementById(id)) {return;}
			js = d.createElement('script'); js.id = id; js.async = true;
			js.src = "http://connect.facebook.net/en_US/all.js";
			ref.parentNode.insertBefore(js, ref);
		}(document));
				jQuery(document).ready(function($){
			$('.bp_social_connect_facebook').on('click',function(){

				var $this = $(this);
				$this.addClass('loading');
				var security = $('#bp_social_connect_security').val();
				

				FB.login(function(response){
					if (response.authResponse){

						FB.api('/me?fields=email,link,first_name,name,last_name', function(response) {
							console.log(response);
							$.ajax({
								url: ajaxurl,
								data: 'action=bp_social_connect_facebook_login&id='+response.id+'&email='+response.email+'&first_name='+response.first_name+'&last_name='+response.last_name+'&gender='+response.gender+'&name='+response.name+'&link='+response.link+'&locale='+response.locale+'&security='+security,
								type: 'POST',
								dataType: 'JSON',
								success:function(data){
									$this.removeClass('loading');
									if (data.message){
										form.parents('.bp_social_connect_facebook').before( data.message );
									}
									if (data.redirect_uri){
										if (data.redirect_uri =='refresh') {
											document.location.href=jQuery(location).attr('href');
										} else {
											document.location.href=data.redirect_uri;
										}
									}else{
										document.location.href=jQuery(location).attr('href');
									}
								},
								error: function(xhr, ajaxOptions, thrownError) {
									$this.removeClass('loading');
									window.location.href = "http://themes.vibethemes.com/wplms/skins/default";
								}
							});
						
						});
					}else{

					}
				}, {scope: 'email,user_likes', return_scopes: true});
			});		
		});
		</script>
		<a class="bp_social_connect_facebook" href="javascript:void(0)">FACEBOOK</a><br /></div><style>#bp_social_connect_facebook:before{content:"\f305";float:left;font-size:16px;font-family:dashicons}#bp_social_connect_twitter:before{content:"\f301";float:left;font-size:16px;font-family:dashicons}#bp_social_connect_google:before{content:"\f462";float:left;font-size:16px;font-family:dashicons}</style>                   </div>
                </div>
            </div>
        </div>
        <header>
            <div class="container">
                <div class="row">
                    <div class="col-md-3 col-sm-3 col-xs-4">
                        <h2 id="logo">                            <a href="./"><img src="wp-content/themes/wplms/assets/images/logo.png" data-alt-logo="http://themes.vibethemes.com/wplms/skins/default/wp-content/themes/wplms/assets/images/logo.png" alt="WPLMS" /></a>
                        </h2>                    </div>
                    <div class="col-md-9 col-sm-9 col-xs-8">
                        <div id="searchicon"><i class="icon-search-2"></i></div>
                        <div id="searchdiv">
                            <form role="search" method="get" id="searchform" action="http://themes.vibethemes.com/wplms/skins/default/">
                                <div><label class="screen-reader-text" for="s">Search for:</label>
                                    <input type="text" value="" name="s" id="s" placeholder="Hit enter to search..." />
                                    <input type="hidden" value="course" name="post_type" />                                    <input type="submit" id="searchsubmit" value="Search" />
                                </div>
                            </form>
                        </div>
                        <nav class="menu-main-menu-container"><ul id="menu-main-menu" class="menu"><li id="main-menu-item-2028" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children"><a href="all-courses/index.html"><strong>All Courses</strong></a>
<ul class="sub-menu">
	<li id="main-menu-item-1996" class="menu-item menu-item-type-post_type menu-item-object-page"><a href="courses-masonry/index.html">Courses Masonry</a></li>
	<li id="main-menu-item-1992" class="menu-item menu-item-type-post_type menu-item-object-course"><a href="course/software-training/index.html">Single Course</a></li>
	<li id="main-menu-item-1987" class="menu-item menu-item-type-custom menu-item-object-custom"><a href="quiz/multimedia-quiz/index.html">Quiz</a></li>
	<li id="main-menu-item-2032" class="menu-item menu-item-type-post_type menu-item-object-page"><a href="edit-course/index.html">Edit Course</a></li>
	<li id="main-menu-item-2031" class="menu-item menu-item-type-post_type menu-item-object-page"><a href="certificate/index.html">Certificate</a></li>
</ul>
</li>
<li id="main-menu-item-2027" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children"><a href="page-builder-page/index.html"><strong>Pages</strong></a>
<ul class="sub-menu">
	<li id="main-menu-item-1997" class="menu-item menu-item-type-post_type menu-item-object-page"><a href="about/index.html">About</a></li>
	<li id="main-menu-item-2004" class="menu-item menu-item-type-post_type menu-item-object-page"><a href="services/index.html">Services</a></li>
	<li id="main-menu-item-1998" class="menu-item menu-item-type-post_type menu-item-object-page"><a href="all-instructors/index.html">All Instructors</a></li>
	<li id="main-menu-item-2275" class="menu-item menu-item-type-post_type menu-item-object-page"><a href="become-a-teacher/index.html">Become a Teacher</a></li>
	<li id="main-menu-item-2000" class="menu-item menu-item-type-post_type menu-item-object-page"><a href="blog/index.html">Blog</a></li>
	<li id="main-menu-item-2003" class="menu-item menu-item-type-post_type menu-item-object-page"><a href="right-sidebar-page/index.html">Right Sidebar Page</a></li>
	<li id="main-menu-item-2002" class="menu-item menu-item-type-post_type menu-item-object-page"><a href="page-builder-page/index.html">Page Builder Page</a></li>
	<li id="main-menu-item-2005" class="menu-item menu-item-type-post_type menu-item-object-page"><a href="left-sidebar-page/index.html">Left Sidebar Page</a></li>
	<li id="main-menu-item-2001" class="menu-item menu-item-type-post_type menu-item-object-page"><a href="contact-us/index.html">Contact Us</a></li>
</ul>
</li>
<li id="main-menu-item-2026" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children"><a href="features-course-structure/index.html"><strong>Features</strong></a>
<ul class="sub-menu">
	<li id="main-menu-item-2035" class="menu-item menu-item-type-post_type menu-item-object-page"><a href="features-forums/index.html">Features &#8211; Forums</a></li>
	<li id="main-menu-item-2039" class="left menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children"><a href="features-courses/index.html">Features Courses</a>
	<ul class="sub-menu">
		<li id="main-menu-item-2038" class="menu-item menu-item-type-post_type menu-item-object-page"><a href="features-course-structure/index.html">Features Course Structure</a></li>
		<li id="main-menu-item-2036" class="menu-item menu-item-type-post_type menu-item-object-page"><a href="features-quiz/index.html">Features &#8211; Quiz</a></li>
		<li id="main-menu-item-2033" class="menu-item menu-item-type-post_type menu-item-object-page"><a href="features-badges-certificates/index.html">Features &#8211; Badges &#038; Certificates</a></li>
		<li id="main-menu-item-2034" class="menu-item menu-item-type-post_type menu-item-object-page"><a href="features-course-stats/index.html">Features &#8211; Course Stats</a></li>
		<li id="main-menu-item-2037" class="menu-item menu-item-type-post_type menu-item-object-page"><a href="features-administrator-stats/index.html">Features Administrator Stats</a></li>
	</ul>
</li>
	<li id="main-menu-item-2040" class="menu-item menu-item-type-post_type menu-item-object-page"><a href="features-groups/index.html">Features Groups</a></li>
	<li id="main-menu-item-2041" class="menu-item menu-item-type-post_type menu-item-object-page"><a href="features-members/index.html">Features Members</a></li>
</ul>
</li>
<li id="main-menu-item-2150" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children"><a href="landing-page/index.html"><strong>MegaMenu</strong></a>
<ul class="sub-menu">
	<li id="main-menu-item-2151" class="menu-item menu-item-type-post_type menu-item-object-page megadrop"><div id="vibe-mega-megamenu" class="menu-sidebar column5"><div class="widget"><div class="inside"><h4 class="widgettitle"><span>Features</span></h4><div class="menu-features-1-container"><ul id="menu-features-1" class="menu"><li id="menu-item-2017" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-2017"><a href="features-forums/index.html">Forums</a></li>
<li id="menu-item-2018" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-2018"><a href="features-groups/index.html">Groups</a></li>
<li id="menu-item-2019" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-2019"><a href="features-members/index.html">Members</a></li>
</ul></div></div></div><div class="widget"><div class="inside"><h4 class="widgettitle"><span>Features 2</span></h4><div class="menu-features-2-container"><ul id="menu-features-2" class="menu"><li id="menu-item-2022" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-2022"><a href="features-courses/index.html">Courses</a></li>
<li id="menu-item-2020" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-2020"><a href="features-course-structure/index.html">Course Structure</a></li>
<li id="menu-item-2021" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-2021"><a href="features-quiz/index.html">Quiz</a></li>
<li id="menu-item-2023" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-2023"><a href="features-badges-certificates/index.html">Badges &#038; Certificates</a></li>
</ul></div></div></div><div class="widget"><div class="inside"><h4 class="widgettitle"><span>Features 3</span></h4><div class="menu-features-3-container"><ul id="menu-features-3" class="menu"><li id="menu-item-2024" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-2024"><a href="features-administrator-stats/index.html">Administrator Stats</a></li>
<li id="menu-item-2025" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-2025"><a href="features-course-stats/index.html">Course Stats</a></li>
</ul></div></div></div><div class="widget"><div class="inside"><h4 class="widgettitle"><span>Notification</span></h4>			<div class="textwidget">This is some notification in the mega menu.
</div>
		</div></div><div class="widget buddypress widget"><div class="widget buddypress inside"><h4 class="widgettitle"><span>Course Stats Widget</span></h4><div class="stat_num"><strong class="tip" title="TOTAL STUDENTS"><i class="icon-myspace-alt"></i><span>127</span></strong><strong  class="tip" title="BADGES"><i class="icon-award-stroke"></i><span>5</span></strong>
		        <strong  class="tip" title="CERTIFICATES"><i class="icon-certificate-file"></i><span>4</span></strong></div></div></div>	</div></li>
</ul>
</li>
<li id="main-menu-item-2029" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children"><a href="./login.html"><strong>Login</strong></a>
</li>
</ul></nav> 
                    </div>
                    <a id="trigger">
                        <span class="lines"></span>
                    </a>
                </div>
            </div>
        </header>
<section id="content">
    <div class="container">
             <script> var opcarousel279 = {
           "directionNav" : true,
           "animationLoop" : false,
           "slideshow" : false
        };</script><script> var opcarousel258 = {
           "directionNav" : true,
           "animationLoop" : true,
           "slideshow" : true
        };</script><script> var opcarousel625 = {
           "directionNav" : true,
           "animationLoop" : true,
           "slideshow" : true
        };</script><div class="vibe_editor clearfix"></div>
                          </div>
                          </section>
                          <section class='stripe'>
                              <!-- Begin Stripe stripe fullwidth -->
                                    <div  class="v_module v_column stripe fullwidth v_first" >
<style>.homepageslider.stripe{margin-top:0;}</style><div  class="v_module layerslider " data-class="homepageslider"><script data-cfasync="false" type="text/javascript">var lsjQuery = jQuery;</script><script data-cfasync="false" type="text/javascript"> lsjQuery(document).ready(function() { if(typeof lsjQuery.fn.layerSlider == "undefined") { lsShowNotice('layerslider_2_1','jquery'); } else { lsjQuery("#layerslider_2_1").layerSlider({responsiveUnder: 1170, layersContainer: 1170, startInViewport: false, skinsPath: 'http://themes.vibethemes.com/wplms/skins/default/wp-content/plugins/LayerSlider/static/skins/'}) } }); </script><div class="ls-wp-fullwidth-container" style="height:480px;"><div class="ls-wp-fullwidth-helper"><div id="layerslider_2_1" class="ls-wp-container" style="width:100%;height:480px;max-width:1600px;margin:0 auto;margin-bottom: 0px;"><div class="ls-slide" data-ls="slidedelay:3000; transition2d: all;"><img src="wp-content/themes/wplms/setup/data/uploads/s3.jpg" class="ls-bg" alt="Slide background" /><h2 class="ls-l" style="top:112px;left:477px;font-weight:700; letter-spacing:2px;padding-top:10px;padding-right:20px;padding-bottom:10px;padding-left:20px;font-size:32px;color:#FFFfff;background:rgba(35, 44, 46, 0.75);border-radius:2px;white-space: nowrap;" data-ls="offsetxin:0;easingin:easeOutBack;rotatexin:-90;transformoriginin:50% top 0;offsetxout:0;">LEARNING MANAGEMENT SYSTEM</h2><p class="ls-l" style="top:64px;left:447px;font-weight:800;letter-spacing:1px;text-transform:uppercase;padding-top:20px;padding-right:30px;padding-bottom:20px;padding-left:30px;font-size:20px;color:#FFF;white-space: nowrap;" data-ls="offsetxin:0;delayin:100;transformoriginin:50% bottom 0;offsetxout:0;">For WordPress </p><p class="ls-l" style="top:170px;left:446px;font-weight:600;text-transform:uppercase;padding-top:20px;padding-right:30px;padding-bottom:20px;padding-left:30px;font-size:18px;color:#FFF;white-space: nowrap;" data-ls="offsetxin:0;delayin:200;rotatexin:-90;transformoriginin:50% top 0;offsetxout:0;">Create your own Courses and sell online.<br> It IS Not just a WordPress Theme.</p><button onclick="location.href='./register'" class="ls-l" style="top:370px;left:487px;font-weight:600;text-transform:uppercase;padding-top:12px;padding-right:24px;padding-bottom:12px;padding-left:24px;font-size:14px;color:000px;background:#F16645;border-radius:2px;white-space: nowrap;" data-ls="offsetxin:0;offsetyin:80;delayin:550;easingin:easeOutBack;offsetxout:0;offsetyout:-80;">Sign Up Now</button></div><div class="ls-slide" data-ls="slidedelay:3000; transition2d: all;"><img src="wp-content/themes/wplms/setup/data/uploads/s2.jpg" class="ls-bg" alt="Slide background" /><h3 class="ls-l" style="top:77px;left:68px;font-weight:600;padding-top:12px;padding-right:24px;padding-bottom:12px;padding-left:24px;font-size:16px;color:#FFF;background:rgba(49, 59, 61, 0.80);border-radius:2px;white-space: nowrap;" data-ls="offsetxin:0;easingin:easeInOutElastic;rotatexin:-90;transformoriginin:50% top 0;offsetxout:0;">Create Courses, Modules, Units, Quizzes, Questions</h3><h3 class="ls-l" style="top:134px;left:68px;font-weight:600;padding-top:12px;padding-right:24px;padding-bottom:12px;padding-left:24px;font-size:16px;color:#FFF;background:rgba(49, 59, 61, 0.80);border-radius:2px;white-space: nowrap;" data-ls="offsetxin:0;delayin:100;easingin:easeInOutElastic;rotatexin:-90;transformoriginin:50% top 0;offsetxout:0;">Set Timers, Auto Or Manually Evaluate Quizzes</h3><h3 class="ls-l" style="top:189px;left:67px;font-weight:600;padding-top:12px;padding-right:24px;padding-bottom:12px;padding-left:24px;font-size:16px;color:#FFF;background:rgba(49, 59, 61, 0.80);border-radius:2px;white-space: nowrap;" data-ls="offsetxin:0;delayin:200;easingin:easeInOutElastic;rotatexin:-90;transformoriginin:50% top 0;offsetxout:0;">Check Results, Notifications , Messages</h3><h3 class="ls-l" style="top:245px;left:66px;font-weight:600;padding-top:12px;padding-right:24px;padding-bottom:12px;padding-left:24px;font-size:16px;color:#FFF;background:rgba(49, 59, 61, 0.80);border-radius:2px;white-space: nowrap;" data-ls="offsetxin:0;delayin:300;easingin:easeInOutElastic;rotatexin:-90;transformoriginin:50% top 0;offsetxout:0;">Set Badges, Certificates for Courses</h3><p class="ls-l" style="top:303px;left:67px;font-weight:600;padding-top:12px;padding-right:24px;padding-bottom:12px;padding-left:24px;font-size:16px;color:#FFF;background:rgba(49, 59, 61, 0.80);border-radius:2px;white-space: nowrap;" data-ls="offsetxin:0;delayin:400;easingin:easeInOutElastic;rotatexin:-90;transformoriginin:50% top 0;offsetxout:0;">Sell course as Single, Group and Subscription</p><button onclick="location.href='./register'" class="ls-l" style="top:370px;left:487px;font-weight:600;text-transform:uppercase;padding-top:12px;padding-right:24px;padding-bottom:12px;padding-left:24px;font-size:14px;color:000px;background:#F16645;border-radius:2px;white-space: nowrap;" data-ls="offsetxin:0;offsetyin:80;delayin:550;easingin:easeOutBack;offsetxout:0;offsetyout:-80;">Sign Up Now</button></div></div></div></div></div>
</div> 
                                <!-- End Stripestripe fullwidth -->
                          </section>          
                          <section class='main'>
                            <div class='container'>
                                <div class='full-width'>
                                    <div class='vibe_editor clearfix'>
<div  class="v_module v_column col-md-3 col-sm-3 v_first" >
<style>.custom_block img{
max-width:80px;
padding:30px 0;
}
.custom_block h3{font-weight: 600;
text-transform: uppercase;
font-size: 17px;margin-bottom:0;}
.custom_block h3+p{color:#bbb;margin-top:0;font-size:11px;font-weight:600;text-transform:uppercase;}</style><div  class="v_module v_text_block  custom_block nothing_selected" ><p style="text-align: center;"><img class="alignnone size-full wp-image-1430" src="http://vibethemes.com/envato/wplms/wp-content/uploads/2014/02/4.png" alt="4" width="140" height="140"></p><h3 style="text-align: center;">Online Courses&nbsp;</h3><p style="text-align: center;">course management</p><p style="text-align: center;">It is a long established fact that a reader will be distracted.</p><p style="text-align: center;"><a class="link" href="#">more</a></p><p style="text-align: center;">&nbsp;</p></div>
</div> <!-- end .v_column_col-md-3 col-sm-3 -->
<div  class="v_module v_column col-md-3 col-sm-3 " >
<div  class="v_module v_text_block  custom_block nothing_selected" ><p style="text-align: center;"><img class="alignnone size-full wp-image-1428" alt="1" src="http://vibethemes.com/envato/wplms/wp-content/uploads/2014/02/1.png" height="140" width="140"></p><h3 style="text-align: center;">Become an Instructor</h3><p style="text-align: center;">teach online</p><p style="text-align: center;">It is a long established fact that a reader will be distracted</p><p style="text-align: center;"><a class="link" href="#">more</a></p></div>
</div> <!-- end .v_column_col-md-3 col-sm-3 -->
<div  class="v_module v_column col-md-3 col-sm-3 " >
<div  class="v_module v_text_block  custom_block nothing_selected" ><p style="text-align: center;"><img class="alignnone size-full wp-image-1431" alt="3" src="http://vibethemes.com/envato/wplms/wp-content/uploads/2014/02/3.png" height="140" width="140"></p><h3 style="text-align: center;">Multi-Media Units</h3><p style="text-align: center;">Audio, Video playback</p><p style="text-align: center;">It is a long established fact that a reader will be distracted</p><p style="text-align: center;"><a class="link" href="#">more</a></p></div>
</div> <!-- end .v_column_col-md-3 col-sm-3 -->
<div  class="v_module v_column col-md-3 col-sm-3 " >
<div  class="v_module v_text_block  custom_block nothing_selected" ><p style="text-align: center;"><img class="alignnone size-full wp-image-1429" alt="2" src="http://vibethemes.com/envato/wplms/wp-content/uploads/2014/02/2.png" height="140" width="140"></p><h3 style="text-align: center;">subscribe courses</h3><p style="text-align: center;">Sell Courses</p><p style="text-align: center;">It is a long established fact that a reader will be distracted</p><p style="text-align: center;"><a class="link" href="#">more</a></p></div>
</div> <!-- end .v_column_col-md-3 col-sm-3 -->
<div  class="v_module v_column col-md-3 col-sm-3 v_first" >
<style>.custom_banner img{
border:5px solid #FFF;
box-shadow:0 1px 2px #bbb;
border-radius:2px;
}</style><div  class="v_module v_text_block  custom_banner nothing_selected" ><p><a href="http://vibethemes.com/envato/wplms/course-cat/language/"><img alt="banner3" src="http://vibethemes.com/envato/wplms/wp-content/uploads/2008/09/banner3.jpg" height="100" width="300"></a></p></div>
</div> <!-- end .v_column_col-md-3 col-sm-3 -->
<div  class="v_module v_column col-md-3 col-sm-3 " >
<div  class="v_module v_text_block  custom_banner nothing_selected" ><p><a href="http://vibethemes.com/envato/wplms/course-cat/business/"><img alt="banner1" src="http://vibethemes.com/envato/wplms/wp-content/uploads/2008/09/banner1.jpg" height="100" width="300"></a></p></div>
</div> <!-- end .v_column_col-md-3 col-sm-3 -->
<div  class="v_module v_column col-md-3 col-sm-3 " >
<div  class="v_module v_text_block  custom_banner nothing_selected" ><p><a href="http://vibethemes.com/envato/wplms/course-cat/technology/"><img alt="banner4" src="http://vibethemes.com/envato/wplms/wp-content/uploads/2008/09/banner4.jpg" height="100" width="300"></a></p></div>
</div> <!-- end .v_column_col-md-3 col-sm-3 -->
<div  class="v_module v_column col-md-3 col-sm-3 " >
<div  class="v_module v_text_block  custom_banner nothing_selected" ><p><a href="http://vibethemes.com/envato/wplms/course-cat/photography-2/"><img alt="banner2" src="http://vibethemes.com/envato/wplms/wp-content/uploads/2008/09/banner2.jpg" height="100" width="300"></a></p></div>
</div> <!-- end .v_column_col-md-3 col-sm-3 -->
</div></div>
                                    </section>
                                    <section class='stripe'>
                                      <div class='container'>
                                          <!-- Begin Stripe stripe_container fullwidth -->
                                          <div  class="v_module v_column stripe_container fullwidth v_first" >
<style>.fullhomestripe.stripe{
padding:30px 0;
background:#FFF;
}</style><div  class="v_module custom_post_carousel " data-class="fullhomestripe"><div id="Popular_Courses"></div><h3 class="heading"><span>Popular Courses</span></h3> <a href="http://vibethemes.com/envato/wplms/all-courses/" class="heading_more">+</a><div id="carousel279" class="vibe_carousel flexslider loading   more_heading" data-block-width="262" data-block-max="4" data-block-min="2">
  	            <ul class="slides"><li><div class="block courseitem" data-id="1260"><div class="block_media"><a href="course/software-training/index.html"><img width="310" height="186" src="wp-content/uploads/2014/02/softwaretraining1-310x186.jpg" class="attachment-small size-small wp-post-image" alt="softwaretraining" srcset="http://themes.vibethemes.com/wplms/skins/default/wp-content/uploads/2014/02/softwaretraining1-460x276.jpg 460w, http://themes.vibethemes.com/wplms/skins/default/wp-content/uploads/2014/02/softwaretraining1-120x72.jpg 120w, http://themes.vibethemes.com/wplms/skins/default/wp-content/uploads/2014/02/softwaretraining1-310x186.jpg 310w, http://themes.vibethemes.com/wplms/skins/default/wp-content/uploads/2014/02/softwaretraining1.jpg 768w" sizes="(max-width: 310px) 100vw, 310px" /></a></div><div class="block_content"><h4 class="block_title"><a href="course/software-training/index.html" title="Software Training">Software Training</a></h4><div class="star-rating"><span class="fill"></span><span class="fill"></span><span class="fill"></span><span class="fill"></span><span></span></div><strong><del><span class="amount">&pound;29.00</span></del> <ins><span class="amount">&pound;19.00</span></ins><span class="subs"> per  month</span></strong><span class="clear"></span><div class="instructor_course">
					<div class="item-avatar"><img src="wp-content/uploads/avatars/1/d6d450c9eac36998673635f3da168352-bpthumb.jpg" class="avatar user-1-avatar avatar-150 photo" width="150" height="150" alt="Profile Photo" /></div>
					<h5 class="course_instructor"><a href="members/-4/index.html">Eddard Stark<span>Programming</span></a>
					</h5></div><strong><i class="fa fa-users"></i> 40</strong></div></div></li><li><div class="block courseitem" data-id="1250"><div class="block_media"><a href="course/developing-mobile-apps/index.html"><img width="310" height="186" src="wp-content/uploads/2014/02/mobileapps1-310x186.jpg" class="attachment-small size-small wp-post-image" alt="mobileapps" srcset="http://themes.vibethemes.com/wplms/skins/default/wp-content/uploads/2014/02/mobileapps1-460x276.jpg 460w, http://themes.vibethemes.com/wplms/skins/default/wp-content/uploads/2014/02/mobileapps1-120x72.jpg 120w, http://themes.vibethemes.com/wplms/skins/default/wp-content/uploads/2014/02/mobileapps1-310x186.jpg 310w, http://themes.vibethemes.com/wplms/skins/default/wp-content/uploads/2014/02/mobileapps1.jpg 768w" sizes="(max-width: 310px) 100vw, 310px" /></a></div><div class="block_content"><h4 class="block_title"><a href="course/developing-mobile-apps/index.html" title="Developing Mobile Apps">Developing Mobile Apps</a></h4><div class="star-rating"><span class="fill"></span><span class="fill"></span><span class="fill"></span><span></span><span></span></div><strong><del><span class="amount">&pound;29.00</span></del> <ins><span class="amount">&pound;19.00</span></ins><span class="subs"> per  week</span></strong><span class="clear"></span><div class="instructor_course">
					<div class="item-avatar"><img src="wp-content/uploads/avatars/1/d6d450c9eac36998673635f3da168352-bpthumb.jpg" class="avatar user-1-avatar avatar-150 photo" width="150" height="150" alt="Profile Photo" /></div>
					<h5 class="course_instructor"><a href="members/-4/index.html">Eddard Stark<span>Programming</span></a>
					</h5></div><strong><i class="fa fa-users"></i> 5</strong></div></div></li><li><div class="block courseitem" data-id="1242"><div class="block_media"><a href="course/how-to-write-effectively/index.html"><img width="310" height="186" src="wp-content/uploads/2014/02/writing11-310x186.jpg" class="attachment-small size-small wp-post-image" alt="writing1" srcset="http://themes.vibethemes.com/wplms/skins/default/wp-content/uploads/2014/02/writing11-460x276.jpg 460w, http://themes.vibethemes.com/wplms/skins/default/wp-content/uploads/2014/02/writing11-120x72.jpg 120w, http://themes.vibethemes.com/wplms/skins/default/wp-content/uploads/2014/02/writing11-310x186.jpg 310w, http://themes.vibethemes.com/wplms/skins/default/wp-content/uploads/2014/02/writing11.jpg 768w" sizes="(max-width: 310px) 100vw, 310px" /></a></div><div class="block_content"><h4 class="block_title"><a href="course/how-to-write-effectively/index.html" title="How to write effectively">How to write effectively</a></h4><div class="star-rating"><span class="fill"></span><span class="fill"></span><span class="fill"></span><span class="fill"></span><span></span></div><strong><span class="amount">&pound;20.00</span><span class="subs"> per  month</span></strong><span class="clear"></span><div class="instructor_course">
					<div class="item-avatar"><img src="wp-content/uploads/avatars/1/d6d450c9eac36998673635f3da168352-bpthumb.jpg" class="avatar user-1-avatar avatar-150 photo" width="150" height="150" alt="Profile Photo" /></div>
					<h5 class="course_instructor"><a href="members/-4/index.html">Eddard Stark<span>Programming</span></a>
					</h5></div><strong><i class="fa fa-users"></i> 20</strong></div></div></li><li><div class="block courseitem" data-id="1235"><div class="block_media"><a href="course/basic-of-nature-photography/index.html"><img width="310" height="186" src="wp-content/uploads/2014/02/photography31-310x186.jpg" class="attachment-small size-small wp-post-image" alt="photography3" srcset="http://themes.vibethemes.com/wplms/skins/default/wp-content/uploads/2014/02/photography31-460x276.jpg 460w, http://themes.vibethemes.com/wplms/skins/default/wp-content/uploads/2014/02/photography31-120x72.jpg 120w, http://themes.vibethemes.com/wplms/skins/default/wp-content/uploads/2014/02/photography31-310x186.jpg 310w, http://themes.vibethemes.com/wplms/skins/default/wp-content/uploads/2014/02/photography31.jpg 768w" sizes="(max-width: 310px) 100vw, 310px" /></a></div><div class="block_content"><h4 class="block_title"><a href="course/basic-of-nature-photography/index.html" title="Basic of Nature Photography">Basic of Nature Photography</a></h4><div class="star-rating"><span class="fill"></span><span class="fill"></span><span class="fill"></span><span class="fill"></span><span></span></div><strong><del><span class="amount">&pound;29.00</span></del> <ins><span class="amount">&pound;19.00</span></ins><span class="subs"> per  week</span></strong><span class="clear"></span><div class="instructor_course">
					<div class="item-avatar"><img src="wp-content/uploads/avatars/1/d6d450c9eac36998673635f3da168352-bpthumb.jpg" class="avatar user-1-avatar avatar-150 photo" width="150" height="150" alt="Profile Photo" /></div>
					<h5 class="course_instructor"><a href="members/-4/index.html">Eddard Stark<span>Programming</span></a>
					</h5></div><strong><i class="fa fa-users"></i> 11</strong></div></div></li><li><div class="block courseitem" data-id="1216"><div class="block_media"><a href="course/starting-a-startup/index.html"><img width="310" height="186" src="wp-content/uploads/2014/02/startup11-310x186.jpg" class="attachment-small size-small wp-post-image" alt="startup1" srcset="http://themes.vibethemes.com/wplms/skins/default/wp-content/uploads/2014/02/startup11-460x276.jpg 460w, http://themes.vibethemes.com/wplms/skins/default/wp-content/uploads/2014/02/startup11-120x72.jpg 120w, http://themes.vibethemes.com/wplms/skins/default/wp-content/uploads/2014/02/startup11-310x186.jpg 310w, http://themes.vibethemes.com/wplms/skins/default/wp-content/uploads/2014/02/startup11.jpg 768w" sizes="(max-width: 310px) 100vw, 310px" /></a></div><div class="block_content"><h4 class="block_title"><a href="course/starting-a-startup/index.html" title="Starting a Startup">Starting a Startup</a></h4><div class="star-rating"><span class="fill"></span><span class="fill"></span><span class="fill"></span><span class="fill"></span><span class="half"></span></div><strong><span class="amount">&pound;19.00</span></strong><span class="clear"></span><div class="instructor_course">
					<div class="item-avatar"><img src="wp-content/uploads/avatars/1/d6d450c9eac36998673635f3da168352-bpthumb.jpg" class="avatar user-1-avatar avatar-150 photo" width="150" height="150" alt="Profile Photo" /></div>
					<h5 class="course_instructor"><a href="members/-4/index.html">Eddard Stark<span>Programming</span></a>
					</h5></div><strong><i class="fa fa-users"></i> 16</strong></div></div></li><li><div class="block courseitem" data-id="1204"><div class="block_media"><a href="course/social-media-management/index.html"><img width="310" height="186" src="wp-content/uploads/2014/02/socialmedia1-310x186.jpg" class="attachment-small size-small wp-post-image" alt="socialmedia" srcset="http://themes.vibethemes.com/wplms/skins/default/wp-content/uploads/2014/02/socialmedia1-460x276.jpg 460w, http://themes.vibethemes.com/wplms/skins/default/wp-content/uploads/2014/02/socialmedia1-120x72.jpg 120w, http://themes.vibethemes.com/wplms/skins/default/wp-content/uploads/2014/02/socialmedia1-310x186.jpg 310w, http://themes.vibethemes.com/wplms/skins/default/wp-content/uploads/2014/02/socialmedia1.jpg 768w" sizes="(max-width: 310px) 100vw, 310px" /></a></div><div class="block_content"><h4 class="block_title"><a href="course/social-media-management/index.html" title="Social Media Management">Social Media Management</a></h4><div class="star-rating"><span class="fill"></span><span class="fill"></span><span class="fill"></span><span class="fill"></span><span></span></div><strong><span class="amount">&pound;49.00</span></strong><span class="clear"></span><div class="instructor_course">
					<div class="item-avatar"><img src="wp-content/uploads/avatars/1/d6d450c9eac36998673635f3da168352-bpthumb.jpg" class="avatar user-1-avatar avatar-150 photo" width="150" height="150" alt="Profile Photo" /></div>
					<h5 class="course_instructor"><a href="members/-4/index.html">Eddard Stark<span>Programming</span></a>
					</h5></div><strong><i class="fa fa-users"></i> 8</strong></div></div></li></ul></div></div>
</div> 
                                          <!-- End Stripestripe_container fullwidth -->    
                                       </div>
                                    </section>          
                                      <section class='main nextstripe'>
                                          <div class='container'>
                                            <div class='full-width'>
                                              <div class='vibe_editor clearfix'>
<div  class="v_module v_column col-md-6 col-sm-6 v_first" >
<div  class="v_module custom_post_carousel " ><div id="Recent_Posts"></div><h3 class="heading"><span>Recent Posts</span></h3> <a href="http://vibethemes.com/envato/wplms/blog/" class="heading_more">+</a><div id="carousel258" class="vibe_carousel flexslider loading onecol  more_heading" data-block-width="600" data-block-max="1" data-block-min="1">
  	            <ul class="slides"><li><div class="block side"><div class="block_media"><a href="another-post-with-everything-in-it/index.html"><img width="768" height="512" src="wp-content/uploads/2008/09/portfolio20-768x512.jpg" class="attachment-big size-big wp-post-image" alt="portfolio20" srcset="http://themes.vibethemes.com/wplms/skins/default/wp-content/uploads/2008/09/portfolio20-460x307.jpg 460w, http://themes.vibethemes.com/wplms/skins/default/wp-content/uploads/2008/09/portfolio20-120x80.jpg 120w, http://themes.vibethemes.com/wplms/skins/default/wp-content/uploads/2008/09/portfolio20-310x207.jpg 310w, http://themes.vibethemes.com/wplms/skins/default/wp-content/uploads/2008/09/portfolio20.jpg 768w" sizes="(max-width: 768px) 100vw, 768px" /></a></div><div class="block_content"><h4 class="block_title"><a href="another-post-with-everything-in-it/index.html" title="Another Post with Everything">Another Post with Everything</a></h4><div class="date"><small>September 17,2008 / <a href="category/general/index.html">General</a> <a href="category/general/news/index.html">News</a> <a href="category/technology/index.html">Technology</a>  / 3  Comments</small></div><p class="block_desc">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Curabitur quam augue, vehicula quis,...</p></div></div></li><li><div class="block side"><div class="block_media"><a href="an-ordered-list-post/index.html"><img width="768" height="512" src="wp-content/uploads/2008/09/portfolio17-768x512.jpg" class="attachment-big size-big wp-post-image" alt="portfolio17" srcset="http://themes.vibethemes.com/wplms/skins/default/wp-content/uploads/2008/09/portfolio17-460x307.jpg 460w, http://themes.vibethemes.com/wplms/skins/default/wp-content/uploads/2008/09/portfolio17-120x80.jpg 120w, http://themes.vibethemes.com/wplms/skins/default/wp-content/uploads/2008/09/portfolio17-310x207.jpg 310w, http://themes.vibethemes.com/wplms/skins/default/wp-content/uploads/2008/09/portfolio17.jpg 768w" sizes="(max-width: 768px) 100vw, 768px" /></a></div><div class="block_content"><h4 class="block_title"><a href="an-ordered-list-post/index.html" title="An Ordered List Post">An Ordered List Post</a></h4><div class="date"><small>September 17,2008 / <a href="category/education/index.html">Education</a>  / 1  Comments</small></div><p class="block_desc">Nulla sagittis convallis arcu. Sed sed nunc. Curabitur consequat. Quisque metus enim, venenatis...</p></div></div></li><li><div class="block side"><div class="block_media"><a href="a-simple-text-post/index.html"><img width="768" height="512" src="wp-content/uploads/2008/09/portfolio9-768x512.jpg" class="attachment-big size-big wp-post-image" alt="portfolio9" srcset="http://themes.vibethemes.com/wplms/skins/default/wp-content/uploads/2008/09/portfolio9-460x307.jpg 460w, http://themes.vibethemes.com/wplms/skins/default/wp-content/uploads/2008/09/portfolio9-120x80.jpg 120w, http://themes.vibethemes.com/wplms/skins/default/wp-content/uploads/2008/09/portfolio9-310x207.jpg 310w, http://themes.vibethemes.com/wplms/skins/default/wp-content/uploads/2008/09/portfolio9.jpg 768w" sizes="(max-width: 768px) 100vw, 768px" /></a></div><div class="block_content"><h4 class="block_title"><a href="a-simple-text-post/index.html" title="A Simple Text Post">A Simple Text Post</a></h4><div class="date"><small>September 17,2008 / <a href="category/gadgets/apple/index.html">Apple</a> <a href="category/gadgets/index.html">Gadgets</a>  / 1  Comments</small></div><p class="block_desc">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Sed eleifend urna eu sapien. Quisque...</p></div></div></li><li><div class="block side"><div class="block_media"><a href="a-post-with-everything-in-it/index.html"><img width="768" height="512" src="wp-content/uploads/2008/09/portfolio11-768x512.jpg" class="attachment-big size-big wp-post-image" alt="portfolio11" srcset="http://themes.vibethemes.com/wplms/skins/default/wp-content/uploads/2008/09/portfolio11-460x307.jpg 460w, http://themes.vibethemes.com/wplms/skins/default/wp-content/uploads/2008/09/portfolio11-120x80.jpg 120w, http://themes.vibethemes.com/wplms/skins/default/wp-content/uploads/2008/09/portfolio11-310x207.jpg 310w, http://themes.vibethemes.com/wplms/skins/default/wp-content/uploads/2008/09/portfolio11.jpg 768w" sizes="(max-width: 768px) 100vw, 768px" /></a></div><div class="block_content"><h4 class="block_title"><a href="a-post-with-everything-in-it/index.html" title="A Post With Everything In It">A Post With Everything In It</a></h4><div class="date"><small>September 11,2008 / <a href="category/general/esocial/index.html">eSocial</a> <a href="category/general/index.html">General</a> <a href="category/general/esocial/networking/index.html">Networking</a> <a href="category/technology/index.html">Technology</a>  / 2  Comments</small></div><p class="block_desc">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Curabitur quam augue, vehicula quis,...</p></div></div></li></ul></div></div>
</div> <!-- end .v_column_col-md-6 col-sm-6 -->
<div  class="v_module v_column col-md-3 col-sm-3 " >
<div  class="v_module v_text_block  nothing_selected" ><p><h3 class="heading "><span>Apply for Instructor</span></h3></p><div class="form">
           	 <form method="post" data-to="example@example.com" data-subject="Subject" > <input type="text" placeholder="Name" class="form_field text" data-validate="" /> <input type="text" placeholder="Email" class="form_field text" data-validate="email" /> <input type="text" placeholder="Phone" class="form_field text" data-validate="numeric" /> <input type="submit" class="form_submit button primary" value="Apply" /> <div class="response" data-security="6bc8141413"></div></form>
           	 </div></div>
</div> <!-- end .v_column_col-md-3 col-sm-3 -->
<div  class="v_module v_column col-md-3 col-sm-3 " >
<div  class="v_module custom_post_carousel " ><div id="Testimonials"></div><h3 class="heading"><span>Testimonials</span></h3><div id="carousel625" class="vibe_carousel flexslider loading onecol  " data-block-width="268" data-block-max="1" data-block-min="1">
  	            <ul class="slides"><li><div class="block testimonials"><div class="testimonial_item style2 clearfix">
                                    <div class="testimonial-content">    
                                        <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered...<a href="testimonial/testimonial-6/index.html" class="link">Read more</a></p>
                                       <div class="author">
                                          <img width="460" height="460" src="wp-content/uploads/2013/08/user.jpg" class="attachment-full size-full wp-post-image" alt="user" srcset="http://themes.vibethemes.com/wplms/skins/default/wp-content/uploads/2013/08/user-150x150.jpg 150w, http://themes.vibethemes.com/wplms/skins/default/wp-content/uploads/2013/08/user.jpg 460w, http://themes.vibethemes.com/wplms/skins/default/wp-content/uploads/2013/08/user-180x180.jpg 180w, http://themes.vibethemes.com/wplms/skins/default/wp-content/uploads/2013/08/user-300x300.jpg 300w, http://themes.vibethemes.com/wplms/skins/default/wp-content/uploads/2013/08/user-120x120.jpg 120w, http://themes.vibethemes.com/wplms/skins/default/wp-content/uploads/2013/08/user-310x310.jpg 310w" sizes="(max-width: 460px) 100vw, 460px" />  
                                          <h4>Indiana Jones</h4>
                                          <small>Co-Founder Director</small>
                                        </div>     
                                    </div>        
                                    
                                </div></div></li><li><div class="block testimonials"><div class="testimonial_item style2 clearfix">
                                    <div class="testimonial-content">    
                                        <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered...<a href="testimonial/testimonial-5/index.html" class="link">Read more</a></p>
                                       <div class="author">
                                          <img width="460" height="460" src="wp-content/uploads/2013/08/223asd.jpg" class="attachment-full size-full wp-post-image" alt="223asd" srcset="http://themes.vibethemes.com/wplms/skins/default/wp-content/uploads/2013/08/223asd-150x150.jpg 150w, http://themes.vibethemes.com/wplms/skins/default/wp-content/uploads/2013/08/223asd.jpg 460w, http://themes.vibethemes.com/wplms/skins/default/wp-content/uploads/2013/08/223asd-180x180.jpg 180w, http://themes.vibethemes.com/wplms/skins/default/wp-content/uploads/2013/08/223asd-300x300.jpg 300w, http://themes.vibethemes.com/wplms/skins/default/wp-content/uploads/2013/08/223asd-120x120.jpg 120w, http://themes.vibethemes.com/wplms/skins/default/wp-content/uploads/2013/08/223asd-310x310.jpg 310w" sizes="(max-width: 460px) 100vw, 460px" />  
                                          <h4>Lissie Anderson</h4>
                                          <small>Designer</small>
                                        </div>     
                                    </div>        
                                    
                                </div></div></li><li><div class="block testimonials"><div class="testimonial_item style2 clearfix">
                                    <div class="testimonial-content">    
                                        <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered...<a href="testimonial/testimonial-4/index.html" class="link">Read more</a></p>
                                       <div class="author">
                                          <img width="460" height="460" src="wp-content/uploads/2013/08/asd.jpg" class="attachment-full size-full wp-post-image" alt="asd" srcset="http://themes.vibethemes.com/wplms/skins/default/wp-content/uploads/2013/08/asd-150x150.jpg 150w, http://themes.vibethemes.com/wplms/skins/default/wp-content/uploads/2013/08/asd.jpg 460w, http://themes.vibethemes.com/wplms/skins/default/wp-content/uploads/2013/08/asd-180x180.jpg 180w, http://themes.vibethemes.com/wplms/skins/default/wp-content/uploads/2013/08/asd-300x300.jpg 300w, http://themes.vibethemes.com/wplms/skins/default/wp-content/uploads/2013/08/asd-120x120.jpg 120w, http://themes.vibethemes.com/wplms/skins/default/wp-content/uploads/2013/08/asd-310x310.jpg 310w" sizes="(max-width: 460px) 100vw, 460px" />  
                                          <h4>Will Smith</h4>
                                          <small>CEO, Techtonic Inc.</small>
                                        </div>     
                                    </div>        
                                    
                                </div></div></li></ul></div></div>
</div> <!-- end .v_column_col-md-3 col-sm-3 -->
</div>        </div>
    </div>
</section>
<footer>
    <div class="container">
        <div class="row">
            <div class="footertop">
                <div class="col-md-3 col-sm-6"><div class="footerwidget"><h4 class="footertitle"><span>About WPLMS</span></h4>			<div class="textwidget">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which donât look even slightly believable. 

<h4>WPLMS : The Best LMS platform for WordPress</h4></div>
		</div></div><div class="widget buddypress col-md-3 col-sm-6"><div class="widget buddypress footerwidget"><h4 class="footertitle"><span>Popular Courses</span></h4><ul class="widget_course_list no-ajax">     
	<li itemscope itemtype="http://schema.org/Product"><a href="course/social-media-management/index.html"><img width="150" height="150" src="wp-content/uploads/2014/02/socialmedia1-150x150.jpg" class="attachment-thumbnail size-thumbnail wp-post-image" alt="socialmedia" srcset="http://themes.vibethemes.com/wplms/skins/default/wp-content/uploads/2014/02/socialmedia1-150x150.jpg 150w, http://themes.vibethemes.com/wplms/skins/default/wp-content/uploads/2014/02/socialmedia1-180x180.jpg 180w, http://themes.vibethemes.com/wplms/skins/default/wp-content/uploads/2014/02/socialmedia1-300x300.jpg 300w" sizes="(max-width: 150px) 100vw, 150px" /><h6><em itemprop="name">Social Media Management</em><span><strong class="course-star-rating">
			<i class="hide">4</i><span class="fill"></span><span class="fill"></span><span class="fill"></span><span class="fill"></span><span></span></strong><strong>( 1 REVIEWS )</strong> <div class="students"> 8 STUDENTS</div></span></h6></a></li><li itemscope itemtype="http://schema.org/Product"><a href="course/developing-mobile-apps/index.html"><img width="150" height="150" src="wp-content/uploads/2014/02/mobileapps1-150x150.jpg" class="attachment-thumbnail size-thumbnail wp-post-image" alt="mobileapps" srcset="http://themes.vibethemes.com/wplms/skins/default/wp-content/uploads/2014/02/mobileapps1-150x150.jpg 150w, http://themes.vibethemes.com/wplms/skins/default/wp-content/uploads/2014/02/mobileapps1-180x180.jpg 180w, http://themes.vibethemes.com/wplms/skins/default/wp-content/uploads/2014/02/mobileapps1-300x300.jpg 300w" sizes="(max-width: 150px) 100vw, 150px" /><h6><em itemprop="name">Developing Mobile Apps</em><span><strong class="course-star-rating">
			<i class="hide">3</i><span class="fill"></span><span class="fill"></span><span class="fill"></span><span></span><span></span></strong><strong>( 1 REVIEWS )</strong> <div class="students"> 5 STUDENTS</div></span></h6></a></li><li itemscope itemtype="http://schema.org/Product"><a href="course/software-training/index.html"><img width="150" height="150" src="wp-content/uploads/2014/02/softwaretraining1-150x150.jpg" class="attachment-thumbnail size-thumbnail wp-post-image" alt="softwaretraining" srcset="http://themes.vibethemes.com/wplms/skins/default/wp-content/uploads/2014/02/softwaretraining1-150x150.jpg 150w, http://themes.vibethemes.com/wplms/skins/default/wp-content/uploads/2014/02/softwaretraining1-180x180.jpg 180w, http://themes.vibethemes.com/wplms/skins/default/wp-content/uploads/2014/02/softwaretraining1-300x300.jpg 300w" sizes="(max-width: 150px) 100vw, 150px" /><h6><em itemprop="name">Software Training</em><span><strong class="course-star-rating">
			<i class="hide">4.3</i><span class="fill"></span><span class="fill"></span><span class="fill"></span><span class="fill"></span><span></span></strong><strong>( 4 REVIEWS )</strong> <div class="students"> 40 STUDENTS</div></span></h6></a></li>	</ul>	</div></div>	<div class="widget buddypress col-md-3 col-sm-6"><div class="widget buddypress footerwidget"><h4 class="footertitle"><span>Most Rated</span></h4><ul class="widget_course_list no-ajax">     
	<li itemscope itemtype="http://schema.org/Product"><a href="course/basic-of-nature-photography/index.html"><img width="150" height="150" src="wp-content/uploads/2014/02/photography31-150x150.jpg" class="attachment-thumbnail size-thumbnail wp-post-image" alt="photography3" srcset="http://themes.vibethemes.com/wplms/skins/default/wp-content/uploads/2014/02/photography31-150x150.jpg 150w, http://themes.vibethemes.com/wplms/skins/default/wp-content/uploads/2014/02/photography31-180x180.jpg 180w, http://themes.vibethemes.com/wplms/skins/default/wp-content/uploads/2014/02/photography31-300x300.jpg 300w" sizes="(max-width: 150px) 100vw, 150px" /><h6><em itemprop="name">Basic of Nature Photography</em><span><strong class="course-star-rating">
			<i class="hide">4</i><span class="fill"></span><span class="fill"></span><span class="fill"></span><span class="fill"></span><span></span></strong><strong>( 4 REVIEWS )</strong> <div class="students"> 11 STUDENTS</div></span></h6></a></li><li itemscope itemtype="http://schema.org/Product"><a href="course/how-to-write-effectively/index.html"><img width="150" height="150" src="wp-content/uploads/2014/02/writing11-150x150.jpg" class="attachment-thumbnail size-thumbnail wp-post-image" alt="writing1" srcset="http://themes.vibethemes.com/wplms/skins/default/wp-content/uploads/2014/02/writing11-150x150.jpg 150w, http://themes.vibethemes.com/wplms/skins/default/wp-content/uploads/2014/02/writing11-180x180.jpg 180w, http://themes.vibethemes.com/wplms/skins/default/wp-content/uploads/2014/02/writing11-300x300.jpg 300w" sizes="(max-width: 150px) 100vw, 150px" /><h6><em itemprop="name">How to write effectively</em><span><strong class="course-star-rating">
			<i class="hide">4</i><span class="fill"></span><span class="fill"></span><span class="fill"></span><span class="fill"></span><span></span></strong><strong>( 4 REVIEWS )</strong> <div class="students"> 20 STUDENTS</div></span></h6></a></li><li itemscope itemtype="http://schema.org/Product"><a href="course/software-training/index.html"><img width="150" height="150" src="wp-content/uploads/2014/02/softwaretraining1-150x150.jpg" class="attachment-thumbnail size-thumbnail wp-post-image" alt="softwaretraining" srcset="http://themes.vibethemes.com/wplms/skins/default/wp-content/uploads/2014/02/softwaretraining1-150x150.jpg 150w, http://themes.vibethemes.com/wplms/skins/default/wp-content/uploads/2014/02/softwaretraining1-180x180.jpg 180w, http://themes.vibethemes.com/wplms/skins/default/wp-content/uploads/2014/02/softwaretraining1-300x300.jpg 300w" sizes="(max-width: 150px) 100vw, 150px" /><h6><em itemprop="name">Software Training</em><span><strong class="course-star-rating">
			<i class="hide">4.3</i><span class="fill"></span><span class="fill"></span><span class="fill"></span><span class="fill"></span><span></span></strong><strong>( 4 REVIEWS )</strong> <div class="students"> 40 STUDENTS</div></span></h6></a></li>	</ul>	</div></div>	<div class="col-md-3 col-sm-6"><div class="footerwidget">			<div class="textwidget"><img src="http://vibethemes.com/envato/wplms/wp-content/uploads/2014/02/banner-home.png" /></div>
		</div></div>            </div>
        </div>
        <div class="row">
            <div class="footerbottom">
                <div class="col-md-3 col-sm-6"><div class="footerwidget"><h4 class="footertitle"><span>Course Categories</span></h4><ul class="name ">	<li class="cat-item cat-item-52"><a href="course-cat/technology/index.html" title="All technology courses">Technology</a>
</li>
	<li class="cat-item cat-item-43"><a href="course-cat/photography-2/index.html" title="All Photography Courses">Photography</a>
</li>
	<li class="cat-item cat-item-33"><a href="course-cat/language/index.html" title="Language Courses">Language</a>
</li>
	<li class="cat-item cat-item-24"><a href="course-cat/business/index.html" title="All business courses">Business</a>
</li>
</ul></div></div><div class="col-md-3 col-sm-6"><div class="footerwidget"><div class="certificate_code_validator"><h4 class="footertitle"><span>Certificate Code</span></h4><form action="http://themes.vibethemes.com/wplms/skins/default/default-certificate-template/" method="get"><input type="text" class="form_field" name="certificate_code" placeholder="Enter Certificate Code" /><input type="submit" class="button primary small" value="Validate" /></form>
			  </div></div></div><div class="col-md-3 col-sm-6"><div class="footerwidget"><h4 class="footertitle"><span>Tags</span></h4><div class="tagcloud"><a href='tag/tag1/index.html' class='tag-link-14' title='5 topics' style='font-size: 20.2181818182pt;'>tag1</a>
<a href='tag/tag2/index.html' class='tag-link-15' title='6 topics' style='font-size: 22pt;'>tag2</a>
<a href='tag/tag3/index.html' class='tag-link-16' title='3 topics' style='font-size: 15.6363636364pt;'>tag3</a>
<a href='tag/tag4/index.html' class='tag-link-17' title='1 topic' style='font-size: 8pt;'>tag4</a>
<a href='tag/tag5/index.html' class='tag-link-18' title='5 topics' style='font-size: 20.2181818182pt;'>tag5</a>
<a href='tag/tag6/index.html' class='tag-link-19' title='2 topics' style='font-size: 12.5818181818pt;'>tag6</a>
<a href='tag/tag7/index.html' class='tag-link-20' title='4 topics' style='font-size: 18.1818181818pt;'>tag7</a></div>
</div></div><div class="widget buddypress col-md-3 col-sm-6"><div class="widget buddypress footerwidget"><h4 class="footertitle"><span>Who&#8217;s Online</span></h4>
		
			<div class="widget-error">
				There are no users currently online			</div>

		
		</div></div>            </div>
        </div>
    </div> 
    <div id="scrolltop">
        <a><i class="icon-arrow-1-up"></i><span>top</span></a>
    </div>
</footer>
<div id="footerbottom">
    <div class="container">
        <div class="row">
            <div class="col-md-3">
                <h2 id="footerlogo"><a href="index.html"><img src="wp-content/themes/wplms/assets/images/logo.png" alt="WPLMS" /></a></h2>
                            </div>
            <div class="col-md-9">
                                        <div id="footermenu">
                            <ul id="menu-footer-menu" class="footermenu"><li id="menu-item-2008" class="menu-item menu-item-type-post_type menu-item-object-page current-menu-item page_item page-item-1427 current_page_item menu-item-2008"><a href="index.html">Home</a></li>
<li id="menu-item-2009" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-2009"><a href="about/index.html">About</a></li>
<li id="menu-item-2012" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-2012"><a href="services/index.html">Services</a></li>
<li id="menu-item-2010" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-2010"><a href="blog/index.html">Blog</a></li>
<li id="menu-item-2011" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-2011"><a href="contact-us/index.html">Contact Us</a></li>
</ul>                        </div> 
                                    </div>
        </div>
    </div>
</div>
</div><!-- END PUSHER -->
</div><!-- END MAIN -->
	<!-- SCRIPTS -->

<!-- Generated in 1.613 seconds. (218 q) -->

			<script type="text/javascript">
		/*<![CDATA[*/
		var gmapstyles = 'default';
		/* ]]> */
		</script>		
				<style>
		#wplms_demos_slide_panel{
			position:fixed;
			top:100px;
			right:0;
			border-radius:2px 2px 0 0;
			width:200px;
			background:#FFF;
			z-index:99;
			opacity:1;
			box-shadow: 0 1px 1px rgba(0,0,0,.6);
			webkit-transition: all 0.2s ease-in-out;
		    -moz-transition: all 0.2s ease-in-out;
		    -o-transition: all 0.2s ease-in-out;
	  	    transition: all 0.2s ease-in-out;
		}
		.wplms_demos{position:relative;}
		#wplms_demos_slide_panel.close{
			-webkit-transform: translate3d(200px, 0, 0);
			transform: translate3d(200px, 0, 0);
		}
		#wplms_demos_slide_panel span{
			position:absolute;
			top:0;
			left:-40px;
			z-index:99;
			padding:10px;
			display:block;
			border-radius:2px 2px 0 0;
			background:#444;
			color:#FFF;line-height:1;
		}
		#wplms_demos_slide_panel span:after{
			content: "\f229";
			font-family: 'dashicons';
			color:#FFF;line-height:1;
			font-size:20px;
		}
		#wplms_demos_slide_panel .title{
			padding:10px;
			text-align:center;
			font-size: 14px;font-weight:600;text-transform:uppercase;
		}
		#wplms_demos_slide_panel .buynow{
			margin:10px 0;
			text-align:center;
			font-size:11px;font-weight:600;text-transform:uppercase;
		}
		#wplms_demos_slide_panel .buynow a{
			padding:8px 20px; display:inline-block;
			color:#FFF; border-radius:4px;
			background:#82b440;font-weight:600;
		    -webkit-box-shadow: 0 2px 0 #6f9a37;
    		box-shadow: 0 2px 0 #6f9a37;
		}
		#wplms_demos_slide_panel .wplms_demo_container{
			height:400px;
			background:#444;
			padding:10px;
			overflow-y:scroll;
		}#wplms_demos_slide_panel .wplms_demo_container img{border-radius:4px; box-shadow:0 1px 1px #333;}
		#wplms_demos_slide_panel .wplms_demo_container li{
			list-style:none;
			border:10px solid #444;
			display:block;
		}
		</style>
				<div id="wplms_demos_slide_panel">
			<div class="wplms_demos">
				<span></span>
				<div class="title"> WPLMS Demos</div>
				<div class="wplms_demo_container">
					<ul>
					<li><a href="http://themes.vibethemes.com/wplms/skins/modern"><img src="http://themes.vibethemes.com/wplms/wp-content/uploads/2015/09/wplms_modern-460x314.png" title="Modern theme" /></a></li><li><a href="http://themes.vibethemes.com/wplms/skins/oneinstructor"><img src="http://themes.vibethemes.com/wplms/wp-content/uploads/2015/09/oneinstructor-460x364.png" title="One Instructor" /></a></li><li><a href="http://themes.vibethemes.com/wplms/skins/onecourse"><img src="http://themes.vibethemes.com/wplms/wp-content/uploads/2015/10/onecourse-460x296.png" title="One Course" /></a></li><li><a href="http://themes.vibethemes.com/wplms/skins/points_system"><img src="http://vibethemes.com/envato/wplms/wp-content/uploads/2015/03/points_system-768x552.png" title="Points System" /></a></li><li><a href="http://themes.vibethemes.com/wplms/skins/childone"><img src="http://themes.vibethemes.com/wplms/wp-content/uploads/2015/10/childone-460x326.png" title="Child One" /></a></li><li><a href="http://themes.vibethemes.com/wplms/skins/default"><img src="http://themes.vibethemes.com/wplms/wp-content/uploads/2015/10/default-460x331.png" title="Default theme" /></a></li>					</ul>
				</div>
				<div class="buynow"><a href="http://themeforest.net/item/wplms-learning-management-system/6780226">Buy Now</a></div>
			</div>
		</div>
				<script>
			jQuery(document).ready(function($){
				$('#wplms_demos_slide_panel span').click(function(){
					if($('html').hasClass('csstransitions')){
						$('#wplms_demos_slide_panel').toggleClass('close');
					}else{
						$('#wplms_demos_slide_panel').toggle(200);
					}
				});
			});
		</script>
		<link rel='stylesheet' id='eventon_dynamic_styles-css'  href='wp-content/plugins/eventON/assets/css/eventon_dynamic_stylesc1f9.css?ver=4.4.2' type='text/css' media='all' />
<script type='text/javascript' src='wp-content/plugins/bbpress/templates/default/js/editore4d2.js?ver=2.5.8-5815'></script>
<script type='text/javascript'>
/* <![CDATA[ */
var mejsL10n = {"language":"en-US","strings":{"Close":"Close","Fullscreen":"Fullscreen","Download File":"Download File","Download Video":"Download Video","Play\/Pause":"Play\/Pause","Mute Toggle":"Mute Toggle","None":"None","Turn off Fullscreen":"Turn off Fullscreen","Go Fullscreen":"Go Fullscreen","Unmute":"Unmute","Mute":"Mute","Captions\/Subtitles":"Captions\/Subtitles"}};
var _wpmejsSettings = {"pluginPath":"\/wplms\/skins\/default\/wp-includes\/js\/mediaelement\/"};
/* ]]> */
</script>
<script type='text/javascript' src='wp-includes/js/mediaelement/mediaelement-and-player.mineb0c.js?ver=2.18.1'></script>
<script type='text/javascript'>
/* <![CDATA[ */
var thickboxL10n = {"next":"Next >","prev":"< Prev","image":"Image","of":"of","close":"Close","noiframes":"This feature requires inline frames. You have iframes disabled or your browser does not support them.","loadingAnimation":"http:\/\/themes.vibethemes.com\/wplms\/skins\/default\/wp-includes\/js\/thickbox\/loadingAnimation.gif"};
/* ]]> */
</script>
<script type='text/javascript' src='wp-includes/js/thickbox/thickboxab87.js?ver=3.1-20121105'></script>
<script type='text/javascript'>
/* <![CDATA[ */
var vibe_shortcode_strings = {"sending_mail":"Sending mail","error_string":"Error :","invalid_string":"Invalid ","captcha_mismatch":"Captcha Mismatch"};
/* ]]> */
</script>
<script type='text/javascript' src='wp-content/plugins/vibe-shortcodes/js/shortcodes5152.js?ver=1.0'></script>
<script type='text/javascript' src='wp-content/plugins/woocommerce/assets/js/jquery-blockui/jquery.blockUI.min44fd.js?ver=2.70'></script>
<script type='text/javascript'>
/* <![CDATA[ */
var woocommerce_params = {"ajax_url":"\/wplms\/skins\/default\/wp-admin\/admin-ajax.php","wc_ajax_url":"\/wplms\/skins\/default\/?wc-ajax=%%endpoint%%"};
/* ]]> */
</script>
<script type='text/javascript' src='wp-content/plugins/woocommerce/assets/js/frontend/woocommerce.min16b9.js?ver=2.5.2'></script>
<script type='text/javascript' src='wp-content/plugins/woocommerce/assets/js/jquery-cookie/jquery.cookie.min330a.js?ver=1.4.1'></script>
<script type='text/javascript'>
/* <![CDATA[ */
var wc_cart_fragments_params = {"ajax_url":"\/wplms\/skins\/default\/wp-admin\/admin-ajax.php","wc_ajax_url":"\/wplms\/skins\/default\/?wc-ajax=%%endpoint%%","fragment_name":"wc_fragments"};
/* ]]> */
</script>
<script type='text/javascript' src='wp-content/plugins/woocommerce/assets/js/frontend/cart-fragments.min16b9.js?ver=2.5.2'></script>
<script type='text/javascript' src='wp-content/plugins/vibe-course-module/includes/js/course-module-js.min6734.js?ver=1.9.9'></script>
<script type='text/javascript' src='wp-includes/js/mediaelement/wp-mediaelementc1f9.js?ver=4.4.2'></script>
<script type='text/javascript'>
/* <![CDATA[ */
var BP_DTheme = {"accepted":"Accepted","close":"Close","comments":"comments","leave_group_confirm":"Are you sure you want to leave this group?","mark_as_fav":"Favorite","my_favs":"My Favorites","rejected":"Rejected","remove_fav":"Remove Favorite","show_all":"Show all","show_all_comments":"Show all comments for this thread","show_x_comments":"Show all %d comments","unsaved_changes":"Your profile has unsaved changes. If you leave the page, the changes will be lost.","view":"View","too_short":"Too short","weak":"Weak","good":"Good","strong":"Strong"};
/* ]]> */
</script>
<script type='text/javascript' src='wp-content/themes/wplms/assets/js/old_files/buddypressd5f7.js?ver=2.0'></script>
<script type='text/javascript'>
/* <![CDATA[ */
var vibe_course_module_strings = {"too_fast_answer":"Too Fast or Answer not marked.","answer_saved":"Answer Saved.","processing":"Processing...","saving_answer":"Saving Answer...please wait","remove_user_text":"This step is irreversible. Are you sure you want to remove the User from the course ?","remove_user_button":"Confirm, Remove User from Course","confirm":"Confirm","cancel":"Cancel","reset_user_text":"This step is irreversible. All Units, Quiz results would be reset for this user. Are you sure you want to Reset the Course for this User?","reset_user_button":"Confirm, Reset Course for this User","quiz_reset":"This step is irreversible. All Questions answers would be reset for this user. Are you sure you want to Reset the Quiz for this User? ","quiz_reset_button":"Confirm, Reset Quiz for this User","marks_saved":"Marks Saved","quiz_marks_saved":"Quiz Marks Saved","submit_quiz":"Submit Quiz","sending_messages":"Sending Messages ...","adding_students":"Adding Students to Course ...","successfuly_added_students":"Students successfully added to Course","unable_add_students":"Unable to Add students to Course","select_fields":"Please select fields to download","download":"Download","timeout":"TIMEOUT","theme_color":"#78c8c9","single_dark_color":"#232b2d","for_course":"for Course","active_filters":"Active Filters","clear_filters":"Clear all filters","remove_comment":"Are you sure you want to remove this note?","remove_comment_button":"Confirm, remove note","private_comment":"Make Private","add_comment":"Add your note","submit_quiz_error":"Please add questions or retake the quiz !","remove_announcement":"Are you sure you want to remove this Annoucement?","start_quiz_notification":"You're about to start the Quiz. Please click confirm to begin the quiz.","submit_quiz_notification":"Are you sure you want to submit the quiz. Submitting the quiz will freeze all your answers, you can not change them.  Please confirm.","check_results":"Check results","correct":"Correct","incorrect":"Incorrect","confirm_apply":"Are you sure you want to apply for this Course ?","instructor_uncomplete_unit":"Are you sure you want mark this unit \"uncomplete\" for the user ?","instructor_complete_unit":"Are you sure you want to mark this unit \"complete\" for the user ?","unanswered_questions":"You have few unanswered questions. Are you sure you want to continue ?"};
/* ]]> */
</script>
<script type='text/javascript' src='wp-content/plugins/vibe-course-module/includes/js/course6734.js?ver=1.9.9'></script>
<script type='text/javascript' src='wp-includes/js/wp-embed.minc1f9.js?ver=4.4.2'></script>
<script type='text/javascript'>
/* <![CDATA[ */
var wplms = {"more":"More","view_more":"View More","menu":"Menu","wplms_woocommerce_validate":"Please fill in all the required fields (indicated by *)","open_menu":"Open\/Close Menu"};
/* ]]> */
</script>
<script type='text/javascript' src='wp-content/themes/wplms/assets/js/wplms.minc1f9.js?ver=4.4.2'></script>
<script type='text/javascript' src='wp-content/plugins/wplms-eventon/includes/eventon-daily-view/assets/jquery.mousewheel.min7140.js?ver=0.31'></script>
<script type='text/javascript' src='wp-content/plugins/wplms-eventon/includes/eventon-daily-view/assets/dv_script7140.js?ver=0.31'></script>
<script>
  (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
  })(window,document,'script','http://www.google-analytics.com/analytics.js','ga');
  ga('create', 'UA-9756284-1', 'auto');
  ga('send', 'pageview');
</script></body>

<!-- Mirrored from themes.vibethemes.com/wplms/skins/default/ by HTTrack Website Copier/3.x [XR&CO'2014], Sat, 13 Feb 2016 05:52:48 GMT -->
</html>