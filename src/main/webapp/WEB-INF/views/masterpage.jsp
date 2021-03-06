﻿<!DOCTYPE html>
<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/fmt" prefix="fmt"%>
<%@ page session="false"%>
<%@taglib uri="http://www.springframework.org/tags/form" prefix="form"%>
<html lang="en-US">

<!-- Mirrored from themes.vibethemes.com/wplms/skins/default/ by HTTrack Website Copier/3.x [XR&CO'2014], Sat, 13 Feb 2016 05:50:36 GMT -->
<!-- Added by HTTrack -->
<meta http-equiv="content-type" content="text/html;charset=UTF-8" /><!-- /Added by HTTrack -->
<head>
    <meta charset="UTF-8">
    <title>Social website for learning </title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="author" content="VibeThemes">
    <link rel="shortcut icon" href="#" />
    <link rel="icon" type="image/png" href="#">
    <script type="javascript/text">
        NProgress.start();
    </script>
    <meta name='robots' content='noindex,follow' />
    <link rel="alternate" type="application/rss+xml" title="WPLMS &raquo; Feed" href="feed/index.html" />
    <link rel="alternate" type="application/rss+xml" title="WPLMS &raquo; Comments Feed" href="comments/feed/index.html" />
    <link rel="alternate" type="application/rss+xml" title="WPLMS &raquo; Home Comments Feed" href="home/feed/index.html" />
    <script type="text/javascript">
        window._wpemojiSettings = { "baseUrl": "https:\/\/s.w.org\/images\/core\/emoji\/72x72\/", "ext": ".png", "source": { "concatemoji": "http:\/\/themes.vibethemes.com\/wplms\/skins\/default\/wp-includes\/js\/wp-emoji-release.min.js?ver=4.4.2" } };
        !function (a, b, c) { function d(a) { var c, d = b.createElement("canvas"), e = d.getContext && d.getContext("2d"), f = String.fromCharCode; return e && e.fillText ? (e.textBaseline = "top", e.font = "600 32px Arial", "flag" === a ? (e.fillText(f(55356, 56806, 55356, 56826), 0, 0), d.toDataURL().length > 3e3) : "diversity" === a ? (e.fillText(f(55356, 57221), 0, 0), c = e.getImageData(16, 16, 1, 1).data.toString(), e.fillText(f(55356, 57221, 55356, 57343), 0, 0), c !== e.getImageData(16, 16, 1, 1).data.toString()) : ("simple" === a ? e.fillText(f(55357, 56835), 0, 0) : e.fillText(f(55356, 57135), 0, 0), 0 !== e.getImageData(16, 16, 1, 1).data[0])) : !1 } function e(a) { var c = b.createElement("script"); c.src = a, c.type = "text/javascript", b.getElementsByTagName("head")[0].appendChild(c) } var f, g; c.supports = { simple: d("simple"), flag: d("flag"), unicode8: d("unicode8"), diversity: d("diversity") }, c.DOMReady = !1, c.readyCallback = function () { c.DOMReady = !0 }, c.supports.simple && c.supports.flag && c.supports.unicode8 && c.supports.diversity || (g = function () { c.readyCallback() }, b.addEventListener ? (b.addEventListener("DOMContentLoaded", g, !1), a.addEventListener("load", g, !1)) : (a.attachEvent("onload", g), b.attachEvent("onreadystatechange", function () { "complete" === b.readyState && c.readyCallback() })), f = c.source || {}, f.concatemoji ? e(f.concatemoji) : f.wpemoji && f.twemoji && (e(f.twemoji), e(f.wpemoji))) }(window, document, window._wpemojiSettings);
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
    <link rel='stylesheet' id='layerslider-css' href='wp-content/plugins/LayerSlider/static/css/layersliderdeba.css?ver=5.5.0' type='text/css' media='all' />
    <link rel='stylesheet' id='bbp-default-css' href='wp-content/plugins/bbpress/templates/default/css/bbpresse4d2.css?ver=2.5.8-5815' type='text/css' media='screen' />
    <link rel='stylesheet' id='wplms-customizer-css-css' href='wp-content/plugins/wplms-customizer/css/customc1f9.css?ver=4.4.2' type='text/css' media='all' />
    <link rel='stylesheet' id='bp-course-css-css' href='wp-content/plugins/vibe-course-module/includes/css/course_templatec1f9.css?ver=4.4.2' type='text/css' media='all' />
    <link rel='stylesheet' id='google-webfonts-css' href='http://fonts.googleapis.com/css?family=Open+Sans:regular|Raleway:regular|&amp;subsets=latin' type='text/css' media='all' />
    <link rel='stylesheet' id='bbpress-css-css' href='wp-content/themes/wplms/assets/css/bbpress.min7406.css?ver=2.0.1' type='text/css' media='all' />
    <link rel='stylesheet' id='woocommerce-css-css' href='wp-content/themes/wplms/assets/css/woocommerce.min7406.css?ver=2.0.1' type='text/css' media='all' />
    <link rel='stylesheet' id='wplms-style-css' href='wp-content/themes/wplms/assets/css/style.min7406.css?ver=2.0.1' type='text/css' media='all' />
    <link rel='stylesheet' id='evcal_google_fonts-css' href='http://fonts.googleapis.com/css?family=Oswald%3A400%2C300%7COpen+Sans%3A400%2C300&amp;ver=4.4.2' type='text/css' media='screen' />
    <link rel='stylesheet' id='evcal_cal_default-css' href='wp-content/plugins/eventON/assets/css/eventon_stylese62b.css?ver=2.3.15' type='text/css' media='all' />
    <link rel='stylesheet' id='evo_font_icons-css' href='wp-content/plugins/eventON/assets/fonts/font-awesomec1f9.css?ver=4.4.2' type='text/css' media='all' />
    <link rel='stylesheet' id='evo_dv_styles-css' href='wp-content/plugins/wplms-eventon/includes/eventon-daily-view/assets/dv_stylesc1f9.css?ver=4.4.2' type='text/css' media='all' />
    <script type='text/javascript' src='wp-content/plugins/LayerSlider/static/js/greensockcd11.js?ver=1.11.8'></script>
    <script type='text/javascript' src='wp-includes/js/jquery/jqueryc1d8.js?ver=1.11.3'></script>
    <script type='text/javascript' src='wp-includes/js/jquery/jquery-migrate.min1576.js?ver=1.2.1'></script>
    <script type='text/javascript' src='wp-content/plugins/LayerSlider/static/js/layerslider.kreaturamedia.jquerydeba.js?ver=5.5.0'></script>
    <script type='text/javascript' src='wp-content/plugins/LayerSlider/static/js/layerslider.transitionsdeba.js?ver=5.5.0'></script>
    <script type='text/javascript'>
        /* <![CDATA[ */
        var BP_Confirm = { "are_you_sure": "Are you sure?" };
        /* ]]> */
    </script>
    <script type='text/javascript' src='wp-content/plugins/buddypress/bp-core/js/confirm.minb2da.js?ver=2.4.3'></script>
    <script type='text/javascript'>
        /* <![CDATA[ */
        var wc_add_to_cart_params = { "ajax_url": "\/wplms\/skins\/default\/wp-admin\/admin-ajax.php", "wc_ajax_url": "\/wplms\/skins\/default\/?wc-ajax=%%endpoint%%", "i18n_view_cart": "View Cart", "cart_url": "http:\/\/themes.vibethemes.com\/wplms\/skins\/default\/cart\/", "is_cart": "", "cart_redirect_after_add": "no" };
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

    <meta name="generator" content="Powered by Visual Composer - drag and drop page builder for WordPress." />
    <!--[if IE 8]><link rel="stylesheet" type="text/css" href="http://themes.vibethemes.com/wplms/skins/default/wp-content/plugins/js_composer/assets/css/vc-ie8.css" media="screen"><![endif]-->
    <input type="hidden" id="bp_social_connect_security" name="bp_social_connect_security" value="2f5fa3c4e8" />
    <input type="hidden" name="_wp_http_referer" value="/wplms/skins/default/" />
    <script type="text/javascript">
        var ajaxurl = 'wp-admin/admin-ajax.html';
    </script>
    <style>
        .bp_social_connect {
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

        .vibe-bp-login .bp_social_connect a {
            margin: 0px -10px 0;
            width: 240px;
            border-radius: 0;
            box-shadow: none;
        }

        .bp_social_connect a:hover {
            box-shadow: none;
        }

        .bp_social_connect a:focus {
            box-shadow: inset 0 4px 0 rgba(0,0,0,0.1);
        }

        #bp_social_connect_twitter {
            background: #4099FF;
        }

        #bp_social_connect_google {
            background: #DD4B39;
        }
    </style>
    <style>
        #item-meta .star-rating, .item-meta .star-rating {
            float: left;
            width: auto;
        }

        .menu-sidebar.column5 .widget.buddypress.inside {
            width: 100%;
            float: left;
        }
    </style>
    <noscript>
    <style>
        .wpb_animate_when_almost_visible {
            opacity: 1;
        }
    </style></noscript>
