(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-login-login"],{"19d7":function(e,t,n){"use strict";n.r(t);var r=n("a96a"),i=n("5469");for(var a in i)"default"!==a&&function(e){n.d(t,e,(function(){return i[e]}))}(a);n("7480");var o,s=n("f0c5"),c=Object(s["a"])(i["default"],r["b"],r["c"],!1,null,"326f4b11",null,!1,r["a"],o);t["default"]=c.exports},"2dea":function(e,t,n){var r=n("5a22");"string"===typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);var i=n("4f06").default;i("6af02bce",r,!0,{sourceMap:!1,shadowMode:!1})},"4ceb":function(e,t,n){"use strict";var r=n("4ea4");n("99af"),n("4160"),n("c975"),n("4d63"),n("ac1f"),n("25f0"),n("466d"),n("5319"),n("1276"),n("159b"),Object.defineProperty(t,"__esModule",{value:!0}),t.login=t.tagClick=t.styleRest=t.swipers=t.attention=t.vote=t.collection=t.others=void 0,n("96cf");var i=r(n("1da1")),a={methods:{navigate:function(e){if(e.href&&-1==e.href.indexOf("http")){var t=e.href.match(new RegExp("(question|article|tag|u)|(\\d+)","g"));if(2==t.length)return void this.$Router.push({path:"/pages/"+("u"==t[0]?"experts":t[0])+"/detail",query:{id:t[1]}});if(t=e.href.match(new RegExp("zone|((?<=zone/).*?(?=.htm))","g")),2==t.length)return void this.$Router.push({path:"/pages/zone/detail",query:{diyname:t[1]}});window.open(this.vuex_config.upload.cdnurl+e.href)}},moreClick:function(){this.$set(this.moreList[1],"text",this.detail.collected?"已收藏":"收藏"),this.is_more=!0},cancel:function(){this.is_more=!1}}};t.others=a;var o={methods:{goCollectionCreate:function(){var e=(0,i.default)(regeneratorRuntime.mark((function e(t,n){var r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,this.$api.goCollectionCreate({id:t.id,type:n});case 2:if(r=e.sent,this.$u.toast(r.msg),r.code){e.next=6;break}return e.abrupt("return");case 6:"article"!=n&&"question"!=n&&"answer"!=n||(t.collected=!0);case 7:case"end":return e.stop()}}),e,this)})));function t(t,n){return e.apply(this,arguments)}return t}(),goCollectionDelete:function(){var e=(0,i.default)(regeneratorRuntime.mark((function e(t,n){var r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,this.$api.goCollectionDelete({id:t.id,type:n});case 2:if(r=e.sent,this.$u.toast(r.msg),r.code){e.next=6;break}return e.abrupt("return");case 6:"article"!=n&&"question"!=n&&"answer"!=n||(t.collected=!1);case 7:case"end":return e.stop()}}),e,this)})));function t(t,n){return e.apply(this,arguments)}return t}()}};t.collection=o;var s={methods:{goVoteCreate:function(){var e=(0,i.default)(regeneratorRuntime.mark((function e(t,n){var r,i,a=arguments;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return r=a.length>2&&void 0!==a[2]?a[2]:"up",e.next=3,this.$api.goVoteCreate({id:t.id,type:n,value:r});case 3:if(i=e.sent,this.$u.toast(i.msg),i.code){e.next=7;break}return e.abrupt("return");case 7:t.vote=r,t.voteup=i.data.voteup;case 9:case"end":return e.stop()}}),e,this)})));function t(t,n){return e.apply(this,arguments)}return t}(),goVoteDelete:function(){var e=(0,i.default)(regeneratorRuntime.mark((function e(t,n){var r,i,a=arguments;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return r=a.length>2&&void 0!==a[2]?a[2]:"up",e.next=3,this.$api.goVoteDelete({id:t.id,type:n,value:r});case 3:if(i=e.sent,this.$u.toast(i.msg),i.code){e.next=7;break}return e.abrupt("return");case 7:t.voteup=i.data.voteup,t.vote="";case 9:case"end":return e.stop()}}),e,this)})));function t(t,n){return e.apply(this,arguments)}return t}()}};t.vote=s;var c={methods:{goAttentionCreate:function(){var e=(0,i.default)(regeneratorRuntime.mark((function e(t,n,r){var i;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,this.$api.goAttentionCreate({id:t.id,type:n});case 2:if(i=e.sent,this.$u.toast(i.msg),i.code){e.next=6;break}return e.abrupt("return");case 6:t.followed=!0,"function"==typeof r&&r();case 9:case"end":return e.stop()}}),e,this)})));function t(t,n,r){return e.apply(this,arguments)}return t}(),goAttentionDelete:function(){var e=(0,i.default)(regeneratorRuntime.mark((function e(t,n){var r,i,a=arguments;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return r=a.length>2&&void 0!==a[2]?a[2]:function(){},e.next=3,this.$api.goAttentionDelete({id:t.id,type:n});case 3:if(i=e.sent,this.$u.toast(i.msg),i.code){e.next=7;break}return e.abrupt("return");case 7:t.followed=!1,"function"==typeof r&&r();case 10:case"end":return e.stop()}}),e,this)})));function t(t,n){return e.apply(this,arguments)}return t}()}};t.attention=c;var u={methods:{clickSwiper:function(e){var t=this.vuex_config.blockList[e].url;if("/"!=t&&t){if(-1!=t.indexOf("http"))return this.$u.vuex("vuex_web",this.vuex_config.blockList[e]),void this.$Router.push("/pages/webview/webview");"p"==t.substr(0,1)&&(t="/"+t),this.$u.route({url:t})}}}};t.swipers=u;var l={methods:{getStyle:function(e){var t={},n={},r=e.split("|");return r.forEach((function(e){if("b"==e&&(n.fontWeight="bold"),"u"==e&&(t.textDecoration="underline"),-1!=e.indexOf("#")){var r=e.split(",");n.backgroundImage="linear-gradient(90deg,".concat(r[0]," 0%, ").concat(r[1]?r[1]:r[0]," 100%)"),n.textFillColor="transparent"}})),[t,n]},setStyle:function(e){if(e.style){var t=this.getStyle(e.style);e.styleArray=t[1],e.underline=t[0]}else e.styleArray={},e.underline={}}}};t.styleRest=l;var d={methods:{navigateTag:function(e,t){this.$u.route("/pages/tag/detail?id=".concat(e,"&type=").concat(t))}}};t.tagClick=d;var h={methods:{success:function(){var e=(0,i.default)(regeneratorRuntime.mark((function e(t){var n,r,i=arguments;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return i.length>1&&void 0!==i[1]?i[1]:1,e.next=3,this.$api.getUserIndex({id:t});case 3:if(n=e.sent,n.code){e.next=7;break}return this.$u.toast(n.msg),e.abrupt("return");case 7:if(this.$u.vuex("vuex_user",n.data.user),this.$u.vuex("vuex_isAdmin",n.data.isAdmin),r=uni.getStorageSync("last_page"),!r){e.next=13;break}return uni.reLaunch({url:r.path+this.$u.queryParams(r.query,!0,"indices"),complete:function(e){}}),e.abrupt("return");case 13:uni.reLaunch({url:"/pages/index/index"});case 14:case"end":return e.stop()}}),e,this)})));function t(t){return e.apply(this,arguments)}return t}(),goToAuth:function(){var e=this;return(0,i.default)(regeneratorRuntime.mark((function t(){var n,r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return n="",n=""!=window.location.hash?window.location.origin+window.location.pathname+"?hashpath=/pages/login/auth":window.location.origin+window.location.pathname.replace(/pages.*/,"pages/login/auth"),t.next=5,e.$api.getAuthUrl({platform:"wechat",url:n});case 5:if(r=t.sent,r.code){t.next=9;break}return e.$u.toast(r.msg),t.abrupt("return");case 9:window.location.href=r.data;case 10:case"end":return t.stop()}}),t)})))()}}};t.login=h},5469:function(e,t,n){"use strict";n.r(t);var r=n("b60b"),i=n.n(r);for(var a in r)"default"!==a&&function(e){n.d(t,e,(function(){return r[e]}))}(a);t["default"]=i.a},"5a22":function(e,t,n){var r=n("24fb");t=r(!1),t.push([e.i,"uni-page-body[data-v-ed756eda]{background-color:#fff}.login[data-v-ed756eda]{padding:%?80?% %?100?% 0 %?100?%}.other[data-v-ed756eda]{position:absolute;width:100%;left:0;bottom:%?40?%}body.?%PAGE?%[data-v-ed756eda]{background-color:#fff}",""]),e.exports=t},"5dc9":function(e,t,n){"use strict";n.r(t);var r=n("f2fe"),i=n.n(r);for(var a in r)"default"!==a&&function(e){n.d(t,e,(function(){return r[e]}))}(a);t["default"]=i.a},7480:function(e,t,n){"use strict";var r=n("b06b"),i=n.n(r);i.a},"7bc8":function(e,t,n){"use strict";var r=n("2dea"),i=n.n(r);i.a},"91a6":function(e,t,n){var r=n("24fb");t=r(!1),t.push([e.i,'@charset "UTF-8";\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 项目场景相关 */.u-checkbox[data-v-326f4b11]{display:-webkit-inline-box;display:-webkit-inline-flex;display:inline-flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;overflow:hidden;-webkit-user-select:none;user-select:none;line-height:1.8}.u-checkbox__icon-wrap[data-v-326f4b11]{color:#606266;-webkit-box-flex:0;-webkit-flex:none;flex:none;display:-webkit-flex;\ndisplay:-webkit-box;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;\n-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;box-sizing:border-box;width:%?42?%;height:%?42?%;color:transparent;text-align:center;-webkit-transition-property:color,border-color,background-color;transition-property:color,border-color,background-color;font-size:20px;border:1px solid #c8c9cc;-webkit-transition-duration:.2s;transition-duration:.2s}.u-checkbox__icon-wrap--circle[data-v-326f4b11]{border-radius:100%}.u-checkbox__icon-wrap--square[data-v-326f4b11]{border-radius:%?6?%}.u-checkbox__icon-wrap--checked[data-v-326f4b11]{color:#fff;background-color:#2979ff;border-color:#2979ff}.u-checkbox__icon-wrap--disabled[data-v-326f4b11]{background-color:#ebedf0;border-color:#c8c9cc}.u-checkbox__icon-wrap--disabled--checked[data-v-326f4b11]{color:#c8c9cc!important}.u-checkbox__label[data-v-326f4b11]{word-wrap:break-word;margin-left:%?10?%;margin-right:%?24?%;color:#606266;font-size:%?30?%}.u-checkbox__label--disabled[data-v-326f4b11]{color:#c8c9cc}',""]),e.exports=t},a96a:function(e,t,n){"use strict";n.d(t,"b",(function(){return i})),n.d(t,"c",(function(){return a})),n.d(t,"a",(function(){return r}));var r={uIcon:n("2e9b").default},i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-uni-view",{staticClass:"u-checkbox",style:[e.checkboxStyle]},[n("v-uni-view",{staticClass:"u-checkbox__icon-wrap",class:[e.iconClass],style:[e.iconStyle],on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.toggle.apply(void 0,arguments)}}},[n("u-icon",{staticClass:"u-checkbox__icon-wrap__icon",attrs:{name:"checkbox-mark",size:e.checkboxIconSize,color:e.iconColor}})],1),n("v-uni-view",{staticClass:"u-checkbox__label",style:{fontSize:e.$u.addUnit(e.labelSize)},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.onClickLabel.apply(void 0,arguments)}}},[e._t("default")],2)],1)},a=[]},b06b:function(e,t,n){var r=n("91a6");"string"===typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);var i=n("4f06").default;i("2acbcfb0",r,!0,{sourceMap:!1,shadowMode:!1})},b60b:function(e,t,n){"use strict";n("a15b"),n("d81d"),n("a9e3"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r={name:"u-checkbox",props:{name:{type:[String,Number],default:""},shape:{type:String,default:""},value:{type:Boolean,default:!1},disabled:{type:[String,Boolean],default:""},labelDisabled:{type:[String,Boolean],default:""},activeColor:{type:String,default:""},iconSize:{type:[String,Number],default:""},labelSize:{type:[String,Number],default:""},size:{type:[String,Number],default:""}},data:function(){return{parentDisabled:!1,newParams:{}}},created:function(){this.parent=this.$u.$parent.call(this,"u-checkbox-group"),this.parent&&this.parent.children.push(this)},computed:{isDisabled:function(){return""!==this.disabled?this.disabled:!!this.parent&&this.parent.disabled},isLabelDisabled:function(){return""!==this.labelDisabled?this.labelDisabled:!!this.parent&&this.parent.labelDisabled},checkboxSize:function(){return this.size?this.size:this.parent?this.parent.size:34},checkboxIconSize:function(){return this.iconSize?this.iconSize:this.parent?this.parent.iconSize:20},elActiveColor:function(){return this.activeColor?this.activeColor:this.parent?this.parent.activeColor:"primary"},elShape:function(){return this.shape?this.shape:this.parent?this.parent.shape:"square"},iconStyle:function(){var e={};return this.elActiveColor&&this.value&&!this.isDisabled&&(e.borderColor=this.elActiveColor,e.backgroundColor=this.elActiveColor),e.width=this.$u.addUnit(this.checkboxSize),e.height=this.$u.addUnit(this.checkboxSize),e},iconColor:function(){return this.value?"#ffffff":"transparent"},iconClass:function(){var e=[];return e.push("u-checkbox__icon-wrap--"+this.elShape),1==this.value&&e.push("u-checkbox__icon-wrap--checked"),this.isDisabled&&e.push("u-checkbox__icon-wrap--disabled"),this.value&&this.isDisabled&&e.push("u-checkbox__icon-wrap--disabled--checked"),e.join(" ")},checkboxStyle:function(){var e={};return this.parent&&this.parent.width&&(e.width=this.parent.width,e.flex="0 0 ".concat(this.parent.width)),this.parent&&this.parent.wrap&&(e.width="100%",e.flex="0 0 100%"),e}},methods:{onClickLabel:function(){this.isLabelDisabled||this.isDisabled||this.setValue()},toggle:function(){this.isDisabled||this.setValue()},emitEvent:function(){var e=this;this.$emit("change",{value:!this.value,name:this.name}),setTimeout((function(){e.parent&&e.parent.emitEvent&&e.parent.emitEvent()}),80)},setValue:function(){var e=0;if(this.parent&&this.parent.children&&this.parent.children.map((function(t){t.value&&e++})),1==this.value)this.emitEvent(),this.$emit("input",!this.value);else{if(this.parent&&e>=this.parent.max)return this.$u.toast("最多可选".concat(this.parent.max,"项"));this.emitEvent(),this.$emit("input",!this.value)}}}};t.default=r},e887:function(e,t,n){"use strict";n.d(t,"b",(function(){return i})),n.d(t,"c",(function(){return a})),n.d(t,"a",(function(){return r}));var r={faNavbar:n("4cfc").default,uForm:n("8e67").default,uFormItem:n("797b").default,uInput:n("28f7").default,uCheckbox:n("19d7").default,uButton:n("0162").default,faTabbar:n("1a3a").default},i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-uni-view",{},[n("fa-navbar",{attrs:{title:"登录"}}),n("v-uni-view",{staticClass:"login"},[n("v-uni-view",{staticClass:"u-m-t-50"},[n("u-form",{ref:"uForm",attrs:{model:e.form,rules:e.rules,errorType:e.errorType}},[n("u-form-item",{attrs:{"label-position":e.labelPosition,label:"账号:",prop:"account","left-icon":"account","label-width":"120"}},[n("u-input",{attrs:{border:e.border,placeholder:"邮箱/手机/用户名"},model:{value:e.form.account,callback:function(t){e.$set(e.form,"account",t)},expression:"form.account"}})],1),n("u-form-item",{attrs:{"label-position":e.labelPosition,label:"密码:",prop:"password","left-icon":"lock","label-width":"120"}},[n("u-input",{attrs:{"password-icon":!0,border:e.border,type:"password",placeholder:"请输入密码"},model:{value:e.form.password,callback:function(t){e.$set(e.form,"password",t)},expression:"form.password"}})],1)],1)],1),n("v-uni-view",{staticClass:"u-p-t-30 u-text-center u-flex"},[n("u-checkbox",{attrs:{"active-color":e.theme.bgColor,name:"agree"},model:{value:e.agreeChecked,callback:function(t){e.agreeChecked=t},expression:"agreeChecked"}},[e._v("同意")]),n("v-uni-text",{staticClass:"u-font-30 agree",style:[{color:e.theme.bgColor}]},[n("a",{attrs:{href:"http://app.whdaka.com//agreement/privacy.html"}},[e._v("《隐私政策》")]),e._v("及"),n("a",{attrs:{href:"http://app.whdaka.com//agreement/service.html"}},[e._v("《用户协议》")])])],1),n("v-uni-view",{staticClass:"u-m-t-80"},[n("u-button",{attrs:{"hover-class":"none",type:"primary","custom-style":{backgroundColor:e.theme.bgColor,color:e.theme.color},shape:"circle"},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.goLogin.apply(void 0,arguments)}}},[e._v("登录")])],1),n("v-uni-view",{staticClass:"u-flex u-row-between u-tips-color u-m-t-10 u-p-20"},[n("v-uni-view",{on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.goPage(0)}}},[e._v("忘记密码")]),n("v-uni-view",{on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.goPage(1)}}},[e._v("注册账号")])],1)],1),n("fa-tabbar")],1)},a=[]},ee0f:function(e,t,n){"use strict";n.r(t);var r=n("e887"),i=n("5dc9");for(var a in i)"default"!==a&&function(e){n.d(t,e,(function(){return i[e]}))}(a);n("7bc8");var o,s=n("f0c5"),c=Object(s["a"])(i["default"],r["b"],r["c"],!1,null,"ed756eda",null,!1,r["a"],o);t["default"]=c.exports},f2fe:function(e,t,n){"use strict";var r=n("4ea4");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,n("96cf");var i=r(n("1da1")),a=n("4ceb"),o={mixins:[a.login],onLoad:function(){this.$util.isWeiXinBrowser()&&(this.isThreeLogin=!0)},onReady:function(){this.$refs.uForm.setRules(this.rules)},data:function(){return{labelPosition:"top",border:!1,errorType:["message"],agreeChecked:!1,form:{account:"",password:""},rules:{account:[{required:!0,message:"请输入账号",trigger:["change","blur"]}],password:[{required:!0,message:"请输入密码",trigger:"change"}]},isThreeLogin:!1}},methods:{goPage:function(e){var t=["/pages/login/forgetpwd","/pages/login/register"];this.$Router.push(t[e])},goThreeLogin:function(){var e=(0,i.default)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:this.$util.isWeiXinBrowser()&&this.goToAuth();case 1:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}(),goLogin:function(){var e=this;this.agreeChecked?this.$refs.uForm.validate(function(){var t=(0,i.default)(regeneratorRuntime.mark((function t(n){var r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(!n){t.next=12;break}return e.vuex_wx_uid&&(e.form.wx_user_id=e.vuex_wx_uid),t.next=4,e.$api.getLogin(e.form);case 4:if(r=t.sent,r.code){t.next=8;break}return e.$u.toast(r.msg),t.abrupt("return");case 8:e.$u.vuex("vuex_token",r.data.token),e.success(r.data.user_id,2),t.next=13;break;case 12:e.$u.toast("验证失败");case 13:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()):this.$u.toast("请阅读并同意遵守《隐私政策》及《用户协议》")}}};t.default=o}}]);