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
<!-- Added by HTTrack --><meta http-equiv="content-type" content="text/html;charset=UTF-8" />
	<head>
    <title>Learn English | Online - free and easy | busuu</title>
   <meta charset="utf-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<meta name="description" content="Learn English online for free at busuu, the world's largest social network for language learning.Connect with English speakers on your computer, tablet or mobile." />
<meta name="keywords" content="" />
<meta name="viewport" content="width=device-width, initial-scale=1">

<!-- Facebook Open graph -->
<meta property="og:locale" content="en_US">
<meta property="og:url" content="register.html">
<meta property="og:title" content="Learn English | Online - free and easy | busuu">
<meta property="og:description" content="Learn English online for free at busuu, the world's largest social network for language learning.Connect with English speakers on your computer, tablet or mobile." />
<meta property="og:site_name" content="busuu">
<meta property="og:type" content="website">
<meta property="og:image" content="http://static1.busuu.com/homepage/facebook-icon.png">
<meta property="og:image:type" content="image/png">
<meta property="og:image:width" content="300">
<meta property="og:image:height" content="300">
<meta property="fb:app_id" content="61455312096">

<!-- Twitter Card -->
<meta name="twitter:card" content="app">
<meta name="twitter:description" content="Learn English online for free at busuu, the world's largest social network for language learning.Connect with English speakers on your computer, tablet or mobile." />
<link href="css/register-css.css" media="screen" rel="stylesheet" type="text/css" />
<link rel="stylesheet" href="css/custom-register.css">
 
</head>
<body class=" is-register-visible">

<!-- Retargeting -->
<script type="text/javascript" src="js/register-function.js"></script>
  

  <div id="fb-root"></div>
  <section>
    <div class="bg-bs-lblue-dark signUp-wrapper">
      <div id="wrapper" class="wrapper">
              <!-- Join via Facebook and Google plus -->
              <div id="signup-options">
                  <div class="course-title text-center">
  <h1 class="main-title">
    <img alt="" src="./wp-content/themes/wplms/assets/images/logo.png" style="max-width: 200px;">
    <br />
    <span class="fontWeight-light fontSize-24 fg-bs-white is-join-second-title">
      Register now to start learning    </span>
  </h1>
</div>

