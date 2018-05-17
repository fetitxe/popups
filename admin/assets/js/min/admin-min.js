function spu_hexToRgb(e,t){e=e.replace("#","");var r=parseInt(3==e.length?e.slice(0,1).repeat(2):e.slice(0,2),16),s=parseInt(3==e.length?e.slice(1,2).repeat(2):e.slice(2,4),16),a=parseInt(3==e.length?e.slice(2,3).repeat(2):e.slice(4,6),16);return t?"rgba("+r+", "+s+", "+a+", "+t+")":"rgb("+r+", "+s+", "+a+")"}var spu={rules:null};SPU_ADMIN=function($){function e(e){"pixels"==e||"percentage"==e||"visible"==e?$("tr.auto_hide").fadeIn("fast"):$("tr.auto_hide").fadeOut("fast"),"manual"==e||"trigger-click"==e||"visible"==e||"exit-intent"==e?$(".spu-trigger-number").fadeOut("fast"):$(".spu-trigger-number").fadeIn("fast")}function t(e,t){return e.val()?parseInt(e.val()):void 0!==t?t+"px":0}function r(e,t){return e.val().length>0?e.wpColorPicker("color"):void 0!==t?t:""}function s(){var e=$("#content_ifr").contents().find("html");if(e.trigger("spu_tinymce_init"),e.css({background:spu_hexToRgb(r($("#spu_bgcolor")),$("#spu_bgopacity").val())}),"undefined"==typeof spup_js||""==$("#spu_optin").val()){e.find(".spu-fields-container").remove(),e.find("#tinymce").attr("style","padding: "+t($("#spu-padding"))+"px !important"),e.find("#tinymce").css({"background-color":spu_hexToRgb(r($("#spu-background-color")),$("#spu_background_opacity").val()),"border-color":r($("#spu-border-color")),"border-width":t($("#spu-border-width")),"border-style":$("#spu-border-type").val(),width:$("#spu-width").val(),color:r($("#spu-color")),height:"auto","min-width":"200px","max-width":"100%",margin:"8px auto 0;","box-shadow":("inset"==$("#spu-shadow-type").val()?"inset":"")+" "+$("#spu-shadow-x").val()+"px "+$("#spu-shadow-y").val()+"px "+$("#spu-shadow-blur").val()+"px "+$("#spu-shadow-spread").val()+"px "+r($("#spu-shadow-color"))});var s=$("#spu_bgimage").val();e.find("#tinymce").css({"background-image":'url("'+s+'")',"background-size":"cover"})}}return $(document).ready(function(){spu.rules.init();var t=$("#spu-appearance input.spu-color-field"),r=$("#spu_optin");!t.length||r.length&&""!=r.val()||t.wpColorPicker({change:s,clear:s}),$("#spu-appearance input,#spu-appearance select").not(".spu-color-field").change(s),e($("#spu_trigger").val()),$("#spu_trigger").change(function(){e($(this).val())})}),spu.rules={$el:null,init:function(){var e=this;e.$el=$("#spu-rules"),e.$el.on("click",".rules-add-rule",function(){return e.add_rule($(this).closest("tr")),!1}),e.$el.on("click",".rules-remove-rule",function(){return e.remove_rule($(this).closest("tr")),!1}),e.$el.on("click",".rules-add-group",function(){return e.add_group(),!1}),e.$el.on("change",".param select",function(){var e=$(this).closest("tr"),t=e.attr("data-id"),r=e.closest(".rules-group"),s=r.attr("data-id"),a=e.find("td.value"),n={action:"spu/field_group/render_rules",nonce:spu_js.nonce,rule_id:t,group_id:s,value:"",param:$(this).val()},i=$('<div class="spu-loading"><img src="'+spu_js.admin_url+'/images/wpspin_light.gif"/> </div>');a.html(i),$.ajax({url:ajaxurl,data:n,type:"post",dataType:"html",success:function(e){a.html(e)}});var o=e.find("td.operator"),n={action:"spu/field_group/render_operator",nonce:spu_js.nonce,rule_id:t,group_id:s,value:"",param:$(this).val()};o.html(i),$.ajax({url:ajaxurl,data:n,type:"post",dataType:"html",success:function(e){o.html(e)}})})},add_rule:function(e){var t=e.clone(),r=t.attr("data-id"),s="rule_"+(parseInt(r.replace("rule_",""),10)+1);return t.find("[name]").each(function(){$(this).attr("name",$(this).attr("name").replace(r,s)),$(this).attr("id",$(this).attr("id").replace(r,s))}),t.attr("data-id",s),e.after(t),!1},remove_rule:function(e){var t=e.siblings("tr").length;0==t?this.remove_group(e.closest(".rules-group")):e.remove()},add_group:function(){var e=this.$el.find(".rules-group:last"),t=e.clone(),r=t.attr("data-id"),s="group_"+(parseInt(r.replace("group_",""),10)+1);t.find("[name]").each(function(){$(this).attr("name",$(this).attr("name").replace(r,s)),$(this).attr("id",$(this).attr("id").replace(r,s))}),t.attr("data-id",s),t.find("h4").html(spu_js.l10n.or).addClass("rules-or"),t.find("tr:not(:first)").remove(),e.after(t)},remove_group:function(e){e.remove()}},{onTinyMceInit:function(){s()}}}(jQuery),function(e,$){var t,r=function(){$("#spu-custom-css").val(t.getSession().getValue())},s=function(){$("#custom_css").length&&(t=ace.edit("custom_css"),e.safecss_editor=t,t.getSession().setUseWrapMode(!0),t.setShowPrintMargin(!1),t.getSession().setValue($("#spu-custom-css").val()),t.getSession().setMode("ace/mode/css"),jQuery.fn.spin&&$("#custom_css_container").spin(!1),$("#post").submit(r))};return $.browser.msie&&parseInt($.browser.version,10)<=7?($("#custom_css_container").hide(),$("#spu-custom-css").show(),!1):($(e).load(s),void(e.aceSyncCSS=r))}(this,jQuery);