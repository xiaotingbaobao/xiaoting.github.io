(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-management-desigermanagerlist-desigermanagerlist"],{"1ef9":function(t,a,e){"use strict";var n={pageHeadBack:e("9c7e").default},i=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("v-uni-view",[e("page-head-back",{attrs:{title:"客户经理列表"}}),e("v-uni-view",[0==t.tmplist.length?e("v-uni-view",{staticClass:"xlistmargin"},[t._v("暂无客户经理！")]):t._e(),e("v-uni-view",{staticClass:"staff"},[e("v-uni-view",{staticClass:"staff_one"},[e("v-uni-view",{staticClass:"staff_li"},[e("v-uni-view",{staticClass:"staff_margin"},t._l(t.tmplist,(function(a,n){return e("v-uni-view",{key:n,staticClass:"staff_staff",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.touserdetail(a)}}},[e("v-uni-view",{staticClass:"image"},[e("v-uni-image",{attrs:{"lazy-load":!0,src:a.avatar,mode:"aspectFill"}})],1),t.designernumshow?e("v-uni-view",{staticClass:"iamge_num"},[t._v(t._s(a.no_desi_count))]):t._e(),e("v-uni-view",{staticClass:"name"},[t._v(t._s(a.realname))])],1)})),1)],1)],1)],1)],1)],1)},o=[];e.d(a,"b",(function(){return i})),e.d(a,"c",(function(){return o})),e.d(a,"a",(function(){return n}))},"4f16":function(t,a,e){var n=e("24fb");a=n(!1),a.push([t.i,"@-webkit-keyframes grace-fade-data-v-38501214{0%{opacity:.9}25%{opacity:1}50%{opacity:.9}75%{opacity:1}100%{opacity:1}}@keyframes grace-fade-data-v-38501214{0%{opacity:.9}25%{opacity:1}50%{opacity:.9}75%{opacity:1}100%{opacity:1}}.grace-full-loading .content[data-v-38501214]{width:%?300?%;height:auto;position:absolute;z-index:100;left:50%;top:40%;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%);-webkit-animation:grace-fade-data-v-38501214 3.5s infinite linear;animation:grace-fade-data-v-38501214 3.5s infinite linear;opacity:.9;padding:%?10?%}.grace-full-loading .image[data-v-38501214]{width:%?150?%;height:%?150?%;margin:0 auto}.grace-full-loading .image uni-image[data-v-38501214]{width:%?150?%;height:%?150?%;border-radius:50%}.grace-full-loading .text[data-v-38501214]{line-height:1.5em;font-size:%?22?%;margin-top:6px;text-align:center}\r\n\r\n/* .grace-full-loading{width:100%; height:100%; background:#FFFFFF; z-index:99;}\r\n.grace-full-loading .content{width:300rpx; height:auto;  z-index:100;  transform:translate(-50%, -50%); animation:grace-fade 3500ms infinite linear; opacity:0.6; padding:10rpx;}\r\n.grace-full-loading .image{width:150rpx; height:150rpx; margin:0 auto;}\r\n.grace-full-loading .image image{width:150rpx; height:150rpx; border-radius:150rpx;}\r\n.grace-full-loading .text{line-height:1.5em; font-size:22upx; margin-top:6px; font-style:italic; text-align:center;} */",""]),t.exports=a},5961:function(t,a,e){"use strict";var n=e("a8d2"),i=e.n(n);i.a},"5be3":function(t,a,e){"use strict";var n,i=function(){var t=this,a=t.$createElement,e=t._self._c||a;return t.graceFullLoading?e("v-uni-view",{staticClass:"grace-full-loading",on:{touchmove:function(a){a.stopPropagation(),arguments[0]=a=t.$handleEvent(a),t.stopFun.apply(void 0,arguments)},click:function(a){a.stopPropagation(),arguments[0]=a=t.$handleEvent(a),t.stopFun.apply(void 0,arguments)}}},[e("v-uni-view",{staticClass:"content"},[e("v-uni-view",{staticClass:"image"},[e("v-uni-image",{attrs:{src:t.logoUrl,mode:"aspectFill"}})],1),e("v-uni-view",{staticClass:"text"},[t._v(t._s(t.text))])],1)],1):t._e()},o=[];e.d(a,"b",(function(){return i})),e.d(a,"c",(function(){return o})),e.d(a,"a",(function(){return n}))},"6ab6":function(t,a,e){"use strict";e.r(a);var n=e("99ab"),i=e.n(n);for(var o in n)"default"!==o&&function(t){e.d(a,t,(function(){return n[t]}))}(o);a["default"]=i.a},"78c4":function(t,a,e){"use strict";var n=e("ee27");e("99af"),e("c975"),e("ac1f"),e("1276"),Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var i,o=n(e("9c7e")),r=n(e("9fee")),f={components:{pageHeadBack:o.default,graceFullLoading:r.default},data:function(){return{graceFullLoading:!0,title:"input",focus:!1,inputValue:"",changeValue:"",sortData:[{name:"在职人员"},{name:"全部职位"},{name:"全部项目"}],tmp:[],tmplist:[],rolelist:[],imageSrc:"",flag:!1,loading:!0,loadingText:"已加载全部！",nomore:!1,userid:"",userinfo:{},myroledata:[],designernumshow:!1}},onShow:function(){i.getuserInformation()},onLoad:function(){i=this,i.getuser((function(t){console.log(t),t.data.staff&&(i.myroledata=t.data.staff.roles.split(","),i.each(i.myroledata,(function(t,a){"2|0"!=a&&"2|1"!=a&&"3|0"!=a&&"3|1"!=a&&"4|1"!=a||(i.designernumshow=!0)})))}))},methods:{getuserInformation:function(){i.post("api/user/index",{},(function(t){if(1===t.code)console.log(t),i.userinfo=t.data.userinfo,console.log(i.userinfo),i.rolesendnum=i.userinfo.userinfo.role,i.iscompany=i.userinfo.userinfo.role.split("|")[1],i.userlist();else{var a=t.msg.split("(",2);i.echo(a[0])}}))},userlist:function(){i.post("api/company/staff_list",{company_id:i.iscompany,power_id:"4"},(function(t){if(console.log(t),1===t.code){var a=t.data.staff_list,e=[];i.each(a,(function(t,n){"-1"==a[t].roles.indexOf("2")&&"-1"==a[t].roles.indexOf("3")&&(e=e.concat(n))}));var n=[];i.each(e,(function(t,a){a.avatar?i.$set(a,"avatar",a.avatar):2==a.gender?i.$set(a,"avatar","/static/img/nv.png"):i.$set(a,"avatar","/static/img/nan.png");n=a.roles.split(","),console.log(n);var e=[];i.each(n,(function(t,a){var n="";2==a.split("|")[0]&&(n="创始人",e=e.concat(n)),3==a.split("|")[0]&&(n="店长",e=e.concat(n)),4==a.split("|")[0]&&(n="客服",e=e.concat(n)),5==a.split("|")[0]&&(n="设计师",e=e.concat(n)),7==a.split("|")[0]&&(n="工程总监",e=e.concat(n)),8==a.split("|")[0]&&(n="项目经理",e=e.concat(n)),9==a.split("|")[0]&&(n="监理",e=e.concat(n))})),console.log(e),i.$set(a,"rolelist",e),a.rolelist=e})),i.$set(i,"tmplist",e),console.log(i.tmplist),i.graceFullLoading=!1}else{var o=t.msg.split("(",2);i.echo(o[0])}}))},touserdetail:function(t){var a=!1;i.each(i.myroledata,(function(t,e){"2|0"!=e&&"2|1"!=e&&"3|0"!=e&&"3|1"!=e&&"4|1"!=e||(a=!0)})),a&&uni.navigateTo({url:"/pages/management/designermanagercuslist/designermanagercuslist?id="+t.id+"&name="+t.realname})},phoneclick:function(t){console.log("aa"),uni.makePhoneCall({phoneNumber:t})},backfee:function(){uni.switchTab({url:"/pages/management/management"})},deletefee:function(){uni.navigateTo({url:"/pages/management/useradminister/applylist/applylist"})}}};a.default=f},"99ab":function(t,a,e){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var n={name:"graceFullLoading",props:{graceFullLoading:{type:Boolean,default:!1},logoUrl:{type:String,default:""},text:{type:String,default:"Loading ..."}},methods:{stopFun:function(){return!1}}};a.default=n},"9fee":function(t,a,e){"use strict";e.r(a);var n=e("5be3"),i=e("6ab6");for(var o in i)"default"!==o&&function(t){e.d(a,t,(function(){return i[t]}))}(o);e("c258");var r,f=e("f0c5"),s=Object(f["a"])(i["default"],n["b"],n["c"],!1,null,"38501214",null,!1,n["a"],r);a["default"]=s.exports},a8d2:function(t,a,e){var n=e("e028");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var i=e("4f06").default;i("4d725be8",n,!0,{sourceMap:!1,shadowMode:!1})},c258:function(t,a,e){"use strict";var n=e("eed4"),i=e.n(n);i.a},e028:function(t,a,e){var n=e("24fb");a=n(!1),a.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */uni-page-body[data-v-2afa7dea]{background-color:#f5f5f5;height:100%}.fixed[data-v-2afa7dea]{width:100%;position:fixed;z-index:100}.xpadding[data-v-2afa7dea]{width:100%;height:%?20?%;background-color:#f5f5f5}.searchmargin[data-v-2afa7dea]{width:100%;background-color:#f5f5f5}.search[data-v-2afa7dea]{width:%?690?%;height:%?88?%;margin:0 %?30?%;border-radius:%?10?%;background-color:#fff;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.search .search_input[data-v-2afa7dea]{margin-left:%?25?%;height:%?88?%;width:%?645?%;border-radius:%?10?%;background-color:#fff;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.search .search_input .iconfont[data-v-2afa7dea]{font-size:%?45?%;color:#999}.search .search_input uni-input[data-v-2afa7dea]{width:%?620?%;height:%?88?%;color:#999;font-size:%?30?%;margin-left:%?18?%}.sort[data-v-2afa7dea]{z-index:100;width:100%;height:%?63?%;line-height:%?63?%;background-color:#f0f0f0;border-top:1px solid #ccc;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-justify-content:space-around;justify-content:space-around;-webkit-box-align:center;-webkit-align-items:center;align-items:center;font-size:%?30?%}.sort .sort_title[data-v-2afa7dea]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.sort .sort_title .iconfont[data-v-2afa7dea]{font-size:%?32?%}.sort .sort_title .sort_text[data-v-2afa7dea]{color:#666}.sort .sort_title .sort_icon[data-v-2afa7dea]{margin-bottom:%?4?%}.kong[data-v-2afa7dea]{height:%?128?%;z-index:99}.content[data-v-2afa7dea]{width:100%;background-color:#f5f5f5}.content .content_list[data-v-2afa7dea]{width:100%;background-color:#fff;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column}.content .content_list .content_top[data-v-2afa7dea]{width:100%;height:%?88?%;margin-top:%?36?%;display:-webkit-box;display:-webkit-flex;display:flex}.content .content_list .content_top .content_img[data-v-2afa7dea]{width:%?88?%;height:%?88?%;margin-left:%?30?%;border-radius:50%}.content .content_list .content_top .content_img uni-image[data-v-2afa7dea]{width:100%;height:100%;border-radius:50%}.content .content_list .content_top .content_top_text[data-v-2afa7dea]{height:%?88?%;line-height:%?88?%;display:-webkit-box;display:-webkit-flex;display:flex}.content .content_list .content_top .content_top_text .con_name[data-v-2afa7dea]{text-align:center;font-size:%?36?%;margin-right:%?14?%;margin-left:%?21?%}.content .content_list .content_top .content_top_text .line[data-v-2afa7dea]{width:%?2?%;height:%?30?%;background-color:#333;margin-top:%?32?%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:end;-webkit-align-items:flex-end;align-items:flex-end}.content .content_list .content_top .content_top_text .con_alias[data-v-2afa7dea]{color:#666;font-size:%?24?%;margin-left:%?15?%}.content .content_list .content_top .phone[data-v-2afa7dea]{margin-left:auto;margin-right:%?34?%;margin-top:%?10?%;width:%?66?%;height:%?66?%;border-radius:50%;background-color:#2468b1;color:#fff}.content .content_list .content_top .phone .iconfont[data-v-2afa7dea]{text-align:center;height:%?66?%;line-height:%?66?%;font-size:%?38?%}.content .content_list .content_footer[data-v-2afa7dea]{margin:%?10?% %?30?% %?10?% %?130?%;width:calc(100% - %?160?%);padding-bottom:%?16?%}.content .content_list .content_footer .content_footer_tag[data-v-2afa7dea]{display:inline-block;width:%?136?%;height:%?56?%;line-height:%?56?%;margin:0 %?10?% %?10?% 0}.content .content_list .content_footer .content_footer_tag .tags[data-v-2afa7dea]{text-align:center;border:1px solid #2468b1;border-radius:%?10?%;color:#2468b1;font-size:%?28?%}.add[data-v-2afa7dea]{position:fixed;width:100%;height:%?88?%;bottom:0;background-color:#1b82d1;color:#fff;line-height:%?60?%;text-align:center;line-height:%?88?%}.loading-text[data-v-2afa7dea]{width:100%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;align-items:center;height:%?60?%;color:#979797;font-size:%?24?%}.staff[data-v-2afa7dea]{margin-bottom:%?20?%;width:%?750?%;background-color:#fff}.staff .staff_one[data-v-2afa7dea]{width:%?690?%;margin:0 %?30?%;border-bottom:1px solid #f2f2f2}.staff .staff_one .staff_li[data-v-2afa7dea]{width:%?690?%;padding-top:%?20?%}.staff .staff_one .staff_li .title[data-v-2afa7dea]{font-size:%?30?%;color:#333;font-weight:700}.staff .staff_one .staff_li .staff_margin[data-v-2afa7dea]{width:%?690?%}.staff .staff_one .staff_li .staff_margin .staff_staff[data-v-2afa7dea]{margin-top:%?15?%;margin-bottom:%?15?%;width:%?138?%;height:%?132?%;display:inline-block;position:relative}.staff .staff_one .staff_li .staff_margin .staff_staff .image[data-v-2afa7dea]{width:%?92?%;height:%?92?%;margin-left:%?24?%;border-radius:50%;overflow:hidden}.staff .staff_one .staff_li .staff_margin .staff_staff .image uni-image[data-v-2afa7dea]{width:100%;height:100%}.staff .staff_one .staff_li .staff_margin .staff_staff .iamge_num[data-v-2afa7dea]{background:-webkit-linear-gradient(left,#2466ad,#2b7ed1);background:linear-gradient(90deg,#2466ad,#2b7ed1);width:%?33?%;height:%?33?%;line-height:%?33?%;text-align:center;border-radius:50%;overflow:hidden;position:absolute;top:%?-2?%;right:%?7?%;color:#fff;font-size:%?20?%;font-weight:400;text-align:center}.staff .staff_one .staff_li .staff_margin .staff_staff .imagetext[data-v-2afa7dea]{width:%?92?%;height:%?92?%;margin-left:%?17?%;background:-webkit-linear-gradient(left,#2466ad,#2b7ed1);background:linear-gradient(90deg,#2466ad,#2b7ed1);color:#fff;border-radius:50%;overflow:hidden;font-size:%?30?%;line-height:%?92?%;text-align:center}.staff .staff_one .staff_li .staff_margin .staff_staff .name[data-v-2afa7dea]{height:%?40?%;font-size:%?24?%;color:#666;text-align:center;margin-top:%?8?%;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}body.?%PAGE?%[data-v-2afa7dea]{background-color:#f5f5f5}',""]),t.exports=a},e9f8:function(t,a,e){"use strict";e.r(a);var n=e("78c4"),i=e.n(n);for(var o in n)"default"!==o&&function(t){e.d(a,t,(function(){return n[t]}))}(o);a["default"]=i.a},eaab:function(t,a,e){"use strict";e.r(a);var n=e("1ef9"),i=e("e9f8");for(var o in i)"default"!==o&&function(t){e.d(a,t,(function(){return i[t]}))}(o);e("5961");var r,f=e("f0c5"),s=Object(f["a"])(i["default"],n["b"],n["c"],!1,null,"2afa7dea",null,!1,n["a"],r);a["default"]=s.exports},eed4:function(t,a,e){var n=e("4f16");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var i=e("4f06").default;i("4ae281b9",n,!0,{sourceMap:!1,shadowMode:!1})}}]);