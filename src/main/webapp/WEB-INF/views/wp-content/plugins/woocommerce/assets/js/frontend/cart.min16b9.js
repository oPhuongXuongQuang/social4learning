jQuery(function(a){return"undefined"==typeof wc_cart_params?!1:(a(document).on("click",".shipping-calculator-button",function(){return a(".shipping-calculator-form").slideToggle("slow"),!1}).on("change","select.shipping_method, input[name^=shipping_method]",function(){var b=[];a("select.shipping_method, input[name^=shipping_method][type=radio]:checked, input[name^=shipping_method][type=hidden]").each(function(){b[a(this).data("index")]=a(this).val()}),a("div.cart_totals").block({message:null,overlayCSS:{background:"#fff",opacity:.6}});var c={security:wc_cart_params.update_shipping_method_nonce,shipping_method:b};a.post(wc_cart_params.wc_ajax_url.toString().replace("%%endpoint%%","update_shipping_method"),c,function(b){a("div.cart_totals").replaceWith(b),a(document.body).trigger("updated_shipping_method")})}),void a(".shipping-calculator-form").hide())});