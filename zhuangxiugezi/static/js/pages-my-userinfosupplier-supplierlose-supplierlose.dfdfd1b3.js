(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-my-userinfosupplier-supplierlose-supplierlose"],{"0928":function(t,e,i){"use strict";var a=i("7f8c"),n=i.n(a);n.a},"13ae":function(t,e,i){"use strict";var a={pageHeadGit:i("ed78").default},n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",[i("page-head-git",{attrs:{title:"填写流失原因"},on:{back:function(e){arguments[0]=e=t.$handleEvent(e),t.backfee.apply(void 0,arguments)},send:function(e){arguments[0]=e=t.$handleEvent(e),t.deletefee.apply(void 0,arguments)}}}),i("v-uni-view",{staticClass:"toptext"},[i("v-uni-view",{staticClass:"writetext"},[i("v-uni-textarea",{attrs:{placeholder:"请输入流失备注(1000字以内)","auto-height":!0,maxlength:"1000","placeholder-style":"color: #999; font-size: 30upx;"},on:{input:function(e){arguments[0]=e=t.$handleEvent(e),t.textareaInput.apply(void 0,arguments)}},model:{value:t.postData.remark,callback:function(e){t.$set(t.postData,"remark",e)},expression:"postData.remark"}}),i("v-uni-view",{staticClass:"areatip"},[t._v(t._s(t.ereanum))])],1)],1),i("v-uni-view",{staticStyle:{height:"40upx"}}),t.listactive?i("v-uni-view",{staticClass:"timelist"},t._l(t.list,(function(e,a){return i("v-uni-view",{key:a,staticClass:"time_item",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.radioVal(a)}}},[i("v-uni-radio",{staticStyle:{transform:"scale(0.72)"},attrs:{checked:e.select}}),i("v-uni-view",{staticClass:"time_text"},[t._v(t._s(e.name))])],1)})),1):t._e()],1)},o=[];i.d(e,"b",(function(){return n})),i.d(e,"c",(function(){return o})),i.d(e,"a",(function(){return a}))},"50fd":function(t,e,i){"use strict";i.r(e);var a=i("70d7"),n=i.n(a);for(var o in a)"default"!==o&&function(t){i.d(e,t,(function(){return a[t]}))}(o);e["default"]=n.a},"70d7":function(t,e,i){"use strict";var a=i("ee27");i("c975"),i("a9e3"),i("ac1f"),i("1276"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n,o=a(i("ed78")),r={components:{pageHeadGit:o.default},data:function(){return{ereanum:"1000",list:[{name:"预算不足",select:!1},{name:"设计问题",select:!1},{name:"其他问题",select:!1}],listactive:!1,listtext:"请选择",postData:{order_id:"",remark:"",whylost:"",user_id:""},projectid:"",userid:"",suppliercode:"",issupplierid:!1,iscompany:""}},onLoad:function(t){n=this,console.log(t),n.projectid=t.id,n.getuser((function(t){n.userinfo=t.data,console.log(n.userinfo),n.userid=n.userinfo.id,"individual|0"==n.userinfo.userinfo.role?n.iscompany="-1":n.userinfo.userinfo.role.indexOf("supplier")>-1?n.iscompany="-2":n.iscompany=n.userinfo.userinfo.role.split("|")[1],console.log(n.iscompany),n.getsupplierrole()}))},methods:{backfee:function(){uni.navigateBack({delta:1})},getsupplierrole:function(){n.post("api/staff/supplier_list",{user_id:n.userid},(function(t){if(console.log(t),1===t.code)t.data.length>0?(n.suppliercode=t.data[0].supplier,n.$set(n,"issupplierid",!0)):n.$set(n,"issupplierid",!1),console.log(n.issupplierid);else{var e=t.msg.split("(",2);n.echo(e[0])}}))},textareaInput:function(){n.ereanum=Number(1e3-event.target.value.length)},listClick:function(){n.listactive=!n.listactive},radioVal:function(t){n.listtext=n.list[t].name,n.list[t].select=!0,n.each(n.list,(function(e,i){e!==t&&(i.select=!1)})),n.listactive=!1},deletefee:function(){n.issupplierid?(n.postData.whylost=n.listtext,console.log("ssssssssssssssssss"),n.iscompany>0?n.postData.remark?n.post("api/supplier/com_order_lost",{supplier_code:n.suppliercode,order_id:n.projectid,status:"lost"},(function(t){if(console.log(t),1===t.code)n.echo("成功设为流失客户！"),setTimeout((function(){uni.reLaunch({url:"/pages/my/my"})}),500);else{var e=t.msg.split("(",2);n.echo(e[0])}})):n.echo("请输入流失备注"):n.postData.remark?n.post("/api/project/order_lost",{supplier_code:n.suppliercode,order_id:n.projectid,whylost:n.postData.whylost,remark:n.postData.remark},(function(t){if(console.log(t),1===t.code)n.echo("成功设为流失客户！"),setTimeout((function(){uni.reLaunch({url:"/pages/my/my"})}),500);else{var e=t.msg.split("(",2);n.echo(e[0])}})):n.echo("请输入流失备注")):(console.log("nnnnnnnnnnnnnnn"),n.postData.order_id=n.projectid,n.postData.user_id=n.userid,n.postData.whylost=n.listtext,"请选择"==n.postData.whylost?n.echo("请选择流失原因"):n.postData.remark?(console.log(n.postData),n.post("api/project/order_lost",n.postData,(function(t){if(console.log(t),1===t.code)n.echo("成功设为流失客户！"),setTimeout((function(){uni.reLaunch({url:"/pages/my/my"})}),500);else{var e=t.msg.split("(",2);n.echo(e[0])}}))):n.echo("请输入流失备注"))}}};e.default=r},"7f8c":function(t,e,i){var a=i("90a6");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var n=i("4f06").default;n("054214f6",a,!0,{sourceMap:!1,shadowMode:!1})},"90a6":function(t,e,i){var a=i("24fb");e=a(!1),e.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.top .status[data-v-1a748004]{width:100%;height:0;position:fixed;background-image:-webkit-linear-gradient(left,#2466ad,#2b7ed1);background-image:linear-gradient(90deg,#2466ad,#2b7ed1);z-index:10;top:0}.top .nav-bar[data-v-1a748004]{width:100%;height:%?88?%;line-height:%?88?%;background-image:-webkit-linear-gradient(left,#2466ad,#2b7ed1);background-image:linear-gradient(90deg,#2466ad,#2b7ed1);display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;position:fixed;overflow:hidden;top:0;z-index:10\r\n  /* .back {\r\n\t\t\tmargin: 0 2px;\r\n\t\t\twidth: 27px;\r\n\t\t\theight: 30px;\r\n\t\t\tflex-shrink: 0;\r\n\t\t}\r\n\t\t.middle {\r\n\t\t\tcolor: white;\r\n\t\t\twidth: 80%;\r\n\t\t\theight: 44px;\r\n\t\t\tline-height: 44px;\r\n\t\t\tpadding: 0 10%;\r\n\t\t\tfont-size: 16px;\r\n\t\t\ttext-align: center;\r\n\t\t}\r\n\t\t.icon-btn {\r\n\t\t\tmargin: 0 2px;\r\n\t\t\twidth: 27px;\r\n\t\t\theight: 30px;\r\n\t\t\tflex-shrink: 0;\r\n\t\t\tdisplay: flex;\r\n\t\t\tjustify-content: flex-end;\r\n\t\t\t.iconfont {\r\n\t\t\t\tcolor: white;\r\n\t\t\t\twidth: 27px;\r\n\t\t\t\theight: 27px;\r\n\t\t\t\tdisplay: flex;\r\n\t\t\t\tjustify-content: center;\r\n\t\t\t\talign-items: center;\r\n\t\t\t\tfont-size: 21px;\r\n\t\t\t}\r\n\t\t} */}.top .nav-bar .topimg[data-v-1a748004]{width:%?45?%;height:%?45?%;margin-left:%?33?%;overflow:hidden}.top .nav-bar .topimg uni-image[data-v-1a748004]{width:100%;height:100%}.top .nav-bar .back[data-v-1a748004]{width:%?88?%;height:%?88?%;position:absolute;left:%?15?%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.top .nav-bar .back .iconfont[data-v-1a748004]{font-size:%?44?%}.top .nav-bar .avatar[data-v-1a748004]{width:%?45?%;height:%?45?%;line-height:%?45?%;border-radius:50%;position:absolute;right:%?30?%;top:%?22?%}.top .nav-bar .avatar uni-image[data-v-1a748004]{display:block;width:%?45?%;height:%?45?%}.top .nav-bar .avatar .iconfont[data-v-1a748004]{font-size:%?36?%;color:#fff}.top .nav-bar .title[data-v-1a748004]{width:100%;height:%?88?%;line-height:%?88?%;font-size:%?38?%;color:#fff;text-align:center;background-image:-webkit-linear-gradient(left,#2466ad,#2b7ed1);background-image:linear-gradient(90deg,#2466ad,#2b7ed1)}.top .nav-bar .stt[data-v-1a748004]{line-height:%?110?%;font-size:%?30?%;color:#fff;position:absolute;right:%?30?%;top:0}.top .place[data-v-1a748004]{height:%?88?%}uni-page-body[data-v-1a748004]{background-color:#f5f5f5}.toptext[data-v-1a748004]{width:calc(100% - %?60?%);background-color:#fff;padding:%?30?% %?30?% %?30?% %?30?%}.toptext .writetext[data-v-1a748004]{width:100%;min-height:%?320?%;margin-bottom:%?30?%;color:#999;font-size:%?30?%;position:relative}.toptext .writetext uni-textarea[data-v-1a748004]{width:100%;min-height:%?320?%}.toptext .writetext .areatip[data-v-1a748004]{position:absolute;right:%?2?%;bottom:%?2?%}.toptext .uploadimg[data-v-1a748004]{width:%?180?%;height:%?180?%;border:1px dashed #999}.toptext .uploadimg .iconfont[data-v-1a748004]{text-align:center;line-height:%?180?%;color:#999;font-size:%?70?%}.nexttime[data-v-1a748004]{width:100%;height:%?98?%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;-webkit-box-align:center;-webkit-align-items:center;align-items:center;background-color:#fff;border-bottom:1px solid #f5f5f5}.nexttime .nexttime_left[data-v-1a748004]{color:#000;font-size:%?32?%;margin-left:%?30?%}.nexttime .nexttime_right[data-v-1a748004]{color:#999;font-size:%?32?%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;margin-right:%?30?%}.nexttime .nexttime_right .nexttime_rightl[data-v-1a748004]{margin-right:%?10?%}.before[data-v-1a748004]{width:100%;background-color:#fff}.before .before_toptitle[data-v-1a748004]{width:calc(100% - %?60?%);height:%?100?%;line-height:%?100?%;font-size:%?32?%;color:#000;margin:0 %?30?%;border-bottom:1px solid #f1f1f1}.before .before_nametime[data-v-1a748004]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;color:#999;font-size:%?28?%;width:calc(100% - %?60?%);margin:%?30?%}.before .before_nametime .before_nametimeleft[data-v-1a748004]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;margin-right:%?60?%}.before .before_nametime .before_nametimeleft .iconfont[data-v-1a748004]{font-size:%?30?%;margin-right:%?10?%}.before .before_nametime .before_nametimeright[data-v-1a748004]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.before .before_nametime .before_nametimeright .iconfont[data-v-1a748004]{font-size:%?30?%;margin-right:%?10?%}.before .before_remark[data-v-1a748004]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;color:#666;font-size:%?30?%;width:calc(100% - %?60?%);margin:%?30?%}.before .before_img[data-v-1a748004]{padding:0 %?30?% %?30?% %?30?%;width:%?200?%;height:%?200?%}.before .before_img uni-image[data-v-1a748004]{width:100%;height:100%}.timelist[data-v-1a748004]{width:100%;background-color:#fff}.timelist .time_item[data-v-1a748004]{width:calc(100% - %?60?%);margin:0 %?30?%;height:%?86?%;border-bottom:1px solid #f5f5f5;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.timelist .time_item .time_text[data-v-1a748004]{font-size:%?30?%;color:#333;margin-left:%?16?%}.timelist .time_item uni-radio[data-v-1a748004]{color:#2468b1}body.?%PAGE?%[data-v-1a748004]{background-color:#f5f5f5}',""]),t.exports=e},d768:function(t,e,i){"use strict";i.r(e);var a=i("13ae"),n=i("50fd");for(var o in n)"default"!==o&&function(t){i.d(e,t,(function(){return n[t]}))}(o);i("0928");var r,s=i("f0c5"),l=Object(s["a"])(n["default"],a["b"],a["c"],!1,null,"1a748004",null,!1,a["a"],r);e["default"]=l.exports}}]);