<div class="signup-helper text-left cf mtxxl">
  <input class="learning" type="hidden" value="es"/>
  <input class="locale" type="hidden" value="enc"/>
  <input class="speaking" type="hidden" value="enc"/>
  <input class="country-of-residence" type="hidden" value="enc"/>

  <ul class="signUp-social dib text-left cf">
    <li>
      <a class="fb-sign" title="Facebook" id="facebook-signup">
        <span class="fb-icon"></span>
        <span>Facebook</span>
      </a>
    </li>
    <li>
      <a class="gplus-sign" title="Google" id="google-signup">
        <span class="gplus-icon"></span>
        <span>Google +</span>
      </a>
    </li>
    <li style="color: #FFFFFF; font-size: 17px">
    	Already registered? <a class="sign-in" href="./login.html">Sign in</a>
    </li>
  </ul>

  <span class="signUp-sep db">or</span>

  <div class="signup-container">
  <form:form class="real-signup-form" id="js-signup" action="./register" method="POST" commandName="user">

  <div class="field-component">
    <div class="vam dib label"><label>First Name </label></div>
    <div class="input-wrapper">
      <form:input class="firstname" id="name" placeholder="Your first name" path="firstname"/>

      <div class="sprite validation invalid"></div>
      <div class="sprite validation valid"></div>
      <div class="instructions"></div>
    </div>
  </div>
  
  <div class="field-component">
    <div class="vam dib label"><label>Last Name </label></div>
    <div class="input-wrapper">
      <form:input class="lastname" id="name" placeholder="Your last name" path="lastname"/>

      <div class="sprite validation invalid"></div>
      <div class="sprite validation valid"></div>
      <div class="instructions"></div>
    </div>
  </div>
  <div class="field-component">
    <div class="vam dib label"><label>Country</label></div>
    <div class="input-wrapper" id="country-of-residence-wrapper">
      <select id="country-of-residence" onchange="changeCountry(this)">
          <option value="-1"   >Select country</option>
                        <option value="Afghanistan"   >Afghanistan</option>
                        <option value="Albania"   >Albania</option>
                        <option value="Algeria"   >Algeria</option>
                        <option value="American Samoa"   >American Samoa</option>
                        <option value="Andorra"   >Andorra</option>
                        <option value="Angola"   >Angola</option>
                        <option value="Anguilla"   >Anguilla</option>
                        <option value="Antarctica"   >Antarctica</option>
                        <option value="Antigua and Barbuda"   >Antigua and Barbuda</option>
                        <option value="Argentina"   >Argentina</option>
                        <option value="Armenia"   >Armenia</option>
                        <option value="Aruba"   >Aruba</option>
                        <option value="Australia"   >Australia</option>
                        <option value="Austria"   >Austria</option>
                        <option value="Azerbaijan"   >Azerbaijan</option>
                        <option value="Bahamas"   >Bahamas</option>
                        <option value="Bahrain"   >Bahrain</option>
                        <option value="Bangladesh"   >Bangladesh</option>
                        <option value="Barbados"   >Barbados</option>
                        <option value="Belarus"   >Belarus</option>
                        <option value="Belgium"   >Belgium</option>
                        <option value="Belize"   >Belize</option>
                        <option value="Benin"   >Benin</option>
                        <option value="Bermuda"   >Bermuda</option>
                        <option value="Bhutan"   >Bhutan</option>
                        <option value="Bolivia"   >Bolivia</option>
                        <option value="Bosnia and Herzegovina"   >Bosnia and Herzegovina</option>
                        <option value="Botswana"   >Botswana</option>
                        <option value="Bouvet Island"   >Bouvet Island</option>
                        <option value="Brazil"   >Brazil</option>
                        <option value="British Indian Ocean Territory"   >British Indian Ocean Territory</option>
                        <option value="Brunei Darussalam"   >Brunei Darussalam</option>
                        <option value="Bulgaria"   >Bulgaria</option>
                        <option value="Burkina Faso"   >Burkina Faso</option>
                        <option value="Burundi"   >Burundi</option>
                        <option value="Cambodia"   >Cambodia</option>
                        <option value="Cameroon"   >Cameroon</option>
                        <option value="Canada"   >Canada</option>
                        <option value="Cape Verde"   >Cape Verde</option>
                        <option value="Cayman Islands"   >Cayman Islands</option>
                        <option value="Central African Republic"   >Central African Republic</option>
                        <option value="Chad"   >Chad</option>
                        <option value="Chile"   >Chile</option>
                        <option value="China"   >China</option>
                        <option value="Christmas Island"   >Christmas Island</option>
                        <option value="Cocos (Keeling) Islands"   >Cocos (Keeling) Islands</option>
                        <option value="Colombia"   >Colombia</option>
                        <option value="Comoros"   >Comoros</option>
                        <option value="Congo"   >Congo</option>
                        <option value="Congo, Democratic Republic of the"   >Congo, Democratic Republic of the</option>
                        <option value="Cook Islands"   >Cook Islands</option>
                        <option value="Costa Rica"   >Costa Rica</option>
                        <option value="Cote D'ivoire"   >Cote D'ivoire</option>
                        <option value="Croatia"   >Croatia</option>
                        <option value="Cuba"   >Cuba</option>
                        <option value="Cyprus"   >Cyprus</option>
                        <option value="Czech Republic"   >Czech Republic</option>
                        <option value="Denmark"   >Denmark</option>
                        <option value="Djibouti"   >Djibouti</option>
                        <option value="Dominica"   >Dominica</option>
                        <option value="Dominican Republic"   >Dominican Republic</option>
                        <option value="Ecuador"   >Ecuador</option>
                        <option value="Egypt"   >Egypt</option>
                        <option value="El Salvador"   >El Salvador</option>
                        <option value="Equatorial Guinea"   >Equatorial Guinea</option>
                        <option value="Eritrea"   >Eritrea</option>
                        <option value="Estonia"   >Estonia</option>
                        <option value="Ethiopia"   >Ethiopia</option>
                        <option value="Falkland Islands (Malvinas)"   >Falkland Islands (Malvinas)</option>
                        <option value="Faroe Islands"   >Faroe Islands</option>
                        <option value="Fiji"   >Fiji</option>
                        <option value="Finland"   >Finland</option>
                        <option value="France"   >France</option>
                        <option value="French Guiana"   >French Guiana</option>
                        <option value="French Polynesia"   >French Polynesia</option>
                        <option value="French Southern Territories"   >French Southern Territories</option>
                        <option value="Gabon"   >Gabon</option>
                        <option value="Gambia"   >Gambia</option>
                        <option value="Georgia"   >Georgia</option>
                        <option value="Germany"   >Germany</option>
                        <option value="Ghana"   >Ghana</option>
                        <option value="Gibraltar"   >Gibraltar</option>
                        <option value="Greece"   >Greece</option>
                        <option value="Greenland"   >Greenland</option>
                        <option value="Grenada"   >Grenada</option>
                        <option value="Guadeloupe"   >Guadeloupe</option>
                        <option value="Guam"   >Guam</option>
                        <option value="Guatemala"   >Guatemala</option>
                        <option value="Guinea"   >Guinea</option>
                        <option value="Guinea-Bissau"   >Guinea-Bissau</option>
                        <option value="Guyana"   >Guyana</option>
                        <option value="Haiti"   >Haiti</option>
                        <option value="Heard Island and Mcdonald Islands"   >Heard Island and Mcdonald Islands</option>
                        <option value="Honduras"   >Honduras</option>
                        <option value="Hong Kong"   >Hong Kong</option>
                        <option value="Hungary"   >Hungary</option>
                        <option value="Iceland"   >Iceland</option>
                        <option value="India"   >India</option>
                        <option value="Indonesia"   >Indonesia</option>
                        <option value="Iran, Islamic Republic of"   >Iran, Islamic Republic of</option>
                        <option value="Iraq"   >Iraq</option>
                        <option value="Ireland"   >Ireland</option>
                        <option value="Israel"   >Israel</option>
                        <option value="Italy"   >Italy</option>
                        <option value="Jamaica"   >Jamaica</option>
                        <option value="Japan"   >Japan</option>
                        <option value="Jordan"   >Jordan</option>
                        <option value="Kazakhstan"   >Kazakhstan</option>
                        <option value="Kenya"   >Kenya</option>
                        <option value="Kiribati"   >Kiribati</option>
                        <option value="Korea, Democratic People's Republic of"   >Korea, Democratic People's Republic of</option>
                        <option value="Korea, Republic of"   >Korea, Republic of</option>
                        <option value="Kuwait"   >Kuwait</option>
                        <option value="Kyrgyzstan"   >Kyrgyzstan</option>
                        <option value="Lao People's Democratic Republic"   >Lao People's Democratic Republic</option>
                        <option value="Latvia"   >Latvia</option>
                        <option value="Lebanon"   >Lebanon</option>
                        <option value="Lesotho"   >Lesotho</option>
                        <option value="Liberia"   >Liberia</option>
                        <option value="Libyan Arab Jamahiriya"   >Libyan Arab Jamahiriya</option>
                        <option value="Liechtenstein"   >Liechtenstein</option>
                        <option value="Lithuania"   >Lithuania</option>
                        <option value="Luxembourg"   >Luxembourg</option>
                        <option value="Macedonia, the Former Yugoslav Republic of"   >Macedonia, the Former Yugoslav Republic of</option>
                        <option value="Madagascar"   >Madagascar</option>
                        <option value="Malawi"   >Malawi</option>
                        <option value="Malaysia"   >Malaysia</option>
                        <option value="Maldives"   >Maldives</option>
                        <option value="Mali"   >Mali</option>
                        <option value="Malta"   >Malta</option>
                        <option value="Marshall Islands"   >Marshall Islands</option>
                        <option value="Martinique"   >Martinique</option>
                        <option value="Mauritania"   >Mauritania</option>
                        <option value="Mauritius"   >Mauritius</option>
                        <option value="Mayotte"   >Mayotte</option>
                        <option value="Mexico"   >Mexico</option>
                        <option value="Micronesia"   >Micronesia</option>
                        <option value="Moldova"   >Moldova</option>
                        <option value="Monaco"   >Monaco</option>
                        <option value="Mongolia"   >Mongolia</option>
                        <option value="Montenegro"   >Montenegro</option>
                        <option value="Montserrat"   >Montserrat</option>
                        <option value="Morocco"   >Morocco</option>
                        <option value="Mozambique"   >Mozambique</option>
                        <option value="Myanmar"   >Myanmar</option>
                        <option value="Namibia"   >Namibia</option>
                        <option value="Nauru"   >Nauru</option>
                        <option value="Nepal"   >Nepal</option>
                        <option value="Netherlands"   >Netherlands</option>
                        <option value="Netherlands Antilles"   >Netherlands Antilles</option>
                        <option value="Neutral Zone"   >Neutral Zone</option>
                        <option value="New Caledonia"   >New Caledonia</option>
                        <option value="New Zealand"   >New Zealand</option>
                        <option value="Nicaragua"   >Nicaragua</option>
                        <option value="Niger"   >Niger</option>
                        <option value="Nigeria"   >Nigeria</option>
                        <option value="Niue"   >Niue</option>
                        <option value="Norfolk Island"   >Norfolk Island</option>
                        <option value="Northern Mariana Islands"   >Northern Mariana Islands</option>
                        <option value="Norway"   >Norway</option>
                        <option value="Oman"   >Oman</option>
                        <option value="Pakistan"   >Pakistan</option>
                        <option value="Palau"   >Palau</option>
                        <option value="Palestinian Territory, Occupied"   >Palestinian Territory, Occupied</option>
                        <option value="Panama"   >Panama</option>
                        <option value="Papua New Guinea"   >Papua New Guinea</option>
                        <option value="Paraguay"   >Paraguay</option>
                        <option value="Peru"   >Peru</option>
                        <option value="Philippines"   >Philippines</option>
                        <option value="Pitcairn"   >Pitcairn</option>
                        <option value="Poland"   >Poland</option>
                        <option value="Portugal"   >Portugal</option>
                        <option value="Puerto Rico"   >Puerto Rico</option>
                        <option value="Qatar"   >Qatar</option>
                        <option value="Reunion"   >Reunion</option>
                        <option value="Romania"   >Romania</option>
                        <option value="Russian Federation"   >Russian Federation</option>
                        <option value="Rwanda"   >Rwanda</option>
                        <option value="Saint Helena"   >Saint Helena</option>
                        <option value="Saint Kitts and Nevis"   >Saint Kitts and Nevis</option>
                        <option value="Saint Lucia"   >Saint Lucia</option>
                        <option value="Saint Pierre and Miquelon"   >Saint Pierre and Miquelon</option>
                        <option value="Saint Vincent and the Grenadines"   >Saint Vincent and the Grenadines</option>
                        <option value="Samoa"   >Samoa</option>
                        <option value="San Marino"   >San Marino</option>
                        <option value="Sao Tome and Principe"   >Sao Tome and Principe</option>
                        <option value="Saudi Arabia"   >Saudi Arabia</option>
                        <option value="Senegal"   >Senegal</option>
                        <option value="Serbia"   >Serbia</option>
                        <option value="Serbia and Montenegro"   >Serbia and Montenegro</option>
                        <option value="Seychelles"   >Seychelles</option>
                        <option value="Sierra Leone"   >Sierra Leone</option>
                        <option value="Singapore"   >Singapore</option>
                        <option value="Slovakia"   >Slovakia</option>
                        <option value="Slovenia"   >Slovenia</option>
                        <option value="Solomon Islands"   >Solomon Islands</option>
                        <option value="Somalia"   >Somalia</option>
                        <option value="South Africa"   >South Africa</option>
                        <option value="South Georgia and the South Sandwich Islands"   >South Georgia and the South Sandwich Islands</option>
                        <option value="Spain"   >Spain</option>
                        <option value="Sri Lanka"   >Sri Lanka</option>
                        <option value="Sudan"   >Sudan</option>
                        <option value="Suriname"   >Suriname</option>
                        <option value="Svalbard and Jan Mayen Islands"   >Svalbard and Jan Mayen Islands</option>
                        <option value="Swaziland"   >Swaziland</option>
                        <option value="Sweden"   >Sweden</option>
                        <option value="Switzerland"   >Switzerland</option>
                        <option value="Taiwan"   >Taiwan</option>
                        <option value="Tajikistan"   >Tajikistan</option>
                        <option value="Tanzania, United Republic of"   >Tanzania, United Republic of</option>
                        <option value="Thailand"   >Thailand</option>
                        <option value="Timor-Leste"   >Timor-Leste</option>
                        <option value="Togo"   >Togo</option>
                        <option value="Tokelau"   >Tokelau</option>
                        <option value="Tonga"   >Tonga</option>
                        <option value="Trinidad and Tobago"   >Trinidad and Tobago</option>
                        <option value="Tunisia"   >Tunisia</option>
                        <option value="Turkey"   >Turkey</option>
                        <option value="Turkmenistan"   >Turkmenistan</option>
                        <option value="Turks and Caicos Islands"   >Turks and Caicos Islands</option>
                        <option value="Tuvalu"   >Tuvalu</option>
                        <option value="Uganda"   >Uganda</option>
                        <option value="Ukraine"   >Ukraine</option>
                        <option value="United Arab Emirates"   >United Arab Emirates</option>
                        <option value="United Kingdom"   >United Kingdom</option>
                        <option value="United States of America"   >United States of America</option>
                        <option value="Uruguay"   >Uruguay</option>
                        <option value="Uzbekistan"   >Uzbekistan</option>
                        <option value="Vanuatu"   >Vanuatu</option>
                        <option value="Vatican City State"   >Vatican City State</option>
                        <option value="Venezuela"   >Venezuela</option>
                        <option value="Viet Nam"   >Viet Nam</option>
                        <option value="Virgin Islands, British"   >Virgin Islands, British</option>
                        <option value="Virgin Islands, U.S."   >Virgin Islands, U.S.</option>
                        <option value="Wallis and Futuna Islands"   >Wallis and Futuna Islands</option>
                        <option value="Western Sahara"   >Western Sahara</option>
                        <option value="Yemen"   >Yemen</option>
                        <option value="Yugoslavia"   >Yugoslavia</option>
                        <option value="Zambia"   >Zambia</option>
                        <option value="Zimbabwe"   >Zimbabwe</option>
                        <option value="Ãland Islands"   >Ãland Islands</option>
                </select>

      <div class="sprite validation invalid"></div>
      <div class="sprite validation valid"></div>
      <div class="instructions"></div>
    </div>
  </div>
 
  <div class="field-component">
    <div class="email-label vam dib label"><label>Email</label></div>
    <div class="input-wrapper">
      <form:input class="email js-email" id="email" placeholder="name@awesome.com" path="email"/>

      <div class="sprite validation invalid"></div>
      <div class="sprite validation valid"></div>
      <div class="instructions"></div>
    </div>
  </div>

  <div class="field-component">
    <div class="confirm-email-label vam dib label"><label>Confirm email</label></div>
    <div class="input-wrapper">
      <input class="confirm-email js-confirm-email" placeholder="(Just in case)" />

      <div class="sprite validation invalid"></div>
      <div class="sprite validation valid"></div>
      <div class="instructions"></div>
    </div>
  </div>

  <div class="field-component">
    <div class="password-label vam dib label"><label>Password</label></div>
    <div class="input-wrapper">
      <form:input class="password js-password" type="password" id="password" path="password" placeholder="Minimum 6 characters" />

      <div class="sprite validation invalid"></div>
      <div class="sprite validation valid"></div>
      <div class="instructions"></div>
    </div>
  </div>

  <input class="btn btn--premium-secondary" type="submit" value="Start learning" onclick="event.preventDefault(); customRegister()" />

  <p class="terms mtl">
  By joining I declare that I have read and accept the <a href="../terms.html">Terms and Conditions</a> and the <a href="../privacy.html">Privacy Policy</a>. social4learning will never send your information to third parties.  </p>

