var wpLink;!function(a){function b(){return c.dom.getParent(c.selection.getNode(),"a")}var c,d,e,f,g,h={},i={},j="ontouchend"in document;wpLink={timeToTriggerRiver:150,minRiverAJAXDuration:200,riverBottomThreshold:5,keySensitivity:100,lastSearch:"",textarea:"",init:function(){h.wrap=a("#wp-link-wrap"),h.dialog=a("#wp-link"),h.backdrop=a("#wp-link-backdrop"),h.submit=a("#wp-link-submit"),h.close=a("#wp-link-close"),h.text=a("#wp-link-text"),h.url=a("#wp-link-url"),h.nonce=a("#_ajax_linking_nonce"),h.openInNewTab=a("#wp-link-target"),h.search=a("#wp-link-search"),i.search=new e(a("#search-results")),i.recent=new e(a("#most-recent-results")),i.elements=h.dialog.find(".query-results"),h.queryNotice=a("#query-notice-message"),h.queryNoticeTextDefault=h.queryNotice.find(".query-notice-default"),h.queryNoticeTextHint=h.queryNotice.find(".query-notice-hint"),h.dialog.keydown(wpLink.keydown),h.dialog.keyup(wpLink.keyup),h.submit.click(function(a){a.preventDefault(),wpLink.update()}),h.close.add(h.backdrop).add("#wp-link-cancel a").click(function(a){a.preventDefault(),wpLink.close()}),a("#wp-link-search-toggle").on("click",wpLink.toggleInternalLinking),i.elements.on("river-select",wpLink.updateFields),h.search.on("focus.wplink",function(){h.queryNoticeTextDefault.hide(),h.queryNoticeTextHint.removeClass("screen-reader-text").show()}).on("blur.wplink",function(){h.queryNoticeTextDefault.show(),h.queryNoticeTextHint.addClass("screen-reader-text").hide()}),h.search.on("keyup input",function(){var a=this;window.clearTimeout(d),d=window.setTimeout(function(){wpLink.searchInternalLinks.call(a)},500)}),h.url.on("paste",function(){setTimeout(wpLink.correctURL,0)}),h.url.on("blur",wpLink.correctURL)},correctURL:function(){var b=a.trim(h.url.val());b&&g!==b&&!/^(?:[a-z]+:|#|\?|\.|\/)/.test(b)&&(h.url.val("http://"+b),g=b)},open:function(b){var d,e=a(document.body);e.addClass("modal-open"),wpLink.range=null,b&&(window.wpActiveEditor=b),window.wpActiveEditor&&(this.textarea=a("#"+window.wpActiveEditor).get(0),"undefined"!=typeof tinymce&&(e.append(h.backdrop,h.wrap),d=tinymce.get(wpActiveEditor),c=d&&!d.isHidden()?d:null,c&&tinymce.isIE&&(c.windowManager.bookmark=c.selection.getBookmark())),!wpLink.isMCE()&&document.selection&&(this.textarea.focus(),this.range=document.selection.createRange()),h.wrap.show(),h.backdrop.show(),wpLink.refresh(),a(document).trigger("wplink-open",h.wrap))},isMCE:function(){return c&&!c.isHidden()},refresh:function(){var a="";i.search.refresh(),i.recent.refresh(),wpLink.isMCE()?wpLink.mceRefresh():(h.wrap.hasClass("has-text-field")||h.wrap.addClass("has-text-field"),document.selection?a=document.selection.createRange().text||"":"undefined"!=typeof this.textarea.selectionStart&&this.textarea.selectionStart!==this.textarea.selectionEnd&&(a=this.textarea.value.substring(this.textarea.selectionStart,this.textarea.selectionEnd)||""),h.text.val(a),wpLink.setDefaultValues()),j?h.url.focus().blur():h.url.focus()[0].select(),i.recent.ul.children().length||i.recent.ajax(),g=h.url.val().replace(/^http:\/\//,"")},hasSelectedText:function(a){var b=c.selection.getContent();if(/</.test(b)&&(!/^<a [^>]+>[^<]+<\/a>$/.test(b)||-1===b.indexOf("href=")))return!1;if(a){var d,e=a.childNodes;if(0===e.length)return!1;for(d=e.length-1;d>=0;d--)if(3!=e[d].nodeType)return!1}return!0},mceRefresh:function(){var a,b=c.selection.getNode(),d=c.dom.getParent(b,"a[href]"),e=this.hasSelectedText(d);d?(a=d.innerText||d.textContent,h.url.val(c.dom.getAttrib(d,"href")),h.openInNewTab.prop("checked","_blank"===c.dom.getAttrib(d,"target")),h.submit.val(wpLinkL10n.update)):(a=c.selection.getContent({format:"text"}),this.setDefaultValues()),e?(h.text.val(a||""),h.wrap.addClass("has-text-field")):(h.text.val(""),h.wrap.removeClass("has-text-field"))},close:function(){a(document.body).removeClass("modal-open"),wpLink.isMCE()?c.focus():(wpLink.textarea.focus(),wpLink.range&&(wpLink.range.moveToBookmark(wpLink.range.getBookmark()),wpLink.range.select())),h.backdrop.hide(),h.wrap.hide(),g=!1,a(document).trigger("wplink-close",h.wrap)},getAttrs:function(){return wpLink.correctURL(),{href:a.trim(h.url.val()),target:h.openInNewTab.prop("checked")?"_blank":""}},buildHtml:function(a){var b='<a href="'+a.href+'"';return a.target&&(b+=' target="'+a.target+'"'),b+">"},update:function(){wpLink.isMCE()?wpLink.mceUpdate():wpLink.htmlUpdate()},htmlUpdate:function(){var a,b,c,d,e,f,g,i=wpLink.textarea;i&&(a=wpLink.getAttrs(),b=h.text.val(),a.href&&(c=wpLink.buildHtml(a),document.selection&&wpLink.range?(i.focus(),wpLink.range.text=c+(b||wpLink.range.text)+"</a>",wpLink.range.moveToBookmark(wpLink.range.getBookmark()),wpLink.range.select(),wpLink.range=null):"undefined"!=typeof i.selectionStart&&(d=i.selectionStart,e=i.selectionEnd,g=b||i.value.substring(d,e),c=c+g+"</a>",f=d+c.length,d!==e||g||(f-=4),i.value=i.value.substring(0,d)+c+i.value.substring(e,i.value.length),i.selectionStart=i.selectionEnd=f),wpLink.close(),i.focus()))},mceUpdate:function(){var a,d,e=wpLink.getAttrs();return wpLink.close(),c.focus(),tinymce.isIE&&c.selection.moveToBookmark(c.windowManager.bookmark),e.href?(a=b(),h.wrap.hasClass("has-text-field")&&(d=h.text.val()||e.href),a?(d&&("innerText"in a?a.innerText=d:a.textContent=d),c.dom.setAttribs(a,e)):d?c.selection.setNode(c.dom.create("a",e,c.dom.encode(d))):c.execCommand("mceInsertLink",!1,e),void c.nodeChanged()):void c.execCommand("unlink")},updateFields:function(a,b){h.url.val(b.children(".item-permalink").val())},setDefaultValues:function(){var a,b=/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,d=/^(https?|ftp):\/\/[A-Z0-9.-]+\.[A-Z]{2,4}[^ "]*$/i;this.isMCE()?a=c.selection.getContent():document.selection&&wpLink.range?a=wpLink.range.text:"undefined"!=typeof this.textarea.selectionStart&&(a=this.textarea.value.substring(this.textarea.selectionStart,this.textarea.selectionEnd)),a&&b.test(a)?h.url.val("mailto:"+a):a&&d.test(a)?h.url.val(a.replace(/&amp;|&#0?38;/gi,"&")):h.url.val(""),h.submit.val(wpLinkL10n.save)},searchInternalLinks:function(){var b,c=a(this),d=c.val();if(d.length>2){if(i.recent.hide(),i.search.show(),wpLink.lastSearch==d)return;wpLink.lastSearch=d,b=c.parent().find(".spinner").addClass("is-active"),i.search.change(d),i.search.ajax(function(){b.removeClass("is-active")})}else i.search.hide(),i.recent.show()},next:function(){i.search.next(),i.recent.next()},prev:function(){i.search.prev(),i.recent.prev()},keydown:function(a){var b,c;27===a.keyCode?(wpLink.close(),a.stopImmediatePropagation()):9===a.keyCode&&(c=a.target.id,"wp-link-submit"!==c||a.shiftKey?"wp-link-close"===c&&a.shiftKey&&(h.submit.focus(),a.preventDefault()):(h.close.focus(),a.preventDefault())),(38===a.keyCode||40===a.keyCode)&&(!document.activeElement||"link-title-field"!==document.activeElement.id&&"url-field"!==document.activeElement.id)&&(b=38===a.keyCode?"prev":"next",clearInterval(wpLink.keyInterval),wpLink[b](),wpLink.keyInterval=setInterval(wpLink[b],wpLink.keySensitivity),a.preventDefault())},keyup:function(a){(38===a.keyCode||40===a.keyCode)&&(clearInterval(wpLink.keyInterval),a.preventDefault())},delayedCallback:function(a,b){var c,d,e,f;return b?(setTimeout(function(){return d?a.apply(f,e):void(c=!0)},b),function(){return c?a.apply(this,arguments):(e=arguments,f=this,void(d=!0))}):a},toggleInternalLinking:function(a){var b=h.wrap.hasClass("search-panel-visible");h.wrap.toggleClass("search-panel-visible",!b),setUserSetting("wplink",b?"0":"1"),h[b?"url":"search"].focus(),a.preventDefault()}},e=function(b,c){var d=this;this.element=b,this.ul=b.children("ul"),this.contentHeight=b.children("#link-selector-height"),this.waiting=b.find(".river-waiting"),this.change(c),this.refresh(),a("#wp-link .query-results, #wp-link #link-selector").scroll(function(){d.maybeLoad()}),b.on("click","li",function(b){d.select(a(this),b)})},a.extend(e.prototype,{refresh:function(){this.deselect(),this.visible=this.element.is(":visible")},show:function(){this.visible||(this.deselect(),this.element.show(),this.visible=!0)},hide:function(){this.element.hide(),this.visible=!1},select:function(a,b){var c,d,e,f;a.hasClass("unselectable")||a==this.selected||(this.deselect(),this.selected=a.addClass("selected"),c=a.outerHeight(),d=this.element.height(),e=a.position().top,f=this.element.scrollTop(),0>e?this.element.scrollTop(f+e):e+c>d&&this.element.scrollTop(f+e-d+c),this.element.trigger("river-select",[a,b,this]))},deselect:function(){this.selected&&this.selected.removeClass("selected"),this.selected=!1},prev:function(){if(this.visible){var a;this.selected&&(a=this.selected.prev("li"),a.length&&this.select(a))}},next:function(){if(this.visible){var b=this.selected?this.selected.next("li"):a("li:not(.unselectable):first",this.element);b.length&&this.select(b)}},ajax:function(a){var b=this,c=1==this.query.page?0:wpLink.minRiverAJAXDuration,d=wpLink.delayedCallback(function(c,d){b.process(c,d),a&&a(c,d)},c);this.query.ajax(d)},change:function(a){this.query&&this._search==a||(this._search=a,this.query=new f(a),this.element.scrollTop(0))},process:function(b,c){var d="",e=!0,f="",g=1==c.page;b?a.each(b,function(){f=e?"alternate":"",f+=this.title?"":" no-title",d+=f?'<li class="'+f+'">':"<li>",d+='<input type="hidden" class="item-permalink" value="'+this.permalink+'" />',d+='<span class="item-title">',d+=this.title?this.title:wpLinkL10n.noTitle,d+='</span><span class="item-info">'+this.info+"</span></li>",e=!e}):g&&(d+='<li class="unselectable no-matches-found"><span class="item-title"><em>'+wpLinkL10n.noMatchesFound+"</em></span></li>"),this.ul[g?"html":"append"](d)},maybeLoad:function(){var a=this,b=this.element,c=b.scrollTop()+b.height();!this.query.ready()||c<this.contentHeight.height()-wpLink.riverBottomThreshold||setTimeout(function(){var c=b.scrollTop(),d=c+b.height();!a.query.ready()||d<a.contentHeight.height()-wpLink.riverBottomThreshold||(a.waiting.addClass("is-active"),b.scrollTop(c+a.waiting.outerHeight()),a.ajax(function(){a.waiting.removeClass("is-active")}))},wpLink.timeToTriggerRiver)}}),f=function(a){this.page=1,this.allLoaded=!1,this.querying=!1,this.search=a},a.extend(f.prototype,{ready:function(){return!(this.querying||this.allLoaded)},ajax:function(b){var c=this,d={action:"wp-link-ajax",page:this.page,_ajax_linking_nonce:h.nonce.val()};this.search&&(d.search=this.search),this.querying=!0,a.post(ajaxurl,d,function(a){c.page++,c.querying=!1,c.allLoaded=!a,b(a,d)},"json")}}),a(document).ready(wpLink.init)}(jQuery);