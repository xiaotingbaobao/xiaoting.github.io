(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-management-channel-channelpersonlist-channelpersonlist"],{"16be":function(t,e,n){"use strict";var a=n("a6a2"),i=n.n(a);i.a},"17ba":function(t,e,n){"use strict";var a=n("ee27");n("ac1f"),n("1276"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i,c=a(n("9c7e")),o={components:{pageHeadBack:c.default},data:function(){return{channelList:[],channelid:"",titlehead:"",userinfo:{},ismanager:!1}},onShow:function(){i.getuser((function(t){console.log(t),i.userinfo=t.data,console.log(i.userinfo),i.iscompany=i.userinfo.userinfo.role.split("|")[1],i.checkPower(i.userinfo,"api/channel/update")?i.$set(i,"ismanager",!0):i.$set(i,"ismanager",!1),i.getchannelpersonlist()}))},onLoad:function(t){i=this,console.log(t),i.channelid=t.id,i.channelnickname=t.channelname,i.titlehead=i.channelnickname+"渠道联系人"},methods:{backfee:function(){uni.navigateBack({})},getchannelpersonlist:function(){i.post("api/channel/channels",{company_id:i.iscompany,channel_id:i.channelid},(function(t){if(1===t.code){console.log(t.data);var e=[];console.log(i.checkEmpty(t.data)),i.checkEmpty(t.data)||i.each(t.data,(function(t,n){i.checkEmpty(n.contacts)||i.each(n.contacts,(function(t,n){e.push(n)}))})),i.$set(i,"channelList",e),console.log(i.channelList),i.each(i.channelList,(function(t,e){""==e.id&&(i.$set(i,"channelList",[]),i.$forceUpdate())}))}else{var n=t.msg.split("(",2);i.echo(n[0])}}))},toAddflow:function(){i.checkPower(i.userinfo,"api/channel/add_contact")&&uni.navigateTo({url:"/pages/management/channel/addchannelperson/addchannelperson?id="+i.channelid})},tochangechannel:function(t){i.checkPower(i.userinfo,"api/channel/update_contact")&&uni.setStorage({key:"tmp_changechannelp",data:t,success:function(){uni.navigateTo({url:"/pages/management/channel/channelpersonlist/changechannelperson/changechannelperson?channelid="+i.channelid+"&companyid="+i.iscompany})}})}}};e.default=o},"2d8e":function(t,e,n){var a=n("24fb");e=a(!1),e.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.topmargin .status[data-v-b6800cea]{width:100%;height:0;position:fixed;background-image:-webkit-linear-gradient(left,#2466ad,#2b7ed1);background-image:linear-gradient(90deg,#2466ad,#2b7ed1);z-index:10;top:0}.topmargin .nav-bar[data-v-b6800cea]{width:100%;height:%?88?%;line-height:%?88?%;background-image:-webkit-linear-gradient(left,#2466ad,#2b7ed1);background-image:linear-gradient(90deg,#2466ad,#2b7ed1);display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;position:fixed;overflow:hidden;top:0;z-index:10\r\n  /* .back {\r\n\t\t\tmargin: 0 2px;\r\n\t\t\twidth: 27px;\r\n\t\t\theight: 30px;\r\n\t\t\tflex-shrink: 0;\r\n\t\t}\r\n\t\t.middle {\r\n\t\t\tcolor: white;\r\n\t\t\twidth: 80%;\r\n\t\t\theight: 44px;\r\n\t\t\tline-height: 44px;\r\n\t\t\tpadding: 0 10%;\r\n\t\t\tfont-size: 16px;\r\n\t\t\ttext-align: center;\r\n\t\t}\r\n\t\t.icon-btn {\r\n\t\t\tmargin: 0 2px;\r\n\t\t\twidth: 27px;\r\n\t\t\theight: 30px;\r\n\t\t\tflex-shrink: 0;\r\n\t\t\tdisplay: flex;\r\n\t\t\tjustify-content: flex-end;\r\n\t\t\t.iconfont {\r\n\t\t\t\tcolor: white;\r\n\t\t\t\twidth: 27px;\r\n\t\t\t\theight: 27px;\r\n\t\t\t\tdisplay: flex;\r\n\t\t\t\tjustify-content: center;\r\n\t\t\t\talign-items: center;\r\n\t\t\t\tfont-size: 21px;\r\n\t\t\t}\r\n\t\t} */}.topmargin .nav-bar .topimg[data-v-b6800cea]{width:%?45?%;height:%?45?%;margin-left:%?33?%;overflow:hidden}.topmargin .nav-bar .topimg uni-image[data-v-b6800cea]{width:100%;height:100%}.topmargin .nav-bar .back[data-v-b6800cea]{height:%?88?%;position:absolute;left:%?20?%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.topmargin .nav-bar .back .iconfont[data-v-b6800cea]{font-size:%?40?%;color:#fff;line-height:%?90?%}.topmargin .nav-bar .back .text[data-v-b6800cea]{font-size:%?32?%;color:#fff}.topmargin .nav-bar .avatar[data-v-b6800cea]{height:%?45?%;line-height:%?45?%;border-radius:50%;position:absolute;right:%?30?%;top:%?22?%}.topmargin .nav-bar .avatar .avatar_text[data-v-b6800cea]{font-size:%?32?%;color:#fff}.topmargin .nav-bar .avatar .tipnum[data-v-b6800cea]{position:absolute;right:%?-2?%;top:%?-2?%;font-size:%?22?%;color:#fff;width:%?22?%;height:%?22?%;line-height:%?22?%;border-radius:50%;text-align:center;background-color:#ef261e}.topmargin .nav-bar .avatar .cloak[data-v-b6800cea]{display:block}.topmargin .nav-bar .avatar uni-image[data-v-b6800cea]{display:block;width:%?45?%;height:%?45?%}.topmargin .nav-bar .avatar .iconfont[data-v-b6800cea]{font-size:%?42?%;color:#fff}.topmargin .nav-bar .title[data-v-b6800cea]{width:100%;height:%?88?%;line-height:%?88?%;font-size:%?38?%;color:#fff;text-align:center;background-image:-webkit-linear-gradient(left,#2466ad,#2b7ed1);background-image:linear-gradient(90deg,#2466ad,#2b7ed1)}.topmargin .nav-bar .stt[data-v-b6800cea]{line-height:%?110?%;font-size:%?30?%;color:#fff;position:absolute;right:%?30?%;top:0}.topmargin .place[data-v-b6800cea]{height:%?88?%}uni-page-body[data-v-b6800cea]{background-color:#fafafa}.channel[data-v-b6800cea]{width:100%}.channel .items[data-v-b6800cea]{width:calc(100% - %?60?%);margin:0 %?30?%;background-color:#fff;border-radius:%?10?%;margin-bottom:%?20?%}.channel .items .items_top[data-v-b6800cea]{width:calc(100% - %?60?%);margin:0 %?30?%;height:%?87?%;border-bottom:1px solid #f5f5f5;-webkit-box-align:center;-webkit-align-items:center;align-items:center;display:-webkit-box;display:-webkit-flex;display:flex}.channel .items .items_top .left_title[data-v-b6800cea]{width:%?110?%;color:#333;font-weight:700;font-size:%?30?%;height:%?87?%;line-height:%?87?%}.channel .items .items_top .right_input[data-v-b6800cea]{width:%?520?%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.channel .items .items_top .right_input .input[data-v-b6800cea]{width:%?470?%;color:#666;font-size:%?30?%}.channel .items .items_top .right_input .inputadd[data-v-b6800cea]{width:%?300?%;color:#666;font-size:%?30?%}.channel .items .items_top .right_input .iconfont[data-v-b6800cea]{color:#2468b1;font-size:%?50?%}.channel .items .items_top .right_input .right[data-v-b6800cea]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.channel .items .items_top .right_input .right .iconfont[data-v-b6800cea]{color:#2468b1;font-size:%?32?%;margin-right:%?6?%}.channel .items .items_top .right_input .right .text[data-v-b6800cea]{color:#2468b1;font-size:%?24?%}.channel .items .items_center[data-v-b6800cea]{width:calc(100% - %?60?%);margin:0 %?30?%;height:%?87?%;border-bottom:1px solid #f5f5f5;-webkit-box-align:center;-webkit-align-items:center;align-items:center;display:-webkit-box;display:-webkit-flex;display:flex}.channel .items .items_center .title[data-v-b6800cea]{width:%?110?%;color:#333;font-weight:700;font-size:%?30?%;height:%?87?%;line-height:%?87?%}.channel .items .items_center .input[data-v-b6800cea]{width:%?520?%;color:#666;font-size:%?30?%}.channel .items .items_center .right[data-v-b6800cea]{color:#2468b1}.channel .items .items_remarks[data-v-b6800cea]{width:calc(100% - %?60?%);margin:0 %?30?%}.channel .items .items_remarks .title[data-v-b6800cea]{width:100%;color:#333;margin:%?26?% 0 %?12?% 0;font-size:%?30?%;font-weight:700}.channel .items .items_remarks .input[data-v-b6800cea]{background-color:#fafafa;width:100%;min-height:%?77?%;border-radius:%?10?%}.channel .items .items_remarks .input uni-textarea[data-v-b6800cea]{width:100%}.fixed_add[data-v-b6800cea]{-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;line-height:%?88?%;background:-webkit-linear-gradient(left,#2466ad,#2b7ed1);background:linear-gradient(90deg,#2466ad,#2b7ed1);position:fixed;bottom:0;width:100%}.fixed_add .iconfont[data-v-b6800cea]{font-size:%?36?%;color:#fff;margin-right:%?12?%}.fixed_add .text[data-v-b6800cea]{font-size:%?36?%;color:#fff}body.?%PAGE?%[data-v-b6800cea]{background-color:#fafafa}',""]),t.exports=e},"4fdc":function(t,e,n){"use strict";var a,i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",[n("v-uni-view",{staticClass:"topmargin"},[n("v-uni-view",{staticClass:"status",staticStyle:{"{background":"#fff}"}}),n("v-uni-view",{staticClass:"nav-bar"},[n("v-uni-view",{staticClass:"back",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.backfee.apply(void 0,arguments)}}},[n("v-uni-view",{staticClass:"iconfont iconleft"}),n("v-uni-view",{staticClass:"text"},[t._v("返回")])],1),t.ismanager?n("v-uni-view",{staticClass:"avatar",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.toAddflow.apply(void 0,arguments)}}},[n("v-uni-view",{staticClass:"iconfont icontianjia1"})],1):t._e(),n("v-uni-text",{staticClass:"title"},[t._v(t._s(t.titlehead))])],1),n("v-uni-view",{staticClass:"place",staticStyle:{"{height":"44upx"}})],1),n("v-uni-view",{staticClass:"xpadding"}),0==t.channelList.length?n("v-uni-view",{staticClass:"xlistmargin"},[t._v("该渠道暂无渠道负责人~")]):t._e(),t.channelList.length>0?n("v-uni-view",{staticClass:"channel"},t._l(t.channelList,(function(e,a){return n("v-uni-view",{key:a,staticClass:"items"},[n("v-uni-view",{staticClass:"items_top"},[n("v-uni-view",{staticClass:"left_title"},[t._v("姓名：")]),n("v-uni-view",{staticClass:"right_input"},[n("v-uni-view",{staticClass:"input"},[t._v(t._s(e.name))]),t.ismanager?n("v-uni-view",{staticClass:"iconfont iconsign",on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.tochangechannel(e)}}}):t._e()],1)],1),n("v-uni-view",{staticClass:"items_center"},[n("v-uni-view",{staticClass:"title"},[t._v("电话：")]),n("v-uni-view",{staticClass:"input"},[t._v(t._s(e.mobile))]),n("v-uni-view",{staticClass:"right"},[n("v-uni-view",{staticClass:"iconfont icondianhua-copy",staticStyle:{"font-size":"50upx"},on:{click:function(n){n.stopPropagation(),arguments[0]=n=t.$handleEvent(n),t.phoneclick(e.mobile)}}})],1)],1),n("v-uni-view",{staticClass:"xpadding"})],1)})),1):t._e()],1)},c=[];n.d(e,"b",(function(){return i})),n.d(e,"c",(function(){return c})),n.d(e,"a",(function(){return a}))},8588:function(t,e,n){"use strict";n.r(e);var a=n("17ba"),i=n.n(a);for(var c in a)"default"!==c&&function(t){n.d(e,t,(function(){return a[t]}))}(c);e["default"]=i.a},a6a2:function(t,e,n){var a=n("2d8e");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var i=n("4f06").default;i("710945a6",a,!0,{sourceMap:!1,shadowMode:!1})},c837:function(t,e,n){"use strict";n.r(e);var a=n("4fdc"),i=n("8588");for(var c in i)"default"!==c&&function(t){n.d(e,t,(function(){return i[t]}))}(c);n("16be");var o,r=n("f0c5"),s=Object(r["a"])(i["default"],a["b"],a["c"],!1,null,"b6800cea",null,!1,a["a"],o);e["default"]=s.exports}}]);