</form:form>
</div>

</div>
              </div>
          </div>

          <!-- Deco Image -->
          <div class="background front"></div>
      </div>
  </section>
  <!-- JS BOTTOM -->
  
      <script type="text/javascript" src="js/custom-function.js"></script>
  
  <!-- Bottom JS -->
  <!-- Quantcast Tracking -->
<script type="text/javascript">
  var _qevents = _qevents || [];

  (function() {
    var elem = document.createElement('script');
    elem.src = (document.location.protocol == "https:" ? "https://secure" : "http://edge") + ".quantserve.com/quant.js";
    elem.async = true;
    elem.type = "text/javascript";
    var scpt = document.getElementsByTagName('script')[0];
    scpt.parentNode.insertBefore(elem, scpt);
  })();

  _qevents.push({
  qacct:"p-Fm0RGhgHBc2f2"
  });
</script>

<noscript>
  <div style="display:none;">
    <img src="http://pixel.quantserve.com/pixel/p-Fm0RGhgHBc2f2.gif" height="1" width="1" alt="Quantcast"/>
  </div>
</noscript>

<script type="text/javascript">
  var language = "enc";
  var partner = "";
  switch(language){
    case "ru":
      partner=12765;
      break;
    case "pt":
      partner=13376;
      break;
    case "de":
      partner=12767;
      break;
    case "tr":
      partner=12768;
      break;
  }
  window.criteo_q = window.criteo_q || [];
  if(partner != ""){
    window.criteo_q.push(
     { event: "setAccount", account: partner },
     { event: "setSiteType", type: "desktop" },
     { event: "viewHome" }
    );
  }
