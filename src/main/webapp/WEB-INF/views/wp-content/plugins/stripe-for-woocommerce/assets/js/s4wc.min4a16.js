Stripe.setPublishableKey(s4wc_info.publishableKey),jQuery(function(e){function r(){s=e("#s4wc-cc-form"),l=s.find("#s4wc-card-number"),d=s.find("#s4wc-card-expiry"),t=s.find("#s4wc-card-cvc"),s4wc_info.hasCard&&s4wc_info.savedCardsEnabled&&s.hide(),o.on("change",'input[name="s4wc_card"]',function(){"new"===e('input[name="s4wc_card"]:checked').val()?s.slideDown(200):s.slideUp(200)}),p.number&&l.val(p.number.val).attr("class",p.number.classes),p.expiry&&d.val(p.expiry.val),p.cvc&&t.val(p.cvc.val)}function a(){if(e("#payment_method_s4wc").is(":checked")&&(!e('input[name="s4wc_card"]').length||"new"===e('input[name="s4wc_card"]:checked').val())&&!e("input.stripe_token").length){var r=d.payment("cardExpiryVal"),a=e("#billing_first_name").val()||e("#billing_last_name").val()?e("#billing_first_name").val()+" "+e("#billing_last_name").val():s4wc_info.billing_name,i={number:l.val()||"",cvc:t.val()||"",exp_month:r.month||"",exp_year:r.year||"",name:e(".s4wc-billing-name").val()||a||"",address_line1:e("#billing_address_1").val()||s4wc_info.billing_address_1||"",address_line2:e("#billing_address_2").val()||s4wc_info.billing_address_2||"",address_city:e("#billing_city").val()||s4wc_info.billing_city||"",address_state:e("#billing_state").val()||s4wc_info.billing_state||"",address_zip:e(".s4wc-billing-zip").val()||e("#billing_postcode").val()||s4wc_info.billing_postcode||"",address_country:e("#billing_country").val()||s4wc_info.billing_country||""};if(c(i))return Stripe.createToken(i,n),!1}return!0}function n(r,a){if(a.error)e(".payment-errors, .stripe_token, .form_errors").remove(),s.before('<span class="payment-errors required">'+a.error.message+"</span>");else{o.append('<input type="hidden" class="stripe_token" name="stripe_token" value="'+a.id+'"/>');var n=e("#s4wc-cc-form #s4wc-save-card").prop("checked");o.append('<input type="hidden" class="save_card" name="save_card" value="'+n+'"/>'),o.submit()}}function c(r){var a=i(r);if(a.length){e(".stripe_token, .form_errors").remove();for(var n=0,c=a.length;c>n;n++){var s=a[n].field,l=a[n].type;o.append('<input type="hidden" class="form_errors" name="'+s+'" value="'+l+'">')}return o.append('<input type="hidden" class="form_errors" name="form_errors" value="1">'),!1}return o.find(".woocommerce-error").remove(),!0}function i(r){var a=[];return r.number?e.payment.validateCardNumber(r.number)||a.push({field:"s4wc-card-number",type:"invalid"}):a.push({field:"s4wc-card-number",type:"undefined"}),r.exp_month&&r.exp_year?e.payment.validateCardExpiry(r.exp_month,r.exp_year)||a.push({field:"s4wc-card-expiry",type:"invalid"}):a.push({field:"s4wc-card-expiry",type:"undefined"}),r.cvc?e.payment.validateCardCVC(r.cvc,e.payment.cardType(r.number))||a.push({field:"s4wc-card-cvc",type:"invalid"}):a.push({field:"s4wc-card-cvc",type:"undefined"}),a}var s,l,d,t,o=e("form.checkout, form#order_review"),p={};e("body").on("updated_checkout.s4wc",r).trigger("updated_checkout.s4wc"),e("form.checkout").on("checkout_place_order",a),e("form#order_review").on("submit",a),o.on("keyup change",'#s4wc-card-number, #s4wc-card-expiry, #s4wc-card-cvc, input[name="s4wc_card"], input[name="payment_method"]',function(){p.number={val:l.val(),classes:l.attr("class")},p.expiry={val:d.val()},p.cvc={val:t.val()},e(".woocommerce_error, .woocommerce-error, .woocommerce-message, .woocommerce_message, .stripe_token, .form_errors").remove()})});
//# sourceMappingURL=s4wc.min.js.map