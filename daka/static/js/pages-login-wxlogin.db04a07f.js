(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-login-wxlogin"],{"061d":function(t,e,n){"use strict";n("4160"),n("159b"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i={name:"fa-navbar",props:{title:{type:String,default:"标题"},borderBottom:{type:Boolean,default:!0},backgroundColor:{type:Object,default:function(){return{background:"#374486"}}},titleColor:{type:String,default:"#fff"},backTextStyle:{type:Object,default:function(){return{color:"#fff"}}},backText:{type:String,default:"返回"},backIconColor:{type:String,default:"#fff"}},computed:{navbar:function(){return this.vuex_config.navbar?this.vuex_config.navbar:{}},tabbar:function(){return this.vuex_config.tabbar?this.vuex_config.tabbar:{isshow:!1,list:[]}},isBack:function(){var t=this,e=!0;return this.tabbar.list.forEach((function(n){var i=t.$util.getPath(n.path);i!=t.pageUrl&&i!="/"+t.pageUrl||(e=!1)})),e},isShow:function(){return!0}},created:function(){var t=getCurrentPages();this.pageUrl=t[t.length-1].route,this.pageNum=t.length},data:function(){return{pageUrl:"",pageNum:0}},methods:{goBack:function(){var t=this,e=getCurrentPages();this.pageUrl=e[e.length-1].route,this.pageNum=e.length;var n=!1,i=this.vuex_config.tabbar;i.list.forEach((function(e){var i=t.$util.getPath(e.path);i!=t.pageUrl&&i!="/"+t.pageUrl||(n=!0)})),n||(1==this.pageNum?this.$Router.push({path:"/pages/question/index"}):this.$Router.back(1))}}};e.default=i},2550:function(t,e,n){"use strict";n.r(e);var i=n("7ccf"),a=n.n(i);for(var r in i)"default"!==r&&function(t){n.d(e,t,(function(){return i[t]}))}(r);e["default"]=a.a},3071:function(t,e,n){var i=n("5a0e");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var a=n("4f06").default;a("3d5f8c9d",i,!0,{sourceMap:!1,shadowMode:!1})},3401:function(t,e,n){"use strict";var i=n("3071"),a=n.n(i);a.a},"3a9a":function(t,e,n){"use strict";var i=n("d480"),a=n.n(i);a.a},"3bbf":function(t,e,n){"use strict";var i=n("c563"),a=n.n(i);a.a},"4ceb":function(t,e,n){"use strict";var i=n("4ea4");n("99af"),n("4160"),n("c975"),n("4d63"),n("ac1f"),n("25f0"),n("466d"),n("5319"),n("1276"),n("159b"),Object.defineProperty(e,"__esModule",{value:!0}),e.login=e.tagClick=e.styleRest=e.swipers=e.attention=e.vote=e.collection=e.others=void 0,n("96cf");var a=i(n("1da1")),r={methods:{navigate:function(t){if(t.href&&-1==t.href.indexOf("http")){var e=t.href.match(new RegExp("(question|article|tag|u)|(\\d+)","g"));if(2==e.length)return void this.$Router.push({path:"/pages/"+("u"==e[0]?"experts":e[0])+"/detail",query:{id:e[1]}});if(e=t.href.match(new RegExp("zone|((?<=zone/).*?(?=.htm))","g")),2==e.length)return void this.$Router.push({path:"/pages/zone/detail",query:{diyname:e[1]}});window.open(this.vuex_config.upload.cdnurl+t.href)}},moreClick:function(){this.$set(this.moreList[1],"text",this.detail.collected?"已收藏":"收藏"),this.is_more=!0},cancel:function(){this.is_more=!1}}};e.others=r;var o={methods:{goCollectionCreate:function(){var t=(0,a.default)(regeneratorRuntime.mark((function t(e,n){var i;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.$api.goCollectionCreate({id:e.id,type:n});case 2:if(i=t.sent,this.$u.toast(i.msg),i.code){t.next=6;break}return t.abrupt("return");case 6:"article"!=n&&"question"!=n&&"answer"!=n||(e.collected=!0);case 7:case"end":return t.stop()}}),t,this)})));function e(e,n){return t.apply(this,arguments)}return e}(),goCollectionDelete:function(){var t=(0,a.default)(regeneratorRuntime.mark((function t(e,n){var i;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.$api.goCollectionDelete({id:e.id,type:n});case 2:if(i=t.sent,this.$u.toast(i.msg),i.code){t.next=6;break}return t.abrupt("return");case 6:"article"!=n&&"question"!=n&&"answer"!=n||(e.collected=!1);case 7:case"end":return t.stop()}}),t,this)})));function e(e,n){return t.apply(this,arguments)}return e}()}};e.collection=o;var u={methods:{goVoteCreate:function(){var t=(0,a.default)(regeneratorRuntime.mark((function t(e,n){var i,a,r=arguments;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return i=r.length>2&&void 0!==r[2]?r[2]:"up",t.next=3,this.$api.goVoteCreate({id:e.id,type:n,value:i});case 3:if(a=t.sent,this.$u.toast(a.msg),a.code){t.next=7;break}return t.abrupt("return");case 7:e.vote=i,e.voteup=a.data.voteup;case 9:case"end":return t.stop()}}),t,this)})));function e(e,n){return t.apply(this,arguments)}return e}(),goVoteDelete:function(){var t=(0,a.default)(regeneratorRuntime.mark((function t(e,n){var i,a,r=arguments;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return i=r.length>2&&void 0!==r[2]?r[2]:"up",t.next=3,this.$api.goVoteDelete({id:e.id,type:n,value:i});case 3:if(a=t.sent,this.$u.toast(a.msg),a.code){t.next=7;break}return t.abrupt("return");case 7:e.voteup=a.data.voteup,e.vote="";case 9:case"end":return t.stop()}}),t,this)})));function e(e,n){return t.apply(this,arguments)}return e}()}};e.vote=u;var s={methods:{goAttentionCreate:function(){var t=(0,a.default)(regeneratorRuntime.mark((function t(e,n,i){var a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.$api.goAttentionCreate({id:e.id,type:n});case 2:if(a=t.sent,this.$u.toast(a.msg),a.code){t.next=6;break}return t.abrupt("return");case 6:e.followed=!0,"function"==typeof i&&i();case 9:case"end":return t.stop()}}),t,this)})));function e(e,n,i){return t.apply(this,arguments)}return e}(),goAttentionDelete:function(){var t=(0,a.default)(regeneratorRuntime.mark((function t(e,n){var i,a,r=arguments;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return i=r.length>2&&void 0!==r[2]?r[2]:function(){},t.next=3,this.$api.goAttentionDelete({id:e.id,type:n});case 3:if(a=t.sent,this.$u.toast(a.msg),a.code){t.next=7;break}return t.abrupt("return");case 7:e.followed=!1,"function"==typeof i&&i();case 10:case"end":return t.stop()}}),t,this)})));function e(e,n){return t.apply(this,arguments)}return e}()}};e.attention=s;var c={methods:{clickSwiper:function(t){var e=this.vuex_config.blockList[t].url;if("/"!=e&&e){if(-1!=e.indexOf("http"))return this.$u.vuex("vuex_web",this.vuex_config.blockList[t]),void this.$Router.push("/pages/webview/webview");"p"==e.substr(0,1)&&(e="/"+e),this.$u.route({url:e})}}}};e.swipers=c;var l={methods:{getStyle:function(t){var e={},n={},i=t.split("|");return i.forEach((function(t){if("b"==t&&(n.fontWeight="bold"),"u"==t&&(e.textDecoration="underline"),-1!=t.indexOf("#")){var i=t.split(",");n.backgroundImage="linear-gradient(90deg,".concat(i[0]," 0%, ").concat(i[1]?i[1]:i[0]," 100%)"),n.textFillColor="transparent"}})),[e,n]},setStyle:function(t){if(t.style){var e=this.getStyle(t.style);t.styleArray=e[1],t.underline=e[0]}else t.styleArray={},t.underline={}}}};e.styleRest=l;var d={methods:{navigateTag:function(t,e){this.$u.route("/pages/tag/detail?id=".concat(t,"&type=").concat(e))}}};e.tagClick=d;var f={methods:{success:function(){var t=(0,a.default)(regeneratorRuntime.mark((function t(e){var n,i,a=arguments;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return a.length>1&&void 0!==a[1]?a[1]:1,t.next=3,this.$api.getUserIndex({id:e});case 3:if(n=t.sent,n.code){t.next=7;break}return this.$u.toast(n.msg),t.abrupt("return");case 7:if(this.$u.vuex("vuex_user",n.data.user),this.$u.vuex("vuex_isAdmin",n.data.isAdmin),i=uni.getStorageSync("last_page"),!i){t.next=13;break}return uni.reLaunch({url:i.path+this.$u.queryParams(i.query,!0,"indices"),complete:function(t){}}),t.abrupt("return");case 13:uni.reLaunch({url:"/pages/index/index"});case 14:case"end":return t.stop()}}),t,this)})));function e(e){return t.apply(this,arguments)}return e}(),goToAuth:function(){var t=this;return(0,a.default)(regeneratorRuntime.mark((function e(){var n,i;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return n="",n=""!=window.location.hash?window.location.origin+window.location.pathname+"?hashpath=/pages/login/auth":window.location.origin+window.location.pathname.replace(/pages.*/,"pages/login/auth"),e.next=5,t.$api.getAuthUrl({platform:"wechat",url:n});case 5:if(i=e.sent,i.code){e.next=9;break}return t.$u.toast(i.msg),e.abrupt("return");case 9:window.location.href=i.data;case 10:case"end":return e.stop()}}),e)})))()}}};e.login=f},"4cfc":function(t,e,n){"use strict";n.r(e);var i=n("abc1"),a=n("537c");for(var r in a)"default"!==r&&function(t){n.d(e,t,(function(){return a[t]}))}(r);var o,u=n("f0c5"),s=Object(u["a"])(a["default"],i["b"],i["c"],!1,null,"62aeaabe",null,!1,i["a"],o);e["default"]=s.exports},"51ff":function(t,e,n){"use strict";n.r(e);var i=n("a322"),a=n.n(i);for(var r in i)"default"!==r&&function(t){n.d(e,t,(function(){return i[t]}))}(r);e["default"]=a.a},"537c":function(t,e,n){"use strict";n.r(e);var i=n("061d"),a=n.n(i);for(var r in i)"default"!==r&&function(t){n.d(e,t,(function(){return i[t]}))}(r);e["default"]=a.a},"5a0e":function(t,e,n){var i=n("24fb");e=i(!1),e.push([t.i,'@charset "UTF-8";\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 项目场景相关 */uni-view[data-v-29e0ea8a]{box-sizing:border-box}.u-tips[data-v-29e0ea8a]{width:100%;position:fixed;z-index:1;padding:%?20?% %?30?%;color:#fff;font-size:%?28?%;left:0;right:0;\ndisplay:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;\n-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;opacity:0;-webkit-transform:translateY(-100%);transform:translateY(-100%);-webkit-transition:all .35s linear;transition:all .35s linear}.u-tip-show[data-v-29e0ea8a]{-webkit-transform:translateY(0);transform:translateY(0);opacity:1;z-index:99}.u-primary[data-v-29e0ea8a]{background:#2979ff}.u-success[data-v-29e0ea8a]{background:#19be6b}.u-warning[data-v-29e0ea8a]{background:#f90}.u-error[data-v-29e0ea8a]{background:#fa3534}.u-info[data-v-29e0ea8a]{background:#909399}',""]),t.exports=e},"7ccf":function(t,e,n){"use strict";var i=n("4ea4");n("d3b7"),n("e25e"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,n("96cf");var a=i(n("1da1")),r=n("4ceb"),o={mixins:[r.login],data:function(){return{statusBarHeight:uni.getSystemInfoSync().statusBarHeight,navbarHeight:44,index:1}},onLoad:function(t){this.index=parseInt(t.index)||2},methods:{handleRefuse:function(){var t=this;this.$u.toast("未授权"),setTimeout((function(){t.$Router.back(1)}),1e3)},getCode:function(){var t=(0,a.default)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.abrupt("return",new Promise((function(t,e){uni.login({success:function(n){n.code?t(n.code):e("未取得code")},fail:function(t){e("用户授权失败wx.login")}})})));case 1:case"end":return t.stop()}}),t)})));function e(){return t.apply(this,arguments)}return e}(),toLogin:function(){var t=(0,a.default)(regeneratorRuntime.mark((function t(e){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.$api.gowxLogin(e);case 2:if(n=t.sent,n.code){t.next=6;break}return this.$u.toast(n.msg),t.abrupt("return");case 6:if(!n.data.user){t.next=10;break}return this.$u.vuex("vuex_token",n.data.user.token),this.success(n.data.user.id,this.index),t.abrupt("return");case 10:this.$u.vuex("vuex_third",n.data.third),this.$Router.push({path:"/pages/login/register",query:{bind:"bind"}});case 12:case"end":return t.stop()}}),t,this)})));function e(e){return t.apply(this,arguments)}return e}()}};e.default=o},"7eca":function(t,e,n){"use strict";n.r(e);var i=n("87fe"),a=n("51ff");for(var r in a)"default"!==r&&function(t){n.d(e,t,(function(){return a[t]}))}(r);n("3bbf");var o,u=n("f0c5"),s=Object(u["a"])(a["default"],i["b"],i["c"],!1,null,"1d7f90d0",null,!1,i["a"],o);e["default"]=s.exports},"87fe":function(t,e,n){"use strict";n.d(e,"b",(function(){return a})),n.d(e,"c",(function(){return r})),n.d(e,"a",(function(){return i}));var i={uIcon:n("2e9b").default},a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{},[n("v-uni-view",{staticClass:"u-navbar",class:{"u-navbar-fixed":t.isFixed,"u-border-bottom":t.borderBottom},style:[t.navbarStyle]},[n("v-uni-view",{staticClass:"u-status-bar",style:{height:t.statusBarHeight+"px"}}),n("v-uni-view",{staticClass:"u-navbar-inner",style:[t.navbarInnerStyle]},[t.isBack?n("v-uni-view",{staticClass:"u-back-wrap",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.goBack.apply(void 0,arguments)}}},[n("v-uni-view",{staticClass:"u-icon-wrap"},[n("u-icon",{attrs:{name:t.backIconName,color:t.backIconColor,size:t.backIconSize}})],1),t.backText?n("v-uni-view",{staticClass:"u-icon-wrap u-back-text u-line-1",style:[t.backTextStyle]},[t._v(t._s(t.backText))]):t._e()],1):t._e(),t.title?n("v-uni-view",{staticClass:"u-navbar-content-title",style:[t.titleStyle]},[n("v-uni-view",{staticClass:"u-title u-line-1",style:{color:t.titleColor,fontSize:t.titleSize+"rpx",fontWeight:t.titleBold?"bold":"normal"}},[t._v(t._s(t.title))])],1):t._e(),n("v-uni-view",{staticClass:"u-slot-content"},[t._t("default")],2),n("v-uni-view",{staticClass:"u-slot-right"},[t._t("right")],2)],1)],1),t.isFixed&&!t.immersive?n("v-uni-view",{staticClass:"u-navbar-placeholder",style:{width:"100%",height:Number(t.navbarHeight)+t.statusBarHeight+"px"}}):t._e()],1)},r=[]},"8ba1":function(t,e,n){"use strict";var i;n.d(e,"b",(function(){return a})),n.d(e,"c",(function(){return r})),n.d(e,"a",(function(){return i}));var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticClass:"u-tips",class:["u-"+t.type,t.isShow?"u-tip-show":""],style:{top:t.navbarHeight+"px",zIndex:t.uZIndex}},[t._v(t._s(t.title))])},r=[]},"94cd":function(t,e,n){var i=n("24fb");e=i(!1),e.push([t.i,'@charset "UTF-8";\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 项目场景相关 */.u-navbar[data-v-1d7f90d0]{width:100%}.u-navbar-fixed[data-v-1d7f90d0]{position:fixed;left:0;right:0;top:0;z-index:991}.u-status-bar[data-v-1d7f90d0]{width:100%}.u-navbar-inner[data-v-1d7f90d0]{\ndisplay:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;\n-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;position:relative;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.u-back-wrap[data-v-1d7f90d0]{\ndisplay:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;\n-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-flex:1;-webkit-flex:1;flex:1;-webkit-box-flex:0;-webkit-flex-grow:0;flex-grow:0;padding:%?14?% %?14?% %?14?% %?24?%}.u-back-text[data-v-1d7f90d0]{padding-left:%?4?%;font-size:%?30?%}.u-navbar-content-title[data-v-1d7f90d0]{\ndisplay:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;\n-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-flex:1;-webkit-flex:1;flex:1;position:absolute;left:0;right:0;height:%?60?%;text-align:center;-webkit-flex-shrink:0;flex-shrink:0}.u-navbar-centent-slot[data-v-1d7f90d0]{-webkit-box-flex:1;-webkit-flex:1;flex:1}.u-title[data-v-1d7f90d0]{line-height:%?60?%;font-size:%?32?%;-webkit-box-flex:1;-webkit-flex:1;flex:1}.u-navbar-right[data-v-1d7f90d0]{-webkit-box-flex:1;-webkit-flex:1;flex:1;\ndisplay:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;\n-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:end;-webkit-justify-content:flex-end;justify-content:flex-end}.u-slot-content[data-v-1d7f90d0]{-webkit-box-flex:1;-webkit-flex:1;flex:1;\ndisplay:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;\n-webkit-box-align:center;-webkit-align-items:center;align-items:center}',""]),t.exports=e},a322:function(t,e,n){"use strict";n("a9e3"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=uni.getSystemInfoSync(),a={},r={name:"u-navbar",props:{height:{type:[String,Number],default:""},backIconColor:{type:String,default:"#606266"},backIconName:{type:String,default:"nav-back"},backIconSize:{type:[String,Number],default:"44"},backText:{type:String,default:""},backTextStyle:{type:Object,default:function(){return{color:"#606266"}}},title:{type:String,default:""},titleWidth:{type:[String,Number],default:"250"},titleColor:{type:String,default:"#606266"},titleBold:{type:Boolean,default:!1},titleSize:{type:[String,Number],default:32},isBack:{type:[Boolean,String],default:!0},background:{type:Object,default:function(){return{background:"#ffffff"}}},isFixed:{type:Boolean,default:!0},immersive:{type:Boolean,default:!1},borderBottom:{type:Boolean,default:!0},zIndex:{type:[String,Number],default:""},customBack:{type:Function,default:null}},data:function(){return{menuButtonInfo:a,statusBarHeight:i.statusBarHeight}},computed:{navbarInnerStyle:function(){var t={};return t.height=this.navbarHeight+"px",t},navbarStyle:function(){var t={};return t.zIndex=this.zIndex?this.zIndex:this.$u.zIndex.navbar,Object.assign(t,this.background),t},titleStyle:function(){var t={};return t.left=(i.windowWidth-uni.upx2px(this.titleWidth))/2+"px",t.right=(i.windowWidth-uni.upx2px(this.titleWidth))/2+"px",t.width=uni.upx2px(this.titleWidth)+"px",t},navbarHeight:function(){return this.height?this.height:44}},created:function(){},methods:{goBack:function(){"function"===typeof this.customBack?this.customBack.bind(this.$u.$parent.call(this))():uni.navigateBack()}}};e.default=r},a689:function(t,e,n){var i=n("24fb");e=i(!1),e.push([t.i,'@charset "UTF-8";\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 项目场景相关 */.content[data-v-3e161db0]{background-color:#fff;height:100vh;padding:%?100?% %?60?% 0}.login-item[data-v-3e161db0]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;padding-bottom:%?40?%;border-bottom:%?1?% solid #ddd}.logo[data-v-3e161db0]{display:block;width:%?180?%;height:%?180?%;border-radius:50%;overflow:hidden;border:2px solid #fff;box-shadow:3px 3px 10px rgba(0,0,0,.2)}.login-tip[data-v-3e161db0]{padding:%?60?% 0}.login-tip-big[data-v-3e161db0]{font-size:%?28?%;line-height:%?80?%}.login-tip-small[data-v-3e161db0]{font-size:12px;color:#9e9e9e}',""]),t.exports=e},abc1:function(t,e,n){"use strict";n.d(e,"b",(function(){return a})),n.d(e,"c",(function(){return r})),n.d(e,"a",(function(){return i}));var i={uNavbar:n("7eca").default},a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.navbar.isshow?n("v-uni-view",[n("u-navbar",{attrs:{"is-back":t.isBack,"back-icon-color":t.backIconColor,"back-text":t.backText,"back-text-style":t.backTextStyle,title:t.isShow?t.title:"","title-color":t.titleColor,"title-size":t.navbar.titleSize,background:t.backgroundColor,"border-bottom":t.borderBottom,"custom-back":t.goBack,"title-width":400}})],1):t._e()},r=[]},afee:function(t,e,n){"use strict";n.r(e);var i=n("e9d4"),a=n("2550");for(var r in a)"default"!==r&&function(t){n.d(e,t,(function(){return a[t]}))}(r);n("3a9a");var o,u=n("f0c5"),s=Object(u["a"])(a["default"],i["b"],i["c"],!1,null,"3e161db0",null,!1,i["a"],o);e["default"]=s.exports},c563:function(t,e,n){var i=n("94cd");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var a=n("4f06").default;a("51bad9cb",i,!0,{sourceMap:!1,shadowMode:!1})},cb6a:function(t,e,n){"use strict";n("a9e3"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i={name:"u-top-tips",props:{navbarHeight:{type:[Number,String],default:44},zIndex:{type:[Number,String],default:""}},data:function(){return{timer:null,isShow:!1,title:"",type:"primary",duration:2e3}},computed:{uZIndex:function(){return this.zIndex?this.zIndex:this.$u.zIndex.topTips}},methods:{show:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};clearTimeout(this.timer),e.duration&&(this.duration=e.duration),e.type&&(this.type=e.type),this.title=e.title,this.isShow=!0,this.timer=setTimeout((function(){t.isShow=!1,clearTimeout(t.timer),t.timer=null}),this.duration)}}};e.default=i},d480:function(t,e,n){var i=n("a689");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var a=n("4f06").default;a("16bfb18a",i,!0,{sourceMap:!1,shadowMode:!1})},de58:function(t,e,n){"use strict";n.r(e);var i=n("8ba1"),a=n("e00d");for(var r in a)"default"!==r&&function(t){n.d(e,t,(function(){return a[t]}))}(r);n("3401");var o,u=n("f0c5"),s=Object(u["a"])(a["default"],i["b"],i["c"],!1,null,"29e0ea8a",null,!1,i["a"],o);e["default"]=s.exports},e00d:function(t,e,n){"use strict";n.r(e);var i=n("cb6a"),a=n.n(i);for(var r in i)"default"!==r&&function(t){n.d(e,t,(function(){return i[t]}))}(r);e["default"]=a.a},e9d4:function(t,e,n){"use strict";n.d(e,"b",(function(){return a})),n.d(e,"c",(function(){return r})),n.d(e,"a",(function(){return i}));var i={faNavbar:n("4cfc").default,uTopTips:n("de58").default,faTabbar:n("1a3a").default},a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{},[n("fa-navbar",{attrs:{title:"授权登录"}}),n("v-uni-view",{staticClass:"content"},[n("v-uni-view",[n("v-uni-view",{staticClass:"login-item"},[n("v-uni-view",{staticClass:"logo"},[n("v-uni-open-data",{attrs:{type:"userAvatarUrl"}})],1)],1),n("v-uni-view",{staticClass:"login-tip"},[n("v-uni-view",[t._v("申请获取以下权限")]),n("v-uni-view",[t._v("获得你的公开信息 （昵称、头像等）")])],1)],1),n("v-uni-view",{staticClass:"u-flex u-row-between"}),n("u-top-tips",{ref:"uTips",attrs:{"navbar-height":t.statusBarHeight+t.navbarHeight}})],1),n("fa-tabbar")],1)},r=[]}}]);