$(document).ready(function(){
  $(".flag-container, .btn-join").click(function(){
    var language = "";
    language = ($(this).attr('data-lang') != undefined) ? $(this).attr('data-lang') : preselected;
    if(partner != "" && language != ""){
      window.criteo_q.push(
       { event: "setAccount", account: partner },
       { event: "setSiteType", type: "desktop" },
       { event: "viewHome" },
       { event: "viewSearch", lang: language}
      );
    }
  });
});
</script>

<!-- Facebook Tracking -->
<script type="text/javascript">
  var fb_param = {};
  fb_param.pixel_id = '6007516054704';
  fb_param.value = '0.00';
  (function(){
    var fpw = document.createElement('script');
    fpw.async = true;
    fpw.src = 'http://connect.facebook.net/en_US/fp.js';
    var ref = document.getElementsByTagName('script')[0];
    ref.parentNode.insertBefore(fpw, ref);
  })();
</script>
<noscript><img height="1" width="1" alt="" style="display:none" src="https://www.facebook.com/offsite_event.php?id=6007516054704&amp;value=0" /></noscript>
<!-- End Facebook Tracking -->

<script>!function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0];if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src="https://platform.twitter.com/widgets.js";fjs.parentNode.insertBefore(js,fjs);}}(document,"script","twitter-wjs");</script>
  <script type="text/javascript">
     (function() {
       var po = document.createElement('script');
       po.type = 'text/javascript'; po.async = true;
       po.src = 'https://apis.google.com/js/client:plusone.js?onload=gplusLoaded';
       var s = document.getElementsByTagName('script')[0];
       s.parentNode.insertBefore(po, s);
     })();
</script>

  <div id="js-translations"
    data-error-msg1 = "Minimum 5 characters"
    data-error-msg2 = "Please enter a valid email address"
    data-error-msg3 = "Please confirm your email address"
    data-error-msg4 = "Minimum 6 characters"
    data-did-you-mean = "Did you mean @email?">
</div>  <!-- JS BOTTOM END -->



</body>

</html>

