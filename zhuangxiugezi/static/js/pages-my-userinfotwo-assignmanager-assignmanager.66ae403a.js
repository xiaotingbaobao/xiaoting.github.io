(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-my-userinfotwo-assignmanager-assignmanager"],{"0b85":function(t,a,e){"use strict";e.r(a);var i=e("9a7a"),n=e("51e4");for(var o in n)"default"!==o&&function(t){e.d(a,t,(function(){return n[t]}))}(o);e("f394");var r,l=e("f0c5"),c=Object(l["a"])(n["default"],i["b"],i["c"],!1,null,"265795a0",null,!1,i["a"],r);a["default"]=c.exports},"4f16":function(t,a,e){var i=e("24fb");a=i(!1),a.push([t.i,"@-webkit-keyframes grace-fade-data-v-38501214{0%{opacity:.9}25%{opacity:1}50%{opacity:.9}75%{opacity:1}100%{opacity:1}}@keyframes grace-fade-data-v-38501214{0%{opacity:.9}25%{opacity:1}50%{opacity:.9}75%{opacity:1}100%{opacity:1}}.grace-full-loading .content[data-v-38501214]{width:%?300?%;height:auto;position:absolute;z-index:100;left:50%;top:40%;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%);-webkit-animation:grace-fade-data-v-38501214 3.5s infinite linear;animation:grace-fade-data-v-38501214 3.5s infinite linear;opacity:.9;padding:%?10?%}.grace-full-loading .image[data-v-38501214]{width:%?150?%;height:%?150?%;margin:0 auto}.grace-full-loading .image uni-image[data-v-38501214]{width:%?150?%;height:%?150?%;border-radius:50%}.grace-full-loading .text[data-v-38501214]{line-height:1.5em;font-size:%?22?%;margin-top:6px;text-align:center}\r\n\r\n/* .grace-full-loading{width:100%; height:100%; background:#FFFFFF; z-index:99;}\r\n.grace-full-loading .content{width:300rpx; height:auto;  z-index:100;  transform:translate(-50%, -50%); animation:grace-fade 3500ms infinite linear; opacity:0.6; padding:10rpx;}\r\n.grace-full-loading .image{width:150rpx; height:150rpx; margin:0 auto;}\r\n.grace-full-loading .image image{width:150rpx; height:150rpx; border-radius:150rpx;}\r\n.grace-full-loading .text{line-height:1.5em; font-size:22upx; margin-top:6px; font-style:italic; text-align:center;} */",""]),t.exports=a},"51e4":function(t,a,e){"use strict";e.r(a);var i=e("90e2"),n=e.n(i);for(var o in i)"default"!==o&&function(t){e.d(a,t,(function(){return i[t]}))}(o);a["default"]=n.a},"5bde":function(t,a,e){var i=e("acbc");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var n=e("4f06").default;n("1a42ccbe",i,!0,{sourceMap:!1,shadowMode:!1})},"5be3":function(t,a,e){"use strict";var i,n=function(){var t=this,a=t.$createElement,e=t._self._c||a;return t.graceFullLoading?e("v-uni-view",{staticClass:"grace-full-loading",on:{touchmove:function(a){a.stopPropagation(),arguments[0]=a=t.$handleEvent(a),t.stopFun.apply(void 0,arguments)},click:function(a){a.stopPropagation(),arguments[0]=a=t.$handleEvent(a),t.stopFun.apply(void 0,arguments)}}},[e("v-uni-view",{staticClass:"content"},[e("v-uni-view",{staticClass:"image"},[e("v-uni-image",{attrs:{src:t.logoUrl,mode:"aspectFill"}})],1),e("v-uni-view",{staticClass:"text"},[t._v(t._s(t.text))])],1)],1):t._e()},o=[];e.d(a,"b",(function(){return n})),e.d(a,"c",(function(){return o})),e.d(a,"a",(function(){return i}))},"6ab6":function(t,a,e){"use strict";e.r(a);var i=e("99ab"),n=e.n(i);for(var o in i)"default"!==o&&function(t){e.d(a,t,(function(){return i[t]}))}(o);a["default"]=n.a},"90e2":function(t,a,e){"use strict";var i=e("ee27");e("ac1f"),e("1276"),Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var n,o=i(e("ed78")),r=i(e("9fee")),l={components:{pageHeadGit:o.default,graceFullLoading:r.default},data:function(){return{graceFullLoading:!0,tabIndex:"choose",staffLists:[],userinfo:{},tmplist:[],current:"",postData:{order_id:"",target:"",type:"manager"}}},onLoad:function(t){n=this,n.projectid=t.id,n.getuser((function(t){console.log(t),n.userinfo=t.data,console.log(n.userinfo),n.iscompany=n.userinfo.userinfo.role.split("|")[1],n.userlist()}))},methods:{userlist:function(){n.post("api/company/staff_list",{company_id:n.iscompany,power_id:"8"},(function(t){if(console.log(t),1===t.code){var a;a=t.data.staff_list,n.each(a,(function(t,a){if(a.avatar?a.avatar=a.avatar:2==a.gender?a.avatar="/static/img/nv.png":a.avatar="/static/img/nan.png",a.roles){var e=a.roles.split(",");console.log(e),n.each(e,(function(t,a){a.split("|")[0]}))}})),n.$set(n,"tmplist",a),console.log(n.tmplist),n.graceFullLoading=!1}else{var e=t.msg.split("(",2);n.echo(e[0])}}))},checkone:function(t){console.log(t),n.postData.target=t},deletefee:function(){n.postData.order_id=n.projectid,""==n.postData.target?n.echo("请选择分配的项目经理"):(n.post("api/company/dispatch_order",n.postData,(function(t){if(1===t.code)console.log(t),n.echo("分配项目经理成功！"),uni.setStorage({key:"willUpdate",data:!0}),uni.setStorage({key:"update_my",data:!0}),uni.setStorage({key:"update_mana",data:!0}),setTimeout((function(){uni.navigateBack({delta:1})}),500);else{var a=t.msg.split("(",2);n.echo(a[0])}})),console.log(n.postData))}}};a.default=l},"99ab":function(t,a,e){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var i={name:"graceFullLoading",props:{graceFullLoading:{type:Boolean,default:!1},logoUrl:{type:String,default:""},text:{type:String,default:"Loading ..."}},methods:{stopFun:function(){return!1}}};a.default=i},"9a7a":function(t,a,e){"use strict";var i={pageHeadGit:e("ed78").default},n=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("v-uni-view",[e("page-head-git",{attrs:{title:"分配项目经理"},on:{back:function(a){arguments[0]=a=t.$handleEvent(a),t.backfee.apply(void 0,arguments)},send:function(a){arguments[0]=a=t.$handleEvent(a),t.deletefee.apply(void 0,arguments)}}}),e("v-uni-view",{staticClass:"connect"},[e("v-uni-view",{staticClass:"xpadding",staticStyle:{"background-color":"#f9f9f9"}}),e("v-uni-view",{staticClass:"content_li"},[e("v-uni-view",{staticClass:"week"},[t.tmplist.length<1?e("v-uni-view",{key:1,staticClass:"tmpnone"},[t._v("暂无跟进人员")]):t._e(),t.tmplist.length>0?e("v-uni-view",{key:2},[e("v-uni-radio-group",t._l(t.tmplist,(function(a,i){return e("v-uni-label",{key:i},[e("v-uni-view",{staticClass:"content_li_con",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.checkone(a.id)}}},[e("v-uni-view",{staticClass:"con_li_l"},[e("v-uni-radio",{staticStyle:{transform:"scale(0.9)"},attrs:{checked:i===t.current}})],1),e("v-uni-view",{staticClass:"con_li_photo"},[e("v-uni-image",{attrs:{"lazy-load":!0,src:a.avatar,mode:"aspectFill"}})],1),e("v-uni-view",{staticClass:"con_li_name"},[t._v(t._s(a.realname))]),e("v-uni-view",{staticClass:"con_li_address"},[t._v(t._s(a.roletext))])],1)],1)})),1)],1):t._e()],1)],1)],1)],1)},o=[];e.d(a,"b",(function(){return n})),e.d(a,"c",(function(){return o})),e.d(a,"a",(function(){return i}))},"9fee":function(t,a,e){"use strict";e.r(a);var i=e("5be3"),n=e("6ab6");for(var o in n)"default"!==o&&function(t){e.d(a,t,(function(){return n[t]}))}(o);e("c258");var r,l=e("f0c5"),c=Object(l["a"])(n["default"],i["b"],i["c"],!1,null,"38501214",null,!1,i["a"],r);a["default"]=c.exports},acbc:function(t,a,e){var i=e("24fb");a=i(!1),a.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */uni-page-body[data-v-265795a0]{background-color:#f9f9f9}.top_margin[data-v-265795a0]{width:100%;height:%?188?%;background-color:#fff;position:fixed;top:%?88?%;z-index:10}.top_margin .top[data-v-265795a0]{width:calc(100% - %?260?%);margin-left:%?130?%;margin-right:%?130?%;display:-webkit-box;display:-webkit-flex;display:flex;padding-top:%?24?%;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.top_margin .top .top_l[data-v-265795a0]{width:%?96?%;height:%?96?%;border:1px solid #ccc;line-height:%?96?%;text-align:center;border-radius:50%;color:#ccc;font-size:%?48?%}.top_margin .top .top_l.active[data-v-265795a0]{color:#fff;border:1px solid #2468b1;background:-webkit-linear-gradient(left,#2466ad,#2b7ed1);background:linear-gradient(90deg,#2466ad,#2b7ed1)}.top_margin .top .iconfont[data-v-265795a0]{font-size:%?40?%;color:#2468b1}.top_margin .top .top_line[data-v-265795a0]{width:%?47?%;height:%?4?%;background-color:#ccc}.top_margin .top .top_line.active[data-v-265795a0]{background-color:#2468b1}.top_margin .top_title[data-v-265795a0]{width:100%;margin-top:%?13?%;display:-webkit-box;display:-webkit-flex;display:flex;font-size:%?30?%;color:#999;text-align:center}.top_margin .top_title .top_text[data-v-265795a0]{width:%?375?%}.top_margin .top_title .top_text.active[data-v-265795a0]{color:#2468b1;text-align:center}.top_margin .top_title .top_text[data-v-265795a0]:last-child{margin-right:0;text-align:center}.xpaddingapp[data-v-265795a0]{position:fixed;top:%?276?%;height:%?20?%;width:100%;z-index:10;background-color:#f5f5f5}.search[data-v-265795a0]{position:fixed;top:%?88?%;z-index:10;width:100%;background-color:#fff;height:%?88?%;line-height:%?88?%;display:-webkit-box;display:-webkit-flex;display:flex}.search .search_input[data-v-265795a0]{margin-left:%?32?%;margin-top:%?14?%;height:%?60?%;width:%?688?%;border-radius:%?10?%;background:#f0f0f0;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.search .search_input .iconfont[data-v-265795a0]{margin-left:%?21?%}.search .search_input uni-input[data-v-265795a0]{width:%?668?%;color:#666;font-size:%?24?%;margin-left:%?18?%}.content_li[data-v-265795a0]{width:100%;background-color:#fff}.content_li .tmpnone[data-v-265795a0]{font-size:%?30?%;color:#999;text-align:center;margin-top:%?50?%}.content_li .content_li_con[data-v-265795a0]{margin-left:%?33?%;margin-right:%?22?%;width:calc(100% - %?55?%);border-bottom:1px solid #f0f0f0;padding:%?16?% 0;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.content_li .content_li_con .con_li_l[data-v-265795a0]{margin-left:%?13?%;width:%?44?%;height:%?44?%;line-height:%?44?%;color:#2468b1}.content_li .content_li_con .con_li_photo[data-v-265795a0]{width:%?66?%;height:%?66?%;border-radius:50%;margin-left:%?26?%;overflow:hidden}.content_li .content_li_con .con_li_photo uni-image[data-v-265795a0]{width:100%;height:100%}.content_li .content_li_con .con_li_name[data-v-265795a0]{font-size:%?30?%;color:#666;margin-left:%?22?%;width:%?300?%;text-overflow:ellipsis;white-space:nowrap;overflow:hidden}.content_li .content_li_con .con_li_address[data-v-265795a0]{width:%?170?%;margin-left:%?17?%;color:#999;font-size:%?24?%}.content_li .content_li_con .conrole[data-v-265795a0]{text-overflow:ellipsis;white-space:nowrap;overflow:hidden;display:-webkit-box;display:-webkit-flex;display:flex;width:%?370?%;margin-left:%?17?%;color:#999;font-size:%?24?%}.next[data-v-265795a0]{position:fixed;width:100%;height:%?88?%;bottom:0;background:-webkit-linear-gradient(left,#2466ad,#2b7ed1);background:linear-gradient(90deg,#2466ad,#2b7ed1);color:#fff;line-height:%?60?%;text-align:center;line-height:%?88?%}.grace-full-loading[data-v-265795a0]{width:100%;height:calc(100% - %?570?%);background:#fff;position:fixed;z-index:99;left:0;top:%?570?%}body.?%PAGE?%[data-v-265795a0]{background-color:#f9f9f9}',""]),t.exports=a},c258:function(t,a,e){"use strict";var i=e("eed4"),n=e.n(i);n.a},eed4:function(t,a,e){var i=e("4f16");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var n=e("4f06").default;n("4ae281b9",i,!0,{sourceMap:!1,shadowMode:!1})},f394:function(t,a,e){"use strict";var i=e("5bde"),n=e.n(i);n.a}}]);