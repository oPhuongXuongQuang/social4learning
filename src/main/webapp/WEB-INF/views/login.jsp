<!DOCTYPE html>
<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/fmt" prefix="fmt"%>
<%@ page session="false"%>
<%@taglib uri="http://www.springframework.org/tags/form" prefix="form"%>
	<!--[if IE 8]>
		<html xmlns="http://www.w3.org/1999/xhtml" class="ie8" lang="en-US">
	<![endif]-->
	<!--[if !(IE 8) ]><!-->
		<html xmlns="http://www.w3.org/1999/xhtml" lang="en-US">
	<!--<![endif]-->
	
<!-- Mirrored from themes.vibethemes.com/wplms/skins/default/wp-login.php by HTTrack Website Copier/3.x [XR&CO'2014], Sat, 13 Feb 2016 06:09:41 GMT -->
<!-- Added by HTTrack --><meta http-equiv="content-type" content="text/html;charset=UTF-8" /><!-- /Added by HTTrack -->
<head>
	<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
	<title>WPLMS &rsaquo; Log In</title>
	<link rel='stylesheet' id='buttons-css'  href='wp-includes/css/buttons.minc1f9.css?ver=4.4.2' type='text/css' media='all' />
<link rel='stylesheet' id='open-sans-css'  href='https://fonts.googleapis.com/css?family=Open+Sans%3A300italic%2C400italic%2C600italic%2C300%2C400%2C600&amp;subset=latin%2Clatin-ext&amp;ver=4.4.2' type='text/css' media='all' />
<link rel='stylesheet' id='dashicons-css'  href='wp-includes/css/dashicons.minc1f9.css?ver=4.4.2' type='text/css' media='all' />
<link rel='stylesheet' id='login-css'  href='wp-admin/css/login.minc1f9.css?ver=4.4.2' type='text/css' media='all' />
        <style type="text/css">
        	body {
        		background-image: url(http://img.yeah1.com/upload/news/30082015/1440934425_2465059_DSC_0633.jpg);
        		background-size: cover;
  				overflow: auto;
        	}
        	
            body.login div#login h1 a {
                background-image: url(wp-content/themes/wplms/assets/images/logo.png);
            }
            .login h1 a{
                width:160px;
                background-size:100%;
            }
            html,body.login {
                background: ;
                }
            body:before{
                content:'';
                background:rgba(0,0,0,0.1);
                width:100%;
                height:10px;
                position:absolute;
                top:0;
                left:0;
            }    
            .login label{
                color: #FFFFFF;
                font-size:11px;
                text-transform: uppercase;
                font-weight:600;
                opacity: 0.8;
            }
            .login form{
                background:none;
                box-shadow:none;
                border-radius:2px;
                margin:0;
            }    
            .login form .input, .login input[type=text], .login form input[type=checkbox]{
                background: ;
                border-color: rgba(255,255,255,0.1);
                border-radius: 2px;
                color:;
            }
            .login #nav a, .login #backtoblog a{
                color: #FFFFFF;
                text-transform: uppercase;
                font-size: 15px;
                opacity: 0.8;
            }
            div.error, .login #login_error{border-radius:2px;}
                    </style>
        <meta name='robots' content='noindex,follow' />
	</head>
	<body class="login login-action-login wp-core-ui  locale-en-us">
	<div id="login">
		<h1><a href="#" title="" tabindex="-1">WPLMS</a></h1>
	
<form:form name="loginform" id="loginform" action="login" method="post" commandName="user">
	<p>
		<label for="user_login">Email<br />
		<form:input type="text" name="log" id="user_login" class="input" value="" size="20" path="email"/></label>
	</p>
	<p>
		<label for="user_pass">Password<br />
		<form:input type="password" name="pwd" id="user_pass" class="input" value="" size="20" path="password"/></label>
	</p>
		<p class="forgetmenot"><label for="rememberme"><input name="rememberme" type="checkbox" id="rememberme" value="forever"  /> Remember Me</label></p>
	<p class="submit">
		<input type="submit" name="wp-submit" id="wp-submit" class="button button-primary button-large" value="Log In" />
	</p>
</form:form>

<p id="nav">
<a href="./register.html">Register</a> | 	<a href="wp-loginc2b6.html?action=lostpassword" title="Password Lost and Found">Lost your password?</a>
</p>

<script type="text/javascript">
function wp_attempt_focus(){
setTimeout( function(){ try{
d = document.getElementById('user_login');
d.focus();
d.select();
} catch(e){}
}, 200);
}

wp_attempt_focus();
if(typeof wpOnload=='function')wpOnload();
</script>

	<p id="backtoblog"><a href="./" title="Are you lost?">&larr; Back to WPLMS</a></p>
	
	</div>

	
	<input type="hidden" id="bp_social_connect_security" name="bp_social_connect_security" value="c2d6ce13a3" /><input type="hidden" name="_wp_http_referer" value="/wplms/skins/default/wp-login.php" />		<script type="text/javascript">
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
		<a class="bp_social_connect_facebook" href="javascript:void(0)">FACEBOOK</a><br /></div><style>#bp_social_connect_facebook:before{content:"\f305";float:left;font-size:16px;font-family:dashicons}#bp_social_connect_twitter:before{content:"\f301";float:left;font-size:16px;font-family:dashicons}#bp_social_connect_google:before{content:"\f462";float:left;font-size:16px;font-family:dashicons}</style>	<div class="clear"></div>
	</body>
	
<!-- Mirrored from themes.vibethemes.com/wplms/skins/default/wp-login.php by HTTrack Website Copier/3.x [XR&CO'2014], Sat, 13 Feb 2016 06:09:41 GMT -->
</html>
	