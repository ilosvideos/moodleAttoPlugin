YUI.add("moodle-atto_ilosbutton-button",function(e,t){var n="https://app.ilosvideos.com/lti/embed",r="moodleLtiIframe",i="atto_ilosbutton",s="float:left; display:none",o='<iframe src="{{src}}" id="{{id}}" height="{{height}}" width="{{width}}" scrolling="auto"></iframe>';e.namespace("M.atto_ilosbutton").Button=e.Base.create("button",e.M.editor_atto.EditorPlugin,[],{initializer:function(){if(this.get("disabled"))return;var e="iconone";this.addButton({icon:"ed/"+e,iconComponent:"atto_ilosbutton",buttonName:e,callback:this._displayDialogue,callbackArgs:e})},_displayDialogue:function(e,t){var n=900,r=700,s=this.getDialogue({headerContent:M.util.get_string("dialogtitle",i),width:n+"px",height:r+"px",focusAfterHide:t});e.preventDefault(),s.after("visibleChange",function(){var e=s.getAttrs();e.visible===!1&&setTimeout(function(){s.reset()},5)}),s.width!==n+"px"&&s.set("width",n+"px"),s.height!==r+"px"&&s.set("height",r+"px"),s.set("bodyContent",this._getFormContent(t)),s.show(),this._doInsert(this)},_getFormContent:function(t){var u=this.get("sessKey"),a=this.get("webRoot")+"/mod/lti/return.php?course="+this.get("courseId")+"&sesskey="+u,f=this.get("orgApiKey"),l=n+"?oauth_consumer_key="+f+"&launch_presentation_return_url="+encodeURIComponent(a)+"&tool_consumer_info_product_family_code=moodle",c=e.Handlebars.compile(o),h=e.Node.create(c({elementid:this.get("host").get("elementid"),component:i,clickedicon:t,src:l,height:650,width:850,id:r,selectalign:s}));return this._form=h,h},_doInsert:function(e){var t=document.getElementById(r);t.onload=function(){var n=t.contentDocument;if(!n)return;var r=n.getElementById("page-content").querySelector('[role="main"]'),i=r.innerText,s=i.search("https://");i=i.substr(s);if(i.indexOf("ilosvideos")<=0)return;var o='<iframe allowfullscreen="" frameborder="0" height="315" src="'+i+'" width="560"></iframe>';e.getDialogue({focusAfterHide:null}).hide(),e.editor.focus(),e.get("host").insertContentAtFocusPoint(o),e.markUpdated()}}},{ATTRS:{disabled:{value:!1},courseId:{value:null},orgApiKey:{value:null},webRoot:{value:null},sessKey:{value:null}}})},"@VERSION@",{requires:["moodle-editor_atto-plugin"]});