</head>
<body class="home-page home page page-id-1427 page-template page-template-notitle page-template-notitle-php logged-out wpb-js-composer js-comp-ver-4.6.2 vc_responsive">
<div id="global" class="global">
    <div class="pagesidebar">
        <div class="sidebarcontent">
            <h2 id="sidelogo">
                <a href="./"><img src="wp-content/themes/wplms/assets/images/logo.png" alt="WPLMS" /></a>
            </h2>
            <ul id="menu-mobilemenu" class="sidemenu">
                <li id="menu-item-2013" class="menu-item menu-item-type-post_type menu-item-object-page current-menu-item page_item page-item-1427 current_page_item menu-item-2013"><a href="index.html">Home</a></li>
                <li id="menu-item-2015" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-2015"><a href="groups/index.html">Groups</a></li>
                <li id="menu-item-2014" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-2014"><a href="blog/index.html">Blog</a></li>
                <li id="menu-item-2016" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-2016"><a href="contact-us/index.html">Contact</a></li>
            </ul>
        </div>
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
                            
                            
                            <c:choose>
                            	<c:when test="${sessionScope.USER != null }">
                            		<a href="http://themes.vibethemes.com/wplms/skins/default/members/quang/" class="smallimg vbplogin">
		                            <em></em>
		                            <img src="http://themes.vibethemes.com/wplms/skins/default/wp-content/uploads/avatars/732/732-bpfull.jpg" class="avatar user-732-avatar avatar-460 photo" width="460" height="460" alt="Profile picture of Quang Phương">Quang Phương</a>
                            	</c:when>
                            	<c:when test="${sessionScope.USER == null }">
                            		<li><a href="login" class="smallimg vbplogin">Login</a></li>
                            		<li><a href="register" class="vbpregister" title="Create an account">Sign Up</a></li>
                            	</c:when>
                            </c:choose>
                            
                            
                        </ul>
                       
                    </div>
                    <div id="vibe_bp_login" class="default_login">
                        <form name="login-form" id="vbp-login-form" class="standard-form" action="http://themes.vibethemes.com/wplms/skins/default/wp-login.php" method="post">
                            <label>
                                Username<br />
                                <input type="text" name="log" id="side-user-login" class="input" tabindex="1" value="" />
                            </label>

                            <label>
                                Password <a href="wp-login0da1.html?action=lostpassword&amp;redirect_to=http://themes.vibethemes.com/wplms/skins/default/" tabindex="5" class="tip" title="Forgot Password"><i class="icon-question"></i></a><br />
                                <input type="password" tabindex="2" name="pwd" id="sidebar-user-pass" class="input" value="" />
                            </label>

                            <div class="checkbox small">
                                <input type="checkbox" name="sidebar-rememberme" id="sidebar-rememberme" value="forever" /><label for="sidebar-rememberme">Remember Me</label>
                            </div>

                            <input type="submit" name="user-submit" id="sidebar-wp-submit" value="Log In" tabindex="100" />
                            <input type="hidden" name="user-cookie" value="1" />
                            <a href="register/index.html" class="vbpregister" title="Create an account" tabindex="5">Sign Up</a>
                        </form>


                        <div class="bp_social_connect">
                            <div id="fb-root" class="bp_social_connect_fb"></div>
                            <script type="text/javascript">
                                window.fbAsyncInit = function () {
                                    FB.init({
                                        appId: "716909178340645", // replace your app id here
                                        status: true,
                                        cookie: true,
                                        xfbml: true,
                                        version: 'v2.0'
                                    });
                                    FB.Event.subscribe('auth.authResponseChange', function (response) {

                                        if (response.status === 'connected') {
                                            console.log('success');
                                        } else if (response.status === 'not_authorized') {
                                            console.log('failed');
                                        } else {
                                            console.log('unknown error');
                                        }
                                    });
                                };
                                (function (d) {
                                    var js, id = 'facebook-jssdk', ref = d.getElementsByTagName('script')[0];
                                    if (d.getElementById(id)) { return; }
                                    js = d.createElement('script'); js.id = id; js.async = true;
                                    js.src = "http://connect.facebook.net/en_US/all.js";
                                    ref.parentNode.insertBefore(js, ref);
                                }(document));
                                jQuery(document).ready(function ($) {
                                    $('.bp_social_connect_facebook').on('click', function () {

                                        var $this = $(this);
                                        $this.addClass('loading');
                                        var security = $('#bp_social_connect_security').val();


                                        FB.login(function (response) {
                                            if (response.authResponse) {

                                                FB.api('/me?fields=email,link,first_name,name,last_name', function (response) {
                                                    console.log(response);
                                                    $.ajax({
                                                        url: ajaxurl,
                                                        data: 'action=bp_social_connect_facebook_login&id=' + response.id + '&email=' + response.email + '&first_name=' + response.first_name + '&last_name=' + response.last_name + '&gender=' + response.gender + '&name=' + response.name + '&link=' + response.link + '&locale=' + response.locale + '&security=' + security,
                                                        type: 'POST',
                                                        dataType: 'JSON',
                                                        success: function (data) {
                                                            $this.removeClass('loading');
                                                            if (data.message) {
                                                                form.parents('.bp_social_connect_facebook').before(data.message);
                                                            }
                                                            if (data.redirect_uri) {
                                                                if (data.redirect_uri == 'refresh') {
                                                                    document.location.href = jQuery(location).attr('href');
                                                                } else {
                                                                    document.location.href = data.redirect_uri;
                                                                }
                                                            } else {
                                                                document.location.href = jQuery(location).attr('href');
                                                            }
                                                        },
                                                        error: function (xhr, ajaxOptions, thrownError) {
                                                            $this.removeClass('loading');
                                                            window.location.href = "http://themes.vibethemes.com/wplms/skins/default";
                                                        }
                                                    });

                                                });
                                            } else {

                                            }
                                        }, { scope: 'email,user_likes', return_scopes: true });
                                    });
                                });
                            </script>
                            <a class="bp_social_connect_facebook" href="javascript:void(0)">FACEBOOK</a><br />
                        </div>


                        <style>
                            #bp_social_connect_facebook:before {
                                content: "\f305";
                                float: left;
                                font-size: 16px;
                                font-family: dashicons;
                            }

                            #bp_social_connect_twitter:before {
                                content: "\f301";
                                float: left;
                                font-size: 16px;
                                font-family: dashicons;
                            }

                            #bp_social_connect_google:before {
                                content: "\f462";
                                float: left;
                                font-size: 16px;
                                font-family: dashicons;
                            }
                        </style>
                    </div>
                </div>
            </div>
        </div>
        <header>
            <div class="container">
                <div class="row">
                    <div class="col-md-3 col-sm-3 col-xs-4">
                        <h2 id="logo">
                            <a href="./"><img src="wp-content/themes/wplms/assets/images/logo.png" data-alt-logo="http://themes.vibethemes.com/wplms/skins/default/wp-content/themes/wplms/assets/images/logo.png" alt="WPLMS" /></a>
                        </h2>
                    </div>
                    <div class="col-md-9 col-sm-9 col-xs-8">
                        <div id="searchicon"><i class="icon-search-2"></i></div>
                        <div id="searchdiv">
                            <form role="search" method="get" id="searchform" action="http://themes.vibethemes.com/wplms/skins/default/">
                                <div>
                                    <label class="screen-reader-text" for="s">Search for:</label>
                                    <input type="text" value="" name="s" id="s" placeholder="Hit enter to search..." />
                                    <input type="hidden" value="course" name="post_type" />                                    
                                    <input type="submit" id="searchsubmit" value="Search" />
                                </div>
                            </form>
                        </div>
                        <nav class="menu-main-menu-container">
                            <ul id="menu-main-menu" class="menu">
                                <li id="main-menu-item-2028" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children">
                                    <a href="all-courses/index.html"><strong>All Courses</strong></a>
                                </li>
                                
                                <li id="main-menu-item-2026" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children">
                                    <a href="features-course-structure/index.html"><strong>Course Categories</strong></a>
                                    <ul class="sub-menu">
                                        <li id="main-menu-item-2035" class="menu-item menu-item-type-post_type menu-item-object-page"><a href="features-forums/index.html">Speaking </a></li>
                                        <li id="main-menu-item-2035" class="menu-item menu-item-type-post_type menu-item-object-page"><a href="features-forums/index.html">Writing </a></li>
                                        <li id="main-menu-item-2040" class="menu-item menu-item-type-post_type menu-item-object-page"><a href="features-groups/index.html">Listening</a></li>
                                        <li id="main-menu-item-2041" class="menu-item menu-item-type-post_type menu-item-object-page"><a href="features-members/index.html">Reading</a></li>
                                        <li id="main-menu-item-2041" class="menu-item menu-item-type-post_type menu-item-object-page"><a href="features-members/index.html">IELTS</a></li>
                                    </ul>
                                </li>
                                <li id="main-menu-item-2028" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children">
                                    <a href="all-courses/index.html"><strong>Instructors</strong></a>
                                </li>
                                <c:if test="${sessionScope.USER != null } }">
	                                <li id="main-menu-item-2029" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children">
	                                    <a href="./login.html"><strong>Create courses</strong></a>
	                                </li>
                                </c:if>
                                <li id="main-menu-item-2027" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children">
                                    <a href="page-builder-page/index.html"><strong>Help</strong></a>
                                    <ul class="sub-menu">
                                        <li id="main-menu-item-1997" class="menu-item menu-item-type-post_type menu-item-object-page"><a href="about/index.html">About</a></li>
                                        <li id="main-menu-item-2001" class="menu-item menu-item-type-post_type menu-item-object-page"><a href="contact-us/index.html">Contact Us</a></li>
                                    </ul>
                                </li>
                            </ul>
                        </nav>
                    </div>
                    <a id="trigger">
                        <span class="lines"></span>
                    </a>
                </div>
            </div>
        </header>

	<!-- Body masterpage -->
			   <section id="content">
                <div class="container">
                    <script>
 var opcarousel279 = {
     "directionNav": true,
     "animationLoop": false,
     "slideshow": false
 };</script>
                    <script>
                        var opcarousel258 = {
                            "directionNav": true,
                            "animationLoop": true,
                            "slideshow": true
                        };</script>
                    <script>
                        var opcarousel625 = {
                            "directionNav": true,
                            "animationLoop": true,
                            "slideshow": true
                        };</script><div class="vibe_editor clearfix"></div>
                </div>
            </section>
            <section class='stripe'>
                <!-- Begin Stripe stripe fullwidth -->
                <div class="v_module v_column stripe fullwidth v_first">
                    <style>
                        .homepageslider.stripe {
                            margin-top: 0;
                        }
                    </style><div class="v_module layerslider " data-class="homepageslider">
                    <script data-cfasync="false" type="text/javascript">var lsjQuery = jQuery;</script>
                    <script data-cfasync="false" type="text/javascript">                        lsjQuery(document).ready(function () { if (typeof lsjQuery.fn.layerSlider == "undefined") { lsShowNotice('layerslider_2_1', 'jquery'); } else { lsjQuery("#layerslider_2_1").layerSlider({ responsiveUnder: 1170, layersContainer: 1170, startInViewport: false, skinsPath: 'http://themes.vibethemes.com/wplms/skins/default/wp-content/plugins/LayerSlider/static/skins/' }) } });</script><div class="ls-wp-fullwidth-container" style="height:480px;"><div class="ls-wp-fullwidth-helper"><div id="layerslider_2_1" class="ls-wp-container" style="width:100%;height:480px;max-width:1600px;margin:0 auto;margin-bottom: 0px;"><div class="ls-slide" data-ls="slidedelay:3000; transition2d: all;"><img src="wp-content/themes/wplms/setup/data/uploads/s3.jpg" class="ls-bg" alt="Slide background" /><h2 class="ls-l" style="top:112px;left:477px;font-weight:700; letter-spacing:2px;padding-top:10px;padding-right:20px;padding-bottom:10px;padding-left:20px;font-size:32px;color:#FFFfff;background:rgba(35, 44, 46, 0.75);border-radius:2px;white-space: nowrap;" data-ls="offsetxin:0;easingin:easeOutBack;rotatexin:-90;transformoriginin:50% top 0;offsetxout:0;">LEARNING MANAGEMENT SYSTEM</h2><p class="ls-l" style="top:64px;left:447px;font-weight:800;letter-spacing:1px;text-transform:uppercase;padding-top:20px;padding-right:30px;padding-bottom:20px;padding-left:30px;font-size:20px;color:#FFF;white-space: nowrap;" data-ls="offsetxin:0;delayin:100;transformoriginin:50% bottom 0;offsetxout:0;">For WordPress </p><p class="ls-l" style="top:170px;left:446px;font-weight:600;text-transform:uppercase;padding-top:20px;padding-right:30px;padding-bottom:20px;padding-left:30px;font-size:18px;color:#FFF;white-space: nowrap;" data-ls="offsetxin:0;delayin:200;rotatexin:-90;transformoriginin:50% top 0;offsetxout:0;">Create your own Courses and sell online.<br> It IS Not just a WordPress Theme.</p><button onclick="                            location.href = './register'" class="ls-l" style="top:370px;left:487px;font-weight:600;text-transform:uppercase;padding-top:12px;padding-right:24px;padding-bottom:12px;padding-left:24px;font-size:14px;color:000px;background:#F16645;border-radius:2px;white-space: nowrap;" data-ls="offsetxin:0;offsetyin:80;delayin:550;easingin:easeOutBack;offsetxout:0;offsetyout:-80;">Sign Up Now</button></div><div class="ls-slide" data-ls="slidedelay:3000; transition2d: all;"><img src="wp-content/themes/wplms/setup/data/uploads/s2.jpg" class="ls-bg" alt="Slide background" /><h3 class="ls-l" style="top:77px;left:68px;font-weight:600;padding-top:12px;padding-right:24px;padding-bottom:12px;padding-left:24px;font-size:16px;color:#FFF;background:rgba(49, 59, 61, 0.80);border-radius:2px;white-space: nowrap;" data-ls="offsetxin:0;easingin:easeInOutElastic;rotatexin:-90;transformoriginin:50% top 0;offsetxout:0;">Create Courses, Modules, Units, Quizzes, Questions</h3><h3 class="ls-l" style="top:134px;left:68px;font-weight:600;padding-top:12px;padding-right:24px;padding-bottom:12px;padding-left:24px;font-size:16px;color:#FFF;background:rgba(49, 59, 61, 0.80);border-radius:2px;white-space: nowrap;" data-ls="offsetxin:0;delayin:100;easingin:easeInOutElastic;rotatexin:-90;transformoriginin:50% top 0;offsetxout:0;">Set Timers, Auto Or Manually Evaluate Quizzes</h3><h3 class="ls-l" style="top:189px;left:67px;font-weight:600;padding-top:12px;padding-right:24px;padding-bottom:12px;padding-left:24px;font-size:16px;color:#FFF;background:rgba(49, 59, 61, 0.80);border-radius:2px;white-space: nowrap;" data-ls="offsetxin:0;delayin:200;easingin:easeInOutElastic;rotatexin:-90;transformoriginin:50% top 0;offsetxout:0;">Check Results, Notifications , Messages</h3><h3 class="ls-l" style="top:245px;left:66px;font-weight:600;padding-top:12px;padding-right:24px;padding-bottom:12px;padding-left:24px;font-size:16px;color:#FFF;background:rgba(49, 59, 61, 0.80);border-radius:2px;white-space: nowrap;" data-ls="offsetxin:0;delayin:300;easingin:easeInOutElastic;rotatexin:-90;transformoriginin:50% top 0;offsetxout:0;">Set Badges, Certificates for Courses</h3><p class="ls-l" style="top:303px;left:67px;font-weight:600;padding-top:12px;padding-right:24px;padding-bottom:12px;padding-left:24px;font-size:16px;color:#FFF;background:rgba(49, 59, 61, 0.80);border-radius:2px;white-space: nowrap;" data-ls="offsetxin:0;delayin:400;easingin:easeInOutElastic;rotatexin:-90;transformoriginin:50% top 0;offsetxout:0;">Sell course as Single, Group and Subscription</p><button onclick="                            location.href = './register'" class="ls-l" style="top:370px;left:487px;font-weight:600;text-transform:uppercase;padding-top:12px;padding-right:24px;padding-bottom:12px;padding-left:24px;font-size:14px;color:000px;background:#F16645;border-radius:2px;white-space: nowrap;" data-ls="offsetxin:0;offsetyin:80;delayin:550;easingin:easeOutBack;offsetxout:0;offsetyout:-80;">Sign Up Now</button></div></div></div></div></div>
                </div>
                <!-- End Stripestripe fullwidth -->
            </section>
            <section class='main'>
                <div class='container'>
                    <div class='full-width'>
                        <div class='vibe_editor clearfix'>
                            <div class="v_module v_column col-md-3 col-sm-3 v_first">
                                <style>
                                    .custom_block img {
                                        max-width: 80px;
                                        padding: 30px 0;
                                    }

                                    .custom_block h3 {
                                        font-weight: 600;
                                        text-transform: uppercase;
                                        font-size: 17px;
                                        margin-bottom: 0;
                                    }

                                        .custom_block h3 + p {
                                            color: #bbb;
                                            margin-top: 0;
                                            font-size: 11px;
                                            font-weight: 600;
                                            text-transform: uppercase;
                                        }
                                </style><div class="v_module v_text_block  custom_block nothing_selected">
                                    <p style="text-align: center;">
                                        <img class="alignnone size-full wp-image-1430" src="a" alt="Put your link here" width="140" height="140">
                                    </p><h3 style="text-align: center;">Online Courses&nbsp;</h3><p style="text-align: center;">course management</p><p style="text-align: center;">It is a long established fact that a reader will be distracted.</p><p style="text-align: center;"> </p><p style="text-align: center;">&nbsp;</p>
                                </div>
                            </div> <!-- end .v_column_col-md-3 col-sm-3 -->
                            <div class="v_module v_column col-md-3 col-sm-3 ">
                                <div class="v_module v_text_block  custom_block nothing_selected"><p style="text-align: center;"><img class="alignnone size-full wp-image-1428" alt="1" src="http://vibethemes.com/envato/wplms/wp-content/uploads/2014/02/1.png" height="140" width="140"></p><h3 style="text-align: center;">Become an Instructor</h3><p style="text-align: center;">teach online</p><p style="text-align: center;">It is a long established fact that a reader will be distracted</p><p style="text-align: center;"> </p></div>
                            </div> <!-- end .v_column_col-md-3 col-sm-3 -->
                            <div class="v_module v_column col-md-3 col-sm-3 ">
                                <div class="v_module v_text_block  custom_block nothing_selected"><p style="text-align: center;"><img class="alignnone size-full wp-image-1431" alt="3" src="http://vibethemes.com/envato/wplms/wp-content/uploads/2014/02/3.png" height="140" width="140"></p><h3 style="text-align: center;">Multi-Media Units</h3><p style="text-align: center;">Audio, Video playback</p><p style="text-align: center;">It is a long established fact that a reader will be distracted</p><p style="text-align: center;"> </p></div>
                            </div> <!-- end .v_column_col-md-3 col-sm-3 -->
                            <div class="v_module v_column col-md-3 col-sm-3 ">
                                <div class="v_module v_text_block  custom_block nothing_selected"><p style="text-align: center;"><img class="alignnone size-full wp-image-1429" alt="2" src="http://vibethemes.com/envato/wplms/wp-content/uploads/2014/02/2.png" height="140" width="140"></p><h3 style="text-align: center;">subscribe courses</h3><p style="text-align: center;">Sell Courses</p><p style="text-align: center;">It is a long established fact that a reader will be distracted</p><p style="text-align: center;"> </p></div>
                            </div> <!-- end .v_column_col-md-3 col-sm-3 -->
                            <div class="v_module v_column col-md-3 col-sm-3 v_first">
                                <style>
                                    .custom_banner img {
                                        border: 5px solid #FFF;
                                        box-shadow: 0 1px 2px #bbb;
                                        border-radius: 2px;
                                    }
                                </style>


            </section>
            <section class='stripe'>
                <div class='container'>
                    <!-- Begin Stripe stripe_container fullwidth -->
                    <div class="v_module v_column stripe_container fullwidth v_first">
                        <style>
                            .fullhomestripe.stripe {
                                padding: 30px 0;
                                background: #FFF;
                            }
                        </style>
                        <div class="v_module custom_post_carousel " data-class="fullhomestripe">
                            <div id="Popular_Courses"></div>
                            <h3 class="heading"><span>Popular Courses</span></h3>

                            <div id="carousel279" class="vibe_carousel flexslider loading   more_heading" data-block-width="262" data-block-max="4" data-block-min="2">
                                <ul class="slides">
                                    <li>
                                        <div class="block courseitem" data-id="1260">
                                            <div class="block_media">
                                                <a href="course/software-training/index.html">
                                                    <img width="310" height="186" src="yourImageLink" alt="Put your image link" />
                                                </a>
                                            </div>
                                            <div class="block_content">
                                                <h4 class="block_title"><a href="course/software-training/index.html" title="Software Training">Software Training</a></h4>
                                                <div class="star-rating">
                                                    <span class="fill"></span><span class="fill"></span><span class="fill"></span>
                                                    <span class="fill"></span><span></span>
                                                </div>

                                                <span class="clear"></span><div class="instructor_course">
                                                    <div class="item-avatar"><img src="wp-content/uploads/avatars/1/d6d450c9eac36998673635f3da168352-bpthumb.jpg" class="avatar user-1-avatar avatar-150 photo" width="150" height="150" alt="Profile Photo" /></div>
                                                    <h5 class="course_instructor">
                                                        <a href="members/-4/index.html">Eddard Stark<span>Programming</span></a>
                                                    </h5>
                                                </div><strong><i class="fa fa-users"></i> 40</strong>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div class="block courseitem" data-id="1250">
                                            <div class="block_media">
                                                <a href="course/developing-mobile-apps/index.html"><img width="310" height="186" src="wp-content/uploads/2014/02/mobileapps1-310x186.jpg" class="attachment-small size-small wp-post-image" alt="mobileapps" srcset="http://themes.vibethemes.com/wplms/skins/default/wp-content/uploads/2014/02/mobileapps1-460x276.jpg 460w, http://themes.vibethemes.com/wplms/skins/default/wp-content/uploads/2014/02/mobileapps1-120x72.jpg 120w, http://themes.vibethemes.com/wplms/skins/default/wp-content/uploads/2014/02/mobileapps1-310x186.jpg 310w, http://themes.vibethemes.com/wplms/skins/default/wp-content/uploads/2014/02/mobileapps1.jpg 768w" sizes="(max-width: 310px) 100vw, 310px" /></a>
                                            </div><div class="block_content">
                                                <h4 class="block_title"><a href="course/developing-mobile-apps/index.html" title="Developing Mobile Apps">Developing Mobile Apps</a></h4><div class="star-rating"><span class="fill"></span><span class="fill"></span><span class="fill"></span><span></span><span></span></div>

                                                <span class="clear"></span><div class="instructor_course">
                                                    <div class="item-avatar"><img src="wp-content/uploads/avatars/1/d6d450c9eac36998673635f3da168352-bpthumb.jpg" class="avatar user-1-avatar avatar-150 photo" width="150" height="150" alt="Profile Photo" /></div>
                                                    <h5 class="course_instructor">
                                                        <a href="members/-4/index.html">Eddard Stark<span>Programming</span></a>
                                                    </h5>
                                                </div><strong><i class="fa fa-users"></i> 5</strong>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div class="block courseitem" data-id="1242">
                                            <div class="block_media"><a href="course/how-to-write-effectively/index.html"><img width="310" height="186" src="wp-content/uploads/2014/02/writing11-310x186.jpg" class="attachment-small size-small wp-post-image" alt="writing1" srcset="http://themes.vibethemes.com/wplms/skins/default/wp-content/uploads/2014/02/writing11-460x276.jpg 460w, http://themes.vibethemes.com/wplms/skins/default/wp-content/uploads/2014/02/writing11-120x72.jpg 120w, http://themes.vibethemes.com/wplms/skins/default/wp-content/uploads/2014/02/writing11-310x186.jpg 310w, http://themes.vibethemes.com/wplms/skins/default/wp-content/uploads/2014/02/writing11.jpg 768w" sizes="(max-width: 310px) 100vw, 310px" /></a></div><div class="block_content">
                                                <h4 class="block_title"><a href="course/how-to-write-effectively/index.html" title="How to write effectively">How to write effectively</a></h4><div class="star-rating"><span class="fill"></span><span class="fill"></span><span class="fill"></span><span class="fill"></span><span></span></div><span class="clear"></span><div class="instructor_course">
                                                    <div class="item-avatar"><img src="wp-content/uploads/avatars/1/d6d450c9eac36998673635f3da168352-bpthumb.jpg" class="avatar user-1-avatar avatar-150 photo" width="150" height="150" alt="Profile Photo" /></div>
                                                    <h5 class="course_instructor">
                                                        <a href="members/-4/index.html">Eddard Stark<span>Programming</span></a>
                                                    </h5>
                                                </div><strong><i class="fa fa-users"></i> 20</strong>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div class="block courseitem" data-id="1235">
                                            <div class="block_media"><a href="course/basic-of-nature-photography/index.html"><img width="310" height="186" src="wp-content/uploads/2014/02/photography31-310x186.jpg" class="attachment-small size-small wp-post-image" alt="photography3" srcset="http://themes.vibethemes.com/wplms/skins/default/wp-content/uploads/2014/02/photography31-460x276.jpg 460w, http://themes.vibethemes.com/wplms/skins/default/wp-content/uploads/2014/02/photography31-120x72.jpg 120w, http://themes.vibethemes.com/wplms/skins/default/wp-content/uploads/2014/02/photography31-310x186.jpg 310w, http://themes.vibethemes.com/wplms/skins/default/wp-content/uploads/2014/02/photography31.jpg 768w" sizes="(max-width: 310px) 100vw, 310px" /></a></div><div class="block_content">
                                                <h4 class="block_title"><a href="course/basic-of-nature-photography/index.html" title="Basic of Nature Photography">Basic of Nature Photography</a></h4><div class="star-rating"><span class="fill"></span><span class="fill"></span><span class="fill"></span><span class="fill"></span><span></span></div><span class="clear"></span><div class="instructor_course">
                                                    <div class="item-avatar"><img src="wp-content/uploads/avatars/1/d6d450c9eac36998673635f3da168352-bpthumb.jpg" class="avatar user-1-avatar avatar-150 photo" width="150" height="150" alt="Profile Photo" /></div>
                                                    <h5 class="course_instructor">
                                                        <a href="members/-4/index.html">Eddard Stark<span>Programming</span></a>
                                                    </h5>
                                                </div><strong><i class="fa fa-users"></i> 11</strong>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div class="block courseitem" data-id="1216">
                                            <div class="block_media"><a href="course/starting-a-startup/index.html"><img width="310" height="186" src="wp-content/uploads/2014/02/startup11-310x186.jpg" class="attachment-small size-small wp-post-image" alt="startup1" srcset="http://themes.vibethemes.com/wplms/skins/default/wp-content/uploads/2014/02/startup11-460x276.jpg 460w, http://themes.vibethemes.com/wplms/skins/default/wp-content/uploads/2014/02/startup11-120x72.jpg 120w, http://themes.vibethemes.com/wplms/skins/default/wp-content/uploads/2014/02/startup11-310x186.jpg 310w, http://themes.vibethemes.com/wplms/skins/default/wp-content/uploads/2014/02/startup11.jpg 768w" sizes="(max-width: 310px) 100vw, 310px" /></a></div><div class="block_content">
                                                <h4 class="block_title"><a href="course/starting-a-startup/index.html" title="Starting a Startup">Starting a Startup</a></h4><div class="star-rating"><span class="fill"></span><span class="fill"></span><span class="fill"></span><span class="fill"></span><span class="half"></span></div><span class="clear"></span><div class="instructor_course">
                                                    <div class="item-avatar"><img src="wp-content/uploads/avatars/1/d6d450c9eac36998673635f3da168352-bpthumb.jpg" class="avatar user-1-avatar avatar-150 photo" width="150" height="150" alt="Profile Photo" /></div>
                                                    <h5 class="course_instructor">
                                                        <a href="members/-4/index.html">Eddard Stark<span>Programming</span></a>
                                                    </h5>
                                                </div><strong><i class="fa fa-users"></i> 16</strong>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div class="block courseitem" data-id="1204">
                                            <div class="block_media"><a href="course/social-media-management/index.html"><img width="310" height="186" src="wp-content/uploads/2014/02/socialmedia1-310x186.jpg" class="attachment-small size-small wp-post-image" alt="socialmedia" srcset="http://themes.vibethemes.com/wplms/skins/default/wp-content/uploads/2014/02/socialmedia1-460x276.jpg 460w, http://themes.vibethemes.com/wplms/skins/default/wp-content/uploads/2014/02/socialmedia1-120x72.jpg 120w, http://themes.vibethemes.com/wplms/skins/default/wp-content/uploads/2014/02/socialmedia1-310x186.jpg 310w, http://themes.vibethemes.com/wplms/skins/default/wp-content/uploads/2014/02/socialmedia1.jpg 768w" sizes="(max-width: 310px) 100vw, 310px" /></a></div><div class="block_content">
                                                <h4 class="block_title"><a href="course/social-media-management/index.html" title="Social Media Management">Social Media Management</a></h4><div class="star-rating"><span class="fill"></span><span class="fill"></span><span class="fill"></span><span class="fill"></span><span></span></div><span class="clear"></span><div class="instructor_course">
                                                    <div class="item-avatar"><img src="wp-content/uploads/avatars/1/d6d450c9eac36998673635f3da168352-bpthumb.jpg" class="avatar user-1-avatar avatar-150 photo" width="150" height="150" alt="Profile Photo" /></div>
                                                    <h5 class="course_instructor">
                                                        <a href="members/-4/index.html">Eddard Stark<span>Programming</span></a>
                                                    </h5>
                                                </div><strong><i class="fa fa-users"></i> 8</strong>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <!-- End Stripestripe_container fullwidth -->
                </div>
            </section>
	<!--  -->

    <footer>
        <div class="container">
            <div class="row">
                <div class="footertop">
                    <div class="col-md-3 col-sm-6">
                        <div class="footerwidget">
                            <h4 class="footertitle"><span>About WPLMS</span></h4>           <div class="textwidget">
                                There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don�??t look even slightly believable.

                                <h4>WPLMS : The Best LMS platform for WordPress</h4>
                            </div>
                        </div>
                    </div><div class="widget buddypress col-md-3 col-sm-6">
                        <div class="widget buddypress footerwidget">
                            <h4 class="footertitle"><span>Popular Courses</span></h4><ul class="widget_course_list no-ajax">
                                <li itemscope itemtype="http://schema.org/Product">
                                    <a href="course/social-media-management/index.html">
                                        <img width="150" height="150" src="wp-content/uploads/2014/02/socialmedia1-150x150.jpg" class="attachment-thumbnail size-thumbnail wp-post-image" alt="socialmedia" srcset="http://themes.vibethemes.com/wplms/skins/default/wp-content/uploads/2014/02/socialmedia1-150x150.jpg 150w, http://themes.vibethemes.com/wplms/skins/default/wp-content/uploads/2014/02/socialmedia1-180x180.jpg 180w, http://themes.vibethemes.com/wplms/skins/default/wp-content/uploads/2014/02/socialmedia1-300x300.jpg 300w" sizes="(max-width: 150px) 100vw, 150px" /><h6>
                                            <em itemprop="name">Social Media Management</em><span>
                                                <strong class="course-star-rating">
                                                    <i class="hide">4</i><span class="fill"></span><span class="fill"></span><span class="fill"></span><span class="fill"></span><span></span>
                                                </strong><strong>( 1 REVIEWS )</strong> <div class="students"> 8 STUDENTS</div>
                                            </span>
                                        </h6>
                                    </a>
                                </li>
                                <li itemscope itemtype="http://schema.org/Product">
                                    <a href="course/developing-mobile-apps/index.html">
                                        <img width="150" height="150" src="wp-content/uploads/2014/02/mobileapps1-150x150.jpg" class="attachment-thumbnail size-thumbnail wp-post-image" alt="mobileapps" srcset="http://themes.vibethemes.com/wplms/skins/default/wp-content/uploads/2014/02/mobileapps1-150x150.jpg 150w, http://themes.vibethemes.com/wplms/skins/default/wp-content/uploads/2014/02/mobileapps1-180x180.jpg 180w, http://themes.vibethemes.com/wplms/skins/default/wp-content/uploads/2014/02/mobileapps1-300x300.jpg 300w" sizes="(max-width: 150px) 100vw, 150px" /><h6>
                                            <em itemprop="name">Developing Mobile Apps</em><span>
                                                <strong class="course-star-rating">
                                                    <i class="hide">3</i><span class="fill"></span><span class="fill"></span><span class="fill"></span><span></span><span></span>
                                                </strong><strong>( 1 REVIEWS )</strong> <div class="students"> 5 STUDENTS</div>
                                            </span>
                                        </h6>
                                    </a>
                                </li>
                                <li itemscope itemtype="http://schema.org/Product">
                                    <a href="course/software-training/index.html">
                                        <img width="150" height="150" src="wp-content/uploads/2014/02/softwaretraining1-150x150.jpg" class="attachment-thumbnail size-thumbnail wp-post-image" alt="softwaretraining" srcset="http://themes.vibethemes.com/wplms/skins/default/wp-content/uploads/2014/02/softwaretraining1-150x150.jpg 150w, http://themes.vibethemes.com/wplms/skins/default/wp-content/uploads/2014/02/softwaretraining1-180x180.jpg 180w, http://themes.vibethemes.com/wplms/skins/default/wp-content/uploads/2014/02/softwaretraining1-300x300.jpg 300w" sizes="(max-width: 150px) 100vw, 150px" /><h6>
                                            <em itemprop="name">Software Training</em><span>
                                                <strong class="course-star-rating">
                                                    <i class="hide">4.3</i><span class="fill"></span><span class="fill"></span><span class="fill"></span><span class="fill"></span><span></span>
                                                </strong><strong>( 4 REVIEWS )</strong> <div class="students"> 40 STUDENTS</div>
                                            </span>
                                        </h6>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>  <div class="widget buddypress col-md-3 col-sm-6">
                        <div class="widget buddypress footerwidget">
                            <h4 class="footertitle"><span>Most Rated</span></h4><ul class="widget_course_list no-ajax">
                                <li itemscope itemtype="http://schema.org/Product">
                                    <a href="course/basic-of-nature-photography/index.html">
                                        <img width="150" height="150" src="wp-content/uploads/2014/02/photography31-150x150.jpg" class="attachment-thumbnail size-thumbnail wp-post-image" alt="photography3" srcset="http://themes.vibethemes.com/wplms/skins/default/wp-content/uploads/2014/02/photography31-150x150.jpg 150w, http://themes.vibethemes.com/wplms/skins/default/wp-content/uploads/2014/02/photography31-180x180.jpg 180w, http://themes.vibethemes.com/wplms/skins/default/wp-content/uploads/2014/02/photography31-300x300.jpg 300w" sizes="(max-width: 150px) 100vw, 150px" /><h6>
                                            <em itemprop="name">Basic of Nature Photography</em><span>
                                                <strong class="course-star-rating">
                                                    <i class="hide">4</i><span class="fill"></span><span class="fill"></span><span class="fill"></span><span class="fill"></span><span></span>
                                                </strong><strong>( 4 REVIEWS )</strong> <div class="students"> 11 STUDENTS</div>
                                            </span>
                                        </h6>
                                    </a>
                                </li>
                                <li itemscope itemtype="http://schema.org/Product">
                                    <a href="course/how-to-write-effectively/index.html">
                                        <img width="150" height="150" src="wp-content/uploads/2014/02/writing11-150x150.jpg" class="attachment-thumbnail size-thumbnail wp-post-image" alt="writing1" srcset="http://themes.vibethemes.com/wplms/skins/default/wp-content/uploads/2014/02/writing11-150x150.jpg 150w, http://themes.vibethemes.com/wplms/skins/default/wp-content/uploads/2014/02/writing11-180x180.jpg 180w, http://themes.vibethemes.com/wplms/skins/default/wp-content/uploads/2014/02/writing11-300x300.jpg 300w" sizes="(max-width: 150px) 100vw, 150px" /><h6>
                                            <em itemprop="name">How to write effectively</em><span>
                                                <strong class="course-star-rating">
                                                    <i class="hide">4</i><span class="fill"></span><span class="fill"></span><span class="fill"></span><span class="fill"></span><span></span>
                                                </strong><strong>( 4 REVIEWS )</strong> <div class="students"> 20 STUDENTS</div>
                                            </span>
                                        </h6>
                                    </a>
                                </li>
                                <li itemscope itemtype="http://schema.org/Product">
                                    <a href="course/software-training/index.html">
                                        <img width="150" height="150" src="wp-content/uploads/2014/02/softwaretraining1-150x150.jpg" class="attachment-thumbnail size-thumbnail wp-post-image" alt="softwaretraining" srcset="http://themes.vibethemes.com/wplms/skins/default/wp-content/uploads/2014/02/softwaretraining1-150x150.jpg 150w, http://themes.vibethemes.com/wplms/skins/default/wp-content/uploads/2014/02/softwaretraining1-180x180.jpg 180w, http://themes.vibethemes.com/wplms/skins/default/wp-content/uploads/2014/02/softwaretraining1-300x300.jpg 300w" sizes="(max-width: 150px) 100vw, 150px" /><h6>
                                            <em itemprop="name">Software Training</em><span>
                                                <strong class="course-star-rating">
                                                    <i class="hide">4.3</i><span class="fill"></span><span class="fill"></span><span class="fill"></span><span class="fill"></span><span></span>
                                                </strong><strong>( 4 REVIEWS )</strong> <div class="students"> 40 STUDENTS</div>
                                            </span>
                                        </h6>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>  <div class="col-md-3 col-sm-6">
                        <div class="footerwidget">
                            <div class="textwidget"><img src="http://vibethemes.com/envato/wplms/wp-content/uploads/2014/02/banner-home.png" /></div>
                        </div>
                    </div>
                </div>
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
                        <ul id="menu-footer-menu" class="footermenu">
                            <li id="menu-item-2008" class="menu-item menu-item-2008"><a href="index.html">Home</a></li>
                            <li id="menu-item-2009" class="menu-item menu-item-2009"><a href="about/index.html">About</a></li>
                            <li id="menu-item-2011" class="menu-item menu-item-2011"><a href="contact-us/index.html">Contact Us</a></li>
                        </ul>
                    </div>
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
        #wplms_demos_slide_panel {
            position: fixed;
            top: 100px;
            right: 0;
            border-radius: 2px 2px 0 0;
            width: 200px;
            background: #FFF;
            z-index: 99;
            opacity: 1;
            box-shadow: 0 1px 1px rgba(0,0,0,.6);
            webkit-transition: all 0.2s ease-in-out;
            -moz-transition: all 0.2s ease-in-out;
            -o-transition: all 0.2s ease-in-out;
            transition: all 0.2s ease-in-out;
        }

        .wplms_demos {
            position: relative;
        }

        #wplms_demos_slide_panel.close {
            -webkit-transform: translate3d(200px, 0, 0);
            transform: translate3d(200px, 0, 0);
        }

        #wplms_demos_slide_panel span {
            position: absolute;
            top: 0;
            left: -40px;
            z-index: 99;
            padding: 10px;
            display: block;
            border-radius: 2px 2px 0 0;
            background: #444;
            color: #FFF;
            line-height: 1;
        }

            #wplms_demos_slide_panel span:after {
                content: "\f229";
                font-family: 'dashicons';
                color: #FFF;
                line-height: 1;
                font-size: 20px;
            }

        #wplms_demos_slide_panel .title {
            padding: 10px;
            text-align: center;
            font-size: 14px;
            font-weight: 600;
            text-transform: uppercase;
        }

        #wplms_demos_slide_panel .buynow {
            margin: 10px 0;
            text-align: center;
            font-size: 11px;
            font-weight: 600;
            text-transform: uppercase;
        }

            #wplms_demos_slide_panel .buynow a {
                padding: 8px 20px;
                display: inline-block;
                color: #FFF;
                border-radius: 4px;
                background: #82b440;
                font-weight: 600;
                -webkit-box-shadow: 0 2px 0 #6f9a37;
                box-shadow: 0 2px 0 #6f9a37;
            }

        #wplms_demos_slide_panel .wplms_demo_container {
            height: 400px;
            background: #444;
            padding: 10px;
            overflow-y: scroll;
        }

            #wplms_demos_slide_panel .wplms_demo_container img {
                border-radius: 4px;
                box-shadow: 0 1px 1px #333;
            }

            #wplms_demos_slide_panel .wplms_demo_container li {
                list-style: none;
                border: 10px solid #444;
                display: block;
            }
    </style>

    <script>
        jQuery(document).ready(function ($) {
            $('#wplms_demos_slide_panel span').click(function () {
                if ($('html').hasClass('csstransitions')) {
                    $('#wplms_demos_slide_panel').toggleClass('close');
                } else {
                    $('#wplms_demos_slide_panel').toggle(200);
                }
            });
        });
    </script>
    <link rel='stylesheet' id='eventon_dynamic_styles-css' href='wp-content/plugins/eventON/assets/css/eventon_dynamic_stylesc1f9.css?ver=4.4.2' type='text/css' media='all' />
    <script type='text/javascript' src='wp-content/plugins/bbpress/templates/default/js/editore4d2.js?ver=2.5.8-5815'></script>
    <script type='text/javascript'>
        /* <![CDATA[ */
        var mejsL10n = { "language": "en-US", "strings": { "Close": "Close", "Fullscreen": "Fullscreen", "Download File": "Download File", "Download Video": "Download Video", "Play\/Pause": "Play\/Pause", "Mute Toggle": "Mute Toggle", "None": "None", "Turn off Fullscreen": "Turn off Fullscreen", "Go Fullscreen": "Go Fullscreen", "Unmute": "Unmute", "Mute": "Mute", "Captions\/Subtitles": "Captions\/Subtitles" } };
        var _wpmejsSettings = { "pluginPath": "\/wplms\/skins\/default\/wp-includes\/js\/mediaelement\/" };
        /* ]]> */
    </script>
    <script type='text/javascript' src='wp-includes/js/mediaelement/mediaelement-and-player.mineb0c.js?ver=2.18.1'></script>
    <script type='text/javascript' src='wp-includes/js/thickbox/thickboxab87.js?ver=3.1-20121105'></script>
    <script type='text/javascript'>
        /* <![CDATA[ */
        var vibe_shortcode_strings = { "sending_mail": "Sending mail", "error_string": "Error :", "invalid_string": "Invalid ", "captcha_mismatch": "Captcha Mismatch" };
        /* ]]> */
    </script>
    <script type='text/javascript' src='wp-content/plugins/vibe-shortcodes/js/shortcodes5152.js?ver=1.0'></script>
    <script type='text/javascript' src='wp-content/plugins/woocommerce/assets/js/jquery-blockui/jquery.blockUI.min44fd.js?ver=2.70'></script>
    <script type='text/javascript'>
        /* <![CDATA[ */
        var woocommerce_params = { "ajax_url": "\/wplms\/skins\/default\/wp-admin\/admin-ajax.php", "wc_ajax_url": "\/wplms\/skins\/default\/?wc-ajax=%%endpoint%%" };
        /* ]]> */
    </script>
    <script type='text/javascript' src='wp-content/plugins/woocommerce/assets/js/frontend/woocommerce.min16b9.js?ver=2.5.2'></script>
    <script type='text/javascript' src='wp-content/plugins/woocommerce/assets/js/jquery-cookie/jquery.cookie.min330a.js?ver=1.4.1'></script>
    <script type='text/javascript'>
        /* <![CDATA[ */
        var wc_cart_fragments_params = { "ajax_url": "\/wplms\/skins\/default\/wp-admin\/admin-ajax.php", "wc_ajax_url": "\/wplms\/skins\/default\/?wc-ajax=%%endpoint%%", "fragment_name": "wc_fragments" };
        /* ]]> */
    </script>
    <script type='text/javascript' src='wp-content/plugins/woocommerce/assets/js/frontend/cart-fragments.min16b9.js?ver=2.5.2'></script>
    <script type='text/javascript' src='wp-content/plugins/vibe-course-module/includes/js/course-module-js.min6734.js?ver=1.9.9'></script>
    <script type='text/javascript' src='wp-includes/js/mediaelement/wp-mediaelementc1f9.js?ver=4.4.2'></script>
    <script type='text/javascript'>
        /* <![CDATA[ */
        var BP_DTheme = { "accepted": "Accepted", "close": "Close", "comments": "comments", "leave_group_confirm": "Are you sure you want to leave this group?", "mark_as_fav": "Favorite", "my_favs": "My Favorites", "rejected": "Rejected", "remove_fav": "Remove Favorite", "show_all": "Show all", "show_all_comments": "Show all comments for this thread", "show_x_comments": "Show all %d comments", "unsaved_changes": "Your profile has unsaved changes. If you leave the page, the changes will be lost.", "view": "View", "too_short": "Too short", "weak": "Weak", "good": "Good", "strong": "Strong" };
        /* ]]> */
    </script>
    <script type='text/javascript' src='wp-content/themes/wplms/assets/js/old_files/buddypressd5f7.js?ver=2.0'></script>
    <script type='text/javascript'>
        /* <![CDATA[ */
        var vibe_course_module_strings = { "too_fast_answer": "Too Fast or Answer not marked.", "answer_saved": "Answer Saved.", "processing": "Processing...", "saving_answer": "Saving Answer...please wait", "remove_user_text": "This step is irreversible. Are you sure you want to remove the User from the course ?", "remove_user_button": "Confirm, Remove User from Course", "confirm": "Confirm", "cancel": "Cancel", "reset_user_text": "This step is irreversible. All Units, Quiz results would be reset for this user. Are you sure you want to Reset the Course for this User?", "reset_user_button": "Confirm, Reset Course for this User", "quiz_reset": "This step is irreversible. All Questions answers would be reset for this user. Are you sure you want to Reset the Quiz for this User? ", "quiz_reset_button": "Confirm, Reset Quiz for this User", "marks_saved": "Marks Saved", "quiz_marks_saved": "Quiz Marks Saved", "submit_quiz": "Submit Quiz", "sending_messages": "Sending Messages ...", "adding_students": "Adding Students to Course ...", "successfuly_added_students": "Students successfully added to Course", "unable_add_students": "Unable to Add students to Course", "select_fields": "Please select fields to download", "download": "Download", "timeout": "TIMEOUT", "theme_color": "#78c8c9", "single_dark_color": "#232b2d", "for_course": "for Course", "active_filters": "Active Filters", "clear_filters": "Clear all filters", "remove_comment": "Are you sure you want to remove this note?", "remove_comment_button": "Confirm, remove note", "private_comment": "Make Private", "add_comment": "Add your note", "submit_quiz_error": "Please add questions or retake the quiz !", "remove_announcement": "Are you sure you want to remove this Annoucement?", "start_quiz_notification": "You're about to start the Quiz. Please click confirm to begin the quiz.", "submit_quiz_notification": "Are you sure you want to submit the quiz. Submitting the quiz will freeze all your answers, you can not change them.  Please confirm.", "check_results": "Check results", "correct": "Correct", "incorrect": "Incorrect", "confirm_apply": "Are you sure you want to apply for this Course ?", "instructor_uncomplete_unit": "Are you sure you want mark this unit \"uncomplete\" for the user ?", "instructor_complete_unit": "Are you sure you want to mark this unit \"complete\" for the user ?", "unanswered_questions": "You have few unanswered questions. Are you sure you want to continue ?" };
        /* ]]> */
    </script>
    <script type='text/javascript' src='wp-content/plugins/vibe-course-module/includes/js/course6734.js?ver=1.9.9'></script>
    <script type='text/javascript' src='wp-includes/js/wp-embed.minc1f9.js?ver=4.4.2'></script>
    <script type='text/javascript'>
        /* <![CDATA[ */
        var wplms = { "more": "More", "view_more": "View More", "menu": "Menu", "wplms_woocommerce_validate": "Please fill in all the required fields (indicated by *)", "open_menu": "Open\/Close Menu" };
        /* ]]> */
    </script>
    <script type='text/javascript' src='wp-content/themes/wplms/assets/js/wplms.minc1f9.js?ver=4.4.2'></script>
    <script type='text/javascript' src='wp-content/plugins/wplms-eventon/includes/eventon-daily-view/assets/jquery.mousewheel.min7140.js?ver=0.31'></script>
    <script type='text/javascript' src='wp-content/plugins/wplms-eventon/includes/eventon-daily-view/assets/dv_script7140.js?ver=0.31'></script>
    <script>
        (function (i, s, o, g, r, a, m) {
            i['GoogleAnalyticsObject'] = r; i[r] = i[r] || function () {
                (i[r].q = i[r].q || []).push(arguments)
            }, i[r].l = 1 * new Date(); a = s.createElement(o),
            m = s.getElementsByTagName(o)[0]; a.async = 1; a.src = g; m.parentNode.insertBefore(a, m)
        })(window, document, 'script', 'http://www.google-analytics.com/analytics.js', 'ga');
        ga('create', 'UA-9756284-1', 'auto');
        ga('send', 'pageview');
    </script>


</body>